# Autotests → TestRail mapping

Generated: 2026-02-12T10:58:58.991Z
Project: 5
Search scope: section 6277 (including all child sections via direct API export)
Cases in scope: 423
Input: results/01-autotest-coverage/QAA-6265_trajectory.md

### 1. Отображение атрибутов скважины в боковой панели

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-001: Sidebar renders with correct values for wellbore

Найдено в TestRail:

- Best match: TR#287279 — Verify X(G/N) and Y(G/N) calculation dependency on Xsrf and Ysrf (релевантность: High)
- Alternate: TR#314581 — Send only changed attributes - Xsrf with calculated magnetic model (релевантность: High)
- Alternate: TR#314579 — Send only changed attributes - Xsrf with User Defined magnetic model (релевантность: High)

Обоснование:

- Single strong match (>=60%)
- TR#287279: Shared keywords: trajectory, well, xsrf, ysrf, поле, поля
- TR#314581: Shared keywords: api, attributes, gn, trajectory, values, well, xsrf, поле, полей, содержат
- TR#314579: Shared keywords: attributes, gn, trajectory, values, well, xsrf, поле, траектории

Статус маппинга: Covered

### 2. Отображение атрибутов typewell в боковой панели

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-001b: Sidebar renders with correct values for typewell

Найдено в TestRail:

- Best match: TR#285686 — Surface Location Xsrf field - valid input (релевантность: High)
- Alternate: TR#285687 — Surface Location Xsrf field - range validation (релевантность: Medium)
- Alternate: TR#285688 — Surface Location Ysrf field - valid input (релевантность: Medium)

Обоснование:

- Single strong match (>=60%)
- TR#285686: Shared keywords: displayed, rendered, shown, trajectory, typewell, xsrf, отображается, поле, поля, траектории
- TR#285687: Shared keywords: displayed, rendered, shown, trajectory, typewell, xsrf, отображается, поле
- TR#285688: Shared keywords: displayed, rendered, shown, trajectory, typewell, ysrf, отображается, поле, поля, траектории

Статус маппинга: Covered

### 3. Отображение атрибутов well plan в боковой панели

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-001c: Sidebar renders with correct values for well plan

Найдено в TestRail:

- Best match: TR#153763 — Valid values Xsrf  in Surface Location in side bar in Well Trajectory of well plan (релевантность: High)
- Alternate: TR#269715 — Valid characters Xsrf  in Surface Location in side bar in Well Trajectory of well plan (релевантность: High)
- Alternate: TR#269716 — Valid values Ysrf  in Surface Location in side bar in Well Trajectory of well plan (релевантность: High)

Обоснование:

- Single strong match (>=60%)
- TR#153763: Shared keywords: open, plan, trajectory, values, well, xsrf, открыть, поле
- TR#269715: Shared keywords: open, plan, trajectory, well, xsrf, открыть, поле
- TR#269716: Shared keywords: open, plan, trajectory, values, well, ysrf, открыть, поле

Статус маппинга: Covered

### 4. Изменение Azimuth VS GN и проверка перерасчёта VS

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-002: Edit Azim VS GN - verify VS recalculation correctness

Найдено в TestRail:

- Best match: TR#314573 — Send only changed attributes - Azimuth VS field with trajectory recalculation (релевантность: Low)
- Alternate: TR#314547 — Verify trajectory recalculation on wellheader changes (релевантность: Low)
- Alternate: TR#314572 — Send only changed attributes - Grid Convergence field with trajectory recalculation (релевантность: Low)

Обоснование:

- Functional core matched (5/9 core tokens)
- TR#314573: Shared keywords: attributes, azimuth, gn, recalculation, trajectory, vs, значение, изменить, таблице
- TR#314547: Shared keywords: 45, 90, azim, azimuth, gn, recalculation, trajectory, verify, vs, значения
- TR#314572: Shared keywords: attributes, azim, gn, recalculation, trajectory, vs, значение, изменить, таблице

Статус маппинга: Partial

### 5. Изменение XSRF и проверка перерасчёта траектории (Wellbore и FOOT-проект)

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-003: Edit XSRF and verify trajectory recalculation

Найдено в TestRail:

- Best match: TR#170730 — Values of Xsrf ​​are sent to the back in unconverted units (ft project) (релевантность: High)
- Alternate: TR#170732 — Values of Xsrf ​​are sent to the back in unconverted units (ft-m project) (релевантность: High)
- Alternate: TR#314579 — Send only changed attributes - Xsrf with User Defined magnetic model (релевантность: High)

Обоснование:

- Single strong match (>=60%)
- TR#170730: Shared keywords: foot, ft, project, trajectory, units, xsrf, ввести, значение, проект, футах
- TR#170732: Shared keywords: ft, project, trajectory, units, xsrf, ввести, значение, проект
- TR#314579: Shared keywords: 100, attributes, foot, project, trajectory, xsrf, проект, траектории

Статус маппинга: Covered

