---
id: kevin-zhou-x1-p027
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p027
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

[2] Problem 27. Consider a system with many noninteracting fermions, and many quantum states.
Each quantum state can be either empty or occupied by a fermion. We want to find the probability
that a given quantum state, of energy E, is occupied.
(a) To put a fermion in this state, we need to remove a fermion from some other state. Suppose
the energy released by doing this, suitably averaged, is µ. (This is the chemical potential, and
it depends on the temperature, the number of fermions, and the number of states and their
energies.) Using the Boltzmann distribution, show that the probability of occupancy is
⟨n⟩ =
1
e(E−µ)/kBT + 1
.
This is the Fermi–Dirac distribution.
(b) Sketch ⟨n⟩ as a function of E for small but nonzero temperature, as well as the limit attained
for zero temperature.
Solution. (a) The two possibilities are being occupied and not occupied, and the former comes
with a Boltzmann factor of e−(E−µ)/kBT . Thus,
⟨n⟩ =
e−(E−µ)/kBT
1 + e−(E−µ)/kBT
=
1
1 + e(E−µ)/kBT
.
23
Kevin Zhou Physics Olympiad Handouts
(b) The graphs are shown below, for zero and nonzero µ.
1
2
⟨n⟩
µ = 0
kBT
E
µ
1
2
1
⟨n⟩ T = 0
T > 0
E
As T → 0, the form of ⟨n⟩ will start to look like a step function, θ(µ−E). This simply means
that the fermions fill up the lowest energy states first, to minimize their total energy. The
chemical potential is set by how many fermions there are in total.
