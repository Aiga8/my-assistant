## Autotests review (Playwright)

Дата: 31_01_26  
Файлы в ревью: `tests from solo-rtm/LeftPanel/trace-list.spec.ts`

---

## Проверка соответствия TestRail (если есть caseId/секция)

Показаны **только NOT OK** (OK пункты намеренно не выводятся).

- **Case 61966**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-002 With solo-well/wellbore, without source or mapped traces [61966]`
  - **NOT OK**:
    - Full match: в TR expected включает “При ховере отображается имя трейса”, в автотесте hover‑проверки нет
    - Autotest comment in TR: сейчас `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-002 with wellbore but without mapped traces [61966]`; должен быть `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-002 With solo-well/wellbore, without source or mapped traces [61966]`

- **Case 61967**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-003 With solo-well/wellbore and mapped traces [61967]`
  - **NOT OK**:
    - Autotest comment in TR: сейчас `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-003 with wellbore and partially mapped traces [61967]`; должен быть `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-003 With solo-well/wellbore and mapped traces [61967]`

- **Case 398285**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-004 Opened dashboard with solo-well/wellbore, Directional widget in focus [398285]`
  - **NOT OK**:
    - Full match: в TR для X‑Section/Map ожидается “Чекбоксы доступны для изменения (enabled)” без уточнения, что остальные трейсы disabled; в автотесте дополнительно ожидается `ROP` disabled → риск флейков при валидном UI по TR
    - Autotest comment in TR: сейчас `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-004 Directional widget: Bit Depth association depends on view type [398285]`; должен быть `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-004 Opened dashboard with solo-well/wellbore, Directional widget in focus [398285]`

- **Case 61969**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-005 Opened dashboard with solo-well/wellbore, Numeral widget in focus [61969]`
  - **NOT OK**:
    - Autotest comment in TR: сейчас `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-005 with wellbore and Numeral in focus [61969]`; должен быть `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-005 Opened dashboard with solo-well/wellbore, Numeral widget in focus [61969]`

- **Case 61970**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-006 Open the dashboard and highlight Linear widget without added traces [61970]`
  - **NOT OK**:
    - Autotest comment in TR: сейчас `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-006 Linear widget: highlight without added traces [61970]`; должен быть `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-006 Open the dashboard and highlight Linear widget without added traces [61970]`

- **Case 61971**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-007 Open dashboard and highlight Linear widget with added trace(s) [61971]`
  - **NOT OK**:
    - Autotest comment in TR: сейчас `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-007 Linear widget: highlight with added traces [61971]`; должен быть `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-007 Open dashboard and highlight Linear widget with added trace(s) [61971]`

- **Case 61973**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-008 Open a dashboard and sequentially select several Linear widget tracks with different set of traces in them [61973]`
  - **NOT OK**:
    - Full match: в TR expected — при выборе трека чекбоксы в Trace List включаются согласно набору трейсов в выбранном треке; в автотесте step/смысл “Checkbox state does not change…” и отсутствуют явные ассёрты на смену checked‑состояний при переключении треков
    - Status (`case_status_id = 1`): фактически `case_status_id = 2`
    - Automation (`custom_automation = 2`): фактически `custom_automation = 6`
    - Assigned To (`case_assignedto_id = null`): фактически `case_assignedto_id = 61`
    - Autotest comment in TR: сейчас `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-008 Linear widget: track focus keeps trace checkbox state [61973]`; должен быть `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-008 Open a dashboard and sequentially select several Linear widget tracks with different set of traces in them [61973]`

- **Case 61964**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-009 Get an update from the backend on smapped traces [61964]`
  - **NOT OK**:
    - Autotest comment in TR: сейчас `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-009 Get mapped traces update from backend [61964]`; должен быть `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-009 Get an update from the backend on smapped traces [61964]`

- **Case 61965**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-010 Change the open dashboard via tabs [61965]`
  - **NOT OK**:
    - Autotest comment in TR: сейчас `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-010 Change open dashboard via tabs [61965]`; должен быть `Autotest: tests/LeftPanel/trace-list.spec.ts::TL-010 Change the open dashboard via tabs [61965]`

- **Case 61974**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-012 Receive solo update of solo-well/wellbore deletion [61974]`
  - **NOT OK**:
    - Full match: автотест помечен как `test.skip`, фактически кейс не проверяется прогоном

