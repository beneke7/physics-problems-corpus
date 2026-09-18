---
id: solution-ocr-eupho-2023-t-s-t3
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2023_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2023-T3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T3: Plate between magnets - Solution

General remarks:
Calculational numerical errors - 0.2 p Dimensionally wrong answers - 0 p

## Part a) (~3 pts)

Let us analyze how the current in the metal starts to build up when we start moving the plate in the rest frame of the magnets. The free electrons in the metal try to move together with the plate in the $+ y$ direction, but a Lorentz force pointing in the $- x$ direction makes them deviate.

After some time the charge accumulation stops and the charge and current distributions do not depend on time anymore. According to Ohm's law,

$$
\vec { j } = \vec { j } _ { P } + \frac { 1 } { \varrho } \vec { v } \times \vec { B } ,
$$

where $\vec { j }$ is the total current density, $\vec { v } \times \vec { B }$ is the result of the Lorentz force, and $\vec { j } _ { P }$ is the current density caused by the electric field (and is therefore a potential field).

Inside the circular region $( r < R )$ the Lorentz term is constant, but outside it is zero. Nevertheless, the $E$-field of the accumulated charges is present there, which gives rise to a current. In the steady state considered here, the charge distribution is constant in time, and hence the total current density $\vec { j }$ is sourcefree everywhere. However, this does not hold for $\vec { j } _ { P }$ which is driven by the "sources" and "sinks" along the rim of the circular region of radius $R$. Those sources and sinks compensate exactly the sources of the Lorentz term mentioned above. Only a sourcefree jump of the total current density is allowed on the rim, resulting in the kinks on the streamlines along the boundary.
Based on these considerations, we can draw a qualitative pattern of the current flow: inside the circular disc, there is a flow in the direction of the Lorentz force and the streamlines of the created flow of current close onto themselves outside of that region as shown in the figure below.

![](../../../figures/solution-ocr/067cce011e731270d49cfc9e.jpg)
fig. 1

| Grading scheme part a) | Pts |
| :--- | :--- |
| Streamlines are continuous and arrows are consistent along each streamline and streamlines don't meet or intersect. If the streamlines are qualitatively (physically) wrong, 0 p should be given. | 1.0 |
| Twofold symmetry* with respect to $x$ axis (if axis is not indicated in any way, only 0.1 p) | 0.2 |
| Twofold symmetry with respect to $y$ axis (if axis is not indicated in any way, only 0.1 p) | 0.2 |
| Indicating the boundary of the circular region | 0.1 |
| Breaking points on the boundary (only rewarded if both inside and outside streamlines are shown) | 0.8 |
| Along the $y$-axis the direction of current density is $+ x$ inside and $- x$ outside (if axis is not indicated in any way, 0.0 p; if the direction is correct in only one rigion, 0.3 p; if there is a sign mistake only, 0.3 p) | 0.7 |
| Stating that current density is homogeneous inside is not required in part a) | 0.0 |
| Total on part a) | 3.0 |

## Part b (~5 pts)

From here on, we make use of the uniqueness of the solution to the correctly posed boundary conditions for the Maxwell equations inside the plate. We need to satisfy the condition that current density is sourceless everywhere, i.e.

$$
\begin{equation*}
\oint \vec { j } \times \overrightarrow { d l } = 0 , \tag{38}
\end{equation*}
$$

where $\vec { j }$ denotes the current density and integral is taken over an arbitrary closed loop inside the plate. The current density must satisfy the Ohm's law in differential form,

$$
\begin{equation*}
\vec { j } = \rho ^ { - 1 } ( \vec { E } + \vec { v } \times \vec { B } ) , \tag{39}
\end{equation*}
$$

where $\vec { v }$ denotes the velocity of the plate; the electric field caused by the accumulated charges $\vec { E }$ must satisfy the circulation theorem,

$$
\begin{equation*}
\oint \vec { E } \cdot \vec { d } l = 0 , \tag{40}
\end{equation*}
$$

where integration loop can be arbitrary. To close the system of equations we need to satisfy, we integrate Eq. 39 either over a closed loop entirely inside or entirely outside the circular region then we obtain zero, because for such loops $\oint \vec { v } \times \vec { B } \cdot \overrightarrow { d l } = 0$. From this we conclude that for such integration loops,

