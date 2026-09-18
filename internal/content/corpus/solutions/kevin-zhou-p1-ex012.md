---
id: kevin-zhou-p1-ex012
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex012
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 12
In units where c = 1, the Lorentz factor is defined as
γ =
1
√
1 − v2
.
Suppose that a particle traveling very close to the speed of light has γ = 1010. Numerically
find the fractional difference ∆v between its speed and the speed of light.
Solution
This problem looks easy; by some trivial algebra we find
∆v = 1 −
p
1 − 1/γ2.
But when you plug this into a calculator, or even Python, you get zero. The problem is that
we are trying to find a small quantity ∆v by subtracting two nearby, much larger quantities.
But machines have limited precision, and they end up rounding 1 − 1/γ2 = 1 − 10−20 up to
1, giving a completely wrong answer!
Instead, we can apply the binomial theorem to find
∆v =
1
2γ2
+ O(1/γ4
) ≈ 0.5 × 10−20
.
This is no longer the exact answer, but it’s a great approximation, because the error term is
around 1/γ2 ∼ 10−20 times as small as the answer, and it’s easy for a calculator to evaluate.
The lesson, which we’ll see over and over again in later handouts, is that an exact theoretical
expression can often be less intuitive, less useful, and less accurate than a well-chosen
approximate one. The art of physics is knowing how to make such approximations.
[1] Problem 23. Find the solutions of the equation x2 − 1020x + 1 = 0 to reasonable accuracy.
28
Kevin Zhou Physics Olympiad Handouts
Solution. Applying the quadratic formula, the solutions are
x =
1020 ±
√
1040 − 4
2
.
Of course you can’t just plug this into a calculator and expect a reasonable result. Instead, we need
to approximate. For the larger root, an excellent approximation is
x ≈
1020 +
√
1040
2
= 1020
.
Then by Vieta’s formula, an excellent approximation for the other root is 10−20.
[4] Problem 24. [A] Consider the equation ϵx3 − x2 + 1 = 0, where ϵ is small. Find approximate
expressions for all three roots of this equation, up to and including terms of order ϵ.
Solution. If we set ϵ = 0, then the roots of the resulting quadratic equation are ±1. Thus, two
of the roots should be near ±1. To calculate the O(ϵ) correction, let x = 1 + Aϵ + O(ϵ2). Then
plugging this into the equation gives
ϵ(1 + Aϵ)3
− (1 + Aϵ)2
+ 1 = ϵ − 2Aϵ + O(ϵ2
) = 0.
Thus, we find A = 1/2. A similar calculation can be done for the root near x = −1, giving roots
x = 1 +
ϵ
2
+ O(ϵ2
), x = −1 +
ϵ
2
+ O(ϵ2
).
However, the third root is nowhere to be found in this analysis, because the quadratic only has two
roots. Upon graphing the function, you can see that the third root is at very large x, once the cubic
term catches up in size to the quadratic term. This happens when x ≈ 1/ϵ. This appearance of an
inverse power of ϵ makes this a “singular perturbation series”.
Here’s a general way to conceptualize what’s going on here. The equation in this problem has
three terms, and it’s easy to find a root if any one of the terms is negligible compared to the others.
For example, for the first two roots, we assumed the ϵx3 term was negligible, and then found x = ±1.
Then, adding on the ϵx3 term produces O(ϵ) and higher corrections to the left-hand side, which
can be used to compute O(ϵ) and higher corrections to the root itself. Now, this third root we’ve
just found occurs when the 1 term is negligible. In this case, both of the first two terms are of order
1/ϵ2, and the 1 creates small corrections to the root (relative to its huge size).
Since 1 is two orders in ϵ smaller than 1/ϵ2, we expect these terms only appear two orders down
in the root. That is, we expect the root has the form
x =
1
ϵ
1 + Aϵ2
+ O(ϵ3
)

with no O(ϵ) term in parentheses. (If you don’t believe this, check this term vanishes for yourself!)
Plugging this into the equation gives
1
ϵ2
(1 + Aϵ2
+ O(ϵ3
))3
−
1
ϵ2
(1 + Aϵ2
+ O(ϵ3
))2
+ 1 = 0
which is equivalent to
3A − 2A + 1 + O(ϵ) = 0
29
Kevin Zhou Physics Olympiad Handouts
from which we conclude A = −1, and hence the third root is
x =
1
ϵ
− ϵ + O(ϵ2
).
Finally, you might be wondering what happens if the x2 term is the negligible one. However, this
never happens. If we assume it’s negligible, then we need x ≈ −ϵ−1/3, so that both the other terms
are about 1. But then the x2 term is 1/ϵ2/3 ≫ 1. So we can’t assume the x2 term is negligible
self-consistently, so it doesn’t give any new roots. The idea used above, of supposing two of the
terms are large, using that to solve a simpler equation, and then checking for consistency, is known
as the method of dominant balance.
4 Limiting Cases
Idea 7
Limiting cases can be used to infer how the answer to a physical problem depends on its
parameters. It is primarily useful for remembering the forms of formulas, but can also be
powerful enough to solve multiple choice questions by itself.
Example 13
What is the horizontal range of a rock thrown with speed v at an angle θ to the horizontal?
Solution
This result is easy to derive, but dimensional analysis and extreme cases can be used to
recover the answer too. It can only depend on v, g, and θ, so by dimensional analysis it is
proportional to v2/g. This is sensible, since the range increases with v and decreases with g.
Now, the range is zero in the extreme cases θ = 0 and θ = π/2, but not anywhere in between,
so if we remember the range contains a simple trigonometric function, it must be sin(2θ), so
R ∝
v2
g
sin(2θ).
We can also get the prefactor by a simple limiting case, the case θ ≪ 1. In this case, by the
small angle approximation,
vx ≈ v, vy ≈ vθ.
The time taken is t = 2vy/g, so the range is
R ≈ vxt =
2v2
g
θ.
Thus there is no proportionality constant; the answer is
R =
v2
g
sin(2θ).
In reality, it’s probably faster to go through the full derivation than all of this reasoning, but
if you’re just not sure about whether it’s a sine or a cosine, or what the prefactor is, then
limiting cases can be quickly used to recover that piece. Also note that the approximations
we used above are frequently useful for evaluating limiting cases.
30
Kevin Zhou Physics Olympiad Handouts
