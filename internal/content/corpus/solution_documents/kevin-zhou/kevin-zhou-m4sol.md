---
id: solution-document-kevin-zhou-m4sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-m4-ex003, kevin-zhou-m4-ex005, kevin-zhou-m4-ex007, kevin-zhou-m4-ex008, kevin-zhou-m4-ex010, kevin-zhou-m4-p002, kevin-zhou-m4-p006, kevin-zhou-m4-p007, kevin-zhou-m4-p012, kevin-zhou-m4-p016, kevin-zhou-m4-p017, kevin-zhou-m4-p018, kevin-zhou-m4-p019, kevin-zhou-m4-p025, kevin-zhou-m4-p026, kevin-zhou-m4-p027]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Mechanics IV: Oscillations
Chapter 4 of Morin covers oscillations, as does chapter 10 of Kleppner and Kolenkow, and chapter
10 of Wang and Ricardo, volume 1. For a deeper treatment that covers normal modes in more
detail, see chapters 1 through 6 of French. For a pedagogical introduction to the adiabatic theorem,
see this article. For more fun discussion, see chapters I-21 through I-25, II-19, and II-38 of the
Feynman lectures. There is a total of 88 points.
1 Small Oscillations
Idea 1
If an object obeys a linear force law, then its motion is simple harmonic. To compute the
frequency, one must find the restoring force per unit displacement. More generally, if the
force an object experiences can be expanded in a Taylor series with a nonzero linear restoring
term, the motion is approximately simple harmonic for small displacements. (However, don’t
forget that there are also situations where oscillations are not even approximately simple
harmonic, no matter how small the displacements are.)
Example 1: KK 4.13
The Lennard–Jones potential
U(r) = ϵ
  r0
r
 12
− 2
 r0
r
 6

is commonly used to describe the interaction between two atoms. Find the equilibrium radius
and the angular frequency of small oscillations about this point for two identical atoms of
mass m bound to each other by the Lennard–Jones interaction.
Solution
To keep the notation simple, we’ll set ϵ = r0 = 1 and restore them later. The equilibrium
radius is the radius where the derivative of the potential vanishes, and
U′
(r) = −12r−13
+ 12r−7
= 0
implies that the equilibrium radius is r = r0. Because the force accelerates both of the atoms,
the angular frequency is
ω =
s
U′′(r)
m/2
where m/2 is the so-called reduced mass. At the equilibrium point, we have
U′′
(r0) = (12)(13)r−14
0 − (12)(7)r−8
0 = 72.
Restoring the dimensionful factors, we have U′′(r0) = 72ϵ/r2
0, so
ω =
12
r0
r
ϵ
m
.
1

Kevin Zhou Physics Olympiad Handouts
[3] Problem 1 (Morin 5.13). A hole of radius R is cut out from an infinite flat sheet with mass per
unit area σ. Let L be the line that is perpendicular to the sheet and that passes through the center
of the hole.
(a) What is the force on a mass m that is located on L, a distance x from the center of the hole?
(Hint: consider the plane to consist of many concentric rings.)
(b) Now suppose the particle is released from rest at this position. If x ≪ R, find the approximate
angular frequency of the subsequent oscillations.
(c) Now suppose that x ≫ R instead. Find the period of the resulting oscillations.
(d) Now suppose the mass begins at rest on the plane, but slightly displaced from the center. Do
oscillations occur? If so, what is the approximate frequency?
Solution. (a) Consider a ring with radius r and thickness dr. It has mass dM = 2πrσ dr. By
symmetry, the net force is towards the sheet so we only take that component. Thus we
multiply the total force from the ring dF = GmdM/(x2 + r2) by x/
√
x2 + r2. We integrate
from R to infinity due to the hole, giving
F = −
Z ∞
R
Gm
2πrxσ dr
(x2 + r2)3/2
= −πGmxσ
Z ∞
x2+R2
du
u3/2
= −2πGmσ
x
√
x2 + R2
(b) Approximating the force at small x gives
F = −2πGmσ
x
R
p
1 + x2/R2
≈ −2πGmσx/R.
This implies simple harmonic oscillations,
ẍ = −
2πGσ
R
x = −ω2
x, ω =
r
2πGσ
R
.
(c) In this case, approximating the force at large x gives
F = −2πGmσ
1
p
1 + R2/x2
≈ −2πGmσ
with the force always directed towards the plane. This corresponds to a uniform acceleration
of g = 2πGσ. A ball takes time t =
p
2x/g to fall from a height x. The period is thus
T = 4
r
x
πGσ
.
To be clear, our approximation for the force is only good when x ≫ R. However, since the
vast majority of the oscillation time is spent at x ≫ R, using this approximation for all x
gives a decent approximation for the period.
(d) This situation is unstable; the mass will just accelerate further away from the center, so no
oscillations occur. This is related to Earnshaw’s theorem, which we cover in E1, which tells
us that no gravitational field (or electrostatic field) in vacuum can have a point that is stable
in all directions.
2

Kevin Zhou Physics Olympiad Handouts
[2] Problem 2. Some questions about small oscillations with the buoyant force.
(a) A cubical glacier of side length L has density ρi and floats in water with density ρw. Find
the angular frequency of small oscillations, assuming that a face of the glacier always remains
parallel to the water surface, and that the force of the water on the glacier is always given by
the hydrostatic buoyant force.
(b) A ball of radius R floats in water with half its volume submerged. Find the angular frequency
of small oscillations, making the same assumption.
(c) There are important effects that both of the previous parts neglect. What are some of them?
Is the true oscillation frequency higher or lower than the one found here?
Solution. (a) Let V = xL2 be the submerged volume, and let V0 = L3. We then have
F = −ρwV g + ρiV0g = −ρwL2
gx + const.
Thus,
ω =
s
ρwL2g
ρiL3
=
r
ρw
ρi
g
L
.
(b) The density of the ball is half that of water, so its mass is (2π/3)ρwR3. The “spring constant”
is πR2ρwg, so
ω =
s
πR2ρwg
(2π/3)ρwR3
=
r
3g
2R
.
(c) The most serious omission is that we have neglected the motion of the water. This clearly
should add extra inertia, because the water has to move around to accommodate the moving
glacier or ball, and it should be a significant change since the water is more dense than these
objects. This “added mass” effect leads to a decrease in the oscillation frequency, and we
discuss it further in M7.
In fact, the situation is even worse. As we’ll also see in M7, viscosity between the object and
water leads to a boundary layer of water carried along with the object. But since this boundary
layer builds up over time, its thickness depends on the entire history of the object’s motion!
This is called the Basset force, and it turns Newton’s second law into an “integro-differential
equation”, one where the second derivative of the position depends on an integral over all the
past positions. It has the effect of damping the oscillations (which also slightly decreases their
frequency). In general, nothing in fluid dynamics is easy.
[3] Problem 3.   W 1 0USAPhO 1998, problem A2. To avoid some confusion, skip part (a), since there
actually isn’t a nice closed-form expression for it.
[3] Problem 4.   W 1 0USAPhO 2009, problem A3.
[3] Problem 5.   m 1 0USAPhO 2010, problem B1.
3

Kevin Zhou Physics Olympiad Handouts
Example 2
Find the acceleration of an Atwood’s machine with masses m and M and a massless pulley
and string.
Solution
The “high school” way to do this is to let a1 and a2 be the vertical accelerations of the
masses, let T be the unknown tension in the string, solve for T by setting a1 and a2 to have
equal magnitudes, then plug T back in to find the common acceleration.
But this is unnecessarily complicated, because the system only has one degree of free-
dom. The fixed length of the string gives us a constraint: if we know where one of the
masses is, then we automatically know where the other is. So there should be a way to
describe the system without ever introducing a second variable. But there isn’t a single
Cartesian coordinate that accomplishes this, since the masses accelerate in opposite directions.
The key is to apply energy conservation to a “generalized coordinate” q. Specifically, let q
describe the distance that the string has moved along itself, so that q = 0 initially, and when
q = q0, the mass M has moved down by q0 and the mass m has moved up by q0. The kinetic
and potential energies of the system are simply
K =
1
2
(m + M)q̇2
, V = qg(m − M).
To find the acceleration q̈, we differentiate energy conservation with respect to time,
0 =
d(K + V )
dt
= (m + M)q̈q̇ + q̇g(m − M).
Solving gives the familiar result
q̈ =
M − m
M + m
g.
Intuitively, we could say that from the standpoint of this generalized coordinate, the “total
force” is (M − m)g, and the “total inertia” is M + m.
This will be a very useful concept, so let’s think about why it works. The first reason is that
forces and accelerations have directions but energy doesn’t, so thinking about energy lets
us collectively treat objects moving in different directions. The second reason is that in the
force-based derivation, we needed to define two variables because we had to eliminate the
unknown tension T. But in the energy-based derivation, the tension never shows up because
the inextensible string doesn’t do any work on the blocks. More generally, whenever a system
has rigid constraints like this, we can work with a reduced set of generalized coordinates
which automatically takes the constraints into account. The only cost is that, if you wanted
to know the values of the constraint forces, you’d have to do an extra step at the end.
4

