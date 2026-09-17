---
id: solution-document-spot-2026-s
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [spot-2026-q1, spot-2026-q10, spot-2026-q3, spot-2026-q4, spot-2026-q5, spot-2026-q6, spot-2026-q7, spot-2026-q8, spot-2026-q9]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2026_S.pdf."
---

Monday, 16 March 2026, 12:30pm – 16:30pm




                    2026 Selection Test
for the International Physics Olympiad (IPhO), Asian Physics
Olympiad (APhO) and International Nuclear Science Olympiad
                            (INSO)


             Name:



  a. This is a 4 hour test. Attempt all questions. The maximum total score is 100; marks
     allocated for each question part are indicated in square brackets.

  b. Check that there are a total of 38 printed pages (including this cover page and the table
     of physical constants).

  c. Begin your answer for each question on a fresh sheet of paper, and present your working
     and answers clearly. Your answer sheets should be sorted according to the order of the
     questions.

  d. Write your name on the top right hand corner of every answer sheet you submit.

  e. Submit this question paper and all your working sheets. No paper, whether used or
     unused, may be taken out of this examination room.

  f. You may use a standard (non-programmable) scientific calculator in accordance with the
     statutes of the International Physics Olympiad.

  g. No books or documents relevant to the test may be brought into the examination room.




 Question:    1      2      3       4       5     6      7      8      9      10    Total
 Points:      9      9      4      10      10     10     7      8      15     18     100
 Score:


                                        Page 1 of 38
                                                    Monday, 16 March 2026, 12:30pm – 16:30pm

1. (a) A sailboat is moving in stationary water. A wind with uniform density and horizontal        [2]
       speed v0 (relative to the ground) is blowing perpendicularly to the surface of the sail.
       Find the speed of the sailboat where the wind exerts maximum power.


                                 v0




         Solution: Let the speed of the boat be v and density of air be ρ. In this frame, the
         incoming air has velocity v0 − v. Hence, it exerts a force proportional to ρ(v0 − v)2 .
         Since the question asks for power, and P = F v, we get that P ∝ (v0 − v)2 v. We
         can maximise this
                            dP                                     v0
                               = (v0 − v)2 − 2(v0 − v)v = 0 =⇒ v =
                            dv                                     3


   (b) A circular uniform disk is initially rotating about point P1 on its circumference at a      [3]
       constant angular velocity ω1 . If point P1 is suddenly released and another point P2 on
       the circumference is simultaneously fixed in place, what is the new angular velocity of
       the disk ω2 about P2 . Take angle ∠P1 OP2 to be θ.



                                               O

                                                θ          P2
                                       P1


         Solution: The initial angular momentum about P2 is
                                                         1
                                      Li = mR2 ω1 cos θ + M R2 ω1
                                                         2
         The final angular momentum about P2 is
                                                   3
                                               Lf = M R 2 ω2
                                                   2
         Conserving angular momentum about P2 and solving gives us
                                                     
                                          1 + 2 cos θ
                                   ω2 =                 ω1
                                              3

         We can check this by noting that when θ = π or 0, we get the intuitive result
         ω2 = ω1 . When θ = 2π/3, our answer is surprisingly 0.
         Alternative Solution: It is also possible to solve it using an impulse approach,
         although it will be a lot more tedious. We first consider the initial COM velocity
         as v⃗1 = ω⃗1 × OP
                         ⃗ 1 and final COM velocity as v⃗2 = ω⃗2 × OP
                                                                    ⃗ 2 . Then, the impulse




                                            Page 2 of 38
                                               Monday, 16 March 2026, 12:30pm – 16:30pm


      is ∆⃗ p = m(v⃗2 − v⃗1 ) and the change in angular momentum about the COM is
               p × OP
      I ω⃗1 + ∆⃗    ⃗ 2 = I ω⃗2 . Substituting in the explicit expression for ∆⃗
                                                                               p, we get

                        I ω⃗1 + m(ω⃗2 × OP
                                         ⃗ 2 − ω⃗1 × OP
                                                      ⃗ 1 ) × OP
                                                               ⃗ 2 = I ω⃗2

      and we can subsequently solve for ω2 in terms of ω1 .

(c) A cylindrical disk of radius R lies flat on a smooth horizontal surface and is fixed in     [4]
    place. An inextensible thread is tightly wound on the disk, and the free end is attached
    to a small puck with mass m. The length of the free part of the thread is ℓ0 . The puck
    is initially given a velocity v perpendicular to the thread. Assuming the thread can
    only withstand some maximum tension T , explain whether the puck be able to reach
    the disk. If yes, find the time taken for the puck to hit the disk. If not, find the time
    taken for the thread to break in terms of T and other relevant constants.
                                             ℓ0
                                                                   m
                                                               v
                           R




      Solution: Since the thread is inextensible and always under stress, the tension
      force always points perpendicular to the displacement and does zero work. Hence,
      the speed of the puck remains constant. The tension force provides centripetal
      acceleration
                                                 mv 2
                                           T =
                                                  ℓ
      As ℓ → 0, T → ∞ and the thread eventually breaks. It is therefore not possible for
      the puck to hit the cylinder. In time dt, the length of the rope decreases by ωR dt.
      We also have ω = v/ℓ from geometry. Hence, we can form a differential equation
                                     v
                               dℓ = − R dt =⇒ ℓ2 − ℓ20 = −2vRt
                                     ℓ
      The final ℓ before breaking is mv 2 /T . Rearranging gives us

                                            ℓ20 T 2 − m2 v 4
                                       t=
                                                 2RvT 2




                                     Page 3 of 38
                                                   Monday, 16 March 2026, 12:30pm – 16:30pm



Marking Scheme:

                  Part    Steps                                    Marks
                  (a)     Power is P = F v                         M0.5
                          Force F ∝ (v0 − v)2                      M0.5
                          v = v30                                  A1
                          Angular momentum is conserved
                  (b)                                              M0.5
                          about P2
                          dinitial angular momentum                M0.75
                          Correct final angular momentum           M0.75
                          Final angular
                                            velocity ω2       =
                           1+2 cos θ                               A0.5
                               3       ω 1
                          Workdone by T is 0/energy is
                  (c)                                              M0.5
                          conserved/v is constant
                          Realising that the string will always
                                                                   M0.5
                          break
                          Correct differential equation relating
                          dℓ and dt (if missing minus sign sub-    M1.5
                          tract 0.5) 0
                          DE solved correctly                      M0.5
                                               ℓ20 T 2 −m2 v 4     A1
                          Correct answer t =       2RvT 2




2. In the figure below, we have an electrical circuit consisting of a DC voltage source U0 ,
   capacitor C, switch K and a nonlinear element. The current-voltage characteristic of the
   nonlinear element is as follows:
                                     2  2
                                      I          U
                                            +          =1
                                      I0         U0

  The equation holds when I > 0 and for |U | ≥ U0 , I = 0. I0 and U0 are known.




   (a) Consider the above circuit without the nonlinear element first. The capacitor is initially   [1]
       uncharged; at t = 0, the switch is closed to charge the capacitor. What is the final
       voltage across the capacitor?

         Solution: The final voltage is just U0 , the same as the battery.

   (b) Now, with the capacitor charged to the voltage in (a) and the switch open, the nonlinear     [4]
       element is reintroduced and the switch is again closed at t = 0. What is the


                                         Page 4 of 38
                                               Monday, 16 March 2026, 12:30pm – 16:30pm

 a. time taken for the second charging process, and
 b. the final voltage across the capacitor?
Justify your answers and show all working clearly.

 Solution: Let Q denotes the charge on the positive plate of the capacitor and
 current as positive flowing clockwise around the circuit. Writing the Kirchhoff
 loop rule and denoting the non linear element as N , we have
                                              Q
                                    U0 −        − UN = 0
                                              C
 Writing the time derivative, we get
                                             I   dUN
                                         −     =
                                             C    dt
 Let us parameterise the I − V characteristic of the nonlinear element:

                              I = I0 sin ϕ, UN = U0 cos ϕ

 where ϕ is the phasor angle relative to the x-axis. Substituting into the Kirchhoff
 equation,
                                  I0 sin ϕ
                                −          = −U0 ϕ̇ sin ϕ
                                      C
 from which we can conclude that the phasor simply rotates with constant angular
 velocity
                                                I0
                                      ω = ϕ̇ =
                                               U0 C
 The capacitor is initially charged to U0 ; the nonlinear element hence has UN = 0
 initially, with phasor angle ϕ = π2 . From our earlier analysis, we can conclude that
 the phasor will simply rotate anticlockwise with constant angular velocity from π2
 to π. Therefore the final voltage across the capacitor is U0 − (−U0 ) = 2U0 , and the
 time taken is
                                       π − π2   π CU0
                                 t=           =
                                         ω      2 I0
 Alternatively, we can just directly solve the differential equation earlier.
                                    I   dUN   dUN dI
                                −     =     =
                                    C    dt    dI dt
 We express UN in terms of I:
                       s                2
                                    I              dUN       U0        I
               UN = ±U0     1−                =⇒       = ∓r       
                                    I0              dI               2 I02
                                                           1 − II0

 Working out the time-derivative and plugging into the differential equation, we
 obtain                 Z 0                 Z t 2
                                 dI              I0
                            r      2 = ±           dt
                         I0                   0 CU0
                              1 − I0I


 To take care of the sign, we note that the initial potential difference across the
 element drives a positive current through it, which further increases the potential



                                 Page 5 of 38
                                                 Monday, 16 March 2026, 12:30pm – 16:30pm


      difference between the capacitor and the battery (the non linear element can be
      thought of as a second ”battery”). This is represented by the left half of the
      I-V graph and we replace the ± with a −. Using a trigonometric substitution
      I = I0 sin θ, we obtain the final answer as
                                                 π CU0
                                            t=
                                                 2 I0
      Since the current is positive, the capacitor is further charged and the final voltage
      across is 2U0 .

