---
id: solution-document-izho-2011-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2011_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [izho-2011-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2011_T_S.pdf."
---

VII International Zhautykov Olympiad/Theoretical Competition/Solutions                     Page 1/10


             SOLUTIONS FOR THEORETICAL COMPETITION
                               Theoretical Question 1 (10 points)
                                        1A (3.5 points)

                          w            It is elementary to show that the jump of the cube appears at
                     mg
                                       the puck position depicted in the picture on the left hand side.
                     N
                                       Let u be the cube velocity of mass M at this time moment
                                       and let w be the horizontal relative velocity of the puck of
             u
                                       mass m with respect to the cube. Since the friction in the
                                       system is totally absent, the horizontal projection of the total
                                       momentum of the system is conserved,
                                                mv = Mu + m(u − w) ,                       (1)
                                       as well as with the total mechanical energy,
         mv 2 Mu 2 m 2
              =       +  w + (u − w) 2  + 2mgR .                                        (2)
           2       2     2
        In the instant frame of reference associated with the cube, the puck moves with the velocity
w along the circle of radius R and its equation of motion projected on the radial direction is given
by
                     mw2
         N + mg = .                                                                         (3)
                      R
        It is rather obvious that the condition of the cube’s jump from the plane of the table is found,
according to Newton's third law, as
         N = Mg .                                                                           (4)
        Solving the set of equations (1)-(4), the puck velocity is obtained as
                        M      m
       = v      gR 5 +     +4      .                                                        (5)
                        m      M
        The minimal velocity of the puck is derived from relation (5) by differentiating over M / m ,
         v min = 3 gR                                                                       (6)
and it is achieved at the mass ratio
         M /m = 2.                                                                          (7)
                                         Marking scheme

        №                                   Content                                    points
        1        Formula (1)                                                            0.5
        2        Formula (2)                                                            0.5
        3        Formula (3)                                                            0.5
        4        Formula (4)                                                            0.5
        5        Formula (5)                                                            0.5
        6        Formula (6)                                                            0.5
        7        Formula (7)                                                            0.5

                                           1В (4 points)
        We can replace the infinite circuit of current sources by an effective current source with an
emf ε and an internal resistance r . Thus, we obtain the circuit shown in the figure on the left hand
side. Then, we disconnect the resistance R , add another two current sources and connect back the
resistance R . Hence, we obtain the circuit shown in the figure on the right hand side. Since the
VII International Zhautykov Olympiad/Theoretical Competition/Solutions                     Page 2/10


number of cells with the sources is infinite, then both circuits should be equivalent at any value of
R.

                                                               ε1, r1

                          ε, r                          ε, r            ε2, r2
                                      R                                          R




        It can be shown from the direct current laws that the following two statements are valid:
1. Let us take two current sources with ε1 , r1 and ε 2 , r2 , connected in series. Then, they can be
replaced by a single source with ε= ε1 + ε 2 and r= r1 + r2 .
2. Let us take two current sources with ε1 , r1 and ε 2 , r2 , connected in parallel. Then, they can be
replaced by a single source with ε (        =ε1r2 + ε 2 r1 ) /(r1 + r2 ) and
                                                                         =   r r1r2 /(r1 + r2 ) .
        Now, applying 1 and 2 to the circuit shown on the right hand side, we should obtain the
circuit shown on the left hand side, thus the following relations must be satisfied:
             (ε + ε1 )r2 + ε 2 (r + r1 )
         ε=                               ,                                                       (1)
                    r + r1 + r2
             r (r + r1 )
         r= 2             .                                                                       (2)
             r + r1 + r2
Solution is given by
                   ε         4r        
         ε = ε 2 + 1  1 + 2 − 1 = 3.0 V,                                                      (3)
                    2         r1       
             r        4r       
        =r 1  1 + 2 − 1=       1.0 Ω.                                                         (4)
             2          r1      
Therefore, the current flowing through the resistance R is found as
             ε
    =I      = 1.0 A.                                                                      (5)
            R+r
                                          Marking scheme

        №                                   Content                                   Points
        1     Equivalent circuit                                                        1,0
        2     Rule 1                                                                    0.5
        3     Rule 2                                                                    0.5
        4     Formula (1)                                                               0.5
        5     Formula (2)                                                               0.5
        6     Formula (3)                                                              0.25
        7     Formula (4)                                                              0.25
        8     Formula (5)                                                               0.5
VII International Zhautykov Olympiad/Theoretical Competition/Solutions                     Page 3/10


                                          1C (2.5 points)




        All the rays eradiated from the point A have to pass through the point A' after refraction in
the lens; all the rays eradiated from the point B have to pass through the point B' after refraction in
the lens. Rays passing through the optical center of the lens do not change direction. Therefore, the
point of intersection of lines AA' and BB' is the optical center O of the lens. If a ray passes through
both the points A and B, then it should necessarily pass through the points A' and B'. Consequently,
the point of the intersection of lines AB and A'B' lies in the plane of the lens. Thus, the plane of the
lens passes through the points O and C. The main optical axis of the lens passes through its optical
center and is perpendicular to the plane of the lens, Further constructions are traditional: we draw
ray BD through the point B which is parallel to the main optical axis, and after refraction in the lens
the ray (or its extension) should pass through B'. From its continuation to the intersection with the
main optical axis, we find one of the main focuses F 1 . Similarly, we find the second main focus F 2 .
The drawing above shows that the lens is concave (diverging).
VII International Zhautykov Olympiad/Theoretical Competition/Solutions                     Page 4/10


                              Theoretical Question 2 (10 points)
                               Electrical conductivity of metals

                                             Ohm's law
1. [1 point]
        In accordance with the Joule-Lentz law, the heat power released in the conductor is found as
             U2
         P=     ,                                                                       (1)
              R
which means that the specific heat power PV is written as
             U2 U2
       =
       PV     =        .                                                                   (2)
             RV RSl
       With the aid of
               l 1 l          U
      = R ρ=           and E = ,                                                           (3)
              S σ S           l
one gets
        PV = σ E 2 .                                                                       (4)

                                        The Drude model
2. [1 point]
         The second law of Newton for the electron motion in a constant electric field is read as
         ma = F = −eE .                                                                    (5)
It follows from Eq.(5) that for the time interval τ the electron passes the distance
             aτ 2
         s=       ,                                                                        (6)
              2
which means that the module of the average velocity of the electron is
             s aτ eEτ
         u= =       =     ,                                                                (7)
             τ 2 2m
or, in the vector form,
                eτ
         u= −       E.                                                                     (8)
               2m

3. [1 point]
        The current density depends on the electron number density, its electric charge, and its
average velocity as follows:
                      e 2 nτ
        j= −neu = E ,                                                               (9)
                       2m
which is Ohm’s law with the specific conductivity found as
             e 2 nτ
        σ=          .                                                               (10)
              2m

4. [1 point]
        Each electron transfers its kinetic energy at the end of the acceleration, i.e. at the moment of
collision with an ion,
VII International Zhautykov Olympiad/Theoretical Competition/Solutions                   Page 5/10



                      m  eEτ 
                 2             2
              mumax
    =
    Ek        =                .                                                           (11)
                2      2 m 
        By definition there are n electrons in the cubic meter of the conductor, and each of them
transfers its kinetic energy (11) for the time interval τ . Thus, the total specific energy QV
transferred by electrons to the crystal lattice in the unit of volume and in the unit of time,
              nEk nmu 2 e 2 nτ 2
        =
        Q     =        =           = σ E2 .
                                   E                                                         (12)
          V
               τ      2τ      2m
        This expression coincides with Eq.(4), thus proving the validity of the Joule-Lenz law in the
Drude model.

                                      Magnetoresistance
5. [1 point]
        In the presence of magnetic field the equation of motion for the electron is written as
           du
        m       =−eE − eu × B .                                                            (13)
            dt
The projections on the coordinate axes are found as
           du x
        m =       eE + eBu y ,                                                             (14)
            dt
           du
        m y = −eBu x ,                                                                     (15)
            dt
           du
        m z =0.                                                                            (16)
            dt
        Eq.(16) shows that the electron trajectory lies in XY plane. Substituting u x' = u x ,
u=
 '
 y u y + E / B into Eqs. (14)-(15), we obtain
       du x'
       m     = eBu y ,                                                              (17)
        dt
       du 'y
   m         = −eBu x' .                                                            (18)
        dt
   Solutions to Eqs. (17) and (18) are derived as harmonic oscillations of the form
  =u x' A cos(ωt + α ) ,                                                            (19)
   =     u 'y A sin(ωt + α ) ,                                                      (20)
or, in terms of the previous variables,
  =      u x A cos(ωt + α ) ,                                                       (21)
                                  E
       = u  y    A sin(ωt + α ) − ,                                                 (22)
                                  B
where ω = eB / m .
         From initial conditions u x = 0 and u y = 0 , we determine the constants A = E / B and
α = π / 2 . Substitution into Eqs. (21) and (22) yields
                    E     eB 
         u x (t ) = sin  t  ,                                                     (23)
                    B    m 
                      E          eB  
         u y (t ) −
                  = 1 − cos  t   .                                              (24)
                      B          m 
VII International Zhautykov Olympiad/Theoretical Competition/Solutions                     Page 6/10


6. [2 points]
        At small magnitude of the magnetic field induction, Eq. (23) takes the form
              eE    e3 EB 2 3
       =u x      t−         t .                                                           (25)
              m      6m3
The displacement of the electron along the OX axis over the time interval τ equals
            eE 2 e3 EB 2 4
    =   s       τ −          τ ,                                                          (26)
            2m       24m3
and the average speed is found as
               s eE        e3 EB 2 3
        uav= =        τ−          τ .                                                     (27)
              τ 2m         24m3
Thus, we are able to determine the relative deviation of the specific conductivity as
        ∆σ                           =1  eτ B 
               neuav ( B) − neuav ( B 0)
                                                     2

             =                           = −       ,                                    (28)
         σ           neuav ( B = 0)         12  m 
and, therefore,
                  1  eτ 
                        2

        µ= −          ,     ν = 2.                                                      (29)
                 12  m 

                                          The Hall effect

7. [0.5 points]
        The Lorentz force acting on the electrons is directed downward, therefore the negative
charge is accumulated near the bottom face.

8. [1.5 points]
        Since the electrons are accumulated near the bottom face of the bar, the Hall electric field is
oppositely directed with respect to the OY axis. Hence, the electron equation of motion (13) is
rewritten as
           du x
        m =      eE + eBu y ,                                                            (30)
            dt
           du y
        m = eEH − eBu x ,                                                                (31)
            dt
           du
        m z =0.                                                                          (32)
            dt
        Again, the electron trajectory lies in the XY plane. Making substitution u=   '
                                                                                      x  u x − EH / B ,
u=
 '
 y u y + E / B in Eqs. (30) and (31), one gets
       du x'
        m    = eBu 'y ,                                                               (33)
        dt
       du 'y
   m         = −eBu x' .                                                              (34)
        dt
   Solutions to Eqs. (33) and (34) are again derived as harmonic oscillations of the form
  =u x' A cos(ωt + α ) ,                                                              (35)
   =     u 'y A sin(ωt + α ) ,                                                            (36)
or, in terms of the previous variables,
                               E
       = u x A cos(ωt + α ) + H ,                                                         (37)
                               B
VII International Zhautykov Olympiad/Theoretical Competition/Solutions                     Page 7/10


                            E
      =
      u y A sin(ωt + α ) −    .                                                             (38)
                            B
       From initial conditions u x = 0 and u y = 0 , we obtain the following final solution
                 E      eB  E           eB  
       =
       ux (t)      sin  t  + H 1 − cos  t   ,                                        (39)
                 B     m  B             m 
                 EH      eB  E         eB  
     =
     u y (t )       sin  t  − 1 − cos  t   .                                         (40)
                 B       m  B          m 

9. [1 point]
At small magnitudes of the magnetic field induction, the condition for zero final displacement
y (τ ) = 0 along the OY axis at the time moment τ
       τ
                                  eEτ
       ∫ u (t )dt =0 ⇒ E =3m B ,
       0
            y                 H                                                            (41)

or
                2j
       EH =         B.                                                                     (42)
                3ne

                                         Marking scheme

                                              Content                                 points
            1   The Joule-Lenz law (1)                                                 0.25
            2   The specific heat power (2)                                            0.25
            3   Formulae (3)                                                           0.25
            4   Final result (4)                                                       0.25
            5   Equation of motion (5)                                                 0.25
            6   Path (6)                                                               0.25
            7   Average speed (7)                                                      0.25
            8   Vector of the average velocity (8)                                     0.25
            9   Current density (9)                                                     0.5
           10   Specific conductivity (10)                                              0.5
           11   Kinetic energy of electrons (11)                                        0.5
           12   Total heat transferred (12)                                             0.5
           13   Equation of motion (13)                                                0,25
           14   Equations of motion (14)-(16)                                          0,25
           15   Velocity (23)                                                          0,25
           16   Velocity (24)                                                          0,25
           17   Expansion of the velocity (25)                                         0,25
           18   Displacement (26)                                                      0,25
           19   Average speed (27)                                                      0.5
           20   Final result (29)                                                     2*0.5
           21   The correct face stated                                                 0.5
           22   Equations of motion (30)-(32)                                           0.5
           23   Velocity (39)                                                           0.5
           24   Velocity (40)                                                           0.5
           25   The Hall electric field strength (41)                                   0.5
           26   The Hall electric field strength (42)                                   0.5
VII International Zhautykov Olympiad/Theoretical Competition/Solutions                        Page 8/10


                                      Theoretical Question 3
1 [1 point] The constant C is found from the condition that the total number of particles is equal to
N:
                                                  ∞

                                                 ∑N = N .
                                                 n =1
                                                        n                                              (1)

Substituting the expression for the Boltzmann distribution function and obtaining summation, we
get
                                                                       ε 
                                                                  exp  −    
                             ∞        ∞
                                                     ε               k BT 
                        N =∑ N n =∑ C exp  −n            =  C                  ⇒
                      =     n 1=                 k BT                  ε 
                                                                1 − exp  −
                                     n 1
                                                                               
                                                                         k BT 
                                                                                             (2)
                                         ε 
                               1 − exp  −      
                                          k BT           ε 
    =                   Nn N                      exp  −n      
                                      ε                 k BT 
                                 exp  −      
                                      k BT 

2 [3 points] The internal energy of the gas is a sum of the kinetic energies of all atoms:
                                                                            ε 
                                                                       exp −       
                              ∞          ∞
                                                         ε                  k BT 
                        U = ∑ En N n = ∑ Cnε exp  −n        = C                       2
                                                                                          =
                    =        n 1=       n 1          k BT                 ε 
                                                                   1 − exp  −                      (3)
                                                                            k BT  
                                     ε
                         =N
                                       ε 
                              1 − exp  −    
                                       k BT 
In the classical limit k BT >> ε , the argument of the exponent is small, it is thus justifiable to use the
                         ε             ε
approximate formula exp  −      ≈ 1−       . In this case, we obtain
                         B 
                            k T        k B T
                                               U = N k BT .                                            (4)
                                                          ε 
At low temperatures, the exponent itself is small, exp  −        << 1 , hence
                                                          B 
                                                            k T
                                     ε                          ε 
             =         U N                      ≈ N ε 1 + exp  −         .                       (5)
                                      ε                         k   T 
                             1 − exp  −      
                                                                      B

                                      k BT 

3 [3 points] The molar heat capacity at fixed volume is found as
                                                   ∂U
                                              CV =     .                                               (6)
                                                   ∂T
In the most general case we derive
VII International Zhautykov Olympiad/Theoretical Competition/Solutions                     Page 9/10


                                                                                 ε 
                                                                      2     exp  −    
             ∂U         N ε                ε  ε             ε                k BT 
          CV =  = A                   exp  −             =
                                                           R       
             ∂T          ε 
                                    2
                                           k BT  k Б T
                                                         2
                                                              k BT           ε  .
                                                                                          2
                                                                                                   (7)
                1 − exp  −                                        1 − exp  −    
                         k BT                                              k BT  

 In order to approximate expressions in two limiting
cases it is easier to use the expansions deduced in
Subproblem 2. In the high temperature limit, we get
           k BT >> ε
                                          .                 (8)
           = N A k BT ⇒ C=
           U                          V R
i.e. the molar heat capacity is a constant. Here N A is the
Avogadro constant, N A k B = R stands for the universal
gas constant.
At law temperatures,
                         ε 
     U = N Aε 1 + exp  −         ⇒
                         B 
                             k  T
                                                  2
                                                               .
                    ε        ε          ε          ε 
=     CV N Aε           exp  −
                             =         R       exp  −    
                                                                    Fig.1
                 k BT 2      k BT       k BT       k BT 
                                                                                                 (9)
It is seen that the molar heat capacity goes to zero as the temperature vanishes. The schematic plot
is drawn in figure 1.

4 [3 points] Calculation of the gas pressure can be conducted in different ways. For example, the
average force exerted on the wall by a single atom is equal to the ratio of the moment transferred to
the time interval between two consecutive collisions,
                                                ∆p 2mvn mvn2               E
                                          f=     =         = = 2 n.                               (10)
                                                ∆τ 2 L
                                           n
                                                                   L        L
                                                           vn
To determine the pressure it is necessary to summarize those forces
                                             ∑n N n f n 2 ∞                   U
                               =        P =
                                                  S
                                                              = ∑
                                                             SL n =1
                                                                     N n En 2 .
                                                                              V
                                                                                                  (11)

Substituting the formula for the internal gas energy (3), we obtain
                                               N          ε
                                        P=2                          .                            (12)
                                               V           ε 
                                                  1 − exp  −      
                                                           k BT 
         In the two limiting cases the above obtained expressions for the internal energy should be
used.
         At k BT >> ε
                                                        N
                                                 P = 2 k BT ,                                     (13)
                                                       V
i.e. the pressure is proportional to the absolute temperature.
         At low temperatures, we have
VII International Zhautykov Olympiad/Theoretical Competition/Solutions          Page 10/10



                  Nε           ε 
           P= 2      1 + exp  −      .     (14)
                  V            k BT  
At temperatures going to zero, the pressure tends to
a constant value
                  Nε
           P0 = 2    .                          (15)
                  V
The schematic plot of the pressure against the
temperature is shown in figure 2.
.



                                                           Fig.2

                                            Marking scheme

      №                                Contents                          points
      1     Normalizing condition (1)                                     0,5
                                                                                   1
      2     Calculation of the number of particles (2)                    0,5

       3    General expression for the internal energy U                  0,5
       4    Calculation of the internal energy U (3)                      1,0
                                                                                   3
       5    Calculation of the classical limit of U (4)                   0,5
       6    Calculation of the low temperature limit of U (5)             1,0

       7    General expression for the molar heat capacity С_V (6)        0,5
       8    Calculation of the molar heat capacity С_V (7)                1,0
       9    Calculation of the classical limit of С_V (8)                 0,5      3
      10    Calculation of the low temperature limit of С_V (9)           0,5
      11    Schematic plot for С_V                                        0,5

      12    General expression for average force (10)                     0,5
      12    General expression for P (11)                                 0,5
      13    Calculation of the pressure P (12)                            0,5
      14    Calculation of the classical limit of P (13)                  0,5      3
      15    Calculation of the low temperature limit of P (14)            0,5
      16    Schematic plot P                                              0,5
