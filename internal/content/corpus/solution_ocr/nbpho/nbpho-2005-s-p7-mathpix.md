---
id: solution-ocr-nbpho-2005-s-p7
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2005-heat-exchange]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 7. Heat exchange

1) It is easy to see that the temperature profile along the plate is linear, and the temperature difference $\Delta T$ between the two plates is constant, $\Delta T \equiv T _ { 0 } - T _ { 2 }$. Indeed, then the heat exchange rate $q$ (per unit plate area) is also constant, which in its turn corresponds to a linear temperature profile. Let us use a reference frame moving together with the incoming air. Then, the temperature increase rate at a given point is $\dot { T } = v \left( T _ { 2 } - T _ { 1 } \right) / x$. Then, the heat balance for a air element of volume $V = s \times h$ is written as $\rho s h c _ { p } \dot { T } = q = s \sigma \Delta T / d = s \sigma \left( T _ { 0 } - T _ { 2 } \right) / d$. So, $p s h c _ { p } v \left( T _ { 2 } - T _ { 1 } \right) / x = s \sigma \left( T _ { 0 } - T _ { 2 } \right) / d$, hence

$$
T _ { 2 } = \frac { x \sigma T _ { 0 } + \rho h c _ { p } v d T _ { 1 } } { x \sigma + \rho h c _ { p } v d } .
$$

2) Rewriting the heat balance equation $P = - C \frac { d T } { d t }$ as $d t = - C P ^ { - 1 } d T$ we conclude that time can be found via the area $S$ under the graph, where $P ^ { - 1 }$ is plotted versus the temperature as $t = S C$. The graph data:

| $T ( \mathrm {~K} )$ | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $P ( \mathrm {~W} )$ | 13 | 30 | 55 | 83 | 122 | 177 | 258 | 395 |
| $100 P ^ { - 1 }$ | 7.7 | 3.3 | 1.8 | 1.2 | . 82 | . 57 | . 39 | . 25 |

Substituting the region with smooth boundaries with a superposition of trapezoids we find $S \approx 12 \mathrm {~K} / \mathrm { W }$. Consequently, $t = 120 \mathrm {~s}$.
