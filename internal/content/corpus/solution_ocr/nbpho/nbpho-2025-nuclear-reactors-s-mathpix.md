---
id: solution-ocr-nbpho-2025-nuclear-reactors-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2025-nuclear-reactors]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix PDF API Markdown conversion; split from the full 2025 booklet; grading-only material omitted from canonical display."
---
# 3. Nuclear reactors (6 points) — Official solution

i) (1 point)If the speed of the particle is much less than the speed of light, we can use nonrelativistic approach. For non-relativistic particles we know $v = \sqrt { 2 E _ { k } / m }$. Substituting values gives us $v _ { f } = 2.2 \times 10 ^ { 3 } \mathrm {~m} \mathrm {~s} ^ { - 1 }$. This

is much less than the speed of light and thus justified. Another way to justify the applicability of the non-relativistic approach would be to say that kinetic energy is significantly less than the rest energy $\left( E _ { f } \ll m _ { \mathrm { n } } c ^ { 2 } \right)$.

Typo in problem description. $E _ { f } = 0.025 \mathrm { eV }$ is the mode of the Maxwell-Boltzmann distribution which gives $E = k _ { b } T$. Average gives $E = ( 3 / 2 ) k _ { b } T$.
Using the mode of the Maxwell-Boltzmann distribution, $E = k _ { \mathrm { B } } T$, and remembering to convert from eV to J correctly, we find

$$
T _ { f } = \frac { 0.025 \cdot 1.602 \times 10 ^ { - 19 } } { 1.38 \times 10 ^ { - 23 } } = 290 \mathrm {~K} .
$$

With $E = ( 3 / 2 ) k _ { \mathrm { B } } T$ we find $T _ { f } \approx 193 \mathrm {~K}$.
ii) (1 point) The non-relativistic approach justified as in previous task. Same approach gives us $v _ { 0 } = 2.0 \times 10 ^ { 7 } \mathrm {~m} \mathrm {~s} ^ { - 1 }$.

iii) (2.5 points) In a collision between particle 1 ( $m _ { 1 } , v _ { 1 , i }$ and $v _ { 1 , f }$ ) and particle 2 ( $m _ { 2 } , v _ { 2 , i }$ and $v _ { 2 , f }$ ) momentum is conserved,

$$
m _ { 1 } \left( v _ { 1 , f } - v _ { 1 , i } \right) = m _ { 2 } \left( v _ { 2 , i } - v _ { 2 , f } \right)
$$

and since the collisions are elastic, kinetic energy is also conserved:

$$
m _ { 1 } \left( v _ { 1 , f } ^ { 2 } - v _ { 1 , i } ^ { 2 } \right) = m _ { 2 } \left( v _ { 2 , i } ^ { 2 } - v _ { 2 , f } ^ { 2 } \right) .
$$

Dividing the latter by the former leads to

$$
v _ { 1 , i } + v _ { 1 , f } = v _ { 2 , i } + v _ { 2 , f } .
$$

Substituting this to the conservation of momentum gives for particle 1:

$$
v _ { 1 , f } = \frac { m _ { 1 } - m _ { 2 } } { m _ { 1 } + m _ { 2 } } v _ { 1 , i } + \frac { 2 m _ { 2 } } { m _ { 1 } + m _ { 2 } } v _ { 2 , i } ,
$$

and similarly for particle 2:

$$
v _ { 2 , f } = \frac { 2 m _ { 1 } } { m _ { 1 } + m _ { 2 } } v _ { 1 , i } + \frac { m _ { 1 } - m _ { 2 } } { m _ { 1 } + m _ { 2 } } v _ { 2 , i } .
$$

We see that with $m _ { 1 } = m _ { 2 }$ there is a maximum transfer of momentum. Assuming that particle 1 is the neutron and particle 2 is the target, and that the target is at rest for all intents and purposes, the mass of the moderators atoms should be the same as the neutrons.

In a single collision with a stationary atom of the moderator, the speed of the neutron decreases by the factor of $\frac { m _ { 1 } - m _ { 2 } } { m _ { 1 } + m _ { 2 } }$, so the speed of the neutron after $N$ head-on collisions with stationary atoms of moderator will be

$$
v _ { N } = v \left( \frac { m _ { 1 } - m _ { 2 } } { m _ { 1 } + m _ { 2 } } \right) ^ { N } .
$$

Hence,

$$
\begin{aligned}
N & = \frac { \ln \left( v _ { f } / v _ { 0 } \right) } { \ln \left[ \left( m _ { 1 } - m _ { 2 } \right) / \left( m _ { 1 } + m _ { 2 } \right) \right] } \\
& = \frac { 1 } { 2 } \frac { \ln \left( E _ { f } / E _ { 0 } \right) } { \ln \left[ \left( m _ { 1 } - m _ { 2 } \right) / \left( m _ { 1 } + m _ { 2 } \right) \right] } = 614 .
\end{aligned}
$$

iv) (1.5 points) We can model the gas inside the rod as an ideal gas. Simply due to swelling the pressure inside the rod would increase from 2.5 MPa to 5 MPa as we know from Boyle's law $P _ { 1 } V _ { 1 } = P _ { 2 } V _ { 2 } \rightsquigarrow P _ { 2 } =$ $P _ { 1 } V _ { 1 } / V _ { 2 }$. Thus, the release of xenon must contribute 1.5 MPa's worth of pressure due to Dalton's law $p _ { \text {tot } } = p _ { \mathrm { He } } + p _ { \mathrm { Xe } }$. From ideal gas law we find the amount of xenon moles as law we find the amount of xenon moles as

$$
n _ { \mathrm { Xe } } = p _ { \mathrm { Xe } } V / R T _ { 0 } = 5.5 \times 10 ^ { - 3 } \mathrm {~mol} ,
$$

where $p _ { \mathrm { Xe } } = 1.5 \mathrm { MPa } , V _ { 2 } = 9 \mathrm {~cm} ^ { 3 }$ and $T =$ 293 K. In a similar manner we find that the amount of helium in the beginning was

$$
n _ { \mathrm { He } } = p _ { \mathrm { He } } V _ { 0 } / R T _ { 0 } = 1.8 \times 10 ^ { - 2 } \mathrm {~mol} ,
$$

where $P _ { \mathrm { He } } = 2.5 \mathrm { MPa } , V _ { 0 } = 18 \mathrm {~cm} ^ { 3 }$ and $T _ { 0 } = 293 \mathrm {~K}$. The ratio of the two is

$$
\frac { n _ { \mathrm { He } } } { n _ { \mathrm { Xe } } } \approx 3.3 .
$$
