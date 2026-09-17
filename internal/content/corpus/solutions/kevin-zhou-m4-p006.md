---
id: kevin-zhou-m4-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p006
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[1] Problem 6. A rope is nestled inside a curved frictionless tube. The rope has a total length ℓ and
uniform mass per length λ. The shape of the tube can be arbitrarily complicated, but the left end
of the rope is higher than the right end by a height h. If the rope is released from rest, find its
acceleration.
Solution. Of course, you can get the same result by breaking the rope into infinitely many infinites-
imal elements, applying Newton’s second law to each one, and solving for how the tension varies
throughout the rope. But this is unnecessarily complicated, because the system can be described
by a single generalized coordinate.
Let q be the length the rope has moved along the tube. The kinetic energy is λℓq̇2/2. The
“generalized force” is −∂V/∂q = λgh. So the acceleration is gh/ℓ.
5
Kevin Zhou Physics Olympiad Handouts
Idea 3
Generalized coordinates are really useful for problems that involve complicated objects but
only have one relevant degree of freedom, which is especially true for oscillations problems.
For instance, if the kinetic and potential energy have the form
K =
1
2
meff q̇2
, V =
1
2
keff q2
then the oscillation’s angular frequency is always
ω =
p
keff/meff.
Note that q need not have units of position, meff need not have units of mass, and so on.
When V (q) is a more general function, we can expand it about a minimum qmin, so that
keff = V ′′(qmin). This lets us avoid dealing with possibly complicated constraint forces.