(c) Find the maximum rate of change of capacitor energy. At what time t does this occur?       [2]


      Solution: Begin from the equation for capacitor energy:

                                                    1 Q2
                                            E=
                                                    2 C
      The rate of change can be expressed as:
                                               dE   QI
                                         P =      =
                                               dt   C

      But Q
          C is just the voltage of the capacitor, which we can express in terms of UN as

                                           Q
                                             = U0 − UN
                                           C
      Expressing in terms of ϕ, we obtain

                                    P = U0 I0 sin ϕ(1 − cos ϕ)

      It is not diﬀicult to differentiate the expression and find the value of ϕ that gives
      the maxima. However, we can also visualise the expression as the area of a triangle
      with base 2 sin ϕ and height 1−cos ϕ, inscribed in a unit circle. The maximum area
      is hence achieved in the case of an equilateral triangle, corresponding to ϕ = 2π3 .
                           √
      This gives Pmax = 3 4 3 U0 I0 , and the time is

                                            3 − 2
                                           2π   π
                                                         π CU0
                                      t=             =
                                             ω           6 I0

(d) Now consider the same nonlinear circuit, but the capacitor has a very small positive       [2]
    charge δ ≪ CU before the switch is closed. Find the time taken in this charging process
    and the final voltage across the capacitor. Explain why it can be said that this process
    is a transition from unstable to stable equilibrium.

      Solution: Referring to our solution to part b, we use the same idea of constant
      angular velocity;
                                        π−0        I0
                                    t=        =π
                                          ω       U0 C



                                      Page 6 of 38
                                                Monday, 16 March 2026, 12:30pm – 16:30pm


         Notice that the circuit is only in ”equilibrium” at ϕ = 0 and ϕ = π. At both
         points, the current is 0 - hence UN and the capacitor voltage remain constant,
         and the circuit is in equilibrium. However, ϕ = 0 is unstable. With a small
         perturbation (such as by introducing a charge to the capacitor), the phasor will
         swing anticlockwise towards ϕ = π, the other point of equilibrium.




Marking Scheme:

                  Part   Steps                                   Marks
                  (a)    State that the final voltage is U0 .    A1
                         Kirchhoff’s loop rule applied cor-
                  (b)                                            M1
                         rectly AND time derivative applied
                         Parameterise I and UN in terms of
                                                                 M0.5
                         phasor angle
                         Correctly state the idea of constant
                                                                 M0.5
                         angular velocity ω
                         ω = UI00C                               M1
                         Final voltage = 2U0                     A0.5
                         Time taken t = π2 CU
                                            I0
                                               0
                                                                 A0.5
                         OR: Kirchhoff’s loop rule applied
                         correctly AND time derivative ap-       M1
                         plied      r       2
                         UN = ±U0 1 − II0                        M0.5

                         Obtain correct integral equation        M1
                         Integral solved correctly               M0.5
                         Final voltage = 2U0                     A0.5
                         Time taken t = π2 CUI0
                                                0
                                                                 A0.5
                  (c)    P = QIC
                                                                 M0.5
                         Parameterise P in terms of ϕ, obtain
                                                                 M1
                         ϕ = 2π
                              3 OR  √
                                      any other correct method
                         Pmax = 3 4 3 U0 I0 AND t = π6 CUI0
                                                            0    A0.5
                                I0
                  (d)    t = π U0 C                              A1
                         Explain two points of equilibrium,
                         ϕ = 0 perturbed will swing to the       A1
                         other point of equilibrium ϕ = π.



3. In General Relativity, light rays can get deflected by massive bodies. For a spherically-     [4]
   symmetric body, if the undisturbed motion of the ray passes the centre of the body at a
   minimum distance of r (the impact parameter), the angular deflection (in radians) is given
   by:
                                                 4GM
                                            α=
                                                  rc2
   for α ≪ 1 rad. We aim to construct a lens out of plastic with refractive index n that
   simulates this effect. The lens is constructed using the volume of revolution of a function



                                        Page 7 of 38
                                               Monday, 16 March 2026, 12:30pm – 16:30pm

r = f (x) about the x-axis. We want to choose f (x) such that the angle of deflection at an
impact parameter of r is given by:
                                              s
                                          α=
                                              r
where s is some constant. You may use small angle approximation for the angle of incidence
and α, and assume that air has refractive index 1.
                                               r
                                               (0, r0 )



                                                   r = f (x)
            Incoming
               ray
                                                                     α

                                                                         Outgoing
                                                                           ray

                                           O              (x0 , 0)                  x



Determine f (x) for x ∈ [0, x0 ] shown in the diagram above in terms of x, n, s and r0 .


  Solution: From Snell’s law, we know that:

                                       n sin θ = sin ϕ

  Using the small angle approximation,

                                           nθ = ϕ

  The angle of deflection is:
                                   α = ϕ − θ = (n − 1)θ
  The gradient of the normal is given by −1/(f ′ (x)) and hence,

                                 −1/(f ′ (x)) = tan θ
                                                  n−1
                                      f ′ (x) = −
                                                    α
                                                  n − 1
                                      f ′ (x) = −       f (x)
                                                    s
  Solving the differential equation, we obtain:

                                    f (x) = Ce−(n−1)x/s

  where C is an integration constant. Substituting (0, r0 ), we find that C = r0 and hence:

                                     f (x) = r0 e− s x
                                                     n−1




                                      Page 8 of 38
                                                   Monday, 16 March 2026, 12:30pm – 16:30pm



Marking Scheme:

                   Part   Steps                                     Marks
                          n sin θ = sin ϕ and use of small angle
                                                                    M0.5
                          approximation
                          α = (n − 1)θ                              M0.5
                          Gradient of normal: −1/f ′ (x)            M0.5
                          Correct differential equation f ′ (x) =
                                                                    M1.5
                          − n−1
                              s f (x)
                          Equation solved correctly with cor-
                                                                    A1
                          rect substitution of constants to get
                          f (x) = r0 exp(− n−1
                                             s x)




4. Optical microscopes use optical lenses to bend light and form images. Electron microscopes
   on the other hand rely on electromagnetic fields to bend electrons. We will explore the
   properties of a magnetic lens in the following question. For all parts below we will work in
   cylindrical coordinates (r, θ, z) with the origin coninciding with the center of the top face
   of the magnet.




   We can use a cylindrically symmetric magnetic field as a lens. Near the central axis of the
   magnet (small r), the z component of the field can be approximated by

                                                      B0
                                        Bz (z) =               ,
                                                   1 + ( az )2

   where a is some constant.
   (a) Show that the radial magnetic field Br near the central axis is given by                    [1]

                                                       r dBz
                                             Br = −
                                                       2 dz



         Solution: The magnetic field must obey Gauss’ Law. Thus we can construct a
         cylindrical surface with its axis on the z axis, has height dz and radius r. Given




                                         Page 9 of 38
                                                Monday, 16 March 2026, 12:30pm – 16:30pm


      that the total outgoing flux is 0:

                           2πrBr dz + πr2 Bz (z + dz) − πr2 Bz (z) = 0

                                                    r dBz
                                           Br = −
                                                    2 dz

(b) By considering the equation of motion for an electron with mass m and charge −e                [4]
    originating far away from the lens with some initial position (r0 , θ0 , z0 ), show that the
    angular position of the electron is governed by
                                                 e
                                           θ̇ =    Bz
                                                2m
    You may assume that the electrons are paraxial (r0 is small) and that the initial speed
    v of the electron is almost entirely in z direction (v ≈ vz ) at all times.

      Solution: The velocity of the electron is given by (ṙ, rθ̇, ż), so Newton’s 2nd Law
      can be written as such:

                                   F⃗ = −e⃗v × B ⃗
                                              r dBz 
                                              ṙ   − 2 dz
                                      = −e rθ̇ ×  0 
                                           
                                              ż     Bz

      This is equal to d(m⃗
                         dt
                            v)
                               where |⃗v | is constant.Splitting this up in to the relevant
      components we get:

                                        mr̈ = −eBz rθ̇ + mrθ̇2
                                  d                        r2 dBz
                                     (mr2 θ̇) = eBz rṙ + e ż
                                  dt                        2 dz
                                                 d e 2 
                                              =        r Bz
                                                dt 2
                                        mz̈ = eBr rθ̇ ≈ 0

      From the azimuthal equation we get that:
                                               e
                                       mr2 θ̇ = r2 Bz + C
                                               2

      But since at z = ∞ ,Bz = 0 and θ̇ = 0 then C = 0. Giving us the final expression
      for θ̇:
                                              e
                                        θ̇ =    Bz
                                             2m

(c) From the equation of motion in the radial direction, derive the following equation             [2]
    relating z and r for the trajectory of the particle:
                                        d2 y        k2
                                             = −            y
                                        dx2      (1 + x2 )2
    where y = ar , x = az and k is to be determined in terms of the electron’s initial kinetic
    energy, E, its mass, m, and other constants.


                                      Page 10 of 38
                                                 Monday, 16 March 2026, 12:30pm – 16:30pm



      Solution: We substitute the expression for θ̇ into the radial equation of motion:
                                                e          e    2
                                mr̈ = −eBz r      Bz + mr     Bz
                                               2m          2m
                                        e2 2
                                   =−     B r
                                        4m z
      Since v is constant and mostly in the z direction we can replace the time derivative
                                 d      d
      with a spatial derivative, dt = v dz . This turns our equation into:

                                        d2 r      e2
                                             = −        rB 2
                                        dz 2     4m2 v 2 z
      Using this and the relevant substitutions mentioned in the question our equation
      becomes:
                                  d2 y     e2 B02 a2  y
                                       = −
                                  dx2       16E 2 (1 + x2 )2
      Giving us k = eB
                     4E
                       0a




