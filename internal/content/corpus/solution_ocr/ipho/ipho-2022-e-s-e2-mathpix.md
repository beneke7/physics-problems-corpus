---
id: solution-ocr-ipho-2022-e-s-e2
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2022_E_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2022-e2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## E2: Cylindrical Diode - SOLUTION

Take the logarithm of Equation 1,

$$
\log I _ { \infty } = \log C + \alpha \log R _ { c } + \beta \log L _ { e } + \gamma \log V
$$

A.1: Collect data by varying $V$. To minimize error, select maximum values for all fixed variables, this means $L _ { e } = 99 \mathrm {~cm} , R _ { c } = 10 \mathrm {~cm}$, and $R _ { e } = 1.0 \mathrm {~cm}$. Distribute the voltages logarithmically between 10 and 2000

| $V ( \mathrm {~V} )$ | $I ( \mathrm {~mA} )$ | $\log V$ | $\log I$ |
| :--- | :--- | :--- | :--- |
| 10 | 5 | 1.0 | 0.70 |
| 20 | 13 | 1.3 | 1.11 |
| 50 | 52 | 1.7 | 1.72 |
| 100 | 147 | 2.0 | 2.17 |
| 200 | 415 | 2.3 | 2.62 |
| 500 | 1620 | 2.7 | 3.21 |
| 1000 | 4630 | 3.0 | 3.67 |
| 2000 | 12900 | 3.3 | 4.11 |

Plot this on a graph; the best fit line is

$$
\log I = 1.490 \log V - 0.8095
$$

![](../../../figures/solution-ocr/081988328b76d3c762d650a3.jpg)
so $\gamma = 1.49$.
A statistical analysis of the uncertainty in the slope yields $\gamma = 1.490 \pm 0.005$.

Assessing the slope by visually fitting lines through the error bars on the points requires considering that error bars on a log axis are given by

$$
\delta ( \log y ) = \delta \left( \frac { \ln y } { \ln 10 } \right) = \frac { 1 } { \ln 10 } \frac { \delta y } { y }
$$

Since the largest relative error is in the smallest valued quantity, the focus is on $\delta V / V$ for $V = 10 \mathrm {~V}$ and $\delta I / I$ for $I = 5 \mathrm {~mA}$. The error bars associated with the log-log plot at that point are then

$$
( 1 \pm 0.02,0.70 \pm 0.04 )
$$

The other error bars are smaller; focusing on that point alone we can fit two extreme lines and get

$$
\gamma = 1.485 \pm 0.025
$$

Either approach is acceptable.
