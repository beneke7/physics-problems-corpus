---
id: solution-ocr-nbpho-2004-s-p5
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2004_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2004-fourth-order-ellipse]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 5. 4th order ellipse (6 pts)

1) There are trivial positions $\varphi = 0$ and $\varphi =$ $\pi / 2$. Besides, there is a position between these two. At the equilibrium, the vector from the origin to the touching point $\vec { r } = ( x , y )$ has to be perpendicular to the tangent at that point. In order to find the tangent, let us differentiate the ellipse formula: $4 \frac { x ^ { 3 } } { a ^ { 4 } } d x + 4 \frac { y ^ { 3 } } { b ^ { 4 } } d y = 0$, hence, with $d x = 1 , d y = - \frac { x ^ { 3 } } { y ^ { 3 } } \frac { b ^ { 4 } } { a ^ { 4 } }$, a tangent vector is $\vec { \tau } =$ $\left[ 1 , - \left( \frac { x } { y } \right) ^ { 3 } \left( \frac { b } { a } \right) ^ { 4 } \right]$. The vectors are perpendicular, if the scalar product is zero: $x - y \left( \frac { x } { y } \right) ^ { 3 } \left( \frac { b } { a } \right) ^ { 4 }$, i.e. $\frac { y } { x } = \left( \frac { b } { a } \right) ^ { 2 } = \varphi = \arctan \frac { y } { x } = \left( \frac { b } { a } \right) ^ { 2 }$.
2) Around each zero $\varphi$ changes sign. At $\varphi = 0$, small increase in $\varphi$ will result in a torque trying to return to the initial position, i.e. the torque becomes negative. So, the graph looks like the one below.
![](../../../figures/solution-ocr/1c33320bf602199197b87fc6.jpg)
3) If the derivative of the graph at equilibrium point is negative, the position is stable; otherwise it is unstable. $\varphi = 0$ and $\varphi = \pi / 2$ are stable, $\varphi = \left( \frac { b } { a } \right) ^ { 2 }$ is unstable.
