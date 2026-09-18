---
id: solution-ocr-nbpho-2016-s-p6
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2016-charge-on-ring]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 6. Charge on a ring

i) The speed $v$ is just the magnitude of $r \dot { \phi }$, and energy conservation gives us that

$$
v ^ { 2 } + \frac { C } { \left| \mathbf { r } - \mathbf { r } _ { Q } \right| } = \text { const. } = 2 E / m ,
$$

where $C = \frac { Q q } { 2 \pi m \epsilon _ { 0 } }$. The value hence must equal the initial value. The figure indicates that $\phi ( 0 ) =$ 0 and $\phi _ { Q } = - \pi / 2$, and we get:

$$
v ( \phi ) ^ { 2 } = v _ { 0 } ^ { 2 } + \frac { C } { \sqrt { r ^ { 2 } + d ^ { 2 } } } - \frac { C } { \sqrt { r ^ { 2 } + d ^ { 2 } + 2 r d \sin \phi } } ,
$$

and $v ( \phi )$ is just the square-root of this.
ii) The force $F _ { n }$ from the ring is a constraint force, normal to the ring, and balances the other forces to give a total perpendicular force equal to the required centripetal force $F _ { c } = m v ^ { 2 } / r$, directed inwards. The other force is the Coulomb repulsion (if $C > 0$ ) from $Q$, with a magnitude $F _ { Q } = \frac { m C } { 2 \left( r ^ { 2 } + d ^ { 2 } + 2 r d \sin \phi \right) }$. Its perpendicular component acquires a factor of $\cos \alpha$, with $\alpha$ the angle between the local radius vector and the line $Q q$. The cosine theorem on the triangle defined by $q , Q$, and the ring's center yields $\cos \alpha =$ $\frac { r + d \sin \phi } { \sqrt { r ^ { 2 } + d ^ { 2 } + 2 r d \sin \phi } }$. We have $\cos \alpha > 0$ consistently, the normal part of $F _ { Q }$ pointing outwards everywhere (in the repulsive case). We get for the force from the ring

$$
F _ { n } = \frac { m v ^ { 2 } } { r } + \frac { m C ( r + d \sin \phi ) } { 2 \left( r ^ { 2 } + d ^ { 2 } + 2 r d \sin \phi \right) ^ { 3 / 2 } } ,
$$

with both terms directed inwards in the repulsive case of $C > 0$, else the second term will point outwards.
iii) When the particle has come to rest, the friction force parallel to the ring is automatically zero, but the other forces must balance. All normal forces are automatically balanced by the ring. We need to consider the longitudinal force, which can only come form the Coulomb force on $q$, and so its longitudinal component must vanish. This can only happen in two places, at the maximal and minimal distance from $Q$, i.e. at the top or bottom point. These points correspond to a minimum and maximum, respectively, of the electrostatic potential, and only the former would be stable for the repulsive case of $q Q > 0$ (else the opposite).
