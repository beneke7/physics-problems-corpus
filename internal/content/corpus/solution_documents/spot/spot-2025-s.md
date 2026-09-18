---
id: solution-document-spot-2025-s
source: spot
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2025_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2025_S.pdf."
---

Wednesday, 19 February 2025, 1:00pm – 5:00pm




                    2025 Selection Test
for the International Physics Olympiad (IPhO), Asian Physics
Olympiad (APhO) and International Nuclear Science Olympiad
                            (INSO)

  a. This is a 4 hour test. Attempt all questions. The maximum total score is 80; marks
     allocated for each question part are indicated in square brackets.

 b. Check that there are a total of 34 printed pages (including this cover page). The last
    page contains a table of physical constants that you may refer to and use.

  c. Begin your answer for each question on a fresh sheet of paper, and present your working
     and answers clearly. Your answer sheets should be sorted according to the order of the
     questions.

 d. Write your name on the top right hand corner of every answer sheet you submit.

  e. You may use a standard (non-programmable) scientific calculator in accordance with the
     statutes of the International Physics Olympiad.

  f. No external materials may be brought into the examination room. No discussion is al-
     lowed. Any intentional breach of integrity may lead to disqualification.




   Question:     1      2      3      4      5       6     7      8      9     Total
   Points:       6      5      5      10     10      14    10     12     8      80
   Score:




                                      Page 1 of 34


                                              Wednesday, 19 February 2025, 1:00pm – 5:00pm

1. A wide river of uniform depth flows with a uniform constant speed u parallel to its banks.
   A boat is moving in the river with constant speed v, measured in the moving frame of the
   river.
  As the boat moves, a metal ball is dropped into the river with zero vertical velocity and
  the same horizontal velocity as the boat. The drag force law for the ball’s motion in water
  is unknown. When the ball reaches the bottom of the river, the horizontal distance it has
  travelled since its point of release is measured in the stationary frame of the river bank.
  We will now consider three different cases, each with the boat moving in a different direction.
  (Case 1) When the boat is moving downstream (its net motion is parallel to the river
  velocity), the distance measured is a.
  (Case 2) When the boat is moving upstream (its net motion is antiparallel to the river
  velocity), the distance measured is b.
  (Case 3) When the boat is moving such that its net motion in the stationary frame is
  perpendicular to the velocity of the river, the distance measured is c.
   (a) Is it necessary to know the drag force law to determine the trajectory of the ball in the    [1]
       frame of the river? Explain your answer. (Hint: Drawing a diagram may be helpful.)

         Solution: No. All three trajectories are identical in the frame of the river because
         the boat has the same velocity in that frame, so the ball has the same initial
         velocity in that frame.

   (b) With appropriate diagrams, find the ratio uv . Leave your answer in terms of a, b and        [5]
       c.

         Solution: As discussed before, we know that the trajectory of the ball in the rest
         frame of the water is identical. Thus, we also know that the horizontal displacement
         of the ball in all 3 cases is the same with respect to the water. The problem can
         be solved by considering the displacement of the starting position and that of the
         ball separately, in the frame of the moving water. The direction of the horizontal
         displacement of the ball is dependent on the direction of the velocity of the boat
         in the frame of the water.


                          l

                                                                            l
                               a                                        θ
                                             l
                          ut                 ut                   ut
                                                                                c
                                                  b


                      case 1             case 2                        case 3
         The red arrow shows the unknown displacement l of the ball in the frame of the
         water while the blue arrow shows the displacement of the starting position defined
         in the lab frame, ut. Note that in case 3, ut and c are not perpendicular because




                                        Page 2 of 34


                                           Wednesday, 19 February 2025, 1:00pm – 5:00pm


      the ball undergoes drag after it enters the river. We are able to form the following
      relationships:

                                   a = ut + l
                                   b = ut − l
                                  c = (ut)2 + l2 − 2utl cos θ
                                   2


      We can find θ with the condition that the net motion of the boat is perpendicular
      to the river motion. That gives us cos θ = uv .

                                                  v
                                   u θ

                                             vstat. frame
      Solving, we get:
                                        v     a2 − b2
                                          = 2
                                        u  a + b2 − 2c2




Marking Scheme:

          Part    Steps                                            Marks
          (a)     Answer with correct explanation                  A1
          (b)     Correct direction of boat in the stationary      M0.75
                  frame for the first and second case
                  Correct direction of boat in the stationary      M1
                  frame for the third case
                  Correct expression for a and b in terms of un-   M0.75
                  known quantities
                  Use of method of cosines to express c            M1
                  cos θ = uv or equivalent                         M0.5
                  Correct final answer                             A1




                                       Page 3 of 34


                                                Wednesday, 19 February 2025, 1:00pm – 5:00pm

2. A pendulum with an inextensible string of length ℓ and mass m is attached to a spring of
   zero natural length and stiffness k. The string and spring are fixed to two perpendicular
   walls at distances l from the corner, as shown in the figure.

                                                  ℓ

                                                           θ


                                   ℓ                    ℓ




   (a) At equilibrium, θ = θ0 . Find θ0 .                                                      [2]

         Solution: The fundamental simplification is that for a zero rest length spring, its
         force is simply given by F⃗ = −k⃗r, so we may directly resolve components to get:

                                              kℓ(1 − cos θ) = T cos θ
                                       kℓ(1 − sin θ) + mg = T sin θ

         Hence, we have:

                               kℓ(1 − cos θ) tan θ = kℓ(1 − sin θ) + mg
                                                                 mg
                                     tan θ − sin θ = 1 − sin θ +
                                                                 kℓ
                                               mg
         which simplifies to θ0 = tan−1 1 +          .
                                               kℓ

         Alternatively, many correct answers used an energy approach. The potential energy
         in the system is given by:
                              1
                           U = kℓ2 [(1 − cos θ)2 + (1 − sin θ)2 ] − mgℓ sin θ
                              2
                              1 2
                             = kℓ (3 − 2 cos θ − 2 sin θ) − mgℓ sin θ
                              2
         At the equilibrium angle, the potential energy is at a minimum.
                               dU
                                  = kℓ2 (sin θ − cos θ) − mgℓ cos θ = 0
                               dθ
                                                  kl2 + mgℓ
                                        tan θ0 =         2
                                                     kℓ mg
                                      θ0 = tan−1 1 +
                                                           kℓ


   (b) Find the angular frequency of small oscillations of the system about equilibrium. If    [3]
       required, leave your answer in terms of θ0 .




                                            Page 4 of 34


                                             Wednesday, 19 February 2025, 1:00pm – 5:00pm


      Solution: The energy approach leads most directly to the final answer. Consider
      the kinetic energy of the mass T = 21 ml2 θ̇2 . Then, differentiating the total energy,
      we obtain:
                         1            1
                     E = ml2 θ̇2 + kℓ2 (3 − 2 cos θ − 2 sin θ) − mgℓ sin θ
                         2            2
                     0 = ml2 θ̇θ̈ + kl2 (sin θ − cos θ)θ̇ − mgl cos θ θ̇

      We consider small displacements δθ about the equilibrium point θ0 .
                                 k                     g
                                   (sin θ − cos θ) + cos θ
                                θ̈ = −
                                m
                                                       l
                                   k                        g
                             =−       (cos θ0 + sin θ0 ) + sin θ0 δθ
                                   m                        l
                               r
                                 k                        g
                            ω=      (cos θ0 + sin θ0 ) + sin θ0
                                 m                        l




