---
id: solution-ocr-nbpho-2014-s-p7
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2014-spin-system]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 7. Spin system

1) According to Boltzmann's distribution, $p _ { \uparrow } =$ $A \cdot e ^ { - \epsilon m }$, where the constant $A$ can be found from the condition that the probability of having either up or down orientation is one: $A$. $e ^ { - \epsilon / 2 } + A \cdot e ^ { \epsilon / 2 } = 1$, hence

$$
A = \frac { 1 } { e ^ { - \epsilon / 2 k T } + e ^ { \epsilon / 2 k T } } = \frac { 1 } { 2 \cosh ( \epsilon / 2 k T ) } .
$$

Thus,

$$
p _ { \uparrow } = \frac { e ^ { - \epsilon / 2 k T } } { e ^ { - \epsilon / 2 k T } + e ^ { \epsilon / 2 k T } } .
$$

2) The average energy is the weighted average of up- and down-state energies for a single spin, multiplied by the number of spins:

$$
E = \frac { N \epsilon } { 2 } \frac { e ^ { - \epsilon / 2 k T } - e ^ { \epsilon / 2 k T } } { e ^ { - \epsilon / 2 k T } + e ^ { \epsilon / 2 k T } } = - \frac { N \epsilon } { 2 } \tanh ( \epsilon / 2 k T ) .
$$

3) For small values of the argument of the hyperbolic tangent, the last expression can be approximated as $E \approx - N \epsilon ^ { 2 } / 4 k T$.
4) According to the definition of the heat capacity, $C = \frac { d E } { d T } = N \epsilon ^ { 2 } / 4 k T ^ { 2 }$.
