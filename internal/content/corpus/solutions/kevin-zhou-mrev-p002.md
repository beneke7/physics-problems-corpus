---
id: kevin-zhou-mrev-p002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-mrev-p002
solution_type: author
source_document: solution-document-kevin-zhou-mrevsol
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/MRevSol.pdf."
---

[3] Problem 2 (FYKOS 34.1). We model a person’s head as a sphere of radius R, and a beanie as a
circular, massless rubber band of radius r0 and spring constant k, where r0 < R. The coefficient of
friction between the band and head is µ. When is it possible for the person to put the beanie on
with one hand?
1
Kevin Zhou Physics Olympiad Handouts
That is, find the conditions for which it is possible to stretch the band so that it lies along the
equator of the sphere, by applying forces only at one point at the band, as shown above. Assume
for simplicity that the band is always planar.
Solution. This is secretly a statics problem. The problem with trying to put on a beanie this
way is that it might slip back up your head, since it wants to contract. If the coefficient of friction
is high enough, this slipping won’t happen. And as long as slipping doesn’t happen, it’s possible
to pull the beanie down, by just applying an infinitesimal force at some point with a downward
component.
Consider the moment where the beanie is a circle with radius r. At each point along the beanie,
there is a normal force dN and a friction force df. Balancing the net upward/outward force gives
df sinα = dN cosα, sinα =
r
R
.
Assuming the friction is maximal, we require
µ ≥ cotα.
This is harder to satisfy the smaller r is, so the toughest part is when we just start, and r = r0. By
solving the relevant right triangle and rearranging, we have
µ ≥
p
(R/r0)2 − 1
or equivalently,
r0 ≥
R
p
1 + µ2
.
The spring constant k doesn’t matter, as one could have seen by dimensional analysis.
[3] Problem 3. In M2, we considered many problems with ideal strings, which have a fixed length
and can exert tension forces along themselves but no bending moment. The next simplest case is an
elastic strip, such as a long, thin piece of plastic. An elastic strip is just like an ideal string, except
that it also contains a bending moment (i.e. an internal torque) of τ, related to its local radius of
curvature R by τ = κ/R, for a constant κ.
Suppose the ends of an elastic strip of total length L + ∆x are connected by an ideal string of
length L, where ∆x ≪ L, so that the strip bends away from the string near its middle. Find the
tension T in the string, and the maximal distance between the strip and the string.
Solution. Let’s suppose the endpoints of the string are at (0,0) and (L,0), and let the strip’s shape
be y(x). Now consider torque balance on the part of the strip at x < x0. There are contributions
from the tension from the string, the bending moment from the rest of the strip, and the tension from
the rest of the strip. We don’t care about the tension in the strip in this problem, so we eliminate
that contribution by taking torques about (x0,y(x0)), leading to the torque balance equation
−Ty(x0) = τ(x0) =
κ
R(x0)
.
Because ∆x ≪ L, the strip is only slightly bent, so we can approximate
1
R(x0)
≈
d2y
dx2
x=x0
.
2
Kevin Zhou Physics Olympiad Handouts
Since x0 was arbitrary, the shape of the strip obeys the differential equation
d2y
dx2
= −
T
κ
y
and imposing the boundary condition y(0) = 0 gives
y(x) = y0 sin
r
T
κ
x
!
.
We need the strip to bend away and then back to the string, so π =
p
T/κL, so that
T =
π2κ
L2
.
Now, to find the value of y0 we integrate the arc length of the strip,
L + ∆x =
Z L
0
p
1 + (dy/dx)2 dx ≈
Z L
0

1 +
y2
0T
2κ
cos2
(
p
T/κx)

