# all-tests.md → TestRail mapping (working file)

Generated: 2025-12-25T19:31:44.255Z

Оглавление:
- All-tests (по нумерации all-tests.md): `## All-tests (sorted)`

---

## All-tests (sorted)

Источник данных:
- `results/01-autotest-coverage/rigs-testrail-mapping-25_12_25_01.json` (section 2461)
- `results/01-autotest-coverage/dashboards-section11-testrail-mapping-25_12_25_01.json` (section 11)
- `results/01-autotest-coverage/driller-panel-section2050-testrail-mapping-25_12_25_01.json` (section 2050)
- `results/01-autotest-coverage/section12-remaining-testrail-mapping-25_12_25_01.json` (section 12, remaining 29)
- `results/01-autotest-coverage/wellbore-select-source-section2809-testrail-mapping-25_12_25_01.json` (section 2809, overrides test #4)
- `results/01-autotest-coverage/geotarget-testrail-mapping-25_12_25_01.json` (GeoTarget mapped into all-tests: 87/94/95)

### 1. Открытие списка проектов при входе в приложение

Автотест:

- Путь: playwright/tests/App/app.spec.ts
- Название теста: Simple SSO Login Bypass Test

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 2. Установка соединения реального времени после загрузки дашборда

Автотест:

- Путь: playwright/tests/ws-mock/ws-proxy.spec.ts
- Название теста: should establish WebSocket connection through proxy

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 3. Импорт BHA-компонентов: доступность, валидация файла, замена данных и обработка ошибок

Автотест:

- Путь: playwright/tests/bha-import/bha-import.spec.ts
- Название теста: Complete BHA import functionality test

Найдено в TestRail:

- Полный список релевантных кейсов из секции 29094 (Import BHA from file via LLM):
- Covered (прямо проверяется в автотесте):
  - TR#340171 — Import BHA from Run Components table
  - TR#350276 — Import BHA file via Drag and Drop in Component Table
  - TR#340173 — Import BHA D'n'D with multiple files
  - TR#340174 — Import BHA D'n'D outside run table area
  - TR#341587 — Import Options View-Only Access for VIEWER Role - Import button unavailable
  - TR#353934 — Import Options View-Only Access for VIEWER Role - DnD unavailable
  - TR#345010 — Failed import - unable to parse data
  - TR#344980 — Import BHA with supported file formats
  - TR#344988 — Import BHA with unsupported file format
  - TR#344989 — Import BHA with typical file size 1MB
  - TR#344990 — Import BHA with file size 29MB
  - TR#344991 — Import BHA with maximum file size 30MB
  - TR#344992 — Import BHA with exceeded file size 31MB
  - TR#344993 — Import BHA into empty Run (no components)
  - TR#344994 — Import BHA into Run with existing components - data replacement
- Partial / Adjacent (часть поведения есть, но не все проверки этого кейса в автотесте):
  - TR#344995 — Cancel import when replacing existing components
  - TR#345011 — Field mapping validation - all supported fields
  - TR#352389 — Failed import - LLM service unavailable
  - TR#345007 — Import process indicator display
  - TR#341586 — Import Options Access

Обоснование:

- Этот один автотест агрегирует много сценариев: доступность кнопки/права, валидация формата и размера файла, загрузка через кнопку и DnD, подтверждение замены, успешный/ошибочный импорт, сетевые/серверные ошибки.
- Поэтому для разметки в TestRail полезнее не “1 best match”, а список кейсов, которые этот автотест реально закрывает полностью или частично.

Статус маппинга: Partial

### 4. Автовыбор скважины при открытии дашборда без указания скважины в ссылке

Автотест:

- Путь: playwright/tests/Routing/multi-window-routing.spec.ts
- Название теста: visiting url without wellbore uuid should select source

Найдено в TestRail:

- Best match: TR#88726 — Auto-associating wellbore after open private dashboard with zone without wellbore (релевантность: High)
- Alternate: TR#88728 — Auto-associating wellbore after open public dashboard with zone without wellbore (релевантность: High)
- Alternate: TR#84015 — Dashboard link generated (релевантность: Low)

Обоснование:

- TR#88726 / TR#88728 напрямую описывают сценарий “открыть дашборд, где у зоны нет ассоциации со скважиной” → система автоматически подставляет/ассоциирует скважину для зон (auto-associating wellbore), что совпадает с ядром “select source” при открытии ссылки без `/wellbores/...`.
- TR#84015 оставлен как слабый смежный кейс про формирование legacy dashboard link с `?z=...&w=...` (не про авто-выбор при отсутствии wellbore в URL).

Статус маппинга: Covered

### 5. Открытие дашборда при переходе на базовый URL приложения (multi-window)

Автотест:

- Путь: playwright/tests/Routing/multi-window-routing.spec.ts
- Название теста: should open project from drillspot-settings when navigating to default URL

Найдено в TestRail:

- Best match: TR#82166 — Opening the last open dashboard (релевантность: High)
- Alternate: TR#82225 — Auto-oppenning dashboards if user don't have saved openTabs and have private and public dashboards (релевантность: Medium)
- Alternate: TR#82226 — Auto-oppenning dashboards if user don't have saved openTabs and have private or public dashboards (релевантность: Medium)

Обоснование:

- TR#82166 напрямую проверяет восстановление состояния при загрузке приложения по базовому URL: запрос `drillspot-settings` и открытие сохранённого дашборда (activeTabUuid) + восстановление вкладок (Tabs).
- TR#82225 / TR#82226 дополнительно покрывают кейсы, когда у пользователя нет сохранённых Tabs, но есть «последний открытый проект» в `drillspot-settings` (авто-открытие наборов дашбордов).

Статус маппинга: Covered

### 6. Автоматическое преобразование ссылок из формата dashboards в формат windows (multi-window)

Автотест:

- Путь: playwright/tests/Routing/multi-window-routing.spec.ts
- Название теста: should replace /dashboards/ with /windows/ in url

Найдено в TestRail:

- Best match: TR#84015 — Dashboard link generated (релевантность: Low)
- Alternate: TR#345756 — UPDATE wellbore spud date with project UUID (релевантность: Low)
- Alternate: TR#345757 — UPDATE wellbore bit projection with project UUID (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#84015: Shared keywords: dashboards, generated, open, url, дашборд, открыть, формата
- TR#345756: Shared keywords: open, well, wellbores, открыть, присутствует
- TR#345757: Shared keywords: open, well, wellbores, открыть, присутствует

Статус маппинга: Partial

### 7. Приоритет скважины из адреса страницы над сохранённым выбором (multi-window)

Автотест:

- Путь: playwright/tests/Routing/multi-window-routing.spec.ts
- Название теста: should handle wellbore uuid from url in new format, ignore wellbore from drillspot-settings

Найдено в TestRail:

- Best match: TR#84015 — Dashboard link generated (релевантность: Low)
- Alternate: TR#87840 — Change offset wellbore for widget on public dashboard (релевантность: Low)
- Alternate: TR#345756 — UPDATE wellbore spud date with project UUID (релевантность: Low)

Обоснование:

- Functional core matched (5/10 core tokens)
- TR#84015: Shared keywords: drillspot, link, open, url, uuid, wellbore, дашборд, открыть, формата
- TR#87840: Shared keywords: open, well, wellbore, дашборд, открыть, скважины, страницы
- TR#345756: Shared keywords: open, uuid, well, wellbore, открыть, скважины, содержит

Статус маппинга: Partial

### 8. Обработка старых ссылок с параметрами зоны и скважины (multi-window)

Автотест:

- Путь: playwright/tests/Routing/multi-window-routing.spec.ts
- Название теста: should handle old links, with ?z={zoneUuid}&w={wellboreUuid} parameters

Найдено в TestRail:

- Best match: TR#85404 — Opening a link with an accessible zone and wellbore (релевантность: Medium)
- Alternate: TR#84015 — Dashboard link generated (релевантность: Medium)
- Alternate: TR#85405 — Opening a link with a  non-accessible zone (релевантность: Low)

Обоснование:

- TR#85404 проверяет обработку query-параметров `z=...` / `w=...` при открытии ссылки и применение линковок зон со скважинами.
- TR#84015 покрывает формирование старого URL формата `/dashboards/... ?z=...&w=...`, который как раз является входом для этого сценария.
- TR#85405 — смежный негативный случай (невалидная зона в query игнорируется).

Статус маппинга: Partial

### 9. Приоритет скважины из пути адреса страницы над значением в параметрах (multi-window)

Автотест:

- Путь: playwright/tests/Routing/multi-window-routing.spec.ts
- Название теста: should prioritize wellbore from pathname over wellbore from ?z=...&w=...

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 10. Отображение имени скважины во вкладке дашборда (multi-window)

Автотест:

- Путь: playwright/tests/Routing/multi-window-routing.spec.ts
- Название теста: should display wellbore name in dashboard tab

Найдено в TestRail:

- Best match: —

Обоснование:

- В уже выгруженных секциях (11 / 2809) нет кейса, который проверяет именно отображение имени скважины во вкладке дашборда (в автотесте это проверка через атрибут `data-wellbore-name`).
- Ближайшие «соседние» кейсы из секции 11 относятся к названию дашборда в табе/управлению табами, но не к имени скважины.

Статус маппинга: Not found

### 11. Приоритет параметров прямой ссылки над сохранёнными настройками навигации

Автотест:

- Путь: playwright/tests/Routing/routing.spec.ts
- Название теста: DS-10885: should navigate via direct link with URL priority over saved settings

Найдено в TestRail:

- Best match: TR#85397 — Opening a link to a dashboard in an accessible project (релевантность: Medium)
- Alternate: TR#85403 — Opening a link to an accessible and not opened dashboard (релевантность: Medium)
- Alternate: TR#85399 — Opening a link to an accessible and opened dashboard (релевантность: Low)

Обоснование:

- В секции 2809 есть кейсы про открытие дашборда по прямой ссылке и обновление `drillspot-settings` (последний открытый проект), что близко к функциональному ядру сценария.
- При этом в них явно не зафиксировано условие “saved settings игнорируются при наличии параметров URL”, поэтому это **Partial / Adjacent**.

Статус маппинга: Partial

### 12. Переход по ссылке с параметром открытия SlideSheet-виджета

Автотест:

- Путь: playwright/tests/Routing/routing.spec.ts
- Название теста: should handle slidesheet widget redirect and maximize

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 13. Отсутствие перехода на дашборд при несовпадении режима Table-виджета (SlideSheet-параметр)

Автотест:

- Путь: playwright/tests/Routing/routing.spec.ts
- Название теста: should not open Table widget if it is not in SlideSheet mode

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 14. Переход по ссылке с параметром открытия ToolFace-виджета

Автотест:

- Путь: playwright/tests/Routing/routing.spec.ts
- Название теста: should handle toolface widget redirect and maximize

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 15. Переход на список проектов и возврат на дашборд проекта

Автотест:

- Путь: playwright/tests/Routing/routing.spec.ts
- Название теста: should navigate to all projects view and back

Найдено в TestRail:

- Best match: —

Обоснование:

- В уже выгруженных секциях (11 / 2809) нет кейса, который проверяет именно переход на страницу списка проектов (`/projects`) и возврат на дашборд.
- Ближайший смежный кейс в секции 11 — TR#154636 (Selecting projects from the drop-down list), но он про переключение проекта через dropdown, а не про `/projects` view.

Статус маппинга: Not found

### 16. Обработка некорректной ссылки на дашборд и неполного адреса дашборда

Автотест:

- Путь: playwright/tests/Routing/routing.spec.ts
- Название теста: should handle invalid URLs and missing parameters gracefully

Найдено в TestRail:

- Best match: TR#85400 — Opening a link to a non-accessible dashboard (релевантность: Medium)
- Alternate: TR#85398 — Opening a link to a dashboard in a non-accessible project (релевантность: Low)
- Alternate: TR#82166 — Opening the last open dashboard (релевантность: Low)

Обоснование:

- В уже выгруженных секциях нет точного кейса про “404 page для невалидного dashboardUuid” и “редирект с `/dashboards/` на дефолтный дашборд из настроек”.
- TR#85400 / TR#85398 покрывают смежное поведение ошибки при открытии по ссылке (недоступный дашборд/проект).
- TR#82166 смежно покрывает “открытие по сохранённым настройкам” (drillspot-settings), что ближе к части про восстановление при неполном адресе.

Статус маппинга: Partial

### 17. Открытие списка проектов при отсутствии ранее выбранного проекта

Автотест:

- Путь: playwright/tests/Routing/routing.spec.ts
- Название теста: Root URL: new user without saved project

Найдено в TestRail:

- Best match: TR#13460 — Organization without any project (релевантность: Medium)
- Alternate: TR#13461 — Organization has a project (релевантность: Low)
- Alternate: TR#13543 — Open direct project-URL with role NO_ACCESS (релевантность: Low)

Обоснование:

- В секции 406 есть кейсы про страницу списка проектов: “Project list is empty” (TR#13460) и отображение списка проектов (TR#13461).
- Это близко к ядру сценария “new user without saved project → открывается /projects”, хотя точная проверка `drillspot-settings.projectUuid = null` в TR кейсах не зафиксирована.

Статус маппинга: Partial

### 18. Восстановление ранее выбранного проекта при открытии базового URL

Автотест:

- Путь: playwright/tests/Routing/routing.spec.ts
- Название теста: Root URL: restore saved project on refresh

Найдено в TestRail:

- Best match: TR#82225 — Auto-oppenning dashboards if user don't have saved openTabs and have private and public dashboards (релевантность: Medium)
- Alternate: TR#82226 — Auto-oppenning dashboards if user don't have saved openTabs and have private or public dashboards (релевантность: Medium)
- Alternate: TR#82166 — Opening the last open dashboard (релевантность: Medium)

Обоснование:

- Эти кейсы покрывают восстановление проекта/дашбордов из `drillspot-settings` при открытии приложения (root URL) и авто-открытие дашбордов.
- В них не зафиксирован именно “refresh”, но функциональное ядро “restore saved project on root URL” совпадает.

Статус маппинга: Partial

### 19. Создание вкладки при открытии дашборда

Автотест:

- Путь: playwright/tests/Tabs/tab-lifecycle.spec.ts
- Название теста: should create tab when open dashboard

Найдено в TestRail:

- Best match: TR#12776 — Dashboard - open tabs (релевантность: Low)
- Alternate: TR#12775 — Dashboard - hiding active tab (релевантность: Low)
- Alternate: TR#82160 — Save open dashboards tabs when closing (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#12776: Shared keywords: dashboard, displayed, open, rendered, shown, дашборд, дашборда, отображается, панели, появляется
- TR#12775: Shared keywords: dashboard, open, tab, дашборда, открытии, открыть, появляется
- TR#82160: Shared keywords: open, tab, when, вкладка, дашборд, дашборда

Статус маппинга: Partial

### 20. Переключение дашборда через выпадающий список создаёт дополнительную вкладку

Автотест:

- Путь: playwright/tests/Tabs/tab-lifecycle.spec.ts
- Название теста: should switch dashboard via dropdown

Найдено в TestRail:

- Best match: TR#12776 — Dashboard - open tabs (релевантность: Low)
- Alternate: TR#154639 — Click on the button to expand the drop-down list of open dashboards (релевантность: Low)
- Alternate: TR#87717 — Switch to another dashboard (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#12776: Shared keywords: dashboard, displayed, open, rendered, shown, дашборд, дашборда, дашбордов, отображается, панели
- TR#154639: Shared keywords: open, выпадающем, выпадающий, дашборд, дашборда, дашбордов, списке, список
- TR#87717: Shared keywords: change, dashboard, switch, switching, дашборд, другой, переключении

Статус маппинга: Partial

### 21. Закрытие одной вкладки оставляет активным другой дашборд

Автотест:

- Путь: playwright/tests/Tabs/tab-lifecycle.spec.ts
- Название теста: should close tab and keep remaining dashboard active

Найдено в TestRail:

- Best match: TR#12776 — Dashboard - open tabs (релевантность: Low)
- Alternate: TR#12775 — Dashboard - hiding active tab (релевантность: Low)
- Alternate: TR#12783 — Dashboard - rename (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#12776: Shared keywords: active, dashboard, displayed, open, rendered, shown, активным, дашборд, дашборда, дашбордов
- TR#12775: Shared keywords: active, dashboard, open, tab, активным, дашборда, дашбордов, открыть, так
- TR#12783: Shared keywords: dashboard, активным, было, дашборд, дашборда, дашбордов

Статус маппинга: Partial

### 22. Открытие S&R по прямой ссылке отображает раздел и не создаёт дополнительные вкладки

Автотест:

- Путь: playwright/tests/Tabs/service-tabs.spec.ts
- Название теста: should open S&R tab in UI without saving to drillspot-settings

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 23. Открытие Trajectory по прямой ссылке отображает раздел и не создаёт дополнительные вкладки

Автотест:

- Путь: playwright/tests/Tabs/service-tabs.spec.ts
- Название теста: should open Trajectory tab in UI without saving to drillspot-settings

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 24. Открытие Mud Reports по прямой ссылке отображает раздел и не создаёт дополнительные вкладки

Автотест:

- Путь: playwright/tests/Tabs/service-tabs.spec.ts
- Название теста: should open Mud Reports tab in UI without saving to drillspot-settings

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 25. Открытие Rigs по прямой ссылке отображает раздел и не создаёт дополнительные вкладки

Автотест:

- Путь: playwright/tests/Tabs/service-tabs.spec.ts
- Название теста: should open Rigs tab in UI without saving to drillspot-settings

Найдено в TestRail:

- Best match: TR#334853 — 3D View. EoU state persists after page reload (релевантность: Low)
- Alternate: TR#116298 — Roadmap on Inverted units in MD domain (релевантность: Low)
- Alternate: TR#116299 — Roadmap on Inverted units in MD domain (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#334853: Shared keywords: settings, дождаться, загрузки
- TR#116298: Shared keywords: direct, панели, прямой
- TR#116299: Shared keywords: direct, панели, прямой

Статус маппинга: Partial

### 26. Создание нового дашборда из меню добавляет вкладку с корректным именем

Автотест:

- Путь: playwright/tests/Tabs/pending-dashboard-tab.spec.ts
- Название теста: should create new dashboard tab with correct name

Найдено в TestRail:

- Best match: TR#144820 — Creating a new dashboard by button Create Empty (релевантность: Low)
- Alternate: TR#61472 — Creating a new private dashboard from My dashboard tab (релевантность: High)
- Alternate: TR#144819 — Creating a new dashboard by button Apply Layout (релевантность: Low)
- Alternate: TR#154644 — Wells is missing from the Object  tree (релевантность: Low)

Обоснование:

- TR#61472 проверяет создание нового (private) дашборда через UI-меню и ожидает: POST `/dashboards`, открытие нового дашборда, появление нового таба и отображение имени в табе — это совпадает с функциональным ядром автотеста.
- Остальные кейсы оставлены как смежные/исторически похожие сценарии (Create Empty / Apply Layout), но с меньшей релевантностью к текущему UI.

Статус маппинга: Partial

### 27. После создания нового дашборда отображается зона дашборда

Автотест:

- Путь: playwright/tests/Tabs/pending-dashboard-tab.spec.ts
- Название теста: should load dashboard zone after creation

Найдено в TestRail:

- Best match: TR#144819 — Creating a new dashboard by button Apply Layout (релевантность: Low)
- Alternate: TR#144820 — Creating a new dashboard by button Create Empty (релевантность: Low)
- Alternate: TR#12776 — Dashboard - open tabs (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#144819: Shared keywords: created, dashboard, zone, дашборд, дашборда, имя, новый
- TR#144820: Shared keywords: created, dashboard, zone, дашборд, дашборда, имя, новый
- TR#12776: Shared keywords: dashboard, displayed, open, rendered, shown, дашборд, дашборда, дашбордов, имя, новый

Статус маппинга: Partial

### 28. После создания нового дашборда вкладка содержит корректное имя

Автотест:

- Путь: playwright/tests/Tabs/pending-dashboard-tab.spec.ts
- Название теста: should display correct name after creation

Найдено в TestRail:

- Best match: TR#12776 — Dashboard - open tabs (релевантность: Low)
- Alternate: TR#144819 — Creating a new dashboard by button Apply Layout (релевантность: Low)
- Alternate: TR#144820 — Creating a new dashboard by button Create Empty (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#12776: Shared keywords: dashboard, display, displayed, open, rendered, shown, дашборд, дашборда, дашбордов, имя
- TR#144819: Shared keywords: created, dashboard, name, дашборд, дашборда, имя, новый
- TR#144820: Shared keywords: created, dashboard, name, дашборд, дашборда, имя, новый

Статус маппинга: Partial

### 29. При ошибке создания дашборда показывается сообщение об ошибке

Автотест:

- Путь: playwright/tests/Tabs/pending-dashboard-tab.spec.ts
- Название теста: should show error message on creation failure

Найдено в TestRail:

- Best match: TR#12783 — Dashboard - rename (релевантность: Low)
- Alternate: TR#154644 — Wells is missing from the Object  tree (релевантность: Low)
- Alternate: TR#85400 — Opening a link to a non-accessible dashboard (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#12783: Shared keywords: dashboard, дашборд, дашборда, дашбордов, если, меню, об, ошибке
- TR#154644: Shared keywords: create, дашборда, дашбордов, нового, создание
- TR#85400: Shared keywords: dashboard, displayed, rendered, shown, дашборд, дашбордов, об, отображается, сообщение

Статус маппинга: Partial

### 30. При ошибке создания дашборда новая вкладка не добавляется

Автотест:

- Путь: playwright/tests/Tabs/pending-dashboard-tab.spec.ts
- Название теста: should not add tab on creation failure

Найдено в TestRail:

- Best match: TR#12783 — Dashboard - rename (релевантность: Low)
- Alternate: TR#154644 — Wells is missing from the Object  tree (релевантность: Low)
- Alternate: TR#12776 — Dashboard - open tabs (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#12783: Shared keywords: dashboard, not, дашборд, дашборда, дашбордов, если, меню, меняется, ошибке, появляется
- TR#154644: Shared keywords: create, not, tab, дашборда, дашбордов, нового, создание
- TR#12776: Shared keywords: dashboard, displayed, open, rendered, shown, дашборд, дашборда, дашбордов, если, меняется

Статус маппинга: Partial

### 31. Индикатор “открыто” отображается только у открытого приватного дашборда при совпадающих названиях

Автотест:

- Путь: playwright/tests/Tabs/dashboard-dropdown-opened-state.spec.ts
- Название теста: should highlight only the opened private dashboard when public dashboard has same name

Найдено в TestRail:

- Best match: TR#12776 — Dashboard - open tabs (релевантность: Low)
- Alternate: TR#12783 — Dashboard - rename (релевантность: Low)
- Alternate: TR#154639 — Click on the button to expand the drop-down list of open dashboards (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#12776: Shared keywords: dashboard, displayed, open, private, public, rendered, shown, дашборд, дашборда, дашбордов
- TR#12783: Shared keywords: dashboard, name, дашборд, дашборда, дашбордов, если, открытого, приватного, списке
- TR#154639: Shared keywords: open, выпадающем, выпадающий, дашборд, дашборда, дашбордов, списке, список

Статус маппинга: Partial

### 32. Индикатор “открыто” отображается только у открытого публичного дашборда при совпадающих названиях

Автотест:

- Путь: playwright/tests/Tabs/dashboard-dropdown-opened-state.spec.ts
- Название теста: should highlight only the opened public dashboard when private dashboard has same name

Найдено в TestRail:

- Best match: TR#12776 — Dashboard - open tabs (релевантность: Low)
- Alternate: TR#12783 — Dashboard - rename (релевантность: Low)
- Alternate: TR#154639 — Click on the button to expand the drop-down list of open dashboards (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#12776: Shared keywords: dashboard, displayed, open, private, public, rendered, shown, дашборд, дашборда, дашбордов
- TR#12783: Shared keywords: dashboard, name, дашборд, дашборда, дашбордов, если, открытого, публичного, списке
- TR#154639: Shared keywords: open, выпадающем, выпадающий, дашборд, дашборда, дашбордов, списке, список

Статус маппинга: Partial

### 33. Индикаторы “открыто” корректно обновляются при переключении между дашбордами с одинаковыми названиями

Автотест:

- Путь: playwright/tests/Tabs/dashboard-dropdown-opened-state.spec.ts
- Название теста: should update opened state correctly when switching between same-named dashboards

Найдено в TestRail:

- Best match: TR#154643 — In the Object tree, click on the button to switch between Traces and Messages (релевантность: Low)
- Alternate: TR#82159 — Save open dashboards tabs when openning (релевантность: Low)
- Alternate: TR#12776 — Dashboard - open tabs (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#154643: Shared keywords: between, change, switching, между, переключения
- TR#82159: Shared keywords: dashboards, open, when, дашборд, открыть, приватный, публичный, список
- TR#12776: Shared keywords: dashboards, displayed, open, rendered, shown, дашборд, дашборда, дашбордов, если, между

Статус маппинга: Partial

### 34. Открытие вкладки Rigs по прямой ссылке использует корректный формат адреса

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should open Rigs tab via direct URL with correct format

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 35. После открытия вкладки Rigs она отображается в панели вкладок

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should display Rigs tab in tab bar when opened

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 36. Повторное открытие Rigs не создаёт дубликат вкладки

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should focus existing Rigs tab when trying to open another one

Найдено в TestRail:

- Best match: TR#77790 — Rig tab opens only one time (релевантность: Low)
- Alternate: TR#77802 — Neither rig is selected when open Rig tab (релевантность: Low)
- Alternate: TR#77787 — Rig tab isn't displayed in Open dashboards menu (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#77790: Shared keywords: one, open, tab, вкладка, вкладок, открыта, открыть, перейти
- TR#77802: Shared keywords: open, tab, when, вкладка, открыта, открыть
- TR#77787: Shared keywords: open, tab, вкладка, вкладки, открыть

Статус маппинга: Partial

### 37. Многократная навигация на Rigs не создаёт несколько вкладок Rigs

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should not create duplicate Rigs tabs when navigating multiple times

Найдено в TestRail:

- Best match: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)
- Alternate: TR#77790 — Rig tab opens only one time (релевантность: Low)
- Alternate: TR#99062 — Tree condition when multiple wells was attached and Rig`s table is closed (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#81426: Shared keywords: open, rigs, tabs, другую, открыть
- TR#77790: Shared keywords: displayed, open, rendered, shown, вкладка, вкладок, открыть, отображается, перейти
- TR#99062: Shared keywords: displayed, multiple, rendered, rigs, shown, when, вкладка, отображается

Статус маппинга: Partial

### 38. На странице Rigs отображается заголовок

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should display Rigs header and table

Найдено в TestRail:

- Best match: TR#77793 — Empty Rig table state (релевантность: Low)
- Alternate: TR#99060 — Tree condition when well was attached and Rig`s table is closed (релевантность: Low)
- Alternate: TR#99062 — Tree condition when multiple wells was attached and Rig`s table is closed (релевантность: Low)

Обоснование:

- Functional core matched (2/8 core tokens)
- TR#77793: Shared keywords: open, rigs, table, открыть
- TR#99060: Shared keywords: displayed, rendered, rigs, shown, table, отображается
- TR#99062: Shared keywords: displayed, rendered, rigs, shown, table, отображается

Статус маппинга: Partial

### 39. На странице Rigs отображаются данные (список установок)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should display rig data from mock API

Найдено в TestRail:

- Best match: TR#77799 — Number data units converting (релевантность: Low)
- Alternate: TR#81403 — Rig data editing when user has different roles for General&Virtual projects (релевантность: Low)
- Alternate: TR#77649 — Rig tree when there are rigs in the project (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#77799: Shared keywords: api, data, данные, данных, отображаются
- TR#81403: Shared keywords: data, rig, видны, данные
- TR#77649: Shared keywords: open, rig, rigs, открыть, отображаются, список

Статус маппинга: Partial

### 40. Вкладка Rigs не сохраняется в drillspot-settings (service tab)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should NOT save Rigs tab to drillspot-settings on navigation

Найдено в TestRail:

- Best match: —

Обоснование:

- По выгрузке секции Rigs (2461) нет явного кейса, который проверяет сохранение/несохранение вкладки Rigs в `drillspot-settings` (POST /drillspot-settings и payload `tabs`).
- Ближайшие кейсы в секции Rigs относятся к поведению вкладки/дерева/несохранённых данных, но не к persist-настройкам tabs.

Статус маппинга: Not found

### 41. Вкладка Rigs закрывается при наличии нескольких вкладок

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should close Rigs tab when multiple tabs are open

Найдено в TestRail:

- Best match: TR#99062 — Tree condition when multiple wells was attached and Rig`s table is closed (релевантность: Low)
- Alternate: TR#82156 — Closing the Rig tab (релевантность: Low)
- Alternate: TR#77790 — Rig tab opens only one time (релевантность: Low)

Обоснование:

- Functional core matched (5/9 core tokens)
- TR#99062: Shared keywords: multiple, rigs, when, вкладка, вкладку, закрыть
- TR#82156: Shared keywords: tab, вкладка, закрывается, закрыть
- TR#77790: Shared keywords: open, tab, вкладка, вкладку, вкладок, открыть

Статус маппинга: Partial

### 42. При закрытии вкладки Rigs остаётся открыта как минимум одна вкладка

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should keep Dashboard tab active when Rigs tab is closed

Найдено в TestRail:

- Best match: TR#77790 — Rig tab opens only one time (релевантность: Low)
- Alternate: TR#77803 — The rig selection is reset when the Rig tab is closed (релевантность: Low)
- Alternate: TR#99060 — Tree condition when well was attached and Rig`s table is closed (релевантность: Low)

Обоснование:

- Functional core matched (5/9 core tokens)
- TR#77790: Shared keywords: open, tab, вкладка, вкладку, вкладок, открыта, открыть
- TR#77803: Shared keywords: closed, tab, when, вкладка, вкладку, закрыть
- TR#99060: Shared keywords: closed, rigs, when, вкладка, вкладку, закрыть

Статус маппинга: Partial

### 43. Вкладка Rigs корректно открывается рядом с вкладками Dashboard

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should work alongside Dashboard tabs

Найдено в TestRail:

- Best match: TR#77790 — Rig tab opens only one time (релевантность: Low)
- Alternate: TR#82152 — Switching between tabs (релевантность: Low)
- Alternate: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)

