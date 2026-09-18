---
id: solution-ocr-spot-2025-s-q6
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2025-q6]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
6. Superconductors exhibit the Meissner effect where below a critical temperature, the superconducting material expels all magnetic fields from its interior. This effect can be visualised by magnetic field lines, which are unable to penetrate the superconducting surface, instead curving around the superconductor.
This behaviour is similar to fluid flow around a solid object, and we may draw an analogy between electromagetism and fluid dynamics. In this problem, we will exploit this analogy to discuss the Magnus effect; a phenomenon that occurs when a rotating object moves through a fluid.

(a) Consider an infinitely long conducting cylinder of radius $R$, carrying current $I$ along its axis of symmetry distributed uniformly across its cross section. Find $B ( r )$ for $r < R$.
Solution: By Ampere's Law,
$$
\oint \vec { B } \cdot d \vec { l } = \mu _ { 0 } \cdot I _ { e n c l } = \mu _ { 0 } I \frac { r ^ { 2 } } { R ^ { 2 } }
$$
This leads us directly to the result $B ( r ) = \frac { \mu _ { 0 } I r } { 2 \pi R ^ { 2 } }$.

Two straight, infinitely long cylindrical nonmagnetic conductors $C _ { + }$and $C _ { - }$, insulated from each other, overlap. They carry uniformly distributed current $I$ in and out of the paper respectively (i.e. $C _ { + }$carries a current of $I$ out of the page and $C _ { - }$carries a current of $I$ into the page. The overlapping region has zero net current). The cross sections of the conductors (shaded in the figure) are limited by circles of radius $R$ in the x-y plane, with distance $d$ between their centres.
![](../../../figures/solution-ocr/889b2fbed7d1e2757f49fa2e.jpg)


(b) Determine the magnetic field $\vec { B } ( x , y )$ in the space between the conductors. The origin is placed in the middle of the two centres.

Solution:
The magnetic field can be determined as the superposition of the fields of two cylindrical conductors. From part (a), we know that the magnetic field within a current cylinder is azimuthal and has magnitude

$$
B = \frac { \mu _ { 0 } I r } { 2 \pi R ^ { 2 } }
$$

Consider an arbitrary point within the space between the two conductors.


![](../../../figures/solution-ocr/35054583df5b0208a8581ca6.jpg)
Taking components of the magnetic fields along the $x$ and $y$ axes respectively,

$$
B _ { x } = \frac { \mu _ { 0 } r _ { 1 } I \sin \theta _ { 1 } } { 2 \pi R ^ { 2 } } - \frac { \mu _ { 0 } r _ { 2 } I \sin \theta _ { 2 } } { 2 \pi R ^ { 2 } } = 0
$$

where we have used the fact that $r _ { 1 } \sin \theta _ { 1 } = r _ { 2 } \sin \theta _ { 2 }$.

$$
\begin{aligned}
B _ { y } & = - \frac { \mu _ { 0 } r _ { 1 } I _ { 0 } \cos \theta _ { 1 } } { 2 \pi R ^ { 2 } } - \frac { \mu _ { 0 } r _ { 2 } I _ { 0 } \cos \theta _ { 2 } } { 2 \pi R ^ { 2 } } \\
& = - \frac { \mu _ { 0 } I _ { 0 } \left( r _ { 1 } \cos \theta _ { 1 } + r _ { 2 } \cos \theta _ { 2 } \right) } { 2 \pi R ^ { 2 } }
\end{aligned}
$$

But $r _ { 1 } \cos \theta _ { 1 } + r _ { 2 } \cos \theta _ { 2 } = d$. Hence,

$$
\vec { B } = - \frac { \mu _ { 0 } I d } { 2 \pi R ^ { 2 } } \hat { y }
$$

which is constant everywhere in the intersecting region.

An infinite solid superconducting cylinder of radius $R$ with symmetry axis parallel to the z-axis lies in a uniform external magnetic field of magnitude $B _ { 0 }$ parallel to the y-axis.
![](../../../figures/solution-ocr/3224abae4fe663e80480abf1.jpg)

