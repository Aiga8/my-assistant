import fs from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = {
    projectId: 5,
    rootSectionId: null,
    outDir: path.join("results", "01-autotest-coverage"),
    limit: 250,
    debug: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--project" || a === "-p") args.projectId = Number(argv[++i]);
    else if (a === "--root-section" || a === "-s") args.rootSectionId = Number(argv[++i]);
    else if (a === "--out" || a === "-o") args.outDir = argv[++i];
    else if (a === "--limit" || a === "-l") args.limit = Number(argv[++i]);
    else if (a === "--debug") args.debug = true;
  }

  if (!args.projectId || Number.isNaN(args.projectId)) {
    throw new Error("Invalid --project value");
  }
  if (!args.rootSectionId || Number.isNaN(args.rootSectionId)) {
    throw new Error("Missing/invalid --root-section value");
  }
  if (!args.limit || Number.isNaN(args.limit)) {
    args.limit = 250;
  }

  return args;
}

function readConfigFromConfigTs() {
  const configPath = path.resolve("config.ts");
  if (!fs.existsSync(configPath)) {
    throw new Error("config.ts not found in workspace root");
  }
  const raw = fs.readFileSync(configPath, "utf8");

  const baseUrl =
    process.env.TESTRAIL_BASE_URL ||
    matchFirst(raw, /baseUrl:\s*['"]([^'"]+)['"]/);
  const username =
    process.env.TESTRAIL_USERNAME ||
    matchFirst(raw, /username:\s*['"]([^'"]+)['"]/);
  const apiKey =
    process.env.TESTRAIL_API_KEY ||
    matchFirst(raw, /password:\s*['"]([^'"]+)['"]/);

  if (!baseUrl || !username || !apiKey) {
    throw new Error(
      "Missing TestRail credentials. Provide TESTRAIL_BASE_URL/TESTRAIL_USERNAME/TESTRAIL_API_KEY env vars or set them in config.ts"
    );
  }

  // Normalize: ensure trailing slash.
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return { baseUrl: normalizedBaseUrl, username, apiKey };
}

function matchFirst(text, re) {
  const m = text.match(re);
  return m?.[1] ?? null;
}

function basicAuthHeader(username, apiKey) {
  return Buffer.from(`${username}:${apiKey}`, "utf8").toString("base64");
}

function joinApiUrl(baseUrl, relativeOrAbsolute) {
  if (!relativeOrAbsolute) return baseUrl;
  if (/^https?:\/\//i.test(relativeOrAbsolute)) return relativeOrAbsolute;
  // TestRail _links.next typically returns something like:
  // - "get_sections/5&limit=250&offset=250"
  // - OR "api/v2/get_sections/5&limit=250&offset=250" (some deployments)
  let rel = relativeOrAbsolute.replace(/^\/+/, "");
  if (baseUrl.includes("/api/v2/") && rel.startsWith("api/v2/")) {
    rel = rel.slice("api/v2/".length);
  }
  return `${baseUrl}${rel}`;
}

async function apiGetJson({ url, authHeader, debug }) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/json",
    },
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(
      `HTTP ${res.status} ${res.statusText} for ${url}\nResponse: ${text.slice(0, 2000)}`
    );
  }
  if (debug) {
    const preview = text.length > 600 ? `${text.slice(0, 600)}...` : text;
    console.log(`[debug] GET ${url}\n${preview}\n`);
  }
  return JSON.parse(text);
}

function extractItemsFromPagedResponse(json, preferredKey) {
  if (Array.isArray(json)) return { items: json, next: null };
  const next = json?._links?.next ?? null;
  const keysToTry = preferredKey ? [preferredKey] : [];
  keysToTry.push("sections", "cases", "projects", "runs");

  for (const k of keysToTry) {
    if (Array.isArray(json?.[k])) return { items: json[k], next };
  }
  // Fallback: if json has exactly one array field, use it.
  const arrayKeys = Object.keys(json || {}).filter((k) => Array.isArray(json[k]));
  if (arrayKeys.length === 1) return { items: json[arrayKeys[0]], next };
  return { items: [], next };
}

