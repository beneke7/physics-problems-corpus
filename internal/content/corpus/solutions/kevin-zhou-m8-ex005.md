---
id: kevin-zhou-m8-ex005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m8-ex005
solution_type: author
source_document: solution-document-kevin-zhou-m8sol
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M8Sol.pdf."
---

Example 5: IIT JEE 2016
Two thin circular discs, with radii a and 2a, are connected by a rod of length ℓ =
√
24a
through their centers. This rigid object rolls without slipping on a flat table.
The center of mass of the object rotates about the z-axis with an angular speed of Ω. The
angular speed of the object about the axis of the rod is ω. How are Ω and ω related?
Solution
This is the most famous problem ever set on the IIT JEE (condensed for clarity), cel-
ebrated by generations of students for its difficulty. But it’s also an example of how
not to write a 3D rotation problem. Under the standard definition of angular velocity,
none of the options provided in the question were correct, while the intended answer
requires a nonstandard, arbitrary definition. You can find a detailed explanation of this
here, by one of the former top scorers on the JEE, and I’ll give a condensed explanation below.
First, let’s figure out what’s going on. The kinematics of this problem isn’t any different
from problem 1. Defining the x-axis to be horizontal in the figure above, the instantaneous
angular velocity is ω = ω x̂, while the precession rate is Ω = (ω/
√
24)ẑ. The hard part is fig-
uring out what the question writers meant by “the angular speed ω about the axis of the rod”.
If we’re only talking about the object’s instantaneous motion, then the only possible answer
is ω = ω · n̂, where n̂ is the unit vector pointing along the rod. In that case we have
Ω/ω = 5/24, but then none of the answer choices in the exam are correct. On the other
hand, if we are comparing the object’s orientation at different times, then there isn’t a
18
Kevin Zhou Physics Olympiad Handouts
unique answer. At a finite time later, the object will be in a different place, and computing
a relative angle requires defining a convention for comparing orientations.
Here’s what the problem authors meant. We work in the frame rotating with angular
velocity Ω. In this frame, the system is spinning in place, with angular velocity ω + Ω
parallel to n̂. The definition of ω is |ω + Ω|, which gives Ω/ω = 1/5, the intended answer.
Another way of saying this is that when we compare the orientation of the system at one
moment to its orientation at another moment, we bring them to the same position by rotating
about the z-axis, at which point they differ by a rotation about n̂. But this procedure is
totally arbitrary, and not specified by the problem. To pose the problem properly, the writers
could have either defined ω explicitly in the rotating frame mentioned above, or replaced
it with a quantity with equivalent but unambiguous physical meaning, such as the interval
between times a given point on the rim of a disc touches the ground. Fortunately, you’ll
almost never see problems this ambiguous on Olympiads.
Remark
One of the most counterintuitive things about 3D rigid body motion is the intermediate
axis theorem, which states that if a body has moments of inertia I1 < I2 < I3 about its
principal axes, then it can rotate stably about the first and third principal axes, but not the
second, “intermediate” axis. You can demonstrate this yourself by throwing a rectangular
prism (such a book or a phone) in the air. If you spin it about the intermediate axis, it’ll
start tumbling. The Soviet physicist Dzhanibekov found a particularly striking example of
such motion in zero gravity, which you can see here.
Deriving this theorem requires the full theory of 3D rotational kinematics, which is beyond
the scope of the Olympiad, but there’s a simple explanation of this effect using conserved
quantities. The rotational kinetic energy is
K =
1
2
I1ω2
1 +
1
2
I2ω2
2 +
1
2
I3ω2
3
while the magnitude squared of the angular momentum is
L2
= I2
1ω2
1 + I2
2ω2
2 + I2
3ω2
3.
This makes it easy to see why rotation about the third axis is stable: it corresponds to the
smallest possible kinetic energy for a given angular momentum.
On the other hand, it’s not so clear why the first axis is stable, because it corresponds to
the maximum possible kinetic energy. Aren’t maxima usually unstable? Generally yes, but
in this case, the kinetic energy is the only contribution to the energy. Since kinetic energy
is conserved in the short run, there is nowhere else for the energy to go, so a system set
spinning about the first axis has to stay that way. (Of course, in the long run energy will be
lost to the environment, e.g. by friction. So we might say that rotation about the first axis
is stable mechanically, but not thermodynamically.)
19
Kevin Zhou Physics Olympiad Handouts
However, for rotation about the second, “intermediate” axis, the body can keep both K and
L2 the same by turning on some combination of ω1 and ω3. That explains the Dzhanibekov
effect. Initially the second principal axis aligns with the direction of L. Then the body
rotates so that ω1 and ω3 become nonzero, until the body has completely flipped over. At
that point ω1 and ω3 become zero again, with the second principal axis now aligned against
L. It’s like a one-dimensional oscillation, where I2ω2
2/2 plays the role of “potential” energy
and I1ω2
1/2 + I3ω2
3/2 plays the role of “kinetic” energy.
2 Composite Rotation
These are rotational dynamics problems like the ones you saw in M5, but more complex.
[3] Problem 10 (PPP 60). A uniform thin rod is placed with one end on the edge of a table in a
nearly vertical position and then released from rest. Find the angle it makes with the vertical at
the moment it loses contact with the table. Investigate the following two extreme cases.
(a) The edge of the table is smooth (friction is negligible) but has a small, single-step groove.
(b) The edge of the table is rough (friction is large) and very sharp, which means the radius of
curvature of the edge is much smaller than the flat end-face of the rod. Half of the end-face
protrudes beyond the table edge, so that when it is released the rod pivots about the edge.
Solution. Let ℓ be the length of the rod. By energy conservation, we have
1
2
1
3
mℓ2
ω2
= mg
ℓ
2
(1 − cosθ) =⇒ ω2
=
3g
ℓ
(1 − cosθ).
Differentiating this with respect to time gives
2ωω̇ =
3g
ℓ
(sinθ)θ̇ =⇒ ω̇ =
3g
2ℓ
sinθ.
The centripetal and tangential acceleration of the center of mass are
ac =
ω2ℓ
2
=
3
2
g(1 − cosθ), at =
ω̇ℓ
2
=
3
4
g sinθ.
20
Kevin Zhou Physics Olympiad Handouts
(a) This is formally identical to the falling ladder problem from M5, and hence has the same
answer. But we can also solve the problem directly here. We have
Nx = M(at cosθ − ac sinθ) =
3
4
Mg sinθ(3cosθ − 2)
and
Ny = Mg − M(ac cosθ + at sinθ) =
1
4
Mg(3cosθ − 1)2
.
The first one to go to zero is Nx, and this happens at θ = cos−1(2/3).
(b) In this case, the normal force points along the rod. Therefore,
N − Mg cosθ = −Mac,
so N = Mg 5
2 cosθ − 3
2

