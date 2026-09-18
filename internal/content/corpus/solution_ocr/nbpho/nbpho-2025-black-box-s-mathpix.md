---
id: solution-ocr-nbpho-2025-black-box-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2025-black-box]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix PDF API Markdown conversion; split from the full 2025 booklet; grading-only material omitted from canonical display."
---
# 4. Black box (12 points) — Solution by Eero Uustalu

First we need to assemble a simple circuit allowing us to measure the $V - I$ curve of the black box: voltmeter in parallel to the box, and ammeter in series. The measurement results are shown in the table below, both for forward current (blue) and for reverse current (red) (the headers of the reverse current data has minus sign).

![](../../../figures/solution-ocr/8b46fa5357622b3339d1b336.jpg)
Voltage and Current Measurements

| V (V) | I (mA) | -V (V) | -I (mA) |
| :--- | :--- | :--- | :--- |
| 4.59 | 7.66 | 3.491 | 7.98 |
| 4.55 | 6.53 | 3.458 | 6.98 |
| 4.50 | 5.52 | 3.423 | 6.00 |
| 4.46 | 4.53 | 3.379 | 4.94 |
| 4.43 | 3.964 | 3.324 | 3.868 |
| 4.41 | 3.665 | 3.279 | 3.178 |
| 4.40 | 3.51 | 3.219 | 2.468 |
| 4.36 | 3.08 | 3.180 | 2.088 |
| 4.32 | 2.756 | 3.121 | 1.637 |
| 4.25 | 2.54 | 3.044 | 1.186 |
| 4.14 | 2.391 | 2.993 | 0.958 |
| 3.98 | 2.23 | 2.956 | 0.817 |
| 3.871 | 2.115 | 2.922 | 0.711 |
| 3.656 | 1.897 | 2.880 | 0.595 |
| 3.539 | 1.781 | 2.784 | 0.403 |
| 3.436 | 1.67 | 2.713 | 0.2931 |
| 3.282 | 1.519 | 2.607 | 0.1847 |
| 3.079 | 1.314 | 2.423 | 0.0801 |
| 2.923 | 1.159 | 2.156 | 0.0219 |
| 2.762 | 0.998 | 1.807 | 0.0037 |
| 2.625 | 0.862 | 1.451 | 0.0006 |
| 2.498 | 0.736 | 0 | 0 |
| 2.351 | 0.593 |  |  |
| 2.246 | 0.491 |  |  |
| 2.143 | 0.398 |  |  |
| 2.036 | 0.2932 |  |  |
| 1.931 | 0.1989 |  |  |
| 1.815 | 0.1037 |  |  |
| 1.732 | 0.0486 |  |  |
| 1.670 | 0.021 |  |  |
| 1.617 | 0.0087 |  |  |
| 1.526 | 0.0016 |  |  |
| 1.467 | 0.0005 |  |  |

These data will be used for all the tasks.
i) (4 points)

Based on these data, we can determine that there is a single diode allowing negative currents to flow, with no other components in that branch, as the $V - I$ curve shows the classical exponential dependence characteristic of a diode.

The situation is more complex for positive currents: there must be two parallel branches allowing current to flow. One branch must contain a diode with a lower threshold voltage in series with a resistor, which explains why the initial exponential curve transitions into a linear relationship characteristic of resistive behaviour. The second branch must contain a diode with a higher threshold voltage (approximately


4.3 V) that only conducts when this voltage is exceeded.

This second branch could be either in parallel with just a resistor, or in parallel with the series combination of the resistor and first diode. These two configurations cannot be distinguished based solely on the $V - I$ curves, and both will be considered correct interpretations of the data. The two possible circuits are shown below.
![](../../../figures/solution-ocr/55c0e60cb53944ad42a62fe3.jpg)

Note that faulty measurements give no points in regard to data sufficiency (for example if the voltage was read from the power source without any corrections made) Each plot (forward and reverse current) gives 1.2 points:
ii) (2 points) The resistor's resistance is the inverse of the slope in the linear section of the curve. To ensure accuracy, the most linear segment should be selected for this calculation. The fit line is shown in purple in the figure above, yielding a resistance of $R =$ $1008 \Omega$.

iii) (6 points) The accepted uncertainty of all subsequent results is ±10 \% of the values presented here. The opening voltage $V _ { 1 }$ of diode $D _ { 1 }$ can be found at the point where the red curve intersects the 1 mA value. For greater precision, additional measurements could be performed by gradually adjusting the voltage until exactly 1 mA current is reached. Based on our current measurements, the result is 3.004 V.

The value of $V _ { 2 }$ can be found at the point where the blue curve reaches 1 mA , from which we must subtract the resistor's voltage drop $I R$. This calculation gives $V _ { 2 } = 1.757 \mathrm {~V}$.

To determine the opening voltage of diode $D _ { 3 }$, we must first subtract the current through the resistor. This can be accomplished graphically by drawing a line parallel to the linear segment's fit line, at a 1 mA distance, as illustrated in the figure. For option 1, this procedure directly yields $V _ { 3 } = 4.47 \mathrm {~V}$. For option 2 (the actual configuration inside the box), we need to subtract voltage $V _ { 2 }$. Consequently, $V _ { 3 } = 2.71 \mathrm {~V}$ for option 2.
