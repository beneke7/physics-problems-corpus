---
id: eupho-2022-E1
source: eupho
native_id: "EuPhO 2022 Experimental Problem"
name: "EuPhO 2022 – Experimental E: Physics of illumination"
origin: European-Physics-Olympiad-2022
author: European Physics Olympiad
year: 2022
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2022
figure_files: [eupho-2022-E1-1.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [measurement, optics, thermodynamics, electromagnetism]
subtopic: [photometry, blackbody-radiation, luminous-efficacy, radiative-heating, color-index]
math_tools: [calculus, probability-statistics, numerical]
format: open-ended
difficulty_norm: 5
difficulty_level: 5
core_ideas: []
techniques: [graphical-reduction, scaling-and-dimensional-analysis]
has_solution: true
verification_status: pending
---
**E: Physics of illumination**

An incandescent light bulb produces light by heating a tungsten filament to a high enough temperature to emit black body radiation in the visible part of the spectrum, but a lot of energy is still wasted in the infrared part.

To quantify light as perceived by human vision, we use photometric units, which take into account sensitivity of the human eye to light of different wavelengths. The total amount of visible light emitted by a source into all directions is called **luminous flux**, measured in lumens [lm]. The amount of visible light received by a surface per unit of its area is called **illuminance**, in lux [$\text{lx} = \text{lm}/\text{m}^2$], and can be measured by a light meter.

When measuring quantities of light based solely on the energy it carries, we use radiometric units, which are expressed with conventional units of power. Radiometric counterpart of the luminous flux is **radiant flux**, measured in watts [W], and **irradiance** [$\text{W}/\text{m}^2$] is the counterpart of the illuminance.

Today you will study thermal and illumination properties of light sources. The three tasks are mostly independent from each other. Sketch your setup for each task. No error analysis is required for Tasks 1 & 2.

**Equipment (see also Fig. 1)**

A. Black and white plastic plate 3 mm thick with a stand. Both plates are good absorbers of infrared light.

B. Light meter with a stand. The light meter turns off automatically after 6 minutes – turn it back on with a long press on the on/off button. Pay attention to the units (lx, not fc). You may use the HOLD button to freeze the displayed value.

C. A light mounting stand with a round base, a weight for stability, and two interchangeable light modules: incandescent light bulb (**maximum voltage 12 V**) and LED (**maximum voltage 3.0 V, do not exceed 400 mA current**). You may use toothpicks to wedge the modules in place. Black paper is provided to shield your eyes while reading the instruments.

D. Infrared thermometer. The measurement reading is held after a short delay when the trigger is released. The measurements may have a substantial but constant systematic error.

E. Paper work mat with angular and distance grid.

F. Protractor.

G. Red, green and blue light filters in an envelope. If you have trouble telling the colours apart, raise the help card for assistance. (The filters are sensitive to heat. Keep them away from the light source.)

H. Power supply. (Bench-top supply with adjustable voltage and current limits, operating as a constant-current or constant-voltage source as appropriate; full operating instructions are provided with the apparatus.)

![figure](../../../../../sources/eupho/figures/eupho-2022-E1-1.png)

*Figure 1: Picture of equipment for experimental problems (protractor and black paper shield not shown).*

**Task 1 – Colour and temperature (4 pts)**

The colour of the black body radiation depends on its temperature. In astronomy, the temperature of stars is determined from their colour index, the ratio of illuminances measured through two different colour filters.

**(a)** Table 1 contains the illuminances measured through the red, green and blue filter for a standard incandescent light source at known temperatures. Choose suitable light filters and construct a calibration curve that relates the chosen colour index to the temperature.

**(b)** Measure the relationship between the electrical input power and the tungsten filament temperature. Plot the result over a relevant range.

**Task 2 – Luminous efficacy (8 pts)**

The performance of light sources is quantified by their **luminous efficacy**, measured in lumens per watt, as the ratio between the luminous flux and the consumed power. As a point of reference, the sun has luminous efficacy of 93 lm/W.

Measure the dependence of luminous efficacy on the electrical input power for both light sources across the range with detectable light output. Plot the results, one plot per light source. State all steps of the calculation procedure and present all the measured data.

**Task 3 – Radiative heating (8 pts)**

(The following task may be time consuming, plan your work accordingly.)

When light hits an object, some of it is absorbed. At moderate temperature differences between the object and the environment, we can model heat dissipation into the surroundings with the **heat transfer coefficient** $h$, in the form $P/A = h(T - T_0)$, where $T$ is the temperature of the surface, $T_0$ the temperature of the surroundings, and $P/A$ denotes the power lost to the environment due to dissipation, per unit area.

**(a)** Determine the heat transfer coefficient $h$ and the thermal conductivity $\lambda$ for the black plastic, and perform error analysis. Assume the material absorbs all received light and the incandescent light bulb emits all power in the form of electromagnetic radiation.

**(b)** Estimate the albedo (the fraction of the irradiance that is reflected instead of absorbed) of the white plastic and perform error analysis.

**Useful relations:** An area of a segment of a sphere with radius $r$ between polar angles $\theta_1$ and $\theta_2$ with $0 \le \theta_1 \le \theta_2 \le \pi$ is $\Delta A = 2\pi r^2 (\cos\theta_1 - \cos\theta_2)$.

**Table 1: Illuminances by an incandescent light source of a known temperature, measured through three colour filters at a fixed position of the light source and the light meter. The accuracy of the measurements is $\pm 2$ lx.**

| $T$ [K] | Red [lx] | Green [lx] | Blue [lx] |
|---|---|---|---|
| 1570 | 2 | 0 | 0 |
| 1600 | 4 | 0 | 0 |
| 1610 | 5 | 1 | 0 |
| 1620 | 6 | 2 | 0 |
| 1630 | 8 | 3 | 0 |
| 1640 | 10 | 4 | 0 |
| 1660 | 12 | 5 | 0 |
| 1670 | 14 | 6 | 0 |
| 1700 | 18 | 9 | 1 |
| 1730 | 24 | 14 | 3 |
| 1780 | 37 | 23 | 7 |
| 1820 | 51 | 34 | 11 |
| 1880 | 80 | 57 | 21 |
| 1940 | 120 | 91 | 36 |
| 2000 | 165 | 130 | 53 |
| 2060 | 230 | 194 | 80 |
| 2120 | 310 | 274 | 118 |
| 2160 | 379 | 348 | 155 |
| 2220 | 484 | 460 | 210 |
| 2260 | 586 | 570 | 264 |
| 2310 | 753 | 748 | 348 |
| 2350 | 888 | 929 | 440 |
| 2390 | 1032 | 1107 | 527 |
| 2460 | 1292 | 1452 | 697 |
| 2500 | 1577 | 1826 | 879 |
| 2540 | 1811 | 2198 | 1078 |

*European Physics Olympiad 2022, Experimental Problem. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from the source's Unicode glyphs to LaTeX. The verbose bench-top power-supply operating walkthrough (PDF p. 3) is omitted as apparatus instructions, not part of the physics task.*
