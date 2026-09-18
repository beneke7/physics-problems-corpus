---
id: solution-ocr-kevin-zhou-p1sol-p015
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p015]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 15. For small $x$, approximate the quantity
$$
\frac { x ^ { 2 } e ^ { x } } { \left( e ^ { x } - 1 \right) ^ { 2 } } - 1
$$
to lowest nontrivial order. That is, find the first nonzero term in the Taylor series.
Solution. After some trial and error, you'll find that the constant and linear terms vanish. Next, we try the quadratic term. For this term, the $e ^ { x }$ in the numerator has to be expanded out to quadratic order. However, the denominator itself is proportional to $x ^ { 2 }$, cancelling with the power of $x ^ { 2 }$ in the numerator, which means that we have to expand the $e ^ { x }$ in the denominator to third order. If we don't do this, we'll still get a quadratic term, but it won't have the right prefactor.
Again suppressing the error terms, we have
$$
\begin{aligned}
\frac { x ^ { 2 } \left( 1 + x + x ^ { 2 } / 2 \right) } { \left( x + x ^ { 2 } / 2 + x ^ { 3 } / 6 \right) ^ { 2 } } - 1 & = \frac { 1 + x + x ^ { 2 } / 2 } { 1 + x + 7 x ^ { 2 } / 12 } - 1 \\
& = \left( 1 + x + x ^ { 2 } / 2 \right) \left( 1 - x + 5 x ^ { 2 } / 12 \right) - 1 \\
& = - \frac { x ^ { 2 } } { 12 }
\end{aligned}
$$
Note that we have been careful to keep the manipulations as simple as possible, e.g. by canceling the $x / x$ as early as possible. If you don't do this, everything gets very messy and it's unclear what is contributing at what order, because of the subtlety pointed out in the above remark. Now, the factor of -1/12 in the final answer is actually the same factor as in the classic result $1 + 2 + 3 + \ldots = - 1 / 12$. The reason will be explained in an example in X1.
