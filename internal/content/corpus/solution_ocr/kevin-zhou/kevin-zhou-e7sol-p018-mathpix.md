---
id: solution-ocr-kevin-zhou-e7sol-p018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e7-p018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 18. Consider the energy and momentum of the electromagnetic wave in idea 8.

(a) Show that the spatial average of the energy density is $\epsilon _ { 0 } E _ { 0 } ^ { 2 } / 2$. (Be careful with factors of 2.)
(b) Compute the spatial average of the momentum density $\langle \mathbf { p } \rangle$ using idea 7 .
(c) Confirm that $E = p c$ for an electromagnetic wave.

Solution. The key pitfall here is that we have to take into account the fact that for all nonlinear quantities such as these, we need to look only at the real part of the above formulas.


(a) The energy is $u = \frac { 1 } { 2 \epsilon _ { 0 } } \left( E ^ { 2 } + c ^ { 2 } B ^ { 2 } \right)$. The average value of $E ^ { 2 }$ is $E _ { 0 } ^ { 2 } / 2$ by the usual $\cos ^ { 2 } ( k x )$ averaging trick, and the average value of $B ^ { 2 }$ is $B _ { 0 } ^ { 2 } / 2$. There are two terms, so the average of their sum is $\epsilon _ { 0 } E _ { 0 } ^ { 2 } / 2$.
(b) It's $\left\langle \epsilon _ { 0 } \mathbf { E } \times \mathbf { B } \right\rangle$. Again the product has the spatial form $\cos ^ { 2 } ( k x )$, so the averaging over space gives a factor of $1 / 2$, giving $\epsilon _ { 0 } E _ { 0 } ^ { 2 } / 2 c$.
(c) This is equivalent to showing that the energy density is equal to the momentum density times $c$, which is indeed true from our results above.
