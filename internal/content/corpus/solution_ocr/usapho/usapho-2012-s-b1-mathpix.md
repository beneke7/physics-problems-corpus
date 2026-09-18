---
id: solution-ocr-usapho-2012-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2012-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

A particle of mass $m$ moves under a force similar to that of an ideal spring, except that the force repels the particle from the origin:

$$
F = + m \alpha ^ { 2 } x
$$

In simple harmonic motion, the position of the particle as a function of time can be written

$$
x ( t ) = A \cos \omega t + B \sin \omega t
$$

Likewise, in the present case we have

$$
x ( t ) = A f _ { 1 } ( t ) + B f _ { 2 } ( t )
$$

for some appropriate functions $f _ { 1 }$ and $f _ { 2 }$.

a. $f _ { 1 } ( t )$ and $f _ { 2 } ( t )$ can be chosen to have the form $e ^ { r t }$. What are the two appropriate values of $r$ ?
b. Suppose that the particle begins at position $x ( 0 ) = x _ { 0 }$ and with velocity $v ( 0 ) = 0$. What is $x ( t )$ ?
c. A second, identical particle begins at position $x ( 0 ) = 0$ with velocity $v ( 0 ) = v _ { 0 }$. The second particle becomes closer and closer to the first particle as time goes on. What is $v _ { 0 }$ ?

## Solution

a. Newton's second law gives
$$
\frac { d ^ { 2 } x } { d t ^ { 2 } } - \alpha ^ { 2 } x = 0
$$
As with the case of simple harmonic motion, we solve the differential equation using a trial function, in this case $x ( t ) = A e ^ { r t }$. (This may look a bit ad hoc, but it's actually quite general; exponentials are essentially the general solution for any linear differential equation.) Then
$$
\frac { d ^ { 2 } } { d t ^ { 2 } } \left( A e ^ { r t } \right) - \alpha ^ { 2 } A e ^ { r t } = r ^ { 2 } A e ^ { r t } - \alpha ^ { 2 } A e ^ { r t } = 0
$$
which implies that $r = \pm \alpha$.
b. Since the differential equation is linear in $x$, the general solution is a superposition of our two solutions,
$$
x ( t ) = A e ^ { \alpha t } + B e ^ { - \alpha t }
$$
which implies
$$
v ( t ) = \alpha A e ^ { \alpha t } - \alpha B e ^ { - \alpha t } .
$$
Inserting our initial values,
$$
x ( 0 ) = A + B = x _ { 0 } , \quad v ( 0 ) = \alpha A - \alpha B = 0 .
$$

These equations have solution

$$
A = B = \frac { x _ { 0 } } { 2 }
$$

and therefore

$$
x ( t ) = \frac { x _ { 0 } } { 2 } \left( e ^ { \alpha t } + e ^ { - \alpha t } \right)
$$

c. This time our initial values are

$$
x ( 0 ) = A + B = 0 , \quad v ( 0 ) = \alpha A - \alpha B = v _ { 0 }
$$

with solution

$$
A = \frac { v _ { 0 } } { 2 \alpha } , \quad B = - \frac { v _ { 0 } } { 2 \alpha } .
$$

Therefore,

$$
x ( t ) = \frac { v _ { 0 } } { 2 \alpha } \left( e ^ { \alpha t } - e ^ { - \alpha t } \right) .
$$

After a long time, the exponentially decaying term will become negligible. Thus, the second particle will approach the first particle if the coefficient of the exponentially growing term matches, so

$$
v _ { 0 } = \alpha x _ { 0 } .
$$