Обоснование:

- Functional core matched (3/6 core tokens)
- TR#77790: Shared keywords: open, вкладка, вкладок, открывается, открыть
- TR#82152: Shared keywords: tabs, вкладка, вкладками
- TR#81426: Shared keywords: dashboard, open, rigs, tabs, открыть

Статус маппинга: Partial

### 44. Переключение между вкладками Dashboard и Rigs по клику отображает выбранную вкладку

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should switch between Dashboard and Rigs tabs by clicking

Найдено в TestRail:

- Best match: TR#82152 — Switching between tabs (релевантность: Medium)
- Alternate: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)
- Alternate: TR#77790 — Rig tab opens only one time (релевантность: Low)

Обоснование:

- Functional core matched (5/10 core tokens)
- TR#82152: Shared keywords: between, change, displayed, rendered, shown, switch, switching, tabs, вкладками, вкладку
- TR#81426: Shared keywords: change, dashboard, open, rigs, switch, tabs, вкладку, дашборд, открыть
- TR#77790: Shared keywords: displayed, open, rendered, shown, вкладке, вкладку, вкладок, клику, открыть, отображается

Статус маппинга: Partial

### 45. Адрес страницы Rigs содержит корректный идентификатор проекта

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should update URL when navigating with different project

Найдено в TestRail:

