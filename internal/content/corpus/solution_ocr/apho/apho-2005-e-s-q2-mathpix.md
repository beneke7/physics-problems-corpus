---
id: solution-ocr-apho-2005-e-s-q2
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2005_E_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2005-e-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 2.MAGNETIC BRAKING ON AN INCLINED

## PLANE

SUGGESTED SOLUTION
(A) Setup and Introduction

A1. To minimize the torque due to interaction of the magnet and the earth's magnetic field we have to set the orientation of the inclined plane so that the magnet will roll down with the poles aligned to the North-South direction as shown.

![](../../../figures/solution-ocr/b84a467603889c23781213fa.jpg)
Figure 1. Adjusting the orientation of the inclined plane


## EXPERIMENTAL COMPETITION

![](../../../figures/solution-ocr/e5ca692dfd183b80d03372f7.jpg)
Figure 2. Field and interactions in the magnetic braking effect

Answer with some vector analysis:
Consider a point A on the conductor. As the magnet moves, its magnetic field sweeps the conductor inducing electric field and causing current flow due to Faraday's law, whose direction can be determined using Lenz's law. Let's choose an arbitrary loop as shown. At point A, the magnetic field and the current will cause Lorentz force $F _ { M - } { } _ { c }$ pointing at x+ direction. This force is acting on the electrons in the conductor

On the other hand, due to Newtons' Third law there is reaction force $F _ { C - M }$ with the same magnitude but with opposite direction acting on the magnet, which is the magnetic braking force.
(B) Investigation of the magnetic braking force


## EXPERIMENTAL COMPETITION

B1. Determination of the power factor $\boldsymbol { n }$ : Dependence of the magnetic braking force with the velocity

In this experiment the student has to be aware that the magnet should reach the terminal velocity first before start the timing. From observation we can see that the magnet reaches terminal velocity almost immediately. To make sure we let the magnet travels first for about 5 cm before we start measuring the time. Here we use $s$ $= 250 \mathrm {~mm}$ from start to finish to obtain speed: $v = s / t$.

The angle of inclination is varied to take several data. Given $l = 425 \mathrm {~mm}$, we measure $h$ where $\sin \theta = h / l$.

![](../../../figures/solution-ocr/ff425d9091ac49b9351fd687.jpg)
Figure 3. a. Measurement of the velocity b. Measurement of the plane inclination

Because the magnet-conductor distance is kept constant $( d \approx 5 \mathrm {~mm} )$, the magnetic braking force only depends on the velocity of the magnet, so we can simplify:

$$
F _ { M B } = - k _ { 0 } d ^ { p } v ^ { n } = - k _ { 1 } v ^ { n }
$$

where $k _ { 1 } = k _ { 0 } d ^ { p }$ is constant in this experiment.


## EXPERIMENTAL COMPETITION

![](../../../figures/solution-ocr/d8289e1a35d5e6bbff5fe628.jpg)
Figure 4. Force diagram of the rolling magnet

When the magnet reaches the terminal velocity then the total torque should be zero. The equation of the motion at the contact point $C$ will be:

$$
\begin{gathered}
\sum \tau _ { C } = 0 \\
m g \sin \theta R + F _ { M B } R = 0 \\
m g \sin \theta - k _ { 1 } v ^ { n } = 0 \\
\sin \theta = \frac { k _ { 1 } } { m g } v ^ { n }
\end{gathered}
$$

To calculate the power factor $n$ :

$$
\ln \sin \theta = \ln \left( \frac { k _ { 1 } } { m g } \right) + n \ln ( v )
$$

The experimental data:

| H (mm) | $\bar { t }$ (s) | $\operatorname { Sin } \theta$ | v mm/s | $\ln ( v )$ | $\ln ( \sin \theta )$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 23±0.5 | 22.98±0.00 5 | 0.054 | 10.88 | 2.39 | -2.92 |
| 40 | 12.78 | 0.094 | 19.56 | 2.97 | -2.36 |
| 50 | 10.17 | 0.118 | 24.58 | 3.20 | -2.14 |
| 60 | 8.62 | 0.141 | 29.00 | 3.37 | -1.96 |
| 70 | 6.96 | 0.165 | 35.92 | 3.58 | -1.80 |
| 80 | 6.09 | 0.188 | 41.05 | 3.71 | -1.67 |
| 91 | 5.48 | 0.214 | 45.62 | 3.82 | -1.54 |
| 101 | 5.05 | 0.238 | 49.50 | 3.90 | -1.44 |
| 111 | 4.57 | 0.261 | 54.70 | 4.00 | -1.34 |
| 120 | 4.17 | 0.282 | 59.95 | 4.09 | -1.26 |
| 130 | 3.72 | 0.306 | 67.20 | 4.21 | -1.18 |
| 150 | 3.25 | 0.353 | 76.92 | 4.34 | -1.04 |
| 170 | 2.81 | 0.400 | 88.97 | 4.49 | -0.92 |

