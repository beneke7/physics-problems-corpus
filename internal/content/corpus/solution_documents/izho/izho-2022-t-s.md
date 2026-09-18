---
id: solution-document-izho-2022-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2022_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [izho-2022-t-q1, izho-2022-t-q2, izho-2022-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2022_T_S.pdf."
---

XVIII International Zhautykov Olympiad/Theoretical Competition                                              с. 1/15


              SOLUTIONS TO THE PROBLEMS OF THE THEORETICAL
                               COMPETITION
                               Attention. Points in grading are not divided!
                                          Problem 1 (10.0 points)
                                         Problem 1.1 (4.0 points)
        At the initial moment of time, the ball rotates as a whole around the point of its contact with the
table. Let the ball rotate through a certain angle  , then the change in the potential energy of the center of
mass of the ball is written as
                 E p = mgR(1 − cos  ) ,                                                                 (1)
and it turns into kinetic energy
                        7
                 Ek = mu 2 ,                                                                             (2)
                       10
where u is the speed of the center of mass of the ball.
        According to the law of conservation of energy, we get
                 E p = Ek .                                                                              (3)
        At further motion, the ball is separated from the table. The equation of
motion of the center of mass of the ball (Newton's second law) in the projection
on the radial direction has the form
                   u2
                m = mg cos  − N ,                                           (4)
                   R                                                                             N
                                                                                                    α
where N stands for the normal reaction force of the table, and the friction force                              u
is not shown in the figure.
        The condition for the separation of the ball from the table is defined as                    mg
                N = 0.                                                        (5)
        Solving jointly equation (1)-(5), we find the separation angle and the
speed of the ball at this moment
                         10
                cos  = ,                                                                                  (6)
                         17
                      10
                u=        gR .                                                                             (7)
                      17
        The further motion of the ball is the free fall of its center of mass in the Earth's gravitational field.
The initial horizontal and vertical velocities are respectively equal to
                vx = u cos  .                                                                             (8)
                vy = u sin  ,                                                                             (9)
           The flight range is determined by the formulas of uniformly accelerated motion in the earth's gravity
field as
                  L = R sin  + vxt .                                                                       (10)
                                                gt 2
                  H − R(1 − cos  ) = v y t +        ,                                                      (11)
                                                 2
where t denotes the free flight time.
       Eliminating time t from equations (10) and (11), we find
                  567 21 + 20 68305
              L=                       R  1.6 R .                                                          (12)
                            4913

                                                 Content                                           Points
 Formula (1): E p = mgR(1 − cos  )                                                                 0.3


XVIII International Zhautykov Olympiad/Theoretical Competition                                    с. 2/15

                    7                                                                       0.2
 Formula (2): Ek =     mu 2
                   10
 Formula (3): E p = Ek                                                                      0.2
                 u2                                                                         0.3
 Formula (4): m     = mg cos  − N
                 R
 Formula (5): N = 0                                                                         0.4
                      10                                                                    0.4
 Formula (6): cos  =
                      17
                    10                                                                      0.4
 Formula (7): u =      gR
                    17
 Formula (8): vx = u cos                                                                   0.2
 Formula (9): vy = u sin                                                                   0.2
 Formula (10): L = R sin  + vxt                                                            0.4
                                   gt 2
 Formula (11): H − R(1 − cos  ) = v y t +                                                  0.4
                                     2
                   567 21 + 20 68305
 Formula (12): L =                    R  1.6 R                                             0.6
                         4913
 Total                                                                                      4.0

                                             Problem 1.2 (3.0 points)
        The work dA done by the gas when its volume changes by dV reads as
                 dA = pdV ,                                                                      (1)
where p denotes the gas pressure.
        The change in the internal energy dU of one mole of an ideal monatomic gas is associated with a
change in its temperature dT by the relation
                      3
                 dU = RdT .                                                                      (2)
                      2
        According to the formulation of the problem, the following relation holds
                     dA
                =       = const ,                                                               (3)
                     dU
which, along with the ideal gas equation
                 pV = RT ,                                                                       (4)
leads to the following relation
                  2 dV dT
                        =    .                                                                   (5)
                 3 V      T
        Equation (5) is easily integrated and reduced to the form
                           2
                 T  V  3
                    =  .                                                                        (6)
                 T  V0 
        In the initial state, the ideal gas equation gives
                 p0V0 = RT0 ,                                                                     (7)
whereas in the final state
                 p0
                     4V0 = RT ,                                                                   (8)
                  2
and, therefore, the temperature of the gas in the final state is obtained as
                T = 2T0 .                                                                         (9)


XVIII International Zhautykov Olympiad/Theoretical Competition                                            с. 3/15

       From equations (6) and (9) it is easy to find the coefficient
                  4
              = .                                                                                       (10)
                  3
       The total work of the gas in the process is determined by the integral of equation (1) and is equal to
                   4V0

               A =  pdV = 2 p0V0 = 2.0 105 J ,                                                          (11)
                   V0

Note: The process described in this problem is polytropic, i.e. it occurs at a constant heat capacity. Indeed,
since the work done by the gas is a fixed part of the change in the internal energy, this means that the heat
capacity of the gas remains constant throughout the process. In this case, the polytropic equation
 pV n = const is valid under the chosen conditions of the problem with n = 1/ 2 , and the work of the gas,
obviously, does not depend on its type, whether it is a monatomic or polyatomic gas.

                                        Content                                                  Points
 Formula (1): dA = pdV                                                                            0.2
                   3                                                                              0.2
 Formula (2): dU = RdT
                   2
                  dA                                                                               0.2
 Formula (3):  =     = const
                  dU
 Formula (4): pV = RT                                                                              0.2
               2 dV dT                                                                             0.2
 Formula (5):        =
              3 V      T
                         2                                                                         0.4
              T  V  3
 Formula (6):    = 
              T  V0 
 Formula (7): p0V0 = RT0                                                                           0.2
              p                                                                                    0.2
 Formula (8): 0 4V0 = RT
               2
 Formula (9): T = 2T0                                                                              0.2
                   4                                                                               0.4
 Formula (10):  =
                   3
 Formula (11): A = 2 p0V0                                                                          0.4
 Numerical value in formula (11): A = 2.0 105 J                                                   0.2
 Total                                                                                             3.0

                                        Problem 1.3 (3.0 points)
        To study the problem of the stability of the equilibrium position, consider a situation in which the
ball deviates from the top position by a very small angle d and determine the forces acting on it.
        The first force is electrostatic, but to study the equilibrium we need only its component directed
tangentially to the surface of the hemisphere. The idea of its calculation is based on the fact that in the
projection onto the radial direction, the electrostatic forces are compensated from two symmetrical regions
of the hemisphere I and II with respect to the new ball position, so that the only uncompensated force is due
to the segment AB of the hemisphere, cut off by an inclined plane passing at an angle 2d . The left figure
below shows the corresponding section in the vertical plane.


XVIII International Zhautykov Olympiad/Theoretical Competition                                           с. 4/15




                       Side view                                              Top view

        Let us consider a part of the sphere segment (see the right figure above, which shows the top view),
cut off additionally by the angles  amd  + d  , such that its area is found as
                dS = 2 R cos  Rd  d ,                                                                (1)
with the electric charge being equal to
                dq = − dS .                                                                            (2)
        In the Cartesian coordinate system, whose origin coincides with the top of the hemisphere, and the
axis is directed vertically downwards, the radius vector, directed from the point where the ball is located to
the selected part of the sphere segment, is determined by the coordinates
                r = ( R cos  , R sin  , R) ,                                                          (3)
and hence the vector of the desired force is derived as
                         Qdq
                F =−             r.                                                                     (4)
                       4 0 r 3
        This force has the following projection on the tangential direction
                             Qdq
                FQ = −                  R cos  .                                                       (5)
                        4 0 ( 2 R)3
therefore, integration over  from − / 2 to  / 2 provides the total module of the electrostatic force from
the entire segment in the form
                         Q
                FQ =             d ,                                                                   (6)
                      8 2 0
        The second force acting on the ball is the force of gravity, whose projection on the tangential
direction is obtained as
                Fg = mgd .                                                                             (7)
       The minimum charge of the ball is determined by the equality of forces
              Fg = FQ ,                                                                                  (8)
which leads to the final answer
                    8 2 0 mg
               Q=               .                                                                        (9)
                         
Obviously, for larger charges the equilibrium position is stable.

                                             Content                                            Points
 Formula (1): dS = 2 R cos  Rd  d                                                             0.3
 Formula (2): dq =  dS                                                                          0.3
 Formula (3): r = ( R cos  , R sin  , R)                                                       0.2
                       Qdq
 Formula (4): F = −            r                                                                  0.2
                     4 0 r 3


XVIII International Zhautykov Olympiad/Theoretical Competition                                        с. 5/15

                       Qdq                                                                      0.3
 Formula (5): FQ =               R cos 
                   4 0 ( 2 R)3
                     Q                                                                         0.5
 Formula (6): FQ =          d
                   8 2 0
 Formula (7): Fg = mgd                                                                         0.2
 Formula (8): Fg = FQ                                                                           0.5
                    8 2 0 mg                                                                  0.5
 Formula (9): Q =
                        
 Total                                                                                          3.0

                            Problem 2. Greenhouse effect (10.0 points)
                                       Atmosphere without greenhouse effect
2.1 Direct calculation by Wien's formula gives the following result
                           b
                 max S = = 0.446  m .                                                               (1)
                          TS
2.2 In the steady state, the power of solar radiation incident on the Earth is
equal to the power of the thermal radiation of the Earth. When writing the
energy balance equation, it must be taken into account that the Sun
illuminates the Earth from one side, and the Earth radiates in all directions,
i.e.
                 W  R 2 = T04  4R 2 .                                  (2)
        It follows from this relation that
                         W
                 T0 = 4       = 280.3 К ,                                   (3)
                         4
and the same temperature in degrees Celsius is equal to
                 t0 = 7.15 С .                                                                       (4)
2.3 According to the Wien’s formula, we find that at the given temperature, the maximum radiation
corresponds to the wavelength
                           b
                 max E =      = 10.3  m .                                                           (5)
                          TE
2.4 The same geometric relationships that lead to equation (2) allow one to conclude that the power of solar
radiation per unit area of the Earth's surface is found as
                      W   R2 W
                 w=              = = 350 W/m2 .                                                       (6)
                        4 R 2     4
                                            Various atmosphere models
2.5 We introduce the following notation:
t1 (or T1 in the Kelvin scale) – the emperature of the Earth's surface and the
lower layer of the atmosphere immediately adjacent to it; t 2 (or T2 ) – the
temperature of the upper layer of the atmosphere; w – the flux density of solar
radiation, i.e. the energy incident on a unit area of the Earth's surface per unit
time (or irradiated); R1 – the thermal radiation power per unit area of the Earth;
 R2 – the thermal radiation power per unit area of the atmospheric layer; the
radiation fluxes of this layer towards the Earth and into outer space are equal.
        The energy balance equation for a unit area of the Earth's surface has the
following form
                 w + R2 = R1 .                                                                        (7)
        A similar equation for the upper layer of the atmosphere gives rise to


XVIII International Zhautykov Olympiad/Theoretical Competition                                                                     с. 6/15

                KR1 = 2R2 .                                                                          (8)
        Using the laws of thermal radiation, energy fluxes can be expressed in terms of the temperatures of
the radiating surfaces as follows
                R1 =  T14 ,                                                                         (9)
               R2 = K T24 .                                                                    (10)
        Therefore, taking into account formulas (2) and (3), we obtain from expressions (7)-(10) the
temperature of the Earth's surface in the form
                       T0
               T1 =          .                                                                  (11)
                    4 1−
                          K
                           2
                                         Maximum greenhouse effect
2.6 For the maximum greenhouse effect K = 1, therefore, it is obtained for this model
               T1 = T0 4 2 = 333.3 К = 60.2 С .                                                (12)
        Thus, the maximum increase in temperature due to the greenhouse effect on the "black earth" is
equal to
               t1 = 53.0 С .                                                                  (13)
                                           Water greenhouse effect
2.7 The Earth as a black body irradiates the energy
                      
               W0 =  r0 (  , T1 ) d  ,                                                                                          (14)
                      0

       The absorbed energy can be expressed in terms of the spectral absorption coefficient and the spectral
density of the Earth's radiation as follows
                      
               WA =  k (  )r0 (  , T1 ) d  ,                                                                                   (15)
                      0

then the total absorption coefficient of terrestrial radiation by theupper layer of the atmosphere is calculated
by the formula
                                                                    


                  W           k (  ) r0 (  , T1 ) d         T14  k (  )  (  , T1 ) d      
                K= A=0           
                                                           =         0
                                                                              
                                                                                                  =  k (  )  (  , T1 ) d  .   (16)
                  W0
                                  r (,T ) d                     T   (  , T1 ) d 
                                                                          4                          0
                                     0      1                            1
                                 0                                            0
2.8 Since in the indicated wavelength range from 5.0 to 8.0 μm the water vapor absorbs all incident
radiation, the total absorption coefficient is equal to the fraction of radiation energy falling into this interval.
This fraction of energy is evalulated as the areas under the graphs given in the problem introduction.




       The calculations carried out for 4 points gives the following values for the absorption coefficients
              t1 = 0 С :    K 0 = 0.092 ,                                                               (17)


XVIII International Zhautykov Olympiad/Theoretical Competition                                           с. 7/15

                t1 = 50 С : K50 = 0.158 .                                                                (18)
2.9 It follows from the proposed relationship K (t1 ) = K 0 (1 + t1 ) that
                K 0 = 0.092 ,                                                                             (19)
                      1  K 50 
                =            − 1 = 0.014 K −1 .                                                        (20)
                     t50  K 0    
2.10 At the temperature of t1 = 5,4C , the absorption coefficient of the upper layer of the atmosphere is
found as
              K ( t0 ) = K 0 (1 +  t0 ) = 0.101 .                                                  (21)
       Since the absorption coefficient is rather small, formula (12) for the steady temperature can be
simplified to
                         T0            K
                T1 =              T0 1 +  ,                                                    (22)
                      4 1−
                            K            8
                            2
and the rise in temperature is obrained as
                          K ( t0 )
                 t1 = T0          = 3.55 C .                                                    (23)
                            8
2.11 To accurately answer the question, it is necessary to solve the nonlinear equation
                           T0
                T1 =                 .                                                            (24)
                      4 1−
                            K  (T1 )
                               2
       However, the relative change in the absolute temperature is small, so we represent the sought
temperature in the form
                T1 = T0 + t ,                                                                    (25)
from which we find the value of the temperature change in view of the condition t T0
                         K 0 (1 +  t0 )
                     T0
                               8                t1
                t =                     =              3.73 C .                                         (26)
                                K0                K0
                        1 − T0             1 − T0
                                 8                  8
                           Amplification of the greenhouse effect by carbon dioxide
2.12 Let us calculate the absorption coefficient due to carbon dioxide. To make estimates, we can assume
that the air temperature differs slightly from 0C . To do this, we take into account that: 1) in the range from
2.5 to 3.0 μm, the energy of the thermal radiation of the Earth is negligible; 2) in the range from 6.5 µm to
7.0 µm all radiation is absorbed by water vapor; 3) in the range from 16 µm to 18 µm, the fraction of
radiation energy is equal to  = 0.08 (calculated according to the graph for t = 0C ) . Therefore, the
additional absorption coefficient due to the presence of carbon dioxide is found as
                K 2 = 0.04 .                                                                               (27)
        Since the absorption of carbon dioxide and water vapor lie in different spectral ranges, the total
