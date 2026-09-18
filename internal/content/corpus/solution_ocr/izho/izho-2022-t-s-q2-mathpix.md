---
id: solution-ocr-izho-2022-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2022_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2022-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. Greenhouse effect (10.0 points) Atmosphere without greenhouse effect

2.1 Direct calculation by Wien's formula gives the following result

$$
\begin{equation*}
\lambda _ { \max S } = \frac { b } { T _ { S } } = 0.446 \mu \mathrm {~m} . \tag{1}
\end{equation*}
$$

2.2 In the steady state, the power of solar radiation incident on the Earth is equal to the power of the thermal radiation of the Earth. When writing the energy balance equation, it must be taken into account that the Sun illuminates the Earth from one side, and the Earth radiates in all directions, i.e.

$$
\begin{equation*}
W \cdot \pi R ^ { 2 } = \sigma T _ { 0 } ^ { 4 } \cdot 4 \pi R ^ { 2 } . \tag{2}
\end{equation*}
$$

It follows from this relation that

$$
\begin{equation*}
T _ { 0 } = \sqrt [ 4 ] { \frac { W } { 4 \sigma } } = 280.3 \mathrm {~K} , \tag{3}
\end{equation*}
$$

and the same temperature in degrees Celsius is equal to

$$
\begin{equation*}
t _ { 0 } = 7.15 ^ { \circ } \mathrm { C } . \tag{4}
\end{equation*}
$$

2.3 According to the Wien's formula, we find that at the given temperature, the maximum radiation corresponds to the wavelength

$$
\begin{equation*}
\lambda _ { \max E } = \frac { b } { T _ { E } } = 10.3 \mu \mathrm {~m} . \tag{5}
\end{equation*}
$$

2.4 The same geometric relationships that lead to equation (2) allow one to conclude that the power of solar radiation per unit area of the Earth's surface is found as

$$
\begin{equation*}
w = \frac { W \cdot \pi R ^ { 2 } } { 4 \pi R ^ { 2 } } = \frac { W } { 4 } = 350 \mathrm {~W} / \mathrm { m } ^ { 2 } . \tag{6}
\end{equation*}
$$

## Various atmosphere models

2.5 We introduce the following notation:
$t _ { 1 }$ (or $T _ { 1 }$ in the Kelvin scale) - the emperature of the Earth's surface and the lower layer of the atmosphere immediately adjacent to it; $t _ { 2 }$ (or $T _ { 2 }$ ) - the temperature of the upper layer of the atmosphere; $w$ - the flux density of solar radiation, i.e. the energy incident on a unit area of the Earth's surface per unit time (or irradiated); $R _ { 1 }$ - the thermal radiation power per unit area of the Earth; $R _ { 2 }$ - the thermal radiation power per unit area of the atmospheric layer; the radiation fluxes of this layer towards the Earth and into outer space are equal.

The energy balance equation for a unit area of the Earth's surface has the following form

$$
\begin{equation*}
w + R _ { 2 } = R _ { 1 } . \tag{7}
\end{equation*}
$$

A similar equation for the upper layer of the atmosphere gives rise to


$$
\begin{equation*}
K R _ { 1 } = 2 R _ { 2 } . \tag{8}
\end{equation*}
$$

Using the laws of thermal radiation, energy fluxes can be expressed in terms of the temperatures of the radiating surfaces as follows

$$
\begin{align*}
& R _ { 1 } = \sigma T _ { 1 } ^ { 4 } ,  \tag{9}\\
& R _ { 2 } = K \sigma T _ { 2 } ^ { 4 } . \tag{10}
\end{align*}
$$

Therefore, taking into account formulas (2) and (3), we obtain from expressions (7)-(10) the temperature of the Earth's surface in the form

$$
\begin{equation*}
T _ { 1 } = \frac { T _ { 0 } } { \sqrt [ 4 ] { 1 - \frac { K } { 2 } } } \tag{11}
\end{equation*}
$$

## Maximum greenhouse effect

2.6 For the maximum greenhouse effect $K = 1$, therefore, it is obtained for this model

$$
\begin{equation*}
T _ { 1 } = T _ { 0 } \sqrt [ 4 ] { 2 } = 333.3 \mathrm {~K} = 60.2 ^ { \circ } \mathrm { C } . \tag{12}
\end{equation*}
$$

Thus, the maximum increase in temperature due to the greenhouse effect on the "black earth" is equal to

$$
\begin{equation*}
\Delta t _ { 1 } = 53.0 ^ { \circ } \mathrm { C } . \tag{13}
\end{equation*}
$$

## Water greenhouse effect

2.7 The Earth as a black body irradiates the energy

