---
id: solution-document-apho-2013-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2013/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2013-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2013/T2_S.pdf."
---

Theoretical 2: Solution
                                   Relativistic Correction on GPS Satelitte

   Part A. Single accelerated particle

 1. The equation of motion is given by
                                                            d
                                                   F =         ( mv)                               (1)
                                                            dt
                                                               mc ˙
                                                       =                 3
                                                            (1         2) 2
                                                             3
                                                   F =           ma,                               (2)

    where   =p1      2
                         and   = vc . So the acceleration is given by
                 1

                                                                 F
                                                       a=        3m
                                                                    .                              (3)


 2. Eq.(3) can be rewritten as

                                                      d      F
                                                       c  = 3
                                                      dt      m
                                        Z                      Z t
                                                   d        F
                                                        3 =        dt
                                            0   (1   2) 2   mc 0
                                                            Ft
                                                 p        =                                        (4)
                                                   1    2   mc
                                                                              Ft
                                                             = q mc      .                         (5)
                                                                    Ft 2
                                                                1 + mc

 3. Using Eq.(5), we get
                                  Z x            Z t
                                                     F tdt
                                        dx =       q
                                    0           0 m 1 + Ft 2
                                                           mc
                                                   0s                               1
                                                           ✓    ◆
                                               mc2 @         Ft 2
                                            x=       1+                            1A .            (6)
                                                F            mc


 4. Consider the following systems, a frame S’ is moving with respect to another frame S, with
    velocity u in the x direction. If a particle is moving in the S’ frame with velocity v 0 also in x
    direction, then the particle velocity in the S frame is given by

                                                            u + v0
                                                       v=          0 .                             (7)
                                                            1 + uv
                                                                c2




Relativistic Correction on GPS Satelitte                                                  Page 1 of 10

                                    Theoretical 2: Solution
                                    Relativistic Correction on GPS Satelitte

    If the particles velocity changes with respect to the S’ frame, then the velocity in the S frame
    is also change according to
                                               dv 0                  u + v0        udv 0
                                      dv =           0                         2
                                             1 + uvc2            1+     uv 0        c2
                                                                        c2
                                             1        dv 0
                                      dv =    2              0   2.                                 (8)
                                                   1 + uv
                                                       c2

    The time in the S’ frame is t0 , so the time in the S frame is given by
                                                  ✓         ◆
                                                        ux0
                                             t=     t0 + 2 ,                                        (9)
                                                         c
    so the time change in the S’ frame will give a time change in the S frame as follow
                                                   ✓         ◆
                                                 0      uv 0
                                        dt = dt 1 + 2 .                                            (10)
                                                         c
    The acceleration in the S frame is given by
                                                  dv   a0    1
                                         a=          = 3         0 3
                                                                     .                             (11)
                                                  dt      1 + uv
                                                               c2

    If the S’ frame is the proper frame, then by definition the velocity v 0 = 0. Substitute this to
    the last equation, we get
                                                    a0
                                               a = 3.                                           (12)

    Combining Eq.(3) and Eq.(12), we get
                                                          F
                                                   a0 =     ⌘ g.                                   (13)
                                                          m
 5. Eq.(3) can also be rewritten as
                                                           d       g
                                                                 c
                                                                = 3                                (14)
                                                            d⌧
                                                   Z                 Z
                                                         d        g ⌧
                                                              2
                                                                =       d⌧
                                                     0 1          c 0
                                                              !
                                         1                        g⌧
                               ln   p           +p              =                                  (15)
                                     1        2       1    2       c
                                                      s
                                                        1+         g⌧
                                                                =ec
                                                        1
                                                ⇣ g⌧       g⌧
                                                              ⌘    g⌧      g⌧
                                                 e c +e c =e c          e c
                                                                       g⌧
                                                                = tanh .                           (16)
                                                                        c


