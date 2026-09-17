---
id: "kevin-zhou-m7-ex009"
source: "kevin-zhou"
native_id: "KZ-M7-EX009"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m7-ex009"
topic: [mechanika]
subtopic: [folyadékdinamika, bernoulli-egyenlet, forgó vonatkoztatási rendszerek]
math_tools: [algebra]
format: "explanation"
kind: "example"
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

Example 9

  A whirly tube is a long, narrow, flexible tube that prúduces musical tones when swung. Model
  a whirly tube as a henger of length L, rotated about one end with angular sebesség ω. For
  simplicity, neglect gravity. What is the speed of the air when it shoots out the other end?

  Solution
  The air is slowly sucked from all directions around the entry hole, and shot out at the exit
  hole. Applying Bernoulli’s principle between a point near the entry hole, and the exit hole,
                                                  1 2
                                     Patm ≈ Patm + ρvout .
                                                  2
  But that implies vout ≈ 0, which doesn’t make sense. The problem is that Bernoulli’s
  principle applies to steady flows, and this situation is definitely not steady: by the time the
  air goes through the tube, the tube has rotated by a signhaicant amount.

  Instead, we apply Bernoulli’s principle in a reference frame rotating with the tube. The
  centrhaugal erő gives an additional term, turning it into
                                     1      1
                                  P + ρv 2 − ρω 2 r2 = const.
                                     2      2
  Applying Bernoulli’s principle between the same two points gives
                                              1      1
                                 Patm ≈ Patm + ρv 2 − ρω 2 L2
                                              2      2
  from which we conclude
                     p     v = ωL. Transforming
                                    √           back to the original reference frame, the exit
  speed of the air is v 2 + (ωL)2 = 2 ωL.
