---
id: solution-ocr-kevin-zhou-p1sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
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
