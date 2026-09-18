---
id: solution-ocr-kevin-zhou-x1sol-ex004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-ex004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 4
Consider a single slit diffraction experiment, where photons of wavelength $\lambda$ pass through a slit of width $a$. If the screen is a large distance $D$ away, roughly how wide is the resulting diffraction pattern on the screen?

Solution
The photon has a momentum $p _ { x } = \hbar k = h / \lambda$, and passing through the slit necessarily gives it a transverse momentum uncertainty of order

$$
\Delta p _ { y } \sim \frac { \hbar } { a }
$$

which means an angle uncertainty of order

$$
\Delta \theta \sim \frac { \Delta p _ { y } } { p _ { x } } \sim \frac { \lambda } { a } .
$$


Therefore, using basic geometry, the size of the pattern on the screen is

$$
\Delta y \sim D \Delta \theta \sim \frac { D \lambda } { a } .
$$

This is the approximate width of the central maximum for single slit diffraction, as we found in W2. The reason the result is the same is that light acts like a wave both classically and quantum mechanically; the quantum version of the derivation is just the same as the classical version, but with "everything multiplied by $h$ ". What's new about this derivation is that it also applies for matter particles, which have $\lambda = h / p$.
