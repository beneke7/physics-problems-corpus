---
id: solution-document-ipho-2022-e-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2022_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2022-e1, ipho-2022-e2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2022_E_S.pdf."
---

IPhO 2022                                                 Experimental Solutions. Language: English

E1: Planet - SOLUTION                                             Plotting   overall plot                         0.30 pts
                                                                             points don’t cover 60% of the       -0.10 pts
A.1: The free-fall acceleration g can be found by drop-                      area
ping the ball from low heights such that the air friction                    missing axis labels                  -0.05 pts
and effects from the curvature of the planet are mini-                       missing axis units                   -0.05 pts
mized. We also choose the radius and density of the ball                     one plotting mistake               -0.05/-0.10
to be as big as possible to minimize the effect of air fric-                 two or more plotting mistakes      -0.10/-0.10
tion, i.e. setting r = 50 cm, ρ = 10 g/cm3 . The drop height      Fit line   drawn on graph                        0.05 pts
is then given by h = gt2 /2, and so we can find g from the                   line passes through origin            0.05 pts
slope of t2 vs h. From the graph, we measure the slope                       slope computed with units             0.10 pts
2/g = 0.127 s2 /m and its error ∆(2/g) = 0.004 s2 /m and so                  uncertainty of slope com-             0.10 pts
g = 15.7 m/s2 with an error of ∆g = 0.5 m/s2 .                               puted
                                                                  Values     15.0 m/s2 ≤ g ≤ 16.4 m/s2           0.20/0.20
                          r = 50 cm, ρ = 10 g/cm3                            14.3 m/s2 ≤ g ≤ 17.1 m/s2           0.10/0.20
                        h(m) s(m) t(s) t2 (s2 )                              units for value                      0.05 pts
                        0       0.0     0.0 0.0                              ∆g ≤ 0.7 m/s2                       0.20/0.20
                        20      0.0     1.7 2.9                              ∆g ≤ 1.4 m/s2                       0.10/0.20
                        40      0.0     2.2 4.8                              units for error                      0.05 pts
                        60      0.0     2.8 7.8                              sum                                   2.0 pts
                        80      0.1     3.2 10.2
                        100     0.1     3.5 12.2                 Points are added additively (including negative points),
                        120     0.2     3.9 15.2                 except for blocks of grey background, where the op-
                        140     0.0     4.1 16.8                 tion with maximal points should be chosen (in absolute
                        160     0.1     4.6 21.2                 value)
                        180     0.1     4.8 23.0                 A.2: How far one can see from on top of the tower can
                        200     0.1     5.1 26.0                 be related to the radius of the planet via the right trian-
                                                                 gle shown in the figure below. Applying the Pythagoras
                                                                 theorem on the triangle, one gets (R + H)2 = L2 + R2 and
                                                                 so
                                                                                      L2 − H 2
             25                                                                  R=            = 13 200 km.
                                                                                        2H
             20


  t2 , s 2
             15

             10

              5

              0
                  0        50        100       150       200
                                      h, m


  Marking scheme:                                                  Marking scheme:
  Theory                   2
                      h = gt /2                       0.20 pts     Theory     correct geometry (either a fig-    0.20 pts
  Data                varying only h                  0.05 pts                ure or implicitly assumed)
                      maximising r                    0.05 pts                correct formula                    0.20 pts
                      maximising ρ                    0.05 pts     Values     correct value                      0.10 pts
                      table has units                 0.05 pts                sum                                 0.5 pts
                      h distributed roughly uni-      0.05 pts
                      formly                                     A.3: From Newton’s law of gravity, g = GM /R2 . Hence,
                      hmax < 300 m                    0.05 pts
                      hmax − hmin > 100 m             0.05 pts                         gR2
                      correct calculations of de-     0.05 pts                   M=        = 4.2 × 1025 kg.
                                                                                        G
                      rived quantities
                      7 or more measurements         0.30/0.30   By adding the errors in quadrature, we find the error
                      6 measurements                 0.25/0.30
                                                                                       ∆g
                      5 measurements                 0.20/0.30                 ∆M =       M = 0.2 × 1025 kg.
                      4 or fewer measurements        0.10/0.30                          g

                                                                 Our estimation of free-fall acceleration has a contribu-
                                                                 tion from the centrifugal force caused by the rotation


IPhO 2022                                           Experimental Solutions. Language: English

of the planet. This serves to reduce the acceleration on
the surface and hence decrease our estimation of the
planet’s mass.                                                        15

  Marking scheme:
                                                                      10
                                                               s, m
  Theory    correct formula                    0.10 pts
            correct phenomena                  0.20 pts                5
  Values    3.9×1025 kg ≤ M ≤ 4.5×1025 kg     0.10/0.10
            3.6×1025 kg ≤ M ≤ 4.8×1025 kg     0.05/0.10
            missing units for value           -0.05 pts                0
            ∆M ≤ 0.3 × 1025 kg                0.10/0.10                    0             5              10          15
            ∆M ≤ 0.6 × 1025 kg                0.05/0.10                                          t, s
            missing units for error           -0.05 pts
            sum                                 0.5 pts
                                                               Marking scheme:

                                                              Theory           idea of reaching terminal ve-     0.15 pts
