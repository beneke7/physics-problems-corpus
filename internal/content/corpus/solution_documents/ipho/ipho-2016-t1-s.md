---
id: solution-document-ipho-2016-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2016/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2016-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2016/T1_S.pdf."
---

Problem 1 : Solution/marking scheme  Two Problems in Mechanics (10
points)

Part A. The Hidden Disk (3.5 points)


 A1 (0.8 pt) Find an expression for b as a function of the quantities (1), the angle φ and
 the tilting angle Θ of the base.




 Solution A1:                                                                                   [0.8]

 Geometric solution:     use that torque with respect to point of contact is 0       ⇒ cen-
 ter of gravity has to be vertically above point of contact.

                                                     D
                                           sin φ =                                              0.3
                                                     b
                                                     D
                                           sin Θ =                                              0.3
                                                     r1
 Here D may be called another name. Solve this:

                                      r1             r1 sin Θ
                            sin φ =      sin Θ ⇒ b =                                            0.2
                                       b              sin φ



 Alternative: Torque and forces with respect to another point:                                  [0.8]
 Correct equation for torque                                                                    0.3
 Correct equation for force                                                                     0.3
 Correct solution                                                                               0.2


 A2 (0.5 pt) Find the equation of motion for ϕ. Express the moment of inertia IS of the
 cylinder around its symmetry axis S in terms of T , b and the known quantities (1). You
 may assume that we are only disturbing the equilibrium position by a small amount so
 that ϕ is always very small.




 Solution A2:                                                                                   [0.5]


                     Write some equation of the form ϕ̈ = −ω
                                                                 2
                                                                     ϕ                          0.1
 Writing an equation of the form ϕ = A cos ωt is also correct.
 Two solutions:
                         1      2
    1. Kinetic energy:
                         2 IS ϕ̇ and potential energy:    −bM g cos ϕ.   Total energy is con-
       served, and dierentiation w.r.t. time gives the equation of motion.

    2. Angular equation of motion from torque, τ = IS ϕ̈ = −M gb sin ϕ.

 Correct equation (either energy conservation or torque equation of motion)                     0.3
 Final answer                         s
                                           IS         M gbT 2
                           T = 2π              ⇒ IS =                                           0.1
                                          M gb         4π 2


                                                 1
(Derivation:
                                           bM g           bgM
                                ⇒ ϕ̈ = −        sin ϕ ≃ −     ϕ
                                            IS             IS
so that
                                                   bgM
                                            ω2 =
                                                    IS
)




A3 (0.4 pt) Find an expression for the distance d as a function of b and the quantities
(1).   You may also include r2 and h2 as variables in your expression, as they will be
calculated in subtask   A.5.


Solution A3:                                                                              [0.4]

Some version of the center of mass equation, e.g.

                                              dM2
                                       b=                                                 0.2
                                            M 1 + M2
correct solution:
                                                bM
                                   d=                                                     0.2
                                         πh2 r22 (ρ2 − ρ1 )



A4 (0.7 pt) Find an expression for the moment of inertia IS in terms of b and the known
quantities (1). You may also include r2 and h2 as variables in your expression, as they
will be calculated in subtask   A.5.


Solution A4:                                                                              [0.7]


correct answer for moment of inertia of homogeneous disk

                                           1
                                       I1 = πh1 ρ1 r14                                    0.2
                                           2
