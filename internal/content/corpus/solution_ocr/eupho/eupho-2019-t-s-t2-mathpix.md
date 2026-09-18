---
id: solution-ocr-eupho-2019-t-s-t2
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2019_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2019-T2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 2 Motion of a charged ball

The forces acting on the ball are the static frictional force $\vec { F }$, the gravitational force, the normal force, and the Lorentz force $\vec { F } _ { L }$ caused by the magnetic field. None of these forces perform mechanical work on the ball, so the total kinetic energy of the ball is conserved. Due to the condition of pure rolling, the speed of the center of the ball $v$ is proportional to the angular speed $\omega$ of the rolling motion, i.e. the total kinetic energy can be expressed in terms of $v ^ { 2 }$. As a result, the speed of the center of the ball remains constant, but the direction of velocity may change.

The net Lorentz force acting on the ball can be expressed with the help of the velocity of the center of the ball $\vec { v }$ :

$$
\begin{equation*}
\vec { F } _ { L } = Q \vec { v } \times \vec { B } , \tag{1}
\end{equation*}
$$

which can be proven by summing up the magnetic forces acting on the small pieces of the ball.

Proof 1. Let us denote the charge of the $i$ th small piece by $\Delta Q _ { i }$, the position vector directed from the center of the ball to the small piece by $\vec { x } _ { i }$. The velocity of this small piece is given by

$$
\vec { v } _ { i } = \vec { v } + \vec { \omega } \times \vec { x } _ { i }
$$

so the net Lorentz force can be written as

$$
\vec { F } _ { L } = \sum _ { i } \Delta Q _ { i } \vec { v } _ { i } \times \vec { B } = \sum _ { i } \Delta Q _ { i } \vec { v } \times \vec { B } + \sum _ { i } \Delta Q _ { i } \left( \vec { \omega } \times \vec { x } _ { i } \right) \times \vec { B }
$$

The second sum gives zero, because terms containing $\vec { x } _ { i }$ and $- \vec { x } _ { i }$ cancel each other pairwise. From the first sum $\vec { v } \times \vec { B }$ can be taken out,


so at the end the net force is the same as the Lorentz force acting on a point charge moving with the velocity of center of mass

The speed of the center of the ball does not change, i.e. the net force (which is horizontal) should be perpendicular to the velocity $\vec { v }$ of the center. Since the Lorentz force is always perpendicular to $\vec { v }$, so should be the static frictional force $\vec { F }$, as well. The magnitude of $\vec { F }$ cannot depend on the position, only on the speed of the ball, so $| \vec { F } |$ must remain constant during the motion. As a result, the net force (i.e. the acceleration of the center of the ball) is constant in magnitude, so the ball's center will perform a uniform circular motion with speed $| \vec { v } | = v _ { 0 }$ (see the Figure).
![](../../../figures/solution-ocr/e27405a3b1fc0ad09cfa15c2.jpg)

Now we can write down the equation of motion of the ball. The acceleration of the center of mass is horizontal, which is caused by the static frictional force and the net Lorentz force, so with the help of equation (1) Newton's 2nd law in the radial direction can be written as

$$
\begin{equation*}
Q v B - F = m r \Omega ^ { 2 } , \tag{2}
\end{equation*}
$$

where $r$ is the radius of the circular trajectory of the center of mass and $\Omega$ is the angular speed of the circular motion. We can obtain a relationship between the two angular speeds from the condition of pure rolling:

$$
\begin{equation*}
v _ { 0 } = R \omega = r \Omega \text {. } \tag{3}
\end{equation*}
$$

The magnetic field also exerts a net torque on the charged ball. The torque is given by

$$
\vec { \tau } _ { L } = \frac { Q } { 2 m } \vec { L } \times \vec { B } ,
$$

where $\vec { L }$ is the angular momentum of the ball with respect to the center.

Proof 2. As the ball rolls on the surface, moving charges form loop currents which represent a net magnetic moment. A small piece of charge $\Delta Q _ { i }$ corresponds to current

$$
I _ { i } = \frac { | \vec { \omega } | } { 2 \pi } \Delta Q _ { i } ,
$$

so the contribution of this piece to the net magnetic moment $\vec { \mu }$ has magnitude $I _ { i } \pi x _ { i , \perp } ^ { 2 }$, where $x _ { i , \perp }$ is the distance of the small piece from the rotation axis of the ball. The direction of the net magnetic moment is parallel with the vector $\vec { \omega }$, and its magnitude can be written as the sum

$$
\vec { \mu } = \frac { 1 } { 2 } \vec { \omega } \sum _ { i } \Delta Q _ { i } x _ { i , \perp } ^ { 2 }
$$

Here we don't need to evaluate the sum (integral), if we use the analogy with the moment of inertia:

$$
\sum _ { i } \Delta m _ { i } x _ { i , \perp } ^ { 2 } = \frac { 2 } { 5 } m R ^ { 2 } \quad \longrightarrow \quad \sum _ { i } \Delta Q _ { i } x _ { i , \perp } ^ { 2 } = \frac { 2 } { 5 } Q R ^ { 2 }
$$

So the net magnetic torque acting on the ball (in the form of couples) is given by

$$
\vec { \tau } _ { L } = \vec { \mu } \times \vec { B } = \frac { 1 } { 5 } Q R ^ { 2 } \vec { \omega } \times \vec { B } = \frac { Q } { 2 m } \vec { L } \times \vec { B }
$$

The angular acceleration of the ball is caused by the frictional torque and the magnetic torque. As it can be seen from the Figure, both torques have the same direction, which is perpendicular to the ball's angular velocity. As a result, the axis of rotation of the ball precesses in the horizontal plane. To satisfy the condition of pure rolling, the angular speed of the precession must be $\Omega$. During precession the rate of change of the angular momentum is given by $| \vec { L } | \Omega$, so the equation of rotational motion for the center of the ball is

$$
\underbrace { \frac { 1 } { 5 } Q R ^ { 2 } \omega B } _ { \left| \vec { \tau } _ { L } \right| } + R F = \underbrace { \frac { 2 } { 5 } m R ^ { 2 } \omega \Omega } _ { | \vec { L } | } .
$$

From equations (2), (3) and (4) the radius and the angular velocity of the circular motion can be expressed:

$$
r = \frac { 7 } { 6 } \frac { m v _ { 0 } } { Q B } \quad \text { and } \quad \Omega = \frac { 6 } { 7 } \frac { Q B } { m } .
$$
