---
id: "kevin-zhou-e8-p022"
source: "kevin-zhou"
native_id: "KZ-E8-P022"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e8-p022"
topic: [electromagnetism, oscillations-and-waves]
subtopic: [em-waves, reflection-and-refraction, fresnel-equations]
math_tools: [vector-calculus, geometry-trigonometry]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E8.txt"
source_url: "sources/kevin_zhou/site/handouts/E8.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Suppose the regions x < 0 and x > 0 are filled with material with permittivities
    ϵ1 and ϵ2 , both with permeability µ0 . (As mentioned above, this is typical for most materials.)




                                                        14


We send in an incident wave from the left with electric field Ei ei(ki ·r−ωi t) . The wave will be both
transmitted and reflected at the interface, so the total electric field is
                                (
                                  Ei ei(ki ·r−ωi t) + Er ei(kr ·r−ωr t) x < 0,
                           E=
                                  Et ei(kt ·r−ωt t)                     x > 0.

The angles with the normal are θi , θr , and θt as shown. Note that since light is a transverse wave,
all three electric field amplitudes above are perpendicular to their corresponding wavevector.




 (a) We can decompose every field into a part perpendicular to the interface (i.e. containing just
     the x-component), and a part parallel to the interface (containing the other components).
     Using Maxwell’s equations, argue that at the interface, E∥ and B ⊥ must be continuous. Also
     show that for this setup, B∥ is also continuous.

 (b) Argue that by continuity of E∥ at the interface, we must have

                                                    ωi = ωr = ωt .

                            ∥    ∥     ∥
 (c) Further argue that ki = kr = kt , and thereby derive the laws of reflection and refraction,

                                       θ i = θr ,     n1 sin θi = n2 sin θt .

      This result is very general, and holds for all kinds of waves as long as we define ni ∝ 1/vi .

 (d) Now suppose the electric fields Ei , Er , and Et are polarized perpendicular to the page. Then
     continuity of E∥ gives
                                               Ei + Er = Et .
      Using continuity of B∥ , show that
                          Er   n1 cos θi − n2 cos θt         Et        2n1 cos θi
                             =                       ,          =                       .
                          Ei   n1 cos θi + n2 cos θt         Ei   n1 cos θi + n2 cos θt
     These are the Fresnel equations for light polarized perpendicular to the plane, also called
     “s-polarized” light.




                                                      15


     (e) If n1 > n2 , then total internal reflection occurs when
                                                              n2
                                                   sin θi >
                                                              n1
          and the wave is totally reflected. Nonetheless, Et is nonzero in this regime. To make sense
          of this, show that the x-component of kt is imaginary in this regime, indicating that the
         “transmitted” wave does not propagate in the region x > 0, but rather exponentially decays.
