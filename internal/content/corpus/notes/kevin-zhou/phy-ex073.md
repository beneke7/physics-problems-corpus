---
id: kevin-zhou-notes-phy-ex073
source: kevin-zhou-notes
native_id: "phy Example 073"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex073
topic: [quantum-physics]
subtopic: [path-integrals, schrodinger-equation]
math_tools: [calculus, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8811-8848"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Recovering the Schrodinger equation. For a small time t = ϵ, we have

                                           ℏ2 2

                                     iϵ
                 ψ(x, ϵ) = ψ(x, 0) −     −    ∇ + V (x) ψ(x, 0) + O(ϵ2 ).
                                     ℏ     2m

Now we compare this to the path integral. Here we use a single timestep, so

                                                                   iϵ m(x − y)2
           Z                                      m  3/2
  ψ(x, ϵ) = dy K(x, y, ϵ)ψ(y, 0), K(x, y, 0) =               exp                − V (y)   .
                                                  2πiℏϵ            ℏ       2ϵ2

The expansion is a little delicate because of the strange dependence on ϵ. The key is to note that
by the stationary phase approximation, most of the contribution comes from ξ = x − y = O(ϵ1/2 ).
We then expand everything to first order in ϵ, treating ξ = O(ϵ1/2 ), for

                                imξ 2
              m  3/2 Z
                                            iϵ
  ψ(x, ϵ) =            dξ exp           1 − V (x + ξ) + . . .
             2πiℏϵ               2ϵℏ        ℏ

                                                      i            1 i j
                                         × ψ(x, 0) + ξ ∂i ψ(x, 0) + ξ ξ ∂i ∂j ψ(x, 0) + . . . .
                                                                   2

where we cannot expand the remaining exponential since its argument is O(1). Now we consider
the terms in the products of the two expansions. The O(1) term gives ψ(x, 0), as expected. The
O(ϵ1/2 ) term gives zero because it is odd in ξ. The O(ϵ) term is
                                 iϵ             1
                                − V (x)ψ(x, 0) + ξ i ξ j ∂i ∂j ψ(x, 0).
                                 ℏ              2
The first of these terms is the potential term. The second term integrates to give the kinetic term.
Finally, the O(ϵ3/2 ) term vanishes by symmetry, proving the result.

