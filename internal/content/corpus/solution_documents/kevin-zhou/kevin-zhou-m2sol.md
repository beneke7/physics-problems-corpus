---
id: solution-document-kevin-zhou-m2sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-m2-ex001, kevin-zhou-m2-ex002, kevin-zhou-m2-ex006, kevin-zhou-m2-ex007, kevin-zhou-m2-ex009, kevin-zhou-m2-ex010, kevin-zhou-m2-ex011, kevin-zhou-m2-ex012, kevin-zhou-m2-ex013, kevin-zhou-m2-ex014, kevin-zhou-m2-ex015, kevin-zhou-m2-ex017, kevin-zhou-m2-p005, kevin-zhou-m2-p006, kevin-zhou-m2-p011, kevin-zhou-m2-p025, kevin-zhou-m2-p030, kevin-zhou-m2-p033]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Mechanics II: Statics
For review, read chapter 2 of Morin or chapter 2 of Kleppner and Kolenkow. Statics is covered in
more detail in chapter 7 of Wang and Ricardo, volume 1. Surface tension is covered in detail in
chapter 5 of Physics of Continuous Matter by Lautrup, which is an upper-division level introduction
to fluids in general. There is a total of 86 points.
1 Balancing Forces
Idea 1
In principle, you can always solve every statics problem by balancing forces on every individual
particle in the setup, but often you can save on effort by considering appropriate systems.
Idea 2
Any problem where everything has a uniform velocity is equivalent to a statics problem,
by going to the reference frame moving with that velocity. Any problem where everything
has a uniform acceleration a is also about statics, by going to the noninertial frame with
acceleration a, where there is an extra effective gravitational acceleration −a.
The same principle applies to uniform rotation, where a centrifugal force appears in the
rotating frame, acting like an effective gravitational acceleration ω2r⊥, where r⊥
cm is the part
of r perpendicular to the axis of rotation.
Example 1
Six blocks are attached in a horizontal line with rigid rods, and placed on a table with
coefficient of friction µ. The blocks have mass m and the leftmost block is pulled with a force
F so the blocks slide to the left. Find the tension force in the rod in the middle.
Solution
There are six objects here and five rods, each with a different tension, so a direct analysis
would involve solving a system of six equations. Instead, first consider the entire set of six
blocks as one object; we can do this because the rigid rods force them to move as one. The
total mass is 6m, and applying Newton’s second law gives
F − 6mgµ = 6ma, a =
F
6m
− µg.
Next, consider the rightmost three blocks as one object. Their total mass is 3m, and their
acceleration is the same acceleration a we computed above. This system experiences two
horizontal force: tension and friction. Newton’s second law gives
T − 3mgµ = 3ma
and solving for T gives
T =
F
2
.
1

Kevin Zhou Physics Olympiad Handouts
This is intuitive, because the differences of any two adjacent tension forces are the same;
that’s the amount of tension that needs to be spent to accelerate each block. So the middle
rod, which has to accelerate only half the blocks, has half the tension.
The reason we could ignore the tension forces in the other four rods is that the only thing
they do is ensure the blocks move with the same acceleration. Once we assume this is the
case, the specific values of the tensions don’t matter; we can just zoom out and forget them.
It’s just like how within each block there is also an internal tension which keeps it together,
but we rarely need to worry about its details.
Idea 3
To handle a problem where something is just about to slip on something else, set the frictional
force to the maximal value µN and assume slipping is not yet occurring, so the two objects
move as one. The same idea holds for problems which ask for the minimal force needed to
make something move, or the minimal force needed to keep something from moving.
[1] Problem 1 (KK 2.7). A block of mass M1 sits on a block of mass M2 on a frictionless table. The
coefficient of friction between the blocks is µ. Find the maximum horizontal force that can be
applied to (a) block 1 or (b) block 2 so that the blocks will not slip on each other.
Solution. Let the horizontal force be F. In both cases the friction is maximal, f = µM1g, and the
blocks move together, so a = F/(M1 + M2).
(a) The bottom block experiences only the force f = M2a, so
µM1g = M2a, F = µg(M1 + M2)
M1
M2
(b) The top block experiences only the force f = M1a, so
µM1g = M1a, F = µg(M1 + M2).
[2] Problem 2 (KK 2.28). A car, which can be treated as a point particle, enters a turn of radius R.
The road is banked at angle θ, and the coefficient of friction between the wheels and road is µ. Find
the maximum and minimum speeds for the car to stay on the road without skidding sideways.
Solution. Let N be the normal force, and let f be the friction force (defined to be positive if it’s
pointing up the hill). We see that N cosθ+f sinθ = mg, and N sinθ−f cosθ = mv2/R. Therefore,
v2
gR
=
N sinθ − f cosθ
N cosθ + f sinθ
.
Since −Nµ ≤ f ≤ Nµ, we have
v2
min
gR
=
sinθ − µcosθ
cosθ + µsinθ
,
v2
max
gR
=
sinθ + µcosθ
cosθ − µsinθ
.
2

Kevin Zhou Physics Olympiad Handouts
These formulas give nonsensical results for µ > tanθ or µ > cotθ. In these cases, it would be more
correct to say that if µ ≥ tanθ, then vmin = 0, and if µ ≥ cotθ, there is no maximum speed.
Usually, we are in the regime where µ ≥ tanθ, in which case vmin = 0 and banking the turn
increases vmax. Another benefit is that it helps align the direction of the gravitational and centrifugal
force with the height of the car, making the turn more comfortable; you get less of a sideways pull
along your seat. For this reason, banked turns are very common in highways. In highway engineering,
this trick is called superelevation.
[2] Problem 3 (KK 2.19). A “pedagogical machine” is illustrated in the sketch below.
All surfaces are frictionless. What force F must be applied to M1 to keep M3 from rising or falling?
Solution. By considering all the masses as one system, we see that a = F
M1+M2+M3
. We see that
the tension T = M3g, and T = M2a, so
M3g = M2a =⇒
F
M1 + M2 + M3
=
M3
M2
g =⇒ F = (M1 + M2 + M3)
M3
M2
g.
[3] Problem 4.   W 1 0USAPhO 2017, problem A1.
2 Balancing Torques
Idea 4
A static rigid body will remain static as long as the total force on it vanishes, and the total
torque vanishes, where the torque about the origin is
τ =
X
i
ri × Fi
where ri is the point of application of force Fi. If the total force vanishes, the total torque
doesn’t depend on where the origin is, because shifting the origin by a changes the torque by
∆τ =
X
i
a × Fi = a ×
X
i
Fi
!
= 0.
The origin should usually be chosen to set as many torques as possible to zero.
[1] Problem 5. The “line” of a force is the line passing through its point of application parallel to
its direction; then the torque of the force about any point on that line vanishes. Suppose a body is
static and has three forces acting on it. Show that in two dimensions, the lines of these forces must
either be parallel or concurrent. This will be useful for several problems later.
3

Kevin Zhou Physics Olympiad Handouts
Solution. Let F1,F2,F3 be the forces. Suppose two are parallel, then the third must be parallel to
the first two to balance forces in the direction perpendicular to the direction of the first two. Now,
suppose they are not parallel, and let the origin be at the intersection of the lines of forces of F1
and F2. Then, the torque due to these two is zero, so the torque due to F3 must also be zero, so
the line of action of F3 must also pass through the origin.
Idea 5
The center of mass rcm of a set of masses mi at locations ri with total mass M satisfies
Mrcm =
X
i
miri.
If a system experiences no external forces, its center of mass moves at constant velocity.
Idea 6
A uniform gravitational field exerts no torque about the center of mass. Thus, for the
purposes of applying torque balance on an entire object, the gravitational force Mg can
be taken to act entirely at its center of mass. (This is a formal substitution; of course, the
actual gravitational force remains distributed throughout the object.)
Torque balance works in noninertial frames, as long as one accounts for the torques due to
fictitious forces. For an accelerating frame, the −Ma fictitious force never exerts a torque
about the center of mass, so it can always be taken to act at the center of mass.
In a uniformly rotating frame, the total centrifugal force is Mω2r⊥
cm, where r⊥
cm is the part of
rcm perpendicular to the axis of rotation. There can be a centrifugal torque about the center
of mass, but in simple cases (such as when the object is flat, lying in a plane perpendicular
to ω) this vanishes, in which case the centifugal force can be taken to act at the center of
mass. We’ll cover the Coriolis force and torque in M6.
Example 2
Show that the tension in a completely flexible static rope, massive or massless, points along
the rope everywhere in the rope.
Solution
Consider a tiny segment dℓ of the rope. Since the rope is static, the tension forces on
both ends balance, so they are opposite. Let them both be at an angle θ to the rope
direction. Then the net torque on the segment is (Tdℓ)sinθ. Since this must vanish for
static equilibrium, we must have θ = 0 and hence the tension is along the rope. In other
words, flexible ropes can transmit force, but they can’t transmit torque.
4

