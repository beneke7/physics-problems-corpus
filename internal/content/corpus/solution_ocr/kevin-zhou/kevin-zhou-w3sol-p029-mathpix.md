---
id: solution-ocr-kevin-zhou-w3sol-p029
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w3-p029]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 29. Some basic questions about ray tracing.
    (a) If two thin converging lenses of focal length $f _ { 1 }$ and $f _ { 2 }$ are placed right next to each other, what is the effective focal length $f$ of their combination?
    (b) Show that if you have height $h$, you can see your entire body in a vertical mirror of length $h / 2$ whose top is at eye level, no matter how close or far you stand from it. Nonetheless, when people want to look at their whole body in the mirror, they typically stand back. Why?
    (c) A candle is placed behind a converging lens. An image is formed on a screen on the other side of the lens. Now suppose that the top half of the lens is covered with a black cloth. Describe how the image changes.

Solution. (a) For an incoming ray at height $y$, the first deflects the light by an angle $y / f _ { 1 }$, and the second by an angle $y / f _ { 2 }$. So the optical powers of the lenses add, and $f = f _ { 1 } f _ { 2 } / \left( f _ { 1 } + f _ { 2 } \right)$.


(b) This is clear from placing your image an equal distance behind the mirror and drawing similar triangles. It is a popular "gotcha" question in the physics education literature, which supposedly proves that many people don't know how their own eyes work. But there are good reasons to stand back. If you're right next to the mirror, the image of your head will be right next to you, while the image of your feet will be several feet away, so you won't be able to focus the light from both at once. Also, your sharpest vision only occupies a small part of the center of your field of view. So to look at yourself, your eyes have to constantly dart all the way up and down while adjusting their focus. This is fixed by standing back.
(c) It is tempting to say that half of the candle's image disappears, but that's not right. Ray tracing shows that you can get a complete image of the candle, since there are always rays that pass through the bottom half of the lens. Instead, by blocking half the lens, the image gets half as bright.
[3] Problem 30. USAPhO 2024, problem A3. A series of optics exercises relevant for real cameras.
[3] Problem 31. USAPhO 2026, problem A1. This question is straightforward, but assumes you know the definition $P = 1 / f$ of optical power (expressed in "diopters", which just means $\mathrm { m } ^ { - 1 }$ ).

Idea 8: Fermat's Principle
For fixed starting and ending points, light always takes the path of least time. This implies that if light from point $P$ is all focused at point $P ^ { \prime }$, then all the relevant paths from $P$ to $P ^ { \prime }$ take the same time. This principle is completely equivalent to the laws of reflection and refraction above, but may be more useful in certain situations.
