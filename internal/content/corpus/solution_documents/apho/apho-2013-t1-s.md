---
id: solution-document-apho-2013-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2013/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2013-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2013/T1_S.pdf."
---

Theoretical 1: Solution
                                  Conductors in Conducting Liquid

 1. Using Gauss law                         I
                                                               q
                                                 E · dA =         .                       (1)
                                                               ✏0
    From symetry we know that the electric field only has radial component. Choose a cylinder
    (with a line charge as the axis) as the Gaussian surface, we obtain
                                                               l
                                                E.2⇡rl =         .
                                                              ✏0

    Simplify to obtain
                                                E = r̂            .                       (2)
                                                         2⇡✏0 r
 2. The potential is given by
                                                   Z r
                                          V =              E · dl
                                                   Zrefr
                                            =              E.dr
                                                     ref

                                          V =               ln r + K,                     (3)
                                                  2⇡✏0

    so f (r) =   2⇡✏0 ln r. where K is a constant.

 3. The potential from both line charges is a superposition of both potential
                 !
                 !
                                                y$
                 !
                 !
                 !                        r1!
                 !                                               r2!
                 !           !!                                         x$
                                                            −!!
                 !
                 !           $b!                                 b!
                 !
                 !         Figure 1: System with two line charges
                 !
                 !
                 !                V =         ln r1 +        ln r2                        (4)
                                         2⇡✏0          2⇡✏0
                 !                             p
                                                   (b x)2 + y 2
                 !                   =      ln p
                                       2⇡✏0        (b + x)2 + y 2
                 !
                 !                             (b x)2 + y 2
                                  V =       ln                 .                          (5)
                 !                     4⇡✏0 (b + x)2 + y 2
                 !
                 !
Conductors in    !
              Conducting Liquid                                                   Page 1 of 6
                 !
                 !
                 !

                                     Theoretical 1: Solution
                                     Conductors in Conducting Liquid

    We can rearrange eq.(5) in to:
                           ✓      ✓    ◆◆2                         ✓         ◆2           !
                                    1+                                 1+
                             x             + y 2 = b2                                 1                           (6)
                                    1                                  1
                    4⇡✏0 V
    where   = exp             . For an arbitrary potential V , Eq. (6) is an equation of circle.




                                                                                                    1
    Figure 2: The equipotential surfaces with b = 1, for           = 12.35 (left) and           = 12.35 (right)

 4. From eq.(5) and eq.(6), we see that for any arbitrary potential V , the equipotential surfaces
    of these two equal but opposite lines charge, are cylindrical surfaces. From this observation,
    we can choose the specific position for each line charge in both cylinders so that the surface of
    each cylinder is an equipotential surface.
       !
    Consider the following figure


                                              r1!
                                                                       R"
                                                             r2!
                         !!                                            !!
                                                             −!!
                                                    l1!
                                                                    l2!

                    Figure 3: Two line charges with its equipotential surfaces

    We would like to find a cylindrical equipotential surface enclose one line charge, let say the
    (if we could find the surface, by symmetry, we surely can find the identical one that enclose
    the line ). The potential is given by

                 V =            ln r1 +          ln r2
                        2⇡✏0              2⇡✏0
                    =           ln(l12 + R2      2l1 R cos ) +          ln(l22 + R2       2l2 R cos ).            (7)
                        4⇡✏0                                     4⇡✏0


Conductors in Conducting Liquid                                                                          Page 2 of 6

                                    Theoretical 1: Solution
                                    Conductors in Conducting Liquid

   Since the surface of the cylinder has to be the equipotential surface, so the potential should
   not depend on , i.e. @V
                         @ = 0.



                                 2l1 R sin                              2l2 R sin
                                                           +                                     =0             (8)
                      4⇡✏0 l12 + R2 2l1 R cos               4⇡✏0 l22 + R2 2l2 R cos
                                      l1                               l2
                             2    2
                                                           = 2      2
                           l1 + R      2l1 R cos             l2 + R     2l2 R cos
                       l12 l2 + R2 l2   2l1 l2 R cos       = l1 l22 + R2 l1      2l1 l2 R cos
                                                                  2
                                        l1 l2 (l1    l2 ) = R (l1         l2 )

                                                     l1 l2 = R 2 .                                              (9)

   From the data in the problem, we have

                                                    l1 + l2 = 10a,                                             (10)
                                                       l1 l2 = 9a2 .                                           (11)

   Solve this quadratic equation to get
                                                    l1 = 5a ± 4a.                                              (12)
   However, since l1 > l2 , we have

                                                       l1 = 9a,                                                (13)
                                                       l2 = a.                                                 (14)

   Using this results on eq.(5), we have

                                                            (4a x)2 + y 2
                                        V =            ln                   .                                  (15)
                                               4⇡✏0         (4a + x)2 + y 2

   This is the potential in all region except inside both cylinders. For cylinders at x =                   5a, the
   potential is constant and equal to
                                                                 (4a + 2a)2 + 02
                     V (x =      2a, y = 0) =               ln                   =      ln 3.                  (16)
                                                    4⇡✏0         (4a 2a)2 + 02     2⇡✏0
   For cylinders at x = 5a, the potential is constant and equal to
                                                            (4a 2a)2 + 02
                     V (x = 2a, y = 0) =               ln                   =                   ln 3.          (17)
                                                4⇡✏0        (4a + 2a)2 + 02             2⇡✏0
   The potential di↵erence between both cylinders are

                                                V =              ln 3 ⌘ V0 .                                   (18)
                                                       ⇡✏0


