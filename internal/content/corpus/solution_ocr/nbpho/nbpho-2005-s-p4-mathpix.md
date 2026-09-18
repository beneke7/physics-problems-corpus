---
id: solution-ocr-nbpho-2005-s-p4
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2005-water-pump]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 4. Water pump

1) Let us consider the process in the system, rotating together with the tank. Then, there is a potential energy related to the centrifugal force: $U _ { c } = \int _ { 0 } ^ { r } \omega ^ { 2 } r d r = \frac { 1 } { 2 } \omega ^ { 2 } r ^ { 2 }$. So, the pressure $p _ { 2 } = p _ { 0 } - \rho g h + \frac { 1 } { 2 } \omega ^ { 2 } r ^ { 2 }$.
2) From the Bernoulli formula, $\frac { 1 } { 2 } \rho u ^ { 2 } = p _ { 2 } - p _ { 0 } = \frac { 1 } { 2 } \omega ^ { 2 } r ^ { 2 } - \rho g h$, hence the squared velocity in the rotating reference system $u ^ { 2 } = \omega ^ { 2 } r ^ { 2 } - 2 g h$. The laboratory speed $v _ { 2 } = u ^ { 2 } + \omega ^ { 2 } r ^ { 2 } = 2 \left( \omega ^ { 2 } r ^ { 2 } - g h \right)$, i.e. $v _ { 2 } =$ $\sqrt { 2 \left( \omega ^ { 2 } r ^ { 2 } - g h \right) }$.
3) The point of lowest pressure $p _ { m }$ inside the pump is the upmost point of the tube. Using the Bernoulli formula, $p _ { 0 } = p _ { m } + \rho g h + \frac { 1 } { 2 } \rho v _ { 1 } ^ { 2 }$, where the velocity in the tube can be found from the continuity condition: $S _ { 1 } v _ { 1 } = S _ { 2 } u = S _ { 2 } \sqrt { \omega ^ { 2 } r ^ { 2 } - 2 g h }$. Therefore, $p _ { m } = p _ { 0 } - \rho g h -$ $\frac { 1 } { 2 } \rho \left( \omega ^ { 2 } r ^ { 2 } - 2 g h \right) \left( \frac { S _ { 2 } } { S _ { 1 } } \right) ^ { 2 }$. Notice that the "boiling" starts when $p _ { m } = p _ { k }$.
So, $\omega _ { m } ^ { 2 } r ^ { 2 } = 2 g h + \left( \frac { p _ { 0 } - p _ { k } } { \rho } - g h \right) \left( \frac { S _ { 1 } } { S _ { 2 } } \right) ^ { 2 }$; finally we obtain

$$
\omega _ { m } = r ^ { - 1 } \sqrt { 2 g h + \left( \frac { p _ { 0 } - p _ { k } } { \rho } - g h \right) \left( \frac { S _ { 1 } } { S _ { 2 } } \right) ^ { 2 } } .
$$

4) The maximal productivity is apparently achieved for the highest efficiency. The efficiency is highest, when the residual velocity is lowest: $u \rightarrow 0$, and $\omega \rightarrow \omega _ { \text {min } }$. According to the results of the second question, $\omega _ { \text {min } } = r ^ { - 1 } \sqrt { 2 g h }$. So, the minimal residual velocity of the water streams is $v _ { \text {min } } = \omega _ { \text {min } } r = \sqrt { 2 g h }$. The associated lost power is $\frac { 1 } { 2 } \mu v _ { \text {min } } ^ { 2 } = \mu g h$. The useful power is associated with the potential energy increase (by $g h$ ),i.e. the total power $P = 2 \mu g h$. Hence, $\mu = P / 2 g h$.
