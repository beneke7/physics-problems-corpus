---
id: solution-ocr-kevin-zhou-m2sol-ex014
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-ex014]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 14
A sphere of radius $R$ contains a gas with a uniform pressure $P$. Find the total force exerted by the gas on one hemisphere.

Solution
The pressure provides a force per unit area orthogonal to the sphere's surface, so the straightforward way to do this is to integrate the vertical component of the pressure force over a hemisphere. However, there's a neat shortcut in this case.

Momentarily forget about the sphere and just imagine we have a sealed hemisphere of gas at pressure $P$. The net force of the gas on the hemisphere must be zero, or else it would just begin shooting off in some direction, violating conservation of momentum. So the force on the curved face must balance the force on the flat face, which is $\pi R ^ { 2 } P$. The same logic must hold for the sphere, since the forces on the curved face are the same, so the answer is $\pi R ^ { 2 } P$.

This trick will come in handy for several future problems. It also generalizes to surfaces of arbitrary shape, as discussed in E1. Concretely, suppose a surface $S$ has boundary $C$, and


consider any other surface $S ^ { \prime }$ with the same boundary. Then by the same logic, the closed surface formed by $S$ and $S ^ { \prime }$ together experiences no net pressure force, so the pressure forces on $S$ and $S ^ { \prime }$ are equal in magnitude.

Idea 13
The surface of a fluid carries a surface tension $\gamma$. If one imagines dividing the surface into two halves, then $\gamma$ is the tension force of one half on the other per length of the cut. Specifically, for a small segment $d \mathbf { s }$ along the cut, where the normal vector to the surface is $\hat { \mathbf { n } }$, the surface tension force is

$$
d \mathbf { F } = \gamma d \mathbf { s } \times \hat { \mathbf { n } }
$$

which means the force acts along the surface and perpendicular to the cut.
