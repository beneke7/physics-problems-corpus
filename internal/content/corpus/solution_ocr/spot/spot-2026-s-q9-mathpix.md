---
id: solution-ocr-spot-2026-s-q9
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2026-q9]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
9. The temperature in which a thermodynamic phase transition happens can be plotted against pressure in a $P ( T )$ graph. This graph is called a coexistence curve and it is determined by the Clausius-Clapeyron equation:
$$
\frac { d P } { d T } = \frac { L } { T \left( v _ { 2 } - v _ { 1 } \right) }
$$
where $L$ is the latent heat per mole, and $v _ { 1 }$ and $v _ { 2 }$ are the volumes per mole of the material in each of the phases. As an illustration, the coexistence curve of a water is shown below.
![](../../../figures/solution-ocr/14ddcce4cde2c72094c3af15.jpg)
    (a) First, consider a simple phase transition - a liquid-gas phase transition. You are given that the point $\left( P _ { 0 } , T _ { 0 } \right)$ lies on the coexistence curve. Determine the equation of $P ( T )$,

making (and justifying) any relevant approximations about liquids and gases. You may assume the latent heat of vaporisation $L$ is temperature-independent. To not confuse the ideal gas constant with the radius (in later parts), you may write the former as $R _ { \mathrm { g } }$.

Solution: The approximation that we need to make is that $v _ { \text {liquid } } \ll v _ { \text {gas } }$. This is justifiable because the gaseous vapour will take up much more volume (the volume of the container) than the liquid.
Applying the Clausius-Clapeyron equation,

$$
\begin{gathered}
\frac { d P } { d T } = \frac { L } { T \left( v _ { \text {gas } } - v _ { \text {liquid } } \right) } \approx \frac { L } { T v _ { \text {gas } } } = \frac { L P } { R _ { \mathrm { g } } T ^ { 2 } } \\
\int _ { P _ { 0 } } ^ { P } \frac { d P } { P } = \frac { L } { R _ { \mathrm { g } } } \int _ { T _ { 0 } } ^ { T } \frac { d T } { T ^ { 2 } } \\
P ( T ) = P _ { 0 } \exp \left( \frac { L } { R _ { \mathrm { g } } } \left( \frac { 1 } { T _ { 0 } } - \frac { 1 } { T } \right) \right)
\end{gathered}
$$

From now on, we shall let $P _ { \text {sat } } ( T )$ denote the saturation pressure; that is, the pressure that lies on the coexistence curve (the $P ( T )$ found previously) for a given temperature. Consider a container held at a fixed external pressure $P _ { \text {ext } }$. By definition, ordinary boiling occurs at a temperature $T _ { \mathrm { b } }$, whereby

$$
P _ { \mathrm { sat } } \left( T _ { \mathrm { b } } \right) = P _ { \mathrm { ext } }
$$

In the following parts, we shall study the dynamics of nucleation, referring to the initial formation of a microscopic vapour bubble inside a liquid.
For the following parts, assume that:

i. The liquid and vapour are both at a temperature $T$.
ii. The vapour inside the microscopic bubbles can be treated as having a pressure $P _ { \text {sat } } ( T )$.
iii. The surrounding bulk liquid is at a constant pressure $P _ { \text {ext } }$.
iv. The surface tension $\sigma$ is constant.
v. Gravity can be neglected for pressure variations in the liquid.
vi. The formation of bubbles is a fully reversible process.

We define the driving pressure for vapour-bubble formation as follows:

$$
\Delta P ( T ) = P _ { \mathrm { sat } } ( T ) - P _ { \mathrm { ext } } \quad \left( T > T _ { \mathrm { b } } \right)
$$

(b) For the case $T > T _ { \mathrm { b } }$, vapour bubbles can form in the liquid. Gibbs free-energy is a thermodynamic potential measuring the maximum reversible work by a thermodynamic system at constant pressure and temperature; we can use it to determine the spontaneity and energetic feasibility of phase transitions. The Gibbs free-energy can be given by
$$
G _ { \mathrm { b } } ( R ) = U + P V - T S
$$
where $U$ is internal energy, $P$ is pressure, $V$ is volume and $S$ is entropy. Find an expression for the free-energy change $\Delta G _ { \mathrm { b } } ( R )$ when forming a spherical bubble of vapour of radius $R$. You must explain the physical meaning and the signs of each term in your answer.

Solution: There are two components of $\Delta G _ { \mathrm { b } } ( R )$ :


