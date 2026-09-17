---
id: "kevin-zhou-m4-p006"
source: "kevin-zhou"
native_id: "KZ-M4-P006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m4-p006"
topic: [mechanics]
subtopic: [generalized-coordinates, energy-methods, oscillations, constraints]
math_tools: [calculus, differential-equations]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M4.txt"
source_url: "sources/kevin_zhou/site/handouts/M4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

A rope is nestled inside a curved frictionless tube. The rope has a total length ℓ and
    uniform mass per length λ. The shape of the tube can be arbitrarily complicated, but the left end
    of the rope is higher than the right end by a height h. If the rope is released from rest, find its
    acceleration.

       Idea 3
       Generalized coordinates are really useful for problems that involve complicated objects but
       only have one relevant degree of freedom, which is especially true for oscillations problems.
       For instance, if the kinetic and potential energy have the form
                                          1                  1
                                       K = meff q̇ 2 ,    V = keff q 2
                                          2                  2
       then the oscillation’s angular frequency is always
                                                   p
                                              ω = keff /meff .

       Note that q need not have units of position, meff need not have units of mass, and so on.
       When V (q) is a more general function, we can expand it about a minimum qmin , so that
       keff = V ′′ (qmin ). This lets us avoid dealing with possibly complicated constraint forces.
