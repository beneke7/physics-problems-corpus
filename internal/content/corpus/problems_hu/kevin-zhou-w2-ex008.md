---
id: "kevin-zhou-w2-ex008"
source: "kevin-zhou"
native_id: "KZ-W2-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-w2-ex008"
topic: [rezgések és hullámok]
subtopic: [diffrakció, diffrakciós rácsok, felbontóképesség]
math_tools: [geometria és trigonometria, algebra]
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

[3] Problem 14. AuPhO 2015, problem 14. Instructive examples of higher-dimensional diffraction
    patterns. You’ll need the diagrams in the accompanying answer sheets.
   For a much harder multi-dimensional diffraction problem, beyond the scope of the Olympiad, see
   Physics Cup 2019, problem 5.

   5    Technological Applications
       Example 8

       Gratings split light into its components. If a grating can just resolve the two wavelengths λ
       and λ + ∆λ, its resolving power is R = λ/∆λ. Compute the resolving power of a diffraction
       grating with N slits at the nth order maximum.

       Solution
       Conventionally, we say that two diffraction peaks are distinguishable if the maximum of one
       falls outside the first minimum of the other. We know the nth order maximum for wavelength
       λ occurs when d sin θ = nλ, as here the path length difference between adjacent slits is nλ.
       Furthermore, the first minimum around this maximum occurs when there is an extra net

                                                         15


    Kevin Zhou                                                               Physics Olympiad Handouts

       path length difference of λ across the entire diffraction grating, i.e. when

                                             N d sin θ = N nλ + λ.

       Setting the value of sin θ equal to that for wavelength λ + ∆λ, we see that we can just resolve
       these two wavelengths if

                                 n(λ + ∆λ)   (N n + 1)λ               λ
                                           =            ,     R=        = N n.
                                     d          Nd                   ∆λ
       Note that the resolving power is also the number of wavelengths by which the longest and
       shortest possible paths to the diffraction maximum differ (i.e. the paths through the very
       top and very bottom slits). The fact that a larger distance may be used to resolve smaller
       wavelength differences is another manifestation of the uncertainty principle.
