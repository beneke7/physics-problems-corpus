---
id: solution-ocr-gpho-2022-theory-solutions-t2
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2022_theory_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2022-t2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem T2. Global warming (10 points)

1. (2 pts) The total radiated power of the Sun is given by Stefan-Boltzmann's law:

$$
L _ { \odot } = 4 \pi R _ { \odot } ^ { 2 } \sigma T _ { \odot } ^ { 4 } .
$$

Here we used that the emissivity of the sun is 1.00.
Using Stefan-Boltzmann's law correctly for the Sun with its values for radius, emissivity, and temperature (0.5 pts)

As the radiation reaches Earth, it assumes an intensity given by the ratio of $L _ { \odot }$ and the area of a sphere of radius $D$ :

$$
I _ { 0 } = \frac { L _ { \odot } } { 4 \pi D ^ { 2 } } = \frac { R _ { \odot } ^ { 2 } \sigma T _ { \odot } ^ { 4 } } { D ^ { 2 } } = 1419 \mathrm {~W} .
$$

Arriving at the solar intensity or flux at Earth's distance from the Sun using the surface area, and getting the correct value within 25\% with units (0.2 + 0.2 + 0.1) (0.5 pts)

The cross-sectional area of Earth is $\pi R _ { \odot } ^ { 2 }$, hence the total solar power reaching Earth's surface before being absorbed is

$$
P _ { 0 } = I _ { 0 } \pi R _ { \odot } ^ { 2 } = \frac { R _ { \odot } ^ { 2 } \sigma T _ { \odot } ^ { 4 } } { D ^ { 2 } } R _ { 0 } ^ { 2 } \pi = 1.81 \times 10 ^ { 17 } \mathrm {~W} .
$$

Obtaining the solar power at Earth while using $I _ { 0 }$ and Earth's cross sectional area with correct value within 25\% and units (0.2 + 0.2 + 0.1) (0.5 pts)

The absorbed amount is $P _ { 0 } \alpha$. The duration of a year is $\Delta t = 365.24 \cdot 24 \cdot 60 \cdot 60 \mathrm {~s} = 3.15 \times 10 ^ { 7 } \mathrm {~s}$. Hence, the ratio of mankind's power consumption and the solar radiation is

$$
\frac { A } { P _ { 0 } \alpha \Delta t } = 2.20 \times 10 ^ { - 4 } .
$$

Combining $P _ { 0 }$ correctly with $\alpha = 0.7$ for 1 year in correct units with $A$ to get the ratio (0.2 + 0.3). Full mark for a value within 25\% (0.5 pts)
2. (1 pt) The average amount of solar radiation arriving on a unit area of Earth before being absorbed is $I _ { 1 } = P _ { 0 } / \left( 4 \pi R _ { \odot } ^ { 2 } \right) =$ $I _ { 0 } / 4 = 355 \mathrm {~W}$.
(0.3 pts)

Solar panels convert to power an intensity of $I _ { 1 } \eta$. Thus, the total area needed for the solar panels is

$$
A _ { S } = \frac { A } { \Delta t I _ { 1 } \eta } = 393000 \mathrm {~km} ^ { 2 } ,
$$

which is around 1.5 times bigger than the surface area of the Persian Gulf.

Combining $I _ { 1 }$ with the efficiency, A, and time (0.3 + 0.2 + 0.2). Full mark for a value within 25\% (0.7 pts)
3. (2 pts) Because the Earth is in thermal equilibrium, it must release the same amount of heat as it absorbs. The absorbed heat flux has two contributions, one is the absorbed flux $I _ { 1 } \alpha$ from the Sun
(0.5 pts) , and the other is the flux produced by Mankind $I _ { h } =$ $A / \left( \Delta t 4 \pi R _ { \odot } ^ { 2 } \right) = 0.0547 \mathrm {~W}$.
(0.5 pts)

The total absorbed and released flux are therefore $I _ { \text {tot } } =$ $I _ { 1 } \alpha + I _ { h }$.
(0.5 pts)

Humanity's contribution to the total flux is small, but we keep track of this for the sake of the next subtask. The ideal black body flux from the surface is $\sigma T _ { 0 } ^ { 4 }$ (note that we're missing $\varepsilon _ { 0 }$ because calculating the effective emissivity requires comparing the actual flux with ideal black body radiation) so the effective emissivity is given by

$$
\begin{equation*}
\varepsilon _ { \mathrm { eff } } = \frac { I _ { 1 } \alpha + I _ { h } } { \sigma T _ { 0 } ^ { 4 } } = 0.635 . \tag{0.5pts}
\end{equation*}
$$

4. (2 pts) If we remove humanity's contribution, then using similar thermodynamic equilibrium arguments, the total released flux must be equal to $I _ { 1 } \alpha$. If Earth's new temperature is $T _ { 1 }$, then $I _ { 1 } \alpha = \sigma \varepsilon _ { \text {eff } } T _ { 1 } ^ { 4 }$.
(0.5 pts)
0.5 for LHS and RHS each

Plugging in $\varepsilon _ { \text {eff } }$ from the previous part, we get