. This becomes zero at θ = cos−1(3/5).
[3] Problem 11 (Cahn). A tall, thin brick chimney of height L is slightly perturbed from its vertical
equilibrium position so that it topples over, rotating rigidly about its base B until it breaks at a
point P.
(a) For concreteness, we will model the internal forces in the chimney as shown below. Assume
throughout that r is very small.
We assume that each piece of the chimney experiences a shear force F and longitudinal tension
or compression forces T1 and T2 from its neighbors. Find the point on the chimney with the
greatest |T1| or |T2|, assuming the chimney is very thin.
21
Kevin Zhou Physics Olympiad Handouts
(b) Find the point on the chimney experiencing the greatest shear force F.
(c) At what point is the chimney most likely to break? Do you think the limiting factor is the
chimney’s maximal compressive strength, tensile strength, or shear strength?
Solution. See the solution here.
[3] Problem 12.   ^ 1 0IPhO 2014, problem 1A.
[2] Problem 13 (PPP 14). A bicycle is supported so that it can move forward or backwards but
cannot fall sideways; its pedals are in their highest and lowest positions.
A student crouches beside the bicycle and pulls a string attached to the lower pedal, providing a
backward horizontal force.
(a) Which way does the lower pedal move relative to the ground?
(b) Which way does the bicycle move?
To check your answer, watch this video.
Solution. (a) The student must do positive work on the bike to let it move, so the force and
displacement of the point where the force is applied have to be parallel. That is, the lower
pedal moves backwards.
(b) Technically, it depends on the gearing of the bike, but for a typical bike (and for the one
shown in the picture) it is backwards. To see this, let’s review how a bike works.
A bike works by moving the pedals, which are a distance rp from the pedal axle. This rotates
a gear of radius rg,p, which is connected by a chain to another gear of radius rg,w, which
rotates the rear wheel of radius R. By accounting for both the gearing ratios, we have
forward motion of bike
backward motion of pedal relative to bike
=
R
rg,w
rg,p
rp
.
The entire point of a bike’s gearing system is to make this ratio large, so that the bike can go
fast without your feet having to move like crazy. And this is indeed true in the image, which
has rp and rg,p comparable, and R ≫ rg,w.
Therefore, if you move the pedal forward a little, the bike goes backward a lot more, so the
net motion of the pedal (relative to the ground) is backward, consistent with part (a).
[4] Problem 14.   r 1 0APhO 2005, problem 1B. A problem on parametric resonance, an idea we first
encountered in M4. (The problem is good, but it’s slightly underspecified, leading to two possible
answers which were both accepted. If you get stuck, just make a reasonable assumption.)
22
Kevin Zhou Physics Olympiad Handouts
[4] Problem 15.   m 1 0INPhO 2020, problem 5. A tough angular collision problem.
[5] Problem 16.   h 1 0EuPhO 2019, problem 2. A tough problem about the motion of an rigid body
in a magnetic field.
3 Frictional Losses
These miscellaneous problems are grouped under the theme of friction or energy dissipation.
[2] Problem 17 (Kalda). A plank of length L and mass M lies on a frictionless horizontal surface; on
one end sits a small block of mass m.
The coefficient of friction between the block and plank is µ. The plank is sharply hit and given
horizontal velocity v. What is the minimum v required for the block to slide across the plank and
fall off the other end?
Solution. If the block barely is able to slide off, then right before it does, it has relative velocity
of zero with the plank. By momentum conservation the velocities are Mv/(M + m), so the energy
loss is
∆E =
1
2
Mv2
−
1
2
(m + M)

