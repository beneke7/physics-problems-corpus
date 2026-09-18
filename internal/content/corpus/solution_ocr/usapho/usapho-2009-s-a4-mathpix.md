---
id: solution-ocr-usapho-2009-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2009-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A4

A potato gun fires a potato horizontally down a half-open cylinder of cross-sectional area $A$. When the gun is fired, the potato slug is at rest, the volume between the end of the cylinder and the potato is $V _ { 0 }$, and the pressure of the gas in this volume is $P _ { 0 }$. The atmospheric pressure is $P _ { \text {atm } }$, where $P _ { 0 } > P _ { \text {atm } }$. The gas in the cylinder is diatomic; this means that $C _ { \mathrm { v } } = 5 R / 2$ and $C _ { \mathrm { p } } = 7 R / 2$. The potato moves down the cylinder quickly enough that no heat is transferred to the gas. Friction between the potato and the barrel is negligible and no gas leaks around the potato.
![](../../../figures/solution-ocr/96057984086ff36affd184f2.jpg)

The parameters $P _ { 0 } , P _ { \text {atm } } , V _ { 0 }$, and $A$ are fixed, but the overall length $L$ of the barrel may be varied.

a. What is the maximum kinetic energy $E _ { \text {max } }$ with which the potato can exit the barrel? Express your answer in terms of $P _ { 0 } , P _ { \text {atm } }$, and $V _ { 0 }$.
b. What is the length $L$ in this case? Express your answer in terms of $P _ { 0 } , P _ { \text {atm } } , V _ { 0 }$, and $A$.

## Solution

a. The potato will accelerate if the pressure inside the cylinder is greater than the external air pressure. Therefore, maximum energy will be transferred to the potato if the cylinder is exactly long enough for the final pressure inside the cylinder to be $P _ { \text {atm } }$.
The energy of an ideal diatomic gas is given by
$$
C _ { v } n R T = C _ { v } P V
$$
by the ideal gas law. Maximum energy is delivered to the potato when the final pressure is atmospheric, so the work done by the gas on the potato is
$$
C _ { v } \left( P _ { 0 } V _ { 0 } - P _ { \mathrm { atm } } V _ { f } \right)
$$
But the potato is moving against air, so the total energy given to the potato is
$$
E _ { \max } = C _ { v } \left( P _ { 0 } V _ { 0 } - P _ { \mathrm { atm } } V _ { f } \right) - P _ { \mathrm { atm } } \left( V _ { f } - V _ { 0 } \right) .
$$
Since $P V ^ { \gamma }$ is constant during adiabatic expansion,
$$
V _ { f } = V _ { 0 } \left( \frac { P _ { 0 } } { P _ { \mathrm { atm } } } \right) ^ { 1 / \gamma }
$$
where $\gamma = C _ { p } / C _ { v }$. Plugging this in, we have
$$
E _ { \max } = \frac { 5 } { 2 } P _ { 0 } V _ { 0 } - \frac { 7 } { 2 } P _ { \mathrm { atm } } V _ { f } + P _ { \mathrm { atm } } V _ { 0 } = \left( \frac { 5 } { 2 } P _ { 0 } + P _ { \mathrm { atm } } - \frac { 7 } { 2 } P _ { \mathrm { atm } } ^ { 2 / 7 } P _ { 0 } ^ { 5 / 7 } \right) V _ { 0 } .
$$

b. The length of the tube is simply
$$
L = \frac { V _ { f } } { A } = \frac { V _ { 0 } } { A } \left( \frac { P _ { 0 } } { P _ { \mathrm { atm } } } \right) ^ { 5 / 7 } .
$$


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
