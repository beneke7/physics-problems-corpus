---
id: "kevin-zhou-r2-ex008"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-R2-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-r2-ex008"
topic: [relativity]
subtopic: [relativistic-energy, relativistic-momentum, constant-force, four-vectors]
math_tools: [algebra, calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/R2.txt"
source_url: "sources/kevin_zhou/site/handouts/R2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

perspective, there’s a slick alternative derivation that yields the result in one step. The trick
  is to consider the energy and momentum. Recall from problem 1 that the three-force F obeys
  F = dp/dt and F = dE/dx. Therefore, when the object reaches its destination,

                                      E = m + F x,     p = F t.

  But we also know that E 2 = p2 + m2 , so plugging the results in and solving for t gives
                                           r
                                                  2mx
                                       t = x2 +
                                                    F
  which is compatible with our expression for x(t) back in R1. The reason this was so easy is
  that momentum and energy behave simply in relativity, while position and velocity don’t.