mv
m + M
 2
=
1
2
mM
m + M
v2
.
But this is also µmgL, so v =
p
2µgL(1 + m/M).
[3] Problem 18 (BAUPC). A uniform sheet of metal of length ℓ lies on a roof inclined at angle θ,
with coefficient of kinetic friction µ > tanθ. During the daytime, thermal expansion causes the
sheet to uniformly expand by an amount ∆ℓ ≪ ℓ. At night, the sheet contracts back to its original
length. What is the displacement of the sheet after one day and night?
Solution. When the sheet expands/contracts, it should do so about a certain point that doesn’t
move by continuity (the opposite ends move in opposite directions). Additionally, the forces from
the expansion/contraction should balance so the point remains stationary.
If the center of expansion is a distance x up from the bottom of the sheet, then the compressional
force balance for a sheet with linear mass density ρ will be
µxρg cosθ − ρgxsinθ = µ(ℓ − x)ρg cosθ + ρg(ℓ − x)sinθ
which simplifies to
x =
µ + tanθ
2µ
ℓ.
For contraction, the tension at the stationary point a distance y up from the bottom of the sheet
has a force balance equation of
µyρg cosθ + ρgy sinθ = µ(ℓ − y)ρg cosθ − ρg(ℓ − y)sinθ
which simplifies to
y = ℓ − x =
µ − tanθ
2µ
ℓ.
23
Kevin Zhou Physics Olympiad Handouts
When the sheet expands by an amount ∆ℓ, the distance each point moves is proportional to the
distance away from the stationary point since the expansion is uniform. The stationary point for
contraction is a distance of x − y = ℓtanθ/µ away from the stationary point for expansion, and
will move a distance of ∆ℓ(x − y)/ℓ down (away from the expansionary point), and stay stationary
for contraction. The net displacement for all the points is this distance, which is
tanθ
µ
∆ℓ.
This is a real practical issue for roofs, known as thermal creep.
[4] Problem 19. @ 1 0APhO 2010, problem 1A. An instructive model of an inelastic collision; expect
some messy intermediate expressions. I recommend the modified version by Jaan Kalda here.
[5] Problem 20.   h 1 0IPhO 2020, problem 2. A nice problem on anisotropic friction.
4 Ropes, Wires, and Chains
Example 6: MPPP 78
A uniform flexible rope passes over two small frictionless pulleys mounted at the same height.
The length of rope between the pulleys is ℓ, and its sag is h. In equilibrium, what is the
length s of the rope segments that hang down on either side?
Solution
The problem can be attacked by differential equations, but there is an elegant solution using
only algebra. We let our unknowns be s, the tension T1 = (T1,x,T1,y) in the rope at the
pulley, and the tension T2 at the lowest point.
Considering the entire sagging portion as the system, vertical force balance gives
2T1,y = λℓg, T1,y = λℓg/2.
Now consider half of the sagging portion as the system. Horizontal force balance gives
T2 = T1,x.
24
Kevin Zhou Physics Olympiad Handouts
Finally, consider one of the hanging portions as the system. Then
T1 = λgs.
We hence have three equations, but four unknowns.
For the final equation, we need to consider how the tension changes throughout the rope.
This would usually be done by a differential equation, but there is a clever approach using
conservation of energy. Suppose we cut the rope somewhere, pull out a segment dx, and
reattach the two ends. This requires work T dx, where T is the magnitude of the local
tension. Now suppose we cut the rope somewhere else, separate the ends by dx, and paste
our segment inside. This requires work −T′ dx. After this process, the rope is exactly in the
same state it was before, so the total work done must be zero.
This would seem to prove that T = T′, which is clearly wrong. The extra contribution is that
if the two locations have a difference in height ∆y, then it takes work λg(∆y)dx to move the
segment from the first to the second. So in equilibrium, for any two points of the rope,
∆T = λg ∆y.
Therefore, we have
T1 − T2 = λgh.
Now we’re ready to solve. We have
T2
1 − T2
2 = (λℓg/2)2
from our first three equations, and dividing by this new relation gives
T1 + T2 = λg
ℓ2
4h
.
This allows us to solve for T1, which gives
s =
T1
λg
=
h
2
+
ℓ2
8h
.
This is a useful result in real engineering projects: it means that the tension in a cable can
be estimated by seeing how much it sags.
Example 7: Kalda 27/IPhO 1971
A wedge with mass M and acute angles α1 and α2 lies on a horizontal surface. A string has
been drawn across a pulley situated at the top of the wedge, and its ends are tied to blocks
with masses m1 and m2.
25
Kevin Zhou Physics Olympiad Handouts
There is no friction anywhere. What is the acceleration of the wedge?
Solution
This is a classic example of a problem best solved with the Lagrangian-like techniques of M4.
By working in generalized coordinates, we won’t have to solve any systems of equations.
Let s be the distance the rope moves through the pulley, so that both blocks have speed ṡ in
the noninertial frame of the wedge. The “generalized force” is
Feff = −
dV
ds
= (m1 sinα1 − m2 sinα2)g.
Now, the kinetic energy in the lab frame will be of the form
K =
1
2
Meffṡ2
which means that, by the Euler–Lagrange equations,
s̈ =
Feff
Meff
.
Our task is now to calculate Meff. Since the center of mass of the system can’t move
horizontally, the wedge has speed
vw =
m1 cosα1 + m2 cosα2
M + m1 + m2
ṡ.
Now, it’s a bit annoying to directly compute the kinetic energy K in the lab frame, but it’s
easy to compute the kinetic energy in the frame of the wedge: it’s simply (m1 + m2)ṡ2/2.
But the two are also related simply,
K +
1
2
(M + m1 + m2)v2
w =
1
2
(m1 + m2)ṡ2
.
Using this to solve for K, we conclude
Meff = m1 + m2 −
(m1 cosα1 + m2 cosα2)2
M + m1 + m2
.
Finally, the desired acceleration is
aw =
m1 cosα1 + m2 cosα2
M + m1 + m2
s̈.
When you plug in the result for s̈, you’ll get a very complicated final answer, but the
Lagrangian derivation shows where all the pieces come from.
[3] Problem 21 (Kalda). A rope of mass per unit length ρ and length L is thrown over a pulley so
that the length of one hanging end is ℓ. The rope and pulley have enough friction so that they do
not slip against each other.
26
Kevin Zhou Physics Olympiad Handouts
The pulley is a hoop of mass m and radius R attached to a horizontal axle by light spokes. Find
the force on the axle immediately after the motion begins.
Solution. Let the distance the rope moves along the pulley be represented by the coordinate q. The
kinetic energy of the rope is 1
2ρLq̇2 since every section of the rope moves with velocity q̇. Without
slipping, the kinetic energy of the pulley is 1
2mq̇2. Another consequence of no slipping is that energy
is conserved, so dK/dt = −dU/dt.
When the rope moves along a small distance of dq, the change in potential energy can be
calculated by considering a segment dq moving from one end to another, having a difference in
vertical height of L − πR − 2ℓ. Thus dU = −ρgdq(L − πR − 2ℓ), so
dK
dt
= (m + ρL)q̇q̈ = ρgq̇(L − πR − 2ℓ), q̈ = g
ρ(L − πR − 2ℓ)
m + ρL
.
The vertical normal force can be determined by
P
mi(ay)i of the rope. The acceleration of the
parts moving up and down will cancel out, so the acceleration of the center of mass can be found
by considering the ”extra” segment of length L − πR − 2ℓ. The net vertical force on the system is
then ρ(L − πR − 2ℓ)q̈, so the force on the axle N satisfies (m + ρL)g − N = ρ(L − πR − 2ℓ)q̈.
Ny = g
(m + ρL)2 − ρ2(L − πR − 2ℓ)2
m + ρL
.
Since rope is transferred to the right, there is also a horizontal component of force on the axle.
When the rope moves along a distance dq,
P
midxi is essentially ρdq(2R) since it can be seen as a
segment of length dq moving to the other side. Thus Fx = ρq̈(2R), and
Nx = 2ρRg
ρ(L − πR − 2ℓ)
m + ρL
.
The answers are ugly, but they come from combining a few ingredients in a straightforward way.
[3] Problem 22 (French 5.10). Two equal masses are connected as shown with two identical massless
springs of spring constant k.
k
m
k
m
27
Kevin Zhou Physics Olympiad Handouts
Considering only motion in the vertical direction, show that the ratio of the frequencies of the two
normal modes is (
√
5 + 1)/(
√
5 − 1).
Solution. Let y1 denote the displacement of the upper mass and y2 for the lower mass. The
equations of motion are
mÿ1 = −ky1 − k(y1 − y2) = −2ky1 + ky2, mÿ2 = −ky2 + ky1
For normal modes, the particles will oscillate at the same frequency. Guessing a form y1 =
Aei(ωt+ϕ1) = Ãeiωt and y2 = B̃eiωt and defining α = ω/
p
k/m, the equations are
−ω2
Ã = −2ω2
0Ã + ω2
0B̃, −ω2
B̃ = −ω2
0B̃ + ω2
0Ã.
Dividing these equations gives
Ã
B̃
=
1
2 − α2
=
1 − α2
1
.
Solving for α, we find
α4
− 3α2
+ 1 = 0, α2
=
3 ±
√
5
2
Then the ratio of the two normal mode frequencies is
α1
α2
=
s
1 + 5 + 2
√
5
1 + 5 − 2
√
5
=
√
5 + 1
√
5 − 1
as desired.
[3] Problem 23 (Kalda). A massless rod of length ℓ is attached to the ceiling by a hinge which allows
the rod to rotate in a vertical plane.
The rod is initially vertical and the hinge is spun with a fixed angular velocity ω.
(a) Before starting, explain why this problem has to use rods, and not just strings.
(b) If a mass m if attached to the bottom of the rod, find the maximum ω for which the configu-
ration is stable.
(c) [A] Now suppose another mass m and rod of length ℓ is attached to the first mass by an
identical hinge that turns in the same direction, as shown above. Find the maximum ω for
which the configuration is stable. (Hint: the configuration is unstable if any infinitesimal
change in the angles of the rods can lower the energy.)
Solution. (a) If you take an ideal string and twist one end of it, then nothing will happen to an
object hanging from the other side. By contrast, if you did the same thing with a rod, then
the object would start rotating. The difference is that a rod can transmit torsion (torque
about its own axis), while an ideal string does not.
28
Kevin Zhou Physics Olympiad Handouts
(b) First, let’s imagine what this motion looks like in the lab frame. If we define θ as the direction
of the rod to the vertical axis, the spinning of the hinge fixes dθ/dt = ω. So if the mass’s
height is fixed, this forces the mass to spin in a circle. More generally, it exerts a confusing
time-dependent force on the mass.
We don’t want to deal with that, so we work in the frame rotating with the hinge. In
this frame, the rod doesn’t rotate about the vertical axis; it just changes its tilt θ to the
vertical, in the plane of the page. The effective potential from the centrifugal force mω2r is
−
Rr
0 mω2r′ dr′ = −1
2mω2r2, where r is the distance from the vertical axis through the hinge.
In this setup, r = ℓsinθ and the potential energy from gravity is mgℓ(1 − cosθ). For small
angles, the potential energy is
U ≈ mgℓ

