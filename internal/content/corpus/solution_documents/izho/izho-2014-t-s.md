---
id: solution-document-izho-2014-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2014_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [izho-2014-t-q1, izho-2014-t-q2, izho-2014-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2014_T_S.pdf."
---

X International Zhautykov Olympiad/Theoretical Competition/Solutions                 Page 1/10


     SOLUTIONS TO THE PROBLEMS OF THE THEORETICAL
                      COMPETITION
                                   Problem 1 (10 points)
                                   Problem 1A (3 points)
        In the first stage boiling occurs at a
constant pressure, hence at a constant temperature.
Likewise, in the third stage condensation takes
place at a constant pressure and temperature. The
second and the fourth stages can be considered as
adiabatic. Schematic (P,V) diagram of the steam
engine cycle is shown in the figure on the right.
Since this cycle is composed of two isotherms and
two adiabats, it is, thus, simply the Carnot cycle.
Therefore, its efficiency is found as
             T −T
        η= 1 2,                                   (1)
                T1
where T1 is the boiling temperature in the first
stage of the cycle, and T2 is the condensation temperature in the third stage of the cycle.
        The corresponding temperatures are found from the approximate formula for the saturated
vapor pressure provided at the formulation of the problem.
The first stage of the cycle happens at constant pressure

         P1 = P0 +
                   ( M + m ) g ≈ 1,3 ⋅ 105 Pa .                                                (2)
                        S
        The vapor temperature is the temperature of the water boiling point and is equal to
              P + b 130 + 384
        t1 = 1       =            ≈ 106°С = 379 К .                                            (3)
                a         4,85
        The temperature difference in formula (1) is conveniently evaluated as
                    P − P2 mg          20
        T1 − T2 = 1        =      =         ≈ 4,2 K .                                          (4)
                      a       Sa 4,85
                                                          T − T2 4,2
        Thus, the efficiency of the steam engine is η = 1       =      = 1,1% .
                                                            T1     379
                                               Grading scheme
          №                                       Content                               Points
          1.     1 and 3 stages are isobars and isotherms                                0,25
          2.     2 and 4 stages are adiabats                                             0,25
          3.     The cycle is identified as a Carnot cycle                                1,0
          4.     Correct cycle diagram                                                   0,75
          5.     Formula (1) for the efficiency of the Carnot cycle                      0,25
          6.     Formulas (2) and (4)                                                    0,25
          7.     Correct numerical value for the efficiency                              0,25
       Total                                                                              3.0
 X International Zhautykov Olympiad/Theoretical Competition/Solutions                       Page 2/10


                                          Problem 1В (5 points)
 The first solution.
        Consider the left part of the circuit. Its load characteristic
 (dependence of U against I)) is the straight line corresponding to an
                                                ε        r
 equivalent source with the parameters ε 0 = , r0 = .
                                                2        2
        For the equivalent circuit




                                          Cε 2
 the total released heat is found as Q0 =      . In the resistor R the released heat is obtained from the
                                           2
 simple proportion as
                                                           ε 
                                                                   2

                                                          C 
                                          R         R       2    RCε 2
                                      Q=       Q0 =     ⋅       =
                                        R + r0     R+
                                                      r      2   4(2 R + r )
                                                      2

The second solution.
       The Kirchhoff set of equations has the following form
        ε = I1r + I 2 r
                        q
         I 2 r
              = IR +
                        C
          I1= I + I 2
         
               I = q
       Eliminating I 1 и I 2 , we obtain the relation
                  r q ε
          I  R +  + =,
                  2 C 2
and multiplying it by I we get
                   r ε         qI ε       2qq d  ε q q 2 
          I2 R +  = I −           =    −     =       −
                                            2C dt  2 2C 
                                      q                        .
                   2 2         C 2
Hence
                     R d  ε q q2 
=         I 2R                    −
                        r dt  2 2C 
                                        ,
                   R+
                        2
and, thus,
  ∞                           q (∞)
           R  ε q q2 
∫0 I
=                 −
      2
            r        
     Rdt
         R +  2 2C 
            2           q (0)

                                                   ε
          On substituting q (0) = 0 and q (∞) =C       , we finally obtain
                                                   2