Mass wrong                                                                                -0.1
Factor 1/2 wrong in formula for moment of inertia of a disk                               -0.1
Correct answer for moment of inertia of `excess' disk:

                                      1
                                  I2 = πh2 (ρ2 − ρ1 )r24                                  0.2
                                      2
Using Steiner's theorem:


                           IS = I1 + I2 + d2 πr22 h2 (ρ2 − ρ1 )                           0.1
correct solution:

                    1            1                        b2 M 2
                IS = πh1 ρ1 r14 + πh2 (ρ2 − ρ1 )r24 + 2                                   0.2
                    2            2                   πr2 h2 (ρ2 − ρ1 )


                                                 2
 In terms of d rather than b gives 0.1pts rather than 0.2pts for the nal answer:              0.1
                         1            1
                     IS = πh1 ρ1 r14 + πh2 (ρ2 − ρ1 )r24 + d2 πr22 h2 (ρ2 − ρ1 )
                         2            2




 A5 (1.1 pt) Using all the above results, write down an expression for h2 and r2 in terms
 of b, T and the quantities (1). You may express h2 as a function of r2 .




 Solution A5:                                                                                  [1.1]

 It is not clear how exactly students will attempt to solve this system of equations. It is
 likely that they will use the following equation:


                                 M = πr12 h1 ρ1 + πr22 h2 (ρ2 − ρ1 ) .                         0.3
                 2
 solve IS for r2 :


                                                                       M2
                                                                                    
                               2                   1
                 r22 =                         IS − πh1 ρ1 r14 − b2                            0.4
                          M − πr12 h1 ρ1           2                M − πr12 h1 ρ1

 replace IS by T :
                                                      M gbT 2
                                               IS =                                            0.1
                                                       4π 2
 solve correctly for r2 :

                     s
                                             bgT 2 1                   M2
                                                                                  
                              2
            r2 =                           M                 4
                                                   − πh1 ρ1 r1 − b2                            0.1
                         M − πr12 h1 ρ1       4π 2  2               M − πr12 h1 ρ1

                                                                     2          2
 write down an equation for h2 along the lines of M = πr1 ρ1 h1 + πr2 (ρ2 − ρ1 )h2 and solve
 it correctly:
                                                  M − πr12 ρ1 h1
                                           h2 =                                                0.2
                                                  πr22 (ρ2 − ρ1 )



Part B. Rotating Space Station (6.5 points)



 B1 (0.5 pt) At what angular frequency ωss does the space station rotate so that the
 astronauts experience the same gravity gE as on the Earth's surface?




 Solution B1:                                                                                  [0.5]

 An equation for the centrifugal force along the lines of


                                                Fce = mω 2 r                                   0.1


                                                        3
Balancing the forces, correct equation

                                             2
                                       gE = ωss R                                         0.2
Correct solution
                                                                                          0.2
                                             p
                                     ωss =    gE /R




B2 (0.2 pt) Assuming that on Earth gravity is constant with acceleration gE , what
would be the angular oscillation frequency ωE that a person on Earth would measure?




Solution B2:                                                                              [0.2]


                         Realize that result is independent of gE                         0.1
Correct result:
                                                                                          0.1
                                              p
                                      ωE =     k/m




B3 (0.6 pt) What angular oscillation frequency ω does Alice measure on the space
station?




Solution B3:                                                                              [0.6]

some version of the correct equation for force

                                               2
                                   F = −kx ± mωss x                                       0.2
getting the sign right
                                               2
                                   F = −kx + mωss x                                       0.2
Find correct dierential equation

                                              2
                                 mẍ + (k − mωss )x = 0                                   0.1
Derive correct result
                                                                                          0.1
                                         p
                                    ω=           2
                                          k/m − ωss
                           2
Using gE /R instead of ωss is also correct.




B4 (0.8 pt) Derive an expression of the gravity gE (h) for small heights h above the
surface of the Earth and compute the oscillation frequency ω̃E (linear approximation is
enough). The radius of the Earth is given by RE .




                                               4
Solution B4:                                                                                   [0.8]



                              gE (h) = −GM/(RE + h)2                                           0.1
linear approximation of gravity:

                                        GM     GM
                           gE (h) = −    2 + 2h 3 + . . .                                      0.2
                                        RE     RE

Realize that gE = GM/RE :
                          2


                           gE (h) = −gE + 2hgE /RE + . . .                                     0.1
Opposite sign is also correct, as long as it is opposite in both terms.
Realize what this means for force, i.e. that the constant term can be eliminated by shifting
the equilibrium point:
                               F = −kx + 2xmgE /RE                                             0.2
Find correct dierential equation


                              mẍ + (k − 2mgE /RE )x = 0                                       0.1
correct result
                                                                                               0.1
                                       p
                               ω̃E =       k/m − 2gE /RE



No points are deducted if student answers with ω̃E /(2π) because oscillation frequency
might also be interpreted as inverse period.




B5 (0.3 pt) For what radius R of the space station does the oscillation frequency ω
match the oscillation frequency ω̃E on the surface of the Earth? Express your answer in
terms of RE .




Solution B5:                                                                                   [0.3]

Write down equation
                                     2
                                    ωss = 2gE /RE                                              0.1
Solve
                                       R = RE /2                                               0.2
         2
If GM/RE rather than gE is used, give only         0.1pt.


B6 (1.1 pt) Calculate the horizontal velocity vx and the horizontal displacement dx
(relative to the base of the tower, in the direction perpendicular to the tower) of the mass
at the moment it hits the oor. You may assume that the height H of the tower is small,
so that the acceleration as measured by the astronauts is constant during the fall. Also,
you may assume that dx  H .




                                               5
Solution B6:                                                                               [1.1]

There are several possible solutions.
Solution one  Using Coriolis force
   • Velocity vx
     Equation for Coriolis force with correct velocity:

                                          2
                              FC (t) = 2mωss            3
                                             Rtωss = 2mωss Rt                              0.1
     Integrate this, or realize that it is like uniform acceleration for the velocity:

                                                   3
                                         vx (t) = ωss Rt2                                  0.2
     plug in correct value for
                                                                                           0.2
                                             p
                                        t=           2 R
                                                 2H/ωss
     overall correct result
                                          vx = 2Hωss                                       0.1
   • The displacement dx :
     Integrate vx (t):
                                             1  3 3
                                         dx = Rωss t                                       0.3
                                             3
                                                                           1
     Instead of integrating, students may simply `average' by taking
                                                                           2 of the nal
     velocity. This gives a factor of
                                      1
                                      2 instead of . Deduct a total of 0.1 pts for this.
                                                  1
                                                  3                                        -0.1

     Plug in value for t
                                                                     r
                    1                    1                   1           8H 3
                       3
                dx = Rωss      2
                          (2H/ωss R)3/2 = 23/2 H 3/2 R−1/2 =                               0.2
                    3                    3                   3            R
