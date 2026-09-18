---
id: solution-ocr-kevin-zhou-p2sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 19. [A] This problem extends problem 18 to derive some canonical results.
    (a) Let $\lambda = \alpha T$. Find the probability $p ( X = k )$ of hearing exactly $k$ clicks in terms of $\lambda$ and $k$.
    (b) To check your result, show that the sum of the $p ( X = k )$ is equal to one.
    (c) ★ In the limit $\lambda \gg 1$, show that the probabilities $p ( X = k )$ approach that of a normal distribution with the mean and standard deviation calculated in problem 18, thereby providing an example of the central limit theorem at work. This is a rather involved calculation, which will use many of the techniques from P1. It will also require Stirling's approximation,
$$
n ! \approx \sqrt { 2 \pi n } \left( \frac { n } { e } \right) ^ { n }
$$
for $n \gg 1$, which we mentioned in P1. (Hint: because the relative uncertainty falls as $\lambda$ increases, start by writing $k = \lambda ( 1 + \delta )$ for $| \delta | \ll 1$, and expand in powers of $\delta$. Be careful not to drop too many terms, as $\delta$ is small, but $\lambda \delta$ isn't.)

Solution. (a) Following the notation of problem 18, we have $X = \sum _ { i } X _ { i }$, and we get $k$ clicks if precisely $k$ of the $X _ { i }$ are equal to 1 . Thus,

$$
p ( X = k ) = \binom { N } { k } ( \alpha d t ) ^ { k } ( 1 - \alpha d t ) ^ { N - k } \approx \frac { N ^ { k } } { k ! } ( \alpha d t ) ^ { k } ( 1 - \alpha d t ) ^ { N } = \frac { \lambda ^ { k } } { k ! } e ^ { - \lambda } .
$$

This is known as the Poisson distribution.


(b) This follows from the Taylor series of the exponential,
$$
\sum _ { k = 0 } ^ { \infty } p ( X = k ) = e ^ { - \lambda } \sum _ { k = 0 } ^ { \infty } \frac { \lambda ^ { k } } { k ! } = 1 .
$$
(c) Using Stirling's approximation, we have
$$
\begin{aligned}
p ( X = k ) & = \frac { 1 } { \sqrt { 2 \pi k } } \left( \frac { \lambda e } { k } \right) ^ { k } e ^ { - \lambda } \\
& = \frac { 1 } { \sqrt { 2 \pi \lambda ( 1 + \delta ) } } \left( \frac { e } { 1 + \delta } \right) ^ { \lambda ( 1 + \delta ) } e ^ { - \lambda } \\
& \approx \frac { 1 } { \sqrt { 2 \pi \lambda } } e ^ { \delta \lambda } ( 1 + \delta ) ^ { - \lambda ( 1 + \delta ) }
\end{aligned}
$$
where we used the fact that $\delta \ll 1$.
Now we need to use a technique from P1. Letting the final term be equal to $1 / y$, we have
$$
\log y = \lambda ( 1 + \delta ) \log ( 1 + \delta ) = \lambda ( 1 + \delta ) \left( \delta - \frac { \delta ^ { 2 } } { 2 } + \mathcal { O } \left( \delta ^ { 3 } \right) \right) = \delta \lambda + \frac { \delta ^ { 2 } \lambda } { 2 } + \mathcal { O } \left( \delta ^ { 3 } \lambda \right) .
$$
In P1, we only expanded up to the first term, but here we need to keep the order $\delta ^ { 2 }$ term. The reason is we want an approximation that works for the whole peak of the probability distribution, and we know it has relative uncertainty $1 / \sqrt { \lambda }$, which means we need to take $\delta \sim 1 / \sqrt { \lambda }$. That implies that $\delta ^ { 2 } \lambda$ is of order one and cannot be dropped, but $\delta ^ { 3 } \lambda$ is small and can be dropped. Anyway, plugging this in, we find
$$
p ( X = k ) \approx \frac { 1 } { \sqrt { 2 \pi \lambda } } e ^ { - \delta ^ { 2 } \lambda / 2 } = \frac { 1 } { \sqrt { 2 \pi \lambda } } e ^ { - ( k - \lambda ) ^ { 2 } / 2 \lambda }
$$
which is precisely a normal distribution with the appropriate mean and standard deviation.
[3] Problem 20. IPhO 2023, problem 1, parts A, B, and D.3. A short derivation of the key features of Brownian motion. It requires only the ideas of this problem set, and some basic mechanics.

## 4 Data Analysis

Idea 5
All data analysis for the USAPhO and IPhO can be done using extremely basic methods. Sometimes, it suffices to just calculate a value based on a single data point, or by cleverly using a pair of data points. When this isn't enough, you'll have to do graphical data analysis, which will usually correspond to drawing a line and measuring its slope and intercept. This is quite limited compared to modern statistical tools, but also can be surprisingly powerful.
