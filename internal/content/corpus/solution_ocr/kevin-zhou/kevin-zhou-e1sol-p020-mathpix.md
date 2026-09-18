---
id: solution-ocr-kevin-zhou-e1sol-p020
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-p020]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 20. An insulating circular disk of radius $R$ has uniform surface charge density $\sigma$.

(a) Find the electric potential on the rim of the disk.

(b) Find the total electric potential energy stored in the disk.

Solution. (a) Place the origin at a point on the rim and use polar coordinates. Because the polar equation of a circle is $r = 2 R \cos \theta$, we have

$$
V = \int _ { - \pi / 2 } ^ { \pi / 2 } d \theta \int _ { 0 } ^ { 2 R \cos \theta } \frac { \sigma } { 4 \pi \epsilon _ { 0 } } d r = \int _ { - \pi / 2 } ^ { \pi / 2 } \frac { \sigma R } { 2 \pi \epsilon _ { 0 } } \cos \theta d \theta = \frac { \sigma R } { \pi \epsilon _ { 0 } }
$$

(b) Consider building up the ring outward in radius. When we add charges to bring the radius from $r$ to $r + d r$, we do work
$$
d W = V d q = \frac { \sigma r } { \pi \epsilon _ { 0 } } ( 2 \pi r \sigma d r ) = \frac { 2 \sigma ^ { 2 } r ^ { 2 } } { \epsilon _ { 0 } } d r
$$
which means
$$
W = \int _ { 0 } ^ { R } \frac { 2 \sigma ^ { 2 } r ^ { 2 } } { \epsilon _ { 0 } } d r = \frac { 2 \sigma ^ { 2 } R ^ { 3 } } { 3 \epsilon _ { 0 } }
$$
