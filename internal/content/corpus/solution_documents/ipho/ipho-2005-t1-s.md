---
id: solution-document-ipho-2005-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2005/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2005-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2005/T1_S.pdf."
---

36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                                               R.S.E.F.




                                                           Th1        AN ILL FATED SATELLITE
                                                                             SOLUTION


1.1 and 1.2
                      MT m            v 02       ⎫
                  G             =m               ⎪   ⎧                 1/ 3
                       r02            r0         ⎪          ⎛   2 2 ⎞
                                                     ⎪ r = ⎜ g RT T0 ⎟      ⇒ r0 = 4.22 ⋅ 10 7 m
                         2π r0                   ⎪   ⎪  0   ⎜        ⎟
                                                 ⎪   ⎪      ⎝ 4π
                                                                   2
                  v0 =                                               ⎠
                                                 ⎬ ⇒ ⎨
                          T0                     ⎪   ⎪           g
                       GM T                      ⎪   ⎪ v 0 = RT             ⇒ v 0 = 3.07 ⋅ 10 3 m/s
                  g=                             ⎪   ⎪
                                                     ⎩           r0
                          RT2                    ⎪⎭


1.3

                                             g RT2                               m g RT2
                  L0 = r0 m v 0 =                     m v0    ⇒        L0 =
                                              v0
                                                 2                                 v0

                                                                             2
                          1       M m 1      g RT m 1                                                            1
                  E0 =
                              2          2
                            mv − G T = mv0 −
                                                       2      2
                                                   = mv0 − mv 0                                    ⇒    E0 = −     mv 02
                          2 0      r0 2        r0   2                                                            2

2.1
          The value of the semi-latus-rectum l is obtained taking into account that the orbital angular momentum is the same
in both orbits. That is

                                2
                             L0               m 2 g 2 RT4         1          g RT2
                  l=                    =                                =              = r0   ⇒   l = r0
                       G MT m2                       v02     g RT2 m 2           v 02

          The eccentricity value is

                                             2
                                    2 E L0
                 ε 2 = 1+
                                G 2 M T2 m 3

where E is the new satellite mechanical energy

                  E=
                         1
                         2
                               2
                                (     2   M m 1
                                                 ) 2       1    2 1   2
                           m v 0 + ∆ v − G T = m∆ v + E 0 = m∆ v − mv 0
                                           r0 2            2      2

that is

                                 ⎛ ∆ v2 ⎞ 1
                  E=
                         1
                         2
                           mv 02 ⎜ 2 − 1⎟ = mv 02 β 2 − 1
                                 ⎜ v    ⎟ 2
                                                                 (       )
                                 ⎝ 0    ⎠

          Combining both, one gets                    ε=β

          This is an elliptical trajectory because ε = β < 1 .




                                                                                                                           Th 1 Solution Page 1 of 5
                                               36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                                            R.S.E.F.


2.2
          The initial and final orbits cross at P, where the satellite engine fired instantaneously (see Figure 4). At this point

                                                r0                           π
                  r (θ = α ) = r0 =                           ⇒        α=
                                           1 − β cos α                       2

2.3                                                                                               r
                                                                                                  v0           P
          From the trajectory expression one immediately obtains that
                                                                                                                   r
the maximum and minimum values of r correspond to θ = 0 and                                                    ∆v
                                                                                                          r0            π
θ = π respectively (see Figure 4). Hence, they are given by                                                        α=
                                                                                                                        2
                          l                           l                                            rmin                            rmax
                  rmax =                      rmin =
                         1− ε                        1+ ε

that is
                              r0                               r0
                  rmax =                  and        rmin =                                                             Figure 4
                             1− β                             1+ β

          For β = 1 / 4 , one gets

                  rmax = 5.63 ⋅ 10 7 m; rmin = 3.38 ⋅ 10 7 m

       The distances rmax and rmin can also be obtained from mechanical energy and angular momentum conservation,
                         r     r
taking into account that r and v are orthogonal at apogee and at perigee


                                  (           )
                                                                   2
                        1           1    gR m
                          mv β − 1 = mv − T
                            2 2        2
                  E=
                        2 0         2      r
                            mgRT2
                  L0 =            = mv r
                             v0

          What remains of them, after eliminating v, is a second-degree equation whose solutions are rmax and rmin .

2.4
          By the Third Kepler Law, the period T in the new orbit satisfies that

                  T2        T02
                        =
                  a   3
                            r03

where a, the semi-major axis of the ellipse, is given by

                        rmax + rmin     r0
                  a=                =
                             2        1− β 2

          Therefore

                             (
                  T = T0 1 − β 2      )   −3 / 2


                                                                   −3 / 2
                                                          ⎛ 15 ⎞
          For β = 1/4                              T = T0 ⎜ ⎟               = 26.4 h
                                                          ⎝ 16 ⎠


                                                                                                                       Th 1 Solution Page 2 of 5
                                             36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                                         R.S.E.F.


3.1
       Only if the satellite follows an open trajectory it can escape from the Earth gravity attraction. Then, the orbit
