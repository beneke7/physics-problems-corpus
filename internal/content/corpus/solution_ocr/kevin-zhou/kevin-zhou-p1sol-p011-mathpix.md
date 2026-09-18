---
id: solution-ocr-kevin-zhou-p1sol-p011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[5] Problem 11. We now consider the Schrodinger equation for the hydrogen atom in greater depth. We begin by switching to dimensionless variables, which is useful for the same reason that writing integrals in terms of dimensionless variables is: it highlights what is independent of unit choices.
(a) Define a dimensionless length variable $\tilde { r } = r / a _ { 0 }$, where $a _ { 0 }$ is the length scale found in example 4. In the Schrodinger equation, the $\nabla ^ { 2 }$ term is defined by
$$
\nabla ^ { 2 } = \frac { \partial ^ { 2 } } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } } { \partial y ^ { 2 } } + \frac { \partial ^ { 2 } } { \partial z ^ { 2 } } .
$$
When we use dimensionless variables, we also need to make sure the derivatives in the equation are with respect to those variables. That is, we should use
$$
\tilde { \nabla } ^ { 2 } = \frac { \partial ^ { 2 } } { \partial \tilde { x } ^ { 2 } } + \frac { \partial ^ { 2 } } { \partial \tilde { y } ^ { 2 } } + \frac { \partial ^ { 2 } } { \partial \tilde { z } ^ { 2 } } .
$$
Using the chain rule, show that
$$
\tilde { \nabla } ^ { 2 } = a _ { 0 } ^ { 2 } \nabla ^ { 2 } .
$$

(b) Similarly show that if we define a dimensionless energy $\tilde { E } = E / E _ { 0 }$, using the energy scale $E _ { 0 }$ found in problem 9, then the Schrodinger equation can be written in a form like
$$
- \tilde { \nabla } ^ { 2 } \psi - \frac { 1 } { \tilde { r } } \psi = \tilde { E } \psi
$$
Here I've suppressed all dimensionless constants, like factors of 2, because they depend on how you choose to define $E _ { 0 }$ and don't really matter at this level of precision.
The result of this part confirms what we concluded above: solutions to the Schrodinger equation don't qualitatively depend on the values of the parameters, because they all come from scaling a solution to this one dimensionless equation appropriately.
(c) This is no longer true in relativity, where the total energy is
$$
E = \sqrt { p ^ { 2 } c ^ { 2 } + m ^ { 2 } c ^ { 4 } } .
$$
Assuming $p \ll m c$, perform a Taylor expansion to show that the next term is $A p ^ { 4 }$, and find the coefficient $A$. (You'll need the binomial theorem, described below.)
(d) In quantum mechanics, the momentum is represented by a gradient, $p \rightarrow - i \hbar \nabla$. (We will see why in X1.) Show that the Schrodinger equation with the first relativistic correction is
$$
- \frac { \hbar ^ { 2 } } { 2 m } \nabla ^ { 2 } \psi - \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } r } \psi + \hbar ^ { 4 } A \nabla ^ { 4 } \psi = E \psi .
$$
(e) Since there is now one more dimensionful quantity in the game, it is possible to combine the quantities to form a dimensionless one. Create a dimensionless quantity $\alpha$ that is proportional to $e ^ { 2 } / \left( 4 \pi \epsilon _ { 0 } \right)$, then numerically evaluate it. This is called the fine structure constant. It serves as an objective measure of the strength of the electromagnetic force, because it is dimensionless, and hence its value doesn't depend on an arbitrary unit system.
(f) As the number of protons in the nucleus increases, the relativistic correction becomes more important. Estimate the atomic number $Z$ where the correction becomes very important.

Solution. (a) For the first derivative,

$$
\frac { d \psi } { d \tilde { x } } = \frac { d \psi } { d x } \frac { d x } { d \tilde { x } } .
$$

With the length scale, $d x / d \tilde { x } = a _ { 0 }$ which is a constant. The second derivative does the same, which gives two factors of $a _ { 0 }$. This holds true for all the other dimensions, so

$$
\tilde { \nabla } ^ { 2 } = a _ { 0 } ^ { 2 } \nabla ^ { 2 } .
$$

(b) Ignoring all numerical factors and dividing by $E _ { 0 } = e ^ { 2 } / \epsilon _ { 0 } a _ { 0 }$, we get
$$
- \frac { \hbar ^ { 2 } \epsilon _ { 0 } a _ { 0 } } { m e ^ { 2 } } \left( \frac { 1 } { a _ { 0 } ^ { 2 } } \tilde { \nabla } ^ { 2 } \right) \psi - \frac { a _ { 0 } } { r } \psi = \left( E / E _ { 0 } \right) \psi
$$
which simplifies to
$$
- \tilde { \nabla } ^ { 2 } \psi - \frac { 1 } { \tilde { r } } \psi = \tilde { E } \psi .
$$

(c) Since $\sqrt { 1 + x } \approx 1 + x / 2 + ( 1 / 2 ) ( - 1 / 4 ) x ^ { 2 }$,
$$
E = m c ^ { 2 } \sqrt { 1 + \frac { p ^ { 2 } c ^ { 2 } } { m ^ { 2 } c ^ { 4 } } } \approx m c ^ { 2 } + \frac { p ^ { 2 } } { 2 m } - \frac { 1 } { 8 } \frac { p ^ { 4 } c ^ { 4 } } { m ^ { 3 } c ^ { 6 } }
$$
which implies
$$
A = - \frac { 1 } { 8 m ^ { 3 } c ^ { 2 } } .
$$
(d) With $p ^ { 4 } = \hbar ^ { 4 } \nabla ^ { 4 }$, this is simply added to the left hand side of the equation as a correction of the first order momentum term $p ^ { 2 } / 2 m = - \hbar ^ { 2 } \nabla ^ { 2 } / 2 m$,
$$
- \frac { \hbar ^ { 2 } } { 2 m } \nabla ^ { 2 } \psi - \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } r } \psi + \hbar ^ { 4 } A \nabla ^ { 4 } \psi = E \psi .
$$
(e) Just like in part (b), divide both sides by $E _ { 0 }$. The dimensionless quantity in the added term should be
$$
\frac { \hbar ^ { 4 } } { m ^ { 3 } c ^ { 2 } a _ { 0 } ^ { 4 } } \frac { \epsilon _ { 0 } a _ { 0 } } { e ^ { 2 } } = \frac { e ^ { 4 } } { \hbar ^ { 2 } c ^ { 2 } \epsilon _ { 0 } ^ { 2 } }
$$
To make it proportional to $e ^ { 2 }$, take the square root to get
$$
\alpha = \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar c } \approx \frac { 1 } { 137 } .
$$
(f) The relativistic correction is important when the above term is of order 1, and since there's an electron charge $e$ and a nucleus with charge $+ Z e$, replace $e ^ { 2 }$ with $Z e ^ { 2 }$. It's order one when
$$
Z \alpha \approx 1 .
$$
So the atomic number when the correction becomes very important is around 137. Actually, even for moderately heavy elements, the corrections are already noticeable and must be accounted for. As a concrete example, if you don't account for relativistic effects, you would predict the color of gold to be silver instead. For more about the relativistic chemistry of gold, see this paper.

You probably won't see any differential equations as complex as the ones in the above problem anywhere in Olympiad physics, but the key idea of using dimensionless quantities to simplify and clarify the physics can be used everywhere.
[5] Problem 12. IPhO 2007, problem "blue". This problem applies thermodynamics and dimensional analysis in some exotic contexts.
