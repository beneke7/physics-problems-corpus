---
id: solution-ocr-kevin-zhou-p2sol-p012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 12. Two physical quantities are related by $y = x e ^ { x }$.

(a) If $x$ is measured to be $1.0 \pm 0.1$, find the resulting value of $y$, with uncertainty.
(b) If $y$ is measured to be $2.0 \pm 0.1$, find the resulting value of $x$, with uncertainty.

Solution. (a) To find the central value of $y$, we plug in to get $y = e = 2.7183$. To find the error, we use the tangent line approximation,

$$
\frac { d y } { d x } = e ^ { x } ( x + 1 )
$$

which gives us

$$
\Delta y \approx e ^ { x } ( x + 1 ) \Delta x = 0.54 .
$$

Thus, rounding to a reasonable number of significant figures, we have

$$
y = 2.7 \pm 0.5 .
$$

Note that it would be incorrect to apply the "addition in quadrature" rule for products,

$$
\Delta y = x e ^ { x } \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta \left( e ^ { x } \right) } { e ^ { x } } \right) ^ { 2 } }
$$

because $x$ and $e ^ { x }$ aren't independent.

(b) To find the central value of $x$, we solve the equation $2 = x e ^ { x }$ numerically. This can be done using the method of iteration introduced in P1. That is, we have $x = 2 e ^ { - x }$, so by repeatedly plugging $2 e ^ { - \text {Ans } }$ into the calculator, we get $x = 0.8526$.
Under the tangent line approximation,
$$
\Delta x \approx \frac { \Delta y } { e ^ { x } ( x + 1 ) } = 0.023 .
$$
Rounding to a reasonable number of significant figures, we conclude
$$
x = 0.85 \pm 0.02 .
$$

Idea 4
For practical computations, it is often useful to use relative uncertainties. The relative uncertainty of $x$ is $\Delta x / x$, and can be expressed as a percentage.
