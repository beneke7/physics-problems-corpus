---
id: solution-ocr-izho-2021-t-s-q1
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2021_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2021-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 1.2 (3.0 points)

The plate has volume

$$
\begin{equation*}
V = a ^ { 2 } h , \tag{1}
\end{equation*}
$$

and it is subject to the gravity force

$$
\begin{equation*}
F _ { p } = \rho V g . \tag{2}
\end{equation*}
$$

At the line of contact between the plate and water, a difference in water levels occurs, as shown in the figure below.
![](../../../figures/solution-ocr/e6bcf51961fa4f7bd3248bc6.jpg)

As a result, on the lower surface of the plate with the area

$$
\begin{equation*}
S = a ^ { 2 } \tag{3}
\end{equation*}
$$

differential pressure applies

$$
\begin{equation*}
\Delta p = \rho _ { 0 } g ( H + h ) , \tag{4}
\end{equation*}
$$

which results in a vertically upward force

$$
\begin{equation*}
F = \Delta p S . \tag{5}
\end{equation*}
$$

To determine the value of $H$, we select a certain volume of water with the width $l$ near its contact line with the plate. It is subject to the surface tension force equal to

$$
\begin{equation*}
F _ { \sigma } = 2 \sigma l , \tag{6}
\end{equation*}
$$

as well as the force due to the pressure of the liquid column

$$
\begin{equation*}
F _ { \bar { p } } = \bar { p } \Delta S , \tag{7}
\end{equation*}
$$


where the average pressure ia found as

$$
\begin{equation*}
\bar { p } = \frac { 1 } { 2 } \rho _ { 0 } g H \tag{8}
\end{equation*}
$$

together with the cross-sectional area

$$
\begin{equation*}
\Delta S = H l . \tag{9}
\end{equation*}
$$

From the water equilibrium condition

$$
\begin{equation*}
F _ { \sigma } = F _ { \bar { p } } \tag{10}
\end{equation*}
$$

it follows that the height difference is obtained as

$$
\begin{equation*}
H = 2 \sqrt { \frac { \sigma } { \rho _ { 0 } g } } . \tag{11}
\end{equation*}
$$

The additional weight on the plate is acted upon by the gravity force

$$
\begin{equation*}
F _ { m } = m g , \tag{12}
\end{equation*}
$$

and equilibrium condition

$$
\begin{equation*}
F _ { p } + F _ { m } = F \tag{13}
\end{equation*}
$$

the mass of the weight is finally derived as

$$
\begin{equation*}
m = \left( \rho _ { 0 } - \rho \right) a ^ { 2 } h + 2 a ^ { 2 } \sqrt { \frac { \sigma \rho _ { 0 } } { g } } = 52.6 g . \tag{14}
\end{equation*}
$$

| Content | Points |
| :--- | :--- |
| Formula (1): $V = a ^ { 2 } h$ | 0.2 |
| Formula (2): $F _ { p } = \rho V g$ | 0.2 |
| Formula (3): $S = a ^ { 2 }$ | 0.2 |
| Formula (4): $\Delta p = \rho _ { 0 } g ( H + h )$ | 0.2 |
| Formula (5): $F = \Delta p S$ | 0.2 |
| Formula (6): $F _ { \sigma } = 2 \sigma l$ | 0.2 |
| Formula (7): $F _ { \bar { p } } = \bar { p } \Delta S$ | 0.2 |
| Formula (8): $\bar { p } = \frac { 1 } { 2 } \rho _ { 0 } g H$ | 0.2 |
| Formula (9): $\Delta S = H l$ | 0.2 |
| Formula (10): $F _ { \sigma } = F _ { \bar { p } }$ | 0.2 |
| Formula (11): $H = 2 \sqrt { \frac { \sigma } { \rho _ { 0 } g } }$ | 0.2 |
| Formula (12): $F _ { m } = m g$ | 0.2 |
| Formula (13): $F _ { p } + F _ { m } = F$ | 0.2 |
| Formula (14): $m = \left( \rho _ { 0 } - \rho \right) a ^ { 2 } h + 2 a ^ { 2 } \sqrt { \frac { \sigma \rho _ { 0 } } { g } }$ | 0.2 |
| Numerical value in formula (14): $m = 52.6 g$ | 0.2 |
| Total | 3.0 |

## Problem 1.3 (3.0 points)

The current through the coil cannot change instantly and immediately after the key $K$ is shorted it remains equal to zero. At the same time, since the resistance of the connecting wires is very small, the capacitors $C _ { 1 }$ and $C _ { 2 }$ are almost instantly charged up to charges $q _ { 10 }$ and $q _ { 20 }$ respectively, whereas the capacitor $C _ { 3 }$ remains uncharged


