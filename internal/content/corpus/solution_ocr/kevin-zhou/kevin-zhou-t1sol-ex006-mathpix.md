---
id: solution-ocr-kevin-zhou-t1sol-ex006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-ex006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 6
A free particle in one dimension, $E = p ^ { 2 } / 2 m$, bouncing between two hard walls has energy levels $E _ { n } = n ^ { 2 } E _ { 0 }$ for $n = 1,2 , \ldots$, as we will show in X1. Show that the average energy at high temperatures is consistent with the equipartition theorem.

Solution
The probability of being in energy level $n$ is proportional to $e ^ { - n ^ { 2 } E _ { 0 } / k _ { B } T }$. Therefore, by normalizing the probability distribution, the probability itself is

$$
p _ { n } = \frac { e ^ { - n ^ { 2 } E _ { 0 } / k _ { B } T } } { \sum _ { m = 1 } ^ { \infty } e ^ { - m ^ { 2 } E _ { 0 } / k _ { B } T } } .
$$


Therefore, the average value of the energy is

$$
\langle E \rangle = \sum _ { n = 1 } ^ { \infty } n ^ { 2 } E _ { 0 } p _ { n } = \frac { \sum _ { n = 1 } ^ { \infty } n ^ { 2 } E _ { 0 } e ^ { - n ^ { 2 } E _ { 0 } / k _ { B } T } } { \sum _ { n = 1 } ^ { \infty } e ^ { - n ^ { 2 } E _ { 0 } / k _ { B } T } } .
$$

At high temperatures, this quantum result should reduce to the classical result of the equipartition theorem. Note that at such temperatures, the typical values of $n$ will be very high. Therefore, we can treat the sums over $n$ as continuous integrals,

$$
\langle E \rangle \approx \frac { \int _ { 0 } ^ { \infty } d n n ^ { 2 } E _ { 0 } e ^ { - n ^ { 2 } E _ { 0 } / k _ { B } T } } { \int _ { 0 } ^ { \infty } d n e ^ { - n ^ { 2 } E _ { 0 } / k _ { B } T } } = \frac { \int _ { 0 } ^ { \infty } x ^ { 2 } e ^ { - x ^ { 2 } } d x } { \int _ { 0 } ^ { \infty } e ^ { - x ^ { 2 } } d x } k _ { B } T
$$

where we switched to the dimensionless variable $x = \sqrt { n ^ { 2 } E _ { 0 } / k _ { B } T }$. Evaluating either of these integrals is tricky, but we can relate them using integration by parts,

$$
\int _ { 0 } ^ { \infty } x ^ { 2 } e ^ { - x ^ { 2 } } d x = \int _ { 0 } ^ { \infty } \left( 2 x e ^ { - x ^ { 2 } } d x \right) \frac { x } { 2 } = \frac { 1 } { 2 } \int _ { 0 } ^ { \infty } e ^ { - x ^ { 2 } } d x
$$

Therefore, the ratio of integrals is $1 / 2$, giving an average energy of $k _ { B } T / 2$ as expected.