1 −

1 −
1
2
θ2

−
1
2
mω2
ℓ2
θ2
=
1
2
θ2
(mgℓ − mω2
ℓ2
)
The system is stable when U′′(θ) > 0, so the maximum value of ω for stability is
ωmax =
p
g/ℓ.
(c) Let the angles between the vertical and the upper, lower rods be θ1, θ2 ≪ 1 respectively. The
gravitational potential energy of the lower mass is mgℓ(1 − cosθ1) + mgℓ(1 − cosθ2), and the
Taylor expansion gives U2 = 1
2mgℓ(θ2
1 + θ2
2). Using the rotating reference frame again, the
potential energy from the centrifugal force is 1
2mω2r2, where r = ℓ(sinθ1 +sinθ2) ≈ ℓ(θ1 +θ2)
since the hinges go in the same direction. The total potential of the system (same potential
for the first mass) is then
U(θ1,θ2) = mgℓθ2
1 +
1
2
mgℓθ2
2 −
1
2
mω2
ℓ2
θ2
1 −
1
2
mω2
ℓ2
(θ1 + θ2)2
= mℓ2

(ω2
0 − ω2
)θ2
1 +
1
2
(ω2
0 − ω2
)θ2
2 − ω2
θ1θ2

where ω2
0 = g/ℓ. To be stable, we want the potential energy to be at a local minimum near
that point. We could test this by considering a general infinitesimal change in the angles.
However, the fastest way is to use the second derivative test for two-variable functions f(x,y).
Let’s consider a critical point of such a function, where ∂f/∂x = ∂f/∂y = 0. For f to be a
minimum along the x and y directions, we clearly need to have
∂2f
∂x2
> 0,
∂2f
∂y2
> 0.
In this problem, these are both true if ω < ω0.
However, we also have to worry whether it’s possible to decrease the potential energy by
traveling in some other direction. It turns out we are guaranteed to have a true minimum if
∂2f
∂x2
∂2f
∂y2
>

