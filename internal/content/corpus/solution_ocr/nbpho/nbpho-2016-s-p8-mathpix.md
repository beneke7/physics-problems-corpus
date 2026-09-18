---
id: solution-ocr-nbpho-2016-s-p8
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2016-oscillations]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
8. Oscillations
i) The stiffness $k$ of the spring is found from the force balance $m g = k x$, thus $k = m g / x$. The period of oscillations for such a spring pendulum is $T = 2 \pi \sqrt { m / k } \stackrel { ! } { = } 2 \pi \sqrt { l / g } \quad \Longrightarrow \quad l =$ $m g / k = x$.
ii) Apply Gauss's theorem to a sphere with radius $r$, concentric with the asteroid. By symmetry, the field strength (the gravitational acceleration) is constant on the sphere, thus the flux of this field strength equals the area of the sphere multiplied by field strength (with a minus sign, because the force is directed inwards). On the other hand, Gauss's theorem states that this flux equals $- 4 \pi G$ times the total mass inside the sphere. Formulaically (denote the asteroid's density by $\varrho$ ), $- 4 \pi r ^ { 2 } g = - 4 \pi G \times \frac { 4 } { 3 } \pi r ^ { 3 } \varrho$ and $g = \frac { 4 } { 3 } \pi G \varrho r =$ $G M r / R ^ { 3 }$ (denoting the total mass by $M$ and the total radius by $R$ ). Whenever we have an attractive force that is proportional to the displacement, we have harmonic motion (like in a spring pendulum).
iii) Identifying the gravitational acceleration as the centripetal acceleration, $G M / R ^ { 2 } =$ $\omega _ { o } ^ { 2 } R \quad \Longrightarrow \quad \omega _ { o } ^ { 2 } = G M / R ^ { 3 }$ (with $\omega _ { o }$ being the orbital angular speed). The time of reaching the friend is $t _ { o } = T _ { o } / 2 = \frac { 2 \pi } { \omega _ { o } } / 2 = \pi / \omega _ { o }$. Through the hole, on the other hand, we have half a period of an effective spring pendulum with a "stiffness" $k = G M m / R ^ { 3 }$ : namely, $t _ { h } =$ $T _ { h } / 2 = \frac { 2 \pi } { \omega _ { h } } / 2 = \pi / \omega _ { h }$. From the "stiffness" and a general formula for a spring pendulum, $\omega _ { h } ^ { 2 } =$ $k / m = G M / R ^ { 3 } = \omega _ { o } ^ { 2 }$. Therefore $t _ { o } = t _ { h } -$ the times are equal!
iv) As the motion after a bounce equals the timereversed motion before the bounce, the period is twice the time of the first bounce $\left( t _ { b } \right)$. For a constant acceleration, $h = g t _ { b } ^ { 2 } / 2 \Longrightarrow T = 2 t _ { b } =$ $2 \sqrt { \frac { 2 h } { g } }$. On the Earth, $g \approx 10 \mathrm {~m} / \mathrm { s } ^ { 2 }$, therefore $T = 2 \sqrt { \frac { 2 \times 50 \mathrm {~cm} } { 10 \mathrm {~m} / \mathrm { s } ^ { 2 } } } \approx 0.6 \mathrm {~s}$.

This is not a harmonic motion, because the displacement is a quadratic function of time, not a sinusoid. Also, here the restoring force is not proportional to displacement.
