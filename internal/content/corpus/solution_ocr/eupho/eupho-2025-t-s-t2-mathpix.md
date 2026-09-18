---
id: solution-ocr-eupho-2025-t-s-t2
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2025_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2025-T2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T2: Floating table (10 pts)

Solution with forces First, let us consider the forces and torques and show that in the configuration shown in the figure, the table is indeed in equilibrium. By the word "table", we understand the rigid body formed by the plate and the frame attached to it. In the following considerations and descriptions of the table position we often use positions of points A, B and C, which belong to the rigid table: distances between them do not change. Since in the problem statement, the motion is limited to the side view only, the pair of short chains will always have the same position when viewed from the side. So we will consider them as a single chain (chain 1) with the tension doubled. The same is true for the pair of long chains (chain 2).

![](../../../figures/solution-ocr/45018c757046e18b6742dc1c.jpg)
Figure 3: Scheme of forces for the initial state.

There are 3 forces acting on a table (see Fig. 3): plate weight $m \vec { g }$ (at the center of mass of the table C), and 2 tension forces from the chains: $\vec { F } _ { 1 }$ (at point A, chain 1) and $\vec { F } _ { 2 }$ (at point B, chain 2). Since all the forces only have vertical components different from 0, their horizontal components are balanced and for their vertical components, the balance equation is:

$$
\begin{equation*}
- m g + F _ { 1 } - F _ { 2 } = 0 . \tag{8}
\end{equation*}
$$

Finally, consider the torque balance around the point $B$ :

$$
\begin{equation*}
m g \cdot 4 a - F _ { 1 } \cdot 2 a = 0 . \tag{9}
\end{equation*}
$$

Solving the system of equations (8-9), we get $F _ { 1 } =$ $2 m g$ and $F _ { 2 } = m g$. Since both $F _ { 1 } , F _ { 2 } > 0$, we conclude that the chains are indeed tensioned and the system is in equilibrium.
Now let's analyze how the table rotates, when it is displaced. Since the chains are tensioned and inextensible, the point $B$ can only travel along the circle $c _ { b }$. Similarly, the distance between the point $\mathrm { A } _ { 0 }$ and any point inside the circle $c _ { a }$ is smaller than the length of the short chain (4a); the distance between the point $\mathrm { A } _ { 0 }$ and any point outside of the circle $c _ { a }$ is larger than $4 a$.

Since the table is rigid, if we fix the point B and rotate the table around it, point A would travel along the circle $c _ { t }$. From the way how $c _ { t }$ intersects with $c _ { a }$, we can conclude that if the table is rotated clockwise, the distance $\mathrm { A } _ { 0 } \mathrm {~A}$ decreases. And if it is rotated counter-clockwise, $\mathrm { A } _ { 0 } \mathrm {~A}$ increases.

Let's imagine we translate (move without rotation) the table to the left, so the point $B$ travels to the point $B ^ { \prime }$. Point $A$ would move to the point $A ^ { \prime }$, as shown in Fig. 4. Since $A ^ { \prime }$ is outside of the circle $c _ { a } , \mathrm {~A} _ { 0 } \mathrm {~A} ^ { \prime } > \mathrm { A } _ { 0 } \mathrm {~A}$ and the table has to rotate clockwise (around B') to compensate for this change and return the point A' back to the circle $c _ { a }$ (point A') to satisfy the constant chain length constraint.

![](../../../figures/solution-ocr/fff68f7f5bfdf818e9e13fa5.jpg)
Figure 4: Translation to the left and clockwise rotation of the table

If we translate the table in the opposite direction, following similar arguments, we find that the table rotates clockwise in this case too, see Fig. 5.

![](../../../figures/solution-ocr/d8bd75d55476c04fcb2a6d6d.jpg)
Figure 5: Translation to the right and clockwise rotation of the table


Since the table rotates in the same direction for both positive and negative horizontal displacements, the Taylor expansion of the angle of rotation $\varphi ( x )$ does not contain a linear term in $x : \varphi ( x ) \sim x ^ { 2 }$. This means that for small horizontal displacements, we can neglect the table rotation.

Let's look at what happens when the table is displaced infinitesimally from its initial position in the horizontal direction (it will also move in the vertical direction, but the displacement in the vertical direction is an order of magnitude smaller and we will neglect it). The vertical components of the forces in the chains do not change significantly, but as you can see in the Fig. 6, the horizontal components of the forces in both chains appear in the direction opposite to the displacement. This means that the equilibrium is stable.

![](../../../figures/solution-ocr/9b8d3a53f4a7595a2a159f89.jpg)
Figure 6: Horizontal displacement of the table

Since we have already drawn a figure showing the displaced position of the table, let us write the equation of motion for the table plate for small horizontal displacements $x$, where $\theta _ { 1 }$ and $\theta _ { 2 }$ are small angles between the chains 1 and 2 respectively and the vertical. Since the table displacement is small, tension forces $F _ { 1 }$ and $F _ { 2 }$ cannot change significantly (the force change is of the same order as the displacement). Thus, we can use the previously found values:

