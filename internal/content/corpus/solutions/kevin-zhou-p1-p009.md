---
id: kevin-zhou-p1-p009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p009
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[3] Problem 9. In this problem we’ll continue the dimensional analysis of the Schrodinger equation.
(a) Estimate the typical energy scale of quantum states of the hydrogen atom, as well as the
typical “velocity” of the electron, using dimensional analysis.
(b) Do the same for one-electron helium, the system consisting of a helium nucleus (containing
two protons) and one electron.
(c) Estimate the electric field needed to rip the electron off the hydrogen atom.
Solution. (a) Recall the electrostatic potential energy formula, E = kq2/r. We have a length
scale, a0 to replace r. For velocity, we use E ∼ mv2, giving
E ∼
me4
(4πϵ0)2ℏ2
, v ∼
e2
4πϵ0ℏ
.
In fact, the binding energy of the hydrogen atom in its ground state is
E =
me4
2(4πϵ0)2ℏ2
= 13.6eV
which is a constant known as the Rydberg. So the dimensional argument (keeping the factors
of 4π) gets the answer right to a factor of 2.
(b) Adding the second proton would double the charge inside the nucleus, so the expressions for
energy and velocity should stay the same except e2 would be replaced with 2e2 (not 4, since
the electron charge stays the same) and thus the energy would be 4e4. In general, with Z as
the atomic number,
E ∼
mZ2e4
(4πϵ0)2ℏ2
, v ∼
Ze2
4πϵ0ℏ
.
(c) Physically, the work the electric field does by moving the electron across the radius of its orbit
should be enough to overcome its binding energy to the proton. This also tells us how to set
up the dimensional analysis; we have electric field
|E| ∼
E
ea0
∼
m2
ee5
(4πϵ0)3ℏ4
∼ 1012
V/m.
This is a tremendously large electric field!
All of the results above are not that accurate, but they become much more accurate if we re-
place ϵ0 with 4πϵ0. That in turn makes sense because these factors always appear together in
electromagnetism.
8
Kevin Zhou Physics Olympiad Handouts
Idea 3: Buckingham Pi Theorem
Dimensional analysis can’t always pin down the form of the answer. If one has N quanti-
ties with D independent dimensions, then one can form N − D independent dimensionless
quantities. Dimensional analysis can’t say how the answer depends on them.
A familiar but somewhat trivial example is the pendulum: its period depends on L, g, and the
amplitude θ0, three quantities which contain two dimensions (length and time). Hence we can form
one dimensionless group, which is clearly just θ0 itself. The period of a pendulum is T = f(θ0)
p
L/g.
