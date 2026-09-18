---
id: "kevin-zhou-x3-ex001"
source: "kevin-zhou"
native_id: "KZ-X3-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-x3-ex001"
topic: [asztrofizika]
subtopic: [csillag-asztrofizika, csillagkeletkezés, csillagok élettartama, csillagütközések]
math_tools: [skálázási érvelés, dimenzióanalízis]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/X3.txt"
source_url: "sources/kevin_zhou/site/handouts/X3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

## Feladat szövege

[5] Problem 5.        APhO 2021, problem 2. A very technical problem that fully explains how a
    famous test of quantum mechanics was conducted. Also requires material from E8 and W3.

    2    Stars
    This section contains problems involving stars and star formation. They serve as excellent review,
    as they use a mix of mechanics, electromagnetism, thermodynamics, relativity, and modern physics.
    For a beautiful graphical overview of these objects, see this paper.

        Example 1: PTD 44

        The density of stars in the central region of the galaxy is about n = 106 pc−3 , and their
        speeds are about v = 200 kms−1 . Could an advanced civilization develop in this region?

                                                           1


    Kevin Zhou                                                                  Physics Olympiad Handouts

        Solution
        Impacts between solar systems occur frequently. For concreteness, suppose catastrophic
        effects will happen to an Earth-like planet if another star passes within the equivalent of
        Jupiter’s orbit, which has radius r. At such a large radius, the gravitational attraction of the
        stars is negligible, so we can simply estimate the typical time between such events as
                                                     1
                                             t∼            ∼ 2.4 × 106 years.
                                                  n(πr2 )v

        Some argue that this is too short a time for advanced civilization to develop, so the center
        of the galaxy is outside of the so-called galactic habitable zone.

        Example 2: CPhO 2013.3

        For stars not too much heavier than the Sun, the luminosity scales with mass as L ∝ M 3.5 .
        If all of these stars release the same fraction α of their rest mass energy by nuclear burning,
        then how does the lifetime of the star scale with M ?

        Solution
        The amount of energy available is αM . The lifetime is thus
                                                          E
                                                     τ=     ∝ M −2.5
                                                          L
        so heavier stars live shorter lives. Incidentally, the luminosity scales as L ∝ R2 T 4 by the
        Stefan–Boltzmann law. By considering the details of the interior of the star, we can find how
        all of these quantities scale with mass, a principle known as stellar homology.
