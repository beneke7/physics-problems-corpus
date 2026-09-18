---
id: solution-ocr-nbpho-2025-hot-plate-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2025-hot-plate]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix PDF API Markdown conversion; split from the full 2025 booklet; grading-only material omitted from canonical display."
---
# 9. Hot plate (12 points) — Solution by Jaan Kalda

i)(3 points) Both aluminium plates were immersed in hot water until thermal equilibrium was reached, then removed, dried with tissue paper, and measured using an infrared thermometer. The plates have identical thermal properties except for their surface coating, so they should have reached the same actual temperature in the hot water bath. Experimental measurements:

| $T _ { \text {polished } } \left( { } ^ { \circ } \mathrm { C } \right)$ | $T _ { \text {black } } \left( { } ^ { \circ } \mathrm { C } \right)$ | $T _ { \text {room } } \left( { } ^ { \circ } \mathrm { C } \right)$ |
| :--- | :--- | :--- |
| 26.2 | 70.9 | 22.9 |
| 26.0 | 70.7 | 22.9 |
| 25.4 | 70.2 | 22.9 |

The infrared thermometer measures temperature based on thermal radiation and we were told it is calibrated for emissivity $\varepsilon =$ 1 (in reality, it is calibrated for $\varepsilon = 0.95$, but this difference is not significant). We were also told that the radiation power can be linearized: $P _ { \text {thermal } } = P _ { 0 } + \alpha T$. Objects with $\varepsilon < 1$ radiate $P _ { \varepsilon } = \varepsilon \left( P _ { 0 } + \alpha T _ { \varepsilon } \right)$, but they also reflect/scatter the radiation falling

$$
T _ { \text {reading } } = \varepsilon \cdot T _ { \varepsilon } + ( 1 - \varepsilon ) \cdot T _ { 0 }
$$

Since the black plate has $\varepsilon = 1$, its reading directly gives the actual temperature of both plates. Rearranging to solve for emissivity:

$$
\varepsilon = \frac { T _ { \text {polished } } - T _ { 0 } } { T _ { \text {black } } - T _ { 0 } }
$$

Calculating for each measurement:

$$
\begin{aligned}
& \varepsilon _ { 1 } = \frac { 26.2 - 22.9 } { 70.9 - 22.9 } = 0.069 \\
& \varepsilon _ { 2 } = \frac { 26.0 - 22.9 } { 70.7 - 22.9 } = 0.065 \\
& \varepsilon _ { 3 } = \frac { 25.4 - 22.9 } { 70.2 - 22.9 } = 0.053
\end{aligned}
$$

Taking the average: $\varepsilon = \frac { 0.069 + 0.065 + 0.053 } { 3 } =$ $0.062 \approx 0.06$ The emissivity of the polished aluminium plate is $\varepsilon = 0.06 \pm 0.01$.

ii) (3 points) Solution 1. Here the main idea is to heat the plate using the resistor. Once thermal equilibrium is reached with plate's temperature $T = T _ { f }$, the heating power $P = V ^ { 2 } / R$ equals to the power dissipated to the environment, $H \left( T _ { f } - T _ { 0 } \right)$ (with $T _ { 0 }$ denoting the room temperature), hence we can determine the heat exchange coefficient as $H = V ^ { 2 } / R \left( T _ { f } - T _ { 0 } \right)$. The main difficulty with this approach is that the characteristic thermalization time is long, around 7 minutes, so for a more or less precise measurement, one should wait around half an hour.
Solution 2. In order to avoid long waiting time, the following approach can be used. Although it involves more complicated data analysis, the analysis results are re-usable by part iii.