Kevin Zhou Physics Olympiad Handouts
Idea 2
The idea shown in example 2 is very general. Consider any system whose configuration can
be described by a single “generalized coordinate” q. If its energy can be decomposed into a
kinetic energy quadratic in q̇, and a potential energy that depends only on q,
K =
1
2
meff q̇2
, V = V (q)
then the energy conservation equation d(K + V )/dt = 0 can be used to find the generalized
acceleration q̈. Explicitly, the chain rule tells us that
meff q̈ = −
∂V
∂q
.
For example, we recover the usual Newton’s second law for q = x, but q can also be something
completely different. We call meff q̇ a “generalized momentum”, and −∂V/∂q a “generalized
force”. The above equation also contains the principle of virtual work from M2, as it tells
us that static equilibrium can occur when ∂V/∂q = 0, i.e. when the potential energy doesn’t
change under a small motion.
Remark
The result above is a special case of the Euler–Lagrange equation in Lagrangian mechanics,
which states that if a system is described by a Lagrangian L, then
d
dt
∂L
∂q̇
=
∂L
∂q
.
In simple cases, one has L = K(q̇)−V (q), where typically K is quadratic in q̇, in which case
we recover the previous result. But more generally, it might not be possible to meaningfully
decompose L into a “kinetic” and “potential” piece at all! We won’t use this more general
form below. While it is more powerful, it is also more complicated, and if you find yourself
using it for an Olympiad problem, there’s probably an easier way.
[1] Problem 6. A rope is nestled inside a curved frictionless tube. The rope has a total length ℓ and
uniform mass per length λ. The shape of the tube can be arbitrarily complicated, but the left end
of the rope is higher than the right end by a height h. If the rope is released from rest, find its
acceleration.
Solution. Of course, you can get the same result by breaking the rope into infinitely many infinites-
imal elements, applying Newton’s second law to each one, and solving for how the tension varies
throughout the rope. But this is unnecessarily complicated, because the system can be described
by a single generalized coordinate.
Let q be the length the rope has moved along the tube. The kinetic energy is λℓq̇2/2. The
“generalized force” is −∂V/∂q = λgh. So the acceleration is gh/ℓ.
5

Kevin Zhou Physics Olympiad Handouts
Idea 3
Generalized coordinates are really useful for problems that involve complicated objects but
only have one relevant degree of freedom, which is especially true for oscillations problems.
For instance, if the kinetic and potential energy have the form
K =
1
2
meff q̇2
, V =
1
2
keff q2
then the oscillation’s angular frequency is always
ω =
p
keff/meff.
Note that q need not have units of position, meff need not have units of mass, and so on.
When V (q) is a more general function, we can expand it about a minimum qmin, so that
keff = V ′′(qmin). This lets us avoid dealing with possibly complicated constraint forces.
Example 3: F = ma 2022A #10
The two ends of a uniform rod of length 2L are hung on massless strings of length L.
If the strings are attached to the ceiling, and the rod is pulled a small distance horizontally
and released as shown, what is the period of oscillation?
Solution
This kind of question becomes completely trivial when you use the above idea. Using the
rotation angle θ as a generalized coordinate, K and V are both exactly the same as for a
simple pendulum of length L, because the rod doesn’t rotate, so the period is 2π
p
L/g.
[3] Problem 7. A particle in a uniform vertical gravitational field is constrained to move on a curve
y(x). If y(x) is a circular arc, then this system is just a simple pendulum, and we know that its
period is not perfectly independent of its amplitude. Find a differential equation relating dy/dx
and y, so that the period of oscillation is exactly 2π/ω0 for a fixed parameter ω0, independent of
amplitude. (Hint: as a generalized coordinate, use the arc length s along the curve.)
Solution. The reason s is useful is because
K =
1
2
mṡ2
exactly. So, we would get motion with fixed period 2π/ω0 if the potential energy had the form
V =
1
2
ω2
0ms2
.
On the other hand, since the system is in a uniform gravitational field, V = mgy, so we need
y =
ω2
0
2g
s2
.
6

Kevin Zhou Physics Olympiad Handouts
Taking the derivative with respect to x of both sides, we have
dy
dx
=
ω2
0
g
s
ds
dx
=
s
2ω2
0y
g
p
1 + (dy/dx)2.
Solving this for dy/dx gives
dy
dx
=
r
y
(g/2ω2
0) − y
where we took the positive sign to get a proper restoring force. As a check, when y is small, this
equation is approximately solved by y(x) = ω2
0x2/(2g), which in turn is approximately an arc of a
circle of radius L, where ω2
0 = g/L.
Solving the differential equation exactly is a bit nasty, but it turns out to be a cycloid. This fact
was first discovered by Huygens, who invented the cycloidal pendulum for accurate timekeeping. It
is equivalent to the usual textbook statement that the cycloid is a “tautochrone”.
[3] Problem 8 (Cahn). A particle of mass M is constrained to move on a frictionless horizontal plane.
A second particle of mass m is constrained to a vertical line. The two particles are connected by a
massless string which passes through a hole in the plane.
The system is set up so that the mass M moves in a circle of radius r, while the mass m remains still.
Show that this motion is stable with respect to small changes in r, and find the angular frequency
of small oscillations.
Solution. In equilibrium we have
mg =
Mv2
r
=
L2
Mr3
where r is the radius of the circle, and L is the conserved angular momentum. If the hanging mass
goes downward, then r decreases, so the tension in the string increases providing a restoring force;
hence the orbit is stable.
To find the angular frequency of small oscillations, we’ll use the energy method, with generalized
coordinate r. The “kinetic energy”, which is the part of the energy dependent on ṙ, is
T =
1
2
Mṙ2
+
1
2
mṙ2
.
The “potential energy”, which is the part of the energy dependent on r, is
V = mgr +
L2
2Mr2
.
Note that L2/2Mr2 is treated as potential energy here even though it is associated with the motion
of the large mass. From the kinetic energy, we see the “effective mass” is meff = M + m, as one
might expect. From the potential energy, we see the “effective spring constant” is
keff = V ′′
=
3L2
Mr4
=
3mg
r
.
7

Kevin Zhou Physics Olympiad Handouts
Since keff/meff is positive, the motion is stable, and the angular frequency is
ω =
s
keff
meff
=
r
3g
r
r
m
m + M
.
[4] Problem 9. @ 1 0IPhO 1984, problem 2. If you use the energy methods above, you won’t actually
need to know anything about fluid mechanics to do this nice, short problem!
Solution. To find the period of oscillation, we will find expressions for the kinetic energy and
potential energy associated with the seiching. Refer to the diagram below.
First, to find the potential energy increase when the water is displaced by ξ, note that a triangular
prism of water has effectively been moved upward, as shown above. The centers of masses of these
triangles are ξ/3 from their bases, so the center of mass of the triangle will move up a distance of
2ξ/3. Let the width of the container by w. Then the potential energy U will be 2mgξ/3, where the
mass of the triangular prism of water is m = 1
2
L
2 ξwρ, so
U =
1
6
ρLwgξ2
.
To find a rough estimate of the kinetic energy, consider the movement of the center of mass alone;
this won’t get all of the kinetic energy, but it’ll get enough to get a reasonable answer. By thinking
of the contribution of moving the triangle mentioned above, we have
∆xcm =
m(2L/3)
M
=
1
4Lξw(2L/3)
Lwh
=
1
6
Lξ
h
.
∆ycm =
m(2ξ/3)
M
=
ξ2
6h
.
We see that ∆xcm dominates since ξ is small, so we focus on it. The total mass of the water is
M = ρLwh
and our approximation for the kinetic energy is
K ≈
1
2
Mẋ2
cm =
1
2
ρLwh
L2 ˙ ξ2
36h2
.
Besides the overall side-to-side center of mass motion of the water, the water also has internal
motions that can’t be described just in terms of the center of mass moving. However, our result is
good enough for the purposes of this problem.
8