The student can’t get overall negative points for value                        locity as fast as possible
nor error (for example when the value is completely out                        s = s0 + ut                       0.10 pts
of range and the units are wrong).                            Data             varying only h                    0.05 pts
                                                                               minimising r                      0.05 pts
B.1: In general, if the variations in gravitational accel-                     minimising ρ                      0.05 pts
eration are small (as is the case here as H ≪ R), as a                         table has units                   0.05 pts
response to air drag, objects tend to terminal velocity                        h distributed roughly uni-        0.05 pts
where they experience no net acceleration. In the refer-                       formly
ence frame of air, this corresponds to the object falling                      hmax ≥ 300 m                      0.05 pts
straight down with some terminal speed vt . In the lab                         hmax − hmin ≥ 300 m               0.05 pts
frame, the object then has horizontal and vertical speeds                      7 or more measurements           0.30/0.30
of u and vt respectively.                                                      6 measurements                   0.25/0.30
                                                                               5 measurements                   0.20/0.30
  In order to find u, we can choose to drop an object that                     4 or fewer measurements          0.10/0.30
reaches terminal velocity as fast as possible and then ob-    Plotting         overall plot                      0.30 pts
serve how the displacement s relates to the fall time t.                       points don’t cover 60% of the    -0.10 pts
When terminal velocity is reached, we expect s = s0 + ut,                      area
where s0 captures the displacement related to reaching                         missing axis labels               -0.05 pts
terminal velocity. To maximize the effects of air drag, we                     missing axis units                -0.05 pts
minimize radius and density, i.e. setting ρ = 0.1 g/cm3 ,                      one plotting mistake            -0.05/-0.10
and r = 5 cm. Plotting s vs t, we measure the slope to be                      two or more plotting mistakes   -0.10/-0.10
u = 1.31 m/s with an error of ∆u = 0.04 m/s.                  Fit line         drawn on graph                     0.10 pts
                                                                               slope computed with units          0.10 pts
                                                                               uncertainty of slope com-          0.10 pts
                 r = 5 cm, ρ = 0.1 g/cm3                                       puted
                 h(m) s(m) t(s)                               Values           1.25 m/s ≤ u ≤ 1.37 m/s          0.20/0.20
                 0       0.0     0.0                                           1.19 m/s ≤ u ≤ 1.43 m/s          0.10/0.20
                 20      0.3     1.7                                           units for value                   0.05 pts
                 40      0.8     2.6                                           ∆u ≤ 0.06 m/s                    0.20/0.20
                 60      1.5     3.4                                           ∆u ≤ 0.12 m/s                    0.10/0.20
                 80      2.4     4.2                                           units for error                   0.05 pts
                 100     3.2     5.0                                           sum                                2.0 pts
                 120     4.1     5.7
                 140     5.0     6.5                         B.2: By keeping the measurements close to the surface,
                 160     5.8     7.3                         we can assume to a good approximation uniform air
                 180     6.9     7.9                         density. Then, using similar reasoning as before, we ex-
                 200     7.4     8.5                         pect h = h0 + vt0 t, where h0 captures the part of reaching
                 240     9.4     10.0                        terminal velocity.
                 280     11.7    11.6                           At terminal velocity, the drag force balances out grav-
                 320     13.4    12.9                        itational acceleration:
                 360     15.4    14.4
                 400     16.4    15.4                                                 mg = 0.24Aρa vt2 .


IPhO 2022                                                   Experimental Solutions. Language: English

Using m = 4πρr3 /3 and A = πr2 , we get                             can estimate the terminal velocity of the ball at different
                             √                                      heights by comparing the dropping time of a ball with
                                  4ρrg                              the smallest possible terminal velocity (so minimal den-
                  vt (ρa ) =              .
                               3 · 0.24ρa                           sity and radius). This hence gives a direct probe for the
On the surface, vt0 = vt (ρa = ρa0 ). Using the measure-            air density and thus the height of the atmosphere.
ments from the last subtask, we can plot t vs h and mea-               If the ball reaches terminal velocity instantly, then the
sure the slope to be 1/vt0 = 0.037 s/m with an error of             difference in falling time between dropping the ball at
∆(1/vt0 ) = 0.002 s/m. Hence, vt0 = 27.0 m/s, ∆vt0 =                heights h1 and h2 > h1 comes simply from h1 < h < h2 .
           2
∆(1/vt0 )/vt0 = 2 m/s. Now,                                         This is because in both cases the ball falls for the same
                                                                    amount of time at h < h1 (because the terminal velocity
                              4ρrg
                                                                    only depends on height). Then, if h2 − h1 ≪ h1 , we can
                                   2 = 0.60 kg/m .
                                                3
                  ρa0 =
                          3 · 0.24vt0                               estimate            (         )
                                                                                          h1 + h2        h2 − h1