Marking Scheme:

          Part    Steps                                              Marks
          (a)     Correct force balance                              M1
                  Correct final answer                               A1
                  Correct energy expression                          M0.5
                  Correct differentiation, setting to zero           M0.5
                  Correct final answer                               A1
          (b)     Correct total energy                               M0.5
                  Differentiating
                       q          twice and evaluating at θ0         M1
                           ′′
                  ω = Uml(θ20 )                                      M0.5
                  Correct final answer                               A1




                                         Page 5 of 34


                                                 Wednesday, 19 February 2025, 1:00pm – 5:00pm

3. A continuous rigid helix of uniform density has mass m and radius R. Its axis is oriented
   vertically, and the vertical distance between each helix turn is H = πR. The helix is able
   to rotate freely about its vertical axis but remains translationally fixed in place. It does not
   undergo compression nor extension.
   A small bead of identical mass m is threaded onto the frictionless helix. It is released from
   rest at point A and allowed to slide downwards along the helix.



                                                A




                                           h



                                                            H
                                                B



   (a) Find the helix angle θ of the helix. The helix angle is the slope angle with respect to        [1]
       the horizontal, if the helix is unravelled.

          Solution: For every horizontal distance 2πR travelled along the helix, a vertical
          distance H is travelled. This gives us:
                                                         H      1
                                            tan θ =          =
                                                        2πR     2
                                                               1
                                                    θ = arctan
                                                               2


   (b) When the ball passes point B, located a vertical distance h directly below A, determine        [4]
       the angular velocity of the helix. If required, leave your answer in terms of θ.

          Solution: As the ball slides down the helix, it acquires angular momentum about
          the helix axis. Since the only external force on this system is gravity, which exerts
          no torque about the helix axis, the total angular momentum of the system is
          conserved at zero. The helix must thus be rotating in the opposite direction as the
          translational velocity of the ball.
          Let the magnitude of the angular velocity of the helix be ω, and let the velocity of
          the ball in the frame of the helix be v ′ . The components of the ball velocity in the
          lab frame in the horizontal and vertical directions are:
                                            v∥ = v ′ cos θ − ωR
                                           v⊥ = v ′ sin θ
          Applying conservation of angular momentum, we have:
                                          mv∥ R − mR2 ω = 0
                                               v ′ cos θ − ωR = ωR



                                          Page 6 of 34


                                          Wednesday, 19 February 2025, 1:00pm – 5:00pm


      Applying conservation of energy, we have:
                               1            2    1
                         mgh = m(v∥2 + v⊥     ) + mR2 ω 2
                               2                 2
                         2gh = (v ′ cos θ − ωR)2 + (v ′ sin θ)2 + R2 ω 2

      Solving these two equations simultaneously for v ′ and ω, we obtain:
                                        √
                                          gh    cos θ
                                    ω=       p
                                         R     1 + sin2 θ




Marking Scheme:

          Part    Steps                                             Marks
          (a)     Correct final answer                              A1
          (b)     Noticing that the equations for angular mo-       M0.5
                  mentum and energy must be written in terms
                  of v ′ (or equivalent)
                  Correct decomposition of ball velocities in       M0.5
                  horizontal and vertical directions in terms of
                  v ′ and ω
                  Noticing that conservation of angular momen-      M0.5
                  tum may be applied
                  Correct application of conservation of angular    M0.5
                  momentum
                  Noticing that conservation of energy may be       M0.5
                  applied in the rotating frame
                  Correct application of conservation of energy     M0.5
                  Correct final answer                              A1




                                     Page 7 of 34


                                              Wednesday, 19 February 2025, 1:00pm – 5:00pm

4. Part A: Scaling Laws in a Column
  Consider a solid cylindrical column of diameter d and height h supporting a sphere of
  diameter D on top. Assume that D ≫ d, such that the contact area between the sphere
  and column is effectively the cross-sectional area of the column.
   (a) Suppose the diameter of the column is just sufficient to withstand the compressive load   [2]
       of the sphere. How should d scale with D, i.e. what should be the exponent α such
       that d ∝ Dα ? (Hint: The maximum stress that the solid column can withstand is a
       constant. Assume even stress across the contact area.)

         Solution: We have the weight of the sphere W ∝ D3 , and the area A in contact
         with the column is ∝ d2 . Therefore, the stress is

                                                W  D3
                                           σ=     ∝ 2
                                                A   d

         Since the maximum σ is a constant, we have d ∝ D3/2 .

  Another possible mode of structural failure is buckling. According to the Euler-Bernoulli
  beam theory, the deflection w of a beam is related to its bending moment M by

                                                  d2 w
                                     M (x) = EI
                                                  dx2
  where E is the Young’s modulus of the material (a constant), and I = r2 dA is the second
                                                                      R

  moment of area about its central axis (analogous to the moment of inertia, but involving
  the cross-sectional area dA instead of the mass dm).




  For example, in the figure above, a horizontal load P is applied inwards to both ends of
  a beam, causing deflections w(x). The horizontal load causes a bending moment M (x) =
  P w(x). Above a critical load Pcrit , the beam will undergo buckling.
   (b) Consider the sphere-column system introduced in part (a). Given that h ∝ D, how           [3]
       should d scale with D in order to prevent buckling?

         Solution: We know that M = P w, so
                                            d2 w
                                         EI       + Pw = 0
                                             dx2
         The general solution to this equation is
                                          r       !        r      !
                                             P               P
                              w = A sin         x + B cos       x
                                             EI              EI
                                                                              q
                                                                                  P
         Applying the boundary conditions w(0) = w(h) = 0, we must have           EI h = nπ.
         Therefore,
                                                I
                                           P ∝ 2
                                                h



                                       Page 8 of 34


                                            Wednesday, 19 February 2025, 1:00pm – 5:00pm


                                            r2 dA, so
                                        R
      The second moment of area I =

                                               I ∝ d4

      Finally, since the load P is equal to the weight of the sphere ∝ D3 , we obtain

                                             d4
                                D3 ∝ P ∝            ⇒   d ∝ D5/4
                                             D2


Part B: Scaling of Gravitational Potentials
A massive thin rhombus plate, with side length a and acute apex angle 60◦ , has uniform
surface mass density σ. The gravitational potential at the vertex of the acute angle of the
rhombus is equal to φ1 , and the potential at the vertex of the obtuse angle is φ2 (see first
object in the figure).