- Best match: TR#78247 — Interaction with api when update rig (релевантность: Low)
- Alternate: TR#81500 — Interaction with api when duplicate a rig (релевантность: Low)
- Alternate: TR#78243 — Interaction with api when create a new rig (релевантность: Low)

Обоснование:

- Functional core matched (5/10 core tokens)
- TR#78247: Shared keywords: displayed, project, projects, rendered, rigs, shown, update, uuid, when, отображается
- TR#81500: Shared keywords: displayed, project, projects, rendered, rigs, shown, uuid, when, отображается, проекта
- TR#78243: Shared keywords: displayed, project, projects, rendered, rigs, shown, uuid, when, отображается, проекта

Статус маппинга: Partial

### 46. Корректный идентификатор вкладки Rigs в URL открывает страницу

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should only accept "list" as valid Rigs tab UUID

Найдено в TestRail:

- Best match: TR#82157 — Refresh the page (релевантность: Low)
- Alternate: TR#77790 — Rig tab opens only one time (релевантность: Low)
- Alternate: TR#77787 — Rig tab isn't displayed in Open dashboards menu (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#82157: Shared keywords: displayed, rendered, shown, отображается, страница, страницу
- TR#77790: Shared keywords: displayed, only, open, rendered, shown, tab, открыть, отображается
- TR#77787: Shared keywords: displayed, open, tab, вкладки, открыть

