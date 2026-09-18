---
id: solution-ocr-nbpho-2010-s-p7
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2010-satellite]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 7. Satellite (5 points)

i. (3 pts) Before the collisions, the balls achieve the velocity $u = \sqrt { 2 g h }$. The first collison is between the large ball and ground; the velocity of the large ball reverses direction. Let us consider the second collision in the system of the center of mass, which is approximately the same as the large ball's system of reference. In that system, the small ball approaches with velocity $u + u = 2 u$, and after the collisions, departs with the same velocity. In the laboratory system, the velocity is $2 u + u = 3 u = 3 \sqrt { 2 g h }$.
ii. (2 pts) We use the same method as previously. Let designate the velocity of the $i$-th ball before the $i + 1$-st collision by $v _ { i }$. Then, in the system of the $i$-th ball, the $i + 1$-st ball approaches and departs (after the collision) with the velocity $v _ { i } + u$; in the laboratory system, the departing vleocity is

$$
v _ { i + 1 } = \left( v _ { i } + u \right) + v _ { i } = 2 v _ { i } + u .
$$

Bearing in mind that $v _ { 1 } = u$, we find that $v _ { 2 } = 3 u , v _ { 3 } = 7 u$, $v _ { 4 } = 15 u$ etc, $v _ { N } = \left( 2 ^ { N } - 1 \right) u$. So, $v _ { N } = \left( 2 ^ { N } - 1 \right) \sqrt { 2 g h }$, hence

$$
N = \left\lceil \log _ { 2 } \left( 1 + \frac { v _ { N } } { 2 g h } \right) \right\rceil = 11 .
$$

Here, $\lceil \ldots \rceil$ denotes the ceiling function, i.e. rounding up.
Each next ball is 10 times less massive than the previous one, so that the lowest ball must have a mass equal to $M _ { N } \cdot 10 ^ { N - 1 } = 1 \times 10 ^ { 10 } \mathrm {~kg}$.
