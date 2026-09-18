---
id: solution-ocr-kevin-zhou-e2sol-p002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e2-p002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 2. Here you'll develop the method of images for spheres, for use in problems below.

(a) A point charge $- q$ is located at $x = a$ and a point charge $Q$ is located at $x = A$. Show that the locus of points with $\phi = 0$ is a circle in the $x y$ plane, and hence a spherical shell in space.
(b) Show that the center of the sphere is at the origin provided that
$$
a A = r ^ { 2 } , \quad | q | A = | Q | r
$$
where $r$ is the sphere's radius. We can use these formulas to characterize the image charge for a charge near a conducting sphere.

As an aside, the fundamental reason the method of images works for spheres is that electromagnetism has conformal symmetry, a symmetry under any local rescaling of space which preserves angles. (One example of a conformal transformation is inversion in Euclidean geometry.) The setup here is related to the conducting plane by such a transformation.


Solution. The problem can be solved immediately if you know about Apollonian circles. Here we'll present a straightforward solution using coordinates.

(a) The condition for the potential to vanish is
$$
\frac { q } { \sqrt { ( x - a ) ^ { 2 } + y ^ { 2 } } } = \frac { Q } { \sqrt { ( x - A ) ^ { 2 } + y ^ { 2 } } } .
$$
Squaring both sides and clearing denominators, we find
$$
\left( q ^ { 2 } - Q ^ { 2 } \right) \left( x ^ { 2 } + y ^ { 2 } \right) + \left( q ^ { 2 } A ^ { 2 } - Q ^ { 2 } a ^ { 2 } \right) + 2 x \left( a Q ^ { 2 } - A q ^ { 2 } \right) = 0 .
$$
This has the form of a conic section, and since the coefficients of $x ^ { 2 }$ and $y ^ { 2 }$ are equal, it's a circle. (Strictly speaking, it could also be the empty set, since, for example, $x ^ { 2 } + y ^ { 2 } = - 1$ has no solutions. But we know there have to be places where $\phi = 0$, because it's positive near the positive charge and negative near the negative charge, so it must cross zero by continuity.)
(b) The center of the sphere is at the origin if the coefficient of $x$ vanishes,
$$
a Q ^ { 2 } = A q ^ { 2 } .
$$
Note that this forces $a$ and $A$ to have the same sign. Plugging this in and simplifying, we find
$$
x ^ { 2 } + y ^ { 2 } = A a
$$
from which we conclude the radius is $r = \sqrt { A a }$. (In geometry jargon, this means the locations of the two point charges are inverse with respect to the sphere.) By combining this with the first equation, we conclude $| q | A = | Q | r$.