Статус маппинга: Partial

### 47. Некорректный идентификатор вкладки Rigs обрабатывается без критического сбоя

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should handle invalid Rigs tab UUID gracefully

Найдено в TestRail:

- Best match: TR#82157 — Refresh the page (релевантность: Low)
- Alternate: TR#78247 — Interaction with api when update rig (релевантность: Low)
- Alternate: TR#78243 — Interaction with api when create a new rig (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#82157: Shared keywords: displayed, rendered, shown, отображается, страница, страницу
- TR#78247: Shared keywords: displayed, rendered, rigs, shown, uuid, если, отображается, содержит
- TR#78243: Shared keywords: displayed, rendered, rigs, shown, uuid, если, отображается, содержит

Статус маппинга: Partial

### 48. При переходе с Dashboard на Rigs сбрасывается активное выделение в дереве объектов

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should reset tree state when switching to Rigs tab from Dashboard

Найдено в TestRail:

- Best match: TR#81100 — Neither well is selected when open Rig tab (релевантность: Low)
- Alternate: TR#77804 — The rig selection is reset after moving on another project (релевантность: Low)
- Alternate: TR#77803 — The rig selection is reset when the Rig tab is closed (релевантность: Low)

Обоснование:

- Functional core matched (3/8 core tokens)
- TR#81100: Shared keywords: displayed, open, rendered, shown, tab, when, дереве, дерево, объектов, открыть
- TR#77804: Shared keywords: displayed, rendered, reset, shown, дереве, объектов, отображается, переходе
- TR#77803: Shared keywords: displayed, rendered, reset, shown, tab, when, дереве, объектов, отображается

Статус маппинга: Partial

### 49. При открытии Rigs отображается Dashboard ribbon с отключёнными кнопками

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should display Dashboard ribbon with disabled buttons when Rigs tab first opened

Найдено в TestRail:

- Best match: TR#82155 — Switching to the Manage dashboard page (релевантность: Low)
- Alternate: TR#77651 — OUTDATED. Opening Rig tab from public dashboad isn't possible (релевантность: Low)
- Alternate: TR#99065 — Attach via tree when there are no rigs in the project (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#82155: Shared keywords: dashboard, displayed, open, rendered, shown, кнопки, открыть, отображается, панель
- TR#77651: Shared keywords: open, tab, открытия, открыть
- TR#99065: Shared keywords: displayed, open, rendered, rigs, shown, when, открыть, отображается, отображаются

Статус маппинга: Partial

### 50. При прямой навигации на Rigs отображается Dashboard ribbon с отключёнными кнопками

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should show Dashboard ribbon with disabled buttons on Rigs tab (Case 1: direct navigation)

Найдено в TestRail:

- Best match: TR#82155 — Switching to the Manage dashboard page (релевантность: Low)
- Alternate: TR#77651 — OUTDATED. Opening Rig tab from public dashboad isn't possible (релевантность: Low)
- Alternate: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#82155: Shared keywords: dashboard, displayed, open, rendered, shown, кнопки, открыть, отображается, панель
- TR#77651: Shared keywords: open, tab, открытия, открыть
- TR#81426: Shared keywords: dashboard, open, rigs, открыть

Статус маппинга: Partial

### 51. При переключении с Dashboard на Rigs кнопка Add New Widget доступна на Dashboard и недоступна на Rigs

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should show Dashboard ribbon with disabled buttons when switching from Dashboard to Rigs (Case 2)

Найдено в TestRail:

- Best match: TR#77792 — Add new rig isn't possible when the project has 100 rigs (релевантность: Low)
- Alternate: TR#82155 — Switching to the Manage dashboard page (релевантность: Low)
- Alternate: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#77792: Shared keywords: add, change, displayed, new, open, rendered, rigs, shown, switch, when
- TR#82155: Shared keywords: dashboard, displayed, open, rendered, shown, switching, кнопки, открыть, отображается, панель
- TR#81426: Shared keywords: change, dashboard, open, rigs, switch, вкладку, открыть, переключиться, состояние

