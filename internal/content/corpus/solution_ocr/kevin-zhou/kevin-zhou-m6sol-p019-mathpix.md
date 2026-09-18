---
id: solution-ocr-kevin-zhou-m6sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 19. A frictionless tube of length $R$ is rotated with fixed angular velocity $\omega$ about one of its ends. A package is placed in the tube at a distance $r _ { 0 }$ from the axis of rotation, with no initial radial velocity. When the package flies out the other end of the tube, what is its speed?

Solution. In the frame rotating with the tube, there is only a centrifugal force $F = m \omega ^ { 2 } r$, corresponding to a potential energy $V ( r ) = - m \omega ^ { 2 } r ^ { 2 } / 2$. By conservation of energy, the package has speed $v = \omega \sqrt { R ^ { 2 } - r _ { 0 } ^ { 2 } }$ when it reaches the end of the tube. We then have to go back to the lab frame, where there's also a tangential speed $\omega R$, giving

$$
v = \omega \sqrt { 2 R ^ { 2 } - r _ { 0 } ^ { 2 } } .
$$

Alternatively, you can solve for $r ( t )$ explicitly, by guessing exponentials. The solution is essentially the same as for the problem in M3 involving a rope on a table.
