---
id: kevin-zhou-e6-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e6-ex001
solution_type: author
source_document: solution-document-kevin-zhou-e6sol
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E6Sol.pdf."
---

Example 1
Consider a circuit with a battery of emf E, a resistor R, and an inductor L in series, with
zero initial current. Find the current I(t) and verify that energy is conserved.
Solution
Kirchhoff’s loop equation is
E = L
dI
dt
+ IR.
To solve for the current, we can separate and integrate, giving
dt
L
=
dI
E − IR
which yields
I(t) =
E
R
(1 − e−(R/L)t
).
At long times, the inductor has no effect, since the current stops changing. To verify energy
conservation we multiply Kirchhoff’s loop equation by I, since power is emf times current,
IE = LI
dI
dt
+ I2
R.
1
Kevin Zhou Physics Olympiad Handouts
The left-hand side is the power output by the battery, and the two terms on the right-hand
side represent the rate of increase in energy LI2/2 stored in the inductor, and the power
dissipated in the resistor, so all power is accounted for.
