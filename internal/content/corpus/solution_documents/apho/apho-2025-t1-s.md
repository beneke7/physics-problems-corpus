---
id: solution-document-apho-2025-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2025/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2025-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2025/T1_S.pdf."
---

T1. Precession of the Earth’s axis                            Part B. The time-averaged gravitational field
(10 pts)                                                      of the Sun (3.2 p)
                                                                 B.1. Solution I: Using the gravitational potential.
Part A. The shape of the Earth (1.0 p)
                                                              At an arbitrary point on the z axis the gravitational
  A.1. Let us express the dimensions of hmax , G, ω,          potential U (z) created by the ring is given by
ME and R in terms of the base dimensions length L,                                         MS
mass M and time T:                                                           U (z) = →G #           .
                                                                                         z 2 + d2SE
                [hmax ] = L,                                  The gravitational field can be found by di!erentiation
                   [G] = L3 M→1 T→2 ,                         with respect to z:
                    [ω] = T→1 ,                                                   dU               z
                                                                     gz (z) = →      = →GMS               3/2
                                                                                                              .
                 [ME ] = M,                                                       dz        (z 2 + d2SE )
                   [R] = L.                                   Expanding this to first order in z we get:

The relation given in the problem should hold for the                                          GMS
                                                                                  gz (z) ↔ →        z.
dimensions too:                                                                                d3SE
              !           "→1 →ω ε ϑ                          The negative sign means that gz points towards the
           L = L3 M→1 T→2    T M L .
                                                              center of the Sun ring.
After simplification we get:                                   Task B.1., Solution I.                             Pts
                                                               Expressing the magnitude of U (z) on the           0.2
                L = Lϑ→3 Mε+1 T2→ω ,                           axis in terms of z correctly
                                                               Correct sign of U (z)                              0.1
from which we get the following equations for the ex-          Expressing gz as a derivative of U (z). (0.1 p     0.2
ponents:                                                       if negative sign is not included)
                                                               Calculating the derivative correctly               0.2
                      0 = 2 → ε,
                                                               Approximate form of gz for |z| ↗ dSE               0.1
                      0 = ϑ + 1,                               Indicating correct direction in the figure         0.2
                      1 = ϖ → 3.                               Total for Task B.1.                                1.0

From here we get ε = 2, ϑ = →1 and ϖ = 4.                         Solution II: Using the integration of fields. A small
                                                              segment of the Sun ring with mass dM generates a
                                                              field
 Task A.1.                                       Pts                                      G dM
 Expressing the dimension of G in terms of       0.2                              dg = 2
                                                                                        z + d2SE
 base dimensions
                                                              on the symmetry axis of the ring at height z (see Fig-
 Setting up three equations for the expo-        0.3
                                                              ure B.1 ).
 nents (0.1 p for each)
 Correct values for exponents (0.1 p for each)   0.3
 Total for Task A.1.                             0.8

   A.2. In the light of the result of the previous sub-
part the relation for hmax reads as

                               ω 2 R4
                   hmax ↑             .
                               GME

Here ω = 2ϱ/(24 h) = 7.27 ↓ 10→5 s→1 . Using 1 as the                                 Figure B.1.
dimensionless constant, we get hmax = 21.9 km.                Due to symmetry, the net field at the same point is
                                                              parallel with the axis, so only the corresponding com-
 Task A.2.                                       Pts          ponent of this field should be taken:
 Correct calculation of ω (even if it was done   0.1
                                                                                   dgz = →dg cos ς,
 inherently)
 Correct value for hmax .                        0.1          where the negative sign indicates the →z direction.
 0 p if unit is missing.                                      The angle ς is the same for all segments of the ring
 Total for Task A.2.                             0.2          and
                                                                                            z
                                                                              cos ς = #            .
                                                                                        z 2 + d2SE

                                                          1
Using these three equations and integrating over the            Solution II: By integration of potential. Let us take
mass of the ring we get the net field on the axis at         a point P in the plane of the sung ring at distance r
arbitrary position:                                          from the center (see Figure B.3 ).
                                z
             gz = →GMS                 3/2
                                           .
                         (z 2 + d2SE )
