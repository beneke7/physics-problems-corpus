---
id: solution-ocr-kevin-zhou-x1sol-p018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 18 (Krane 4.39). An atomic beam is prepared by heating a collection of atoms to a temperature $T$ and allowing the beam to emerge through a hole of diameter $d$ in one side of the oven. Show that the uncertainty principle causes the diameter of the beam, after traveling a length $L$, to be larger than $d$ by an amount of order $L \hbar / d \sqrt { m k _ { B } T }$, where $m$ is the mass of an atom.

Solution. The energy of the particles is on order $k _ { B } T$, so $v \sim \sqrt { k _ { B } T / m }$. Thus, the time taken to travel the length $L$ is $t \sim L / v \sim L \sqrt { m / k _ { B } T }$. Now, the uncertainty in the vertical direction is $d$, so the range of vertical momenta is $\sim \hbar / d$, so the range of vertical speeds is $\sim \hbar / m d$. Thus, in the time $t$, we get a spread of order

$$
\frac { t \hbar } { m d } = \frac { L \hbar } { d \sqrt { m k _ { B } T } } ,
$$

as desired.
