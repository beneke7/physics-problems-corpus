---
id: solution-ocr-usapho-2010-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2010-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A1
An object of mass $m$ is sitting at the northernmost edge of a stationary merry-go-round of radius $R$. The merry-go-round begins rotating clockwise (as seen from above) with constant angular acceleration of $\alpha$. The coefficient of static friction between the object and the merry-go-round is $\mu _ { s }$.

a. Derive an expression for the magnitude of the object's velocity at the instant when it slides off the merry-go-round in terms of $\mu _ { s } , R , \alpha$, and any necessary fundamental constants.
b. For this problem assume that $\mu _ { s } = 0.5 , \alpha = 0.2 \mathrm { rad } / \mathrm { s } ^ { 2 }$, and $R = 4 \mathrm {~m}$. At what angle, as measured clockwise from north, is the direction of the object's velocity at the instant when it slides off the merry-go-round? Report your answer to the nearest degree in the range 0 to 360°.

## Solution

a. The maximum possible acceleration provided by friction is $\mu _ { s } g$. The object will begin to slide once the acceleration exceeds this. We have
$$
a = \sqrt { a _ { r } ^ { 2 } + a _ { t } ^ { 2 } } , \quad a _ { t } = \alpha R , \quad a _ { r } = \omega ^ { 2 } R
$$
where $a _ { t }$ is the tangential acceleration and $a _ { r }$ is the centripetal acceleration. Plugging in,
$$
\alpha ^ { 2 } R ^ { 2 } + \omega ^ { 4 } R ^ { 2 } = \mu _ { s } ^ { 2 } g ^ { 2 }
$$
and using $\omega = \alpha t$ and solving for $t$, we find
$$
t = \sqrt { \frac { 1 } { \alpha } \sqrt { \frac { \mu _ { s } ^ { 2 } g ^ { 2 } } { \alpha ^ { 2 } R ^ { 2 } } - 1 } }
$$
When the object slides off, it has a tangential velocity $v = R \omega$, so
$$
v = R \alpha t = \sqrt { R \sqrt { \mu _ { s } ^ { 2 } g ^ { 2 } - \alpha ^ { 2 } R ^ { 2 } } } .
$$
b. The angular position of the object is $\theta = \alpha t ^ { 2 } / 2$, so
$$
\theta = \frac { 1 } { 2 \alpha R } \sqrt { \mu _ { s } { } ^ { 2 } g ^ { 2 } - \alpha ^ { 2 } R ^ { 2 } } .
$$
Plugging in the numbers, we find
$$
\theta = \frac { 1 } { 2 ( 0.2 ) ( 4 ) } \sqrt { ( 0.5 ) ^ { 2 } ( 9.8 ) ^ { 2 } - ( 0.2 ) ^ { 2 } ( 4 ) ^ { 2 } } = 3.021 \mathrm { rad } = 173 ^ { \circ } .
$$
The velocity of the object is rotated 90° relative to the position, so the answer is 263°.