Solution two  Using inertial frame This solution is similar to the way to solve B7,
but needs more complicated approximations than Solution one.

   • vx
     Here φ denotes the angle swept by the mass and α the angle the astronauts (and
     tower) has rotated when the mass lands on the oor, see

     Initially the velocity of the mass in an inertial frame is vx = ωss (R − H).          0.1
     When the mass lands, the x-direction has been rotated by φ so the new horizontal
     velocity component is then

                                        ωss (R − H) cos φ                                  0.1
     (Student may also write cos α instead of cos φ, since dx  H .)


                                             R−H     H
                                 cos φ =         =1−                                       0.1
                                              R      R
     Transforming to the rotating reference frame, one needs to subtract ωss R.            0.1
     Finally in the reference frame of the astronauts

                          H 2
                                                   
                                                    H
           vx = ωss R 1 −     − ωss R ≈ ωss R 1 − 2     − ωss R = −2ωss H                  0.2
                          R                         R
     The sign of the velocity depend on the choice of reference direction, so a positive
     sign is also correct.




                                                 6
   • dx
     With the notation from the calculation of vx


                                       dx = (α − φ)R                                               0.1

                                                       
                                                      H
                                       φ = arccos 1 −
                                                      R
                                              α = ωss t
     where t is the fall time of the mass, which is given by

                                        p
                                            R2 − (R − H)2
                                  t=                                                               0.1
                                            ωss (R − H)

     (see solution to B7)

     Writing ξ ≡ H/R this means

                              "p                            #
                                1 − (1 − ξ)2
                         dx =                − arccos(1 − ξ) R                                     0.3
                                  1−ξ

     which is a valid end answer to the problem.           It is possible, but not necessary, to
     approximate this for small ξ :

                                                         
                                               p        ξ
                                arccos(1 − ξ) ≈ 2ξ 1 +
                                                       12
     which after insertion into the equation for dx and approximation of small ξ yields
     the same result as in Solution one:
                                                     r
                                                 2       2H 3
                                            dx =
                                                 3        R

     If this end answer misses the factor 2/3, deduct 0.1 points.                                  -0.1

Solution three  Inertial frame with geometry trick
This is an alternative solution to obtain dx
The mass travels the distance l, and during the fall the space station rotates by φ, see
Figure 2. According to the intersecting chord theorem,


                                  l2 = H(2R − H)                                                   0.1
The rotated angle is φ = ωss t where

                                             l
                                       t=                                                          0.1
                                            R−H
is the fall time. Thus                 p
                                           H(2R − H)
                                 φ=                                                                0.1
                                            R−H
                                      p
              d             l          H(2R − H)
                                                                                                   0.1
                                                         p
                = φ − arcsin =                   − arcsin x(2 − x)
              R             R           R−H


                                               7
                           Figure 1: Notation for solution two




                          Figure 2: Notation for solution three.




                           p
Denote x ≡ H/R and y ≡         x(2 − x). Since

                                                      y3
                                     arcsin y ≈ y +
                                                      6
one gets

                                                                            r
          d                                                     √       2       2H 3
            ≈ y(1 + x) − y − y 3 /6 = y(x − y 2 /6) ≈ 2xy/3 ≈ 2x 2x/3 =
          R                                                             3        R

Final answer                                                                                0.1



B7 (1.3 pt) Find a lower bound for the height of the tower for which it can happen that
dx = 0.



Solution B7:                                                                                [1.3]


The key is to use a non-rotating frame of reference. If the mass is released close enough




                                             8
to the center, its linear velocity will be small enough for the space station to rotate more
than 2π before it hits the ground.
The velocity is given by
                                     v = ωss (R − H)                                           0.1
distance d that the mass ies before hitting the space station

                                 d2 = R2 − (R − H)2                                            0.1
use non-rotating frame of reference to obtain time t until impact
                                        p
                                         R2 − (R − H)2
                              t = d/v =                                                        0.1
                                          ωss (R − H)
