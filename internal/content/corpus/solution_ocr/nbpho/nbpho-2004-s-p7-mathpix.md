---
id: solution-ocr-nbpho-2004-s-p7
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2004_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2004-passive-air-cooling]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 7. Passive air-cooling (9 pts)

1) Using $\gamma = c _ { p } / c _ { V }$ and $c _ { p } = c _ { V } + R$ we arrive at $c _ { p } = \frac { \gamma } { \gamma - 1 } R$.
2) From the ideal gas equation, $p _ { 0 } = \frac { \rho } { \mu } R T$ (the process is by constant pressure, otherwise there would be huge acceleration due to pressure drop).
3) Different air densities inside and outside the pipe give rise to small residual (as compared to the static pressure distribution inside the pipe) pressure difference between the open ends of the pipe, $\Delta p = - \Delta \rho g L$. This pressure difference is responsible for the acceleration of the air, from zero, up to the velocity of the air flow $v$. The momentum balance for small time interval $\tau$ yields $S \Delta p \tau = \rho ( S v \tau ) v$, hence $\left( \rho _ { 0 } - \rho \right) g L = \rho v ^ { 2 }$. . Here, the cold air density $\rho _ { 0 } = p _ { 0 } \mu / R T _ { 0 }$. Finally, $\left( \frac { p _ { 0 } \mu } { R T _ { 0 } } - \rho \right) g L = \rho v ^ { 2 }$.
4) Heat flux: $P = \frac { \gamma } { \gamma - 1 } R \left( T - T _ { 0 } \right) S v \rho / \mu$.
5) From the result of question 2 , we obtain $\frac { \Delta \rho } { \rho } = - \frac { \Delta T } { T }$. From the result of question $3 , \frac { \Delta \rho } { \rho } = - \frac { v ^ { 2 } } { g L }$. Substituting these values into the equation obtained for question 4, $P =$ $\frac { \gamma } { \gamma - 1 } R \frac { v ^ { 3 } } { g L } T S \rho / \mu$. Using the gas equation, this simplifies to $v ^ { 3 } = \frac { \gamma } { \gamma - 1 } \frac { g L } { S } \frac { P } { p _ { 0 } }$. So, $T = T _ { 0 } [ 1 +$ $\left. \left( \frac { \gamma } { \gamma - 1 } \frac { g L } { S } \frac { P } { p _ { 0 } } \right) ^ { 2 / 3 } / g L \right] \approx 322 \mathrm {~K}$.
