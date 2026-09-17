---
id: inpho-2022-a5
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2022-a5
solution_type: official
source_document: solution-document-inpho-2022-s
source_pdf: cache/phoxiv/inpho/2022_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2022_S.pdf."
---

5. [12 marks] A circuit consists of an emf source and ﬁve resistors with unknown resistances. When
an ideal ammeter is connected between points 1 and 2, its reading is IA. If instead a resistor R
is connected to the same two points, the current through that resistor is IR. If instead an ideal
voltmeter is connected between points 1 and 2, its reading is V . Obtain V in terms of IA, R and
IR only.
R1 R3
R4 R2
R0
1
2
Solution:
R1
I1
R3 I1 − IM
R4
I2 + IM
R2
I2
R0
I1 + I2
ε
RM
IM
Resistances, currents and emf are shown in the diagram. Imagine also there is a resistance
RM between terminals 1 and 2. We can set later RM = 0 for an ideal ammeter and IM = 0
for an ideal voltmeter placed between two terminals. Applying Krichoﬀ’s law
ε = (I1 + I2)R0 + I1R1 + (I1 − IM)R3 = (R0 + R1 + R3)I1 + I2R0 − IMR3 (5.1)
= R013I1 + R0I2 − R3IM (5.2)
ε = (I1 + I2)R0 + I2R2 + (I2 + IM)R4 = (R0 + R2 + R4)I2 + I1R0 + IMR4 (5.3)
= R024I2 + R0I1 + R4IM (5.4)
Solving above equations
I1 =
εR24 + IM(R0R34 + R3R24)
R0R1234 + R13R24
and I2 =
εR13 − IM(R0R34 + R4R13)
R0R1234 + R13R24
(5.5)
Potential diﬀerence between terminal 1 and 2 is
V12 = I2R2 − I1R1 = εA − IMB (5.6)
where the coeﬃcients A and B depends only on resistances in the circuit. When an ideal
ammeter is placed between terminals V12 = 0 and IM = IA.
εA = IAB
When a resistance R is placed between terminals, IM = IR and V12 = IRR. This yields
IRR = εA − IRB = IAB − IRB ⇒ B =
IRR
IA − IR
(5.7)
When an ideal voltmeter is placed between terminals, IM = 0. Hence V12 = εA − 0 = IAB or
V12 =
IAIR
IA − IR
R
Page 12 Code 65 Questions Last six digits of Roll No.:
**** END OF THE QUESTION PAPER ****
