---
id: solution-ocr-spot-2026-s-q3
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2026-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. In General Relativity, light rays can get deflected by massive bodies. For a sphericallysymmetric body, if the undisturbed motion of the ray passes the centre of the body at a minimum distance of $r$ (the impact parameter), the angular deflection (in radians) is given by:

$$
\alpha = \frac { 4 G M } { r c ^ { 2 } }
$$

for $\alpha \ll 1 \mathrm { rad }$. We aim to construct a lens out of plastic with refractive index $n$ that simulates this effect. The lens is constructed using the volume of revolution of a function


$r = f ( x )$ about the $x$-axis. We want to choose $f ( x )$ such that the angle of deflection at an impact parameter of $r$ is given by:

$$
\alpha = \frac { s } { r }
$$

where $s$ is some constant. You may use small angle approximation for the angle of incidence and $\alpha$, and assume that air has refractive index 1 .
![](../../../figures/solution-ocr/5fde437c9e0e50c7eb3e447c.jpg)
Determine $f ( x )$ for $x \in \left[ 0 , x _ { 0 } \right]$ shown in the diagram above in terms of $x , n , s$ and $r _ { 0 }$.

Solution: From Snell's law, we know that:

$$
n \sin \theta = \sin \phi
$$

Using the small angle approximation,

$$
n \theta = \phi
$$

The angle of deflection is:

$$
\alpha = \phi - \theta = ( n - 1 ) \theta
$$

The gradient of the normal is given by $- 1 / \left( f ^ { \prime } ( x ) \right)$ and hence,

$$
\begin{aligned}
- 1 / \left( f ^ { \prime } ( x ) \right) & = \tan \theta \\
f ^ { \prime } ( x ) & = - \frac { n - 1 } { \alpha } \\
f ^ { \prime } ( x ) & = - \frac { n - 1 } { s } f ( x )
\end{aligned}
$$

Solving the differential equation, we obtain:

$$
f ( x ) = C e ^ { - ( n - 1 ) x / s }
$$

where $C$ is an integration constant. Substituting $\left( 0 , r _ { 0 } \right)$, we find that $C = r _ { 0 }$ and hence:

$$
f ( x ) = r _ { 0 } e ^ { - \frac { n - 1 } { s } x }
$$
