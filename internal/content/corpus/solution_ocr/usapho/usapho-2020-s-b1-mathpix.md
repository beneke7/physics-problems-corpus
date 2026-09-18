---
id: solution-ocr-usapho-2020-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2020-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question B1
String Cheese

a. When a faucet is turned on, a stream of water flows down with initial speed $v _ { 0 }$ at the spout. For this problem, we define $y$ to be the vertical coordinate with its positive direction pointing up.
Assuming the water speed is only affected by gravity as the water falls, find the speed of water $v ( y )$ at height $y$. Define the zero of $y$ such that the equation for $v ^ { 2 }$ has only one term and find $y _ { 0 }$, the height of the spout.

Solution
We can use energy conservation to answer this question. For a bit of water with mass $m$, the total energy $E$ is the sum of the kinetic and gravitational potential energies,

$$
\begin{equation*}
E = \frac { 1 } { 2 } m v ^ { 2 } + m g y . \tag{B1-1}
\end{equation*}
$$

(With this sign convention, $g \approx 10 \mathrm {~m} / \mathrm { s } ^ { 2 }$ is positive. As $y$ decreases, so does the potential energy.)

As the bit of water falls, its energy remains constant, and is equal to the initial value of

$$
\begin{equation*}
E = \frac { 1 } { 2 } m v _ { 0 } ^ { 2 } + m g y _ { 0 } . \tag{B1-2}
\end{equation*}
$$

Equating eliminating $E$ from equations B1-1 and B1-2, we have

$$
\frac { 1 } { 2 } m v ^ { 2 } + m g y = \frac { 1 } { 2 } m v _ { 0 } ^ { 2 } + m g y _ { 0 } ,
$$

and solving for $v$, we get

$$
v = \sqrt { v _ { 0 } ^ { 2 } + 2 g \left( y _ { 0 } - y \right) }
$$

The equation for $v ^ { 2 }$ has three terms, but we were asked to choose the zero of $y$ such that there is only one. Evidently, two of the terms must cancel, and these must be the two constant terms, since the final term varies with $y$.
That means we need

$$
v _ { 0 } ^ { 2 } + 2 g y _ { 0 } = 0 .
$$

Solving for $y _ { 0 }$, the vertical position of the spout is

$$
y _ { 0 } = \frac { - v _ { 0 } ^ { 2 } } { 2 g }
$$


With this choice of the zero of $y$, the equation for $v$ simplifies to

$$
\begin{equation*}
v = \sqrt { - 2 g y } . \tag{B1-3}
\end{equation*}
$$

We note that the result of this equation is real because $y < 0$ at the spout, and decreases as the water falls, so this equation shows that $v$ is real and increases as the water falls.

b. Assume that the stream of water falling from the faucet is cylindrically symmetric about a vertical axis through the center of the stream. Also assume that the volume of water per unit time exiting the spout is constant, and that the shape of the stream of water is constant over time.
In this case, the radius $r$ of the stream of water is a function of vertical position $y$. Let the radius at the faucet be $r _ { 0 }$. Using your result from part (a), find $r ( y )$.
If $r ( y )$ is not constant, it implies that the water has some radial velocity during its fall, in contradiction to our assumptions in part (a) that the motion is purely vertical. You may assume throughout the problem that any such radial velocity is negligibly small.

## Solution

The same volume of water must fall through any horizontal cross-section of the stream each second because water doesn't disappear during its fall, and its density if constant. That volume per unit time $Q$ is the cross-sectional area of the stream multiplied by the speed of the water in the vertical direction. As an equation,

$$
\begin{equation*}
Q = v \pi r ^ { 2 } . \tag{B1-4}
\end{equation*}
$$

$Q$ is the same at all $y$, and is equal to its initial value of

$$
\begin{equation*}
Q = v _ { 0 } \pi r _ { 0 } ^ { 2 } . \tag{B1-5}
\end{equation*}
$$

Eliminating $Q$ from B1-4 and B1-5 and solving for $r$ gives

$$
r = r _ { 0 } \sqrt { \frac { v _ { 0 } } { v } } .
$$

Plugging in our equation B1-3 for $v$,

$$
r = r _ { 0 } \sqrt [ 4 ] { \frac { v _ { 0 } ^ { 2 } } { - 2 g y } } .
$$

c. The water-air interface has some surface tension, $\sigma$. The effect of surface tension is to change the pressure in the stream according to the Young-Laplace equation,
$$
\Delta P = \sigma \left( \frac { 1 } { r } + \frac { 1 } { R } \right) ,
$$

