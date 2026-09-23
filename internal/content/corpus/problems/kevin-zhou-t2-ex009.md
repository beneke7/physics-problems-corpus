---
id: "kevin-zhou-t2-ex009"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-T2-EX009"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex009"
topic: [thermodynamics]
subtopic: [heat-engines, radiative-heat-transfer, optimization]
math_tools: [calculus, optimization]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T2-EX009

  Example 9

  A satellite contains a nuclear reactor at its core, fixed at temperature TH . Suppose the
  exterior of the satellite is somehow fixed at temperature TC , and the satellite runs an ideal
  heat engine, using the core and exterior as hot and cold reservoirs. Treat the exterior as an
  ideal blackbody, and neglect the temperature of outer space. What value of TC maximizes
  the rate of work extracted?

  Solution
  One might think that TC should be as low as possible, to increase the efficiency of the cycle.
  However, a lower TC means a lower rate of heat emission Q̇out , since we are limited by
  emission of blackbody radiation, which lowers the rate of work done Ẇ .

  The rate of heat emitted from the satellite is
                                        Q̇out = σATC4 ∝ TC4 .
  Therefore, the rate of work done is

                                   TH               TC TH 4
                   Ẇ = η Q̇in = η    Q̇out ∝    1−      T = TH TC3 − TC4 .
                                   TC               TH TC C
  This is maximized when TC = (3/4)TH , at which point the efficiency is 1/4.


                                                  15


    Kevin Zhou                                                                      Physics Olympiad Handouts
