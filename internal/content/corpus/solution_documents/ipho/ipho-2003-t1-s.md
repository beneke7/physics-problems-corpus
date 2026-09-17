---
id: solution-document-ipho-2003-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2003/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2003-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2003/T1_S.pdf."
---

Solution to Theoretical Question 1

                              A Swing with a Falling Weight
Part A
(a) Since the length of the string L = s + Rθ is constant, its rate of change must be zero.
    Hence we have
                                           s + Rθ = 0                               (A1)
(b) Relative to O, Q moves on a circle of radius R with angular velocity θ , so
                                        K
                                        vQ = Rθ tˆ = − s tˆ                         (A2)

(c) Refer to Fig. A1. Relative to Q, the displacement of P in a time interval ∆t
        K
    is ∆r ′ = ( s∆θ )( − rˆ) + ( ∆s )tˆ = [( sθ)( − rˆ) + s tˆ]∆t . It follows
                                               K
                                               v ′ = − sθ rˆ + s tˆ                                 (A3)


                                                                 Q

                               s+∆s                 ∆θ
                               s         K
                                   P    ∆r ′
                                                              s+∆s
                                       s∆θ
                                                                                Figure A1
                                                              − r̂
                                               tˆ

(d) The velocity of the particle relative to O is the sum of the two relative velocities given in
    Eqs. (A2) and (A3) so that
                               K K K
                              v = v ′ + vQ = ( − sθ rˆ + s tˆ ) + Rθ tˆ = − sθ rˆ       (A4)
                                                                                    K
(e) Refer to Fig. A2. The ( − tˆ )-component of the velocity change ∆v is given
                 K                                                                    K    K
    by ( −tˆ) ⋅ ∆v = v∆θ = vθ ∆t . Therefore, the tˆ -component of the acceleration a = ∆v / ∆t
    is given by tˆ ⋅ aˆ = −vθ . Since the speed v of the particle is sθ according to Eq. (A4),
    we see that the tˆ -component of the particle’s acceleration at P is given by
                                   K
                                   a ⋅ tˆ = − vθ = −( sθ)θ = − sθ 2                               (A5)
                                               − r̂       − tˆ
                                                                     v ∆θ
                                               Q                                ∆v
                                                               ∆θ
                                         ∆θ              v                       K    K
                                                                                 v + ∆v
                                                                K        K
                                                                v       ∆v
                                                                                          Figure A2
                          P                                                 O
                                                         12
    Note that, from Fig. A2, the radial component of the acceleration may also be obtained as
    K
    a ⋅ rˆ = −dv / dt = −d ( sθ) / dt .

(f) Refer to Fig. A3. The gravitational potential energy of the particle is given by U = −mgh .
    It may be expressed in terms of s and θ as
                                 U (θ ) = −mg[ R(1 − cosθ ) + s sin θ ]                         (A6)

                                                       x
                                                                   A
                                                                           R −R cosθ
                                           Q
                                                       θ                   R cosθ
                                   h       s       R
                                                               O
                                                   s sinθ
                                                                                    Figure A3
                                 P

(g) At the lowest point of its trajectory, the particle’s gravitational potential energy U must
    assume its minimum value U m . By differentiating Eq. (A6) with respect to θ and using
    Eq. (A1), the angle θ m corresponding to the minimum gravitational energy can be
    obtained.
                                 dU                     ds
                                    = − mg R sin θ +        sin θ + s cosθ
                                 dθ                     dθ
                                    = − mg [R sin θ + ( − R ) sin θ + s cosθ ]
                                       = −mgs cosθ
                    dU                        π
    At θ = θ m ,           = 0 . We have θ m = . The lowest point of the particle’s trajectory is
                    dθ θ m                    2
    shown in Fig. A4 where the length of the string segment of QP is s = L− π R /2.

                                                               x
                                                                       A

                                                       π
                                                           2
                                               Q
                                                       R            O
                                               s

                                                                              Figure A4
                                               P
  From Fig. A4 or Eq. (A6), the minimum potential energy is then
                             U m = U (π / 2 ) = −mg [ R + L − (πR / 2)]                         (A7)
  Initially, the total mechanical energy E is 0. Since E is conserved, the speed v m of the
  particle at the lowest point of its trajectory must satisfy


                                                               13
                                                     1 2
                                       E=0=           mv + U m                           (A8)
                                                     2 m
  From Eqs. (A7) and (A8), we obtain

                              v m = − 2U m / m = 2 g[ R + ( L − πR / 2)]                 (A9)



