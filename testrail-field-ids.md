# TestRail — справочник ID полей (source of truth)

Этот файл хранит соответствия **ID → значение** для полей TestRail, которые мы используем в JSON и в модулях `03/04`.

Важно:

- **Не угадывай** значения. Если “человекочитаемое” название неизвестно — оставь пустым и заполни после проверки в TestRail UI.

---

## 1) Case Type (`type_id`)

| ID | Значение (как в TestRail) |
|---:|---|
| 7 | (уточнить) |
| 9 | Regression |

---

## 2) Priority (`priority_id`)

| ID | Значение (как в TestRail) |
|---:|---|
| 2 | (уточнить) |
| 3 | (уточнить) |
| 4 | (уточнить) |

---

## 3) Case Status (`case_status_id`)

| ID | Статус (как в TestRail) |
|---:|---|
| 1 | Ready |
| 2 | (уточнить) |
| 3 | Review |

---

## 4) Assigned To (`case_assignedto_id`)

| ID | Пользователь (как в TestRail) |
|---:|---|
| null | None (не назначено / поле пустое) |
| 54 | Aleksandra Minikh |
| 59 | (уточнить) |
| 61 | Me |

---

## 5) Automation (`custom_automation`)

| ID | Значение (как в TestRail) |
|---:|---|
| 0 | (уточнить) |
| 1 | Not_automated |
| 2 | Automated |
| 5 | (уточнить) |
| 6 | Ready_to_automate |

---

## 6) Automation Type (`custom_automation_type`)

| ID | Значение (как в TestRail) |
|---:|---|
| 0 | None |
| 5 | TypeScript |

---

## 7) Labels (`custom_labels`)

| ID | Label (как в TestRail) |
|---:|---|
| 53 | (уточнить) |
| 145 | (уточнить) |

---

## 7.1) Labels (обычные `labels`)

| ID | Label title |
|---:|---|
| 57 | 3D_view |
| 78 | bit_position |
| 76 | context_menu |
| 79 | directional_widget |
| 89 | drillspot_settings |
| 90 | linear_widget |
| 94 | metrics_widget |
| 73 | mudreports |
| 92 | numeral_widget |
| 97 | popout_window |
| 59 | ribbon |
| 88 | routing |
| 96 | slide_sheet |
| 81 | spreadsheet |
| 58 | spreadsheet_mud-repo |
| 80 | spreadsheet_ribbon |
| 87 | tabs |
| 95 | table_widget |
| 91 | toolface_widget |
| 77 | trace_list |
| 56 | windows |
| 93 | x-plot_widget |

---

## 8) Fix versions (`custom_fix_versions`)

| ID | Версия (как в TestRail) |
|---:|---|
| 62 | (уточнить) |
| 63 | (уточнить) |
| 68 | M 2025.28.0 |
| 69 | M 2025.29.0 |
| 73 | M 2026.1.0 |
| 74 | M 2026.2.0 |

---



