# Этап 2 — Экспорт кейсов из TestRail

Общий процесс: [README.md](README.md).

**На вход даётся:** ID секции TestRail (`section_id`). Проект всегда 5.

---

## Назначение

Получить полный и корректный набор кейсов для конкретной секции TestRail (включая все дочерние секции), без ограничений MCP и пагинации, для последующего маппинга (Этап 3).

---

## Почему не MCP

- `get_cases(section_id=...)` возвращает только кейсы самой секции, без дочерних.
- `get_sections` ограничен первой страницей.
- Невозможно гарантировать полноту выборки для большого проекта.

Поэтому используется прямой TestRail API с пагинацией (скрипт ниже).

---

## Инструмент

Скрипт в этом модуле:

`modules/01-autotest-coverage/testrail_export_section_subtree.mjs`

**Зависимости:** Node.js, доступ к TestRail API. Учётные данные берутся из `config.ts` в корне workspace или из переменных окружения: `TESTRAIL_BASE_URL`, `TESTRAIL_USERNAME`, `TESTRAIL_API_KEY`.

---

## Что делает скрипт

1. Выгружает все секции проекта с пагинацией (`get_sections/<project_id>`).
2. Строит поддерево секций от указанной корневой секции (`--root-section`).
3. Для каждой секции в поддереве выгружает кейсы с пагинацией (лимит 250 на страницу).
4. Сохраняет в указанную папку:
   - `testrail-section-<SECTION_ID>-subtree-cases.json` — полная структура (meta, subtreeSectionIds, sections, cases);
   - `testrail-section-<SECTION_ID>-subtree-cases.md` — человекочитаемый отчёт (список секций и кейсов).

---

## Аргументы командной строки

| Аргумент | Короткий | Обязательный | Описание |
|----------|----------|--------------|----------|
| `--project` | `-p` | да | ID проекта TestRail (например, 5). |
| `--root-section` | `-s` | да | ID корневой секции; выгружаются эта секция и все дочерние. |
| `--out` | `-o` | нет | Папка для результата. По умолчанию: `results/01-autotest-coverage`. |
| `--limit` | `-l` | нет | Размер страницы пагинации (по умолчанию 250). |
| `--debug` | — | нет | Вывод отладочной информации по запросам. |

---

## Пример запуска

Из корня репозитория (где лежит `config.ts`):

```bash
node modules/01-autotest-coverage/testrail_export_section_subtree.mjs --project 5 --root-section <SECTION_ID> --out results/01-autotest-coverage
```

С указанием своей папки:

```bash
node modules/01-autotest-coverage/testrail_export_section_subtree.mjs -p 5 -s 22177 -o results/01-autotest-coverage
```

---

## Выходные файлы

- **Путь:** `results/01-autotest-coverage/` (или значение `--out`).
- **Имена:**
  - `testrail-section-<SECTION_ID>-subtree-cases.json` — для скрипта маппинга (Этап 3).
  - `testrail-section-<SECTION_ID>-subtree-cases.md` — для просмотра и проверки.

---

## Промт для Этапа 2 (копируй и подставь section_id)

```
Входные данные:
- Section ID: <ID корневой секции TestRail>

Задача: Этап 2 маппинга автотестов на TestRail. Выгрузи кейсы TestRail для указанной секции и всех дочерних. Project_id = 5. Запусти скрипт modules/01-autotest-coverage/testrail_export_section_subtree.mjs с --project 5 и --root-section <SECTION_ID>, результат сохрани в results/01-autotest-coverage/. Дальше по инструкции в modules/01-autotest-coverage/02_export_testrail_section_subtree.md.
```

---

## Краткая инструкция для запуска этапа

1. **Входные данные:** пользователь даёт только **section_id** корневой секции TestRail. Project_id всегда **5**.
2. Запусти экспорт:
   ```bash
   node modules/01-autotest-coverage/testrail_export_section_subtree.mjs --project 5 --root-section <SECTION_ID> --out results/01-autotest-coverage
   ```
3. Результат: в `results/01-autotest-coverage/` появятся `testrail-section-<SECTION_ID>-subtree-cases.json` и `.md` — они нужны для Этапа 3.
