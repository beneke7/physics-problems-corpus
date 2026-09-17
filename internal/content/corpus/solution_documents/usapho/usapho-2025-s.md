---
id: solution-document-usapho-2025-s
source: usapho
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2025_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2025_S.pdf."
---

2025 USAPhO Student Instructions 1
USA Physics Olympiad Exam
Instructions for the Student
• All smartphones, tablets, smartwatches, and other internet-connected devices must be handed
in before the exam begins. You may only use the desktop computer, laptop, or Chromebook
designated for taking the exam.
• You must remain in the exam room for the entire testing period.
• You should receive:
– This instruction page
– A reference sheet (on the next page)
– Problem cover sheets
– Blank paper for solutions and scratch work
Read this page carefully before the exam begins.
• You may use a calculator, provided its memory has been cleared. You may not use any
symbolic math, programming, or graphing features. Calculators may not be shared. Cell
phones or any other unauthorized electronics may not be used at any time while the exam is
in progress or while exam materials are present. Outside books or references are not allowed.
• When the exam begins, click on the link for Part A. Once you click “Start,” a timer will
begin. You will have 90 minutes to complete three problems. Each problem is worth 25
points, but they may differ in difficulty. When finished, you may review your work, but do
not proceed to Part B.
• After 90 minutes, your proctor will collect your Part A answer sheets. Do not include scratch
work. You will then have a short break.
• After the break, click on the link for Part B. You will again have 90 minutes to complete
three problems. Each is worth 25 points.
• At the end of Part B, you must return:
– Your Part B answer sheets (no scratch work)
– All blank and used scratch paper
– These instruction pages
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Student Instructions 2
• Do not discuss any part of the exam until April 11th. Any violation may result in
disqualification.
Instructions for Writing Your Solutions
• All work must be done on the provided blank pages. You may use as many plain and/or graph
sheets as needed for each problem. Work outside of these pages will not be graded.
• To help with grading, please draw a clear box around your final answer to each subpart.
• Organize your work clearly and explain your reasoning concisely. Partial credit may be
awarded for well-reasoned work, even if the final answer is incorrect.
• You may write in either pencil or pen, but make sure your work is legible and scan-friendly.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Student Instructions 3
REFERENCE SHEET
Fundamental Constants
g = 9.8 N/kg G = 6.67 × 10−11 N · m2/kg2
k = 1/4πϵ0 = 8.99 × 109 N · m2/C2 km = µ0/4π = 10−7 T · m/A
c = 3.00 × 108 m/s kB = 1.38 × 10−23 J/K
NA = 6.02 × 1023 (mol)−1 R = NAkB = 8.31 J/(mol · K)
σ = 5.67 × 10−8 J/(s · m2 · K4) e = 1.602 × 10−19 C
1 eV = 1.602 × 10−19 J h = 6.63 × 10−34 J · s = 4.14 × 10−15 eV · s
me = 9.109 × 10−31 kg = 0.511 MeV/c2
Useful Approximations
(1 + x)n
≈ 1 + nx + n(n − 1)x2
/2 for |nx| ≪ 1
ex
≈ 1 + x + x2
/2 + x3
/6 for |x| ≪ 1
sinθ ≈ θ − θ3
/6 for |θ| ≪ 1
cosθ ≈ 1 − θ2
/2 for |θ| ≪ 1
Useful Identities
N X
k=0
cos(ka + ϕ) =
sin

(N+1)a
2

· cos

Na
2 + ϕ

sin a
2

N X
k=0
sin(ka + ϕ) =
sin

(N+1)a
2

· sin

Na
2 + ϕ

sin a
2