(c) An equilateral triangle of side length 2a (see second object in the figure) has the same    [3]
    uniform mass density σ. Find the gravitational potential at points C and D. Leave
    your answers in terms of φ1 and φ2 .

      Solution: The rhombus is equivalent to two equilateral triangles joined along a
      side. Hence by superposition, φ2 = 2φv , where φv = 21 φ2 is the potential at vertex
      of an equilateral triangle of side a. The equation for gravitational potential is
                                                Z
                                                   dm
                                          φ=G
                                                    r
                                                Z
                                                   σdA
                                            =G
                                                     r
      The potential at points on an equilateral triangle thus scale proportionally to its
      side length, so
                                      φC = 2φv = φ2

      The large equilateral triangle can be filled in by a rhombus and two smaller equilat-
      eral triangles. The rhombus contributes a potential φ1 , while the the two triangles
      each contribute a potential φv . Hence, we have
                                                  φ2
                                   φD = φ1 + 2       = φ1 + φ2
                                                  2

(d) An equilateral triangle of side a (see third object in the figure) is cut out from the      [2]


                                      Page 9 of 34


                                             Wednesday, 19 February 2025, 1:00pm – 5:00pm

      center. Find the new potential at C’ and D’. Leave your answer in terms of φ1 and
      φ2 .

        Solution: Consider superposing a middle triangle of ”negative mass” distribution
        −σ to our triangle in part (b). By superposition, our potential at D’ will be
                                                  φ2        φ2
                                     φD′ = φD −      = φ1 +
                                                  2         2
        Now, consider the initial rhombus again. The contribution of the further equilateral
        triangle of the rhombus to the potential at the point labelled φ1 is φf ar = φ1 − φ22 .
        Applying the same method of negative mass, the potential at C’ will be
                                                      3
                                   φC ′ = φC − φf ar = φ2 − φ1
                                                      2




Marking Scheme:

             Part   Steps                                              Marks
             (a)    W ∝ D3                                             M0.5
                    Area ∝ d2                                          M0.5
                    Stress ∝ D3 /d2                                    M0.5
                    d ∝ D3/2                                           A0.5
             (b)    Differential equation for w                        M1
                    Solution for w                                     M0.5
                    P ∝ EIh2
                                                                       M0.5
                    I ∝ d4                                             M0.5
                    d ∝ D5/4                                           A0.5
             (c)    Appropriate superposition argument                 M1
                    Appropriate scaling argument                       M1
                    φc = φ2                                            A0.5
                    φd = φ1 + φ2                                       A0.5
             (d)    Appropriate −σ superposition argument              M1
                    φD′ = φ1 + φ22                                     A0.5
                    φC ′ = 32 φ2 − φ1                                  A0.5

Part A of this problem is adapted from examples in https: // courses. cs. vt. edu/ cs2104/
Spring18Onufriev/ LectureNotes/ ScalingLaws. pdf .




                                       Page 10 of 34


                                               Wednesday, 19 February 2025, 1:00pm – 5:00pm

5. Consider a point charge +q placed at a fixed distance d from an infinitely large, thin,
   conducting plane.




                                         +q       d




  A small fly, initially on the point charge, takes off with an initial angle θ from the horizontal.
  Flying at a constant speed v, it follows the path of an electric field line until it reaches the
  plane (this diagram is not drawn to scale).


                                               Fly

                                              θ
                                         +q       d




   (a) Define the coordinates (x, y) such that the plane is at x = 0, and the point charge is          [3]
       at (−d, 0). Determine Ex and Ey , the x and y components of the electric field, for all
       points (x, y) in x < 0.

         Solution: Using the method of images, we can find the electric field everywhere
         to the left of the plane (x < 0):
                            ⃗ = ⃗
                            E   E(+q at (−d, 0)) + ⃗E(−q at (+d, 0))
                                        h                                     i
                            Ex = q           x+d
                                                           −      x−d
                                    4πε0 ((x+d)2 +y 2 )3/2   ((x−d)2 +y 2 )3/2 i
                                         h
                                     q          y                   y
                            Ey =
                                    4πε0       2    2 3/2
                                                           −       2    2 3/2
                                              ((x+d) +y )       ((x−d) +y )




   (b) The electric field line illustrated terminates at (0, y0 ). Determine y0 , leaving your         [4]
       answer in terms of d and θ. (Hint: The curved surface area of a sphere sector with
       half-angle θ is 21 (1 − cos θ) of the total surface area of the sphere.)

         Solution: Consider a Gaussian surface formed by the surface of revolution from
         the fly’s trajectory and the plane. Since the curved part of the surface is by
         definition parallel to the electric field lines, the only contribution to the electric




                                         Page 11 of 34


                                                  Wednesday, 19 February 2025, 1:00pm – 5:00pm


     flux is from its intersection with the plane.
                                       Z y0
                                 ΦE =        Ex (x = 0) · 2πy dy
                                         0
                                        qd y0
                                           Z
                                                    y dy
                                     =
                                        ε0 0 (d2 + y 2 )3/2
                                           "              #y0
                                        qd         1
                                     =       −p
                                        ε0       d2 + y 2 0
                                                             !
                                        q             d
                                     =       1− p
                                        ε0          d2 + y02

     If we take the point charge to be spherical with radius r → 0, at the end with the
     point charge, the surface approaches a cone with half-angle θ. We know that the
     electric flux through a spherical surface surrounding a point charge is uniform, so
     the flux passing through this surface is given by the total flux multiplied by the
     surface area fraction of the sector with respect to the entire sphere:
                                               q                q       θ
                                       ΦE =       (1 − cos θ) =    sin2
                                              2ε0               ε0      2
     Equating the two fluxes, we have:
                                                           !
                                  q               d                q       θ
                                        1− p                   =      sin2
                                  ε0            d2 + y02           ε0      2
                                                  d            θ
                                               p
                                                      2
                                                        = cos2
                                                d2 + y0        2
                                                           r
                                                                           θ
                                                           y0 = d sec4       −1
                                                                           2


(c) Find the instantaneous acceleration of the fly a as it reaches the plane. Leave your          [3]
    answer in terms of v, d and θ. (Hint: The radius of curvature R of a curve y(x) is
                            3
                   (1+y ′2 ) 2
   given by R =       y ′′       , where primes denote a derivative with respect to x.)

     Solution: Since the fly moves along a field line, its motion is parallel to the electric
                                                                            dy   E
     field at every point. Hence, the trajectory of the fly is given by dx     = Exy . This is
     a differential equation which can be solved to yield the full trajectory, however it
     is extremely difficult and not the intended solution.
     As the fly is moving at a constant speed, its acceleration must be perpendicular to
     its velocity, with magnitude equal to the centripetal acceleration. At the plane, the
     electric field lines are horizontal, so the expression simplifies considerably. Namely,
                dy           d                                                           d2 y
     Ey = 0, dx     = 0 so dx      ∂
                                = ∂x , and the radius of curvature is given by R1 = dx      2 .




                                          Page 12 of 34


                                            Wednesday, 19 February 2025, 1:00pm – 5:00pm


      Hence,

                                v2      d2 y     2 ∂ Ey
                                                               Ey′
                           a=      = v2      = v         = v 2
                                R       dx2        ∂x Ex       Ex
                                     2y(x+d)            2y(x−d)
                              3 2 ((x+d)2 +y2 )5/2 − ((x−d)2 +y2 )5/2
                             = v       x+d                x−d
                              2         2   2 3/2
                                                   −       2   2 3/2
                                     ((x+d) +y )      ((x−d) +y )       x=0
                                3y0
                             = 2      v2
                              y0 + d2

      where primes denote a partial derivative with respect to x.
      Substituting the expression for y0 , the final answer is
                                                      r
                                    3v 2    2 θ     θ           θ
                               a=        cos sin       1 + cos2
                                     d        2     2           2



