---
id: kevin-zhou-m7-ex018
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-ex018
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

Example 18
A very thin, hollow glass tube of radius r is dipped vertically inside a container of water.
Find the equilibrium height of the water in the tube.
Solution
In M2, we considered problems that could be solved knowing only the “surface tension
of water” γ, which is the energy cost per unit area of having a water-air interface. But
in this problem there is also a water-glass interface, and the answer to the question
depends on precisely how water and glass interact. Specifically, you need to know the sur-
face tension coefficient γwg which determines the energy cost of having a water-glass interface.
Fortunately, it turns out you don’t need to know γwg if you know the contact angle θ, i.e. the
angle between the glass and water surface at the top of the meniscus, which is drawn as
acute in the diagram above. We’ll just treat θ as a given, but for an explanation of how θ is
determined, see T3 or section 5.5 of Lautrup.
Since the glass tube is very thin, surface tension determines the shape of the water-air
surface, so it is spherical since spheres minimize area. By some elementary geometry, one
can show that the radius of curvature of this sphere is R = r/cosθ.
We showed using force balance arguments in M2 that the pressure inside the curved water
surface is lower than atmospheric pressure by ∆P = 2γ/R. On the other hand, we also know
from Pascal’s principle that ∆P = ρgh. Equating the two gives
h =
2γ cosθ
ρgr
.
This is Jurin’s law.
Physics problems often assume that water and glass have zero contact angle. This implies
that water perfectly wets glass, i.e. that a droplet of water placed on a horizontal glass surface
will spread to cover it completely. We will follow this assumption below, though in practice,
glass tends to quickly get coated in a layer of impurities, leading to a nonzero contact angle.
33
Kevin Zhou Physics Olympiad Handouts
Example 19: PPP 130
Water in a glass beaker forms a meniscus, as shown below.
Find the height h to which the meniscus rises above the flat water surface.
Solution
We consider all of the external horizontal forces acting on the water. The surface tension
force acting at the top of the meniscus is purely vertical, because water and glass have zero
contact angle. The other surface tension force acting on the flat part of the water is γ per
length. This balances the excess hydrostatic pressure (i.e. the pressure above atmospheric
pressure) at the wall, which is ρgh2/2 per unit length. Thus,
h =
r
2γ
ρg
.
We could have also gotten this with dimensional analysis, up to the prefactor.
Remark
You might be wondering how to compute the shape of the meniscus. There are two methods.
First, the pressure right above the water surface is Patm, so the pressure right below the water
surface can be determined from the radii of curvature of the surface, using the Young–Laplace
equation from M2. This pressure can also be computed from the height of the surface using
Pascal’s principle. Combining these two yields a differential equation for the shape with a
rather complicated solution, as explained in sections 5.6 and 5.7 of Lautrup. As you’ll see in
problem 33, you can also derive this result by considering force balance on the water.
Example 20: PPP 29
Water can rise to a height H in a certain capillary tube. Three “gallows” are made from this
tubing by bending it, and placed into a tank of water.
34
Kevin Zhou Physics Olympiad Handouts
Note that H′ > H. For which tubes, if any, does water flow out of the other end?
Solution
Clearly no water can fall out of (a), because this would produce a perpetual motion machine.
The gallows (b) and (c) are a bit more subtle. Water will not fall out of a capillary tube
if its end is less than a height H below the free water surface; this follows from the same
derivation as Jurin’s law, with the surface tension acting to hold the water in the tube. So
water only falls out of (c).
[2] Problem 28. A soap bubble of radius R and surface tension γ has a small tube of radius r ≪ R
passing through its surface. If the air has density ρ, find the rate of decrease of R.
Solution. This is an adaptation of a 2006 Russian Olympiad question, with some unnecessary
assumptions removed. Let v be the speed of the air as it moves through the tube. Since the tube
is thin, the air speed is only significant in and near the tube itself. After the air exits the tube, it
spreads out, and before it enters the tube it gradually converges. Thus, within most of the bubble’s
volume, the air speed is negligible. The pressure at the outside of the tube is Patm, and the pressure
throughout most of the bubble is Patm + 4γ/R by the Young–Laplace equation from M2.
Thus, applying Bernoulli’s principle between a point near the middle of the bubble and a point
near the exit of the tube, we find
v =
s
2∆P
ρ
=
r
8γ
ρR
.
By mass conservation,
dR
dt
(4πR2
) = (πr2
)v
from which we conclude
dR
dt
= −
r2
R2
r
γ
2ρR
.
Technically, the true answer is a bit different because the air inside the bubble is under a slightly
higher pressure, and so slightly denser. But ∆P ≪ Patm for any bubble you can reasonably make,
so this isn’t a significant source of error.
[2] Problem 29 (PPP 63). Water is stuck between two parallel glass plates. The distance between
the plates is d, and the diameter of the trapped water disc is D ≫ d.
In terms of the surface tension γ of water, what is the force acting between the two plates? This
effect can cause wet glass plates to stick together.
35
Kevin Zhou Physics Olympiad Handouts
Solution. If you imagine slicing the puddle of water along a diameter, then its boundaries with
the air are arcs of circles, since this minimizes the surface area. Since water perfectly wets glass,
these circles are tangent to the two glass plates, which mean they have radius of curvature d/2. In
addition, the surface of the water has radius of curvature D/2 in the orthogonal direction. Thus,
by the Young–Laplace equation,
∆P = γ

