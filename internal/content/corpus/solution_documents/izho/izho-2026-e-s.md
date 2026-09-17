---
id: solution-document-izho-2026-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2026_E_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2026_E_S.pdf."
---

XXII International Zhautykov Olympiad/Experimental competition с. 1/12
SOLUTION TO THE EXPERIMENTAL COMPETITION
Torsion: Construction of the Potential Curve
Part 1. Theoretical Introduction
1.1 The kinetic energy of a rotating rod is given by the formula
𝐸 =
𝐼𝜔2
2
. (1)
Here 𝐼 =
𝑚1𝑎2
12
+ 2𝑚2
ℎ2
4
is the moment of inertia of the rod with respect to the rotation axis (where 𝑎 is the
length of the rod and ℎ is the distance between the threads), and 𝜔 = 2𝜋𝑉 is the angular velocity of the rod
(𝜔 is the rotation frequency).
Therefore,
𝐸 = 𝜋2
(
𝑚1𝑎2
6
+ 𝑚2ℎ2
)𝑉2
(2)
At 𝑉 = 1 s−1
, the energy of the rod is equal to the unit of energy sought. Here and in what follows, it is
assumed that the energy associated with the vertical velocity of the rod can be neglected in comparison with
the energy of rotational motion. According to the measurement results, 𝑎 = 25cm, ℎ = 15cm, and the mass
values are given in the problem statement. Therefore,
1 𝐾𝑢 ≈ 6.35 ∙ 10−3
J. (3)
1.2 Let us calculate the derivative of the proposed dependence of time on the coordinate, 𝑡(𝑘) = 𝐴𝑘𝛼
, with
respect to 𝑘, taking into account that the coordinate is the number of turns 𝑘 (not necessarily an integer):
𝑉(𝑘) =
𝑑𝑘
𝑑𝑡
=
𝑘1−𝛼
𝛼𝐴
, (4)
𝐸(𝑘) = 𝑉2
= (
𝑘1−𝛼
𝛼𝐴
)
2
. (5)
1.3 Let us express the angular velocity of the rod from the law of energy conservation:
𝑉2
= 𝑈(𝑁) − 𝑈(𝑘). (6)
The unwinding time can be calculated using the following formula:
𝑇 = ∫
𝑑𝑘
𝑉(𝑘)
𝑁
0
. (7)
Introducing a change of the integration variable,
𝜉 =
𝑁−𝑘
𝑁
(8)
and using the dependence 𝑈(𝑁) = 𝐵𝑁𝛽
, we obtain
𝑇(𝑁) = 𝑁1−
𝛽
2√
1
𝐵
∫
𝑑𝜉
√1−𝜉𝛽
1
0
. (9)
The integral in this expression does not depend on the value of 𝑁; it depends only on the exponent 𝛽.
Therefore, the dependence of the unwinding time on the number of turns is given by the formula 𝑇(𝑁) =
𝐺𝑁𝛾
, in which the exponent is
𝛾 = 1 −
𝛽
2
. (10)
Part 2. Study of the Law of Motion
2.1-2.2 The results of the measurements and the required calculations are presented in Table 1.
k t, s V, s-1
E, Ku
ln k ln t
E, Ku
(exp.) (theor.)
0 0 0 0
3 9,55 0,391 0,153 1,099 2,257 0,213
6 15,35 0,568 0,323 1,792 2,731 0,330
9 20,11 0,662 0,438 2,197 3,001 0,427
12 24,42 0,725 0,525 2,485 3,195 0,512
15 28,39 0,774 0,599 2,708 3,346 0,590
18 32,17 0,803 0,645 2,890 3,471 0,662XXII International Zhautykov Olympiad/Experimental competition с. 2/12
21 35,86 0,823 0,677 3,045 3,580 0,729
24 39,46 0,838 0,702 3,178 3,675 0,794
27 43,02 0,852 0,726 3,296 3,762 0,855
30 46,5 3,401 3,839 0,914
The figure below shows the graph of the coordinate as a function of time.
2.3 able 1 shows the values of the rod’s velocities 𝑉, calculated using the formula given in the problem
statement. The kinetic energy values were calculated using the formula 𝐸 = 𝑉2
.
2.4 The graph of the resulting dependence is shown in the figure (No. 1).
2.5 he potential energy at the specified zero level is
0
3
6
9
12
15
18
21
24
27
30
33
0 5 10 15 20 25 30 35 40 45 50 55 60
t, s
kXXII International Zhautykov Olympiad/Experimental competition с. 3/12
𝑈(𝑘) = −𝐸(𝑘). (11)
2.6 The graph of the dependence of the motion time on the number of turns is shown in the figure below,
plotted on a logarithmic scale.
2. 7 The coefficients of this dependence, ln𝑡 = 𝛼 ln𝑘 + ln𝐴, calculated using the least squares method, are
𝛼 = 0.684 ± 0.006, (12)
ln𝐴 = 1.50 ± 0.02. (13)
The calculation of the parameter 𝐴 and its error yields
𝐴 = exp(ln𝐴) = 4.48 Ku, (14)
∆𝐴 = 𝐴∆(ln𝐴) = ±0.07 𝑲𝒖. (15)
2.8-2.9 To calculate the kinetic energy, use formula (5) with the obtained numerical values of the
parameters. The results of the calculations are presented in Table 1 and on the graph from Section 2.4,
labeled as No. 2.
Part 3. Step-by-Step Probing
3.1-3.5 The results of the measurements, calculations, graphs, and the final result (calculated value of the
energy change 𝐸5−10) for each interval are presented below.
The values of the parameter 𝛼are calculated as the slope of the graph:
𝛼 =
∆(ln𝑡)
∆(ln𝑘)
. (16)
It is convenient to take the values of the extreme points on the graph (the points where the line intersects
the graph boundaries), denoted as 𝑧min and 𝑧max, while Δ(ln 𝑘) = 2.5.
The value of the parameter ln𝐴 corresponds to the coordinate of the intersection of the line with the
ordinate axis.
To calculate the change in kinetic energy, the following formula is used:
𝐸5−10 = (
101−𝛼
𝛼𝐴
)
2
− (
51−𝛼
𝛼𝐴
)
2
= (
51−𝛼
𝛼𝐴
)
2
(41−𝛼
− 1). (17)
y = 0,684x + 1,500
2,0
2,2
2,4
2,6
2,8
3,0
3,2
3,4
3,6
3,8
4,0
0,0 1,0 2,0 3,0
ln k
ln tXXII International Zhautykov Olympiad/Experimental competition с. 4/12
Interval 35-25
𝑘 𝑡, s ln𝑘 ln𝑡
0 0,00
1 4,14 0,000 1,421
2 6,96 0,693 1,940
3 9,19 1,099 2,218
4 11,29 1,386 2,424
5 13,17 1,609 2,578
6 14,94 1,792 2,704
7 16,60 1,946 2,809
8 18,09 2,079 2,895
9 19,63 2,197 2,977
10 21,04 2,303 3,046
zmax= 3,18
𝛼 = 0,672 zmin= 1,50
ln𝐴 = 1,500
𝐴 = 4,482
𝐸5−10 = 0,182 Ku
Interval 30-20
𝑘 𝑡, s ln𝑘 ln𝑡
0 0
1 4,43 0,000 1,488
2 7,43 0,693 2,006
3 9,92 1,099 2,295
4 11,96 1,386 2,482
5 13,94 1,609 2,635
6 15,71 1,792 2,754
7 17,47 1,946 2,860
8 19,06 2,079 2,948
9 20,61 2,197 3,026
10 22,09 2,303 3,095
zmax= 3,23
𝛼 = 0,664 zmin= 1,57
ln𝐴 = 1,570
𝐴 = 4,807
𝐸5−10 = 0,172 Ku
y = 0,6748x + 1,4938
1,0
1,2
1,4
1,6
1,8
2,0
2,2
2,4
2,6
2,8
3,0
3,2
3,4
3,6
0,0 0,5 1,0 1,5 2,0 2,5
ln k
ln t
y = 0,6654x + 1,5638
1,0
1,2
1,4
1,6
1,8
2,0
2,2
2,4
2,6
2,8
3,0
3,2
3,4
3,6
3,8
0,0 0,5 1,0 1,5 2,0 2,5
ln k
ln tXXII International Zhautykov Olympiad/Experimental competition с. 5/12
Interval 25-15
𝑘 𝑡, s ln𝑘 ln𝑡
0 0,00
1 4,73 0,000 1,554
2 7,85 0,693 2,061
3 10,44 1,099 2,346
4 12,69 1,386 2,541
5 14,73 1,609 2,690
6 16,59 1,792 2,809
7 18,41 1,946 2,913
8 20,20 2,079 3,006
9 21,87 2,197 3,085
10 23,48 2,303 3,156
zmax= 2,23
𝛼 = 0,680 zmin= 0,57
ln𝐴 = 1,600
𝐴 = 4,953
𝐸5−10 = 0,138 Ku
Interval 20-10
𝑘 𝑡, s ln𝑘 ln𝑡
0 0
1 5,01 0,000 1,611
2 8,38 0,693 2,126
3 11,19 1,099 2,415
4 13,67 1,386 2,615
5 15,92 1,609 2,768
6 17,98 1,792 2,889
7 19,99 1,946 2,995
8 21,86 2,079 3,085
9 23,61 2,197 3,162
10 25,39 2,303 3,234
zmax= 3,30
𝛼 = 0,672 zmin= 1,60
ln𝐴 = 1,680
𝐴 = 5,366
𝐸5−10 = 0,127 Ku
y = 0,6751x + 1,6012
1,0
1,2
1,4
1,6
1,8
2,0
2,2
2,4
2,6
2,8
3,0
3,2
3,4
3,6
3,8
0,0 0,5 1,0 1,5 2,0 2,5
ln k
ln t
y = 0,673x + 1,6844
1,0
1,2
1,4
1,6
1,8
2,0
2,2
2,4
2,6
2,8
3,0
3,2
3,4
3,6
3,8
0,0 0,5 1,0 1,5 2,0 2,5
ln k
ln tXXII International Zhautykov Olympiad/Experimental competition с. 6/12
Interval 15-5
𝑘 𝑡, s ln𝑘 ln𝑡
0 0
1 5,55 0,000 1,714
2 9,28 0,693 2,228
3 12,33 1,099 2,512
4 15,08 1,386 2,713
5 17,53 1,609 2,864
6 19,86 1,792 2,989
7 22,04 1,946 3,093
8 24,13 2,079 3,183
9 26,07 2,197 3,261
10 28,05 2,303 3,334
zmax= 3,47
𝛼 = 0,676 zmin= 1,78
ln𝐴 = 1,780
𝐴 = 5,930
𝐸5−10 = 0,100 Ku
Interval 10-0
𝑘 𝑡, s ln𝑘 ln𝑡
0 0
1 6,48 0,000 1,869
2 10,74 0,693 2,374
3 14,16 1,099 2,650
4 17,16 1,386 2,843
5 19,94 1,609 2,993
6 22,44 1,792 3,111
7 24,84 1,946 3,212
8 27,08 2,079 3,299
9 29,28 2,197 3,377
10 31,23 2,303 3,441
zmax= 2,57
𝛼 = 0,648 zmin= 0,95
ln𝐴 = 1,950
𝐴 = 7,029
𝐸5−10 = 0,094 Ku
y = 0,6765x + 1,7759
1,0
1,2
1,4
1,6
1,8
2,0
2,2
2,4
2,6
2,8
3,0
3,2
3,4
3,6
3,8
0,0 0,5 1,0 1,5 2,0 2,5
ln k
ln t
y = 0,6498x + 1,9472
1,0
1,2
1,4
1,6
1,8
2,0
2,2
2,4
2,6
2,8
3,0
3,2
3,4
3,6
3,8
0,0 0,5 1,0 1,5 2,0 2,5
ln k
ln tXXII International Zhautykov Olympiad/Experimental competition с. 7/12
3.6 The final table is as follows:
Upper
boundary 𝑁
Lower
boundary 𝑁
𝐸5−10,
Ku
𝑁 𝑘 𝐸(𝑘)
35 25 0,182 0 0
30 20 0,172 30 5 0,182
25 15 0,138 25 10 0,354
20 10 0,127 20 15 0,492
15 5 0,100 15 20 0,619
10 0 0,094 10 25 0,719
5 30 0,814
The values of 𝐸(𝑘)were obtained by stepwise summation:
𝐸0 = 0
𝐸(𝑘 + 5) = 𝐸(𝑘) + 𝐸5−10
. (18)
The graph of this dependence, labeled No. 3, is shown on the graph from Section 2.4.
Part 4. Unwinding Time
4.1 The table of measurement results is shown below:
N T, s ln N ln T 𝑁 𝑘 𝐸(𝑘)
30 47,63 3,40 3,86 0 0,000
25 45,30 3,22 3,81 30 5 0,149
20 42,62 3,00 3,75 25 10 0,294
15 37,25 2,71 3,62 20 15 0,436
10 30,81 2,30 3,43 15 20 0,572
5 21,65 1,61 3,07 10 25 0,702
5 30 0,814
4.2. To estimate the error in the measurement of the unwinding time, several measurements must be
performed. The random error is calculated strictly using the formula
∆𝑇 = 𝑡𝑛,𝑝√
∑ (𝑥𝑖−〈𝑥〉)2 𝑛
𝑖=1
𝑛(𝑛−1)
(19)
and amounts to a few hundredths of a second.
4.3 The graph of the dependence of the unwinding time on the initial number of turns is shown in the figure.
y = 0,4473x + 2,3811
3,0
3,2
3,4
3,6
3,8
4,0
1,5 2,0 2,5 3,0 3,5
ln N
ln TXXII International Zhautykov Olympiad/Experimental competition с. 8/12
4.4 The value of the exponent can be determined either from the graph or by the least squares method. Its
value is
𝛾 = 0.45. (20)
4.5 The exponent in the formula for the potential energy is
𝛽 = 2(1 − 𝛾) = 1.10. (21)
4.6 To calculate the kinetic energy, perform the following steps:
a) Using the formula 𝑈′
= 𝑁𝛽
, calculate the values of the potential energy;
b) Using these values, calculate the values of the kinetic energy (up to a constant factor):
𝐸′(𝑘) = 𝑈′(30) − 𝑈′(𝑁 − 𝑘). (22)
в) Normalize the energy:
𝐸(𝑘) =
𝐸(30)
𝐸′(30)
𝐸′(𝑘), (23)
where 𝐸(30) is the value of the kinetic energy found in Part 3 of the assignment (from our measurements,
𝐸(30) = 0.814).
The results of the calculations are presented in Table 4.1. The graph of this dependence, labeled No.
4, is shown on the graph from Section 2.4.XXII International Zhautykov Olympiad/Experimental competition с. 9/12
Marking scheme
Correct calculations using incorrect formulas will not be graded!
Incorrect rounding will result in a penalty (-0.2 points).
Part Content Points
Total
for part
Part 1 Theoretical Introduction
1.1
Formula (2): 𝐸 = 𝜋2
(
𝑚1𝑎2
6
+ 𝑚2ℎ2
)𝑉2 0,2
0,5 Measured: 𝑎 = (25 ± 1)sm and ℎ = (15 ± 1) sm 0,2
Numerical value in formula (3): 1 𝐾𝑢 ≈ 6.35 ∙ 10−3
J 0,1
1.2
Formula (4): 𝑉(𝑘) =
𝑘1−𝛼
𝛼𝐴 0,3
0,5
Formula (5): 𝐸(𝑘) = (
𝑘1−𝛼
𝛼𝐴
)
2
0,2
1.3
Integral (7): 𝑇 = ∫
𝑑𝑘
𝑉(𝑘)
𝑁
0 0,2
0,6 Formula (9): 𝑇(𝑁) = 𝑁1−
𝛽
2√
1
𝐵
∫
𝑑𝜉
√1−𝜉𝛽
1
0 0,3
Exponent in formula (10): 𝛾 = 1 −
𝛽
2
0,1
Part 2. Study of the Law of Motion
2.1
Measurements are made 0,1х10
within the interval 10% 0,1х10
(within the interval 20% 0,05х10)
1 1
Parts 2.2 – 2.4 and 2.6 – 2.9 are graded only if part 2.1 is graded
2.2
Plotting graph 𝑘(𝑡):
0,3 the data points are plotted according to the table. 0,2
smoothing curve is drawn 0,1
2.3 Calculations of the kinetic energy are performed 0,4 0,4
2.4
Plotting the graph 𝐸(𝑘)
0,3 the data points are plotted according to the table. 0,2
smoothing curve is drawn 0,1
2.5 Formula (11) for the potential energy: 𝑈(𝑘) = −𝐸(𝑘) 0,2 0,2
2.6
Plotting the graph ln𝑡 versus ln𝑘:
0,4
the logarithms of the times are calculated 0,1
the data points are plotted according to the table 0,2
best-fit straight line is drawn 0,1
2.7
Determination of the parameters of the dependence
0,9
LSM is used 0,2
numerical value within the range 𝛼 = 0,68 ± 0,05
(𝑤𝑖𝑡ℎ𝑖𝑛 𝑡ℎ𝑒 𝑟𝑎𝑛𝑔𝑒 𝛼 = 0,68 ± 0,10 − 0,1)
0,2
error Δ𝛼 0,1
numerical value within the range 𝐴 = 4,5 ± 0,3
(within the range 𝐴 = 4,5 ± 0,6 - 0,1)
0,2
Error of 𝐴 (formula → numerical value) 0,2
2.8 Calculation of the theoretical energy values of 𝐸(𝑘) 0,5
2.9
Plotting the graph 𝐸(𝑘)
(graded only if part.2.8 is graded)
0,3
the data points are plotted according to the table 0,2
smoothing curve is drawn 0,1XXII International Zhautykov Olympiad/Experimental competition с. 10/12
Part 3. Step-by-Step Probing
At all intervals, parts 3.2–3.5 are graded only if the measurement results of the corresponding
part 3.1 is graded.
Interval 35-25
3.1
Measurements are made
Within the range 10% - 0,3
(within the range 20% - 0,1)
0,3
3.2
Plotting the graph
0,2 the logarithms ln𝑡 are calculated 0,1
the data points are plotted according to the table 0,1
3.3 best-fit straight line is drawn 0,1
3.4
Calculation of the parameters
0,8
Formula for 𝛼: 𝛼 =
∆(ln𝑡)
∆(ln𝑘)
0,1
Formula for 𝐴: 𝐴 = exp(ln𝐴) 0,1
numerical value within the range 𝛼 = 0,67 ± 0,06
(within the range 𝛼 = 0,67 ± 0,10 - 0,1)
0,3
numerical value within the range 𝐴 = 4,5 ± 0,03
(within the range 𝐴 = 4,5 ± 0,06 - 0,1)
0,3
3.5
Calculation of energy
0,5 Formula (17): 𝐸5−10 = (
101−𝛼
𝛼𝐴
)
2
− (
51−𝛼
𝛼𝐴
)
2
= (
51−𝛼
𝛼𝐴
)
2
(41−𝛼
− 1) 0,2
numerical value within the range 𝐸5−10 = 0,18 ± 0,06
(within the range 𝐸5−10 = 0,18 ± 0,10 - 0,1)
0,3
Interval 30-20
3.1
Measurements are made
within the range 10% - 0,3
(within the range 20% - 0,1)
0,3
3.2
Plotting the graph
0,2 the logarithms ln𝑡 are calculated 0,1
the data points are plotted according to the table 0,1
3.3 best-fit straight line is drawn 0,1
3.4
Calculation of the parameters
0,6
numerical value within the range 𝛼 = 0,66 ± 0,06
(within the range 𝛼 = 0,66 ± 0,10 - 0,1)
0,3
numerical value within the range 𝐴 = 4,8 ± 0,03
(within the range 𝐴 = 4,8 ± 0,06 - 0,1)
0,3
3.5
numerical value within the range 𝐸5−10 = 0,17 ± 0,06
(within the range 𝐸5−10 = 0,17 ± 0,10 - 0,1)
0,3
Interval 25-15
3.1
Measurements are made
Within the range 10% - 0,3
(within the range 20% - 0,1)
0,3
3.2
Plotting the graph
0,2 the logarithms ln𝑡 are calculated 0,1
the data points are plotted according to the table 0,1
3.3 best-fit straight line is drawn 0,1
3.4
Calculation of the parameters
0,6
numerical value within the range 𝛼 = 0,68 ± 0,06
(within the range 𝛼 = 0,68 ± 0,10 - 0,1)
0,3
numerical value within the range 𝐴 = 4,95 ± 0,03 0,3XXII International Zhautykov Olympiad/Experimental competition с. 11/12
(within the range 𝐴 = 4,95 ± 0,06 - 0,1)
3.5
numerical value within the range 𝐸5−10 = 0,14 ± 0,06
(within the range 𝐸5−10 = 0,14 ± 0,10 - 0,1)
0,3
Interval 20-10
3.1
Measurements are made
Within the range 10% - 0,3
(within the range 20% - 0,1)
0,3
3.2
Plotting the graph
0,2 the logarithms ln𝑡 are calculated 0,1
the data points are plotted according to the table 0,1
3.3 best-fit straight line is drawn 0,1
3.4
Calculation of the parameters
0,6
numerical value within the range 𝛼 = 0,67 ± 0,06
(within the range 𝛼 = 0,67 ± 0,10 - 0,1)
0,3
numerical value within the range 𝐴 = 5,36 ± 0,03
(within the range 𝐴 = 5,36 ± 0,06 - 0,1)
0,3
3.5
numerical value within the range 𝐸5−10 = 0,13 ± 0,06
(within the range 𝐸5−10 = 0,13 ± 0,10 - 0,1)
0,3
Interval 15-5
3.1
Measurements are made
Within the range 10% - 0,3
(within the range 20% - 0,1)
0,3
3.2
Plotting the graph
0,2 the logarithms ln𝑡 are calculated 0,1
the data points are plotted according to the table 0,1
3.3 best-fit straight line is drawn 0,1
3.4
Calculation of the parameters
0,6
numerical value within the range 𝛼 = 0,67 ± 0,06
(within the range 𝛼 = 0,67 ± 0,10 - 0,1)
0,3
numerical value within the range 𝐴 = 5,93 ± 0,03
(within the range 𝐴 = 5,93 ± 0,06 - 0,1)
0,3
3.5
numerical value within the range 𝐸5−10 = 0,10 ± 0,06
(within the range 𝐸5−10 = 0,10 ± 0,10 - 0,1)
0,3
Interval 10-0
3.1
Measurements are made
Within the range 10% - 0,3
(within the range 20% - 0,1)
0,3
3.2
Plotting the graph
0,2 the logarithms ln𝑡 are calculated 0,1
the data points are plotted according to the table 0,1
3.3 best-fit straight line is drawn 0,1
3.4
Calculation of the parameters
0,6
numerical value within the range 𝛼 = 0,65 ± 0,06
(within the range 𝛼 = 0,65 ± 0,10 - 0,1)
0,3
numerical value within the range 𝐴 = 7,03 ± 0,03
(within the range 𝐴 = 7,03 ± 0,06 - 0,1)
0,3
3.5
numerical value within the range 𝐸5−10 = 0,09 ± 0,06
(within the range 𝐸5−10 = 0,09 ± 0,10 - 0,1)
0,3
3.6
Calculation of the energy dependence on the coordinate.
0,9 Formulas (18):
𝐸0 = 0
𝐸(𝑘 + 5) = 𝐸(𝑘) + 𝐸5−10
0,2
The energies are calculated. 0,4XXII International Zhautykov Olympiad/Experimental competition с. 12/12
Construction of Graph No. 3. 0,3
Part 4. Unwinding Time
4.1
Measurements are made 0,2х6
within the range 10% 0,2х6
(within the range 20% 0,1х6)
1,2
Parts 4.3–4.5 and 4.7 are graded only if the measurement results in part 4.1are graded
4.2
Estimation of the time measurement error
0,6
5–7 measurements are taken (acceptable error — 10%)
(3-4 measurements – 0,1)
0,3
average is calculated 0,1
error is estimated using any correct formula 0,2
4.3
Plotting the graph 𝑇(𝑁):
0,4
logarithms ln𝑇 are calculated 0,1
data points are plotted according to the table 0,2
best-fit straight line is drawn 0,1
4.4
exponent is obtained 𝛾 = 0,45 ± 0,03
(within the range 𝛾 = 0,45 ± 0,06 - 0,1)
0,3
4.5 The value is calculated 𝛽 = 2(1 − 𝛾) 0,2
4.6
Energy calculations
0,8
calculation procedure
calculation of the potential energy 0,1
calculation of the kinetic energy (22): 𝐸′(𝑘) = 𝑈′(30) − 𝑈′(𝑁 −
𝑘)
0,1
normalization according to Eq. (23): 𝐸(𝑘) =
𝐸(30)
𝐸′(30)
𝐸′(𝑘) 0,1
energy calculations are made 0,5
4,7 Plotting graph №4 0,3 0,3
TOTAL 20
