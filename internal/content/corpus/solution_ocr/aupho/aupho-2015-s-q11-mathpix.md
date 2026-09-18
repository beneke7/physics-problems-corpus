---
id: solution-ocr-aupho-2015-s-q11
source: aupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/aupho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [aupho-2015-q11]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 11
Suggested Time: 20 min
Consider a hollow, frictionless inverted cone within which an object of mass $m$ is free to slide. The cone has an angle of $\theta$ between its central axis and sloped side, and a radius $r$ at height $h$.

a) The object of mass $m$ is released from rest at height $h$ to slide inside the cone.
    (i) What will be its speed when it reaches the bottom?
Solution: Energy is conserved:
change in gravitational potential energy (GPE) = change in kinetic energy (KE).
![](../../../figures/solution-ocr/cd85ae1500efa351fe3ca031.jpg)
$$
\begin{gathered}
\mathrm { GPE } = m g h , \mathrm { KE } = \frac { 1 } { 2 } m v ^ { 2 } \\
m g h = \frac { 1 } { 2 } m v ^ { 2 } \\
v = \sqrt { 2 g h }
\end{gathered}
$$
(ii) What assumption(s) did you make in the previous part?

Solution: It is assumed that the cone is near the surface of the Earth, and that the height $h$ is very much smaller than the radius of the Earth so that the acceleration due to gravity $g$ is approximately constant. It is also assumed that the object can slide all the way to the bottom without getting stuck.

b) The object of mass $m$ is collected and released again, but in the horizontal direction this time, with speed $v$. It slides in a circular path around the inside of the cone. Hence, its acceleration is $a = v ^ { 2 } / r$ towards the central axis of the cone.
    (i) Draw a diagram showing the forces acting on the mass.
Solution: Diagram should be a simple free body diagram showing two forces: $F _ { g }$, the gravitational force of the Earth on the object (pointing vertically downwards from the object's centre of mass), and $F _ { N }$, the normal force of the cone surface on the object (pointing perpendicularly upwards from the surface of the cone).
![](../../../figures/solution-ocr/411af4339b11e91f0025b8dd.jpg)
    (ii) Find the magnitude of the normal force on the mass.
Solution: As the object slides down the surface it cannot accelerate through the surface of the cone. So the sum of forces perpendicular to the surface of the cone is zero:
$$
F _ { N } - F _ { g \perp } = 0
$$
Page 7 of 18
2015 Australian Science Olympiads Exam - Physics Solutions


where $F _ { g \perp }$ is the component of the gravitational force perpendicular to the cone's surface.
![](../../../figures/solution-ocr/3beff5244a1df71e772e04c9.jpg)
We resolve the gravitational force into parallel $\left( F _ { g \| } \right)$ and perpendicular $\left( F _ { g \perp } \right)$ components relative to the cone's surface. The angle between $F _ { g \| }$ and $F _ { g }$ is $\theta$, so $F _ { g \perp } = F _ { g } \sin \theta$. Hence, $F _ { N } = F _ { g } \sin \theta$.
![](../../../figures/solution-ocr/8f78f9d091357a110f2a83b1.jpg)
    (iii) Find an expression for the height of the mass.
Solution: We have that $a = v ^ { 2 } / r$ towards the central
![](../../../figures/solution-ocr/4f1d7820b09f4855f785fd96.jpg)
axis of the cone. This centripetal acceleration is the net acceleration given by $a = \Sigma F / m$, where $\Sigma F$ is the sum of the forces, as shown in the diagram to the left. From this triangle of forces we get
$$
\begin{aligned}
\tan \theta & = \frac { F _ { g } } { \Sigma F } \\
\Sigma F & = \frac { m g } { \tan \theta }
\end{aligned}
$$
We can now solve for $r$ :
$\frac { v ^ { 2 } } { r } = \frac { g } { \tan \theta }$
$\therefore r = \frac { v ^ { 2 } \tan \theta } { g }$
Finally,
$$
\tan \theta = \frac { r } { h }
$$
so
$$
h = \frac { r } { \tan \theta } = \frac { v ^ { 2 } \tan \theta } { g \tan \theta } = \frac { v ^ { 2 } } { g }
$$
c) The object of mass $m$ continues along its circular path until it is bumped slightly so that its speed is unchanged, but it is now directed slightly down the cone (but still mostly around the cone). Describe and explain the motion of the mass.
Solution: As mass travels around and slightly down the cone, its downwards velocity will increase as it is accelerated by gravity. As it moves down the cone, the radius of the cone decreases. The centripetal force is courtesy of the horizontal component of the normal force, the magnitude of which stays constant as it does not depend on $h$ or $r$.
Hence, the centripetal acceleration $a$ is constant. However, for the object to remain in uniform circular motion the acceleration must equal $v _ { \perp } ^ { 2 } / r$. As $r$ decreases the component of the velocity around the cone is too large for the object to follow circular path at the lower radius and the object will begin to move outwards and rise up the cone. There will be a pattern of going around, up and down, which will repeat since the cone is frictionless. Note: the path depends on the shape of the object/whether it has any spin on it etc.
