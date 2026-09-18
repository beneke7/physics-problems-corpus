---
id: solution-ocr-kevin-zhou-p1sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
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