Статус маппинга: Partial

### 52. На вкладке Rigs панель действий Dashboard остаётся в состоянии “недоступно” после стабилизации страницы

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should show Dashboard ribbon with disabled buttons on Rigs tab (Case 3: ribbon persists)

Найдено в TestRail:

- Best match: TR#82155 — Switching to the Manage dashboard page (релевантность: Low)
- Alternate: TR#77790 — Rig tab opens only one time (релевантность: Low)
- Alternate: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#82155: Shared keywords: dashboard, displayed, open, rendered, shown, открыть, отображается, панель
- TR#77790: Shared keywords: displayed, open, rendered, shown, tab, вкладке, открыть, отображается
- TR#81426: Shared keywords: dashboard, open, rigs, открыть

Статус маппинга: Partial

### 53. Переключение между Rigs и Dashboard скрывает содержимое неактивной вкладки

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should switch from Rigs to Dashboard and back correctly

Найдено в TestRail:

- Best match: TR#82152 — Switching between tabs (релевантность: Low)
- Alternate: TR#82154 — Switching between projects (релевантность: Low)
- Alternate: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)

Обоснование:

- Functional core matched (5/7 core tokens)
- TR#82152: Shared keywords: change, displayed, rendered, shown, switch, switching, между, отображается, переключиться
- TR#82154: Shared keywords: change, displayed, rendered, shown, switch, switching, между, отображается, переключиться
- TR#81426: Shared keywords: change, dashboard, open, rigs, switch, открыть, переключиться

Статус маппинга: Partial

### 54. Данные на странице Rigs сохраняются при переключении вкладок

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should maintain Rigs data when switching tabs

Найдено в TestRail:

- Best match: TR#82152 — Switching between tabs (релевантность: Low)
- Alternate: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)
- Alternate: TR#77799 — Number data units converting (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#82152: Shared keywords: change, switch, switching, tabs, данные, переключиться, таблице
- TR#81426: Shared keywords: change, dashboard, open, rigs, switch, tabs, открыть, переключиться
- TR#77799: Shared keywords: data, данные, данных, отображаются

Статус маппинга: Partial

### 55. На странице Rigs отображаются названия установок

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should display rig names from API

Найдено в TestRail:

- Best match: TR#77799 — Number data units converting (релевантность: Low)
- Alternate: TR#77824 — Rig name. It is impossible to save rigs with the same names (релевантность: Low)
- Alternate: TR#99065 — Attach via tree when there are no rigs in the project (релевантность: Low)

Обоснование:

- Functional core matched (3/8 core tokens)
- TR#77799: Shared keywords: api, данных, отображаются
- TR#77824: Shared keywords: names, rig, rigs
- TR#99065: Shared keywords: open, rigs, открыть, отображаются, таблице

Статус маппинга: Partial

### 56. На странице Rigs отображается информация о типе установки

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should display rig type information

Найдено в TestRail:

- Best match: TR#77791 — Table columns (релевантность: Low)
- Alternate: TR#82157 — Refresh the page (релевантность: Low)
- Alternate: TR#99065 — Attach via tree when there are no rigs in the project (релевантность: Low)

Обоснование:

- Functional core matched (2/8 core tokens)
- TR#77791: Shared keywords: rig, type, колонки, установки
- TR#82157: Shared keywords: displayed, rendered, rig, shown, данными, отображается, таблице
- TR#99065: Shared keywords: displayed, open, rendered, rigs, shown, открыть, отображается, отображаются, таблице

Статус маппинга: Partial

### 57. Страница Rigs отображается после завершения загрузки данных

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should show Rigs page after data is loaded

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 58. При клике по вкладке Rigs адрес страницы обновляется на формат Rigs

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should update URL when Rigs tab is activated by click

Найдено в TestRail:

- Best match: TR#77790 — Rig tab opens only one time (релевантность: Low)
- Alternate: TR#78247 — Interaction with api when update rig (релевантность: Low)
- Alternate: TR#77650 — Rig tree when there aren't rigs in the project (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#77790: Shared keywords: open, tab, вкладке, вкладку, вкладок, открыть
- TR#78247: Shared keywords: rigs, update, when, содержит
- TR#77650: Shared keywords: open, rigs, when, вкладку, клике, открыть

Статус маппинга: Partial

### 59. При прямой навигации на Rigs адрес страницы соответствует формату Rigs

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: should sync URL when navigating directly to Rigs

Найдено в TestRail:

- Best match: TR#81500 — Interaction with api when duplicate a rig (релевантность: Low)
- Alternate: TR#78247 — Interaction with api when update rig (релевантность: Low)
- Alternate: TR#78243 — Interaction with api when create a new rig (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#81500: Shared keywords: projects, rigs, uuid, when, содержит
- TR#78247: Shared keywords: projects, rigs, uuid, when, содержит
- TR#78243: Shared keywords: projects, rigs, uuid, when, содержит

Статус маппинга: Partial

### 60. Вкладка Rigs открывается только один раз (повторное открытие не создаёт дубликаты)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77790: Rig tab opens only one time - singleton behavior

Найдено в TestRail:

- Best match: TR#77790 — Rig tab opens only one time (релевантность: Low)
- Alternate: TR#81104 — It is possible to attach one rig to some wells (релевантность: Low)
- Alternate: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)

Обоснование:

- Functional core matched (7/10 core tokens)
- TR#77790: Shared keywords: one, only, open, opens, rig, tab, time, вкладка, вкладок, открывается
- TR#81104: Shared keywords: one, rig, один, перейти
- TR#81426: Shared keywords: open, rig, rigs, другую, открыть

Статус маппинга: Partial

### 61. Пустое состояние таблицы Rigs отображается корректно

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77793: Empty Rig table state displays correctly

Найдено в TestRail:

- Best match: TR#77791 — Table columns (релевантность: Low)
- Alternate: TR#77793 — Empty Rig table state (релевантность: Low)
- Alternate: TR#99065 — Attach via tree when there are no rigs in the project (релевантность: Low)

Обоснование:

- Functional core matched (5/10 core tokens)
- TR#77791: Shared keywords: rig, table, колонки, таблица, таблицы
- TR#77793: Shared keywords: empty, open, rig, rigs, state, table, открыть, таблицы
- TR#99065: Shared keywords: displayed, open, rendered, rigs, shown, открыть, отображается, отображаются, таблица, таблицы

Статус маппинга: Partial

### 62. Таблица Rigs содержит ожидаемые колонки

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77791: Table displays correct columns structure

Найдено в TestRail:

- Best match: TR#77791 — Table columns (релевантность: Medium)
- Alternate: TR#99065 — Attach via tree when there are no rigs in the project (релевантность: Low)
- Alternate: TR#77793 — Empty Rig table state (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#77791: Shared keywords: columns, derrick, drive, name, rig, table, type, колонки, колонок, содержит
- TR#99065: Shared keywords: open, rigs, заголовки, открыть, отображаются, таблица
- TR#77793: Shared keywords: open, rig, rigs, table, заголовки, открыть

Статус маппинга: Partial

### 63. При наведении на заполненную ячейку таблицы возможно отображение подсказки

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C81110: Filled table fields display tooltips on hover

Найдено в TestRail:

- Best match: TR#81110 — All table fields has tooltips if they are filled (релевантность: Low)
- Alternate: TR#81429 — There is a tooltip when hover on the rig (релевантность: Low)
- Alternate: TR#81492 — Duplicate icon is displyed when hover on the rig row in the table (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#81110: Shared keywords: fields, filled, table, tooltips
- TR#81429: Shared keywords: hover, rig, курсор, навести
- TR#81492: Shared keywords: hover, rig, table, навести, таблице

Статус маппинга: Partial

### 64. При открытии Rigs ни одна установка не выделена

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77802: No rig is selected when Rig tab opens

Найдено в TestRail:

- Best match: TR#99065 — Attach via tree when there are no rigs in the project (релевантность: Low)
- Alternate: TR#77802 — Neither rig is selected when open Rig tab (релевантность: Low)
- Alternate: TR#81100 — Neither well is selected when open Rig tab (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#99065: Shared keywords: displayed, no, open, rendered, rigs, shown, when, открыть, отображается, таблице
- TR#77802: Shared keywords: open, rig, selected, tab, when, ни, открыть, таблице
- TR#81100: Shared keywords: displayed, open, rendered, rig, selected, shown, tab, when, ни, открыть

Статус маппинга: Partial

### 65. Выбор установки в таблице выполняется

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77801: Rig selection syncs between table and object tree

Найдено в TestRail:

- Best match: TR#77801 — Seleted Rig in the table = selected rig in the object tree (релевантность: Low)
- Alternate: TR#77803 — The rig selection is reset when the Rig tab is closed (релевантность: Low)
- Alternate: TR#77804 — The rig selection is reset after moving on another project (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#77801: Shared keywords: object, open, rig, table, tree, выбрать, открыть, таблице
- TR#77803: Shared keywords: rig, selection, выбор, выбрать, таблице
- TR#77804: Shared keywords: rig, selection, выбор, выбрать, таблице

Статус маппинга: Partial

### 66. При закрытии вкладки Rigs панель установки не отображается

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77803: Rig selection resets when Rig tab is closed

