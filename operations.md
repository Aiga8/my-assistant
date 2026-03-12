# Базовые операции (шаблоны команд)

## Нюанс: TestRail сбрасывает статус в Design

При изменении любого поля кейса TestRail может автоматически менять статус кейса на **Design**. Чтобы статус остался Ready, при **любом** обновлении кейса **в той же операции** (в одном вызове update_case/update_cases) всегда передавай:

- **Status → Ready** → `case_status_id: 1`

Иначе после сохранения кейс окажется в Design и придётся править статус отдельно.

## TestRail → перевести кейс в Review и назначить на исполнителя

Промпт:

```
В TestRail для кейса <CASE_ID> проставь через MCP (update_case_fields):
Status → Review → case_status_id: 3
Assigned To → case_assignedto_id: <ID> (ID исполнителя взять из testrail-field-ids.md, секция "Assigned To")
```

Исполнитель может меняться; его `case_assignedto_id` смотри в testrail-field-ids.md.


## TestRail → сменить тип на Regression (только кейсы со статусом Ready)

**Суть:** у всех кейсов указанной секции со статусом **Ready** выставить тип **Regression**. В той же операции передавать `case_status_id: 1`, чтобы статус не сбросился в Design (см. нюанс выше).

Промпт:

```
В TestRail для секции <SECTION_ID> (project_id: 5) у всех кейсов со статусом Ready (case_status_id: 1) смени тип на Regression (type_id: 9). При обновлении в том же вызове передавай case_status_id: 1, чтобы статус остался Ready.

Используй MCP TestRail: get_cases(project_id: 5, section_id: <SECTION_ID>), отфильтруй кейсы с case_status_id === 1, затем update_cases с полями: type_id: 9, case_status_id: 1. ID типа и статуса — из testrail-field-ids.md (Regression = 9, Ready = 1).
```

Можно перечислить несколько секций: «сделай то же для секций 15509, 20406, 20408» — тогда выполнить по очереди для каждой.


## TestRail → перевести кейс в Automated

Промпт:

```
Проставь в TestRail для кейса <CASE_ID> следующие значения полей:

Status → Ready → case_status_id: 1
Type → Regression → type_id: 9
Assigned To → None → case_assignedto_id: null
Automation → Automated → custom_automation: 2
Automation Type → TypeScript → custom_automation_type: 5
Custom comment → custom_comments: "Autotest: tests/<specPath>::<testName> [<CASE_ID>]" (просто текст, без HTML; specPath — путь к .spec.ts без префикса tests/)

Сделай это в одну итерацию: вытащи точное имя теста из файла и сразу обнови кейс в TestRail.
```

## TestRail → заменить задачу в References (refs)

**Суть:** в поле References заменить задачу `<OLD_REF>` на `<NEW_REF>`, остальные задачи в refs не трогать (например, если в кейсе указаны DS-7037 и DS-9251, после замены DS-7037 → DS-7791 должно остаться: DS-7791, DS-9251).

Промпт (для секции через MCP):

```
Пройди по всем тестам секции <SECTION_ID> в TestRail (project_id: 5). Для каждого кейса:
1. В поле refs замени задачу <OLD_REF> на <NEW_REF>; остальные задачи в refs сохрани без изменений.
2. (Опционально) Проставь Status → Ready → case_status_id: 1.

Используй MCP TestRail: get_cases по section_id, затем update_cases — в refs передавай строку с уже подставленным <NEW_REF> вместо <OLD_REF>.
```

Пример: заменить DS-7037 на DS-7791 в секции 6757, плюс Status → Ready.

## Cursor → запуск автотестов

Тебе нужно запустить Playwright тесты в foreground, чтобы я видел полный вывод в этом же сообщении. Не запускай в background, не используй block_until_ms: 0, не оставляй команду “стримиться в терминал-файл”. Дождись завершения команды и верни результат (passed/failed и ошибки).
ОС: Windows (PowerShell). Запускать строго из папки C:\work\solo-rtm\playwright.
Команда (несколько TestRail ID через OR в -g):
cd "C:\work\solo-rtm\playwright"$env:HEADED_SLOW="1"npx playwright test tests/LeftPanel/trace-list.spec.ts -g '12741|61946|61953' --reporter=line --headed --workers=1
Если | ломается — значит ты не в PowerShell или используешь неправильные кавычки; используй PowerShell + одинарные кавычки вокруг regex.


## Cursor →  → обновить имена тестов в формате <testName> [<CASE_ID>]

Когда маппинг TestRail ↔ автотесты уже есть и нужно привести **имена автотестов** в коде (в .spec.ts) к формату с ID кейса в конце: `<testName> [<CASE_ID>]`

Промпт:

```
В проекте автотестов <ПУТЬ_К_ПРОЕКТУ> обнови имена тестов в спеках: в название теста добавь в конце ID кейса TestRail в квадратных скобках.

Формат имени: "<testName> [<CASE_ID>]" (текущее название теста + пробел + [<CASE_ID>]). Пример: "TT-012: Tie-in row TVD/NS/EW editable with optimistic recalculation [287272, 287275, 287277]".Источник маппинга: <файл_маппинга или описание> — оттуда брать соответствие тест ↔ CASE_ID. Если один автотест покрывает несколько кейсов, в скобках перечисли все ID через запятую: [287272, 287275, 287277].

Меняй только строку с названием теста (test(...) или it(...)) в .spec.ts, остальной код не трогай.
```


node modules/01-autotest-coverage/testrail_export_section_subtree.mjs --project 5 --root-section 6277 --out tasks/QAA-6369