eccentricity has to be equal or larger than one. The minimum boost corresponds to a parabolic trajectory, with ε = 1

               ε=β               ⇒                        β esc = 1

       This can also be obtained by using that the total satellite energy has to be zero to reach infinity (Ep = 0) without
residual velocity (Ek = 0)

               E=
                    1
                             (
                      mv 2 β 2 − 1 = 0
                    2 0 esc
                                             )        ⇒                   β esc = 1

       This also arises from T = ∞ or from rmax = ∞ .

3.2
       Due to ε = β esc = 1 , the polar parabola equation is

                        l
               r=
                    1− cos θ

where the semi-latus-rectum continues to be l = r0 . The minimum Earth - satellite distance corresponds to θ = π , where

                    r
                ′ = 0
               rmin
                    2

         This also arises from energy conservation (for E = 0) and from the equality between the angular momenta (L0) at the
                                                         r      r
initial point P and at maximum approximation, where r and v are orthogonal.

4.1
       If the satellite escapes to infinity with residual velocity v ∞ , by energy conservation


               E=
                    1
                    2
                             (       1
                                         )
                      mv 02 β 2 − 1 = mv ∞2
                                     2
                                                             ⇒                                      Asymptote



                         (
               v∞ = v0 β 2 − 1       )
                                     1/ 2                                                                   v0
                                                                                                                         P


4.2                                                                                                                                      r0
                                                                                                                 ∆v
       As ε = β > β esc = 1 the satellite trajectory will be a hyperbola.                                                     φ
                                                                                                  θ asym
                                                                                                  θ asym
       The satellite angular momentum is the same at P than at the point                                                            θ asym
where its residual velocity is v ∞ (Figure 5), thus

               m v 0 r0 = m v ∞ b
                                                                                                                              b
       So


               b = r0
                        v0
                        v∞
                                 ⇒                (
                                         b = r0 β − 1
                                                      2
                                                             )   −1 / 2                             Asymptote
                                                                                                                                              v∞
                                                                                                                      Figure 5




                                                                                                                  Th 1 Solution Page 3 of 5
                                     36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                        R.S.E.F.


4.3
      The angle between each asymptote and the hyperbola axis is that appearing in its polar equation in the limit r → ∞ .
This is the angle for which the equation denominator vanishes

                                                              ⎛1⎞
              1 − β cos θ asym = 0     ⇒      θ asym = cos −1 ⎜⎜⎟⎟
                                                              ⎝β⎠

      According to Figure 5

                   π                               π           ⎛1⎞
              φ=       + θ asym      ⇒        φ=     + cos −1 ⎜⎜ ⎟⎟
                   2                               2           ⎝β⎠

                 3        3
      For β =      β esc = , one gets        φ = 138º = 2.41 rad
                 2        2




                                                                                                    Th 1 Solution Page 4 of 5
                                36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                             R.S.E.F.




                                               Th 1          ANSWER SHEET




Question       Basic formulas and               Analytical results                   Numerical results                  Marking
                    ideas used                                                                                          guideline

   1.1         MT m        v2
           G             =m 0                                                      r0 = 4.22 ⋅10 7 m                    0.3
                r02        r0
                  2π r0
           v0 =
                   T0
                                                                 g
   1.2
           g=
                GM T                           v 0 = RT                            v0 = 3.07 ⋅10 3 m/s                  0.3 + 0.1
                                                                 r0
                   RT2

           r     r r                                    mgRT2
           L = m r ×v                          L0 =                                                                     0.4
                                                         v0
   1.3            1          Mm
           E=       mv 2 − G
                  2           r                             1
                                               E0 = −         mv 02                                                     0.4
                                                            2

                                               l = r0                                                                   0.4
   2.1
                                               ε=β                                                                      0.5
           Hint on the conical curves
   2.2                                                                                  π
                                                                                   α=                                   1.0
                                                                                        2
                                                      r0
                                               rmax =                              rmax = 5.63 ⋅10 7 m
           Results of 2.1, or                        1− β                                                               1.0 + 0.2
   2.3
           conservation of E and L                    r                            rmin = 3.38 ⋅10 7 m
                                               rmin = 0
                                                     1+ β

   2.4     Third Kepler's Law                            (
                                               T = T0 1 − β            )
                                                                      2 −3 / 2     T = 26.4 h                           0.5 + 0.2

   3.1     ε = 1, E = 0, T = ∞ or
                                                                                   β esc = 1                            0.5
           rmax = ∞

                                                    r
   3.2     ε = 1 and results of 2.1             ′ = 0
                                               rmin                                                                     1.0
                                                    2

   4.1     Conservation of E                   v∞ = v0 β − 1 (   2
                                                                           )1/ 2
                                                                                                                        1.0


   4.2     Conservation of L                            (
                                               b = r0 β − 1
                                                             2
                                                                      )   −1 / 2
                                                                                                                        1.0

                                                    π           ⎛1⎞                φ = 138º = 2.41rad
   4.3     Hint on the conical curves          φ=     + cos −1 ⎜⎜ ⎟⎟                                                    1.0 + 0.2
                                                    2           ⎝β ⎠




                                                                                                         Th 1 Solution Page 5 of 5
