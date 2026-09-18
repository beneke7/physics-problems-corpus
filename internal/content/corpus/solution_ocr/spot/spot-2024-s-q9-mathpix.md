---
id: solution-ocr-spot-2024-s-q9
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2024-q9]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
9. From special relativity, it is known that energy and mass are equivalent and interchangeable. Some of the results of general relativity can be obtained by treating the gravitational mass as $m _ { g } = \frac { F } { c ^ { 2 } }$, where $F$ is the total non-potential energy of the particle.
    (a) Consider a photon fired radially outwards from a large mass $M$. If the frequency received by an observer infinitely far away is $f _ { 0 }$, determine its frequency $f ( r )$ as a function of the radial distance $r \gg \frac { G M } { c ^ { 2 } }$ away from the large mass.
    (b) Hence, find the effective Lorentz factor $\gamma _ { g } ( r )$ by which time and length are dilated and contracted with respect to an observer at infinity, and determine the speed $v$ at which a non-accelerating frame would experience the same effect.

To account for these effects, under weak gravity $\left( r \gg \frac { G M } { c ^ { 2 } } \right)$, the usual invariant proper time interval can be modified to

$$
d \tau ^ { 2 } = \left( 1 - \frac { 2 G M } { r c ^ { 2 } } \right) d t ^ { 2 } - \frac { 1 } { c ^ { 2 } } \left[ \left( 1 + \frac { 2 G M } { r c ^ { 2 } } \right) d r ^ { 2 } + r ^ { 2 } d \theta ^ { 2 } \right]
$$

where the coordinates $( r , \theta )$ are the usual polar coordinates with mass $M$ at the origin, and all coordinates are taken with respect to an observer at infinity.

A particle of mass $m$ is fired towards an object of mass $M$ from very far away with impact parameter $b \gg \frac { G M } { c ^ { 2 } }$ and initial velocity $u$, such that the particle's trajectory is deflected by an angle $\phi \ll 1$.
![](../../../figures/solution-ocr/870774f5ce07107d33f0cbd6.jpg)


(c) Show that the total energy of the particle is given by
$$
E ^ { 2 } = \frac { c ^ { 2 } } { \alpha ^ { 2 } } \left( m ^ { 2 } c ^ { 2 } + \alpha ^ { 2 } p _ { r } ^ { 2 } + r ^ { 2 } p _ { \theta } ^ { 2 } \right)
$$
where $p _ { x } = m \frac { d x } { d \tau }$ is the $x$-component of the particle's momentum and $\alpha = 1 + \frac { G M } { r c ^ { 2 } }$.
[Hint: If $d s ^ { 2 } = A d x ^ { 2 } + B d y ^ { 2 }$, then $\vec { a } \cdot \vec { b } = A a _ { x } b _ { x } + B a _ { y } b _ { y }$.]
(d) Show that this effectively reduces to an additional central force acting on the particle of the form
$$
\vec { F } = \frac { d \vec { p } } { d \tau } = - \frac { \beta } { r ^ { 4 } } \hat { r }
$$
where $\beta$ is some constant you should determine.
(e) Hence or otherwise, determine the angle of deflection $\phi$ to leading order in $\frac { G M } { b c ^ { 2 } }$ and compare your results for a massive particle $( u \ll c )$ and a photon $( u = c )$ to the classical case $\left( \phi = \frac { 2 G M } { b u ^ { 2 } } \right)$.
You may make use of the following integral without proof:
$$
\int _ { - \infty } ^ { \infty } \frac { d x } { \left( x ^ { 2 } + 1 \right) ^ { k } } = \begin{cases} 2 & \left( k = \frac { 3 } { 2 } \right) \\ \frac { 4 } { 3 } & \left( k = \frac { 5 } { 2 } \right) \end{cases}
$$

Solution:

| Marking scheme | marks | comments |
| :--- | :--- | :--- |
| Using the formula given, for a photon <br> $m _ { g } = \frac { E } { c ^ { 2 } } = \frac { h f } { c ^ { 2 } }$ |  |  |
|  | M0.5 | Correct energy of photon |
| The simplest approach is then to use energy conservation; |  |  |
| $\begin{aligned} & E = h f - \frac { G M m _ { g } } { r } = h f _ { 0 } \\ & \frac { f } { f _ { 0 } } = \left( 1 - \frac { G M } { r c ^ { 2 } } \right) ^ { - 1 } \approx 1 + \frac { G M } { r c ^ { 2 } } \end{aligned}$ | $\mathrm { M } _ { 1 } 0.5$ | Correct equation of COE |
| Alternatively, one can obtain the same result using N2L and integrating (using $\frac { d r } { d t } = c$ ): |  |  |
| $\begin{aligned} \frac { d p } { d t } & = - \frac { G M m _ { g } } { r ^ { 2 } } \\ c \frac { d p } { d r } & = - \frac { G M p } { c r ^ { 2 } } \\ \int _ { p _ { 0 } } ^ { p } \frac { d p ^ { \prime } } { p ^ { \prime } } & = - \frac { G M } { c ^ { 2 } } \int _ { \infty } ^ { r } \frac { d r ^ { \prime } } { r ^ { \prime 2 } } \\ \frac { p } { p _ { 0 } } & = \exp \left\{ \left( \frac { G M } { r c ^ { 2 } } \right) \right\} \approx 1 + \frac { G M } { r c ^ { 2 } } \end{aligned}$ | $\mathrm { M } _ { 2 } 0.5$ | Correct application of <br> Correct application of N2L N2L |
| Thus, $f = \left( 1 + \frac { G M } { r c ^ { 2 } } \right) f _ { 0 }$. | A1 | Correct answer [-0.5 if approximation for large $r$ not carried out] |
| Total: | 1.0 |  |


Solution:
