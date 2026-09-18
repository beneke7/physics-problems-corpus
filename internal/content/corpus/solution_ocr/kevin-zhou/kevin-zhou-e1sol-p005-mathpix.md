---
id: solution-ocr-kevin-zhou-e1sol-p005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-p005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 5. Consider a vector field expressed in polar coordinates, $\mathbf { F } = F _ { r } \hat { \mathbf { r } } + F _ { \theta } \hat { \boldsymbol { \theta } }$ where $\hat { \mathbf { r } }$ and $\hat { \boldsymbol { \theta } }$ are unit vectors in the radial and tangential directions. Gauss's law in differential form still works in these coordinates, but the form of the divergence is different.
By considering the flux per unit area out of a small region bounded by $r$ and $r + d r$, and $\theta$ and $\theta + d \theta$, and applying Gauss's law in integral form, find what the divergence in polar coordinates must be for Gauss's law in differential form to hold. (Optional: try generalizing to spherical coordinates.)
Solution. By summing up contributions from each of the four sides, and letting $\left( F _ { r } , F _ { \theta } \right)$ be the vector field at one of the corners, the flux through the region is
$$
d \Phi = \left( F _ { r } + d F _ { r } \right) ( ( r + d r ) d \theta ) - F _ { r } ( r d \theta ) + \left( F _ { \theta } + d F _ { \theta } \right) d r - F _ { \theta } d r .
$$
In two dimensions, the divergence is the flux per area, $d A = r d r d \theta$, so
$$
\nabla \cdot \mathbf { F } = \frac { d \Phi } { d A } = \frac { 1 } { r } \frac { \partial \left( r F _ { r } \right) } { \partial r } + \frac { 1 } { r } \frac { \partial F _ { \theta } } { \partial \theta } .
$$
In case you're wondering, the answer for spherical coordinates in three dimensions is
$$
\nabla \cdot \mathbf { F } = \frac { 1 } { r ^ { 2 } } \frac { \partial \left( r ^ { 2 } F _ { r } \right) } { \partial r } + \frac { 1 } { r \sin \theta } \frac { \partial \left( F _ { \theta } \sin \theta \right) } { \partial \theta } + \frac { 1 } { r \sin \theta } \frac { \partial F _ { \phi } } { \partial \phi }
$$
where $\phi$ is the angle that goes from zero to $2 \pi$.
