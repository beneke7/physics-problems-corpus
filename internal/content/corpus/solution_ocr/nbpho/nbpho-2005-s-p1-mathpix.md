---
id: solution-ocr-nbpho-2005-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2005-rock-climber]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## I. Rock Climber

1) In the case of falling, the acceleration should not exceed $5 g$, which means that $\frac { \sigma ( \varepsilon ) } { m } - g < 5 g$. Maximum strain is the solution of the following equation $\sigma ( \varepsilon ) = 6 g m = 6 \times 9.8 \frac { m } { s ^ { 2 } } \times 80 k g = 4.7 k N$. According to the graph, $\varepsilon = 0.315$; hence, $l < 0.315 ( L + H ) + L$
2) In the case of falling, the climber reaches the lowest point, when its velocity become zero. This means that the energy absorbed by the rope becomes equal to the change of the potential energy:

$$
E = m g ( 2 L + x ) ,
$$

where $x = l - L$. Energy absorbed by the rope is given by

$$
E = \int \sigma ( \varepsilon ) d x = \int \sigma ( \varepsilon ) ( L + H ) d \varepsilon = ( L + H ) \int \sigma ( \varepsilon ) d \varepsilon
$$

We know that the maximal value is $\varepsilon = 0.315$, which makes it possible to calculate the integral numerically, as the area under the graph.

$$
S ( \varepsilon ) = \int _ { 0 } ^ { 0.31 } \sigma ( \varepsilon ) d \varepsilon \approx 564.8 N
$$

Thus,

$$
( L + H ) S ( \varepsilon ) = m g ( 2 L + x ) = m g ( 2 L + \varepsilon ( L + H ) ) ,
$$

hence

$$
L = \frac { H ( m g \varepsilon - S ( \varepsilon ) ) } { S ( \varepsilon ) - m g ( \varepsilon + 2 ) } \approx 5.08 m .
$$

So, the new carabiner must be anchored within next $L = 5.08 \mathrm {~m}$.
