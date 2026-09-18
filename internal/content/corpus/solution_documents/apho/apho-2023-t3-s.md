---
id: solution-document-apho-2023-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2023/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2023-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2023/T3_S.pdf."
---

CAVITATION: A POSSIBLE SOLUTION

                                TSOGTGEREL GANTUMUR


   Note: The chosen units might be a bit diﬀerent from the “oﬃcial” problem statement.
For instance, we might write 1 µm for 10−6 m. “Table 1” refers to the “notation table”
from the statement.
A1. By performing a simple dimensional analysis, estimate the collapse time τ of a pure
vapour bubble, in terms of bubble’s initial radius R0 , water density ρ, water pressure p∞ ,
and the vapour pressure pv . Evaluate the formula when R0 = 1 mm and the quantities ρ,
p∞ and pv take their typical values from Table 1. Assume no surface tension: σ = 0.
Solution. It is reasonable to expect that the bubble would not collapse if p∞ ≤ pv . Hence
we take p∞ > pv , and presume that the diﬀerence p∞ − pv will feature in the final formula.
The dimensions of the quantities are
            [R0 ] = m,     [ρ] = kg/m3 ,      [p∞ − pv ] = N/m2 = kg/(m · s2 ).         (1)
The only combination of these that has the dimension of time is
                                     √
                                           ρ
                              τ ∼ R0            ≈ 0.1 s.                                (2)
                                        p∞ − pv
A2. Suppose that a micro-bubble consisting of air and vapour, with radius R0 = 10 µm,
is in equilibrium when the external pressure p∞ = 100 kPa. Find the partial pressure q0
of air in the bubble. Now suppose that the external pressure p∞ was gradually decreased,
and that the air inside the bubble follows an isothermal process. Find the critical pressure
pc , defined by the condition that if p∞ < pc the bubble size grows without bound. The
quantities pv and σ take their typical values from Table 1.
Solution. The pressure equilibrium condition is
                                                    2σ
                                    pv + q = p∞ +      ,                                (3)
                                                    R
which, under R = R0 and q = q0 , yields
                                            2σ
                              q0 = p∞ − pv +    ≈ 170 kPa.                              (4)
                                            R0
On the other hand, taking into account the isothermal law
                                       q0 R03 = qR3 ,                                   (5)
we get
                                            q0 R03 2σ
                                  p∞ = pv +        −    .                         (6)
                                              R3     R
The critical pressure corresponds to the minimum of p∞ as a function of R. The radius
at the minimum is easily found to be
                                       √
                                          3q0 R0
                               Rc = R0            ≈ 60 µm,                        (7)
                                           2σ
                                              1

2                                TSOGTGEREL GANTUMUR

and the corresponding pressure is
                                              ( R0 )3
                              pc = pv − 2q0           ≈ 700 Pa.                         (8)
                                                Rc
B1. Suppose that a single spherical bubble resides within water that fills space uniformly,
and that the bubble may evolve in size without distorting its spherical shape, due to
changes, e.g., in the external pressure p∞ . Derive an equation that relates the bubble
radius R(t) and its time derivatives R′ (t) and R′′ (t), surface tension σ, water density ρ,
the pressure far from the bubble p∞ , and the pressure inside the bubble p. Then split the
pressure p into two terms, by assuming that the bubble has both vapour and air in it, and
that the air follows an adiabatic process with exponent γ. To give a reference point, the
partial air pressure must be q0 when the bubble size equals R0 . Assume that evaporation,
condensation, or transfer of air between the bubble cavity and the surrounding water has
no eﬀect on the water volume.
Solution. Let v(r, t) denote the radial velocity of the fluid element at the distance r from
the bubble center and at the time moment t. Let also u(t) = v(R, t), that is,
                                       u(t) = R′ (t).                                   (9)
Then the incompressibility condition yields
                                                 R2 u(t)
                                     v(r, t) =           ,                             (10)
                                                   r2
