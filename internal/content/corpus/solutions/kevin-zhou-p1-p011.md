---
id: kevin-zhou-p1-p011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p011
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[5] Problem 11. We now consider the Schrodinger equation for the hydrogen atom in greater depth.
We begin by switching to dimensionless variables, which is useful for the same reason that writing
integrals in terms of dimensionless variables is: it highlights what is independent of unit choices.
(a) Define a dimensionless length variable r̃ = r/a0, where a0 is the length scale found in example 4.
In the Schrodinger equation, the ∇2 term is defined by
∇2
=
∂2
∂x2
+
∂2
∂y2
+
∂2
∂z2
.
When we use dimensionless variables, we also need to make sure the derivatives in the equation
are with respect to those variables. That is, we should use
˜ ∇2
=
∂2
∂x̃2
+
∂2
∂ỹ2
+
∂2
∂z̃2
.
Using the chain rule, show that
˜ ∇2
= a2
0∇2
.
11
Kevin Zhou Physics Olympiad Handouts
(b) Similarly show that if we define a dimensionless energy Ẽ = E/E0, using the energy scale E0
found in problem 9, then the Schrodinger equation can be written in a form like
−˜ ∇2
ψ −
1
r̃
ψ = Ẽψ
Here I’ve suppressed all dimensionless constants, like factors of 2, because they depend on
how you choose to define E0 and don’t really matter at this level of precision.
The result of this part confirms what we concluded above: solutions to the Schrodinger
equation don’t qualitatively depend on the values of the parameters, because they all come
from scaling a solution to this one dimensionless equation appropriately.
(c) This is no longer true in relativity, where the total energy is
E =
p
p2c2 + m2c4.
Assuming p ≪ mc, perform a Taylor expansion to show that the next term is Ap4, and find
the coefficient A. (You’ll need the binomial theorem, described below.)
(d) In quantum mechanics, the momentum is represented by a gradient, p → −iℏ∇. (We will see
why in X1.) Show that the Schrodinger equation with the first relativistic correction is
−
ℏ2
2m
∇2
ψ −
e2
4πϵ0r
ψ + ℏ4
A∇4
ψ = Eψ.
(e) Since there is now one more dimensionful quantity in the game, it is possible to combine the
quantities to form a dimensionless one. Create a dimensionless quantity α that is proportional
to e2/(4πϵ0), then numerically evaluate it. This is called the fine structure constant. It serves
as an objective measure of the strength of the electromagnetic force, because it is dimensionless,
and hence its value doesn’t depend on an arbitrary unit system.
(f) As the number of protons in the nucleus increases, the relativistic correction becomes more
important. Estimate the atomic number Z where the correction becomes very important.
Solution. (a) For the first derivative,
dψ
dx̃
=
dψ
dx
dx
dx̃
.
With the length scale, dx/dx̃ = a0 which is a constant. The second derivative does the same,
which gives two factors of a0. This holds true for all the other dimensions, so
˜ ∇2
= a2
0∇2
.
(b) Ignoring all numerical factors and dividing by E0 = e2/ϵ0a0, we get
−
ℏ2ϵ0a0
me2

1
a2
0
˜ ∇2

ψ −
a0
r
ψ = (E/E0)ψ
which simplifies to
−˜ ∇2
ψ −
1
r̃
ψ = Ẽψ.
12
Kevin Zhou Physics Olympiad Handouts
(c) Since
√
1 + x ≈ 1 + x/2 + (1/2)(−1/4)x2,
E = mc2
r
1 +
p2c2
m2c4
≈ mc2
+
p2
2m
−
1
8
p4c4
m3c6
which implies
A = −
1
8m3c2
.
(d) With p4 = ℏ4∇4, this is simply added to the left hand side of the equation as a correction of
the first order momentum term p2/2m = −ℏ2∇2/2m,
−
ℏ2
2m
∇2
ψ −
e2
4πϵ0r
ψ + ℏ4
A∇4
ψ = Eψ.
(e) Just like in part (b), divide both sides by E0. The dimensionless quantity in the added term
should be
ℏ4
m3c2a4
0
ϵ0a0
e2
=
e4
ℏ2c2ϵ2
0
.
To make it proportional to e2, take the square root to get
α =
e2
4πϵ0ℏc
≈
1
137
.
(f) The relativistic correction is important when the above term is of order 1, and since there’s
an electron charge e and a nucleus with charge +Ze, replace e2 with Ze2. It’s order one when
Zα ≈ 1.
So the atomic number when the correction becomes very important is around 137. Actually,
even for moderately heavy elements, the corrections are already noticeable and must be
accounted for. As a concrete example, if you don’t account for relativistic effects, you would
predict the color of gold to be silver instead. For more about the relativistic chemistry of gold,
see this paper.
You probably won’t see any differential equations as complex as the ones in the above problem
anywhere in Olympiad physics, but the key idea of using dimensionless quantities to simplify and
clarify the physics can be used everywhere.
[5] Problem 12.   h 1 0IPhO 2007, problem “blue”. This problem applies thermodynamics and dimen-
sional analysis in some exotic contexts.
