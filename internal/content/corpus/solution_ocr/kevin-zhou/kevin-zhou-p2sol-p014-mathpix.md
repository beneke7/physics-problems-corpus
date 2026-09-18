---
id: solution-ocr-kevin-zhou-p2sol-p014
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p014]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 14. (1) As a speed test, solve $F = m a 2018$ problems A12, A25, B19, and B25, and $F = m a 2019$ problems A16, B18, and B25. Don't bother writing solutions.
[2] Problem 15. Suppose the goal of an experiment is to measure the ratio $T _ { 1 } / T _ { 2 }$ of the durations of two processes, where $T _ { 1 }$ is about 15 seconds, and $T _ { 2 }$ is about 3 seconds. Also suppose your stopwatch is only accurate to the nearest second. You have two minutes to perform measurements. Assume each measurement is independent.
    (a) Do you think it's better to spend more total time measuring $T _ { 1 }$, more total time measuring $T _ { 2 }$, or an equal amount of time on both?
    (b) To confirm this, find the fraction of time $x$ spent measuring $T _ { 1 }$ which minimizes the final uncertainty.

Calculations of this sort are common when doing Olympiad experimental physics. We will discuss these issues in more detail in the handout on experimental physics.

Solution. (a) Since $T _ { 2 }$ is smaller, it takes less time to measure, and a single measurement of $T _ { 2 }$ has a much higher relative uncertainty. So we definitely want more distinct measurements of $T _ { 2 }$ than of $T _ { 1 }$.
As for the total measurement time, note that if we split it equally, the uncertainty due to $T _ { 2 }$ will still dominate, because $1 / ( 3 \sqrt { 5 } ) > 1 / 15$. So we should spend more time measuring $T _ { 2 }$.


(On the other hand, we shouldn't take a ratio as extreme as 5 to 1, because the benefit of additional measurements hits diminishing returns.)
(b) Explicitly, if $\Delta T$ is the absolute uncertainty on each measurement, then
$$
\Delta \left( T _ { 1 } / T _ { 2 } \right) = \frac { T _ { 1 } } { T _ { 2 } } \sqrt { \left( \frac { \Delta T } { T _ { 1 } \sqrt { N _ { 1 } } } \right) ^ { 2 } + \left( \frac { \Delta T } { T _ { 2 } \sqrt { N _ { 2 } } } \right) ^ { 2 } }
$$
The total time $T _ { t }$ is constant, $N _ { 1 } T _ { 1 } + N _ { 2 } T _ { 2 } = T _ { t }$ where $N _ { 1 } T _ { 1 } / T _ { t } = x$. We want to minimize
$$
f ( x ) = \frac { 1 } { T _ { 1 } x } + \frac { 1 } { ( 1 - x ) T _ { 2 } } .
$$
The derivative is
$$
f ^ { \prime } ( x ) = - \frac { 1 } { T _ { 1 } x ^ { 2 } } + \frac { 1 } { T _ { 2 } ( 1 - x ) ^ { 2 } }
$$
and setting this to zero gives
$$
x ^ { 2 } \left( 1 - T _ { 1 } / T _ { 2 } \right) - 2 x + 1 = 0 .
$$
The smaller root is the desired one since $x < 1$, giving
$$
x = \frac { 1 - \sqrt { T _ { 1 } / T _ { 2 } } } { 1 - T _ { 1 } / T _ { 2 } } = \frac { 1 } { 1 + \sqrt { T _ { 1 } / T _ { 2 } } } \approx 0.3 .
$$
As expected from the arguments in part (a), this is more than 1/6 but less than 1/2.
[3] Problem 16. You can estimate $g$ by finding the time needed for an object to roll down a ramp, with everything again made of household materials.
    (a) Before starting, think about what the dominant sources of uncertainty will be, and how you can design the experiment to minimize them. In particular, do you think the result will be more or less precise than your pendulum experiment?
    (b) Perform the experiment, taking at least ten independent measurements, and report the data and results with uncertainty.

Solution. Our formula for $g$ is

$$
g = \frac { 2 \ell ( 1 + \beta ) } { t ^ { 2 } \sin ( \theta ) }
$$

where $\beta = I / M R ^ { 2 }$ of the rolling object, and $\ell , t$ are the distance and time for the path. Let's assume you found a nice object, like a hollow can or a fully filled one, so that $\beta$ is known relatively precisely. Then the uncertainty is

$$
\Delta g = g \sqrt { \left( \frac { 2 \Delta t } { t } \right) ^ { 2 } + \left( \frac { \Delta \ell } { \ell } \right) ^ { 2 } + \left( \frac { \cos ( \theta ) \Delta \theta } { \sin ( \theta ) } \right) ^ { 2 } } .
$$

Given the above, you definitely want a ramp as long as possible, and there's a tradeoff with the angle: if the angle is very large, $t$ will be small so that the relative error on $t$ will be large, while if the angle is very small, the relative error on $\theta$ will be large. So in practice you want to choose a moderately small, but not too small value of $\theta$.


Some reasonable ballpark numbers are $\theta = ( 10 \pm 1 ) ^ { \circ }$, and $t = ( 3 \pm 0.3 ) \mathrm { s }$, so you probably can't easily get an uncertainty smaller than a few percent. The overall result will be less precise than the pendulum experiment, because for the pendulum there is no $\Delta \theta$ term, and you can measure $N \gg 1$ periods in a single trial so that the relative error on $t$ falls as $1 / N$. With the ramp, you can partially compensate by doing $N$ separate trials, so that the relative error at best falls as $1 / \sqrt { N }$, which isn't as good. It might not even be as good as $1 / \sqrt { N }$, because your uncertainties may not be independent: you might systematically overestimate or underestimate the time or angle.