dx
where we used the binomial theorem. This yields ∆x = y2
0TL/4κ, and solving for y0 gives
y0 =
2
π
√
L∆x.
If we hadn’t had ∆x ≪ L, the problem would have been much harder, since the formula for the
radius of curvature would have been more complicated. The solutions in the general case are called
elastica. They can be very elaborate, with reversals in direction and even loops, which you can see
from thin strips of paper or plastic. The history of the elastica is discussed here. The problem was
first posed by Bernoulli in 1691, and conclusively solved by Euler in 1744.
[3] Problem 4 (MPPP 19). A small pearl moving in deep water experiences a viscous retarding force
that is proportional to its speed, by Stokes’ law. If a pearl is released from rest under the water,
then it reaches a terminal velocity v1.
(a) Suppose the pearl is instead released horizontally with initial speed v2. Find the minimum
speed of the pearl during the subsequent motion.
(b) If v2 < v1, for what range of angles can the pearl be released, so that its speed monotonically
increases?
Solution. (a) When the speed is at a minimum, d(v2)/dt = 0, so v · a = 0. The retarding force
−bv satisfies bv1 = mg. Newton’s laws in each dimension give
max = −bvx may = −bvy − mg
Solving these equations by separating variables gives
vx = v2e−bt/m
, vy = −v1(1 − e−bt/m
).
Differentiating, we have
ax = −
gv2
v1
e−bt/m
, ay = −ge−bt/m
.
3
Kevin Zhou Physics Olympiad Handouts
We want vxax + vyay = 0, and letting α = e−bt/m, this means,
v2
2
v1
α2
= v1(1 − α)α
and solving gives
α =
v2
1
v2
1 + v2
2
, v =
q
v2
2α2 + v2
1(1 − α)2 =
v1v2
p
v2
1 + v2
2
.
(b) Note that in the previous part, ay/ax is constant. Let the velocity vector start at O. The end
of the velocity vector moves in a straight line since the direction of acceleration is constant
(goes from v2 to −v1ŷ).
−v1ŷ
v2
θ
O
At the limiting angle when the velocity monotonically increases, v2 will be the minimum
velocity, so v2 is perpendicular to the blue line. That means that the angle θ from the
downward direction needs to satisfy
|θ| < arccos

v2
v1

.
[3] Problem 5 (PPP 42). A uniform rod of mass m and length ℓ is supported horizontally at its ends
by two fingers. As the fingers are slowly brought together, the rod alternates between sliding on
each finger. The coefficients of friction are µk < µs.
(a) Explain why the fingers meet under the center of mass of the rod. (Try it in real life!)
(b) Find the total work done by the fingers during this process.
Solution. (a) Consider balancing torques about the center of mass of the rod. As a finger moves
closer to the center, its lever arm decreases so the normal force increases. Eventually, the
maximum possible friction force increases enough so that finger stops sliding, at which point
the other finger starts sliding. (For a visual explanation, see this nice video!)
(b) Let x1 and x2 denote the distances from the center. Then F1 = mgx2
x1+x2
, and similarly for F2.
During the motions, one finger is stationary while the other finger moving from x1 = a to
x1 = b will do work
W =
Z b
a
mgµkx2
x1 + x2
dx1 = mgµkx2 log

x2 + a
x2 + b

4
Kevin Zhou Physics Olympiad Handouts
Each finger does work until the ratio of the forces is µs/µk, and the ratio of the distances is
r = µk/µs, at which point the finger switches. Then the total work is
W = −
1
2
mgµkℓ

log

1 + r
2

+ rlog

r + r2
1 + r

+ r2
log

r2 + r3
r + r2

+ ...

which means
−
W
1
2mgµkℓ
= log

1 + r
2

+rlog(r)+r2
log(r)+r3
log(r)+... = log

1 + r
2

+
r
1 − r
log(r).
Plugging back in for r, we conclude
W =
1
2
mgµkℓ

log

2µs
µk + µs

+
µk
µs − µk
log

µs
µk

.
This is a pretty complicated expression, so let’s check it with limiting cases. Let µs = µk(1+ϵ)
where ϵ ≪ 1. The first logarithm term is O(ϵ), so
W =
1
2
mgµkℓ

1
ϵ
log(1 + ϵ) + O(ϵ)

=
1
2
mgµkℓ + O(ϵ).
This makes sense, because in this limit both fingers are sliding almost continuously, moving a
distance ℓ/2 each against a friction force µkmg/2.