$$
\begin{equation*}
\oint \vec { j } \cdot \overrightarrow { d l } = 0 . \tag{41}
\end{equation*}
$$

Note that the electric field $\vec { E } _ { \text {pol } }$ of a polarised cylinder satisfies Eq. 40, but we must also satisfy


Eqns. $( 38,39 )$. We will look for such a solution in the form of a superposition

$$
\begin{equation*}
\vec { j } = \rho ^ { - 1 } \left( \vec { E } _ { \mathrm { pol } } + \vec { v } \times \vec { B } \right) . \tag{42}
\end{equation*}
$$

First we need to find an expression for the field $\vec { E } _ { \text {pol } }$. To that end, we can consider the electric field produced by an infinite homogeneously charged cylinder of radius $R$ and volume charge density $q$. From Gauss's law, we can conclude that inside and outside the cylinder the electric field is

$$
\vec { E } _ { + } ( \vec { r } ) = \begin{cases} \frac { 1 } { 2 \varepsilon _ { 0 } } q \vec { r } & \text { if } r \leq R , \\ \frac { 1 } { 2 \varepsilon _ { 0 } } q \frac { R ^ { 2 } } { r ^ { 2 } } \vec { r } & \text { if } r > R . \end{cases}
$$

Now we can take another similar cylinder of charge density $- q$, displaced from the first cylinder by a small displacement vector $\vec { s }$. With the origin still at the centre of the positively charged cylinder, the electric field of this negatively charged cylinder is written as $- \vec { E } _ { + } ( \vec { r } - \vec { s } )$ (which works for both inside and outside). Note that in the overlapping area of the two cylinders, the charge density is zero.

![](../../../figures/solution-ocr/0b93c2d062feff7af30843c6.jpg)
fig. 2

We consider the limit $| \vec { s } | \rightarrow 0$ while keeping the product $q \vec { s } = - \vec { P }$ constant, which represents the volume density of the dipole moments (i.e. the polarisation), constant. In this case, the field inside can be calculated as

$$
\begin{equation*}
\vec { E } _ { \text {inside } } = \vec { E } _ { + } ( \vec { r } ) + \vec { E } _ { - } ( \vec { r } ) = \vec { E } _ { + } ( \vec { r } ) - \vec { E } _ { + } ( \vec { r } - \vec { s } ) = - \frac { 1 } { 2 \varepsilon _ { 0 } } \vec { P } \tag{43}
\end{equation*}
$$

which is homogeneous.
Outside, the field is given by

$$
\vec { E } _ { \text {outside } } = \vec { E } _ { + } ( \vec { r } ) - \vec { E } _ { + } ( \vec { r } - \vec { s } ) = \frac { 1 } { 2 \varepsilon _ { 0 } } q R ^ { 2 } \left( \frac { \vec { r } } { r ^ { 2 } } - \frac { \vec { r } - \vec { s } } { | \vec { r } - \vec { s } | ^ { 2 } } \right) .
$$

Expanding the second term in the bracket up to first order $( | \vec { s } | \ll | \vec { r } | )$ :

$$
\frac { \vec { r } - \vec { s } } { | \vec { r } - \vec { s } | ^ { 2 } } \approx \frac { \vec { r } - \vec { s } } { r ^ { 2 } - 2 \vec { r } \vec { s } } \approx \frac { \vec { r } - \vec { s } } { r ^ { 2 } } \left( 1 + 2 \frac { \vec { r } \vec { s } } { r ^ { 2 } } \right) .
$$

Substituting this into the formula of $\vec { E } _ { \text {outside } }$ and simplifying:

$$
\vec { E } _ { \text {outside } } = \frac { 1 } { 2 \varepsilon _ { 0 } } R ^ { 2 } \frac { 2 \vec { r } ( \vec { r } \vec { P } ) - r ^ { 2 } \vec { P } } { r ^ { 4 } } .
$$

This is the field of an ideal two-dimensional electric dipole. From this general formula we can obtain an expression for the field along the $y$ axis:

