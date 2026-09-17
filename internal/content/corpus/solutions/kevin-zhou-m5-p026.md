---
id: kevin-zhou-m5-p026
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m5-p026
solution_type: author
source_document: solution-document-kevin-zhou-m5sol
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M5Sol.pdf."
---

[3] Problem 26. Using a physical pendulum, one can measure the acceleration due to gravity as
g =
4π2
T2
I
md
.
In practice, I is not very precisely known, since it depends on the exact shape of the material. Kater
found an ingenious way to circumvent this problem. We pivot the pendulum at an arbitrary point
and measure the period T. Next, by trial and error, we find another pivot point which has the same
period, which lies at a different distance from the center of mass.
(a) Show that
g =
4π2L
T2
where L is the sum of the lengths from these points to the center of mass. This allows a
measurement of g without knowledge of the moment of inertia about the center of mass.
(b) When the two pivot points lie on a line, on opposite sides of the center of mass, then L is
simply the distance between the pivot points, which can be measured quite precisely, removing
the need to find the center of mass. However, we do have to be a bit careful. Show that the
formula in part (a) gives a totally wrong answer for a uniform cylinder of length L, with pivot
points at its two ends. What’s going on, and how can we fix the problem?
23
Kevin Zhou Physics Olympiad Handouts
Solution. (a) Using the parallel axis theorem where Ic is the moment of inertia about the center
of mass and x1 and x2 are the distances between the pivots and center of mass,
I1 = Ic + mx2
1, I2 = Ic + mx2
2.
For them to have the same period T, then the ratio I/x = mgT2/4π2 must be the same, so
I1
x1
=
I2
x2
.
Combining these equations, we find
Ic

1
x1
−
1
x2

= m(x2 − x1).
Since x1 ̸= x2, we can divide by x2 − x1 and find Ic = mx1x2. Thus,
I1
mx1
=
mx1x2 + mx2
1
mx1
= x1 + x2 = L.
The answer follows straightforwardly,
g =
4π2
T2
I
mx1
=
4π2L
T2
.
(b) For this system, we know that
g =
4π2
T2
I
md
=
4π2
T2
mL2/3
m(L/2)
=
2
3
4π2L
T2
which is completely different from the result in part (a). Looking back at the solution to part
(a), it is because we had to divide by x1 −x2 at some point, which is invalid if x1 = x2. (Or, if
we don’t divide, then we just get the trivial equation 0 = 0, which provides no information.)
Kater’s pendulum will always work if the pivot points are both on the same side of the center
of mass, as then we automatically have x1 ̸= x2. For pivots with the center of mass in between,
we need to ensure that x1 ̸= x2, which means the object can’t be perfectly symmetric. In
practice, people address this by just putting an extra weight on one end of the rod.
[3] Problem 27.  W 1 0USAPhO 1999, problem A4.
[3] Problem 28.  m 1 0USAPhO 2011, problem B2.
[3] Problem 29.  m 1 0USAPhO 2002, problem B1. An unusually tricky early USAPhO problem.
[4] Problem 30 (IPhO 1982). A coat hanger can perform small oscillations in the plane of the figure
about the three equilibrium figures shown.
42cm
10cm
In the first two figures, the long side is horizontal. The other two sides have equal length. The
period of oscillation is the same in all cases. The coat hanger does not necessarily have uniform
density. Where is the center of mass, and how long is the period?
24
Kevin Zhou Physics Olympiad Handouts
Solution. See the official solutions of IPhO 1982, problem 2.
[4] Problem 31 (APhO 2007). A uniform ball of mass M and radius r is encased in a thin spherical
shell, also of mass M. The shell is placed inside a fixed spherical bowl of radius R, and performs
small oscillations about the bottom. Assume that friction between the bowl and shell is very large,
so the shell essentially always rolls without slipping.
The ball is made of an unusual material: it can quickly transition between a liquid and solid
state. When the ball is in the liquid state, it has no viscosity, and hence no friction with the shell.
When the ball is in the solid state, it rotates with the shell.
(a) Find the period of the oscillations if the ball is always in the solid state.
(b) Find the period of the oscillations if the ball is always in the liquid state.
(c) The ball is now set so that it instantly switches to the liquid state whenever it starts moving
downward, and instantly switches to the solid state whenever it starts moving upward. If the
initial amplitude of oscillations is θ0, find the amplitude after n oscillations.
Solution. (a) In the solid state, the inside rotates with the shell, so the moment of inertia is
I =
2
5
Mr2
+
2
3
Mr2
=
16
15
Mr2
.
The rolling without slipping condition means v = ωr, so the total kinetic energy is
K =
1
2
(2M)v2
+
1
2
Iω2
= Mv2
+
8
15
Mv2
=
23
15
Mv2
.
If the angle between the line between the centers of the bowl and ball and the vertical is θ,
then v = (R − r)θ̇, and the potential energy is
U = 2Mg(R − r)(1 − cosθ) ≈ Mg(R − r)θ2
.
Since both the kinetic and potential energy are quadratic, this is simple harmonic motion. As
we saw in M4, if we write the total energy as
E =
1
2
meffθ̇2
+
1
2
keffθ2
then the period of oscillations is
T = 2π
r
meff
keff
= 2π
s
23(R − r)
15g
.
(b) The only difference here is that the liquid will no longer rotate, so the first term in the moment
of inertia above will no longer contribute. Then the kinetic energy is
K =
23
15
Mv2
−
1
5
Mv2
=
4
3
Mv2
which implies, by the same logic as in part (a), that
T = 2π
s
4(R − r)
3g
.
25
Kevin Zhou Physics Olympiad Handouts
(c) When the ball goes from solid to liquid, the entire ball is at rest, so no energy is lost. On
the other hand, when the ball switches from liquid to solid, the material inside the ball must
suddenly start rotating with the shell. This is an angular inelastic collision, where energy is
lost, so we expect the amplitude to decay.
Let’s suppose that just before the ball switches from liquid to solid, it has an angular velocity
ωi. Then the total energy is
Ei =
4
3
Mr2
ω2
i
by the work we did in part (b). As the material solidifies, the angular momentum about the
ball’s contact point with the bowl is conserved. Let the final angular velocity be ωf.
The initial moment of inertia of the shell about the contact point is
Ii =
2
3
Mr2
+ Mr2
=
5
3
Mr2
.
The shell is instantaneously rotating about the contact point, and so contributes angular mo-
mentum Iiωi. The liquid is only in translational motion, so it contributes angular momentum
Mvir = Mωir2. Thus, the total angular momentum is
Li = Iiωi + Mωir2
=
8
3
Mr2
ωi.
After the transition, both the shell and ball will rotate about the contact point, and the
moment of inertia is
If =
5
3
Mr2
+
2
5
Mr2
+ Mr2
=
46
15
Mr2
.
Conserving the angular momentum gives
8
3
Mr2
ωi =
46
15
Mr2
ωf
and therefore
ωf =
20
23
ωi.
Since the energy is E = ωL/2, this means
Ef =
20
23
Ei.
The angular amplitude θ ∝
√
E, so the amplitude decreases by a factor of
p
20/23 after each
collision. But there are two collisions per oscillation, so after n oscillations, the amplitude is
θn = θ0

20
23
n
.
26
