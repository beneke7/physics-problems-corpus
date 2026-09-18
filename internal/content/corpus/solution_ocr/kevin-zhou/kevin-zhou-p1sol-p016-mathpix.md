---
id: solution-ocr-kevin-zhou-p1sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
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
