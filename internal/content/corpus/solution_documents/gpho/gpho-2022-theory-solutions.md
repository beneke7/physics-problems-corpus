---
id: solution-document-gpho-2022-theory-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2022_theory_solutions.pdf
extraction_method: pdftotext-raw
mapped_problems: [gpho-2022-t1, gpho-2022-t2, gpho-2022-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2022_theory_solutions.pdf."
---

GPhO Dammam 2022
COVER
The 4th
Gulf Physics Olympiad — Theoretical Competition Solutions
Dammam, Saudi Arabia — March 14th
2022
— page 1 of 8 —GPhO Dammam 2022
PROBLEM 1
Problem T1. Dark Matter (10 points)
Part A. Rotation curves (5.5 points)
1. (1 pt) If Sun’s orbital speed is v⊙, then it must cover a
distance of 2πr⊙ = v⊙T⊙ in one full period. Here, r⊙ is Sun’s
distance from the galactic centre. Hence,
r⊙ =
v⊙T⊙
2π
. (0.5pts)
The Sun can be in one of the regions, either r⊙ ≤ r1 or
r⊙ > r1. If r⊙ ≤ r1, then v⊙ = v0r⊙/r1 and so we get
1 = v0T⊙/(2πr1) which, after plugging in the values, gives
a contradiction. (0.3pts)
Hence, r⊙ > r1 and v⊙ = v0. Therefore,
r⊙ =
v0T⊙
2π
= 2.5 × 1020
m = 8.1kpc. (0.2pts)
Indeed, r⊙ > r1.
2. (1 pt) The orbiting test particle of mass mtest ≪ m experi-
ences gravitational acceleration
Fg =
Gmmtest
r2
, (0.4pts)
which acts as the centripetal force
Fc =
mtestv2
r
(0.4pts)
due to it orbiting on a circular trajectory. Equating the two,
we find
v =
√
Gm
r
. (0.2pts)
If the student writes the final answer directly, they receive
full marks.
3. (1.5 pts) Solving this part requires the use of Gauss’ law for
gravity. Applying it gives that the gravitational acceleration
at a given point is only dictated by the mass that’s within an
imaginary sphere of radius r. (0.3pts)
Outside of the cloud, when r > r0, via Gauss’ law, the gas
acts as a point mass of mass m0 = 4πr3
0ρ0/3 and the speed is
therefore given by v =
√
Gm0/r. (0.2pts)
Inside the cloud, when r ≤ r0, the mass within r is
given by m(r) = 4πr3
ρ0/3 = m0r3
/r3
0 and so the speed is
v = r
√
Gm0/r3
0. (0.3pts)
The gravitational acceleration inside and outside the cloud
are given by
g(r ≤ r0) =
Gm(r)
r2
=
Gm0r
r3
0
,
g(r > r0) =
Gm0
r2
(0.3pts)
The potential energy in the cloud can be found from its integral
definition
φ(r ≤ r0) =
∫ r
∞
gdr =
∫ r0
∞
gdr +
∫ r
r0
gdr
=
∫ r0
∞
Gm0
r2
dr +
∫ r
r0
Gm0r
r3
0
dr
= −
Gm0
r0
+
Gm0r2
2r3
0
−
Gm0
2r0
=
Gm0
2r0
(
r2
− 3r2
0
)
. (0.4pts)
4. (1.5 pts) The speed profile in the region r ≤ r1 is linearly
increasing, which is also the case for the uniform density cloud
in part 3. Hence, in region A, when r ≤ r1, ρ is constant
(0.2pts)
and can be found from
v = r
√
Gm0
r3
0
= r
√
4πρG
3
= v0
r
r1
to be
ρ(r ≤ r1) =
3v2
0
4πGr2
1
= ρ1 = 2.20 × 10−20
kg/m3
. (0.3pts)
In region B, when r > r1, we have v(r) = v0. This doesn’t dir-
ectly agree with any of the previously investigated scenarios.
We can still express the total enclosed mass as
m =
rv2
0
G
. (0.3pts)
The differential of the mass can be related to the density at r
via dm = 4πr2
ρ(r)dr = drv2
0/G. Thus,
ρ(r > r1) =
v2
0
4πr2G
. (0.7pts)
If the student calculates the average density
ρavg = m(r)/V (r), then they lose up to (0.5pts) in the last
point.
5. (0.5 pts) From the previous part, We calculate the matter
density at r = r⊙ to be
ρ⊙ = ρ(r = r⊙) =
v2
0
4πr2
⊙G
= 1.01 × 10−21
kg/m3
. (0.1pts)
The visible density around the Sun can be estimated as the
product of the number density of stars n ≈ 1/d3
and the mass
of a typical star. This gives
ρvis ≈ M/d3
= 4.2 × 10−21
kg/m3
. (0.2pts)
We see that ρvis > ρ⊙. The reason for this is that when cal-
culating total matter density, we assumed spherical symmetry,
while visible mass is concentrated on the galactic disc, which
is highly non-spherical. As a result, ρ⊙ underestimates the
density around the solar neighbourhood. (0.2pts)
— page 2 of 8 —GPhO Dammam 2022
PROBLEM 1
Part B. Self-interacting dark matter (4.5 points)
1. (1.5 pts)
In region A, when r ≤ r1, we have ρ(r) = ρ1 and φ(r) =
Gm0(r2
− 3r2
0)/(2r0). However, Boltzmann statistics would
predict the density to be
ρ = Ce
−
m(r2−3r2
0
)
kBT
,
where C is a constant. This can’t agree with the actual con-
stant density, no matter the value of m/T. Hence, r ≤ r1
doesn’t agree with the SIDM model. This is not surprising, as
visible matter dominates in the centre of the galaxy. (0.5pts)
In region B, when r > r1, we have ρ(r) = ρ1r2
1/r2
. The
potential can be found by integrating. First,
g =
Gm(r)
r2
=
v2
0
r
(0.2pts)
and so
φ(r > r1) =
∫ r
∞
v2
0
r
dr = v2
0 lnr + C. (0.3pts)
lnr doesn’t converge at infinity, instead we substituted the in-
finite limit by a constant, as in reality the constant speed profile
can’t be sustained indefinitely (that would lead to infinite mass
galaxy) and must decay at some point. Boltzmann statistics
would then predict the density to be
ρ = B exp
(
−
m
kBT
(v2
0 lnr + C)
)
= Cr
−
mv2
0
kBT
. (0.2pts)
C stands as a proxy for a constant. This must agree
with ρ = ρ1r2
1/r2
and indeed, it’s satisfied when we set
−mv2
0/(kBT) = −2 and C = ρ1r2
1. Hence region B is the
only region that agrees with the SIDM model. (0.3pts)
2. (1 pt) In region B, when r > r1, we found that mv2
0/2 =
kBT. In an isothermal gas, the thermal speed satisfies
mv2
th
2
=
3kBT
2
(0.7pts)
so vth =
√
3v0 = 400km/s. (0.3pts)
3. (1 pt) When travelling a radial distance of dr, a dark matter
particle encounters around drσn(r) other particles. (0.4pts)
Here σ is the cross-sectional area of a dark matter particle,
and n(r) = ρ(r)/m is the number density of dark matter. The
thermalization condition in region r > r1 is then
∫ ∞
r1
ρ
m
σdr =
∫ ∞
r1
dr
r2
ρ1r2
1σ
m
=
ρ1r1σ
m
≫ 1. (0.4pts)
Hence,
σ
m
≫
1
ρ1r1
= 0.7m2
/kg. (0.2pts)
4. (1 pt) We use n = ρ/m and mv2
0 = 2kBT to get
ρ
m
≪
(
m2
v2
0
4πℏ2
)1
3
=
m3
v3
0
8ℏ3π3/2
. (0.5pts)
Hence,
m ≫
(
8ℏ3
π3/2
ρ
v3
0
)1
4
= 7.5 × 10−35
kg. (0.5pts)
This is significantly smaller than any other elementary particle.
For example electron’s mass is me = 9.1 × 10−31
kg.
— page 3 of 8 —GPhO Dammam 2022
PROBLEM 2
Problem T2. Global warming (10 points)
1. (2 pts) The total radiated power of the Sun is given by
Stefan-Boltzmann’s law:
L⊙ = 4πR2
⊙σT4
⊙.
Here we used that the emissivity of the sun is 1.00.
Using Stefan-Boltzmann’s law correctly for the Sun with its
values for radius, emissivity, and temperature (0.5pts)
As the radiation reaches Earth, it assumes an intensity
given by the ratio of L⊙ and the area of a sphere of radius
D:
I0 =
L⊙
4πD2
=
R2
⊙σT4
⊙
D2
= 1419W.
Arriving at the solar intensity or flux at Earth’s distance from
the Sun using the surface area, and getting the correct value
within 25% with units (0.2 + 0.2 + 0.1) (0.5pts)
The cross-sectional area of Earth is πR2
⊙, hence the total
solar power reaching Earth’s surface before being absorbed is
P0 = I0πR2
⊙ =
R2
⊙σT4
⊙
D2
R2
0π = 1.81 × 1017
W.
Obtaining the solar power at Earth while using I0 and Earth’s
cross sectional area with correct value within 25% and units
(0.2 + 0.2 + 0.1) (0.5pts)
The absorbed amount is P0α. The duration of a year is
∆t = 365.24 · 24 · 60 · 60s = 3.15 × 107
s. Hence, the ratio of
mankind’s power consumption and the solar radiation is
A
P0α∆t
= 2.20 × 10−4
.
Combining P0 correctly with α = 0.7 for 1 year in correct
units with A to get the ratio (0.2 + 0.3). Full mark for a
value within 25% (0.5pts)
2. (1 pt) The average amount of solar radiation arriving on a
unit area of Earth before being absorbed is I1 = P0/(4πR2
⊙) =
I0/4 = 355W. (0.3pts)
Solar panels convert to power an intensity of I1η. Thus, the
total area needed for the solar panels is
AS =
A
∆tI1η
= 393000km2
,
which is around 1.5 times bigger than the surface area of the
Persian Gulf.
Combining I1 with the eﬀiciency, A, and time (0.3 + 0.2 +
0.2). Full mark for a value within 25% (0.7pts)
3. (2 pts) Because the Earth is in thermal equilibrium, it must
release the same amount of heat as it absorbs. The absorbed
heat flux has two contributions, one is the absorbed flux I1α
from the Sun (0.5pts)
, and the other is the flux produced by Mankind Ih =
A/(∆t4πR2
⊙) = 0.0547W. (0.5pts)
The total absorbed and released flux are therefore Itot =
I1α + Ih. (0.5pts)
Humanity’s contribution to the total flux is small, but we keep
track of this for the sake of the next subtask. The ideal black
body flux from the surface is σT4
0 (note that we’re missing ε0
because calculating the effective emissivity requires comparing
the actual flux with ideal black body radiation) so the effective
emissivity is given by
εeﬀ =
I1α + Ih
σT4
0
= 0.635. (0.5pts)
4. (2 pts) If we remove humanity’s contribution, then us-
ing similar thermodynamic equilibrium arguments, the total
released flux must be equal to I1α. If Earth’s new temperature
is T1, then I1α = σεeﬀT4
1 . (0.5pts)
(0.5pts)
0.5 for LHS and RHS each
Plugging in εeﬀ from the previous part, we get
1 +
Ih
I1α
=
T4
0
T4
1
(0.5pts)
so the change in Earth’s temperature is
∆T1 = T0 − T1 = T0
(
1 −
(
1 +
Ih
I1α
)−1/4
)
= 0.016K.
(0.5pts)
Full mark for correct values within 25%
5. (1.5 pts) Our system consists of Earth’s surface and the
atmospheric layers with greenhouse gases. Both must be in
thermodynamic equilibrium. This is in contrast with the pre-
vious part where we could look at the total resulting system
and its aggregated properties. If we denote the black body ra-
diation being released from the surface with Is, then a fraction
of Isk is absorbed in the greenhouse gases and Isk/2 (0.5pts)
is being directed back to the surface of the Earth (and the
other Isk/2 to space). (0.5pts)
Hence, the heat flux balance of the surface reads I1α+Isk/2 =
Is (0.5pts)
(we have neglected humanity’s thermal contribution, as that
leads to a negligible change in temperature ∆T1 ≪ ∆T).
Therefore, k = 2(1 − I1α/Is). (0.5pts)
Additionally, we know that the emissivity of Earth’s sur-
face is ε0 so Is = ε0σT4
, where T is Earth’s temperature. This
gives us an analytic expression for k:
k = 2
(
1 −
I1α
ε0σT4
)
.
— page 4 of 8 —GPhO Dammam 2022
PROBLEM 2
For T = T0 we calculate k0 = 0.5886 and for T = T0 − ∆T,
k1 = 0.5708. Therefore, the absorption factor of the greenhouse
gases has changed by
∆k = k0 − k1 = 0.0178,
(0.5pts)
which on a global scale is very significant!
Full mark for correct values within 25%
6. (1.5 pts) The Hadley circulation forms a big heat engine.
The circulating air receives heat from Earth’s surface at tem-
perature Th = T0 = 15°C, (0.2pts)
and releases heat in the form of radiation in the upper at-
mospheric layers at an effective temperature Tc ≈ Th −
10km/(1°C/100m) = 188K. (0.3pts)
The released heat amount is constrained by the total heat radi-
ated into space by the atmospheric gases found in the previous
subtask, i.e. Pout ≤ Isk02πR2
0 = ε0σT4
k02πR2
0. . (0.3pts)
On the other hand, the maximal eﬀiciency of the heat engine
corresponds to a Carnot cycle
η ≤
Th − Tc
Th
.
(0.2pts)
If the power going into the cycle is Pin, then from conser-
vation of energy we have Pin = Pwork + Pout, where Pwork
is the amount of wind energy produced on Earth. Further,
Pwork = Pinη = (Pwork + Pout)η so
Pwork = Pout
η
1 − η
≤ Pout
Th−Tc
Th
1 − Th−Tc
Th
= Pout
(
Th
Tc
− 1
)
≤ ε0σT4
0 k02πR2
0
(
Th
Tc
− 1
)
= 2.8 × 1016
W. (0.3pts)
This is Pwork∆t/A = 1000 times bigger than humanity’s total
production. (0.2pts)
Full mark for correct values within 25%
— page 5 of 8 —GPhO Dammam 2022
PROBLEM 3
Problem T3. Sports (10 points)
Part A. Hammer throw (4 points)
1. (0.5 pts) We can neglect air drag in this part. The hammer
is launched at an angle θ = 45° and travels a distance of s. If
the starting speed is v0, the airtime can be expressed as
t =
2v0 sinθ
g
=
√
2v0
g
. (0.2pts)
The horizontal component of the velocity is constant and equal
to
vx = v0 cosθ =
v0
√
2
. (0.1pts)
The travelled distance is thus
d = vxt =
v2
0
g
(0.1pts)
and so
v0 =
√
gd = 28.0m/s. (0.1pts)
2. (1 pt) Before being released, the hammer moves on a cir-
cular trajectory of radius r = L + l = 2.22m. (0.1pts)
This means that the hammer experiences a centripetal acceler-
ation of v2
0/r. (0.3pts)
This is provided by the tension force Ft. (0.1pts)
The tension force is compensated by the athlete pulling from
the grip. Note that the gravitational force mg is pointing
downwards and hence, is perpendicular to the steel wire which
is horizontal at the moment when the hammer is released. So
the gravitational force cancels out from the force balance pro-
jected to the direction of the wire. Hence, the force exerted by
the athlete is equal to the centripetal force. (0.1pts)
So, we obtain
Ft =
mv2
0
r
= mg
(
d
r
)
(0.3pts)
which yields numerically 2.57kN. (0.1pts)
3. (0.5 pts) We can calculate the drag force from the formula
FD = 0.24Aρav2
0. The radius of the hammer R can be found
from the expression for its mass m = 4πR3
ρv/3. Hence,
R =
(
3m
4πρv
)1
3
= 6.03cm (0.2pts)
and so A = πR2
= 0.0114m2
and (0.2pts)
FD0 = 0.24Aρav2
0 = 2.64N. (0.1pts)
4. (1 pt) There are two main approaches. The more reli-
able one is using energy arguments, the second one using mo-
mentum. Both approaches start by noting that the air drag
has minimal impact on the velocities and falling positions of
the hammer. As such, we can take the hammer’s trajectory to
be parabolic in the first order, and calculate the second order
corrections drag force would have based on the average drag
air imparts on the hammer.
One critical thing to note is that we calculated v0 ignor-
ing air drag. In reality, the starting speed is a bit bigger to
account for drag, but the effect of this on the quantities that
this and the following sub-task ask for is negligible. Hence, we
still consider the parabolic trajectory starting with speed v0
and spanning a horizontal distance of s (this doesn’t need to
be explicitly mentioned to get full marks).
Approach 1. Energy considerations:
From conservation of energy, the work done by air drag
corresponds to change in the kinetic energy between starting
and final positions. (0.1pts)
Hence, if we can estimate the performed work, we get an es-
timate for the change in speed. In general, the work done
in a segment of length ∆l is ∆W = FD∆l. The total work
done can therefore be approximated as the product of the av-
erage drag force and the total length of the parabola. (0.1pts)
The speed of the hammer starts off at v0, then decreases
to v0/
√
2 at the top of the parabola, and then increases back
to v0 when it lands. This means the drag force goes from FD0
to FD0/2 and back to FD0. The average can be estimated as
3FD0/4. (0.2pts)
The length of the parabola can be estimated by noting that
the actual length of a small segment is
√
2 times bigger per its
horizontal projection at the sides of the parabola, and equal to
the projection at the peak. The length of the parabola is then
roughly (1+
√
2)/2 times the horizontal projection, s. (0.2pts)
Putting all this together,
∆W ≈
3
8
(1 +
√
2)FD0d = 191J. (0.1pts)
The conservation of energy reads mv2
0/2 = mv2
1/2+∆W, where
v1 is the final speed. (0.2pts)
Therefore,
∆v ≈ v0 − v1 = v0 −
√
v2
0 −
2∆W
m
= 0.96m/s. (0.1pts)
Approach 2. Momentum considerations:
The airtime of the hammer is t ≈
√
2v0/g = 4.04s.
(0.2pts)
To a decent approximations, we can decompose the air drag’s
action into separate horizontal and vertical components. As
— page 6 of 8 —GPhO Dammam 2022
PROBLEM 3
such, the horizontal drag at the beginning and at the end of
the flight is 0.24Aρa(v0)2
/
√
2 = FD/
√
2, and at the middle
of the flight — 0.24Aρa(v0/
√
2)2
= FD/
√
2. We can estimate
the average horizontal drag either as the arithmetic average
of these two magnitudes, or just take the value FD/2 from
the middle of the flight, because the hammer spends near the
maximum height relatively more time than near the ground
level. (0.2pts)
The drag in the vertical directions is smaller as it starts
with the same value FD/
√
2, but at the middle of the flight
vanishes (vy goes from v0/
√
2 to −v0/
√
2, passing through 0).
We can estimate its average value as the arithmetic average of
the initial/final value and the value at the middle of the flight,
so FD/4. (0.2pts)
As such, the changes in the horizontal and vertical velo-
city components can be estimated as ∆vx = −FDt/(2m) =
−0.73m/s and ∆vy = −FDt/(4m) = −0.37m/s. (0.2pts)
The total change in speed is then
∆v ≈ v0 −
√(
v0
√
2
− ∆vx
)2
+
(
v0
√
2
− ∆vy
)2
= 0.77m/s
(0.2pts)
Exact answer: ∆v = 0.814m/s.
5. (1 pt)
One might naturally extend the two approaches in the pre-
vious subtask. However, there’s a crucial diﬀiculty with using
the average horizontal deceleration and that is that the flight
duration changes slightly, providing a comparable contribution
to the change in length as the horizontal deceleration. This
usually results in an error that’s bigger than 30%. A more ac-
curate approach is to think in terms of the spans of parabolas
with different starting speeds, outlined below.
As mentioned in the previous subtask, we’re approximat-
ing the change in throwing length as the distance between the
landing positions of when the hammer is thrown with speed
v0 with and without drag. Without drag, it flies a distance s,
but with drag it falls somewhere in-between two points defined
by where the hammer falls without drag if the starting speeds
were v0 and v1. We can roughly take this to be in-between the
two positions. Hence, with drag the hammer flies a distance of
d′
≈ (v2
0/g + v2
1/g)/2 (0.8pts)
and so
∆x = d − d′
≈
v2
0 − v2
1
2g
= 2.68m. (0.2pts)
Exact answer: ∆x = 2.39m.
Part B. Discus throw (1 points)
Even though air drag is stronger during headwind, the wind
serves to provide a lift force to the disc, giving it prolonged air
time and allowing it to fly farther. (0.5pts)
(If additionally to the lift force, other arguments are mentioned,
e.g. propelling by rotation, subtract 0.2)
A qualitative force diagram is shown below. The diagram
should highlight a tilted discus being pushed against by a head-
wind. (0.2pts)
It should also show gravity, drag and lift force acting on the
disc (or instead of the drag and lift, the resultant drag force
which is pointed at a more vertical angle than usual). (0.3pts)
(If any force in the direction of motion is shown, subtract 0.1)
Part C. Pole vault (5 points)
1. (0.5 pts) The pole stores its elastic energy in bending de-
formation, i.e. the more it bends, the more elastic energy is
stored. (0.3pts)
From the figure, we see that positions 6 and 7 have the most
deformed pole. In 7, it’s slightly more bent, as can be seen
from how the end points of the poles are closer together. Hence,
the answer is 7. (0.2pts)
2. (2 pts) We can determine the time interval from the fact
that in-between positions 9 and 20, the man is in free-fall.
Specifically, the y−coordinate of the centre of mass follows a
quadratic y = y0 + vy0t − gt2
/2. (0.5pts)
We measure the y−coordinates at positions 16, 18, and 20 to
be y16 = 593.0cm, y18 = 441.4cm, y20 = 183.7cm. (0.6pts)
The time difference between two consecutive recorded
points is ∆t = 2τ. (0.1pts)
Subtracting y16, we get
y18 − y16 = vy0∆t −
g∆t2
2
,
y20 − y16 = 2vy0∆t − 2g∆t2
. (0.4pts)
— page 7 of 8 —GPhO Dammam 2022
PROBLEM 3
We can solve this by plugging vy0 from one equation to the
other. Solving the resulting equation gives us
τ =
∆t
2
=
1
2
√
2y18 − y20 − y16
g
= 0.165s. (0.4pts)
3. (0.5 pts) We can estimate the speed of the man as the
distance covered between positions 1 and 3 divided by 2τ.
(0.3pts)
From the figure, we measure l13 = 295.3cm and so v2 ≈
l13/(2τ) = 8.9m/s = 32.2km/h. (0.2pts)
4. (1 pt) We can find this from conservation of energy. For one,
there is no work being done by the pole as it starts and ends
completely straight (and has negligible kinetic energy). Fur-
ther, the energy at position 12 is the same as in 16 (because
the man is in free-fall). The conservation of energy then reads
mv2
3
2
+ mgy3 + W =
mv2
16
2
+ mgy16. (0.2pts)
From the figure, we measure y3 = 113.9cm, x16 = 21.1cm
(with respect to some arbitrary reference point), x18 = 66.3cm.
(0.2pts)
From part ii., we calculate vy0 = vy16 = (y18 − y16 +
g∆t2
/2)/∆t = −3.00m/s. (0.2pts)
We also approximate the horizontal component of the velo-
city at 16 as vx16 ≈ (x18 − x16)/(2τ) = 1.37m/s and v3 ≈ v2.
(0.2pts)
We can finally manipulate the conservation of energy to
W =
mv2
16
2
+ mgy16 −
mv2
3
2
− mgy3
≈
mv2
x16 + mv2
y16
2
+ mgy16 −
mv2
2
2
− mgy3
= 1.0kJ (0.2pts)
5. (1 pt) The maximal height of the centre of mass can be
found following the measurements from part ii. (0.2pts)
From there we found that y16 = 5.930m, vy16 = −3.00m/s.
Hence, the peak took place ∆t1 = −vy16/g in the past and it
has coordinates yp = y16−vy16∆t1+g∆t2
1/2 = y16+v2
y16/(2g) =
6.39m. (0.8pts)
— page 8 of 8 —
