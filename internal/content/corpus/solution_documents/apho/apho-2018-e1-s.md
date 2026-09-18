---
id: solution-document-apho-2018-e1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2018/E1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2018-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2018/E1_S.pdf."
---

SOLUTION

A. Understanding of magnetic fields (1.0 point)
      1. Understanding of magnetic field created by a circular coil

A.1        k  6.28 103 mT/mA                                                             0.5 pt

        2. Understanding of the Earth’s magnetic field
A.2        B  Bh cos                                                                     0.5 pt


B. Investigation of the GMR effect using a GMR magnetic sensor (7 points)
   2. Determination of resistance of GMR elements
        a. Resistance of the elements at B  0 .
B.1       Diagrams of the experiment and the expressions for calculating the
          resistance of each element a, b, c and d.                          1.25 pt
          a. Short circuit pins 8 and 4.                       8
              R5, 84  m ; R1, 84  n
               1 1 1                                   d               a
                              (1)
               m a b                                        1                           5
               1 1 1
                               (2)                            c                   b
               n c d
                                                                        4

          b. Connect pins 8 and 4 to a battery.                     8
              U 8,5          U 8,1
                       p;           q                 d                   a
              U 5,4          U1,4
                                                    1                           5
               a
                 p             (3)
               b                                        c                   b
               d
                 q             (4)                                 4
               c
          Solve the system of equations (1), (2), (3) and (4). Obtain:
                                     1
           a  m  p  1 ; b  m 1  
                                     p


                                                                                                     1

                  1
           c  n 1   ; d  n  q  1
                  q
B.2        For B  0 :                                                                1.25 pt
           a  4960 Ω ; b  4870 Ω ; c  4950 Ω ; d  4970 Ω

  b. Resistance of the elements at maximum external magnetic field
B.3        a  4320 Ω ; b  4870 Ω ; c  4310 Ω ; d  4970 Ω                          0.5 pt

      c. Properties of the elements
B.4        Elements sensitive to the magnetic field are: a, c                         0.25 pt


        2. Characteristics of a GMR element
B.5        The name of the chosen element: a                              0.75 pt
           Diagrams of the experiment and the expressions for calculating
             B .
           1..Method 1:
           The same as used in B.1 with different values of the current I in the
           circular coil.
           2..Method 2:
             Connect the sensor to the battery            8
          according to the diagram, forming a                                   E
          bridge. The GMR element under d                          a
                                                  1                5
          consideration is a.                                          V       E/2
             If at I  0 the bridge is
          balanced, then U  0 .                 c                b U
             Set the current I in the coil, the                                 0
                                                          4
          resistance of a becomes R  R ,
                                                          ER         E
          then       U  0 .       Because     U                  ,       then
                                                       R  R  R 2
                   R        U
            B               .
                    R        E/4
           If at I  0 , the bridge is unbalanced and the initial voltage is U 0 ,
                R    U  U 0               R    U  U 0
          then                and   B      
                 R       E/4                   R       E/4
           The voltages are measured relatively to the middle point of the
          battery.
                                                                                                2

       The maximum value of R / R is about 10%. The error in
      determining it by using above approximations is less than 1% and
      can be accepted.


B.6    Table of   B  corresponding to the values I and B.              1.25 pt
       E  6300mV
  I (mA)          B (mT)            U (mV)          U  U 0            B

        0                 0            -25.8                        0           0
       10            0.0628              -21                      4.8    -0.00305
       20             0.126            -15.7                    10.1     -0.00641
       45             0.283             -2.1                    23.7     -0.01504
       67             0.421             11.1                    36.9     -0.02343
       87             0.546             24.5                    50.3     -0.03193
      107             0.672             38.1                    63.9     -0.04057
      129             0.810               54                    79.8     -0.05067
      156             0.980               74                    99.8     -0.06336
      186             1.168               96                   121.8     -0.07733
      215             1.350            117.3                   143.1     -0.09085
      240             1.507            134.5                   160.3     -0.10177
      268             1.683            152.6                   178.4     -0.11326
      303             1.903            170.6                   196.4     -0.12469
      330             2.072            179.6                   205.4     -0.13041
      354             2.223            184.1                   209.9     -0.13326
      384             2.411            186.2                     212     -0.13460
      405             2.543            186.7                   212.5     -0.13492
      436             2.738            187.1                   212.9     -0.13517
      469             2.945            187.2                     213     -0.13523