$$
\begin{equation*}
1 + \frac { I _ { h } } { I _ { 1 } \alpha } = \frac { T _ { 0 } ^ { 4 } } { T _ { 1 } ^ { 4 } } \tag{0.5pts}
\end{equation*}
$$

so the change in Earth's temperature is

$$
\begin{equation*}
\Delta T _ { 1 } = T _ { 0 } - T _ { 1 } = T _ { 0 } \left( 1 - \left( 1 + \frac { I _ { h } } { I _ { 1 } \alpha } \right) ^ { - 1 / 4 } \right) = 0.016 \mathrm {~K} \tag{0.5pts}
\end{equation*}
$$

Full mark for correct values within 25\%
5. (1.5 pts) Our system consists of Earth's surface and the atmospheric layers with greenhouse gases. Both must be in thermodynamic equilibrium. This is in contrast with the previous part where we could look at the total resulting system and its aggregated properties. If we denote the black body radiation being released from the surface with $I _ { s }$, then a fraction of $I _ { s } k$ is absorbed in the greenhouse gases and $I _ { s } k / 2$ (0.5 pts) is being directed back to the surface of the Earth (and the other $I _ { s } k / 2$ to space).
(0.5 pts)

Hence, the heat flux balance of the surface reads $I _ { 1 } \alpha + I _ { s } k / 2 =$ $I _ { s }$
(0.5 pts)
(we have neglected humanity's thermal contribution, as that leads to a negligible change in temperature $\Delta T _ { 1 } \ll \Delta T$ ). Therefore, $k = 2 \left( 1 - I _ { 1 } \alpha / I _ { s } \right)$.
(0.5 pts)

Additionally, we know that the emissivity of Earth's surface is $\varepsilon _ { 0 }$ so $I _ { s } = \varepsilon _ { 0 } \sigma T ^ { 4 }$, where $T$ is Earth's temperature. This gives us an analytic expression for $k$ :

$$
k = 2 \left( 1 - \frac { I _ { 1 } \alpha } { \varepsilon _ { 0 } \sigma T ^ { 4 } } \right) .
$$


For $T = T _ { 0 }$ we calculate $k _ { 0 } = 0.5886$ and for $T = T _ { 0 } - \Delta T$, $k _ { 1 } = 0.5708$. Therefore, the absorption factor of the greenhouse gases has changed by

$$
\begin{equation*}
\Delta k = k _ { 0 } - k _ { 1 } = 0.0178 , \tag{0.5pts}
\end{equation*}
$$

which on a global scale is very significant!
Full mark for correct values within 25\%
6. (1.5 pts) The Hadley circulation forms a big heat engine. The circulating air receives heat from Earth's surface at temperature $T _ { h } = T _ { 0 } = 15 ^ { \circ } \mathrm { C }$,
and releases heat in the form of radiation in the upper atmospheric layers at an effective temperature $T _ { c } \approx T _ { h } - 10 \mathrm {~km} / \left( 1 ^ { \circ } \mathrm { C } / 100 \mathrm {~m} \right) = 188 \mathrm {~K}$.
The released heat amount is constrained by the total heat radiated into space by the atmospheric gases found in the previous subtask, i.e. $P _ { \text {out } } \leq I _ { s } k _ { 0 } 2 \pi R _ { 0 } ^ { 2 } = \varepsilon _ { 0 } \sigma T ^ { 4 } k _ { 0 } 2 \pi R _ { 0 } ^ { 2 }$. .
On the other hand, the maximal efficiency of the heat engine corresponds to a Carnot cycle

$$
\eta \leq \frac { T _ { h } - T _ { c } } { T _ { h } } .
$$

(0.2 pts)

If the power going into the cycle is $P _ { \text {in } }$, then from conservation of energy we have $P _ { \text {in } } = P _ { \text {work } } + P _ { \text {out } }$, where $P _ { \text {work } }$ is the amount of wind energy produced on Earth. Further, $P _ { \text {work } } = P _ { \text {in } } \eta = \left( P _ { \text {work } } + P _ { \text {out } } \right) \eta$ so

$$
\begin{align*}
P _ { \text {work } } & = P _ { \text {out } } \frac { \eta } { 1 - \eta } \leq P _ { \text {out } } \frac { \frac { T _ { h } - T _ { c } } { T _ { h } } } { 1 - \frac { T _ { h } - T _ { c } } { T _ { h } } } \\
& = P _ { \text {out } } \left( \frac { T _ { h } } { T _ { c } } - 1 \right) \leq \varepsilon _ { 0 } \sigma T _ { 0 } ^ { 4 } k _ { 0 } 2 \pi R _ { 0 } ^ { 2 } \left( \frac { T _ { h } } { T _ { c } } - 1 \right) \\
& = 2.8 \times 10 ^ { 16 } \mathrm {~W} . \tag{0.3pts}
\end{align*}
$$

This is $P _ { \text {work } } \Delta t / A = 1000$ times bigger than humanity's total production.
(0.2 pts)

Full mark for correct values within 25\%
