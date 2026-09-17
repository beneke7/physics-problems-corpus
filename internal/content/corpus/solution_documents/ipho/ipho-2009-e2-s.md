---
id: solution-document-ipho-2009-e2-s
source: ipho
kind: official_answer_sheet
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2009/E2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2009/E2_S.pdf."
---

Answer Form
                            Experimental Problem No. 2
                                Birefringence of mica
Task 2.1 a) Experimental setup for IP . (0.5 points)




Task 2.1 b) Experimental setup for IO . (0.5 points)




2.1                                                      1.0
            Experimental setup for measurement of mica birefringence


Task 2.2 The scale for angles.

2.2 The angle between two consecutive black lines is                              0.25

     θint = 3.6 degrees because there are 100 lines.




Tasks 2.3 Measuring IP and IO .Use additional sheets if necessary.

                                 TABLE I         (3 points)
       θ (degrees)                  (IP ± 1) ×10−3 V           (IO ± 1) ×10−3 V
           -3.6                           46.4                       1.1
            0                             48.1                       0.2
           3.6                            47.0                       0.6
           7.2                            46.0                       2.0
           10.8                           42.3                       4.9
           14.4                           38.2                       9.0
           18.0                           33.9                       12.5
21.6   27.7   17.9
25.2   23.4   22.0
28.8   17.8   27.0
32.4   12.5   31.7
36.0   8.8    34.8
39.6   5.2    38.0
43.2   3.6    39.4
46.8   3.2    39.6
50.4   4.5    38.7
54.0   6.9    36.6
57.6   10.3   33.6
61.2   14.7   29.4
64.8   20.1   24.7
68.4   25.4   19.7
72.0   30.5   14.7
75.6   36.6   10.2
79.2   40.7   6.1
82.8   44.3   3.2
86.4   46.9   1.0
90.0   47.8   0.2
93.6   47.0   0.4
97.2   45.7   2.0
               Parallel IP and perpendicular IO intensities vs angle θ .




                    GRAPH NOT REQUIRED!




Task 2.4 Finding an appropriate zero for θ .
2.4 a) Graphical analysis                                                        1.0

    The value for the shift is δθ = −1.0 degrees .

    Add the graph paper with the analysis of this Task.

    b) Numerical analysis

    From Table I choose the first three points of θ and IO (θ ) :
    (intensities in millivolts)

     (x1, y1) = (−3.6,1.1)     (x 2, y 2 ) = (0,0.2)   (x 3, y 3 ) = (3.6,0.6)
    We want to fit y = ax 2 + bx + c . This gives three equations:

     1.1 = a(3.6) 2 − b(3.6) + c
     0.2 = c
     0.6 = a(3.6) 2 + b(3.6) + c
                                 −0.9 + a(3.6) 2
     second in first ⇒       b=
                                      3.6
     in third     ⇒    0.6 = a((3.6) + (3.6) 2 )− 0.9 + 0.2
                                    2


     ⇒ a = 0.050             b = −0.069

    The minimum of the parabola is at:

                  b
     θ min = −      ≈ 0.7 degrees
                 2a

    Therefore, δθ = −0.7 degrees.
Task 2.5 Choosing the appropriate variables.
2.5 Equation (2.4) for the perpendicular intensity is                          0.5
             1
    IO (θ ) = (1− cos∆φ )sin 2 (2θ )
             2

     This can be cast as a straight line y = mx + b , with

                                       1
                                         (1− cos∆φ )
     y = IO (θ ) , x = sin 2 (2θ ) and m =
                                       2
     from which the phase may be obtained.


     NOTE: This is not the only way to obtain the phase difference. One may,
     for instance, analyze the 4 maxima of either IP (θ ) or IO (θ ) .




Task 2.6 Statistical analysis and the phase difference.


