---
id: kevin-zhou-e1-p002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e1-p002
solution_type: author
source_document: solution-document-kevin-zhou-e1sol
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E1Sol.pdf."
---

[2] Problem 2. Consider a cube with a corner at the origin, and sides parallel to the x, y, and z axes.
If a charge q is placed at (ϵ,ϵ,ϵ) for some tiny ϵ, what’s the flux through each face of the cube?
Solution. There are three “opposite” faces with the same flux, and three “adjacent” faces with
the same flux. Now consider adding seven more cubes, so that the charge is now at the center of
a 2 × 2 × 2 cube. The total flux through the outer faces of the cube is q/ϵ0, and there are 24 unit
faces, so the flux out of each “opposite” face is q/24ϵ0. Now consider the original cube. By Gauss’s
law the total flux out must be q/ϵ0, which means the flux out of each “adjacent” face is 7q/24ϵ0.
(Note that if the charge were instead exactly at one of the corners, the fluxes through the
opposite faces would still be q/24ϵ0, while the fluxes through the adjacent faces would technically
be undefined, since the electric field blows up on the face. But roughly speaking, the flux ought
to be zero. Then the total flux out of the cube is only q/8ϵ0, and that’s because the corner cuts
out one “octant” of the point charge’s field. Also, note that the answer crucially depends on the
fact that the charge’s coordinates are all equal to ϵ. For example, if the charge had been at (0,0,ϵ)
instead, then a similar argument shows that the fluxes through the near faces are zero, zero, and
q/8ϵ0.)
Here’s a followup question, proposed by Mike Winer and first solved by Jason Youm. If a charge
q is at the corner of a regular tetrahedron, what fraction of its flux goes through the tetrahedron’s
far face? You can’t solve it with the same trick as the cube, but it’s possible to get the answer
without any explicit integration by cleverly considering the flux through combinations of simpler
surfaces, and using a little three-dimensional geometry. The answer is
1
2
−
3arctan
√
2
2π
≈ 0.044.
You can try deriving this for yourself, but it’s quite tricky; roughly 4 points by the standards of
this problem set. It turns out that it’s possible to generalize these kinds of arguments even further,
to solve the more general case where the charge is displaced from a vertex of a cube in an arbitrary
direction! For a very deep dive, see this paper.
2
Kevin Zhou Physics Olympiad Handouts
[2] Problem 3 (BAUPC). In both parts below, take the potential to be zero at infinity.
(a) Consider a solid sphere of uniform charge density. Find the ratio of the electrostatic potential
at the surface to that at the center.
(b) Consider a solid cube of uniform charge density. Find the ratio of the electrostatic potential
at a corner to that at the center. (Hint: use symmetry.)
Solution. (a) Let U0 be the potential at the surface. If the sphere has radius R and charge
density ρ, it has charge Q = 4
3πρR3 and the shell theorem gives U0 = Q/4πϵ0R.
To go from the surface to the center, we need to further increase the potential by
∆U = −
Z 0
R
E(r)dr =
Z R
0
kQr
R3
dr =
1
2
U0
So the potential at the center of the sphere is U0 + ∆U = 3U0/2, and the desired ratio is 2/3.
(b) Let U0 be the potential at a corner. Now, imagine dividing the cube into 8 identical smaller
cubes. The center of the cube is at the corner of all 8. For a fixed charge density, potentials
scale like U ∝ Q/r ∝ ρr2, so each of these cubes contributes 1/4 as much as the corner of the
original cube. Thus, the potential at the center is 8(U0/4) = 2U0, and the desired ratio is 1/2.
