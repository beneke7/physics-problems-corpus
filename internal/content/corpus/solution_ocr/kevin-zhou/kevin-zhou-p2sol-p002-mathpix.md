---
id: solution-ocr-kevin-zhou-p2sol-p002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 2. Consider an exponentially distributed quantity,
$$
p ( x ) = \begin{cases} a e ^ { - a x } & x \geq 0 \\ 0 & \text { otherwise } \end{cases}
$$
for some $a > 0$. Verify that the total probability is 1 , and compute the mean and standard deviation.

Solution. First, to check normalization,

$$
\int _ { - \infty } ^ { \infty } p ( x ) d x = \int _ { 0 } ^ { \infty } a e ^ { - a x } d x = \int _ { 0 } ^ { \infty } e ^ { - u } d u = 1 - 0 = 1
$$

Now, the mean can be evaluated using integration by parts,

$$
\langle x \rangle = \int _ { 0 } ^ { \infty } x a e ^ { - a x } d x = - \left. x e ^ { - a x } \right| _ { 0 } ^ { \infty } + \int _ { 0 } ^ { \infty } e ^ { - a x } d x = 0 - \left. \frac { 1 } { a } e ^ { - a x } \right| _ { 0 } ^ { \infty } = \frac { 1 } { a } .
$$

To calculate the standard deviation, we must evaluate

$$
\left\langle x ^ { 2 } \right\rangle = \int _ { 0 } ^ { \infty } x ^ { 2 } a e ^ { - a x } d x = 0 + \int _ { 0 } ^ { \infty } ( 2 x ) e ^ { - a x } d x = \frac { 2 } { a } \langle x \rangle = \frac { 2 } { a ^ { 2 } }
$$

We thus conclude

$$
\sigma _ { X } = \sqrt { \left\langle X ^ { 2 } \right\rangle - \langle X \rangle ^ { 2 } } = \sqrt { \frac { 2 } { a ^ { 2 } } - \frac { 1 } { a ^ { 2 } } } = \frac { 1 } { a } .
$$
