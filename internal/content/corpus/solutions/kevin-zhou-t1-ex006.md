---
id: kevin-zhou-t1-ex006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-ex006
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

Example 6
A free particle in one dimension, E = p2/2m, bouncing between two hard walls has energy
levels En = n2E0 for n = 1,2,..., as we will show in X1. Show that the average energy at
high temperatures is consistent with the equipartition theorem.
Solution
The probability of being in energy level n is proportional to e−n2E0/kBT . Therefore, by
normalizing the probability distribution, the probability itself is
pn =
e−n2E0/kBT
P∞
m=1 e−m2E0/kBT
.
19
Kevin Zhou Physics Olympiad Handouts
Therefore, the average value of the energy is
⟨E⟩ =
∞ X
n=1
n2
E0 pn =
P∞
n=1 n2E0e−n2E0/kBT
P∞
n=1 e−n2E0/kBT
.
At high temperatures, this quantum result should reduce to the classical result of the equipar-
tition theorem. Note that at such temperatures, the typical values of n will be very high.
Therefore, we can treat the sums over n as continuous integrals,
⟨E⟩ ≈
R∞
0 dnn2E0e−n2E0/kBT
R∞
0 dne−n2E0/kBT
=
R∞
0 x2e−x2
dx
R∞
0 e−x2
dx
kBT
where we switched to the dimensionless variable x =
p
n2E0/kBT. Evaluating either of these
integrals is tricky, but we can relate them using integration by parts,
Z ∞
0
x2
e−x2
dx =
Z ∞
0
(2xe−x2
dx)
x
2
=
1
2
Z ∞
0
e−x2
dx.
Therefore, the ratio of integrals is 1/2, giving an average energy of kBT/2 as expected.
