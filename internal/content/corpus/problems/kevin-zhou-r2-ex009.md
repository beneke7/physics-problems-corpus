---
id: "kevin-zhou-r2-ex009"
source: "kevin-zhou"
native_id: "KZ-R2-EX009"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-r2-ex009"
topic: [relativity, electromagnetism]
subtopic: [relativistic-particle-motion, magnetic-bending, particle-accelerators]
math_tools: [dimensional-analysis]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/R2.txt"
source_url: "sources/kevin_zhou/site/handouts/R2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

13
    Kevin Zhou                                                                 Physics Olympiad Handouts



       where ω is the angular velocity. The speed of the protons is very close to c, so the angular
       velocity is ω ≈ c/R, and the momentum is p ≈ E/c. The deflecting force is qvB ≈ qcB, so

                                                              E
                                               qcB ≈ ωp ≈       .
                                                              R
       Therefore, we have
                                       E          7 × 1012
                                B=        =                        T = 5.4 T.
                                      qcR   (3 × 108 )(4.3 × 103 )
       This is slightly lower than what is actually used, because magnets don’t take up the entire
       tunnel. Since R ∝ E, the future collider would need a radius of
                                                  20 TeV
                                           R′ =          R = 12 km.
                                                  7 TeV

       Remark
       You might be wondering how to write the Lorentz force as a four-force. It certainly should
       be possible, since we know electromagnetism is compatible with relativity (indeed, it led
       us to relativity in the first place), but it seems challenging because electromagnetism is so
       naturally written in terms of three-vectors. It turns out that the proper way to express the
       electromagnetic field in relativity is to join the electric and magnetic fields together, making
       them the components of an antisymmetric rank 2 tensor,
                                                                        
                                                 0     Ex     Ey      Ez
                                             −Ex       0    −Bz By 
                                      Fµν = −Ey Bz
                                                                         
                                                               0     −Bx 
                                              −Ez     −By     Bx      0

       called the field strength tensor. Then the four-force is

                                                  f µ = quν F µν

       where uν is the four-velocity. Note that this ensures the rest mass of the particle is fixed, as

                                 f · u = quµ uν F µν = −quµ uν F νµ = −f · u

       using the antisymmetric property, so f · u = 0. (In fact, the requirement to keep the rest
       mass fixed is quite restrictive, so this is one of the simplest possible relativistic force laws.)
