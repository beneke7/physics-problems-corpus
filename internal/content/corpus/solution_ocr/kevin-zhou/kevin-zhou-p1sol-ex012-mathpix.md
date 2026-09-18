---
id: solution-ocr-kevin-zhou-p1sol-ex012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 12

In units where $c = 1$, the Lorentz factor is defined as

$$
\gamma = \frac { 1 } { \sqrt { 1 - v ^ { 2 } } } .
$$

Suppose that a particle traveling very close to the speed of light has $\gamma = 10 ^ { 10 }$. Numerically find the fractional difference $\Delta v$ between its speed and the speed of light.

## Solution

This problem looks easy; by some trivial algebra we find

$$
\Delta v = 1 - \sqrt { 1 - 1 / \gamma ^ { 2 } } .
$$

But when you plug this into a calculator, or even Python, you get zero. The problem is that we are trying to find a small quantity $\Delta v$ by subtracting two nearby, much larger quantities. But machines have limited precision, and they end up rounding $1 - 1 / \gamma ^ { 2 } = 1 - 10 ^ { - 20 }$ up to 1 , giving a completely wrong answer!

Instead, we can apply the binomial theorem to find

$$
\Delta v = \frac { 1 } { 2 \gamma ^ { 2 } } + \mathcal { O } \left( 1 / \gamma ^ { 4 } \right) \approx 0.5 \times 10 ^ { - 20 } .
$$

This is no longer the exact answer, but it's a great approximation, because the error term is around $1 / \gamma ^ { 2 } \sim 10 ^ { - 20 }$ times as small as the answer, and it's easy for a calculator to evaluate. The lesson, which we'll see over and over again in later handouts, is that an exact theoretical expression can often be less intuitive, less useful, and less accurate than a well-chosen approximate one. The art of physics is knowing how to make such approximations.


Solution. Applying the quadratic formula, the solutions are

$$
x = \frac { 10 ^ { 20 } \pm \sqrt { 10 ^ { 40 } - 4 } } { 2 } .
$$

Of course you can't just plug this into a calculator and expect a reasonable result. Instead, we need to approximate. For the larger root, an excellent approximation is

$$
x \approx \frac { 10 ^ { 20 } + \sqrt { 10 ^ { 40 } } } { 2 } = 10 ^ { 20 } .
$$

Then by Vieta's formula, an excellent approximation for the other root is $10 ^ { - 20 }$.
[4] Problem 24. [A] Consider the equation $\epsilon x ^ { 3 } - x ^ { 2 } + 1 = 0$, where $\epsilon$ is small. Find approximate expressions for all three roots of this equation, up to and including terms of order $\epsilon$.

Solution. If we set $\epsilon = 0$, then the roots of the resulting quadratic equation are ±1. Thus, two of the roots should be near ±1. To calculate the $\mathcal { O } ( \epsilon )$ correction, let $x = 1 + A \epsilon + \mathcal { O } \left( \epsilon ^ { 2 } \right)$. Then plugging this into the equation gives

$$
\epsilon ( 1 + A \epsilon ) ^ { 3 } - ( 1 + A \epsilon ) ^ { 2 } + 1 = \epsilon - 2 A \epsilon + \mathcal { O } \left( \epsilon ^ { 2 } \right) = 0 .
$$

Thus, we find $A = 1 / 2$. A similar calculation can be done for the root near $x = - 1$, giving roots

$$
x = 1 + \frac { \epsilon } { 2 } + \mathcal { O } \left( \epsilon ^ { 2 } \right) , \quad x = - 1 + \frac { \epsilon } { 2 } + \mathcal { O } \left( \epsilon ^ { 2 } \right) .
$$

However, the third root is nowhere to be found in this analysis, because the quadratic only has two roots. Upon graphing the function, you can see that the third root is at very large $x$, once the cubic term catches up in size to the quadratic term. This happens when $x \approx 1 / \epsilon$. This appearance of an inverse power of $\epsilon$ makes this a "singular perturbation series".

