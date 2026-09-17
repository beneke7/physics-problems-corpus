---
id: solution-document-izho-2020-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2020_E_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2020_E_S.pdf."
---

XVI International Zhautykov Olimpiad/Experimental Competition Page 1/7
SOLUTION TO THE EXPERIMENTAL COMPETITION
Maxwell’s disk (15,0 points)
Part 1. Rolling down
1.1 The basic equation of the dynamics of rotational motion relative to the point of contact of the stick and
thread is written as
α sin
2
2
2
mgr
r
a
mr
mR
=  


 


+ , (1)
where R stands for the disc radius and r denotes the stick
radius.
The formula for the disc axis acceleration is thus
obtained as
2
sin .
1
1
2
g
a
R
r
α =
 
+  
 
(2)
1.2 To change and measure the angle that the threads make with the horizontal, it is necessary to shift up one
of the holders of the tripod to the height h. Therefore, the sine of the inclination angle is found as
L
h
= α sin , (3)
where L designates the threads’ length (in our experiment 70 L sm = ).
In this part, the measurements have been taken for 3,0 h sm = . It is necessary to put marks on the
threads at regular intervals and fix the travel time with a stopwatch. The difficulty is that in practice it is
difficult to release the disk from the first mark without an initial push, therefore the first mark is used as a
reference point, but the disk speed is thus not zero! The time dependence of the disc axis position is shown
in Table 1 and in Fig. 1.
Table 1.
x. см t, c x/t
0 0
5 5,24 0,95
10 8,44 1,18
15 11,57 1,30
20 14,25 1,40
25 16,90 1,48
30 19,34 1,55
The law of uniform acceleration has the form
( )
2
2
0
at
t v t x + = . (4)
Various methods can be used for linearization, but the following is preferred:
Fig. 1
0
5
10
15
20
25
30
35
0 2 4 6 8 10 12 14 16 18 20
t, s
x, smXVI International Zhautykov Olimpiad/Experimental Competition Page 2/7
t
a
v
t
x
2
0 + = . (5)
Fig. 2 shows a plot of the value
t
x
(actually, average speed) versus time t.
The approximate linearity of this dependence proves that the experimental law of motion can be
described by function (4).
The acceleration of the disk axis is equal to twice the value of the slope of this graph and it is
evaluated by the method of least squares to be equal to
2
0,081
sm
a
s
= . (6)
1.3 Similar measurements have to be carried out for other values of the inclination angles of the threads. The
corresponding results are shown in Table 2.
Table 2
h=5 sm h=7 sm h=9 sm h=11 sm
x. sm t, s x/t x. sm t, s x/t x. sm t, s x/t x. sm t, s x/t
0 0 0 0
5 4,66 1,07 5 3,53 1,42 5 3,30 1,52 5 3,38 1,48
10 7,51 1,33 10 5,81 1,72 10 5,24 1,91 10 5,32 1,88
15 9,95 1,51 15 7,94 1,89 15 7,14 2,10 15 6,92 2,17
20 12,28 1,63 20 9,70 2,06 20 8,73 2,29 20 8,36 2,39
25 14,23 1,76 25 11,26 2,22 25 10,10 2,48 25 9,45 2,65
30 16,10 1,86 30 12,84 2,34 30 11,46 2,62 30 10,89 2,75
Figure 3 shows the graphs of the dependences
t
x
on time t which are used to calculate the
experimental values of the accelerations.
Fig. 2
0,00
0,25
0,50
0,75
1,00
1,25
1,50
1,75
2,00
0 2 4 6 8 10 12 14 16 18 20
t, s
x/t, sm/sXVI International Zhautykov Olimpiad/Experimental Competition Page 3/7
Table 3 shows the accelerations calculated by the slope coefficients of the graphs and corresponding
theoretical values evaluated via formula (2). In the calculations, the following measured values are taken:
the disk diameter 85 D mm = and the stick diameter 3,0 d mm = . Fig. 4 shows graphs of the dependences of
the accelerations on the angle of threads inclination.
Table 3
h ,
sm
а,
theor.
sm/s2
а,
exper.
sm/s2
α sin
3 0,104 0,081 0,043
5 0,174 0,135 0,071
7 0,244 0,195 0,100
9 0,313 0,262 0,129
11 0,383 0,340 0,157
Part 2. Moving down
2.1 In this case, the travel time is small, therefore, measurements should be carried out for each coordinate
repeatedly. Table 4 lists the results of the time measurements needed for the disc to travel distance x,
averaged over 3 measurements. Fig. 5 demonstrates a graph of the obtained dependence.
Fig.3
0,0
0,5
1,0
1,5
2,0
2,5
3,0
0 5 10 15 20
t, s
x/t, sm/c
Fig. 4
0,00
0,05
0,10
0,15
0,20
0,25
0,30
0,35
0,40
0,00 0,02 0,04 0,06 0,08 0,10 0,12 0,14 0,16 0,18
sin a
a, sm/c^2XVI International Zhautykov Olimpiad/Experimental Competition Page 4/7
Table 4.
x, sm t, s x/t t2
0 0 0
5 2,11 2,37 4,45
10 2,95 3,39 8,70
15 3,58 4,19 12,82
20 4,03 4,96 16,24
25 4,56 5,48 20,79
30 4,96 6,05 24,60
To calculate the acceleration, we use
the previous methodology: we draw the
dependence
t
x
on t (Fig. 6) and find the
parameters of the linearized dependence.
The least squares calculations give the
following values of the coefficients of the
dependence b Kt
t
x
+ = :
( )
( )
s
sm
b
s
sm
K
3 , 0 40 , 0
07 , 0 30 , 1 2
± − =
± =
Then, the disc axis acceleration is found as
( ) 2
2,60 0,13 .
sm
a
s
= ± (7)
2.3 The formula for the acceleration is automatically obtained from formula
(2), in which 1 sin = α :
2
.
1
1
2
g
a
r
R
=
 
