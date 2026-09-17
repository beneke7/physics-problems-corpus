---
id: solution-document-spot-2023-s
source: spot
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2023_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2023_S.pdf."
---

Wednesday, 15 March 2023, 1:00pm–5:00pm
2023 Selection Test
for the Asian and International Physics Olympiads
a. This is a four-hour test. Attempt all questions. The maximum total score is 75; marks
allocated for each question part are indicated in square brackets.
b. Check that there are a total of 22 printed pages (including this cover page). The last
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
Page 1 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
Declaration
I declare that I will be fully committed to the training for and participation in the Asian
Physics Olympiad and/or the International Physics Olympiad if selected. I will check first with
the MOE coordinator before taking on additional commitments not listed below.
Potential limitations to my commitment in the period from now to end-July 2023 are de-
scribed exhaustively in the box below, such as other academic competitions, CCA commit-
ments (school-related or otherwise), travel plans, etc.
Name and signature:
Question: 1 2 3 4 5 6 7 8 Total
Points: 5 9 10 9 7 6 10 19 75
Score:
Page 2 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
1. We model the collision of a compound object with a rigid vertical wall. The object is made
up of a spherical shell of mass m1 that is joined by a horizontal rod to the centre of an
inner ball of mass m2.
The rod has negligible mass and an effective spring constant k, such that the magnitude of
the restoring force is F = kx when the distance between the centres of the masses is x. The
rod does not twist or flex, but can compress and stretch as the masses are displaced from
their initially concentric positions.
The object moves with constant horizontal velocity vi directly towards the wall, colliding
with it. Suppose that m1 > m2. Ignore any vertical forces, and suppose the object does
not spin or rotate. Assume that all collisions are elastic.
(a) [1] Derive an expression for the coefficient of restitution e ≡ vf/vi, where vi and vf are
the initial and final speeds of the centre of mass of the object.
(b) [2] Show that after the collision, the masses m1 and m2 oscillate about their centre of
mass in simple harmonic motion.
(c) [2] Find the angular frequency ω of oscillation and maximum distance X between the
centres of masses, in terms of vi, m1, m2, and k.
Solution:
(a) Initially, both masses are moving to the right at speed vi. After the (elastic)
collision, the mass m1 is moving at speed vi to the left while the mass m2 continues
moving at speed vi to the right. The velocity of the CM is thus
vCM =
−m1vi + m2vi
m1 + m2
= −
m1 − m2
m1 + m2
vi.
The coefficient of restitution is thus
e =
m1 − m2
m1 + m2
1 - Correct answer
(b) Let the positions of the masses in the CM frame be x1(t) and x2(t). We know that
x1(0) = x2(0). The extension or compression of the rod depends on x2(t)−x1(t),
therefore the force on mass 1 is
F1 = −k(x1 − x2)
while the force on mass 2 is
F2 = −k(x2 − x1) = −F1.
Page 3 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
We note that in this frame, the CM does not move (i.e. stays at zero), therefore
m1x1 + m2x2 = 0.
Substituting x2 = −m1
m2
x1 into the above expressions for the forces, we get
F1 = −k

m1 + m2
m2
x1

