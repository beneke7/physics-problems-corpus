---
id: solution-ocr-kevin-zhou-r1sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 19. Show explicitly that the norm of the displacement four-vector is invariant under Lorentz transformations, i.e. that
$$
( \Delta s ) ^ { 2 } = \Delta s \cdot \Delta s = ( \Delta t ) ^ { 2 } - ( \Delta x ) ^ { 2 } - ( \Delta y ) ^ { 2 } - ( \Delta z ) ^ { 2 }
$$
is Lorentz invariant. Since all four-vectors transform the same way, this proves it for all of them.

Solution. Plugging in the Lorentz transformations, we have

$$
\begin{aligned}
\left( \Delta s ^ { \prime } \right) ^ { 2 } & = \left( \Delta t ^ { \prime } \right) ^ { 2 } - \left( \Delta x ^ { \prime } \right) ^ { 2 } - \left( \Delta y ^ { \prime } \right) ^ { 2 } - \left( \Delta z ^ { \prime } \right) ^ { 2 } \\
& = \gamma ^ { 2 } ( \Delta t - v \Delta x ) ^ { 2 } - \gamma ^ { 2 } ( \Delta x - v \Delta t ) ^ { 2 } - ( \Delta y ) ^ { 2 } - ( \Delta z ) ^ { 2 } \\
& = \gamma ^ { 2 } \left( 1 - v ^ { 2 } \right) ( \Delta t ) ^ { 2 } - \gamma ^ { 2 } \left( 1 - v ^ { 2 } \right) ( \Delta x ) ^ { 2 } - ( \Delta y ) ^ { 2 } - ( \Delta z ) ^ { 2 } \\
& = ( \Delta t ) ^ { 2 } - ( \Delta x ) ^ { 2 } - ( \Delta y ) ^ { 2 } - ( \Delta z ) ^ { 2 }
\end{aligned}
$$

as desired.
Example 3
Find a four-vector representing the velocity of a particle with position $\mathbf { x } ( t )$.

Solution
Just as multiplying an ordinary vector with a rotational invariant produces another vector, multiplying or dividing a four-vector with a Lorentz invariant gives another four-vector. In this case, the appropriate four-vector is found by dividing displacement by the proper time experienced by the particle,

$$
u ^ { \mu } = \frac { d x ^ { \mu } } { d \tau } = \gamma \frac { d x ^ { \mu } } { d t } = ( \gamma , \gamma \mathbf { v } )
$$


where $\mathbf { v } = d \mathbf { x } / d t$ is the spatial velocity and $\gamma = 1 / \sqrt { 1 - v ^ { 2 } }$ as usual. Since its spatial part reduces to the spatial velocity in the limit of low speeds, it is the relativistic generalization of the spatial velocity. Finally, we define the four-momentum as $p ^ { \mu } = m u ^ { \mu } = ( E , \mathbf { p } )$, where $E = \gamma m$ and $\mathbf { p } = \gamma m \mathbf { v }$ are the relativistic energy and momentum.
