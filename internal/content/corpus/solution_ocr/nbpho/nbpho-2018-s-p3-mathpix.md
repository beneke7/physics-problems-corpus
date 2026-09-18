---
id: solution-ocr-nbpho-2018-s-p3
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2018-weather-forecast]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 3. WEATHER FORECAST

i) The angle $\varphi$ is equal to the latitude. This means that on the northern hemisphere the Coriolis force vector is rotated 90° clockwise from the velocity vector if both are drawn on the map. To maintain force balance, the Coriolis force needs to be directed opposite to the pressure gradient force, i.e. in the direction of increasing pressure. Thus the velocity needs to be directed along the isobars. The forces should be directed counter-clockwise around the pressure minimum, i.e. to the north in A and to the southwest in B. The answer may also be accepted if the velocity has a small component towards the pressure minimum, as long as this is much smaller than the component along the isobars.
ii) In point A the isobars are approximately straight, meaning that the velocity is constant and thus that all forces sum to zero. A small slab of air with area $A$ and thickness $\mathrm { d } z$ has the mass $\mathrm { d } m = \rho A \mathrm {~d} z$.

The force from the pressure difference $\mathrm { d } p$ between opposite sides in $F _ { p } = A \mathrm {~d} p$, such that the force per mass is

$$
\frac { F _ { p } } { \mathrm {~d} m } = - \frac { A \mathrm {~d} p } { \rho A \mathrm {~d} z } = - \frac { 1 } { \rho } \left| \frac { \mathrm {~d} p } { \mathrm {~d} z } \right|
$$

The pressure gradient can be estimated by measuring the distance between a few nearby isobars in the map, and $\rho \approx 1 \mathrm {~kg} \mathrm {~m} ^ { - 3 }$. Force balance gives the equation

$$
2 v \Omega \sin \varphi = \frac { 1 } { \rho } \left| \frac { \mathrm {~d} p } { \mathrm {~d} z } \right| \Longrightarrow v = \frac { 1 } { 2 \rho \Omega \sin \varphi } \left| \frac { \mathrm {~d} p } { \mathrm {~d} z } \right|
$$


Using $\Omega = 7.27 \times 10 ^ { - 5 } \mathrm {~s} ^ { - 1 } , \quad \phi = 56 ^ { \circ }$, $| \mathrm { d } p / \mathrm { d } z | \approx 0.8 / 250 \mathrm { Pam } ^ { - 1 } = 0.0032 \mathrm { Pam } ^ { - 1 }$ we get the estimation $v = 22 \mathrm {~m} \mathrm {~s} ^ { - 1 }$. Since the students are only asked for an estimation, a wide range of numerical answers are accepted, as long as the method is correct.
iii) Now the isobars are curved, and from the map one can estimate the radius of curvature $r \approx 206 \mathrm {~km}$. The difference of the pressure gradient force and the Coriolis force must equal the centripetal force:

$$
\frac { v ^ { 2 } } { r } = \frac { 1 } { \rho } \left| \frac { \mathrm {~d} p } { \mathrm {~d} z } \right| - 2 v \Omega \sin \varphi
$$

This is a second order equation in $v$ with positive solution

$$
v = - r \Omega \sin \varphi + \sqrt { ( r \Omega \sin \varphi ) ^ { 2 } + \frac { r } { \rho } \left| \frac { \mathrm {~d} p } { \mathrm {~d} z } \right| }
$$

With $\phi = 60 ^ { \circ } , | \mathrm { d } p / \mathrm { d } z | \approx 0.0034 \mathrm {~Pa} \mathrm {~m} ^ { - 1 }$ we get the estimation $v = 14 \mathrm {~m} \mathrm {~s} ^ { - 1 }$. As a comparison, if we neglect the curvature of the isobars we get $22 \mathrm {~m} \mathrm {~s} ^ { - 1 }$.
