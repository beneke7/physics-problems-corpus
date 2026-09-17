---
id: "nbpho-2015-radiator"
source: "nbpho"
native_id: "2015 P5"
year: 2015
language: "en"
translated: false
topic: [thermodynamics, statistical-mechanics]
subtopic: [heat-transfer, conduction]
math_tools: [differential-equations, calculus]
format: "open-ended"
points: 8
core_ideas: []
has_figure: false
figure_files: []
verification_status: pending
provenance_note: "NBPhO 2015, Problem 5, by M. Heidelberg. Mathpix OCR of born-digital PDF (cache/phoxiv/nbpho/2015.pdf)."
links_hu: "nbpho-2015-radiator"
has_solution: true
solution_language: en
techniques: [graphical-reduction]
---

**5. RADIATOR (8 points)** — *M. Heidelberg*

Measure the heat transfer coefficient $h$ between the environment and an aluminium profile. $h=\frac{p}{T-T_{0}}$, where $p$ is the heat flux from the aluminium profile to air per unit of length; $T$ and $T_{0}$ are the temperatures of aluminium and the environment, respectively. For measurements, keep the aluminium profile flat on your table surface, to limit nonlinear effects from turbulence. Thermal conductivity of aluminium is $k=205 \mathrm{~W} /(\mathrm{K} \cdot \mathrm{m})$ and the cross-section of the profile is $A=36 \mathrm{~mm}^{2}$.

Hint: to describe the stationary temperature distribution along the profile we can derive a one-dimensional Helmholtz equation $T^{\prime \prime}(x)=\frac{h\left(T(x)-T_{0}\right)}{k A}$, the general solution of which is

$$T(x)=T_{0}+C_{1} e^{x \sqrt{\frac{h}{k A}}}+C_{2} e^{-x \sqrt{\frac{h}{k A}}},$$

where $C_{1}$ and $C_{2}$ are integration constants.

Equipment: Aluminium profile, wire (for heating), DC power source, infrared thermometer, ruler.

Keep the temperature of the wire below **150°C** as both the wire insulation and the table surface will start to emit smoke after that point!
