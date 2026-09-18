---
id: solution-ocr-eupho-2018-t-s
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2018_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2018-T1, eupho-2018-T2, eupho-2018-T3]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## 1 Three balls

Let the ball $A$ is given an initial velocity $v$ along the axis $Y$, which is perpendicular to the rod. The total momentum of the system conserves, therefore the center-of-mass (CM) of the system moves with a constant velocity:

$$
v _ { \mathrm { CM } } = \frac { m v } { 3 m } = \frac { v } { 3 }
$$

along $Y$. In what follows, we will work in the CM frame of reference, which is an inertial system of reference. Therefore, in the CM frame the laws of conservation of energy, momentum, and the angular momentum hold true. The initial velocities of the three balls along $Y$ are:

$$
v _ { A } = \frac { 2 v } { 3 } , \quad v _ { B } = v _ { C } = - \frac { v } { 3 } .
$$

Correspondingly, the total kinetic energy of the balls is:

$$
E = \frac { m v ^ { 2 } } { 2 } \left( \frac { 4 } { 9 } + \frac { 1 } { 9 } + \frac { 1 } { 9 } \right) = \frac { m v ^ { 2 } } { 3 }
$$

and the total angular momentum with respect to the CM equals:

$$
L = m \frac { 2 v } { 3 } \ell - m \frac { v } { 3 } ( - \ell ) = m v \ell .
$$

In any moment the three balls form an isosceles triangle with an angle $2 \varphi$ at the top vertex. The distance between $A$ and $C$ is minimal when either $\varphi = 0$, or $\dot { \varphi } = 0$. For $\varphi = 0$, however, the laws of conservation are not consistent with the rigidity of the rods. Therefore, at the minimal distance $\dot { \varphi } = 0$, and in this particular instance the system behaves as a rigid body whose moment of inertia with respect to the CM can be obtained through:

$$
\begin{equation*}
I = \frac { L ^ { 2 } } { 2 E } = \frac { 3 } { 2 } m l ^ { 2 } . \tag{1}
\end{equation*}
$$

On the other hand, the moment of inertia $I$ could be found independently from geometric considerations. Although, $I$ could be found using the distances from the balls to the CM (medicentre of a triangle), it is more convenient to use this relatively unknown formula for the moment of inertia of a collection of point masses with respect to CM:

$$
I = \frac { \sum _ { i , j } m _ { i } m _ { j } \left( \mathbf { r } _ { i } - \mathbf { r } _ { j } \right) ^ { 2 } } { \sum _ { i } m _ { i } } .
$$

In our case:

$$
\begin{equation*}
I = \frac { m ^ { 2 } } { 3 m } \left( A B ^ { 2 } + B C ^ { 2 } + A C ^ { 2 } \right) = \frac { m } { 3 } \left( 2 \ell ^ { 2 } + d ^ { 2 } \right) . \tag{2}
\end{equation*}
$$

From (1) and (2), we obtain the minimal distance:

$$
d = \ell \sqrt { \frac { 5 } { 2 } } \approx 1.58 \ell
$$

## 2 Solenoid

Magnetic field gives rise to magnetization of water molecules, i.e. each of the molecules becomes a magnetic dipole. Inhomogeneous magnetic field exerts a force to a magnetic dipole. Water molecules being diamagnetic are pushed away from the region of stronger magnetic field. Water reaches a state with mechanical equilibrium where the magnetic force is balanced by a force due to pressure gradient. Hence, in mechanical equilibrium, regions with stronger magnetic field correspond to smaller pressures. When the current in the solenoid is increased, the pressure differences grow, and at a certain moment, a region will appear where the pressure is smaller than the saturation pressure of the water vapour. This is the moment when water starts boiling.

To begin with, let us discuss possible reasonable approximations. First, we can neglect the water column pressure which is only 2 to 4 percents of the atmospheric pressure. Second, the saturation pressure of water vapour under normal conditions is also much smaller than the atmospheric one and therefore can be neglected. Thus we can say that boiling starts when the pressure drop due to magnetic field becomes equal to $p _ { 0 }$.

So, we need to relate the pressure difference caused by the magnetic field to the magnetic field strength. Notice that if a region with magnetic field $B$ is filled with water, the magnetic field energy density is $B ^ { 2 } / \left( 2 \mu _ { r } \mu _ { 0 } \right)$; meanwhile, if there is no water, the energy density is $B ^ { 2 } / \left( 2 \mu _ { 0 } \right)$. So, we can ascribe the energy density difference

$$
\Delta w = \left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right)
$$

