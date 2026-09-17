---
id: solution-document-spot-2024-s
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2024_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [spot-2024-q1, spot-2024-q2, spot-2024-q3, spot-2024-q4, spot-2024-q5, spot-2024-q6, spot-2024-q7, spot-2024-q8, spot-2024-q9]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2024_S.pdf."
---

Wednesday, 13 March 2024, 1:00pm – 5:00pm
2024 Selection Test
for the Asian and International Physics Olympiads
a. This is a 4 hour test. Attempt all questions. The maximum total score is 85; marks
allocated for each question part are indicated in square brackets.
b. Check that there are a total of 34 printed pages (including this cover page). The last
page contains a table of physical constants that you may refer to and use.
c. Begin your answer for each question on a fresh sheet of paper, and present your working
and answers clearly. Your answer sheets should be sorted according to the order of the
questions.
d. Write your name on the top right hand corner of every answer sheet you submit.
e. Please complete and sign the declaration on page 2, which should be stapled
together and submitted with your answer sheets.
f. You may use a standard (non-programmable) scientific calculator in accordance with the
statutes of the International Physics Olympiad.
g. No books or documents relevant to the test may be brought into the examination room.
Page 1 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Declaration
I declare that I will be fully committed to the training for and participation in the Asian
Physics Olympiad and/or the International Physics Olympiad if selected. I will check first with
the MOE coordinator before taking on additional commitments not listed below.
Potential limitations to my commitment in the period from now to end-July 2024 are de-
scribed exhaustively in the box below, such as other academic competitions, CCA commit-
ments (school-related or otherwise), travel plans, etc.
Name and signature:
Question: 1 2 3 4 5 6 7 8 9 Total
Points: 5 5 7 6 20 10 9 10 13 85
Score:
Total time: 4 hours
Page 2 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
1. A thin uniform ring of mass m falls onto a rough floor. The initial velocity of the centre
of mass is v0, at an angle θ clockwise from the upwards vertical when it contacts the floor
(refer to the diagram). It is also rotating with angular velocity ω0 clockwise. The ground
is rough enough so that the ring achieves no-slipping right after it contacts the ground.
Denote the coefficient of restitution as e and the gravitational acceleration as g.
(a) [4] Find the velocity of the ring after the first bounce, and its angular velocity.
(b) [1] Suppose the ring bounces straight up after touching the ground. Find the maximum
height reached by the ring.
Solution:
(a) Let the ring have mass m, and suppose the impulse it receives from the ground
in the horizontal direction is J. Let the speed of the centre of the ring after the
bounce is v, making an angle β with the upwards vertical. Also suppose the ring
rotates with a final angular velocity of ω.
Using the impulse-momentum theorem in the horizontal direction,
mv sinβ − mv0 sinθ = J.
Using the angular impulse-momentum theorem, the angular impulse received is
−rJ, therefore
mr2
ω − mr2
ω0 = −rJ.
The ring achieves the no-slip condition before it lifts off the ground, therefore
v sinβ = rω.
Finally, using the coefficient of restitution,
v cosβ = −ev0 cosθ
noting the sign of cosθ. To eliminate J, we can combine the first two equations:
−mvrsinβ + mv0rsinθ = mr2
ω − mr2
ω0.
Therefore,
v0 sinθ − v sinβ = r(ω − ω0)
Substituting in rω = v sinβ, we get
v0 sinθ = 2v sinβ − rω0
Page 3 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Therefore,
v sinβ =
1
2
(v0 sinθ + rω0).
Combining this with v cosβ = −ev0 cosθ, we get
v =
p
(v sinβ)2 + (v cosβ)2 =
1
2
q
4e2v2
0 cos2 θ + (v0 sinθ + rω0)2.
tanβ =
v sinβ
v cosβ
= −
v0 sinθ + rω
2v0 cosθ
ω =
v sinβ
r
=
v0 sinθ + rω0
rω
.
Mark scheme:
1 – Impulse-Momentum Theorem
1 – COR and No-slip
1 – Final velocity
1 – Final angular velocity
(b) If the ring bounces vertically upwards, then β = 0, therefore
v0 sinθ = −rω.
The maximum height reached is
h =
v2
2g
=
e2v2
0 cos2 θ
2g
=
e2(v2
0 − rω2
0)
2g
.
Mark scheme:
1 – Correct value of maximum height
Page 4 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
2. Two square plates of side length L, constructed from an ideal conducting material, are
separated by an air gap of h. Both plates are parallel to and have the same projection
onto the xy-plane. The space between them is permeated with a magnetic field B which is
parallel to the x-axis. A metal rod of mass m, length h and resistance R is placed parallel to
the z-axis at the maximum y-position such that it is just touching both plates and allowed
to fall from rest until time T, when it reaches the minimum y-position and loses contact
with both plates. Assume that gravity acts in the negative y-direction and that the rod
remains in contact with both plates for as long as possible.
(a) [4] Derive the expression for the velocity v of the rod.
(b) [1] Describe and explain qualitatively the behaviour of the rod after a long time but before
time T, assuming T is very large.
Page 5 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
We may calculate the electromotive force ϵ across the
rod, where σ is the charge density on each plate:
ϵ =

vB −
σ
ϵ0

h
M0.5 Correct equation
Hence, we get the rate of change of σ by calculating
I = ϵ
R and taking dσ
dt = I
L2 :
dσ
dt
=

