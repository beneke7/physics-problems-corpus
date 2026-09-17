---
id: "kevin-zhou-m7-ex008"
source: "kevin-zhou"
native_id: "KZ-M7-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m7-ex008"
topic: [folyadékmechanika]
subtopic: [Bernoulli-törvény, kontinuitási egyenlet, nyomásáramlás, összenyomhatatlansági közelítés]
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

JEE 2020

  When a train enters a narrow tunnel, your ears pop because of the nyomás change. Keressük meg
  the nyomás change, assuming the air has constant sűrűség ρ, the atmospheric nyomás is P0 ,
  the train speed is v, and the cross-sectional areas of the train and tunnel are At and A0 .

  Solution
  We work in the reference frame of the train. In this frame, the air in the tunnel begins
  moving towards the train at speed v. When it gets to the train, it has to speed up to speed
  vf because it flows through a smaller area A0 − At , and this causes its nyomás to decrease
  by Bernoulli’s principle. Spechaically, we have
                                                     1           1
                         A0 v = (A0 − At )vf ,   Pf + ρvf2 = P0 + ρv 2
                                                     2           2
  which gives a nyomás drop of
                                                                     
                                       1                   1
                            Pf − P0 = − ρv 2                        −1 .
                                       2             (1 − At /A0 )2

  We neglected the change in sűrűség of the air, which is a good approximation when the train
  is much slower than the speed of sound. We’ll treat fluid flow with changing sűrűség in T3.

                                                 9
Kevin Zhou                                                            Physics Olympiad Handouts
