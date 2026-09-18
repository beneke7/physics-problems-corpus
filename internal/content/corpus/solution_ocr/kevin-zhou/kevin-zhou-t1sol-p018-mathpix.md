---
id: solution-ocr-kevin-zhou-t1sol-p018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-p018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 18. A one-dimensional quantum harmonic oscillator has energy levels $E _ { n } = n E _ { 0 }$ for $n \geq 0$, as you will show in X1.
    (a) Compute the average energy of the system at temperature $T$.
    (b) Show that at high temperatures, the average energy obeys the equipartition theorem.
    (c) Show that the energy at low temperatures is instead exponentially suppressed. This is why some modes are said to "freeze out", so they do not contribute to $C _ { V }$.

The phenomenon of "freezing out" was one of the greatest puzzles of classical physics in the $19 { } ^ { \text {th } }$ century, though nobody anticipated the resolution would be as strange as quantum mechanics.

Solution. (a) The average energy is

$$
\langle E \rangle = \frac { \sum _ { n \geq 0 } n E _ { 0 } e ^ { - n E _ { 0 } / k _ { B } T } } { \sum _ { n \geq 0 } e ^ { - n E _ { 0 } / k _ { B } T } } .
$$

There are several ways to evaluate the arithmetic-geometric sum in the numerator, but we'll show one slick way which is very useful in more advanced physics. We let

$$
f ( x ) = \sum _ { n \geq 0 } e ^ { - n x } = \frac { 1 } { 1 - e ^ { - x } } ,
$$

and note that the desired sum is related to the derivative,

$$
\sum _ { n \geq 0 } n e ^ { - n x } = - f ^ { \prime } ( x ) = \frac { e ^ { - x } } { \left( 1 - e ^ { - x } \right) ^ { 2 } }
$$

Combining these results, we conclude

$$
\langle E \rangle = \frac { e ^ { - E _ { 0 } / k _ { B } T } } { 1 - e ^ { - E _ { 0 } / k _ { B } T } } E _ { 0 } .
$$


(b) Note that if $k _ { B } T \gg E _ { 0 }$, then $e ^ { - E _ { 0 } / k _ { B } T } \approx 1 - E _ { 0 } / k _ { B } T$, so plugging into the formula, we get that $\langle E \rangle \approx k _ { B } T$, as desired.
(c) For low temperatures, we have $e ^ { - E _ { 0 } / k _ { B } T } \ll 1$, which gives $\langle E \rangle \approx E _ { 0 } e ^ { - E _ { 0 } / k _ { B } T }$.
