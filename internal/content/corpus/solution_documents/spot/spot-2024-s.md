---
id: solution-document-spot-2024-s
source: spot
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2024_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2024_S.pdf."
---

Wednesday, 13 March 2024, 1:00pm – 5:00pm




                    2024 Selection Test
      for the Asian and International Physics Olympiads




a. This is a 4 hour test. Attempt all questions. The maximum total score is 85; marks
   allocated for each question part are indicated in square brackets.

b. Check that there are a total of 34 printed pages (including this cover page). The last
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




                                    Page 1 of 34
                                                 Wednesday, 13 March 2024, 1:00pm – 5:00pm

Declaration

I declare that I will be fully committed to the training for and participation in the Asian
Physics Olympiad and/or the International Physics Olympiad if selected. I will check first with
the MOE coordinator before taking on additional commitments not listed below.
   Potential limitations to my commitment in the period from now to end-July 2024 are de-
scribed exhaustively in the box below, such as other academic competitions, CCA commit-
ments (school-related or otherwise), travel plans, etc.




Name and signature:




      Question:     1      2      3       4      5      6      7      8      9     Total
      Points:       5      5      7       6     20      10     9      10     13     85
      Score:

                                      Total time: 4 hours



                                         Page 2 of 34
                                                  Wednesday, 13 March 2024, 1:00pm – 5:00pm

1. A thin uniform ring of mass m falls onto a rough floor. The initial velocity of the centre
   of mass is v0 , at an angle θ clockwise from the upwards vertical when it contacts the floor
   (refer to the diagram). It is also rotating with angular velocity ω0 clockwise. The ground
   is rough enough so that the ring achieves no-slipping right after it contacts the ground.
   Denote the coefficient of restitution as e and the gravitational acceleration as g.




   (a) Find the velocity of the ring after the first bounce, and its angular velocity.            [4]
   (b) Suppose the ring bounces straight up after touching the ground. Find the maximum           [1]
       height reached by the ring.


    Solution:

      (a) Let the ring have mass m, and suppose the impulse it receives from the ground
          in the horizontal direction is J. Let the speed of the centre of the ring after the
          bounce is v, making an angle β with the upwards vertical. Also suppose the ring
          rotates with a final angular velocity of ω.
          Using the impulse-momentum theorem in the horizontal direction,

                                        mv sin β − mv0 sin θ = J.

          Using the angular impulse-momentum theorem, the angular impulse received is
          −rJ, therefore
                                     mr2 ω − mr2 ω0 = −rJ.
          The ring achieves the no-slip condition before it lifts off the ground, therefore

                                               v sin β = rω.

          Finally, using the coefficient of restitution,

                                           v cos β = −ev0 cos θ

          noting the sign of cos θ. To eliminate J, we can combine the first two equations:

                              −mvr sin β + mv0 r sin θ = mr2 ω − mr2 ω0 .

          Therefore,
                                      v0 sin θ − v sin β = r(ω − ω0 )
          Substituting in rω = v sin β, we get

                                         v0 sin θ = 2v sin β − rω0



                                         Page 3 of 34
                                             Wednesday, 13 March 2024, 1:00pm – 5:00pm


    Therefore,
                                        1
                               v sin β = (v0 sin θ + rω0 ).
                                        2
    Combining this with v cos β = −ev0 cos θ, we get
                                          1
               p                            q
          v = (v sin β)2 + (v cos β)2 =       4e2 v02 cos2 θ + (v0 sin θ + rω0 )2 .
                                          2
                                        v sin β    v0 sin θ + rω
                              tan β =           =−
                                        v cos β      2v0 cos θ
                                      v sin β   v0 sin θ + rω0
                                 ω=           =                .
                                         r            rω
    Mark scheme:
    1 – Impulse-Momentum Theorem
    1 – COR and No-slip
    1 – Final velocity
    1 – Final angular velocity

(b) If the ring bounces vertically upwards, then β = 0, therefore

                                        v0 sin θ = −rω.

    The maximum height reached is

                                 v2   e2 v02 cos2 θ   e2 (v02 − rω02 )
                           h=       =               =                  .
                                 2g         2g               2g

    Mark scheme:
    1 – Correct value of maximum height




                                    Page 4 of 34
                                                 Wednesday, 13 March 2024, 1:00pm – 5:00pm

2. Two square plates of side length L, constructed from an ideal conducting material, are
   separated by an air gap of h. Both plates are parallel to and have the same projection
   onto the xy-plane. The space between them is permeated with a magnetic field B which is
   parallel to the x-axis. A metal rod of mass m, length h and resistance R is placed parallel to
   the z-axis at the maximum y-position such that it is just touching both plates and allowed
   to fall from rest until time T , when it reaches the minimum y-position and loses contact
   with both plates. Assume that gravity acts in the negative y-direction and that the rod
   remains in contact with both plates for as long as possible.
   (a) Derive the expression for the velocity v of the rod.                                         [4]
   (b) Describe and explain qualitatively the behaviour of the rod after a long time but before     [1]
       time T , assuming T is very large.




                                         Page 5 of 34
                                                             Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                                             marks            comments
 We may calculate the electromotive force ϵ across the
 rod, where σ is the charge density on each plate:

                                        
                                    σ
                      ϵ=       vB −          h
                                    ϵ0                                           M0.5        Correct equation

 Hence, we get the rate of change of σ by calculating
 I = Rϵ and taking dσ   I
                   dt = L2 :


                                  
                  dσ             σ   h
                     =      vB −                                                 M0.5        Correct equation
                  dt             ϵ0 RL2

 From I, we can calculate dv      BIh
                          dt = g − m :




                              σ Bh2
                               
                dv
                   = g − vB −                                                    M0.5        Correct equation
                dt            ϵ0 mR

 Rearranging the expression for dv
                                dt , we get:



                                             
                          mR        dv
             σ = ϵ0                    − g + vB                                  M0.5        Correct equation
                          Bh2       dt


 Substituting this into the expression for dσ
                                           dt , we get:

                                                                                 M0.5        Attempt at substitu-
                                                                                             tion made

        mϵ0 R d2 v          m  dv    mg
            2    2
                   + ϵ0 B +   2
                                    =                                            M0.5        Correct equation
        Bh dt               BL h dt   BL2 h

 This is a first order differential equation in dv
                                                dt . Solving
 and integrating the expression:                                                 M1          Correct expression for
                                                                                             dv
                                                                                             dt




                 mgϵ20 B 2 L4 R
                                                                                
                                                 −     h
                                                     mL2 ϵ0 R
                                                              (m+ϵ0 B 2 hL2 )t                m
            v=                             1−e                                       +                  gt
               (m + ϵ0 B 2 hL2 )2                                                        m + ϵ0 B 2 hL2

