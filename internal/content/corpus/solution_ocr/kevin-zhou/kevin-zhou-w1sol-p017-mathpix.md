---
id: solution-ocr-kevin-zhou-w1sol-p017
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p017]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 17. The motion of ripples of short wavelength (less than 1 cm) on water is controlled by the surface tension $\gamma$ and density $\rho$.
    (a) Find the phase velocity $v _ { p }$ of ripples with wavenumber $k$, up to a dimensionless constant.
    (b) Show that $v _ { g } = ( 3 / 2 ) v _ { p }$.

Solution. (a) By dimensional analysis, the only possible dispersion relation is

$$
\omega ( k ) \propto \sqrt { \frac { \gamma k ^ { 3 } } { \rho } } .
$$

This tells us that

$$
v _ { p } = \frac { \omega } { k } \propto \sqrt { \frac { \gamma k } { \rho } } .
$$


(b) We have
$$
v _ { g } = \frac { d \omega } { d k } \propto \frac { 3 } { 2 } \sqrt { \frac { \gamma k } { \rho } }
$$
with the same constant of proportionality as in part (a), giving the desired result. So interestingly, this is a case where dimensional analysis can give us a numeric prefactor!

## 3 Reflection and Transmission

When we considered standing waves in the previous section, we were only considering "steady state" behavior. Now we consider the dynamics of a wave hitting an obstacle more explicitly.
