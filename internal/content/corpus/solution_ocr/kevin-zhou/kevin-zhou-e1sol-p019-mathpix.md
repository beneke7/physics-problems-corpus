---
id: solution-ocr-kevin-zhou-e1sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 19. In this problem we'll apply the above results to balls of charge.

(a) Compute the potential energy of a uniformly charged ball of total charge $Q$ and radius $R$.
(b) Show that the potential energy of two point charges of charge $Q / 2$ separated by radius $R$ is lower than the result of part (a).
(c) Hence it appears that it is energetically favorable to compress a ball of charge into two point charges. Is this correct?

Solution. (a) We can find the potential by building up the ball by placing charges from infinity. Consider a shell of charge at radius $r$, and let the charge density be $\rho = Q / \left( \frac { 4 } { 3 } \pi R ^ { 3 } \right)$. The energy needed to put the shell there is $d U = k Q _ { \text {enc } } d Q / r$, where $Q _ { \text {enc } } = \frac { 4 } { 3 } \rho \pi r ^ { 3 }$ is the charge inside and $d Q = 4 \rho \pi r ^ { 2 } d r$ is the charge in the shell added to the sphere. Then the energy needed to build the ball, which is the potential energy of the ball, is

$$
U _ { a } = \int _ { 0 } ^ { R } k Q \frac { r ^ { 3 } } { R ^ { 3 } } \left( 3 Q r ^ { 2 } d r / R ^ { 3 } \right) / r = \frac { 3 k Q ^ { 2 } } { R ^ { 6 } } \int _ { 0 } ^ { R } r ^ { 4 } d r = \frac { 3 k Q ^ { 2 } } { 5 R } = \frac { 3 Q ^ { 2 } } { 20 \pi \epsilon _ { 0 } R } .
$$

(b) From $U = k q _ { 1 } q _ { 2 } / r$, we find that for two point charges the potential energy is
$$
U _ { b } = \frac { k Q ^ { 2 } } { 4 R } = \frac { Q ^ { 2 } } { 16 \pi \epsilon _ { 0 } R }
$$
which is less than $U _ { a }$.
(c) It's wrong because in part (b), the energy needed to create the point charges, by squeezing the two halves of the ball down, is not included. Plugging in a radius of zero into part (a), we see that this energy is actually infinite. (Of course, in reality it doesn't take infinite energy to produce electrons, which are point charges. Classical electrodynamics breaks down when describing such a process, which can only be properly understood within relativistic quantum field theory.)