N X
k=1
cos2
(ka) =
N
2
+
1
2
N X
k=1
cos(2ka)
N X
k=1
sin2
(ka) =
N
2
−
1
2
N X
k=1
cos(2ka)
You may use this sheet for both parts of the exam.
End of Instructions for the Student
DO NOT CLICK THE LINK FOR PART A UNTIL YOU ARE TOLD TO BEGIN
We acknowledge the US Physics Team coaches and other people for their contributions to this year’s exam
(in alphabetical order):
Tengiz Bibilashvili, Kellan Colburn, Natalie LeBaron, Rishab Parthasarathy, Mai Qi, Kye Shi, Heng Yuan
and Elena Yudovina.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part A 4
Problem A1: Shake It
Most hairy mammals shake after getting wet; shaking the water off is energetically advantageous
to waiting for it to dry on its own. In this problem, we investigate the mechanics of shaking off
water. For simplicity, we will model animals as solid cylinders with the sides covered in fur. You
may ignore gravity throughout the problem.
a. We can model the shaking by assuming that the angular position of the cylinder undergoes a
sinusoidal oscillation: θ = Acos(ωt). (The rotation is about the axis of rotational symmetry.)
Letting the radius of the cylindrical animal be R, derive an expression for the magnitude of the
acceleration of a point on the surface of the animal under such a motion.
Solution
Since we’re ignoring gravity, there’s two components to the acceleration: radial, Rθ̇2, and
tangential, Rθ̈. (Terms involving Ṙ vanish, since the radius is constant.) They add in
quadrature, so the magnitude is
R
q
Aω sin(ωt)
4
+ Aω2 cos(ωt)
2
= ARω2
q
A2 sin4
(ωt) + cos2(ωt)
b. For the rest of this problem, rather than modeling sinusoidal motion, we will assume that the
cylindrical animal is simply spinning at constant angular speed ω. Wet fur tends to separate
into cylindrical clumps of radius r ≪ R. A droplet of water on the end of a clump of fur will be
separated from it if the centripetal force overcomes the forces due to surface tension. Derive an
approximate relationship (valid up to scalar numerical constants) between the surface tension σ,
the radius r of the fur clump, the radius R of the animal, the angular speed ω, and the density ρ
of water. The diagram below show the cross-section of the animal, showing four clumps of fur
with droplets on their end.
Solution
At first glance this doesn’t look like a valid dimensional analysis problem, since there are
two lengths involved (r and R). However, the surface tension force can depend only on
r and σ, while the centripetal force depends only on R, ω, and the mass of the droplets
m ∝ ρr3. Since surface tension has units of force per linear distance, the two forces scale as
rσ and (ρr3)(ω2R), and we write ω2 ∼ σr
ρr3R
.
Note that the surface tension term “should” be proportional to 2πrσ, since the circumference
of the fur clump (rather than its radius) is the relevant linear dimension; but this doesn’t
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part A 5
change the scaling behavior.
c. Experimentally, it is observed that all mammalian fur forms clumps of similar radius. Under the
assumption that different animals all have the same density and are simply scaled copies of each
other (i.e. larger animals are both longer and fatter), the relationship between an animal’s mass
M and its angular velocity of shaking ω is of the form ω ∼ Mn: find the value of n.
Solution
Since σ, ρ, and r are constant, we simply have ω ∼ R−1/2. Since the animals are proportional
cylinders, we have M ∼ R3, so ω ∼ M−1/6.
d. Shaking requires energy, which we can crudely model as the rotational energy of the corresponding
cylinder. An alternative strategy for the animal is to simply air-dry their fur, which requires
energy to evaporate the water. Assume a wet animal has approximately 5% of their body weight
in water, and has to supply all the energy for evaporating the water. Our model predicts that
for some animal sizes, it will be energetically advantageous to air dry themselves: estimate the
range of animal masses for which this is true. You may use the following facts: a mouse weighs
20g, has a radius of 1cm, and shakes itself with angular velocity ω = 30rad/s. The latent heat
of vaporization of water at room temperature is λ = 2430J/g.
Solution
Since we found ω ∼ M−1/6, the energy of shaking scales as MR2ω2 ∼ M4/3, while the
energy of air-drying simply scales with the animal mass. So, for large enough animals, air
drying should be energetically advantageous. However, constants are important!
For a cylindrical mouse, we find that the energy of shaking is
Eshaking, mouse =
1
2

1
2
MR2