+  
 
(8)
The calculation using this formula gives the value of 2
44 , 2
s
sm
a = .
Part 3. Moving up
3.1 Threads should be wound such that when the threads tied to the load are
untwisted, the threads attached to the Maxwell disk are twisted. It is also
obvious that the threads with the load should be wound on a part of the stick
with a larger radius.
Fig. 5
0
5
10
15
20
25
30
35
0 1 2 3 4 5
t, s
x, sm
Fig. 6
0
2
4
6
8
0 1 2 3 4 5 6
t, s
x/t, sm/sXVI International Zhautykov Olimpiad/Experimental Competition Page 5/7
3.2 In this case, the beginning of the motion of the disk axis is easily recorded, so you can simply measure
the rise time to a fixed height and calculate the acceleration according to the formula:
2
2
2
2 t
H
a
at
H = ⇒ = . (9)
During the measurements, the following data shown in Table 5 (at 12 H sm = ) have been obtained.
Table 5
n 1 t , s 2 t , s 3 t , s t , s a 2
sm
s
1 2,07 2,13 2,23 2,14 5,22
2 1,6 1,56 1,63 1,60 9,41
Marking scheme
Content Total
points for
parts
Points
Part 1. Rolling down 8
1.1
Formula (2) α sin
2
1
1
2






+
=
R
r
g
a
0,3 0.3
1.2 Experimental setup is properly designed; appropriate data are
obtained by order of magnitude
0,5 0,5
The value of α sin is stated:
Measurement method;
Numerical value lies in the range of 0,04 – 0,2;
0,2
0,1
0,1
The dependence measurement
Marked only if α sin is in the range above,
Data deviation from the official solution is within 25%:
- range of coordinate measurement exceeds 20 sm (exceeds 10 sm,
less than 10 sm);
- number of data points 5 and more (4, less than 4);
- the nonlinear dependence is obtained which is close to parabolic;
1,2
0,5(0,3;0)
0,5(0,3;0)
0,2
Graph of ) (t x
(marked only if the corresponding data have been marked):
- axes are named and ticked;
- all data points are in the graph;
- smooth curve is plotted;
0,3
0,1
0,1
0.1
Analysis of the uniform acceleration model:
- the law of motion ( )
2
2
0
at
t v t x + = ;
- Without the initial velocity;
0,2
0.2
(0)
The analysis methodology:
- linearization t
a
v
t
x
2
0 + = ;
- calculation of velocities ) (t v ;
- linearization ) ( 2
t x ;
- acceleration calculation by 2-3 points;
1,0
1
(0,5)
(0.2)
(0.1)
Graph of the linearized dependence 0.3XVI International Zhautykov Olimpiad/Experimental Competition Page 6/7
(marked only if corresponding data have been marked):
- axes are named and ticked;
- all data points are in the graph;
- smooth curve is plotted;
0,1
0,1
0.1
Calculation of the acceleration (not marked if there is no unit);
- according to the linearized dependence (LSM, graph);
- by 2-3 points;
- by 1 point;
0,4
0,4
(0,2)
(0,1)
1.3 Acceleration dependence on the angle
Marked only if data deviation from the official solution is within
25%:
Sine of the angle is within the range 0,04 – 0,2 :
- number of angles taken is 4 or more (3, less than 3);
- number of data points in each dependence is 5 or more (3-4; less
than 3);
1,4
0,2
0,8(0,5;0)
0,4(0,2;0)
Acceleration calculation (for each point but no more than 4):
- linearization;
- by 1-3 points;
Calculation of α sin ;
1,0
0,2х4
(0,1х4)
0.2
Graph of the angle dependence of the acceleration (marked only if
corresponding data points have been marked):
- axes are named and ticked;
- all data points are in the graph;
- smooth curve is plotted;
0,3
0.1
0,1
0.1
1.4 Disc and stick radii are measured;
Correct formula is used for calculations;
Linear dependence is drawn;
Experimental data lie systematically below the theoretical curve;
0,9 0,2
0,1
0,1
0,5
Part 2. Moving down 4
Experimental setup is properly designed; appropriate data are
obtained by order of magnitude
0,5 0,5
2.1 Experimental data
Marked only if data deviation from the official solution is within
25%:
- the range of the coordinate measurements exceeds 20 sm
(exceeds 10 sm; less than 10);
- number of data points is 5 or more (3-4; less than 3);
- average is done by 3 or more repeatitions;
- the dependence close to parabolic is obtained;
1,5
0,5(0,3;0)
0,5(0,3;0)
0,3
0,2
Graph of ) (t x
(marked only if corresponding data have been marked):
- axes are named and ticked;
- all data points are in the graph;
- smooth curve is plotted;
0,3
0,1
0,1
0.1
2.2 Acceleration calculations (marked only if corresponding data have
been marked):
- linearization is used (allowed to use ) ( 2
t x ;
- acceleration is calculated using the linearized depemdence (by 1-
2 points);
- experimental error is calculated;
1,3
0,5
0,5
0,3
2.3 Correct formula for the acceleration is derived;
Numerical value is correctly evaluated;
0.4 0,2
0.2
Part 3. Moving up 3XVI International Zhautykov Olimpiad/Experimental Competition Page 7/7
3.1 Correct schematic figure for wounding the threads (threads are on
one side of the stick);
1
3.2 Time of moving up is measured (within the range of 0,7 – 3,0 s) 0,5х2
Accelerations are calculated (within 50% deviation from the
official solution)
0,5х2
Total 15