$$
\begin{equation*}
W _ { 0 } = \int _ { 0 } ^ { \infty } r _ { 0 } \left( \lambda , T _ { 1 } \right) d \lambda , \tag{14}
\end{equation*}
$$

The absorbed energy can be expressed in terms of the spectral absorption coefficient and the spectral density of the Earth's radiation as follows

$$
\begin{equation*}
W _ { A } = \int _ { 0 } ^ { \infty } k ( \lambda ) r _ { 0 } \left( \lambda , T _ { 1 } \right) d \lambda , \tag{15}
\end{equation*}
$$

then the total absorption coefficient of terrestrial radiation by theupper layer of the atmosphere is calculated by the formula

$$
\begin{equation*}
K = \frac { W _ { A } } { W _ { 0 } } = \frac { \int _ { 0 } ^ { \infty } k ( \lambda ) r _ { 0 } \left( \lambda , T _ { 1 } \right) d \lambda } { \int _ { 0 } ^ { \infty } r _ { 0 } \left( \lambda , T _ { 1 } \right) d \lambda } = \frac { \sigma T _ { 1 } ^ { 4 } \int _ { 0 } ^ { \infty } k ( \lambda ) \varphi \left( \lambda , T _ { 1 } \right) d \lambda } { \sigma T _ { 1 } ^ { 4 } \int _ { 0 } ^ { \infty } \varphi \left( \lambda , T _ { 1 } \right) d \lambda } = \int _ { 0 } ^ { \infty } k ( \lambda ) \varphi \left( \lambda , T _ { 1 } \right) d \lambda . \tag{16}
\end{equation*}
$$

2.8 Since in the indicated wavelength range from 5.0 to $8.0 \mu \mathrm {~m}$ the water vapor absorbs all incident radiation, the total absorption coefficient is equal to the fraction of radiation energy falling into this interval. This fraction of energy is evalulated as the areas under the graphs given in the problem introduction.
![](../../../figures/solution-ocr/0193e4ecf86a0d0d79c933d3.jpg)

The calculations carried out for 4 points gives the following values for the absorption coefficients

$$
\begin{equation*}
t _ { 1 } = 0 { } ^ { \circ } \mathrm { C } : \quad K _ { 0 } = 0.092 , \tag{17}
\end{equation*}
$$


$$
\begin{equation*}
t _ { 1 } = 50 ^ { \circ } \mathrm { C } : \quad K _ { 50 } = 0.158 . \tag{18}
\end{equation*}
$$

2.9 It follows from the proposed relationship $K \left( t _ { 1 } \right) = K _ { 0 } \left( 1 + \alpha t _ { 1 } \right)$ that

$$
\begin{align*}
& K _ { 0 } = 0.092  \tag{19}\\
& \alpha = \frac { 1 } { t _ { 50 } } \left( \frac { K _ { 50 } } { K _ { 0 } } - 1 \right) = 0.014 \mathrm {~K} ^ { - 1 } . \tag{20}
\end{align*}
$$

2.10 At the temperature of $t _ { 1 } = 5,4 ^ { \circ } \mathrm { C }$, the absorption coefficient of the upper layer of the atmosphere is found as

$$
\begin{equation*}
K \left( t _ { 0 } \right) = K _ { 0 } \left( 1 + \alpha t _ { 0 } \right) = 0.101 . \tag{21}
\end{equation*}
$$

Since the absorption coefficient is rather small, formula (12) for the steady temperature can be simplified to

$$
\begin{equation*}
T _ { 1 } = \frac { T _ { 0 } } { \sqrt [ 4 ] { 1 - \frac { K } { 2 } } } \approx T _ { 0 } \left( 1 + \frac { K } { 8 } \right) \tag{22}
\end{equation*}
$$

and the rise in temperature is obrained as

$$
\begin{equation*}
\Delta t _ { 1 } = T _ { 0 } \frac { K \left( t _ { 0 } \right) } { 8 } = 3.55 ^ { \circ } \mathrm { C } . \tag{23}
\end{equation*}
$$

2.11 To accurately answer the question, it is necessary to solve the nonlinear equation

$$
\begin{equation*}
T _ { 1 } = \frac { T _ { 0 } } { \sqrt [ 4 ] { 1 - \frac { K \left( T _ { 1 } \right) } { 2 } } } . \tag{24}
\end{equation*}
$$

However, the relative change in the absolute temperature is small, so we represent the sought temperature in the form

$$
\begin{equation*}
T _ { 1 } = T _ { 0 } + \Delta t , \tag{25}
\end{equation*}
$$

from which we find the value of the temperature change in view of the condition $\Delta t \ll T _ { 0 }$

