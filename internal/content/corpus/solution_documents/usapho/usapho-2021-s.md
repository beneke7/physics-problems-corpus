---
id: solution-document-usapho-2021-s
source: usapho
kind: official_answer_sheet
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2021_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2021_S.pdf."
---

2021 USAPhO                               General Information                                              1




            AAPT UNITED STATES PHYSICS TEAM
             AIP 2021

                             USA Physics Olympiad Exam

                      Information About The 2021 USAPhO
   • The 2021 USAPhO consists of two 90-minute parts taking place on two separate days:

         – Part A: Monday, April 19 from 4:00 pm to 5:30 pm Eastern Time
         – Part B: Wednesday, April 21 from 4:00 pm to 5:30 pm Eastern Time

      The exam is hosted by AAPT on the platform provided by Art of Problem Solving.

   • This year, we require the exam to be proctored by either your high school science/physics
     teacher, or your parent/guardian.

   • Before you start the exam, make sure you are provided with blank paper, both for your
     answers and scratch work, writing utensils, a hand-held scientific calculator with memory
     and programs erased, and a computer for you to log into the USAPhO testing page. Then
     agree to the Honor Policy, and download the USAPhO exam papers.

   • At the end of the exam, you have 20 minutes to upload solutions to all of the problems for
     that part. For each problem, scan or photograph each page of your solution, combine them
     into a single PDF file, and upload them on the testing platform.

   • USAPhO graders are not responsible for missing pages or illegible handwriting. No later
     submissions will be accepted.

Thank you for participating in the USAPhO this year under such extraordinary circumstances. We
hope that you and your family stay safe, and that you continue to encourage more students like
you to study physics and try out the F = ma exam hosted by AAPT.




We acknowledge the following people for their contributions to this year’s exam (in alphabetical order):

JiaJia Dong, Mark Eichenlaub, Abijith Krishnan, Kye W. Shi, Brian Skinner, Mike Winer, and Kevin Zhou.




                    Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                      Part A                                              2



Part A
Question A1
Toffee Pudding
A box of mass m is at rest on a horizontal floor. The coefficients of static and kinetic friction
between the box and the floor are µ0 and µ (less than µ0 ), respectively. One end of a spring
with spring constant k is attached to the right side of the box, and the spring is initially held at
its relaxed length. The other end of the spring is pulled horizontally to the right with constant
velocity v0 . As a result, the box will move in fits and starts. Assume the box does not tip over.
a. Calculate the distance s that the spring is stretched beyond its rest length when the box is just
   about to start moving.

                                                Solution
     This is when the spring force equals the maximal static friction, ks = µ0 mg, so s = µ0 mg/k.


b. Let the box start at x = 0, and let t = 0 be the time the box first starts moving. Find the
   acceleration of the box in terms of x, t, v0 , s, and the other parameters, while the box is moving.

                                                Solution
     The net stretching of the spring is s + v0 t − x, leading to a rightward force ks. When the
     box is moving, it is always moving to the right, so the kinetic friction force µmg is always
     in the leftward direction, which means

                                        ma = k(s + v0 t − x) − µmg

     which means
                                              k
                                         a=     (s + v0 t − x) − µg.
                                              m

The position of the box as a function of time t as defined in part (b) is
                                     v0
                            x(t) =      (ωt − sin ωt) + (1 − r)s(1 − cos ωt),
                                     ω
           p
where ω = k/m and r = µ/µ0 . This expression applies as long as the box is still moving, and
you can use it in the parts below. Express all your answers in terms of v0 , ω, s, and r.

c. Find the time t0 when the box stops for the first time.

                                                Solution
     Taking the derivative, the velocity of the box is

                                 v = v0 (1 − cos ωt) + (1 − r)sω sin ωt.

     The box stops when this is equal to zero for the first time. There are several ways to


                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                      Part A                                              3



     evaluate this condition. First, we can use half-angle identities to find
                                             ωt                  ωt    ωt
                              0 = 2v0 sin2      + 2(1 − r)sω sin    cos .
                                             2                   2     2
     As a result, the box stops when

                                               ωt    (1 − r)sω
                                         tan      =−           .
                                               2         v0
     Using a basic property of the tangent function,
                                                
                                              ωt     (1 − r)sω
                                     tan π −       =           .
                                              2          v0

     Solving for t, we conclude that

                                       2π − 2α                   (1 − r)sω
                                t0 =           ,    α = tan−1              .
                                          ω                          v0
                                                 
     Note that we cancelled a factor of sin ωt/2 , which has a zero at t = 2π/ω. However, this
     is a larger time than the one we just found, so it is irrelevant.
     Another way to arrive at the answer is to rewrite the original condition as

                                        1 = cos ωt − tan α sin ωt.

     Squaring both sides and using some trigonometric identities gives
                                                         2 tan α
                                         tan ωt = −               .
                                                       1 − tan2 α
     This can then be further simplified using the tangent half-angle identity, upon which we
     recover the same result as above.

