---
id: "kevin-zhou-x1-ex004"
source: "kevin-zhou"
native_id: "KZ-X1-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x1-ex004"
topic: [quantum-physics]
subtopic: [uncertainty-principle, diffraction, energy-time, particle-physics]
math_tools: [dimensional-analysis, small-parameter-approximation]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/X1.txt"
source_url: "sources/kevin_zhou/site/handouts/X1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

ℏ
                                            ∆py ∼
                                                    a
  which means an angle uncertainty of order
                                               ∆py  λ
                                        ∆θ ∼       ∼ .
                                               px   a

                                               10


    Kevin Zhou                                                             Physics Olympiad Handouts

       Therefore, using basic geometry, the size of the pattern on the screen is
                                                           Dλ
                                            ∆y ∼ D∆θ ∼        .
                                                            a
       This is the approximate width of the central maximum for single slit diffraction, as we found
       in W2. The reason the result is the same is that light acts like a wave both classically and
       quantum mechanically; the quantum version of the derivation is just the same as the classical
       version, but with “everything multiplied by h”. What’s new about this derivation is that it
       also applies for matter particles, which have λ = h/p.

       Example 5

       The Higgs boson has a mass of 125 GeV and a lifetime of about τ = 1.6 × 10−22 s. About
       what percentage uncertainty must a measurement of a Higgs boson’s mass have?

       Solution
       Decay is a significant change in the particle’s state, and this change happens over a time τ ,
       which means the energy uncertainty is
                                          ℏ
                                   ∆E ∼     = 7 × 10−13 J = 0.004 GeV.
                                          τ
       When we measure the Higgs boson’s mass, we really measure the E = mc2 energy released
       when it decays, so the unavoidable uncertainty of the mass is ∆E/E ∼ 0.003%. (But the
       actual measured uncertainties are much higher, due to a variety of other effects.)