,
which shows that the motion of x1 is simple harmonic, and thus the motion of
x2 is simple harmonic as well (since it is scaled in the opposite direction by a
constant factor).
1 - Using CM frame
1 - Argument using forces on masses
(c) Using F1 = m1a1, we get
a1 = −k
m1 + m2
m1m2
x1.
Therefore, the angular frequency of oscillation is
ω =
s
k(m1 + m2)
m1m2
.
Consider relative velocities of m1 and m2. Just after the collision, the relative
velocity is V = 2vi since the outer shell moves to the left and the inner ball is still
moving to the right. This is unchanged in the CM frame (initial velocity of m1 is
2m2
m1+m2
vi to the left, while the initial velocity of m2 is 2m1
m1+m2
vi to the right).
The maximum distance X between x1 and x2 is given by the amplitude of oscil-
lation:
X =
V
ω
= 2vi
r
m1m2
k(m1 + m2)
.
1 - Angular frequency of oscillation
1 - Amplitude of oscillation
Q1 total: 5
2. This question is about thermionic emission. Consider two very large parallel plates, each of
area A, separated by a distance d. Electrons are emitted from rest from the hot cathode at
potential V = 0, and accelerated across a gap to the anode at potential V = V0 as shown
in the figure.
The moving electrons, termed as space charge, build up to the point where the electric field
at the surface of the cathode is zero, with a steady current I flowing between the plates.
Suppose the plates are large compared to the separation between them (i.e. A ≫ d2).
Defining x to be the distance from the cathode, the charge density1 ρ and speed of moving
electrons v are both functions of x. Denote the charge and mass of an electron to be −q
and m respectively.
1
To be clear, we mean the charge density “per unit volume”.
Page 4 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
(a) [1] Find the relationship between the potential V and the speed v at distance x from the
cathode.
(b) [3] At steady state, the current I is independent of x. Show that V obeys the following
differential equation as a function of x:
d2V
dx2
+
I
ε0A
r
m
2q
V −1
2 = 0.
(c) [3] Hence find the potential V as a function of x, in terms of I,m,A,q, and other funda-
mental constants.
(d) [2] Find the relationship between the steady current I and the applied potential difference
V0, in terms of the geometry of the plates and fundamental constants.
Solution: Adapted from Problem 2.48 in [1].
(a) Using the conservation of energy, we have
qV =
1
2
mv2
Therefore,
v =
r
2qV
m
.
1 - Correct answer
(b) The current is
I =
dQ
dt
= Aρ
dx
dt
= Aρv.
Gauss’ law gives
−
d2V
dx2
=
ρ
ε0
=
1
ε0
I
Av
=
I
ε0A
r
m
2qV
.
1 - Expressing I = Aρv
1 - Use of Gauss’ law
1 - Correct answer through proper algebraic manipulation
Page 5 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
(c) Solve the differential equation, noting that V ′′ = V ′ dV ′
dV :
V ′ dV ′
dV
= −
I
ε0A
r
m
2q
V −1
2 .
Integrating both sides,
1
2
V ′2
= −
2I
ε0A
r
m
2q
V
1
2 + const.
Since the cathode is at zero potential and field at cathode is zero due to the space
charge, we have V (0) = V ′(0) = 0, so the constant from integration is zero:
V ′2
= −
4I
ε0A
r
m
2q
V
1
2
Thus,
dV
dx
=
s
−
4I
ε0A
r
m
2q
V
1
4
Integrating once more,
4
3
V
3
4 =
s
−
4I
ε0A
r
m
2q
x + const.
But V (0) = 0, so this constant is also zero. Rearranging, we obtain
V =

81I2m
32ε2
0A2q
1
3
x
4
3 .
1 - Correct solving of ODE
1 - Correct boundary conditions
1 - Correct answer
(d) Setting x = d and V = V0, we get
V0 =

