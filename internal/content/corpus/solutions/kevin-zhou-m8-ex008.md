---
id: kevin-zhou-m8-ex008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m8-ex008
solution_type: author
source_document: solution-document-kevin-zhou-m8sol
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M8Sol.pdf."
---

Example 8
Given a triangle ABC, the Fermat point is the point X that minimizes AX + BX + CX.
Design a machine that finds the Fermat point.
Solution
We take a horizontal plane and drill holes at points A, B, and C. A mass M on a rope is
fed through each hole, and the three ends of the rope are tied together at point X. The
gravitational potential energy is proportional to AX + BX + CX, so in equilibrium X lies
on the Fermat point. Moreover, since the tensions in each rope are all equal to Mg, force
balance requires ∠AXB = ∠BXC = ∠CXA = 120◦.
[1] Problem 29. Using similar reasoning, design a machine that finds the point X that minimizes
(AX)2 + (BX)2 + (CX)2. What geometrical property can you conclude about this point?
Solution. Attach a mass to springs at each of A, B, and C each with spring constant k and zero
rest length. In equilibrium, the mass has the minimum possible potential energy, so it is at point
X. Balancing forces gives k(X − A) + k(X − B) + k(X − C) = 0, so X is the centroid of ABC.
Example 9
Show that the incenter of a triangle (i.e. the meeting point of the angle bisectors) exists.
Solution
Apply six forces at the vertices of a triangle as shown.
These forces clearly balance, and also produce no net torque on the triangle. Now combine
the forces applied at each vertex, yielding three forces that point along the angle bisectors.
By the principles of M2, the torques of these forces can only balance if their lines of action
meet at a point. Therefore the angle bisectors are concurrent, so the incenter exists.
