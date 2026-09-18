---
id: solution-ocr-eupho-2022-t-s-t3
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2022_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2022-T3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T3: Dipole in a magnetic field

Part (a): Uniform linear motion

Lorentz forces acting on the charges:

$$
\begin{gathered}
\vec { F } _ { + } = q \vec { v } _ { + } \times \vec { B } = q ( \vec { v } + \vec { \omega } \times \vec { r } ) \times \vec { B } , \\
\vec { F } _ { - } = ( - q ) \vec { v } _ { - } \times \vec { B } = ( - q ) ( \vec { v } - \vec { \omega } \times \vec { r } ) \times \vec { B } ,
\end{gathered}
$$

where $\vec { r }$ is a vector from the center of mass to the position of the positive charge.
![](../../../figures/solution-ocr/961fb5a97cab67b31ec78b5f.jpg)

According to Newton's first law, the center-of-mass $C$ of the dipole will move with constant velocity provided that the net force:

$$
\begin{equation*}
\vec { F } = \vec { F } _ { + } + \vec { F } _ { - } = q \left( \vec { v } _ { + } - \vec { v } _ { - } \right) \times \vec { B } , \tag{8}
\end{equation*}
$$

acting on the dipole, is zero. Since $\vec { v } _ { + } , \vec { v } _ { - }$and $\vec { B }$ are perpendicular, we require $\vec { v } _ { + } = \vec { v } _ { - }$. It means that dipole does not rotate: $\omega = \omega _ { 0 } = 0$.

The pure translation, however, is possible if the pair of forces $\vec { F } _ { + } , \vec { F } _ { - }$, has zero torque about $C$ :

$$
\begin{align*}
& \vec { \tau } = \vec { r } \times \vec { F } _ { + } - \vec { r } \times \vec { F } _ { - } = 2 q \vec { r } \times ( \vec { v } \times \vec { B } ) = \\
& \quad 2 q ( \vec { v } ( \vec { r } \cdot \vec { B } ) - \vec { B } ( \vec { r } \cdot \vec { v } ) ) = - 2 q \vec { B } ( \vec { r } \cdot \vec { v } ) . \tag{9}
\end{align*}
$$

We conclude that scalar product is zero only when $\vec { v } \perp \vec { r }$, i.e. the initial velocity should be parallel to $Y$ direction.

In summary, the dipole will move uniformly along $Y$ if, and only if, $\vec { v } _ { 0 } \| Y$ and $\omega _ { 0 } = 0$.

Part (b): Circular motion
The net force can be calculated as:

$$
\begin{align*}
\vec { F } = & \vec { F } _ { + } + \vec { F } _ { - } = 2 q ( \vec { \omega } \times \vec { r } ) \times \vec { B } = \\
& - 2 q ( \vec { \omega } ( \vec { B } \cdot \vec { r } ) - \vec { r } ( \vec { B } \cdot \vec { \omega } ) ) = 2 q B \omega \vec { r } = B \omega \vec { p } \tag{10}
\end{align*}
$$

where $\vec { p }$ is a dipole moment ( $| \vec { p } | = q d = 2 q r$ and the direction aligns with $\vec { r }$ ).

When $C$ orbits a circle, $\vec { F }$ acts as a centripetal force, i.e. it points to the center of the circle. Since $\vec { F } \| \vec { p }$, the dipole is always in line with the center of the orbit. Therefore, the orbital angular velocity of $C$ is equal to the angular velocity of rotation of the dipole about $C$.
![](../../../figures/solution-ocr/28e3eb9af8acbfbaeb0f2076.jpg)
The magnitude of the orbital velocity is:

$$
v _ { 0 } = \left| \omega _ { 0 } \right| R _ { c }
$$

From Newton's second law, and accounting that the total mass of the dipole is $2 m$ :

$$
\frac { 2 m v _ { 0 } ^ { 2 } } { R _ { c } } = \frac { p B v _ { 0 } } { R _ { c } } ,
$$

i.e. the magnitude of velocity is:

$$
v _ { 0 } = \frac { p B } { 2 m } = \frac { q B d } { 2 m }
$$

and the radius of the orbit is:

$$
R _ { c } = \frac { v _ { 0 } } { \left| \omega _ { 0 } \right| } = \frac { q B d } { 2 m \left| \omega _ { 0 } \right| }
$$

The coordinates of the center of the circle are:

$$
\left( x _ { c } , y _ { c } \right) = \left( \pm R _ { c } , 0 \right)
$$

where the "+" sign corresponds to $\omega _ { 0 } > 0$, i.e. counterclockwise rotation, and the "-" sign -to clockwise rotation. In either case, the initial velocity should point to the negative $Y$ direction:

$$
\vec { v } _ { 0 } = - \frac { q d B } { 2 m } \hat { \jmath } .
$$

