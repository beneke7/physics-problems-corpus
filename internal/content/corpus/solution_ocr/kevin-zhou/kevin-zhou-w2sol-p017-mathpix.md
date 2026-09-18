---
id: solution-ocr-kevin-zhou-w2sol-p017
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w2-p017]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 17. Diffraction limits the resolution of optical instruments.

(a) Suppose that light of wavelength $\lambda$ enters through an aperture of width $D$. As a result, the light diffracts, which causes the angle of the light's propagation to pick up an additional spread of order $\theta$. Estimate $\theta$.
(b) The diameter of a human pupil is about 3 mm . Estimate the size of the smallest text that a human being could read from 5 m away.
(c) A typical amateur telescope has an aperture of order 10 cm. The Sun has a radius of $7 \times 10 ^ { 8 } \mathrm {~m}$. Estimate the furthest possible distance, in light years, that such a telescope could resolve a Sun-sized star. (Stars further away than this will just show up as blurry points.)

Solution. (a) Whenever diffraction occurs, it creates an angular spread of order $\theta \sim \lambda / D$. For example, the angular width of the central maximum for diffraction through a circular aperture is $\sin ^ { - 1 } ( 1.22 \lambda / D )$, as noted earlier.

(b) For concreteness, taking $\lambda = 500 \mathrm {~nm}$, the formula above gives an angular spread of $\theta \sim$ $1.7 \times 10 ^ { - 4 } \mathrm { rad }$. At a distance of 5 m, this corresponds to a distance of $\sim 1 \mathrm {~mm}$, so a letter smaller than this will just get blurred into a single blob.
And indeed, the letters on the bottom row of a standard eye chart are about 4 mm tall. Of course, most people can't see this well, but that's a consequence of geometric optics (i.e. the eye not focusing light optimally) rather than diffraction.
(c) Repeating the reasoning of part (b) yields a distance of around 0.02 ly, so no stars can be resolved by such a telescope at all. Even the biggest optical telescopes ever built can resolve essentially no stars.

Remark
The diffraction limit described in problem 17 motivates astronomers to build ever larger telescopes. The largest examples are radio telescopes, such as the Arecibo observatory that collapsed in 2020, though their resolution is not better than optical telescopes, since the wavelength of radio waves is much longer.

However, the telescope doesn't have to be one big piece. Two telescopes can effectively be combined into a single telescope whose radius, for the purposes of the diffraction limit, is the distance between the telescopes. This is possible as long as one can add together the time-dependent amplitudes they see.

This technique is routinely used in radio telescope arrays, such as the Very Large Array. The Event Horizon Telescope was able to resolve a black hole $5 \times 10 ^ { 7 }$ ly away because it combined radio telescopes spaced around the entire Earth. Some astronomers are presently excited about the incredibly resolutions that could be achieved by combining optical telescopes, though realizing this would require extremely good timing precision.
