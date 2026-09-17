---
id: eupho-2021-E1
source: eupho
native_id: "EuPhO 2021 Experimental Problem 1"
name: "EuPhO 2021 – Experimental E1: Hidden wire"
origin: European-Physics-Olympiad-2021
author: European Physics Olympiad
year: 2021
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2021
figure_files: [eupho-2021-E1-1.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [electromagnetism, measurement]
subtopic: [magnetostatics, compass-deflection, linearisation, least-squares]
math_tools: [geometry-trigonometry, calculus, dimensional-analysis]
format: open-ended
difficulty_norm: 5
core_ideas: []
techniques: [graphical-reduction, scaling-and-dimensional-analysis]
has_solution: true
verification_status: pending
---

## Experimental setup and tasks

A very long copper wire runs horizontally at unknown depth $h$ under a horizontal square surface of side length $L = 100.0\text{ mm}$. The sides of the square are oriented West–East (the $x$-axis) and South–North (the $y$-axis), as shown in the figure. The origin of the coordinate system coincides with the South-West corner of the square.

![figure](../../sources/eupho/figures/eupho-2021-E1-1.png)

The wire is connected to an adjustable DC source (not shown in the figure), which can provide a current $I$ in the range from $-5\text{ A}$ to $5\text{ A}$. The reversal of the sign of the current corresponds to a reversal of the polarity of the source. A small compass can be placed on the square surface (including its circumference) to sense the magnetic field of the wire through the deflection angle $\varphi$ between the magnetic needle and the North ($y$) direction. Positive $\varphi$ values correspond to an Eastward deflection, as shown in the figure, while negative $\varphi$ correspond to a Westward deflection. You can assume that:

- The magnetic needle is a point-like magnetic dipole, which can rotate freely around the vertical axis, i.e. the compass is sensitive to the horizontal component of the magnetic field only.
- The height of the needle above the surface is negligible compared to the depth of the wire beneath the surface, i.e. the needle is situated in the $xy$-plane.

Design your experiment and make the necessary simulations to perform the following tasks:

a. Determine the orientation of the wire with respect to the coordinate system by specifying its equation in the form $y = ax + b$, and estimate the uncertainties of the parameters $a$ and $b$. Draw the wire position on a graph and indicate the direction corresponding to a positive current $I$.

b. Determine the depth $h$ of the wire below the surface and the horizontal component $B_E$ of the Earth's magnetic field. In this task you are not required to calculate the experimental uncertainties explicitly; however, your final results must be represented with an appropriate number of significant digits.

The magnetic permeability of free space is

$$\mu_0 = 4\pi \times 10^{-7}\text{ T m/A}.$$

---

## Description of the simulation software

The command line program simulates the measurement of the deflection angle $\varphi$ after providing the current $I$ and placing the compass at the coordinates $x$ and $y$ on the surface.

A typical output of a single simulation cycle:

```
Enter I (A) between -5.0 and 5.0: 3.4
Enter X (mm) between 0 and 100: 55
Enter Y (mm) between 0 and 100: 31
PHI = -33 degrees
-------------------------------
Enter I (A) between -5.0 and 5.0: _
```

First, you enter the current $I$ in A (a number between $-5.0$ and $5.0$), then coordinates $x$ and $y$ in mm (numbers between 0 and 100). Each input is confirmed with the Enter key. The program will output the value of $\varphi$ (PHI) in degrees (rounded to $1^\circ$) and return to the initial prompt.

The current input $I$ will be rounded to $0.1\text{ A}$; the coordinate inputs $x$, $y$ will be rounded to $1\text{ mm}$ before being used in simulation. (There is no point in trying to input more precise numbers.)

Every time you change the position of a compass, its real position used in simulation differs from the input coordinates with an error of about $0.5\text{ mm}$. (It is a simulation of a limited precision when you place an object.)

Any time you need to quit the program, press **Ctrl+C**.

*European Physics Olympiad 2021, Experimental Problem 1. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX.*
