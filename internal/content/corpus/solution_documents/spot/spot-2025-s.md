---
id: solution-document-spot-2025-s
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2025_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [spot-2025-q1, spot-2025-q2, spot-2025-q3, spot-2025-q4, spot-2025-q5, spot-2025-q6, spot-2025-q7, spot-2025-q8, spot-2025-q9]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2025_S.pdf."
---

Wednesday, 19 February 2025, 1:00pm – 5:00pm
2025 Selection Test
for the International Physics Olympiad (IPhO), Asian Physics
Olympiad (APhO) and International Nuclear Science Olympiad
(INSO)
a. This is a 4 hour test. Attempt all questions. The maximum total score is 80; marks
allocated for each question part are indicated in square brackets.
b. Check that there are a total of 34 printed pages (including this cover page). The last
page contains a table of physical constants that you may refer to and use.
c. Begin your answer for each question on a fresh sheet of paper, and present your working
and answers clearly. Your answer sheets should be sorted according to the order of the
questions.
d. Write your name on the top right hand corner of every answer sheet you submit.
e. You may use a standard (non-programmable) scientific calculator in accordance with the
statutes of the International Physics Olympiad.
f. No external materials may be brought into the examination room. No discussion is al-
lowed. Any intentional breach of integrity may lead to disqualification.
Question: 1 2 3 4 5 6 7 8 9 Total
Points: 6 5 5 10 10 14 10 12 8 80
Score:
Page 1 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
1. A wide river of uniform depth flows with a uniform constant speed u parallel to its banks.
A boat is moving in the river with constant speed v, measured in the moving frame of the
river.
As the boat moves, a metal ball is dropped into the river with zero vertical velocity and
the same horizontal velocity as the boat. The drag force law for the ball’s motion in water
is unknown. When the ball reaches the bottom of the river, the horizontal distance it has
travelled since its point of release is measured in the stationary frame of the river bank.
We will now consider three different cases, each with the boat moving in a different direction.
(Case 1) When the boat is moving downstream (its net motion is parallel to the river
velocity), the distance measured is a.
(Case 2) When the boat is moving upstream (its net motion is antiparallel to the river
velocity), the distance measured is b.
(Case 3) When the boat is moving such that its net motion in the stationary frame is
perpendicular to the velocity of the river, the distance measured is c.
(a) [1] Is it necessary to know the drag force law to determine the trajectory of the ball in the
frame of the river? Explain your answer. (Hint: Drawing a diagram may be helpful.)
Solution: No. All three trajectories are identical in the frame of the river because
the boat has the same velocity in that frame, so the ball has the same initial
velocity in that frame.
(b) [5] With appropriate diagrams, find the ratio v
u. Leave your answer in terms of a, b and
c.
Solution: As discussed before, we know that the trajectory of the ball in the rest
frame of the water is identical. Thus, we also know that the horizontal displacement
of the ball in all 3 cases is the same with respect to the water. The problem can
be solved by considering the displacement of the starting position and that of the
ball separately, in the frame of the moving water. The direction of the horizontal
displacement of the ball is dependent on the direction of the velocity of the boat
in the frame of the water.
l
ut
l
ut
a
b
ut
l
c
θ
case 1 case 2 case 3
The red arrow shows the unknown displacement l of the ball in the frame of the
water while the blue arrow shows the displacement of the starting position defined
in the lab frame, ut. Note that in case 3, ut and c are not perpendicular because
Page 2 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
the ball undergoes drag after it enters the river. We are able to form the following
relationships:
a = ut + l
b = ut − l
c2
= (ut)2
+ l2
− 2utlcosθ
We can find θ with the condition that the net motion of the boat is perpendicular
to the river motion. That gives us cosθ = u
v .
u
v
vstat. frame
θ
Solving, we get:
v
u
=
a2 − b2
a2 + b2 − 2c2
Marking Scheme:
Part Steps Marks
(a) Answer with correct explanation A1
(b) Correct direction of boat in the stationary
frame for the first and second case
M0.75
Correct direction of boat in the stationary
frame for the third case
M1
Correct expression for a and b in terms of un-
known quantities
M0.75
Use of method of cosines to express c M1
cosθ = u
v or equivalent M0.5
Correct final answer A1
Page 3 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
2. A pendulum with an inextensible string of length ℓ and mass m is attached to a spring of
zero natural length and stiffness k. The string and spring are fixed to two perpendicular
walls at distances l from the corner, as shown in the figure.
θ
ℓ ℓ
ℓ
(a) [2] At equilibrium, θ = θ0. Find θ0.
Solution: The fundamental simplification is that for a zero rest length spring, its
force is simply given by ⃗ F = −k⃗ r, so we may directly resolve components to get:
kℓ(1 − cosθ) = T cosθ
kℓ(1 − sinθ) + mg = T sinθ
Hence, we have:
kℓ(1 − cosθ)tanθ = kℓ(1 − sinθ) + mg
tanθ − sinθ = 1 − sinθ +
mg
kℓ
which simplifies to θ0 = tan−1

1 +
mg
kℓ

.
Alternatively, many correct answers used an energy approach. The potential energy
in the system is given by:
U =
1
2
kℓ2
[(1 − cosθ)2
+ (1 − sinθ)2
] − mgℓsinθ
=
1
2
kℓ2
(3 − 2cosθ − 2sinθ) − mgℓsinθ
At the equilibrium angle, the potential energy is at a minimum.
dU
dθ
= kℓ2
(sinθ − cosθ) − mgℓcosθ = 0
tanθ0 =
kl2 + mgℓ
kℓ2
θ0 = tan−1

1 +
mg
kℓ

