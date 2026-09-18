---
id: solution-ocr-eupho-2018-t-s-t3
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2018_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2018-T3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 3 Staircase

A Since $n = - y / h = ( x / \lambda ) ^ { 2 / 3 } , x ( n ) = n ^ { 2 / 3 } \lambda$. The distance between the steps is

$$
d _ { n } = x ( n + 1 ) - x ( n ) \approx \frac { \mathrm { d } x ( n ) } { \mathrm { d } n } = \frac { 2 } { 3 } \lambda n ^ { - 1 / 3 } = n ^ { - 1 / 3 } \cdot 30 \mu \mathrm {~m} .
$$

B Equilibrium energy value, being minimum, must be stable against small perturbations of the crystal shape. Allowed are perturbations which conserve the total volume of the crystal. In other words a small horizontal displacement of one step must be accompanied by an equal and opposite displacement of another step.

The energy change $\epsilon _ { n } ( \delta )$ associated with a small horizontal displacement $\delta$ of the $n$-th step is

$$
\begin{aligned}
\epsilon _ { n } ( \delta ) = \mu \left( \left( d _ { n } + \delta \right) ^ { \nu } - d _ { n } ^ { \nu } + \left( d _ { n + 1 } \right. \right. & \left. - \delta ) ^ { \nu } - d _ { n + 1 } ^ { \nu } \right) \approx \\
& \approx \mu \nu \left( d _ { n } ^ { \nu - 1 } - d _ { n + 1 } ^ { \nu - 1 } \right) \delta .
\end{aligned}
$$

In order for $\epsilon _ { n } ( \delta ) + \epsilon _ { m } ( - \delta )$ to be zero for arbitrary $n$ and $m$ it is necessary to require that the factor in the parentheses does not depend on $n$ :

$$
d _ { n } ^ { \nu - 1 } - d _ { n + 1 } ^ { \nu - 1 } = \text { const. }
$$

Substituting $d _ { n } \propto n ^ { - 1 / 3 }$, we get ${ } ^ { 1 }$ :

$$
\begin{gathered}
n ^ { ( 1 - \nu ) / 3 } - ( n + 1 ) ^ { ( 1 - \nu ) / 3 } \approx \frac { 1 - \nu } { 3 } n ^ { ( 1 - \nu ) / 3 - 1 } = \text { const } , \\
\frac { 1 - \nu } { 3 } - 1 = 0 \Longrightarrow \nu = - 2 .
\end{gathered}
$$

The interaction energy corresponds to that of two dipoles in 2D:

$$
E ( d ) \propto \frac { 1 } { d ^ { 2 } } .
$$

[^0]

[^0]:    ${ } ^ { 1 }$ Trivial solutions $\nu = 0$ and $\nu = 1$ imply that the total energy within given constraints does not depend on the shape of the crystal.