and the error is                                                                     vt             ≈                 .       (1)
                                                                                             2        t(h2 ) − t(h1 )
                           2∆vt0
                 ∆ρa0 =          ρa0 = 0.07 kg/m3 .                   In reality, the ball doesn’t reach the terminal velocity
                            vt0
                                                                    instantaneously. However, it turns out we can, to a good
                                                                    approximation, neglect this effect. As a rough order of
                                                                    magnitude estimation, on the ground level, the ball ex-
         8                                                          periences a time difference of vt0 /(2g) = 0.8 s compared
                                                                    to the instantaneous case. This difference will increase
                                                                    as the ball is dropped from further up, but as long as the
         6
                                                                    atmosphere isn’t too much sparser in the upper parts of
  t, s                                                              the tower (we can verify this later), the difference will
         4                                                          be insignificant compared to the total falling time of the
                                                                    ball. Hence, we approximate the terminal velocity via
         2                                                          equation (1).
                                                                      Because the calculated velocities are very sensitive on
                                                                    the measured quantities, we do repeated measurements
         0                                                          throughout the whole height of the tower.
             0        50          100         150          200
                                   h, m                                              r = 5 cm, ρ = 0.1 g/cm3
                                                                       h(m)    s1 (m) t1 (s) s2 (m) t2 (s) s3 (m)        t3 (s)
                                                                       200     7.6     8.4    7.8       8.6  7.8         8.6
  Marking scheme:                                                      400     17.0    15.7 16.9        15.6 17.3        15.7
 Theory          h = h0 + vt0 t                         0.05 pts       600     26.1    22.6 25.4        22.2 26.2        22.7
                 formula for terminal velocity          0.10 pts       800     33.6    28.5 34.6        29.2 34.3        29.1
                 final expression for ρa0               0.05 pts       1000    41.1    34.3 43.0        35.7 43.3        35.8
 Data            reusing the data from the last         0.05 pts       1200    51.1    41.9 50.2        41.2 50.0        41.1
                 subpart                                               1400    57.9    47.2 58.8        47.8 58.7        47.8
                 hmax ≤ 200 m                           0.05 pts       1600    65.5    53.0 65.1        52.8 65.3        52.9
                 6 or more measurements                 0.05 pts       1800    70.9    57.1 72.2        58.2 71.4        57.5
 Plotting        overall plot                           0.25 pts       2000    78.5    62.9 79.6        63.8 79.5        63.7
                 points don’t cover 60% of the         -0.05 pts
                 area                                                 Using equation (1) we make a separate table with
                 missing axis labels                    -0.05 pts   velocities, while also adding the ground level velocity
                 missing axis units                     -0.05 pts   found in one of the earlier part (we set it at h = 100 m be-
                 one plotting mistake                 -0.05/-0.10   cause that was the centre of the range of measurements).
                 two or more plotting mistakes        -0.10/-0.10   We find air density using
 Fit line        drawn on graph                          0.05 pts                                   4ρrg
                 slope computed with units               0.05 pts                         ρa =               .
                                                                                                 3 · 0.24vt2
                 uncertainty of slope com-               0.10 pts
                 puted
                                                                      From the density profile of an adiabatic atmosphere,
 Values          0.52 kg/m3 ≤ ρa0 ≤ 0.68 kg/m3         0.10/0.10
                 0.44 kg/m3 ≤ ρa0 ≤ 0.76 kg/m3         0.05/0.10                                      (        )
                                                                                                            h
                                                                                 ρaγ−1 = ρ0.4 = ρ 0.4
                                                                                                        1 −      .
                 ∆ρa0 ≤ 0.08 kg/m3                     0.10/0.10                          a       a0
                                                                                                            H0
                 ∆ρa0 ≤ 0.16 kg/m3                     0.05/0.10
                 units for both value and error          Hence, we find H0 by plotting ρ0.4
                                                        0.05 pts                        a0 against h and fitting a
                 sum                                     straight line.
                                                         1.0 pts
                                                           From the plot, we measure the slope a = −ρ0.4a0 /H0 =
B.3: Due to the adiabatic profile of the atmosphere, the
                                                         −1.1 × 10−4 (kg/m3 ) /m and the intercept b = ρ2.5
                                                                             0.4
further up you go, the more the temperature and air den-                                                     a0 =

sity decreases, but the terminal velocity increases. We 0.82 (kg/m ) so H0 = −b/a = 7500 m. We calculate the
                                                                     3 0.4


