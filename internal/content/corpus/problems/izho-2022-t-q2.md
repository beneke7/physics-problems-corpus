---
id: izho-2022-t-q2
source: izho
native_id: "Problem 2. Greenhouse effect (10.0 points) <br> Introduction"
year: 2022
language: en
translated: false
topic: [thermodynamics, optics]
subtopic: [blackbody, planck-law, temperature, radiation, energy-conservation]
difficulty: null
difficulty_norm: 4
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 120
points: "\"10.0 points\""
has_solution: true
has_figure: true
figure_files: [izho-2022-t-q2-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2022_T.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [conservation-laws, scaling-and-dimensional-analysis, limiting-and-special-cases]
---

## Problem 2. Greenhouse effect (10.0 points) <br> Introduction

Any heated body, whose temperature $T$ is above absolute zero, radiates electromagnetic waves. The spectrum of this radiation, called thermal, depends on the optical properties of the body surface and its temperature. Despite the fact that the radiation of each body is its individual characteristic, general laws are well known that describe the thermal radiation.

Kirchhoff's law. In a state of thermodynamic equilibrium, the ratio of the emissivity of a body $r(\lambda, T)$ to its absorptivity $k(\lambda, T)$ is a universal function $r_{0}(\lambda, T)$ that does not depend on individual characteristics

$$
\frac{r(\lambda, T)}{k(\lambda, T)}=r_{0}(\lambda, T) .
$$

The value $r(\lambda, T) \Delta \lambda$ has the meaning of the energy emitted per unit area per unit time in a narrow wavelength range from $\lambda$ to $\lambda+\Delta \lambda$. The absorptivity of the body $k(\lambda, T)$ is a dimensionless absorption coefficient equal to the ratio of the radiation energy absorbed by the body to the total radiation energy incident on the body surface, if the wavelengths of the incident radiation lie in a narrow wavelength range from $\lambda$ to $\lambda+\Delta \lambda$. If the body completely absorbs all the incident electromagnetic radiation $k(\lambda, T)=1$, then such a body is called an absolute black body.

Wien's displacement law. The wavelength $\lambda_{\text {max }}$,, at which the function $\mathrm{r}_{0}(\lambda, T)$ has a maximum, is related to the absolute temperature by the relation

$$
\lambda_{\max } T=b,
$$

where $b=2.898 \cdot 10^{-3} \mathrm{~m} / \mathrm{K}$ is called the Wien constant.
Stefan-Boltzmann law. The total emissivity of a black body over all wavelengths is described by the formula

$$
R(T)=\int_{0}^{\infty} \quad r_{0}(\lambda, T) d \lambda=\sigma T^{4}
$$

where $\sigma=5.670 \cdot 10^{-8} W /\left(m^{2} \cdot K^{4}\right)$ stands for the Stefan-Boltzmann constant.
Using the Stefan-Boltzmann law, the formula for $r_{0}(\lambda, T)$ can be represented as

$$
r_{0}(\lambda, T)=\sigma T^{4} \varphi(\lambda, T) .
$$

Here, the Planck function $\varphi(\lambda, T)$ describes the energy distribution in the black body radiation spectrum; the value $\varphi(\lambda, T) \Delta \lambda$ is equal to the fraction of the thermal radiation energy per narrow spectral interval from $\lambda$ to $\lambda+\Delta \lambda$. The total area under the graph of the function $\varphi(\lambda, T)$ is equal to unity. In this problem, it is recommended to use the graphs of this function, shown in the figure below and plotted at temperatures $t=$ $0^{\circ} \mathrm{C}$ and $t=50^{\circ} \mathrm{C}$.

The Planck function
![](izho-2022-t-q2-fig01.png)

Model of the Earth and its atmosphere

Climate change associated with an increase in the average temperature of the atmosphere is now an established scientific fact. It is believed that the main cause of the global warming is the greenhouse effect. Solar radiation, whose main part lies in the visible region of the spectrum, passes almost completely through the atmosphere, and then is absorbed by the earth's surface. On the contrary, the thermal radiation of the earth's surface, which lies mainly in the infrared region of the spectrum, is significantly absorbed by certain atmospheric gases, mainly water vapor and carbon dioxide. In this problem, the simplest model of the greenhouse effect is considered and some numerical estimates are made of its influence on the atmospheric temperature.

The surface of the Earth is assumed to be an absolutely black body of a spherical shape, covered with a layer of the atmosphere, whose thickness is much less than the Earth radius. Conventionally, the atmosphere is divided into two parts: 1) the lower layer, directly adjacent to the earth's surface and having the same temperature as the earth's surface; 2) the upper (greenhouse) layer, capable of absorbing thermal radiation coming from the earth's surface. It is assumed that the transfer of energy between the Sun, the earth's surface and the atmosphere is carried out only through radiation, and the temperatures of the earth's surface and atmospheric layers are the same at all their points and do not depend on time, for example, on the time of day or year season. In the following, the solar constant $W=1.40 \cdot 10^{3} \mathrm{~W} / \mathrm{m}^{2}$ is considered known, which is the power of solar radiation incident on the unit area of the Earth, oriented perpendicular to the incident light.

