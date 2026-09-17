---
id: solution-document-ipho-2012-e-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2012_E_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2012-e-qe1-2, ipho-2012-e-qe1, ipho-2012-e-qe2-4, ipho-2012-e-qe2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2012_E_S.pdf."
---

Problem E1. The magnetic permeability of water
(10 points)
Part A. Qualitative shape of the water surface (1 points)
Observing reflections from the water surface (in particular,
those of straight lines, such as the edge of a sheet of paper),
it is easy to see that the profile has one minimum and has a
relatively flat bottom, ie. the correct answer is “Option D” (full
marks are given also for Option B). This profile implies that
water is pushed away from the magnet, which means µ < 1
(recall that ferromagnets with µ > 1 are pulled).
Part B. Exact shape of the water surface (7 points)
i. (1.6 pts) The height of the spot on the screen y is tabulated
below as a function of the horizontal position x of the caliper.
Note that the values of y in millimetres can be rounded to in-
tegers (this series of measurements aimed as high as possible
precision).
x (mm) 10 15 20 25 30 32 34 36
y (mm) 11.5 15.6 19.8 24.3 30.2 33.2 37.2 40.5
x (mm) 38 40 42 44 46 48 50 52
y (mm) 42.2 41.4 40.3 40.3 40.8 42 43.2 44.4
x (mm) 54 56 58 60 62 64 66 68
y (mm) 45.3 45.8 45.4 44.4 43.6 46.2 50 53.6
x (mm) 70 72 74 76 78 80 85 90
y (mm) 56.7 59.5 61.6 63.5 65.3 67 70.9 74.9
ii. (0.7 pts)
On this graph, the data of to two different water levels are
depicted; blue curve corresponds to a water depth of ca 2 mm
(data given in the table above); the violet one — to 1 mm.
iii. (0.5 pts) If the water surface were flat, the dependence of x
on y would be linear, and the tangent of the angle α0 would be
given by tanα0 = ∆y
∆x, where ∆x is a horizontal displacement of
the pointer, and ∆y — the respective displacement of the spot
height. For the extreme positions of the pointer, the beam hits
the water surface so far from the magnet that there, the surface
is essentially unperturbed; connecting the respective points on
the graph, we obtain a line corresponding to a flat water sur-
face — the red line. Using these two extreme data points we
can also easily calculate the angle α0 = arctan 74.9−11.5
90−10 ≈ 38◦
.
iv. (1.4 pts) For faster calculations, y − y0 − (x − x0)tanα0
(appearing in the formula given) can be read from the previous
graph as the distance between red and blue line; the red line
is given by equation yr = y0 + (x − x0)tanα0. One can also
precalculate 1
2 cos2
α0 ≈ 0.31. The calculations lead to the fol-
lowing table (with z = tanβ ·105
; as mentioned above, during
the competition, lesser precision with two significant numbers
is sufficient).
x (mm) 10 15 20 25 30 32 34 36
z 0 10 27 66 204 303 473 591
x (mm) 38 40 42 44 46 48 50 52
z 597 428 239 128 53 26 0 -26
x (mm) 54 56 58 60 62 64 66 68
z -72 -145 -278 -449 -606 -536 -388 -254
x (mm) 70 72 74 76 78 80 85 90
z -154 -74 -40 -20 -6 2 -2 0
— page 1 of 4 —v. (1.6 pts) The water height can be obtained as the integral
h =
R
tanβdx. Thus, we calculate the water height row-by-
row, by adding to the height in the previous row the product
of the horizontal displacement xi+1 −xi with the average slope
1
2(tanβi+1 + tanβi).
x (mm) 10 15 20 25 30 32 34 36
−h (µm) 0 0 1 4 10 15 23 34
x (mm) 38 40 42 44 46 48 50 52
−h (µm) 46 56 63 66 68 69 69 69
x (mm) 54 56 58 60 62 64 66 68
−h (µm) 68 66 61 54 44 32 23 17
x (mm) 70 72 74 76 78 80 85 90
−h (µm) 12 10 9 8 8 8 8 8
Note that the water level height at the end of the table should
be also 0 (this corresponds also to an unperturbed region); the
non-zero result is explained by the measurement uncertainties.
One can improve the result by subtracting from h a linear trend
8µm· x−10mm
80mm .
If the water level above the magnet is 1 mm, the water level
descends below its unperturbed level at the axis of the magnet
by ca 120µm.
vi. (1 pt)
Similarly to the previous figure, blue curve corresponds to
a water depth of ca 2 mm, (data given in the table above), and
the violet one — to 1 mm.
The position of the magnet can be found by measuring the
caliper (find the positions when the laser beam hits the edges of
the magnet and determine the distance between these positions
— the result is ca 24 mm), and using the symmetry: magnet
is placed symmetrically with respect to the surface elevation
curve.
Part C. Magnetic permeability (2 points)
Water surface takes an equipotential shape; for a unit volume of
water, the potential energy associated with the magnetic inter-
action is B2
2µ0
(µ−1
−1) ≈ B2 1−µ
2µ0
; the potential energy associated
with the Earth’s gravity is ρgh. At the water surface, the sum
of those two needs to be constant; for a point at unperturbed
surface, this expression equals to zero, so B2 µ−1
2µ0
+ ρgh = 0
and hence, µ − 1 = 2µ0ρgh/B2
. Here, h = 120µm stands for
the depth of the water surface at the axis of the magnet; note
that we have compensated the cumulative error as described at
the end of the previous task and obtained h as the difference
between the depth at the magnet’s axis (121µm) and the half-
depth at the right-hand-side of the graph (1µm). Putting in
the numbers, we obtain µ − 1 = −1.2 × 10−5
.
— page 2 of 4 —Problem E2. Nonlinear Black Box (10 points)
Part A. Circuit without inductance (7 points)
It is possible to make all the measurements needed for this
problem with a single circuit as shown in the figure. While the
current source is switched on, we are charging the capacitor in
the black box, until the current I(Vmax) through the nonlinear
element equals to the output current I0 of the current source.
Vmax = 540±40mVs varies from one experimental setup to an-
other. When the current source is switched off or disconnected,
the capacitor will discharge through the nonlinear element.
Multimeter
Current source
IN OUT GND
+ − Switch
O
I
Black box
Switch
O
I X X
i. (1 pt) During charging of the capacitor from V = 0 to
V = Vmax we note that the output of the current source is con-
stant (I0 = 6.0mA) close to the precision of the multimeter.
ii. (1.2 pts) Using the definition of differential capacitance,
we can calculate the current through the capacitor in the black
box from the time derivative of the voltage on the black box.
Ic =
dQ
dt
=
dQ
dV
dV
dt
= C(V )V̇
There are several ways to determine the capacitance used in
the black box based on chosen voltage.
• When the voltage on the black box is close to zero, the
current through the nonlinear element is also close to
zero, because I(V = 0) = 0. After switching the current
source on, most of the input current I0 will at first go
through the capacitor.
C0 = I0/V̇↑(V = 0)
This can be measured more precisely after first reversing
the polarity of the current source and charging the capa-
citor backwards, because the multimeter does not display
derivatives when they change sharply (as in few moments
after switching the current source on).
Example measurements taken this way follow.
V↑(0) (mV/s) 3.51 3.32 3.55
C0 (F) 1.71 1.81 1.69
C0 = 1.74F
• When the voltage on the black box is Vmax, the current
through the nonlinear element is I0. Switching the cur-
rent source off, we will have the capacitor discharging
with the same current.
C0 = −I0/V̇↓(V = Vmax)
• We can also measure the capacitance for any intermediate
voltage as in A-iv.
iii. (2.2 pts) If we neglect the nonlinearity of the capacitor,
there are (at least) two ways to obtain the current–voltage char-
acteristic of the nonlinear element in the black box.
• Applying Kirchhoff’s I law to the charging capacitor,
I(V ) = Ic − C0V̇↑(V ).
An I(V ) characteristicobtained by charging the capacitor
is shown on the following figure.
• Applying Kirchhoff I law to the discharging capacitor,
I(V ) = −C0V̇↓(V ).
0 0.1 0.2 0.3 0.4 0.5
0
1
2
3
4
5
6
V (V)
I (mA)
Part A
Part B
iv. (2.6 pts) In order to obtain the differential capacitance,
we solve a system of linear equations by eliminating I(V ):
(
I0 = ˙ V↑C(V ) + I(V )
I(V ) = − ˙ V↓C(V );
=⇒ C(V ) =
I0
˙ V↑ − ˙ V↓
.
Therefore we need to take measurements during both charging
and discharging the capacitor in the black box at the same
voltages. A graph of measurement results follows.
— page 3 of 4 —0 0.1 0.2 0.3 0.4 0.5
1.7
1.75
1.8
1.85
1.9
1.95
2
2.05
2.1
V (V)
C (F)
Part B. Circuit with inductance (3 points)
Measuring and plotting the current–voltage characteristic of
the nonlinear element in the same way as in part A-iii, we
obtain a graph that differs only in the negative differential res-
istance (I′
(V ) < 0) region, in our case 70mV < V < 330mV.
This is the region where, when we look at small-signal oscil-
lations, the nonlinear element behaves as a negative-valued
Ohmic resistance. After enabling the inductance we have a
LC circuit whose oscillations are amplified (instead of being
dampened) by the negative differential resistance. Because the
resonant frequency ω =
q
1
LCp
∼ 30MHz (with Cp being the
capacitance of the nonlinear element) is high, we actually meas-
ure the average current through the nonlinear element, while
the real current oscillates all over the region of negative differ-
ential resistance.
— page 4 of 4 —