81I2m
32ε2
0A2q
1
3
d
4
3 .
Rearranging, we obtain the Child–Langmuir law
I =
4
√
2
9
ε0A
d2
r
q
m
V
3
2
0 .
1 - Substitution of d and V0
1 - Correct answer
Q2 total: 9
3. A stationary observer, Alice, observes a proton P1 in a magnetic field with flux density
Page 6 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
Bz = 1.0T in the +z-direction. P1 moves in a circle of radius R1 in the xy-plane with
speed v = 3.00 × 105 m/s.
(a) [1] State whether P1 moves clockwise or anticlockwise (when looking down at the proton).
(b) [2] Find the radius R1 of the circle, and find the time the proton takes to complete one
circle.
Relative to Alice, another observer Bob moves with constant velocity vB = 1.00 × 104 m/s
in the +x-direction.
(c) [1] Describe the motion of P1 in Bob’s frame with a sketch. Remember to indicate the
orientation of your axes.
Another proton P2 is at rest in Alice’s frame, at a distance of 1.00cm from the centre of
the circle described above, which we assume is sufficiently far away that the interaction
between the two protons can be neglected.
(d) [1] Describe the motion of P2 in Bob’s frame with a sketch. Remember to indicate the
orientation of your axes.
(e) [2] Bob attributes the motion of P1 and P2 to electromagnetic fields in his frame. What
static electric and magnetic fields could result in the motion of both protons as observed
by him?
Another observer Carol has a stationary position in Alice’s frame and sees P1 as stationary.
How can this be?
(f) [1] Describe the motion of P2 in Carol’s frame with a sketch.
(g) [2] Carol attributes the motion of P2 to electromagnetic fields in her frame. What static
electric and magnetic fields could result in the motion of both protons as observed by
her?
Solution:
(a) The magnetic force F = qv × B, and since the force has to point towards the
centre of the circle, the particle moves in the clockwise direction.
1 - Correct direction
(b) The centripetal force is equal to the magnetic force:
mv2
R1
= qvBz
R1 =
mv
qBz
= 3.13 × 10−3
m
The time taken is
T =
2πR1
v
= 6.55 × 10−8
s.
1 - Correct radius
1 - Correct period
(c) The motion of P1 is described by a circle whose centre is constantly shifting left
at a speed of 1.00 × 104 m/s. In the time that the proton makes one round, the
centre has shifted left by
x = (1.00 × 104
)(6.55 × 10−8
) = 6.55 × 10−4
m
1 - Correct depiction of motion
Page 7 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
(d) P2 moves left with a constant speed of 1.00 × 104 m/s.
1 - Correct depiction of motion
(e) Suppose there is an electric field E and a magnetic field B experienced by both
protons. Then the electromagnetic force acting on proton P2 is equal to
F = q(E + v × B)
which must be zero since it is moving at constant speed. If we assume that B
from earlier is unmodified, then we need E = −v × B = −1.00 × 104 V/mŷ.
It is instructive to think about how this electric field E causes the circular path
for P1 to drift.
1 - Balancing Lorentz force
1 - Correct electric field
(f) Carol is stationary in Alice’s frame and sees P1 as stationary, therefore she must
be at the centre of the circle and rotating (clockwise) at the same angular velocity
as P1. Carol thus sees P2 rotating anticlockwise with a period of 6.56 × 10−8 s.
1 - Correct depiction of motion
(g) There must be no electric field in Carol’s frame, since P1 is at rest. The magnetic
field causes the motion of P2, therefore it must be in the −z-direction with flux
density
B =
mv
qR
=
mω
q
=
2πm
qT
= 1.0T.
1 - Zero electric field and magnetic field in the −z-direction
1 - Correct magnetic field strength
Q3 total: 10
4. The energy transferred by an electromagnetic wave per unit time per unit surface area is
given by the Poynting vector
S =
1
µ0
E × B,
where the direction of the vector S is the direction of energy transfer.
(a) [2] Show the volume density of the linear momentum of an electromagnetic wave is
pV =
1
c2µ0
E × B,
where c is the speed of light.
We now consider a “paradox” regarding the conservation of angular momentum. Two long,
coaxial cylindrical shells, shown in the figure, both have length l. The inner one has radius
a and electric charge +Q uniformly distributed along its surface, while the outer one has
radius b > a and electric charge −Q uniformly distributed over its surface.
The cylinders are made of the same material, having mass per unit area equal to σ. Between
them, there is another long solenoid with radius R (a < R < b) that is also coaxial with the
two cylinders. The solenoid has n turns per unit length and carries an electric current I.
Page 8 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
The solenoid is held fixed in space, but the cylindrical shells can freely and independently
rotate around their common axis. Initially, all parts of the system are at rest. When the
current in the solenoid is gradually reduced to zero, the cylinders begin to rotate.
(b) [4] Find the final angular velocities of each of the cylinders, giving their magnitude and
orientation.
(c) [3] Since no external force acts on the system, the net angular momentum should be
conserved. Where did the extra angular momentum come from? Support your answer
with equations.
Solution: Adapted from Romanian Masters of Physics 2017 T1.
(a) The momentum of the photons in the electromagnetic wave is
δp =
δE
c
=
SδAδt
c
where c is the speed of light. Therefore,
pV =
δp
δV
=
SδAδt
cδAδl
=
S
cδl
δt
=
S
c2
.
In vector form,
pV =
1
c2µ0
E × B = ε0E × B.
1 - Expression for momentum of a photon
1 - Correct interpretation of relationship to Poynting vector
(b) The current through the solenoid produces inside it a magnetic field given by
B = µ0nIẑ, r < R.
Page 9 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
When the current decreases, the magnetic field strength decreases, inducing an
electric field in accordance with Faraday’s law:
E · 2πrϕ̂ = −
d
dt
(B · A).
If r < R, then A = πr2ẑ, and
E = −
1
2
µ0n
dI
dt
rϕ̂
If r > R, then A = πR2ẑ, and
E = −
1
2
µ0n
dI
dt
R2
r
ϕ̂.
The torque on the inner cylinder is
τ = r × QE = −
1
2
µ0nQa2 dI
dt
r̂ × ϕ̂ = −
1
2
µ0nQa2 dI
dt
ẑ.
The final angular momentum of the inner cylinder is
∆La = −
1
2
µ0nQa2
∆Iẑ =
1
2
µ0nQa2
Iẑ
The moment of inertia of the cylinder is equal to
J = maa2
= 2πlσa3
and the final angular velocity is thus
ωa =
µ0nQI
4πlσa
in the counterclockwise direction.
The torque on the outer cylinder is
τ = r × (−Q)E =
1
2
µ0nQR2 dI
dt
.
The increase in angular momentum is
∆L =
1
2
µ0nQR2
∆Iẑ = −
1
2
µ0nQR2
Iẑ.
We know that the moment of inertia of the outer cylinder is
J = mbb2
= 2πlσb3
,
therefore the final angular velocity is
ωb =
µ0nQIR2
4πlσb3
clockwise.
1 - Correct usage of Faraday’s Law
1 - Correct torque on inner and outer cylinder
1 - Correct angular momentum on inner and outer cylinder
1 - Correct angular velocity and direction of inner and outer cylinder
Page 10 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
(c) In the region between the cylinders, there is an electric field, given by Gauss’ law
E =
Q
2πε0lr
r̂.
When there is a current through the solenoid, there is a magnetic field inside it,
so the linear momentum density of the fields is
pV = ε0E × B =
Q
2πlr
r̂ × µ0nIẑ = −
µ0nIQ
2πlr
ϕ̂.
The angular momentum density of the fields is
ℓem = r × pV = −
µ0nIQ
2πl
r̂ × ϕ̂ = −
µ0nIQ
2πl
ẑ.
The total angular momentum of the fields is
Lem = ℓem · π(R2
− a2
)l = −
1
2
µ0nIQ(R2
− a2
)ẑ.
We see that from the previous part,
Lem = La + Lb
which means that the field angular momentum is totally transformed into me-
chanical angular momentum of the cylinders.
1 - Correct application of Gauss’ Law to find linear momentum density
1 - Correct angular momentum density
1 - Correct conclusion that EM field angular momentum is transformed into me-
chanical angular momentum
Q4 total: 9
5. Three circuit elements are connected to a central junction in a “star” shape, as shown in
the figure. One is a resistor, one is an inductor, and one is a capacitor, although it is not
known which is which.
A physicist connects an AC source with fixed voltage Vs across a pair of terminals, at
Page 11 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
the same time connecting an AC voltmeter to one of the terminals (the other end of the
voltmeter is always fixed at the central junction). She obtains the following readings:
AC source terminals AC voltmeter terminal Voltmeter reading
1 & 2 1 20.8 V
1 & 2 2 15.6 V
1 & 3 1 24.0 V
1 & 3 3 10.0 V
2 & 3 2 58.5 V
2 & 3 3 32.5 V
(a) [3] Determine the value of Vs (i.e. the reading on the AC voltmeter when it is hooked up
directly to the AC source).
(b) [1] Determine the possible identities of Z1, Z2, Z3 (i.e. which is the resistor, inductor,
capacitor).
(c) [3] Now, an AC ammeter is also connected in series with the AC source. Find the ratio of
currents I12 : I13 : I23, where Iij denotes the value on the AC ammeter when the AC
source is connected to terminals i and j.
Solution:
(a) The impedances of resistors, inductors and capacitors are positive real, positive
imaginary and negative imaginary numbers respectively. Suppose the resistor
has impedance R, the capacitor has impedance −jXC while the inductor has
impedance +jXL.
Consider the following cases:
• R and L in series. Then the voltages are
|VR| = IR =
R
q
R2 + X2
L
Vs
|VL| = IXL =
XL
q
R2 + X2
L
Vs
The source voltage is thus the root of the sum of squares of the individual
voltages.
• R and C in series. The voltages are
|VR| = IR =
R
q
R2 + X2
C
Vs
|VC| = −IXC =
XC
q
R2 + X2
C
Vs
The source voltage is thus the root of the sum of squares of the individual
voltages.
Page 12 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
• L and C in series. The voltages are
|VL| = IXL =
XL
|XL − XC|
Vs
|VC| = IXC =
XC
|XL − XC|
Vs
The source voltage is thus the difference in voltages.
We see that
p
20.82 + 15.62 =
p
24.02 + 10.02 = 58.5 − 32.5 = 26.0
therefore, the source voltage is 26.0 V.
1 - Writing down the correct impedances
1 - Recognising that source voltage is either square root of sum of squares or
difference of component voltages
1 - Correct final answer
(b) We can conclude that Z1 is a resistor. However, Z2 and Z3 cannot be distinguished,
since we may flip the signs of the imaginary part to get either combination.
1 - Correct analysis
(c) The ratio of impedances is equal to the ratio of voltages. Therefore,
|Z1| : |Z2| = 4 : 3
|Z1| : |Z3| = 12 : 5
|Z2| : |Z3| = 9 : 5
We thus conclude that
|Z1| : |Z2| : |Z3| = 12 : 9 : 5.
The ratio of impedances across terminals is
|Z12| : |Z13| : |Z23| = 15 : 13 : 4.
The ratio of current is thus
I12 : I23 : I13 =
1
15
:
1
13
:
1
4
.
1 - Correct ratio of impedances of elements
1 - Correct ratio of impedances across terminals
1 - Correct ratio of current
Q5 total: 7
6. This question is about deriving thermodynamic identities.
(a) [2] Consider a mole of ideal gas at pressure P, volume V , and temperature T. Denote the
Page 13 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
heat capacity at constant volume as CV . Show that the heat capacity C is given by
C = CV +
R
1 + V
P
dP
dV
.
(b) [4] Consider two ideal gases A and B which are mixed. There are n1 moles of gas A and
n2 moles of gas B, and the molar heat capacities at constant volume of gases A and
B are cv1 and cv2 respectively. Find the adiabatic constant of the mixed gas.
Solution:
(a) Using the 1st Law of Thermodynamics,
C =
dQ
dT
=
dU
dT
+ P
dV
dT
= CV + P
dV
dT
.
The ideal gas law states that PV = RT, which means that
RdT = P dV + V dP.
Therefore,
P
dV
dT
= R
P dV
P dV + V dP
=
R
1 + V
P
dP
dV
.
1 - 1st Law of Thermodynamics
1 - Implicitly differentiating Ideal Gas Equation and obtaining final result
(b) Using the first law of thermodynamics and the ideal gas equation,
dS =
dQ
T
=
dU
T
+ P
dV
T
= ncv
dT
T
+
nR
V
dV
Integrating both sides,
∆S = ncv ln
Tf
Ti
+ nRln
Vf
Vi
.
In an adiabatic process, there is no change in heat, so the change in entropy is
zero. For the mixture of two gases, we thus have
n1cv1 ln
Tf
Ti
+ n1Rln
Vf
Vi
+ n2cv2 ln
Tf
Ti
+ n2Rln
Vf
Vi
= 0.
This can be rewritten as
(n1cv1 + n2cv2)ln
Tf
Ti
= −(n1R + n2R)ln
Vf
Vi
= (n1 + n2)Rln
Vi
Vf
,
which is equivalent to
TiV g
i = TfV g
f , g =
(n1 + n2)R
n1cv1 + n2cv2
.
An adiabatic process is characterised by an adiabatic constant γ such that
PV γ
= const.
Page 14 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
Using P = nRT/V for the mixture, the adiabatic equation can also be written as
TV γ−1
= const.
Therefore,
γ = g + 1 =
(n1 + n2)R
n1cv1 + n2cv2
+ 1.
1 - Writing 1st law of thermodynamics in terms of infinitesimal entropy change
1 - Integrating correctly to obtain total entropy change
1 - Relating to the adiabatic constant
1 - Final expression for adiabatic constant
Q6 total: 6
7. Weather balloons float at high altitudes and need to withstand very low temperatures and
pressures. When inflated, the effective radial tension on the surface of a spherical balloon
of radius r is given by
FT = 16πr0κRT

