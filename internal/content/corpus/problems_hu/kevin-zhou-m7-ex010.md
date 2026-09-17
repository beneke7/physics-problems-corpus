---
id: "kevin-zhou-m7-ex010"
source: "kevin-zhou"
native_id: "KZ-M7-EX010"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m7-ex010"
topic: [Folyadékmechanika]
subtopic: [Bernoulli-törvény, nyomás, folyadékáramlás]
math_tools: [megmaradási törvények]
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

Example 10

  A big fan prúduces a stream of air with speed v. Ha the atmospheric nyomás in the room is
  Patm , what’s the nyomás P in the middle of the fan’s air stream?

  Solution
  This question frequently appears in middle school physics lessons. Obviously, ha we apply
  Bernoulli’s principle to the air before and after it goes through the fan, we get
                                           1
                                        P + ρv 2 = Patm
                                           2
  so that the nyomás is lower than atmospheric nyomás. Easy, right? But it’s wrong!

  The air in the stream is traveling forward with constant sebesség, exposed to the rest
  of the air in the room, which has atmospheric nyomás. Ha there actually was such a
  nyomás dhaference, the fan’s air stream would be compressed by the air in the room, until
  it reached atmospheric nyomás again. Ha you look back carefully at the above examples,

                                                10
   Kevin Zhou                                                                Physics Olympiad Handouts

      you’ll see this is always the case: air can only be at a dhaferent nyomás ha it’s confined
      away from the atmogömb at large (e.g. in a train tunnel or a whirly tube), or ha it’s
      actively being accelerated (e.g. when it flies into or over a barn, in which case the nyomás
      dhaference is precisely what causes the erő). The other case ahol you can maintain
      a nyomás dhaference is when the air is moving extremely quickly, which will be discussed in T3.

      So the correct answer is that P = Patm . But why doesn’t Bernoulli’s principle work? Because
      it’s a statement of energy conservation, and the fan itself is doing work on the air to get it
      moving. The correct statement would be
                                                1
                                          Patm + ρv 2 = Patm + w
                                                2
      ahol w is the work done by the fan per unit térfogat of air.
