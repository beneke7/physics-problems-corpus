---
id: solution-ocr-kevin-zhou-e4sol-p021
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e4-p021]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 21. We can use the Galilean field transformations to solve problem 18.


(a) In the magnetic limit, show that the Lorentz force stays the same between frames, as it should. Then use the field transformations to find an appropriate reference frame where the problem becomes easy.
(b) In the electric limit, show that the Lorentz force stays the same up to terms that are order $( v / c ) ^ { 2 }$ smaller, assuming $B / E \sim v / c ^ { 2 }$. (This is fine, since we're taking the limit $v / c \rightarrow 0$ anyway.) Then use the field transformations to find an appropriate reference frame where the problem becomes easy.
(c) You should have found two distinct behaviors in parts (a) and (b). One of them should look like what you found in problem 18, and the other should be very different. But the values of $E$ and $B$ in problem 18 were arbitrary, so why didn't you see the other type of behavior?

Solution. (a) Suppose a particle has velocity u in the original frame, so the force there is $\mathbf { F } = q ( \mathbf { E } + \mathbf { u } \times \mathbf { B } )$. The force in the boosted frame is $\mathbf { F } ^ { \prime } = q ( \mathbf { E } + \mathbf { v } \times \mathbf { B } + ( \mathbf { u } - \mathbf { v } ) \times \mathbf { B } ) = \mathbf { F }$. We can find a frame where there's no electric field, by letting $\mathbf { E } + \mathbf { v } \times \mathbf { B } = 0$. In this frame, the particle just orbits in a circle. (Going back to the original frame just gives back the cycloid we found earlier.)

(b) We use the same setup as (a). The boosted force is
$$
\mathbf { F } ^ { \prime } = q \left( \mathbf { E } + ( \mathbf { u } - \mathbf { v } ) \times \left( \mathbf { B } - \mathbf { v } \times \mathbf { E } / c ^ { 2 } \right) \right) = \mathbf { F } + q \left( - \mathbf { v } \times \mathbf { B } + \frac { \mathbf { v } \times \mathbf { v } \times \mathbf { E } } { c ^ { 2 } } - \frac { \mathbf { u } \times \mathbf { v } \times \mathbf { E } } { c ^ { 2 } } \right) .
$$
The extra terms are all second order in $v / c$.
We can now find a frame where there's no magnetic field, by letting $\mathbf { B } - \mathbf { v } \times \mathbf { E } / c ^ { 2 } = 0$. In this frame, the particle just accelerates straight along E. This indicates that in the original frame, the particle is always going along E, while getting deflected a bit to the side by the magnetic field.
(c) The reason is that the solution to problem 18 neglected relativistic effects. We found in that problem that the characteristic velocity of the particle during the cycloid motion is $v _ { 0 } = E / B$. So relativity can only be consistently neglected in the magnetic limit, where $v _ { 0 } \ll c$. In the electric limit, the particle necessarily becomes highly relativistic. This makes a difference because in relativity, $p = \gamma m v > m v$, but the magnetic force still is proportional to $v$, so it's harder for the magnetic force to turn the particle around.
As a followup, you might be wondering precisely what value of $E / B$ separates two types of behavior. It turns out to be precisely $E / B = c$, because when you use the exact field transformations in idea 4, you can only transform the electric field away when $E < c B$, and you can only transform the magnetic field away when $E > c B$.
In these two cases, you get circular and linear motion respectively, and the solution in the original frame follows by boosting back using the Lorentz transformation. When $E / B$ is small, you get a cycloid solution, and as $E / B$ increases, the trajectory gets more and more stretched along the direction of $\mathbf { E }$, until it gets infinitely long at $E / B = c$.

There are a number of other nice questions one can ask about the dynamics of point charges, which use more advanced concepts such as "hidden" momentum, canonical momentum, or adiabatic invariants. These ideas are collected in a section of R3.


## 5 Continuous Systems
