---
id: solution-ocr-kevin-zhou-m4sol-ex005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-ex005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 5
If a spring with spring constant $k _ { 1 }$ and relaxed length $\ell _ { 1 }$ is combined with a spring with spring constant $k _ { 2 }$ and relaxed length $\ell _ { 2 }$, find the spring constant and relaxed length of the combined spring, if the combination is in series or in parallel.

Solution
For the series combination, the new relaxed length is clearly $\ell = \ell _ { 1 } + \ell _ { 2 }$. Suppose the first spring is stretched by $x _ { 1 }$ and the second by $x _ { 2 }$. The tensions in the springs must balance,

$$
F = k _ { 1 } x _ { 1 } = k _ { 2 } x _ { 2 } .
$$

Thus, the new spring constant is

$$
k = \frac { F } { x _ { 1 } + x _ { 2 } } = \frac { k _ { 2 } x _ { 2 } } { x _ { 2 } \left( k _ { 2 } / k _ { 1 } + 1 \right) } = \frac { k _ { 1 } k _ { 2 } } { k _ { 1 } + k _ { 2 } } .
$$

For example, if the spring is cut in half, the pieces have spring constant $2 k$.
Now consider the parallel combination. In this case it's clear that the new spring constant is $k = k _ { 1 } + k _ { 2 }$, since the tensions of the springs add. The new relaxed length $\ell$ is when the forces in the springs cancel out, so

$$
k _ { 1 } \left( \ell - \ell _ { 1 } \right) + k _ { 2 } \left( \ell - \ell _ { 2 } \right) = 0
$$

which implies

$$
\ell = \frac { k _ { 1 } \ell _ { 1 } + k _ { 2 } \ell _ { 2 } } { k _ { 1 } + k _ { 2 } } .
$$

[2] Problem 10 (Morin 4.20). A mass $m$ is attached to $n$ springs with relaxed lengths of zero. The spring constants are $k _ { 1 } , k _ { 2 } , \ldots , k _ { n }$. The mass initially sits at its equilibrium position and then is given a kick in an arbitrary direction. Describe the resulting motion.

Solution. Suppose the anchor of spring $i$ is at $\mathbf { r } _ { i }$. Then the force on the mass is

$$
\mathbf { F } = - \sum _ { i } k _ { i } \left( \mathbf { r } - \mathbf { r } _ { i } \right) = \left( \sum _ { i } k _ { i } \right) \mathbf { r } - \mathbf { C }
$$

where $\mathbf { C }$ is some constant vector. Thus, we see that the mass undergoes simple harmonic motion with angular frequency $\omega = \sqrt { \frac { \sum _ { i } k _ { i } } { m } }$.
[3] Problem 11 (Morin 4.22). A spring with relaxed length zero and spring constant $k$ is attached to the ground. A projectile of mass $m$ is attached to the other end of the spring. The projectile is then picked up and thrown with velocity $v$ at an angle $\theta$ to the horizontal.


(a) Geometrically, what kind of curve is the resulting trajectory?
(b) Find the value of $v$ so that the projectile hits the ground traveling straight downward.

Solution. (a) Let the anchor of the spring be the origin. Then, the force on the particle is $- k \mathbf { r } - m g \hat { \mathbf { y } } = - k \left( \mathbf { r } - \mathbf { r } _ { 0 } \right)$, so it is effectively a single spring force. The motion in 2D due to a spring force is an ellipse (independent $x$ and $y$ oscillations of the same frequency), so the shape is a portion of an ellipse, whose center is a distance $m g / k$ directly below the launch point.

(b) Note that the horizontal velocity takes the form $v _ { x } ( t ) = ( v \cos \theta ) \cos ( \omega t )$, because the motion in the horizontal direction is just simple harmonic. The horizontal velocity vanishes when the phase is $\pi / 2$, a total of a quarter cycle.
At this time, the vertical displacement must vanish. Vertically, the motion is just simple harmonic but with an equilibrium point shifted downward by $m g / k$. Let the vertical velocity take the form
$$
v _ { y } ( t ) = v _ { 0 } \cos ( \omega t + \phi ) .
$$
The initial phase is $\phi$, and just before the mass hits the ground, its vertical velocity is the opposite of the original one, so the final phase is $\pi - \phi$. So hitting the ground occurs at the same time as having a vertical velocity if the phase difference is $\pi / 2$, which implies $\phi = \pi / 4$.
Now, by matching the initial velocity and acceleration, we know that
$$
v _ { 0 } \cos \phi = v \sin \theta , \quad - v _ { 0 } \omega \sin \phi = - g
$$
Dividing these equations gives
$$
\tan \phi = \frac { g } { \omega v \sin \theta }
$$
and we must have $\tan \phi = 1$, so
$$
v = \frac { g } { \omega \sin \theta } = \sqrt { \frac { m } { k } } \frac { g } { \sin \theta } .
$$
