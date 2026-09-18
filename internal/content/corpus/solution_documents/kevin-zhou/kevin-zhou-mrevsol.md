---
id: solution-document-kevin-zhou-mrevsol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-mrev-p001, kevin-zhou-mrev-p002, kevin-zhou-mrev-p006, kevin-zhou-mrev-p024, kevin-zhou-mrev-p025, kevin-zhou-mrev-p029]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/MRevSol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Mechanics Review
For some nice mechanical puzzles, see this talk and this talk. There is a total of 89 points.
1 Approximations
[2] Problem 1. At some point in your life, you might have to buy a very expensive item of price P
financed by a loan. If the loan has a monthly interest rate r ≪ 1 (e.g. r = 1% means your debt
grows by 1% per month), then it turns out you can pay it all off in N months if you pay
C =
r(1 + r)N
(1 + r)N − 1
P
per month. For example, if r = 0 then C = P/N.
(a) Find an approximation for C valid for small rN.
(b) Find an approximation for C valid for large rN.
Solution. (a) We apply the binomial approximation to the (1+r)N factors, but we have to be a
bit careful. The leading term in the denominator is order r, so if we want the first correction
in r, we need to compute the denominator to order r2. Thus,
C ≈
r(1 + rN)
(1 + rN + r2N2/2) − 1
P =
1 + rN
1 + rN/2
P
N
≈
P
N

1 +
rN
2

.
This makes sense, as when we average across the payment of the whole loan, the interest
charged per month is r(P/2).
(b) In this case, we have (1 + r)N ≈ erN ≫ 1. Then
C ≈
rerN
erN − 1
P ≈ rP
which makes sense, as most of your payment per month just goes to the interest.
2 Statics and Linear Dynamics
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

1 +
y2
0T
2κ
cos2
(
p
T/κx)

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

v2
v1

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

x2 + a
x2 + b

4

Kevin Zhou Physics Olympiad Handouts
Each finger does work until the ratio of the forces is µs/µk, and the ratio of the distances is
r = µk/µs, at which point the finger switches. Then the total work is
W = −
1
2
mgµkℓ

log

1 + r
2

+ rlog

r + r2
1 + r

+ r2
log

r2 + r3
r + r2

+ ...

which means
−
W
1
2mgµkℓ
= log

1 + r
2

+rlog(r)+r2
log(r)+r3
log(r)+... = log

1 + r
2

+
r
1 − r
log(r).
Plugging back in for r, we conclude
W =
1
2
mgµkℓ

log

2µs
µk + µs

+
µk
µs − µk
log

µs
µk

.
This is a pretty complicated expression, so let’s check it with limiting cases. Let µs = µk(1+ϵ)
where ϵ ≪ 1. The first logarithm term is O(ϵ), so
W =
1
2
mgµkℓ

1
ϵ
log(1 + ϵ) + O(ϵ)

=
1
2
mgµkℓ + O(ϵ).
This makes sense, because in this limit both fingers are sliding almost continuously, moving a
distance ℓ/2 each against a friction force µkmg/2.
[3] Problem 6. A long rope with linear mass density λ rests on a horizontal table with a small bend.
You pull the end of the rope that is near the bend with force F.
(a) Suppose that the bend is very small, so that all of the rope touching the ground is perfectly
slack (zero tension). What F is needed to pull the end of the rope with constant velocity v?
(b) Now suppose that the bend is smooth, so that pieces of the rope are gradually accelerated
from rest as they pass the bend. What force F is needed to pull the end of the rope with
constant velocity v?
(c) In both cases, what force F(t) is needed to pull the rope with constant acceleration a, if we
assume the rope starts flat and at rest at time t = 0?
Solution. (a) In this case, we can’t directly consider the energy, because the sudden acceleration
of a piece of the rope when it hits the bend is inherently inelastic. On the other hand, since
the part of the rope touching the ground is slack, there can be no horizontal forces on any
part of it, so the friction force vanishes. As a result, the only horizontal external force is the
force you exert. Note that the mass m that is moving is
m =
λx
2
where x is the total distance the end has moved. Then
dm
dt
=
λv
2
and we have
F =
dp
dt
=
dm
dt
v =
1
2
λv2
.
5

