---
id: kevin-zhou-m5-ex006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m5-ex006
solution_type: author
source_document: solution-document-kevin-zhou-m5sol
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M5Sol.pdf."
---

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

Ft
M
2
=
F2t2
2M
.
The torque about the center of mass is FR, so the angular acceleration is α = 2F/MR, so
Kr =
1
2

1
2
MR2

2Ft
MR
2
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

m
2
R2
+
1
2
m
2
R2

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

1 +
1
2
+ 4

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
[2] Problem 12.  W 1 0USAPhO 2006, problem A1.
[2] Problem 13.  W 1 0USAPhO 2013, problem A2.
[3] Problem 14.  W 1 0USAPhO 2014, problem A1.
Solution. See the official solutions as usual. If you’re curious, I also wrote up a solution that
doesn’t use a rotating frame here. It uses some techniques covered in M8.
