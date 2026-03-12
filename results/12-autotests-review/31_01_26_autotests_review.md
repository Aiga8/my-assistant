## Autotests review (Playwright)

Дата: 31_01_26  
Файлы в ревью: `tests from solo-rtm/LeftPanel/trace-list.spec.ts`

---

## Проверка соответствия TestRail (caseId → source of truth)

Формат проверки: `testrail-field-ids.md` + кейсы из TestRail.

### Case 61960

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-001 Dashboard without solo-well/wellbore [61960]`
- **Full match**: OK (все expected из TR отражены: DnD/controls hidden/unmapped+hover/Messages empty)
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: OK

### Case 61966

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-002 With solo-well/wellbore, without source or mapped traces [61966]`
- **Full match**: **NOT OK** (в TR ожидается hover‑проверка имени трейса; в автотесте её нет)
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK**
  - Сейчас: `TL-002 with wellbore but without mapped traces [61966]`
  - Должен быть: `TL-002 With solo-well/wellbore, without source or mapped traces [61966]`

### Case 61967

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-003 With solo-well/wellbore and mapped traces [61967]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK**
  - Сейчас: `TL-003 with wellbore and partially mapped traces [61967]`
  - Должен быть: `TL-003 With solo-well/wellbore and mapped traces [61967]`

### Case 398285

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-004 Opened dashboard with solo-well/wellbore, Directional widget in focus [398285]`
- **Full match**: **NOT OK**
  - В TR для X‑Section/Map: “чекбоксы доступны для изменения (enabled)” без уточнения, что остальные трейсы disabled.
  - В автотесте дополнительно ожидается, что `ROP` disabled в X‑Section/Map → риск флейков при валидном UI по TR.
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK**
  - Сейчас: `TL-004 Directional widget: Bit Depth association depends on view type [398285]`
  - Должен быть: `TL-004 Opened dashboard with solo-well/wellbore, Directional widget in focus [398285]`

### Case 61969

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-005 Opened dashboard with solo-well/wellbore, Numeral widget in focus [61969]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK**
  - Сейчас: `TL-005 with wellbore and Numeral in focus [61969]`
  - Должен быть: `TL-005 Opened dashboard with solo-well/wellbore, Numeral widget in focus [61969]`

### Case 61970

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-006 Open the dashboard and highlight Linear widget without added traces [61970]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK**
  - Сейчас: `TL-006 Linear widget: highlight without added traces [61970]`
  - Должен быть: `TL-006 Open the dashboard and highlight Linear widget without added traces [61970]`

### Case 61971

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-007 Open dashboard and highlight Linear widget with added trace(s) [61971]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK**
  - Сейчас: `TL-007 Linear widget: highlight with added traces [61971]`
  - Должен быть: `TL-007 Open dashboard and highlight Linear widget with added trace(s) [61971]`

### Case 61973

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-008 Open a dashboard and sequentially select several Linear widget tracks with different set of traces in them [61973]`
- **Full match**: **NOT OK (Critical)**
  - TR ожидает, что при выборе трека **состояние чекбоксов в Trace List меняется согласно набору трейсов в выбранном треке**.
  - В автотесте step/нейминг: “Checkbox state does not change…” (по смыслу — противоположное) и нет явных ассёртов, что при выборе Track 2 чекбоксы Track 1 становятся unchecked.
- **Meta**:
  - Status (`case_status_id = 2`): OK
  - Automation (`custom_automation = 2`): **NOT OK** (в TR сейчас `custom_automation = 6`)
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): **NOT OK** (в TR сейчас `case_assignedto_id = 61`)
- **Autotest comment in TR**: **NOT OK**
  - Сейчас: `TL-008 Linear widget: track focus keeps trace checkbox state [61973]`
  - Должен быть: `TL-008 Open a dashboard and sequentially select several Linear widget tracks with different set of traces in them [61973]`

### Case 61964

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-009 Get an update from the backend on smapped traces [61964]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK**
  - Сейчас: `TL-009 Get mapped traces update from backend [61964]`
  - Должен быть: `TL-009 Get an update from the backend on smapped traces [61964]`

### Case 61965

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-010 Change the open dashboard via tabs [61965]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK**
  - Сейчас: `TL-010 Change open dashboard via tabs [61965]`
  - Должен быть: `TL-010 Change the open dashboard via tabs [61965]`

### Case 61961

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-011 Change wellbore in the left panel [61961]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: OK

