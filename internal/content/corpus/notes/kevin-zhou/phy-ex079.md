---
id: kevin-zhou-notes-phy-ex079
source: kevin-zhou-notes
native_id: "phy Example 079"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex079
topic: [quantum-mechanics]
subtopic: [angular-momentum]
math_tools: [linear-algebra, group-theory]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9172-9255"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The ket |+⟩ = (1, 0) points in the +ẑ direction, since ⟨+|σ|+⟩ = ẑ and σz |+⟩ = |+⟩.
Similarly, we can define the kets pointing in arbitrary directions as
                                             |n̂, +⟩ = U |+⟩.
Writing n̂ in spherical coordinates and applying the Euler angle decomposition,
                                                            −iα/2         
                                                            e       cos β/2
                         U = U (ẑ, α)U (ŷ, β), |n̂, +⟩ =                   .
                                                             eiα/2 sin β/2
Applying the adjoint formula, we have
                              n̂ · σ|n̂, +⟩ = |n̂, +⟩,   ⟨n̂, +|σ|n̂, +⟩ = n̂.
Then the expectation value of the spin along any direction perpendicular to n̂ vanishes.
We now consider general representations of su(2) on a Hilbert space. That is, we are looking
for triplets of operators J satisfying the angular momentum commutation relations. Given these
operators, we can recover the rotation operators by exponentiation; conversely, we can get back to
the angular momentum operators by differentiation at θ = 0.

  • Begin by constructing the operator
                                             J 2 = J12 + J22 + J32 .
    which commutes with J; such an operator is called a Casimir operator. As a result, J 2 commutes
    with any function of J, including the rotation operators.
  • Given the above structure, we consider simultaneous eigenkets |am⟩ of J 2 and J3 , with eigenval-
    ues ℏ2 a and ℏm. Since J 2 and J3 are Hermitian, a and m are real, and since J 2 is nonnegative
    definite, a ≥ 0. For simplicity, we assume we are dealing with an irrep; physically, we can
    guarantee this by postulating that J 2 and J3 form a CSCO.
  • We introduce the ladder operators
                  J± = J1 ± iJ2 ,    [J3 , J± ] = ±ℏJ± ,    [J+ , J− ] = 2ℏJ3 ,   [J 2 , J± ] = 0.
    They satisfy the relations
              1
         J 2 = (J+ J− + J− J+ ) + J32 ,     J− J+ = J 2 − J3 (J3 + ℏ),       J+ J− = J 2 − J3 (J3 − ℏ).
              2
    In this setting, J± play a very similar formal role to a and a† for the QHO.
171 7. Angular Momentum


  • Next, as in the QHO, we investigate norms. We have

                                ⟨am|J− J+ |am⟩ = ℏ2 (a − m(m + 1)) ≥ 0

    and similarly
                                         ℏ2 (a − m(m − 1)) ≥ 0.
    Therefore, we require a ≥ max(m(m + 1), m(m − 1)). If the maximum value of |m| is j, the
    corresponding value of a is j(j + 1). For convenience, we switch to labeling the states by j and
    m values.

  • Then our first equation above becomes

                              ⟨jm|J− J+ |jm⟩ = ℏ2 (j − m)(j + m + 1) ≥ 0

    where we have equality if j = m. (The other case is forbidden by our second equation.) Doing
    a similar analysis on the second equation, we conclude

                            J+ |jm⟩ = 0 iff m = j,      J− |jm⟩ = 0 iff m = −j.

  • Finally, using the commutation relations, we see that acting with J± doesn’t change the j value,
    but raises/lowers m by 1. As a result, we conclude that m − j is an integer; if not, we can keep
    applying the raising operator until our inequalities above are broken. Similarly, m − (−j) is an
    integer. Therefore, 2j is an integer and m = −j, . . . , +j. These are all of the irreps of su(2).

Now that we’ve found all of the irreps, we turn to calculations and applications.

  • Using our norm calculation above, we find
                 p                                                  p
      J+ |jm⟩ = ℏ (j − m)(j + m + 1)|j, m + 1⟩,          J− |jm⟩ = ℏ (j + m)(j − m + 1)|j, m − 1⟩.

    Above we used the phase freedom in the |jm⟩ to set all possible phase factors to zero. Then
                                     s                j−m
                                          (j + m)!     J−
                              |jm⟩ =                             |jj⟩.
                                        (2j)!(j − m)! ℏ

  • Given the above, we know the matrix elements of J± , as well as the matrix elements of J3 ,

                                      ⟨j ′ m′ |J3 |jm⟩ = ℏδj ′ j δm′ m m.

    Then we can simply write down the matrix elements of all of the J, and hence the matrix of
    any function of J, including the rotation operators.

Note. The j values which appear must be determined separately for each physical situation. If
we’re considering central force motion of a particle, it turns out that only integral j matter. If we
consider p-wave scattering, j = 1 appears. The spin state of a photon is (roughly) described by
j = 1, but the spin state of two electrons is described by j = 0, 1.
172 7. Angular Momentum


