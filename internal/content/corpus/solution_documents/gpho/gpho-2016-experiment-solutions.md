---
id: solution-document-gpho-2016-experiment-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2016_experiment_solutions.pdf
extraction_method: pdftotext-raw
mapped_problems: [gpho-2016-e1, gpho-2016-e2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2016_experiment_solutions.pdf."
---

Problem E1. Rolling cylinder ( points)
Part A. Critical slopes (1 points)
We measure the board length L = 680mm, (0.1pts)
its uncertainty ∆L = 1mm.
Further we determine the steepest position of the board
where the cylinder’s rolling stops when it is pushed down-
wards, and measure the diﬀerence H = hu − hl between the
heights hu and hl of the upper and lower edges of the upper
surface of the board. We find hl = 8mm (0.1pts)
and hu = 33mm (0.1pts)
so that H = 25mm. Finally, we calculate angles according to
the formula α0 = arcsinH/L ≈ 2.1◦
; the final result needs to
be within 2.1◦
± 0.2◦
. (0.1pts)
We repeat measurements: find the critical positions of the
slope and measure hu. Three or more measurements (0.1pts)
We do the same for the second critical angle: if the result
is within hu = 170mm, and α2 ≈ 14.5◦
; the final result needs
to be within 14.5◦
± 3◦
. (0.1pts)
if three or more measurements were done. (0.1pts)
Error estimates: hl and L uncertainties are estimated as
1mm or 0.5mm. (0.1pts)
hu uncertainty when determining α0 is estimated in the range
from 1mm to 2mm, and when determining α2 — in the range
from 10mm to 50mm. (0.1pts)
This estimation can be done based on the standard deviation
of the repeated measurements.
For small angles, in radians α ≈ H/L so that
∆α =
√(
∆H
H
)2
+
(
∆L
L
)2
,
and ∆H =
√
∆h2
u + ∆2
l , numerically ∆α1 ≈ 0.1◦
– 0.3◦
and
∆α2 ≈ 1◦
– 5◦
. If both calculations are made reasonably (it is
also OK to apply addition of errors by modulus, instead of the
Pythagorean rule, or upper-lower bound method) and without
mistakes (0.1pts)
Part B. Rolling speed (3 points)
We take first segment close to the upper edge of the board, and
second segment close to the lower end of the board, so that
lt = 60mm. Then the data will be as follows
h
(mm)
t1 (s)
v1
(mm/s) t2 (s)
v2
(mm/s) tl (s)
vl
(mm/s)
2.6 64.8 1.54 64.5 1.55 388.2 1.55
3 15.2 6.6 15.2 6.6 91.2 6.58
3.5 7.2 13.9 7.4 13.5 43.8 13.7
4 4.52 22.1 4.38 22.8 26.46 22.7
4.5 3.41 29.3 3.53 28.3 20.7 29.0
5 2.86 35.0 2.97 33.7 17.22 34.8
5.5 2.27 44.1 2.31 43.3 13.56 44.2
6 1.78 56.2 1.65 60.1 10.14 59.2
6.5 1.51 66.2 1.35 74.1 8.46 70.9
7 1.35 74.1 1.02 98.0 7.02 85.5
7.5 1.31 76.3
8 1.21 82.6
8.5 1.09 91.2
9 0.98 102
9.5 0.92 109
10 0.84 119
10.5 0.78 128
11 0.72 139
As we can see, the rolling time for the first and second segments
start departing at H = 65mm, which gives us the critical slope
α1 = 6.2◦
.
Grading: at least 10 plausible time values for the first seg-
ment; (0.8pts)
If less than 10 time values are taken, no credit is given if the
number of measurements is less than 3; each next plausible
time value earns a partial credit. (0.1pts)
At least 10 speed values are correctly calculated; (0.5pts)
If less than 10 time values are taken, no credit is given if the
number of measurements is less than 2; each next pair of cor-
rectly calculated speed value earns a partial credit. (0.1pts)
At least 6 plausible time values for the second segm.; (0.4pts)
If less than 6 time values are taken, no credit is given if the
number of measurements is less than 3; each next plausible
time value earns a partial credit. (0.1pts)
At least 6 speed values are correctly calculated; (0.2pts)
If less than 6 time values are taken, no credit is given if the
number of measurements is less than 2; each next pair of cor-
rectly calculated speed value earns a partial credit. (0.1pts)
At least 6 plausible time values for the long segment; (0.4pts)
If less than 6 time values are taken, no credit is given if the
number of measurements is less than 3; each next plausible
time value earns a partial credit. (0.1pts)
— page 1 of 8 —At least 6 speed values are correctly calculated; (0.2pts)
If less than 6 time values are taken, no credit is given if the
number of measurements is less than 2; each next pair of cor-
rectly calculated speed value earns a partial credit. (0.1pts)
For the second segment, time values are taken for all those
values of H for which there is no significant time diﬀerence
between the first segment, and additionally, at time values for
at least two next values of H are measured. (0.2pts)
For the long segment, speed values are calculated for all those
values of H for which there is no significant time diﬀerence
between the first segment. (0.2pts)
Value α1 = 6.2◦
± 0.4◦
is reported. (0.2pts)
If the reported value does not fall into this range, but falls into
α1 = 6.2◦
± 0.7◦
, partial credit is given. (0.1pts)
Part C. Force as a function of speed (2.3 points)
What keeps the cylinder in motion is that component of gravity
force which is parallel to the board surface, Fm = mg sinα. In
those cases when the force depends significantly on time, we
need to take data of the first segment since at the beginning of
rolling, the friction force is maximal.
Rolling height
h (mm)
Rolling speed
v (mm/s)
Force applied
(Fm): (mN)
2.6 1.55 16.3
3 6.58 18.6
3.5 13.7 22.0
4 22.7 25.1
4.5 29.0 28.2
5 34.8 31.4
5.5 44.2 34.6
6 56.2 37.7
6.5 66.2 40.8
7 74.1 44.0
7.5 76.3 47.1
8 82.6 50.2
8.5 91.2 53.4
9 102 56.5
9.5 109 59.7
10 119 62.8
10.5 128 66.0
11 139 69.1
Based on these data, we build a graph, see next page. As
one can see, the data lie on a line, which is described by the
following law:
F = kv + F0,
where k = 390g/s and F0 = 16.6mN. Grading: At least 5
correct data points in table for α ≤ α1 (0.6pts)
(force calculated correctly, speeds copied from the vl column.
Partial credit: less than 3 data points — no credit; each next
correctly copied speed value earns a partial credit; (0.1pts)
each next correctly calculated force value deserves a partial
credit. (0.1pts)
If speed values are copied from the column of v1 or v2, 0.1 pts
if four or more values are copied.
At least 5 correct data points in table for α > α1 (0.6pts)
(force calculated correctly, speeds copied from the v1 column.
Partial credit: less than 3 data points — no credit; each next
correctly copied speed value earns a partial credit; (0.1pts)
each next correctly calculated force value deserves a partial
credit. (0.1pts)
If speed values are copied from a wrong column — no credit.
Graph: axis marked and labelled correctly. (0.1pts)
Scale on graph selected reasonably (the area of the smallest
rectangle wich covers all the data is at least one third of the
total graphical paper area. (0.1pts)
At least 5 correctly marked data points on graph for α ≤ α1 —
full credit. (0.3pts)
Partial credit: less than 3 data points — no credit; each next
correctly marked data point earns a partial credit; (0.1pts)
At least 5 correctly marked data points on graph for α > α1 —
full credit. (0.3pts)
Partial credit: less than 3 data points — no credit; each next
correctly marked data point earns a partial credit; (0.1pts)
Correctly deduced functional dependence
F = kv + F0; (0.1pts)
k = 390 ± 40g/s; (0.1pts)
F0 = 16.6 ± 1mN. (0.1pts)
Part D. Mass of liquid (0.7 points)
At the critical angle α2, all the liquid will roll up
and provide strongest resistance against rolling
when the line conecting the middle point of
the liquid and the centre of the cylinder form
a vertical line, see figure. At larger angles,
this position does not provide enough torque
to stop downwards acceleration. Then, the centre of mass of
the whole system must lay directly above the point P, there-
fore mlb = (M − ml)a, where ml is the mass of liquid. Since
a = Rsinα and b = R − a (we neglect the thickness of the
layer of liquid), we obtain ml(1 − sinα) = (M − ml)sinα,
hence ml = M sinα ≈ 12.5g. Grading: realizing that the
ratio ml/M is related to the critical angle α2. (0.3pts)
Obtaining quality ml = M sinα ≈ 12.5g. (0.2pts)
Correct numerical calculation. (0.2pts)
— page 2 of 8 —Graph: Fm versus v
— page 3 of 8 —Problem E2. Tungsten Filament (13 points)
Part A. Filament diameter (1.5 points)
The sketch the measurement setup:
Filament in focus
Laser
Screen as far as possible
x
y
(0.2pts)
We focus the laser to the filament, holding the screen close to
the filament during the adjustments helps focusing. For the
measurements we place the screen perpendicular to the beam
and reasonably far back (x ≥ 50cm) to get the maxima spaced
out. (0.2pts)
Partial credit if 30cm ≤ x < 50cm. (0.1pts)
We measure the distance between two maxima or two minima.
To get more accurate measurement we choose maxima that are
far apart (n ≥ 5). (0.2pts)
Partial credit if 3 ≤ n < 5. (0.1pts)
Formula for calculating diameter d = nλx
y . (0.2pts)
Most of the uncertainty in this case is due to the fact the diﬀrac-
tion pattern is fuzzy. To estimate the uncertainty we should
perform repeated measurements (three or more).
n x y d = nλx
y
10 909mm 131mm 45.1µm
7 905mm 89mm 46.3µm
7 907mm 87mm 47.4µm
(0.3pts)
(Each line in table up to 3rd earns 0.1 pts.)
Filament diameter d and its uncertainty:
d = 46.3µm
For |d − 46.3µm| ≤ 2µm, (0.2pts)
partial credit if 2µm < |d − 46.3µm| ≤ 5µm, (0.1pts)
Uncertainty is dominated by the uncertainty of y, ∆d ≈ d∆x
x ≈
1.2µm. Reasonably estimated ∆y, (0.1pts)
correct calculation of ∆d (0.1pts)
Part B. Filament’s resistance (2 points)
The problem is that with this multimeter we cannot accurately
measure the resistance of the filament directly when the knob is
turned to the resistance measurement position, the resistance
is too small for that. There are two issues: first, the multimeter
is not accurate enough ±0.5% + 0.5Ω; second, the internal res-
istance can be in the same order of magnitude. If the filament’s
resistance is directly measured, no more than 0.5 points overall:
0.3 pts for the answer if it is within 0.8 ±0.4Ω, and 0.2 pts for
the uncertainty if it is stated as either 0.5Ω or 0.6Ω.
Thus, we need to pass a current through the bulb and measure
the voltage. (0.1pts)
The current needs to be small, otherwise we shall heat the
filament. (0.2pts)
To get the smallest possible current we use a single 1.5V bat-
tery (0.1pts)
in series with the rheostat. (0.1pts)
We can measure accurately the voltage on the bulb, but the
problem is the current, because the ammeter is not ideal. If we
use it in the “mA”-range, we cannot take account its internal
resistance, if we use it in 10A-range, the current measurement
error will be large. So, we need to use the multimeter as a
voltmeter. (0.1pts)
Thus, we use the circuit as shown below. (0.1pts)
∼ 1.5V
V
V
0.2V range
2V range
The resistance of the rheostat can be measured directly, or us-
ing current/voltage measurements, Rr = 25.3Ω (0.1pts)
∆Rr = 0.7Ω (0.1pts)
Here and in what follows only reasonable results are accepted.
Measurement results: Ur = 1.483V (0.1pts)
Ub = 45.0mV (0.1pts)
∆Ur = 0.012V, and ∆Ub = 0.5mV (0.1pts)
Formula for filament resistance R = UbRr/Ur (0.1pts)
Formula for filament resistance uncertainty
∆R = R
√(
∆Ur
Ur
)2
+
(
∆Ub
Ub
)2
+
(
∆Rr
Rr
)2
(0.1pts)
Formula for filament length l = Rd2
π
4ρ25
(0.1pts)
Formula for filament length uncertainty
∆l = l
√(∆R
R
)2
+ 2
(∆d
d
)2
(0.1pts)
Filament resistance R and its uncertainty:
R = 0.77Ω (0.1pts)
±0.03Ω (0.1pts)
Filament length l and its uncertainty:
l = 23mm (0.1pts)
±2mm (0.1pts)
— page 4 of 8 —Part C. Current–voltage curve (2.5 points)
Now we connect the bulb to the battery via rheostat as a po-
tentiometer, i.e. according to the diagram below. Only that
way will we be able to cover the whole range of voltages from
0V to 12V. (0.2pts)
If we connect the rheostat in series, we’ll miss low voltage val-
ues (unless we switch the power supply to a battery).
∼ 12V
A 10A range
COM
V
Multimeter
10A
V
Usable correctly drawn circuit (even if the rheostat is connec-
ted in series) deserves credit. (0.2pts)
If we leave ammeter connected during voltage measure-
ments, the COM terminal must be connected to the bulb,
because voltage drop on the ammeter is not negligible. Credit
is given for any circuit which does not neglect the internal
resistance of the ammeter. (0.3pts)
U I U I U I
100mV 100mA 1000mV 230mA 5500mV 540mA
200mV 140mA 1500mV 280mA 6000mV 560mA
300mV 150mA 2000mV 320mA 6500mV 590mA
400mV 150mA 2500mV 360mA 7000mV 610mA
500mV 170mA 3000mV 390mA 7500mV 630mA
600mV 180mA 3500mV 430mA 8000mV 620mA
700mV 200mA 4000mV 460mA 8300mV 600mA
800mV 200mA 4500mV 490mA
900mV 220mA 5000mV 510mA
At least 4 correct measurements below 1V. (0.2pts)
Partial credit if 3 measurements (0.1pts)
Partial credit if 2 measurements (0.05pts)
(Final score for this task is rounded up to a single decimal
digit.)
At least 4 correct measurements for 1V ≤ U < 3V (0.2pts)
Partial credit if 3 measurements (0.1pts)
Partial credit if 2 measurements (0.05pts)
At least 4 correct measurements for 3V ≤ U ≤ 5V (0.2pts)
Partial credit if 3 measurements (0.1pts)
Partial credit if 2 measurements (0.05pts)
At least 4 correct measurements above 5V (0.2pts)
Partial credit if 3 measurements (0.1pts)
Partial credit if 2 measurements (0.05pts)
Formula for filament temperature expressed in terms of the
current Ilast and voltage Ulast at which the tungsten filament
broke:
T = T
(
Ulast
IlastR
)
(0.2pts)
Correctly calculated temperature T = 3190K (0.1pts)
Credit is given if the result remains between 3000K to 3700K.
Graph is given at Pg. 7. Grading of the graph: axes marked
with scales and units, and labelled correctly. (0.1pts)
Scale is chosen appropriately (graph covers at least one third
of the graphical paper area). (0.1pts)
Data correctly carried over to the graph. (0.3pts)
Partial credit: one clear mistake: 0.2 points, two clear mis-
takes: 0.1 points; if some points from the table are not copied,
as long as there are 4 data points in each of the four ranges
given above, no penalty. If this condition is not satisfied, sub-
tract 0.1 points for each point which was not copied until no
marks remains for the graph.
Curve connecting the points is drawn. (0.1pts)
The drawn curve goes through origin. (0.1pts)
Part D. Emissivity (3.5 points)
To verify the prediction we should build a plot of k versus
T which should be constant. We could alternatively plot P
versus T4
which would be linear or we could also plot P versus
T in logarithmic scale and measure the slope, these are the cor-
rect options (but second and third options make the follow-up
questions somewhat harder to answer). (0.5pts)
We can calculate temperature from T = T( U
IR) (0.2pts)
We can calculate emissivity from k = UI
πdlσT4 (0.3pts)
Calculated data (you don’t have to fill the entire table):
T k T k T k
380K 2.52 1245K 0.50 2531K 0.38
496K 2.43 1488K 0.45 2633K 0.37
648K 1.34 1695K 0.41 2691K 0.39
823K 0.69 1852K 0.40 2777K 0.38
893K 0.70 2016K 0.37 2855K 0.37
993K 0.59 2112K 0.40 3033K 0.31
1035K 0.64 2230K 0.39 3191K 0.25
1160K 0.47 2330K 0.39
1182K 0.53 2455K 0.37
The full credit (0.6 pts) for the table breaks down as follows:
At least 4 correct data points below 1000K. (0.2pts)
— page 5 of 8 —Partial credit if 3 data points (0.1pts)
Partial credit if 2 data points (0.05pts)
(Final score for this task is rounded up to a single decimal
digit.)
At least 4 correctly calculated data points between 1000K and
2000K (0.2pts)
Partial credit if 3 data points (0.1pts)
Partial credit if 2 data points (0.05pts)
At least 4 correct data points above 2000K (0.2pts)
Partial credit if 3 data points (0.1pts)
Partial credit if 2 data points (0.05pts)
Graph is given at Pg. 8. Grading of the graph: axes marked
with scales and units, and labelled correctly. (0.1pts)
Scale is chosen appropriately (graph covers at least one third
of the graphical paper area). (0.1pts)
Data correctly carried over to the graph. (0.3pts)
Partial credit: one clear mistake: 0.2 points, two clear mis-
takes: 0.1 points; if some points from the table are not copied,
as long as there are 4 data points in each of the four ranges
given above, no penalty. If this condition is not satisfied, sub-
tract 0.1 points for each point which was not copied until no
marks remains for the graph.
Curve connecting the points is drawn. (0.1pts)
Range of constant k is shown. (0.1pts)
At small temperatures, k is larger. (0.1pts)
We can see that the emissivity in more or less constant in
the middle of the graph 1350K < T < 3000K The lower limit
of this range is 1350 ± 250K (0.2pts)
Partial credit for results within the extended range of
1350 ± 350K. (0.1pts)
The upper limit is either the breaking temperature, or a value
larger than 2900K. (0.1pts)
The emissivity k in that range k = 0.4 Answers in the range
0.3 to 0.5 give full credit. (0.3pts)
Partial credit for results from 0.25 to 0.55 (0.2pts)
and from 0.2 to 0.65. (0.1pts)
From the plot we can see that prediction fails when T <
1350K (the value stated above). Based on the graph on Pg. 8,
one can say that it fails also at very high temperatures when
T > 3000K, but this is not always so and depends on how fast
the measurements are taken. In this case the measurements
were taken quite slowly and the resistance of the filament grew
at the very end because tungsten deposited itself to the inside
of the glass.
We can see that in the low temperatures it appears as if
that k > 1. That is because in these lower temperatures our
assumption that heat is transferred mainly by radiation fails
and we can’t neglect heat transfer by convection and conduc-
tion. (0.5pts)
Part E. Specific heat capacity of tungsten (3.5 points)
We can measure how much energy it took to break the
filament by connecting the bulb to the capacitor charged to a
high voltage. By measuring the voltage on the capacitor before
and after the process we can calculate the energy. (0.5pts)
To get better accuracy we must make the radiated power
as low as possible, that means we have to break the filament
as fast as possible, that means we must charge the capacitor to
highest possible voltage. For using the highest possible voltage
of 15V. (0.3pts)
∼ 12V 20V range V
∼ 3V
+ +
(0.2pts)
Formula for quantity of heat Q =
(U2
1 −U2
2 )C
2 (0.1pts)
U1 = 15.00V (0.1pts)
U2 = 14.27V (0.1pts)
Quantity of heat Q = 0.5J (0.3pts)
We cannot perform (many) repeated measurements because
we have only few bulbs.
For average specific heat c, measured quantities and calcu-
lations:
We use the breaking temperature T from previous part.
c = 4·Q
πd2lD(T−298.15K) (0.3pts)
c = 187 J
Kkg (0.2pts)
Results from 100 J
Kkg to 300 J
Kkg are accepted, results within
the extended range, from 60 J
Kkg to 500 J
Kkg give a partial
credit. (0.1pts)
We know the amount of energy that was taken from the
capacitor fairly accurately. (0.2pts)
Indeed, the magnitude of relative uncertainty that is caused
by filament dimensions d is about 15% and the magnitude of
relative uncertainty that is caused from the measurement of
breaking temperature T is around 10%.
The largest source of error is from the amount of heat radi-
ated Qr away before the filament breaks. (0.5pts)
We can estimate its value as follows. When we connect the
bulb to the capacitor, the initial current is the largest, but it
drops very fast as the filament heats up and its resistance grows.
— page 6 of 8 —That means most of the time is spent so that the filament is
hot and has high resistance. Because the voltage drop on the
capacitor was small we can estimate discharge time from
t ∼
C∆U
Ilast
∼
C∆URlast
U2
∼
C∆UUlast
U2Ilast
≈ 30ms
(0.3pts)
Any reasonable estimation slightly departing from what is given
above gives full credit. Power radiated away during that time
is estimated as Qr ∼ tUlastIlast. (0.3pts)
which numerically gives Qr ≈ 0.15J (0.1pts)
which is 30% of final result.
— page 7 of 8 —— page 8 of 8 —
