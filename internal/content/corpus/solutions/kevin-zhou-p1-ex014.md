---
id: kevin-zhou-p1-ex014
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex014
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 14
Consider an Atwood’s machine, i.e. an ideal pulley with masses m and M hung on each end
of the string. Find the tension in the string.
Solution
Since the equations involved are all linear equations, we expect the answer should also
be simple. It can only depend on g, m, and M, so by dimensional analysis, it must be
proportional to g. By dimensional analysis, this must be multiplied by something with one
net power of mass. Since the answer remains the same if we switch the masses, it should be
symmetric in m and M.
Given all of this, the simplest possible answer would be
T ∝ g(M + m).
To test this, we consider some limiting cases. If M ≫ m, the mass M is essentially in free fall,
so the mass m accelerates upward with acceleration g. Then the tension is approximately
2mg. Similarly, in the case M ≪ m, the tension is approximately 2Mg. These can’t be
satisfied by the form above.
The next simplest option is a quadratic divided by a linear expression. Both of these must
be symmetric, so the most general possibility is
T = g
A(m2 + M2) + BmM
M + m
.
Then the limiting cases can be satisfied if A = 0 and B = 2, giving
T =
2gmM
M + m
.
[1] Problem 25. Use similar reasoning to guess the acceleration of the masses in an Atwood’s machine.
(We will show an even easier way to do this, using “generalized coordinates”, in M4.)
Solution. We know from dimensional analysis that the acceleration is gf(m,M) where f(m,M)
is dimensionless. Thus it should be a fraction.
If either of the masses is much greater than the other mass, then the acceleration should be ±g.
Thus the coefficients of m and M should be ±1. If the masses are equal, then the acceleration
should be zero, so the numerator should be proportional to M − m. Since the denominator should
be different but still have factors of ±1, a simple reasonable guess is
a =
M − m
M + m
g.
which is indeed the real answer.
[1] Problem 26. Find the perimeter of a regular N-gon, if L is the distance from the center to any
of the vertices. By considering a limiting case, use this to derive the circumference of a circle.
31
Kevin Zhou Physics Olympiad Handouts
Solution. By basic trigonometry, the perimeter is 2NLsin(π/N). Then the circumference of a
circle is
lim
N→∞
2NLsin(π/N) = lim
N→∞
2NL
π
N
= 2πL
as expected. We can see that the limit of N sin(π/N) is π through the small angle approximation.
If you want more rigor, you could also say that this is an indeterminate form ∞ × 0, and use
l’Hospital’s rule.
[2] Problem 27 (Morin 1.6). A person throws a ball (at an angle of her choosing, to achieve the
maximum distance) with speed v from the edge of a cliff of height h. Which of the below could be
an expression for the maximal range?
gh2
v2
,
v2
g
,
s
v2h
g
,
v2
g
r
1 +
2gh
v2
,
v2
g

1 +
2gh
v2

,
v2/g
1 − 2gh/v2
.
If desired, try Morin problems 1.13, 1.14, and 1.15 for additional practice.
Solution. First check if they’re all dimensionally correct (they are). When h = 0, the maximum
range as found above with sin(2θ) = 1 is v2/g. Also the maximum range obviously depends on the
height of the edge of the cliff, and there shouldn’t be a case of a finite height or velocity where the
range becomes infinite. This leaves 2 options:
v2
g
r
1 +
2gh
v2
,
v2
g

1 +
2gh
v2

When h is small, the extra distance at the end of the trajectory from dipping down a vertical
distance h can be found with binomial theorem: h, and 2h respectively. Since the trajectory is
symmetric, when h ≈ 0 (to be more concise, h ≪ v2/g) the optimal launch angle is 45 deg, so by
geometry the extra distance should also be h. Thus the correct formula is
v2
g
r
1 +
2gh
v2
.
