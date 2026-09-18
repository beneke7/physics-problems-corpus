---
id: solution-ocr-kevin-zhou-t1sol-p017
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-p017]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 17. The energy of a photon is $E = | \mathbf { p } | c$.

(a) Treating the photon classically, compute the average energy of a photon moving in one dimension, assuming it obeys the Boltzmann distribution with temperature $T$. Check that the result obeys the equipartition theorem.
(b) Generalize this result to three dimensions to compute $\gamma$ for a 3D photon gas.

Solution. Since we're talking about both momenta $p$ and probabilities $p$ here, let's temporarily rename the probability distribution function to $f$.

(a) Using the Boltzmann distribution and $E = p c$,
$$
f ( p ) \propto e ^ { - p c / k _ { B } T } .
$$
Then the expected energy is
$$
\langle E \rangle = \langle p c \rangle = \frac { \int _ { 0 } ^ { \infty } ( p c ) e ^ { - p c / k _ { B } T } d p } { \int _ { 0 } ^ { \infty } e ^ { - p c / k _ { B } T } d p } = k _ { B } T \frac { \int _ { 0 } ^ { \infty } x e ^ { - x } d x } { \int _ { 0 } ^ { \infty } e ^ { - x } d x }
$$
Note that the numerator can be related to the denominator using integration by parts,
$$
\int _ { 0 } ^ { \infty } x e ^ { - x } d x = \int _ { 0 } ^ { \infty } e ^ { - x } d x
$$
Then the fraction is just 1, so
$$
\langle E \rangle = k _ { B } T .
$$
Evidently, every degree of freedom where the energy is linear in the momentum contributes energy $k _ { B } T$. This is just as we expect by the equipartition theorem, since there's one degree of freedom with $n = 1$.

(b) The reasoning is very similar, but now
$$
f ( \mathbf { p } ) \propto e ^ { - | p | c / k _ { B } T } .
$$
The expected energy is then, using spherical coordinates,
$$
\langle E \rangle = \langle | \mathbf { p } | c \rangle = \frac { \int _ { 0 } ^ { \infty } ( p c ) e ^ { - p c / k _ { B } T } \left( 4 \pi p ^ { 2 } \right) d p } { \int _ { 0 } ^ { \infty } e ^ { - p c / k _ { B } T } \left( 4 \pi p ^ { 2 } \right) d p } = k _ { B } T \frac { \int _ { 0 } ^ { \infty } x ^ { 3 } e ^ { - x } d x } { \int _ { 0 } ^ { \infty } x ^ { 2 } e ^ { - x } d x }
$$
Again the numerator can be related to the denominator using integration by parts,
$$
\int _ { 0 } ^ { \infty } x ^ { 3 } e ^ { - x } d x = 3 \int _ { 0 } ^ { \infty } x ^ { 2 } e ^ { - x } d x
$$
Then the fraction is 3 , so $\langle p c \rangle = 3 k _ { B } T$, which is just what we expected since there are three linear degrees of freedom. Hence we have $\gamma = 4 / 3$.