Part B
(h) From Eq. (A6), the total mechanical energy of the particle may be written as
                           1 2               1
                     E=0=    mv + U (θ ) = mv 2 − mg[ R(1 − cosθ ) + s sin θ ]           (B1)
                           2                 2
    From Eq. (A4), the speed v is equal to sθ . Therefore, Eq. (B1) implies

                                v 2 = ( sθ) 2 = 2 g[ R(1 − cosθ ) + s sin θ ]           (B2)

    Let T be the tension in the string. Then, as Fig. B1 shows, the tˆ -component of the net
    force on the particle is –T + mg sin θ . From Eq. (A5), the tangential acceleration of the
    particle is (− sθ 2 ) . Thus, by Newton’s second law, we have
                                       m(− sθ 2 ) = −T + mg sin θ                       (B3)

                                                         x
                                                             A
                                             Q
                                                      θ
                                         s       θ
                                                     R
                                                             O
                                        T
                                  P
                        mg sinθ                                         Figure B1
                                   θ mg


    According to the last two equations, the tension may be expressed as
                                                     mg
                         T = m( sθ 2 + g sin θ ) =       [2 R(1 − cosθ ) + 3s sin θ ]
                                                       s
                              2mgR        θ 3            L
                            =       [tan − (θ − )]( sin θ )                              (B4)
                                s         2 2            R
                              2mgR
                            =        ( y1 − y 2 )(sin θ )
                                s


    The functions y1 = tan(θ / 2) and y 2 = 3(θ − L / R) / 2 are plotted in Fig B2.




                                                      14
          y
                                           Figure B2
         30

         20
                                 θ                                               θ
                      y1 = tan                                        y1 = tan
         10                      2                                               2
                                          θs
          0
                                                                                          θ
        -10
                                                       3     L
                                                y2 =     (θ − )
        -20                                            2     R

        -30
              0       π/2            π          3π/2       2π       5π/2             3π

From Eq. (B4) and Fig. B2, we obtain the result shown in Table B1. The angle at
which .y 2 = y 1 is called θ s ( π < θ s < 2π ) and is given by
                                           3       L       θ
                                             (θ s − ) = tan s                                 (B5)
                                           2       R        2
or, equivalently, by
                                           L        2   θ
                                             = θ s − tan s                                    (B6)
                                           R        3    2
Since the ratio L/R is known to be given by
                          L 9π 2    π      π 2     1    π
                            =  + cot = (π + ) − tan (π + )                                    (B7)
                          R   8 3   16     8 3     2    8
one can readily see from the last two equations that θ s = 9π / 8 .

                                                Table B1

                                     ( y1 − y 2 )           sin θ                tension T
              0 <θ <π                positive              positive              positive
                θ =π                     +∞                     0                positive
              π <θ <θs               negative              negative              positive
                  θ =θs                  zero              negative                  zero
           θ s < θ < 2π              positive              negative              negative


Table B1 shows that the tension T must be positive (or the string must be taut and straight)
in the angular range 0<θ < θ s . Once θ reaches θ s , the tension T becomes zero and the
part of the string not in contact with the rod will not be straight afterwards. The shortest
possible value s min for the length s of the line segment QP therefore occurs at θ = θ s and
is given by


                                                    15
                                         9π 2   π 9π   2R    π
                 s min = L − Rθ s = R(     + cot − ) =    cot = 3.352 R                                           (B8)
                                          8 3   16 8    3    16
    When θ = θ s , we have T = 0 and Eqs. (B2) and (B3) then leads to v 2s = − gs min sin θ s .
    Hence the speed v s is
                                                      2 gR    π   π                  4 gR     π
                     v s = − gs min sin θ s =              cot sin =                      cos
                                                        3     16  8                    3      16                  (B9)
                        = 1.133 gR

