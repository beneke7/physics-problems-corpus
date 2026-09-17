---
id: solution-document-usatst-2022-t-s
source: usatst
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usatst/2022_T_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usatst/2022_T_S.pdf."
---

AAPT
AIP 2022
UNITED STATES PHYSICS TEAM
36th
Annual
US Physics Team Training Camp
College Park, Maryland
THEORETICAL EXAMINATION
• This is the main theoretical team selection test for the 2022 US Physics Traveling Team.
• The time limit is 5 hours. There are 3 problems, which are each worth an equal amount of points.
• Before you start the exam, make sure you are provided with blank paper, both for your answers and
scratch work, writing utensils, a hand-held scientific calculator with memory and programs erased,
and a computer for you to download the exam.
• At the end of the exam, you have 20 minutes to upload solutions to all of the problems. For each
problem, scan or photograph each page of your solution, combine them into a single PDF file, and
upload them.
Reference table of possibly useful information
g = 9.8 N/kg G = 6.67 × 10−11 N · m2/kg2
k = 1/4π0 = 8.99 × 109 N · m2/C2 km = µ0/4π = 10−7 T · m/A
c = 3.00 × 108 m/s kB = 1.38 × 10−23 J/K
NA = 6.02 × 1023 (mol)−1 R = NAkB = 8.31 J/(mol · K)
σ = 5.67 × 10−8 J/(s · m2 · K4) e = 1.602 × 10−19 C
1 eV = 1.602 × 10−19 J h = 6.63 × 10−34 J · s = 4.14 × 10−15 eV · s
me = 9.109 × 10−31 kg = 0.511 MeV/c2 (1 + x)n ≈ 1 + nx for |x|  1
sinθ ≈ θ − θ3/6 for |θ|  1 cosθ ≈ 1 − θ2/2 for |θ|  1
You may use this sheet throughout the exam.2022 Theoretical Exam 2
Take Five
The five parts of this question are unrelated.
1. Consider a partially polarized light beam, containing a mix of unpolarized and linearly polarized light.
The intensity of the beam is analyzed using a linear polarizer. At a particular orientation of the
polarizer, the outgoing beam has maximum intensity Imax. Turning the polarizer by a 30◦ angle
reduces the outgoing beam’s intensity by 10%. Find the degree of polarization of the beam,
V ≡
Imax − Imin
Imax + Imin
where Imin is the minimum intensity for any orientation of the polarizer.
Solution
The intensity of partially polarized light that is passed through a linear polarizer is
Iu
2
+ Ip cos2
θ,
where Iu is the intensity of the unpolarized light, Ip is the intensity of the polarized light, and θ is
the angle between the polarization of the polarized light and the linear polarizer. The second term
follows directly from Malus’ law, and the first term is an average of Malus’ law over all angles.
The maximum intensity occurs when θ = 0◦ or 180◦ and is given by
Imax =
Iu
2
+ Ip.
Per the problem statement, a 30◦ rotation reduces the intensity by 10%, so
0.9

Iu
2
+ Ip

=
Iu
2
+ Ip cos2
30◦
=
Iu
2
+
3Ip
4
.
Solving for Iu gives us Iu = 3Ip. Thus, we have
Imax =
5
2
Ip, Imin =
3
2
Ip
where the latter occurs at θ = ±90◦, so V = 1/4 .
2. According to Newton’s law of cooling, a hot object transfers heat to the environment at a rate
P = k(To − Tl),
where To is the temperature of the object, Tl is the temperature of the environment, and k is a constant.
Consider a circuit element whose resistance R depends on its temperature T as shown below (not to
scale), with heat capacity C = 2 J/K in a lab of temperature Tl = 270 K. Note that the curve is
multivalued, which indicates hysteresis: the resistance takes the lower value when increasing from low
temperatures, and the higher value when decreasing from high temperatures.
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 3
When this component is placed in series with a voltage V1 = 50 V, its temperature stabilizes at
T1 = 350 K. When it is instead placed in series with a voltage V2 = 70 V, its temperature does not
stabilize, and the current through it instead oscillates. Find the period of these oscillations.
Solution
At 50 V voltage, incoming and lost power are equal,
V 2
1
Rmin
= k(T1 − Tl)
which implies
k =
V 2
1
Rmin(T1 − Tl)
= 0.3125
W
K
.
The current oscillates because the power heating up the component is larger than k(Tr − Tl) for
R = 100 ohms and smaller than k(Tr −Tl) for R = 200 ohms. So the resistance of the component
performs the cycle depicted in the diagram.
In the bottom leg of the diagram, the temperature increases from 380 K to 381 K in time τ1.
The power of dissipation almost does not change and can be approximated as k(Tav − Tl), where
Tav ≈ 380.5 K. Balance of incoming and outgoing powers allows to evaluate τ1:
C
d
dt
T =
V 2
2
R
− k(Tave − Tl)
C(Tmax − Tmin) =
V 2
2
Rmin
− k(Tav − Tl)
!
τ1
Similarly on the way back,
C(Tmin − Tmax) =
V 2
2
Rmax
− k(Tav − Tl)
!
τ2
The overall period of the oscillations τ is thus
τ = τ1 + τ2 = C(Tmax − Tmin)


