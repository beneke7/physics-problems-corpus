---
id: "kevin-zhou-e3-ex002"
source: "kevin-zhou"
native_id: "KZ-E3-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e3-ex002"
topic: [electromagnetism]
subtopic: [dc-circuits, thevenin-equivalent, internal-resistance, kirchhoff-laws]
math_tools: [algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E3.txt"
source_url: "sources/kevin_zhou/site/handouts/E3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 2

       Consider some batteries connected in parallel, with emfs Ei and internal resistances Ri . What
       is the Thevenin equivalent of this circuit?

       Solution
       The equivalent resistance is simply
                                                                        !−1
                                                       X 1
                                             Req =                            .
                                                                   Ri
                                                           i

       To infer Veq , we just need one more V (I) value. The most convenient is to set V = 0, shorting
       all of the batteries. Each battery alone would produce a current of Ei /Ri , so
                                                             !
                                                       X Ei
                                          0 = Veq −            Req .
                                                          Ri
                                                               i

       Thus, we have
                                                           !                     −1
                                                  X Ei              X 1
                                      Veq =                                           .
                                                      Ri                 Rj
                                                  i                 j



       Remark
       With ideal batteries, it’s easy to set up circuits that don’t make any sense.



                                             i1                    1A     i2



                                    1V                             1Ω                 1V



       For example, in the above circuit, Kirchhoff’s rules don’t determine the currents; they only
       say that i1 + i2 = 1 A. If the emfs of the batteries were different, the situation would be
       even worse: the equations would be contradictory, with no solution at all! In real life, this is
       avoided because all batteries have some internal resistance. Adding such a resistance to each
       battery, no matter how small, resolves the problem and gives a unique solution.