Kevin Zhou Physics Olympiad Handouts
Putting this together yields
E ≈
ρwL3
72h
˙ ξ2
+
1
6
ρLwgξ2
=
1
2
meff
˙ ξ2
+
1
2
keffξ2
and thus a period of
T ≈ 2π
s
L2
12gh
.
This is compatible with the data given in the problem statement, up to order-one factors. Your
answer may look different, since we’ve made a lot of approximations throughout the problem; as
long as it agrees dimensionally, with the prefactor within an order of magnitude, you can regard it
as correct.
This is a very brief taste of the fascinating field of oceanography, which is one of the premier
real-world applications of fluid dynamics. For a lot more about seiches and their relatives, see
chapter 9 of the Handbook of Coastal and Ocean Engineering.
2 Springs and Pendulums
Now we’ll consider more general problems involving springs and pendulums, two very common
components in mechanics questions. As a first example, we’ll use the fictitious forces met in M2.
Example 4: PPP 79
A pendulum of length L and mass m initially hangs straight downward in a train. The
train begins to move with uniform acceleration a. If a is small, what is the period of small
oscillations? If a can be large, is it possible for the pendulum to loop over its pivot?
Solution
The fictitious force in the train’s frame due to the acceleration is equivalent to an additional,
horizontal gravitational field, so the effective gravity is
geff = −ax̂ − gŷ.
For small oscillations, we know the period is 2π
p
L/g in ordinary circumstances. By precisely
the same logic, it must be replaced with
T = 2π
s
L
geff
=
2π
√
L
(g2 + a2)1/4
.
As a gets larger, the effective gravity points closer to the horizontal. In the limit g/a → 0,
the effective gravity is just horizontal, so the pendulum oscillates about the horizontal. Its
endpoints are the downward and upward directions, so it never can get past the pivot.
Here’s a follow-up question: if the train can decelerate quickly, how should you stop it so that
the pendulum doesn’t end up swinging at the end? The most efficient way is to first quickly
decelerate to half speed, which, in the frame of the train, provides a horizontal impulse
to the pendulum. Then wait a half-period π
p
L/g, so that the pendulum’s momentum
9

Kevin Zhou Physics Olympiad Handouts
turns around, and then quickly stop, providing a second impulse that precisely cancels the
pendulum’s horizontal motion. Tricks like this are used by crane operators to transport loads,
and by physicists to transport clouds of ultracold atoms without warming them up.
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
[5] Problem 12. A uniform spring of spring constant k and total mass m is attached to the wall, and
the other end is attached to a mass M.
(a) Show that when m ≪ M, the oscillation’s angular frequency is approximately
ω =
s
k
M + m/3
.
(b) [A] ⋆ Generalize part (a) to arbitrary values of m/M. (Hint: to begin, approximate the
massive spring as a finite combination of smaller massless springs and point masses, as in the
example in M2. It will not be possible to solve for ω in closed form, but you can get a compact
implicit expression for it. Check that it reduces to the result of part (a) for small m/M, and
interpret the results for large m/M. This is a challenging problem that requires almost all
the techniques we’ve seen so far; you might want to return to it after doing section 4.)
11

Kevin Zhou Physics Olympiad Handouts
Solution. In the m ≪ M case, we can assume the velocity of a piece of spring that is at position
a fraction x of the total length is proportional to x. (More precisely, accounting for nonlinear
stretching of the spring would contribute at higher order.) Therefore, the total kinetic energy of the
spring is Z 1
0
1
2
(xv0)2
mdx =
1
6
mv2
0
where v0 is the velocity of M, and L is the current length of the spring. Therefore, the total kinetic
energy is 1
2(M +m/3)v2
0, so we have an effective mass of M +m/3. The spring is uniformly stretched
at this order, so the effective spring constant is still k, giving the desired result.
Part (b) is a nice exercise in dealing with continuous systems. First, as usual, we break the
spring into pieces. Suppose the spring is made of N masses connected with small springs, and let
their displacements from equilibrium be xi. Each piece has mass m/N and each small spring has
spring constant kN, as established in an earlier problem. The equation of motion for each mass is
m
N
ẍi = Nk(xi−1 + xi+1 − 2xi).
We define x0 = 0 and let xN be the displacement of the mass M. Then its equation is different,
MẍN = Nk(xN−1 − xN).
The spring is really continuous, so we would like to take the limit N → ∞. To this end, define the
displacement function x(s,t) to be the continuous function with values
x(i/N,t) = xi(t).
The argument s ranges from 0 at the left end of the spring to 1 at the right end. We’ll suppress
the t argument for brevity. Plugging this into the second equation above gives
Mẍ(1) = Nk(x(1 − 1/N) − x(1)) = k
x(1 − 1/N) − x(1)
1/N
.
Upon taking the limit N → ∞, the fraction on the right becomes a derivative, giving
Mẍ(1) = −kx′
(1)
where a prime denotes a derivative with respect to s. Similarly, in the N → ∞ limit, the quantity
N2(xi−1 + xi+1 − 2xi) becomes a second derivative (check this!), so our first equation becomes
mẍ(i/N) = kx′′
(i/N).
Rearranging a bit and defining ω0 =
p
k/M, we have shown that
m
M
ẍ(s)
ω2
0
= x′′
(s),
ẍ(1)
ω2
0
= −x′
(1).
Since we are looking for solutions where the whole spring oscillates uniformly with angular frequency
ω, we plug in the displacement x(s) = cos(ωt)f(s) for
m
M
ω2
ω2
0
f = −f′′
,
ω2
ω2
0
f(1) = f′
(1).
12

Kevin Zhou Physics Olympiad Handouts
Defining α =
p
m/M for simplicity, solving the first equation gives
f(s) ∝ sin(αωs/ω0)
which yields the expected nonlinear stretching of the spring. The second equation says
ω2
ω2
0
sin(αω/ω0) =
αω
ω0
cos(αω/ω0)
or alternatively
tan(αω/ω0) =
αω0
ω
.
This is equivalent to
tan
ω
p
k/m
!
=
√
km
Mω
.
There are generically infinitely many solutions for ω, which correspond to the infinitely many
normal modes of the spring. However, we’re concerned with the lowest-frequency mode. This is the
unique mode with αω/ω0 < π/2 where all the pieces of the spring are going in the same direction
at the same time; it is the fundamental frequency.
The transcendental equation we have here has no closed form solution, but we can approximate
it. For small α, if we Taylor expand the tangent to third order we recover the answer to the previous
problem. To see this, define ω = ω/ω0 and note that
αω +
(αω)3
3
=
α
ω
which can be simplified to
α2
3
ω4
+ ω2
− 1 = 0.
If we parametrize the frequency shift by ω2 = 1 + ϵ, then plugging in gives
α2
3
+ ϵ + (higher order terms) = 0
which tells us that
ϵ = −
α2
3
= −
m
3M
which is the same result found in part (a), to first order.
For large α, the right-hand side is large, so the tangent must be large. The lowest frequency mode
has αω ≈ π/2. In this case it’s also useful to look at all the modes, which have αω ≈ (n+1/2)π, so
ω ≈

n +
1
2

π
p
k/m.
To understand this, note that in this limit the mass M doesn’t matter; the spring acts as if it has a
free end. Hence we’ve just found the standing wave angular frequencies for longitudinal waves with
one fixed and one free end! The lowest frequency is the fundamental.
Jumping ahead a bit, we can compare this with some results from W1. The wavenumbers for
these boundary conditions are
kn =

n +
1
2

π
13