$$
\begin{equation*}
q _ { 30 } = 0 , \tag{1}
\end{equation*}
$$

since it can only be charged through the coil. Note that Joule heat is generated in the connecting wires.
Thus, at the initial moment of time, the capacitors $C _ { 1 }$ and $C _ { 2 }$ are connected in series to a constant voltage source $U _ { 0 }$ and their charges are equal

$$
\begin{equation*}
q _ { 10 } = q _ { 20 } , \tag{2}
\end{equation*}
$$

and the corresponding voltages add up, so that

$$
\begin{equation*}
\frac { q _ { 10 } } { C _ { 1 } } + \frac { q _ { 20 } } { C _ { 2 } } = U _ { 0 } . \tag{3}
\end{equation*}
$$

Thus, we find from equations (2) and (3) that

$$
\begin{equation*}
q _ { 10 } = q _ { 20 } = \frac { C _ { 1 } C _ { 2 } } { C _ { 1 } + C _ { 2 } } U _ { 0 } . \tag{4}
\end{equation*}
$$

The total energy of the system immediately after the key $K$ shortening turns out to be

$$
\begin{equation*}
W _ { 0 } = \frac { q _ { 10 } ^ { 2 } } { 2 C _ { 1 } } + \frac { q _ { 20 } ^ { 2 } } { 2 C _ { 2 } } = \frac { C _ { 1 } C _ { 2 } U _ { 0 } ^ { 2 } } { 2 \left( C _ { 1 } + C _ { 2 } \right) } . \tag{5}
\end{equation*}
$$

After charging the capacitors $C _ { 1 }$ and $C _ { 2 }$, the current through the coil starts to increase and harmonic oscillations are generated in the system, at which Joule losses can already be neglected, since the resistance of the connecting wires is very small.

Note that at that moment in time when the current in the coil is maximum, the voltage across it is zero and the capacitors $C _ { 2 }$ and $C _ { 3 }$ turn out to be connected in parallel. For such a connection of capacitors, the following relations for charges are satisfied

$$
\begin{align*}
& q _ { 1 } = q _ { 2 } + q _ { 3 } .  \tag{6}\\
& \frac { q _ { 2 } } { C _ { 2 } } = \frac { q _ { 3 } } { C _ { 3 } } .  \tag{7}\\
& \frac { q _ { 1 } } { C _ { 1 } } + \frac { q _ { 2 } } { C _ { 2 } } = U _ { 0 } . \tag{8}
\end{align*}
$$

Solving together the set of equations (6)-(8), we find the charges of the capacitors

$$
\begin{align*}
& q _ { 1 } = \frac { C _ { 1 } \left( C _ { 2 } + C _ { 3 } \right) } { C _ { 1 } + C _ { 2 } + C _ { 3 } } U _ { 0 } .  \tag{9}\\
& q _ { 2 } = \frac { C _ { 1 } C _ { 2 } } { C _ { 1 } + C _ { 2 } + C _ { 3 } } U _ { 0 } .  \tag{10}\\
& q _ { 3 } = \frac { C _ { 1 } C _ { 3 } } { C _ { 1 } + C _ { 2 } + C _ { 3 } } U _ { 0 } , \tag{11}
\end{align*}
$$

and the energy of the system in this state is obviously equal to

$$
\begin{equation*}
W = \frac { C _ { 1 } \left( C _ { 2 } + C _ { 3 } \right) U _ { 0 } ^ { 2 } } { 2 \left( C _ { 1 } + C _ { 2 } + C _ { 3 } \right) } + \frac { L I _ { \max } ^ { 2 } } { 2 } . \tag{12}
\end{equation*}
$$

In this case, the work of the source is found as

$$
\begin{equation*}
A = \left( q _ { 1 } - q _ { 10 } \right) U _ { 0 } , \tag{13}
\end{equation*}
$$

and the energy conservation law is written in the following form

$$
\begin{equation*}
W _ { 0 } + A = W , \tag{14}
\end{equation*}
$$

which provides the maximum currect

$$
\begin{equation*}
I _ { \max } = \sqrt { \frac { C _ { 3 } } { \left( C _ { 1 } + C _ { 2 } \right) \left( C _ { 1 } + C _ { 2 } + C _ { 3 } \right) L } } C _ { 1 } U _ { 0 } . \tag{15}
\end{equation*}
$$

Finding the minimum voltage $U _ { \text {min } }$ across the capacitor $C _ { 2 }$ is a slightly more difficult task that has a rather simple solution. It is obvious that harmonic oscillations occur in the system, at which the potential energy is constantly transformed into kinetic energy and backwards. For the presented electrical circuit, the


