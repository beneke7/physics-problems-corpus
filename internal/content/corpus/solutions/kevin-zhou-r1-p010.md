---
id: kevin-zhou-r1-p010
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r1-p010
solution_type: author
source_document: solution-document-kevin-zhou-r1sol
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R1Sol.pdf."
---

[4] Problem 10. An object at rest at the origin in frame S′ emits a flash of light uniformly in all
directions.
(a) In frame S′, the expanding shell of radiation is a perfect sphere. Explain why it is also a
perfect sphere, at any moment, in any other frame S.
(b) Let frames S and S′ be related as usual. Consider the light emitted at an angle θ0 with respect
to the x′ axis in S′. Show that the angle θ it makes with respect to the x axis in S obeys
cosθ =
cosθ0 + v/c
1 + (v/c)cosθ0
.
In the nonrelativistic limit v/c → 0, this isn’t a surprising result. It’s essentially the reason
that when you run or drive in rain falling straight down, it’ll hit you from the front.
(c) Therefore, if the object has an ultrarelativistic speed v ≈ c in frame S, argue that in this frame,
most of its radiation comes out in a narrow cone of opening angle 1/γ along the direction of
travel. This “relativistic beaming” effect is important in the Large Hadron Collider, where
high-energy particles decay into lower-energy particles concentrated in narrow “jets”.
Now consider the case where the object is at rest, but the light is viewed by a very distant, slowly
moving observer going in a circle, with momentarily comoving frame S. Because of your result in
part (b), the observer will see the object perform an apparent circular motion. When the object is
a star and the observer is a telescope on the Earth, this phenomenon is known as stellar aberration.
7
Kevin Zhou Physics Olympiad Handouts
(d) Suppose the displacement from the sun to the distant star is perpendicular to the plane of
orbit of the Earth. If the Earth performs a circular orbit with speed v ≪ c, find the angular
radius θA of the circle the star appears to move in on the sky, to an observer on Earth.
(e) There is another independent effect at play here, which is that the star will also seem to move
in a circle due to parallax. Parallax exists even if the speed of light is taken to infinity; it is
the result of the Earth moving in its orbit, and hence seeing the star from different angles.
If the Earth orbits with radius r, and the star of part (d) is a distance d ≫ r away, find the
apparent angular radius θP of the circle the star moves in.
(f) For a typical star in the galaxy, which is larger, θA or θP ?
The fact that both aberration and parallax escaped detection over centuries of effort was a strong
early piece of evidence against heliocentrism. Today we know that they are hard to observe because
c and d are very large.
Solution. (a) Since the radiation is emitted from a single point, all the light is emitted at the
same time in any frame. From that point on, the shell of radiation is a sphere because the
speed of light is the same in all frames.
(b) In S′, the end of the light beam is described by x′ = ct′ cosθ0. Lorentz transforming to S, we
see that
(ct,x) = γct′
(1 + (v/c)cosθ0,v/c + cosθ0).
Therefore, the angle is
cosθ =
x
ct
=
cosθ0 + v/c
1 + (v/c)cosθ0
.
This conclusion can also be reached using relativistic velocity addition.
(c) In frame S′, half of the radiation comes out at an angle |θ0| ≤ 90◦. So let’s consider how the
radiation at θ0 = 90◦ comes out, in frame S. Plugging in cosθ0 = 0, we find
cosθ =
v
c
=
p
1 − 1/γ2.
Using the usual right triangle trick, these corresponds to
sinθ =
1
γ
which is a small angle! (In fact, more than half the radiation power comes out within this
small angle, because the radiation going forward in S is blueshifted, while the radiation going
backwards is redshifted, as one can see with the relativistic Doppler effect.)
(d) Let the star be displaced relative to the Earth along the z axis, and let the Earth’s velocity
be along its x axis. Then the formula in part (b) applies, where θ0 = π/2. We thus have
cos(π/2 + θA) = v/c, and applying the small angle approximation gives |θA| = v/c. (If you
find the geometry of the effect confusing, see this diagram.)
(e) Using the small angle approximation, the answer is straightforwardly θP = r/d.
8
Kevin Zhou Physics Olympiad Handouts
(f) Earth’s orbit speed is about 30km/s, so v/c ∼ 10−4. By contrast, r is a few light-minutes,
while d is at the minimum a few light-years, so r/d ≲ 10−5 even for the closest stars. So the
aberration effect is significantly larger. Aberration and parallax were first seen by Bradley in
1725 and Bessel in 1838. (By the way, aberration applies to the Sun too; the actual position
of the Sun, in an inertial frame on Earth, is an angle 10−4 away from where it appears in the
sky. But this deflection isn’t so practical to measure.)
