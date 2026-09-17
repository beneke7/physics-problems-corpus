---
id: solution-document-apho-2017-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2017/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2017-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2017/T1_S.pdf."
---

Vortices in Superfluid
                                    MODD-Problems

                                                    May 5, 2017


A. Steady filament (0.75)
Consider a cylindrical beaker (radius R0  a) of superfluid helium and a straight
vertical vortex filament in its center Fig. 2.

A1 (0.25)
Plot the streamlines. Find out the velocity v at a point ~r.




   The streamlines are circular. From the circulation identity (1) it is ob-
   vious that v = κ/r.

       • Streamlines are plotted correctly (one at least) . . . . . . . . . . . . . . . 0.1
       • v = kr . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .0.15



A2 (0.5)
Work out the free surface shape (height as a function of coordinate z(~r)) around
the vortex. Free fall acceleration is g. Surface tension can be neglected.




                                                               1
   Consider a thin circular layer of the radius r. Equilibrium condition for
   its surface is given by the requirement

                                                    dz   v2  κ2
                                                g      =    = 3.                                                      (1)
                                                    dr   r   r
   This equation is satisfied by the surface profile

                                                                      κ2
                                              z(r) = [z0 ] −              .                                           (2)
                                                                     2gr2
                           2
                 k
       • tan α = gr 3 or equivalent . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.25


                                2
                      k
       • z = [z0 ] − 2gr 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.25




B. Vortex motion (1.4)
B1 (0.25)
Consider two identical straight vortices initially placed at distance r0 from each
other as shown in Fig. 4. Find initial velocities of the vortices and draw their
trajectories.




   Being advected by each other’s flow field, filaments will rotate around a
   point halfway between them. The velocity is given by v0 = κ/r0 .
       • Trajectories are plotted correctly . . . . . . . . . . . . . . . . . . . . . . . . . . . .0.15

       • Correct expression for velocity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.1



B2 (0.15)
Draw the trajectories of vortices A, B, and C (located in the center).




                                                             2
       • Trajectories are plotted correctly . . . . . . . . . . . . . . . . . . . . . . . . . . . .0.15



B3 (0.4)
Find velocity v(~r) of a vortex positioned at ~r.

   Consider a circular path of radius r  u around the beaker center. The
   circulation along this path is given√by the number of vortices within it
   (vortex density per unit area is (u2 3/2)−1 ):

                                                             πr2
                                        2πrv = 2πκ           √    .                                      (3)
                                                           u2 3/2

   The velocity field
                                                      2πκr
                                               v=       √ .                                              (4)
                                                      u2 3
       • Expression for vortex density . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.2
       • Correct expression for v(r) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.2



B4 (0.35)
Find the distance AB(t) between the vortices A and B at time t. Treat AB(0)
as given.




                                                       3
   This velocity pattern corresponds to the rotation of the lattice as a whole
   around the beaker center with angular velocity
                                                           2πκ
                                                  ω=        √ .                                                  (5)
                                                          u2 3
   AB(t) = AB(0)
       • Correct answer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.35



B5 (0.25)
Work out the “smoothed out” (omitting the lattice structure) free helium surface
shape z(~r).

   The surface shape is

                                                   ω2 r2           2π 2 κ2 r2
                             z(r) = [z0 ] +              = [z0 ] +            .                                  (6)
                                                    2g              3gu4
       • Correct answer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.25



C. Momentum and Energy (1.75)
C1 (0.3)
Consider a nearly rectangular vortex loop b × d, b  d, Fig. 7. Indicate the
direction of its momentum P~ . Find out the momentum magnitude.




   Momentum of a flat loop (see Introduction) is perpendicular to its plane
   and proportional to its area. For a rectangular loop the magnitude is
   P = 2πκρbd.
       • Correct direction of momentum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.15

       • Correct expression for momentum magnitude . . . . . . . . . . . . . . . 0.15




                                                          4