Marking Scheme:

          Part    Steps                                                 Marks
          (a)     Image charge with correct magnitude and po-           M1
                  sition
                  Correct Ex                                            A1
                  Correct Ey                                            A1
          (b)     Applying Gauss’ Law                                   M0.3
                  Appropriately constructed Gaussian surface            M0.7
                  Identifying that electric flux is solely due to       M0.5
                  intersection of field lines with plane
                  Correct derivation for electric flux at plane         M0.8
                  Considering point charge as a sphere and ob-          M1
                  taining the correct flux
                  Correct final answer                                  A0.7
          (c)     Identifying that the acceleration is solely cen-      M0.5
                  tripetal
                  Identifying that electric field lines are horizon-    M0.5
                  tal and simplifying the expression for radius of
                  curvature
                                                     dy    E
                  Correct equation of trajectory dx     = Exy           M0.5
                  Differentiation and substitution                      M1
                  Correct final answer                                  A0.5




                                      Page 13 of 34


                                               Wednesday, 19 February 2025, 1:00pm – 5:00pm

6. Superconductors exhibit the Meissner effect where below a critical temperature, the super-
   conducting material expels all magnetic fields from its interior. This effect can be visualised
   by magnetic field lines, which are unable to penetrate the superconducting surface, instead
   curving around the superconductor.
   This behaviour is similar to fluid flow around a solid object, and we may draw an analogy
   between electromagetism and fluid dynamics. In this problem, we will exploit this analogy
   to discuss the Magnus effect; a phenomenon that occurs when a rotating object moves
   through a fluid.
   (a) Consider an infinitely long conducting cylinder of radius R, carrying current I along its     [2]
       axis of symmetry distributed uniformly across its cross section. Find B(r) for r < R.

          Solution: By Ampere’s Law,
                                 I                               2
                                   ⃗ · dl⃗ = µ0 · Iencl = µ0 I r
                                   B
                                                               R2
                                                      µ0 Ir
          This leads us directly to the result B(r) = 2πR 2.




   Two straight, infinitely long cylindrical nonmagnetic conductors C+ and C− , insulated from
   each other, overlap. They carry uniformly distributed current I in and out of the paper
   respectively (i.e. C+ carries a current of I out of the page and C− carries a current of
   I into the page. The overlapping region has zero net current). The cross sections of the
   conductors (shaded in the figure) are limited by circles of radius R in the x-y plane, with
   distance d between their centres.




                                      ⃗
   (b) Determine the magnetic field B(x,  y) in the space between the conductors. The origin         [2]
       is placed in the middle of the two centres.

          Solution:
          The magnetic field can be determined as the superposition of the fields of two
          cylindrical conductors. From part (a), we know that the magnetic field within a
          current cylinder is azimuthal and has magnitude
                                                    µ0 Ir
                                               B=
                                                    2πR2
          Consider an arbitrary point within the space between the two conductors.




                                         Page 14 of 34


                                           Wednesday, 19 February 2025, 1:00pm – 5:00pm




      Taking components of the magnetic fields along the x and y axes respectively,
                                     µ0 r1 I sin θ1 µ0 r2 I sin θ2
                              Bx =                 −               =0
                                         2πR2           2πR2
      where we have used the fact that r1 sin θ1 = r2 sin θ2 .
                                    µ0 r1 I0 cos θ1 µ0 r2 I0 cos θ2
                              By = −                −
                                        2πR2               2πR2
                                    µ0 I0 (r1 cos θ1 + r2 cos θ2 )
                                 =−
                                                2πR2
      But r1 cos θ1 + r2 cos θ2 = d. Hence,

                                          ⃗ = − µ0 Id ŷ
                                          B
                                               2πR2
      which is constant everywhere in the intersecting region.

An infinite solid superconducting cylinder of radius R with symmetry axis parallel to the
z-axis lies in a uniform external magnetic field of magnitude B0 parallel to the y-axis.




(c) Knowing that superconductors repel magnetic fields, and using the result in part (b),   [3]
    show that the net magnetic field B⃗1 in the region r > R is given by:

                                             R2                     R2

                    ⃗
                   B1 (r, θ) = B0 sin θ 1 − 2 r̂ + B0 cos θ 1 + 2 θ̂
                                             r                      r




                                     Page 15 of 34


                                     Wednesday, 19 February 2025, 1:00pm – 5:00pm


Solution:
The net magnetic field within the cylinder is zero. To negate the external magnetic
field, there must be a current distribution on the surface of the superconducting
cylinder that generates a uniform magnetic field −B0 ŷ within the cylinder. We
may apply our result from part (b), modelling the current distribution in the
superconductor as the superposition of two opposite current cylinders separated
by a distance d ≪ R (such that the intersection of the two current cylinders
effectively fills the entire volume of the superconducting cylinder). The current I
and separation d must satisfy
                                            µ0 Id
                                      B0 =
                                            2πR2
Hence, by Ampere’s Law, the magnetic field outside the cylinder is effectively
equal to the magnetic fields of two infinite current-carrying wires spaced a distance
d apart.




Superimposing the fields in polar coordinates, we obtain
                                                                    !
                                  µ0 I        1           1
                B1,θ = B0 cos θ +             d
                                                     −    d
                                  2π      r − 2 cos θ r + 2 cos θ

Taking first order terms with respect to dr , we get

                                              µ0 Id cos θ
                            B1,θ = B0 cos θ +
                                                 2πr2
                                                  R2

                                 = B0 cos θ 1 + 2
                                                  r

Similarly, we can obtain

                                             µ0 I d sin θ
                           B1,r = B0 sin θ −
                                             2πr       r
                                                   2

                                                 R
                                = B0 sin θ 1 − 2
                                                 r

Hence, we conclude that

                                      R2                  R2

              ⃗
              B1 (r, θ) = B0 sin θ 1 − 2 r̂ + B0 cos θ 1 + 2 θ̂
                                      r                   r




                               Page 16 of 34


                                            Wednesday, 19 February 2025, 1:00pm – 5:00pm

An infinitely long solid cylinder of radius R is placed in a region of incompressible, non-
viscous fluid that flows from y = −∞ with a uniform velocity of U0 ŷ, past the cylinder
and away towards y = +∞. Consider the fluid motion in one cross-sectional plane of the
cylinder.




