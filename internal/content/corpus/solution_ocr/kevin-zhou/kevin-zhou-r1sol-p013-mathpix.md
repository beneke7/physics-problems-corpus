---
id: solution-ocr-kevin-zhou-r1sol-p013
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p013]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 13. In relativity, objects that change their direction of motion also automatically rotate, even if they experience no torque in their own frames. Concretely, suppose an object is moving along the $x$-axis with speed $v \ll c$. In its own frame, it experiences an impulse along the $y$-axis, which doesn't rotate it, but does change its velocity in that direction by $u \ll v$. To keep things simple, you should set $c = 1$, and throw away terms smaller than either $v ^ { 2 }$ or $u v$. Under this approximation, the final velocity of the object in the lab frame is just $( v , u )$.

(a) Starting in the lab frame, with coordinates $( t , x , y )$, go into the object's frame by performing a Lorentz boost of $v$ along $\hat { \mathbf { x } }$, and then of $u$ along $\hat { \mathbf { y } }$. That is, express the object's coordinates $\left( t _ { o } , x _ { o } , y _ { o } \right)$ in terms of $t , x$, and $y$.
(b) To compare the orientation of this frame to that of the lab frame, start again in the lab frame and go into the object's frame using a single Lorentz boost of $\mathbf { v } = ( v , u )$. You'll need the formula for a Lorentz transformation in an arbitrary direction, which is
$$
t ^ { \prime } = \gamma ( t - \mathbf { v } \cdot \mathbf { r } ) , \quad \mathbf { r } ^ { \prime } = \mathbf { r } - \gamma \mathbf { v } t + ( \gamma - 1 ) ( \hat { \mathbf { v } } \cdot \mathbf { r } ) \hat { \mathbf { v } } .
$$
(c) Your two frames will differ in orientation by a small angle $\Delta \theta$. What is $\Delta \theta$ ? More generally, if the object performs uniform circular motion with angular velocity $\omega$ and speed $v$ in the lab frame, what spin rotation rate $\omega _ { s }$ is induced by this effect?

(d) Suppose the object accelerated by momentarily firing an array of rockets on its back. How would an observer in the lab frame explain why the object rotated?

This subtle phenomenon goes by several names. When we think about it kinematically, as the result of composing Lorentz transformations, it's usually called Wigner rotation, while when we think about it dynamically, e.g. by tracking the orientation of an orbiting particle, it's usually called Thomas precession. In this problem, we considered a very concrete, straightforward derivation of this effect. For a beautifully geometric but more advanced derivation, see this article. For a rather messy application of Wigner rotation, see Physics Cup 2023, problem 4.

Solution. (a) After the first Lorentz transformation, we have coordinates

$$
t _ { 1 } \approx \left( 1 + v ^ { 2 } / 2 \right) t - v x , \quad x _ { 1 } \approx \left( 1 + v ^ { 2 } / 2 \right) x - v t , \quad y _ { 1 } = y
$$

where we threw out some small terms, e.g. by approximating $\gamma \approx 1 + v ^ { 2 } / 2$. After the second Lorentz transformation, throwing out other small terms (or order $v ^ { 3 } , u ^ { 2 } , u v ^ { 2 }$, etc.) gives

$$
t _ { o } \approx \left( 1 + v ^ { 2 } / 2 \right) t - v x - u y
$$

and

$$
x _ { o } \approx \left( 1 + v ^ { 2 } / 2 \right) x - v t , \quad y _ { o } \approx y - u t + u v x .
$$

(b) To evaluate the result, we note that $\hat { \mathbf { v } } \approx ( 1 , u / v )$, so that
$$
( \gamma - 1 ) ( \hat { \mathbf { v } } \cdot \mathbf { r } ) \hat { \mathbf { v } } \approx \left( v ^ { 2 } / 2 \right) ( x + u y / v ) ( 1 , u / v ) \approx \frac { 1 } { 2 } \left( v ^ { 2 } x + u v y , u v x \right)
$$
to the order at which we're working. Then the Lorentz transformation gives
$$
t ^ { \prime } \approx \left( 1 + v ^ { 2 } / 2 \right) t - v x - u y
$$
and
$$
x ^ { \prime } \approx \left( 1 + v ^ { 2 } / 2 \right) x - v t + \frac { 1 } { 2 } u v y , \quad y ^ { \prime } \approx y - u t + \frac { 1 } { 2 } u v x
$$
(c) By comparing our results and thinking about the form of a small rotation matrix, we see that the orientation difference is $\Delta \theta = u v / 2$. If the object keeps moving in a circle, then
$$
\omega _ { s } = \frac { \Delta \theta } { \Delta t } = \frac { v } { 2 } \frac { \Delta u } { \Delta t } = \frac { v } { 2 } \omega v = \frac { v ^ { 2 } } { 2 } \omega .
$$
So rotations receive a relativistic correction at order $v ^ { 2 }$, like lengths or times. (Tracking the signs, $\boldsymbol { \omega } _ { s }$ is antiparallel to $\boldsymbol { \omega }$.) This effect is important for the dynamics of electrons in atoms; if you don't account for it, the "spin-orbit" interaction is off by a factor of 2.
(d) As usual, the culprit is loss of simultaneity. If the rockets are fired simultaneously in the object's frame, then the object won't turn in its own frame. But in the lab frame, the rockets won't be fired simultaneously, so that the object will momentarily experience a torque about its center, and turn.
For more discussion, see this paper, which explicitly computes the torque on an accelerating gyroscope. Its appendix also contains a quick, but tricky derivation of Thomas precession. On a deeper level, Thomas precession isn't too surprising. It arises from the fact that boosts don't commute (the order you apply them matters), but in special relativity, boosts and rotations are both Lorentz transformations, and we know from M8 that 3D rotations don't commute.


## 3 Paradoxes

Now you're prepared to confront some classic relativistic paradoxes. They won't appear in competitions, but your understanding of relativity will be deeper if you grapple with them. (Also, now that we've got the basics out of the way, we'll start setting $c = 1$ for most problems.)