- **Case 61959**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-013 Privatize Public dashboard [61959]`
  - **NOT OK**:
    - Automation Type (`custom_automation_type = 5`): фактически `custom_automation_type = 0`

- **Case 81108**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-014 Disable of non-mapped Slide Sheet trace [81108]`
  - **NOT OK**:
    - Status (`case_status_id = 1`): фактически `case_status_id = 2`
    - Automation (`custom_automation = 2`): фактически `custom_automation = 1`
    - Automation Type (`custom_automation_type = 5`): фактически `custom_automation_type = 0`
    - Autotest comment in TR: отсутствует строка `Autotest: ...` (в `custom_comments` сейчас только текст про RAC/GTF/MTF/trajectory)

- **Case 81109**:
  - **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-015 Disable of mapped Slide Sheet trace [81109]`
  - **NOT OK**:
    - Status (`case_status_id = 1`): фактически `case_status_id = 2`
    - Automation (`custom_automation = 2`): фактически `custom_automation = 1`
    - Automation Type (`custom_automation_type = 5`): фактически `custom_automation_type = 0`
    - Autotest comment in TR: отсутствует строка `Autotest: ...` (в `custom_comments` сейчас только текст про RAC/GTF/MTF/trajectory)

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

- **1 `test.step` на тест**: соблюдено, это соответствует эталону.
- **Нумерованные asserts**: формат ок, но важно держать их строго в рамках TR expected (без “лишних” проверок).
- **Fail-fast локаторы**: удачный паттерн `toHaveCount(1)` перед кликом (как в `selectDirectionalView`) вместо `.first()/.last()`.
- **Хелперы**: хорошо, что вынесены проверки/действия, но хелперы должны быть “контрактные” (не опираться на внутренние CSS).
- **Ожидания**: событийные ожидания/`expect.poll` предпочтительнее — в файле подход в целом соблюдён.

---

## File review: `tests from solo-rtm/LeftPanel/trace-list.spec.ts`

### Кратко: что хорошо

- **Убрали зависимость от внутренних CSS UI-kit**: `clickControl()` теперь использует `checkbox.check()` вместо кликов по `.uidk-checkbox__mark`.
- **Стабилизировали `selectDirectionalView()`**: добавлены уникальность (`toHaveCount(1)`) и fail-fast проверки вместо слепых `.first()/.last()`.
- **`expectUnmappedTrace()` стал контрактным** (без проверки “количества CSS-классов”).

### Проблемы

#### Critical

- **TL-008 не соответствует TR `61973`**: по смыслу тест сейчас не покрывает ожидаемое поведение кейса (риск ложноположительного “покрытия”).

#### Major

- **`expectTraceListIsDnDAvailable()` содержит неинформативную проверку**:
  - ветка `if (...) { expect(true).toBe(true); }` не является проверкой и не повышает надёжность результата
- **Есть зависимости от text/role вместо `data-testid`** (см. блок `DS-12116`).

#### Minor

- **`clickControl()` всегда делает `check({ force: true })`**: хелпер стал “узким” (не toggle) и `force` может маскировать перекрытия/неактивность.

### Рекомендации

- **TL-008 ↔ TR `61973`**: синхронизировать expected и проверки (либо обновить автотест под TR, либо зафиксировать, что TR требует уточнения/обновления).
- **`expectTraceListIsDnDAvailable()`**: заменить “пустую” ветку на реальную проверку (если `draggable` есть — ассертить, если нет — оставить только gesture‑проверку с понятным критерием).
- **`DS-12116`**: добавить `data-testid` минимум для Messages + элементов Trace List, которые сейчас проверяются через текст/DOM‑атрибуты.

---

## Финальная сводка

- Кол-во файлов: 1
- Critical: 1
- Major: 2
- Minor: 1
- Топ-3 самых важных правки:
  1) Привести TL-008 к TestRail `61973` (сейчас кейс не покрыт по expected)
  2) Починить TR-мету/комментарии `Autotest: ...` для кейсов, где они не соответствуют стандарту
  3) Закрыть `DS-12116` (добавить `data-testid` для Messages + ключевых элементов Trace List)

---

## Следующий шаг

- Внеси правки согласно рекомендациям из отчёта.
- После внесения правок прогони автотест(ы) и проверь, что они проходят успешно.

