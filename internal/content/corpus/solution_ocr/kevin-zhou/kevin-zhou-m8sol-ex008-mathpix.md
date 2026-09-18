---
id: solution-ocr-kevin-zhou-m8sol-ex008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m8-ex008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 8
Given a triangle $A B C$, the Fermat point is the point $X$ that minimizes $A X + B X + C X$. Design a machine that finds the Fermat point.

Solution
We take a horizontal plane and drill holes at points $A , B$, and $C$. A mass $M$ on a rope is fed through each hole, and the three ends of the rope are tied together at point $X$. The gravitational potential energy is proportional to $A X + B X + C X$, so in equilibrium $X$ lies on the Fermat point. Moreover, since the tensions in each rope are all equal to $M g$, force balance requires $\angle A X B = \angle B X C = \angle C X A = 120 ^ { \circ }$.
[1] Problem 29. Using similar reasoning, design a machine that finds the point $X$ that minimizes $( A X ) ^ { 2 } + ( B X ) ^ { 2 } + ( C X ) ^ { 2 }$. What geometrical property can you conclude about this point?

Solution. Attach a mass to springs at each of $A , B$, and $C$ each with spring constant $k$ and zero rest length. In equilibrium, the mass has the minimum possible potential energy, so it is at point $X$. Balancing forces gives $k ( \mathbf { X } - \mathbf { A } ) + k ( \mathbf { X } - \mathbf { B } ) + k ( \mathbf { X } - \mathbf { C } ) = 0$, so $X$ is the centroid of $A B C$.

Example 9
Show that the incenter of a triangle (i.e. the meeting point of the angle bisectors) exists.

Solution
Apply six forces at the vertices of a triangle as shown.
![](../../../figures/solution-ocr/94b9452adf4f078b5c54470e.jpg)
These forces clearly balance, and also produce no net torque on the triangle. Now combine the forces applied at each vertex, yielding three forces that point along the angle bisectors. By the principles of M2, the torques of these forces can only balance if their lines of action meet at a point. Therefore the angle bisectors are concurrent, so the incenter exists.
