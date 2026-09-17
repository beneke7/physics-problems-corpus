---
id: kevin-zhou-m5-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m5-p004
solution_type: author
source_document: solution-document-kevin-zhou-m5sol
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M5Sol.pdf."
---

[3] Problem 4. Basic moment of inertia computations.
(a) Compute the moment of inertia for an Lx × Ly rectangular plate about an axis passing
perpendicular to it through the center.
(b) Compute the moment of inertia for a uniform disc of radius R and mass M, about an axis
perpendicular to it through its center. What about an axis lying in the disc, passing through
its center?
(c) Compute the moment of inertia of a uniform solid cone of mass M, with height H and a base
of radius R, about its symmetry axis.
Solution. (a) We have
Iy =
Z Lx/2
−Lx/2
x2
(M/Lx)dx =
1
12
ML2
x
with a similar expression for Ix, giving an answer of M(L2
x + L2
y)/12.
(b) By direct integration,
I =
Z R
0
r2
(M/πR2
)2πrdr =
1
2
MR2
.
For an axis lying in the disc, the answer is half as much, MR2/4, by the perpendicular axis
theorem.
(c) First off, we know the height H doesn’t matter, because we can stretch the cone along its
symmetry axis without changing the answer. Letting the density be ρ, we can integrate over
the discs making up the cone,
I =
Z
dI =
Z
1
2
(dm)r2
=
Z H
0
1
2
(ρπr2
dh)r2
5
Kevin Zhou Physics Olympiad Handouts
where the radius of the disc at height h is, in some set of coordinates, r(h) = R(h/H). Plugging
this in, we get
I =
Z H
0
π
2
ρR4 h4
H4
dh =
πρR4H
10
.
It remains to find ρ, by noting that
M =
Z
dm =
Z H
0
ρπr2
dh = ρπ
R2
H2
Z H
0
h2
dh =
πρR2H
3
.
Plugging in the result for ρ gives
I =
3
10
MR2
.
This makes sense, as it’s somewhat less than the moment of inertia of a uniform disc; a cone
has comparatively more of its mass closer to the axis.
