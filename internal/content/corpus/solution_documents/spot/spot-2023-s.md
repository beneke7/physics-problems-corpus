---
id: solution-document-spot-2023-s
source: spot
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2023_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2023_S.pdf."
---

Wednesday, 15 March 2023, 1:00pm–5:00pm




                    2023 Selection Test
      for the Asian and International Physics Olympiads




a. This is a four-hour test. Attempt all questions. The maximum total score is 75; marks
   allocated for each question part are indicated in square brackets.

b. Check that there are a total of 22 printed pages (including this cover page). The last
   page contains a table of physical constants that you may refer to and use.

c. Begin your answer for each question on a fresh sheet of paper, and present your working
   and answers clearly. Your answer sheets should be sorted according to the order of the
   questions.

d. Write your name on the top right hand corner of every answer sheet you submit.

e. Please complete and sign the declaration on page 2, which should be stapled
   together and submitted with your answer sheets.

f. You may use a standard (non-programmable) scientific calculator in accordance with the
   statutes of the International Physics Olympiad.

g. No books or documents relevant to the test may be brought into the examination room.




                                    Page 1 of 22
                                                   Wednesday, 15 March 2023, 1:00pm–5:00pm

Declaration

I declare that I will be fully committed to the training for and participation in the Asian
Physics Olympiad and/or the International Physics Olympiad if selected. I will check first with
the MOE coordinator before taking on additional commitments not listed below.
   Potential limitations to my commitment in the period from now to end-July 2023 are de-
scribed exhaustively in the box below, such as other academic competitions, CCA commit-
ments (school-related or otherwise), travel plans, etc.




Name and signature:




         Question:     1       2      3       4     5      6       7      8    Total
         Points:       5       9     10       9     7      6      10     19      75
         Score:




                                          Page 2 of 22
                                                   Wednesday, 15 March 2023, 1:00pm–5:00pm

1. We model the collision of a compound object with a rigid vertical wall. The object is made
   up of a spherical shell of mass m1 that is joined by a horizontal rod to the centre of an
   inner ball of mass m2 .
  The rod has negligible mass and an effective spring constant k, such that the magnitude of
  the restoring force is F = kx when the distance between the centres of the masses is x. The
  rod does not twist or flex, but can compress and stretch as the masses are displaced from
  their initially concentric positions.




  The object moves with constant horizontal velocity vi directly towards the wall, colliding
  with it. Suppose that m1 > m2 . Ignore any vertical forces, and suppose the object does
  not spin or rotate. Assume that all collisions are elastic.
   (a) Derive an expression for the coefficient of restitution e ≡ vf /vi , where vi and vf are   [1]
       the initial and final speeds of the centre of mass of the object.
   (b) Show that after the collision, the masses m1 and m2 oscillate about their centre of        [2]
       mass in simple harmonic motion.
   (c) Find the angular frequency ω of oscillation and maximum distance X between the             [2]
       centres of masses, in terms of vi , m1 , m2 , and k.


    Solution:

      (a) Initially, both masses are moving to the right at speed vi . After the (elastic)
          collision, the mass m1 is moving at speed vi to the left while the mass m2 continues
          moving at speed vi to the right. The velocity of the CM is thus
                                         −m1 vi + m2 vi    m1 − m2
                                vCM =                   =−         vi .
                                          m1 + m2          m1 + m2
          The coefficient of restitution is thus
                                                   m1 − m2
                                             e=
                                                   m1 + m2

          1 - Correct answer

      (b) Let the positions of the masses in the CM frame be x1 (t) and x2 (t). We know that
          x1 (0) = x2 (0). The extension or compression of the rod depends on x2 (t) − x1 (t),
          therefore the force on mass 1 is

                                           F1 = −k(x1 − x2 )

          while the force on mass 2 is

                                       F2 = −k(x2 − x1 ) = −F1 .



                                         Page 3 of 22
                                                            Wednesday, 15 March 2023, 1:00pm–5:00pm


              We note that in this frame, the CM does not move (i.e. stays at zero), therefore

                                                  m1 x1 + m2 x2 = 0.

              Substituting x2 = − m
                                  m2 x1 into the above expressions for the forces, we get
                                    1


                                                                     
                                                            m1 + m2
                                              F1 = −k               x1 ,
                                                              m2

              which shows that the motion of x1 is simple harmonic, and thus the motion of
              x2 is simple harmonic as well (since it is scaled in the opposite direction by a
              constant factor).
              1 - Using CM frame
              1 - Argument using forces on masses

         (c) Using F1 = m1 a1 , we get
                                                            m1 + m2
                                                 a1 = −k            x1 .
                                                             m1 m2
              Therefore, the angular frequency of oscillation is
                                                 s
                                                   k(m1 + m2 )
                                            ω=                   .
                                                       m1 m2

              Consider relative velocities of m1 and m2 . Just after the collision, the relative
              velocity is V = 2vi since the outer shell moves to the left and the inner ball is still
              moving to the right. This is unchanged in the CM frame (initial velocity of m1 is
                2m2                                                       2m1
              m1 +m2 vi to the left, while the initial velocity of m2 is m1 +m2 vi to the right).
              The maximum distance X between x1 and x2 is given by the amplitude of oscil-
              lation:                            r
                                         V           m1 m2
                                    X=     = 2vi               .
                                         ω         k(m1 + m2 )

              1 - Angular frequency of oscillation
              1 - Amplitude of oscillation


                                                                                                    Q1 total: 5


