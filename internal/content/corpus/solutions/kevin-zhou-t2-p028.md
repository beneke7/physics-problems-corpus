---
id: kevin-zhou-t2-p028
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p028
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[2] Problem 28. Consider a sphere of a radioactive rock, which constantly produces heat q per unit
volume. The outside of the sphere is held at temperature T0, the sphere’s radius is R, and its
thermal conductivity is κ. Find the temperature at the center of the sphere.
Solution. Just as in the example, we have
P(r) = −κ(4πr2
)
dT
dr
.
However, P(r) is not independent of r. It represents the rate at which heat passes through the
shell at radius r, so in the steady state it should be equal to the rate at which radioactive heat is
produced within that shell,
P(r) =
4
3
πr3
q.
Plugging this in gives
dT
dr
= −
qr
3κ
.
Integrating this and using T(R) = T0 gives
T(0) = T0 +
qR2
6κ
which grows rapidly with R.
As an application, farmers have to worry about hay bales spontaneously catching on fire. That’s
because q is small but nonzero, due to bacteria feeding on the hay and producing heat, and R can
be very large.
[3] Problem 29.   W 1 0USAPhO 2016, problem A4. A practical conduction question.
[3] Problem 30.   W 1 0USAPhO 2013, problem A1. An elegant conduction question.
[4] Problem 31. @ 1 0EuPhO 2023, problem 1. A cute problem on thermal lensing.
33
