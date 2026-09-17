---
id: kevin-zhou-e8-ex002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-ex002
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

Example 2
A point charge q is inside a dielectric sphere of radius R with dielectric constant κ. Find the
electric field and charge density everywhere.
Solution
This is one of the simple symmetric cases where the electric field in the dielectric is simply
reduced by a factor of κ,
E =
q r̂
4πϵ0r2
×
(
1/κ r < R
1 r > R
.
2
Kevin Zhou Physics Olympiad Handouts
Inside the sphere, this corresponds to an electric polarization
P =
q
4πr2
χe
κ
r̂.
To check that this solution is actually right, we need to ensure the original point charge q,
plus the bound charge, indeed generates the claimed electric field.
The divergence of P is zero everywhere besides the origin, where negative bound charge piles
up to cancel some of the charge q. The charge at the origin is thus
q − qb = q

1 −
χe
κ

= q

1 −
κ − 1
κ

=
q
κ
which is consistent with Gauss’s law for E there. At the surface of the sphere, there is a
positive bound surface charge density
σb =
q
4πR2
χe
κ
which cancels the negative bound charge at the origin. Thus, by the shell theorem, the
electric field outside the sphere is indeed that of the point charge q alone.
