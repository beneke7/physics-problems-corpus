---
id: solution-ocr-inpho-2023-s-a3
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2023-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 3. [16 marks] Work in progress

One mole of an ideal monoatomic gas goes through a linear process from A to B as shown in the pressure-volume $( P - V )$ diagram. The temperature at A is $T _ { \mathrm { A } } = 227 ^ { \circ } \mathrm { C }$. The process is such that, the temperature decreases and the heat is continuously supplied to the gas. The ratio of the specific heat at the constant pressure to that at the constant volume is 5/3. Obtain the expression for the maximum work $\left( W _ { \text {max } } \right)$ the gas can perform in such a process. Calculate $W _ { \text {max } }$.
![](../../../figures/solution-ocr/7678108ccebc6d1d84d03ec8.jpg)

Solution: The variation of $P$ is linear with respect to $V$, hence it can be written as

$$
\begin{equation*}
P = - a V + b \tag{3.1}
\end{equation*}
$$

where $a$ and $b$ are positive constants. At A,

$$
\begin{align*}
P _ { A } V _ { A } & = R T _ { A }  \tag{3.2}\\
\left( - a V _ { A } + b \right) V _ { A } & = R \times 500 \tag{3.3}
\end{align*}
$$

where $T _ { A } = 500 \mathrm {~K}$. Using the ideal gas equation $P V = R T$

$$
\begin{align*}
T & = \frac { P V } { R } = \frac { - a V ^ { 2 } + b V } { R }  \tag{3.4}\\
\frac { d T } { d V } & = \frac { - 2 a V + b } { R } \tag{3.5}
\end{align*}
$$

In this process, $V$ is increasing but the temperature is decreasing, hence

$$
\begin{equation*}
\frac { d T } { d V } \leq 0 \tag{3.6}
\end{equation*}
$$

Using Eq. (3.5)

$$
\begin{align*}
\frac { - 2 a V + b } { R } & \leq 0  \tag{3.7}\\
\Longrightarrow V & \geq \frac { b } { 2 a } \tag{3.8}
\end{align*}
$$

This is the lower bound on the volume. This means if we want work done to be maximum

$$
\begin{equation*}
V _ { \min } = V _ { A } = \frac { b } { 2 a } \tag{3.9}
\end{equation*}
$$

Using the first law of thermodynamics $d Q = d U + P d V$,

$$
\begin{equation*}
d Q = \frac { R } { \gamma - 1 } d T + P d V \tag{3.10}
\end{equation*}
$$

where we use $d U = C _ { V } d T$ and Eq.(3.2), Eq. (3.5), and $\gamma = 5 / 3$ in the above equation yields

$$
\begin{align*}
d Q & = \frac { 3 R ( - 2 a V + b ) d V } { 2 R } + ( - a V + b ) d V  \tag{3.11}\\
\frac { d Q } { d V } & = \left( - 4 a V + \frac { 5 b } { 2 } \right) \tag{3.12}
\end{align*}
$$

In the process, heat is taken and volume is also increasing. hence

$$
\begin{align*}
\frac { d Q } { d V } & \geq 0  \tag{3.13}\\
- 4 a V + \frac { 5 b } { 2 } & \geq 0  \tag{3.14}\\
\Longrightarrow V & \leq \frac { 5 b } { 8 a } \tag{3.15}
\end{align*}
$$


This is the upper bound on the volume. This means if we want work done to be maximum

$$
\begin{equation*}
V _ { \max } = V _ { \mathrm { B } } = \frac { 5 b } { 8 a } \tag{3.16}
\end{equation*}
$$

To get maximum work, The gas must expand from $V _ { A }$ to $V _ { B }$

$$
\begin{align*}
W _ { \max } & = \int _ { V _ { A } } ^ { V _ { B } } P d V = \int _ { V _ { \mathrm { A } } } ^ { V _ { \mathrm { B } } } ( - a V + b ) d V  \tag{3.17}\\
& = \left[ \frac { - a V ^ { 2 } } { 2 } + b V \right] _ { b / 2 a } ^ { 5 b / 8 a } \tag{3.18}
\end{align*}
$$

Substituting the limits, we get,

$$
\begin{equation*}
W _ { \max } = \frac { 7 } { 128 } \frac { b ^ { 2 } } { a } \tag{3.19}
\end{equation*}
$$

Solving $\left( - a V _ { A } + b \right) V _ { A } = 500 R$, we get $\frac { b ^ { 2 } } { a } = 500 \times 4 R$. Substituting this in the above equation, we get,

$$
\begin{equation*}
W _ { \max } \approx 909 \mathrm {~J} \tag{3.20}
\end{equation*}
$$
