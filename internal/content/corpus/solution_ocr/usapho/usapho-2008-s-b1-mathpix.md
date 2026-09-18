---
id: solution-ocr-usapho-2008-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2008-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

A platform is attached to the ground by an ideal spring of constant $k$; both the spring and the platform have negligible mass, assume that your mass is $m _ { p }$. Sitting on the platform is a rather large lump of clay of mass $m _ { c } = r m _ { p }$. You then gently step onto the platform, and the platform settles down to a new equilibrium position, a vertical distance $D$ below the original position. Throughout the problem assume that you never loose contact with the platform.
![](../../../figures/solution-ocr/44d61838858b1e37b57dffb6.jpg)

a. You then slowly pick up the lump of clay and hold it a height $h$ above the platform. Upon releasing the clay you and the platform will oscillate up and down; you notice that the clay strikes the platform after the platform has completed exactly one oscillation. Determine the numerical value of the ratio $h / D$.
b. Assume the resulting collision between the clay and the platform is completely inelastic. Find the ratio of the amplitude of the oscillation of the platform before the collision $\left( A _ { \mathrm { i } } \right)$ and the amplitude of the oscillations of the platform after the collision $\left( A _ { \mathrm { f } } \right)$. Determine $A _ { \mathrm { f } } / A _ { \mathrm { i } }$ in terms of the mass ratio $r$ and any necessary numerical constants.
c. Sketch a graph of the position of the platform as a function of time, with $t = 0$ corresponding to the moment when the clay is dropped. Show one complete oscillation after the clay has collided with the platform. It is not necessary to use graph paper.
d. The above experiment is only possible if the mass ratio $r$ is less than some critical value $r _ { c }$. Otherwise, despite the clay having been dropped from the height determined in part (a), the oscillating platform will hit the clay before the platform has completed one full oscillation. On your graph in part (c) sketch the position of the clay as a function of time relative to the position of the platform for the mass ratio $r = r _ { c }$.

## Solution

a. Stepping on the platform will lower it a distance $D$. This means that the spring constant of the platform spring is given by
$$
k D = m _ { p } g .
$$
If the lump of clay is removed, then the equilibrium position of the platform would rise a distance $A$ given by
$$
k A = m _ { c } g .
$$

This would also be the amplitude of the oscillations after the clay is released, so

$$
A _ { i } = \frac { m _ { c } g } { k } .
$$

The time for a complete oscillation is

$$
T = 2 \pi \sqrt { \frac { m _ { p } } { k } } .
$$

If the clay falls a distance $h$, then

$$
h = \frac { 1 } { 2 } g T ^ { 2 } = 2 \pi ^ { 2 } g \frac { m _ { p } } { k } = 2 \pi ^ { 2 } D .
$$

b. When the plate is at the stating point it is at rest. The clay will hit it with a speed given by
$$
v _ { 0 } = g T .
$$
Conservation of momentum in an inelastic collision will then result in a final speed of the clay and platform system of
$$
v _ { f } = v _ { 0 } \frac { m _ { c } } { m _ { c } + m _ { p } } .
$$
The kinetic energy just after collision will be
$$
K = \frac { 1 } { 2 } \left( m _ { c } + m _ { p } \right) v _ { f } ^ { 2 } .
$$
Then the amplitude of the resulting oscillations will be given by
$$
\frac { 1 } { 2 } k A _ { f } ^ { 2 } = \frac { 1 } { 2 } \left( m _ { c } + m _ { p } \right) v _ { f } ^ { 2 }
$$
which implies
$$
A _ { f } = v _ { f } \sqrt { \frac { m _ { c } + m _ { p } } { k } } .
$$
Combining the equations,
$$
\begin{aligned}
\frac { A _ { f } } { A _ { i } } & = \frac { v _ { f } } { A _ { i } } \sqrt { \frac { m _ { c } + m _ { p } } { k } } \\
& = \frac { v _ { 0 } } { A _ { i } } \frac { m _ { c } } { m _ { c } + m _ { p } } \cdot \sqrt { \frac { m _ { c } + m _ { p } } { k } } \\
& = \frac { g T k } { m _ { c } g } \frac { m _ { c } } { m _ { c } + m _ { p } } \cdot \sqrt { \frac { m _ { c } + m _ { p } } { k } } \\
& = T \sqrt { \frac { k } { m _ { p } + m _ { c } } } \\
& = 2 \pi \sqrt { \frac { m _ { p } } { m _ { p } + m _ { c } } } .
\end{aligned}
$$
c. The graph is shown below.

![](../../../figures/solution-ocr/227144481e28118b915d8530.jpg)

d. This is shown as a dashed red line above. The crucial feature is that the clay's trajectory is tangent to the platform's at some point.
