---
id: solution-ocr-kevin-zhou-m2sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 6 (Quarterfinal 2004). A uniform board of length $L$ is placed on the back of a truck.
![](../../../figures/solution-ocr/682cf20119d19d0e16fc1fc5.jpg)
There is no friction between the top of the board and the vertical surface of the truck. The coefficient of static friction between the bottom of the board and the horizontal surface of the truck is $\mu _ { s } = 0.5$. The truck always moves in the forward direction.
    (a) What is the maximum starting acceleration the truck can have if the board is not to slip or fall over?
    (b) What is the maximum stopping acceleration the truck can have if the board is not to slip or fall over?
    (c) For what value of stopping acceleration is the static frictional force equal to zero?

Solution. Let us work in the accelerating frame of the truck.


![](../../../figures/solution-ocr/92aa0cb3af4baf2a5974af7f.jpg)

Force balance gives $m g = N ^ { \prime }$ and $N + m a = f$, and torque balance gives

$$
- m g \frac { L } { 2 } \sin \theta + m a \frac { L } { 2 } \cos \theta + N L \cos \theta = 0
$$

which implies

$$
2 N + m a = m g \tan \theta .
$$

Thus,

$$
N = \frac { m ( g \tan \theta - a ) } { 2 } , \quad f = \frac { m ( g \tan \theta + a ) } { 2 } .
$$

Since $- m g \mu \leq f \leq m g \mu$, to avoid slipping we require

$$
- g \leq g \tan \theta + a \leq g \Longrightarrow - g \leq \frac { 3 } { 4 } g + a \leq g \Longrightarrow - \frac { 7 } { 4 } g \leq a \leq \frac { 1 } { 4 } g .
$$

To avoid falling over, we need $N > 0$, which is equivalent to

$$
a \leq g \tan \theta = \frac { 3 } { 4 } g .
$$

We can now read off the answers.

(a) For starting accelerations above $3 g / 4$ we would have falling, while for ones above $g / 4$ we would have slipping. So slipping kicks in first, and the answer is $g / 4$.
(b) Here the only constraint is slipping, and the answer is $7 g / 4$.
(c) Here $\frac { 3 } { 4 } g + a = 0$, so the truck decelerates with acceleration $0.75 g$.

[2] Problem 7 (Kalda). Three identical uniform rods are connected by freely rotating hinges.
![](../../../figures/solution-ocr/bdaec3e2c241b303e16a56c6.jpg)
The rods are arranged so that $C D$ is parallel to $A B$, and $\overline { A B } = 2 \overline { C D }$. A mass $m$ is hung on hinge $C$. What is the minimum force that must be exerted at hinge $D$ to keep the system stationary?


Solution. Let the rods have length $\ell$. There are many ways to solve the problem, but the quickest is to consider the torque on the system of rod CD and its hinges, about the intersection point of AC and BD. About this point, the torque due to the weight of rod CD vanishes. Since the hinges are freely rotating, the force of rod AC on the system is directed along AC, so it also exerts no torque, and the same applies for the force from rod BD.

Thus, the only torque is $m g \ell / 2$, from the weight of the mass. The applied force must balance this torque, and by some elementary geometry, we find that its maximum possible lever arm is $\ell$, when the force is perpendicular to BD. Therefore, the minimum force is $\mathrm { mg } / 2$.

Note that it is crucial to assume the rods are massless. If the rods had mass, then the structure can't be supported by freely rotating hinges, even in the absence of the mass $m$ and external force $F$. (For example, the forces of the hinges on the rod CD would have to be horizontal, which means they can't balance gravity.) Instead, in reality the structure would deform a bit until the hinges were no longer freely rotating, but rather jammed in place.

Idea 8
An extended object supported at a point may be static if its center of mass lies directly above or below that point. More generally, if the object is supported at a set of points, it can be static if its center of mass lies above the convex hull of the points.