The black aluminium plate was placed on the foam plastic with the resistor beneath it, providing continuous heating. Temperature readings were recorded at one-minute intervals (the first row shows time in minutes, the second - the measured temperature in °C:

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 28.0 | 30.8 | 33.2 | 35.2 | 37.3 | 39.0 | 40.3 |

For heating with constant power, the temperature evolution follows $T = T _ { f } -$ $\theta \mathrm { e } ^ { - \gamma t }$, where $T _ { f }$ is the final equilibrium temperature, $\theta$ is a constant depending on the initial temperature, and $\gamma$ is the inverse of the characteristic time constant. To determine $\gamma$, we examine successive temperature increments $T ( t + \tau ) - T ( t ) = \theta \mathrm { e } ^ { - \gamma t } \left( \mathrm { e } ^ { \gamma \tau } - 1 \right)$ with $\tau = 1 \mathrm {~min}$, which should decrease exponentially, i.e. $\ln \Delta T \equiv \ln [ T ( t + \tau ) - T ( t ) ] =$ $- \gamma t +$ const should be a linear function of time.
![](../../../figures/solution-ocr/a6bce86b39d2761a4b17b685.jpg)
![](../../../figures/solution-ocr/06448562621b544b3457148f.jpg)


Linear regression analysis of $\ln [ T ( t + 1 ) -$ $T ( t ) ]$ versus $t$ yields:

$$
\ln [ T ( t + \tau ) - T ( t ) ] = 1.0333 - 0.1378 t
$$

with $R ^ { 2 } = 0.9209$ indicating a good fit. Thus we obtain $\gamma = 0.1378 \mathrm {~min} ^ { - 1 }$, corresponding to the time constant of the thermal system $1 / \gamma \approx 7.3$ minutes.

We now plot $T$ versus $\mathrm { e } ^ { - \gamma t }$ to find $T _ { f }$ as the intercept when $\mathrm { e } ^ { - \gamma t } = 0$ :

$$
T = T _ { f } - \theta \mathrm { e } ^ { - \gamma t }
$$

Computing $\mathrm { e } ^ { - 0.1378 n \tau } , n = 0 , \ldots 6$ values yields

$$
\mathrm { e } ^ { - \gamma n \tau } \in \{ 1.00,0.87,0.76,0.66,0.58,0.50,0.44 \} ;
$$

the corresponding plot is provided below.
![](../../../figures/solution-ocr/0ebc0d1005560dd147591375.jpg)

Linear regression of $T$ versus $\mathrm { e } ^ { - \gamma t }$ yields $T _ { f } \approx 49.9 ^ { \circ } C$, as shown in the equation:

$$
T = 49.9 - 22.0 \cdot \mathrm { e } ^ { - 0.1378 t }
$$

with $R ^ { 2 } = 0.9995$ indicating an excellent fit. At thermal equilibrium, the power dissipated equals the power supplied:

$$
P = \frac { U ^ { 2 } } { R } = h \cdot A \cdot \left( T _ { f } - T _ { 0 } \right) = H \cdot \left( T _ { f } - T _ { 0 } \right)
$$

where $h$ is the heat transfer coefficient per unit area, $H$ is the total heat transfer coefficient, $A$ is the plate area, $U$ is the applied voltage, and $R$ is the resistor's resistance. Using $U = 15 \mathrm {~V} , R = 220 \Omega , A = 40 \times 40 \mathrm {~mm} ^ { 2 } =$ $1.6 \times 10 ^ { - 3 } \mathrm {~m} ^ { 2 }$, and $T _ { 0 } = 22.9 ^ { \circ } \mathrm { C }$ we obtain

$$
h = \frac { U ^ { 2 } / R } { A \cdot \left( T _ { f } - T _ { 0 } \right) } \approx 23.6 \mathrm {~W} / \left( \mathrm { m } ^ { 2 } \cdot \mathrm {~K} \right) .
$$

The total heat transfer coefficient $H$ is found as

$$
H = h \cdot A = 37.8 \mathrm { mWK } ^ { - 1 } .
$$

iii) (2 points) Solution 1 To determine the heat capacity, we can use the heating curve from Part 2. During heating, the energy balance is written as

$$
P _ { \mathrm { in } } - P _ { \mathrm { out } } \equiv \Delta P = C \frac { \mathrm {~d} T } { \mathrm {~d} t } ,
$$

where $P _ { \text {in } } = U ^ { 2 } / R$ is the input power, $P _ { \text {out } } =$ $H \left( T - T _ { 0 } \right)$ (where $T _ { 0 } = T _ { \text {room } }$ is the room temperature) is the power lost to the environment, $C$ is the heat capacity, and $\frac { \mathrm { d } T } { \mathrm {~d} t }$ is the rate of temperature change. Using our exponential model $T = T _ { f } - \theta \mathrm { e } ^ { - \gamma t }$, we find:

$$
\frac { \mathrm { d } T } { \mathrm {~d} t } = \theta \gamma \mathrm { e } ^ { - \gamma t } = \gamma \left( T _ { f } - T \right)
$$

Substituting into the energy balance:

$$
P _ { \mathrm { in } } - H \left( T - T _ { 0 } \right) = C \gamma \left( T _ { f } - T \right) .
$$

This allows us to calculate the heat capacity $C$ as

$$
C = \frac { P _ { \mathrm { in } } - H \left( T - T _ { 0 } \right) } { \gamma \left( T _ { f } - T \right) } .
$$

Now we need to use the values from Parts 1 and 2:

$$
\begin{aligned}
U & = 15 \mathrm {~V} , \quad R = 220 \Omega , \quad H = 3.78 \times 10 ^ { - 2 } \mathrm { WK } ^ { - } \\
T _ { 0 } & = 22.9 ^ { \circ } \mathrm { C } , T _ { f } = 49.9 ^ { \circ } \mathrm { C } , \quad \gamma = 0.1378 \mathrm {~min} ^ { - 1 } .
\end{aligned}
$$

The input power is evaluated as

| $P _ { \mathrm { out } } = H \left[ T ( t ) - T _ { 0 } \right] = - C \frac { \mathrm {~d} T } { \mathrm {~d} t } = \gamma C \left[ T ( t ) - T _ { 0 } \right]$, |
| :--- |

hence

$$
C = H / \gamma .
$$