absorption coefficient is equal to the sum of the absorption coefficients of water and carbon dioxide. Then
the change in the steady-state surface temperature (taking into account absorption by carbon dioxide)
increases by the value
                          K
                t1 = T0 2  1.4 C .                                                                      (28)
                           8
2.13 To calculate the absorption coefficient with increased concentration, we use the obvious reasoning: in
the presence of several absorbing layers, the total transmission is equal to the product of the transmission
coefficients of individual layers, therefore
                1 − k1 = (1 − k0 ) .
                                  2
                                                                                                           (29)


XVIII International Zhautykov Olympiad/Theoretical Competition                                              с. 8/15

         Hence it follows that if the concentration is doubled, the spectral absorption coefficient is expected to
increase from 0.50 to
                k1 = 2k0 − k02 = 0.75 .                                                                     (30)
         Therefore, the total absorption coefficient becomes equal to
                K 2 = k  = 0.06 .                                                                          (31)
i.e. increases by K 2 = 0.02 . Therefore, the additional rise in temperature is finally obtained as
                          K 2
                t1 = T0       0.7 C .                                                                   (32)
                           8

                                                   Content                                         Points
                                         b                                                       0.1
          Formula (1): max S =
   2.1                                   TS                                                                 0.2
          Numerical value in formula (1): max S = 0.446  m                                     0.1
          Formula (2): W  R 2 = T04  4R 2                                                   0.4
                              W                                                                  0.2
          Formula (3): T0 = 4
   2.2                        4                                                                            1.0
          Numerical value in formula (3): T0 = 280.3 К                                           0.2
          Numerical value in formula (4): t0 = 7.15 С                                           0.2
                                 b                                                               0.1
          Formula (5): max E =
   2.3                          TE                                                                          0.2
          Numerical value in formula (5): max E = 10,3  m                                      0.1
                           W                                                                     0.1
          Formula (6): w =
   2.4                      4                                                                               0.2
          Numerical value in formula (6): w = 350 W/m2                                           0.1
          Formula (7): w + R2 = R1                                                               0.2
          Formula (8): KR1 = 2R2                                                                 0.2
          Formula (9): R1 =  T14                                                                0.2
   2.5    Formula (10): R2 = K T24                                                              0.2        1.2
                                 T0                                                              0.4
          Formula (11): T1 =
                              4 1−
                                    K
                                    2
          Direct use of K = 1                                                                    0.1
   2.6    Formula (12): T1 = T0 4 2                                                              0.2        0.5
          Numerical value in formula (13): t1 = 53.0 С                                         0.2
                                 
                                                                                                 0.2
          Formula (14): W0 =  r0 (  , T1 ) d 
                                     0
                                     
                                                                                                 0.2
   2.7    Formula (15): WA =  k (  )r0 (  , T1 ) d                                                      0.8
                                     0
                                 
                                                                                                 0.4
          Formula (16): K =  k (  )  (  , T1 ) d 
                                 0

          Numerical value in (17): t1 = 0 С :            K 0 = 0.092                            0.6
   2.8                                                                                                      1.2
          Numerical value in (18): t1 = 50 С :           K50 = 0.158                            0.6


