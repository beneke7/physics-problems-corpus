---
id: kevin-zhou-x1-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-ex003
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

Example 3
Consider once again a particle of mass m attached to a one-dimensional spring, with natural
angular frequency ω. Use the uncertainty principle to estimate the minimum possible energy
of the particle, and compare it with the result of problem 4.
Solution
Suppose the uncertainties in position and momentum are ∆x and ∆p. Then the potential
energy is of order k(∆x)2/2 and the kinetic energy is of order (∆p)2/2m. Dropping constants,
E ∼ k(∆x)2
+
(∆p)2
m
≳ k(∆x)2
+
ℏ2
(∆x)2m
where we applied the uncertainty principle. The ground state minimizes the energy, which is
achieved when (∆x)2 ∼ ℏ/
√
km. In this case, the energy is of order kℏ/
√
km ∼ ℏ
p
k/m ∼ ℏω,
which is just what we found earlier. (A similar derivation can be used to derive the energy
of the ground state of hydrogen, along with the Bohr radius; try it!)
Remark
We can also “solve” the above problem with the energy-time uncertainty principle incorrectly.
The only timescale in the problem is 1/ω, so
∆E ≳
ℏ
∆t
∼ ℏω
so E ≳ ℏω. However, in reality the ground state has no energy uncertainty; its energy is
simply the ground state energy. Another way of saying this is that a particle can hang out
in the ground state forever, so ∆t is infinite and hence ∆E is zero. This incorrect derivation
gives the right answer just because it’s the only possible answer by dimensional analysis.
Thus, a sloppy problem might ask you to do it.
