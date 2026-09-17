---
id: kevin-zhou-p2-p009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p009
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

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
6
Kevin Zhou Physics Olympiad Handouts
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
