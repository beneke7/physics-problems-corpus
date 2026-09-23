---
id: "kevin-zhou-t2-ex004"
difficulty_level: 2
source: "kevin-zhou"
native_id: "KZ-T2-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex004"
topic: [thermodynamics]
subtopic: [entropy, mixing, reversible-processes]
math_tools: [algebra]
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

# KZ-T2-EX004

       Example 4: Mixing Entropy

      A container of volume V is divided in half by a partition. The two halves contain pure
      nitrogen and oxygen gas, respectively, both at pressure P and temperature T . The partition
      is removed and the gases are allowed to mix. How much does the entropy increase?

       Solution
      We cannot apply the formula dS = d̄Q/T , because the gas is not in equilibrium during
      the process. However, because entropy is a state function, we can calculate its change by
      considering a path that only goes through equilibrium states.

       Suppose we introduce a piston at one end of the container, which is magically transparent
       to oxygen atoms, and slowly and isothermally move it to the center of the container. This
       puts the nitrogen back where it started. The change in entropy of the nitrogen is
                                 Q    W          Vf
                        ∆SN =      =−   = nR log    = −nR log 2 = −N kB log 2
                                 T    T          Vi
      where N is the number of nitrogen molecules, which is also the number of oxygen molecules.
      If we do the same for the oxygen with another piston, introduced from the other side, we
      get another, equal decrease in the entropy. This takes us back to the original state, so since
      entropy is a state function, the increase in entropy when we allowed the gases to mix was

                                        ∆S = −2∆SN = 2N kB log 2.
