---
id: solution-document-izho-2021-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2021_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [izho-2021-t-q1, izho-2021-t-q2, izho-2021-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2021_T_S.pdf."
---

XVII International Zhautykov Olympiad/Theoretical Competition                                            с. 1/16


          SOLUTIONS TO THE PROBLEMS OF THE THEORETICAL
                           COMPETITION
                           Attention. Points in grading are not divided!
                                      Problem 1 (10.0 points)
                                     Problem 1.1 (4.0 points)
        Let x be the spring compression, and y be the change in the water level in the tube leg in which the
pistons are located. When water moves in a tube, an inertial force acts on the body, which is equal to
                F = −my ,                                                                                 (1)
so that the equation of the weight motion is written as
                mx = −kx + mg − my .                                                                      (2)
        The equation of motion of water in the tube has the form
                 sly = −2  sgy + kx .                                                                   (3)
        The new equilibrium position is determined by the conditions x = x0 = const and y = y0 = const , so
that substitution into equations (2) and (3) gives rise to
                      mg
                x0 =       ,                                                                              (4)
                       k
                       kx0      m
                y0 =         =      .                                                                     (5)
                      2  gs 2  s
        According to the problem statement, it is said that the system performs harmonic oscillations about
the new equilibrium position, therefore, a solution to equations (2) and (3) is sought in the following form
                x = x0 + A cos t ,                                                                       (6)
                y = y0 + B cos t ,                                                                       (7)
and after substitution we obtain the following set of equations
                A(12 −  2 ) = B 2 ,                                                                    (8)
               A32 = B(22 −  2 ) ,                                                              (9)
             k         2g              k
where 12 = , 22 =         , 32 =       .
             m           l            sl
        After dividing equations (8) and (9), we obtain a quadratic equation for a possible oscillation
frequencies
               (12 −  2 )(22 −  2 ) =  232 ,                                                 (10)
which admits the solution
                       2 + 22 + 32  (12 + 22 + 32 ) 2 − 41222
               1,2
                 2
                    = 1                                                .                           (11)
                                                2
        Note that both roots are always positive and give the following possible frequencies of harmonic
oscillations
                      12 + 22 + 32 − (12 + 22 + 32 )2 − 41222
              1 =                                                       = 5.19 s −1 ,                   (12)
                                             2
                      12 + 22 + 32 + (12 + 22 + 32 ) 2 − 41222
               2 =                                               = 12.07 s −1 .                        (13)
                                            2
In reality, the motion of the system is represented by the addition of harmonic oscillations with frequencies
(12) and (13).

                                           Content                                              Points
 Formula (1): F = −my                                                                            0.3
 Formula (2): mx = −kx + mg − my                                                                 0.3


XVII International Zhautykov Olympiad/Theoretical Competition                                         с. 2/16

 Formula (3):  sly = −2  sgy + kx                                                             0.3
                    mg
 Formula (4): x0 =                                                                              0.3
                     k
                     kx0      m
 Formula (5): y0 =        =                                                                     0.3
                    2  gs 2  s
 Formula (6): x = x0 + A cos t                                                                 0.3
 Formula (7): y = y0 + B cos t                                                                 0.3
 Formula (8): A( −  ) = B
                    2
                    1
                         2               2
                                                                                                0.2
 Formula (9): A = B( −  )
                   2
                   3
                             2
                             2
                                     2
                                                                                                0.2
 Formula (10): ( −  )( −  ) =  
                   2
                   1
                         2       2
                                 2
                                             2   2   2
                                                     3                                          0.4
                         +  +   ( +  +  ) − 4 
                         2       2           2       2   2   2 2   2   2

 Formula (11): 1,2
                 2
                    =    1       2           3       1   2   3     1   2
                                                                                                0.3
                                                     2
                                                                                                0.2
                        12 + 22 + 32 − (12 + 22 + 32 )2 − 41222
 Formula (12): 1 =
                                          2
 Numerical value in formula (12): 1 = 5.19s −1                                                 0.2

                        12 + 22 + 32 + (12 + 22 + 32 ) 2 − 41222                        0.2
 Formula (13): 2 =
                                          2
 Numerical value in formula (13): 2 = 12.07s −1                                                0.2
 Total                                                                                          4.0

                                                 Problem 1.2 (3.0 points)
        The plate has volume
                V = a2h ,                                                                             (1)
and it is subject to the gravity force
                Fp = Vg .                                                                            (2)
        At the line of contact between the plate and water, a difference in water levels occurs, as shown in
the figure below.




        As a result, on the lower surface of the plate with the area
                S = a2                                                                               (3)
differential pressure applies
                p = 0 g ( H + h) ,                                                                 (4)
which results in a vertically upward force
                F = pS .                                                                            (5)
        To determine the value of H , we select a certain volume of water with the width l near its contact
line with the plate. It is subject to the surface tension force equal to
                F = 2 l ,                                                                          (6)
as well as the force due to the pressure of the liquid column
                Fp = pS ,                                                                           (7)


XVII International Zhautykov Olympiad/Theoretical Competition                                        с. 3/16

where the average pressure ia found as
                    1
                p = 0 gH                                                                            (8)
                    2
together with the cross-sectional area
               S = Hl .                                                                             (9)
       From the water equilibrium condition
                F = Fp                                                                              (10)
it follows that the height difference is obtained as
                           
                H =2           .                                                                     (11)
                          0 g
       The additional weight on the plate is acted upon by the gravity force
               Fm = mg ,                                                                             (12)
and equilibrium condition
               Fp + Fm = F                                                                           (13)
the mass of the weight is finally derived as
                                               0
                m = (  0 −  ) a 2 h + 2a 2         = 52.6 g .                                      (14)
                                                g

                                                Content                                     Points
 Formula (1): V = a h 2
                                                                                             0.2
 Formula (2): Fp = Vg                                                                        0.2
 Formula (3): S = a 2                                                                         0.2
 Formula (4): p = 0 g ( H + h)                                                              0.2
 Formula (5): F = pS                                                                         0.2
 Formula (6): F = 2 l                                                                       0.2
 Formula (7): Fp = pS                                                                        0.2
                  1                                                                           0.2
 Formula (8): p =   0 gH
                  2
 Formula (9): S = Hl                                                                         0.2
 Formula (10): F = Fp                                                                        0.2
                                                                                             0.2
 Formula (11): H = 2
                           0 g
 Formula (12): Fm = mg                                                                        0.2
 Formula (13): Fp + Fm = F                                                                    0.2
                                               0                                            0.2
 Formula (14): m = ( 0 −  )a 2 h + 2a 2
                                        g
 Numerical value in formula (14): m = 52.6 g                                                  0.2
 Total                                                                                        3.0

                                               Problem 1.3 (3.0 points)
       The current through the coil cannot change instantly and immediately after the key K is shorted it
remains equal to zero. At the same time, since the resistance of the connecting wires is very small, the
capacitors C1 and C 2 are almost instantly charged up to charges q10 and q20 respectively, whereas the
capacitor C3 remains uncharged


XVII International Zhautykov Olympiad/Theoretical Competition                                           с. 4/16

                q30 = 0 ,                                                                                 (1)
since it can only be charged through the coil. Note that Joule heat is generated in the connecting wires.
        Thus, at the initial moment of time, the capacitors C1 and C 2 are connected in series to a constant
voltage source U 0 and their charges are equal
                 q10 = q20 ,                                                                              (2)
and the corresponding voltages add up, so that
                 q10 q20
                      +        = U0 .                                                                     (3)
                 C1 C2
        Thus, we find from equations (2) and (3) that
                                 CC
                 q10 = q20 = 1 2 U 0 .                                                                    (4)
                                C1 + C2
        The total energy of the system immediately after the key K shortening turns out to be
                         q2       q2    CC U2
                 W0 = 10 + 20 = 1 2 0 .                                                                   (5)
                        2C1 2C2 2(C1 + C2 )
        After charging the capacitors C1 and C 2 , the current through the coil starts to increase and harmonic
oscillations are generated in the system, at which Joule losses can already be neglected, since the resistance
of the connecting wires is very small.
        Note that at that moment in time when the current in the coil is maximum, the voltage across it is
zero and the capacitors C 2 and C3 turn out to be connected in parallel. For such a connection of capacitors,
the following relations for charges are satisfied
                 q1 = q2 + q3 .                                                                           (6)
                 q2 q3
                      =      .                                                                            (7)
                 C 2 C3
                 q1 q2
                     +      = U0 .                                                                        (8)
                 C1 C2
        Solving together the set of equations (6)-(8), we find the charges of the capacitors
                       C (C + C3 )
                 q1 = 1 2             U0 .                                                                (9)
                       C1 + C2 + C3
                            C1C2
                 q2 =                 U0 .                                                                (10)
                       C1 + C2 + C3
                            C1C3
                 q3 =                 U0 ,                                                                (11)
                       C1 + C2 + C3
and the energy of the system in this state is obviously equal to
                        C (C + C3 )U 02 LI max2
                 W= 1 2                   +       .                                                       (12)
                        2(C1 + C2 + C3 )     2
        In this case, the work of the source is found as
                 A = (q1 − q10 )U 0 ,                                                                     (13)
and the energy conservation law is written in the following form
                 W0 + A = W ,                                                                             (14)
which provides the maximum currect
                                        C3
                 I max =                                C1U 0 .                                           (15)
                            (C1 + C2 )(C1 + C2 + C3 ) L
        Finding the minimum voltage U min across the capacitor C 2 is a slightly more difficult task that has a
rather simple solution. It is obvious that harmonic oscillations occur in the system, at which the potential
energy is constantly transformed into kinetic energy and backwards. For the presented electrical circuit, the


XVII International Zhautykov Olympiad/Theoretical Competition                                                  с. 5/16

role of the kinetic energy is played by the energy of the coil. Therefore, when the current through the coil is
zero, then the system is in its large deviation from equilibrium, while the voltage across the capacitor C 2 is
                         q         C1
                  U 20 = 20 =           U0 .                                                                  (16)
                         C2 C1 + C2
Note that the zero coil current corresponds to the initial moment when the key K is just shorted.
         After a quarter of a period has passed, the current in the coil becomes maximum and the system
passes the equilibrium position, whereas the voltage across the capacitor C 2 drops to the value
                         q          C1
                  U2 = 2 =                   U0 ,                                                             (17)
                        C2 C1 + C2 + C3
that is, it falls by U 20 − U 2 . After another quarter of the period, the voltage across the capacitor will further
drop by the same amount, which is, at the same time, equal to U 2 − U min , so the minimum voltage is
ultimately obtained as
                                           C1 (C1 + C2 − C3 )
                  U min = 2U 2 − U 20 =                           U0 .                                        (18)
                                        (C1 + C2 )(C1 + C2 + C3 )

                                             Content                                                  Points
 Formula (1): q30 = 0                                                                                  0.2
 Formula (2): q10 = q20                                                                                 0.2
              q10 q20                                                                                   0.2
 Formula (3):     +     = U0
              C1 C2
                          CC                                                                            0.2
 Formula (4): q10 = q20 = 1 2 U 0
                         C1 + C2
                     q102  q2    CC U2                                                                  0.2
 Formula (5): W0 =        + 20 = 1 2 0
                     2C1 2C2 2(C1 + C2 )
 Formula (6): q1 = q2 + q3                                                                              0.2
              q2 q3                                                                                     0.2
 Formula (7):    =
              C 2 C3
              q q                                                                                       0.2
 Formula (8): 1 + 2 = U 0
              C1 C2
                        C1C2                                                                            0.2
 Formula (10): q2 =              U0
                    C1 + C2 + C3
                      C1 (C2 + C3 )U 02 LI max
                                           2                                                            0.2
 Formula (12): W =                     +
                      2(C1 + C2 + C3 )    2
 Formula (13): A = (q1 − q10 )U 0                                                                       0.2
 Formula (14): W0 + A = W                                                                               0.2
                                       C3                                                               0.2
 Formula (15): I max =                                 C1U 0
                           (C1 + C2 )(C1 + C2 + C3 ) L
 Formula (18): U min = 2U 2 − U 20                                                                      0.2
                             C1 (C1 + C2 − C3 )                                                         0.2
 Formula (18): U min =                              U0
                          (C1 + C2 )(C1 + C2 + C3 )
 Total                                                                                                  3.0


XVII International Zhautykov Olympiad/Theoretical Competition                                         с. 6/16

            Problem 2. Thermodynamics of one-component plasma (10.0 points)
2.1 The smallest distance between neighboring deuterium nuclei coincides with the edge of the cube, and
since there is 1 nucleus per cube, their concentration is
                      1
                n= 3 ,                                                                                 (1)
                    a
therefore
                      1
                a = 3 = 8.5110−12 м                                                                   (2)
                       n
2.2 The electrostatic energy of interaction of two nuclei located at the distance a from each other is found
as
                          e2
                Wp =           ,                                                                       (3)
                       4 0 a
and their thermal energy is evaluated by the formula
                ET = k BT ,                                                                            (4)
whence the sought ratio is obtained in the form
                    W            e2
                = p =                = 111 .                                                          (5)
                     ET 4 0 ak BT
2.3 In general, the spherical cell is neutral, and its radius is equal to
                 R=a/2                                                                                 (6)
with the corresponding volume
                     4
                V =  R3 ,                                                                             (7)
                     3
therefore, the bulk charge density is expressed as
                        e        6e    6
                 = − = − 3 = − ne = −4.95 1014 Cl / m3 .                                             (8)
                        V      a      
2.4 Let us apply Gauss’s theorem
                             Q
               S
                  E  dS =0
                                                                                                       (9)

to the sphere of radius r centered at the location of the nucleus. The flux of the electric field strength E
through this sphere, due to symmetry, is delivered by
                E  dS = E 4 r ,
                                2
                                                                                                        (10)
               S

and the net charge Q inside the sphere is obtained as
                           4
               Q = e +   r3 .                                                                       (11)
                           3
       It follows from equations (9)-(11) that
                      e         r
                E=            +      ,                                                                (12)
                    4 0 r 2
                                3 0
and the sought potential difference is determined by the expression
                                         a /4
                (a / 4) −  (a / 2) = −  Edr ,                                                      (13)
                                         a /2

which finally yields
                                          5e
                (a / 4) −  (a / 2) =     = 211V .                                                   (14)
                                  16 0 a
2.5 The second term on the right-hand side of expression (12) determines the strength of the electric field
created by the uniform charge distribution; therefore, the equation of motion of the nucleus projected onto
the radial direction has the form


XVII International Zhautykov Olympiad/Theoretical Competition                                          с. 7/16

                     e
               mr =      r,                                                                             (15)
                    3 0
which is an equation of harmonic oscillations with a frequency
                         e          2e 2         2ne 2
               p = −           =              =          = 2.94 1016 s −1 .                           (16)
                        3m p 0    m p 0 a 3
                                                  m p 0
2.6 At a fixed temperature, the mean square thermal velocity of the nucleus is derived as
                    kT
                v= B ,                                                                                  (17)
                     mp
and the corresponding amplitude of deviation from the equilibrium position is determined as
                   v
               A=     = 2,85 10−13 m .                                                                 (18)
                   p
It can be seen that the condition A a holds, i.e. the deuterium nuclei do indeed perform small oscillations
near their equilibrium positions.
2.7 The internal energy of the system consists of the thermal energy of the thermal motiont of nuclei and the
electrostatic energy of each cell. In turn, the electrostatic energy of each cell consists of the interaction
energy of nuclei with the surrounding electron neutralizing background and the energy of the background
itself.
        Let us divide the cell into spherical layers and consider the layer located at the distance r from the
cell center and having the thickness dr . Its charge is obtained as
                dq =  4 r 2 dr ,                                                                       (19)
and the corresponding interaction energy with the nucleus is
                        R edq        3e 2
                W1 =            =−         .                                                            (20)
                       0 4 r      4 0 a
                             0

        The energy density of the electric field is found by the formula
                     1
                w = 0E2 ,                                                                               (21)
                     2
and since the electric field strength of the uniform background is determined by the second term in
expression (12) and outside the sphere has the form like that of a point-дшлу charge, which formally
coincides with the first term of expression (12),, then the electrostatic energy of the uniform background is
evaluated as follows
                                 2                           2
                   1
                        R
                           r           1       e                   3e 2
               W2 =  0       4 r dr +  0  
                                     2
                                                           4 r dr =
                                                                2
                                                                               .                        (22)
                   2 0  3 0            2 R  4 0 r 2            10 0 a
        Thus, the total electrostatic energy of a single cell is written as
                                    9e 2
                W = W1 + W2 = −                                                                    (23)
                                  20 0 a
and is equal to the work that must be done to create it.
        As shown above, the nucleus in the cell center is a three-dimensional harmonic oscillator, so its
thermal chaotic energy is determined as
                E = 3Nk BT ,                                                                       (24)
and hence the internal energy of N cells has the form
                                            9e 2 N 4/3
                U = E + NW = 3Nk BT −                   .                                          (25)
                                           20 0 V 1/3
        Thus, the sought constants are found as
                1 = 3k BT ,                                                                       (26)
                       9e 2
               2 = −        .                                                                          (27)
                      20 0


XVII International Zhautykov Olympiad/Theoretical Competition                                          с. 8/16

2.8 In the absence of the neutralizing backgrounds of two nuclei, their fusion corresponds to the bare
Coulomb barrier. The presence of neutralizing backgrounds leads to a decrease in the Coulomb barrier,
which is obviously determined by the interaction of nuclei with their backgrounds and the self-energy of the
backgrounds, i.e. by expression (23). In this case, the thermal energy of nuclei remains small in comparison
with the lowering of the Coulomb barrier.
        Each of the two cells before fusing has the electrostatic energy
                        9e 2 n1/3
                W =−               .                                                                      (28)
                         20 0
        After fusion, a new cell is formed with the volume
                V ' = 2V                                                                                  (29)
with a helium nucleus in the center having an electric charge
                e ' = 2e .                                                                                (30)
        In accordance with the general formula, the electrostatic energy of the formed cell is derived as
                              9e 2 n1/3
                W ' = −25/3             ,                                                                 (31)
                              20 0
whence the following expression for the Coulomb barrier lowering is obtained
                                        (22/3 − 1)9e 2 n1/3
                 U c = 2W − W ' =                          = 5.72 10−17 J .                             (32)
                                             10 0
2.9 The circular process ABCD is the Carnot cycle. Let us denote the
temperature on the isotherm AB as TAB , and on the isotherm CD as TCD , while
they differ very little from each other, so that TAB  TCD  T and TAB − TCD T .
The work A done in the cycle is equal to the area of the parallelogram ABCD ,
which is, in turn, equal to the area of the parallelogram ABEF . Since
 AF = (P / T )V (TAB − TCD ) , the work in the cycle is derived as
                      P 
                A=          (TAB − TCD )(VB − VA ) .              (33)
                      T V
       In the process AB , the temperature is constant, so the change in internal energy is expressed as
                               U 
               UB −U A =            (VB − VA ) ,                                                       (34)
                               V T
and the supplied amount of heat according to the first law of thermodynamics takes the form
                Q = U B − U A + P(VB − VA ) .                                                            (35)
       Since the process ABCD is a Carnot cycle, its efficiency is written as
                 A TAB − TCD
                   =              ,                                                                      (36)
                Q         TAB
and combining equations (33) - (36), we obtain the required relation
                 U           P 
                       =T          −P.                                                               (37)
                 V T         T V
2.10 Substituting formula (25) into equation (37), we obtain the first-order differential equation
                   P              3e 2 N 4/3
                T        −P=                   ,                                                       (38)
                   T V           20 0 V 4/3
whose solution takes the form
                                         3e 2 N 4/3
                P (T , V ) = C (V )T −               ,                                                   (39)
                                        20 0 V 4/3
where C (V ) refers to some constant, which, in principle, can depend on the volume of the system.
       In the absence of interaction between the nuclei, the pressure of the system should be reduced to the
pressure of an ideal gas


XVII International Zhautykov Olympiad/Theoretical Competition                                           с. 9/16

                                      NkBT
               P(T ,V ) |e→0 =             ,                                                            (40)
                                       V
and we immediately find
                            Nk BT    3e 2 N 4/3
               P (T , V ) =       −              .                                                      (41)
                             V      20 0 V 4/3
        Thus, the sought constants are obtained as
                1 = k BT ,                                                                             (42)
                                  2
                         3e
               2 = −          .,                                                                       (43)
                        20 0
                    4
               3 = .                                                                                   (44)
                    3
       Substituting the numerical values, we obtain the numerical value for the pressure
               P = −2,59 1016 Па .                                                                     (45)
The pressure turns out to be negative! In fact, the pressure of the entire system includes the pressure of the
electronic component and is definitely positive.

                                                    Content                                    Points
                           1                                                                 0.2
         Formula (2): a = 3
  2.1                       n                                                                           0.4
         Numerical value in formula (2): a = 8.5110           −12
                                                                     m                       0.2
                                          e2                                                 0.2
         Formula (3): W p =
                                      4 0 a
         Formula (4): ET = k BT                                                              0.2
  2.2                                                                                                   0.8
                              e2                                                             0.2
         Formula (5):  =
                          4 0 ak BT
         Numerical value in formula (5):  = 111                                             0.2
         Formula (6): R = a / 2                                                              0.1
                          4                                                                  0.1
         Formula (7): V =  R 3
                          3
  2.3                                                                                                   0.6
                            6                                                                0.2
         Formula (8):  = − ne
                                      
         Numerical value in formula (8):  = −4.95 1014 Cl / m3                             0.2
                                 Q                                                           0.2
         Formula (9):  E  dS =
                         S
                                               0
         Formula (10):  E  dS = E 4 r 2                                                   0.2
                              S

                                  4                                                          0.2
         Formula (11): Q = e +   r 3
                                  3
  2.4                         e        r                                                    0.2        1.4
         Formula (12): E =           +
                           4 0 r 2
                                       3 0
                                                      a /4
                                                                                             0.2
         Formula (13):  (a / 4) −  (a / 2) = −  Edr
                                                      a /2

                                                       5e                                    0.2
         Formula (14):  (a / 4) −  (a / 2) =
                                                    16 0 a


XVII International Zhautykov Olympiad/Theoretical Competition                  с. 10/16

         Numerical value in formula (14):  (a / 4) −  (a / 2) = 211V   0.2
                             e                                          0.2
         Formula (15): mr =       r
                             3 0
                              2ne 2                                      0.2
  2.5                                                                           0.6
         Formula (16):  p =
                              m p 0
         Numerical value in formula (16):  p = 2.94 1016 s −1          0.2
                               k BT                                      0.2
         Formula (17): v =
                               mp
  2.6                          v                                         0.2    0.6
         Formula (18): A =
                              p
         Numerical value in formula (18): A = 2.85 10−13 m              0.2
         Formula (19): dq =  4 r 2 dr                                  0.2
                                    3e 2                                 0.2
         Formula (20): W1 = −
                                   4 0 a
                           1                                             0.2
         Formula (21): w =  0 E 2
                           2
                              3e 2                                       0.2
                       W
         Formula (22): 2  =
                            10 0 a
  2.7                          9e 2                                      0.2    1.8
         Formula (23): W = −
                             20 0 a
         Formula (24): E = 3Nk BT                                        0.2
                                                          9e 2 N 4/3     0.2
         Formula (25): U = E + NW = 3Nk BT −
                                                         20 0 V 1/3
         Formula (26): 1 = 3k BT                                        0.2
                                    9e 2                                 0.2
         Formula (27):  2 = −
                                   20 0
                               9e 2 n1/3                                 0.2
         Formula (28): W = −
                                20 0
         Formula (29): V ' = 2V                                          0.2
         Formula (30): e ' = 2e                                          0.2
  2.8                                   9e 2 n1/3                        0.2    1.2
         Formula (31): W ' = −25/3
                                        20 0
                                   (22/3 − 1)9e 2 n1/3                   0.2
         Formula (32):  U c =
                                        10 0
         Numerical value in formula (32):  U c = 5.72 10−17 J          0.2
                            P                                         0.2
         Formula (33): A =       (TAB − TCD )(VB − VA )
                            T V
  2.9                               U                                 0.2    1.0
         Formula (34): U B − U A =      (VB − VA )
                                    V T
         Formula (35): Q = U B − U A + P(VB − VA )                       0.2


XVII International Zhautykov Olympiad/Theoretical Competition                                       с. 11/16

                           A TAB − TCD                                                    0.2
          Formula (36):      =
                           Q    TAB
                         U      P                                                   0.2
          Formula (37):      =T      −P
                         V T    T V
                           P          3e 2 N 4/3                                       0.2
          Formula (38): T       − P =
                           T V       20 0 V 4/3
                                                  3e 2 N 4/3                              0.2
          Formula (39): P (T , V ) = C (V )T −
                                                 20 0 V 4/3
                                         NkBT                                             0.2
          Formula (40): P(T ,V ) |e→0 =
                                           V
                                     Nk BT     3e 2 N 4/3                                 0.2
  2.10    Formula (41): P (T , V ) =        −                                                        1.6
                                      V       20 0 V 4/3
          Formula (42): 1 = k BT                                                         0.2
                                   3e 2                                                   0.2
          Formula (43):  2 = −
                                  20 0
                             4                                                            0.2
          Formula (44): 3 =
                             3
          Numerical value in formula (45): P = −2.59 1016 Pa                             0.2
 Total                                                                                              10.0

                               Problem 3. Optical waveguide (10.0 points)
                                                 Description of waves
3.1 The function
                          
               E (t , x) = E0 cos(t − kx +  ) ,                                                    (1)
describing a wave at a fixed moment in time t = t0 gives the distribution of the electric field strength in
space. When the coordinate is changed by the wavelength  , the argument of the cosine must change to
2 , therefore
               (t0 − k (x +  ) +  ) − (t0 − kx +  ) = 2 .                                      (2)
       It follows from this relation that
                    2
               k=      .                                                                             (3)
                      
       Fixing a point in space x = x0 and reasoning similarly, we can write
               ( (t + T ) − kx0 +  ) − (t − kx0 +  ) = 2 ,                                    (4)
which yields
                     2
               =        .                                                                         (5)
                     T
3.2 The speed of propagation of a monochromatic wave is the speed of motion of a certain wave surface of
constant phase. This surface satisfies the equation
               t − kx +  = const .                                                               (6)
       It follows from this relation that the wave propagation speed is
                    dx 
               c=       = .                                                                        (7)
                    dt k

3.3 The surfaceof the constant phase at a fixed time instant satisfies the equation
                   
               k  r = const ,                                                                       (8)


XVII International Zhautykov Olympiad/Theoretical Competition                                        с. 12/16

and this is a family of planes perpendicular to the wave vector.




3.4 Expanding the scalar product, we obtain the wave equation in the coordinate representation:
               E = E0 cos(t − kx cos − ky sin  +  )                                              (9)
3.5 Since the superposition principle is valid for the electric field strength, we can write for a composite
wave
               E = E0 cos( 0 t − k 0 x) + E0 cos(( 0 +  )t − (k 0 + k )x ) =
                                                     k           k  .                     (10)
                 = 2 E0 cos   0 +       t −  k 0 +       x  cos t−    x
                                        2               2    2         2 
        Taking into account that   0 , and, consequently, k  k 0 , we rewrite this expression as:
                 E = A0 (x, t ) cos( 0 t − k 0 x ) .                                                   (11)
Here the following notation is used
                                                 k 
                 A0 ( x, t ) = 2 E 0 cos     t−         x                                             (12)
                                         2           2 
for slowly varying wave amplitude.
3.6 To determine the time duration of the packet, it should be taken into account that when passing from one
"zero" of the cosine to the next, the argument of the cosine changes to  , therefore
                                              2
                             =   =                 .                                                (13)
                       2                        
        Taking into account that  = 2 , we obtain from expression (13) the relationship between the
packet duration and its spectral width as
                  = 1 .                                                                              (14)
3.7 For a similar reasoning, it is not difficult to find that
                 k                         2
                      L =  L =                .                                                       (15)
                  2                         k
3.8 The phase velocity can be found as the velocity of motion of the wave surface of constant phase. It is
derived from function (11) that this surface satisfies the condition
                 (0 t − k 0 x ) = const ,                                                              (16)
which results in the phase velocity
                       
                 vp = 0 .                                                                               (17)
                        k0
3.9 To determine the group velocity, we write down the condition that the wave amplitude, for example, is
maximum
                          k
                      t−         x = 0.                                                                 (18)
                   2         2
        It is concluded from this expression that the group velocity is given by the formula
                       
                 vg =         .                                                                         (19)
                        k
3.10 For electromagnetic waves in vacuum, the relation  = c is fulfilled, which validates
                  = kc ,                                                                               (20)
and it is finally obtained that
                      
               vp =       = c,                                                                        (21)
                      k


XVII International Zhautykov Olympiad/Theoretical Competition                                       с. 13/16

                      
                  vg =      = c = vp ,                                                              (22)
                       k
i.e. both the phase and group speeds are equal to the speed of light c in a vacuum.
                                                     Plane waveguide
3.11 The function proposed in the problem statement describes the field in a plane waveguide
                E(t , x, y) = E0 cos(t − k x x )sin (k y y )                                       (23)
and satisfies one boundary condition: at y = 0 the electric field strength E = 0 . Therefore, one should
choose such values of k y so that the second boundary condition is fulfilled: at y = a the field strength
should also vanish. This condition is satisfied when
                                                                         
                  sin k y a = 0  k y a = m               ky = m   .                               (24)
                                                                   a
In the expressions above m stands for a positive integer, m = 1, 2, 3...
3.12 Let us write the equations of symmetric waves
                E1 = E0 cos (t − k0 x cos  + k0 y sin  +  ) ,                                   (25)
                  E2 = E0 cos (t − k0 x cos  − k0 y sin  −  ) ,                                 (26)
              
where k 0 =   is the wavenumber for waves, propagating at an angle   to the planes of the waveguide,
          c
and summing them up yileds
             E = E1 + E2 = 2 E0 cos (t − k0 x cos  ) cos ( k0 y sin  +  ) ,                (27)
with the following relation
                E0 = E0 / 2 .                                                                       (28)
Note that there should be  = − / 2 .
3.13 Comparison of the obtained formulas (23) and (27) implies that they coincide if
               k x = k0 cos  ,                                                                      (29)
                  k y = k0 sin  .                                                                   (30)
3.14 Comparing the values of k y in formulas (24) and (30), we find
                                                                    
                  k y = k 0 sin  m = m              sin  m = m
                                                       .                                             (31)
                               a                  ak 0
       The wavenumber of the considered waves in vacuum is related to the wavelength by
                  2
             k0 =    ,                                                                               (32)
                         
then the values of the possible angles are given by the formula
                                             
                  sin  m = m       .    =m                                                       (33)
                        ak 0     2a
3.15 Equation (23) implies that the phase velocity of wave propagation in the waveguide is given by the
formula
                                    
                  vp =       =  .                                                                     (34)
                   k x k0 cos 
       Expressing the value of the cosine of the angle in terms of its sine, which is determined by formula
(33), we obtain
                                                                  
                  vp =               =                    =                       .                  (35)
                         k0 cos         k0 1 − sin 2                 
                                                                              2

                                                              k0 1 −  m 
                                                                      2a 


XVII International Zhautykov Olympiad/Theoretical Competition                                            с. 14/16

                                                                                                         
          Finally, using formulas relating frequencies, wavelengths and the speed of light in a vacuum        =c,
                                                                                                         k0
     2
=        c , it is derived that
     
                                                                 c
                  vp =               =                    =                   .                            (36)
                         k0 cos         k0 1 − sin 2            c 
                                                                          2

                                                              1− m   
                                                                  a 
Thus, it turns out that the phase velocity of propagation of an undamped wave in the waveguide is greater
than the speed of light in vacuum.
3.16 The propagation velocity of a pulse is the group velocity, therefore, it is determined by formula (19), in
which the ratio of the increments can be replaced by the derivative
                                                   −1
                       d  dk 
                 vg =      =     =      .                                                                (37)
                       k dk  d 
          To evaluate the velocity using this formula, it is necessary to obtain explicitly the dependence of the
                                                                                                               
wavenumber on the frequency, k ( ) . To do so, we use the general formula for the phase velocity v p =
                                                                                                               k
and obtain
                                                    2                     2
                              c        1        c 
               k=     =    1− m        =     2 −  m  ,                                                (38)
                   vp c         a        c        a
and the pulse propagation velocity is written as
                                                                   −1
                                                        
                                                        
                          dk 
                                −1
                                     1                           c 
                                                                            2

                v = vg =      =                        = c 1− m        .                          (39)
                          d      c           c 
                                                       2
                                                                     a 
                                        2 − m  
                                              a 
As follows from this formula, the group velocity is naturally less than the speed of light in a vacuum. Also,
it should be indicated that this speed is equal to c cos , which is quite obvious.
3.17 Let us turn to formula (33) and substitute the given ratio a /  = 1.2
                                 
                  sin  m = m 0,42m .                                                                       (40)
                         2a
       Since the sine of any argument does not exceed unity, it follows from the obtained expression that
only two modes with m = 1 and m = 2 can propagate in a given waveguide, and, in other words, the input
pulse generate two pulses of these modes in the waveguide. The propagation velocities of pulses in these
modes differ markedly. First of all, let us express these velocities in terms of a given ratio a /  in the form
                                           2                   2
                           c                
                v = c 1− m       = c 1− m  .                                                         (41)
                           a               2a 
        At the waveguide input, pulses in both modes are excited simultaneously, but since they move at
different speeds, as the distance traveled increases, they diverge in time. The number of pulses doubles when
pulses in different modes diverge for a time exceeding the pulse duration, hence, the minimum distance X
can be found from the condition
                X X
                   − = ,                                                                                (42)
                v2 v1
which leads to the final answer


XVII International Zhautykov Olympiad/Theoretical Competition                                           с. 15/16

                                                c
                X=               =                                 1,4c .                              (43)
                     1 1                 1             1
                       −                         −
                     v2 v1          
                                             2
                                                  
                                                              2

                               1−          1− 2 
                                    2a         2a 
3.18 For a waveguide to operate in a single-mode regime, it is necessary to satisfy the following condition
                             
               sin  2 = 2        1,                                                                    (44)
                         2a
which yields the inequality
               a
                   1.                                                                                   (45)
               

                                              Content                                          Points
         Formula (2): (t0 − k (x +  ) +  ) − (t0 − kx +  ) = 2                         0.2
                                 2
         Formula (3): k =                                                                    0.2
                                 
  3.1    Formula (4): ( (t + T ) − kx0 +  ) − (t − kx0 +  ) = 2                                      0.8
                                                                                             0.2
                           2
         Formula (5):  =                                                                    0.2
                            T
         Формула (6):   t − kx +  = const                                                  0.2
  3.2                      dx                                                                            0.4
         Formula (7): v =     =                                                              0.2
                           dt k
  3.3    A family of planes, perpendicular to the wave vector..                              0.2          0.2
  3.4    Formula (9): E = E0 cos(t − kx cos − ky sin  +  )                              0.2          0.2
                                                          k              k 
         Formula (10): E = 2 E0 cos   0 +        t −  k0 +     x  cos     t−    x   0.2
                                               2             2          2      2 
  3.5                                                                                                     0.4
                                                    k 
         Formula (12): A0 ( x, t ) = 2 E 0 cos    t−       x                               0.2
                                               2       2 
                                               2
         Formula (13):       =   =                                                       0.2
  3.6                   2                                                                               0.4
         Formula (14):  = 1                                                               0.2
                       k                       2
  3.7    Formula (15):       L =  L =                                                      0.2          0.2
                        2                       k
         Formula (16): ( 0 t − k 0 x ) = const                                              0.2
  3.8                                                                                                    0.4
         Formula (17): v p = 0                                                               0.2
                              k0
                               k
         Formula (18):       t−        x=0                                                   0.2
                         2         2
  3.9                                                                                                     0.4
                              
         Formula (19): vg =                                                                  0.2
                              k
         Formula (20):  = kc                                                                0.2
                                     
         Formula (21): v p =  =c                                                             0.2
 3.10                       k                                                                             0.6
                            
         Formula (22): vg =    = c = vp                                                      0.2
                            k


XVII International Zhautykov Olympiad/Theoretical Competition                                     с. 16/16

                                    
 3.11    Formula (24): k y = m                                                              0.2     0.2
                               a
         Formula (25): E1 = E0 cos (t − k0 x cos  + k0 y sin  +  )                     0.2
         Formula (26): E2 = E0 cos (t − k0 x cos  − k0 y sin  −  )                     0.2
 3.12                                                                                               0.8
         Formula (28): E0 = E0 / 2                                                         0.2
         Condition:  = − / 2                                                              0.2
         Formula (29): k x = k0 cos                                                        0.2
 3.13                                                                                               0.4
         Formula (30): k y = k0 sin                                                        0.2
                                                                                 
         Formula (31): k y = k 0 sin  m = m                      sin  m = m              0.3
                                                         a                       ak 0
 3.14                                                                                               0.6
                                                            
         Formula (33): sin  m = m                  =m                                      0.3
                                        ak 0             2a
                                               
         Formula (34): v p =        =                                                       0.3
                               kx       k0 cos 
 3.15                                    c                                                          0.6
         Formula (36): v p =
                                                     2
                                       c                                                 0.3
                                   1−  m  
                                       a 
                                                                 −1
                                d  dk 
         Formula (37): vg =      =  =                                                     0.3
                               k dk  d 
                                                                  2                     2
                                            c    1       c 
 3.16    Formula (38): k =          =     1− m    =   2 −  m                           0.4     1.0
                              vp        c     a    c       a
                                                         2
                                   c 
         Formula (39): vg = c 1 −  m                                                      0.3
                                   a 
         Формула (40): sin  m  0, 42m                                                     0.2
         Possible modes with m = 1 and m = 2                                                0.4
                                                     2
                                   
         Formula (41): v = c 1 −  m                                                       0.4
 3.17                             2a                                                              1.8
                       X X
         Formula (42):    − =                                                              0.4
                       v2 v1
         Formula (43): X  1, 4c                                                           0.4
                                        
         Formula (44): sin  2 = 2              1                                          0.3
                                        2a
 3.18                                                                                               0.6
                         a
         Formula (45):       1                                                             0.3
                         
 Total                                                                                             10.0
