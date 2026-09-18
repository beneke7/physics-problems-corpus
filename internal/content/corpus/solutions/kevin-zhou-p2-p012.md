---
id: kevin-zhou-p2-p012
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p012
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

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
s
∆x
x
 2
+

∆(ex)
ex
 2
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
8
Kevin Zhou Physics Olympiad Handouts
Idea 4
For practical computations, it is often useful to use relative uncertainties. The relative
uncertainty of x is ∆x/x, and can be expressed as a percentage.