λ −
1
λ5

,
where r0 is the radius of the balloon when there is no tension, λ ≡ r/r0 is the size inflation
ratio, κ is a constant with dimensions of inverse area, R is the molar gas constant, and T
is the temperature of the air.
(a) [2] Find the pressure difference ∆p between the air inside and outside the balloon, giving
your answer in terms of λ,T,r0 and other constants.
(b) [3] Determine the maximum pressure difference ∆pm as a function of T and the radius rm
in terms of r0 that achieves this value.
The constant κ can be determined from the amount of gas required to inflate a balloon.
Suppose at ground level, the temperature is T0 = 290K and the pressure is p0 = 1.01 ×
105 Pa.
An unstretched balloon of radius r0 contains ni = 10mol of helium. After the balloon is
pumped with helium so that it contains a total of nf = 40mol of helium, the balloon has a
radius r = 1.5r0.
(c) [5] Determine the value of κ for this balloon.
Solution: Adapted from IPhO 2004 T2.
(a) The work needed to increase the radius from r to r+dr when the pressure differ-
ence is ∆p is
dW = ∆p · 4πr2
dr.
The increase in elastic energy for the same change in r is
dU = FT dr = 16πr0κRT

r
r0
−
r5
0
r5

dr.
Page 15 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
Equating the two,
∆p =
16πr0κRT

