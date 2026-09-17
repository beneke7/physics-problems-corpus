---
id: kevin-zhou-m2-ex013
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-ex013
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

Example 13: Roberval Balance
Consider the following scale made of rigid bars. The joints ensure that the quadrilateral in
the middle always remains a parallelogram, with its left and right sides vertical.
If identical weights are placed on each horizontal arm as shown, can the system remain static?
Solution
There’s only one way for the system to move: the rectangle can deform into a parallelogram
so that the left horizontal arm moves up, and the right horizontal arm moves down by the
same amount. Then the total virtual work done on the scale by the weights is zero, so the
system can be in equilibrium no matter where on the arms the weights are placed.
[1] Problem 29 (Wang). Two massless rigid rods of length ℓ are connected by a joint A, which allows
them to freely rotate with respect to each other. The left member is pinned to point O, while the
right member is placed on a roller B which can roll frictionlessly on the ground.
32
Kevin Zhou Physics Olympiad Handouts
A massless spring of zero relaxed length and spring constant k is stretched between O and B, and
a rightward force P is exerted at A. Find the angle θ at equilibrium.
Solution. This problem can be solved directly by introducing variables for the tensions in each
rod, then writing down force and torque balance equations. It can be quite quick if you’re clever
about choosing your pivot points and systems. But the principle of virtual work is even faster. We
imagine the roller B moves to the right by dx, which implies that A moves to the right by dx/2.
Then we have a virtual work of
dW = P
dx
2
− (2kℓ cosθ)dx = 0
in equilibrium. This immediately gives
θ = cos−1

P
4kℓ

.
The reason this is so easy is that we don’t have to care about the tension forces within the rods,
or the forces from the pivot or ground, because none of these forces perform virtual work on the
system as a whole.
7 Pressure and Surface Tension
