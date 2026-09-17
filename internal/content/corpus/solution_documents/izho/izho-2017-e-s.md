---
id: solution-document-izho-2017-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2017_E_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2017_E_S.pdf."
---

XIII International Zhautykov Olimpiad/Experimental Competition Page 1/7
SOLUTION TO THE EXPERIMENTAL COMPETITION
Torsion pendulum (15.0 points)
Part 1. Free small oscillations (5.0 points)
1.1 The measurement results showing the dependence of the oscillation period on the length of
threads are shown in Table 1. For each threads length the measurement are taken 3 times for 10
oscillations. The oscillation period is calculated as an average of the measured time.
Table 1.
l, sm 1 t , s 2 t , s 3 t , s , T s 2 2
, T s
61 48,19 48,02 48,34 4,82 23,22
49 43,57 43,31 43,81 4,36 18,98
39 38,56 38,34 38,37 3,84 14,76
28 33,1 32,94 32,78 3,29 10,85
19 26,44 27,03 26,62 2,67 7,13
10 18,91 19,35 19,22 1,92 3,67
1.2 By turning the bolts in a horizontal plane at a small angle  the threads
deviate from the vertical by a small angle  . The relationship between these
angles are geometrically found in the form
   
l
h
l
h
2 2
   , (1)
where l denotes the threads length and h stands for distance bewteen them.
Deviation from the vertical results in the following increase of the potential
energy
2 2
2 2
1
2
) cos 1 ( 





     


l
h
mgl mgl mgl U . (2)
The equation of energy conservation for the torsional oscillations is written as
const E
l
h
mgl
I
  






2 2
2 2
1
2


, (3)
where I designates the moment of inertia of the pendulum.
The law of energy conservation (3) corresponds to the harmonic oscillations with the period
2
4
h
l
mg
I
T   . (4)
1.3 To verify the resulting formula the graph must be plotted of the square of the period on the
threads length (see Fig. 1.1). The obvious linear dependence proves the validity of the formula (4).
The coefficients of the linear dependence b l a T   2
, calculated using the least square method, are
obtained as
   
2
2
0,385 0,009 , 0,12 0,3
s
a b s
sm
     . (5)
Since b b  holds, the dependence is considered linear.XIII International Zhautykov Olimpiad/Experimental Competition Page 2/7
1.4 It follows from formula (4) that the period of oscillations can be expressed in terms of the radius
of gyration as follows:
l
g h
R
h
l
mg
mR
h
l
mg
I
T

 
4
4 4 2
2
2
   . (6)
Therefore, the slope found in 1.3 allows one to calculate the radius of gyration as
2
4
4,33
4
ag R
a R h sm
h g


 
       
 
. (7)
The distance between threads is measured as   2,8 0,1 h sm   .
The experimental error is calculated according to the formula
2 2 2 2
1 0,1 1 0,009
4,33 0,16
2 2,8 2 0,385
h a
R R sm
h a
         
             
       
. (8)
Part 2. Small oscillations with additional tension (5.0 points)
The results of measurements showing the dependence of the oscillation period on the therads tension
are shown in Table 2.
Table 2.
z, mm 1 t , s 2 t , s 3 t , s , T s 2 2
, T s  
12 10,22 10,28 10,40 1,03 0,94
20 7,10 7,03 7,18 0,71 1,98
27 5,63 5,62 5,69 0,56 3,14
37 4,53 4,50 4,53 0,45 4,89
52 3,75 3,88 3,87 0,38 6,81
1.3
y = 0,3851x - 0,1193
0
5
10
15
20
25
0 10 20 30 40 50 60 70
L, sm
T^2, sXIII International Zhautykov Olimpiad/Experimental Competition Page 3/7
2.2 Torque of the restoring force dependes on the threads tension F

and the twisting angle. Change in the tension force when twisting is
the correction of the higher order.
Therefore, the rotational equation of motion in this case has the form
  kF I     . (9)
Consequently, the period of those oscillations is inversely proportional
to the square root of the threads tension
,
C A
T
F z
  (10)
where A C, are some constant values.
2.3 To confirm this dependence the dependence ) ( 2
z T
should be plotted. Other ways of
linearization in this case are less reliable because when the bending z is measured, the constant
deviation is inevitable.
The graph of ) ( 2
z T
is shown in Fig. 2.3.
The resulting linear relationship confirms the theoretical conclusion that the period is a linear
function of the threads tension.
Part 3. Twisting at large angles (5.0 points)
3.1 Dependence of the untwisting time on the twisting angle is shown in Table 3 and Fig. 3.1.
2.3
0,00
1,00
2,00
3,00
4,00
5,00
6,00
7,00
8,00
0 10 20 30 40 50 60
z, mm
T^(-2), s^(-2)XIII International Zhautykov Olimpiad/Experimental Competition Page 4/7
Table 3.
N t, s
5 1,91
7 2,00
9 2,19
11 2,18
13 2,29
15 2,34
17 2,50
19 2,56
21 2,63
3.2 The untwisting time can be considered as a quarter of the oscillation period. Since the untwisting
time increases with the "amplitude", this means that the potential energy increases slower than in the
case of harmonic oscillations, i.e. . 2   .
3.3 The dependence of re-twisting half-turns 1 N on the initial twisting half-turns 0 N is shown in
Table 4 and in graph 3.3. The resulting dependence is practically independent of the threads tension.
Table 4.
mm z 35  mm z 20 
0 N 1 N 1 N
20 10,0 10,0
18 9,0 9,0
16 8,0 8,5
12 6,5 6,5
10 5,5 5,0
8 4,5 4,5
5 3,0 3,0
This dependence can be described by a linear function
84 , 0 46 , 0 0 1   N N . (11)
3.1
1,00
1,25
1,50
1,75
2,00
2,25
2,50
2,75
0 5 10 15 20 25
N
t, s
3.3 y= 0,46x+ 0,84
0,00
2,00
4,00
6,00
8,00
10,00
12,00
0 5 10 15 20 25
N0
N1XIII International Zhautykov Olimpiad/Experimental Competition Page 5/7
3.4-3.5 The dependencies of half-turns 1 N on the initial twisting angle 0 N at lifting/unlifting the
weight are summarized in Table 5 and in graph 3.4. These dependencies are linear. It is significant
that during the ascent without the additional weight the corresponding values of 1 N lie significantly
higher, indicating that the intake of energy appears during the weight unlifting. In addition, the last
relationship can not be exactly considered proportional.
Table 5.
С
грузом
Без
груза
0 N 1 N 1 N
20 8,0 10,0
18 7,0 9,0
15 5,5 8,0
13 4,0 7,5
10 2,5 6,0
8 1,0 5,5
These dependencies can be described by linear functions
5 , 2 37 , 0
5 , 3 58 , 0
0 1
0 1
 
 
N N
N N
. (12)
Marking scheme
Content Total Points
Part 1. Free small oscillations. 5
1.1 Marked only if the difference of measurements results from the
official ones does not exceed 25%
2
Number of different lengths of the pendulum:
5 or more (3-4; less than 3); 0,8(0,4;0)
The periods are measured by
10 oscillations or more (5-9; less than 5); 0,3(0,1;0)
The periods are calculated for all measurements; 0,2
The range of length of the pendulum
40 sm or more (30-40 sm, 20-30 sm; less than 20 см)
0,7
(0,5;0,3;0)
1.2 Derivation of the theoretical formula:
The exact formula is obtained 2
4
h
l
mg
I
T   ;
Only dependence l A T  is predicted (or wrong coefficient at l )
0,5
0,5
(0,2)
1.3 Marked only if the measurements in 1.1 have been marked!
Correct linearization ) ( 2
l T ,   l T ;
Another linearization   l T ln ln
Proved that the power is 1/2
1
0,5
(0,2)
(0,3)
Graph plotting (not linearized dependence is not marked):
- axis are named and ticked; 0,1
3.4
y= 0,58x- 3,46 y= 0,37x+ 2,45
0,0
2,0
4,0
6,0
8,0
10,0
12,0
0 5 10 15 20 25
N0
N1XIII International Zhautykov Olimpiad/Experimental Competition Page 6/7
- experimental data are drawn;
- the line is drawn;
0,1
0,1
The linear dependence is confirmed; 0,2
1.4 Marked only if the measurements in 1.1 have been marked!
The radius of gyration is calculated for all periods;
Only for 2 periods;
Only for 1 period;
1,5
0,3
(0,2)
(0,1)
The slope is found for the linearized dependence using:
Least square method;
From the graph;
0,2
(0,1)
The distance between the threads is measured
The accuracy is stated
0,1
0,1
Formula for calculation of the radius of gyration 0,1
Numerical value for the radius of gyration in the range:
4,2 – 4,4 sm (4,0 – 4,6 sm; out of range) 0,4(0,2;0)
Error evaluation:
- error for the slope;
- error for the distance between threads;
- final error;
0,1
0,1
0,1
Part 2. Small oscillations with additional tension 5
2.1 Marked only if the difference of measurements results from the
official ones does not exceed 50%
2
Number of different threads tensions:
5 or more (3-4; less than 3); 0,8(0,4;0)
The periods are measured by
10 oscillations or more (5-9; less than 5); 0,3(0,1;0)
The periods are calculated for all measurements; 0,2
The range of variation of the periods
Not less than 2,5 times (2,0 times, 1,5 times; less)
0,7
(0,5;0,3;0)
2.2 Derivation of the theoretical formula:
The dependence
F
A
T  is justified threads tension is taken
constant, the torque is proportional to F , the equation for
oscillations);
Simply stated that
F
A
T  (no proof is provided)
1
1,0 (0,3;
0,3; 0,4)
(0,2)
2.3 Marked only if the measurements in 2.1 have been marked!!
Correct linearization ) ( 2
z T
;
Another linearization 





z
T
1
The linearization   l T ln ln is used, Proved that the power is 1/2
2
1,0
(0,5)
(0,3+0,2)
Graph plotting (not linearized dependence is not marked):
- axis are named and ticked;
- experimental data are drawn;
- the line is drawn;
0,1
0,1
0,1
The linear dependence is confirmed; 0,7
Part 3. Twisting at large angles 5
3.1 Marked only if the difference of measurements results from the 1,0XIII International Zhautykov Olimpiad/Experimental Competition Page 7/7
official ones does not exceed 50%
Number of different values of N :
5 or more (3-4; less than 3); 0,4
(0,2;0)
The measurements are repeated 3 times; 0,1
Growing dependence of ) (N t is obtained 0,2
Graph plotting
(marked only if the measurements results have been marked):
- axis are named and ticked;
- experimental data are drawn;
- the line is drawn;
0,1
0,1
0,1
3.2 The power in potential energy
2  
Justification: U grows slowly than for harmonic oscillations
0,3
0,2
0,1
3.3 Marked only if the slope falls in the range 0,35-0,65 1,5
Number of different values of 0 N :
5 or more (3-4; less than 3); 0,5(0,2;0)
The measurements are repeated 3 times or more; 0,1
Growing linear dependence is obtained; 0,2
Graph plotting
(marked only if the measurements results have been marked):
- axis are named and ticked;
- experimental data are drawn;
- the line is drawn;
0,1
0,1
0,1
The linear function is proposed;
Numerical values for the parameters are found;
0,1
0,2
The slopes are equal for both threads tensions; 0,1
3.4 Marked only if the slope falls in the range 0,25-0,65 1
Number of different values of 0 N :
5 or more (3-4; less than 3);
0,3(0,1;0)
Growing linear dependence is obtained; 0,1
Graph plotting
(marked only if the measurements results have been marked):
- axis are named and ticked;
- experimental data are drawn;
- the line is drawn;
0,1
0,1
0.1
The linear function is proposed;
Numerical values for the parameters are found;
0,1
0,2
3.5 Marked only if the slope falls in the range 0,25-0,75 and there is a
shift of line up!
1,2
Number of different values of 0 N :
5 or more (3-4; less than 3); 0,4(0,2;0)
Growing linear dependence with the upper shift is obtained; 0,2+0,1
Graph plotting
(marked only if the measurements results have been marked):
- experimental data are drawn;
- the line is drawn;
0,1
0,1
The linear function is proposed;
Numerical values for the parameters are found;
0,1
0,2
