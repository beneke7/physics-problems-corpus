---
id: solution-ocr-usapho-2013-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2013-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A1

The flow of heat through a material can be described via the thermal conductivity $\kappa$. If the two faces of a slab of material with thermal conductivity $\kappa$, area $A$, and thickness $d$ are held at temperatures differing by $\Delta T$, the thermal power $P$ transferred through the slab is

$$
P = \frac { \kappa A \Delta T } { d }
$$

A heat exchanger is a device which transfers heat between a hot fluid and a cold fluid; they are common in industrial applications such as power plants and heating systems. The heat exchanger shown below consists of two rectangular tubes of length $l$, width $w$, and height $h$. The tubes are separated by a metal wall of thickness $d$ and thermal conductivity $\kappa$. Originally hot fluid flows through the lower tube at a speed $v$ from right to left, and originally cold fluid flows through the upper tube in the opposite direction (left to right) at the same speed. The heat capacity per unit volume of both fluids is $c$.

The hot fluid enters the heat exchanger at a higher temperature than the cold fluid; the difference between the temperatures of the entering fluids is $\Delta T _ { i }$. When the fluids exit the heat exchanger the difference has been reduced to $\Delta T _ { f }$. (It is possible for the exiting originally cold fluid to have a higher temperature than the exiting originally hot fluid, in which case $\Delta T _ { f } < 0$.)
![](../../../figures/solution-ocr/78ac51816872361399e1ebc3.jpg)

Assume that the temperature in each pipe depends only on the lengthwise position, and consider transfer of heat only due to conduction in the metal and due to the bulk movement of fluid. Under the assumptions in this problem, while the temperature of each fluid varies along the length of the exchanger, the temperature difference across the wall is the same everywhere. You need not prove this.

Find $\Delta T _ { f }$ in terms of the other given parameters.

## Solution

To see why the temperature difference across the wall is the same everywhere along the wall, note that at every point along the wall, the warmer fluid on one side transfers energy to the colder


fluid on the other. Since the heat capacities are equal, the temperature of the warmer fluid drops at the same rate the temperature of the colder fluid rises. But since the fluids move at the same speed in opposite directions, this means the temperature difference is constant.

Suppose this temperature difference is $\Delta T _ { w }$. Since the total area of the wall is $l w$, the power transferred across the wall is

$$
P = \frac { \kappa l w } { d } \Delta T _ { w }
$$

In a time $d t$, the energy transferred is therefore

$$
d E = \frac { \kappa l w } { d } \Delta T _ { w } d t .
$$

Meanwhile, suppose the red fluid enters at temperature $T _ { r }$ and the blue fluid at temperature $T _ { b }$. The red fluid exits at temperature $T _ { b } + \Delta T _ { w }$, so the overall temperature change of the red fluid is

$$
\Delta T _ { r } = T _ { r } - \left( T _ { b } + \Delta T _ { w } \right) = \Delta T _ { i } - \Delta T _ { w }
$$

In a time $d t$, a volume of red fluid $v w h d t$ enters the pipe, and the same volume leaves, with a temperature $\Delta T _ { r }$ higher. Then the total energy transferred to the red fluid is

$$
d E = v w h c d t \Delta T _ { r } = v w h c \left( \Delta T _ { i } - \Delta T _ { w } \right) d t .
$$

We would get the same equation if we considered the blue fluid, as expected by energy conservation. However, this requires vwhc to be the same for both fluids. If this were not true, we would instead get a contradiction, reflecting the fact that $\Delta T _ { w }$ could not be constant.

Equating our two expressions for $d E$ gives

$$
\frac { \kappa l w } { d } \Delta T _ { w } = v w h c \left( \Delta T _ { i } - \Delta T _ { w } \right) \quad \Rightarrow \quad \Delta T _ { w } = \frac { \Delta T _ { i } } { 1 + \alpha } , \quad \alpha = \frac { \kappa l } { d v h c } .
$$

Because the red fluid exits at $T _ { b } + \Delta T _ { w }$ and the blue fluid exits at $T _ { r } - \Delta T _ { w }$,

$$
\Delta T _ { f } = \left( T _ { b } + \Delta T _ { w } \right) - \left( T _ { r } - \Delta T _ { w } \right) = - \Delta T _ { i } + 2 \Delta T _ { w } = \Delta T _ { i } \left( \frac { 2 } { 1 + \alpha } - 1 \right)
$$

The performance of the heat exchanger is determined by the dimensionless parameter $\alpha$.
There are several ways we can check this result. We can check if $\alpha$ is correct by dimensional analysis or common sense; for example, it's clear that a long pipe improves performance. We also see that in the limit of poor performance, $\alpha \rightarrow 0$, we find no heat exchange at all, $\Delta T _ { f } = \Delta T _ { i }$. The best possible performance, attained for $\alpha \rightarrow \infty$, is $\Delta T _ { f } = - \Delta T _ { i }$, a complete reversal of the temperatures of the fluids. This is much better than the best possible performance if the two fluids moved the same direction, which would be $\Delta T _ { f } = 0$. The general idea here is called countercurrent heat exchange, and it appears in both biology and practical engineering.
