---
id: solution-document-izho-2018-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2018_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2018_E_S.pdf."
---

XIV International Zhautykov Olimpiad/Experimental Competition                                                  Page 1/6



                              SOLUTION TO THE EXPERIMENTAL COMPETITION
                                               The Law of Archimedes (15.0 points)
                                    Part 1. Installation parameters
1.1 A strip of millimeter paper is screwed onto the test-tube. We make marks on the strip, untwist it
and obtain the lengths of 1, 2, 3 and 4 revolutions as
l1  63 mm
l2  127 mm
l3  191mm
l4  255 mm
From these data we find that the length of one revolution is equal to l  64,0  0.3mm
                                                                          l
The diameter is then calculated by the formula D                              20,372 mm , the unstrumental error is found
                                                                         
                              l
as D  D                         0,1mm and the final result is written as
                              l
                                           D  20,4  0.1mm.
1.2 The length of the test-tube is obtained as L  175  1mm.
1.3.1 – 1.3.2 . Dependence of the immersion depth of the tesr-tube on the number of nuts, placed in
it, is shown in Table 1. First, the length x of the part of the test-tube, protruding above the water
level, is measured. And then the immersion depth is calculated by the formula h  L  x .

Table 1
 Number
  of nuts                            x , mm        h , mm
          1                                   80        95
          2                                   65       110
          3                                   50       125
          4                                   37       138
          5                                   22       153
          6                                   10       165


                                     Immersion depth against the number of nuts
                        180




  Immersion depth, mm
                        160

                        140

                        120

                        100

                         80

                         60
                              0          1            2           3            4           5           6          7
                                                                  Number of nuts
XIV International Zhautykov Olimpiad/Experimental Competition                             Page 2/6


The dependence obtained is linear and is described by the formula
                                                 h  an  b.                                      (1)
The parameters, calculated by the least square method, are equal
                                                 a  14,1  0,5mm
                                                                    .                             (2)
                                                 b  81,8  1,8mm
1.3.3 The theoretical formula for the resulting dependence follows from the equilibrium condition
                                 M  mng  Shd  h  M  mn .                                  (3)
                                                                    S
            D 2
where S        stands for the cross-sectional area of the test tube.
            4
From the comparison of expressions (3) and (1) it follows that
                                              m
                                         a         m  Sa .                                       (4)
                                             S
Numerical calculations lead to the following result
                                        D 2
                                 m         a  4,58 10 3 kg  4,58 g.                            (5)
                                         4
The instrumental error in measuring the mass of the nut is calculated by the formula
                                             a   D 
                                                        2       2
                                                                         4
                                  m  m          2        1,6  10 kg.                        (6)
                                             a   D 
The final weight of the nut is written as
                                          m  4,58  0,16 g.                                       (7)
The weight of the test-tube is calculated by the formula
                           M                        D 2
                       b         M  Sb             b  2,67 102 kg  26,7 g.
                           S                         4
The error in calculating the mass of the test-tube is found as
                                                b   D 
                                                            2       2

                                   M  M     2               0,6 g. .                        (8)
                                                b   D 
To simplify further calculations, we note that the ratio of the parameters of the linear dependence (2)
is equal to the ratio of the mass of the test-tube and the nut:
                                         M b
                                   n*         5,82 .                                             (9)
                                          m a
                                   Part 2. Oscillations of the test-tube
2.1 To simplify the calculations, the formula for the period of oscillations can be rewritten in the
form
                                             h         an  b
                                  Tn  2 0  2              .                                    (10)
                                             g            g
To linearize this dependence, it is necessary to plot and analyze the dependence of the squared period
on the number of nuts T 2 (n) . The results are summarized in Table 2.

Table 2.
Number             T,s               T 2 , s2
of nuts
       1                 0,680                  0,463
       2                 0,717                  0,514
       3                 0,752                  0,565
XIV International Zhautykov Olimpiad/Experimental Competition                                 Page 3/6


                            4          0,785             0,617
                            5          0,817             0,668
                            6          0,848             0,720

