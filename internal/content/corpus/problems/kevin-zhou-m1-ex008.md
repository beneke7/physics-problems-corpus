---
id: "kevin-zhou-m1-ex008"
source: "kevin-zhou"
native_id: "KZ-M1-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m1-ex008"
topic: [mechanics]
subtopic: [projectile-motion, energy-conservation, curvature]
math_tools: [calculus, optimization]
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

Example 8

         A bug wishes to jump over a cylindrical log of radius R lying on the ground, so that it just
         grazes the top of the log horizontally as it passes by. What is the minimum launch speed v
         required to do this?

         Solution
         Let P be the point at the top of the log. For the bug to be moving horizontally at P , energy
         conservation applied to the vertical motion gives an initial vy obeying
                                           1                         p
                                             mvy2 = 2mgR, vy = 2 gR.
                                           2
         Thus, we need to find the minimum vx for the motion to be possible. If vx is too low, the
         hypothetical trajectory of the bug will instead pass through the log. At the lowest possible
         vx , the bug’s trajectory is not just tangent to the log at point P , but also has the same radius
         of curvature (i.e. the trajectory and the log’s shape have the same first and second derivatives).

         For uniform motion in a circle of radius r, the acceleration is a = v 2 /r. Conversely, when an
         object follows a trajectory of instantaneous radius of curvature r, its acceleration component
         normal to the path must be a = v 2 /r. So applying this to the bug at P gives
                                                  v2         p
                                              g = x , vx = gR.
                                                  R


                                                        10


    Kevin Zhou                                                                Physics Olympiad Handouts



         Thus, the minimum initial speed is
                                                q           p
                                           v=    vx2 + vy2 = 5gR.

         This radius of curvature trick doesn’t come up often, but it’s cool when it does.
