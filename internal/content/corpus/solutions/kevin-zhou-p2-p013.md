---
id: kevin-zhou-p2-p013
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p013
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

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
9
Kevin Zhou Physics Olympiad Handouts
