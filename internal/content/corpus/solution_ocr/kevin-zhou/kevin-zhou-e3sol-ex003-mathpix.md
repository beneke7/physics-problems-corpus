---
id: solution-ocr-kevin-zhou-e3sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e3-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3
Consider two long, coaxial cylindrical shells of radii $a < b$ and length $L$. The volume between the two shells is filled with material with conductivity $\sigma ( r ) = k / r$. What is the resistance between the shells, and the charge density?

Solution
To find the resistance, we compute the current $I$ when a voltage $V$ is applied between the shells. By symmetry, in the steady state the current density must be

$$
\mathbf { J } ( \mathbf { r } ) = \frac { I } { 2 \pi r L } \hat { \mathbf { r } } .
$$

On the other hand, we also know that

$$
V = \int \mathbf { E } \cdot d \mathbf { r } = \int _ { a } ^ { b } \frac { I } { 2 \pi r L \sigma } d r = \frac { I ( b - a ) } { 2 \pi k L }
$$

from which we conclude

$$
R = \frac { b - a } { 2 \pi k L } .
$$

Note that the radial electric field between the shells is constant, so

$$
\mathbf { E } ( \mathbf { r } ) = \frac { V } { b - a } \hat { \mathbf { r } } .
$$


To find the charge density, it's quickest to use Gauss's law in differential form in cylindrical coordinates. We use the form of the divergence derived in E1, giving

$$
\rho = \epsilon _ { 0 } \nabla \cdot \mathbf { E } = \frac { \epsilon _ { 0 } } { r } \frac { \partial \left( r E _ { r } \right) } { \partial r } = \frac { \epsilon _ { 0 } } { r } \frac { V } { b - a } .
$$

It might be surprising that $\rho$ is nonzero. That's because in most textbook examples the conductivity is uniform, so that $\nabla \cdot \mathbf { E } = \nabla \cdot ( \mathbf { J } / \sigma ) = ( \nabla \cdot \mathbf { J } ) / \sigma = 0$. In that case there can only be charge on the surfaces of conductors.
[2] Problem 4 (Cahn). A washer is made of a material of resistivity $\rho$. It has a square cross section of length $a$ on a side, and its outer radius is $2 a$. A small slit is made on one side and wires are connected to the faces exposed.
![](../../../figures/solution-ocr/28f296984267135571353b60.jpg)
Since the washer has an irregular shape, the current distribution inside it is complicated: it spreads out from the first wire, goes around the washer, and converges into the second wire. However, the situation is simpler if we glue a perfectly conducting square plate, of side length $a$, to each exposed face. Find the resistance in this case.

Solution. Since the plates are conducting, the potential doesn't depend on the radius $r$ at the plates themselves, so by rotational symmetry, it doesn't depend on $r$ anywhere in the washer. Therefore, there is no radial current; all the current flows tangentially, so we can think of the washer as a set of radial rings in parallel.

Split the washer into a bunch of radial rings with width $d r$. We see that $r$ ranges from $a$ to $2 a$. Each little ring has resistance $\rho ( 2 \pi r ) / ( a d r )$, and they are all effectively connected in parallel. Thus,

$$
\frac { 1 } { R } = \frac { 1 } { \rho } \int _ { a } ^ { 2 a } d r \frac { a } { 2 \pi r } = \frac { 1 } { \rho } \frac { a } { 2 \pi } \log 2
$$

which implies $R = ( 2 \pi / \log 2 ) \rho / a$.
[3] Problem 5 (BAUPC 1995). An electrical signal can be transferred between two metallic objects buried in the ground, where the current passes through the Earth itself. Assume that these objects are spheres of radius $r$, separated by a horizontal distance $L \gg r$, and suppose both objects are buried a depth much greater than $L$ in the ground. If the Earth has uniform resistivity $\rho$, find the approximate resistance between the terminals. (Hint: consider the superposition principle.)


Solution. We can consider one object at a time, and then use superposition to find the combined effect of both. Suppose that current $I$ comes out from one of the objects. Placing this object at the origin, we have

$$
\mathbf { J } = \frac { I } { 4 \pi r ^ { 2 } } \hat { \mathbf { r } } , \quad \mathbf { E } = \frac { \rho I } { 4 \pi r ^ { 2 } } \hat { \mathbf { r } } .
$$

Therefore, the potential difference between this object and where the other object would be is

$$
V = \frac { \rho I } { 4 \pi } \int _ { r } ^ { L } \frac { d r } { r ^ { 2 } } \approx \frac { \rho I } { 4 \pi r }
$$

where we used $r \ll L$. Finally, the other object takes in current $I$, with its J, E, and $V$ superposing with the first object. Thus, the total potential difference is $\rho I / 2 \pi r$, so

$$
R = \frac { V } { I } = \frac { \rho } { 2 \pi r } .
$$

