---
id: kevin-zhou-p1-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p006
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[2] Problem 6. We are given the integral
Z ∞
−∞
e−x2
dx =
√
π.
For positive a, find the value of the integral
Z ∞
−∞
e−ax2+bx+c
dx
and verify that your answer makes dimensional sense.
5
Kevin Zhou Physics Olympiad Handouts
Solution. We can simply factor out the dependence on c, and get rid of the a in the exponent by
taking u =
√
ax, to get
ec
√
a
Z ∞
−∞
e−u2+(b/
√
a)u
du.
To get rid of the pesky linear term in the exponent, we note that
−v2
= −

u −
b
2
√
a
2
= −u2
+
b
√
a
u −
b2
4a
so that we can “complete the square” in the exponent by working in terms of v, for
ec+b2/4a
√
a
Z ∞
−∞
e−v2
dv = ec+b2/4a
r
π
a
.
To check this makes sense, let’s again suppose that [x] = m, which implies [a] = m−2, [b] = m−1,
and [c] = 1. The overall integral must have dimensions of m, which it does, and the argument of
the exponent must be dimensionless, which it is.
Remark
Consider the value of the definite integral
Z x
−∞
e−x′2
dx′
.
You can try all day to compute the value of this integral, using all the integration tricks
you know, but nothing will work. The function e−x2
simply doesn’t have an antiderivative
in terms of the functions you already know, i.e. in terms of polynomials, exponents and
logarithms, and trigonometric functions (for more discussion, see here).
If you ask a computer algebra system like Mathematica, it’ll spit out something involv-
ing erf(x), which is defined by being an antiderivative of e−x2
. But is this really an
“analytic” solution? Isn’t that just saying “the integral of e−x2
is equal to the integral
of e−x2
”? Well, like many things in math, it depends on what the meaning of the word “is” is.
The fact is, the set of functions we regard as “elementary” is arbitrary; we just choose a set
that’s big enough to solve most of the problems we want, and small enough to attain fluency
with. (Back in the days before calculators, it just meant all the functions whose values were
tabulated in the references on hand.) If you’re uncomfortable with erf(x), note that a similar
thing would happen if a little kid asked you what the ratio of the opposite to adjacent sides
of a right triangle is. You’d say tan(x), but they could say it’s tautological, because the only
way to define tan(x) at their level is as the ratio of opposite to adjacent sides. Similarly,
1/x has no elementary antiderivative – unless you count log(x) as elementary, but ultimately
log(x) is simply defined to be such an antiderivative. It’s all tautology, but it’s still useful.
