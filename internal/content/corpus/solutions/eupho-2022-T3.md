---
id: eupho-2022-T3
problem: eupho-2022-T3
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2022
verification_status: unverified
figure_files: [eupho-2022-T3-sol-1.png, eupho-2022-T3-sol-2.png]
---
## Solution

Let $\vec{r}$ be a vector from the center of mass to the position of the positive charge. The velocities of the two charges are $\vec{v}_+ = \vec{v} + \vec{\omega}\times\vec{r}$ and $\vec{v}_- = \vec{v} - \vec{\omega}\times\vec{r}$, so the magnetic forces on them are

$$\vec{F}_+ = q\vec{v}_+ \times \vec{B} = q(\vec{v} + \vec{\omega}\times\vec{r})\times\vec{B},$$
$$\vec{F}_- = (-q)\vec{v}_- \times \vec{B} = (-q)(\vec{v} - \vec{\omega}\times\vec{r})\times\vec{B},$$

where $\vec{r}$ is a vector from the center of mass to the position of the positive charge.

![figure](../../sources/eupho/figures/eupho-2022-T3-sol-1.png)

### Part (a): Uniform linear motion

According to Newton's first law, the center-of-mass $C$ of the dipole will move with constant velocity provided that the net force:

$$\vec{F} = \vec{F}_+ + \vec{F}_- = q(\vec{v}_+ - \vec{v}_-)\times\vec{B}, \tag{8}$$

acting on the dipole, is zero. Since $\vec{v}_+, \vec{v}_-$ and $\vec{B}$ are perpendicular, we require $\vec{v}_+ = \vec{v}_-$. It means that dipole does not rotate: $\omega = \omega_0 = 0$.

The pure translation, however, is possible if the pair of forces $\vec{F}_+, \vec{F}_-$ has zero torque about $C$:

$$\vec{\tau} = \vec{r}\times\vec{F}_+ - \vec{r}\times\vec{F}_- = 2q\vec{r}\times(\vec{v}\times\vec{B}) = 2q\left(\vec{v}(\vec{r}\cdot\vec{B}) - \vec{B}(\vec{r}\cdot\vec{v})\right) = -2q\vec{B}(\vec{r}\cdot\vec{v}). \tag{9}$$

Since $\vec{r}\cdot\vec{B} = 0$, this is zero when $\vec{r}\perp\vec{v}$, i.e. when $\vec{v}$ (and hence $\vec{v}_0$) is perpendicular to the dipole axis $X$, i.e. $\vec{v}_0$ points along $\pm Y$.

So: $\omega_0 = 0$ and $\vec{v}_0 \perp X$ (parallel to $Y$).

### Part (b): Circular motion

The magnitude of the orbital velocity is:

$$v_0 = |\omega_0| R_c.$$

From Newton's second law, and accounting that the total mass of the dipole is $2m$:

$$\frac{2m v_0^2}{R_c} = \frac{pB v_0}{R_c},$$

where $p = qd$ is the dipole moment. Hence the magnitude of velocity is:

$$v_0 = \frac{pB}{2m} = \frac{qBd}{2m},$$

and the radius of the orbit is:

$$R_c = \frac{v_0}{|\omega_0|} = \frac{qBd}{2m|\omega_0|}.$$

The coordinates of the center of the circle are:

$$(x_c, y_c) = (\pm R_c, 0),$$

where the "$+$" sign corresponds to $\omega_0 > 0$, i.e. counter-clockwise rotation, and the "$-$" sign — to clockwise rotation. In either case, the initial velocity should point to the negative $Y$ direction:

$$\vec{v}_0 = -\frac{qdB}{2m}\hat{j}.$$

### Part (c): Reversal of the dipole

In (10) we have shown that the net force:

$$\vec{F} = 2q(\vec{\omega}\times\vec{r})\times\vec{B} = (\vec{\omega}\times\vec{p})\times\vec{B}.$$

Since the dipole moment $\vec{p}$ rotates with angular velocity $\vec{\omega}$, its time derivative:

$$\frac{d\vec{p}}{dt} = \vec{\omega}\times\vec{p}.$$

From Newton's second law:

$$2m\frac{d\vec{v}}{dt} = \vec{F} = \frac{d\vec{p}}{dt}\times\vec{B}.$$

By integrating the equation, we arrive at an additional conservation law in the system (conservation of the so called "generalized momentum"):

$$2m\vec{v} - \vec{p}\times\vec{B} = \text{const}.$$

Thus, if $\vec{p}$ has reversed its direction from $\vec{p}_0$ to $-\vec{p}_0$, then the velocity (with $\vec{v}_0 = 0$):