ω2
= 0.00045J
and the energy of evaporating the water is
Eevaporation, mouse = 0.05Mλ = 2430J.
For an arbitrary cylindrical animal, we have
Eshaking = Eshaking, mouse · (M/Mmouse)4/3
and
Eevaporation = Eevaporation, mouse · (M/Mmouse)
For these to become equal, we must have
M
Mmouse
≳

2430J
0.00045J
3
= 1.6 × 1020
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part A 6
or M ≳ 3 × 1018 kg. This is the right order of magnitude for the mass of an asteroid (and
many orders of magnitude too heavy to be a land mammal), so it’s not surprising that just
about all mammals prefer to remove the water mechanically instead!
This analysis was based on the article Dickerson, Andrew K et al. “Wet mammals shake at
tuned frequencies to dry.” Journal of the Royal Society, Interface vol. 9,77 (2012): 3208-18,
accessible online at https://pmc.ncbi.nlm.nih.gov/articles/PMC3481573/
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part A 7
Problem A2: Black Tides
Consider a spherically symmetric, nonrotating star of mass m and radius r. If it gets too close
to the supermassive black hole of mass M ≫ m at the center of a galaxy, it will be ripped apart
by tidal forces. Throughout this problem, neglect relativistic effects and give answers in terms of
G, M, m, and r. When asked for numbers, assume the star is Sun-like, so that m = 2 × 1030 kg,
r = 7 × 108 m, and M = 106 m, and give all numeric answers to one significant figure.
a. Suppose the star orbits the black hole in a circle of radius R. What is the radius of curvature of
the trajectory of each point on the star’s surface? Note that the star does not rotate as it orbits.
Solution
As the star rotates about the black hole, each point on the surface will trace out a circle
with radius R. The circle will be translated with respect to the star’s orbit.
b. Gas on the star’s surface facing the black hole is attracted to the star by the star’s gravity,
and pulled away from the star by the black hole’s tidal force. Write an expression for the tidal
acceleration at the point closest to the black hole.
Solution
The tidal acceleration is equal to the difference in the gravitational acceleration due to the
black hole at the center and the near surface of the star,
gT =
GM
(R − r)2
−
GM
R2
≈
2GMr
R3
where we used the binomial expansion.
c. At a radius R where the gravitational and tidal forces are in equilibrium, the star will start
being tidally ripped apart. This effect can only be observed when R is outside the black hole’s
Schwarzschild radius Rs = 2GM/c2. Find an expression for R and numerically evaluate the ratio
R/Rs.
Solution
Setting the tidal acceleration expression equal to Gm/r2 yields R = r(2M/m)1/3. This is
known as the solid-body Roche limit. In reality, a star can start breaking up at larger orbital
radii, because its shape can be deformed, the star can be rotating, and the gas inside carries
pressure. However, the Roche limit is a decent estimate of when tidal effects become very
important.
We then numerically compute R = 9 × 1010 m and Rs = 2GM/c2 = 3 × 109 m, so the ratio
is R/Rs = 30. In other words, tidal disruption of such a star occurs well outside the black
hole’s horizon, so the events are observable, and general relativistic effects can be safely
neglected.
For the rest of the problem, we consider a star on a parabolic orbit whose periapsis (distance of
closest approach) is equal to the radius R found in part 1. Near periapsis, the star will be torn
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part A 8
apart in a “tidal disruption event”. As a very rough model of this phenomenon, assume the star is
initially a single rigid body. The moment it reaches periapsis, it fragments into many rigid pieces
which do not interact with other, and feel only the black hole’s gravity.
d. Afterward, some of the fragments will escape from the black hole, while the rest remain bound.
Numerically evaluate the fraction of the mass which escapes.
Solution
The fragment at the center of the star has zero energy, since it’s directly on the parabolic
orbit. At periapsis, the fragments all have the same kinetic energy, since the star was a rigid
body, but the ones further away from the black hole than the center have a less negative
potential energy, so they have a positive total energy. Since R ≫ r, about half of the star
is further away than the center, so a fraction 0.5 of the mass escapes, independent of the
parameters m, M, and r.
e. An escaping fragment has speed vf when it is far from the black hole. Find the maximum
possible value of vf, among all fragments, and evaluate it numerically.
Solution
At the moment of the disruption, the entire star has speed v0 =
p
2GM/R. The fragments
with the highest total energy are those at the far side of the star, a distance R + r from the
black hole. Applying conservation of energy per unit mass gives
1
2
v2
f =
1
2
v2
0 −
GM
R + r
=
GM
R
−
GM
R + r
≈
GMr
R2
.
Solving for vf and substituting in our earlier result for R gives
vf =

