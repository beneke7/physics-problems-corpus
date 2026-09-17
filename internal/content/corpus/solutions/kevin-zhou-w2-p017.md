---
id: kevin-zhou-w2-p017
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w2-p017
solution_type: author
source_document: solution-document-kevin-zhou-w2sol
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W2Sol.pdf."
---

[3] Problem 17. Diffraction limits the resolution of optical instruments.
(a) Suppose that light of wavelength λ enters through an aperture of width D. As a result, the
light diffracts, which causes the angle of the light’s propagation to pick up an additional spread
of order θ. Estimate θ.
(b) The diameter of a human pupil is about 3mm. Estimate the size of the smallest text that a
human being could read from 5m away.
(c) A typical amateur telescope has an aperture of order 10cm. The Sun has a radius of 7×108 m.
Estimate the furthest possible distance, in light years, that such a telescope could resolve a
Sun-sized star. (Stars further away than this will just show up as blurry points.)
Solution. (a) Whenever diffraction occurs, it creates an angular spread of order θ ∼ λ/D. For
example, the angular width of the central maximum for diffraction through a circular aperture
is sin−1
(1.22λ/D), as noted earlier.
(b) For concreteness, taking λ = 500nm, the formula above gives an angular spread of θ ∼
1.7 × 10−4 rad. At a distance of 5m, this corresponds to a distance of ∼ 1mm, so a letter
smaller than this will just get blurred into a single blob.
And indeed, the letters on the bottom row of a standard eye chart are about 4 mm tall. Of
course, most people can’t see this well, but that’s a consequence of geometric optics (i.e. the
eye not focusing light optimally) rather than diffraction.
(c) Repeating the reasoning of part (b) yields a distance of around 0.02 ly, so no stars can be
resolved by such a telescope at all. Even the biggest optical telescopes ever built can resolve
essentially no stars.
Remark
The diffraction limit described in problem 17 motivates astronomers to build ever larger
telescopes. The largest examples are radio telescopes, such as the Arecibo observatory that
collapsed in 2020, though their resolution is not better than optical telescopes, since the
wavelength of radio waves is much longer.
However, the telescope doesn’t have to be one big piece. Two telescopes can effectively be
combined into a single telescope whose radius, for the purposes of the diffraction limit, is
the distance between the telescopes. This is possible as long as one can add together the
time-dependent amplitudes they see.
This technique is routinely used in radio telescope arrays, such as the Very Large Array. The
Event Horizon Telescope was able to resolve a black hole 5×107 ly away because it combined
radio telescopes spaced around the entire Earth. Some astronomers are presently excited
about the incredibly resolutions that could be achieved by combining optical telescopes,
though realizing this would require extremely good timing precision.
22
Kevin Zhou Physics Olympiad Handouts
