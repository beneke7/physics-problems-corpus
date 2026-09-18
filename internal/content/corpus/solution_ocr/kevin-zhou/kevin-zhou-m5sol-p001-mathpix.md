---
id: solution-ocr-kevin-zhou-m5sol-p001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m5-p001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 1. Some brief puzzles about rotation.

(a) Consider two identical coins laid flat on a table. One is fixed in place, and the second is rolled without slipping around the first. Once the second coin's center has returned to its original position, how many times has it rotated? (Be sure to check your answer experimentally!)
(b) A bicycle wheel is rolling without slipping. When it is photographed, its spokes look blurred, except along a curve of special points, which don't look blurred at all. What is this curve?
(c) Consider a spaceship floating in space, without any thrusters that can expel material. Conservation of momentum implies that it cannot move its center of mass. But is it possible to turn the spaceship around? In other words, is it possible for it to begin stationary in one orientation, and end up stationary in another orientation? If so, why doesn't this violate conservation of angular momentum?
(d) Hold out your arm with your elbow bent at 90° and your palm straight out, facing down. Find a way to end up in the same position but with your palm facing up, without ever bending or rotating your wrist.

Solution. (a) Since the two coins have the same circumference, you might think the answer is 1. However, the answer is 2 , as is easily checked experimentally. Rolling around a convex curved surface gives an extra turn, as you can check with limiting cases, such as rolling around a big square.

Another way to think about this is that the center of the coin moves in a circle of radius $2 r$, where $r$ is the radius of the coin. Since the coin rolls without slipping, $v _ { \mathrm { CM } } = \omega r$ at all times. Integrating this result, $d _ { \mathrm { CM } } = \theta r$ where $d _ { \mathrm { CM } }$ is the distance through which the center of mass moves, and $\theta$ is the total turn angle. Then $2 \pi ( 2 r ) = \theta r$ which gives $\theta = 4 \pi$.

(b) Note that the motion can be described as pure rotation about the contact point $C$. For the special points $P$, we want the velocity of that point to be parallel to the spokes, so the line $C P$ to be perpendicular to the spoke $O P$. It is not hard to see that this locus is the circle with diameter $O C$.
(c) Just rotate a wheel inside the spaceship. If the wheel spins clockwise, then the rest of the spaceship will start spinning counterclockwise, by conservation of angular momentum. Then the wheel can be stopped when the spaceship has the desired final orientation. (This is actually

how spaceships turn around: they carry large reaction wheels which are spun up or down as needed. The ability to change orientation is essential for space telescopes, and in practice the wheels are always rotating fairly quickly, because their angular momentum can gyroscopically stabilize the rest of the ship.)
The fundamental reason this works is that rotations are periodic; unlike translations, you can give something a net rotation but also end up back where you started. For a closely related trick, see how a falling cat can turn itself around.
(d) Starting from the original position, bring your forearm horizontally to your chest, then rotate it vertically, then return it to the original position. At this point, your palm should be facing horizontally. Repeat the sequence to get it facing upward.
The fundamental reason this works is that your wrist and palm are constrained to move along a sphere, and the surface of a sphere is curved. Curvature intrinsically means that this kind of "parallel transport" doesn't necessarily return you to your original configuration. It's an important idea in differential geometry and general relativity. (The detailed math tells us that the angle through which your palm rotates is proportional to the solid angle traced out by the loop. So in theory, you could also achieve the same thing by moving your hand in one giant loop, though this takes some flexibility, or ten times in a small loop. The latter might not work in practice, though, because your brain might unconsciously rotate your wrist a bit to compensate for the effect.)
[2] Problem 2 (Kalda). A rigid lump is squeezed between two places, one of which is moving at velocity $v _ { 1 }$ and the other at $v _ { 2 }$. At some moment, the velocities are horizontal and the two contact points are vertically aligned.
![](../../../figures/solution-ocr/057b02a7f4919cf9b0309306.jpg)
Describe geometrically all of the points in the body with speed either $v _ { 1 }$ or $v _ { 2 }$.
Solution. The motion of the rigid body can be expressed as rotation about some point $O$. It must be on the vertical line connecting the two contact points, with distances to those points satisfying $\omega = v _ { 1 } / r _ { 1 } = v _ { 2 } / r _ { 2 }$, where $r _ { 1 } + r _ { 2 }$ is the distance between the contact points. Then, all points with speed $v _ { 1 }$ lie on the circle centered at $O$ with radius $r _ { 1 }$, and radius $r _ { 2 }$ for $v _ { 2 }$.
[2] Problem 3. USAPhO 2010, problem A1.


## 2 Moments of Inertia

Idea 2
For a two-dimensional object in the $x y$ plane, the moment of inertia

$$
I = \int x ^ { 2 } + y ^ { 2 } d m
$$

about the $z$-axis obeys the parallel axis theorem

$$
I = I _ { \mathrm { CM } } + M r _ { \mathrm { CM } } ^ { 2 }
$$

where $I _ { \mathrm { CM } }$ is the moment of inertia about the center of mass, and $M$ is the total mass. Defining $I _ { x }$ and $I _ { y }$ to be the moment of inertia about the $x$ and $y$ axes, we have

$$
I = I _ { x } + I _ { y } , \quad I _ { x } = \int y ^ { 2 } d m , \quad I _ { y } = \int x ^ { 2 } d m
$$

which is called the perpendicular axis theorem.