to the interaction of water and magnetic field. Next, consider the following thought experiment. We push away a small volume $V$ of water from the neighbourhood of a point $P$ in the water where the magnetic field strength is $B$; the displaced water fills in a narrow layer at the top of the water surface of equal volume. Assuming that the magnetic field is negligibly small at the top, by comparing the initial and final states, we conclude that the total interaction energy is reduced by $V \left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right)$. When pushing away water from $P$ we perform mechanical work $p V$, where $p$ is the pressure at point $P$. At the upper surface of the water, the moving interface performs mechanical work $p _ { 0 } V$ so that the net mechanical work performed by water during this process is $V \left( p _ { 0 } - p \right)$. Due to energy conservation law, $V \left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right) = V \left( p _ { 0 } - p \right)$ so that

$$
p _ { 0 } = p + \left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right) .
$$

Note that the way how we derived this relationship is completely analogous to how the Bernoulli law is derived, and in fact, the obtained equality can be interpreted as a modified Bernoulli law for zero speed where the volume density of potential energy in gravity field $\rho g h$ is replaced with $\left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right)$ - the energy density of magnetic interaction. This equality can be simplified by noting that $\mu _ { r } ^ { - 1 } - 1 = - \chi / \mu _ { r } \approx - \chi$ so that

$$
p _ { 0 } - p = - \chi B ^ { 2 } / \left( 2 \mu _ { 0 } \right) .
$$

As discussed above, the boiling condition is $p \approx 0$, hence

$$
B = \sqrt { - 2 \mu _ { 0 } p _ { 0 } / \chi } .
$$

Finally, we apply the formula for magnetic field strength inside a long solenoid $B = \mu _ { 0 } I N / \ell$ to find

$$
I = \frac { \ell } { N } \sqrt { \frac { 2 p _ { 0 } } { - \chi \mu _ { 0 } } } = 4.4 \mathrm { kA } .
$$


## 3 Staircase

A Since $n = - y / h = ( x / \lambda ) ^ { 2 / 3 } , x ( n ) = n ^ { 2 / 3 } \lambda$. The distance between the steps is

$$
d _ { n } = x ( n + 1 ) - x ( n ) \approx \frac { \mathrm { d } x ( n ) } { \mathrm { d } n } = \frac { 2 } { 3 } \lambda n ^ { - 1 / 3 } = n ^ { - 1 / 3 } \cdot 30 \mu \mathrm {~m} .
$$

B Equilibrium energy value, being minimum, must be stable against small perturbations of the crystal shape. Allowed are perturbations which conserve the total volume of the crystal. In other words a small horizontal displacement of one step must be accompanied by an equal and opposite displacement of another step.

The energy change $\epsilon _ { n } ( \delta )$ associated with a small horizontal displacement $\delta$ of the $n$-th step is

$$
\begin{aligned}
\epsilon _ { n } ( \delta ) = \mu \left( \left( d _ { n } + \delta \right) ^ { \nu } - d _ { n } ^ { \nu } + \left( d _ { n + 1 } \right. \right. & \left. - \delta ) ^ { \nu } - d _ { n + 1 } ^ { \nu } \right) \approx \\
& \approx \mu \nu \left( d _ { n } ^ { \nu - 1 } - d _ { n + 1 } ^ { \nu - 1 } \right) \delta .
\end{aligned}
$$

In order for $\epsilon _ { n } ( \delta ) + \epsilon _ { m } ( - \delta )$ to be zero for arbitrary $n$ and $m$ it is necessary to require that the factor in the parentheses does not depend on $n$ :

$$
d _ { n } ^ { \nu - 1 } - d _ { n + 1 } ^ { \nu - 1 } = \text { const. }
$$

Substituting $d _ { n } \propto n ^ { - 1 / 3 }$, we get ${ } ^ { 1 }$ :

$$
\begin{gathered}
n ^ { ( 1 - \nu ) / 3 } - ( n + 1 ) ^ { ( 1 - \nu ) / 3 } \approx \frac { 1 - \nu } { 3 } n ^ { ( 1 - \nu ) / 3 - 1 } = \text { const } , \\
\frac { 1 - \nu } { 3 } - 1 = 0 \Longrightarrow \nu = - 2 .
\end{gathered}
$$

The interaction energy corresponds to that of two dipoles in 2D:

$$
E ( d ) \propto \frac { 1 } { d ^ { 2 } } .
$$

[^0]

[^0]:    ${ } ^ { 1 }$ Trivial solutions $\nu = 0$ and $\nu = 1$ imply that the total energy within given constraints does not depend on the shape of the crystal.
