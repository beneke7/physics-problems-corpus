---
id: solution-ocr-izho-2011-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2011_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2011-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Theoretical Question 3

1 [1 point] The constant $C$ is found from the condition that the total number of particles is equal to $N$ :

$$
\begin{equation*}
\sum _ { n = 1 } ^ { \infty } N _ { n } = N . \tag{1}
\end{equation*}
$$

Substituting the expression for the Boltzmann distribution function and obtaining summation, we get

$$
\begin{align*}
& N = \sum _ { n = 1 } ^ { \infty } N _ { n } = \sum _ { n = 1 } ^ { \infty } C \exp \left( - n \frac { \varepsilon } { k _ { B } T } \right) = C \frac { \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) } { 1 - \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) } \Rightarrow \\
& N _ { n } = N \frac { 1 - \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) } { \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) } \exp \left( - n \frac { \varepsilon } { k _ { B } T } \right) \tag{2}
\end{align*}
$$

2 [3 points] The internal energy of the gas is a sum of the kinetic energies of all atoms:

$$
\begin{align*}
& U = \sum _ { n = 1 } ^ { \infty } E _ { n } N _ { n } = \sum _ { n = 1 } ^ { \infty } \operatorname { Cn } \varepsilon \exp \left( - n \frac { \varepsilon } { k _ { B } T } \right) = C \frac { \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) } { \left( 1 - \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) \right) ^ { 2 } } =  \tag{3}\\
& = N \frac { \varepsilon } { 1 - \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) }
\end{align*}
$$

In the classical limit $k _ { B } T \gg \varepsilon$, the argument of the exponent is small, it is thus justifiable to use the approximate formula $\exp \left( - \frac { \varepsilon } { k _ { B } T } \right) \approx 1 - \frac { \varepsilon } { k _ { B } T }$. In this case, we obtain

$$
\begin{equation*}
U = N k _ { B } T . \tag{4}
\end{equation*}
$$

At low temperatures, the exponent itself is small, $\exp \left( - \frac { \varepsilon } { k _ { B } T } \right) \ll 1$, hence

$$
\begin{equation*}
U = N \frac { \varepsilon } { 1 - \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) } \approx N \varepsilon \left( 1 + \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) \right) . \tag{5}
\end{equation*}
$$

3 [3 points] The molar heat capacity at fixed volume is found as

$$
\begin{equation*}
C _ { V } = \frac { \partial U } { \partial T } . \tag{6}
\end{equation*}
$$

In the most general case we derive


$$
\begin{equation*}
C _ { V } = \frac { \partial U } { \partial T } = \frac { N _ { A } \varepsilon } { \left( 1 - \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) \right) ^ { 2 } } \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) \frac { \varepsilon } { k _ { D } T ^ { 2 } } = R \left( \frac { \varepsilon } { k _ { B } T } \right) ^ { 2 } \frac { \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) } { \left( 1 - \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) \right) ^ { 2 } } . \tag{7}
\end{equation*}
$$

In order to approximate expressions in two limiting cases it is easier to use the expansions deduced in Subproblem 2. In the high temperature limit, we get

$$
\begin{align*}
& k _ { B } T \gg \varepsilon \\
& U = N _ { A } k _ { B } T \quad \Rightarrow \quad C _ { V } = R ^ { \cdot } \tag{8}
\end{align*}
$$

i.e. the molar heat capacity is a constant. Here $N _ { A }$ is the Avogadro constant, $N _ { A } k _ { B } = R$ stands for the universal gas constant.
At law temperatures,

$$
\begin{align*}
& U = N _ { A } \varepsilon \left( 1 + \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) \right) \Rightarrow \\
& C _ { V } = N _ { A } \varepsilon \frac { \varepsilon } { k _ { B } T ^ { 2 } } \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) = R \left( \frac { \varepsilon } { k _ { B } T } \right) ^ { 2 } \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) . \tag{9}
\end{align*}
$$

![](../../../figures/solution-ocr/2183e4dd046c3b134344843d.jpg)
Fig. 1

It is seen that the molar heat capacity goes to zero as the temperature vanishes. The schematic plot is drawn in figure 1.

4 [3 points] Calculation of the gas pressure can be conducted in different ways. For example, the average force exerted on the wall by a single atom is equal to the ratio of the moment transferred to the time interval between two consecutive collisions,

$$
\begin{equation*}
\left\langle f _ { n } \right\rangle = \frac { \Delta p } { \Delta \tau } = \frac { 2 m v _ { n } } { 2 L / v _ { n } } = \frac { m v _ { n } ^ { 2 } } { L } = 2 \frac { E _ { n } } { L } . \tag{10}
\end{equation*}
$$

To determine the pressure it is necessary to summarize those forces

$$
\begin{equation*}
P = \frac { \sum _ { n } N _ { n } \left\langle f _ { n } \right\rangle } { S } = \frac { 2 } { S L } \sum _ { n = 1 } ^ { \infty } N _ { n } E _ { n } = 2 \frac { U } { V } . \tag{11}
\end{equation*}
$$

Substituting the formula for the internal gas energy (3), we obtain

$$
\begin{equation*}
P = 2 \frac { N } { V } \frac { \varepsilon } { 1 - \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) } . \tag{12}
\end{equation*}
$$

In the two limiting cases the above obtained expressions for the internal energy should be used.

$$
\begin{align*}
& \text { At } k _ { B } T \gg \varepsilon \\
& \qquad P = 2 \frac { N } { V } k _ { B } T , \tag{13}
\end{align*}
$$

i.e. the pressure is proportional to the absolute temperature.
At low temperatures, we have


$$
\begin{equation*}
P = 2 \frac { N \varepsilon } { V } \left( 1 + \exp \left( - \frac { \varepsilon } { k _ { B } T } \right) \right) . \tag{14}
\end{equation*}
$$

At temperatures going to zero, the pressure tends to a constant value

$$
\begin{equation*}
P _ { 0 } = 2 \frac { N \varepsilon } { V } . \tag{15}
\end{equation*}
$$

The schematic plot of the pressure against the temperature is shown in figure 2.

![](../../../figures/solution-ocr/3ab716d3651809b1e814d17c.jpg)
