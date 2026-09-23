---
id: physicscup-wopho2013-p4
source: physicscup
native_id: "WoPhO 2013 Problem 4 (orig. Problem 9)"
name: "Physics Cup – WoPhO 2013 – Problem 4: High-efficiency LED"
origin: Physics-Cup-WoPhO-2013
author: Jaan Kalda
year: 2013
language: en
translated: false
url: https://physicscup.ee/archive/physics-cup-2013/
figure_files: []
topic: [thermodynamics, quantum-physics]
subtopic: [blackbody-radiation, carnot-efficiency, entropy, heat-pump]
math_tools: [calculus, dimensional-analysis]
format: open-ended
difficulty_norm: 5
difficulty_level: 6
core_ideas: []
techniques: [conservation-laws, limiting-and-special-cases, extremization]
has_solution: false
verification_status: unverified
---

**Problem 9: high-efficiency light emitting diode (idea contributed by Mihkel Heidelberg)**

**Introduction.** As compared to ordinary light bulbs, light emitting diodes (LED) provide very high lighting efficiency. The reason is that the spectral energy distribution of ordinary lamps is close to black body radiation, in which case one can say that the photons are in thermal equilibrium with the black body. Then, the total energy radiated by a black body per unit area, unit time, and unit frequency interval is given by Planck's law

$$I=\frac{2\pi h}{c^2}\frac{\nu^3}{e^{h\nu/kT}-1},$$

where $\nu$ is the frequency, $h=6.626\times10^{-34}\,\text{J}\cdot\text{s}$ — the Planck constant, $c=2.997\times10^8\,\text{m/s}$ — the speed of light, $k=1.38\times10^{-23}\,\text{J}\cdot\text{K}^{-1}$ — the Boltzmann constant, and $T$ — the temperature; note that

$$\int_0^\infty I\,d\nu=\sigma T^4,$$

where $\sigma=5.678\times10^{-8}\,\text{W}\cdot\text{m}^{-2}\cdot\text{K}^{-4}$ is the Stefan-Boltzmann constant. With a black body radiation, a lot of energy is wasted by radiating non-visible light. Meanwhile, LED-s can be constructed so that they radiate almost only visible light.

In recent experiments$^1$, it has been reported that such LED-s have been constructed which have efficiency higher that 100%. Here the efficiency is defined as the ratio of the radiated light energy to the consumed electrical energy.

**Problem.** Based on reasonable approximations, find what is the theoretically highest possible efficiency of a LED assuming that:

(a) the LED has a heat sink which is kept at the room temperature $T_0=293\,\text{K}$ (via a fast enough heat exchange with the surrounding medium);

(b) the LED emits light at wavelengths smaller than $\lambda_0=700\,\text{nm}$

(b) the surface area of the light-emitting part of the LED is $S=1\,\text{mm}^2$;

(c) the light emission power of the LED is $P=1\,\mu\text{W}$.

$^1$ P. Santhanam et al, *Thermoelectrically Pumped Light-Emitting Diodes Operating above Unity Efficiency*, Phys. Rev. Lett. **108**, 097403 (2012)

*Physics Cup / WoPhO 2013 Problem 4 ("Problem 9") by Jaan Kalda. Statement transcribed faithfully from the born-digital LaTeX source; the source PDF also contains hints and an official solution (not ingested here).*
