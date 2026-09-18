---
id: solution-ocr-nbpho-2009-s-p8
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2009-magnetic-pulse]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
8. Magnetic pulse (7 points) Since we can neglect the inductance of the coil, it performes as a voltage source, which outputs $U =$ $N S B / \tau = 1 \mathrm {~V}$ during the time period between $t = 0 \mathrm {~ms}$ and 10 ms, and 0 V otherwise. The characteristic time scales of the $R C$ and $L C$ cirquits are $\tau _ { 1 } = R _ { 1 } C = 0.6 \mathrm {~s}$ and $\tau _ { 2 } = L / R _ { 2 } \approx$ 0.3 s . So, for both cirquits, the processes are very fast, i.e. the capacitor is effectively short-circuited, and almost all the voltage falls on the inductance.
i) According to the considerations given above, $I _ { 1 } = U / R _ { 1 } \approx$ 0.33 A. As for $I _ { 2 }$, it starts growing from 0 A at $t = 0$ at a rate, given by $L \frac { d I } { d t } = U$, i.e. $I _ { 2 } = U t _ { 1 } / L = 5 \mathrm {~mA}$.
ii) When the voltage $U$ is switched off (at $t = \tau = 10 \mathrm {~ms}$ ), the capacitor will (almost completely, because $t _ { 2 } - \tau \ll R _ { 1 } C$ ) retain the charge it has accumulated, $Q = I _ { 1 } \tau$. All the voltage of the capacitor $( Q / C )$ will fall on the resistor $R _ { 1 }$, so that $I _ { 1 } ^ { \prime } =$ $Q / R _ { 1 } C = U \tau / R _ { 1 } ^ { 2 } C \approx 5.6 \mathrm {~mA}$. As for the inductance, it will retain (almost completely, because $t _ { 2 } - \tau \ll L / R _ { 2 }$ ) the current it has acquired during the first 10 ms, $I _ { 2 } ^ { \prime } = U \tau / L = 10 \mathrm {~mA}$.
iii) Since the current in $R _ { 2 }$ will decay very slowly, as compared to its growth during the first 10 ms, we can neglect the charge passing thorugh it during $t < \tau$. Then we can write the Kirhoff's law in the form $L \frac { d I } { d t } + R _ { 2 } \frac { d q } { d t } = 0$, from where $L d I + R _ { 2 } d q = 0$, and $L \Delta I = - R _ { 2 } \Delta q$. Since $\Delta I = - I _ { 2 } ^ { \prime }$, we obtain $\Delta q =$ $L I _ { 2 } ^ { \prime } / R _ { 2 } = 3.3 \mathrm { mC }$.