(b) [3] Find the angular frequency of small oscillations of the system about equilibrium. If
required, leave your answer in terms of θ0.
Page 4 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Solution: The energy approach leads most directly to the final answer. Consider
the kinetic energy of the mass T = 1
2ml2θ̇2. Then, differentiating the total energy,
we obtain:
E =
1
2
ml2
θ̇2
+
1
2
kℓ2
(3 − 2cosθ − 2sinθ) − mgℓsinθ
0 = ml2
θ̇θ̈ + kl2
(sinθ − cosθ)θ̇ − mglcosθθ̇
We consider small displacements δθ about the equilibrium point θ0.
θ̈ = −
k
m
(sinθ − cosθ) +
g
l
cosθ
= −

k
m
(cosθ0 + sinθ0) +
g
l
sinθ0

δθ
ω =
r
k
m
(cosθ0 + sinθ0) +
g
l
sinθ0
Marking Scheme:
Part Steps Marks
(a) Correct force balance M1
Correct final answer A1
Correct energy expression M0.5
Correct differentiation, setting to zero M0.5
Correct final answer A1
(b) Correct total energy M0.5
Differentiating twice and evaluating at θ0 M1
ω =
q
U′′(θ0)
ml2 M0.5
Correct final answer A1
Page 5 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
3. A continuous rigid helix of uniform density has mass m and radius R. Its axis is oriented
vertically, and the vertical distance between each helix turn is H = πR. The helix is able
to rotate freely about its vertical axis but remains translationally fixed in place. It does not
undergo compression nor extension.
A small bead of identical mass m is threaded onto the frictionless helix. It is released from
rest at point A and allowed to slide downwards along the helix.
A
B
h
H
(a) [1] Find the helix angle θ of the helix. The helix angle is the slope angle with respect to
the horizontal, if the helix is unravelled.
Solution: For every horizontal distance 2πR travelled along the helix, a vertical
distance H is travelled. This gives us:
tanθ =
H
2πR
=
1
2
θ = arctan
1
2
(b) [4] When the ball passes point B, located a vertical distance h directly below A, determine
the angular velocity of the helix. If required, leave your answer in terms of θ.
Solution: As the ball slides down the helix, it acquires angular momentum about
the helix axis. Since the only external force on this system is gravity, which exerts
no torque about the helix axis, the total angular momentum of the system is
conserved at zero. The helix must thus be rotating in the opposite direction as the
translational velocity of the ball.
Let the magnitude of the angular velocity of the helix be ω, and let the velocity of
the ball in the frame of the helix be v′. The components of the ball velocity in the
lab frame in the horizontal and vertical directions are:
v∥ = v′
cosθ − ωR
v⊥ = v′
sinθ
Applying conservation of angular momentum, we have:
mv∥R − mR2
ω = 0
v′
cosθ − ωR = ωR
Page 6 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Applying conservation of energy, we have:
mgh =
1
2
m(v2
∥ + v2
⊥) +
1
2
mR2
ω2
2gh = (v′
cosθ − ωR)2
+ (v′
sinθ)2
+ R2
ω2
Solving these two equations simultaneously for v′ and ω, we obtain:
ω =
√
gh
R
cosθ
p
1 + sin2
θ
Marking Scheme:
Part Steps Marks
(a) Correct final answer A1
(b) Noticing that the equations for angular mo-
mentum and energy must be written in terms
of v′ (or equivalent)
M0.5
Correct decomposition of ball velocities in
horizontal and vertical directions in terms of
v′ and ω
M0.5
Noticing that conservation of angular momen-
tum may be applied
M0.5
Correct application of conservation of angular
momentum
M0.5
Noticing that conservation of energy may be
applied in the rotating frame
M0.5
Correct application of conservation of energy M0.5
Correct final answer A1
Page 7 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
4. Part A: Scaling Laws in a Column
Consider a solid cylindrical column of diameter d and height h supporting a sphere of
diameter D on top. Assume that D ≫ d, such that the contact area between the sphere
and column is effectively the cross-sectional area of the column.
(a) [2] Suppose the diameter of the column is just sufficient to withstand the compressive load
of the sphere. How should d scale with D, i.e. what should be the exponent α such
that d ∝ Dα? (Hint: The maximum stress that the solid column can withstand is a
constant. Assume even stress across the contact area.)
Solution: We have the weight of the sphere W ∝ D3, and the area A in contact
with the column is ∝ d2. Therefore, the stress is
σ =
W
A
∝
D3
d2
Since the maximum σ is a constant, we have d ∝ D3/2.
Another possible mode of structural failure is buckling. According to the Euler-Bernoulli
beam theory, the deflection w of a beam is related to its bending moment M by
M(x) = EI
d2w
dx2
where E is the Young’s modulus of the material (a constant), and I =
R
r2dA is the second
moment of area about its central axis (analogous to the moment of inertia, but involving
the cross-sectional area dA instead of the mass dm).
For example, in the figure above, a horizontal load P is applied inwards to both ends of
a beam, causing deflections w(x). The horizontal load causes a bending moment M(x) =
Pw(x). Above a critical load Pcrit, the beam will undergo buckling.
(b) [3] Consider the sphere-column system introduced in part (a). Given that h ∝ D, how
should d scale with D in order to prevent buckling?
Solution: We know that M = Pw, so
EI
d2w
dx2
+ Pw = 0
The general solution to this equation is
w = Asin
r
P
EI
x
!
+ B cos
r
P
EI
x
!
Applying the boundary conditions w(0) = w(h) = 0, we must have
q
P
EI h = nπ.
Therefore,
P ∝
I
h2
Page 8 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
The second moment of area I =
R
r2dA, so
I ∝ d4
Finally, since the load P is equal to the weight of the sphere ∝ D3, we obtain
D3
∝ P ∝
d4
D2
⇒ d ∝ D5/4
Part B: Scaling of Gravitational Potentials
A massive thin rhombus plate, with side length a and acute apex angle 60◦, has uniform
surface mass density σ. The gravitational potential at the vertex of the acute angle of the
rhombus is equal to φ1, and the potential at the vertex of the obtuse angle is φ2 (see first
object in the figure).
(c) [3] An equilateral triangle of side length 2a (see second object in the figure) has the same
uniform mass density σ. Find the gravitational potential at points C and D. Leave
your answers in terms of φ1 and φ2.
Solution: The rhombus is equivalent to two equilateral triangles joined along a
side. Hence by superposition, φ2 = 2φv , where φv = 1
2φ2 is the potential at vertex
of an equilateral triangle of side a. The equation for gravitational potential is
φ = G
Z
dm
r
= G
Z
σdA
r
The potential at points on an equilateral triangle thus scale proportionally to its
side length, so
φC = 2φv = φ2
The large equilateral triangle can be filled in by a rhombus and two smaller equilat-
eral triangles. The rhombus contributes a potential φ1, while the the two triangles
each contribute a potential φv. Hence, we have
φD = φ1 + 2
φ2
2
= φ1 + φ2
(d) [2] An equilateral triangle of side a (see third object in the figure) is cut out from the
Page 9 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
center. Find the new potential at C’ and D’. Leave your answer in terms of φ1 and
φ2.
Solution: Consider superposing a middle triangle of ”negative mass” distribution
−σ to our triangle in part (b). By superposition, our potential at D’ will be
φD′ = φD −
φ2
2
= φ1 +
φ2
2
Now, consider the initial rhombus again. The contribution of the further equilateral
triangle of the rhombus to the potential at the point labelled φ1 is φfar = φ1 − φ2
2 .
Applying the same method of negative mass, the potential at C’ will be
φC′ = φC − φfar =
3
2
φ2 − φ1
Marking Scheme:
Part Steps Marks
(a) W ∝ D3 M0.5
Area ∝ d2 M0.5
Stress ∝ D3/d2 M0.5
d ∝ D3/2 A0.5
(b) Differential equation for w M1
Solution for w M0.5
P ∝ EI
h2 M0.5
I ∝ d4 M0.5
d ∝ D5/4 A0.5
(c) Appropriate superposition argument M1
Appropriate scaling argument M1
φc = φ2 A0.5
φd = φ1 + φ2 A0.5
(d) Appropriate −σ superposition argument M1
φD′ = φ1 + φ2
2 A0.5
φC′ = 3
2φ2 − φ1 A0.5
Part A of this problem is adapted from examples in https://courses.cs.vt.edu/cs2104/
Spring18Onufriev/LectureNotes/ScalingLaws.pdf.
Page 10 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
5. Consider a point charge +q placed at a fixed distance d from an infinitely large, thin,
conducting plane.
+q d
A small fly, initially on the point charge, takes off with an initial angle θ from the horizontal.
Flying at a constant speed v, it follows the path of an electric field line until it reaches the
plane (this diagram is not drawn to scale).
+q d
θ
Fly
(a) [3] Define the coordinates (x,y) such that the plane is at x = 0, and the point charge is
at (−d,0). Determine Ex and Ey, the x and y components of the electric field, for all
points (x,y) in x < 0.
Solution: Using the method of images, we can find the electric field everywhere
to the left of the plane (x < 0):
⃗ E = ⃗ E(+q at (−d,0)) + ⃗ E(−q at (+d,0))