Найдено в TestRail:

- Best match: TR#77803 — The rig selection is reset when the Rig tab is closed (релевантность: Low)
- Alternate: TR#99060 — Tree condition when well was attached and Rig`s table is closed (релевантность: Low)
- Alternate: TR#99062 — Tree condition when multiple wells was attached and Rig`s table is closed (релевантность: Low)

Обоснование:

- Functional core matched (5/10 core tokens)
- TR#77803: Shared keywords: closed, displayed, rendered, rig, selection, shown, tab, when, вкладку, выбрать
- TR#99060: Shared keywords: closed, displayed, rendered, rig, rigs, shown, when, вкладку, закрыть, отображается
- TR#99062: Shared keywords: closed, displayed, rendered, rig, rigs, shown, when, вкладку, закрыть, отображается

Статус маппинга: Partial

### 67. При переходе на список проектов и возврате на Rigs панель установки не отображается

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77804: Rig selection resets when switching projects

Найдено в TestRail:

- Best match: TR#77804 — The rig selection is reset after moving on another project (релевантность: Low)
- Alternate: TR#78279 — Attach to dropdown state when there are rigs in the project (релевантность: Low)
- Alternate: TR#77649 — Rig tree when there are rigs in the project (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#77804: Shared keywords: displayed, rendered, rig, selection, shown, вернуться, выбрать, отображается, перейти, переходе
- TR#78279: Shared keywords: displayed, open, rendered, rig, rigs, shown, when, открыть, отображается, перейти
- TR#77649: Shared keywords: displayed, open, rendered, rig, rigs, shown, when, открыть, отображается, проектов

Статус маппинга: Partial

### 68. При выборе установки на странице Rigs выполняется действие выбора

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C78252: Rig ribbon opens when rig is selected

Найдено в TestRail:

- Best match: TR#84477 — Duplicate isn't possible when the project has 100 rigs (релевантность: Low)
- Alternate: TR#77803 — The rig selection is reset when the Rig tab is closed (релевантность: Low)
- Alternate: TR#78281 — Not possible to reselect selected rig (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#84477: Shared keywords: open, rig, rigs, when, выбрать, открыть, строке, таблице
- TR#77803: Shared keywords: rig, when, выбор, выбрать, таблице
- TR#78281: Shared keywords: rig, selected, выбор, выбрать

Статус маппинга: Partial

### 69. После выбора установки доступны действия удаления/дублирования (если предусмотрены интерфейсом)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C78254: Rig ribbon displays correct state and buttons

Найдено в TestRail:

- Best match: TR#84477 — Duplicate isn't possible when the project has 100 rigs (релевантность: Low)
- Alternate: TR#81494 — Duplicating rig is possible by Duplicate Rig button in the Rig ribbon (релевантность: Low)
- Alternate: TR#77828 — Deleting rig is possible by Delete Rig button in the Rig ribbon (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#84477: Shared keywords: duplicate, open, rig, rigs, выбрать, дублирования, открыть, таблице
- TR#81494: Shared keywords: duplicate, ribbon, rig, дублирования, таблице
- TR#77828: Shared keywords: delete, ribbon, rig, таблице, удаления

Статус маппинга: Partial

### 70. Выбор установки выполняется (проверка взаимодействия с длинным названием)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C82164: Long rig name is truncated in ribbon

Найдено в TestRail:

- Best match: TR#81430 — The long rig name displayes with truncation (релевантность: Low)
- Alternate: TR#82164 — Long rig name is displayed in ribon with truncate (релевантность: Low)
- Alternate: TR#77824 — Rig name. It is impossible to save rigs with the same names (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#81430: Shared keywords: long, name, rig, длинным, названием
- TR#82164: Shared keywords: long, name, rig, выбрать, длинным
- TR#77824: Shared keywords: name, rig, rigs, проверка

Статус маппинга: Partial

### 71. Нажатие Add Rig добавляет новую строку в таблицу (если кнопка доступна на экране)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C78245: Add Rig button creates new rig row

Найдено в TestRail:

- Best match: TR#81396 — User with role MANAGER, GEOTECH, POWER_INTERPRETER, INTERPRETER can create a new rig (релевантность: Low)
- Alternate: TR#99065 — Attach via tree when there are no rigs in the project (релевантность: Low)
- Alternate: TR#85691 — Rig tab state in the virtual project (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#81396: Shared keywords: add, displayed, new, open, rendered, rig, shown, доступна, кнопка, нажать
- TR#99065: Shared keywords: displayed, open, rendered, rigs, shown, открыть, отображается, таблица, таблице, таблицу
- TR#85691: Shared keywords: add, displayed, open, rendered, rig, shown, кнопка, открыть, отображается, таблица

Статус маппинга: Partial

### 72. При достижении лимита 100 установок действие Add Rig недоступно (проверка загрузки состояния)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77792: Add Rig disabled at 100 rig limit

Найдено в TestRail:

- Best match: TR#82157 — Refresh the page (релевантность: Low)
- Alternate: TR#77792 — Add new rig isn't possible when the project has 100 rigs (релевантность: Low)
- Alternate: TR#84477 — Duplicate isn't possible when the project has 100 rigs (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#82157: Shared keywords: displayed, rendered, rig, shown, отображается, страница, страницу
- TR#77792: Shared keywords: 100, add, displayed, open, rendered, rig, rigs, shown, открыть, отображается
- TR#84477: Shared keywords: 100, displayed, open, rendered, rig, rigs, shown, открыть, отображается

Статус маппинга: Partial

### 73. При наведении на строку установки отображаются действия строки (проверка наведения)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77826: Delete icon appears on rig row hover

Найдено в TestRail:

- Best match: TR#77826 — Delete icon is displyed when hover on the rig row in the table (релевантность: Low)
- Alternate: TR#81429 — There is a tooltip when hover on the rig (релевантность: Low)
- Alternate: TR#81492 — Duplicate icon is displyed when hover on the rig row in the table (релевантность: Low)

Обоснование:

- Functional core matched (5/10 core tokens)
- TR#77826: Shared keywords: delete, hover, icon, rig, row, навести, строку, таблице
- TR#81429: Shared keywords: hover, rig, курсор, навести, строки, строку
- TR#81492: Shared keywords: hover, icon, rig, row, навести, строку, таблице

Статус маппинга: Partial

### 74. Нажатие на действие удаления открывает подтверждение (если действие доступно)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77827: Delete icon shows confirmation dialog

Найдено в TestRail:

- Best match: TR#77826 — Delete icon is displyed when hover on the rig row in the table (релевантность: Low)
- Alternate: TR#77827 — Deleting rig is possible by Delete icon in the table (релевантность: Low)
- Alternate: TR#81532 — User with role VIEWER can't duplicate a rig (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#77826: Shared keywords: delete, icon, навести, строку, удаления
- TR#77827: Shared keywords: delete, icon, нажать, подтверждения, удаления
- TR#81532: Shared keywords: open, курсор, навести, открыть, строку

Статус маппинга: Partial

### 75. Строка установки выбирается для редактирования (проверка базового сценария)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C78246: Rig data can be updated via table row editing

Найдено в TestRail:

- Best match: TR#77791 — Table columns (релевантность: Low)
- Alternate: TR#77799 — Number data units converting (релевантность: Low)
- Alternate: TR#81492 — Duplicate icon is displyed when hover on the rig row in the table (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#77791: Shared keywords: rig, table, таблица, таблицы, установки
- TR#77799: Shared keywords: data, данных, таблицы
- TR#81492: Shared keywords: displayed, rendered, rig, row, shown, table, отображается, строку

Статус маппинга: Partial

### 76. При наведении на строку установки доступно действие дублирования (проверка наведения)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C81492: Duplicate icon appears on rig row hover

Найдено в TestRail:

- Best match: TR#81492 — Duplicate icon is displyed when hover on the rig row in the table (релевантность: Low)
- Alternate: TR#77826 — Delete icon is displyed when hover on the rig row in the table (релевантность: Low)
- Alternate: TR#81532 — User with role VIEWER can't duplicate a rig (релевантность: Low)

Обоснование:

- Functional core matched (5/10 core tokens)
- TR#81492: Shared keywords: duplicate, hover, icon, rig, row, дублирования, навести, строку, таблице
- TR#77826: Shared keywords: hover, icon, rig, row, навести, строку, таблице
- TR#81532: Shared keywords: duplicate, open, rig, курсор, навести, открыть, строку

Статус маппинга: Partial

### 77. Дублирование установки увеличивает количество строк (если действие доступно)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C81493: Duplicate icon creates new rig copy

Найдено в TestRail:

- Best match: TR#81492 — Duplicate icon is displyed when hover on the rig row in the table (релевантность: Low)
- Alternate: TR#81532 — User with role VIEWER can't duplicate a rig (релевантность: Low)
- Alternate: TR#81493 — Duplicating rig is possible by Duplicate icon in the table (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#81492: Shared keywords: duplicate, icon, rig, дублирования, навести, строку, таблице
- TR#81532: Shared keywords: duplicate, open, rig, курсор, навести, открыть, строку
- TR#81493: Shared keywords: duplicate, icon, rig, дублирования, нажать, таблице

Статус маппинга: Partial

### 78. При достижении лимита 100 установок дублирование недоступно (проверка загрузки состояния)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C84477: Duplicate disabled at 100 rig limit

