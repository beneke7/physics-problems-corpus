---
id: "kevin-zhou-m7-ex010"
source: "kevin-zhou"
native_id: "KZ-M7-EX010"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m7-ex010"
topic: [fluid-mechanics]
subtopic: [bernoulli, pressure, fluid-flow]
math_tools: []
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M7.txt"
source_url: "sources/kevin_zhou/site/handouts/M7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 10

  A big fan produces a stream of air with speed v. If the atmospheric pressure in the room is
  Patm , what’s the pressure P in the middle of the fan’s air stream?

  Solution
  This question frequently appears in middle school physics lessons. Obviously, if we apply
  Bernoulli’s principle to the air before and after it goes through the fan, we get
                                           1
                                        P + ρv 2 = Patm
                                           2
  so that the pressure is lower than atmospheric pressure. Easy, right? But it’s wrong!

  The air in the stream is traveling forward with constant velocity, exposed to the rest
  of the air in the room, which has atmospheric pressure. If there actually was such a
  pressure difference, the fan’s air stream would be compressed by the air in the room, until
  it reached atmospheric pressure again. If you look back carefully at the above examples,

                                                10
   Kevin Zhou                                                                Physics Olympiad Handouts

      you’ll see this is always the case: air can only be at a different pressure if it’s confined
      away from the atmosphere at large (e.g. in a train tunnel or a whirly tube), or if it’s
      actively being accelerated (e.g. when it flies into or over a barn, in which case the pressure
      difference is precisely what causes the force). The other case where you can maintain
      a pressure difference is when the air is moving extremely quickly, which will be discussed in T3.

      So the correct answer is that P = Patm . But why doesn’t Bernoulli’s principle work? Because
      it’s a statement of energy conservation, and the fan itself is doing work on the air to get it
      moving. The correct statement would be
                                                1
                                          Patm + ρv 2 = Patm + w
                                                2
      where w is the work done by the fan per unit volume of air.
