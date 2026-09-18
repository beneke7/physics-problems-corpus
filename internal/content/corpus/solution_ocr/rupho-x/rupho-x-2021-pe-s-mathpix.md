---
id: solution-ocr-rupho-x-2021-pe-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2021/PE_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 1.00 }$ Выведите аналитическую зависимость $R _ { \Pi } \left( T _ { \Pi } \right)$.

$$
\frac { \partial R } { \partial T } = - \gamma + A \left( B - B _ { C } \right) \alpha T _ { п } ^ { \alpha - 1 } = 0
$$

Учитывая $f = R ( T , B )$ :

$$
R _ { \text {п } } = R _ { C } - \gamma T _ { \text {п } } + \frac { \gamma } { \alpha } T _ { \text {п } }
$$

A2 ${ } ^ { 0.40 }$ Определите $B _ { C }$.

Выберем кривую наиболее близкую к прямой. Кривые, соответствующие прямым построены для $B = 4.9 ; 5.0 \mathrm {~T}$, поэтому $B _ { C } = 4.9 ; 5.0 \mathrm {~T}$. Для подтверждения правильности выбора можно использовать среднеквадратичное отклонение точек от прямой или любой другой аналогичный критерий.

А3 ${ } ^ { 2.60 }$ Определите $R _ { C }$ двумя способами.

При $B$ близких к $B _ { C }$ зависимость $R$ vs $T$ - линейная со свободным членом $R _ { C } = 7.93 \mathrm { k } \Omega$.
Зависимость $R _ { п }$ vs $T _ { п }$ - линейная со свободным членом $R _ { C } = 7.8 \mathrm { k } \Omega$

A4 ${ } ^ { 2.80 }$ Определите параметры $\gamma$ и $\alpha$.

Коэффициентом наклона линейной зависимости $R$ vs $T$ при $B = 5.0$ Т является $- \gamma = - 0.81 \frac { \Omega } { \mathrm {~K} }$. Коэффициент наклона линейной зависимости $R _ { п }$ νs $T _ { \text {п } }$ - $\gamma \left( - 1 + \frac { 1 } { \alpha } \right) = - 1.6 \frac { \Omega } { Κ }$. Поэтому $\alpha \approx - 1$

В $1 ^ { 2.20 }$ Посчитайте $\chi ^ { 2 }$ (определение в примечании) зависимостей $R ( T )$ для каждого $B$.

Построим график $R - R _ { C } + \gamma T$ vs $\left( B - B _ { C } \right) T ^ { \alpha }$. Из графика определим $A = 0.56 \frac { \Omega \mathrm {~K} } { \mathrm {~T} }$. Далее посчитаем $\chi ^ { 2 }$ :

В2 ${ } ^ { 1.00 }$ Используя таблицу из примечания, оцените вероятность согласно которой формула $f = R ( T , B )$ описывает зависимость $R ( T , B )$ для любых (укажите каких) 150 точек.

Посчитаем $\chi ^ { 2 } = 169$ для первых 150 точек (упорядочены по возрастанию $B$ ), т.е. вероятностью $p \approx 20 \%$ теория описывавет эксперимент.