### 6. Изменение XSRF и проверка перерасчёта для typewell

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-003b: Edit XSRF and verify trajectory recalculation for typewell

Найдено в TestRail:

- Best match: TR#285686 — Surface Location Xsrf field - valid input (релевантность: High)
- Alternate: TR#285687 — Surface Location Xsrf field - range validation (релевантность: High)
- Alternate: TR#285685 — Project coordinate system validation errors do not affect the disabling of inputs in the sidebar for Typewell (релевантность: Medium)

Обоснование:

- Single strong match (>=60%)
- TR#285686: Shared keywords: trajectory, typewell, xsrf, ввести, значение, поле
- TR#285687: Shared keywords: trajectory, typewell, xsrf, ввести, значение, поле
- TR#285685: Shared keywords: coordinate, panel, sidebar, trajectory, typewell, xsrf, значение, поле

Статус маппинга: Covered

### 7. Изменение XSRF и проверка перерасчёта для well plan

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-003c: Edit XSRF and verify trajectory recalculation for well plan

Найдено в TestRail:

- Best match: TR#153763 — Valid values Xsrf  in Surface Location in side bar in Well Trajectory of well plan (релевантность: High)
- Alternate: TR#269715 — Valid characters Xsrf  in Surface Location in side bar in Well Trajectory of well plan (релевантность: High)
- Alternate: TR#154653 — Changing value of Vertical in Location Uncertainly in side bar in Well Trajectory of well plan (релевантность: High)

Обоснование:

- Single strong match (>=60%)
- TR#153763: Shared keywords: plan, trajectory, well, xsrf, ввести, значение, поле
- TR#269715: Shared keywords: plan, trajectory, well, xsrf, ввести, поле
- TR#154653: Shared keywords: changing, plan, trajectory, well, значение, поле

Статус маппинга: Covered

### 8. Изменение YSRF и проверка перерасчёта траектории

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-004: Edit YSRF and verify trajectory recalculation

Найдено в TestRail:

- Best match: TR#170733 — Values of Ysrf ​​are sent to the back in unconverted units (ft project) (релевантность: High)
- Alternate: TR#170735 — Values of Ysrf ​​are sent to the back in unconverted units (ft-m project) (релевантность: High)
- Alternate: TR#314582 — Send only changed attributes - Ysrf with calculated magnetic model (релевантность: High)

Обоснование:

- Single strong match (>=60%)
- TR#170733: Shared keywords: foot, ft, project, trajectory, ysrf, ввести, значение, поле
- TR#170735: Shared keywords: ft, project, trajectory, ysrf, ввести, значение, поле
- TR#314582: Shared keywords: attributes, coordinate, project, trajectory, ysrf, поле, траектории

Статус маппинга: Covered

### 9. Изменение KB Elevation и проверка перерасчёта TVDSS

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-005: Edit KB Elevation and verify TVDSS recalculation

Найдено в TestRail:

- Best match: TR#314574 — Send only changed attributes - KB Elevation field with trajectory recalculation (релевантность: Low)
- Alternate: TR#314552 — Trajectory table recalculation on wellheader changes from StarSteer (релевантность: Low)
- Alternate: TR#314547 — Verify trajectory recalculation on wellheader changes (релевантность: Low)

Обоснование:

- Functional core matched (5/12 core tokens)
- TR#314574: Shared keywords: attributes, elevation, kb, recalculation, trajectory, tvdss, значение, изменить, пересчитывается, таблице
- TR#314552: Shared keywords: elevation, kb, recalculation, trajectory, tvdss, изменении, изменения, изменить, пересчитывается, проверить
- TR#314547: Shared keywords: elevation, kb, recalculation, trajectory, tvdss, verify, изменении, изменить, проверить, таблице

Статус маппинга: Partial

### 10. Изменение Grid Convergence — значение сохраняется

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-006: Edit Grid Convergence - verify value saved

Найдено в TestRail:

- Best match: TR#314572 — Send only changed attributes - Grid Convergence field with trajectory recalculation (релевантность: Low)
- Alternate: TR#285685 — Project coordinate system validation errors do not affect the disabling of inputs in the sidebar for Typewell (релевантность: Low)
- Alternate: TR#183607 — Project coordinate system validation errors do not affect the disabling of inputs in the sidebar (релевантность: Low)

Обоснование:

- Functional core matched (4/9 core tokens)
- TR#314572: Shared keywords: attributes, convergence, displayed, grid, rendered, shown, trajectory, значение, изменить, отображается
- TR#285685: Shared keywords: convergence, displayed, grid, panel, rendered, shown, sidebar, trajectory, значение, отображается
- TR#183607: Shared keywords: convergence, displayed, grid, panel, rendered, shown, sidebar, trajectory, значение, отображается

Статус маппинга: Partial

### 11. Изменение Vertical Uncertainty

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-007: Edit Location Uncertainty (Vertical)

Найдено в TestRail:

