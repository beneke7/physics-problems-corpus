---
id: solution-ocr-gpho-2019-theory-solutions-t3
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2019_theory_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2019-t3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem T3. RayleighTaylor instability (9 points) Part A. Instability growth rate (4 points)

i. (1 pt) As can be seen from the figures, what effectively happens is that a small volume of the upper liquid (a cylinder of diameter $a$ and height $x$ ) is swapped with a same volume of the lower liquid.
(0.3 pts)

Since we want to find the change in potential energy, we're interested in how much the vertical coordinate of the small volume changes. That change is equal to $x$ since both volumes are touching the horizontal symmetry line, albeit from different sides.
(0.2 pts)

We can then write the change in potential energy of the upper liquid as

$$
\Delta \Pi _ { 2 } = - \Delta m _ { 2 } g x = - \Delta V \rho _ { 2 } g x = - \frac { \pi a ^ { 2 } x } { 4 } \rho _ { 2 } g x = - \frac { \pi a ^ { 2 } } { 4 } \rho _ { 2 } g x ^ { 2 } .
$$

(0.2 pts)

Similarly, the lower half experiences a change in potential energy of

$$
\Delta \Pi _ { 1 } = \Delta m _ { 1 } g x = \Delta V \rho _ { 1 } g x = \frac { \pi a ^ { 2 } x } { 4 } \rho _ { 1 } g x = \frac { \pi a ^ { 2 } } { 4 } \rho _ { 1 } g x ^ { 2 } .
$$

(0.2 pts)

The total change is then

$$
\Delta \Pi = \Delta \Pi _ { 1 } + \Delta \Pi _ { 2 } = - \frac { \pi a ^ { 2 } } { 4 } \left( \rho _ { 2 } - \rho _ { 1 } \right) g x ^ { 2 } .
$$

(0.1 pts)
ii. (1 pt) Since the liquid is incompressible, all of the liquid will start moving with the same speed along the O-tube. (0.4 pts) The total mass of the liquid is

$$
\begin{equation*}
M = M _ { \text {top } } + M _ { \text {bottom } } = \frac { \pi a ^ { 2 } } { 4 } \pi R \rho _ { 2 } + \frac { \pi a ^ { 2 } } { 4 } \pi R \rho _ { 1 } = \frac { \pi ^ { 2 } a ^ { 2 } R } { 4 } \left( \rho _ { 1 } + \rho _ { 2 } \right) . \tag{0.3pts}
\end{equation*}
$$

The total kinetic energy is then simply

$$
\begin{equation*}
K = \frac { M v ^ { 2 } } { 2 } = \frac { \pi ^ { 2 } a ^ { 2 } R } { 8 } \left( \rho _ { 1 } + \rho _ { 2 } \right) v ^ { 2 } . \tag{0.3pts}
\end{equation*}
$$

iii. (1 pt) According to the conservation of energy, $K + \Delta \Pi =$ const. In other words,

$$
\begin{equation*}
\frac { \pi ^ { 2 } a ^ { 2 } R } { 8 } \left( \rho _ { 1 } + \rho _ { 2 } \right) v ^ { 2 } - \frac { \pi a ^ { 2 } } { 4 } \left( \rho _ { 2 } - \rho _ { 1 } \right) g x ^ { 2 } = \text { const. } \tag{0.2pts}
\end{equation*}
$$

The time derivative of $x ^ { 2 }$ is $2 x \dot { x } = 2 x v$ (chain rule) and the derivative of $v ^ { 2 }$ is $2 v \dot { v } = 2 v a$, where we have used that acceleration is the derivative of velocity. Therefore, the time derivative of the conservation of energy yields

$$
\begin{equation*}
\frac { \pi ^ { 2 } a ^ { 2 } R } { 8 } \left( \rho _ { 1 } + \rho _ { 2 } \right) 2 v a - \frac { \pi a ^ { 2 } } { 4 } \left( \rho _ { 2 } - \rho _ { 1 } \right) g 2 x v = 0 . \tag{0.3pts}
\end{equation*}
$$

The speed cancels out and we can express the acceleration as

$$
\begin{equation*}
a = \frac { \rho _ { 2 } - \rho _ { 1 } } { \rho _ { 2 } + \rho _ { 1 } } \frac { 2 g } { \pi R } x . \tag{3}
\end{equation*}
$$

(0.1 pts)

The acceleration is indeed propotional to the displacement, $x$.

Note that this corresponds to an exponential increase in displacement following $x ( t ) = x _ { 0 } \mathrm { e } ^ { \gamma t }$. This can be verified by taking a time derivative of said displacement two times:

$$
\begin{array} { r }
v ( t ) = \frac { \mathrm { d } x ( t ) } { \mathrm { d } t } = \gamma x _ { 0 } \mathrm { e } ^ { \gamma t } , \\
a ( t ) = \frac { \mathrm { d } a ( t ) } { \mathrm { d } t } = \gamma ^ { 2 } x _ { 0 } \mathrm { e } ^ { \gamma t } = \gamma ^ { 2 } x ( t ) . \tag{0.2pts}
\end{array}
$$

This follows exactly the same form as found in (3). Therefore,

$$
\begin{equation*}
\gamma = \sqrt { \frac { 2 } { \pi } \frac { \rho _ { 2 } - \rho _ { 1 } } { \rho _ { 2 } + \rho _ { 1 } } \frac { g } { R } } \tag{0.2pts}
\end{equation*}
$$

and the interface will start growing exponentially, demonstrating the Rayleigh Taylor instability.
iv. (1 pt) In this case, it is more convenient consider angular displacements and angular accelerations. All the subsequent reasoning stays effectively the same with the main difference being that the displacements and accelerations are replaced with the angular equivalents.

Suppose that the upper hemisphere is displaced by a small angle $\alpha \ll 1$. This causes the centre of mass of the upper and lower hemisphere to shift slightly. Let us consider how the potential energy of the upper hemisphere changes. Note that the centre of mass is at height $\frac { 3 } { 8 } R$ from the sphere's centre. The center of mass will move along a circle of the same radius and is displaced by a small angle $\alpha$.
(0.1 pts) The change in the vertical coordinate is then given by $\Delta h =$ $( 1 - \cos \alpha ) \frac { 3 } { 8 } R$. We can use small angle approximations $\cos \alpha \simeq$ $1 - \frac { \alpha ^ { 2 } } { 2 }$ to get $\Delta h = \frac { 3 } { 16 } R \alpha ^ { 2 }$. The change in the potential energy is then

$$
\begin{equation*}
\Delta \Pi _ { 2 } = - M _ { 2 } g \Delta h = - \frac { 3 } { 16 } R M _ { 2 } g \alpha ^ { 2 } , \tag{0.1pts}
\end{equation*}
$$

where $M _ { 2 } = \frac { 2 } { 3 } \pi R ^ { 3 } \rho _ { 2 }$ is the mass of the upper hemisphere. Similarly,

$$
\begin{equation*}
\Delta \Pi _ { 1 } = M _ { 1 } g \Delta h = \frac { 3 } { 16 } R M _ { 1 } g \alpha ^ { 2 } , \tag{0.1pts}
\end{equation*}
$$

and so the total change in the potential energy is

$$
\begin{equation*}
\Delta \Pi = \Delta \Pi _ { 1 } + \Delta \Pi _ { 2 } = - \frac { 3 } { 16 } R \left( M _ { 2 } - M _ { 1 } \right) g \alpha ^ { 2 } . \tag{0.1pts}
\end{equation*}
$$

The kinetic energy can be found by noting that the sphere will start rotating with an angular velocity $\omega = \frac { \mathrm { d } \alpha } { \mathrm { d } t }$, and if the moment of inertia of the system is $I$, then the kinetic energy is given by

$$
\begin{equation*}
K = \frac { I \omega ^ { 2 } } { 2 } . \tag{0.1pts}
\end{equation*}
$$

The moment of inertia of a sphere is $\frac { 2 } { 5 } M R ^ { 2 }$. The same holds for a hemisphere because the mass distribution from the axis holds the same shape. The total moment of inertia is therefore $I = \frac { 2 } { 5 } \left( M _ { 1 } + M _ { 2 } \right) R ^ { 2 }$ and so

$$
\begin{equation*}
K = \frac { 1 } { 5 } \left( M _ { 1 } + M _ { 2 } \right) R ^ { 2 } \omega ^ { 2 } . \tag{0.2pts}
\end{equation*}
$$


The total energy is then given by

$$
K + \Delta \Pi = \frac { 1 } { 5 } \left( M _ { 1 } + M _ { 2 } \right) R ^ { 2 } \omega ^ { 2 } - \frac { 3 } { 16 } R \left( M _ { 2 } - M _ { 1 } \right) g \alpha ^ { 2 } = \text { const. }
$$

(0.1 pts)

The time derivative of $\omega ^ { 2 }$ is $2 \omega \dot { \omega } = 2 \omega \epsilon$, similarly $\frac { \mathrm { d } \alpha ^ { 2 } } { \mathrm {~d} t } = 2 \alpha \omega$. Taking a time derivative of the conservation of energy thus yields

