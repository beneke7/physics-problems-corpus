---
id: nbpho-2017-black-box
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2017-black-box
solution_type: official
source_document: solution-document-nbpho-2017-s
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2017_S.pdf."
---

10. BLACK BOX
i) By measuring the current and the voltage
between the black and white leads, we can de-
termine that there can only be the battery and
the resistor(s) between them. Measuring the
current from blue to black and blue to white
shows that there is a capacitor connected in
both case. Since we get a higher current (then
betweenblackandwhite)inoneorbothofthese
measurements, we can say that the capacitor
can only be connected to the other elements
in a star connection. That leaves two options.
It is possible to diﬀerentiate between the two
(for example by looking at the leakage of the ca-
pacitor), but not if we are using an ideal capa-
citorasthemodel. Bothwereconsideredcorrect
when grading.
ii) Let’s look at option A (for option B the R1
and R2 values are exchanged). We can get the
values for the elements in many ways. Measur-
ing the voltage from the black and white leads
gets us E ≈ 1.57V. Measuring the initial cur-
rent from the blue and white leads (after hold-
ing blue and black closed for a while) gets us
R2 = E/I2 ≈ 51k. Measuring the initial cur-
rent from the blue and black leads (after hold-
ing blue and black closed for a while) gets us
R1 =E/I1 ≈200k.
Capacitance can be measured for example
from the time the current between blue and
white halves: C = t2/(R2 ln2)≈330ţF; looking
at the current or voltage plot in semilogarithmic
axesorlookingattheareaunderthecurrentplot
are also good options.