Ex = q
4πε0
h
x+d
((x+d)2+y2)3/2 − x−d
((x−d)2+y2)3/2
i
Ey = q
4πε0
h
y
((x+d)2+y2)3/2 − y
((x−d)2+y2)3/2
i
(b) [4] The electric field line illustrated terminates at (0,y0). Determine y0, leaving your
answer in terms of d and θ. (Hint: The curved surface area of a sphere sector with
half-angle θ is 1
2(1 − cosθ) of the total surface area of the sphere.)
Solution: Consider a Gaussian surface formed by the surface of revolution from
the fly’s trajectory and the plane. Since the curved part of the surface is by
definition parallel to the electric field lines, the only contribution to the electric
Page 11 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
flux is from its intersection with the plane.
ΦE =
Z y0
0
Ex(x = 0) · 2πy dy
=
qd
ε0
Z y0
0
y dy
(d2 + y2)3/2
=
qd
ε0
"
−
1
p
d2 + y2
#y0
0
=
q
ε0
1 −
d
p
d2 + y2
0
!
If we take the point charge to be spherical with radius r → 0, at the end with the
point charge, the surface approaches a cone with half-angle θ. We know that the
electric flux through a spherical surface surrounding a point charge is uniform, so
the flux passing through this surface is given by the total flux multiplied by the
surface area fraction of the sector with respect to the entire sphere:
ΦE =
q
2ε0
(1 − cosθ) =
q
ε0
sin2 θ
2
Equating the two fluxes, we have:
q
ε0
1 −
d
p
d2 + y2
0
!
=
q
ε0
sin2 θ
2
d
p
d2 + y2
0
= cos2 θ
2
y0 = d
r
sec4
θ
2
− 1
(c) [3] Find the instantaneous acceleration of the fly a as it reaches the plane. Leave your
answer in terms of v, d and θ. (Hint: The radius of curvature R of a curve y(x) is
given by R = (1+y′2)
3
2
y′′ , where primes denote a derivative with respect to x.)
Solution: Since the fly moves along a field line, its motion is parallel to the electric
field at every point. Hence, the trajectory of the fly is given by dy
dx =
Ey
Ex
. This is
a differential equation which can be solved to yield the full trajectory, however it
is extremely difficult and not the intended solution.
As the fly is moving at a constant speed, its acceleration must be perpendicular to
its velocity, with magnitude equal to the centripetal acceleration. At the plane, the
electric field lines are horizontal, so the expression simplifies considerably. Namely,
Ey = 0, dy
dx = 0 so d
dx = ∂
∂x, and the radius of curvature is given by 1
R = d2y
dx2 .
Page 12 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Hence,
a =
v2
R
= v2 d2y
dx2
= v2 ∂
∂x
Ey
Ex
= v2
E′
y
Ex
=
3
2
v2
2y(x+d)
((x+d)2+y2)5/2 − 2y(x−d)
((x−d)2+y2)5/2
x+d
((x+d)2+y2)3/2 − x−d
((x−d)2+y2)3/2
x=0
=
3y0
y2
0 + d2
v2
where primes denote a partial derivative with respect to x.
Substituting the expression for y0, the final answer is
a =
3v2
d
cos2 θ
2
sin
θ
2
r
1 + cos2
θ
2
Marking Scheme:
Part Steps Marks
(a) Image charge with correct magnitude and po-
sition
M1
Correct Ex A1
Correct Ey A1
(b) Applying Gauss’ Law M0.3
Appropriately constructed Gaussian surface M0.7
Identifying that electric flux is solely due to
intersection of field lines with plane
M0.5
Correct derivation for electric flux at plane M0.8
Considering point charge as a sphere and ob-
taining the correct flux
M1
Correct final answer A0.7
(c) Identifying that the acceleration is solely cen-
tripetal
M0.5
Identifying that electric field lines are horizon-
tal and simplifying the expression for radius of
curvature
M0.5
Correct equation of trajectory dy
dx =
Ey
Ex
M0.5
Differentiation and substitution M1
Correct final answer A0.5
Page 13 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
6. Superconductors exhibit the Meissner effect where below a critical temperature, the super-
conducting material expels all magnetic fields from its interior. This effect can be visualised
by magnetic field lines, which are unable to penetrate the superconducting surface, instead
curving around the superconductor.
This behaviour is similar to fluid flow around a solid object, and we may draw an analogy
between electromagetism and fluid dynamics. In this problem, we will exploit this analogy
to discuss the Magnus effect; a phenomenon that occurs when a rotating object moves
through a fluid.
(a) [2] Consider an infinitely long conducting cylinder of radius R, carrying current I along its
axis of symmetry distributed uniformly across its cross section. Find B(r) for r < R.
Solution: By Ampere’s Law,
I
⃗ B · d⃗ l = µ0 · Iencl = µ0I
r2
R2
This leads us directly to the result B(r) = µ0Ir
2πR2 .
Two straight, infinitely long cylindrical nonmagnetic conductors C+ and C−, insulated from
each other, overlap. They carry uniformly distributed current I in and out of the paper
respectively (i.e. C+ carries a current of I out of the page and C− carries a current of
I into the page. The overlapping region has zero net current). The cross sections of the
conductors (shaded in the figure) are limited by circles of radius R in the x-y plane, with
distance d between their centres.
(b) [2] Determine the magnetic field ⃗ B(x,y) in the space between the conductors. The origin
is placed in the middle of the two centres.
Solution:
The magnetic field can be determined as the superposition of the fields of two
cylindrical conductors. From part (a), we know that the magnetic field within a
current cylinder is azimuthal and has magnitude
B =
µ0Ir
2πR2
Consider an arbitrary point within the space between the two conductors.
Page 14 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Taking components of the magnetic fields along the x and y axes respectively,
Bx =
µ0r1I sinθ1
2πR2
−
µ0r2I sinθ2
2πR2
= 0
where we have used the fact that r1 sinθ1 = r2 sinθ2.
By = −
µ0r1I0 cosθ1
2πR2
−
µ0r2I0 cosθ2
2πR2
= −
µ0I0(r1 cosθ1 + r2 cosθ2)
2πR2
But r1 cosθ1 + r2 cosθ2 = d. Hence,
⃗ B = −
µ0Id
2πR2
ŷ
which is constant everywhere in the intersecting region.
An infinite solid superconducting cylinder of radius R with symmetry axis parallel to the
z-axis lies in a uniform external magnetic field of magnitude B0 parallel to the y-axis.
(c) [3] Knowing that superconductors repel magnetic fields, and using the result in part (b),
show that the net magnetic field ⃗ B1 in the region r > R is given by:
⃗ B1(r,θ) = B0 sinθ

