---
id: kevin-zhou-t1-p017
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-p017
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

[3] Problem 17. The energy of a photon is E = |p|c.
(a) Treating the photon classically, compute the average energy of a photon moving in one
dimension, assuming it obeys the Boltzmann distribution with temperature T. Check that
the result obeys the equipartition theorem.
(b) Generalize this result to three dimensions to compute γ for a 3D photon gas.
Solution. Since we’re talking about both momenta p and probabilities p here, let’s temporarily
rename the probability distribution function to f.
(a) Using the Boltzmann distribution and E = pc,
f(p) ∝ e−pc/kBT
.
Then the expected energy is
⟨E⟩ = ⟨pc⟩ =
R∞
0 (pc)e−pc/kBT dp
R∞
0 e−pc/kBT dp
= kBT
R∞
0 xe−x dx
R∞
0 e−x dx
.
Note that the numerator can be related to the denominator using integration by parts,
Z ∞
0
xe−x
dx =
Z ∞
0
e−x
dx.
Then the fraction is just 1, so
⟨E⟩ = kBT.
Evidently, every degree of freedom where the energy is linear in the momentum contributes
energy kBT. This is just as we expect by the equipartition theorem, since there’s one degree
of freedom with n = 1.
20
Kevin Zhou Physics Olympiad Handouts
(b) The reasoning is very similar, but now
f(p) ∝ e−|p|c/kBT
.
The expected energy is then, using spherical coordinates,
⟨E⟩ = ⟨|p|c⟩ =
R∞
0 (pc)e−pc/kBT (4πp2)dp
R∞
0 e−pc/kBT (4πp2)dp
= kBT
R∞
0 x3e−x dx
R∞
0 x2e−x dx
.
Again the numerator can be related to the denominator using integration by parts,
Z ∞
0
x3
e−x
dx = 3
Z ∞
0
x2
e−x
dx.
Then the fraction is 3, so ⟨pc⟩ = 3kBT, which is just what we expected since there are three
linear degrees of freedom. Hence we have γ = 4/3.