The graph of the dependence T 2 (n) is shown in the figure below.
                                    Linearized dependence of the period on the number of
                                                           nuts
                    0.700
                    0.650




  Squared period T^2, s^2
                    0.600
                    0.550
                    0.500
                    0.450
                    0.400
                    0.350
                    0.300
                                0        1          2            3          4         5   6              7
                                                                     Number of nuts

2.2 The results of the measurements are given in tables
The random error in measuring the period is estimated from the following formula
                                                         t  t 
                                                                 2
                                                            k
                                                                t
                                               t  2   k
                                                                   .  ;   T                     (11)
                                          N ( N  1)            k
Here t refers to the time needed to perform k periods of oscillations (in our case k  5 and k  3
respectively), N  10 stands for the number of measurements.

Table 3. Oscillations in the wide vessel
           Number
                                           Averaged                 Squared
           of                                        Error in the
                         Time              period                   period
 Number periods                    Period            period
 of nuts   k             t ,s      T,s      T ,s     T             T 2 , s2
         4           5        3,74   0,748     0,744          0,009     0,554
                     5        3,64   0,728
                     5        3,77   0,754
                     5        3,71   0,742
                     5        3,74   0,748
         5           5        3,93   0,786     0,770          0,010     0,594
                     5        3,81   0,762
                     5        3,89   0,778
                     5        3,83   0,766
                     5        3,80   0,760
XIV International Zhautykov Olimpiad/Experimental Competition                         Page 4/6


        6           5      3,93       0,786      0,789            0,010      0,622
                    5      3,93       0,786
                    5      4,04       0,808
                    5      3,93       0,786
                    5      3,89       0,778

Table 3. Oscillations in the beaker

           Number
                                       Averaged                           Squared
           of                                    Error in the
                    Time               period                             period
 Number periods               Period             period
 of nuts   k        t ,s      T,s       T  , s   T                       T 2 , s2
         4        3      2,21     0,74     0,742          0,014              0,551
                  3      2,25     0,75
                  3      2,27     0,76
                  3      2,20     0,73
                  3      2,20     0,73
         5        3      2,38     0,79     0,789          0,015           0,623
                  3      2,37     0,79
                  3      2,34     0,78
                  3      2,42     0,81
                  3      2,33     0,78
         6        2      1,61     0,81     0,818          0,036           0,669
                  2      1,59     0,80
                  2      1,66     0,83
                  2      1,63     0,82
                  2      1,69     0,85

2.4 What possible reasons can explain the deviation between experimental data and theoretical
calculations?

Table 4
 No.                    Possible reasons                 «Yes»                 «No»
1      Measurement errors                              Х
2      Oscillation damping                                                 Х
3      An increase in the effective mass of a moving                       Х
       test-tube due to water entraining
4      Change in pressure under the tube when it moves Х
       as compared to hydrostatic pressure
5      Surface tension forces                                              Х

Comments:
1. Of course, errors ifluence any result.
2.3 These reasons should lead to an increase in the period, and not to a decrease.
4. Apparently, the main reason, leading to a reduction in the period.
5. Too small forces.
XIV International Zhautykov Olimpiad/Experimental Competition                         Page 5/6




                                            Marking scheme
Part1. Installation parameters
 №                                    Criteria                              Total      Points
 1.1 Diamater measurement                                                    0,9
       - sketch of the measurements:
        - rolling on the test-tube (2-3 revolutions; 1 revolution);                   0,2 (0,1)
       - rolling the test-tube on the millimeter paper;                                 (0,1)
       - direct measurement of the diameter;                                            (0,1)
       Measurement results:
       - circumference in the range of 63-66 mm (61-68 mm, out of                   0,2 (0,1; 0)
       range)
       Evaluation of the diameter:
       - formula:                                                                   0,1
       - numerical value (in accordance with the previous part)                     0,2 (0,1; 0)
       Instrumental errpr 0,25-0,35 mm (larger)                                        0,1 (0)
       Correctly rouded results*                                                         0,1
 1.2 Measurement of the test-tube length                                     0,3
        - length in the range of 170-180 mm (out of range)                             0,1 (0)
       - instrumental error 1 mm (иное)                                                0,1 (0)
       Correctly rounded result*                                                         0,1