Part (c): Reversal of the dipole
In (10) we have shown that the net force:

$$
\vec { F } = 2 q ( \vec { \omega } \times \vec { r } ) \times \vec { B } = ( \vec { \omega } \times \vec { p } ) \times \vec { B } .
$$

Since the dipole moment $\vec { p }$ rotates with angular velocity $\vec { \omega }$, its time derivative:

$$
\frac { d \vec { p } } { d t } = \vec { \omega } \times \vec { p } .
$$

From Newton's second law:

$$
2 m \frac { d \vec { v } } { d t } = \vec { F } = \frac { d \vec { p } } { d t } \times \vec { B } .
$$

By integrating the equation, we arrive at an additional conservation law in the system (conservation of the so called "generalized momentum"):

$$
2 m \vec { v } - \vec { p } \times \vec { B } = \mathrm { const }
$$

Thus, if $\vec { p }$ has reversed its direction from $\vec { p } _ { 0 }$ to $\vec { p } _ { 1 } = - \vec { p } _ { 0 }$, then the velocity:

$$
\begin{equation*}
\vec { v } _ { 1 } = \vec { v } _ { 0 } + \frac { \left( \vec { p } _ { 1 } - \vec { p } _ { 0 } \right) \times \vec { B } } { 2 m } = - \frac { \vec { p } _ { 0 } \times \vec { B } } { m } . \tag{11}
\end{equation*}
$$


Since the magnetic field does not perform work on moving electric charges, the kinetic energy of the dipole is conserved:

$$
\frac { I } { 2 } \omega _ { 0 } ^ { 2 } = \frac { I } { 2 } \omega _ { 1 } ^ { 2 } + \frac { 2 m } { 2 } v _ { 1 } ^ { 2 } ,
$$

Here, $I = 2 \times m ( d / 2 ) ^ { 2 } = m d ^ { 2 } / 2$ is the moment of inertia of the dipole with respect to its center-of-mass. Since $v _ { 1 }$ doesn't depend on angular velocities, $\omega _ { 0 }$ is minimal when $\omega _ { 1 } = 0$. Finally,

$$
\omega _ { \min } = v _ { 1 } \sqrt { \frac { 2 m } { I } } = \frac { p _ { 0 } B } { m } \sqrt { \frac { 4 } { d ^ { 2 } } } = \frac { 2 q B } { m }
$$

Alternatively, we can introduce $\theta$ to be the angle between the dipole moment and the axis $X \left( \theta _ { 0 } = 0 \right)$ and rewrite the equations of translational motion in coordinates using $\omega = \dot { \theta }$ :

$$
\dot { v } _ { x } = \dot { \theta } \frac { q B d } { 2 m } \cos \theta , \quad \dot { v } _ { y } = \dot { \theta } \frac { q B d } { 2 m } \sin \theta .
$$

By integrating these equations, given zero initial velocity, we find how velocity depends on $\theta$ :

$$
v _ { x } = \frac { q B d } { 2 m } \sin \theta , \quad v _ { y } = \frac { q B d } { 2 m } ( 1 - \cos \theta ) .
$$

Using the expression (9) for the torque, we can write the equation of rotational motion as:

$$
\begin{gather*}
I \ddot { \theta } = \tau = - 2 q B \left( r _ { x } v _ { x } + r _ { y } v _ { y } \right) = - \frac { q ^ { 2 } B ^ { 2 } d ^ { 2 } } { 2 m } \sin \theta , \\
\ddot { \theta } + \frac { q ^ { 2 } B ^ { 2 } } { m ^ { 2 } } \sin \theta = 0 , \tag{12}
\end{gather*}
$$

This is the equation of a mathematical pendulum of length $L$ in gravitational field $g = L ( q B / m ) ^ { 2 }$. And the equivalent question becomes what is the minimal push $\dot { \theta } _ { 0 }$ required in the bottom position for the pendulum to reach the top position. Kinetic energy of the pendulum $K = \frac { 1 } { 2 } m L ^ { 2 } \dot { \theta } _ { 0 } ^ { 2 }$ will be transfered to the potential energy $U = 2 m g L$, from which we find:

$$
\omega _ { \min } = \dot { \theta } _ { 0 } = \sqrt { 4 \frac { g } { L } } = 2 \frac { q B } { m } .
$$

Note. Due to symmetry, both clockwise and counterclockwise initial rotation with absolute value of $\left| \omega _ { 0 } \right|$ will work.

## Part (d): Trajectory asymptote

If dipole's trajectory has an asymptote, then its movement along the asymptote is uniform. Indeed, if there is a linear motion with acceleration, the dipole $\vec { p }$ should be always aligned with the direction of motion, thus, not rotating. and as we found in part (a), the absence of rotation can only be maintained if $\vec { v } =$ const and $\vec { v } \perp \vec { p }$.

