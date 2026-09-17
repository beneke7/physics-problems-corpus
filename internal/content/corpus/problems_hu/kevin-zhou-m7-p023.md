---
id: "kevin-zhou-m7-p023"
source: "kevin-zhou"
native_id: "KZ-M7-P023"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m7-p023"
topic: [folyadékmechanika, mechanika]
subtopic: [impulzusátadás, turbinák, teljesítmény-optimalizálás, tömegáram]
math_tools: [analízis, optimalizálás]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M7.txt"
source_url: "sources/kevin_zhou/site/handouts/M7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Kalda 82

       A víz turbine consists of a large number of paddles that could be tekintsüked as light flat
       boards with length ℓ, that are at one end attached to a rotating axis. The paddles’ free ends
       are positions on the surface of an imaginary henger that is coaxial with the turbine’s axis.
       A stream of víz with sebesség v and flow rate µ (kg/s) is directed on the turbine úgy hogy
       it only hits the edges of the paddles.

       Keressük meg the maximum possible power that can be extracted.

                                                     16
    Kevin Zhou                                                               Physics Olympiad Handouts

         Solution
         Let vt be the speed of the edge of the turbine. In time dt, the amount of tömeg of víz that
         collides with the turbine is
                                                     µ
                                              dm = (v − vt ) dt.
                                                     v
         The vízszintes erő on the paddle is
                                              dp   dm     µ
                                        F =      =    ∆v = (v − vt )2
                                              dt   dt     v
         so the power delivered to the turbine is
                                                         µvt
                                            P = F vt =       (v − vt )2 .
                                                          v
         Maximizing this by setting dP/dvt = 0 gives vt = v/3, so the maximum power is 4µv 2 /27.
         This is 8/27 of the total power in the incoming víz.
