---
id: solution-ocr-nbpho-2008-s-p6
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2008-rectifier]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
6. Rectifier (8 points)

1) Since none of the DC current through the load can come from the capacitor, all must come through the diode. Hence, the average current through the diode is also $I = 2 \mathrm {~mA}$, and the average power dissipation is obtained by multiplying it with the diode voltage $u = 1 \mathrm {~V} : P = 2 \mathrm {~mW}$.
2) If the diode is open, $U _ { \text {load } } ( t ) = U _ { 0 } \cos ( \omega t ) - u$. If the diode is closed [i.e. $U _ { 0 } \cos ( \omega t ) < U _ { \text {load } } ( t ) + u$ ], the capacitor discharges through the load. However, the relative change of the

voltage of the capacitor has to be small (otherwise $\Delta I / I$ would not be small). The respective load voltage as a function of time is sketched in the Figure. So, we can use the above written Kirchoff's law with $U _ { \text {load } } ( t ) \approx I R$, hence $U _ { 0 } = I R + u = 21 \mathrm {~V}$.
![](../../../figures/solution-ocr/559820e4cef3b88cbd59281f.jpg)
3) The change of the voltage of the capacitor during the discharge cycle can be estimated as $\Delta U = \Delta Q / C$, where the capacitor's charge drop $\Delta Q = I t$, and $t$ is the discharge time. Since the discharge cycle occupies almost all the period (see Figure), we can use $t \approx 1 / \nu$. Further, $\Delta I / I = \Delta U / U = \Delta Q / C U = \Delta Q / C I R =$ $1 / C R \nu$. Hence, $C \geq 100 / R \nu = 200 \mu \mathrm {~F}$.
4) Initially, the capacitor is empty, so that the charge flowing through the capacitor during the first cycle is $Q = C I R$. Hence, the average power $P _ { 1 } = Q u \nu = C I R u \nu = 200 \mathrm {~mW}$.
