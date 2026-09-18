---
id: solution-ocr-kevin-zhou-m8sol-p032
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m8-p032]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 32. Consider the $n$-sided polygon $P$ of least possible area that circumscribes a closed convex curve $K$. Prove that every tangency point of $K$ with a side of $P$ is the midpoint of that side. (Hint: begin by supposing that the area outside $P$ is filled with a gas of uniform pressure, with a vacuum inside $P$.)
Solution. The minimum energy is achieved when the gas takes up the largest possible area, i.e. when the polygon $P$ has minimum area. Let's model the polygon as being formed by $n$ infinite rods, which don't push on each other. Now, in equilibrium, the torque on each rod must be zero, but the only forces on the rod are the uniform pressure along the part of the rod making up the corresponding polygon side, and the normal force at the contact point. Taking torques about the contact point shows that it must be the midpoint.

[2] Problem 33. In this problem we'll derive Kepler's first law yet again, using no calculus, but a bit of Euclidean geometry. As usual, we suppose a planet of mass $m$ orbits a fixed star of much greater mass $M$. Placing the star at the origin, let $\phi$ be the angle between $\mathbf { r }$ and $\mathbf { v }$ for the planet.
    (a) Write down the quantities $E$ and $L$ in terms of $G , M , m , v , r$, and $\phi$, and show that
$$
\left( r ^ { 2 } + \frac { G M m } { E } r \right) \sin ^ { 2 } \phi = \frac { L ^ { 2 } } { 2 m E } .
$$
    (b) Now consider an ellipse with semimajor axis $a$ and eccentricity $e$, meaning that the distance between the foci is $2 a e$, with one of the foci $F$ at the origin. Consider a point $P$ on the ellipse, so that the angle between the tangent to the ellipse at $P$ and $F P$ is $\phi$. If $r = | F P |$, show that
$$
\left( r ^ { 2 } - 2 a r \right) \sin ^ { 2 } \phi = - a ^ { 2 } \left( 1 - e ^ { 2 } \right) .
$$
You will have to use the geometrical property that a light ray sent from one focus will reflect at the ellipse to hit the other focus.
    (c) By comparing your results for (a) and (b), conclude that the orbit is an ellipse with
$$
a = - \frac { G M m } { 2 E } , \quad e = \sqrt { 1 + \frac { 2 E L ^ { 2 } } { G ^ { 2 } M ^ { 2 } m ^ { 3 } } } .
$$

Solution. (a) By definition, we have

$$
L = m r v \sin \phi , \quad E = \frac { 1 } { 2 } m v ^ { 2 } - \frac { G M m } { r } .
$$

Solving the second equation for $v$ gives

$$
v = \sqrt { \frac { 2 E } { m } + \frac { 2 G M } { r } } .
$$

Plugging this into the first equation, squaring, and rearranging gives the desired result.

(b) Refer to the below diagram, where $T T ^ { \prime }$ is the tangent to the ellipse and $N N ^ { \prime }$ is the normal.
![](../../../figures/solution-ocr/78ba1c9a623108c9e74c28aa.jpg)
By the law of cosines,
$$
( 2 a e ) ^ { 2 } = ( 2 a - r ) ^ { 2 } + r ^ { 2 } - 2 r ( 2 a - r ) \cos \psi .
$$
By the geometrical properties of the ellipse, $N N ^ { \prime }$ is the angle bisector of $\angle F ^ { \prime } P F$, so
$$
\cos \psi = \cos ( \pi - 2 \phi ) = - \cos ( 2 \phi ) = 2 \sin ^ { 2 } \phi - 1 .
$$
Plugging this into the law of cosines and rearranging gives the desired result.

(c) This follows immediately, from inspection.
This derivation breaks down for $E \geq 0$, since in that case the trajectory isn't an ellipse, but similar derivations can be performed for the parabola and hyperbola.