- Best match: TR#285685 — Project coordinate system validation errors do not affect the disabling of inputs in the sidebar for Typewell (релевантность: Low)
- Alternate: TR#314572 — Send only changed attributes - Grid Convergence field with trajectory recalculation (релевантность: Low)
- Alternate: TR#314573 — Send only changed attributes - Azimuth VS field with trajectory recalculation (релевантность: Low)

Обоснование:

- Functional core matched (4/7 core tokens)
- TR#285685: Shared keywords: displayed, location, panel, rendered, shown, sidebar, trajectory, uncertainty, vertical, значение
- TR#314572: Shared keywords: 10, attributes, displayed, rendered, shown, trajectory, значение, изменить, отображается, поле
- TR#314573: Shared keywords: 10, attributes, trajectory, значение, изменить, поле

Статус маппинга: Partial

### 12. Изменение Horizontal Uncertainty

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-008: Edit Location Uncertainty (Horizontal)

Найдено в TestRail:

- Best match: TR#285685 — Project coordinate system validation errors do not affect the disabling of inputs in the sidebar for Typewell (релевантность: Low)
- Alternate: TR#183607 — Project coordinate system validation errors do not affect the disabling of inputs in the sidebar (релевантность: Low)
- Alternate: TR#314578 — Send only changed attributes - Location Uncertainty fields (релевантность: Low)

Обоснование:

- Functional core matched (5/7 core tokens)
- TR#285685: Shared keywords: displayed, horizontal, location, panel, rendered, shown, sidebar, trajectory, uncertainty, значение
- TR#183607: Shared keywords: displayed, horizontal, location, panel, rendered, shown, sidebar, trajectory, значение, отображается
- TR#314578: Shared keywords: attributes, horizontal, location, uncertainty, значение, изменить, поле

Статус маппинга: Partial

### 13. Изменение даты (Magnetic Model) — поле модели и даты обновляются

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-009: Edit Magnetic Model - triggers magnetic params fetch

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 14. Изменение Sample Date — поле отображается

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-010: Edit Sample Date - triggers magnetic params fetch

Найдено в TestRail:

- Best match: TR#314572 — Send only changed attributes - Grid Convergence field with trajectory recalculation (релевантность: Low)
- Alternate: TR#314584 — Send only changed attributes - Sample Date with calculated magnetic model (релевантность: Low)
- Alternate: TR#314573 — Send only changed attributes - Azimuth VS field with trajectory recalculation (релевантность: Low)

Обоснование:

- Functional core matched (4/12 core tokens)
- TR#314572: Shared keywords: attributes, displayed, rendered, shown, trajectory, отображается, поле
- TR#314584: Shared keywords: attributes, date, magnetic, sample, дату, поле
- TR#314573: Shared keywords: attributes, trajectory, поле

Статус маппинга: Partial

### 15. Выбор магнитной модели — параметры подставляются

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-attributes.spec.ts
- Название теста: TA-011: Magnetic parameters auto-populate after model change

Найдено в TestRail:

- Best match: TR#314587 — Send only changed attributes - User Defined magnetic fields (релевантность: Low)
- Alternate: TR#314572 — Send only changed attributes - Grid Convergence field with trajectory recalculation (релевантность: Low)
- Alternate: TR#314573 — Send only changed attributes - Azimuth VS field with trajectory recalculation (релевантность: Low)

Обоснование:

- Functional core matched (2/10 core tokens)
- TR#314587: Shared keywords: angle, attributes, declination, dip, field, magnetic, model, strength, значение, поле
- TR#314572: Shared keywords: attributes, field, trajectory, значение, поле, поля
- TR#314573: Shared keywords: attributes, field, trajectory, значение, поле, поля

Статус маппинга: Partial

### 16. Без Grid Convergence — колонка AZIM TN скрыта

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-azimuth.spec.ts
- Название теста: TAZ-001: Without Grid Convergence - AZIM TN column hidden

Найдено в TestRail:

- Best match: TR#314553 — Trajectory table Grid Convergence impact from StarSteer (релевантность: Medium)
- Alternate: TR#314573 — Send only changed attributes - Azimuth VS field with trajectory recalculation (релевантность: Low)
- Alternate: TR#314526 — Display trajectory table structure and headers (релевантность: Low)

Обоснование:

- Functional core matched (5/10 core tokens)
- TR#314553: Shared keywords: azim, column, convergence, gn, grid, table, tn, trajectory, колонка, скрыта
- TR#314573: Shared keywords: azimuth, column, gn, trajectory, колонка, таблице, траектории
- TR#314526: Shared keywords: azim, convergence, displayed, gn, grid, rendered, shown, table, tn, trajectory

Статус маппинга: Partial

### 17. Без Grid Convergence — AZIM GN редактируется

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-azimuth.spec.ts
- Название теста: TAZ-002: Without Grid Convergence - AZIM GN is editable

Найдено в TestRail:

