---
id: "kevin-zhou-t1-ex002"
source: "kevin-zhou"
native_id: "KZ-T1-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-ex002"
topic: [thermodynamics]
subtopic: [ideal-gas, heat-conduction, quasistatic-processes, work-and-internal-energy]
math_tools: [calculus, logarithms]
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

# KZ-T1-EX002

       Example 2

       A thermally isolated cylinder is divided into two compartments by a thermally conductive
       piston. Initially, the piston divides the cylinder into two compartments, A and B, of equal
       volume V /2 and temperature T0 . One mole of monatomic gas is in each compartment. An


                                                     2


   Kevin Zhou                                                               Physics Olympiad Handouts



      external agent slowly moves the piston to the side until the volumes are V /3 and 2V /3.
      Throughout this process, the temperature remains uniform. What is the final temperature?

      Solution
      The tricky thing about this problem is that the pressures in the two compartments aren’t equal;
      this is possible because the external agent is holding the piston. Instead, the temperatures
      are made equal by heat conduction. The work done by the agent is

                                                                  dVA dVB
                            dW = −pA dVA − pB dVB = −RT                +       .
                                                                  VA      VB

      On the other hand, this is also equal to the increase in energy,
                                               3
                                      dW = dU = nR dT = 3R dT.
                                               2
      Combining the two gives a differential equation,
                                      Z          Z        Z
                                         dT         dVA     dVB
                                    3        =−         −
                                         T           VA     VB
      which means the final temperature Tf obeys

                                   Tf        2     4     9               32/3
                           3 log      = − log − log = log ,      Tf =         T0 .
                                   T0        3     3     8                2