Kevin Zhou Physics Olympiad Handouts
(b) In this case, we can’t directly consider the momentum because of the friction force from the
ground. However, there are no energy losses, so we have
F =
1
v
dE
dt
=
1
v
1
2
dm
dt
v2
=
1
4
λv2
.
Of course, in reality, the true answer will be somewhere in between the results of (a) and (b),
depending on the properties of the bend.
There’s a simple reason why this answer is precisely half of the answer to part (a). We showed
in M8 that an isolated flexible chain moving with uniform speed u along its length, carrying
a constant tension T = λu2, can indefinitely maintain its shape. Now consider the rope in
a reference frame moving with speed v/2 to the right. Then the curved part of the rope is
precisely such a flexible chain, with uniform tension T = λv2/4. Therefore, the two rightward
forces on the rope, due to the pulling and the friction, are equal.
(c) Again, we can consider momentum and energy, respectively. The part of the string that’s
moving has mass and speed
m(t) =
λat2
4
, v(t) = at
so that we have
p(t) =
λa2t3
4
, E(t) =
λa3t4
8
.
In the first case, we have
F(t) =
dp
dt
=
3
4
λa2
t2
.
In the second case, we have
F(t) =
1
v
dE
dt
=
1
2
λa2
t2
.
Again, the difference comes from the friction force. (The slick argument of part (b) doesn’t
quite work anymore, since in the moving frame, the chain is accelerating along its length, so
the tension inside the curved part isn’t uniform; instead, it needs to be higher at the top.
However, the argument still shows that the tension at the bottom is λv2/4 = λa2t2/4. This
force is supplied by friction and precisely accounts for the difference between the two cases.)
[2] Problem 7.   Y 1 0INPhO 2012, problem 1.
[3] Problem 8.   Y 1 0INPhO 2018, problem 4.
[4] Problem 9. @ 1 0USA Theory Team Selection Test 2022, problem 2. A set of nice exercises.
3 Oscillations
[3] Problem 10 (NBPhO 2007). Consider a light elastic rod with fixed length ℓ. If one end of the
rod is firmly fixed, and a force F is applied to the other end of the rod, perpendicular to the rod
at the point of application, then it can be shown that the rod takes a form of a circular arc with
radius of curvature R = k/F, for a constant k. (We previously considered such objects in problem 3.)
6

Kevin Zhou Physics Olympiad Handouts
Let the rod be fixed vertically, at its bottom end, and a mass m be attached to its upper end. The
rod is initially standing up straight.
(a) Find the period of small oscillations, assuming mgℓ ≪ k.
(b) What is the maximum mass m for the configuration to be stable?
Solution. (a) Recall that when we find the period of the ordinary pendulum, we can ignore the
effect of the tension because it’s directed radially, so it’s always perpendicular to the mass’s
trajectory. We only have to care about the tangential component of gravity. This case is a
bit trickier than that, for two reasons. First, the trajectory of the mass isn’t a circle, because
the rod bends. Second, in general we need to care about both the tangential component of
gravity and the internal force of the rod.
When the rod has bent through a small total angle θ, its radius of curvature is R = ℓ/θ, so
the horizontal displacement of the mass is
∆x = R(1 − cosθ) ≈
Rθ2
2
=
ℓθ
2
.
The mass also has a small vertical displacement, but it’s proportional to θ2 and thus negligible.
So ∆x is roughly the total distance the mass has moved.
Next, we want to find the restoring force, i.e. the magnitude of the force acting on the
mass which points backwards along the mass’s trajectory. The part due to the rod itself is
k/R = kθ/ℓ. The mass’s trajectory makes a small angle of order θ to the horizontal, so the
part due to gravity is of order mgθ ≈ mgℓ/R, which is negligible by assumption.
Thus, the motion is simple harmonic with an effective spring constant of 2k/ℓ2, giving period
T = πℓ
p
2m/k.
(b) It would be confusing to do this with forces, because the directions of the forces change in a
complicated way as the rod is bent, so we instead consider the energy.
When the rod bends an angle θ, the change in the mass’s gravitational potential energy is
∆Ug = mgrsinθ − mgℓ = mgℓ

sinθ
θ
− 1

≈ −
1
6
mgℓθ2
.
On the other hand, the rod itself gains potential energy, which can be computed by considering
the work done on it. To lowest nontrivial order in θ, we have dx = ℓdθ/2 and F = kθ/ℓ, so
∆Ur ≈
Z
F dx =
Z θ
0
kθ
ℓ
ℓ
2
dθ =
1
4
kθ2
.
Note that ∆Ug is negligible when mgℓ ≪ k, which is why we were able to neglect the
gravitational force in part (a). More generally, we need to make sure the total potential energy
is a minimum at θ = 0, so we need
mgℓ
6
<
k
4
7

