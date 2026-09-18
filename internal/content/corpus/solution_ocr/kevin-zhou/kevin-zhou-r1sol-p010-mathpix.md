---
id: solution-ocr-kevin-zhou-r1sol-p010
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p010]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 10. An object at rest at the origin in frame $S ^ { \prime }$ emits a flash of light uniformly in all directions.
    (a) In frame $S ^ { \prime }$, the expanding shell of radiation is a perfect sphere. Explain why it is also a perfect sphere, at any moment, in any other frame $S$.
    (b) Let frames $S$ and $S ^ { \prime }$ be related as usual. Consider the light emitted at an angle $\theta _ { 0 }$ with respect to the $x ^ { \prime }$ axis in $S ^ { \prime }$. Show that the angle $\theta$ it makes with respect to the $x$ axis in $S$ obeys
$$
\cos \theta = \frac { \cos \theta _ { 0 } + v / c } { 1 + ( v / c ) \cos \theta _ { 0 } } .
$$
In the nonrelativistic limit $v / c \rightarrow 0$, this isn't a surprising result. It's essentially the reason that when you run or drive in rain falling straight down, it'll hit you from the front.
    (c) Therefore, if the object has an ultrarelativistic speed $v \approx c$ in frame $S$, argue that in this frame, most of its radiation comes out in a narrow cone of opening angle $1 / \gamma$ along the direction of travel. This "relativistic beaming" effect is important in the Large Hadron Collider, where high-energy particles decay into lower-energy particles concentrated in narrow "jets".

Now consider the case where the object is at rest, but the light is viewed by a very distant, slowly moving observer going in a circle, with momentarily comoving frame $S$. Because of your result in part (b), the observer will see the object perform an apparent circular motion. When the object is a star and the observer is a telescope on the Earth, this phenomenon is known as stellar aberration.


(d) Suppose the displacement from the sun to the distant star is perpendicular to the plane of orbit of the Earth. If the Earth performs a circular orbit with speed $v \ll c$, find the angular radius $\theta _ { A }$ of the circle the star appears to move in on the sky, to an observer on Earth.
(e) There is another independent effect at play here, which is that the star will also seem to move in a circle due to parallax. Parallax exists even if the speed of light is taken to infinity; it is the result of the Earth moving in its orbit, and hence seeing the star from different angles. If the Earth orbits with radius $r$, and the star of part (d) is a distance $d \gg r$ away, find the apparent angular radius $\theta _ { P }$ of the circle the star moves in.
(f) For a typical star in the galaxy, which is larger, $\theta _ { A }$ or $\theta _ { P }$ ?

The fact that both aberration and parallax escaped detection over centuries of effort was a strong early piece of evidence against heliocentrism. Today we know that they are hard to observe because $c$ and $d$ are very large.

Solution. (a) Since the radiation is emitted from a single point, all the light is emitted at the same time in any frame. From that point on, the shell of radiation is a sphere because the speed of light is the same in all frames.

(b) In $S ^ { \prime }$, the end of the light beam is described by $x ^ { \prime } = c t ^ { \prime } \cos \theta _ { 0 }$. Lorentz transforming to $S$, we see that
$$
( c t , x ) = \gamma c t ^ { \prime } \left( 1 + ( v / c ) \cos \theta _ { 0 } , v / c + \cos \theta _ { 0 } \right) .
$$
Therefore, the angle is
$$
\cos \theta = \frac { x } { c t } = \frac { \cos \theta _ { 0 } + v / c } { 1 + ( v / c ) \cos \theta _ { 0 } } .
$$
This conclusion can also be reached using relativistic velocity addition.
(c) In frame $S ^ { \prime }$, half of the radiation comes out at an angle $\left| \theta _ { 0 } \right| \leq 90 ^ { \circ }$. So let's consider how the radiation at $\theta _ { 0 } = 90 ^ { \circ }$ comes out, in frame $S$. Plugging in $\cos \theta _ { 0 } = 0$, we find
$$
\cos \theta = \frac { v } { c } = \sqrt { 1 - 1 / \gamma ^ { 2 } } .
$$
Using the usual right triangle trick, these corresponds to
$$
\sin \theta = \frac { 1 } { \gamma }
$$
which is a small angle! (In fact, more than half the radiation power comes out within this small angle, because the radiation going forward in $S$ is blueshifted, while the radiation going backwards is redshifted, as one can see with the relativistic Doppler effect.)
(d) Let the star be displaced relative to the Earth along the $z$ axis, and let the Earth's velocity be along its $x$ axis. Then the formula in part (b) applies, where $\theta _ { 0 } = \pi / 2$. We thus have $\cos \left( \pi / 2 + \theta _ { A } \right) = v / c$, and applying the small angle approximation gives $\left| \theta _ { A } \right| = v / c$. (If you find the geometry of the effect confusing, see this diagram.)
(e) Using the small angle approximation, the answer is straightforwardly $\theta _ { P } = r / d$.

(f) Earth's orbit speed is about $30 \mathrm {~km} / \mathrm { s }$, so $v / c \sim 10 ^ { - 4 }$. By contrast, $r$ is a few light-minutes, while $d$ is at the minimum a few light-years, so $r / d \lesssim 10 ^ { - 5 }$ even for the closest stars. So the aberration effect is significantly larger. Aberration and parallax were first seen by Bradley in 1725 and Bessel in 1838. (By the way, aberration applies to the Sun too; the actual position of the Sun, in an inertial frame on Earth, is an angle $10 ^ { - 4 }$ away from where it appears in the sky. But this deflection isn't so practical to measure.)
