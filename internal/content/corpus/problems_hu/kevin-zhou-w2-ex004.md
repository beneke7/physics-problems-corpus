---
id: "kevin-zhou-w2-ex004"
source: "kevin-zhou"
native_id: "KZ-W2-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-w2-ex004"
topic: [optika]
subtopic: [vékony rétegek, interferencia, optikai rács]
math_tools: [komplex számok, geometria és trigonometria]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W2.txt"
source_url: "sources/kevin_zhou/site/handouts/W2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

## Feladat szövege

[3] Problem 9 (Kalda). A hall of a contemporary art installation has white walls and a white ceiling,
    lit with a monochromatic green light of wavelength λ = 550 nm. The floor of the hall is made of
    flat transparent glass plates. The lower surfaces of the glass plates are matte and painted black; the
    upper surfaces are polished and covered with thin transparent film. A visitor standing in the room
    will see circular concentric bright and dark strips on the floor, centered around himself. A curious
    visitor observes that the stripe pattern depends on their height, and upon lowering themselves, sees
    a maximum of 20 stripes. The film’s index of refraction is 1.4 and the glass’s is 1.6. Determine the
    thickness of the film.

    3    Diffraction
    Next, we turn to diffraction.

        Example 4

        Find the interference pattern of a diffraction grating, a set of N identical slits in a row, each
        separated by a distance d.

        Solution
        Defining ∆r = d sin θ as before, the amplitude is

                                                                           eikN ∆r − 1
                          A ∼ 1 + eik∆r + e2ik∆r + . . . + e(N −1)ik∆r =               .
                                                                            eik∆r − 1
        Factoring out a common phase, we have

                                       eikN ∆r/2 − e−ikN ∆r/2   sin(N k∆r/2)
                                 A∼       ik∆r/2    −ik∆r/2
                                                              =
                                         e       −e              sin(k∆r/2)

                                                        7
    Kevin Zhou                                                              Physics Olympiad Handouts

       so the intensity is
                                                 sin2 (N k∆r/2)
                                            I∝                  .
                                                  sin2 (k∆r/2)
       The normalized intensity is plotted below as a function of θ.

       The numerator yields rapid oscillations which aren’t very visible; their envelope is given by
       the slow oscillations in the denominator. These slow oscillations are the ones we care about;
       they are the diffraction peaks and occur when
                                k∆r                       2πn
                                    = nπ,     d sin θ =       = nλ,    n ∈ Z.
                                 2                         k
       This is intuitive, because at the maxima, the contributions from each slit are in phase, as
       the path length difference between adjacent slits is a multiple of λ.
