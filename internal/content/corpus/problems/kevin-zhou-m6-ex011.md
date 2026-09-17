---
id: "kevin-zhou-m6-ex011"
source: "kevin-zhou"
native_id: "KZ-M6-EX011"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m6-ex011"
topic: [mechanics]
subtopic: [non-inertial-frames, coriolis-force, projectile-motion]
math_tools: [calculus]
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

Example 11

  A projectile is dropped from height h at the equator. Let the Earth be spherical with angular
  velocity ω, and let the local gravitational acceleration be g. Counting only the Coriolis force,
  which direction is it deflected when it hits the ground, and by about how far?

  Solution
  The earth rotates from west to east, so the angular velocity points from the south pole to
  the north pole. The velocity of the falling ball points radially inward, so the Coriolis force
  points east. We naturally assume the height h is much less than the radius of the Earth, so
  the inward gravitational acceleration is constant. The Coriolis acceleration is thus

                                         ac = 2ωv = 2ωgt

  in the eastward direction, and integrating this twice gives a deflection
                                               1
                                        d(t) = ωgt3 .
                                               3
                                       p
  The projectile hits the ground at t = 2h/g, giving a final eastward deflection of
                                              s
                                            ω (2h)3
                                       d=             .
                                            3    g

  This is the right answer to first order in ω. For a neat geometric method that arrives at the
  same result, see the solutions to NBPhO 2016, problem 9.

  Remark
  It’s quite subtle to get a more accurate answer to the above problem, because a slew of other
  effects appear at higher order, including the centrifugal force (which affects both the mass’s
  trajectory, and causes the Earth’s shape to bulge out at the equator), and the variation in g
  with height. If you want to explore this in detail, see problems 10.12 and 10.13 of Morin.

                                                19
    Kevin Zhou                                                              Physics Olympiad Handouts

       Incidentally, one of the earliest tests of Newtonian gravity was measurements of the Earth’s
       shape. In the 1730s, the French sent surveyors to modern Finland and Ecuador to measure
       the curvature of the Earth by triangulation. These were some of the most expensive scientific
       expeditions that had ever been performed. Upon their success, Voltaire said: “You have
       confirmed in these tedious places what Newton found out without leaving his room.”