where $\Delta P$ is the difference in pressure between the stream and the atmosphere and $R$ is the radius of curvature of the vertical profile of the stream, visualized below. ( $R < 0$ for the stream of water; the radius of curvature would be positive only if the stream profile curved inwards.)
![](../../../figures/solution-ocr/f25f36be0f3b94a63f93c739.jpg)
For this part of the problem, we assume that $| R | \gg | r |$, so that the curvature of the vertical profile of the stream can be ignored. Also assume that water is incompressible.
Accounting for the pressure in the stream, find a new equation relating for $r ( y )$ in terms of $\sigma , r _ { 0 } , v _ { 0 }$, and $\rho$, the density of water. You do not need to solve the equation for $r$.

## Solution

Our conservation of energy approach from part (b) needs to be modified to account for the work done against pressure. As we look further down in the stream, the radius is smaller. This means the pressure is higher there, and the water is slowed compared to when we assumed only gravity acted on the water.

The result of accounting for changes in pressure in a flow where no energy is dissipated is the Bernoulli equation,

$$
\frac { 1 } { 2 } \rho v ^ { 2 } + \rho g y + P = \frac { 1 } { 2 } \rho v _ { 0 } ^ { 2 } + \rho g y _ { 0 } + P _ { 0 }
$$

where $P _ { 0 }$ is the pressure in the stream at the spout.
Using the Young-Laplace equation to replace $P$ and $P _ { 0 }$, we have

$$
\frac { 1 } { 2 } \rho v ^ { 2 } + \rho g y + \frac { \sigma } { r } = \frac { 1 } { 2 } \rho v _ { 0 } ^ { 2 } + \rho g y _ { 0 } + \frac { \sigma } { r _ { 0 } } .
$$

If we substitute in $y _ { 0 } = - \frac { v _ { 0 } ^ { 2 } } { 2 g }$ and $v = v _ { 0 } \frac { r _ { 0 } ^ { 2 } } { r ^ { 2 } }$, this becomes

$$
\frac { 1 } { 2 } \rho v _ { 0 } ^ { 2 } \frac { r _ { 0 } ^ { 4 } } { r ^ { 4 } } + \rho g y + \frac { \sigma } { r } = \frac { 1 } { 2 } \rho v _ { 0 } ^ { 2 } - \rho g \frac { v _ { 0 } ^ { 2 } } { 2 g } + \frac { \sigma } { r _ { 0 } } .
$$

This may be simplified to

$$
\frac { 1 } { 2 } \rho v _ { 0 } ^ { 2 } \frac { r _ { 0 } ^ { 4 } } { r ^ { 4 } } + \rho g y = \sigma \left( \frac { 1 } { r _ { 0 } } - \frac { 1 } { r } \right)
$$

d. After falling for some distance, the water stream usually breaks into smaller droplets. This occurs because small random perturbations to the shape of the stream grow over time, eventually breaking the stream into apart.

For the rest of this problem we ignore the change in the radius of the stream due to changing speed of the water, as considered earlier. Instead, we examine small random variations in the radius of the stream.

Random variations can be broken down into a sum of sinusoidal variations in stream radius, each with a different wavenumber $k$. We can analyze these different sinusoidal variations independently.
Consider a stream of water whose radius obeys

$$
r ( y ) = r _ { 0 } + A \cos ( k y ) ,
$$

where $A \ll r _ { 0 }$ is the perturbation amplitude. To analyze such a stream, it is sufficient to consider only the thickest and thinnest parts of the stream.
Accounting for both sources of curvature, find a condition on $r _ { 0 }$ and $k$ such that the size of perturbations increases with time.
![](../../../figures/solution-ocr/49d9345b342603a2b191d62c.jpg)

## Solution

If the size of the perturbation increases with time, water must be flowing from the thin parts of the stream to the thick parts. For that to happen, the pressure needs to be higher in the thin parts of the stream than in the thick parts of the stream so that the pressure gradient will force water towards the thick parts, eventually breaking the stream into droplets.
We consider a small patch with side lengths $h$ on the surface of the stream at the thinnest part of the stream. The pressure is

$$
\Delta P _ { \mathrm { thin } } = \sigma \left( \frac { 1 } { r _ { \mathrm { thin } } } + \frac { 1 } { R _ { \mathrm { thin } } } \right) .
$$

And at the thickest part of the stream,

$$
\Delta P _ { \text {thick } } = \sigma \left( \frac { 1 } { r _ { \text {thick } } } + \frac { 1 } { R _ { \text {thick } } } \right) .
$$

