---
id: kevin-zhou-e6-ex005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e6-ex005
solution_type: author
source_document: solution-document-kevin-zhou-e6sol
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E6Sol.pdf."
---

Example 5
An imperfect voltage source consists of an ideal AC voltage source in series with an impedance
ZS. It is attached to a load of impedance ZL. What value of ZL maximizes the power
transferred to the load?
Solution
Write the impedances as ZL = RL + iXL. When the impedances are purely real, it’s a
familiar fact that the optimum is at RS = RL. We consider the case of general impedance
here to illustrate how to work with power. First, the current has amplitude
I0 =
|V |
|ZS + ZL|
.
The average power dissipated in the load is
P =
1
2
I2
0RL ∝
RL
|ZS + ZL|2
=
RL
(RS + RL)2 + (XS + XL)2
.
The denominator is minimized when XS + XL = 0, so the optimal real part is RL = RS by
the same logic as the purely real case. Thus, the highest power is achieved for ZL = Z∗
S.
[1] Problem 6. Consider the cube of resistances R, capacitances C, and inductances L shown below.
Compute the impedance between the terminals.
Solution. By symmetry, the three points close to one end have the same voltage, and the three
points close to the other end have the same as well. Thus, we simplify the diagram to the following:
R
R
R
L
L
L
L
L
L
C
C
C
We have impedance
Z =
1
3
R +
1
6
iωL +
1
3
1
iωC
.
