---
id: kevin-zhou-e2-ex005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e2-ex005
solution_type: author
source_document: solution-document-kevin-zhou-e2sol
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E2Sol.pdf."
---

Example 5
Estimate the interaction force between a point charge q and a thin conducting rod of length ℓ,
which is a distance L ≫ ℓ from the charge and oriented along the separation between them.
Solution
The interaction occurs because the point charge induces negative charges on the near end of
the rod, and positive charges on the far end. These charges are then acted on by the electric
field of the point charge, causing a force.
To get a very crude estimate, let’s suppose charge Q appears on the far end and charge −Q
appears on the near end. The resulting field produced in the middle is
E ∼
kQ
ℓ2
.
On the other hand, this needs to cancel a field from the point charge of
E ∼
kq
L2
which tells us that Q ∼ (ℓ/L)2q. The force on the induced charges is then
F ∼ kqQ

1
(L + ℓ)2
−
1
L2

∼ −
kqQℓ
L3
∼ −
kq2ℓ3
L5
.
Again, the force is attractive, and falls off quickly with distance.
[3] Problem 20 (Physics Cup 2017). Estimate the interaction force between a point charge q and an
20
Kevin Zhou Physics Olympiad Handouts
infinitely thin circular neutral conducting disc of radius r if the charge is at the axis of the disc,
and the distance between the disc and the charge is L ≫ r.
Solution. The interaction is because charges redistribute on the disc to keep it an equipotential.
As an extremely rough approximation, suppose that charge Q appears near the rim of the disc and
charge −Q appears near the center. Then by dimensional analysis, the electric field in the disc is
E ∼
kQ
r2
.
On the other hand, the electric field due to the point charge along the disc is of order
E ∼
kq
L2
r
L
where the r/L factor is from projecting the field along the disc. Then
Q ∼ q
r3
L3
.
The force is attractive, and by Coulomb’s law,
F ∼ kqQ

1
L2
−
L
(L2 + r2)3/2

∼
kq2r5
L7
.
