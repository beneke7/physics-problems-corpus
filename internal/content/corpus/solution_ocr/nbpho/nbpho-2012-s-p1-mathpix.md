---
id: solution-ocr-nbpho-2012-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2012-asteroid]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Problem 1. Asteroid (14 points)
Part A. Collision with Earth (5 points)
i. (2 pts) The longer axis of the asteroid $2 a = R _ { \text {max } } + R _ { \text {min } } =$ $2 R _ { e }$ equals to that of Earth, so the full energies, when reduced to the unit mass, are equal. Immediately before the collision, the Earth and the asteroid are at the same distance from the Sun, so the gravitational potentials are equal, too. Hence, the speeds are also equal. The distance between the Sun and the asteroid equals to the longer semiaxis, hence it is situated at the shorter semiaxis of the orbit. The velocity of the asteroid is perpendicular to the shorter semiaxis, and the velocity of the Earth - to the radius vector drawn from the Sun. So, the angle between those two vectors is the angle between the radius vector and the shorter semiaxis, $\sin \alpha = \frac { 1 } { 2 } \left( R _ { \text {max } } - R _ { \text {min } } \right) / R _ { e } = \frac { 1 } { 2 }$, hence $\alpha = 30 ^ { \circ }$. The relative velocity of the asteroid is the vector difference of the two vectors, so its modulus equals to $v _ { a } = 2 v _ { 0 } \sin 15 ^ { \circ } \approx 15.5 \mathrm {~km} / \mathrm { s }$. When accelerated further by the Earth's gravity field, the respective gravitational energy will be added to the kinetic one, $v _ { b } = \sqrt { v _ { a } ^ { 2 } + 2 g r _ { e } } = 19.1 \mathrm {~km} / \mathrm { s }$.
ii. (2 pts) At the limit case of impact, the trajectory of the asteroid is tangent to the surface of the Earth. So, we can apply the conservation of angular momentum for the point where the trajectory touches the Earth, $v _ { a } b = v _ { b } r _ { e }$, hence $b = r _ { e } v _ { b } / v _ { a } = 7900 \mathrm {~km}$.
iii. (1 pt) Suppose that the asteroid is delayed by $\tau$; at that moment when the asteroid is at the Earth's orbit, the Earth is at the distance $l = v _ { 0 } \tau$ from the asteroid. The relative velocity of the asteroid forms with this displacement vector an angle equal to $90 ^ { \circ } - 15 ^ { \circ } = 75 ^ { \circ }$, hence the impact parameter $b = v _ { 0 } \tau \sin 75 ^ { \circ }$, from where $\tau = b / v _ { 0 } \sin 75 ^ { \circ } \approx 270 \mathrm {~s}$. Since this time delay is accumulated over 10 periods, the delay need for a single period is $\tau / 10 = 27 \mathrm {~s}$.
Part B. Changing the solar pull (9 points)
i. (2 pts) When $\gamma$ changes, the kinetic energy remains constant:

$$
- \frac { \gamma _ { 0 } } { 2 a } + \frac { \gamma _ { 0 } } { 0.5 R _ { e } } = - \frac { \gamma _ { 1 } } { 2 a ^ { \prime } } + \frac { \gamma _ { 1 } } { 0.5 R _ { e } }
$$

where $a = R _ { e }$ and $2 a ^ { \prime } = 0.5 R _ { e } + R _ { \text {max } } ^ { \prime }$. So,

$$
\begin{gathered}
\frac { \gamma _ { 1 } } { 2 a ^ { \prime } } = \frac { \gamma _ { 0 } } { 2 R _ { e } } \left( 4 \frac { \gamma _ { 1 } } { \gamma _ { 0 } } - 3 \right) \Rightarrow ( 1 - \kappa ) R _ { e } = a ^ { \prime } ( 1 - 4 \kappa ) , \\
a ^ { \prime } = R _ { e } \frac { 1 - \kappa } { 1 - 4 \kappa } , \quad R _ { \max } ^ { \prime } = \frac { R _ { e } } { 2 } \frac { 3 } { 1 - 4 \kappa } .
\end{gathered}
$$

ii. ( $\mathbf { 2 }$ pts) At the limit of small $\kappa$, we can simplify the previous result,

$$
\frac { a ^ { \prime } } { R _ { e } } \approx 1 + 3 \kappa .
$$

From the Kepler's third law, $T / T _ { 0 } = \left( a ^ { \prime } / a \right) ^ { 3 / 2 } \sqrt { \gamma _ { 0 } / \gamma _ { 1 } }$, from where $\frac { \Delta T } { T _ { 0 } } \approx \frac { 3 } { 2 } \frac { a ^ { \prime } - a } { a } + \frac { \kappa } { 2 } = 5 \kappa$. So, $\Delta T = 5 T _ { 0 } \kappa$.
iii. (4 pts) For photons, the energy-to-mass ratio is $c$. Therefore, at the Sun's surface, the momentum carried by photons per unit time across a surface area $S$ is given by $d p / d t =$ $S \sigma T _ { s } ^ { 4 } / c$. As the result of the coating, the photons are reflected back by the asteroid, instead of being absorbed. So, before coating, each photon gave to the asteroid a momentum equal to its own; no it will double. Hence, the change in the force due to photons is given by $\Delta F = \pi r _ { a } ^ { 2 } \sigma T _ { s } ^ { 4 } / c$ (assuming that the asteroid is at the Sun's surface). Both the pressure of photons and gravity force are inversely proportional to the distance from the Sun, so the force due to photons can be, indeed, considered as a correction to the gravity constant. $\kappa$ is the relative change of that constant and can be calculated for the Sun's surface as

$$
\kappa = \Delta F / g _ { S } m _ { a } = \pi r _ { a } ^ { 2 } \sigma T _ { s } ^ { 4 } / c g _ { S } m _ { a } \approx 2.8 \times 10 ^ { - 8 } .
$$

iv. (1 pt) We need to have $\Delta T = 27 \mathrm {~s}$, hence $\kappa = \frac { 1 } { 5 } \frac { \Delta T } { T _ { 0 } } \approx$ $1.7 \times 10 ^ { - 7 }$. This exceeds by an order of magnitude the effect provided by the coating. $\kappa$ provided by the coating is inversely proportional to the diameter of the asteroid; the required $\kappa$ is inversely proportional to $N$. So, it would be possible to avert collision for $r _ { a } = 2 \mathrm {~m}$, or for $r _ { a } = 10 \mathrm {~m}$ with $N = 60$. In the first case, the asteroid may not be large enough to warrant attention; in the second case, 60 years is too long time. So, the answer is "no".