XVIII International Zhautykov Olympiad/Theoretical Competition                                     с. 9/15

          Numerical value in (19): K 0 = 0.092                                              0.2
   2.9                                                                                             0.4
          Numerical value in (20):  = 0.031 K −1                                           0.2
          Numerical value in (21): K ( t0 ) = 0.0757                                        0.4
  2.10                                                                                             0.8
          Numerical value in (23): t1 = 2.65 C                                            0.4
                                  T0                                                        0.2
          Formula (24): T1 =
                             4 1−
                                   K (T1 )
                                     2
          Formula (25): T1 = T0 + t at t      T0                                          0.2
  2.11                          K 0 (1 +  t0 )                                             0.4    1.0
                               T0
                                      8                t1
          Formula (26): t =                    =
                                       K0                K0
                               1 − T0             1 − T0
                                        8                  8
          Numerical value in formula (26): t  2.84 C                                     0.2
          Numerical value in (27): K 2 = 0.04                                               0.5
  2.12                                                                                             1.0
          Numerical value in (28): t1  1.4 C                                             0.5
          Formula (29): 1 − k1 = (1 − k0 )                                                  0.5
                                          2


          Formula (30): k1 = 2k0 − k02                                                      0.2
  2.13                                                                                             1.5
          Numerical value in formula (31): K 2 = k  = 0.06                                 0.4
          Numerical value in (32): t1  0.7 C                                            0.4
 Total                                                                                             10.0

           Problem 3. Corpuscular interpretation of light pressure (10.0 points)
                                              Introduction
