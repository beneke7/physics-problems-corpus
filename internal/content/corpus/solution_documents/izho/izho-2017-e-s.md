---
id: solution-document-izho-2017-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2017_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2017_E_S.pdf."
---

XIII International Zhautykov Olimpiad/Experimental Competition                             Page 1/7



           SOLUTION TO THE EXPERIMENTAL COMPETITION

                                  Torsion pendulum (15.0 points)

                                Part 1. Free small oscillations (5.0 points)

1.1 The measurement results showing the dependence of the oscillation period on the length of
threads are shown in Table 1. For each threads length the measurement are taken 3 times for 10
oscillations. The oscillation period is calculated as an average of the measured time.

Table 1.
  l, sm      t1 , s    t2 , s       t3 , s   T,s       T 2 , s2
    61      48,19     48,02        48,34     4,82      23,22
    49      43,57     43,31        43,81     4,36      18,98
    39      38,56     38,34        38,37     3,84      14,76
    28       33,1     32,94        32,78     3,29      10,85
    19      26,44     27,03        26,62     2,67       7,13
    10      18,91     19,35        19,22     1,92       3,67

1.2 By turning the bolts in a horizontal plane at a small angle  the threads
deviate from the vertical by a small angle  . The relationship between these
angles are geometrically found in the form
                                  h                   h
                                      l     ,                       (1)
                                  2                  2l
where l denotes the threads length and h stands for distance bewteen them.
Deviation from the vertical results in the following increase of the potential
energy
                                                 2
                                                                    2
                                                     1     h 
                   U  mgl (1  cos  )  mgl      mgl   .                 (2)
                                                2    2      2l 
The equation of energy conservation for the torsional oscillations is written as
                                    I 2 1
                                                        2
                                                   h 
                                          mgl    E  const ,                                    (3)
                                     2      2       2l 
where I designates the moment of inertia of the pendulum.
The law of energy conservation (3) corresponds to the harmonic oscillations with the period
                                                       I l
                                           T  4           .                                        (4)
                                                      mg h2
1.3 To verify the resulting formula the graph must be plotted of the square of the period on the
threads length (see Fig. 1.1). The obvious linear dependence proves the validity of the formula (4).
The coefficients of the linear dependence T 2  a l  b , calculated using the least square method, are
obtained as
                                                  s2
                           a   0,385  0, 009      , b    0,12  0,3 s 2 .                    (5)
                                                  sm
Since b  b holds, the dependence is considered linear.


XIII International Zhautykov Olimpiad/Experimental Competition                                           Page 2/7



                                                         1.3
                                                                                  y = 0,3851x - 0,1193
           25

           20

           15

  T^2, s
           10

           5

           0
                0              10            20       30                     40       50           60         70
                                                               L, sm


1.4 It follows from formula (4) that the period of oscillations can be expressed in terms of the radius
of gyration as follows:
                                     I l         mR2 l      4R
                                T  4  2
                                           4          2
                                                                  l.                                               (6)
                                   mg h          mg h       h g
Therefore, the slope found in 1.3 allows one to calculate the radius of gyration as
                                              2
                              4 R                 ag
                          a            Rh             4,33sm .
                              h g 
                                                                                                                    (7)
                                                  4
The distance between threads is measured as h   2,8  0,1 sm .
The experimental error is calculated according to the formula
                                                                             2          2
                                  h   1 a 
                                         2        2
                                                         0,1   1 0, 009 
                          R  R             4,33                  0,16sm .                             (8)
                                  h  2 a             2,8   2 0,385 

                   Part 2. Small oscillations with additional tension (5.0 points)
The results of measurements showing the dependence of the oscillation period on the therads tension
are shown in Table 2.

Table 2.
  z, mm          t1 , s       t2 , s     t3 , s   T,s          T 2 , s 2
    12          10,22        10,28       10,40    1,03          0,94
    20          7,10         7,03        7,18     0,71          1,98
    27          5,63         5,62        5,69     0,56          3,14
    37          4,53         4,50        4,53     0,45          4,89
    52          3,75         3,88        3,87     0,38          6,81


XIII International Zhautykov Olimpiad/Experimental Competition                          Page 3/7

                                                                       
2.2 Torque of the restoring force dependes on the threads tension F
and the twisting angle. Change in the tension force when twisting is
the correction of the higher order.
Therefore, the rotational equation of motion in this case has the form
                                 I  kF .                        (9)
Consequently, the period of those oscillations is inversely proportional
to the square root of the threads tension
                                       C    A
                                T            ,                     (10)
                                       F     z
where C, A are some constant values.