$$
\begin{equation*}
\frac { 1 } { 5 } \left( M _ { 1 } + M _ { 2 } \right) R ^ { 2 } 2 \omega \epsilon - \frac { 3 } { 16 } R \left( M _ { 2 } - M _ { 1 } \right) g 2 \alpha \omega = 0 . \tag{0.1pts}
\end{equation*}
$$

Therefore,

$$
\epsilon = \frac { 15 } { 16 } \frac { M _ { 2 } - M _ { 1 } } { M _ { 2 } + M _ { 1 } } \frac { g } { R } \alpha = \frac { 15 } { 16 } \frac { \rho _ { 2 } - \rho _ { 1 } } { \rho _ { 2 } + \rho _ { 1 } } \frac { g } { R } \alpha ,
$$

and

$$
\begin{equation*}
\gamma = \sqrt { \frac { 15 } { 16 } \frac { \rho _ { 2 } - \rho _ { 1 } } { \rho _ { 2 } + \rho _ { 1 } } \frac { g } { R } } . \tag{0.1pts}
\end{equation*}
$$

Notably, this differs from the answer of the previous part only by a numerical factor.
Part B. Stabilization due to surface tension (3 points)
i. (1 pt) In the limit case $d = d _ { 0 }$, when any small perturbations occur, surface tension is not enough to hold them back and they start growing exponentially (slowly at the beginning but faster later on). First note that the total volume of the liquid remains fixed.
(0.3 pts)

This means that any amount of top liquid that gets pushed through the interface causes exactly the same amount of bottom liquid to pass to the upper region.
(0.1 pts)

This is enough to figure out the simplest (and indeed, the most stable) way the system can evolve, in the form of two bulges, one corresponding to the upper liquid trying to push down and the other one to the lower liquid trying to push up. (0.1 pts) The sketch is shown below. Finding the exact shape of the interface is more difficult and involves writing down the force balance for a small piece of the interface.
![](../../../figures/solution-ocr/dfe822398863bcb790e40140.jpg)
ii. (1 pt) Deformations can now happen along the $z$-axis. Since the length of slit is longer along that direction, the radius of curvature of the surface is smaller and so the surface tensions resists the weight of the upper liquid less. This means that the instabilities along $z$-axis start occurring much earlier than along the $x$-axis. The overall shape of the interface in the $y - z$-intersection stays the same as in the previous part, an approximately sinusoidal shape with a wavelength equalling to $l$.
(0.2 pts)

There must also be a bulge in the $x - y$-direction because otherwise there could not be any displaced liquid along the interface. This time there will only be one bulge, corresponding to either the upper or lower liquid pushing through to the other side.
(0.2 pts)

Notably the limiting factor for this type of instability still comes from the $x - y$-intersection, because the radius of curvature is greatest along that direction. Because the number of bulges is smaller than in the previous part, the radius of curvature is bigger and the force holding the liquid back must be smaller as well. This is consistent with the fact that this type of instability start occurring before the one described in the previous part.

Distance $l / 4$ corresponds to the peaks of the sinusoid-like shape, but with opposite amplitudes. This means that both cross-sections have a singular bulge, but in opposite directions.
(0.2 pts)

The sketches are given below. Notably, they can be interchanged because the shape in the $z$-direction can be flipped along the $z$-axis, swapping the cross-sections.
![](../../../figures/solution-ocr/ab3c20a57b4211e451556324.jpg)
![](../../../figures/solution-ocr/6d7ff3bdb890d60cd6ad5be5.jpg)
(0.4 pts)
iii. (1 pt) First, let us take the origin of the $x$-axis to be at the axis of symmetry (see figure) and the height of the interface from the horizontal symmetry axis be $y ( x )$. The boundary conditions are $y \left( \pm d _ { 1 } / 2 \right) = 0$.
(0.1 pts)


![](../../../figures/solution-ocr/e57d9b35615a48e800362b00.jpg)
The interface will be slowly expanding due to the instability, but since the expansion is slow, we can treat it as being almost at an equilibrium. This means that the difference of pressures between the bottom and top side is compensated by the surface tension.
(0.1 pts)

The pressure of the top and bottom liquid are the same at $y = 0$, let that be $p _ { 0 }$. The pressure of the upper liquid at $y ( x )$ is then $p _ { 2 } ( x ) = p _ { 0 } - \rho _ { 2 } g y ( x )$ and of the lower liquid $p _ { 1 } ( x ) = p _ { 0 } - \rho _ { 1 } g y ( x )$. Thus, the difference in pressure at the interface is given by

