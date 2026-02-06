# Базовые операции (шаблоны команд)

## TestRail → перевести кейс в Ready_to_automate

Промпт:

```
Проставь в TestRail для кейса <CASE_ID> следующие значения полей:
Assigned To → Me → case_assignedto_id: 61
Automation → Ready_to_automate → custom_automation: 6
Automation Type → TypeScript → custom_automation_type: 5
Custom comment → custom_comments: "Autotest: <specPath>::<testName> [<CASE_ID>]" (просто текст, без HTML)

Сделай это в одну итерацию: вытащи строку теста из файла и сразу обнови кейс в TestRail.
```

## TestRail → перевести кейс в Automated

Промпт:

```
Проставь в TestRail для кейса <CASE_ID> следующие значения полей:

Status → Ready → case_status_id: 1
Assigned To → None → case_assignedto_id: null
Automation → Automated → custom_automation: 2
Automation Type → TypeScript → custom_automation_type: 5
Custom comment → custom_comments: "Autotest: <specPath>::<testName> [<CASE_ID>]" (просто текст, без HTML)

Сделай это в одну итерацию: вытащи точное имя теста из файла и сразу обнови кейс в TestRail.
```

## Cursor → запуск автотестов

Тебе нужно запустить Playwright тесты в foreground, чтобы я видел полный вывод в этом же сообщении. Не запускай в background, не используй block_until_ms: 0, не оставляй команду “стримиться в терминал-файл”. Дождись завершения команды и верни результат (passed/failed и ошибки).
ОС: Windows (PowerShell). Запускать строго из папки C:\work\solo-rtm\playwright.
Команда (несколько TestRail ID через OR в -g):
cd "C:\work\solo-rtm\playwright"$env:HEADED_SLOW="1"npx playwright test tests/LeftPanel/trace-list.spec.ts -g '12741|61946|61953' --reporter=line --headed --workers=1
Если | ломается — значит ты не в PowerShell или используешь неправильные кавычки; используй PowerShell + одинарные кавычки вокруг regex.
