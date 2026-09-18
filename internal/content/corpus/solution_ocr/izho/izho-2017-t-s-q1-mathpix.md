---
id: solution-ocr-izho-2017-t-s-q1
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2017_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2017-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 1B (4.0 points)

Charge repulsion on the surface results in an increase of the bubble size. Due to inertia the bubble passes by the equilibrium position and oscillations occur. Due to internal friction of the gas the oscillations vanish, the bubble reaches a new equilibrium state such that the kinetic energy of the soap film is transferred to the internal energy of the gas, which means that the gas in this situation does not obey the adiabatic equation.
Let us make use of the law of energy conservation for the film-gas system of the form:

$$
\begin{equation*}
\frac { 5 } { 2 } P _ { 1 } V _ { 1 } + \sigma 8 \pi R _ { 1 } ^ { 2 } + \frac { k q ^ { 2 } } { 2 R _ { 1 } } = \frac { 5 } { 2 } P _ { 2 } V _ { 2 } + \sigma 8 \pi R _ { 2 } ^ { 2 } + \frac { k q ^ { 2 } } { 2 R _ { 2 } } \tag{1}
\end{equation*}
$$

Taking into account the surface tension the initial pressure of the gas in the bubble is written as

$$
\begin{equation*}
p _ { 1 } = \frac { 4 \sigma } { R _ { 1 } } . \tag{2}
\end{equation*}
$$

The final pressure in view of the electrostatic repulsion force is found as (recall the well-known problem for the forces that attempt to tear out the charged sphere)


$$
\begin{equation*}
p _ { 2 } = \frac { 4 \sigma } { R _ { 2 } } - \frac { q ^ { 2 } } { 32 \pi ^ { 2 } \varepsilon _ { 0 } R _ { 2 } ^ { 4 } } . \tag{3}
\end{equation*}
$$

In our case

$$
\begin{equation*}
V _ { 1 } = 4 \pi R _ { 1 } ^ { 3 } / 3 , V _ { 2 } = 4 \pi R _ { 2 } ^ { 3 } / 3 . \tag{4}
\end{equation*}
$$

Under those conditions, the joint solution of equations (1) - (4) gives the answer

$$
\begin{equation*}
q = 32 \pi \sqrt { \varepsilon _ { 0 } \sigma R _ { 1 } ^ { 3 } } . \tag{5}
\end{equation*}
$$

| Content | Points |
| :--- | :--- |
| $\mathrm { P } _ { \text {initial } } = \mathrm { P } _ { \text {surf } }$ | 0.5 |
| $\mathrm { P } _ { \text {final } } = \mathrm { P } _ { \text {surf } } - \mathrm { P } _ { \text {electr } }$ | 0.3 |
| $\mathrm { P } _ { \text {surf } } = 4 \sigma / \mathrm { R }$ | 0.3 |
| $\mathrm { P } _ { \text {electr } } = \mathrm { q } ^ { 2 } / 32 \pi ^ { 2 } \varepsilon _ { 0 } \mathrm { R } ^ { 4 }$ | 0.5 |
| Conservation of energy instead of adiabatic process | 0.5 |
| $\mathrm { W } _ { \text {surf } } = 8 \pi \mathrm { R } ^ { 2 } \sigma$ | 0.3 |
| $\mathrm { W } _ { \text {electr } } = \mathrm { q } ^ { 2 } / 8 \pi \varepsilon _ { 0 } \mathrm { R }$ | 0.5 |
| $\mathrm { W } _ { \text {gas } } = ( 5 / 2 ) \nu \mathrm { RT } = ( 5 / 2 ) \mathrm { PV }$ | 0.4 |
| Formula for the sphere volume | 0.2 |
| Correct answer | 0.5 |
| Total | 4.0 |

## Problem 1C (3.0 points)

The signal can be suppressed by the interference of waves. The waves coming from the sources $S _ { 1 }$ and $S _ { 2 }$ arrive at the receivers with the same phase, so the wave from the third source must arrive at receivers with the opposite phase than those from the sources $S _ { 1 }$ and $S _ { 2 }$. To assure this, the distance from the third source to the receivers must differ by the amount of $\frac { \lambda } { 2 } + m \lambda$, where $m = 0 , \pm 1 , \pm 2 \ldots$. To find the points that satisfy those conditions, it is necessary to plot two families of circles, one with the radii $R _ { 1 } + \frac { \lambda } { 2 } + m \lambda$ and with the center at the point $A _ { 1 }$, and the other with the radii $R _ { 2 } + \frac { \lambda } { 2 } + m \lambda$ and with the center at the point $A _ { 2 }$. The intersection points of those two families represent the points where the third source should be placed, they are marked by circles. The amplitude of waves from the third source must be 2 times greater than the amplitude of waves coming from sources $S _ { 1 }$ and $S _ { 2 }$, hence the wave intensity of the third source should be 4 times higher, i.e. $4 I _ { 0 }$.
![](../../../figures/solution-ocr/610a5ba02766f438a4c1becf.jpg)


| Content | Points |
| :--- | :--- |
| Interference to suppress waves | 0,5 |
| Conditions for minima are used (waves out-of-phase); | 0,2 |
| Difference in distance must be integer number of half of the wavelength | 0,3 |
| Two families of circles are drawn | 2×0,5 |
| Intersection points are used | 0,4 |
| All 6 points are correctly stated in the highlighted area | 6×0,1 |
| Total | 3,0 |
