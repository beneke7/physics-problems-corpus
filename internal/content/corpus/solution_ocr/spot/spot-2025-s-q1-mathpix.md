---
id: solution-ocr-spot-2025-s-q1
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2025-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. A wide river of uniform depth flows with a uniform constant speed $u$ parallel to its banks. A boat is moving in the river with constant speed $v$, measured in the moving frame of the river.
As the boat moves, a metal ball is dropped into the river with zero vertical velocity and the same horizontal velocity as the boat. The drag force law for the ball's motion in water is unknown. When the ball reaches the bottom of the river, the horizontal distance it has travelled since its point of release is measured in the stationary frame of the river bank.
We will now consider three different cases, each with the boat moving in a different direction.
(Case 1) When the boat is moving downstream (its net motion is parallel to the river velocity), the distance measured is $a$.
(Case 2) When the boat is moving upstream (its net motion is antiparallel to the river velocity), the distance measured is $b$.
(Case 3) When the boat is moving such that its net motion in the stationary frame is perpendicular to the velocity of the river, the distance measured is $c$.
    (a) Is it necessary to know the drag force law to determine the trajectory of the ball in the frame of the river? Explain your answer. (Hint: Drawing a diagram may be helpful.)
Solution: No. All three trajectories are identical in the frame of the river because the boat has the same velocity in that frame, so the ball has the same initial velocity in that frame.
    (b) With appropriate diagrams, find the ratio $\frac { v } { u }$. Leave your answer in terms of $a , b$ and $c$.
Solution: As discussed before, we know that the trajectory of the ball in the rest frame of the water is identical. Thus, we also know that the horizontal displacement of the ball in all 3 cases is the same with respect to the water. The problem can be solved by considering the displacement of the starting position and that of the ball separately, in the frame of the moving water. The direction of the horizontal displacement of the ball is dependent on the direction of the velocity of the boat in the frame of the water.
![](../../../figures/solution-ocr/3bace1c990c6fcd168fc21c5.jpg)

![](../../../figures/solution-ocr/fcd6ed9b3ace80e8d2fe1fdd.jpg)
The red arrow shows the unknown displacement $l$ of the ball in the frame of the water while the blue arrow shows the displacement of the starting position defined in the lab frame, $u t$. Note that in case 3, $u t$ and $c$ are not perpendicular because

the ball undergoes drag after it enters the river. We are able to form the following relationships:

$$
\begin{aligned}
a & = u t + l \\
b & = u t - l \\
c ^ { 2 } & = ( u t ) ^ { 2 } + l ^ { 2 } - 2 u t l \cos \theta
\end{aligned}
$$

We can find $\theta$ with the condition that the net motion of the boat is perpendicular to the river motion. That gives us $\cos \theta = \frac { u } { v }$.
![](../../../figures/solution-ocr/d53c418fa6c1e875a0246794.jpg)
Solving, we get:

$$
\frac { v } { u } = \frac { a ^ { 2 } - b ^ { 2 } } { a ^ { 2 } + b ^ { 2 } - 2 c ^ { 2 } }
$$
