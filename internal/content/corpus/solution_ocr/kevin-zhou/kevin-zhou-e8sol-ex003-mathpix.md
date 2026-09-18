---
id: solution-ocr-kevin-zhou-e8sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e8-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3
A dielectric sphere of radius $R$ and dielectric constant $\kappa$ is placed in a uniform field $\mathbf { E } _ { 0 }$, and as a result develops a uniform polarization $\mathbf { P }$. Find $\mathbf { P }$ and the field inside the sphere.

Solution
In example 1, we found the electric field due to the polarized sphere itself, which we'll call $\mathbf { E } _ { p }$. Here, we must remember that the polarization is produced in response to the total electric field inside the sphere,

$$
\mathbf { P } = \chi _ { e } \epsilon _ { 0 } \mathbf { E } , \quad \mathbf { E } = \mathbf { E } _ { 0 } + \mathbf { E } _ { p } .
$$

Using our previous result for $\mathbf { E } _ { p }$ and solving the system, we find

$$
\mathbf { E } = \frac { 3 } { \kappa + 2 } \mathbf { E } _ { 0 } , \quad \mathbf { P } = 3 \frac { \kappa - 1 } { \kappa + 2 } \epsilon _ { 0 } \mathbf { E } _ { 0 } .
$$

The polarizability $\alpha$ of each atom is defined as the dipole moment per applied field,

$$
\mathbf { p } = \alpha \mathbf { E } _ { 0 }
$$

so we have shown above that

$$
\alpha = \frac { 3 \epsilon _ { 0 } } { n } \frac { \kappa - 1 } { \kappa + 2 }
$$

where $n$ is the number density of atoms. This is the Clausius-Mossotti formula; it relates the macroscopically measurable parameter $\kappa$ to the microscopic parameter $\alpha$.
[2] Problem 2 (Purcell 10.10). Assume that the uniform field $\mathbf { E } _ { 0 }$ that causes the electric field in example 3 is produced by large capacitor plates very far away. The field lines tangent to the sphere


hit each of the distant capacitor plates in a circle of radius $r$. Find $r$ in terms of $R$ and $\kappa$.
Solution. The field lines are tangent at the widest part of the sphere. Consider a Gaussian surface which is bounded by a distant capacitor plate, a horizontal slice through the middle of the sphere, and all of these field lines. Using the results of example 3, the charge contained inside is

$$
Q = \pi R ^ { 2 } \frac { 3 ( \kappa - 1 ) } { \kappa + 2 } \epsilon _ { 0 } E _ { 0 } - \pi r ^ { 2 } \epsilon E _ { 0 }
$$

where the first term is from cutting the polarized sphere. The flux through this surface is

$$
\Phi = - \frac { 3 } { \kappa + 2 } \pi R ^ { 2 } E _ { 0 } .
$$

Applying Gauss's law, we have

$$
r = \sqrt { \frac { 3 \kappa } { \kappa + 2 } } R .
$$

Idea 3
The "free" charge density $\rho _ { f }$ is the part of the charge density that isn't bound, so that

$$
\rho = \rho _ { b } + \rho _ { f } .
$$

If we take the divergence of $\mathbf { P } = \epsilon _ { 0 } \chi _ { e } \mathbf { E }$, we get $\rho _ { b } = - \chi _ { e } \rho$ inside a uniform dielectric, so

$$
\rho = \rho _ { f } / \kappa .
$$

That is, a uniform dielectric "screens" charges embedded within it, reducing it by a factor of $\kappa$. That's exactly what we saw in example 2, and it also tells us that a conductor can be viewed as a dielectric with $\kappa \rightarrow \infty$, because conductors completely expel electric fields.

The difficulty in dealing with dielectrics is when $\kappa$ changes in space, such as at the boundary of a dielectric, where a bound surface charge density $\sigma _ { b }$ can appear. If all the free charges in a problem are outside of uniform dielectrics, bound charges only appear on their surfaces.