### Case 61974

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-012 Receive solo update of solo-well/wellbore deletion [61974]`
- **Full match**: **NOT OK** (в автотесте `test.skip`, фактически не исполняется)
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): OK
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: OK (но автотест сейчас skipped)

### Case 61959

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-013 Privatize Public dashboard [61959]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): **NOT OK** (в TR сейчас `case_status_id = 1`)
  - Automation (`custom_automation = 2`): OK
  - Automation Type (`custom_automation_type = 5`): **NOT OK** (в TR сейчас `custom_automation_type = 0`)
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: OK

### Case 81108

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-014 Disable of non-mapped Slide Sheet trace [81108]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): OK
  - Automation (`custom_automation = 2`): **NOT OK** (в TR сейчас `custom_automation = 1`)
  - Automation Type (`custom_automation_type = 5`): **NOT OK** (в TR сейчас `custom_automation_type = 0`)
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK** (в `custom_comments` нет строки `Autotest: ...`)

### Case 81109

- **TR ↔ Autotest mapping**: `tests from solo-rtm/LeftPanel/trace-list.spec.ts::TL-015 Disable of mapped Slide Sheet trace [81109]`
- **Full match**: OK
- **Meta**:
  - Status (`case_status_id = 2`): OK
  - Automation (`custom_automation = 2`): **NOT OK** (в TR сейчас `custom_automation = 1`)
  - Automation Type (`custom_automation_type = 5`): **NOT OK** (в TR сейчас `custom_automation_type = 0`)
  - Type (`type_id = 9`): OK
  - Assigned To (`case_assignedto_id = null`): OK
- **Autotest comment in TR**: **NOT OK** (в `custom_comments` нет строки `Autotest: ...`)

---

## Проверка покрытия задач по `data-testid`

Jira: `DS-12116`.

- **Covered by Jira tasks** (Trace List / Messages — места, где сейчас нет `data-testid` и тесты опираются на text/role/DOM-атрибуты):
  - **Messages tab**: `page.getByRole('button', { name: 'Messages' })`
  - **Messages empty state**: `page.getByText('Messages not found')`
  - **Mapped status indicators**: `getByText('T'/'D')` внутри trace row
  - **Trace name hover**: проверка через поиск `[title]` (сейчас нет явного `data-testid` на name/title‑контейнер)
  - **DnD availability**: проверка через `draggable`/gesture (нет явного test-атрибута на drag handle)

- **Missing in Jira tasks** (не Trace List/Messages, но в этом файле всё ещё есть зависимость от role/text/`.first()`):
  - **Directional view selector + options** (`selectDirectionalView`, `getByRole('button', { name: /View$/ })`, `getByRole('button', { name: viewName })`)
  - **Linear widget tracks: “Add track” button** (`tracks.first().getByRole('button').first().click()`)
  - **Privatize flow**: `Save As` / `Save as My Window` / `Save` — выбор по тексту/role

---

## Рекомендации по стилю/паттернам по итогам изучения эталона

Бейзлайн: `tests from solo-rtm/trajectory/*.spec.ts`, `tests from solo-rtm/Routing/*.spec.ts`.

- **Нейминг тестов**: формат `TL-### ... [caseId]` соблюдён; важно, чтобы он совпадал и с `Autotest:` комментарием в TestRail.
- **Ровно 1 `test.step`** на тест — соблюдено.
- **Хелперы вместо копипасты**: подход хороший (проверки/действия вынесены).
- **Ожидания событийные**: `waitForResponse`, `expect(...).toBeVisible`, `expect.poll` — ок.
- **Fail-fast локаторы**: лучше `toHaveCount(1)` перед кликом, чем `.first()/.last()` без гарантий (в файле уже есть улучшения этого типа).

---

## File review: `tests from solo-rtm/LeftPanel/trace-list.spec.ts`

### Кратко: что хорошо

- **Сильно улучшили устойчивость** по сравнению с прошлой версией:
  - `clickControl()` больше не зависит от внутренних CSS UI-kit (перешли на `checkbox.check()`).
  - `expectUnmappedTrace()` больше не использует “количество CSS-классов”.
  - `selectDirectionalView()` теперь делает fail-fast через `toHaveCount(1)` и явные проверки количества.
  - `TL-012` улучшен по скроллам/локаторам и меньше `force`.
- **Тесты по-прежнему читаются как TR‑спека** (Assert 1/2/3, 1 step).

### Проблемы

#### Critical

- **Несоответствие TR кейсу `61973` (TL-008)**:
  - По TR ожидается изменение состояния чекбоксов в Trace List при смене трека, а тест формулирует и проверяет другое (нет ключевых ассёртов). Это риск ложноположительных результатов и “автотест есть, а кейс не покрыт”.

#### Major

- **TestRail метаданные массово не соответствуют требованиям из модуля**:
  - У многих кейсов `case_status_id != 2` (не Ready), у `61959` неверный `custom_automation_type`, у `81108/81109` Automation/Automation Type не соответствуют факту наличия автотеста, у `61973` ещё и Assigned To не `null`.
- **Остаются места без `data-testid` → тесты всё ещё завязаны на текст/role** (как минимум Messages + приватизация + add-track + directional view).
- **`expectTraceListIsDnDAvailable()` содержит “пустую” ветку**:
  - `if (isSelfDraggable || draggableDescendantsCount > 0) { expect(true).toBe(true); }`
  - По смыслу это не ассерт; либо нужно реально ассертить наличие draggable, либо удалить ветку и оставить один понятный критерий.

#### Minor

- **`clickControl()` всегда делает `check({ force: true })`**:
  - Для сценариев, где нужен toggle/uncheck, этого будет недостаточно. Сейчас по кейсам ок, но хелпер стал более “узким” по контракту.

### Рекомендации

1) **Привести TL-008 в соответствие TR `61973`**
   - либо обновить автотест под ожидаемое поведение (явные ассёрты на изменение checked‑состояний при смене трека),
   - либо если TR устарел/ошибка — зафиксировать как риск и обновить TR (но не “молчаливо”).

2) **Привести TestRail meta к требованиям модуля**
   - `case_status_id = 2`, `custom_automation = 2`, `custom_automation_type = 5`, `type_id = 9`, `case_assignedto_id = null`.

3) **В `DS-12116` добавить `data-testid` минимум для Messages и ключевых элементов Trace List**
   - чтобы убрать зависимости от `getByText('Messages not found')`, `getByRole({ name: 'Messages' })`, `T/D` по тексту и т.п.

---

## Финальная сводка

- Кол-во файлов: 1
- Critical: 1
- Major: 3
- Minor: 1
- Топ-3 самых важных правки:
  1) Синхронизировать TL-008 с TestRail `61973` (сейчас “кейс не покрыт”)
  2) Привести TestRail метаданные и `Autotest:` комментарии к стандарту модуля
  3) Закрыть `DS-12116` минимум для Messages + элементов Trace List, которые сейчас проверяются по тексту/DOM

---

## Следующий шаг

- Внеси правки согласно рекомендациям из отчёта.
- После внесения правок прогони автотест(ы) и проверь, что они проходят успешно.

