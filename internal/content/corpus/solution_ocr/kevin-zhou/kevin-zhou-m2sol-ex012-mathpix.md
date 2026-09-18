---
id: solution-ocr-kevin-zhou-m2sol-ex012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-ex012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 12
Consider the simplest possible nontrivial rigid body: a triangle with masses at the vertices, and sides made of very thin, very rigid, massless springs. The triangle is pivoted at one vertex, and experiences external forces $\mathbf { F } _ { 1 }$ and $\mathbf { F } _ { 2 }$ at the other two vertices.


![](../../../figures/solution-ocr/37a2764589c95eab612feae4.jpg)
Find the criterion for this system to be in equilibrium, using force balance alone.

Solution
Consider force balance on the first marked vertex. The tension in the side of length $r _ { 1 }$ takes whatever value is necessary to balance the horizontal force $F _ { \| , 1 }$ on the vertex, while the tension $T$ in the other side has to balance the vertical force $F _ { \perp , 1 }$. Thus, $F _ { \perp , 1 } = T \sin \theta _ { 1 }$. Similarly, by considering the second marked vertex, we have $F _ { \perp , 2 } = T \sin \theta _ { 2 }$.

Eliminating $T$ and using the law of sines gives

$$
r _ { 1 } F _ { \perp , 1 } = r _ { 2 } F _ { \perp , 2 } .
$$

Of course, this is precisely the statement of torque balance about the pivot. And if you continue along this line of reasoning, letting the forces be arbitrary, you can also derive the rotational form of Newton's second law, $\tau = I \alpha$, for this system.

Remark
So why are torques necessary? Torque isn't a necessary tool for single point particles or very simple rigid bodies. But in a general rigid body, the internal forces which maintain their rigidity are very complicated, and torques let us avoid having to think about these forces.

For example, consider a rigid bar supported at its ends. The middle of the bar doesn't collapse, despite the force of gravity on it, because the bar contains internal, upward shear forces, which transmit the normal forces applied at its end throughout the rest of the bar. But to analyze such systems without using torque, one would have to account for all of these microscopic forces, acting on all of the rod's infinitely many pieces. With torque, we can compute useful information (such as the normal forces at each support) without much effort.

However, given how complicated internal forces can be, you might be wondering why torque balance even works in general. The simplest explanation is the principle of virtual work.


## Idea 12: Principle of Virtual Work

To determine if a system is in static equilibrium, we consider each way the system could move. For each such way, we consider how much work would be done if the system moved a little bit in that way. (This motion is just in our heads, so we call it a "virtual displacement" which corresponds to a "virtual work".) The system is in static equilibrium if the virtual work vanishes for every possible virtual displacement.

If we apply the principle of virtual work to translational motion, then we get force balance, since $d W = F d x$. If we apply it to rotation about a pivot, then we get torque balance, since $d W = \tau d \theta$. However, as we'll see below and in M4, the principle of virtual work can also be applied to more exotic displacements. It is particularly useful when applied to systems with a lot of parts but also a lot of constraints, so that they can only move in a few ways. The converse of the principle of virtual work can also be useful: if you know a system is in static equilibrium, you can use it to deduce an unknown force.
