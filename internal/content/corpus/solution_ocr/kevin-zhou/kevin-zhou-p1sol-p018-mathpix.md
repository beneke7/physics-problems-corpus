---
id: solution-ocr-kevin-zhou-p1sol-p018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 18. Consider an electric charge $q$ placed at $x = 0$ and a charge $- q$ placed at $x = d$. For $x > d$, the electric field along the $x$ axis is
$$
E ( x ) = \frac { q } { 4 \pi \epsilon _ { 0 } } \left( \frac { 1 } { x ^ { 2 } } - \frac { 1 } { ( x - d ) ^ { 2 } } \right) .
$$
For $x \gg d$, use the binomial theorem to approximate the field.
Solution. Use the binomial theorem with $d / x \ll 1$ to get
$$
\frac { 1 } { ( x - d ) ^ { 2 } } = \frac { 1 } { x ^ { 2 } } \left( 1 + \frac { 2 d } { x } \right) .
$$
Then
$$
E ( x ) = - \frac { 2 q d } { 4 \pi \epsilon _ { 0 } x ^ { 3 } } = - \frac { q d } { 2 \pi \epsilon _ { 0 } x ^ { 3 } } .
$$
This is the on-axis field of an electric dipole.