2.3 To confirm this dependence the dependence T 2 ( z ) should be plotted. Other ways of
linearization in this case are less reliable because when the bending z is measured, the constant
deviation is inevitable.
The graph of T 2 ( z ) is shown in Fig. 2.3.


                                                       2.3

                   8,00
                   7,00
                   6,00




  T^(-2), s^(-2)
                   5,00
                   4,00
                   3,00
                   2,00
                   1,00
                   0,00
                          0   10             20              30          40        50           60
                                                         z, mm



The resulting linear relationship confirms the theoretical conclusion that the period is a linear
function of the threads tension.

                                   Part 3. Twisting at large angles (5.0 points)

3.1 Dependence of the untwisting time on the twisting angle is shown in Table 3 and Fig. 3.1.


XIII International Zhautykov Olimpiad/Experimental Competition                                              Page 4/7




Table 3.
   N          t, s                                                  3.1
    5        1,91
    7        2,00                2,75
    9        2,19                2,50
   11        2,18                2,25
   13        2,29                2,00
   15        2,34         t, s
                                 1,75
   17        2,50
                                 1,50
   19        2,56
   21        2,63                1,25
                                 1,00
                                        0            5          10                 15              20                25
                                                                          N



3.2 The untwisting time can be considered as a quarter of the oscillation period. Since the untwisting
time increases with the "amplitude", this means that the potential energy increases slower than in the
case of harmonic oscillations, i.e. .   2 .

3.3 The dependence of re-twisting half-turns N1 on the initial twisting half-turns N 0 is shown in
Table 4 and in graph 3.3. The resulting dependence is practically independent of the threads tension.

Table 4.

           z  35mm     z  20mm                                               3.3                y = 0,46x + 0,84

   N0          N1           N1                      12,00

   20         10,0         10,0                     10,00
   18          9,0          9,0                      8,00
   16          8,0          8,5                N1    6,00
   12          6,5          6,5                      4,00
   10          5,5          5,0                      2,00
    8          4,5          4,5
                                                     0,00
    5          3,0          3,0                             0   5             10             15            20          25
                                                                                        N0




This dependence can be described by a linear function

                                   N1  0,46 N 0  0,84 .                                                            (11)


XIII International Zhautykov Olimpiad/Experimental Competition                                            Page 5/7


3.4-3.5 The dependencies of half-turns N1 on the initial twisting angle N 0 at lifting/unlifting the
weight are summarized in Table 5 and in graph 3.4. These dependencies are linear. It is significant
that during the ascent without the additional weight the corresponding values of N1 lie significantly
higher, indicating that the intake of energy appears during the weight unlifting. In addition, the last
relationship can not be exactly considered proportional.

Table 5.
                                                                           3.4
           С          Без                          y = 0,37x + 2,45                              y = 0,58x - 3,46
           грузом     груза             12,0
 N0        N1         N1                10,0
      20        8,0        10,0          8,0
      18        7,0         9,0
                                   N1    6,0
      15        5,5         8,0
      13        4,0         7,5          4,0
      10        2,5         6,0          2,0
       8        1,0         5,5
                                         0,0
                                               0             5            10           15            20             25
                                                                                 N0


These dependencies can be described by linear functions
                                     N1  0,58 N 0  3,5
                                                                      .                                             (12)
                                         N1  0,37 N 0  2,5

                                           Marking scheme
                                        Content                                             Total             Points
        Part 1. Free small oscillations.                                                     5
1.1      Marked only if the difference of measurements results from the                      2
                          official ones does not exceed 25%
        Number of different lengths of the pendulum:
         5 or more (3-4; less than 3);                                                                    0,8(0,4;0)
        The periods are measured by
        10 oscillations or more (5-9; less than 5);                                                       0,3(0,1;0)
        The periods are calculated for all measurements;                                                  0,2
        The range of length of the pendulum                                                               0,7
        40 sm or more (30-40 sm, 20-30 sm; less than 20 см)                                               (0,5;0,3;0)
1.2     Derivation of the theoretical formula:                                               0,5
                                                  I l
        The exact formula is obtained T  4           ;                                                  0,5
                                                 mg h2
        Only dependence T  A l is predicted (or wrong coefficient at                 l)                  (0,2)

1.3     Marked only if the measurements in 1.1 have been marked!                             1
                                         
        Correct linearization T 2 (l ) , T l ;
        Another linearization ln T ln l                                                                 0,5
                                                                                                          (0,2)
        Proved that the power is 1/2                                                                      (0,3)
        Graph plotting (not linearized dependence is not marked):
        - axis are named and ticked;                                                                      0,1


XIII International Zhautykov Olimpiad/Experimental Competition                       Page 6/7


       - experimental data are drawn;                                                0,1
       - the line is drawn;                                                          0,1
       The linear dependence is confirmed;                                           0,2