∂2f
∂x∂y
 2
.
In this problem, that condition is
2(ω2
0 − ω2
)2
− ω4
> 0.
29
Kevin Zhou Physics Olympiad Handouts
This quantity is positive for ω = 0, and first hits zero when
ω2
= ω2
0(2 −
√
2).
We therefore conclude that
ωmax =
r
g
l
(2 −
√
2).
[4] Problem 24 (PPP 106). A long, heavy flexible rope with mass ρ per unit length is stretched by a
constant force F. A sudden movement causes a circular loop to form at one end of the rope.
The center of the loop moves with speed c as shown.
(a) Find the speed c, assuming gravity is negligible.
(b) Find the energy E carried by a loop rotating with angular frequency ω.
(c) Show that the momentum p carried by the loop obeys E = pc. This is true for waves in
general, as we’ll see in W1.
(d) Find the angular momentum carried by the loop, about a point on the rope on the ground.
Solution. (a) By balancing forces on a small piece of the rope,
ρ(c2
/R)(Rdθ) = Fdθ
which gives F = ρc2, so c =
p
F/ρ.
(b) The mass of the loop is m = 2πRρ. Splitting the energy into center of mass energy and
rotational energy, we have
E =
1
2
mc2
+
1
2
(mR2
)ω2
= mc2
= 2πRF =
2πFc
ω
,
since c = ωR.
(c) Since the loop as a whole moves with speed c and has mass m, we have p = mc. Since
E = mc2, we have E = pc as desired.
(d) The orbital and spin angular momentum are
Lo = mcR =
mc2
ω
, Ls = Iω = mR2
ω =
mc2
ω
.
They happen to be equal, and the total angular momentum is 2mc2/ω.
30
Kevin Zhou Physics Olympiad Handouts
5 [A] Advanced Mathematical Techniques
The following problems were cut from earlier problem sets because they required more advanced
math; however, they illustrate some very neat and important ideas.
