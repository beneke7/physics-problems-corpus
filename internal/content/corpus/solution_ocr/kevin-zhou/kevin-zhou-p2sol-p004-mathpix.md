---
id: solution-ocr-kevin-zhou-p2sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. We say $X$ is normally distributed if

$$
p ( x ) \propto e ^ { - a ( x - b ) ^ { 2 } }
$$

for some $a > 0$. For simplicity, let's shift $X$ so that it's centered about $x = 0$, so

$$
p ( x ) \propto e ^ { - a x ^ { 2 } } .
$$

You may use the result given in P1,

$$
\int _ { - \infty } ^ { \infty } e ^ { - x ^ { 2 } } d x = \sqrt { \pi } .
$$

Find the constant of proportionality in $p ( x )$, the mean, and the standard deviation.
Solution. Let $p ( x ) = k e ^ { - a x ^ { 2 } }$. We fix the constant $k$ by demanding normalization,

$$
\int _ { - \infty } ^ { \infty } k e ^ { - a x ^ { 2 } } d x = \int _ { - \infty } ^ { \infty } \frac { k } { \sqrt { a } } e ^ { - u ^ { 2 } } d u = 1
$$

Using the provided integral, we conclude

$$
k = \sqrt { \frac { a } { \pi } } .
$$

The mean is clearly zero, since the distribution is symmetric about that point. Thus, we have

$$
\operatorname { var } X = \left\langle X ^ { 2 } \right\rangle = \sqrt { \frac { a } { \pi } } \int _ { - \infty } ^ { \infty } x ^ { 2 } e ^ { - a x ^ { 2 } } d x = \frac { 1 } { a \sqrt { \pi } } \int _ { - \infty } ^ { \infty } u ^ { 2 } e ^ { - u ^ { 2 } } d u
$$

This remaining integral can be evaluated using integration by parts,

$$
\int _ { - \infty } ^ { \infty } u ^ { 2 } e ^ { - u ^ { 2 } } d u = - \left. \frac { 1 } { 2 } u e ^ { - u ^ { 2 } } \right| _ { - \infty } ^ { \infty } + \frac { 1 } { 2 } \int _ { - \infty } ^ { \infty } e ^ { - u ^ { 2 } } d u = 0 + \frac { \sqrt { \pi } } { 2 }
$$

from which we conclude

$$
\operatorname { var } X = \frac { 1 } { a \sqrt { \pi } } \frac { \sqrt { \pi } } { 2 } , \quad \sigma = \frac { 1 } { \sqrt { 2 a } } .
$$


Remark
As you saw in problem 4, normal distributions are characterized entirely by their mean and standard deviation. Moreover, the central limit theorem roughly states that the sum of many independent random variables is approximately normally distributed. As a result, final experimental results are often approximately normally distributed, which means we can describe them with only the mean and standard deviation. That is the reason why the next part of this problem set will focus on calculating standard deviations (i.e. uncertainties).