and hence
                             ∂v    ∂ R2 u   2R 2 R2 ′
                                =         =    u + 2u.                                 (11)
                             ∂t    ∂t r2    r2    r
The radial acceleration can now be computed as
                            ∂v ∂v        R2      2R      2R4
                        a=      +    v = 2 u′ + 2 u2 − 5 u2 .                      (12)
                             ∂t   ∂r      r      r         r
With p = p(r) denoting the pressure field (where possible time dependence is suppressed
in the notation), Newton’s law reads
                                         ρa = −p′ ,                                    (13)
or
                              R2 ′ ( 2R 2R4 ) 2              p′
                                 u  +      −       u   =  −     .                  (14)
                              r2        r2     r5            ρ
We integrate it from r = R to r = ∞, to get
                                        3      p(R) − p∞
                                 Ru′ + u2 =                .                       (15)
                                        2          ρ
Since the pressure inside the bubble satisfies
                                                  2σ
                                      p = p(R) +     ,                             (16)
                                                  R
we conclude that
                                     3         2σ      p − p∞
                             RR′′ + (R′ )2 +       =             .                 (17)
                                     2         ρR         ρ
Finally, taking into account the fact that the bubble pressure p consists of the vapour
pressure pv and the partial air pressure q, as
                                                    ( R0 )3γ
                               p = pv + q = pv + q0           ,                    (18)
                                                       R

                               CAVITATION: A POSSIBLE SOLUTION                                     3

we have
                                 3          2σ q0 R03γ
                        ρRR′′ + ρ(R′ )2 +      − 3γ = pv − p∞ .                     (19)
                                 2          R       R
B2. A water tank under the external pressure p−     ∞ = 100 kPa, containing a nucleus of
radius R0 = 10 µm initially in equilibrium, was exposed to vacuum, so that the system
suddenly has p∞ = 0. Estimate the terminal (asymptotic) value of the growth speed R′ ,
as well as the time it reaches this terminal value.
Solution. Putting R′′ = 0 and R → ∞ in (19) yields
                              √               √
                      ′         2(pv − p∞ )     2pv
                    R (∞) =                 =       ≈ 1.24 m/s.                                 (20)
                                    3ρ          3ρ
The initial acceleration can also be found from (19) as
                              q0 + pv − 2σ/R0      p−
                       R′′ (0) =                = ∞ ≈ 107 m/s2 ,                                (21)
                                     ρR0           ρR0
and hence the time for the speed to be stabilized can be estimated as
                                      R′ (∞)
                                  t = ′′      ≈ 0.1 µs.                                         (22)
                                      R (0)
B3. A water tank under the external pressure p−  ∞ = 1600 Pa, containing a gas bubble
of radius R0 = 10 µm initially in equilibrium, was suddenly exposed to the atmospheric
pressure p∞ = 100 kPa. Estimate the minimum radius of the bubble before it rebounds.
Solution. Multiply (19) by 2R2 R′ to get
                 ρ[R3 (R′ )2 ]′ + 4σRR′ − 2q0 R03γ R2−3γ R′ = 2(pv − p∞ )R2 R′ ,                (23)
or
                                       2q0 R03γ (R3−3γ )′  2
                   3   ′ 2 ′
               ρ[R (R ) ] + 2σ(R ) +  2 ′
                                                          = (pv − p∞ )(R3 )′ .       (24)
                                           3(γ − 1)        3
This can easily be integrated, from R(0) = R0 and R′ (0) = 0 to R(t) = R and R′ (t) = R′ ,
which yields
           ′ 2                      2q0 R03γ (R3−3γ − R03−3γ )  2
       3
     ρR (R ) + 2σ(R    2
                           − R0 ) +
                              2
                                                               = (pv − p∞ )(R3 − R03 ),         (25)
                                             3(γ − 1)           3
or
                                        (                                                 )
     ′ 2 2(pv − p∞ ) 2σ 2R03                σ    p∞ − pv      q0       q0 R03γ−3
 ρ(R ) =             −     + 3                 +         +         −                          . (26)
              3         R      R            R0      3      3(γ − 1) 3(γ − 1)R3γ−3