(c) Knowing that superconductors repel magnetic fields, and using the result in part (b), show that the net magnetic field $\overrightarrow { B _ { 1 } }$ in the region $r > R$ is given by:
$$
\overrightarrow { B _ { 1 } } ( r , \theta ) = B _ { 0 } \sin \theta \left( 1 - \frac { R ^ { 2 } } { r ^ { 2 } } \right) \hat { r } + B _ { 0 } \cos \theta \left( 1 + \frac { R ^ { 2 } } { r ^ { 2 } } \right) \hat { \theta }
$$

Solution:
The net magnetic field within the cylinder is zero. To negate the external magnetic field, there must be a current distribution on the surface of the superconducting cylinder that generates a uniform magnetic field $- B _ { 0 } \hat { y }$ within the cylinder. We may apply our result from part (b), modelling the current distribution in the superconductor as the superposition of two opposite current cylinders separated by a distance $d \ll R$ (such that the intersection of the two current cylinders effectively fills the entire volume of the superconducting cylinder). The current $I$ and separation $d$ must satisfy

$$
B _ { 0 } = \frac { \mu _ { 0 } I d } { 2 \pi R ^ { 2 } }
$$

Hence, by Ampere's Law, the magnetic field outside the cylinder is effectively equal to the magnetic fields of two infinite current-carrying wires spaced a distance $d$ apart.
![](../../../figures/solution-ocr/bd96dfb58830596cf02f3d3e.jpg)
Superimposing the fields in polar coordinates, we obtain

$$
B _ { 1 , \theta } = B _ { 0 } \cos \theta + \frac { \mu _ { 0 } I } { 2 \pi } \left( \frac { 1 } { r - \frac { d } { 2 } \cos \theta } - \frac { 1 } { r + \frac { d } { 2 } \cos \theta } \right)
$$

Taking first order terms with respect to $\frac { d } { r }$, we get

$$
\begin{aligned}
B _ { 1 , \theta } & = B _ { 0 } \cos \theta + \frac { \mu _ { 0 } I d \cos \theta } { 2 \pi r ^ { 2 } } \\
& = B _ { 0 } \cos \theta \left( 1 + \frac { R ^ { 2 } } { r ^ { 2 } } \right)
\end{aligned}
$$

Similarly, we can obtain

$$
\begin{aligned}
B _ { 1 , r } & = B _ { 0 } \sin \theta - \frac { \mu _ { 0 } I } { 2 \pi r } \left( \frac { d \sin \theta } { r } \right) \\
& = B _ { 0 } \sin \theta \left( 1 - \frac { R ^ { 2 } } { r ^ { 2 } } \right)
\end{aligned}
$$

Hence, we conclude that

$$
\overrightarrow { B _ { 1 } } ( r , \theta ) = B _ { 0 } \sin \theta \left( 1 - \frac { R ^ { 2 } } { r ^ { 2 } } \right) \hat { r } + B _ { 0 } \cos \theta \left( 1 + \frac { R ^ { 2 } } { r ^ { 2 } } \right) \hat { \theta }
$$


An infinitely long solid cylinder of radius $R$ is placed in a region of incompressible, nonviscous fluid that flows from $y = - \infty$ with a uniform velocity of $U _ { 0 } \hat { y }$, past the cylinder and away towards $y = + \infty$. Consider the fluid motion in one cross-sectional plane of the cylinder.
![](../../../figures/solution-ocr/fe47547bf9b1243d84e0abd6.jpg)