r
r0
−
r5
0
r5

4πr2
=
4κRT
r0

1
λ
−
1
λ7

.
1 - Increase in elastic energy
1 - Correct ∆p
Alternative approach by using force on an infinitesimal section to get ∆p also
acceptable
(b) The maximum value can be found by differentiating with respect to λ:
d(∆p)
dλ
=
4κRT
r0

−
1
λ2
+
7
λ8

.
Therefore,
λ = 7
1
6
rm = 7
1
6 r0
∆pm =
24κRT
7
1
6 r0
1 - Differentiating to find stationary values
1 - Correct rm
1 - Correct ∆pm
(c) Using the ideal gas equation,
piVi = niRTi
pfVf = nfRTf
We know that Ti = Tf, and since Vf = λ3Vi where λ = 1.5, we get
pf =
nf
niλ3
pi.
But we also know that
pf = pi + ∆p = pi +
4κRT
r0

1
λ
−
1
λ7

Therefore,
4κRT
r0

1
λ
−
1
λ7

=

nf
niλ3
− 1

pi
This means that
κ =
r0
4RT

1
λ
−
1
λ7
−1 
nf
niλ3
− 1

pi
Our last task is to find the value of r0. This can be found using the ideal gas
equation for the non-inflated balloon:
p0 ·
4
3
πr3
0 = n0RT0
r0 = 0.38m.
Page 16 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
Substituting in the numbers,
κ = 1.2m−2
.
1 - Ideal gas equation and realising that volume scales with λ3
1 - Equating expressions for pressure
1 - Expression for κ
1 - Expression for r0 using non-inflated balloon
1 - Value of κ
Q7 total: 10
8. This question is on pulse spreading in fibre optics.
Consider a cylindrical optical fibre in the region 0 ≤ r ≤ a for z > 0, see diagram. There is
a light source at r = z = 0 that emits monochromatic waves. The refractive index n(r) is
a function of the radial distance from the cylindrical axis.
Along the path of a ray, if the refractive index at some point is n and the angle the ray
makes with the horizontal (z-axis) is θ, we may use Snell’s Law to conclude that
ncosθ = β̃
is a constant at all points along the path of the ray.
(a) [2] Show that the path that a ray takes satisfies
d2r
dz2
=
1
2β̃2
d(n(r)2)
dr
.
This is known as the ray equation.
(b) The fibre is characterised by the following refractive index distribution:
n(r)2
= n2
1