Relativistic Correction on GPS Satelitte                                                   Page 2 of 10

                                    Theoretical 2: Solution
                                    Relativistic Correction on GPS Satelitte

 6. The time dilation relation is
                                                    dt = d⌧.                                    (17)
    From eq.(16), we have
                                                     1                      g⌧
                                             =p                    = cosh      .                (18)
                                               1              2              c
    Combining this equations, we get
                                            Z t          Z ⌧
                                                                            g⌧
                                                  dt =            d⌧ cosh
                                              0           0                  c
                                                      c    g⌧
                                                   t = sinh .                                   (19)
                                                      g     c

   Part B. Flight Time

 1. When the clock in the origin time is equal to t0 , it emits a signal that contain the information
    of its time. This signal will arrive at the particle at time t, while the particle position is at
    x(t). We have

                                    c(t     t0 ) = x(t)                                         (20)
                                                     0s                            1
                                                           ✓ ◆2
                                                   c@       gt
                                          t t0 =        1+                         1A
                                                   g        c
                                                                  gt0
                                                 t0 2              c
                                              t=                  gt0 .                         (21)
                                                 21                c

    When the information arrive at the particle, the particle’s clock has a reading according to
    eq.(19). So we get
                                             gt0
                         c      g⌧    t0 2    c
                           sinh     =
                         g       c     2 1 gtc0
                                        ✓    ◆
                                      1 gt0 2 gt0 ⇣               g⌧ ⌘        g⌧
                                   0=                    1 + sinh      + sinh
                                      2    c         c             c           c
                                gt0             g⌧        g⌧
                                    = 1 + sinh     ± cosh .                                     (22)
                                 c               c         c
    Using initial condition t = 0 when ⌧ = 0, we choose the negative sign
                                          gt0            g⌧          g⌧
                                              = 1 + sinh        cosh
                                           c              c           c
                                                c⇣         g⌧
                                                              ⌘
                                           t0 =    1 e c .                                      (23)
                                                g
    As ⌧ ! 1, t0 = gc . So the clock reading will freeze at this value.



Relativistic Correction on GPS Satelitte                                                Page 3 of 10

                                       Theoretical 2: Solution
                                       Relativistic Correction on GPS Satelitte

 2. When the particles clock has a reading ⌧0 , its position is given by eq.(6), and the time t0 is
    given by eq.(19). Combining this two equation, we get
                                          ✓r                     ◆
                                       c2              2 g⌧0
                                  x=          1 + sinh          1 .                           (24)
                                       g                  c

    The particle’s clock reading is then sent to the observer at the origin. The total time needed
    for the information to arrive is given by
                                             c       g⌧0 x
                                         t=    sinh        +                                        (25)
                                             g         c      c
                                             c⇣        g⌧0          g⌧0                 ⌘
                                           =     sinh        + cosh                 1
                                             g           c           c
                                             c ⇣ g⌧0        ⌘
                                         t=      e c       1                                        (26)
                                             g
                                                  ✓          ◆
                                             c      gt
                                        ⌧0 = ln          +1 .                                       (27)
                                             g       c

    The time will not freeze.

    Part C. Minkowski Diagram

 1. The figure below show the setting of the problem.
    The line AB represents theq
                              stick with proper length equal L in the S frame.
                                              2
    The length AB is equal to 11+ 2 L in the S’ frame.
    The stick length in the S’ frame is represented by the line AC

              !                         ct#                 ct’#
              !
              !
              !
              !                                                               x’#
              !                                                    C!
              !
              !                                   !!
              !
              !                                        !!                x#
              !                          A!
                                                                    B!
              !
                3. The!position!of!the!particle!is!given!by!eq.!(5).!!
              !                         Figure 1: Minkowski Diagram
              !
              !                              !!
                                                        AB       p
              !                                 AC =         = 1       2 L.                         (28)
              !                                        cos ✓
              !
 2. The  position of the particle is given by eq.(6).
              !
              !
              !
              !
