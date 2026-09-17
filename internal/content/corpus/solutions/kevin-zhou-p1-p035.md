---
id: kevin-zhou-p1-p035
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p035
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[3] Problem 35. As you learned in calculus class, we may approximate the area under a function
using a lot of rectangles, and in the limit where the rectangles become very thin, we recover the
true area. This is how integration is defined. However, you can also use the reasoning in reverse: a
sum over many elements of a slowly varying function can be approximated with an integral.
(a) For n ≫ 1, find both an underestimate and an overestimate for
Pn
k=1 k by replacing it with
appropriate integrals. How does the fractional error of your approximations scale with n?
(b) For n ≫ 1, find a reasonable way to approximately evaluate
Pn
k=1 logk. How does the
fractional error of your approximation scale with n? How good of a result can you get?
We’ll use these kinds of approximations in several later problem sets.
Solution. (a) We can think of this sum as a discrete Riemann sum approximating the area under
the function f(x) = x, where each rectangle has width ∆k = 1. If we take the rectangle
heights to be set by the value of the function at their right edges, we get
n X
k=1
k =
n X
k=1
k∆k ≈
Z n
0
xdx =
n2
2
.
Since the function is monotonically increasing, this guarantees that our approximation is an
underestimate.
To get an overestimate, we could have instead used a leftward Riemann sum, giving
n X
k=1
k ≈
Z n+1
1
xdx =
n2 + 2n
2
.
The exact answer is n(n + 1)/2, so the fractional error of these approximations scales as 1/n.
Incidentally, if we had taken a centered Riemann sum, integrating from 1/2 to n + 1/2, we
would have gotten the exact correct answer. That’s just because the linear function we’re
considering here is particularly simple. But in general, you expect a centered Riemann sum
to do better, the trapezoidal rule to do better than that, and Simpson’s rule to do better still.
44
Kevin Zhou Physics Olympiad Handouts
If you’re mathematically inclined, you might be wondering if there’s a rigorous way to deter-
mine the error in this approximation. That’s given by the Euler–Maclaurin formula, which
states that the difference between the sum and integral is equal to a series involving derivatives
of the integrand at the endpoints. Using the trapezoidal rule automatically takes care of the
first term in that series, and Simpson’s rule takes care of the first two.
(b) Here we have to be careful, because while logx is slowly varying over most of the range, it
blows up as x → 0. We shouldn’t include this violent region in the integral, because it doesn’t
affect the sum at all. One reasonable option is to take the same prescription we used in part
(a), but drop the k = 1 term since log1 = 0, giving
n X
k=1
logk =
n X
k=2
logk ≈
Z n
1
logxdx = nlogn − n + 1.
Generically, we expect the fractional error of a Riemann sum to scale as 1/n. To show that
rigorously here, we can use the fact that this is a rightward Riemann sum of an increasing
function, so that our approximation is guaranteed to be an underestimate. The analogous
leftward Riemann sum, which is guaranteed to be an overestimate, gives
n X
k=1
logk ≈
Z n+1
1
logxdx = (n + 1)log(n + 1) − (n + 1) + 1.
The answer is between these two quantities, and the biggest part of the difference between
them scales as logn. That corresponds to a fractional error of order 1/n as expected.
We can summarize the content of the above two approximations as
n X
k=1
logk = nlogn − n + O(logn).
In fact, it can be proven that
n X
k=1
logk = nlogn − n +
1
2
logn + log(
√
2π) + O(1/n).
This result is called Stirling’s approximation, and we’ll put it to use in P2 and T2.
It turns out we can get the order logn term right by either using a centered Riemann sum
(i.e. taking n + 1/2 for the upper range of integration), or by using the trapezoidal rule, as
described here. But there’s no way to get the order-one term right using any variation of
these methods, because the bins themselves have a width of 1. The integral is smooth, while
the sum itself is inherently chunky. So deriving Stirling’s approximation requires a different
method, which is described here. (That derivation is quite short in modern notation, but it’s
subtle. According to the book Concrete Mathematics, it took Stirling several years to get the
order-one piece right, back in the 1700s!)
45
Kevin Zhou Physics Olympiad Handouts
