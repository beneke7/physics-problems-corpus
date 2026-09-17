---
id: kevin-zhou-notes-phy-ex013
source: kevin-zhou-notes
native_id: "phy Example 013"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex013
topic: [classical mechanics]
subtopic: [angular momentum, canonical transformations]
math_tools: [vector calculus, linear algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "918-968"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. Angular momentum. Defining L = r × p, we have

                                      {Li , Lj } = ϵijk Lk ,     {L2 , Li } = 0.

The Li generate rotations, so the first equation shows the commutation relation of infinitesimal
rotations. A Hamiltonian is rotationally symmetric if {Li , H}, leading to conservation of angular
momentum.

We now consider the changes of coordinates that preserve the form of Hamilton’s equations; these are
called canonical transformations. Generally, they are more flexible than coordinate transformations
in the Lagrangian formalism, since we can mix position and momentum.

  • Define x = (q1 , . . . , qn , p1 , . . . , pn )T and define the matrix J as
                                                                      
                                                                0   In
                                                        J=
                                                               −In 0

    Then Hamilton’s equations become
                                                    ∂H
                                                       .ẋ = J
                                                    ∂x
    Also note that the canonical Poisson brackets are {xi , xj } = Jij .

  • Now consider a transformation qi → Qi (q, p) and pi → Pi (q, p), written as xi → yi (x). Then

                                                                      ∂H
                                                     ẏ = (J JJ T )
                                                                      ∂y

    where J is the Jacobian matrix Jij = ∂yi /∂xj . We say the Jacobian is symplectic if J JJ T is
    the identity, and in this case, the transformation is called canonical.

  • The Poisson bracket is invariant under canonical transformations. To see this, note that

                                               {f, g}x = (∂x f )T J(∂x g)

    where (∂x f )i = ∂f /∂xi . By the chain rule, ∂x = J T ∂y , giving the result. Then if we only
    consider canonical transformations, we don’t have to specify which coordinates the Poisson
    bracket is taken in.
20 1. Classical Mechanics


 • Conversely, if a transformation preserves the canonical Poisson brackets {yi , yj }x = Jij , it is
   canonical. To see this, apply the chain rule for

                                     Jij = {yi , yj }x = J JJ T ij
                                                               

    which is exactly the condition for a canonical transformation.