When R ≪ R0 , it shows first that
                                            R′ ∼ −R−3/2 ,                                       (27)
and moreover that the rebound radius satisfies
                     ( R )3(γ−1) (γ − 1)(p − p + 3σ/R )
                         0                   ∞    v  0
                                =                       + 1.                                    (28)
                       R                       q0
Taking into account that
                                 q0 = p−
                                       ∞ − pv + 2σ/R0 ≈ 10 Pa,                                  (29)
we conclude that the rebound radius is
                                            R ≈ 0.4 µm.                                         (30)

4                                 TSOGTGEREL GANTUMUR

B4. If there is no gas other than water vapour present in a bubble, the bubble completely
collapses in finite time. Determine the characteristic exponent α in
                                      R(t) ∼ (T − t)α ,                             (31)
where T is the collapse time.
Solution. We have found in the previous part that
                                        R′ ∼ −R−3/2 .                               (32)
Putting R(t) ∼ (T − t) into it we get
                       α


                                 (T − t)α−1 ∼ −(T − t)−3α/2 ,                       (33)
or
                                              2
                                          α= .                                     (34)
                                              5
B5. Based on the equation derived in Part 3, find the natural frequency of the spherical
oscillation of a bubble of radius R0 = 0.1 mm.
Solution. Introducing the new variable x by R = R0 x, we write (19) as
                                 3              2σ
                   ρR02 xx′′ + ρR02 (x′ )2 +          − q0 x−3γ = pv − p∞ .         (35)
                                 2             R0 x
Now put x = 1 + y and retain the terms up to linear in y, to have
                                 2σ
                     ρR02 y ′′ +      (1 − y) − q0 (1 − 3γy) = pv − p∞ .            (36)
                                 R0
Taking into account the equilibrium condition
                                       2σ
                                          − q0 = pv − p∞ ,                          (37)
                                       R0
we infer
                                         3γq0 − 2σ/R0
                                  y ′′ +                y = 0.                      (38)
                                              ρR02
Thus the bubble is unstable if
                                3γq0 ≤ 2σ/R0 = q0 + pv − p∞ ,                       (39)
or equivalently, if
                               p∞ ≤ pv − (3γ − 1)q0 .                             (40)
On the other hand, if p∞ > pv − (3γ − 1)q0 then the bubble oscillates with the natural
frequency                      √
                               1     (3γ − 1)q0 + p∞ − pv
                      f0 =                                ≈ 33 kHz.                 (41)
                             2πR0              ρ
B6. Suppose that the bubble described in the previous part is subjected to a standing
sound wave along the x-axis, whose pressure field is given by
                                             ( 2πf        )
                        p(x, t) = p0 + A sin       (x + a) sin(2πf t),               (42)
                                                c
where f is the frequency, and c is the speed of sound. The parameters p0 , A, and a are
constants, whose meanings may readily be deduced from the equation. Find the average
force exerted upon the bubble. The bubble is situated at the origin of the xyz coordinate
system, and its size is much smaller than the wavelength of the sound.

                              CAVITATION: A POSSIBLE SOLUTION                               5

Solution. Small oscillation of the bubble is described by
                                                        ( 2πf )
                       ρR02 (y ′′ + 4π 2 f02 y) = A sin      a sin(2πf t).              (43)
                                                           c
Looking for the solution in the form
                                       y(t) = B sin(2πf t),                             (44)
we find
                                           A sin(2πf a/c)
                                    B=                           .                      (45)
                                          4π 2 ρR02 (f02 − f 2 )
Since
                                       R(t) = R0 + R0 y(t),                             (46)
the volume of the bubble is
                                   4π            4π 3
                             V (t) =   R(t)3 ≈      R [1 + 3y(t)].                      (47)
                                    3             3 0
