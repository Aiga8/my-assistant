# -*- coding: utf-8 -*-
import re
path = r"c:\Users\a.suleimenova_rogii\Documents\my AI Assistant\my-assistant\tasks\QAA-6369"
with open(path + r"\testrail-section-6277-subtree-cases.md", "r", encoding="utf-8") as f:
    lines = [l for l in f if l.startswith("- TR#")]
OBS = {"122024", "122012", "122025", "122013", "285664", "285665"}
ER = {"143448", "287329"}
STEPS = {"320950", "320951", "320952", "320953", "320954", "320955"}
PARTIAL = {"122002", "122003", "122017", "122018", "285656", "285657", "423970", "434557", "434540"}
def esc(s):
    return (s or "").replace("|", "\\|").replace("\n", " ")
def status(id, title):
    if id in OBS: return ("5. Устарел", "Open dashboards / одна вкладка — не актуально (DS-9914)")
    if id in ER: return ("3. Обновить ER", "Sticky последней колонки / text wrapping — изменить ожидания" if id == "143448" else "Таблица заголовков — текст не переносится")
    if id in STEPS: return ("2. Обновить шаги", "Action column / Paste Row → контекстное меню (DS-10818)")
    if id in PARTIAL:
        if id in {"122002","122003","122017","122018","285656","285657"}: return ("4. Частично", "Monitoring/Analytics zone — проверить шаги под UI без зон (DS-9914)")
        if id == "423970": return ("4. Частично", "drillspot-settings — уточнить под Workspace (DS-9914)")
        return ("4. Частично", "Feature flag / Ribbon — уточнить при снятом флаге (DS-10818)")
    return ("1. Актуален", "")
rows = []
for l in lines:
    m = re.match(r"- TR#(\d+) \(section \d+\): (.+)$", l.rstrip())
    if not m: continue
    id_, title = m.group(1), m.group(2).strip()
    s, c = status(id_, title)
    rows.append("{} | {} | {} | {}".format(id_, esc(title), s, esc(c)))
out = "Test ID | Title | Status | Комментарий\n--- | --- | --- | ---\n" + "\n".join(rows)
with open(path + r"\Survey_Spreadsheets_section6277_full_analysis.md", "w", encoding="utf-8") as f:
    f.write(out)
print("Written", len(rows), "rows")
