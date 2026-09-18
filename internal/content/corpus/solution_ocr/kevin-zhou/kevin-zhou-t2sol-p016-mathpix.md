---
id: solution-ocr-kevin-zhou-t2sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 16. Some basic manipulations with Planck's law.

(a) Show that $J \propto T ^ { 4 }$ by nondimensionalizing the integral, as explained in P1.
(b) Prove Wien's displacement law, which states that the maximum of $I ( f )$ for an ideal blackbody occurs at a frequency which is proportional to $T$.

Solution. (a) By definition, we have

$$
J = \int _ { 0 } ^ { \infty } \frac { 2 \pi \left( k _ { B } T \right) ^ { 3 } \left( h f / k _ { B } T \right) ^ { 3 } } { c ^ { 2 } h ^ { 2 } } \frac { 1 } { e ^ { h f / k _ { B } T } - 1 } \frac { k _ { B } T } { h } d \left( \frac { h f } { k _ { B } T } \right) .
$$

Let $x \equiv h f / k _ { B } T$. Then we get

$$
J = \frac { 2 \pi \left( k _ { B } T \right) ^ { 4 } } { c ^ { 2 } h ^ { 3 } } \int _ { 0 } ^ { \infty } \frac { x ^ { 3 } d x } { e ^ { x } - 1 }
$$

The integral will evaluate to a dimensionless constant, so we conclude $J \propto T ^ { 4 }$.


(b) As in part (a), note that we can write $I ( f )$ in the form
$$
I ( f ) = ( \text { constants independent of } f ) \times \frac { x ^ { 3 } } { e ^ { x } - 1 } , \quad x = \frac { h f } { k _ { B } T } .
$$
Thus, the shape of $I ( f )$ depends only on the dimensionless combination $x$. If there is a maximum in $I ( f )$ for some value of $x$, this is true for any temperature. Since the maximum happens at the same value of $x$, we have $h f _ { \text {max } } / k _ { B } T$ constant, so $f _ { \text {max } } \propto T$ as desired.
