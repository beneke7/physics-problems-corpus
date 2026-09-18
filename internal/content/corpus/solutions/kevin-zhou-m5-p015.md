---
id: kevin-zhou-m5-p015
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m5-p015
solution_type: author
source_document: solution-document-kevin-zhou-m5sol
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M5Sol.pdf."
---

[2] Problem 15. A uniform stick of length L and mass M begins at rest. A massless rocket is
attached to one end of the stick, and provides a constant force F perpendicular to the stick. Find
an expression for the speed of the center of mass of the stick after a long time, in terms of a single
integral. Is this quantity finite or infinite? If finite, give a rough estimate for it.
14
Kevin Zhou Physics Olympiad Handouts
Solution. The uniform stick has moment of inertia ML2/12 about its center, and has a constant
torque of τ = FL/2 about its center. Thus if θ is the angular distance the stick has rotated, then
FL
2
=
1
12
ML2
θ̈
which implies
θ̈ =
6F
ML
, θ =
3F
ML
t2
≡ ct2
.
Let the plane of motion of the stick be the complex plane, let the initial position of the center of
mass be the origin, and let the angle between the stick and the real axis be θ + π/2 so the force
points at an angle θ. Then in the complex plane, the unit vector of the force is just eiθ, so
Ma = Feict2
.
This trick of using complex numbers allows us to write the two real components of Newton’s second
law as a single equation. We thus conclude that
|vf| =
F
M
Z ∞
0
eict2
dt .
Naively, this looks infinite because the integration range is infinite, and the integrand doesn’t go to
zero at infinity. However, as time goes on, the stick will rotate faster and faster, so the acceleration
will spin faster, so the endpoint of the velocity vector moves in tighter and tighter circles. So even
though the magnitude of the acceleration never gets smaller, the velocity does approach a finite
limit. To find this quantity, we can use dimensional analysis to get
|vf| ∼
r
FL
M
.
That’s all the problem asked for, but one can get an exact answer too. Recall from P1 that
Z ∞
0
e−(ax)2
dx =
√
π
2a
for a > 0. In our case we need a2 = −ic, but it turns out the result above still works. (The proof
of this requires some complex analysis.) We then have
M
F
vf =
Z ∞
0
eict2
dt =
Z ∞
0
e
−

±−1+i √
2
√
ct
 2
dt = ±
√
π
2(−1 + i)
p
c/2
from which we conclude the final speed is
|vf| =
F
√
π
2M
√
c
=
r
πFL
12M
.
[4] Problem 16 (KK 6.41). A plank of length 2L leans nearly vertically against a wall. All surfaces
are frictionless. The plank starts to slip downward. Find the height of the top of the plank when it
loses contact with the wall or floor.
15
Kevin Zhou Physics Olympiad Handouts
Solution. Note that the normal forces at the contact points do no work, since the plank moves in
the perpendicular directions at those points. Therefore, mechanical energy is conserved.
L
P = (x,y)
O
L
L
θ
θ
The center of mass P moves in a circle of radius L around O, and its speed is Lθ̇. Similarly, one
also sees that the plank rotates around P at angular velocity θ̇ counterclockwise. Therefore, if the
plank starts at θ0, energy conservation implies
mgL(cosθ0 − cosθ) =
1
2
mL2
θ̇2
+
1
2

1
3
mL2

θ̇2
=
2
3
mL2
θ̇2
,
so
θ̇2
=
3g
2L
(cosθ0 − cosθ).
Taking the time derivative, we obtain
2θ̇θ̈ =
3g
2L
sinθθ̇ =⇒ θ̈ =
3g
4L
sinθ.
The plank loses contact when the normal force Nx at the high point of contact vanishes. By Newton’s
second law, Nx = mẍ, so Nx = 0 when ẍ = 0. We also know that x = Lsinθ, so ẋ = Lcosθθ̇, so
ẍ = L(cosθθ̈ − sinθθ̇2). Therefore, we have
cosθθ̈ = sinθθ̇2
when contact is lost. Plugging in our earlier results, we find
3g
4L
sinθcosθ =
3g
2L
(cosθ0 − cosθ)sinθ,
or cosθ = 2
3 cosθ0, so y = 2
3y0. This implies the ladder loses contact once its top reaches 2/3 of
its original height. (For completeness, we could check that the plank actually loses contact with
the wall before losing contact with the floor. This is intuitive, but it can be checked explicitly by
computing ÿ and thereby Ny.)
There is a slick alternative solution using Lagrangian mechanics, though it’s subtle enough that
I wouldn’t recommend trying it in a competition. We note that the center of mass moves on a
circle centered at the origin, and that the total kinetic energy of the ladder is proportional to θ̇2.
In particular, we have a Lagrangian of
L =
1
2
meffL2
θ̇2
− mgLcosθ, meff =
4
3
m
16
Kevin Zhou Physics Olympiad Handouts
where the extra contribution in the first term is due to rotational kinetic energy. Multiplying the
Lagrangian by 3/4, which makes no difference to the equations of motion, we get
L =
1
2
mL2
θ̇2
− m

