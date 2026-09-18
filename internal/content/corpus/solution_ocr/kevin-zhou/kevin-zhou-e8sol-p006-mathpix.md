---
id: solution-ocr-kevin-zhou-e8sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e8-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 6. An infinite cylindrical rod of radius $R$ has a fixed, uniform magnetization M.

(a) If $\mathbf { M }$ is parallel to the rod's axis, find the magnetic field everywhere.
(b) If $\mathbf { M }$ is perpendicular to the rod's axis, describe B outside, and find the value of B inside.

Solution. Let $\hat { \mathbf { z } }$ point along the axis of the rods.

(a) The surface bound current density is $\mathbf { K } _ { b } = M \hat { \boldsymbol { \theta } }$, which is simply that of an infinite solenoid. So the magnetic field is $\mu _ { 0 } \mathbf { M }$ inside the rod, and zero outside.
(b) Let's say that $\mathbf { M }$ is parallel to $\hat { \mathbf { x } }$. Then in cylindrical coordinates, we have $\mathbf { K } _ { b } = M \sin \theta \hat { \mathbf { z } }$. This current density is equivalent to superposing two cylinders carrying uniform current density $\pm J \hat { \mathbf { z } }$, separated by $d$ along the $\hat { \mathbf { y } }$ direction, where $J d = M$.

Outside the rod, the cylinders can be replaced with wires carrying current $I = \pi R ^ { 2 } J$, and the corresponding magnetic field was found in a problem in E3. Inside the rod, superposing the magnetic fields of the cylinders yields $\mathbf { B } = \mu _ { 0 } \mathbf { M } / 2$.
