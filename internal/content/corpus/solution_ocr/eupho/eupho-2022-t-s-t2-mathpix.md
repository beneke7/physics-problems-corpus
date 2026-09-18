---
id: solution-ocr-eupho-2022-t-s-t2
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2022_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2022-T2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T2: Thermal oscillations

Part (a): Critical voltages
The power heating the resistor is $P _ { \mathrm { el } } = V ^ { 2 } / R _ { j }$. The thermal equilibrium is reached when $P _ { \mathrm { el } } = P = \alpha \left( T _ { \mathrm { eq } } - T _ { 0 } \right)$. To avoid oscillations, the equilibrium temperature $T _ { \text {eq } }$ must satisfy $T _ { \mathrm { eq } } < T _ { c }$ if $R = R _ { 1 }$ and $T _ { \mathrm { eq } } > T _ { c }$ if $R = R _ { 2 }$. Solving for $V$, we have

$$
\begin{equation*}
V = \sqrt { R _ { j } \alpha \left( T _ { \mathrm { eq } } - T _ { 0 } \right) } . \tag{1}
\end{equation*}
$$

The critical values therefore are

$$
\begin{equation*}
V _ { 1 } = \sqrt { R _ { 1 } \alpha \left( T _ { c } - T _ { 0 } \right) } \quad \text { and } \quad V _ { 2 } = \sqrt { R _ { 2 } \alpha \left( T _ { c } - T _ { 0 } \right) } . \tag{2}
\end{equation*}
$$

Part (b): Temperature behaviour
In the oscillating regime, we have a time-dependent current $I ( t )$. The power dissipated over the resistor is $P _ { \mathrm { el } } ( t ) =$ $R ( t ) I ( t ) ^ { 2 }$. By assumption (ii), we may assume that the thermal equilibrium is reached very fast, i.e. $P _ { \mathrm { el } } ( t ) = P ( t )$. The temperature $T ( t )$ is therefore determined by the current via

$$
\begin{equation*}
T ( t ) = T _ { 0 } + \frac { R ( t ) I ( t ) ^ { 2 } } { \alpha } . \tag{3}
\end{equation*}
$$

If the resistance has value $R _ { 1 }$, the current will increase, trying to reach $J _ { 1 } = V / R _ { 1 }$. The difference $I ( t ) - V / R _ { 1 }$ will decay exponentially, with characteristic time $L / R _ { 1 }$. The phase transition occurs once the critical current

$$
I _ { 1 } = \sqrt { \frac { \alpha \left( T _ { c } - T _ { 0 } \right) } { R _ { 1 } } }
$$

is reached. After the phase transition, the current will decrease, approaching the new equilibrium value $J _ { 2 } = V / R _ { 2 }$. Again, $I ( t ) - V / R _ { 2 }$ will decay exponentially with characteristic time $L / R _ { 2 }$, until the critical current

$$
I _ { 2 } = \sqrt { \frac { \alpha \left( T _ { c } - T _ { 0 } \right) } { R _ { 2 } } }
$$

is reached. This behaviour is shown in Fig. 1.

![](../../../figures/solution-ocr/89d4e755e7c097fea53b9998.jpg)
Fig. 1

Together with (3), we see that the temperature behaves like in Figure 2.

![](../../../figures/solution-ocr/e23737e711472cfdddd30d85.jpg)
Fig. 2

The maximum and minimum temperatures will be attained just after the phase transitions occur. We obtain that

$$
\begin{equation*}
\frac { T _ { \max } - T _ { 0 } } { T _ { \min } - T _ { 0 } } = \frac { R _ { 2 } I _ { 1 } ^ { 2 } } { R _ { 1 } I _ { 2 } ^ { 2 } } = \frac { R _ { 2 } ^ { 2 } } { R _ { 1 } ^ { 2 } } . \tag{4}
\end{equation*}
$$

Part (c): Period of oscillations

If the phase transition occurs at $t = 0$, with the resistance changing from $R _ { j ^ { \prime } }$ to $R _ { j }$, the current is given by

$$
\begin{equation*}
I ( t ) = \frac { V } { R _ { j } } + \left( I _ { j ^ { \prime } } - \frac { V } { R _ { j } } \right) \mathrm { e } ^ { - R _ { j } t / L } \tag{5}
\end{equation*}
$$

until the next phase transition occurs when $I \left( t _ { j } \right) = I _ { j }$. Hence, the period is

$$
\begin{equation*}
t _ { 1 } + t _ { 2 } = \frac { L } { R _ { 1 } } \ln \left( \frac { I _ { 2 } - V / R _ { 1 } } { I _ { 1 } - V / R _ { 1 } } \right) + \frac { L } { R _ { 2 } } \ln \left( \frac { I _ { 1 } - V / R _ { 2 } } { I _ { 2 } - V / R _ { 2 } } \right) \tag{6}
\end{equation*}
$$

Inserting the relations $R _ { 2 } = \eta R _ { 1 }$ and $V = \sqrt { V _ { 1 } V _ { 2 } } =$ $\eta ^ { 1 / 4 } \sqrt { R _ { 1 } \alpha \left( T _ { c } - T _ { 0 } \right) }$, we obtain the period

$$
\begin{align*}
\frac { L } { R _ { 1 } } \ln \left( \frac { 7 } { 4 } \right) + \frac { L } { R _ { 2 } } \ln ( 7 ) = \frac { L } { R _ { 1 } } \left( \ln \left( \frac { 7 } { 4 } \right) \right. & \left. + \frac { 1 } { 16 } \ln ( 7 ) \right) \\
& \approx 0.68 \frac { L } { R _ { 1 } } . \tag{7}
\end{align*}
$$