3.1 Let the concentration of photons with the energy  in the incident radiation be equal to n , then the
wave intensity is determined by the relation
                I 0 = c n ,                                                                        (1)
where c stands for the speed of light.
       The number of photons N falling on the area element S at the angle  per unit of time is written
as
                N = cnt S cos  .                                                                (2)
       The number of absorbed photons per unit of time is found as follows
                N a = (1 − R)N ,                                                                  (3)
whereas the number of reflected ones
                N r = RN .                                                                        (4)
       The normal component of the momentum, transferred by one photon to the area element upon
absorption, is equal to
                       
               pa =   cos  ,                                                                     (5)
                     c
and the same value at reflection is put down as
                           
               pr = 2 cos  .                                                                     (6)
                       c
       The total momentum transferred to the area element is determined by the expression
               p = N a pa + N r pr ,                                                          (7)
and the pressure sought is calculated by the formula


XVIII International Zhautykov Olympiad/Theoretical Competition                                          с. 10/15

                       p      I
               ps =         = 0 (1 + R) cos 2  .                                                         (8)
                     S t c
3.2 At normal incidence  = 0 and at complete absorption R = 0 , we obtain
                     I
               ps = s = 4.70 10−6 Pa .                                                                   (9)
                      c
and, accordingly, at total reflection R = 1
                     2I
               ps = s = 9.40 10−6 Pa .                                                                   (10)
                       c
