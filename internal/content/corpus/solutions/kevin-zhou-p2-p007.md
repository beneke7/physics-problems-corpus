---
id: kevin-zhou-p2-p007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p007
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

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
