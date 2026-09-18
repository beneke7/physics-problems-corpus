---
id: solution-document-kevin-zhou-m5sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-m5-ex002, kevin-zhou-m5-ex005, kevin-zhou-m5-ex006, kevin-zhou-m5-ex008, kevin-zhou-m5-p001, kevin-zhou-m5-p004, kevin-zhou-m5-p005, kevin-zhou-m5-p015, kevin-zhou-m5-p025, kevin-zhou-m5-p026]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/M5Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Mechanics V: 2D Rotation
Two-dimensional rotation is covered in chapter 6 of Kleppner and Kolenkow, chapter 8 of Morin,
or chapters 3 and 5 of Wang and Ricardo, volume 1. Further discussion is given in chapters I-18
and I-19 of the Feynman lectures. For more on dot and cross products, see the first two lectures of
MIT OCW 18.02. There is a total of 84 points.
1 2D Rotational Kinematics
Idea 1
It can be shown that the instantaneous velocity of a two-dimensional rigid body can always
be written as pure rotation about some point r0, not necessarily in the body. Then the
velocity of a point in the body at location r is
v = ω × (r − r0).
This equation defines ω, the angular velocity vector, which points out of the page. Differen-
tiating gives the acceleration of a point in the body,
a = α× (r − r0) + ω × (v − v0)
= α× (r − r0) + ω × (ω × (r − r0)) − ω × v0
where v0 = dr0/dt is the rate of change of the location of the pivot point. (Note that this
differs from the velocity of the point in the body instantaneously at the pivot, which is
always zero.) However, this latter expression is often hard to use, because you usually won’t
know r0(t), or it’ll have a complicated form.
Alternatively, we can write the velocity in terms of translation plus pure rotation about any
desired point, which is almost always chosen to be the center of mass. This gives
v = vCM + ω × (r − rCM).
The ω here is the same as in the previous expression. Differentiating gives the acceleration,
a = aCM + α× (r − rCM) + ω × (v − vCM)
= aCM + α× (r − rCM) + ω × (ω × (r − rCM)).
If you need an acceleration, this form tends to be easiest to use. The three terms represent
the acceleration of the center of mass, the linear acceleration due to angular acceleration,
and the centripetal acceleration, written in a slightly fancy way.
Remark 1: Cross Products
You learn in school that if a × b = c, then the direction of c is found by applying the
right-hand rule to a and b, and its magnitude is |a||b|sinθ where θ is the angle between
them. However, this comes from some more basic properties which will also be useful below.
1

Kevin Zhou Physics Olympiad Handouts
First, the cross product of two vectors is antisymmetric and distributes over addition,
a × b = −b × a, a × (r1b1 + r2b2) = r1a × b1 + r2a × b2.
The latter means a cross product can be differentiated using the product rule. Moreover,
x̂ × ŷ = ẑ, ŷ × ẑ = x̂, ẑ × x̂ = ŷ.
Example 1
Describe the velocities of points in a disc rolling without slipping using both methods.
Solution
Let the disc have radius R, lie in the xy plane, and roll along the x axis. Consider the
moment where the bottom of the disc touches the origin. At this moment its motion can be
thought of as pure rotation about the origin,
v = ω × r = −ωẑ × r.
On the other hand, the motion can also be thought of as simultaneous translation of the
center of mass and rotation about the center of mass, so
v = vCM + ω × (r − rCM)
= ωRx̂ − ωẑ × (r − Rŷ)
= ωRx̂ − ωẑ × r − ωRx̂
= −ωẑ × r.
As we can see, both decompositions are completely equivalent. Which one you want to use
depends on the problem; you could even use both in the same problem, if you’re careful.
Remark
As we’ll discuss in M8, for three-dimensional rigid bodies, rotation is always about an axis.
When people say a body rotates about a point, as we will throughout this problem set, they
always mean that the body is two-dimensional and moves in a fixed plane, and the “point”
of rotation is the intersection of the 3D rotation axis with the plane.
You might also wonder how the description
v = ω × (r − r0)
applies in the case where a body is in pure translation. That’s simply the case where ω goes
to zero while r0 gets infinitely far away. In this limit, r is negligible, so every point in the
body moves with the same velocity v = −ω × r0. So the description still works for pure
translation, though it’s a bit unnatural.
2

