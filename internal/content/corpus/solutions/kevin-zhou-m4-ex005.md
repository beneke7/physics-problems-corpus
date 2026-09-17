---
id: kevin-zhou-m4-ex005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-ex005
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

Example 5
If a spring with spring constant k1 and relaxed length ℓ1 is combined with a spring with
spring constant k2 and relaxed length ℓ2, find the spring constant and relaxed length of the
combined spring, if the combination is in series or in parallel.
Solution
For the series combination, the new relaxed length is clearly ℓ = ℓ1 + ℓ2. Suppose the first
spring is stretched by x1 and the second by x2. The tensions in the springs must balance,
F = k1x1 = k2x2.
Thus, the new spring constant is
k =
F
x1 + x2
=
k2x2
x2(k2/k1 + 1)
=
k1k2
k1 + k2
.
For example, if the spring is cut in half, the pieces have spring constant 2k.
Now consider the parallel combination. In this case it’s clear that the new spring constant
is k = k1 + k2, since the tensions of the springs add. The new relaxed length ℓ is when the
forces in the springs cancel out, so
k1(ℓ − ℓ1) + k2(ℓ − ℓ2) = 0
which implies
ℓ =
k1ℓ1 + k2ℓ2
k1 + k2
.
[2] Problem 10 (Morin 4.20). A mass m is attached to n springs with relaxed lengths of zero. The
spring constants are k1,k2,...,kn. The mass initially sits at its equilibrium position and then is
given a kick in an arbitrary direction. Describe the resulting motion.
Solution. Suppose the anchor of spring i is at ri. Then the force on the mass is
F = −
X
i
ki(r − ri) =
X
i
ki
!
r − C
where C is some constant vector. Thus, we see that the mass undergoes simple harmonic motion
with angular frequency ω =
qP
i ki
m .
[3] Problem 11 (Morin 4.22). A spring with relaxed length zero and spring constant k is attached
to the ground. A projectile of mass m is attached to the other end of the spring. The projectile is
then picked up and thrown with velocity v at an angle θ to the horizontal.
10
Kevin Zhou Physics Olympiad Handouts
(a) Geometrically, what kind of curve is the resulting trajectory?
(b) Find the value of v so that the projectile hits the ground traveling straight downward.
Solution. (a) Let the anchor of the spring be the origin. Then, the force on the particle is
−kr − mgŷ = −k(r − r0), so it is effectively a single spring force. The motion in 2D due to
a spring force is an ellipse (independent x and y oscillations of the same frequency), so the
shape is a portion of an ellipse, whose center is a distance mg/k directly below the launch
point.
(b) Note that the horizontal velocity takes the form vx(t) = (v cosθ)cos(ωt), because the motion
in the horizontal direction is just simple harmonic. The horizontal velocity vanishes when the
phase is π/2, a total of a quarter cycle.
At this time, the vertical displacement must vanish. Vertically, the motion is just simple
harmonic but with an equilibrium point shifted downward by mg/k. Let the vertical velocity
take the form
vy(t) = v0 cos(ωt + ϕ).
The initial phase is ϕ, and just before the mass hits the ground, its vertical velocity is the
opposite of the original one, so the final phase is π − ϕ. So hitting the ground occurs at the
same time as having a vertical velocity if the phase difference is π/2, which implies ϕ = π/4.
Now, by matching the initial velocity and acceleration, we know that
v0 cosϕ = v sinθ, −v0ω sinϕ = −g
Dividing these equations gives
tanϕ =
g
ωv sinθ
and we must have tanϕ = 1, so
v =
g
ω sinθ
=
r
m
k
g
sinθ
.
