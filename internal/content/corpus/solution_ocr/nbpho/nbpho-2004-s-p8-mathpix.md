---
id: solution-ocr-nbpho-2004-s-p8
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2004_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2004-loop-of-wire]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 8. Loop of wire (7 pts)

1) At the distance $r$ from the current $I _ { 0 }$, the magnetic induction $B = \frac { \mu _ { 0 } I _ { 0 } } { 2 \pi r }$. Then, the flux through the contour $\Phi = \int _ { l } ^ { l + a } B b d x =$ $\int _ { l } ^ { l + a } \frac { b \mu _ { 0 } I _ { 0 } } { 2 \pi x } d x = \frac { b \mu _ { 0 } I _ { 0 } } { 2 \pi } \ln \frac { a + l } { l }$.

Alternatively, we can find it using the graph by determining the area $S$ under the curve, from $r = r _ { 1 } = 0,01 \mathrm {~m}$ to $r = r _ { 2 } = 0,04 \mathrm {~m}$ : $S \approx 0,28 \mathrm { mT } \cdot \mathrm { m }$, further, $\Phi = S b = 280 \mu \mathrm {~Wb}$.
2) After switching off the current, the flux through the tends to zero. From the Ohm's law $R \frac { d q } { d t } = \frac { d \Phi } { d t }$, hence $R d q = d \Phi$, i.e. $R Q = \Delta \Phi =$ $\Phi$. Finally, $Q = \Phi / R = 280 \mu \mathrm { C }$.
3) We calculate the force as difference between the forces at the two loop segments parallel to the straight line: $F _ { 1 } = b i B _ { 1 }$ and $F _ { 2 } =$ $b i B _ { 2 }$, where $i = R ^ { - 1 } \frac { d \Phi } { d t }$. So, $d p = \left( F _ { 1 } - \right.$ $\left. F _ { 2 } \right) d t = b R ^ { - 1 } \left( B _ { 1 } - B _ { 2 } \right) d \Phi$. Using $B _ { 1 } =$ $\mu _ { 0 } I / 2 \pi l$ and $B _ { 1 } = \mu _ { 0 } I / 2 \pi ( l + a )$, we end up with $d p = \frac { b } { R } \frac { \mu _ { 0 } I } { 2 \pi } \frac { a } { l ( l + a ) } d \Phi$. Using the result of first question, $d \Phi = \frac { b \mu _ { 0 } } { 2 \pi } \ln \frac { a + l } { l } d I$, i.e. $d p = \left( \frac { b \mu _ { 0 } } { 2 \pi } \right) ^ { 2 } \frac { a } { R l ( l + a ) } \ln \frac { a + l } { l } I d I$. Finally, $p =$ $\frac { a \left( b \mu _ { 0 } I _ { 0 } \right) ^ { 2 } } { 8 \pi ^ { 2 } R l ( l + a ) } \ln \frac { a + l } { l } \approx 2.08 \cdot 10 ^ { - 6 } \mathrm {~kg} \cdot \mathrm {~m} / \mathrm { s } ^ { 2 }$.

The same result could have been obtained using the graph and approach used in the alternative solution of the question 1.
