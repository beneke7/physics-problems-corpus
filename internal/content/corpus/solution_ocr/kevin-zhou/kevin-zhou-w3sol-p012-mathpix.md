---
id: solution-ocr-kevin-zhou-w3sol-p012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w3-p012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 12. Most optical elements are time-reversal symmetric, but the "Faraday rotator" is not. (It contains magnetic fields, and the direction of a magnetic field flips under time reversal.) When viewed from the top, linearly polarized light passing down through it will have its polarization rotated clockwise by $\theta$, but light passing up through it will also have its polarization rotated clockwise by $\theta$. In other words, if linearly polarized light goes through a Faraday rotator, bounces off a mirror, and returns through it, it doesn't return with the same polarization, but rather is rotated by $2 \theta$.
    (a) Explain how to use a Faraday rotator, in combination with other optical elements mentioned above, to construct an optical isolator: a system which allows some light to pass through in one direction, but none to pass through in the other direction.
    (b) In T2, we argued that a "one-way" light filter would violate the second law of thermodynamics. So why is the setup in part (a) allowed?

Solution. (a) The simplest setup involves a horizontal polarizing filter, a Faraday rotator with $\theta = 45 ^ { \circ }$, and then a diagonal polarizing filter. When light passes from left to right, it hits the horizontal polarizing filter, gets rotated to the diagonal polarization, then leaves. When light passes from right to left, it hits the diagonal polarizing filter, gets rotated to the vertical polarization, then gets blocked by the horizontal polarizing filter.


(b) Unlike the ideal reflection and transmission considered in T2, the isolator here necessarily absorbs energy, which increases its entropy. The entropy gained by the isolator, $\Delta S = \Delta Q / T$, overwhelms the decrease in entropy from organizing photons only on one side of the isolator. (Then you might ask, what about the limit $T \rightarrow \infty$ ? But in that case, we must also account

for the blackbody radiation emitted by both sides of the isolator, so we don't really have a functional isolator at all.)
[4] Problem 13. 3 IZhO 2021, problem 3. A problem on the propagation of light through a waveguide, unifying material from E7 and W1.

## 3 Water Waves

Water waves are the most familiar examples of waves in everyday life, but you won't find them mentioned often in introductory textbooks, because they're far more complicated than any other kind of wave we'll consider. In all the problems below, we will completely neglect viscosity, surface tension, and compressibility of the water. Despite this, our results will still only be approximate.
