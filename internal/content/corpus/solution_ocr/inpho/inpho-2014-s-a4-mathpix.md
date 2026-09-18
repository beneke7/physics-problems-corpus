---
id: solution-ocr-inpho-2014-s-a4
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2014-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
4. It is well known that the temperature of a closed room goes up if the refrigerator is switched on inside it. A refrigerator compartment set to temperature $T _ { C }$ is turned on inside a hut in Leh (Ladakh). The atmosphere (outside the hut) can be considered to be a vast reservoir at constant temperature $T _ { O }$. Walls of hut and refrigerator compartment are conducting. The temperature of the refrigerator compartment is maintained at $T _ { C }$ with the help of a compressor engine. We explain the working of the refrigerator engine and the heat flow with the help of the associated figure.
![](../../../figures/solution-ocr/e9d9d71a7aa6b280a5fdadd3.jpg)
The larger square is the refrigerator compartment with heat leak per unit time $Q _ { C }$ into it from the room. The same heat per unit time $Q _ { C }$ is pumped out of it by the engine (also called compressor and indicated by the smaller square in thick). The compressor does work $W$ and rejects heat per unit time $Q _ { H }$ into the hut. The thermal conductance (in units of watt per kelvin) of the walls of the compartment and hut respectively are $K _ { C }$ and $K _ { H }$. After a long time it is found that temperature of the hut is $T _ { H }$. The compressor works as a reverse Carnot engine and it does not participate in heat conduction process. [Marks:
(a) State the law of heat conduction for the walls of the hut and the refrigerator compartment.
Solution:
$$
\begin{aligned}
\text { For hut : } Q _ { H } - Q _ { C } & = K _ { H } \left( T _ { H } - T _ { O } \right) \\
\text { For refrigerator compartment: } Q _ { C } & = K _ { C } \left( T _ { H } - T _ { C } \right)
\end{aligned}
$$
(b) We define the dimensionless quantities $k = K _ { H } / K _ { C } , h = T _ { H } / T _ { O }$ and $c = T _ { C } / T _ { O }$. Express $h$ is terms of $c$ and $k$.

Solution:

$$
\begin{aligned}
& h ^ { 2 } - h ( 2 c + k c ) + c ^ { 2 } + k c = 0 \\
& h = \frac { ( 2 c + k c ) \pm \sqrt { ( 2 c + k c ) ^ { 2 } - 4 \left( c ^ { 2 } + k c \right) } } { 2 }
\end{aligned}
$$


(c) Calculate stable temperature $T _ { H }$ given $T _ { O } = 280.0 \mathrm {~K} , T _ { C } = 252.0 \mathrm {~K}$ and $k = 0.90$.
Solution: $h = 1.02$ (choosing - sign) $\Rightarrow T _ { H } = 284.7 \mathrm {~K}$
(d) Now another identical refrigerator is put inside the hut. $T _ { C }$ and $T _ { O }$ do not change but $T _ { H }$, the hut temperature will change to $T _ { H } ^ { \prime }$. State laws of heat conduction for hut and one of the two identical refrigerator compartments.
Solution:
$$
\text { For hut: } 2 \left( Q _ { H } ^ { \prime } - Q _ { C } ^ { \prime } \right) = K _ { H } \left( T _ { H } ^ { \prime } - T _ { O } \right)
$$
For refrigerator compartment : $Q _ { C } ^ { \prime } = K _ { C } \left( T _ { H } ^ { \prime } - T _ { C } \right)$
(e) Assume that the dimensionless quantities $k$ and $c$ do not change. Let $h ^ { \prime } = T _ { H } ^ { \prime } / T _ { O }$. Obtain an expression for $h ^ { \prime }$.

Solution:

$$
\begin{aligned}
& h ^ { \prime 2 } - h ^ { \prime } \left( 2 c + \frac { k } { 2 } c \right) + c ^ { 2 } + \frac { k } { 2 } c = 0 \\
& h ^ { \prime } = \frac { \left( 2 c + \frac { k } { 2 } c \right) \pm \sqrt { \left( 2 c + \frac { k } { 2 } c \right) ^ { 2 } - 4 \left( c ^ { 2 } + \frac { k } { 2 } c \right) } } { 2 }
\end{aligned}
$$