As t → ∞, the acceleration of the rod approaches a constant value which is less than g
due to the resistance from continued current flow through the rod, which also approaches a
constant value. (No credit should be given for answers which cite formulae without analysis.)



                                                 Page 6 of 34
                                                  Wednesday, 13 March 2024, 1:00pm – 5:00pm

3. Consider a magnetic monopole at the origin emitting a magnetic field B(r) = rµ3 r. The
   monopole is fixed. An electron of charge e = −1.6 × 10−19 C and mass m is at position
   r, moving with velocity v. In addition there is an arbitrary radially symmetric potential
   field U (r) = U (r) acting on the electron, this is generally to ensure that the electron’s path
   would be bounded. (Hint: U (r) should not appear in your answers for b) to f))
   (a) Write down the equation of motion for the electron. (Hint: write the equation out in           [1]
       the vector form)
   (b) By considering the rate of change of orbital angular momentum L and the quantity               [4]
                                                          r
                                                S = −eµ
                                                          r
        Prove that the quantity J = L + S is conserved. This can be interpreted as “total”
        angular momentum, and S can be interpreted as a spin angular momentum associated
        with the energy field of the system.
    (c) By considering the component of total angular momentum J in the radial direction              [2]
        r̂ = rr , show that the angle between the two vectors are constant. Hence describe the
        surface that the path of the electron must lie on, and sketch some possible paths.




                                          Page 7 of 34
                                                        Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                                    marks   comments
 a) Newton’s second law,

                   mr̈ = −∇U + eṙ × B
                                                                    M1     Correct equation (ei-
 Plugging in the definition of B,                                          ther)
                                    eµ
                  mr̈ = −∇U +          ṙ × r
                                    r3
                                                          Total:     1
 b) Definition of Orbital angular momentum:

                        L = mr × ṙ
                                                                    M1     Correct definition
 Rate of change of L:                                                      Differentiate

             dL
                = mṙ × ṙ + mr × r̈ = mr × r̈
             dt
 The form inspires us to take r× the equation of motion.
                                    eµ
                  mr̈ = −∇U +          ṙ × r
                                    r3
                                                                    M1     Cross product or
                                      eµ                                   torque discussion
            mr × r̈ = −r × ∇U +          r × (ṙ × r)
                                      r3
 For a spherically symmetric potential U, the gradient
 ∇U is radial, hence r × ∇U = 0. In other words,
 a central force exerts no torque and hence does not
 cause change in angular momentum.
 Double cross product formula:

              r × (ṙ × r) = ṙ(r · r) − r(r · ṙ)
                                                                    M1     Full expression for dL
                                                                                               dt
                                                                           or equivalent
                 dL  eµ
                    = 3 ṙr2 − r(r · ṙ)
                                         
                 dt  r
 Now for
                                     r
                         S = −eµ
                                     r                              M1     Full expression for dS
                                                                                               dt
                                                                           or equivalent
                                               
                dS               ṙ r(r · ṙ)
                   = −eµ           −
                dt               r    r3
 Hence for J = L + S,
                    dJ   dL dS
                       =    +    =0
                    dt   dt   dt

                                                          Total:     4

                                            Page 8 of 34
                                                   Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
                                                              marks   comments

 c) Let the angle between J and r̂ be θ. Then
                                                               M1     Dot product
                      J · r̂ = J cos θ

 Meanwhile, L · r̂ = 0 due to the cross product in the
 definition of L. Hence,

            J · r̂ = (L + S) · r̂ = S · r̂ = −eµ

 This is a positive constant. Combined with the fact
 that the total angular momentum J is conserved, this
 means that cos θ is constant with acute angle θ. Hence
 the particle travels along a cone of angle θ around J.




                                                               A1     Cone




 Note: any path sketched on the cone is acceptable
 since the confining potential U(r) is not specified.

                                                     Total:     2




                                          Page 9 of 34
                                               Wednesday, 13 March 2024, 1:00pm – 5:00pm

4. A mass is attached to the end of a massless rod of length l, which is then raised to near-
   vertical then released. Let the angle between the rod and the vertical be ϵ ≪ 1.
   (a) For motion between ϵ ≪ θ0 ≪ 1, find the equation of motion of the pendulum. Hence,       [4]
       find the time taken to reach θ0 , and the angular velocity when it reaches θ0 .
   (b) By considering the motion
                            q of the pendulum past θ0 , justify that the period of the          [2]
                                 l    1
       pendulum T tends to 4     g ln ϵ as ϵ → 0




                                       Page 10 of 34
                                                  Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                              marks   comments
 Writing the torques acting on the pendulum and with
 θ << 1, we have
                                                                     Correct equation
                       ml2 θ̈ = mglθ
                                                                     of motion
 Solving the DE with the boundary conditions θ(t =
 0) = ϵ, θ̇(t = 0) = 0, we obtain
                                                                     Equation solved
             ϵ Ωt
                                            r 
                                              g               M1     correctly, correct
                       −Ωt
                           
       θ=       e +e         = ϵ cosh Ωt Ω =                         expression obtained
             2                                l

 At θ0 >> ϵ, we obtain

               ϵ          1 2θ0  1 θ0
            θ ≈ eΩt ⇒ t0 ≈ ln   ≈ ln
               2          Ω   ϵ  Ω   ϵ                        A1     Correct limit taken

 It is possible to obtain the velocity by differentiating,
 but it is easier to take an energy approach. We have                Correct equation
                                                                     Give accordingly if
                                     1                        M1
             mgl cos ϵ = mgl cos θ0 + ml2 θ̇2                        alternative method is
                                     2
                                                                     used
 Solving for θ̇, we obtain
                                q                                    Correct equation
              θ̇(θ = θ0 ) = Ω    θ02 − ϵ2 ≈ Ωθ0                      Other methods must
                                                              A1
                                                                     have correct coefficient


                                                                     Explanation must
 Now, the upper limit of the time taken to move through              quantitatively show
 θ = θ0 to θ = π is                                                  that the period is
                                                              M1
                               π                                     dominated by the
                         t1 ≤
                              Ωθ0                                    first part of the motion
                                                                     in the limit
 This is a constant independent of ϵ, so as ϵ → 0, t0 ≫
 t1 .
 Using ϵ ≪ θ0 , the period in the limit is then
                                         4 1
              T = 4(t0 + t1 ) = 4t0 =     ln                         Correct formula
                                         Ω ϵ                  A1
                                                                     for period
                                                    Total:     6




                                          Page 11 of 34
                                                 Wednesday, 13 March 2024, 1:00pm – 5:00pm