Kevin Zhou Physics Olympiad Handouts
which gives a maximum mass of
m =
3k
2gℓ
.
[3] Problem 11.   c 1 0INPhO 2019, problem 7. A nice data analysis problem; bring graph paper.
[5] Problem 12.   h 1 0APhO 2011, problem 2. A neat problem on “stick-slip”, which appears in many
real-world contexts; you can see it in action on a violin string here. (For some other calculations
on a similar stick-slip setup, see USAPhO 2021, problem A1.)
Solution. See the official solutions as usual. (There’s an older version of the official solutions online,
which has a factor of 2 error on the last step. The final answer should be 5.6 × 10−3 s−1.)
4 Rotation
[2] Problem 13. NBPhO 2015, problem 3.
[3] Problem 14.   ^ 1 0USAPhO 2021, problem B1. An elegant rotation problem.
[3] Problem 15 (Morin 8.24). A spherically symmetric ball of radius R initially slides without rotating
on a horizontal surface with friction. The initial speed is v0, and the moment of inertia about the
center is I = βmR2.
(a) Assuming that the normal force is always applied upward at the bottom of the ball, and
that the friction force is always applied horizontally at the bottom of the ball (but assuming
nothing about how the friction force varies), find the speed of the ball when it begins to roll
without slipping. Also, find the kinetic energy lost while sliding.
(b) Now consider the case where the friction force is standard uniform kinetic friction, f = −µkN.
Verify that the work done by friction equals the energy loss calculated in part (a).
(c) In reality, the conclusions above can be modified by “rolling resistance”. Any real material
will slightly deform when the ball rolls on it. We can crudely account for this by thinking
of the normal force as applied not at the bottom of the ball, but at a point slightly forward
from the bottom. The horizontal component of this normal force is defined to be fr = −µrNy
where Ny is the vertical normal force, and µr ≪ 1. In addition, kinetic friction is still present,
as in part (b). Under these assumptions, find the velocity of the ball once it stops slipping.
Is more or less energy lost than in part (b)?
Solution. (a) The point here is that we can relate the linear and angular impulses without having
to know how the force behaves in time. If there’s a net impulse J on the ball, the net change
in angular momentum about the center of the ball is
R
RF dt = RJ. When the ball is rolling
without slipping, v = ωR. Thus
J = mv0 − mvf = L/R = βmRω
which gives
vf =
v0
1 + β
.
The kinetic energy lost is
∆K =
1
2
mv2
0 −
1
2
mv2
f −
1
2
βmR2
ω2
=
1
2
m(v2
0 − (1 + β)v2
f) =
1
2
β
1 + β
mv2
0.
8

Kevin Zhou Physics Olympiad Handouts
(b) Here, f = −µkmg and acts for a time of t = J/f. Since the acceleration is constant,
the ball travels a distance of 1
2(v0 + vf)t while sliding. However, it will turn a distance of
Rθ = 1
2ωRt = 1
2vft in the other direction, so the relative distance traveled between the surface
of the ball and the ground is L = 1
2v0t.
∆K = fL =
1
2
v0J =
1
2
m(v0 − vf)v0 =
1
2
β
1 + β
mv2
0
as desired.
(c) Now the angular and linear accelerations are
α =
µkg
βR
, a = −(µr + µk)g
where the rolling resistance doesn’t affect the angular acceleration, because the overall normal
force always exerts no torque about the center of mass of the ball. (Note that this conclusion
would have been changed if we accounted for the deformation of the ball itself, which would
give a second, additional type of rolling resistance. Here we are assuming that the ball is much
harder than the surface it rolls on, though there are plenty of situations where the reverse is
true, such as when a bike tire rolls on concrete.)
Thus, by similar reasoning to that of part (a),
vf =
v0
1 + β(1 + µr/µk)
.
This is smaller than the result of part (a), so more energy is lost. The reason is that the
rolling resistance dissipates additional energy. Notice that even once slipping stops, rolling
resistance will continue to dissipate energy, causing the ball to eventually come to a stop.
Remark
In the early 1800s, some said it was impossible for a train engine to pull anything
heavier than the engine itself. As the argument went, the force that moves the train
forward is friction between the engine car’s wheels and the track. If the engine car has
mass M, the maximum friction force is µMg. If the rest of the train has mass M′, how-
ever, then it requires a force µM′g to get it started moving, so the train can’t start if M′ > M.
Problem 15 explains why this reasoning is wrong. The maximum forward frictional force on
the engine car wheels is determined by the coefficient of static friction µs, while the force
needed to get the rest of the train moving is determined by the coefficient of rolling friction
µr. So we only need µsM > µrM′, which is possible since µr can be very small. For steel
train wheels on steel rail, we might have µs ∼ 0.5 but µr ≲ 10−3.
On the other hand, early trains could have trouble going up inclines. This led to several
innovative concepts, such as trains propelled by atmospheric pressure or pushed by mechanical
legs. All the mechanical systems we’re familiar with today, whose design might seem obvious
at first glance, actually gradually evolved through many intermediate forms. For instance,
most people think they know how a bicycle works, but actually don’t, because it’s really
quite tricky. Accordingly, it took over a century for the modern bicycle design to evolve.
9

