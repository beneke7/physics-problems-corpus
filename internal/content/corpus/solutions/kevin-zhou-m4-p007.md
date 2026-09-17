---
id: kevin-zhou-m4-p007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p007
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

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