5. The 1997 Nobel Prize in Physics was awarded to Steven Chu, Claude Cohen-Tannoudji and
   William D. Phillips for development of methods to cool and trap atoms with laser light.
   The laser light cools the particles down to the µK temperature range, allowing particles to
   move at speeds less than 1 km/h. At these speeds, scientists can study individual atoms
   with great accuracy, opening the gateway to a deeper understanding of the properties of
   gases at low temperatures.
  In this problem, you will be analysing the basics of laser cooling and a method of cooling
  using the Doppler effect.
  Part A: Radiation Pressure
  An atom can be represented as an electron of charge q and mass m attached to a spring
  with spring constant mω02 , experiencing a damping force proportional to its speed with
  proportionality constant mγ. It is driven by an electromagnetic field E = E0 cos ωt, whose
  frequency is very close to the resonant frequency of the atom: defining the detuning ∆ =
  ω − ω0 , we may write |∆| ≪ ω. Also assume that γ ≪ ω.
   (a) Write down the differential equation satisfied by the displacement x(t) of the electron      [4]
       from its equilibrium position. Hence, find x0 and ϕ in terms of q, m, ∆, γ, E0 , and ω0 .
   (b) Find the average power ⟨P ⟩ absorbed over one cycle of the electromagnetic field, ex-        [2]
       pressing your answer in terms of q, m, γ, E0 and ∆.

  The saturation intensity Is is the intensity of the laser beam which causes the atom to
  spend one-quarter of its time in the excited state, and it is a quantity which appears widely
  in literature on laser cooling:
                                            ε0 mcγ 2 ℏω
                                      Is =              .
                                                q2

   (c) Show that the average rate R at which photons are absorbed by an atom is                     [1]

                                                  I/Is
                                          R=                γ
                                               1 + 4∆2 /γ 2

   (d) Find an expression for the force on an atom due to resonant absorption.                      [1]

  Part B: Doppler Cooling
  For gases to reach low temperatures, their atoms must achieve low velocities as well. This
  damping mechanism is different from the radiation damping γ described earlier, and relies
  on the Doppler effect on an atom’s interaction with its surrounding electromagnetic field.
  Consider the case where the atom is moving in one dimension (x), and the electromagnetic
  field is propagating in the +x-direction with angular frequency ω.
   (e) Write down the angular frequency ω ′ the particle sees the field oscillating at while it     [2]
       is moving at velocity v. Show that for v ≪ c, the Doppler shift δωD = ω ′ − ω can be
       expressed as −kv, where k is the wave number of the electromagnetic wave.

  This means that when you calculate the force, you can take into account the Doppler effect
  by replacing ∆ with ∆ + δωD .
  It is clear that when an atom travels into an incoming laser beam, it will slow down.
  However, if the radiative forces continue to act, it will accelerate in the opposite direction.
  We want the atom to experience no further force after coming to a stop. This will be
  possible if we illuminate the atom with two identical laser beams propagating in opposite
  directions.



                                        Page 12 of 34
                                                Wednesday, 13 March 2024, 1:00pm – 5:00pm

 (f) Calculate the net force F on an atom moving with velocity v. Express your answer in      [3]
     terms of quantities defined earlier. Furthermore, show that in the low-velocity limit
     (kv ≪ |∆| and γ), the net force F can be written as F = −αv, where α is to be
     determined.
Part C: Heating Due to Photon Recoil
The damping force causes the atom to slow down. However, there is another heating
mechanism – the atom absorbs a photon from the electromagnetic field, making a transition
from the ground state to the excited state. The excited state is not stable, so the atom
returns to the ground state by emitting a photon in a random direction (+ or – in one
dimension). In both instances, momentum is not transferred to the atom in a continuous
manner, but rather in units of ℏk.
This quantized gains and losses of energy causes the momentum of the atom to take the path
of a random walk. In a given time interval, the number of steps is the number of photons
absorbed and emitted. Take the probability of absorption of a photon from either beam to
be equally likely. Thus, each absorption and emission results in two steps of the random
walk. In a time interval dt, the atom executes dN = 2Rtot dt steps, where Rtot = R+ + R−
is the total absorption rate from the two beams.
For this one-dimensional walk, the average momentum remains zero, but the RMS momen-
tum equals the square root of the number of steps times the step size:
                                    p        √
                                      ⟨p2 ⟩ = N ℏk.

(g) Calculate the rate at which the atom’s energy increases due to the heating.               [2]
(h) Find the equilibrium temperature T associated with this atomic motion.                    [3]
 (i) Determine the resulting minimum temperature Tmin and the corresponding ∆ when            [2]
     this is achieved.


 Solution:

    a. The electron experiences a spring force −mω02 x, a drag force −mγ ẋ and a driving
       force qE0 cos ωt. Therefore, Newton’s 2nd Law can be written as
                                                         q
                                   ẍ + γ ẋ + ω02 x =     E0 cos ωt.
                                                         m
       Now substitute in the solution x(t) = x0 cos(ωt − ϕ) to obtain
                                                                                q
             −ω 2 x0 cos(ωt − ϕ) − γωx0 sin(ωt − ϕ) + ω02 x0 cos(ωt − ϕ) =        E0 cos ωt
                                                                                m
       Simplifying and expanding,

                       − (ω 2 − ω02 )x0 cos ωt cos ϕ + (ω 2 − ω02 )x0 sin ωt sin ϕ
                            − γωx0 sin ωt cos ϕ − γωx0 cos ωt sin ϕ
                               q
                            = E0 cos ωt.
                              m
       Comparing coefficients, the cos ωt and sin ωt terms give
                                                                    q
                              x0 [(ω 2 − ω02 ) cos ϕ + γω sin ϕ] =    E0
                                                                   m
                              x0 [(ω 2 − ω02 ) sin ϕ − γω cos ϕ] = 0



                                      Page 13 of 34
                                                Wednesday, 13 March 2024, 1:00pm – 5:00pm


  Squaring both equations and adding,
                                                                 q        2
                         x20 [(ω 2 − ω0 )2 cos ϕ + γ 2 ω 2 ] =        E0        .
                                                                  m
  Therefore,
                      q                   q                  q
                     m E0                 m E0              qm
                                                               E0
           x0 = p       2
                                   ≈ q                  =
                   2      2   2
                 (ω − ω0 ) + γ ω 2                                  2
                                       (2∆ω)2 + γ 2 ω 2   2ω ∆2 + γ                 4

  Solving the second equation yields
                                         γω              γω     γ
                           tan ϕ =                 ≈−       =−    .
                                      ω 2 − ω02         2ω∆    2∆

  Mark scheme:
  1 – Newton’s 2nd Law
  1 – Correct equations to compare coefficients
  1 – Correct x0
  1 – Correct ϕ

