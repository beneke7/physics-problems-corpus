---
id: "kevin-zhou-e2-ex007"
source: "kevin-zhou"
native_id: "KZ-E2-EX007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e2-ex007"
topic: [electromagnetism]
subtopic: [dc-circuits, equivalent-resistance, voltage-divider, symmetry]
math_tools: [algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E2.txt"
source_url: "sources/kevin_zhou/site/handouts/E2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 7

       Consider the 3 × 3 grid below, where every edge is a resistor R.




       Find the equivalent resistance between nodes 1 and 16.

       Solution
       By the above idea, we can short together two pairs of nodes, by the diagonal symmetry of
       the network. By using the same idea in reverse, we can also break two nodes each into two


                                                      14


    Kevin Zhou                                                               Physics Olympiad Handouts



       pieces. This is valid because the separated nodes still have the same potential in the new
       network, by the diagonal symmetry.




       Now, the circuit has been reduced to combinations of series and parallel resistors. The
       resistance between 1 and 2/3 is R/2. The resistance between 2/3 and 14/15 is the combination
       of three networks in parallel, and the resistance between 14/15 and 16 is R/2. Thus,
                                                                 !
                                              1 1 1 −1 1

                                        1                              13
                              Req =       +     + +          +     R = R.
                                        2     3 3 2            2        7


       Example 8: PPP 23

       A black box contains a resistor network and has two output terminals.




       If a battery of voltage V is connected across the first terminal, the voltage across the second
       terminal is V /2. If a battery of voltage V is connected across the second terminal, the voltage
       across the first terminal is V . Find one possible configuration of the resistors inside the box.

       Solution
       A simple configuration with two equal resistors works.




      When a battery is connected across II, the horizontal resistor doesn’t do anything. When a
      battery is connected across I, the two resistors comprise a voltage divider.