Kevin Zhou Physics Olympiad Handouts
and the wave velocity is
v =
s
Y
ρ
where Y is the Young’s modulus, and ρ is the mass density. (If this isn’t familiar, you can also
derive it using dimensional analysis.) But this wave velocity can also be written as
v =
s
kL/A
m/LA
= L
r
k
m
.
Putting these two together using ωn = vkn recovers exactly the angular frequencies we found above!
In other words, we have derived that the speed of sound is v =
p
Y/ρ.
[2] Problem 13 (PPP 77). A small bob of mass m is attached to two light, unstretched, identical
springs. The springs are anchored at their far ends and arranged along a straight line. If the bob is
displaced in a direction perpendicular to the line of the springs by a small length ℓ, the period of
oscillation of the bob is T. Find the period if the bob is displaced by length 2ℓ.
Solution. Suppose the bob is displaced by x in the perpendicular direction. Then the springs are
angled by θ ≈ x/L to their original direction, so their change in length is ∆L = L(1/cosθ − 1) ≈
Lθ2/2 ∝ x2. The potential energy is then
V (x) ∝ (∆L)2
∝ x4
so the motion is not simple harmonic. To finish, as in P1, we can write the period as
T =
Z
dx
v
∝
Z
dx
p
E − V (x)
∝
Z ℓ
0
dx
√
ℓ4 − x4
.
This integral has units of inverse length, so we must have T ∝ 1/ℓ, so the final answer is T/2.
[3] Problem 14.   W 1 0USAPhO 2015, problem A3.
[3] Problem 15.   m 1 0USAPhO 2008, problem B1.
Example 6
About how accurately can you measure g with a simple pendulum?
Solution
This simple question illustrates how rich experimental physics can be, even in elementary
settings. First, let’s think about the uncertainties in the pendulum’s length and period.
• Length: a reasonable length for an experiment is L ∼ 1m. We should use a wire, not a
string, to avoid stretching. If you measure the wire with a good ruler, you can get down
to ∆L ∼ 1mm. If you use calipers, you can get ∆L ∼ 0.1mm. Assuming the latter gives
a fractional uncertainty ∆L/L ∼ 10−4.
• Period: if the length is a meter, the period will be T ≃ 2s. (This isn’t a total coincidence!
14

Kevin Zhou Physics Olympiad Handouts
17th century scientists proposed to define the standard unit of length precisely so this
would be true.) One might estimate the timing uncertainty to be given by human reaction
speed, ∆T ∼ 250ms, but this is too pessimistic, because you can see the pendulum
coming. An extensive study of manual timing at swimming competitions found a typical
spread ∆T ∼ 70ms. Moreover, since a pendulum’s motion is regular, you can “lock in”
with your sense of rhythm to do even better than this. Finally, we can let the pendulum
swing for N = 100 consecutive periods and measure the total time. These improvements
allow a timing uncertainty ∆T/(NT) ∼ 10−4.
Combining these results with the error propagation rules of P2, we can estimate ∆g/g ∼ 10−4
for a well-performed experiment. But any real experiment also has to contend with systematic
effects which can bias the results. Let’s consider and estimate a couple of them.
• The bob has finite size, so the pendulum is really a physical pendulum. We can estimate
the size of this effect by thinking about how much the bob’s size changes the pendulum’s
moment of inertia. If the bob has radius r ∼ 1cm, the change is roughly r2/L2 ∼ 10−4.
• The wire isn’t massless, so the effective length of the pendulum is less than L. If we use
a lead bob whose mass is a few kilograms, and the wire is a thin steel wire whose mass
is a few grams, the effect is roughly mwire/mbob ∼ 10−3.
• The motion has finite amplitude θ0. As we saw in P1, this changes the period fractionally
by θ2
0/16, and for an amplitude of a few degrees this is ∼ 10−3.
• The pendulum oscillates in air. This leads to two distinct effects: the buoyant force on
the bob decreases the effective value of g, and the “added mass” effect, discussed in the
solution to problem 2, increases the bob’s effective inertia. These effects shift the period in
the same direction, and they are both of order ρair/ρbob ∼ (1kg/m3)/(104 kg/m3) ∼ 10−4.
• The Earth is rotating, leading to centrifugal and Coriolis forces. The latter turns out to be
unimportant; as shown in M6, it rotates the pendulum’s plane of oscillation, rather than
shifting its period. Unless you’re conducting the experiment in Greenland or Antarctica,
the centrifugal force produces a shift of order ω2
ERE/g ∼ 10−3.
• The pendulum’s motion is slightly damped, which lengthens the oscillation period. This
factor depends on how frictionless the support is. However, if it was set up so that 100
consecutive periods can be measured, one must have quality factor Q ≳ 103. One can
show that the fractional shift in frequency is ∼ 1/Q2 ∼ 10−6.
There are plenty of other factors, but these are the most important ones, and a few of them
are larger than the uncertainty from the length and period. But the good thing is that all of
them can be calculated, and thereby subtracted out, leading to an ultimate final precision of
∆g/g ∼ 10−4. That is indeed the best precision achieved during the 1800s, through extensive
effort. For real measurements and further details, see this paper.
15

Kevin Zhou Physics Olympiad Handouts
3 Damped and Driven Oscillations
We now review damped oscillators, which we saw in M1, and consider driven oscillators. For more
guidance, see sections 4.3 and 4.4 of Morin.
[2] Problem 16. Consider a damped harmonic oscillator, which experiences force F = −bv − kx.
(a) As in M1, show that the general solution for x(t) is
x(t) = A+eiω+t
+ A−e−iω−t
and solve for the ω±.
(b) For sufficiently small b, the roots are complex. In this limit, show that by taking the real
part, one finds an exponentially damped sinusoidal oscillation. Roughly how many oscillation
cycles happen when the amplitude damps by a factor of e?
(c) For large b, the roots are pure imaginary, the position simply decays exponentially, and we
say the system is overdamped. Find the condition for the system to be overdamped.
Solution. (a) By setting up and solving a quadratic equation,
ω± =
−ib ±
√
−b2 + 4mk
−2m
=
ib
2m
±
s
k
m
−

b
2m
 2
.
(b) In this limit, we have
ω± ≈
ib
2m
±
r
k
m
in which case we have
eiω±t
≈ e−bt/2m
ei
√
k/mt
which is an exponentially damped oscillation. The time for a damping of a factor of e is 2m/b,
which occurs after
√
km/πb cycles.
(c) This occurs if
k
m
−

b
2m
 2
< 0
which implies b2 > 4mk.
[4] Problem 17. Analyzing a damped and driven harmonic oscillator.
(a) Consider a damped harmonic oscillator which experiences a driving force F = F0 cos(ωt).
Passing to complex variables, Newton’s second law is
mẍ + bẋ + kx = F0eiωt
.
If x(t) is a complex exponential, then we know that the left-hand side is still a complex
exponential, with the same frequency. This motivates us to guess x(t) = A0eiωt. Show that
this solves the equation for some A0.
16

Kevin Zhou Physics Olympiad Handouts
(b) Of course, the general solution needs to be described by two free parameters, to match the
initial position and velocity. Argue that it takes the form
x(t) = A0eiωt
+ A+eiω+t
+ A−eiω−t
where the ω± are the ones you found in problem 16.
(c) After a long time, the “transient” A± terms will decay away, leaving the steady state solution
x(t) ≈ A0eiωt
which oscillates at the same frequency as the driving. The actual position is the real part,
x(t) ≈ |A0|cos(ωt − ϕ)
where A0 = |A0|e−iϕ. Evaluate |A0| and ϕ.
(d) Sketch the amplitude |A0| and phase shift ϕ as a function of ω. Can you intuitively see they
take the values they do, for ω small, ω ≈
p
k/m, and ω large?
(e) There are several distinct things people mean when they speak of “resonant frequencies”. Find
the driving angular frequency ω that maximizes (i) the amplitude |A0|, (ii) the amplitude of
the velocity, and (iii) the average power absorbed from the driving force. (As you’ll see, these
are all about the same when the damping is weak, so the distinction between these isn’t so
important in practice.)
Solution. (a) If we plug in x = A0eiωt, we find the differential equation is satisfied if
(−mω2
+ ibω + k)A0 = F0,
which yields
A0 =
F0
(k − mω2) + ibω
.
(b) This follows from linearity. If we plug this solution in, then the first term balances the driving
term on the right-hand side. Then the other two terms need to satisfy the damped harmonic
oscillator equation with no driving, so they’re just the same as in problem 16.
(c) The answers are
|A0| =
F0
p
(k − mω2)2 + (bω)2
, tanϕ =
bω
k − mω2
.
(d) The amplitude and phase shift are shown below, for a few values of ζ = b/(2mω0), where
ω0 =
p
k/m.
17

Kevin Zhou Physics Olympiad Handouts
0 1 2 3
1
3
5
ω/ω0
k|A 0 |/F 0
maxima
ζ = 0
ζ = 0.1
ζ = 0.2
ζ = 0.3
ζ = 0.5
ζ = 1.0
0 1 2 3
0
π/2
π ϕ
ω/ω0
ζ = 0.1
This all makes physical sense. For very small frequency, we are effectively stretching the spring
statically, so the amplitude approaches a constant |A0| = F0/k, and the phase shift is zero.
For ω ≈
p
k/m, the amplitude is high because we’re driving the oscillator at the frequency it
wants to oscillate at, in the absence of driving and damping. Here, a large power is absorbed
from the driving force, and since P = Fv, that means F and v must be approximately in
phase, so the phase shift between F and x is 90◦. Finally, for high frequencies, the amplitude
goes to zero because the mass doesn’t have time to move far before the force turns around.
In this case, the driving force is always the largest force acting on the mass, so F and a are
in phase, so the phase shift between F and x is 180◦.
(e) First, to find the maximum |A0|, it suffices to minimize the square of its denominator. Setting
the derivative of that quantity to zero gives
2b2
ω = 2(k − mω2
)(2mω)
which can be solved to yield
ω =
p
k/m − b2/2m2.
The amplitude of the velocity is
v0 = ω|A0| =
F0ω
p
(k − mω2)2 + (bω)2
=
F0
p
(k/ω − mω)2 + b2
which is clearly maximized when ω =
p
k/m. Finally, the rate of power dissipation is
P = F(t)v(t) = −F0v0 cos(ωt)sin(ωt − ϕ) = F0v0 cos(ωt)cos(ωt + (π/2 − ϕ)).
18

