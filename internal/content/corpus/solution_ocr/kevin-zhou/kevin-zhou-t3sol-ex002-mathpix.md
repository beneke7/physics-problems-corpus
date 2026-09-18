---
id: solution-ocr-kevin-zhou-t3sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t3-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 2

A very thin, hollow glass tube of radius $r$ is dipped vertically inside a container of water.


![](../../../figures/solution-ocr/90472c375ab318c6add86563.jpg)
Find the equilibrium height of the water in the tube.

## Solution

We first encountered this problem in M7, where we solved it by using Pascal's principle, giving an answer in terms of the contact angle. The derivation above of the contact angle completes this solution. However, we can also solve the problem using energy or force.

In terms of energy, if we move the height of the water up by $\delta h$, then

$$
d U = \rho \pi r ^ { 2 } g h \delta h + \left( \gamma _ { s l } - \gamma _ { s } \right) 2 \pi r \delta h = 0
$$

and solving gives

$$
h = \frac { 2 \left( \gamma _ { s } - \gamma _ { s l } \right) } { \rho g r } = \frac { 2 \gamma _ { l } \cos \theta } { \rho g r }
$$

using Young's equation. Alternatively, in terms of force, consider the vertical forces acting on the column of water inside the tube. There is an upward force of adhesion from the solid wall of $2 \pi r U _ { s l }$, and a downward surface tension force from the liquid below of $2 \pi r \gamma _ { l }$. Then

$$
F = 2 \pi r \left( U _ { s l } - \gamma _ { l } \right) - \rho \pi r ^ { 2 } g h = 0
$$

which yields precisely the same result.