1 − 2∆
r
a
2

, 0 ≤ r ≤ a
where ∆ ≪ 1 and n1 are constants.
Page 17 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
The refractive index of the medium outside the optical fibre is uniform, with the value
n2 given by
n(r)2
= n2
2 = n2
1(1 − 2∆), r > a.
The initial angle of projection θ1 has to be small enough for the ray to return to the
z-axis.
i. [4] Assuming this is the case, find the equation of the path r = r(z) taken by the ray
of light, as well as the position z1 of the first instance that the ray returns to the
z-axis. Express your answers in terms of n1,∆,a, and β̃.
ii. [1] If θ1 ≪ 1 such that we make the approximation cosθ1 ≈ 1, state the value of z1.
iii. [1] Find the maximum possible value of θ1, in terms of ∆.
(c) [2] One of the important characteristics of a waveguide is pulse dispersion, the temporal
spreading of a pulse of light launched into the waveguide. This is due to the difference
in time taken by different rays. To calculate this dispersion, we calculate the time
taken by a ray to traverse a given length of the waveguide.
Define the maximum radial distance the ray reaches from the z-axis to be rt. Show
that the time taken for the light ray to first reach a distance rt from the z-axis is given
by
1
c
Z rt
0
n(r)2
q
n(r)2 − β̃2
dr
where c is the speed of light in vacuum.
(d) For the fibre optic medium described in (b):
i. [3] Find the time taken for a light ray to first reach a distance rt from the z-axis,
expressing your answer in terms of a,n1,β̃,∆, and c.
ii. [3] Calculate the difference in the maximum and minimum times for rays to travel a
distance z along the z-axis, in terms of n1,∆, and c. This time difference τ can
be taken to be the pulse dispersion time.
(e) [3] To appreciate the small dispersion given in the previous part, let us consider the pulse
dispersion in a cylindrical fibre optic medium with the same physical dimensions but
with homogeneous refractive index n1, while the outside is still kept at refractive index
n2 satisfying n2
2 = n2
1(1 − 2∆).
Find the pulse dispersion time over a distance z along the z-axis for such a setup, in
terms of n1,∆, and c.
Solution: For a comprehensive discussion on this problem, see Chapter 4 of [2].
(a) Writing ds2 = dr2 + dz2 and using cosθ = dz
ds, we obtain
ds
dz
=
1
cosθ
=
n
β̃
.
Therefore,

