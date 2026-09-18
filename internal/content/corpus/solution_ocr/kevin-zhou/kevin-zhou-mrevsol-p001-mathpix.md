---
id: solution-ocr-kevin-zhou-mrevsol-p001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-mrev-p001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 1. At some point in your life, you might have to buy a very expensive item of price $P$ financed by a loan. If the loan has a monthly interest rate $r \ll 1$ (e.g. $r = 1 \%$ means your debt grows by 1\% per month), then it turns out you can pay it all off in $N$ months if you pay
$$
C = \frac { r ( 1 + r ) ^ { N } } { ( 1 + r ) ^ { N } - 1 } P
$$
per month. For example, if $r = 0$ then $C = P / N$.
    (a) Find an approximation for $C$ valid for small $r N$.
    (b) Find an approximation for $C$ valid for large $r N$.

Solution. (a) We apply the binomial approximation to the $( 1 + r ) ^ { N }$ factors, but we have to be a bit careful. The leading term in the denominator is order $r$, so if we want the first correction in $r$, we need to compute the denominator to order $r ^ { 2 }$. Thus,

$$
C \approx \frac { r ( 1 + r N ) } { \left( 1 + r N + r ^ { 2 } N ^ { 2 } / 2 \right) - 1 } P = \frac { 1 + r N } { 1 + r N / 2 } \frac { P } { N } \approx \frac { P } { N } \left( 1 + \frac { r N } { 2 } \right) .
$$

This makes sense, as when we average across the payment of the whole loan, the interest charged per month is $r ( P / 2 )$.


(b) In this case, we have $( 1 + r ) ^ { N } \approx e ^ { r N } \gg 1$. Then
$$
C \approx \frac { r e ^ { r N } } { e ^ { r N } - 1 } P \approx r P
$$
which makes sense, as most of your payment per month just goes to the interest.

## 2 Statics and Linear Dynamics