2. This question is about thermionic emission. Consider two very large parallel plates, each of
   area A, separated by a distance d. Electrons are emitted from rest from the hot cathode at
   potential V = 0, and accelerated across a gap to the anode at potential V = V0 as shown
   in the figure.
     The moving electrons, termed as space charge, build up to the point where the electric field
     at the surface of the cathode is zero, with a steady current I flowing between the plates.
     Suppose the plates are large compared to the separation between them (i.e. A ≫ d2 ).
     Defining x to be the distance from the cathode, the charge density1 ρ and speed of moving
     electrons v are both functions of x. Denote the charge and mass of an electron to be −q
     and m respectively.
 1
     To be clear, we mean the charge density “per unit volume”.



                                                Page 4 of 22
                                               Wednesday, 15 March 2023, 1:00pm–5:00pm




(a) Find the relationship between the potential V and the speed v at distance x from the      [1]
    cathode.
(b) At steady state, the current I is independent of x. Show that V obeys the following       [3]
    differential equation as a function of x:

                                   d2 V
                                               r
                                             I   m −1
                                       2
                                         +         V 2 = 0.
                                    dx     ε0 A 2q

(c) Hence find the potential V as a function of x, in terms of I, m, A, q, and other funda-   [3]
    mental constants.
(d) Find the relationship between the steady current I and the applied potential difference   [2]
    V0 , in terms of the geometry of the plates and fundamental constants.


 Solution: Adapted from Problem 2.48 in [1].

   (a) Using the conservation of energy, we have
                                              1
                                          qV = mv 2
                                              2
       Therefore,                              r
                                                   2qV
                                          v=           .
                                                    m
       1 - Correct answer

  (b) The current is
                                        dQ      dx
                                   I=      = Aρ    = Aρv.
                                        dt      dt
       Gauss’ law gives
                              d2 V
                                                           r
                                   ρ    1 I      I              m
                             − 2 =    =       =                    .
                              dx   ε0   ε0 Av   ε0 A           2qV

       1 - Expressing I = Aρv
       1 - Use of Gauss’ law
       1 - Correct answer through proper algebraic manipulation




                                    Page 5 of 22
                                                          Wednesday, 15 March 2023, 1:00pm–5:00pm


                                                                                   ′
      (c) Solve the differential equation, noting that V ′′ = V ′ dV
                                                                  dV :

                                                ′               r
                                                                      m −1
                                         ′ dV   I
                                       V    =−                           V 2.
                                         dV    ε0 A                   2q

          Integrating both sides,
                                                           r
                                     1 ′2    2I                m 1
                                       V =−                       V 2 + const.
                                     2      ε0 A               2q

          Since the cathode is at zero potential and field at cathode is zero due to the space
          charge, we have V (0) = V ′ (0) = 0, so the constant from integration is zero:
                                                       r
                                           ′2       4I   m 1
                                          V =−              V2
                                                   ε0 A 2q

          Thus,                                     s             r
                                         dV                 4I         m 1
                                            =            −                V4
                                         dx                ε0 A        2q
          Integrating once more,
                                                s            r
                                     4 3               4I         m
                                       V4 =         −                x + const.
                                     3                ε0 A        2q

          But V (0) = 0, so this constant is also zero. Rearranging, we obtain
                                                                      31
                                                         81I 2 m
                                                    
                                                                             4
                                         V =                                x3 .
                                                        32ε20 A2 q

          1 - Correct solving of ODE
          1 - Correct boundary conditions
          1 - Correct answer

      (d) Setting x = d and V = V0 , we get
                                                                      13
                                                         81I 2 m
                                                    
                                                                              4
                                         V0 =                               d3 .
                                                        32ε20 A2 q

          Rearranging, we obtain the Child–Langmuir law
                                           √      r
                                          4 2 ε0 A q 32
                                      I=              V .
                                            9 d2    m 0

          1 - Substitution of d and V0
          1 - Correct answer


                                                                                              Q2 total: 9


3. A stationary observer, Alice, observes a proton P1 in a magnetic field with flux density



                                         Page 6 of 22
                                               Wednesday, 15 March 2023, 1:00pm–5:00pm

Bz = 1.0 T in the +z-direction. P1 moves in a circle of radius R1 in the xy-plane with
speed v = 3.00 × 105 m/s.
(a) State whether P1 moves clockwise or anticlockwise (when looking down at the proton).         [1]
(b) Find the radius R1 of the circle, and find the time the proton takes to complete one         [2]
    circle.