$$
\begin{equation*}
\vec { E } _ { \text {outside } } = - \frac { 1 } { 2 \varepsilon _ { 0 } } \vec { P } \left( \frac { R } { r } \right) ^ { 2 } . \tag{44}
\end{equation*}
$$

The normal component of this field exhibits discontinuity $\sigma / \varepsilon$ at the boundary of the cylinder given by the surface charge density $\sigma$, which can be found again from the superposition of the two cylinders: the non-overlapping region has the shape of a crescent moon of width $s$ in the $x$ direction; this means that the width in the radial direction is $t = s \cos \varphi$, where $\varphi$ denotes the angle between the radius vector and the $x$-axis. Hence, we can find the surface charge density as $\sigma = q t = P \cos \varphi$. Due to Gauss' law, the radial electric field jumps by an amount given by the surface charge density, $\left\{ E _ { r } \right\} = \sigma / \varepsilon _ { 0 }$. This corresponds to a jump in the magnitude of the current density

$$
\begin{equation*}
\{ j \} = \rho ^ { - 1 } \sigma / \varepsilon _ { 0 } = \rho ^ { - 1 } \sigma P \cos \varphi \tag{45}
\end{equation*}
$$

which must eliminate the discontinuity due to the jump in the radial component of the Lorentz force term in Eq. (42, equal to

$$
\begin{equation*}
\left\{ \rho ^ { - 1 } ( v \times B ) _ { r } \right\} = - v B \cos \varphi . \tag{46}
\end{equation*}
$$

The cancellation occurs when $\vec { P } = - \vec { e } _ { x } v B \varepsilon _ { 0 }$. Putting all the results together, we can conclude that inside the cylinder, the current density in the plate is homogeneous and equal to

$$
\begin{equation*}
\vec { j } = \frac { 1 } { 2 } \frac { \vec { v } \times \vec { B } } { \varrho } . \tag{47}
\end{equation*}
$$

Outside the cylinder, along the $y$ axis, $\vec { B } = 0$ so that

$$
\begin{equation*}
\vec { j } = \frac { \vec { E } _ { \text {outside } } } { \varrho } = - \frac { 1 } { 2 \varepsilon _ { 0 } } \vec { P } \left( \frac { R } { r } \right) ^ { 2 } = - \frac { 1 } { 2 } \frac { \vec { v } \times \vec { B } } { \varrho } \left( \frac { R } { r } \right) ^ { 2 } . \tag{48}
\end{equation*}
$$

Now we can plot the graph:

![](../../../figures/solution-ocr/a25eb5495f3f638e02bf1a56.jpg)
fig. 3


| Grading scheme part b) | Pts |
| :--- | :--- |
| Realizing that $j$ is driven by the sum of the term $( \vec { v } \times \vec { B } ) / \varrho$ and the electric field (if only one term is considered, 0 p) | 0.5 |
| Writing the boundary condition for $j _ { P }$ and for $\vec { j }$ (or equivalent) | 0.5 |
| Guessing the solution of the 2D boundary value problem (either with analogy of a polarized dielectric cylinder or with the superposition of a 2D dipole field outside and a uniform field inside) | 1.0 |
| Calculating the electric field of a 2D dipole along the symmetry axis | 1.0 |
| Finding the appropriate weight of the dipole field (i.e. dipole moment) by matching boundary conditions | 0.5 |
| Expressing $\vec { j }$ inside and outside correctly | 0.5 |
| Plotting the graph (axis are labelled correctly, 0.1+0.1; sign changes at the rim and function jumps, 0.3, function is constant in region $[ - R , R ]$ 0.2, if the area below the curve could add up to zero 0.3) | 1.0 |
| Total on part b) | 5.0 |

Part c(~2 pts)
Method 1: integrating the force density. Only the current inside the magnetic field contributes to the force. The force acting on an infinitesimal volume element $\mathrm { d } V$ of the metal slab is given by

$$
\mathrm { d } \vec { F } = \vec { j } _ { \text {inside } } \times \vec { B } \mathrm {~d} V .
$$