- Best match: TR#314573 — Send only changed attributes - Azimuth VS field with trajectory recalculation (релевантность: Low)
- Alternate: TR#153768 — Validation input Azimuth VS (GN) in Surface Location in side bar in Well Trajectory (релевантность: Low)
- Alternate: TR#314572 — Send only changed attributes - Grid Convergence field with trajectory recalculation (релевантность: Low)

Обоснование:

- Functional core matched (5/12 core tokens)
- TR#314573: Shared keywords: azimuth, gn, trajectory, значение, изменить, обновляется, таблице
- TR#153768: Shared keywords: azimuth, gn, trajectory, значение, от
- TR#314572: Shared keywords: azim, convergence, gn, grid, trajectory, значение, изменить, обновляется, таблице

Статус маппинга: Partial

### 18. С Grid Convergence — колонка AZIM TN отображается

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-azimuth.spec.ts
- Название теста: TAZ-003: With Grid Convergence - AZIM TN column visible

Найдено в TestRail:

- Best match: TR#314553 — Trajectory table Grid Convergence impact from StarSteer (релевантность: Medium)
- Alternate: TR#314572 — Send only changed attributes - Grid Convergence field with trajectory recalculation (релевантность: Low)
- Alternate: TR#314573 — Send only changed attributes - Azimuth VS field with trajectory recalculation (релевантность: Low)

Обоснование:

- Functional core matched (6/10 core tokens)
- TR#314553: Shared keywords: azim, column, convergence, gn, grid, table, tn, trajectory, колонка, таблице
- TR#314572: Shared keywords: azim, column, convergence, displayed, gn, grid, rendered, shown, tn, trajectory
- TR#314573: Shared keywords: azimuth, column, gn, trajectory, колонка, таблице, траектории

Статус маппинга: Partial

### 19. С Grid Convergence — AZIM GN только для чтения

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-azimuth.spec.ts
- Название теста: TAZ-004: With Grid Convergence - AZIM GN is read-only (calculated)

Найдено в TestRail:

- Best match: TR#314544 — Verify trajectory table read-only mode for locked well (релевантность: Low)
- Alternate: TR#314538 — Verify AZIM GN is read-only when Grid Convergence not equal to zero (релевантность: Low)
- Alternate: TR#314553 — Trajectory table Grid Convergence impact from StarSteer (релевантность: Low)

Обоснование:

- Functional core matched (6/12 core tokens)
- TR#314544: Shared keywords: azim, gn, only, read, trajectory, редактирования, чтения
- TR#314538: Shared keywords: azim, convergence, gn, grid, only, read, автоматически, рассчитывается, редактирования
- TR#314553: Shared keywords: azim, convergence, gn, grid, only, read, trajectory, проверить

Статус маппинга: Partial

### 20. С Grid Convergence — AZIM TN редактируется в строке Tie-In

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-azimuth.spec.ts
- Название теста: TAZ-005: With Grid Convergence - AZIM TN is editable on Tie-In row

Найдено в TestRail:

- Best match: TR#287267 — Edit AZIM TN field when Grid Convergence not equal to 0 (релевантность: Low)
- Alternate: TR#155900 — Impossible to change Stop MD value in Well Plan Trajectory (релевантность: Low)
- Alternate: TR#287260 — Display Tie-in row on Well Trajectory opening (релевантность: Low)

Обоснование:

- Functional core matched (6/12 core tokens)
- TR#287267: Shared keywords: azim, convergence, displayed, grid, rendered, shown, tie, tn, ввода, кликнуть
- TR#155900: Shared keywords: row, trajectory, доступна, редактирования, ячейка, ячейке, ячейку
- TR#287260: Shared keywords: azim, displayed, rendered, row, shown, tie, tn, trajectory, отображается, поля

Статус маппинга: Partial

### 21. Редактирование AZIM TN — перерасчёт AZIM GN

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-azimuth.spec.ts
- Название теста: TAZ-006: Edit AZIM TN and verify optimistic AZIM GN recalculation

Найдено в TestRail:

- Best match: TR#314573 — Send only changed attributes - Azimuth VS field with trajectory recalculation (релевантность: Low)
- Alternate: TR#314547 — Verify trajectory recalculation on wellheader changes (релевантность: Low)
- Alternate: TR#314552 — Trajectory table recalculation on wellheader changes from StarSteer (релевантность: Low)

Обоснование:

- Functional core matched (5/12 core tokens)
- TR#314573: Shared keywords: azimuth, gn, recalculation, trajectory, значение, изменить, обновляется
- TR#314547: Shared keywords: azim, azimuth, gn, recalculation, trajectory, verify, изменении, изменить, проверить
- TR#314552: Shared keywords: azimuth, recalculation, trajectory, изменении, изменить, обновляется, пересчитывается, проверить

Статус маппинга: Partial

### 22. Таблица Survey Program отображается

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-survey-program.spec.ts
- Название теста: TSP-001: Survey Program table renders

Найдено в TestRail:

- Best match: TR#155893 — Displaying when Survey Program table is empty in parent well (релевантность: Low)
- Alternate: TR#155894 — Displaying when Survey Program table is not empty in parent well (релевантность: Low)
- Alternate: TR#314544 — Verify trajectory table read-only mode for locked well (релевантность: Low)

