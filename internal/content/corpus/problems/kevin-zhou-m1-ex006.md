---
id: "kevin-zhou-m1-ex006"
source: "kevin-zhou"
native_id: "KZ-M1-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m1-ex006"
topic: [mechanics]
subtopic: [kinematics, drag, projectile-motion]
math_tools: [differential-equations]
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

For projectiles, the force of air resistance can be modeled as proportional to the speed
       (“linear drag”) or proportional to the square of the speed (“quadratic drag”), depending on
       the circumstances. Two identical objects, A and B, are dropped from the same height h
       simultaneously, but object A is given an initial horizontal velocity v. The objects hit the
       ground at times tA and tB . How do these times compare, assuming linear or quadratic drag?

       Solution
       For linear drag, the horizontal and vertical components of the motion are independent,

                                        ax = −bvx ,   ay = −g − bvy

       for some coefficient b. That means the time to hit the ground, which depends on the vertical
       motion, is independent of the initial horizontal velocity, so tA = tB . But for quadratic drag,

                                              ay = −g − bvy |v|

       which means the upward drag force is larger when the horizontal velocity is larger, so tA > tB .

       Since the components are independent for linear drag, it’s not too hard to write down an
       expression for the trajectory, by recycling the results of example 1. But for quadratic drag,
       the results of problem 2 won’t help much; the two-dimensional problem is much harder.
