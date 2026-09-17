---
id: kevin-zhou-t2-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p016
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[2] Problem 16. Some basic manipulations with Planck’s law.
(a) Show that J ∝ T4 by nondimensionalizing the integral, as explained in P1.
(b) Prove Wien’s displacement law, which states that the maximum of I(f) for an ideal blackbody
occurs at a frequency which is proportional to T.
Solution. (a) By definition, we have
J =
Z ∞
0
2π(kBT)3(hf/kBT)3
c2h2
1
ehf/kBT − 1
kBT
h
d

hf
kBT

.
Let x ≡ hf/kBT. Then we get
J =
2π(kBT)4
c2h3
Z ∞
0
x3dx
ex − 1
The integral will evaluate to a dimensionless constant, so we conclude J ∝ T4.
22
Kevin Zhou Physics Olympiad Handouts
(b) As in part (a), note that we can write I(f) in the form
I(f) = (constants independent of f) ×
x3
ex − 1
, x =
hf
kBT
.
Thus, the shape of I(f) depends only on the dimensionless combination x. If there is a
maximum in I(f) for some value of x, this is true for any temperature. Since the maximum
happens at the same value of x, we have hfmax/kBT constant, so fmax ∝ T as desired.