Kevin Zhou Physics Olympiad Handouts
Example 2
A cylinder of circumference 10cm is placed on a table. You place a ruler horizontally on
the cylinder, so that initially the top of the cylinder touches the 0 cm mark on the ruler.
By pushing the ruler forward, you make the cylinder complete one full revolution, without
anything slipping. At this point, what mark on the ruler is touching the top of the cylinder?
Solution
In one revolution, the center of the cylinder moves forward by 10cm. The top of the cylinder
moves forward by 20cm, so the ruler also moves forward by this distance. The relative motion
of the ruler and cylinder is the difference, which is 10cm.
[4] Problem 1. Some brief puzzles about rotation.
(a) Consider two identical coins laid flat on a table. One is fixed in place, and the second is rolled
without slipping around the first. Once the second coin’s center has returned to its original
position, how many times has it rotated? (Be sure to check your answer experimentally!)
(b) A bicycle wheel is rolling without slipping. When it is photographed, its spokes look blurred,
except along a curve of special points, which don’t look blurred at all. What is this curve?
(c) Consider a spaceship floating in space, without any thrusters that can expel material. Con-
servation of momentum implies that it cannot move its center of mass. But is it possible to
turn the spaceship around? In other words, is it possible for it to begin stationary in one
orientation, and end up stationary in another orientation? If so, why doesn’t this violate
conservation of angular momentum?
(d) Hold out your arm with your elbow bent at 90◦ and your palm straight out, facing down. Find
a way to end up in the same position but with your palm facing up, without ever bending or
rotating your wrist.
Solution. (a) Since the two coins have the same circumference, you might think the answer is 1.
However, the answer is 2, as is easily checked experimentally. Rolling around a convex curved
surface gives an extra turn, as you can check with limiting cases, such as rolling around a big
square.
Another way to think about this is that the center of the coin moves in a circle of radius 2r,
where r is the radius of the coin. Since the coin rolls without slipping, vCM = ωr at all times.
Integrating this result, dCM = θr where dCM is the distance through which the center of mass
moves, and θ is the total turn angle. Then 2π(2r) = θr which gives θ = 4π.
(b) Note that the motion can be described as pure rotation about the contact point C. For the
special points P, we want the velocity of that point to be parallel to the spokes, so the line
CP to be perpendicular to the spoke OP. It is not hard to see that this locus is the circle
with diameter OC.
(c) Just rotate a wheel inside the spaceship. If the wheel spins clockwise, then the rest of the
spaceship will start spinning counterclockwise, by conservation of angular momentum. Then
the wheel can be stopped when the spaceship has the desired final orientation. (This is actually
3

Kevin Zhou Physics Olympiad Handouts
how spaceships turn around: they carry large reaction wheels which are spun up or down as
needed. The ability to change orientation is essential for space telescopes, and in practice the
wheels are always rotating fairly quickly, because their angular momentum can gyroscopically
stabilize the rest of the ship.)
The fundamental reason this works is that rotations are periodic; unlike translations, you can
give something a net rotation but also end up back where you started. For a closely related
trick, see how a falling cat can turn itself around.
(d) Starting from the original position, bring your forearm horizontally to your chest, then rotate
it vertically, then return it to the original position. At this point, your palm should be facing
horizontally. Repeat the sequence to get it facing upward.
The fundamental reason this works is that your wrist and palm are constrained to move along
a sphere, and the surface of a sphere is curved. Curvature intrinsically means that this kind
of “parallel transport” doesn’t necessarily return you to your original configuration. It’s an
important idea in differential geometry and general relativity. (The detailed math tells us
that the angle through which your palm rotates is proportional to the solid angle traced out
by the loop. So in theory, you could also achieve the same thing by moving your hand in one
giant loop, though this takes some flexibility, or ten times in a small loop. The latter might
not work in practice, though, because your brain might unconsciously rotate your wrist a bit
to compensate for the effect.)
[2] Problem 2 (Kalda). A rigid lump is squeezed between two places, one of which is moving at
velocity v1 and the other at v2. At some moment, the velocities are horizontal and the two contact
points are vertically aligned.
Describe geometrically all of the points in the body with speed either v1 or v2.
Solution. The motion of the rigid body can be expressed as rotation about some point O. It must
be on the vertical line connecting the two contact points, with distances to those points satisfying
ω = v1/r1 = v2/r2, where r1 + r2 is the distance between the contact points. Then, all points with
speed v1 lie on the circle centered at O with radius r1, and radius r2 for v2.
[2] Problem 3.   W 1 0USAPhO 2010, problem A1.
4

