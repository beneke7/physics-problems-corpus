---
id: kevin-zhou-t3-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t3-ex001
solution_type: author
source_document: solution-document-kevin-zhou-t3sol
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T3Sol.pdf."
---

Example 1
The surface of a drop of water makes a contact angle θ with a solid, as shown.
3
Kevin Zhou Physics Olympiad Handouts
When θ is acute, the surface is said to be hydrophilic. If θ is obtuse, it is hydrophobic. Find
an expression for θ in terms of the relevant surface tensions.
Solution
If the liquid drop expands outward by δx, the areas of various surfaces change, as shown.
The change in energy is
dU ∝ γsl δx + γl cosθδx − γs δx
and this must be equal to zero in equilibrium. Thus,
cosθ =
γs − γsl
γl
=
Usl
γl
− 1.
This is Young’s equation. The liquid surface tension γl must be positive; otherwise the
liquid could not exist stably at all, but rather would disperse into gas. Thus, the surface is
hydrophilic when Usl > γl and hydrophobic when Usl < γl.
As extreme cases, note that there is no solution for θ when Usl > 2γl. In this limit, the
surface is so hydrophilic that the liquid spreads out and coats the entire solid; this is
known as perfect wetting. There is also no solution when Usl < 0, in which case the liquid
disperses into many tiny nearly spherical drops, each with a tiny area of contact with the solid.
This derivation was in terms of energy, which is typically easier for surface tension. The
same result can be derived in terms of forces, but it’s more subtle than it looks; the standard
derivation in textbooks is wrong. For a clear derivation, see section 9.3 of Wang and Ricardo.
