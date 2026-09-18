---
id: solution-ocr-usapho-2024-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2024-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question B2
Solid Heat
In classical thermodynamics, a solid containing $N$ atoms has a heat capacity $C _ { V } = 3 N k _ { B }$. The two parts of this question are independent. In both parts, we assume the solid has constant volume.

a. In a simple quantum model of a solid, the energy is $E = \hbar \omega m$, where $m$ is the number of quanta and $\omega$ is a constant. Einstein showed that the entropy of such a solid is
$$
\frac { S } { k _ { B } } = ( 3 N + m ) \ln ( 3 N + m ) - m \ln ( m )
$$
up to a constant. According to the first law of thermodynamics, $d E = T d S$ for this system.
i. Find an expression for $m$ in terms of $N$ and the quantity $\alpha = \hbar \omega / k _ { B } T$.

Solution
Writing both sides of $d E = T d S$ in terms of $d m$ gives

$$
d E = \hbar \omega d m
$$

and

$$
T d S = k _ { B } T \ln \left( \frac { 3 N + m } { m } \right) d m
$$

Equating these and solving for $m$ gives

$$
m = \frac { 3 N } { e ^ { \alpha } - 1 } .
$$

ii. We want to see how quantum effects modify the familiar classical result in the limit $\alpha \ll 1$, where the quantum corrections are small. Write an approximate expression for $m$, including terms of order $\alpha$ but neglecting terms of order $\alpha ^ { 2 }$ or higher.

Solution
We Taylor expand the exponential, for

$$
m = \frac { 3 N } { \alpha + \alpha ^ { 2 } / 2 + \alpha ^ { 3 } / 6 + \ldots } = \frac { 3 N } { \alpha } \frac { 1 } { 1 + \alpha / 2 + \alpha ^ { 2 } / 6 + \ldots } .
$$

Since there's a $1 / \alpha$ in front, we need to expand the fraction to order $\alpha ^ { 2 }$, which means we need to use the geometric series formula to second order,

$$
\frac { 1 } { 1 + x } = 1 - x + x ^ { 2 } + \ldots
$$

where here $x = \alpha / 2 + \alpha ^ { 2 } / 6$. This gives the final answer,

$$
m = 3 N \left( \frac { 1 } { \alpha } - \frac { 1 } { 2 } + \frac { \alpha } { 12 } \right)
$$


iii. The heat capacity, with its leading quantum correction, is $C _ { V } \approx 3 N k _ { B } \left( 1 + b \alpha ^ { n } \right)$ for some constants $b$ and $n$. Find the values of $b$ and $n$.

## Solution

The heat capacity is

$$
C _ { V } = \frac { d E } { d T } = \hbar \omega \frac { d m } { d T } \approx 3 N \hbar \omega \frac { d } { d T } \left( \frac { k _ { B } T } { \hbar \omega } - \frac { 1 } { 2 } + \frac { \hbar \omega } { 12 k _ { B } T } \right) .
$$

Carrying out the derivative yields

$$
C _ { V } = 3 N k _ { B } \left( 1 - \frac { \alpha ^ { 2 } } { 12 } \right)
$$

from which we read off $b = - 1 / 12$ and $n = 2$.

b. A vertical cylinder is filled with a monatomic ideal gas, and capped by a movable piston. The temperature is high enough for the piston to be modeled as a classical solid. The gas and piston contain the same number of atoms, but the mass of the gas is negligible compared to that of the piston. Assume the entire cylinder is in vacuum, and that the gas and piston do not transfer heat to their environment, but always remain in thermal equilibrium with each other.
    i. When the piston is in mechanical equilibrium, the column of gas has height $h$ and pressure $P = P _ { 0 }$. At this point, find $d P / d h$ in terms of $P _ { 0 }$ and $h$.

## Solution

If $n$ is the number of moles of gas and solid, then the heat capacity of the gas-piston system, at constant volume and pressure, is

$$
C _ { V } = \frac { 3 } { 2 } n R + 3 n R , \quad C _ { P } = \frac { 5 } { 2 } n R + 3 n R
$$

because the solid does not expand, and hence its contribution to $C _ { P }$ is equal to its contribution to $C _ { V }$. Thus, the adiabatic index is

$$
\gamma = \frac { C _ { P } } { C _ { V } } = \frac { 11 } { 9 } .
$$

Since the system doesn't transfer heat to its environment, the quantity $P V ^ { \gamma }$ remains the same throughout the oscillations, where $V$ is the volume of the gas. Taking the differential of this relation, the pressure in the gas varies as

$$
\frac { d P } { d h } = - \frac { \gamma P _ { 0 } } { h } = - \frac { 11 P _ { 0 } } { 9 h } .
$$


ii. If the piston is given a small vertical impulse, what is the angular frequency of its subsequent oscillations? Give your answer solely in terms of $h$ and the gravitational acceleration $g$.


## Solution

The net force on the piston, as a function of vertical displacement $z$, is

$$
F _ { z } = - \frac { \gamma P _ { 0 } A } { h } z
$$

where $A$ is the piston's cross-sectional area. Newton's second law for the piston is

$$
F _ { z } = m \frac { d ^ { 2 } z } { d t ^ { 2 } }
$$

where $m$ is the mass of the piston. Combining the two previous equations yields simple harmonic motion with

$$
\omega ^ { 2 } = \frac { \gamma P _ { 0 } A } { m h } .
$$

To eliminate the unwanted parameters, we note that since the piston was originally in mechanical equilibrium, we have $P _ { 0 } A = m g$, from which we conclude

$$
\omega = \sqrt { \frac { \gamma g } { h } } = \sqrt { \frac { 11 g } { 9 h } } .
$$