1 −
R2
r2

r̂ + B0 cosθ

1 +
R2
r2

θ̂
Page 15 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Solution:
The net magnetic field within the cylinder is zero. To negate the external magnetic
field, there must be a current distribution on the surface of the superconducting
cylinder that generates a uniform magnetic field −B0ŷ within the cylinder. We
may apply our result from part (b), modelling the current distribution in the
superconductor as the superposition of two opposite current cylinders separated
by a distance d ≪ R (such that the intersection of the two current cylinders
effectively fills the entire volume of the superconducting cylinder). The current I
and separation d must satisfy
B0 =
µ0Id
2πR2
Hence, by Ampere’s Law, the magnetic field outside the cylinder is effectively
equal to the magnetic fields of two infinite current-carrying wires spaced a distance
d apart.
Superimposing the fields in polar coordinates, we obtain
B1,θ = B0 cosθ +
µ0I
2π
1
r − d
2 cosθ
−
1
r + d
2 cosθ
!
Taking first order terms with respect to d
r, we get
B1,θ = B0 cosθ +
µ0Idcosθ
2πr2
= B0 cosθ

1 +
R2
r2

Similarly, we can obtain
B1,r = B0 sinθ −
µ0I
2πr

dsinθ
r

= B0 sinθ

1 −
R2
r2

Hence, we conclude that
⃗ B1(r,θ) = B0 sinθ

1 −
R2
r2

r̂ + B0 cosθ

1 +
R2
r2

