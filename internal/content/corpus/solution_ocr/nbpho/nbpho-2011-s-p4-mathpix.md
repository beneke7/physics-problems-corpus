---
id: solution-ocr-nbpho-2011-s-p4
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2011-black-box]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
4. Black box (10 points) There are several ways to perform this task. First one can notice that if two capacitors discharge at the same resistor, starting with equal voltages and ending also with equal voltages, the ratio of the discharge times equals to the ratio of the capacitances (because for each given voltage, the discharge currents are the same, but larger capacitor has more charge-proportionally to the capacitance). Therefore we can first charge the known capacitor (using the battery), and let it discharge on the voltmeter (which has some finite resistance), measuring the time $t _ { 1 }$ required for it to reach a pre-defined final voltage. Then we need


to repeat the procedure with the other capacitor and measure the time $t _ { 2 }$ and calculate $C _ { 2 } = C _ { 1 } t _ { 2 } / t _ { 1 }$; the uncertainty is estimated as $\Delta C _ { 1 } = C _ { 1 } \left( \frac { \Delta t _ { 1 } } { t _ { 1 } } + \frac { \Delta t _ { 2 } } { t _ { 2 } } + \frac { \Delta C _ { 1 } } { C _ { 1 } } \right)$.

It is recommended to check the negligibility of the leak current across the plates of the capacitor. To this end, one can charge a capacitor, measure the voltage, remove the voltmeter and wait for some time (of the order $t _ { 1 }$ and $t _ { 2 }$ ), and check again the voltage.

Another way is to discharge completely one capacitor by short-circuiting its terminals and charge the other capacitor up to the voltage of the battery. Further, we connect the terminals $A$ and $B$ so that the capacitors re-distribute the charge $Q = \mathcal { E } C _ { 1 }$ and take the same voltage: $Q _ { 1 } / C _ { 1 } = \left( Q - Q _ { 1 } \right) / C _ { 2 } \Rightarrow Q _ { 1 } =$ $Q C _ { 1 } / \left( C _ { 1 } + C _ { 2 } \right) = \mathcal { E } C _ { 1 } ^ { 2 } / \left( C _ { 1 } + C _ { 2 } \right)$. Consequently, the new voltage (which we measure) is $U = Q _ { 1 } / C _ { 1 } = \mathcal { E } C _ { 1 } / \left( C _ { 1 } + C _ { 2 } \right)$, from where $C _ { 2 } = \left( \frac { \mathcal { E } } { U } - 1 \right) C _ { 1 }$.
