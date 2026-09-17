---
id: kevin-zhou-r3-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r3-p016
solution_type: author
source_document: solution-document-kevin-zhou-r3sol
source_pdf: sources/kevin_zhou/site/handouts/R3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R3Sol.pdf."
---

[2] Problem 16. Here’s another quick application of the conserved Jz identified in problem 15. As
discussed in E8, electron orbits can be modified in a magnetic field, leading to diamagnetism. Many
textbooks try to motivate this by considering forces on classical electrons, but such arguments don’t
actually work: it can be shown that for classical systems in thermal equilibrium, diamagnetic effects
always cancel out. A legitimate derivation requires some quantum mechanics.
In X1, we discussed how the electron orbits in a hydrogen atom have Lz = nℏ. Let’s suppose
the states n = ±1 are occupied, corresponding to electrons of charge q and mass m performing
a circular orbit of radius r in opposite directions. The magnetic moments associated with these
orbits cancel. But in the presence of a uniform magnetic field B = B ẑ, the quantization condition
becomes Jz = nℏ, and the magnetic moments no longer cancel.
Find an approximate expression for the net magnetic moment, in terms of q, m, r, and B.
Assume B is small, so that the magnetic force is small compared to the electrostatic force.
Solution. This problem was inspired by this paper. Following problem 15, we note that for the
n = 1 orbit,
Jz = Lz +
1
2
qBr′2
= ℏ
where r′ is the orbit radius when the magnetic field is on. In the absence of a magnetic field, we
have Lz = ℏ, so the change in Lz is
∆Lz = −
1
2
qBr′2
.
Since the magnetic field is weak, r′ ≈ r, and since ∆Lz is proportional to B, which is already small,
we can neglect the difference between r and r′. Finally, using a result from E5, we have
∆µz =
q
2m
∆Lz = −
q2Br2
4m
.
For the n = −1 orbit, the change in magnetic moment has the same sign, giving a total of
µz = −
q2Br2
2m
.