i. Surface free energy due to surface tension: Its magnitude is given by $\sigma A =$ $4 \pi R ^ { 2 } \sigma$. It is positive because it costs energy to create a free surface. This can be interpreted as the internal energy of the bubble, $U$.
ii. Pressure-volume energy due to driving pressure: Its magnitude is given by $V \Delta P ( T ) = \frac { 4 } { 3 } \pi R ^ { 3 } \Delta P ( T )$. It is negative because the formation of the vapour is thermodynamically favoured when $T > T _ { \mathrm { b } }$, since it is above boiling point.

These are the two competing effects at play here. Since the process is reversible, there is no entropy change. We hence obtain

$$
\Delta G _ { \mathrm { b } } ( R ) = 4 \pi R ^ { 2 } \sigma - \frac { 4 } { 3 } \pi R ^ { 3 } \Delta P ( T )
$$

(c) Determine expressions for the critical radius $R _ { \mathrm { c } , \mathrm { b } }$ where $\Delta G _ { \mathrm { b } } ( R )$ is maximum, and the corresponding nucleation barrier height (maximum free-energy barrier) $\Delta G _ { \mathrm { b } } ^ { * }$.

Solution: We simply differentiate $\Delta G _ { \mathrm { b } } ( R )$ with respect to $R$, and set the derivative equal to 0 to find the (non-zero) critical radius:

$$
\begin{gathered}
\frac { d \left( \Delta G _ { \mathrm { b } } ( R ) \right) } { d R } = 8 \pi R \sigma - 4 \pi R ^ { 2 } \Delta P ( T ) = 0 \\
R _ { \mathrm { c } , \mathrm {~b} } = \frac { 2 \sigma } { \Delta P ( T ) }
\end{gathered}
$$

The corresponding nucleation barrier height is

$$
\Delta G _ { \mathrm { b } } ^ { * } = \frac { 16 \pi \sigma ^ { 3 } } { 3 ( \Delta P ( T ) ) ^ { 2 } }
$$

Continue working in the regime $T > T _ { \mathrm { b } }$, so that bubble nucleation is relevant. You may treat $\Delta P$ as roughly constant during a short time interval. A vapour bubble of radius $R ( t )$ expands in an incompressible, ideal liquid of mass density $\rho$. Neglect viscous and dissipative effects, and assume that the container of liquid is large.
Assume the liquid around the bubble to be incompressible, and that the resulting liquid velocity field $\mathbf { u } = u ( r , t ) \hat { \mathbf { r } }$ is purely radial, where $r > R ( t )$ is the distance from the center of the bubble, outside the bubble.

(d) Derive an expression for $u ( r , t )$, in terms of $R ( t ) , \dot { R } ( t )$ and $r$. Show your working clearly.
Hint: If needed, the continuity equation is $\nabla \cdot \mathbf { v } = 0$, where $\mathbf { v }$ is the velocity field of the liquid. For a purely radial vector field $\mathbf { v } = v _ { r } \hat { \mathbf { r } }$, the divergence in spherical coordinates is given by $\nabla \cdot \mathbf { v } = \frac { 1 } { r ^ { 2 } } \frac { \partial } { \partial r } \left( r ^ { 2 } v _ { r } \right)$.

Solution: Using the hint, we have

$$
\frac { 1 } { r ^ { 2 } } \frac { \partial } { \partial r } \left( r ^ { 2 } u ( r , t ) \right) = 0
$$


This implies that

$$
r ^ { 2 } u ( r , t ) = A ( t )
$$

for some function $A ( t )$ that only depends on time.
We can identify what $A ( t )$ is based on the boundary condition at the interface: the liquid at the surface ( $r = R$ ) must move with the surface, hence $u ( R ( t ) , t ) = \dot { R } ( t )$. This gives us

$$
A ( t ) = ( R ( t ) ) ^ { 2 } \dot { R } ( t )
$$

Hence,

$$
u ( r , t ) = \frac { A ( t ) } { r ^ { 2 } } = \frac { ( R ( t ) ) ^ { 2 } \dot { R } ( t ) } { r ^ { 2 } }
$$

Alternatively, one can just conserve volume flow across any spherical surface and get the same result.