IPhO 2022                                                              Experimental Solutions. Language: English

                                r = 5 cm, ρ = 0.1 g/cm3                                           h (            1       )
                                                                                              t≈      1−               h
             h(m)           v(m/s) ρa (kg/m3 ) ρ0.4          3 0.4
                                                     a ((kg/m )    )                             v t0     4H0 (γ − 1)
             100            27.0      0.599         0.814                                    t    1            1
                                                                                               ≈      −                 h.
             300            28.0      0.556         0.791                                    h   v t0   4vt0 H0 (γ − 1)
             500            29.3      0.510         0.764
             700            31.1      0.452         0.728                  Plotting t/h vs h and calculating H0 similarly to before
             900            31.6      0.438         0.719                  (by calculating the intercept and the slope), we get H0 ≈
             1100           32.6      0.411         0.701                  6300 m, which falls within the error range. However,
             1300           32.3      0.420         0.707                  because of the approximations, this approach will be
             1500           37.7      0.307         0.624                  awarded a maximum of 2.0 out of 3.0 points (the follow-
             1700           42.6      0.241         0.566                  ing grading scheme still applies, but is capped out at 2.0).
             1900           34.1      0.376         0.676                    Marking scheme:

                                                                            Theory        approximating vt0 via finite          0.30 pts
error from two reasonably chosen lines that correspond
                                                                                          difference
to maximal and minimal estimates for H0
                                                                                          reasoning why the ball                0.15 pts
               (
             1           0.80 (kg/m3 )
                                        0.4                                               reaches terminal velocity
      ∆H0 ≈      −                          0.4                                           effectively instantaneously
             2     −8.4 × 10−5 (kg/m3 ) /m                                                linearising vt0 vs h                  0.25 pts
                                           )
                  0.83 (kg/m3 )
                                0.4                                                       expressing H0 in terms of the         0.10 pts
           +                        0.4        ≈ 2000 m.                                  slope/intercept
             −1.4 × 10−4 (kg/m3 ) /m
                                                                            Data          varying only h                        0.05 pts
                                                                                          minimising r                          0.05 pts
  We can also confirm that our assumption about the
                                                                                          minimising ρ                          0.05 pts
density of the atmosphere not dropping significantly in
                                                                                          table has units                       0.05 pts
the upper parts of the tower holds true.
                                                                                          h distributed roughly uni-            0.05 pts
                                                                                          formly
                                                                                          hmax − hmin ≥ 1800 m                  0.10 pts
                                                                                          calculating derived quantities        0.20 pts
                 0.80                                                                     15 or more measurements              0.45/0.45
  0.4
                                                                                          (can be repeat)
                 0.75                                                                     10 - 14 measurements                 0.30/0.45


  ρ0.4
            3


   a , (kg/m )
                                                                                          1 - 9 measurements                   0.15/0.45
                 0.70                                                       Plotting      overall plot                          0.30 pts
                                                                                          points don’t cover 60% of the        -0.10 pts
                 0.65
                                                                                          area
                 0.60                                                                     missing axis labels                  -0.05 pts
                                                                                          missing axis units                   -0.05 pts
                 0.55                                                                     one plotting mistake               -0.05/-0.10
                                                                                          two or more plotting mistakes      -0.10/-0.10
                        0          500       1000       1500      2000
                                                                            Fit line      drawn on graph                        0.10 pts
                                              h, m
                                                                                          slope computed with units             0.15 pts
                                                                                          uncertainty of slope com-             0.15 pts
                                                                                          puted
  Alternative, less accurate solution                                       Values        5500 m ≤ H0 ≤ 9500 m                 0.20/0.20
  In this approach, it’s assumed that when the air drag is                                3500 m ≤ H0 ≤ 11 500 m               0.10/0.20
maximised, the ball falls at the terminal velocity vt0 for                                units for value                       0.05 pts
the whole duration of the fall. This gives                                                ∆H0 ≤ 2000 m/s                       0.20/0.20
                                                                                          ∆H0 ≤ 4000 m/s                       0.10/0.20
                        dh                 (    h )− 2(γ−1)
                                                        1
                                                                                          units for error                       0.05 pts
                           = vt (h) = vt0 · 1 −             .
                        dt                      H0                                        sum                                    3.0 pts
Rearranging and integrating,
                                                                           B.4: From the expression for adiabatic atmosphere we
                      ∫   (
                  1            h ) 2(γ−1)
                                      1
                                                                           have
             t≈         dh 1 −            .                                                        RT0 γ
                 v t0          H0                                                             H0 =
                                                                                                    µg γ − 1
So far this is exact and differs from the exact solution                   so
by the “speeding up” term which is a constant and has                                     RT0 γ                −1          −1
a smaller relative contribution the higher up one goes.                              µ=              = 72 g mol ≈ 70 g mol
                                                                                          H0 g γ − 1
In order to approximate this integral, we can do a first
order binomial expansion to get                                            and                √
                                                                                                  ∆H02   ∆g 2             −1
                                                                                       ∆µ =            +      µ = 20 g mol .
                                                                                                  H02     g2


IPhO 2022                                                         Experimental Solutions. Language: English