$$
\begin{equation*}
\Delta t = \frac { T _ { 0 } \frac { K _ { 0 } \left( 1 + \alpha t _ { 0 } \right) } { 8 } } { 1 - T _ { 0 } \frac { \alpha K _ { 0 } } { 8 } } = \frac { \Delta t _ { 1 } } { 1 - T _ { 0 } \frac { \alpha K _ { 0 } } { 8 } } \approx 3.73 ^ { \circ } \mathrm { C } . \tag{26}
\end{equation*}
$$

## Amplification of the greenhouse effect by carbon dioxide

2.12 Let us calculate the absorption coefficient due to carbon dioxide. To make estimates, we can assume that the air temperature differs slightly from $0 ^ { \circ } C$. To do this, we take into account that: 1) in the range from 2.5 to $3.0 \mu \mathrm {~m}$, the energy of the thermal radiation of the Earth is negligible; 2) in the range from $6.5 \mu \mathrm {~m}$ to $7.0 \mu \mathrm {~m}$ all radiation is absorbed by water vapor; 3) in the range from $16 \mu \mathrm {~m}$ to $18 \mu \mathrm {~m}$, the fraction of radiation energy is equal to $\Phi = 0.08$ (calculated according to the graph for $t = 0 ^ { \circ } C$ ) . Therefore, the additional absorption coefficient due to the presence of carbon dioxide is found as

$$
\begin{equation*}
K _ { 2 } = 0.04 . \tag{27}
\end{equation*}
$$

Since the absorption of carbon dioxide and water vapor lie in different spectral ranges, the total absorption coefficient is equal to the sum of the absorption coefficients of water and carbon dioxide. Then the change in the steady-state surface temperature (taking into account absorption by carbon dioxide) increases by the value

$$
\begin{equation*}
\Delta t _ { 1 } = T _ { 0 } \frac { K _ { 2 } } { 8 } \approx 1.4 ^ { \circ } \mathrm { C } . \tag{28}
\end{equation*}
$$

2.13 To calculate the absorption coefficient with increased concentration, we use the obvious reasoning: in the presence of several absorbing layers, the total transmission is equal to the product of the transmission coefficients of individual layers, therefore

$$
\begin{equation*}
1 - k _ { 1 } = \left( 1 - k _ { 0 } \right) ^ { 2 } . \tag{29}
\end{equation*}
$$


Hence it follows that if the concentration is doubled, the spectral absorption coefficient is expected to increase from 0.50 to

$$
\begin{equation*}
k _ { 1 } = 2 k _ { 0 } - k _ { 0 } ^ { 2 } = 0.75 . \tag{30}
\end{equation*}
$$

Therefore, the total absorption coefficient becomes equal to

$$
\begin{equation*}
K _ { 2 } = k \Phi = 0.06 . \tag{31}
\end{equation*}
$$

i.e. increases by $\Delta K _ { 2 } = 0.02$. Therefore, the additional rise in temperature is finally obtained as