2
D
−
2
d

≈ −
2γ
d
.
This lowered pressure inside the water puddle causes a “suction” force between the two plates, of
magnitude
F = |∆P|A = π(D/2)2 2γ
d
=
γπD2
2d
.
[3] Problem 30 (NBPhO 2009). A soap film of thickness h = 1µm is formed inside a ring of diameter
D = 10cm, and the surface tension of the film is γ = 0.025N/m. If the film is broken at the center,
it will begin to fall apart; estimate the time needed for this to happen.
Solution. Like the helicopter question, this can’t be solved with pure dimensional analysis, because
there are four quantities (h, D, γ, and the density ρ). Instead, we need to think about the dynamics.
The edge of the break will expand outward, pulled by surface tension. This competes with the
inertia of the film itself, and the inertia per area only depends on the combination ρh. Thus, we
can perform dimensional analysis on the combinations ρh, D, and γ, giving
t ∼
s
ρh
γ
D ∼ 0.02s.
This is good enough for an estimate, but for completeness, we present a more precise solution below.
Assume the film is broken at the center, so the edge of the break will be an expanding circle
of radius r. The surface tension will provide a force of 4πrγ outwards, pulling on the mass that
was originally inside the circle of m = ρπr2h. Thus, by considering forces along the radial direction
(i.e. treating r as a generalized coordinate in the spirit of M4), we have Fr = dpr/dt, or
4πrγ =
dm
dt
v + m
dv
dt
= 2πrv2
ρh + πr2
ρh
dv
dt
.
Cleaning this up a bit, we have
v2
0 = v2
+
r
2
dv
dt
, v0 =
r
2γ
ρh
.
This equation tells us that the speed of the break quickly approaches v0 when r is small. Our result
for v0 is called the Taylor–Culick formula; you can see the constant speed in action in slow-motion
videos. Thus, the total time taken is
t ≈
D/2
v0
=
s
ρh
8γ
D ∼ 0.01s
where we used ρ ≈ 103 kg/m3, since soap films are mostly water.
36
Kevin Zhou Physics Olympiad Handouts
If you want to be even more precise, we can also solve the differential equation exactly. We can
get rid of the t-dependence entirely by writing dv/dt = (dv/dr)(dr/dt) = v dv/dr, giving
v2
0 = v2
+
rv
2
dv
dr
.
Separating and integrating yields Z
dr
r
=
Z
dv
2
v
v2
0 − v2
.
The broken part starts with v = 0 and small radius r0. Then, integrating and simplifying gives
v(r) = v0
p
1 − (r0/r)4
which indicates that once r becomes larger than the tiny value r0, the velocity rapidly approaches v0,
as stated above. You can go a step further, integrating to find r(t), but the result is a hypergeometric
function, which isn’t very enlightening.
