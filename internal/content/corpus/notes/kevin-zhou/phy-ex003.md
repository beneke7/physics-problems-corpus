---
id: kevin-zhou-notes-phy-ex003
source: kevin-zhou-notes
native_id: "phy Example 003"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex003
topic: [classical mechanics, non-inertial frames]
subtopic: [rotating frames, Coriolis force]
math_tools: [calculus, vector calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "302-323"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. A particle in a rotating frame. To warm up, we work in two dimensions, where
                                                   1
                                                L = m(ṙ2 + r2 θ̇2 ).
                                                   2
In Lagrangian mechanics, transforming into the rotating frame is just a matter of changing general-
ized coordinates. We set ϕ = θ − ωt and reexpress the Lagrangian in terms of r and ϕ, giving
                                   1                             1
                                L = m(ṙ2 + r2 ϕ̇2 ) + mr2 ω ϕ̇ + mr2 ω 2 .
                                   2                             2
The first term is the same as before, the second term represents the Coriolis force, and the final
term represents the centrifugal force. We can rewrite the second term as mv · A where A = ωr θ̂.
This is simply the term you would add for a uniform magnetic field 2ω for a particle with q = m,
which explains why the Coriolis and magnetic forces are so similar in form. It’s not too hard to
generalize to three dimensions. In this case we have
                       1               1                     1
                    L = m(v + ω × r)2 = mv 2 + mv · (ω × r) + m|ω × r|2 .
                       2               2                     2
This works for arbitrary ω(t), in which case the second term gives both the Coriolis and Euler forces,
and the final term gives the centrifugal force.
8   1. Classical Mechanics