2M
m
1/6
r
Gm
r
= 5 × 106
m/s.
f. A bound fragment orbits with period Tf. Find the minimum possible value of Tf, among all
fragments, and evaluate it numerically.
Solution
The shortest period occurs for fragments at the near side of the star, a distance R − r from
the black hole. By similar reasoning to the previous part, the energy per unit mass of such
fragments is −GMr/R2. In addition, we know that the total energy per unit mass in an
elliptical orbit is −GM/(2a) where a is the semimajor axis; combining these gives
a =
R2
2r
=

M
m
2/3
r
21/3
.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part A 9
Finally, Kepler’s third law states that the period is
Tf = 2π
r
a3
GM
= 2π
r
r3
2Gm
r
M
m
= 7 × 106
s = 80days.
As bound fragments return to the location of the initial disruption, they collide with other debris,
causing them to be absorbed into the black hole’s accretion disk. This process produces an enormous
amount of light, with the luminosity (or energy emitted over time) proportional to the mass
absorption rate. If t = 0 at the moment the star fragments apart, then light begins to be emitted at
the time you found in part 5, and afterward the luminosity scales as L ∝ 1/tn for a constant n.
g. Find the value of n. Assume for simplicity that the total energies of the bound fragments are
uniformly distributed between their minimum and maximum values.
Solution
The mass that falls into the accretion disk in the interval (t,t + dt) consists of particles
whose orbital period Tf is in that range. By Kepler’s third law, the total energy of the
particles is related to the orbital period as E ∝ T
−2/3
f , so the width of the energy band of
the particles that fall in during that time scales as dE ∝ T
−5/3
f dt. Thus, we have n = 5/3.
This is the canonical light curve power law for tidal disruption events. For further discussion,
see the article Stellar disruption by a supermassive black hole by Lodato, King, and Pringle.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part A 10
Problem A3: Bitter and Magnetic
In this problem, we explore some of the design considerations for an electromagnet.
a. Consider an electromagnet consisting of a long solenoid, i.e. a spiral of thin wire wrapped in
a single layer around a cylindrical nonmagnetic core. The wire is wrapped in such a way that
the adjacent coils almost touch. When a current is sent through the wire, a magnetic field is
generated inside the solenoid; this magnetic field exerts an outward force on the wire. Find the
pressure P on the solenoid in terms of the magnetic field B inside the solenoid.
Solution
The energy density of the magnetic field inside the solenoid is B2/(2µ0); this is also the
pressure it exerts on the outer walls of the solenoid. (To see that “energy density” is the
same as “pressure”, consider the work done when a portion of the wall is displaced by some
distance.)
Alternatively, we can think about the force on a small segment of wire of length ds. If the
current in the wire is I, the force on the segment will be B̃ × Ids, where B̃ is the average
magnetic field through the wire. We must have B̃ = B/2 by symmetry – the field is B
inside the solenoid, 0 on the outside, and to a small segment of wire the solenoid just looks
like an infinite plane. Also, I = B/(µ0n), where n is the number of turns per unit length
of the wire. Thus, the force on the segment is B2/(2µ0n)ds, and the area of the segment’s
cross-section is ds/n, leading to a pressure of B2/(2µ0).
b. The pressure on the “walls” of the solenoid is counteracted by tension inside the wire. Derive an
expression for the maximal achievable magnetic field B in terms of coil radius a, wire diameter
(thickness) t ≪ a, and wire tensile strength σ. (The tensile strength of a material is the force per
unit cross-sectional area that needs to be applied in order to pull the material apart.) Assume
the wire is circular in cross-section.
Solution
We need to convert pressure into tension. Consider a wire segment subtending an angle dθ:
the outward force on it is
B2
2µ0
· t · Rdθ
Denoting the tension in the wire by T, the inward force is 2T(dθ/2) = Tdθ. Since T = π
4 t2σ,
the necessary inequality is
2
π
B2
µ0
a
t
≤ σ
or
B ≤
r
π
2
σµ0
t
a
.
c. Let a = 0.1m, t = 0.001m. The tensile strength of copper is σ = 250MPa, and the permeability
of free space is µ0 = 4π × 10−7 H/m. What is the maximum magnetic field that can be achieved
in a single-layer solenoid made out of such a wire without the wire snapping?
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part A 11
Solution
B ≤
r
σµ0πt
2a
≈ 2.2T
d. In theory, we could generate a stronger field by increasing the wire thickness, but the nonuniform
distribution of current inside the wire makes this difficult to analyze.
Instead, consider wrapping the solenoid in many layers of wire. We will place adjacent layers a
distance t apart so that they just barely don’t touch, and will adjust the current through each
wire to equalize the tensile stress. The wire coils span the space from an inner core radius of a to
an outer radius of b. Estimate the maximum achievable field strength inside this electromagnet.
You may assume that the wire is thin (t ≪ a, t ≪ b − a).
Solution
Number the coils from the outside in, and let Ik be the current inside the kth coil. For the
outermost coil, the situation is as in part b, so the field inside it satisfies
B1 ≤
r
σµ0πt
2b
For coil k, the energy density inside it is B2
k/(2µ0) and the energy density outside it is
B2
k−1/(2µ0). The constraint on tensile stress becomes
B2
k − B2
k−1 ≤
π
2
σµ0
t
b − tk
Letting N = (b − a)/t be the number of coils, we have
B2
= B2
N ≤
N X
k=1
(B2
k − B2
k−1) =
π
2
σµ0
N X
k=1
t
b − tk
≈
π
2
σµ0
Z a
b
−du
u
=
π
2
σµ0 ln b/a