Найдено в TestRail:

- Best match: TR#82157 — Refresh the page (релевантность: Low)
- Alternate: TR#84477 — Duplicate isn't possible when the project has 100 rigs (релевантность: Low)
- Alternate: TR#77792 — Add new rig isn't possible when the project has 100 rigs (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#82157: Shared keywords: displayed, rendered, rig, shown, отображается, страница, страницу
- TR#84477: Shared keywords: 100, displayed, duplicate, open, rendered, rig, rigs, shown, открыть, отображается
- TR#77792: Shared keywords: 100, displayed, open, rendered, rig, rigs, shown, открыть, отображается

Статус маппинга: Partial

### 79. Таблица Rigs отображается при проверке ограничений текстовых полей

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77795: Text fields limited to 40 characters

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 80. Попытка задать одинаковые названия установок выполняется (проверка сценария ввода)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C77824: Duplicate rig names show validation error

Найдено в TestRail:

- Best match: TR#78254 — Rig ribon state (релевантность: Low)
- Alternate: TR#77824 — Rig name. It is impossible to save rigs with the same names (релевантность: Low)
- Alternate: TR#77791 — Table columns (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#78254: Shared keywords: rig, доступно, если, имя, редактирование
- TR#77824: Shared keywords: names, rig, rigs, поле, проверка
- TR#77791: Shared keywords: rig, имя, поле, установки

Статус маппинга: Partial

### 81. Переключение с Rigs на Dashboard выполняется при открытой таблице

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C82152: Unsaved data handling when switching tabs

Найдено в TestRail:

- Best match: TR#82152 — Switching between tabs (релевантность: Low)
- Alternate: TR#81426 — Collapse/expanse of rig level on the private dashboard, S&R, Rig tabs (релевантность: Low)
- Alternate: TR#82154 — Switching between projects (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#82152: Shared keywords: change, displayed, rendered, shown, switch, switching, tabs, вкладка, вкладку, открытой
- TR#81426: Shared keywords: change, dashboard, open, rigs, switch, tabs, вкладку, открыть, переключиться
- TR#82154: Shared keywords: change, displayed, rendered, shown, switch, switching, вкладка, открытой, отображается, переключиться

Статус маппинга: Partial

### 82. Закрытие вкладки Rigs выполняется (проверка сценария закрытия)

Автотест:

- Путь: playwright/tests/Tabs/rigs.spec.ts
- Название теста: C82156: Unsaved data warning when closing Rig tab

Найдено в TestRail:

- Best match: TR#82156 — Closing the Rig tab (релевантность: Low)
- Alternate: TR#77787 — Rig tab isn't displayed in Open dashboards menu (релевантность: Low)
- Alternate: TR#77651 — OUTDATED. Opening Rig tab from public dashboad isn't possible (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#82156: Shared keywords: closing, rig, tab, закрыть
- TR#77787: Shared keywords: open, rig, tab, вкладки, открыть
- TR#77651: Shared keywords: open, rig, tab, открытия, открыть

Статус маппинга: Partial

### 83. Переход по прямой ссылке на Linear Widget открывает соответствующий виджет

Автотест:

- Путь: playwright/tests/Widgets/widget-direct-links.spec.ts
- Название теста: should open Linear widget via direct link

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 84. Переход по прямой ссылке на Days vs Depth открывает соответствующий виджет

Автотест:

- Путь: playwright/tests/Widgets/widget-direct-links.spec.ts
- Название теста: should open Days vs Depth widget via direct link

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 85. Переход по прямой ссылке на Numeral открывает соответствующий виджет

Автотест:

- Путь: playwright/tests/Widgets/widget-direct-links.spec.ts
- Название теста: should open Numeral widget via direct link (no maximization)

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 86. Переход по прямой ссылке на Correlation открывает соответствующий виджет

Автотест:

- Путь: playwright/tests/Widgets/widget-direct-links.spec.ts
- Название теста: should open Correlation widget via direct link

Найдено в TestRail:

- Best match: TR#12709 — Driller's panel, Tops - displaying (релевантность: Low)
- Alternate: TR#334853 — 3D View. EoU state persists after page reload (релевантность: Low)
- Alternate: TR#356688 — 3D View. Camera state restored after page reload (релевантность: Low)

Обоснование:

- Functional core matched (2/9 core tokens)
- TR#12709: Shared keywords: correlation, displayed, param, parameter, rendered, shown, widget, виджета, отображается, отображению
- TR#334853: Shared keywords: виджета, дождаться, загрузки
- TR#356688: Shared keywords: виджета, дождаться, загрузки

Статус маппинга: Partial

### 87. Открытие GeoTarget по прямой ссылке

Автотест:

- Путь: playwright/tests/Widgets/widget-direct-links.spec.ts
- Название теста: should open GeoTarget widget via direct link

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 88. Переход по прямой ссылке на XPlot открывает соответствующий виджет

Автотест:

- Путь: playwright/tests/Widgets/widget-direct-links.spec.ts
- Название теста: should open XPlot widget via direct link

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 89. Переход по прямой ссылке на Metrics открывает соответствующий виджет

Автотест:

- Путь: playwright/tests/Widgets/widget-direct-links.spec.ts
- Название теста: should open Metrics widget via direct link

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 90. Каналы виджета Linear сохраняются при поздней загрузке данных

Автотест:

- Путь: playwright/tests/Widgets/trace-race-condition.spec.ts
- Название теста: should preserve widget traces when traces request is delayed

Найдено в TestRail:

- Best match: TR#12801 — Linear widget, inintial scalling - max trace calculation, when trace data returns slow (релевантность: Medium)
- Alternate: TR#12800 — Linear widget, inintial scalling - max trace calculation at publish dashboard (релевантность: Low)
- Alternate: TR#12774 — Linear, historical time data - displaying data in a widget (релевантность: Low)

Обоснование:

- Matched within TestRail section 8 (Linear widget)
- Core intent: preserve selected channels/traces when data/traces request is delayed
- TR#12801/TR#12800: closest coverage around slow trace data / initial scaling behavior
- TR#12774: adjacent Linear widget data display coverage

Статус маппинга: Partial

### 91. Linear Widget отображается на дашборде

Автотест:

- Путь: playwright/tests/Widgets/linear/linear-template.spec.ts
- Название теста: should render Linear widget

Найдено в TestRail:

- Best match: TR#12685 — Linear, historical depth data - displaying data in a widget (релевантность: Low)
- Alternate: TR#12774 — Linear, historical time data - displaying data in a widget (релевантность: Low)
- Alternate: TR#12766 — Linear widget - checkbox Crosshair in public dashboard (релевантность: Low)

Обоснование:

- Matched within TestRail section 8 (Linear widget)
- Functional core matched (3/6 core tokens)
- TR#12685/TR#12774: Shared keywords: linear, render, widget, дашборд/дашборде
- TR#12766: adjacent UI presence in public dashboard (Linear widget ribbon)

Статус маппинга: Partial

### 92. Работа с Linear Widget: добавление каналов и добавление второго трека

Автотест:

- Путь: playwright/tests/Widgets/linear/linear-widget.spec.ts
- Название теста: should open Linear widget for active well

Найдено в TestRail:

- Best match: TR#65537 — Drag and drop to add a trace to the track on the selected widget (релевантность: Medium)
- Alternate: TR#65573 — Turn off the check-box for the trace. Add track and turn on the check-box for the trace (релевантность: Low)
- Alternate: TR#65569 — Re-enable the deleted trace via manual switching check box (релевантность: Low)

Обоснование:

- Matched within TestRail section 8 (Linear widget)
- Core intent: add channels/traces to widget and add a second track
- TR#65537: add trace to track on selected widget
- TR#65573: explicitly covers adding a track (+ trace checkbox behavior)

Статус маппинга: Partial

### 93. Изменение порогов опасностей обновляет индикацию на Linear Widget

Автотест:

- Путь: playwright/tests/Widgets/linear/hazard-thresholds-update.spec.ts
- Название теста: should automatically update hazard colors when thresholds change

Найдено в TestRail:

- Best match: TR#316801 — Hazard Display - Dynamic Filtering Update Without Reload (релевантность: High)
- Alternate: TR#316802 — Hazard Display - Show Previously Hidden Hazards on Threshold Decrease (релевантность: Medium)
- Alternate: TR#316803 — Hazard Display - Hide Visible Hazards on Threshold Increase (релевантность: Medium)
- Alternate: TR#316804 — Hazard Display - Color Tag Filtering Indication (релевантность: Medium)

Обоснование:

- Matched within TestRail section 23960 (Hazards Thresholds → Hazards Display in Widgets)
- Core intent: after changing hazard thresholds, widget indication updates without reload (and may change from critical)
- TR#316801: direct match — dynamic filtering update without page reload
- TR#316802/TR#316803: cover visibility changes when thresholds decrease/increase
- TR#316804: covers color indication rules for tags under configured thresholds

Статус маппинга: Covered

### 94. Отображение GeoTarget 3D в исходном состоянии

Автотест:

- Путь: playwright/tests/Widgets/geotarget/geotarget-template.spec.ts
- Название теста: should render GeoTarget 3D widget

Найдено в TestRail:

- Best match: TR#334862 — 3D View. Ellipses with Vertical Exaggeration = 1 (релевантность: Low)
- Alternate: TR#340976 — 3D view. Displaying trajectory color, weight, type, label, survey points (релевантность: Low)
- Alternate: TR#352434 — 3D View. Grid initial display (релевантность: Low)

