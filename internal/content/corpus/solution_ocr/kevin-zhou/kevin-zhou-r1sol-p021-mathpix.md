---
id: solution-ocr-kevin-zhou-r1sol-p021
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p021]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 21. In $A$ 's frame, $B$ has speed $u$, and $C$ has speed $v$.

(a) Suppose $B$ and $C$ have velocities in opposite directions. Find the speed of $B$ with respect to $C$ using four-vectors, by computing the inner product $v _ { B } \cdot v _ { C }$ in two different frames.
(b) The answer of part (a) should look familiar, but with four-vectors we can easily go further. Generalize part (a) to the case where $B$ and $C$ have velocities an angle $\theta$ apart.

Solution. (a) In $A$ 's frame, the four-velocities are

$$
v _ { B } = \left( \gamma _ { u } , \gamma _ { u } u \right) , \quad v _ { C } = \left( \gamma _ { v } , - \gamma _ { v } v \right) .
$$

Let $w$ be the desired answer. Then in $C$ 's frame,

$$
v _ { B } = \left( \gamma _ { w } , \gamma _ { w } w \right) , \quad v _ { C } = ( 1,0 ) .
$$


The inner product of $v _ { B }$ and $v _ { C }$ should be independent of frame, so
$$
\gamma _ { u } \gamma _ { v } ( 1 + u v ) = \gamma _ { w }
$$
or equivalently
$$
\frac { 1 + u v } { \sqrt { 1 - u ^ { 2 } } \sqrt { 1 - v ^ { 2 } } } = \frac { 1 } { \sqrt { 1 - w ^ { 2 } } } .
$$
Solving for $w$ gives the expected result,
$$
w = \frac { u + v } { 1 + u v } .
$$
(b) Taking $\mathbf { v } _ { B }$ to be along the $x$-axis for concreteness,
$$
v _ { B } = \left( \gamma _ { u } , \gamma _ { u } u , 0 \right) , \quad v _ { C } = \left( \gamma _ { v } , \gamma _ { v } v \cos \theta , \gamma _ { v } v \sin \theta \right) .
$$
By the same logic as in part (a), we have
$$
\gamma _ { u } \gamma _ { v } ( 1 - u v \cos \theta ) = \gamma _ { w }
$$
and solving for $w$ gives the complicated result
$$
w = \frac { \sqrt { u ^ { 2 } + v ^ { 2 } - 2 u v \cos \theta - u ^ { 2 } v ^ { 2 } \sin ^ { 2 } \theta } } { 1 - u v \cos \theta } .
$$
This reduces to the usual velocity addition formula for $\theta = 0$ and $\theta = \pi$. If we didn't use the tool of four-vectors and just applied the Lorentz transformations directly, this could have been quite a mess, but instead it wasn't much harder than part (a)!
