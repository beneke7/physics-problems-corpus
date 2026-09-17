---
id: usapho-2011-b2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2011-b2
solution_type: official
source_document: solution-document-usapho-2011-s
source_pdf: cache/phoxiv/usapho/2011_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2011_S.pdf."
---

Question B2
A particle is constrained to move on the inner surface of a frictionless parabolic bowl whose cross-
section has equation z = kr2. The particle begins at a height z0 above the bottom of the bowl with
a horizontal velocity v0 along the surface of the bowl. The acceleration due to gravity is g.
r
z
z = kr2
a. For a particular value of horizontal velocity v0, which we will name vh, the particle moves in
a horizontal circle. What is vh in terms of g, z0, and/or k?
b. Suppose that the initial horizontal velocity is now v0 > vh. What is the maximum height
reached by the particle, in terms of v0, z0, g and/or k?
c. Suppose that the particle now begins at a height z0 above the bottom of the bowl with an
initial velocity v0 = 0.
i. Assuming that z0 is small enough so that the motion can be approximated as simple
harmonic, find the period of the motion in terms any or all of the mass of the particle
m, g, z0, and/or k.
ii. Assuming that z0 is not small, will the actual period of motion be greater than, less
than, or equal to your simple harmonic approximation above? (You need not calculate
the new value explicitly, but you should show some work to defend your answer.)
Solution
a. Let the radius of the bowl at height z0 be r0 and let the angle made by the bowl’s surface to
the horizontal at that height be θ.
Two forces act on the particle: the normal force and gravity. If the particle moves in a
horizontal circle, the vertical components of these forces cancel, and the horizontal component
of the normal force is the centripetal force. Then
N sinθ =
mv2
h
r0
, N cosθ = mg.
Combining these,
tanθ =
v2
h
gr0
.
Now tanθ is the slope of the bowl dz/dr = 2kr0, so
2kr0 =
v2
h
gr0
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part B 14
Using z0 = kr2
0 and solving for vh gives
vh =
p
2gz0
b. Let the maximum height be z, let the radius of the bowl at this point be r, and let the speed
of the particle at this point be v. By conservation of energy,
1
2
mv2
0 + mgz0 =
1
2
mv2
+ mgz.
The two forces acting on the particle never exert a torque in the z-direction, so the z-
component of the angular momentum is conserved. Furthermore, at both the initial and
final heights, the velocity of the particle is perpendicular to the z-axis, so
mv0r0 = mvr ⇒ v = v0
r0
r
.
Using the equation of the bowl,
v = v0
r
z0
z
.
Using this to eliminate v in the energy conservation equation, we find a quadratic in z,
z2
−

v0
2
2g
+ z0

z +
v0
2
2g
z0 = 0.
The roots of this quadratic sum to z0 + v2
0/2g, and there is a root z = z0 corresponding to
the initial condition, so the desired root is
z =
v2
0
2g
.
The two roots are equal when v0 = vh, providing an alternate solution to part (a).
c. i. We present a force-based approach and an energy-based approach. In each case, let r
be the radial position of the particle, so that z = kr2 is the height of the particle above
the bottom of the bowl.
Let the angle of the bowl’s surface to the horizontal be θ. Because z0 is small,
sinθ ≈ θ ≈ tanθ =
dz
dr
= 2kr
and cosθ ≈ 1. Moreover, since z0 is small, the centripetal acceleration is negligible, so
we can consider only the tangential acceleration. Since the force tangential to the bowl
is mg sinθ, this is a = g sinθ. The radial acceleration ar is
ar = −acosθ = −g cosθsinθ.
Then in the small-z approximation,
ar ≈ −g tanθ = −2krg.
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part B 15
This is simple harmonic motion with ω =
√
2kg and hence period
T =
2π
√
2kg
.
The energy-based approach begins with the total energy
E =
1
2
mv2
+ mgz.
The velocity v is given by
v2
=

dr
dt
2
+

dz
dt
2
.
Because z is small, dz
dt 
 dr
dt , and we conclude that
E =
1
2
m

dr
dt
2
+ mgkr2
.
By conservation of energy,
0 =
dE
dt
= m
dr
dt
d2r
dt2
+ 2mgkr
dr
dt
which implies that
0 =
d2r
dt2
+ 2krg
which is the same equation as before.
ii. The period is greater than the simple harmonic period. In the force-based approach, we
found
ar = −g cosθsinθ
and approximated it as
ar = −g tanθ.
Since cosθsinθ < tanθ, this is an overestimate, so the period is actually larger.
In the energy-based approach, we dropped a positive term in the formula for the speed
v as expressed in terms of dr
dt . Therefore we overestimated dr
dt , and again the particle
takes longer to reach the origin in reality than it does in the approximation.
Copyright ©2011 American Association of Physics Teachers
