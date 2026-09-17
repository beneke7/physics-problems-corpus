---
id: solution-document-usapho-2015-s
source: usapho
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2015_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2015_S.pdf."
---

2015 USA Physics Olympiad Exam 1
AAPT
AIP 2015
UNITED STATES PHYSICS TEAM
USA Physics Olympiad Exam
DO NOT DISTRIBUTE THIS PAGE
Important Instructions for the Exam Supervisor
• This examination consists of two parts.
• Part A has four questions and is allowed 90 minutes.
• Part B has two questions and is allowed 90 minutes.
• The first page that follows is a cover sheet. Examinees may keep the cover sheet for both
parts of the exam.
• The parts are then identified by the center header on each page. Examinees are only allowed
to do one part at a time, and may not work on other parts, even if they have time remaining.
• Allow 90 minutes to complete Part A. Do not let students look at Part B. Collect the answers
to Part A before allowing the examinee to begin Part B. Examinees are allowed a 10 to 15
minutes break between parts A and B.
• Allow 90 minutes to complete Part B. Do not let students go back to Part A.
• Ideally the test supervisor will divide the question paper into 4 parts: the cover sheet (page 2),
Part A (pages 3-13), Part B (pages 15-21), and several answer sheets for one of the questions
in Part A (pages 14-14). Examinees should be provided parts A and B individually, although
they may keep the cover sheet. The answer sheets should be printed single sided!
• The supervisor must collect all examination questions, including the cover sheet, at the end
of the exam, as well as any scratch paper used by the examinees. Examinees may not take
the exam questions. The examination questions may be returned to the students after April
15, 2015.
• Examinees are allowed calculators, but they may not use symbolic math, programming, or
graphic features of these calculators. Calculators may not be shared and their memory must
be cleared of data and programs. Cell phones, PDA’s or cameras may not be used during
the exam or while the exam papers are present. Examinees may not use any tables, books,
or collections of formulas.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Cover Sheet 2
AAPT
AIP 2015
UNITED STATES PHYSICS TEAM
USA Physics Olympiad Exam
INSTRUCTIONS
DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN
• Work Part A first. You have 90 minutes to complete all four problems. Each question is
worth 25 points. Do not look at Part B during this time.
• After you have completed Part A you may take a break.
• Then work Part B. You have 90 minutes to complete both problems. Each question is worth
50 points. Do not look at Part A during this time.
• Show all your work. Partial credit will be given. Do not write on the back of any page. Do
not write anything that you wish graded on the question sheets.
• Start each question on a new sheet of paper. Put your AAPT ID number, your name, the
question number and the page number/total pages for this problem, in the upper right hand
corner of each page. For example,
AAPT ID #
Doe, Jamie
A1 - 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You
may use only the basic functions found on a simple scientific calculator. Calculators may not
be shared. Cell phones, PDA’s or cameras may not be used during the exam or while the
exam papers are present. You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• In order to maintain exam security, do not communicate any information about
the questions (or their answers/solutions) on this contest until after April 15,
2015.
Possibly Useful Information. You may use this sheet for both parts of the exam.
g = 9.8 N/kg G = 6.67 × 10−11 N · m2/kg2
k = 1/4π0 = 8.99 × 109 N · m2/C2 km = µ0/4π = 10−7 T · m/A
c = 3.00 × 108 m/s kB = 1.38 × 10−23 J/K
NA = 6.02 × 1023 (mol)−1 R = NAkB = 8.31 J/(mol · K)
σ = 5.67 × 10−8 J/(s · m2 · K4) e = 1.602 × 10−19 C
1eV = 1.602 × 10−19 J h = 6.63 × 10−34 J · s = 4.14 × 10−15 eV · s
me = 9.109 × 10−31 kg = 0.511 MeV/c2 (1 + x)n ≈ 1 + nx for |x|  1
sinθ ≈ θ − 1
6θ3 for |θ|  1 cosθ ≈ 1 − 1
2θ2 for |θ|  1
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 3
Part A
Question A1
Consider a particle of mass m that elastically bounces off of an infinitely hard horizontal surface
under the influence of gravity. The total mechanical energy of the particle is E and the acceleration
of free fall is g. Treat the particle as a point mass and assume the motion is non-relativistic.
a. An estimate for the regime where quantum effects become important can be found by simply
considering when the deBroglie wavelength of the particle is on the same order as the height
of a bounce. Assuming that the deBroglie wavelength is defined by the maximum momentum
of the bouncing particle, determine the value of the energy Eq where quantum effects become
important. Write your answer in terms of some or all of g, m, and Planck’s constant h.
Solution
The de Broglie wavelength is p = h/λ, so if the height H of the bounce is given by
E = mgH =
p2
2m
and λ = H, then
mgH =
h2
2mH2
⇒ H3
=
h2
2m2g
or
Eq =
3
r
1
2
mg2h2.
One can also use dimensional analysis to find Eq ∝ 3
p
mg2h2, though this will receive only
partial credit.
b. A second approach allows us to develop an estimate for the actual allowed energy levels of a
bouncing particle. Assuming that the particle rises to a height H, we can write
2
Z H
0
p dx =

