---
id: "kevin-zhou-t3-ex001"
source: "kevin-zhou"
native_id: "KZ-T3-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t3-ex001"
topic: [fluid-mechanics, thermodynamics]
subtopic: [surface-tension, contact-angle, wetting, young-equation]
math_tools: [geometry]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T3.txt"
source_url: "sources/kevin_zhou/site/handouts/T3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T3-EX001

       Example 1

       The surface of a drop of water makes a contact angle θ with a solid, as shown.




       When θ is acute, the surface is said to be hydrophilic. If θ is obtuse, it is hydrophobic. Find
       an expression for θ in terms of the relevant surface tensions.




                                                       2


Kevin Zhou                                                              Physics Olympiad Handouts


  Solution
  If the liquid drop expands outward by δx, the areas of various surfaces change, as shown.




  The change in energy is
                                 dU ∝ γsl δx + γl cos θ δx − γs δx
  and this must be equal to zero in equilibrium. Thus,
                                              γs − γsl   Usl
                                    cos θ =            =     − 1.
                                                 γl      γl
  This is Young’s equation. The liquid surface tension γl must be positive; otherwise the
  liquid could not exist stably at all, but rather would disperse into gas. Thus, the surface is
  hydrophilic when Usl > γl and hydrophobic when Usl < γl .

  As extreme cases, note that there is no solution for θ when Usl > 2γl . In this limit, the
  surface is so hydrophilic that the liquid spreads out and coats the entire solid; this is
  known as perfect wetting. There is also no solution when Usl < 0, in which case the liquid
  disperses into many tiny nearly spherical drops, each with a tiny area of contact with the solid.

  This derivation was in terms of energy, which is typically easier for surface tension. The
  same result can be derived in terms of forces, but it’s more subtle than it looks; the standard
  derivation in textbooks is wrong. For a clear derivation, see section 9.3 of Wang and Ricardo.
