# Базовые операции (шаблоны команд)

## TestRail → перевести кейс в Ready_to_automate

Промпт:

```
Проставь в TestRail для кейса <CASE_ID> следующие значения полей:
Assigned To → Me → case_assignedto_id: 61
Automation → Ready_to_automate → custom_automation: 6
Automation Type → TypeScript → custom_automation_type: 5
Custom comment → custom_comments: "название автотеста" (просто текст, без HTML)

Сделай это в одну итерацию: вытащи строку теста из файла и сразу обнови кейс в TestRail.
```