[2] Problem 8. $N$ identical uniform bricks of length $L$ are stacked, one above the other, near the edge of a table. What is the maximum possible length the top brick can protrude over the edge of the table? How does this limit grow as $N$ goes to infinity?
Solution. Suppose we begin with all $N$ blocks stacked directly on top of each other and slide them to the right. The maximal extension is reached when the center of mass of the top $n$ blocks lies on the edge of the $( n + 1 ) ^ { \text {th } }$ block. Let $\ell = L / 2$, and suppose we have already adjusted the top $n - 1$ blocks to be in the optimal position. Then the center of mass of the top $n$ blocks is a distance $\ell / n$ from the edge of the $( n + 1 ) ^ { \text {th } }$ block, so the $n ^ { \text {th } }$ block and everything on top of it may be moved $\ell / n$ to the right. Hence the total distance is
$$
\frac { L } { 2 } \left( 1 + \frac { 1 } { 2 } + \ldots + \frac { 1 } { N } \right) \approx \frac { L } { 2 } \int _ { 1 } ^ { N } \frac { d x } { x } \approx \frac { L } { 2 } \log N
$$
which is unbounded as $N \rightarrow \infty$. (By the way, if you allow blocks to be stacked in any combination, not just one on top of the other, then the maximum overhang is much larger. As shown in this neat paper, it grows as $N ^ { 1 / 3 }$.)
[2] Problem 9 (Kalda). A cylinder with mass $M$ is placed on an inclined slope with angle $\alpha$ so that its axis is horizontal. A small block of mass $m$ is placed inside it.
![](../../../figures/solution-ocr/cc8c7db7c422b358909b5c87.jpg)
The coefficient of friction between the block and cylinder is $\mu$. Find the maximum $\alpha$ so that the cylinder can stay at rest, assuming that the coefficient of friction between the cylinder and slope is high enough to keep the cylinder from slipping.

Solution. Refer to the diagram below, where $C$ is the location of the block.
![](../../../figures/solution-ocr/008b562d8551cfbb262b06e3.jpg)

The center of mass $B$ of the cylinder-block system must be right above the contact point $A$. Therefore, we must have $O B = k m$ and $B C = k M$ for some constant $k$, so that the radius of the cylinder is $O C = k ( m + M ) = O A$. Next, by applying the law of sines on triangle $O A B$, we have

$$
\frac { O B } { \sin \alpha } = \frac { O A } { \sin ( \alpha + \theta ) } \Longrightarrow \sin ( \alpha + \theta ) = ( 1 + M / m ) \sin \alpha .
$$

We see that $m$ slips when $\tan ( \alpha + \theta ) = \mu$, or $\sin ( \alpha + \theta ) = \frac { \mu } { \sqrt { 1 + \mu ^ { 2 } } }$, so

$$
\alpha _ { \max } = \sin ^ { - 1 } \left( \frac { \mu } { \sqrt { 1 + \mu ^ { 2 } } } \left( 1 + \frac { M } { m } \right) ^ { - 1 } \right) .
$$

[2] Problem 10 (PPP 11). A sphere is made of two homogeneous hemispheres stuck together, with different densities. Is it possible to choose the densities so that the sphere can be placed on an inclined plane with incline 30° and remain in equilibrium? Assume the coefficient of friction is sufficiently high so that the sphere cannot slip.

Solution. No, it's not possible. We need the center of mass to be straight above the point of contact. Some basic geometry shows that this is only possible for some orientation of the sphere if the center of mass is at least a distance $R / 2$ from the center of the sphere. However, this is impossible: even if one hemisphere had near-zero density, the center of mass would only be $3 R / 8$ away from the center of the sphere, as can be shown by direct integration.

We can also resolve the problem without any calculation. Consider a homogeneous hemisphere flat on a table. Its center of mass must be at a height lower than $R / 2$, since the mass above the plane $z = R / 2$ is less than the mass below it, and concentrated closer to the plane. Therefore, the centers of masses of the hemispheres are each within $R / 2$ of the center of the sphere, so the overall center of mass is also within $R / 2$ of the center.