Relativistic !Correction on GPS Satelitte                                                   Page 4 of 10
                                !
              !
              !

                                      Theoretical 2: Solution
                                  Relativistic Correction on GPS Satelitte

                                !!                   !"′!
                            !" ! !!                                                   !′!
                                !




                                                                                         !!
                                                                                      ! ! !!
                                                                                         !


                                                                                                     !
                                      Figure 2: Minkowski Diagram

   Part D. Two Accelerated Particles
 1. ⌧B = ⌧A .
 2. From the diagram, we have
                                                                 ct2    ct1
                                           tan ✓ =          =               .                                    (29)
                                                                  x2    x1
    Using eq.(6), and eq.(19) along with the initial condition, we get
                                             c2 ⇣       g⌧1             ⌘
                                        x1 =       cosh                1 ,                                       (30)
                                             g           c
                                             c 2 ⇣      g⌧2             ⌘
                                        x2 =       cosh                1 + L.                                    (31)
                                             g           c
    Using eq.(16), eq.(19), eq.(30) and eq.(31), we obtain
                                                 ⇣                                          ⌘
                                                   c     g⌧2                c     g⌧1
                                 g⌧1           c   g sinh c                 g sinh c
                           tanh      =       2                                  c2
                                  c    L + c cosh g⌧2 1
                                                 g              c               g    cosh g⌧c1   1
                                               sinh g⌧c2        sinh g⌧c1
                                       = gL
                                         + cosh g⌧c2 cosh g⌧c1
                                          c2
                        gL      g⌧1        g⌧2      g⌧1        g⌧2      g⌧1
                           sinh     = sinh     cosh     cosh       sinh
                        c2       c           c       c          c        c
                        gL      g⌧1        g
                           sinh     = sinh (⌧2 ⌧1 ) .                                                            (32)
                        c2       c         c
    So C1 = gL
            c2
               .


Relativistic Correction on GPS Satelitte                                                                 Page 5 of 10

                                                 gτ 2         gτ
                                                  sinh− sinh 1
           !                         =            c            c                   !!
                                        gL          gτ 2         gτ 1
                                            + cosh        − cosh
                                        c2            c           c
                        gL      gτ           gτ          gτ         gτ         gτ
                          2
                            sinh 1 = sinh 2 cosh 1 − cosh 2 sinh 1
                        c        c            c           c           c         c
                                 Theoretical                2:   Solution
           Using!identity!relation,!the!last!equation!is!simply!to!
                                       gL
                                 Relativistic   gτ           g
           !                             2
                                           sinh 1 = Correction
                                                        sinh (τ 2 − τ 1 ) !! on GPS Satelitte
                                                                                          (15)!
                                       c         c           c
      !
      !                                      !!
      !
      !
      !
      !
      !
      !
      !                      t2!
      !
      !
      !
                             t1!                    !!
      !
      !
      !
      !
      !
      !                                                                                           !!
      !
                                           x1!                               x2!
      !
          !
      3.  From!the!length!contraction,!we!have!
                        Figure  3: Minkowski Diagram for two particles
                                         x −x
                                   L' = 2 1
 3. From the length contraction, we haveγ 1
          !                                                                       !!
                               d 0 L ′ x2⎛ dxx1 dτ      dx  ⎞  1    x   − x  dγ
                              L ==             2    2
                                                      −   1
                                                                  −   2    1    1                              (33)
                               d0 τ 1 ✓ ⎜⎝ d1τ 2 dτ 1 dτ◆1 ⎟⎠ γ 1     γ 12 dτ 1
                                   dL        dx2 d⌧2     dx1      1          x2        x1 d 1
                                       =                                           2          .                (34)
                                   d⌧1       d⌧2 d⌧1     d⌧1      1                1      d⌧1

    Take derivative of eq.(30), eq.(31) and eq.(32), we get
                                            dx1           g⌧1
                                                = c sinh      ,                                                (35)
                                            d⌧1            c
                                            dx2           g⌧2
                                                = c sinh      ,                                                (36)
                                            d⌧2            c
                                                                             ✓             ◆
                                   gL       g⌧1         g                        d⌧2
                                     2
                                       cosh     = cosh (⌧2            ⌧1 )                1 .                  (37)
                                   c         c          c                        d⌧1

    The last equation can be rearrange to get
                                                     gL
                                             d⌧2      c2
                                                         cosh g⌧c1
                                                 =                  + 1.                                       (38)
                                             d⌧1   cosh gc (⌧2 ⌧1 )


