---
id: kevin-zhou-p1-ex011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex011
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 11: Birthday Paradox
If you have n people in a room, around how large does n have to be for there to be at least
a 50% chance of two people sharing the same birthday?
Solution
Imagine adding people one at a time. The second person has a 1/365 chance of sharing a
birthday with the first. If they don’t share a birthday, the third person has a 2/365 chance
of sharing a birthday with either, and so on. So a decent estimate for n is the n where

1 −
1
365

1 −
2
365

...

1 −
n − 1
365

≈
1
2
.
The surprising point of the birthday paradox is that n ≪ 365. So we can use the binomial
theorem in reverse, approximating the left-hand side as

1 −
1
365

1 −
1
365
2
...

1 −
1
365
n−1
=

1 −
1
365
n(n−1)/2
≈

1 −
1
365
n2/2
which is valid since n/365 is small. It’s tempting to use the binomial theorem again to write

1 −
1
365
n2/2
≈ 1 −
n2
2 · 365
=
1
2
which gives n = 19. However, this is a bad approximation, because the binomial theorem only
works if (n2/2)(1/365) is very small, but here we’ve set it to 1/2, which isn’t particularly small.
Since the series expansion variable is 1/2, each term in the series expansion is roughly 1/2 as
big as the last (ignoring numerical coefficients), so we expect to be off by about (1/2)2 = 25%.
The binomial theorem is an expansion for (1 + x)y which works when both x and xy are
small. Here xy isn’t small, and we instead want an approximation that works when only x is
22
Kevin Zhou Physics Olympiad Handouts
small. One trick to dealing with an annoying exponent is to take the logarithm, since that
just turns it into a multiplicative factor. Note that
log((1 + x)y
) = y log(1 + x) ≈ yx
by Taylor series, which implies that
(1 + x)y
≈ eyx
when x is small, an important fact which you should remember. So we have

1 −
1
365
n2/2
≈ e−n2/(2·365)
=
1
2
and solving gives n = 22.5. We should round up since n is actually an integer, giving n = 23,
which is indeed the exact answer.
Remark
Precisely how accurate is the approximation (1+x)y ≈ eyx? Note that the only approximate
step used to derive it was taking log(1 + x) ≈ x, which means we can get the corrections by
expanding to higher order. If we take the next term, log(1 + x) ≈ x − x2/2, then we find
(1 + x)y
≈ eyx
e−x2y/2
.
Note that because we are approximating the logarithm of the quantity we want, the next
correction is multiplicative rather than additive. Our approximation has good fractional
precision as long as x2y ≪ 1. In the previous example, x2y/2 = (22.5/365)2/4 = 0.1%, so
our answer was quite accurate.
