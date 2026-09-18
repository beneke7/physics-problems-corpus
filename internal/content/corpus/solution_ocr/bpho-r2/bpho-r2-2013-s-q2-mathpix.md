---
id: solution-ocr-bpho-r2-2013-s-q2
source: bpho-r2
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/bpho-r2/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [bpho-r2-2013-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Q2
(i) The unrestricted splash reaches 6 metres, at which point its velocity has been reduced to zero by the gravitational acceleration; that is, all its kinetic energy has been converted into gravitational potential energy.
$\frac { 1 } { 2 } m u ^ { 2 } = m g h _ { \text {max } } \quad$ where m is the mass of a hypothetical "parcel" of water, u is the intial velocity, and $\mathrm { h } _ { \max } = 6 \mathrm {~m}$ is the maximum height reached by the water.

$$
u = \sqrt { 12 g }
$$

Use: $v _ { t } = u - g t$ (eq1) to calculate velocity at time t .
The distance travelled in this time will be given by $h _ { t } = u t - \frac { g t ^ { 2 } } { 2 }$ (eq2).
So we can calculate the time taken to reach 3.5 m as follows:

$$
\begin{aligned}
& 3.5 = \sqrt { 12 g } t _ { 3.5 } - \frac { g } { 2 } t _ { 3.5 } ^ { 2 } \\
& - \frac { g } { 2 } t _ { 3.5 } ^ { 2 } + \sqrt { 12 g } t _ { 3.5 } - 3.5 = 0
\end{aligned}
$$

So: $t _ { 3.5 } = \frac { - \sqrt { 12 g } \pm \sqrt { 12 g - 7 g } } { - g } = \sqrt { \frac { 12 } { g } } \pm \sqrt { \frac { 5 } { g } }$
There are two answers because the water is at 3.5 m twice, once on the way up and once when it falls back down from the final height. So the result we're interested in is the smaller one, corresponding to the earliest time:

$$
t _ { 3.5 } = \sqrt { \frac { 12 } { g } } - \sqrt { \frac { 5 } { g } } \quad \text { (eq3) }
$$

This is approximately 0.39 seconds, using $\mathrm { g } = 9.8 \mathrm {~m} / \mathrm { s }$.
Substituting eq3 into into eq1, we get:

$$
v _ { 3.5 } = \sqrt { 12 g } - g \left( \sqrt { \frac { 12 } { g } } - \sqrt { \frac { 5 } { g } } \right) = \sqrt { 5 g } \cong 7.0 m s ^ { - 1 }
$$


Q2
(ii) The force on the stone is independent of the thickness of the stone. Assume that the velocity of the water after impact with the stone is zero, i.e. the water does not "bounce" off the stone but rather "stops dead" and then falls back down under the influence of gravity. Note that the parcel of water is not an isolated system, so conservation of momentum does not apply (conservation of momentum would apply if we considered the (water + stone) system).

$$
F = m \frac { d v } { d t }
$$

The mass of water hitting the stone in unit time is:

$$
m _ { w } = \rho _ { w } \times v _ { 3.5 } \times A _ { \text {stone } } = 1750 \mathrm {~kg}
$$

where $\rho _ { \mathrm { w } } = 1000 \mathrm {~kg} / \mathrm { m } ^ { 3 }$ is the density of water, and $\mathrm { A } _ { \text {stone } } = 0.25 \mathrm {~m} ^ { 2 }$ is the area of the face of the stone where the water hits.

All this water has its velocity reduced from $7 \mathrm {~m} / \mathrm { s }$ to zero, so $\frac { d v } { d t } = - 7 m s ^ { - 2 }$
So the force the stone exerts on the water is:

$$
F _ { s w } = ( 1750 \mathrm {~kg} ) \times \left( - 7 \mathrm {~ms} ^ { - 2 } \right) = - 12,250 \mathrm {~N}
$$

So, by Newton's third law we have $F _ { w s } = 12,250 N$ as the force the water exerts on the stone.
(iii) We neglect the forces due to the cement holding the stones together, as we have no information about them. Having done so, we can set the condition for failure to occur as being met when the force from the water is sufficient to lift the stone:
$F _ { w s } - F _ { g s } = 0$ where $\mathrm { F } _ { \mathrm { gs } }$ is the force of gravity on the stone.

$$
F _ { w s } = F _ { g s } = \left( 9.8 \mathrm {~ms} ^ { - 2 } \right) \times \left( 4000 \mathrm { kgm } ^ { - 3 } \right) \times \left( 0.25 \mathrm {~m} ^ { 2 } \right) \times ( 0.1 \mathrm {~m} ) = 980 \mathrm {~N}
$$

From earlier we have: $F _ { w s } = - m _ { w } \frac { d v } { d t } = - \rho _ { w } v _ { 3.5 } A _ { \text {stone } } \left( - v _ { 3.5 } \right)$
Substituting the numbers in and rearranging, we get $v _ { 3.5 } \cong 2.0 m s ^ { - 1 }$
