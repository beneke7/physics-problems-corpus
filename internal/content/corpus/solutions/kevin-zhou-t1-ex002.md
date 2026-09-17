---
id: kevin-zhou-t1-ex002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-ex002
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

Example 2
A thermally isolated cylinder is divided into two compartments by a thermally conductive
piston. Initially, the piston divides the cylinder into two compartments, A and B, of equal
volume V/2 and temperature T0. One mole of monatomic gas is in each compartment. An
external agent slowly moves the piston to the side until the volumes are V/3 and 2V/3.
Throughout this process, the temperature remains uniform. What is the final temperature?
Solution
The tricky thing about this problem is that the pressures in the two compartments aren’t equal;
this is possible because the external agent is holding the piston. Instead, the temperatures
are made equal by heat conduction. The work done by the agent is
dW = −pA dVA − pB dVB = −RT

dVA
VA
+
dVB
VB

.
On the other hand, this is also equal to the increase in energy,
dW = dU =
3
2
nRdT = 3RdT.
3
Kevin Zhou Physics Olympiad Handouts
Combining the two gives a differential equation,
3
Z
dT
T
= −
Z
dVA
VA
−
Z
dVB
VB
which means the final temperature Tf obeys
3log
Tf
T0
= −log
2
3
− log
4
3
= log
9
8
, Tf =
32/3
2
T0.
