---
id: kevin-zhou-e2-p003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e2-p003
solution_type: author
source_document: solution-document-kevin-zhou-e2sol
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E2Sol.pdf."
---

[2] Problem 3. Suppose a point charge q is a distance b from the center of a spherical grounded
conducting shell of radius r.
(a) Find the force on the charge, considering both the cases b < r and b > r.
(b) In both cases, what is the total charge on the shell?
Solution. (a) In both cases, the image charge is a distance b′ = r2/b from the center of the shell,
and its charge is q′ = −q
p
b′/b = −qr/b. So the force on the charge has magnitude
F =
qq′
4πϵ0(b − b′)2
=
q2rb
4πϵ0(b2 − r2)2
.
It always points towards the nearest point on the surface of the sphere.
(b) For b > r the answer is simply q′, but the case b < r is different. Since the conductor shields
the details of the charges inside, the field outside the sphere must be spherically symmetric.
But we also know the sphere is at zero potential, so the field outside must be exactly zero, so
by using a spherical Gaussian surface, the total charge in and within the shell is zero.
Therefore, the total charge on the shell has to be −q. It is a combination of a total charge
q′ spread over the surface, corresponding to the image charge, and a charge −q − q′ spread
uniformly over the surface. This second contribution to the charge doesn’t show up in the
image charge argument, because it makes no electric field inside the shell.
4
Kevin Zhou Physics Olympiad Handouts