Relative to Alice, another observer Bob moves with constant velocity vB = 1.00 × 104 m/s
in the +x-direction.
(c) Describe the motion of P1 in Bob’s frame with a sketch. Remember to indicate the             [1]
    orientation of your axes.
Another proton P2 is at rest in Alice’s frame, at a distance of 1.00 cm from the centre of
the circle described above, which we assume is sufficiently far away that the interaction
between the two protons can be neglected.
(d) Describe the motion of P2 in Bob’s frame with a sketch. Remember to indicate the             [1]
    orientation of your axes.
(e) Bob attributes the motion of P1 and P2 to electromagnetic fields in his frame. What          [2]
    static electric and magnetic fields could result in the motion of both protons as observed
    by him?
Another observer Carol has a stationary position in Alice’s frame and sees P1 as stationary.
How can this be?
(f) Describe the motion of P2 in Carol’s frame with a sketch.                                    [1]
(g) Carol attributes the motion of P2 to electromagnetic fields in her frame. What static        [2]
    electric and magnetic fields could result in the motion of both protons as observed by
    her?


 Solution:

   (a) The magnetic force F = qv × B, and since the force has to point towards the
       centre of the circle, the particle moves in the clockwise direction.
       1 - Correct direction
   (b) The centripetal force is equal to the magnetic force:
                                         mv 2
                                              = qvBz
                                          R1
                                        mv
                                   R1 =      = 3.13 × 10−3 m
                                        qBz
       The time taken is
                                         2πR1
                                   T =        = 6.55 × 10−8 s.
                                           v
       1 - Correct radius
       1 - Correct period
   (c) The motion of P1 is described by a circle whose centre is constantly shifting left
       at a speed of 1.00 × 104 m/s. In the time that the proton makes one round, the
       centre has shifted left by
                         x = (1.00 × 104 )(6.55 × 10−8 ) = 6.55 × 10−4 m

       1 - Correct depiction of motion



                                      Page 7 of 22
                                                  Wednesday, 15 March 2023, 1:00pm–5:00pm


      (d) P2 moves left with a constant speed of 1.00 × 104 m/s.
          1 - Correct depiction of motion

      (e) Suppose there is an electric field E and a magnetic field B experienced by both
          protons. Then the electromagnetic force acting on proton P2 is equal to

                                            F = q(E + v × B)

          which must be zero since it is moving at constant speed. If we assume that B
          from earlier is unmodified, then we need E = −v × B = −1.00 × 104 V/m ŷ.
          It is instructive to think about how this electric field E causes the circular path
          for P1 to drift.
          1 - Balancing Lorentz force
          1 - Correct electric field

      (f) Carol is stationary in Alice’s frame and sees P1 as stationary, therefore she must
          be at the centre of the circle and rotating (clockwise) at the same angular velocity
          as P1 . Carol thus sees P2 rotating anticlockwise with a period of 6.56 × 10−8 s.
          1 - Correct depiction of motion

      (g) There must be no electric field in Carol’s frame, since P1 is at rest. The magnetic
          field causes the motion of P2 , therefore it must be in the −z-direction with flux
          density
                                        mv      mω     2πm
                                  B=         =      =       = 1.0 T.
                                         qR      q      qT
          1 - Zero electric field and magnetic field in the −z-direction
          1 - Correct magnetic field strength


                                                                                            Q3 total: 10


4. The energy transferred by an electromagnetic wave per unit time per unit surface area is
   given by the Poynting vector
                                               1
                                          S=      E × B,
                                               µ0
   where the direction of the vector S is the direction of energy transfer.
   (a) Show the volume density of the linear momentum of an electromagnetic wave is                   [2]
                                                  1
                                          pV =              E × B,
                                                 c2 µ   0

       where c is the speed of light.
  We now consider a “paradox” regarding the conservation of angular momentum. Two long,
  coaxial cylindrical shells, shown in the figure, both have length l. The inner one has radius
  a and electric charge +Q uniformly distributed along its surface, while the outer one has
  radius b > a and electric charge −Q uniformly distributed over its surface.
  The cylinders are made of the same material, having mass per unit area equal to σ. Between
  them, there is another long solenoid with radius R (a < R < b) that is also coaxial with the
  two cylinders. The solenoid has n turns per unit length and carries an electric current I.


                                        Page 8 of 22
                                                    Wednesday, 15 March 2023, 1:00pm–5:00pm




The solenoid is held fixed in space, but the cylindrical shells can freely and independently
rotate around their common axis. Initially, all parts of the system are at rest. When the
current in the solenoid is gradually reduced to zero, the cylinders begin to rotate.
(b) Find the final angular velocities of each of the cylinders, giving their magnitude and     [4]
    orientation.