n +
1
2

h
where p is the momentum as a function of height x above the ground, n is a non-negative
integer, and h is Planck’s constant.
i. Determine the allowed energies En as a function of the integer n, and some or all of g,
m, and Planck’s constant h.
ii. Numerically determine the minimum energy of a bouncing neutron. The mass of a
neutron is mn = 1.675×10−27 kg = 940 MeV/c2; you may express your answer in either
Joules or eV.
iii. Determine the bounce height of one of these minimum energy neutrons.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 4
Solution
We simply evaluate the given integral,

n +
1
2

h = 2
Z H
0
p dx
= 2
√
2m
Z H
0
p
E − mgx dx,
= 2
√
2mE
Z H
0
p
1 − mgx/E dx,
= 2
√
2mE
E
mg
Z 1
0
√
1 − u du,
= 2
√
2mE
E
mg
Z 1
0
√
v dv,
= 2
√
2
E3/2
√
mg
2
3
so
En =
3
r
9mg2h2
32

n +
1
2
2/3
.
Solving for the minimum energy we get
E0 =
3
r
9mg2h2
128
=
3
r
9(mc2)g2h2
128c2
= 1.1 × 10−12
eV.
The bounce height is given by
H =
E0
mg
= 10 µm.
This is a very measurable distance!
c. Let E0 be the minimum energy of the bouncing neutron and f be the frequency of the bounce.
Determine an order of magnitude estimate for the ratio E/f. It only needs to be accurate to
within an order of magnitude or so, but you do need to show work!
Solution
One can simply use the results found above. A quicker method is dimensional analysis: the
only quantity with units of energy times time is h itself, so we must have
E/f ∼ h.
A mnemonic to remember the units is the energy-time uncertainty principle ∆E∆t ∼ h.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 5
Question A2
Consider the circuit shown below. Is is a constant current source, meaning that no matter what
device is connected between points A and B, the current provided by the constant current source
is the same.
2R
4R
4R
2R
Is
4R 2R
A B
a. Connect an ideal voltmeter between A and B. Determine the voltage reading in terms of any
or all of R and Is.
Solution
An ideal voltmeter has infinite resistance, so no current flows between A and B. By symmetry,
the same current must flow down each leg, so the current in each leg is Is/2.
Assume the potential at the bottom is zero. The potential at A is the same as the junction
to the left of A, so
VA =
Is
2
2R = IsR.
The potential at B is found the same way,
VB =
Is
2
4R = 2IsR.
The difference is
VA − VB = −IsR.
The sign is not important for scoring purposes.
b. Connect instead an ideal ammeter between A and B. Determine the current in terms of any
or all of R and Is.
Solution
An ideal ammeter has zero resistance, so we just need to find the current through the effective
6R resistor that connects the two vertical branches. This current will flow to the left.
By symmetry, the current through each vertical resistance of 2R must be the same, as well
as the currents through each vertical resistance of 4R. This gives the system of equations
Is = I2 + I4,
I2 = I6 + I4,
I4(4R) = I2(2R) + I6(6R).
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 6
Eliminating I2 gives
Is = I6 + 2I4,
4I4 = 2(I6 + I4) + 6I6.
Finally, eliminating I4 gives I4 = 4I6 and
I6 =
1
9
Is.
c. It turns out that it is possible to replace the above circuit with a new circuit as follows:
Rt It
A B
From the point of view of any passive resistance that is connected between A and B the
circuits are identical. You don’t need to prove this statement, but you do need to find It and
Rt in terms of any or all of R and Is.
Solution
We can simply use the previous results. If A and B are shorted, all of the current will flow
through AB, so It = I6 = Is/9. If the resistance between A and B is infinite, the potential
across AB will be IsR, so Rt = 9R. The statement we made above is called Norton’s theorem.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 7
Question A3
A large block of mass mb is located on a horizontal frictionless surface. A second block of mass
mt is located on top of the first block; the coefficient of friction (both static and kinetic) between
the two blocks is given by µ. All surfaces are horizontal; all motion is effectively one dimensional.
A spring with spring constant k is connected to the top block only; the spring obeys Hooke’s Law
equally in both extension and compression. Assume that the top block never falls off of the bottom
block; you may assume that the bottom block is very, very long. The top block is moved a distance
A away from the equilibrium position and then released from rest.
mb
mt
a. Depending on the value of A, the motion can be divided into two types: motion that expe-
riences no frictional energy losses and motion that does. Find the value Ac that divides the
two motion types. Write your answer in terms of any or all of µ, the acceleration of gravity
g, the masses mt and mb, and the spring constant k.
Solution
The maximum possible acceleration of the top block without slipping is mbamax = µmtg. If
the top block is not slipping then the angular frequency is given by
ω2 =
s
k
mt + mb
,
so
amax ≥ Aω2
2
or
Ac = µg
mt
k