2.6 To perform the statistical analysis, we shall then use                     1.0

     y = IO (θ ) and x = sin 2 (2θ ) .
                         π
     Since for θ : 0 →    , x : 0 → 1, we use only 12 pairs of data points to
                        4
     cover this range, as given in Table II.

     x may be left without uncertainty since it is a setting. The uncertainty in y
     may be calculated as
            ∂IO  2 2  ∂IP  2 2
     ∆IO =   ∆IO +         ∆IP and one gets
            ∂IO       ∂IP 

             IO2 + I P2
     ∆IO =               ∆IO ≈ 0.018 , approximately the same for all values.
           (IO + I P ) 2



                                       TABLE II
        θ (degrees)                    x = sin 2 (2θ )               y = IO ± 0.018
            2.9                            0.010                          0.013
            6.5                            0.051                          0.042
           10.1                            0.119                          0.104
           13.7                            0.212                          0.191
           17.3                            0.322                          0.269
           20.9                            0.444                          0.392
           24.5                            0.569                          0.484
           28.1                            0.690                          0.603
           31.7                            0.799                          0.717
           35.3                            0.890                          0.798
           38.9                            0.955                          0.880
           42.5                            0.992                          0.916




2.6 We now perform a least square analysis for the variables y vs x in Table          1.75
    II. The slope and y-intercept are:

     m ± ∆m = 0.913 ± 0.012

     b ± ∆b = −0.010 ± 0.008

     The formulas for this analysis are:
           N                    N           N
       N ∑ x n y n −∑ x n ∑ y n′
m=         n =1             n =1           n ′=1
                            ∆
       N           N            N            N

    ∑ x n2 ∑ y n′ −∑ x n ∑ x n′ y n′
b = n =1          n ′= 1        n =1        n ′=1
                            ∆

where
           N 
           N                           2

∆ = N ∑ x −∑ x n  2
                    n
      n=1   n=1 

with N the number of data points.
The uncertainty is calculated as

                     σ2                             σ2 N
(∆m) = N
       2

                        ∆
                            ,       (∆b) =
                                                2
                                                      ∑x
                                                    ∆ n=1
                                                            2
                                                            n   with,

                        N
         1
σ2 =         ∑
       N − 2 n=1
                 (y n − b − mx n )
                                  2




with N = 12 in this example.

Include the accompanying plot or plots.
2.6 Calculate the value of the phase ∆φ in radians in the interval [0, π ].   0.5
                         1
    From the slope m = (1 − cos ∆φ ), one finds
                         2
    ∆φ ± ∆(∆φ ) = 2.54 ± 0.04

     Write down the formulas for the calculation of the uncertainty.

     We see that,
            ∂m          1                                        2 ∆m
     ∆m =       ∆(∆φ ) = sin(∆φ )∆(∆φ ) , therefore, ∆ (∆φ ) =          .
            ∂∆φ         2                                      sin(∆φ )




Task 2.7 Calculating the birefringence n1 − n 2 .

2.7 Write down the width of the slab of mica you used,                             1.0

     L ± ∆L = (100 ± 1) × 10−6 m

     Write down the wavelength you use,

     λ ± ∆λ = (663 ± 25) × 10−9 m (from Problem 1)

     Calculate the birefringence

      n1 − n 2 ± ∆ n1 − n 2 = (3.94 ± 0.16) ×10−3


     The birefringence is between 0.003 and 0.005. Nominal value 0.004

     Write down the formulas you used for the calculation of the uncertainty of
     the birefringence.

     Since the width L > 82 micrometers, we use

                 2πL
     2π − ∆φ =          n1 − n 2
                    λ

     The error is

                   ∂ n − n2        ∂ n1 − n 2        ∂ n1 − n 2 
                                       2            2                  2

     ∆ n1 − n 2 =  1         ∆λ +              ∆L +              ∆ (∆φ )
                                 2                   2                         2

                   ∂λ              ∂L                ∂∆φ 

                   n1 − n 2        n1 − n 2 
                                   2            2
                                                       λ 2
     ∆ n1 − n 2 =            ∆λ +            ∆L +       ∆ (∆φ )
                                 2                 2                  2

                   λ               L               2πL 
Since the data may appear somewhat disperse and/or the errors in the
intensities may be large, a graphical analysis may be performed.

In the accompanying plot, it is exemplified a simple graphical analysis:
first the main slope is found, then, using the largest deviations one can
find two extreme slopes.

The final result is,

m = 0.91± 0.08          and         b = −0.01± 0.04

The calculation of the birefringence and its uncertainty follows as before.
One now finds,

n1 − n 2 ± ∆ n1 − n 2 = (3.94 ± 0.45) ×10−3 .

A larger (more realistic) error.
 Comparison of experimental data (normalized intensities IP and IO ) with fitting
(equations (2.3) and (2.4)) using the calculated value of the phase difference ∆φ .




                  GRAPH NOT REQUIRED!
