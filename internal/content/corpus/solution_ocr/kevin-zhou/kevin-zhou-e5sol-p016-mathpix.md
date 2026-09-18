---
id: solution-ocr-kevin-zhou-e5sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e5-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 16. To check that you understand example 6, let the cylinder axis be vertical, and suppose the solenoid wires are wound at an angle $\theta$ to the horizontal. The example corresponds to $\theta = 0 ^ { \circ }$, but when $\theta = 90 ^ { \circ }$ the wires run straight up, leading to an inward pressure at the walls. Find the angle $\theta$ at which the pressure vanishes.
Solution. To avoid juggling too many variables, we'll just work in terms of the surface current density K. At the walls, we have
$$
\mathbf { K } = K _ { 0 } \sin \theta \hat { \mathbf { z } } + K _ { 0 } \cos \theta \hat { \boldsymbol { \theta } }
$$
where $K _ { 0 }$ is some constant that depends on the wire spacing. (Note that $K _ { 0 }$ is not equal to $n I$, since the wires are at an angle to the horizontal. But it won't affect the answer since everything will scale with $K _ { 0 }$.) Applying Ampere's law gives
$$
\mathbf { B } = \mu _ { 0 } K _ { 0 } \times \begin{cases} \cos \theta \hat { \mathbf { z } } & \text { inside } , \\ \sin \theta \hat { \boldsymbol { \theta } } & \text { outside } . \end{cases}
$$
By the same logic as in the example, we have an outward pressure $\left( \mu _ { 0 } K _ { 0 } ^ { 2 } / 2 \right) \cos ^ { 2 } \theta$, but now we also have an inward pressure $\left( \mu _ { 0 } K _ { 0 } ^ { 2 } / 2 \right) \sin ^ { 2 } \theta$. The two cancel when $\theta = 45 ^ { \circ }$.