Since $\vec { j } _ { \text {inside } }$ and $\vec { B }$ are uniform in the region of non zero $B$, and perpendicular, the integral simplifies to

$$
\vec { F } = \vec { j } _ { \text {inside } } \vec { B } \int \mathrm {~d} V = \vec { j } _ { \text {inside } } \times \vec { B } V = \vec { j } _ { \text {inside } } \times \vec { B } \pi R ^ { 2 } \delta
$$

Using our previous result for the current density we get

$$
\vec { F } = \frac { \pi R ^ { 2 } \delta } { 2 \varrho } ( \vec { v } \times \vec { B } ) \times \vec { B } = - \frac { \pi R ^ { 2 } \delta } { 2 \varrho } B ^ { 2 } \vec { v } .
$$

The direction of the force is opposite to the velocity of the plate, in agreement with physical intuition.

| Grading of part c) - Method 1 | Pts |
| :--- | :--- |
| Expressing the force acting on a current element | 0.5 |
| integrating over the circular region | 1.0 |
| final result (it can be given only if prefactor is correct) | 0.5 |
| Total on part c) | 2.0 |

Method 2: integrating the dissipated power.
Due to energy conservation, the mechanical power provided by the external force is dissipated in the plate in the form of Joule heat:

$$
F v = P _ { \text {dissipated } } .
$$

The volume density of the dissipated power is $\varrho j ^ { 2 }$, so the total power of dissipation can be written as an integral over the volume:

$$
P _ { \text {dissipated } } = \int _ { \text {in } } \varrho j _ { \text {inside } } ^ { 2 } \mathrm {~d} V + \int _ { \text {out } } \varrho j _ { \text {outside } } ^ { 2 } \mathrm {~d} V .
$$

The first integral simplifies due to the constant current density inside the circular region of radius $R$ :

$$
\int _ { \text {in } } \varrho j _ { \text {inside } } ^ { 2 } \mathrm {~d} V = \varrho j _ { \text {inside } } ^ { 2 } V = \frac { 1 } { 4 \varrho } v ^ { 2 } B ^ { 2 } \cdot \pi R ^ { 2 } \delta .
$$

In order to evaluate the second integral, let us calculate $j _ { \text {outside } } ^ { 2 }$ first:

$$
j _ { \text {outside } } ^ { 2 } = \frac { 1 } { 4 \varrho ^ { 2 } } R ^ { 4 } \frac { \left| r ^ { 2 } \vec { v } - 2 \vec { r } ( \vec { r } \vec { v } ) \right| ^ { 2 } } { r ^ { 8 } } B ^ { 2 } ,
$$

where the absolute value squared can be simplified as

$$
\left| r ^ { 2 } \vec { v } - 2 \vec { r } ( \vec { r } \vec { v } ) \right| ^ { 2 } = r ^ { 4 } v ^ { 2 } - 4 r ^ { 2 } ( \vec { r } \vec { v } ) ( \vec { r } \vec { v } ) + 4 r ^ { 2 } ( \vec { r } \vec { v } ) ( \vec { r } \vec { v } ) = r ^ { 4 } v ^ { 2 }
$$

so the quantity $j _ { \text {outside } } ^ { 2 }$ depends on the distance $r$ only (and not on the polar angle):

$$
j _ { \text {outside } } ^ { 2 } = \frac { 1 } { 4 \varrho ^ { 2 } } R ^ { 4 } \frac { \left. v ^ { 2 } \right) } { r ^ { 4 } } B ^ { 2 } .
$$

Now the power dissipated outside the circular region $( r > R )$ can be written as:

$$
\int _ { \text {out } } \varrho j _ { \text {outside } } ^ { 2 } \mathrm {~d} V = \int _ { R } ^ { \infty } \frac { 1 } { 4 \varrho ^ { 2 } } R ^ { 4 } \frac { v ^ { 2 } } { r ^ { 4 } } B ^ { 2 } \cdot 2 \delta \pi r \mathrm {~d} r
$$

Let us evaluate the integral:

$$
\int _ { \text {out } } \varrho j _ { \text {outside } } ^ { 2 } \mathrm {~d} V = \frac { v ^ { 2 } B ^ { 2 } \pi R ^ { 4 } \delta } { 2 \varrho } \int _ { R } ^ { \infty } \frac { \mathrm { d } r } { r ^ { 3 } } = \frac { v ^ { 2 } B ^ { 2 } \pi R ^ { 4 } \delta } { 2 \varrho } \frac { 1 } { 2 R ^ { 2 } }
$$

It is an interesting coincidence that the power dissipated inside and outside is the same. Now the total power of dissipation is known and the force can be calculated:

$$
F = \frac { P _ { \text {dissipated } } } { v } = \frac { \pi R ^ { 2 } \delta } { 2 \varrho } B ^ { 2 } v .
$$

| Grading of part c) - Method 2 | Pts |
| :--- | :--- |
| Expressing the force in terms of the dissipated power | 0.5 |
| integrating over the circular region | 0.3 |
| integrating over the outer region | 0.7 |
| final result (it can be given only if prefactor is correct) | 0.5 |
| Total on part c) | 2.0 |

An incorrect method of obtaining the correct answer. The correct solution described above can be carried out with minor modifications when using the reference frame of the plate, where the circular region of the magnetic field moves with velocity $- \vec { v }$.


The only difference is that the Lorentz force $e \vec { v } \times \vec { B }$ acting on the charge carriers in the cylinder frame is now replaced by the Coulomb force $e \vec { E } _ { B }$, where $\vec { E } _ { B } = \vec { v } \times \vec { B }$ is the electric field resulting now from the Lorentz transformation.

What we need to notice is that there is no electric field outside of the cylinder ( $r > R$ ) at large distances in the $z$ direction from the plate. Indeed, there are clearly no fields there (neither $\vec { B }$ nor $\vec { E }$ ) in the cylinder's frame. Using the Lorentz transformation it is clear that no fields can emerge in our new frame. Meanwhile, outside the cylinder and inside the plate, there is definitely an electric field driving the current flow as derived above. The tangential-to-theplate electric field cannot be discontinuous at the surface because the electrostatic field (in the cylinder's frame) is potential. Hence, outside the cylinder and outside the plate, there is also an electric field in the neighbourhood of the plate, It is caused by the charge density formed on and in the plate, the generation of which is described in the solution of Part a). From large distances, however, these charges are seen as an electric dipole, whose field vanishes inversely proportional to the cubed distance.

A tempting but incorrect approach is trying to describe the motion of the cylinder in the plate's frame as a discontinuous stepping motion of the cylinders: at the current position of the cylinder, the magnetic flux disappears and at the same time reappears at a small distance away from its previous position. According to the Faradey's law, the disappearing flux will produce circular clockwise fieldlines of $\vec { E }$, and the reappearing flux will produce slightly displaced counterclockwise fieldlines. The corresponding fields and their superposition $\vec { E } _ { s } ( \vec { r } )$ can be easily calculated, see below. The result turns out to be exactly the same as the field $\vec { E } _ { o } ( \vec { r } )$ obtained above for the field inside the plate. However, the equivalence of these fields is just a coincidence (there is a good reason for this coincidence: in both cases, the field is obtained as a superposition of the fields produced by two overlapping cylinders). Furthermore, there is a fundamental difference: in reality, the field $\vec { E } _ { o } ( \vec { r } )$ is only observed in the plate (at $z \approx 0$ ) and disappears at $z \gg R$; meanwhile, in the stepping cylinder model, the field $\vec { E } _ { s } ( \vec { r } )$ remains the same regardless of the value of $z$.

The reason why the stepping cylinder model gives an incorrect result - producing an electric field in those places where there clearly is none - lies in the theory of relativity. A continuously moving (not stepping) cylinder obtains a surface charge, because the current density and the charge density together form a 4 -vector. There is a bound surface current on the surface of the cylinder (creating the magnetic field inside), and as the cylinder moves, the Lorentz transformation tells us that there will now also be a surface charge creating an electric field both inside and outside the cylinder. So, with a moving cylinder, the changing flux creates an electric field outside which is cancelled out by the surface charges on the cylinder. Inside the cylinder, these two fields add up constructively.

