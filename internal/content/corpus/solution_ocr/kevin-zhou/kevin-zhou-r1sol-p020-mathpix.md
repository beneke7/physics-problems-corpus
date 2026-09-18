---
id: solution-ocr-kevin-zhou-r1sol-p020
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-p020]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 20. In your inertial frame, there is a particle with four-momentum $p ^ { \mu }$, and an observer moving with four-velocity $u ^ { \mu }$. The observer measures the particle in their inertial frame.

(a) Show that the energy they measure is $p \cdot u$.
(b) Show that the momentum they measure has magnitude $\sqrt { ( p \cdot u ) ^ { 2 } - p \cdot p }$.
(c) What is the speed that they measure?

Don't use Lorentz transformations here; everything can be done with four-vectors alone.
Solution. (a) We can evaluate $p \cdot u$ in the observer's frame. In that case, $u ^ { \mu } = ( 1,0,0,0 )$, so $p \cdot u$ just picks out the first component of $p ^ { \mu }$ in that frame, which is by definition the energy the observer measures.

(b) Continuing to work in the observer's frame, and writing $p ^ { \mu } = ( E , \mathbf { p } )$, where $E$ and p are the energy and momentum in the observer's frame, we have
$$
( p \cdot u ) ^ { 2 } - p \cdot p = E ^ { 2 } - \left( E ^ { 2 } - | \mathbf { p } | ^ { 2 } \right) = | \mathbf { p } | ^ { 2 }
$$
which gives the desired result.
(c) Note that $E = \gamma m$ and $\mathbf { p } = \gamma m \mathbf { v }$, so the speed they measure is the ratio
$$
| \mathbf { v } | = \frac { | \mathbf { p } | } { E } = \frac { \sqrt { ( p \cdot u ) ^ { 2 } - p \cdot p } } { p \cdot u } = \sqrt { 1 - \frac { p \cdot p } { ( p \cdot u ) ^ { 2 } } } .
$$
A nice feature of this result is that it's immediately clear that $| \mathbf { v } | \leq 1$.
