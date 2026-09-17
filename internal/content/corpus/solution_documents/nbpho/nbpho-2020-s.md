---
id: solution-document-nbpho-2020-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2020_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2020-bottles-sound, nbpho-2020-conical-room, nbpho-2020-drone, nbpho-2020-phases-of-water, nbpho-2020-tunnel-diode]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2020_S.pdf."
---

1. PHASES OF WATER (6 points) — Solution
by Johan Runeson, grading schemes by Johan
Runeson and Adam Warnerbring.
i) (1.5 points) We approximate the volume
difference by the volume of the gas and use
the ideal gas law: Vg −Vl ≈ Vg = nRT
mp = RT
µp .
Then it follows from the law of Clausius–
Clapeyron that
dp
p
=
µ|∆Hlg|
RT2
dT
which after integration gives
p = p0 exp
µ
−
µ|∆Hlg|
RT
¶
,
where p0 is a reference pressure. We also ac-
cept introducing a reference temperature T0
so that
p = p0
0 exp
·
−
µ|∆Hlg|
R
µ
1
T
−
1
T0
¶¸
, (1)
where p0
0 is another reference pressure.
Grading: Using ideal gas law — 0.5 pts;
Writing correct differential equation — 0.2
pts;
Solution has exponential dependence of 1/T
— 0.6 pts;
Correct solution overall — 0.2 pts;
ii) (1.5 points) For any two points on the
liquid–gas transision curve it holds that
p2
p1
=exp
µ
−
µ|∆Hlg|
R
·
1
T2
−
1
T1
¸¶
,
assumingthat∆Hlg isconstant. Usingforex-
ample T1 = 0◦
C, p1 = 610Pa, T2 = 10◦
C and
p2 = 1230Pa (with temperatures converted
to kelvin), we get |∆Hlg| = 2503kJ/kg. Using
this together with T3 = 15◦
C = 283.15K and
T4 = T3 +3K gives
p4 − p3
p3
=exp
µ
−
µ|∆Hlg|
R
·
1
T4
−
1
T3
¸¶
−1=0.21.
That is, the vapor pressure rises by 21%.
(This means that the water cycle will be en-
hanced, so that we can on average expect
more humid weather after global warming.
Ontheotherhand,theEarthisnothomogen-
eous, andinrealityitisexpectedthatwetloc-
ations become more wet while dry locations
become more dry.)
Grading: Found ∆Hlg by measuring in
graph — 0.4 pts;
Numerical value for |∆Hlg| correct within
10% — 0.3 pts;
Correct formula for p2/p1 — 0.3 pts;
Correct percentage ±2% — 0.5 pts;
Grading for alternative solution: Extrapola-
tion via derivative — 0.5 pts;
Correct expression for final result — 0.5 pts;
Correct percentage ±2% — 0.5 pts;
iii) (3 points) First, look at the solid–gas
transition line and assume also here that
Vg −Vs ≈ Vg. This gives a similar curve as
for the liquid-gas transition but with a dif-
ferent transition enthalpy. From T5 = 0◦
C,
p5 = 610Pa, T6 = −10◦
C and p6 = 260Pa,
we get the sublimation enthalpy |∆Hsg| =
2828kJ/kg. This allows us to compute the
melting enthalpy as
|∆Hsl|=|∆Hsg|−|∆Hlg|=325kJ/kg.
Tomeasuretheslopeofthemeltingcurvewe
drawatangentintheoriginandmeasure(for
example) ∆T = 5K and ∆p = −0.65×108
Pa.
With T = 273.15K, the law of Clausius–
Claperyron finally gives
Vl −Vs =
∆T
∆p
|∆Hsl|
T
=−9.2×10−5
m3
/kg.
(The experimental value is −9.1×10−5
m3
/kg.)
Note that ice has a larger volume than liquid
water, whichisanexceptionfrommostother
substances.
Grading: Found ∆Hsg — 0.5 pts;
Found ∆Hsl — 0.5 pts;
Using slope of melting curve — 0.5 pts;
Accurately measuring the slope of the melt-
ing curve near atmospheric pressure — 0.5
pts;
Correct result within 50% — 0.5 pts;
Correct result within 10% — 0.5 pts;
Wrong sign — -0.5 pts;
2. TUNNEL DIODE (10 points) — Solution by
Taavet Kalda, grading schemes by Jaan Kalda,
Axel Boeltzig, Bastian Hacker, and Fedor Tsy-
brov.
i) (1 point) Kirchhoffʼs voltage law (KVL) on
the circuit:
E = Iir+Vi.
Rearranging,
Ii =
E −Vi
r
=25mA−
1
2Ω
Vi. (2)
Vi and Ii also have to obey the diodeʼs V − I
curve. We can find a solution graphically by
plotting (2) on the V − I curve. This yields
Vi =20mV, Ii =15.3mA.
Grading: Writing down correct KVL —
0.3 pts;
drawingacorrectlineonV-Icurveorexplain-
ing this procedure clearly in text — 0.3 pts
(attempts of substituting the diode with equi-
valent resistance, only if numerically reason-
able equivalent resistance — 0.1 pts;
obtainingcorrectnumericalvaluefor I (from
15 to 15.5 mA) — 0.2 pts (for I from 14 to 16
mA — 0.1 pts);
for correct numerical value for V (from 19 to
20 mV) — 0.2 pts (for V from 18 to 22 mV —
0.1 pts). If the pair of values is not consistent
with the KVL (voltage mismatch is ≥ 1mV),
subtract 0.1 from the voltage value subscore
(if it was positive). No marks for the numer-
ical values if obtained in a wrong way.
ii) (1 point)After setting r = 0, the KVL takes
the form
E =Vi +L
dIi
dt
. (3)
Rearranging and integrating,
L
Z I1
0
dIi
E −Vi(Ii))
=
Z t1
0
dt.
Looking at the idealised V − I dependence,
itʼs clear that Vi(Ii) = 0 all throughout the
increase of current from Ii = 0 to Ii = I1 =
20mA. This simplifies the expression for t1:
t1 =
L
E
Z I1
0
dIi =
LI1
E
=4×10−8
s.
Grading:
Writing down correct KVL — 0.3 pts;
Integrate equation — 0.2 pts;
Note that Vi(Ii)=0 — 0.2 pts;
Correct result for t1 — 0.2 pts;
iii) (1 point) Equation (3) must hold no mat-
ter what the characteristic curve for the di-
ode looks like. This means that the current
will continue to rise without any discontinu-
ities,evenifitmeansthevoltageonthediode
will jump (the inductance keeps the current
from changing too fast but there is no such
constraint on the voltage). The expected be-
haviour of V − I is given in the following fig-
ure:In leg 2 of the journey, the current in-
creases from Ii = 0 to Ii = I2 = 21mA (meas-
ured from the figure). The time taken is
t2 = LI2/E = 4.2×10−8
s. Since in leg 3,
the change in current is 0, the time taken
is essentially instantaneous compared to t2.
Hence t3 = 0 for our considerations. The
total time taken is then
t2 +t3 =4.2×10−8
s.
Grading:
Description / understanding of the processes
— 0.5 pts;
Calculation t2 — 0.2 pts;
Result t2 +t3 — 0.3 pts;
iv) (2 points) We can use similar logic as be-
fore to deduce how the voltage and current
behave as a function of time. Since the equi-
librium voltage E = 250mV lies between the
two peaks in the V −I curve, the current will
perform a horizontal jump as before. At V2 =
500mV, equation (3) takes the form
E =V2 +L
dIi
dt
,
so
dI
dt
=
E −V2
L
<0.
Hence, Ii willcontinuetodecreasefrom I2 to
I3 = 1mA. Like before, the voltage will then
instantaneously jump from V2 to 0 and the
cycle starts again. A sketch of a single cycle
is shown in the following figure.
The time taken in legs 3 and 5 are ef-
fectively 0 and because the deviation of the
voltage from E in legs 2 and 4 is the same,
alongside with the change in current, the
time duration for 2 and 4 must also be the
same. The change in current is I2 − I3 =
20mA = I1. Hence t2 = t4 = t1 and the dura-
tion of one full period is T = t2 +t3 +t4 +t5 =
2t1 =8×10−8
s. A sketch of I as a function of
time is shown in the following figure. t0
has
the moment when the current is at its min-
imum at t0
=0.
Grading:
Writing down correct KVL at V2 — 0.3 pts;
Argument that ∆t3 and ∆t5 =0 — 0.3 pts;
Calculation ∆t4 — 0.3 pts;
Period of oscillation — 0.3 pts;
Amplitude of oscillation — 0.3 pts;
Offset of oscillation — 0.2 pts;
Correct plot, starting from I =0 — 0.3 pts;
v) (2 points)The system operates in 4 distinct
modes as the battery voltage is varied:
1. Applied voltage is smaller than the first
peak in the V − I curve. In that case,
the current will increase from 0 to I =
21mA and reach the equilibrium posi-
tion at V = E. Indeed, itʼs an equilib-
rium because it satisfies KVL given by
(3):
dI
dt
=0=
E −V
L
.
Hence, the ammeter measures a con-
stant 21mA.
2. Applied voltage is between the two
peaks in the V − I curve. The sys-
tem will follow a similar trajectory to
the one exhibited in iv) since the same
argumentation holds. Following the
same notation as in iv), the average
current in leg 2 is the arithmetic aver-
age between 1mA and 21mA (because
the current is increasing at a constant
rate). Leg 2 thus has an average cur-
rent of 11mA. Leg 4 similarly has the
sameaveragecurrent. Leg3and5donʼt
contribute to the average current be-
cause they happen effectively instant-
aneously. The total average current is
then 11mA.
3. Applied voltage is bigger than the
second peak in the V − I curve but
smaller than 500mV. In the beginning,
the current will increase to 21mA and
make a horizontal jump, just as expec-
ted. Then the current will decrease to
1mA and the voltage takes the value
of the battery and reaches an equi-
librium without performing any addi-
tional jumps. The average current is
thus 1mA.
4. If the applied voltage is bigger than
500mV, then the current will blow up
to infinity (in our ideal model) and
thatʼs not physical. Hence, the current
is undefined.
From the V − I curve, the first peak has a
voltage of V3 = 50mV, second a voltage of
V4 =400mV. The four scenarios can be sum-
marised in the following plot:
Grading: For each of the four modes,
Identification — 0.2 pts;
Determination of constant value — 0.3 pts;
vi) (1 point)
First, weʼll find the operational mode us-
ing the same graphical method as in part i).
The graphed line has an equation of
Ii =
E −Vi
r
=75mA−
1
2Ω
Vi,
showninredinthefigure. Thesteadyvoltage
and current are measured to be V0 = 125mV
and I0 = 11.9mA. For small perturbations
from the steady state, we can use Taylor
series while neglecting higher orders:
V0 +δV(t)=V(I0 +δI(t))≃V0 +δI(t)
dV
dI
¯
¯
¯
¯
I0
.
Therefore
δV =
dV
dI
¯
¯
¯
¯
I0
δI = RdδI.
We can express dV
dI
¯
¯
¯
I0
graphically by draw-
ing a line tangent to the V − I curve going
through the steady state. The derivative is
then found by dividing the horizontal projec-
tion with the vertical, while keeping track ofthe sign:
Rd =
dV
dI
¯
¯
¯
¯
I0
=
178mV
−25mA
=−7.1Ω.
Grading: WritingdowncorrectKVL—0.1
pts;
drawingacorrectlineonV-Icurveorexplain-
ing this procedure clearly in text — 0.2 pts;
obtainingcorrectnumericalvaluefor I (from
11 to 13 mA) — 0.1 pts;
for correct numerical value for V (from 115
to 135 mV) — 0.1 pts;
fordrawingtangentlinetothecurvethrough
the intersection point — 0.2 pts;
determining correctly Rd as the slope of the
tangent (from -6.5 to −7.6) — 0.3 pts; if the
result is from -6 to −8 — 0.2 pts, if it is from
from -5 to −9 — 0.1 pts. Zero marks if the
minus sign is missing.
If final result is correct, but the values of I0
and V0 not shown, no penalty is applied.
vii)(2points)Inordertofindthestabilitycon-
dition, one could operate with complex im-
pedances and write down the resonance con-
dition
r+iωL+
Rd
iωRdC+1
=0,
hence, denoting λ=iω,
(r+λL)(λRdC+1)+Rd =0.
A more tedious but perhaps clearer way
wouldbetowritedowntheKVLandsolvethe
resulting differential equation.
Let the deviation of the charge on the
capacitor from steady state be δq. Then,
from KVL, δIRd = δq/C. Hence, the current
through the resistor r and inductor is δI+ ˙ δq,
where ˙ δq = ˙ δIRdC. KVL for the whole circuit
takes the form
0=(δI + ˙ δq)r+L
d
dt
¡
δI + ˙ δq
¢
+δIRd
= RdLC ¨ δI +(L+RdrC) ˙ δI +(Rd +r)δI
= ¨ δI +
µ
1
RdC
+
r
L
¶
˙ δI +
r+Rd
RdLC
= ¨ δI +b ˙ δI +c,
where b =
³
1
RdC + r
L
´
, c =
r+Rd
RdLC . This is
a second order differential equation. De-
pending on the values for b and c, the solu-
tion might grow exponentially. The stand-
ard method for solving this type of equa-
tion involves making an educated guess and
plugging it into the equation. In this case,
an exponential solution of the form δI =
δI0 exp(λt) will work. Note that this is all
equivalent to operating with complex imped-
ances but with λ = iω. substituting the an-
satz into the differential equation and redu-
cing the prefactors, one gets the character-
istic equation:
λ2
+bλ+c =0.
This is a quadratic equation with two solu-
tions
λ12 =−
b
2
±
s
b2
4
−c.
λ12 can be either both real or both complex,
dependingonthesignofthediscriminant. If
λj = mj +nji, where m, and n are both real,
then
δI =
2 X
j=1
δI0jemjt
¡
cos
¡
njt
¢
+isin
¡
njt
¢¢
.
It can be seen that for the solution to be
stable, m < 0 is needed as that leads to an
exponential decay in the current. In other
words, the real part of λ has to always be neg-
ative, otherwise the current will start grow-
ing exponentially. With careful analysis, itʼs
possible to determine necessary conditions
for b and c for this to be the case.
Vietaʼs second formula states that λ1λ2 =
c. If λ is real, then this means that c has to
bepositive,becauseotherwiseeitherλ1 orλ2
is negative. If λ is complex, then λ2 and λ1
are each-otherʼs complex conjugates and so
their product must be positive. Hence, c > 0
regardless of whether λ is real or complex.
According to Vietaʼs first formula, λ1 +
λ2 = −b. If λ is real, then their sum has to
be negative, otherwise at least one of λ1 and
λ2 is positive. Hence, b > 0. If λ is complex,
thentheirsumispurelyreal(becausetheyʼre
each-otherʼs complex conjugates) and hence
again, the sum has to be negative for the real
parts to be negative. Hence, b > 0 must al-
ways hold.
The b > 0 and c > 0 are necessary and
sufficient conditions for the solution to be
stable. Condition b >0 implies
µ
1
RdC
+
r
L
¶
>0
so
L <|Rd|rC =4.3×10−10
H=0.43nH.
Inequality c >0 implies
r+Rd
RdLC
>0,
hence
r+Rd <0.
As can be seen, the value for L canʼt exceed
0.43nH.
Grading: consideration of current small
deviation — 0.1 pts;
relationship between capacitor charge δq
and diod current δI — 0.1 pts;
initial KVL for whole circuit — 0.3 pts;
correct differential equation — 0.3 pts;
quadratic equation — 0.2 pts;
analyze of quadratic equation according to
the problem — 0.6 pts;
expression for inductance: L < |Rd|rC — 0.3
pts;
numerical answer: L <0.43 nH — 0.1 pts;
3. CONICAL ROOM (3 points) — Solution by
Taavet Kalda, grading schemes by Maurice Zeu-
ner, Eugen Dizer, and Titus Bornträger. If the
distance from the base to the apex is H, then
from energy conservation
gH =
v2
0
2
.
Let the shortest distance from the base to the
wall be h and the sought minimal speed v1.
From geometry, h = Hsinα. Letʼs consider
a new system of coordinates where the two
axis x0
and y0
are parallel and perpendicu-
lar to the wall respectively. Gravitational ac-
celeration has components gx0 = gcosα and
gy0 = gsinα. It is clear that the motion along
the x0
axis doesnʼt affect whether the pro-
jectile hits the wall. Because the motions in
the x0
and y0
direction are independent, one
has to set the component of⃗ v1 parallel to x0
to 0 in order to minimize the total speed.
Thentheproblemreducestohittingapro-
jectile into a conventional ceiling of height h
in effective gravity gsinα. Thus, from energy
conservation,
gsinαh= gHsin2
α=
v2
1
2
.
And so
v1 = v0 sinα=
p
3
2
v0.
Grading: We expect to see mostly two dif-
ferent solution schemes. The first one is the
given sample solution using the coordinate
transformation. The second one is by math-
ematicallyderivingtheintersectionpointsof
the trajectory with the walls.Grading for sample solution:
Deriving the relation gH = v2
0/2. — 0.5 pts;
Using the relation h= Hsinα. — 0.5 pts;
Change of coordinate system and splitting
the gravitational force — 1.0 pts;
Further calculation — 0.5 pts;
Correct result for v1 — 0.5 pts.
Grading for alternative methods:
Deriving the relation gH = v2
0/2. — 0.5 pts;
Equationsofmotionandderivationofthetra-
jectory y(x) of the projectile — 0.5 pts;
Mathematical description of wall — 0.3 pts;
Solving for intersection points and choosing
the physical solution — 0.7 pts;
Findingtheoptimalangleforminimumvelo-
city(firstderivativeofvelocitywithrespectto
initial angle must be zero) — 0.5 pts;
Correct result for v1 — 0.5 pts.
4. DRONE (9 points) — Solution by Taavet
Kalda, grading schemes by Oleg Košik, Jānis
Cimurs, and Joonas Kalda.
i) (2 points) Let the mass of the cuboid be
M. There are three forces acting on the
drone: the resultant of friction and the nor-
mal force ⃗ Ff , rope tension ⃗ T directed along
the rope, and gravitational acceleration M⃗ g
directed vertically down from the centre of
the cuboid. Since the cuboid is sliding with
constant speed, the three forces must bal-
ance each other out. The only way for this
to be possible is if the vectorial extensions of
the forces intersect in one point, O.
One can prove this by contradiction. If
the forces donʼt intersect in a single point,
one needs only consider the torque around
one of the intersection points to see that
there is non-zero torque and that the forces
arenʼt in equilibrium.
If the normal force is N, then the fric-
tional force is Nµ so the resultant ⃗ Ff = Nŷ−
Nµx̂. Therefore, ⃗ Ff is always directed at an
angle α=arctanµ with respect to the vertical.
Since the starting point and direction of
the forces of gravity and tension are known,
one can reconstruct the position of O and
⃗ Ff . Because µ = tanα, one can conveniently
measure µ as the ratio of the horizontal and
vertical projection of ⃗ Ff : µ≈0.659.
ii) (2 points) Consider the system made up
of the cuboid and the drone. Once again,
there are three forces acting on this system:
gravitational force (M+m)⃗ g, friction ⃗ Ff , and
the force ⃗ F keeping drone afloat. The thrust
for the drone is directed along the symmetry
axisofthedrone. Sincetheforcesareinequi-
librium, their extensions must intersect in
one point O0
. Owing to the last part, O0
can
be found by intersecting the frictional force
and the thrusting force. Since gravitational
force is vertical, we can find the horizontal
projection of the centre of mass. If x1 and
x2 are the horizontal distances from O0
to the
centres of the cuboid and drone respectively,
then
x1
x2
=
M
m
.
Fromthefigurewemeasure x1/x2 =0.796and
so
M =0.796m=0.796kg.
Grading for i) and ii)
Solutions that use force balance and torque bal-
ance in i) and force balance in ii):
i) correctly identifying all forces acting on
cuboid – 0.2 pts;
usethatµ=
Ff
N ,where Ff isfrictionforceand
N is normal force — 0.2 pts;
writing force balance equations using angles
– 0.4 pts;
writing torque balance equation – 0.4 pts;
deriving µ – 0.4 pts;
numerical result with high enough precision
— 0.4 pts; (error within 5% – 0.4pts, error
within 10% – 0.2pts)
ii) correctly identifying all forces acting
on drone – 0.2 pts;
writing force balance equations using angles
– 0.6 pts;
combining with equations form part i) and
deriving M – 0.8 pts;
numerical result with high enough precision
— 0.4 pts; (error within 5% – 0.4pts, error
within 10% – 0.2pts)
Remark. Solutions that assume that
cuboid is linear, get 0 for precision for both
parts i) and ii), but there are no deductions
for deriving µ and M.
Solutions that use point O in i):
Correctly identifying all forces acting on
cuboid – 0.2 pts;
Use fact that vectorial extensions intersect at
onepointoranotherwaytotakeintoaccount
torque balance for point O – 0.8 pts;
Use that µ = tanα or µ =
Ff
N , where Ff is fric-
tion force and N is normal force — 0.2 pts;
Deriving µ – 0.4 pts;
Numericalresultwithhighenoughprecision
— 0.4 pts.
Solutions that use point O’ in ii):
Correctly identifying all forces acting on sys-
tem – 0.2 pts;
Use fact that vectorial extensions intersect at
onepointoranotherwaytotakeintoaccount
torque balance for point O0
– 0.8 pts;
Use torque balance for gravitational forces —
0.4 pts;
Express formula for mass M — 0.2 pts;
Numericalresultwithhighenoughprecision
— 0.4 pts.
iii) (2 points) Imagine a pocket of air with
fixedmassmovingaroundintheatmosphere.
Let the pocketʼs volume be V = V(z). In an
adiabatic atmosphere, pVγ
= const, where
γ = cp/cv = 1.39. Now, pV ∝ T and ρ ∝ V−1
,
so
pVγ
∝Vγ−1
T ∝ρ1−γ
T =const.
Hence,
ρ(z)=ρ0
µ
T(z)
T(0)
¶ 1
γ−1
=ρ0
µ
1−
gz
cpT0
¶ 1
γ−1
.
Grading: There are two expected solu-
tions. One of them is given by the sample
solution while the other involves integrating
dρ from z =0 to z.
Grading for sample solution:
Using or deriving the adiabatic relation
pVγ
=const — 0.6 pts;Using or deriving an expression for γ = cp/cv
— 0.2 pts;
Deriving an exact expression for ρ, or ob-
taining its dependence on V and/or on p, T
— 0.6 pts;
Obtaining the correct expression for ρ — 0.6
pts;
Grading for alternative solution:
Using or deriving the relation for the pres-
sure change dp(z)=−ρ(z)gdz — 0.1 pts;
Using the relation cp −cv = R/µ — 0.2 pts;
Using ideal gas law or equivalent to get
another differential — 0.3 pts;
Obtaining an expression for ρ in terms of
other quantities of interest — 0.6 pts;
Correctly setting up the integral for ρ and z
or equivalent quantities — 0.2 pts;
Obtaining the correct expression for ρ — 0.6
pts;
iv) (3 points) The drone stays afloat by using
the motor to push air through its propellers.
The amount of thrust is clearly a function of
thedensityoftheairandthespeedvatwhich
air goes through the propellers.
Force balance can be written down as F−
mtotg = 0, where F is the vertical thrust and
mtot the total mass of the drone. If A is the
effective area of the propellers, itʼs possible
to write down the expression for F by either
using the dynamical pressure ρv2
or by con-
sidering the conservation of momentum. In
a time interval ∆t, a volume of ∆V = Av∆t
of air passes through the propellers. The air
volume carries momentum ∆p = ∆Vρv, so
the thrust is given by F =∆p/∆t= Aρv2
.
Secondly,itʼspossibletotiethepowerout-
put P of the motor with outside air density
and speed. Notably, the air is pushing the
propellers vertically up with a force F. In or-
der to function, the propeller blades need to
be slanted. This amounts to a torque thatʼs
proportional to F. Further, itʼs clear that the
rotational speed of the propeller blades is
also proportional to v. This means that the
output power of the motor is proportional to
the product of F and v and so P ∝ ρv3
. In
our considerations, the output power of the
droneisfixedsov∝ρ−1/3
andF ∝ρ(ρ−1/3
)2
=
ρ1/3
. From force balance, F = mtotg. Hence,
mtot ∝ ρ1/3
. Evaluating the ratio at z = 0 and
z = zmax, one gets
1.5m
m
=
µ
ρ(0)
ρ(zmax)
¶1/3
=
µ
1−
gzmax
cpT0
¶− 1
3(γ−1)
,
and so
zmax =
cpT0
g
³
1−1.5−3(γ−1)
´
=11.3km.
Grading: Writing down the force balance
equation — 0.4 pts;
Deriving a relation between the thrust and
the air density and speed by either consid-
ering momentum conservation over a small
time interval or using the expression for
dynamical pressure — 0.8 pts;
Tying the motor power with air density and
speed — 0.6 pts;
Finding a relation between the maximum
lift power and air density — 0.4 pts;
Evaluating the two conditions for maximum
lift power of the drone at z =0 and z = zmax —
0.2 pts;
Obtaining the correct expression for zmax —
0.4 pts;
Obtaining the correct numerical value for
zmax — 0.2 pts;
5. BOTTLEʼS SOUND (8 points) — Solution by
Jaan Kalda, marking schemes by Eero Uustalu
(task i), Topi Löytäinen, and Miha Marttinen
(tasks ii, iii).
i) (4 points) The following frequencies can
be obtained for 1-litre bottle, measured fre-
quency of sound is tabulated versus the
volume of water in the bottle.
V (ml) 0 100 200 310 400
f (Hz) 144 151 163 175 185
V (ml) 500 600 700 800 880 930
f (Hz) 205 230 260 325 420 520
Grading: The measurement data give evid-
ence that volumes have been measured cor-
rectly: 0.2 pts (for instance, if a portion of
water was added without making a notice of
it, all the subsequent volumes are offset by a
certain amount, and in that case, this 0.2 pts
is not awarded)
There is at least one measurement with
empty bottle (V =0) 0.2 pts.
There is at least one measurement with less
than 10% of the bottleʼs volume being empty
0.2 pts.
There is at least one measurement in each
of the volume ranges: 0 < V/V0 ≤ 20%;
20 < V/V0 ≤ 40%; 40 < V/V0 ≤ 60%;
60 < V/V0 ≤ 70%; 70 < V/V0 ≤ 80%;
80<V/V0 ≤90%; 0.2 pts.
Quality of measurements: in f−2
versus
V graph, the data should lie on a strait line.
Everypoint(upto10thpoint)whichis“good”,
i.e. lies on a line — 0.2pts. If an outlier point
corresponds to the second harmonic, 0.1 pts
is given instead of 0.2 pts.
Volume of the bottle measured: 0.2 pts.
If volume is not measured but read from the
label — 0.1 pts.
If instead of the volume of water, the
volume of air is used, the total score for task
i is multiplied by 0.8 and rounded up to the
first decimal digit. The same applies if fre-
quency is not recorded in Herz, but musical
notes.
If only a graph is built with no tabulated
data, subtract 10% from the final result of
this subtask.
ii) (1.5 points)We can consider the air in the
regionofthebottleʼsneckofvolume v¿V0 =
1l as a mass m = ρav (ρa denotes the dens-
ity of air) which can move back and forth
while the air inside the bulk of the bottle
serves as a spring. If the air inside the neck
moves by distance x, the volume inside the
bottleischangedby Ax, where A denotesthe
cross-section area of the neck. The process
is fast, characteristic time is around few mil-
liseconds, so we can consider it to be adia-
batic(characteristictimeofthermalizationis
on the order of a second). From pWγ
=const
(where W =V0 −V denotes the air volume in-
side the bottle) we obtain lnp+γlnW =const,
hence ∆p
p +γ∆W
W =0, i.e.
∆p =−γp
∆W
W
=γp
Ax
W
.
Now we can write the equation of motion for
the air inside the neck as
ρavẍ=−∆pA =−xγp
A2
W
,
hence the frequency
f =
1
2π
s
γ
pA2
ρavW
=
1
2π
s
γ
RT
µ
A2
v(V0 −V)
.
Grading:
• 1.5p: If f ∝1/
p
V0 −V [or f ∝(V0−V)−n
with n ≈ 0.5] either based on data ana-
lysis or adiabatic oscillation approach.
• 0.5p: Data analysis leading to unphys-
ical (linear, quadratic, exponential,...)
dependence.
• 1p: Standing wave approach or data
analysis leading to 1/V dependence.
iii)(3points)Basedonourpreviousresult,we
can see that the squared period
T2
=4π2 µ
RT
v(V0 −V)
A2
is a linear function of the volume of water.
Usingthemeasurementdatawecalculatethe
squared period (ms2
).
V (ml) 0 100 200 310 400
T2 (ms2) 48.2 43.9 37.6 32.7 29.2
V (ml) 500 600 700 800 880 930
T2 (ms2) 23.8 18.9 14.8 9.5 5.7 3.7These data are plotted below.
0
10
20
30
40
50
60
0 100 200 300 400 500 600 700 800 900 1000
The linear fit of these data yields
T2
=48ms2
−V ·48ms2
/l,
so that
f =
¡
48ms2
−V ·48ms2
/l
¢−1/2
.
Grading:
• 1p: For graph (labels, units)
• 1p: Linearization or comparison to
model prediction.
• 1p: For parameterization consider-
ation either theoretical or physical
(heuristic) justification
