---
id: kevin-zhou-notes-phy-ex077
source: kevin-zhou-notes
native_id: "phy Example 077"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex077
topic: [quantum-physics]
subtopic: [angular-momentum, group-representations]
math_tools: [linear-algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9011-9027"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. In the case of SO(3), the fundamental representation happens to coincide with the
adjoint representation. To see this, note that

                                      R(a × u) = (Ra) × (Ru)

which simply states that the cross product transforms as a vector under rotations (it’s actually a
pseudovector). Then we find

                        R(a · J)u = ((Ra) · J)Ru,    R(a · J)R−1 = (Ra) · J.

This provides a representation of the Lie group, representing R as the operator that takes the vector
a to Ra. This is just the fundamental representation, but viewed in a more abstract way – the
vector space now contains infinitesimal rotations rather than spatial vectors.
   Another statement of the above is that ‘angular velocity is a vector’. This is not generally
true; in SO(2), it is a scalar and the adjoint representation is trivial; in SO(4), the Lie group is
six-dimensional, and the angular velocity is more properly a two-form.

