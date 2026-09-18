---
id: solution-ocr-kevin-zhou-p1sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
mapped_problems: [kevin-zhou-p1-ex001, kevin-zhou-p1-ex004, kevin-zhou-p1-ex005, kevin-zhou-p1-ex006, kevin-zhou-p1-ex007, kevin-zhou-p1-ex008, kevin-zhou-p1-ex009, kevin-zhou-p1-ex011, kevin-zhou-p1-ex012, kevin-zhou-p1-ex014, kevin-zhou-p1-ex016, kevin-zhou-p1-ex018, kevin-zhou-p1-ex019, kevin-zhou-p1-p003, kevin-zhou-p1-p004, kevin-zhou-p1-p006, kevin-zhou-p1-p007, kevin-zhou-p1-p009, kevin-zhou-p1-p010, kevin-zhou-p1-p011, kevin-zhou-p1-p015, kevin-zhou-p1-p016, kevin-zhou-p1-p017, kevin-zhou-p1-p018, kevin-zhou-p1-p019, kevin-zhou-p1-p020, kevin-zhou-p1-p022, kevin-zhou-p1-p028, kevin-zhou-p1-p029, kevin-zhou-p1-p031, kevin-zhou-p1-p033, kevin-zhou-p1-p035, kevin-zhou-p1-p036]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix PDF API Markdown conversion; promoted without manual proofreading."
---
## Problem Solving I: Mathematical Techniques

For the basics of dimensional analysis and limiting cases, see chapter 1 of Morin or chapter 2 of Order of Magnitude Physics. Many more examples are featured in The Art of Insight; some particularly relevant sections are 2.1, 5.5, 6.3, 8.2, and 8.3. Other sections will be mentioned throughout the course. There is a total of 89 points.

## 1 Dimensional Analysis

Idea 1
Dimensional analysis is simply the statement that the dimensions of physical equations should match on both sides. This simple idea can sometimes solve whole problems by itself.

Dimensional analysis is also a valuable consistency check. For example, if you're trying to derive the surface area of a sphere and find $4 \pi r ^ { 3 }$, you can instantly know you made a mistake. As another example, if a problem says the speed of an object is "small", this technically isn't dimensionally correct unless we compare it to another speed. Thus, the problem might really mean you should assume the speed is small compared to the speed of light, $v \ll c$, which tells you something important.

To be precise, we should distinguish dimensions and units. The dimensions of a physical quantity determine what kind of quantity it is, while a unit is a measure of a dimension. Thus, for example, somebody's height $h$ can be measured in units of feet or meters, but both have dimensions of length; this can be written as $[ h ] = [ \mathrm { ft } ] = [ \mathrm { m } ] = L$, where the brackets indicate dimensions. Another example is that angles are dimensionless, but can be measured in units of degrees or radians. These distinctions are not that important for our purposes, so we will be sloppy and conflate dimensions with units, writing the equivalent of $[ h ] = \mathrm { m }$.

Example 1: $F = m a 2018 \mathrm {~B} 11$
A circle of rope is spinning in outer space with an angular velocity $\omega _ { 0 }$. Transverse waves on the rope have speed $v _ { 0 }$, as measured in a rotating reference frame where the rope is at rest. If the angular velocity of the rope is doubled, what is the new speed of transverse waves?

Solution
To solve this problem by dimensional analysis, we reason about what could possibly affect the speed of transverse waves. The result could definitely depend on the rope's length $L$, mass per length $\lambda$, and angular velocity $\omega _ { 0 }$. It could also depend on the tension, but since the tension balances the centrifugal force, it is determined by the other quantities. Thus the quantities we have are

$$
[ L ] = \mathrm { m } , \quad [ \lambda ] = \mathrm { kg } / \mathrm { m } , \quad \left[ \omega _ { 0 } \right] = 1 / \mathrm { s } .
$$

Since $\lambda$ is the only thing with dimensions of mass, it can't affect the speed, because there is nothing that could cancel out the mass dimension. So the only possible answer is

$$
v _ { 0 } \sim L \omega _ { 0 }
$$


where the ~ indicates equality up to a dimensionless constant, which cannot be found by dimensional analysis alone. In practice, the constant usually won't be too big or too small, so $L \omega _ { 0 }$ is a decent estimate of $v _ { 0 }$. But even if it isn't, the dimensional analysis tells us the scaling: if $\omega _ { 0 }$ is doubled, the new speed is $2 v _ { 0 }$.

## Example 2

Find the dimensions of the magnetic field.

## Solution

To do this, we just think of some simple equation involving $B$, then solve for its dimensions. For example, we know that $\mathbf { F } = q ( \mathbf { v } \times \mathbf { B } )$, so

$$
[ B ] = \frac { [ F ] } { [ q ] [ v ] } = \frac { \mathrm { kg } \cdot \mathrm {~m} } { \mathrm {~s} ^ { 2 } } \frac { 1 } { \mathrm { C } } \frac { 1 } { \mathrm {~m} / \mathrm { s } } = \frac { \mathrm { kg } } { \mathrm { C } \cdot \mathrm {~s} } .
$$

[2] Problem 1. Find the dimensions of power, the gravitational constant $G$, the permittivity of free space $\epsilon _ { 0 }$, and the ideal gas constant $R$.
Solution. The dimensions are
$$
[ P ] = \frac { \mathrm { kg } \mathrm {~m} ^ { 2 } } { \mathrm {~s} ^ { 3 } } , \quad [ G ] = \frac { \mathrm { m } ^ { 3 } } { \mathrm {~kg} \mathrm {~s} ^ { 2 } } , \quad \left[ \epsilon _ { 0 } \right] = \frac { \mathrm { C } ^ { 2 } \mathrm {~s} ^ { 2 } } { \mathrm {~kg} \mathrm {~m} ^ { 3 } } , \quad [ R ] = \frac { \mathrm { J } } { \mathrm { molK } } = \frac { \mathrm { kg } \mathrm {~m} ^ { 2 } } { \mathrm { molKs } ^ { 2 } } .
$$
An easy method is to use formulas containing the desired quantity, such as $P = F v , F = G M m / r ^ { 2 }$, $F = q ^ { 2 } / \left( 4 \pi \epsilon _ { 0 } r ^ { 2 } \right)$, and $P V = n R T$, where the dimensions of the other quantities are already known.
[1] Problem 2. Derive Kepler's third law for circular orbits, using only dimensional analysis. (Why didn't people figure out this argument 2000 years ago?)
Solution. The answer should only depend on $G , M$, and the radius $r$. By dimensional analysis, we have the equality of dimensions
$$
[ r ] = \left[ ( G M ) ^ { 1 / 3 } T ^ { 2 / 3 } \right]
$$
which implies we must have $T ^ { 2 } \propto r ^ { 3 }$. But of course, the dimensions of $G$ follow from the inverse square law for gravity, and you need to know which quantities are allowed in the dimensional analysis in the first place. In other words, you need the whole structure of Newtonian mechanics to be set up already to run this argument.
[2] Problem 3. Some questions about vibrations.
    (a) The typical frequency $f$ of a vibrating star depends only on its radius $R$, density $\rho$, and the gravitational constant $G$. Use dimensional analysis to find an expression for $f$, up to a dimensionless constant. Then estimate $f$ for the Sun, looking up any numbers you need.
    (b) The typical frequency $f$ of a small water droplet freely vibrating in zero gravity could depend on its radius $R$, density $\rho$, surface tension $\gamma$, and the gravitational constant $G$. This is too many parameters for dimensional analysis to work, but if you think about it for a second, you'll see that one of them doesn't actually matter. Using this, find an expression for $f$ up to a dimensionless constant.

Solution. (a) We just do the usual dimensional analysis,

$$
[ f ] = s ^ { - 1 } \quad [ R ] = m \quad [ \rho ] = \mathrm { kg } / \mathrm { m } ^ { 3 } \quad [ \mathrm { G } ] = \frac { \mathrm { m } ^ { 3 } } { \mathrm {~kg} \cdot \mathrm {~s} ^ { 2 } }
$$

To cancel out the units of kg, we consider the product of $G$ and $\rho$, which has units $[ \rho G ] = s ^ { - 2 }$. Then to get $[ f ] = s ^ { - 1 }$,

$$
f \sim \sqrt { G \rho } \sim 3 \times 10 ^ { - 4 } \mathrm {~Hz}
$$

which is in the right range. These oscillations are measured in the field of helioseismology.
Another application of this result is that the time needed for a ball of gas of density $\rho$ to collapse is of order $1 / \sqrt { G \rho }$, called the free fall time. This timescale plays an important role in structure formation in the early universe.

(b) In any nontrivial dimensional analysis problem, you will have too many parameters, and will have to think about how to reduce them. The right ones to drop depend on the system.
Here, the gravitational forces of the small droplet on itself are completely negligible compared to surface tension, so we can drop $G$. Performing dimensional analysis with $R , \rho$, and $\gamma$ gives
$$
f \sim \sqrt { \frac { \gamma } { \rho R ^ { 3 } } } .
$$
Of course, part (a) is equivalent to starting with the same set of four parameters and dropping $\gamma$, which makes sense since the objects considered are huge.

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

[2] Problem 6. We are given the integral
$$
\int _ { - \infty } ^ { \infty } e ^ { - x ^ { 2 } } d x = \sqrt { \pi } .
$$
For positive $a$, find the value of the integral
$$
\int _ { - \infty } ^ { \infty } e ^ { - a x ^ { 2 } + b x + c } d x
$$
and verify that your answer makes dimensional sense.

Solution. We can simply factor out the dependence on $c$, and get rid of the $a$ in the exponent by taking $u = \sqrt { a } x$, to get

$$
\frac { e ^ { c } } { \sqrt { a } } \int _ { - \infty } ^ { \infty } e ^ { - u ^ { 2 } + ( b / \sqrt { a } ) u } d u
$$

To get rid of the pesky linear term in the exponent, we note that

$$
- v ^ { 2 } = - \left( u - \frac { b } { 2 \sqrt { a } } \right) ^ { 2 } = - u ^ { 2 } + \frac { b } { \sqrt { a } } u - \frac { b ^ { 2 } } { 4 a }
$$

so that we can "complete the square" in the exponent by working in terms of $v$, for

$$
\frac { e ^ { c + b ^ { 2 } / 4 a } } { \sqrt { a } } \int _ { - \infty } ^ { \infty } e ^ { - v ^ { 2 } } d v = e ^ { c + b ^ { 2 } / 4 a } \sqrt { \frac { \pi } { a } }
$$

To check this makes sense, let's again suppose that $[ x ] = \mathrm { m }$, which implies $[ a ] = \mathrm { m } ^ { - 2 } , [ b ] = \mathrm { m } ^ { - 1 }$, and $[ c ] = 1$. The overall integral must have dimensions of m, which it does, and the argument of the exponent must be dimensionless, which it is.

Remark
Consider the value of the definite integral

$$
\int _ { - \infty } ^ { x } e ^ { - x ^ { \prime 2 } } d x ^ { \prime }
$$

You can try all day to compute the value of this integral, using all the integration tricks you know, but nothing will work. The function $e ^ { - x ^ { 2 } }$ simply doesn't have an antiderivative in terms of the functions you already know, i.e. in terms of polynomials, exponents and logarithms, and trigonometric functions (for more discussion, see here).

If you ask a computer algebra system like Mathematica, it'll spit out something involving $\operatorname { erf } ( x )$, which is defined by being an antiderivative of $e ^ { - x ^ { 2 } }$. But is this really an "analytic" solution? Isn't that just saying "the integral of $e ^ { - x ^ { 2 } }$ is equal to the integral of $e ^ { - x ^ { 2 } \text { "? } }$ ? Well, like many things in math, it depends on what the meaning of the word "is" is.

The fact is, the set of functions we regard as "elementary" is arbitrary; we just choose a set that's big enough to solve most of the problems we want, and small enough to attain fluency with. (Back in the days before calculators, it just meant all the functions whose values were tabulated in the references on hand.) If you're uncomfortable with $\operatorname { erf } ( x )$, note that a similar thing would happen if a little kid asked you what the ratio of the opposite to adjacent sides of a right triangle is. You'd say $\tan ( x )$, but they could say it's tautological, because the only way to define $\tan ( x )$ at their level is as the ratio of opposite to adjacent sides. Similarly, $1 / x$ has no elementary antiderivative - unless you count $\log ( x )$ as elementary, but ultimately $\log ( x )$ is simply defined to be such an antiderivative. It's all tautology, but it's still useful.
[2] Problem 7. In particle physics it is conventional to work in "natural units", where the numeric values of $\hbar$ and $c$ are equal to 1 . For example, if we take the second as the unit of time, then we can take the light-second as the unit of length, so that $c = 1$ light-second/second. This is usually


sloppily written as " $\hbar = c = 1$ " so that factors of $\hbar$ and $c$ can be suppressed. However, you can always restore these factors by dimensional analysis.

According to standard references, the mass of the Higgs boson is about 125 GeV, where 1 eV is the energy gained by an electron accelerated through a voltage difference of 1 V. Fix the dimensions of this statement and find the mass of the Higgs boson in kilograms.

Solution. One easy way to start out dimensional analysis is with famous equations: $E = m c ^ { 2 }$, or $E = \frac { 1 } { 2 } m v ^ { 2 }$ to get $m \sim E / c ^ { 2 }$. Thus the mass of the Higgs boson is $m = 125 \mathrm { GeV } / \mathrm { c } ^ { 2 } = 2.22 \times 10 ^ { - 25 } \mathrm {~kg}$.
[3] Problem 8. USAPhO 2002, problem A3.
Example 4
The wavefunction $\psi ( x , y , z )$ of the electron in a hydrogen atom obeys the Schrodinger equation

$$
- \frac { \hbar ^ { 2 } } { 2 m } \left( \frac { \partial ^ { 2 } } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } } { \partial y ^ { 2 } } + \frac { \partial ^ { 2 } } { \partial z ^ { 2 } } \right) \psi - \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } r } \psi = E \psi .
$$

Estimate the size of the hydrogen atom.

Solution
By solving this equation, we can find a discrete set of solutions $\psi ( x , y , z )$, which correspond to a discrete set of allowed energies $E$. However, to estimate the typical size of the solutions, we can just use dimensional analysis. The dimensionful input parameters in the equation above are $m , \hbar$, and $e ^ { 2 } / 4 \pi \epsilon _ { 0 }$, which have dimensions

$$
[ m ] = \mathrm { kg } , \quad [ \hbar ] = \mathrm { J } \cdot \mathrm {~s} = \mathrm { kg } \mathrm {~m} ^ { 2 } \mathrm {~s} ^ { - 1 } , \quad \left[ e ^ { 2 } / 4 \pi \epsilon _ { 0 } \right] = \mathrm { J } \cdot \mathrm {~m} = \mathrm { kg } \mathrm {~m} ^ { 3 } \mathrm {~s} ^ { - 2 } .
$$

Doing dimensional analysis, the only length scale is the Bohr radius,

$$
a _ { 0 } = \frac { 4 \pi \epsilon _ { 0 } \hbar ^ { 2 } } { m e ^ { 2 } } \sim 10 ^ { - 10 } \mathrm {~m} .
$$

I've thrown in a $4 \pi$ above because $\epsilon _ { 0 }$ shows up in the combination $4 \pi \epsilon _ { 0 }$. The dimensional analysis would be valid without this factor, but as you'll see in problem 11, if you don't include it then annoying compensating factors of $4 \pi$ will appear elsewhere.

Classically (i.e. without $\hbar$ ), there is no way to form a length, and hence there should be no classically stable radius for the atom. (This was one of the arguments used by Bohr to motivate quantum mechanics; it appears in the beginning of his paper introducing the Bohr model.) Once we introduce $\hbar$, there are three dimensionful parameters in the problem, as listed above. And there are exactly three fundamental dimensions. So there is only one way to create a length, which we found above, one way to create a time, one way to create an energy, and so on. This means that the solutions to the Schrodinger equation above look qualitatively the same no matter what these parameters are; all that changes are the overall length, time, and energy scales. In problem 11, you'll investigate how this conclusion changes when we add more dimensionful parameters.