Обоснование:

- Functional core matched (4/10 core tokens)
- TR#155893: Shared keywords: displayed, open, program, rendered, row, shown, survey, table, trajectory, кнопка
- TR#155894: Shared keywords: displayed, open, program, rendered, row, shown, survey, table, trajectory, кнопка
- TR#314544: Shared keywords: table, trajectory, добавления, отображаются, траектории

Статус маппинга: Partial

### 23. Добавление строки в Survey Program

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-survey-program.spec.ts
- Название теста: TSP-002: Add survey program row

Найдено в TestRail:

- Best match: TR#155895 — Impossible to add new row in Well Plan Trajectory (релевантность: Medium)
- Alternate: TR#314588 — Send only changed attributes - Survey Program modification (релевантность: Low)
- Alternate: TR#155894 — Displaying when Survey Program table is not empty in parent well (релевантность: Low)

Обоснование:

- Functional core matched (7/12 core tokens)
- TR#155895: Shared keywords: add, program, row, survey, trajectory, добавить, добавление, строк, строки, строку
- TR#314588: Shared keywords: program, row, survey, добавить, строки, строку, таблице
- TR#155894: Shared keywords: add, program, row, survey, trajectory, проверить, строк, таблице

Статус маппинга: Partial

### 24. Изменение toolcode в Survey Program через выпадающий список

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-survey-program.spec.ts
- Название теста: TSP-003: Edit toolcode via dropdown

Найдено в TestRail:

- Best match: TR#155899 — Impossible to delete rows in Well Plan Trajectory (релевантность: Low)
- Alternate: TR#155893 — Displaying when Survey Program table is empty in parent well (релевантность: Low)
- Alternate: TR#314588 — Send only changed attributes - Survey Program modification (релевантность: Low)

Обоснование:

- Functional core matched (2/12 core tokens)
- TR#155899: Shared keywords: displayed, program, rendered, row, shown, survey, toolcode, trajectory, отображается, строке
- TR#155893: Shared keywords: displayed, program, rendered, row, shown, survey, toolcode, trajectory, отображается, проверить
- TR#314588: Shared keywords: program, row, survey, toolcode, значение, строки

Статус маппинга: Partial

### 25. Start MD в Survey Program — только для чтения

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-survey-program.spec.ts
- Название теста: TSP-004: Edit Start MD value - should be read-only (auto-calculated)

Найдено в TestRail:

- Best match: TR#314544 — Verify trajectory table read-only mode for locked well (релевантность: Low)
- Alternate: TR#314528 — Add new trajectory row with auto-focus and mandatory fields highlighting (релевантность: Low)
- Alternate: TR#285743 — Displaying Start MD when Stop MD isn't set in the previous row for Typewell (релевантность: Low)

Обоснование:

- Functional core matched (5/12 core tokens)
- TR#314544: Shared keywords: md, only, read, trajectory, чтения
- TR#314528: Shared keywords: auto, md, trajectory, автоматически, поле
- TR#285743: Shared keywords: displayed, first, md, program, rendered, shown, start, survey, trajectory, значение

Статус маппинга: Partial

### 26. Изменение Stop MD в Survey Program

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-survey-program.spec.ts
- Название теста: TSP-005: Edit Stop MD value

Найдено в TestRail:

- Best match: TR#285741 — Input validation when Stop MD is non-numeric value for Typewell (релевантность: Low)
- Alternate: TR#155838 — Input validation when Stop MD is non-numeric value (релевантность: Low)
- Alternate: TR#285744 — Displaying Start MD when Stop MD is set in the previous row for Typewell (релевантность: Low)

Обоснование:

- Functional core matched (7/12 core tokens)
- TR#285741: Shared keywords: displayed, first, md, program, rendered, shown, stop, survey, trajectory, value
- TR#155838: Shared keywords: displayed, first, md, program, rendered, shown, stop, survey, trajectory, value
- TR#285744: Shared keywords: displayed, first, md, program, rendered, shown, stop, survey, trajectory, ввести

Статус маппинга: Partial

### 27. Удаление строки в Survey Program

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-survey-program.spec.ts
- Название теста: TSP-006: Delete survey program row

Найдено в TestRail:

- Best match: TR#155899 — Impossible to delete rows in Well Plan Trajectory (релевантность: Low)
- Alternate: TR#314541 — Delete single trajectory row using delete button (релевантность: Low)
- Alternate: TR#155895 — Impossible to add new row in Well Plan Trajectory (релевантность: Low)

Обоснование:

- Functional core matched (6/12 core tokens)
- TR#155899: Shared keywords: delete, program, row, survey, trajectory, строк, строку, удаления
- TR#314541: Shared keywords: delete, row, trajectory, строки, таблице, удаления
- TR#155895: Shared keywords: program, row, survey, trajectory, строк, строки, строку, таблице

Статус маппинга: Partial