async function getAllPages({ baseUrl, authHeader, firstRelative, preferredKey, debug }) {
  const all = [];
  let nextUrl = joinApiUrl(baseUrl, firstRelative);
  let page = 0;

  while (nextUrl) {
    page += 1;
    const json = await apiGetJson({ url: nextUrl, authHeader, debug });
    const { items, next } = extractItemsFromPagedResponse(json, preferredKey);
    all.push(...items);

    // Stop conditions:
    // - If API returns array (no pagination)
    // - If _links.next absent
    if (Array.isArray(json)) break;
    if (!next) break;

    nextUrl = joinApiUrl(baseUrl, next);

    // Gentle throttle to avoid hitting rate-limits on large suites.
    if (page % 5 === 0) await sleep(150);
  }
  return all;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function buildSectionIndex(sections) {
  const byId = new Map();
  const childrenByParent = new Map();
  for (const s of sections) {
    const id = Number(s.id);
    if (!id) continue;
    byId.set(id, s);
    const parentId = s.parent_id ? Number(s.parent_id) : 0;
    if (!childrenByParent.has(parentId)) childrenByParent.set(parentId, []);
    childrenByParent.get(parentId).push(id);
  }
  return { byId, childrenByParent };
}

function collectSubtreeSectionIds(rootId, index) {
  const { childrenByParent, byId } = index;
  if (!byId.has(rootId)) return [];
  const out = [];
  const stack = [rootId];
  const seen = new Set();

  while (stack.length) {
    const id = stack.pop();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push(id);
    const kids = childrenByParent.get(id) || [];
    for (const k of kids) stack.push(k);
  }
  return out;
}

function sanitize(s) {
  return String(s ?? "").replace(/\r/g, "").trim();
}

function formatMd({ projectId, rootSectionId, subtreeSectionIds, sectionsById, cases }) {
  const now = new Date().toISOString();
  const lines = [];
  lines.push(`# TestRail export: project ${projectId}, section subtree ${rootSectionId}`);
  lines.push("");
  lines.push(`Generated: ${now}`);
  lines.push("");
  lines.push(`- Root section: ${rootSectionId} — ${sanitize(sectionsById.get(rootSectionId)?.name)}`);
  lines.push(`- Sections in subtree: ${subtreeSectionIds.length}`);
  lines.push(`- Cases exported: ${cases.length}`);
  lines.push("");
  lines.push("## Sections");
  lines.push("");
  for (const sid of subtreeSectionIds) {
    const s = sectionsById.get(sid);
    lines.push(`- ${sid}: ${sanitize(s?.name)}`);
  }
  lines.push("");
  lines.push("## Cases");
  lines.push("");
  for (const c of cases) {
    const cid = c.id ?? c.case_id ?? "";
    const title = sanitize(c.title);
    const sectionId = c.section_id ?? "";
    lines.push(`- TR#${cid} (section ${sectionId}): ${title}`);
  }
  lines.push("");
  return lines.join("\n");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const { baseUrl, username, apiKey } = readConfigFromConfigTs();
  const authHeader = basicAuthHeader(username, apiKey);

  fs.mkdirSync(args.outDir, { recursive: true });

  // 1) Fetch all sections (paged if supported).
  const sections = await getAllPages({
    baseUrl,
    authHeader,
    firstRelative: `get_sections/${args.projectId}&limit=${args.limit}&offset=0`,
    preferredKey: "sections",
    debug: args.debug,
  });

  const sectionIndex = buildSectionIndex(sections);
  const subtreeSectionIds = collectSubtreeSectionIds(args.rootSectionId, sectionIndex);
  if (!subtreeSectionIds.length) {
    throw new Error(
      `Root section ${args.rootSectionId} not found in get_sections/${args.projectId}. Possibly API requires suite_id for sections in this project.`
    );
  }

  // 2) Fetch cases for each section in subtree (paged).
  const allCases = [];
  for (const sectionId of subtreeSectionIds) {
    const casesInSection = await getAllPages({
      baseUrl,
      authHeader,
      firstRelative: `get_cases/${args.projectId}&section_id=${sectionId}&limit=${args.limit}&offset=0`,
      preferredKey: "cases",
      debug: args.debug,
    });
    for (const c of casesInSection) {
      allCases.push(c);
    }
    await sleep(80);
  }

  const outJsonPath = path.join(
    args.outDir,
    `testrail-section-${args.rootSectionId}-subtree-cases.json`
  );
  const outMdPath = path.join(
    args.outDir,
    `testrail-section-${args.rootSectionId}-subtree-cases.md`
  );

  const payload = {
    meta: {
      generatedAt: new Date().toISOString(),
      projectId: args.projectId,
      rootSectionId: args.rootSectionId,
      sectionsInSubtree: subtreeSectionIds.length,
      casesExported: allCases.length,
      baseUrl,
    },
    subtreeSectionIds,
    sections: subtreeSectionIds
      .map((id) => sectionIndex.byId.get(id))
      .filter(Boolean),
    cases: allCases,
  };

  fs.writeFileSync(outJsonPath, JSON.stringify(payload, null, 2), "utf8");
  fs.writeFileSync(
    outMdPath,
    formatMd({
      projectId: args.projectId,
      rootSectionId: args.rootSectionId,
      subtreeSectionIds,
      sectionsById: sectionIndex.byId,
      cases: allCases,
    }),
    "utf8"
  );

  console.log(
    `OK: sections=${subtreeSectionIds.length}, cases=${allCases.length}\n- ${outMdPath}\n- ${outJsonPath}`
  );
}

main().catch((e) => {
  console.error(`FAIL: ${e?.message || e}`);
  process.exit(1);
});


