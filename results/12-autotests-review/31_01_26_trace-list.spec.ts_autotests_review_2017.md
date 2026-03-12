## Autotests review (Playwright)

Дата: 31_01_26  
Файлы в ревью: `tests from solo-rtm/LeftPanel/trace-list.spec.ts`

---

## Проверка соответствия TestRail (если есть caseId/секция)

Показаны **только NOT OK** (OK пункты намеренно не выводятся).

- **Case 61966**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-002 With solo-well/wellbore, without source or mapped traces [61966]`
  - **NOT OK**:
    - Full match: в TR expected включает “При ховере отображается имя трейса”, в автотесте hover‑проверки имени трейса нет

- **Case 398285**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-004 Opened dashboard with solo-well/wellbore, Directional widget in focus [398285]`
  - **NOT OK**:
    - Full match: в TR для X‑Section/Map ожидается “Чекбоксы доступны для изменения (enabled)” без уточнения, что остальные трейсы disabled; в автотесте дополнительно ожидается `ROP` disabled → риск ложных падений при валидном UI по TR

- **Case 61973**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-008 Open a dashboard and sequentially select several Linear widget tracks with different set of traces in them [61973]`
  - **NOT OK**:
    - Full match: в TR expected — при выборе трека чекбоксы в Trace List включаются согласно набору трейсов в выбранном треке; в автотесте step/смысл “Checkbox state does not change…” и отсутствуют явные ассёрты на смену checked‑состояний при переключении треков

- **Case 61974**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-012 Receive solo update of solo-well/wellbore deletion [61974]`
  - **NOT OK**:
    - Full match: автотест помечен как `test.skip`, фактически кейс не проверяется прогоном

---

## Проверка покрытия задач по `data-testid` (если задачи даны)

Jira: `DS-12116`.

- **Covered by Jira tasks**:
  - **Messages tab**: `page.getByRole('button', { name: 'Messages' })`
  - **Messages empty state**: `page.getByText('Messages not found')`
  - **Mapped status indicators (T/D)**: проверки через `getByText('T'/'D')` внутри trace row
  - **Trace name hover/title**: проверка через поиск `[title]` внутри `trace-list-item-*` (нет явного `data-testid` на name/title‑контейнер)
  - **DnD handle / признак draggable**: проверка через `draggable`/gesture (нет явного `data-testid` на dnd‑handle)

- **Missing in Jira tasks**:
  - **Directional view selector + options**: `getByRole('button', { name: /View$/ })`, `getByRole('button', { name: viewName })`
  - **Linear widget track header: “Add track” button**: `tracks.first().getByRole('button').first().click()`
  - **Privatize flow**: `Save As` / `Save as My Window` / `Save` — локаторы по тексту/role

---

## Рекомендации по стилю/паттернам по итогам изучения эталона

Бейзлайн: `tests from solo-rtm/trajectory/*.spec.ts`, `tests from solo-rtm/Routing/*.spec.ts`.

- **1 `test.step` на тест**: соблюдено.
- **Fail-fast локаторы**: `toHaveCount(1)` перед кликом лучше, чем `.first()/.last()` без гарантий.
- **Хелперы**: хорошо выносить повторяемую логику, но важно избегать “пустых” проверок, которые не валидируют expected.

---

## File review: `tests from solo-rtm/LeftPanel/trace-list.spec.ts`

### Кратко: что хорошо

- **Контрактные действия вместо CSS**: `clickControl()` использует `checkbox.check()` (меньше зависимости от UI-kit).
- **`selectDirectionalView()` стал безопаснее** за счёт fail-fast проверок количества матчей.
- **Статус “unmapped” проверяется контрактно** (по отсутствию `T/D`).

### Проблемы

#### Critical

- **TL-002 не покрывает expected из TR `61966`**: отсутствует проверка “при ховере отображается имя трейса”.
- **TL-008 не соответствует expected из TR `61973`**: тест не проверяет ключевую смену checked‑состояний при переключении треков.
- **TL-012 (`61974`) заскипан**: кейс формально размечен как автоматизированный, но реально не выполняется.

#### Major

- **TL-004 может быть “over-assertive” относительно TR `398285`**: проверка `ROP` disabled в X‑Section/Map не следует из expected и может дать ложные падения.
- **`expectTraceListIsDnDAvailable()` содержит неинформативную ветку**:
  - `if (...) { expect(true).toBe(true); }` — это не проверка условия и не добавляет уверенности в “DnD доступно”.

#### Minor

- **`clickControl()` всегда делает `check({ force: true })`**: `force` может маскировать перекрытия/неактивность; хелпер по контракту не поддерживает toggle/uncheck.

### Рекомендации

- **TL-002 ↔ TR `61966`**: добавить явную hover‑проверку имени трейса (аналогично TL‑001).
- **TL-008 ↔ TR `61973`**: синхронизировать expected и проверки (нужны явные ассёрты на изменения checked‑состояний при переключении треков).
- **TL-012 ↔ TR `61974`**: либо сделать тест детерминированным и убрать `skip`, либо пометить TR (Automation/коммент) так, чтобы не было ложного статуса “автоматизировано”.
- **DnD helper**: заменить “пустую” ветку на реальную проверку (если `draggable` есть — ассертить наличие; если нет — оставить один понятный критерий/проверку).

---

## Финальная сводка

- Кол-во файлов: 1
- Critical: 3
- Major: 2
- Minor: 1
- Топ-3 самых важных правки:
  1) Привести TL-008 к TestRail `61973` (сейчас кейс не покрыт по expected)
  2) Добавить hover‑проверку имени трейса в TL-002 (`61966`)
  3) Разобраться с `test.skip` для TL-012 (`61974`) — сейчас “автоматизация” не выполняется

---

## Следующий шаг

- Внеси правки согласно рекомендациям из отчёта.
- После внесения правок прогони автотест(ы) и проверь, что они проходят успешно.