Now recalling that the average force is
                                                   ∂p
                                       F = −⟨V        ⟩,                                (48)
                                                  ∂x
where the average is taken over time, and that the pressure gradient is
                           ∂p     2πf A       ( 2πf )
                               =          cos       a sin(2πf t),                       (49)
                           ∂x        c           c
we conclude
                                        f A2 R0          ( 4πf a )
                            F =−                    sin            .                    (50)
                                    2ρc(f0 − f )
                                           2     2           c
C1. Suppose that a nucleus consisting of air and vapour, with radius R0 = 10 µm, is
placed in water-air solution, in which the dissolved air is in equilibrium with the atmo-
spheric pressure above the water. The partial pressure of air in the bubble is q = 170 kPa,
and the vapour pressure can be neglected. Estimate the time required for the bubble to
be completely resorbed into water. The quantities p∞ , κ, δ and σ take their typical values
from Table 1. Assume that the region surrounding the bubble in which air diﬀusion takes
place immediately gets much larger than the bubble itself.
Solution. From Henry’s law, the initial concentration of dissolved air in the body of
water is
                                ui = Hp∞ ≈ 0.024 kg/m3 ,                              (51)
and the initial concentration of dissolved air in the immediate vicinity of the bubble is
                                    u = Hq ≈ 0.041 kg/m3 .                              (52)
Since u > ui , there will be diﬀusive flux directed away from the bubble, and the bubble
will start losing air. As a result, the bubble shrinks and the surface tension term 2σ/R
increases. Since the external pressure p∞ is constant, the partial air pressure q increases,
which leads to more diﬀusive flux. In the end, the bubble will get completely resorbed
into water.
   To quantify the diﬀusion of air, let us consider the region enclosed by concentric spheres
of radii r and r + ∆r with ∆r small. The rate of change of air mass in this region is
                                      dm              ∂u
                                           = 4πr2 ∆r ,                                   (53)
                                       dt             ∂t

6                               TSOGTGEREL GANTUMUR




       Figure 1. (a) Initial configuration of the system (b) The geometry used
       in the solution

where 4πr2 ∆r is the volume of the region and the air concentration u = u(r, t) is a
function of r and t. On the other hand, the same quantity can be computed as the
diﬀerence between the diﬀusive fluxes through the concentric spheres:
                    dm
                        = 4π(r + ∆r)2 J(r + ∆r) − 4πr2 J(r)
                     dt
                                        ∂u                    ∂u
                        = 4π(r + ∆r)2 κ (r + ∆r) − 4πr2 κ (r)                         (54)
                                        ∂r                    ∂r
                                     2
                                   ∂ u                ∂u
                        ≈ 4πr2 κ∆r 2 (r) + 8πrκ∆r (r),
                                   ∂r                 ∂r
where we have taken into account the directions of the fluxes, and the fact that
                         ∂u            ∂u         ∂ 2u
                            (r + ∆r) ≈    (r) + ∆r 2 (r).                             (55)
                         ∂r            ∂r         ∂r
Comparing the two equations, we infer
                                  ∂u       ∂ 2 u 2κ ∂u
                                       =κ 2 +           .                            (56)
                                   ∂t      ∂r      r ∂r