(d) The general solution to the equation can be found using the substitutions x = az = cot(ϕ)        [3]
    and y = ar :
                               sin(ωϕ)       cos(ωϕ)                  p
                    y(ϕ) = C1          + C2           , where ω = 1 + k 2
                                 sin ϕ        sin ϕ
    where C1 and C2 depend on the initial direction and position of the electron. If a
    point source of electrons emitting electrons in all directions is at some point P0 (y0 , ϕ0 ),
    determine the ϕ values (ϕn ) where the emitted electrons converge. Also determine the
    minimum k such that two images will be formed for any ϕ0 .

      Solution: Substituting the initial condition in we can obtain one of the constants:

                                         sin(ωϕ0 )       cos(ωϕ0 )
                                  y0 = C 1         + C2
                                           sin ϕ0         sin ϕ0
                                      y0 sin ϕ0       cos(ωϕ0 )
                                 C1 =            − C2
                                      sin(ωϕ0 )       sin(ωϕ0 )

      Giving us the expression for y(ϕ):
                                                                                 
                        sin(ωϕ0 ) sin ϕ0       C2               cos(ωϕ0 )
                 y(ϕ) =                  y0 +         cos(ωϕ) −           sin(ωϕ)
                        sin(ωϕ0 ) sin ϕ0      sin ϕ             sin(ωϕ0 )

      Because the final yn of the image are independent of the initial direction of the
      electrons, the result must be independent of C2 . Giving:

                                             cos(ωϕ0 )
                                 cos(ωϕ) −             sin(ωϕ) = 0
                                             sin(ωϕ0 )
      Which is equivalent to:
                                        sin(ω(ϕ − ϕ0 )) = 0
      The solutions are ϕn = ϕ0 − n ωπ . Since 0 < ϕ < π ⇒ ω( ϕπ0 − 1) < n < ω ϕπ0
                                                                                   √
      The smallest value such that n = 2 is possible is when ω ≥ 2 thus k ≥            3.



                                      Page 11 of 38
                                                 Monday, 16 March 2026, 12:30pm – 16:30pm



Marking Scheme:

                  Part   Steps                                    Marks
                  (a)    Construction of Gaussian Surface         M0.5
                         Final Expression                         A0.5
                  (b)    F⃗ = −e ⃗v × B
                                      ⃗                           M0.5
                         Separate equation for each direction     M1
                                                          d
                         Torque equation in terms of dt      on
                                                                  M2
                         both sides
                         C = 0 and equation proven                A0.5
                         If student prematurely assumes ṙ →
                         0 and derives the correct result with-
                         out writing out the full equation of
                         motion, cap at 2 marks
                          d      d
                  (c)     dt = v dz                               M0.5
                         m v = 4E 2
                            2 4                                   M0.5
                         Correct expression                       A1
                         y(ϕ) independant of one of the
                  (d)                                             M1
                         boundary conditions
                         sin(ω(ϕn − ϕ0 )) = 0 or equivalent       M1
                         ϕn =√ϕ0 − n ωπ                           A0.5
                         k≥ 3                                     A0.5



5. In this problem, we will study the thermodynamics of an unusual heat engine, known as an
   Archibald rubber band heat engine.




  This heat engine consists of a series of rubber bands with one end attached to the circum-
  ference of a wheel with radius R, and the other end fastened to a frictionless bearing, whose
  center is offset from the wheel’s central axis of rotation by a distance R0 . Both the wheel’s
  axis and rubber band axis are fixed and do not move.
  A “heat engine” can be constructed by submerging the bottom half of the assembly in hot
  water with uniform temperature TH , which causes the wheel and attached bands to rotate.
  The top half remains at ambient temperature TC . A clearer diagram is shown below. The
  rubber bands are connected to O′ , while the wheel rotates about O.
   (a) Given the set up above where the rubber band axis is offset to the left by R0 and that      [1]


                                       Page 12 of 38
                                                  Monday, 16 March 2026, 12:30pm – 16:30pm




                                                              TC

                         D                                A
                                    O′        O    R

                         C                                B
                                         R0
                                                              TH




    stretched rubber contracts when heated, explain whether the wheel rotates clockwise
    or counterclockwise.

      Solution: Without submerging the half of the wheel in hot water, the net counter-
      clockwise torque exerted by the top half of the wheel exactly cancels out the net
      clockwise torque exerted by the bottom half of the wheel. However, the rubber
      band in the bottom half contracts upon being heated. Hence, the clockwise torque
      exerted by the bottom half dominates and the wheel rotates clockwise.

The thermodynamic relation for a rubber band is given by

                                   dU = T dS + τ dL

where T is the temperature, τ is the tension, U is the internal energy, S is the entropy, and
L is the length of the rubber band. You may assume that just like an ideal gas, U can be
expressed as a function of only the temperature T .
(b) By referencing the Maxwell relation for a typical P, V, T system:                           [1]
                                                  
                                      ∂S          ∂P
                                             =           ,
                                      ∂V T        ∂T V
    derive an equivalent Maxwell relation for the rubber band with a suitable substitution.


      Solution: The classic thermodynamic relation is

                                         dU = T dS − P dV

      With a direct comparison, we can obtain the relation for the rubber band by
      replacing P → −τ and V → L. Hence, the new Maxwell relation is
                                               
                                   ∂S          ∂τ
                                         =−
                                   ∂L T        ∂T L


We assume that that change in tension in the rubber band is small in one cycle and may be
expanded linearly about the tension at length R and average temperature T̄ = (TC + TH )/2
as
                     τ (L, T ) = τ (R, T̄ ) + ρ(L − R) + σ(T − T̄ )
where ρ = (∂τ /∂L)T and σ = (∂τ /∂T )L both evaluated at (R, T̄ ) are constants.


                                     Page 13 of 38
                                               Monday, 16 March 2026, 12:30pm – 16:30pm

(c) By considering the entropy S as a state function of the temperature T and length L       [2]
    of the rubber band, show clearly that for a reversible process, we have

                                     dQ = CL dT − T σ dL

    where CL is defined as the heat capacity at constant length.
    Hint: For a multivariate function f (x, y), we may write its differential

                                             ∂f      ∂f
                                      df =      dx +    dy
                                             ∂x      ∂y

    You may also use the Maxwell relation derived in (b).

      Solution: Using the hint, we can express dS as
                                                
                                      ∂S           ∂S
                             dS =           dT +        dL
                                      ∂T L         ∂L T

      Since the LHS of the equation we want to show is dQ, this motivates us to rewrite
      dS = dQ/T for a reversible process and get
                                                  
                                      ∂S              ∂S
                             dQ = T         dT + T          dL
                                      ∂T L            ∂L T

      In particular, we also know that for a reversible process at constant length, we
      have                                     
                                  ∂S         1 ∂Q        CL
                                        =              =
                                  ∂T L       T ∂T L       T
      since by definition, CL = (∂Q/∂T )L . Using the Maxwell equation given in (b) to
      substitute the second term, we obtain the desired relation.

(d) We now consider the thermodynamic cycle undergone by a rubber band on the wheel          [3]
    during a full rotation. We consider the state of the rubber band as it rotates through
    4 locations A, B, C and D shown in the second diagram above. Sketch a τ -L diagram
    connecting A, B, C, D (on your answer sheet) and use arrows to denote the direction
    of the thermodynamic cycle as the wheel rotates in the direction given by your answer
    in (a). Label the horizontal coordinates of A, B, C, D in terms of R and R0 . You may
    also use the linear approximation of τ about (R, T̄ ) if necessary.
    Hint: You may assume two of the processes to be “isochoric” and two of the processes
    to be isothermal, but which?

                          τ




                                                             L




                                    Page 14 of 38
                                              Monday, 16 March 2026, 12:30pm – 16:30pm


     Solution: Firstly, we establish that the wheel rotates clockwise. So the cycle
     should be A → B → C → D. Secondly, it is clear that the isothermal processes
     should be D → A and B → C since the temperature of the rubber band will quickly
     equilibriate with the ambient temperature. The “isochoric processes” (constant
     length instead of constant volume in this case) will be A → B and C → D,
     since the length of the rubber band should remain constant at the instant the
     temperature changes.
     With this, we know that A → B and C → D should be two vertical lines on the τ -L
     diagram, with the tension τB > τA and τC > τD . To now construct the isothermal
     process, we notice that at constant temperature, we can make use of ρ = (∂τ /∂L)T ,
     which gives us that we can assume τ = ρL + C (linear approximation) at constant
     temperature. Graphically, this means that both DA and BC should be straight
     lines with the same gradient.
                               τ


                                                      B

                                      C
                                                      A

                                      D

                                                                L
                                     R − R0       R + R0

(e) By considering the heat cycle in (d), calculate the thermodynamic eﬀiciency η of this   [3]
    engine in terms of TC , TH , σ and R0 . You may use the simplification
                                             Z TH
                                        α=        CL dT
                                             TC

   in your answer without explicitly evaluating the integral.

     Solution: This question should be free marks if you could do part (d). Firstl, we
     calculate the workdone in the cycle to be the area enclosed by the loop. Notice
     that the net workdone by the rubber band dW = −τ dL is positive. Along DA, we
     have                            Z    R+R0
                          QD→A = −               TC σdL = −2TC σR0
                                       R−R0
     Along BC, we have
                                       Z R−R0
                           QB→C = −                TH σdL = 2TH σR0
                                          R+R0

     Along AB, we have
                                            Z TH
                                  QA→B =            CL dT = α
                                              TC

     Along CD,we have
                                           Z TC
                                 QC→D =            CL dT = −α
                                            TH




                                   Page 15 of 38
                                                 Monday, 16 March 2026, 12:30pm – 16:30pm


         So the net heat input during this cycle is given by

                                           Q = 2TH σR0 + α

         By the first law of thermodynamics, ∆U over the whole cycle is 0 and hence

                     W = QA→B + QB→C + QC→D + QD→A = 2σR0 (TH − TC )


                                           W   2σR0 (TH − TC )
                                      η=     =
                                           Q    2σR0 TH + α