Kevin Zhou Physics Olympiad Handouts
2 Moments of Inertia
Idea 2
For a two-dimensional object in the xy plane, the moment of inertia
I =
Z
x2
+ y2
dm
about the z-axis obeys the parallel axis theorem
I = ICM + Mr2
CM
where ICM is the moment of inertia about the center of mass, and M is the total mass.
Defining Ix and Iy to be the moment of inertia about the x and y axes, we have
I = Ix + Iy, Ix =
Z
y2
dm, Iy =
Z
x2
dm
which is called the perpendicular axis theorem.
[3] Problem 4. Basic moment of inertia computations.
(a) Compute the moment of inertia for an Lx × Ly rectangular plate about an axis passing
perpendicular to it through the center.
(b) Compute the moment of inertia for a uniform disc of radius R and mass M, about an axis
perpendicular to it through its center. What about an axis lying in the disc, passing through
its center?
(c) Compute the moment of inertia of a uniform solid cone of mass M, with height H and a base
of radius R, about its symmetry axis.
Solution. (a) We have
Iy =
Z Lx/2
−Lx/2
x2
(M/Lx)dx =
1
12
ML2
x
with a similar expression for Ix, giving an answer of M(L2
x + L2
y)/12.
(b) By direct integration,
I =
Z R
0
r2
(M/πR2
)2πrdr =
1
2
MR2
.
For an axis lying in the disc, the answer is half as much, MR2/4, by the perpendicular axis
theorem.
(c) First off, we know the height H doesn’t matter, because we can stretch the cone along its
symmetry axis without changing the answer. Letting the density be ρ, we can integrate over
the discs making up the cone,
I =
Z
dI =
Z
1
2
(dm)r2
=
Z H
0
1
2
(ρπr2
dh)r2
5

Kevin Zhou Physics Olympiad Handouts
where the radius of the disc at height h is, in some set of coordinates, r(h) = R(h/H). Plugging
this in, we get
I =
Z H
0
π
2
ρR4 h4
H4
dh =
πρR4H
10
.
It remains to find ρ, by noting that
M =
Z
dm =
Z H
0
ρπr2
dh = ρπ
R2
H2
Z H
0
h2
dh =
πρR2H
3
.
Plugging in the result for ρ gives
I =
3
10
MR2
.
This makes sense, as it’s somewhat less than the moment of inertia of a uniform disc; a cone
has comparatively more of its mass closer to the axis.
[1] Problem 5 (F = ma 2016). The moment of inertia of a uniform equilateral triangle with mass
m and side length a about an axis through one of its sides and parallel to that side is ma2/8. What
is the moment of inertia of a uniform regular hexagon of mass m and side length a about an axis
through two opposite vertices?
Solution. I include this question as an example of constructing a moment of inertia of a complex
shape from pieces. There are much more complicated variants, but they’re all the same idea.
Four of the triangles clearly each contribute (m/6)a2/8. The other two each contribute
m
6

a2
/8 − (a/2
√
3)2
+ (a/
√
3)2

= 3(m/6)a2
/8
where we did two consecutive applications of the parallel axis theorem. Thus, the total is
I =
ma2
6
(4/8 + 3/4) =
5ma2
24
.
3 Rotational Dynamics
In this section we’ll consider some dynamic problems involving rotation.
Idea 3: Angular Momentum
For a system of particles we define the angular momentum and torque
L =
X
i
ri × pi, τ =
X
i
ri × Fi, τ =
dL
dt
.
Using the first part of idea 1, we may write the angular momentum of a rigid body as
L = Iω, K =
1
2
Iω2
where I is the moment of inertia about the instantaneous axis of rotation. Alternatively,
using the second part,
L = ICMω + rCM × MvCM, K =
1
2
ICMω2
+
1
2
Mv2
CM
6

Kevin Zhou Physics Olympiad Handouts
where M is the total mass; the two terms are called “spin” and “orbital” contributions.
Both forms are useful in different situations. Systems cannot exert torques on themselves,
provided they obey the strong form of Newton’s third law: the force between two objects is
equal and opposite, and directed along the line joining them.
Idea 4
The idea above refers to taking torques about a fixed point, but often it is easier to consider
a moving point P. Let L be the angular momentum about point P in the frame of P, i.e. the
frame whose axes don’t rotate, but whose origin follows P around. Working in this frame
will produce fictitious forces, since P can accelerate. Such forces act at the center of mass,
just like gravity.
The upshot is that if P is the center of mass, then the fictitious force in the frame of P will
produce no “fictitious torque”. So it’s safe to use τ = dL/dt about either a fixed point, or in
the frame of the center of mass.
Idea 5
There is a third, more confusing way of applying τ = dL/dt that you might rarely see:
taking torques about the instantaneous center of rotation. In general, this doesn’t work,
because the instantaneous center of rotation can accelerate, producing an extra fictitious
torque as mentioned above.
However, it turns out this procedure gives the correct answer if the object is instantaneously
at rest. That’s why taking torques about the contact point for the spool in M2 to find the
initial angular acceleration was valid. It wouldn’t have been valid at any instant afterward,
after the spool had picked up some velocity.
For more discussion of this subtlety, which isn’t mentioned in any textbooks I know of, see
the paper Moments to be cautious of .
Example 3: KK 6.13
A mass m is attached to a post of radius R by a string. Initially it is a distance r from the
center of the post and is moving tangentially with speed v0. In case (a) the string passes
through a hole in the center of the post at the top. The string is gradually shortened by
drawing it through the hole. In case (b) the string wraps around the outside of the post.
Ignore gravity.
7

