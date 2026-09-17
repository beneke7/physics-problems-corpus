---
id: apho-2005-e-q2
source: apho
language: en
solution_language: en
translated: false
problem: apho-2005-e-q2
solution_type: official
source_document: solution-document-apho-2005-e-s
source_pdf: cache/phoxiv/apho/2005_E_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/apho/2005_E_S.pdf."
---

2.MAGNETIC BRAKING ON AN INCLINED
PLANE
SUGGESTED SOLUTION
(A) Setup and Introduction
A1. To minimize the torque due to interaction of the magnet and the earth’s magnetic
field we have to set the orientation of the inclined plane so that the magnet will roll
down with the poles aligned to the North-South direction as shown.
Figure 1. Adjusting the orientation of the inclined plane
EXPERIMENTAL COMPETITION
9/17
A2.
Figure 2. Field and interactions in the magnetic braking effect
.
Answer with some vector analysis:
Consider a point A on the conductor. As the magnet moves, its magnetic field sweeps
the conductor inducing electric field and causing current flow due to Faraday’s law,
whose direction can be determined using Lenz’s law. Let’s choose an arbitrary loop
as shown. At point A, the magnetic field and the current will cause Lorentz force FM-
C pointing at x+ direction. This force is acting on the electrons in the conductor
On the other hand, due to Newtons’ Third law there is reaction force FC-M with the
same magnitude but with opposite direction acting on the magnet, which is the
magnetic braking force.
(B) Investigation of the magnetic braking force
EXPERIMENTAL COMPETITION
10/17
B1. Determination of the power factor n: Dependence of the magnetic braking force
with the velocity
In this experiment the student has to be aware that the magnet should reach the
terminal velocity first before start the timing. From observation we can see that the
magnet reaches terminal velocity almost immediately. To make sure we let the
magnet travels first for about 5 cm before we start measuring the time. Here we use s
= 250 mm from start to finish to obtain speed: / v s t = .
The angle of inclination is varied to take several data. Given l = 425 mm, we measure
h where sin / h l θ = .
Figure 3. a. Measurement of the velocity b. Measurement of the plane inclination
Because the magnet-conductor distance is kept constant (d ≈ 5mm), the magnetic
braking force only depends on the velocity of the magnet, so we can simplify:
0 1
p n n
MB F k d v k v = − = −
where 1 0
p
k k d = is constant in this experiment.
EXPERIMENTAL COMPETITION
11/17
Figure 4. Force diagram of the rolling magnet
When the magnet reaches the terminal velocity then the total torque should be zero.
The equation of the motion at the contact point C will be:
C τ = 0 ∑
1
sin 0
sin 0
MB
n
mg R F R
mg k v
θ
θ
+ =
− =
1
sin n k
v
mg
θ =
To calculate the power factor n:
( ) 1
lnsin ln ln
k
n v
mg
θ
⎛ ⎞
= + ⎜ ⎟
⎝ ⎠
The experimental data:
H t Sinθ v ( ) ln v ( ) ln sinθ
(mm) (s) mm/s
23±0.5
22.98±0.00
5 0.054 10.88 2.39 -2.92
40 12.78 0.094 19.56 2.97 -2.36
50 10.17 0.118 24.58 3.20 -2.14
60 8.62 0.141 29.00 3.37 -1.96
70 6.96 0.165 35.92 3.58 -1.80
80 6.09 0.188 41.05 3.71 -1.67
91 5.48 0.214 45.62 3.82 -1.54
101 5.05 0.238 49.50 3.90 -1.44
111 4.57 0.261 54.70 4.00 -1.34
120 4.17 0.282 59.95 4.09 -1.26
130 3.72 0.306 67.20 4.21 -1.18
150 3.25 0.353 76.92 4.34 -1.04
170 2.81 0.400 88.97 4.49 -0.92
Table 1. Experimental data for power factor n determination
EXPERIMENTAL COMPETITION
12/17
Note:
• Column in bold are the data directly taken from the experiment.
• Typical error for h measurement is shown in the first row:
( ) 23 5 h mm = ± . Similar error applies for the rest of h data.
• Data t are the average data taken from 3 to 5 measurement. Even though
standard deviation error is quite small (±0.1s), the error should be
dominated by response delay of the observer in pressing the stopwatch.
Widely accepted value for human eye response is 0.25 sec, in this
experiment we choose more conservative value (±0.5 s)
Figure 5. Graph of ln(sin ) θ vs ln( ) v . Typical error bar is shown in the central data.
Using linear regression method or graphical method as shown in Fig. 5 one can
determine n from the slope.
n = 0.96
Whose result is very close to the theoretical value of n = 1. From the data shown in
Fig. 5 (as well as the coefficient of correlation r = 0.9995), it can be shown that this
experiment is very good in demonstrating the linear velocity dependence of the
magnetic braking force. This result has been repeated and verified by three
independent persons and apparatus setups.
Error estimate of n:
Instead of laboring on detailed error propagation analysis that could be very time
consuming, in olympiad context one can make the error estimate as follows:
EXPERIMENTAL COMPETITION
13/17
The typical error of the data points in Fig 5 can be obtained from the central data:
ln 3.58 0.075 v = ±
ln(sin ) 1.8 0.075 θ = − ±
whose errors propagated from the uncertainties in h and t.
The power factor n can be obtained from the slope of Fig. 5: / n y x = ∆ ∆ where
( ) ln sin y θ = and ln x v = .
From the data in Fig. 5. we have: 2.1 x ∆ = and 2.0 y ∆ = , and the typical errors:
0.075 x δ = and 0.075 y δ = .
So the error estimate for n:
2 2 2 2
0.075 0.075
0.05
2.1 2.0
n x y
n x y
δ δ ⎛ ⎞ ∆ ⎛ ⎞ ⎛ ⎞ ⎛ ⎞
= + = + = ⎜ ⎟ ⎜ ⎟ ⎜ ⎟ ⎜ ⎟
∆ ∆ ⎝ ⎠ ⎝ ⎠ ⎝ ⎠ ⎝ ⎠
0.05 0.048 n n ∆ = =
So we can conclude the result of our experiment is:
0.96 0.05 n = ±
EXPERIMENTAL COMPETITION
14/17
B2. Determination of the power factor p: Dependence of the magnetic braking
force with the magnet-conductor distance
In this experiment we use one value of inclination angle, h=50 mm (l=425mm) so
that ( ) arcsins / 6.8 h l θ = = °. Distance travelled remains: s = 250 mm, and the
timing is done after the magnet travel first for about 5 cm as before.
The equation of motion, similar to previous section:
C τ = 0 ∑
0
sin 0
sin 0
MB
p n
mg R F R
mg k d v
θ
θ
+ =
− =
0
sin
n p k
v d
mg θ
−
=
0
ln ln ln
sin
k
n v p d
mg θ
⎛ ⎞
− = + ⎜ ⎟
⎝ ⎠
Here again p can be obtained using linear regression or graphical method where we
use the previously obtained value: 0.96 0.05 n = ± .
The experimental data:
d t V
ln n v − lnd
mm S mm/s
4.5±0.5
13.53±0.00
5 18.48 -2.80 1.50
5.5 9.60 26.04 -3.13 1.70
6.5 6.70 37.31 -3.47 1.87
7.5 4.99 50.10 -3.76 2.01
8.5 3.47 72.05 -4.11 2.14
9.5 2.87 87.11 -4.29 2.25
10.5 2.14 116.82 -4.57 2.35
11.5 1.66 150.60 -4.81 2.44
Table 2. Experimental data for power factor p determination
Note:
Distance d is measured from the center of the magnet.
EXPERIMENTAL COMPETITION
15/17
Figure 6. Graph of ln( ) n v − vs ln( ) d . Typical error bar is shown in the central data.
From linear regression calculation we have:
2.16 p = −
So the magnetic braking force is very sensitive with the magnet–conductor distance
d in which the relationship is almost inversely quadratic. In brief, the further the
magnet from the conductor the weaker the magnetic braking force becomes. This
result has been repeated and verified by three independent persons and apparatus
setups.
Error estimate of p:
Similar to previous section, we use the central data shown in Fig. 6.:
ln 2.01 0.105 d = ±
ln( ) 3.76 0.095 n v − = − ±
The power factor p can be obtained from the slope of line in di Fig. 6: / p y x = ∆ ∆
where ln y n v = − and ln x d = .
For the data shown in Fig. 6 we obtain: 0.94 x ∆ = dan 2.01 y ∆ = , with typical error:
0.105 x δ = and 0.095 y δ =
So the error estimate for p:
2 2 2 2
0.105 0.095
0.12
0.94 2.01
p x y
p x y
δ δ ⎛ ⎞ ∆ ⎛ ⎞ ⎛ ⎞ ⎛ ⎞
= + = + = ⎜ ⎟ ⎜ ⎟ ⎜ ⎟ ⎜ ⎟
∆ ∆ ⎝ ⎠ ⎝ ⎠ ⎝ ⎠ ⎝ ⎠
EXPERIMENTAL COMPETITION
16/17
0.12 0.26 p p ∆ = =
So we can conclude the result of our experiment is:
2.2 0.3 p = − ±
EXPERIMENTAL COMPETITION
17/17
[Marking Scheme] Experimental Question 2
Magnetic Braking on an inclined plane
(A.1)
1.0
1.0 Adjusting the orientation of the inclined plane track
(A.2)
1.0
1.0 Explanation using appropriate diagram of field and force lines
0.5 Recognizing v terminal
0.5 Equation of motion
0.5 Obtain data >= 5 sets + corresponding calculations ,
0.1 each data set.
0.25 Units
0.5 Graph
0.25 Linear regression or graphic analysis
0.5 Final result: 0.5 ≤ n ≤1.5
0.5 Final result: 0.9 ≤ n ≤ 1.1
(B.1)
4.0
0.5 Error analysis
0.5 Equation of motion
0.5 Obtain data >= 5 sets + corresponding calculations ,
0.1 each data set.
0.25 Units
0.5 Graph
0.25 Linear regression or graphic analysis
0.5 Correct sign (-) for final result p
0.5 Final result: 1.0 ≤ |p| ≤ 3.0
0.5 Final result: 1.5 ≤ |p| ≤ 2.5
(B.2)
4.0
0.5 Error analysis
