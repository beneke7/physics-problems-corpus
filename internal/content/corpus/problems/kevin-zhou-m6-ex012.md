---
id: "kevin-zhou-m6-ex012"
source: "kevin-zhou"
native_id: "KZ-M6-EX012"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m6-ex012"
topic: [mechanics]
subtopic: [coriolis-force, rotating-frames, angular-momentum]
math_tools: [algebra, calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 13

       Explain where the factor of 2 in the Coriolis force comes from, working in an inertial frame.

       Solution
       For concreteness, consider a rotating cylindrical space station of radius R with angular
       velocity ω. An astronaut initially stands on its rim, then jumps upward, picking up an
       inward radial velocity u in the space station’s rotating frame. The Coriolis force implies that
       the astronaut will have tangential acceleration 2ωu.

       In an inertial frame, this 2 comes from the combination of two effects of equal magnitude.
       Let v = ωR be the initial tangential velocity of the astronaut in this frame. As the astronaut
       moves radially inward, angular momentum conservation implies that their tangential velocity
       increases, so that after a time dt it is
                                                R
                                        ωR            = ωR + ωu dt.
                                             R − u dt
       In addition, the tangential speed of the rotating frame at the astronaut decreases, to

                                         ω(R − u dt) = ωR − ωu dt.

       The relative tangential acceleration is thus 2ωu, giving the desired result.
