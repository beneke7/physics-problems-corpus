---
id: solution-ocr-kevin-zhou-m1sol-p008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-p008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 8. [A] Some linear, homogeneous, non-time-translation-invariant differential equations can be solved by simply guessing a power series. For this problem, don't worry about dimensional analysis; assume all variables have already been redefined to be dimensionless.

(a) As a warmup, consider the differential equation $\dot { x } = k x$ for constant $k$, which we already know how to solve. By plugging in the ansatz
$$
x ( t ) = \sum _ { n = 0 } ^ { \infty } a _ { n } t ^ { n }
$$
with unknown constant coefficients $a _ { n }$, find the solution with $x ( 0 ) = 1$.
(b) Now consider the non-time-translation-invariant differential equation
$$
t ^ { 2 } \ddot { x } + t \dot { x } + t ^ { 2 } x = 0
$$
which is called Bessel's differential equation of order zero. By using the same ansatz, find the unique solution with $x ( 0 ) = 1$ and $\dot { x } ( 0 ) = 0$.

Solution. (a) Plugging the ansatz in gives

$$
\sum _ { n = 0 } ^ { \infty } n a _ { n } t ^ { n - 1 } = k \sum _ { n = 0 } ^ { \infty } a _ { n } t ^ { n } .
$$

Shifting the sum on the left-hand side, we have

$$
\sum _ { n = 0 } ^ { \infty } \left( k a _ { n } - ( n + 1 ) a _ { n + 1 } \right) t ^ { n } = 0 .
$$

For this quantity to be zero for all $t$, each term in the sum must individually be zero, so

$$
a _ { n + 1 } = \frac { k } { n + 1 } a _ { n } .
$$

The initial condition $x ( 0 ) = 1$ tells us that $a _ { 0 } = 1$, from which we conclude

$$
a _ { 1 } = k , \quad a _ { 2 } = \frac { k ^ { 2 } } { 2 } , \quad a _ { 3 } = \frac { k ^ { 3 } } { 6 } , \ldots
$$

or more generally,

$$
x ( t ) = \sum _ { n = 0 } ^ { \infty } \frac { k ^ { n } } { n ! } t ^ { n } = e ^ { k t }
$$

which is just as expected.

(b) Plugging the ansatz in gives
$$
\sum _ { n = 0 } ^ { \infty } \left( n ( n - 1 ) a _ { n } t ^ { n } + n a _ { n } t ^ { n } + a _ { n } t ^ { n + 2 } \right) = 0 .
$$
Simplifying and shifting the sum as in part (a) gives
$$
\sum _ { n = 0 } ^ { \infty } n ^ { 2 } a _ { n } t ^ { n } + \sum _ { n = 2 } ^ { \infty } a _ { n - 2 } t ^ { n } = 0 .
$$
The $n = 0$ equation is automatic, while the $n = 1$ equation gives $a _ { 1 } = 0$, consistent with the initial condition $\dot { x } ( 0 ) = 0$. For $n \geq 2$, we have the recursion relation $a _ { n } = - a _ { n - 2 } / n ^ { 2 }$. The

remaining initial condition gives $a _ { 0 } = 1$, from which we conclude the $a _ { 2 n + 1 }$ are all zero. We then have

$$
a _ { 2 } = - \frac { 1 } { 2 ^ { 2 } } , \quad a _ { 4 } = \frac { 1 } { 2 ^ { 2 } 4 ^ { 2 } } , \quad a _ { 6 } = - \frac { 1 } { 2 ^ { 2 } 4 ^ { 2 } 6 ^ { 2 } } , \ldots
$$

from which we conclude

$$
x ( t ) = \sum _ { m = 0 } ^ { \infty } \frac { ( - 1 ) ^ { m } } { ( m ! ) ^ { 2 } } \left( \frac { t } { 2 } \right) ^ { 2 m } .
$$

This function is known as the Bessel function of the first kind, of zeroth order, $J _ { 0 } ( t )$.

## 2 Tricks

In this section we'll consider some kinematics problems that require cleverness, not computation.
Idea 3
Many problems can be solved by a clever choice of reference frame. It is often useful to go to the frame moving with one of the objects in the problem, or to go into a frame that makes the motion in the problem more symmetric. For the purposes of kinematics it can even be useful to use noninertial reference frames, such as a falling frame where projectiles don't accelerate, or a rotating frame, though this will introduce fictitious forces into the dynamics. It is also useful to tilt the coordinate axes to be parallel to various objects.