From ideal gas law,                                                                       r = 50 cm, ρ = 10 g/cm3
                                                                                         h(m) s(m) h1.5 (m1.5 )
                   p0 =
                          ρa0 RT0
                                  = 20 000 Pa                                            0        0.0    0
                             µ                                                           200      0.2    2800
                                                                                         400      0.5    8000
and                 √                                                                    600      0.8    14700
                        ∆µ2   ∆ρ2a0                                                      800      1.2    22600
            ∆p0 =           +       p0 = 6000 Pa.
                         µ2    ρ2a0                                                      1000 1.8        31600
                                                                                         1200 2.3        41600
  Marking scheme:                                                                        1400 2.8        52400
                                                                                         1600 3.4        64000
  Theory      correct expression for µ                       0.15 pts                    1800 4.0        76400
              correct expression for p0                      0.15 pts                    2000 4.8        89400
                      −1                 −1
  Values      45 g mol ≤ µ ≤ 95 g mol                        0.05 pts
                             −1
              ∆µ ≤ 25 g mol                                  0.05 pts
              12 000 Pa ≤ p0 ≤ 28 000 Pa                     0.05 pts          5
              ∆p ≤ 8000 Pa                                   0.05 pts
              sum                                             0.5 pts          4

C.1: Our goal is to find the rotation speed Ω of the planet.                   3
The rotation of the planet affects the ball’s trajectory
                                                                        s, m
via centrifugal and Coriolis force. The centrifugal force,
                                                                               2
however, due to H ≪ R is impossible to disentangle from
gravitational acceleration. Coriolis force affects the ball
via acceleration ⃗acor = −2Ω  ⃗ × ⃗v . This is perpendicular                   1
to both the velocity of the ball and rotation axis of the
planet. Hence, it’s directed along the equator, and in-                        0
creases linearly with the falling speed. Thus, the hori-                           0    20000    40000    60000     80000
zontal acceleration is given by ax = 2Ωvy + adrag .                                                 1.5
                                                                                                   h ,m 1.5

   The procedure is then to minimize the effect of air drag
(maximal radius and density) and hope that the Corio-
lis effect contributes enough to the horizontal displace-      Alternative solution.
ment.∫ If we neglect air drag, ∫then ax = 2Ωvy = 2Ωgt so       An alternative approach is to consider the system in
vx = ax dt = Ωgt2 and x = vx dt = Ωgt3 /3. The final the non-rotating frame (where we don’t have to deal
displacement will then be s = gΩt3f /3, where the falling with fictitious forces). In there, the ball starts off with
time satisfies H = gt2f /2. Putting them together, we get    speed v0 = Ω(R + H). Due to the conservation of angular
                                                             momentum, as the ball drops towards the ground, the
                               √
                            2Ω 2H    3                       ball’s angular speed will start increasing and the ground
                       s=              .                     will start lagging behind (the ground rotates with Ω). At
                             3     g
                                                             height h, when the ball moves with angular speed ω, the
                                                             conservation of angular momentum reads ω(R + h)2 =
By varying the radius/density, we do indeed confirm that
                                                             Ω(R + H)2 and so the angular lag between the ball and
the effect of Coriolis force is significant, on the order of
                                                             the ground is
couple of meters. By doing a suitable number of mea-
surements in the range 0 to 2000 m and plotting s vs h1.5 ,                        ((         )2    )
                                                                                       R+H                 H −h
we measure the slope                                               ∆ω = ω − Ω = Ω                − 1 ≈ 2Ω         .
                                                                                       R+h                    R
                      √
                   2Ω 2
               a=           = 5.3 × 10−5 m−1/2               The positional velocity shift along the ground is then
                    3    g
                                                             vx = ∆ωR = 2Ω(H − h) = Ωgt2 . We recover the same
and the error                                                expression as for Coriolis force, and from there we pro-
                                                             ceed the same way as before.
                                  −6    −1/2
                   ∆a = 1.1 × 10 m                             Marking scheme:

such that                                                               Theory         Deriving s(h)                 0.80 pts
                               √                                                       linearising s vs h            0.10 pts
             T =
                   2π
                      =
                        4π         2
                                     = 28 000 s ≈ 8h                    Data           varying only h                0.05 pts
                   Ω    3a         g                                                   minimising r and ρ            0.05 pts
                                                                                       table has units               0.05 pts
and                √(                                                                  h distributed roughly uni-    0.05 pts
                                   )2
                              ∆g            ∆a2                                        formly
            ∆T =        0.5             +       T = 0.2 h.
                              g              a2


