---
id: solution-ocr-usapho-2012-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2012-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A4

Two masses $m$ separated by a distance $l$ are given initial velocities $v _ { 0 }$ as shown in the diagram. The masses interact only through universal gravitation.
![](../../../figures/solution-ocr/f055613f5723c9a5f5aa9c49.jpg)

a. Under what conditions will the masses eventually collide?
b. Under what conditions will the masses follow circular orbits of diameter $l$ ?
c. Under what conditions will the masses follow closed orbits?
d. What is the minimum distance achieved between the masses along their path?

## Solution

a. Intuitively, it is impossible for the masses to collide unless $v _ { 0 } = 0$, by angular momentum conservation.
It's okay to simply write this down, but it's worth taking a closer look, as this intuitive argument is not true for all central forces. By angular momentum conservation, $v r$ is constant where $r$ is the radial separation and $v$ is the tangential velocity. Therefore, the kinetic energy of the particles diverges as $E \propto v ^ { 2 } \propto 1 / r ^ { 2 }$ as the masses get closer together. But the potential energy only falls as $V \propto - 1 / r$, i.e. it diverges negatively slower than the kinetic energy diverges positively. Thus by energy conservation, it is impossible for the masses to collide unless $L = 0$, for this particular potential.
b. In this case, the masses undergo uniform circular motion with radius $l / 2$ and speed $v _ { 0 }$, so that
$$
\frac { G m ^ { 2 } } { l ^ { 2 } } = \frac { m v _ { 0 } ^ { 2 } } { l / 2 } \Rightarrow \frac { G m } { v _ { 0 } ^ { 2 } l } = 2 .
$$
c. The masses follow closed orbits if they do not have enough energy to escape to infinity, i.e. if the total energy of the system is negative,
$$
E = 2 \cdot \frac { 1 } { 2 } m v _ { 0 } ^ { 2 } - \frac { G m ^ { 2 } } { l } < 0 \quad \Rightarrow \quad \frac { G m } { v _ { 0 } ^ { 2 } l } > 1 .
$$

d. Note that the masses will always move symmetrically about the center of mass. Thus, in order to be at minimum separation, their velocities must be perpendicular to the line joining them (and will be oppositely directed). Let the minimum separation be $d$, and let the speed of each mass at minimum separation be $v$. The angular momentum is then
$$
L = 2 m v \frac { d } { 2 } = m v d
$$
The initial angular momentum is likewise $m v _ { 0 } l$, so by conservation of angular momentum
$$
v = v _ { 0 } \frac { l } { d } .
$$
By conservation of energy,
$$
2 \cdot \frac { 1 } { 2 } m v _ { 0 } ^ { 2 } - \frac { G m ^ { 2 } } { l } = 2 \cdot \frac { 1 } { 2 } m v ^ { 2 } - \frac { G m ^ { 2 } } { d }
$$
which simplifies to
$$
v _ { 0 } ^ { 2 } - \frac { G m } { l } = v ^ { 2 } - \frac { G m } { d } .
$$
Combining these,
$$
v _ { 0 } ^ { 2 } - \frac { G m } { l } = v _ { 0 } ^ { 2 } \frac { l ^ { 2 } } { d ^ { 2 } } - \frac { G m } { d } .
$$
Defining the parameter $\alpha = G m / v _ { 0 } ^ { 2 } l$, this simplifies to
$$
( 1 - \alpha ) \left( \frac { d } { l } \right) ^ { 2 } + \alpha \left( \frac { d } { l } \right) - 1 = 0
$$
This quadratic has the solutions
$$
d = l \quad \text { or } \quad d = \frac { l } { \alpha - 1 } .
$$
The second root is physically sensible only if $\alpha > 1$, and it is the smaller one only if $\alpha > 2$. Note that both of these results make sense in light of parts (b) and (c). Then the minimum separation is
$$
d = \begin{cases} l & \alpha \leq 2 \\ l / ( \alpha - 1 ) & \alpha > 2 \end{cases}
$$


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
