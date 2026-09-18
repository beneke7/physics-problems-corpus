---
id: solution-ocr-kevin-zhou-e8sol-p001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e8-p001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 1. An infinite cylindrical rod of radius $R$ has a uniform polarization P.

(a) If $\mathbf { P }$ is perpendicular to the rod's axis, describe $\mathbf { E }$ outside, and find the value of $\mathbf { E }$ inside.
(b) If $\mathbf { P }$ is parallel to the rod's axis, find the electric field everywhere.

Solution. (a) The resulting bound charge is equivalent to having two uniform cylinders of total linear charge density $\lambda$ separated by $\mathbf { d }$ where $\lambda \mathbf { d } = \left( \pi R ^ { 2 } \right) \mathbf { P }$.
Outside the rod, this is equivalent to two lines of charge density $\pm \lambda$ separated by $d$. As for inside, note that for a single cylinder with charge density $\rho$, Gauss's law tells us that the field is $\mathbf { E } = \rho \mathbf { r } / \left( 2 \epsilon _ { 0 } \right)$. Thus, superposing the positive and negative cylinders, the field inside the rod is

$$
\mathbf { E } = - \frac { \rho \mathbf { d } } { 2 \epsilon _ { 0 } } = - \frac { \mathbf { P } } { 2 \epsilon _ { 0 } }
$$

which is uniform. (There's a little paradox here: why doesn't the limit $R \rightarrow \infty$ of this answer coincide with the $R \rightarrow \infty$ limit of the result of example 1? As was discussed in a related context in E1, the issue is that when a charge configuration is infinite, the answer is ambiguous and depends on boundary conditions. In this problem, we are implicitly adopting boundary conditions that yield a field with cylindrical symmetry.)

(b) In this case there's no bound charge anywhere. (You can imagine charge displaced a bit from infinity in one direction to infinity in the other direction.) So there is no electric field at all.

Now let's think about how polarization arises in the first place.
Idea 2: Electric Susceptibility
A small number of insulators are "ferroelectrics", whose crystal structure lets them maintain a preferred polarization P in the absence of external electric fields. (You can suppose that the preceding example and problem were implicitly about ferroelectrics.) But the vast majority of insulators are dielectrics, whose polarization is related to the total electric field by

$$
\mathbf { P } = \epsilon _ { 0 } \chi _ { e } \mathbf { E } , \quad \epsilon = \epsilon _ { 0 } \left( 1 + \chi _ { e } \right) = \epsilon _ { 0 } \kappa
$$

where $\chi _ { e }$ is the electric susceptibility and $\kappa$ is the dielectric constant. The susceptibility is nonnegative, except in some very exotic materials. The key difficulty is that above, E is the total electric field, including that due to the bound charge, which in turn depends on P.
