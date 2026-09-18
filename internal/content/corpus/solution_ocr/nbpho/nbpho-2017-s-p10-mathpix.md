---
id: solution-ocr-nbpho-2017-s-p10
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2017-black-box]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
10. BLACK BOX
i) By measuring the current and the voltage between the black and white leads, we can determine that there can only be the battery and the resistor(s) between them. Measuring the current from blue to black and blue to white shows that there is a capacitor connected in both case. Since we get a higher current (then between black and white) in one or both of these measurements, we can say that the capacitor can only be connected to the other elements in a star connection. That leaves two options.
![](../../../figures/solution-ocr/c1854701ca8a5270f8c8c4b0.jpg)
![](../../../figures/solution-ocr/1bf5aded1682921ef5515b25.jpg)
It is possible to differentiate between the two (for example by looking at the leakage of the capacitor), but not if we are using an ideal capacitor as the model. Both were considered correct when grading.
ii) Let's look at option A (for option B the $R _ { 1 }$ and $R _ { 2 }$ values are exchanged). We can get the values for the elements in many ways. Measuring the voltage from the black and white leads gets us $\mathscr { E } \approx 1.57 \mathrm {~V}$. Measuring the initial current from the blue and white leads (after holding blue and black closed for a while) gets us $R _ { 2 } = \mathscr { E } / I _ { 2 } \approx 51 \mathrm { k }$. Measuring the initial current from the blue and black leads (after holding blue and black closed for a while) gets us $R _ { 1 } = \mathscr { E } / I _ { 1 } \approx 200 \mathrm { k }$.

Capacitance can be measured for example from the time the current between blue and white halves: $C = t _ { 2 } / \left( R _ { 2 } \ln 2 \right) \approx 330 \mathrm { tg }$; looking at the current or voltage plot in semilogarithmic axes or looking at the area under the current plot are also good options.