1 +
mt
mb

.
b. Consider now the scenario A  Ac. In this scenario the amplitude of the oscillation of the top
block as measured against the original equilibrium position will change with time. Determine
the magnitude of the change in amplitude, ∆A, after one complete oscillation, as a function
of any or all of A, µ, g, and the angular frequency of oscillation of the top block ωt.
Solution
The energy of an oscillation is approximately equal to
E =
1
2
kA2
.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 8
Taking the differential gives the energy loss due to friction,
∆E = kA∆A.
If A  Ac, then the top block has almost completed a complete half cycle before the bottom
block catches up with it, so the energy lost in half a cycle is approximately
1
2
∆E = 2Af = 2Aµmtg
where f is the friction force. Combining,
4µmtg = k∆A ⇒ ∆A = 4
µmtg
k
= 4
µg
ωt
2
.
c. Assume still that A  Ac. What is the maximum speed of the bottom block during the first
complete oscillation cycle of the upper block?
Solution
The bottom block accelerates according to
a = µg
mt
mb
.
Since the bottom block exerts a constant force on the top block, the top block oscillates just
as if it were free, but with a shifted equilibrium position for the spring. Hence
ωt =
p
k/mt
which gives a half period of
t = π
p
mt/k.
The maximum speed is then
vb = πµg
mt
mb
p
mt/k.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 9
Question A4
A heat engine consists of a moveable piston in a vertical cylinder. The piston is held in place by
a removable weight placed on top of the piston, but piston stops prevent the piston from sinking
below a certain point. The mass of the piston is m = 40.0 kg, the cross sectional area of the piston
is A = 100 cm2, and the weight placed on the piston has a mass of m = 120.0 kg.
Assume that the region around the cylinder and piston is a vacuum, so you don’t need to worry
about external atmospheric pressure.
• At point A the cylinder volume V0 is completely filled with liquid water at a temperature
T0 = 320 K and a pressure Pmin that would be just sufficient to lift the piston alone, except
the piston has the additional weight placed on top.
• Heat energy is added to the water by placing the entire cylinder in a hot bath.
• At point B the piston and weight begins to rise.
• At point C the volume of the cylinder reaches Vmax and the temperature reaches 400 K. The
heat source is removed; the piston stops rising and is locked in place.
• Heat energy is now removed from the water by placing the entire cylinder in a cold bath.
• At point D the pressure in the cylinder returns to Pmin. The added weight is removed; the
piston is unlocked and begins to move down.
• The cylinder volume returns to V0. The cylinder is removed from the cold bath, the weight
is placed back on top of the piston, and the cycle repeats.
Because the liquid water can change to gas, there are several important events that take place
• At point W the liquid begins changing to gas.
• At point X all of the liquid has changed to gas. This may not occur the same as point C
described above.
• At point Y the gas begins to change back into liquid.
• At point Z all of the gas has changed back into liquid.
When in the liquid state you need to know that for water kept at constant volume, a change in
temperature ∆T is related to a change in pressure ∆P according to
∆P ≈ (106
Pa/K)∆T
When in the gas state you should assume that water behaves like an ideal gas.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 10
Of relevance to this question is the pressure/temperature phase plot for water, showing the re-
gions where water exists in liquid form or gaseous form. The curve shows the coexistence condition,
where water can exist simultaneously as gas or liquid.
280 300 320 340 360 380 400
0
40
80
120
160
200
240
Temperature (K)
Pressure (kPa)
Liquid Region
Gas Region
The following graphs should be drawn on the answer sheet provided.
Solution
Before we get started solving the problem, let’s say a bit about where the data in the problem
comes from. We are using the Magnus form to approximate the coexistence curve,
P = (610.94 Pa)e17.625/(1+243.04/T)
where T is measured in centigrade. This is closely related to the result that can be derived from
the Clausius-Clapeyron equation for ideal gases,
P = P0e
L
R

