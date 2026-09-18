---
id: solution-ocr-kevin-zhou-m1sol-p002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-p002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 2. Now assume quadratic drag, $F = - \alpha m v ^ { 2 }$, which applies for fast-moving projectiles.
(a) Integrate Newton's second law to get an implicit equation for $v ( t )$ with the same initial conditions as above. That is, you don't need to solve for $v ( t )$, as it'll just make things messy.
(b) Your equation will only be valid when the projectile is going up; explain why.
(c) Find $v ( t )$ for an object released from rest at time $t = 0$. (Hint: if needed, look up some standard integrals involving hyperbolic trigonometric functions. But don't worry about memorizing the results, since in competitions, any nontrivial integral needed will usually be given to you.)
(d) Integrate your answer to part (c) with respect to time to find $y ( t )$, and verify that the answer makes sense at both small and large times.

Some people only call this quadratic case drag; they call the linear case viscous resistance. This is because they behave fundamentally differently at the microscopic level, as we will explore in M7.

Solution. (a) Newton's second law is

$$
\frac { d v } { d t } = - g - \alpha v ^ { 2 } .
$$

By the same reasoning as before, we find

$$
\int _ { v _ { 0 } } ^ { v ( t ) } \frac { d v ^ { \prime } } { g + \alpha v ^ { \prime 2 } } = - \int _ { 0 } ^ { t } d t ^ { \prime } = - t
$$

By nondimensionalizing the integral as described in P1, the left-hand side is

$$
- t = \frac { 1 } { \sqrt { \alpha g } } \int _ { v _ { 0 } \sqrt { \alpha / g } } ^ { v ( t ) \sqrt { \alpha / g } } \frac { d x } { 1 + x ^ { 2 } } = \frac { 1 } { \sqrt { \alpha g } } \left( \tan ^ { - 1 } \left( v ( t ) \sqrt { \frac { \alpha } { g } } \right) - \tan ^ { - 1 } \left( v _ { 0 } \sqrt { \frac { \alpha } { g } } \right) \right)
$$

where I pulled out a factor of $1 / \sqrt { \alpha g }$ to get the right overall dimensions, then used dimensional analysis again to convert the integration bounds to dimensionless numbers. (You can also do this by ordinary $u$-substitution if you prefer.) This is essentially the final result. It can be solved for $v ( t )$, but that just makes it look worse.


(b) The reason the equation only makes sense when the projectile is going up is that the force should always oppose the direction of motion, so we really wanted to solve $F = - m \alpha | v | v$. Equivalently, the sign of $\alpha$ changes when the direction of the velocity changes. This means our solution really should have two separate cases.
(c) By the same reasoning, we have
$$
\int _ { 0 } ^ { v ( t ) } \frac { d v ^ { \prime } } { g - \alpha v ^ { \prime 2 } } = - t
$$
where the changes are the initial condition and the sign of $\alpha$. The left-hand side is
$$
\frac { 1 } { \sqrt { \alpha g } } \int _ { 0 } ^ { v ( t ) \sqrt { \alpha / g } } \frac { d x } { 1 - x ^ { 2 } } = \frac { 1 } { \sqrt { \alpha g } } \left( \tanh ^ { - 1 } \left( v ( t ) \sqrt { \frac { \alpha } { g } } \right) \right) .
$$
If you don't know this hyperbolic trig integral, you could also derive it by expanding $1 / \left( 1 - x ^ { 2 } \right)$ in partial fractions and integrating each term. You will get a bunch of logarithms, which is equivalent to the hyperbolic tangent. However, if you don't know what the hyperbolic tangent is, you should look it up now, because such functions will be useful later!
Because of the simpler initial condition, we can get an explicit solution,
$$
v ( t ) = - \sqrt { \frac { g } { \alpha } } \tanh ( \sqrt { \alpha g } t ) .
$$
The speed approaches $\sqrt { g / \alpha }$ with a timescale $1 / \sqrt { \alpha g }$, a fact we could also have deduced by physical intuition and dimensional analysis. Actually, another way to arrive at this result is by just substituting $\alpha \rightarrow - \alpha$ in the answer for part (a)! This will produce the tangent of an imaginary number, which is in fact how the hyperbolic tangent is defined.
(d) Integrating with respect to time gives
$$
y ( t ) = - \frac { 1 } { \alpha } \log ( \cosh ( \sqrt { \alpha g } t ) ) .
$$
In the large $t$ limit, the cosh grows exponentially, so that
$$
y ( t ) \approx - \frac { 1 } { \alpha } \sqrt { \alpha g } t = - \sqrt { \frac { g } { \alpha } } t
$$
which is just motion at the terminal velocity. In the small $t$ limit, we can approximate
$$
y ( t ) \approx - \frac { 1 } { \alpha } \log \left( \frac { e ^ { \sqrt { \alpha g } t } + e ^ { - \sqrt { \alpha g } t } } { 2 } \right) \approx - \frac { 1 } { \alpha } \log \left( 1 + \alpha g t ^ { 2 } / 2 \right) \approx - \frac { g t ^ { 2 } } { 2 }
$$
as expected, as drag is negligible in this regime. And of course, when we say that $t$ is large or small, we really mean that $\sqrt { \alpha g } t \gg 1$ or $\sqrt { \alpha g } t \ll 1$ respectively.
