---
id: solution-ocr-kevin-zhou-p2sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 1
Trains arrive at a train station every 10 minutes. If I arrive at a random time, and $X$ is the number of minutes I have to wait, what is the standard deviation of $X$ ?


Solution
We see that $X$ can be anywhere between 0 and 10, with all possibilities equally likely, so

$$
p ( x ) = \begin{cases} 1 / 10 & 0 \leq x \leq 10 \\ 0 & \text { otherwise } \end{cases}
$$

where the denominator guarantees the total probability is 1 . We have

$$
\langle X \rangle = \int _ { - \infty } ^ { \infty } x p ( x ) d x = \int _ { 0 } ^ { 10 } \frac { x } { 10 } d x = 5
$$

which makes sense, as I should have to wait half the maximum time on average, and

$$
\left\langle X ^ { 2 } \right\rangle = \int _ { - \infty } ^ { \infty } x ^ { 2 } p ( x ) d x = \int _ { 0 } ^ { 10 } \frac { x ^ { 2 } } { 10 } d x = \frac { 100 } { 3 } .
$$

Then the standard deviation is

$$
\sigma _ { X } = \sqrt { \left\langle X ^ { 2 } \right\rangle - \langle X \rangle ^ { 2 } } = \frac { 5 } { \sqrt { 3 } } \min .
$$