3.3 Consider a section of the spherical surface perpendicular to the incident light flux. For the mirror part of
the surface, which completely reflects light, the mechanical torque is equal to zero, since the transmitted
momentum is directed strictly along the radius of the sphere.




        Let us consider a strip in the section located from the center of the sphere at distances from x to
x + dx . The selected part of the completely absorbing surface has the area
              dS = 2 R 2 − x 2 dx ,                                                                       (11)
and the number of absorbed photons per unit time is equal to
                     I
              N a = s dS ,                                                                               (12)
                        
each of which has the momentum
                        
               p a =     .                                                                                (13)
                        c
        The force shoulder is
                l=x,                                                                                       (14)
therefore, the torque of forces acting on the selected area is obtained as
                                    2I
                dM = N a pa l = s R 2 − x 2 xdx ,                                                        (15)
                                      c
and the total torque of forces is determined by the integral
                      R
                               2 I R3
                M =  dM = s = 3.13 10−6 N  m .                                                          (16)
                      0
                                 3c
                                        Space station with the mirror sail
3.4 At the initial rest point of the station of mass m with the sail of area S , located at the distance R0 from
the Sun of mass M S , the gravitational force is exactly balanced by the light pressure force, which leads to
the equation
                   M m 2n 
                G S2 = 0 S ,                                                                               (17)
                     R0       c
