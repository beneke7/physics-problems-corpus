---
id: solution-ocr-ipho-1992-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1992/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-1992-t3]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## PROBLEM 3 : A SATELLITE IN SUNSHINE

In this problem you will calculate the temperature of a space satellite. The satellite is assumed to be a sphere with a diameter of 1 m . All of the satellite remains at a uniform temperature. All of the spherical surface of the satellite is coated with the same kind of coating. The satellite is located near the earth but is not in the earth's shadow.

The surface temperature of the sun (its blackbody temperature) $\mathrm { T } _ { \text {sun } } = 6000 \mathrm {~K}$ and its radius is $6.96 \times 10 ^ { 8 } \mathrm {~m}$. The distance between the sun and the earth is $1.5 \times 10 ^ { 11 } \mathrm {~m}$. The sunlight heats the satellite to a temperature at which the blackbody emission from the satellite equals the power absorbed from the sunlight. The power per unit area emitted by a black body is given by Stefan-Boltzmann's law $P = \sigma T ^ { 4 }$ where $\sigma$ is the universal constant $5.67 \times 10 ^ { - 8 } \mathrm {~W} \cdot \mathrm {~m} ^ { - 2 } \mathrm {~K} ^ { - 4 }$. In the first approximation, you can assume that both the sun and the satellite absorb all electromagnetic radiation incident upon them.

1) Find an expression for the temperature $T$ of the satellite. What is the numerical value of this temperature?
2) The blackbody radiation spectrum $u ( T , f )$ of a body at temperature T obeys Planck's radiation law

$$
u ( T , f ) d f = \frac { 8 \pi k ^ { 4 } T ^ { 4 } } { c ^ { 3 } h ^ { 3 } } \frac { \eta ^ { 3 } d \eta } { e ^ { \eta } - 1 }
$$

where $\eta = h f / k T$ and $u ( T , f ) d f$ is the energy density of the electromagnetic radiation in a frequency interval $[ f , f + d f ]$. In the equation $h = 6.6 \times 10 ^ { - 34 } \mathrm {~J} \cdot \mathrm {~s}$ is Planck's constant, $k = 1.4$ $\times 10 ^ { - 23 } \mathrm {~J} \cdot \mathrm {~K} ^ { - 1 }$ is Boltzmann's constant, and $\mathrm { c } = 3.0 \times 10 ^ { 8 } \mathrm {~m} \cdot \mathrm {~s} ^ { - 1 }$ is the speed of light.

The blackbody spectrum, integrated over all frequencies $f$ and directions of emission, gives the total radiated power per unit area $\mathrm { P } = \sigma \mathrm { T } ^ { 4 }$ as expressed in the Stefan-Boltzmann law given above.

$$
\sigma = \frac { 2 \pi ^ { 5 } k ^ { 4 } } { 15 c ^ { 2 } h ^ { 3 } }
$$

The figure shows the normalized spectrum

$$
\frac { c ^ { 3 } h ^ { 3 } } { 8 \pi k ^ { 4 } } \frac { u ( T , f ) } { T ^ { 4 } }
$$

as a function of $\eta$.
In many applications it is necessary to keep the satellite as cool as possible. To cool the satellite, engineers use a reflective coating that reflects light above a cut-off frequency but does not prevent heat radiation at lower frequency from escaping. Assume that this (sharp) cut-off frequency corresponds to $\mathrm { hf } / \mathrm { k } = 1200 \mathrm {~K}$.


What is the new equilibrium temperature of the satellite? The exact answer is not needed. Therefore, do not perform any tedious integrations; make approximations where necessary. The integral over the entire range is

$$
\int _ { 0 } ^ { \infty } \frac { \eta ^ { 3 } d \eta } { e ^ { \eta } - 1 } = \frac { \pi ^ { 4 } } { 15 }
$$

and the maximum of $\eta ^ { 3 } / \left( e ^ { \eta } - 1 \right)$ occurs at $\eta \simeq 2.82$. For small $\eta$ you can expand the exponential function as $\mathrm { e } ^ { \eta } \approx 1 + \eta$.
3) If we now have a real satellite, with extending solar panels that generate electricity, the dissipated heat in the electronics inside the satellite acts as an extra source of heat. Assuming that the power of the internal heat source is 1 kW , what is the equilibrium temperature of the satellite in case 2 above?
4) A manufacturer advertises a special paint in the following way:
"This paint will reflect more than 90\% of all incoming radiation (both visible light and infrared) but it will radiate at all frequencies (visible light and infrared) as a black body, thus removing lots of heat from the satellite. Thus the paint will help keep the satellite as cool as possible."

Can such paint exist? Why or why not?
5) What properties should a coating have in order to raise the temperature of a spherical body similar to that of the satellite considered here above the temperature calculated in 1?

$$
\frac { c ^ { 3 } h ^ { 3 } } { 8 \pi k ^ { 4 } } \frac { u ( T , f ) } { T ^ { 4 } }
$$

![](../../../figures/solution-ocr/93166c40610079a76a2ad553.jpg)

$$
\eta = h f / k T
$$


