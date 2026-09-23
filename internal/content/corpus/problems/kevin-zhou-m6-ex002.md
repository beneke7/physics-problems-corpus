---
id: "kevin-zhou-m6-ex002"
difficulty_level: 5
source: "kevin-zhou"
native_id: "KZ-M6-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m6-ex002"
topic: [mechanics]
subtopic: [gravitation, shell-theorem, central-forces]
math_tools: [integration, calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 2

  Prove the converse of Newton’s second theorem: outside of a spherical shell, its gravitational
  field is equivalent to a point mass at its center only if F (r) is proportional to r, proportional
  to r−2 , or a linear combination of the two.

  Solution
  It’s easiest to consider the potential outside the shell. Let the shell of mass m be centered
  at the origin with radius R, and consider the potential at a distance z > R from the origin.
  If a point mass produces a gravitational potential f (r) dm at separation r, then integrating

                                                   2


Kevin Zhou                                                               Physics Olympiad Handouts

    over the sphere in spherical coordinates gives
                                    Z π
                               m             2
                                                             p
                     V (z) =            (2πR   sin θ dθ) f (  z 2 + R2 − 2zR cos θ).
                             4πR2 0
                                                              √
    The trick is to switch variables to the separation r = z 2 + R2 − 2zR cos θ, since

                                            r dr = zR sin θ dθ.

    Plugging this in gives                          Z z+R
                                             m
                                    V (z) =                 rf (r) dr.
                                            2zR      z−R

    Newton’s second theorem works precisely when dV /dz is independent of R, so that the shell
    radius can be collapsed to zero without changing the force.

    Suppose f (r) is proportional to rn . Then we have

                                            (z + R)n+2 − (z − R)n+2
                                  V (z) ∝
                                                      zR
    and the force’s dependence on R only drops out in three cases: when n = −1 (an inverse
    square force), n = 0 (the trivial case, corresponding to no force), and n = 2 (a linear force).
    The first two are easy to see, while for the final case we have

                                             8z 3 R + 8zR3
                                  V (z) ∝                  ∝ z 2 + R2
                                                   zR
    so that R drops out of dV /dz, as required. Since any reasonable function can be built by
    superposing such power laws, this classification is exhaustive.

    Incidentally, the same method can be used to prove the converse of Newton’s first theorem.
    The only difference is that z < R, so that the lower limit of integration has to be replaced
    with |z − R| = R − z. Then the n = 2 case works out the same way, since z − R is squared.
    By contrast, for n = −1 we get no force, since V (z) ∝ ((z + R) − (R − z))/zR = 2/R which is
    constant. Thus, the inverse square force is the only one where Newton’s first theorem applies.

2    Central Potentials
    Idea 3: Effective Potential
    A particle experiencing a central force has a potential energy V (r) which only depends on
    its radial coordinate, and conserved angular momentum
                                        L = |r × p| = mr2 θ̇.
    Its kinetic energy can thus be written in terms of the radial velocity ṙ and L,
                                                                         L2

                            1   2   1    2          1 2
                       E = mvr + mvθ + V (r) = mṙ + V (r) +                    .
                            2       2               2                  2mr2

                                                    3


    Kevin Zhou                                                                Physics Olympiad Handouts

       By setting the time derivative of this expression to zero, we find

                                                              L2

                                                d
                                       mr̈ = −       V (r) +        .
                                                dr           2mr2

       Therefore, if we are interested in r(t) alone, we can find it by treating the problem as
       one-dimensional, where the particle moves in the “effective potential” V (r) + L2 /2mr2 . The
       extra term is called the angular momentum barrier and repels the particle away from the
       center. Once we know r(t), we can find θ(t) if desired by using θ̇ = L/mr2 .

       One way of understanding the effective potential term is to think in terms of the energy
       methods of M4. From the perspective of r(t) alone, any dependence on ṙ2 is part of the kinetic
       energy, and any dependence on r is part of the potential energy. In particular, the kinetic
       energy of tangential motion depends only on r, because it is fixed by angular momentum
       conservation, so it appears as part of the potential when considering only radial motion.
