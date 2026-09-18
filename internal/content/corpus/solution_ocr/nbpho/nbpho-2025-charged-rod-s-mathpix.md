---
id: solution-ocr-nbpho-2025-charged-rod-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2025-charged-rod]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix PDF API Markdown conversion; split from the full 2025 booklet; grading-only material omitted from canonical display."
---
# 7. Charged rod (6 points) — Solution by Jaan Kalda

i) (2 points) Notice that all particles with the same charge-to-mass ratio orbit in a homogeneous magnetic field $B$ with the same frequency $\omega _ { B } = \frac { B q } { m }$; the orbit is a circle of radius $r = \frac { v } { \omega _ { B } }$. Indeed, the Lorentz force must provide the centripetal acceleration, hence $B q v = m v \omega _ { B } \Rightarrow \omega _ { B } = \frac { B q } { m }$.
Since the mass-to-charge ratio is the same

On the other hand, if the angular speed were smaller or larger, we would have either $B q v < m v \omega$ or $B q v > m v \omega$ for all the pieces, resulting in either stretching or compressive tension force at the centre of the rod, respectively. Therefore, the answer is $\omega = \frac { B q } { m }$.

ii) (4 points)To begin with, let us notice that if

$$
\begin{aligned}
\sum _ { i } q _ { i } \frac { \mathrm {~d} \vec { r } _ { i } } { \mathrm {~d} t } \times \vec { B } & = \alpha \sum _ { i } m _ { i } \frac { \mathrm {~d} \vec { r } _ { i } } { \mathrm {~d} t } \times \vec { B } \\
& = \alpha \frac { \mathrm { d } \vec { r } _ { C } } { \mathrm {~d} t } \times \vec { B } \sum _ { i } m _ { i }
\end{aligned}
$$

So, Newton's second law reads

$$
\frac { \mathrm { d } ^ { 2 } \vec { r } _ { C } } { \mathrm {~d} t ^ { 2 } } \sum _ { i } m _ { i } = \frac { q } { m } \frac { \mathrm {~d} \vec { r } _ { C } } { \mathrm {~d} t } \times \vec { B } \sum _ { i } m _ { i } .
$$

The total mass of the system cancels out from this equation, and we can see that the centre of mass $\vec { r } _ { C }$ moves in the same way as a point charge $q$ with mass $m$.

Alternatively, the same can be achieved through integration. From Newton's second law $m \vec { a } _ { C } = \int \mathrm { d } q \vec { v } \times \vec { B }$, where $\vec { v }$ is the velocity of the charge element $\mathrm { d } q$. But since the mass and charge distributions are homogenous, $\mathrm { d } q = \frac { q } { m } \mathrm {~d} m$ and $\vec { B }$ is constant so it can be taken out from the integral to achieve $m \vec { a } _ { C } = \frac { q } { m } \left( \int \vec { v } \mathrm {~d} m \right) \times \vec { B }$. But now the integral is just $m \vec { v } _ { C }$ (can be seen directly or through the definition of centre of mass $\int \frac { \mathrm { d } \vec { r } } { \mathrm {~d} t } \mathrm {~d} m = \frac { \mathrm { d } } { \mathrm { d } t } \int \vec { r } \mathrm {~d} m = m \vec { r } _ { C }$. Thus we get $m \vec { a } _ { C } = q \vec { v } _ { C } \times \vec { B }$.

Additionally, the rod can (and will) rotate with a constant speed. The fact that the angular speed must be constant follows from the conservation of kinetic energy of the rod, which is the sum of the kinetic energy of its centre of mass and the rotational energy around the centre of mass. The former is constant, so the latter must be as well.

The centre of mass moves with speed $v / 2$ and draws a circle of radius $R = \frac { m v } { 2 B q }$ that passes through the point $\left( \frac { l } { 2 } , 0 \right)$ and for which the $x$-axis is a symmetry axis. The red end can reach the origin only when the centre of mass is at a distance $\frac { l } { 2 }$ from the origin. This can happen either after a full cyclotron period $T = 2 \pi / \omega _ { B }$, or at any moment assuming $R = \frac { l } { 2 }$ and the circle is centred around the origin.

To determine if this can happen earlier than after time $T$, let us assume that $R =$ $\frac { m v } { 2 B q } = \frac { l } { 2 }$. In that case, the angular speed of the rod's rotation is $\Omega = \frac { v } { l }$, and we get $v = \frac { B q l } { m }$. This means $\Omega = \frac { B q } { m } = \omega _ { B }$, i. e., the rod's rotational angular speed is the same as the centre of mass' angular speed in its orbit, which would cause the blue end to remain at the origin.

Next, we examine if the red end can reach the origin after time $T$. For this to happen, the condition is that $\Omega T = ( 2 \pi n + \pi )$, where $n$ is an integer. Since $\Omega = v / l$ and we need to minimize $v$, we take $n = 0$ to obtain $v =$ $\pi l / T = \frac { l B q } { 2 m }$.