Kevin Zhou Physics Olympiad Handouts
[4] Problem 16 (IPhO 1998). A hexagonal pencil with mass M and side length R is pushed and
rolls down a ramp of inclination θ. For some values of θ, the pencil will roll down the plane with
some terminal speed, never losing contact with the ramp. In order to avoid a complicated moment
of inertia calculation, we will assume the cross section looks like a wheel with six equally spaced
massless spokes and no rim, with all the mass on the axle.
(a) The pencil does not speed up indefinitely, but rather reaches a steady state. Explain why, and
compute the speed the pencil’s axis has immediately after each collision, in the steady state.
(b) Find the minimum θ so that rolling spontaneously starts, without needing a push.
(c) Find the minimum θ so that, once the pencil has been pushed to start rolling, it never stops.
(d) Find the maximum θ so that a rolling pencil always remains in contact with the plane.
Solution. (a) Each time the pencil rolls through an angle π/3, a new vertex of the pencil hits
the plane. In this moment, that vertex suddenly becomes the new pivot point about which
the pencil is rotated, which means energy is dissipated in an inelastic collision. This is the
reason that the pencil reaches a steady state, instead of accelerating indefinitely. You can see
this very nicely depicted in this video.
Let the pencil’s center of mass have speed vi just before an impact, and vf just after the
impact. The impact involves a singular impact force at the new pivot point, which means
angular momentum is conserved about that point. Thus,
MviRcos60◦
= MvfR
from which we conclude
vf =
vi
2
.
In the steady state, the kinetic energy gained from rolling from one vertex to another bal-
ances the energy lost in the collision, so conserving energy immediately after a collision and
immediately before a next one gives
1
2
Mv2
f + MgRsinθ =
1
2
M(2vf)2
from which we conclude
vf =
r
2gRsinθ
3
.
By the way, the original formulation of the question gave the pencil a moment of inertia
CMR2 about its center of mass. The solution with general C is not much harder. Now the
angular momentum conservation condition is
MviRcos60◦
+ CMR2
ωi = (C + 1)MR2
ωf
where ωi = vi/R and ωf = vf/R. Thus,
vf =
2C + 1
C + 1
vi
2
.
10

Kevin Zhou Physics Olympiad Handouts
The energy balance equation for the steady state becomes
1
2
M(C + 1)v2
f + MgRsinθ =
1
2
M(C + 1)v2
i
and simplifying gives
vf =
s
2gRsinθ(C + 1/2)2
(C + 1)((C + 1)2 − (C + 1/2)2)
.
(b) This is a basic statics problem. The rolling must start if the center of mass of the hexagon is
not above its support, so the minimum angle is θ = 30◦.
(c) Between two vertex transitions, the maximum potential energy of the pencil is when the
center of mass is directly above the vertex at a height R. It will start out at a height of
h0 = Rsin(θ +60◦) above the vertex, and fall down to a height hf = Rsin(60◦ −θ) above the
vertex.
In order for it to roll indefinitely, potential energy from height R to hf followed by the inelastic
collision must leave enough kinetic energy for the pencil to go from height h0 to height R.
Earlier we found that ωf = ω0(C + 1/2)/(C + 1), so the kinetic energy will be reduced by a
factor of α = (ωf/ω0)2. Thus the energy equation for indefinite rolling is
αMg(R − hf) = Mg(R − h0).
This implies
1 − sin(θ + 60◦)
1 − sin(60◦ − θ)
= α.
In our case, α = 1/4. The solution of the above equation can be found using either binary
search or by the “plug in” method, i.e. repeatedly calculating
arcsin

1 −
1 − sin(60◦ − Ans)
4

− 60◦
.
Both methods give an answer of θ = 10.21◦.
(d) The pencil leaves the ramp when gravity isn’t strong enough to provide the needed centripetal
acceleration for the rotation about a vertex. Right before the next vertex transition, the pencil
is moving the fastest, and the radial component of gravity is the smallest, so the pencil most
readily leaves the ramp at that point. Using part (a)’s notation (ω0 is the angular velocity
right before the next transition), the leaving condition is g cos(30◦ +θ) = g sin(60◦ −θ) = ω2
0R,
where 30◦ + θ is the angle between the vertical and line connecting the center of mass to the
vertex. Using our expression for ω0 =
vf
R (C + 1)/(C + 1/2) found in part (a),
sin(60◦
− θ) =
2sinθ(C + 1)
((C + 1)2 − (C + 1/2)2)
With C = 0, we have
sin(60◦
− θ) =
8sinθ
3
.
We can binary search for the answer or repeatedly plug in
arcsin

3sin(60◦ − Ans)
8

11