Marking Scheme:

                  Part    Steps                                    Marks
                          Correctly explain the origin of torque
                          from the uneven rubber band con-
                  (a)                                              M0.5
                          traction in the top and bottom
                          halves of the wheel
                          Wheel rotates clockwise                  A0.5
                  (b)     dU = T dS − P dV                         M0.5
                          Correct substitution of P → −τ and
                          V → L and correct answer (give 0.5       A0.5
                          if missing minus sign)
                          Expanding dS correctly using the
                  (c)                                              M0.5
                          hint
                          Correct substitution of dS =  dQ/T      M0.5
                                                    ∂S       CL
                          Correct substitution  of
                                              ∂T L = T           M0.5
                                              ∂Q                   M0.5
                          Know that CL =      ∂T L
                          Know that AB and CD are iso-
                  (d)                                              M1
                          choric, BD and DA are isothermal
                          Connect DA and BC with straight
                                                                   M0.5
                          lines using linear approximation
                          A is higher than D and B is higher
                                                                   M1
                          than C
                          Correct labelling of horizontal coor-
                                                                   M0.5
                          dinates R ± R0
                          Correct Q for all 4 processes. One
                  (e)                                              M1.5
                          wrong minus P  0.4
                          Realise W =       Q = 2σR0 (TH − TC )    M1
                          Correct η                                A0.5



6. In this question, we will consider variations of the Michelson-Morley interferometer.
   (a) In the interferometer below, an ideal beam splitter is placed at A while two perfectly   [2]
       reflective mirrors are placed at B and C, with |AB| and |AC| being equidistant. To
       mesaure the refractive index of a gas such as helium, we insert a hollow glass cell of


                                        Page 16 of 38
                                               Monday, 16 March 2026, 12:30pm – 16:30pm

    width D = 0.10 m and negligible thickness into one path of the interferometer and
    evacuate it. Monochromatic light of wavelength λ is shone into the interferometer.




    Helium gas with refractive index n is then slowly added to the cell until the pressure
    reaches atmospheric pressure. As this is done, the intensity of the light at the detector
    will vary. We then carefully count the number of times the intensity varies from
    maximum to minimum and back to maximum. If λ = 633 nm (from a helium-neon
    laser) and there are k = 11 cycles back to maximum intensity, find the numerical value
    of n − 1 at atmospheric pressure. The interferometer is placed in the x-y plane and
    you may neglect effects of gravity.

      Solution: The path length difference increases by 11λ. Letting k = 11, we have
                                        2nD − 2D
                                                 = kλ
                                           λ
      We get
                                            kλ
                                   n−1=        = 3.48 × 10−5
                                            2D