C2 (0.7)
Calculate its energy U .

   To produce equal magnetic and kinetic energy densities B 2 /(2µ0 ) =
                                               √          √
   ρv 2 /2, the magnetic field has to be B = v µ0 ρ = κ µ0 ρ/r. This
                                          p
   field is generated by a current I = 2πκ ρ/µ0 . Energy of the wire loop
   can be found from the inductance U = LI 2 /2. Inductance of a nearly
   rectangular wire loop:
                                                    Z b
                                  Φ                     µ0 I      µ0 d    b
                          L=        = 2dI −1                 dr =      log .                                 (7)
                                  I                   a 2πr        π      a

   This gives for the energy
                                                                     b
                                            U = 2πκ2 ρd log                                                  (8)
                                                                     a
       • Integration limits are ∼ a and b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.2
                                                                                           2
       • Analogy with a magnitude field is used (U = LI2 , L = ΦI ) or
         energy is calculated as W = F dr, where F = dP
                                    R
                                                     dt . . . . . . . . . . . 0.2

       • Correct expression for energy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.3



C3 (0.75)
Suppose we shift a long straight vortex filament by a distance b in x direction, see
Fig. 8. How much does the fluid momentum change? Indicate the momentum
change direction. The filament length (constrained by the vessel walls) is d.




   The momentum change is equal to the momentum of a long rectangular
   loop P = 2πκρbd.

       • The result of C1 used . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.3
       • Momentum change is parallel to Y axis . . . . . . . . . . . . . . . . . . . . . . 0.1
       • Correct direction of momentum change . . . . . . . . . . . . . . . . . . . . . 0.15
       • Correct expression for momentum change magnitude . . . . . . . . . 0.2




                                                        5
   Interestingly, this provides an alternative approach to find the energy
   of such a loop. Namely, if we slowly move one straight vortex in the
   velocity field of another, then we apply a force

                                                            κ   2πκ2 ρd
                            F = 2πκρdv = 2πκρd                =         .                              (9)
                                                            r     r
   The work                         Z b
                                        2πκ2 ρd                  b
                            W =                 dr = 2πκ2 ρd log                                     (10)
                                      a   r                      a
   has to be performed to move it from distance a to b.



D. Trapped charges (2.85)
D1 (0.5)
Consider a straight vortex charged with uniform linear density λ < 0 in a
uniform electric field ~
                       E. Draw the vortex trajectory. Find its velocity as a
function of time.




   Electric force F = Eλd moves the vortex with velocity
                                                F      Eλ
                                       v=           =                                                (11)
                                              2πκρd   2πκρ

                    ~
   perpendicular to E.
      • Trajectory is straight line parallel to Y axis . . . . . . . . . . . . . . . . . . 0.1
      • Correct direction of velocity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .0.2
      • Correct expression for velocity magnitude . . . . . . . . . . . . . . . . . . . . 0.2




                                                     6
D234
A circular vortex loop of radius R0 initially charged with uniform linear density
                                            ~ perpendicular to its plane, opposite
λ < 0 is placed in a uniform electric field E
                   ~
to its momentum P0 .

D2 (0.6)
Draw the trajectory of the loop center C. Find the radius of the loop as a
function of time.




   Electric force upon the loop F = −2πER0 |λ| is constant and fluid mo-
   mentum linearly depends on time

                                   P = P0 + 2πER0 |λ|t = 2π 2 ρR2 κ.                                                       (12)

   The loop is growing and its radius is increasing with time t
                                 s
                                          ER0 |λ|t
                           R = R02 +               .                                                                       (13)
                                            πρκ

       • Trajectory is straight line along y . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.1
       • Correct velocity direction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.15

       • P (t) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.15
       • 2π 2 ρR2 κ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .0.15
       • Correct expression for R(t) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.05




                                                                7