(c) Since no external force acts on the system, the net angular momentum should be             [3]
    conserved. Where did the extra angular momentum come from? Support your answer
    with equations.


 Solution: Adapted from Romanian Masters of Physics 2017 T1.

   (a) The momentum of the photons in the electromagnetic wave is

                                                   δE   SδA δt
                                       δp =           =
                                                    c     c
       where c is the speed of light. Therefore,
                                       δp   SδA δt   S    S
                                pV =      =        = δl = 2 .
                                       δV   cδA δl  c δt c

       In vector form,
                                         1
                                 pV =              E × B = ε0 E × B.
                                        c2 µ   0

       1 - Expression for momentum of a photon
       1 - Correct interpretation of relationship to Poynting vector

   (b) The current through the solenoid produces inside it a magnetic field given by

                                     B = µ0 nIẑ,          r < R.




                                     Page 9 of 22
                                          Wednesday, 15 March 2023, 1:00pm–5:00pm


When the current decreases, the magnetic field strength decreases, inducing an
electric field in accordance with Faraday’s law:
                                              d
                              E · 2πrϕ̂ = −      (B · A).
                                              dt

If r < R, then A = πr2 ẑ, and
                                       1    dI
                                  E = − µ0 n rϕ̂
                                       2    dt

If r > R, then A = πR2 ẑ, and
                                      1     dI R2
                                 E = − µ0 n       ϕ̂.
                                      2     dt r
The torque on the inner cylinder is
                            1       dI          1       dI
              τ = r × QE = − µ0 nQa2 r̂ × ϕ̂ = − µ0 nQa2 ẑ.
                            2       dt          2       dt
The final angular momentum of the inner cylinder is
                             1              1
                      ∆La = − µ0 nQa2 ∆Iẑ = µ0 nQa2 Iẑ
                             2              2
The moment of inertia of the cylinder is equal to

                                 J = ma a2 = 2πlσa3

and the final angular velocity is thus
                                            µ0 nQI
                                     ωa =
                                            4πlσa
in the counterclockwise direction.
The torque on the outer cylinder is
                                        1       dI
                         τ = r × (−Q)E = µ0 nQR2 .
                                        2       dt
The increase in angular momentum is
                          1                1
                      ∆L = µ0 nQR2 ∆Iẑ = − µ0 nQR2 Iẑ.
                          2                2
We know that the moment of inertia of the outer cylinder is

                                 J = mb b2 = 2πlσb3 ,

therefore the final angular velocity is
                                          µ0 nQIR2
                                   ωb =
                                           4πlσb3
clockwise.
1 - Correct usage of Faraday’s Law
1 - Correct torque on inner and outer cylinder
1 - Correct angular momentum on inner and outer cylinder
1 - Correct angular velocity and direction of inner and outer cylinder



                              Page 10 of 22
                                                   Wednesday, 15 March 2023, 1:00pm–5:00pm


      (c) In the region between the cylinders, there is an electric field, given by Gauss’ law

                                                     Q
                                             E=            r̂.
                                                   2πε0 lr
          When there is a current through the solenoid, there is a magnetic field inside it,
          so the linear momentum density of the fields is
                                                Q                    µ0 nIQ
                            p V = ε0 E × B =        r̂ × µ0 nIẑ = −        ϕ̂.
                                               2πlr                   2πlr
          The angular momentum density of the fields is
                                                µ0 nIQ             µ0 nIQ
                             ℓem = r × pV = −          r̂ × ϕ̂ = −        ẑ.
                                                 2πl                2πl
          The total angular momentum of the fields is
                                                       1
                           Lem = ℓem · π(R2 − a2 )l = − µ0 nIQ(R2 − a2 )ẑ.
                                                       2
          We see that from the previous part,

                                            Lem = La + Lb

          which means that the field angular momentum is totally transformed into me-
          chanical angular momentum of the cylinders.
          1 - Correct application of Gauss’ Law to find linear momentum density
          1 - Correct angular momentum density
          1 - Correct conclusion that EM field angular momentum is transformed into me-
          chanical angular momentum


                                                                                             Q4 total: 9


5. Three circuit elements are connected to a central junction in a “star” shape, as shown in
   the figure. One is a resistor, one is an inductor, and one is a capacitor, although it is not
   known which is which.




   A physicist connects an AC source with fixed voltage Vs across a pair of terminals, at


                                        Page 11 of 22
                                                Wednesday, 15 March 2023, 1:00pm–5:00pm

the same time connecting an AC voltmeter to one of the terminals (the other end of the
voltmeter is always fixed at the central junction). She obtains the following readings:

         AC source terminals     AC voltmeter terminal        Voltmeter reading
               1&2                        1                        20.8 V
               1&2                        2                        15.6 V
               1&3                        1                        24.0 V
               1&3                        3                        10.0 V
               2&3                        2                        58.5 V
               2&3                        3                        32.5 V

(a) Determine the value of Vs (i.e. the reading on the AC voltmeter when it is hooked up       [3]
    directly to the AC source).
(b) Determine the possible identities of Z1 , Z2 , Z3 (i.e. which is the resistor, inductor,   [1]
    capacitor).
