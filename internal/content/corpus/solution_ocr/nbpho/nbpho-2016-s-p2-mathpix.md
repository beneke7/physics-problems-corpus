---
id: solution-ocr-nbpho-2016-s-p2
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2016-glass-plate]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Glass plate
i) The energy and impulse of a photon are related by $E = p c$. Because the incident side is black, it will absorb the photons and feel the force due to their momentum: $F _ { a } = \frac { d p } { d t }$, where $\frac { d p } { d t } =$ $\frac { 1 } { c } \frac { d E } { d t } = \frac { P } { c }$ is the impulse of the photons generated per unit time. $F _ { a } = \frac { P } { c }$.
ii) A fraction $r$ of the photons will be reflected, so they will exert twice the force, because the momentum change is twice as much as compared to absorbing them. A fraction $1 - r$ will be absorbed and will give a force similar to the previous expression.

$$
F _ { b } = 2 r \frac { P } { c } + ( 1 - r ) \frac { P } { c } = ( 1 + r ) \frac { P } { c } .
$$

iii) The light will be reflected many times and we will have to consider interference. Since energy is proportional to the square of the amplitude of the electric field, if a fraction $r$ of the photons and therefore of the energy is reflected, the amplitude of the reflected wave's electric field is $\sqrt { r }$ of the incident electric field. Let's calculate the total electric field amplitude of the wave that goes through. Denote by $E _ { i }$ the electric field of the incident wave and by $E _ { t }$ the electric field of the wave that has gone through the other side of the glass. On the incident side the proportion of the electric field amplitude that goes through is $\sqrt { 1 - r }$, of which a part $\sqrt { 1 - r }$ will go through and part $\sqrt { r }$ will bounce pack. So a wave with amplitude $E _ { 0 } = ( 1 - r ) E _ { i }$ went straight through and a wave with amplitude $\sqrt { ( 1 - r ) r } E _ { i }$ is bouncing back through the glass. Now it will go back to the first side, reflect back from there and of that a proportion $\sqrt { 1 - r }$ will go through and add to $E _ { t }$. However the wave has traveled an optical path $2 n d = 200.5 \lambda$, so it will be 180 degrees out of phase and we get $E _ { 1 } = - ( 1 - r ) r E _ { i }$. Repeating the procedure $E _ { 2 } = ( 1 - r ) r ^ { 2 } E _ { i }$ and so on $E _ { n } = ( 1 - r ) ( - r ) ^ { n } E _ { i }$. Summing all the electric fields that go through the other side of the glass we get:

$$
E _ { t } = \sum _ { n = 0 } ^ { \infty } E _ { n } = ( 1 - r ) E _ { i } \sum _ { n = 0 } ^ { \infty } ( - r ) ^ { n } = \frac { 1 - r } { 1 + r } E _ { i }
$$

Power is proportional to the square of the electric field:

$$
\frac { P _ { t } } { P } = \left( \frac { E _ { t } } { E _ { i } } \right) ^ { 2 } = \left( \frac { 1 - r } { 1 + r } \right) ^ { 2 } .
$$

Since power is also proportional to the number of photons, this fraction of the photons have gone through and haven't given their momentum to the glass. By energy conservation the rest have been reflected back toward the laser and since their momentum has been reversed:

$$
\begin{aligned}
F _ { c } & = 2 \left( \frac { P - P _ { t } } { c } \right) = \frac { 2 P } { c } \left( 1 - \left( \frac { 1 - r } { 1 + r } \right) ^ { 2 } \right) \\
& = \frac { 8 P r } { c ( 1 + r ) ^ { 2 } }
\end{aligned}
$$

Note: if we would calculate directly the total electric field of the reflected light, we would need to take into account that on the first reflection of the laser light from the glass there is a phase shift of 180 degrees due to reflection from a surface with a higher refractive index (air to glass surface).

Alternative solution: The light is bouncing back and forth. Inside the glass there is some sum of waves with the same frequency, which we can represent as a single wave moving forward and a single wave moving backwards. Denote by $E$ the wave amplitude of the forward moving wave right under the surface in the glass. The wave amplitude is constant at that point and it is made of the transmitted part of the incoming light $\sqrt { 1 - r } E _ { i }$ and from the 180 degrees out of phase part of $E$ itself as it bounces twice inside the glass to arrive at the same point back again: $- r E$. We get the relation:

$$
E = \sqrt { 1 - r } E _ { i } - r E \quad \rightarrow \quad E = \frac { \sqrt { 1 - r } } { 1 + r } E _ { i } .
$$

The wave that has gone all the way through the plate is

$$
E _ { t } = \sqrt { 1 - r } E = \frac { 1 - r } { 1 + r } E _ { i } .
$$

The rest follows as in the previous solution.