X International Zhautykov Olympiad/Theoretical Competition/Solutions                     Page 3/10


                RCε 2
       Q=                 .
              4( R + 2r )
                                             Grading scheme

I. Direct solution

        №                                         Content                               Points
        1.       There is a correct set of equations allowing to obtain the answer –
                 1.0;                                                                    1.0
                 if there is an error in the set or it is not complete – 0.
         2.      Correct expression for the current in the resistor R or/and for the
                                                                                         1.0
                 charge of the capacitor
         3.      Correct expression for the derivative of the square of the current
                 in R, or correct dependence I(t)
                                                                                         3.0
                 For manipulating errors – 1.0 points of 2.0
                 Propagation error is not accepted
         4.      Correct formula for Q = ∫ I 2 Rdt                                       1.0
       Total                                                                             5.0


II. Solution with the equivalent source
Propagation errors are not accepted
         №                                   Content                                    Points
         1.    Idea: to change the left part of the circuit by an equivalent source
                                                                                         1.0
               and to apply the energy conservation law
         2.    The parameters of the equivalent source

                 2.1 Two of the following statement are present:
                 1. No-load voltage Ɛ/2
                 2. Short circuit current Ɛ/r
                 3. Internal resistance is the parallel connection of two resistors r
                 or
                 the dependence U(I) is obtained                                         1.0

                 2.2 It is found that: Ɛ 0 = Ɛ/2, r 0 = r/2 (по 0.5 for each)
                 (Justification of the equivalent circuit is not required)               1.0
        3.       Total released heat in the equivalent circuit                           1.0
        4.       Correct answer                                                          1.0
       Total                                                                             5.0


                                        Problem 1С (2 points)
It is known that the beam, passing through the focal point of the lens, goes parallel to the optical
axis of the lens after refraction. Therefore, all the objects, shown in the figure, give the images of
the same size, i.e. the lens magnification is inversely proportional to the distance from the object to
the focal point.
X International Zhautykov Olympiad/Theoretical Competition/Solutions                      Page 4/10




                              Figure 1                              Figure 2

It is clearly seen from figure 2 that in the case of the diverging lens it is impossible to get the same
image size at different positions of the object, so the lens is necessarily converging.




                                             Figure 3

       Positions A and B of the object, which are arranged symmetrically with respect to the focal
point of the lens, result in the same image sizes (see figure 3). If the object is moved away by
another 5 cm, then it will be located in the position C, in which the image of the same size would
have been obtained by a three times larger object, so the image of the object is to be three times
smaller. Answer: 1/3 cm.
                                          Grading scheme
         №                                    Content                                Points
         1.    Correct answer                                                          1.0
         2.    Correct justification of the correct answer                             1.0
         3.    There is an error in the application of the lens formulas              -0.5
       Total                                                                           2.0

                            Problem 2 Jet propulsion (10 points)
1. Consider the rocket motion in the proper reference frame, i.e. the inertial reference frame which
moves with the speed of the rocket itself relative to the laboratory reference frame. In the proper
reference frame the rocket is always at rest at any given time. Let a rocket have mass m at the rime
moment t and throw away some fuel of mass dm with the velocity u . As a result the rocket
velocity changes by dv and the conservation of the momentum can be written as
        mdv − dmu 0 =  .                                                                         (1)
       In classical mechanics, the change in the rocket velocity in the laboratory reference frame
must coincide with the change in rocket velocity in the proper reference frame by virtue of the
Galilean transformations. Therefore, solving equation (1) with the initial condition m = m0 at v = 0 ,
we obtain the formula named after K. Tsiolkovsky
X International Zhautykov Olympiad/Theoretical Competition/Solutions                    Page 5/10


                   m 
          v = u ln  0  .                                                                        (2)
                   m
2. It is known that the orbital velocity at the Earth's surface is
          v1 = gR ,                                                                               (3)
then from equation (2) the initial mass of the rocket is found as
                       v
         =m 0    m exp =   4.87 × 10 kg.
                                      3
                                                                                                  (4)
                       u
3. If an external force F is exerted on the rocket, then, in the proper reference frame the total
momentum of the system does change, and equation (1) can be rewritten as
          mdv − dmu =   Fdt ,                                                                     (5)