Kevin Zhou Physics Olympiad Handouts
As we’ve just seen, v0 is maximized at ω =
p
k/m. In addition, the average value of the
product of cosines is maximized when they are in phase with each other, ϕ = π/2, which
also happens when ω =
p
k/m. Therefore, the maximum average power dissipation occurs at
ω =
p
k/m.
[3] Problem 18. The quality factor of a damped oscillator is defined as Q = mω0/b, where ω0 =
p
k/m.
It measures both how weak the damping is, and how sharp the resonance is.
(a) Show that for a lightly damped oscillator,
Q ≈
total energy of the oscillator
average energy dissipated per radian
.
Then estimate Q for a guitar string.
(b) Show that for a lightly damped oscillator,
Q ≈
resonant frequency
width of resonance curve
where the width of the resonance curve is defined to be the range of driving frequencies for
which the amplitude is at least 1/
√
2 the maximum.
For more about Q, see pages 424 through 428 of Kleppner and Kolenkow.
Solution. (a) Take x = Acosω0t. In one cycle, the energy dissipated is
Z 2π/ω0
0
bv · vdt = bA2
ω0π,
so the average energy dissipated per radian is bA2ω0/2. The average energy stored is 1
2mω2
0A2,
so the ratio is mω0/b = Q.
The value of Q depends on the guitar string, but one of the strings in the middle will oscillate
at around ∼ 300Hz for a few seconds, corresponding to ∼ 104 radians, so we can roughly
estimate Q ∼ 104.
(b) We have |A0| = F0 √
m2(ω2
0−ω2)2+(bω)2
. At the edge of the range that we call the width, we have
m2
(ω2
0 − ω2
)2
+ (bω)2
= 2(bω0)2
=⇒ m(ω2
0 − ω2
) = ±bω0,
so m(ω0 + ω)(ω0 − ω) = ±bω0. We have ω ≈ ω0 (to first order), so
2mω0(ω0 − ω) = ±bω0 =⇒ 1 − ω/ω0 = ±
1
2Q
.
Thus the width is approximately ω0/Q, as desired.
The next two problems explore other ways of driving harmonic oscillators.
[2] Problem 19. Consider a pendulum which can perform small-angle oscillations in a plane with
natural frequency f. The pendulum bob is attached to a string, and you hold the other end of the
string in your hand. There are three simple ways to drive the pendulum:
19

Kevin Zhou Physics Olympiad Handouts
(a) Move the end of the string horizontally with sinusoidal frequency f′.
(b) Move the end of the string vertically with sinusoidal frequency f′.
(c) Apply a quick rightward impulse to the bob with frequency f′.
In each case, for what value(s) of f′ can the amplitude become large? (This question should be
done purely conceptually; don’t write any equations, just visualize it!)
Solution. (a) In the frame of the string, this is a sinusoidal horizontal (fictitious) force, so it’s
just the same kind of sinusoidal driving we saw above. Resonance happens when f′ ≈ f.
(b) In this case, there is a sinusoidal vertical force by the same reasoning. Resonance can happen
when f′ ≈ 2f, in which case gravity is weaker whenever the bob is moving up and stronger
whenever it is moving down.
(c) This works as long as the impulse always comes when the object is moving to the right, i.e. in
the same phase of the object’s oscillation. This happens as long as the impulse’s period is an
integer multiple of the object’s period, so f′ ≈ f/n.
[5] Problem 20.   r 1 0GPhO 2016, problem 1. Note that this problem requires using the official answer
sheet.
4 Normal Modes
Idea 4: Normal Modes
A system with N degrees of freedom has N normal modes when displaced from equilibrium.
In a normal mode, the positions of the particles are of the form xi(t) = Ai cos(ωt + ϕi).
That is, all particles oscillate with the same frequency. Normal modes can be either guessed
physically, or found using linear algebra as explained in section 4.5 of Morin.
The general motion of the system is a superposition of these normal modes. So to compute
the time evolution of the system, it’s useful to decompose the initial conditions into normal
modes, because they all evolve independently by linearity.
Example 7
Two blocks of mass m are connected with a spring of spring constant k and relaxed length
L. Initially, the blocks are at rest at positions x1(0) = 0 and x2(0) = L. At time t = 0, the
block on the right is hit, giving it a velocity v0. Find x1(t) and x2(t).
Solution
The equations of motion are
m ¨ x1 = k(x2 − x1 − L)
m ¨ x2 = k(x1 + L − x2).
The system must have two normal modes. The obvious one is when the two masses oscillate
20

Kevin Zhou Physics Olympiad Handouts
oppositely, x1 = −x2. The other one is when the two masses move parallel to each other,
x1 = x2, and this normal mode formally has zero frequency. The initial condition is the
superposition of these two modes.
We can show this a bit more formally. Define the normal mode amplitudes u and v as
x1 =
u − v
2
, x2 =
u + v
2
.
Solving for u and v, we find
u = x1 + x2, v = x2 − x1.
Using the equations of motion for x1 and x2, we have the equations of motion
ü = 0, mv̈ = −2k(v − L)
which just verifies that the normal modes are independent, with angular frequency zero and
ω =
p
2k/m respectively. We can fit the initial condition if
u(0) = L, v(0) = L, u̇(0) = v0, v̇(0) = v0.
The normal mode amplitudes are then
u(t) = L + v0t, v(t) = L +
v0
ω
sinωt.
Plugging this back in gives
x1(t) =
v0t
2
−
v0
2ω
sinωt, x2(t) = L +
v0t
2
+
v0
2ω
sinωt.
Each mass is momentarily stationary at time intervals of 2π/ω, though neither mass ever
moves backwards. If you didn’t know about normal modes, you could also arrive at this
conclusion by playing around with the equations; you could see that they decouple when you
add and subtract them, for instance.
[3] Problem 21 (Morin 4.10). Three springs and two equal masses lie between two walls, as shown.
The spring constant k of the two outside springs is much larger than the spring constant κ ≪ k of
the middle spring. Let x1 and x2 be the positions of the left and right masses, respectively, relative
to their equilibrium positions. If the initial positions are given by x1(0) = a and x2(0) = 0, and if
both masses are released from rest, show that
x1(t) ≈ acos((ω + ϵ)t)cos(ϵt), x2(t) ≈ asin((ω + ϵ)t)sin(ϵt)
where ω =
p
k/m and ϵ = (κ/2k)ω. Explain qualitatively what the motion looks like. This is an
21

Kevin Zhou Physics Olympiad Handouts
example of beats, which result from the superposition of two oscillations of nearly equal frequencies;
we will see more about them in W3.
Solution. The equations of motion are
mẍ1 = −kx1 − κ(x1 − x2)
mẍ2 = −kx2 − κ(x2 − x1).
Again define y1 = x1 + x2 and y2 = x1 − x2. Adding and subtracting the two EOMs tells us that
mÿ1 = −ky1
mÿ2 = −(k + 2κ)y2.
The initial conditions are y1(0) = y2(0) = a and ẏ1(0) = ẏ2(0) = 0. The solution is
y1(t) = acos(
p
k/mt)
y2(t) = acos(
p
(k + 2κ)/mt).
Solving for x1 and x2, we see that
x1(t) = acos
p
k/m +
p
(k + 2κ)/m
2
t
!
cos −
p
k/m +
p
(k + 2κ)/m
2
t
!
x2(t) = asin
p
k/m +
p
(k + 2κ)/m
2
t
!
sin −
p
k/m +
p
(k + 2κ)/m
2
t
!
.
The result follows from the binomial theorem, which tells us that
p
k/m +
p
(k + 2κ)/m
2
≈ ω + ϵ, −
p
k/m +
p
(k + 2κ)/m
2
≈
p
k/m
κ/k
2
= ϵ.
We have an envelope curve of acos(ϵt) and asin(ϵt), and a very high frequency oscillation that
matches the envelope. What this looks like is energy gradually sloshing back and forth between the
masses. If the second mass begins still, it will gradually pick up energy, until the first mass becomes
still. Then the process repeats in reverse.
Note that without the weak spring in the middle, we would have two normal modes of equal
frequency, while adding the spring causes the frequencies to split apart. This is a very common
phenomenon in physics, known as “avoided crossing”. For this reason, you will rarely see two acoustic
modes of exactly equal frequency in a room, or two electromagnetic modes of equal frequency inside
a conducting cavity, or two quantum states of the same energy, unless there’s a symmetry at play.
[3] Problem 22 (KK 10.11). Two identical particles are hung between three identical springs.
Neglect gravity. The masses are connected as shown to a dashpot which exerts a force bv, where v
is the relative velocity of its two ends, which opposes the motion.
22

Kevin Zhou Physics Olympiad Handouts
(a) Find the equations of motion for x1 and x2.
(b) Show that the equations of motion can be solved in terms of the variables y1 = x1 + x2 and
y2 = x1 − x2.
(c) Show that if the masses are initially at rest and mass 1 is given an initial velocity v0, the
motion of the masses after a sufficiently long time is
x1(t) = x2(t) =
v0
2ω
sinωt
and evaluate ω.
Solution. (a) The equations of motion are
Mẍ1 = −kx1 − k(x1 − x2) − b(ẋ1 − ẋ2),
Mẍ2 = −kx2 − k(x2 − x1) − b(ẋ2 − ẋ1).
(b) Adding the two tells us that
Mÿ1 = −ky1
and subtracting tells us that
Mÿ2 = −3ky2 − 2bẏ2.
(c) Let us solve for y1. The initial condition is y1(0) = 0 and ẏ1(0) = v0. Thus,
y1(t) =
v0
ω0
sin(ω0t)
where ω0 =
p
k/M. After a very long time, y2 goes to 0, since it is damped. Thus, after a
long time we have x1 = x2 = y1/2, giving
x1 = x2 =
v0
2ω0
sin(ω0t)
for ω = ω0.
Example 8
Three identical masses are connected by three identical springs, forming an equilateral triangle
in equilibrium. Describe the normal modes of the system.
Solution
Let the system be confined to the xy plane. Then there are three masses that each can move
in two dimensions, giving six degrees of freedom. Since we must be able to construct the
general solution by superposing normal modes, there should be six normal modes. They are:
• Uniform translation. This yields two independent normal modes, as you can superpose
motion in any two distinct directions (e.g. along the x and y axes) to get motion in any
direction. These modes have zero frequency, since sin(ωt) ∝ t in the limit ω → 0.
• Uniform rotation about the axis of symmetry.
23