b. The power absorbed is

                    P = F v = qE0 cos ωt · (−ωx0 sin(ωt − ϕ))
                       = −qE0 ωx0 (cos ωt sin ωt cos ϕ − cos2 ωt sin ϕ).

  Averaging P over one cycle, we note that ⟨sin ωt⟩ = 0 while ⟨cos2 ωt⟩ = 12 , thus
                                          1
                                    ⟨P ⟩ = qE0 ωx0 sin ϕ.
                                          2
  Therefore,
                                      q    2
                                mγω 2 m    2
                                        2 E0    q2    γ
                        ⟨P ⟩ =                ≈            E2.
                                 2    2
                               2ω0 (4∆ + γ )2   2m 4∆ + γ 2 0
                                                     2


  Mark scheme:
  1 – Writing down expression for power in terms of trigonometric functions
  1 – Correct final answer

c. The rate at which photons are absorbed is the power absorbed divided by the
   energy carried per photon. We know that the energy carried per photon is hc
                                                                            λ =
   hω
   2π = ℏω, thus the rate at which photons are absorbed is
                                 2                
                                   q     γ       2    1
                            R=          2    2
                                               E0 ·     .
                                  2m 4∆ + γ          ℏω

  Since I = 21 cε0 E 2 , we have
                                         I     q 2 E02
                                            =          .
                                         Is   2mℏωγ 2
  Therefore,
                                                  I/Is
                                      R=                    γ.
                                               1 + 4∆2 /γ 2



                                   Page 14 of 34
                                            Wednesday, 13 March 2024, 1:00pm – 5:00pm


  Mark scheme:
  0.5 – Rate at which photons are absorbed
  0.5 – Correct expression for I
d. The force is given by multiplying the rate R by the momentum per photon given
   by p = ℏω
           c :
                                         I/Is     ℏωγ
                                 F =                  .
                                      1 + 4∆2 /γ 2 c
  1 – Final answer
e. The Doppler effect causes the particle to see the field oscillating with angular
   velocity                              r
                                   ′        c−v
                                  ω =ω           .
                                            c+v
   Performing binomial expansion, we have
                      v 1/2       v            v −1/2         v
                    1−        ≈1− ,           1+          ≈1− .
                       c           2c             c              2c
  Multiplying the two quantities together,
                                v             vω
                    ω′ = ω 1 −        ⇒ δωD = −    = −kv.
                                 c               c
  Mark scheme:
  1 – Correct Doppler effect expression
  1 – Correct binomial expansion
f. The forces from the + and − beams can be written as
                                          R± ℏω
                               F± = ±           = ±R± ℏk.
                                            c
  Since
                                                I/Is
                               R± =                          ,
                                         1 + 4(∆ ∓ kv)2 /γ 2
  the net force is
                                                                         
                                I             1             1
              F = F+ + F− =        ℏkγ     4(∆−kv)2
                                                     −    4(∆+kv)2
                                                                   .
                                Is       1+     2      1+     2
                                                    γ               γ

  For low velocities, binomial expansion of the denominators yields
                           1                    1
                                 2   ≈         2
                     1 + 4(∆∓kv)
                            γ2
                                         1 + 4∆ ∓8∆kv
                                                 γ2
                                                 γ2
                                     =
                                       γ 2 + 4∆2 ∓ 8∆kv
                                                   γ2
                                     =                           
                                       (γ 2 + 4∆2 ) 1 ∓ γ 28∆kv
                                                            +4∆ 2

                                              2
                                                                   
                                            γ             8∆kv
                                     ≈ 2           1 ±                .
                                       γ + 4∆2         γ 2 + 4∆2



                               Page 15 of 34
                                          Wednesday, 13 March 2024, 1:00pm – 5:00pm


  Thus,
                                          I ℏk 2 γ 3 ∆v
                                 F ≈ 16                    .
                                          Is (γ 2 + 4∆2 )2
  Mark scheme:
  1 – Correctly writing down R±
  1 – Net force
  1 – Correct final answer
g. For small v,
                  d⟨p2 ⟩   dN                           4I/Is
                         =     (ℏk)2 = 2Rtot (ℏk)2 =              γ(ℏk)2
                   dt       dt                       1 + 4∆2 /γ 2
  Therefore,
                         dE    1 d⟨p2 ⟩   (ℏk)2  2I/Is
                            =           =                  γ.
                         dt   2m dt         m 1 + 4∆2 /γ 2
  Mark scheme:
                  2
                  ⟩
  1 – Correct d⟨p
               dt
  1 – Correct final answer
h. First we compute dE
                    dt due to cooling.
                                
                dE     d 1     2       dv                  2α
                    =       mv = mv       = F v = −αv 2 = − E.
                dt     dt 2            dt                  m
  Therefore,
                             (ℏk)2    2I/Is        2α
                                           2  2
                                                γ=    E.
                               m 1 + 4∆ /γ          m
  After substituting in the expression for α, we have
                                       ℏ(γ 2 + 4∆2 )
                                  E=−                .
                                            8∆
  Applying the equipartition theorem, each degree of freedom contributes an energy
  kB T /2. Thus, the equilibrium temperature is
                                          ℏ(γ 2 + 4∆2 )
                                  T =−                  .
                                             4∆kB
  Mark scheme:
  1 – Finding dE
              dt due to cooling and solving for E
  1 – Applying equipartition theorem
  1 – Correct equilibrium temperature
