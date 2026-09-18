---
id: solution-ocr-kevin-zhou-t2sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 1
Consider describing a plane with Cartesian coordinates $( x , y )$ and polar coordinates $( r , \theta )$. Calculate the partial derivatives $\left. ( \partial x / \partial r ) \right| _ { \theta }$ and $\left. ( \partial x / \partial r ) \right| _ { y }$.

Solution
To evaluate the first partial derivative, we need to write $x$ as a function of $r$ and $\theta$. This is done by $x = r \cos \theta$. Differentiating with respect to $r$ and treating $\theta$ as a constant, we have

$$
\left. \frac { \partial x } { \partial r } \right| _ { \theta } = \cos \theta .
$$

To evaluate the second, we should write $x$ in terms of $r$ and $y$. This is done starting with

$$
r ^ { 2 } = x ^ { 2 } + y ^ { 2 } .
$$

We could solve for $x$ here. However, it's quicker to use the usual trick of implicit differentiation: note that differentiating both sides with respect to $r$, at fixed $y$, gives

$$
2 r = \left. 2 x \frac { \partial x } { \partial r } \right| _ { y } + 0
$$

which yields the answer,

$$
\left. \frac { \partial x } { \partial r } \right| _ { y } = \frac { r } { x } = \frac { 1 } { \cos \theta } .
$$

These two results are different: changing what you keep constant changes the derivative. You can see this geometrically by evaluating the two versions of $\partial x / \partial r$ at a few points.

Idea 3: Multivariable Differential
The change of a function $f ( x , y )$ upon independent changes in $x$ and $y$ is

$$
d f = \left. \frac { \partial f } { \partial x } \right| _ { y } d x + \left. \frac { \partial f } { \partial y } \right| _ { x } d y
$$

which you can recognize as an alternative form of the multivariable chain rule from P1. We can also use this equation to describe small increments of quantities that aren't state functions, in which case we'll write the left-hand side as $d f$.
[1] Problem 1. How are pressure and temperature defined, in terms of partial derivatives of $U$ ?
Solution. By the first law of thermodynamics, we have

$$
d U = d Q + d W = T d S - P d V
$$

From this result, we immediately read off the answers,

$$
T = \left. \frac { \partial U } { \partial S } \right| _ { V } , \quad P = - \left. \frac { \partial U } { \partial V } \right| _ { S } .
$$