Kevin Zhou Physics Olympiad Handouts
dℓ T
T θ
It’s important to note that the argument above doesn’t work for a rigid rod, because the
internal forces in a rigid object can look like the picture above. In other words, there can be
extra shear forces from the adjacent pieces of the rod that provide the compensating torque.
If one tried to set up forces like this in a rope, it would flex instead.
In general, the force distribution within a massless rigid rod can be quite complicated, but if
we zoom out, we can replace it with a single tension which does not necessarily point along
the rod. This transmits both a force and a torque through the rod, in the sense that a torque
is eventually exerted by whatever holds the end of the rod in place. Note that if the rod’s
supports are free to rotate, then they can’t absorb torque, so the rod acts just like a rope,
with tension always along it.
Remark
Sometimes, problem writers will intentionally not introduce any variables that are irrelevant
to the answer. This can occur in two ways. First, the variables might just cancel out, as
one can often see by dimensional analysis. Second, the specific values of the variables might
not matter in the limit when they are very large or small. For instance, if a problem simply
states a mass is “very heavy” but doesn’t give it a name like m, it is asking for the answer
in the limit m → ∞.
Idea 7
To handle problems where an object is just about to tip over, note that at this moment, the
entire normal force will often be concentrated at a point. (For example, when you’re about
to fall forward, all your weight goes on your toes.) That often means it’s a good idea to take
torques about this point.
Example 3: Povey 5.6
In problem 2, we treated the car as a point particle, but in reality it can also tip over. Suppose
that on level ground, a car has a distance d between its left and right tires, which are both
thin, and its center of mass is a height h above the ground. Now suppose the car turns as in
problem 2 on a vertical wall (θ = 90◦) with speed v. For what v is this possible?
Solution
Again working in the noninertial frame of the car, force balance gives
ffric = mg, N =
mv2
R
where ffric and N are the total friction and normal forces on the four tires. Since ffric/N ≤ µ,
v ≥
p
gR/µ
5

Kevin Zhou Physics Olympiad Handouts
which matches the general solution to problem 2. But in that problem, we only considered
force balance. In this extreme situation, we also have to consider torque balance, i.e. the
possibility that the car might topple over. When the car is about to topple over, all the
normal and friction force is on the bottom tires. About this point, we have only torques from
gravity and the centrifugal force, giving
mgh =
mv2
R
d
2
and solving for v gives v =
p
2gRh/d. Toppling is less likely the higher v is, so the answer is
v ≥
p
gR max(1/
√
µ,
p
2h/d).
Now here’s a puzzle for you. A motorcycle only has one set of wheels, so it is like a car with
d → 0. But motorcyclists can perform the motion described here, in the Globe of Death,
without toppling over. In fact, it is possible for them to do this when d = 0 exactly. How?
[2] Problem 6 (Quarterfinal 2004). A uniform board of length L is placed on the back of a truck.
0.6L
0.8L
L
There is no friction between the top of the board and the vertical surface of the truck. The coefficient
of static friction between the bottom of the board and the horizontal surface of the truck is µs = 0.5.
The truck always moves in the forward direction.
(a) What is the maximum starting acceleration the truck can have if the board is not to slip or
fall over?
(b) What is the maximum stopping acceleration the truck can have if the board is not to slip or
fall over?
(c) For what value of stopping acceleration is the static frictional force equal to zero?
Solution. Let us work in the accelerating frame of the truck.
6

Kevin Zhou Physics Olympiad Handouts
Force balance gives mg = N′ and N + ma = f, and torque balance gives
−mg
L
2
sinθ + ma
L
2
cosθ + NLcosθ = 0
which implies
2N + ma = mg tanθ.
Thus,
N =
m(g tanθ − a)
2
, f =
m(g tanθ + a)
2
.
Since −mgµ ≤ f ≤ mgµ, to avoid slipping we require
−g ≤ g tanθ + a ≤ g =⇒ −g ≤
3
4
g + a ≤ g =⇒ −
7
4
g ≤ a ≤
1
4
g.
To avoid falling over, we need N > 0, which is equivalent to
a ≤ g tanθ =
3
4
g.
We can now read off the answers.
(a) For starting accelerations above 3g/4 we would have falling, while for ones above g/4 we would
have slipping. So slipping kicks in first, and the answer is g/4.
(b) Here the only constraint is slipping, and the answer is 7g/4.
(c) Here 3
4g + a = 0, so the truck decelerates with acceleration 0.75g.
[2] Problem 7 (Kalda). Three identical uniform rods are connected by freely rotating hinges.
The rods are arranged so that CD is parallel to AB, and AB = 2CD. A mass m is hung on hinge
C. What is the minimum force that must be exerted at hinge D to keep the system stationary?
7

Kevin Zhou Physics Olympiad Handouts
Solution. Let the rods have length ℓ. There are many ways to solve the problem, but the quickest
is to consider the torque on the system of rod CD and its hinges, about the intersection point of AC
and BD. About this point, the torque due to the weight of rod CD vanishes. Since the hinges are
freely rotating, the force of rod AC on the system is directed along AC, so it also exerts no torque,
and the same applies for the force from rod BD.
Thus, the only torque is mgℓ/2, from the weight of the mass. The applied force must balance
this torque, and by some elementary geometry, we find that its maximum possible lever arm is ℓ,
when the force is perpendicular to BD. Therefore, the minimum force is mg/2 .
Note that it is crucial to assume the rods are massless. If the rods had mass, then the structure
can’t be supported by freely rotating hinges, even in the absence of the mass m and external force
F. (For example, the forces of the hinges on the rod CD would have to be horizontal, which means
they can’t balance gravity.) Instead, in reality the structure would deform a bit until the hinges
were no longer freely rotating, but rather jammed in place.
Idea 8
An extended object supported at a point may be static if its center of mass lies directly above
or below that point. More generally, if the object is supported at a set of points, it can be
static if its center of mass lies above the convex hull of the points.
[2] Problem 8. N identical uniform bricks of length L are stacked, one above the other, near the edge
of a table. What is the maximum possible length the top brick can protrude over the edge of the
table? How does this limit grow as N goes to infinity?
Solution. Suppose we begin with all N blocks stacked directly on top of each other and slide them
to the right. The maximal extension is reached when the center of mass of the top n blocks lies on
the edge of the (n + 1)th block. Let ℓ = L/2, and suppose we have already adjusted the top n − 1
blocks to be in the optimal position. Then the center of mass of the top n blocks is a distance ℓ/n
from the edge of the (n + 1)th block, so the nth block and everything on top of it may be moved
ℓ/n to the right. Hence the total distance is
L
2

1 +
1
2
+ ... +
1
N

≈
L
2
Z N
1
dx
x
≈
L
2
logN
which is unbounded as N → ∞. (By the way, if you allow blocks to be stacked in any combination,
not just one on top of the other, then the maximum overhang is much larger. As shown in this neat
paper, it grows as N1/3.)
[2] Problem 9 (Kalda). A cylinder with mass M is placed on an inclined slope with angle α so that
its axis is horizontal. A small block of mass m is placed inside it.
The coefficient of friction between the block and cylinder is µ. Find the maximum α so that the
cylinder can stay at rest, assuming that the coefficient of friction between the cylinder and slope is
high enough to keep the cylinder from slipping.
8

Kevin Zhou Physics Olympiad Handouts
Solution. Refer to the diagram below, where C is the location of the block.
The center of mass B of the cylinder-block system must be right above the contact point A.
Therefore, we must have OB = km and BC = kM for some constant k, so that the radius of the
cylinder is OC = k(m + M) = OA. Next, by applying the law of sines on triangle OAB, we have
OB
sinα
=
OA
sin(α + θ)
=⇒ sin(α + θ) = (1 + M/m)sinα.
We see that m slips when tan(α + θ) = µ, or sin(α + θ) = µ √
1+µ2
, so
αmax = sin−1 µ
p
1 + µ2

1 +
M
m
 −1
!
.
[2] Problem 10 (PPP 11). A sphere is made of two homogeneous hemispheres stuck together, with
different densities. Is it possible to choose the densities so that the sphere can be placed on an
inclined plane with incline 30◦ and remain in equilibrium? Assume the coefficient of friction is
sufficiently high so that the sphere cannot slip.
Solution. No, it’s not possible. We need the center of mass to be straight above the point of
contact. Some basic geometry shows that this is only possible for some orientation of the sphere
if the center of mass is at least a distance R/2 from the center of the sphere. However, this is
impossible: even if one hemisphere had near-zero density, the center of mass would only be 3R/8
away from the center of the sphere, as can be shown by direct integration.
We can also resolve the problem without any calculation. Consider a homogeneous hemisphere
flat on a table. Its center of mass must be at a height lower than R/2, since the mass above the
plane z = R/2 is less than the mass below it, and concentrated closer to the plane. Therefore, the
centers of masses of the hemispheres are each within R/2 of the center of the sphere, so the overall
center of mass is also within R/2 of the center.
[3] Problem 11. An object of mass m lies on a uniform floor, with coefficient of static friction µ.
9

Kevin Zhou Physics Olympiad Handouts
(a) First, suppose the object is a point mass. What is the minimum force required to make the
object start moving, if you can apply the force in any direction?
(b) Now suppose the object is a thin, uniform bar. What is the minimum force required to make
the object start moving in any way, if the force can only be applied horizontally? Assume the
normal pressure on the floor remains uniform.
Solution. (a) Just before the block slides, the friction force is µ times the normal force, so the
sum of the normal force and friction force yields a single force with angle ϕ with respect to
the vertical, where tanϕ = µ. Let’s call this sum the “contact force”, with magnitude FC.
The contact force FC, gravitational force mg, and applied force FA acting on the object have
to sum to zero, so the three force vectors have to form a closed triangle.
By varying the direction of the applied force, we vary both FC and FA. The smallest possible
value of FA occurs when the contact and applied force are perpendicular, so that the force
vectors form a right triangle. Then by basic trigonometry, the minimum FA is
Fmin = mg sinϕ =
mgµ
p
1 + µ2
.
As a sidenote, if the block were treated as an extended object, not just a point particle, one
would have to worry about whether it’s possible to do this without tipping the block over
instead. However, by choosing the point of application of the force correctly, it’s always
possible to make the block slide without tipping. Can you see why?
(b) Naively the answer is µmg, because that’s the maximum total friction force. However, we
know from everyday experience that it’s easier to get the object to start moving if you pull
at the edge. That’s because the friction forces distributed along the bar also need to balance
torque, which means some of them must point forward, along the force you exert.
The figure above shows a top-down view of the bar. Just before slipping, the friction needs
to be trying as hard as possible to balance both the applied force and applied torque. This
implies that it must have the maximum possible magnitude everywhere, and this fixes the
10