vB −
σ
ϵ0

h
RL2 M0.5 Correct equation
From I, we can calculate dv
dt = g − BIh
m :
dv
dt
= g −

vB −
σ
ϵ0

Bh2
mR
M0.5 Correct equation
Rearranging the expression for dv
dt , we get:
σ = ϵ0

mR
Bh2

dv
dt
− g

+ vB

M0.5 Correct equation
Substituting this into the expression for dσ
dt , we get:
M0.5 Attempt at substitu-
tion made
mϵ0R
Bh2
d2
v
dt2
+

ϵ0B +
m
BL2h
 dv
dt
=
mg
BL2h
M0.5 Correct equation
This is a first order differential equation in dv
dt . Solving
and integrating the expression: M1 Correct expression for
dv
dt
v =
mgϵ2
0B2L4R
(m + ϵ0B2hL2)2

1 − e
− h
mL2ϵ0R
(m+ϵ0B2hL2)t

+
m
m + ϵ0B2hL2
gt
As t → ∞, the acceleration of the rod approaches a constant value which is less than g
due to the resistance from continued current flow through the rod, which also approaches a
constant value. (No credit should be given for answers which cite formulae without analysis.)
Page 6 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
3. Consider a magnetic monopole at the origin emitting a magnetic field B(r) = µ
r3 r. The
monopole is fixed. An electron of charge e = −1.6 × 10−19 C and mass m is at position
r, moving with velocity v. In addition there is an arbitrary radially symmetric potential
field U(r) = U(r) acting on the electron, this is generally to ensure that the electron’s path
would be bounded. (Hint: U(r) should not appear in your answers for b) to f))
(a) [1] Write down the equation of motion for the electron. (Hint: write the equation out in
the vector form)
(b) [4] By considering the rate of change of orbital angular momentum L and the quantity
S = −eµ
r
r
Prove that the quantity J = L + S is conserved. This can be interpreted as “total”
angular momentum, and S can be interpreted as a spin angular momentum associated
with the energy field of the system.
(c) [2] By considering the component of total angular momentum J in the radial direction
r̂ = r
r, show that the angle between the two vectors are constant. Hence describe the
surface that the path of the electron must lie on, and sketch some possible paths.
Page 7 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
a) Newton’s second law,
mr̈ = −∇U + eṙ × B
Plugging in the definition of B,
mr̈ = −∇U +
eµ
r3
ṙ × r
M1 Correct equation (ei-
ther)
Total: 1
b) Definition of Orbital angular momentum:
L = mr × ṙ
Rate of change of L:
dL
dt
= mṙ × ṙ + mr × r̈ = mr × r̈
M1 Correct definition
Differentiate
The form inspires us to take r× the equation of motion.
mr̈ = −∇U +
eµ
r3
ṙ × r
mr × r̈ = −r × ∇U +
eµ
r3
r × (ṙ × r)
For a spherically symmetric potential U, the gradient
∇U is radial, hence r × ∇U = 0. In other words,
a central force exerts no torque and hence does not
cause change in angular momentum.
M1 Cross product or
torque discussion
Double cross product formula:
r × (ṙ × r) = ṙ(r · r) − r(r · ṙ)
dL
dt
=
eµ
r3
ṙr2
− r(r · ṙ)

M1 Full expression for dL
dt
or equivalent
Now for
S = −eµ
r
r
dS
dt
= −eµ

ṙ
r
−
r(r · ṙ)
r3

M1 Full expression for dS
dt
or equivalent
Hence for J = L + S,
dJ
dt
=
dL
dt
+
dS
dt
= 0
Total: 4
Page 8 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
marks comments
c) Let the angle between J and r̂ be θ. Then
J · r̂ = J cosθ
Meanwhile, L · r̂ = 0 due to the cross product in the
definition of L. Hence,
J · r̂ = (L + S) · r̂ = S · r̂ = −eµ
M1 Dot product
This is a positive constant. Combined with the fact
that the total angular momentum J is conserved, this
means that cosθ is constant with acute angle θ. Hence
the particle travels along a cone of angle θ around J.
A1 Cone
Note: any path sketched on the cone is acceptable
since the confining potential U(r) is not specified.
Total: 2
Page 9 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
4. A mass is attached to the end of a massless rod of length l, which is then raised to near-
vertical then released. Let the angle between the rod and the vertical be ϵ ≪ 1.
(a) [4] For motion between ϵ ≪ θ0 ≪ 1, find the equation of motion of the pendulum. Hence,
find the time taken to reach θ0, and the angular velocity when it reaches θ0.
(b) [2] By considering the motion of the pendulum past θ0, justify that the period of the
pendulum T tends to 4
q
l
g ln 1
ϵ as ϵ → 0
Page 10 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
Writing the torques acting on the pendulum and with
θ << 1, we have
ml2
θ̈ = mglθ
Correct equation
of motion
Solving the DE with the boundary conditions θ(t =
0) = ϵ, θ̇(t = 0) = 0, we obtain
θ =
ϵ
2
eΩt
+ e−Ωt

= ϵcoshΩt

Ω =
r
g
l

