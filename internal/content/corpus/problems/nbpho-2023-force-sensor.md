---
id: nbpho-2023-force-sensor
source: nbpho
native_id: "2023 P5 Force sensor"
year: 2023
language: en
translated: false
topic: [mechanics, electromagnetism, measurement]
subtopic: [strain-gauge, beam-bending, wheatstone-bridge]
math_tools: [calculus, algebra, geometry-trigonometry]
format: open-ended
points: 5
core_ideas: [kalda-mechanics-idea39, kalda-mechanics-idea34]
has_figure: true
figure_files: [nbpho-2023-force-sensor-fig1.jpg, nbpho-2023-force-sensor-fig2.jpg]
provenance_note: "NBPhO 2023, Problem 5, by Päivo Simson. Extracted from born-digital PDF (cache/phoxiv/nbpho/2023.pdf) via Mathpix OCR."
verification_status: pending
has_solution: true

solution_language: en
---

**5. Force sensor (5 points)** — *Päivo Simson.*

A force sensor is constructed from a flexible beam of working length $L$ and height $h$ to which four identical electrically resistive wires of length $l \ll L$ are attached, as shown in the figure below. If a force $F$ is applied to the end of the beam, it will bend the beam and stretch the upper wires and compress the lower ones, causing changes in the electrical resistance. Using the Wheatstone bridge method, these changes can be converted into a voltmeter reading, allowing for the measurement of the applied force $F$.

![Force sensor setup](sources/nbpho/figures/nbpho-2023-force-sensor-fig1.jpg)

In what follows, assume that the deflection of the beam is very small.

**i)** *(2 points)* The bending moment $M(x)$ (i.e. the torque with which one fictitious half of the beam affects the other) is inversely proportional to the curvature radius $r(x)$ of the center line of the beam: $M=E I / r$, where $E$ is Young's modulus and $I$ is a constant depending on the geometry of the of the beam's cross-section (both are known). Find the elongation $\Delta l$ of the upper wire when a force $F$ is applied to the sensor. Assume that the wires are placed in the middle of the beam.

**ii)** *(1 point)* Find the resistances $R_{1}$ and $R_{2}$ when $\Delta l$ from the previous section is known and the initial resistance of the wires is $R_{0}$. Assume that the volume of the wire remains constant during the deformation.

**iii)** *(2 points)* The resistors are arranged in a Wheatstone bridge configuration shown in the figure below, where $U$ is the known battery voltage. Find the relationship between the measured voltage $V$ and the force $F$.

![Wheatstone bridge circuit](sources/nbpho/figures/nbpho-2023-force-sensor-fig2.jpg)