$$
\begin{aligned}
m \ddot { x } = - F _ { 1 } \sin \theta _ { 1 } - F _ { 2 } \sin \theta _ { 2 } & = - F _ { 1 } \theta _ { 1 } - F _ { 2 } \theta _ { 2 } = \\
& = - 2 m g \frac { x } { 4 a } - m g \frac { x } { 6 a } = - m g \frac { 2 x } { 3 a } ,
\end{aligned}
$$

where we have also considered the lengths of the chains $4 a$ (chain 1) and $6 a$ (chain 2), neglected the rotation of the plate and used small angle approximations. Rearranging this equation, we get:

$$
\ddot { x } + \frac { 2 g } { 3 a } x = 0 ,
$$

which describes horizontal oscillations of the table plate with $\omega = \sqrt { 2 g / ( 3 a ) } = 8.09 \mathrm {~s} ^ { - 1 }$, frequency $v = 1.29 \mathrm {~Hz}$ and period

$$
T = 777 \mathrm {~ms} .
$$

Solution with energies Let's denote the small displacement of the centre of mass from equilibrium position C to C' as $( x , y )$, where $x , y \ll a$, and the small tilt of the table as $\varphi$, as shown in Fig. 7.

![](../../../figures/solution-ocr/26a44debe95e81fea5dcb94f.jpg)
Figure 7: Infinitesimal displacement of the table

Given the small angle approximation $\varphi \ll 1 ( \sin \varphi \approx$ $\varphi$ and $\cos \varphi \approx 1$ ), the displacement of points from equilibrium positions A and B to A' and B' are:

$$
\begin{aligned}
\Delta A _ { x } & = x - 5 a \sin \varphi - 2 a ( 1 - \cos \varphi ) \approx x - 5 a \varphi \\
\Delta A _ { y } & = y - 2 a \sin \varphi + 5 a ( 1 - \cos \varphi ) \approx y - 2 a \varphi \\
\Delta B _ { x } & = x - 4 a ( 1 - \cos \varphi ) \approx x \\
\Delta B _ { y } & = y - 4 a \sin \varphi \approx y - 4 a \varphi
\end{aligned}
$$

Now we can write a condition that the squared length of the small chain remains the same:

$$
\begin{aligned}
& ( x - 5 a \varphi ) ^ { 2 } + ( 4 a - y + 2 a \varphi ) ^ { 2 } = ( 4 a ) ^ { 2 } \\
& x ^ { 2 } - 10 a x \varphi + 25 a ^ { 2 } \varphi ^ { 2 } - 8 a ( y - 2 a \varphi ) + ( y - 2 a \varphi ) ^ { 2 } = 0 ,
\end{aligned}
$$

Let's notice that the largest term in $x$ is $x ^ { 2 }$ and in $y$ and $a \varphi$, it's $8 a ( y + 2 a \varphi )$. Thus, we can omit all other terms, since they are of the higher order (and therefore smaller):

$$
\begin{equation*}
x ^ { 2 } - 8 a ( y - 2 a \varphi ) = 0 , \quad \frac { x ^ { 2 } } { 8 a } - y + 2 a \varphi = 0 \tag{10}
\end{equation*}
$$

Doing the same for the long chain we get:

$$
\begin{aligned}
& x ^ { 2 } + ( 6 a + y - 4 a \varphi ) ^ { 2 } = ( 6 a ) ^ { 2 } \\
& x ^ { 2 } + 12 a ( y - 4 a \varphi ) + ( y - 4 a \varphi ) ^ { 2 } = 0
\end{aligned}
$$

Omitting higher order terms we get:

$$
\begin{equation*}
x ^ { 2 } + 12 a ( y - 4 a \varphi ) = 0 , \quad \frac { x ^ { 2 } } { 12 a } + y - 4 a \varphi = 0 \tag{11}
\end{equation*}
$$

Solving (10) and (11) as linear equations on $y$ and $\varphi$, we get:

$$
y = \frac { x ^ { 2 } } { 3 a } , \quad \varphi = \frac { 5 x ^ { 2 } } { 48 a ^ { 2 } } .
$$

Since the potential energy of the table

$$
\begin{equation*}
U = m g y = \frac { 2 } { 3 a } m g \frac { x ^ { 2 } } { 2 } , \tag{12}
\end{equation*}
$$


doesn't have a term linear in $x$, we conclude that the system is in equilibrium. And since the coefficient for $x ^ { 2 }$ is positive, the equilibrium is stable.

The kinetic energy of the table is:

$$
\begin{equation*}
E = m \frac { \dot { x } ^ { 2 } + \dot { y } ^ { 2 } } { 2 } + I \frac { \dot { \varphi } ^ { 2 } } { 2 } \approx m \frac { \dot { x } ^ { 2 } } { 2 } , \tag{13}
\end{equation*}
$$

