---
id: solution-ocr-kevin-zhou-m2sol-ex013
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-ex013]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 13: Roberval Balance

Consider the following scale made of rigid bars. The joints ensure that the quadrilateral in the middle always remains a parallelogram, with its left and right sides vertical.
![](../../../figures/solution-ocr/63a7a4eb848fed8a759ba112.jpg)
If identical weights are placed on each horizontal arm as shown, can the system remain static?

## Solution

There's only one way for the system to move: the rectangle can deform into a parallelogram so that the left horizontal arm moves up, and the right horizontal arm moves down by the same amount. Then the total virtual work done on the scale by the weights is zero, so the system can be in equilibrium no matter where on the arms the weights are placed.

[1] Problem 29 (Wang). Two massless rigid rods of length $\ell$ are connected by a joint $A$, which allows them to freely rotate with respect to each other. The left member is pinned to point $O$, while the right member is placed on a roller $B$ which can roll frictionlessly on the ground.

![](../../../figures/solution-ocr/39eb9d02d0cd2c1abffeec12.jpg)
A massless spring of zero relaxed length and spring constant $k$ is stretched between $O$ and $B$, and a rightward force $P$ is exerted at $A$. Find the angle $\theta$ at equilibrium.

Solution. This problem can be solved directly by introducing variables for the tensions in each rod, then writing down force and torque balance equations. It can be quite quick if you're clever about choosing your pivot points and systems. But the principle of virtual work is even faster. We imagine the roller $B$ moves to the right by $d x$, which implies that $A$ moves to the right by $d x / 2$. Then we have a virtual work of

$$
d W = P \frac { d x } { 2 } - ( 2 k \ell \cos \theta ) d x = 0
$$

in equilibrium. This immediately gives

$$
\theta = \cos ^ { - 1 } \left( \frac { P } { 4 k \ell } \right) .
$$

The reason this is so easy is that we don't have to care about the tension forces within the rods, or the forces from the pivot or ground, because none of these forces perform virtual work on the system as a whole.

## 7 Pressure and Surface Tension
