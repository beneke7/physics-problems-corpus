---
id: solution-ocr-nbpho-2014-s-p2
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2014-waste-project]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 2. Waste project

1) The trajectory is a very elliptical ellipse, perihelion of which is within the Sun. In order to minimize the fuel consumption, the speed near the Earth's orbit needs to be as large as possible (we need to decelerate the ship to bring it to the elliptical orbit), hence the full orbital energy of the ship $E = - \frac { G M m } { 2 a }$ needs to be as small as possible. Here, $M$ is the mass of the Sun, $m$ - the mass of the space ship, and $a$ - the longer semiaxis. So, $a$ needs to be as large as possible, which means that the perihelion needs to lie at the surface of the Sun, in which case $2 a = R _ { E } + r _ { S }$, where $R _ { E }$ is the orbital radius of the Earth and $r _ { S }$ - the radius of the Sun. The resulting trajectory is depicted below.
![](../../../figures/solution-ocr/121919a53d70af463ae5594d.jpg)
2) If we neglect the radius of the Sun, the space ship needs to "fall" directly to the Sun, which means that its initial orbital speed must be zero, hence its trajectory is an ellips with longer semiaxis equal to $R _ { E } / 2$. According to the Kepler's III law, the period on such an orbit is $2 ^ { 3 / 2 }$ times shorter than the Earth's orbital period $T$. The travel time $t$ is half of the period, so that $t = 2 ^ { - 5 / 2 } T \approx 64.6$ days.
3) In the Sun's frame of reference, the speed needs to be zero; hence, in the Earth's frame of reference, it is opposite to the orbital velocity of the Earth and by modulus equal to $v _ { 0 } = 29.8 \mathrm {~km} / \mathrm { s }$.
4) The speed $v _ { S }$ in the Sun's frame of reference is found from the expression for the total energy, $- \frac { G M m } { 2 a } = - \frac { G M m } { R _ { E } + r _ { S } } = - \frac { G M m } { R _ { e } } + \frac { m v _ { S } ^ { 2 } } { 2 }$,
hence

$$
v _ { S } = \sqrt { \frac { G M } { R _ { E } } \frac { 2 r _ { S } } { R _ { E } + r _ { S } } } .
$$

This expressing can be rewritten by using equality $v _ { 0 } ^ { 2 } = \frac { G M } { R _ { E } }$ as

$$
v _ { S } = v _ { 0 } \sqrt { \frac { 2 r _ { S } } { R _ { E } + r _ { S } } } = v _ { 0 } \sqrt { 2 \sin \left( \frac { \alpha } { 2 } \right) } \approx v _ { 0 } \sqrt { \alpha } .
$$

Numerically this yields $v _ { S } \approx 2.8 \mathrm {~km} / \mathrm { s }$; the speed in the Earth's frame of reference $v _ { E } = v _ { 0 } - v _ { S } \approx$ 27.0 km/s.
5) Part of the initial kinetic energy in the Earth's frame of reference goes to the change of the potential energy due to the gravitational pull of the Earth, $\Delta \Pi = \frac { G M _ { E } m } { R } = g m R$ hence $g R + \frac { v _ { E } ^ { 2 } } { 2 } = \frac { u ^ { 2 } } { 2 }$. Here, $M _ { E }$ is the Earth's mass and $u$ is the launching speed. So,

$$
u = \sqrt { v _ { E } ^ { 2 } + 2 g R } \approx 29.2 \mathrm {~km} / \mathrm { s } .
$$