or, using the notation µ = −dm / dt , we obtain
             dv
          m = F − µu .                                                                            (6)
              dt
By virtue of the relativity principle, this equation does not change its form in any inertial frame of
reference and it is called after I. Meshcherskij.
         On substituting F = mg , we finally obtain
             dv
          m = mg − µ u .                                                                          (7)
              dt
4. Since the rocket should hung motionlessly at some height, we assume that v = 0 . Substituting
v = 0 in equation (7) and differentiating it over time, we get
                   dµ
          −µ g = u .                                                                              (8)
                   dt
Using the initial condition µ (0) = m0 g / u , we finally find
                m0 g       gt 
   µ (t )
   =                  exp  −  .                                                                (9)
                  u        u 
5. Substituting v(t ) =                           = m0 − µ t into equation (7), one gets
                        A1t + A2 ln(1 + A3t ) and m
        A1 = − g ,                                                                               (10)
        A2 = −u ,                                                                                (11)
                µ
        A3 = −      .                                                                            (12)
                m0
6. The rockets achieves its maximum velocity if the fuel burns out almost instantaneously, and, at
the same time, the work done by the gravity force, turns out minimal. Thus, the optimal fuel
consumption is
        µopt = ∞ .                                                                               (13)
        Since the gravity force does not have time to affect the rocket velocity, it turns possible to
use the Tsiolkovsky formula (2)
                 m 
        v = u ln  0  .                                                                         (14)
                 m
Hence, the maximum height of the rocket is
                 u 2 2  m0 
        H max =     ln   .                                                                     (15)
                 2g     m
7. Suppose that a particle moves with the velocity v ' in the reference frame which, in turn, moves
with the velocity v in the laboratory reference frame. Then, the particle velocity w in the
laboratory reference frame is given by the relativistic formula
   X International Zhautykov Olympiad/Theoretical Competition/Solutions                     Page 6/10


                v + v'
          w=               .                                                                 (16)
                    vv '
               1+ 2
                     c
          Hence, we find the relationship between the velocity changes in corresponding reference
   frames as
                    v2 
                   1 − 2 
           dw = 
                         c 
                              2
                                dv ' .                                                       (17)
                  vv ' 
                 1 + 2 
                        c 
          In accordance with the Lorentz transformations
                       vx '
                 t '+ 2
           t=          c                                                                     (18)
                1 − v / c2
                       2

   the time differences in two frames are related as
                       vv ' 
                      1 + 2 
           dt = dt ' 
                             c 
                                    .                                                        (19)
                       1 − v2 / c2
          Dividing equation (17) and (19 ) and assuming v ' = 0 , we finally obtain
                              3/2              3/2
                 dw  v 2  dv '  v 2 
            ar =      =
                      1 −          = 1 −  ap .                                                   (20)
                 dt  c 2  dt '  c 2 
   8. In the proper reference frame the rocket motion is classical, and its acceleration is given by
                 dv' u dm
            a=p   =             .                                                                    (21)
                 dt ' m dt '
           Now we make use the transformation of acceleration (20) and time (19) for v ' = 0 to obtain
             dm        m
                =                  .                                                                 (22)
             dv u (1 − v 2 / c 2 )
           Hence, we find that
                 c
           α=       .                                                                                (23)
                2u
   9. Evaluation gives rise
                1+ v / c 
                            c /2 u

=      m0 m=              1028630 kg.                                                             (24)
                1− v / c 
10. Evaluation gives rise
      1+ v / c 
                            c /2 u

=m0 m=
                1730 kg.                                                                          (25)
      1− v / c 

                                              Grading scheme
     №                                       Content                                    Points
     1      Formula (1)                                                                  0.25        0.5
            Formula (2)                                                                  0.25
      2     Formula (3)                                                                  0.25        0.5
            Correct numerical value in (4)                                               0.25
      3     Formula (5)                                                                  0.25
            Formula (6)                                                                  0.25       0.75
            Formula (7)                                                                  0.25
