## Autotests review (Playwright)

Дата: 31_01_26  
Файлы в ревью: `tests from solo-rtm/LeftPanel/trace-list.spec.ts`

---

## Проверка соответствия TestRail (если есть caseId/секция)

Показаны **только NOT OK** (OK пункты намеренно не выводятся).

NOT OK не найдено (для нескрытых тестов).

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
- **Fail-fast локаторы**: хороший паттерн (например, в `selectDirectionalView`).
- **Контрактные проверки**: `expectUnmappedTrace` и клик по контролу через `checkbox.check()` выглядят как устойчивый “контрактный” подход.

---

## File review: `tests from solo-rtm/LeftPanel/trace-list.spec.ts`

### Кратко: что хорошо

- **TL-002**: добавлена hover‑проверка имени трейса (теперь соответствует expected из TR `61966`).
- **TL-004**: убраны “лишние” ассёрты про disabled для других трейсов в X‑Section/Map (теперь соответствует expected из TR `398285`).
- **`expectTraceListIsDnDAvailable()`**: “пустая” проверка заменена на реальные ассерты по `draggable` (если атрибут/потомки присутствуют) + жест.

### Проблемы

#### Major

- **Остаются места без `data-testid`** (см. блок `DS-12116`) — тесты местами вынуждены использовать text/role/DOM‑атрибуты.

#### Minor

- **`clickControl()` использует `check({ force: true })`**: `force` может маскировать перекрытия/неактивность элемента; лучше оставлять `force` только когда без него реально нестабильно.

### Рекомендации

- Довести `DS-12116`: добавить недостающие `data-testid` (из блока **Missing in Jira tasks**) — это уменьшит зависимость от text/role и сделает локаторы устойчивее.

---

## Финальная сводка

- Кол-во файлов: 1
- Skipped tests: 2
- Critical: 0
- Major: 1
- Minor: 1
- Топ-3 самых важных правки:
  1) Закрыть “Missing in Jira tasks” в `DS-12116` (Directional view selector, Add track, Privatize flow)
  2) По возможности заменить локаторы Messages/empty state на `data-testid` после разметки
  3) Минимизировать `force: true` в `clickControl()` (оставить только при реальной необходимости)

---

## Следующий шаг

- Внеси правки согласно рекомендациям из отчёта.
- После внесения правок прогони автотест(ы) и проверь, что они проходят успешно.