Kevin Zhou Physics Olympiad Handouts
For each case, find the final speed of the mass when it hits the post.
Solution
In case (a), the energy isn’t conserved, since work is done on the mass as it moves inward.
(Physically, we can see this by noting there could be a weight slowly descending on the other
end of the string.) However, angular momentum conservation says Rv = rv0, so v = rv0/R.
If you don’t believe in angular momentum conservation yet, it’s not too hard to show this
with F = ma as well. Let the tangential and radial speeds of the mass be vt and vr, where
vr ≪ vt. Since vr is nonzero, there is a component of acceleration parallel to the velocity,
T
m
sinθ ≈
v2
t
r
vr
vt
and this is equal to the rate of change of speed, which to first order in vr/vt is dvt/dt. Thus,
dvt
dt
=
vrvt
r
= −
vt
r
dr
dt
from which we conclude rvt is constant, as expected. (As mentioned in M2, you never need
ideas like torque and angular momentum. Life is just harder without them.)
In case (b), the angular momentum about the axis of the pole isn’t conserved, since the
tension force has a lever arm about that axis. However, the mass’s energy is conserved. A
simple physical way to see this is to note that the massless string can’t store any energy,
and the post doesn’t do work on the string, which means the string can’t do any work on
the mass. Thus, the final speed is just v = v0. (Of course, if you don’t believe in energy
conservation, you could get the same result by showing that the trajectory of the mass is
always perpendicular to the string, though this takes more work.)
[2] Problem 6 (KK 6.9). A heavy uniform bar of mass M rests on top of two identical rollers which
are continuously turned rapidly in opposite directions, as shown.
8

Kevin Zhou Physics Olympiad Handouts
The centers of the rollers are a distance 2ℓ apart. The coefficient of friction between the bar and
the roller surfaces is µ, a constant independent of the relative speed of the two surfaces. Initially
the bar is held at rest with its center at distance x0 from the midpoint of the rollers. At time t = 0
it is released. Find the subsequent motion of the bar.
Solution. Let N1 be the normal force from the right roller, and N2 be the one from the left roller.
Since there is no acceleration in the y-direction, we have N1 + N2 = Mg. Also, since the bar is not
rotating, the torque about the center is zero, so N1(ℓ−x0) = N2(ℓ+x0). One quickly sees that the
solution to this system is
N1 =
Mg(ℓ + x0)
2ℓ
, N2 =
Mg(ℓ − x0)
2ℓ
.
Now, the friction force from the right roller points to the left with magnitude N1µ, and the one
from the left roller points to the right with magnitude N2µ. Therefore, the total net force on this
system is
N1µ − N2µ = Mgµ
x0
ℓ
to the left. This is simple harmonic motion with angular frequency ω =
p
µg/ℓ. This neat system
is called a “friction oscillator”, or “Timoshenko oscillator”.
[2] Problem 7 (BAUPC). A mass is connected to one end of a massless string, the other end of which
is connected to a very thin frictionless vertical pole. The string is initially wound completely around
the pole, in a very large number of small horizontal circles, with the mass touching the pole. The
mass is released, and the string gradually unwinds. What angle does the string make with the pole
when it becomes completely unwound? (Though the setup is similar to that of example 3, you can’t
ignore gravity here.)
Solution. Let the string have length ℓ, a final angle of θ with the pole, and final angular velocity
ω = v/ℓsinθ. As it unwinds, there is no source of energy loss so energy is conserved.
gℓcosθ =
1
2
v2
The components of the force on the mass from the string is a horizontal component for a centripetal
force, and a vertical component to balance gravity,
T sinθ = mω2
ℓsinθ, T cosθ = mg.
Solving yields
tanθ =
v2
gℓsinθ
=
2
tanθ
.
Thus, θ = arctan(
√
2) ≈ 54.74◦.
9

Kevin Zhou Physics Olympiad Handouts
Example 4: MPPP 49
A uniform cylinder of mass M and radius R is attached to two identical strings. The strings
are wound around the cylinder as shown, and their free ends are fastened to the ceiling.
A third cord is attached to and wound around the middle of the cylinder, and a mass M is
attached to the other side. There is sufficient friction so that the strings do not slip. Find
the acceleration of the mass immediately after release.
Solution
Let a be the downward acceleration of the center of mass of the cylinder, let T1 be the total
tension in the first two strings, and let T2 be the tension in the third. The cylinder rolls
without slipping about its contact axis with the first two strings, which means the downward
acceleration of the mass is amass = 2a.
The Newton’s second law equations are thus
Ma = T2 + Mg − T1, 2Ma = Mg − T2
for the cylinder and mass. Taking torques about the axis of the cylinder gives
(T1 + T2)R =
1
2
MR2
α
and using a = αR converts this to
Ma = 2T1 + 2T2.
We now have three equations in three unknowns, so we can straightforwardly solve to find
a = (6/11)g. This implies that the acceleration of the mass is
amass =
12
11
g.
Done, right? No, this is the wrong answer! Since the acceleration is greater than free fall,
the tension T2 must be negative. But a string can’t support a negative tension, so it instead
goes slack. The mass thus free falls, so amass = g.
In retrospect, we could have seen this conclusion with less work. Suppose the mass were not
attached. Then the acceleration of the cylinder can be computed with the standard rolling
10