3g
4

Lcosθ.
However, this is simply the Lagrangian for a mass m sliding on a frictionless hemisphere in gravity
3g/4. This is a classic, simple problem, and we know in that case that the normal force with the
hemisphere vanishes at height (2/3)L.
Now, the motion of the mass in this problem is identical to the motion of the center of mass
of the ladder in the original problem, so the total external forces are the same. In particular, the
horizontal constraint force must vanish when the ladder’s center of mass is at height (2/3)L, so the
ladder loses contact with the wall at this point. On the other hand, the vertical external force must
be 3mg/4, which implies the normal force with the ground is mg/4, and hence positive; this shows
that the ladder has not lost contact with the ground.
Example 7: NBPhO 2013
A uniform ball and a uniform ring are both released from rest from the same height on an
inclined plane with inclination angle θ. They arrive at the bottom of the plane in time TB
and TR, respectively. The coefficients of friction of both objects with the plane are µk = 0.3
and µs = 0.5. Find the ratio TB/TR as a function of the angle θ.
Solution
When rolling without slipping, the acceleration of an object with moment of inertia βmR2
about its center of mass is
a =
g sinθ
1 + β
as mentioned in a previous example. The tangential force from friction is thus
f = mg sinθ
β
1 + β
which means rolling without slipping occurs when
µsmg cosθ ≥ mg sinθ
β
1 + β
or equivalently
tanθ ≤ µs
1 + β
β
.
For the ball, this is when θ ≤ 60.3◦, and for the ring θ ≤ 45◦. Whenever either object slips,
its acceleration is instead a = g(sinθ − µk cosθ).
Since the motion is uniformly accelerated, TB/TR =
p
aR/aB. For θ ≤ 45◦, both roll without
slipping, so the formula above applies, giving a ratio of
TB
TR
=
s
1 + βB
1 + βR
=
r
7
10
.
17
Kevin Zhou Physics Olympiad Handouts
For θ ≥ 60.3◦ they both slip, so the ratio is unity. For the angles in between, the ring slips,
giving a slightly more complicated expression. At the boundaries between these three regimes,
the ratio TB/TR jumps discontinuously.
The next two problems require careful thought, and test your understanding of the multiple ways
to describe rotational kinematics and dynamics. It will be useful to review idea 1.
[3] Problem 17.   m 1 0USAPhO 1999, problem B1.
[3] Problem 18.   ^ 1 0USAPhO 2019, problem B3. It’s worth reading the solution carefully afterward.
4 Rotational Collisions
Idea 7: Angular Impulse
During a collision with impulse J, the angular momentum changes by the “angular impulse”
r × J. In many problems involving collisions which conserve angular momentum, energy is
necessarily lost in the collision process. This is another example of an inherently inelastic
process, an idea we first encountered in M3.
[3] Problem 19 (Morin 8.22). A uniform ball of radius R and mass m rolls without slipping with
speed v0. It encounters a step of height h and rolls up over it.
(a) Assuming that the ball sticks to the step during this process, show that for the ball to climb
over the step,
v0 ≥
r
10gh
7

1 −
5h
7R
 −1
.
(b) Energy is lost to heat by the inelastic collision of the ball with the step. In the limit of small
h, how much heat is produced?
Solution. (a) Let β = 2/5. Once the ball collides with the corner, it momentarily rotates around
that corner, and we will first find the initial angular velocity of the rotation of the ball around
the corner. Note that angular momentum about the corner is conserved, since the only relevant
force during the very short collision time is the large force applied at the corner, so the net
torque is zero. This is an inherently inelastic process; energy is lost during this collision.
Right before the collision, the angular momentum is the sum of orbital and spin contributions,
Li = βmR2 v0
R
+ Rmv0(1 − h/R),
since the sine of the angle between p and R is 1 − h/R. Let the angular velocity about the
corner be ω. Then the final angular momentum is
Lf = (1 + β)mR2
ω,
so equating the two tells us that
Rω =
β + 1 − h/R
β + 1
v0 =

1 −
1
β + 1
h
R

