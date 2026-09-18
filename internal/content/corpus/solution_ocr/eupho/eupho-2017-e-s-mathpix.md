---
id: solution-ocr-eupho-2017-e-s
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2017_E_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2017-E1]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## 1 Light-emitting diode

Task 1. The easiest way to obtain $V ( T )$-graph is to use the diode function of the multimeter for measuring diode voltage $V$. The board is heated by driving through the resistor $R _ { 1 }$ a current which is adjusted using the potentiometer.
| $V ( \mathrm {~V} )$ | $R _ { T } ( \mathrm { k } \Omega )$ | $T ( \mathrm {~K} )$ | $V ( \mathrm {~V} )$ | $R _ { T } ( \mathrm { k } \Omega )$ | $T ( \mathrm {~K} )$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1.560 | 9.25 | 300.0 | 1.560 | 9.25 | 300.0 |
| 1.555 | 8.18 | 302.8 | 1.555 | 8.08 | 303.1 |
| 1.550 | 7.2 | 305.8 | 1.550 | 7.13 | 306.0 |
| 1.545 | 6.33 | 308.9 | 1.545 | 6.33 | 308.9 |
| 1.540 | 5.6 | 311.9 | 1.540 | 5.56 | 312.0 |
| 1.535 | 5.02 | 314.6 | 1.535 | 4.94 | 315.0 |
| 1.530 | 4.44 | 317.7 | 1.530 | 4.4 | 317.9 |
| 1.525 | 3.97 | 320.6 | 1.525 | 3.93 | 320.9 |
| 1.520 | 3.55 | 323.6 | 1.520 | 3.52 | 323.8 |
| 1.515 | 3.18 | 326.6 | 1.515 | 3.13 | 327.0 |
| 1.510 | 2.8 | 330.1 | 1.510 | 2.82 | 329.9 |
| 1.505 | 2.55 | 332.7 | 1.505 | 2.55 | 332.7 |
| 1.500 | 2.32 | 335.4 | 1.500 | 2.27 | 336.0 |
| 1.495 | 2.09 | 338.4 | 1.495 | 2.07 | 338.7 |
| 1.490 | 1.88 | 341.5 | 1.490 | 1.888 | 341.4 |
| 1.485 | 1.72 | 344.1 | 1.485 | 1.7 | 344.5 |
| 1.480 | 1.56 | 347.1 | 1.480 | 1.546 | 347.4 |
| 1.475 | 1.42 | 350.0 | 1.475 | 1.407 | 350.3 |
| 1.470 | 1.29 | 353.0 | 1.470 | 1.285 | 353.1 |
| 1.465 | 1.19 | 355.5 | 1.465 | 1.175 | 355.9 |
| 1.460 | 1.085 | 358.5 | 1.460 | 1.083 | 358.5 |
| 1.455 | 0.992 | 361.4 | 1.455 | 0.987 | 361.5 |
| 1.450 | 0.911 | 364.1 | 1.450 | 0.909 | 364.2 |


Once we estimate the magnitude of the terms in the expression for $I _ { d }$, we'll find that $V _ { T } \approx 25 \mathrm { mV }$ for $T \approx 300 \mathrm {~K}$; all the voltages are much larger than that, so the unity can be neglected. Then, with constant $I _ { d }$, we have $\frac { V - V _ { G 0 } } { n V _ { T } } =$ const (the constant appears to be negative), hence $V = V _ { G 0 } - B n V _ { T } =$ $B n k T / q$, where $B$ is a constant. So, we need to plot $V$ versus $T$, and $V _ { G 0 }$ is found as the intersection point of the linear regression line with the vertical axis.
![](../../../figures/solution-ocr/f2de81bda15dceb555081b46.jpg)
From the linear regression we obtain $v _ { G 0 } \approx 2.085 \mathrm {~V}$.
Next we can make a series of measurements with small currents so that the diode will have essentially the room temperature. Then we can take logarithm from the expression of $I _ { d }$ (while neglecting the unity) to obtain

$$
\frac { V - V _ { G 0 } } { V _ { T } } = n \ln A - n \ln I _ { d } .
$$