Kevin Zhou Physics Olympiad Handouts
without slipping formula,
a =
g sinθ
1 + β
=
g
1 + β
, I = βMR2
.
For any (axially symmetric) mass distribution in the cylinder, we have 0 ≤ β ≤ 1. The
acceleration of the part where the mass would have been attached is hence
amass =
2g
1 + β
≥ g.
This implies that any string we attach there must go slack immediately after release.
Example 5
If you’re riding a bike and need to stop quickly, what are the advantages and disadvantages
of using the front brake versus the rear brake?
Solution
Work in the reference frame moving with the bike. In this frame, the backward friction force
is balanced by a forward fictitious force on the center of mass; the combination of the two
produces a torque that tends to lift the rear wheel off the ground. If you use the front brake,
you can stop more quickly, because the normal force on the front tire stays higher. But if
you brake too hard with the front brake, you could flip yourself over the handlebars. This
can’t happen when using the rear brake alone, because the brake stops doing anything the
moment the rear wheel lifts off the ground.
Idea 6
It is often useful in rotational dynamics to treat the rotational and linear motion of a rigid
body conceptually separately.
Example 6: F = ma 2018 B23
Two particles with mass m1 and m2 are connected by a massless rigid rod of length L and
placed on a horizontal frictionless table. At time t = 0, the first mass receives an impulse
perpendicular to the rod, giving it speed v. At this moment, the second mass is at rest.
When is the next time the second mass is at rest?
Solution
The motion is the superposition of two motions: uniform translation of both masses with
speed m1v/(m1 +m2) and circular motion about the common center of mass, where the two
masses have speeds m2v/(m1 + m2) and m1v/(m1 + m2), respectively. This ensures that
the second mass begins at rest and the first mass has speed v.
11

Kevin Zhou Physics Olympiad Handouts
The circular part of the motion determines when the second mass will be at rest again.
The radius of the circle the second mass makes is its distance from the center of mass,
Lm1/(m1 + m2). This gives a period of
t =
2πLm1/(m1 + m2)
m1v/(m1 + m2)
=
2πL
v
.
[2] Problem 8 (KK 6.14). A uniform stick of mass M and length ℓ is suspended horizontally with
end B on the edge of a table, while end A is held by hand.
Point A is suddenly released. Right after release, find the vertical force at B, as well as the downward
acceleration of point A. You should find a result greater than g. Explain how this can be possible,
given that gravity is the only downward external force in the problem.
Solution. We take torques about B, applying idea 5. Note that τ = Mgℓ/2 = Iα = 1
3Mℓ2α, so
α = 3
2
g
ℓ . Thus, the instantaneous acceleration of the center of mass is αℓ/2 = 3
4g down. Therefore,
Mg − F = 3Mg/4, so F = Mg/4 . Furthermore, the acceleration of point A is 3g/2 down.
This can be greater than g because the stick is a rigid object, so it supports internal shear
stresses, which keep the whole body moving as one piece. If you consider a small piece of the stick
near the end, gravity provides a downward acceleration g, while a downward shear stress from the
rest of the stick provides the remaining downward acceleration g/2.
[2] Problem 9 (Quarterfinal 2005). A thin disk of mass M, radius R, and height H is initially at rest
on a flat horizontal table.
R
M
F
Top view
F
H
Side view
There is no friction between the disk and the table. A long massless cord is wrapped around the
disk and pulled with constant force F parallel to the table.
(a) Find the ratio of rotational to translational kinetic energy.
(b) What is the total work done by the force F during the disk’s first revolution?
Solution. This problem requires thinking about rotational and translational motion separately.
12

Kevin Zhou Physics Olympiad Handouts
(a) The linear acceleration is F/M, so the translational kinetic energy after time t is
Kt =
1
2
M

Ft
M
 2
=
F2t2
2M
.
The torque about the center of mass is FR, so the angular acceleration is α = 2F/MR, so
Kr =
1
2

1
2
MR2

2Ft
MR
 2