In what follows, we analyse mathematically the model of stepping cylinders. By considering two almost overlapping circles with a short time interval $\tau$ between, it is clear that any flux change occurs on rim (see fig. 1). This changing flux gives rise to an induced electric field which makes the charge carriers move inside the plate resulting electrical currents.

![](../../../figures/solution-ocr/2a8f81d90b706ad7d84a3aac.jpg)
fig. 1

Considering the red region in the figure as the initial non-zero $B$ field, and the green region as the nonzero $B$ field after time $\tau$, the yellow overlapping region corresponds to a non changing magnetic flux, while red on the right is decreasing, and green on the left is increasing. The average rate of change of $B$-field in the two regions is $\pm B / \tau$, respectively.

The induced electric field can be found as a superposition of the electric fields generated by the flux change in the two overlapping circular regions. For one circular region with increasing $B$-field in the $+ z$ direction, the magnitude of the electric field can be found from Faraday's law applied for a circular $E$ field line:

$$
E _ { + } ( r ) \cdot 2 \pi r = \frac { \mathrm { d } \Phi } { \mathrm {~d} t }
$$

where the rate of enclosed flux change is given by

$$
\frac { \mathrm { d } \Phi } { \mathrm {~d} t } = \begin{cases} \pi r ^ { 2 } \frac { B } { \tau } , & \text { if } r \leq R , \\ \pi R ^ { 2 } \frac { B } { \tau } , & \text { if } r > R . \end{cases}
$$

From here the modulus of the induced electric field can be expressed. It is convenient to write the result in the vectorial form with the help of position vector $\vec { r }$, unit vector $\vec { e } _ { z }$ and Lenz's law:

$$
\vec { E } _ { + } ( \vec { r } ) = \begin{cases} \frac { 1 } { 2 } \frac { B } { \tau } \vec { r } \times \vec { e } _ { z } , & \text { if } r \leq R , \\ \frac { 1 } { 2 } \frac { B } { \tau } \frac { R ^ { 2 } } { r ^ { 2 } } \vec { r } \times \vec { e } _ { z } , & \text { if } r > R . \end{cases}
$$

A similar formula gives the $E$-field generated by the region of decreasing magnetic flux, we only need to change the sign and replace $\vec { r }$ with $\vec { r } - \vec { v } \tau$.

![](../../../figures/solution-ocr/169a000995a42bf00373d409.jpg)
fig. 2


Now take the superposition of the induced electric fields produced by the two overlapping circular regions. Between the two magnets $( r \leq R )$ we get

$$
\vec { E } _ { \mathrm { inside } } = \vec { E } _ { + } + \vec { E } _ { - } = \frac { 1 } { 2 } \frac { B } { \tau } \vec { r } \times \vec { e } _ { z } - \frac { 1 } { 2 } \frac { B } { \tau } ( \vec { r } - \vec { v } \tau ) \times \vec { e } _ { z } = \frac { 1 } { 2 } \vec { v } \times \vec { e } _ { z } B .
$$

Using the differential form of Ohm's law $\vec { j } = \vec { E } / \varrho$, we can conclude that the current density in the metal plate in the region $r \leq R$ is uniform,

$$
\vec { j } _ { \text {inside } } = \frac { 1 } { 2 \varrho } \vec { v } \times \vec { B } ,
$$

where we used that $\vec { B } = B \vec { e } _ { z }$.
Similarly, in the region $r > R$ we get:

$$
\vec { E } _ { \text {outside } } = \vec { E } _ { + } + \vec { E } _ { - } = \frac { 1 } { 2 } \frac { B } { \tau } R ^ { 2 } \left[ \frac { \vec { r } } { r ^ { 2 } } - \frac { \vec { r } - \vec { v } \tau } { | \vec { r } - \vec { v } \tau | ^ { 2 } } \right] \times \vec { e } _ { z } .
$$

Expanding the second term in the bracket up to first order $( | \vec { v } \tau | \ll | \vec { r } | )$ :

