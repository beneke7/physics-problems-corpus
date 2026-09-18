---
id: solution-ocr-kevin-zhou-r3sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r3-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 16. Here's another quick application of the conserved $J _ { z }$ identified in problem 15. As discussed in E8, electron orbits can be modified in a magnetic field, leading to diamagnetism. Many textbooks try to motivate this by considering forces on classical electrons, but such arguments don't actually work: it can be shown that for classical systems in thermal equilibrium, diamagnetic effects always cancel out. A legitimate derivation requires some quantum mechanics.
In X1, we discussed how the electron orbits in a hydrogen atom have $L _ { z } = n \hbar$. Let's suppose the states $n = \pm 1$ are occupied, corresponding to electrons of charge $q$ and mass $m$ performing a circular orbit of radius $r$ in opposite directions. The magnetic moments associated with these orbits cancel. But in the presence of a uniform magnetic field $\mathbf { B } = B \hat { \mathbf { z } }$, the quantization condition becomes $J _ { z } = n \hbar$, and the magnetic moments no longer cancel.
Find an approximate expression for the net magnetic moment, in terms of $q , m , r$, and $B$. Assume $B$ is small, so that the magnetic force is small compared to the electrostatic force.
Solution. This problem was inspired by this paper. Following problem 15, we note that for the $n = 1$ orbit,
$$
J _ { z } = L _ { z } + \frac { 1 } { 2 } q B r ^ { \prime 2 } = \hbar
$$
where $r ^ { \prime }$ is the orbit radius when the magnetic field is on. In the absence of a magnetic field, we have $L _ { z } = \hbar$, so the change in $L _ { z }$ is
$$
\Delta L _ { z } = - \frac { 1 } { 2 } q B r ^ { \prime 2 } .
$$
Since the magnetic field is weak, $r ^ { \prime } \approx r$, and since $\Delta L _ { z }$ is proportional to $B$, which is already small, we can neglect the difference between $r$ and $r ^ { \prime }$. Finally, using a result from E5, we have
$$
\Delta \mu _ { z } = \frac { q } { 2 m } \Delta L _ { z } = - \frac { q ^ { 2 } B r ^ { 2 } } { 4 m } .
$$
For the $n = - 1$ orbit, the change in magnetic moment has the same sign, giving a total of
$$
\mu _ { z } = - \frac { q ^ { 2 } B r ^ { 2 } } { 2 m } .
$$