### 28. Состояние Survey Program после операций

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-survey-program.spec.ts
- Название теста: TSP-007: Survey Program state after operations

Найдено в TestRail:

- Best match: TR#314544 — Verify trajectory table read-only mode for locked well (релевантность: Low)
- Alternate: TR#155894 — Displaying when Survey Program table is not empty in parent well (релевантность: Low)
- Alternate: TR#314546 — Verify trajectory table editing access for authorized roles (релевантность: Low)

Обоснование:

- Functional core matched (6/12 core tokens)
- TR#314544: Shared keywords: table, trajectory, добавления, состояние, строк, таблицы, удаления
- TR#155894: Shared keywords: displayed, program, rendered, row, shown, survey, table, trajectory, кнопка, отображается
- TR#314546: Shared keywords: table, trajectory, добавления, строк, удаления

Статус маппинга: Partial

### 29. Открытие вкладки траектории и отображение таблицы

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-001: Open trajectory tab and verify table renders

Найдено в TestRail:

- Best match: TR#314562 — Trajectory table data loading from WDL (релевантность: Medium)
- Alternate: TR#314526 — Display trajectory table structure and headers (релевантность: Low)
- Alternate: TR#314544 — Verify trajectory table read-only mode for locked well (релевантность: Low)

Обоснование:

- Functional core matched (4/9 core tokens)
- TR#314562: Shared keywords: open, table, trajectory, вкладки, вкладку, открытии, открыть, таблицы, траектории
- TR#314526: Shared keywords: display, displayed, render, rendered, shown, table, trajectory, отображается, отображение, таблица
- TR#314544: Shared keywords: table, trajectory, verify, отображаются, таблицы, траектории

Статус маппинга: Partial

### 30. Таблица траектории содержит ожидаемые колонки

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-002: Table displays correct columns

Найдено в TestRail:

- Best match: TR#143449 — Displaying table columns (релевантность: Medium)
- Alternate: TR#314566 — Real-time trajectory import with Replace from StarSteer (релевантность: Medium)
- Alternate: TR#314526 — Display trajectory table structure and headers (релевантность: Medium)

Обоснование:

- 2–3 close matches (30–60%)
- TR#143449: Shared keywords: azim, columns, dls, incl, md, table, tvd, tvdss, vs, заголовки
- TR#314566: Shared keywords: azim, column, dls, incl, md, table, trajectory, tvd, tvdss, vs
- TR#314526: Shared keywords: azim, dls, incl, md, table, trajectory, tvd, tvdss, vs, таблица

Статус маппинга: Partial

### 31. Редактирование MD — обновление и перерасчёт TVD

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-003: Edit MD value and verify optimistic update with recalculation

Найдено в TestRail:

- Best match: TR#314552 — Trajectory table recalculation on wellheader changes from StarSteer (релевантность: Low)
- Alternate: TR#314545 — Verify trajectory table access control for VIEWER role (релевантность: Low)
- Alternate: TR#314547 — Verify trajectory recalculation on wellheader changes (релевантность: Low)

Обоснование:

- Functional core matched (3/12 core tokens)
- TR#314552: Shared keywords: recalculation, table, trajectory, изменении, изменить, обновляется, пересчитывается, проверить
- TR#314545: Shared keywords: edit, editing, table, trajectory, verify, редактирование
- TR#314547: Shared keywords: md, recalculation, table, trajectory, verify, значения, изменении, изменить, обновление, проверить

Статус маппинга: Partial

### 32. Редактирование INCL — перерасчёт TVD

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-004: Edit INCL value and verify recalculation

Найдено в TestRail:

- Best match: TR#314552 — Trajectory table recalculation on wellheader changes from StarSteer (релевантность: Low)
- Alternate: TR#314556 — Trajectory table DLS recalculation after point changes (релевантность: Low)
- Alternate: TR#314545 — Verify trajectory table access control for VIEWER role (релевантность: Low)

Обоснование:

- Functional core matched (4/12 core tokens)
- TR#314552: Shared keywords: recalculation, table, trajectory, изменении, изменить, обновляется, пересчитывается, проверить
- TR#314556: Shared keywords: incl, recalculation, table, trajectory, изменить, пересчитывается, проверить
- TR#314545: Shared keywords: edit, editing, table, trajectory, verify, редактирование

Статус маппинга: Partial

### 33. Редактирование AZIM — перерасчёт N/S

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-005: Edit AZIM value and verify recalculation

Найдено в TestRail:

- Best match: TR#314552 — Trajectory table recalculation on wellheader changes from StarSteer (релевантность: Low)
- Alternate: TR#314556 — Trajectory table DLS recalculation after point changes (релевантность: Low)
- Alternate: TR#314547 — Verify trajectory recalculation on wellheader changes (релевантность: Low)

Обоснование:

- Functional core matched (5/11 core tokens)
- TR#314552: Shared keywords: recalculation, table, trajectory, изменении, изменить, обновляется, пересчитывается, проверить
- TR#314556: Shared keywords: azim, recalculation, table, trajectory, изменить, пересчитывается, проверить
- TR#314547: Shared keywords: 45, azim, recalculation, table, trajectory, verify, изменении, изменить, проверить

Статус маппинга: Partial

### 34. Добавление строки в таблицу траектории — плейсхолдеры и расчёт после заполнения

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-006: Add new row - verify appearance, warning highlight, and calculation after fill

Найдено в TestRail:

- Best match: TR#314528 — Add new trajectory row with auto-focus and mandatory fields highlighting (релевантность: Low)
- Alternate: TR#314544 — Verify trajectory table read-only mode for locked well (релевантность: Low)
- Alternate: TR#314546 — Verify trajectory table editing access for authorized roles (релевантность: Low)

Обоснование:

- Functional core matched (3/12 core tokens)
- TR#314528: Shared keywords: add, azim, incl, md, new, row, table, trajectory, добавления, заполнения
- TR#314544: Shared keywords: 90, azim, incl, md, table, trajectory, verify, добавления, отображаются, строк
- TR#314546: Shared keywords: incl, md, table, trajectory, verify, добавления, строк, траектории

Статус маппинга: Partial

### 35. Удаление строки в таблице траектории

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-007: Delete row and verify removal

Найдено в TestRail:

- Best match: TR#314545 — Verify trajectory table access control for VIEWER role (релевантность: Low)
- Alternate: TR#314544 — Verify trajectory table read-only mode for locked well (релевантность: Low)
- Alternate: TR#314546 — Verify trajectory table editing access for authorized roles (релевантность: Low)

Обоснование:

- Functional core matched (2/12 core tokens)
- TR#314545: Shared keywords: table, trajectory, verify, строк, таблице, траектории, удаление
- TR#314544: Shared keywords: table, trajectory, verify, строк, таблице, траектории, удаления
- TR#314546: Shared keywords: table, trajectory, verify, строк, таблице, траектории, удаления

Статус маппинга: Partial

### 36. Валидация MD — отрицательные и вне диапазона значения не принимаются

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-008: MD validation - reject negative and out of range values

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 37. Валидация MD — немонотонные значения не принимаются

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-009: MD validation - reject non-monotonic values (existing and new rows)

Найдено в TestRail:

- Best match: TR#314556 — Trajectory table DLS recalculation after point changes (релевантность: Low)
- Alternate: TR#314544 — Verify trajectory table read-only mode for locked well (релевантность: Low)
- Alternate: TR#314553 — Trajectory table Grid Convergence impact from StarSteer (релевантность: Low)

Обоснование:

- Functional core matched (2/12 core tokens)
- TR#314556: Shared keywords: table, trajectory, необходимости, проверить, следующей
- TR#314544: Shared keywords: 1000, md, table, trajectory
- TR#314553: Shared keywords: table, trajectory, значение, значения, проверить

Статус маппинга: Partial

### 38. Валидация INCL — значения вне диапазона 0–180 не принимаются

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-010: INCL validation - reject out of range (0-180)

Найдено в TestRail:

- Best match: TR#314526 — Display trajectory table structure and headers (релевантность: Low)
- Alternate: TR#314554 — Trajectory table precision consistency after real-time updates (релевантность: Low)
- Alternate: TR#314553 — Trajectory table Grid Convergence impact from StarSteer (релевантность: Low)

Обоснование:

- Functional core matched (2/12 core tokens)
- TR#314526: Shared keywords: displayed, incl, rendered, shown, table, trajectory, отображается, проверить
- TR#314554: Shared keywords: displayed, incl, rendered, shown, table, trajectory, отображается, проверить
- TR#314553: Shared keywords: table, trajectory, значение, значения, проверить

Статус маппинга: Partial

### 39. Строка Tie-In не удаляется

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-011: Tie-in row is not deletable

Найдено в TestRail:

- Best match: TR#314541 — Delete single trajectory row using delete button (релевантность: Low)
- Alternate: TR#155899 — Impossible to delete rows in Well Plan Trajectory (релевантность: Low)
- Alternate: TR#314544 — Verify trajectory table read-only mode for locked well (релевантность: Low)

Обоснование:

- Functional core matched (3/12 core tokens)
- TR#314541: Shared keywords: row, table, trajectory, строка, строки, удаления, удаляется
- TR#155899: Shared keywords: displayed, rendered, row, shown, trajectory, кнопка, отображается, строка, строку, удаления
- TR#314544: Shared keywords: table, trajectory, удаления

Статус маппинга: Partial

### 40. Строка Tie-In — редактирование TVD, N/S, E/W и перерасчёт

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-table.spec.ts
- Название теста: TT-012: Tie-in row TVD/NS/EW editable with optimistic recalculation

Найдено в TestRail:

- Best match: TR#314556 — Trajectory table DLS recalculation after point changes (релевантность: Low)
- Alternate: TR#314552 — Trajectory table recalculation on wellheader changes from StarSteer (релевантность: Low)
- Alternate: TR#314545 — Verify trajectory table access control for VIEWER role (релевантность: Low)