=
F2t2
M
from which we conclude Kr/Kt = 2.
(b) If the disk didn’t linearly accelerate, the answer would be 2πFR, and the translational kinetic
energy is half as much as the rotational kinetic energy, so the true answer is 3πFR.
For another perspective, the answer has to be Fℓ where ℓ is the distance through which the
cord has moved. (For example, the other end of the string might be attached to a hanging
mass of weight F, which would then move down by distance ℓ.) From the rotation we have a
distance 2πR, and from the translation there’s an additional distance πR, so that ℓ = 3πR.
[2] Problem 10 (Morin 8.71). A ball sits at rest on a piece of paper on a table. You pull the paper
in a straight line out from underneath the ball. You are free to pull the paper in an arbitrary way
forward or backwards; you may even jerk it so that the ball starts to slip. After the ball comes off
the paper, it will eventually roll without slipping. Show that, in fact, the ball ends up at rest. Is it
possible to pull the paper in such a way that the ball ends up exactly where it started?
Solution. The normal and gravitational forces cancel, so the only relevant force on the ball is
friction, which acts at the bottom. Consider the angular momentum, L = r × p, and torques,
τ = r×F, about the point of initial contact. Since r and F are always in the same plane, τ always
points perpendicular to the surface, and L =
R
τ dt will likewise be vertical.
During the process, the ball can move, as long as the horizontal components of its spin and
orbital angular momentum cancel out. But after the ball comes off the paper, it will eventually roll
without slipping, and in this case the spin and orbital angular momenta point in the same direction.
So the only way for the sum to be zero is for both to be zero, so the ball stops.
It is possible for the ball to end up where it started. If we just pull the paper out to the right,
the ball ends up to the left of where it started. But we can do a little maneuver in the beginning
to move the ball right, so that it cancels out the leftward motion in the last step. To do this, just
jerk the paper to the right a bit, getting the ball started rolling to the right, then stop it later by
jerking the paper to the left. Then pull the paper out to the right.
[2] Problem 11 (Morin 8.28). Consider the following “car” on an inclined plane.
The system is released from rest, and there is no slipping between any surfaces. Find the acceleration
of the board.
13

Kevin Zhou Physics Olympiad Handouts
Solution. Let the acceleration of the board be a, and the angular accelerations of the cylinders
be α. Looking at one cylinder, the motion of the cylinder can be seen as pure rotation about the
contact point with the slope (since there’s no slipping, that point is stationary). Then the cylinder
rotates about the contact point with angular acceleration α, and the top will accelerate at α(2R)
where R is the radius of the cylinders. Thus for the board to not slip, a = 2Rα.
Taking torques about the contact point, with f being the friction force between the cylinders
and board,
τ =

m
2
R2
+
1
2
m
2
R2

α =
m
2
gRsinθ − 2Rf.
For the acceleration of the board,
F = ma = 2f + mg sinθ.
Adding these two equations and substituting αR = a/2 yields the answer,
a =
12
11
g sinθ.
For sufficiently large θ, the downward acceleration of the board becomes larger than g, because it
experiences an extra downward force from friction with the wheels.
This problem can also be solved using the “Lagrangian”/energy methods of M4. Let s be the
distance the centers of the wheels have moved. Then by totaling up the kinetic energy,
K =
1
2
mṡ2
×

1 +
1
2
+ 4

≡
1
2
meffṡ2
where the three terms are the translational and rotational kinetic energy of the wheels, and the
kinetic energy of the board, which travels at twice the speed as the centers of the wheels. On the
other hand, the potential energy is
V = −mgssinθ(1 + 2) ≡ −Feffs
where the two terms are from the wheels and board. Then we have
s̈ =
Feff
meff
=
3mg sinθ
(11/2)m
=
6
11
g sinθ.
The acceleration of the board is twice this, giving the same answer as before.
[2] Problem 12.   W 1 0USAPhO 2006, problem A1.
[2] Problem 13.   W 1 0USAPhO 2013, problem A2.
[3] Problem 14.   W 1 0USAPhO 2014, problem A1.
Solution. See the official solutions as usual. If you’re curious, I also wrote up a solution that
doesn’t use a rotating frame here. It uses some techniques covered in M8.
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
Example 8: F = ma 2018 A14
Three identical masses are connected with identical rigid rods and pivoted at point A.
If the lowest mass receives a small horizontal push to the left, it oscillates with period T1. If
it receives a small push into the page, it oscillates with period T2. Find the ratio T1/T2.
Solution
Both modes are physical pendulums, which have period proportional to
p
I/Mgx where x
is the distance from the pivot to the center of mass, and I is the moment of inertia about
the pivot. Since x is the same in both cases, T1/T2 =
p
I1/I2 =
√
3, because in the second
case only the bottom mass contributes to the moment of inertia.
Example 9: Morin 8.41
The axis of a solid cylinder of mass m and radius r is connected to a spring of spring constant
k, as shown.
21