IPhO 2022                                          Experimental Solutions. Language: English

            hmax − hmin ≥ 1800 m               0.05 pts
            calculating derived quantities     0.05 pts
            7 or more measurements            0.30/0.30
            6 measurements                    0.25/0.30
            5 measurements                    0.20/0.30
            4 or fewer measurements           0.10/0.30
 Plotting   overall plot                       0.30 pts
            points don’t cover 60% of the     -0.10 pts
            area
            missing axis labels                -0.05 pts
            missing axis units                 -0.05 pts
            one plotting mistake             -0.05/-0.10
            two or more plotting mistakes    -0.10/-0.10
 Fit line   drawn on graph                      0.10 pts
            slope computed with units           0.10 pts
            uncertainty of slope com-           0.10 pts
            puted
 Values     27 000 s ≤ T ≤ 29 000 s           0.20/0.20
            26 000 s ≤ T ≤ 30 000 s           0.10/0.20
            missing units for value           -0.05 pts
            ∆T ≤ 1000 s                       0.20/0.20
            ∆T ≤ 2000 s                       0.10/0.20
            missing units for error           -0.05 pts
            sum                                 2.5 pts


IPhO 2022                                                      Experimental Solutions. Language: English

E2: Cylindrical Diode - SOLUTION                                     Data     vary only V                             0.05 pts
                                                                              Re ≥ 1cm                                0.05 pts
Take the logarithm of Equation 1,                                             Rc ≥ 10Re cm                            0.05 pts
                                                                              Le ≥ 90cm                               0.05 pts
          log I∞ = log C + α log Rc + β log Le + γ log V                      table has units                         0.05 pts
                                                                              V distributed as log                    0.05 pts
A.1: Collect data by varying V . To minimize error, se-
                                                                              Vmax ≥ 1000V                            0.05 pts
lect maximum values for all fixed variables, this means
                                                                              Vmin ≥ 10V                              0.05 pts
Le = 99 cm, Rc = 10 cm, and Re = 1.0 cm. Distribute the
                                                                              Vmin ≤ 50V                              0.05 pts
voltages logarithmically between 10 and 2000
                                                                              Correct calculations                    0.05 pts
                                                                              7 or more points                       0.30/0.30
                   V (V)     I (mA)   log V      log I
                                                                              6 points                               0.25/0.30
                    10           5     1.0       0.70
                                                                              5 points                               0.20/0.30
                    20          13     1.3       1.11
                                                                              4 or fewer points                      0.10/0.30
                    50          52     1.7       1.72
                                                                     Plotting covers > 50% of area                    0.10 pts
                    100        147     2.0       2.17
                                                                              Axis labels                             0.05 pts
                    200        415     2.3       2.62
                                                                              Axis units correct                      0.05 pts
                    500       1620     2.7       3.21
                                                                              one plotting mistake                 -0.05/-0.10
                   1000       4630     3.0       3.67
                                                                              two or more plotting mis-            -0.10/-0.10
                   2000      12900     3.3       4.11
                                                                              takes
  Plot this on a graph; the best fit line is                         Fit      line drawn on graph                     0.10 pts
                                                                              slope correctly computed                0.10 pts
                    log I = 1.490 log V − 0.8095                              with units
                                                                              1.45 < γ < 1.55                         0.10 pts
                                                                              uncertainty of slope com-               0.10 pts
          4                                                                   puted
                                                                              δγ ≤ 0.03                               0.10 pts
                                                                              sum                                      1.5 pts
          3
                                                                     Measured data should be entered into spreadsheet
                                                                   that will calculate results; if deviation is too large, data
  log I
                                                                   point should not count.
          2
                                                                     Evidence of reverse engineering should result in
                                                                   zero points for the entire section
          1                                                        A.2: Collect data by varying Le . To minimize error, select
                                                                   maximum values for all fixed variables, this means V =
                                                                   2000 V, Rc = 10 cm, and Re = 1 cm.
               1       1.5       2     2.5          3    3.5
                                 log V                                         Le (cm)    I (mA)    log Le    log I
                                                                                 99       13000     1.996     4.144
  so γ = 1.49.                                                                   90       11800     1.954     4.072
  A statistical analysis of the uncertainty in the slope                         80       10700     1.903     4.029
yields γ = 1.490 ± 0.005.                                                        70        9170     1.845     3.962
  Assessing the slope by visually fitting lines through the                      60        7960     1.778     3.901
error bars on the points requires considering that error                         55        7310     1.740     3.864
bars on a log axis are given by                                                  50        6700     1.699     3.826
                           (       )
                              ln y       1 δy                        Plot this on a graph; the best fit line is
              δ(log y) = δ           =
                             ln 10     ln 10 y
                                                                                  log I = 0.9767 log Le + 2.1649
  Since the largest relative error is in the smallest valued
quantity, the focus is on δV /V for V = 10V and δI/I for
I = 5mA. The error bars associated with the log-log plot
at that point are then

                       (1 ± 0.02, 0.70 ± 0.04)

The other error bars are smaller; focusing on that point
alone we can fit two extreme lines and get

                           γ = 1.485 ± 0.025

  Either approach is acceptable.
  Marking scheme:


