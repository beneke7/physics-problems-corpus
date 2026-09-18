---
id: solution-ocr-usapho-2008-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2008-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A3

A certain planet of radius $R$ is composed of a uniform material that, through radioactive decay, generates a net power $P$. This results in a temperature differential between the inside and outside of the planet as heat is transfered from the interior to the surface.

The rate of heat transfer is governed by the thermal conductivity. The thermal conductivity of a material is a measure of how quickly heat flows through that material in response to a temperature gradient. Specifically, consider a thin slab of material of area $A$ and thickness $\Delta x$ where one surface is hotter than the other by an amount $\Delta T$. Suppose that an amount of heat $\Delta Q$ flows through the slab in a time $\Delta t$. The thermal conductivity $k$ of the material is then

$$
k = \frac { \Delta Q } { \Delta t } \frac { 1 } { A } \frac { \Delta x } { \Delta T } .
$$

It is found that $k$ is approximately constant for many materials; assume that it is constant for the planet.
For the following assume that the planet is in a steady state; temperature might depend on position, but does not depend on time.

a. Find an expression for the temperature of the surface of the planet assuming blackbody radiation, an emissivity of 1 , and no radiation incident on the planet surface. You may express your answer in terms of any of the above variables and the Stephan-Boltzmann constant $\sigma$.
b. Find an expression for the temperature difference between the surface of the planet and the center of the planet. You may express your answer in terms of any of the above variables; you do not need to answer part (a) to be able to answer this part.

## Solution

a. The Stefan-Boltzmann law states that
$$
P = \sigma A T _ { s } ^ { 4 }
$$
where $A$ is the surface area of the planet, and $T _ { s }$ the temperature at the surface. Then
$$
T _ { s } = \left( \frac { P } { 4 \pi \sigma R ^ { 2 } } \right) ^ { 1 / 4 } .
$$
b. By symmetry, the temperature depends only on the distance from the center. Then the definition of $k$ gives for a spherical shell of thickness $d r$
$$
k = \frac { \Delta Q } { \Delta t } \frac { 1 } { 4 \pi r ^ { 2 } } \frac { d r } { d T } .
$$
The heat through the shell depends on the power radiated from within the shell. Since the planet is uniform, this depends on the volume according to
$$
\frac { \Delta Q } { \Delta t } = P \frac { \frac { 4 } { 3 } \pi r ^ { 3 } } { \frac { 4 } { 3 } \pi R ^ { 3 } } = P \frac { r ^ { 3 } } { R ^ { 3 } }
$$

so that rearrangement yields

$$
d T = \frac { P } { 4 \pi k R ^ { 3 } } r d r
$$

Integrating between the center and the surface,

$$
\Delta T = \frac { P } { 8 \pi k R } .
$$