.
e. Estimate the numeric value of the maximum magnetic field that can be achieved in a multi-layer
solenoid described above with a = 0.1m and b = 0.3m.
Solution
The maximum possible field will be
B =
r
π
2
σµ0 ln(3) = 23.3T.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 12
Problem B1: Scroll ’n’ Roll
Consider a disk with mass m and radius R placed on a large and frictionless table. An ant with
mass m is placed on top of the disk. The ant can move freely without sliding on the disk.
a. Initially, the ant starts on the edge of the disk, and both the ant and the disk are at rest (relative
to the table). Then, the ant starts walking across the disk’s diameter, such that in the frame of
the disk, the ant has (constant) velocity v. What is ant’s velocity in the frame of the table?
Solution
By conservation of momentum,
mvd = m(v − vd) (0-1)
vd =
v
2
(0-2)
The ant’s velocity is v − vd = v/2.
b. Suppose instead that the ant walks counterclockwise along the edge of the disk at constant speed
v in the frame of the disk. What is the ant’s speed in the frame of the table?
Solution
For the solution, we’re considering the disk to be the unit disk, and the ant to be positioned
at (x = 1,y = 0) crawling counterclockwise (which is also the +y direction).
We can decompose the movement of the disk into a rotation about the (fixed) disk-ant center
of mass, and a rotation about its own center. Write ωcm for the angular velocity of the disk
about the combined center of mass, and ωd for the angular velocity of the disk about its
center.
Letting v′ be the ant’s speed in the table’s reference frame, we find
v′
= v + ωcm
R
2
+ ωdR (0-3)
Conservation of linear momentum and conservation of angular momentum give
mv′
− mωcm
R
2
= 0 (0-4)
v′
m
R
2
+ ωdId + ωcmIcm = 0 (0-5)
where Id is the moment of inertia of the disk about its own center of mass, and Icm is the
moment of inertia of the disk about the combined center of mass. By the parallel axis
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 13
theorem,
I1 =
1
2
mR2
(0-6)
I2 =
3
4
mR2
(0-7)
Solving everything, we find
ωd = −
v
R
(0-8)
ωcm =
v
2R
(0-9)
and therefore
v′
=
R
4
.
c. Now there are two ants on the disk! The second ant (also of mass m) starts at distance R/2
from the center of the disk, with an angle offset by θ from the first ant. The second ant walks
counterclockwise around this circle with radius R/2 at speed v/2 (relative to the disk). Find all
θ such that the second ant is stationary in the frame of the table.
θ
Solution
First, if θ = 0, the second ant is starting out at the center of mass; we claim this means
that he doesn’t affect the movement of the system. Since the disk is rotating at ωd = −v/R
about its center, the original position of the ant would be moving at velocity −v/2 relative
to the center of the disk; hence, by moving at v/2 relative to the center of the disk, the ant
manages exactly to stay in place.
Now suppose there is some other such angle θ. Consider the triangle formed by the two
ants and the center of the circle. The description of the ants’ movement ensures that this
triangle moves as a rigid body (the relative positions of the ants and the center of the disk
remain fixed). The center of mass of the system, which is at the center of this triangle, is
fixed in the reference plane of the table. If we were to also fix the second-ant vertex in place,
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 14
the system simply wouldn’t be able to move. The only way out is to make the ”center of
the triangle” and the ”vertex” coincide, by placing the second ant at the center of mass.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 15
Problem B2: Where’s the Kaboom?
A plane is flying horizontally at constant velocity v and altitude z = H. The speed of sound at
altitude z is given by
c(z) = α
p
T(z),
where α is a constant. Suppose v > c(H), and define the Mach number as
M ≡
v
c(H)
> 1.
If c(z) is constant for all z, then the envelope is a cone with half angle θ where sinθ = 1
M and
propagates with the speed of sound c.
a. Sketch the envelope.
Solution
The envelope is a cone with half angle θ where sinθ = 1
M .
v
θ(H)
b. Now, the speed of sound depends on the altitude because the temperature is not uniform. For
the altitudes we are interested in, the following linear model works well:
T(z) = T0 − βz,
where β > 0 is a constant. Sketch the envelope of the boom.
Solution
The half angle of the cone θ is also the incident angle of sonic boom ray, and since c(z)
is not constant θ = θ(z) depends on z. Using Snell’s law on the sonic boom ray, we get
sinθ(0)
c(0) = sinθ(H)
c(H) = 1
v. This means that sonic wave travels on a curve with reduced steepness
on the bottom.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 16
θ(H)
θ(H)
θ(0)
c. If the Mach number is large enough then the sonic boom hits the ground. Assume it is large
enough. On the ground, there are two sensors at z = 0 and z = h, one directly above the other.
Assume h ≪ H and βh ≪ T0. At time t1, the top sensor receives the sonic boom signal and at
a later time, the bottom sensor also receives the signal. Express the Mach number M of the
airplane in terms of H,h,t,T0,α,β, where t = t2 − t1.
Solution
The following pictures shows the boom at t1 and t2.
h
θ(0)
vt
θ(H)
From expression sinθ(0) = c(0)
v , cotθ(0) = vt
h and trigonometry identity cot2 θ(0) + 1 =
1
sin2 θ(0)
we get
v =
1
q
1
α2T0
− t2
h2
M =
v
c(H)
=



