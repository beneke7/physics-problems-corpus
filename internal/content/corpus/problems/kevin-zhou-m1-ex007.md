---
id: "kevin-zhou-m1-ex007"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-M1-EX007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m1-ex007"
topic: [mechanics]
subtopic: [kinematics, polar-coordinates, logarithmic-spiral]
math_tools: [calculus, differential-equations]
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

Example 7

       A bug flies towards a light with constant speed v, always making an angle α with the radial
       direction. If the initial distance to the lamp is L and the radius of the lamp is R, through
       what total angle does it turn before hitting the lamp?

       Solution
       In this case we can’t avoid solving differential equations, but they’re not too hard. It’s easiest
       to work in polar coordinates, with the center of the lamp at the origin. By decomposing the
       velocity into radial and tangential components, we have
                                        dr                        dθ
                                           = −v cos α,        r      = v sin α.
                                        dt                        dt
       We only care about the path, not the time-dependence, so we divide these equations to get
                                                   dr      r
                                                      =−
                                                   dθ    tan α
       where we manipulated differentials as in P1. Separating and integrating,
                                                   Z R
                                                         dr    ∆θ
                                               −            =
                                                    L    r    tan α

       which tells us that
                                                                      L
                                              ∆θ = (tan α) log          .
                                                                      R
       The shape traced out is a logarithmic spiral.




                                                          9


    Kevin Zhou                                                                  Physics Olympiad Handouts
