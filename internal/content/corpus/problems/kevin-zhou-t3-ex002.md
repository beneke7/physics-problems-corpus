---
id: "kevin-zhou-t3-ex002"
source: "kevin-zhou"
native_id: "KZ-T3-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t3-ex002"
topic: [mechanics]
subtopic: [capillarity, surface-tension, contact-angle]
math_tools: [calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T3.txt"
source_url: "sources/kevin_zhou/site/handouts/T3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T3-EX002

  Example 2

  A very thin, hollow glass tube of radius r is dipped vertically inside a container of water.




  Find the equilibrium height of the water in the tube.




                                                  3


Kevin Zhou                                                             Physics Olympiad Handouts


  Solution
  We first encountered this problem in M7, where we solved it by using Pascal’s principle,
  giving an answer in terms of the contact angle. The derivation above of the contact angle
  completes this solution. However, we can also solve the problem using energy or force.

  In terms of energy, if we move the height of the water up by δh, then

                             dU = ρπr2 gh δh + (γsl − γs )2πr δh = 0

  and solving gives
                                        2(γs − γsl )   2γl cos θ
                                   h=                =
                                           ρgr           ρgr
  using Young’s equation. Alternatively, in terms of force, consider the vertical forces acting
  on the column of water inside the tube. There is an upward force of adhesion from the solid
  wall of 2πrUsl , and a downward surface tension force from the liquid below of 2πrγl . Then

                                 F = 2πr(Usl − γl ) − ρπr2 gh = 0

  which yields precisely the same result.