1 −
βH
T0

1 −
α2t2T0
h2
!

−1
2
≈

1 +
βH
2T0

1 +
α2t2T0
2h2
!
d. If the plane travels slower without changing direction, its sonic boom could become no longer
audible from the ground for the Mach number 1 < M < Mmax. What is the upper limit for the
Mach number Mmax for which this can occur? Express your answer in terms of T0,H,α,β. You
do not necessarily need all of these parameters.
Solution
When angle θ rises to 90◦ the rays that are leading to the boom curve more and travel up.
It is similar to the mirage phenomenon. So, the condition when it occurs near the ground is
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 17
θ(0) = 90◦. This means that v = c(0), so the Mach number is
Mmax =
c(0)
c(H)
=
s
T0
T0 − βH
.
Solution
Real numbers: β = 6.5 K/km, H = 11 km, T0 = 300 K give Mmax ≈ 1.146.
Credit: Boom Technology uses this phenomenon to create their boomless supersonic jet XB-1
and Overture for commercial supersonic flights.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 18
Problem B3: Locked and Moded
a. Consider two mirrors facing each other separated by a distance L (a Fabry–Pérot resonator).
The cavity (the space between the two mirrors) is in vacuum (index of refraction n = 1, no
dispersion), and the mirrors have high reflectivities so that the main resonance condition is that
an integer multiple of half-wavelengths fit into the cavity. A light pulse containing multiple
different frequencies travels between the mirrors and interferes with itself.
i. State the condition for resonance in terms of L and wavelength λ.
ii. Write down an expression for the resonant angular frequencies ωm, with m counting each of
the possible resonances.
iii. What is the angular frequency spacing ∆ω ≡ ωm+1−ωm between adjacent angular frequencies?
Solution
For a Fabry–Pérot resonator of length L in vacuum, an integer number of half-wavelengths
must fit into the cavity. Mathematically, we express this resonance condition as:
m
λ
2
= L,
where m is a positive integer. Rearranging gives
λ
2
=
L
m
=⇒ λ =
2L
m
Now for the resonant angular frequencies:
The angular frequency ω of light in vacuum is related to its wavelength by
ω =
2πc
λ
,
where c is the speed of light in vacuum. Substituting λm into this relation gives
ωm =
2πc
λm
=
2πc
2L/m
=
m πc
L
.
The spacing between adjacent modes, e.g. for mode m and m + 1, is
∆ω = ωm+1 − ωm =
(m + 1)πc
L
−
mπc
L
=
πc
L
b. The electric field at the antinodes of the standing waves in the resonator is a superposition of
oscillations at the resonant angular frequencies and is given by:
Ebefore(t) =
+∞ X
k=−∞
Ek cos

