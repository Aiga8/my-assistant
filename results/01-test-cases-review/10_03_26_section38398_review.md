# Ревью тест-кейсов: секция 38398 (Window menu)

**Дата:** 10.03.26  
**Секция:** 38398 — Window menu (родитель: 11 Window). Создано по DS-11006.  
**Аналитика:** DS-11006 — Add DB actions to DB open menu (действия с дашбордами в меню выбора окон).

---

## Секция 38398 — Window menu

### 408678 — The menu button (three dots) appears in the dashboard drop-down list.
- Замечаний по содержанию нет. В заголовке точка в конце — в секции встречается и с точкой, и без.

### 408679 — Opening the action menu when clicking on the three dots for private window
- В preconds и expected — inline-стили из вставки (Confluence). На исполнение не влияет.
- **Метка (label):** В секции встречается метка `wimdow_menu` — опечатка, лучше `window_menu`. Исправлять в настройках меток.

### 408681 — Opening the action menu when clicking on the three dots for public window
- type_id 7 (остальные в секции чаще 9) — при необходимости выровнять тип.
- Замечаний по шагам и ожиданиям нет.

### 408682 — Open in new window - opens the window in a pop-up window from the drop-down list
- Замечаний нет.

### 408684 — Duplicate - Create a copy of a private window with an auto-generated name
- В expected шага 1 в конце возможен лишний пробел после «уникальность». Убрать при желании.
- Логика (Copy of &lt;Имя&gt;, при повторе (2), (3)) корректна.

### 408685 — Duplicate - generates a name with a number when duplicating again
- В preconds в конце лишние `<br><br><br>` — удалить.
- Сценарий (второй/третий дубликат → (2), (3)) описан верно.

### 408686 — Duplicate - Error when exceeding the 40 character limit
- В тексте ошибки «can not» допустимо заменить на «cannot» для единообразия с EN.
- Замечаний по смыслу нет.

### 408687 — Duplicate as Private - Create a private copy of a public window
- Замечаний нет.

### 408688 — Duplicate as Private - handling duplicate names
- Замечаний нет.

### 408689 — Publish Window - publishing a private window
- **Грамматика (expected шаг 1):** «Создается **публичный** окно» → «**публичное** окно» (согласование с «окно»).

### 408690 — Publish Window - Generate a unique name in case of conflict
- **Грамматика (шаги 1–2):** «Опубликовать **приватный** окно» → «**приватное** окно».
- В expected шага 2 кавычка в имени вынесена в отдельный span — при желании упростить разметку.

### 408691 — The Publish Window is only displayed for private window.
- Замечаний нет.

### 408692 — Rename - rename a private window from the drop-down list
- Замечаний нет.

### 408693 — Rename - save by clicking outside the input field
- **Пропущен шаг:** Между шагом 1 (открыть меню, проверить Rename) и шагом 2 (ввести имя) нет явного действия «Выбрать Rename» / «Кликнуть Rename», чтобы перейти в режим редактирования. Добавить шаг: «Выбрать пункт Rename» (или эквивалент).

### 408694 — Rename - cancel by pressing Escape
- **Шаг 1 (content):** Есть пустой параграф с пробелами `<p id="isPasted"><span style="white-space:pre;">    </span></p>` — удалить для чистоты.

### 408695 — Rename - error when duplicating the name of a private window
- **Грамматика (expected):** «Window with this name **is already exists**» → «**already exists**» или «**is already existing**».

### 408696 — Rename - error when duplicating the name of a public window
- То же исправление: «is already exists» → «already exists».

### 408697 — Rename - cancel if name is empty
- Замечаний нет.

### 408699 — Delete - delete a private window with confirmation
- Замечаний нет.

### 408700 — Delete - cancel deletion by pressing the Cancel button
- Замечаний нет.

### 408701 — Delete - удаление дашборда закрывает все его открытые вкладки
- **Предусловия:** Пустые. Нужно явно задать: пользователь авторизован; дашборд «Multi Tab» открыт в нескольких вкладках (например, в трёх).
- **Язык заголовка:** Заголовок на русском при английских заголовках в секции — при желании унифицировать (например, «Delete - deleting dashboard closes all its open tabs»).

### 408703 — Delete - the modal window has a max-width of 344px
- Замечаний нет.

### 408708 — Copy link - copying a link to a window
- Проверяется контекстное меню **вкладки** (клик по заголовку таба), а не меню «три точки» в списке окон. Если секция охватывает оба контекста — ок; иначе уточнить описание секции или расположение кейса.

### 408709 — Copy link is available for all types of windows.
- Замечаний нет.

### 408712 — Updating the list after deleting a window
- Замечаний нет.

### 408713 — Close menu when clicking outside the area
- Замечаний нет.

### 408717 — Performance - menu opening without delays
- **Несоответствие заголовка и шага:** Заголовок про открытие меню без задержек, шаг — «Создать 10+ копий окна подряд» (проверка при множественном Duplicate). Либо изменить заголовок под шаг (например, «Performance - multiple duplicate operations without degradation»), либо скорректировать шаг под заголовок (например, многократное открытие/закрытие меню).

---

## Финальная сводка

| Показатель | Значение |
|------------|----------|
| Всего тестов | 27 |
| Без замечаний | 15 |
| С замечаниями | 12 |
| Критичные | 0 |

---

## Рекомендации

### Правки в кейсах
- **408689:** «публичный окно» → «публичное окно».
- **408690:** «приватный окно» → «приватное окно» (в шагах).
- **408693:** добавить шаг «Выбрать Rename» перед вводом имени.
- **408694:** убрать пустой параграф с пробелами в шаге 1.
- **408695, 408696:** «is already exists» → «already exists».
- **408701:** заполнить preconditions (дашборд открыт в нескольких вкладках); при желании перевести заголовок на английский.
- **408717:** привести в соответствие заголовок и шаг (либо заголовок под сценарий с 10+ копиями, либо шаг под «opening without delays»).

### Консистентность
- Точка в конце заголовка: часть кейсов с точкой, часть без — при рефакторинге можно унифицировать.
- Тип кейса: 408681, 408682, 408701 — type_id 7; остальные в основном 9. При необходимости выровнять.
- Метка `wimdow_menu`: исправить на `window_menu` в настройках меток и у кейсов секции.

### Дубликаты
- Явных дубликатов нет. Пересечения по сценариям (Rename, Delete, Duplicate для private/public) разделены по типам окон и действиям — обоснованно.
