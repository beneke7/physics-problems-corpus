---
id: kevin-zhou-p2-ex004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-ex004
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

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
13
Kevin Zhou Physics Olympiad Handouts
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
