---
id: ipho-2012-e-qe2
source: ipho
language: en
solution_language: en
translated: false
problem: ipho-2012-e-qe2
solution_type: official
source_document: solution-document-ipho-2012-e-s
source_pdf: cache/phoxiv/ipho/2012_E_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/ipho/2012_E_S.pdf."
---

Problem E2. Nonlinear Black Box (10 points)
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
— page 3 of 4 —
0 0.1 0.2 0.3 0.4 0.5
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
