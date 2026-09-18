---
id: solution-ocr-kevin-zhou-m7sol-ex009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-ex009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 9
A whirly tube is a long, narrow, flexible tube that produces musical tones when swung. Model a whirly tube as a cylinder of length $L$, rotated about one end with angular velocity $\omega$. For simplicity, neglect gravity. What is the speed of the air when it shoots out the other end?

Solution
The air is slowly sucked from all directions around the entry hole, and shot out at the exit hole. Applying Bernoulli's principle between a point near the entry hole, and the exit hole,

$$
P _ { \mathrm { atm } } \approx P _ { \mathrm { atm } } + \frac { 1 } { 2 } \rho v _ { \mathrm { out } } ^ { 2 } .
$$

But that implies $v _ { \text {out } } \approx 0$, which doesn't make sense. The problem is that Bernoulli's principle applies to steady flows, and this situation is definitely not steady: by the time the air goes through the tube, the tube has rotated by a significant amount.


Instead, we apply Bernoulli's principle in a reference frame rotating with the tube. The centrifugal force gives an additional term, turning it into

$$
P + \frac { 1 } { 2 } \rho v ^ { 2 } - \frac { 1 } { 2 } \rho \omega ^ { 2 } r ^ { 2 } = \text { const. }
$$

Applying Bernoulli's principle between the same two points gives

$$
P _ { \mathrm { atm } } \approx P _ { \mathrm { atm } } + \frac { 1 } { 2 } \rho v ^ { 2 } - \frac { 1 } { 2 } \rho \omega ^ { 2 } L ^ { 2 }
$$

from which we conclude $v = \omega L$. Transforming back to the original reference frame, the exit speed of the air is $\sqrt { v ^ { 2 } + ( \omega L ) ^ { 2 } } = \sqrt { 2 } \omega L$.
