# Инструкция для Cursor: Создание/обновление тест-кейсов в TestRail на базе Playwright автотестов

## Быстрый старт (копипаст)

Вставь пользователю (или используй сам) и заполни поля:

```
Создай (или обнови) тест-кейс в TestRail по автотесту Playwright.

Проект TestRail: <project>
Section: <section_id + название секции>
Тип кейса (type_id): <...>
Priority (priority_id): <...>
Status: <Design | Review Change>
Assignee: <имя/ID или пусто>
Refs (Jira): <DS-... , QAA-...>
Automation:
  custom_automation: <Manual | Automated | Partially_automated>
  custom_automation_type: <TypeScript | None>
Автотест:
  spec path: <playwright/tests/...>
  test name: <точное название теста>
  (опционально) grep: <...>

(Опционально) Case ID в TestRail (если обновляем): <case_id>
```

---

## 0. Роль и компетенции

Ты — опытный **QA Engineer**. Твоя задача — создать **или обновить** тест-кейс в TestRail на базе существующего UI автотеста Playwright (TypeScript).

---

## 1. Входные данные (что обязательно нужно получить)

- **TestRail**:
  - проект (`project`)
  - секция (`section_id` + человекочитаемое название)
  - `type_id`, `priority_id`
  - статус (**Design** или **Review Change**) → нужно отдать корректный `case_status_id`
  - assignee (ID или пусто) → `case_assignedto_id`
  - `refs` (Jira): `DS-...`, `QAA-...`
  - automation:
    - `custom_automation`: Manual | Automated | Partially_automated
    - `custom_automation_type`: TypeScript | None
- **Автотест Playwright**:
  - `spec path`: `playwright/tests/...`
  - `test name`: точное имя теста
  - (опционально) `grep`
- **Если обновляем**:
  - желательно получить `case_id` (чтобы обновить точно тот кейс)

---

## 2. Требования к оформлению (обязательно соблюдать)

- **Preconditions** (`custom_preconds`):
  - простой многострочный текст
  - **без списков/маркеров/HTML**
  - без лишнего форматирования
- **Steps**: только `custom_steps_separated` (массив шагов), каждый шаг:
  - `content`: повелительное наклонение
  - `expected`: ожидаемый результат
- **Expected**:
  - допускаются простые маркеры `- ` или отдельные строки
  - **без точек в конце строк**
- **Запрещено**:
  - не добавлять строку `Теги: …` нигде
  - не использовать термин `zone` (используй **“окно”, “веллбор”, “DataSource”**)
- **Если кейс обновляем**:
  - сохранить смысл сценария
  - привести формулировки к текущей реализации
  - **не добавлять “пример URL”**, если это не нужно

---

## 3. Алгоритм работы

### Шаг 1 — Определить режим: create или update

- **Update**: если пользователь дал `case_id` или явно сказал “обнови существующий кейс”
- **Create**: если кейса ещё нет

Если `case_id` не дан, но сказано “обнови” — сначала попробуй найти существующий кейс по связке (refs + секция + похожий title). Если остаётся неопределённость — попроси `case_id`.

### Шаг 2 — Понять сценарий по автотесту

На основе `spec path`, `test name` (и `grep`) восстанови:

- что именно проверяет автотест (user flow)
- какие предусловия нужны, чтобы сценарий был воспроизводимым
- что является наблюдаемым expected

### Шаг 3 — Сформировать тест-кейс

- `title` — английский, кратко, по сути
- `custom_preconds` — русский, простой текст (без списков/HTML)
- `custom_steps_separated` — шаги на русском:
  - 1 шаг предпочтительно, 2 шага максимум (если иначе теряется смысл)
  - `expected` без точек на концах строк
- `refs` — только задачи на реализацию (не баг-репорты)

### Шаг 4 — Подготовить результат в 2 частях (обязательно)

1) **Человеческий текст кейса**: Title, Preconditions, Steps/Expected, Refs, Automation  
2) **JSON для TestRail API** (см. ниже)

---

## 4. Формат вывода (JSON для TestRail API)

Сгенерируй JSON в формате:

```json
{
  "section_id": 12345,
  "title": "Title",
  "refs": "DS-1234",
  "custom_preconds": "строка\\nстрока",
  "custom_automation": 2,
  "custom_automation_type": 0,
  "custom_steps_separated": [
    { "content": "Шаг", "expected": "Ожидаемый результат" }
  ],
  "case_status_id": 3,
  "case_assignedto_id": 59
}
```

Примечания:

- Значения `custom_automation` используй как **ID поля** в вашем TestRail (часто встречается схема: `1 = Manual`, `2 = Automated`, `5 = Partially_automated`).
- Значения `custom_automation_type` (TypeScript/None) также должны соответствовать **ID/формату** кастомного поля вашего проекта.
- `case_status_id` должен соответствовать статусам **Design** / **Review Change** в вашем проекте.

---

## 5. Чеклист перед финализацией

- Preconditions не “уехали” и выглядят как обычный текст (без списков/HTML)
- В expected нет точек в конце строк
- Нет “zone” и нет строки про теги
- Refs соответствуют задаче на реализацию (не баг-репорт)
- Automation выставлен корректно (Manual / Automated / Partially_automated)

