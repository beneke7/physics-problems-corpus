---
id: solution-ocr-usapho-2021-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2021-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

## Disk Jockey

A disk of uniform mass density, mass $M$, and radius $R$ sits at rest on a frictionless floor. The disk is attached to the floor by a frictionless pivot at its center, which keeps the center of the disk in place, but allows the disk to rotate freely. An ant of mass $m \ll M$ is initially standing on the edge of the disk; you may give your answers to leading order in $m / M$.

a. The ant walks an angular displacement $\theta$ along the edge of the disk. Then it walks radially inward by a distance $h \ll R$, tangentially through an angular displacement $- \theta$, then back to its starting point on the disk. Assume the ant walks with constant speed $v$.

![](../../../figures/solution-ocr/07bda2f70bb5e0b61fadfac6.jpg)
Through what net angle does the disk rotate throughout this process, to leading order in $h / R$ ?

## Solution

During the first leg of the trip, the disk has angular velocity

$$
\omega = - \frac { 2 m v } { M R }
$$

by conservation of angular momentum. Thus, the disk rotates through an angle

$$
\phi _ { 1 } = - \frac { 2 m v } { M R } \frac { \theta R } { v } = - \frac { 2 m \theta } { M }
$$

to leading order in $m / M$. (Here we have neglected the fact that the disk rotates under the ant as it is walking, somewhat reducing the distance it has to walk; this changes the answer only to higher order in $m / M$. The exact answer is a more complicated function of $m / M$. By going to "leading order", we mean we are expanding that exact answer in a series in $m / M$, such as with the binomial theorem, and keeping only the first nonzero term.)
When the ant is moving radially, $\omega = 0$, so no rotation occurs. On the last leg of the trip, the disk has angular velocity

$$
\omega = \frac { 2 m v ( R - h ) } { M R ^ { 2 } }
$$


which means the disk rotates through an angle

$$
\phi _ { 2 } = \frac { 2 m v ( R - h ) } { M R ^ { 2 } } \frac { \theta ( R - h ) } { v } = \frac { 2 m \theta } { M } \left( 1 - \frac { h } { R } \right) ^ { 2 } .
$$

The net rotation is

$$
\phi _ { 1 } + \phi _ { 2 } = \frac { 2 m \theta } { M } \left( \left( 1 - \frac { h } { R } \right) ^ { 2 } - 1 \right) \approx - \frac { 4 m } { M } \frac { h \theta } { R } .
$$

The sign is not important since it is convention-dependent. (Solutions that were not fully approximated were also accepted; however, not approximating early dramatically increases the amount of work you have to do.)
Incidentally, you might have thought the answer had to be zero, by angular momentum conservation. After all, when a system has zero total linear momentum, its center of mass can't move. But this problem shows that systems with zero total angular momentum can perform net rotations, which is the reason, e.g. that a falling cat can always land on its feet. In more advanced physics, this would be described by saying the constraint on the disc's motion coming from angular momentum conservation is not holonomic.

b. Now suppose the ant walks with speed $v$ along a circle of radius $r$, tangent to its starting point.
![](../../../figures/solution-ocr/a52f5f39b014b3a501ea38e8.jpg)
Through what net angle does the disk rotate?

## Solution

There are many ways to do this problem, so we'll give a selection, starting with a straightforward solution and then considering some increasingly elegant solutions.
First solution: The overall rotation angle of the disk is

$$
\phi = \int \omega d t = \frac { 2 } { M R ^ { 2 } } \int L d t = \frac { 2 m } { M R ^ { 2 } } \int \mathbf { r } \times \mathbf { v } d t
$$

where we again work to leading order in $m / M$, and r and v are the position and velocity of the ant. The coordinates of a point on the circle are given by

$$
( r \sin \theta , ( R - r ) + r \cos \theta ) .
$$


If the speed of the ant is $v$, the velocity is given by

$$
( v \cos \theta , - v \sin \theta ) .
$$

To evaluate the angular momentum, note that

$$
| \mathbf { v } \times \mathbf { r } | = v r \cos ^ { 2 } \theta + v r \sin ^ { 2 } \theta + v ( R - r ) \cos \theta = v r + v ( R - r ) \cos \theta .
$$

Thus, we have

$$
L = m v ( r + ( R - r ) \cos \theta ) .
$$

Plugging this into the time integral above,

$$
\phi = \int \frac { 2 m v } { M R ^ { 2 } } ( r + ( R - r ) \cos ( \theta ( t ) ) ) \mathrm { d } t .
$$

Changing this to an integral over $\theta$ using $d \theta = v d t / r$,

$$
\phi = \int _ { 0 } ^ { 2 \pi } \frac { 2 m r } { M R ^ { 2 } } ( r + ( R - r ) \cos ( \theta ( t ) ) ) \mathrm { d } \theta = \frac { 4 m } { M } \frac { \pi r ^ { 2 } } { R ^ { 2 } } .
$$

Of course, the problem could also be solved by parameterizing the ant's path in a different way, such as by using polar coordinates with the origin at the center of the disk. The way we set it up here is the simplest, since it makes the integral easy. (For most students, the hardest part was finding a compact expression for $L$. A common mistake was assuming $L = m v _ { x } r$ or a variant thereof.)
Second solution: The net effect on the disk of one ant going in the circular path is the same as two ants going along the path, each with half the mass, and thus the same as four ants each with a quarter the mass, and so on. By repeating this logic, we can thus replace the ant with a ring of radius $r$ and mass $m$ of uniform density, which rotates around once. Therefore, the rotation angle is

$$
\phi = 2 \pi \frac { I _ { \text {disk } } } { I _ { \text {ring } } } = 2 \pi \frac { m r ^ { 2 } } { M R ^ { 2 } / 2 } = \frac { 4 m } { M } \frac { \pi r ^ { 2 } } { R ^ { 2 } } .
$$

This is very simple, though it's a trick that only works for a circular trajectory.
Third solution: Starting from the first line of the first solution, we notice that

$$
\int \mathbf { r } \times \mathbf { v } d t = \int \mathbf { r } \times d \mathbf { r } = 2 A
$$

where $A$ is the area of the ant's trajectory. Thus, we have

$$
\phi = \frac { 4 m } { M } \frac { A } { R ^ { 2 } } = \frac { 4 m } { M } \frac { \pi r ^ { 2 } } { R ^ { 2 } } .
$$

This makes it clear why the answer had to be simple in general: the angle can only depend on a geometric property of the ant's trajectory, namely its area. This kind of phenomenon occurs in many fields of physics, and is generally known as a geometric phase.


Fourth solution: We can decompose the circle into a stack of thin rectangles. The effect of a single ant going around the circle is the same as the effect of one ant going around each rectangle. But by slightly generalizing your result in part (a), you can show that the net rotation due to each rectangle is $( 4 m / M ) \left( d A / R ^ { 2 } \right)$ where $d A$ is the area of that rectangle. Summing the areas gives the answer. Like the third solution, this works for any ant trajectory, and it makes it clear why it was the area of the trajectory that mattered.