d. For what values of r will the spring always be at least as long as its rest length?

                                                Solution
     The spring is stretched by ∆` = s + v0 t − x. Inserting the solution for x, we have
                                               v0
                                 ∆` = rs +        sin ωt + (1 − r)s cos ωt.
                                               ω
     The most convenient way to write this is to use the sine addition formula in reverse, getting
                                                     v0
                                    ∆` = rs +              sin(ωt + α).
                                                   ω cos α
     The minimum stretch thus occurs when
                                                          3π
                                               ωt + α =      .
                                                           2



                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                      Part A                                                 4



     Of course, we should check that this time is before the box stops; comparing with the answer
     to part (c) shows that it is. For the spring to always be as long as its rest length, we need
     the stretch at this time to be nonnegative,
                                                    v0
                                           rs −           ≥ 0.
                                                  ω cos α
     Solving the triangle, we have
                                                     v0
                                     cos α = p 2                .
                                              v0 + ((1 − r)sω)2

     Plugging this in and simplifying gives the answer,
                                                               2 !
                                            1              v0
                                         r≥       1+                   .
                                            2              sω

     Note that if v0 /sω is too large, then it is impossible to satisfy this condition, since we need
     to have r < 1.

e. After the box stops, how long will it stay at rest before starting to move again?

                                              Solution
     Using a result we found in part (d), the stretch is
                                                   v0
                                     ∆` = rs +           sin(ωt0 + α)
                                                 ω cos α
     when the box stops. Plugging in the value of t0 found in part (c),
                                   v0                       v0
                     ∆` = rs +           sin(2π − α) = rs −    tan α = (2r − 1)s.
                                 ω cos α                    ω
     The box starts to move again when the stretch becomes s, so the time is

                                       s − (2r − 1)s   2(1 − r)s
                                                     =           .
                                             v0            v0
     The pattern of motion investigated in this problem is known as “stick-slip” and occurs in
     many practical contexts.




                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                   Part A                                              5



Question A2
Flashlight
Alice the Mad Scientist, travelling in her flying car at height h above the ground, shoots a beam of
muons at the ground. Bob, observing from the ground at distance R  h from Alice’s car, decides
to check some facts about special relativity. Assume the muons travel extremely close to the speed
of light in Alice’s frame.

                                                          Alice


                                                     muon beam         h
                          Bob                  R


                                            (side view)

a. Alice’s car flies at horizontal speed v = βc. Alice shoots her muon beam straight down, in her
   reference frame. Express your answers in terms of β, h, R and fundamental constants.

   i. What is the horizontal velocity of the muons in Bob’s reference frame?

                                              Solution
        The muons were fired straight down in Alice’s frame, so in Bob’s frame their horizontal
        velocity is the same as Alice’s, v = βc.
        One way to see this is to imagine Alice was carrying a vertical pole with her. In her
        reference frame, the muons travel along the length of the pole. This must remain true
        in any frame, so in Bob’s frame the muons must have the same horizontal velocity as
        Alice.

   ii. What is the vertical velocity of the muons in Bob’s reference frame?

                                              Solution
        The
         p muons have speed c and horizontal velocity v = βc, so they have vertical velocity
        c 1 − β 2 by the Pythagorean theorem.


  iii. How long does it take the muons to reach the ground in Bob’s reference frame?

                                              Solution
        The time is the height divided by the vertical velocity of the muons,
                                                   h
                                            ∆t = p       .
                                                c 1 − β2


Alice’s velocity v is directed an angle θ away from Bob. For the rest of the problem, you may
additionally express your answers in terms of θ.
                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                   Part A                                                  6




                            Bob                                     v    θ
                                                            Alice


                                        (view from above)

b. In Bob’s reference frame, how much time is there between when he sees Alice first fire the beam,
   and when he sees the beam first hit the ground? (Hint: remember to account for the travel time
   of light to Bob’s eyes.)

                                             Solution
     In Bob’s frame, during the time the muons take to reach the ground, Alice’s car moves a
     distance ∆r = (v∆t) cos θ away from Bob, which means the light from the muons hitting
     the ground takes an extra time (∆r)/c to reach Bob. Thus, the time interval Bob sees, with
     his eyes, is
                                       v cos θ      h 1 + β cos θ
                                  ∆t +         ∆t =    p          .
                                          c         c    1 − β2


c. In this part, suppose that β = 1/2. Does there exist a value of θ so that the time it takes the
   muons to hit the ground in Alice’s frame is equal to the time taken according to Bob’s eyes, in
   Bob’s frame? If so, find the value of θ in degrees. If not, briefly explain why not.

                                             Solution
     This will be true if
                                        h                    h
                                      p       (1 + β cos θ) = .
                                     c 1 − β2                c
     Solving for θ, we find                        p
                                     θ = cos−1 (    β −2 − 1 − β −1 ).
     This has a solution as long as the argument of the inverse cosine is less than 1. In the case
     β = 0.5, it is, and the result is
                                             θ = 105.5◦ .
     That is, this value of β is low enough so that the motion of Alice towards Bob can make
     up for the time dilation effect.

d. Suppose Alice is carrying a radio transmitter set to frequency f . To what frequency would Bob
   have to set his radio receiver in order to receive Alice’s transmission?

                                             Solution
     The key point is that all the logic in part (b) still works, if we replace Bob’s eyes with the
     radio receiver. Since the frequency of a wave is the inverse of the time between maxima,
                                                 p
                                            0      1 − β2
                                           f =              f.
                                                1 + β cos θ


                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                Part A                                                 7



   This is the two-dimensional relativistic Doppler shift, and the secret point of this problem
   was to derive it in a simple way.




                Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                     Part A                                               8



Question A3
Electroneering
An electron is a particle with charge −q, mass m, and magnetic moment µ. In this problem we will
explore whether a classical model consistent with these properties can also explain the rest energy
E0 = mc2 of the electron.
    Let us describe the electron as a thin spherical shell with uniformly distributed charge and
radius R. Recall that the magnetic moment of a closed, planar loop of current is always equal to
the product of the current and the area of the loop. For the electron, a magnetic moment can be
created by making the sphere rotate around an axis passing through its center.
a. If no point on the sphere’s surface can travel faster than the speed of light (in the frame of the
   sphere’s center of mass), what is the maximum magnetic moment that the sphere can have?
   You may use the integral:               Z π
                                                           4
                                               sin3 θ dθ = .
                                            0              3


                                               Solution
     A point on the sphere’s equator moves at a speed ωR, where ω is the angular velocity of
     rotation. Setting ωR = c gives ω = c/R.
     The spinning sphere can be thought of as a stack of infinitesimal current loops, all of which
     have a magnetic moment pointing in the same direction. Consider making a thin, circular
     slice of the sphere’s surface, corresponding to polar angles in the range (θ, θ + dθ). This
     slice has a radius R sin θ, so that the surface area of the slice is

                                           ds = 2πR sin θ R dθ.

     The charge of the slice is
                                           q ds       q sin θ
                                        dQ = − 2
                                                 =−           .
                                          4πR            2
     Since the charge dQ moves around the rotation axis one time per period T = 2π/ω, the
     corresponding current is
                                         dQ       ωq sin θ
                                    dI =      =−           .
                                          T          4π
     The magnitude of the magnetic moment of this slice is
                                                         1
                                  dµ = π(R sin θ)2 |dI| = qωR2 sin3 θ dθ.
                                                         4
     Using the provided integral, the total magnetic moment is
                                       Z π
                                           1                 1
                                  µ=         qωR2 sin3 θ dθ = qcR.
                                        0 4                  3

     If you weren’t able to do this, you could also have given the answer µ ∼ qcR, which can be
     derived by dimensional analysis, for partial credit.
     Alternative solution: Note that for a uniformly charged ring of mass dm, charge dq,
     and radius r, rotating with angular velocity ω, the ratio of the magnetic moment and the


                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                    Part A                                                 9



     angular momentum is
                                      µ   πr2 (ω dq/2π)   1 dq
                                        =      2
                                                        =      .
                                      L     (r dm)ω       2 dm
     The ratio is independent of r and ω. Since the sphere can be decomposed into such rings,
     the total magnetic moment and total angular momentum must have the same ratio,
                                                µ   1 q
                                                  =     .
                                                L   2m
     Finally, we know that L = (2/3)mR2 ω for a spherical shell. Plugging this in and using
     ω = c/R gives µ = qcR/3 as before, but with no integration required.

b. The electron’s magnetic moment is known to be µ = q~/2m, where ~ is the reduced Planck
   constant. In this model, what is the minimum possible radius of the electron? Express your
   answer in terms of m and fundamental constants.

                                              Solution
     Since the magnetic moment is fixed, and we want the radius to be small, we want the
     electron to be spinning as fast as possible. Thus, the magnetic moment has the value found
     in part (a), and equating this to the known value gives

                                                    3 ~
                                               R=        .
                                                    2 mc
     Again, you can get R ∼ ~/mc by dimensional analysis.

c. Assuming the radius is the value you found in part (b), how much energy is stored in the electric
   field of the electron? Express your answer in terms of E0 = mc2 and the fine structure constant,
                                                 q2       1
                                          α=           ≈     .
                                               4π0 ~c   137


                                              Solution
     For a collection of charges, the total energy stored in the electrostatic field is
                                                   1X
                                            UE =      qi V i
                                                   2
                                                      i

     where Vi is the electric potential at qi . In this case, the total charge is q, and all of the
     charge is at potential q/4π0 R, so
                                                      q2
                                             UE =          .
                                                    8π0 R
     Using the result of part (b),
                                                 1
                                            UE = αE0 .
                                                 3
     Note that you can’t get this answer by dimensional analysis alone, since α is dimensionless.
     (However, if you found R by dimensional analysis, and additionally reasoned that UE could


                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                         Part A                                          10



     depend only on q, 0 , and R, then you could derive UE ∼ αE0 , for partial credit.)


d. Roughly estimate the total energy stored in the magnetic field of the electron, in terms of E0 and
   α. (Hint: one way to do this is to suppose the magnetic field has roughly constant magnitude
   inside the sphere and is negligible outside of it, then estimate the field inside the sphere.)

                                                   Solution
     Following the hint, we can estimate

                                                B2
                                                                      
                                                                4 3
                                            UB ∼ 0                πR
                                                2µ0             3

     where B0 is the typical magnetic field inside the sphere. Actually finding the value of B0
     would require doing some complicated integrals. To get a rough estimate, note that if we
     replaced the sphere with a ring of charge, then at the center of the ring,
                                                        µ0 I   µ0 qc
                                             B0 ∼            ∼       .
                                                         R      R2
     Thus, we have
                                                   2
                                                                µ0 q 2 c2   µ0 mc3 q 2
                                       
                                  1        µ0 qc
                             UB ∼                       R3 ∼              ∼            .
                                  µ0        R2                     R            ~
     To get this in terms of the fine structure constant, we use c2 = 1/µ0 0 , giving

                                                           q2
                                        UB ∼ mc2                ∼ αE0 .
                                                          0 ~c
     An even faster way to get this result is to note that in general, the energy stored in magnetic
     fields tends to be a factor of order (v/c)2 smaller than the energy stored in electric fields,
     where v is the speed of the charge. In this problem the charge is all moving relativistically,
     so we must have UB ∼ UE .


e. How does your estimate for the total energy in the electric and magnetic fields compare to E0 ?

                                                   Solution
     Both UE and UB are much smaller than E0 , by a factor of α  1. Thus, this classical
     model cannot explain the origin of the electron’s rest energy.
     There were many attempts to make classical models of the electron in the early 20th century,
     but they all ran into difficulties like this one. For more on this subject, see chapter II-28 of
     the Feynman lectures.


In parts (a) and (b), you can also give your answers up to a dimensionless multiplicative constant
for partial credit.




                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                     Part B                                              1



Part B
Question B1
Disk Jockey
A disk of uniform mass density, mass M , and radius R sits at rest on a frictionless floor. The disk
is attached to the floor by a frictionless pivot at its center, which keeps the center of the disk in
place, but allows the disk to rotate freely. An ant of mass m  M is initially standing on the edge
of the disk; you may give your answers to leading order in m/M .

a. The ant walks an angular displacement θ along the edge of the disk. Then it walks radially
   inward by a distance h  R, tangentially through an angular displacement −θ, then back to its
   starting point on the disk. Assume the ant walks with constant speed v.

                                                                 h

                                                   θ




   Through what net angle does the disk rotate throughout this process, to leading order in h/R?

                                             Solution
     During the first leg of the trip, the disk has angular velocity
                                                       2mv
                                              ω=−
                                                       MR
     by conservation of angular momentum. Thus, the disk rotates through an angle
                                                2mv θR    2mθ
                                       φ1 = −          =−
                                                MR v       M
     to leading order in m/M . (Here we have neglected the fact that the disk rotates under the
     ant as it is walking, somewhat reducing the distance it has to walk; this changes the answer
     only to higher order in m/M . The exact answer is a more complicated function of m/M .
     By going to “leading order”, we mean we are expanding that exact answer in a series in
     m/M , such as with the binomial theorem, and keeping only the first nonzero term.)
     When the ant is moving radially, ω = 0, so no rotation occurs. On the last leg of the trip,
     the disk has angular velocity
                                              2mv(R − h)
                                        ω=
                                                 M R2


                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                    Part B                                                   2



     which means the disk rotates through an angle

                                                                       h 2
                                                                        
                                 2mv(R − h) θ(R − h)   2mθ
                            φ2 =       2
                                                     =              1−     .
                                   MR          v        M              R

     The net rotation is
                                                         !
                                                   h 2
                                                    
                                      2mθ                    4m hθ
                            φ1 + φ2 =           1−     −1 ≈−       .
                                       M           R         M R

     The sign is not important since it is convention-dependent. (Solutions that were not fully
     approximated were also accepted; however, not approximating early dramatically increases
     the amount of work you have to do.)
     Incidentally, you might have thought the answer had to be zero, by angular momentum
     conservation. After all, when a system has zero total linear momentum, its center of mass
     can’t move. But this problem shows that systems with zero total angular momentum can
     perform net rotations, which is the reason, e.g. that a falling cat can always land on its feet.
     In more advanced physics, this would be described by saying the constraint on the disc’s
     motion coming from angular momentum conservation is not holonomic.

b. Now suppose the ant walks with speed v along a circle of radius r, tangent to its starting point.


                                                        r




   Through what net angle does the disk rotate?

                                              Solution
     There are many ways to do this problem, so we’ll give a selection, starting with a straight-
     forward solution and then considering some increasingly elegant solutions.
     First solution: The overall rotation angle of the disk is
                             Z                Z                Z
                                          2               2m
                         φ = ω dt =              L dt =          r × v dt
                                        M R2             M R2

     where we again work to leading order in m/M , and r and v are the position and velocity
     of the ant. The coordinates of a point on the circle are given by

                                       (r sin θ, (R − r) + r cos θ).


                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                     Part B                                            3



   If the speed of the ant is v, the velocity is given by

                                            (v cos θ, −v sin θ).

   To evaluate the angular momentum, note that

               |v × r| = vr cos2 θ + vr sin2 θ + v(R − r) cos θ = vr + v(R − r) cos θ.

   Thus, we have                                              
                                      L = mv r + (R − r) cos θ .
   Plugging this into the time integral above,
                                 Z
                                    2mv                       
                             φ=            r + (R − r) cos θ(t)   dt .
                                    M R2

   Changing this to an integral over θ using dθ = v dt/r,
                            Z 2π
                                   2mr                             4m πr2
                       φ=             2
                                         r + (R − r) cos θ(t)    dθ =        .
                             0     MR                                 M R2

   Of course, the problem could also be solved by parameterizing the ant’s path in a different
   way, such as by using polar coordinates with the origin at the center of the disk. The way
   we set it up here is the simplest, since it makes the integral easy. (For most students, the
   hardest part was finding a compact expression for L. A common mistake was assuming
   L = mvx r or a variant thereof.)
   Second solution: The net effect on the disk of one ant going in the circular path is the
   same as two ants going along the path, each with half the mass, and thus the same as four
   ants each with a quarter the mass, and so on. By repeating this logic, we can thus replace
   the ant with a ring of radius r and mass m of uniform density, which rotates around once.
   Therefore, the rotation angle is

                                          Idisk       mr2      4m πr2
                                 φ = 2π         = 2π         =        .
                                          Iring      M R2 /2   M R2

   This is very simple, though it’s a trick that only works for a circular trajectory.
   Third solution: Starting from the first line of the first solution, we notice that
                                Z              Z
                                  r × v dt = r × dr = 2A

   where A is the area of the ant’s trajectory. Thus, we have

                                               4m A   4m πr2
                                          φ=        =        .
                                               M R2   M R2
   This makes it clear why the answer had to be simple in general: the angle can only depend
   on a geometric property of the ant’s trajectory, namely its area. This kind of phenomenon
   occurs in many fields of physics, and is generally known as a geometric phase.




                 Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                Part B                                               4



   Fourth solution: We can decompose the circle into a stack of thin rectangles. The effect
   of a single ant going around the circle is the same as the effect of one ant going around
   each rectangle. But by slightly generalizing your result in part (a), you can show that
   the net rotation due to each rectangle is (4m/M )(dA/R2 ) where dA is the area of that
   rectangle. Summing the areas gives the answer. Like the third solution, this works for any
   ant trajectory, and it makes it clear why it was the area of the trajectory that mattered.




                Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                   Part B                                                 5



Question B2
Hot Pocket
This question consists of two independent parts.

a. It’s winter and you want to keep warm. The temperature is T0 = 263 K outside and T1 = 290 K
   in your room. You have started a fire, which acts as a hot reservoir at temperature T2 = 1800 K.
  You want to add a small amount of heat dQ1 to your room. The simplest method would be to
  extract heat −dQ2,dump = dQ1 from the fire and directly transfer it to your room. However, it
  is possible to heat your room more efficiently. Suppose that you can exchange heat between any
  pair of reservoirs. You cannot use any external source of work, such as the electrical grid, but
  the work extracted from running heat engines can be stored and used without dissipation.

   i. What is the minimum heat extraction −dQ2,min required by the laws of thermodynamics to
      heat up the room by dQ1 ?

                                              Solution
        The second law of thermodynamics implies that, no matter what you do, you must have
        dSuniverse ≥ 0, and if your process is to be as efficient as possible, we can assume it is
        reversible, so
                                         dSuniverse; reversible = 0.
        If we do extract any work while allowing heat to transfer between reservoirs, we will
        later use that work to transfer more heat. So in the entire process, there are only heat
        transfers, and by conservation of energy,

                                         dQ0 + dQ1 + dQ2 = 0.

        The entropy change associated with each reversible heat transfer is dS = dQ/T , so our
        assumption of zero entropy production becomes
                                        dQ0 dQ1 dQ2
                                            +    +    = 0.
                                         T0   T1   T2
        By combining these equations, we can eliminate dQ0 and solve for dQ2 , giving
                                                   T2 T1 − T0
                                      −dQ2;min =              dQ1 .
                                                   T1 T2 − T0
        For the provided numbers, this happens to be about 0.11dQ1 . That is, a heat pump
        can be much more efficient than direct heating. This problem was inspired by Jaynes,
        E. T, “Note on thermal heating efficiency.”, American Journal of Physics 71.2 (2003):
        180-182. (You can also solve the problem by considering an explicit procedure using
        Carnot engines. But since Carnot engines are reversible, all such procedures will just
        give the same answer.)


  ii. Let the “efficiency gain” be the ratio G = dQ2,dump /dQ2,min . Assuming T1 is fixed at 298 K,
      make a graph whose axes are T0 and T2 , where T0 varies from 230 K to 290 K, and T2 varies
      from 300 K to 2000 K. On the graph, sketch curves corresponding to gain G = 2, 5, and 12.

                  Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                    Part B                                                6




                                                Solution
        Your graph should look qualitatively like this:

                      2,000
                                                                                       G=2
                                                                                       G=5
                                                                                       G = 12
                      1,500


             T2 [K]
                      1,000



                       500

                          230    240     250      260       270      280       290
                                                 T0 [K]

        The intuition for the curves is that the efficiency gain becomes high when T1 gets close
        to T0 , and it becomes low when T2 gets close to T0 .


b. When the air at the bottom of a container is heated, it becomes less dense than the surrounding
   air and rises. Simultaneously, cooler air falls downward. This process of net upward heat transfer
   is known as convection.
   Consider a closed, rectangular box of height h filled with air initially of uniform temperature T0 .
   Next, suppose the bottom of the box is heated so that the air there instantly reaches temperature
   T0 + ∆T . The hot parcel of air at the bottom rises upward until it hits the top of the box, where
   its temperature is instantly reduced to T0 .
   You may neglect any heat transfer and friction between the parcel of air and the surrounding air,
   and assume that the temperature difference is not too large. In addition, you may assume the
   height h is small enough so that the pressure P0 and density ρ0 of the surrounding air are very
   nearly constant throughout the container. More precisely, assume that ρ0 gh/P0  ∆T /T0  1.
   Express your answers in terms of P0 , g, h, ∆T , and T0 .

   i. As a parcel of air moves upward, it accelerates. Find a rough estimate for the average speed
      v0 during its upward motion.

                                                Solution
        The temperature of the air is higher than its surroundings by a fractional amount of
        order ∆T /T . Thus, by the ideal gas law, the density is lower than its surroundings by a
        fraction of order ∆T /T , which means the upward acceleration due to the buoyant force
        is of order a = g ∆T /T . Since this is roughly uniformly accelerated motion, v02 ∝ ah,




                       Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                  Part B                                                 7



       which implies                               r
                                                        ∆T
                                            v0 ∼   gh      .
                                                        T0
       Note that because dP/dz = −ρg in hydrostatic equilibrium, the pressure of the sur-
       rounding air varies between the bottom and top of the container, by a fractional amount
       of order ρ0 gh/P0 . But since we assumed ρ0 gh/P0  ∆T /T0 , we can neglect this effect.

  ii. In the steady state, warm parcels of air are continuously moving upward from the bottom, and
      cold parcels of air are continuously moving downward from the top. Find a rough estimate
      for the net rate of upward energy transfer per area.

                                             Solution
       The extra energy carried by a parcel of gas is
                                                                  ∆T
                                     nCp ∆T ∼ nR∆T ∼ P0 V
                                                                  T0
       where V is the volume of the parcel. The net volume of warm air transported upward
       per unit time is of order Av0 , where A is the cross-sectional area of the box. Thus, the
       average power per area is roughly
                                                                 3/2
                                          ∆T     p           ∆T
                                    P0 v0    ∼ P0 gh                     .
                                          T0                 T0

       This is a simplified version of the mixing length theory of convection, which is essential
       for modeling the interiors of stars.




                 Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                    Part B                                                   8



Question B3
The Mad Hatter
A frictionless hemisphere of radius R is fixed on top of a flat cylinder. One end of a spring with
zero relaxed length and spring constant k (i.e. the force from the spring when stretched to length `
is −k`) is fixed to the top of the hemisphere. Its other end is attached to a point mass of mass m.




                                                     R
                                                 θ




a. The number and nature of the equilibrium points on the hemisphere depends on the value of
   the spring constant k. Consider the semicircular arc shown above as a dashed line, which is
   parameterized by angles in the range −π/2 ≤ θ ≤ π/2. Make a table indicating the number of
   equilibrium points on the arc, and the number that are stable, for each range of k values. A
   blank table for your reference is given below. (You may need more or fewer rows than shown.)

              Range of k (kmin < k < kmax )     # of Equilibria    # of Stable Equilibria
                       0<k<?


                        ? <k<∞


                                              Solution
     The spring force attracts the mass toward the top of the hemisphere, whereas the gravita-
     tional force tends to pull it away.
     For very small k, the spring force is negligible compared to the gravitational force for
     |θ| < π/2. For these k values, we only have one unstable equilibrium at the top of the
     hemisphere due to the gravitational force being zero there.
     For some large enough value of k, the spring force at π/2 exactly compensates for the
     gravitational force – this marks the end of the first regime. In this next regime, we still
     have an unstable equilibrium at the top of the hemisphere – because the spring force only
     compensates for the gravitational force for larger θ. Additionally, we have two equilibria at
     0 < |θ? | < π/2. These equilibria must be stable because for θ < θ? , the gravitational force
     is stronger than the spring force and forces the mass toward θ? , whereas the opposite holds
     for θ > θ? , and the mass is again forced toward θ? . Thus, we have three total equilibria
     (two stable, one unstable).
     Finally, for sufficiently large k the spring force is stronger than the gravitational force even
     for arbitrarily small θ, and so we have just one stable equilibrium point at the top of the
     hemisphere in this third regime.
     We now compute the two critical points for us to fill out the table. The first critical point


                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                    Part B                                               9



     is given by the balancing of the two forces at θ = π/2, so we compute
                                                                   2mg
                               mg sin π/2 = k1 R(π/2) =⇒ k1 =          .
                                                                    πR
     The second critical point is given by the balancing of the two forces for θ  1, so we
     compute
                             mg sin θ ≈ mgθ = k2 Rθ =⇒ k2 = mg/R.
     We thus get the following table:

           Range of k values (kmin < k < kmax )     # of Equilibria   # of Stable Equilibria
                   0 < k < 2mg/(πR)                       1                     0
                2mg/(πR) < k < mg/R                       3                     2
                     mg/R < k < ∞                         1                     1

     Notice that the system is symmetric under flipping θ → −θ. Thus, one could incorrectly
     guess that the only possible equilibrium point is θ = 0 by symmetry. In fact, when k is in
     the right range, we get a pair of new equilibrium points at opposite θ, which map to each
     other under symmetry. This kind of situation, where the overall setup is still symmetric
     but the individual equilibrium points are not, is called spontaneous symmetry breaking.


For the rest of the problem, suppose the value of k is such that the mass begins at stable equilibrium
on the surface of the hemisphere at angle θ0 . The mass can move on the two-dimensional surface
of the hemisphere, but a radially-inward external force prevents it from jumping off the surface.

b. At t = 0, the mass is given a speed v along a line of constant latitude θ = θ0 .


                                                     v
                                                                 θ = θ0




   i. Indicate which of the following trajectories the mass takes for a short time after t = 0 and
      briefly explain your reasoning. The differences between the paths are exaggerated.

                                                         A
                                                         B         θ = θ0
                                                         C




                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                       Part B                                             10




                                                  Solution
        The correct path is option C. Several explanations would work here. Here are two.
          • If we go to the rotating frame of reference, there is an outward centrifugal force that
            the mass experiences, pushing it down the sphere.
          • For the mass to go in a circle around the sphere, the spring force not only has to
            compensate for the gravitational force but also must provide centripetal acceleration.
            Therefore, the spring must get longer.


  ii. What is the total radial force (i.e., normal to the surface of the hemisphere) on the mass at
      t = 0? Express your answer in terms of m, v, R, g, and θ0 .

                                                  Solution
        We draw a free-body diagram. It is helpful to draw the diagram in the noninertial
        reference frame that revolves around the central axis of the hemisphere with speed v at
        the location of the mass.
                                         FN
                                                  kRθ0

                                  Fc
                             mg sin θ0
                                              mg cos θ0




                        2
        Here, Fc = Rmvsin θ0 is the centrifugal force, and Fr is the radial force from the hemisphere.
        The forces in the radial direction must balance for the mass to be constrained to the
        surface of the sphere. Thus,
                                             Fr + Fc⊥ = mg cos θ0 .
        The perpendicular part of the centrifugal force is Fc sin θ0 . so we get

                                                             mv 2
                                          Fr = mg cos θ0 −        .
                                                              R
        Incidentally, there’s a simple way to understand why the second term has to be exactly
        mv 2 /R. Consider decomposing the total force on the mass into radial and tangential
        parts. The radial part simply keeps the mass on the hemisphere; in the absence of a
        tangential force, the mass would travel in a great circle of radius R. Adding a tangential
        force deflects the mass away from this great circle trajectory, but doesn’t change the
        radial force required, so the net radial force always has to be mv 2 /R inward.
        Note: The phrase “total radial force” could also validly be interpreted as the net radial
        force. Thus, we accepted both mg cos θ0 − mv 2 /R and −mv 2 /R.


c. A cylinder of radius r  Rθ0 is placed on top of the sphere. Suppose the mass is launched at an
   angle α away from the direction of the spring’s displacement with kinetic energy K, as shown.

                   Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                  Part B                                                11



  What is the maximum angle αmax at which the mass can be launched such that it can still hit
  the cylinder? Express your answer in terms of K, m, g, θ0 , r, and R. You may assume K is
  large enough for the mass to reach the cylinder for α = 0.




                                                          v
                                                      α




                                        (view from above)


                                           Solution
    The initial energy of the system is given by
                                                1
                                    mgR cos θ0 + kR2 θ02 + K.
                                                2
    Suppose the mass is launched with speed v. Then, the speed in the θ direction is v cos α
    and the speed in the φ direction is v sin α, and therefore, the z-component of the angular
    momentum of the mass is
                                      L = mv sin α(R sin θ).
    We now compute the distance of closest approach. If the distance of closest approach is
    equal to r (as it does for αmax , then at r, the motion of the mass has no inward component,
    and the speed of the object at r is given by conservation of angular momentum:

                                                              v sin α(R sin θ)
                        mur = mv sin α(R sin θ) =⇒ u =                         .
                                                                      r
    Because r  R, at the point of closest approach, the energy of the system is roughly
                                                                                      !
                  1                 1 mv 2 sin2 αR2 sin2 θ              α 2 R2 sin2 θ
           mgR + mu2 ≈ mgR +                               ≈ mgR + K                    .
                  2                 2          r2                            r2

    Equating with the initial energy gives us
                                                                                 !
                                 1                                α2 R2 sin2 θ
                     mgR cos θ0 + kR2 θ02 + K = mgR + K                              .
                                 2                                    r2

    Before finishing the calculation, we now compute the required k for the object to be at
    equilibrium (since our answer cannot contain k). Setting kRθ0 = mg sin θ0 gives us k =


                 Copyright ©2021 American Association of Physics Teachers
2021 USAPhO                                Part B                                             12



    mg sin θ0
     Rθ0 . Then,
                                                                                 !
                             1                                   α2 R2 sin2 θ0
                 mgR cos θ0 + mgRθ0 sin θ0 + K = mgR + K                             .
                             2                                        r2

   Solving for α gives us
                                  r
                          r            mgR(1 − cos θ0 ) − (1/2)mgRθ0 sin θ0
                    α=            1−                                        .
                       R sin θ0                         K
   Solving for α without using the small angle approximation for α also earned full credit.
   (The answer α = π, which is technically also correct, earned partial credit.)




                Copyright ©2021 American Association of Physics Teachers