Kevin Zhou Physics Olympiad Handouts
If the cylinder rolls without slipping, find the angular frequency of the oscillations.
Solution
This is a question best handled using the energy methods of M4. The potential energy is
kx2/2 as usual, where x describes the position of the cylinder’s center of mass. The kinetic
energy is mv2/2+Iω2/2 = (3/4)mv2, since the cylinder is rolling without slipping. Therefore
ω =
s
k
meff
=
r
2k
3m
.
More complicated variants of this kind of problem can be solved in a similar way.
Example 10: Russia 2011
A uniform ring of mass m and radius r is suspended symmetrically on three inextensible
strings of length ℓ. Find the angular frequency of small oscillations.
Solution
The small oscillations are torsional, i.e. the ring rotates about its axis of symmetry. When
the ring has twisted by an angle θ, the strings are an angle ϕ ≈ (r/ℓ)θ from the vertical.
Thus, summing over the three strings, the restoring torque is
τ ≈ −mgrϕ ≈ −
mgr2
ℓ
θ.
Setting this equal to Iα, we find ω =
p
g/ℓ.
The tricky thing about this problem is that it’s harder to solve with the energy method. If
you try, you immediately run into the problem that there seems to be no potential energy
anywhere, since the strings don’t stretch! The source of the potential energy is that the ring
moves up a small amount as it oscillates, since the strings are no longer vertical,
h = ℓ −
p
ℓ2 − r2θ2 ≈
r2θ2
2ℓ
.
Therefore we have
K =
1
2
mr2
θ̇2
, V =
1
2
mgr2
ℓ
θ2
and the answer follows as usual. (There is also a kinetic energy contribution from the ring’s
vertical motion, but it’s negligible.) The lesson here is that the force/torque and energy
22

Kevin Zhou Physics Olympiad Handouts
approach have different strengths. The energy approach is often easier because it lets you
ignore some internal details of the system. But it can be harder because it requires you to
understand the kinematics of the system to second order, rather than first order.
[2] Problem 25. A circular pendulum consists of a point mass m on a string of length ℓ, which is
made to rotate in a horizontal circle. By using only the equation τ = dL/dt about an origin of your
choice, compute the angular frequency if the string makes a constant angle θ with the horizontal.
Solution. Of course, this would be easier with Newton’s second law, but we solve the problem
using torques to show the general technique, which will be useful when studying precession in M8.
We consider the angular momentum about the fixed top end of the string,
L = |r × p| = mvℓ = mℓ2
ω cosθ
where ω is the angular velocity of the circular motion. The angular momentum points at an angle
θ to the vertical. Its vertical component stays the same, while its horizontal component Lsinθ
rotates in a circle, so
dL
dt
= ωLsinθ = mℓ2
ω2
cosθsinθ.
We equate this to the magnitude of the torque due to gravity,
τ = |r × F| = mgℓcosθ.
We thus conclude that
ω =
r
g
ℓsinθ
.
As a check, in the limit of small oscillations θ → π/2, we get ω =
p
g/ℓ. This makes sense because
in this case, we can project in one direction to recover ordinary pendulum motion.
[3] Problem 26. Using a physical pendulum, one can measure the acceleration due to gravity as
g =
4π2
T2
I
md
.
In practice, I is not very precisely known, since it depends on the exact shape of the material. Kater
found an ingenious way to circumvent this problem. We pivot the pendulum at an arbitrary point
and measure the period T. Next, by trial and error, we find another pivot point which has the same
period, which lies at a different distance from the center of mass.
(a) Show that
g =
4π2L
T2
where L is the sum of the lengths from these points to the center of mass. This allows a
measurement of g without knowledge of the moment of inertia about the center of mass.
(b) When the two pivot points lie on a line, on opposite sides of the center of mass, then L is
simply the distance between the pivot points, which can be measured quite precisely, removing
the need to find the center of mass. However, we do have to be a bit careful. Show that the
formula in part (a) gives a totally wrong answer for a uniform cylinder of length L, with pivot
points at its two ends. What’s going on, and how can we fix the problem?
23

Kevin Zhou Physics Olympiad Handouts
Solution. (a) Using the parallel axis theorem where Ic is the moment of inertia about the center
of mass and x1 and x2 are the distances between the pivots and center of mass,
I1 = Ic + mx2
1, I2 = Ic + mx2
2.
For them to have the same period T, then the ratio I/x = mgT2/4π2 must be the same, so
I1
x1
=
I2
x2
.
Combining these equations, we find
Ic

1
x1
−
1
x2

