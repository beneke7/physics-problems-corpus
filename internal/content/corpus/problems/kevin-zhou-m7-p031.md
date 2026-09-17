---
id: "kevin-zhou-m7-p031"
source: "kevin-zhou"
native_id: "KZ-M7-P031"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m7-p031"
topic: [fluid-mechanics, mechanics]
subtopic: [surface-tension, capillarity, granular-media]
math_tools: []
format: "explanation"
kind: "problem"
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

IPhO 2022 3B

       Slightly wet sand is much stronger than either dry sand or very wet sand, which allows the
       construction of large structures like sand castles. Why is this, and how does the strength
       depend on the typical size r of the sand grains?

       Solution
       When a pile of sand is dry, the only force keeping it in place is friction, which is weak. When
       it’s very wet, it’s essentially just water, which will simply collapse. But when it’s slightly
       wet, adjacent sand grains have a small layer of water connecting them. Since sand grains are
       small, this implies a huge total surface area, and thus large surface tension effects.

       There are actually two conceptually distinct components to the effect. First, the bit of water
       connecting two sand grains will provide a surface tension force F ∼ γr. Second, as you
       saw in problem 29, the water has a pressure lower by ∆P ∼ γ/r, leading to an attractive
       pressure force (∆P )A ∼ γr. In either case, that means the force needed to displace a single
       grain of sand scales with r. The number of sand grains in a fixed cross-sectional area scales
       as 1/r2 , so the weight a sand castle can bear scales as 1/r. Thus, fine-grained sand is stronger.

       This is another example of the subtleties of granular media, first mentioned in M2. Neither
       sand nor water are strong on their own, but they’re strong together. Water provides the
       forces, while the sand provide the structure which lets those forces be effective.

                                                      25
