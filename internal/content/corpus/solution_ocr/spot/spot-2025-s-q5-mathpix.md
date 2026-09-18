---
id: solution-ocr-spot-2025-s-q5
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2025-q5]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
5. Consider a point charge $+ q$ placed at a fixed distance $d$ from an infinitely large, thin, conducting plane.
![](../../../figures/solution-ocr/1832ec28e3af945a524b61fd.jpg)
A small fly, initially on the point charge, takes off with an initial angle $\theta$ from the horizontal. Flying at a constant speed $v$, it follows the path of an electric field line until it reaches the plane (this diagram is not drawn to scale).
![](../../../figures/solution-ocr/366764ac0fd3827763c5ca97.jpg)
    (a) Define the coordinates $( x , y )$ such that the plane is at $x = 0$, and the point charge is at $( - d , 0 )$. Determine $E _ { x }$ and $E _ { y }$, the $x$ and $y$ components of the electric field, for all points $( x , y )$ in $x < 0$.
Solution: Using the method of images, we can find the electric field everywhere to the left of the plane $( x < 0 )$ :
$$
\begin{aligned}
& \vec { E } = \vec { E } ( + q \text { at } ( - d , 0 ) ) + \vec { E } ( - q \text { at } ( + d , 0 ) ) \\
& \left\{ \begin{aligned}
E _ { x } & = \frac { q } { 4 \pi \varepsilon _ { 0 } } \left[ \frac { x + d } { \left( ( x + d ) ^ { 2 } + y ^ { 2 } \right) ^ { 3 / 2 } } - \frac { x - d } { \left( ( x - d ) ^ { 2 } + y ^ { 2 } \right) ^ { 3 / 2 } } \right] \\
E _ { y } & = \frac { q } { 4 \pi \varepsilon _ { 0 } } \left[ \frac { y } { \left( ( x + d ) ^ { 2 } + y ^ { 2 } \right) ^ { 3 / 2 } } - \frac { y } { \left( ( x - d ) ^ { 2 } + y ^ { 2 } \right) ^ { 3 / 2 } } \right]
\end{aligned} \right.
\end{aligned}
$$
    (b) The electric field line illustrated terminates at $\left( 0 , y _ { 0 } \right)$. Determine $y _ { 0 }$, leaving your answer in terms of $d$ and $\theta$. (Hint: The curved surface area of a sphere sector with half-angle $\theta$ is $\frac { 1 } { 2 } ( 1 - \cos \theta )$ of the total surface area of the sphere.)
Solution: Consider a Gaussian surface formed by the surface of revolution from the fly's trajectory and the plane. Since the curved part of the surface is by definition parallel to the electric field lines, the only contribution to the electric

flux is from its intersection with the plane.

$$
\begin{aligned}
\Phi _ { E } & = \int _ { 0 } ^ { y _ { 0 } } E _ { x } ( x = 0 ) \cdot 2 \pi y \mathrm {~d} y \\
& = \frac { q d } { \varepsilon _ { 0 } } \int _ { 0 } ^ { y _ { 0 } } \frac { y \mathrm {~d} y } { \left( d ^ { 2 } + y ^ { 2 } \right) ^ { 3 / 2 } } \\
& = \frac { q d } { \varepsilon _ { 0 } } \left[ - \frac { 1 } { \sqrt { d ^ { 2 } + y ^ { 2 } } } \right] _ { 0 } ^ { y _ { 0 } } \\
& = \frac { q } { \varepsilon _ { 0 } } \left( 1 - \frac { d } { \sqrt { d ^ { 2 } + y _ { 0 } ^ { 2 } } } \right)
\end{aligned}
$$

If we take the point charge to be spherical with radius $r \rightarrow 0$, at the end with the point charge, the surface approaches a cone with half-angle $\theta$. We know that the electric flux through a spherical surface surrounding a point charge is uniform, so the flux passing through this surface is given by the total flux multiplied by the surface area fraction of the sector with respect to the entire sphere:

$$
\Phi _ { E } = \frac { q } { 2 \varepsilon _ { 0 } } ( 1 - \cos \theta ) = \frac { q } { \varepsilon _ { 0 } } \sin ^ { 2 } \frac { \theta } { 2 }
$$

Equating the two fluxes, we have:

$$
\begin{aligned}
\frac { q } { \varepsilon _ { 0 } } \left( 1 - \frac { d } { \sqrt { d ^ { 2 } + y _ { 0 } ^ { 2 } } } \right) & = \frac { q } { \varepsilon _ { 0 } } \sin ^ { 2 } \frac { \theta } { 2 } \\
\frac { d } { \sqrt { d ^ { 2 } + y _ { 0 } ^ { 2 } } } & = \cos ^ { 2 } \frac { \theta } { 2 } \\
y _ { 0 } & = d \sqrt { \sec ^ { 4 } \frac { \theta } { 2 } - 1 }
\end{aligned}
$$

(c) Find the instantaneous acceleration of the fly $a$ as it reaches the plane. Leave your answer in terms of $v , d$ and $\theta$. (Hint: The radius of curvature $R$ of a curve $y ( x )$ is given by $R = \left| \frac { \left( 1 + y ^ { \prime 2 } \right) ^ { \frac { 3 } { 2 } } } { y ^ { \prime \prime } } \right|$, where primes denote a derivative with respect to $x$.)

Solution: Since the fly moves along a field line, its motion is parallel to the electric field at every point. Hence, the trajectory of the fly is given by $\frac { \mathrm { d } y } { \mathrm {~d} x } = \frac { E _ { y } } { E _ { x } }$. This is a differential equation which can be solved to yield the full trajectory, however it is extremely difficult and not the intended solution.
As the fly is moving at a constant speed, its acceleration must be perpendicular to its velocity, with magnitude equal to the centripetal acceleration. At the plane, the electric field lines are horizontal, so the expression simplifies considerably. Namely, $E _ { y } = 0 , \frac { \mathrm {~d} y } { \mathrm {~d} x } = 0$ so $\frac { \mathrm { d } } { \mathrm { d } x } = \frac { \partial } { \partial x }$, and the radius of curvature is given by $\frac { 1 } { R } = \left| \frac { \mathrm { d } ^ { 2 } y } { \mathrm {~d} x ^ { 2 } } \right|$.


Hence,

$$
\begin{aligned}
a & = \frac { v ^ { 2 } } { R } = v ^ { 2 } \left| \frac { \mathrm {~d} ^ { 2 } y } { \mathrm {~d} x ^ { 2 } } \right| = v ^ { 2 } \left| \frac { \partial } { \partial x } \frac { E _ { y } } { E _ { x } } \right| = v ^ { 2 } \frac { \left| E _ { y } ^ { \prime } \right| } { E _ { x } } \\
& = \frac { 3 } { 2 } v ^ { 2 } \frac { \frac { 2 y ( x + d ) } { \left( ( x + d ) ^ { 2 } + y ^ { 2 } \right) ^ { 5 / 2 } } - \frac { 2 y ( x - d ) } { \left( ( x - d ) ^ { 2 } + y ^ { 2 } \right) ^ { 5 / 2 } } } { \left( ( x + d ) ^ { 2 } + y ^ { 2 } \right) ^ { 3 / 2 } } - \left. \frac { x - d } { \left( ( x - d ) ^ { 2 } + y ^ { 2 } \right) ^ { 3 / 2 } } \right| _ { x = 0 } \\
& = \frac { 3 y _ { 0 } } { y _ { 0 } ^ { 2 } + d ^ { 2 } } v ^ { 2 }
\end{aligned}
$$

where primes denote a partial derivative with respect to $x$.
Substituting the expression for $y _ { 0 }$, the final answer is

$$
a = \frac { 3 v ^ { 2 } } { d } \cos ^ { 2 } \frac { \theta } { 2 } \sin \frac { \theta } { 2 } \sqrt { 1 + \cos ^ { 2 } \frac { \theta } { 2 } }
$$
