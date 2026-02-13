#!/usr/bin/env node
/**
 * Universal autotest → TestRail mapping.
 * Use for any area: geotarget, trajectory, BHA, routing, etc.
 *
 * Usage (from repo root):
 *   node modules/01-autotest-coverage/map_autotests_to_testrail.mjs --input <path-to-descriptions.md> --cases <path-to-testrail-export.json> [--out-base <base-path>]
 *
 * Input MD format: blocks separated by "---", each block has:
 *   ### <number>. <title>
 *   **Шаги:** ... **Ожидаемый результат:** ...
 *   - Название теста: ...
 *   - Путь: ...
 */

import fs from "node:fs";
import path from "node:path";

const VISUAL_IGNORE = new Set([
  "screenshot",
  "snapshot",
  "visual",
  "pixel",
  "compare",
  "comparison",
  "baseline",
  "golden",
  "эталон",
  "скриншот",
  "скриншотом",
  "скриншота",
  "скриншоте",
  "визуальное",
  "визуальный",
  "визуально",
  "сравнение",
  "сравнить",
  "сравнивать",
]);

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "to", "of", "in", "on", "for", "with", "via",
  "after", "before", "is", "are", "be", "as", "by", "from", "at", "into", "it",
  "this", "that", "should",
  "и", "или", "в", "во", "на", "по", "для", "с", "со", "без", "после", "до",
  "при", "как", "что", "это", "к", "из", "уже", "не", "нужно", "когда", "только", "все", "всё",
]);

// RU→EN synonym expansion for overlap between RU descriptions and EN TestRail cases.
const RU_EN = new Map([
  ["скважина", ["well"]],
  ["скважины", ["well"]],
  ["скважину", ["well"]],
  ["скважине", ["well"]],
  ["активной", ["active"]],
  ["активная", ["active"]],
  ["активный", ["active"]],
  ["переключение", ["switch", "switching", "change"]],
  ["переключиться", ["switch", "change"]],
  ["переключить", ["switch", "change"]],
  ["переключении", ["switching", "change"]],
  ["отображение", ["display", "render"]],
  ["отображается", ["displayed", "shown", "rendered"]],
  ["отобразить", ["display", "show", "render"]],
  ["открыть", ["open"]],
  ["открытие", ["open"]],
  ["прямой", ["direct"]],
  ["ссылке", ["link"]],
  ["ссылка", ["link"]],
  ["параметром", ["parameter", "param"]],
  ["параметр", ["parameter", "param"]],
  ["виджет", ["widget"]],
  ["сцена", ["scene"]],
  ["сценой", ["scene"]],
  ["масштабирование", ["zoom"]],
  ["поворот", ["rotation", "rotate"]],
  ["панорамирование", ["pan", "panning"]],
  ["траектория", ["trajectory"]],
  ["траектории", ["trajectory"]],
  ["стабилизации", ["stabilize", "stabilization"]],
  ["исходном", ["initial", "default"]],
  ["состоянии", ["state"]],
  ["соответствует", ["matches"]],
  ["боковой", ["sidebar"]],
  ["боковая", ["sidebar"]],
  ["панели", ["sidebar", "panel"]],
  ["панель", ["sidebar", "panel"]],
  ["атрибутов", ["attributes"]],
  ["атрибуты", ["attributes"]],
  ["таблиц", ["table"]],
  ["таблица", ["table"]],
  ["таблицу", ["table"]],
  ["таблицы", ["table"]],
  ["съёмки", ["survey"]],
  ["съёмка", ["survey"]],
  ["азимут", ["azimuth"]],
  ["редактирование", ["edit", "editing"]],
  ["изменение", ["edit", "change"]],
  ["перерасчёт", ["recalculation", "recalculate"]],
  ["валидация", ["validation", "validate"]],
  ["строка", ["row"]],
  ["строки", ["row"]],
  ["строку", ["row"]],
  ["колонка", ["column"]],
  ["колонки", ["column"]],
  // Field/units (attribute-level precision)
  ["xsrf", ["xsrf"]],
  ["фут", ["foot", "ft"]],
  ["футовый", ["foot"]],
  ["футах", ["foot", "ft"]],
  ["единицы", ["units"]],
  ["координата", ["coordinate"]],
  ["координаты", ["coordinate"]],
  ["первая", ["first"]],
  ["первой", ["first"]],
  ["конвертация", ["conversion", "convert"]],
  ["конвертации", ["conversion"]],
  ["проект", ["project"]],
  ["проекта", ["project"]],
  ["ysrf", ["ysrf"]],
]);

function sanitize(s) {
  return String(s ?? "").replace(/\r/g, "").trim();
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2), "utf8");
}