[3] Problem 6 (PPP 162). A plane divides space into two halves. One half is filled with a homogeneous conducting medium, and physicists work in the other. They mark the outline of a square of side $a$ on the plane and let a current $I _ { 0 }$ in and out at two of its neighboring corners. Meanwhile, they measure the potential difference $\Delta V$ between the two other corners.
![](../../../figures/solution-ocr/caa0d128aedb740eae175dbb.jpg)
Find the resistivity $\rho$ of the medium.
Solution. The surface of the plane enforces the boundary condition $\mathbf { J } \cdot \hat { \mathbf { n } } = 0$, since current can't come out of it, which is equivalent to setting $\mathbf { E } \cdot \hat { \mathbf { n } } = 0$. Then the uniqueness theorems in E1 apply.

Now, for simplicity, suppose there is only current coming in at $A$. Then one possible solution is that J points radially outward from $A$ and has (hemi)spherical symmetry, with magnitude

$$
J \cdot 2 \pi r ^ { 2 } = I _ { 0 } \Longrightarrow J = \frac { I _ { 0 } } { 2 \pi r ^ { 2 } } .
$$

This obeys the boundary condition, so it must be the unique solution. In this case,

$$
\mathbf { E } = \frac { I _ { 0 } } { 2 \pi \sigma r ^ { 2 } } \hat { \mathbf { r } }
$$

where $\sigma$ is the conductivity of the material, which implies

$$
V _ { D } - V _ { C } = \int _ { a } ^ { \sqrt { 2 } a } \frac { I _ { 0 } } { 2 \pi \sigma r ^ { 2 } } d r = \frac { I _ { 0 } } { 2 \pi \sigma a } ( 1 - 1 / \sqrt { 2 } ) .
$$


Similarly, for the case where the current is coming out of $B$, we have

$$
V _ { D } - V _ { C } = \frac { I _ { 0 } } { 2 \pi \sigma a } ( 1 - 1 / \sqrt { 2 } ) .
$$

The actual voltage drop is the superposition of the two,

$$
\Delta V = \frac { I _ { 0 } \rho } { 2 \pi a } ( 2 - \sqrt { 2 } )
$$

where $\rho = 1 / \sigma$ is the resistivity. Then $\rho$ can be calculated as

$$
\rho = \frac { 2 \pi a \Delta V } { I _ { 0 } ( 2 - \sqrt { 2 } ) } = \frac { \pi a ( 2 + \sqrt { 2 } ) \Delta V } { I _ { 0 } } .
$$

[3] Problem 7 (MPPP 174). We aim to measure the resistivity of the material of a large, thin, homogeneous square metal plate, of which only one corner is accessible. To do this, we chose points A, B, C and D on the side edges of the plate that form the corner.
![](../../../figures/solution-ocr/4efaa881326206cc2ffab913.jpg)
Points A and B are both $2 d$ from the corner, whereas C and D are each a distance $d$ from it. The length of the plate's sides is much greater than $d$, which, in turn, is much greater than the thickness $t$ of the plate. If a current $I$ enters the plate at point A , and leaves it at B , then the reading on a voltmeter connected between C and D is $V$. Find the resistivity $\rho$ of the plate material.

Solution. This problem is a harder than the previous one because it's harder to guess a current configuration that satisfies the boundary conditions, i.e. that the current density at the edges of the plate is parallel to the plate. The key is that we can use the following "image current" configuration to automatically satisfy the original problem's boundary conditions, but on an infinite plate.
![](../../../figures/solution-ocr/3af6d7e10f1275d6ac707c00.jpg)


We have a new current source and sink respectively at the reflections of $A$ and $B$ in $O$. The current sources and sinks all have magnitude $2 I$, rather than $I$, because only half of the currents at $A$ and $B$ actually enter and exit the physical plate, shaded in gray.

Now, if a current $2 I$ enters the plate, the current at a distance $r$ is $\frac { 2 I } { 2 \pi r t }$, so the electric field at a distance $r$ is $\frac { \rho I } { \pi r t }$ (pointing radially outward), so the potential is $\frac { \rho I } { \pi t } \log \left( r _ { 0 } / r \right)$ for some arbitrary $r _ { 0 }$, which we'll take to be the same for all current sources and sinks. Then

$$
V _ { C } = \frac { \rho I } { \pi t } \left( \log \left( r _ { 0 } / d \right) + \log \left( r _ { 0 } / 3 d \right) - 2 \log \left( r _ { 0 } / \sqrt { 5 } d \right) \right) = \frac { \rho I } { \pi t } \log ( 5 / 3 ) .
$$

By symmetry, $V _ { C } = - V _ { D }$. Thus,

$$
V = 2 V _ { C } = \frac { 2 \rho I } { \pi t } \log ( 5 / 3 ) , \quad \rho = \frac { \pi t } { 2 \log ( 5 / 3 ) } \frac { V } { I } .
$$

Remark
Setups like those in the previous two problems are commonly used to measure resistivities, but why do they use a complicated "four terminal" setup? Wouldn't it have been easier to just attach two terminals, send a current $I$ through them, and measure the voltage drop $V$ ? The problem with this is that it also picks up the resistance $R$ of the contacts between the terminals and the material, along with the resistances of the wires. By having a pair of terminals measure voltage alone, drawing negligible current, we avoid this problem.
