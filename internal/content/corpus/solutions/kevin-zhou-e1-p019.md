---
id: kevin-zhou-e1-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e1-p019
solution_type: author
source_document: solution-document-kevin-zhou-e1sol
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E1Sol.pdf."
---

[3] Problem 19. In this problem we’ll apply the above results to balls of charge.
(a) Compute the potential energy of a uniformly charged ball of total charge Q and radius R.
(b) Show that the potential energy of two point charges of charge Q/2 separated by radius R is
lower than the result of part (a).
(c) Hence it appears that it is energetically favorable to compress a ball of charge into two point
charges. Is this correct?
Solution. (a) We can find the potential by building up the ball by placing charges from infinity.
Consider a shell of charge at radius r, and let the charge density be ρ = Q/(4
3πR3). The
energy needed to put the shell there is dU = kQenc dQ/r, where Qenc = 4
3ρπr3 is the charge
inside and dQ = 4ρπr2 dr is the charge in the shell added to the sphere. Then the energy
needed to build the ball, which is the potential energy of the ball, is
Ua =
Z R
0
kQ
r3
R3
(3Qr2
dr/R3
)/r =
3kQ2
R6
Z R
0
r4
dr =
3kQ2
5R
=
3Q2
20πϵ0R
.
(b) From U = kq1q2/r, we find that for two point charges the potential energy is
Ub =
kQ2
4R
=
Q2
16πϵ0R
which is less than Ua.
(c) It’s wrong because in part (b), the energy needed to create the point charges, by squeezing
the two halves of the ball down, is not included. Plugging in a radius of zero into part (a), we
see that this energy is actually infinite. (Of course, in reality it doesn’t take infinite energy
to produce electrons, which are point charges. Classical electrodynamics breaks down when
describing such a process, which can only be properly understood within relativistic quantum
field theory.)
