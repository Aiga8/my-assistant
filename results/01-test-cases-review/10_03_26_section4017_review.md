# Ревью тест-кейсов: секция 4017 (Widget header) и подсекции

**Дата:** 10.03.26  
**Секция:** 4017 (Widget header), дочерние: 4020 (Delete button in widget's header), 4027 (Fullscreen for widgets)  
**Аналитика:**  
- [AN] Tabs in Multiple Windows (DS-9914) — https://starsteer.atlassian.net/wiki/spaces/RTM/pages/5281710129  
- Dashboards. Tabs in Multiple Windows. Frontend Tech. Analysis — https://starsteer.atlassian.net/wiki/spaces/RTM/pages/5369528331  

**Краткий контекст из аналитики:** Отказ от зон в UI, окно = единица компоновки; шапки виджетов только при ховере (Tech.); хранение DataSource вкладки; Pop-out; для публичных окон удаление виджетов недоступно.

---

## Секция 4017 — Widget header

### Тест 286291 — "Widget Header Display on Hover"
- **Грамматика:** В preconditions: «виджетов расположенных» → «виджетов, расположенных» (нужна запятая). В шаге 2: «кусора» → «курсора».
- **Консистентность:** «хэдер» — допустимо; в аналитике/новых кейсах чаще «шапка виджета» — для единообразия можно заменить на «шапка виджета».

### Тест 318312 — "Widget Header Mode Display Format"
- Нет замечаний

### Тест 318310 — "Widget Header Text Truncation - Dash Removal"
- **Грамматика:** В expected шага 4: «тирэ» → «тире».

### Тест 352390 — "Widget headers are hidden by default when opening the dashboard"
- **Консистентность:** Название на английском, шаги/ожидания на русском — смешение языков в рамках секции.

### Тест 352392 — "Widget headers are displayed on hover"
- **Грамматика:** В expected: «тк» → «т. к.» (сокращение «так как» с пробелами и точками).

### Тест 352419 — "Widget headers are displayed on hover in extreme cases"
- Нет замечаний

### Тест 352394 — "Show border and header when focusing a widget"
- **Грамматика:** В expected: «тк» → «т. к.»

### Тест 352399 — "Widget header grab cursor"
- Нет замечаний

### Тест 352400 — "Widget header pointer cursor"
- Нет замечаний

### Тест 352402 — "Behavior when moving a widget within a window"
- Нет замечаний

### Тест 352396 — "Widget close button default view"
- Нет замечаний

### Тест 352397 — "Widget close button fаunctionality"
- **Критично (грамматика/техника):** В названии в слове "functionality" использована кириллическая «а»: «f**а**unctionality». Нужно заменить на латинскую «a».

### Тест 352398 — "Behavior when clicking the \"Cancel\" button in a modal window when deleting a widget"
- Нет замечаний

### Тест 352416 — "Widget header z-order with widget"
- Нет замечаний

### Тест 352417 — "Widget header z-order with zone header"
- **Соответствие аналитике:** В аналитике (1FR1.2-R2) заголовок и граница зоны удалены из интерфейса. Упоминание «шапка зоны» устарело — по сути проверяется z-order шапки виджета относительно других элементов; формулировку стоит обновить (например, «z-order шапки виджета относительно соседних областей/элементов»), чтобы не вводить в заблуждение.

### Тест 352418 — "Widget header performance"
- Нет замечаний

### Тест 353399 — "There is no control to delete a widget in the tab of a public window"
- Нет замечаний (соответствует аналитике: в публичных окнах нет удаления виджетов).

### Тест 352391 — "Widget headers are hidden by default when opening the public dashboard"
- Нет замечаний

### Тест 352393 — "Widget headers are displayed on hover in public dasboard"
- **Грамматика:** Опечатка в expected/названии: «dasboard» → «dashboard».

### Тест 352395 — "Show border and header when focusing a widget public dashboard"
- **Грамматика / ясность:** Пропущено слово/предлог: «a widget public dashboard» → «a widget **on a** public dashboard» или переформулировать на русский: «при фокусе на виджет на публичном дашборде».

---

## Секция 4020 — Delete button in widget's header

### Тест 100229 — "Displaying the delete icon in private dashboard"
- **Консистентность:** Указана «иконка удаления (корзина)»; в кейсах секции 4017 (DS-10991) — «крестик». Уточнить по дизайну: корзина или крестик и привести к единому описанию.

### Тест 100234 — "Delete widget in private dashboard"
- **Соответствие аналитике:** Текст модалки в кейсе: «Selected widget will be deleted.» В тесте 352397 указано: «Selected Widget will be permanently deleted.» — расхождение формулировок; проверить актуальный текст в продукте и унифицировать.

### Тест 100232 — "Delete widget from widget's ribbon in private dashboard"
- **Терминология:** «пивот» — оставить как есть (внутренний термин) или заменить на «риббон»/«лента» по глоссарию.

### Тест 100241 — "Displaying the delete icon in private dashboard with minimum widget size"
- Нет замечаний

### Тест 100230 — "Displaying the delete icon in published dashboard"
- **Консистентность с аналитикой:** В кейсе — иконка удаления серого цвета без ховера; в 353399 для публичного окна — иконки удаления нет. Для опубликованного дашборда (published) и публичного окна (public) поведение может различаться; убедиться, что оба варианта соответствуют текущей аналитике и дизайну.

### Тест 100235 — "Delete widget in published dashboard"
- **Грамматика:** В expected: «Отображается хедер виджета без иконкой» → «без иконки» (родительный падеж) или «хедер виджета, иконка удаления не отображается».

### Тест 100240 — "Displaying the delete icon in published dashboard with minimum widget size"
- Нет замечаний

### Тест 100242 — "Displaying delete icon after privatizing a public dashboard"
- Нет замечаний

### Тест 100243 — "Delete widget after privatizing a public dashboard"
- Нет замечаний (в шаге указан «крестик» — согласовано с новыми кейсами).

---

## Секция 4027 — Fullscreen for widgets

### Тест 100369 — "Displaying the fullscreen mode icon in header"
- **Грамматика:** «отсуствует» → «отсутствует»; «диаганали» → «диагонали».
- **Терминология:** «нумерал» — для единообразия с другими кейсами лучше «Numeral» или «нумеральный виджет».

### Тест 100370 — "Open widget on fullscreen mode"
- **Терминология:** «двд виджетов» → «DvD» или «Days vs Depth» для единообразия с аналитикой и другими кейсами.

### Тест 100371 — "Close fullscreen mode for widget"
- Нет замечаний

### Тест 100372 — "Delete widget on fullscreen mode"
- Нет замечаний

---

## Финальная сводка

| Показатель | Значение |
|------------|----------|
| Общее количество тестов | 33 |
| Тестов без замечаний | 18 |
| Тестов с замечаниями | 15 |
| Критичные проблемы | 1 |

**Критичная проблема:** В названии теста 352397 использована кириллическая «а» в слове "functionality" — исправить обязательно.

---

## Рекомендации

### Missing coverage (потенциальные пробелы)
- **Соответствие AN/Tech:** Явной проверки формата URL при фокусе на окне с виджетом (1FR1.8-R1) в данной секции нет — это покрыто в других секциях (Window/Zone Grid).
- **Граничные случаи:** Нет отдельного кейса на очень длинное имя виджета в шапке (только truncation с тире в 318310).
- **Негатив:** Явной проверки «нет кнопки удаления в публичном окне» достаточно (353399); расхождение «published» vs «public» стоит уточнить в продукте и при необходимости добавить уточняющий кейс или описание в preconditions.

### Дубликаты / пересечения
- Секция 4020 (Delete button) и кейсы 352396, 352397, 352398, 353399 в секции 4017 частично дублируют сценарии удаления виджета. Рекомендуется в описании секции 4020 указать связь с 4017 (например, что 4020 — детализация кнопки удаления из хедера) и при необходимости вынести общие preconditions в описание секции.

### Шаблонные проблемы
- Сокращение «тк» → везде заменить на «т. к.».
- Смешение «хэдер» / «хедер» / «шапка виджета» — зафиксировать один термин в глоссарии секции (рекомендуется «шапка виджета» по аналитике).
- Единообразие языка: в секции 4017 часть названий на английском, шаги на русском — при желании унифицировать названия (например, все на русском или все на английском) для секции.
- Устаревшие формулировки «зона» / «шапка зоны» — заменить на актуальные в соответствии с 1FR1.2 (зон в UI нет).