| Marking scheme <br> Task (a): Critical voltages |  |  | b3 | Realising that this exponential behaviour breaks down once the critical temperature is reached. This does not need to be written specifically if the jumps | 1.0 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| a1 a2 | Formula for the power dissipation $P _ { \mathrm { el } } = V ^ { 2 } / R _ { j }$. Relating the power dissipation to the temperature of the resistor in oscillations-free stationary regime, $P _ { \mathrm { el } } = P = \alpha \left( T _ { \mathrm { eq } } - T _ { 0 } \right)$ | 0.5 |  | in $T - t$ graph happen at $T = T _ { c }$. No marks are |  |
|  |  |  |  |  |  |
| a3 | Expressing the voltage in terms of the temperature if the thermal equilibrium were to be reached, $V =$ | 0.5 | b4 | Relating the critical temperature to the corresponding critical current $I _ { j }$ | 0.5 |
|  | $\sqrt { R _ { j } \alpha \left( T _ { \text {eq } } - T _ { 0 } \right) }$. Subtract 0.1 pts if $V$ is not ex- <br> $\sqrt { R _ { j } \alpha \left( T _ { \mathrm { eq } } - T _ { 0 } \right) }$. Subtract 0.1 pts if $V$ is not expressed explicitly. pressed explicitly. |  |  | Realising that the temperature curve $T ( t )$ is related to $I ( t )$-curve, $T ( t ) = T _ { 0 } + \frac { R ( t ) I ( t ) ^ { 2 } } { \alpha }$ | 0.5 |
| a4 | Realising that oscillations will not happen if $V > \sqrt { R _ { 2 } \alpha \left( T _ { \mathrm { eq } } - T _ { 0 } \right) }$ or $V < \sqrt { R _ { 1 } \alpha \left( T _ { \mathrm { eq } } - T _ { 0 } \right) }$. No marks if only one inequality is obtained (but no subtractions because of that in a3 - in most cases those who got correct expression for one of the voltages but has a wrong or missing expression for the other gets full marks for a1-a3, and 0 pts for a4). | 0.5 | b6 | Drawing a correct final sketch which has the following features: exponential segments showing an exponential relaxation of $T ( t )$ in a right direction both when $R = R _ { 1 }$ and when $R = R _ { 2 }$; jumps in a right direction each time when $T$ reaches $T _ { c }$ (subtract 0.2 for each missing label on the axes and also if the temperature jumps do not occur at the same | 1.0 |
| Total number of points for Task (a) <br> Task (b): Temperature behavior |  | 2.0 |  | value of $T$ ). No points are given if any of the listed <br> value of $T$ ). No points are given if any of the listed features is missing. features is missing. |  |
| b1 |  | 1.0 | b7 | Using the feature from the graph that the maximal and minimal temperatures are taken immediately after a phase transition when $I = I _ { 1 }$ and $I = I _ { 2 }$ Correct answer for the ratio of the maximal and minimal temperatures. Only 0.3 pts if the answer is not simplified. | 0.5 |
|  |  |  |  | Total number of points for Task (b) | 6.0 |
|  | Realising that the $I - t$ curve is made of segments of exponents, joined without discontinuities. Partial credit of 0.5 pts if it is made of curved segments for which it is not clear that these are exponents, or if these are growing exponents, but which are connected continuously with a discontinuous derivative $\frac { \mathrm { d } I } { \mathrm {~d} t }$. No points if $I ( t )$ is discontinuous, or if only one segment of an exponent is shown. Full marks can be given if there is no $I - t$ graph, but the $T - t$ graph is made of the segments of vanishing exponents, connected with temperature jumps in a correct direction, and a partial credit of 0.5 pts if the segments of the $T - t$ are either growing exponents or curves of unclear shape, still connected so that it would correspond to a continuous $I ( t )$-curve with a discontinuous derivative. Partial credit of 0.5 pts is given if there is no $I - t$-curve shown, but $V - t$ curve is shown to be made of decaying exponential segments, connected with jumps | c1 |  | Expressing the duration of each of the exponential segments as $t _ { j } = \frac { L } { R _ { j } } \ln \frac { \Delta I _ { j , i } } { \Delta I _ { j , f } }$ where $\Delta I _ { j , i }$ and $\Delta I _ { j , f }$ denote the corresponding initial and final departures of the current from the equilibrium value (full marks to be given if the final answer is correct). Subtract 0.2 for each incorrect $\Delta I _ { j , i }$ and $\Delta I _ { j , f }$, $i = 1,2$ (this means that if none of them is correct, only 0.2 pts are given for c1). 60\% of points if $t _ { j }$ is related to $\Delta I _ { j , i }$ and $\Delta I _ { j , f }$ correctly, but not expressed explicitly. | 0.5+ 0.5 |
|  |  | 0.3+ | c2 | Correct first and second terms in the final answer (40\% of it if the answer is not simplified) | 0.5+ 0.5 |
|  | Realising that (i) one of these exponents is in a form $a _ { 1 } - b _ { 1 } \mathrm { e } ^ { - t / \tau _ { 1 } }$ and (ii) the other one - in a form $a _ { 2 } + b _ { 2 } \mathrm { e } ^ { - t / \tau _ { 2 } }$ where (iii) the $a _ { 1 } > a _ { 2 }$ and (iv) $\tau _ { 1 } > \tau _ { 2 }$. It is not necessary to write down these inequalities mathematically - it is enough it these are clear from a sketch. Inequality $\tau _ { 1 } > \tau _ { 2 }$ does not need to be written if expressions for $\tau _ { 1 }$ and $\tau _ { 2 }$ are given. Full marks can be given if $I - t$ graph is missing, but $T - t$ graph is correct and has all the features as described in b6. Full marks can be also given if the correct exponential forms are documented not here, but in part c. | 0.3+ <br> 0.1 |  | Total number of points for Task (c) | 2.0 |