θ̂
Page 16 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
An infinitely long solid cylinder of radius R is placed in a region of incompressible, non-
viscous fluid that flows from y = −∞ with a uniform velocity of U0 ŷ, past the cylinder
and away towards y = +∞. Consider the fluid motion in one cross-sectional plane of the
cylinder.
(d) [2] Draw a diagram to represent the fluid flow around the cylinder and write down an
expression for ⃗ U(r,θ), the velocity of the fluid at any point in space outside the cylinder
in polar coordinates, justifying your answer.
Solution: Here, we need to make the appropriate analogy between our current
superconductor setup and what we are trying to find; which is the velocity field
of fluid flowing around an object. We notice a few similarities between magnetic
fields and the velocity fields of fluids.
1. Just like how magnetic field lines are unable to penetrate superconductors, fluid
always flows around the object; the velocity field must always be parallel to the
object surface, at the object surface.
2. Gauss’ Law for magnetism states that
H
⃗ B ·d⃗ S = 0 or ∇· ⃗ B = 0. This is similar
to the law of continuity for fluid flow ∇ · ⃗ U = 0.
Hence, since the governing equations for the magnetic field and velocity field are
the same, and the boundary condition at the cylinder surfaces are the same in
both cases, we can conclude that magnetic fields and velocity fields are exactly
analogous in this context.
We therefore obtain that the velocity field is:
⃗ U(r,θ) = U0 sinθ

1 −
R2
r2

r̂ + U0 cosθ

1 +
R2
r2

θ̂
Page 17 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
The cylinder is now given an angular velocity that points in the positive z-direction (out
of the paper), inducing circular currents in the fluid around it. To model the effect of the
rotation of the cylinder on the surrounding fluid, we will use the concept of circulation.
Usually, non-viscous flow has an important property of being irrotational: the circulation
of velocity along any closed path within the fluid is zero.
I
⃗ v · d⃗ l = 0
However, this changes if we introduce a vortex filament; which induces long range circulatory
flows in the fluid. For any closed loop that wraps around these filaments,
|
I
⃗ v · d⃗ l| = 2πΓ
where Γ is called the circulation quantum. To illustrate this, a vortex filament (thick line)
is drawn in fluid. The velocity circulation along paths L1, L2, L5 and L6 (thin lines) are
all zero, whereas those for L3 and L4 are equal to ±2πΓ. Note that circulations along L3
and L4 have opposite signs.
(e) [2] Model the rotation of the cylinder with a long infinite vortex filament with circulation
quantum Γ placed along the central axis of the cylinder. Find the new velocity field
⃗ U1(r,θ).
Solution:
Notice that we can separate the velocity field into two components - the irrotational
field ⃗ U(r,θ), and the rotational field generated by the circulation, which we call
⃗ v(r,θ). We may safely assume that ⃗ v(r,θ) is rotationally symmetric, making it
independent of θ. Furthermore, since it only has a rotational component, we will
call that vθ(r). Using the circulation law, we obtain:
2πrvθ(r) = 2πΓ
vθ(r) =
Γ
r
We can now simply superimpose vθ and ⃗ U(r,θ) to obtain:
⃗ U1(r,θ) = U sinθ

1 −
R2
r2

r̂ +

U cosθ

1 +
R2
r2

+
Γ
r

θ̂
Page 18 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
(f) [3] Given density of fluid ρ, find the force per unit length ⃗ F acting upon the cylinder due
to the fluid flow. (Hint: One possible solution is to apply Bernoulli’s equation.)
Solution: We are now almost done.
This is the Magnus effect; the rotation of the cylinder in the fluid generates an
asymmetric velocity field. Hence, by Bernoulli’s law, the resulting pressure field is
also asymmetric, generating a net force on the object.
First, let us find the velocity field ⃗ V (θ) at the surface of the object, since we want
to integrate the fluid pressure at the object’s surface to find the force. Substituting
r = R into ⃗ U1(r,θ),
⃗ V (θ) =

2U0 cosθ +
Γ
R

θ̂
We apply Bernoulli’s theorem, taking p0 to be the gauge pressure set at infinity:
p0 +
1
2
ρU2
0 = p(θ) +
1
2
ρV (θ)2
Simplifying, we obtain
p(θ) = p0 +
1
2
ρU2
0 (1 − 4cos2
θ) −
Γ2
R2
−
2ρΓU0 cosθ
R
Hence, the force per unit length can be expressed as:
⃗ F = −
Z 2π
0
p(θ)Rcosθdθx̂ −
Z 2π
0
p(θ)Rsinθdθŷ
The only term which remains non-zero upon integration is the cos2 θ term. We
may simplify the equation and obtain:
⃗ F =
Z 2π
0
2ρΓU0 cos2
θdθx̂
= 2πρΓU0 x̂
Page 19 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Marking Scheme:
Part Steps Marks
(a)
H
⃗ B · d⃗ l = µ0I r2
R2 M1
Correct final answer A1
(b) Idea of superposition of two opposite cylindri-
cal currents
M0.5
B(x) = 0 M0.5
Correct B(y) A1
(c) Realise that the configuration in part (b) with
current I satisfying B0 = µ0Id
2πR2 fufills the con-
dition that the magnetic field inside the su-
perconductor is 0
M1
Correct calculations for field due to supercon-
ductor, with sufficient detail
M1.5
Correct calculations for field due to external
field
M0.5
(d) Correct diagram A0.5
Justification on similarities in governing equa-
tions (Continuity, Gauss’ Law)
M0.5
Justification on similarities in boundary con-
ditions (No normal component at cylinder
walls)
M0.5
Correct final answer A0.5
(e) vtheta · 2πr = 2πΓ M1
Correct final answer A1
(f) Substitution of r = R to find ⃗ V (θ) M0.5
Use Bernoulli’s equation to find p = p0 +
1
2ρU2
0 (1 − 4cos2 θ) − Γ2
R2 − 2ρΓU0 cosθ
R
M1
Fy = 0 M0.5
Correct final answer A1
Page 20 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
7. Part A: Thin Lens Interference
A plano-convex lens with radius of curvature R and refractive index n is placed on top of a
flat glass plate such that there is a small air gap between the curved surface and the plate.
r
t(r)
(a) [11 /2] Consider the thickness t(r) of the air gap as a function of radial distance r from the
centre of the lens. Determine t(r) to leading order in r.
Solution: Applying Pythagoras’ Theorem, we use the fact that t ≪ R to show
that:
R2
= r2
+ (R − t(r))2
≈ r2
+ R2
− 2Rt(r)
t(r) ≈
r2
2R
(b) [21 /2] Collimated light of wavelength λ is incident on the lens. Determine the the radial
position rm of the mth bright fringe. Assume that the incident light and reflected light
is always approximately normal to both the lens and plate.
Solution: In order for constructive interference to occur, the phase difference be-
tween a ray that is reflected off the bottom surface of the lens and a ray transmitted
and reflected off the glass plate must be an integer multiple of 2π.
The transmitted ray travels an extra distance 2t, equivalent to a phase angle 4πt
λ .
Furthermore, as it is reflected within a medium of lower refractive index, whereas
the other ray is reflected within a medium of higher refractive index, it gains an
additional phase π. Thus we have:
4πt
λ
+ π = 2πm
2πr2
m
λR
+ π = 2πm
rm =
s
m −
1
2

