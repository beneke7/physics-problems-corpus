---
id: "kevin-zhou-w2-p004"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-W2-P004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w2-p004"
topic: [optics]
subtopic: [interference, image-sources, diffraction]
math_tools: [complex-numbers, geometry-trigonometry]
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

[2] Problem 4. A pair of slits is separated by a distance d1 , and two of these pairs are separated by a
    larger distance d2 , so that d2 ≫ d1 ≫ λ. Sketch the intensity pattern on the screen for this four-slit
    apparatus. (Hint: to avoid a complicated computation, factor the expression for the amplitude.)

       Idea 1: Image Sources

       Some interference problems have complex arrangements of mirrors and lenses. In these cases,
       actually computing the path length differences can be a nightmare. For instance, you’d have
       to account for the detailed shape of every lens. Also, you won’t just have to compute the
       path length, but rather the optical path length, which is the ordinary path length weighted
       by the index of refraction. This is because the index of refraction affects the wavelength and
       hence the phase difference.

       However, there’s a trick which makes everything much simpler: any point image can be
       treated like its own light source. That means you can compute path length differences by
       starting from the images, rather than having to go all the way back to the original objects.

                                                       3


Kevin Zhou                                                             Physics Olympiad Handouts

  For real images, there’s a very simple way to see why this works. For instance, consider the
  setup below, where an object o is focused with a lens to an image i.

  Fermat’s principle of least time tells us that all of the paths shown take the same time, and
  since phases are directly related to time by ∆ϕ = ω∆t, it means that all of the rays arrive
  at the image with the same phase. That means they leave the image with the same phase,
  so the image can be treated just like a coherent source. (That is, the phase of the light
  coming from the image doesn’t depend on the direction it comes out.) To find the phase of
  the waves at i, you can pick any of the paths, most conveniently the one on the symmetry axis.

  We can also consider virtual images, as shown below.

  Here, the Fermat’s principle argument doesn’t work because the rays never actually meet
  at i, but we can use Huygens’ principle. The key ideas are that (1) light locally propagates
  perpendicularly to wavefronts, and (2) the phase on a wavefront is always uniform, by
  definition. The first point implies the outgoing wavefronts are spheres centered on i. The
  second point implies that the phase only depends on the distance from i, so it can again be
  treated just like a source. In this way, seemingly impossible questions can be solved instantly.

  Example 2: Kalda 17

  Consider the optical setup shown below.

  Many light and dark bands appear on the screen, with dark bands separated by distance d.
  Assuming that α ≪ 1, find the wavelength λ of the light.

                                                 4


   Kevin Zhou                                                                Physics Olympiad Handouts

       Solution
       This is actually just a double slit interference problem! Each mirror produces a (virtual)
       image source reflected behind it, and the pattern on the screen results from the interference
       between the two image sources, just as if there were two slits at those points.

       Specifically, let the light source have coordinates (0, 0), with the screen at x = a. Then the
       image sources are located at (−2a, ±2αa), so we have a double slit setup with sources 4αa
       apart from each other, a distance 3a from the screen. Using our existing results,
                                                         d   4αd
                                            λ = (4αa)      =     .
                                                        3a    3
       Note that reflection from a mirror changes the phase by π, but that didn’t matter in this
       problem, because both image sources pick up the same phase.
