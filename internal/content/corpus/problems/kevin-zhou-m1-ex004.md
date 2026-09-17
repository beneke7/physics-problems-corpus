---
id: "kevin-zhou-m1-ex004"
source: "kevin-zhou"
native_id: "KZ-M1-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m1-ex004"
topic: [mechanics]
subtopic: [kinematics, pursuit-problems]
math_tools: [calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M1.txt"
source_url: "sources/kevin_zhou/site/handouts/M1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 4

       A rabbit begins at the origin, and the fox begins at the point (0, −a). The rabbit begins
       running east, with a constant speed vx̂. At the same time, the fox begins chasing the rabbit,
       always moving towards it with speed v. After a long time, the rabbit and fox simply follow
       each other in a straight line, with a constant separation d. What is d?

       Solution
       This is the simplest example of a pursuit problem. Physicists and mathematicians have been
       posing them for centuries, though most are too mathematically involved for Olympiads.

       Here, the trick to realize that if the displacement between the rabbit and fox is r(t) =
       (x(t), y(t)), then the quantity r + x is conserved. To see this, let θ be the angle between the
       rabbit and fox’s velocity vectors. Then
                                              dr
                                                 = −v + v cos θ
                                              dt
       because of the fox’s chasing and rabbit’s motion, and
                                               dx
                                                  = v − v cos θ
                                               dt
       because of the rabbit’s motion and fox’s chasing. Then r + x is constant. Initially r + x =
       a + 0 = a, and after a long time r = x = d, so the final separation is d = a/2.


                                                      6
    Kevin Zhou                                                                 Physics Olympiad Handouts
