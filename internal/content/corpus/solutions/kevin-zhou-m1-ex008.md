---
id: kevin-zhou-m1-ex008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-ex008
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

Example 8
A bug wishes to jump over a cylindrical log of radius R lying on the ground, so that it just
grazes the top of the log horizontally as it passes by. What is the minimum launch speed v
required to do this?
Solution
Let P be the point at the top of the log. For the bug to be moving horizontally at P, energy
conservation applied to the vertical motion gives an initial vy obeying
1
2
mv2
y = 2mgR, vy = 2
p
gR.
Thus, we need to find the minimum vx for the motion to be possible. If vx is too low, the
hypothetical trajectory of the bug will instead pass through the log. At the lowest possible
vx, the bug’s trajectory is not just tangent to the log at point P, but also has the same radius
of curvature (i.e. the trajectory and the log’s shape have the same first and second derivatives).
For uniform motion in a circle of radius r, the acceleration is a = v2/r. Conversely, when an
object follows a trajectory of instantaneous radius of curvature r, its acceleration component
normal to the path must be a = v2/r. So applying this to the bug at P gives
g =
v2
x
R
, vx =
p
gR.
21
Kevin Zhou Physics Olympiad Handouts
Thus, the minimum initial speed is
v =
q
v2
x + v2
y =
p
5gR.
This radius of curvature trick doesn’t come up often, but it’s cool when it does.
[2] Problem 30. NBPhO 2020, problem 3. A nice warmup for the problems below.