dr
dz
2
=
n(r)2
β̃2
− 1.
Differentiating both sides with respect to z,
2
dr
dz
d2r
dz2
=
1
β̃2
d(n2)
dr
dr
dz
.
Page 18 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
Rearranging,
d2r
dz2
=
1
2β̃2
d(n2)
dr
.
1 - Writing down ds/dz in terms of n and β̃
1 - Obtaining the final expression
(b) (i) Substituting into the ray equation,
d2r
dz2
=
1
2β̃2
d
dr
n2
1

1 − 2∆
r
a
2

= −
2∆n2
1
a2β̃2
r.
The general solution is given by
r(z) = AsinΓz + B cosΓz
where Γ = n1
√
2∆
β̃a
.
Since r(0) = 0, therefore B = 0, and
r(z) = AsinΓz.
If the ray makes an angle θ1 with the z-axis at z = 0, then
tanθ1 = AΓ
A =
β̃atanθ1
n1
√
2∆
=
asinθ1
√
2∆
=
a
√
2∆

1 −
β̃
n1
!2


1
2
where we have used the fact that
β̃ = n1 cosθ1.
Therefore,
r(z) =
a
√
2∆

1 −
β̃
n1
!2


1
2
sin
n1
√
2∆
aβ̃
z
!
.
The first time the ray returns to the z-axis, we have
n1
√
2∆
aβ̃
z1 = π
Therefore,
z1 =
πaβ̃
n1
√
2∆
1 - Correctly simplifying the ray equation
1 - Recognising that the path is is sinusoidal
1 - Correct boundary condition
1 - Correct position along z-axis
Page 19 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
(ii) Since β̃ ≈ n1,
z1 =
πa
√
2∆
.
This is independent of the launch angle (correspondingly β̃)!
1 - Correct answer
(iii) The maximum angle can be found as follows: Suppose at initial angle θ1 the
wave reaches distance a from the z-axis. Then
n1 cosθ1 = β̃ = n2
cosθ1 =
√
1 − 2∆ ≈ 1 − ∆
Since cosθ ≈ 1 − 1
2θ2, we get
θ1 ≈
√
2∆.
1 - Correct critical angle
(c) The time taken to travel along an arc length ds is given by
dt =
ds
v
=
n(r)
c
ds.
We know that
ds =
s
1 +

