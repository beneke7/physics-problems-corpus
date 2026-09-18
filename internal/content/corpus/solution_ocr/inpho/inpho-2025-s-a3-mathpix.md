---
id: solution-ocr-inpho-2025-s-a3
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2025-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. Love is in the air

A thermodynamic cycle is performed for one mole of an ideal monoatomic gas. The representation of this cycle is in the shape of a "heart" in the volume $( V )$ - temperature $( T )$ graph (shown as the shaded area below). However, neither of the axes are provided in the graph. The graph is drawn to scale with 1 cm along the $V$-axis representing 4 litre, and 1 cm along the $T$-axis representing 80 K.

It is given that the pressure at the point $X$ is minimum for the whole cycle, with the temperature and volume at this point being $T _ { X } = 224 \mathrm {~K}$ and $V _ { X } = 24$ litre.
![](../../../figures/solution-ocr/9f89606476be92eaf82871af.jpg)

(a) [13 marks] Draw both the $V$ and $T$ axes to scale in the same diagram given in the Summary Answersheet. Indicate the origin by "O". Justify your answer in the detailed answersheet. You are given one extra answer box in the answersheet, in case of any mistake in the first.

Solution: We begin with the ideal gas law:

$$
\begin{equation*}
P V = n R T \tag{3.1}
\end{equation*}
$$

Differentiating with respect to volume, $V$, we get:

$$
\begin{align*}
P + V \frac { d P } { d V } & = n R \frac { d T } { d V }  \tag{3.2}\\
\frac { R T } { V } + V \frac { d P } { d V } & = n R \frac { d T } { d V }  \tag{3.3}\\
T & = n \frac { d T } { d V } V - \frac { V ^ { 2 } } { R } \frac { d P } { d V } \tag{3.4}
\end{align*}
$$

At points of extreme pressure (maxima or minima), we have $\frac { d P } { d V } = 0$. Equation (3.4) then simplifies to:

$$
\begin{equation*}
T = n \frac { d T } { d V } V \tag{3.5}
\end{equation*}
$$

This implies that the tangent drawn to the $T - V$ curve at these extreme pressure points must pass through the origin of the $T - V$ graph. Let's denote the origin as point O. Point X represents a pressure minimum (as given), and we need to find points where pressure is maximum.
We are given the volume $V _ { X } = 24 \mathrm {~L}$, which scales to 6 cm on the graph, and the temperature $T _ { X } = 224 \mathrm {~K}$, which scales to 2.8 cm. Using these scaled values, the distance OX can be calculated as:

$$
\begin{equation*}
O X = \sqrt { V _ { X } ^ { 2 } + T _ { X } ^ { 2 } } = \sqrt { 6 ^ { 2 } + 2.8 ^ { 2 } } \approx 6.6 \mathrm {~cm} \tag{3.6}
\end{equation*}
$$

From Equation (3.4), for $n = 1$, at point X, we have

$$
\begin{equation*}
\left. \frac { d T } { d V } \right| _ { X } = \frac { T _ { X } } { V _ { X } } \tag{3.7}
\end{equation*}
$$

The slope of the tangent at X with respect to the volume axis is given by:

$$
\frac { d T } { d V } = \tan ( \theta ) = \frac { T _ { X } } { V _ { X } } = \frac { 2.8 } { 6 }
$$

Thus, the angle the tangent makes with the volume axis, $\theta$, is:

$$
\theta = \arctan \left( \frac { 2.8 } { 6 } \right) \approx 25 ^ { \circ }
$$

To draw the axes:

1. Draw a tangent line to the curve at point X.
2. Locate the origin (O) at a distance of 6.6 cm from point X on the tangent line. This means there are two possible locations for the origin, one on either side of X along the tangent.
3. Draw the volume (V) axis by drawing a line passing through O that makes an angle of approximately 25° with the tangent line at X.
4. Draw the temperature (T) axis by drawing a line perpendicular to the V axis and passing through the origin (O).

Note that the axes are oriented such that no part of the cycle falls into the negative $T$ or $V$ quadrants.
We therefore have two possible sets of axes, corresponding to the two possible origins. The solutions are displayed below, and either answer will be accepted. Origins are marked here by $O _ { 1 }$ and $O _ { 2 }$.


![](../../../figures/solution-ocr/148227c4ed1a9418188f0c8b.jpg)


![](../../../figures/solution-ocr/59c4afa966eff7177d073cd2.jpg)


(b)[3 marks] For the axes and origin you have drawn, indicate the point(s) on the graph where the pressure is/are maximum in the cycle by ⊗ and label it as $P _ { \text {max } }$ on the curve. Determine the value of the maximum pressure.
Solution: Once the axes are drawn, our next goal is to identify the point, which we call $P _ { \text {max } }$, where the slope of the tangent line to the curve is maximized and this tangent line passes through the origin. In other words, we seek the point on the $T - V$ curve with the steepest tangent that extends back to the origin.
Having located point $P _ { \text {max } }$, we can then determine its coordinates in "cm" as measured on our defined axes. Multiplying these coordinate values by the corresponding scale factors for temperature and volume will give the volume and temperature in L and K respectively. Then we can use ideal gas law to obtain the maximum pressure on these points.
The point $P _ { \text {max } }$ where the pressure is maximum is indicated in both the possible axes.
Exact numerical values for these parameters are provided in the table below. Answers within a reasonable tolerance will be considered acceptable.

| Origin | Coordinates $( V , T )$ |  | Values $( V , T )$ |  | Pressure value (atm) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $O _ { 1 }$ | 4.8 cm | 8.0 cm | 19.2 L | 640.0 K | 2.7 (accetable range is 2.4 to 2.8) |
| $O _ { 2 }$ | 1.3 cm | 5.4 cm | 5.2 L | 432.0 K | 6.8 (accetable range is 6.3 to 7.5) |