Kevin Zhou Physics Olympiad Handouts
to find that the maximum angle for it to stay on the ramp is θ = 15.3◦. So the range of angles
where the rolling will never stop, but also keep the pencil on the ramp, is quite narrow!
This famous question has appeared on the IPhO, BAUPC, and Morin’s mechanics book, and papers
have even experimentally confirmed its results. For more, see the extended analysis here.
[4] Problem 17.   m 1 0USAPhO 2017, problem B1. A tough rotation problem.
[3] Problem 18.   ^ 1 0USAPhO 2021, problem B3. A cute setup with many nice lessons.
The next two questions are about three-dimensional rotation, covered in M8.
[3] Problem 19 (BAUPC). A frictionless fixed cone stands on its tip.
(a) A particle slides on the inside surface of the cone at height h above the tip, as shown at left
above. Find the angular frequency of the circular motion.
(b) Now suppose the cone has friction, and a small ring of negligible radius rolls on the surface
without slipping at the same height. Also assume that the plane of the ring is at all times
perpendicular to the line joining the point of contact and the tip of the cone, as shown at
right above. Find the angular frequency of the circular motion.
(c) How general were our assumptions in part (b)? Specifically, would the described motion had
been possible if the plane of the ring were at a different angle? Is a slightly smaller or larger
angle to the horizontal possible? Would it be possible if the ring were exactly horizontal?
Solution. (a) The centripetal force mω2htanθ is horizontal, which equals to N cosθ. The particle
must be vertically balanced, so N sinθ = mg, giving
ω2
htanθ = g cotθ
and solving for ω yields
ω = cotθ
r
g
h
.
(b) Let the ring have moment of inertia βmr2 (where β = 1) and move in a circle of radius
R = htanθ ≫ r. The no slip condition is ωr = ΩR. About the point of contact, the ring
has a horizontal angular momentum Lh = (1 + β)mr2ω sinθ, where the two terms are due to
orbital and spin angular momentum.
12

Kevin Zhou Physics Olympiad Handouts
Since τ = dL/dt, the torque about the point of contact is solely due to gravity, τ = mgrcosθ.
Using |dL|/dt = ΩLh gives
mgrcosθ = Ω(1 + β)mr2
ω sinθ.
Solving for Ω yields
Ω = cotθ
r
g
2h
.
(c) There are two constraints in this problem: force balance and torque balance. As we saw in
part (b), considering the torque of gravity about the contact point alone fixes the angular
frequency Ω of the circular motion. That in turn gives the force balance equations (vertical
force is zero, horizontal force is centripetal), and since the coefficient of friction is high enough
to prevent slipping, there’s always some combination of normal and frictional forces that
makes the problem work out. Since none of this depends very sensitively on the angle, we
could change the angle and the problem would still work.
There’s one exception: you can’t have a horizontal ring. In that case, the angular momentum
of the ring does not change at all (because it’s always spinning in a horizontal plane), so the
torque balance equation can’t be satisfied. Thus, when motorcyclists ride along the equator
of the globe of death (mentioned in M2), they always tilt a bit above the horizontal.
[3] Problem 20. Richard Feynman used to tell the following story, here reproduced verbatim.
I was in the cafeteria and some guy, fooling around, throws a plate in the air. As the
plate went up in the air I saw it wobble, and I noticed the red medallion of Cornell on
the plate going around. It was pretty obvious to me that the medallion went around
faster than the wobbling.
I had nothing to do, so I start figuring out the motion of the rotating plate. I discover
that when the angle is very slight, the medallion rotates twice as fast as the wobble rate
– two to one. It came out of a complicated equation!
I went on to work out equations for wobbles. Then I thought about how the electron
orbits start to move in relativity. Then there’s the Dirac equation in electrodynamics.
And then quantum electrodynamics. And before I knew it... the whole business that I
got the Nobel prize for came from that piddling around with the wobbling plate.
Feynman was right about quantum electrodynamics, but was he right about the plate?
Solution. For concreteness, take the angular momentum of the plate to point upward. From the
problem statement, the axis of symmetry of the plate is a small angle θ away from this direction.
L
L∥
L⊥
θ
As in M8, we decompose the angular momentum into parallel and perpendicular components, and
L∥ = L, L⊥ = θL
13

Kevin Zhou Physics Olympiad Handouts
by the small angle approximation, and hence
ω∥ =
L∥
I∥
=
L
MR2/2
, ω⊥ =
L⊥
I⊥
=
θL
MR2/4
where the last step is by the perpendicular axis theorem. Now we need to think more about the
physical motion of the plate. The component ω∥ of angular velocity parallel to the axis of rotation
is the part that makes the medallion go around,
ωmed = ω∥.
The component ω⊥ makes the orientation of the plate itself rotate. Specifically, the entire setup
drawn above rotates about the axis of L with angular velocity ωwob. Imagine the path taken by
the unit normal n̂ to the plate. The tip of this vector goes in a circle of circumference 2πθ, but the
speed of the tip of the vector is ω⊥. Therefore, the angular velocity of the vector along the circle is
ωwob =
ω⊥
θ
.
The answer to the question is
ωmed
ωwob
=
1
2
.
So it’s the opposite of what Feynman says! The wobbling actually goes twice as fast. Sometimes,
when you tell a story too many times, you forget details like this.
5 Gravity
[3] Problem 21 (Morin 5.65). Let the Earth’s radius be R, its average density be ρ, and its angular
frequency of rotation be ω. Consider a long rope with uniform mass density extending radially from
just above the surface of the Earth out to a radius ηR. Show that if the rope is to remain above
the same point on the equator at all times, then we must have
η2
+ η =
8πGρ
3ω2
.
What is the numerical value of η, and where does the tension in the rope achieve its maximum
value? This would be a “space elevator”, allowing objects to be cheaply lifted to space. But we
currently can’t build anything that could withstand the enormous tension.
Solution. The gravitational field from Earth will be
g =
4
3
GπρR3
/r2
which works with the tension to provide the centripetal acceleration ω2r. For a small piece of rope
of length dr and mass dm = µdr, force balance gives
ω2
rdm = g dm − dT
dT =
4
3
GπρµR3
r2
dr − µω2
rdr
14

