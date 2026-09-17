---
id: solution-document-usapho-2020-s
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2020_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [usapho-2020-a1, usapho-2020-a2, usapho-2020-a3, usapho-2020-b1, usapho-2020-b2, usapho-2020-b3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2020_S.pdf."
---

2020 USAPhO                               General Information                                             1




           AAPT UNITED STATES PHYSICS TEAM
            AIP 2020

                            USA Physics Olympiad Exam

                          Information about USAPhO Test
   • This examination consists of two parts and six problems. Ordinarily, you will be given 90
     minutes to complete Part A, take a 10-15 minute break, and return to complete Part B in 90
     minutes.
     You may choose to observe the above guideline if you’d like to practice for future USAPhO
     tests.

   • Ordinarily, you are allowed calculators, but they are not allowed to use symbolic math,
     programming, or graphical features of these calculators. Calculators must not be shared and
     their memory must be cleared of data and programs. Cell phones, smart watches, PDAs, or
     cameras cannot be used during the exam or while the exam papers are present. Students are
     not allowed to bring any tables, books, or collections of formulas.
     You may choose to observe the above guideline if you’d like to practice for future USAPhO
     tests.

   Thank you for participating USAPhO this year under such extraordinary circumstances. We
hope that you and your family stay safe, and that you continue to encourage more students like
you to study physics and try out F = ma test hosted by AAPT.




   We acknowledge the following people for their contributions to this year’s exam (in alphabetical order):

   Ariel Amir, JiaJia Dong, Mark Eichenlaub, Abijith Krishnan, Kye W. Shi, and Mike Winer.




                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                    Part A                                                2



Part A
Question A1
Braking up
An infinitely long wire with linear charge density −λ lies along the z-axis. An infinitely long
insulating cylindrical shell of radius a is concentric with the wire and can rotate freely about the
z-axis. The shell has moment of inertia per unit length I. Charge is uniformly distributed on the
                                     λ
shell, with surface charge density      .
                                    2πa
    The system is immersed in an external magnetic field B0 ẑ, and is initially at rest. Starting at
t = 0, the external magnetic field is slowly reduced to zero over a time T  a/c, where c is the
speed of light.




a. Find an expression of the final angular velocity ω of the cylinder in terms of the symbols given
   and other constants.

                                              Solution
     From Faraday’s law, you can find the induced electric field inside the cylinder at a distance
     r from the wire:
                                       I
                                          ~ ind · d`~ = − dΦB
                                          E                                                 (A1-1)
                                                           dt
                                                          r dB
                                           Eind (r) = −                                     (A1-2)
                                                          2 dt
     This induced field exerts a torque on the cylinder, causing it to rotate:
                                           λ                        dω
                                  τ = 2πa ·    · Eind (a) · a = I ·                        (A1-3)
                                          2πa                       dt
                                      dω         2
                                             λa dB
                                    ⇒    =−        ·                                       (A1-4)
                                      dt      2I     dt
     Integrate on both sides, and noting that ω(t = 0) = 0, we have:

                                                  λa2            
                                      ω(T ) = −       B(T ) − B0                           (A1-5)
                                                  2I

                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                   Part A                                               3



     It is important to note that B(T ) 6= 0. Even though the external field decreases to zero,
     the now-rotating charged cylinder generates a magnetic field. Using Ampere’s Law, you
     can find at t = T , the magnetic field is:
                                           I
                                              B~ ind · d~` = µ0 Ienc ,                  (A1-6)
                                                                     λ
                                             where    Ienc =            · ω(T ) · a      (A1-7)
                                                                    2πa
                                            λ
                            ⇒ B(T ) = µ0          ω(T )                                  (A1-8)
                                           4π 2 a
     Combining equations (A1-5) and (A1-8), we have:

                                                  λa2
                                                      B0
                                        ω(T ) =    2I
                                                       λ2 a
                                                1 + µ0
                                                       8πI

b. You may be surprised that the expression you find above is not zero! However, the electric and
   magnetic fields can have angular momentum. Analogous to the “regular” angular momentum
   definition, the EM field angular momentum per unit volume at a displacement r from the axis
   of rotation is:
                                         L(r) = r × P(r).

   P(r) is a vector analogous to momentum, given by
                                                           
                                     P(r) = α · E(r) × B(r) .

   where α is some proportionality constant. Find an expression for α in terms of given variables
   and fundamental constants.

                                             Solution
     The electric field inside the cylindrical shell is given by E(r) = − 2πλ0 r r̂ inward. The
     magnetic field is given by B(t)ẑ. Then:

                                                     λB(t)
                                         P(r) = α           θ̂.
                                                     2π0 r
     The angular momentum per unit volume is then:
                                                           λ
                                           L(r) = −α           ẑ
                                                          2π0
     The angular momentum per unit length is then:

                                                  αλB(t)a2
                                         L=−               ẑ.
                                                     2
     Comparing this to Equation (A1-5) shows that α = 0 .


                  Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                    Part A                                                 4



Question A2
Swoosh!
In 1851, Léon Foucault built a pendulum 67 metres tall with a 28-kg weight. He connected it to the
top of the Panthéon in Paris with a bearing that enabled it to freely change its plane of oscillation.
Because of the Earth’s rotation, the plane of oscillation slowly moved over time: if we imagine
a large horizontal clock under the pendulum, if initially the oscillations went from “12” to “6”,
later on they would move to the “3-9” plane, for example, as shown in the figure below. Perhaps
surprisingly, the time it took the oscillations to go back to their original plane is longer than 12
hours. In this problem we will investigate why this is the case, and what the shape the pendulum
traces out.




Figure 1: Left: A schematic of Foucault’s pendulum. Right: The pendulum motion projected on a
horizontal plane in the rotating lab frame.

    First, consider the
                     p case of a Foucault pendulum installed precisely at the North Pole, with
length l. We denote g/l = ω. The angular velocity of the Earth is Ω.
    John is an observer looking at the pendulum from a fixed point in space. At t = 0, he sees the
pendulum at position (A, 0) and with velocity (0, V ) in the x-y (horizontal) plane.

a. For John, what are the approximate equations describing the motion of the pendulum in the
   x-y plane? You may assume that the amplitude of the oscillations is small. We define the
   coordinates of the pendulum at rest as (0, 0).

                                              Solution
     John’s reference frame is inertial and the point of attachment stationary, so this is a free-
     moving pendulum obeying simple harmonic motion in each axis:

                                      ax + ω 2 x = 0; ay + ω 2 y = 0,                        (A2-1)

b. What will the coordinates x, y in Jonh’s frame be at a later time t?

                                              Solution
     The solution to Eq.(A2-1) is the familiar simple harmonic motion. In general, if the dis-
     placement is r = A cos ωt, then the velocity is v = −Aω sin ωt. Using the inital conditions


                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                      Part A                                               5



     provided, we have:
                                                             V
                                  x(t) = A cos(ωt); y(t) =     sin(ωt).                     (A2-2)
                                                             ω
     Note that this corresponds to an ellipse.


c. Ella, an observer resides at the North Pole, is also looking at the pendulum. What are the
   coordinates, x̃(t) and ỹ(t), as observed by Ella? Assume that at time t = 0, the coordinate
   systems of John’s and Ella’s overlap.

                                             Solution
     In the rotating frame, we have x̃ = x cos(Ωt) + y sin(Ωt), ỹ = −x sin(Ωt) + y cos(Ωt) (with
     2π/Ω = 24 hrs). Plugging in the form of x(t) and y(t) we find:

                                                          V
                              x̃ = A cos(ωt) cos(Ωt) +      sin(ωt) sin(Ωt),                (A2-3)
                                                          ω
     and:
                                                          V
                             ỹ = −A cos(ωt) sin(Ωt) +      sin(ωt) cos(Ωt).                (A2-4)
                                                          ω


d. What is the speed of the pendulum bob observed by Ella at t = 0?

                                             Solution
     In John’s frame, the velocity at this time is (0, V ). To get the velocity in Ella’s frame, we
     can either take the derivative of the result of part (c) directly, or transform the velocity
     obtained in John’s frame to Ella’s frame, not forgetting to add the term −ΩA to the initial
     velocity in the y axis. This gives

                           ṽx ≈ (V − ΩA) sin(Ωt); ṽy = (V − ΩA) cos(Ωt).                  (A2-5)

     At t = 0, ṽx = 0 and ṽy = V − ΩA.


e. Find the initial conditions for A, V , such that as measured in Ella’s frame:

   i. the pendulum passes precisely through its resting position.

                                                 Solution
        Considering the motion in John’s frame, clearly the pendulum will pass through the
        resting position if and only if V = 0.


  ii. it has a “spike” at the points of maximal amplitude (see figure below) instead of a “rounded”
      trajectory.




                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                    Part A                                               6




       Figure 2: Two possible trajectories with “spike”(left) and more “rounded” (right).



                                               Solution
        To have a spike, we need the velocity to vanish at the extremal points in Ella’s frame.
        This gives the condition:
                                               V = ΩA.                                   (A2-6)
        Note that in Ella’s frame, this implies releasing the pendulum from rest at some ampli-
        tude.

  In a rotating frame, a fictitious force known as the Coriolis force acts on the particles. For
  Foucault’s pendulum, the Coriolis force acts primarily in the horizontal plane, in a direction
  perpendicular to the velocity of the mass in the Earth’s frame with magnitude:

                                           F = 2mΩv · sin θ,                                   (A2-7)

  where m and v are the pendulum’s mass and its velocity, and θ the latitude (90◦ for the North
  Pole). Note that when the velocity changes sign, so does the Coriolis force.

f. How long would it take for the plane of oscillation of Foucault’s pendulum to return to its initial
   value in Paris, which has a latitude of about 49◦ .

                                             Solution
    Since the expression for the Coriolis force only depends on the combination Ω sin(θ), and
    since the solution at the North Pole must be π/Ω = 12hours, the time at a general latitude
    must be:
                                                   π
                                           T =           .                              (A2-8)
                                                Ω sin(θ)
    For Paris, the time is about 16 hours.




                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                    Part A                                                    7



Question A3
Spin Cycle
Cosmonaut Carla is preparing for the Intergalactic 5000 race. She practices for her race on her
handy race track of radius R, carrying a stopwatch with her. Her racecar maintains a constant
speed v during her practices. For this problem, you can assume that v > 0.1c, where c is the speed
of light.

a. How much time elapses on Carla’s stopwatch with each revolution?

                                              Solution
     From time dilation, her clock ticks slower by a factor γ. Therefore, each revolution takes
                                                   p
                                       2πR     2πR 1 − v 2 /c2
                                            =
                                        γv             v
     when measured by Carla’s stopwatch.


     Carla decides to do a fun experiment during her training. She places two stationary clocks
down: Clock A at the center of the race track, i.e. the origin; and Clock B at a point on the race
track denoted as (R, 0). She then begins her training.
     For parts (b) through (d), we define Carla’s inertial reference frame (CIRF) as an inertial
reference frame in which Carla is momentarily at rest, and which has the same origin of coordinates
as the lab frame. Thus, CIRF is a new inertial frame each moment. The times on the clocks and
stopwatch are all calibrated such that they all read 0 in CIRF when she passes by Clock B for the
first time.

b. In the lab frame (the reference frame of the clocks, which are at rest), what is the offset between
   Clock A and Clock B?

                                              Solution
     Carla’s motion is perpendicular to the displacement between Clock A and Clock B when
     they are synchronized in CIRF. Therefore, the simultaneous synchronization in CIRF is
     also simultaneous in the lab frame. Thus, the offset is 0.
     To understand why this offset is 0, you can also imagine placing an lightbulb halfway
     between the two clocks and having it send a light pulse at some known time. In both
     Carla’s frame and the lab frame, the light pulse reaches the two clocks simultaneously.


c. If Carla’s stopwatch measures an elapsed time τ , what does Clock A measure in CIRF?

                                              Solution
     By symmetry, the speed at which the center clock√ticks according to CIRF cannot change.
                                                     2πR   1−v 2 /c2
     In one revolution, Carla’s stopwatch measures         v         , while the center clock measures
     2πR
      v . Then,


                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                     Part A                                                   8




                                                        τ
                                          tA (τ ) = p            .
                                                     1 − v 2 /c2


d. If Carla’s stopwatch measures an elapsed time τ , what does Clock B measure in CIRF?

                                               Solution
     The readings on Clock B and on Clock A are not necessarily identical once Carla moves
     through the circle (because her motion becomes more parallel with the displacement between
     the two clocks, and thus simultaneity is lost).
     Suppose Carla is at (R cos θ, R sin θ), so her velocity is given by (−v sin θ, v cos θ). Suppose
     we place a light bulb between the two clocks and having it propagate a light pulse. In the
     lab frame, the light pulse reaches the two clocks simultaneously. In CIRF, the math is a
     little more complicated.
     We first rotate our lab coordinates so that â = − sin θx̂ + cos θŷ, and b̂ = cos θx̂ + sin θŷ.
     We now give the coordinates of the clocks and bulb in the rotated lab frame: Clock A,
     (a, b) = (0, 0); Clock B, (a, b) = (−R sin θ, R cos θ); bulb, (a, b) = (−R sin θ, R cos θ)/2. In
     the lab frame, a light pulse is emitted at

                                t = 0, a = −(R/2) sin θ, b = (R/2) cos θ.

     The light pulse reaches Clock A at

                                          t = R/2, a = 0, b = 0,

     and Clock B at
                                   t = R/2, a = −R sin θ, b = R cos θ.

     Under a Lorentz tranformation from the lab frame to CIRF, we have that the light pulse
     reaches Clock A at t0 = γR/2 and Clock B at t0 = γR/2 + γvR sin θ. Thus, Clock B reads
     the same time as Clock A with offset γvR sin θ in the reference frame moving at va = v,
     vb = 0. Note that Clock A ticks slower by a factor of γ in this frame. Therefore, the time
     on clock B is vR sin θ behind the time on clock A.
     Then,
                                                             τ
                          tB (τ ) = tA (τ ) − vR sin θ = p            − vR sin θ.
                                                          1 − v 2 /c2

     (This is the answer we expect from the rear clock ahead effect!) Finally, we use that θ = ωτ
     and ω = 2πT , where T is the period in Carla’s frame. Then,
                                                                         !
                                         τ         vR            vτ
                          tB (τ ) = p             − 2 sin   p              .
                                      1 − v 2 /c2   c      R 1 − v 2 /c2




                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                     Part B                                               9



Part B
Question B1
String Cheese
a. When a faucet is turned on, a stream of water flows down with initial speed v0 at the spout.
   For this problem, we define y to be the vertical coordinate with its positive direction pointing
   up.
  Assuming the water speed is only affected by gravity as the water falls, find the speed of water
  v(y) at height y. Define the zero of y such that the equation for v 2 has only one term and find
  y0 , the height of the spout.

                                               Solution
     We can use energy conservation to answer this question. For a bit of water with mass m,
     the total energy E is the sum of the kinetic and gravitational potential energies,
                                              1
                                           E = mv 2 + mgy.                                  (B1-1)
                                              2

     (With this sign convention, g ≈ 10 m/s2 is positive. As y decreases, so does the potential
     energy.)
     As the bit of water falls, its energy remains constant, and is equal to the initial value of
                                              1
                                           E = mv02 + mgy0 .                                (B1-2)
                                              2

     Equating eliminating E from equations B1-1 and B1-2, we have
                                     1             1
                                       mv 2 + mgy = mv02 + mgy0 ,
                                     2             2
     and solving for v, we get                q
                                         v=    v02 + 2g(y0 − y)

     The equation for v 2 has three terms, but we were asked to choose the zero of y such that
     there is only one. Evidently, two of the terms must cancel, and these must be the two
     constant terms, since the final term varies with y.
     That means we need
                                              v02 + 2gy0 = 0.

     Solving for y0 , the vertical position of the spout is

                                                       −v02
                                                y0 =        .
                                                       2g




                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                     Part B                                             10



     With this choice of the zero of y, the equation for v simplifies to
                                                   p
                                              v=          −2gy .                         (B1-3)

     We note that the result of this equation is real because y < 0 at the spout, and decreases
     as the water falls, so this equation shows that v is real and increases as the water falls.


b. Assume that the stream of water falling from the faucet is cylindrically symmetric about a
   vertical axis through the center of the stream. Also assume that the volume of water per unit
   time exiting the spout is constant, and that the shape of the stream of water is constant over
   time.
   In this case, the radius r of the stream of water is a function of vertical position y. Let the
   radius at the faucet be r0 . Using your result from part (a), find r(y).
   If r(y) is not constant, it implies that the water has some radial velocity during its fall, in
   contradiction to our assumptions in part (a) that the motion is purely vertical. You may assume
   throughout the problem that any such radial velocity is negligibly small.

                                              Solution
     The same volume of water must fall through any horizontal cross-section of the stream each
     second because water doesn’t disappear during its fall, and its density if constant. That
     volume per unit time Q is the cross-sectional area of the stream multiplied by the speed of
     the water in the vertical direction. As an equation,

                                               Q = vπr2 .                                (B1-4)

     Q is the same at all y, and is equal to its initial value of

                                               Q = v0 πr02 .                             (B1-5)

     Eliminating Q from B1-4 and B1-5 and solving for r gives
                                                r
                                                  v0
                                         r = r0      .
                                                   v

     Plugging in our equation B1-3 for v,
                                                      s
                                                      4    v02
                                             r = r0            .
                                                          −2gy


c. The water-air interface has some surface tension, σ. The effect of surface tension is to change
   the pressure in the stream according to the Young-Laplace equation,
                                                        
                                                   1   1
                                         ∆P = σ      +     ,
                                                   r R


                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                   Part B                                               11



   where ∆P is the difference in pressure between the stream and the atmosphere and R is the
   radius of curvature of the vertical profile of the stream, visualized below. (R < 0 for the stream
   of water; the radius of curvature would be positive only if the stream profile curved inwards.)

                                                       |R|




   For this part of the problem, we assume that |R|  |r|, so that the curvature of the vertical
   profile of the stream can be ignored. Also assume that water is incompressible.
   Accounting for the pressure in the stream, find a new equation relating for r(y) in terms of
   σ, r0 , v0 , and ρ, the density of water. You do not need to solve the equation for r.

                                             Solution
     Our conservation of energy approach from part (b) needs to be modified to account for the
     work done against pressure. As we look further down in the stream, the radius is smaller.
     This means the pressure is higher there, and the water is slowed compared to when we
     assumed only gravity acted on the water.
     The result of accounting for changes in pressure in a flow where no energy is dissipated is
     the Bernoulli equation,
                                 1 2             1
                                   ρv + ρgy + P = ρv02 + ρgy0 + P0
                                 2               2
     where P0 is the pressure in the stream at the spout.
     Using the Young-Laplace equation to replace P and P0 , we have
                                 1 2         σ 1             σ
                                   ρv + ρgy + = ρv02 + ρgy0 + .
                                 2           r 2             r0

                               v2           r2
     If we substitute in y0 = − 0 and v = v0 02 , this becomes
                               2g           r

                               1 2 r04        σ 1         v2  σ
                                 ρv0 4 + ρgy + = ρv02 − ρg 0 + .
                               2    r         r 2         2g r0

     This may be simplified to

                                    1 2 r04
                                                                   
                                                            1   1
                                     ρv     + ρgy = σ         −         .
                                    2 0 r4                  r0 r


d. After falling for some distance, the water stream usually breaks into smaller droplets. This
   occurs because small random perturbations to the shape of the stream grow over time, eventually
   breaking the stream into apart.
                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                   Part B                                             12



  For the rest of this problem we ignore the change in the radius of the stream due to changing
  speed of the water, as considered earlier. Instead, we examine small random variations in the
  radius of the stream.
  Random variations can be broken down into a sum of sinusoidal variations in stream radius,
  each with a different wavenumber k. We can analyze these different sinusoidal variations inde-
  pendently.
  Consider a stream of water whose radius obeys

                                       r(y) = r0 + A cos(ky),

  where A  r0 is the perturbation amplitude. To analyze such a stream, it is sufficient to consider
  only the thickest and thinnest parts of the stream.
  Accounting for both sources of curvature, find a condition on r0 and k such that the size of
  perturbations increases with time.


                                              r(y) |R(y)|




                                              Solution
    If the size of the perturbation increases with time, water must be flowing from the thin parts
    of the stream to the thick parts. For that to happen, the pressure needs to be higher in the
    thin parts of the stream than in the thick parts of the stream so that the pressure gradient
    will force water towards the thick parts, eventually breaking the stream into droplets.
    We consider a small patch with side lengths h on the surface of the stream at the thinnest
    part of the stream. The pressure is
                                                           
                                                 1       1
                                  ∆Pthin = σ        +         .
                                               rthin Rthin

    And at the thickest part of the stream,
                                                                          
                                                       1            1
                                   ∆Pthick = σ                +                .
                                                     rthick       Rthick

    We are looking for the wavenumbers such that

                                         ∆Pthin > ∆Pthick .


                  Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                    Part B                                           13



   Using the Young-Laplace equation, this becomes
                                                             
                               1       1            1      1
                         σ        +         >σ          +         .
                             rthin Rthin          rthick Rthick

   Dropping the common factor σ,
                                                       
                              1    1          1      1
                                 +       >        +         .
                            rthin Rthin     rthick Rthick

   To simplify this further, we will need to find r and R in terms of A and k, the variables
   given in the problem statement.
   r is the thickness of the stream, which from the equation given, varies sinusoidally. So

                                             rthin = r0 − A.
                                            rthick = r0 + A.

                            1
   We are going to need       to use in the Young Laplace equation, so we make the approximations
                            r
                                              1     1   A
                                                  ≈   + .
                                            rthin   r0 r02
                                             1      1   A
                                                  ≈   − 2.
                                           rthick   r0 r0

                         1
   (To find these, recall   ≈ 1 +  for small .)
                       1−
   The inequality now becomes
                                  1   A   1      1   A    1
                                    + 2+       >   − 2+        .
                                  r0 r0  Rthin   r0 r0  Rthick

   This simplifies to
                                         2A     1     1
                                          2 >       −      .
                                         r0   Rthick Rthin

   Next we need to determine the radius of curvature R of the sinusoidal as a function of k
   and A.




                 Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                   Part B                                               14




   To do this, we compare the sinusoidal function and a circle at small deviations from the
   thickest part of the stream.
   Recall that, for small θ,
                                                     1
                                          cos θ ≈ 1 − θ2 ,
                                                     2
   which means that for small x,
                                                                   
                                                              1 2 2
                               ysinusoidal = A cos(kx) ≈ A 1 − k x .
                                                              2

   Next we consider a circle of radius R. If a particle moves along such a circle at speed v, its
   acceleration is v 2 /R. This means that if the particle moves forward for a short time t, it
                                                      1 v2 2
   moves forward a distance vt and falls a distance        t . If we set vt = x, then the y position
                                                      2R
   of the particle is given by
                                                        1 x2
                                        ycircle ≈ y0 −       .
                                                        2R
                                                                             1
   Comparing ycircle and ysinusoidal , they give the same motion if Ak 2 =     .
                                                                             R
   Then
                                              1
                                                  = −Ak 2 .
                                           Rthin
                                             1
                                                  = Ak 2 .
                                           Rthick

   Putting these into the inequality,
                                             2A
                                                 > 2Ak 2 .
                                             r02

   This simplifies to
                                                       1
                                                  k<      .
                                                       r0
   So the perturbations will grow as long as they have a wavenumber greater than one over
   the radius, or equivalently when the wavelength of the perturbation is longer than the
   circumference of the stream.
   This result was discovered experimentally by Plateau and derived theoretically by Rayleigh.
   The breaking up of a stream into droplets is called the Plateau-Rayleigh instability.




                 Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                    Part B                                             15



Question B2
Mirror Mirror on the Wall
Consider a square room with side length L. The bottom wall of the room is a perfect mirror.* A
perfect monochromatic point source with wavelength λ is placed a distance d above the center of
the mirror, where λ  d  L.

                                                   L




                                                                     L



                                             point source
                             mirror              d

                                                            L
                                                            2


   *Remember that the phase of light reflected by a mirror changes by 180◦ .
a. On the right wall, an interference pattern emerges. What is the distance y between the bottom
   corner and the closest bright fringe above it? Hint: you may assume λ  y  L as well.

                                              Solution
     This setup is essentially a double-slit experiment with the second slit being the image of the
     point source on the other side of the mirror, with the additional phase
                                                                          p shift from the mirror.
     The distance between the source and a spot y on the wall ispgiven by (d − y)2 + (L/2)2 and
     the distance between the image and a spot y is given by (d + y)2 + (L/2)2 . Subtracting
     the two distances and adding in the phase shift gives us approximately
                                                              !
                                        2(d + y)2 2(d − y)2
                                  L/2              −            + λ/2.
                                            L2          L2

     This distance must be a multiple of λ for interference to occur. Then,
                                            4dy
                                                + λ/2 = mλ.
                                             L
     Substituting m = 1 gives us y = λL
                                     8d .


b. You plan on running an experiment to determine λ in a room with L = 40 m, and you know
   that λ is between 550 and 750 nm. You will measure d and y10 (the distance of the tenth fringe
   from the corner) with the same ruler (with markings of 1 mm). At what d should you place the
   point source to minimize your error in your λ measurement? Roughly what is that minimum
   error?
                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                    Part B                                                 16




                                              Solution
     Our error is given by                  s        2                 2
                                     ∆λ          ∆d                ∆y10
                                        =                  +                   .
                                      λ           d                y10
     Note that ∆d = ∆y10 ∼ 0.5 mm. From earlier, note that after substituting m = 10,
     y10 = 19λL
            8d .
     If we assume that λ ∼ 650 nm, note that

                                         y10 d = 6.2 × 10−5 m2 .

     Choosing d = y10 minimizes our error, so we get that d = y10 = 8 mm. Then, ∆λ ≈ 60 nm.
     Note: Accept any reasonable uncertainty in tick spacing ∼ 0.5 mm or ∼ 1 mm.


c. Now suppose we place a transparent hemispherical shell of thickness s and index of refraction
   n over the source such that all light from the source that directly strikes the right wall passes
   through the shell, and all light from the source that strikes the mirror first does not pass through
   the shell.




                                         hemispherical shell

                                                 d

                                                               L
                                                               2



  At what y is the fringe closest to the bottom-most corner now? (You may find it convenient to
  use bxc, the largest integer below x.) What is the spacing between the fringes now? Ignore any
  reflections or diffraction from the hemispherical shell.

                                              Solution
     Now the optical distance between the source and a spot y on the wall is increased by (n−1)s.
     Then, we need
                                    4dy
                                         − (n − 1)s + λ/2 = mλ.
                                     L
                                        j           k
     To minimize y, we take m to be − (n−1)sλ  −  1
                                                  2 . Then,

                                                                   !
                                L                  (n − 1)s 1      λ
                             y=       (n − 1)s − λ         −     −     .
                                4d                    λ      2     2

     Because (n − 1)s is just an offset, the spacing between the fringes does not change, i.e., the
     spacing is still λL/(4d).


                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                     Part B                                           17



d. Now, suppose the hemispherical shell is removed, and we instead observe the interference pattern
   on the top wall. To the nearest integer, what is the total number of fringes that appear on the
   top wall? You may assume that d  L.

                                               Solution
                                                                              p
                                                                   is given by (L − d)2 + x2
     Now, the distance between the source and a spot x on the wall p
     and the distance between the image and a spot on the wall is (L + d)2 + x2 + λ/2. We
     do not assume x  L this time. Subtracting the two distances gives us roughly
                            r                         r
                  p
                     2    2
                                   2dL     p
                                               2    2
                                                             2dL
                   L +x 1+ 2           2
                                         − L +x 1− 2                 + λ/2 = mλ.
                                 L +x                       L + x2
     Taylor expanding gives us
                                            2dL
                                       √           = (m − 1/2)λ.
                                           L2 + x2
     Then,                                    s
                                                      4d2
                                      x = ±L                    − 1.
                                                  (m − 1/2)2 λ2
     For x to be physical, we require that m − 1/2 ≤ 2d/λ.
     The maximum allowed x is L/2. Then,
                                  s
                                               4d2          1
                                                         −1≤ ,
                                           (m − 1/2)2 λ2    2
     so
                                               4d2        5
                                                    2  2
                                                         ≤ .
                                           (m − 1/2) λ    4
     Thus, we have that
                                                       4d
                                            m − 1/2 ≥ √ .
                                                        5λ
     Then, the number of fringes is                        
                                               2d        2
                                            2·       1− √     ,
                                               λ          5
     where the extra factor of 2 comes from there being two sides to the interference pattern.




                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                     Part B                                              18



Question B3
Real Expansion
Consider a “real” monatomic gas consisting of N atoms of negligible volume and mass m in equilib-
rium inside a closed cubical container of volume V . In this “real” gas, the attractive forces between
atoms is small but not negligible. Because these atoms have negligible volume, you can assume
that the atoms do not collide with each other for the entirety of the problem.

a. Consider an atom in the interior of this container of volume V . Suppose the potential energy of
   the interaction is given by                
                                              0           r<d
                                      u(r) =        6
                                              − d        r≥d
                                                     r


   where d  V 1/3 is the minimum allowed distance between two atoms. Assume the gas is
   uniformly distributed within the container, what is the average potential energy of this atom?
                                      2πd3 
   Write your answer in terms of a0 =        , N , and V .
                                        3

                                               Solution
     The density of the gas is given by N/V . In a spherical shell of radius r and thickness ∆r,
     there are (4πr2 ∆r)N/V atoms. The potential energy is given by

                                       ∆U = −(4πr2 ∆r)N/V d6 /r6 .

     Then, the total potential energy is given by
                                 Z ∞
                            U=       −(4πr2 dr)N/V d6 /r6 = −2a0 N/V.
                                   d



b. What is the average potential energy of an atom near the boundary of the box? Assume that
   there is no interaction between atoms near the boundary and the box itself.

                                               Solution
     Now only half of the shell of radius r is full of gas, and the other half is outside of the box.
     This mean that the potential energy is lessened by a factor of two, to −a0 N/V.


c. Using Bernoulli’s law P + U + ρv 2 /2 = constant, with pressure P , potential energy density U ,
   mass density ρ and fluid velocity v, what is the pressure at the boundary of the box? Assume
   the interior pressure is given by the ideal gas law.

                                               Solution
                                                         2
     The potential energy density difference is −a0 NV2
                                                        . Since there is no velocity difference, this
     is also the pressure difference. If the pressure on the interior is NVkT , then the pressure on



                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                      Part B                                                 19



                           2
     the box is NVkT − a0 N
                          V2


d. Assuming most atoms are in the interior of the box, what is the total energy of the atoms in
   the box?

                                              Solution
     The total kinetic energy is 23 N kT . The total potential energy is −a0 N 2 /V (we drop a factor
     of two to avoid double-counting). So the total energy is 32 N kT − a0 N 2 /V.

    Now consider an insulated partitioned container with two sections, each of volume V . We fill
one side of the container with N atoms of this “real” gas at temperature T , which the other side
being a vacuum. We then quickly remove the partition and let the gas expand to fill the entirety
of the partitioned container. During this expansion, the energy of the gas remains unchanged.
e. What is the final temperature of the gas after the expansion?

                                              Solution
     Naively, we might say that the total potential energy of the gas is −2a0 N 2 /V , but to avoid
     double-counting, we divide by 2 and instead arrive at −a0 N 2 /V . Then, the quantity

                                            3         a0 N 2
                                         E = N kB T −
                                            2           V
     is conserved. Therefore,
                                                        a0 N
                                            T0 = T −         .
                                                       3kB V

f. What is the increase in the entropy of the universe as a result of the free expansion? Give your
                              0
   answer to first order in VakBNT .

                                              Solution
     The entropy of the surroundings do not increase as a result of the free expansion (no heat is
     dumped to the surroundings, and the surroundings remain in thermal equilibrium). How-
     ever, the entropy of the gas does increase because the gas is momentarily not in equilibrium.
     Therefore, we just have to compute the increase in entropy of the gas.
     Because entropy is a state function, we compute this change in entropy by constructing
     a reversible process between the initial and final states of the expansion, and computing
     the change in entropy for this process. Consider constant energy reversible expansion of
     this gas. For this process, the work done by the gas is equal to the heat the gas takes in.
     Therefore,
                                                    pdv
                                             dS =       ,
                                                     t
     where we use lowercase letters to denote the quantities during the reversible expansion.
     Recall that
                                                 a0 N 2
                                          pv +          = N kB t.
                                                    v

                   Copyright c 2020 American Association of Physics Teachers
2020 USAPhO                                     Part B                        20



   If the energy of the system is E, then,

                                      3      3a0 N 2 a0 N 2
                                        pv +        −       = E.
                                      2        2v       v
   Then,
                                                 2E a0 N 2
                                          p=        −      .
                                                 3v   3v 2
   From our expression of energy,
                                                2 E + a0 N 2 /v
                                         t=                     .
                                                3    N kB
   Then,
                                                       a0 N 3 kB
                                 Z 2V
                                         EN kB
                          ∆S =                     −                   dv .
                                  V     Ev + a0 N 2 2(Ev 2 + a0 N 2 v)
   Taylor expanding gives us

                                                       3a0 N 3 kB
                                         Z 2V
                                                N kB
                                 ∆S =                −            dv .
                                          V      v       2Ev 2

   Integrating gives us
                                                           3a0 N 3 kB
                                    ∆S = N kB log 2 −                 .
                                                             4EV
   Using that E ≈ 3/2N kB T , we arrive at

                                                              a0 N 2
                                      ∆S = N kB log 2 −              .
                                                              2V T




                Copyright c 2020 American Association of Physics Teachers
