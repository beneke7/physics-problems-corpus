---
id: solution-ocr-kevin-zhou-w1sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 1
Consider a string with mass $\mu$ per unit length, under tension $T$. The transverse displacement of the string is given by the wave function $y ( x , t )$, and for simplicity we assume the wave is shallow, i.e. $\partial y / \partial x \ll 1$. What's the equation of motion for $y$ ?

Solution
Consider a segment of length $\Delta x$. At each end of the segment, the tension provides horizontal and vertical forces

$$
T _ { x } = \frac { T } { \sqrt { 1 + y ^ { \prime 2 } } } \approx T , \quad T _ { y } = \frac { T y ^ { \prime } } { \sqrt { 1 + y ^ { \prime 2 } } } \approx T y ^ { \prime }
$$

where we're expanding to first order in $y ^ { \prime }$. Therefore the total force is

$$
F _ { y } = \Delta T _ { y } = T y ^ { \prime \prime } \Delta x .
$$

The mass of this segment is $\mu \Delta x$, again to first order, so by Newton's Second Law,

$$
T \Delta x \frac { \partial ^ { 2 } y } { \partial x ^ { 2 } } = \mu \Delta x \frac { \partial ^ { 2 } y } { \partial t ^ { 2 } }
$$

Cleaning this up a bit, we have the wave equation

$$
\frac { \partial ^ { 2 } y } { \partial t ^ { 2 } } = v ^ { 2 } \frac { \partial ^ { 2 } y } { \partial x ^ { 2 } } , \quad v ^ { 2 } = \frac { T } { \mu } .
$$

Physically, this simply says the string tries to straighten out curvature (represented by $\partial ^ { 2 } y / \partial x ^ { 2 }$ ). The wave equation is the simplest possible equation of motion for waves. Even in more complicated situations, we often start with this equation and treat the extra terms as perturbations. The wave equation thus occupies a position like that of the simple harmonic oscillator.


Idea 1
We may factor the wave equation as a difference of squares,

$$
\left( \partial _ { t } ^ { 2 } - v ^ { 2 } \partial _ { x } ^ { 2 } \right) y = \left( \partial _ { t } - v \partial _ { x } \right) \left( \partial _ { t } + v \partial _ { x } \right) y = 0 .
$$

Therefore, functions that satisfy $\left( \partial _ { t } \pm v \partial _ { x } \right) y = 0$ solve the wave equation. It is simple to verify that these are functions of the form

$$
y ( x , t ) = f ( x \pm v t ) .
$$

Since the wave equation is linear, superpositions of solutions to the wave equation are also solutions to the wave equation. The general solution is of the form $f ( x - v t ) + g ( x + v t )$ for arbitrary functions $f$ and $g$.

[1] Problem 1. Waves of the form $y ( x , t ) = f ( x \pm v t )$ simply translate with uniform velocity $v$. Does a wave of the form $y ( x , t ) = f ( x + v t )$ move to the left or the right?
Solution. This wave moves towards the left. To see this, note that at time $t = 0$ the wave profile is $f ( x )$, while a small time later it looks like $f ( x + v \Delta t )$. This is the graph of $f ( x )$ shifted to the left.