(c) Now, an AC ammeter is also connected in series with the AC source. Find the ratio of       [3]
    currents I12 : I13 : I23 , where Iij denotes the value on the AC ammeter when the AC
    source is connected to terminals i and j.


 Solution:

   (a) The impedances of resistors, inductors and capacitors are positive real, positive
       imaginary and negative imaginary numbers respectively. Suppose the resistor
       has impedance R, the capacitor has impedance −jXC while the inductor has
       impedance +jXL .
       Consider the following cases:

          • R and L in series. Then the voltages are
                                                          R
                                       |VR | = IR = q              Vs
                                                        R2 + XL2

                                                       XL
                                       |VL | = IXL = q         Vs
                                                      R2 + XL2
             The source voltage is thus the root of the sum of squares of the individual
             voltages.
          • R and C in series. The voltages are
                                                       R
                                       |VR | = IR = q         Vs
                                                     R2 + XC2

                                                    XC
                                   |VC | = −IXC = q         Vs
                                                   R2 + XC2
             The source voltage is thus the root of the sum of squares of the individual
             voltages.




                                       Page 12 of 22
                                                     Wednesday, 15 March 2023, 1:00pm–5:00pm


             • L and C in series. The voltages are
                                                             XL
                                         |VL | = IXL =               Vs
                                                          |XL − XC |

                                                             XC
                                         |VC | = IXC =               Vs
                                                          |XL − XC |
               The source voltage is thus the difference in voltages.

          We see that
                        p               p
                         20.82 + 15.62 = 24.02 + 10.02 = 58.5 − 32.5 = 26.0

          therefore, the source voltage is 26.0 V.
          1 - Writing down the correct impedances
          1 - Recognising that source voltage is either square root of sum of squares or
          difference of component voltages
          1 - Correct final answer

      (b) We can conclude that Z1 is a resistor. However, Z2 and Z3 cannot be distinguished,
          since we may flip the signs of the imaginary part to get either combination.
          1 - Correct analysis

      (c) The ratio of impedances is equal to the ratio of voltages. Therefore,

                                           |Z1 | : |Z2 | = 4 : 3
                                           |Z1 | : |Z3 | = 12 : 5
                                           |Z2 | : |Z3 | = 9 : 5

          We thus conclude that

                                     |Z1 | : |Z2 | : |Z3 | = 12 : 9 : 5.

          The ratio of impedances across terminals is

                                   |Z12 | : |Z13 | : |Z23 | = 15 : 13 : 4.

          The ratio of current is thus
                                                         1   1 1
                                     I12 : I23 : I13 =     :  : .
                                                         15 13 4

          1 - Correct ratio of impedances of elements
          1 - Correct ratio of impedances across terminals
          1 - Correct ratio of current


                                                                                           Q5 total: 7


6. This question is about deriving thermodynamic identities.
   (a) Consider a mole of ideal gas at pressure P , volume V , and temperature T . Denote the       [2]



                                         Page 13 of 22
                                                   Wednesday, 15 March 2023, 1:00pm–5:00pm

    heat capacity at constant volume as CV . Show that the heat capacity C is given by
                                                         R
                                         C = CV +           dP
                                                                 .
                                                     1 + VP dV
(b) Consider two ideal gases A and B which are mixed. There are n1 moles of gas A and        [4]
    n2 moles of gas B, and the molar heat capacities at constant volume of gases A and
    B are cv1 and cv2 respectively. Find the adiabatic constant of the mixed gas.


 Solution:

  (a) Using the 1st Law of Thermodynamics,

                                      dQ   dU    dV          dV
                               C=        =    +P    = CV + P    .
                                      dT   dT    dT          dT
      The ideal gas law states that P V = RT , which means that

                                         R dT = P dV + V dP.

      Therefore,
                                   dV       P dV          R
                               P      =R             =           .
                                   dT    P dV + V dP   1 + VP dV
                                                              dP


      1 - 1st Law of Thermodynamics
      1 - Implicitly differentiating Ideal Gas Equation and obtaining final result

  (b) Using the first law of thermodynamics and the ideal gas equation,

                                   dQ   dU    dV       dT   nR
                          dS =        =    +P    = ncv    +    dV
                                    T    T     T       T    V
      Integrating both sides,
                                                    Tf        Vf
                                      ∆S = ncv ln      + nR ln .
                                                    Ti        Vi
      In an adiabatic process, there is no change in heat, so the change in entropy is
      zero. For the mixture of two gases, we thus have
                               Tf           Vf             Tf           Vf
                   n1 cv1 ln      + n1 R ln    + n2 cv2 ln    + n2 R ln    = 0.
                               Ti           Vi             Ti           Vi

      This can be rewritten as
                                      Tf                     Vf                 Vi
              (n1 cv1 + n2 cv2 ) ln      = −(n1 R + n2 R) ln    = (n1 + n2 )R ln ,
                                      Ti                     Vi                 Vf

      which is equivalent to

                                                          (n1 + n2 )R
                               Ti Vig = Tf Vfg ,    g=                   .
                                                         n1 cv1 + n2 cv2
      An adiabatic process is characterised by an adiabatic constant γ such that

                                             P V γ = const.



                                        Page 14 of 22
                                                  Wednesday, 15 March 2023, 1:00pm–5:00pm


          Using P = nRT /V for the mixture, the adiabatic equation can also be written as

                                           T V γ−1 = const.

          Therefore,
                                                  (n1 + n2 )R
                                    γ =g+1=                      + 1.
                                                 n1 cv1 + n2 cv2
          1 - Writing 1st law of thermodynamics in terms of infinitesimal entropy change
          1 - Integrating correctly to obtain total entropy change
          1 - Relating to the adiabatic constant
          1 - Final expression for adiabatic constant


                                                                                             Q6 total: 6