M1
Equation solved
correctly, correct
expression obtained
At θ0 >> ϵ, we obtain
θ ≈
ϵ
2
eΩt
⇒ t0 ≈
1
Ω
ln
2θ0
ϵ
≈
1
Ω
ln
θ0
ϵ A1 Correct limit taken
It is possible to obtain the velocity by differentiating,
but it is easier to take an energy approach. We have
mglcosϵ = mglcosθ0 +
1
2
ml2
θ̇2 M1
Correct equation
Give accordingly if
alternative method is
used
Solving for θ̇, we obtain
θ̇(θ = θ0) = Ω
q
θ2
0 − ϵ2 ≈ Ωθ0
A1
Correct equation
Other methods must
have correct coefficient
Now, the upper limit of the time taken to move through
θ = θ0 to θ = π is
t1 ≤
π
Ωθ0
This is a constant independent of ϵ, so as ϵ → 0, t0 ≫
t1.
M1
Explanation must
quantitatively show
that the period is
dominated by the
first part of the motion
in the limit
Using ϵ ≪ θ0, the period in the limit is then
T = 4(t0 + t1) = 4t0 =
4
Ω
ln
1
ϵ A1 Correct formula
for period
Total: 6
Page 11 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
5. The 1997 Nobel Prize in Physics was awarded to Steven Chu, Claude Cohen-Tannoudji and
William D. Phillips for development of methods to cool and trap atoms with laser light.
The laser light cools the particles down to the µK temperature range, allowing particles to
move at speeds less than 1km/h. At these speeds, scientists can study individual atoms
with great accuracy, opening the gateway to a deeper understanding of the properties of
gases at low temperatures.
In this problem, you will be analysing the basics of laser cooling and a method of cooling
using the Doppler effect.
Part A: Radiation Pressure
An atom can be represented as an electron of charge q and mass m attached to a spring
with spring constant mω2
0, experiencing a damping force proportional to its speed with
proportionality constant mγ. It is driven by an electromagnetic field E = E0 cosωt, whose
frequency is very close to the resonant frequency of the atom: defining the detuning ∆ =
ω − ω0, we may write |∆| ≪ ω. Also assume that γ ≪ ω.
(a) [4] Write down the differential equation satisfied by the displacement x(t) of the electron
from its equilibrium position. Hence, find x0 and ϕ in terms of q,m,∆,γ,E0, and ω0.
(b) [2] Find the average power ⟨P⟩ absorbed over one cycle of the electromagnetic field, ex-
pressing your answer in terms of q,m,γ,E0 and ∆.
The saturation intensity Is is the intensity of the laser beam which causes the atom to
spend one-quarter of its time in the excited state, and it is a quantity which appears widely
in literature on laser cooling:
Is =
ε0mcγ2ℏω
q2
.
(c) [1] Show that the average rate R at which photons are absorbed by an atom is
R =
I/Is
1 + 4∆2/γ2
γ
(d) [1] Find an expression for the force on an atom due to resonant absorption.
Part B: Doppler Cooling
For gases to reach low temperatures, their atoms must achieve low velocities as well. This
damping mechanism is different from the radiation damping γ described earlier, and relies
on the Doppler effect on an atom’s interaction with its surrounding electromagnetic field.
Consider the case where the atom is moving in one dimension (x), and the electromagnetic
field is propagating in the +x-direction with angular frequency ω.
(e) [2] Write down the angular frequency ω′ the particle sees the field oscillating at while it
is moving at velocity v. Show that for v ≪ c, the Doppler shift δωD = ω′ − ω can be
expressed as −kv, where k is the wave number of the electromagnetic wave.
This means that when you calculate the force, you can take into account the Doppler effect
by replacing ∆ with ∆ + δωD.
It is clear that when an atom travels into an incoming laser beam, it will slow down.
However, if the radiative forces continue to act, it will accelerate in the opposite direction.
We want the atom to experience no further force after coming to a stop. This will be
possible if we illuminate the atom with two identical laser beams propagating in opposite
directions.
Page 12 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
(f) [3] Calculate the net force F on an atom moving with velocity v. Express your answer in
terms of quantities defined earlier. Furthermore, show that in the low-velocity limit
(kv ≪ |∆| and γ), the net force F can be written as F = −αv, where α is to be
determined.
Part C: Heating Due to Photon Recoil
The damping force causes the atom to slow down. However, there is another heating
mechanism – the atom absorbs a photon from the electromagnetic field, making a transition
from the ground state to the excited state. The excited state is not stable, so the atom
returns to the ground state by emitting a photon in a random direction (+ or – in one
dimension). In both instances, momentum is not transferred to the atom in a continuous
manner, but rather in units of ℏk.
This quantized gains and losses of energy causes the momentum of the atom to take the path
of a random walk. In a given time interval, the number of steps is the number of photons
absorbed and emitted. Take the probability of absorption of a photon from either beam to
be equally likely. Thus, each absorption and emission results in two steps of the random
walk. In a time interval dt, the atom executes dN = 2Rtot dt steps, where Rtot = R+ + R−
is the total absorption rate from the two beams.
For this one-dimensional walk, the average momentum remains zero, but the RMS momen-
tum equals the square root of the number of steps times the step size:
p
⟨p2⟩ =
√
Nℏk.
(g) [2] Calculate the rate at which the atom’s energy increases due to the heating.
(h) [3] Find the equilibrium temperature T associated with this atomic motion.
(i) [2] Determine the resulting minimum temperature Tmin and the corresponding ∆ when
this is achieved.
Solution:
a. The electron experiences a spring force −mω2
0x, a drag force −mγẋ and a driving
force qE0 cosωt. Therefore, Newton’s 2nd Law can be written as
ẍ + γẋ + ω2
0x =
q
m
E0 cosωt.
Now substitute in the solution x(t) = x0 cos(ωt − ϕ) to obtain
−ω2
x0 cos(ωt − ϕ) − γωx0 sin(ωt − ϕ) + ω2
0x0 cos(ωt − ϕ) =
q
m
E0 cosωt
Simplifying and expanding,
− (ω2
− ω2
0)x0 cosωtcosϕ + (ω2
− ω2
0)x0 sinωtsinϕ
− γωx0 sinωtcosϕ − γωx0 cosωtsinϕ
=
q
m
E0 cosωt.
Comparing coefficients, the cosωt and sinωt terms give
x0[(ω2
− ω2
0)cosϕ + γω sinϕ] =
q
m
E0
x0[(ω2
− ω2
0)sinϕ − γω cosϕ] = 0
Page 13 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Squaring both equations and adding,
x2
0[(ω2
− ω0)2
cosϕ + γ2
ω2
] =
 q