## Atmosphere without the greenhouse effect

2.1 Evaluate the wavelength $\lambda_{\text {max } S}$, which corresponds to the maximum in the thermal radiation of the Sun, if the surface temperature of the Sun is approximately equal to $T_{S}=6500 \mathrm{~K}$.
2.2 Neglecting the absorption of the atmosphere and considering the earth's surface as an absolutely black body, evaluate the steady-state temperature of the Earth's surface $T_{0}$, and also determine this temperature $t_{0}$ in the Celsius scale. This temperature is called below as the "black earth" temperature.
2.3 Calculate the wavelength $\lambda_{\text {max } E}$, which corresponds to the maximum in the radiation of the "black earth".
2.4 Calculate the power of solar radiation $w$ per unit area of the Earth's surface.

## Various atmosphere models

In reality, the upper layer of the atmosphere effectively absorbs electromagnetic radiation of certain wavelengths in the infrared region of the spectrum. For example, the figure on the right shows the real dependence of the atmospheric transmission as a function of the wavelength. As can be seen, this dependence is rather complicated, therefore, in the problem below, several simplified models are considered.

Let $K$ be the total absorption coefficient of the upper layer of the atmosphere for the thermal radiation of the Earth, i.e. the ratio of the energy of the thermal radiation absorbed by the upper layer of the atmosphere to the total energy incident on the upper layer of atmosphere from the earth's surface.
2.5 Obtain the formula for the steady-state temperature of the Earth's surface $T_{1}$ and express it in terms of the "black earth" temperature $T_{0}$ and the absorption coefficient $K$.

## Maximum greenhouse effect

Let the upper layer of the atmosphere completely transmit the solar radiation and completely absorb the thermal radiation of the Earth.
2.6 Calculate how much the temperature of the Earth's surface $\Delta t_{1}=T_{1}-T_{0}$ increases compared to the temperature of the "black earth" due to the maximum greenhouse effect.

## Water greenhouse effect

Let the spectral absorption coefficient $k(\lambda)$ of the upper layer of the atmosphere be a known function of the wavelength $\lambda$ of the incident radiation and be independent of its temperature.
2.7 Express the total absorption coefficient of the upper atmosphere $K$ in terms of $k(\lambda)$ and the Planck distribution function $\varphi\left(\lambda, T_{1}\right)$,, where $T_{1}$ denotes the temperature of the Earth's surface.

Assume that the absorption in the upper layer of the atmosphere is completely due to water vapor. Approximately, it can be considered that water vapor completely absorbs radiation whose wavelengths lie in the range from 5.00 to $8.00 \mu \mathrm{~m}$, whereas the rest is completely transmitted.
2.8 Using the plots of the Planck distribution function given in the introduction section of this problem, calculate the numerical values of the total absorption coefficient $K$ of the upper atmosphere for two values of the Earth's surface temperatures $t_{1}=0^{\circ} \mathrm{C}$ and $t_{1}=50^{\circ} \mathrm{C}$.

In the above specified temperature range from $t_{1}=0^{\circ} \mathrm{C}$ to $t_{1}=50^{\circ} \mathrm{C}$, the dependence of the total absorption coefficient on the ground temperature $t_{1}$ is approximately described by a linear function of the temperature itself: $K\left(t_{1}\right)=K_{0}\left(1+\alpha t_{1}\right)$,, where $K_{0}, \alpha$ are some constants.
2.9 Calculate the numerical values of the parameters $K_{0}$ and $\alpha$.

In the following, assume that the temperature changes under question are small, so formulas of approximate calculus can be used.
2.10 Neglecting the dependence of the absorption coefficient of the atmosphere on the temperature and assuming it to be equal to the absorption coefficient at the temperature of the "black Earth" $T_{0}$, calculate the change in the temperature of the Earth's surface $\Delta t_{1}=T_{1}-T_{0}$.
2.11 Calculate the change in the temperature of the Earth's surface $\Delta t_{1}=T_{1}-T_{0} \ll T_{0}$ if the dependence of the atmospheric absorption coefficient on the temperature is described by the linear function of the earth's temperature as defined above.

## Amplification of the greenhouse effect by carbon dioxide

Let us take into account the effect of the absorption by carbon dioxide present in the atmosphere. At the current concentration of carbon dioxide in the atmosphere (approximately $0.05 \%$ ), it can be considered that carbon dioxide completely absorbs the radiation of the Earth in the wavelength ranges from 2.50 to 3.00 $\mu \mathrm{m}$ and from 6.50 to $7.00 \mu \mathrm{~m}$, and in the range from 16.0 to $18.0 \mu \mathrm{~m}$ the absorption coefficient equals 0.500. For other wavelengths, the absorption of radiation by carbon dioxide can be neglected.
2.12 Estimate how much, as compared to the water greenhouse effect model, the temperature of the Earth's surface increases due to the absorption of radiation by carbon dioxide.
2.13 Estimate how much, as compared to 2.12, the temperature of the Earth's surface increases if the concentration of carbon dioxide in the atmosphere increases by $\eta=2.00$ times as compared to its current concentration.