Dimensional analysis is especially helpful with scaling relations. For example, a question might ask you how the radius of the hydrogen atom would change in a world where the electron mass was twice as large. You would solve this problem in the exact same way as the example above, using dimensional analysis to show that $a _ { 0 } \propto 1 / m$.
[3] Problem 9. In this problem we'll continue the dimensional analysis of the Schrodinger equation.

(a) Estimate the typical energy scale of quantum states of the hydrogen atom, as well as the typical "velocity" of the electron, using dimensional analysis.
(b) Do the same for one-electron helium, the system consisting of a helium nucleus (containing two protons) and one electron.
(c) Estimate the electric field needed to rip the electron off the hydrogen atom.

Solution. (a) Recall the electrostatic potential energy formula, $E = k q ^ { 2 } / r$. We have a length scale, $a _ { 0 }$ to replace $r$. For velocity, we use $E \sim m v ^ { 2 }$, giving

$$
E \sim \frac { m e ^ { 4 } } { \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } \hbar ^ { 2 } } , \quad v \sim \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar } .
$$

In fact, the binding energy of the hydrogen atom in its ground state is

$$
E = \frac { m e ^ { 4 } } { 2 \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } \hbar ^ { 2 } } = 13.6 \mathrm { eV }
$$

which is a constant known as the Rydberg. So the dimensional argument (keeping the factors of $4 \pi$ ) gets the answer right to a factor of 2.

(b) Adding the second proton would double the charge inside the nucleus, so the expressions for energy and velocity should stay the same except $e ^ { 2 }$ would be replaced with $2 e ^ { 2 }$ (not 4 , since the electron charge stays the same) and thus the energy would be $4 e ^ { 4 }$. In general, with $Z$ as the atomic number,
$$
E \sim \frac { m Z ^ { 2 } e ^ { 4 } } { \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } \hbar ^ { 2 } } , \quad v \sim \frac { Z e ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar } .
$$
(c) Physically, the work the electric field does by moving the electron across the radius of its orbit should be enough to overcome its binding energy to the proton. This also tells us how to set up the dimensional analysis; we have electric field
$$
| \mathbf { E } | \sim \frac { E } { e a _ { 0 } } \sim \frac { m _ { e } ^ { 2 } e ^ { 5 } } { \left( 4 \pi \epsilon _ { 0 } \right) ^ { 3 } \hbar ^ { 4 } } \sim 10 ^ { 12 } \mathrm {~V} / \mathrm { m } .
$$
This is a tremendously large electric field!
All of the results above are not that accurate, but they become much more accurate if we replace $\epsilon _ { 0 }$ with $4 \pi \epsilon _ { 0 }$. That in turn makes sense because these factors always appear together in electromagnetism.


## Idea 3: Buckingham Pi Theorem

Dimensional analysis can't always pin down the form of the answer. If one has $N$ quantities with $D$ independent dimensions, then one can form $N - D$ independent dimensionless quantities. Dimensional analysis can't say how the answer depends on them.

A familiar but somewhat trivial example is the pendulum: its period depends on $L , g$, and the amplitude $\theta _ { 0 }$, three quantities which contain two dimensions (length and time). Hence we can form one dimensionless group, which is clearly just $\theta _ { 0 }$ itself. The period of a pendulum is $T = f \left( \theta _ { 0 } \right) \sqrt { L / g }$.

## Example 5: $F = m a 201412$

A paper helicopter with rotor radius $r$ and weight $W$ is dropped from a height $h$ in air with a density of $\rho$. Assuming the helicopter quickly reaches terminal velocity, use dimensional analysis to analyze the total flight time $T$.

## Solution

The answer can only depend on the parameters $r , W , h$, and $\rho$. There are four quantities in total, but three dimensions (mass, length, and time), so by the Buckingham Pi theorem we can form one independent dimensionless quantity. In this case, it's clearly $r / h$. Continuing with routine dimensional analysis, we find

$$
T = f ( r / h ) h ^ { 2 } \sqrt { \frac { \rho } { W } } .
$$

The form of this expression is a bit arbitrary; for instance, we could also have written $f ( r / h ) r ^ { 2 }$ in front, or even $f ( r / h ) r ^ { 37 } h ^ { - 35 }$. These adjustments just correspond to pulling factors of $r / h$ out of $f$, not to changing the actual result.

This is as far as we can get with dimensional analysis alone, but we can go further using physical reasoning. If the helicopter quickly reaches terminal velocity, then it travels at a constant speed. So we must have $T \propto h$, which means that $f ( x ) \propto x$, and

$$
T \propto r h \sqrt { \frac { \rho } { W } } .
$$

## Example 6

An hourglass is constructed with small sand grains of density $\rho$, and an orifice of diameter $d$. When the sand level above the orifice is $h$, what is the mass flow rate $\mu$ ?

## Solution

The answer can only depend on $\rho , d , h$, and $g$. The Buckingham Pi theorem gives

$$
\mu = f ( h / d ) \rho \sqrt { g d ^ { 5 } } .
$$

That's as far as we can get with dimensional analysis; to go further we need to know more


about sand. If we were dealing with an ideal fluid, then the flow speed would be $v = \sqrt { 2 g h }$ by Torricelli's law, which means the flow rate has to be proportional to $\sqrt { h }$. Then $f ( x ) \propto \sqrt { x }$, giving the result $\mu \propto \rho d ^ { 2 } \sqrt { g h }$. This is a good estimate as long as the orifice isn't so small that viscosity starts to dominate.

But this isn't how sand works: measurements show that the pressure at the orifice doesn't actually depend on the height of the sand, an empirical result known as Janssen's law. That's because sand is a granular material whose motion is dominated by the friction between sand grains, and this friction prevents the additional pressure from propagating downward. The resulting flow rate is independent of $h$, as can be confirmed by watching an hourglass run. Then $f ( x )$ is a constant, giving $\mu \propto \rho \sqrt { g d ^ { 5 } }$. This neat, experimentally verified result is called Beverloo's law, and it's essential in industry to design grain hoppers and corn silos.

## Remark

One has to be a little careful with the Buckingham Pi theorem. For example, if all we had were 3 speeds $v _ { i }$, we can form two dimensionless quantities: $v _ { 1 } / v _ { 2 }$ and $v _ { 1 } / v _ { 3 }$. (The quantity $v _ { 2 } / v _ { 3 }$ is not independent, since it is the quotient of these two.) But there are 3 quantities with 2 dimensions (length and time), so we naively expect only 1 dimensionless quantity.

The problem is that the two dimensions really aren't independent: for any quantity built from the $v _ { i }$, a power of length always comes with an inverse power of time, so there's only one independent dimension. These considerations can be put on a more rigorous footing in linear algebra, where the Buckingham Pi theorem is merely a special case of the rank-nullity theorem. If you're ever in doubt, you can just forget about the theorem and play with the equations directly.

## Remark

Dimensional analysis is an incredibly common tool in Olympiad physics because it lets you say a lot even without much advanced knowledge. If a problem ever says to find some quantity "up to a constant/dimensionless factor", or how that quantity scales as another quantity changes, or what that quantity is proportional to, it's almost certainly asking you to do dimensional analysis. Another giveaway is if the problem looks extremely technical and advanced, because they can't actually be.

[3] Problem 10 (Insight). In this problem we'll do one of the most famous dimensional analyses of all time: estimating the yield of the first atomic bomb blast. Such a blast will create a shock wave of air, which reaches a radius $R$ at time $t$ after the blast. The air density is $\rho$, and we want to estimate the blast energy $E$.
    (a) Declassified photographs of the blast indicate that $R \approx 100 \mathrm {~m}$ at time $t \approx 15 \mathrm {~ms}$. The density of air is $\rho \approx 1 \mathrm {~kg} / \mathrm { m } ^ { 3 }$. Estimate the blast energy $E$.
    (b) How much mass-energy (in grams) was used up in this blast?
    (c) If we measure the entire function $R ( t )$, what general form would we expect it to have, if this dimensional analysis argument is correct?

(d) Repeat part (c) for the case where the shock wave is cylindrical. (This would be relevant if one detonated a long chain of explosives.)

Solution. (a) The only way to write an expression with the right dimensions is

$$
E \sim \frac { R ^ { 5 } \rho } { t ^ { 2 } } .
$$

Plugging in the numbers gives $E \sim 4 \times 10 ^ { 13 } \mathrm {~J}$.

(b) The mass-energy equivalent is $m = E / c ^ { 2 } \sim 0.5 \mathrm {~g}$. This is quite reasonable, as fission can only release a small fraction of the mass-energy (about 0.1\%) of a sample, and a typical critical mass is ~ 10 kg.
(c) Let's do the dimensional analysis in reverse: we know $E$ is fixed, so the only way to write an expression with the right dimensions for $R$ is
$$
R \sim \left( E t ^ { 2 } / \rho \right) ^ { 1 / 5 } \sim t ^ { 2 / 5 } .
$$
This indeed matches observations of the initial blast.
(d) In this case, the dimensional analysis changes because the energy of an infinite cylindrical shock wave is infinite; the meaningful quantity is the energy per length $\lambda$. Repeating the dimensional analysis gives
$$
R \sim \left( \lambda t ^ { 2 } / \rho \right) ^ { 1 / 4 } \sim t ^ { 1 / 2 } .
$$

Remark
The British physicist G. I. Taylor performed the dimensional analysis in problem 10 upon seeing a picture of the first atomic blast in a magazine. The result was so good that the physicists at the Manhattan project thought their security had been breached!

During World War II, the value of the critical mass needed to set off a nuclear explosion was important and nontrivial information. Some say the Nazi effort to make a bomb was stalled by Werner Heisenberg's huge overestimation of it, and after the war, the specific value was kept a secret. But it couldn't last. Already by 1947, the simple estimate was published in the American Journal of Physics.

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

Example 7
Estimate the Young's modulus for a material with interatomic separation $a$ and typical atomic bond energy $E _ { b }$. Use this to estimate the spring constant of a rod of area $A$ and length $L$, as well as the speed of sound, if each atom has mass $m$.


Solution
This example is to get you comfortable with the Young's modulus $Y$, which occasionally comes up. It is defined in terms of how much a material stretches as it is pulled apart,

$$
Y = \frac { \text { stress } } { \text { strain } } = \frac { \text { restoring force/cross-sectional area } } { \text { change in length/length } } .
$$

The Young's modulus is an intrinsic property of the material, which doesn't depend on its shape, unlike the spring constant. For example, putting two identical springs side-by-side doubles the spring constant, because they both contribute to the force. However, for a fixed strain, both the force and area double, so the stress remains unchanged. Similarly, putting two identical springs end-to-end halves the spring constant, because they both stretch. However, for a fixed stress, both the length and change in length double, so the strain remains unchanged. So you would quote a material's Young's modulus instead of its spring constant, for the same reason you would quote a material's resistivity instead of its resistance.

We note that $Y$ has the dimensions of energy per length cubed, so

$$
Y \sim \frac { E _ { b } } { a ^ { 3 } }
$$

solely by dimensional analysis. (Of course, for this dimensional analysis to work, one has to understand why $E _ { b }$ and $a$ are the only relevant quantities. It's because $Y$, or equivalently the spring constant $k$, determines the energy stored in a stretched spring. But microscopically this comes from the energy stored in interatomic bonds when they're stretched. So the relevant energy scale is the bond energy $E _ { b }$, and the relevant distance scale is $a$, because that determines how many bonds get stretched, and by how much.)

To relate $Y$ to the spring constant of a rod, note that

$$
Y = \frac { F / A } { \Delta L / L } = \frac { L } { A } \frac { F } { \Delta L } = k \frac { L } { A }
$$

for a rod, giving the estimate $k \sim A E _ { b } / L a ^ { 3 }$. This is correct to within an order of magnitude!
To relate $Y$ to the speed of sound, note that the sound speed, like most wave speeds, depends on the material's inertia and its restoring force against distortions. Since the speed of sound doesn't depend on the extrinsic features of a metal object, such as a length, both of these should be measured intrinsically. The intrinsic measure of inertia is the mass density $\rho \sim m / a ^ { 3 }$, while the intrinsic measure of restoring force is just $Y$. By dimensional analysis,

$$
v \sim \sqrt { \frac { Y } { \rho } } \sim \sqrt { \frac { E _ { b } / a ^ { 3 } } { m / a ^ { 3 } } } \sim \sqrt { \frac { E _ { b } } { m } } .
$$

This is also reasonably accurate. For example, in diamond, $E _ { b } \sim 1 \mathrm { eV }$ (a typical atomic energy scale), while a carbon nucleus contains 12 nucleons, so to the nearest order of magnitude, $m \sim 10 m _ { p }$, where a useful fact is $m _ { p } \sim 1 \mathrm { GeV } / \mathrm { c } ^ { 2 }$. Thus,

$$
v \sim \sqrt { \frac { 1 \mathrm { eV } } { 10 ^ { 10 } \mathrm { eV } } } c \sim 10 ^ { - 5 } c \sim 3 \mathrm {~km} / \mathrm { s }
$$


which is the right order of magnitude. (The true answer is 12 km/s.)
Amazingly, we can get an even rougher estimate of $v$ for any solid in terms of nothing besides fundamental constants. To be very rough, the binding energy is on the order of that of hydrogen. As you found in problem 9, this is, by dimensional analysis,

$$
E _ { b } \sim \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e ^ { 2 } } { a _ { 0 } } \sim m _ { e } \left( \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar } \right) ^ { 2 } .
$$

We take the nuclear mass to be very roughly the proton mass $m _ { p }$, which gives

$$
\frac { v } { c } \sim \sqrt { \frac { m _ { e } } { m _ { p } } \left( \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar c } \right) ^ { 2 } } \sim \alpha \sqrt { \frac { m _ { e } } { m _ { p } } }
$$

where $\alpha$ is as found in problem 11. This expresses the speed of sound in terms of the dimensionless strength of electromagnetism $\alpha$, the electron to proton mass ratio, and the speed of light. The approximations we have made have been so rough that now the answer is off by at least an order of magnitude, but now we know how the answer would change if the fundamental constants did.

Estimates as simple as these can be surprising to even seasoned physicists: in 2020, the simple estimate above was rediscovered and published in one of the top journals in science. If you want to learn how to do more of these estimates, this paper is a good starting point.

## Remark

A warning: from these examples, you could get the idea that dimensional analysis gives you nearly godlike powers, and the ability to write down the answer to most physics problems instantly. In reality, it only works if you're pretty sure your physical system depends on only about 3 or 4 variables - and the hard part is often finding which variables matter. For example, as we saw above, you can't get Kepler's third law for free because that requires knowing the dimensions of $G$, which require knowing that gravity is an inverse square law in the first place, a luxury Kepler didn't have. And as another example, we couldn't have figured out $E = m c ^ { 2 }$ long before Einstein, as who would have thought that the speed of light had anything to do with the energy of a lump of matter? Without the framework of relativity, it seems as irrelevant as the speed of sound or the speed of water waves.

Fortunately, carrying out dimensional analysis in practice is usually fairly straightforward. Often, on exams, you'll simply be told which variables matter. And in general, you should get into the habit of doing it constantly, to check your work.

## Example 8

Cutting-edge paleontological research has found that the famed T. Rex was essentially a gigantic chicken. Suppose a T. Rex is about $N = 20$ times larger in scale than a chicken. How much larger is its weight, cross-sectional area of bone, and walking speed?


Solution
These kinds of biological scaling arguments are fun to think about, though the reliability of the results is somewhat questionable - the data is extremely noisy, and if any given scaling law doesn't quite match it, you can always think a bit more, and come up with a new argument yielding a different scaling. But here are a few simple examples:

- Since the densities should match, the weight should scale with the volume, so as $N ^ { 3 }$.
- Since the maximum compressive pressure that bone can take should be the same, the bone area should scale with the weight, so also as $N ^ { 3 }$. That is, the width of the bones scales as $N ^ { 3 / 2 }$, while their length $L$ scales only as $N$. This is the reason small animals are strong relative to their weight, while large ones need to be very bony to even stand. The largest animals today are whales, as they don't need to support their own weight.
- As a very crude model of walking, we can think of the legs as swinging like a free pendulum. The length of one step is proportional to $L$, while the period of the steps is proportional to $\sqrt { L }$. Thus, the walking speed scales as $\sqrt { L } \propto \sqrt { N }$.