where $I$ is a moment of inertia with respect to rotation around the axis through the centre of mass C. Since both $y$ and $\varphi$ depend on $x ^ { 2 }$, their squared derivatives will be proportional to $x ^ { 2 } \dot { x } ^ { 2 }$ and can be neglected when compared to $\dot { x } ^ { 2 }$ term.

Finally, we can find the period of oscillations from the ratio of coefficients of (13) and (12):

$$
T = 2 \pi \sqrt { m / \frac { 2 m g } { 3 a } } = 2 \pi \sqrt { \frac { 3 a } { 2 g } } = 0.777 \mathrm {~s} .
$$

Solution with the curvature We begin with the observation that at the initial horizontal position, points A and B in Fig. 3 move horizontally. Therefore, the instantaneous centre of table's rotation is at infinity (found as the intersection of lines perpendicular to the velocity vectors, which are parallel in this case), or in other words there is no rotation. Another way to see it is to consider the projections of the velocities $v _ { A }$ and $v _ { B }$ to the line $A B$ which should be the same in a rigid body. Thus $v _ { A } = v _ { B } = v$ and all the points of the table move with the same velocity, i.e. there is no immediate rotation.

![](../../../figures/solution-ocr/188da499b679d3d4b6ecebe0.jpg)
Figure 8: Immediate velocities given the constraints

Consequently, no rotational kinetic energy is involved, and the motion of the table can be treated as the motion of a point mass located at the centre of mass, point c. Since at the given configuration, the $v _ { C }$ can only be horizontal, we conclude that initially table is at equilibrium. All that remains is to find the radius of curvature $R$ of its trajectory and calculate $T = 2 \pi \sqrt { R / g }$.

To find the radius of curvature, we note that for an arbitrary point $P$ on the table, the curvature $\vec { c } = \hat { n } / R$

![](../../../figures/solution-ocr/1e6e8c26d2755352f1022e87.jpg)
Figure 9: Immediate accelerations

of its trajectory is a linear function of its coordinates, where $\hat { n }$ denotes a unit vector pointing towards the centre of curvature. Indeed, using a non-inertial reference frame where the rigid body remains at rest with origin at $O$, the acceleration of point $P$ is the superposition of: the acceleration of $O$, the centripetal acceleration $- \overrightarrow { O P } \omega ^ { 2 }$, and the tangential acceleration $\vec { \varepsilon } \times \overrightarrow { O P }$. All of these are linear functions of the coordinates of point $P$, where $\vec { \varepsilon }$ denotes the angular acceleration and $\omega$ the angular speed. Hence, in the lab frame, the acceleration of point $P$ is a linear function of coordinates, as must be its centripetal acceleration $v ^ { 2 } \vec { c }$. Since the angular speed of the table is zero, all points move with the same speed, so $\vec { c }$ must be a linear function of coordinates.

The remaining calculation is straightforward: due to the translational motion of the body, curvatures depend only on the horizontal coordinate $x$. The curvature of $B$ at $x = 4 a$ is $c _ { B } = - 1 / ( 6 a )$, with the minus sign indicating that the vector points downwards. The curvature of $A$ at $x = 2 a$ is $c _ { A } = 1 / ( 4 a )$. Hence, the curvature of $C$ is $1 / ( 4 a ) + ( 1 / ( 4 a ) + 1 / ( 6 a ) ) = 2 / ( 3 a )$, giving $R = 1.5 \mathrm { dm }$ and resulting in $T = 777 \mathrm {~ms}$. Positive curvature means that the position is a stable equilibrium.

Another way to see it, is to consider normal acceleration $w _ { C }$ of point $C$. For 2 points of a rigid body $C$ and $B$, the projections of their accelerations $w _ { C } , w _ { B }$ to the segment $B C$ differ by the value $\omega ^ { 2 } | B C |$. However, in our case since there is no rotation, the projections of acceleration are equal (like velocities). This means that the accelaration $w _ { B }$ is also normal and equal to $w _ { B } = v ^ { 2 } / ( 6 a )$. Point $A$ has both normal and tangential acceleration. Comparing projections of points $A , B$,


and $A , C$, we get:

$$
\begin{aligned}
- w _ { B } \cos \alpha & = w _ { A y } \cos \alpha - w _ { A y } \sin \alpha \\
w _ { C } \cos \alpha & = w _ { A y } \cos \alpha + w _ { A y } \sin \alpha
\end{aligned}
$$

Thus, we find that

$$
w _ { C } = w _ { B } + 2 w _ { A y } = \frac { v ^ { 2 } } { 6 a } + 2 \frac { v ^ { 2 } } { 4 a } = \frac { v ^ { 2 } } { 3 a / 2 } ,
$$

so radius of curvature is $R = 3 a / 2$.
You can visualize the motion of the table using a GeoGebra tool, following the web link or the qr code https://www.geogebra.org/m/wbqwp3tf
