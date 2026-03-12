# Сопоставление полей EDM → Solo (справочно для описания секции)

Источник: аналитика DS-9300, раздел «Сопоставление полей EDM с атрибутами скважин Solo проекта».  
При **Overwrite**: непустое значение в EDM перезаписывает атрибут в Solo; пустое в EDM — атрибут в Solo не меняется.

| Секция Solo | Поле в Solo | Поле в EDM (источник) | Примечание |
|-------------|-------------|------------------------|------------|
| **Well** | Name (Well) | `CD_WELL.WELL_COMMON_NAME` | При нескольких Wellbore дополняется именем Wellbore |
| | | `CD_WELLBORE.WELLBORE_NAME` | |
| | API | `CD_WELL.API_NO` | |
| | Operator | `CD_WELL.WELL_OPERATOR` | |
| **Surface Location** | Xsrf | `CD_WELL.GEO_OFFSET_EAST` | ft → m |
| | Ysrf | `CD_WELL.GEO_OFFSET_NORTH` | ft → m |
| | Grid Convergence | `CD_WELL.CONVERGENCE` | ° → rad |
| | Azimuth VS (GN) | `CD_VERTICAL_SECTION.VS_ANGLE` | ° → rad, TN→GN |
| **Trajectory** | MD | `CD_DEFINITIVE_SURVEY_STATION.MD` | Solo.MD = EDM.MD − KO_MD (KO_MD от верхнего родителя), затем конвертация ft→m |
| | INC | `CD_DEFINITIVE_SURVEY_STATION.INCLINATION` | ° → rad |
| | AZIM | `CD_DEFINITIVE_SURVEY_STATION.AZIMUTH` | ° → rad |
| **Depth Reference** | Type (Land/Offshore) | `CD_WELL.IS_OFFSHORE` | Y → Offshore, N → Land |
| | KB Elevation | `CD_DATUM.DATUM_ELEVATION` | ft → m; выбор записи по is_default / дате / elevation см. аналитику |
| | Air Gap | — | Расчётное (после импорта Type, KB Elevation, Ground Level) |
| | Water Depth | `CD_WELL.WATER_DEPTH` | ft → m; если IS_OFFSHORE=Y |
| | Ground Level | `CD_WELL.WATER_DEPTH` | ft → m; если IS_OFFSHORE=N |
| **Location Uncertainty** | Vertical | — | Не импортируется |
| | Horizontal | `CD_WELL.SLOT_RADIAL_ERROR` | ft → m |
| **Magnetics** | Sample Date | `DP_MAGNETIC.DECLINATION_DATE` | DateTime UTC+0 |
| | Model Name | — | Всегда «User Defined», поле EDM игнорируется |
| | Field Strength | `DP_MAGNETIC.FIELD_STRENGTH` | nT |
| | Dip Angle | `DP_MAGNETIC.DIP_ANGLE` | ° → rad |
| | Declination | `DP_MAGNETIC.DECLINATION` | ° → rad |
| **Survey Program** | Start MD | — | В Solo определяется автоматически |
| | Stop MD | `CD_SURVEY_PROGRAM.MD_TOP` | Solo.StopMD = EDM.MD_TOP − KO_MD, ft→m |
| | Toolcode (short_name, description, content, …) | `CD_SURVEY_TOOL`, `DP_TOOL_TERM` по `CD_SURVEY_PROGRAM.SURVEY_TOOL_ID` | Имя, эррор-термы, расчётные поля (tool_type, rig_type и др.) — см. аналитику п. 27–38 |
| **WellPlan** | Имя WellPlan | `CD_SCENARIO.NAME` | |
| | Starred | `CD_SCENARIO.PHASE="PLAN"` | PLAN → Starred |

**Не импортируются:** секции (Sections), раны (Runs).

Полная таблица с единицами измерения и правилами — в Confluence DS-9300, раздел «Сопоставление полей EDM с атрибутами скважин Solo проекта».
