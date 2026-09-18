---
id: solution-ocr-kevin-zhou-p1sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. Some questions about the speed of waves, to be covered in greater detail in W3. For all estimates, you can look up any numbers you need.

(a) The speed of sound in an ideal gas depends on its pressure $p$ and density $\rho$. Explain why we don't have to use the temperature $T$ or ideal gas constant $R$ in the dimensional analysis, and then estimate the speed of sound in air.
(b) The speed of sound in a fluid depends only on its density $\rho$ and bulk modulus $B = - V d P / d V$. Estimate the speed of sound in water, which has $B = 2.1 \mathrm { GPa }$.

The speed of waves on top of the surface of water can depend on the water depth $h$, the wavelength $\lambda$, the density $\rho$, the surface tension $\gamma$, and the gravitational acceleration $g$.

(c) Find the speed of capillary waves, i.e. water waves of very short wavelength, up to a dimensionless constant.
(d) Find the speed of long-wavelength waves in very deep water, up to a dimensionless constant.

Solution. (a) We don't have to use $R$ or $T$ because all that matters is the restoring force, determined by $p$, and the inertia, determined by $\rho$. So we have

$$
[ p ] = \frac { k g } { m s ^ { 2 } } , \quad [ \rho ] = \frac { k g } { m ^ { 3 } }
$$

and a routine dimensional analysis gives

$$
v \sim \sqrt { \frac { p } { \rho } } \sim \sqrt { \frac { 10 ^ { 5 } \mathrm {~Pa} } { 1 \mathrm {~kg} / \mathrm { m } ^ { 3 } } } \sim 300 \mathrm {~m} / \mathrm { s }
$$

which is reasonably close. (Actually, the exact answer is $v = \sqrt { \gamma p / \rho }$, as we'll derive in T3 and W3, so thermodynamics actually does play a role through the dimensionless constant.)


(b) We have
$$
[ B ] = \frac { k g } { m \cdot s ^ { 2 } } \quad [ \rho ] = \frac { k g } { m ^ { 3 } } .
$$
A routine dimensional analysis gives
$$
v \sim \sqrt { \frac { B } { \rho } } \sim 1500 \mathrm {~m} / \mathrm { s } .
$$
This is actually very close to the true answer; here there is no dimensionless constant.
(c) In this case, the surface tension force dominates, just as it did for a small water droplet in a previous problem, which also means that $g$ doesn't matter. The wavelength is so short that the waves can't "see" the depth of the water, so $h$ doesn't matter. Doing dimensional analysis with the remaining three parameters gives
$$
v \sim \sqrt { \frac { \gamma } { \rho \lambda } } .
$$
(d) In this case, the wave is big enough for surface tension not to matter; the restoring force is gravity, so we keep $g$ and toss out $\gamma$. Since the water is even deeper than the wavelength, we again toss out $h$. Doing dimensional analysis with the remaining parameters gives
$$
v \sim \sqrt { g \lambda } .
$$
We will derive this in W3. The fact that $\rho$ also dropped out makes sense: when gravity is the only force, $\rho$ usually doesn't matter because scaling it up scales all the forces and all the masses up the same way, keeping accelerations the same.

[3] Problem 5 (Morin 1.5). A particle with mass $m$ and initial speed $v$ is subject to a velocitydependent damping force of the form $b v ^ { n }$.

(a) For $n = 0,1,2 , \ldots$, find how the stopping time and stopping distance depend on $m , v$, and $b$.
(b) Check that these results actually make sense as $m , v$, and $b$ are changed, for a few values of $n$. You should find something puzzling going on. (Hint: to resolve the problem, it may be useful to find the stopping time explicitly in a few examples.)

Solution. (a) The dimensions of $b$ can be found with $[ b ] = \left[ F / v ^ { n } \right] = k g \cdot m ^ { 1 - n } \cdot s ^ { - 2 + n }$. To get a stopping time or distance, the mass term must be canceled out. So we're working with

$$
\left[ \frac { b } { m } \right] = m ^ { 1 - n } s ^ { - 2 + n } \quad [ v ] = \frac { m } { s }
$$

The stopping time $t$ can be found by canceling out the length dimension. If $t \propto ( b / m ) ^ { \alpha } v ^ { \beta }$, then:

$$
\alpha ( 1 - n ) + \beta = 0 \quad \alpha ( - 2 + n ) - \beta = 1
$$

Solving yields

$$
\alpha = - 1 \quad \beta = 1 - n , \quad t \propto \frac { m v ^ { 1 - n } } { b } .
$$

The distance $x$ traveled has dimensions of $v t$, so

$$
x \propto \frac { m v ^ { 2 - n } } { b } .
$$


(b) The results don't seem to make sense. At $n = 1$, it appears that the time it takes to stop no longer depends on $v$, which doesn't seem correct since the stopping time should always increase with velocity. And for $n > 1$, the stopping time decreases with velocity, which is even worse. Similar issues happen for the stopping distance for $n \geq 2$.
The resolution is that in these cases, the stopping time/distance are actually infinite, as you can check explicitly. In other words, dimensional analysis worked, but the hidden dimensionless prefactor was infinity.

Idea 2
Dimensional analysis applies everywhere. The argument of any function that is not a monomial, such as $\sin x$, must have no dimensions. The derivative $d / d x$ has the opposite dimensions to $x$, and the $d x$ in an integral has the same dimensions as $x$. When you perform an integral, your first step should usually be to "nondimensionalize" it, i.e. to separate out dimensionful factors to leave a dimensionless integral.

Example 3
Evaluate the integral

$$
I = \int _ { 0 } ^ { a } \frac { d x } { b x ^ { 2 } + c }
$$

where $b$ and $c$ are both positive.

Solution
This isn't a hard integral by any means, but it's a simple way to demonstrate what we mean by "nondimensionalizing". If you do the integral directly, you'll get lots of intermediate expressions with $a , b$, and $c$ in them, which produces clutter and more opportunities for error. Instead, start by substituting $u = \sqrt { b / c } x$, to get

$$
I = \frac { 1 } { \sqrt { b c } } \int _ { 0 } ^ { u _ { 0 } } \frac { d u } { u ^ { 2 } + 1 } = \frac { 1 } { \sqrt { b c } } \tan ^ { - 1 } \left( u _ { 0 } \right) , \quad u _ { 0 } = a \sqrt { b / c } .
$$

We can now check this by dimensional analysis. Let's suppose this integral arose from a problem where $x$ had dimensions of length, $[ x ] = \mathrm { m }$, and $b$ was dimensionless. Then we must have $[ a ] = \mathrm { m } , [ c ] = \mathrm { m } ^ { 2 }$. Our answer makes sense if $[ I ] = \mathrm { m } ^ { - 1 }$ and $\left[ u _ { 0 } \right] = 1$, which both hold.