Kevin Zhou Physics Olympiad Handouts
• A “breathing” motion where the whole triangle expands and contracts.
• A “scissoring” motion where one mass moves outward and the other two move inward.
You might think there are three scissoring normal modes, but they are redundant: just
like how the three sides of the equilateral triangle lie in a plane, these three normal modes
formally lie in a plane, in the sense that you can superpose any two of them to get the
third. So there are two independent scissoring modes.
Thus we have six normal modes, as expected. If the system can move in three-dimensional
space, we need three more; they are uniform translation in the z direction, and rotation
about the x and y axes.
[5] Problem 23 (Morin 4.12, IPhO 1986). N identical masses m are constrained to move on a
horizontal circular hoop connected by N identical springs with spring constant k. The setup for
N = 3 is shown below.
(a) Find the normal modes and their angular frequencies for N = 2.
(b) Do the same for N = 3.
(c) ⋆ Do the same for general N. (Hint: the normal modes you found in part (a) should have
each mass oscillating with unit amplitude, but a different phase. Try to write the normal
modes in part (b) in the same form, and then guess a pattern.)
(d) If one of the masses is replaced with a mass m′ ≪ m, qualitatively describe how the set of
frequencies changes.
(e) Now suppose the masses alternate between m and m′ ≪ m. Qualitatively describe the set of
frequencies.
Part (c) will be useful in X1, where we will quantize the normal modes found here.
Solution. (a) Let the positions of the masses along the circle be x1 and x2. Then
mẍ1 = −k(2x1 − 2x2), mẍ2 = −k(2x2 − 2x1).
Adding and subtracting these equations and letting ω0 =
p
k/m gives
ẍ1 + ẍ2 = 0, ẍ1 − ẍ2 = −4ω2
0(x1 − x2)
which tells us the normal mode angular frequencies are zero and 2ω0. These correspond to
the masses uniformly rotating around the circle together, and to the two moving oppositely.
24

Kevin Zhou Physics Olympiad Handouts
(b) Defining quantities analogously to part (a), we have
ẍ1 = −ω2
0(2x1 − x2 − x3), ẍ2 = −ω2
0(2x2 − x1 − x3), ẍ3 = −ω2
0(2x3 − x1 − x2).
If we subtract the first two equations, we get
ẍ1 − ẍ2 = −3ω2
0(x1 − x2)
which gives a normal mode with angular frequency
√
3ω0, where the first two masses move
oppositely and the third doesn’t move at all. The same happens if we subtract the first and
third equation, and second and third equation. Finally, if we add all three equations, we get
ẍ1 + ẍ2 + ẍ3 = 0
which gives a normal mode with zero frequency: all the masses translate uniformly. Therefore,
the normal mode angular frequencies are zero and
√
3ω0.
Strangely, it seems like we have four normal modes even though there are only three masses!
The reason is that the first three we found are redundant: if you sum any two of them, you
get the third. So there are two normal modes with angular frequency
√
3ω0.
(c) Following the hint, let’s try to express the normal modes in part (b) in a manifestly symmetric
way. We generalize the xi to complex numbers (with the real part standing for the physical
displacement) and impose symmetry by demanding that all of them have unit magnitude,
x1(t) = ei(ωt+φ1)
, x2(t) = ei(ωt+φ2)
, x3(t) = ei(ωt+φ3)
.
To fix these arbitrary phases, note that the equations of motion are symmetric under cyclically
shifting the masses, 1 → 2 → 3 → 1. So if the differences between adjacent phases are uniform,
φ3 − φ2 = φ2 − φ1 = φ1 − φ3 = ϕ
then if one equation is satisfied, all three are automatically satisfied. This is only possible if
3ϕ is a multiple of 2π, so that we have
ϕ ∈ {0,2π/3,4π/3}.
In the case ϕ = 0, the first equation becomes
ω2
= ω2
0(2 − 1 − 1) = 0
where we cancelled an overall, irrelevant factor of eiφ1. Of course, this is just the normal mode
where all the masses translate uniformly. For ϕ = 2π/3, we get
ω2
= ω2
0(2 − e2πi/3
− e4πi/3
) = 3ω2
0
and we find the same angular frequency for ϕ = 4π/3. These are the two other normal modes.
The pattern should now start to appear. For the general case, we have
ẍj = −ω2
0(2xj − xj−1 − xj+1), j = 1,2,...N
25

Kevin Zhou Physics Olympiad Handouts
and we may again guess uniform phase differences between adjacent masses,
xj = eiωt
eiϕj
, ϕ =
2πn
N
for an integer 0 ≤ n < N. Plugging this in, each equation of motion gives
ω2
= ω2
0(2 − e−iϕ
− eiϕ
)
which is equivalent to
ω = 2ω0 sin

ϕ
2

= 2ω0 sin
 πn
N

.
For n = 0,...,N − 1, these are the normal mode angular frequencies.
As an aside, for N ≫ 1 we can visualize the normal modes as waves propagating around the
circle. As we’ll discuss further in W1, the wavenumber k is the rate at which the phase varies
around the circle, so it is proportional to ϕ. Note that for n ≪ N, we have ω ∝ ϕ as well.
This indicates that waves built out of only normal modes with n ≪ N travel with constant
velocity v = ω/k, and hence satisfy the ideal wave equation. In general, systems that satisfy
the ideal wave equation often appear in the low n/N limit of a system with many discrete
parts. We’ll see these points in more detail in W1.
You might be wondering why the guess xj = eiωt eiϕj works. As we’ve discussed above, guessing
a complex exponential eiωt is the general technique when dealing with linear equations with
time translation symmetry. Similarly, in this problem we considered linear equations with a
discrete spatial translational symmetry, i.e. the equations stay the same upon substituting
j → j+1. So by the same logic, the general technique must be to guess a complex exponential
in j, which is precisely the eiϕj factor.
(d) When we add the one light mass, it adds a new normal mode with angular frequency
p
2k/m′,
where the light mass oscillates back and forth and nothing else moves. The band of angular
frequencies from zero to 2ω0 barely changes.
(e) Naively, if we turn half the masses into light masses, we get N/2 modes with angular frequency p
2k/m′, consisting of each light mass oscillating independently. But this isn’t right, because
we must take sinusoidal combinations of these modes to get normal modes, by the same logic
as we used in the previous parts. This broadens the normal mode angular frequencies into a
band centered around
p
2k/m′. Meanwhile, for the low-frequency modes, the heavy masses
can’t even see the light masses, so it’s as if every spring has been doubled in length. We hence
have a second band of normal modes with angular frequencies centered on
p
k/2m, which is
nonoverlapping if m′ ≪ m.
This idea of normal mode frequencies filling dense but separated bands is crucial in solid state
physics. The result of part (d) shows how “defects” in a solid can lead to isolated energy
levels, outside the bands. For further discussion, see this paper.
[4] Problem 24. [A] In this problem, you will analyze the normal modes of the double pendulum,
which consists of a pendulum of length ℓ and mass m attached to the bottom of another pendulum,
of length ℓ and mass m. To solve this problem directly, one has to compute the tension forces in
the two strings, which are quite complicated. A much easier method is to use energy.
26

Kevin Zhou Physics Olympiad Handouts
(a) Parametrize the position of the pendulum in terms of the angle θ1 the top string makes with
the vertical, and the angle θ2 the bottom string makes with the vertical. Write out the kinetic
energy K and the potential energy V to second order in the θi and ˙ θi.
(b) The Euler–Lagrange equations for the system are
d
dt
∂K
∂ ˙ θi
= −
∂V
∂θi
.
Using the results of part (a), write these equations in the form

¨ θ1
¨ θ2

= −
g
ℓ
A

θ1
θ2

