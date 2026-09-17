---
id: kevin-zhou-m2-p025
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-p025
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

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

λgx
Tx

.
Integrating both sides again gives the solution for y,
y =
Tx
λg
cosh

λgx
Tx

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
