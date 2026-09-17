---
id: nbpho-2020-tunnel-diode
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2020-tunnel-diode
solution_type: official
source_document: solution-document-nbpho-2020-s
source_pdf: cache/phoxiv/nbpho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2020_S.pdf."
---

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
ure:
In leg 2 of the journey, the current in-
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
tion with the vertical, while keeping track of
the sign:
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
the trajectory with the walls.
Grading for sample solution:
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
