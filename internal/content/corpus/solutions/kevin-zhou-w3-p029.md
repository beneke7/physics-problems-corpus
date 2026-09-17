---
id: kevin-zhou-w3-p029
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w3-p029
solution_type: author
source_document: solution-document-kevin-zhou-w3sol
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W3Sol.pdf."
---

[2] Problem 29. Some basic questions about ray tracing.
(a) If two thin converging lenses of focal length f1 and f2 are placed right next to each other,
what is the effective focal length f of their combination?
(b) Show that if you have height h, you can see your entire body in a vertical mirror of length
h/2 whose top is at eye level, no matter how close or far you stand from it. Nonetheless, when
people want to look at their whole body in the mirror, they typically stand back. Why?
(c) A candle is placed behind a converging lens. An image is formed on a screen on the other side
of the lens. Now suppose that the top half of the lens is covered with a black cloth. Describe
how the image changes.
Solution. (a) For an incoming ray at height y, the first deflects the light by an angle y/f1, and
the second by an angle y/f2. So the optical powers of the lenses add, and f = f1f2/(f1 + f2).
(b) This is clear from placing your image an equal distance behind the mirror and drawing
similar triangles. It is a popular “gotcha” question in the physics education literature, which
supposedly proves that many people don’t know how their own eyes work. But there are good
reasons to stand back. If you’re right next to the mirror, the image of your head will be right
next to you, while the image of your feet will be several feet away, so you won’t be able to
focus the light from both at once. Also, your sharpest vision only occupies a small part of the
center of your field of view. So to look at yourself, your eyes have to constantly dart all the
way up and down while adjusting their focus. This is fixed by standing back.
(c) It is tempting to say that half of the candle’s image disappears, but that’s not right. Ray
tracing shows that you can get a complete image of the candle, since there are always rays
that pass through the bottom half of the lens. Instead, by blocking half the lens, the image
gets half as bright.
[3] Problem 30.  ^ 1 0USAPhO 2024, problem A3. A series of optics exercises relevant for real cameras.
[3] Problem 31.  ^ 1 0USAPhO 2026, problem A1. This question is straightforward, but assumes you
know the definition P = 1/f of optical power (expressed in “diopters”, which just means m−1).
Idea 8: Fermat’s Principle
For fixed starting and ending points, light always takes the path of least time. This implies
that if light from point P is all focused at point P′, then all the relevant paths from P to
P′ take the same time. This principle is completely equivalent to the laws of reflection and
refraction above, but may be more useful in certain situations.
20
Kevin Zhou Physics Olympiad Handouts
