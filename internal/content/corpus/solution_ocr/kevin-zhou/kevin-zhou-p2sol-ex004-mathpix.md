---
id: solution-ocr-kevin-zhou-p2sol-ex004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-ex004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 4
A fair coin is tossed 1000 times, and the number of heads is counted. If this process is repeated many times, what is the standard deviation of the number of heads?

Solution
Consider one trial of 1000 tosses. The number of heads is $X = X _ { 1 } + X _ { 2 } + \ldots + X _ { 1000 }$, where

$$
X _ { i } = \begin{cases} 1 & \text { heads on toss } i , \\ 0 & \text { tails on toss } i . \end{cases}
$$

Of course, the mean of each of these variables is $\left\langle X _ { i } \right\rangle = 0.5$, so that the mean of $X$ is 500. In addition, the $X _ { i }$ are independent of each other, so the variances add. The variance of each one of them is

$$
\operatorname { var } X _ { i } = \left\langle X _ { i } ^ { 2 } \right\rangle - \left\langle X _ { i } \right\rangle ^ { 2 } = \frac { 1 } { 2 } - \frac { 1 } { 4 } = \frac { 1 } { 4 } .
$$

Thus, the standard deviation of the number of heads is

$$
\sqrt { \operatorname { var } X } = \sqrt { 1000 / 4 } \approx 16 .
$$

So getting 520 heads would not be surprising, but if you got 550, you might be justified in suspecting the coin isn't fair. (Also, the number of heads is very close to normally distributed, by the central limit theorem mentioned above.) To check whether you understand this, you can redo it with a general probability $p$ of getting heads, where you should get $\sqrt { 1000 p ( 1 - p ) }$.

[3] Problem 18. At any moment, a Geiger counter can click, indicating that it has detected a particle of radiation. Suppose that there is an independent probability $\alpha d t$ of clicking at each infinitesimal time interval $d t$. Let the number of clicks observed in a total time $T$ be $X$.
    (a) Find the expected value and standard deviation of $X$, and thereby compute its relative uncertainty. (Hint: split the total time into many tiny time intervals, and let $X _ { i }$ be the number of clicks in interval $i$, so $X = \sum _ { i } X _ { i }$.)
    (b) Using a Geiger counter on a sample, you hear 197 clicks in 5 minutes of operation. Estimate the activity $\alpha$ of the sample (i.e. the expected clicks per second), with uncertainty. If you measure for longer, how does the uncertainty reduce over time?
    (c) Now suppose that for a different sample, $N = 0$ after 5 minutes. Estimate the activity $\alpha$ of the sample (i.e. the expected clicks per second), with a reasonable uncertainty. If you measure for longer, and continue to hear no clicks, how does the uncertainty reduce over time?

Solution. (a) There are $N = T / d t$ time intervals. Using the hint and applying linearity of expectation,

$$
\langle X \rangle = \sum _ { i } \left\langle X _ { i } \right\rangle = N ( \alpha d t ) = \alpha T
$$

Since the $X _ { i }$ are independent, their variances add. The variance of $X _ { i }$ is

$$
\left\langle X _ { i } ^ { 2 } \right\rangle - \left\langle X _ { i } \right\rangle ^ { 2 } = \alpha d t - ( \alpha d t ) ^ { 2 } \simeq \alpha d t .
$$


Thus, by adding the variances, we have
$$
\operatorname { var } X = \alpha T
$$
so the standard deviation is $\Delta X = \sqrt { \alpha T }$. The relative uncertainty is $\Delta X / \langle X \rangle = 1 / \sqrt { \alpha T }$.
(b) Applying the formulas above, we estimate
$$
\alpha = \frac { 197 } { T } = 0.66 \mathrm {~s} ^ { - 1 }
$$
with an uncertainty of
$$
\Delta \alpha = \frac { \alpha } { \sqrt { \alpha T } } = \sqrt { \frac { \alpha } { T } } = 0.05 \mathrm {~s} ^ { - 1 } .
$$
The uncertainty falls as $1 / \sqrt { T }$. Note that this is very similar to previous results we've found, where the uncertainty falls as $1 / \sqrt { n }$ where $n$ is the number of trials. In some sense, each instant of time we wait is another trial here.
(c) Of course, we estimate $\alpha = 0$, but then the formulas above imply $\Delta \alpha = 0$ and hence that we are absolutely certain $\alpha = 0$, which is absurd. (If you don't think that's absurd, note that the same result would have occurred if we had heard zero clicks in an arbitrarily short time interval, such as a nanosecond.)
This is a case where the basic rules of uncertainty propagation break down, and we need to think. The point of giving an uncertainty is to indicate the range of parameter values compatible with the data we observed. Now, the probability of having no clicks in time $T$ is $e ^ { - \alpha T }$. If $\alpha T \gg 1$, then it would be very unlikely to have no clicks, so we can rule out $\alpha \gg 1 / T$. But if $\alpha T \lesssim 1$, this isn't unlikely at all. Thus, your uncertainty window should be $\alpha \in [ 0 , c / T ]$ where $c$ is an order-one number, whose value depends on the specific statistical procedure you use. (Note that the upper bound falls as $1 / T$, not $1 / \sqrt { T }$.)
