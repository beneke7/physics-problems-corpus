---
id: solution-ocr-kevin-zhou-m4sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 6. A rope is nestled inside a curved frictionless tube. The rope has a total length $\ell$ and uniform mass per length $\lambda$. The shape of the tube can be arbitrarily complicated, but the left end of the rope is higher than the right end by a height $h$. If the rope is released from rest, find its acceleration.

Solution. Of course, you can get the same result by breaking the rope into infinitely many infinitesimal elements, applying Newton's second law to each one, and solving for how the tension varies throughout the rope. But this is unnecessarily complicated, because the system can be described by a single generalized coordinate.

Let $q$ be the length the rope has moved along the tube. The kinetic energy is $\lambda \ell \dot { q } ^ { 2 } / 2$. The "generalized force" is $- \partial V / \partial q = \lambda g h$. So the acceleration is $g h / \ell$.


Idea 3
Generalized coordinates are really useful for problems that involve complicated objects but only have one relevant degree of freedom, which is especially true for oscillations problems. For instance, if the kinetic and potential energy have the form

$$
K = \frac { 1 } { 2 } m _ { \mathrm { eff } } \dot { q } ^ { 2 } , \quad V = \frac { 1 } { 2 } k _ { \mathrm { eff } } q ^ { 2 }
$$

then the oscillation's angular frequency is always

$$
\omega = \sqrt { k _ { \text {eff } } / m _ { \text {eff } } } .
$$

Note that $q$ need not have units of position, $m _ { \text {eff } }$ need not have units of mass, and so on. When $V ( q )$ is a more general function, we can expand it about a minimum $q _ { \text {min } }$, so that $k _ { \mathrm { eff } } = V ^ { \prime \prime } \left( q _ { \mathrm { min } } \right)$. This lets us avoid dealing with possibly complicated constraint forces.