T−T0
TT0

where we assume the temperature is low compared to the critical temperature and the latent heat
L is a constant.
To get ∆P/∆T, we used the cyclic chain rule

∂P
∂T

V

∂V
∂P

T

∂T
∂V

P
= −1
where subscripts indicate what is being held constant. Dropping those for convenience,
∂P
∂T
=

−V
∂P
∂V

1
V
∂V
∂T

=
βV T
βPV
≈
(6 × 10−4 K−1)
(5 × 10−10 Pa−1)
≈ 106
Pa/K.
The specific value is not important; the point is that a very small change in the temperature of the
liquid in a fixed volume will result in a very large change in the pressure.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 11
a. Sketch a PT diagram for this cycle on the answer sheet. The coexistence curve for the
liquid/gas state is shown. Clearly and accurately label the locations of points B through D
and W through Z on this cycle.
b. Sketch a PV diagram for this cycle on the answer sheet. You should estimate a reasonable
value for Vmax, note the scale is logarithmic. Clearly and accurately label the locations of
points B through D on this cycle. Provide reasonable approximate locations for points W
through Z on this cycle.
Solution
The correct graphs are shown below.
280 300 320 340 360 380 400
0
40
80
120
160
200
240
Temperature (K)
Pressure (kPa)
A
B C, W, X, Y
D, Z
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 12
0 1 10 102 103 104 105
0
40
80
120
160
200
240
Volume (in terms of V0)
Pressure (kPa)
A
B C, X, Y
D
W
Z
We start by computing pressures. The minimum pressure is attained when only the piston is
to be lifted, so
Pmin =
F
A
=
mg
A
=
(40 kg)(10 m/s2)
(0.01 m2)
= 40 kPa.
The maximum pressure is attained when lifting the piston with extra weight,
Pmax =
F
A
=
mg
A
=
(160 kg)(10 m/s2)
(0.01 m2)
= 160 kPa.
Point A is clearly at (Pmin,T0) on the PT graph.
For liquid water a small temperature increase results in a large pressure increase, so point B is
effectively at the same temperature as point A. Process A → B is therefore essentially isothermal,
and it is also a constant volume process.
Afterwards, the pressure is sufficient to lift the piston and weight, so the volume expands at
constant pressure for the process B → C. However, liquid cannot change to gas until we reach the
coexistence curve. This defines the location of point W. On the PT graph we are “stuck” on the
coexistence curve until all the liquid has changed into gas, so X and C are also at the same point.
Upon reaching C the piston is locked in place, fixing the volume, and the cylinder is allowed
to cool. To figure out what happens, suppose water vapor obeyed the ideal gas law PV = nRT.
For a constant volume process, T ∝ P, so the path would be a straight line towards the origin of
the PT diagram. This isn’t what happens here, because we run into the coexistence curve, and
the pressure is decreased by some of the gas condensing to liquid. Thus during the entire C → D
process, we follow the coexistence curve downward; it is impossible to cross it until all of the vapor
condenses.
The next process C → D is constant volume, but not isothermal. On the PT graph we follow
the coexistence curve to the minimum pressure, at which time the piston is freed and allowed to
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 13
lower at constant pressure. Since Z is the point where all of the gas has changed to liquid, it must
be on the coexistence curve. On the PV diagram it is just to the right of point A.
There are a few numbers needed on the PV diagram that are not given in the problem. You
should know from everyday experience that liquid water will only expand slightly when heated
over this temperature range, so point W must be very close to B on the PV diagram. You might
also know that the density of liquid water is about 2,000 times the density of water vapor in these
conditions. In terms of grading policy, the points C, X, Y, and D may have volumes in the range
[1000V0,5000V0] on the PV diagram for full credit, while points W and Z may have volumes in the
range [V0,2V0] for full credit and [2V0,5V0] for partial credit.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part A 14
STOP: Do Not Continue to Part B
If there is still time remaining for Part A, you should review your work for
Part A, but do not continue to Part B until instructed by your exam
supervisor.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part B 15
Part B
Question B1
This problem is divided into two parts. It is possible to solve these two parts independently, but
they are not equally weighted.
a. An ideal rocket when empty of fuel has a mass mr and will carry a mass of fuel mf. The
fuel burns and is ejected with an exhaust speed of ve relative to the rocket. The fuel burns
at a constant mass rate for a total time Tb. Ignore gravity; assume the rocket is far from any
other body.
i. Determine an equation for the acceleration of the rocket as a function of time t in terms
of any or all of t, mf, mr, ve, Tb, and any relevant fundamental constants.
Solution
Since there are no external forces on the system,
0 =
dp
dt
=
dm
dt
v + m
dv
dt
which means
a = −
1
m(t)
ve
dm
dt
=
ve
mr + mf(1 − t/T)
mf
T
.
ii. Assuming that the rocket starts from rest, determine the final speed of the rocket in
terms of any or all of mr, mf, ve, Tb, and any relevant fundamental constants.
Solution
Rearrange the previous result for
1
ve
dv = −
1
m
dm.
Integrating both sides gives
1
ve
v = ln