i. Note that                                             
                              ℏγ         γ     2(−∆)               ℏγ
                         T =                 +                 ≥      .
                             2kB       2(−∆)     γ                 kB
                        γ
  Equality holds when 2(−∆) = 2(−∆)          γ
                                γ , or ∆ = − 2 .
  Mark scheme:
  1 – Finding ∆ = − γ2
  1 – Correct Tmin



                                Page 16 of 34
                                         Wednesday, 13 March 2024, 1:00pm – 5:00pm


For a comprehensive discussion, see: Gould, P. (1997). Laser cooling of atoms to the
Doppler limit. American Journal of Physics, 65(11), 1120–1123. https://doi.org/
10.1119/1.18740




                                 Page 17 of 34
                                                 Wednesday, 13 March 2024, 1:00pm – 5:00pm

6. An electron is confined to move along the circumference of a thin ring with radius r.
   (a) Find the allowed values of its kinetic energy, giving your answer in terms of the electron   [2]
       mass m and Planck’s constant h.
  The ring is now placed in a constant (but not necessarily uniform) magnetic field directed
  into the page, such that the magnetic flux through the ring is Φ.




                                                   r




                              Figure 1: Illustration of the ring.

   (b) By considering the energy contribution from the current of the moving charge, show           [2]
       that the total energy of the system (up to an additive constant) is given by
                                                                    2
                                        p2
                                                       
                                                1             eΦ
                                     E = eff =             p+
                                        2m     2m             2πr

       where p is the electron’s momentum (treating anticlockwise as positive) and −e is the
       charge of the electron.
   (c) Treating peff as the total effective momentum of the electron’s quantum wave, find the       [2]
       magnitude and direction of the current flowing in the ring in the ground state(s) and
                                                                        h
       first excited state(s) of the electron’s kinetic energy when Φ = 2e .
  A typical electron double-slit experiment is set up as shown in the diagram below, with a
  solenoid placed just behind the two slits. The width of each slit is small but finite. The
  velocity of the electron beam is v, the distance between the slits is d, and the distance from
  the slits to the screen is L ≫ d. The magnetic field of the solenoid is directed into the page,
  and the total magnetic flux through the solenoid is Φ = N2eh , where N is the number of coils
  in the solenoid.

                                         Double Slit                       Screen



                                                       Solenoid                  y
             Source
                                            d     Φ


                                                               L

                Figure 2: Illustration of the electron double-slit experiment.

   (d) Sketch the intensity of electrons detected as a function of the vertical position y along    [4]
       the screen. Include the distance between extrema in the sketch.



                                        Page 18 of 34
                                                Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                             marks   comments
 Similar to the typical wave-in-a-box setting, the elec-
 tron can be treated as a standing wave, with wavelength
 given by the de Broglie wavelength.
                                                            M0.2    Correct equation
                             h
                          λ=
                             p
 The boundary condition on the ring is then that the
 circumference of the ring must be an integer multiple
 of the wavelength, in order for standing waves to form.    M0.5    Correct equation

                        2πr = nλ

              p2   n2 h2                                    A0.3    Correct answer
 Hence, E =      = 2 2 .
              2m  8π mr
                                                  Total:     1.0