IPhO 2022                                                  Experimental Solutions. Language: English

                                                                                 Rc (cm)     I (mA)    log Rc   log I
          4.1                                                                      20         6640     1.301    3.822
                                                                                   19         6970     1.279    3.843
                                                                                   18         7380     1.255    3.868
                                                                                   16         8240     1.204    3.916
           4                                                                       14         9390     1.146    3.973
                                                                                   12        11000     1.079    4.041
  log I
                                                                                   10        13100     1.000    4.117

          3.9                                                      Plot this on a graph; the best fit line is

                                                                                  log I = −0.9816 log Rc + 5.1000

          3.8
                1.7   1.75   1.8    1.85 1.9   1.95    2
                                   log Le                                  4.1


  so β = 0.9767.
                                                                            4
  A statistical analysis of the uncertainty in the slope           log I
yields β = 0.98 ± 0.02.

  Graphical fitting of the steepest and shallowest lines                   3.9
yields β = 0.97 ± 0.02.

  Marking scheme:
                                                                           3.8
                                                                                  1   1.05    1.1    1.15 1.2   1.25    1.3
                                                                                                    log Rc
  Data     vary only Le                               0.05 pts
           Re ≥ 1cm                                   0.05 pts     so α = −0.9824.
           Rc ≥ 10Re cm                               0.05 pts     A statistical analysis of the uncertainty in the slope
           V ≥ 100V                                   0.05 pts   yields β = −0.98 ± 0.01.
           table has units                            0.05 pts     Graphical fitting of the steepest and shallowest lines
           Le distributed evenly                      0.05 pts   yields β = 0.97 ± 0.02.
           Le,max ≥ 90cm                              0.05 pts
                                                                   Marking scheme:
           Le,min ≥ 3Rc                               0.05 pts
           Le,min ≤ 50cm                              0.05 pts
           Correct calculations of de-                0.05 pts
           rived quantities
           7 or more points                         0.30/0.30
           6 points                                 0.25/0.30
           5 points                                 0.20/0.30
           4 or fewer points                        0.10/0.30
  Plotting covers > 50% of area                      0.10 pts
           Axis labels                               0.05 pts
           Axis units correct                        0.05 pts
           one plotting mistake                   -0.05/-0.10
           two or more plotting mis-              -0.10/-0.10
           takes
  Fit      line drawn on graph                        0.10 pts
           slope correctly computed                   0.10 pts
           with units
           0.97 < β < 1.03                            0.10 pts
           uncertainty of slope com-                  0.10 pts
           puted
           δβ ≤ 0.03                                  0.10 pts
           sum                                         1.5 pts



A.3: Collect data by varying Rc . To minimize error, select
maximum values for all fixed variables, this means V =
2000 V, Le = 99 cm, and Re = Rc /10 cm.


IPhO 2022                                      Experimental Solutions. Language: English

 Data     vary only Rc                    0.05 pts
          Re ≥ 1cm                        0.05 pts
          Rc ≥ 10Re cm                    0.05 pts
          V ≥ 100V                        0.05 pts
          table has units                 0.05 pts
          Rc distributed evenly           0.05 pts
          Rc,max ≥ 15cm                   0.05 pts
          Rc,min ≥ 10Re                   0.05 pts
          Rc,min ≤ 10cm                   0.05 pts
          Correct calculations of de-     0.05 pts
          rived quantities
          7 or more points                0.30/0.30
          6 points                        0.25/0.30
          5 points                        0.20/0.30
          4 or fewer points               0.10/0.30
 Plotting covers > 50% of area             0.10 pts
          Axis labels                      0.05 pts
          Axis units correct               0.05 pts
          one plotting mistake          -0.05/-0.10
          two or more plotting mis-     -0.10/-0.10
          takes
 Fit      line drawn on graph             0.10 pts
          slope correctly computed        0.10 pts
          with units
          −1.03 < α < −0.97               0.10 pts
          uncertainty of slope com-       0.10 pts
          puted
          δα ≤ 0.03                       0.10 pts
          sum                              1.5 pts


IPhO 2022                                              Experimental Solutions. Language: English

B.1: Use all three sets of data, and the exponents from
all three, and then average the results

log C = log I − 1.495 log V − 0.9854 log Le + 0.9781 log Rc

which gives

              C = (0.0165 ± 0.0003)mA/V3/2

  The theoretical value is approximately:
                  √
            8πϵ0 2e
                       ≈ 1.47 × 10−5 A/V3/2 .
              9     m
Note that there is a nasty correction (the texts usually
call it β, which is not the same as our exponent), that we
use in the code, but aren’t expecting students to find, be-
cause of this correction, we don’t expect the theoretical
value to hold. Students who try to solve the theoretical
problem will be vexed by this.
  For space reasons, we write numerical C below with-