λR
Page 21 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Part B: Double Slit Diffraction
We consider two-slit diffraction, but with collimated light of speed c and two different
wavelengths λ1,λ2 entering the two slits respectively. The two slits are separated by distance
d. For simplicity, we project onto a screen placed a distance r away, and define the angular
position θ at the screen as shown in the figure. Assume r ≫ d ≫ λ1,λ2. Set the phases of
the two waves at the slit to be ϕ = 0.
r
λ1
λ2
θ
(c) [3] Let the electric field through each slit have amplitude E0. Find the amplitude of the
total electric field at an angle θ on the screen, at an arbitrary time t. Express your
answer as a product of cosines or sines. (Hint: You may use the identity cosA+cosB =
2cos A+B
2 cos A−B
2 . You may choose to define your own variables to simplify your final
answer.)
Solution: The major difference between this and usual diffraction is that both
the wavenumber and frequency are different. The wavenumber is k = 2π
λ and the
frequency is ω = ck. The amplitude is
E1,2 = E0 cos

2π
λ1,2
·

r ±
d
2
sinθ − ct

The resulting diffraction pattern is E = E1 + E2, therefore
E = E0

cos

2π
λ1
·

r +
d
2
sinθ − ct

+ cos

2π
λ2
·

r −
d
2
sinθ − ct

For simplicity, we use the wavenumber k = 2π
λ . Let k̄ = k1+k2
2 , δk = k1−k2
2 . Using
the sum to product formula cosA + cosB = 2cos A+B
2 cos A−B
2 , we have
E = 2E0 cos

k̄(r − ct) + δk
dsinθ
2

cos

δk(r − ct) + k̄
dsinθ
2

Writing r
cosθ instead of r as approximated in the solution gets full credit. Including
an additional 1 √
r cosθ
term to account for the falloff of intensity of cylindrical waves
with a larger surface area also gets full credit.
(d) [3] Now suppose λ1 = λ−δλ,λ2 = λ+δλ, where δλ ≪ λ. Consider the time average to be
taken over the period corresponding to λ. Find the intensity pattern I(θ,t). State the
angles which correspond to maxima and minima, and comment on how the positions
of these maxima and minima near θ = 0 change with time. You may use appropriate
approximations.
Page 22 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Solution: Let k = 2π
λ , then to first order, k1 ≈ k 1 + δλ
λ

, k2 ≈ k 1 − δλ
λ

. Let
δk = kδλ
λ . Then
E = 2E0 cos

k(r − ct) +
dsinθ
2
δk

cos

δk(r − ct) + k
dsinθ
2

We may assume that since δk ≪ k, the value of the second cosine hardly changes
as t varies. Therefore we only need to compute the first cosine, which averages to
1
2.
I ≈ 2ϵ0E2
0 cos2

δk(r − ct) + k
dsinθ
2

≈ ϵ0E2
0 [1 + cos(2δk(r − ct) + kdsinθ)]
≈ ϵ0E2
0

1 + cos

2k
δλ
λ
(r − ct) + kdsinθ

The maxima correspond to:
2δk(r − ct) + kdsinθ = 2πn,n ∈ N
dsinθminima = nλ − 2
δλ
λ
(r − ct),n ∈ N
Similarly,
dsinθmaxima =

n +
1
2

λ − 2
δλ
λ
(r − ct),n ∈ N
Near θ = 0, we may use the small angle approximation, which leads us to conclude
that the positions of maxima move with angular velocity:
dθmaxima,minima
dt
= 2
δλ
λ
r
d
c
Page 23 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Marking Scheme:
Part Steps Marks
(a) Correct distance expression M0.5
t ≪ R M0.2
Correct final answer A0.8
(b) Recognising that constructive interference oc-
curs when phase difference is an integer mul-
tiple of 2π
M0.5
Correct phase difference due to extra distance
travelled
M1.0
Correct phase difference due to reflection M0.5
Correct final answer A0.5
m + 1
2 instead of m − 1
2 in the final answer is
awarded 2/2.5 marks
(c) Wave formula cos(kr − ωt) or ei(kr−ωt) with
Real Part stated.
M1
Correct inclusion of different wavelengths /
wavenumbers, frequencies, and path length
difference.
M1
Use of sum-to-product formula or correct tak-
ing of real parts. Answer matches up to a
phase difference (i.e. sin or cos).
A1
(d) First order approximation of wavenumber or
equivalent.
M1
Approximation of second cosine as constant
during integral.
M1
Answer matches for minima and max-
ima, comment about speed of movement
dθmaxima,minima
dt = 2δλ
λ c.
A1
Page 24 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
8. This is the PV -diagram of the Otto cycle: A → B and C → D are isochoric (or isovolu-
metric) processes, and B → C and D → A are adiabatic processes.
(a) [3] Consider a classical Otto engine, containing a gas with adiabatic index γ with vol-
umes V1 and V2 respectively at the two isochoric processes (V1 < V2). Determine the
efficiency ηc of such an engine.
Solution: The efficiency η of an engine is given by
η = 1 −
Qout
Qin
The only heat transfer occurs during the isochoric processes. Using the equation
∆Q = Cv∆T for an isochoric process, we have
ηc = 1 −
TC − TD
TB − TA
For an adiabatic process, pV γ = const. implies TV γ−1 = const.. We may use this
relation to obtain
ηc = 1 −
TB

