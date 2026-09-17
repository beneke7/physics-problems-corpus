---
id: kevin-zhou-e2-p002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e2-p002
solution_type: author
source_document: solution-document-kevin-zhou-e2sol
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E2Sol.pdf."
---

[3] Problem 2. Here you’ll develop the method of images for spheres, for use in problems below.
(a) A point charge −q is located at x = a and a point charge Q is located at x = A. Show that
the locus of points with ϕ = 0 is a circle in the xy plane, and hence a spherical shell in space.
(b) Show that the center of the sphere is at the origin provided that
aA = r2
, |q|A = |Q|r
where r is the sphere’s radius. We can use these formulas to characterize the image charge
for a charge near a conducting sphere.
As an aside, the fundamental reason the method of images works for spheres is that electromagnetism
has conformal symmetry, a symmetry under any local rescaling of space which preserves angles.
(One example of a conformal transformation is inversion in Euclidean geometry.) The setup here is
related to the conducting plane by such a transformation.
3
Kevin Zhou Physics Olympiad Handouts
Solution. The problem can be solved immediately if you know about Apollonian circles. Here we’ll
present a straightforward solution using coordinates.
(a) The condition for the potential to vanish is
q
p
(x − a)2 + y2
=
Q
p
(x − A)2 + y2
.
Squaring both sides and clearing denominators, we find
(q2
− Q2
)(x2
+ y2
) + (q2
A2
− Q2
a2
) + 2x(aQ2
− Aq2
) = 0.
This has the form of a conic section, and since the coefficients of x2 and y2 are equal, it’s a
circle. (Strictly speaking, it could also be the empty set, since, for example, x2 +y2 = −1 has
no solutions. But we know there have to be places where ϕ = 0, because it’s positive near the
positive charge and negative near the negative charge, so it must cross zero by continuity.)
(b) The center of the sphere is at the origin if the coefficient of x vanishes,
aQ2
= Aq2
.
Note that this forces a and A to have the same sign. Plugging this in and simplifying, we find
x2
+ y2
= Aa
from which we conclude the radius is r =
√
Aa. (In geometry jargon, this means the locations
of the two point charges are inverse with respect to the sphere.) By combining this with the
first equation, we conclude |q|A = |Q|r.
