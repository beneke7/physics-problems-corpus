---
id: solution-ocr-spot-2025-s-q4
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2025-q4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
4. Part A: Scaling Laws in a Column

Consider a solid cylindrical column of diameter $d$ and height $h$ supporting a sphere of diameter $D$ on top. Assume that $D \gg d$, such that the contact area between the sphere and column is effectively the cross-sectional area of the column.

(a) Suppose the diameter of the column is just sufficient to withstand the compressive load of the sphere. How should $d$ scale with $D$, i.e. what should be the exponent $\alpha$ such that $d \propto D ^ { \alpha }$ ? (Hint: The maximum stress that the solid column can withstand is a constant. Assume even stress across the contact area.)

Solution: We have the weight of the sphere $W \propto D ^ { 3 }$, and the area $A$ in contact with the column is $\propto d ^ { 2 }$. Therefore, the stress is

$$
\sigma = \frac { W } { A } \propto \frac { D ^ { 3 } } { d ^ { 2 } }
$$

Since the maximum $\sigma$ is a constant, we have $d \propto D ^ { 3 / 2 }$.

Another possible mode of structural failure is buckling. According to the Euler-Bernoulli beam theory, the deflection $w$ of a beam is related to its bending moment $M$ by

$$
M ( x ) = E I \frac { d ^ { 2 } w } { d x ^ { 2 } }
$$

where $E$ is the Young's modulus of the material (a constant), and $I = \int r ^ { 2 } d A$ is the second moment of area about its central axis (analogous to the moment of inertia, but involving the cross-sectional area $d A$ instead of the mass $d m$ ).
![](../../../figures/solution-ocr/27afd283b0ba53a62e12240a.jpg)
![](../../../figures/solution-ocr/ef853aba45de06e3e2e5c07a.jpg)
For example, in the figure above, a horizontal load $P$ is applied inwards to both ends of a beam, causing deflections $w ( x )$. The horizontal load causes a bending moment $M ( x ) =$ $P w ( x )$. Above a critical load $P _ { \text {crit } }$, the beam will undergo buckling.

(b) Consider the sphere-column system introduced in part (a). Given that $h \propto D$, how should $d$ scale with $D$ in order to prevent buckling?

Solution: We know that $M = P w$, so

$$
E I \frac { d ^ { 2 } w } { d x ^ { 2 } } + P w = 0
$$

The general solution to this equation is

$$
w = A \sin \left( \sqrt { \frac { P } { E I } } x \right) + B \cos \left( \sqrt { \frac { P } { E I } } x \right)
$$

Applying the boundary conditions $w ( 0 ) = w ( h ) = 0$, we must have $\sqrt { \frac { P } { E I } } h = n \pi$. Therefore,

$$
P \propto \frac { I } { h ^ { 2 } }
$$


The second moment of area $I = \int r ^ { 2 } d A$, so

$$
I \propto d ^ { 4 }
$$

Finally, since the load $P$ is equal to the weight of the sphere $\propto D ^ { 3 }$, we obtain

$$
D ^ { 3 } \propto P \propto \frac { d ^ { 4 } } { D ^ { 2 } } \quad \Rightarrow \quad d \propto D ^ { 5 / 4 }
$$

Part B: Scaling of Gravitational Potentials
A massive thin rhombus plate, with side length $a$ and acute apex angle 60°, has uniform surface mass density $\sigma$. The gravitational potential at the vertex of the acute angle of the rhombus is equal to $\varphi _ { 1 }$, and the potential at the vertex of the obtuse angle is $\varphi _ { 2 }$ (see first object in the figure).
![](../../../figures/solution-ocr/e06143f4ca49322db48f6533.jpg)

(c) An equilateral triangle of side length $2 a$ (see second object in the figure) has the same uniform mass density $\sigma$. Find the gravitational potential at points C and D. Leave your answers in terms of $\varphi _ { 1 }$ and $\varphi _ { 2 }$.
Solution: The rhombus is equivalent to two equilateral triangles joined along a side. Hence by superposition, $\varphi _ { 2 } = 2 \varphi _ { v }$, where $\varphi _ { v } = \frac { 1 } { 2 } \varphi _ { 2 }$ is the potential at vertex of an equilateral triangle of side $a$. The equation for gravitational potential is
$$
\begin{aligned}
\varphi & = G \int \frac { d m } { r } \\
& = G \int \frac { \sigma d A } { r }
\end{aligned}
$$
The potential at points on an equilateral triangle thus scale proportionally to its side length, so
$$
\varphi _ { C } = 2 \varphi _ { v } = \varphi _ { 2 }
$$
The large equilateral triangle can be filled in by a rhombus and two smaller equilateral triangles. The rhombus contributes a potential $\varphi _ { 1 }$, while the the two triangles each contribute a potential $\varphi _ { v }$. Hence, we have
$$
\varphi _ { D } = \varphi _ { 1 } + 2 \frac { \varphi _ { 2 } } { 2 } = \varphi _ { 1 } + \varphi _ { 2 }
$$

center. Find the new potential at C' and D'. Leave your answer in terms of $\varphi _ { 1 }$ and $\varphi _ { 2 }$.

Solution: Consider superposing a middle triangle of "negative mass" distribution $- \sigma$ to our triangle in part (b). By superposition, our potential at D' will be

$$
\varphi _ { D ^ { \prime } } = \varphi _ { D } - \frac { \varphi _ { 2 } } { 2 } = \varphi _ { 1 } + \frac { \varphi _ { 2 } } { 2 }
$$

Now, consider the initial rhombus again. The contribution of the further equilateral triangle of the rhombus to the potential at the point labelled $\varphi _ { 1 }$ is $\varphi _ { \text {far } } = \varphi _ { 1 } - \frac { \varphi _ { 2 } } { 2 }$. Applying the same method of negative mass, the potential at C' will be

$$
\varphi _ { C ^ { \prime } } = \varphi _ { C } - \varphi _ { f a r } = \frac { 3 } { 2 } \varphi _ { 2 } - \varphi _ { 1 }
$$