(d) Draw a diagram to represent the fluid flow around the cylinder and write down an                [2]
                   ⃗ (r, θ), the velocity of the fluid at any point in space outside the cylinder
    expression for U
    in polar coordinates, justifying your answer.

      Solution: Here, we need to make the appropriate analogy between our current
      superconductor setup and what we are trying to find; which is the velocity field
      of fluid flowing around an object. We notice a few similarities between magnetic
      fields and the velocity fields of fluids.
      1. Just like how magnetic field lines are unable to penetrate superconductors, fluid
      always flows around the object; the velocity field must always be parallel to the
      object surface, at the object surface.
                                                     ⃗ · dS
                                                          ⃗ = 0 or ∇ · B
                                                                       ⃗ = 0. This is similar
                                                   H
      2. Gauss’ Law for magnetism states that B
      to the law of continuity for fluid flow ∇ · U⃗ = 0.
      Hence, since the governing equations for the magnetic field and velocity field are
      the same, and the boundary condition at the cylinder surfaces are the same in
      both cases, we can conclude that magnetic fields and velocity fields are exactly
      analogous in this context.
      We therefore obtain that the velocity field is:

                                                R2                     R2

                      ⃗
                      U (r, θ) = U0 sin θ 1 − 2 r̂ + U0 cos θ 1 + 2 θ̂
                                                r                       r




                                      Page 17 of 34


                                           Wednesday, 19 February 2025, 1:00pm – 5:00pm

The cylinder is now given an angular velocity that points in the positive z-direction (out
of the paper), inducing circular currents in the fluid around it. To model the effect of the
rotation of the cylinder on the surrounding fluid, we will use the concept of circulation.
Usually, non-viscous flow has an important property of being irrotational: the circulation
of velocity along any closed path within the fluid is zero.
                                      I
                                         ⃗v · d⃗l = 0

However, this changes if we introduce a vortex filament; which induces long range circulatory
flows in the fluid. For any closed loop that wraps around these filaments,
                                      I
                                     | ⃗v · d⃗l| = 2πΓ

where Γ is called the circulation quantum. To illustrate this, a vortex filament (thick line)
is drawn in fluid. The velocity circulation along paths L1 , L2 , L5 and L6 (thin lines) are
all zero, whereas those for L3 and L4 are equal to ±2πΓ. Note that circulations along L3
and L4 have opposite signs.




(e) Model the rotation of the cylinder with a long infinite vortex filament with circulation    [2]
    quantum Γ placed along the central axis of the cylinder. Find the new velocity field
    U⃗1 (r, θ).

       Solution:
       Notice that we can separate the velocity field into two components - the irrotational
       field U⃗ (r, θ), and the rotational field generated by the circulation, which we call
      ⃗v (r, θ). We may safely assume that ⃗v (r, θ) is rotationally symmetric, making it
       independent of θ. Furthermore, since it only has a rotational component, we will
       call that vθ (r). Using the circulation law, we obtain:
                                       2πrvθ (r) = 2πΓ
                                                    Γ
                                           vθ (r) =
                                                     r
                                                ⃗
      We can now simply superimpose vθ and U (r, θ) to obtain:
                                          2                      2

                                        R                      R     Γ
               U⃗1 (r, θ) = U sin θ 1 − 2 r̂ + U cos θ 1 + 2 +           θ̂
                                        r                      r     r



                                     Page 18 of 34


                                             Wednesday, 19 February 2025, 1:00pm – 5:00pm

(f) Given density of fluid ρ, find the force per unit length F⃗ acting upon the cylinder due   [3]
    to the fluid flow. (Hint: One possible solution is to apply Bernoulli’s equation.)

     Solution: We are now almost done.
     This is the Magnus effect; the rotation of the cylinder in the fluid generates an
     asymmetric velocity field. Hence, by Bernoulli’s law, the resulting pressure field is
     also asymmetric, generating a net force on the object.
                                           ⃗ (θ) at the surface of the object, since we want
     First, let us find the velocity field V
     to integrate the fluid pressure at the object’s surface to find the force. Substituting
     r = R into U⃗1 (r, θ),
                                   ⃗ (θ) = 2U0 cos θ + Γ θ̂
                                   V
                                                          R
     We apply Bernoulli’s theorem, taking p0 to be the gauge pressure set at infinity:
                                       1             1
                                   p0 + ρU02 = p(θ) + ρV (θ)2
                                       2             2
     Simplifying, we obtain

                                1                     Γ2   2ρΓU0 cos θ
                     p(θ) = p0 + ρU02 (1 − 4 cos2 θ) − 2 −
                                2                     R        R
     Hence, the force per unit length can be expressed as:
                             Z 2π                    Z 2π
                      F⃗ = −      p(θ)R cos θdθ x̂ −      p(θ)R sin θdθ ŷ
                               0                       0

     The only term which remains non-zero upon integration is the cos2 θ term. We
     may simplify the equation and obtain:
                                    Z 2π
                                ⃗
                                F =      2ρΓU0 cos2 θdθ x̂
                                         0
                                      = 2πρΓU0 x̂




                                     Page 19 of 34


                                            Wednesday, 19 February 2025, 1:00pm – 5:00pm



Marking Scheme:

         Part     Steps                                                Marks
                     ⃗ · dl⃗ = µ0 I r22
                  H
         (a)         B              R
                                                                       M1
                  Correct final answer                                 A1
         (b)      Idea of superposition of two opposite cylindri-      M0.5
                  cal currents
                  B(x) = 0                                             M0.5
                  Correct B(y)                                         A1
         (c)      Realise that the configuration in part (b) with      M1
                                              µ0 Id
                  current I satisfying B0 = 2πR   2 fufills the con-
                  dition that the magnetic field inside the su-
                  perconductor is 0
                  Correct calculations for field due to supercon-      M1.5
                  ductor, with sufficient detail
                  Correct calculations for field due to external       M0.5
                  field
         (d)      Correct diagram                                      A0.5
                  Justification on similarities in governing equa-     M0.5
                  tions (Continuity, Gauss’ Law)
                  Justification on similarities in boundary con-       M0.5
                  ditions (No normal component at cylinder
                  walls)
                  Correct final answer                                 A0.5
         (e)      vtheta · 2πr = 2πΓ                                   M1
                  Correct final answer                                 A1
         (f)      Substitution of r = R to find V  ⃗ (θ)               M0.5
                  Use Bernoulli’s equation to find p = p0 +            M1
                  1     2           2    Γ2    2ρΓU0 cos θ
                  2 ρU0 (1 − 4 cos θ) − R2 −        R
                  Fy = 0                                               M0.5
                  Correct final answer                                 A1




                                      Page 20 of 34


                                                Wednesday, 19 February 2025, 1:00pm – 5:00pm

