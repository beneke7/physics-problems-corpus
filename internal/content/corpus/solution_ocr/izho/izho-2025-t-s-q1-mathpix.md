---
id: solution-ocr-izho-2025-t-s-q1
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2025_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2025-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 1.2 (3.0 points)

Let $V$ be the volume of nitrogen in the gas holder, which is then pumped into the balloon. Imaginarily, this volume can be placed in an elastic shell, then the surrounding nitrogen in the gas holder does work on this gas

$$
\begin{equation*}
A _ { V } = P V . \tag{1}
\end{equation*}
$$

When inflating a balloon, the atmosphere also does work on the gas, which is negative and equal to

$$
\begin{equation*}
A _ { \text {atm } } = - P _ { 0 } V _ { 0 } . \tag{2}
\end{equation*}
$$

According to the second law of thermodynamics, work on a gas goes towards changing its internal energy

$$
\begin{equation*}
A _ { V } + A _ { \text {atm } } = U - U _ { 0 } . \tag{3}
\end{equation*}
$$

The internal energy in the gas holder and in the ball are respectively found as

$$
\begin{align*}
& U _ { 0 } = v C _ { V } T _ { 0 } ,  \tag{4}\\
& U = v C _ { V } T , \tag{5}
\end{align*}
$$

where the molar heat capacity of nitrogen at constant volume $C _ { V }$ is expressed through the universal gas constant $R$ in the form

$$
\begin{equation*}
C _ { V } = \frac { 5 } { 2 } R . \tag{6}
\end{equation*}
$$

Note that immediately after the gas holder valve is closed, the temperature of the nitrogen in the ball differs from the temperature of the nitrogen in the gas holder itself.

Let us write the equation of state of an ideal gas for nitrogen in the gas tank and the balloon

$$
\begin{align*}
& P V = v R T _ { 0 } ,  \tag{7}\\
& P V _ { 0 } = v R T , \tag{8}
\end{align*}
$$

and solving the resulting set of equations together, we find

$$
\begin{equation*}
v = \frac { 27 } { 7 } = 3.86 \text { mole. } \tag{9}
\end{equation*}
$$

Here the condition is used that a volume of 22.4 liters under normal conditions contains 1 mole of gas.

| Content | Points |
| :--- | :--- |


| Formula (1): $A _ { V } = P V$ | 0.4 |
| :--- | :--- |
| Formula (2): $A _ { \text {atm } } = - P _ { 0 } V _ { 0 }$ | 0.4 |
| Formula (3): $A _ { V } + A _ { \text {atm } } = U - U _ { 0 }$ | 0.2 |
| Formula (4): $U _ { 0 } = v C _ { V } T _ { 0 }$, | 0.2 |
| Formula (5): $U = v C _ { V } T$ | 0.2 |
| Formula (6): $C _ { V } = \frac { 5 } { 2 } R$ | 0.2 |
| Formula (7): $P V = v R T _ { 0 }$ | 0.2 |
| Formula (8): $P V _ { 0 } = v R T$ | 0.2 |
| Numerical value in formula (9): $v = \frac { 27 } { 7 } = 3.86$ mole | 1.0 |
| Total | 3.0 |

## Problem 1.3 (3.0 points)

Since each bulb is a point source of light, the light from each bulb at any position of the screen creates a clear picture of shadows in the form of an enlarged image of the grid. The size of one cell of the image $\Delta x$ is easily expressed through the specified distances

$$
\begin{equation*}
\Delta x = a \frac { L + S } { L } . \tag{1}
\end{equation*}
$$

![](../../../figures/solution-ocr/0e7dff08a25e891d4254ed85.jpg)
![](../../../figures/solution-ocr/ed604c40a0def5f1b3a4988f.jpg)

The image of the grid created by the light of another bulb will simply be shifted by some value $\delta x$. This shift is directed parallel to the "shift" when moving from one bulb to another. Therefore, the images of the grid wires parallel to the line of the bulbs will be clear at any position of the screen, the shadows perpendicular to the line of the bulbs will be "blurred".

If the distance between the bulbs is $h$, then the magnitude of the image shift will be equal to

$$
\begin{equation*}
\delta x = h \frac { S } { L } . \tag{2}
\end{equation*}
$$

![](../../../figures/solution-ocr/aca1f641c9be7c20adbbcc02.jpg)
![](../../../figures/solution-ocr/ef17645e21fc65e365a1bcdc.jpg)

It is easy to understand that the image created by all the bulbs will be clear and sharp if the amount of shift when moving from one bulb to another is an integer number of image cells, that is, when

$$
\begin{equation*}
\delta x = m \Delta x . \tag{3}
\end{equation*}
$$

Using the previously obtained formulas (1)-(2), we find

$$
\begin{equation*}
S _ { m } = L \frac { m } { \frac { h } { a } - m } . \tag{4}
\end{equation*}
$$

Given the numerical data given in the problem statement, the numerical values of possible screen positions are given in the table below.


| $m$ | 1 | 2 | 3 | 4 |
| :--- | :--- | :--- | :--- | :--- |
| $S _ { m } , \mathrm {~cm}$ | 2,56 | 6,90 | 15,8 | 44,4 |

As an illustration, we present a drawing showing the "spread of shadows" from the grid (the proportions are not preserved, the vertical size is greatly increased).
![](../../../figures/solution-ocr/f8b6a2230ca745ba0aec6d8f.jpg)

| Content | Points |
| :--- | :--- |
| Formula (1): $\Delta x = a \frac { L + S } { L }$ | 0.2 |
| Formula (2): $\delta x = h \frac { S } { L }$ | 0.2 |
| Formula (3): $\delta x = m \Delta x$ | 0.2 |
| Formula (4): $S _ { m } = L \frac { m } { \frac { h } { a } - m }$ | 0.4 |
| Numerical values in the table: 0.5 for each correct value | 2.0 |
| Total | 3.0 |
