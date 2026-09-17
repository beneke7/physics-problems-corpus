---
id: kevin-zhou-p2-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p006
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[1] Problem 6. Suppose x has uncertainty ∆x and y has uncertainty ∆y, where x and y are indepen-
dent. Explain why the uncertainty of x + y is
∆(x + y) =
p
(∆x)2 + (∆y)2.
This is called “addition in quadrature”. What is the uncertainty of x − y? How about x + x?
Solution. For independent variables, var(X1 + X2) = var(X1) + var(X2). Since our uncertainties
represent the standard deviation, σX =
p
var(X), we have
∆(x + y) =
p
(∆x)2 + (∆y)2.
Since x−y = x+(−y) and ∆(−y) = ∆y, we get that ∆(x−y) = ∆(x+y). Finally, by linearity we
clearly have ∆(x+x) = 2∆x. (The formula above doesn’t apply, because x isn’t independent of x.)
Remark
Note how this differs from “high school” uncertainty analysis. In school, you might be told
to show uncertainty using significant figures, and when adding two things, to keep only the
figures that are significant in both of them. That corresponds to
∆(x + y) = max(∆x,∆y)
which is an underestimate. Or, you might be told that the uncertainty needs to encapsulate
all the possible values, which implies that
∆(x + y) = ∆x + ∆y
which is an overestimate, since the errors could cancel.