We are looking for the wavenumbers such that

$$
\Delta P _ { \text {thin } } > \Delta P _ { \text {thick } } .
$$


Using the Young-Laplace equation, this becomes

$$
\sigma \left( \frac { 1 } { r _ { \text {thin } } } + \frac { 1 } { R _ { \text {thin } } } \right) > \sigma \left( \frac { 1 } { r _ { \text {thick } } } + \frac { 1 } { R _ { \text {thick } } } \right) .
$$

Dropping the common factor $\sigma$,

$$
\left( \frac { 1 } { r _ { \text {thin } } } + \frac { 1 } { R _ { \text {thin } } } \right) > \left( \frac { 1 } { r _ { \text {thick } } } + \frac { 1 } { R _ { \text {thick } } } \right) .
$$

To simplify this further, we will need to find $r$ and $R$ in terms of $A$ and $k$, the variables given in the problem statement.
$r$ is the thickness of the stream, which from the equation given, varies sinusoidally. So

$$
\begin{aligned}
r _ { \text {thin } } & = r _ { 0 } - A . \\
r _ { \text {thick } } & = r _ { 0 } + A .
\end{aligned}
$$

We are going to need $\frac { 1 } { r }$ to use in the Young Laplace equation, so we make the approximations

$$
\begin{gathered}
\frac { 1 } { r _ { \text {thin } } } \approx \frac { 1 } { r _ { 0 } } + \frac { A } { r _ { 0 } ^ { 2 } } . \\
\frac { 1 } { r _ { \text {thick } } } \approx \frac { 1 } { r _ { 0 } } - \frac { A } { r _ { 0 } ^ { 2 } } .
\end{gathered}
$$

(To find these, recall $\frac { 1 } { 1 - \epsilon } \approx 1 + \epsilon$ for small $\epsilon$.)
The inequality now becomes

$$
\frac { 1 } { r _ { 0 } } + \frac { A } { r _ { 0 } ^ { 2 } } + \frac { 1 } { R _ { \text {thin } } } > \frac { 1 } { r _ { 0 } } - \frac { A } { r _ { 0 } ^ { 2 } } + \frac { 1 } { R _ { \text {thick } } } .
$$

This simplifies to

$$
\frac { 2 A } { r _ { 0 } ^ { 2 } } > \frac { 1 } { R _ { \text {thick } } } - \frac { 1 } { R _ { \text {thin } } } .
$$

Next we need to determine the radius of curvature $R$ of the sinusoidal as a function of $k$ and $A$.


To do this, we compare the sinusoidal function and a circle at small deviations from the thickest part of the stream.
Recall that, for small $\theta$,

$$
\cos \theta \approx 1 - \frac { 1 } { 2 } \theta ^ { 2 } ,
$$

which means that for small $x$,

$$
y _ { \mathrm { sinusoidal } } = A \cos ( k x ) \approx A \left( 1 - \frac { 1 } { 2 } k ^ { 2 } x ^ { 2 } \right) .
$$

Next we consider a circle of radius $R$. If a particle moves along such a circle at speed $v$, its acceleration is $v ^ { 2 } / R$. This means that if the particle moves forward for a short time $t$, it moves forward a distance $v t$ and falls a distance $\frac { 1 } { 2 } \frac { v ^ { 2 } } { R } t ^ { 2 }$. If we set $v t = x$, then the $y$ position of the particle is given by

$$
y _ { \mathrm { circle } } \approx y _ { 0 } - \frac { 1 } { 2 } \frac { x ^ { 2 } } { R }
$$

Comparing $y _ { \text {circle } }$ and $y _ { \text {sinusoidal } }$, they give the same motion if $A k ^ { 2 } = \frac { 1 } { R }$.
Then

$$
\begin{aligned}
& \frac { 1 } { R _ { \text {thin } } } = - A k ^ { 2 } . \\
& \frac { 1 } { R _ { \text {thick } } } = A k ^ { 2 } .
\end{aligned}
$$

Putting these into the inequality,

$$
\frac { 2 A } { r _ { 0 } ^ { 2 } } > 2 A k ^ { 2 } .
$$

This simplifies to

$$
k < \frac { 1 } { r _ { 0 } } .
$$

So the perturbations will grow as long as they have a wavenumber greater than one over the radius, or equivalently when the wavelength of the perturbation is longer than the circumference of the stream.

This result was discovered experimentally by Plateau and derived theoretically by Rayleigh. The breaking up of a stream into droplets is called the Plateau-Rayleigh instability.