v0.
18
Kevin Zhou Physics Olympiad Handouts
Now, as the ball rotates about the corner, energy is conserved, so the only way that the ball
will make it to the top is if its kinetic energy is at least mgh. Therefore,
1
2
(β + 1)mR2
ω2
≥ mgh =⇒
1
2
(β + 1)

1 −
1
β + 1
h
R
 2
v2
0 ≥ gh.
Simplifying gives the desired answer.
(b) The initial kinetic energy of the ball is 1
2(1+β)mv2
0. We can use the previously found equation
vf = Rω =

1 −
1
β + 1
h
R

v0,
which helps us find the kinetic energy immediately after the inelastic collision 1
2(1 + β)mv2
f.
Thus the kinetic energy dissipated into heat is
∆Q =
1
2
(1 + β)m(v2
0 − v2
f) =
1
2
(1 + β)mv2
0 1 −

1 −
1
1 + β
h
R
 2
!
.
Using the binomial approximation, we conclude
∆Q ≈
1
2
(1 + β)mv2
0

2h
(1 + β)R

=
mv2
0h
R
.
Interestingly, the ratio of this to the amount of gravitational potential energy needed to climb
the step, which is mgh, is independent of h. So even if we turn a big step into many small
steps, it’ll still be substantially less efficient than a smooth slope. Of course, at some point
the approximations in this problem break down (the ball deforms, so it can’t be regarded as
touching only one step at once), so that the slope is effectively smooth.
[3] Problem 20 (KK 6.38). A rigid massless rod of length L joins two particles, each of mass m. The
rod lies on a frictionless table, and is struck by a particle of mass m and velocity v0 as shown.
v0
m
m
m
L
45◦
After an elastic collision, the projectile moves straight back. Find the angular velocity of the rod
about its center of mass after the collision.
Solution. Suppose the projectile moves back with speed v1, the center of mass speed of the dumbbell
is V , and its angular velocity about its center of mass is ω. Then, momentum, angular momentum,
and energy conservation yield
mv0 = −mv1 + 2mV =⇒ v0 + v1 = 2V
mv0L/2
√
2 = (mL2
/2)ω − mv1L/2
√
2 =⇒ v0 + v1 =
√
2Lω
mv2
0 = mv2
1 + 2mV 2
+ (mL2
/2)ω2
=⇒ (v0 − v1)(v0 + v1) = 3V 2
.
19
Kevin Zhou Physics Olympiad Handouts
Combining the first and last equations implies v0 − v1 = (3/2)V , so 2v0 = (7/2)V , so V = 4
7v0.
Using the second equation gives
Lω =
√
2V =
4
√
2
7
v0, ω =
4
√
2
7
v0
L
.
[3] Problem 21 (PPP 47). Two identical dumbbells move towards each other on a frictionless table.
m
m
m
m
2ℓ
2ℓ
v
v v
v
Each consists of two point masses m joined by a massless rod of length 2ℓ. The dumbbells collide
elastically as shown; describe what happens afterward.
Solution. Immediately after the collision, the dumbbells move in the opposite direction at v1, and
have angular velocity ω > 0.
v1
v1 v1
v1
ω
ω
Angular momentum and energy conservation yield
4mℓ2
ω − 4mv1ℓ = 4mvℓ =⇒ v1 + v = ℓω,
2mv2
1 + 2mℓ2
ω2
= 2mv2
=⇒ (v − v1)(v + v1) = ℓ2
ω2
.
Therefore, v − v1 = ℓω, so v1 = 0. So the rods just rotate at angular velocity v/ℓ.
Once both rods rotate 180◦, they collide again. By using the reasoning of the first collision in
reverse, the rods simply lose their angular velocity and regain their original translational velocities.
Therefore, the final result is that both rods translate uniformly, as if they passed right through each
other, but both rods are flipped upside down.
[3] Problem 22.   m 1 0USAPhO 2014, problem B1.
[3] Problem 23.   m 1 0EuPhO 2024, problem 1. A nice exercise on the process of a rotational collision.
[4] Problem 24. @ 1 0EuPhO 2018, problem 1. An elegant rotation problem.
20
Kevin Zhou Physics Olympiad Handouts
5 Rotational Oscillations
In this section we’ll consider small oscillations problems involving rotation.
Idea 8
A physical pendulum is a rigid body of mass m pivoted a distance d from its center of
mass, with moment of inertia I about the pivot. When considering physical pendulums, we
always assume the pivot exerts no torque on the pendulum; that is, it is a “simple support”,
providing no bending moment, as discussed in M2. This is a good approximation if the pivot
is smooth and small. In this case, the angular frequency for small oscillations is
ω =
r
mgd
I
.
For some neat real-world applications of this formula, see this paper.