B.7    Graph 1- Graph of the relative change of resistance                0.5 pt




                                                                                    3

                                     B                                   0.25 pts
B.8        The average slope                of the curve   B 
                                     B
             0.067 mT   -1

B.9        The GMR coefficient                                               0.25 pts
               R
             max  13.5 %
               R 0
B.10       The value of the resistances r and R of the GMR element:          0.75 pts
           r  R0  R0  R0  RB  ; R  R0  R0  R0  RB 
           Choose element a in B.2 and B.3, then:
                                              r
           r  3180  ; R  6740  ;           0.47
                                              R
C. Study of GMR magnetic sensor (6 points)
   1. Characteristics of sensor output signal
C.1        Table with the values of the output signal S corresponding to the 1.0 pts
           values of the current I and the magnetic field B.

       I              B               S                  I           B          S


                                                                                        4

C.2    Graph 2 - Graph S  B  of the output signal S as a function of the 1.0 pts
       applied magnetic field B.




C.3    1. Region of saturation in the curve S  B  : S                    0.5 pts
       2. Region of linearity in the curve S  B  : L
          m  2.0 102 mV/mT

C.4    The coercive field is                                               0.5 pts
       Bc  0.10mT

  2. Dependence of output signal on the voltage
C.5    Table with the values of S corresponding to the values of E .       0.25 pts


                            E (V)                         S (mV)
                              0                              0

                                                                                      5

                           1.51                91.5
                            3.1                183
                            4.6                274
                           6.25                365

C.6     Graph 3 - S as a function of E .              0.25 pts




C.7           E                                       0.5 pt
        S        B
              2

  3. Study of effects of a flux concentrator




                                                                 6

C.8         1. The magnetic field used in this experiment.                         0.25 pt
            Put a cross in the appropriate box
             a. The field of the circular coil carrying an electric
             current
             b. The field of the flat coil carrying an electric current
             c. The field of the plate of permanent magnet
             d. The magnetic field of the Earth                               X
            2. Diagrams of the experiment and expressions to determine the
            value of n.
                                                                           0.75 pt
             1. The sensor on the round plate in the horizontal plane.
             2. With no flux concentrator




                a. Orient the sensor perpendicular to the South-North direction.
                   Note the value S1.
                b. Rotate the sensor along the South-North direction. Note the
                   value S2.
                c. S0  S2  S1 ; B0  S0 / m .
             3.With flux concentrator
            For each value of L1, do the same, to obtain B  S / m .



C.9         Table to find B / B0 for different values of L1 . B / B0  S / S0    0.5 pt
             S1  17 mV ; S0  21.2  17  4.2mV .

      L1 (mm)            S2 (mV)           1 / L1 (mm-1)      S  S2  S1         B / B0
        5                  33.2               0.200               16.2             3.86
        6                  31.2               0.167               14.2             3.38
        7                  30.2               0.143               13.2             3.14
                                                                                             7

        8                  28.6              0.125               11.6   2.76
        9                  27.7              0.111               10.7   2.55
       10                  26.8              0.100                9.8   2.33
       11                  26.4              0.0909               9.4   2.24
       13                  25.4              0.0769               8.4   2.00
       15                  24.6              0.0667               7.6   1.81
                          21.2              0.0000               4.2   1.00

C.10        Graph 4 – Graph of B / B0 as a function of 1/ L1 .          0.5 pt
                               B         1
            Use the function       nL2   1 . Find a  nL2  14.1 .
                               B0        L1
                         a 14.1
            Obtain n            0.56 .
                         L2   25




D. Applications of GMR magnetic sensors (6 points)
   1. Measurements of the Earth’s magnetic field

                                                                                 8

      a. Magnitude of the horizontal component of the Earth’s magnetic field