out explicit units, but using the units of µA/V3/2 , that is

                     C = 16.5µA/V3/2

  Students must have clear units!
  Marking scheme:


 Theory     clear statement                        0.20 pts
 Fit        Used Rc = 10Re                         0.10 pts
            C computed                             0.10 pts
            More than 9 data points           0.20/0.20 pts
            8 or 9 data points                0.15/0.20 pts
            7 or 8 data points                0.10/0.20 pts
            5 or 6 data points                0.05/0.20 pts
            C has correct units                    0.10 pts
            16.2 ≤ C ≤ 16.8                   0.10/0.10 pts
            15.9 ≤ C ≤ 17.1                   0.05/0.10 pts
            uncertainty computed                   0.10 pts
            0.1 < δC ≤ 0.03                        0.10 pts
            0 < δC ≤ 0.05                     0.05/0.10 pts
            sum                                     1.0 pts

  Clear statement of theory means that somewhere
there is a justification for the data they are collecting and
using. This can be in the form of the log formula; words
are not necessary. Reusing data is okay.


IPhO 2022                                             Experimental Solutions. Language: English

C.1: Start by assuming that Le matters, and look at val-        We plot the results below; blue are the values of fixed
ues near Rc . Repeat for other variables. Remember that       Re while green are the values of fixed Le .
C depends on the ratio between Rc /Re , so change these
together!
                                                                    1.2
   Using nearest half integers, we have for the first equa-
tion
                             Le
                      I∞ = C V 3/2
                             Rc
so that                                                             1.1
                           Imeasured                            F
                       F = Le 3/2
                           C Rc V

    Rc   Re     Le     V       I     I∞     F                          1
   cm cm cm            V     mA mA
    10    1     10 1000 535 500 1.071
    12 1.2 10 1000 470 416 1.129
     8   0.8 10 1000 647 624 1.036                                         0.5          1          1.5         2
    10    1     12 1000 630 599 1.051                                                         x
    10    1      8   1000 451 400 1.129
                                                                The result is
    12 1.2 12 1000 537 500 1.075
     8   0.8     8   1000 537 500 1.075                                          F (x) = 0.8579 + 0.1762x
    10    1     10 1100 617 576 1.071
    10    1     10    900    457 426 1.072                      Which is in error at x = 1 by about 3%.
  From this we conclude that if Rc ↑, F ↑; if Le ↑, F ↓; if
                                                                If you are thinking that this looks like a quadratic fit
V ↑, F doesn’t change.
                                                              might be better, you are correct, but there really isn’t
  Also, we notice that the ratio Rc /Le seems to be the im-   time to do that for this experiment.
portant quantity.
                                                                Marking scheme:
  Marking scheme:
   Data       clearly collected                 0.10 pts        Data     vary Le                              0.10 pts
   Data       Rc ↑ =⇒ F ↑                       0.10 pts                 vary Rc                              0.10 pts
              Le ↑ =⇒ F ↓                       0.10 pts                 Re ≥ 0.5cm                           0.05 pts
              Vc ↑: F no significant change     0.10 pts                 Rc = 10Re cm                         0.05 pts
              Re ↑: F no significant change     0.10 pts                 V ≥ 500V                             0.05 pts
                                                                         table has units                      0.05 pts
              sum                                0.5 pts
                                                                         Le ≥ 10cm                            0.05 pts
C.2: We propose                                                          Le,max ≤ 40cm                        0.05 pts
                                 Rc                                      Le well distributed                  0.05 pts
                      F =A+B
                                 Le                                      Rc                                   0.05 pts
with x = Rc /Le .                                                        Correct calculations of de-          0.10 pts
 Marking scheme:                                                         rived quantities
                                                                         10 or more points                    0.30/0.30
                                                                         9 points                             0.25/0.30
 Theory     clear statement                        0.20 pts              8 points                             0.20/0.30
 Def        x = Rc /Le                        0.30/0.30 pts              6 or 7 points                        0.10/0.30
            x = Le /Rc                        0.15/0.30 pts              5 or fewer points                    0.05/0.30
            sum                                     0.5 pts     Plotting covers > 50% of area                  0.10 pts
                                                                         Axis labels                           0.05 pts
  Any multiple of Rc /Le is also acceptable.
                                                                         Axis units correct                    0.05 pts
C.3: It is important to collect data that varies Rc and Le               one plotting mistake               -0.05/-0.10
independently, so as to not bias our hypothesis. We will                 two or more plotting mis-          -0.10/-0.10
also keep the ratio with Rc /Re = 10, in order to avoid                  takes
other effects with the constant in part B.                      Fit      line drawn on graph                  0.10 pts
    Rc (cm) Le (cm) I (mA)          I∞       x      F                    slope correctly computed             0.10 pts
       20        10        898      740    2.000 1.213                   with units
       20        15       1210     1110 1.333 1.090                      0.17 < B < 0.18                      0.10 pts
       20        20       1520     1480 1.000 1.027                      sum                                   1.5 pts
       20        30       2160     2221 0.667 0.973
       20        40       2810     2961 0.500 0.949
        6        10       2420     2467 0.600 0.981
        8        10       1840     1850 0.800 0.994
       10        10       1520     1480 1.000 1.027
       15        10       1100      987    1.500 1.115
       20        10        902      740    2.000 1.219