mr + mf
mr

⇒ v = ve ln

mr + mf
mr

.
This result is called the ideal rocket equation.
b. The ship starts out in a circular orbit around the sun very near the Earth and has a goal of
moving to a circular orbit around the Sun that is very close to Mars. It will make this transfer
in an elliptical orbit as shown in bold in the diagram below. This is accomplished with an
initial velocity boost near the Earth ∆v1 and then a second velocity boost near Mars ∆v2.
Assume that both of these boosts are from instantaneous impulses, and ignore mass changes
in the rocket as well as gravitational attraction to either Earth or Mars. Don’t ignore the
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part B 16
Sun! Assume that the Earth and Mars are both in circular orbits around the Sun of radii RE
and RM = RE/α respectively. The orbital speeds are vE and vM respectively.
RE
RM
i. Derive an expression for the velocity boost ∆v1 to change the orbit from circular to
elliptical. Express your answer in terms of vE and α.
Solution
First off, for a circular orbit of radius Rc, we have
GMS
Rc
2
=
vc
2
Rc
where MS is the mass of the sun, so
vE =
r
GMS
RE
, vM =
r
GMS
RM
.
Now consider an elliptical orbit with minimum radius R1 and maximum radius R2.
Energy and angular momentum give
1
2
v2
−
GMS
r
= E, v1R1 = v2R2.
Combining and eliminating v2,
1
2
v1
2
−
GMS
R1
=
1
2
v1
2