Table 1. Experimental data for power factor $n$ determination


## EXPERIMENTAL COMPETITION

Note:

- Column in bold are the data directly taken from the experiment.
- Typical error for $h$ measurement is shown in the first row: $h = ( 23 \pm 5 ) m m$. Similar error applies for the rest of $h$ data.
- Data $\bar { t }$ are the average data taken from 3 to 5 measurement. Even though standard deviation error is quite small (±0.1s), the error should be dominated by response delay of the observer in pressing the stopwatch. Widely accepted value for human eye response is 0.25 sec, in this experiment we choose more conservative value (±0.5 s)

![](../../../figures/solution-ocr/ff1f15dbd69ca07fdbf3e721.jpg)
Figure 5. Graph of $\ln ( \sin \theta )$ vs $\ln ( v )$. Typical error bar is shown in the central data.

Using linear regression method or graphical method as shown in Fig. 5 one can determine $n$ from the slope.

$$
n = 0.96
$$

Whose result is very close to the theoretical value of $n = 1$. From the data shown in Fig. 5 (as well as the coefficient of correlation $r = 0.9995$ ), it can be shown that this experiment is very good in demonstrating the linear velocity dependence of the magnetic braking force. This result has been repeated and verified by three independent persons and apparatus setups.

## Error estimate of $\boldsymbol { n }$ :

Instead of laboring on detailed error propagation analysis that could be very time consuming, in olympiad context one can make the error estimate as follows:


## EXPERIMENTAL COMPETITION

The typical error of the data points in Fig 5 can be obtained from the central data:

$$
\begin{aligned}
& \ln v = 3.58 \pm 0.075 \\
& \ln ( \sin \theta ) = - 1.8 \pm 0.075
\end{aligned}
$$

whose errors propagated from the uncertainties in $h$ and $t$.
The power factor $n$ can be obtained from the slope of Fig. 5: $n = \Delta y / \Delta x$ where $y = \ln ( \sin \theta )$ and $x = \ln v$.

From the data in Fig. 5. we have: $\Delta x = 2.1$ and $\Delta y = 2.0$, and the typical errors: $\delta x = 0.075$ and $\delta y = 0.075$.
So the error estimate for $n$ :

$$
\begin{aligned}
& \frac { \Delta n } { n } = \sqrt { \left( \frac { \delta x } { \Delta x } \right) ^ { 2 } + \left( \frac { \delta y } { \Delta y } \right) ^ { 2 } } = \sqrt { \left( \frac { 0.075 } { 2.1 } \right) ^ { 2 } + \left( \frac { 0.075 } { 2.0 } \right) ^ { 2 } } = 0.05 \\
& \Delta n = 0.05 n = 0.048
\end{aligned}
$$

So we can conclude the result of our experiment is:

$$
n = 0.96 \pm 0.05
$$


## EXPERIMENTAL COMPETITION

B2.Determination of the power factor $\boldsymbol { p }$ : Dependence of the magnetic braking force with the magnet-conductor distance
In this experiment we use one value of inclination angle, $h = 50 \mathrm {~mm} ( l = 425 \mathrm {~mm} )$ so that $\theta = \arcsin \mathrm { s } ( h / l ) = 6.8 ^ { \circ }$. Distance travelled remains: $s = 250 \mathrm {~mm}$, and the timing is done after the magnet travel first for about 5 cm as before.
The equation of motion, similar to previous section:

$$
\begin{gathered}
\sum \tau _ { C } = 0 \\
m g \sin \theta R + F _ { M B } R = 0 \\
m g \sin \theta - k _ { 0 } d ^ { p } v ^ { n } = 0 \\
v ^ { - n } = \frac { k _ { 0 } } { m g \sin \theta } d ^ { p } \\
- n \ln v = \ln \left( \frac { k _ { 0 } } { m g \sin \theta } \right) + p \ln d
\end{gathered}
$$

