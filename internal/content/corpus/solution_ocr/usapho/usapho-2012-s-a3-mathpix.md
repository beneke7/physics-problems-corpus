---
id: solution-ocr-usapho-2012-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2012-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A3

This problem inspired by the 2008 Guangdong Province Physics Olympiad
Two infinitely long concentric hollow cylinders have radii $a$ and $4 a$. Both cylinders are insulators; the inner cylinder has a uniformly distributed charge per length of $+ \lambda$; the outer cylinder has a uniformly distributed charge per length of $- \lambda$.

An infinitely long dielectric cylinder with permittivity $\epsilon = \kappa \epsilon _ { 0 }$, where $\kappa$ is the dielectric constant, has a inner radius $2 a$ and outer radius $3 a$ is also concentric with the insulating cylinders. The dielectric cylinder is rotating about its axis with an angular velocity $\omega \ll c / a$, where $c$ is the speed of light. Assume that the permeability of the dielectric cylinder and the space between the cylinders is that of free space, $\mu _ { 0 }$.
![](../../../figures/solution-ocr/e97e387468620341eeeed731.jpg)

a. Determine the electric field for all regions.
b. Determine the magnetic field for all regions.

## Solution

a. Consider a Gaussian cylinder of radius $r$ and length $l$ centered on the cylinder axis. The electric field is radial, so Gauss's Law states that
$$
\oint \mathbf { E } \cdot d \mathbf { A } = \frac { q _ { \text {in } } } { \epsilon _ { 0 } } \Rightarrow 2 \pi r E l = \frac { \lambda _ { \text {in } } l } { \epsilon _ { 0 } }
$$
where $\lambda _ { \text {in } }$ is the linear charge density enclosed in the cylinder, so
$$
\mathbf { E } = \frac { \lambda _ { \text {in } } } { 2 \pi r \epsilon _ { 0 } } \hat { \mathbf { r } } .
$$
The field due to the hollow cylinders alone is therefore
$$
\mathbf { E } _ { \text {applied } } = \frac { \lambda } { 2 \pi r \epsilon _ { 0 } } \hat { \mathbf { r } } \times \begin{cases} 0 & r < a \\ 1 & a < r < 4 a \\ 0 & r > 4 a \end{cases}
$$
However, the field within the dielectric is reduced by a factor $\kappa$, so that in total
$$
\mathbf { E } = \frac { \lambda } { 2 \pi r \epsilon _ { 0 } } \hat { \mathbf { r } } \times \begin{cases} 0 & r < a \\ 1 & a < r < 2 a \\ 1 / \kappa & 2 a < r < 3 a \\ 1 & 3 < r < 4 a \\ 0 & r > 4 a \end{cases}
$$

b. We can apply the results of the previous section to obtain the enclosed charge density $\lambda _ { \text {in } }$ as a function of radius,
$$
\lambda _ { \mathrm { in } } = \begin{cases} 0 & r < a \\ \lambda & a < r < 2 a \\ \lambda / \kappa & 2 a < r < 3 a \\ \lambda & 3 < r < 4 a \\ 0 & r > 4 a \end{cases}
$$
Defining
$$
\lambda _ { i } = \left( 1 - \frac { 1 } { \kappa } \right) \lambda
$$
we conclude that a charge density $- \lambda _ { i }$ exists on the inner surface of the dielectric, a charge density $\lambda _ { i }$ exists on the outer surface, and there is no charge on the interior.
As with the case of a very long solenoid, we expect the magnetic field to be entirely parallel to the cylinder axis $\hat { \mathbf { z } }$, and to go to zero for large $r$. Consider an Amperian loop of length $l$ extending along a radius, the inner side of which is at radius $r$ and the outer side of which is at a very large radius. We have on this loop
$$
\oint \mathbf { B } \cdot d \mathbf { l } = \mu _ { 0 } I _ { \mathrm { in } } .
$$
Letting $B$ be the magnitude of the magnetic field at radius $r$, we find
$$
B = \frac { \mu _ { 0 } I _ { \text {in } } } { l } .
$$
For $r > 3 a , I _ { \text {in } } = 0$, since the charge on the hollow cylinders is not moving. For $2 a < r < 3 a$, the loop now encloses the outer surface of the dielectric. In time $\frac { 2 \pi } { \omega }$ a charge $\lambda _ { i } l$ passes through the loop, so the current due to the outer surface is
$$
I _ { \mathrm { out } } = \frac { \lambda _ { i } l \omega } { 2 \pi }
$$
and thus this is $I _ { \text {in } }$ for $2 a < r < 3 a$. For $r < 2 a$, the loop now encloses both surfaces of the dielectric; the inner surface contributes a current that exactly cancels the outer one, so again $I _ { \text {in } } = 0$. Putting this together,
$$
\mathbf { B } = \frac { \mu _ { 0 } \omega \lambda _ { i } } { 2 \pi } \hat { \mathbf { z } } \times \begin{cases} 0 & r < 2 a \\ 1 & 2 a < r < 3 a \\ 0 & r > 3 a \end{cases}
$$
