---
id: solution-ocr-kevin-zhou-m1sol-ex008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-ex008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 8
A bug wishes to jump over a cylindrical log of radius $R$ lying on the ground, so that it just grazes the top of the log horizontally as it passes by. What is the minimum launch speed $v$ required to do this?

Solution
Let $P$ be the point at the top of the log. For the bug to be moving horizontally at $P$, energy conservation applied to the vertical motion gives an initial $v _ { y }$ obeying

$$
\frac { 1 } { 2 } m v _ { y } ^ { 2 } = 2 m g R , \quad v _ { y } = 2 \sqrt { g R } .
$$

Thus, we need to find the minimum $v _ { x }$ for the motion to be possible. If $v _ { x }$ is too low, the hypothetical trajectory of the bug will instead pass through the log. At the lowest possible $v _ { x }$, the bug's trajectory is not just tangent to the log at point $P$, but also has the same radius of curvature (i.e. the trajectory and the log's shape have the same first and second derivatives).

For uniform motion in a circle of radius $r$, the acceleration is $a = v ^ { 2 } / r$. Conversely, when an object follows a trajectory of instantaneous radius of curvature $r$, its acceleration component normal to the path must be $a = v ^ { 2 } / r$. So applying this to the bug at $P$ gives

$$
g = \frac { v _ { x } ^ { 2 } } { R } , \quad v _ { x } = \sqrt { g R } .
$$


Thus, the minimum initial speed is

$$
v = \sqrt { v _ { x } ^ { 2 } + v _ { y } ^ { 2 } } = \sqrt { 5 g R } .
$$

This radius of curvature trick doesn't come up often, but it's cool when it does.
[2] Problem 30. NBPhO 2020, problem 3. A nice warmup for the problems below.
