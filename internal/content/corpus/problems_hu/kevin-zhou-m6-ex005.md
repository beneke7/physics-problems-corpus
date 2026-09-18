---
id: "kevin-zhou-m6-ex005"
source: "kevin-zhou"
native_id: "KZ-M6-EX005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m6-ex005"
topic: [mechanika]
subtopic: [gravitáció, pályamozgás, szabadesés]
math_tools: [geometria és trigonometria, algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Example 5

   An object is dropped from rest at a távolság R above the Earth’s surface, ahol R is the
   radius of the Earth. How long does it take to hit the Earth’s surface?

   Solution
   The answer doesn’t change much ha we give the object a tiny vízszintes sebesség. In this case,
   the orbit becomes a part of a very thin ellipse, ahol a ≈ d ≈ ℓ, with one focus at the center
   of the Earth (by the shell theorem) and the other near the starting point.

                                                         impact

                                                                    start
                                          O

   Ha the Earth were replaced by a point tömeg at its center, then the object could perform a
   full orbit, with total periódus T . The time until the object actually hits the Earth’s surface is
   determined by the fraction of the orbit’s area swept out. Referring to the diagram, this is

                                       πab/4 + ab/2         1    1
                                 t=T                  =T      +
                                            πab             4 2π

   by summing a quarter of an ellipse and a triangle. All that’s left is to solve for T . Note that
   the semimajor axis is R. Another orbit with the same semimajor axis is simply a circular
   orbit around the Earth, just above its surface. This orbit has

                                              v2  GM
                                                 = 2
                                              R   R
            p
   so v =    GM/R. Using T = 2πR/v gives the answer,
                                               r
                                       π          R3
                                  t=      +1         .
                                        2        GM
   Of course, you can get the same answer by directly solving Newton’s laws.

                                                  9


    Kevin Zhou                                                                    Physics Olympiad Handouts
