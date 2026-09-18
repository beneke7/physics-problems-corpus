---
id: kevin-zhou-m4-p002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p002
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[2] Problem 2. Some questions about small oscillations with the buoyant force.
(a) A cubical glacier of side length L has density ρi and floats in water with density ρw. Find
the angular frequency of small oscillations, assuming that a face of the glacier always remains
parallel to the water surface, and that the force of the water on the glacier is always given by
the hydrostatic buoyant force.
(b) A ball of radius R floats in water with half its volume submerged. Find the angular frequency
of small oscillations, making the same assumption.
(c) There are important effects that both of the previous parts neglect. What are some of them?
Is the true oscillation frequency higher or lower than the one found here?
Solution. (a) Let V = xL2 be the submerged volume, and let V0 = L3. We then have
F = −ρwV g + ρiV0g = −ρwL2
gx + const.
Thus,
ω =
s
ρwL2g
ρiL3
=
r
ρw
ρi
g
L
.
(b) The density of the ball is half that of water, so its mass is (2π/3)ρwR3. The “spring constant”
is πR2ρwg, so
ω =
s
πR2ρwg
(2π/3)ρwR3
=
r
3g
2R
.
(c) The most serious omission is that we have neglected the motion of the water. This clearly
should add extra inertia, because the water has to move around to accommodate the moving
glacier or ball, and it should be a significant change since the water is more dense than these
objects. This “added mass” effect leads to a decrease in the oscillation frequency, and we
discuss it further in M7.
In fact, the situation is even worse. As we’ll also see in M7, viscosity between the object and
water leads to a boundary layer of water carried along with the object. But since this boundary
layer builds up over time, its thickness depends on the entire history of the object’s motion!
This is called the Basset force, and it turns Newton’s second law into an “integro-differential
equation”, one where the second derivative of the position depends on an integral over all the
past positions. It has the effect of damping the oscillations (which also slightly decreases their
frequency). In general, nothing in fluid dynamics is easy.
[3] Problem 3.   W 1 0USAPhO 1998, problem A2. To avoid some confusion, skip part (a), since there
actually isn’t a nice closed-form expression for it.
[3] Problem 4.   W 1 0USAPhO 2009, problem A3.
[3] Problem 5.   m 1 0USAPhO 2010, problem B1.
3
Kevin Zhou Physics Olympiad Handouts
Example 2
Find the acceleration of an Atwood’s machine with masses m and M and a massless pulley
and string.
Solution
The “high school” way to do this is to let a1 and a2 be the vertical accelerations of the
masses, let T be the unknown tension in the string, solve for T by setting a1 and a2 to have
equal magnitudes, then plug T back in to find the common acceleration.
But this is unnecessarily complicated, because the system only has one degree of free-
dom. The fixed length of the string gives us a constraint: if we know where one of the
masses is, then we automatically know where the other is. So there should be a way to
describe the system without ever introducing a second variable. But there isn’t a single
Cartesian coordinate that accomplishes this, since the masses accelerate in opposite directions.
The key is to apply energy conservation to a “generalized coordinate” q. Specifically, let q
describe the distance that the string has moved along itself, so that q = 0 initially, and when
q = q0, the mass M has moved down by q0 and the mass m has moved up by q0. The kinetic
and potential energies of the system are simply
K =
1
2
(m + M)q̇2
, V = qg(m − M).
To find the acceleration q̈, we differentiate energy conservation with respect to time,
0 =
d(K + V )
dt
= (m + M)q̈q̇ + q̇g(m − M).
Solving gives the familiar result
q̈ =
M − m
M + m
g.
Intuitively, we could say that from the standpoint of this generalized coordinate, the “total
force” is (M − m)g, and the “total inertia” is M + m.
This will be a very useful concept, so let’s think about why it works. The first reason is that
forces and accelerations have directions but energy doesn’t, so thinking about energy lets
us collectively treat objects moving in different directions. The second reason is that in the
force-based derivation, we needed to define two variables because we had to eliminate the
unknown tension T. But in the energy-based derivation, the tension never shows up because
the inextensible string doesn’t do any work on the blocks. More generally, whenever a system
has rigid constraints like this, we can work with a reduced set of generalized coordinates
which automatically takes the constraints into account. The only cost is that, if you wanted
to know the values of the constraint forces, you’d have to do an extra step at the end.
4
Kevin Zhou Physics Olympiad Handouts
Idea 2
The idea shown in example 2 is very general. Consider any system whose configuration can
be described by a single “generalized coordinate” q. If its energy can be decomposed into a
kinetic energy quadratic in q̇, and a potential energy that depends only on q,
K =
1
2
meff q̇2
, V = V (q)
then the energy conservation equation d(K + V )/dt = 0 can be used to find the generalized
acceleration q̈. Explicitly, the chain rule tells us that
meff q̈ = −
∂V
∂q
.
For example, we recover the usual Newton’s second law for q = x, but q can also be something
completely different. We call meff q̇ a “generalized momentum”, and −∂V/∂q a “generalized
force”. The above equation also contains the principle of virtual work from M2, as it tells
us that static equilibrium can occur when ∂V/∂q = 0, i.e. when the potential energy doesn’t
change under a small motion.
Remark
The result above is a special case of the Euler–Lagrange equation in Lagrangian mechanics,
which states that if a system is described by a Lagrangian L, then
d
dt
∂L
∂q̇
=
∂L
∂q
.
In simple cases, one has L = K(q̇)−V (q), where typically K is quadratic in q̇, in which case
we recover the previous result. But more generally, it might not be possible to meaningfully
decompose L into a “kinetic” and “potential” piece at all! We won’t use this more general
form below. While it is more powerful, it is also more complicated, and if you find yourself
using it for an Olympiad problem, there’s probably an easier way.