7. Part A: Thin Lens Interference
  A plano-convex lens with radius of curvature R and refractive index n is placed on top of a
  flat glass plate such that there is a small air gap between the curved surface and the plate.

                                                      r

                                                                    t(r)

   (a) Consider the thickness t(r) of the air gap as a function of radial distance r from the      [11/2]
       centre of the lens. Determine t(r) to leading order in r.

         Solution: Applying Pythagoras’ Theorem, we use the fact that t ≪ R to show
         that:

                                        R2 = r2 + (R − t(r))2
                                            ≈ r2 + R2 − 2Rt(r)
                                                r2
                                       t(r) ≈
                                                2R


   (b) Collimated light of wavelength λ is incident on the lens. Determine the the radial          [21/2]
       position rm of the mth bright fringe. Assume that the incident light and reflected light
       is always approximately normal to both the lens and plate.

         Solution: In order for constructive interference to occur, the phase difference be-
         tween a ray that is reflected off the bottom surface of the lens and a ray transmitted
         and reflected off the glass plate must be an integer multiple of 2π.
         The transmitted ray travels an extra distance 2t, equivalent to a phase angle 4πt   λ .
         Furthermore, as it is reflected within a medium of lower refractive index, whereas
         the other ray is reflected within a medium of higher refractive index, it gains an
         additional phase π. Thus we have:
                                       4πt
                                           + π = 2πm
                                        λ
                                     2πrm2
                                           + π = 2πm
                                      λR         s
                                                       1
                                            rm =    m−     λR
                                                       2




                                        Page 21 of 34


                                             Wednesday, 19 February 2025, 1:00pm – 5:00pm

Part B: Double Slit Diffraction
We consider two-slit diffraction, but with collimated light of speed c and two different
wavelengths λ1 , λ2 entering the two slits respectively. The two slits are separated by distance
d. For simplicity, we project onto a screen placed a distance r away, and define the angular
position θ at the screen as shown in the figure. Assume r ≫ d ≫ λ1 , λ2 . Set the phases of
the two waves at the slit to be ϕ = 0.




                                   λ1
                                                        θ
                                   λ2



                                                    r

(c) Let the electric field through each slit have amplitude E0 . Find the amplitude of the         [3]
    total electric field at an angle θ on the screen, at an arbitrary time t. Express your
    answer as a product of cosines or sines. (Hint: You may use the identity cos A+cos B =
                   A−B
    2 cos A+B
           2 cos 2 . You may choose to define your own variables to simplify your final
    answer.)

       Solution: The major difference between this and usual diffraction is that both
       the wavenumber and frequency are different. The wavenumber is k = 2π λ and the
       frequency is ω = ck. The amplitude is

                                            2π        d
                            E1,2 = E0 cos        · r ± sin θ − ct
                                            λ1,2      2

       The resulting diffraction pattern is E = E1 + E2 , therefore

                            2π       d                      2π      d
            E = E0 cos         · r + sin θ − ct + cos          · r − sin θ − ct
                            λ1        2                     λ2      2
                                                                 k1 +k2       k1 −k2
       For simplicity, we use the wavenumber k = 2π λ . Let k̄ =    2 , δk =     2 . Using
                                                          A+B      A−B
       the sum to product formula cos A + cos B = 2 cos 2 cos 2 , we have

                                           d sin θ                       d sin θ
               E = 2E0 cos k̄(r − ct) + δk           cos δk(r − ct) + k̄
                                              2                             2

       Writing cosr θ instead of r as approximated in the solution gets full credit. Including
                          1
       an additional √r cos θ
                              term to account for the falloff of intensity of cylindrical waves
       with a larger surface area also gets full credit.

(d) Now suppose λ1 = λ − δλ, λ2 = λ + δλ, where δλ ≪ λ. Consider the time average to be            [3]
    taken over the period corresponding to λ. Find the intensity pattern I(θ, t). State the
    angles which correspond to maxima and minima, and comment on how the positions
    of these maxima and minima near θ = 0 change with time. You may use appropriate
    approximations.




                                        Page 22 of 34


                                    Wednesday, 19 February 2025, 1:00pm – 5:00pm


Solution: Let k = 2π                                     δλ                  δλ

                     λ , then to first order, k1 ≈ k 1 + λ , k2 ≈ k 1 − λ . Let
δk = k δλ
       λ . Then

                                     d sin θ                       d sin θ
          E = 2E0 cos k(r − ct) +            δk cos δk(r − ct) + k
                                        2                             2

We may assume that since δk ≪ k, the value of the second cosine hardly changes
as t varies. Therefore we only need to compute the first cosine, which averages to
1
2.

                            2    2               d sin θ
                   I ≈ 2ϵ0 E0 cos δk(r − ct) + k
                                                    2
                    ≈ ϵ0 E02 [1 + cos (2δk(r − ct) + kd sin θ)]

                           2               δλ
                    ≈ ϵ0 E0 1 + cos 2k (r − ct) + kd sin θ
                                           λ

The maxima correspond to:

                2δk(r − ct) + kd sin θ = 2πn, n ∈ N
                                                δλ
                        d sin θminima = nλ − 2 (r − ct), n ∈ N
                                                λ
Similarly,
                                     1        δλ
                 d sin θmaxima = n +     λ − 2 (r − ct), n ∈ N
                                     2        λ
Near θ = 0, we may use the small angle approximation, which leads us to conclude
that the positions of maxima move with angular velocity:
                            dθmaxima,minima    δλ r
                                            =2      c
                                  dt           λ d




                              Page 23 of 34


                                          Wednesday, 19 February 2025, 1:00pm – 5:00pm



Marking Scheme:

         Part     Steps                                             Marks
         (a)      Correct distance expression                       M0.5
                  t≪R                                               M0.2
                  Correct final answer                              A0.8
         (b)      Recognising that constructive interference oc-    M0.5
                  curs when phase difference is an integer mul-
                  tiple of 2π
                  Correct phase difference due to extra distance    M1.0
                  travelled
                  Correct phase difference due to reflection        M0.5
                  Correct final answer                              A0.5
                  m + 12 instead of m − 12 in the final answer is
                  awarded 2/2.5 marks
         (c)      Wave formula cos(kr − ωt) or ei(kr−ωt) with       M1
                  Real Part stated.
                  Correct inclusion of different wavelengths /      M1
                  wavenumbers, frequencies, and path length
                  difference.
                  Use of sum-to-product formula or correct tak-     A1
                  ing of real parts. Answer matches up to a
                  phase difference (i.e. sin or cos).
         (d)      First order approximation of wavenumber or        M1
                  equivalent.
                  Approximation of second cosine as constant        M1
                  during integral.
                  Answer matches for minima and max-                A1
                  ima, comment about speed of movement
                  dθmaxima,minima
                         dt       = 2 δλ
                                      λ c.




                                    Page 24 of 34


                                            Wednesday, 19 February 2025, 1:00pm – 5:00pm