There's an entire literature on these arguments. For instance, this delightful paper discusses how furry mammals shake to dry themselves off. This is an increasingly severe problem for smaller mammals, since a relatively larger amount of water will cling to them after getting wet, which can cause hypothermia. Using elementary fluid mechanics, the paper argues that the optimal frequency the mammal will shake to dry itself off scales as $f \propto m ^ { - 3 / 16 }$.

Example 9
How does the maximum jump height of an animal depend on its length scale $L$ ? How about the gravitational acceleration $g$ ?

Solution
The maximum jump height $h$ satisfies $E = m g h$ where $E$ is the energy supplied by the muscles. But both the total mass $m$ and the animal's muscle mass (which determines $E$ ) scale as $L ^ { 3 }$, so we have $h \propto L ^ { 0 }$. So the jump height doesn't scale with size: a dinosaur can't jump much higher than a human - and indeed, we can't jump much higher than fleas can!

The other half of the problem seems very simple: we must have $h \propto 1 / g$ because neither $E$ or $m$ depend on $g$. But this is completely wrong! In gravity $10 g$, a person wouldn't be able to jump at all; they'd be so crushed by their own weight that they wouldn't even be able to stand. Mathematically, the dimensional analysis argument fails here because the answer depends on the detailed biomechanics of muscle and bone, which involve many more dimensionful quantities. By contrast, the result $h \propto L ^ { 0 }$ works well because the animals we were comparing all evolved so that their muscles would work reasonably well in Earth's gravity, releasing a decent fraction of their stored energy in the short time required for a jump. So, as remarked above, you can't solve every problem by just listing a few quantities and doing dimensional analysis - you really have to understand the system each time.


## 2 Approximations

Idea 4: Taylor Series
For small $x$, a function $f ( x )$ may be approximated as

$$
f ( x ) = f ( 0 ) + x f ^ { \prime } ( 0 ) + \frac { x ^ { 2 } } { 2 } f ^ { \prime \prime } ( 0 ) + \ldots + \frac { x ^ { n } } { n ! } f ^ { ( n ) } ( 0 ) + \mathcal { O } \left( x ^ { n + 1 } \right)
$$