Relativistic Correction on GPS Satelitte                                                               Page 6 of 10

                                     Theoretical 2: Solution
                                    Relativistic Correction on GPS Satelitte

    From eq.(29), we have
                                                                      ✓                             ◆
                                   c(t2       t1 )        c               c      g⌧2   c      g⌧1
                       x2   x1 =                     =                      sinh         sinh           .           (39)
                                          1            tanh g⌧c1          g       c    g       c

    Combining all these equations, we get
                                           gL       g⌧
                                                                                   !
                   dL1              g⌧2 c2 cosh c1                 g⌧2         g⌧1       1
                       =    c sinh                        + c sinh     c sinh
                   d⌧1               c cosh gc (⌧2 ⌧1 )             c           c    cosh g⌧c1
                                c2 ⇣      g⌧2          g⌧1 ⌘    1      1      g      g⌧1
                                     sinh        sinh             g⌧1  2  g⌧1   sinh
                                g          c            c tanh c cosh c c             c
                   dL1   gL     sinh g⌧c2
                       =                     .                                                                      (40)
                   d⌧1    c cosh gc (⌧2 ⌧1 )

    So C2 = gL
             c .

   Part E. Uniformly Accelerated Frame

 1. Distance from a certain point xp according to the particle’s frame is
                                                     x       xp
                                          L0 =                                                                      (41)
                                                      c2
                                              0       g1     cosh g1c⌧        1   xp
                                          L =
                                                                  cosh g1c⌧
                                                                c2
                                              c2
                                              0                 g1 + xp
                                          L =                            .                                          (42)
                                              g1               cosh g1c⌧

                                                      c2
    For L0 equal constant, we need xp =               g1 .

 2. First method: If the distance in the S’ frame is constant = L, then in the S frame the length
    is                                          s
                                                   1+ 2
                                         Ls = L          2
                                                           .                                 (43)
                                                   1

    So the position of the second particle is

                            x2 = x1 + Ls cos ✓                                                                      (44)
                                    0s                        1    s
                                  2
                                            ✓         ◆2                ✓        ◆
                                 c @           g 1 t1                     g 1 t1
                               =        1+                   1A + L 1 +
                                 g1              c                          c
                                 ✓ 2      ◆s         ✓       ◆
                                   c                   g 1 t1 2 c 2
                            x2 =      +L       1+                    .                                              (45)
                                   g1                    c        g1



Relativistic Correction on GPS Satelitte                                                                    Page 7 of 10

      !                                                !
                                      Theoretical
                                        ⎛c   2
                                              ⎞    ⎛ g t ⎞2: cSolution
                                                              2       2

      !                            x2 = ⎜ + L ⎟ 1+ ⎜ 1 1 ⎟ − !!           (17)!
                                        ⎝ g1  ⎠
                                      Relativistic ⎝ c   ⎠
                                                     Correction
                                                             g1   on GPS Satelitte
 !
 !
 !                                               !
 !
 !
 !
 !
 !                          t2!
 !
 !                                                          L"
 !
 !                           t1!                      !!
 !
 !
 !
 !
 !
 !                                                                                         !
 !                                     x1!                                    x2!
      !
      the!time!of!the!second!particle!is!
                          Figure 4: Minkowski Diagram for two particles
                                 ct 2 = ct1 + LS sin θ
     The time of the second particle is       ⎛                     ⎞
                                              ⎜         g1t1        ⎟
                                     ct2 = ct⎜1 L+ Ls sinc✓         ⎟                                    (46)
                                              ⎜      s            2 ⎟

                                              ⎜1 + L1+ ⎛⎜1 +1 1 ⎞⎟ p
                                                           gt 2
                                                                    ⎟
      !                                  =  ct
                                              ⎝         ⎝1 c ⎠2 ⎠ 1!! + 2
                                      = ct1 + ✓            ◆
                                                ⎛    g1 L          ⎞
                                     ct2 = t1 ⎜ c +           . ⎟                                        (47)
                                                       c1
                                                ⎜                  ⎟
                                                ⎜                2 ⎟
                                                ⎜ 1+ ⎛⎜ 1 1 ⎞⎟ ⎟
     Substitute eq.(47) to eq.(45) to get                 gt
                                                ⎝v    ⎝ c ⎠ ⎠          !
                                  ✓ 2       ◆u    u                   2
                                     c        ⎛
                                              t  g   L g⎞1 t2                       c2
      !                      x2 = ct +=Lct 1+   1+
                                                        ⎟ !!                                   (18)!
                                                   1
                                             1⎜                 g1 L
                                     g1 2     ⎝   c 2 ⎠c 1 + c2                     g1
                                              v                      !2
      Substitute!eq.(18)!to!eq.(17)!to!get!
                                  ✓ 2       ◆uu
                                     c        t             g 1 t2                  c2
                             x2 =       +L      1+                                     .                 (48)
                                     g1                1 + gc12L c                  g1

     From the last equation, we can identify
                                                                 g1
                                                     g2 ⌘                 .                              (49)
                                                            1 + gc12L


