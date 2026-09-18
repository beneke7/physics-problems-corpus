---
id: solution-ocr-nbpho-2009-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2009-boat]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. Boat (9 points)
i) From the Newton II law, $m \frac { d v } { d t } + \alpha \frac { d x } { d t } = 0$. Multiplying this equation by $d t$, we obtain $d v + \frac { \alpha } { m } d x = 0$. Integrating (i.e. summing over all the small increments $d x$ and $d v$ ) this equation leads us to

$$
v + \frac { \alpha } { m } x = \text { Const } ,
$$

i.e. $k = \frac { \alpha } { m }$.
ii) We proceed in the same way as before, but we need to add the interaction force between the boat and the boy: $m \frac { d v } { d t } + \alpha \frac { d x } { d t } =$ $M \frac { d u } { d t }$. [Note that since the right-hand-side of this equation is the interaction force, it goes to zero, if the boy leaves the boat. Therefore, if we want to keep this equation correct even after the boy leaves the boat at the moment of time $t = t _ { * }$, we must assume $u ( t ) \equiv u \left( t _ { * } \right)$ for $t > t _ { * }$.] Similarly to the previous section, we obtain

$$
v + \frac { M } { m } u ( t ) + \frac { \alpha } { m } x = \text { Const. }
$$

iii) We use the conservation law of the previous section, and compare the value of the left-hand-side immediately before the boy lands into the boat with its value after a very long time. Bearing in mind that we need to substitute $u ( t \rightarrow \infty ) = - u _ { 2 }$ (see above), we obtain

$$
0 + \frac { M } { m } u _ { 1 } + 0 = 0 - \frac { M } { m } u _ { 2 } + \frac { \alpha } { m } s .
$$

So,

$$
s = \frac { M } { \alpha } \left( u _ { 1 } + u _ { 2 } \right) ,
$$

i.e. the result is independent of how long time did the boy spend in the boat.