The uniform linear motion requires $\omega = 0$, and this happens in the limit when the orientation is reversed $\vec { p } _ { 1 } = - \vec { p } _ { 0 }$. According to (11), in the limit, the dipole is travelling with the speed $\vec { v } _ { 1 } = p _ { 0 } B \hat { \jmath } / m$. Thus the asymptote is parallel to Y axis: $x = D$ (for counter-clockwise initial rotation).
![](../../../figures/solution-ocr/8d353812ffb54aeda3515751.jpg)

If $\vec { R } _ { + }$and $\vec { R } _ { - }$are absolute positions of the charges, we can write equation for the angular momentum around the origin $L _ { O }$ :

$$
\begin{aligned}
& \frac { d \vec { L } _ { O } } { d t } = \vec { R } _ { + } \times \left( q \dot { \vec { R } } _ { + } \times \vec { B } \right) + \vec { R } _ { - } \times \left( - q \dot { \vec { R } } _ { - } \times \vec { B } \right) = \\
& - q \vec { B } \left( \vec { R } _ { + } \cdot \dot { \vec { R } } _ { + } - \vec { R } _ { - } \cdot \dot { \vec { R } } _ { - } \right) = - \frac { q \vec { B } } { 2 } \frac { d } { d t } \left( R _ { + } ^ { 2 } - R _ { - } ^ { 2 } \right)
\end{aligned}
$$

After integration, we find one more conservation law (conservation of the "generalized angular momentum"):

$$
\begin{aligned}
\vec { L } _ { O } + \frac { q \vec { B } } { 2 } \left( R _ { + } ^ { 2 } - R _ { - } ^ { 2 } \right) = \vec { L } _ { O } & + \frac { q \vec { B } } { 2 } \left( \left( \vec { R } _ { + } + \vec { R } _ { - } \right) \cdot \left( \vec { R } _ { + } - \vec { R } _ { - } \right) \right) \\
& = \vec { L } _ { O } + \vec { B } ( \vec { R } \cdot \vec { p } ) = \text { const }
\end{aligned}
$$

where $\vec { R } = \frac { 1 } { 2 } \left( \vec { R } _ { + } + \vec { R } _ { - } \right)$is the position of center of mass. We also used the fact that $q \left( \vec { R } _ { + } - \vec { R } _ { - } \right) = 2 q \vec { r } = \vec { p }$.

Initially, centre of mass coincides with origin ( $\vec { R } _ { 0 } = 0$ ):

$$
\begin{equation*}
L _ { O } ( 0 ) = I \omega _ { 0 } = 2 m \frac { d ^ { 2 } } { 4 } 2 \frac { q B } { m } = q B d ^ { 2 } . \tag{13}
\end{equation*}
$$

At asymptote, the dipole has reversed direction $\overrightarrow { p _ { 1 } } = - \overrightarrow { p _ { 0 } }$ and charges are travelling along parallel lines $x = D \pm r$ with the velocity $\vec { v } _ { 1 }$ :

$$
\begin{align*}
L _ { O } ( \infty ) + & B \left( \vec { R } _ { 1 } \cdot \vec { p } _ { 1 } \right) = m ( D - r ) v _ { 1 } + m ( D + r ) v _ { 1 } - B D p _ { 0 } \\
& = 2 m D \frac { p _ { 0 } B } { m } - B D p _ { 0 } = B D p _ { 0 } = B D q d \tag{14}
\end{align*}
$$

Since (13) equals (14), we conclude that $D = d$.


We can arrive to the same conclusion differently. Notice that we are interested in the $x$ coordinate of $C$ at infinity:

$$
D = x _ { \infty } = \int _ { 0 } ^ { \infty } v _ { x } d t = \frac { q B d } { 2 m } \int _ { 0 } ^ { \infty } \sin \theta d t
$$

From (12), we can express $\sin \theta$ :

$$
\begin{aligned}
\int _ { 0 } ^ { \infty } \sin \theta d t = & - \frac { m ^ { 2 } } { q ^ { 2 } B ^ { 2 } } \int _ { 0 } ^ { \infty } \ddot { \theta } d t = \\
& - \frac { m ^ { 2 } } { q ^ { 2 } B ^ { 2 } } \left( \dot { \theta } _ { 1 } - \dot { \theta } _ { 0 } \right) = \frac { m ^ { 2 } } { q ^ { 2 } B ^ { 2 } } \omega _ { \min } = \frac { 2 m } { q B }
\end{aligned}
$$

Finally,

$$
D = \frac { q B d } { 2 m } \frac { 2 m } { q B } = d .
$$

Note. If initial rotation is clockwise ( $\omega _ { 0 } < 0$ ), the asymptote has an equation $x = - D$, but the distance to the origin remains the same.