V1
V2
γ−1
− TA

V1
V2
γ−1
TB − TA
= 1 −

V1
V2
γ−1
Page 25 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Now, we will discuss the quantum Otto engine. For simplicity, consider a two-level atomic
system with ground state and excited state energies E0 = 0 and E1, and suppose the
probabilities of existing in these states are p0 and p1 respectively. The average energy of
the two-level atom is thus
⟨E⟩ = p0E0 + p1E1 = p1E1
Suppose the energy difference E1 between the two states can be adjusted throughout the
cycle. The probability p that the atom is in the energy state E satisfies the Boltzmann
distribution
p ∝ e−E/(kBT)
where T is the temperature and kB is the Boltzmann constant.
(b) [1] When the quantum matter is in equilibrium with a heat reservoir of temperature T,
write down expressions for the probabilities p0 and p1. Leave your answers in terms of
E1, kB and T.
Solution: We know that
p1 = p0 exp

−
E1
kBT

Since p0 + p1 = 1, we have
p0 =
1
1 + exp

− E1
kBT
 p1 =
exp

− E1
kBT

1 + exp

− E1
kBT

In a thermodynamical process, the energy change dE can be written in terms of the change
in work and heat using the First Law of Thermodynamics.
dE = dW + dQ
In a quasi-static quantum process, the change in average energy is given by differentiating
the equation for average energy.
d⟨E⟩ = p1 dE1 + E1 dp1
The quantum adiabatic theorem states that the probabilities of each quantum state remain
effectively constant during an adiabatic process.
(c) [1] Write an equation for d⟨E⟩ in an adiabatic process. Leave your answer in terms of p1,
E1 and their differentials.
Solution: Since the adiabatic theorem states that the probabilities of each state
remain constant, the second term in the equation for d⟨E⟩ goes to zero.
d⟨E⟩ = p1 dE1
Page 26 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
The von Neumann entropy S is given by
S = −kB
X
i
pi lnpi
where kB is the Boltzmann constant and pi is the probability of the i-th state in the quantum
system.
(d) [21 /2] Using the equation for von Neumann entropy, write an equation for d⟨E⟩ in an isochoric
process. Leave your answer in terms of p1, E1 and their differentials.
Solution: In an isochoric process, the work done is zero. The change in energy is
then given by dQ = T dS. Let us first differentiate the expression for S.
dS = −kB
X
i
(1 + lnpi)dpi
Knowing that p0 + p1 = 1, we have dp0 = −dp1. Furthermore, since p1 =
p0 exp

− E1
kBT

, we have lnp1 = lnp0 − E1
kBT . Upon substitution, we obtain our
final answer.
d⟨E⟩ = T dS
= −kBT
X
i
(1 + lnpi)dpi
= −kBT

1 + lnp1 −
E1
kBT
− 1 − lnp1

dp1
= E1 dp1
Solutions that arrive straight at the correct final answer from the first law will
receive only 1.5 marks.
(e) [21 /2] Sketch the quantum Otto cycle on the axes E1 against p1, with arrows and labels for
A, B, C, D. You may use the first law of thermodynamics, or your results from parts
(c) and (d).
Solution: For an adiabatic process, we have d⟨E⟩ = p1 dE1. For an isochoric pro-
cess, we have d⟨E⟩ = E1 dp1. Therefore, all processes in the Otto cycle correspond
to straight lines on the E1 − p1 diagram, so we end up with a rectangle.
E1
p1
D
A B
C
For a less rigorous derivation straight from the first law, we can notice that the two
Page 27 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
equations for classical and quantum energy can each be partitioned into a term for
work (dW = p1 dE1) and heat (dQ = E1 dp1).
(f) [2] Compute the efficiency ηq of the quantum Otto cycle, in terms of the temperatures TB
and TC at the states B and C respectively.
Solution: The efficiency is
ηq = 1 −
Qout
Qin
Since heat exchange only occurs during the isochoric processes, we have
ηq = 1 −
EB(pB − pA)
EC(pB − pA)
= 1 −
EB
EC
Since pB = pC, we have
exp

− EB
kBTB

1 + exp

− EB
kBTB
 =
exp

− EC
kBTC

1 + exp

− EC
kBTC

Simplifying, we have EB
TB
= EC
TC
, so the efficiency is
ηq = 1 −
TC
TB
Page 28 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Marking Scheme:
Part Steps Marks
(a) Writing η = 1 − Qout
Qin
or equivalent M0.5
Computing Qout, Qin and/or W accurately M1.5
Correct final answer A1
(b) Writing down p1 in terms of p0 M0.5
Correct final answer A0.5
(c) Correct final answer A1
(d) Correct differentiation of S M0.5
dQ = T dS M0.5
Expressing p0 and dp0 in terms of p1 and dp1 M0.5
Correct final answer A1
(e) Correct interpretation of E1dp1 and p1dE1 M1
Correct E1 − p1 diagram shape A1
Correct labels on rectangle A0.5
(f) Correct values of Qin and Qout M0.5
ηq = 1 − EC
EB
M0.5
Making use of pB = pC to relate TB and TC M0.5
Correct final answer A0.5
This problem is adapted from a Chinese Physics Olympiad.
Page 29 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
9. When stars collapse, over 97% of them become white dwarves. These are extremely dense
bodies consisting largely of degenerate electron matter and some ions. Unlike stars, the
white dwarves can no longer support itself against gravitational collapse by its gas pressure,
and instead the electron degeneracy pressure dominates.
For the free electrons in white dwarves, we must use a quantum mechanical description.
We can define their number density of state g(p) as:
g(p)dp =
8π
h3
p2
dp
where p is the momentum of the state and h is Planck’s constant. In other words, in
a volume dV , there are g(p)dpdV states of momentum p that may be occupied by an
electron.
To describe the probability in which these states are occupied, we can apply Fermi-Dirac
statistics, which tells us that a state of energy ε has an average occupation probability f(ε):
f(ε) =
1
exp ε−µ
kT

