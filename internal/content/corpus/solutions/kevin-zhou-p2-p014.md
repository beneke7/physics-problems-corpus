---
id: kevin-zhou-p2-p014
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p014
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[3] Problem 14.   ^ 1 0As a speed test, solve F = ma 2018 problems A12, A25, B19, and B25, and
F = ma 2019 problems A16, B18, and B25. Don’t bother writing solutions.
[2] Problem 15. Suppose the goal of an experiment is to measure the ratio T1/T2 of the durations
of two processes, where T1 is about 15 seconds, and T2 is about 3 seconds. Also suppose your
stopwatch is only accurate to the nearest second. You have two minutes to perform measurements.
Assume each measurement is independent.
(a) Do you think it’s better to spend more total time measuring T1, more total time measuring
T2, or an equal amount of time on both?
(b) To confirm this, find the fraction of time x spent measuring T1 which minimizes the final
uncertainty.
Calculations of this sort are common when doing Olympiad experimental physics. We will discuss
these issues in more detail in the handout on experimental physics.
Solution. (a) Since T2 is smaller, it takes less time to measure, and a single measurement of T2
has a much higher relative uncertainty. So we definitely want more distinct measurements of
T2 than of T1.
As for the total measurement time, note that if we split it equally, the uncertainty due to T2
will still dominate, because 1/(3
√
5) > 1/15. So we should spend more time measuring T2.
10
Kevin Zhou Physics Olympiad Handouts
(On the other hand, we shouldn’t take a ratio as extreme as 5 to 1, because the benefit of
additional measurements hits diminishing returns.)
(b) Explicitly, if ∆T is the absolute uncertainty on each measurement, then
∆(T1/T2) =
T1
T2
s
∆T
T1
√
N1
 2
+

∆T
T2
√
N2
 2
The total time Tt is constant, N1T1 + N2T2 = Tt where N1T1/Tt = x. We want to minimize
f(x) =
1
T1x
+
1
(1 − x)T2
.
The derivative is
f′
(x) = −
1
T1x2
+
1
T2(1 − x)2
and setting this to zero gives
x2
(1 − T1/T2) − 2x + 1 = 0.
The smaller root is the desired one since x < 1, giving
x =
1 −
p
T1/T2
1 − T1/T2
=
1
1 +
p
T1/T2
≈ 0.3.
As expected from the arguments in part (a), this is more than 1/6 but less than 1/2.
[3] Problem 16. You can estimate g by finding the time needed for an object to roll down a ramp,
with everything again made of household materials.
(a) Before starting, think about what the dominant sources of uncertainty will be, and how you
can design the experiment to minimize them. In particular, do you think the result will be
more or less precise than your pendulum experiment?
(b) Perform the experiment, taking at least ten independent measurements, and report the data
and results with uncertainty.
Solution. Our formula for g is
g =
2ℓ(1 + β)
t2 sin(θ)
where β = I/MR2 of the rolling object, and ℓ, t are the distance and time for the path. Let’s
assume you found a nice object, like a hollow can or a fully filled one, so that β is known relatively
precisely. Then the uncertainty is
∆g = g
s
2∆t
t
 2
+

∆ℓ
ℓ
 2
+

cos(θ)∆θ
sin(θ)
 2
.
Given the above, you definitely want a ramp as long as possible, and there’s a tradeoff with the
angle: if the angle is very large, t will be small so that the relative error on t will be large, while if
the angle is very small, the relative error on θ will be large. So in practice you want to choose a
moderately small, but not too small value of θ.
11
Kevin Zhou Physics Olympiad Handouts
Some reasonable ballpark numbers are θ = (10 ± 1)◦, and t = (3 ± 0.3)s, so you probably can’t
easily get an uncertainty smaller than a few percent. The overall result will be less precise than
the pendulum experiment, because for the pendulum there is no ∆θ term, and you can measure
N ≫ 1 periods in a single trial so that the relative error on t falls as 1/N. With the ramp, you can
partially compensate by doing N separate trials, so that the relative error at best falls as 1/
√
N,
which isn’t as good. It might not even be as good as 1/
√
N, because your uncertainties may not be
independent: you might systematically overestimate or underestimate the time or angle.
