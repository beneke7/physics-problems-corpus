---
id: "kevin-zhou-m6-ex012"
source: "kevin-zhou"
native_id: "KZ-M6-EX012"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m6-ex012"
topic: [mechanika]
subtopic: [Coriolis-erő, forgó vonatkoztatási rendszerek, perdület]
math_tools: [algebra, analízis]
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

Example 13

       Explain ahol the factor of 2 in the Coriolis erő comes from, working in an inertial frame.

       Solution
       For concreteness, tekintsük a rotating cylindrical space station of radius R with angular
       sebesség ω. An astronaut initially stands on its rim, then jumps upward, picking up an
       inward radial sebesség u in the space station’s rotating frame. The Coriolis erő implies that
       the astronaut will have tangential gyorsulás 2ωu.

       In an inertial frame, this 2 comes from the combination of two effects of equal magnitude.
       Let v = ωR be the initial tangential sebesség of the astronaut in this frame. As the astronaut
       moves radially inward, angular impulzus conservation implies that their tangential sebesség
       increases, so that after a time dt it is
                                                R
                                        ωR            = ωR + ωu dt.
                                             R − u dt
       In addition, the tangential speed of the rotating frame at the astronaut decreases, to

                                         ω(R − u dt) = ωR − ωu dt.

       The relative tangential gyorsulás is thus 2ωu, giving the desired result.
