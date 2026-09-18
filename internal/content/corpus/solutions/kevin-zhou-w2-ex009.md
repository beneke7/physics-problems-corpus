---
id: kevin-zhou-w2-ex009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w2-ex009
solution_type: author
source_document: solution-document-kevin-zhou-w2sol
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W2Sol.pdf."
---

Example 9
How close does a Sun-like star have to be in order to see it with the naked eye in daylight?
Solution
Let the distance to the Sun be d, and the distance to the star be D. Then the ratio of
intensities of the two is naively
Istar
ISun
=

d
D
 2
.
This suggests the star is hard to see if D > d, which is always true. But this is too pessimistic,
because the light from the Sun comes from all directions in the sky, while the light from the
star comes from only a single direction. The actual ratio we want to calculate is
Istar/Ωstar
ISun/2π
=

d
D
 2
2π
Ωstar
where Ωstar is the apparent solid angle of the star in the sky.
This in turn is given by the diffraction limit: if your pupils have radius r, then
Ωstar ∼ (∆θ)2
∼ (λ/r)2
.
The star should be visible above daylight if the ratio above is at least one or so, which means
the maximum distance is
D ∼
r
λ
d ∼
1.5mm
600nm
(1AU) ∼ 5 × 103
AU ∼ 0.1ly.
This is still closer than the closest other star, so you would need a telescope to see any.
Notice how this differs from a microscope! Microscopes are used to resolve finer details on a
small object. But most telescopes can’t resolve any of the details of any but the nearest stars.
Increasing the size of the telescope has two benefits: increasing the amount of light that goes
through, and improving the contrast due to decreasing the blurring due to diffraction.
[3] Problem 18 (PPP 126). A compact disc contains approximately 650MB of information. Estimate
the size of one bit on a CD using an ordinary ruler. Confirm your estimate using a laser pointer.
(If you can’t find a CD, a DVD will also work.)
Solution. CDs have a radius of around 6 cm and an inner radius of around 2.5 cm, giving a
surface area of around 0.01 m2. Then the area of 1 bit can be found by dividing the total area
by 650 × 106 × 8 (since there are 8 bits in a byte), and the square root of that would give the
approximate size of a bit as 1 micrometer.
The bits are arranged in concentric rings, so a laser pointer hitting part of the CD will effectively
see a reflective diffraction grating, with the slits parallel to the tangential direction on the CD. The
resulting diffraction peaks can be used to find the ring spacing, as you can try at home!
[3] Problem 19. NBPhO 2005, problem 5. A simple but subtle interference problem.
23
Kevin Zhou Physics Olympiad Handouts
Solution. See the official solutions as usual. However, as pointed out by Stefan Ivanov here, there
are typos in the last part. To do it right, note that the relative speed of the pattern and fluid is
v′
= ∆v ± v, v = 0.37m/s, ∆v =
c
α
δλ
λ
= 36.6m/s
where v is the speed you calculated in part (b). We see that ∆v dominates, so the answer is
ν′
=
v′ α
λ
≈
∆v α
λ
=
cδλ
λ2
= 5.0MHz
with an uncertainty of 1% depending on the sign of v.
6 Real World Examples
These questions are not neat and self contained – they illustrate real physical phenomena, for which
you’ll have to guess an appropriate physical model. Of course, you have the massive advantage of
knowing that all of the problems involve interference and diffraction... or do they? In some cases,
it might be useful to think about ray tracing, discussed in W3.
[2] Problem 20. Take a pair of glasses, exhale on them to fog them up, and put them on and look at
a light. You should see something strange; why does it happen?
Solution. Your breath creates a lot of little water droplets on the glasses, and you see their combined
diffraction pattern, which should form a disc around the light with blue in the middle and red on
the outside. If you vary the parameters, you can change how it looks, e.g. if you exhale a lot, you
can see a faint second disk.
[2] Problem 21 (Povey). Consider a reflective metal tube, such as a length of copper pipe, with length
L and radius r. If you place a diffuse light source at one end of the tube, on the axis of symmetry,
and look at it from the other end, with your eye also on the axis of symmetry, then you will see
both the light source and bright circular rings around it. Why does this happen? Assuming the
light has wavelength λ, calculate the angles of the bright rings.
Solution. You can tell that a diffraction explanation is implausible, because the copper pipe is too
big for diffraction effects to be prominent, and a diffuse light source probably isn’t coherent, yet
the result is sharp. Instead, the effect is due to geometric optics.
The closest ring is due to light that bounces off the inner surface of the pipe, then arrives back at
the middle. By basic trigonometry, the angle is θ = tan−1(2r/L). Higher rings are due to multiple
bounces, and arrive at angles tan−1(2nr/L). There are infinitely many rings, though they blur
together at high n.
[2] Problem 22. If you look down a large body of water before sunset, the sun’s reflection will appear
very long. Why?
24
Kevin Zhou Physics Olympiad Handouts
Solution. Because of the large length scales involved, and the absence of dispersion, we can tell
that this is a geometrical optics effect. The explanation is as follows. If the water’s surface was
perfectly flat, then the sun’s reflection would be at a point. Because there are waves, different parts
of the surface are tilted with respect to the vertical by a small angle, so that other light rays can
also make it to your eye.
Because the sun is low in the sky, this effect is much more dramatic in the forward/backward
direction. For instance, suppose the ideal reflection occurs a distance d away from you, and your
height is h ≪ d, so that the light ray enters your eye at a low angle θ ≈ h/d to the horizontal. Then
sunlight can also hit the water a distance 2d away from you, bounced off a tilted water surface,
and enter your eye at an angle h/(2d) = θ/2. Just a small change θ/2 in the direction of reflection
can double the distance of the reflection! Such an enhancement does not occur in the left/right
direction, so the reflection of the sun looks much longer than it is wide.