Solution:
 Marking scheme                                             marks   comments
 The magnitude of the current due to the electron is
 given by its charge over its period of motion:
                      e    ev    ep                          M1     Correct equation
                 I=     =     =
                      T   2πr   2πmr
 From inductors, the energy required to add a current
 dI to a loop with magnetic flux Φ is dE = Φ dI. Hence,
 the additional energy due to the current is
                          Z I
                 |∆E| =         Φ dI = ΦI                    M1     Correct equation
                           0

 [Note: The expression U = −⃗  µ·B⃗ for potential energy
 of an ideal dipole in a uniform external field gives the
 same answer. Credit should only be provided if the
 student considers each infinitesimal dipole and local
 magnetic field and explicitly show that it reduces to
 the expression for the flux.]
 The sign of the additional energy can be deduced
 to be positive by noting that when the momentum
 is positive (anticlockwise), the current is clockwise,
 which produces a B field aligned with the external
 field, thereby increasing the stored magnetic energy.

             p2                         eΦ 2
                                           
                  eΦ     1                                  A0.5    Correct answer
 Thus, E =      +    p=              p+       + const.
             2m 2πmr    2m              2πr
                                                Total:       2.0
                                        Page 19 of 34
                                                Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                            marks   comments
 With peff as the new momentum of the quantum wave,
 the de Broglie wavelength is now
                        h        h                         M0.4    Correct equation
                  λ=        =      eΦ
                       peff   p + 2πr

 Applying the same condition 2πr = nλ as part (a), the
 quantised momentum is now
                                                         M0.4    Correct equation
                 nh − eΦ     h       1
            p=            =       n−
                   2πr      2πr      2
 The kinetic energy and current are then given by

                   p2    h2      1 2
                                  
             KE =     = 2 2 n−
                   2m  8π mr     2
                                    
                  ep      eh       1
            I=−       =− 2 2 n−
                2πmr    4π mr      2

 It follows that the ground states of KE occur when
 n = 0, +1 and the first excited states occur when n =
 −1, +2. This corresponds to a current of
                  (
                    ± 8π2eh
                          mr2
                              , n = 0, +1
              I=        3eh                                A1.2    0.3 per correct answer
                    ± 8π2 mr2 , n = −1, +2

                                                  Total:    2.0




                                        Page 20 of 34
                                                     Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                                 marks   comments
 The key idea here is to consider the closed loop formed
 by a pair of electrons going through either slit and in-
 terfering at the same point on the screen (shown in
 Figure 2). The result from (b) can be generalised to a                 Correct idea of forming
                                                                 M1
 loop of arbitrary shape,                                               a closed loop
                                      eΦ
                       peff = p ±
                                     Lloop

 The sign in peff changes between the top and bottom
 paths (clockwise and anticlockwise respectively). This
 gives a phase difference between both paths of
                                                  
                   2πpeff        2π           eΦ
           ϕtop =         Ltop =    Ltop p −
                     h            h          Lloop
                                                  
                   2πpeff        2π           eΦ
           ϕbot =         Lbot =    Lbot p +
                     h            h          Lloop
                   2πp             2πe
     ∴ (∆ϕ)t−b =       (∆L)t−b −       Φ
                    h               h
 The first term is exactly the same as regular double-
 slit diffraction. The flux through the loop is 1/N times
                                             h
 the total flux through the solenoid, Φ = 2e   , hence the
 second term is exactly −π; the electron passing through                Correctly identifying
 the bottom slit obtains a relative phase shift of +π,           M1     that the bottom slit
 which translates the diffraction pattern down by half a                has additional phase
 period.                                                                +π and hence y = 0 is
                                                                      a minima
                                  1
                   d sin θ = n −      λ
                                  2
                                         
                              hL        1
                  ymaxima ≈        n−
                             mvd        2
 Finally, since the slits have finite width, there is a large
 single-slit decay envelope centered about the origin.
 Thus, the final graph should look like:
                                                                        1 - Distance between
         1                                                       A2     maxima
        0.8                                                              1 - sinc2 y envelope
                                                                        about origin
        0.6
 I/I0
        0.4

        0.2

         0
         −3−2.5−2−1.5−1−0.5 0 0.5 1 1.5 2 2.5 3
                             hL
                         y/( mvd )
                                                       Total:     4


                                             Page 21 of 34
                                               Wednesday, 13 March 2024, 1:00pm – 5:00pm

7. A straw with its bottom end covered is placed in a large tank of water such that its
 bottom end is H below the surface of the water. At t = 0 the barrier (dashed) vanishes.




                                                      H




(a) Use Bernoulli’s principle to find the total time it takes for the water to reach the surface   [2]
    level inside the tube. Explain why this value may be inaccurate.
(b) The Navier-Stokes equation (1) can be used to obtain a more accurate solution.                 [2]

                                   ∂⃗u                  ∇P
                                       + (⃗u · ∇)⃗u = −    + ⃗g                             (1)
                                   ∂t                    ρ

    Assuming irrotational flow such that ⃗u = ∇ϕ(x, y, z, t). Show that the equation reduces
    to (2) where C is a constant. (Hint: You may want to use the fact that A  ⃗ × (∇ × A)
                                                                                       ⃗ =
    1    2    ⃗      ⃗                      ⃗
    2 ∇A − (A · ∇)A for any vector field A.)

                                     ∂ϕ u2 P
                                        +   + + gz = C                                      (2)
                                     ∂t   2  ρ

(c) Find the function ϕ for the region inside the straw in terms of velocity of the water          [2]
    surface at the top of the straw and z (the vertical distance from the bottom of the
    straw). Explain how you arrived at the answer.
(d) Using (2) determine the maximum height that the water can reach above the surround-            [3]
                                                                     2
    ing water level outside the straw. (Hint: The substitution r = v2z may be useful)




                                      Page 22 of 34
                                                  Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                                  marks   comments
 (a) Consider a point on the surface of the water and
 a point at the top of the water inside the straw why
 it is y above the bottom of the straw. The equation
 becomes
                   1 2                                            M1     Correct equation
                     ρv = ρg(H − y)
                   2
 Which gives us
                   dy p
                      = 2g(H − y)
                   dt
               Z H                Z t
                        dy
                    p           =     dt
                0     2g(H − y)    0
                                            s
                                                2H                A1     Correct answer
 Carrying out the integration we get t =           .
                                                 g
                                                        Total:     2
 (b) Irrotational flow implies that ∇ × ⃗u = 0.
                                                                  M1     Use the identity
 Which means that (⃗u · ∇)⃗u = 12 ∇u2 . Noting that ∇ −
 gz = ⃗g, (1) becomes

            ∂      1       P
               ∇ϕ + ∇u2 + ∇ + ∇gz = 0                             A1     Final answer
            ∂t     2       ρ
 Factoring the ∇ out we get desired equation.
                                                        Total:     2

 (c) By the continuity equation we know that the ve-
                                               ∂
 locity inside the straw is constant. Thus, ∂z   ϕ = uz           M1     uz is uniform
 where uz is the velocity of the water inside the straw.
 Integrating the expression we get ϕ = uz z (up to a
 function of x, y, t).
                                                                  A1     Correct answer
                                                        Total:     2




                                       Page 23 of 34
                                                      Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                                   marks   comments
 (d) Once again considering a point at the water surface
 outside the straw and at the water surface inside the
 straw. We know that the ϕ = 0 at the outside surface              M1     Correct boundary con-
 and that the pressures are equal.                                        ditions
                         u2
                  z u˙z + z + gz = gH
                          2
 The final ODE to solve becomes
                             ż 2
                    z z̈ +        + gz = gH
                              2
                                                              2
 To solve it, we use the substitutions w = ż and r = w2
                                    1 dw2
 which gives us that z̈ = w dwdz = 2 dz . This gives us
 the previous equation in a form suitable for applying
 the integration factor method                                            Rewrite/Solve     the
                                                                   M1
                    dr                                                    equation
                z      + r + g(z − H) = 0
                    dz

                     Z 0             Z 0
                           d(zr) =           g(H − z)dz
                      0               zmax
                           2
                          zmax
        = g(Hzmax −            )=0                                 A1     Correct answer
                            2

 Thus the final answer is zmax = 2H and the water
 jumps up above the surrounding level.
                                            Total:                  3




                                              Page 24 of 34
                                                 Wednesday, 13 March 2024, 1:00pm – 5:00pm

8. A cyclic process with one mole of an ideal polyatomic gas appears as a circle on the pressure-
   volume (P − V ) diagram. Coordinates of the circle centre are (P0 ,V0 ), the diameter along
   the pressure axis is 2∆P, and the diameter along the volume axis is 2∆V.




   (a) Determine all pairs of diametrically opposite points of the circle (P, V ) with equal heat   [6]
       capacities. Calculate these heat capacities in terms of known quantities, CV , Cp and
       R.
   (b) Compare heat capacities of two arbitrary diametrically opposite points lying in quad-        [1]
       rants 2 and 4 of the circle. Which of these points has greater heat capacity? Why?
   (c) Form a pair of simultaneous (algebraic) equations that you would use to determine the        [3]
       values (P, V ) where entropy is maximum and minimum during the cycle. Comment,
       with mathematical justification, whether these points are diametrically opposite.




                                        Page 25 of 34
                                                    Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                               marks   comments
 (a)
 Consider one mole of an ideal gas. By definition, its        M0.5
 heat capacity is
                          dQ   dU + P dV                              Correct equation
                   C=        =
                          dT      dT
 For an ideal gas,

                           dU = CV dT

 Also,
                                                              M0.5
                     RdT = P dV + V dP                                Correct equation

 Therefore, the heat capacity is
                          P dV              R
         C = CV + R               = CV +
                      P dV + V dP        1 + VP dV
                                                dP


 Tangents to a circle at any diametrically opposite
 points A and B have the same slope:
                          dP        dP                                          dP
                                                              M0.5    Realising dV is same
                      (      )A = (    )B
                          dV        dV
                                              dP
 Therefore, heat capacities can be equal when dV either
 vanishes or diverges. This corresponds to
                                                               A1     Correct answer for C
           (V0 , P0 − ∆P ), (V0 , P0 + ∆P ), C = CP


           (V0 − ∆V, P0 ), (V0 + ∆V, P0 ), C = CV              A1     Correct answer for C

 The equality also takes place if
                            VA   VB
                               =
                            PA   PB
 i.e. when points A, B and the circle centre lie on the
 same straight line passing through the origin. There-
 fore,
                       VA   VB   V0                           M0.5    Correct equation
                          =    =
                       PA   PB   P0




                                            Page 26 of 34
                                                     Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                                 marks   comments




 Consider the process in dimensionless coordinates as
 shown above. We get

                  dP/∆P     V0 /∆V
                         =−
                  dV /∆V    P0 /∆P
 and so
                      dP   V0 ∆P 2                               M1     Correct equation
                         =− (    )
                      dV   P0 ∆V
 Hence, the heat capacity for the last pair of points is
                                     R
               C = CV +                                          A1     Correct answer for C
                             1 − ( PV00 )2 ( ∆V
                                             ∆P 2
                                                )

 Note: If PV00 = ∆V
                 ∆P
                     , then C = ±∞ i.e. the tangent
 points belong to isotherms.                                     E1     Extra point if spotted
                                                 Total:          6
 (b)
 Let us compare heat capacities at points C and D lying
 in quadrants 2 and 4, respectively. Since
                      dP        dP                                           dP
                                                                        Note dV positive
                  (      )C = (    )D > 0,
                      dV        dV
 heat capacity is greater when the ratio VP is smaller:

                          VC   VD
                             <                                          Compare VP
                          PC   PD

 Hence, CC > CD                                                  A1     Correct answer
                                                       Total:     1




                                             Page 27 of 34
                                                         Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
(c) Note that at the maxmimum and minimum entropy, dQ = 0. This is equivalent to an
adiabatic process, and our extrema should hence be tangent to adiabatic curves. For the
gradients, we have:
                                        dP      PV γ
                                           = −γ γ+1
                                        dV      V
                                              γP
                                           =−
                                               V
                                                                                   V − V0   γP
Hence, our first equation equating gradients (in dimensionless coordinates) is            =    .
                                                                                   P − P0   V
With the final constraint that the point lies on the circle,
                                           2                   2
                                   P − P0                V − V0
                                                 +                     =1
                                    ∆P                    ∆V

1 - Notice that the points are tangent to the adiabat
1 - Equation for the gradient
1 - Equation for the circle




                                        Page 28 of 34
                                                   Wednesday, 13 March 2024, 1:00pm – 5:00pm

9. From special relativity, it is known that energy and mass are equivalent and interchangeable.
   Some of the results of general relativity can be obtained by treating the gravitational mass
   as mg = cF2 , where F is the total non-potential energy of the particle.
   (a) Consider a photon fired radially outwards from a large mass M . If the frequency               [2]
       received by an observer infinitely far away is f0 , determine its frequency f (r) as a
       function of the radial distance r ≫ GM
                                            c2
                                               away from the large mass.
    (b) Hence, find the effective Lorentz factor γg (r) by which time and length are dilated and      [1]
        contracted with respect to an observer at infinity, and determine the speed v at which
        a non-accelerating frame would experience the same effect.
   To account for these effects, under weak gravity r ≫ GM
                                                                
                                                            c2
                                                                  , the usual invariant proper time
   interval can be modified to
                                                                            
                       2          2GM       2    1         2GM         2    2 2
                     dτ = 1 −             dt − 2       1+            dr + r dθ
                                   rc2          c           rc2

   where the coordinates (r, θ) are the usual polar coordinates with mass M at the origin, and
   all coordinates are taken with respect to an observer at infinity.
   A particle of mass m is fired towards an object of mass M from very far away with impact
   parameter b ≫ GMc2
                       and initial velocity u, such that the particle’s trajectory is deflected by
   an angle ϕ ≪ 1.
                                                                  ϕ
                           b

                                                        M


   (c) Show that the total energy of the particle is given by                                         [3]

                                            c2
                                     E2 =       m2 c2 + α2 p2r + r2 p2θ
                                                                        
                                            α 2


        where px = m dx                                                             GM
                       dτ is the x-component of the particle’s momentum and α = 1 + rc2 .
        [Hint: If ds2 = A dx2 + B dy 2 , then ⃗a · ⃗b = Aax bx + Bay by .]
   (d) Show that this effectively reduces to an additional central force acting on the particle       [3]
       of the form
                                                  d⃗
                                                   p    β
                                             F⃗ =    = − 4 r̂
                                                  dτ    r
        where β is some constant you should determine.
   (e) Hence or otherwise, determine the angle of deflection ϕ to leading order in GM
                                                                                   bc2
                                                                                       and            [4]
       compare your results for a massive particle (u ≪ c) and a photon (u = c) to the
       classical case (ϕ = 2GM
                            bu2
                                ).
       You may make use of the following integral without proof:
                                   Z ∞             (
                                           dx        2 (k = 32 )
                                         2     k
                                                 =   4
                                    −∞ (x + 1)       3  (k = 52 )




                                         Page 29 of 34
                                               Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                            marks    comments
 Using the formula given, for a photon
                            E   hf
                     mg =      = 2                         M0.5     Correct energy of pho-
                            c2   c
                                                                    ton
 The simplest approach is then to use energy conserva-
 tion;
                     GM mg                                 M1 0.5   Correct   equation    of
            E = hf −         = hf0                                  COE
                        r
                         −1
            f        GM            GM
               = 1−    2
                              ≈1+
            f0       rc            rc2
 Alternatively, one can obtain the same result using N2L
 and integrating (using dr
                         dt = c):

              dp     GM mg
                 =−                                        M2 0.5   Correct application of
              dt        r2
              dp     GM p                                           N2L
            c    =−
         Z p dr′      cr2 Z
             dp      GM r dr′
               ′
                 = −
          p0 p        c2 ∞ r′2
                             
               p           GM         GM
                 = exp            ≈1+
              p0           rc2        rc2
          
               GM
                                                                   Correct answer [−0.5
 Thus, f = 1 +       f0 .                                   A1
                                                                    if approximation for
               rc2
                                                                    large r not carried out]
                                                  Total:    1.0




                                      Page 30 of 34
                                                  Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                                marks   comments
 Treating the photon from (a) as a wave, an observer
                                                        1
 at r will observe the time between pulses as T = f (r)    ,
                                            c
 and the length between pulses as λ = f (r) . Since the
 pulses are an observable effect, it should be coordinate
 invariant. From special relativity, the speed of light c is
 also coordinate invariant. Hence, we can conclude that
 the time dilation/length contraction factor is given by

                      T0      λ0      GM
              γg =         =      =1+                          A0.5    Correct answer
                     T (r)   λ(r)     rc2
 The corresponding speed v is then
                                                                       Correct answer [−0.5
                   s            r
                          1       2GM                          A0.5
              v =c 1− 2 ≈                                              if approximation for
                         γg         r
                                                                       large r not carried out]
 which is the escape velocity at distance r.
                                                      Total:    1.0


                                                 ye




                                         Page 31 of 34
                                                       Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                                   marks   comments
 The non-potential energy of the particle is given by
                                                                  M0.5    Relativistic energy for-
                    F 2 = m2 c4 + p2 c2
                                                                          mula used
 Using the hint given, noticing that the term in square
 brackets in the expression for dτ 2 corresponds to the
 spatial distance ds2 = α2 dr2 + r2 dθ2 ,                         M0.5    Correct expression
              p2 = p⃗ · p⃗ = α2 p2r + r2 p2θ
              F 2 = c2 (m2 c2 + α2 p2r + r2 p2θ )

 Using the formula for mg stated earlier, the total energy
 including the gravitational potential is
                                                                  M0.5    Considered     gravita-
                        GM F   F                                          tional potential
                  E=F −    2
                             ≈
                         rc    α

                c2                                                A0.5    Correct answer
 Hence, E 2 =       m2 c2 + α2 p2r + r2 p2θ .
                                           
                α 2

                                                         Total:    2.0




Solution:
 Marking scheme                                                   marks   comments
 Using the conservation of angular momentum,

                    L = γu mbu = r2 pθ                             M1     Conservation of angu-
                        γu mbu                                            lar momentum used
                   pθ =
                           r2
 Rearranging the expression in part (d),

                                γu2 m2 b2 u2
                                          
              2GM                                                         Recognizing energy ex-
   p2r + 1 −           m  2 2
                           c  +                = const             M1
               rc2                   r2                                   pression
        p2r   GM m       L2     GM mb2 u2
            −       +         −                = const
        2m      r      2mr2 (c2 − u2 )r3
 The first 3 terms should be recognized as the kinetic
 energy and effective potential energy for gravitation.
 The additional term thus represents a potential energy,                  Differentiating to find
                                                                   M1
 which corresponds to a force of                                          force
                     ∂U       3GM mb u         2 2
              F⃗ = −    r̂ = − 2          r̂
                     ∂r       (c − u2 )r4

              3GM mb2 u2
 Hence, β =              .
                c2 − u2
                                                         Total:    2.0

                                               Page 32 of 34
                                                 Wednesday, 13 March 2024, 1:00pm – 5:00pm



Solution:
 Marking scheme                                               marks   comments
 To get the deflection to leading order, we can first
 suppose the particle is not deflected at all, then
                                                              M0.5    Correct or equivalent
 calculate the momentum imparted to it along said
                                                                      approximation used
 trajectory (Born approximation).
 By symmetry, the net impulse exerted in the horizontal
 direction is 0. Since the force is already small, time di-
 lation due to gravity can be ignored, hence only the SR              Attempt to calculate
                   dt
 factor remains ( dτ  ≈ γu ). The impulse in the vertical      M1
                                                                      vertical momentum or
 direction is given by                                                velocity
                      Z           Z ∞
                                        Fy
              ∆vy = Fy dτ ≈                 dx
                                   −∞ γu u

 Resolving the force into the y-direction,

                           3GM mb2 u2
                                          
             GM m                                x
  Fy = −            +                        √
            x2 + b2 (c2 − u2 )(x2 + b2 )2      x + b2
                                                2


 hence the impulse in the vertical direction is                M1    Correct expression
          GM mb ∞                               3b2 u2
                  Z                                            
                                1
 ∆py = −                          2 3/2
                                        + 2                       dx
            γu u            2
                   −∞ (x + b )           (c − u2 )(x2 + b2 )5/2
          GM m ∞                         3u2
                 Z                                       
                              1                    1
     =−                               +                      dξ
           γu bu −∞ (ξ 2 + 1)3/2 c2 − u2 (ξ 2 + 1)5/2
                          2u2
                                 
          2GM m
     =−             1+ 2
           γu bu        c − u2
                          u2
                             
          2GM m
     =−           γu 1 + 2
             bu            c
 The initial momentum is px = γu mu, hence the angle
 of deflection is given by
                                                               A1     Correct answer
                                     u2
                                       
                 py   2GM
              ϕ=    =              1+ 2
                 px    bu2           c

 Plugging in the cases as requested,
                       (
                         2GM
                          bu2
                              , v≪c
                  ϕ = 4GM                                     A0.5    Relevant comments
                          bc2
                              , v=c

 As expected, it reduces to the classical case in the limit
 v ≪ c, but for a photon, it is twice the classical result.
 (This factor of 2 is due to photons travelling through
 time and space equally, but we have ignored the ‘time
 component’ in the classical limit.)
                                                    Total:     4.0




                                        Page 33 of 34
        Wednesday, 13 March 2024, 1:00pm – 5:00pm




Page 34 of 34