The dissolved air concentration in water at the initial time moment t = 0 is uniformly ui ,
and assuming that the radius R of the bubble remains constant, the air concentration in
the immediate vicinity of the bubble should be equal to Hq:
                               {
                                 u(r, 0) = ui    for r > R,
                                                                                     (57)
                                 u(R, t) = Hq for t > 0.
Introducing a new variable v = r(u−qH), and a new time parameter τ = κt, the diﬀusion
equation (56) becomes
                                        ∂v    ∂ 2v
                                            = 2,                                 (58)
                                        ∂τ    ∂r
with                       {
                             v(r, 0) = r(ui − qH) for r > R,
                                                                                 (59)
                             v(R, τ ) = 0          for τ > 0.

                           CAVITATION: A POSSIBLE SOLUTION                              7

We can go further by introducing
                      ξ =r−R        and      w(ξ, τ ) = v(R + ξ, τ ),               (60)
to write (56) as
                                      ∂w   ∂2w
                                         =      ,                                   (61)
                                      ∂τ   ∂ξ 2
with                   {
                        w(ξ, 0) = (R + ξ)(ui − qH) for ξ > 0,
                                                                                    (62)
                        w(0, τ ) = 0               for τ > 0.
The solution to this problem is
                                 ∫
                        ui − qH ∞ ( −(ξ−η)2 /(4τ )                 )
                                                   − e−(ξ+η) /(4τ ) (η + R)dη.
                                                            2
             w(ξ, τ ) = √              e                                            (63)
                            4πτ 0
Since
                                      v(r, κt)         w(r − R, κt)
                      u(r, t) = qH +           = qH +                 ,             (64)
                                         r                   r
we have
                                    ∂u      1 ∂w    w
                                         =       − 2,                               (65)
                                    ∂r      r ∂ξ    r
and hence
                      ∂u         1 ∂w                  (1        1 )
                              =            = (ui − qH)      +√          .           (66)
                      ∂r r=R R ∂ξ ξ=0                   R       πκt
The second term corresponds to the width of the diﬀusion layer surrounding the bubble,
which we assume to be much larger than the bubble itself. Hence the rate of change of
the mass of the bubble can be estimated as
                         dm            ∂u
                              = 4πR2 κ         ≈ 4πκR(ui − qH).                     (67)
                          dt           ∂r r=R
On the other hand, the mass of the bubble is related to the air density, which in turn is
proportional to the pressure:
                                     4π 3       4π 3 δ0 q
                                m=       R δ=      R ·    ,                         (68)
                                      3          3     p∞
where δ0 = 1.2 kg/m3 is the air density at the atmospheric pressure p∞ = 105 Pa. Fur-
thermore, neglecting vapour pressure, we have the mechanical equilibrium condition
                                                 2σ
                                      q = p∞ +      ,                                (69)
                                                  R
leading to
                                        4π 3          ε
                                  m=       R · (δ0 + ),                              (70)
                                         3            R
with
                                  2σδ0
                              ε=        ≈ 1.73 · 10−6 kg/m2 .                        (71)
                                   p∞
After taking the derivative of (70) with respect to t, we equate it to (67), and get
                                       2σH              dR 8π dR
                  4πκR(ui − p∞ H −          ) = 4πδ0 R2    +    εR .                 (72)
                                         R              dt    3      dt
Since ui − p∞ H = 0, we have
                                                      2
                             −2σκHdt = δ0 R2 dR + εRdR,                              (73)
                                                      3

8                                  TSOGTGEREL GANTUMUR

and a direct integration yields
                                             δ0 R03 4εR02
                                   2σκHt =         +      ,                              (74)
                                               3      3
finally giving
                                   (δ0 R0 + 4ε)R02
                                t=                 ≈ 9 s.                                (75)
                                        6σκH
Thus the nucleus collapses in a matter of seconds.
C2. Consider a conical crevice in the wall of a water container, with an aperture angle α.
A small amount of air and vapour is trapped within the cone. Write down the condition
of mechanical and diﬀusive equilibrium. Determine when the pocket of air stays in the
crevice without disappearing.




                                  Figure 2. Conical crevice

Solution. The equilibrium conditions are
                                            2σ
                            pv + q = p∞ ±           and      u = Hq.                      (76)
                                            R
The plus sign corresponds to the situation where the water surface is concave, and the
surface tension tends to squeeze the air out of the crevice through diﬀusion. When the
water surface is convex, we have the opposing sign. Supposing that initially the partial
air pressure q is large, q will decrease as the region of trapped air shrinks due to diﬀusion.
At some point, a diﬀusive equilibrium will be found. Thus the pocket of air does not
disappear when the water surface is convex, meaning that
                                         π + α < 2θ.                                     (77)