(b) Suppose the tiny gas chamber is now moving at speed v from A towards B, find the            [4]
    phase difference |∆ϕ| between the light from the two paths meeting at the detector in
    terms of the refractive index n, wavelength λ, and other relevant constants.

      Solution: The speed of light in a stationary chamber is n1 (we work in units where
      c = 1). By relativistic velocity addition, the light is effectively “dragged along” the
      gas chamber when the chamber is moving at speed v. We therefore have the new
      speed
                                             1
                                               +v      vn + 1
                                      vin = n v =
                                            1+ n       n+v
      The time taken A → B to travel through the chamber when the light travels in
      the same direction as the chamber is
                                                   D/γv
                                           tin =
                                                   v′ − v

      where γDv is due to length contraction. The time the light spends outside of the




                                     Page 17 of 38
                                                   Monday, 16 March 2026, 12:30pm – 16:30pm


      chamber is
                                                  L − γDv − vtin
                                         tout =
                                                        c
      The total time is therefore
                         L − γDv + (c − v)tin               D                     D(n − 1)
          tin + tout =                          =⇒ L −         + (1 − v)tin = L +
                                  c                         γv                    γ(v + 1)

      When the light is travelling from B → A against the direction of the glass, we
      reverse the direction of v → −v and get a total time of L + D(n−1)
                                                                  γ(1−v) . The original
      time without the gas chamber would have been 2L
                                                    c . Hence, the time difference is

                                               2D(n − 1)
                                           ∆t = √
                                                  1 − v2

      We also have ∆ϕ = ω∆t. Restoring the factor of t and setting ω = 2πc
                                                                        λ , we get

                                              4π(n − 1) D
                                         ∆ϕ = q
                                                1 − vc2 λ
                                                      2




      Alternative Solution: We can also solve this problem by working in the frame of
      the gas chamber, which is simpler. In this frame, the distance travelled is x′ = D
      and time taken is t′ = vDin = nD
                                     c . We can use Lorentz transformation to change
      back to the lab frame
                        ′        (                          (
         ct       γ γβ      ct           ct = γ(ct′ + βx′ )         ct = γD(n + β)
             =                    =⇒                         =⇒
         x       γβ γ       x′                   ′
                                         x = γ(x + βct )′           x = γD(1 + βn)

      As the light travels from A to B, the light takes time t to travel a distance x, while
      the light on the other path from A to C takes time xc to travel the same distance
      x. Hence, the difference in time is
                                         x    D           D
                             ∆t1 = t −     = γ (n + β) − γ (1 + βn)
                                         c    c           c
      For the reverse direction, we replace β → −β and get
                                           D            D
                                 ∆t2 = γ     (n − β) − γ (1 − βn)
                                           c            c
      Adding ∆t1 and ∆t2 gives us
                                                             D
                                  ∆t = ∆t1 + ∆t2 = 2γ          (n − 1)
                                                             c
      Since ∆ϕ = 2πc
                  λ ∆t, we get the same answer as before.


(c) Now, we consider a different Michelson-Morley interferometer set up in the vertical         [3]
    plane, with the top mirror at B removed. A beam of neutrons, each having mass m,
    is fired from the left. The splitter placed at A causes half of it to take the horizontal
    path with distance L to a mirror at C and back, while the other half takes the vertical
    path against gravity to some turning point B ′ and back. The initial kinetic energy of


                                       Page 18 of 38
                                             Monday, 16 March 2026, 12:30pm – 16:30pm

    each neutron is ε = αmgL.
    By treating the neutrons as non-relativistic de Broglie waves, derive the expression for
    the phase difference |∆ϕ| when the two neutron beams meet at the detector in terms
    of α, m, g, L, and ℏ. Effects of gravity are not negligible.

      Solution: The phase of AC is
                                                     √
                                       2L   2Lp1   2L 2mϵ
                               ϕ1 = 2π    =      =
                                       λ1    ℏ        ℏ
      Along AB, the momentum p2 changes as a function of the vertical position
                                                                       p       as part
      of the energy is converted to gravitational potential energy p2 = 2m(ϵ − mgy)
      Then the differential phase is
                                                dy   p2 dy
                                     dϕ2 = 2π      =
                                                λ2     ℏ
                                                        ϵ
      Integrating dϕ2 from 0 to the turning point h = mg   and back to 0 (making sure to
      reverse the sign of the backwards integral) gives us
                                                 r
                                              4     2ϵ3
                                       ϕ2 =
                                             3gh m
      Replacing ϵ = αmgL gives us a phase difference
                                     p
                                   m 2gL3            4
                            ∆ϕ =              2α1/2 − α3/2
                                       ℏ             3

      Some students accounted for the phase shift due to reflection from the mirror at
      C and added a ±π to the answer, which is also acceptable.

(d) Qualitatively sketch the graph of intensity I measured at the detector against α for       [1]
    0 ≤ α ≤ 6 assuming the number of neutrons emitted per unit time is the same.

      Solution: Constructive interference happens when ∆ϕ = 2πN with N being an
      integer, and destructive interference happens when ∆ϕ = (2N + 1)π. The intensity
      I is proportional to the total energy per unit time: I ∝ α. So the equation of the
      graph would look like something like
                                                           
                                                       4
                                  I ∝ α cos2 2α1/2 − α3/2
                                                       3

                                I




                                                                 α
                                        2         4          6



                                    Page 19 of 38
                                                Monday, 16 March 2026, 12:30pm – 16:30pm


         The 2 important features that one must get correct will be the increasing amplitude
         and decreasing gaps between adjacent intensity maxima.




Marking Scheme:

                  Part   Steps                                    Marks
                         Correct path difference δ = 2nD −
                  (a)                                             M1
                         2D
                         Correct constructive interference
                                                                  M0.5
                         condition δ = nλ
                         Correct numerical answer                 A0.5
                         Correct relativistic velocity addition
                  (b)                                             M0.5
                         for speed of light within the chamber
                         Calculate the time taken inside the
                         chamber and accounting for length        M0.5
                         contraction
                         Calculate time outside the chamber       M0.5
                         Do the same for the backward path        M0.5
                         Correct time difference ∆t               M0.5
                         Use ∆ϕ = ω∆t to get answer               A1
                         Correctly express momentum as a
                  (c)    function of the vertical position p2 =
                         p                                        M0.75
                           2m(ϵ − mgy)
                         Correct use of de broglie wave length
                                                                  M0.75
                         to get differential phase dϕ
                         Correctly integrate dϕ from 0 to
                         max height and backward (if integral
                                                                  M1
                         bounds are correct but calculation is
                         wrong, award 0.5)
                         Correct phase change for the hori-
                                                                  M0.5
                         zontal path
                         Correct answer                           A0.5
                  (d)    Peaks become closer as α increases       A0.5
                         Peaks become taller as α increases       A0.5



7. In this question, we will learn more about the interaction between atoms and light. Let
   us consider a cavity of volume V held at constant temperature T . Within this cavity is a
   “photon gas” in thermal equilibrium with the walls. We model these photons as ideal gas
   particles with a mean energy per photon of ℏ⟨ω⟩.
   (a) Using arguments from Kinetic Particle Theory or otherwise, show that the power          [2]
       incident per unit area of cavity wall ⟨I⟩, due to the photons, can be written as
                                                  c
                                             ⟨I⟩ = ⟨U ⟩
                                                  4
       where ⟨U ⟩ is the energy density of the photon gas and c is the speed of light.




                                       Page 20 of 38
                                              Monday, 16 March 2026, 12:30pm – 16:30pm


      Solution: Consider a small area dA on the cavity wall. In time dt, the volume of
      particles hitting the wall at an angle θ with respect to the normal is dA c cos θ dt.
      Note that we can use this because all photons, regardless of their frequencies (or
      energy), all travel at the same speed. Assuming isotropy, the proportion of particles
      moving at angle θ is n sin θ dθ/2 where n is the number of particles per unit volume.
      Hence, the number of particles hitting the area per unit time per unit area is
                                    dN    1
                                         = nc cos θ sin θ dθ
                                   dA dt  2
      Integrating this across θ from 0 to π/2 gives us nc/4. This proves the desired
      relation upon multiplying both sides by the average energy per particle.

For a perfect blackbody at thermodynamic equilibrium at temperature T , the power incident
per unit area per unit angular frequency I(ω) is equal to the power emitted per unit area
per unit angular frequency, given by the famous Planck’s Law

                                  ℏω 3        1         c
                        I(ω) =          ℏω/(k
                                                       = U (ω)
                                   2  2
                                 4π c e       B T ) −1  4
We now introduce a collection of atoms into the cavity. Each atom has a ground state |a⟩
with energy Ea and an excited state |b⟩ with energy Eb , separated by ∆E = Eb −Ea = ℏ∆ω.
The number of atoms in each of these states are Na and Nb respectively. The atoms then
interact with the photon gas, and Einstein identified three fundamental processes occuring:
 a. Spontaneous emission: Atom naturally decays from |b⟩ → |a⟩ with rate k1 , emitting a
    photon.
 b. Stimulated emission: An incident photon triggers an atom to decay from |b⟩ → |a⟩ with
    rate k2 , emitting a second, identical photon.
 c. Stimulated absorption: An atom absorbs an incident photon gets excited from |a⟩ → |b⟩
    with rate k3 .
(b) The actual rates used by Einstein when he tackled this problem in 1917 are αNb ,          [1]
    βU (∆ω)Na , γU (∆ω)Nb , where α, β and γ are new numerical constants he defined.
    Match these to the rate k1,2,3 corresponding to the 3 processes above and justify your
    choices fully with physics.

      Solution: Spontaneous emission should not depend on the number of photons.
      Stimulated emission depends on the number density of photons with frequency
      matching the excitation frequency. Looking at the dependence on Na and Nb , we
      arrive at
                     k1 → αNb , k2 → γU (∆ω)Nb , k3 → βU (∆ω)Na


(c) Given that the atoms are in thermal equilibrium with the bath of photons and by           [4]
    considering Ṅa and Ṅb , show the following relationships

                                                      ℏ∆ω 3
                                   β=γ     and   α=           β
                                                       π 2 c3




                                    Page 21 of 38
                                                  Monday, 16 March 2026, 12:30pm – 16:30pm


         Solution: The population Na and Nb must satisfy the Boltzmann distribution
         since it is in thermal equilibrium with the photons. We obtain
                                            Nb
                                               = e−βℏ∆ω
                                            Na
         Next, we consider the steady-state condition

                             Ṅa = αNb + γU (∆ω)Nb − βU (∆ω)Na = 0

         (note that since Ṅa + Ṅb = const., we just have Ṅb = −Ṅa = 0 and writing an
         equation for Ṅb does not add new information). Substituting in the Boltzmann
         condition and solving for U (∆ω), we find that
                                                          α
                                              α           β
                           U (∆ω) = ℏ∆ω/(k T )    = ℏ∆ω/(k T ) γ
                                   βe     B    −γ  e      B   −β

         Finally, matching this with the expression for U (∆ω) given by Planck’s Law gives
         us the desired relationship
                                         γ        α    ℏ2 ω 3
                                           = 1,      = 2 3
                                        β         β     π c
         A LASER, Light Amplification by Stimulated Emission of Radiation, works by hav-
         ing population inversion, where most of the atoms are “pumped” into the excited
         energy level |b⟩. Then any small number of photons can trigger larger and larger
         numbers of stimulated emission processes.



Marking Scheme:

                  Part   Steps                                     Marks
                         Correct argument by considering the
                  (a)    number of particles hitting the wall      M1
                         in dt
                         Corect integral of 12 nc cos θ sin θ dθ
                                                                   M1
                         from θ = 0 to π/2
                  (b)    All constants matched correctly           A1
                  (c)    Nb = Na e−βℏ∆ω                            M1
                         Correct steady state relationship         M1
                         Correct substitution and into boltz-
                         mann distribution and solving for         M1
                         U (∆ω)
                         Constants matched correctly               A1



8. (a) Inverse beta decay is an important reaction in neutrino detectors. One version of      [4]
       this decay occurs when an electron antineutrino interacts with a proton to produce a
       neutron and a positron:
                                        ν̄ e + p −−→ n + e+
       Assuming the proton is at rest in the lab frame, determine the minimum neutrino


                                       Page 22 of 38
                                                       Monday, 16 March 2026, 12:30pm – 16:30pm

    energy in the lab frame required for this reaction to take place. Leave your answer in
    terms of the relevant rest masses of the proton mp , neutron mn , and electron me . The
    mass of the neutrino is negligible.

      Solution: Consider the centre of momentum frame. To minimise the neutrino
      energy, the products of the reaction should have zero velocity in this frame. Any
      nonzero velocity would mean energy is ”wasted” in moving the particles, rather
      than simply creating them.
      Let us use the relativistic invariant ε2 = −E 2 + p2 c2 . This quantity is both con-
      served and invariant across frames. Before the reaction, in the lab frame, we have:

                                        ε2 = −(Eν̄e + mp c2 )2 + Eν̄2e

      After the reaction, in the centre of momentum frame, we have:

                                          ε2 = −(mn c2 + me c2 )2

      We can then equate these expressions and solve for Eν̄e :

                           −(Eν̄e + mp c2 )2 + Eν̄2e = −(mn c2 + me c2 )2
                                   −2Eν̄e mp c2 − m2p c4 = −(mn + me )2 c4
                                                 (mn + me )2 − m2p 2
                                        Eν̄e =                    c
                                                       2mp


(b) Bob decides to take a spaceship with constant proper acceleration g. In the lab frame,        [4]
    his position x as a function of his proper time τ is given by:
                                                       c2      gτ
                                             x(τ ) =      cosh
                                                       g        c
                     x    −x
    where cosh x = e +e
                      2        .
    Alice, afraid to leave Bob, attaches herself behind Bob’s spaceship with a rope of
    constant proper length L. Determine the proper acceleration g ′ experienced by Alice.
    Hint: Proper time τ is always time measured in the frame of the moving body, while
    coordinate time t can be time measured in any frame. The proper distance ∆s in any
    frame between two fixed events is given by:
                                            ∆s2 = ∆x2 − c2 ∆t2
    The following identities may be helpful
                   d                           d                         sinh x
                     sinh x = cosh x,            cosh x = sinh x,               = tanh x
                  dx                          dx                         cosh x

      Solution: Let us compute the proper distance of Bob from the origin over time,
      and use the proper distance between him and Alice to infer Alice’s motion. To do
      this, we need to determine ∆t.
      Consider a clock ticking on Bob’s spaceship. Each tick has no spatial separation,
      but has time separation dτ . By the Lorentz transformation, we have:

                                                  dt = γ dτ



                                          Page 23 of 38
                                              Monday, 16 March 2026, 12:30pm – 16:30pm


where γ = √ 1 v2 . To determine γ, we write:
             1− 2
                c


                                  dx          gτ
                                     = c sinh
                                  dτ           c
                                  dx   dτ dx     1 dx
                                     =        =
                                  dt   dt dτ     γ dτ
                                v             gτ
                              q      = c sinh
                               1− v2           c
                                       c2
                                                   gτ
                                        v = c tanh
                                                    c
                                                 gτ
                                        γ = cosh
                                                  c

This allows to obtain ∆t(τ ):

                                Z ∆t          Z τ
                                                  gτ
                                       dt =         cosh
                                                     dτ
                                 0        0        c
                                         c     gτ
                                     ∆t = sinh
                                         g      c

Given ∆x(τ ) and ∆t(τ ), we obtain the proper distance:
                             2 2 
                             c             gτ         gτ 
                          2
                       ∆s =          cosh2    − sinh2
                              g             c          c
                             2 2
                             c
                          =
                              g
                                                                         2
This implies that the proper distance of Bob to the origin is always cg . Alice lags
behind this by a constant proper distance L, so her proper distance to the origin is
c2
 g − L. But since a constant proper acceleration implies constant proper distance
to the origin, and Alice has a constant proper distance to the origin, she also has
a constant proper acceleration. In fact, her equation of motion differs from Bob’s
only by the proper acceleration she experiences. We have:

                                     c2    c2
                                        −L= ′
                                     g     g
                                                      g
                                            g′ =
                                                    1 − gL
                                                        c2




                                Page 24 of 38
                                                  Monday, 16 March 2026, 12:30pm – 16:30pm



Marking Scheme:

                  Part    Steps                                    Marks
                          Noticing that products should have
                  (a)                                              M1
                          equal velocities
                          Identifying the relativistic invariant
                                                                   M1
                          mass-energy
                          ε2 = −(Eν̄e + mp c2 )2 + Eν̄2e           M1
                          ε2 = −(mn c2 + me c2 )2                  M1
                                 (mn +me )2 −m2
                          Eν̄e =             p 2
                                               c                   A1
                                      2mp
                          For a conservation of energy and mo-
                          mentum approach, award M1 to each
                          of the two equations and A2 to the
                          correct final answer
                  (b)     dt = γ dτ                                M1
                          ∆t = gc sinh gτc                         M1
                                  2
                          ∆s = cg                                  M1
                          Noticing that both Alice and Bob
                          must have constant proper distance       M1
                          to origin and proper acceleration
                          g ′ = ggL                                A1
                               1− 2
                                  c




9. The temperature in which a thermodynamic phase transition happens can be plotted against
   pressure in a P (T ) graph. This graph is called a coexistence curve and it is determined by
   the Clausius-Clapeyron equation:
                                        dP        L
                                           =
                                        dT   T (v2 − v1 )

  where L is the latent heat per mole, and v1 and v2 are the volumes per mole of the material
  in each of the phases. As an illustration, the coexistence curve of a water is shown below.




   (a) First, consider a simple phase transition – a liquid-gas phase transition. You are given     [2]
       that the point (P0 , T0 ) lies on the coexistence curve. Determine the equation of P (T ),


                                        Page 25 of 38
                                               Monday, 16 March 2026, 12:30pm – 16:30pm

     making (and justifying) any relevant approximations about liquids and gases. You may
     assume the latent heat of vaporisation L is temperature-independent. To not confuse
     the ideal gas constant with the radius (in later parts), you may write the former as Rg .


       Solution: The approximation that we need to make is that vliquid ≪ vgas . This is
       justifiable because the gaseous vapour will take up much more volume (the volume
       of the container) than the liquid.
       Applying the Clausius-Clapeyron equation,
                            dP           L               L       LP
                               =                     ≈        =
                            dT   T (vgas − vliquid )   T vgas   Rg T 2
                                      Z P           Z T
                                           dP     L      dT
                                              =
                                        P0 P     Rg T 0 T 2
                                                            
                                                  L    1    1
                                P (T ) = P0 exp           −
                                                  Rg T 0 T


From now on, we shall let Psat (T ) denote the saturation pressure; that is, the pressure that
lies on the coexistence curve (the P (T ) found previously) for a given temperature. Consider
a container held at a fixed external pressure Pext . By definition, ordinary boiling occurs at
a temperature Tb , whereby
                                     Psat (Tb ) = Pext
In the following parts, we shall study the dynamics of nucleation, referring to the initial
formation of a microscopic vapour bubble inside a liquid.
For the following parts, assume that:
  i. The liquid and vapour are both at a temperature T .
 ii. The vapour inside the microscopic bubbles can be treated as having a pressure Psat (T ).
iii. The surrounding bulk liquid is at a constant pressure Pext .
iv. The surface tension σ is constant.
 v. Gravity can be neglected for pressure variations in the liquid.
vi. The formation of bubbles is a fully reversible process.
We define the driving pressure for vapour-bubble formation as follows:

                         ∆P (T ) = Psat (T ) − Pext   (T > Tb )

(b) For the case T > Tb , vapour bubbles can form in the liquid. Gibbs free-energy is            [3]
    a thermodynamic potential measuring the maximum reversible work by a thermody-
    namic system at constant pressure and temperature; we can use it to determine the
    spontaneity and energetic feasibility of phase transitions. The Gibbs free-energy can
    be given by
                                  Gb (R) = U + P V − T S
     where U is internal energy, P is pressure, V is volume and S is entropy. Find an
     expression for the free-energy change ∆Gb (R) when forming a spherical bubble of
     vapour of radius R. You must explain the physical meaning and the signs of each term
     in your answer.




                                     Page 26 of 38
                                                  Monday, 16 March 2026, 12:30pm – 16:30pm


       Solution: There are two components of ∆Gb (R):

           i. Surface free energy due to surface tension: Its magnitude is given by σA =
              4πR2 σ. It is positive because it costs energy to create a free surface. This
              can be interpreted as the internal energy of the bubble, U .

          ii. Pressure-volume energy due to driving pressure: Its magnitude is given by
              V ∆P (T ) = 43 πR3 ∆P (T ). It is negative because the formation of the vapour
              is thermodynamically favoured when T > Tb , since it is above boiling point.

       These are the two competing effects at play here. Since the process is reversible,
       there is no entropy change. We hence obtain
                                                   4
                                 ∆Gb (R) = 4πR2 σ − πR3 ∆P (T )
                                                   3


(c) Determine expressions for the critical radius Rc,b where ∆Gb (R) is maximum, and the              [1]
    corresponding nucleation barrier height (maximum free-energy barrier) ∆G∗b .

       Solution: We simply differentiate ∆Gb (R) with respect to R, and set the deriva-
       tive equal to 0 to find the (non-zero) critical radius:

                             d (∆Gb (R))
                                         = 8πRσ − 4πR2 ∆P (T ) = 0
                                 dR
                                                     2σ
                                           Rc,b =
                                                    ∆P (T )
       The corresponding nucleation barrier height is

                                                     16πσ 3
                                         ∆G∗b =
                                                  3 (∆P (T ))2


Continue working in the regime T > Tb , so that bubble nucleation is relevant. You may
treat ∆P as roughly constant during a short time interval. A vapour bubble of radius R (t)
expands in an incompressible, ideal liquid of mass density ρ. Neglect viscous and dissipative
effects, and assume that the container of liquid is large.
Assume the liquid around the bubble to be incompressible, and that the resulting liquid
velocity field u = u (r, t) r̂ is purely radial, where r > R (t) is the distance from the center
of the bubble, outside the bubble.
 (d) Derive an expression for u (r, t), in terms of R (t) , Ṙ (t) and r. Show your working           [2]
      clearly.
      Hint: If needed, the continuity equation is ∇ · v = 0, where v is the velocity field of the
      liquid. For a purely radial vector  field v = vr r̂, the divergence in spherical coordinates
      is given by ∇ · v = r12 ∂r∂
                                   r 2 vr .

       Solution: Using the hint, we have
                                         1 ∂             
                                          2
                                              r2 u (r, t) = 0
                                         r ∂r



                                       Page 27 of 38
                                                Monday, 16 March 2026, 12:30pm – 16:30pm


     This implies that
                                         r2 u (r, t) = A (t)
     for some function A (t) that only depends on time.
     We can identify what A (t) is based on the boundary condition at the interface: the
     liquid at the surface (r = R) must move with the surface, hence u (R (t) , t) = Ṙ (t).
     This gives us
                                    A (t) = (R (t))2 Ṙ (t)
     Hence,
                                        A (t)   (R (t))2 Ṙ (t)
                                u (r, t) =    =
                                          r2          r2
     Alternatively, one can just conserve volume flow across any spherical surface and
     get the same result.

(e) Hence, show that                                                                         [4]
                                ρf1 R, Ṙ, R̈ = ∆P − f2 (R)
                                 
   for some functions f1 R, Ṙ, R̈ and f2 (R) that depend on the given parameters. Find
                            
   the functions f1 R, Ṙ, R̈ and f2 (R).

     Solution: Since f1 depends on R̈, this is a good hint that we should write an
     energy conservation equation, so that we can differentiate with respect to time to
     extract out a R̈ term. Hence,
                                         d
                                            (T + V ) = 0
                                         dt
     First, we can determine the bulk kinetic energy of the liquid outside the bubble.
     We make use of the previous part to do so:
                      ZZZ                       Z ∞
                            1             2           1                       
                 T =          ρ (u (r, t)) dV =         ρ (u (r, t))2 4πr2 dr
                          V 2                    R(t) 2
                                             Z ∞
                                                    dr
                               = 2πρR4 Ṙ2            2
                                                        = 2πρR3 Ṙ2
                                               R(t) r
     The potential energy V is just the free-energy associated with the formation of the
     bubble, as per part (b). Hence,
                                               4
                                   V = 4πR2 σ − πR3 ∆P
                                               3
     (We have accounted for the driving work by the pressure in this term, by absorbing
     it in as an effective potential.)
     Putting these together in the energy conservation equation, we have:
                                                               
                     2πρ 3R2 Ṙ3 + 2R3 ṘR̈ + 8πσR − 4πR2 ∆P Ṙ = 0
                                           
                                        3           2σ
                                 ρ RR̈ + Ṙ2 = ∆P −
                                        2           R



                                    Page 28 of 38
                                              Monday, 16 March 2026, 12:30pm – 16:30pm


      which is of the form we desire. Hence, the required functions are:
                                                    3
                                  f1 R, Ṙ, R̈ = RR̈ + Ṙ2
                                                      2
                                                     2σ
                                          f2 (R) =
                                                     R


Let TR be the temperature where a bubble of radius R remains in mechanical equilibrium,
under the conditions and assumptions of the previous parts. Clearly, TR ̸= Tb . We denote
∆T = TR − Tb .
 (f) Assuming that ∆T ≪ Tb , determine an expression for ∆T .                                [3]

      Solution: Using part (e), or by applying the Young-Laplace equation, we see that
      at mechanical equilibrium,
                                                           2σ
                                     Psat (TR ) − Pext =
                                                           R
      We can perform a linearisation:

                                                                 dPsat
                   Psat (TR ) = Psat (Tb + ∆T ) ≈ Psat (Tb ) +             ∆T
                                                                  dT T =Tb

      Recall that by definition, Tb satisfies Psat (Tb ) = Pext . And, using the Clausius-
      Clapeyron equation, we have dPdTsat ≈ LP  sat
                                             Rg T 2
                                                    .
      Combining all the results, we eventually obtain

                                                2σRg Tb2
                                        ∆T =
                                                RLPext




                                    Page 29 of 38
                                                   Monday, 16 March 2026, 12:30pm – 16:30pm



 Marking Scheme:

                    Part   Steps                                    Marks
                           Approximating vliquid ≪ vgas with
                    (a)                                             M0.5
                           justification
                           dP       LP
                           dT = Rg T 2                              M0.5
                           Correct final answer for P (T )          A1
                    (b)    Physical meaning and sign of 4πr2 σ      M1
                           Physical meaning and sign of
                           4    3                                   M1
                           3 πr ∆P (T )
                           Reversible hence ∆S = 0                  M0.5
                           Correct final answer                     M0.5
                    (c)    Correct final answer for rc,b            A0.5
                           Correct final answer for ∆G∗b            A0.5
                           Using the divergence in spheri-
                           cal coordinates or otherwise (must
                    (d)                                             M1
                           be properly justified) to obtain
                           r2 u (r, t) = A (t)
                           u (R (t) , t) = Ṙ (t)                   M0.5
                           Correct final answer                     A0.5
                           Idea of conservation of energy,
                    (e)     d                                       M0.5
                           dt (T + V ) = 0
                           T = 2πρR3 Ṙ2                            M1
                           V = 4πR2 σ − 34 πR3 ∆P , or alter-
                           natively, accounting for the driving     M1
                           work by the pressure separately
                           Correct substitution into the energy
                                                                    M0.5
                           conservation equation             
                           Correct final answer for f1 R, Ṙ, R̈    A0.5
                           Correct final answer for f2 (R)          A0.5
                    (f)    Psat (TR ) − Pext = 2σ
                                                R                   M1
                           Linearisation of Psat (TR )              M0.5
                           Correct usage of Clausius-Clapeyron
                                                                    M1
                           equation
                           Correct final answer                     A0.5
                           Incorrect coeﬀicient used in 2σ  R -
                           penalty but A0.5 to still be given
                                                                    -M0.5
                           if all other steps are performed cor-
                           rectly.



10. We know that for all solutions to the linear wave equation, the principle of superposition
    applies. Examples include electromagnetic waves and waves on a string.
    Dispersion relations describe the relation between angular velocity ω(k) and wavenumber k,
    where phase velocity can be obtained as vp = ωk . Each wave component has its own phase
    velocity, propagating independently of each other.
    However, in nonlinear dynamics, this is no longer the case. Interfering wave packets interact,



                                         Page 30 of 38
                                                  Monday, 16 March 2026, 12:30pm – 16:30pm

leading to nontrivial behaviour; in dispersive media, nonlinear interactions can even preserve
wave packets and oppose dispersion. These wave packets are called solitons.
To investigate solitons, we will look at a simple mechanical system. Consider a long taut
horizontal string, to which at equal intervals b, identical spokes arranged vertically are
attached. These spokes can be considered as pendulums swinging in the plane perpendicular
to the string axis. The weight of each spoke is m, the distance from the center of mass of
the spoke to the string is d, and the moment of inertia relative to the axis passing through
the string is I. When one spoke deviates from the neighboring one by an angle ∆ϕ, the
string creates a restoring torsional torque τ = −K∆ϕ.
It can be assumed that the characteristic size of the soliton λ ≫ b. Hence, consider that
the angular coordinate at some point x along the string is given by a continuous function
ϕ(x, t); ϕ = 0 is defined at the position where the pendulum points vertically downwards,
and increases as the pendulum rotates anticlockwise.
Take the level of a line passing through the lowest possible positions of the center of mass
of the spokes as zero of the potential energy in the gravitational field.




(a) Assuming the absence of gravity first: obtain a differential equation for ϕ(x, t) of the     [2]
    following form
                                  ∂ 2 ϕ(x, t)     ∂ 2 ϕ(x, t)
                                              = α
                                      ∂t2             ∂x2
    where α is some constant.

       Solution: Consider the torque acting upon the i-th spoke. We have

                  τ = −K(ϕi − ϕi−1 ) − K(ϕi − ϕi+1 ) = K(ϕi−1 + ϕi+1 − 2ϕi )

       Using the continuous assumption, we simplify to

                                                    ∂ 2 ϕ(x, t)
                                          τ = Kb2
                                                        ∂x2
       Relating to angular acceleration, we hence obtain

                                       ∂ 2 ϕ(x, t)         2
                                                        2 ∂ ϕ(x, t)
                                   I               = Kb
                                           ∂t2               ∂x2


(b) Using the substitution ϕ(x, t) = f (x ± vt), find the speed of linear wave propagation       [1]
    v0 for the scenario in (a). Show your substitution clearly.



                                       Page 31 of 38
                                                Monday, 16 March 2026, 12:30pm – 16:30pm


      Solution: What we obtained in part a is the standard linear wave equation. By
      making the required substitution given in the problem statement, we can easily
      obtain
                             Iv 2 f ′′ (x ± vt) = Kb2 f ′′ (x ± vt)
                                            2   ′
      where f ′′ (x ± vt) is equivalent to d dx
                                              f (x )   ′
                                                 ′2 , x = x ± vt. Hence, the speed of wave
      propagation is                                 r
                                                       K
                                            v=b
                                                        I


(c) Now, considering gravity, obtain a differential equation for ϕ(x, t) of the following form   [1]

                            ∂ 2 ϕ(x, t)     ∂ 2 ϕ(x, t)
                           β            − γ             + δ sin ϕ(x, t) = 0
                                ∂t2             ∂x2
    where β, γ, and δ are constants to determined. DO NOT use the small angle approxi-
    mation.

      Solution: By including torque due to gravity into the equation obtained in part
      a, we obtain
                        ∂ 2 ϕ(x, t)                            2
                                                            2 ∂ ϕ(x, t)
                      I             = −mgd sin ϕ(x, t) + Kb
                            ∂t2                                  ∂x2


(d) Deduce the maximum speed of wave propagation vmax for the scenario in (c). Justify           [1]
    your answer.

      Solution: The speed of any propagating wave entity is strictly less than the max-
      imum speed of linear wave propagation; this is a physical limit defined by the
      coupling strength between successive spokes.
                                                 r
                                                   K
                                        vmax = b
                                                   I


The equation given in (c), ignoring coeﬀicients, is called the Sine-Gordon equation; it is
a generalisation of the Klein-Gordon equation

                           ∂ 2 ϕ(x, t) ∂ 2 ϕ(x, t)
                                      −            + ϕ(x, t) = 0
                               ∂t2         ∂x2
which is a relativistic quantum wave equation for spin-0 particles. (But don’t worry - we are
not doing quantum field theory here). In this equation, ϕ(x, t) is a field variable; which we
gave a physical interpretation as the angular displacement in our mechanical model. Fields
possess energy and momenta, not unlike electromagnetic fields. However, the exact nature
of these conserved quantities may differ. Note that you do not have to worry about what
appears to be inconsistent units - the equation is non-dimensionalised.
Continue to make reference to the pendulum model whenever necessary.
(e) Work with the Klein-Gordon equation. Using the ansatz ϕ(x, t) = Aei(kx±ωt) , obtain          [1]
    the dispersion relation ω(k).




                                      Page 32 of 38
                                                 Monday, 16 March 2026, 12:30pm – 16:30pm


      Solution: Substituting and differentiating, it should be fairly straightforward to
      obtain
                                        ω2 = 1 + k2


These are still linear waves with a well-defined dispersion relation. The waves propagate
independently and at different speeds; hence wavepackets spread out over time. To better
understand nonlinear waves, let us study the soliton solutions of the Sine-Gordon equation.
 (f) Show that ϕs (x) = 4 arctan e±x is a solution to the Sine-Gordon equation for a static   [2]
     soliton in equilibrium. To simplify things, proving for just the plus case ϕs (x) =
     4 arctan ex is suﬀicient. Sketch a graph of ϕs (x) for both cases on the same graph
     and label the asymptotes.
            d               1
     Hint: dx  arctan x = 1+x 2



      Solution: The equation reduces to

                                          ∂ 2 ϕ(x)
                                                   = sin ϕ(x)
                                            ∂x2
      for static solitons. Substituting in the proposed solution,

                               ∂ 2 ϕ(x)    d 4ex       4(ex − e3x )
                                        =            =
                                 ∂x2      dx 1 + e2x    (1 + e2x )2

      Furthermore,
                                     sin ϕ(x) = sin (4 arctan ex )
      Let θ = arctan ex :

                  sin ϕ(x) = sin 4θ = 2 sin 2θ cos 2θ = 4 sin θ cos θ(1 − 2 sin2 θ)
                                                       e        x          1
      Given θ = arctan ex we can also obtain sin θ = √1+e 2x
                                                             and cos θ = √1+e 2x
                                                                                 :

                                     ex      1            2e2x      4ex (1 − e2x )
                  sin ϕ(x) = 4 √          √        (1 −         ) =
                                   1 + e2x 1 + e2x      1 + e2x      (1 + e2x )2
              2
      Hence ∂ ∂x
               ϕ(x)
                 2  = sin ϕ(x), and we conclude our proof.

                              4 arctan(ex ) 2π ϕ
                             4 arctan(e−x )

                                                π


                                                                           x
                            −4          −2                  2         4


From here on, we will use kink and anti-kink to describe the plus and minus soliton
solutions in (f) respectively.
(g) Find the energy E0 of a static kink.                                                      [3]
    Hint: Energy is also non-dimensionalised; do not use constants from the mechanical
    model such as m and I in your answers.



                                       Page 33 of 38
                                                        Monday, 16 March 2026, 12:30pm – 16:30pm


      Solution: To get a hint of what the energy should look like, we need to refer back
      to our mechanical model. (Of course, for those familiar with field theory you are
      free to directly quote the Hamiltonian - you will be given full credit too)

      In the mechanical model we have three sources of energy:
                                           2
         a. Kinetic energy, 21 I ∂ϕ
                                  ∂t
                                    i



         b. Torsion energy, 12 K(θi − θi−1 )2

          c. Gravitational potential energy, mgd(1 − cos ϕi )

      And if we make the continuous assumption, we can define an energy density

                          1 I ∂ϕ(x, t) 2 1   ∂ϕ(x, t) 2 mgd
                       ϵ=               + Kb           +    (1 − cos ϕ(x, t))
                          2 b ∂t         2     ∂x        b
      It is neater when we work with the nondimensionalised Sine-Gordon equation:

                                       1 ∂ϕ(x, t) 2 1 ∂ϕ(x, t) 2
                           ϵ(x, t) =               +             + (1 − cos ϕ(x, t))
                                       2 ∂t          2 ∂x
      Hence, we find the energy by integrating;
                              Z ∞
                                     1 ∂ϕ(x, t) 2 1 ∂ϕ(x, t) 2
                       E=                        +             + (1 − cos ϕ(x, t)) dx
                               0     2 ∂t          2 ∂x

      Since we are working with a static kink, there is no kinetic energy. Differentiating
      ϕ by x and manipulating, we get
             Z ∞                    2                                2          Z ∞
                   1         4ex                    ϕs (x)     ϕs (x)                             e2x
        E=                                + 2 2 sin        cos               dx =         16                 dx
               0   2       1 + e2x                    4          4                  0          (1 + e2x )2

      Integrating, we get                                   ∞
                                                         8
                                               E= −              =8
                                                      1 + e2x −∞


(h)   i. Let x′ and t′ be the coordinates in a frame moving at relativistic speed v in the                        [1/2]
         positive x-direction. Express x′ and t′ in terms of x and t.

           Solution:
                                            t′ = γ(t − vx),    x′ = γ(x − vt)


      ii. In terms of ϕ(x, t), the field expressed in the moving frame ϕ′ (x′ , t′ ) = ϕ(x, t), and               [1/2]
          the respective coordinates, state an equation which shows that the Sine-Gordan
          equation is invariant under a Lorentz transformation.

           Solution: Since sin ϕ′ = sin ϕ, we just need to have

                               ∂ 2 ϕ′ (x′ , t′ ) ∂ 2 ϕ(x′ , t′ )   ∂ 2 ϕ(x, t) ∂ 2 ϕ(x, t)
                                                −                =            −
                                    ∂t′2             ∂x′2              ∂t2         ∂x2




                                               Page 34 of 38
                                                 Monday, 16 March 2026, 12:30pm – 16:30pm


           or written more elegantly,

                                           ∂t2′ − ∂x2′ = ∂t2 − ∂x2

           This is called the d’Alembertian operator.
           To prove that it is Lorentz invariant, however, is much more involved. This
           was the original question but was nerfed as it was too mathematical. But we
           present the solution below for interested readers.
           Using chain rule, the partial derivative operators transform as

                                ∂    ∂x′ ∂     ∂t′ ∂       ∂      ∂
                                   =       ′
                                             +       ′
                                                       = γ ′ − γβ ′
                                ∂x   ∂x ∂x     ∂x ∂t      ∂x     ∂t
                             ∂    ∂x′ ∂     ∂t′ ∂          ∂      ∂
                               =        ′
                                          +       ′
                                                    = −γβ ′ + γ ′
                            ∂t    ∂t ∂x     ∂t ∂t         ∂x     ∂t
           We now calculate the operator □ in terms of the primed coordinates
                                                   2                       2
                                         ∂      ∂            ∂      ∂
                             □=        γ ′ − γβ ′        − γ ′ − γβ ′
                                        ∂t     ∂x           ∂x     ∂t
           Expanding the squares, we get
                      2                              2                      
                       ∂          ∂2     2 ∂
                                             2          ∂        ∂2      2 ∂
                                                                             2
             □=γ   2
                           − 2β ′ ′ + β          −γ 2
                                                            − 2β ′ ′ + β
                      ∂t′2     ∂t ∂x      ∂x′2         ∂x′2     ∂x ∂t     ∂t′2

           The mixed partial derivative terms cancel out. Collecting the remaining terms
           gives us
                                                ∂2                   ∂2
                              □ = γ 2 (1 − β 2 ) ′2 − γ 2 (1 − β 2 ) ′2
                                                ∂t                  ∂x
                         1
           Since γ 2 = 1−β 2 , the coeﬀicients become unity:



                                               ∂2    ∂2
                                          □=       −     = □′
                                               ∂t′2 ∂x′2
           Because ϕ is a Lorentz scalar (ϕ = ϕ′ ), and the operator □ is invariant (□ =
           □′ ), the equation transforms as:

                                            □′ ϕ′ + sin ϕ′ = 0

           The equation holds the same form in all inertial frames, proving it is indeed
           Lorentz invariant.

From here on, you may assume the Sine-Gordan equation to be Lorentz invariant.
 (i) Using your results in (f) and (h), find the solution ϕk (x, t) to a solitary kink propagating   [1]
     at speed v in the positive x-direction.

      Solution: Having shown Lorentz invariance, it is a simple matter of applying our
      results. We can think of a kink propagating at speed v as a Lorentz boost applied
      upon a static kink ϕs ! Hence
                                                                     √x−vt
                             ϕs = 4 arctan ex → ϕk = 4 arctan e       1−v 2




                                        Page 35 of 38
                                             Monday, 16 March 2026, 12:30pm – 16:30pm


                                                                    1
     This is in fact simply length contraction; the factor of γ = √1−v 2
                                                                         compresses the
     graph of ϕk (x) at any snapshot of time along the x-axis.

(j) What is the energy Ev of a kink propagating at speed v? Express your answer in terms     [1]
    of E0 and v.

     Solution: Similarly we use relativistic analogy; we can simply infer that
                                                  E0
                                        Ev = √
                                                 1 − v2
     This is doable without relativistic methods - repeat the procedure in part g, and
     include kinetic terms. But given that the question is only allocated one mark,
     students should not be looking to do too much math.

(k) Now, consider two static kinks separated by a very large distance D. By considering      [3]
    the energy density or otherwise, deduce and justify a scaling relation between the
    interaction energy ∆E and the distance of separation D.

     Solution: Near both static kinks, the influence from the other static kink is ex-
     tremely small; hence the change in energy density at points near the kinks is very
     small. We want to consider what happens at the midpoint of the kinks, since that
     is where the energy density is most sensitive to changes in D.

     Referring back to our results in part g, we can say that the energy density for
     each kink is:
                                                 e2x
                                    ϵ(x) = 16
                                              (1 + e2x )2
     Hence, the energy density at the midpoint of the two kinks is:

                               eD              e−D       16
                ϵ(0) = 16         D  2
                                       + 16       −D 2
                                                       ≈ D + 16e−D = 32e−D
                            (1 + e )        (1 + e )    e

     We hence conclude that ∆E ∝ e−D .

(l) Using your results in (k), deduce whether the interaction force of each pair below are   [1]
    attractive or repulsive.
     a. kink - kink
     b. kink - antikink
     c. antikink - antikink

                                              dE
     Solution: For a kink-anti-kink pair, the dD  < 0, so the interaction force is attrac-
     tive since F = − dD . The same logic applies to the other pairs.
                      dE

     The answer is therefore a. repulsive, b. attractive, c. repulsive. In literature,
     kinks and antikinks are assigned something called topological charge - kinks have
     +1 charge, and antikinks have −1 charge.




                                    Page 36 of 38
                                           Monday, 16 March 2026, 12:30pm – 16:30pm



Marking Scheme:

             Part   Steps                                  Marks
                    Correct change from discrete to con-
             (a)                                           M1
                    tinuous assumption
                    Correct answer α = Kb2 /I              A1
             (b)    Correct differentiationp               M0.5
                    Correct answer v = b K/I               A0.5
             (c)    β, γ, δ are all correct p              A1
             (d)    Correct answer vmax = b K/I            A0.5
                    Reasonable justification               A0.5
                    Correct substitution and answer
             (e)                                           A1
                    ω2 = 1 + k2
             (f)    Find ∂ 2 ϕ/∂ 2 x correctly             M0.7
                    Find sin ϕ correctly and match
                                                           A0.7
                    ∂ 2 ϕ/∂ 2 x
                    Correct Sketch of graph and la-
                                                           A0.6
                    belling of asymptote
             (g)    Realise theres no KE for static kink   M0.5
                    Find torsion energy correctly as
                       2                                 M1
                    1   ∂ϕ
                    2   ∂x
                     Find GPE correctly as (1 − cos ϕ)     M1
                     Integrate correctly and obtain an-
                                                           A0.5
                     swer
             (h)(i) Correct x′ AND t′                      A1
             (h)(ii) Correct invariant equation            A1
             (i)     Correct ϕk                            A1
             (j)     Correct energy Ev = γE0               A1
                     Consider energy density at midpoint
             (k)                                           M2
                     between kinks
                     Correct scaling ∆E ∝ e−D              A1
                                                           A1
             (l)    All 3 forces correct




                                  Page 37 of 38
        Monday, 16 March 2026, 12:30pm – 16:30pm




Page 38 of 38
