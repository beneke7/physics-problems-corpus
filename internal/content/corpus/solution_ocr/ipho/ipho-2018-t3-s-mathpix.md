---
id: solution-ocr-ipho-2018-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2018/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2018-t3]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
![](../../../figures/solution-ocr/2908f9ce3b2f29c9f2805662.jpg)

## Solutions to Theory Problem 3

# Physics of Live Systems

(Rui Travasso, Lucília Brito)

July 24, 2018


## Physics of Live Systems (10 points)

Part A. The physics of blood flow (4.5 points)
A. 1

Since the vessel network is symmetrical, the flow in a vessel of level $i + 1$ is half the flow in a vessel of level $i$.

In this way, we can sum the pressure differences in all levels:

$$
\Delta P = \sum _ { i = 0 } ^ { N - 1 } Q _ { i } R _ { i } = Q _ { 0 } \sum _ { i = 0 } ^ { N - 1 } \frac { R _ { i } } { 2 ^ { i } } .
$$

Introducing the radii dependences yields

$$
\Delta P = Q _ { 0 } \sum _ { i = 0 } ^ { N - 1 } \frac { 8 \ell _ { i } \eta } { 2 ^ { i } \pi r _ { i } ^ { 4 } } = Q _ { 0 } \frac { 8 \ell _ { 0 } \eta } { \pi r _ { 0 } ^ { 4 } } \sum _ { i = 0 } ^ { N - 1 } \frac { 2 ^ { 4 i / 3 } } { 2 ^ { i } 2 ^ { i / 3 } } = Q _ { 0 } N \frac { 8 \ell _ { 0 } \eta } { \pi r _ { 0 } ^ { 4 } } .
$$

Therefore

$$
Q _ { 0 } = \Delta P \frac { \pi r _ { 0 } ^ { 4 } } { 8 N \ell _ { 0 } \eta } .
$$

Hence, the flow rate for a vessel network in level $i$ is
A. 1
1.3pt

$$
Q _ { i } = \Delta P \frac { \pi r _ { 0 } ^ { 4 } } { 2 ^ { i + 3 } N \ell _ { 0 } \eta } .
$$

A. 2

Replace values in the formula and change units appropriately

$$
\begin{aligned}
Q _ { 0 } & = \frac { \Delta P \pi r _ { 0 } ^ { 4 } } { 8 N \ell _ { 0 } \eta } = \\
& = \frac { ( 55 - 30 ) \times 1.013 \times 10 ^ { 5 } \times 3.1415 \times \left( 6.0 \times 10 ^ { - 5 } \right) ^ { 4 } } { 760 \times 48 \times 2.0 \times 10 ^ { - 3 } \times 3.5 \times 10 ^ { - 3 } } = 4.0 \times 10 ^ { - 10 } \mathrm {~m} ^ { 3 } / \mathrm { s }
\end{aligned}
$$

to obtain the final value in the requested unites:
A. 2
0.5pt

$$
Q _ { 0 } \simeq 1.5 \mathrm {~m} \ell / \mathrm { h } .
$$


## A. 3

The current is given by

$$
I = \frac { P _ { \mathrm { in } } \mathrm { e } ^ { i \omega t } } { R + i \omega L + \frac { 1 } { i \omega C } }
$$

The pressure difference in the capacitor is

$$
P _ { \text {out } } \mathrm { e } ^ { i ( \omega t + \phi ) } = \frac { P _ { \text {in } } \mathrm { e } ^ { i \omega t } } { R + i \omega L + \frac { 1 } { i \omega C } } \frac { 1 } { i \omega C } = \frac { P _ { \text {in } } \mathrm { e } ^ { i \omega t } } { i \omega C R - \omega ^ { 2 } L C + 1 } .
$$

The amplitude is

$$
P _ { \mathrm { out } } = \frac { P _ { \mathrm { in } } } { \sqrt { \left( 1 - \omega ^ { 2 } L C \right) ^ { 2 } + \omega ^ { 2 } C ^ { 2 } R ^ { 2 } } } .
$$

To be smaller than $P _ { \text {in } }$, for $\omega \rightarrow 0$ :

$$
\left( 1 - \omega ^ { 2 } L C \right) ^ { 2 } + \omega ^ { 2 } C ^ { 2 } R ^ { 2 } > 1 \Longleftrightarrow - 2 C L + C ^ { 2 } R ^ { 2 } > 0 .
$$

Replacing the expressions for $L , C$, and $R$ we get: $\frac { 64 \eta ^ { 2 } \ell ^ { 2 } } { 3 E h r ^ { 3 } \rho } > 1$.
A. 3
2.0pt

$$
P _ { \mathrm { out } } = \frac { P _ { \mathrm { in } } } { \sqrt { \left( 1 - \omega ^ { 2 } L C \right) ^ { 2 } + \omega ^ { 2 } C ^ { 2 } R ^ { 2 } } } .
$$

Condition:

$$
\frac { 64 \eta ^ { 2 } \ell ^ { 2 } } { 3 E h r ^ { 3 } \rho } > 1
$$

Alternative way to obtain $P _ { \text {out } }$ :
The amplitude of the current in the equivalent circuit is $I _ { 0 } = \frac { P _ { \text {in } } } { Z }$, where

$$
Z = \sqrt { R ^ { 2 } + \left( \omega L - \frac { 1 } { \omega C } \right) ^ { 2 } }
$$

is the modulus of the impedance. Hence, the voltage amplitude in the capacitor is

$$
P _ { \mathrm { out } } = \frac { 1 } { \omega C } \times I _ { 0 } = \frac { P _ { \mathrm { in } } } { \sqrt { \omega ^ { 2 } C ^ { 2 } R ^ { 2 } + \left( \omega ^ { 2 } L C - 1 \right) ^ { 2 } } } .
$$

