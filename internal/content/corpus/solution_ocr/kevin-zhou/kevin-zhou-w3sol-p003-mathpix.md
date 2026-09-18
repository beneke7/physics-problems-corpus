---
id: solution-ocr-kevin-zhou-w3sol-p003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w3-p003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 3. A rubber rope with unstretched length $L _ { 0 }$ is stretched to length $L > L _ { 0 }$.

(a) Find the ratio of the speeds of transverse and longitudinal waves.
(b) Experimentally, it is found that the longitudinal waves are much more strongly damped. (You can check this at home, by making such a rope by tying together cut rubber bands.) Can you explain why, by considering the molecular structure of rubber?

Solution. (a) Using the result of problem 1, the longitudinal wave speed is

$$
v _ { l } = \sqrt { \frac { k L ^ { 2 } } { m } }
$$


where $k$ and $m$ are the spring constant and mass. The transverse wave speed is
$$
v _ { t } = \sqrt { \frac { T } { m / L } } = \sqrt { \frac { k \left( L - L _ { 0 } \right) L } { m } }
$$
from which we conclude that
$$
\frac { v _ { t } } { v _ { l } } = \sqrt { \frac { L - L _ { 0 } } { L } } .
$$
Note that they become approximately equal in the limit where the rope is highly stretched.
(b) As was discussed in T2, the molecules of rubber are long chains, which are curled up in the rubber's unstretched state, and get straightened as it stretches. Longitudinal waves thus involve crumpling and straightening the chains, which dissipates a lot of energy, while transverse waves only involve the chains bending from side to side.

## Idea 1: Doppler Effect

Working in one dimension with speed of sound $c$, if a source of sound at frequency $f _ { 0 }$ travels at velocity $v _ { s }$ while an observer to their right travels at velocity $v _ { o }$, the observed frequency is

$$
f = \frac { c - v _ { o } } { c - v _ { s } } f _ { 0 }
$$
