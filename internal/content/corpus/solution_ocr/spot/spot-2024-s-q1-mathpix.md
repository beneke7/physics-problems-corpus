---
id: solution-ocr-spot-2024-s-q1
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2024-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. A thin uniform ring of mass $m$ falls onto a rough floor. The initial velocity of the centre of mass is $v _ { 0 }$, at an angle $\theta$ clockwise from the upwards vertical when it contacts the floor (refer to the diagram). It is also rotating with angular velocity $\omega _ { 0 }$ clockwise. The ground is rough enough so that the ring achieves no-slipping right after it contacts the ground. Denote the coefficient of restitution as $e$ and the gravitational acceleration as $g$.
![](../../../figures/solution-ocr/413a0b62d5e3e2636b724dfd.jpg)
    (a) Find the velocity of the ring after the first bounce, and its angular velocity.
    (b) Suppose the ring bounces straight up after touching the ground. Find the maximum height reached by the ring.

Solution:


(a) Let the ring have mass $m$, and suppose the impulse it receives from the ground in the horizontal direction is $J$. Let the speed of the centre of the ring after the bounce is $v$, making an angle $\beta$ with the upwards vertical. Also suppose the ring rotates with a final angular velocity of $\omega$.
Using the impulse-momentum theorem in the horizontal direction,
$$
m v \sin \beta - m v _ { 0 } \sin \theta = J .
$$
Using the angular impulse-momentum theorem, the angular impulse received is $- r J$, therefore
$$
m r ^ { 2 } \omega - m r ^ { 2 } \omega _ { 0 } = - r J .
$$
The ring achieves the no-slip condition before it lifts off the ground, therefore
$$
v \sin \beta = r \omega .
$$
Finally, using the coefficient of restitution,
$$
v \cos \beta = - e v _ { 0 } \cos \theta
$$
noting the sign of $\cos \theta$. To eliminate $J$, we can combine the first two equations:
$$
- m v r \sin \beta + m v _ { 0 } r \sin \theta = m r ^ { 2 } \omega - m r ^ { 2 } \omega _ { 0 } .
$$
Therefore,
$$
v _ { 0 } \sin \theta - v \sin \beta = r \left( \omega - \omega _ { 0 } \right)
$$
Substituting in $r \omega = v \sin \beta$, we get
$$
v _ { 0 } \sin \theta = 2 v \sin \beta - r \omega _ { 0 }
$$

Therefore,

$$
v \sin \beta = \frac { 1 } { 2 } \left( v _ { 0 } \sin \theta + r \omega _ { 0 } \right) .
$$

Combining this with $v \cos \beta = - e v _ { 0 } \cos \theta$, we get

$$
\begin{gathered}
v = \sqrt { ( v \sin \beta ) ^ { 2 } + ( v \cos \beta ) ^ { 2 } } = \frac { 1 } { 2 } \sqrt { 4 e ^ { 2 } v _ { 0 } ^ { 2 } \cos ^ { 2 } \theta + \left( v _ { 0 } \sin \theta + r \omega _ { 0 } \right) ^ { 2 } } . \\
\tan \beta = \frac { v \sin \beta } { v \cos \beta } = - \frac { v _ { 0 } \sin \theta + r \omega } { 2 v _ { 0 } \cos \theta } \\
\omega = \frac { v \sin \beta } { r } = \frac { v _ { 0 } \sin \theta + r \omega _ { 0 } } { r \omega } .
\end{gathered}
$$

Mark scheme:

1 - Impulse-Momentum Theorem
1 - COR and No-slip
1 - Final velocity
1 - Final angular velocity
(b) If the ring bounces vertically upwards, then $\beta = 0$, therefore
$$
v _ { 0 } \sin \theta = - r \omega .
$$
The maximum height reached is
$$
h = \frac { v ^ { 2 } } { 2 g } = \frac { e ^ { 2 } v _ { 0 } ^ { 2 } \cos ^ { 2 } \theta } { 2 g } = \frac { e ^ { 2 } \left( v _ { 0 } ^ { 2 } - r \omega _ { 0 } ^ { 2 } \right) } { 2 g } .
$$
Mark scheme:
1 - Correct value of maximum height
