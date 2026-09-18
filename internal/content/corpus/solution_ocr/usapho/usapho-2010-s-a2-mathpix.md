---
id: solution-ocr-usapho-2010-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2010-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A2
A spherical shell of inner radius $a$ and outer radius $b$ is made of a material of resistivity $\rho$ and negligible dielectric activity. A single point charge $q _ { 0 }$ is located at the center of the shell. At time $t = 0$ all of the material of the shell is electrically neutral, including both the inner and outer surfaces. What is the total charge on the outer surface of the shell as a function of time for $t > 0$ ? Ignore any effects due to magnetism or radiation; do not assume that $b - a$ is small.

## Solution

The material of the shell will remain electrically neutral, although a charge $- Q$ will build up on the inner surface while a charge of $+ Q$ will build up on the outer surface. By spherical symmetry and Gauss's law, the electric field in the material of the shell is

$$
E = \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { q _ { 0 } - Q ( t ) } { r ^ { 2 } } .
$$

This will cause a current density

$$
J = \frac { E } { \rho } = \frac { 1 } { 4 \pi \epsilon _ { 0 } \rho } \frac { q _ { 0 } - Q ( t ) } { r ^ { 2 } }
$$

at a radius $r$, and therefore a net current of

$$
I = \left( 4 \pi r ^ { 2 } \right) J = \frac { q _ { 0 } - Q ( t ) } { \epsilon _ { 0 } \rho }
$$

Since $I = d Q / d t$, we may separate and integrate for

$$
\frac { d Q } { q _ { 0 } - Q } = \frac { d t } { \epsilon _ { 0 } \rho } \Rightarrow \log \left( \frac { q _ { 0 } } { q _ { 0 } - Q } \right) = \frac { t } { \epsilon _ { 0 } \rho }
$$

where we used the initial condition $Q ( 0 ) = 0$ to set the integration constant. Solving for $Q ( t )$ gives

$$
Q ( t ) = q _ { 0 } \left( 1 - e ^ { - t / \epsilon _ { 0 } \rho } \right) .
$$
