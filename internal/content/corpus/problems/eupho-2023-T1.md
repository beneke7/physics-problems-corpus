---
id: eupho-2023-T1
source: eupho
native_id: "EuPhO 2023 Theory Problem 1"
name: "EuPhO 2023 – Theory T1: Thermal lens"
origin: European-Physics-Olympiad-2023
author: European Physics Olympiad
year: 2023
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2023
figure_files: [eupho-2023-T1-1.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [optics, thermodynamics]
subtopic: [thermal-lensing, heat-conduction, focal-length]
math_tools: [calculus, differential-equations, geometry-trigonometry]
format: open-ended
difficulty_norm: 5
core_ideas: [kalda-thermo-idea19]
techniques: [differential-element, model-reduction, limiting-and-special-cases]
has_solution: true
verification_status: pending
---
**T1: Thermal lens (10 pts)**

When an intense laser beam falls onto a semitransparent plate, the transmitted light can self-focus to a point behind the plate due to the inhomogeneous heating of the material. This effect, known as thermal lensing, is observed in materials whose index of refraction increases with temperature, characterized by a positive thermo-optic coefficient $\gamma = \frac{\mathrm{d}n}{\mathrm{d}T}$.

A semitransparent disk with radius $a = 15.0\,\mathrm{mm}$, thickness $b = 0.2\,\mathrm{mm}$ and optical absorption coefficient $A = 0.1$ is composed of a material having thermal conductivity $k = 0.3\,\mathrm{W\,m^{-1}\,K^{-1}}$ and thermo-optic coefficient $\gamma = 2.5 \cdot 10^{-4}\,\mathrm{K^{-1}}$. The outer rim of the disk is thermally connected to a circular metallic holder (not shown in the figure) maintained at a constant temperature $T_\mathrm{h} = 20\,^\circ\mathrm{C}$. A parallel laser beam of radius $\sigma = 0.5\,\mathrm{mm}$ and power $P_\mathrm{L} = 20\,\mathrm{mW}$ is incident normally onto the center of the disk. The intensity distribution is homogeneous across the cross-section of the beam.

![figure](../../../../../sources/eupho/figures/eupho-2023-T1-1.png)

a) (2 pts) Sketch a qualitative graph of the temperature profile $T(r)$, where $r$ denotes the distance from the axis of the beam. Indicate clearly on the graph the illuminated region $0 \le r \le \sigma$ and the outer region $\sigma \le r \le a$.

b) (4 pts) In the vicinity of the center of the disk, the temperature profile can be represented by a quadratic function $T(r) = T_\mathrm{c} + m r^2$. Calculate the parameters $T_\mathrm{c}$ and $m$.

c) (4 pts) Show that the beam is focused in one point and find the distance $f$ from this point to the disk. If you failed to obtain $T_c$ and $m$ in part b), you may use them as parameters in your final answer.

Do not consider the thermal expansion of the disk. Neglect the thermal radiation and the heat exchange between the disk and the surrounding air. Assume that the index of refraction of air is $n_\mathrm{air} = 1$.

*European Physics Olympiad 2023, Theory Problem 1. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX.*
