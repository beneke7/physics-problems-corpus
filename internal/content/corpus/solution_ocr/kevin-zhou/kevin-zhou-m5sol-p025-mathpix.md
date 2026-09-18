---
id: solution-ocr-kevin-zhou-m5sol-p025
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m5-p025]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 25. A circular pendulum consists of a point mass $m$ on a string of length $\ell$, which is made to rotate in a horizontal circle. By using only the equation $\boldsymbol { \tau } = d \mathbf { L } / d t$ about an origin of your choice, compute the angular frequency if the string makes a constant angle $\theta$ with the horizontal.
Solution. Of course, this would be easier with Newton's second law, but we solve the problem using torques to show the general technique, which will be useful when studying precession in M8. We consider the angular momentum about the fixed top end of the string,
$$
L = | \mathbf { r } \times \mathbf { p } | = m v \ell = m \ell ^ { 2 } \omega \cos \theta
$$
where $\omega$ is the angular velocity of the circular motion. The angular momentum points at an angle $\theta$ to the vertical. Its vertical component stays the same, while its horizontal component $L \sin \theta$ rotates in a circle, so
$$
\left| \frac { d \mathbf { L } } { d t } \right| = \omega L \sin \theta = m \ell ^ { 2 } \omega ^ { 2 } \cos \theta \sin \theta .
$$
We equate this to the magnitude of the torque due to gravity,
$$
\tau = | \mathbf { r } \times \mathbf { F } | = m g \ell \cos \theta .
$$
We thus conclude that
$$
\omega = \sqrt { \frac { g } { \ell \sin \theta } } .
$$
As a check, in the limit of small oscillations $\theta \rightarrow \pi / 2$, we get $\omega = \sqrt { g / \ell }$. This makes sense because in this case, we can project in one direction to recover ordinary pendulum motion.