D.1    Diagrams of the experiment and expressions for calculating Bh .         0.5 pt
       1. The sensor on the round plate in the horizontal plane. Carry out the
       biasing.
       2. Method 1




         a. Set   0 - the sensor perpendicular to the direction South-
      North.
         b. Rotate the sensor holder, measure S  f  
          c. Fit the curve S to a sine function S  a sin  .
          d. Bh  a / m




                                                 2
                                  y=a sin(x+b)+c, r =0.9979
                                  a=6.091, b=-0.5577, c=105.2
                                  a=0.05912, b=0.5406, c=0.04123, prob=1.000




                        110




               S [mV]
                        105




                        100



                              0                   200                         400     600   800

                                                                          [degree]




                                                                                                  9

      3..Method 2




          a. Orient the sensor along the Earth’s magnetic field. Find the
      direction with the maximum (or minimum) value of S. Note this
      value S1
          b. Rotate the sensor holder by about 180o. Find the direction with
      the minimum (or maximum) value of S. Note this value S2
             S1  S 2
      Bh 
               2m


D.2     Bh  0.035mT .                                                         0.25 pts

  b. Magnitude of the Earth’s magnetic field and magnetic inclination
D.3    Diagrams of the experiment and expressions for calculating BEarth 0.75 pts
       and  .
       1. The sensor on the round plate in the vertical plane containing the
       South-North direction. Carry out the biasing.
       2..Method 1




                                                                                          10

    a. Orient the sensor along the Earth’s magnetic field. Find the
direction with the maximum (or minimum) value of S. Note this
value S1 and the angle 1 between the sensor direction and the
horizontal.
    b. Rotate the sensor holder by about 180o. Find the direction
with the minimum (or maximum) value of S. Note this value S2 and
the angle α2 between the sensor direction and the horizontal.
   c. Orient the sensor in the direction midway between 1 and α2
with the angle 3=α2+90o. Note the value S3.
    d. Starting from 3, rotate the sensor holder, take the values of
S corresponding to values of α. Measure S  f   .
   e. S  S3  a sin . Obtain a from fitting.
   f. BEarth  a / m
                        Bh
   g.   Arccos
                       BEarth
3. Method 2
Orient the sensor along the Earth’s magnetic field. Find the
direction with the maximum (or minimum) value of S. The angle 
between the sensor direction and the horizontal is the magnetic
inclination.




From the obtained  , BEarth  Bh / cos .
This method may have systematic errors due to the relative
misalignment of the sensor to the sensor holder. To eliminate this
error, rotate the round plate together with the sensor holder by 180o
about a horizontal axis along the South-North direction. Repeat the
measurement. The magnetic inclination is the mean value of the
                                                                        11

          two obtained angles.
D4         BEarth  0.041mT                                                     0.5 pts
            31o
     2. DC wattmeter
D.5       Diagram of the wattmeter circuit together with the load and the 0.5 pt
          multimeters.




D.6       Table with the values of the sensor output signal S corresponding to 0.75
          the values of I and U, and of P  I  U .


         I (A)                U (V)                P (W)               S (mV)
         0.30                  2.64                0.792                18.3
         0.35                  3.9                 1.365                  42
         0.40                  5.37                 2.15                74.3
         0.45                  6.94                 3.12                112.4
         0.50                  8.67                 4.34                162.4
         0.543                10.29                 5.59                215.4
         0.20                  0.89                0.178                 4.9
         0.25                  1.53                0.382                11.5
         0.50                  1.3                  0.65                25.8
         0.60                  2.13                 1.28                50.7
         0.70                  3.1                  2.17                88.1
         0.80                  4.1                  3.28                 137
         0.97                  6.11                 5.92                 253
         0.30                  3.13                0.939                31.4
         0.442                 7.74                 3.42                 128


                                                                                          12

D.7      Graph 5 - Calibration curve of the wattmeter P  f  S  .   0.5 pt




D.8     The function: P   S                                         0.25 pt
        The coeficient:   0.026 W/mV
      b. Detection of buried electrical circuits
D.9                                                                   2.0 pt




                                                                                13
