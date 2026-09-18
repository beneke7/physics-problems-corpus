---
id: kevin-zhou-m2-p033
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-p033
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

[4] Problem 33. Two coaxial rings of radius R are placed a distance L apart from each other in
vacuum. A soap film with surface tension γ connects the two rings.
(a) Derive a differential equation for the shape r(z) of the film, and solve it.
(b) Show that for sufficiently large L, there are no solutions. If L is increased to this value, what
happens to the film?
(c) Using a computer or calculator, find the largest possible value of L.
We’ll consider surface tension in more detail in T3.
Solution. (a) Consider a segment of the bubble between z and z + dz. The net forces exerted
by surface tension on both sides along the z-direction are 4πrγ/
√
1 + r′2. To balance forces
in the z-direction for each segment, the quantity r/
√
1 + r′2 must be independent of z, so
r2
= A2
(1 + r′2
)
for some constant A. Separating and integrating, we have
Z
dz =
Z
Adr
√
r2 − A2
and substituting r = Acoshu and integrating yields
z + C = Acosh−1
(r/A), r = Acosh

z + C
A

for another constant C. Setting the rings to be at z = ±L/2, we have C = 0. The quantity
A is the minimum radius, which occurs by symmetry at z = 0.
You may have noticed that the answer is a catenary, which is the same as the answer to