## SOLUTION : PROBLEM 3

1. Over the whole surface of the sun, the emitted energy is $4 \pi R _ { \text {Sun } } ^ { 2 } \cdot \sigma T _ { \text {Sun } } ^ { 4 }$. All this energy passes through a spherical shell at earth's distance $R$, where the intensity now is $4 \pi R _ { \text {Sun } } ^ { 2 } \cdot \sigma T _ { \text {Sun } } ^ { 4 } / 4 \pi R ^ { 2 }$.
The satellite is a circular object absorbing
$$
\pi r _ { s a t } ^ { 2 } \cdot \frac { 4 \pi R _ { S u n } ^ { 2 } \cdot \sigma T _ { S u n } ^ { 4 } } { 4 \pi R ^ { 2 } }
$$
but a spherical object emitting $4 \pi r _ { s a t } ^ { 2 } \cdot \sigma T _ { s a t } ^ { 4 }$.
Equating this absorption and emission we get $T _ { \text {sat } } = T _ { \text {Sun } } \sqrt { \frac { R _ { \text {Sun } } } { 2 R } }$ giving $T _ { \text {sat } } =$ $289 \mathrm {~K} = 16 ^ { \circ } \mathrm { C }$.
2. We have to calculate what part of the absorbed power comes from the part of the spectrum below 1200 K .
$$
\eta _ { \text {cutoff } } = \frac { 1200 \mathrm {~K} } { 6000 \mathrm {~K} } = 0.2 \ll 1
$$
This fraction of power is
$$
\begin{aligned}
\delta & = \int _ { 0 } ^ { \eta _ { c u t o f f } } \frac { \eta ^ { 3 } d \eta } { e ^ { \eta } - 1 } / \int _ { 0 } ^ { \eta _ { \infty } } \frac { \eta ^ { 3 } d \eta } { e ^ { \eta } - 1 } \\
& \approx \int _ { 0 } ^ { \eta _ { c u t o f f } } \eta ^ { 2 } d \eta / \frac { \pi ^ { 4 } } { 15 } = \frac { \eta _ { c u t o f f } ^ { 3 } } { 3 } / \frac { \pi ^ { 4 } } { 15 } = 4.1 \cdot 10 ^ { - 4 }
\end{aligned}
$$
Now, the satellite is cold with respect to 1200 K so we ignore that a small part of the satellite blackbody emission will be retained. The energy balance is now
$$
4 \pi r _ { s a t } ^ { 2 } \cdot \sigma T _ { s a t } ^ { 4 } = \delta \cdot \pi r _ { s a t } ^ { 2 } \cdot \frac { 4 \pi R _ { S u n } ^ { 2 } \cdot \sigma T _ { S u n } ^ { 4 } } { 4 \pi R ^ { 2 } }
$$
by which the new satellite temperature is the previous corrected by a factor $\delta ^ { 1 / 4 }$
$$
T _ { \text {sat } } = \left( 4.1 \cdot 10 ^ { - 4 } \right) ^ { 1 / 4 } \cdot 289 \mathrm {~K} = 41 \mathrm {~K}
$$
3. The whole absorbed energy is
$$
\delta \cdot \pi r _ { s a t } ^ { 2 } \cdot \frac { 4 \pi R _ { S u n } ^ { 2 } \cdot \sigma T _ { S u n } ^ { 4 } } { 4 \pi R ^ { 2 } } = 0.5 \mathrm {~W}
$$
which is small (ignorable) compared to $P _ { \text {internal } } = 1 \mathrm {~kW}$. Thus the energy balance becomes
$$
P _ { \text {internal } } = 4 \pi r _ { s a t } ^ { 2 } \cdot \sigma T _ { s a t } ^ { 4 }
$$


## PROBLEM 3 : A SATELLITE IN SUNSHINE

giving $T _ { \text {sat } } = 274 \mathrm {~K} ( \eta = 4.38 )$. Note: strictly speaking, this is not accurate, because for a blackbody radiation of 274 K , some $33 \%$ of the emitted power lies above the 1200 K cutoff ! This means that the satellite has to be hotter, to emit all of the 1 kW in frequencies below the cutoff. The resulting integral equation is

$$
\left( \frac { \eta } { 4.38 } \right) ^ { 4 } = \int _ { 0 } ^ { \eta } \frac { \eta ^ { 3 } d \eta } { e ^ { \eta } - 1 } / \frac { \pi ^ { 4 } } { 15 }
$$

which can be solved numerically by iteration. The true solution is $\eta = 3.80$ corresponding to a temperature of 316 K .
4. The paint cannot exist, because it would violate the second law of thermodynamics. The physics textbook explanation is the principle of detailed balance, which means that for equilibrium to exist, the emission and absorption in a given frequency interval must match exactly. This should not be confused with the fact that reflection and absorption can be quite different. If the manufacturer's paint existed, one could create a temperature difference between two bodies in a closed system, and hence a perpetum mobile.
5. The coating should be transparent for high frequencies (in the range of the peak or tail of the sun's radiation), but reflective and hence insulating at low frequencies (the satellite temperature).