Relativistic Correction on GPS Satelitte                                                         Page 8 of 10

                                   Theoretical 2: Solution
                                   Relativistic Correction on GPS Satelitte

    As for confirmation, we can subsitute this relation to the second particle position to get
                                              s    ✓        ◆
                                          c 2         g 2 t2 2 c 2
                                    x2 =       1+                  .                           (50)
                                          g2            c       g1

    Second method: In this method, we will choose g2 such that the special point like the one
    descirbe in the question 1 is exactly the same as the similar point for the proper acceleration
    g1 .
    For first particle, we have xp1 g1 = c2
    For second particle, we have (L + xp1 )g2 = c2
    Combining this two equations, we get
                                                         c2
                                              g2 =            2
                                                     L + gc1
                                                       g1
                                              g2 =                .                           (51)
                                                     1 + gc12L

 3. The relation between the time in the two particles is given by eq.(47)
                                                     ✓              ◆
                                                             g1 L
                                            t2 = t1 1 + 2
                                                               c
                                 2                 2
                                                                    ✓        ◆
                               c        g 2 ⌧2   c           g 1 ⌧1     g1 L
                                   sinh        =      sinh            1+ 2
                               g2          c     g1             c        c
                                        g 2 ⌧2          g 1 ⌧1
                                   sinh        = sinh
                                           c               c
                                        g 2 ⌧2 = g 1 ⌧1                                       (52)
                                         d⌧2     g1              g1 L
                                               =      =1+ 2 .                                 (53)
                                         d⌧1     g2               c

   Part F. Correction for GPS
 1. From Newtons Law
                                          GM m
                                               = m! 2 r                                       (54)
                                           r2
                                                 ✓ 2 2 ◆ 13
                                                  gR T
                                              r=                                              (55)
                                                   4⇡ 2
                                                r = 2.66 ⇥ 107 m.
    The velocity is given by
                                                     ✓                ◆ 13
                                                         2⇡gR2
                                          v = !r =                                            (56)
                                                           T
                                            = 3.87 ⇥ 103 m/s.



Relativistic Correction on GPS Satelitte                                              Page 9 of 10

                                        Theoretical 2: Solution
                                     Relativistic Correction on GPS Satelitte

 2. The general relativity e↵ect is
                                            d⌧g        U
                                                =1+                                                     (57)
                                            dt      mc2
                                            d⌧g     gR2 R r
                                                =1+ 2       .                                           (58)
                                            dt       c   Rr
      After one day, the di↵erence is

                                                        gR2 R r
                                                ⌧g =                 T                                  (59)
                                                         c2 Rr
                                                      = 4.55 ⇥ 10 5 s.

      The special relativity e↵ect is
                                              r
                                        d⌧s                v2
                                            = 1                                                         (60)
                                        dt    v            c2
                                              u
                                              u              ✓             ◆2 !
                                                                   2⇡gR2     3      1
                                            = t1
                                                                     T              c2
                                                               ✓           ◆ 23 !
                                                       1           2⇡gR2            1
                                           ⇡1                                          .                (61)
                                                       2             T              c2

      After one day, the di↵erence is
                                                           ✓           ◆ 23 !
                                                  1            2⇡gR2            1
                                         ⌧s =                                      T                    (62)
                                                  2              T              c2
                                           =      7.18 ⇥ 10 6 s.

      The satelite’s clock is faster with total       ⌧=        ⌧g +     ⌧s = 3.83 ⇥ 10 5 s.

 3.     L = c ⌧ = 1.15 ⇥ 104 m = 11.5km.




Relativistic Correction on GPS Satelitte                                                       Page 10 of 10
