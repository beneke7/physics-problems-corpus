---
id: kevin-zhou-w3-p012
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w3-p012
solution_type: author
source_document: solution-document-kevin-zhou-w3sol
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W3Sol.pdf."
---

[2] Problem 12. Most optical elements are time-reversal symmetric, but the “Faraday rotator” is not.
(It contains magnetic fields, and the direction of a magnetic field flips under time reversal.) When
viewed from the top, linearly polarized light passing down through it will have its polarization rotated
clockwise by θ, but light passing up through it will also have its polarization rotated clockwise by
θ. In other words, if linearly polarized light goes through a Faraday rotator, bounces off a mirror,
and returns through it, it doesn’t return with the same polarization, but rather is rotated by 2θ.
(a) Explain how to use a Faraday rotator, in combination with other optical elements mentioned
above, to construct an optical isolator: a system which allows some light to pass through in
one direction, but none to pass through in the other direction.
(b) In T2, we argued that a “one-way” light filter would violate the second law of thermodynamics.
So why is the setup in part (a) allowed?
Solution. (a) The simplest setup involves a horizontal polarizing filter, a Faraday rotator with
θ = 45◦, and then a diagonal polarizing filter. When light passes from left to right, it hits
the horizontal polarizing filter, gets rotated to the diagonal polarization, then leaves. When
light passes from right to left, it hits the diagonal polarizing filter, gets rotated to the vertical
polarization, then gets blocked by the horizontal polarizing filter.
(b) Unlike the ideal reflection and transmission considered in T2, the isolator here necessarily
absorbs energy, which increases its entropy. The entropy gained by the isolator, ∆S = ∆Q/T,
overwhelms the decrease in entropy from organizing photons only on one side of the isolator.
(Then you might ask, what about the limit T → ∞? But in that case, we must also account
10
Kevin Zhou Physics Olympiad Handouts
for the blackbody radiation emitted by both sides of the isolator, so we don’t really have a
functional isolator at all.)
[4] Problem 13.  T 1 0IZhO 2021, problem 3. A problem on the propagation of light through a
waveguide, unifying material from E7 and W1.
3 Water Waves
Water waves are the most familiar examples of waves in everyday life, but you won’t find them
mentioned often in introductory textbooks, because they’re far more complicated than any other
kind of wave we’ll consider. In all the problems below, we will completely neglect viscosity, surface
tension, and compressibility of the water. Despite this, our results will still only be approximate.