where A is a 2 × 2 matrix. This is a generalization of θ̈ = −gθ/ℓ for a single pendulum.
(c) Find the normal modes and their angular frequencies, using the general method in section 4.5
of Morin.
For larger deviations, the double pendulum can become chaotic. For a beautiful visualization of
both the chaotic behavior and the “islands of stability” within, see this video.
Solution. (a) To second order, the horizontal displacements of the masses are
x1 = ℓθ1, x2 = ℓ(θ1 + θ2)
which gives a kinetic energy of
K =
mℓ2
2
(( ˙ θ1)2
+ ( ˙ θ1 + ˙ θ2)2
).
The vertical displacements are
y1 = ℓ(1 − cos(θ1)), y2 = ℓ(2 − cos(θ1) − cos(θ2))
and expanding the cosines to second order gives
y1 =
ℓ
2
θ2
1, y2 =
ℓ
2
(θ2
1 + θ2
2)
which gives a potential energy of
V =
mgℓ
2
(2θ2
1 + θ2
2).
(b) The resulting Euler–Lagrange equations are
2 ¨ θ1 + ¨ θ2 = −
2g
ℓ
θ1, ¨ θ1 + ¨ θ2 = −
g
ℓ
θ2.
Solving the system, we find
A =

2 −1
−2 2

straightforwardly.
27

Kevin Zhou Physics Olympiad Handouts
(c) We must find the eigenvalues of the matrix, which obey the equation
(2 − λ)2
− 2 = 0
which implies λ = 2 ±
√
2. The normal mode amplitudes are
high frequency :

1
−
√
2

, low frequency :

1 √
2

and the angular frequencies are ω2
± = (g/ℓ)(2 ±
√
2).
Remark
We mostly considered examples with two or three masses, but the techniques above work for
systems with arbitrarily many degrees of freedom. However, this quickly becomes intractable
unless the setup is highly symmetric, as in problem 23. Without such symmetry, a computer
is generally necessary, so this sort of question won’t appear on standard Olympiads. However,
if you’re curious, see ITPO 2016, problem 1 and Physics Cup 2021, problem 3 for examples.
5 [A] Adiabatic Change
Idea 5
When a problem contains two widely separate timescales, such as a fast oscillation superposed
on a slow overall motion, one can solve for the fast motion while neglecting the slow motion,
then solve for the slow motion by replacing the fast motion with an appropriate average.
Example 9: MPPP 21
A small smooth pearl is threaded onto a rigid, smooth, vertical rod, which is pivoted at
its base. Initially, the pearl rests on a small circular disc that is concentric with the rod,
and attached to it a distance d from the rotational axis. The rod starts executing simple
harmonic motion around its original position with small angular amplitude θ0.
What angular frequency of oscillation is required for the pearl to leave the rod?
28

Kevin Zhou Physics Olympiad Handouts
Solution
The reason the pearl leaves the rod is that the normal force rapidly varies in direction, with
an average upward component. If this average upward force is greater than gravity, the pearl
accelerates upward and leaves the rod.
In this case, the fast motion is the oscillation of the rod, while the slow motion is the rate of
change of the pearl’s distance from the pivot, which can be neglected during one oscillation.
The pearl has horizontal displacement and acceleration
x(t) = −dsinθ ≈ −dθ(t) = −θ0dsinωt, ax(t) = θ0ω2
dsinωt.
This is supplied by the horizontal component of the normal force. The vertical component is
Ny = Nx tanθ(t) ≈ max(t)θ(t) = mθ2
0ω2
dsin2
ωt.
Now we average over the fast motion to understand the slow motion. Since the average value
of sin2
(ωt) is 1/2, the condition for the pearl to go up is
1
2
mθ2
0ω2
d > mg
which gives
ω >
1
θ0
r
2g
d
.
Example 10
A mass m oscillates on a spring with spring constant k = k0 with amplitude A0. Over a very
long period of time, the spring smoothly and continuously weakens until its spring constant
becomes k = k0/2. Find the new amplitude of oscillation.
Solution
In this case the fast motion is the oscillation of the mass, while the slow motion is the
weakening of the spring. We can solve the problem by considering how the energy changes
in each oscillation, due to the slight decrease in k.
Suppose that the spring constant drops in one instant by a factor of 1 − ϵ. Then the kinetic
energy stays the same, while the potential energy drops by a factor of 1−ϵ. Since the kinetic
and potential energy are equal on average, this means that if the spring constant gradually
decreases by a factor of 1 − x over a full cycle, with x ≪ 1, then the energy decreases by a
factor of 1 − x/2.
The process finishes after N oscillations, where (1 − x)N ≈ e−Nx = 1/2. At this point, the
energy has dropped by a factor of (1 − x/2)N ≈ e−Nx/2 = 1/
√
2. Since the energy is kA2/2,
the new amplitude is 4
√
2A0.
Amazingly, the question can also be solved in one step using a subtle conserved quantity.
29

Kevin Zhou Physics Olympiad Handouts
Solution
Sinusoidal motion is just a projection of circular motion. In particular, it’s equivalent
to think of the mass as being tied to a spring of zero rest length attached to the origin,
and performing a circular orbit about the origin, with the “actual” oscillation being the x
component. (This is special to zero-length springs obeying Hooke’s law, and occurs because
the spring force −kx = −k(x,y) has its x-component independent of y, and vice versa.)
Since the spring constant is changed gradually, the orbit has to remain circular. Then angular
momentum is conserved, and we have
L ∝ vr = ωA2
∝
√
kA2
.
Then the final amplitude is 4
√
2A0 as before.
Both of these approaches are tricky. The energy argument is very easy to get wrong, while the
angular momentum argument seems to come out of nowhere and is inapplicable to other situations.
But the formal angular momentum here turns out to be a special case of a more general conserved
quantity, which is useful in a wide range of similar problems.
Idea 6: Adiabatic Theorem
If a particle performs a periodic motion in one dimension in a potential that changes very
slowly, then the “adiabatic invariant”
I =
I
pdx
is conserved. This integral is the area of the orbit in phase space, an abstract space whose
axes are position and momentum.
Solution
Since the potential changes slowly, the energy is roughly conserved in each oscillation cycle,
E =
p2
2m
+
1
2
kx2
.
Thus, within one oscillation cycle, the curve p(x) traces out an approximate ellipse in phase
space, with semimajor and semiminor axes of
√
2mE and
p
2E/k. Over the course of many
oscillations, the energy changes, but the area of this ellipse is the adiabatic invariant,
I =
I
pdx = π
√
2mE
p
2E/k = 2πE
r
m
k
∝ A2
√
km.
Thus, A ∝ k−1/4 in an adiabatic change of k, recovering the answer found earlier.
30

Kevin Zhou Physics Olympiad Handouts
Remark
The existence of the adiabatic invariant is hard to see in pure Newtonian mechanics, but
it falls naturally out of Hamiltonian mechanics, which is built on phase space. In fact,
Hamiltonian mechanics makes a lot of useful facts easier to see, which is why it’s the most
commonly used foundation for introducing quantum mechanics. It is commonly introduced
at the end of an undergraduate upper-division mechanics course, and therefore beyond the
Olympiad syllabus. If you’d like to learn more about Hamiltonian mechanics, or just see
how the adiabatic theorem is derived, see David Tong’s lecture notes.
The conservation of the adiabatic invariant has important consequences throughout physics.
As we’ll see in problem 25 and in X1, it ensures that the conditions which determine
energy levels in quantum mechanics remain true as a system is changed. As we’ll discuss
in R3, the adiabatic invariant is also useful to analyze the motion of charges in magnetic fields.
It’s also closely connected to adiabatic processes in thermodynamics. You’ve probably heard
that an adiabatic thermodynamic process has to be fast, so that no heat exchange can
happen. But the more fundamental definition is that it’s slow, relative to the dynamics of the
particles. In this case, the conservation of the adiabatic invariant for each particle implies the
conservation of the entropy of the gas. That’s because, as we’ll discuss in T2, the entropy
fundamentally measures the volume of phase space that the system can occupy.
[3] Problem 25. Consider a pendulum whose length adiabatically changes from L to L/2.
(a) If the initial (small) amplitude was θ0, find the final amplitude using the adiabatic theorem.
(b) Give a physical interpretation of the adiabatic invariant.
(c) When quantum mechanics was being invented, it was proposed that the energy in a pendulum’s
oscillation was always a multiple of ℏω, where ω is the angular frequency. At the first Solvay
conference of 1911, Lorentz asked whether this condition would be preserved upon slow changes
in the length of the pendulum, and Einstein said yes. Reproduce Einstein’s analysis.
Solution. (a) Using the small angle approximation, we have
E =
1
2
mv2
+
1
2
mgLθ2
and the adiabatic invariant is
I
pdx = L
I
pdθ = mL
I
v dθ.
On the other hand, from conservation of energy, we know that v(θ) is an ellipse with semimajor
and semiminor axes
p
2E/m and
p
2E/mgL, so
I
pdx ∝ mL
p
E/m
p
E/mgL = E
s
L
g
.
The total energy is E = mgLθ2
0/2, so
I
pdx ∝ θ2
0L3/2
g1/2
31