7. Weather balloons float at high altitudes and need to withstand very low temperatures and
   pressures. When inflated, the effective radial tension on the surface of a spherical balloon
   of radius r is given by                                  
                                                           1
                                  FT = 16πr0 κRT λ − 5 ,
                                                          λ
  where r0 is the radius of the balloon when there is no tension, λ ≡ r/r0 is the size inflation
  ratio, κ is a constant with dimensions of inverse area, R is the molar gas constant, and T
  is the temperature of the air.
   (a) Find the pressure difference ∆p between the air inside and outside the balloon, giving         [2]
       your answer in terms of λ, T, r0 and other constants.
   (b) Determine the maximum pressure difference ∆pm as a function of T and the radius rm             [3]
       in terms of r0 that achieves this value.
  The constant κ can be determined from the amount of gas required to inflate a balloon.
  Suppose at ground level, the temperature is T0 = 290 K and the pressure is p0 = 1.01 ×
  105 Pa.
  An unstretched balloon of radius r0 contains ni = 10 mol of helium. After the balloon is
  pumped with helium so that it contains a total of nf = 40 mol of helium, the balloon has a
  radius r = 1.5r0 .
   (c) Determine the value of κ for this balloon.                                                     [5]


    Solution: Adapted from IPhO 2004 T2.

      (a) The work needed to increase the radius from r to r + dr when the pressure differ-
          ence is ∆p is
                                        dW = ∆p · 4πr2 dr.
          The increase in elastic energy for the same change in r is

                                                               r5
                                                                 
                                                          r
                               dU = FT dr = 16πr0 κRT       − 05 dr.
                                                          r0 r




                                        Page 15 of 22
                                                 Wednesday, 15 March 2023, 1:00pm–5:00pm


    Equating the two,
                                               r05
                                                     
                                           r
                           16πr0 κRT      r0 − r 5
                                                                                  
                                                            4κRT           1   1
                    ∆p =                                  =                  − 7       .
                                      4πr2                    r0           λ λ

    1 - Increase in elastic energy
    1 - Correct ∆p
    Alternative approach by using force on an infinitesimal section to get ∆p also
    acceptable

(b) The maximum value can be found by differentiating with respect to λ:
                                                     
                          d(∆p)    4κRT       1     7
                                =           − 2+ 8 .
                            dλ       r0       λ     λ
    Therefore,
                                                      1
                                               λ = 76
                                                      1
                                           rm = 7 6 r0
                                                24κRT
                                         ∆pm =      1
                                                 7 6 r0
    1 - Differentiating to find stationary values
    1 - Correct rm
    1 - Correct ∆pm

(c) Using the ideal gas equation,
                                           pi Vi = ni RTi
                                           pf Vf = nf RTf
    We know that Ti = Tf , and since Vf = λ3 Vi where λ = 1.5, we get
                                                   nf
                                           pf =          pi .
                                                  ni λ 3
    But we also know that
                                                                             
                                              4κRT                    1   1
                          pf = pi + ∆p = pi +                           − 7
                                                r0                    λ λ
    Therefore,                                                      
                            4κRT         1   1                 nf
                                           − 7        =             − 1 pi
                              r0         λ λ                  ni λ3
    This means that                               −1                   
                               r0          1   1                 nf
                           κ=                − 7                       − 1 pi
                              4RT          λ λ                  ni λ 3
    Our last task is to find the value of r0 . This can be found using the ideal gas
    equation for the non-inflated balloon:
                                           4
                                       p0 · πr03 = n0 RT0
                                           3
                                            r0 = 0.38 m.



                                     Page 16 of 22
                                                    Wednesday, 15 March 2023, 1:00pm–5:00pm


           Substituting in the numbers,
                                               κ = 1.2 m−2 .

           1 - Ideal gas equation and realising that volume scales with λ3
           1 - Equating expressions for pressure
           1 - Expression for κ
           1 - Expression for r0 using non-inflated balloon
           1 - Value of κ


                                                                                            Q7 total: 10