$$
\frac { \vec { r } - \vec { v } \tau } { | \vec { r } - \vec { v } \tau | ^ { 2 } } \approx \frac { \vec { r } - \vec { v } \tau } { r ^ { 2 } - 2 \vec { r } \vec { v } \tau } \approx \frac { \vec { r } - \vec { v } \tau } { r ^ { 2 } } \left( 1 + 2 \frac { \vec { r } \vec { v } \tau } { r ^ { 2 } } \right) .
$$

Substituting this into the formula of $\vec { E } _ { \text {outside } }$ and simplifying:

$$
\vec { E } _ { \text {outside } } = \frac { 1 } { 2 } B R ^ { 2 } \frac { r ^ { 2 } \vec { v } - 2 \vec { r } ( \vec { r } \vec { v } ) } { r ^ { 4 } } \times \vec { e } _ { z } .
$$

Finally, the current density in the region $r > R$ is the following

$$
\vec { j } _ { \text {outside } } = \frac { 1 } { 2 \varrho } R ^ { 2 } \frac { r ^ { 2 } \vec { v } - 2 \vec { r } ( \vec { r } \vec { v } ) } { r ^ { 4 } } \times \vec { B }
$$

| Grading of incorrect approach | Pts |
| :--- | :--- |
| part a) - same as the original marking scheme | 3.0 |
| If everything is done correctly - 2.0 p | 2.0 |
| part c) - same as the original marking scheme | 2.0 |
| Total for incorrect approach | 7.0 |

Note no. 1. Although it was not asked in the problem, it is fascinating that the streamlines in the region $r > R$ are circles. To prove this statement, take a circle of radius $a$ with center located at vector $\vec { a }$ such that $\vec { a } \vec { p } = 0$ (see fig. 3). The position vectors of the points located on this circle satisfy the equation

$$
| \vec { r } - \vec { a } | ^ { 2 } = a ^ { 2 } ,
$$

Which can be rearranged in the form

$$
2 \vec { a } \vec { r } - r ^ { 2 } = 0
$$

We will show that $\vec { j } _ { \text {outside } }$ is tangent to such a circle, regardless of the radius $a$.

![](../../../figures/solution-ocr/6f94c0e85d98750428d8ea80.jpg)
fig. 3

Consider the scalar product

$$
\vec { j } _ { \text {outside } } ( \vec { r } - \vec { a } ) \sim \left[ r ^ { 2 } \vec { p } - 2 \vec { r } ( \vec { r } \vec { p } ) \right] ( \vec { r } - \vec { a } )
$$

Opening the brackets and using the equality $\vec { a } \vec { p } = 0$ we get:

$$
\vec { j } _ { \text {outside } } ( \vec { r } - \vec { a } ) \sim \left( 2 \vec { a } \vec { r } - r ^ { 2 } \right) ( \vec { r } \vec { p } )
$$

which equals zero.
Note no. 2: The skin effect. Finally we need to discuss the applicability limits of the solution obtained above. We have assumed that at each point on the plate, the current density is constant across the entire $z$-directional intersection of the plate. This requires the skin depth to be much greater than the thickness of the plate. The skin effect emerges due to the fact that for resistive media, the evolution of the magnetic field can be described by a diffusion equation

$$
\frac { \partial \vec { B } } { \partial t } = D \frac { \mathrm {~d} ^ { 2 } \vec { B } } { \mathrm {~d} z ^ { 2 } } ,
$$

where the diffusivity $D = \rho / \mu _ { 0 }$. This means that for a very fast moving magnet, there is no time for the magnetic field to penetrate into the plate. Since any current is surrounded by a magnetic field according to Ampère's circuital law, if there is no magnetic field, there can be no current, either. Consequently, the current will flow only in a narrow boundary layer of the plate. For a diffusive process, during a characteristic time $\tau$, the penetration depth is estimated as $\sqrt { D \tau }$. With $\tau$ estimated as $R / v$, we get the condition

$$
\rho R \gg \mu _ { 0 } v \delta ^ { 2 }
$$

which is well satisfied for any metallic plates with reasonable orders of magnitude (e.g. $\delta \sim 1 \mathrm {~mm} , R \sim 1 \mathrm {~cm}$, $v \sim 1 \mathrm {~m} / \mathrm { s }$ ).
