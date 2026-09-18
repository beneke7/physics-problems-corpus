---
id: kevin-zhou-p1-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p016
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[3] Problem 16. The function cos−1(1 − x) does not have a Taylor series about x = 0. However, it
does have a series expansion about x = 0 in a different variable.
(a) What is this variable, and what’s the first term in the series?
(b) ⋆ What’s the next nontrivial term in the series?
Solution. (a) We have
d
dx
arccos(1 − x) =
1
p
1 − (1 − x)2
which is undefined at x = 0, so there is no Taylor series. But note that if we let y = cos−1(1−x)
and take the cosine of both sides, we have
cosy = 1 − x.
Now y does have a good Taylor series near y = 0, which corresponds to where x = 0. At
lowest order, we have
1 − y2
/2 ≈ 1 − x
which implies that
y ≈
√
2x.
More generally, the answer is a series in
√
x. Since cosine is even, the next term is O(x3/2).
19
Kevin Zhou Physics Olympiad Handouts
(b) In order to get higher order terms, we can write
cos−1
(1 − x) = cos−1
(1 − u2
)
where u =
√
x, and directly compute a Taylor series in u, using the usual rule for a derivative
of an inverse function.
That approach is straightforward, but for variety we’ll show a slightly trickier but much faster
method. Write the answer as
y =
√
2x1/2
+ Ax3/2
+ O(x5/2
)
where A is to be determined. By the Taylor series for cosine, we know that
1 − x = cosy = 1 −
y2
2
+
y4
24
+ O(y6
)
which is equivalent to
x =
y2
2
−
y4
24
+ O(x3
)
since y6 = O(x3). We can now plug in our expression for y. Equating the term linear in x
just recovers the result of part (a), while equating the term quadratic in x (which vanishes
on the left-hand side) gives the coefficient A. Concretely, we have
y2
2
= x +
√
2Ax2
+ O(x3
)
and
y4
24
=
1
6
x2
+ O(x3
)
from which we conclude A = 1/(6
√
2), so that
cos−1
(1 − x) =
√
2x +
x3/2
6
√
2
+ O(x5/2
).
This technique is called “reversion of series”.
Idea 5: Binomial Theorem
When both x and xn are small, it is useful to use the binomial theorem,
(1 + x)n
= 1 + xn + O(x2
n2
).
It applies even when n is not an integer. In particular, n can be very large, very small, or
even negative. The extra terms will be small as long as xn is small. If desired, one can find
higher terms using binomial coefficients,
(1 + x)n
=
∞ X
m=0

n
m

xm
where the definition of the binomial coefficient is formally extended to arbitrary real n.
The binomial theorem is one of the most common approximations in physics. It’s really just taking
the first two terms in the Taylor series of (1 + x)n, but we give it a name because it’s so useful.
20
Kevin Zhou Physics Olympiad Handouts
