---
id: kevin-zhou-m5-p005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m5-p005
solution_type: author
source_document: solution-document-kevin-zhou-m5sol
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M5Sol.pdf."
---

[1] Problem 5 (F = ma 2016). The moment of inertia of a uniform equilateral triangle with mass
m and side length a about an axis through one of its sides and parallel to that side is ma2/8. What
is the moment of inertia of a uniform regular hexagon of mass m and side length a about an axis
through two opposite vertices?
Solution. I include this question as an example of constructing a moment of inertia of a complex
shape from pieces. There are much more complicated variants, but they’re all the same idea.
Four of the triangles clearly each contribute (m/6)a2/8. The other two each contribute
m
6

a2
/8 − (a/2
√
3)2
+ (a/
√
3)2

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
