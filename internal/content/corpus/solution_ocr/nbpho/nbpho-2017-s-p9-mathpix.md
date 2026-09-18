---
id: solution-ocr-nbpho-2017-s-p9
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2017-spacecraft-pressure]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
9. SPACECRAFT PRESSURE
i) Consider an air slice between $r$ and $r + d r$ with area $A$ and mass $m$. In a rotating frame of reference, force balance gives

$$
A ( p ( r + d r ) - p ( r ) ) = m \omega ^ { 2 } r .
$$

The mass is related to the density with $m =$ $A \rho ( r ) d r$. Using the ideal gas law,

$$
\begin{gathered}
p V = n R T \Longrightarrow \\
\rho ( r ) = \frac { m } { V } = \frac { m } { n R T } p ( r ) = \frac { \mu } { R T } p ( r ) ,
\end{gathered}
$$

so that when we combine the two equations, we get the following equation for pressure:

$$
\frac { p ( r + d r ) - p ( r ) } { d r } = p ^ { \prime } ( r ) = \frac { \mu \omega ^ { 2 } } { R T } r p ( r ) .
$$

This can be solved using separation of variables, giving

$$
\begin{gathered}
\int \frac { d \rho } { \rho } = \int \frac { \mu \omega ^ { 2 } } { R T } r d r \\
\ln \rho - \ln \rho _ { 0 } = \frac { \mu \omega ^ { 2 } } { 2 R T } r ^ { 2 }
\end{gathered}
$$

From this we find

$$
p ( r ) = p _ { 0 } \exp \left( \frac { \mu \omega ^ { 2 } } { 2 R T } r ^ { 2 } \right) .
$$

ii) This time the force balance is

$$
A ( p ( h + d h ) - p ( h ) ) = - m g
$$

The corresponding pressure equation is

$$
p ^ { \prime } ( h ) = - \frac { \mu g } { R T } p ( h )
$$

with the solution

$$
p ( h ) = p _ { 0 } \exp \left( - \frac { \mu g } { R T } h \right) .
$$
