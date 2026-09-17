---
id: kevin-zhou-m5-ex008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m5-ex008
solution_type: author
source_document: solution-document-kevin-zhou-m5sol
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M5Sol.pdf."
---

Example 8: F = ma 2018 A14
Three identical masses are connected with identical rigid rods and pivoted at point A.
If the lowest mass receives a small horizontal push to the left, it oscillates with period T1. If
it receives a small push into the page, it oscillates with period T2. Find the ratio T1/T2.
Solution
Both modes are physical pendulums, which have period proportional to
p
I/Mgx where x
is the distance from the pivot to the center of mass, and I is the moment of inertia about
the pivot. Since x is the same in both cases, T1/T2 =
p
I1/I2 =
√
3, because in the second
case only the bottom mass contributes to the moment of inertia.
Example 9: Morin 8.41
The axis of a solid cylinder of mass m and radius r is connected to a spring of spring constant
k, as shown.
21
Kevin Zhou Physics Olympiad Handouts
If the cylinder rolls without slipping, find the angular frequency of the oscillations.
Solution
This is a question best handled using the energy methods of M4. The potential energy is
kx2/2 as usual, where x describes the position of the cylinder’s center of mass. The kinetic
energy is mv2/2+Iω2/2 = (3/4)mv2, since the cylinder is rolling without slipping. Therefore
ω =
s
k
meff
=
r
2k
3m
.
More complicated variants of this kind of problem can be solved in a similar way.
Example 10: Russia 2011
A uniform ring of mass m and radius r is suspended symmetrically on three inextensible
strings of length ℓ. Find the angular frequency of small oscillations.
Solution
The small oscillations are torsional, i.e. the ring rotates about its axis of symmetry. When
the ring has twisted by an angle θ, the strings are an angle ϕ ≈ (r/ℓ)θ from the vertical.
Thus, summing over the three strings, the restoring torque is
τ ≈ −mgrϕ ≈ −
mgr2
ℓ
θ.
Setting this equal to Iα, we find ω =
p
g/ℓ.
The tricky thing about this problem is that it’s harder to solve with the energy method. If
you try, you immediately run into the problem that there seems to be no potential energy
anywhere, since the strings don’t stretch! The source of the potential energy is that the ring
moves up a small amount as it oscillates, since the strings are no longer vertical,
h = ℓ −
p
ℓ2 − r2θ2 ≈
r2θ2
2ℓ
.
Therefore we have
K =
1
2
mr2
θ̇2
, V =
1
2
mgr2
ℓ
θ2
and the answer follows as usual. (There is also a kinetic energy contribution from the ring’s
vertical motion, but it’s negligible.) The lesson here is that the force/torque and energy
22
Kevin Zhou Physics Olympiad Handouts
approach have different strengths. The energy approach is often easier because it lets you
ignore some internal details of the system. But it can be harder because it requires you to
understand the kinematics of the system to second order, rather than first order.