8. This is the P V -diagram of the Otto cycle: A → B and C → D are isochoric (or isovolu-
   metric) processes, and B → C and D → A are adiabatic processes.




   (a) Consider a classical Otto engine, containing a gas with adiabatic index γ with vol-    [3]
       umes V1 and V2 respectively at the two isochoric processes (V1 < V2 ). Determine the
       efficiency ηc of such an engine.

         Solution: The efficiency η of an engine is given by
                                                    Qout
                                          η =1−
                                                    Qin
         The only heat transfer occurs during the isochoric processes. Using the equation
         ∆Q = Cv ∆T for an isochoric process, we have
                                                   TC − TD
                                        ηc = 1 −
                                                   TB − TA

         For an adiabatic process, pV γ = const. implies T V γ−1 = const.. We may use this
         relation to obtain
                                               γ−1             γ−1
                                         TB VV12     − TA VV12
                               ηc = 1 −
                                                  TB − TA
                                            γ−1
                                           V1
                                   =1−
                                           V2




                                      Page 25 of 34


                                           Wednesday, 19 February 2025, 1:00pm – 5:00pm

Now, we will discuss the quantum Otto engine. For simplicity, consider a two-level atomic
system with ground state and excited state energies E0 = 0 and E1 , and suppose the
probabilities of existing in these states are p0 and p1 respectively. The average energy of
the two-level atom is thus

                              ⟨E⟩ = p0 E0 + p1 E1 = p1 E1

Suppose the energy difference E1 between the two states can be adjusted throughout the
cycle. The probability p that the atom is in the energy state E satisfies the Boltzmann
distribution
                                   p ∝ e−E/(kB T )
where T is the temperature and kB is the Boltzmann constant.
(b) When the quantum matter is in equilibrium with a heat reservoir of temperature T ,        [1]
    write down expressions for the probabilities p0 and p1 . Leave your answers in terms of
    E1 , kB and T .

      Solution: We know that
                                                     E1
                                      p1 = p0 exp −
                                                    kB T
      Since p0 + p1 = 1, we have

                                     1                     exp − kEB1T
                       p0 =                         p1 =
                              1 + exp − kEB1T            1 + exp − kEB1T



In a thermodynamical process, the energy change dE can be written in terms of the change
in work and heat using the First Law of Thermodynamics.

                                    dE = dW + dQ

In a quasi-static quantum process, the change in average energy is given by differentiating
the equation for average energy.

                                d⟨E⟩ = p1 dE1 + E1 dp1

The quantum adiabatic theorem states that the probabilities of each quantum state remain
effectively constant during an adiabatic process.
(c) Write an equation for d⟨E⟩ in an adiabatic process. Leave your answer in terms of p1 ,    [1]
    E1 and their differentials.

      Solution: Since the adiabatic theorem states that the probabilities of each state
      remain constant, the second term in the equation for d⟨E⟩ goes to zero.

                                          d⟨E⟩ = p1 dE1




                                     Page 26 of 34


                                                 Wednesday, 19 February 2025, 1:00pm – 5:00pm

The von Neumann entropy S is given by
                                                 X
                                  S = −kB                 pi ln pi
                                                  i

where kB is the Boltzmann constant and pi is the probability of the i-th state in the quantum
system.
(d) Using the equation for von Neumann entropy, write an equation for d⟨E⟩ in an isochoric      [21/2]
    process. Leave your answer in terms of p1 , E1 and their differentials.

      Solution: In an isochoric process, the work done is zero. The change in energy is
      then given by dQ = T dS. Let us first differentiate the expression for S.
                                           X
                                dS = −kB       (1 + ln pi ) dpi
                                                      i

      Knowing  that  p0 + p1 = 1, we have dp0 = −dp1 . Furthermore, since p1 =
      p0 exp − kEB1T , we have ln p1 = ln p0 − kEB1T . Upon substitution, we obtain our
      final answer.

                       d⟨E⟩ = T dS
                                        X
                             = −kB T         (1 + ln pi ) dpi
                                         i

                                                  E1
                             = −kB T 1 + ln p1 −      − 1 − ln p1 dp1
                                                 kB T
                             = E1 dp1

      Solutions that arrive straight at the correct final answer from the first law will
      receive only 1.5 marks.

(e) Sketch the quantum Otto cycle on the axes E1 against p1 , with arrows and labels for        [21/2]
    A, B, C, D. You may use the first law of thermodynamics, or your results from parts
    (c) and (d).

      Solution: For an adiabatic process, we have d⟨E⟩ = p1 dE1 . For an isochoric pro-
      cess, we have d⟨E⟩ = E1 dp1 . Therefore, all processes in the Otto cycle correspond
      to straight lines on the E1 − p1 diagram, so we end up with a rectangle.
                                  E1

                                             A                       B




                                             D                       C




                                                                         p1



      For a less rigorous derivation straight from the first law, we can notice that the two



                                       Page 27 of 34


                                           Wednesday, 19 February 2025, 1:00pm – 5:00pm


     equations for classical and quantum energy can each be partitioned into a term for
     work (dW = p1 dE1 ) and heat (dQ = E1 dp1 ).

(f) Compute the efficiency ηq of the quantum Otto cycle, in terms of the temperatures TB   [2]
    and TC at the states B and C respectively.

     Solution: The efficiency is
                                                     Qout
                                          ηq = 1 −
                                                     Qin
     Since heat exchange only occurs during the isochoric processes, we have

                                          EB (pB − pA )     EB
                               ηq = 1 −                 =1−
                                          EC (pB − pA )     EC

     Since pB = pC , we have

                             exp − kBETBB        exp − kBETCC
                                             =
                           1 + exp − kBETBB    1 + exp − kBETCC

     Simplifying, we have E    EC
                          TB = TC , so the efficiency is
                           B



                                                     TC
                                          ηq = 1 −
                                                     TB




                                    Page 28 of 34


                                          Wednesday, 19 February 2025, 1:00pm – 5:00pm



Marking Scheme:

            Part   Steps                                          Marks
            (a)    Writing η = 1 − QQout
                                      in
                                         or equivalent            M0.5
                   Computing Qout , Qin and/or W accurately       M1.5
                   Correct final answer                           A1
            (b)    Writing down p1 in terms of p0                 M0.5
                   Correct final answer                           A0.5
            (c)    Correct final answer                           A1
            (d)    Correct differentiation of S                   M0.5
                   dQ = T dS                                      M0.5
                   Expressing p0 and dp0 in terms of p1 and dp1   M0.5
                   Correct final answer                           A1
            (e)    Correct interpretation of E1 dp1 and p1 dE1    M1
                   Correct E1 − p1 diagram shape                  A1
                   Correct labels on rectangle                    A0.5
            (f)    Correct values of Qin and Qout                 M0.5
                             EC
                   ηq = 1 − E B
                                                                  M0.5
                   Making use of pB = pC to relate TB and TC      M0.5
                   Correct final answer                           A0.5

This problem is adapted from a Chinese Physics Olympiad.




                                    Page 29 of 34


                                                 Wednesday, 19 February 2025, 1:00pm – 5:00pm