where we will write $\mathcal { O } \left( x ^ { n } \right)$ for an error term that shrinks as $x \rightarrow 0$ at least as fast as $x ^ { n }$. (This will be convenient, though it's the opposite of the usage in computer science, where "big- $O$ " notation denotes how fast terms can grow as $x \rightarrow \infty$.)

There are a few Taylor series that are essential to know. The most important are

$$
\exp ( x ) = 1 + x + \frac { x ^ { 2 } } { 2 } + \frac { x ^ { 3 } } { 6 } + \mathcal { O } \left( x ^ { 4 } \right) , \quad \log ( 1 + x ) = x - \frac { x ^ { 2 } } { 2 } + \frac { x ^ { 3 } } { 3 } - \mathcal { O } \left( x ^ { 4 } \right)
$$

and the small angle approximations

$$
\sin x = x - \frac { x ^ { 3 } } { 6 } + \mathcal { O } \left( x ^ { 5 } \right) , \quad \cos x = 1 - \frac { x ^ { 2 } } { 2 } + \mathcal { O } \left( x ^ { 4 } \right) .
$$

Another Taylor series you learned long before calculus class is

$$
\frac { 1 } { 1 - x } = 1 + x + x ^ { 2 } + x ^ { 3 } + \mathcal { O } \left( x ^ { 4 } \right) .
$$

Usually you'll only need the first one or two terms, but for practice we'll do examples with more. If any of these results aren't familiar, you should rederive them!

Example 10
Find the Taylor series for $\tan x$ up to, and including the fourth order term.

Solution
By the fourth order term, we mean the term proportional to $x ^ { 4 }$. (Not the fourth nonzero term, which would be $\mathcal { O } \left( x ^ { 7 } \right)$.) Of course, $\tan x$ is an odd function, so the $\mathcal { O } \left( x ^ { 4 } \right)$ term is zero, which means we only need to expand up to $\mathcal { O } \left( x ^ { 3 } \right)$. That means we can neglect $\mathcal { O } \left( x ^ { 4 } \right)$ terms and higher everywhere in the computation, subject to some caveats we'll point out later.

By definition, we have

$$
\tan x = \frac { \sin x } { \cos x } = \frac { x - x ^ { 3 } / 6 + \mathcal { O } \left( x ^ { 5 } \right) } { 1 - x ^ { 2 } / 2 + \mathcal { O } \left( x ^ { 4 } \right) } .
$$

However, it's a little tricky because we have a Taylor series in a denominator. There are two ways to deal with this. We could multiply both sides by $\cos x$, and expand $\tan x$ in a Taylor series with unknown coefficients. Then we would get a system of equations that will allow us to solve for the coefficients recursively, a technique known as "reversion of series".


A faster method is to use the Taylor series for $1 / ( 1 - x )$. We have

$$
\frac { 1 } { 1 - u } = 1 + u + \mathcal { O } \left( u ^ { 2 } \right)
$$

and substituting $u = x ^ { 2 } / 2 - \mathcal { O } \left( x ^ { 4 } \right)$ gives

$$
\frac { 1 } { \cos x } = 1 + \frac { x ^ { 2 } } { 2 } + \mathcal { O } \left( x ^ { 4 } \right) .
$$

Therefore, we conclude

$$
\tan x = \left( x - x ^ { 3 } / 6 + \mathcal { O } \left( x ^ { 5 } \right) \right) \left( 1 + x ^ { 2 } / 2 + \mathcal { O } \left( x ^ { 4 } \right) \right) = x + x ^ { 3 } / 3 + \mathcal { O } \left( x ^ { 5 } \right) .
$$

Here I was fairly careful with writing out all the error terms and intermediate steps, but as you get better at this process, you'll be able to do it faster. (Of course, one could also have done this example by just directly computing the Taylor series of $\tan x$ from its derivatives. This is possible, but for more complicated situations it's generally not a good idea, because computing high derivatives of a complex expression tends to get very messy. It's better to just Taylor expand the individual pieces and combine the results, as we did here.)

## Remark

Finding series up to a given order can be subtle. For example, if you want to compute an $\mathcal { O } \left( x ^ { 4 } \right)$ term, it is not always enough to expand everything up to $\mathcal { O } \left( x ^ { 4 } \right)$, because powers of $x$ might cancel. To illustrate this, the last step here is wrong:

$$
\tan x = \frac { x ^ { 3 } \sin x } { x ^ { 3 } \cos x } = \frac { x ^ { 4 } + \mathcal { O } \left( x ^ { 6 } \right) } { x ^ { 3 } + \mathcal { O } \left( x ^ { 5 } \right) } \neq x + \mathcal { O } \left( x ^ { 5 } \right) .
$$

[2] Problem 13. Find the Taylor series for $1 / \cos x$ up to and including the fourth order $\left( \mathcal { O } \left( x ^ { 4 } \right) \right)$ term.
Solution. The derivatives of $\cos ( x )$ at $x = 0$ are 0, -1, 0, 1, so

$$
\cos x = 1 - \frac { x ^ { 2 } } { 2 } + \frac { x ^ { 4 } } { 4 ! } + \mathcal { O } \left( x ^ { 6 } \right) .
$$

To expand the inverse, note that

$$
\frac { 1 } { 1 - u } = 1 + u + u ^ { 2 } + \mathcal { O } \left( u ^ { 3 } \right)
$$

where in our case, $u = x ^ { 2 } / 2 - x ^ { 4 } / 24$. Plugging this in gives

$$
\frac { 1 } { \cos x } = 1 + \left( x ^ { 2 } / 2 - x ^ { 4 } / 24 \right) + \left( x ^ { 2 } / 2 - x ^ { 4 } / 24 \right) ^ { 2 } + \mathcal { O } \left( x ^ { 6 } \right) = 1 + \frac { x ^ { 2 } } { 2 } + \frac { 5 x ^ { 4 } } { 24 } + \mathcal { O } \left( x ^ { 6 } \right) .
$$

[2] Problem 14. Extend the computation above to get the $x ^ { 5 }$ term in the Taylor series for $\tan x$.
Solution. From this point on we will start omitting the explicit $\mathcal { O } \left( x ^ { n } \right)$ error terms. We have

$$
\left( x - x ^ { 3 } / 6 + x ^ { 5 } / 120 \right) \left( 1 + x ^ { 2 } / 2 + 5 x ^ { 4 } / 24 \right) = x + x ^ { 3 } / 2 + 5 x ^ { 5 } / 24 - x ^ { 3 } / 6 - x ^ { 5 } / 12 + x ^ { 5 } / 120
$$

giving the answer,

$$
\tan ( x ) = x + \frac { x ^ { 3 } } { 3 } + \frac { 2 x ^ { 5 } } { 15 } .
$$


[3] Problem 15. For small $x$, approximate the quantity
$$
\frac { x ^ { 2 } e ^ { x } } { \left( e ^ { x } - 1 \right) ^ { 2 } } - 1
$$
to lowest nontrivial order. That is, find the first nonzero term in the Taylor series.
Solution. After some trial and error, you'll find that the constant and linear terms vanish. Next, we try the quadratic term. For this term, the $e ^ { x }$ in the numerator has to be expanded out to quadratic order. However, the denominator itself is proportional to $x ^ { 2 }$, cancelling with the power of $x ^ { 2 }$ in the numerator, which means that we have to expand the $e ^ { x }$ in the denominator to third order. If we don't do this, we'll still get a quadratic term, but it won't have the right prefactor.
Again suppressing the error terms, we have
$$
\begin{aligned}
\frac { x ^ { 2 } \left( 1 + x + x ^ { 2 } / 2 \right) } { \left( x + x ^ { 2 } / 2 + x ^ { 3 } / 6 \right) ^ { 2 } } - 1 & = \frac { 1 + x + x ^ { 2 } / 2 } { 1 + x + 7 x ^ { 2 } / 12 } - 1 \\
& = \left( 1 + x + x ^ { 2 } / 2 \right) \left( 1 - x + 5 x ^ { 2 } / 12 \right) - 1 \\
& = - \frac { x ^ { 2 } } { 12 }
\end{aligned}
$$
Note that we have been careful to keep the manipulations as simple as possible, e.g. by canceling the $x / x$ as early as possible. If you don't do this, everything gets very messy and it's unclear what is contributing at what order, because of the subtlety pointed out in the above remark. Now, the factor of -1/12 in the final answer is actually the same factor as in the classic result $1 + 2 + 3 + \ldots = - 1 / 12$. The reason will be explained in an example in X1.
[3] Problem 16. The function $\cos ^ { - 1 } ( 1 - x )$ does not have a Taylor series about $x = 0$. However, it does have a series expansion about $x = 0$ in a different variable.
    (a) What is this variable, and what's the first term in the series?
    (b) ★ What's the next nontrivial term in the series?

Solution. (a) We have

$$
\frac { d } { d x } \arccos ( 1 - x ) = \frac { 1 } { \sqrt { 1 - ( 1 - x ) ^ { 2 } } }
$$

which is undefined at $x = 0$, so there is no Taylor series. But note that if we let $y = \cos ^ { - 1 } ( 1 - x )$ and take the cosine of both sides, we have

$$
\cos y = 1 - x .
$$

Now $y$ does have a good Taylor series near $y = 0$, which corresponds to where $x = 0$. At lowest order, we have

$$
1 - y ^ { 2 } / 2 \approx 1 - x
$$

which implies that

$$
y \approx \sqrt { 2 x } .
$$

More generally, the answer is a series in $\sqrt { x }$. Since cosine is even, the next term is $\mathcal { O } \left( x ^ { 3 / 2 } \right)$.


(b) In order to get higher order terms, we can write
$$
\cos ^ { - 1 } ( 1 - x ) = \cos ^ { - 1 } \left( 1 - u ^ { 2 } \right)
$$
where $u = \sqrt { x }$, and directly compute a Taylor series in $u$, using the usual rule for a derivative of an inverse function.
That approach is straightforward, but for variety we'll show a slightly trickier but much faster method. Write the answer as
$$
y = \sqrt { 2 } x ^ { 1 / 2 } + A x ^ { 3 / 2 } + \mathcal { O } \left( x ^ { 5 / 2 } \right)
$$
where $A$ is to be determined. By the Taylor series for cosine, we know that
$$
1 - x = \cos y = 1 - \frac { y ^ { 2 } } { 2 } + \frac { y ^ { 4 } } { 24 } + \mathcal { O } \left( y ^ { 6 } \right)
$$
which is equivalent to
$$
x = \frac { y ^ { 2 } } { 2 } - \frac { y ^ { 4 } } { 24 } + \mathcal { O } \left( x ^ { 3 } \right)
$$
since $y ^ { 6 } = \mathcal { O } \left( x ^ { 3 } \right)$. We can now plug in our expression for $y$. Equating the term linear in $x$ just recovers the result of part (a), while equating the term quadratic in $x$ (which vanishes on the left-hand side) gives the coefficient $A$. Concretely, we have
$$
\frac { y ^ { 2 } } { 2 } = x + \sqrt { 2 } A x ^ { 2 } + \mathcal { O } \left( x ^ { 3 } \right)
$$
and
$$
\frac { y ^ { 4 } } { 24 } = \frac { 1 } { 6 } x ^ { 2 } + \mathcal { O } \left( x ^ { 3 } \right)
$$
from which we conclude $A = 1 / ( 6 \sqrt { 2 } )$, so that
$$
\cos ^ { - 1 } ( 1 - x ) = \sqrt { 2 x } + \frac { x ^ { 3 / 2 } } { 6 \sqrt { 2 } } + \mathcal { O } \left( x ^ { 5 / 2 } \right) .
$$
This technique is called "reversion of series".

Idea 5: Binomial Theorem
When both $x$ and $x n$ are small, it is useful to use the binomial theorem,

$$
( 1 + x ) ^ { n } = 1 + x n + \mathcal { O } \left( x ^ { 2 } n ^ { 2 } \right) .
$$

It applies even when $n$ is not an integer. In particular, $n$ can be very large, very small, or even negative. The extra terms will be small as long as $x n$ is small. If desired, one can find higher terms using binomial coefficients,

$$
( 1 + x ) ^ { n } = \sum _ { m = 0 } ^ { \infty } \binom { n } { m } x ^ { m }
$$

where the definition of the binomial coefficient is formally extended to arbitrary real $n$.
The binomial theorem is one of the most common approximations in physics. It's really just taking the first two terms in the Taylor series of $( 1 + x ) ^ { n }$, but we give it a name because it's so useful.


[1] Problem 17. Suppose the period of a pendulum is one second, and recall that
$$
T = 2 \pi \sqrt { \frac { L } { g } } .
$$
If the length is increased by 3\% and $g$ is increased by 1\%, use the binomial theorem to estimate how much the period changes. This kind of thinking is extremely useful when doing experimental physics, and you should be able to do it in your head.
Solution. The change in $L$ increases the period by $3 \% / 2 = 1.5 \%$ and the change in $g$ decreases the period by $1 \% / 2 = 0.5 \%$. So the net change is an increase of $1 \%$.
[1] Problem 18. Consider an electric charge $q$ placed at $x = 0$ and a charge $- q$ placed at $x = d$. For $x > d$, the electric field along the $x$ axis is
$$
E ( x ) = \frac { q } { 4 \pi \epsilon _ { 0 } } \left( \frac { 1 } { x ^ { 2 } } - \frac { 1 } { ( x - d ) ^ { 2 } } \right) .
$$
For $x \gg d$, use the binomial theorem to approximate the field.
Solution. Use the binomial theorem with $d / x \ll 1$ to get
$$
\frac { 1 } { ( x - d ) ^ { 2 } } = \frac { 1 } { x ^ { 2 } } \left( 1 + \frac { 2 d } { x } \right) .
$$
Then
$$
E ( x ) = - \frac { 2 q d } { 4 \pi \epsilon _ { 0 } x ^ { 3 } } = - \frac { q d } { 2 \pi \epsilon _ { 0 } x ^ { 3 } } .
$$
This is the on-axis field of an electric dipole.
[3] Problem 19. Some exercises involving square roots.
    (a) Manually find the Taylor series for $\sqrt { 1 + x }$ up to second order, and verify they agree with the binomial theorem.
    (b) Approximate $\sqrt { 1 + 2 x + x ^ { 2 } }$ for small $x$ using the binomial theorem. Does the result match what you expect? If not, how can you correct it?

Solution. (a) The binomial theorem gives $1 + x / 2$. By differentiating, we get $1 / ( 2 \sqrt { 1 + x } )$ and $- 1 / \left( 4 ( 1 + x ) ^ { 3 / 2 } \right)$. Then

$$
\sqrt { 1 + x } = 1 + \frac { 1 } { 2 } x - \frac { 1 } { 8 } x ^ { 2 } + \mathcal { O } \left( x ^ { 3 } \right) .
$$

The first two terms agree with the usual form of the binomial theorem. For the third term, note that the coefficient should be

$$
\binom { 1 / 2 } { 2 } = \frac { ( 1 / 2 ) ( - 1 / 2 ) } { 2 } = - \frac { 1 } { 8 }
$$

which is indeed what we find.


(b) Of course, the result is $1 + x$, so we want the $\mathcal { O } \left( x ^ { 2 } \right)$ term to vanish. On the other hand, applying the binomial theorem gives
$$
\sqrt { 1 + 2 x + x ^ { 2 } } \approx 1 + \frac { 1 } { 2 } \left( 2 x + x ^ { 2 } \right) = 1 + x + \frac { x ^ { 2 } } { 2 }
$$
which is wrong! The reason is that the first order binomial theorem isn't good enough, because the second order term in the binomial theorem will also contribute a second order term to the answer. Using the result of part (a),
$$
\begin{aligned}
\sqrt { 1 + 2 x + x ^ { 2 } } & = 1 + \frac { 1 } { 2 } \left( 2 x + x ^ { 2 } \right) - \frac { 1 } { 8 } \left( 2 x + x ^ { 2 } \right) ^ { 2 } + \mathcal { O } \left( \left( 2 x + x ^ { 2 } \right) ^ { 3 } \right) \\
& = 1 + x + \frac { x ^ { 2 } } { 2 } - \frac { 1 } { 8 } \left( 2 x + x ^ { 2 } \right) ^ { 2 } + \mathcal { O } \left( x ^ { 3 } \right) \\
& = 1 + x + \frac { x ^ { 2 } } { 2 } - \frac { 1 } { 8 } ( 2 x ) ^ { 2 } + \mathcal { O } \left( x ^ { 3 } \right) \\
& = 1 + x + \mathcal { O } \left( x ^ { 3 } \right)
\end{aligned}
$$
as desired.

Example 11: Birthday Paradox
If you have $n$ people in a room, around how large does $n$ have to be for there to be at least a 50\% chance of two people sharing the same birthday?

Solution
Imagine adding people one at a time. The second person has a 1/365 chance of sharing a birthday with the first. If they don't share a birthday, the third person has a 2/365 chance of sharing a birthday with either, and so on. So a decent estimate for $n$ is the $n$ where

$$
\left( 1 - \frac { 1 } { 365 } \right) \left( 1 - \frac { 2 } { 365 } \right) \ldots \left( 1 - \frac { n - 1 } { 365 } \right) \approx \frac { 1 } { 2 } .
$$

The surprising point of the birthday paradox is that $n \ll 365$. So we can use the binomial theorem in reverse, approximating the left-hand side as

$$
\left( 1 - \frac { 1 } { 365 } \right) \left( 1 - \frac { 1 } { 365 } \right) ^ { 2 } \ldots \left( 1 - \frac { 1 } { 365 } \right) ^ { n - 1 } = \left( 1 - \frac { 1 } { 365 } \right) ^ { n ( n - 1 ) / 2 } \approx \left( 1 - \frac { 1 } { 365 } \right) ^ { n ^ { 2 } / 2 }
$$

which is valid since $n / 365$ is small. It's tempting to use the binomial theorem again to write

$$
\left( 1 - \frac { 1 } { 365 } \right) ^ { n ^ { 2 } / 2 } \approx 1 - \frac { n ^ { 2 } } { 2 \cdot 365 } = \frac { 1 } { 2 }
$$

which gives $n = 19$. However, this is a bad approximation, because the binomial theorem only works if $\left( n ^ { 2 } / 2 \right) ( 1 / 365 )$ is very small, but here we've set it to 1/2, which isn't particularly small. Since the series expansion variable is 1/2, each term in the series expansion is roughly 1/2 as big as the last (ignoring numerical coefficients), so we expect to be off by about $( 1 / 2 ) ^ { 2 } = 25 \%$.

The binomial theorem is an expansion for $( 1 + x ) ^ { y }$ which works when both $x$ and $x y$ are small. Here $x y$ isn't small, and we instead want an approximation that works when only $x$ is


small. One trick to dealing with an annoying exponent is to take the logarithm, since that just turns it into a multiplicative factor. Note that

$$
\log \left( ( 1 + x ) ^ { y } \right) = y \log ( 1 + x ) \approx y x
$$

by Taylor series, which implies that

$$
( 1 + x ) ^ { y } \approx e ^ { y x }
$$

when $x$ is small, an important fact which you should remember. So we have

$$
\left( 1 - \frac { 1 } { 365 } \right) ^ { n ^ { 2 } / 2 } \approx e ^ { - n ^ { 2 } / ( 2 \cdot 365 ) } = \frac { 1 } { 2 }
$$

and solving gives $n = 22.5$. We should round up since $n$ is actually an integer, giving $n = 23$, which is indeed the exact answer.

## Remark

Precisely how accurate is the approximation $( 1 + x ) ^ { y } \approx e ^ { y x }$ ? Note that the only approximate step used to derive it was taking $\log ( 1 + x ) \approx x$, which means we can get the corrections by expanding to higher order. If we take the next term, $\log ( 1 + x ) \approx x - x ^ { 2 } / 2$, then we find

$$
( 1 + x ) ^ { y } \approx e ^ { y x } e ^ { - x ^ { 2 } y / 2 }
$$

Note that because we are approximating the logarithm of the quantity we want, the next correction is multiplicative rather than additive. Our approximation has good fractional precision as long as $x ^ { 2 } y \ll 1$. In the previous example, $x ^ { 2 } y / 2 = ( 22.5 / 365 ) ^ { 2 } / 4 = 0.1 \%$, so our answer was quite accurate.
[2] Problem 20. Find a series approximation for $x ^ { y }$, given that $y$ is small and $x$ positive, but neither small nor exponentially huge. (Hint: to check if you have it right, you can try concrete numbers, such as $y = 0.01$ and $x = 10$. The series expansion variable may look a bit unusual.)

Solution. Let's write

$$
x ^ { y } = e ^ { y \log ( x ) } .
$$

If $y$ is small, then for any reasonable $x$ (i.e. $x$ not exponentially huge), $y \log ( x )$ is also small. So we can use the Taylor series for the exponential to get

$$
x ^ { y } \approx 1 + y \log ( x ) + \mathcal { O } \left( ( y \log ( x ) ) ^ { 2 } \right)
$$

with further terms easily computed.
By the way, this shows you what logarithms really are: they are the limits of "zeroth" powers,

$$
\log x = \lim _ { \epsilon \rightarrow 0 } \frac { x ^ { \epsilon } - 1 } { \epsilon } .
$$

The power rule for integration, $\int x ^ { n } d x = x ^ { n + 1 } / ( n + 1 ) + C$, breaks down for $n = - 1$, where it would give $x ^ { 0 } / 0$. Given the above result, it's not surprising that in this case the integral is a logarithm.


Remark
As you can see, there are lots of different types of series approximations, and many more we haven't even mentioned at all. For example, Fourier series will be important in W1, and the Pade approximant is a twist on a Taylor series which instead approximates a function with a ratio of polynomials. The number of ways one can approximate things is truly incredible. For a comprehensive overview, see Advanced Mathematical Methods for Scientists and Engineers by Bender and Orszag. For another perspective which is more useful for discrete math, see Concrete Mathematics by Graham, Knuth, and Patashnik.

Remark
Just for fun, here are some more examples of tough series expansions. First, in the "Lindhard" theory of electrical shielding in metals, one has to perform the small $x$ expansion

$$
\frac { 1 } { 2 } + \frac { x ^ { 2 } - 1 } { 4 x } \log \left( \frac { 1 + x } { 1 - x } \right) \approx \frac { x ^ { 2 } } { 3 } + \mathcal { O } \left( x ^ { 4 } \right) .
$$

Since there's a $1 / x$ in front of the second term, you have to expand the logarithm to third order to get the right prefactor, like in problem 15, but the algebra's a lot messier.

The Soviet mathematician V.I. Arnold used to say that math has gone downhill since Newton, because people in that time could supposedly quickly evaluate the limit

$$
\lim _ { x \rightarrow 0 } \frac { \sin ( \tan ( x ) ) - \tan ( \sin ( x ) ) } { \arcsin ( \arctan ( x ) ) - \arctan ( \arcsin ( x ) ) }
$$

The first terms that don't cancel are $\mathcal { O } \left( x ^ { 7 } \right)$, giving

$$
\lim _ { x \rightarrow 0 } \frac { - \frac { 55 x ^ { 7 } } { 1008 } + \frac { 107 x ^ { 7 } } { 5040 } + \mathcal { O } \left( x ^ { 9 } \right) } { - \frac { 341 x ^ { 7 } } { 5040 } + \frac { 173 x ^ { 7 } } { 5040 } + \mathcal { O } \left( x ^ { 9 } \right) } = 1 .
$$

This amazingly simple answer can be found with a very tricky geometric argument, of the style common in Newton's Principia, though it's hard to make it totally rigorous.

Finally, as we will see in E2, the capacitance of two spheres of radius $a$ separated by $r \gg a$ can be written as an infinite series in $a / r$. In his Treatise on Electricity and Magnetism (1891, section 146), Maxwell manually evaluated this series out to order $( a / r ) ^ { 22 }$ ! I don't even know what the point of that was, but it illustrates why physicists took decades to fully comprehend the implications of Maxwell's Treatise. Today, we teach the conceptual essentials of Newton and Maxwell's physics, but the reason they're giants is because they put their theories to work, in tough calculations we barely hear about today.

Remark
When a problem says $\alpha \ll 1$, what does it mean? Does it mean we are allowed to set $\alpha = 0$ ? Or perhaps that we should always expand to first order in $\alpha$ ? As you've seen from the above questions, it depends on the context. The rule is always that you want


the simplest approximation that gives the essential physics for the problem you're considering.
For example, let's return to problem 18, where we consider an electric dipole with $d / x \ll 1$. If we just plugged in $d = 0$, we would get $E ( x ) = 0 + \mathcal { O } ( d / x )$. That's a mathematically true statement which does have physical meaning (i.e. that the far fields of dipoles are much smaller than those of individual charges), but in a problem it usually isn't enough because you want to use an expression for $E ( x )$ to do something else. So in the problem, we kept the $\mathcal { O } ( d / x )$ term. But if we had gone out to $\mathcal { O } \left( d ^ { 2 } / x ^ { 2 } \right)$, we would have found

$$
E ( x ) = - \frac { q } { 4 \pi \epsilon _ { 0 } x ^ { 2 } } \left( \frac { 2 d } { x } + \frac { 3 d ^ { 2 } } { x ^ { 2 } } + \mathcal { O } \left( d ^ { 3 } / x ^ { 3 } \right) \right) .
$$

If you then used this expression, in a problem that expects you to use only the $\mathcal { O } ( d / x )$ term, you would probably get annoyingly complicated expressions. So does that mean you should always throw out quadratic terms? Of course not; sometimes they matter. For instance, the quadratic term above would be the leading effect if we cared about the deviation of the field of a finite-sized dipole from an ideal one. It is the "quadrupolar" part of the potential.

Students often desire a single magic rule they can apply mechanically, but in physics, you really have to think through each case. However, if this sounds overwhelming, don't worry. 90\% of approximations on the USAPhO and IPhO are pretty simple, and just boil down to

$$
\sin x \approx x , \quad \cos x \approx 1 - x ^ { 2 } / 2 , \quad ( 1 + x ) ^ { n } \approx 1 + x n , \quad e ^ { x } \approx 1 + x , \quad \log ( 1 + x ) \approx x .
$$

These are the only results that you have to know by heart.

## 3 Numeric Solutions

Idea 6
In Olympiads, you may have to find numeric solutions for equations that can't be solved analytically. A simple but reliable method is to "guess and check", starting with a reasonable first guess (e.g. derived by solving an approximated version of the equation, or sketching the graphs of both sides), plugging it into both sides, then proceeding with binary search.

[3] Problem 21. Sometimes, you can get an accurate numeric answer very quickly on a basic calculator by using the method of iteration, which solves equations of the form $x = f ( x )$.
    (a) Take a scientific calculator (in radians), put in any number, and press the "cos" button many times. Convince yourself that the final number you get is the unique solution to $x = \cos x$.
    (b) What are the key features of the graphs of $x$ and $\cos x$ that made this work? For example, why doesn't pressing $\cos ^ { - 1 }$ repeatedly give the same result? As another example, since $x = \sin x$ has a unique solution, why does repeatedly pressing sin not work so well?
    (c) Find a nonzero solution for $x = \tan ( x / 2 )$.
    (d) Find a nonzero solution for $e ^ { x } - 1 = 2 x$.

(e) ★ Find a single iteration that can solve $x = r ( 1 - x ) ^ { 2 }$ for both $r = 1 / 2$ and $r = 1$.

Solution. (a) Well, just try it!

(b) What makes $\cos x$ work and $\arccos x$ fail is that at the solution to $x = \cos x$, the magnitude of the slope of $\cos ( x )$ is less than 1 , while that of $\arccos ( x )$ is greater than 1 .
Specifically, suppose $x _ { 0 }$ is a solution to $x = f ( x )$, and we start at $x = x _ { 0 } + \epsilon$ for some small $\epsilon$. Under the tangent line approximation, iterating a function $f$ will take us to $x _ { 0 } + f ^ { \prime } \left( x _ { 0 } \right) \epsilon$. If $\left| f ^ { \prime } \left( x _ { 0 } \right) \right| < 1$, then we get closer to the answer, while if $\left| f ^ { \prime } \left( x _ { 0 } \right) \right| > 1$, then we get further away. Therefore, iterating $\cos x$ will let us converge to the answer exponentially.
Another, more global reason that $\cos x$ works so well is that it's bounded. So whatever your initial guess is, at the next stage it'll be mapped to within [-1, 1], and from then on it'll close in on the answer. Once you get close enough, the preceding paragraph kicks in and convergence is exponential. But for many other functions, you'll have to choose your initial guess sufficiently close, or else you might get the wrong solution, or diverge to infinity.
The equation $\sin x = x$ has a unique solution $x = 0 , \sin x$ is bounded, and the slope of $\sin x$ is never greater than 1. So in principle iteration should work. However, near zero, the slope of sine gets closer and closer to 1, which makes convergence very slow! If you play around a bit with series, you can show that after $n$ iterations, your answer starts shrinking as $1 / \sqrt { n }$, which is much worse than the exponential convergence. This is an exotic case though; you probably won't see it in practice.
In general, iteration can "go wrong" in far weirder ways. For example, suppose you tried to iterate $x \rightarrow r x ( 1 - x )$ for a constant $r$. This is called the logistic map, and it turns out that if $r$ is in the right range, the result is chaotic! The result bounces around in an unpredictable way, never repeating itself, and you get a completely different result after a few iterations if you start with a very slightly different number.
(c) Note that iterating $x \rightarrow \tan ( x / 2 )$ will lead to $x = 0$. In this case, the solution $x = 0$ is stable, while the solution we actually want is unstable. To get the other solution, we use the inverse: $x \rightarrow 2 \arctan ( x )$. Concretely, type in a reasonable guess in your calculator like 3, and then enter $2 \arctan ( \mathrm { Ans } )$, and keep pressing the "=" button. Eventually you'll get $x = 2.331$ or $x = - 2.331$, depending on your initial guess.
(d) Iterating $x \rightarrow \left( e ^ { x } - 1 \right) / 2$ will also yield $x = 0$, so iterate $x \rightarrow \ln ( 1 + 2 x )$. That is, type in a guess like 2 , and type in $\ln ( 1 + 2 \mathrm { Ans } )$. Eventually you'll get to $x = 1.256$.
By the way, here I'm writing ln because that's what the button for natural logarithm says on most calculators, but in the future, I'll always denote the natural logarithm with log, which is the standard for all advanced physics courses.
(e) Of course, you can just solve this quadratic exactly, but I include it here as an illustrative example. Iterating $x \rightarrow r ( 1 - x ) ^ { 2 }$ will work for $r = 1 / 2$, but it's unstable for $r = 1$. That also means that using the inverse iteration $x \rightarrow 1 - \sqrt { x / r }$ won't work, because it'll be stable for $r = 1$ but unstable for $r = 1 / 2$.
Instead, we need to play around with the expression. It turns out another possible iteration is $x \rightarrow ( 2 + 1 / r - x ) ^ { - 1 }$, and this is stable for both $r = 1 / 2$ and $r = 1$, and in fact for all $r > 0$.

[2] Problem 22. [A] Newton's method is a more sophisticated method for solving equations, which converges substantially faster than binary search. Suppose we want to solve the equation $f ( x ) = 0$. Starting with a nearby guess $x _ { 0 }$, we evaluate $f \left( x _ { 0 } \right)$ and $f ^ { \prime } \left( x _ { 0 } \right)$, then find our next guess by applying the tangent line approximation at this point,
$$
x _ { 1 } = x _ { 0 } - \frac { f \left( x _ { 0 } \right) } { f ^ { \prime } \left( x _ { 0 } \right) } .
$$
The process repeats until we get a suitably accurate answer.
    (a) Use Newton's method to solve $x = \cos x$.
    (b) Newton's method converges quadratically, in the sense that for typical functions, if your current guess is $\epsilon$ away from the answer, the next guess will be $\mathcal { O } \left( \epsilon ^ { 2 } \right)$ away. (This implies that the number of correct digits in the answer roughly doubles with each iteration!) Explain why, and then find an example where Newton's method doesn't converge this fast.

Newton's method is very important in general, but it's not that useful on Olympiads. It takes a while to set up, especially if the derivative $f ^ { \prime }$ is complicated, and you usually don't need that many significant figures in your answer anyway. (There are alternatives to Newton's method, such as Halley's method, that converge even faster, but the tradeoff is the same: each iteration takes more effort to calculate, as higher derivatives of $f$ must be computed.)

Solution. (a) We want to solve $f ( x ) = \cos x - x = 0$, which means we iterate

$$
x + \frac { \cos x - x } { \sin x + 1 } .
$$

Starting from a reasonable guess $x _ { 0 } = 0.5$, we find

$$
x _ { 1 } = 0.755222 , \quad x _ { 2 } = 0.739142 , \quad x _ { 3 } = 0.739085 .
$$

The next iteration gives the same thing for the first six decimal places, so after just three iterations, we already have six significant digits in the answer.


(b) If the tangent line approximation was exact, then Newton's method would converge to the answer in one iteration, $f \left( x _ { 1 } \right) = 0$. So if you're already close to the answer, the leading source of inaccuracy is the second-order term in the Taylor expansion of $f$, giving $f \left( x _ { 1 } \right) \approx$ $\epsilon ^ { 2 } f ^ { \prime \prime } \left( x _ { 0 } \right) / 2$. Applying the tangent line approximation again, this implies we are roughly a distance $\epsilon ^ { 2 } f ^ { \prime \prime } \left( x _ { 0 } \right) / 2 f ^ { \prime } \left( x _ { 1 } \right) \propto \epsilon ^ { 2 }$ from the answer.
Convergence will be slower if $f ^ { \prime } \left( x _ { 1 } \right)$ happens to be small. For example, for finding roots of polynomials, this will occur for double roots, as the first derivative vanishes at the root itself. In this case $f ^ { \prime } \left( x _ { 1 } \right) \propto \epsilon$, so the error after an iteration is still order $\epsilon$, not $\epsilon ^ { 2 }$.
The simplest example where this happens is $f ( x ) = x ^ { 2 }$, where
$$
x _ { 1 } = x _ { 0 } - \frac { x _ { 0 } ^ { 2 } } { 2 x _ { 0 } } = \frac { x _ { 0 } } { 2 } .
$$
This is no longer quadratically convergent; instead the error goes down by the same factor in each iteration, so the number of significant figures correct goes up linearly.

It's interesting to compare this to iteration. When the method of iteration works, we typically have exponential convergence, which means the number of significant figures goes up linearly. However, in cases like $f ( x ) = x ^ { 2 }$ where $f ^ { \prime } ( x )$ vanishes at the solution, the error is squared in each iteration, so the method of iteration instead converges quadratically! In other words, for these exceptional cases, the convergence rates of iteration and Newton's method swap.

## Remark

You've seen several numeric methods above, and going forward, you should feel free to use whichever looks best in each situation. However, if you're solving problems using the same calculator you use for schoolwork, you should make sure to not rely on its more advanced features. In Olympiads, you're generally only allowed to use an extremely basic scientific calculator, with a tiny display and no memory except for the "Ans" key.

## Example 12

In units where $c = 1$, the Lorentz factor is defined as

$$
\gamma = \frac { 1 } { \sqrt { 1 - v ^ { 2 } } } .
$$

Suppose that a particle traveling very close to the speed of light has $\gamma = 10 ^ { 10 }$. Numerically find the fractional difference $\Delta v$ between its speed and the speed of light.

## Solution

This problem looks easy; by some trivial algebra we find

$$
\Delta v = 1 - \sqrt { 1 - 1 / \gamma ^ { 2 } } .
$$

But when you plug this into a calculator, or even Python, you get zero. The problem is that we are trying to find a small quantity $\Delta v$ by subtracting two nearby, much larger quantities. But machines have limited precision, and they end up rounding $1 - 1 / \gamma ^ { 2 } = 1 - 10 ^ { - 20 }$ up to 1 , giving a completely wrong answer!

Instead, we can apply the binomial theorem to find

$$
\Delta v = \frac { 1 } { 2 \gamma ^ { 2 } } + \mathcal { O } \left( 1 / \gamma ^ { 4 } \right) \approx 0.5 \times 10 ^ { - 20 } .
$$

This is no longer the exact answer, but it's a great approximation, because the error term is around $1 / \gamma ^ { 2 } \sim 10 ^ { - 20 }$ times as small as the answer, and it's easy for a calculator to evaluate. The lesson, which we'll see over and over again in later handouts, is that an exact theoretical expression can often be less intuitive, less useful, and less accurate than a well-chosen approximate one. The art of physics is knowing how to make such approximations.


Solution. Applying the quadratic formula, the solutions are

$$
x = \frac { 10 ^ { 20 } \pm \sqrt { 10 ^ { 40 } - 4 } } { 2 } .
$$

Of course you can't just plug this into a calculator and expect a reasonable result. Instead, we need to approximate. For the larger root, an excellent approximation is

$$
x \approx \frac { 10 ^ { 20 } + \sqrt { 10 ^ { 40 } } } { 2 } = 10 ^ { 20 } .
$$

Then by Vieta's formula, an excellent approximation for the other root is $10 ^ { - 20 }$.
[4] Problem 24. [A] Consider the equation $\epsilon x ^ { 3 } - x ^ { 2 } + 1 = 0$, where $\epsilon$ is small. Find approximate expressions for all three roots of this equation, up to and including terms of order $\epsilon$.

Solution. If we set $\epsilon = 0$, then the roots of the resulting quadratic equation are ±1. Thus, two of the roots should be near ±1. To calculate the $\mathcal { O } ( \epsilon )$ correction, let $x = 1 + A \epsilon + \mathcal { O } \left( \epsilon ^ { 2 } \right)$. Then plugging this into the equation gives

$$
\epsilon ( 1 + A \epsilon ) ^ { 3 } - ( 1 + A \epsilon ) ^ { 2 } + 1 = \epsilon - 2 A \epsilon + \mathcal { O } \left( \epsilon ^ { 2 } \right) = 0 .
$$

Thus, we find $A = 1 / 2$. A similar calculation can be done for the root near $x = - 1$, giving roots

$$
x = 1 + \frac { \epsilon } { 2 } + \mathcal { O } \left( \epsilon ^ { 2 } \right) , \quad x = - 1 + \frac { \epsilon } { 2 } + \mathcal { O } \left( \epsilon ^ { 2 } \right) .
$$

However, the third root is nowhere to be found in this analysis, because the quadratic only has two roots. Upon graphing the function, you can see that the third root is at very large $x$, once the cubic term catches up in size to the quadratic term. This happens when $x \approx 1 / \epsilon$. This appearance of an inverse power of $\epsilon$ makes this a "singular perturbation series".

Here's a general way to conceptualize what's going on here. The equation in this problem has three terms, and it's easy to find a root if any one of the terms is negligible compared to the others. For example, for the first two roots, we assumed the $\epsilon x ^ { 3 }$ term was negligible, and then found $x = \pm 1$. Then, adding on the $\epsilon x ^ { 3 }$ term produces $\mathcal { O } ( \epsilon )$ and higher corrections to the left-hand side, which can be used to compute $\mathcal { O } ( \epsilon )$ and higher corrections to the root itself. Now, this third root we've just found occurs when the 1 term is negligible. In this case, both of the first two terms are of order $1 / \epsilon ^ { 2 }$, and the 1 creates small corrections to the root (relative to its huge size).

Since 1 is two orders in $\epsilon$ smaller than $1 / \epsilon ^ { 2 }$, we expect these terms only appear two orders down in the root. That is, we expect the root has the form

$$
x = \frac { 1 } { \epsilon } \left( 1 + A \epsilon ^ { 2 } + \mathcal { O } \left( \epsilon ^ { 3 } \right) \right)
$$

with no $\mathcal { O } ( \epsilon )$ term in parentheses. (If you don't believe this, check this term vanishes for yourself!) Plugging this into the equation gives

$$
\frac { 1 } { \epsilon ^ { 2 } } \left( 1 + A \epsilon ^ { 2 } + \mathcal { O } \left( \epsilon ^ { 3 } \right) \right) ^ { 3 } - \frac { 1 } { \epsilon ^ { 2 } } \left( 1 + A \epsilon ^ { 2 } + \mathcal { O } \left( \epsilon ^ { 3 } \right) \right) ^ { 2 } + 1 = 0
$$

which is equivalent to

$$
3 A - 2 A + 1 + \mathcal { O } ( \epsilon ) = 0
$$


from which we conclude $A = - 1$, and hence the third root is

$$
x = \frac { 1 } { \epsilon } - \epsilon + \mathcal { O } \left( \epsilon ^ { 2 } \right) .
$$

Finally, you might be wondering what happens if the $x ^ { 2 }$ term is the negligible one. However, this never happens. If we assume it's negligible, then we need $x \approx - \epsilon ^ { - 1 / 3 }$, so that both the other terms are about 1. But then the $x ^ { 2 }$ term is $1 / \epsilon ^ { 2 / 3 } \gg 1$. So we can't assume the $x ^ { 2 }$ term is negligible self-consistently, so it doesn't give any new roots. The idea used above, of supposing two of the terms are large, using that to solve a simpler equation, and then checking for consistency, is known as the method of dominant balance.

## 4 Limiting Cases

Idea 7
Limiting cases can be used to infer how the answer to a physical problem depends on its parameters. It is primarily useful for remembering the forms of formulas, but can also be powerful enough to solve multiple choice questions by itself.

Example 13
What is the horizontal range of a rock thrown with speed $v$ at an angle $\theta$ to the horizontal?

Solution
This result is easy to derive, but dimensional analysis and extreme cases can be used to recover the answer too. It can only depend on $v , g$, and $\theta$, so by dimensional analysis it is proportional to $v ^ { 2 } / g$. This is sensible, since the range increases with $v$ and decreases with $g$. Now, the range is zero in the extreme cases $\theta = 0$ and $\theta = \pi / 2$, but not anywhere in between, so if we remember the range contains a simple trigonometric function, it must be $\sin ( 2 \theta )$, so

$$
R \propto \frac { v ^ { 2 } } { g } \sin ( 2 \theta ) .
$$

We can also get the prefactor by a simple limiting case, the case $\theta \ll 1$. In this case, by the small angle approximation,

$$
v _ { x } \approx v , \quad v _ { y } \approx v \theta .
$$

The time taken is $t = 2 v _ { y } / g$, so the range is

$$
R \approx v _ { x } t = \frac { 2 v ^ { 2 } } { g } \theta .
$$

Thus there is no proportionality constant; the answer is

$$
R = \frac { v ^ { 2 } } { g } \sin ( 2 \theta ) .
$$

In reality, it's probably faster to go through the full derivation than all of this reasoning, but if you're just not sure about whether it's a sine or a cosine, or what the prefactor is, then limiting cases can be quickly used to recover that piece. Also note that the approximations we used above are frequently useful for evaluating limiting cases.


Example 14
Consider an Atwood's machine, i.e. an ideal pulley with masses $m$ and $M$ hung on each end of the string. Find the tension in the string.

Solution
Since the equations involved are all linear equations, we expect the answer should also be simple. It can only depend on $g , m$, and $M$, so by dimensional analysis, it must be proportional to $g$. By dimensional analysis, this must be multiplied by something with one net power of mass. Since the answer remains the same if we switch the masses, it should be symmetric in $m$ and $M$.

Given all of this, the simplest possible answer would be

$$
T \propto g ( M + m ) .
$$

To test this, we consider some limiting cases. If $M \gg m$, the mass $M$ is essentially in free fall, so the mass $m$ accelerates upward with acceleration $g$. Then the tension is approximately $2 m g$. Similarly, in the case $M \ll m$, the tension is approximately $2 M g$. These can't be satisfied by the form above.

The next simplest option is a quadratic divided by a linear expression. Both of these must be symmetric, so the most general possibility is

$$
T = g \frac { A \left( m ^ { 2 } + M ^ { 2 } \right) + B m M } { M + m } .
$$

Then the limiting cases can be satisfied if $A = 0$ and $B = 2$, giving

$$
T = \frac { 2 g m M } { M + m } .
$$

[1] Problem 25. Use similar reasoning to guess the acceleration of the masses in an Atwood's machine. (We will show an even easier way to do this, using "generalized coordinates", in M4.)

Solution. We know from dimensional analysis that the acceleration is $g f ( m , M )$ where $f ( m , M )$ is dimensionless. Thus it should be a fraction.

If either of the masses is much greater than the other mass, then the acceleration should be $\pm g$. Thus the coefficients of $m$ and $M$ should be ±1. If the masses are equal, then the acceleration should be zero, so the numerator should be proportional to $M - m$. Since the denominator should be different but still have factors of $\pm 1$, a simple reasonable guess is

$$
a = \frac { M - m } { M + m } g .
$$

which is indeed the real answer.
[1] Problem 26. Find the perimeter of a regular $N$-gon, if $L$ is the distance from the center to any of the vertices. By considering a limiting case, use this to derive the circumference of a circle.


Solution. By basic trigonometry, the perimeter is $2 N L \sin ( \pi / N )$. Then the circumference of a circle is

$$
\lim _ { N \rightarrow \infty } 2 N L \sin ( \pi / N ) = \lim _ { N \rightarrow \infty } 2 N L \frac { \pi } { N } = 2 \pi L
$$

as expected. We can see that the limit of $N \sin ( \pi / N )$ is $\pi$ through the small angle approximation. If you want more rigor, you could also say that this is an indeterminate form $\infty \times 0$, and use l'Hospital's rule.

[2] Problem 27 (Morin 1.6). A person throws a ball (at an angle of her choosing, to achieve the maximum distance) with speed $v$ from the edge of a cliff of height $h$. Which of the below could be an expression for the maximal range?
$$
\frac { g h ^ { 2 } } { v ^ { 2 } } , \quad \frac { v ^ { 2 } } { g } , \quad \sqrt { \frac { v ^ { 2 } h } { g } } , \quad \frac { v ^ { 2 } } { g } \sqrt { 1 + \frac { 2 g h } { v ^ { 2 } } } , \quad \frac { v ^ { 2 } } { g } \left( 1 + \frac { 2 g h } { v ^ { 2 } } \right) , \quad \frac { v ^ { 2 } / g } { 1 - 2 g h / v ^ { 2 } } .
$$
If desired, try Morin problems 1.13, 1.14, and 1.15 for additional practice.

Solution. First check if they're all dimensionally correct (they are). When $h = 0$, the maximum range as found above with $\sin ( 2 \theta ) = 1$ is $v ^ { 2 } / g$. Also the maximum range obviously depends on the height of the edge of the cliff, and there shouldn't be a case of a finite height or velocity where the range becomes infinite. This leaves 2 options:

$$
\frac { v ^ { 2 } } { g } \sqrt { 1 + \frac { 2 g h } { v ^ { 2 } } } , \quad \frac { v ^ { 2 } } { g } \left( 1 + \frac { 2 g h } { v ^ { 2 } } \right)
$$

When $h$ is small, the extra distance at the end of the trajectory from dipping down a vertical distance $h$ can be found with binomial theorem: $h$, and $2 h$ respectively. Since the trajectory is symmetric, when $h \approx 0$ (to be more concise, $h \ll v ^ { 2 } / g$ ) the optimal launch angle is 45 deg, so by geometry the extra distance should also be $h$. Thus the correct formula is

$$
\frac { v ^ { 2 } } { g } \sqrt { 1 + \frac { 2 g h } { v ^ { 2 } } } .
$$

[2] Problem 28. Consider a triangle with side lengths $a , b$, and $c$. It turns out the area of its incircle can be expressed purely by multiplying and dividing combinations of these lengths. Moreover, the answer is the simplest possible one consistent with limiting cases, dimensional analysis, and symmetry. Guess it!

Solution. In the limiting case $a = b + c$, the triangle collapses and the area must be zero, which means the answer must be proportional to $b + c - a$. But the answer should also be symmetric between exchanging $a , b$, and $c$, so it must be proportional to $( b + c - a ) ( c + a - b ) ( a + b - c )$. The dimension of this quantity is one too high, so we need to divide by a length, and the only possibility consistent with symmetry is $a + b + c$. Finally, the overall constant can be fixed using the special case of an equilateral triangle, giving the result

$$
A = \frac { \pi } { 4 } \frac { ( a + b - c ) ( b + c - a ) ( c + a - b ) } { a + b + c } .
$$

Incidentally, the area of the circumcircle is $\pi ( a b c ) ^ { 2 } / ( ( a + b + c ) ( a + b - c ) ( b + c - a ) ( c + a - b ) )$. While most of the denominator makes sense from limiting cases, the overall expression is certainly


harder to guess, since powers of $a b c$ and $a + b + c$ could cancel while preserving all the limiting cases and symmetry. That just goes to show that limiting cases can only get you so far. In some sense, "real" math starts once all the easy information accessible to methods like these has been accounted for.

While we won't have more questions that are explicitly about dimensional analysis or limiting cases, these are not techniques but ways of life. For all future problems you solve, you should be constantly checking the dimensions and limiting cases to make sure everything makes sense.

## 5 Manipulating Differentials

You might have been taught in math class that manipulating differentials like they're just small, finite quantities, and treating derivatives like fractions is "illegal". But it's also very useful.

Idea 8
Derivatives can be treated like fractions, if all functions have a single argument.
The reason is simply the chain rule. The motion of a single particle only depends on a single parameter, so the chain rule is just the same as fraction cancellation. For example,

$$
\frac { d v } { d t } = \frac { d } { d t } v ( x ( t ) ) = \frac { d v } { d x } \frac { d x } { d t }
$$

which shows that "canceling a $d x$ " is valid. Similarly, you can show that

$$
\frac { d y } { d x } \frac { d x } { d y } = 1
$$

by considering the derivative with respect to $x$ of the function $x ( y ( x ) ) = x$.
As a warning, for functions of multiple arguments, the idea above breaks down. For example, for a function $f ( x ( t ) , y ( t ) )$, the chain rule says

$$
\frac { d f } { d t } = \frac { \partial f } { \partial x } \frac { d x } { d t } + \frac { \partial f } { \partial y } \frac { d y } { d t }
$$

where there are two terms, representing the change in $f$ from changes only in $x$, and only in $y$. Therefore, when we start studying thermodynamics, where multivariable functions are common, we will treat differentials more carefully. But for now the basic rules will do.

Remark: Rigorous Notation
Math students tend to get extremely upset about the above idea: they say we shouldn't use convenient notation if it hides what's "really" going on. And they're right, if your goal is to put calculus on a rigorous footing. But in physics we have no time to luxuriate in such rigor, because we want to figure out how specific things work. The point of notation is to help us do that by suppressing mathematical clutter. A good notation suppresses as much as possible while still giving correct results in the context it's used.


To illustrate the point, note that elementary school arithmetic is itself an "unrigorous" notation that hides implementation details. If we wanted to be rigorous about, say, defining the number 2, we would write it as $S ( 1 )$ where $S$ is the successor function, obeying properties specified by the Peano axioms. And 4 is just a shorthand for $S ( S ( S ( 1 ) ) )$, so $2 + 2 = 4$ means

$$
S ( 1 ) + S ( 1 ) = S ( S ( S ( 1 ) ) ) .
$$

Even this is not "rigorous", because the Peano axioms don't specify how the numbers or the successor function are defined, just what properties they have to obey. To go deeper, we could define the integers as sets, and operations like + in terms of set operations. For example, in one formulation, we start with nothing but the empty set $\varnothing$ and define

$$
4 = S ( S ( S ( 1 ) ) ) = \{ \varnothing , \{ \varnothing \} , \{ \varnothing , \{ \varnothing \} \} , \{ \varnothing , \{ \varnothing \} , \{ \varnothing , \{ \varnothing \} \} \} .
$$

People have seriously advocated for $1 ^ { \text {st } }$ grade math to be taught this way, which has always struck me as insane. You can always add more arbitrary layers of structure underneath the current foundation, so such layers should only be added when absolutely necessary.

Here's another example, inspired by the physics education research literature. For uniformly accelerated motion starting from rest, $v ( t ) = a t$, what is $v ( x )$ ? Physics students would say that $v ( x ) = \sqrt { 2 a x }$ by the kinematic equations, while math students would say $v ( x ) = a x$ by the definition of a function. Who is correct? The point is that basic physics and math courses use functions differently. In introductory physics, we often denote several distinct mathematical functions with the same symbol, if they all represent the same physical quantity. (Otherwise, the simplest projectile motion problem would need half the alphabet.) By contrast, basic math courses carefully distinguish functions, but then denote distinct physical quantities with the same symbol: 1 m, 1 cm, and 1 s are all written as 1.

The crucial point is that nobody is wrong. There is no One True Definition of notation, which is ultimately just squiggly marks people make by dragging graphite cylinders against sheets of wood pulp. Every community makes its own notation for its own needs. And any notation system has to forget about something, or else it would be too clunky to do anything.

## Remark: Advanced Notation

As an addendum to the previous remark, it turns out that as you get deeper into math and physics, notation tends to converge. For example:

- The physicist's "wrong" use of $v ( t )$ and $v ( x )$ can be formalized by differential geometry: here $v$ is a scalar field defined on the particle's path, which is a one-dimensional manifold, and $v ( t )$ and $v ( x )$ are parametrizations of it in different coordinate charts.
- In math classes, vectors are anything you can take linear combinations of, but in physics classes we also require that they specify a direction in physical space, which math students often criticize as wrong, or meaningless. But the physicist is actually using more advanced math, which the math student doesn't know yet: the physicist's vector is an element of a vector space carrying the fundamental representation of $S \mathcal { O } ( 3 )$.

- Most vectors flip sign under an inversion of space, $\mathbf { r } \rightarrow - \mathbf { r }$ and $\mathbf { p } \rightarrow - \mathbf { p }$, but "axial vectors" such as $\mathbf { L } = \mathbf { r } \times \mathbf { p }$ don't. This also strikes many math students as a blatant inconsistency, but the reality is again that an axial vector is just a more advanced mathematical object they haven't met yet, specifically a rank 2 differential form, as discussed in M8.
- More generally, the "unrigorous" manipulations of differentials above, which we showed give you the right answer anyway, gain a rigorous footing in terms of differential forms. In fact, they become the preferred way to denote integration on general manifolds.

Arguments about notation are mostly raised by beginning students, who see the one way they know as the only possible way. Professionals know it both ways, and adjust as needed.

Example 15
Derive the work-kinetic energy theorem, $d W = F d x$.

Solution
Canceling the mass from both sides, we wish to show

$$
\frac { 1 } { 2 } d \left( v ^ { 2 } \right) = a d x
$$

To do this, note that

$$
\frac { 1 } { 2 } d \left( v ^ { 2 } \right) = v d v = \frac { d x } { d t } d v = \frac { d v } { d t } d x = a d x
$$

as desired. If you're not satisfied with this derivation, because of the bare differentials floating around, we can equivalently prove that $F = d W / d x$, by noting

$$
\frac { d W } { d x } = m v \frac { d v } { d x } = m v \frac { d v } { d t } \frac { d t } { d x } = m \frac { d v } { d t } = F .
$$

[2] Problem 29. Some more about power.

(a) Use similar reasoning to derive $P = F v$.
(b) An electric train has a power line that can deliver power $P ( x )$, where $x$ is the distance along the track. If the train starts at rest at $x = 0$, find its speed at point $x _ { 0 }$ in terms of an integral of $P ( x )$. (Hint: try to get rid of the $d t$ 's to avoid having to think about the time dependence.)

Solution. (a) First, let's use differentials. Since $P = d W / d t$, we have

$$
d W = F v d t .
$$

Using the same reasoning as before, $d W = m d \left( v ^ { 2 } \right) / 2 = m v d v$, so

$$
m v d v = m a v d t .
$$

Canceling on both sides, this simplifies to $d v = a d t$, which is clearly true. Alternatively, we can use derivatives directly. We have

$$
P = \frac { d W } { d t } = m v \frac { d v } { d t } = m v a = F v
$$


as desired.

(b) We note that
$$
d W = m v d v
$$
but we also have
$$
d W = P d t = P \frac { d t } { d x } d x = \frac { P } { v } d x
$$
where we introduced a factor of $v$ to convert $d t$ (which we don't want to deal with) to $d x$. Doing some rearrangement,
$$
\int m v ^ { 2 } d v = \int P d x
$$
Performing the integral, we have
$$
v \left( x _ { 0 } \right) = \left( \frac { 3 } { m } \int _ { 0 } ^ { x _ { 0 } } P ( x ) d x \right) ^ { 1 / 3 }
$$
In the context of drag car racing, this is called Huntington's rule.
If $P$ is constant, we must have $F \propto 1 / v$. But how can such a force arise? A car engine (or your legs, on a bicycle) turns an axle at angular velocity $\omega$ with torque $\tau$ with $P = \tau \omega$. The engine works best at a restricted range of $\omega$. So when a modern car increases its speed, the gear is automatically changed to keep $\omega$ near the optimal range. At maximum power, $P$ is fixed, so $\tau$ is roughly fixed as well, but the higher gear reduces the torque acting on the wheels, and hence the force accelerating the car.

Example 16
Suppose a planet instantly stopped, at a distance $r _ { 0 }$ from a star of mass $M$. Write the time it would take the planet to collide with the star, as a single integral.

Solution
If the planet has mass $m$, then conservation of energy gives

$$
\frac { 1 } { 2 } m v ^ { 2 } - \frac { G M m } { r } = - \frac { G M m } { r _ { 0 } }
$$

so that its radial velocity is

$$
\frac { d r } { d t } = - \sqrt { 2 G M \left( \frac { 1 } { r } - \frac { 1 } { r _ { 0 } } \right) } .
$$

We can write the time taken to collide as

$$
T = \int d t = \int _ { r _ { 0 } } ^ { 0 } d r \frac { d t } { d r } = \frac { 1 } { \sqrt { 2 G M } } \int _ { 0 } ^ { r _ { 0 } } \frac { d r } { \sqrt { 1 / r - 1 / r _ { 0 } } } .
$$

It's good practice to write the integral in dimensionless form, so that the dependence of the answer on the dimensionful quantities is manifest. To do this, substitute $x = r / r _ { 0 }$ to get

$$
T = \sqrt { \frac { r _ { 0 } ^ { 3 } } { 2 G M } } \int _ { 0 } ^ { 1 } \sqrt { \frac { x } { 1 - x } } d x
$$


This lets us read off $T ^ { 2 } \propto r _ { 0 } ^ { 3 }$, in accordance with Kepler's third law, and required by dimensional analysis as shown in problem 2. In case you're wondering, the value of the remaining integral is $\pi / 2$, as can be shown by substituting $x = \sin ^ { 2 } \theta$.
[2] Problem 30 (Kalda). The deceleration of a boat in water due to drag is given by a function $a ( v )$. Given an initial velocity $v _ { 0 }$, write the total distance the boat travels as a single integral.
Solution. We have
$$
\int d x = \int d v \frac { d x } { d v } = \int d v \frac { d x } { d t } \frac { d t } { d v } = - \int \frac { v d v } { a ( v ) }
$$
which is a single integral in terms of the function $a ( v )$, as desired. Putting the bounds in,
$$
\Delta x = - \int _ { v _ { 0 } } ^ { 0 } \frac { v d v } { a ( v ) } = \int _ { 0 } ^ { v _ { 0 } } \frac { v d v } { a ( v ) } .
$$
[5] Problem 31. A particle in a potential well.
    (a) Consider a particle of mass $m$ and energy $E$ with potential energy $V ( x )$, which performs periodic motion. Write the period of the motion in terms of a single integral over $x$.
    (b) Suppose the potential well has the form $V ( x ) = V _ { 0 } ( x / a ) ^ { n }$ for even $n > 0$. If the period of the motion is $T _ { 0 }$ when it has amplitude $A _ { 0 }$, find the period when the amplitude is $A$, by considering how the integral you found in part (a) scales with $A$.
    (c) Find a special case where you can check your answer to part (b). (In fact, there are two more special cases you can check, one which requires negative $n$ and negative $V _ { 0 }$, and one which requires $V ( x )$ to be replaced with its absolute value.)
    (d) Using a similar method to part (a), write down an integral over $\theta$ giving the period of a pendulum with length $L$ in gravity $g$, without the small angle approximation. Using this, compute the period of the pendulum with amplitude $\theta _ { 0 }$, up to order $\theta _ { 0 } ^ { 2 }$. (This result was first published by Bernoulli, in 1749.)
    (e) ★ Part (d) is the kind of involved computation you might see in a graduate mechanics course. But if you think you're really tough, you can go one step further. Consider a mass $m$ oscillating on a spring of spring constant $k$ with amplitude $A$. Calculate its period of oscillation up to order $A ^ { 2 }$, accounting for special relativity. (Concretely, assume that the spring force doesn't change the rest mass $m$, and has a potential $U = k x ^ { 2 } / 2$. In relativity, the force $F = - d U / d x$ still obeys $F = d p / d t$, but now $E = \gamma m c ^ { 2 }$ and $p = \gamma m v$, where $\gamma = 1 / \sqrt { 1 - v ^ { 2 } / c ^ { 2 } }$.)

Solution. (a) The statement of conservation of energy is

$$
E = \frac { 1 } { 2 } m v ^ { 2 } + V ( x ) , \quad v = \sqrt { \frac { 2 ( E - V ( x ) ) } { m } } .
$$

Therefore, the period is

$$
T = \int d t = \int \frac { d t } { d x } d x = \int \frac { d x } { \sqrt { 2 ( E - V ( x ) ) / m } }
$$


To be more precise, we should put the bounds of integration back in. If the lowest and highest values of $x$ are $x _ { \text {min } }$ and $x _ { \text {max } }$, then
$$
T = 2 \int _ { x _ { \min } } ^ { x _ { \max } } \frac { d x } { \sqrt { 2 ( E - V ( x ) ) / m } }
$$
where the factor of two is because this is just half of the oscillation.
(b) The particle can perform periodic motion if at $x = \pm A , v = 0$ so $V _ { 0 } ( A / a ) ^ { n } = E$. Thus
$$
T = 2 \int _ { - A } ^ { A } \frac { d x } { \sqrt { 2 \left( V _ { 0 } ( A / a ) ^ { n } - V _ { 0 } ( x / a ) ^ { n } \right) / m } } \propto \int _ { - A } ^ { A } \frac { d x } { \sqrt { A ^ { n } - x ^ { n } } }
$$
By dimensional analysis, the integral (a function of A) is proportional to $A ^ { 1 - n / 2 }$, so
$$
T = T _ { 0 } \left( \frac { A } { A _ { 0 } } \right) ^ { 1 - n / 2 }
$$
Incidentally, you can also do this problem by dimensional analysis directly on the parameters. At first glance, this is impossible because there are too many dimensionful quantities: $E , m , a$, $V _ { 0 }$, and $T$, which permit $5 - 3 = 2$ dimensionless groups. (Recall from an earlier problem that one can usually get a scaling relation only if there's only 1 dimensionless group.) However, $V _ { 0 }$ and $a$ only appear in the combination $V _ { 0 } / a ^ { n }$. So there are only 4 independent dimensionful parameters, and a standard dimensional analysis yields the same result.
(c) The three analytically tractable examples are:
    - For $n = 2$ we have simple harmonic motion, and indeed here the period is independent of amplitude. (Incidentally, can you think of any potentials that aren't simple harmonic, but also have this property?)
    - For $n = - 1$ we have an inverse square force and $T \propto A ^ { 3 / 2 }$. This makes sense, because it matches the form of Kepler's third law, which gives the general scaling of orbits in inverse square forces. (Here we're considering the degenerate case of a straight-line orbit.)
    - For $n = 1$ we have a constant force, which doesn't yield oscillations. But the scaling argument of part (b) would still work if we used the potential $V ( x ) = V _ { 0 } | x / a |$, which does have oscillations. In this case we predict $T \propto \sqrt { A }$, which makes sense; it corresponds to the usual time-dependence $\Delta x = g t ^ { 2 } / 2 \propto t ^ { 2 }$ of uniformly accelerated motion.

That's as far as you can go with the functions you learn in high school and college. There are analytic solutions for other $n$ involving exotic "special functions". For instance, for $n = 4$ the solutions can be written in terms of Jacobi elliptic functions, as you can see here. These days most people encounter such functions by solving integrals with computer programs.

(d) Conservation of energy states
$$
\frac { 1 } { 2 } I \omega ^ { 2 } = m g L \left( \cos \theta - \cos \theta _ { 0 } \right) , \quad I = m L ^ { 2 }
$$
which means
$$
T = 4 \int _ { 0 } ^ { \theta _ { 0 } } \frac { d \theta } { \omega } = 4 \int _ { 0 } ^ { \theta _ { 0 } } \frac { d \theta } { \sqrt { ( 2 g / L ) \left( \cos \theta - \cos \theta _ { 0 } \right) } } .
$$

This form is a bit annoying, because the cosines are both extremely close to 1 . To fix this issue, we use the half-angle formula $( 1 - \cos \theta ) / 2 = \sin ^ { 2 } ( \theta / 2 )$, to get

$$
T = 2 \sqrt { \frac { L } { g } } \int _ { 0 } ^ { \theta _ { 0 } } \frac { d \theta } { \sqrt { \sin ^ { 2 } \left( \theta _ { 0 } / 2 \right) - \sin ^ { 2 } ( \theta / 2 ) } }
$$

This newer form still has the problem that as $\theta _ { 0 }$ goes to zero, the integration range goes to zero while the integrand can get large, making it hard to see how big the result is. To fix this, change variables from $\theta$ to $\phi$, where $\sin \phi = \sin ( \theta / 2 ) / \sin \left( \theta _ { 0 } / 2 \right)$, which gives

$$
T = 4 \sqrt { \frac { L } { g } } \int _ { 0 } ^ { \pi / 2 } \frac { d \phi } { \sqrt { 1 - \sin ^ { 2 } \phi \sin ^ { 2 } \left( \theta _ { 0 } / 2 \right) } } .
$$

This is the easiest form to handle, because it makes the $\theta _ { 0 } \rightarrow 0$ limit obvious, and it makes it manifest that the first correction is of order $\theta _ { 0 } ^ { 2 }$. To extract that term, we expand the sine to first order, giving

$$
T = 4 \sqrt { \frac { L } { g } } \int _ { 0 } ^ { \pi / 2 } d \phi \left( 1 + \frac { \theta _ { 0 } ^ { 2 } } { 8 } \sin ^ { 2 } \phi \right) = 2 \pi \sqrt { \frac { L } { g } } \left( 1 + \frac { \theta _ { 0 } ^ { 2 } } { 16 } \right) .
$$

There are many other ways to get this, but our route is probably the best if you're interested in even higher-order terms. For instance, the coefficient of the $\theta _ { 0 } ^ { 4 }$ term is 11/3072.

(e) This is a taste of the kind of problem you'll see in R2. It can get quite messy, but it's not too bad if you work in the right variables. First, note that since $F = - d U / d x$, we still have energy conservation, but with the relativistic energy expression,
$$
\gamma m c ^ { 2 } + \frac { 1 } { 2 } m \omega _ { 0 } ^ { 2 } x ^ { 2 } = m c ^ { 2 } + \frac { 1 } { 2 } m \omega _ { 0 } ^ { 2 } A ^ { 2 }
$$
where $\omega _ { 0 } ^ { 2 } = k / m$ as usual. Solving for $\gamma$, we find
$$
\gamma = 1 + \frac { \omega _ { 0 } ^ { 2 } } { 2 c ^ { 2 } } \left( A ^ { 2 } - x ^ { 2 } \right) .
$$
Next, using the definition of $\gamma$, we have
$$
T = 4 \int _ { 0 } ^ { A } \frac { d x } { v } = \frac { 4 } { c } \int _ { 0 } ^ { A } \frac { \gamma } { \sqrt { \gamma ^ { 2 } - 1 } } d x
$$
At this point we can perform a quick check to make sure we're on the right track. Note that in the ultrarelativistic limit, where the spring is so strong that the mass is always moving at nearly the speed of light, we have $\gamma \rightarrow \infty$, so that the integrand just reduces to 1 . Then $T \approx 4 A / c$, which is exactly as expected.
Anyway, in this problem we're considering small relativistic corrections, $\gamma - 1 \ll 1$. The easiest way to make this manifest is to eliminate $\gamma$ in favor of $A$, using our result above. There we found that $\gamma - 1 = \mathcal { O } \left( \left( \omega _ { 0 } A / c \right) ^ { 2 } \right)$, so we can expand in the small quantity $\omega _ { 0 } A / c$, giving
$$
T = \frac { 4 } { c } \int _ { 0 } ^ { A } \frac { c } { \omega _ { 0 } } \frac { 1 } { \sqrt { A ^ { 2 } - x ^ { 2 } } } + \frac { 3 } { 8 } \frac { \omega _ { 0 } } { c } \sqrt { A ^ { 2 } - x ^ { 2 } } + \mathcal { O } \left( \left( \omega _ { 0 } A / c \right) ^ { 4 } \right) d x
$$

The first term simply recovers the nonrelativistic result $T = 2 \pi / \omega _ { 0 }$, and the second term is straightforward to integrate, yielding

$$
T = \frac { 2 \pi } { \omega _ { 0 } } \left( 1 + \frac { 3 } { 16 } \frac { \omega _ { 0 } ^ { 2 } A ^ { 2 } } { c ^ { 2 } } + \mathcal { O } \left( \left( \omega _ { 0 } A / c \right) ^ { 4 } \right) \right) .
$$

Since the peak speed $v _ { 0 }$ is approximately $\omega _ { 0 } A$ in the nonrelativistic limit, this result is therefore accurate up to corrections of order $\left( v _ { 0 } / c \right) ^ { 4 }$.

## 6 Multiple Integrals

It's also useful to know how to set up multiple integrals. This is fairly straightforward, though technically an "advanced" topic, so we'll demonstrate it by example. For further examples, see chapter 2 of Wang and Ricardo, volume 1, or MIT OCW 18.02, lectures 16, 17, 25, and 26.

Idea 9
In most Olympiad problems, multiple integrals can be reduced to single integrals by symmetry.

Example 17
Calculate the area of a circle of radius $R$.

Solution
The area $A$ is the integral of $d A$, i.e. the sum of the infinitesimal areas of pieces we break the circle into. As a first example, let's consider using Cartesian coordinates. Then the pieces will be the rectangular regions centered at $( x , y )$ with sides $( d x , d y )$, which have area $d x d y$. The area is thus

$$
A = \int d A = \int d x \int d y
$$

The only tricky thing about setting up the integral is writing down the bounds. The inner integral is done first, so its bounds depend on the value of $x$. Since the boundary of the circle is $x ^ { 2 } + y ^ { 2 } = R ^ { 2 }$, the bounds are $y = \pm \sqrt { R ^ { 2 } - x ^ { 2 } }$. Thus we have

$$
A = \int _ { - R } ^ { R } d x \int _ { - \sqrt { R ^ { 2 } - x ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - x ^ { 2 } } } d y
$$

We then just do the integrals one at a time, from the inside out, like regular integrals,

$$
A = \int _ { - R } ^ { R } 2 \sqrt { R ^ { 2 } - x ^ { 2 } } d x = 2 R ^ { 2 } \int _ { - 1 } ^ { 1 } \sqrt { 1 - u ^ { 2 } } d u = 2 R ^ { 2 } \int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 2 } \theta d \theta = \pi R ^ { 2 }
$$

where we nondimensionalized the integral by letting $u = x / R$, and then did the trigonometric substitution $u = \sin \theta$. (To do the final integral trivially, notice that the average value of $\cos ^ { 2 } \theta$ along any of its periods is 1/2.)

We can also use polar coordinates. We break the circle into regions bounded by radii $r$ and $r + d r$, and angles $\theta$ and $\theta + d \theta$. These regions are rectangular, with side lengths of $d r$ and


$r d \theta$, so the area element is $d A = r d r d \theta$. Then we have

$$
A = \int _ { 0 } ^ { R } r d r \int _ { 0 } ^ { 2 \pi } d \theta = 2 \pi \int _ { 0 } ^ { R } r d r = \pi R ^ { 2 }
$$

which is quite a bit easier. In fact, it's so much easier that we didn't even need to use double integrals at all. We could have decomposed the circle into a bunch of thin circular shells, argued that each shell contributed area $( 2 \pi r ) d r$, then integrated over them,

$$
A = \int _ { 0 } ^ { R } 2 \pi r d r = \pi R ^ { 2 }
$$

In Olympiad physics, there's usually a method like this, that allows you to get the answer without explicitly writing down any multiple integrals.

Example 18
Calculate the moment of inertia of the circle above, about the $y$ axis, if it has total mass $M$ and uniform density.

Solution
The moment of inertia of a small piece of the circle is

$$
d I = x ^ { 2 } d m = x ^ { 2 } \sigma d A = \frac { x ^ { 2 } M } { \pi R ^ { 2 } } d A
$$

where $x ^ { 2 }$ appears because $x$ is the distance to the rotation axis, and $\sigma$ is the mass density per unit area. Using Cartesian coordinates, we have

$$
I = \frac { M } { \pi R ^ { 2 } } \int _ { - R } ^ { R } d x \int _ { - \sqrt { R ^ { 2 } - x ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - x ^ { 2 } } } x ^ { 2 } d y
$$

The inner integral is still trivial; the $x ^ { 2 }$ doesn't change anything, because from the perspective of the $d y$ integral, $x$ is just some constant. However, the remaining integral becomes a bit nasty. In general, when this happens, we can try flipping the order of integration, giving

$$
I = \frac { M } { \pi R ^ { 2 } } \int _ { - R } ^ { R } d y \int _ { - \sqrt { R ^ { 2 } - y ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - y ^ { 2 } } } x ^ { 2 } d x
$$

Unfortunately, this is equally difficult. Both of these integrals can be done with trigonometric substitutions, as you'll check below, but there's also a clever symmetry argument.

Notice that $I$ is also equal to the moment of inertia about the $x$ axis, by symmetry. So if we add them together, we get

$$
2 I = \int x ^ { 2 } + y ^ { 2 } d m = \int r ^ { 2 } d m
$$


The $r ^ { 2 }$ factor has no dependence on $\theta$ at all, so the angular integral in polar coordinates is trivial. We end up with

$$
2 I = \frac { M } { \pi R ^ { 2 } } \int _ { 0 } ^ { R } 2 \pi r r ^ { 2 } d r = \frac { 1 } { 2 } M R ^ { 2 }
$$

which gives an answer of $I = M R ^ { 2 } / 4$, as expected.
[2] Problem 32. Calculate $I$ in the previous example by explicitly performing either Cartesian integral.
Solution. Starting from the second expression in the example,

$$
I = \frac { M } { \pi R ^ { 2 } } \int _ { - R } ^ { R } d y \int _ { - \sqrt { R ^ { 2 } - y ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - y ^ { 2 } } } x ^ { 2 } d x = \frac { M } { 3 \pi R ^ { 2 } } \int _ { - R } ^ { R } 2 \left( R ^ { 2 } - y ^ { 2 } \right) ^ { 3 / 2 } d y .
$$

Let $y = R \sin \theta$. Then we have

$$
I = \frac { 2 M R ^ { 2 } } { 3 \pi } \int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \theta d \theta
$$

This integral can be done by repeatedly using the double angle formula,

$$
\int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \theta d \theta = \int _ { - \pi / 2 } ^ { \pi / 2 } \left( \frac { 1 + \cos ( 2 \theta ) } { 2 } \right) ^ { 2 } d \theta = \int _ { - \pi / 2 } ^ { \pi / 2 } \left( \frac { 1 } { 4 } + \frac { 1 } { 2 } \cos ( 2 \theta ) + \frac { 1 } { 8 } + \frac { 1 } { 8 } \cos ( 4 \theta ) \right) d \theta = \frac { 3 \pi } { 8 } .
$$

Personally, I can never remember all the trigonometric formulas, and I usually just expand everything in complex exponentials. Here that method gives a slick solution, as

$$
\int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \theta d \theta = \frac { 1 } { 16 } \int _ { - \pi / 2 } ^ { \pi / 2 } \left( e ^ { i \theta } + e ^ { - i \theta } \right) ^ { 4 } d \theta
$$

Now note that expanding with the binomial theorem gives terms of the form $e ^ { 2 i n \theta }$ for integers $n$, which integrate to zero unless $n = 0$. So the only term that matters gives

$$
\int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \theta d \theta = \frac { 1 } { 16 } \int _ { - \pi / 2 } ^ { \pi / 2 } \binom { 4 } { 2 } d \theta = \frac { 3 \pi } { 8 } .
$$

Whichever method you used, we conclude the answer is $I = M R ^ { 2 } / 4$, as expected.
[3] Problem 33. In this problem we'll generalize some of the ideas above to three dimensions, where we need triple integrals. Consider a ball of radius $R$.

(a) In Cartesian coordinates, the volume element is $d V = d x d y d z$. Set up an appropriate triple integral for the volume.
(b) The inner two integrals might look a bit nasty, but we already have essentially done them. Using the result we already know, perform the inner two integrals in a single step, and then perform the remaining integral to derive the volume of a sphere.
(c) In cylindrical coordinates, the volume element is $d V = r d r d \theta d z$. Set up a triple integral for the volume, and perform it. (Hint: this can either be hard, or a trivial extension of part (b), depending on what order of integration you choose.)

(d) In spherical coordinates, the volume element is $d V = r ^ { 2 } d r \sin \phi d \phi d \theta$. Set up a triple integral for the volume, and perform it.
(e) Let the ball have uniform density and total mass $M$. Compute its moment of inertia about the $z$-axis. (Hint: this can be reduced to a single integral if you use an appropriate trick.)

Solution. (a) By analogy to the two-dimensional case,

$$
V = \int _ { - R } ^ { R } d x \int _ { - \sqrt { R ^ { 2 } - x ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - x ^ { 2 } } } d y \int _ { - \sqrt { R ^ { 2 } - x ^ { 2 } - y ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - x ^ { 2 } - y ^ { 2 } } } d z
$$

(b) The inner two integrals just represent the area of a circle, formed by slicing the ball along a plane of constant $x$. Thus, the answer has to be $\pi r ^ { 2 }$ where $r$ is the radius of that circle (as we derived explicitly in the example), and in this case $r ^ { 2 } = R ^ { 2 } - x ^ { 2 }$. Thus, we have
$$
V = \int _ { - R } ^ { R } \pi \left( R ^ { 2 } - x ^ { 2 } \right) d x = \pi R ^ { 3 } \int _ { - 1 } ^ { 1 } 1 - x ^ { 2 } d x = \frac { 4 } { 3 } \pi R ^ { 3 } .
$$
(c) By analogy to the two-dimensional case,
$$
V = \int _ { - R } ^ { R } d z \int _ { 0 } ^ { \sqrt { R ^ { 2 } - z ^ { 2 } } } r d r \int _ { 0 } ^ { 2 \pi } d \theta
$$
Again, the inner two integrals look a bit nasty, but they represent nothing more than the area of a circle of radius $r$, leaving
$$
V = \int _ { - R } ^ { R } \pi \left( R ^ { 2 } - z ^ { 2 } \right) d z
$$
upon which the solution continues just as in part (b).
(d) The triple integral immediately turns into three independent integrals,
$$
V = \int _ { 0 } ^ { R } r ^ { 2 } d r \int _ { 0 } ^ { \pi } \sin \phi d \phi \int _ { 0 } ^ { 2 \pi } d \theta = 4 \pi \int _ { 0 } ^ { R } r ^ { 2 } d r = \frac { 4 } { 3 } \pi R ^ { 3 } .
$$
(e) We are looking for
$$
I = \int x ^ { 2 } + y ^ { 2 } d m
$$
By spherical symmetry, the integrals of $x ^ { 2 } d m , y ^ { 2 } d m$, and $z ^ { 2 } d m$ are all equal. Thus,
$$
I = \frac { 2 } { 3 } \int x ^ { 2 } + y ^ { 2 } + z ^ { 2 } d m
$$
but this integral is now easy to do because it has spherical symmetry. We have
$$
I = \frac { 2 } { 3 } \frac { M } { \frac { 4 } { 3 } \pi R ^ { 3 } } \int _ { 0 } ^ { R } 4 \pi r ^ { 2 } r ^ { 2 } d r = \frac { 2 } { 5 } M R ^ { 2 }
$$
as expected. The same trick can be used to show that the moment of inertia of a spherical shell is $( 2 / 3 ) M R ^ { 2 }$.

[2] Problem 34. Consider a spherical cap that is formed by slicing a sphere of radius $R$ by a plane, so that the altitude from the vertex to the base is $h$. Find the area of its curved surface using an appropriate integral.
Solution. This is a double integral, where it's best to use spherical coordinates. Recall that the volume element in spherical coordinates was $d V = r ^ { 2 } d r \sin \phi d \phi d \theta$. Thus, the area element for a part of this sphere is $d A = R ^ { 2 } \sin \phi d \phi d \theta$. The area integral is
$$
A = R ^ { 2 } \int _ { 0 } ^ { \cos ^ { - 1 } ( ( R - h ) / R ) } \sin \phi d \phi \int _ { 0 } ^ { 2 \pi } d \theta = 2 \pi h R
$$
After doing the trivial inner integral, this approach is just slicing the surface by $d \phi$. You can also equivalently solve it by slicing it in $d z$. In that case the integrand is a bit more complicated, but the bounds are simpler.

## 7 Approximating Integrals

[3] Problem 35. As you learned in calculus class, we may approximate the area under a function using a lot of rectangles, and in the limit where the rectangles become very thin, we recover the true area. This is how integration is defined. However, you can also use the reasoning in reverse: a sum over many elements of a slowly varying function can be approximated with an integral.
    (a) For $n \gg 1$, find both an underestimate and an overestimate for $\sum _ { k = 1 } ^ { n } k$ by replacing it with appropriate integrals. How does the fractional error of your approximations scale with $n$ ?
    (b) For $n \gg 1$, find a reasonable way to approximately evaluate $\sum _ { k = 1 } ^ { n } \log k$. How does the fractional error of your approximation scale with $n$ ? How good of a result can you get?

We'll use these kinds of approximations in several later problem sets.
Solution. (a) We can think of this sum as a discrete Riemann sum approximating the area under the function $f ( x ) = x$, where each rectangle has width $\Delta k = 1$. If we take the rectangle heights to be set by the value of the function at their right edges, we get

$$
\sum _ { k = 1 } ^ { n } k = \sum _ { k = 1 } ^ { n } k \Delta k \approx \int _ { 0 } ^ { n } x d x = \frac { n ^ { 2 } } { 2 }
$$

Since the function is monotonically increasing, this guarantees that our approximation is an underestimate.

To get an overestimate, we could have instead used a leftward Riemann sum, giving

$$
\sum _ { k = 1 } ^ { n } k \approx \int _ { 1 } ^ { n + 1 } x d x = \frac { n ^ { 2 } + 2 n } { 2 }
$$

The exact answer is $n ( n + 1 ) / 2$, so the fractional error of these approximations scales as $1 / n$. Incidentally, if we had taken a centered Riemann sum, integrating from $1 / 2$ to $n + 1 / 2$, we would have gotten the exact correct answer. That's just because the linear function we're considering here is particularly simple. But in general, you expect a centered Riemann sum to do better, the trapezoidal rule to do better than that, and Simpson's rule to do better still.


If you're mathematically inclined, you might be wondering if there's a rigorous way to determine the error in this approximation. That's given by the Euler-Maclaurin formula, which states that the difference between the sum and integral is equal to a series involving derivatives of the integrand at the endpoints. Using the trapezoidal rule automatically takes care of the first term in that series, and Simpson's rule takes care of the first two.
(b) Here we have to be careful, because while $\log x$ is slowly varying over most of the range, it blows up as $x \rightarrow 0$. We shouldn't include this violent region in the integral, because it doesn't affect the sum at all. One reasonable option is to take the same prescription we used in part (a), but drop the $k = 1$ term since $\log 1 = 0$, giving
$$
\sum _ { k = 1 } ^ { n } \log k = \sum _ { k = 2 } ^ { n } \log k \approx \int _ { 1 } ^ { n } \log x d x = n \log n - n + 1
$$
Generically, we expect the fractional error of a Riemann sum to scale as $1 / n$. To show that rigorously here, we can use the fact that this is a rightward Riemann sum of an increasing function, so that our approximation is guaranteed to be an underestimate. The analogous leftward Riemann sum, which is guaranteed to be an overestimate, gives
$$
\sum _ { k = 1 } ^ { n } \log k \approx \int _ { 1 } ^ { n + 1 } \log x d x = ( n + 1 ) \log ( n + 1 ) - ( n + 1 ) + 1
$$
The answer is between these two quantities, and the biggest part of the difference between them scales as $\log n$. That corresponds to a fractional error of order $1 / n$ as expected.
We can summarize the content of the above two approximations as
$$
\sum _ { k = 1 } ^ { n } \log k = n \log n - n + \mathcal { O } ( \log n ) .
$$
In fact, it can be proven that
$$
\sum _ { k = 1 } ^ { n } \log k = n \log n - n + \frac { 1 } { 2 } \log n + \log ( \sqrt { 2 \pi } ) + \mathcal { O } ( 1 / n ) .
$$
This result is called Stirling's approximation, and we'll put it to use in P2 and T2.
It turns out we can get the order $\log n$ term right by either using a centered Riemann sum (i.e. taking $n + 1 / 2$ for the upper range of integration), or by using the trapezoidal rule, as described here. But there's no way to get the order-one term right using any variation of these methods, because the bins themselves have a width of 1 . The integral is smooth, while the sum itself is inherently chunky. So deriving Stirling's approximation requires a different method, which is described here. (That derivation is quite short in modern notation, but it's subtle. According to the book Concrete Mathematics, it took Stirling several years to get the order-one piece right, back in the 1700s!)

Example 19
For $\epsilon \ll 1$, find a rough estimate for the leading term in the definite integral

$$
I = \int _ { 0 } ^ { \pi / 4 } \frac { d \theta } { \epsilon ^ { 2 } + \sin ^ { 2 } \theta }
$$

Solution
The integrand has a sharp peak near $\theta = 0$ of height $\sim 1 / \epsilon ^ { 2 }$ and width $\theta \sim \epsilon$, so $I \sim 1 / \epsilon$.
If we also want to get the prefactor, we can approximate the integral by keeping only the contribution from the peak. On the peak, we can use the small angle approximation,

$$
I \approx \int _ { 0 } ^ { \pi / 4 } \frac { d \theta } { \epsilon ^ { 2 } + \theta ^ { 2 } } \approx \int _ { 0 } ^ { \infty } \frac { d \theta } { \epsilon ^ { 2 } + \theta ^ { 2 } } = \frac { \pi } { 2 \epsilon }
$$

where the second step followed because the integrand falls rapidly for $\theta \gtrsim \epsilon$.

Remark
The estimate above is right, but you might worry we've missed some important contributions, e.g. from the integration range away from the peak, or from applying the small angle approximation within the integral. A more careful method is to split the integration range,

$$
I = \int _ { 0 } ^ { \delta } \frac { d \theta } { \epsilon ^ { 2 } + \sin ^ { 2 } \theta } + \int _ { \delta } ^ { \pi / 4 } \frac { d \theta } { \epsilon ^ { 2 } + \sin ^ { 2 } \theta } = I _ { 1 } + I _ { 2 }
$$

where $\epsilon \ll \delta \ll 1$. Then we can apply approximations within $I _ { 1 }$ and $I _ { 2 }$ separately. First,

$$
I _ { 1 } = \int _ { 0 } ^ { \delta } \frac { d \theta } { \epsilon ^ { 2 } + \theta ^ { 2 } } + O \left( \int _ { 0 } ^ { \delta } \frac { \theta ^ { 4 } d \theta } { \left( \epsilon ^ { 2 } + \theta ^ { 2 } \right) ^ { 2 } } \right) = \frac { 1 } { \epsilon } \tan ^ { - 1 } \frac { \delta } { \epsilon } + \mathcal { O } ( \delta )
$$

where we accounted for the leading correction to the small angle approximation, and expanded the integrand with the binomial theorem. Similarly, in the second case, expanding the denominator for small $\epsilon$ gives

$$
I _ { 2 } = \int _ { \delta } ^ { \pi / 4 } \frac { d \theta } { \sin ^ { 2 } \theta } + O \left( \int _ { \delta } ^ { \pi / 4 } \frac { \epsilon ^ { 2 } } { \sin ^ { 4 } \theta } \right) = ( \cot \delta - 1 ) + \mathcal { O } \left( \epsilon ^ { 2 } / \delta ^ { 3 } \right)
$$

We now can explicitly see how big the error terms are. To finish, we should check that we can choose $\delta$ so that the error terms are reasonably small, and that the answer is independent of the precise value of $\delta$. Here, we take $\delta \sim \sqrt { \epsilon }$. Taylor expanding the arctangent and cotangent,

$$
I _ { 1 } = \frac { \pi } { 2 \epsilon } - \frac { 1 } { \delta } + \mathcal { O } ( \sqrt { \epsilon } ) , \quad I _ { 2 } = \frac { 1 } { \delta } - 1 + \mathcal { O } ( \sqrt { \epsilon } ) .
$$

We thus conclude $I = \pi / ( 2 \epsilon ) - 1 + \mathcal { O } ( \sqrt { \epsilon } )$, which is more accurate than the rough treatment above, and has an estimate on the error. You probably won't ever have to do anything this intricate for an Olympiad, but this is the kind of reasoning you might informally do (much more roughly than what's written above) to check that your initial estimate is right.


[3] Problem 36. [A] Estimating some integrals with sharp peaks. For all cases, you only need to find an estimate for the leading contribution in the limit $\epsilon \rightarrow 0$, and you can drop numeric prefactors.
    (a) To warm up, find a rough estimate for
$$
I _ { 1 } = \int _ { 0 } ^ { \infty } \frac { d x } { ( \epsilon + x ) ^ { 2 } ( 1 + x ) }
$$
    (b) Find a rough estimate for
$$
I _ { 2 } = \int _ { 0 } ^ { \infty } \frac { d x } { \sqrt { \epsilon + x } ( 1 + x ) }
$$
    (c) Find a rough estimate for
$$
I _ { 3 } = \int _ { 0 } ^ { \infty } \frac { d x } { ( \epsilon + x ) ( 1 + x ) }
$$

Solution. (a) There's a sharp peak near $x = 0$, of width $\epsilon$ and height $1 / \epsilon ^ { 2 }$, so we estimate $I _ { 1 } \sim 1 / \epsilon$.


(b) There's a sharp peak near $x = 0$, of width $\epsilon$ and height $1 / \sqrt { \epsilon }$, so the peak contributes $\sim \sqrt { \epsilon }$. But wait! That's actually a small quantity in the limit $\epsilon \rightarrow 0$. In this case, the peak simply isn't very high, and the dominant contribution actually comes from the rest of the integral. A very rough estimate can be found by neglecting the smaller part of each term in the denominator in each part of the integration range,
$$
I _ { 2 } \sim \int _ { 0 } ^ { \epsilon } \frac { d x } { \sqrt { \epsilon } } + \int _ { \epsilon } ^ { 1 } \frac { d x } { \sqrt { x } } + \int _ { 1 } ^ { \infty } \frac { d x } { x ^ { 3 / 2 } } = \mathcal { O } ( \sqrt { \epsilon } ) + \mathcal { O } ( 1 ) + \mathcal { O } ( 1 ) = \mathcal { O } ( 1 )
$$
That is, the integral is an order-one number, independent of $\epsilon$.
(c) This is in between the previous two cases, so let's apply a similar rough approximation,
$$
I _ { 3 } \sim \int _ { 0 } ^ { \epsilon } \frac { d x } { \epsilon } + \int _ { \epsilon } ^ { 1 } \frac { d x } { x } + \int _ { 1 } ^ { \infty } \frac { d x } { x ^ { 2 } } = \mathcal { O } ( 1 ) + \mathcal { O } ( \log ( 1 / \epsilon ) ) + \mathcal { O } ( 1 ) = \mathcal { O } ( \log ( 1 / \epsilon ) )
$$
That is, the integral is only logarithmically divergent in $\epsilon$, and most of the contribution comes from the region away from the peak but before the falloff at infinity, $\epsilon \ll x \ll 1$. This kind of behavior is more common than you might think, especially in more advanced physics.
Of course, if you're not sure about any of these steps, you can explicitly split the integration range up (e.g. into $0 < x < \delta _ { 1 } , \delta _ { 1 } < x < \delta _ { 2 }$, and $x > \delta _ { 2 }$, with $\epsilon \lesssim \delta _ { 1 } \ll \delta _ { 2 } \lesssim 1$ ) and approximate within each region, to get the same result.

Remark
In Olympiad physics, you need to understand how to set up integrals, but you almost never have to perform a nontrivial integral. There will almost always be a way to solve the problem without doing explicit integration at all, or an approximation you can do to render the integral trivial, or the integral will be given to you in the problem statement. This is because physics competitions are generally written to make students think hard about physical systems, and the integrals are just viewed as baggage.


Even introductory calculus has harder integrals than Olympiad physics. For example, consider

$$
\int \sec x d x = \log | \sec x + \tan x | + C
$$

When I first saw this, I was shocked by how the trick for doing this integral came out of nowhere; it seemed much harder than anything else in the class. And it is! Historically, it arose in 1569 from Mercator's projection, where it gives the vertical distance on the map from the equator to a given latitude. For decades, cartographers simply looked up the numeric value of the integral in tables, where the Riemann sums had been done by hand. (They had no chance of solving it analytically anyway, since Napier only invented logarithms in 1614.) Gradually, tabulated values of the logarithms of trigonometric functions became available, and in 1645, Bond conjectured the correct result by noticing the close agreement of tabulated values of each side of the equation. Finally, Gregory proved the result in 1668, using what Halley called "a long train of Consequences and Complications of Proportions." So it took almost a hundred years for this integral to be solved! (Though to their credit, they had the handicap of not knowing about differentiation or the fundamental theorem of calculus; they were finding the area under the curve with just Euclidean geometry.)

Even though Olympiad physics tries to avoid tough integrals, doing more advanced physics tends to produce them, so physicists often get quite good at integration. By contrast, Spivak's calculus textbook for math majors only covers integration techniques in a single chapter towards the end of the book. He justifies the inclusion of this material by saying:

> Every once in a while you might actually need to evaluate an integral [...] For example, you might take a physics course [...] Even if you intend to forget how to integrate (and you probably will forget some details the first time through), you must never forget the basic methods.

That attitude is why physics students frequently win the MIT Integration Bee.