D3 (1.5)
Find its velocity v(t) as a function of time.

   The loop velocity v can be easily found from a relationship between the
   energy change rate and the momentum change rate
                                          dU        dP
                                             = Fv =    v.                                              (14)
                                          dt        dt
   This gives for the velocity
                                               p                        
            dU    κ    R                κ log     R02 + ER0 |λ|t/(πρκ)/a
      v=       ≈    log =                       p                          ≈
            dP   2R    a                       2 R02 + ER0 |λ|t/(πρκ)
                                                              κ log(R0 /a)
                                                         p                     .                       (15)
                                                        2 R02 + ER0 |λ|t/(πρκ)

   This means that the vortex is moving in the direction of the force but
   its velocity is decreasing.

       • Expression for v ∝ R1 log(R) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .1.0
       • Correct expression for v(t) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.5



D4 (0.25)
The field is switched off at a time t∗ when the velocity reaches the value v ∗ =
v(t∗ ). Find the loop velocity v(t) at a later time t > t∗ .

   When E = 0 ⇒ P = const ⇒ R = const ⇒ v = const ⇒ v(t) = v ∗ .
       • Correct expression for v(t) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.25




                                                       8
E. Influence of the boundaries (3.25)
Draw the trajectory of a straight vortex, initially placed at a distance h0 from
a flat wall. Find its velocity as a function of time.


E1 (0.5)

   Well known technique of image charges (currents) in electrostatics (mag-
   netostatics) can be directly used to solve this problem. Namely, the wall
   can be “substituted” with a reflected fictitious vortex on the other side of
   the wall. The velocity distribution of two vortices together in the upper
   semi-space is identical to the one produce by a single vortex above the
   wall. Indeed, the symmetry of the problem ensures that there is no flow
   through the plane of symmetry. Thus, a straight vortex line situated a
   distance h0 above a flat wall with its image behave as a pair of vortices
   of opposite circulation a distance 2h0 apart. This means that the vortex
   moves along the wall with velocity
                                                        κ
                                                v=         .                                          (16)
                                                       2h0




   Illustration of the image method for the straight vortex filament near a
   flat wall
       • Trajectory is plotted correctly . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.15

       • Correct direction of velocity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .0.1
       • Correct expression for velocity magnitude . . . . . . . . . . . . . . . . . . . 0.25




                                                      9
E234
Consider a straight vortex placed in a corner at a distance h0 from both walls.

E2 (0.75)
What is the initial velocity v0 of the vortex?

    The velocity of the filament is given by superposition of the velocities
   ~v1 , ~v2 and ~v3 induced by the image vortices 1, 2 and 3, respectively (see
    Fig. in E3 solution). One readily obtains
                                         κ                κ                               κ
                              v1 =          ,       v2 = √    ,                 v3 =         .
                                        2h0             2 2h0                            2h0

   The modulus of the filament velocity at the initial moment is
                                                               √                          κ
                         v0 = |~v1 + ~v2 + ~v3 | =                 2v1 − v2 =            √
                                                                                        2 2h0

       • Ideas of using superposition principal and technique of image
         charges . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.25
       • Correct expression for initial velocity magnitude . . . . . . . . . . . . . 0.5



E3 (0.5)
Draw the trajectory of the vortex.




   Image vortices in the corner.
       • The trajectory has correct form . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.3
       • Correct direction of initial velocity . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.2




                                                             10
E4 (1.5)
What is the velocity of the vortex v∞ after very long time?

   Energy for the system of vortices is proportional to
                               p
                                 x2 + y 2       x       y
                    Utot ∝ log            − log − log .                                                             (17)
                                   a            a       a
   The energy conservation implies that

                                                      x2 + y 2   2
                                             C=          2 2
                                                               = 2                                                  (18)
                                                       x y      h0
                                                                  √
   is constant along the trajectory. After very long time y → h0 / 2 and
   the vortex velocity is
                                         κ
                                 v∞ = √ .                            (19)
                                       h0 2
      • E = const . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0.5
      • Correct expression for velocity after very long time . . . . . . . . . . . 1.5




                                                           11