Thus, if we plot $\ln I _ { d }$ versus $V - V _ { G 0 } , n$ and $A$ can be obtained as the linear regression parameters.

Alternatively, we can make a series of measurements with a fixed voltage applied to the diode, and measure current for different temperatures. Based on the same expression as given above, we need to plot $\frac { V - V _ { G 0 } } { V _ { T } } = \frac { \left( V - V _ { G 0 } \right) q } { k T }$ versus $\ln I _ { d }$. Such data are given in the table below.

| $I ( \mathrm {~mA} )$ | $R _ { T } ( \mathrm { k } \Omega )$ | $T ( \mathrm {~K} )$ | $\ln ( I / 1 \mathrm {~A} )$ | $\frac { \left( V - V _ { G 0 } \right) q } { k T }$ |
| :--- | :--- | :--- | :--- | :--- |
| 33.3 | 9.76 | 298.8 | -10.310 | -22.25 |
| 44.8 | 5.51 | 312.3 | -10.013 | -21.29 |
| 96.6 | 7.12 | 306.1 | -9.245 | -21.72 |
| 150.0 | 4.72 | 316.1 | -8.805 | -21.03 |
| 194.1 | 3.6 | 323.2 | -8.547 | -20.57 |
| 297.0 | 2.53 | 332.9 | -8.122 | -19.97 |
| 417.0 | 1.84 | 342.1 | -7.782 | -19.43 |
| 551.0 | 1.36 | 351.3 | -7.504 | -18.92 |
| 840.0 | 1.002 | 361.0 | -7.082 | -18.41 |
| 860.0 | 0.95 | 362.8 | -7.059 | -18.33 |

If we plot these data we'll see that most of the data points lie on a straight line, but first two and the very last one will deviate. Data points corresponding to very small currents deviate because of large relative uncertainties, last data point deviates because the parasitic resistance can no longer be neglected. So we discard these from our analysis.
![](../../../figures/solution-ocr/0be71821c03243a615fe084d.jpg)
With this graph, the tangent of the slope of the regression line gives us directly $n \approx 1.55$. The intercept -7.39 gives us $- n \ln A$, so that $A \approx e ^ { 7.39 / 1.55 } \mathrm {~A} \approx 119 \mathrm {~A}$.

By very large currents, a certain change in current $\Delta I _ { d }$ will give rise to just a tiny change in the voltage drop $\Delta V$ at the diode junction, if we can keep the temperature constant by compensating with the resistor. [according to the exponential dependence of $\left. I _ { d } = I _ { d } ( V ) \right]$, which is much smaller than the change in the voltage drop on the parasitic resistor $R _ { s } \Delta I _ { d }$. So, we can determine $R _ { s }$ from the experimentally measured dependance of the diode current $I _ { d }$ on the total voltage $V ^ { \prime } =$ $V + I _ { d } R _ { s }$ at the limit of large currents.
![](../../../figures/solution-ocr/b8e185a7017a5f3e363d7d3d.jpg)


The regression line slope gives directly $R _ { s } \approx 0.75 \Omega$.
Other option is to measure the voltage, temperature and current (at high current values) and substract the diode voltage calculated from the model to get the voltage drop on series resistance.

In both cases, it is important that the voltage is measured directly from the LED wires, to ignore the any additional voltage drops on high current carrying part of circuit.

Task 2. The idea is to compare the thermal expansion of air inside the bottle when the heat is being released by the diode, and when this is done by the resistor. In the latter case, all the consumed electrical power is released as heat; in the former case, part of the heat escapes the bottle as light radiation energy. The pressure inside a bottle is a function of its temperature, and the temperature which will establish inside the bottle is defined by the balance between the thermal dissipation power, and the rate by which heat is escaping the bottle. The latter is a function of the temperature inside the bottle, and hence, the temperature inside the bottle is a function of the heat dissipation power. Therefore, the pressure inside the bottle is also a function of the heat dissipation power.

First we need to build a manometer which allows us to measure pressure difference - either between the pressure inside the bottle and the atmospheric pressure, or between the pressure inside the two bottles. To that end, we fill a tube with water and folding it into a U-tube; pressure difference can be determined via the water column height difference between two halves of the tube.

