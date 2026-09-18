---
id: solution-ocr-kevin-zhou-p2sol-p007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 7. Given $N$ independent measurements of the same quantity with the same uncertainty, $x _ { i } \pm \Delta x$, find the uncertainty of their sum. Hence show the uncertainty of their average is $\Delta x / \sqrt { N }$.
This result is extremely important, since repeating trials is one of the main ways to reduce uncertainty. But it's important to remember that the results derived above hold only for independent measurements. For example, taking a single measurement, then averaging that single number with itself 100 times certainly wouldn't reduce the uncertainty at all!
Solution. The uncertainty of their sum $\Delta X$ can be found by adding in quadrature,
$$
\Delta X = \sqrt { \sum _ { i = 1 } ^ { N } \left( \Delta x _ { i } \right) ^ { 2 } } = \sqrt { N } \Delta x .
$$
Therefore, the uncertainty of the average is
$$
\frac { \Delta X } { N } = \frac { \Delta x } { \sqrt { N } } .
$$

Idea 3: Tangent Line Approximation
If $x$ has uncertainty $\Delta x$, and $f ( x )$ can be approximated by its tangent line,

$$
f \left( x ^ { \prime } \right) \approx f ( x ) + \left( x ^ { \prime } - x \right) f ^ { \prime } ( x ) ,
$$

within the region $x \pm \Delta x$, then the distribution of $f ( x )$ is just a shifted and stretched version of the distribution of $x$. Moreover, $f ( x )$ has approximate uncertainty $\left| f ^ { \prime } ( x ) \right| \Delta x$.

[1] Problem 8. If $x$ is positive and has uncertainty $\Delta x$, find the uncertainties of $x ^ { 2 } , \sqrt { x } , 1 / x , \log x$, and $e ^ { x }$ using the tangent line approximation.
Solution. Using idea 3, we simply read off the answers,
$$
\begin{gathered}
\Delta \left( x ^ { 2 } \right) = 2 x \Delta x \quad \Delta ( \sqrt { x } ) = \frac { \Delta x } { 2 \sqrt { x } } \quad \Delta ( 1 / x ) = \frac { \Delta x } { x ^ { 2 } } \\
\Delta ( \log ( x ) ) = \frac { \Delta x } { x } \quad \Delta \left( e ^ { x } \right) = e ^ { x } \Delta x
\end{gathered}
$$
