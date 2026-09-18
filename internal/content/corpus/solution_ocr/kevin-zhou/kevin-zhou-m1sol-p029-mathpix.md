---
id: solution-ocr-kevin-zhou-m1sol-p029
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-p029]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 29. Consider a mass $m$ on a table attached to a spring at the origin with zero relaxed length, which exerts the force
$$
\mathbf { F } = - k \mathbf { r }
$$
on the mass. We will find the general solution for $\mathbf { r } ( t ) = ( x ( t ) , y ( t ) )$ in two different ways.
    (a) Directly write down the answer, using the fact that the $x$ and $y$ coordinates are independent.
    (b) Sketch a representative sample of solutions. What kind of curve does the trajectory follow?
    (c) ★ Here's a more unusual way to arrive at the same answer. Go to a noninertial reference frame rotating with angular velocity $\omega _ { 0 }$ about the origin, so that the centrifugal force cancels out the spring force. In this frame, the only relevant force is the Coriolis force $- 2 m \boldsymbol { \omega } _ { 0 } \times \mathbf { v }$. Find the general solution in this frame, then transform back to the original frame and show that you get the same answer as in part (a). (This can get a bit messy; the easiest way is to treat the plane as the complex plane, i.e. work in terms of the variable $r = x + i y$.)

Solution. (a) We have a separate equation for each component,

$$
\frac { d ^ { 2 } x } { d t ^ { 2 } } = - \frac { k } { m } x , \quad \frac { d ^ { 2 } y } { d t ^ { 2 } } = - \frac { k } { m } y .
$$

Both describe a harmonic oscillator with angular frequency $\omega _ { 0 } = \sqrt { k / m }$. Then the general solution can be written as

$$
x ( t ) = A \cos \left( \omega _ { 0 } t + \phi _ { 1 } \right) , \quad y ( t ) = B \sin \left( \omega _ { 0 } t + \phi _ { 2 } \right) .
$$

In general, it is very rare for the $x$ and $y$ coordinates to be independent. Another example of this type is projectile motion in linear drag, $\mathbf { F } = - k \mathbf { v }$. In these cases the 2D or 3D problem is no harder than the 1D version, but we're rarely so lucky.


(b) In the case where $\phi _ { 1 } = \phi _ { 2 } = 0$ and $A = B$, the mass moves in a circle centered at the origin. More generally, when the angles $\phi _ { i }$ are unequal, the mass can move in an ellipse with center at the origin.
(c) The centrifugal force is $m \omega _ { 0 } ^ { 2 } \mathbf { r }$, so to cancel the spring force we need to choose $\omega _ { 0 } = \sqrt { k / m }$. Now, in the rotating frame, the Coriolis force acts just like a magnetic field: it's always perpendicular to the motion, so the solution is circular motion. The angular frequency $\omega _ { c }$ of that circular motion satisfies
$$
2 m \omega _ { 0 } v = \frac { m v ^ { 2 } } { r } = m \omega _ { c } v
$$

from which we conclude $\omega _ { c } = 2 \omega _ { 0 }$. So in complex notation,

$$
r ( t ) = r _ { 0 } + r _ { 1 } e ^ { 2 i \omega _ { 0 } t }
$$

in the rotating frame. We can return to the original frame by simply multiplying by $e ^ { - i \omega _ { 0 } t }$, to give

$$
r ( t ) = r _ { 0 } e ^ { - i \omega _ { 0 } t } + r _ { 1 } e ^ { i \omega _ { 0 } t } .
$$

Taking real and imaginary parts and letting $r _ { i } = a _ { i } + i b _ { i }$,

$$
x ( t ) = \left( a _ { 0 } + a _ { 1 } \right) \cos \left( \omega _ { 0 } t \right) + \left( b _ { 0 } - b _ { 1 } \right) \sin \left( \omega _ { 0 } t \right) , \quad y ( t ) = \left( b _ { 0 } + b _ { 1 } \right) \cos \left( \omega _ { 0 } t \right) + \left( a _ { 1 } - a _ { 0 } \right) \sin \left( \omega _ { 0 } t \right) .
$$

This is the same as our result for part (a), after you use the sine and cosine addition formulas and appropriately redefine the parameters. Evidently, elliptical motion is just the superposition of two opposite circular motions! (In general, complex numbers are a useful way to deal with magnetic or Coriolis forces for motion in a plane, where B or $\boldsymbol { \omega }$ points perpendicular to the plane. In these cases the force lies in the plane perpendicular to the velocity, so it's just proportional to $i \dot { r }$, which is nice and simple; we'll see this idea again later.)

## 4 Optimal Launching

Finally, we'll consider projectile motion questions that involve optimization. These are rare on the USAPhO, but they are quite fun problems, with occasionally very slick solutions.
