---
id: solution-ocr-kevin-zhou-p2sol-p011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 11. A student launches a projectile with speed $v = 5 \pm 0.1 \mathrm {~m} / \mathrm { s }$ in gravitational acceleration $g = 9.81 \pm 0.01 \mathrm {~m} / \mathrm { s } ^ { 2 }$. The resulting range is $d = 1.5 \pm 0.02 \mathrm {~m}$. Given that the launch angle was less than $45 ^ { \circ }$, find the launch angle, with uncertainty, assuming all uncertainties are independent.

Solution. From the projectile range equation $d = v ^ { 2 } \sin ( 2 \theta ) / g$, we get

$$
\theta = \frac { 1 } { 2 } \arcsin \left( \frac { d g } { v ^ { 2 } } \right) = 18.03 ^ { \circ } .
$$

Now write $\sin ( 2 \theta ) = g d / v ^ { 2 }$. By the results of problem 10, the uncertainty of the right-hand side is

$$
\frac { d g } { v ^ { 2 } } \sqrt { \left( \frac { \Delta d } { d } \right) ^ { 2 } + \left( \frac { \Delta g } { g } \right) ^ { 2 } + \left( \frac { 2 \Delta v } { v } \right) ^ { 2 } } = 0.0248
$$

The uncertainty of the left-hand side is $2 \cos ( 2 \theta ) \Delta \theta$ by the tangent line approximation, so we have $\Delta \theta = 0.015 \mathrm { rad } = 0.9 ^ { \circ }$. Thus, the final result should be written as

$$
\theta = 18.0 ^ { \circ } \pm 0.9 ^ { \circ }
$$

where we removed a superfluous significant figure.