Kevin Zhou Physics Olympiad Handouts
Integrating from r = R to r = ηR gives
T(ηR) − T(R) =
4
3
GπρµR2

1 −
1
η

−
1
2
µω2
R2
(η2
− 1).
At both ends of the rope, the tension must be zero since they’re not connected to anything, so
8πGρ
3ω2
η − 1
η
= (η − 1)(η + 1)
which gives
η2
+ η =
8πGρ
3ω2
= 579
and solving the quadratic numerically gives
η = 23.6.
The maximum value of the tension occurs when dT/dr = 0, which is when
r3
=
4πGρR3
3ω2
, r = R

4πGρ
3ω2
 1/3
= 6.62R.
This radius has a physical meaning: since the gravitational and centrifugal forces on a piece of mass
balance here, it’s the radius where a satellite can stay in geostationary orbit.
[2] Problem 22 (Morin 10.7). A puck slides with a small speed v on frictionless ice. The surface
is “level” in the sense that it is orthogonal to geff at all points, where geff includes the centrifugal
acceleration. Show that the puck moves in a circle, as seen in the Earth’s rotating frame. Find
its radius and the angular frequency and direction of the motion, in terms of the Earth’s angular
velocity ω0 and the latitude ϕ of the puck.
Solution. Since the surface is level with gravity and the centrifugal acceleration, the normal force
will cancel out the effects from those, so the only remaining force is the Coriolis force −2mω0 × v.
The component of Earth’s angular velocity normal to the ground at latitude ϕ is Ωsinϕ, so
2ω0v sinϕ = v2
/r, r =
v
2ω0 sinϕ
, ω = 2ω0 sinϕ.
The puck will travel clockwise in the Northern hemisphere and counterclockwise in the Southern
hemisphere. (You might wonder why this is opposite the direction hurricanes turn. The difference
is that in a hurricane, the center has low pressure, and the Coriolis force provides a outward force
which opposes the inward pressure force, so that the system doesn’t immediately collapse. By
contrast, here the Coriolis force must be inward since it is the only source of centripetal force.)
[2] Problem 23. A narrow tube is formed in the shape of ring of radius R. Initially, it is stationary
and horizontal in the lab frame. Then, it is quickly spun by 180◦ about its east-west diameter.
(a) Suppose the tube contains water, and the Earth’s rotational velocity ω makes an angle ϕ to
the vertical in the lab frame. What is the speed of the water afterward?
(b) Suppose the tube is a conductor with self-inductance L, and the Earth’s magnetic field B
makes an angle ϕ to the vertical in the lab frame. What is the current in the tube afterward?
15

Kevin Zhou Physics Olympiad Handouts
Solution. (a) This is called the Compton generator. It was invented by Compton while he was
still an undergraduate to measure the Coriolis force, and he found agreement to within 3%.
We first compute the Coriolis impulse on a small piece of the water in the tube, with mass
dm, as the ring spins around. We have
dJc = (dm)
Z
2ω × vdt = (dm)
Z
2ω × dr = (dm)2ω × ∆r
where ∆r is the total displacement of that piece of water. Since the rotation is about the
east-west axis, all the displacements are north-south, which means that only the vertical
component of ω matters. If we let θ = 0 at the easternmost point of the ring, then the
component of the impulse on this fluid element along the ring is
dJc = (2ω cosϕdm)∆r sinθ
Next, we integrate over the ring, letting θ = 0 at the easternmost point, so that
Jc = 2ω cosϕ
Z 2π
0
dθ
dm
dθ
(2Rsinθ)sinθ = 4ωRcosϕ
m
2π
π.
The final velocity is given by Jc = mvf, so that
vf = 2ωRcosϕ.
(b) This is called an Earth inductor, or Delzenne’s circle. We simply apply Faraday’s law, using
the fact that the change in magnetic flux is 2πR2B cosϕ, along with
∆Φ =
Z
E dt = LIf
to conclude that
If =
2πR2
L
B cosϕ.
This is similar in form to the answer in part (a), and the reason is that the magnetic force
v × B and the Coriolis force 2v × ω are similar. Indeed, we could have solved part (a) much
faster by thinking like the magnetic case, and computing a change in the “flux” of ω. Of
course, the analogy isn’t perfect. The fluid motion is dominated by kinetic energy, while, as
we mentioned in E5, in a typical circuit the kinetic energy of the charges is negligible, and
field energy dominates instead. Also, in a typical circuit the density of electrons is almost
perfectly uniform, while in a mechanical system the mass density can be arbitrary.
However, it can sometimes be helpful to keep this analogy in mind. If the force is the only
thing that matters, then we can often exchange magnetic and Coriolis force effects. For
example, as we discussed in E5, a superconductor in a magnetic field will produce currents
that expel that magnetic field. But since the Coriolis force has the same form, if you just
rotate a superconductor in a lab on the Earth, it will also produce currents, because the
electrons respond to the Coriolis force in the same way! This neat effect is called the London
moment.
[3] Problem 24. Consider a potential of the form V (r) = −a/rn.
16

