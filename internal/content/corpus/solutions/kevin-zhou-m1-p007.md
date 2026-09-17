---
id: kevin-zhou-m1-p007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-p007
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

[3] Problem 7. Above, we mentioned that guessing an exponential works almost all the time. The
reason is because at the end of the day, the exponential cancels out and we’re left with a polynomial
in ω, which has just the right number of roots. But if there are repeated roots, there are fewer
distinct solutions for ω, and hence not enough solutions.
(a) Write down a second order differential equation with a double root ω, and find its general
solution. (Hint: to help find a good guess, consider the simple case d2x/dt2 = 0, where ω = 0
is the double root. Then generalize your guess to nonzero ω and check that it works.)
(b) You should find that the solution qualitatively changes when you have an exact double root.
However, in the limit where we have two roots that are very close together, ω ± ∆ω with
∆ω ≪ ω, we should get approximately the same solution. Explicitly show how this works.
When would you prefer to use either one?
(c) [A] Consider the most general nth order, linear homogeneous time-translation invariant differ-
ential equation 
an
dn
dtn
+ an−1
dn−1
dtn−1
+ ... + a1
d
dt
+ a0

x = 0.
What does the general solution look like?
Solution. (a) In the case of a double root ω = 0, the differential equation is d2x/dt2 = 0. The
solution we get by guessing an exponential is x(t) = ei(0)t = 1, which is a constant. The other
solution is linear, x(t) = tei(0)t = t.
This leads us to guess that for a double root ω, the two independent solutions are eiωt and
teiωt. In other words, we guess that the differential equation
d2x
dt2
− 2iω
dx
dt
− ω2
x = 0
has the general solution
x(t) = (A + Bt)eiωt
.
Plugging this in shows that it indeed works.
(b) For two close but distinct roots, the general solution is
x(t) = Cei(ω+∆ω)t
+ Dei(ω−∆ω)t
which superficially looks very different from the answer to part (a). However, note that
x(t) = eiωt
Cei∆ω t
+ De−i∆ω t

= eiωt
((C + D)cos(∆ω t) + i(C − D)sin(∆ω t)).
For short times, ∆ω t ≪ 1, we have cos(∆ω t) ≈ 1 and sin(∆ω t) ≈ ∆ω t, up to quadratic and
higher terms, so
x(t) ≈ eiωt
((C + D) + i(C − D)∆ω t)
from which we can identify
A ↔ C + D, B ↔ i(C − D)∆ω.
Intuitively, the Bt term comes from superposing two complex exponentials with opposite sign.
Initially, they just cancel out, but over time the difference builds up, leading to an oscillation
7
Kevin Zhou Physics Olympiad Handouts
with a linearly growing amplitude. (You can see this kind of envelope behavior in two weakly
coupled pendulums, a system which has two nearby oscillation frequencies. We’ll return to
this subject in M4.) Of course, once you get to the point ∆ω t ∼ 1, the two solutions will
start to noticeably differ. The envelope of the oscillation in part (b) will start decreasing,
while that of part (a) will keep growing forever.
So, which solution should we actually use? Math courses teach that the solution of part (a)
should be used if and only if the roots are exactly equal. But in real physical systems, no two
things are ever exactly equal. But does that mean the solution of part (a) should never be
used in practice? Of course not!
Instead, as physicists, we should use the description that’s more useful in a given context.
If ∆ω ≪ ω, and we’re only measuring for a short time ∆ω t ≪ 1, then the solution in part
(a) is intuitive and approximately right. We can read off what the motion looks like directly
from the parameters A and B. On the other hand, the “exact” description using C and D is
clunky: to get a reasonable value of B (without a huge value of A), we would need to tune C
and D to be both huge, but almost exactly opposite each other. Then x(t) would have to be
computed by adding two terms that almost cancel out, which is both less intuitive and less
numerically accurate. So in this case we would prefer using the description in terms of A and
B, though of course, if we wanted a result valid for ∆ω t ≳ 1, we would have to use C and D.
(c) Guessing eiωt gives
an(iω)n
+ an−1(iω)n−1
+ ... + a0 = 0.
In the case where the roots are distinct, there are n possible values for ω, and hence n
parameters in our trial solution,
x(t) =
n X
i=1
Aieiωit
.
Since the differential equation has order n, there are n parameters needed to specify the
solution, so this is the general solution. If ωi is a double root, then both eiωit and teiωit are
solutions. For a triple root, t2eiωit is also a solution, and so on.
Remark
You might be wondering how to solve more general differential equations. In M4, we will
consider three extensions of the above techniques. We’ll use the idea of normal modes
to solve systems of such differential equations, add driving forces to make the equations
inhomogeneous, and use the adiabatic theorem to approximately solve non-time-translation-
invariant equations where the coefficients change slowly in time.
Of course, this just scratches the surface of the subject, and solving more general differential
equations can be orders of magnitude harder. We won’t try to solve nonlinear differential
equations, as there is no general technique for doing so, and the answer is often an obscure
special function. (However, such equations will occasionally appear in later problems.) On the
other hand, linear differential equations with general time-dependence are more approachable,
and the following problem illustrates the most basic method for solving them.
