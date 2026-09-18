---
id: solution-ocr-kevin-zhou-p1sol-p033
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p033]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 33. In this problem we'll generalize some of the ideas above to three dimensions, where we need triple integrals. Consider a ball of radius $R$.

(a) In Cartesian coordinates, the volume element is $d V = d x d y d z$. Set up an appropriate triple integral for the volume.
(b) The inner two integrals might look a bit nasty, but we already have essentially done them. Using the result we already know, perform the inner two integrals in a single step, and then perform the remaining integral to derive the volume of a sphere.
(c) In cylindrical coordinates, the volume element is $d V = r d r d \theta d z$. Set up a triple integral for the volume, and perform it. (Hint: this can either be hard, or a trivial extension of part (b), depending on what order of integration you choose.)

(d) In spherical coordinates, the volume element is $d V = r ^ { 2 } d r \sin \phi d \phi d \theta$. Set up a triple integral for the volume, and perform it.
(e) Let the ball have uniform density and total mass $M$. Compute its moment of inertia about the $z$-axis. (Hint: this can be reduced to a single integral if you use an appropriate trick.)

Solution. (a) By analogy to the two-dimensional case,

$$
V = \int _ { - R } ^ { R } d x \int _ { - \sqrt { R ^ { 2 } - x ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - x ^ { 2 } } } d y \int _ { - \sqrt { R ^ { 2 } - x ^ { 2 } - y ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - x ^ { 2 } - y ^ { 2 } } } d z
$$

(b) The inner two integrals just represent the area of a circle, formed by slicing the ball along a plane of constant $x$. Thus, the answer has to be $\pi r ^ { 2 }$ where $r$ is the radius of that circle (as we derived explicitly in the example), and in this case $r ^ { 2 } = R ^ { 2 } - x ^ { 2 }$. Thus, we have
$$
V = \int _ { - R } ^ { R } \pi \left( R ^ { 2 } - x ^ { 2 } \right) d x = \pi R ^ { 3 } \int _ { - 1 } ^ { 1 } 1 - x ^ { 2 } d x = \frac { 4 } { 3 } \pi R ^ { 3 } .
$$
(c) By analogy to the two-dimensional case,
$$
V = \int _ { - R } ^ { R } d z \int _ { 0 } ^ { \sqrt { R ^ { 2 } - z ^ { 2 } } } r d r \int _ { 0 } ^ { 2 \pi } d \theta
$$
Again, the inner two integrals look a bit nasty, but they represent nothing more than the area of a circle of radius $r$, leaving
$$
V = \int _ { - R } ^ { R } \pi \left( R ^ { 2 } - z ^ { 2 } \right) d z
$$
upon which the solution continues just as in part (b).
(d) The triple integral immediately turns into three independent integrals,
$$
V = \int _ { 0 } ^ { R } r ^ { 2 } d r \int _ { 0 } ^ { \pi } \sin \phi d \phi \int _ { 0 } ^ { 2 \pi } d \theta = 4 \pi \int _ { 0 } ^ { R } r ^ { 2 } d r = \frac { 4 } { 3 } \pi R ^ { 3 } .
$$
(e) We are looking for
$$
I = \int x ^ { 2 } + y ^ { 2 } d m
$$
By spherical symmetry, the integrals of $x ^ { 2 } d m , y ^ { 2 } d m$, and $z ^ { 2 } d m$ are all equal. Thus,
$$
I = \frac { 2 } { 3 } \int x ^ { 2 } + y ^ { 2 } + z ^ { 2 } d m
$$
but this integral is now easy to do because it has spherical symmetry. We have
$$
I = \frac { 2 } { 3 } \frac { M } { \frac { 4 } { 3 } \pi R ^ { 3 } } \int _ { 0 } ^ { R } 4 \pi r ^ { 2 } r ^ { 2 } d r = \frac { 2 } { 5 } M R ^ { 2 }
$$
as expected. The same trick can be used to show that the moment of inertia of a spherical shell is $( 2 / 3 ) M R ^ { 2 }$.

[2] Problem 34. Consider a spherical cap that is formed by slicing a sphere of radius $R$ by a plane, so that the altitude from the vertex to the base is $h$. Find the area of its curved surface using an appropriate integral.
Solution. This is a double integral, where it's best to use spherical coordinates. Recall that the volume element in spherical coordinates was $d V = r ^ { 2 } d r \sin \phi d \phi d \theta$. Thus, the area element for a part of this sphere is $d A = R ^ { 2 } \sin \phi d \phi d \theta$. The area integral is
$$
A = R ^ { 2 } \int _ { 0 } ^ { \cos ^ { - 1 } ( ( R - h ) / R ) } \sin \phi d \phi \int _ { 0 } ^ { 2 \pi } d \theta = 2 \pi h R
$$
After doing the trivial inner integral, this approach is just slicing the surface by $d \phi$. You can also equivalently solve it by slicing it in $d z$. In that case the integrand is a bit more complicated, but the bounds are simpler.

## 7 Approximating Integrals