Kevin Zhou Physics Olympiad Handouts
(a) For what n is it possible for a particle to orbit in a circle passing through the origin?
(b) For what n is it possible for a particle to spiral inward, r(θ) ∝ e−cθ for some c?
Solution. Using the effective potential results from M6, we have
1
2
m

dr
dt
 2
= E +
a
rn
−
L2
2mr2
.
We also know that
dθ
dt
=
L
mr2
and since we’re interested in the trajectory’s shape, we multiply by (dθ/dt)−2 to get
1
2
m

dr
dθ
 2
=
m2
L2

Er4
+
a
rn−4
−
L2r2
2m

.
This setup will be common to both of the parts of the problem.
(a) The equation of a circle through the origin in polar coordinates is r = bsinθ, so

dr
dθ
 2
= b2
cos2
θ = b2
− r2
.
We therefore must have, for appropriate constants E, L, and b, that
b2
− r2
=
2m
L2

Er4
+
a
rn−4
−
L2r2
2m

.
The final terms on each side cancel, so the first two terms on the right-hand side have to sum
to a constant. This is only possible if E = 0 and n = 4.
Note that the orbit can have finite L because v diverges when r goes to zero. This is a classic
problem, which was common in mechanics books in the 1800s. Technically, it’s not really
physical since the potential blows up near the origin, so the particle has to be aimed perfectly
to pass straight through it rather than get deflected through some angle, but it’s still cute.
(b) In order for this to hold, dr/dθ must be proportional to r itself, which means we must have
E = 0 and n = 2, corresponding to an inverse cube force. This odd behavior was discovered
by Cotes in the early 1700s, and the resulting shape is called a Cotes spiral.
These examples show that Kepler’s first law is nontrivial. When you go beyond the inverse square
law, you don’t just get modifications of conics, you get orbits with completely different character.
More generally, weird behaviors like these can occur when n ≥ 2, as the gravitational potential
can overwhelm the centrifugal potential barrier. In our universe, we have n = 1 because there are
d = n+2 = 3 spatial dimensions. It has been proposed that d = 3 is the only option, because d = 2
is too simple and d > 3 would not generically allow stable orbits, needed for the development of life.
[3] Problem 25. In this problem, you will explore yet another slick derivation of Kepler’s first law. As
usual, suppose the orbit lies in the xy plane. This derivation resolves around writing r(t) = r(t)r̂(θ)
where r̂ = cosθx̂ + sinθŷ, and solving a differential equation for v(θ).
17

Kevin Zhou Physics Olympiad Handouts
(a) Show that dv/dθ is proportional to r̂, times constants and conserved quantities.
(b) Integrate this result to find v(θ). What nice geometric property does it have?
(c) Plug this result into L = r × p to show that r(θ) is a conic section.
Solution. (a) Using the usual variables, we have
dv
dt
= −
GM
r2
r̂, L = mr2 dθ
dt
.
The desired quantity is
dv
dθ
=
dv
dt
dt
dθ
= −
GMm
L
r̂.
(b) Performing a straightforward integration, we find
v(θ) = −
GMm
L
(sinθ + c1,−cosθ + c2)
where c1 and c2 are constants of integration. The nice result is that v(θ) is a circle! That’s
the hidden reason why this derivation will be so quick.
(c) Carrying out the cross product, the magnitude of the angular momentum is
L = −
GMm2r
L
((cosθ)(−cosθ + c2) − (sinθ)(sinθ + c1)).
We can easily solve this to get
1
r
=
GMm2
L2
(1 + c1 sinθ − c2 cosθ).
This can be put into the standard form for a conic section by just shifting θ to get rid of the
sinθ term.
6 Fluids
[2] Problem 26 (BAUPC). Two cylindrical containers, A and B, have the same shape and contain
equal volumes of water. In addition to the water, B contains an immersed balloon, attached to the
bottom with a string. Consider the following reasoning.
The total upward force exerted by the bottom of container A is equal to the weight of
the water in A, likewise for B. Since the areas of the bottoms are the same, and the
weights of the water are the same, the pressures at the bottoms are the same.
Is this reasoning correct or incorrect? Explain your answer.
Solution. The reasoning is incorrect. As usual, the pressure depends only on the depth of the
water, which is greater for container B. The net forces still balance: the greater upward force of the
bottom on the water in container B is compensated for by the downward force of the balloon on
the water.
[4] Problem 27.   T 1 0IPhO 1997, problem 3. A simple, neat question about how a plane works.
18

