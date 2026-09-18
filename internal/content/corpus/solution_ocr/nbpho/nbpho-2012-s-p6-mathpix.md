---
id: solution-ocr-nbpho-2012-s-p6
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2012-uranium-decay]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 6. Uranium decay (7 points)

i. (2 pts) It can be seen from the table that the fist half-life is much longer than all the others. This means that as soon as something is produced by the decay of $\mathrm { U } ^ { 238 }$, all the other decay steps in the chain take place almost immediately, and for the other isotopes, a quasi-stationary concentration level is achieved - such that the number of decays per unit time of the isotope equals to that of $\mathrm { U } ^ { 238 }$. Let us apply this to $\mathrm { U } ^ { 234 }$. If the number of $\mathrm { U } ^ { 238 }$ atoms is $N _ { 238 }$ then the number of decays per unit time is $\frac { d N } { d t } = N _ { 0 } \ln 2 / \tau _ { 238 } = N _ { 234 } \ln 2 / \tau _ { 234 }$, hence $N _ { 234 } / N _ { 238 } = \tau _ { 234 } / \tau _ { 238 }$ The total number of uranium atoms equals to $N = N _ { 238 } / 0.993$, so

$$
\frac { N _ { 234 } } { N } = \frac { \tau _ { 234 } } { 0,993 \tau _ { 238 } } \approx 5.53 \times 10 ^ { - 5 } .
$$

ii. (2 pts) Since the uranium ore has reached a quasistationary composition of isotopes, per each decay of $\mathrm { U } ^ { 238 }$, there is one decay event for each of the isotopes. So we need to sum up all the decay energies in the second row of the table, this gives us $E _ { \text {dec } } = 52.1 \mathrm { MeV }$. Then the heat production rate is given by $w = N _ { A } \frac { \rho } { \mu } E _ { \text {dec } } \frac { \ln 2 } { \tau _ { 238 } } \approx 2.0 \mathrm {~W} / \mathrm { m } ^ { 3 }$.
iii. (3 pts) The heat released will escape owing to the thermal conductance. Inside a sphere of radius $r$, the heat released equals to $\frac { 4 } { 3 } \pi w r ^ { 3 } = 4 \pi r ^ { 2 } \kappa \frac { d T } { d r }$ (the right-hand-side gives the thermal flux due to conductance). From this equation we obtain $r d r = 3 \frac { \kappa } { w } d T$, which yields after integration

$$
R = \sqrt { 6 \frac { \kappa } { w } \left( T _ { 0 } - T _ { a } \right) } \approx 305 \mathrm {~m} .
$$