(i) When θ ≥ θ s , the particle moves like a projectile under gravity. As shown in Fig. B3, it is
    projected with an initial speed v s from the position P = ( x s , y s ) in a direction making
    an angle φ = (3π / 2 − θ s ) with the y-axis.
    The speed v H of the particle at the highest point of its parabolic trajectory is equal to the
    y-component of its initial velocity when projected. Thus,
                                            4 gR      π    π
                      v H = v s sin(θ s − π ) =  cos sin = 0.4334 gR                   (B10)
                                              3       16    8
    The horizontal distance H traveled by the particle from point P to the point of maximum
    height is
                              v s2 sin 2(θ s − π ) v s2     9π
                           H=                     =     sin    = 0.4535 R                                        (B11)
                                       2g           2g       4

                                                       x
                                                                                 θs − π
                                     L
        m                                                                            vs
                                                  θ                        vH
                                            R                                                 P = ( xs , y s )
                                 y                         O
                                                  θs           φ                          H
                             s                                           s min
                                                               Q
                                                                                                     Figure B3


    The coordinates of the particle when θ = θ s are given by
                                                                   π                 π
                  x s = R cosθ s − s min sin θ s = − R cos             + s min sin        = 0.358R               (B12)
                                                                   8                 8
                                                                   π                 π
                 y s = R sin θ s + s min cosθ s = − R sin              − s min cos
                                                                         = −3.478 R         (B13)
                                                         8             8
    Evidently, we have | y s | > ( R + H ) . Therefore the particle can indeed reach its maximum
    height without striking the surface of the rod.




                                                       16
Part C
(j) Assume the weight is initially lower than O by h as shown in Fig. C1.

                                                            x
                                      L
                                                                    A
               m                                            θ
                                                        R
                                                                O

                                                                    h
                                                                          M       Figure C1

    When the weight has fallen a distance D and stopped, the law of conservation of total
    mechanical energy as applied to the particle-weight pair as a system leads to
                                 − Mgh = E ′ − Mg (h + D)                           (C1)
    where E′ is the total mechanical energy of the particle when the weight has stopped. It
    follows
                                        E ′ = MgD                                     (C2)
    Let Λ be the total length of the string. Then, its value at θ = 0 must be the same as at any
    other angular displacement θ. Thus we must have
                                      π                         π
                             Λ = L+        R + h = s + R(θ +        ) + (h + D)               (C3)
                                       2                        2
    Noting that D = α L and introducing ℓ = L−D, we may write
                                A = L − D = (1 − α ) L                                        (C4)
    From the last two equations, we obtain
                             s = L − D − Rθ = A − Rθ                             (C5)
    After the weight has stopped, the total mechanical energy of the particle must be
    conserved. According to Eq. (C2), we now have, instead of Eq. (B1), the following
    equation:
                                           1 2
                            E ′ = MgD =      mv − mg [R(1 − cos θ ) + s sin θ ]               (C6)
                                           2
    The square of the particle’s speed is accordingly given by
                                            2 MgD                       s
                           v 2 = ( sθ) 2 =        + 2 gR (1 − cos θ ) + sin θ                (C7)
                                              m                         R
    Since Eq. (B3) stills applies, the tension T of the string is given by
                                       − T + mg sin θ = m(− sθ 2 )                           (C8)
    From the last two equations, it follows




                                                 17
                      T = m( sθ 2 + g sin θ )
                             mg 2 M
                         =          D + 2 R(1 − cos θ ) + 3s sin θ               (C9)
                              s  m
                             2mgR MD                  3 A
                         =           + (1 − cos θ ) +     − θ sin θ
                               s  mR                  2 R

where Eq. (C5) has been used to obtain the last equality.
     We now introduce the function
                                                3 A
                           f (θ ) = 1 − cos θ +       − θ sin θ                 (C10)
                                                2 R
From the fact A = ( L − D ) >> R , we may write
                                    3A
                       f (θ ) ≈ 1 +      sin θ − cosθ = 1 + A sin(θ − φ )       (C11)
                                    2R
where we have introduced
                                       3A 2                   2R
                           A = 1+ (        ) , φ = tan −1                       (C12)
                                       2R                      3A
From Eq. (C11), the minimum value of f(θ) is seen to be given by
                                                                2
                                                       3 A
                               f min = 1 − A = 1 − 1 +                          (C13)
                                                       2R
Since the tension T remains nonnegative as the particle swings around the rod, we have
from Eq. (C9) the inequality
                                                                      2
                       MD           M ( L − A)        3A
                          + f min =            +1− 1+                     ≥0    (C14)
                       mR              mR             2R

or
                                                        2
                     ML              MA      3A                     MA   3A
                        +1 ≥            + 1+                ≈          +        (C15)
                     mR              mR      2R                     mR   2R

From Eq. (C4), Eq. (C15) may be written as
                               ML            ML 3L
                                  +1 ≥         +    (1 − α )                    (C16)
                               mR            mR 2 R