m
E0
2
.
Therefore,
x0 =
q
mE0
p
(ω2 − ω2
0)2 + γ2ω2
≈
q
mE0
q
(2∆ω)2
+ γ2ω2
=
q
mE0
2ω
q
∆2 + γ2
4
Solving the second equation yields
tanϕ =
γω
ω2 − ω2
0
≈ −
γω
2ω∆
= −
γ
2∆
.
Mark scheme:
1 – Newton’s 2nd Law
1 – Correct equations to compare coefficients
1 – Correct x0
1 – Correct ϕ
b. The power absorbed is
P = Fv = qE0 cosωt · (−ωx0 sin(ωt − ϕ))
= −qE0ωx0(cosωtsinωtcosϕ − cos2
ωtsinϕ).
Averaging P over one cycle, we note that ⟨sinωt⟩ = 0 while ⟨cos2 ωt⟩ = 1
2, thus
⟨P⟩ =
1
2
qE0ωx0 sinϕ.
Therefore,
⟨P⟩ =
mγω2 q2
m2 E2
0
2ω2
0(4∆2 + γ2)
≈
q2
2m
γ
4∆2 + γ2
E2
0.
Mark scheme:
1 – Writing down expression for power in terms of trigonometric functions
1 – Correct final answer
c. The rate at which photons are absorbed is the power absorbed divided by the
energy carried per photon. We know that the energy carried per photon is hc
λ =
hω
2π = ℏω, thus the rate at which photons are absorbed is
R =

q2
2m
γ
4∆2 + γ2
E2
0

·
1
ℏω
.
Since I = 1
2cε0E2, we have
I
Is
=
q2E2
0
2mℏωγ2
.
Therefore,
R =
I/Is
1 + 4∆2/γ2
γ.
Page 14 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Mark scheme:
0.5 – Rate at which photons are absorbed
0.5 – Correct expression for I
d. The force is given by multiplying the rate R by the momentum per photon given
by p = ℏω
c :
F =
I/Is
1 + 4∆2/γ2
ℏωγ
c
.
1 – Final answer
e. The Doppler effect causes the particle to see the field oscillating with angular
velocity
ω′
= ω
r
c − v
c + v
.
Performing binomial expansion, we have

1 −
v
c
1/2
≈ 1 −
v
2c
,

1 +
v
c
−1/2
≈ 1 −
v
2c
.
Multiplying the two quantities together,
ω′
= ω

1 −
v
c

⇒ δωD = −
vω
c
= −kv.
Mark scheme:
1 – Correct Doppler effect expression
1 – Correct binomial expansion
f. The forces from the + and − beams can be written as
F± = ±
R±ℏω
c
= ±R±ℏk.
Since
R± =
I/Is
1 + 4(∆ ∓ kv)2/γ2
,
the net force is
F = F+ + F− =
I
Is
ℏkγ

 1
1 + 4(∆−kv)2
γ2
−
1
1 + 4(∆+kv)2
γ2

.
For low velocities, binomial expansion of the denominators yields
1
1 + 4(∆∓kv)2
γ2
≈
1
1 + 4∆2∓8∆kv
γ2
=
γ2
γ2 + 4∆2 ∓ 8∆kv
=
γ2
(γ2 + 4∆2)

1 ∓ 8∆kv
γ2+4∆2

≈
γ2
γ2 + 4∆2

1 ±
8∆kv
γ2 + 4∆2

.
Page 15 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Thus,
F ≈ 16
I
Is
ℏk2γ3∆v
(γ2 + 4∆2)2
.
Mark scheme:
1 – Correctly writing down R±
1 – Net force
1 – Correct final answer
g. For small v,
d⟨p2⟩
dt
=
dN
dt
(ℏk)2
= 2Rtot(ℏk)2
=
4I/Is
1 + 4∆2/γ2
γ(ℏk)2
Therefore,
dE
dt
=
1
2m
d⟨p2⟩
dt
=
(ℏk)2
m
2I/Is
1 + 4∆2/γ2
γ.
Mark scheme:
1 – Correct d⟨p2⟩
dt
1 – Correct final answer
h. First we compute dE
dt due to cooling.
dE
dt
=
d
dt

1
2
mv2

