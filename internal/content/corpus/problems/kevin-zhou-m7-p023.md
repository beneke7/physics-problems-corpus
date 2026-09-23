---
id: "kevin-zhou-m7-p023"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-M7-P023"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m7-p023"
topic: [fluid-mechanics, mechanics]
subtopic: [momentum-transfer, turbines, power-optimization, mass-flow]
math_tools: [calculus, optimization]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M7.txt"
source_url: "sources/kevin_zhou/site/handouts/M7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Kalda 82

       A water turbine consists of a large number of paddles that could be considered as light flat
       boards with length ℓ, that are at one end attached to a rotating axis. The paddles’ free ends
       are positions on the surface of an imaginary cylinder that is coaxial with the turbine’s axis.
       A stream of water with velocity v and flow rate µ (kg/s) is directed on the turbine such that
       it only hits the edges of the paddles.

       Find the maximum possible power that can be extracted.

                                                     16


    Kevin Zhou                                                               Physics Olympiad Handouts

         Solution
         Let vt be the speed of the edge of the turbine. In time dt, the amount of mass of water that
         collides with the turbine is
                                                     µ
                                              dm = (v − vt ) dt.
                                                     v
         The horizontal force on the paddle is
                                              dp   dm     µ
                                        F =      =    ∆v = (v − vt )2
                                              dt   dt     v
         so the power delivered to the turbine is
                                                         µvt
                                            P = F vt =       (v − vt )2 .
                                                          v
         Maximizing this by setting dP/dvt = 0 gives vt = v/3, so the maximum power is 4µv 2 /27.
         This is 8/27 of the total power in the incoming water.
