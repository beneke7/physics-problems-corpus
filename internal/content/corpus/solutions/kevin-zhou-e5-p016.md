---
id: kevin-zhou-e5-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e5-p016
solution_type: author
source_document: solution-document-kevin-zhou-e5sol
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E5Sol.pdf."
---

[2] Problem 16. To check that you understand example 6, let the cylinder axis be vertical, and
suppose the solenoid wires are wound at an angle θ to the horizontal. The example corresponds
to θ = 0◦, but when θ = 90◦ the wires run straight up, leading to an inward pressure at the walls.
Find the angle θ at which the pressure vanishes.
Solution. To avoid juggling too many variables, we’ll just work in terms of the surface current
density K. At the walls, we have
K = K0 sinθẑ + K0 cosθθ̂
where K0 is some constant that depends on the wire spacing. (Note that K0 is not equal to nI,
since the wires are at an angle to the horizontal. But it won’t affect the answer since everything
will scale with K0.) Applying Ampere’s law gives
B = µ0K0 ×
(
cosθẑ inside,
sinθθ̂ outside.
By the same logic as in the example, we have an outward pressure (µ0K2
0/2)cos2 θ, but now we
also have an inward pressure (µ0K2
0/2)sin2
θ. The two cancel when θ = 45◦.
