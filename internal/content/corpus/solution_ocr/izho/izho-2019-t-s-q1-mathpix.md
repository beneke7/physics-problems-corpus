---
id: solution-ocr-izho-2019-t-s-q1
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2019_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2019-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 1B (3.0 points)

Possible solution. The power of the heat transfer from the body to the air is proportional to the difference between the body $T$ and the air $T _ { x }$ temperatures with the factor $\alpha$, i.e.

$$
\begin{equation*}
P = \alpha \left( T - T _ { x } \right) , \tag{1}
\end{equation*}
$$

as a result, the body with the heat capacity $C$ cools down by the temperature $d T$ over time period $d t$, which obeys the heat balance equation

$$
\begin{equation*}
C d T = - P d t . \tag{2}
\end{equation*}
$$

Equations (1) and (2) with the initial condition $T = T _ { 0 }$ have a solution

$$
\begin{equation*}
T ( t ) = T _ { x } + \left( T _ { 0 } - T _ { x } \right) e ^ { - \beta t } , \tag{3}
\end{equation*}
$$

where $\beta = \alpha / C$ is a constant.


Let the body be cooled from the temperature $T _ { 0 }$ to the temperature $T _ { 1 }$ for a certain time interval, then it follows from (3) that

$$
\begin{equation*}
\left( T _ { 1 } - T _ { 0 } \right) = \gamma \left( T _ { 0 } - T _ { x } \right) , \tag{4}
\end{equation*}
$$

where $\gamma$ is a constant.
Over the following same time interval, this difference will also change in $\gamma$ times

$$
\begin{equation*}
\left( T _ { 2 } - T _ { 1 } \right) = \gamma \left( T _ { 1 } - T _ { x } \right) . \tag{5}
\end{equation*}
$$

Equations (4) and (5) result in the relation

$$
\begin{equation*}
\frac { \left( T _ { 0 } - T _ { \chi } \right) } { \left( T _ { 1 } - T _ { 0 } \right) } = \frac { \left( T _ { 1 } - T _ { \chi } \right) } { \left( T _ { 2 } - T _ { 0 } \right) } , \tag{6}
\end{equation*}
$$

which has the following solution

$$
\begin{equation*}
T _ { x } = \frac { T _ { 0 } T _ { 2 } - T _ { 1 } ^ { 2 } } { \left( T _ { 0 } + T _ { 2 } \right) - 2 T _ { 1 } } . \tag{7}
\end{equation*}
$$

It is obtained from the graph provided: the initial temperature $T _ { 0 } = 373 \mathrm {~K}$, in 10 minutes the temperature is equal to $T _ { 1 } = 337 K$, and in 20 minutes it reaches the value of $T _ { 2 } = 319 K$. Substituting these data into equation (7), the air temperature is finally calculated as

$$
\begin{equation*}
T _ { x } = 301 \mathrm {~K} = 28 ^ { \circ } \mathrm { C } . \tag{8}
\end{equation*}
$$

| Content | Points |
| :--- | :--- |
| Correct method for determining the air temperature | 1.5 |
| The air temperature lies in the interval $T _ { x } = 27.5 - 28.5 ^ { \circ } \mathrm { C }$ | 1.5 |
| The air temperature lies in the interval $T _ { x } = 27.0 - 29.0 ^ { \circ } \mathrm { C }$ | (1.0) |
| The air temperature lies in the interval $T _ { x } = 26.5 - 29.5 ^ { \circ } \mathrm { C }$ | (0.5) |
| Out of the above intervals | 0 |
| Total | 3.0 |

## Problem 1C (3.0 points)

Let $R$ be the active component of the load (the real part of the impedance), and $X$ be the reactive component of the entire circuit (the imaginary part of the total impedance). Then the current amplitude is found as

$$
I = \frac { U } { \sqrt { ( r + R ) ^ { 2 } + X ^ { 2 } } } .
$$

The average thermal power in the load reads as

$$
P = \frac { 1 } { 2 } I ^ { 2 } R = \frac { U ^ { 2 } R } { 2 \left[ ( r + R ) ^ { 2 } + X ^ { 2 } \right] } .
$$

It is seen that the maximum power is achieved at $X = 0$, i.e. there should be no phase shift in the circuit. The remaining expression has a maximum at $R = r$.

The phase shift would be zero if a coil was connected in series with the capacitor such that $\frac { 1 } { \omega C } = \omega L$, and, thus, $L = \frac { 1 } { \omega ^ { 2 } C } = 1.00 \cdot 10 ^ { - 2 } H n$.

It turns out that the simplest load must consist of the resistor with the resistance of 2019 Ohms and the coil with the inductance of $1.00 \cdot 10 ^ { - 2 } \mathrm { Hn }$.

The maximum power is obtained as
![](../../../figures/solution-ocr/18fdcd7fbc7a443e04fcd738.jpg)

$$
P _ { \max } = \frac { 1 } { 2 } \frac { U ^ { 2 } } { 4 r } = \frac { U ^ { 2 } } { 8 r } = 13.9 \mathrm {~mW} .
$$

| Content | Points |
| :--- | :--- |
| The phase shift is zero | 1 |


| Without justification | $( 0,5 )$ |
| :--- | :--- |
| The inductance of the coil $L = \frac { 1 } { \omega ^ { 2 } C }$ | 0,7 |
| Correct numerical value $L = 10 ^ { - 2 } \mathrm { Hn }$ | 0,3 |
| Maximum power at $R = r$ | 0,5 |
| The maximum power itself $P _ { \text {max } } = \frac { U ^ { 2 } } { 8 r }$ | 0,3 |
| Correct numerical value $P _ { \text {max } } = 14 \mathrm {~mW}$ | 0,2 |
| Total | 3,0 |
