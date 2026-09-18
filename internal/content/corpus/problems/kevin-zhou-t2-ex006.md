---
id: "kevin-zhou-t2-ex006"
source: "kevin-zhou"
native_id: "KZ-T2-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex006"
topic: [thermodynamics]
subtopic: [osmotic-pressure, entropy, entropic-force]
math_tools: [differentiation]
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

# KZ-T2-EX006

  Example 6: Osmotic Pressure

  A water-filled tube is divided by a membrane which only allows water molecules through.
  When a substance is dissolved in one half of the tube, forming N ions, the water level on
  that side is observed to go up, as shown.




                                                9


Kevin Zhou                                                            Physics Olympiad Handouts




  Explain why, and calculate the height difference, neglecting interactions between different
  ions, and between the ions and the water.

  Solution
  Osmotic pressure is an example of an entropic force. Suppose the water level on one side of
  the tube goes up. The water is otherwise unchanged, since it’s just translated along the tube,
  so its entropy has not changed. But its energy is higher, and this energy must have come via
  heat transfer from the environment. Hence the entropy of the environment has decreased.

  If there were no dissolved ions, this would show why water levels don’t spontaneously go up:
  it is forbidden by the second law. But here, increasing the water in the section with the ions
  increases the ions’ entropy, since they now have more positions they could be in. Since the
  number of available quantum states is proportional to the available volume, we have

                                       Sion = N kB log V

  up to an additive constant, which means that
                                                  N kB
                                        dSion =        dV.
                                                   V
  In equilibrium, let there be an osmotic pressure difference P across the membrane. Then
  moving a volume dV of water across it costs energy P dV , so
                                                d̄Q    P
                                    dSenv = −       = − dV.
                                                 T     T
  In thermodynamic equilibrium the total entropy is maximized, giving

                                       dSion + dSenv = 0.

  Solving for the osmotic pressure gives

                                           P V = N kB T.

  The height difference is simply found using hydrostatic pressure,
                                             P    N kB T
                                       h=       =        .
                                             ρg    ρV g


                                                10


    Kevin Zhou                                                               Physics Olympiad Handouts



       The appearance of a pressure here in response to an opportunity for decreasing entropy is
       generally called an “entropic force”. In fact, you might have already seen this result in
       chemistry class, but in rather different notation. In chemistry textbooks, you’ll typically see

                                                  Π = iM RT

       where Π is the osmotic pressure, M is the molarity of solute, and the van ’t Hoff factor i is
       the number of moles of ions per mole of solute. This is perfectly equivalent to what we found.
