---
id: kevin-zhou-notes-phy-ex020
source: kevin-zhou-notes
native_id: "phy Example 020"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex020
topic: [electromagnetism]
subtopic: [electrostatics, point charge]
math_tools: [vector calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1449-1460"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. The field of a point charge is spherically symmetric with ∇2 ϕ = 0 except at the origin.
Guessing the form ϕ ∝ 1/r, we have

                                        1     −∇r       r
                                   ∇       = 2 = − 3.
                                        r       r       r
Next, we can take the divergence by the product rule,

                         2 1          ∇ · r 3r̂ · r       3  3
                       ∇       =−          − 4        =− 3 − 3 =0
                            r          r3      r          r r
as desired. To get the overall constant, we use Gauss’s law, for ϕ = q/(4πϵ0 r).
