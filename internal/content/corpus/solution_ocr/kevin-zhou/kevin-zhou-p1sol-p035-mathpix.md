---
id: solution-ocr-kevin-zhou-p1sol-p035
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p035]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 35. As you learned in calculus class, we may approximate the area under a function using a lot of rectangles, and in the limit where the rectangles become very thin, we recover the true area. This is how integration is defined. However, you can also use the reasoning in reverse: a sum over many elements of a slowly varying function can be approximated with an integral.
    (a) For $n \gg 1$, find both an underestimate and an overestimate for $\sum _ { k = 1 } ^ { n } k$ by replacing it with appropriate integrals. How does the fractional error of your approximations scale with $n$ ?
    (b) For $n \gg 1$, find a reasonable way to approximately evaluate $\sum _ { k = 1 } ^ { n } \log k$. How does the fractional error of your approximation scale with $n$ ? How good of a result can you get?

We'll use these kinds of approximations in several later problem sets.
Solution. (a) We can think of this sum as a discrete Riemann sum approximating the area under the function $f ( x ) = x$, where each rectangle has width $\Delta k = 1$. If we take the rectangle heights to be set by the value of the function at their right edges, we get

$$
\sum _ { k = 1 } ^ { n } k = \sum _ { k = 1 } ^ { n } k \Delta k \approx \int _ { 0 } ^ { n } x d x = \frac { n ^ { 2 } } { 2 }
$$

Since the function is monotonically increasing, this guarantees that our approximation is an underestimate.

To get an overestimate, we could have instead used a leftward Riemann sum, giving

$$
\sum _ { k = 1 } ^ { n } k \approx \int _ { 1 } ^ { n + 1 } x d x = \frac { n ^ { 2 } + 2 n } { 2 }
$$

The exact answer is $n ( n + 1 ) / 2$, so the fractional error of these approximations scales as $1 / n$. Incidentally, if we had taken a centered Riemann sum, integrating from $1 / 2$ to $n + 1 / 2$, we would have gotten the exact correct answer. That's just because the linear function we're considering here is particularly simple. But in general, you expect a centered Riemann sum to do better, the trapezoidal rule to do better than that, and Simpson's rule to do better still.


If you're mathematically inclined, you might be wondering if there's a rigorous way to determine the error in this approximation. That's given by the Euler-Maclaurin formula, which states that the difference between the sum and integral is equal to a series involving derivatives of the integrand at the endpoints. Using the trapezoidal rule automatically takes care of the first term in that series, and Simpson's rule takes care of the first two.
(b) Here we have to be careful, because while $\log x$ is slowly varying over most of the range, it blows up as $x \rightarrow 0$. We shouldn't include this violent region in the integral, because it doesn't affect the sum at all. One reasonable option is to take the same prescription we used in part (a), but drop the $k = 1$ term since $\log 1 = 0$, giving
$$
\sum _ { k = 1 } ^ { n } \log k = \sum _ { k = 2 } ^ { n } \log k \approx \int _ { 1 } ^ { n } \log x d x = n \log n - n + 1
$$
Generically, we expect the fractional error of a Riemann sum to scale as $1 / n$. To show that rigorously here, we can use the fact that this is a rightward Riemann sum of an increasing function, so that our approximation is guaranteed to be an underestimate. The analogous leftward Riemann sum, which is guaranteed to be an overestimate, gives
$$
\sum _ { k = 1 } ^ { n } \log k \approx \int _ { 1 } ^ { n + 1 } \log x d x = ( n + 1 ) \log ( n + 1 ) - ( n + 1 ) + 1
$$
The answer is between these two quantities, and the biggest part of the difference between them scales as $\log n$. That corresponds to a fractional error of order $1 / n$ as expected.
We can summarize the content of the above two approximations as
$$
\sum _ { k = 1 } ^ { n } \log k = n \log n - n + \mathcal { O } ( \log n ) .
$$
In fact, it can be proven that
$$
\sum _ { k = 1 } ^ { n } \log k = n \log n - n + \frac { 1 } { 2 } \log n + \log ( \sqrt { 2 \pi } ) + \mathcal { O } ( 1 / n ) .
$$
This result is called Stirling's approximation, and we'll put it to use in P2 and T2.
It turns out we can get the order $\log n$ term right by either using a centered Riemann sum (i.e. taking $n + 1 / 2$ for the upper range of integration), or by using the trapezoidal rule, as described here. But there's no way to get the order-one term right using any variation of these methods, because the bins themselves have a width of 1 . The integral is smooth, while the sum itself is inherently chunky. So deriving Stirling's approximation requires a different method, which is described here. (That derivation is quite short in modern notation, but it's subtle. According to the book Concrete Mathematics, it took Stirling several years to get the order-one piece right, back in the 1700s!)
