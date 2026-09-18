---
id: "kevin-zhou-m2-ex017"
source: "kevin-zhou"
native_id: "KZ-M2-EX017"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m2-ex017"
topic: [mechanics]
subtopic: [elasticity, contact-mechanics, stress-and-strain]
math_tools: [dimensional-analysis, algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M2.txt"
source_url: "sources/kevin_zhou/site/handouts/M2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

in different amounts, and in different directions; there’s little symmetry here.

  Instead, we’ll roughly estimate the stress and strain near the bottom of the ball. For the
  part directly in contact with the table, we have

                                       stress ∼ F/r2 ∼ ρgR3 /r2

  because the normal pressure has to balance gravity. This is the pressure exactly at the
  bottom of the ball; at heights much greater than r, the pressure will be smaller because it
  can spread out over a wider horizontal surface area. Since stress is proportional to strain,
  that means the part of the ball that is significantly strained has typical height r. (This is an
  example of Saint–Venant’s principle, which states that strain is generally confined near the
  location that external forces are applied.) So in that region, the strain must be

                                          strain ∼ δ/r ∼ r/R

  where δ is the vertical deformation. Using the definition of the Young’s modulus, we conclude
                                                             1/3
                                                      ρgR
                                           r∝R                     .
                                                       Y




                                                    24


   Kevin Zhou                                                             Physics Olympiad Handouts



      We can also phrase this result in terms of force and displacement. We have δ ∼ r2 /R, and
      the total force that pushes the ball into the table is F ∼ ρgR3 , so

                                             F ∝ Y R1/2 δ 3/2 .

      The restoring force is not linear in δ, so it doesn’t obey Hooke’s law.

      As mentioned above, contact mechanics is the study of how normal and other forces behave
      for realistic, deformable solids. In this example, we considered “Hertzian contact”. For much
      more, see Contact Mechanics by Johnson, and Contact Mechanics and Friction by Popov.