Kevin Zhou Physics Olympiad Handouts
Remark
As you saw in the above problem, a plane works by having a wing angled so that air passing
next to it gets pushed downward; momentum conservation then implies there is an upward
force on the wing. Concretely, this upward force occurs because there is a higher pressure
on the bottom of the wing, which by Bernoulli’s principle means there must be a higher air
velocity on the top of the wing.
This is all standard knowledge among engineers. However, in outdated or poor physics
textbooks, an incorrect explanation is sometimes given. The story is that because the top
side of the wing is curved, the air at the top of the wing must be moving faster, so that it
can “catch up” to the air at the bottom. Then by Bernoulli’s principle there is a higher
pressure on the bottom of the wing, causing lift.
The second step of this argument is right, but the first step doesn’t make sense: there
is no reason air should want to “catch up” with the air it used to be next to. For
example, airplanes can fly upside down as long as the wing is angled the right way. In this
case, the air at the top of the wing still moves faster, but now it’s the bottom side that’s curved.
There’s much more to say about flight, which is a whole field of study. For some nice further
discussion, see section 4.6 of The Art of Insight, or this paper and this paper by the same
author. And for a perspective from a cantankerous old aerodynamicist, see this talk.
[5] Problem 28. Physics Cup 2023, problem 1.
Solution. See the official solutions here.
[3] Problem 29. [A] The Navier–Stokes equation, governing the velocity v(x,t) of an incompressible
fluid of density ρ and dynamic viscosity µ, are
∂v
∂t
+ (v · ∇)v = −
1
ρ
∇P +
µ
ρ
∇2
v.
Let’s consider a fixed fluid, with a given ρ and µ, and see how potential solutions to this equation
behave under symmetry transformations.
(a) Given a velocity v(x,t), we can define a time-reversed velocity profile v′(x,t) = −v(x,−t).
If we replace v with v′ in the above equation, then the ∂v/∂t term stays the same, because
both the sign of the velocity and the sign of the time derivative get flipped. Show that among
the other three terms, two of them stay the same and one flips sign, and interpret your result.
We can schematically describe the above transformation as “t → −t and v → −v”. Next, we’ll
consider a scaling, which simultaneously takes x → λx and t → λ2t.
(b) Find how this scaling affects v, P, time derivatives, and space derivatives.
(c) Show that under this scaling, all the terms in the Navier–Stokes equation scale as λ−n, for
some integer n. This shows that the Navier–Stokes equation has scale symmetry: if something
can happen in a fluid, then it can also happen at a scale 2 times larger and 4 times slower.
19

Kevin Zhou Physics Olympiad Handouts
Remarkably, part (c) explains why there aren’t many additional terms in the Navier–Stokes equation!
In principle there must be terms with more time or space derivatives, since the microscopic dynamics
of a fluid are very complex. However, all such terms would be suppressed by more than λ−n as
we scale a solution up, which means that they wouldn’t have any significant effect on macroscopic
scales. The Navier–Stokes equation contains precisely the terms that remain relevant.
Solution. (a) The other term on the left-hand side gets two sign flips, because it has two powers
of v. On the right-hand side, the fluid properties ρ and µ stay the same, as does the pressure
P, so the ∇P term is unchanged, while the ∇2v term flips sign. The interpretation is that
viscosity is the only effect in the equations that cares about the direction of time, because it
arises from dissipation and thus has a direction set by the second law of thermodynamics. In
the absence of viscosity, the dynamics of a fluid are time reversal symmetric.
(b) Since v is a distance per time, it must scale as v → λ−1v. The spatial derivative transforms
in the opposite way as the space: if a configuration gets stretched out, then its change per
length is smaller, so its derivative gets smaller. Thus we conclude ∇ → λ−1∇, and by similar
reasoning ∂/∂t → λ−2∂/∂t.
Pressure is the tricky one. You can find it by thinking about how pressure emerges in kinetic
theory, or by dimensional analysis: P/ρ is a speed squared, and ρ is fixed, so P → λ−2P.
(c) By plugging in our results to part (b), it’s straightforward to show n = 3.
20