$$\vec{v}_1 = \vec{v}_0 + \frac{(\vec{p}_1 - \vec{p}_0)\times\vec{B}}{2m} = -\frac{\vec{p}_0\times\vec{B}}{m}.$$

The minimal angular velocity to achieve reversal is found from energy: the rotational kinetic energy at the start must equal the translational kinetic energy gained, with $I = 2\times m(d/2)^2 = md^2/2$ the moment of inertia of the dipole about its center-of-mass. Since $v_1$ doesn't depend on angular velocities, $\omega_0$ is minimal when the final angular velocity $\omega_1 = 0$. Finally,

$$\omega_{\min} = v_1\sqrt{\frac{2m}{I}} = \frac{p_0 B}{m}\sqrt{\frac{4}{d^2}} = \frac{2qB}{m}.$$

**Alternatively (pendulum analogy).** Introduce $\theta$ to be the angle between the dipole moment and the axis $X$ ($\theta_0 = 0$) and rewrite the equations of translational motion in coordinates using $\omega = \dot\theta$:

$$\dot{v}_x = \dot\theta\frac{qBd}{2m}\cos\theta, \qquad \dot{v}_y = \dot\theta\frac{qBd}{2m}\sin\theta.$$

By integrating these equations, given zero initial velocity, we find how velocity depends on $\theta$:

$$v_x = \frac{qBd}{2m}\sin\theta, \qquad v_y = \frac{qBd}{2m}(1 - \cos\theta).$$

Using the expression (9) for the torque, we can write the equation of rotational motion as:

$$I\ddot\theta = \tau = -2qB(r_x v_x + r_y v_y) = -\frac{q^2 B^2 d^2}{2m}\sin\theta,$$
$$\ddot\theta + \frac{q^2 B^2}{m^2}\sin\theta = 0. \tag{12}$$

This is the equation of a mathematical pendulum of length $L$ in gravitational field $g = L(qB/m)^2$. And the equivalent question becomes what is the minimal push $\dot\theta_0$ required in the bottom position for the pendulum to reach the top position. Kinetic energy of the pendulum $K = \frac{1}{2}mL^2\dot\theta_0^2$ will be transfered to the potential energy $U = 2mgL$, from which we find:

$$\omega_{\min} = \dot\theta_0 = 2\frac{qB}{m}.$$

Both clockwise and counter-clockwise (the appropriate value of $|\omega_0|$) will work.

### Part (d): Trajectory of the center of mass

If $\vec{R}_+$ and $\vec{R}_-$ are absolute positions of the charges, we can write the equation for the angular momentum around the origin $L_O$:

$$\frac{d\vec{L}_O}{dt} = \vec{R}_+ \times (q\dot{\vec{R}}_+ \times \vec{B}) + \vec{R}_- \times (-q\dot{\vec{R}}_- \times \vec{B}) = -q\vec{B}\left(\vec{R}_+\cdot\dot{\vec{R}}_+ - \vec{R}_-\cdot\dot{\vec{R}}_-\right) = -\frac{q\vec{B}}{2}\frac{d}{dt}\left(R_+^2 - R_-^2\right).$$

After integration, we find one more conservation law (conservation of the "generalized angular momentum"):

$$\vec{L}_O + \frac{q\vec{B}}{2}\left(R_+^2 - R_-^2\right) = \text{const},$$

where $\vec{R} = \frac{1}{2}(\vec{R}_+ + \vec{R}_-)$ is the position of center of mass. We also used the fact that $q(\vec{R}_+ - \vec{R}_-) = 2q\vec{r} = \vec{p}$.

![figure](../../sources/eupho/figures/eupho-2022-T3-sol-2.png)

Initially, centre of mass coincides with origin ($\vec{R}_0 = 0$):

$$L_O(0) = I\omega_0 = 2m\frac{d^2}{4}\,2\frac{qB}{m} = qBd^2. \tag{13}$$

At asymptote, the dipole has reversed direction $\vec{p}_1 = -\vec{p}_0$ and charges are travelling along parallel lines $x = D \pm r$ with the velocity $\vec{v}_1$:

$$L_O(\infty) + B(\vec{R}_1\cdot\vec{p}_1) = m(D - r)v_1 + m(D + r)v_1 - BDp_0 = 2mD\frac{p_0 B}{m} - BDp_0 = BDp_0 = BDqd. \tag{14}$$

Since (13) equals (14), we conclude that $D = d$.

*Transcribed faithfully from the official EuPhO 2022 theory solutions (born-digital PDF, via phoxiv.org); inline math normalized from Unicode to LaTeX. Equation numbers follow the source (Eqs. 8–14). The energy argument for $\omega_{\min}$ in part (c) condenses the source's two equivalent derivations.*