One possible approach to this problem is to compare heat dissipation on the diode with a heat dissipation on the resistor: one may adjust (using the potentiometer) the heating power of the resistor to reach such a state that the pressures inside the bottles are equal. If this state is reached when the electrical consumption power of the diode is $P _ { D }$ and the power of the resistor is $P _ { R }$ then we can conlcude that thermal dissipation power of the diode is also $P _ { R }$, and hence, $P _ { D } - P _ { R }$ escapes the bottle as the light radiation so that $\eta = 1 - P _ { R } / P _ { D }$.

Thermal equilibrium inside the bottles is reached relatively slowly, one must wait aproximately for 5-10 minutes. Therefore, finding the state when the heat dissipation powers on the diode and on the resistor are equal may be a relatively slow process. An alternative approach is to assume that the heat exchange rate with the surrounding to be linear in temperature (this assumption is well-founded as the diode never becomes very hot). Then we can make two series of measurements for the pressure inside the bottle as a function of electrical consumption power: first, when the current is driven through the diode, and second, when it is driven through the resistor, $\Delta p = \Delta p ( P )$. Fitting the data to a linear law, $\Delta p = k P$, we obtain the values of the proportionality coefficient $k$ both for the diode $\left( k _ { D } \right)$ and for the resistor $\left( k _ { R } \right)$; then, $\eta = 1 - k _ { R } / k _ { D }$. Note that since the pressure is proportional to the column height difference, we can express the pressure in terms of the height of water column: the proportionality factor cancels out from the ratio.

Measurement data are given in the table below; $I , V , P$, and $d$ refer to the measured current, voltage, power, and water column height difference, respectively; index "L" refers to the measurements with a diode, and "R" - to the measurements with a resistor.

| $I _ { D }$ | $V _ { D }$ | $P _ { D }$ | $d _ { D }$ | $I _ { R }$ | $U _ { R }$ | $P _ { R }$ | $d _ { R }$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 101.5 | 1.85 | 0.1878 | 8 | 101.9 | 0.585 | 0.0596 | 5 |
| 198.2 | 1.95 | 0.3865 | 15 | 190.1 | 1.09 | 0.2072 | 16 |
| 300 | 2.04 | 0.6120 | 23 | 300 | 1.76 | 0.5280 | 41 |
| 390 | 2.11 | 0.8229 | 33 | 390 | 2.35 | 0.9165 | 71 |
| 480 | 2.18 | 1.0464 | 45 | 470 | 2.73 | 1.2831 | 103 |
| 120 <br>  | $d ( \mathrm {~mm} )$ <br> $\mathrm { y } = 79.1 \mathrm { x }$ <br> $\mathrm { R } ^ { 2 } = 0.999$ <br> $\mathrm { y } = 41.0 \mathrm { x }$ <br> $\mathrm { R } ^ { 2 } = 0.9882$ <br> $P ( \mathrm {~W} )$ <br> 0.2 <br> 0.4 <br> 0.6 <br> 0.8 <br> 1.0 <br> 1.2 <br> 1.4 |  |  |  |  |  |  |

Based on these slopes $k _ { D } = 1 - 41.0 \mathrm {~mm} / \mathrm { W } / 79.8 \mathrm {~mm} / \mathrm { W } \approx$ 0.48

Note that it is also possible to measure the efficiency using the temperature sensor: it works in the same way as the method using air expansion described above. We compare temperature of the circuit board as function of electrical power supplied to the diode $\left[ T _ { D } ( P ) \right]$, and also the temperature when power is supplied to the resistor $\left[ T _ { R } ( P ) \right]$. Assuming that dominating part of the heat is dissipated into surroundings via the circuit board and only a negligible part of it leaves as a heat radiation at the diode and resistor, respectively (this is an assumption which is valid with a really good accuracy), we can find $\eta = 1 - T _ { D } ( P ) / T _ { R } ( P )$, or even better, $\eta = 1 - \kappa _ { D } ( P ) / \kappa _ { R } ( P )$, where $\kappa _ { D }$ and $\kappa _ { R }$ denote the slopes of the respective graphs. The result is the same as shown above, $\eta \approx 0.46 \pm 0.04$. It is also possible to calculate the internal efficiency of the junction by subtracting the power dissipation on the parasitic resistance; the result is $\eta _ { \text {internal } } \approx 0.53$.