Here's a general way to conceptualize what's going on here. The equation in this problem has three terms, and it's easy to find a root if any one of the terms is negligible compared to the others. For example, for the first two roots, we assumed the $\epsilon x ^ { 3 }$ term was negligible, and then found $x = \pm 1$. Then, adding on the $\epsilon x ^ { 3 }$ term produces $\mathcal { O } ( \epsilon )$ and higher corrections to the left-hand side, which can be used to compute $\mathcal { O } ( \epsilon )$ and higher corrections to the root itself. Now, this third root we've just found occurs when the 1 term is negligible. In this case, both of the first two terms are of order $1 / \epsilon ^ { 2 }$, and the 1 creates small corrections to the root (relative to its huge size).

Since 1 is two orders in $\epsilon$ smaller than $1 / \epsilon ^ { 2 }$, we expect these terms only appear two orders down in the root. That is, we expect the root has the form

$$
x = \frac { 1 } { \epsilon } \left( 1 + A \epsilon ^ { 2 } + \mathcal { O } \left( \epsilon ^ { 3 } \right) \right)
$$

with no $\mathcal { O } ( \epsilon )$ term in parentheses. (If you don't believe this, check this term vanishes for yourself!) Plugging this into the equation gives

$$
\frac { 1 } { \epsilon ^ { 2 } } \left( 1 + A \epsilon ^ { 2 } + \mathcal { O } \left( \epsilon ^ { 3 } \right) \right) ^ { 3 } - \frac { 1 } { \epsilon ^ { 2 } } \left( 1 + A \epsilon ^ { 2 } + \mathcal { O } \left( \epsilon ^ { 3 } \right) \right) ^ { 2 } + 1 = 0
$$

which is equivalent to

$$
3 A - 2 A + 1 + \mathcal { O } ( \epsilon ) = 0
$$


from which we conclude $A = - 1$, and hence the third root is

$$
x = \frac { 1 } { \epsilon } - \epsilon + \mathcal { O } \left( \epsilon ^ { 2 } \right) .
$$

Finally, you might be wondering what happens if the $x ^ { 2 }$ term is the negligible one. However, this never happens. If we assume it's negligible, then we need $x \approx - \epsilon ^ { - 1 / 3 }$, so that both the other terms are about 1. But then the $x ^ { 2 }$ term is $1 / \epsilon ^ { 2 / 3 } \gg 1$. So we can't assume the $x ^ { 2 }$ term is negligible self-consistently, so it doesn't give any new roots. The idea used above, of supposing two of the terms are large, using that to solve a simpler equation, and then checking for consistency, is known as the method of dominant balance.

## 4 Limiting Cases

Idea 7
Limiting cases can be used to infer how the answer to a physical problem depends on its parameters. It is primarily useful for remembering the forms of formulas, but can also be powerful enough to solve multiple choice questions by itself.

Example 13
What is the horizontal range of a rock thrown with speed $v$ at an angle $\theta$ to the horizontal?

Solution
This result is easy to derive, but dimensional analysis and extreme cases can be used to recover the answer too. It can only depend on $v , g$, and $\theta$, so by dimensional analysis it is proportional to $v ^ { 2 } / g$. This is sensible, since the range increases with $v$ and decreases with $g$. Now, the range is zero in the extreme cases $\theta = 0$ and $\theta = \pi / 2$, but not anywhere in between, so if we remember the range contains a simple trigonometric function, it must be $\sin ( 2 \theta )$, so

$$
R \propto \frac { v ^ { 2 } } { g } \sin ( 2 \theta ) .
$$

We can also get the prefactor by a simple limiting case, the case $\theta \ll 1$. In this case, by the small angle approximation,

$$
v _ { x } \approx v , \quad v _ { y } \approx v \theta .
$$

The time taken is $t = 2 v _ { y } / g$, so the range is

$$
R \approx v _ { x } t = \frac { 2 v ^ { 2 } } { g } \theta .
$$

Thus there is no proportionality constant; the answer is

$$
R = \frac { v ^ { 2 } } { g } \sin ( 2 \theta ) .
$$

In reality, it's probably faster to go through the full derivation than all of this reasoning, but if you're just not sure about whether it's a sine or a cosine, or what the prefactor is, then limiting cases can be quickly used to recover that piece. Also note that the approximations we used above are frequently useful for evaluating limiting cases.
