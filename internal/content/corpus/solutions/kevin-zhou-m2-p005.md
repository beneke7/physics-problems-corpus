---
id: kevin-zhou-m2-p005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-p005
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

[1] Problem 5. The “line” of a force is the line passing through its point of application parallel to
its direction; then the torque of the force about any point on that line vanishes. Suppose a body is
static and has three forces acting on it. Show that in two dimensions, the lines of these forces must
either be parallel or concurrent. This will be useful for several problems later.
3
Kevin Zhou Physics Olympiad Handouts
Solution. Let F1,F2,F3 be the forces. Suppose two are parallel, then the third must be parallel to
the first two to balance forces in the direction perpendicular to the direction of the first two. Now,
suppose they are not parallel, and let the origin be at the intersection of the lines of forces of F1
and F2. Then, the torque due to these two is zero, so the torque due to F3 must also be zero, so
the line of action of F3 must also pass through the origin.
Idea 5
The center of mass rcm of a set of masses mi at locations ri with total mass M satisfies
Mrcm =
X
i
miri.
If a system experiences no external forces, its center of mass moves at constant velocity.
Idea 6
A uniform gravitational field exerts no torque about the center of mass. Thus, for the
purposes of applying torque balance on an entire object, the gravitational force Mg can
be taken to act entirely at its center of mass. (This is a formal substitution; of course, the
actual gravitational force remains distributed throughout the object.)
Torque balance works in noninertial frames, as long as one accounts for the torques due to
fictitious forces. For an accelerating frame, the −Ma fictitious force never exerts a torque
about the center of mass, so it can always be taken to act at the center of mass.
In a uniformly rotating frame, the total centrifugal force is Mω2r⊥
cm, where r⊥
cm is the part of
rcm perpendicular to the axis of rotation. There can be a centrifugal torque about the center
of mass, but in simple cases (such as when the object is flat, lying in a plane perpendicular
to ω) this vanishes, in which case the centifugal force can be taken to act at the center of
mass. We’ll cover the Coriolis force and torque in M6.