Here again $p$ can be obtained using linear regression or graphical method where we use the previously obtained value: $n = 0.96 \pm 0.05$.
The experimental data:

| $\boldsymbol { d }$ | $\bar { t }$ | $V$ | $- n \ln v$ | $\ln d$ |
| :--- | :--- | :--- | :--- | :--- |
| mm | S | mm/s |  |  |
| 4.5±0.5 | 13.53±0.00 5 | 18.48 | -2.80 | 1.50 |
| 5.5 | 9.60 | 26.04 | -3.13 | 1.70 |
| 6.5 | 6.70 | 37.31 | -3.47 | 1.87 |
| 7.5 | 4.99 | 50.10 | -3.76 | 2.01 |
| 8.5 | 3.47 | 72.05 | -4.11 | 2.14 |
| 9.5 | 2.87 | 87.11 | -4.29 | 2.25 |
| 10.5 | 2.14 | 116.82 | -4.57 | 2.35 |
| 11.5 | 1.66 | 150.60 | -4.81 | 2.44 |

Table 2. Experimental data for power factor $p$ determination

Note:
Distance $d$ is measured from the center of the magnet.


![](../../../figures/solution-ocr/ea734df71879746cbe3e0cd5.jpg)
Figure 6. Graph of $- n \ln ( v )$ vs $\ln ( d )$. Typical error bar is shown in the central data.

From linear regression calculation we have:

$$
p = - 2.16
$$

So the magnetic braking force is very sensitive with the magnet-conductor distance $d$ in which the relationship is almost inversely quadratic. In brief, the further the magnet from the conductor the weaker the magnetic braking force becomes. This result has been repeated and verified by three independent persons and apparatus setups.

Error estimate of $\boldsymbol { p }$ :
Similar to previous section, we use the central data shown in Fig. 6.:

$$
\begin{aligned}
& \ln d = 2.01 \pm 0.105 \\
& - n \ln ( v ) = - 3.76 \pm 0.095
\end{aligned}
$$

The power factor $p$ can be obtained from the slope of line in di Fig. 6: $p = \Delta y / \Delta x$ where $y = - n \ln v$ and $x = \ln d$.

For the data shown in Fig. 6 we obtain: $\Delta x = 0.94$ dan $\Delta y = 2.01$, with typical error: $\delta x = 0.105$ and $\delta y = 0.095$
So the error estimate for $p$ :

$$
\frac { \Delta p } { p } = \sqrt { \left( \frac { \delta x } { \Delta x } \right) ^ { 2 } + \left( \frac { \delta y } { \Delta y } \right) ^ { 2 } } = \sqrt { \left( \frac { 0.105 } { 0.94 } \right) ^ { 2 } + \left( \frac { 0.095 } { 2.01 } \right) ^ { 2 } } = 0.12
$$


## EXPERIMENTAL COMPETITION

$$
\Delta p = 0.12 p = 0.26
$$

So we can conclude the result of our experiment is:

$$
p = - 2.2 \pm 0.3
$$


## EXPERIMENTAL COMPETITION

[Marking Scheme] Experimental Question 2

## Magnetic Braking on an inclined plane

| (A.1) 1.0 | 1.0 | Adjusting the orientation of the inclined plane track |
| :--- | :--- | :--- |
| (A.2) 1.0 | 1.0 | Explanation using appropriate diagram of field and force lines |
| (B.1) 4.0 | 0.5 | Recognizing v terminal |
|  | 0.5 | Equation of motion |
|  | 0.5 | Obtain data >= 5 sets + corresponding calculations , 0.1 each data set. |
|  | 0.25 | Units |
|  | 0.5 | Graph |
|  | 0.25 | Linear regression or graphic analysis |
|  | 0.5 | Final result: $0.5 \leq n \leq 1.5$ |
|  | 0.5 | Final result: $0.9 \leq n \leq 1.1$ |
|  | 0.5 | Error analysis |
| (B.2) 4.0 | 0.5 | Equation of motion |
|  | 0.5 | Obtain data >= 5 sets + corresponding calculations , 0.1 each data set. |
|  | 0.25 | Units |
|  | 0.5 | Graph |
|  | 0.25 | Linear regression or graphic analysis |
|  | 0.5 | Correct sign (-) for final result p |
|  | 0.5 | Final result: $1.0 \leq \| p \| \leq 3.0$ |
|  | 0.5 | Final result: $1.5 \leq \| p \| \leq 2.5$ |
|  | 0.5 | Error analysis |
