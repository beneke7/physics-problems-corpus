---
id: "kevin-zhou-e2-ex005"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-E2-EX005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e2-ex005"
topic: [electrostatics]
subtopic: [electrostatic-induction, conductors, force-estimates]
math_tools: []
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E2.txt"
source_url: "sources/kevin_zhou/site/handouts/E2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 5

  Estimate the interaction force between a point charge q and a thin conducting rod of length ℓ,
  which is a distance L ≫ ℓ from the charge and oriented along the separation between them.




                                                  11


    Kevin Zhou                                                                Physics Olympiad Handouts


       Solution
       The interaction occurs because the point charge induces negative charges on the near end of
       the rod, and positive charges on the far end. These charges are then acted on by the electric
       field of the point charge, causing a force.

       To get a very crude estimate, let’s suppose charge Q appears on the far end and charge −Q
       appears on the near end. The resulting field produced in the middle is
                                                        kQ
                                                  E∼       .
                                                        ℓ2
       On the other hand, this needs to cancel a field from the point charge of
                                                           kq
                                                   E∼
                                                           L2
       which tells us that Q ∼ (ℓ/L)2 q. The force on the induced charges is then

                                                                       kq 2 ℓ3

                                           1        1        kqQℓ
                             F ∼ kqQ             −      ∼  −       ∼ −         .
                                        (L + ℓ)2 L2           L3        L5

       Again, the force is attractive, and falls off quickly with distance.