function writeText(p, txt) {
  fs.writeFileSync(p, txt, "utf8");
}

function tokenize(text) {
  const raw = sanitize(text)
    .toLowerCase()
    .replace(/[`"'(),.:[\]{}<>!?/\\|+=_*—–-]+/g, " ")
    .replace(/\s+/g, " ");

  const tokens = raw
    .split(" ")
    .map((t) => t.trim())
    .filter(Boolean)
    .filter((t) => t.length >= 2)
    .filter((t) => !STOPWORDS.has(t))
    .filter((t) => !VISUAL_IGNORE.has(t));

  const expanded = [];
  for (const t of tokens) {
    expanded.push(t);
    const extra = RU_EN.get(t);
    if (extra) expanded.push(...extra);
  }
  return expanded;
}

function keywords(text) {
  return new Set(tokenize(text));
}

const SCORING_IGNORE = new Set([
  "display", "displayed", "show", "shown", "render", "rendered",
  "open", "matches", "match", "state", "scene", "view", "widget",
]);

function buildDocFreq(caseIndex) {
  const df = new Map();
  for (const ci of caseIndex) {
    for (const t of ci.tokens) {
      df.set(t, (df.get(t) || 0) + 1);
    }
  }
  return df;
}

function tokenWeight(token, df) {
  const d = df.get(token) || 0;
  return 1 / Math.sqrt(1 + d);
}

function weightedOverlapScore(testTokens, caseTokens, df) {
  let denom = 0;
  let num = 0;
  for (const t of testTokens) {
    if (SCORING_IGNORE.has(t)) continue;
    const w = tokenWeight(t, df);
    denom += w;
    if (caseTokens.has(t)) num += w;
  }
  if (!denom) return 0;
  return num / denom;
}

function pickShared(aSet, bSet, max = 10) {
  const out = [];
  for (const t of aSet) if (bSet.has(t)) out.push(t);
  out.sort((x, y) => x.localeCompare(y));
  return out.slice(0, max);
}

function scoreToLabel(score) {
  if (score >= 0.6) return "High";
  if (score >= 0.3) return "Medium";
  return "Low";
}

/** Parse MD file with autotest descriptions (Stage 1 output format). */
function parseAutotestDescriptionsMd(md) {
  const text = md.replace(/\r/g, "");
  const parts = text.split(/\n---\n/g).map((p) => p.trim()).filter(Boolean);
  const tests = [];

  for (const part of parts) {
    const mTitle = part.match(/^###\s+(\d+)\.\s+(.+)$/m);
    if (!mTitle) continue;
    const sourceId = Number(mTitle[1]);
    const title = sanitize(mTitle[2]);

    const testName = sanitize(
      part.match(/^\-\s+Название теста:\s*(.+)$/m)?.[1] ?? ""
    );
    const testPath = sanitize(part.match(/^\-\s+Путь:\s*(.+)$/m)?.[1] ?? "");

    const stepsBlock = part.match(/^\*\*Шаги:\*\*\n([\s\S]*?)^\*\*/m)?.[1] ?? "";
    const expectedBlock =
      part.match(/^\*\*Ожидаемый результат:\*\*\n([\s\S]*?)^\*\*/m)?.[1] ?? "";

    const steps = sanitize(stepsBlock);
    const expected = sanitize(expectedBlock);
    const descriptionLine =
      sanitize(part.split("\n").find((l) => l && !l.startsWith("#") && !l.startsWith("---")) ?? "");

    tests.push({
      sourceId: Number.isFinite(sourceId) ? sourceId : null,
      title,
      description: descriptionLine,
      steps,
      expected,
      autotest: { path: testPath, testName },
    });
  }

  return tests;
}

function caseToText(c) {
  const title = sanitize(c.title);
  const sectionId = c.section_id ?? "";
  const preconds = sanitize(c.custom_preconds ?? "");
  const steps =
    typeof c.custom_steps_separated === "string"
      ? c.custom_steps_separated
      : Array.isArray(c.custom_steps_separated)
        ? c.custom_steps_separated
            .map((s) => `${sanitize(s?.content)} ${sanitize(s?.expected)}`.trim())
            .join(" ")
        : "";
  const refs = sanitize(c.refs);
  return `section ${sectionId} ${title} ${preconds} ${steps} ${refs}`.trim();
}

/**
 * Title boost: match test tokens with case title (and optionally full case text for entity type).
 * Priority order: (1) entity type (well | typewell | well plan), (2) attribute (XSRF, Azimuth, …), (3) domain tokens.
 * When caseTextForEntity is passed, entity-type checks use it (so preconds/steps can contain "Typewell" etc.).
 */
function titleBoost(testTokens, caseTitle, caseTextForEntity = null) {
  const c = (caseTitle || "").toLowerCase();
  const cFull = (caseTextForEntity || caseTitle || "").toLowerCase();
  let boost = 0;

  const hasWell = testTokens.has("well");
  const hasSwitch =
    testTokens.has("switch") || testTokens.has("switching") ||
    testTokens.has("change") || testTokens.has("changing");

  // Domain heuristic (e.g. geotarget-era): well switch + trajectory display — strengthens match when case title aligns.
  if (hasWell && hasSwitch && c.includes("trajectory") && c.includes("chang") && c.includes("well")) {
    boost += 0.45;
  }

  if (testTokens.has("auto") && testTokens.has("center") && c.includes("auto") && c.includes("center"))
    boost += 0.12;
  if (testTokens.has("active") && hasWell && c.includes("active") && c.includes("well")) boost += 0.08;
  if ((testTokens.has("interaction") || testTokens.has("interactions")) && c.includes("interaction"))
    boost += 0.05;
  if (c.startsWith("3d view")) boost += 0.05;

  // Priority 1: entity type (well | typewell | well plan). Check title + preconds/steps so 285686 (Typewell in preconds) matches.
  const hasTypewell = testTokens.has("typewell");
  const hasWellPlan = testTokens.has("well") && testTokens.has("plan") && !hasTypewell;
  const hasWellbore = testTokens.has("wellbore");
  const caseHasTypewell = cFull.includes("typewell");
  const caseHasWellPlan = cFull.includes("well plan") || cFull.includes("wellplan");
  const caseHasWellOnly = cFull.includes("well") && !cFull.includes("typewell") && !caseHasWellPlan;

  if (hasTypewell && caseHasTypewell) boost += 0.30;
  if (hasWellPlan && caseHasWellPlan) boost += 0.30;
  if (hasWellbore && caseHasWellOnly) boost += 0.30;

  // Priority 2: attribute (XSRF, YSRF, Azimuth, etc.) — then general domain tokens
  const domainPairs = [
    ["trajectory", "trajectory"],
    ["sidebar", "sidebar"],
    ["attributes", "attributes"],
    ["table", "table"],
    ["survey", "survey"],
    ["azimuth", "azimuth"],
    ["typewell", "typewell"],
    ["wellbore", "wellbore"],
    ["well plan", "well plan"],
    ["xsrf", "xsrf"],
    ["foot", "foot"],
    ["ft", "ft"],
    ["units", "units"],
  ];
  for (const [token, substr] of domainPairs) {
    if (testTokens.has(token) && c.includes(substr)) boost += 0.06;
  }

  // Attribute-level: strong boost when test and case both mention same field (XSRF, YSRF, FOOT, etc.)
  if (testTokens.has("xsrf") && c.includes("xsrf")) boost += 0.22;
  if (testTokens.has("ysrf") && c.includes("ysrf")) boost += 0.22;
  if ((testTokens.has("foot") || testTokens.has("ft")) && (c.includes("foot") || c.includes("ft"))) boost += 0.15;

  // Entity + attribute: extra boost when same entity and same attribute (e.g. well plan + XSRF) so 153763 beats 154653 (well plan + Vertical)
  if (hasWellPlan && caseHasWellPlan && testTokens.has("xsrf") && cFull.includes("xsrf")) boost += 0.18;
  if (hasWellPlan && caseHasWellPlan && testTokens.has("ysrf") && cFull.includes("ysrf")) boost += 0.18;

  return boost;
}

function functionalCoreTokens(test) {
  const titleTokens = tokenize(test.autotest.testName || test.title);
  const stepTokens = tokenize(test.steps);
  const important = new Set();
  const whitelist = new Set(["3d", "md", "ss"]);

  const addSome = (arr, max) => {
    for (const t of arr) {
      if (important.size >= max) break;
      if (t.length >= 3 || whitelist.has(t)) important.add(t);
    }
  };
  addSome(titleTokens, 8);
  addSome(stepTokens, 12);
  const tooGeneric = new Set(["widget", "виджет", "page", "странице", "открыть", "open"]);
  for (const g of tooGeneric) important.delete(g);
  return important;
}

/** Infer domain tokens from path and content so EN TestRail cases match (improves recall). */
function augmentTestTokens(test, tokenSet) {
  const pathLower = (test.autotest.path || "").toLowerCase();
  const hasWell = tokenSet.has("well");
  const hasSwitch =
    tokenSet.has("switch") || tokenSet.has("switching") || tokenSet.has("change") || tokenSet.has("changing");

  if (hasWell && hasSwitch) {
    tokenSet.add("trajectory");
    tokenSet.add("center");
    tokenSet.add("centering");
    tokenSet.add("auto");
    tokenSet.add("changing");
  }

  const hasScene = tokenSet.has("scene") || tokenSet.has("interaction") || tokenSet.has("interactions");
  if (hasScene) {
    tokenSet.add("zoom");
    tokenSet.add("rotation");
    tokenSet.add("rotate");
    tokenSet.add("pan");
    tokenSet.add("panning");
  }

  if (tokenSet.has("direct") && tokenSet.has("link")) {
    tokenSet.add("url");
    tokenSet.add("parameter");
    tokenSet.add("param");
  }

  // Infer from path (any area)
  if (pathLower.includes("trajectory")) {
    tokenSet.add("trajectory");
    if (pathLower.includes("attribute")) tokenSet.add("attributes");
    if (pathLower.includes("table")) tokenSet.add("table");
    if (pathLower.includes("survey")) tokenSet.add("survey");
    if (pathLower.includes("azimuth")) tokenSet.add("azimuth");
    if (pathLower.includes("well-fields")) tokenSet.add("sidebar");
  }
  if (pathLower.includes("geotarget")) tokenSet.add("geotarget");
  if (pathLower.includes("bha-import")) tokenSet.add("bha");
  if (pathLower.includes("routing")) tokenSet.add("routing");

  // Attribute/units: if test text already has xsrf/foot/ft, ensure they're in set (no-op); if description mentions FOOT/фут/units, add for overlap
  if (tokenSet.has("xsrf") || tokenSet.has("ysrf")) tokenSet.add("trajectory");
  if (tokenSet.has("foot") || tokenSet.has("ft") || tokenSet.has("units")) {
    tokenSet.add("foot");
    tokenSet.add("ft");
  }

  return tokenSet;
}

function decideStatus(topCandidates, coreTokens) {
  const top = topCandidates[0];
  if (!top) return { status: "Not found", note: "No candidates" };

  if (top.score >= 0.6) return { status: "Covered", note: "Single strong match (>=60%)" };

  const medium = topCandidates.filter((c) => c.score >= 0.3 && c.score < 0.6);
  if (medium.length >= 2) return { status: "Partial", note: "2–3 close matches (30–60%)" };

  if (coreTokens.size) {
    const coreHits = [];
    for (const cand of topCandidates.slice(0, 5)) {
      const hits = [...coreTokens].filter((t) => cand.caseTokens.has(t));
      coreHits.push({ cand, hits });
    }
    coreHits.sort((a, b) => b.hits.length - a.hits.length);
    const bestCore = coreHits[0];
    if (bestCore && bestCore.hits.length >= Math.min(2, coreTokens.size)) {
      return {
        status: "Partial",
        note: `Functional core matched (${bestCore.hits.length}/${coreTokens.size} core tokens)`,
      };
    }
  }

  return { status: "Not found", note: "No strong/partial candidates" };
}

function buildMarkdownReport(items, meta) {
  const lines = [];
  lines.push(`# Autotests → TestRail mapping`);
  lines.push("");
  lines.push(`Generated: ${meta.generatedAt}`);
  lines.push(`Project: ${meta.projectId}`);
  lines.push(`Search scope: section ${meta.sectionId} (including all child sections via direct API export)`);
  lines.push(`Cases in scope: ${meta.casesInScope}`);
  lines.push(`Input: ${meta.sourceInput}`);
  lines.push("");

  for (const item of items) {
    const n = item.sourceId ?? item.id;
    lines.push(`### ${n}. ${item.title}`);
    lines.push("");
    lines.push("Автотест:");
    lines.push("");
    lines.push(`- Путь: ${item.autotest.path}`);
    lines.push(`- Название теста: ${item.autotest.testName}`);
    lines.push("");
    lines.push("Найдено в TestRail:");
    lines.push("");
    if (!item.testrail.length) {
      lines.push(`- Best match: —`);
    } else {
      const best = item.testrail[0];
      lines.push(
        `- Best match: TR#${best.caseId} — ${best.title} (релевантность: ${best.score})`
      );
      for (const alt of item.testrail.slice(1)) {
        lines.push(`- Alternate: TR#${alt.caseId} — ${alt.title} (релевантность: ${alt.score})`);
      }
    }
    lines.push("");
    lines.push("Обоснование:");
    lines.push("");
    lines.push(`- ${item.statusNote}`);
    for (const r of item.testrail) {
      lines.push(`- TR#${r.caseId}: ${r.reason}`);
    }
    lines.push("");
    lines.push(`Статус маппинга: ${item.status}`);
    lines.push("");
  }

  return lines.join("\n");
}

/** Suggest tags from autotest path (bonus only, does not affect mapping). */
function suggestedTagsForAutotestPath(p) {
  const s = String(p || "").toLowerCase();
  const tags = ["@regression"];
  if (s.includes("trajectory")) tags.push("@trajectory");
  else if (s.includes("/geotarget/")) tags.push("@geotarget");
  else if (s.includes("/tabs/rigs.")) tags.push("@rigs");
  else if (s.includes("/routing/")) tags.push("@routing");
  else if (s.includes("/tabs/")) tags.push("@tabs");
  else if (s.includes("/bha-import/")) tags.push("@bha");
  else if (s.includes("/ws-")) tags.push("@realtime");
  return tags;
}

function defaultDateSuffix() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = String(d.getFullYear()).slice(-2);
  return `${day}_${month}_${year}`;
}

async function main() {
  const argv = process.argv.slice(2);
  const getArg = (name, def = null) => {
    const i = argv.indexOf(name);
    if (i === -1) return def;
    return argv[i + 1] ?? def;
  };

  const inMd = getArg("--input");
  const inExport = getArg("--cases");
  const dd = getArg("--dd", defaultDateSuffix());
  const resultsDir = path.join("results", "01-autotest-coverage");
  const outBase = getArg(
    "--out-base",
    path.join(resultsDir, `autotest-testrail-mapping-${dd}`)
  );

  if (!inMd || !inExport) {
    console.error("Usage: node modules/01-autotest-coverage/map_autotests_to_testrail.mjs --input <descriptions.md> --cases <testrail-export.json> [--out-base <path>]");
    process.exit(1);
  }

  const outMd = `${outBase}.md`;
  const outJson = `${outBase}.json`;

  if (!fs.existsSync(inExport)) throw new Error(`Missing export file: ${inExport}`);
  if (!fs.existsSync(inMd)) throw new Error(`Missing input md file: ${inMd}`);

  const exportData = readJson(inExport);
  const cases = exportData.cases || [];

  const mdText = fs.readFileSync(inMd, "utf8");
  const tests = parseAutotestDescriptionsMd(mdText);

  const caseIndex = cases.map((c) => {
    const text = caseToText(c);
    return {
      case: c,
      text,
      tokens: keywords(text),
    };
  });
  const df = buildDocFreq(caseIndex);

  const results = [];

  for (let i = 0; i < tests.length; i++) {
    const t = tests[i];
    const id = i + 1;

    const tText = `${t.title}\n${t.description}\n${t.steps}\n${t.expected}\n${t.autotest.testName}`;
    const tTokens = augmentTestTokens(t, keywords(tText));
    const coreTokens = functionalCoreTokens(t);

    const scored = caseIndex
      .map((ci) => {
        const base = weightedOverlapScore(tTokens, ci.tokens, df);
        const score = Math.min(1, base + titleBoost(tTokens, ci.case.title, ci.text));
        return {
          caseId: ci.case.id,
          title: sanitize(ci.case.title),
          sectionId: ci.case.section_id,
          score,
          scoreLabel: scoreToLabel(score),
          shared: pickShared(tTokens, ci.tokens, 10),
          caseTokens: ci.tokens,
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    const statusDecision = decideStatus(scored, coreTokens);

    const mapped = scored
      .filter((c) => c.score >= 0.3 || statusDecision.status === "Partial")
      .map((c) => ({
        caseId: String(c.caseId),
        title: c.title,
        score: c.scoreLabel,
        reason:
          c.shared.length > 0
            ? `Shared keywords: ${c.shared.join(", ")}`
            : "Low textual overlap; included for review",
      }));

    const item = {
      id,
      sourceId: t.sourceId ?? null,
      title: t.title,
      autotest: t.autotest,
      testrail: mapped,
      status: statusDecision.status,
      statusNote: statusDecision.note,
      tagsSuggested: suggestedTagsForAutotestPath(t.autotest.path),
    };
    results.push(item);
  }

  const meta = {
    generatedAt: new Date().toISOString(),
    projectId: exportData?.meta?.projectId ?? null,
    sectionId: exportData?.meta?.rootSectionId ?? null,
    casesInScope: cases.length,
    sourceExport: inExport,
    sourceInput: inMd,
  };

  writeText(outMd, buildMarkdownReport(results, meta));
  writeJson(outJson, results);

  console.log(`OK: wrote\n- ${outMd}\n- ${outJson}`);
}

main().catch((e) => {
  console.error(`FAIL: ${e?.message || e}`);
  process.exit(1);
});
