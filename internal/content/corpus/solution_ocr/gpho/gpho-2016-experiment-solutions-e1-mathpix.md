---
id: solution-ocr-gpho-2016-experiment-solutions-e1
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2016_experiment_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2016-e1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem E1. Rolling cylinder (points)

Part A. Critical slopes (1 points)
We measure the board length $L = 680 \mathrm {~mm}$, (0.1 pts) its uncertainty $\Delta L = 1 \mathrm {~mm}$.

Further we determine the steepest position of the board where the cylinder's rolling stops when it is pushed downwards, and measure the difference $H = h _ { u } - h _ { l }$ between the heights $h _ { u }$ and $h _ { l }$ of the upper and lower edges of the upper surface of the board. We find $h _ { l } = 8 \mathrm {~mm}$ (0.1 pts) and $h _ { u } = 33 \mathrm {~mm}$ (0.1 pts) so that $H = 25 \mathrm {~mm}$. Finally, we calculate angles according to the formula $\alpha _ { 0 } = \arcsin H / L \approx 2.1 ^ { \circ }$; the final result needs to be within $2.1 ^ { \circ } \pm 0.2 ^ { \circ }$. (0.1 pts) We repeat measurements: find the critical positions of the slope and measure $h _ { u }$. Three or more measurements (0.1 pts)

We do the same for the second critical angle: if the result is within $h _ { u } = 170 \mathrm {~mm}$, and $\alpha _ { 2 } \approx 14.5 ^ { \circ }$; the final result needs to be within 14.5° ± 3°. (0.1 pts) if three or more measurements were done. (0.1 pts)

Error estimates: $h _ { l }$ and $L$ uncertainties are estimated as 1 mm or 0.5 mm. (0.1 pts) $h _ { u }$ uncertainty when determining $\alpha _ { 0 }$ is estimated in the range from 1 mm to 2 mm, and when determining $\alpha _ { 2 }$ - in the range from 10 mm to 50 mm. (0.1 pts) This estimation can be done based on the standard deviation of the repeated measurements.

For small angles, in radians $\alpha \approx H / L$ so that

$$
\Delta \alpha = \sqrt { \left( \frac { \Delta H } { H } \right) ^ { 2 } + \left( \frac { \Delta L } { L } \right) ^ { 2 } } ,
$$

and $\Delta H = \sqrt { \Delta h _ { u } ^ { 2 } + \Delta _ { l } ^ { 2 } }$, numerically $\Delta \alpha _ { 1 } \approx 0.1 ^ { \circ } - 0.3 ^ { \circ }$ and $\Delta \alpha _ { 2 } \approx 1 ^ { \circ } - 5 ^ { \circ }$. If both calculations are made reasonably (it is also OK to apply addition of errors by modulus, instead of the Pythagorean rule, or upper-lower bound method) and without mistakes (0.1 pts)

Part B. Rolling speed (3 points)
We take first segment close to the upper edge of the board, and second segment close to the lower end of the board, so that $l _ { t } = 60 \mathrm {~mm}$. Then the data will be as follows

| h (mm) | $t _ { 1 } ( \mathrm {~s} )$ | $v _ { 1 }$ (mm/s) | $t _ { 2 } ( \mathrm {~s} )$ | $v _ { 2 }$ (mm/s) | $t _ { l } ( \mathrm {~s} )$ | $v _ { l }$ (mm/s) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 2.6 | 64.8 | 1.54 | 64.5 | 1.55 | 388.2 | 1.55 |
| 3 | 15.2 | 6.6 | 15.2 | 6.6 | 91.2 | 6.58 |
| 3.5 | 7.2 | 13.9 | 7.4 | 13.5 | 43.8 | 13.7 |
| 4 | 4.52 | 22.1 | 4.38 | 22.8 | 26.46 | 22.7 |
| 4.5 | 3.41 | 29.3 | 3.53 | 28.3 | 20.7 | 29.0 |
| 5 | 2.86 | 35.0 | 2.97 | 33.7 | 17.22 | 34.8 |
| 5.5 | 2.27 | 44.1 | 2.31 | 43.3 | 13.56 | 44.2 |
| 6 | 1.78 | 56.2 | 1.65 | 60.1 | 10.14 | 59.2 |
| 6.5 | 1.51 | 66.2 | 1.35 | 74.1 | 8.46 | 70.9 |
| 7 | 1.35 | 74.1 | 1.02 | 98.0 | 7.02 | 85.5 |
| 7.5 | 1.31 | 76.3 |  |  |  |  |
| 8 | 1.21 | 82.6 |  |  |  |  |
| 8.5 | 1.09 | 91.2 |  |  |  |  |
| 9 | 0.98 | 102 |  |  |  |  |
| 9.5 | 0.92 | 109 |  |  |  |  |
| 10 | 0.84 | 119 |  |  |  |  |
| 10.5 | 0.78 | 128 |  |  |  |  |
| 11 | 0.72 | 139 |  |  |  |  |

As we can see, the rolling time for the first and second segments start departing at $H = 65 \mathrm {~mm}$, which gives us the critical slope $\alpha _ { 1 } = 6.2 ^ { \circ }$.
