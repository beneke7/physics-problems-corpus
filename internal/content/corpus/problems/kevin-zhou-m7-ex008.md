---
id: "kevin-zhou-m7-ex008"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-M7-EX008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m7-ex008"
topic: [fluid-mechanics]
subtopic: [bernoulli-principle, continuity-equation, pressure-flow, incompressible-approximation]
math_tools: [algebra]
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

JEE 2020

  When a train enters a narrow tunnel, your ears pop because of the pressure change. Find
  the pressure change, assuming the air has constant density ρ, the atmospheric pressure is P0 ,
  the train speed is v, and the cross-sectional areas of the train and tunnel are At and A0 .

  Solution
  We work in the reference frame of the train. In this frame, the air in the tunnel begins
  moving towards the train at speed v. When it gets to the train, it has to speed up to speed
  vf because it flows through a smaller area A0 − At , and this causes its pressure to decrease
  by Bernoulli’s principle. Specifically, we have
                                                     1           1
                         A0 v = (A0 − At )vf ,   Pf + ρvf2 = P0 + ρv 2
                                                     2           2
  which gives a pressure drop of

                                       1                   1
                            Pf − P0 = − ρv 2                        −1 .
                                       2             (1 − At /A0 )2

  We neglected the change in density of the air, which is a good approximation when the train
  is much slower than the speed of sound. We’ll treat fluid flow with changing density in T3.

                                                 9


Kevin Zhou                                                            Physics Olympiad Handouts