(d) Draw a diagram to represent the fluid flow around the cylinder and write down an expression for $\vec { U } ( r , \theta )$, the velocity of the fluid at any point in space outside the cylinder in polar coordinates, justifying your answer.
Solution: Here, we need to make the appropriate analogy between our current superconductor setup and what we are trying to find; which is the velocity field of fluid flowing around an object. We notice a few similarities between magnetic fields and the velocity fields of fluids.
1. Just like how magnetic field lines are unable to penetrate superconductors, fluid always flows around the object; the velocity field must always be parallel to the object surface, at the object surface.
2. Gauss' Law for magnetism states that $\oint \vec { B } \cdot d \vec { S } = 0$ or $\nabla \cdot \vec { B } = 0$. This is similar to the law of continuity for fluid flow $\nabla \cdot \vec { U } = 0$.
Hence, since the governing equations for the magnetic field and velocity field are the same, and the boundary condition at the cylinder surfaces are the same in both cases, we can conclude that magnetic fields and velocity fields are exactly analogous in this context.
We therefore obtain that the velocity field is:
$$
\vec { U } ( r , \theta ) = U _ { 0 } \sin \theta \left( 1 - \frac { R ^ { 2 } } { r ^ { 2 } } \right) \hat { r } + U _ { 0 } \cos \theta \left( 1 + \frac { R ^ { 2 } } { r ^ { 2 } } \right) \hat { \theta }
$$

The cylinder is now given an angular velocity that points in the positive $z$-direction (out of the paper), inducing circular currents in the fluid around it. To model the effect of the rotation of the cylinder on the surrounding fluid, we will use the concept of circulation.
Usually, non-viscous flow has an important property of being irrotational: the circulation of velocity along any closed path within the fluid is zero.

$$
\oint \vec { v } \cdot d \vec { l } = 0
$$

However, this changes if we introduce a vortex filament; which induces long range circulatory flows in the fluid. For any closed loop that wraps around these filaments,

$$
| \oint \vec { v } \cdot d \vec { l } | = 2 \pi \Gamma
$$

where $\Gamma$ is called the circulation quantum. To illustrate this, a vortex filament (thick line) is drawn in fluid. The velocity circulation along paths $L _ { 1 } , L _ { 2 } , L _ { 5 }$ and $L _ { 6 }$ (thin lines) are all zero, whereas those for $L _ { 3 }$ and $L _ { 4 }$ are equal to $\pm 2 \pi \Gamma$. Note that circulations along $L _ { 3 }$ and $L _ { 4 }$ have opposite signs.
![](../../../figures/solution-ocr/27581843059b601e22e4501c.jpg)

(e) Model the rotation of the cylinder with a long infinite vortex filament with circulation quantum $\Gamma$ placed along the central axis of the cylinder. Find the new velocity field $\overrightarrow { U _ { 1 } } ( r , \theta )$.

Solution:
Notice that we can separate the velocity field into two components - the irrotational field $\vec { U } ( r , \theta )$, and the rotational field generated by the circulation, which we call $\vec { v } ( r , \theta )$. We may safely assume that $\vec { v } ( r , \theta )$ is rotationally symmetric, making it independent of $\theta$. Furthermore, since it only has a rotational component, we will call that $v _ { \theta } ( r )$. Using the circulation law, we obtain:

$$
\begin{aligned}
2 \pi r v _ { \theta } ( r ) & = 2 \pi \Gamma \\
v _ { \theta } ( r ) & = \frac { \Gamma } { r }
\end{aligned}
$$

We can now simply superimpose $v _ { \theta }$ and $\vec { U } ( r , \theta )$ to obtain:

$$
\vec { U } _ { 1 } ( r , \theta ) = U \sin \theta \left( 1 - \frac { R ^ { 2 } } { r ^ { 2 } } \right) \hat { r } + \left( U \cos \theta \left( 1 + \frac { R ^ { 2 } } { r ^ { 2 } } \right) + \frac { \Gamma } { r } \right) \hat { \theta }
$$