k∆ω

t

.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 19
Now suppose we introduce a gain medium (such as a doped crystal) into the laser cavity. The
gain medium completely absorbs incoming light and re-emits it over a finite range of N angular
frequencies centered around some angular frequency ω0, which coincides with one of the ωm
values determined above. Within this bandwidth, the gain medium amplifies and supports
oscillations at all ωm that fall within the range. (Assume N is an odd number.)
Assume that each of these N angular frequencies—also referred to as modes—has the same
amplitude E0, and that their phases are locked such that there is zero relative phase between
them at t = 0. This condition is known as mode locking. Set their common phase so that all
electric fields are expressed as cosine functions, consistent with the form of Ebefore(t).
i. Write an expression for the total electric field Eafter(t) as the sum of these N equally spaced
angular frequencies (with zero relative phase).
Solution
We assume N frequencies equally spaced by ∆ω around a central frequency ω0, all having
amplitude E0 and zero phase difference. One convenient way to index these frequencies
is by letting k run symmetrically about 0:
ωk = ω0 + k∆ω, k = −
N − 1
2
, −
N − 3
2
, ...,
N − 3
2
,
N − 1
2
.
(If N is even, a similar indexing can be used, but the main idea remains the same.)
Because all modes are in phase (zero relative phase), a real representation can be written
by summing cosines:
Eafter(t) = E0
+N−1
2 X
k=−N−1
2
cos

ω0 + k∆ω

t

ii. Show that in the limit of many angular frequencies (∆ω ≪ ω0, N ≫ 1), the time-dependent
electric field approximately takes the following form:
Eafter(t) ≈ E0f(ω0,t)
sin

N (∆ω)t
2

sin

(∆ω)t
2

and determine the function f(ω0,t).
Solution
Eafter(t) = E0
+N−1
2 X
k=−N−1
2
cos

ω0 + k∆ω

t

= E0
N X
k=0
cos

ω0 −
N − 1
2
∆ω + k∆ω

t

=
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 20
E0 cos

ω0t +
1
2
∆ωt
 sin

(N+1)∆ω t
2

sin

∆ω t
2
 ≈ E0 cos ω0 t
 sin

N (∆ω)t
2

sin

(∆ω)t
2
 .
