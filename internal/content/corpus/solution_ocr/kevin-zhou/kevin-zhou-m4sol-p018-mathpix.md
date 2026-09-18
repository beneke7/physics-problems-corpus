---
id: solution-ocr-kevin-zhou-m4sol-p018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-p018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 18. The quality factor of a damped oscillator is defined as $Q = m \omega _ { 0 } / b$, where $\omega _ { 0 } = \sqrt { k / m }$. It measures both how weak the damping is, and how sharp the resonance is.


(a) Show that for a lightly damped oscillator,
$$
Q \approx \frac { \text { total energy of the oscillator } } { \text { average energy dissipated per radian } } .
$$
Then estimate $Q$ for a guitar string.
(b) Show that for a lightly damped oscillator,
$$
Q \approx \frac { \text { resonant frequency } } { \text { width of resonance curve } }
$$
where the width of the resonance curve is defined to be the range of driving frequencies for which the amplitude is at least $1 / \sqrt { 2 }$ the maximum.

For more about $Q$, see pages 424 through 428 of Kleppner and Kolenkow.
Solution. (a) Take $x = A \cos \omega _ { 0 } t$. In one cycle, the energy dissipated is

$$
\int _ { 0 } ^ { 2 \pi / \omega _ { 0 } } b v \cdot v d t = b A ^ { 2 } \omega _ { 0 } \pi
$$

so the average energy dissipated per radian is $b A ^ { 2 } \omega _ { 0 } / 2$. The average energy stored is $\frac { 1 } { 2 } m \omega _ { 0 } ^ { 2 } A ^ { 2 }$, so the ratio is $m \omega _ { 0 } / b = Q$.
The value of $Q$ depends on the guitar string, but one of the strings in the middle will oscillate at around ~ 300 Hz for a few seconds, corresponding to $\sim 10 ^ { 4 }$ radians, so we can roughly estimate $Q \sim 10 ^ { 4 }$.


(b) We have $\left| A _ { 0 } \right| = \frac { F _ { 0 } } { \sqrt { m ^ { 2 } \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) ^ { 2 } + ( b \omega ) ^ { 2 } } }$. At the edge of the range that we call the width, we have
$$
m ^ { 2 } \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) ^ { 2 } + ( b \omega ) ^ { 2 } = 2 \left( b \omega _ { 0 } \right) ^ { 2 } \Longrightarrow m \left( \omega _ { 0 } ^ { 2 } - \omega ^ { 2 } \right) = \pm b \omega _ { 0 } ,
$$
so $m \left( \omega _ { 0 } + \omega \right) \left( \omega _ { 0 } - \omega \right) = \pm b \omega _ { 0 }$. We have $\omega \approx \omega _ { 0 }$ (to first order), so
$$
2 m \omega _ { 0 } \left( \omega _ { 0 } - \omega \right) = \pm b \omega _ { 0 } \Longrightarrow 1 - \omega / \omega _ { 0 } = \pm \frac { 1 } { 2 Q } .
$$
Thus the width is approximately $\omega _ { 0 } / Q$, as desired.

The next two problems explore other ways of driving harmonic oscillators.
