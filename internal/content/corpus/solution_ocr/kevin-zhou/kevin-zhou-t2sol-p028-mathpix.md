---
id: solution-ocr-kevin-zhou-t2sol-p028
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p028]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 28. Consider a sphere of a radioactive rock, which constantly produces heat $q$ per unit volume. The outside of the sphere is held at temperature $T _ { 0 }$, the sphere's radius is $R$, and its thermal conductivity is $\kappa$. Find the temperature at the center of the sphere.
Solution. Just as in the example, we have
$$
P ( r ) = - \kappa \left( 4 \pi r ^ { 2 } \right) \frac { d T } { d r } .
$$
However, $P ( r )$ is not independent of $r$. It represents the rate at which heat passes through the shell at radius $r$, so in the steady state it should be equal to the rate at which radioactive heat is produced within that shell,
$$
P ( r ) = \frac { 4 } { 3 } \pi r ^ { 3 } q .
$$
Plugging this in gives
$$
\frac { d T } { d r } = - \frac { q r } { 3 \kappa } .
$$
Integrating this and using $T ( R ) = T _ { 0 }$ gives
$$
T ( 0 ) = T _ { 0 } + \frac { q R ^ { 2 } } { 6 \kappa }
$$
which grows rapidly with $R$.
As an application, farmers have to worry about hay bales spontaneously catching on fire. That's because $q$ is small but nonzero, due to bacteria feeding on the hay and producing heat, and $R$ can be very large.
[3] Problem 29. USAPhO 2016, problem A4. A practical conduction question.
[3] Problem 30. USAPhO 2013, problem A1. An elegant conduction question.
[4] Problem 31. EuPhO 2023, problem 1. A cute problem on thermal lensing.