Neglecting terms of the order (R/L) or higher, the last inequality leads to
                        ML       3L         2R
                            +1      −1   1−
                        mR                  3L ≈   1
                α ≥ 1−         = 2R    =                                        (C17)
                       ML 3L    ML 3L 2 M          2M
                          +        +         +1 1+
                       mR 2 R   mR 2 R   3m         3m
The critical value for the ratio D/L is therefore
                                                1
                                       αc =                                     (C18)
                                                 2M
                                             1+
                                                 3m

                                                 18
                                    Marking Scheme

                               Theoretical Question 1
                            A Swing with a Falling Weight
 Total      Sub
                                   Marking Scheme for Answers to the Problem
Scores     Scores
Part A       (a)    Relation between θ and s . ( s = − Rθ )
                    ¾ 0.2 for θ ∝ s .
4.3 pts.    0.5     ¾ 0.3 for proportionality constant (-R).
                                                      K
            (b)     Velocity of Q relative to O. ( v = Rθ tˆ )
                                                       Q


            0.5     ¾ 0.2 for magnitude R θ .
                    ¾ 0.3 for direction tˆ .
                                                              K
            (c)     Particle’s velocity at P relative to Q. ( v ′ = − sθ rˆ + s tˆ )
                    ¾ 0.2+0.1 for magnitude and direction of r̂ -component.
            0.7
                    ¾ 0.3+0.1 for magnitude and direction of tˆ -component.
                                                                  K K K
            (d)     Particle’s velocity at P relative to O. ( v = v ′ + vQ = − sθ rˆ )
            0.7                                      K         K
                    ¾ 0.3 for vector addition of v ′ and vQ .
                                                                      K
                    ¾ 0.2+0.2 for magnitude and direction of v .
            (e)     tˆ -component of particle’s acceleration at P.
                                                 K K
                    ¾ 0.3 for relating a or a ⋅ tˆ to the velocity in a way that implies
            0.7               K
                            | a ⋅ tˆ | = v 2 / s .
                                    K
                    ¾ 0.4 for a ⋅ tˆ = − sθ 2 (0.1 for minus sign.)
            (f)     Potential energy U.
                    ¾ 0.2 for formula U = −mgh .
            0.5     ¾ 0.3 for h = R(1 − cosθ ) + s sin θ or U as a function of θ, s, and R.
            (g)     Speed at lowest point vm.
                    ¾ 0.2 for lowest point at θ = π / 2 or U equals minimum Um.
            0.7     ¾ 0.2 for total mechanical energy E = mv m2 / 2 + U m = 0 .
                    ¾ 0.3 for v m = − 2U m / m = 2 g[ R + ( L − πR / 2)] .
Part B      (h)     Particle’s speed vs when QP is shortest.

4.3 pts.    2.4     ¾ 0.4 for tension T becomes zero when QP is shortest.
                    ¾ 0.3 for equation of motion − T + mg sin θ = m(− sθ 2 ) .
                    ¾ 0.3 for E = 0 = m( sθ) 2 / 2 − mg[ R(1 − cosθ ) + s sin θ ] .
                              3        L       θ
                    ¾ 0.4 for    (θ s − ) = tan s .
                              2        R        2
                    ¾ 0.5 for θ s = 9π / 8 .
                    ¾ 0.3+0.2     for v s = 4 gR / 3 cos π / 16 = 1.133 gR




                                               19
          (i)   The speed vH of the particle at its highest point.
                ¾ 0.4 for particle undergoes projectile motion when θ ≥ θ s .
          1.9   ¾ 0.3 for angle of projection φ = (3π / 2 − θ s ) .
                ¾ 0.3 for v H is the y-component of its velocity at θ = θ s .
                ¾ 0.4 for noting particle does not strike the surface of the rod.
                ¾ 0.3+0.2 for
                           v H = 4 gR / 3 cos(π / 16) sin(π / 8) = 0.4334 gR .
Part C    (j)   The critical value α c of the ratio D/L.
                ¾ 0.4 for particle’s energy E ′ = MgD when the weight has stopped.
3.4 pts   3.4
                ¾ 0.3 for s = L − D − Rθ .
                ¾ 0.3 for E ′ = MgD = mv 2 / 2 − mg[ R(1 − cosθ ) + s sin θ ] .
                ¾ 0.3 for − T + mg sin θ = m(− sθ 2 ) .
                ¾   0.3 for concluding T must not be negative.
                ¾   0.6 for an inequality leading to the determination of the range of D/L.
                ¾   0.6 for solving the inequality to give the range of α = D/L.
                ¾   0.6 for α c = (1 + 2 M / 3m) .




                                         20
