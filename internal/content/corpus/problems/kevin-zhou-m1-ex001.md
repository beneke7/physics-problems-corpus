---
id: "kevin-zhou-m1-ex001"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-M1-EX001"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m1-ex001"
topic: [mechanics]
subtopic: [kinematics, drag, projectile-motion]
math_tools: [differential-equations, calculus]
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

Example 1

         When a projectile moves slowly through air, the drag is linear in the velocity, F = −αmv.
         Find the velocity v(t) of a projectile thrown upward at time t = 0 with speed v0 .

         Solution
         We write Newton’s second law as
                                               dv
                                                   = −g − αv
                                                dt
         and multiply through by dt. Integrating both sides from the initial condition to time tf gives
                                           Z v(tf )               Z tf
                                                        dv
                                                             =−          dt.
                                            v0        g + αv       0

         Performing the integrals gives
                                                         v(tf )
                                           1
                                             log(g + αv)        = −tf .
                                           α             v0

         Renaming tf to t and solving for v yields
                                                              g −αt
                                          v(t) = e−αt v0 +      (e  − 1).
                                                              α
         This renaming is necessary because we don’t want to confuse t, the dummy variable that we
         are integrating over, with tf , the time at which we want to evaluate the velocity; t ranges
         from zero to tf . Unfortunately, often people just call both of these t, so you need to watch
         out.
