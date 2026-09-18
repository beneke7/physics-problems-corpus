---
id: solution-ocr-usapho-2012-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2012-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A2

An ideal (but not necessarily perfect monatomic) gas undergoes the following cycle.

- The gas starts at pressure $P _ { 0 }$, volume $V _ { 0 }$ and temperature $T _ { 0 }$.
- The gas is heated at constant volume to a pressure $\alpha P _ { 0 }$, where $\alpha > 1$.
- The gas is then allowed to expand adiabatically (no heat is transferred to or from the gas) to pressure $P _ { 0 }$
- The gas is cooled at constant pressure back to the original state.

The adiabatic constant $\gamma$ is defined in terms of the specific heat at constant pressure $C _ { p }$ and the specific heat at constant volume $C _ { v }$ by the ratio $\gamma = C _ { p } / C _ { v }$.

a. Determine the efficiency of this cycle in terms of $\alpha$ and the adiabatic constant $\gamma$. As a reminder, efficiency is defined as the ratio of work out divided by heat in.
b.A lab worker makes measurements of the temperature and pressure of the gas during the adiabatic process. The results, in terms of $T _ { 0 }$ and $P _ { 0 }$ are

| Pressure | units of $P _ { 0 }$ | 1.21 | 1.41 | 1.59 | 1.73 | 2.14 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Temperature | units of $T _ { 0 }$ | 2.11 | 2.21 | 2.28 | 2.34 | 2.49 |

Plot an appropriate graph from this data that can be used to determine the adiabatic constant.
c. What is $\gamma$ for this gas?

## Solution

a. Label the end points as 0,1 , and 2 . The ideal gas law yields $T _ { 1 } = \alpha T _ { 0 }$. The quantity $P V ^ { \gamma }$ is conserved along the adiabatic process $1 \rightarrow 2$, so
$$
P _ { 1 } V _ { 1 } ^ { \gamma } = P _ { 2 } V _ { 2 } ^ { \gamma } = \frac { 1 } { \alpha } P _ { 1 } V _ { 2 } ^ { \gamma } \Rightarrow V _ { 2 } = V _ { 1 } \alpha ^ { 1 / \gamma } = V _ { 0 } \alpha ^ { 1 / \gamma } .
$$
Again using the ideal gas law
$$
T _ { 2 } = \alpha ^ { 1 / \gamma } T _ { 0 } .
$$
Now, heat enters the gas during the isochoric process $0 \rightarrow 1$, so
$$
Q _ { \mathrm { in } } = n C _ { v } \Delta T = n C _ { v } ( \alpha - 1 ) T _ { 0 } .
$$
Heat exits the system during the process $2 \rightarrow 0$, so
$$
Q _ { \text {out } } = n C _ { p } \Delta T = n C _ { p } \left( \alpha ^ { 1 / \gamma } - 1 \right) T _ { 0 } .
$$
The work done is the difference,
$$
W = Q _ { \text {in } } - Q _ { \text {out } } = n C _ { v } ( \alpha - 1 ) T _ { 0 } - n C _ { p } \left( \alpha ^ { 1 / \gamma } - 1 \right) T _ { 0 }
$$
and the efficiency is then
$$
\eta = \frac { W } { Q _ { \mathrm { in } } } = \frac { C _ { v } ( \alpha - 1 ) - C _ { p } \left( \alpha ^ { 1 / \gamma } - 1 \right) } { C _ { v } ( \alpha - 1 ) } = 1 - \gamma \frac { \alpha ^ { 1 / \gamma } - 1 } { \alpha - 1 }
$$
where we used the definition $\gamma = C _ { p } / C _ { v }$.

b. For an adiabatic process, the quantity
$$
P V ^ { \gamma } \left( \frac { T } { P V } \right) ^ { \gamma } = P ^ { 1 - \gamma } T ^ { \gamma }
$$
is constant, which implies that
$$
P \propto T ^ { \gamma / ( \gamma - 1 ) } .
$$
Thus, if we make a graph with $\log T$ on the horizontal axis and $\log P$ on the vertical, we will find a line with slope $\gamma / ( \gamma - 1 )$. To get full credit, all five data points should be plotted and used, though one can get an approximate result with just two.
c. Using the data given, we find a slope of about 3.5, giving $\gamma \approx 1.4$, as expected for a diatomic gas. Note that credit will not be given for simply writing this number down; some degree of data analysis is necessary.