1.3.1 Results of the immersion depth measurement                             1,8
       Results differ from tabulated  2 mm (  4 mm, larger)                       1,2 (0,6; 0)
       Number of points* 6 (3, less)                                                0,6 (0,3, 0)
1.3.2 Plotting the graph and calculating the parameters of the               1,0
       dependence
       (marked only if 1.3.1 has been marked)
       - axes are signed and ticked;                                                    0,1
       - points are plotted in accordance with the table                                0,2
       Parameters of the dependence:
       - form of dependence is a linear function                                        0,1
       - evaluation of the parameters;                                                 2х0.2
       - errors of the parameters;                                                     2х0,2
1.3.3 Calculation of masses of the nut and the test tube:                    2,0
       (marked only if 1.3.1 has been marked)
       - formula of the theoretical dependence                                          0,4
       - formulas for calculating masses through the parameters of the
       linear dependence;                                                              2х0,2
       - calculation of the mass of the nut: within 10% from the                    0,4 (0,2, 0)
       tabulated value (20%, larger)
       - Nut mass error: errors in the slope and the diameter are taken
       into account (only one contribution)                                          0,2 (0,1)
       - calculation of the test-tube mass: within 10% from the tabulated           0,4 (0,2, 0)
       value (20%, larger)
       - error in the mass of the test-tube: errors in the shift and the              0,2 (0,1)
       diameter: erroes in the shift and in the diameter are taken into
       account (only one contribution)

* - marked only if the measurements are marked.
XIV International Zhautykov Olimpiad/Experimental Competition                           Page 6/6




Part 2. Oscillations of the test-tube

№                                     Criteria                                 Total     Points
2.1    Theoretical dependence                                                   1,2
       - formula for the period T (n ) via measured parameters                            0,2
       - periods are calculated                                                          6х0,1
       - linearization T 2 (n) (other)                                                   0,1(0)
       Plotting the graph:
       - axes are signed and ticked;                                                      0,1
       - points are plotted in accordance with the table;                                 0,2
2.2     Formula for evaluating the error in the period:
       - decrease of the random error with increasing the number of
       measurements;                                                                       0,2
       - modulus of the average deviation from the mean value;                            (0,1)
       Oscillations in the wide vessel                                          3,0
       Results within the range  20% (  30% , larger)                                3х0,3 (0,2;
                                                                                           0)
       More than 7 measuments are taken (more than 4, less)*                           3х0,3 (0.2;
                                                                                           0)
       Periods are calculated*                                                           3х0,1
       Errors are calculated*                                                            3х0,1
       Points are plotted in accordance with the table *                                  0.2
       Errors are stated in the graph*                                                    0,2
       The periods of oscillations are found to be less than the                          0,2
       theoretical one (more than 0,1 s)*
       Oscillations in the beaker                                               3,3
       The results of the measurements within the range  20% (  30%                  3х0,3 (0,2;
       , larger)                                                                           0)
       More than 7 measuments are taken (more than 4, less)*                           3х0,3 (0.2;
                                                                                           0)
       Periods are calculated*                                                           3х0,1
       Errors are calculated*                                                            3х0,1
       Points are plotted in accordance with the table *                                  0.2
       Errors are stated in the graph*                                                    0,2
       The periods of oscillations are close to theoretical (the difference               0,3
       is not more than 0,2 s)*
       The periods of oscillations in different vessels are similar                       0,2
       (differences not more than 0.2 s) *
2.4    Possible reasons                                                         1,5
       - each correct answer                                                             5х0,3
                                                                       Total    15


* - marked only if the measurements are marked.
