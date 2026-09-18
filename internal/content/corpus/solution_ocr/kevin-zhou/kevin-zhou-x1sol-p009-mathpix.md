---
id: solution-ocr-kevin-zhou-x1sol-p009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 9. A rotor consists of two particles of mass $m$ connected by a rigid rod of length $L$.
    (a) Find the energy levels if the particles are not identical.
    (b) Find the energy levels if the particles are identical. (Hint: recall that the closed loop integrals in the previous ideas are over paths that take the system back to its original state.)

You might find it disturbing that the result is so different if the particles are or aren't completely identical, but it's a well-verified fact about molecular rotational energy levels. For example, if the two atoms in the molecule had nuclei of different isotopes, we measure the result of part (a), and if they were the same isotope, we measure the result of part (b).

Solution. (a) We see that the angular momentum $L _ { z }$ is constant, so the quantization condition says $L _ { z } \cdot 2 \pi = n h$, or $L _ { z } = n \hbar$. Then, $E = \frac { 1 } { 2 I } L _ { z } ^ { 2 } = \frac { n ^ { 2 } \hbar ^ { 2 } } { m L ^ { 2 } }$.


(b) The point here is that after just a $\pi$ rotation, the system is back in its original state, because the particles are identical. Thus, $L _ { z } \cdot \pi = n h$, or $L _ { z } = 2 n \hbar$, or $E = \frac { 4 n ^ { 2 } \hbar ^ { 2 } } { m L ^ { 2 } }$.
[3] Problem 10. INPhO 2020, problem 3. A problem on the Bohr model for multi-electron atoms. In part (c), you should apply Bohr quantization to each electron individually. This isn't obvious from the question statement, but it's the right thing to do because the two electrons orbit the nucleus with opposite spins, and hence occupy independent quantum states.

[3] Problem 11. INPhO 2016, problem 6.
Remark
In popular science, people sometimes speak of "quantizing" a system as similar to making everything discrete. But as you've seen above, it's more complicated than that. For instance, position never becomes discrete; instead, we integrate over it.
The general rule in quantum mechanics is that confinement to a finite "size" causes the conjugate variable to become discrete. For example, above you looked at several examples of particles bound to potentials. These are confined in space, and hence have discrete orbits in phase space by idea 2, and thus discrete energies. But a free particle not bound to a potential can have any energy, because $E = p ^ { 2 } / 2 m$ and there is no condition at all on $p$. On the other hand, angles are always confined to the finite range $[ 0,2 \pi ]$, which is why the angular momentum of any system is quantized.