## A. 4

The previous condition can also be expressed as

$$
h < \frac { 64 \eta ^ { 2 } \ell ^ { 2 } } { 3 E r ^ { 3 } \rho } .
$$

For the network referred to in A. 2

$$
h < \frac { 64 \eta ^ { 2 } \ell _ { 0 } ^ { 2 } \times 2 ^ { i } } { 3 \times 2 ^ { 2 i / 3 } E r _ { 0 } ^ { 3 } \rho } = \frac { 64 \times \left( 3.5 \times 10 ^ { - 3 } \right) ^ { 2 } \times \left( 2.0 \times 10 ^ { - 3 } \right) ^ { 2 } } { 3 \times 0.06 \times 10 ^ { 6 } \times \left( 6.0 \times 10 ^ { - 5 } \right) ^ { 3 } \times 1.05 \times 10 ^ { 3 } } \times 2 ^ { i / 3 } = 7.7 \times 10 ^ { - 5 } \times 2 ^ { i / 3 } .
$$


CHOMMATE

$$
\theta
$$

ன T
" " +

Part B. Tumor growth (5.5 points)
B. 1

The expressions for the masses of tumour and normal tissue are written as:

$$
\left\{ \begin{array} { l }
M _ { \mathrm { T } } = V _ { \mathrm { T } } \rho _ { \mathrm { T } } = V _ { \mathrm { T } } \rho _ { 0 } \left( 1 + \frac { p } { K _ { \mathrm { T } } } \right) \\
M _ { \mathrm { N } } = V \rho _ { 0 } = \left( V - V _ { \mathrm { T } } \right) \rho _ { 0 } \left( 1 + \frac { p } { K _ { \mathrm { N } } } \right)
\end{array} \right.
$$

The pressure, $p$, can be expressed as

$$
p = \frac { M _ { \mathrm { T } } K _ { \mathrm { T } } } { V _ { \mathrm { T } } \rho _ { 0 } } - K _ { \mathrm { T } }
$$

and, then, used in the equation for $M _ { \mathrm { N } }$ :

$$
M _ { \mathrm { N } } = \left( V - V _ { \mathrm { T } } \right) \frac { M _ { \mathrm { N } } } { V } \left[ \left( 1 - \frac { K _ { \mathrm { T } } } { K _ { \mathrm { N } } } \right) + \frac { M _ { \mathrm { T } } V K _ { \mathrm { T } } } { V _ { \mathrm { T } } M _ { \mathrm { N } } K _ { \mathrm { N } } } \right]
$$

Simplifying and rearranging the terms, the equation for $v$ becomes

$$
( 1 - \kappa ) v ^ { 2 } - ( 1 + \mu ) v + \mu = 0 ,
$$

for which the solution is (the other solution of the quadratic equation is not physically relevant since does not lead to $v = 0$ for $\mu = 0$ )
B. 1 1.0pt

$$
v = \frac { 1 + \mu - \sqrt { ( 1 + \mu ) ^ { 2 } - 4 \mu ( 1 - \kappa ) } } { 2 ( 1 - \kappa ) } .
$$

B. 2

For $r < R _ { \mathrm { T } }$, the conservation of energy implies that

$$
4 \pi r ^ { 2 } ( - k ) \frac { \mathrm { d } T } { \mathrm {~d} r } = \mathcal { P } \frac { 4 } { 3 } \pi r ^ { 3 } .
$$


□ WALE
－
Goopoun
GC⿱丷⿱二小ఞ Cameactrow

$$
- \frac { \pi } { 20 }
$$

GCO
![](../../../figures/solution-ocr/f4f8ba45fa7ffb3c02212a4a.jpg)
R
Godesoresonation
＂＂ ox

B． 3

The increase in temperature at the tumour surface（the lower temperature in the tumour）is

$$
\Delta T \left( R _ { \mathrm { T } } \right) = \frac { \mathcal { P } R _ { \mathrm { T } } ^ { 2 } } { 3 k } .
$$

This increase should be equal to 6．0 K．Therefore，

$$
\mathcal { P } = \frac { 3 \Delta T k } { R _ { \top } ^ { 2 } } = \frac { 3 \times 6 \times 0.6 } { 0.05 ^ { 2 } } = 4.3 \mathrm {~kW} / \mathrm { m } ^ { 3 } .
$$

B． $3 \mathcal { P } _ { \text {min } } = 4.3 \mathrm {~kW} / \mathrm { m } ^ { 3 }$ ． 0．5pt

B． 4

We can relate $\delta r$ with the pressure in the tumour，using the relation given in the text up to leading order in $p - P _ { \text {cap } } : \delta r = \frac { p - P _ { \text {cap } } } { 2 \left( p _ { \mathrm { c } } - P _ { \text {cap } } \right) } \delta r _ { \mathrm { c } }$ ．Therefore，if $p - P _ { \text {cap } }$ is very small，also it is $\delta r$ ．

The pressure can be related with the volume．We know that

$$
\frac { M _ { \mathrm { N } } } { V _ { \mathrm { N } } } = \frac { \rho _ { 0 } V } { V - V _ { \mathrm { T } } } = \frac { \rho _ { 0 } } { 1 - v } = \rho _ { 0 } \left( 1 + \frac { p } { K _ { \mathrm { N } } } \right) .
$$


＂
－

$$
\begin{aligned}
& \text { முன்னுறை } \\
& \text { - }
\end{aligned}
$$

＂渾可以
－

$$
6
$$

![](../../../figures/solution-ocr/9d6aa0c29551c825ae5aa0c8.jpg)
＂