Conductors in Conducting Liquid                                                                         Page 3 of 6

                                  Theoretical 1: Solution
                                 Conductors in Conducting Liquid

   Substituting this results in the potential equation, the potential outside the two cylinders are:

                                            V0      (4a x)2 + y 2
                                     V =         ln               .                            (19)
                                           4 ln 3 (4a + x)2 + y 2

   And the potential inside the cylinders are:
   The potential inside the cylinder centered at (x = 5a, y = 0) is V =        V0 /2.
   The potential inside the cylinder centered at (x =        5a, y = 0) is V = V0 /2.

 5. From eq.(18), we have
                                                     q
                                            V0 =        ln 3,                                  (20)
                                                   l⇡✏0
   so we get
                                                  q    l⇡✏0
                                            C=       =                                         (21)
                                                  V0   ln 3
 6. The electric field produces by both cylinders are
                                        ✓                                ◆
                                   V0        4a + x           4a x
                            Ex =                         +                 .                   (22)
                                  2 ln 3 (4a + x)2 + y 2 (4a x)2 + y 2
                                        ✓                                ◆
                                   V0           y               y
                            Ey =                  2    2
                                                                           .                   (23)
                                  2 ln 3 (4a + x) + y      (4a x)2 + y 2

   The volume current density is given by

                                                 J= E                                          (24)

   To calculate the total current, we may choose to calculate the current that flow through the
   x = 0 plane. On this plane, there is no current in the y direction. The total current is given by
                                         Z
                                    I = J · dA                                                  (25)
                                         Z
                                       =      Ex ldy
                                                  Z
                                            8aV0 1         dy
                                       = l
                                            2 ln 3 1 (4a)2 + y 2
                                          V0 ⇡ l
                                    I=                                                          (26)
                                           ln 3

 7. The resistance is given by
                                                   V0   ln 3
                                            R=        =                                        (27)
                                                   I    ⇡ l
   and therefore
                                                        ✏0
                                                 RC =                                          (28)



Conductors in Conducting Liquid                                                         Page 4 of 6

                                    Theoretical 1: Solution
                                    Conductors in Conducting Liquid

 8. Since the system has a high symmetry, we may use Ampere’s law. The magnetic field should
    not have any z dependence, since the current has no z dependence.
   Figure 4 shows the current density J flow from one cylinder to the other cylinder. Choose an
   Ampere loop on a constant x plane in a symmetrical way, so that the first path is pointing in
   the positive z direction with constant y coordinate, the second path is pointing to the negative
   y direction with constant z coordinate. The third path is pointing to the negative z direction,
   but with constant y coordinate. The fourth path is pointing in the positive y direction with
   constant z coordinate.
   Having this path, we need to calculate the current that flow through the loop
                           Z
                       I = J · dA
                           Z
                         = Jx ldy
                                 Z ✓                                   ◆
                           V0 l y          4a + x             4a x
                         =                             +                 dy
                           2 ln 3 y (4a + x)2 + y 2 (4a x)2 + y 2
         !
         !                                                                z$
         !
         !                               2!                                    x\$
         !
         !                      !
         !                                              ≈!
                                                   1!        J"
         !
         !                               3!
         !
         !
         !                                    4!



                                     Figure 4: The Ampere loop
                                        ✓                                 ◆
                               V0 l                   y              y
                            I=              arctan        + arctan                            (29)
                               ln 3                4a + x          4a x
   Using the Ampere’s law
                      I
                         B · dl = µ0 I                                                        (30)
                                              ✓                             ◆
                                   µ 0 V0 l               y              y
                           2Bz l =              arctan        + arctan
                                     ln 3              4a + x          4a x
                                              ✓                             ◆
                                        V0                y              y
                            Bz = µ0             arctan        + arctan                        (31)
                                       2 ln 3          4a + x          4a x


Conductors in Conducting Liquid                                                        Page 5 of 6

                                  Theoretical 1: Solution
                              Conductors in Conducting Liquid

   therefore
                                           ✓                                   ◆
                                  µ 0 V0                   y              y
                         B = ẑ                arctan          + arctan                   (32)
                                  2 ln 3                4a + x          4a x




Conductors in Conducting Liquid                                                    Page 6 of 6