= mv
dv
dt
= Fv = −αv2
= −
2α
m
E.
Therefore,
(ℏk)2
m
2I/Is
1 + 4∆2/γ2
γ =
2α
m
E.
After substituting in the expression for α, we have
E = −
ℏ(γ2 + 4∆2)
8∆
.
Applying the equipartition theorem, each degree of freedom contributes an energy
kBT/2. Thus, the equilibrium temperature is
T = −
ℏ(γ2 + 4∆2)
4∆kB
.
Mark scheme:
1 – Finding dE
dt due to cooling and solving for E
1 – Applying equipartition theorem
1 – Correct equilibrium temperature
i. Note that
T =
ℏγ
2kB

γ
2(−∆)
+
2(−∆)
γ

≥
ℏγ
kB
.
Equality holds when γ
2(−∆) = 2(−∆)
γ , or ∆ = −γ
2.
Mark scheme:
1 – Finding ∆ = −γ
2
1 – Correct Tmin
Page 16 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
For a comprehensive discussion, see: Gould, P. (1997). Laser cooling of atoms to the
Doppler limit. American Journal of Physics, 65(11), 1120–1123. https://doi.org/
10.1119/1.18740
Page 17 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
6. An electron is confined to move along the circumference of a thin ring with radius r.
(a) [2] Find the allowed values of its kinetic energy, giving your answer in terms of the electron
mass m and Planck’s constant h.
The ring is now placed in a constant (but not necessarily uniform) magnetic field directed
into the page, such that the magnetic flux through the ring is Φ.
r
Figure 1: Illustration of the ring.
(b) [2] By considering the energy contribution from the current of the moving charge, show
that the total energy of the system (up to an additive constant) is given by
E =
p2
eff
2m
=
1
2m

p +
eΦ
2πr
2
where p is the electron’s momentum (treating anticlockwise as positive) and −e is the
charge of the electron.
(c) [2] Treating peff as the total effective momentum of the electron’s quantum wave, find the
magnitude and direction of the current flowing in the ring in the ground state(s) and
first excited state(s) of the electron’s kinetic energy when Φ = h
2e.
A typical electron double-slit experiment is set up as shown in the diagram below, with a
solenoid placed just behind the two slits. The width of each slit is small but finite. The
velocity of the electron beam is v, the distance between the slits is d, and the distance from
the slits to the screen is L ≫ d. The magnetic field of the solenoid is directed into the page,
and the total magnetic flux through the solenoid is Φ = Nh
2e , where N is the number of coils
in the solenoid.
Double Slit Screen
Φ
Solenoid
Source y
d
L
Figure 2: Illustration of the electron double-slit experiment.
(d) [4] Sketch the intensity of electrons detected as a function of the vertical position y along
the screen. Include the distance between extrema in the sketch.
Page 18 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
Similar to the typical wave-in-a-box setting, the elec-
tron can be treated as a standing wave, with wavelength
given by the de Broglie wavelength.
λ =
h
p
M0.2 Correct equation
The boundary condition on the ring is then that the
circumference of the ring must be an integer multiple
of the wavelength, in order for standing waves to form.
2πr = nλ
M0.5 Correct equation
Hence, E =
p2
2m
=
n2h2
8π2mr2
. A0.3 Correct answer
Total: 1.0
Solution:
Marking scheme marks comments
The magnitude of the current due to the electron is
given by its charge over its period of motion:
I =
e
T
=
ev
2πr
=
ep
2πmr
M1 Correct equation
From inductors, the energy required to add a current
dI to a loop with magnetic flux Φ is dE = Φ dI. Hence,
the additional energy due to the current is
|∆E| =
Z I
0
Φ dI = ΦI
[Note: The expression U = −⃗ µ· ⃗ B for potential energy
of an ideal dipole in a uniform external field gives the
same answer. Credit should only be provided if the
student considers each infinitesimal dipole and local
magnetic field and explicitly show that it reduces to
the expression for the flux.]
M1 Correct equation
The sign of the additional energy can be deduced
to be positive by noting that when the momentum
is positive (anticlockwise), the current is clockwise,
which produces a B field aligned with the external
field, thereby increasing the stored magnetic energy.
Thus, E =
p2
2m
+
eΦ
2πmr
p =
1
2m

p +
eΦ
2πr
2
+const.
A0.5 Correct answer
Total: 2.0
Page 19 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
With peff as the new momentum of the quantum wave,
the de Broglie wavelength is now
λ =
h
peff
=
h
p + eΦ
2πr
M0.4 Correct equation
Applying the same condition 2πr = nλ as part (a), the
quantised momentum is now
p =
nh − eΦ
2πr
=
h
2πr

n −
1
2
 M0.4 Correct equation
The kinetic energy and current are then given by
KE =
p2
2m
=
h2
8π2mr2

n −
1
2
2
I = −
ep
2πmr
= −
eh
4π2mr2

n −
1
2