where G refers to the gravitational constant, n0 is the concentration of photons of solar radiation with
energy  at the location of the station.


XVIII International Zhautykov Olympiad/Theoretical Competition                                         с. 11/15

       Due to the spherically symmetric expansion, the photon concentration changes with the distance r
from the Sun according to the law
                              2
                             R 
                n(r ) = n0  0  .                                                                        (18)
                              r 
        The initial momentum of photons before the collision with the sail is written as
                        
                 p0 = ,                                                                                   (19)
                        c
whereas the final one constitutes
                       c −V
                 p=              .                                                                        (20)
                      c c +V
This relationship is easily obtained from the kinematics and is actually the formula for the Doppler effect. In
addition, the momentum of a photon after reflection from the sail mirror can be easily obtained from the
laws of conservation of momentum and energy by considering an absolutely elastic collision of a photon
with a moving massive mirror.
        Thus, the change in the momentum of the photon is transferred to the mirror and is equal to
                                      2
                p = p − p0 =               ,                                                             (21)
                                    c +V
and the number of photons falling per unit time t on the sail is derived as
                N
                      = n ( r ) S (c − V ) .                                                              (22)
                 t
        Hence, the force acting on the station due to the solar radiation is determined by the expression
                                                   2
                           N                 R0  c − V    M m c −V
                 f = p          = 2n0 S               = G S2      .                                   (23)
                            t                r  c +V       r c +V
        The station is also subject to the force of gravitational attraction from the Sun
                           M m
                 f g = G S2 .                                                                             (24)
                            r
which means that the motion of the station in the radial direction is described by Newton's second law in the
form
                    dV                          M m V
                m        = f − f g = −2G S2                .                                              (25)
                     dt                           r c +V
        Bearing in mind that for a small displacement
                dr = Vdt ,                                                                                (26)
we obtain from expression (25) the differential equation
                                              dr
                (c + V )dV = −2GM S 2 ,                                                                   (27)
                                              r
which is easily integrated and, if the station stops, gives rise to
                         1                  1 1
                cV0 + V02 = 2GM S  −  .                                                                 (28)
                         2                  R0 R 
        Solving equation (28), we find the distance sought as
                                  R0
                R=                               ,                                                        (29)
                           (cV0 + 12 V02 ) R0
                      1−
                                 2GM S
which, under the condition of the Earth's orbital motion
                GM S = VE2 rE ,                                                                           (30)
as well as the relation V c , yields the final answer of the form
                           R0
                R=                  = 9.93 1010 m .                                                      (31)
                           cV0 R0
                      1− 2
                           2VE rE


XVIII International Zhautykov Olympiad/Theoretical Competition                                             с. 12/15

3.5 It follows from formula (31) that the station is able to fly away to infinity R →  only if the
denominator of the expression becomes zero, which results in
                         2V 2 r
                 Vmin = E E = 18.1 m/s .                                                                      (32)
                          cR0
                                               Poynting-Robertson effect
3.6 The mass of the dust particle is determined by the expression
                         4
                 m =   a3 ,                                                                                 (33)
                         3
and its cross-sectional area is
                 S =  a2 .                                                                                   (34)
        Let us determine the effective force acting on the particle as a result of light absorption. To reduce it