+ 1
where k is the Boltzmann constant, T is the temperature and µ is an energy term known
as the chemical potential.
(a) [2] Show that the pressure P due to the free electrons is given by:
P =
8π
3h3
Z ∞
0
p3
exp ε−µ
kT

+ 1
v(p)dp
where v(p) is the magnitude of the velocity of an electron as a function of its momentum
p.
Solution: The pressure can be seen as the momentum flux through a unit surface.
Firstly, we can get the actual electron number density by multiplying the number
density of states with the probability that that state is occupied:
n(p) = g(p)f(ε(p))
Consider a flat surface with area dS, placed in a spherical coordinate system at its
origin. In unit time dt, the number of electrons hitting the surface from a polar
angle θ and azimuthal angle ϕ with velocity v is given by n(p) multiplied by the
volume of the parallelepiped with base dS and height v dtcosθ. The fraction of the
electrons which come from any angle is uniform, and given by sinθdθdϕ
4π . Since the
net momentum is in the directional perpendicular to the surface, we only want the
perpendicular component of the momentum pcosθ. Integrating across the upper
a spherical shell, and across all values of p, the total perpendicular momentum
transferred through the surface in time dt is given by:
Z ∞
0
Z 2π
0
Z π
0
n(p)dS v dtcosθpcosθ
sinθdθdϕ
4π
dp
We divide by dS and dt to get the momentum transferred per unit surface and per
Page 30 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
unit time.
P =
Z ∞
0
Z 2π
0
Z π
0
n(p)v(p)pcos2
θ
sinθdθdϕ
4π
dp
=
1
3
Z ∞
0
n(p)v(p)pdp
=
8π
3h3
Z ∞
0
p3
exp ε−µ
kT

+ 1
v(p)dp
Alternatively, answers using a simpler model exploiting symmetry may obtain full
credit if explained clearly.
We now make the assumption that the electron gas is fully degenerate. This means that all
the electron states are occupied up till the state with Fermi momentum pf, and no electron
states above that are occupied. This is equivalent to assuming zero temperature for the gas,
and the energy of the electron is equal to µ when it occupies the state with momentum pf.
(b) [11 /2] Under this assumption, show that the pressure P can be simplified to:
P =
8π
3h3
Z pf
0
p3
v(p)dp
Solution: With the zero temperature assumption, the Fermi-Dirac distribution
simplifies to a step function. When ε < µ, exp ε−µ
kT

= 0 and f(ε) = 1. On the
other hand, when ε > µ, exp ε−µ
kT

tends towards infinity and f(ε) = 0. With this
in mind, any momentum values above pf in the integral all go to zero, and we can
simplify the denominator to 1. This leaves us with the desired equation:
P =
8π
3h3
Z pf
0
p3
v(p)dp
(c) [11 /2] Determine an expression for ne, the number density of electrons. Assume that the
electron gas is fully degenerate. Leave your answer in terms of h and pf.
Solution: With the assumption that the electron is fully degenerate, we consider
all states above momentum pf to be empty and all states below momentum pf to
be fully filled. We can integrate g(p)dp from 0 to pf to obtain:
ne =
8π
h3
Z pf
0
p2
dp
=
8π
3h3
p3
f
(d) [11 /2] Assume that the electrons only move non-relativistically. Determine the pressure P
for the electron cloud. Leave your answer in terms of h, me and ne.
Page 31 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Solution: For non-relativistic particles, v ≪ c. The velocity v is given by p
me
, so
the integral for pressure becomes:
P =
8π
3h3me
Z pf
0
p4
dp
=
8π
15h3me
p5
f
Substuting the expression for ne, we have:
P =
1
20

3
π
2
3 h2
me
n
5
3
e
Unlike the electrons in the white dwarf, the ions can be described using classical ideal gas
equations. Consider the white dwarf Sirius B, which we assume to be purely carbon such
that the number of ions ni is given by 6ni = ne. The electrons here move non-relativistically.
(e) [11 /2] Estimate the numerical ratio of pressures exerted by the electrons to the ions Pe
Pi
. The
mean density of Sirius B is 2.38 × 109 kg m−3
and its temperature can be estimated
to be 25000 K. Despite the non-zero temperature, assume that your result in part (d)
remains valid.
Solution: The equation of state for the ions is given by the ideal gas equation:
Pi = nikT
Since the number of ions and electrons is fairly similar and the mass of each ion is
much greater than each electron, we can make the approximation ρ ≈ nimi, where
mi = 12 u for carbon. Then, ne = 6 ρ
mi
. Upon plugging in numerical values, we
obtain:
Pe
Pi
=
1
20
3
π
2
3 h2
me
n
5
3
e
nikT
≈ 3.3 × 105
This confirms that the pressure in a white dwarf is mostly due to electrons rather
than ions.
Page 32 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Marking Scheme:
Part Steps Marks
(a) Electron number density n(p) M0.5
Forming the triple integral accurately M1
Each inaccurate reasoning step (e.g. using p
instead of pcosθ)
-M0.3
Performing the integration accurately M0.5
(b) Noticing the step function M1
Setting momentum values to 0 and 1 M0.5
(c) Setting appropriate limits for integration M1
Correct final answer A0.5
(d) Identifying v(p) for non-relativistic particles M0.3
Substitution and integration M0.5
Correct final answer A0.7
(e) Writing the ideal gas equation M0.5
ne = 6 ρ
mi
M0.5
Correct final answer A0.5
Page 33 of 34Wednesday, 19 February 2025, 1:00pm – 5:00pm
Page 34 of 34
