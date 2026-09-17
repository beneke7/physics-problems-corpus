---
id: solution-document-izho-2012-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2012_E_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2012_E_S.pdf."
---

VIII International Zhautykov Olimpiad/Experimental Competition Page 1/10
SOLUTIONS FOR THE EXPERIMENTAL COMPETITION
Electric currents in volume
PART 1
1.1 The resistance of the resistor provided is equal 1 , 0 0 , 2 0 ± = R kΩ.
1.2 Since the resistorts are connected in series the same current flows through each of them, then the
following relation holds
x
x R
R
U
R
U
=
0
from which it follows that
R
x
x
U
U
R R 0 = . (1)
Thus, to measure an unknown resistance it is enough to
measure the voltage drops on the unknown resistance and the
resistor provided.
If the source voltage was stabilized, it would be sufficient to measure the voltage drop on just
one of them.
PART 2
2.1 The results of measurement of the voltage drops against the height of the water poured into the
vessel are presented in Table 1. This table also shows the calculated resistance of the water between
the electrodes (sзokes).
Note that the height was measured by the scale of the measuring glass.
Table 1. Dependence of the resistivity on the height of the water level.
h, div. 100/ h, div1
x U , V R U , V R , kΩ 1/ R, kΩ-1
30 3,33 3,82 1,08 7,07 0,14
40 2,50 3,60 1,30 5,54 0,18
50 2,00 3,36 1,54 4,36 0,23
60 1,67 3,17 1,73 3,66 0,27
70 1,43 3,01 1,89 3,19 0,31
80 1,25 2,84 2,06 2,76 0,36
90 1,11 2,69 2,21 2,43 0,41
100 1,00 2,59 2,31 2,24 0,45
110 0,91 2,48 2,42 2,05 0,49
120 0,83 2,38 2,52 1,89 0,53
130 0,77 2,30 2,60 1,77 0,57
140 0,71 2,22 2,68 1,66 0,60
150 0,67 2,16 2,74 1,58 0,63
160 0,63 2,08 2,82 1,48 0,68
170 0,59 2,03 2,87 1,41 0,71
180 0,56 1,96 2,94 1,33 0,75
190 0,53 1,93 2,97 1,30 0,77
200 0,50 1,86 3,04 1,22 0,82
210 0,48 1,80 3,10 1,16 0,86
220 0,45 1,76 3,14 1,12 0,89VIII International Zhautykov Olimpiad/Experimental Competition Page 2/10
The graph of the obtained dependence is shown in the figure below.
Simple measurement can easily show that the volume 0 200 V = ml corresponds to the height
0 170 h = mm.Therefore, the height of the water poured is calculated by the formula
0
0
V
h
V h = , i.e.the
the division value of the scale is 0,85 δ = mm/ml.
2.2 The current distribution is schematically shown in the figure on
the right.
The current flows between the lateral surfaces of the
spokes, thus the height of water level determines an effective
cross-sectional area.
2.3 It is therefore reasonable to assume that the resistance of water
between the spokes is inversely proportional to the height of water
level
h
A
Rx = 0 , (2)
where A is a constant meaning the water resistance of the unit of height. Then, the measured
resistance should be described by the formula
B
h
A
Rx + = , (3)
where B is a constant denoting the additional resistance (of contacts, of an oxide layer on the surface
of the spokes, etc.).
2.4 To check the validity of formula (3) it is sufficient to plot the dependence of the resistance on the
inversed height of the water column h / 1 . That is, the linear dependence should be observed for the
following values:VIII International Zhautykov Olimpiad/Experimental Competition Page 3/10
h
x
R y
1
=
=
. (4)
A graph of this function is shown in the figure below.
The parameters of this linear dependence, calculated by the mean square method
( )
( )
210 3 kΩ div
0,17 0,03 kΩ
a
b
= ± ⋅
= ±
(5)
To determine the parameters in relation (3) it is necessary to recalculate (5) from divisions of the
scale to millimeters. Thus, we get
kΩ
( )
( )
178 2
0,17 0,03
A a k mm
B b k
δ = ⋅ = ± Ω⋅
= = ± Ω
. (6)
Note. Although it is possible to use the linearization of the type
A
h
R
=
1
, but this leads to worse
results, since it ignores the additional resistance of the circuit.VIII International Zhautykov Olimpiad/Experimental Competition Page 4/10
PART 3
3.1 In order to measure the distance between the spokes it is easier to
measure the length of the arc l between the spokes using the marks made
on a strip of the adhesive tape. Then the distance between the spokes can
be calculated using the geometric formula
D
l
D L sin = , (7)
where 40mm D = is the diameter of the measuring glass.
The measurement results of the water resistance on the distance
between the spokes are shown in Table 2.
Table 2.
l, cm L, cm Ux, V UR, V R, kΩ L ln
1 0,990 1,29 3,62 0,713 -0,010
2 1,918 1,45 3,38 0,858 0,651
3 2,727 1,59 3,34 0,952 1,003
4 3,366 1,62 3,27 0,991 1,214
5 3,796 1,64 3,23 1,015 1,334
6 3,990 1,65 3,2 1,031 1,384
The graph of the obtained dependence is presented in the figure below.
3.2 It is theoretically possible to show that the resistance of the medium between two long parallel
electrodes in an infinite medium is given by
0
ln
r
L
h
R
π
ρ
= , (8)
where h is the length of the electrodes (spokes), 0 r is their radius.VIII International Zhautykov Olimpiad/Experimental Competition Page 5/10
We can assume that in this case the water resistance between the electrodes depends linearly on the
logarithm of the distance between them, that is,
( ) B L A L R + = ln . (9)
3.3 To check the feasibility of (9) it is necessary to plot the dependence of the resistance on the
logarithm of the distance L ln . That is the linear dependence should be observed for the following
values:
L x
R y
ln =
=
. (10)
This graph is shown in the figure below which confirms assumption (9).
The parameters of this linear dependence, calculated by the least square method, are found as
follows
( )
( )
0,23 0,01
0,71 0,01
a k
b k
= ± Ω
= ± Ω
(11)
It is obvious that the value of the parameter b depends on the unit of distance L. In this case,
values in (11) correspond to the parameters in (9).
PART 4
4.1 The results of the resistance measurements depending on the height of the second spoke in water
are shown in Table 3. In this case, to measure the height one has to make use of the scale of the
measuring glass, so as the units are milliliters.
Table 3
l,ml Ux, V UR, V R, kΩ
20 3,85 1,05 7,3
40 3,96 0,94 8,4
60 4,06 0,84 9,7
80 4,14 0,76 10,9
100 4,20 0,70 12,0
120 4,25 0,65 13,1
140 4,31 0,59 14,6VIII International Zhautykov Olimpiad/Experimental Competition Page 6/10
160 4,35 0,55 15,8
180 4,38 0,52 16,8
200 4,40 0,50 17,6
220 4,44 0,46 19,3
240 4,47 0,43 20,8
The graph of this dependence is shown in the figure below.
4.2 Approximate distribution of currents in this case is shown in the figure on
the right.
4.3 In this case the distance between the spokes plays the role of the effective
length of a conductor, so the water resistance between the spokes in this case
is approximately linearly dependent on l, which is confirmed by the
experimental data. Additional resistance may be due to a limitation of
currents near the tips of the spokes.
Thus, this dependence is described by
b al Rx + = . (12)
4.4 According to the obtained experimental data, the linear dependence holds at all distances l.
Deviations from linearity are possible at small and large values of l. However, in the range of values
[ ] 150 , 50 ∈ l the dependence is definetly linear.
The parameters in (12), calculated by the least square method, are found as
( )
( )
0,060 0,002 /div.
6,0 0,3
a k
b k
′ = ± Ω
= ± Ω
(13)
If the height h is measured in millimeters, then the valueof the coefficient a is
( ) 0,071 0,002 kΩ/mm a = ± . (14)VIII International Zhautykov Olimpiad/Experimental Competition Page 7/10
Part 5
5.1 In order to estimate the specific water resistivity it is preferable to use data from Part 4.The
linearity of the dependence obtained indicates that in the middle the stream lines are approximately
parallel to the vessel walls. It is also possible to assume that in this region the current flows through
the entire cross section of the vessel. Consequently, we can use the formula for the resistance
presented in this problem.
The obtained value of the slope (14) is the resistance of one millimeter of the water column,
which makes it possible to evaluate its specific electrical resistivity
0
0
h
V
a aS
S l
R
a = = ⇒ =
∆
∆
= ρ
ρ
. (7)
On substituting numerical values we get
3 6 3
0
3 3
0
10 200 10 m
0,071 83 m
10 m 170 10 m
V
a
h
ρ
−
− −
Ω ⋅
= = ⋅ ≈ Ω⋅
⋅
(8)
Grading scheme for Experimental Competition
If the resistance measurements were carried out in an ohmmeter mode of the multimeter, all
the points for the measurement results are reduced by two times!
In the table below italics indicates grading for alternative solutions.
N Content total points
1.1 Resistance 0 2,0 0,1 R = ± kΩ 0,2 0,2
1.2 Formula (1) 0,3 0,3
2.1 Measurements of the experimental data and plotting the graph
(reasonable values have been obtained for the resistance in the
range from 1 to 10 kΩ. Otherwise no points are given)
2,5
Measurements made in the range that include more than
180 divisions of the scale (max-min);
in the range that includes more than 150 divisions;
in the range that includes more than 100 divisions;
less than 100 divisions;
0,75
(0,5)
(0,25)
(0)
Number of experimental points: 10 and more;
7-9;
5-6;
less than 5
0,75
(0,5)
(0,25)
(0)
Resistance values are correctly calculated for each measured
point
0,25
Monotonically decreasing dependence is obtained;
the resistance changes at least 5 times;
resistance varies less than 5 times;
0,25
(0)
Plot is made
- size of plot is not less than 1/4 of sheet;
- axes are denoted by units, digits are indicated;
- all table data points are correctly drawn in a plot;
- smooth line passing through the points is shown;
0,1
0,1
0,2
0,1
2.2 Streamlines are shown in the figures 0,5
In the plane of the spokes: straight lines are perpendicular to
the spokes (slight distortion might appear near the bottom
0,25VIII International Zhautykov Olimpiad/Experimental Competition Page 8/10
and the top of the vessel);
In the perpendicular plane: convex symmetric lines between
the electrodes filling most of the cross-section;
0,25
2.3 Form of dependence 0,8
- Inverse proportionality;
(otherwise no points are given)
0,6
- There is a constant component for the resistance; 0,2
2.4 Linearization and determination of parameters 1,2
Type of relationship:
- Dependence ( ) 1/ R h ;
- Dependence ( ) 1
R h −
, or in a double logarithmic scale;
- Other;
0,2
(0,1)
(0)
Plotting the graph of the linearized dependence
- All points are plotted;
- Smoothing line through the points is shown
0,2
0,2
- Correct evaluation of the parameters of the
linearized dependence
( ) 200 30% ± kΩ∙div step, or ( ) 180 30% ± kΩ∙mm
- if the deviation is of 30% to 75% - the grade is twice less;
- if there is a large deviation, no points are given)
- By using Least Square Method;
- By using plot (or by using all points);
- By using two points;
0,4
(0,2)
(0,1)
Calculation of the height measured in units of length (mm or
cm)
- Measuring and calculation of the division value of the scale
(correct)
- Calculation of the slope
(if all the previous calculations in units of length)
0,1
0,1
(0,1)
3.1 Measurements and ploting of the experimental data (reasonable
values for the resistances in the range of 0.5 to 2
kΩ, otherwise no points are given)
1,5
Measurement of the distance between the spokes:
- An arc of a circle with calculations;
- Direct measurement by a ruler;
0,2
(0,1)
- Measured in the range of 1 to 4 cm
- (Otherwise nopoints are given);
0,3
- Number of points − 6 or more;
- Number of points − 4 - 5;
- Less than 4
0,3
(0,2)
An increasing convex relationship is obtained 0,2
Plot is made
- size of a plot is not less than 1/4 of sheet;
- units of axes are stated, digits are indicated;
- all table data points are correctly drawn in a plot;
- smooth line passing through the points is shown;
0,1
0,1
0,2
0,1
3.2 Form of dependence 1
Logarithmic dependence
There is constant contribution in the dependence;
0,7
0,3VIII International Zhautykov Olimpiad/Experimental Competition Page 9/10
Some other reasonable convex increasing dependence (0,3)
3.3 Linearization and determination of parameters 1
- Dependence ( ) ln R L ;
- Other reasonable linearization in accordance with the formula
3.2
0,4
(0,2)
Plotting the graph of the linearized dependence
- All points are plotted;
- Smoothing line is shown;
0,1
0,1
Parameters:
(slope is in the range ( ) 0,2 30% a = ± kΩ;
- if the deviation of 30% to 75% the grading points are twice
less;
- if there is a large deviation, no points are given)
- By using Least Square Method;
- By using plot (or by using all points);
- By using two points;
0,4
(0,2)
(0,1)
4.1 Measurements of the experimental data and plotting the graph
(reasonable values have been obtained for the resistance in the
range of 5 to 30 kΩ. Otherwise no points are given)
2,4
Measurements are made in the range of more than
180 divisions of the scale (max-min);
in the range of more than 150 divisions;
in the range of more than 100 divisions;
less than 100 divisions;
0,75
(0,5)
(0,25)
(0)
Number of experimental points: 10 and more;
7-9;
5-6;
less than 5
0,75
(0,5)
(0,25)
(0)
Resistance values are correctly calculated for each measured
point
0,2
Monotonically increasing dependence is obtained; there is
linear part in the plot
No linear part in the plot
0,3
(0,1)
Plot is made
- units of axes are stated, digits are indicated;
- all table data points are correctly drawn in a plot;
- smooth line passing through the points is shown;
0,1
0,2
0,1
4.2 Sketch of streamlines 0,3
Lines - start from the open end of the spoke;
- go straight up;
- are distributed along the length of second spoke;
0,1
0,1
0,1
4.3 Form of the dependence 0,4
- there is term proportional to l;
- there is a constant component;
(other than linear types of dependence are not accepted);
0,2
0,2
4.4 Linearity interval 0,1
- interval is shown (deviations near the ends of interval
measurement are allowed)
0,1
4.5 Parameters 0.8VIII International Zhautykov Olimpiad/Experimental Competition Page 10/10
- Correct evaluation of the linearized dependence: the slope
(( ) 0,060 30% ± kΩ/div or ( ) 0,07 30% ± ) kΩ/mm
-if deviations are from 30% to 75% the grade pointa are twice
less;
- if there is a large deviation, no points are given)
- By using Least Square Method;
- By using plot (or by using all points);
- By using two points;
0,6
(0,4)
(0,2)
- Constant component of the resistance:
- In the range 4 - 10 kΩ
- In the range of 2 - 4 kΩ or 10-12 kΩ;
- Otherwise no grade points;
0,2
(0,1)
5.1 The calculation of the specific resistivity of water 2
- Dependence from Part 4 is taken;
- Other reasonable dependence (with a correct formula for
the resistance);
0,3
(0,1)
Equation (7) is used to calculate the resistance by using:
- The slope of the graph;
- (using 1 - 2 points for calculation);
0,4
(0,2)
The calculation of the specific resistance (80 Ω∙m):
- Values in the range 60-100 Ω∙;
- Values in the range 40-120 Ω∙;
- Values in the range 20 - 150 Ω∙;
- Otherwise zero grade points.
1,3
(1,0)
(0,5)