8. This question is on pulse spreading in fibre optics.
   Consider a cylindrical optical fibre in the region 0 ≤ r ≤ a for z > 0, see diagram. There is
   a light source at r = z = 0 that emits monochromatic waves. The refractive index n(r) is
   a function of the radial distance from the cylindrical axis.
   Along the path of a ray, if the refractive index at some point is n and the angle the ray
   makes with the horizontal (z-axis) is θ, we may use Snell’s Law to conclude that

                                             n cos θ = β̃

   is a constant at all points along the path of the ray.




   (a) Show that the path that a ray takes satisfies                                                  [2]

                                          d2 r    1 d(n(r)2 )
                                               =              .
                                          dz 2   2β̃ 2 dr

        This is known as the ray equation.
   (b) The fibre is characterised by the following refractive index distribution:
                                                  r 2 
                                  2    2
                              n(r) = n1 1 − 2∆             ,    0≤r≤a
                                                    a
        where ∆ ≪ 1 and n1 are constants.


                                         Page 17 of 22
                                                        Wednesday, 15 March 2023, 1:00pm–5:00pm

    The refractive index of the medium outside the optical fibre is uniform, with the value
    n2 given by
                             n(r)2 = n22 = n21 (1 − 2∆),   r > a.
    The initial angle of projection θ1 has to be small enough for the ray to return to the
    z-axis.
       i. Assuming this is the case, find the equation of the path r = r(z) taken by the ray       [4]
          of light, as well as the position z1 of the first instance that the ray returns to the
          z-axis. Express your answers in terms of n1 , ∆, a, and β̃.
      ii. If θ1 ≪ 1 such that we make the approximation cos θ1 ≈ 1, state the value of z1 .        [1]
     iii. Find the maximum possible value of θ1 , in terms of ∆.                                   [1]
(c) One of the important characteristics of a waveguide is pulse dispersion, the temporal          [2]
    spreading of a pulse of light launched into the waveguide. This is due to the difference
    in time taken by different rays. To calculate this dispersion, we calculate the time
    taken by a ray to traverse a given length of the waveguide.
    Define the maximum radial distance the ray reaches from the z-axis to be rt . Show
    that the time taken for the light ray to first reach a distance rt from the z-axis is given
    by
                                        1 rt       n(r)2
                                          Z
                                               q              dr
                                        c 0
                                                 n(r)2 − β̃ 2
    where c is the speed of light in vacuum.
(d) For the fibre optic medium described in (b):
      i. Find the time taken for a light ray to first reach a distance rt from the z-axis,         [3]
         expressing your answer in terms of a, n1 , β̃, ∆, and c.
     ii. Calculate the difference in the maximum and minimum times for rays to travel a            [3]
         distance z along the z-axis, in terms of n1 , ∆, and c. This time difference τ can
         be taken to be the pulse dispersion time.
(e) To appreciate the small dispersion given in the previous part, let us consider the pulse       [3]
    dispersion in a cylindrical fibre optic medium with the same physical dimensions but
    with homogeneous refractive index n1 , while the outside is still kept at refractive index
    n2 satisfying n22 = n21 (1 − 2∆).
    Find the pulse dispersion time over a distance z along the z-axis for such a setup, in
    terms of n1 , ∆, and c.


 Solution: For a comprehensive discussion on this problem, see Chapter 4 of [2].

   (a) Writing ds2 = dr2 + dz 2 and using cos θ = dz
                                                  ds , we obtain

                                              ds     1    n
                                                 =       = .
                                              dz   cos θ  β̃
       Therefore,
                                                   2
                                                            n(r)2
                                          
                                              dr
                                                        =         − 1.
                                              dz             β̃ 2
       Differentiating both sides with respect to z,

                                          dr d2 r    1 d(n2 ) dr
                                      2           =              .
                                          dz dz 2   β̃ 2 dr dz



                                      Page 18 of 22
                                                 Wednesday, 15 March 2023, 1:00pm–5:00pm


      Rearranging,
                                         d2 r    1 d(n2 )
                                              =           .
                                         dz 2   2β̃ 2 dr

      1 - Writing down ds/dz in terms of n and β̃
      1 - Obtaining the final expression

