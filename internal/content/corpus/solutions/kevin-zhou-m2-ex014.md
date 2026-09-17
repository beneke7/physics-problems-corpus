---
id: kevin-zhou-m2-ex014
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-ex014
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

Example 14
A sphere of radius R contains a gas with a uniform pressure P. Find the total force exerted
by the gas on one hemisphere.
Solution
The pressure provides a force per unit area orthogonal to the sphere’s surface, so the
straightforward way to do this is to integrate the vertical component of the pressure force
over a hemisphere. However, there’s a neat shortcut in this case.
Momentarily forget about the sphere and just imagine we have a sealed hemisphere of gas at
pressure P. The net force of the gas on the hemisphere must be zero, or else it would just
begin shooting off in some direction, violating conservation of momentum. So the force on
the curved face must balance the force on the flat face, which is πR2P. The same logic must
hold for the sphere, since the forces on the curved face are the same, so the answer is πR2P.
This trick will come in handy for several future problems. It also generalizes to surfaces of
arbitrary shape, as discussed in E1. Concretely, suppose a surface S has boundary C, and
33
Kevin Zhou Physics Olympiad Handouts
consider any other surface S′ with the same boundary. Then by the same logic, the closed
surface formed by S and S′ together experiences no net pressure force, so the pressure forces
on S and S′ are equal in magnitude.
Idea 13
The surface of a fluid carries a surface tension γ. If one imagines dividing the surface into two
halves, then γ is the tension force of one half on the other per length of the cut. Specifically,
for a small segment ds along the cut, where the normal vector to the surface is n̂, the surface
tension force is
dF = γ ds × n̂
which means the force acts along the surface and perpendicular to the cut.
