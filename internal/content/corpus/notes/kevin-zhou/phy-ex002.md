---
id: kevin-zhou-notes-phy-ex002
source: kevin-zhou-notes
native_id: "phy Example 002"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex002
topic: [classical mechanics, electromagnetism]
subtopic: [Lagrangian mechanics, canonical momentum]
math_tools: [calculus, vector calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "284-301"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. A particle in an electromagnetic field. The Lagrangian is
                                               1
                                            L = mṙ2 − e(ϕ − ṙ · A).
                                               2
With a little index manipulation, this reproduces the Lorentz force law, with
                                                                         ∂A
                                       B = ∇ × A,         E = −∇ϕ −         .
                                                                         ∂t
The momentum conjugate to r is
                                           ∂L
                                                p=
                                                 = mṙ + eA
                                            ∂ ṙ
and is called the canonical momentum, in contrast to the kinetic momentum mṙ. The canonical
momentum is what becomes the gradient operator in quantum mechanics, but it is not gauge
invariant; instead the kinetic momentum is. The switch from partial to covariant derivatives in
gauge theory is analogous to the switch from canonical to kinetic momentum.

