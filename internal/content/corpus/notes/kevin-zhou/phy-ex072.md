---
id: kevin-zhou-notes-phy-ex072
source: kevin-zhou-notes
native_id: "phy Example 072"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex072
topic: [quantum-physics]
subtopic: [path-integrals, free-particle]
math_tools: [calculus, gaussian-integrals]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8788-8810"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The free particle. In this case the classical paths are straight lines and

                                          mẋ2 t   m(x − x0 )2
                                     S=          =             .
                                           2           2t
The determinant factor is
                                                  1/2
                                           ∂2S
                                                            r
                                                                m
                                                        =         .
                                          ∂x∂x0                 t
The second-order change in action would be the integral of m(δ ẋ)2 /2 which is positive definite, so
µ = 0. Putting everything together gives

                                                        i m(x − x0 )2
                                          r                          
                                             m
                           K(x, x0 , t) =         exp
                                            2πiℏt       ℏ     2t

as we found earlier.