Kevin Zhou Physics Olympiad Handouts
which implies that when L halves, the amplitude becomes 23/4θ0. Since we kept track of
factors of g, this derivation also tells us what happens to the amplitude if g is slowly changed.
The most famous literary example of a pendulum with changing length appears in Edgar
Allan Poe’s short story, The Pit and the Pendulum. In the story, the narrator is strapped to
a table, and sees a pendulum above him slowly moving and lengthening, bringing its razor
edge toward him. Poe describes the pendulum’s amplitude as initially small, but “increasing
inexorably”. Ths is partly true. We found above that the angular amplitude scales as L−3/4,
so the linear amplitude scales as L1/4, and the max speed scales as ωL1/4 ∝ L−1/4. But then
if the pendulum starts by moving harmlessly slowly, it just gets even slower.
(b) As for the case of a mass on a spring, we can add a third dimension and let the pendulum
oscillate in a horizontal circle. Then the adiabatic invariant is simply
I
Lz dθ = 2πLz ∝ Lz
which is the angular momentum in the z-direction.
(c) Given the way we did part (a), this is immediate. The adiabatic invariant is
E
s
L
g
=
E
ω
.
Therefore, E/ω remains an integer multiple of ℏ under adiabatic change.
[4] Problem 26. A block of mass M and velocity v0 to the right approaches a stationary puck of
mass m ≪ M. There is a wall a distance L to the right of the puck.
(a) Assuming all collisions are elastic, find the minimum distance between the block and the wall
by explicitly analyzing each collision. (Note that it does not suffice to just use the adiabatic
theorem, because it applies to slow change, while the collisions are sharp. Nonetheless, you
should find a quantity that is approximately conserved after many collisions have occurred.)
(b) Approximately how many collisions occur before the block reaches this minimum distance?
(c) The adiabatic index γ is defined so that PV γ is conserved during an adiabatic process. In one
dimension, the volume V is simply the length, and P is the average force. Using the adiabatic
theorem, infer the value of γ for a one-dimensional monatomic gas.
Solution. (a) Let the speeds of the block and puck be v and w. Every collision, w increases by 2v.
If the block is a distance x from the wall, then a collision happens in time 2x/w. Therefore,
we have
∆w
∆x
=
2v
−2xv/w
= −
w
x
.
Because m ≪ M, many collisions happen. After many collisions have happened, w will be
very large, so in the next collision, ∆x will be small compared to x, and ∆w will be small
compared to w. In this case, we can approximate the finite differences with a derivative,
giving
dw
dx
≈ −
w
x
.
32

Kevin Zhou Physics Olympiad Handouts
Separating and integrating shows that wx is conserved. We could also have arrived at this by
the adiabatic theorem,
I =
I
pdx = mw(2x) ∝ wx.
However, in the earlier collisions (∆w)/w and (∆x)/x aren’t small, so this reasoning is invalid.
For instance, wx is zero before the first collision and nonzero right after it. Thus, we must
treat the first few collisions manually. Right before the second collision, we have
w ≈ 2v0, x ≈ L/3
by one-dimensional kinematics. Right before the third collision we have
w ≈ 4v0, x ≈ L/5
where for these early few collisions we are treating v as constant since m ≪ M. It is not hard
to show that right before collision n+1, we have w ≈ 2nv0 and x ≈ L/(2n+1), which means
that after many (but not too many collisions) we have wx ≈ Lv0. Then, for future collisions,
wx stays at this value.
The block turns around when the puck has all its energy, so
1
2
Mv2
0 =
1
2
mw2
.
Plugging in wx = Lv0 and solving for x gives the solution, x = L
p
m/M.
(b) At each collision we have ∆w = 2v, and energy conservation gives
v2
+
m
M
w2
= v2
0.
Therefore, the number of collisions is approximately
n ≈
Z v0
√
M/m
0
dw
2v
=
1
2
Z v0
√
M/m
0
dw
p
v2
0 − (m/M)w2
=
1
2
r
M
m
Z 1
0
dx
√
1 − x2
=
π
4
r
M
m
.
Note that we didn’t need to separate out the first few collisions here, even though the approx-
imation as an integral technically doesn’t work, because they’re just that not important for
calculating the total number of collisions, which is large. The appearance of π in this result
has a nice geometric interpretation, as explained here.
(c) The analogue of pressure in one dimension is just force. The average force exerted by the
puck, which we now think of as a gas molecule, is
F =
∆p
∆t
=
2mw
2x/w
=
mw2
x
.
Meanwhile, the analogue of volume is one dimension is simply x. Then the conservation of
wx says that Fx3 is conserved, which means γ = 3. This is exactly what we would expect for
a one-dimensional gas, where Cv = kB/2 and Cp = 3kB/2.
33

Kevin Zhou Physics Olympiad Handouts
[3] Problem 27. A block of mass m is bouncing back and forth in a box spanning 0 < x < L, with
initial speed v0. At time t = 0, the potential energy is slowly raised in part of the box, so that
V (x,t) =
(
V0 0 < x < ut
0 ut < x < L
where V0 > mv2
0/2, and the speed of the potential u is very small. At time t = L/u, when the
potential covers the entire box, what is the block’s speed?
Solution. This is a simplified version of Physics Cup 2021, problem 4. The key is to use the
adiabatic theorem. Initially, the box’s orbit in phase space is a rectangle with width ∆x = L and
∆px = 2mv0. As the potential barrier enters the box, it effectively makes it shorter. So, just as in
problem 26, the rectangle gets narrower while keeping its area the same.
The twist is that eventually, the block will gain enough energy to climb over the potential barrier;
at this point, the form of its orbit changes discontinuously, so we have to track exactly what’s going
on instead of blindly using the adiabatic theorem. Consider the moment when the block’s energy
becomes just enough to climb the potential barrier, and suppose that at this point, ut = x0. Then
the phase space orbit becomes the union of two rectangles:
1. The original, shrinking rectangle with width ∆x = L−x0 and height ∆px = 2mv0L/(L−x0).
2. A new rectangle with width ∆x = x0 and negligible height.
The added rectangle has negligible area, so the adiabatic invariant (the total phase space area)
doesn’t change! After this point, we can continue to apply the adiabatic theorem until the end
of the process. The first rectangle shrinks, until it reaches zero width, while the second rectangle
grows. At the end of the process, we are back to a single rectangle with width ∆x = L and the
same area as before, so the block ends up with the same speed as before.
In terms of Newton’s laws, what’s going on is that the moving potential barrier is initially like
a piston that does work on the block during each collision, but it also subtracts energy since the
block has to eventually climb on top of it. Evidently, these two effects perfectly cancel, thanks to
the adiabatic theorem.
[4] Problem 28 (F = ma, BAUPC). Two particles of mass m are connected by pulleys as shown.
The mass on the left is given a small horizontal velocity v, and oscillates back and forth.
(a) Without doing any calculation, which mass is higher after a long time?
(b) Compute the average tension in the leftward string over the first few cycles, where the left
mass has angular amplitude θ0 ≪ 1.
(c) Let the masses begin a distance L from the pulleys. Find the speed u of the mass which
eventually hits the pulley, at the moment it does, in terms of L and the initial amplitude θ0.
34

Kevin Zhou Physics Olympiad Handouts
Solution. (a) The mass on the right will be higher. If the masses didn’t move up or down, both
would have the same average y-component of tension. But the mass on the left also has
an x-component of tension, so its average magnitude of tension would be higher. This is a
contradiction; to make the tension constant throughout the rope the mass on the right must
rise.
(b) Let a be the acceleration of the string along its length, defined to be positive if the right mass
accelerates up. Then from considering the right and left masses, we have
ma = T − mg, ma −
mv2
r
= mg cosθ − T.
Combining these results, we have
T =
mv2
2r
+
mg(1 + cosθ)
2
where θ is the angle from the vertical. By energy conservation, the first term is mg(cosθ−cosθ0)
where θ0 is the amplitude, so
T =

1
2
+
3
2
cosθ − cosθ0

mg ≈

1 +
θ2
0
2
−
3
4
θ2

mg
where we used the small angle approximation in the second step. Since the motion is approxi-
mately simple harmonic, the average value of θ2 is θ2
0/2, so
T =

1 +
1
2
θ2
0 −
3
8
θ2
0

mg > mg
as expected.
(c) Of course, you can do this using energy conservation and the adiabatic invariant. But we can
also directly use the result of part (b) to solve it by considering forces.
As we’ve seen above,
T =

1 +
1
8
θ2

mg
where θ is the amplitude. Let x be the distance the right mass has risen. From the standpoint
of the left mass, it is simply a pendulum whose length is being adiabatically lengthened, so
by the result of problem 25, we have
Z
(T − mg)dx =
mg
8
Z 2L
L
L3/2
θ2
0
dx
x−3/2
=
mg
4
Lθ2
0

1 −
1
√
2

.
This is the net work done on the right mass, so setting this equal to mu2/2 gives
u =
θ0
2
q
(2 −
√
2)gL.
I thank Varun Rajkumar for correcting a factor of 2 in the original solution.
35
