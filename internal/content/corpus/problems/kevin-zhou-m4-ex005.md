---
id: "kevin-zhou-m4-ex005"
source: "kevin-zhou"
native_id: "KZ-M4-EX005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m4-ex005"
topic: [mechanics]
subtopic: [dynamics, springs, elasticity]
math_tools: [algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M4.txt"
source_url: "sources/kevin_zhou/site/handouts/M4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 5

  If a spring with spring constant k1 and relaxed length ℓ1 is combined with a spring with
  spring constant k2 and relaxed length ℓ2 , find the spring constant and relaxed length of the
  combined spring, if the combination is in series or in parallel.

  Solution
  For the series combination, the new relaxed length is clearly ℓ = ℓ1 + ℓ2 . Suppose the first
  spring is stretched by x1 and the second by x2 . The tensions in the springs must balance,

                                          F = k 1 x1 = k 2 x2 .

  Thus, the new spring constant is
                                    F           k2 x2         k1 k2
                            k=           =                 =         .
                                 x1 + x2   x2 (k2 /k1 + 1)   k1 + k2

  For example, if the spring is cut in half, the pieces have spring constant 2k.

  Now consider the parallel combination. In this case it’s clear that the new spring constant
  is k = k1 + k2 , since the tensions of the springs add. The new relaxed length ℓ is when the
  forces in the springs cancel out, so

                                     k1 (ℓ − ℓ1 ) + k2 (ℓ − ℓ2 ) = 0

  which implies
                                               k1 ℓ1 + k2 ℓ2
                                          ℓ=                 .
                                                 k1 + k2

                                                   6


    Kevin Zhou                                                                  Physics Olympiad Handouts
