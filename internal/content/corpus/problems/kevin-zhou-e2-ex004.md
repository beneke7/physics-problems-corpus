---
id: "kevin-zhou-e2-ex004"
source: "kevin-zhou"
native_id: "KZ-E2-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e2-ex004"
topic: [electrostatics]
subtopic: [method-of-images, electric-dipoles, induced-charges, multipole-approximation]
math_tools: [algebra, asymptotic-approximations]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E2.txt"
source_url: "sources/kevin_zhou/site/handouts/E2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 4

      Find the leading interaction force between a dipole of dipole moment p and a grounded
      conducting sphere of radius r, separated by a distance R ≫ r. What if the sphere is
      electrically neutral instead?

      Solution
      Place the origin at the center of the sphere and orient the z-axis to pass through the dipole.
      We can regard the dipole p = qd ẑ as a combination of two charges

                                      −q at z = R,             q at z = R + d

      where d is very small. In the grounded case, this induces two image charges in the sphere,

                                   qr       r2                 qr         r2
                                      at z = ,           −        at z =
                                   R        R                 R+d        R+d

      approximately separated by dr2 /R2 . We can now use Coulomb’s law four times, but that’s
      a bit tedious. Instead, decompose the image charges into a dipole moment and a net charge,

                                           pr3                qr    qr  pr
                                    p′ =       ,    Q′ =         −     ≈ 2.
                                           R3                 R    R+d  R
      We can place both of these at the origin, because this slight displacement will only affect the
      answer by subleading terms in r/R. Then the corresponding fields, far along the z-axis, are

                                                   2kpr3                       kpr
                                    Ep′ (z) =             ,        EQ′ (z) =          .
                                                   R3 z 3                      R2 z 2


                                                              10


Kevin Zhou                                                              Physics Olympiad Handouts



  The first term is negligible compared to the second, due to the many powers of R and z in
  the denominator. Thus, keeping only the second term, the force on the original dipole is

                                          d              2kp2 r
                                   F =p      E(z)     =−
                                          dz      z=R     R5

  which falls off very quickly with distance. This derivation illustrates a common subtlety: it
  might not always be obvious how far to approximate. We threw away terms subleading in
  r/R, because we only wanted the leading contribution. But if we had applied that principle
  to the image charges at the first step, we would have thrown out the tiny net charge Q′ ,
  which actually provides the dominant contribution to the force, because of how tiny p′ is.

  Now, the situation for a neutral sphere is completely different. By the logic of problem 5,
  there’s a third image at the center of the sphere to enforce neutrality,
                                              pr
                                          −      at z = 0.
                                              R2
  The image charges can now be decomposed into a combination of two dipole moments. We
  already saw the first one p′ above, while the second is, to leading order

                                                pr r2   pr3
                                        p′′ ≈         =
                                                R2 R    R3
  with the same magnitude and direction as p′ . Thus, this system of image charges has
  approximate dipole moment 2p′ . The corresponding force is

                                       d 4 kpr3          12 kp2 r3
                                F =p                 = −
                                       dz R3 z 3 z=R        R7

  which falls off even more quickly with distance. In this derivation, we didn’t have to worry
  too much about getting p′′ exactly right, because there was no net charge (“monopole”)
  term that could’ve overwhelmed the dipole field, so all other field contributions are
  safely suppressed by more powers of r/R. (Of course, if p′′ had come out pointing the
  opposite direction to p′ , so that the two almost cancelled, we would’ve had to be more careful.)

  The lesson of this example is not to just use exact expressions and Taylor expand at the end.
  Here, that brute force approach would have required Taylor expanding six Coulomb’s law
  forces out to order 1/R7 , which is extraordinarily tedious. Instead, to approximate properly,
  we have to think carefully in every case. Incidentally, when applied to a polar and neutral
  nonpolar molecule, the 1/R7 force above is called the Debye force; it is one of the “van der
  Waals forces” which are often vaguely described in chemistry classes.

  Example 5

  Estimate the interaction force between a point charge q and a thin conducting rod of length ℓ,
  which is a distance L ≫ ℓ from the charge and oriented along the separation between them.




                                                  11


    Kevin Zhou                                                                Physics Olympiad Handouts


       Solution
       The interaction occurs because the point charge induces negative charges on the near end of
       the rod, and positive charges on the far end. These charges are then acted on by the electric
       field of the point charge, causing a force.

       To get a very crude estimate, let’s suppose charge Q appears on the far end and charge −Q
       appears on the near end. The resulting field produced in the middle is
                                                        kQ
                                                  E∼       .
                                                        ℓ2
       On the other hand, this needs to cancel a field from the point charge of
                                                           kq
                                                   E∼
                                                           L2
       which tells us that Q ∼ (ℓ/L)2 q. The force on the induced charges is then

                                                                       kq 2 ℓ3

                                           1        1        kqQℓ
                             F ∼ kqQ             −      ∼  −       ∼ −         .
                                        (L + ℓ)2 L2           L3        L5

       Again, the force is attractive, and falls off quickly with distance.