f(ω0,t) = cos ω0 t

.
c. To answer the next part of the problem, assume N is odd and find the following limit when
a = πm, where m is an integer:
lim
x→a
sin(Nx)
sinx
.
Solution
For indicated values of a, both numerator and denominator are approaching to 0. Using
L’Hôpital’s rule, we get
lim
x→πm
sin(Nx)
sinx
= lim
x→πm
N cos(Nx)
cosx
=
N cos(πNm)
cos(πm)
= N.
The answer is positive, because for odd values of N, Nm and m are both odd or both even.
d. Mode locking can dramatically increase the peak intensity I of the laser output. Use the
expression I = γE2, where γ is a known constant, to answer the following questions.
i. Determine to the total instantaneous intensity Iafter(t) of the electric field.
Solution
Eafter(t) = E0 cos ω0 t
 sin

N (∆ω)t
2

sin

(∆ω)t
2
 .
Total instantaneous intensity Iafter(t): we’re given
Iafter(t) = γ
h
Eafter(t)
i2
,
Substituting Eafter(t) gives
Iafter(t) = γ

E0 cos ω0 t
 sin

N (∆ω)t
2

sin

(∆ω)t
2

2
ii. What is the maximum possible intensity of the total field, and at what time(s) is this achieved?
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 21
Solution
All N modes add constructively when their phases align. In the ideal phase-locked case,
there is a moment in time (and corresponding phase) at which every mode’s cosine term is
at its maximum (i.e. cos(ωmt) = 1 for each m). At that instant, the field amplitudes sum
linearly:
Etotal =
N X
m=1
E0 = N E0.
Since Itotal(t) ∝

Eafter(t)
2
, the maximum intensity occurs when |Eafter| is largest, i.e.
Eafter = N E0. Consequently,
Imax = γ N E0
2
.
This perfect alignment occurs when
ω0 t + k∆ω t ≈ 2π × (integer)
for each k in the range −N−1
2 ... N−1
2 , which means (∆ω)t = 2πm for some integer m.
You can also obtain this result by looking at the sin(Na)/sin(a) term in the expression for
the total field: the alignment occurs at zeros of the denominator, i.e. (∆ω)t
2 = π · m, i.e.
t =
2πm
∆ω
.
In theory, we should be worried about the value of the cosine term at that time; however,
the constraint that ω0 as well as ω0 + k(∆ω) are all modes of the resonator ensures that
cos(ω0t) = 1 at those times.
e. The uncertainty principle states ∆x∆p ≥ ℏ
2 . In optics, we are more commonly interested in the
duration of the pulse rather than its spatial extent; the two are related via ∆x = c∆t.Consider
the problem of setting up a very short laser pulse. Use the uncertainty principle to estimate
the required bandwidth (range of frequencies). Compare that to the relationship between pulse
duration and gain bandwidth that we’re achieving in this problem.
Solution
From uncertainty principle: since p = ℏω
c , the uncertainty principle can be stated as
∆t∆ω ≥ 1, or “bandwidth ≥ 1/(pulse duration)”.
In our set-up, the bandwidth is N∆ω (not just ∆ω!), but we need to estimate the pulse
duration. This is the time scale over which the intensity falls to a constant fraction of its
original value. The intensity is dominated by the term
sin(N(∆ω)t/2)
sin((∆ω)t/2)
. If we Taylor-expand
this around t = 0, we write
(N(∆ω)t/2) − 1
3(N(∆ω)t/2)3
((∆ω)t/2) − 1
3((∆ω)t/2)3
.
Copyright ©2025 American Association of Physics Teachers2025 USAPhO Part B 22
Cancelling out the linear term, we get
N

1 −
1
3
N2
((∆ω)t/2)2

1 +
1
3
((∆ω)t/2)2

= N

1 −
1
3
(N2
− 1)((∆ω)t/2)2

This will become small when (N2 − 1)

(∆ω)t
2
2
∼ 1, or t ∼ 1
N(∆ω), so the relationship is
exactly as in the uncertainty principle.
Copyright ©2025 American Association of Physics Teachers