dz
dr
2
dr =
n(r)
q
n(r)2 − β̃2
dr.
We thus obtain the required integral.
1 - Correct expression for dt
1 - Correct usage of ray equation
(d) (i) We know that n(rt) = β̃, therefore
n2
1

1 − 2∆
rt
a
2

= β̃2
.
rt =
a
n1
√
2∆
q
n2
1 − β̃2
Therefore,
t =
1
c
Z rt
0
n2
1[1 − 2∆(r/a)2]
q
n2
1[1 − 2∆(r/a)2] − β̃2
dr
=
1
c
"
n1
√
2∆
a
Z rt
0
q
r2
t − r2dr +
β̃2a
n1
√
2∆
Z rt
0
dr
p
r2
t − r2
#
=
πa
4cn1
√
2∆
(n2
1 + β̃2
).
1 - Expressing rt in terms of known constants
1 - Performing integration correctly
1 - Correct final answer
Page 20 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
(ii) Since the path is sinusoidal, we might as well talk in terms of periods. Letting
zp and τp be the distance travelled and time taken over one period of the
sinusoidal path,
zp =
2π
Γ
=
2πaβ̃
n1
√
2∆
.
τp =
πa
cn1
√
2∆
(n2
1 + β̃2
)
Thus, if τ(z) represents the time taken by the ray to traverse the distance z,
then
τ(z)
z
=
τp
zp
=
1
2c

β̃ +
n2
1
β̃

.
Since n2 < β̃ < n1 for guided rays, a ray with β̃ = n1 (i.e. axial) will take
minimum time
τmin(z) =
n1z
c
while a ray with β̃ = n2 takes maximum time
τmax(z) =
1
2c

n2 +
n2
1
n2

z.
The difference is thus
τ = τmax − τmin =
1
2cn2
(n1 − n2)2
z ≈
n1
2c
∆2
z.
1 - Correct τmin
1 - Correct τmax
1 - Correct τ
(e) The maximum angle above the horizontal is cos−1 n2
n1
. The shortest path taken has
length z and the light ray travels at speed c/n1, therefore it takes time t = n1z/c
to reach.
The horizontal distance covered by the light ray in the longest path is still z, but
the horizontal velocity is now c
n1
cosθ = cn2
n2
1
. Therefore,
t =
n2
1z
cn2
.
The pulse dispersion is equal to
∆t =
n2
1z
cn2
−
n1z
c
=
n1
cn2
(n1 − n2)z ≈
n1∆
c
z.
1 - Correct minimum time
1 - Correct maximum time
1 - Correct pulse dispersion
Q8 total: 19
Page 21 of 22Wednesday, 15 March 2023, 1:00pm–5:00pm
Page 22 of 22
