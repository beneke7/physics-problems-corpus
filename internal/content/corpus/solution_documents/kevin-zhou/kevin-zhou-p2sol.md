---
id: solution-document-kevin-zhou-p2sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-p2-ex001, kevin-zhou-p2-ex002, kevin-zhou-p2-ex003, kevin-zhou-p2-ex004, kevin-zhou-p2-ex005, kevin-zhou-p2-ex006, kevin-zhou-p2-p002, kevin-zhou-p2-p003, kevin-zhou-p2-p004, kevin-zhou-p2-p005, kevin-zhou-p2-p006, kevin-zhou-p2-p007, kevin-zhou-p2-p009, kevin-zhou-p2-p011, kevin-zhou-p2-p012, kevin-zhou-p2-p013, kevin-zhou-p2-p014, kevin-zhou-p2-p017, kevin-zhou-p2-p019, kevin-zhou-p2-p022, kevin-zhou-p2-p023, kevin-zhou-p2-p028, kevin-zhou-p2-p030]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Problem Solving II: Data and Uncertainty
For some entertaining general discussion, see chapters I-5 and I-6 of the Feynman lectures. There
is a total of 74 points.
1 Basic Probability
Idea 1
If a quantity X has the probability distribution p(x), that means
the probability that a ≤ X ≤ b is
Z b
a
p(x)dx.
In particular, the total probability has to sum to one, so
Z ∞
−∞
p(x)dx = 1.
Using the probability distribution, we can calculate expectation values, i.e. averages. For
example, the expectation value of X, also called the mean, is
⟨X⟩ =
Z ∞
−∞
xp(x)dx
while the expectation value of an arbitrary function of X is
⟨f(X)⟩ =
Z ∞
−∞
f(x)p(x)dx.
One especially important quantity is the variance of X, defined as
varX = ⟨X2
⟩ − ⟨X⟩2
.
The standard deviation is defined by σX =
√
varX. It describes how “spread out” the
distribution of X is, and it will play an important role in uncertainty analysis.
[1] Problem 1. Suppose that x is a length. What are the dimensions of p(x), ⟨X⟩, varX, and σX?
Solution. Since p(x)dx is dimensionless, we have
[p(x)] = L−1
where L denotes length. Similarly,
[⟨X⟩] = L, [varX] = L2
, [σX] = L.
Example 1
Trains arrive at a train station every 10 minutes. If I arrive at a random time, and X is the
number of minutes I have to wait, what is the standard deviation of X?
1Kevin Zhou Physics Olympiad Handouts
Solution
We see that X can be anywhere between 0 and 10, with all possibilities equally likely, so
p(x) =
(
1/10 0 ≤ x ≤ 10,
0 otherwise
where the denominator guarantees the total probability is 1. We have
⟨X⟩ =
Z ∞
−∞
xp(x)dx =
Z 10
0
x
10
dx = 5
which makes sense, as I should have to wait half the maximum time on average, and
⟨X2
⟩ =
Z ∞
−∞
x2
p(x)dx =
Z 10
0
x2
10
dx =
100
3
.
Then the standard deviation is
σX =
p
⟨X2⟩ − ⟨X⟩2 =
5
√
3
min.
[3] Problem 2. Consider an exponentially distributed quantity,
p(x) =
(
ae−ax x ≥ 0,
0 otherwise,
for some a > 0. Verify that the total probability is 1, and compute the mean and standard deviation.
Solution. First, to check normalization,
Z ∞
−∞
p(x)dx =
Z ∞
0
ae−ax
dx =
Z ∞
0
e−u
du = 1 − 0 = 1.
Now, the mean can be evaluated using integration by parts,
⟨x⟩ =
Z ∞
0
xae−ax
dx = −xe−ax
∞
0
+
Z ∞
0
e−ax
dx = 0 −
1
a
e−ax
∞
0
=
1
a
.
To calculate the standard deviation, we must evaluate
⟨x2
⟩ =
Z ∞
0
x2
ae−ax
dx = 0 +
Z ∞
0
(2x)e−ax
dx =
2
a
⟨x⟩ =
2
a2
.
We thus conclude
σX =
p
⟨X2⟩ − ⟨X⟩2 =
r
2
a2
−
1
a2
=
1
a
.
[2] Problem 3. The purpose of subtracting ⟨X⟩2 in the variance is to make sure it doesn’t change
when a constant is added to x, since shifting something left or right on the number line shouldn’t
change its spread. Verify that for any constant c, varX = var(X + c).
2Kevin Zhou Physics Olympiad Handouts
Solution. We have
var(X + c) = ⟨(X + c)2
⟩ − ⟨X + c⟩2
.
By the definition of the expectation value, we have
⟨A + B⟩ = ⟨A⟩ + ⟨B⟩, ⟨cA⟩ = c⟨A⟩
for any quantities A and B and any constant c. Thus,
var(X + c) = ⟨X2
⟩ + ⟨2Xc⟩ + ⟨c2
⟩ − ⟨X⟩2
− 2⟨X⟩⟨c⟩ − ⟨c⟩2
= varX
as desired.
[3] Problem 4. We say X is normally distributed if
p(x) ∝ e−a(x−b)2
for some a > 0. For simplicity, let’s shift X so that it’s centered about x = 0, so
p(x) ∝ e−ax2
.
You may use the result given in P1,
Z ∞
−∞
e−x2
dx =
√
π.
Find the constant of proportionality in p(x), the mean, and the standard deviation.
Solution. Let p(x) = ke−ax2
. We fix the constant k by demanding normalization,
Z ∞
−∞
ke−ax2
dx =
Z ∞
−∞
k
√
a
e−u2
du = 1.
Using the provided integral, we conclude
k =
r
a
π
.
The mean is clearly zero, since the distribution is symmetric about that point. Thus, we have
varX = ⟨X2
⟩ =
r
a
π
Z ∞
−∞
x2
e−ax2
dx =
1
a
√
π
Z ∞
−∞
u2
e−u2
du.
This remaining integral can be evaluated using integration by parts,
Z ∞
−∞
u2
e−u2
du = −
1
2
ue−u2 ∞
−∞
+
1
2
Z ∞
−∞
e−u2
du = 0 +
√
π
2
from which we conclude
varX =
1
a
√
π
√
π
2
, σ =
1
√
2a
.
3Kevin Zhou Physics Olympiad Handouts
Remark
As you saw in problem 4, normal distributions are characterized entirely by their mean
and standard deviation. Moreover, the central limit theorem roughly states that the sum
of many independent random variables is approximately normally distributed. As a result,
final experimental results are often approximately normally distributed, which means we can
describe them with only the mean and standard deviation. That is the reason why the next
part of this problem set will focus on calculating standard deviations (i.e. uncertainties).
[2] Problem 5. If two random variables X1 and X2 are independent, then
⟨X1X2⟩ = ⟨X1⟩⟨X2⟩.
Use this result to show that
var(X1 + X2) = var(X1) + var(X2)
which implies that the standard deviation “adds in quadrature”,
σX1+X2 =
q
σ2
X1
+ σ2
X2
.
This is an important result we’ll use many times below.
Solution. By definition, we have
var(X1 + X2) = ⟨(X1 + X2)2
⟩ − ⟨X1 + X2⟩2
Using the properties listed in problem 3,
var(X1 + X2) = ⟨X2
1⟩ + 2⟨X1X2⟩ + ⟨X2
2⟩ − ⟨X1⟩2
− 2⟨X1⟩⟨X2⟩ − ⟨X2⟩2
= var(X1) + var(X2) + 2(⟨X1X2⟩ − ⟨X1⟩⟨X2⟩)
When X1 and X2 are independent, the last term vanishes, giving
var(X1 + X2) = var(X1) + var(X2).
2 Uncertainty Propagation
Idea 2
When a physical quantity is measured in an experiment and reported as x±∆x, it is uncertain
what the true value of the quantity is. If the quantity has a probability distribution p(x),
then the reported uncertainty ∆x is essentially the standard deviation of p(x).
Remark
You can use intuition and experience to assign uncertainties to real measurements. For
example, if you’re using a clock that times only to the nearest second, you might take
∆t = 0.5s. If you’re using a good ruler, which has millimeter markings, you might take
4Kevin Zhou Physics Olympiad Handouts
∆x = 0.5mm. Of course, the ultimate test is the results: if you assigned the uncertainties
right, your final uncertainty should encompass the true result most (but not all) of the time.
[1] Problem 6. Suppose x has uncertainty ∆x and y has uncertainty ∆y, where x and y are indepen-
dent. Explain why the uncertainty of x + y is
∆(x + y) =
p
(∆x)2 + (∆y)2.
This is called “addition in quadrature”. What is the uncertainty of x − y? How about x + x?
Solution. For independent variables, var(X1 + X2) = var(X1) + var(X2). Since our uncertainties
represent the standard deviation, σX =
p
var(X), we have
∆(x + y) =
p
(∆x)2 + (∆y)2.
Since x−y = x+(−y) and ∆(−y) = ∆y, we get that ∆(x−y) = ∆(x+y). Finally, by linearity we
clearly have ∆(x+x) = 2∆x. (The formula above doesn’t apply, because x isn’t independent of x.)
Remark
Note how this differs from “high school” uncertainty analysis. In school, you might be told
to show uncertainty using significant figures, and when adding two things, to keep only the
figures that are significant in both of them. That corresponds to
∆(x + y) = max(∆x,∆y)
which is an underestimate. Or, you might be told that the uncertainty needs to encapsulate
all the possible values, which implies that
∆(x + y) = ∆x + ∆y
which is an overestimate, since the errors could cancel.
Example 2: F = ma 2016 25
Three students make measurements of the length of a 1.50m rod. Each reports an uncertainty
estimate representing an independent random error applicable to the measurement.
• Alice performs a single measurement using a 2.0m tape measure, to within 2mm.
• Bob performs two measurements using a wooden meter stick, each to within 2mm, which
he adds together.
• Christina performs two measurements using a machinist’s meter rule, each to within
1mm, which she adds together.
Rank the measurements in order of their uncertainty.
5Kevin Zhou Physics Olympiad Handouts
Solution
The uncertainty in Alice’s measurement is 2mm. The uncertainty in Bob’s is 2
√
2mm by
quadrature, while the uncertainty in Christina’s is
√
2mm by quadrature. So the lowest
uncertainty is Christina’s, followed by Alice’s, followed by Bob’s.
[1] Problem 7. Given N independent measurements of the same quantity with the same uncertainty,
xi ±∆x, find the uncertainty of their sum. Hence show the uncertainty of their average is ∆x/
√
N.
This result is extremely important, since repeating trials is one of the main ways to reduce
uncertainty. But it’s important to remember that the results derived above hold only for independent
measurements. For example, taking a single measurement, then averaging that single number with
itself 100 times certainly wouldn’t reduce the uncertainty at all!
Solution. The uncertainty of their sum ∆X can be found by adding in quadrature,
∆X =
v
u
u
t
N X
i=1
(∆xi)2 =
√
N∆x.
Therefore, the uncertainty of the average is
∆X
N
=
∆x
√
N
.
Idea 3: Tangent Line Approximation
If x has uncertainty ∆x, and f(x) can be approximated by its tangent line,
f(x′
) ≈ f(x) + (x′
− x)f′
(x),
within the region x±∆x, then the distribution of f(x) is just a shifted and stretched version
of the distribution of x. Moreover, f(x) has approximate uncertainty |f′(x)|∆x.
[1] Problem 8. If x is positive and has uncertainty ∆x, find the uncertainties of x2,
√
x, 1/x, logx,
and ex using the tangent line approximation.
Solution. Using idea 3, we simply read off the answers,
∆(x2
) = 2x∆x ∆(
√
x) =
∆x
2
√
x
∆(1/x) =
∆x
x2
∆(log(x)) =
∆x
x
∆(ex
) = ex
∆x
[1] Problem 9. The tangent line approximation doesn’t always make sense. Suppose x is measured
as 0 ± ∆x. Show that the results of problem 8 for the uncertainties of x2 and
√
x give nonsensical
results. In each case, what would be a more reasonable uncertainty to report?
Solution. Naively applying the formulas above would give uncertainties of zero and infinity, which
are clearly unphysical. In these cases, reasonable guesses for the uncertainty would be (∆x)2 and √
∆x, since by dimensional analysis, they give the typical spread of the distributions of x2 and
√
x.
6Kevin Zhou Physics Olympiad Handouts
Still, there is something more subtle going on here. In cases like these, applying the transforma-
tion distorts the probability distribution, beyond just a shifting and stretching, so it doesn’t stay
normally distributed. In Olympiads, this doesn’t matter since we only want rough estimates, but
the proper way to handle this would be to describe the full probability distribution. However, this
often can’t be done analytically.
When professional physicists run into situations like these, they often use Monte Carlo: they
numerically compute many values, starting with randomly drawn inputs, and use that to infer the
probability distribution. On Olympiads, you should just fall back to something reasonable.
[2] Problem 10. Consider two independent, positive quantities with values and uncertainties x ± ∆x
and y ± ∆y.
(a) By writing xy as exp(logx + logy), show that the uncertainty of xy is
∆(xy) = xy
s
∆x
x
2
+

∆y
y
2
.
(b) If we set x = y, then we find
∆(x2
) = x2
s
2

∆x
x
2
=
√
2x∆x.
On the other hand, in problem 8 we found ∆(x2) = 2x∆x. Which result is correct?
(c) Find the uncertainty of x/y.
Solution. (a) We can write
xy = exp(logx + logy)
which implies
∆(xy) = exp(logx + logy)∆(logx + logy) = xy
s
∆x
x
2
+

∆y
y
2
.
(b) The result ∆(x2) = 2x∆x is correct, since the formula for ∆(xy) assumes x and y are
independent, which fails when we set y = x.
(c) We have
x
y
= exp(logx − logy)
and by a very similar calculation to part (a), we conclude
∆(x/y) =
x
y
s
∆x
x
2
+

∆y
y
2
.
[2] Problem 11. A student launches a projectile with speed v = 5±0.1m/s in gravitational accelera-
tion g = 9.81±0.01m/s2. The resulting range is d = 1.5±0.02m. Given that the launch angle was
less than 45◦, find the launch angle, with uncertainty, assuming all uncertainties are independent.
7Kevin Zhou Physics Olympiad Handouts
Solution. From the projectile range equation d = v2 sin(2θ)/g, we get
θ =
1
2
arcsin

dg
v2

= 18.03◦
.
Now write sin(2θ) = gd/v2. By the results of problem 10, the uncertainty of the right-hand side is
dg
v2
s
∆d
d
2
+

∆g
g
2
+

2∆v
v
2
= 0.0248.
The uncertainty of the left-hand side is 2cos(2θ)∆θ by the tangent line approximation, so we have
∆θ = 0.015 rad = 0.9◦. Thus, the final result should be written as
θ = 18.0◦
± 0.9◦
where we removed a superfluous significant figure.
[2] Problem 12. Two physical quantities are related by y = xex.
(a) If x is measured to be 1.0 ± 0.1, find the resulting value of y, with uncertainty.
(b) If y is measured to be 2.0 ± 0.1, find the resulting value of x, with uncertainty.
Solution. (a) To find the central value of y, we plug in to get y = e = 2.7183. To find the error,
we use the tangent line approximation,
dy
dx
= ex
(x + 1)
which gives us
∆y ≈ ex
(x + 1)∆x = 0.54.
Thus, rounding to a reasonable number of significant figures, we have
y = 2.7 ± 0.5.
Note that it would be incorrect to apply the “addition in quadrature” rule for products,
∆y = xex
s
∆x
x
2
+

∆(ex)
ex
2
because x and ex aren’t independent.
(b) To find the central value of x, we solve the equation 2 = xex numerically. This can be done
using the method of iteration introduced in P1. That is, we have x = 2e−x, so by repeatedly
plugging 2e−Ans into the calculator, we get x = 0.8526.
Under the tangent line approximation,
∆x ≈
∆y
ex(x + 1)
= 0.023.
Rounding to a reasonable number of significant figures, we conclude
x = 0.85 ± 0.02.
8Kevin Zhou Physics Olympiad Handouts
Idea 4
For practical computations, it is often useful to use relative uncertainties. The relative
uncertainty of x is ∆x/x, and can be expressed as a percentage.
[1] Problem 13. Some basic relative uncertainty results.
(a) Show that the relative uncertainty of the product or quotient of two independent quantities
is the square root of the sum of the squares of their relative uncertainties.
(b) Show that averaging the results of N independent trials as in problem 7 reduces the relative
uncertainty by a factor of
√
N.
Solution. (a) Above we found that
∆(xy) = xy
s
∆x
x
2
+

∆y
y
2
Dividing both sides by xy gives
∆(xy)
xy
=
s
∆x
x
2
+

∆y
y
2
which is the desired result.
(b) Adding up the trials makes the absolute uncertainties add in quadrature, giving a factor of √
N, while the total goes up by a factor of N, so the relative uncertain goes down by a factor
of
√
N. Dividing by N to form the average doesn’t affect the relative uncertainty.
Remark
There are many situations where the rules above can’t be used. For example, consider the
uncertainty of x + y2/x, where x and y are independent. You can calculate the uncertainty
of either term with the standard rules, but you can’t calculate the uncertainty of their sum,
because the terms are not independent (both contain x).
In these cases, you can use the multivariable equivalent of the tangent line approximation,
f(x′
,y′
) ≈ f(x,y) + (x′
− x)
∂f
∂x
+ (y′
− y)
∂f
∂y
.
For independent x and y, adding the two contributions to the uncertainty in quadrature gives
∆f =
s
∂f
∂x
∆x
2
+

∂f
∂y
∆y
2
.
This general rule can also be used to quickly rederive the results of problem 10. However, it
shouldn’t be necessary in Olympiad problems. If you run into such situations in an experiment,
often one of the uncertainties is much smaller, and can be neglected entirely.
3 Using Uncertainties
9Kevin Zhou Physics Olympiad Handouts
Example 3: F = ma 2022 B21
Alice and Bob are given a long, thin rectangle of sheet metal. (It has been machined very
precisely, so they can assume it is perfectly rectangular.) Using calipers, Alice measures the
width of the rectangle as 1 cm with 1% uncertainty. Using a tape measure, Bob independently
measures its length as 100 cm with 0.1% uncertainty. What are the relative uncertainties
they should report for the area and the perimeter of the rectangle?
Solution
To compute the area, we multiply the two measurements, which means we add the relative
uncertainties in quadrature,
∆A
A
=
p
(1%)2 + (0.1%)2 ≈ 1%.
Note that in this case, the relative uncertainty of Bob’s measurement is negligible; the rel-
ative uncertainty of the area is approximately the relative uncertainty of Alice’s measurement.
Computing the perimeter involves adding the measurements, which means the absolute
uncertainties are added in quadrature instead. These are 0.01cm and 0.1cm for Alice and
Bob’s measurements, respectively, so the absolute uncertainty of Alice’s measurement is
negligible. Thus, the relative uncertainty of the perimeter is approximately the relative
uncertainty of Bob’s measurement, 0.1%.
In simple Olympiad experiments, often only one uncertainty will really matter. This can
dramatically simplify calculations, but it might take a little thought to tell which one.
[3] Problem 14.  ^ 1 0As a speed test, solve F = ma 2018 problems A12, A25, B19, and B25, and
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
10Kevin Zhou Physics Olympiad Handouts
(On the other hand, we shouldn’t take a ratio as extreme as 5 to 1, because the benefit of
additional measurements hits diminishing returns.)
(b) Explicitly, if ∆T is the absolute uncertainty on each measurement, then
∆(T1/T2) =
T1
T2
s
∆T
T1
√
N1
2
+

∆T
T2
√
N2
2
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
s
2∆t
t
2
+

∆ℓ
ℓ
2
+

cos(θ)∆θ
sin(θ)
2
.
Given the above, you definitely want a ramp as long as possible, and there’s a tradeoff with the
angle: if the angle is very large, t will be small so that the relative error on t will be large, while if
the angle is very small, the relative error on θ will be large. So in practice you want to choose a
moderately small, but not too small value of θ.
11Kevin Zhou Physics Olympiad Handouts
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
[3] Problem 17. [A] Consider N independent measurements of the same quantity, with results xi±∆xi.
They can be combined into a single result by taking a weighted average. What is the optimal weighted
average, which minimizes the uncertainty, and what is the corresponding uncertainty?
Solution. Let the weights be wi, so we report the value
x =
X
i
wixi.
The uncertainty obeys
(∆x)2
=
X
i
w2
i (∆xi)2
.
A tempting but incorrect way to minimize this quantity is to set the derivative with respect to wi
equal to zero. This doesn’t work because the solution is just w1 = ... = wN = 0, which isn’t a
weighted average at all. To actually have a weighted average, we need the weights to sum to one,
X
i
wi = 1.
This is an optimization problem with a constraint, which can be solved with Lagrange multipliers.
However, for this particular problem, the constraint is simple enough to handle manually. Because
of the constraint, if one increases some weight, then one must decrease others. At the minimum,
the effect of increasing any weight infinitesimally and decreasing another the same amount must be
zero, as if it weren’t, we could just adjust those two weights to get a lower uncertainty. Setting the
change in the uncertainty due to adjusting wi and wj in this way to zero gives
0 = d(w2
i )(∆xi)2
+ d(w2
j )(∆xj)2
= (2dw)(−wi(∆xi)2
+ wj(∆xj)2
).
This tells us that wi ∝ 1/∆x2
i , which means
wi =
1/(∆xi)2
P
j 1/(∆xj)2
.
Note that all measurements are included in the optimal average, no matter how bad they may be.
The corresponding uncertainty is
∆x =
X
i
1
(∆xi)2
!−1/2
.
All of the examples above involve combining continuous quantities, so we’ll close this section with
some applications to “counting” experiments, which work slightly differently.
12Kevin Zhou Physics Olympiad Handouts
Example 4
A fair coin is tossed 1000 times, and the number of heads is counted. If this process is
repeated many times, what is the standard deviation of the number of heads?
Solution
Consider one trial of 1000 tosses. The number of heads is X = X1 +X2 +...+X1000, where
Xi =
(
1 heads on toss i,
0 tails on toss i.
Of course, the mean of each of these variables is ⟨Xi⟩ = 0.5, so that the mean of X is 500. In
addition, the Xi are independent of each other, so the variances add. The variance of each
one of them is
varXi = ⟨X2
i ⟩ − ⟨Xi⟩2
=
1
2
−
1
4
=
1
4
.
Thus, the standard deviation of the number of heads is
√
varX =
p
1000/4 ≈ 16.
So getting 520 heads would not be surprising, but if you got 550, you might be justified in
suspecting the coin isn’t fair. (Also, the number of heads is very close to normally distributed,
by the central limit theorem mentioned above.) To check whether you understand this, you
can redo it with a general probability p of getting heads, where you should get
p
1000p(1 − p).
[3] Problem 18. At any moment, a Geiger counter can click, indicating that it has detected a particle
of radiation. Suppose that there is an independent probability αdt of clicking at each infinitesimal
time interval dt. Let the number of clicks observed in a total time T be X.
(a) Find the expected value and standard deviation of X, and thereby compute its relative
uncertainty. (Hint: split the total time into many tiny time intervals, and let Xi be the
number of clicks in interval i, so X =
P
i Xi.)
(b) Using a Geiger counter on a sample, you hear 197 clicks in 5 minutes of operation. Estimate
the activity α of the sample (i.e. the expected clicks per second), with uncertainty. If you
measure for longer, how does the uncertainty reduce over time?
(c) Now suppose that for a different sample, N = 0 after 5 minutes. Estimate the activity α of
the sample (i.e. the expected clicks per second), with a reasonable uncertainty. If you measure
for longer, and continue to hear no clicks, how does the uncertainty reduce over time?
Solution. (a) There are N = T/dt time intervals. Using the hint and applying linearity of
expectation,
⟨X⟩ =
X
i
⟨Xi⟩ = N(αdt) = αT.
Since the Xi are independent, their variances add. The variance of Xi is
⟨X2
i ⟩ − ⟨Xi⟩2
= αdt − (αdt)2
≃ αdt.
13Kevin Zhou Physics Olympiad Handouts
Thus, by adding the variances, we have
varX = αT
so the standard deviation is ∆X =
√
αT. The relative uncertainty is ∆X/⟨X⟩ = 1/
√
αT.
(b) Applying the formulas above, we estimate
α =
197
T
= 0.66s−1
with an uncertainty of
∆α =
α
√
αT
=
r
α
T
= 0.05s−1
.
The uncertainty falls as 1/
√
T. Note that this is very similar to previous results we’ve found,
where the uncertainty falls as 1/
√
n where n is the number of trials. In some sense, each
instant of time we wait is another trial here.
(c) Of course, we estimate α = 0, but then the formulas above imply ∆α = 0 and hence that we
are absolutely certain α = 0, which is absurd. (If you don’t think that’s absurd, note that
the same result would have occurred if we had heard zero clicks in an arbitrarily short time
interval, such as a nanosecond.)
This is a case where the basic rules of uncertainty propagation break down, and we need
to think. The point of giving an uncertainty is to indicate the range of parameter values
compatible with the data we observed. Now, the probability of having no clicks in time T
is e−αT . If αT ≫ 1, then it would be very unlikely to have no clicks, so we can rule out
α ≫ 1/T. But if αT ≲ 1, this isn’t unlikely at all. Thus, your uncertainty window should be
α ∈ [0,c/T] where c is an order-one number, whose value depends on the specific statistical
procedure you use. (Note that the upper bound falls as 1/T, not 1/
√
T.)
[4] Problem 19. [A] This problem extends problem 18 to derive some canonical results.
(a) Let λ = αT. Find the probability p(X = k) of hearing exactly k clicks in terms of λ and k.
(b) To check your result, show that the sum of the p(X = k) is equal to one.
(c) ⋆ In the limit λ ≫ 1, show that the probabilities p(X = k) approach that of a normal
distribution with the mean and standard deviation calculated in problem 18, thereby providing
an example of the central limit theorem at work. This is a rather involved calculation, which
will use many of the techniques from P1. It will also require Stirling’s approximation,
n! ≈
√
2πn
n
e
n
for n ≫ 1, which we mentioned in P1. (Hint: because the relative uncertainty falls as λ
increases, start by writing k = λ(1+δ) for |δ| ≪ 1, and expand in powers of δ. Be careful not
to drop too many terms, as δ is small, but λδ isn’t.)
Solution. (a) Following the notation of problem 18, we have X =
P
i Xi, and we get k clicks if
precisely k of the Xi are equal to 1. Thus,
p(X = k) =

N
k

(αdt)k
(1 − αdt)N−k
≈
Nk
k!
(αdt)k
(1 − αdt)N
=
λk
k!
e−λ
.
This is known as the Poisson distribution.
14Kevin Zhou Physics Olympiad Handouts
(b) This follows from the Taylor series of the exponential,
∞ X
k=0
p(X = k) = e−λ
∞ X
k=0
λk
k!
= 1.
(c) Using Stirling’s approximation, we have
p(X = k) =
1
√
2πk

λe
k
k
e−λ
=
1
p
2πλ(1 + δ)

e
1 + δ
λ(1+δ)
e−λ
≈
1
√
2πλ
eδλ
(1 + δ)−λ(1+δ)
where we used the fact that δ ≪ 1.
Now we need to use a technique from P1. Letting the final term be equal to 1/y, we have
logy = λ(1 + δ)log(1 + δ) = λ(1 + δ)

δ −
δ2
2
+ O(δ3
)

= δλ +
δ2λ
2
+ O(δ3
λ).
In P1, we only expanded up to the first term, but here we need to keep the order δ2 term.
The reason is we want an approximation that works for the whole peak of the probability
distribution, and we know it has relative uncertainty 1/
√
λ, which means we need to take
δ ∼ 1/
√
λ. That implies that δ2λ is of order one and cannot be dropped, but δ3λ is small and
can be dropped. Anyway, plugging this in, we find
p(X = k) ≈
1
√
2πλ
e−δ2λ/2
=
1
√
2πλ
e−(k−λ)2/2λ
which is precisely a normal distribution with the appropriate mean and standard deviation.
[3] Problem 20.  m 1 0IPhO 2023, problem 1, parts A, B, and D.3. A short derivation of the key features
of Brownian motion. It requires only the ideas of this problem set, and some basic mechanics.
4 Data Analysis
Idea 5
All data analysis for the USAPhO and IPhO can be done using extremely basic methods.
Sometimes, it suffices to just calculate a value based on a single data point, or by cleverly
using a pair of data points. When this isn’t enough, you’ll have to do graphical data analysis,
which will usually correspond to drawing a line and measuring its slope and intercept. This
is quite limited compared to modern statistical tools, but also can be surprisingly powerful.
15Kevin Zhou Physics Olympiad Handouts
Example 5
The activity of a radioactive substance obeys A(t) = A0e−t/τ. Using measurements of t and
A(t), plot a line to find A0 and τ.
Solution
To handle exponential relationships, take the logarithm of both sides for
logA(t) = logA0 − t/τ.
Then a plot of logA(t) vs. t has slope −1/τ and y-intercept logA0.
[1] Problem 21. For a power law y = αxn where y and x are measured, what line can be plotted to
find α and n?
Solution. We have
log(y) = log(αxn
) = log(α) + nlog(x).
Thus, if we plot logy against logx, the slope will be n and the y-intercept will be log(α).
[2] Problem 22. The rate R of electron emission from a solid in an electric field E is
R = βe−E0/E
for some constants β and E0. The exponential form is because the effect is due to quantum tunneling,
as will be discussed in X2.
(a) If E and R are measured, what line can be plotted to find β and E0? Make sure the dimensions
of your equations make sense.
(b) Suppose both β and E0 have 1% uncertainty. For small E, which is more important for the
uncertainty of R? What about for large E? Around where is the crossover point?
Solution. (a) Naively, if we take the natural log of the equation, we get
logR = −
E0
E
+ logβ.
Plotting 1/E on the x-axis and logR on the y-axis gives a line with slope −E0 and y-intercept
logβ.
But the dimensions of this equation look wrong, because R and β are dimensionful quantities.
Technically, we are really plotting dimensionless quantities, involving the ratios of E and R
to a standard unit of energy and rate, respectively. For example, in SI units, we would have
log
R
1Hz
= −
E0/(1J)
E/(1J)
+ log
β
1Hz
.
On the page, we literally plot (1J)/E versus log(R/(1Hz)). This gives a line with dimensionless
slope −E0/(1J) and intercept log(β/(1Hz)). You don’t have to keep this technicality in mind,
but this sort of thing is always implicitly happening whenever one plots data.
16Kevin Zhou Physics Olympiad Handouts
(b) The uncertainty in β alone always gives a 1% uncertainty in R. But the uncertainty in R
due to the uncertainty in E0 depends on the value of E. For E ≪ E0, we can expand the
exponential as (1 − E/E0), and in this case the uncertainty in E0 does almost nothing at all,
so the uncertainty in β dominates. For E ≫ E0, the reverse is true. By dimensional analysis,
the crossover must be around E ∼ E0.
Example 6
Suppose that y and x are related nonlinearly, as
y = bx + ax2
.
For example, this could model the force due to a non-Hookean spring. Using measurements
of x and y, plot a line to find a and b.
Solution
If we divide by x, we find
y
x
= ax + b.
Therefore, we can plot y/x versus x, which gives a line with slope a and intercept b. More
generally, we can plot a line whenever we can rearrange a given relation into the form
(known) = (unknown)(known) + (unknown)
where all four terms can be arbitrarily complicated. In this way, it is possible to turn a lot
of very nonlinear relations into lines.
[3] Problem 23. Some more examples of finding lines to plot.
(a) Suppose that you are given points (x,y) that lie on a circle centered at (a,0) with radius r.
What line can be plotted to find a and r?
(b) Consider an Atwood’s machine with masses m and M > m. The acceleration of the machine
is measured as a function of M. However, since the pulley has mass, it slows the acceleration
of the Atwood’s machine, so that
a =
M − m
M + m + δm
g.
Find a line that can be plotted to find g and δm, assuming m, M, and a are known. This is
an example of how plotting a line can separate out a systematic error, i.e. the value of δm,
which would be impossible if only one value of M were used.
(c) Suppose an object is undergoing simple harmonic motion with amplitude A and angular
frequency ω. Given measurements of the position x and velocity v, what line can be plotted
to find A and ω?
Solution. (a) The equation of the circle is
(x − a)2
+ y2
= r2
, y2
+ x2
= 2ax + r2
− a2
17Kevin Zhou Physics Olympiad Handouts
Plotting y2 + x2 vs. x will give a slope of 2a and a y-intercept of r2 − a2. Combining the two
pieces of information yields a and r.
(b) The equation can be slightly rearranged to give
M − m
a
=
M + m
g
+
δm
g
.
Therefore, a plot of (M − m)/a vs. M + m has slope 1/g and y-intercept δm/g.
(c) By conservation of energy, A2 = x2 + v2/ω2, so
x2
= A2
− v2
/ω2
.
Thus, a plot of x2 vs. v2 has y-intercept A2 and slope −1/ω2.
[3] Problem 24.  W 1 0USAPhO 2012, problem A2. (This one requires basic thermodynamics.)
[3] Problem 25.  W 1 0USAPhO 2011, problem A2.
[3] Problem 26.  c 1 0INPhO 2018, problem 7. (This one requires basic fluid dynamics.)
[3] Problem 27 (USAPhO 2024). An experimentalist drives a series RLC circuit with a sinusoidal
voltage V (t) = V0 cosωt. In E6, you will learn how to show that the voltage across the capacitor,
in the steady state, oscillates with amplitude
Vc =
V0
p
(1 − ω2/ω2
0)2 + (ω/ω0Q)2
where ω0 is the resonant angular frequency and Q is the circuit’s quality factor. The experimentalist
takes the following data near the resonance, for a fixed value of V0:
ω (rad/s) 133.0 133.5 134.0 134.5 135.0 135.5 136.0 136.5 137.0
Vc (Volts) 3.64 4.76 6.52 8.53 8.18 6.06 4.44 3.42 2.75
Find the values of ω0 and Q as accurately as possible. Uncertainty analysis is not required. (Hint:
you don’t always have to draw a line. Carefully examine and approximate the given formula.)
Solution. See the official solutions to problem B3, part a.b.ii. A good answer for ω0 is within the
range (134.7 ± 0.1)rad/s, and a good answer for Q is within 88 ± 3.
5 Estimation
Estimation is a useful skill for checking the answers to real-world problems.
Example 7
Estimate the circumference of the Earth.
18Kevin Zhou Physics Olympiad Handouts
Solution
If you know that the United States is 3,000 miles wide, and there is a time zone difference of
three hours between California and New York, then a reasonable estimate is 24,000 miles.
Or, if you know the factoid that light can go about seven times around the Earth in a second,
then a reasonable estimate is (3/7) × 108 m ≈ 4 × 107 m.
Let’s check these results are compatible. There are about 5 miles in 8 kilometers, a fact
you can get by remembering how your car’s speedometer looks, or by noting that 3 feet are
about 1 meter. Then 4 × 104 km ≈ (5/8) × 4 × 104 mi = 2.5 × 104 mi, so the two results are
compatible. There are probably at least a hundred more ways to perform this estimation.
Example 8
Estimate the density of air, and compare this to the density of water.
Solution
We can directly use the ideal gas law, PV = nRT. The density is ρ = µn/V where µ is the
mass of one mole of air, so
ρ =
µP
RT
.
Atmospheric pressure is about 105 Pa, typical temperatures are about 300K, and air is mostly
N2, which has a molar mass of µ = 28g/mol, so
ρ =
(0.028)(105)
(8.3)(300)
kg
m3
≈ 1
kg
m3
.
The density of water is, almost by definition,
ρw ≈ 103 kg
m3
.
Most liquids and solids have densities within an order of magnitude of this, since in all
cases the atoms are packed close together. Evidently, air molecules are about a factor of
(103)1/3 = 10 times further apart than typical water molecules.
Example 9
Estimate how much useful power you can produce in a short burst.
Solution
This is a bit tricky to test, because most exercises just burn energy against air resistance or
friction, which is hard to estimate. However, a task that directly performs work is useful. I
weigh about 75kg and can run up a 3m high staircase in around 3s, so
P = mgv = (75)(10)(3/3)W ≈ 750W.
19Kevin Zhou Physics Olympiad Handouts
This is a typical max power output, while typical steady state power outputs are several
times smaller, and the corresponding numbers for elite athletes are several times larger.
Remark
It’s important not to overthink estimation questions. If you already know what answer you’re
targeting, you can always add ad-hoc factors to get closer, but that’s not a good instinct in
novel situations, where you don’t know the answer. Instead, it’s best to keep things simple,
and only try to get within one or two orders of magnitude. Accordingly, the solutions to the
problems below will also use very simple estimates, accurate to only an order of magnitude.
[3] Problem 28. Some questions about light energy.
(a) Estimate the number of photons emitted per second by a standard light bulb. (The energy of
a photon is E = hf, and the frequency of a photon is related to the wavelength by c = fλ.)
(b) The Sun supplies power of intensity 1400W/m2 to the Earth. The nearest star is about 4
light years away. Assuming this star is similar to the Sun, about how many of its photons
enter your eye per second?
Solution. (a) A standard light bulb has around 50 W of power. The power P = NE where
N is the number of photons emitted per second, and the wavelength of visible light is from
400 − 700 nm. Using 500nm, we have
N =
Pλ
hc
∼ 1020
photons/s
(b) The distance to the Sun is 1AU ∼ 1.5×1011 m, which you can also reconstruct with Kepler’s
laws. 1 light year is c(1year) ∼ 1016 m. Then the intensity from the star is reduced by a
factor of (1AU/4ly)2 due to the inverse square law, so I ∼ 10−8 W/m2.
The area of a human pupil depends on the light conditions, but is roughly πr2 = π(5mm)2.
Then the number of photons that enter it per second is Pλ/hc, which gives N ∼ 106 photons/s.
That’s plenty, so it’s very easy to see such a star at night, while it might be difficult during
the day because of the background light from the Sun.
[2] Problem 29. Estimate the radius of the largest asteroid you could jump off of, and never return.
Solution. The escape velocity is v =
p
2GM/R, and we will assume a uniform spherical asteroid
with density ρ. Rock is a few times denser than water, so ρ ≈ 3 × 103 kg/m3
and M ≈ 4
3πρR3.
Humans can jump around half a meter, which determines v =
√
2gh. Thus
2gh =
2G
R
4
3
πρR3
.
Plugging in numbers gives R ≈ 2km.
[4] Problem 30. Some questions about energy.
(a) Estimate the digestible energy content of a stick of butter. (A Calorie is about 4000J, and is
also the energy needed to raise the temperature of a kilogram of water by 1K.)
20Kevin Zhou Physics Olympiad Handouts
(b) Estimate the rate at which your body burns energy when at rest.
(c) Estimate the rate at which a human being radiates energy. (The Stefan–Boltzmann law states
that the radiation powerperunit area from a blackbody is σT4, where σ = 5.7×10−8 W/m2K4.)
Is radiation a significant source of energy loss for a human being, or is it negligible?
(d) A human being develops mild hypothermia, with their core body temperature dropping by
5◦F. Neglecting any heat transfer with the environment, estimate the number of calories
required to raise their temperature back to normal.
Now let’s verify the energy content of the butter microscopically. This will be a very rough estimate,
so expect answers to be only within two orders of magnitude.
(e) A chemical bond typically involves two electrons, and a characteristic atomic separation
distance of one angstrom, r ∼ 10−10 m. Estimate the binding energy of one chemical bond.
(f) The fats in butter are digested by inputting energy to break the bonds in the molecules, then
harvesting energy by combining the atoms into CO2 and H2O, which have somewhat more
stable bonds.
Estimate the energy content of a kilogram of butter. How close is this to the true result?
Solution. (a) A typical diet is 2000 Calories per day, where the “Calorie” used to describe
nutritional facts is actually a kilocalorie, which is about 4000J. A stick of butter has about
800 Calories, giving an energy of 3 × 106 J.
(b) The power is
(2000Cal)(4000J/Cal)
86400s
≈ 100W.
This is used to maintain homeostasis in your body, and is eventually dissipated as heat.
(c) A rough estimate for the surface area of the human body is A ≈ 1m2. Human skin is on the
order of 300 K, so P ∼ AσT4 ≈ 500 W.
This is wrong, because it can’t be higher than (b). The point is that the radiation output by
the human body is almost completely cancelled by the radiation input by the environment,
which is at almost the same temperature (in absolute terms). For example, in typical indoor
conditions, the environment is at 70◦ F and human skin is at 90◦ F, for a difference of about
10 K. So the power is smaller by a factor of 1 − (290/300)4 = 0.13, giving a reasonable 65
W. It’s still a significant contribution, but not unreasonably large. Of course, in practice it’s
further reduced by wearing clothes, which trap a layer of insulating air and cloth near you.
(d) 5◦F is 5 × 5/9◦C ≈ 3◦C. Now we use Q = mc∆T, and since humans are mostly water, we’ll
approximate the specific heat to be the same as water. We take a human mass of 70 kg. Since
the “Calorie” used to describe food is actually a kilocalorie (amount of energy needed to raise
1 kg by 1◦ C), we just need ∼ 200 Calories to raise our temperature back to normal.
21Kevin Zhou Physics Olympiad Handouts
A cute, related estimate is the caloric cost of drinking ice-cold water. If you drink eight cups
of water a day, that’s 2kg of water. Warming it from 0◦ C to ∼ 35◦ C takes ∼ 70 Calories.
(e) A basic estimate for the binding energy is
E ∼
e2
4πϵ0r
∼ 2 × 10−18
J.
As a check, this is about 10eV, and the binding energy of hydrogen is about 13.6eV (one of
those classic numbers you should remember), so this is in the right ballpark. Of course, the
energy is actually negative, even though electrons repel, because it’s due to how the electrons
are attracted to the nuclei. We can, however, very roughly estimate this negative energy using
the positive energy of repulsion e2/4πϵ0r because all energy scales in the problem should be
roughly similar.
Actually, in reality the answer should be about an order of magnitude lower, for two reasons.
The first is simply that atomic separations are a bit bigger, but this is cancelled by the fact
that the nuclei have charge Zi > 1. The main issue is that covalent bonds are a bit more
subtle.
Naively, you could say that a covalent bond is attractive because the electrons in one atom are
attracted to the nuclei of the other. But this is too naive, because at least parametrically, it’s
cancelled out by the repulsion of the nuclei with each other, and the repulsion of the electrons
with each other, as all four of these terms are of order ±e2/4πϵ0r. Covalent bonds are stable
because the electron orbitals can deform a bit, so that the negative contributions end up a
bit bigger than the positive ones. So e2/4πϵ0r isn’t really an estimate for the binding energy,
but for the sizes of terms which mostly cancel out to give the binding energy, which is why
the real answer is about 10 times smaller.
(f) Fats are mostly carbon. As a very rough estimate let’s say that the carbon atoms end up in
bonds that are twice as stable as before, so the energy released per carbon atom is on the
order of magnitude of what we found in part (e). Then
energy
kilogram
=
energy
C atom
C atoms
mole

kilograms
mole
−1
∼ (2 × 10−18
J)NA

12g
mole
−1
= 108
J/kg.
For comparison, the energy of one gram of fat is 9 calories, so the true answer is
(9)(4000)(1000)
J
kg
= 3.6 × 107
J/kg
which is not too far off!
[2] Problem 31 (Povey). When human beings lose weight, most of it is by exhalation of carbon.
About 20% of the air in the atmosphere is oxygen. When we breathe in and then out, about 25%
of the oxygen is converted to carbon dioxide.
(a) Estimate the mass of air contained in a single breath.
(b) Estimate the amount of weight we lose every day by breathing alone.
22Kevin Zhou Physics Olympiad Handouts
Solution. (a) If you don’t take a deep breath, you can barely blow up a crushed plastic water
bottle with volume 0.5L, so we can take this to be the volume of a breath.
From the ideal gas law V/n = RT/P, a mole of gas takes up 22.4L of volume at atmospheric
pressure and T = 273K, and we round this up to 25L since body temperature is a bit warmer.
Air is mostly nitrogen (N2) with molecular mass 28 g/mol. Then one breath should have a
mass of (0.5L)/(25L/mol)(28g/mol) ≈ 0.6g.
(b) Humans breathe around 10 to 15 times a minute, so let’s use 12.5, giving around 20,000
breaths in a day, corresponding to 12kg of air.
In each breath, 20% of the air is oxygen, and 25% of the oxygen is converted to carbon dioxide,
for a net fraction of 5%. Carbon dioxide (CO2) has a molecular mass of 44 g/mol, and oxygen
is 32 g/mol. Thus we lose a proportion of (44/32 − 1) = 0.375 of the mass of the air we
breathe in every day, corresponding to (0.375)(0.05)(12kg) = 0.2 kg. Most of the (non-water)
mass of the food we eat leaves this way.
[2] Problem 32. How long a line can you write with a pencil?
Solution. Pencil lead is made of graphite, a form of carbon. The spacing between the carbon
atoms is d ∼ 10−10 m, the length of the lead is L ∼ 10cm, and the radius of the lead is r ∼ 1mm.
So if the pencil deposited a layer of carbon one atom thick, we would get a length
r2L
rd
∼ 106
m.
This is clearly an overestimate, but how should we estimate the thickness of the carbon layer?
One way is to note that graphene, a single layer of carbon atoms in a hexagonal lattice, can
famously be made by peeling Scotch tape off graphite. So each layer of tape only contains a few
layers of atoms. If you peel tape off a mark made by a pencil, it won’t immediately remove it, but
there will be noticeable progress after several rounds. So we can guess there is a layer of ∼ 100
carbon atoms, leading to a total length ∼ 104 m.
23
