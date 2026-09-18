---
id: solution-ocr-kevin-zhou-m2sol-p033
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-p033]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 33. Two coaxial rings of radius $R$ are placed a distance $L$ apart from each other in vacuum. A soap film with surface tension $\gamma$ connects the two rings.

(a) Derive a differential equation for the shape $r ( z )$ of the film, and solve it.
(b) Show that for sufficiently large $L$, there are no solutions. If $L$ is increased to this value, what happens to the film?
(c) Using a computer or calculator, find the largest possible value of $L$.

We'll consider surface tension in more detail in T3.
Solution. (a) Consider a segment of the bubble between $z$ and $z + d z$. The net forces exerted by surface tension on both sides along the $z$-direction are $4 \pi r \gamma / \sqrt { 1 + r ^ { \prime 2 } }$. To balance forces in the $z$-direction for each segment, the quantity $r / \sqrt { 1 + r ^ { \prime 2 } }$ must be independent of $z$, so

$$
r ^ { 2 } = A ^ { 2 } \left( 1 + r ^ { \prime 2 } \right)
$$

for some constant $A$. Separating and integrating, we have

$$
\int d z = \int \frac { A d r } { \sqrt { r ^ { 2 } - A ^ { 2 } } }
$$

and substituting $r = A \cosh u$ and integrating yields

$$
z + C = A \cosh ^ { - 1 } ( r / A ) , \quad r = A \cosh \left( \frac { z + C } { A } \right)
$$

for another constant $C$. Setting the rings to be at $z = \pm L / 2$, we have $C = 0$. The quantity $A$ is the minimum radius, which occurs by symmetry at $z = 0$.
You may have noticed that the answer is a catenary, which is the same as the answer to example 10. The reason is that both problems can be solved by minimizing a similar quantity. Here, we want to find the function $r ( z )$ that minimizes the surface area,

$$
S = \int 2 \pi r \sqrt { 1 + r ^ { \prime 2 } } d z
$$

where the value of $r$ at two given values of $z$ is fixed. In that example, we wanted to find the shape $y ( x )$ of the chain that minimizes the gravitational potential energy,

$$
U = \lambda \int y \sqrt { 1 + y ^ { \prime 2 } } d x
$$


This function is similar in form, which explains why the form of the solution is similar. But there's an important physical difference: the length of the chain is fixed, and you need to specify it to determine the solution. (To see how this constraint can be imposed with Lagrange multipliers, see here.) By contrast, the soap bubble is more free to vary. That explains why, as we'll see below, you can sometimes have no solution for a soap bubble at all. In those cases, the middle of the film can just get thinner and thinner, always decreasing the area, until it pinches off into two separate pieces.
(b) We introduced the parameter $A$ above, which describes the shape of the solution. It is fixed by requiring that the bubble fit the rings,
$$
R = A \cosh \frac { L } { 2 A } .
$$
Now, we wish to find the largest $L$ so that there exists some $A$ that solves this equation. It's clearer to note that by dimensional analysis, the system only depends on the ratio $R / L$, so finding the largest $L$ for fixed $R$ is equivalent to finding the smallest $R$ for fixed $L$. By graphing the function $R ( A )$, we see it has a single minimum, so there is indeed a minimum possible $R / L$ and hence a maximum possible $L / R$.
(c) Setting the derivative $d R / d A$ to zero, the minimum occurs when
$$
\frac { 2 A } { L } = \tanh \frac { L } { 2 A } .
$$
This equation cannot be solved analytically. Using a calculator and the techniques of P1, we find the maximum possible $L$ is about 1.33R.

By the way, you can also solve this problem by looking at the forces on individual small elements of the bubble. Since the bubble isn't a closed surface, there's no pressure difference across it. Thus, in equilibrium, the Young-Laplace equation implies that the radii of curvature satisfy $R _ { 1 } + R _ { 2 } = 0$, i.e. the "mean curvature" is zero. This is the condition for the bubble to be a minimal surface. However, actually evaluating this condition in general is somewhat complicated; what we did above is the simplest way, which takes advantage of the axis of symmetry of the setup.

## 8 Deforming Solids

So far, the only continuous objects we've analyzed in detail have been ropes and bubbles. They are relatively simple because they can only support tension forces, and are one-dimensional and twodimensional respectively. A three-dimensional solid is much more complex, as it can deform in many different ways, and can also support internal shear forces. A full treatment of this subject, which requires comfort with tensors, is given in chapters 6 through 11 of Lautrup, as well as chapters II-31, II-38, and II-39 of the Feynman lectures. In this problem set, we'll just give two simple examples.

Example 16: IPhO 2022 3A
A thin piece of spaghetti of diameter $d$ is balanced horizontally from its middle.


![](../../../figures/solution-ocr/827b4efca74f532329d173a7.jpg)
It can have a length $\ell \gg d$ before it snaps under its own weight. How does $\ell$ scale with $d$ ?

## Solution

Let the spaghetti rod have density $\rho$, and consider its right half. There must be a vertical normal force $F \sim \rho d ^ { 2 } \ell$ to balance the weight. This vertical force is transmitted through the rod by a shear stress (i.e. an internal force per area, perpendicular to the rod) of order $\sigma _ { s } \sim F / A \sim \rho \ell$. Each piece of the rod exerts such a shear stress on its neighbors, just like how pieces of a string exert tensions on their neighbors.

Now consider torques on the right half of the rod, about the pivot point. The torque $\tau \sim \rho d ^ { 2 } \ell ^ { 2 }$ of the rod's weight has to be balanced by forces from the other half of the rod. Vertical forces don't work, since they don't provide any torque about the pivot. Instead, the torque is supplied by a horizontal compression force at the bottom, and a horizontal tension force at the top, which cancel out to maintain horizontal force balance. This combination of forces, which produces no net force but does produce a net torque, is a bending moment.

Let the associated normal stresses be of order $\pm \sigma _ { n }$. Then the net compression and tension forces are of order $\pm d ^ { 2 } \sigma _ { n }$, and the lever arm is of order $d$, so balancing torques gives

$$
\rho d ^ { 2 } \ell ^ { 2 } \sim \sigma _ { n } d ^ { 3 }
$$

which implies $\sigma _ { n } \sim \rho \ell ^ { 2 } / d$. This is much greater than $\sigma _ { s }$, because of the very small lever arm, which is why thin rods usually break by snapping, not by shearing or pulling apart. Given a fixed maximum $\sigma _ { n }$, we conclude the maximum length scales as $\ell \sim \sqrt { d }$.
[3] Problem 34. USAPhO 2022, problem A1. A practical bending moment problem.