(b)    (i) Substituting into the ray equation,

                             d2 r                         r 2      2∆n21
                                                 
                                     1 d 2
                                  =          n 1  1 − 2∆          = −         r.
                             dz 2   2β̃ 2 dr               a          a2 β̃ 2

          The general solution is given by

                                       r(z) = A sin Γz + B cos Γz
                        √
          where Γ = n1β̃a2∆ .
          Since r(0) = 0, therefore B = 0, and

                                             r(z) = A sin Γz.

          If the ray makes an angle θ1 with the z-axis at z = 0, then

                                               tan θ1 = AΓ
                                                                             !2  21
                                β̃a tan θ1  a sin θ1   a                β̃
                        A=          √      = √       =√    1−                    
                                 n1 2∆          2∆      2∆               n1

          where we have used the fact that

                                              β̃ = n1 cos θ1 .

          Therefore,
                                                       !2  21         √    !
                                    a             β̃                 n1 2∆
                            r(z) = √     1−                 sin            z .
                                     2∆            n1                   aβ̃

          The first time the ray returns to the z-axis, we have
                                            √
                                          n1 2∆
                                                 z1 = π
                                            aβ̃

          Therefore,
                                                      πaβ̃
                                              z1 =     √
                                                     n1 2∆
          1 - Correctly simplifying the ray equation
          1 - Recognising that the path is is sinusoidal
          1 - Correct boundary condition
          1 - Correct position along z-axis



                                     Page 19 of 22
                                                        Wednesday, 15 March 2023, 1:00pm–5:00pm



      (ii) Since β̃ ≈ n1 ,
                                                          πa
                                                    z1 = √ .
                                                           2∆
           This is independent of the launch angle (correspondingly β̃)!
           1 - Correct answer
      (iii) The maximum angle can be found as follows: Suppose at initial angle θ1 the
            wave reaches distance a from the z-axis. Then

                                             n1 cos θ1 = β̃ = n2
                                                  √
                                        cos θ1 = 1 − 2∆ ≈ 1 − ∆
           Since cos θ ≈ 1 − 21 θ2 , we get
                                                           √
                                                    θ1 ≈       2∆.

           1 - Correct critical angle

(c) The time taken to travel along an arc length ds is given by

                                                   ds   n(r)
                                          dt =        =      ds.
                                                   v     c
      We know that                  s             2
                                              dz                n(r)
                             ds =   1+                  dr = q            dr.
                                              dr                  2     2
                                                              n(r) − β̃
      We thus obtain the required integral.
      1 - Correct expression for dt
      1 - Correct usage of ray equation

(d)    (i) We know that n(rt ) = β̃, therefore
                                                    r 2 
                                                        t
                                       n21 1 − 2∆             = β̃ 2 .
                                                       a
                                                  a
                                                       q
                                        rt = √            n21 − β̃ 2
                                              n1 2∆
           Therefore,

                        1 rt       n2 [1 − 2∆(r/a)2 ]
                          Z
                    t=         q 1                            dr
                        c 0
                                 n21 [1 − 2∆(r/a)2 ] − β̃ 2
                          " √                                                        #
                        1 n1 2∆ rt                                2 a Z rt
                                      Z q
                                                               β̃             dr
                      =                      rt2 − r2 dr + √               p
                        c      a       0                    n1 2∆ 0         rt2 − r2
                            πa
                      =      √ (n21 + β̃ 2 ).
                        4cn1 2∆
           1 - Expressing rt in terms of known constants
           1 - Performing integration correctly
           1 - Correct final answer



                                        Page 20 of 22
                                             Wednesday, 15 March 2023, 1:00pm–5:00pm


     (ii) Since the path is sinusoidal, we might as well talk in terms of periods. Letting
          zp and τp be the distance travelled and time taken over one period of the
          sinusoidal path,
                                             2π      2πaβ̃
                                        zp =    = √ .
                                              Γ    n1 2∆
                                              πa
                                      τp =     √ (n21 + β̃ 2 )
                                           cn1 2∆
         Thus, if τ (z) represents the time taken by the ray to traverse the distance z,
         then
                                                          n21
                                                             
                                    τ (z)   τp   1
                                          =    =     β̃ +       .
                                      z     zp   2c       β̃
         Since n2 < β̃ < n1 for guided rays, a ray with β̃ = n1 (i.e. axial) will take
         minimum time
                                                  n1 z
                                       τmin (z) =
                                                   c
         while a ray with β̃ = n2 takes maximum time

                                                       n21
                                                          
                                             1
                                  τmax (z) =      n2 +       z.
                                             2c        n2

         The difference is thus
                                               1                  n1 2
                         τ = τmax − τmin =        (n1 − n2 )2 z ≈    ∆ z.
                                             2cn2                 2c

         1 - Correct τmin
         1 - Correct τmax
         1 - Correct τ

(e) The maximum angle above the horizontal is cos−1 nn21 . The shortest path taken has
    length z and the light ray travels at speed c/n1 , therefore it takes time t = n1 z/c
    to reach.
    The horizontal distance covered by the light ray in the longest path is still z, but
    the horizontal velocity is now nc1 cos θ = cn
                                                n2
                                                  2
                                                    . Therefore,
                                                   1


                                               n21 z
                                          t=         .
                                               cn2
    The pulse dispersion is equal to

                              n21 z n1 z   n1                n1 ∆
                       ∆t =        −     =     (n1 − n2 )z ≈      z.
                              cn2    c     cn2                c

    1 - Correct minimum time
    1 - Correct maximum time
    1 - Correct pulse dispersion


                                                                                       Q8 total: 19



                                   Page 21 of 22
         Wednesday, 15 March 2023, 1:00pm–5:00pm




Page 22 of 22