1
V 2
2
Rmin
− k(Tav − Tl)
+
1
k(Tav − Tl) −
V 2
2
Rmax

 = 0.34 s .
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 4
To get an exact answer, you could solve the differential equation replacing Tav with T, but this
would give the same result, to the number of significant figures used in the problem.
3. Two speakers are 3.00 m apart. They both emit perfect sinusoids, whose frequencies differ by
0.250 Hz. Spaceman Fred, who is standing 40.0 m away in the direction shown in the diagram, must
run at 3.46 m/s to avoid hearing beats. The speed of sound in air is 343 m/s. Approximately what
frequency are the speakers emitting?
Solution
Two sources of identical frequency with a phase difference 2πδ set up an interference pattern with
maxima given for small angles by (n − δ)λ = aθ (where a is the source spacing). Here, we treat
the problem as two sources of the same frequency with a slowly varying phase difference, where
dδ
dt
= ∆f = 0.250Hz.
Thus the interference pattern shifts slowly; for a given maximum, i.e. a fixed n,
λ
dδ
dt
= a
dθ
dt
Since Fred is at a position given approximately by Lθ (where L = 40.0m), to match the movement
of the interference pattern he must run at v0 = Ldθ
dt . Putting the equations together,
λ =
av0
L∆f
= 1.04m
and f = c/λ = 330 Hz , where c is the speed of sound.
Alternative solution: This problem can be solved using Doppler shift. The frequency f1 of the
first source is perceived as
f0
1 =
c + vF,k
c
f1,
where vF,k is the component of Fred’s velocity parallel to his displacement with the first source
(which is roughly v0θ, where θ ≈ a/(2L)). So,
f0
1 ≈
c + v0θ
c
f1.
Likewise,
f0
2 ≈
c − v0θ
c
f2.
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 5
(Note that when Fred moves a distance d  L, the individual angles may be different, but the
difference between the angles is still 2θ by the small angle approximation.)
These two frequencies must equal each other for Fred to hear zero beats, so
(c + v0θ)f1 = (c − v0θ)f2.
Writing f1 = f and f2 = f + ∆f, we arrive at
v0θf ≈ c∆f − v0θf.
Then,
f ≈
c∆f
2θv0
=
cL∆f
av0
= 330 Hz .
4. The input voltage is the voltage difference between points I and II. What is the voltage difference
between the points a and b in the circuit below as a function of time?
You should assume R1C1 = R2C2, and simplify your answer as much as possible.
Solution
We use the method of complex impedance, and write the EMF as V = Re
n
Ṽ
o
, where Ṽ = V0eiωt.
Then, the voltage with respect to ground at points a and b are computed by the typical method
of resistors in series but with complex impedances:
Ṽa =
R1
R1 + 1
iωC1
Ṽ , Ṽb =
1
iωC2
R2 + 1
iωC2
Ṽ .
We define α = ωR1C1 = ωR2C2, so that
Ṽa =
iα
1 + iα
Ṽ , Ṽb =
1
1 + iα
Ṽ .
Subtracting the two gives
Ṽa − Ṽb =
iα − 1
iα + 1
Ṽ .
We finally need to take the real part of this expression. The magnitude of the expression is just
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 6
V0 because iα is purely imaginary. The phase can be computed as follows by noting that
iα − 1
iα + 1
=
(iα − 1)((1 − iα)
1 + |α|2
=
−1 + α2
1 + α2
+
2iα
1 + α2
= −e−iφ
,
where φ = arctan

2ωRC
1−ω2R2C2

= 2arctan(ωRC). Then,
Va − Vb = V0 cos(ωt − 2arctan(ωRC) + π) .
5. An empty cylindrical glass of cross-sectional area A is resting on a table. Water of density ρ is slowly
poured into the glass from a beaker, at a constant volume per unit time Q.
The beaker nozzle is at height H, and the water exits the beaker with negligible speed. Let t = 0 at
the moment the water first hits the bottom of the glass. Find the force of the water on the glass as
a function of time, until the glass overflows. Assume the water does not splash and the atmospheric
pressure is P0. Furthermore, assume the glass is wide, so that the rate at which the water level rises is
negligible compared to the speed at which water enters the glass.
Solution
The water in the glass is acted on by four forces: its weight, the normal force from the glass,
atmospheric pressure P0A, and the impact force from the poured water. The problem asks for the
normal force from the glass.
The weight is ρgV , where V is the volume of water in the glass. Since we have assumed the water
level rises slowly, the volume increases at the same rate Q that water pours out of the beaker, so
W = ρgQt.
The impact force comes from the change of momentum of the falling jet of water. Then,
Fj =
dp
dt
≈
δm∆v
δt
= ρQ∆v,
where δm is the mass of water that enters the beaker in time δt, and ∆v is the change of velocity of
the water entering the beaker. From elementary kinematics, ∆v =
p
2g(H − h), where h = Qt/A
is the water level in the beaker. Then,
Fj = ρQ
s
2g

H −
Qt
A

.
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 7
The total force is
F = Fj + W + P0A = Qρ
r
2g

H − Q
At

+ gt

+ P0A .
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 8
Chain Reaction
The three parts of this question are unrelated.
1. A frictionless circular cylinder of radius R is placed with its axis horizontal, and a flexible, inextensible
string of uniform linear mass density λ is wrapped around it. When the length of the string is slightly
longer than 2πR, part of the string will sag below the cylinder. Now suppose the string is slowly
shortened, until the entire string just touches the cylinder. At this moment, find the tension at the top
of the string.
Solution
First, let’s solve for the tension T0 at the bottom of the string. By considering force balance on a
small segment of angle dθ at the bottom, we have
λRg dθ = T0 dθ
which implies T0 = λRg.
Next, we need to find the tension at the top of the string. Again consider force balance on a small
segment of angle dθ, where the segment is at an angle θ from the top. The tangential component
of the gravitational force is balanced by the difference in tension across the segment, so
−λRg sinθdθ = dT.
Thus, the tension at the top is
T = T0 +
Z 0
π
dT
dθ
= T0 +
Z π
0
λRg sinθdθ = 3λRg
2. Model a grappling hook as a point mass m attached to the end of a uniform chain of linear mass density
λ. Initially, the chain is loosely coiled on the ground. Then the mass is launched directly upward from
the ground, with an initial speed v0. The chain is flexible, so that when the mass is at a height y, a
length y of the chain dangles directly beneath it, while the rest of the chain remains at rest on the
ground. Find the maximum height reached by the mass, assuming this is less than the length of the
chain. (Hint: if you directly compute the acceleration, you will find an intractable differential equation,
but it can be solved with a clever change of variable.)
Solution
Let h be the final height. A naive application of energy conservation would yield
1
2
mv2
0 = mgh +
λgh2
2
which yields
h =
m
λ


s
1 +
λv2
0
mg
− 1

.
However, this is incorrect, as the raising of the chain from the ground is an inelastic process, which
dissipates energy. Instead, we consider forces. The only external forces on the entire grappling
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 9
hook are gravity and the normal force from the ground. The normal force is precisely enough to
support the part of the chain lying on the ground, so the net force is
F = −(m + λy)g.
This is equal to the rate of change of momentum,
F =
dp
dt
, p = (m + λy)ẏ.
If you expand this out, you’ll get an intractable nonlinear second-order differential equation. The
trick is to consider the momentum as a function of height. We have
dp
dy
=
dp
dt
dt
dy
= −(m + λy)g
1
ẏ
= −
(m + λy)2g
p
.
Separating and integrating gives
Z
pdp = −
Z
(m + λy)2
g dy
which yields
−
(mv0)2
2
= −
((m + λh)3 − m3)g
3λ
since the final momentum is zero. Solving for h gives
h =
m
λ

 3
s
1 +
3λv2
0
2mg
− 1


3. A uniform rod of length 2R is placed inside a fixed, frictionless hemispherical bowl of radius R. In
equilibrium, the rod makes an angle θ with the horizontal. Assume that the rod and bowl are ideally
rigid, but that the lip of the bowl and the end of the rod are both slightly rounded, so that there is a
well-defined normal direction at the points they touch. Find an analytic expression for θ and evaluate
it to three significant figures, in degrees.
Solution
First solution: Gravity acts downward at the midpoint of the rod, while the reaction forces are
in the directions shown (perpendicular to the rod, and perpendicular to the bowl).
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 10
W
N1
N2
Now, we use the fact that when an object in static equilibrium is acted on by three forces, the
lines of the three forces must intersect. (Otherwise, torque balance about the intersection point
of the lines of any two of the forces couldn’t be obeyed.) This turns the problem into one of pure
Euclidean geometry. After some angle chasing, we arrive at the below diagram, where we found
the lengths AB and BC by applying trigonometry to the right triangle ABC.
B
D
C
A
2R
cosθ
R
R
2 R
s i n θ
θ
θ
90°−θ
θ
9 0 ° − 2 θ
2θ
Now, by considering the right triangle ABD, we find
tanθ =
BD
AB
=
2Rcosθ − R
2Rsinθ
.
Simplifying this gives
cosθ = 2cos2θ
which is equivalent to
4cos2
θ − cosθ − 2 = 0.
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 11
Applying the quadratic equation, we conclude
θ = cos−1 1 +
√
33
8
!
= 32.5◦
This is actually a classic problem, but it usually isn’t stated correctly: if you don’t explicitly
specify how the end of the rod and the lip of the bowl are shaped, as we did, then there aren’t
well-defined normal directions. The answer would then depend on how the rod and bowl deform,
which in turn depends sensitively on their dimensions, and what they’re made of.
Second solution: We balance forces perpendicular to the rod, forces parallel to the rod, and
torques. Let W be the weight of the rod. We use the fact that N2 makes an angle θ with the rod,
and that the length BC of the rod in the bowl is 2Rcosθ. Force balance parallel to the rod gives
N2 cosθ = W sinθ.
Force balance perpendicular to the rod gives
N1 + N2 sinθ = W cosθ.
Torque balance about the bottom end of the rod gives
2RN1 cosθ = RW cosθ.
Solving for N1 and N2 in the first and third equations, and plugging them into the second gives
1
2
+ sinθtanθ = cosθ.
Multiplying both sides by cosθ and rearranging gives us
1
2
cosθ = cos2
θ − sin2
θ =⇒ cosθ = 2cos2θ.
This can be solved in the same way as above.
Third solution: We minimize the energy of the rod. Defining the height to be y = 0 at the rim
of the bowl, the bottom end of the rod is at height
−2Rcosθsinθ
where we again used the fact that the length of the rod in the bowl is BC = 2Rcosθ. The top
end of the rod is at height
2R(1 − cosθ)sinθ.
Averaging the two, the center of mass is at height
R(sinθ − 2sinθcosθ) = R(sinθ − sin2θ).
Setting the derivative to zero gives
cosθ = 2cos2θ
which can again be solved in the same way as above.
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 12
Lego Movie
Gravitational waves are predicted by general relativity, but can be modeled with Newtonian physics and a
few small assumptions. Throughout this problem, assume classical Newtonian physics, and ignore special
relativistic effects. The mass of the sun is M = 2.0 × 1030 kg, and the luminosity of the sun is L =
3.8×1026 W. In all parts of this problem, you may use the fundamental constants c and G in your answers.
1. Consider a spherically symmetric body with mass M. Determine the Schwarzschild radius Rs of such
a body so that the escape velocity would be equal to the speed of light c.
Solution
From conservation of energy,
Rs =
2GM
c2
.
2. Two such bodies, with masses M1 and M2, are in circular orbits about their common center of mass.
The separation of the bodies is R, and the total mass is M = M1 + M2.
(a) Find the frequency f of the orbital motion in terms of M and R.
Solution
Since the gravitational force is the centripetal force,
M1ω2
R1 =
GM1M2
R2
, M2ω2
R2 =
GM1M2
R2
.
Adding these two expressions gives
ω2
R =
GM
R2
.
Solving for the frequency gives
f =
ω
2π
=
1
2π
s
GM
R3
.
(b) Find the total energy E of the system in terms of M1, M2, and R.
Solution
The potential energy is
U = −
GM1M2
R
.
The kinetic energy is
T =
1
2

M1R2
1 + M2R2
2

ω2
.
After some algebra, which is rather similar to that used in part 3(b) below, we have
T =
1
2

M1M2
M
R2

GM
R3
=
GM1M2
2R
.
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 13
Thus, we have
E = −
1
2
GM1M2
R
.
Alternatively, you could have skipped straight to this result by invoking the virial theorem.
(c) The minimum possible orbital separation is Rmin = R1+R2, where R1 and R2 are the Schwarzschild
radii for masses 1 and 2. Find the maximum possible orbital frequency fmax in terms of M.
Solution
In terms of M, Rmin is given by
Rmin =
2G
c2
(M1 + M2) =
2GM
c2
.
Plugging this into the answer to part 2(a) gives
fmax =
√
2c3
8πGM
.
3. We would like to estimate the rate at which the system loses energy due to the emission of gravitational
waves. In classical electromagnetism, the simplest form of radiation is dipole radiation, which results
from a second time derivative of the electric dipole moment. However, for gravity the analogue of the
electric dipole moment is the center of mass, which always moves at constant velocity by momentum
conservation. Thus, the leading source of gravitational radiation is quadrupole radiation, which depends
on a time derivative of the moment of inertia. All subparts of this part are rough estimates, which
means you may drop numeric prefactors such as π.
(a) The power radiated in gravitational waves by a system with moment of inertia I takes the form1
P = kGα
cβ

dnI
dtn
2
where k is a dimensionless constant. Determine α, β, and n.
Solution
This is a dimensional analysis problem, and we have
[G] = [L]3
/[M][T]2
, [c] = [L]/[T], [I] = [M][L]2
.
The only way to get the dimensions to match is α = 1, β = −5, and n = 3, giving
P = k
G
c5
d3I
dt3
!2
.
(b) For two black holes circularly orbiting each other in the xy plane, with center of mass at the origin,
find the moment of inertia Iy(t) about the y-axis in terms of M1, M2, R, and the angular frequency
ω, defining the origin of time so that Iy(0) = 0.
1
Technically, the exact answer does not contain the moment of inertia, but a more complex object called the reduced
quadrupole moment. However, the two are close enough for the rough estimates in this problem.
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 14
Solution
Letting the distances of the black holes to the y-axis be x1 and x2, we have
Iy = M1x2
1 + M2x2
2, x1 + x2 = x.
Since the center of mass is at the origin,
M1x1 = M2x2
which implies
x1 =
M2
M1 + M2
x, x2 =
M1
M1 + M2
x.
Thus, we have
Iy =
M1M2
M1 + M2
x2
.
Defining the origin of time as requested, we must have x(t) = Rsin(ωt), giving
Iy(t) =
M1M2
M1 + M2
R2
sin2
(ωt).
(c) Roughly estimate the average power radiated over an orbital period. Your final answer should be
a product of powers of M1, M2, M, R, and fundamental constants.
Solution
The moment of inertia has period 2f, which means that, neglecting numeric factors, every
time derivative of it yields a factor of ω. Therefore,
d3I
dt3
∼ ω3
I ∼
M1M2
M1 + M2
ω3
R2
.
Combining this with the results of parts 3(a) and 2(a) gives
P ∼
G(M1M2)2R4
c5(M1 + M2)2
ω6
∼
G4
c5
(M1 + M2)(M1M2)2
R5
.
(d) The maximum power radiated occurs when R = Rmin. Roughly estimate the maximum power in
the case M1 = M2 in terms of fundamental constants. What is the order of magnitude of its ratio
to the luminosity of the Sun?
Solution
The result is quite simple, as the mass drops out,
P ∼
G4M5
1
c5R5
1
∼
c5
G
.
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 15
When we plug in the numbers, we find
P ∼ 1026
L .
This is an enormous power, comparable to the output of all the stars in the observable universe!
4. The energy loss due to gravitational wave emission causes orbiting black holes to spiral towards each
other, changing the orbital frequency over time. Assume the orbit is always approximately circular.
(a) Assuming the energy loss is slow, find the rate of change of the orbital frequency df/dt in terms of
f, M1 and M2. You should find your answer is simply expressed in terms of the “chirp mass” Mc,
defined as
Mc =
M3
1 M3
2
M1 + M2
!1/5
.
Here you are expected to keep numeric prefactors. In particular, according to general relativity,
the correct numeric prefactor to part 3(c) is 32/5.
Solution
Combining our results for 2(a) and 2(b), the energy as a function of angular frequency is
E = −
1
2
GM1M2
(GM)1/3

GM
R3
1/3
= −
1
2
GM1M2
(GM)1/3
ω2/3
.
Taking the time derivative gives
dE
dt
= −
1
3
GM1M2
(GM)1/3
ω−1/3 dω
dt
.
On the other hand, we have P = −dE/dt, where we’ve been told that
P =
32
5
G4
c5
(M1 + M2)(M1M2)2
R5
.
Combining these results, simplifying, and eliminating R gives
dω
dt
=
96
5
G5/3
c5
M1M2
M1/3
ω11/3
=
96
5
(GMc)5/3
c5
ω11/3
.
Converting from angular frequency to frequency gives
df
dt
=
96(2π)8/3
5
(GMc)5/3
c5
f11/3
.
(b) What is the frequency fg of the gravitational waves emitted when the orbital frequency is f?
Solution
Note that the power in a wave scales with the amplitude squared, so by part 3(a), the amplitude
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 16
must scale with d3I/dt3. From part 3(b), we have
I ∝ x2
∝ cos2
(ωt) ∝ 1 + cos(2ωt)
which implies that
d3I
dt3
∝ sin(2ωt).
The factor of 2 here implies that the gravitational waves have frequency fg = 2f.
(c) The Hanford, Washington and Livingston, Louisiana LIGO detectors observed a binary black hole
merger event on September 14, 2015. Their data is shown in the graphs marked H1 and L1. Use the
smoothed (shaded) H1 data to answer the questions below. No detailed data analysis is expected.
Graph downloaded from LIGO Open Science Center, operated by California Institute of Technology and Massachussets Institute of Technology
and supported by the U. S. National Science Foundation: losc.ligo.org
i. Estimate the maximum gravitational wave frequency, and thereby estimate the total mass M,
giving your answer as a multiple of the solar mass M .
Solution
By looking at the period starting near t = 0.42s, we estimate a maximum gravitational
wave frequency 150 Hz. By part 4(b), this implies a maximum orbital frequency 75 Hz.
From part 2(c) we have
M =
√
2c3
8πGfmax
= 150M .
Any result within 50% is acceptable.
The actual result reported by LIGO is roughly (70 ± 5)M . Our result is of the right
Copyright ©2022 American Association of Physics Teachers2022 Theoretical Exam 17
order of magnitude, but it’s still far off because our expression for the maximum orbital
frequency is itself a rough approximation. It’s possible to extract M from the final stages
of the merger, but it requires something more sophisticated than what we’ve done.
ii. Estimate the chirp mass Mc, giving your answer as a multiple of the solar mass M .
Solution
Solving the result of part 4(a) for Mc and reexpressing the result in terms of fg gives
Mc =
c3
G

5
96π8/3
f−11/3
g
dfg
dt
3/5
.
We need to read off fg and dfg/dt from the diagram. We shouldn’t look at the end of
the merger process, because there dfg/dt is too large, while the above formula was derived
assuming dfg/dt was small. But at the beginning, dfg/dt is tiny, and thus hard to measure
precisely. The best data comes from the middle.
For example, there are minima at t = 0.373s, 0.392s, 0.408s. Considering these two time
intervals gives frequencies 53Hz, 63Hz. We thus take
fg = 58Hz,
dfg
dt
=
10Hz
17ms
= 600Hz/s.
Plugging these numbers in gives
Mc = 34M .
Any result within 50% is acceptable.
The result reported by LIGO was roughly (30.2 ± 2.0)M , so our analysis is decent.
Copyright ©2022 American Association of Physics Teachers
