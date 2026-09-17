---
id: kevin-zhou-erev-p027
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-erev-p027
solution_type: author
source_document: solution-document-kevin-zhou-erevsol
source_pdf: sources/kevin_zhou/site/handouts/ERevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/ERevSol.pdf."
---

[3] Problem 27. Consider two infinite parallel plates held at z = h/2 and z = −h/2, with uniform
charge densities σ and −σ respectively, and negligible mass. The plates are initially at rest.
(a) Both plates are uniformly accelerated by a = aŷ. During this process, find the electric field
induced between the plates. Assume a is small, so that radiation effects can be neglected,
i.e. assume the magnetic field is always approximately magnetostatic.
(b) During this process, find the external force per unit area needed to accelerate the plates.
(c) The acceleration stops when the plates have speed v0. Verify that the total work done is equal
to the change in electromagnetic field energy.
Solution. (a) The magnetic field is B = −µ0σvx̂ between the plates, and zero outside them,
where the speed is v = at. Applying Faraday’s law using rectangular loops in the yz plane,
Ey = −µ0σa ×

 
 
h/2 z > h/2
z −h/2 < z < h/2
−h/2 z < −h/2
We always also have the usual perpendicular electric field Ez of a parallel plate capacitor
between the plates, but this isn’t relevant for part (b), since it doesn’t affect the work, nor
for part (c), since it stays the same.
(b) On the top plate the induced electric field produces a force per unit area |Ey|σ = µ0σ2ah/2
pointing against the acceleration. There is an identical force on the bottom plate, so the total
is µ0σ2ah.
(c) The total work done per unit area is the force per unit area times the displacement,
work
area
= (µ0σ2
ah)
v2
0
2a
=
µ0σ2v2
0h
2
.
On the other hand, before and after the acceleration we have the same electric field (i.e. that
of a parallel plate capacitor), while after the acceleration a magnetic field of magnitude
B = µ0σv0 appears between the plates. This gives
field energy
area
=
B2h
2µ0
=
µ0σ2v2
0h
2
as expected.
