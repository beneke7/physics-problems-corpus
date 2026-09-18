---
id: solution-ocr-kevin-zhou-m1sol-p028
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-p028]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 28. The pilot of a supersonic jet airplane wishes to make a big noise at the origin by flying around it in a path such that all of the noise he makes is heard simultaneously at the origin. The jet travels with Mach number $M > 1$, meaning that its speed is $M$ times the speed of sound. If the pilot starts at $( r , \theta ) = ( a , 0 )$, find the pilot's path $r ( \theta )$.
Solution. In order for the sound to reach the origin simultaneously, we must have $r ( t ) = a - c t$, so that the sound all reaches the origin at time $a / c$. On the other hand, we have
$$
( M c ) ^ { 2 } = \dot { r } ^ { 2 } + r ^ { 2 } \dot { \theta } ^ { 2 } = c ^ { 2 } + r ^ { 2 } \dot { \theta } ^ { 2 } .
$$
This is a bit messy because we have two functions of time, but we can eliminate time by using
$$
\dot { \theta } = \frac { d \theta } { d r } \frac { d r } { d t } = - c \frac { d \theta } { d r } .
$$

Plugging this in above, we have

$$
M ^ { 2 } - 1 = r ^ { 2 } \left( \frac { d \theta } { d r } \right) ^ { 2 }
$$

and separating and integrating gives

$$
\int _ { a } ^ { r } \frac { d r ^ { \prime } } { r ^ { \prime } } = \pm \int _ { 0 } ^ { \theta } \frac { d \theta ^ { \prime } } { \sqrt { M ^ { 2 } - 1 } } , \quad r ( \theta ) = a e ^ { \pm \theta / \sqrt { M ^ { 2 } - 1 } }
$$

The ± sign ambiguity above came from taking a square root, and physically means that the pilot can choose to fly clockwise or counterclockwise.
