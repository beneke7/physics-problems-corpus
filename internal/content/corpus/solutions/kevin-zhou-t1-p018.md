---
id: kevin-zhou-t1-p018
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-p018
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

[3] Problem 18. A one-dimensional quantum harmonic oscillator has energy levels En = nE0 for
n ≥ 0, as you will show in X1.
(a) Compute the average energy of the system at temperature T.
(b) Show that at high temperatures, the average energy obeys the equipartition theorem.
(c) Show that the energy at low temperatures is instead exponentially suppressed. This is why
some modes are said to “freeze out”, so they do not contribute to CV .
The phenomenon of “freezing out” was one of the greatest puzzles of classical physics in the 19th
century, though nobody anticipated the resolution would be as strange as quantum mechanics.
Solution. (a) The average energy is
⟨E⟩ =
X
n≥0
nE0e−nE0/kBT
X
n≥0
e−nE0/kBT
.
There are several ways to evaluate the arithmetic-geometric sum in the numerator, but we’ll
show one slick way which is very useful in more advanced physics. We let
f(x) =
X
n≥0
e−nx
=
1
1 − e−x
,
and note that the desired sum is related to the derivative,
X
n≥0
ne−nx
= −f′
(x) =
e−x
(1 − e−x)2
.
Combining these results, we conclude
⟨E⟩ =
e−E0/kBT
1 − e−E0/kBT
E0.
21
Kevin Zhou Physics Olympiad Handouts
(b) Note that if kBT ≫ E0, then e−E0/kBT ≈ 1 − E0/kBT, so plugging into the formula, we get
that ⟨E⟩ ≈ kBT, as desired.
(c) For low temperatures, we have e−E0/kBT ≪ 1, which gives ⟨E⟩ ≈ E0e−E0/kBT .