X International Zhautykov Olympiad/Theoretical Competition/Solutions                        Page 7/10


   4     Formula (8)                                                                      0.25
         Initial condition µ (0) = m0 g / u                                               0.25       0.75
         Formula (9)                                                                      0.25
   5     Equating the coefficients of the polynomial in time to zero                       0.5
         Formula (10)                                                                      0.5
         Formula (11)                                                                      0.5       2.0
         Formula (12)                                                                      0.5
   6     Formula (13)                                                                      0.5
         Formula (14)                                                                     0.25       1.0
         Formula (15)                                                                     0.25
   7     Formula (16)                                                                     0.25
         Formula (17)                                                                      0.5
         Formula (18)                                                                     0.25       2.5
         Formula (19)                                                                      0.5
         Formula (20)                                                                      0.5
   8     Application of formula (19) to get equation (22)                                  0.5
         Formula (21)                                                                     0.25
         Formula (22)                                                                     0.25       1.5
         Formula (23)                                                                      0.5
  9      Correct numerical value in (25)                                                  0.25       0.25
 10      Correct numerical value in (26)                                                  0.25       0.25
Total                                                                                                10,0


                            Problem 3 Metamaterials (10 points)
1. Consider the conducting layer disposed radially at the interval [r , r + dr ] . Its conductivity d ρ is
                    dS         2π rdr
      = d  ρ σ0  = βr                 ,                                                                (1)
                     L            L
and, hence, the total conductivity is given by
                       2πβ R 3
             R
      =  ρ ∫d =   ρ             .                                                                      (2)
             0
                           3L
        Thus, the resistance of the wire is found as
               1       3L
         R0= =               =   2.39 × 10−2 Ohm .                                                     (3)
               ρ 2πβ R       3

2. The amount of heat generated in the wire per unit time is determined by Joule law
         PI = I 2 R0 .                                                                                 (4)
        In steady regime, the same amount of heat must be removed through the surface of the wire
into the environment, therefore, according to the Newton-Richman law
  =      PI 2π RLP
               =       ext    2πα RL(Ts − T0 ) ,                                                       (5)
whence
                        3I 2
        Ts T=     +              =  297 К.                                                             (6)
                    4π 2αβ R 4
               0


3. Consider a cylinder of radius r . Let us find an amount of heat generated per unit time inside that
cylinder. To do this, let us find the electric field strength in the wire. According to Ohm's law, the
current density is
         j = σ0E ,                                                                                     (7)
therefore, the total current can be written as
   X International Zhautykov Olympiad/Theoretical Competition/Solutions                    Page 8/10


                                                  2π R 3 β E
               r            r
 =       I ∫ j 2π
               =     rdr E ∫ σ 0 2π=    rdr                    .                                  (8)
              0                 0
                                                      3
Hence
                  3I
         E=             .                                                                         (9)
               2πβ R 3
        The electric power generated in the cylender is determined by the Joule law in differential
form
                r
                                      3I 2 Lr 3
=        Pr ∫ σ 0 E 2
                 =    2
                          π rLdr                .                                                 (10)
                0
                                      2πβ R 6
        It is evident that the power dissipated inside the cylinder must be taken away through the
surface of the cylinder, thus,
                                 dT
         Pr = P = −κ 2π rL           .                                                            (11)
                                  dr
        Solving differential equation (11), using (10) together with the initial condition
        T ( R) = Ts ,                                                                             (12)
the following solution is obtained in the form
                        I 2 (α R 3 + 3κ R 2 − α r 3 )
        T (r )= T0 +                                  .                                           (13)
                               4π 2αβκ R 6
        Thus, the temperature in the center of the wire is
                       I 2 (α R 3 + 3κ R 2 )
        Tmax T0 +
               =                              =  299 К   .                                        (14)
                           4π 2αβκ R 6
4. The radius change of the wire is determined by the law of thermal expansion of solids and can be
written as
                                           3γ (α R + 4κ ) I 2
                  R
        δ RT =∫ γ [T ( r ) − T0 ] dr =                           =5.70 × 10−9 m .                 (15)
                  0
                                             16 π  2
                                                    αβκ    R 3


