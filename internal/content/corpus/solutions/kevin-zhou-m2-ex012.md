---
id: kevin-zhou-m2-ex012
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-ex012
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

Example 12
Consider the simplest possible nontrivial rigid body: a triangle with masses at the vertices,
and sides made of very thin, very rigid, massless springs. The triangle is pivoted at one
vertex, and experiences external forces F1 and F2 at the other two vertices.
30
Kevin Zhou Physics Olympiad Handouts
Find the criterion for this system to be in equilibrium, using force balance alone.
Solution
Consider force balance on the first marked vertex. The tension in the side of length r1 takes
whatever value is necessary to balance the horizontal force F∥,1 on the vertex, while the
tension T in the other side has to balance the vertical force F⊥,1. Thus, F⊥,1 = T sinθ1.
Similarly, by considering the second marked vertex, we have F⊥,2 = T sinθ2.
Eliminating T and using the law of sines gives
r1F⊥,1 = r2F⊥,2.
Of course, this is precisely the statement of torque balance about the pivot. And if you
continue along this line of reasoning, letting the forces be arbitrary, you can also derive the
rotational form of Newton’s second law, τ = Iα, for this system.
Remark
So why are torques necessary? Torque isn’t a necessary tool for single point particles or
very simple rigid bodies. But in a general rigid body, the internal forces which maintain
their rigidity are very complicated, and torques let us avoid having to think about these forces.
For example, consider a rigid bar supported at its ends. The middle of the bar doesn’t
collapse, despite the force of gravity on it, because the bar contains internal, upward shear
forces, which transmit the normal forces applied at its end throughout the rest of the bar.
But to analyze such systems without using torque, one would have to account for all of these
microscopic forces, acting on all of the rod’s infinitely many pieces. With torque, we can
compute useful information (such as the normal forces at each support) without much effort.
However, given how complicated internal forces can be, you might be wondering why torque balance
even works in general. The simplest explanation is the principle of virtual work.
31
Kevin Zhou Physics Olympiad Handouts
Idea 12: Principle of Virtual Work
To determine if a system is in static equilibrium, we consider each way the system could
move. For each such way, we consider how much work would be done if the system moved a
little bit in that way. (This motion is just in our heads, so we call it a “virtual displacement”
which corresponds to a “virtual work”.) The system is in static equilibrium if the virtual
work vanishes for every possible virtual displacement.
If we apply the principle of virtual work to translational motion, then we get force balance,
since dW = F dx. If we apply it to rotation about a pivot, then we get torque balance, since
dW = τ dθ. However, as we’ll see below and in M4, the principle of virtual work can also be
applied to more exotic displacements. It is particularly useful when applied to systems with
a lot of parts but also a lot of constraints, so that they can only move in a few ways. The
converse of the principle of virtual work can also be useful: if you know a system is in static
equilibrium, you can use it to deduce an unknown force.
