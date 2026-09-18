---
id: solution-ocr-kevin-zhou-e1sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3
Suppose the region $0 < x < d$ has charge density $- \rho$, and the region $- d < x < 0$ has charge density $\rho$. Find the electric field everywhere.

Solution
By translational symmetry, the field always points along $\hat { \mathbf { x } }$ and only depends on $x , \mathbf { E } ( \mathbf { r } ) =$ $E ( x ) \hat { \mathbf { x } }$. By applying the integral form of Gauss's law to a rectangular prism, with one side at $x _ { l }$ and another at $x _ { r }$, we have

$$
E \left( x _ { r } \right) - E \left( x _ { l } \right) = \frac { 1 } { \epsilon _ { 0 } } \int _ { x _ { l } } ^ { x _ { r } } \rho ( x ) d x , \quad E ( x ) = \frac { 1 } { \epsilon _ { 0 } } \int _ { 0 } ^ { x } \rho ( x ) d x + E _ { 0 }
$$

Since the divergence of $\mathbf { E } ( \mathbf { r } )$ is just $\partial E ( x ) / \partial x$, this clearly satisfies the differential form of Gauss's law. To fix the undetermined constant $E _ { 0 }$, we could demand the field be zero on both sides of the charge distribution, motivated by symmetry. Then we have

$$
E ( x ) = \frac { \rho } { \epsilon _ { 0 } } \times \begin{cases} d - x & 0 < x < d \\ d + x & - d < x < 0 \\ 0 & \text { elsewhere } \end{cases}
$$

Example 4
Find the electric field of a spherically symmetric charge density $\rho ( r )$.

Solution
By spherical symmetry, the field always points radially and only depends on $r , \mathbf { E } ( \mathbf { r } ) = E ( r ) \hat { \mathbf { r } }$. By applying the integral form of Gauss's law to a sphere of radius $r$,

$$
4 \pi r ^ { 2 } E ( r ) = \frac { 1 } { \epsilon _ { 0 } } \int _ { 0 } ^ { r } d r ^ { \prime } 4 \pi r ^ { 2 } \rho \left( r ^ { \prime } \right) , \quad E ( r ) = \frac { 1 } { \epsilon _ { 0 } } \frac { 1 } { r ^ { 2 } } \int _ { 0 } ^ { r } d r ^ { \prime } r ^ { 2 } \rho \left( r ^ { \prime } \right)
$$

Let's check that this indeed satisfies the differential form of Gauss's law, using the divergence


in spherical coordinates. For any vector field $\mathbf { F } = F _ { r } \hat { \mathbf { r } } + F _ { \theta } \hat { \boldsymbol { \theta } } + F _ { \varphi } \hat { \boldsymbol { \varphi } }$, the divergence is
$$
\nabla \cdot \mathbf { F } = \frac { 1 } { r ^ { 2 } } \frac { \partial \left( r ^ { 2 } F _ { r } \right) } { \partial r } + \frac { 1 } { r \sin \theta } \frac { \partial } { \partial \theta } \left( F _ { \theta } \sin \theta \right) + \frac { 1 } { r \sin \theta } \frac { \partial F _ { \varphi } } { \partial \varphi } .
$$
Since $\mathbf { E }$ only has a radial component, $E _ { r } = E ( r )$, we quickly recover the desired result,
$$
\nabla \cdot \mathbf { E } = \frac { 1 } { r ^ { 2 } } \frac { \partial \left( r ^ { 2 } E ( r ) \right) } { \partial r } = \frac { 1 } { r ^ { 2 } \epsilon _ { 0 } } \frac { \partial } { \partial r } \int _ { 0 } ^ { r } d r ^ { \prime } r ^ { \prime 2 } \rho \left( r ^ { \prime } \right) = \frac { r ^ { 2 } \rho ( r ) } { r ^ { 2 } \epsilon _ { 0 } } = \frac { \rho ( r ) } { \epsilon _ { 0 } } .
$$