role of the kinetic energy is played by the energy of the coil. Therefore, when the current through the coil is zero, then the system is in its large deviation from equilibrium, while the voltage across the capacitor $C _ { 2 }$ is

$$
\begin{equation*}
U _ { 20 } = \frac { q _ { 20 } } { C _ { 2 } } = \frac { C _ { 1 } } { C _ { 1 } + C _ { 2 } } U _ { 0 } . \tag{16}
\end{equation*}
$$

Note that the zero coil current corresponds to the initial moment when the key $K$ is just shorted.
After a quarter of a period has passed, the current in the coil becomes maximum and the system passes the equilibrium position, whereas the voltage across the capacitor $C _ { 2 }$ drops to the value

$$
\begin{equation*}
U _ { 2 } = \frac { q _ { 2 } } { C _ { 2 } } = \frac { C _ { 1 } } { C _ { 1 } + C _ { 2 } + C _ { 3 } } U _ { 0 } , \tag{17}
\end{equation*}
$$

that is, it falls by $U _ { 20 } - U _ { 2 }$. After another quarter of the period, the voltage across the capacitor will further drop by the same amount, which is, at the same time, equal to $U _ { 2 } - U _ { \text {min } }$, so the minimum voltage is ultimately obtained as

$$
\begin{equation*}
U _ { \min } = 2 U _ { 2 } - U _ { 20 } = \frac { C _ { 1 } \left( C _ { 1 } + C _ { 2 } - C _ { 3 } \right) } { \left( C _ { 1 } + C _ { 2 } \right) \left( C _ { 1 } + C _ { 2 } + C _ { 3 } \right) } U _ { 0 } . \tag{18}
\end{equation*}
$$

| Content | Points |
| :--- | :--- |
| Formula (1): $q _ { 30 } = 0$ | 0.2 |
| Formula (2): $q _ { 10 } = q _ { 20 }$ | 0.2 |
| Formula (3): $\frac { q _ { 10 } } { C _ { 1 } } + \frac { q _ { 20 } } { C _ { 2 } } = U _ { 0 }$ | 0.2 |
| Formula (4): $q _ { 10 } = q _ { 20 } = \frac { C _ { 1 } C _ { 2 } } { C _ { 1 } + C _ { 2 } } U _ { 0 }$ | 0.2 |
| Formula (5): $W _ { 0 } = \frac { q _ { 10 } ^ { 2 } } { 2 C _ { 1 } } + \frac { q _ { 20 } ^ { 2 } } { 2 C _ { 2 } } = \frac { C _ { 1 } C _ { 2 } U _ { 0 } ^ { 2 } } { 2 \left( C _ { 1 } + C _ { 2 } \right) }$ | 0.2 |
| Formula (6): $q _ { 1 } = q _ { 2 } + q _ { 3 }$ | 0.2 |
| Formula (7): $\frac { q _ { 2 } } { C _ { 2 } } = \frac { q _ { 3 } } { C _ { 3 } }$ | 0.2 |
| Formula (8): $\frac { q _ { 1 } } { C _ { 1 } } + \frac { q _ { 2 } } { C _ { 2 } } = U _ { 0 }$ | 0.2 |
| Formula (10): $q _ { 2 } = \frac { C _ { 1 } C _ { 2 } } { C _ { 1 } + C _ { 2 } + C _ { 3 } } U _ { 0 }$ | 0.2 |
| Formula (12): $W = \frac { C _ { 1 } \left( C _ { 2 } + C _ { 3 } \right) U _ { 0 } ^ { 2 } } { 2 \left( C _ { 1 } + C _ { 2 } + C _ { 3 } \right) } + \frac { L I _ { \text {max } } ^ { 2 } } { 2 }$ | 0.2 |
| Formula (13): $A = \left( q _ { 1 } - q _ { 10 } \right) U _ { 0 }$ | 0.2 |
| Formula (14): $W _ { 0 } + A = W$ | 0.2 |
| Formula (15): $I _ { \text {max } } = \sqrt { \frac { C _ { 3 } } { \left( C _ { 1 } + C _ { 2 } \right) \left( C _ { 1 } + C _ { 2 } + C _ { 3 } \right) L } } C _ { 1 } U _ { 0 }$ | 0.2 |
| Formula (18): $U _ { \text {min } } = 2 U _ { 2 } - U _ { 20 }$ | 0.2 |
| Formula (18): $U _ { \text {min } } = \frac { C _ { 1 } \left( C _ { 1 } + C _ { 2 } - C _ { 3 } \right) } { \left( C _ { 1 } + C _ { 2 } \right) \left( C _ { 1 } + C _ { 2 } + C _ { 3 } \right) } U _ { 0 }$ | 0.2 |
| Total | 3.0 |
