---
id: solution-ocr-usapho-2019-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2019-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

## Stellar Black Box

Scientists have recently detected a new star, the MAR-Kappa. The star is almost a perfect blackbody, and its measured light spectrum is shown below.
![](../../../figures/solution-ocr/bde2391038a1551585317701.jpg)

The total measured light intensity from MAR-Kappa is $I = 1.12 \times 10 ^ { - 8 } \mathrm {~W} / \mathrm { m } ^ { 2 }$. The mass of MAR-Kappa is estimated to be $3.5 \times 10 ^ { 30 } \mathrm {~kg}$. It is stationary relative to the sun. You may find the Stefan-Boltzmann law useful, which states the power emitted by a blackbody with area $A$ is $\sigma A T ^ { 4 }$.

## Solution

Note: because a range of answers were accepted for part (a), credit was given for later subparts if they were consistent with the value given in part (a).

a. The spectrum of wavelengths $\lambda$ emitted from a blackbody only depends on $h , c , k _ { B } , \lambda$, and $T$. Given that the sun has a surface temperature of 5778 K and peak emission at 500 nm , what is the approximate surface temperature of MAR-Kappa?

## Solution

By dimensional analysis, we have two energy scales $- h c / \lambda$ and $k _ { B } T$. Then, we have that $h c / \lambda _ { \text {max } } \propto k _ { B } T$. The diagram has a peak around 360 nm , so, because $\lambda \propto T ^ { - 1 }$, we see a peak around 8030 K. We accepted any answer within ±500 K of 8000 K.

b. The "lines" in the spectrum result from atoms in the star absorbing specific wavelengths of the emitted light. One contribution to the width of the spectral lines is the Doppler shift associated with the thermal motion of the atoms in the star. The spectral line at $\lambda = 389 \mathrm {~nm}$ is due to helium. Estimate to within an order of magnitude the thermal broadening $\Delta \lambda$ of this line. The mass of a helium atom is $6.65 \times 10 ^ { - 27 } \mathrm {~kg}$.


## Solution

The rms velocity of the atoms in the star, in the direction towards Earth, is about $\sqrt { \frac { k _ { B } T } { m } } =$ $4080 \mathrm {~m} / \mathrm { s }$. The red shift is thus $\frac { v } { c } \approx 1.4 \times 10 ^ { - 5 }$, and so $\Delta \mathrm { 人 } \approx 5.3 \times 10 ^ { - 3 } \mathrm {~nm}$. This thermal broadening is very insignificant.

c. Over the course of a year, MAR-Kappa appears to oscillate between two positions in the background night sky, which are an angular distance of $1.6 \times 10 ^ { - 6 }$ rad apart. How far away is MAR-Kappa? Assume that MAR-Kappa lies in the same plane as the Earth's orbit, which is circular with radius $1.5 \times 10 ^ { 11 } \mathrm {~m}$.

## Solution

This is a parallax effect, as shown in the below diagram:
![](../../../figures/solution-ocr/605dedfcddecbc0b6cc1ff2c.jpg)
The angle Earth makes with MAR-Kappa is the angular shift it makes in the night sky. Then we have that $D = R _ { E S } / ( \theta / 2 ) = 1.9 \times 10 ^ { 17 } \mathrm {~m}$.

d. What is the radius of MAR-Kappa?

\section*{Solution}
The luminosity (total power given off by the star) is given by
$$
4 \pi D ^ { 2 } I = L = 4 \pi \left( 1.9 \times 10 ^ { 17 } \mathrm {~m} \right) ^ { 2 } \cdot \left( 1.12 \times 10 ^ { - 8 } \mathrm {~W} / \mathrm { m } ^ { 2 } \right) = 5.1 \times 10 ^ { 27 } \mathrm {~W} ,
$$
with $D$ the distance from Earth to MAR-Kappa. The radius of the star is given by $\sqrt { L / \left( 4 \pi \sigma T ^ { 4 } \right) } = 1.3 \times 10 ^ { 9 } \mathrm {~m}$.

Over the course of some time, you observe that the star's intensity periodically dips from $I$ to $\left( 1 - 10 ^ { - 5 } \right) I$ and then rises back to $I$, with period $t$. One possible explanation for this observation is that an exoplanet is orbiting the star and blocking the starlight for some time.

e. Estimate the exoplanet's radius, assuming that it is much closer to the star than to the Earth.

\section*{Solution}
The planet is sufficiently close to the star that we can just take the ratio of areas. Then, $R _ { p } ^ { 2 } / R _ { s } ^ { 2 } = 10 ^ { - 5 }$, so $R _ { p } = 10 ^ { - 2.5 } R _ { s } = 4.1 \times 10 ^ { 6 } \mathrm {~m}$.
f. Assume the exoplanet is a blackbody with uniform temperature in a circular orbit around the star. What must $t$ be so that the planet has a temperature of 250 K? (If this were true, and the planet had an appropriate atmosphere, the temperature would increase enough to support life.) Copyright ©2019 American Association of Physics Teachers


## Solution

Suppose the planet is $r$ away from the star. Then, the power from the star absorbed by the planet is

$$
\frac { L \left( \pi R _ { p } ^ { 2 } \right) } { 4 \pi r ^ { 2 } } = \frac { L R _ { p } ^ { 2 } } { 4 r ^ { 2 } } .
$$

The planet radiates heat with power $4 \pi R _ { p } ^ { 2 } \sigma T _ { p } ^ { 4 }$. Setting the two equal gives $\frac { L } { 16 \pi r ^ { 2 } } = \sigma T _ { p } ^ { 4 }$. Then,

$$
r = \frac { 1 } { 4 T _ { p } ^ { 2 } } \sqrt { \frac { L } { \pi \sigma } } = 6.75 \times 10 ^ { 11 } \mathrm {~m} .
$$

Recall that for a circular orbit,

$$
v = \sqrt { \frac { M _ { S } G } { r } } ,
$$

so

$$
\frac { 2 \pi r } { t } = \sqrt { \frac { M _ { S } G } { r } } .
$$

Therefore,

$$
t = 2 \pi \sqrt { \frac { r ^ { 3 } } { M _ { S } G } } = 7.3 \mathrm { yr }
$$
