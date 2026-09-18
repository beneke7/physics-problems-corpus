---
id: kevin-zhou-erev-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-erev-p004
solution_type: author
source_document: solution-document-kevin-zhou-erevsol
source_pdf: sources/kevin_zhou/site/handouts/ERevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/ERevSol.pdf."
---

[2] Problem 4. Two infinite parallel conducting plates are separated by a distance d. A particle of
charge q is placed midway between them, then displaced towards one plate by ∆z ≪ d. Find the force
on the particle. You can give your answer in terms of the Riemann zeta function ζ(s) =
P∞
n=1 1/ns.
Solution. We use the method of images. Placing the plates at z = ±d/2, there are two infinite
series of image charges. Working outward, we have charges −q at d−∆z and −d−∆z, then charges
q at −2d+∆z and 2d+∆z, then charges −q at 3d−∆z and −3d−∆z, then charges q at −4d+∆z
and 4d + ∆z, and so on.
The positive image charges always come in pairs centered on the location of the particle, z = ∆z,
so we can just consider the negative image charges. The net force from them is
F =
q2
4πϵ0
X
k=1,3,...

1
(kd − 2∆z)2
−
1
(kd + 2∆z)2

≈
q2
4πϵ0
8∆z
d3
X
k=1,3,...
1
k3
.
If we call this sum S, then we can relate it to the zeta function by noting that
X
k=2,4,...
1
k3
=
1
8
∞ X
k=1
1
k3
=
ζ(3)
8
2
Kevin Zhou Physics Olympiad Handouts
which implies that S + ζ(3)/8 = ζ(3). Thus, we conclude that
F = 7ζ(3)
q2 ∆z
4πϵ0d3
.
This force is relevant in measurements involving the oscillation frequencies of trapped ions.
[3] Problem 5.   ^ 1 0IZhO 2022, problem 1.3. A three-dimensional electrostatics problem.
Solution. See the official solutions as usual. However, due to some algebraic errors, the final result
is off by a factor of π, as pointed out in Stefan Ivanov’s errata. Referring to their rubric, the first 5
formulas are right, but in going to formula 6, they drop the cosβ factor inside dq. Starting from
formula 5, the correct solution would be to write
FQ =
Qdq
4πϵ0(
√
2R)3
Rcosβ =
σQ
4
√
2πϵ0
cos2
β dβ dα
and then perform the integral over β, yielding a factor of π/2, to get
FQ =
σQ
8
√
2ϵ0
dα.
Setting this equal to mg dα yields an answer of
Q =
8
√
2ϵ0mg
σ
.
[5] Problem 6.   T 1 0IPhO 2012, problem 2. A challenging electrostatics and fluids problem; some
prior exposure to surface tension is helpful. (For more about the kinds of bubbles encountered in
this problem, see section 5.9 of Physics of Continuous Matter by Lautrup.)
2 Charges in Fields
[3] Problem 7 (BAUPC). A particle with charge q and mass m is initially at the origin in a region with
constant magnetic field Bẑ, and velocity v0ŷ. The particle experiences a frictional force F = −αv.
Find the final position of the particle.
Solution. Newton’s second law is ma = qv × B − αv, and its components are
max = qBvy − αvx, may = −qBvx − αvy.
This is a set of two linear differential equations, so we can find the solution by guessing exponentials,
as discussed in M4. But in this case, since we know the initial and final velocities, and only want
the final position, there’s an easier way. (I thank Stefan Ivanov for pointing this out.) We integrate
both sides of the above equations with respect to time, from zero to infinity, to get
m∆vx = qB∆y − α∆x, m∆vy = −qB∆x − α∆y.
The initial velocity is v0ŷ, and the final velocity is zero, so
∆vx = 0, ∆vy = −v0.
This yields a system of two equations, which can be solved to yield
∆x =
mv0qB
(qB)2 + α2
, ∆y =
mv0α
(qB)2 + α2
.
3
Kevin Zhou Physics Olympiad Handouts
[3] Problem 8 (APhO 2006). Two large, identical conducting plates α and β with charges −Q and
+q (where Q > q > 0) are parallel to each other and fixed in place. Another identical plate γ with
mass m and charge +Q is parallel to the original plates at distance d, as shown.
The plates have surface area A. The plate γ is released from rest and bounces elastically off the
plate β. Assume that charges have sufficient time to redistribute between the plates during the
collision. When the plate γ returns to its original position, what is its speed?
Solution. Initially, the electric field due to the plates α and β at γ is
E =
Q − q
2ϵ0A
so the force is
F = QE =
Q(Q − q)
2ϵ0A
towards plate β. During the collision, β and γ effectively become one plate with total charge Q+q.
In order to shield the field of plate α, the difference of the charges on the left end of β and the right
end of γ must be Q, which means that the right end of γ gets a charge q/2, while the left end of β
gets a charge Q + q/2. After the collision, the electric field due to α and β is
E′
=
q
4ϵ0A
so the magnitude of the force is
F′
=
q
2
E′
=
q2
8ϵ0A
away from plate β. The total work done is
W = (F + F′
)d =
d
8ϵ0A
(2Q − q)2
and setting this equal to mv2/2 gives
v =
r
d
ϵ0mA
(Q − q/2).
[3] Problem 9.   W 1 0USAPhO 2017, problem A3. A real-world application of magnetism, with great
historical importance. For much more on the mechanism illustrated in this question, see this article.
[3] Problem 10.   ^ 1 0USAPhO 2023, problem A2.
4
Kevin Zhou Physics Olympiad Handouts
[3] Problem 11. NBPhO 2010, problem 1. A contrived, but nice problem involving particles in fields.
Solution. See the official solutions as usual. However, they have some typos. For part (ii), there
should be a 2π on the right-hand side of the final answer. For part (iii), s + 2x is the displacement
of the red ball after the blue ball enters the field, so the final inequality should be L > s + 2x.
[3] Problem 12.   m 1 0APhO 2003, problem 3. A short problem on a “plasma lens”.
[4] Problem 13. APhO 2005, problem 2B. An elegant, tricky problem on focusing with magnetic
fields. I recommend using Kai Wen Teo’s modified version.
Solution. See Kai Wen Teo’s solution here.
[4] Problem 14. @ 1 0IPhO 2011, problem 3. A problem on the interactions of charges and atoms.
[3] Problem 15.   m 1 0USAPhO 2017, problem B2. A series of short calculations for a real-world setup.
[5] Problem 16.   h 1 0IPhO 2021, problem 2. A comprehensive problem on E1 through E4.
Remark
You should almost never use a rotating frame to describe electromagnetic fields. Not only will
you run into a more subtle version of the problems with field transformations, as described
in E4, but basic calculus operations like the divergence, curl, and partial time derivative
transform too. The result is that Maxwell’s equations take on a completely different, and
rather nasty form, as shown here. (It is easier to work with Maxwell’s equations in general
frames if you know how to express them in tensor form, as mentioned in R3. But in that
case you usually wouldn’t even be thinking in terms of electric and magnetic fields anyway,
replacing them with the electromagnetic field strength tensor.)
Idea 1
A metal conductor is made of nuclei of positive charge, and electrons of compensating negative
charge. Classically, the electrons are free to move, but the nuclei are fixed in place in the
crystal lattice by strong electrostatic interactions.
[3] Problem 17 (PPP 173). A solid metal cylinder rotates with angular velocity ω about its axis of
symmetry. The cylinder is in a homogeneous magnetic field B parallel to its axis.
(a) Find the charge distribution inside the cylinder.
(b) Is there a nonzero angular velocity for which the charge distribution is everywhere zero?
Solution. (a) Applying Newton’s second law to an electron gives
eE + eωrB = mω2
r
where m is the electron mass and e is the electron charge, so
rE + ωr2
B =
mω2
e
r2
.
5
Kevin Zhou Physics Olympiad Handouts
But Gauss’s law tells us that
E(r) =
1
2πϵ0r
Z r
0
ρ(r′
)2πr′
dr′
,
so taking the derivative of our previous equation with respect to r, we have
ρ
2πϵ0
(2πr) + 2ωrB =
2mω2r
e
.
Thus, it turns out we get a uniform charge,
ρ =
2ωϵ0
e
(mω − eB).
Note that we don’t have to apply Newton’s second law to the positive ions in the metal. These
are locked in place by the crystal lattice; it’s only the electrons that are redistributing. And
of course, the metal remains overall charge neutral; the extra electrons just get pushed all the
way to the surface.
(b) This occurs when ω = eB/m, the cyclotron frequency. In this case the Lorentz force from the
magnetic field is enough by itself to keep each electron moving in a circle.
[3] Problem 18 (MPPP 173). In 1917, T. D. Stewart and R. C. Tolman discovered that an electric
current flows in any coil wound around, and attached to, a cylinder that is rotated axially with
constant angular acceleration.
Consider a large number of rings of thin metallic wire, each with radius r and resistance R. The
rings have been glued in a uniform way onto a very long evacuated glass cylinder, with n rings per
unit length of the symmetry axis. The plane of each ring is perpendicular to that axis.
At some particular moment, the cylinder starts to accelerate around its symmetry axis with
angular acceleration α. After a certain length of time, there is a constant magnetic field B at the
centre of the cylinder. Find, in terms of the charge e and mass m of an electron, the magnitude
of the field. (The matching experimental result showed that it was the electrons that were free to
move in metals.)
Solution. First, we need to understand why there should be a magnetic field at all. This is puzzling,
because there don’t seem to be any charged objects anywhere in the problem. But we recall that
microscopically, the rings are made of positive ions locked in a lattice, and negatively charged
electrons free to move. If, when we rotated the ring, the positive ions moved but the electrons
stayed in place, we would have a large current.
Of course, this isn’t realistic, because that would mean that moving any conducting object would
produce a huge current. In reality, the electrons get pulled along with the ions due to their mutual
6
Kevin Zhou Physics Olympiad Handouts
interaction, making the current almost cancel. But since the ions are continually accelerating, the
electrons are always a bit behind, so their velocities differ, and there is a small net current. (Note
that in addition to this effect, electrons are pushed to the outside edge of the ring by the same effect
as in problem 17, but in this problem that isn’t important because the rings are thin.)
Now let’s make this more concrete. It’s easiest to work in the noninertial frame rotating with
the cylinder. (This is okay, despite the remark above, because we’re not going to say anything
about the fields in this frame.) In this frame, there are centrifugal and Coriolis forces, but they
only act radially, leading to a small charge separation between the inside and outside of the loop.
However, the frame’s angular acceleration yields a fictitious force F = mrα acting tangentially on
the electrons. This corresponds to an emf per wire loop of
E = (2πr)
F
q
=
2πmr2α
e
.
By Ohm’s law, E = IR, this implies a steady state current of
I =
2πmr2α
eR
.
Now return to the inertial lab frame. The current in the frame is the same, and in this frame it is
due to the electrons slightly lagging in speed behind the ions. We then get
B = µ0nI =
2πµ0nmr2α
eR
.
[5] Problem 19.   h 1 0EuPhO 2023, problem 3. A neat and rather difficult question, in a setup where
an eddy current can be computed exactly.
3 Induction
[3] Problem 20 (IPhO 2000). A thin copper wire of radius r and resistivity ρ is bent into a circular
ring of radius R of total mass m. It is suspended from the ceiling by a frictionless wire and set
rotating with angular frequency ω. The horizontal component of the local magnetic field of the Earth
is B. Neglecting any self-induction effects and assuming that B is small, find the time required for
the angular frequency to halve. This is an example of “induction braking”.
Solution. See the official solutions for IPhO 2000, problem 1.
[3] Problem 21.   ^ 1 0USAPhO 2024, problem A1. How wires form a real LC circuit.
[5] Problem 22.   T 1 0IZhO 2020, problem 3. A nice problem on electromagnetism and mechanics.
[5] Problem 23. APhO 2021, problem 3. A challenging problem on time-dependent image charges.
4 Circuits
[3] Problem 24.   W 1 0USAPhO 2007, problem A4.
[3] Problem 25. NBPhO 2009, problem 8. A review problem for RC and RL circuits.
7
Kevin Zhou Physics Olympiad Handouts
[3] Problem 26 (Kalda). An electrical transformer is connected as shown.
Both windings of the transformer have the same number of loops and the self-inductance of both
coils is equal to L. There is no leakage of the magnetic field lines from the core, so that the mutual
inductance is also equal to L.
(a) Suppose the coil windings are oriented so that if both coils have current flowing from left to
right, then the magnetic fields in the transformer core cancel out. Find the currents in the
resistors immediately after the switch is closed.
(b) Find the current in the left resistor as a function of time.
(c) Now suppose one of the coils is wound in reverse, relative to the specification of part (a). Find
the current in the right resistor as a function of time.
Solution. (a) Let I1 and I2 be the currents flowing through the top and bottom coils respectively,
and positive being from left to right. Then the magnetic flux is L(I1 − I2), which is equal to
0 at the beginning. Then Kirchhoff’s rules give
E = (I1 + I2)R + EL + I1R (I1 + I2)R − EL = 0
Using I1 = I2, we have E = 2I1R + 2I1R + I2R = 5I1R giving I1 = E/(5R) = I2, so currents
of 2E/5R and E/5R flow through the left and right resistors respectively.
(b) Defining I = I1 − I2, we have EL = LdI
dt , and Kirchhoff’s loop rules give
E = 2L
dI
dt
+ I1R, E = 2(2I1 − I)R + I1R = 5I1R − 2IR
Putting them together and simplifying yields
2E = 5L
dI
dt
+ IR.
Solving the differential equation yields
I =
2E
R

1 − e−tR/5L

,
dI
dt
=
2E
R(5L/R)
e−tR/5L
= (I1 + I2)R/L.
The current in the left resistor is
I1 + I2 =
2E
5R
e−tR/5L
.
(c) Now, EL = LdI
dt and the second loop rule has the direction of EL reversed: (I1 +I2)R+EL = 0.
Then the equations with I ≡ I1 + I2 are
E = IR − IR + I1R = I1R
The current through the right resistor is just I1, so the answer is
I1 =
E
R
.
8
Kevin Zhou Physics Olympiad Handouts
5 Electrodynamics
