---
id: "kevin-zhou-w2-p017"
source: "kevin-zhou"
native_id: "KZ-W2-P017"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w2-p017"
topic: [optics]
subtopic: [diffraction, angular-resolution, telescopes, optical-instruments]
math_tools: [geometry, dimensional-analysis]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W2.txt"
source_url: "sources/kevin_zhou/site/handouts/W2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[3] Problem 17. Diffraction limits the resolution of optical instruments.

      (a) Suppose that light of wavelength λ enters through an aperture of width D. As a result, the
          light diffracts, which causes the angle of the light’s propagation to pick up an additional spread
          of order θ. Estimate θ.

      (b) The diameter of a human pupil is about 3 mm. Estimate the size of the smallest text that a
          human being could read from 5 m away.

                                                      16


Kevin Zhou                                                              Physics Olympiad Handouts

 (c) A typical amateur telescope has an aperture of order 10 cm. The Sun has a radius of 7 × 108 m.
     Estimate the furthest possible distance, in light years, that such a telescope could resolve a
     Sun-sized star. (Stars further away than this will just show up as blurry points.)
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
  Event Horizon Telescope was able to resolve a black hole 5 × 107 ly away because it combined
  radio telescopes spaced around the entire Earth. Some astronomers are presently excited
  about the incredibly resolutions that could be achieved by combining optical telescopes,
  though realizing this would require extremely good timing precision.

  Example 9

  How close does a Sun-like star have to be in order to see it with the naked eye in daylight?

  Solution
  Let the distance to the Sun be d, and the distance to the star be D. Then the ratio of
  intensities of the two is naively
                                                 2
                                      Istar    d
                                            =       .
                                      ISun     D
  This suggests the star is hard to see if D > d, which is always true. But this is too pessimistic,
  because the light from the Sun comes from all directions in the sky, while the light from the
  star comes from only a single direction. The actual ratio we want to calculate is
                                                       2
                                     Istar /Ωstar    d       2π
                                                  =
                                      ISun /2π       D     Ωstar
  where Ωstar is the apparent solid angle of the star in the sky.

  This in turn is given by the diffraction limit: if your pupils have radius r, then

                                      Ωstar ∼ (∆θ)2 ∼ (λ/r)2 .

  The star should be visible above daylight if the ratio above is at least one or so, which means
  the maximum distance is
                              r     1.5 mm
                        D∼ d∼              (1 AU) ∼ 5 × 103 AU ∼ 0.1 ly.
                              λ     600 nm

                                                 17


    Kevin Zhou                                                               Physics Olympiad Handouts

        This is still closer than the closest other star, so you would need a telescope to see any.

        Notice how this differs from a microscope! Microscopes are used to resolve finer details on a
        small object. But most telescopes can’t resolve any of the details of any but the nearest stars.
        Increasing the size of the telescope has two benefits: increasing the amount of light that goes
        through, and improving the contrast due to decreasing the blurring due to diffraction.
