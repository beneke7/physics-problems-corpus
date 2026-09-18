---
id: kevin-zhou-r2-ex009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r2-ex009
solution_type: author
source_document: solution-document-kevin-zhou-r2sol
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R2Sol.pdf."
---

Example 9
The LHC accelerates protons to an energy of E = 7TeV, and is a tunnel of radius R = 4.3km.
If the protons are kept in a circular orbit in the tunnel by a magnetic field of magnitude B,
find the required value of B. If the value of B is kept constant, what would be the radius of
a future collider which accelerates protons to an energy of 20TeV?
Solution
The centripetal force required is
F =
dp
dt
= ωp
24
Kevin Zhou Physics Olympiad Handouts
where ω is the angular velocity. The speed of the protons is very close to c, so the angular
velocity is ω ≈ c/R, and the momentum is p ≈ E/c. The deflecting force is qvB ≈ qcB, so
qcB ≈ ωp ≈
E
R
.
Therefore, we have
B =
E
qcR
=
7 × 1012
(3 × 108)(4.3 × 103)
T = 5.4T.
This is slightly lower than what is actually used, because magnets don’t take up the entire
tunnel. Since R ∝ E, the future collider would need a radius of
R′
=
20TeV
7TeV
R = 12km.
Remark
You might be wondering how to write the Lorentz force as a four-force. It certainly should
be possible, since we know electromagnetism is compatible with relativity (indeed, it led
us to relativity in the first place), but it seems challenging because electromagnetism is so
naturally written in terms of three-vectors. It turns out that the proper way to express the
electromagnetic field in relativity is to join the electric and magnetic fields together, making
them the components of an antisymmetric rank 2 tensor,
Fµν =




0 Ex Ey Ez
−Ex 0 −Bz By
−Ey Bz 0 −Bx
−Ez −By Bx 0




called the field strength tensor. Then the four-force is
fµ
= quνFµν
where uν is the four-velocity. Note that this ensures the rest mass of the particle is fixed, as
f · u = quµuνFµν
= −quµuνFνµ
= −f · u
using the antisymmetric property, so f · u = 0. (In fact, the requirement to keep the rest
mass fixed is quite restrictive, so this is one of the simplest possible relativistic force laws.)
[2] Problem 20.   W 1 0USAPhO 2013, problem A3. A warmup question using the above facts.
[3] Problem 21 (MPPP 192). An electron moving with speed v0 = 0.6c enters a homogeneous electric
field that is perpendicular to its velocity.
25
Kevin Zhou Physics Olympiad Handouts
When the electron leaves the field, its velocity makes an angle 45◦ with its initial direction.
(a) Find the speed v1 of the electron after it has crossed the electric field.
(b) Find the distance d shown above, if the strength of the electric field is E = 510kV/m.
Note that the rest energy of an electron is 510keV.
Solution. (a) Since we are working with three-forces here, we use F = dp/dt. This tells us that
the component of momentum px is unchanged. Since the velocity is at a 45◦ angle, so is the
momentum, so py = px. Thus, the momentum increases by a factor of
√
2. The momentum
per mass started at 0.6/0.8 = 3/4, so its now 3
4
√
2. Thus,
v1
p
1 − v2
1
=
3
√
2
4
=⇒
v2
1
(1 − v2
1)
=
9
8
=⇒ v1 =
3c
√
17
.
Note that this implies that vx has decreased, even though the electric 3-force had no x-
component. As we warned above, this is a manifestation of the fact that F is no longer
parallel to a in relativity.
(b) As we showed in problem 1, the basics of work still work the same in relativity. The amount
of work done on the electron is eEd, while the energy change is m∆γ, where
∆γ =
1
p
1 − 9/17
−
1
p
1 − 9/25
=
√
17
√
8
−
5
4
.
Plugging in the numbers gives d = 20.8cm.
[3] Problem 22 (MPPP 194). The trajectories of charged particles, moving in a homogeneous magnetic
field, can be seen by observing the tracks they leave in cloud chambers. Because the particles are
moving quickly, it is impossible to see the tracks being formed; instead, one must infer what
happened from the shapes of the tracks. Is it possible that, when a charged particle decays into
two other charged particles, the trail segments close to the decay point (before the particles have
started to slow down significantly) are arcs of circles that touch each other, as shown?
26
Kevin Zhou Physics Olympiad Handouts
If so, identify which track belongs to the original particle. If not, explain why not.
Solution. Number the three tracks as 1, 2, and 3 starting from the inside, and let their radii be
r1 < r2 < r3. We know that even for relativistic motion, the momentum of a particle is p = qBr.
We can then use conservation of momentum and conservation of charge to investigate each case.
Case 1: Particle 1 decays, implying that a particle comes in along track 1, and particles leave
along tracks 2 and 3. The curvatures of the tracks imply
q1 > 0, q2 > 0, q3 > 0.
Conservation of charge and momentum imply
q1 = q2 + q3, q1r1 = q2r2 + q3r3.
By combining these equations, we may solve for r1 to find
r1 =
q2r2 + q3r3
q2 + q3
.
However, this is impossible because we know r1 is smaller than both r2 and r3.
Case 2: Particle 2 decays, which implies
q1 < 0, q2 < 0, q3 > 0.
Conservation of charge and momentum imply
q2 = q1 + q3, |q2r2| = |q1r1| − |q3r3|.
Being careful with minus signs, momentum conservation implies
−q2r2 = −q1r1 − q3r3.
Again solving for r1, we find
r1 =
q3r3 + (−q2)r2
q3 + (−q2)
which is a contradiction for the same reason as in case 1.
Case 3: Particle 3 decays, which implies
q1 < 0, q2 > 0, q3 < 0.
Conservation of charge and momentum imply
q3 = q1 + q2, |q3r3| = |q1r1| − |q2r2|.
Again being careful with minus signs, momentum conservation implies
−q3r3 = −q1r1 − q2r2.
Again solving for r1, we find
r1 =
q2r2 + (−q3)r3
q2 + (−q3)
which is again a contradiction. Thus, the series of tracks shown is impossible.
27
Kevin Zhou Physics Olympiad Handouts
[3] Problem 23.   W 1 0USAPhO 2006, problem A4.
[3] Problem 24.   ^ 1 0USAPhO 2022, problem B2. A nice problem on deriving the time dilation
formula for an electrostatic “clock”.
