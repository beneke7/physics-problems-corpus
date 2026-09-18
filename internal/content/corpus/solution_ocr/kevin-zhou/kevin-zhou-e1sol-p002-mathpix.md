---
id: solution-ocr-kevin-zhou-e1sol-p002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-p002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 2. Consider a cube with a corner at the origin, and sides parallel to the $x , y$, and $z$ axes. If a charge $q$ is placed at $( \epsilon , \epsilon , \epsilon )$ for some tiny $\epsilon$, what's the flux through each face of the cube?

Solution. There are three "opposite" faces with the same flux, and three "adjacent" faces with the same flux. Now consider adding seven more cubes, so that the charge is now at the center of a $2 \times 2 \times 2$ cube. The total flux through the outer faces of the cube is $q / \epsilon _ { 0 }$, and there are 24 unit faces, so the flux out of each "opposite" face is $q / 24 \epsilon _ { 0 }$. Now consider the original cube. By Gauss's law the total flux out must be $q / \epsilon _ { 0 }$, which means the flux out of each "adjacent" face is $7 q / 24 \epsilon _ { 0 }$.
(Note that if the charge were instead exactly at one of the corners, the fluxes through the opposite faces would still be $q / 24 \epsilon _ { 0 }$, while the fluxes through the adjacent faces would technically be undefined, since the electric field blows up on the face. But roughly speaking, the flux ought to be zero. Then the total flux out of the cube is only $q / 8 \epsilon _ { 0 }$, and that's because the corner cuts out one "octant" of the point charge's field. Also, note that the answer crucially depends on the fact that the charge's coordinates are all equal to $\epsilon$. For example, if the charge had been at $( 0,0 , \epsilon )$ instead, then a similar argument shows that the fluxes through the near faces are zero, zero, and $q / 8 \epsilon _ { 0 }$.)

Here's a followup question, proposed by Mike Winer and first solved by Jason Youm. If a charge $q$ is at the corner of a regular tetrahedron, what fraction of its flux goes through the tetrahedron's far face? You can't solve it with the same trick as the cube, but it's possible to get the answer without any explicit integration by cleverly considering the flux through combinations of simpler surfaces, and using a little three-dimensional geometry. The answer is

$$
\frac { 1 } { 2 } - \frac { 3 \arctan \sqrt { 2 } } { 2 \pi } \approx 0.044 .
$$

You can try deriving this for yourself, but it's quite tricky; roughly 4 points by the standards of this problem set. It turns out that it's possible to generalize these kinds of arguments even further, to solve the more general case where the charge is displaced from a vertex of a cube in an arbitrary direction! For a very deep dive, see this paper.


[2] Problem 3 (BAUPC). In both parts below, take the potential to be zero at infinity.

(a) Consider a solid sphere of uniform charge density. Find the ratio of the electrostatic potential at the surface to that at the center.
(b) Consider a solid cube of uniform charge density. Find the ratio of the electrostatic potential at a corner to that at the center. (Hint: use symmetry.)

Solution. (a) Let $U _ { 0 }$ be the potential at the surface. If the sphere has radius $R$ and charge density $\rho$, it has charge $Q = \frac { 4 } { 3 } \pi \rho R ^ { 3 }$ and the shell theorem gives $U _ { 0 } = Q / 4 \pi \epsilon _ { 0 } R$.
To go from the surface to the center, we need to further increase the potential by

$$
\Delta U = - \int _ { R } ^ { 0 } E ( r ) d r = \int _ { 0 } ^ { R } \frac { k Q r } { R ^ { 3 } } d r = \frac { 1 } { 2 } U _ { 0 }
$$

So the potential at the center of the sphere is $U _ { 0 } + \Delta U = 3 U _ { 0 } / 2$, and the desired ratio is 2/3.

(b) Let $U _ { 0 }$ be the potential at a corner. Now, imagine dividing the cube into 8 identical smaller cubes. The center of the cube is at the corner of all 8 . For a fixed charge density, potentials scale like $U \propto Q / r \propto \rho r ^ { 2 }$, so each of these cubes contributes 1/4 as much as the corner of the original cube. Thus, the potential at the center is $8 \left( U _ { 0 } / 4 \right) = 2 U _ { 0 }$, and the desired ratio is $1 / 2$.
