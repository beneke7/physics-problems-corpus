---
id: kevin-zhou-m6-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m6-p006
solution_type: author
source_document: solution-document-kevin-zhou-m6sol
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M6Sol.pdf."
---

[3] Problem 6. In this problem we’ll verify some of the basic facts stated above.
10
Kevin Zhou Physics Olympiad Handouts
(a) Prove the statement of idea 5 for the case of elliptical orbits.
(b) Using this result, prove the vis-viva equation
v2
= GM

2
r
−
1
a

which is often used in rocketry.
(c) Prove Kepler’s third law.
Solution. (a) Let the closest approach distance be r1, farthest be r2. For simplicity, let’s define
the specific angular momentum J = L/m and specific energy ϵ = 2E/m. Then angular
momentum conservation and energy conservation give
J = r1v1 = r2v2, ϵ = v2
1 −
2GM
r1
= v2
2 −
2GM
r2
.
From these facts, we see that the equation
ϵ =
J2
r2
−
2GM
r
is satisfied for r = r1 and r = r2. This equation is equivalent to the quadratic ϵr2 + 2GMr −
J2 = 0, and applying Vieta’s formulas gives r1 + r2 = −2GM/ϵ = −GMm/E. Using
r1 + r2 = 2a and rearranging gives the result.
(b) This follows immediately from rearranging the statement of energy conservation,
−
GMm
2a
=
1
2
mv2
−
GMm
r
.
(c) This follows from the geometrical facts stated in idea 6. First, the area swept out per unit
time is L/2m, so (L/2m)T = πab.
To show that T only depends on a, we need to eliminate L and b. We know that a = (r1+r2)/2
and a =
√
b2 + d2, where d = (r1 − r2)/2. This implies that b =
√
r1r2, and applying Vieta’s
formulas to the quadratic in part (a) gives
b =
r
−J2
ϵ
=
L/m
p
−2E/m
.
Plugging this into our initial result, we have
L
2m
T = πa
L/m
p
GM/a
,
which implies T2 = 4π2a3/GM ∝ a3, as desired.
Remark: Scaling Symmetry
There’s a variant of Kepler’s third law for unbound orbits. Suppose a planet is right next
to the Sun at time t = 0, but has a large initial radial velocity, so that it has zero total
11
Kevin Zhou Physics Olympiad Handouts
energy. Then its distance to the Sun evolves as r(t) ∝ t2/3, like how a ∝ T2/3 for bound orbits.
Both of these results come from the scaling symmetry of inverse square force laws: any
solution to Newton’s second law remains a solution if you multiply all distances by 4 and
all times by 8. The widest-reaching application of this idea is to the whole universe itself.
If it contains only matter, which started at the origin at time t = 0, and it expands under
gravity with zero total energy, then its “scale factor” evolves as a(t) ∝ t2/3. This was a good
description of our universe for most of its lifetime, but in the past few billion years the effects
of dark energy took over, accelerating the expansion. We’ll revisit cosmology in X3.
[3] Problem 7. [A] A simple derivation of Kepler’s first law is given in section 7.4 of Morin, and
centers around solving a differential equation for 1/r(θ). (You can motivate this by noting that the
polar form of an ellipse is quite simple, 1/r = (1 + ecosθ)/p, where p is the semilatus rectum and
e is the eccentricity.) However, in this problem, we’ll consider an alternative approach that uses a
subtle conserved quantity, which is also important in more advanced physics.
(a) Show that the Laplace–Runge–Lenz vector
A = p × L − GMm2
r̂
is conserved, where the star is at the origin and r̂ is the radial unit vector at the planet’s
position r. (Hint: use the fact that L = mr2ω to evaluate the time derivative.)
(b) We have A · r = Arcosθ, where θ is the angle between A and r. Evaluate A · r using the
definition of A, and the identity a · (b × c) = (a × b) · c, in order to derive an expression for
r in terms of θ and constants. Then use this to show that the orbit is a conic section.
(c) As another simple application of the conservation of A, show that the set of velocities during
an elliptical orbit traces out a circle in velocity space.
The ideas discussed in this problem are almost never required to solve Olympiad problems, but they
can dramatically simplify very tough orbital mechanics problems. For two examples, see Physics
Cup 2021, problem 2 and Physics Cup 2024, problem 4.
Solution. (a) Since the angular momentum is conserved,
Ȧ = F × L − GMm2 dr̂
dt
=
GMm
r2
(ωmr2
)(−r̂ × ẑ) − GMm2
(ωẑ × r̂) = 0
as desired.
(b) We have
A · r = r · (p × L) − GMm2
r = (r × p) · L − GMm2
r = L2
− GMm2
r
which tells us that
Arcosθ = L2
− GMm2
r.
But now this can be solved for r to give the trajectory,
r =
L2
GMm2 + Acosθ
.
12
Kevin Zhou Physics Olympiad Handouts
This is precisely the form of a conic section. Specifically, the general form is
r =
p
1 + ecosθ
and we can identify
p =
L2
GMm2
, e =
A
GMm2
.
As a check, note that A indeed vanishes for circular motion, where
A = (mv)(mvr) − GMm2
= mr2

mv2
r
−
GMm
r2

= 0.
For an elliptical orbit, A lies in the plane of the orbit and points along the major axis.
(c) Take the cross product of the vector with L, which is always conserved, for
(A + GMm2
r̂) × L = (p × L) × L = −mL2
v
since p is always perpendicular to L. Now, during an elliptical orbit, the values of A+GMm2r̂
trace out a circle because A is conserved and r̂ has constant magnitude. Since A and r̂ are
perpendicular to L, taking the cross product with L just scales the circle and rotates it by
90◦ in the orbit plane, so the set of v lies on a circle.
Now we’ll consider some really slick problems that can be solved with pure geometry.