Using the relation |z| ↗ dSE this simplifies to:
                               z
                  gz ↔ →GMS 3 .
                              dSE

 Task B.1., Solution II.                           Pts
 Writing the gravitational field of an element     0.2
 of the ring
 Figure with correct geometry                      0.1
 Taking only the z component for symmetry          0.1                                       Figure B.3.
 reasons
 Summing/integrating over the whole ring           0.1       The distance s of a small element of the ring of angu-
 Calculating the gz at arbitrary z correctly       0.2       lar size dφ located at angle φ with respect to point P
                                                             is given by law of cosines:
 Approximate form of gz for |z| ↗ dSE              0.1
 Indicating correct direction in the figure        0.2                        \$
 Total for Task B.1.                               1.0                    s = d2SE + r2 → 2dSE r cos φ.

    B.2. Solution I: Using Gauss’s theorem. The ra-          The gravitational potential at point P due to the
dial component of the field gr in the plane of the Sun       small segment can be written as
ring can be found from the gravitational Gauss’s law                                                GMS dφ
(see Figure B.2 ).                                                                   dU = →                ,
                                                                                                     s 2ϱ
                                                             so the net potential of the ring at point P is
                                                                                    %2ϖ
                                                                        GMS               ! 2                     "→ 1
                                                              U (r) = →                    dSE + r2 → 2dSE r cos φ 2 dφ.
                                                                         2ϱ
                                                                                    0

                                                             Let us make the indegrand dimensionless:
                                                                                        %2ϖ&                          '→ 12
                      Figure B.2.                                        GMS                          r2  2r cos φ
                                                               U (r) = →                           1+ 2 →                       dφ.
                                                                         2ϱdSE                       dSE    dSE
Apply Gauss’s theorem for the cylindrical region of                                     0
height 2|z| and radius r:
                                                             To simplify the integral we can use the fact that
              gr 2z ↓ 2ϱr + gz 2r2 ϱ = 0,                    r ↗ dSE . Introducing the quantity
from where we get                                                                             r2    2r cos φ
                       r       GMS                                                  ↼=            →
            gr (r) = → gz (z) = 3 r.                                                         d2SE     dSE
                      2z       2dSE
                                                             (↼ ↗ 1) we can expand the integrand up to second