(e) Hence, show that
$$
\rho f _ { 1 } ( R , \dot { R } , \ddot { R } ) = \Delta P - f _ { 2 } ( R )
$$
for some functions $f _ { 1 } ( R , \dot { R } , \ddot { R } )$ and $f _ { 2 } ( R )$ that depend on the given parameters. Find the functions $f _ { 1 } ( R , \dot { R } , \ddot { R } )$ and $f _ { 2 } ( R )$.

Solution: Since $f _ { 1 }$ depends on $\ddot { R }$, this is a good hint that we should write an energy conservation equation, so that we can differentiate with respect to time to extract out a $\ddot { R }$ term. Hence,

$$
\frac { d } { d t } ( T + V ) = 0
$$

First, we can determine the bulk kinetic energy of the liquid outside the bubble. We make use of the previous part to do so:

$$
\begin{gathered}
T = \iiint _ { V } \frac { 1 } { 2 } \rho ( u ( r , t ) ) ^ { 2 } d V = \int _ { R ( t ) } ^ { \infty } \frac { 1 } { 2 } \rho ( u ( r , t ) ) ^ { 2 } \left( 4 \pi r ^ { 2 } d r \right) \\
= 2 \pi \rho R ^ { 4 } \dot { R } ^ { 2 } \int _ { R ( t ) } ^ { \infty } \frac { d r } { r ^ { 2 } } = 2 \pi \rho R ^ { 3 } \dot { R } ^ { 2 }
\end{gathered}
$$

The potential energy $V$ is just the free-energy associated with the formation of the bubble, as per part (b). Hence,

$$
V = 4 \pi R ^ { 2 } \sigma - \frac { 4 } { 3 } \pi R ^ { 3 } \Delta P
$$

(We have accounted for the driving work by the pressure in this term, by absorbing it in as an effective potential.)
Putting these together in the energy conservation equation, we have:

$$
\begin{gathered}
2 \pi \rho \left( 3 R ^ { 2 } \dot { R } ^ { 3 } + 2 R ^ { 3 } \dot { R } \ddot { R } \right) + \left( 8 \pi \sigma R - 4 \pi R ^ { 2 } \Delta P \right) \dot { R } = 0 \\
\rho \left( R \ddot { R } + \frac { 3 } { 2 } \dot { R } ^ { 2 } \right) = \Delta P - \frac { 2 \sigma } { R }
\end{gathered}
$$


which is of the form we desire. Hence, the required functions are:

$$
\begin{gathered}
f _ { 1 } ( R , \dot { R } , \ddot { R } ) = R \ddot { R } + \frac { 3 } { 2 } \dot { R } ^ { 2 } \\
f _ { 2 } ( R ) = \frac { 2 \sigma } { R }
\end{gathered}
$$

Let $T _ { \mathrm { R } }$ be the temperature where a bubble of radius $R$ remains in mechanical equilibrium, under the conditions and assumptions of the previous parts. Clearly, $T _ { \mathrm { R } } \neq T _ { \mathrm { b } }$. We denote $\Delta T = T _ { \mathrm { R } } - T _ { \mathrm { b } }$.
(f) Assuming that $\Delta T \ll T _ { \mathrm { b } }$, determine an expression for $\Delta T$. [3]

Solution: Using part (e), or by applying the Young-Laplace equation, we see that at mechanical equilibrium,

$$
P _ { \mathrm { sat } } \left( T _ { \mathrm { R } } \right) - P _ { \mathrm { ext } } = \frac { 2 \sigma } { R }
$$

We can perform a linearisation:

$$
P _ { \mathrm { sat } } \left( T _ { \mathrm { R } } \right) = P _ { \mathrm { sat } } \left( T _ { \mathrm { b } } + \Delta T \right) \approx P _ { \mathrm { sat } } \left( T _ { \mathrm { b } } \right) + \left. \frac { d P _ { \mathrm { sat } } } { d T } \right| _ { T = T _ { \mathrm { b } } } \Delta T
$$

Recall that by definition, $T _ { \mathrm { b } }$ satisfies $P _ { \text {sat } } \left( T _ { \mathrm { b } } \right) = P _ { \text {ext } }$. And, using the ClausiusClapeyron equation, we have $\frac { d P _ { \text {sat } } } { d T } \approx \frac { L P _ { \text {sat } } } { R _ { \mathrm { g } } T ^ { 2 } }$.
Combining all the results, we eventually obtain

$$
\Delta T = \frac { 2 \sigma R _ { \mathrm { g } } T _ { \mathrm { b } } ^ { 2 } } { R L P _ { \mathrm { ext } } }
$$