Kevin Zhou Physics Olympiad Handouts
total length of the bar where the friction points forward, and the total length where it points
backward. To oppose the torque you apply as effectively as possible, the part of the bar where
friction points forward must be all on the opposite side of the bar, as shown above.
Using the variables defined in the figure, just barely balancing forces and torques simultane-
ously gives
F = µmg

ℓ
L
−
L − ℓ
L

, Fℓ = µmg

ℓ
L
ℓ
2
+
L − ℓ
L
L − ℓ
2

.
Solving for ℓ gives ℓ = L/
√
2, and plugging this in gives
F = (
√
2 − 1)µmg
which is less than half the naive answer!
[3] Problem 12 (Morin 2.17). A spool consists of an axle of radius r and an outside circle of radius
R which rolls on the ground.
A thread is wrapped around the axle and is pulled with tension T at an angle θ with the horizontal.
(a) Which way does the spool move if it is pulled with θ = 0?
(b) Given R and r, what should θ be so that the spool doesn’t move? Assume that the friction
between the spool and the ground is large enough so that the spool doesn’t slip.
(c) Given R, r, and the coefficient of friction µ between the spool and the ground, what is the
largest value of T for which the spool remains at rest?
(d) Given R and µ, what should r be so that you can make the spool slip from the static position
with as small a T as possible? That is, what should r be so that the upper bound on T in
part (c) is as small as possible? What is the resulting value of T?
Solution. (a) The torque about the contact point with the ground is clockwise, so the spool rolls
to the right. You might think it would roll to the left, by thinking about torque about the
center, but one must also account for the torque from friction with the ground; taking torques
about the contact point avoids this complication.
(b) Let O be the center of the spool, A the point where the thread leaves the inner circle, and B
the point of contact of the outer circle with the floor. We see that ∠BOA = θ. Considering
torques about B, we see that gravity provides 0 torque, so the tension must provide 0 torque
as well. This means BA is tangent to the inner circle. Since BAO is a right triangle with
∠BAO = 90◦, we have cosθ = r/R .
11

Kevin Zhou Physics Olympiad Handouts
(c) Let f be the friction force, and N the normal force. We see that T cosθ = f and N =
Mg − T sinθ. Since f ≤ µN, we see
T cosθ ≤ µ(Mg − T sinθ) =⇒ T ≤
µMg
cosθ + µsinθ
,
where θ = cos−1(r/R).
(d) We see that cosθ + µsinθ = 1 √
1+µ2
cos(θ − β) where tanβ = µ. Thus,
T =
µMg
p
1 + µ2 cos(θ − β)
,
so to minimize T, we want θ = β, so r = Rcosβ =
R
p
1 + µ2
, and the minimum value of T
is
µMg
p
1 + µ2
.
[3] Problem 13 (PPP 44). A plate, bent at right angles along its center line, is placed on a horizontal
fixed cylinder of radius R as shown. Each arm of the plate has length 2R.
How large does the coefficient of static friction between the cylinder and plate need to be if the
plate is not to slip off the cylinder?
Solution. Let the normal and friction forces at the top be Nt, ft and at the right Nr, fr, and the
static coefficient of friction be µ. Balancing forces on the plate gives
ft = Nr, Nt + fr = mg.
Now, it’s not obvious whether friction will be maximal at the top or the right contact point, or
both, so we define
ft = µtNt, fr = µrNr
where µt,µr ≤ µ. Eliminating the friction forces and solving the force balance equations gives
Nt =
mg
1 + µrµt
, Nr =
mgµt
1 + µrµt
.
Next, consider torques on the plate about its vertex. (This is an arbitrary choice; taking torques
about either of the contact points also works about equally well.) The weight of the vertical of the
plate contributes no torque, so the torque balance equation is
Nr + mg/2 = Nt.
12

Kevin Zhou Physics Olympiad Handouts
Plugging in our results for Nr and Nt gives
µt(2 + µr) = 1.
To find the minimum coefficient of friction to avoid slipping, we need to find the solution to this
equation where the larger of µr and µt is as small as possible. But it’s clear now that increasing
one decreases the other, so this is achieved when the two are equal. In other words, at the limit,
slipping is just about to occur at both contact points simultaneously. Setting µr = µt = µ gives
µ2
+ 2µ − 1 = 0, µ =
√
2 − 1.
Incidentally, you can also do this problem with the idea of problem 5. At the minimum µ, we
assume both friction forces are saturated. The lines of these forces must cross at a point directly
above/below the center of mass, where gravity is applied. This quickly yields the same quadratic
equation as found above. If you do it this way, though, it’s a bit harder to see why both friction
forces are saturated simultaneously at the minimum µ. It’s usually true, but not guaranteed in
general; our more explicit derivation above shows why.
3 Trickier Torques
Idea 9
Sometimes, a clever use of torque balance can be used to remove any need to have explicit
force equations at all. Rarely, the same situation can occur in reverse.
Example 4: NBPhO 2010.4
A spherical ball of mass M is rolled up along a vertical wall, by exerting a force F to some
point P on the ball. The coefficient of friction is µ. What is the minimum possible force F,
and in this case, where is the point P?
Solution
Following the logic of idea 3, when the minimum possible force is used, the frictional
force with the wall must be maximal, f = µN, and directed upward. (If friction weren’t
pushing the ball up as hard as possible, we could get by using a smaller force F.)
So even though we don’t know the magnitude of the normal or the frictional force, we
know the direction of the sum of these two forces, so we’ll consider them as one combined force.
This reduces the number of independent forces in the problem to three: gravity (acting at
the center of mass), the force F (acting at P), and the combined normal and friction forces
(acting at the point of contact C with the wall). Therefore, by the result of problem 5, the
lines of these forces must all intersect at some point A, as shown.
13

Kevin Zhou Physics Olympiad Handouts
This ensures that the torques will balance, when taken about point A.
Next, we need to incorporate the information from force balance. Doing this directly will
lead us to some nasty trigonometry, but there’s a better way. There are in principle two
force balance equations, for horizontal and vertical forces. However, one of these equations is
just going to tell us the magnitude of the normal/frictional force, which we don’t care about.
So in reality, we just need one equation, which preferably doesn’t involve that force.
The trick is to use torque balance again, about the point C. (You might ask, didn’t
we already use torque balance? Yes, but the torque balance equations about different
points have different forms; they are related by adding combinations of the horizontal
and vertical force balance equations. Here, we’ve chosen C to avoid the normal/friction force.)
Now, when taking the torque about C, the torques due to gravity and F must cancel. Then
the force F is minimized if P is chosen to maximize its lever arm. This occurs when CA ⊥ PA,
in which case the lever arm is R
p
1 + µ2, where R is the radius of the ball. So we have
MgR = FR
p
1 + µ2, F =
Mg
p
1 + µ2
and P is determined as described above.
[2] Problem 14. NBPhO 2020, problem 4, parts (i) and (ii).
[3] Problem 15. NBPhO 2012, problem 3. The problem statement is missing some information: both
the bars and rod have diameter d.
[3] Problem 16. NBPhO 2006, problem 6. You will need to print out the problem to make measure-
ments on the provided figure.
[4] Problem 17 (Physics Cup 2012). A thin rod of mass m is placed in a corner so that the rod forms
an angle α with the floor. The gravitational acceleration is g, and the coefficient of friction with
the wall and floor is µs = tanβ, which is not large enough to keep the rod from slipping.
14