The field points radially outwards.
                                                             order in ↼:
 Task B.2., Solution I.                            Pts                                                     ↼ 3↼2
                                                                                            → 12
 Idea of using Gauss’s law                         0.5                           (1 + ↼)           ↔1→       +   .
                                                                                                           2   8
 Taking a cylindrical Gaussian surface with        0.4
 axis z near the center of the Sun ring                      After writing back the expression of ↼ and keeping
 Writing Gauss’s law correctly in terms of         0.6       terms up to quadratic order in r/dSE we get:
 radial and axial fields (0.3 p in case of mis-
                                                                          → 12               r2    r cos φ 3r2 cos2 φ
 take in areas, 0 p if the error is dimensional)                (1 + ↼)          ↔1→          2  +        +           .
 Final result for gr is proportional to r (0 p     0.3                                      2dSE    dSE      2d2SE
 if not)                                                     The third term on the right side is canceled after in-
 Correct proportionality constant in gr            0.2       tegrating over φ, so the potential takes the form
 (0.1 p for error in prefactor, 0 p for dimen-
 sional error)                                                                          %2ϖ&                                '
                                                                           GMS                           r2    3r2 cos2 φ
 Indicating correct direction in the figure        0.2        U (r) = →                            1→     2  +                  dφ.
 Total for Task B.2.                               2.2                     2ϱdSE                        2dSE     2d2SE
                                                                                        0


                                                         2
            ( 2ϖ
Using that 0 cos2 φ dφ = ϱ (from the analogy with              The density of the homogeneous Earth is ↽ =
the calculation of real power in AC circuits), the in-         3ME /(4ϱRe2 Rp ), so the mass of one of the excess re-
tegral can be evaluated:                                       gions is the following:
                       &                      '
                 GMS             r2     3ϱr2                                        3ME 2ϱ 2           hmax
     U (r) = →           2ϱ → 2ϱ 2 + 2          .                   m = ↽V =                 Re hmax =      ME .
                2ϱdSE           2dSE    2dSE                                          2
                                                                                   4ϱRe Rp 3           2Rp
This simplifies to
                                                                Task C.1.                                        Pts
                       GMS   GMS r2                             Idea of stretching the ellipsoid into sphere     0.2
             U (r) = →     →        .
                       dSE    4d3SE                             Volume of one of the excess regions              0.3
The gravitational field is the negative gradient of the         Correct expression for the density of Earth      0.1
potential:                                                      Final result for m                               0.2
                          dU     GMS                            Total for Task C.1.                              0.8
              gr (r) = →      = 3 r.
                          dr     2dSE
                                                                   C.2. The torque acting on the perfect sphere of
 Task B.2., Solution II.                          Pts          radius Re is zero due to symmetry. From the super-
 Expressing distance s from trigonometry          0.2          position principle outlined in the problem, it follows
                                                               that the torque ⇁⇀ acting on the ellipsoid-shaped Earth
 Writing the potential generated by a small       0.1
                                                               is equal in magnitude but opposite in direction to the
 element of the ring
                                                               torque ⇁⇀↑ acting on the two equivalent point masses
 Writing U (r) as an integral                     0.1
                                                               (each of mass 2m/5): ⇁⇀ = →⇁⇀↑ .
 Taylor expansion of the integrand up to sec-     0.6
 ond order in r (0.1 p if only first order is
 calculated, 0.4 p if the term with cos2 φ is
 missing)
 Integrating over φ (0.1 p if the term cos2 φ     0.2
 is missing)
 Expressing gz as a derivative of U (z). (0.1 p   0.2
 if negative sign is not included)
 Calculating the derivative correctly             0.1
 Final result for gr is proportional to r (0 p    0.3
 if not)
 Correct proportionality constant in gr           0.2
 (0.1 p for error in prefactor, 0 p for dimen-                  Figure C.2. The forces acting on the two point masses.
 sional error)
 Indicating correct direction in the figure       0.2          The magnitude of the torque acting on the point
 Total for Task B.2.                              2.2          masses can be calculated with the help of Figure C.2
                                                               as
Part C. The torque acting on the Earth (2.6 p)                         |⇁⇀↑ | = |⇀⇁ | = 2Fz R sin α + 2Fr R cos α,

    C.1. The ellipsoid of revolution can be trans-             where
formed into a perfect sphere of radius Re (see Figure                        2         2    R cos α
C.1.) by stretching it uniformly along the polar diam-                   Fz =  m|gz | = mGMS 3      ,
                                                                             5         5     dSE
eter by a factor Re /Rp , so the volume of the ellipsoid
is given by                                                                  2         2    R sin α
                                                                         Fr = m|gr | = mGMS         .
                                                                             5         5    2d3SE
                         4ϱ 3 Rp   4ϱ 2
          Vellipsoid =     R     =   R Rp .
                          3 e Re    3 e                        Substituting these forces into the expression for ⇁ ↑ and
                                                               simplifying we get:

                                                                                     6 GmMS 2
                                                                           |⇀⇁ | =          R sin α cos α.
                                                                                     5 d3SE

                                                               Using the result of part C.1. this can be written as

                                                                                  3 GME MS
                         Figure C.1.
                                                                        |⇀⇁ | =            Rhmax sin α cos α.
                                                                                  5 d3SE
The volume of one of the excess regions is:
                                                               The torque ⇁⇀↑ is pointing out of the plane of Figure
           &                  '
         1 4ϱ 3 4ϱ 2                2ϱ 2                       C.2, so the torque ⇁⇀ acting on the ellipsoid-shaped
     V =        R →      R Rp =       R hmax .                 Earth is pointing into the plane.
         2 3 e         3 e           3 e

                                                           3
  Task C.2.                                       Pts          where we used our previous result for ⇁ . After simpli-
  Idea that the net torque acting on a perfect    0.1          fying:
  sphere is zero (even if it was done inher-                                      3 GMS hmax
                                                                            !1 =               cos α.
  ently)                                                                          2 d3SE Rω
  Idea of ⇁⇀ = →⇁⇀↑ (even if it was done inher-   0.2          From this the period of precession:
  ently)
  Including the terms coming from Fr and Fz       0.8                              2ϱ   4ϱ   d3SE Rω
                                                                            T1 =      =                   .
  in the torque correctly (0.4 p each)                                             !1    3 GMS hmax cos α
  No points are given for the formula ⇁⇀ =
 ⇀r ↓ F⇀ itself.                                                Task D.1.                                          Pts
  Adding the two contributions with the cor-      0.2           Newton’s second law for rotational motion          0.2
  rect sign                                                     (0 p if it is clearly not in a vectorial form or
  Calculation leading to the correct net          0.3           components)
  torque                                                        Expressing the angular momentum in terms           0.2
  Correct direction for ⇁⇀                        0.2           of ω and the moment of inertia
  Total for Task C.2.                             1.8           Writing the moment of inertia as 25 ME R2          0.2
                                                                (0.1 p for incorrect prefactor, 0 p for di-
                                                                mensional error)
Part D. Angular speed of the precession of the                               ⇀
                                                                Writing |dL/dt|     in terms of L, !1 and α        0.8
Earth’s axis (2.0 p)                                            Using the equation !1 = 2ϱ/T1                      0.1
   D.1. The torque acting on the Earth results a                Finding T1 correctly                               0.3
                                      ⇀
change in its angular momentum vector L:                        Total for Task D.1.                                1.8

                              d⇀
                               L                                  D.2. After substituting the data we get the nu-
                       ⇁⇀ =      ,
                              dt                               merical value of the period:
where ⇀L is parallel with the angular velocity of                                  T1 = 80 600 years.
Earth’s rotation and its magnitude (assuming a uni-
form mass distribution and neglecting the deviation             Task D.2.                                          Pts
from a sphere) is given by                                      Correct numerical result for T1 .                  0.2
                           2                                    Full points for correct substitution into a
                   |⇀
                    L| =     ME R2 ω.                           dimensionally correct formula.
                           5
                                                                Full points for using the calculated value for
Since ⇁⇀ (i.e. the rate of change of the angular momen-         hmax (resulting T1 =77400 years.)
tum vector) is perpendicular to ⇀     L, the length of ⇀
                                                       L        0 p if the substitution is incorrect or the
remains constant but its direction changes, as shown            formula has a dimensional error.
in Figure D.1. As a result, the vector L  ⇀ sweeps along
                                                                Total for Task D.2.                                0.2
the side of a cone of half apex angle α.
                                                               Part E. The e!ect of the Moon (1.2 p)
                                                                  E.1. In a similar fashion as in Part D, we can write
                                                               the torque exerted by the Moon as
                                                                                3 GME MM
                                                                        ⇁M =             Rhmax sin α cos α.
                                                                                5 d3M E

                                                               If the e!ect of the Moon is taken into account, the
                                                               torques exerted by the Sun and the Moon add up,
                      Figure D.1.
                                                               and as a result, the net torque can be written as
                                                                                &              '
Drawing an analogy with a uniform circular motion,                      3         MS     MM
                                                                   ⇁2 = GME            +         Rhmax sin α cos α.
we can write an equation between L, its time deriva-                    5         d3SE   d3M E
tive and the angular speed of precession:
                ) )                                            As we have seen it previously, the angular speed of
                ) dL )                                         precession in terms of the torque is
                ) ⇀)
                ) ) = !1 | ⇀L| sin α.
                ) dt )                                                                         ⇁2
                                                                                      !2 =           ,
                                                                                             L sin α