9. When stars collapse, over 97% of them become white dwarves. These are extremely dense
   bodies consisting largely of degenerate electron matter and some ions. Unlike stars, the
   white dwarves can no longer support itself against gravitational collapse by its gas pressure,
   and instead the electron degeneracy pressure dominates.
   For the free electrons in white dwarves, we must use a quantum mechanical description.
   We can define their number density of state g(p) as:
                                                       8π 2
                                         g(p) dp =        p dp
                                                       h3
   where p is the momentum of the state and h is Planck’s constant. In other words, in
   a volume dV , there are g(p) dp dV states of momentum p that may be occupied by an
   electron.
   To describe the probability in which these states are occupied, we can apply Fermi-Dirac
   statistics, which tells us that a state of energy ε has an average occupation probability f (ε):
                                                        1
                                       f (ε) =         ε−µ
                                                 exp    kT   +1

   where k is the Boltzmann constant, T is the temperature and µ is an energy term known
   as the chemical potential.
   (a) Show that the pressure P due to the free electrons is given by:                                [2]
                                        Z ∞
                                    8π              p3
                               P = 3                         v(p) dp
                                    3h 0 exp ε−µ

                                                    kT   +1

        where v(p) is the magnitude of the velocity of an electron as a function of its momentum
        p.

          Solution: The pressure can be seen as the momentum flux through a unit surface.
          Firstly, we can get the actual electron number density by multiplying the number
          density of states with the probability that that state is occupied:

                                           n(p) = g(p)f (ε(p))

          Consider a flat surface with area dS, placed in a spherical coordinate system at its
          origin. In unit time dt, the number of electrons hitting the surface from a polar
          angle θ and azimuthal angle ϕ with velocity v is given by n(p) multiplied by the
          volume of the parallelepiped with base dS and height v dt cos θ. The fraction of the
          electrons which come from any angle is uniform, and given by sin θdθdϕ  4π . Since the
          net momentum is in the directional perpendicular to the surface, we only want the
          perpendicular component of the momentum p cos θ. Integrating across the upper
          a spherical shell, and across all values of p, the total perpendicular momentum
          transferred through the surface in time dt is given by:
                           Z ∞ Z 2π Z π
                                                                   sin θ dθ dϕ
                                        n(p) dS v dt cos θ p cos θ             dp
                             0   0    0                                4π

          We divide by dS and dt to get the momentum transferred per unit surface and per




                                         Page 30 of 34


                                             Wednesday, 19 February 2025, 1:00pm – 5:00pm


      unit time.
                              Z ∞ Z 2π Z π
                                                                sin θ dθ dϕ
                        P =                  n(p)v(p)p cos2 θ               dp
                              0                                     4π
                               Z 0     0
                             1 ∞
                           =       n(p)v(p)p dp
                             3 0
                                 Z ∞
                             8π            p3
                           = 3                     v(p) dp
                             3h 0 exp ε−µ

                                           kT   +1

      Alternatively, answers using a simpler model exploiting symmetry may obtain full
      credit if explained clearly.

We now make the assumption that the electron gas is fully degenerate. This means that all
the electron states are occupied up till the state with Fermi momentum pf , and no electron
states above that are occupied. This is equivalent to assuming zero temperature for the gas,
and the energy of the electron is equal to µ when it occupies the state with momentum pf .
(b) Under this assumption, show that the pressure P can be simplified to:                      [11/2]
                                           Z pf
                                       8π
                                  P = 3         p3 v(p) dp
                                       3h 0


      Solution: With the zero temperature assumption,  the Fermi-Dirac distribution
      simplifies to a step function. When ε < µ, exp ε−µ   kT = 0 and f (ε) = 1. On the
                                     ε−µ
      other hand, when ε > µ, exp kT tends towards infinity and f (ε) = 0. With this
      in mind, any momentum values above pf in the integral all go to zero, and we can
      simplify the denominator to 1. This leaves us with the desired equation:
                                              Z pf
                                           8π
                                     P = 3         p3 v(p) dp
                                          3h 0


(c) Determine an expression for ne , the number density of electrons. Assume that the          [11/2]
    electron gas is fully degenerate. Leave your answer in terms of h and pf .

      Solution: With the assumption that the electron is fully degenerate, we consider
      all states above momentum pf to be empty and all states below momentum pf to
      be fully filled. We can integrate g(p) dp from 0 to pf to obtain:

                                             8π pf 2
                                                 Z
                                       ne = 3        p dp
                                             h 0
                                              8π
                                          = 3 p3f
                                             3h


(d) Assume that the electrons only move non-relativistically. Determine the pressure P         [11/2]
    for the electron cloud. Leave your answer in terms of h, me and ne .




                                     Page 31 of 34


                                            Wednesday, 19 February 2025, 1:00pm – 5:00pm


       Solution: For non-relativistic particles, v ≪ c. The velocity v is given by mpe , so
       the integral for pressure becomes:
                                                  Z pf
                                            8π
                                     P = 3             p4 dp
                                          3h me 0
                                             8π
                                       =           p5
                                          15h3 me f
       Substuting the expression for ne , we have:
                                                  2 2 5
                                          1     3 3 h 3
                                      P =              ne
                                          20    π   me



Unlike the electrons in the white dwarf, the ions can be described using classical ideal gas
equations. Consider the white dwarf Sirius B, which we assume to be purely carbon such
that the number of ions ni is given by 6ni = ne . The electrons here move non-relativistically.
(e) Estimate the numerical ratio of pressures exerted by the electrons to the ions PPei . The     [11/2]
    mean density of Sirius B is 2.38 × 109 kg m−3 and its temperature can be estimated
    to be 25000 K. Despite the non-zero temperature, assume that your result in part (d)
    remains valid.

       Solution: The equation of state for the ions is given by the ideal gas equation:

                                            Pi = ni kT

       Since the number of ions and electrons is fairly similar and the mass of each ion is
       much greater than each electron, we can make the approximation ρ ≈ ni mi , where
       mi = 12 u for carbon. Then, ne = 6 mρi . Upon plugging in numerical values, we
       obtain:
                                                   2     5
                                             1 3 3 h2 3
                                       Pe              n e
                                          = 20 π me
                                       Pi        ni kT
                                          ≈ 3.3 × 105

       This confirms that the pressure in a white dwarf is mostly due to electrons rather
       than ions.




                                      Page 32 of 34


                                          Wednesday, 19 February 2025, 1:00pm – 5:00pm



Marking Scheme:

         Part     Steps                                             Marks
         (a)      Electron number density n(p)                      M0.5
                  Forming the triple integral accurately            M1
                  Each inaccurate reasoning step (e.g. using p
                                                                    -M0.3
                  instead of p cos θ)
                  Performing the integration accurately             M0.5
         (b)      Noticing the step function                        M1
                  Setting momentum values to 0 and 1                M0.5
         (c)      Setting appropriate limits for integration        M1
                  Correct final answer                              A0.5
         (d)      Identifying v(p) for non-relativistic particles   M0.3
                  Substitution and integration                      M0.5
                  Correct final answer                              A0.7
         (e)      Writing the ideal gas equation                    M0.5
                  ne = 6 mρi                                        M0.5
                  Correct final answer                              A0.5




                                    Page 33 of 34


     Wednesday, 19 February 2025, 1:00pm – 5:00pm




Page 34 of 34