$$
\begin{equation*}
\Delta p = p _ { 1 } ( x ) - p _ { 2 } ( x ) = \left( \rho _ { 2 } - \rho _ { 1 } \right) g y ( x ) . \tag{0.1pts}
\end{equation*}
$$

This is balanced by the surface tension. It is well-known that the difference in pressure from surface tension is given by $\Delta p = \sigma / r$. Note that there is no factor of 2 because the curving is only along one axis (the other is negligible due to $l \gg d _ { 1 }$ ). The balance gives

$$
\begin{equation*}
\left( \rho _ { 2 } - \rho _ { 1 } \right) g y ( x ) = \frac { \sigma } { r } . \tag{4}
\end{equation*}
$$

(0.1 pts)

Now we need to express $r$ in terms of $x$ and $y ( x )$. For this, let us consider the situation given below:

By considering two points separated horizontally by a distance $\mathrm { d } x$, we see that these points span an angle $\mathrm { d } \alpha$ as viewed from the centre of curvature of the interface, where $\mathrm { d } \alpha$ is the difference in the slopes (in radians) of the two points. Using small angle approximations, the slopes can be expressed as $\frac { \mathrm { d } y } { \mathrm {~d} x }$. From the figure and under the assumption that perturbations are very small, we see that $\mathrm { d } x = r \mathrm {~d} \alpha . \mathrm { d } \alpha$ can be found via the difference of slopes:

$$
\mathrm { d } \alpha = \left. \frac { \mathrm { d } y } { \mathrm {~d} x } \right| _ { x } - \left. \frac { \mathrm { d } y } { \mathrm {~d} x } \right| _ { x + \mathrm { d } x } = - \frac { \mathrm { d } ^ { 2 } y } { \mathrm {~d} x } = \frac { \mathrm { d } x } { r } .
$$

From here we get

$$
\begin{equation*}
\frac { 1 } { r } = - \frac { \mathrm { d } ^ { 2 } y } { \mathrm {~d} x ^ { 2 } } , \tag{0.2pts}
\end{equation*}
$$

and we can substitute this to (4) to get

$$
\begin{equation*}
\left( \rho _ { 2 } - \rho _ { 1 } \right) g y = - \sigma \frac { \mathrm { d } ^ { 2 } y } { \mathrm {~d} x ^ { 2 } } . \tag{0.1pts}
\end{equation*}
$$

This is a simple harmonic equation with a solution of the form

$$
\begin{equation*}
y ( x ) = A \sin ( k x ) + B \cos ( k x ) , \tag{0.1pts}
\end{equation*}
$$

with $k = \sqrt { \left( \rho _ { 2 } - \rho _ { 1 } \right) g / \sigma }$.
The bulge has only one peak, is symmetric with respect to $x = 0$, and spans half a wavelength through the length of the cross-section. Therefore,

$$
\begin{equation*}
\lambda = 2 d _ { 1 } = \frac { 2 \pi } { k } = \sqrt { \frac { \sigma } { \left( \rho _ { 2 } - \rho _ { 1 } \right) g } } , \tag{0.1pts}
\end{equation*}
$$

and we see that this uniquely identifies $d _ { 1 }$, the smallest width at which the instabilities start expanding:

$$
\begin{equation*}
d _ { 1 } = \frac { 1 } { 2 } \sqrt { \frac { \sigma } { \left( \rho _ { 2 } - \rho _ { 1 } \right) g } } . \tag{0.1pts}
\end{equation*}
$$

## Part C. Gravity surface waves (2 points)

We can measure the wavelength of the waves from the aerophoto. To get the best accuracy, we should count as many peaks as possible.
(0.4 pts)

We should also keep in mind that the peaks have to be counted along the line of motion of the boat since then the generated waves are not going at an angle with respected to the measured line.
(0.4 pts)

From the figure, we measure 24 peaks along the path spanning a distance of 2710 m.
(0.4 pts)

This gives $\lambda = 2710 \mathrm {~m} / 24 = 113 \mathrm {~m}$ and the speed of the boat can be expressed as

$$
\begin{equation*}
v = \sqrt { \frac { g \lambda } { 2 \pi } } = \sqrt { \frac { 9.81 \mathrm {~m} / \mathrm { s } ^ { 2 } \cdot 113 \mathrm {~m} } { 2 \pi } } \approx 13 \mathrm {~m} / \mathrm { s } \approx 48 \mathrm {~km} / \mathrm { h } . \tag{0.8pts}
\end{equation*}
$$


![](../../../figures/solution-ocr/e96571deb3daeab49358b660.jpg)