R1
R2
2
−
GMS
R2
which can be solved for v1,
1
2
v1
2
1 −

R1
R2
2
!
= GMS
R2 − R1
R1R2
.
Setting R1 = RE and R2 = RM, we have α = R1/R2, so
1
2
v1
2
1 − α2

=
GMS
R1
(1 − α) ⇒ v1 = vE
r
2
1 + α
.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part B 17
As expected, this is greater than vE, and the boost is
∆v1 = vE
r
2
1 + α
− 1
!
ii. Derive an expression for the velocity boost ∆v2 to change the orbit from elliptical to
circular. Express your answer in terms of vE and α.
Solution
This is similar to the previous part, except we now eliminate v1,
1
2
v2
2
1 − (1/α)2

=
GMS
R2
(1 − (1/α)) ⇒ v2 = vM
s
2
1 + 1/α
.
This is less than vM, so the rocket must receive a second positive boost,
∆v2 = vM 1 −
s
2
1 + 1/α
!
= vE
√
α 1 −
s
2
1 + 1/α
!
.
where we used vM = vE
√
α.
iii. What is the angular separation between Earth and Mars, as measured from the Sun, at
the time of launch so that the rocket will start from Earth and arrive at Mars when it
reaches the orbit of Mars? Express your answer in terms of α.
Solution
Kepler’s third law gives the time for the orbital transfer,
T
TM
=
1
2

(RE + RM)/2
RM
3/2
=
1
2

α + 1
2
3/2
.
During this time Mars moves through an angle of
2π
T
TM
= π

α + 1
2
3/2
while the rocket moves through an angle of π, so the angular separation from Earth will
be
θ = π 1 −

α + 1
2
3/2
!
.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part B 18
Question B2
The nature of magnetic dipoles.
a. A “Gilbert” dipole consists of a pair of magnetic monopoles each with a magnitude qm but
opposite magnetic charges separated by a distance d, where d is small. In this case, assume
that −qm is located at z = 0 and +qm is located at z = d.
z
−qm qm
z = 0 z = d
Assume that magnetic monopoles behave like electric monopoles according to a coulomb-like
force
F =
µ0
4π
qm1qm2
r2
and the magnetic field obeys
B = F/qm.
i. What are the dimensions of the quantity qm?
Solution
By the second expression, qm must be measured in Newtons per Tesla. But since Tesla
are also Newtons per Ampere per meter, then qm is also measured in Ampere meters.
ii. Write an exact expression for the magnetic field strength B(z) along the z axis as a
function of z for z > d. Write your answer in terms of qm, d, z, and any necessary
fundamental constants.
Solution
Adding the two terms,
B(z) = −
µ0
4π
qm
z2
+
µ0
4π
qm
(z + d)2
.
iii. Evaluate this expression in the limit as d → 0, assuming that the product qmd = pm
is kept constant, keeping only the lowest non-zero term. Write your answer in terms of
pm, z, and any necessary fundamental constants.
Solution
Simplifying our previous expression,
B(z) =
µ0
4π
qmd

2 + d/z
z(z + d)2

