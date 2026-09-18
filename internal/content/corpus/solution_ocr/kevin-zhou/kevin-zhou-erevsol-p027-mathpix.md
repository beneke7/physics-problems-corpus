---
id: solution-ocr-kevin-zhou-erevsol-p027
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/ERevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-erev-p027]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 27. Consider two infinite parallel plates held at $z = h / 2$ and $z = - h / 2$, with uniform charge densities $\sigma$ and $- \sigma$ respectively, and negligible mass. The plates are initially at rest.
    (a) Both plates are uniformly accelerated by $\mathbf { a } = a \hat { \mathbf { y } }$. During this process, find the electric field induced between the plates. Assume $a$ is small, so that radiation effects can be neglected, i.e. assume the magnetic field is always approximately magnetostatic.
    (b) During this process, find the external force per unit area needed to accelerate the plates.
    (c) The acceleration stops when the plates have speed $v _ { 0 }$. Verify that the total work done is equal to the change in electromagnetic field energy.

Solution. (a) The magnetic field is $\mathbf { B } = - \mu _ { 0 } \sigma v \hat { \mathbf { x } }$ between the plates, and zero outside them, where the speed is $v = a t$. Applying Faraday's law using rectangular loops in the $y z$ plane,

$$
E _ { y } = - \mu _ { 0 } \sigma a \times \begin{cases} h / 2 & z > h / 2 \\ z & - h / 2 < z < h / 2 \\ - h / 2 & z < - h / 2 \end{cases}
$$

We always also have the usual perpendicular electric field $E _ { z }$ of a parallel plate capacitor between the plates, but this isn't relevant for part (b), since it doesn't affect the work, nor for part (c), since it stays the same.


(b) On the top plate the induced electric field produces a force per unit area $\left| E _ { y } \right| \sigma = \mu _ { 0 } \sigma ^ { 2 } a h / 2$ pointing against the acceleration. There is an identical force on the bottom plate, so the total is $\mu _ { 0 } \sigma ^ { 2 } a h$.
(c) The total work done per unit area is the force per unit area times the displacement,
$$
\frac { \text { work } } { \text { area } } = \left( \mu _ { 0 } \sigma ^ { 2 } a h \right) \frac { v _ { 0 } ^ { 2 } } { 2 a } = \frac { \mu _ { 0 } \sigma ^ { 2 } v _ { 0 } ^ { 2 } h } { 2 } .
$$
On the other hand, before and after the acceleration we have the same electric field (i.e. that of a parallel plate capacitor), while after the acceleration a magnetic field of magnitude $B = \mu _ { 0 } \sigma v _ { 0 }$ appears between the plates. This gives
$$
\frac { \text { field energy } } { \text { area } } = \frac { B ^ { 2 } h } { 2 \mu _ { 0 } } = \frac { \mu _ { 0 } \sigma ^ { 2 } v _ { 0 } ^ { 2 } h } { 2 }
$$
as expected.
