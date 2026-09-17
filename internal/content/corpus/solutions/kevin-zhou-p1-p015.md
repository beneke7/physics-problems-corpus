---
id: kevin-zhou-p1-p015
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p015
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[3] Problem 15. For small x, approximate the quantity
x2ex
(ex − 1)2
− 1
to lowest nontrivial order. That is, find the first nonzero term in the Taylor series.
Solution. After some trial and error, you’ll find that the constant and linear terms vanish. Next,
we try the quadratic term. For this term, the ex in the numerator has to be expanded out to
quadratic order. However, the denominator itself is proportional to x2, cancelling with the power
of x2 in the numerator, which means that we have to expand the ex in the denominator to third
order. If we don’t do this, we’ll still get a quadratic term, but it won’t have the right prefactor.
Again suppressing the error terms, we have
x2(1 + x + x2/2)
(x + x2/2 + x3/6)2
− 1 =
1 + x + x2/2
1 + x + 7x2/12
− 1
= (1 + x + x2
/2)(1 − x + 5x2
/12) − 1
= −
x2
12
.
Note that we have been careful to keep the manipulations as simple as possible, e.g. by canceling
the x/x as early as possible. If you don’t do this, everything gets very messy and it’s unclear what is
contributing at what order, because of the subtlety pointed out in the above remark. Now, the factor
of −1/12 in the final answer is actually the same factor as in the classic result 1+2+3+... = −1/12.
The reason will be explained in an example in X1.