Kevin Zhou Physics Olympiad Handouts
What is the minimum additional force F needed to keep the rod static?
Solution. The answer is
F =
mg
2
cos(α + 2β) ×
(
1/cos(α + β) α + β ≤ π/4
1/sin(α + β) α + β ≥ π/4
and several nice solutions are given here.
By the way, this is an example of how a great question writer gets around the problem of
nonunique solutions, as we’ll discuss further in example 5. The famous question of when a ladder
will slip (e.g. as a person climbs up the ladder) has been appearing in books and exams for centuries.
But the answer is usually not well-defined, because there are four unknowns (two normal forces
and two friction forces) but only three equations (two from force balance, and torque balance).
Instead, the answer in practice depends on details, such as how the ladder was placed in contact
with the walls, and how much it can compress and bend. To avoid this, question writers often
assume something artificial, such as making one wall frictionless. But in this nice problem, the
indeterminacy is cancelled out by the freedom in deciding how to apply the force F.
Next, we consider some questions that train three-dimensional thinking.
[2] Problem 18 (PPP 10). In Victor Hugo’s novel les Miserables, the main character Jean Valjean, an
escaped prisoner, was noted for his ability to climb up the corner formed by the intersection of two
vertical perpendicular walls. Suppose for simplicity that Jean has no feet. Let µ be the coefficient
of static friction between his hands and the walls. What is the minimum force that Jean had to
exert on each hand to climb up the wall? Also, for what values of µ is this feat possible at all?
Solution. Jean Valjean experiences two normal forces and two friction forces, one from each hand.
Each friction force must balance the other normal force, plus half the weight, so
f2
fric = N2
+ (mg/2)2
.
Assuming the friction is maximal, ffric = µN, we have
N =
mg
2
p
µ2 − 1
and the force Jean Valjean exerts with each hand is
F =
q
N2 + f2
fric =
mg
2
s
µ2 + 1
µ2 − 1
.
The feat is only possible if µ > 1.
15

Kevin Zhou Physics Olympiad Handouts
[3] Problem 19 (PPP 69). A homogeneous triangular plate has threads of length h1, h2, and h3
fastened to its vertices. The other ends of the string are fastened to a common point on the ceiling.
Show that the tension in each thread is proportional to its length. (Hint: with the origin at the
point on the ceiling, let the vertices be at positions ri and express everything in vector form.)
Solution. Define the origin to be the attachment point on the ceiling, and let the vertices be at
positions ri. The tensions are along the ropes, so let them be Ti = −ηiri. Force balance says
η1r1 + η2r2 + η3r3 = mg.
Torque balance tells us that the center of mass of the triangle must lie directly below the attachment
point, and the center of mass is at
rcm =
1
3
(r1 + r2 + r3)
which means that
r1 + r2 + r3 ∝ g.
Thus, we know that the sum of the ri is in the vertical direction, and also that the weighted sum of
the ηiri is in the same vertical direction. This is only possible if all the ηi are equal to each other,
which proves the desired result.
In case you’re not convinced, we can justify this in more detail. Let r1 + r2 + r3 = αg. Then
subtracting this equation from α/m times the force balance equation gives
X
i

1 −
α
m
ηi

ri = 0.
The only way a nontrivial sum of three vectors can vanish is if they lie in a plane, which isn’t true
here. So each of the coefficients must vanish, so 1 − (α/m)ηi = 0, which means all the ηi are the
same, ηi = m/α.
[4] Problem 20 (KoMaL 2019, BAUPC 1998). Two identical uniform solid cylinders are placed on a
level tabletop next to each other, so that they are touching. A third identical cylinder is placed on
top of the other two.
(a) Let the coefficient of static friction between the cylinders be µ1, and the coefficient of static
friction between the cylinders and table be µ2. Find the minimum values of µ1 and µ2 so that
the arrangement can stay at rest.
(b) Repeat part (a) with the three cylinders replaced with four spheres, stacked so that their
centers form an equilateral triangle.
(c) Now return to part (a), and suppose the setup is frictionless. A force is applied directly to
the right on the leftmost cylinder, causing the entire setup to accelerate. Find the minimum
and maximum accelerations so that all three cylinders remain in contact with each other.
Parts (a) and (b) demonstrate an interesting point: it is possible for a collection of objects to resist
some force, even though a single one of those objects would begin moving even with an infinitesimal
applied force! This is a simple example of how granular materials, like sand, can give rise to emergent
phenomena that are hard to predict from analyzing individual grains alone. Understanding these
materials is a whole field of applied research.
16

Kevin Zhou Physics Olympiad Handouts
Solution. (a) Call the top cylinder A, and the bottom ones B and C. Suppose the normal force
between the top cylinder and either of the bottom cylinders is N, and the friction force is f.
When µ1 takes its minimum possible value, we have f = µ1N. Note that since B and C are
already being pushed apart by A, there’s no normal force between B and C. (It would be
possible in principle for the normal force to be nonzero, but that would require more friction
to counteract it, and we’re trying to find the configuration with the smallest µi possible.) This
also implies that there’s no friction between B and C.
Now let’s balance forces and torques on C. For torque to be balanced, the friction force from
the ground must also be f. Then balancing horizontal forces yields
f + f cos(π/6) = N sin(π/6)
from which we infer
µ1 =
f
N
=
1
2 +
√
3
≈ 0.268.
To find µ2, let N′ be the normal force between C and the ground. By symmetry, it has to be
half of the total weight, so N′ = 3mg/2, but by balancing vertical forces on C, we also have
N′
= N cos(π/6) + f sin(π/6) + mg.
Using our previously derived result for f/N, we conclude that
f =
µ1
3
N′
from which we conclude that
µ2 =
µ1
3
≈ 0.0893.
(b) All the spheres are being pushed apart, so the analysis above is the same except now the angle
is a bit different and the bottom balls exert a vertical force of mg/3 on the top ball since there
are 3 supports now.
The lines connecting the centers of the spheres form a tetrahedron by symmetry.
Let the length of the sides of a tetrahedron ABCD be ℓ, and A being the point at the top
(center of the top sphere). Then the distance from the centroid of triangle BCD to B is ℓ/
√
3
(use the fact that medians intersect in a ratio of 2 to 1 or draw a line from the centroid to
a side). Since AB has length ℓ, the angle between the vertical and the lines connecting the
centers of the top sphere and a bottom sphere is α = arcsin(1/
√
3).
We can thus replace sin(π/6) with 1/
√
3 and cos(π/6) with
p
2/3 in the previous equations.
Thus with the same analysis on a bottom ball with only the top ball acting on it, the friction
coefficient between the balls is:
µ1 =
sinα
1 + cosα
=
√
3 −
√
2 ≈ 0.318.
Similarly, we have N′ = 4mg/3 and N cos(α) + f sin(α) = mg/3, so
N′
= 4

cosα
µ1
+ sinα

f
from which we conclude
µ2 =
µ1
4
≈ 0.0795.
17

Kevin Zhou Physics Olympiad Handouts
(c) Call the top cylinder A, the left cylinder B, and the right cylinder C, and the normal forces
between them Nij. Let θ = π/6.
At the minimum acceleration, the weight of cylinder A almost pushes B and C apart, so
NBC = 0. Under this assumption, considering horizontal forces on cylinders A and C gives
NAC sinθ = ma, (NBA − NAC)sinθ = ma
while balancing vertical forces on cylinder A gives
(NBA + NAC)cosθ = mg
Combining these equations and plugging in θ, we find
2NAC = 4ma =
mg
√
3/2
− 2ma
from which we read off
amin =
g
3
√
3
.
Now consider the maximum acceleration. In this case, cylinder A will be just about to fly off
the top, so that NAC = 0. Thus, the only normal force on cylinder A is from cylinder B, and
considering horizontal and vertical forces on cylinder A gives
NBA sinθ = ma, NBA cosθ = mg
from which we read off
amax =
g
√
3
.
4 Paradoxical Reactions
Idea 10
Physics is not fundamentally about solving tricky sets of idealized equations; that is just
mathematics. Physics is also not fundamentally about describing common real-world
situations as accurately as possible; that is just engineering. The heart of physics is to
bridge the two effectively. A good physicist invents mathematical idealizations that decently
describe as many things as possible. A great physicist figures out exactly when and why
those idealizations break down, and how to replace them with better ones.
The point of this philosophical speech is that everything you’ve learned so far in this handout
is an idealization. Real objects don’t have single normal and friction forces applied at points.
Instead, they are made of huge numbers of atoms connected by chemical bonds. Each
atom applies forces to its neighbors, and each bond deforms in response to applied forces.
Sometimes we can ignore these details, sometimes we can save our preferred idealizations
with a clever adjustment, and sometimes the idealized picture breaks down completely. Each
case is different, and requires thinking about the physics in play.
18

Kevin Zhou Physics Olympiad Handouts
Example 5
A uniform bar with mass m and length ℓ hangs on four equally spaced identical light wires.
Initially, all four wires have tension mg/4.
Find the tensions after the leftmost wire is cut.
Solution
This illustrates a common issue with setups involving rigid supports: there are often more
normal or tension forces than independent equations, so there is not a unique solution. In the
real world, the result is determined by imperfect characteristics of the wires. A reasonable
assumption here is that the wires are identical, very stiff springs. In equilibrium, the bar
will tilt a tiny bit, so that the length of the middle wire will be the average of the lengths of
the other two. By Hooke’s law, the force in that wire will than be the average of the other
two, so the tensions are mg/3 − x, mg/3, and mg/3 + x. Applying torque balance yields
7mg/12, mg/3, and mg/12.
A real civil engineer designing a structure would use a sophisticated computer program which
simulates all the complex internal forces, torques, and strains in play. For intuition, you
could try building some structures yourself in a simple game, like Poly Bridge.
Example 6
In traditional rock climbing, it is often necessary to place tools in small cracks, which will
catch the climber in the event of a fall. Suppose two parallel vertical walls are a distance L
apart, and a rod of length L and mass m is placed horizontally between them. The coefficient
of static friction between the rod and walls is µ. Does the rod stay static?
Solution
Clearly, there are solutions where the rod stays static. There can be an upward friction force
f = mg/2 applied to the rod at each wall, and a normal force N at each wall of at least f/µ.
But it would also be consistent with the laws of friction to have, for instance, N = f = 0, so
that the rod falls down immediately.
In cases like this, the normal and friction forces depend on exactly how the rod was placed
in contact with the walls. (In previous problems, you were able to resolve this ambiguity by
considering the case where an object is about to slip, but here even the criterion for slipping
is ambiguous.) For example, if you have to squeeze the rod very hard to fit it in, then it’ll
probably exert a comparable normal force once it’s in. But exerting that much force would
19

Kevin Zhou Physics Olympiad Handouts
be very impractical, so rock climbers have an ingenious alternative, called a “cam”. A cam
contains parts that rotate, so that it grows wider when a rope pulls on it.
[2] Problem 21. AuPhO 2015, problem 12. An explanation of how a cam works. You’ll also need
the diagram in the accompanying answer sheets.
Example 7
Here’s an example which is taken from a real book.
The problem asks about the conditions for this perfectly rectangular block to stay static.
Let’s ask something even more basic: which way do the normal forces on the block point?
Solution
If you think about it a bit, you’ll see that the answer isn’t well-defined.
At the bottom contact point, there are three different possible directions, depending on
whether you take the normal to the floor, or either of the two sides of the block. The
other contact point is even more ambiguous, because of the wall magically ending. Is the
normal force perpendicular to the block, perpendicular to the vertical wall, or something else?
This is a case where the idealization of the normal force breaks down. What happens
depends on the exact shape of the block and wall, and how deformable they are. For example,
suppose the block was perfectly rigid, but had slightly rounded corners (not shown in the
diagram). Then there’s a definite normal direction at the bottom contact point, pointing
up. Similarly, we could suppose that at the other contact point, the wall actually ends in
a step with a rounded corner, in which case the normal direction points directly into the block.
Alternatively, suppose the block and step weren’t rounded, but could deform. Then the
answer depends on the relative hardness of the materials, and how they were placed in
contact. For instance, if we suppose the block is much softer, then it could squash at the
bottom contact point, again leading to a common upward normal direction. But then we
would expect the step to dig into the block at the other contact point, which yields two
separate normal forces at that point. Or perhaps the step is made of a softer material
than the floor, so that it’s the step rather than the block that deforms. Or maybe both deform!
20

Kevin Zhou Physics Olympiad Handouts
To reiterate, the issue isn’t that idealizations are unrealistic. Physics uses idealizations,
like neglecting air resistance and friction, all the time, and they work in appropriate limits.
The issue is that when you apply the idealizations implied by the diagram, the result is
mathematically undefined – and you get completely different answers depending on how you
adjust the idealization. That means the true answer depends crucially on the details.
Remark
The above example illustrates why it’s hard to write good physics questions if you don’t
know exactly what you’re doing. The writers of thoroughly vetted competitions, like the
IPhO, EuPhO, or NBPhO, or the national Olympiads of America or China, are perfectly
aware of this issue and always make sure to avoid it. For example, you can see that in
problems 17 and 22, and example 16, objects are clearly drawn with rounded corners.
But ill-defined problems are depressingly common in homework assignments and less carefully
written exams, such as the JEE. If you personally encounter such a problem, your only option
is to try to read the question writer’s mind; that is, simply start guessing and go with whatever
gives you tractable results. If you encounter this sort of thing often, in a book or competition,
then it’s not worth your time. We’re in it to learn about nature, not to please examiners.
Idea 11: The Painleve Paradox
Coulomb’s laws for “dry” friction, f ≤ µsN and f = µkN, can lead to mathematical
contradictions if the coefficients of friction are sufficiently high. For example, equations
derived from these laws might have no solutions, or multiple solutions.
[2] Problem 22 (Kalda). A rod is hinged to the ceiling, so that it makes an angle α with the vertical.
Underneath, a thin board is being dragged on the floor. The coefficient of (static and kinetic)
friction is µ1 between the board and rod, and µ2 between the board and floor. The rod is meant to
stop the board from being dragged to the right, no matter how hard or how quickly it is pulled. Is
this possible? If so, what are the conditions on the parameters that allow this to occur?
Solution. Let the rod have mass m and length ℓ, and suppose it feels a normal force N and friction
force f from the board. Then torque balance on the rod about the hinge gives
Nℓsinα =
ℓ
2
mg sinα + fℓcosα.
21

Kevin Zhou Physics Olympiad Handouts
When friction is maximal and the board is about to move, f = µ1N, so
N =
mg sinα
2(sinα − µ1 cosα)
.
It becomes impossible to move the board when µ1 becomes large enough to make this N blow up,
so the board is stuck if
µ1 ≥ tanα.
Physically, what’s going on is that the harder you pull, the larger the normal force becomes, and
so the larger the friction can be. For sufficiently large µ1, the growth in the friction force outpaces
the growth in the applied force. This is an example of “jamming”. Note that µ2 doesn’t matter; it
does contribute to the friction force on the board, but it doesn’t affect when jamming begins.
Remark
In problem 22 you showed that for sufficiently strong friction, it is impossible for a static
board to start moving to the right. But if we suppose the board was already moving to the
right, then solving for the normal force will yield a mathematical contradiction. Specifically,
the rightward friction force on the rod is so strong that it rotates the rod even harder into
the board, requiring an even larger normal force to keep the rod from going through the
board, which induces an even larger friction force, and so on. Technically, there is a solution
for the normal force, but it’s negative, which doesn’t make any sense either.
Of course, you’ve probably seen what happens in real life. The board tends to move in
fits and starts. The rod creaks and cracks, and might even visibly bounce up and down.
But you can’t understand this behavior through the idealized laws of friction. Instead, we
need “contact mechanics”, which studies how the rod and board dynamically deform when
subject to stress. (In section 8, we’ll consider some of the simplest ideas of contact mechanics.)
Good Olympiad questions are designed to avoid triggering Painleve paradoxes. For an
excellent further discussion of these issues, with many examples, see this paper. More
generally, real friction (studied in the field of tribology) can be rather complicated even when
the equations aren’t paradoxical. For example, lubricated materials don’t obey Coulomb’s
laws; instead the friction force has to be computed with fluid mechanics. Materials can even
have adhesive forces, which allow them to roll without slipping down a vertical wall.
5 Extended Bodies
Next, we’ll consider problems with continuous bodies, where one often needs to consider forces and
torques acting on infinitesimal pieces.
Example 8
Find the tension in a circular rope of radius R spinning with angular velocity ω and mass
per length λ.
22

Kevin Zhou Physics Olympiad Handouts
Solution
Consider an infinitesimal segment of the rope, spanning an angle dθ.
The mass of this segment is dm = Rλdθ. The total force is radially inward, with magnitude
dF = 2T sin
dθ
2
≈ T dθ
where we used the small angle approximation. This is the centripetal force, so
dF = (dm)ω2
R.
Combining these results yields T = R2ω2λ.
Example 9
Find the distance d of the center of mass of a uniform semicircle of radius R to its center.
(Note that a semicircle is half of a circle, not half of a disc.)
Solution
This can be done by taking the setup of the previous problem, and taking a subsystem
comprising exactly half of the rope. In this case the net tension force is simply
F = 2T.
The total mass is m = πRλ, and the force must provide the centripetal force, so
F = (πRλ)(ω2
d)
But we also know that T = R2ω2λ as before, so plugging this in gives
d =
2
π
R.
Alternatively, we could have worked in the frame rotating with the rope. The equations
would be the same, but instead we would say the tension balances the centrifugal force.
[1] Problem 23 (KK 2.22). A uniform rope of weight W hangs between two trees. The ends of the
rope are the same height, and they each make angle θ with the trees.
23

Kevin Zhou Physics Olympiad Handouts
Find the tension at either end of the rope, and the tension at the middle of the rope.
Solution. Let the tension at the end be T0, and T1 at the center. Considering the entire rope as
one system, we see that 2T0 cosθ = W, so T0 = W
2cosθ. Considering one half of the rope as a system,
we see T1 = T0 sinθ = W
2 tanθ.
[3] Problem 24 (KK 2.24). A capstan is a device used aboard ships to control a rope which is under
great tension.
The rope is wrapped around a fixed drum with coefficient of friction µ, usually for several turns.
The load on the rope pulls it with a force TA. Ignore gravity.
(a) Show that the minimum force TB needed to hold the other end of the rope in place is TAe−µθ,
an exponential decrease.
(b) How does this result depend on the shape of the capstan, if we fix the angle θ between the
initial and final tension forces? Would the answer be the same for an oval, or a square?
(c) If θ = π, explain why the total normal and friction force of the rope on the drum is TA + TB.
Solution. (a) Consider a small piece of the rope that turns through an angle dθ. Using the
small angle approximation, the normal force must be T dθ, and the friction force must be dT.
Setting f = µN gives µT dθ = dT, or dT/T = µdθ, and integrating gives the desired result.
(b) The infinitesimal reasoning above doesn’t care about the shape as long as it’s reasonably
smooth, so the answer for an oval is the same: just break it into pieces that turn through dθ
again. On the other hand, for a square one has sharp kinks where the normal force is singular,
in which case the answer won’t be as reliable.
(c) Consider the system consisting of the curved part of the rope. This system experiences a
force TA + TB from the straight part of the rope. But it is static, which means it must also
experience an equal and opposite force from the drum, which comes from integrating the
friction and normal forces along the contact surface.
24

Kevin Zhou Physics Olympiad Handouts
That’s all you have to say, but we can also show this more explicitly. For concreteness, let
both tensions be vertical. We have a normal force and difference in tension forces
dN = T dθ, dT = −dffric
on a small piece dθ of the rope. The contribution to the vertical force on the drum is
dFy = dN sinθ + dffric cosθ = T sinθdθ − dT cosθ = −d(T cosθ)
by the product rule. So the total vertical force is
Fy =
Z
dFy = −
Z π
0
d(T cosθ) = −(TA + TB)
as expected. A very similar manipulation shows that Fx = 0.
[2] Problem 25 (F = ma 2018 B20). A massive, uniform, flexible string of length L is placed on
a horizontal table of length L/3 that has a coefficient of friction µs = 1/7, so equal lengths L/3
of string hang freely from both sides of the table. The string passes over the edges of the table,
which are smooth frictionless curves, of size much less than L. Now suppose that one of the hanging
ends of the string is pulled a distance x downward, then released at rest. Neither end of the string
touches the ground.
(a) Find the maximum value of x so that the string does not slip off of the table.
(b) For the case x = 0, draw a free body diagram for the string, indicating only the external
forces on the entire string. Do the forces balance?
(c) Would the answer change significantly if the table’s small edges had friction as well?
Solution. (a) The difference in weights is 2(Mg/L)x, and needs to be balanced by the friction
force f. At the max value of x, f = µsN = µsMg/3 (the normal force at the top only holds
up the top of the string), so x = (µs/6)L = L/42.
(b) At first, it may seem that the forces don’t balance, because the normal force from the flat
part of the table only balances the weight of the string above it, leaving nothing to balance
the weight of the vertical parts of the string. But we must recall that there is an enormous
normal pressure at the smooth corners. The total normal force there is large enough so that
its vertical component holds up all of the string underneath it.
25

Kevin Zhou Physics Olympiad Handouts
(c) Yes, the answer changes significantly no matter how small the edges are. This is because, as
we saw in part (b), there is a sizable normal force at the edges, since they alone are responsible
for holding up a significant part of the rope. So turning on a coefficient of friction at the edges
would yield a sizable friction force. (You can calculate it using problem 24.)
[3] Problem 26 (Morin 2.25). A rope rests on two platforms that are both inclined at an angle θ.
The rope has uniform mass density, and the coefficient of friction between it and the platforms is 1.
The system has left-right symmetry. What is the largest possible fraction of the rope that does not
touch the platforms? What angle θ allows this maximum fraction?
Solution. Let η be the fraction of the rope that does not touch the platforms. Split the rope into
the 3 obvious pieces (the left touching portion, the hanging portion, the right touching portion).
Let T be the tension at the boundaries (its the same on both sides by symmetry). Balancing forces
on the middle portion tells us
2T sinθ = ηmg =⇒ T =
ηmg
2sinθ
.
We see the friction force on the left piece is f = T + 1−η
2 mg sinθ, and the normal force is N =
1−η
2 mg cosθ. We have f ≤ Nµ, so
ηmg
2sinθ
+
1 − η
2
mg sinθ ≤
1 − η
2
mgµcosθ,
or
η
sinθ
+ (1 − η)sinθ ≤ (1 − η)cosθ,
so some algebra reveals
η ≤
cosθ − sinθ
cosθ + sinθ
tanθ .
Doing some more algebra turns this into
η ≤
sin2θ + cos2θ − 1
sin2θ + cos2θ + 1
.
To maximize η, we need to maximize sin2θ + cos2θ, which implies θ = π/8 . The corresponding
value of η is 3 − 2
√
2.
Example 10
A chain is suspended from two points on the ceiling a distance d apart. The chain has a
uniform mass density λ, and cannot stretch. Find the shape of the chain.
26

Kevin Zhou Physics Olympiad Handouts
Solution
First, we note that the horizontal component of the tension Tx is constant throughout the
chain; this just follows from balancing horizontal forces on any piece of it. Moreover, by
similar triangles, we have Ty = Txy′ everywhere.
Now consider a small segment of chain with horizontal projection ∆x. The length of the
piece is ∆x
p
1 + y′2 which determines its weight, and this be balanced by the difference in
vertical tensions. Thus
∆Ty = λg
p
1 + y′2 ∆x.
For infinitesimal ∆x, we have ∆Ty = Txd(y′) = Txy′′ dx, so we get the differential equation
y′′
=
λg
Tx
p
1 + y′2.
Usually nonlinear differential equations with second derivatives are very hard to solve, but
this one isn’t because there is no direct dependence on y, just its derivatives. That means
we can treat y′ as the independent variable first, and the equation is effectively first order in y′.
Writing y′′ = d(y′)/dx and separating, we have
Z
dy′
p
1 + y′2
=
Z
λg
Tx
dx.
Integrating both sides gives
sinh−1
(y′
) =
λgx
Tx
+ C.
Choosing x = 0 to be the lowest point of the chain, the constant C is zero, and
y′
= sinh

λgx
Tx

.
Integrating both sides again gives the solution for y,
y =
Tx
λg
cosh

λgx
Tx

where we suppressed another constant of integration. This curve is called a catenary.
[1] Problem 27. To check that you understand the previous example, repeat it for a suspension bridge.
In this case the cable is attached by vertical suspenders to a horizontal deck with mass λ per unit
length, and supports the weight of the deck. Assume the cable and suspenders have negligible mass.
Solution. By the same logic as in the example, we have
y′′
=
λg
Tx
where there is now no factor of
p
1 + y′2. Integrating this twice gives
y =
λg
Tx
x2
2
27

Kevin Zhou Physics Olympiad Handouts
which is a parabola. One result of this analysis is that the required height of the bridge scales as the
square of its horizontal span, which is why very long suspension bridges are broken into multiple
spans. According to Feynman, engineers were able to watch the shape of the cables of the George
Washington bridge turn from a catenary into a parabola as the deck was installed.
By the way, essentially the same calculation can be used to determine the shape of an ideal
suspended arch bridge. The main difference is that the arch, being a solid structure, can transmit
internal torques (i.e. bending moments, as discussed below) which can result in more general shapes.
But in a well-designed arch bridge this internal torque should be negligible, so the analysis is almost
identical to the suspended cable bridge, but with an extra minus sign since arches are in compression
rather than tension. The shape is an inverted parabola.
Example 11
A uniform spring of spring constant k, mass m, and relaxed length L is hung from the ceiling.
Find its length in equilibrium, as well as its center of mass.
Solution
Problems like this contain subtleties in notation. For example, if you talk about “the piece
of the slinky at z”, this could either mean the piece that’s actually at this position in
equilibrium, or the piece that was originally at this place in the absence of gravity. Talking
about it the first way automatically tells you where the piece is now, but talking about it
the second way makes it easier to keep track of, because then the z of a specific piece of the
spring stays the same no matter where it goes.
In fluid dynamics, these are known as the Eulerian and Lagrangian approaches, respectively.
If you don’t use one consistently, you’ll get nonsensical results, and it’s easy to mix them up.
There are many ways to solve this problem, but I’ll give one that reliably works for
me. We’re going to use the Lagrangian approach, and avoid confusion with the Eulerian
approach by breaking the spring into discrete pieces. Let the spring consist of N ≫ 1
pieces, of masses m/N, spring constants Nk, and relaxed lengths L/N. Our expressions
are going to contain sums, which we’ll replace with integrals using the method described in P1.
The ith spring from the bottom has tension (i/N)mg, and thus is stretched by
∆Li =
1
kN
i
N
mg =
mg
kN2
i.
The total stretch is
N X
i=1
∆Li =
mg
kN2
Z N
0
idi =
mg
2k
.
This makes sense, since the average tension is mg/2. To find the center of mass, note that
the jth spring is displaced downward by a distance
∆yj =
N X
i=j
∆Li =
mg
2k

1 −
j2
N2

28

Kevin Zhou Physics Olympiad Handouts
downward from its position in the absence of gravity. The center of mass displacement is
∆ycm =
1
N
N X
j=1
∆yj ∝
1
N
N X
j=1

1 −
j2
N2

=
1
N3
Z N
0
N2
− j2
dj =
2
3
so restoring the proportionality constant gives
∆ycm =
mg
3k
.
If you want to test your understanding of slinkies, you can also try doing this problem with
the Eulerian approach. This would be best done without discretization. The first steps would
be finding a relation between the density ρ(z) and tension T(z) from Hooke’s law, and finding
out how to write down local force balance as a differential equation.
[4] Problem 28 (MPPP). A slinky is a uniform spring with negligible relaxed length, with mass m
and spring constant k.
(a) Find the shape of a slinky hung from two points on the ceiling separated by distance d. (Hint:
to begin, consider the mass and tension of a small piece of the spring with horizontal and
vertical extent dx and dy. Don’t forget that the slinky’s density won’t be uniform.)
(b) Suppose a slinky’s two ends are fixed, separated by distance d, and rotating uniformly with
angular frequency ω like a jump rope in zero gravity. Find the values of ω for which this
motion is possible, and the shape of the slinky in this case.
Solution. (a) Consider a small piece of the spring with mass dm, and horizontal and vertical
extent dx and dy. This piece of the spring has spring constant km/dm, which means
Tx = km
dx
dm
, Ty =
dy
dx
Tx.
By horizontal force balance, Tx is a constant, which means dx/dm is a constant; the same
amount of mass is contained within each horizontal interval. Thus
dx
dm
=
d
m
.
Balancing vertical forces on this segment gives
dTy = y′′
Tx dx = g dm
and combining this with the previous result gives
y′′
=
mg
kd2
.
We thus conclude that the shape is a parabola. Centering it at x = 0, we have
y =
mgx2
2kd2
.
In particular, the lowest point of the parabola is a distance y(d/2)−y(0) = mg/8k below the
supports. (This solution is very similar to that of the example; the only difference is that
the weight of the segment is proportional to dx instead of
p
1 + y′2 dx. This is because the
slinky’s mass per length is not constant, while the chain’s was.)
29

Kevin Zhou Physics Olympiad Handouts
(b) The only difference with respect to part (a) is that now we have a radial “gravity” force of
geff = −ω2y, because of the centrifugal acceleration in the frame rotating with the slinky.
Therefore,
y′′
= −
mω2
kd2
y
The solution is a sinusoid. For concreteness, let’s suppose one endpoint is at x = 0, imposing
y(0) = 0. Then
y(x) = y0 sin
 r
m
k
ω
d
x

.
For the other endpoint to be fixed, y(d) = 0, we must have
r
m
k
ω = nπ
for some integer n ≥ 1. If ω satisfies this condition, then the slinky can rotate with uniform
angular velocity, and its shape is a sinusoid. The value of y0 is arbitrary.
Another way to say this is that the solutions we have found here are standing waves. The valid
values of ω, given the spring parameters, are just the standing wave frequencies. The fact that
ω doesn’t depend on d follows from dimensional analysis, and reflects the fact that stretching
the string further increases the tension and decreases the density, therefore increasing the
wave speed. These two effects cancel, keeping the standing wave frequencies the same.
Note that so far we’ve considered three cases: a hanging rope (in the example), a hanging slinky,
and a rotating slinky. So what about a rotating rope? Unfortunately, the differential equation
describing it is y′′ ∝ y
p
1 + y′2, since the centrifugal acceleration is proportional to y. And unlike
the example, this is a genuine nonlinear second order differential equation. Mathematica reports
that the solution is not an elementary function, but rather an inverse elliptic integral. Unfortunately,
that’s just what happens most of the time.
6 The Principle of Virtual Work
Let’s motivate this section with a simple question: why use torque at all? In principle, everything
in Newtonian mechanics can be derived by considering forces alone, so torques shouldn’t even be
necessary. This is illustrated with the following example.
Example 12
Consider the simplest possible nontrivial rigid body: a triangle with masses at the vertices,
and sides made of very thin, very rigid, massless springs. The triangle is pivoted at one
vertex, and experiences external forces F1 and F2 at the other two vertices.
30

Kevin Zhou Physics Olympiad Handouts
Find the criterion for this system to be in equilibrium, using force balance alone.
Solution
Consider force balance on the first marked vertex. The tension in the side of length r1 takes
whatever value is necessary to balance the horizontal force F∥,1 on the vertex, while the
tension T in the other side has to balance the vertical force F⊥,1. Thus, F⊥,1 = T sinθ1.
Similarly, by considering the second marked vertex, we have F⊥,2 = T sinθ2.
Eliminating T and using the law of sines gives
r1F⊥,1 = r2F⊥,2.
Of course, this is precisely the statement of torque balance about the pivot. And if you
continue along this line of reasoning, letting the forces be arbitrary, you can also derive the
rotational form of Newton’s second law, τ = Iα, for this system.
Remark
So why are torques necessary? Torque isn’t a necessary tool for single point particles or
very simple rigid bodies. But in a general rigid body, the internal forces which maintain
their rigidity are very complicated, and torques let us avoid having to think about these forces.
For example, consider a rigid bar supported at its ends. The middle of the bar doesn’t
collapse, despite the force of gravity on it, because the bar contains internal, upward shear
forces, which transmit the normal forces applied at its end throughout the rest of the bar.
But to analyze such systems without using torque, one would have to account for all of these
microscopic forces, acting on all of the rod’s infinitely many pieces. With torque, we can
compute useful information (such as the normal forces at each support) without much effort.
However, given how complicated internal forces can be, you might be wondering why torque balance
even works in general. The simplest explanation is the principle of virtual work.
31

Kevin Zhou Physics Olympiad Handouts
Idea 12: Principle of Virtual Work
To determine if a system is in static equilibrium, we consider each way the system could
move. For each such way, we consider how much work would be done if the system moved a
little bit in that way. (This motion is just in our heads, so we call it a “virtual displacement”
which corresponds to a “virtual work”.) The system is in static equilibrium if the virtual
work vanishes for every possible virtual displacement.
If we apply the principle of virtual work to translational motion, then we get force balance,
since dW = F dx. If we apply it to rotation about a pivot, then we get torque balance, since
dW = τ dθ. However, as we’ll see below and in M4, the principle of virtual work can also be
applied to more exotic displacements. It is particularly useful when applied to systems with
a lot of parts but also a lot of constraints, so that they can only move in a few ways. The
converse of the principle of virtual work can also be useful: if you know a system is in static
equilibrium, you can use it to deduce an unknown force.
Example 13: Roberval Balance
Consider the following scale made of rigid bars. The joints ensure that the quadrilateral in
the middle always remains a parallelogram, with its left and right sides vertical.
If identical weights are placed on each horizontal arm as shown, can the system remain static?
Solution
There’s only one way for the system to move: the rectangle can deform into a parallelogram
so that the left horizontal arm moves up, and the right horizontal arm moves down by the
same amount. Then the total virtual work done on the scale by the weights is zero, so the
system can be in equilibrium no matter where on the arms the weights are placed.
[1] Problem 29 (Wang). Two massless rigid rods of length ℓ are connected by a joint A, which allows
them to freely rotate with respect to each other. The left member is pinned to point O, while the
right member is placed on a roller B which can roll frictionlessly on the ground.
32

Kevin Zhou Physics Olympiad Handouts
A massless spring of zero relaxed length and spring constant k is stretched between O and B, and
a rightward force P is exerted at A. Find the angle θ at equilibrium.
Solution. This problem can be solved directly by introducing variables for the tensions in each
rod, then writing down force and torque balance equations. It can be quite quick if you’re clever
about choosing your pivot points and systems. But the principle of virtual work is even faster. We
imagine the roller B moves to the right by dx, which implies that A moves to the right by dx/2.
Then we have a virtual work of
dW = P
dx
2
− (2kℓ cosθ)dx = 0
in equilibrium. This immediately gives
θ = cos−1

P
4kℓ

.
The reason this is so easy is that we don’t have to care about the tension forces within the rods,
or the forces from the pivot or ground, because none of these forces perform virtual work on the
system as a whole.
7 Pressure and Surface Tension
Example 14
A sphere of radius R contains a gas with a uniform pressure P. Find the total force exerted
by the gas on one hemisphere.
Solution
The pressure provides a force per unit area orthogonal to the sphere’s surface, so the
straightforward way to do this is to integrate the vertical component of the pressure force
over a hemisphere. However, there’s a neat shortcut in this case.
Momentarily forget about the sphere and just imagine we have a sealed hemisphere of gas at
pressure P. The net force of the gas on the hemisphere must be zero, or else it would just
begin shooting off in some direction, violating conservation of momentum. So the force on
the curved face must balance the force on the flat face, which is πR2P. The same logic must
hold for the sphere, since the forces on the curved face are the same, so the answer is πR2P.
This trick will come in handy for several future problems. It also generalizes to surfaces of
arbitrary shape, as discussed in E1. Concretely, suppose a surface S has boundary C, and
33

Kevin Zhou Physics Olympiad Handouts
consider any other surface S′ with the same boundary. Then by the same logic, the closed
surface formed by S and S′ together experiences no net pressure force, so the pressure forces
on S and S′ are equal in magnitude.
Idea 13
The surface of a fluid carries a surface tension γ. If one imagines dividing the surface into two
halves, then γ is the tension force of one half on the other per length of the cut. Specifically,
for a small segment ds along the cut, where the normal vector to the surface is n̂, the surface
tension force is
dF = γ ds × n̂
which means the force acts along the surface and perpendicular to the cut.
Example 15
A spherical soap bubble of radius R and surface tension γ is in air with pressure P, and
contains air with pressure P + ∆P. Compute ∆P.
Solution
We use the result of the previous problem to conclude that the force of one hemisphere
on another is πR2∆P. This must be balanced by the surface tension force. By imagining
cutting the surface of the bubble in half, the surface tension force is γL where L is the total
length of the surface connecting the hemispheres.
At this point, we can write L = 2πR, giving
∆P =
2γ
R
.
This is called the Young–Laplace equation. However, in this particular case, this is not the
right answer. The reason is that we should actually take L = 4πR because the surface tension
is exerted at both the inside and outside surfaces of the bubble wall, and thus the answer is
∆P =
4γ
R
.
The increased pressure inside balances the surface tension, which wants to collapse the bubble.
If you’re confused about why L = 4πR, you can also think about it in terms of energy. Surface
tension arises from the fact that it costs energy to take soapy water and stretch it out into a
surface, because this breaks some of the attractive intermolecular bonds. The Young–Laplace
equation would give the correct answer for a ball of soapy water. But for a bubble of soapy
water, twice as much soapy water/air surface is created. So the energy cost is double, and
the force is double.
[2] Problem 30. One can also derive the Young–Laplace equation using the principle of virtual work.
Suppose the bubble radius changes by dr. The energy of the bubble changes for two reasons: first,
34

Kevin Zhou Physics Olympiad Handouts
there is net ∆P dV work from the two pressure forces, and there is the γ dA surface tension energy
cost. By setting the net virtual work to zero, find ∆P.
Solution. The work done by the surface tension should be balanced by the work done by the
pressure difference. Noting that the total surface area is 8πR2, we have
∆P dV = ∆P d

4
3
πR3

= ∆P(4πR2
)dR = d(8πR2
γ) = 16πγRdR
from which we conclude
∆P =
4γ
R
.
Of course, one can generalize this to any other kind of energy. For example, if the bubble was
charged, it would grow due to electrostatic repulsion, and the new equilibrium radius could also be
found using virtual work.
[2] Problem 31 (Kalda). Consider two soap bubbles which have stuck together. The part of the soap
film that separates the interior of the first bubble from the outside air has radius of curvature R.
The part that separates the interior of the second bubble from the outside air has radius of curvature
2R. What is the radius of curvature Rsep of the part which separates the bubbles from each other?
Solution. The key is that the Young–Laplace equation should hold for every point on the surface
since the surface tension and pressure should balance for every infinitesimal surface element. The
gauge pressures (i.e. pressure above atmospheric pressure) inside the two bubbles are P1 = 4γ/R,
and P2 = 4γ/(2R). Thus the pressure difference between the two bubbles is ∆P = 2γ/R, and this
must be equal to 4γ/Rsep, which implies Rsep = 2R.
Remark
So far, we’ve only applied the Young–Laplace equation to spherical surfaces, which are
characterized by a single radius of curvature. More generally, a surface has two principal
radii of curvature R1 and R2 at each point. These are both equal to R for a sphere of radius
R, while for a cylinder of radius R, one is equal to R and the other is infinity. For general
surfaces, the Young–Laplace equation is
∆P = γ

1
R1
+
1
R2

where the Ri can each be positive or negative, depending on the direction of curvature.
[3] Problem 32 (MPPP 67). When a pipe bursts under pressure, it often splits “lengthwise” instead
of “across”. (One familiar example is the process of cooking a long, straight sausage.) The two
modes of splitting are shown as dotted lines below.
Explain this observation, assuming the thickness of the sausage skin is uniform, and hence can
support a constant surface tension before breaking. (Hint: model the sausage as a cylinder of length
35

Kevin Zhou Physics Olympiad Handouts
L capped by hemispheres of radius R ≪ L, and consider the surface tension needed to prevent the
two modes of splitting mentioned, once an excess pressure P builds up inside the sausage.)
Solution. Let the pressure difference from inside the sausage to outside be P. Cutting it across
so the cross section is a circle tells us that the surface tension γa will exert a force F = (2πr)γa on
each end since F = γℓ. Using the trick from example 14, it must balance the force F = πR2P, so
γa = PR/2.
Lengthwise, the cross section has perimeter 2L + 2πR ≈ 2L. If we apply the trick to each
half-cylinder, we find that the pressure force is F = (2RL)P, so balancing forces gives γL = PR.
Since this is a greater requirement on the surface tension, the sausage will break lengthwise, as we
observe in the kitchen.
[4] Problem 33. Two coaxial rings of radius R are placed a distance L apart from each other in
vacuum. A soap film with surface tension γ connects the two rings.
(a) Derive a differential equation for the shape r(z) of the film, and solve it.
(b) Show that for sufficiently large L, there are no solutions. If L is increased to this value, what
happens to the film?
(c) Using a computer or calculator, find the largest possible value of L.
We’ll consider surface tension in more detail in T3.
Solution. (a) Consider a segment of the bubble between z and z + dz. The net forces exerted
by surface tension on both sides along the z-direction are 4πrγ/
√
1 + r′2. To balance forces
in the z-direction for each segment, the quantity r/
√
1 + r′2 must be independent of z, so
r2
= A2
(1 + r′2
)
for some constant A. Separating and integrating, we have
Z
dz =
Z
Adr
√
r2 − A2
and substituting r = Acoshu and integrating yields
z + C = Acosh−1
(r/A), r = Acosh

z + C
A

for another constant C. Setting the rings to be at z = ±L/2, we have C = 0. The quantity
A is the minimum radius, which occurs by symmetry at z = 0.
You may have noticed that the answer is a catenary, which is the same as the answer to
example 10. The reason is that both problems can be solved by minimizing a similar quantity.
Here, we want to find the function r(z) that minimizes the surface area,
S =
Z
2πr
p
1 + r′2 dz
where the value of r at two given values of z is fixed. In that example, we wanted to find the
shape y(x) of the chain that minimizes the gravitational potential energy,
U = λ
Z
y
p
1 + y′2 dx.
36

Kevin Zhou Physics Olympiad Handouts
This function is similar in form, which explains why the form of the solution is similar. But
there’s an important physical difference: the length of the chain is fixed, and you need to
specify it to determine the solution. (To see how this constraint can be imposed with Lagrange
multipliers, see here.) By contrast, the soap bubble is more free to vary. That explains why,
as we’ll see below, you can sometimes have no solution for a soap bubble at all. In those cases,
the middle of the film can just get thinner and thinner, always decreasing the area, until it
pinches off into two separate pieces.
(b) We introduced the parameter A above, which describes the shape of the solution. It is fixed
by requiring that the bubble fit the rings,
R = Acosh
L
2A
.
Now, we wish to find the largest L so that there exists some A that solves this equation.
It’s clearer to note that by dimensional analysis, the system only depends on the ratio R/L,
so finding the largest L for fixed R is equivalent to finding the smallest R for fixed L. By
graphing the function R(A), we see it has a single minimum, so there is indeed a minimum
possible R/L and hence a maximum possible L/R.
(c) Setting the derivative dR/dA to zero, the minimum occurs when
2A
L
= tanh
L
2A
.
This equation cannot be solved analytically. Using a calculator and the techniques of P1, we
find the maximum possible L is about 1.33R.
By the way, you can also solve this problem by looking at the forces on individual small elements
of the bubble. Since the bubble isn’t a closed surface, there’s no pressure difference across it. Thus,
in equilibrium, the Young–Laplace equation implies that the radii of curvature satisfy R1 + R2 = 0,
i.e. the “mean curvature” is zero. This is the condition for the bubble to be a minimal surface.
However, actually evaluating this condition in general is somewhat complicated; what we did above
is the simplest way, which takes advantage of the axis of symmetry of the setup.
8 Deforming Solids
So far, the only continuous objects we’ve analyzed in detail have been ropes and bubbles. They are
relatively simple because they can only support tension forces, and are one-dimensional and two-
dimensional respectively. A three-dimensional solid is much more complex, as it can deform in many
different ways, and can also support internal shear forces. A full treatment of this subject, which
requires comfort with tensors, is given in chapters 6 through 11 of Lautrup, as well as chapters II-31,
II-38, and II-39 of the Feynman lectures. In this problem set, we’ll just give two simple examples.
Example 16: IPhO 2022 3A
A thin piece of spaghetti of diameter d is balanced horizontally from its middle.
37

Kevin Zhou Physics Olympiad Handouts
It can have a length ℓ ≫ d before it snaps under its own weight. How does ℓ scale with d?
Solution
Let the spaghetti rod have density ρ, and consider its right half. There must be a vertical
normal force F ∼ ρd2ℓ to balance the weight. This vertical force is transmitted through
the rod by a shear stress (i.e. an internal force per area, perpendicular to the rod) of order
σs ∼ F/A ∼ ρℓ. Each piece of the rod exerts such a shear stress on its neighbors, just like
how pieces of a string exert tensions on their neighbors.
Now consider torques on the right half of the rod, about the pivot point. The torque
τ ∼ ρd2ℓ2 of the rod’s weight has to be balanced by forces from the other half of the rod.
Vertical forces don’t work, since they don’t provide any torque about the pivot. Instead, the
torque is supplied by a horizontal compression force at the bottom, and a horizontal tension
force at the top, which cancel out to maintain horizontal force balance. This combination of
forces, which produces no net force but does produce a net torque, is a bending moment.
Let the associated normal stresses be of order ±σn. Then the net compression and tension
forces are of order ±d2σn, and the lever arm is of order d, so balancing torques gives
ρd2
ℓ2
∼ σnd3
which implies σn ∼ ρℓ2/d. This is much greater than σs, because of the very small lever arm,
which is why thin rods usually break by snapping, not by shearing or pulling apart. Given a
fixed maximum σn, we conclude the maximum length scales as ℓ ∼
√
d.
[3] Problem 34.   ^ 1 0USAPhO 2022, problem A1. A practical bending moment problem.
Example 17
A solid ball of radius R, density ρ, and Young’s modulus Y rests on a hard table. Because
of its weight, it deforms slightly, so that the area in contact with the table is a circle of radius r.
38

Kevin Zhou Physics Olympiad Handouts
Estimate r, assuming that it is much smaller than R.
Solution
Recall from P1 that the Young’s modulus is defined by
Y =
stress
strain
=
restoring force/cross-sectional area
change in length/length
and has dimensions of pressure. By dimensional analysis, you can show that
r = Rf(ρgR/Y )
but dimensional analysis alone can’t tell us anything more about f. Moreover, an exact
analysis using forces would be very difficult, because different parts of the ball are compressed
in different amounts, and in different directions; there’s little symmetry here.
Instead, we’ll roughly estimate the stress and strain near the bottom of the ball. For the
part directly in contact with the table, we have
stress ∼ F/r2
∼ ρgR3
/r2
because the normal pressure has to balance gravity. This is the pressure exactly at the
bottom of the ball; at heights much greater than r, the pressure will be smaller because it
can spread out over a wider horizontal surface area. Since stress is proportional to strain,
that means the part of the ball that is significantly strained has typical height r. (This is an
example of Saint–Venant’s principle, which states that strain is generally confined near the
location that external forces are applied.) So in that region, the strain must be
strain ∼ δ/r ∼ r/R
where δ is the vertical deformation. Using the definition of the Young’s modulus, we conclude
r ∝ R

ρgR
Y
 1/3
.
We can also phrase this result in terms of force and displacement. We have δ ∼ r2/R, and
the total force that pushes the ball into the table is F ∼ ρgR3, so
F ∝ Y R1/2
δ3/2
.
The restoring force is not linear in δ, so it doesn’t obey Hooke’s law.
As mentioned above, contact mechanics is the study of how normal and other forces behave
for realistic, deformable solids. In this example, we considered “Hertzian contact”. For much
more, see Contact Mechanics by Johnson, and Contact Mechanics and Friction by Popov.
[4] Problem 35. NBPhO 2006, problem 5. A tough problem on a deforming object.
39
