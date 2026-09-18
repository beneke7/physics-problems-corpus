---
id: solution-ocr-kevin-zhou-m1sol-ex006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-ex006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 6: $F = m a 2022$ A 23
For projectiles, the force of air resistance can be modeled as proportional to the speed ("linear drag") or proportional to the square of the speed ("quadratic drag"), depending on the circumstances. Two identical objects, $A$ and $B$, are dropped from the same height $h$ simultaneously, but object $A$ is given an initial horizontal velocity $v$. The objects hit the ground at times $t _ { A }$ and $t _ { B }$. How do these times compare, assuming linear or quadratic drag?

Solution
For linear drag, the horizontal and vertical components of the motion are independent,

$$
a _ { x } = - b v _ { x } , \quad a _ { y } = - g - b v _ { y }
$$

for some coefficient $b$. That means the time to hit the ground, which depends on the vertical motion, is independent of the initial horizontal velocity, so $t _ { A } = t _ { B }$. But for quadratic drag,

$$
a _ { y } = - g - b v _ { y } | v |
$$

which means the upward drag force is larger when the horizontal velocity is larger, so $t _ { A } > t _ { B }$.
Since the components are independent for linear drag, it's not too hard to write down an expression for the trajectory, by recycling the results of example 1. But for quadratic drag, the results of problem 2 won't help much; the two-dimensional problem is much harder.
