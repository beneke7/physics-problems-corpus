---
id: solution-ocr-kevin-zhou-m1sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 1
When a projectile moves slowly through air, the drag is linear in the velocity, $F = - \alpha m v$. Find the velocity $v ( t )$ of a projectile thrown upward at time $t = 0$ with speed $v _ { 0 }$.

Solution
We write Newton's second law as

$$
\frac { d v } { d t } = - g - \alpha v
$$

and multiply through by $d t$. Integrating both sides from the initial condition to time $t _ { f }$ gives

$$
\int _ { v _ { 0 } } ^ { v \left( t _ { f } \right) } \frac { d v } { g + \alpha v } = - \int _ { 0 } ^ { t _ { f } } d t .
$$

Performing the integrals gives

$$
\left. \frac { 1 } { \alpha } \log ( g + \alpha v ) \right| _ { v _ { 0 } } ^ { v \left( t _ { f } \right) } = - t _ { f } .
$$

Renaming $t _ { f }$ to $t$ and solving for $v$ yields

$$
v ( t ) = e ^ { - \alpha t } v _ { 0 } + \frac { g } { \alpha } \left( e ^ { - \alpha t } - 1 \right) .
$$

This renaming is necessary because we don't want to confuse $t$, the dummy variable that we are integrating over, with $t _ { f }$, the time at which we want to evaluate the velocity; $t$ ranges from zero to $t _ { f }$. Unfortunately, often people just call both of these $t$, so you need to watch out.
