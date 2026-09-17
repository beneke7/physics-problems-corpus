---
id: kevin-zhou-t2-ex004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-ex004
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

Example 4: Mixing Entropy
A container of volume V is divided in half by a partition. The two halves contain pure
nitrogen and oxygen gas, respectively, both at pressure P and temperature T. The partition
is removed and the gases are allowed to mix. How much does the entropy increase?
8
Kevin Zhou Physics Olympiad Handouts
Solution
We cannot apply the formula dS = d̄Q/T, because the gas is not in equilibrium during
the process. However, because entropy is a state function, we can calculate its change by
considering a path that only goes through equilibrium states.
Suppose we introduce a piston at one end of the container, which is magically transparent
to oxygen atoms, and slowly and isothermally move it to the center of the container. This
puts the nitrogen back where it started. The change in entropy of the nitrogen is
∆SN =
Q
T
= −
W
T
= nRlog
Vf
Vi
= −nRlog2 = −NkB log2
where N is the number of nitrogen molecules, which is also the number of oxygen molecules.
If we do the same for the oxygen with another piston, introduced from the other side, we
get another, equal decrease in the entropy. This takes us back to the original state, so since
entropy is a state function, the increase in entropy when we allowed the gases to mix was
∆S = −2∆SN = 2NkB log2.
