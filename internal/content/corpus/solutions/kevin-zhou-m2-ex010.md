---
id: kevin-zhou-m2-ex010
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-ex010
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

example 10. The reason is that both problems can be solved by minimizing a similar quantity.
Here, we want to find the function r(z) that minimizes the surface area,
S =
Z
2πr
p
1 + r′2 dz
where the value of r at two given values of z is fixed. In that example, we wanted to find the
shape y(x) of the chain that minimizes the gravitational potential energy,
U = λ
Z
y
p
1 + y′2 dx.
36
Kevin Zhou Physics Olympiad Handouts
This function is similar in form, which explains why the form of the solution is similar. But
there’s an important physical difference: the length of the chain is fixed, and you need to
specify it to determine the solution. (To see how this constraint can be imposed with Lagrange
multipliers, see here.) By contrast, the soap bubble is more free to vary. That explains why,
as we’ll see below, you can sometimes have no solution for a soap bubble at all. In those cases,
the middle of the film can just get thinner and thinner, always decreasing the area, until it
pinches off into two separate pieces.
(b) We introduced the parameter A above, which describes the shape of the solution. It is fixed
by requiring that the bubble fit the rings,
R = Acosh
L
2A
.
Now, we wish to find the largest L so that there exists some A that solves this equation.
It’s clearer to note that by dimensional analysis, the system only depends on the ratio R/L,
so finding the largest L for fixed R is equivalent to finding the smallest R for fixed L. By
graphing the function R(A), we see it has a single minimum, so there is indeed a minimum
possible R/L and hence a maximum possible L/R.
(c) Setting the derivative dR/dA to zero, the minimum occurs when
2A
L
= tanh
L
2A
.
This equation cannot be solved analytically. Using a calculator and the techniques of P1, we
find the maximum possible L is about 1.33R.
By the way, you can also solve this problem by looking at the forces on individual small elements
of the bubble. Since the bubble isn’t a closed surface, there’s no pressure difference across it. Thus,
in equilibrium, the Young–Laplace equation implies that the radii of curvature satisfy R1 + R2 = 0,
i.e. the “mean curvature” is zero. This is the condition for the bubble to be a minimal surface.
However, actually evaluating this condition in general is somewhat complicated; what we did above
is the simplest way, which takes advantage of the axis of symmetry of the setup.
8 Deforming Solids
So far, the only continuous objects we’ve analyzed in detail have been ropes and bubbles. They are
relatively simple because they can only support tension forces, and are one-dimensional and two-
dimensional respectively. A three-dimensional solid is much more complex, as it can deform in many
different ways, and can also support internal shear forces. A full treatment of this subject, which
requires comfort with tensors, is given in chapters 6 through 11 of Lautrup, as well as chapters II-31,
II-38, and II-39 of the Feynman lectures. In this problem set, we’ll just give two simple examples.
Example 16: IPhO 2022 3A
A thin piece of spaghetti of diameter d is balanced horizontally from its middle.
37
Kevin Zhou Physics Olympiad Handouts
It can have a length ℓ ≫ d before it snaps under its own weight. How does ℓ scale with d?
Solution
Let the spaghetti rod have density ρ, and consider its right half. There must be a vertical
normal force F ∼ ρd2ℓ to balance the weight. This vertical force is transmitted through
the rod by a shear stress (i.e. an internal force per area, perpendicular to the rod) of order
σs ∼ F/A ∼ ρℓ. Each piece of the rod exerts such a shear stress on its neighbors, just like
how pieces of a string exert tensions on their neighbors.
Now consider torques on the right half of the rod, about the pivot point. The torque
τ ∼ ρd2ℓ2 of the rod’s weight has to be balanced by forces from the other half of the rod.
Vertical forces don’t work, since they don’t provide any torque about the pivot. Instead, the
torque is supplied by a horizontal compression force at the bottom, and a horizontal tension
force at the top, which cancel out to maintain horizontal force balance. This combination of
forces, which produces no net force but does produce a net torque, is a bending moment.
Let the associated normal stresses be of order ±σn. Then the net compression and tension
forces are of order ±d2σn, and the lever arm is of order d, so balancing torques gives
ρd2
ℓ2
∼ σnd3
which implies σn ∼ ρℓ2/d. This is much greater than σs, because of the very small lever arm,
which is why thin rods usually break by snapping, not by shearing or pulling apart. Given a
fixed maximum σn, we conclude the maximum length scales as ℓ ∼
√
d.
[3] Problem 34.   ^ 1 0USAPhO 2022, problem A1. A practical bending moment problem.
