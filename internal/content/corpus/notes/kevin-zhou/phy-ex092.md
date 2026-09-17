---
id: kevin-zhou-notes-phy-ex092
source: kevin-zhou-notes
native_id: "phy Example 092"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex092
topic: [quantum-mechanics]
subtopic: [atomic-structure, time-dependent-perturbation-theory]
math_tools: [angular-momentum, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13224-13279"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Oxygen. The electron configuration is 1s2 2s2 2p4 . This is actually easier than nitrogen
because we can treat the two missing electrons as “holes”, with the same ℓ and s but opposite mℓ
and ms from an electron. The LS multiplets are hence exactly the same as in carbon.

Note. The first case in which the ground state of H0 yields degenerate LS multiplets is the case
of three d electrons, which first occurs for Vanadium, Z = 23. For anything more complicated than
this, the answer is rather tedious to work out, and one consults standard tables.

10.6    Chemistry
247 11. Time Dependent Perturbation Theory


11     Time Dependent Perturbation Theory
11.1    Formalism
We begin by introduction “pictures” (or “frames”) in quantum mechanics.

 • In time-dependent perturbation theory, we consider the Hamiltonian

                                              H(t) = H0 + H1 (t)

     where H0 is solvable and H1 is treated as a perturbation.

 • We are interested in calculating the transition amplitudes ⟨f |U (t)|i⟩ where typically |i⟩ and |f ⟩
   are eigenstates of the unperturbed Hamiltonian, and U (t) is the time evolution operator. It’s
   useful to do this in the interaction picture, to be introduced below.

 • In Heisenberg picture, we transfer all time-dependence to the operators, so

                                           AH (t) = U † (t)AS (t)U (t)

     where U (t) is the time evolution operator for H(t) from 0 to t. The states are frozen at their
     values at time t = 0. Of course, by construction, all matrix elements come out the same as in
     Schrodinger picture. In addition, if CS = AS BS , then CH = AH BH , which means all operator
     identities (such as commutation relations) remain true in Heisenberg picture.

 • In particular, the expression for the Hamiltonian remains valid, so

                                         HH (t) = HS (pH (t), xH (t), t).

     In the special case [HS (t), HS (t′ )] = 0 for all times (e.g. when it is time-independent) we find

                                                  HH (t) = HS (t).

 • Differentiating the Heisenberg operator definition and using
                                                  ∂U (t)
                                             iℏ          = HS (t)U (t)
                                                   ∂t
     we find the Heisenberg equation of motion,
                                                                                  
                                   dAH (t)                               ∂AS (t)
                              iℏ           = [AH (t), HH (t)] + iℏ                         .
                                     dt                                    ∂t          H

     Time-independent Schrodinger operators that always commute with the Hamiltonian are said
     to be conserved in Schrodinger picture; in Heisenberg picture, they have no time evolution.

