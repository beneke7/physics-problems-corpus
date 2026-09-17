---
id: "kevin-zhou-t1-ex009"
source: "kevin-zhou"
native_id: "KZ-T1-EX009"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-ex009"
topic: [thermodynamics, statistical-mechanics]
subtopic: [effusion, kinetic-theory, cooling-by-escape]
math_tools: [dimensional-analysis]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T1-EX009

  Example 9

  A container of volume V is filled with a gas of uniform temperature T , and placed in a
  vacuum. If a small hole is punched in the container and gas slowly leaks out, how does the
  temperature in the container change over time?

  Solution
  The mean free path λ is the average distance a gas molecule moves before it hits another
  one. Let d be the width of the hole. There are two important limiting cases.

  If λ ≪ d, then molecules can’t make it out of the hole without undergoing many collisions.
  Thus, if the gas has some average flow velocity, its molecules will be carried along with it. We
  can thus treat the gas like a continuous fluid, and the logic of example 4 applies. The gas inside
  the container does P dV work on the gas exiting and hence loses energy. Thus, the remaining
  gas cools down, so the temperature of the container decreases over time. (Doing this problem
  quantitatively requires the analogue of Bernoulli’s principle for gases, which we derive in T3.)

  If d ≪ λ, then molecules fly out of the hole without encountering any others at all; this is
  the regime of “effusion”. Therefore, we shouldn’t think in terms of an average gas pressure
  or flow velocity, but rather just consider each molecule on its own. An individual molecule
  has a greater chance of escaping through the hole if it’s moving faster. Thus, the molecules
  that come out will on average be higher energy than the ones that stay in the container. So
  just as in the opposite limit, the remaining gas cools down, but for a totally different reason.
  (This case is treated quantitatively in problem 2.24 of Wang and Ricardo, volume 2.)




                                                 15
    Kevin Zhou                                                               Physics Olympiad Handouts