to the pressure of light, let us move to the frame of reference associated with the dust particle. In this frame
of reference, the particle is affected by the pressure of light, calculated by formula (9), but its direction does
not coincide with the radial one due to the aberration of light, namely, it makes a small angle V / c with it.
Thus, in the tangential direction of the particle trajectory, a force appears due to the absorption of photons,
equal to
                           I
                 F = −V S2 S ,                                                                                (35)
                           c
which creates a torque about the center of attraction found as
                 M = −FR .                                                                                    (36)
        Since the trajectory of the dust particle is almost circular, its velocity can be written as
                         GM S
                 V=             ,                                                                             (37)
                           R
and the angular momentum relative to the attracting center
                 L = mVR .                                                                                    (38)
        Collecting equations (33)-(38) together, we write
                 dL
                     =M ,                                                                                     (39)
                  dt
whence we finally find the time sought in the following form
                      2  ac 2
                =               = 1.27 108 s .                                                              (40)
                         3I S
        At the derivation, change in the intensity of solar radiation with distance is neglected, since the
radius of the orbit decreases only slightly and the corresponding corrections are of higher order of smallness.
Note: A consistent explanation of the Poynting-Robertson effect is based on the following interpretation. In
the reference frame associated with the particle, it absorbs the solar radiation, which propagates at a small
angle to the radial direction, and then reradiates the accumulated energy isotropically in all directions. In the
reference frame associated with the Sun, the primary radiation of the Sun propagates in the radial direction,
and the reradiation of the particle itself is no longer isotropic. In the first case, the appearance of the braking
force moment is explained by the aberration of solar radiation, whereas in the second case, by the Doppler
effect for the reradiation of the particle itself.
                                                      Laser tweezer
3.7 Let us calculate the force acting on the first converging lens, which is equal to the total change in the
momentum of photons incident on the lens per unit time. Obviously, the momentum changes due to the
refraction of light in the glass, since its direction changes, but not the module.
        Consider all the rays passing through the ring on the lens, located from its center at distances from r
to r + dr .


XVIII International Zhautykov Olympiad/Theoretical Competition                                              с. 13/15




        The area of this ring is written as
                dS = 2 rdr .                                                                        (41)
        The change in the longitudinal momentum of photons passing through the given ring per unit time is
equal to
                       I
                dp = (1 − cos  )dS ,                                                                (42)
                       c
where the angle of refraction is found as folows
                         r
                sin  = ,                                                                            (43)
                         F
since all rays converge at the focus of the lens.
        Integrating the resulting expression over the entire surface of the lens, we obtain
                     R
                            I  2 2  3                   2 3/2      IR 4
                 f =  dp =
                              c 
                                  R −
                                       3F  
                                           
                                             F − ( F 2
                                                       − R  )    
                                                                   
                                                                    4cF
                                                                            2
                                                                              = 2.64 10−17 N .      (44)
                     0

        Since the foci of the lens 𝐿 and the particle 𝑀 coincide, when leaving the "lens-particle" system, the
light beam propagates again parallel to the optical axis, and, therefore, as a result of refraction on the particle
𝑀, the photon momentum is restored. Consequently, the force acting on the particle 𝑀 is equal in magnitude
to f , but is directed towards the converging lens. This force draws the particle into the laser radiation field.
This is the principle of operation of the "laser tweezer".
3.8 Consider all the rays passing through the element of the semiring on the lens, located from its center at
distances from r to r + dr , and also cut off by azimuth angles from  to  + d  . The area of this
semicircle element is derived as
                dS = rdrd  .                                                                            (45)
        The change in the transverse momentum of photons passing through the given ring per unit time is
equal to
                         I
                dp⊥ = sin  sin  dS ,                                                                   (46)
                         c
and integration over the entire surface of the half of the lens, taking into account formula (43), leads to the
expression
                                   R
                                I                      2 IR3
                 f ⊥ =  dp⊥ =      r dr sin  d  =
                                       2
                                                             = 2.24 10−16 N .                           (47)
                               cF 0 0                  3cF

                                             Content                                               Points
          Formula (1): I 0 = c n                                                                0.1
          Formula (2): N = cnt S cos                                                         0.1
          Formula (3): N a = (1 − R)N                                                          0.1
  3.1                                                                                                         0.8
          Formula (4): N r = RN                                                                0.1
                               
          Formula (5): pa =        cos                                                         0.1
                               c


