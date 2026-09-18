---
id: kevin-zhou-m2-ex011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-ex011
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

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