5. The magnetic field induction is determined by the circulation theorem, which, in this case, is
written as
                   r             r
        =
        B 2π r     ∫ j 2π
                   0
                    =     rdr E ∫ σ 0 2π rdr .
                                 0
                                                                                                   (16)

   Using expression (9), we finally obtain
                      µ Ir 2
            B(r ) = 0 3 .                                                                           (17)
                      2π R
   6. The energy density of the magnetic field is given by
                       B 2 (r )
            wB (r ) =           ,                                                                   (18)
                         2 µ0
   therefore, the energy of the magnetic field inside the wire
                    R
                                           µ0 I 2 L
            =
            W B    ∫0 B
                      w  ( r )2π   =
                                  rLdr
                                            24π
                                               = 8.33 × 10−10 J .                                   (19)

   7. Let us write the equilibrium condition for the wire layer of small width l and length L , disposed
   at the interval r, r + dr . The total Ampere force acting on this layer is written as
            dFA = jB(r ) Lldr .                                                                     (20)
   Hence, the pressure difference is obtained as
                       dFA 3µ0 I 2 r 3
              =
            dp (r ) =                      dr .                                                     (21)
                        lL        4π 2 R 6
X International Zhautykov Olympiad/Theoretical Competition/Solutions                   Page 9/10


        Taking into consideration that the pressure at the wire pressure is zero, one gets
                    3µ I 2 ( R 4 − r 4 )
         p(r ) = 0                        .                                                     (22)
                         16π 2 R 6
8. As a result of the mechanical pressure the mechanical stress appears in the crystal lattice whose
energy density is determined by the expression
                σ 2 p 2 (r )
         =
         wσ       =               ,                                                             (23)
                2E         2E
thus, the total energy of mechanical deformations is found as
                                        3µ02 I 4 L
                 R
        =
        W σ     ∫0 σw   2π   =
                           rLdr
                                     320 Eπ R
                                                = 2.39 × 10−18 J .
                                                3 2
                                                                                                (24)

9. The radius change of the wire is determined by Hooke's law, which, in this case, can be written
in the form
              σ p(r )
        ε= =                ,                                                                   (25)
              E         E
where ε is the relative change in radius.
        Thus, the radius change due to mechanical stress is found as
                                                   3µ0 I 2
                    R            R
                              1
        δR= σ      ∫0 ε dr
                       =
                              Ea ∫       =
                                    p( r )dr
                                                 20π ER
                                                     2
                                                        = 1.91 × 10−12 m .                      (26)

10. Comparing expressions (15) and (25) we obtain
               4 µ0αβκ R 2
       =γ                    = 3.35 ×10−10 К −1 .                                               (27)
              5 E (α R + 4κ )

                                        Grading scheme
  №                                    Content                                     Points
  1      Formula (1)                                                                0.25
         Formula (2)                                                                0.25
         Formula (3)                                                                0.25        1.0
         Correct numerical numerical value in (3)                                   0.25
  2      Formula (4)                                                                0.25
         Formula (5)                                                                0.25
         Formula (6)                                                                0.25        1,0
         Correct numerical numerical value in (6)                                   0.25
  3      Formula (7)                                                                0.25
         Formula (8)                                                                0.25
         Formula (9)                                                                0.25
         Formula (10)                                                               0.25
         Formula (11)                                                               0.25        2.5
         Formula (12)                                                               0.25
         Formula (13)                                                                0.5
         Formula (14)                                                               0.25
         Correct numerical numerical value in (14)                                  0.25
  4      Formula (15)                                                               0.25        0.5
         Correct numerical numerical value in (15)                                  0.25
  5      Formula (16)                                                               0.25        0.5
         Formula (17)                                                               0.25
  6      Formula (18)                                                                0.5
         Formula (19)                                                               0.25        1.0
X International Zhautykov Olympiad/Theoretical Competition/Solutions    Page 10/10


         Correct numerical numerical value in (19)                     0.25
  7      Formula (20)                                                  0.25
         Formula (21)                                                  0.25     1.0
         Formula (22)                                                   0.5
  8      Formula (23)                                                   0.5
         Formula (24)                                                  0.25     1.0
         Correct numerical numerical value in (24)                     0.25
  9      Formula (25)                                                   0.5
         Formula (26)                                                  0.25     1.0
         Correct numerical numerical value in (26)                     0.25
  10     Formula (27)                                                  0.25     0.5
         Correct numerical numerical value in (27)                     0.25
Total                                                                          10,0