.
Thus in the limit d → 0 we have
B(z) =
µ0
2π
qmd
z3
=
µ0
2π
pm
z3
.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part B 19
b. An “Ampère” dipole is a magnetic dipole produced by a current loop I around a circle of
radius r, where r is small. Assume the that the z axis is the axis of rotational symmetry for
the circular loop, and the loop lies in the xy plane at z = 0.
z
I
i. Write an exact expression for the magnetic field strength B(z) along the z axis as a
function of z for z > 0. Write your answer in terms of I, r, z, and any necessary
fundamental constants.
Solution
Applying the Biot-Savart law, with s the vector from the point on the loop to the point
on the z axis,
B(z) =
µ0I
4π
I
dl × s
s3
=
µ0I
4π
2πr
r2 + z2
sinθ
where θ is the angle between the point on the loop and the center of the loop as measured
by the point on the z axis, so
sinθ =
r
√
r2 + z2
.
Then we have
B(z) =
µ0I
4π
2πr2
(r2 + z2)3/2
.
ii. Let kIrγ have dimensions equal to that of the quantity pm defined above in Part aiii,
where k and γ are dimensionless constants. Determine the value of γ.
Solution
We know pm must have dimensions of Amperes times meters squared, so γ = 2.
iii. Evaluate the expression in Part bi in the limit as r → 0, assuming that the product
kIrγ = p0
m is kept constant, keeping only the lowest non-zero term. Write your answer
in terms of k, p0
m, z, and any necessary fundamental constants.
Solution
Using our previous result,
B(z) =
µ0I
4π
2πr2
(r2 + z2)3/2
≈
µ0I
2π
πr2
z3
=
µ0
2π
π
k
p0
m
z3
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part B 20
iv. Assuming that the two approaches are equivalent, pm = p0
m. Determine the constant k
in Part bii.
Solution
By inspection, k = π.
c. Now we try to compare the two approaches if we model a physical magnet as being composed
of densely packed microscopic dipoles.
z R
L
A cylinder of this uniform magnetic material has a radius R and a length L. It is composed
of N magnetic dipoles that could be either all Ampère type or all Gilbert type. N is a very
large number. The axis of rotation of the cylinder and all of the dipoles are all aligned with
the z axis and all point in the same direction as defined above so that the magnetic field
outside the cylinder is the same in either dipole case as you previously determined. Below is
a picture of the two dipole models; they are cubes of side d << R and d << L with volume
vm = d3.
Gilbert Dipole Ampère Dipole
z
current sheet I
−qm
+qm
d
d
d
i. Assume that R  L and only Gilbert type dipoles, determine the magnitude and direc-
tion of B at the center of the cylinder in terms of any or all of pm, R, L, vm, and any
necessary fundamental constants.
Solution
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Part B 21
The monopoles that make up the dipoles cancel out except on the flat surfaces. Then
the cylinder acts like a parallel plate capacitor.
If the size of a dipole is d, then the surface density of monopole charge is
σm = qm/d2
.
Using the analogy with a parallel place capacitor, the magnitude of B is
B = µ0σm = µ0
pm
d3
and the direction is to the left.
ii. Assume that R  L and only Ampère type dipoles, determine the magnitude and
direction of B at the center of the cylinder in terms of any or all of pm, R, L, vm, and
any necessary fundamental constants.
Solution
The currents that make up the dipoles all cancel out except on the cylindrical surfaces.
Then the cylinder acts like a solenoid, with
B =
µ0I
d
where I/d is the surface current density. The magnitude of B is
B =
µ0I
d
= µ0
pm
d3
and the direction is to the right.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Answer Sheets 22
Answer Sheets
Following are answer sheets for some of the graphical portions of the test.
Copyright c 2015 American Association of Physics Teachers2015 USA Physics Olympiad Exam Answer Sheets 14
280 300 320 340 360 380 400
0
40
80
120
160
200
240
Temperature (K)
Pressure (kPa)
0 1 10 102 103 104 105
0
40
80
120
160
200
240
Volume (in terms of V0)
Pressure (kPa)
Copyright c 2015 American Association of Physics Teachers