(f) Given density of fluid $\rho$, find the force per unit length $\vec { F }$ acting upon the cylinder due to the fluid flow. (Hint: One possible solution is to apply Bernoulli's equation.)
Solution: We are now almost done.
This is the Magnus effect; the rotation of the cylinder in the fluid generates an asymmetric velocity field. Hence, by Bernoulli's law, the resulting pressure field is also asymmetric, generating a net force on the object.
First, let us find the velocity field $\vec { V } ( \theta )$ at the surface of the object, since we want to integrate the fluid pressure at the object's surface to find the force. Substituting $r = R$ into $\vec { U } _ { 1 } ( r , \theta )$,
$$
\vec { V } ( \theta ) = \left( 2 U _ { 0 } \cos \theta + \frac { \Gamma } { R } \right) \hat { \theta }
$$
We apply Bernoulli's theorem, taking $p _ { 0 }$ to be the gauge pressure set at infinity:
$$
p _ { 0 } + \frac { 1 } { 2 } \rho U _ { 0 } ^ { 2 } = p ( \theta ) + \frac { 1 } { 2 } \rho V ( \theta ) ^ { 2 }
$$
Simplifying, we obtain
$$
p ( \theta ) = p _ { 0 } + \frac { 1 } { 2 } \rho U _ { 0 } ^ { 2 } \left( 1 - 4 \cos ^ { 2 } \theta \right) - \frac { \Gamma ^ { 2 } } { R ^ { 2 } } - \frac { 2 \rho \Gamma U _ { 0 } \cos \theta } { R }
$$
Hence, the force per unit length can be expressed as:
$$
\vec { F } = - \int _ { 0 } ^ { 2 \pi } p ( \theta ) R \cos \theta d \theta \hat { x } - \int _ { 0 } ^ { 2 \pi } p ( \theta ) R \sin \theta d \theta \hat { y }
$$
The only term which remains non-zero upon integration is the $\cos ^ { 2 } \theta$ term. We may simplify the equation and obtain:
$$
\begin{aligned}
\vec { F } & = \int _ { 0 } ^ { 2 \pi } 2 \rho \Gamma U _ { 0 } \cos ^ { 2 } \theta d \theta \hat { x } \\
& = 2 \pi \rho \Gamma U _ { 0 } \hat { x }
\end{aligned}
$$

| Marking Scheme: |  |  |
| :--- | :--- | :--- |
| Part | Steps | Marks |
| (a) | $\oint \vec { B } \cdot d \vec { l } = \mu _ { 0 } I \frac { r ^ { 2 } } { R ^ { 2 } }$ Correct final answer | M1 A1 |
| (b) | Idea of superposition of two opposite cylindrical currents $B ( x ) = 0$ Correct $B ( y )$ | M0.5 <br> M0.5 A1 |
| (c) | Realise that the configuration in part (b) with current $I$ satisfying $B _ { 0 } = \frac { \mu _ { 0 } I d } { 2 \pi R ^ { 2 } }$ fufills the condition that the magnetic field inside the superconductor is 0 Correct calculations for field due to superconductor, with sufficient detail Correct calculations for field due to external field | M1 <br> M1.5 <br> M0.5 |
| (d) | Correct diagram Justification on similarities in governing equations (Continuity, Gauss' Law) Justification on similarities in boundary conditions (No normal component at cylinder walls) Correct final answer | A0.5 <br> M0.5 <br> M0.5 <br> A0.5 |
| (e) | $v _ { \text {theta } } \cdot 2 \pi r = 2 \pi \Gamma$ Correct final answer | M1 <br> A1 |
| (f) | Substitution of $r = R$ to find $\vec { V } ( \theta )$ Use Bernoulli's equation to find $p = p _ { 0 } + \frac { 1 } { 2 } \rho U _ { 0 } ^ { 2 } \left( 1 - 4 \cos ^ { 2 } \theta \right) - \frac { \Gamma ^ { 2 } } { R ^ { 2 } } - \frac { 2 \rho \Gamma U _ { 0 } \cos \theta } { R } F _ { y } = 0$ Correct final answer | M0.5 <br> M1 <br> M0.5 <br> A1 |
