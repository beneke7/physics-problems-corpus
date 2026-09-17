---
id: solution-document-apho-2004-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2004/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2004-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2004/T3_S.pdf."
---

Solution of Problem No. 3
                  Compression and expansion of a two gases system

1.
     a. The isotherm curve is shown in Figure 1.

                         p[atm.]
                                2


                                1
                              0.5
                               0
                                      V0   V0
                                                      V0             2V0    V
                                      4    2

                                            Figure 1

               RT1      8.31 × 373
        V0 =       =                    = 0.0612 m3
                p1   0.5 × 1.013 × 10 5


                                        = 61.2 dm3

     b. The process of compressing can be divided into 3 stages:

         (p1, 2V0) →       (2p1,V0)    →        (2p1,V0 /2) →   (4p1,V0 )
              (1)               (2)                   (3)           (4)

The work in each stage can be calculated as follows:
             V0               2V0 dV
    A12 = - ∫ pdV = 2RT1 ∫             = 2RT1 ln2 = 4297 J
             2V0             V0     V
    A23 = 2p1(V0- V0/2) = RT1 = 3100 J
              1                1
                V0               V0 dV
    A34 = - ∫1 p ' dV = RT1 ∫12
              4                        = RT1ln2 = 2149 J.
                V0              V0 V
              2               4
The total work of gases compressing is:
        A = A12+A23+A34 = 9545 J ≅ 9.55 kJ              (1)
    c. In the second stage 23, all the water vapor (one mole) condenses. The heat Q’ delivered
in the process equals the sum of the work A and the decrease ∆U of internal energy of one
mole of water vapor in the condensing process.
                       Q' = ∆U + A12+A23+A34
    One can remark that ∆U + A23 is the heat delivered when one mole of water vapor
condenses, and equals 0.018×L. Thus




                                                                                            1
 Q’ = ∆U + A11+A23+A34 = 0.018× L + A11 + A34 = 46.946 J ≅ 47 kJ         (2)

2. The process of compression (2. a.) and expansion (2.c.) of gases can be divided into several
stages. The stages are limited by the following states:
 State    Left compartment          Right compartment         Total        Pressure on
         Volume | Pressure         Volume | Pressure         volume        piston (atm.)
                 | (atm.)                   | (atm.)
   1     V0      | 0.5             V0      | 0.5              2V0              0.5
   2     V0      | 0.5             0.5 V0 | 1                 1.5V0            1
   3     0.5V0 | 1                 V0/3     | 1.5            5/6 V0            1.5
   4     0       | 1               V0/3     | 1.5             V0/3             1.5
   5     0       | 1.5             V0/4     | 2               V0/4              2
   6     0       | 1.5             V0/3     | 1.5             V0/3             1.5
   7     0       | 1               V0      | 0.5               V0              0.5
   8     0.5V0 | 1                 V0      | 0.5             1.5V0             0.5
   9     V0(2- 2 )|( 2 +2)/4       V0 2 |        2/4         2V0                2 / 4 = 0.35


a. See figure 2 below.

b. The work Ap done by the piston in the process of compressing the gases equals the sum of
the work A calculated in 1. and the work done by the force of friction. The latter equals
0.5 atm.×V0 = p1V0 (the force of kinetic friction appears in the process 234 during which the
displacement of the partition NM corresponding to a variation V0 of volume of the left
compartment). Then, we have:
         Ap = A + p1V0 = 9545 + 8.31 ×373 = 12645 J ≅ 12.65 kJ

c. In process 89 the pressure in the left compartment is always larger than the pressure in the
right one (with a difference of 0.5 atm.). If p denotes the pressure in the right compartment,
the pressure in the left one will be p + 0.5 atm.
    Let V be the total volume in process 89, we have
                 RT1      RT1
                      +          =V
                  p      p + 0.5
                2 RT1                          RT1    RT1      2 RT1
with V = 2V0 =         , p can be defined by       +         =
                 0 .5                           p    p + 0.5    0.5
This is equivalent to:
                p + 0.5 + p = 4p.(p+0.5)
                       1       2
                 p=       =      = 0.35 atm.
                        8     4
The pressure in the right compartment is p = 0.35 atm.
The volume of the right compartment is 2 V0
The pressure in the left compartment is p + 0.35 = 0.85 atm.
The volume of the left compartment is (2 - 2 ) V0



                                                                                               2
    p(atm)


                 5
         2

                         4        3
       1.5
                     6
                                                        2
        1


       0.5                                                            1
      0.35                               7              8
                                                                      9


                 V0 V0       V0   5V0
             0                          V0              1.5V0       2V0      V
                  4 3         2    6

                                             Figure 2

3.
a. Apply the first law of thermodynamic for the system of two gases in the cylinder:
                     δq = dU + δA                                    (3)
    In an element of process in which the variations of temperature and volume are
respectively dT and dV:
                                               R       R
    δq = 0 ; dU = (CV1 + CV2)dT = (                +       )dT ; δA = p.dV
                                             γ1 −1 γ 2 −1
On the other hand:                    pV = RT                         (4)
One can deduce the differential equation for the process:
                              R        R
                          (       +         )dT + p. dV = 0
                            γ1 −1 γ 2 −1
or
                            dT (γ 1 − 1)(γ 2 − 2) dV
                                +                     =0                (5)
                            T       γ1 + γ 2 − 2 V
By putting
                               K= 1
                                    (γ − 1)(γ 2 − 1) = 2               (6)
                                      γ1 + γ 2 − 2     11
after integrating (5), we have:
                                    TVK = const.                       (7)
The condensing temperature of water vapor under the pressure 0.5 atm. is also the boiling
temperature T’ of water under the same pressure. By using the given approximate formula, we
obtain
                1 1            R      p
                   − = (− ) ln
                T ' T0        µL     p0




                                                                                         3
•      If we consider p approximatively constant (with relative deviation about 20/373 ≈ 5 %)
T ' can be easily found, and
                         T’ = 354 K
The volume V ' of the right compartment at temperature T ' can be calculated as follows:
                               1             11
                              T K          373  2
                   V ' = V0  1  = V0            = 1.33 V0 ≅ 1.3 V0
                             T'            354 
                                       = 81.6 dm3 = 0.0816 m3 ≅ 0.08 m3
b.The work done by the gas in the expansion is:
                                                  R         R
         A = - ∆U = (CV1+CV2)(T0- T ' ) = (            +        )(373 − 354) =
                                               γ 1 −1 γ 2 − 2
                                               5      6
                                           = ( R + R )×19 = 868 J ≅ 9×102 J
                                               2      2
• If we consider the dependence of water vapor pressure p on temperature T ' , we must
resolve the transcendental equation
                     1 1             R     1 T'       R        R T'
                        −     = (− ) ln           =     ln 2 −     ln
                    T ' T0          µL 2 T0 µL                 µL T0
This equation can be reduced to a numerical one:
                    1     1                                          T'
                        −       = 1.422 × 10−4 − 2.052 × 10−4 ln
                    T ' 373                                         373
By giving T ' different values 354, 353, 352 and choosing the one which satisfies this
equation, we find the approximate solution :
                             T ' = 353 K
With this value of temperature, the volume of the right compartment is :
                              11
                        373 2
             V ' = V0(      ) = 1.35 V0 = 0.082 m3 ≅ 0.08 m3
                        353
b. The work done by the gas in the expansion is:
                 11
            A=      R×20 = 914 J ≅ 9×102 J
                  2




                                                                                                4