It follows that the ground states of KE occur when
n = 0,+1 and the first excited states occur when n =
−1,+2. This corresponds to a current of
I =
(
± eh
8π2mr2 , n = 0,+1
± 3eh
8π2mr2 , n = −1,+2 A1.2 0.3 per correct answer
Total: 2.0
Page 20 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
The key idea here is to consider the closed loop formed
by a pair of electrons going through either slit and in-
terfering at the same point on the screen (shown in
Figure 2). The result from (b) can be generalised to a
loop of arbitrary shape,
peff = p ±
eΦ
Lloop
M1 Correct idea of forming
a closed loop
The sign in peff changes between the top and bottom
paths (clockwise and anticlockwise respectively). This
gives a phase difference between both paths of
ϕtop =
2πpeff
h
Ltop =
2π
h
Ltop

p −
eΦ
Lloop

ϕbot =
2πpeff
h
Lbot =
2π
h
Lbot

p +
eΦ
Lloop

∴ (∆ϕ)t−b =
2πp
h
(∆L)t−b −
2πe
h
Φ
The first term is exactly the same as regular double-
slit diffraction. The flux through the loop is 1/N times
the total flux through the solenoid, Φ = h
2e, hence the
second term is exactly −π; the electron passing through
the bottom slit obtains a relative phase shift of +π,
which translates the diffraction pattern down by half a
period.
dsinθ =

n −
1
2

λ
ymaxima ≈
hL
mvd

n −
1
2

M1
Correctly identifying
that the bottom slit
has additional phase
+π and hence y = 0 is
a minima
Finally, since the slits have finite width, there is a large
single-slit decay envelope centered about the origin.
Thus, the final graph should look like:
−3−2.5−2−1.5−1−0.5 0 0.5 1 1.5 2 2.5 3
0
0.2
0.4
0.6
0.8
1
y/( hL
mvd)
I/I 0
A2
1 - Distance between
maxima
1 - sinc2
y envelope
about origin
Total: 4
Page 21 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
7. A straw with its bottom end covered is placed in a large tank of water such that its
bottom end is H below the surface of the water. At t = 0 the barrier (dashed) vanishes.
H
(a) [2] Use Bernoulli’s principle to find the total time it takes for the water to reach the surface
level inside the tube. Explain why this value may be inaccurate.
(b) [2] The Navier-Stokes equation (1) can be used to obtain a more accurate solution.
∂⃗ u
∂t
+ (⃗ u · ∇)⃗ u = −
∇P
ρ
+⃗ g (1)
Assuming irrotational flow such that ⃗ u = ∇ϕ(x,y,z,t). Show that the equation reduces
to (2) where C is a constant. (Hint: You may want to use the fact that ⃗ A×(∇× ⃗ A) =
1
2∇A2 − (⃗ A · ∇)⃗ A for any vector field ⃗ A.)
∂ϕ
∂t
+
u2
2
+
P
ρ
+ gz = C (2)
(c) [2] Find the function ϕ for the region inside the straw in terms of velocity of the water
surface at the top of the straw and z (the vertical distance from the bottom of the
straw). Explain how you arrived at the answer.
(d) [3] Using (2) determine the maximum height that the water can reach above the surround-
ing water level outside the straw. (Hint: The substitution r = v2
z
2 may be useful)
Page 22 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
(a) Consider a point on the surface of the water and
a point at the top of the water inside the straw why
it is y above the bottom of the straw. The equation
becomes
1
2
ρv2
= ρg(H − y)
Which gives us
dy
dt
=
p
2g(H − y)
Z H
0
dy
p
2g(H − y)
=
Z t
0
dt
M1 Correct equation
Carrying out the integration we get t =
s
2H
g
.
A1 Correct answer
Total: 2
(b) Irrotational flow implies that ∇ × ⃗ u = 0.
M1 Use the identity
Which means that (⃗ u · ∇)⃗ u = 1
2∇u2. Noting that ∇ −
gz = ⃗ g, (1) becomes
∂
∂t
∇ϕ +
1
2
∇u2
+ ∇
P
ρ
+ ∇gz = 0
Factoring the ∇ out we get desired equation.
A1 Final answer
Total: 2
(c) By the continuity equation we know that the ve-
locity inside the straw is constant. Thus, ∂
∂zϕ = uz
where uz is the velocity of the water inside the straw.
Integrating the expression we get ϕ = uzz (up to a
function of x,y,t).
M1 uz is uniform
A1 Correct answer
Total: 2
Page 23 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
(d) Once again considering a point at the water surface
outside the straw and at the water surface inside the
straw. We know that the ϕ = 0 at the outside surface
and that the pressures are equal.
M1 Correct boundary con-
ditions
z ˙ uz +
u2
z
2
+ gz = gH
The final ODE to solve becomes
zz̈ +
ż2
2
+ gz = gH
To solve it, we use the substitutions w = ż and r = w2
2
which gives us that z̈ = wdw
dz = 1
2
dw2
dz . This gives us
the previous equation in a form suitable for applying
the integration factor method
z
dr
dz
+ r + g(z − H) = 0
M1 Rewrite/Solve the
equation
Z 0
0
d(zr) =
Z 0
zmax
g(H − z)dz
= g(Hzmax −
z2
max
2
) = 0
Thus the final answer is zmax = 2H and the water
jumps up above the surrounding level.
A1 Correct answer
Total: 3
Page 24 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
8. A cyclic process with one mole of an ideal polyatomic gas appears as a circle on the pressure-
volume (P − V ) diagram. Coordinates of the circle centre are (P0,V0), the diameter along
the pressure axis is 2∆P, and the diameter along the volume axis is 2∆V.
(a) [6] Determine all pairs of diametrically opposite points of the circle (P,V ) with equal heat
capacities. Calculate these heat capacities in terms of known quantities, CV , Cp and
R.
(b) [1] Compare heat capacities of two arbitrary diametrically opposite points lying in quad-
rants 2 and 4 of the circle. Which of these points has greater heat capacity? Why?
(c) [3] Form a pair of simultaneous (algebraic) equations that you would use to determine the
values (P,V ) where entropy is maximum and minimum during the cycle. Comment,
with mathematical justification, whether these points are diametrically opposite.
Page 25 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
(a)
Consider one mole of an ideal gas. By definition, its
heat capacity is
C =
dQ
dT
=
dU + PdV
dT
M0.5
Correct equation
For an ideal gas,
dU = CV dT
Also,
RdT = PdV + V dP
M0.5
Correct equation
Therefore, the heat capacity is
C = CV + R
PdV
PdV + V dP
= CV +
R
1 + V
P
dP
dV
Tangents to a circle at any diametrically opposite
points A and B have the same slope:
(
dP
dV
)A = (
dP
dV
)B
M0.5 Realising dP
dV is same
Therefore, heat capacities can be equal when dP
dV either
vanishes or diverges. This corresponds to
(V0,P0 − ∆P),(V0,P0 + ∆P),C = CP
A1 Correct answer for C
(V0 − ∆V,P0),(V0 + ∆V,P0),C = CV A1 Correct answer for C
The equality also takes place if
VA
PA
=
VB
PB
i.e. when points A, B and the circle centre lie on the
same straight line passing through the origin. There-
fore,
VA
PA
=
VB
PB
=
V0
P0
M0.5 Correct equation
Page 26 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
Consider the process in dimensionless coordinates as
shown above. We get
dP/∆P
dV/∆V
= −
V0/∆V
P0/∆P
and so
dP
dV
= −
V0
P0
(
∆P
∆V
)2 M1 Correct equation
Hence, the heat capacity for the last pair of points is
C = CV +
R
1 − (V0
P0
)2(∆P
∆V )2 A1 Correct answer for C
Note: If V0
P0
= ∆P
∆V , then C = ±∞ i.e. the tangent
points belong to isotherms. E1 Extra point if spotted
Total: 6
(b)
Let us compare heat capacities at points C and D lying
in quadrants 2 and 4, respectively. Since
(
dP
dV
)C = (
dP
dV
)D > 0,
Note dP
dV positive
heat capacity is greater when the ratio V
P is smaller:
VC
PC
<
VD
PD
Compare V
P
Hence, CC > CD A1 Correct answer
Total: 1
Page 27 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
(c) Note that at the maxmimum and minimum entropy, dQ = 0. This is equivalent to an
adiabatic process, and our extrema should hence be tangent to adiabatic curves. For the
gradients, we have:
dP
dV
= −γ
PV γ
V γ+1
= −
γP
V
Hence, our first equation equating gradients (in dimensionless coordinates) is
V − V0
P − P0
=
γP
V
.
With the final constraint that the point lies on the circle,

P − P0
∆P
2
+

V − V0
∆V
2
= 1
1 - Notice that the points are tangent to the adiabat
1 - Equation for the gradient
1 - Equation for the circle
Page 28 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
9. From special relativity, it is known that energy and mass are equivalent and interchangeable.
Some of the results of general relativity can be obtained by treating the gravitational mass
as mg = F
c2 , where F is the total non-potential energy of the particle.
(a) [2] Consider a photon fired radially outwards from a large mass M. If the frequency
received by an observer infinitely far away is f0, determine its frequency f(r) as a
function of the radial distance r ≫ GM
c2 away from the large mass.
(b) [1] Hence, find the effective Lorentz factor γg(r) by which time and length are dilated and
contracted with respect to an observer at infinity, and determine the speed v at which
a non-accelerating frame would experience the same effect.
To account for these effects, under weak gravity r ≫ GM
c2

, the usual invariant proper time
interval can be modified to
dτ2
=

1 −
2GM
rc2

dt2
−
1
c2

1 +
2GM
rc2

dr2
+ r2
dθ2

where the coordinates (r,θ) are the usual polar coordinates with mass M at the origin, and
all coordinates are taken with respect to an observer at infinity.
A particle of mass m is fired towards an object of mass M from very far away with impact
parameter b ≫ GM
c2 and initial velocity u, such that the particle’s trajectory is deflected by
an angle ϕ ≪ 1.
M
b
ϕ
(c) [3] Show that the total energy of the particle is given by
E2
=
c2
α2
m2
c2
+ α2
p2
r + r2
p2
θ

where px = mdx
dτ is the x-component of the particle’s momentum and α = 1 + GM
rc2 .
[Hint: If ds2 = A dx2 + B dy2, then ⃗ a ·⃗ b = Aaxbx + Bayby.]
(d) [3] Show that this effectively reduces to an additional central force acting on the particle
of the form
⃗ F =
d⃗ p
dτ
= −
β
r4
r̂
where β is some constant you should determine.
(e) [4] Hence or otherwise, determine the angle of deflection ϕ to leading order in GM
bc2 and
compare your results for a massive particle (u ≪ c) and a photon (u = c) to the
classical case (ϕ = 2GM
bu2 ).
You may make use of the following integral without proof:
Z ∞
−∞
dx
(x2 + 1)k
=
(
2 (k = 3
2)
4
3 (k = 5
2)
Page 29 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
Using the formula given, for a photon
mg =
E
c2
=
hf
c2 M0.5 Correct energy of pho-
ton
The simplest approach is then to use energy conserva-
tion;
E = hf −
GMmg
r
= hf0
f
f0
=

1 −
GM
rc2
−1
≈ 1 +
GM
rc2
M10.5 Correct equation of
COE
Alternatively, one can obtain the same result using N2L
and integrating (using dr
dt = c):
dp
dt
= −
GMmg
r2
c
dp
dr
= −
GMp
cr2
Z p
p0
dp′
p′
= −
GM
c2
Z r
∞
dr′
r′2
p
p0
= exp

GM
rc2

≈ 1 +
GM
rc2
M20.5 Correct application of
N2L
Thus, f =

1 +
GM
rc2

f0 . A1
Correct answer [−0.5
if approximation for
large r not carried out]
Total: 1.0
Page 30 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
Treating the photon from (a) as a wave, an observer
at r will observe the time between pulses as T = 1
f(r),
and the length between pulses as λ = c
f(r). Since the
pulses are an observable effect, it should be coordinate
invariant. From special relativity, the speed of light c is
also coordinate invariant. Hence, we can conclude that
the time dilation/length contraction factor is given by
γg =
T0
T(r)
=
λ0
λ(r)
= 1 +
GM
rc2 A0.5 Correct answer
The corresponding speed v is then
v = c
s
1 −
1
γ2
g
≈
r
2GM
r
which is the escape velocity at distance r.
A0.5
Correct answer [−0.5
if approximation for
large r not carried out]
Total: 1.0
ye
Page 31 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
The non-potential energy of the particle is given by
F2
= m2
c4
+ p2
c2 M0.5 Relativistic energy for-
mula used
Using the hint given, noticing that the term in square
brackets in the expression for dτ2 corresponds to the
spatial distance ds2 = α2dr2 + r2dθ2,
p2
= ⃗ p · ⃗ p = α2
p2
r + r2
p2
θ
F2
= c2
(m2
c2
+ α2
p2
r + r2
p2
θ)
M0.5 Correct expression
Using the formula for mg stated earlier, the total energy
including the gravitational potential is
E = F −
GMF
rc2
≈
F
α
M0.5 Considered gravita-
tional potential
Hence, E2
=
c2
α2
m2
c2
+ α2
p2
r + r2
p2
θ

.
A0.5 Correct answer
Total: 2.0
Solution:
Marking scheme marks comments
Using the conservation of angular momentum,
L = γumbu = r2
pθ
pθ =
γumbu
r2
M1 Conservation of angu-
lar momentum used
Rearranging the expression in part (d),
p2
r +

1 −
2GM
rc2

m2
c2
+
γ2
um2b2u2
r2

= const
p2
r
2m
−
GMm
r
+
L2
2mr2
−
GMmb2u2
(c2 − u2)r3
= const
M1 Recognizing energy ex-
pression
The first 3 terms should be recognized as the kinetic
energy and effective potential energy for gravitation.
The additional term thus represents a potential energy,
which corresponds to a force of
⃗ F = −
∂U
∂r
r̂ = −
3GMmb2u2
(c2 − u2)r4
r̂
M1 Differentiating to find
force
Hence, β =
3GMmb2u2
c2 − u2
.
Total: 2.0
Page 32 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Solution:
Marking scheme marks comments
To get the deflection to leading order, we can first
suppose the particle is not deflected at all, then
calculate the momentum imparted to it along said
trajectory (Born approximation).
M0.5 Correct or equivalent
approximation used
By symmetry, the net impulse exerted in the horizontal
direction is 0. Since the force is already small, time di-
lation due to gravity can be ignored, hence only the SR
factor remains (dt
dτ ≈ γu). The impulse in the vertical
direction is given by
∆vy =
Z
Fy dτ ≈
Z ∞
−∞
Fy
γuu
dx
M1
Attempt to calculate
vertical momentum or
velocity
Resolving the force into the y-direction,
Fy = −

GMm
x2 + b2
+
3GMmb2u2
(c2 − u2)(x2 + b2)2

x
√
x2 + b2
hence the impulse in the vertical direction is
∆py = −
GMmb
γuu
Z ∞
−∞

1
(x2 + b2)3/2
+
3b2u2
(c2 − u2)(x2 + b2)5/2

dx
= −
GMm
γubu
Z ∞
−∞

1
(ξ2 + 1)3/2
+
3u2
c2 − u2
1
(ξ2 + 1)5/2

dξ
= −
2GMm
γubu

1 +
2u2
c2 − u2

= −
2GMm
bu
γu

1 +
u2
c2

M1 Correct expression
The initial momentum is px = γumu, hence the angle
of deflection is given by
ϕ =
py
px
=
2GM
bu2

1 +
u2
c2
 A1 Correct answer
Plugging in the cases as requested,
ϕ =
(
2GM
bu2 , v ≪ c
4GM
bc2 , v = c
As expected, it reduces to the classical case in the limit
v ≪ c, but for a photon, it is twice the classical result.
(This factor of 2 is due to photons travelling through
time and space equally, but we have ignored the ‘time
component’ in the classical limit.)
A0.5 Relevant comments
Total: 4.0
Page 33 of 34Wednesday, 13 March 2024, 1:00pm – 5:00pm
Page 34 of 34
