---
id: solution-document-apho-2023-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2023/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2023-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2023/T2_S.pdf."
---

A ball on a turntable
                          Enkhbat Tsedenbaljir


1     Problem 1: 10 points
1.1    Preamble
Notations and conventions: The length of a vector A   ⃗ is simply denoted as A ≡
  ⃗ The time derivative of a quantity is denoted by the dot over the quantity:
|A|.
A⃗˙ ≡ d ⃗                                                              ⃗ is denoted
       A/dt, Ȧ ≡ dA/dt. The unit vector along the direction of vector A
as Â. The unit vectors along the Cartesian coordinates are, therefore, x̂, ŷ and ẑ.
The definitions of scalar and vector products are:
         ⃗ · B)
        (A   ⃗ = (B⃗ · A)
                       ⃗ = Ax Bx + Ay By + Az Bz = AB cos θ,                       (1)
      (A⃗ × B)
             ⃗ = −(B ⃗ × A)
                          ⃗                                                        (2)
                = (Ay Bz − Az By )x̂ + (Az Bx − Ax Bz )ŷ + (Ax Bx − Ay Bx )ẑ,    (3)
        ⃗ × B|
       |A    ⃗ = AB sin θ,                                                         (4)

where θ is the angle between A ⃗ and B.
                                     ⃗ You may need the following properties of
vectors and their multiplications: Scalar products of vectors vectors:
                           ⃗ · B)
                          (A   ⃗ = (B⃗ · A)
                                         ⃗ B⃗ − (B
                                                 ⃗ · C)
                                                     ⃗ A,
                                                        ⃗                          (5)
                   ⃗ × B)
                  (A   ⃗ ·C
                          ⃗ = (B⃗ × C)
                                    ⃗ ·A ⃗ = (C⃗ × A)
                                                   ⃗ · B.
                                                        ⃗                          (6)

Triple product rules for vectors:
                       ⃗ × B)
                      (A   ⃗ ×C ⃗ = (A
                                     ⃗ · C)
                                         ⃗ B⃗ − (B
                                                 ⃗ · C)
                                                     ⃗ A,
                                                        ⃗                          (7)
                   ⃗ × B)
                  (A   ⃗ ·C⃗ = (B
                                ⃗ × C)
                                    ⃗ ·A ⃗ = (C⃗ × A)
                                                   ⃗ · B.
                                                        ⃗                          (8)

The vector products are very useful in describing many relations in physics. For
example:

                                        ⃗v = ⃗ω × ⃗r,                              (9)
                              F⃗Lorentz = QB  ⃗ × ⃗v ,                            (10)

and, often, saves time combining three equations for vector components into a
single equation.

1.2    The statement
A ball of mass m and radius r is rolling on a horizontal turntable without slipping.
Its mass density has a spherical symmetry, i.e. only depends on the distance from
its center. In part B and C, where the turntable can rotate freely, the moment
of inertia of the turntable is denoted as Id . The purpose of the problem is to
analyze the motion and trajectory of the ball with respect to an observer at rest.
Throughout the problem, assume the turntable is large enough so that the ball
does not fall off. The following notations are used:
     Ω – the magnitude of the turntable angular velocity,
     ⃗ω – the spinning angular velocity of the ball with respect to its spinning axis,
     R⃗ – the horizontal position of the ball center with respect to the rotation axis
of the turn table,
                                      ⃗
    ⃗v – the velocity of the ball at R.
     Assume that the initial position R  ⃗ 0 ≡ R(0)
                                               ⃗    and velocity ⃗v0 ≡ ⃗v (0) of the ball,
the angular velocity of the turn table Ω0 ≡ Ω(0) are known. For the initial vector
quantities R ⃗ 0 ≡ R(0)
                   ⃗     and ⃗v0 ≡ ⃗v (0), assume that their directions are known. In
addition, whenever you need to express a vector quantity, you may use ẑ in your
expression. Also, if asked to write your expression in terms of the known quantity
you may use any or all of m, r, I and Id . Unless otherwise stated, keep I as
general. The following notations are recommended:
                                    I           Id
                            α=           , δ =     ,                                 (11)
                                 I + mr2       mr2

1.3    Part A: 2 points
First we start with the simplest case wherein the turntable angular velocity with
respect to vertical axis ẑ is constant, therefore Ω = Ω0 .
A1. 0.1 point
    Express the ball’s velocity ⃗v in terms of Ω, ⃗ω , r, m, I and R⃗ from a kinematic
constraint.
A.2 0.2 point
    Using Newton’s equation and torque equation with respect to its center, find
the acceleration of the ball ⃗a ≡ ⃗v˙ in terms of Ω, ⃗v , r, m and I.
A.3 0.2 points
    Find the velocity ⃗v in terms ofΩ, R, ⃗ v⃗0 , R⃗0 , r, m and I.
A.4 0.5 points
    Find the trajectory of the ball. It means, for the given initial conditions ⃗v0 and
⃗
R0 , completely specify the trajectory.
A.5 1 point

    Assume this time that the ball has a uniform mass density, i.e. I = 2mr2 /5.
Trajectory you have found has a single defining parameter Rt for its size. Choose
its magnitude to be the same as R0 . How long does it take for the ball to approach
the initial spot on the table (the position on the turntable at t = 0) with the closest
distance?


1.4     Part B
In this part, the turntable can rotate freely, without any friction, around z–axis.
Therefore its free rotation is hindered only by the ball’s friction.
    B.1 0.2 points

   Find the velocity ⃗v and acceleration ⃗v˙ of the ball in terms of Ω, R,
                                                                        ⃗ Ω0 , R
                                                                               ⃗ 0 , Ω̇,
r, m and I.
B.2 0.2 points

     Find the magnitude of the angular acceleration of the turntable Ω̇ in terms of
         ⃗ R
 Ω, Ω0 , R, ⃗ 0 , ⃗v0 , r, m, I and Id . You may use the constants α and δ defined in
 the beginning of the problem.
 B.3 0.4 points
     Find the magnitude of the angular velocity of the turntable Ω as a function of
 R only, namely, in terms of Ω0 , R, R0 , r, m, I and Id .
 B.4 0.1 points
     From the result of B.3, for a given Ω0 , R0 , find the maximum possible Ω.
 B.5 3.1 points
     Write down the vertical component the angular momentum ẑMz of the whole
 system. Subtract any constant term and rename the remaining part as ẑL.
     In part B.1 you found the velocity of the ball ⃗v , which can be written as the
 sum of a part that depends on the position of the ball R     ⃗ and a constant vector.
 Let us call this constant vector ⃗c. Choose the direction of x-axis along this vector
                                                                            ⃗ ⃗c, ẑ, R2 ,
 and y-axis along ẑ ×⃗c. In this frame of reference, find Ω in terms of L, R,
 r, m, I and Id . Combining this with the result of B.3, write down an equation only
 containing R2 and y variables and L, r, m, I, c and Id . Here c is the magnitude of
⃗c. Substituting R2 = x2 + y 2 , write down an expression containing only x and y
 variables and describing a curve. From this, list all possible types of trajectories.

1.5     Part C: 4 points
In this part, we consider a density profile so that I = mr2 /10. This can be realized,
for example, if the ball is filled up to its half radius with uniform density and the

remaining part has a negligible mass. In addition, on its outer surface, the ball
has a uniform charge density Q/(4πr2 ), where Q is the total surface charge. The
whole setup is in a uniform magnetic field B  ⃗ that is in ẑ direction. The turntable
rotates with constant Ω like in Part A.
    It is often useful to analyze the equations governing the evolution of a system
in a unitless form so that the general behavior can be studied without worrying
about a specific values or units. For this purpose, we divide the R      ⃗ and Ω by 1
meter and 1 Hertz respectively. Also we divide the time variable by 1 second.
C.1 0.3 points
    Write down Newton’s equation and the torque equation for the ball. Find
expression for the torque τ⃗s due to the spinning of the ball around its axis in terms
                 ⃗
of Q, r, ⃗ω and B.
C.2 0.2 points
    Using the results of C.1, find expression for the linear acceleration of the ball
with respect to the laboratory frame in terms of Q, r, ⃗ω and B.   ⃗
C.3 0.3 points
    The equation for the linear acceleration you found in part C.2 is a second order
differential equation for R⃗ of the following form:

                                  ⃗
                               d2 R      ⃗
                                        dR
                                    − γ             ⃗ = 0.
                                           × ẑ + β R                            (12)
                               dt2      dt
Write down γ and β constants. From now on we assume we have made the trans-
formation to the unitless forms. This in turn, has an effect on the γ and β as
factors of 1/s =Hz and 1/s2 respectively, rendering them unitless as well. Make
the following transformation to a polar coordinates for the components of ⃗
                                                                          R:

                                  x(t) = ρ(t) cos(η(t)),                         (13)
                                  y(t) = ρ(t) sin(η(t)),                         (14)

so that the new equations do not have the first time derivative term. Here the
polar angle η(t) is a function of time. Find the form of the form of this function.
Express the coefficient β ′ of ρ(t) in the new equation in terms of γ and β. Write
down the conditions for different types of trajectories: harmonic, exponential etc.
   C.4 1.5 points
   Consider the following initial conditions for the solution found in part C.3:

          x(0) = 1, y = 0, vx (0) = ẋ|t=0 = 1, , vy (0) = ẏ|t=0 = −1.          (15)

find γ and β. Using them find the corresponding Ω. Sketch the trajectory. Is the
charge of the surface negative or positive? For the negative write − and for the
positive write + on your answer sheet.

   C.5 1.5 points
   Consider the solution you have found in part C.4. If you identified it correctly
                                     ⃗
your solution should have a rotating R(t). Find the expressions for the total and
per rotation changes in energy for N ≫ 1 number of rotations. Here you may
ignore the terms small compared to N . In this part assume the mass and the
radius of the ball are m = 1 and r = 1 so that I = 1/11 (in our unitless scheme
we divide masses by 1 kg).

2     Solution
2.1    Part A
A.1
   The velocity of the ball ⃗vb with respect to the turntable from the non–slipping
condition is given by:

                                ⃗vb = ⃗ω × (rẑ).                             (16)

The ball velocity with respect to the Lab frame is then
                               ⃗ + ⃗vb , ⃗v = Ωẑ × R
                    ⃗v = Ωẑ × R                    ⃗ + ⃗ω × ẑr.             (17)


A.2
   The force F⃗ and torque τ⃗ due to friction are:

                                F⃗ = m⃗v˙ ,                                   (18)
                                                    d⃗ω
                                τ⃗ = (−rẑ) × F⃗ = I .                        (19)
                                                    dt
The time derivative of equation (16) gives

                                            d⃗ω
                           ⃗v˙ = Ωẑ × ⃗v +     × (rẑ)                       (20)
                                            dt
                                                                              (21)

and substituting Eq. (18) and (19) in results in:
                                              2
                                        mr
                       ⃗v˙ = Ωẑ × ⃗v −             ẑ × ⃗v˙ × ẑ.            (22)
                                         I
Using the triple vector product rule in the last term of the above equation and
keeping in mind that both ⃗v and d⃗v /dt are orthogonal to ẑ yields
                                                          2
                                                 mr ˙
                                ⃗v˙ = Ωẑ × ⃗v −     ⃗v →                     (23)
                                                  I
                                           Ω
                                ⃗v˙ =            ẑ × ⃗v .                    (24)
                                      1 + mr2 /I

A.3

    The last equation unequivocally shows that the motion of the ball is circular
                                                           Ω
and the corresponding angular velocity of its center is 1+ma 2 /I . Now we integrate

this equation to find the radius and its center:
                               Ω             ⃗ −R   ⃗ 0 ),
                 ⃗v − ⃗v0 =            ẑ × (R                                   (25)
                          1 + mr2 /I
                                                             2
                          Ω             ⃗ −R ⃗ 0 − 1 + mr /I ẑ × ⃗v0 ) →
                 ⃗v =            ẑ × (R                                         (26)
                      1 + mr2 /I                           Ω
                          Ω             ⃗ −R ⃗ 0 ) + ⃗v0
                 ⃗v =            ẑ × (R                                         (27)
                      1 + mr2 /I

A.4
   From this we see that the circle trajectory has radius Rt and its center is located
at
                                                          2
                                   ⃗c = R
                                   R       ⃗ 0 + 1 + mr /I ẑ × ⃗v0 .            (28)
                                                        Ω
                   ⃗0 − R
                        ⃗ c| = 1 + mr 2
                                        /I              1 + mr2 /I
             Rt = |R                       |ẑ × ⃗v | =            v0            (29)
                                   Ω                        Ω

A.5
   In the case of a solid ball of uniform density, the moment of inertia is
                                       2mr2
                                   I=       ,                                    (30)
                                         5
and therefore the angular velocity of the ball’s center is
                                        2
                                   ωc = Ω.                                       (31)
                                        7
The time to return the initial point on the turntable is then
                                          14π
                                    t=         .                               (32)
                                           Ω
This solution is true for most cases. But there are special cases where this time
is shorter. Trajectory is a circle and its size is defined by its radius Rt and , as
stated, we solve for Rt = R0 . It could happen that the red spot happens to cross
path with the ball at a moment before the turntable could make a full circle. In
this case we can find the distance between the starting and the crossing positions:

                                   ωc t                2π − Ωt
                         2R0 sin           = 2Rt sin             ,             (33)
                                    2                     2
                               2π         14π
                         t=           =       .                                (34)
                             ωc + Ω       9Ω

2.2      Part B
Now we examine the case wherein the turntable rotates freely, i.e. without fric-
tion, around vertical axis. In this case the total kinetic energy and the angular
momentum are conserved.
B.1
    Integrating the torque equation for the ball one gets:
                                                 mr
                          ⃗ω × ẑ = ⃗ω0 × ẑ −      (⃗v − ⃗v0 ).            (35)
                                                 I
Substituting this into the non slipping condition we get

                                     ⃗ + ⃗ω0 × ẑr −    mr
                          ⃗v = Ωẑ × R                      (⃗v − ⃗v0 ),    (36)
                                                         I
                                        ⃗ 0 + ⃗ω (0) × ẑr,
                          ⃗v0 = Ω0 ẑ × R                                   (37)

which gives
                                I
                                              ⃗       ⃗

                       ⃗v =          ẑ × ΩR − Ω0 R0 + ⃗v0 ,                (38)
                             I + mr2
                                I
                       ⃗v˙ =         ẑ ×   Ω̇(t)R⃗ + Ω⃗v .                 (39)
                             I + mr2

B.2
      The torque equation for the turntable is:
                                             ⃗ × ⃗v˙ .
                                 Id Ω̇ẑ = −mR                              (40)

If we substitute the velocity and accelaration in the above equation and use the
triple vector product rule we get

                                ⃗         I
                                                      ⃗
                  Id Ω̇ẑ = −mR ×             ẑ × Ω̇R + Ω⃗v
                                      I + mr2
                                mI   2
                                                      ⃗

                   Id Ω̇ = −            Ω̇R + Ω ⃗v · R                      (41)
                              I + mr2
⃗v · R can be obtained using equation 44 as:

                      ⃗ =            I
                                                  ⃗ − Ω0 R
                                                         ⃗0      ⃗
                 ⃗v · R     ⃗v0 +         ẑ × ΩR              · R,         (42)
                                  I + mr2

                                     I            ⃗    ⃗
                        =   ⃗v0 −         Ω0 ẑ × R0 · R.                   (43)
                                  I + mr2

Applying this to the turntable torque equation (41), we obtain:

               mI      2             mI                I            ⃗0 · ⃗
       Id +          R Ω̇ = −              Ω ⃗v0 −          Ω0 ẑ × R    R. (44)
            I + mr2                I + mr2          I + mr2
We may rewrite the equation into a simpler form as:

                                 αΩ/r2 C  ⃗ ·R
                                             ⃗
                          Ω̇ = −                 ,                          (45)
                                   δ + αR2 /r2
where
                                          I
                               α ≡            ,                             (46)
                                      I + mr2
                                       Id
                                δ ≡        ,                                (47)
                                      mr2
                                                    ⃗ 0.
                                ⃗c ≡ ⃗v0 − αΩ0 ẑ × R                       (48)


B.3
      Observe that the velocity of the ball can be written as
                                             ⃗ + ⃗c,
                                 ⃗v = αΩẑ × R                              (49)
and, therefore, using equation (42) we see that:
                                      ⃗ ⃗
                              ⃗ = 1 d(R · R) = 1 Ṙ2 = R
                         ⃗v · R                        ⃗ · ⃗c.              (50)
                                  2    dt      2
Substituting this in equation (45) we get:
                        1 dΩ    1      1      d (αR2 /r2 )
                             =−                            .                (51)
                        Ω dt    2 δ + αR2 /r2     dt
The integration of this leads to:
                              2
                                           δ + αR02 /r2

                             Ω
                        ln         = ln                   ,                 (52)
                            Ω0             δ + αR2 /r2
                                         δ + αR02 /r2
                                Ω2 = Ω20                                    (53)
                                         δ + αR2 /r2

B.4 From this result we see that the maximum possible Ω is achieved when R2 , i.e
when the ball crosses the center of the turntable:
                                           r
                                                 αR2
                             Ωmax = Ω0 1 + 20                              (54)
                                                  δr

B.5
   Now we determine the trajectory of the ball. The total angular momentum
along ẑ is:
                                          ⃗ × ⃗v + Iωz ẑ.
                        Mz ẑ = Id Ωẑ + mR                                     (55)
Since there is no torque along ẑ acting on the ball ωz is constant. So we define the
following conserved quantity:
                                  ⃗ × ⃗v = Id Ω0 ẑ + mR
                  Lẑ = Id Ωẑ + mR                    ⃗ 0 × ⃗v0 .              (56)
The velocity of the ball ⃗v was written as the sum of a part that depends on the
                     ⃗ and a constant vector ⃗c. Then, we have:
position of the ball R

                          ⃗ × ⃗v = R
                          R          ⃗ × αΩẑ × R  ⃗ + ⃗c                   (57)
                                                  ⃗ × ⃗c.
                                     = −αΩR2 ẑ + R                             (58)
Substituting this in equation (59) one gets:

                       Lẑ = Id Ωẑ + αΩmR2 ẑ + mR ⃗ × ⃗c,                     (59)

                                        L − mẑ · R⃗ × ⃗c
                                    Ω=                                          (60)
                                           Id + αmR2
Choosing the direction of x-axis along ĉ and y-axis along ẑ × ĉ,
                                         L/mr2 + cy/r2
                                   Ω =                 ,                        (61)
                                          δ + αR2 /r2
Combining this with equation (52) we have:
                                                                         2
                                   δ + αR02 /r2           L/mr2 + cy/r2

                               Ω20        2 2
                                                     =                     ,    (62)
                                    δ + αR /r              δ + αR2 /r2
                                                                        2
            Ω20 δ + αR02 /r2       δ + αR2 /r2           L/mr2 + cy/r2 .

                                                     =                          (63)
Observe that this is the equation for conic section. Let us elaborate on this fact.
Let us introduce the following constants:
                       k ≡ Ω20 δr2 + αR02 , λ ≡ L/m.

                                                                              (64)

Expanding in Cartesian coordinates R⃗ = xx̂ + y ŷ, we obtain:

             kα δr2 + α(x2 + y 2 ) − λ2 + 2λcy + c2 y 2 = 0,

                                                                                (65)
                   kα2 x2 + (kα2 − c2 )y 2 − 2λcy = λ2 − kαδr2                  (66)

Since kα2 > 0, the trajectory is determined by the sign of kα2 − c2 :

                                  Ellipse if kα2 > c2 .                           (67)
                                  Parabola if kα2 = c2 .                          (68)
                                  Hyperbola if kα2 < c2 .                         (69)

2.3    Part C
C.1
   Here it is given that Ω = const. In addition, for the given mass distribution
where the ball is filled up to half of its radius, the momentum of inertia becomes

                                          mr2
                                     I=       .                                   (70)
                                          10
                                                     ⃗ and if the ball is charged
. In the presence of vertical uniform magnetic field B
                                       2
with uniform surface density ρ = Q/4πr , the equation of motions are changed as
follows:

                                   m⃗v˙ = F⃗f + Q⃗v × B ⃗                         (71)
                                   I ⃗ω˙ = −rẑ × F⃗f + τ⃗s ,                     (72)

where τs = Qr2 ⃗ω × ⃗ B/3 is the torque due to spinning of the charged sphere and
Ff is the friction force. Calculation of τs is essentially identical to the mechanical
moment of inertia for thin spherical shell. The torque is calculated as:
                Z
       τ⃗s   = d cos θdϕρ⃗r × (⃗ω × ⃗r) × B    ⃗                                   (73)
                Z
             = r2 d cos θdϕρ (⃗ω × ⃗r) ⃗r · B⃗                                     (74)
                      Z
                          2
             = ρ⃗ω × r d cos θdϕ⃗r ⃗r · B  ⃗                                       (75)
                          Z
             = ρBr4 ⃗ω × d cos θdϕ cos θ (sin θ cos ϕx̂ + sin θ sin ϕŷ + cos θẑ) (76)
                            Z 1               Z 2π
                    4                      2
             = ρBr ⃗ω × ẑ      d cos θ cos θ      dϕ                              (77)
                             −1                 0
                  2
                Qr      ⃗
            =      ⃗ω × B.                                                        (78)
                 3

C.2

   In addition we have the non–slipping condition from which we get:
                              ⃗v = Ωẑ × R  ⃗ + ω × ẑr,                    (79)
                              ⃗v˙ = Ωẑ × ⃗v + ⃗ω˙ × ẑr →                  (80)
                               ⃗ω˙ r = Ω⃗v − ⃗v˙ × ẑ.                      (81)
Substituting these and Ff from the Newton’s equation into the torque equation,
one gets:
                                                2
                                       ⃗ + Qr ⃗ω × B

          I ⃗ω˙ = −rẑ m⃗v˙ − Q⃗v × B                ⃗                       (82)
                                              3
                                                             2
                                                     ⃗ + Qr B ⃗v − Ωẑ × R

          I(Ω⃗v + ẑ × ⃗v˙ ) = −r2 ẑ × m⃗v˙ − Q⃗v × B                   ⃗   (83)
                                                            3
                               4Qr2 B                  Qr2 B ⃗

                    2 ˙

           I + mr ⃗v =                 − IΩ ⃗v × ẑ −       ΩR.              (84)
                                 3                       3
The last equation maybe written as:
                                ⃗
                             d2 R      ⃗
                                      dR
                                  − γ             ⃗ = 0,
                                         × ẑ + β R                         (85)
                             dt2      dt
where
                                Qr2 B
                          β≡              ,                                 (86)
                             3 (I + mr2 )
                             4Qr2 B − 3IΩ     4β
                          γ≡            2
                                            =    − αΩ.                      (87)
                              3 (I + mr )     Ω

C.3
    Here we divide R ⃗ and Ω respectively by 1 meter and 1 Hz, so we will deal
                                                       ⃗ = {x, y}, we have the
with unitless quantities. Then, in terms of components R
following unitless equations:
                                  ẍ − γ ẏ + βx = 0,                       (88)
                                  ÿ + γ ẋ + βy = 0.                       (89)
Substituting the following coordinate transformation
                                x(t) = ρ(t) cos(η(t)),                      (90)
                                y(t) = ρ(t) sin(η(t)),                      (91)
in the component equation leads to
                              ρ̈ + (β − γ η̇ − η̇ 2 )ρ = 0,                 (92)
                              ρ̇(γ + 2η̇) = 0.                              (93)

The first equation comes from the requirement that the coefficients of cos η (sin η)
and the terms containing first time derivative ρ̇ and η vanish separately. It is
straightforward to see this is equivalent to both ẋ and ẏ terms vanish. From this
we find:
                                    γ
                               η = − t + ϕ,                                       (94)
                                    2
                                                             γ2
                               β ′ ≡ β − γ η̇ − η̇ 2 = β +      .                 (95)
                                                             4
It is clear that for ρ̈ + β ′ ρ = 0 one gets three distinct behavior for ρ(t):

                            β ′ > 0, for harmonic oscillation                     (96)
                            β ′ < 0, for exponential run away                     (97)
                            β′ = 0                                                (98)

We examine the case β ′ = 0 in part C.4.
C.4
                               2
   If β ′ = 0 we have β = − γ4 . Therefore, ρ̈ = 0 and we have ρ(t) = A + Dt,
where A and D are constants to be determined.
   From the initial conditions

           x(0) = 1, y = 0, vx (0) = ẋ|t=0 = 1, , vy (0) = ẏ|t=0 = −1.          (99)

we find:

                             A = 1, D = 1, γ = 2, β = −1.                        (100)

Then the solution for the coordinates are:

                  x(t) = (1 + t) cos(t), y(t) = −(1 + t) sin(t).                 (101)

                         ⃗ can be calculated:
From this, the length of R

                          R2 = x(t)2 + y(t)2 = (1 + t)2 .                        (102)

Using the definitions of β and γ, the solutions for Ω are found as:
                                           √
                               Ω = −11 ± 77.                                     (103)

                                              ⃗ is in ẑ direction), from β < 0 we
