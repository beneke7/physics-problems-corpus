---
id: solution-ocr-kevin-zhou-m5sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m5-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. Basic moment of inertia computations.

(a) Compute the moment of inertia for an $L _ { x } \times L _ { y }$ rectangular plate about an axis passing perpendicular to it through the center.
(b) Compute the moment of inertia for a uniform disc of radius $R$ and mass $M$, about an axis perpendicular to it through its center. What about an axis lying in the disc, passing through its center?
(c) Compute the moment of inertia of a uniform solid cone of mass $M$, with height $H$ and a base of radius $R$, about its symmetry axis.

Solution. (a) We have

$$
I _ { y } = \int _ { - L _ { x } / 2 } ^ { L _ { x } / 2 } x ^ { 2 } \left( M / L _ { x } \right) d x = \frac { 1 } { 12 } M L _ { x } ^ { 2 }
$$

with a similar expression for $I _ { x }$, giving an answer of $M \left( L _ { x } ^ { 2 } + L _ { y } ^ { 2 } \right) / 12$.

(b) By direct integration,
$$
I = \int _ { 0 } ^ { R } r ^ { 2 } \left( M / \pi R ^ { 2 } \right) 2 \pi r d r = \frac { 1 } { 2 } M R ^ { 2 }
$$
For an axis lying in the disc, the answer is half as much, $M R ^ { 2 } / 4$, by the perpendicular axis theorem.
(c) First off, we know the height $H$ doesn't matter, because we can stretch the cone along its symmetry axis without changing the answer. Letting the density be $\rho$, we can integrate over the discs making up the cone,
$$
I = \int d I = \int \frac { 1 } { 2 } ( d m ) r ^ { 2 } = \int _ { 0 } ^ { H } \frac { 1 } { 2 } \left( \rho \pi r ^ { 2 } d h \right) r ^ { 2 }
$$

where the radius of the disc at height $h$ is, in some set of coordinates, $r ( h ) = R ( h / H )$. Plugging this in, we get

$$
I = \int _ { 0 } ^ { H } \frac { \pi } { 2 } \rho R ^ { 4 } \frac { h ^ { 4 } } { H ^ { 4 } } d h = \frac { \pi \rho R ^ { 4 } H } { 10 } .
$$

It remains to find $\rho$, by noting that

$$
M = \int d m = \int _ { 0 } ^ { H } \rho \pi r ^ { 2 } d h = \rho \pi \frac { R ^ { 2 } } { H ^ { 2 } } \int _ { 0 } ^ { H } h ^ { 2 } d h = \frac { \pi \rho R ^ { 2 } H } { 3 } .
$$

Plugging in the result for $\rho$ gives

$$
I = \frac { 3 } { 10 } M R ^ { 2 } .
$$

This makes sense, as it's somewhat less than the moment of inertia of a uniform disc; a cone has comparatively more of its mass closer to the axis.
