---
id: solution-ocr-kevin-zhou-p1sol-ex011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
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