Similarly to the solution 1, we have used the fact that the plate cools exponentially in time and hence, $\frac { \mathrm { d } T } { \mathrm {~d} t } = \gamma \left[ T ( t ) - T _ { 0 } \right]$. The decay rate can be found by plotting $\ln \left[ T ( t ) - T _ { 0 } \right]$ against $t$ and determining the slope of the linear fit line.

iv) (4 points)

For this part, cooling experiments were conducted with the aluminium plate covered by different numbers of silicone rubber layers. The plate was heated in water and then allowed to cool, with temperature recorded as a function of time.

| $t ( \mathrm {~s} )$ | 0 | 60 | 120 | 180 | 240 | 300 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $T _ { 1 \text { layer } } \left( { } ^ { \circ } \mathrm { C } \right)$ | 65.2 | 60.2 | 55.5 | 51.3 | 47.6 | 44.6 |
| $T _ { 2 \text { layers } } \left( { } ^ { \circ } \mathrm { C } \right)$ | * | 35.3 | 34.0 | 32.9 | 31.9 | 30.8 |
| $T _ { 3 \text { layers } } \left( { } ^ { \circ } \mathrm { C } \right)$ | 45.4 | 43.1 | 41.6 | 40.0 | 38.9 | 37.3 |


*The data point at $t = 0$ for 2 layers is excluded as it did not represent complete thermal equilibrium across the silicone layers. For a cooling process with constant ambient temperature, the temperature follows an exponential decay:

$$
T ( t ) = T _ { 0 } - \left( T _ { \text {initial } } - T _ { 0 } \right) e ^ { - \gamma t }
$$

The time constant $\gamma$ is related to the thermal resistance $\mathcal { R }$ and heat capacity $C$ by

$$
\gamma = \frac { 1 } { \mathcal { R } C } .
$$

Taking the natural logarithm of the temperature difference from ambient yields

$$
\ln \left[ T ( t ) - T _ { 0 } \right] = - \gamma t + \mathrm { const }
$$

![](../../../figures/solution-ocr/5b341b2e8bf85e6a39240f05.jpg)

Using linear regression on the logarithmic cooling curves, we obtain:

$$
\begin{aligned}
\gamma _ { 1 \text { layer } } & = 2.244 \times 10 ^ { - 3 } \mathrm {~s} ^ { - 1 } \\
\gamma _ { 2 \text { layers } } & = 1.852 \times 10 ^ { - 3 } \mathrm {~s} ^ { - 1 } \\
\gamma _ { 3 \text { layers } } & = 1.438 \times 10 ^ { - 3 } \mathrm {~s} ^ { - 1 }
\end{aligned}
$$

Using our previously determined heat capacity $C = 16.5 \mathrm {~J} / \mathrm { K }$, we calculate the total thermal resistance for each case:

$$
\begin{aligned}
& R _ { 1 \text { layer } } = \frac { 1 } { \gamma _ { 1 \text { layer } } \cdot C } = 27.0 \mathrm {~K} / \mathrm { W } \\
& R _ { 2 \text { layers } } = \frac { 1 } { \gamma _ { 2 \text { layers } } \cdot C } = 32.7 \mathrm {~K} / \mathrm { W } \\
& R _ { 3 \text { layers } } = \frac { 1 } { \gamma _ { 3 \text { layers } } \cdot C } = 42.1 \mathrm {~K} / \mathrm { W }
\end{aligned}
$$

The total thermal resistance includes the resistance of the silicone layers and the thermal resistance of convection and radiation. Each additional layer adds a resistance $\Delta R =$ $\delta / ( \kappa A )$, where $\delta$ is the layer thickness, $\kappa$ is the thermal conductivity, and $A$ is the area. The incremental resistances between layers are:

$$
\begin{aligned}
& \Delta R _ { 12 } = R _ { 2 \text { layers } } - R _ { 1 \text { layer } } = 5.7 \mathrm {~K} \mathrm {~W} ^ { - 1 } \\
& \Delta R _ { 23 } = R _ { 3 \text { layers } } - R _ { 2 \text { layers } } = 9.4 \mathrm {~K} \mathrm {~W} ^ { - 1 }
\end{aligned}
$$

Taking the average incremental resistance per layer:

$$
\overline { \Delta R } = \frac { \Delta R _ { 12 } + \Delta R _ { 23 } } { 2 } = 7.6 \mathrm {~K} \mathrm {~W} ^ { - 1 }
$$

With the silicone rubber pad thickness $\delta =$ $0.8 \mathrm {~mm} = 8 \times 10 ^ { - 4 } \mathrm {~m}$ and area $A = 40 \times 40$ $\mathrm { mm } ^ { 2 } = 1.6 \times 10 ^ { - 3 } \mathrm {~m} ^ { 2 }$, we can calculate the thermal conductivity:

$$
\kappa = \frac { \delta } { \overline { \Delta R } \cdot A } = 0.066 \mathrm {~W} / ( \mathrm { m } \cdot \mathrm {~K} )
$$

The precision of this experiment can be increased by longer runs and adding additional silicon layers.
