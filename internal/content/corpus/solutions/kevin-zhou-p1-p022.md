---
id: kevin-zhou-p1-p022
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p022
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[2] Problem 22. [A] Newton’s method is a more sophisticated method for solving equations, which
converges substantially faster than binary search. Suppose we want to solve the equation f(x) = 0.
Starting with a nearby guess x0, we evaluate f(x0) and f′(x0), then find our next guess by applying
the tangent line approximation at this point,
x1 = x0 −
f(x0)
f′(x0)
.
The process repeats until we get a suitably accurate answer.
(a) Use Newton’s method to solve x = cosx.
(b) Newton’s method converges quadratically, in the sense that for typical functions, if your
current guess is ϵ away from the answer, the next guess will be O(ϵ2) away. (This implies that
the number of correct digits in the answer roughly doubles with each iteration!) Explain why,
and then find an example where Newton’s method doesn’t converge this fast.
Newton’s method is very important in general, but it’s not that useful on Olympiads. It takes a
while to set up, especially if the derivative f′ is complicated, and you usually don’t need that many
significant figures in your answer anyway. (There are alternatives to Newton’s method, such as
Halley’s method, that converge even faster, but the tradeoff is the same: each iteration takes more
effort to calculate, as higher derivatives of f must be computed.)
Solution. (a) We want to solve f(x) = cosx − x = 0, which means we iterate
x +
cosx − x
sinx + 1
.
Starting from a reasonable guess x0 = 0.5, we find
x1 = 0.755222, x2 = 0.739142, x3 = 0.739085.
The next iteration gives the same thing for the first six decimal places, so after just three
iterations, we already have six significant digits in the answer.
(b) If the tangent line approximation was exact, then Newton’s method would converge to the
answer in one iteration, f(x1) = 0. So if you’re already close to the answer, the leading
source of inaccuracy is the second-order term in the Taylor expansion of f, giving f(x1) ≈
ϵ2f′′(x0)/2. Applying the tangent line approximation again, this implies we are roughly a
distance ϵ2f′′(x0)/2f′(x1) ∝ ϵ2 from the answer.
Convergence will be slower if f′(x1) happens to be small. For example, for finding roots of
polynomials, this will occur for double roots, as the first derivative vanishes at the root itself.
In this case f′(x1) ∝ ϵ, so the error after an iteration is still order ϵ, not ϵ2.
The simplest example where this happens is f(x) = x2, where
x1 = x0 −
x2
0
2x0
=
x0
2
.
This is no longer quadratically convergent; instead the error goes down by the same factor in
each iteration, so the number of significant figures correct goes up linearly.
27
Kevin Zhou Physics Olympiad Handouts
It’s interesting to compare this to iteration. When the method of iteration works, we typically
have exponential convergence, which means the number of significant figures goes up linearly.
However, in cases like f(x) = x2 where f′(x) vanishes at the solution, the error is squared in
each iteration, so the method of iteration instead converges quadratically! In other words, for
these exceptional cases, the convergence rates of iteration and Newton’s method swap.
Remark
You’ve seen several numeric methods above, and going forward, you should feel free to use
whichever looks best in each situation. However, if you’re solving problems using the same
calculator you use for schoolwork, you should make sure to not rely on its more advanced
features. In Olympiads, you’re generally only allowed to use an extremely basic scientific
calculator, with a tiny display and no memory except for the “Ans” key.