Now there are several possible ways to relate H and the rotated angle φ of the space
station:
Solution one
                                            R sin φ
                                     t=                                                        0.2
                                           ωss R cos φ
This time must match t = φ/ωss . Obtain the equation

                                         φ = tan φ                                             0.2
Realizing that there is an innite number of solutions.                                        0.2
This equation has one trivial solution φ = 0, next solution is slightly less than 3π/2 which
corresponds to the case H     > R (and is thus not correct). The one that gives a lower
bound for H is the third solution
                                           φ ≈ 5π/2
The equation φ = tan φ can be solved graphically or numerically to obtain a close value
(φ = 7.725 rad) which means

                                H/R = (1 − cos φ) ≈ 0.871
Give points if the method is correct, depending on the value of H/R found, according to
these intervals:                                                                               0.4
0.85 ≤ H/R ≤ 0.88: 0.4 pts
0.5 ≤ H/R < 0.85: 0.3 pts
0 < H/R < 0.5 or H > 0.88: 0.2 pts
H = 0 or method is incorrect: 0 pts

Solution two
relation between H and rotated angle φ

                                     R−H
                                         = cos φ                                               0.2
                                      R
obtain equation of the form
                                           p                !
                           H                 1 − (1 − H/R)2
                             = 1 − cos                                                         0.2
                           R                   1 − H/R
                                           √          
                                              1−(1−x)2
Figure 3 gives a plot of f (x) = 1 − cos                 . The goal is to nd an approximate
                                               1−x
solution for the second intersection. The rst intersection is discarded  it is introduced
because of cos φ = cos(−φ) and corresponds to a situation with H > R.
Realizing that there is an innite number of solutions.                                        0.2


                                                9
                          Figure 3:    Plot of f (H/R) and H/R




                              Figure 4:       Plot of g(x) and x




   • introduce new variable x := 1 − H/R, so that the equation becomes
                                        p
                                x = cos( 1 − x2 /x) =: g(x)

   • g(x) is then smaller than x up to the rst solution. In particular it is negative in
     some region (see gure 4). Finding the third zero thus gives a lower bound for the
     solution:                              √
                                                1 − x2
                                                       = 5π/2
                                                  x
   • give lower bound
                       p                           p
                 x = 1/ 25π 2 /4 + 1 ⇒ H = R(1 − 1/ 25π 2 /4 + 1) ≈ 0.874

     Note: the actual result is H/R = 0.871 . . ..

     Use the same points for the numerical answer as was mentioned in solution one.             0.4
     If the student plots f rather than g , nd solution to f       = 1: is equivalent to the
     solution above.   Give same number of points.
                                      √          
                                           1−x2
     It is also possible to use cos
                                            x         = sin(1/x).




B8 (1.7 pt) Alice pulls the mass a distance d downwards from the equilibrium point
x = 0, y = 0, and then lets it go (see gure 4).


                                                      10
   • Give an algebraic expression of x(t) and y(t). You may assume that ωss d is small.

   • Sketch the trajectory (x(t), y(t)), marking all important features such as amplitude.



Solution B8:                                                                                  [1.7]

Note:     we did not specify the overall sign of the Coriolis force.       Give same amount
of points if using opposite convention, but it has to be consistent! Otherwise: subtract
0.1pt for each instance of inconsistency.                                                     -0.1
Students are allowed to express everything in terms of   ω , they don't need to write
 k/m − ωss explicitly. Deduct 0.1pt however if they use k/m instead of ω ..                   -0.1
p
        2


Realize that y(t) is standard harmonic oscillation:


                                      y(t) = A cos ωt + B                                     0.1
Give correct constants from initial conditions


                                       y(t) = −d cos ωt                                       0.2
Correct expression for vy (t):
                                      vy (t) = −dω sin ωt                                     0.1
Coriolis force in x-direction


                         Fx (t) = 2mωss vy (t) = −2mωss dω sin ωt                             0.2
           Realize that this implies that x(t) is also a harmonic oscillation. . .            0.1
                . . . but with a constant movement term superimposed: vt                      0.1
getting the correct amplitude:
                                                 2ωss d
                                           A=                                                 0.1
                                                   ω
Correct answer with correct initial conditions:

                                          2ωss d
                                 x(t) =          sin ωt − 2ωss dt                             0.2
                                            ω
Sketch:


                             A
                                            y

                                            d


                                                                       x

                                            -d
                   B         4πωssd
                               ω
                         C




                                                  11
Correct qualitative sketch:
                                   periodic motion                        0.1
                              overall constant movement                   0.1
                                      B): cusps                           0.1
And additionally correct quantitative sketch:


                      A)+B): peaks and cusps are at y = ±d                0.1
                                                4πωss d
              C): cusps are at distance ∆x =            from each other   0.2
                                                  ω




                                           12
