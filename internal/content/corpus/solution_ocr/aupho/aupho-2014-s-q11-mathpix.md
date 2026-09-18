---
id: solution-ocr-aupho-2014-s-q11
source: aupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/aupho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [aupho-2014-q11]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question 11
Suggested Time: 35 min
Maria is a connoisseur of fine teas. She is preparing her new tea with boiling water in her cylindrical mug with inner radius $r = 4 \mathrm {~cm}$ and height $h = 10 \mathrm {~cm}$. Her mug has a lid for better insulation.

In a short time $\Delta t$ the amount of heat which flows out of the tea is given by

$$
\begin{equation*}
\Delta Q = \frac { \kappa S \left( T _ { \mathrm { tea } } - T _ { \mathrm { room } } \right) } { d } \Delta t \tag{1}
\end{equation*}
$$

where $S$ in the inner surface area of the mug and $d = 5 \mathrm {~mm}$ is the thickness of the mug walls.
As heat flows from the tea the change in its temperature $\Delta T$ given by

$$
\begin{equation*}
\Delta Q = m \cdot c \cdot \Delta T \tag{2}
\end{equation*}
$$

where $m$ is the mass of the water.
Data

Temperature of boiling water: $T _ { \text {boil } } = 100 ^ { \circ } \mathrm { C }$
Thermal conductivity of mug: $\kappa = 1.0 \mathrm {~W} \mathrm {~m} ^ { - 1 } \mathrm {~K} ^ { - 1 }$
Room temperature: $T _ { \text {room } } = 25 { } ^ { \circ } \mathrm { C }$
Density of water: $\rho = 1000 \mathrm {~kg} \mathrm {~m} ^ { - 3 }$
Specific heat capacity of water: $c = 4180 \mathrm {~J} \mathrm {~kg} ^ { - 1 } \mathrm {~K} ^ { - 1 }$
Maria pours her tea, filling her mug completely, and immediately places the lid on her mug.

a) (i) Find the temperature $T _ { 30 }$ of Maria's tea after 30 seconds have elapsed and fill in the first line of the table on p. 2 of the Answer Booklet.
    (ii) Complete the rest of the table on p. 2 of the Answer Booklet.
Hint: use your answers from one line to help you with the next line.
    (iii) Plot a graph of $T _ { \text {tea } }$ vs. time on p. 3 of the Answer Booklet. Include times from 0 s up to and including 5 min.
b) Find the time it takes Maria's tea to reach $55 ^ { \circ } \mathrm { C }$.
Solution: Maria's mug has a surface area of $S = 2 \pi r ^ { 2 } + 2 \pi r h = 350 \mathrm {~cm} ^ { 2 }$, which includes the area of both the bottom and the lid. The contents have a mass of $m = \rho \pi r ^ { 2 } h = 0.50 \mathrm {~kg}$.
Equating the two expressions given for $\Delta Q$ in equations (1) and (2) gives,
$$
m c \Delta T = \frac { \kappa S \left( T _ { \mathrm { tea } } - T _ { \mathrm { room } } \right) } { d } \Delta t .
$$
Rearranging and then substituting the values for the constants gives
$$
\begin{aligned}
\Delta T & = \frac { \kappa S \left( T _ { \mathrm { tea } } - T _ { \mathrm { room } } \right) } { m c d } \Delta t \\
& = 0.10 \left( T _ { \mathrm { tea } } - T _ { \mathrm { room } } \right)
\end{aligned}
$$
Page 8 of 20
2014 Physics Australian Science Olympiads Examination

The formula above is then used to evaluate the temperatures required to fill in the table below.

| Time after pouring | Initial $T _ { \text {tea } }$ (°C) | Temperature change in 30 s (°C) | Final $T _ { \text {tea } }$ (°C) |
| :--- | :--- | :--- | :--- |
| 0 s | 100 | 7.5 | 92.5 |
| 30 s | 92.5 | 6.8 | 85.7 |
| 1 min | 85.7 | 6.1 | 79.6 |
| 1 min 30 s | 79.6 | 5.5 | 74.1 |
| 2 min | 74.1 | 4.9 | 69.2 |
| $2 \min 30$ s | 69.2 | 4.4 | 64.8 |
| 3 min | 64.8 | 4.0 | 60.8 |
| 3 min 30 s | 60.8 | 3.6 | 57.2 |
| 4 min | 57.2 | 3.2 | 54.0 |
| 4 min 30 s | 54.0 | 2.9 | 51.1 |


![](../../../figures/solution-ocr/fd09b30083d842a43406dcb0.jpg)

By fitting a curve through the data points and then reading the time at which the temperature of the tea reaches $55 ^ { \circ } \mathrm { C }$ it is found that it takes around 4 min 20 s to cool to 55 °C.
c) Maria decides to reheat her tea from 55 °C to 70°C with a small 1.1 kW heater she places into the tea. How long will it take the tea to reach $70 ^ { \circ } \mathrm { C }$ ? You may neglect the heat flow out of the tea.
Solution: The heater provides the power to heat the tea. $P = \frac { Q } { t }$ so $t = \frac { P } { Q }$. The heat required for the tea to reach $70 ^ { \circ } \mathrm { C }$ is $Q = m c \Delta T$ so that
$$
\begin{aligned}
t & = \frac { P } { m c \Delta T } \\
& = 28.7 \mathrm {~s}
\end{aligned}
$$

d) Estimate the size of the error in your answer to part (c) due to neglecting heat flow out of the tea. Use your estimate to comment on whether your answer to part (c) is reasonable.
Solution: Over 30 s when the tea is at a temperature of 70°C it cools by around 4°C which is around a quarter of the 15°C increase which is desired. This suggests that the heating may take one quarter longer, so the answer is probably around 7 s shorter than is reasonable. This effect will significantly affect the time it takes to heat the tea.

Marker's comments:

a) Many students attempted this part of the question. Many students had difficulty in finding the expression to calculate the change in the temperature. Common difficulties included forgetting to include the area of the top or bottom of the mug in its surface area.
b) This part was generally completed well by students who had drawn a graph.
c) Few students realised that this part of the question could be completed independently of the pervious parts.
d) Students found this part of the question more difficult to answer clearly.
