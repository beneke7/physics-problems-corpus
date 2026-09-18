---
id: kevin-zhou-mrev-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-mrev-p001
solution_type: author
source_document: solution-document-kevin-zhou-mrevsol
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/MRevSol.pdf."
---

[2] Problem 1. At some point in your life, you might have to buy a very expensive item of price P
financed by a loan. If the loan has a monthly interest rate r ≪ 1 (e.g. r = 1% means your debt
grows by 1% per month), then it turns out you can pay it all off in N months if you pay
C =
r(1 + r)N
(1 + r)N − 1
P
per month. For example, if r = 0 then C = P/N.
(a) Find an approximation for C valid for small rN.
(b) Find an approximation for C valid for large rN.
Solution. (a) We apply the binomial approximation to the (1+r)N factors, but we have to be a
bit careful. The leading term in the denominator is order r, so if we want the first correction
in r, we need to compute the denominator to order r2. Thus,
C ≈
r(1 + rN)
(1 + rN + r2N2/2) − 1
P =
1 + rN
1 + rN/2
P
N
≈
P
N

1 +
rN
2

.
This makes sense, as when we average across the payment of the whole loan, the interest
charged per month is r(P/2).
(b) In this case, we have (1 + r)N ≈ erN ≫ 1. Then
C ≈
rerN
erN − 1
P ≈ rP
which makes sense, as most of your payment per month just goes to the interest.
2 Statics and Linear Dynamics