XVIII International Zhautykov Olympiad/Theoretical Competition           с. 14/15

                                   
         Formula (6): pr = 2 cos                                 0.1
                               c
         Formula (7): p = N a pa + N r pr                     0.1
                           I
         Formula (8): ps = 0 (1 + R) cos 2                        0.1
                           c
                           Is
         Formula (9): ps =                                         0.1
                           c
         Numerical value in formula (9): ps = 4.70 10−6 Pa        0.1
  3.2                                                                      0.4
                             2I
         Formula (10): ps = s                                      0.1
                              c
         Numerical value in formula (10): ps = 9.40 10−6 Pa       0.1
         Moment of forces on the mirror part of the sphere M = 0   0.1
         Formula (11): dS = 2 R 2 − x 2 dx                         0.1
                             I
         Formula (12): N a = s dS                                 0.1
                                    
                                   
         Formula (13): pa =                                       0.1
                                   c
  3.3                                                                      1.0
         Formula (14): l = x                                       0.1
                              2I s
         Formula (15): dM =        R 2 − x 2 dx                    0.1
                               c
                            2 I R3
         Formula (16): M = s                                       0.2
                              3c
         Numerical value in formula (16): M = 3.13 10−6 N  m     0.2
                           M S m 2n0
         Formula (17): G        =     S                            0.4
                            R02   c
                                          2
                                  R 
         Formula (18): n(r ) = n0  0                             0.2
                                   r 
                               
         Formula (19): p0 =                                        0.1
                            c
                            c −V
         Formula (20): p =                                         0.2
                           c c +V
                                         2
         Formula (21): p = p − p0 =                               0.1
                                        c +V
  3.4                  N                                                  3.6
         Formula (22):      = n ( r ) S (c − V )                   0.2
                        t
                               M m c −V
         Formula (23): f = G S2                                    0.2
                                 r c +V
                               MSm
         Formula (24): f g = G 2                                   0.2
                                  r
                          dV             M m V
         Formula (25): m      = −2G S2                             0.4
                           dt              r c +V
         Formula (26): dr = Vdt                                    0.2
                                                 dr
         Formula (27): (c + V )dV = −2GM S 2                       0.2
                                                 r


XVIII International Zhautykov Olympiad/Theoretical Competition                      с. 15/15


                            1             1 1
         Formula (28): cV0 + V02 = 2GM S  −                                 0.2
                            2             R0 R 
                                     R0
         Formula (29): R =
                                (cV0 + 12 V02 ) R0                            0.2
                             1−
                                    2GM S
         Formula (30): GM S = VE2 rE                                          0.2
                                R0
         Formula (31): R =
                                cV R                                          0.4
                             1 − 02 0
                                2VE rE
         Numerical value in formula (31): R = 9.93 10 m
                                                           10
                                                                              0.2
                              2V 2 r
         Formula (32): Vmin = E E                                             0.2
  3.5                          cR0                                                    0.4
         Numerical value in formula (32): Vmin = 18.1 m/s                     0.2
                              4
         Formula (33): m =   a3                                             0.1
                              3
         Formula (34): S =  a
                               2
                                                                              0.1
                                 I
         Formula (35): F = −V S2 S                                            0.4
                                 c
         Formula (36): M = FR                                                 0.2
                              GM S
  3.6    Formula (37): V =                                                    0.2     2.0
                                R
         Formula (38): L = mVR                                                0.2
                       dL
         Formula (39):     =M                                                 0.2
                        dt
                           2  ac 2
         Formula (40):  =                                                    0.4
                              3I S
         Numerical value in formula (40):  = 1.27 108 s                     0.2
         Formula (41): dS = 2 rdr                                            0.1
                              I
         Formula (42): dp = (1 − cos  )dS                                    0.2
                              c
                                r
         Formula (43): sin  =                                                0.2
  3.7                           F                                                     1.0
                            I  2 2  3               2 3/2        IR 4
         Formula (44): f =
                             c 
                                R −
                                     3F 
                                           F − F −R
                                                  2
                                                     (          )
                                                                4cF 2    0.3
                                                           −17
         Numerical value in formula (44): f = 2.64 10              N         0.2
         Formula (45): dS = rdrd                                             0.1
                              I
         Formula (46): dp⊥ = sin  sin  dS                                   0.2
                              c
  3.8                                                                         0.3     0.8
                             2 IR3
         Formula (47): f ⊥ =
                             3cF
         Numerical value in formula (47): f ⊥ = 2.24 10−16 N                 0.2
 Total                                                                               10.0
