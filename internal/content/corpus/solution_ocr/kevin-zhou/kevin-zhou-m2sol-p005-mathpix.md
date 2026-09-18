---
id: solution-ocr-kevin-zhou-m2sol-p005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-p005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 5. The "line" of a force is the line passing through its point of application parallel to its direction; then the torque of the force about any point on that line vanishes. Suppose a body is static and has three forces acting on it. Show that in two dimensions, the lines of these forces must either be parallel or concurrent. This will be useful for several problems later.

Solution. Let $\mathbf { F } _ { 1 } , \mathbf { F } _ { 2 } , \mathbf { F } _ { 3 }$ be the forces. Suppose two are parallel, then the third must be parallel to the first two to balance forces in the direction perpendicular to the direction of the first two. Now, suppose they are not parallel, and let the origin be at the intersection of the lines of forces of $\mathbf { F } _ { 1 }$ and $\mathbf { F } _ { 2 }$. Then, the torque due to these two is zero, so the torque due to $\mathbf { F } _ { 3 }$ must also be zero, so the line of action of $\mathbf { F } _ { 3 }$ must also pass through the origin.

Idea 5
The center of mass $\mathbf { r } _ { \mathrm { cm } }$ of a set of masses $m _ { i }$ at locations $\mathbf { r } _ { i }$ with total mass $M$ satisfies

$$
M \mathbf { r } _ { \mathrm { cm } } = \sum _ { i } m _ { i } \mathbf { r } _ { i } .
$$

If a system experiences no external forces, its center of mass moves at constant velocity.

Idea 6
A uniform gravitational field exerts no torque about the center of mass. Thus, for the purposes of applying torque balance on an entire object, the gravitational force $M \mathbf { g }$ can be taken to act entirely at its center of mass. (This is a formal substitution; of course, the actual gravitational force remains distributed throughout the object.)

Torque balance works in noninertial frames, as long as one accounts for the torques due to fictitious forces. For an accelerating frame, the $- M \mathbf { a }$ fictitious force never exerts a torque about the center of mass, so it can always be taken to act at the center of mass.

In a uniformly rotating frame, the total centrifugal force is $M \omega ^ { 2 } \mathbf { r } _ { \mathrm { cm } } ^ { \perp }$, where $\mathbf { r } _ { \mathrm { cm } } ^ { \perp }$ is the part of $\mathbf { r } _ { \mathrm { cm } }$ perpendicular to the axis of rotation. There can be a centrifugal torque about the center of mass, but in simple cases (such as when the object is flat, lying in a plane perpendicular to $\boldsymbol { \omega }$ ) this vanishes, in which case the centifugal force can be taken to act at the center of mass. We'll cover the Coriolis force and torque in M6.