Since the both solutions for Ω < 0 and B > 0 (B
see that Q < 0.
C.6

   From the solution we see that for every t = 2π time R  ⃗ makes one revolution.
                         2             2     2
After N ≫ 1 rotations, R = (1 + t) = t or R = 1 + t and we find the change in
R per rotation to be ∆R = ∆t = 2π.
   Scalar multiplying the acceleration by velocity and integrating it we obtain:
                           ⃗v · ⃗v˙ = −β⃗v · R⃗ →                           (104)
                             2       2          2 2     2

                            v − v0 = −β R − R0 = t .                        (105)
Then the total and per rotation changes in the kinetic energy associated to the
motion of the ball’s center per rotation are:
                                ⃗˙ · R
                   ⃗v · ⃗v˙ = β R    ⃗ →                                  (106)
                                2     2
                                            2    2
                                                         2
                              v − v0        R − R0     t
                    ∆K =                =            = ,                  (107)
                                  2           2        2
                                  2       2
                                                  2
                                vN  +1 − vN      R
                    ∆KN =                   =∆        = t∆t = 4π 2 N.     (108)
                                      2           2
Now we estimate the change in the kinetic energy associated with the spinning of
the ball. From non–slipping condition we get

                                                           ⃗ .
                           ω 2 = v 2 + Ω2 R2 + 2Ω⃗v · ẑ × R                 (109)

For our initial condition ⃗v0 · ẑ × R⃗ 0 = −v0 R0 and, for large N , ⃗v and R
                                                                             ⃗ are

approximately orthogonal to a very good approximation, so ⃗v · ẑ × R   ⃗ = −vR.
Our calculated Ω < 0, so we can write this term as |Ω|vR. So the kinetic energy
for spinning and its change are
                      Iω 2     I (v 2 + Ω2 R2 + 2|Ω|vR)
                Ks =       =                             ,                      (110)
                       2                    2
                        I ((v 2 − v02 + Ω2 (R2 − R02 ) + 2|Ω|(vR − v0 R0 ))
               ∆Ks =                                                        .   (111)
                                                  2
Finally, combining all the results we have:
                       I(ω 2 − ω02 )           I (v 2 + Ω2 R2 + 2|Ω|vR) t2
            ∆E =                     + ∆K ≃                            + ,      (112)
                             2                              2           2
                        2               2

                       t (1 + |Ω|)
                  =                       +1 ,                                  (113)
                        2       11
                           2      2
                       I(ωN   − ωN   −1 )
          ∆EN =                           + ∆KN                                 (114)
                              2
                               (1 + |Ω|)2

                  =    4πN                  + 1 with:                           (115)
                                    11
                              √
             |Ω| =     |11 ± 77|.                                               (116)

  The sketch of the trajectory looks like




References
[1] Warren Weckesser , “A ball rolling on a freely spinning turntable”
    AM. J. Phys. 65 (8), 736-738(1997).

[2] Luis Rodriguez, Comment on “A ball rolling on a freely spinning turntable”
    by Warren Weckesser AM. J. Phys. 66 (10), 927 (1998).

[3] Hector A. Munera, “A ball rolling on a freely spinning turntable: Insights
    from a solution in polar coordinates” Latin American Journal of Physical
    Education Vol. 5 (1), 49 (2011).
