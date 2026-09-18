---
id: kevin-zhou-notes-phy-ex021
source: kevin-zhou-notes
native_id: "phy Example 021"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex021
topic: [electromagnetism]
subtopic: [electric dipole, field energy]
math_tools: [vector calculus, Taylor expansion]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1461-1509"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. The electric dipole has

                                          Q         1    1
                                      ϕ=              −             .
                                         4πϵ0       r |r + d|
To approximate this, we use the Taylor expansion
                                              X (d · ∇)n
                                  f (r + d) =            f (r)
                                              n
                                                   n!
which can be understood by expanding in components with d · ∇ = di ∂i . Then

                                   Q           1      Q d·r
                             ϕ≈         −d · ∇     =          .
                                 4πϵ0          r     4πϵ0 r3
We see the potential falls off as 1/r2 , and at large distances only depends on the dipole moment
p = Qd. Differentiating using the usual quotient rule,
                                             1 3(p · r̂)r̂ − p
                                       E=                      .
                                            4πϵ0     r3
Taking only the first term of the Taylor series is justified if r ≫ d. More generally, for an arbitrary
charge distribution
                                                            ρ(r′ )
                                                   Z
                                               1
                                     ϕ(r) =           dr′
                                             4πϵ0          |r − r′ |
and approximating the integrand with Taylor series gives the multipole expansion.


Note. Electromagnetic field energy. The energy needed to assemble a set of particles is
                                                1X
                                          U=       qi ϕ(ri ).
                                                2
                                                   i

This generalizes naturally to the energy to assemble a continuous charge distribution,
                                        Z                  Z
                                      1                 ϵ0
                                U=        dr ρ(r)ϕ(r) =      dr E 2
                                      2                 2
where in the second step we integrated by parts and discarded a surface term. However, there’s a
subtlety when we go back to considering point charges, where these two expressions no longer agree.
The first explicitly doesn’t include a charge’s self-interaction, as the potential ϕ(ri ) is supposed to
be determined by all other charges. The second does, and hence the final result is positive definite.
It can be thought of as additionally including the energy needed to assemble each point charge from
scratch.

