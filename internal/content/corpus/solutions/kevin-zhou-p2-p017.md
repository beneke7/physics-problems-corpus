---
id: kevin-zhou-p2-p017
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p017
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

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
12
Kevin Zhou Physics Olympiad Handouts
