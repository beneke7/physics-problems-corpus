---
id: kevin-zhou-e1-p005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e1-p005
solution_type: author
source_document: solution-document-kevin-zhou-e1sol
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E1Sol.pdf."
---

[3] Problem 5. Consider a vector field expressed in polar coordinates, F = Frr̂ + Fθθ̂ where r̂ and θ̂
are unit vectors in the radial and tangential directions. Gauss’s law in differential form still works
in these coordinates, but the form of the divergence is different.
By considering the flux per unit area out of a small region bounded by r and r + dr, and θ and
θ+dθ, and applying Gauss’s law in integral form, find what the divergence in polar coordinates must
be for Gauss’s law in differential form to hold. (Optional: try generalizing to spherical coordinates.)
Solution. By summing up contributions from each of the four sides, and letting (Fr,Fθ) be the
vector field at one of the corners, the flux through the region is
dΦ = (Fr + dFr)((r + dr)dθ) − Fr(rdθ) + (Fθ + dFθ)dr − Fθdr.
In two dimensions, the divergence is the flux per area, dA = rdrdθ, so
∇ · F =
dΦ
dA
=
1
r
∂(rFr)
∂r
+
1
r
∂Fθ
∂θ
.
In case you’re wondering, the answer for spherical coordinates in three dimensions is
∇ · F =
1
r2
∂(r2Fr)
∂r
+
1
rsinθ
∂(Fθ sinθ)
∂θ
+
1
rsinθ
∂Fϕ
∂ϕ
where ϕ is the angle that goes from zero to 2π.