Обоснование:

- Functional core matched (4/9 core tokens)
- TR#334862: Shared keywords: 3d, виду, корректно
- TR#340976: Shared keywords: 3d, displayed, matches, open, rendered, shown, well, widget, открыть, отображается
- TR#352434: Shared keywords: 3d, display, displayed, initial, render, rendered, shown, well, отображается, отображение

Статус маппинга: Partial

### 95. Автоцентрирование GeoTarget 3D на активной скважине и корректное отображение после взаимодействий

Автотест:

- Путь: playwright/tests/Widgets/geotarget/geotarget-3d.spec.ts
- Название теста: should auto-center on active well and handle interactions

Найдено в TestRail:

- Best match: TR#352446 — 3D View. Grid rebuild on changing geometry of active well trajectory (релевантность: High)
- Alternate: TR#325736 — Active Well. Changing trajectory trigger full AC Report recalculation (релевантность: Medium)
- Alternate: TR#340977 — 3D view. Displaying trajectory when changing well (релевантность: Medium)

Обоснование:

- Single strong match (>=60%)
- TR#352446: Shared keywords: 3d, active, changing, trajectory, well, активной, скважины
- TR#325736: Shared keywords: active, changing, display, displayed, render, rendered, shown, trajectory, well, активной
- TR#340977: Shared keywords: 3d, changing, displayed, rendered, shown, trajectory, well, отображается

Статус маппинга: Covered

### 96. Driller Panel отображается на дашборде

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/driller-panel-template.spec.ts
- Название теста: should render Driller Panel widget with offsets

Найдено в TestRail:

- Best match: TR#352814 — Switching ribbons when clicking on different elements (релевантность: Low)
- Alternate: TR#390889 — Realtime updates from Solo reflected in selector (релевантность: Low)
- Alternate: TR#390861 — Set 0 TVT control displayed in TVT mode (релевантность: Low)

Обоснование:

- Functional core matched (3/8 core tokens)
- TR#352814: Shared keywords: driller, panel, виджета
- TR#390889: Shared keywords: driller, panel, виджета
- TR#390861: Shared keywords: displayed, rendered, shown, widget, виджет, виджета, отображается

Статус маппинга: Partial

### 97. На Driller Panel в режиме TVT отображается поле 0 TVT

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/zero-tvt-horizon.spec.ts
- Название теста: should display 0 TVT field

Найдено в TestRail:

- Best match: TR#352814 — Switching ribbons when clicking on different elements (релевантность: Low)
- Alternate: TR#390889 — Realtime updates from Solo reflected in selector (релевантность: Low)
- Alternate: TR#390862 — Set 0 TVT control hidden in MD mode (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#352814: Shared keywords: driller, panel, виджета
- TR#390889: Shared keywords: driller, panel, виджета
- TR#390862: Shared keywords: displayed, rendered, shown, tvt, отображается, режиме

Статус маппинга: Partial

### 98. Поле 0 TVT содержит чекбокс и селект горизонта

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/zero-tvt-horizon.spec.ts
- Название теста: should display checkbox and select input in 0 TVT field

Найдено в TestRail:

- Best match: TR#352814 — Switching ribbons when clicking on different elements (релевантность: Low)
- Alternate: TR#390889 — Realtime updates from Solo reflected in selector (релевантность: Low)
- Alternate: TR#390868 — Horizon selector allows changing horizon (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#352814: Shared keywords: driller, panel, виджета
- TR#390889: Shared keywords: driller, panel, виджета
- TR#390868: Shared keywords: displayed, open, rendered, shown, tvt, горизонта, открыть, отображается, селект

Статус маппинга: Partial

### 99. В селекте горизонта отображается непустой список опций

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/zero-tvt-horizon.spec.ts
- Название теста: should display not empty options list in horizon select

Найдено в TestRail:

- Best match: TR#390889 — Realtime updates from Solo reflected in selector (релевантность: Low)
- Alternate: TR#390882 — Horizon selector displays ALL horizons from Starred interpretation regardless of visibility (релевантность: Low)
- Alternate: TR#390867 — Horizon selector first horizon selected by default (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#390889: Shared keywords: driller, panel, виджета, выбор, списка
- TR#390882: Shared keywords: horizon, open, горизонтов, открыть, отображаются, список
- TR#390867: Shared keywords: horizon, горизонтов, селекте, списка

Статус маппинга: Partial

### 100. В выборе горизонта отображается значение первого горизонта как выбранное

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/zero-tvt-horizon.spec.ts
- Название теста: should display horizon select with horizons from starred interpretation where first horizon is selected

Найдено в TestRail:

- Best match: TR#390867 — Horizon selector first horizon selected by default (релевантность: Low)
- Alternate: TR#390889 — Realtime updates from Solo reflected in selector (релевантность: Low)
- Alternate: TR#390882 — Horizon selector displays ALL horizons from Starred interpretation regardless of visibility (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#390867: Shared keywords: first, horizon, selected, starred, горизонтов, значение, списка
- TR#390889: Shared keywords: driller, panel, starred, виджета, списка
- TR#390882: Shared keywords: horizon, horizons, interpretation, open, starred, горизонтов, открыть, список

Статус маппинга: Partial

### 101. В опциях горизонта отображается иконка горизонта

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/zero-tvt-horizon.spec.ts
- Название теста: should display horizon icon and name in select options

Найдено в TestRail:

- Best match: TR#390889 — Realtime updates from Solo reflected in selector (релевантность: Low)
- Alternate: TR#390882 — Horizon selector displays ALL horizons from Starred interpretation regardless of visibility (релевантность: Low)
- Alternate: TR#352814 — Switching ribbons when clicking on different elements (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#390889: Shared keywords: driller, panel, виджета, списка
- TR#390882: Shared keywords: horizon, open, горизонтов, открыть, список
- TR#352814: Shared keywords: driller, panel, виджета

Статус маппинга: Partial

### 102. Состояние чекбокса 0 TVT и выбранный горизонт сохраняются

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/zero-tvt-horizon.spec.ts
- Название теста: should save zero TVT checkbox state to wellbore settings and also first selected horizon uuid

Найдено в TestRail:

- Best match: TR#390889 — Realtime updates from Solo reflected in selector (релевантность: Low)
- Alternate: TR#390891 — Deleting selected horizon updates control state (релевантность: Low)
- Alternate: TR#390865 — Set 0 TVT checkbox default state is off (релевантность: Low)

Обоснование:

- Functional core matched (3/10 core tokens)
- TR#390889: Shared keywords: driller, panel, виджета, выбранный, горизонт
- TR#390891: Shared keywords: horizon, selected, state, виджета, выбранный, горизонт, состояние
- TR#390865: Shared keywords: checkbox, state, tvt, состояние, чекбокс, чекбокса

Статус маппинга: Partial

### 103. Выбор другого горизонта сохраняется

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/zero-tvt-horizon.spec.ts
- Название теста: should save zero TVT horizon uuid to wellbore settings

Найдено в TestRail:

- Best match: TR#390889 — Realtime updates from Solo reflected in selector (релевантность: Low)
- Alternate: TR#390868 — Horizon selector allows changing horizon (релевантность: Low)
- Alternate: TR#390884 — Cannot deselect selected horizon in selector (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#390889: Shared keywords: driller, panel, виджета, выбор, выбранный, горизонт, новый
- TR#390868: Shared keywords: horizon, open, tvt, выбранный, выбрать, горизонт, горизонта, другой, открыть
- TR#390884: Shared keywords: horizon, open, выбор, выбранный, горизонт, горизонта, открыть

Статус маппинга: Partial

### 104. В режиме MD поле 0 TVT не отображается

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/zero-tvt-horizon.spec.ts
- Название теста: should not display 0 TVT control in MD mode

Найдено в TestRail:

- Best match: TR#390862 — Set 0 TVT control hidden in MD mode (релевантность: Medium)
- Alternate: TR#390861 — Set 0 TVT control displayed in TVT mode (релевантность: Low)
- Alternate: TR#390877 — Setting persists when switching between MD and TVT modes (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#390862: Shared keywords: change, control, displayed, md, mode, rendered, shown, switch, tvt, отображается
- TR#390861: Shared keywords: change, control, displayed, mode, rendered, shown, switch, tvt, виджета, отображается
- TR#390877: Shared keywords: change, md, switch, tvt, режим

Статус маппинга: Partial

### 105. Переключение режима с TVT на MD не приводит к повторному сохранению настроек 0 TVT

Автотест:

- Путь: playwright/tests/Widgets/driller-panel/zero-tvt-horizon.spec.ts
- Название теста: should not trigger extra PUT request when switching from TVT to MD

Найдено в TestRail:

- Best match: TR#390861 — Set 0 TVT control displayed in TVT mode (релевантность: Low)
- Alternate: TR#352814 — Switching ribbons when clicking on different elements (релевантность: Low)
- Alternate: TR#390877 — Setting persists when switching between MD and TVT modes (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#390861: Shared keywords: change, switch, tvt, виджета, режим, режима, чекбокс
- TR#352814: Shared keywords: driller, panel, switching, when, виджета, включения
- TR#390877: Shared keywords: change, md, switch, switching, tvt, when, режим, чекбокс

Статус маппинга: Partial