$$
\begin{equation*}
\Delta t _ { 1 } ^ { \prime } = T _ { 0 } \frac { \Delta K _ { 2 } } { 8 } \approx 0.7 ^ { \circ } \mathrm { C } . \tag{32}
\end{equation*}
$$

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 2.1 | Formula (1): $\lambda _ { \text {max } S } = \frac { b } { T _ { s } }$ | 0.1 | 0.2 |
|  | Numerical value in formula (1): $\lambda _ { \text {max } S } = 0.446 \mu m$ | 0.1 |  |
| 2.2 | Formula (2): $W \cdot \pi R ^ { 2 } = \sigma T _ { 0 } ^ { 4 } \cdot 4 \pi R ^ { 2 }$ | 0.4 | 1.0 |
|  | Formula (3): $T _ { 0 } = \sqrt [ 4 ] { \frac { W } { 4 \sigma } }$ | 0.2 |  |
|  | Numerical value in formula (3): $T _ { 0 } = 280.3 \mathrm {~K}$ | 0.2 |  |
|  | Numerical value in formula (4): $t _ { 0 } = 7.15 ^ { \circ } \mathrm { C }$ | 0.2 |  |
| 2.3 | Formula (5): $\quad \lambda _ { \text {max } E } = \frac { b } { T _ { E } }$ | 0.1 | 0.2 |
|  | Numerical value in formula (5): $\lambda _ { \text {max } E } = 10,3 \mu \mathrm {~m}$ | 0.1 |  |
| 2.4 | Formula (6): $w = \frac { W } { 4 }$ | 0.1 | 0.2 |
|  | Numerical value in formula (6): $w = 350 \mathrm {~W} / \mathrm { m } ^ { 2 }$ | 0.1 |  |
| 2.5 | Formula (7): $w + R _ { 2 } = R _ { 1 }$ | 0.2 | 1.2 |
|  | Formula (8): $K R _ { 1 } = 2 R _ { 2 }$ | 0.2 |  |
|  | Formula (9): $R _ { 1 } = \sigma T _ { 1 } ^ { 4 }$ | 0.2 |  |
|  | Formula (10): $R _ { 2 } = K \sigma T _ { 2 } ^ { 4 }$ | 0.2 |  |
|  | Formula (11): $T _ { 1 } = \frac { T _ { 0 } } { \sqrt [ 4 ] { 1 - \frac { K } { 2 } } }$ | 0.4 |  |
| 2.6 | Direct use of $K = 1$ | 0.1 | 0.5 |
|  | Formula (12): $T _ { 1 } = T _ { 0 } \sqrt [ 4 ] { 2 }$ | 0.2 |  |
|  | Numerical value in formula (13): $\Delta t _ { 1 } = 53.0 ^ { \circ } \mathrm { C }$ | 0.2 |  |
| 2.7 | Formula (14): $W _ { 0 } = \int _ { 0 } ^ { \infty } r _ { 0 } \left( \lambda , T _ { 1 } \right) d \lambda$ | 0.2 | 0.8 |
|  | Formula (15): $W _ { A } = \int _ { 0 } ^ { \infty } k ( \lambda ) r _ { 0 } \left( \lambda , T _ { 1 } \right) d \lambda$ | 0.2 |  |
|  | Formula (16): $K = \int _ { 0 } ^ { \infty } k ( \lambda ) \varphi \left( \lambda , T _ { 1 } \right) d \lambda$ | 0.4 |  |
| 2.8 | Numerical value in (17): $t _ { 1 } = 0 { } ^ { \circ } \mathrm { C } : \quad K _ { 0 } = 0.092$ | 0.6 | 1.2 |
|  | Numerical value in (18): $t _ { 1 } = 50 { } ^ { \circ } \mathrm { C } : \quad K _ { 50 } = 0.158$ | 0.6 |  |


| 2.9 | Numerical value in (19): $K _ { 0 } = 0.092$ | 0.2 | 0.4 |
| :--- | :--- | :--- | :--- |
|  | Numerical value in (20): $\alpha = 0.031 \mathrm {~K} ^ { - 1 }$ | 0.2 |  |
| 2.10 | Numerical value in (21): $K \left( t _ { 0 } \right) = 0.0757$ | 0.4 | 0.8 |
|  | Numerical value in (23): $\Delta t _ { 1 } = 2.65 ^ { \circ } \mathrm { C }$ | 0.4 |  |
| 2.11 | Formula (24): $T _ { 1 } = \frac { T _ { 0 } } { \sqrt [ 4 ] { 1 - \frac { K \left( T _ { 1 } \right) } { 2 } } }$ | 0.2 | 1.0 |
|  | Formula (25): $T _ { 1 } = T _ { 0 } + \Delta t$ at $\Delta t \ll T _ { 0 }$ | 0.2 |  |
|  | Formula (26): $\Delta t = \frac { T _ { 0 } \frac { K _ { 0 } \left( 1 + \alpha t _ { 0 } \right) } { 8 } } { 1 - T _ { 0 } \frac { \alpha K _ { 0 } } { 8 } } = \frac { \Delta t _ { 1 } } { 1 - T _ { 0 } \frac { \alpha K _ { 0 } } { 8 } }$ | 0.4 |  |
|  | Numerical value in formula (26): $\Delta t \approx 2.84 ^ { \circ } \mathrm { C }$ | 0.2 |  |
| 2.12 | Numerical value in (27): $K _ { 2 } = 0.04$ | 0.5 | 1.0 |
|  | Numerical value in (28): $\Delta t _ { 1 } \approx 1.4 ^ { \circ } \mathrm { C }$ | 0.5 |  |
| 2.13 | Formula (29): $1 - k _ { 1 } = \left( 1 - k _ { 0 } \right) ^ { 2 }$ | 0.5 | 1.5 |
|  | Formula (30): $k _ { 1 } = 2 k _ { 0 } - k _ { 0 } ^ { 2 }$ | 0.2 |  |
|  | Numerical value in formula (31): $K _ { 2 } = k \Phi = 0.06$ | 0.4 |  |
|  | Numerical value in (32): $\Delta t _ { 1 } ^ { \prime } \approx 0.7 { } ^ { \circ } \mathrm { C }$ | 0.4 |  |
| Total |  |  | 10.0 |
