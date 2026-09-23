---
id: eupho-2020-E1
source: eupho
native_id: "EuPhO 2020 Experimental Problem 1"
name: "EuPhO 2020 – Experiment E1: Hidden Charge"
origin: European-Physics-Olympiad-2020
author: European Physics Olympiad
year: 2020
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2020
figure_files: [eupho-2020-E1-1.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [electromagnetism, measurement]
subtopic: [coulomb-scattering, data-analysis, parameter-estimation]
math_tools: [geometry-trigonometry, calculus, probability-statistics]
format: open-ended
difficulty_norm: 5
difficulty_level: 5
core_ideas: []
techniques: [scaling-and-dimensional-analysis, graphical-reduction]
has_solution: true
verification_status: pending
---

## Experiment E1: Hidden Charge

### 1.1 Introduction

An unknown point charge $Q$ is fixed in a region of space. Electrons launched parallel to the $z$-axis far from the charge will scatter electrostatically off of the fixed charge and strike a detecting screen. It is possible to learn about the details of the hidden charge by varying the initial kinetic energy as well as the initial $x_i$ and $y_i$ coordinates of the electron beam and measuring the final coordinates $x_f$ and $y_f$ of where an electron strikes a finite flat screen perpendicular to the $z$-axis and located at $z = 0$.

It is useful to know the Rutherford scattering formula,

$$b = \frac{kqQ}{2E}\frac{1}{\tan(\theta/2)},$$

where $b$ is the impact parameter, $E$ is the energy of the electron, $q = -1.602 \times 10^{-19}\ \mathrm{C}$ is the charge of the electron, $k = 8.99 \times 10^{9}\ \mathrm{Nm^2/C^2}$, and $\theta$ is the scattering angle. The impact parameter is defined as the closest approach of the electron to the target, assuming that the electron were unaffected by the target and hence would move in a straight line; the scattering angle is the angle between the original velocity vector of the electron far from the target and the final velocity vector of the electron far from the target after scattering.

![figure](../../../../../sources/eupho/figures/eupho-2020-E1-1.png)

### 1.2 Task

The task is to determine the position $(x_Q, y_Q, z_Q)$ and also the magnitude and sign of the fixed charge $Q$, as precisely as possible. You should provide rough, order-of-magnitude error estimates on these results. There is Gaussian error associated with initial beam location that is on the order of 0.5 mm.

As with all experiments, you must provide clearly labelled tables of data, clearly labelled graphs, and sufficient formulae derivations to make it clear what you have measured and how you are deriving your results.

### 1.3 Program Interface

The program asks for an accelerating voltage with the prompt:

> Beam accelerating voltage in V:
> Enter a number between 1 and 10000, and press return.

The program then asks for the initial launch coordinates, starting with $x_i$:

> x-coordinate of the electron beam in cm:
> Enter a number between -20 and 20 and then press return.

Then for $y_i$:

> y-coordinate of the electron beam in cm:
> Enter a number between -20 and 20 and then press return.

After the three numbers have been entered, the program outputs:

> Electron beam fired with parameters (x, y, V) = [values]
> Electron detected at (x, y) = [values]

However, if the electron misses the finite-size screen:

> Electron not detected...

The program then repeats, allowing you to enter a new set of initial coordinates.

*European Physics Olympiad 2020, Experimental Problem 1. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX.*
