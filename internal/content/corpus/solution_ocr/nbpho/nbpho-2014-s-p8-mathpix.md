---
id: solution-ocr-nbpho-2014-s-p8
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2014-mirror-interference]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 8. Mirror interference

1) For a position $y$, the arriving rays form an angle $\alpha = y / L$ (we use the small-angle approximation; the angle is in radians). Then, the optical path difference between the reflected and direct rays is $\Delta = 2 l \cos \alpha \approx 2 N \lambda - N \lambda \alpha ^ { 2 }$. Since there is an additional phase shift for the reflected rays at the reflection from optically denser dielectric material, the total phase shift is $\varphi = 2 \pi \Delta / \lambda = 4 \pi N - \pi \left( 2 N \alpha ^ { 2 } - 1 \right)$. At the maxima, this equals to $2 \pi ( 2 N - n )$, where $n$ is an integer. Therefore, the condition for the maxima is written as

$$
\alpha = \sqrt { \frac { n + 0.5 } { N } } \Rightarrow y _ { n } = L \sqrt { \frac { n + 0.5 } { N } } ,
$$

where $n = 0,1 , \ldots \ll N$.
2) Since the rays of a given order number $n$ form a fixed angle with the $x$-axis, the maxima form on the screen concentric circles; the pitch between the neighbouring circles becomes smaller as the order number $n$ grows (using the length unit defined by the smallest radius, the radii form a sequence $\sqrt { 1 } = 1 , \sqrt { 3 } \approx 1.73$, $\sqrt { 5 } \approx 2.23$, etc).
3) Since the reflected rays can reach the screen only within a hemisphere, the phase shift varies between $\varphi _ { \text {max } } = 4 \pi N + \pi$ and $\varphi _ { \text {min } } = \pi$. The number of maxima

$$
m = \left( \varphi _ { \max } - \varphi _ { \min } \right) / 2 \pi = 2 N .
$$