= m(x2 − x1).
Since x1 ̸= x2, we can divide by x2 − x1 and find Ic = mx1x2. Thus,
I1
mx1
=
mx1x2 + mx2
1
mx1
= x1 + x2 = L.
The answer follows straightforwardly,
g =
4π2
T2
I
mx1
=
4π2L
T2
.
(b) For this system, we know that
g =
4π2
T2
I
md
=
4π2
T2
mL2/3
m(L/2)
=
2
3
4π2L
T2
which is completely different from the result in part (a). Looking back at the solution to part
(a), it is because we had to divide by x1 −x2 at some point, which is invalid if x1 = x2. (Or, if
we don’t divide, then we just get the trivial equation 0 = 0, which provides no information.)
Kater’s pendulum will always work if the pivot points are both on the same side of the center
of mass, as then we automatically have x1 ̸= x2. For pivots with the center of mass in between,
we need to ensure that x1 ̸= x2, which means the object can’t be perfectly symmetric. In
practice, people address this by just putting an extra weight on one end of the rod.
[3] Problem 27.   W 1 0USAPhO 1999, problem A4.
[3] Problem 28.   m 1 0USAPhO 2011, problem B2.
[3] Problem 29.   m 1 0USAPhO 2002, problem B1. An unusually tricky early USAPhO problem.
[4] Problem 30 (IPhO 1982). A coat hanger can perform small oscillations in the plane of the figure
about the three equilibrium figures shown.
42cm
10cm
In the first two figures, the long side is horizontal. The other two sides have equal length. The
period of oscillation is the same in all cases. The coat hanger does not necessarily have uniform
density. Where is the center of mass, and how long is the period?
24

Kevin Zhou Physics Olympiad Handouts
Solution. See the official solutions of IPhO 1982, problem 2.
[4] Problem 31 (APhO 2007). A uniform ball of mass M and radius r is encased in a thin spherical
shell, also of mass M. The shell is placed inside a fixed spherical bowl of radius R, and performs
small oscillations about the bottom. Assume that friction between the bowl and shell is very large,
so the shell essentially always rolls without slipping.
The ball is made of an unusual material: it can quickly transition between a liquid and solid
state. When the ball is in the liquid state, it has no viscosity, and hence no friction with the shell.
When the ball is in the solid state, it rotates with the shell.
(a) Find the period of the oscillations if the ball is always in the solid state.
(b) Find the period of the oscillations if the ball is always in the liquid state.
(c) The ball is now set so that it instantly switches to the liquid state whenever it starts moving
downward, and instantly switches to the solid state whenever it starts moving upward. If the
initial amplitude of oscillations is θ0, find the amplitude after n oscillations.
Solution. (a) In the solid state, the inside rotates with the shell, so the moment of inertia is
I =
2
5
Mr2
+
2
3
Mr2
=
16
15
Mr2
.
The rolling without slipping condition means v = ωr, so the total kinetic energy is
K =
1
2
(2M)v2
+
1
2
Iω2
= Mv2
+
8
15
Mv2
=
23
15
Mv2
.
If the angle between the line between the centers of the bowl and ball and the vertical is θ,
then v = (R − r)θ̇, and the potential energy is
U = 2Mg(R − r)(1 − cosθ) ≈ Mg(R − r)θ2
.
Since both the kinetic and potential energy are quadratic, this is simple harmonic motion. As
we saw in M4, if we write the total energy as
E =
1
2
meffθ̇2
+
1
2
keffθ2
then the period of oscillations is
T = 2π
r
meff
keff
= 2π
s
23(R − r)
15g
.
(b) The only difference here is that the liquid will no longer rotate, so the first term in the moment
of inertia above will no longer contribute. Then the kinetic energy is
K =
23
15
Mv2
−
1
5
Mv2
=
4
3
Mv2
which implies, by the same logic as in part (a), that
T = 2π
s
4(R − r)
3g
.
25

Kevin Zhou Physics Olympiad Handouts
(c) When the ball goes from solid to liquid, the entire ball is at rest, so no energy is lost. On
the other hand, when the ball switches from liquid to solid, the material inside the ball must
suddenly start rotating with the shell. This is an angular inelastic collision, where energy is
lost, so we expect the amplitude to decay.
Let’s suppose that just before the ball switches from liquid to solid, it has an angular velocity
ωi. Then the total energy is
Ei =
4
3
Mr2
ω2
i
by the work we did in part (b). As the material solidifies, the angular momentum about the
ball’s contact point with the bowl is conserved. Let the final angular velocity be ωf.
The initial moment of inertia of the shell about the contact point is
Ii =
2
3
Mr2
+ Mr2
=
5
3
Mr2
.
The shell is instantaneously rotating about the contact point, and so contributes angular mo-
mentum Iiωi. The liquid is only in translational motion, so it contributes angular momentum
Mvir = Mωir2. Thus, the total angular momentum is
Li = Iiωi + Mωir2
=
8
3
Mr2
ωi.
After the transition, both the shell and ball will rotate about the contact point, and the
moment of inertia is
If =
5
3
Mr2
+
2
5
Mr2
+ Mr2
=
46
15
Mr2
.
Conserving the angular momentum gives
8
3
Mr2
ωi =
46
15
Mr2
ωf
and therefore
ωf =
20
23
ωi.
Since the energy is E = ωL/2, this means
Ef =
20
23
Ei.
The angular amplitude θ ∝
√
E, so the amplitude decreases by a factor of
p
20/23 after each
collision. But there are two collisions per oscillation, so after n oscillations, the amplitude is
θn = θ0

20
23
 n
.
26