From this equation the angular speed of precession !1
can be expressed:                                              so we get
                  3
           ⇁        GME MS Rhmax sin α cos α/d3SE                          !2   ⇁2   MS /d3SE + MM /d3M E
 !1 =           = 5      2                        ,                           =    =                      .
        L sin α                2
                         5 ME R ω sin α                                    !1   ⇁1         MS /d3SE

                                                           4
The ratio of the periods is the inverse of this:

             T2         MS /d3SE
                =                     .
             T1   MS /dSE + MM /d3M E
                       3



 Task E.1.                                         Pts
 Stating that the torques of the Sun and the       0.3
 Moon add up
 Calculating the torque exerted by the Moon        0.4
 or using that it is proportional to MM /d3SE
 Expressing T2 /T1 correctly (0 p if T1 < T2 )     0.3
 Total for Task E.1.                               1.0
   E.2. After substitution we get

                  T2 = 25 400 years,

which is quite close to the value obtained by modern
observations.

 Task E.2.                                         Pts
 Correct numerical result for T2 .                 0.2
 Full points for using the calculated value
 for hmax (resulting T1 =24400 years. 0 p if
 the result does not come from substitution
 (e.g. the student uses the value written in
 the introduction of the problem) or the sub-
 stitution is incorrect.
 0 p if the result comes from a formula with
 dimensional error
 Total for Task E.2.                               0.2




                                                         5