Task 3. According to our model, the photocurrent does not depend on the voltage, but because the diode current does, the total current through the diode depends on the voltage. For the maximum harvestable electrical power $P _ { \text {max } }$ we must find a voltage where $P = V I _ { p } - V I _ { d }$ is the greatest.

We can do it in multiple ways. One way is to measure the $I _ { p } \approx 0.020 \mathrm {~mA}$ by shorting the diode with a am-meter, and then finding the maximum analytically or numerically from our model. Using the diode parameters from above we get $P _ { \text {max } } \approx 0.026 \mathrm {~mW}$. Other way is to change the voltage on the diode with potentiometer, measure the current and the voltage and find the maximum by scanning the range where current and voltage are positive, see the circuit below.

![](../../../figures/solution-ocr/26bd5c5b1a24b6932b489928.jpg)
The data of measurements are given in the table below; the graph shows both the experimental data points and theoretical dependence $I _ { d } ( V ) - I _ { p }$, where $I _ { p } = - 15 \mu \mathrm {~V}$, determined using the measurement at $V = 0 \mathrm {~V}$. As we can see, the two curves are fairly close; there is a small mismatch which can


partly explained by a leakage current due to a certain large effective resistance being connected in parallel to the diode's junction.

| $V ( \mathrm {~V} )$ | $I = I _ { d } - I _ { p } ( \mathrm {~A} )$ | $P = V I ( \mu \mathrm {~W} )$ |
| :--- | :--- | :--- |
| 0 | -15 | 0 |
| 0.18 | -14.8 | 2.664 |
| 0.4 | -14.7 | 5.88 |
| 0.6 | -14.6 | 8.76 |
| 0.8 | -14.5 | 11.6 |
| 0.99 | -14.5 | 14.355 |
| 1.2 | -14.2 | 17.04 |
| 1.3 | -12.8 | 16.64 |
| 1.35 | -11.3 | 15.255 |
| 1.4 | -6 | 8.4 |
| 1.43 | -0.5 | 0.715 |
| 1.46 | 8.6 | -12.556 |

![](../../../figures/solution-ocr/aaee11708e6a209820740ed1.jpg)

The graph includes also the curve for the electrical power produced by the diode, $P = V I$. The maximum $P _ { \text {max } } \approx$ $17 \mu \mathrm {~W}$ can be determined as the maximum of this curve. The efficiency is found as

$$
\eta _ { p } = \frac { P _ { \max } } { P _ { i } } = \frac { P _ { \max } } { \eta I _ { 1 } V \left( I _ { 1 } \right) \frac { S } { \alpha 4 \pi d ^ { 2 } } } ,
$$

where $\frac { S } { \alpha 4 \pi d ^ { 2 } }$ is fraction of the light reaching the active area of the LED; $V _ { 1 }$ and $I _ { 1 }$ denote the voltage and current of the other diode, respectively. Numerically we obtain $\eta _ { p } \approx 0.04$.

|  | 1 Voltage-temperature graph |  |  |
| :--- | :--- | :--- | :--- |
| Coarse-grained grading scheme | VG0 <br> n,A | Method | 0.5 |
|  |  | Measurements | 1.0 |
|  |  | Plot | 0.5 |
|  |  | Method | 1.0 |
|  |  | Value | 0.5 |
|  |  | Method | 1.0 |
|  |  | Measurements and plot | 1.5 |
|  |  | Value for n | 0.5 |
|  |  | Value for A | 0.5 |
|  |  | Method | 1.0 |
|  |  | Measurements | 0.5 |
|  |  | Value | 0.5 |
|  | 2 | Efficiency |  |
|  | η | Method | 2.0 |
|  |  | Measurements | 2.0 |
|  |  | Value | 1.0 |
|  | 3 LED as photodiode |  |  |
|  | ×@LZ ηр | Method | 2.0 |
|  |  | Measurements | 2.0 |
|  |  | Value | 0.5 |
|  |  | Formula | 1.0 |
|  |  | Value | 0.5 |
