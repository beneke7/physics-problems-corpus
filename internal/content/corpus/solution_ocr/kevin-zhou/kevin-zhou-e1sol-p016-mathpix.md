---
id: solution-ocr-kevin-zhou-e1sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 16. In this problem we'll derive essential results about dipoles, which will be used later.
    (a) Using the binomial theorem, derive the dipole potential given above, for a dipole made of a pair of point charges $\pm q$ separated by distance $d$, oriented along the $z$-axis.
    (b) Differentiate this result to find the dipole field,
$$
\mathbf { E } ( \mathbf { r } ) = \frac { p } { 4 \pi \epsilon _ { 0 } r ^ { 3 } } ( 2 \cos \theta \hat { \mathbf { r } } + \sin \theta \hat { \boldsymbol { \theta } } )
$$
where the expression above is in spherical coordinates. (Hint: feel free to use the expression for the gradient in spherical coordinates.)
    (c) Show that this may also be written as
$$
\mathbf { E } ( \mathbf { r } ) = \frac { 1 } { 4 \pi \epsilon _ { 0 } r ^ { 3 } } ( 3 ( \mathbf { p } \cdot \hat { \mathbf { r } } ) \hat { \mathbf { r } } - \mathbf { p } ) .
$$
You don't need to memorize these expressions, but it's useful to remember what a dipole field looks like, the fact that its magnitude is roughly $p / 4 \pi \epsilon _ { 0 } r ^ { 3 }$, and the fact that the numeric prefactor is 2 along the dipole's axis and 1 perpendicular to it.

Solution. (a) Let the charges be at (0, 0, 0) and $( 0,0 , d )$. Then

$$
V ( r , \theta ) = \frac { q } { 4 \pi \epsilon _ { 0 } r } \left( - 1 + \frac { 1 } { \sqrt { 1 - 2 ( d / r ) \cos \theta + ( d / r ) ^ { 2 } } } \right) \approx \frac { q d \cos \theta } { 4 \pi \epsilon _ { 0 } r ^ { 2 } } .
$$


(b) We use the definition $\mathbf { E } = - \nabla V$, along with the gradient in spherical coordinates. Then
$$
E _ { r } = - \frac { \partial V } { \partial r } = \frac { p } { 4 \pi \epsilon _ { 0 } r ^ { 3 } } \cdot 2 \cos \theta
$$
and
$$
E _ { \theta } = - \frac { 1 } { r } \frac { \partial V } { \partial \theta } = \frac { p } { 4 \pi \epsilon _ { 0 } r ^ { 3 } } \cdot \sin \theta ,
$$
as desired.
(c) We see that $\mathbf { p } \cdot \hat { \mathbf { r } } = p \cos \theta$ and $\mathbf { p } = p \hat { \mathbf { z } } = p ( \hat { \mathbf { r } } \cos \theta - \hat { \boldsymbol { \theta } } \sin \theta )$. Thus,
$$
3 ( \mathbf { p } \cdot \hat { \mathbf { r } } ) \hat { \mathbf { r } } - \mathbf { p } = 3 p \cos \theta \hat { \mathbf { r } } - p ( \hat { \mathbf { r } } \cos \theta - \hat { \boldsymbol { \theta } } \sin \theta ) = p ( 2 \cos \theta \hat { \mathbf { r } } + \sin \theta \hat { \boldsymbol { \theta } } ) ,
$$
as desired.
[3] Problem 17. USAPhO 2002, problem B2.
[3] Problem 18. USAPhO 2009, problem B2. This essential problem introduces useful facts about dipole-dipole interactions.

Idea 8
The potential energy of a set of point charges is

$$
U = \frac { 1 } { 4 \pi \epsilon _ { 0 } } \sum _ { i < j } \frac { q _ { i } q _ { j } } { \left| \mathbf { r } _ { i } - \mathbf { r } _ { j } \right| } = \frac { 1 } { 2 } \sum _ { i } q _ { i } V \left( \mathbf { r } _ { i } \right) .
$$

The sum over " $i < j$ " indicates that we consider each pair of distinct point charges once. We don't include the energy of a single point charge due to its interaction with itself, which would be infinite. For a continuous charge distribution, the analogous equations are

$$
U = \frac { 1 } { 2 } \int \rho ( \mathbf { r } ) V ( \mathbf { r } ) d ^ { 3 } \mathbf { r } = \frac { \epsilon _ { 0 } } { 2 } \int | \mathbf { E } ( \mathbf { r } ) | ^ { 2 } d ^ { 3 } \mathbf { r }
$$

Energy doesn't obey the superposition principle, because it's inherently quadratic, not linear.
