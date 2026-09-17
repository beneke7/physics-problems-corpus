---
id: eupho-2019-T2
problem: eupho-2019-T2
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2019
verification_status: unverified
figure_files: [eupho-2019-T2-sol-1.png]
---

## Solution

The forces acting on the ball are the static frictional force $\vec{F}$, the gravitational force, the normal force, and the Lorentz force $\vec{F}_L$ caused by the magnetic field. None of these forces perform mechanical work on the ball, so the total kinetic energy is conserved. Due to the pure rolling condition, the speed of the center $v$ is proportional to the angular speed $\omega$, so the total kinetic energy can be expressed in terms of $v^2$. As a result, the **speed of the center remains constant**, but the direction of velocity may change.

**Net Lorentz force.** The net Lorentz force acting on the ball can be expressed in terms of the velocity of the center $\vec{v}$:
$$\vec{F}_L = Q\vec{v} \times \vec{B}. \tag{1}$$
*Proof:* Denoting the charge of piece $i$ by $\Delta Q_i$ and its position vector from the center by $\vec{x}_i$, the velocity of that piece is $\vec{v}_i = \vec{v} + \vec{\omega}\times\vec{x}_i$. The net Lorentz force is
$$\vec{F}_L = \sum_i \Delta Q_i\,\vec{v}_i\times\vec{B} = \sum_i \Delta Q_i\,(\vec{v}\times\vec{B}) + \sum_i \Delta Q_i\,(\vec{\omega}\times\vec{x}_i)\times\vec{B}.$$
The second sum vanishes because terms with $\vec{x}_i$ and $-\vec{x}_i$ cancel pairwise. From the first sum $\vec{v}\times\vec{B}$ can be factored out, yielding $\vec{F}_L = Q\vec{v}\times\vec{B}$.

**Circular motion.** Since the speed is constant, the net horizontal force must be perpendicular to $\vec{v}$ at all times. $\vec{F}_L$ is always perpendicular to $\vec{v}$, so $\vec{F}$ must be as well, and $|\vec{F}|$ is constant. Therefore the net force has constant magnitude, and the center of the ball undergoes **uniform circular motion** with speed $v_0$ (see figure).

![Figure: Schematic of the rolling charged ball on a horizontal surface with $\vec{B}$ perpendicular to the surface, showing the circular orbit of radius $r$, angular speed $\Omega$, and forces $\vec{F}_L$, $\vec{F}$, $\vec{v}$, $\vec{\omega}$.](../../sources/eupho/figures/eupho-2019-T2-sol-1.png)

Newton's second law in the radial direction:
$$Qv_0 B - F = mr\Omega^2. \tag{2}$$

Pure rolling gives the kinematic constraint:
$$v_0 = R\omega = r\Omega. \tag{3}$$

**Net magnetic torque.** As the ball rolls, the moving charges form loop currents with a net magnetic moment. By analogy with the moment of inertia, $\sum_i \Delta Q_i\,x_{i,\perp}^2 = \frac{2}{5}QR^2$, so the net magnetic moment is
$$\vec{\mu} = \frac{1}{2}\vec{\omega}\sum_i \Delta Q_i\,x_{i,\perp}^2 = \frac{1}{5}QR^2\vec{\omega}.$$
The net magnetic torque (as a couple) is:
$$\vec{\tau}_L = \vec{\mu}\times\vec{B} = \frac{1}{5}QR^2\,\vec{\omega}\times\vec{B} = \frac{Q}{2m}\vec{L}\times\vec{B}, \tag{from Proof 2}$$
where $\vec{L} = \frac{2}{5}mR^2\vec{\omega}$ is the angular momentum with respect to the center.

**Precession.** Both the frictional torque $RF$ and the magnetic torque $\frac{1}{5}QR^2\omega B$ are perpendicular to $\vec{L}$, so the rotation axis precesses in the horizontal plane. To maintain pure rolling, the precession angular speed must equal $\Omega$. The equation of rotational motion during precession ($|\vec{L}|\Omega = |\dot{\vec{L}}|$):
$$\frac{1}{5}QR^2\omega B + RF = \frac{2}{5}mR^2\omega\,\Omega. \tag{4}$$

**Result.** Solving equations (2), (3), and (4) simultaneously:

$$\boxed{r = \frac{7mv_0}{6QB}, \qquad \Omega = \frac{6QB}{7m}.}$$

The center of the ball performs **uniform circular motion** with speed $v_0$, radius $r = \frac{7mv_0}{6QB}$, and angular frequency $\Omega = \frac{6QB}{7m}$.