1.4    Marked only if the measurements in 1.1 have been marked!                1,5
       The radius of gyration is calculated for all periods;                         0,3
       Only for 2 periods;                                                           (0,2)
       Only for 1 period;                                                            (0,1)
       The slope is found for the linearized dependence using:
       Least square method;                                                          0,2
       From the graph;                                                               (0,1)
       The distance between the threads is measured                                  0,1
       The accuracy is stated                                                        0,1
       Formula for calculation of the radius of gyration                             0,1
       Numerical value for the radius of gyration in the range:
       4,2 – 4,4 sm (4,0 – 4,6 sm; out of range)                                     0,4(0,2;0)
       Error evaluation:
       - error for the slope;                                                        0,1
       - error for the distance between threads;                                     0,1
       - final error;                                                                0,1
       Part 2. Small oscillations with additional tension                      5
2.1      Marked only if the difference of measurements results from the        2
                          official ones does not exceed 50%
       Number of different threads tensions:
         5 or more (3-4; less than 3);                                               0,8(0,4;0)
       The periods are measured by
       10 oscillations or more (5-9; less than 5);                                   0,3(0,1;0)
       The periods are calculated for all measurements;                              0,2
       The range of variation of the periods                                         0,7
       Not less than 2,5 times (2,0 times, 1,5 times; less)                          (0,5;0,3;0)
2.2    Derivation of the theoretical formula:                                  1
                                  A
       The dependence T               is justified threads tension is taken         1,0 (0,3;
                                   F
       constant, the torque is proportional to F , the equation for                  0,3; 0,4)
       oscillations);
                                  A
       Simply stated that T         (no proof is provided)                          (0,2)
                                   F
2.3    Marked only if the measurements in 2.1 have been marked!!               2
       Correct linearization T 2 ( z ) ;                                            1,0
                                  1 
       Another linearization T                                                     (0,5)
                                  z
       The linearization ln T ln l  is used, Proved that the power is 1/2          (0,3+0,2)

       Graph plotting (not linearized dependence is not marked):
       - axis are named and ticked;                                                  0,1
       - experimental data are drawn;                                                0,1
       - the line is drawn;                                                          0,1
       The linear dependence is confirmed;                                           0,7
       Part 3. Twisting at large angles                                         5
3.1       Marked only if the difference of measurements results from the       1,0


XIII International Zhautykov Olimpiad/Experimental Competition                      Page 7/7


                         official ones does not exceed 50%
       Number of different values of N :
        5 or more (3-4; less than 3);                                               0,4
                                                                                    (0,2;0)
       The measurements are repeated 3 times;                                       0,1
       Growing dependence of t (N ) is obtained                                     0,2
       Graph plotting
       (marked only if the measurements results have been marked):
       - axis are named and ticked;                                                 0,1
       - experimental data are drawn;                                               0,1
       - the line is drawn;                                                         0,1
3.2    The power in potential energy                                          0,3
         2                                                                        0,2
       Justification: U grows slowly than for harmonic oscillations                 0,1
3.3    Marked only if the slope falls in the range 0,35-0,65                  1,5
       Number of different values of N 0 :
         5 or more (3-4; less than 3);                                              0,5(0,2;0)
       The measurements are repeated 3 times or more;                               0,1
       Growing linear dependence is obtained;                                       0,2
       Graph plotting
       (marked only if the measurements results have been marked):
       - axis are named and ticked;                                                 0,1
       - experimental data are drawn;                                               0,1
       - the line is drawn;                                                         0,1
       The linear function is proposed;                                             0,1
       Numerical values for the parameters are found;                               0,2
       The slopes are equal for both threads tensions;                              0,1
3.4    Marked only if the slope falls in the range 0,25-0,65                  1
       Number of different values of N 0 :                                          0,3(0,1;0)
         5 or more (3-4; less than 3);
       Growing linear dependence is obtained;                                       0,1
       Graph plotting
       (marked only if the measurements results have been marked):
       - axis are named and ticked;                                                 0,1
       - experimental data are drawn;                                               0,1
       - the line is drawn;                                                         0.1
       The linear function is proposed;                                             0,1
       Numerical values for the parameters are found;                               0,2
3.5    Marked only if the slope falls in the range 0,25-0,75 and there is a   1,2
       shift of line up!
       Number of different values of N 0 :
         5 or more (3-4; less than 3);                                              0,4(0,2;0)
       Growing linear dependence with the upper shift is obtained;                  0,2+0,1
       Graph plotting
       (marked only if the measurements results have been marked):
       - experimental data are drawn;                                               0,1
       - the line is drawn;                                                         0,1
       The linear function is proposed;                                             0,1
       Numerical values for the parameters are found;                               0,2
