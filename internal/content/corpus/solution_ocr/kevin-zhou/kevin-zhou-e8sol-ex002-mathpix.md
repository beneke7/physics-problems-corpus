---
id: solution-ocr-kevin-zhou-e8sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e8-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2
A point charge $q$ is inside a dielectric sphere of radius $R$ with dielectric constant $\kappa$. Find the electric field and charge density everywhere.

Solution
This is one of the simple symmetric cases where the electric field in the dielectric is simply reduced by a factor of $\kappa$,

$$
\mathbf { E } = \frac { q \hat { \mathbf { r } } } { 4 \pi \epsilon _ { 0 } r ^ { 2 } } \times \left\{ \begin{array} { l l }
1 / \kappa & r < R \\
1 & r > R
\end{array} . \right.
$$


Inside the sphere, this corresponds to an electric polarization

$$
\mathbf { P } = \frac { q } { 4 \pi r ^ { 2 } } \frac { \chi _ { e } } { \kappa } \hat { \mathbf { r } } .
$$

To check that this solution is actually right, we need to ensure the original point charge $q$, plus the bound charge, indeed generates the claimed electric field.

The divergence of P is zero everywhere besides the origin, where negative bound charge piles up to cancel some of the charge $q$. The charge at the origin is thus

$$
q - q _ { b } = q \left( 1 - \frac { \chi _ { e } } { \kappa } \right) = q \left( 1 - \frac { \kappa - 1 } { \kappa } \right) = \frac { q } { \kappa }
$$

which is consistent with Gauss's law for E there. At the surface of the sphere, there is a positive bound surface charge density

$$
\sigma _ { b } = \frac { q } { 4 \pi R ^ { 2 } } \frac { \chi _ { e } } { \kappa }
$$

which cancels the negative bound charge at the origin. Thus, by the shell theorem, the electric field outside the sphere is indeed that of the point charge $q$ alone.