Обоснование:

- Functional core matched (3/12 core tokens)
- TR#314556: Shared keywords: recalculation, table, trajectory, изменить, пересчитывается, проверить, следующей
- TR#314552: Shared keywords: recalculation, table, trajectory, изменить, обновляются, пересчитывается, проверить
- TR#314545: Shared keywords: edit, editing, table, trajectory, редактирование

Статус маппинга: Partial

### 41. Поля Time Zone и Spud Date видны для скважины (wellbore)

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-well-fields.spec.ts
- Название теста: WF-001 Time Zone and Spud Date are visible for wellbore entity

Найдено в TestRail:

- Best match: TR#156086 — Default view for Well block in sidebar (релевантность: Medium)
- Alternate: TR#153424 — Displaying data for locked wellbore on  Well Trajectory (релевантность: Medium)
- Alternate: TR#153426 — Displaying data for  unlocked wellbore on  Well Trajectory (релевантность: Medium)

Обоснование:

- 2–3 close matches (30–60%)
- TR#156086: Shared keywords: attributes, displayed, open, rendered, shown, sidebar, trajectory, well, атрибутов, открыть
- TR#153424: Shared keywords: display, open, render, trajectory, well, wellbore, открыть, отображаются, отображение, поля
- TR#153426: Shared keywords: display, open, render, trajectory, well, wellbore, открыть, отображаются, отображение, поля

Статус маппинга: Partial

### 42. Поля Time Zone и Spud Date скрыты для typewell

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-well-fields.spec.ts
- Название теста: WF-002 Time Zone and Spud Date are hidden for typewell entity

Найдено в TestRail:

- Best match: TR#423970 — Typewell Trajectory tab state is saved and restored in drillspot-settings (релевантность: Medium)
- Alternate: TR#285685 — Project coordinate system validation errors do not affect the disabling of inputs in the sidebar for Typewell (релевантность: Medium)
- Alternate: TR#285673 — Typewell sidebar block display (релевантность: Medium)

Обоснование:

- 2–3 close matches (30–60%)
- TR#423970: Shared keywords: entity, trajectory, typewell, страницу
- TR#285685: Shared keywords: displayed, panel, rendered, shown, sidebar, trajectory, typewell, отображается, поле, поля
- TR#285673: Shared keywords: displayed, rendered, shown, sidebar, trajectory, typewell, отображается, отображаются, поля, проверить

Статус маппинга: Partial

### 43. Поля Time Zone и Spud Date скрыты для well plan

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-well-fields.spec.ts
- Название теста: WF-003 Time Zone and Spud Date are hidden for well plan entity

Найдено в TestRail:

- Best match: TR#122024 — Well Plan Trajectory tab opens only one time (релевантность: Medium)
- Alternate: TR#153796 — Displaying Depth Reference  with Type - Land in side bar in Well Trajectory of well plan for meter project (релевантность: Medium)
- Alternate: TR#269718 — Displaying Depth Reference  with Type - Land in side bar in Well Trajectory of well plan for feet project (релевантность: Medium)

Обоснование:

- 2–3 close matches (30–60%)
- TR#122024: Shared keywords: displayed, open, plan, rendered, shown, time, trajectory, well, открыть, отображается
- TR#153796: Shared keywords: displayed, open, plan, rendered, shown, trajectory, well, открыть, отображается, отображаются
- TR#269718: Shared keywords: displayed, open, plan, rendered, shown, trajectory, well, открыть, отображается, отображаются

Статус маппинга: Partial

### 44. Выбор Time Zone — список опций и обновление значения

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-well-fields.spec.ts
- Название теста: WF-004 Timezone selector displays options and allows selection

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found

### 45. Поле Spud Date доступно для взаимодействия для скважины

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-well-fields.spec.ts
- Название теста: WF-005 Spud Date picker is interactive for wellbore entity

Найдено в TestRail:

- Best match: TR#153424 — Displaying data for locked wellbore on  Well Trajectory (релевантность: Medium)
- Alternate: TR#153426 — Displaying data for  unlocked wellbore on  Well Trajectory (релевантность: Medium)
- Alternate: TR#405154 — Verify multiple Trajectory tabs can be opened for different wellbores (релевантность: Medium)

Обоснование:

- 2–3 close matches (30–60%)
- TR#153424: Shared keywords: trajectory, well, wellbore, поля
- TR#153426: Shared keywords: trajectory, well, wellbore, поля
- TR#405154: Shared keywords: trajectory, wellbore, проверить

Статус маппинга: Partial

### 46. Time Zone и Spud Date недоступны без права на обновление

Автотест:

- Путь: tests from solo-rtm/trajectory/trajectory-well-fields.spec.ts
- Название теста: WF-006 Time Zone and Spud Date are disabled without update permission

Найдено в TestRail:

- Best match: —

Обоснование:

- No strong/partial candidates

Статус маппинга: Not found
