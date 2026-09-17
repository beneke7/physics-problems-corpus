---
id: eupho-2021-T2
source: eupho
native_id: "EuPhO 2021 Theory Problem 2"
name: "EuPhO 2021 – Theory T2: Thread around a cylinder"
origin: European-Physics-Olympiad-2021
author: European Physics Olympiad
year: 2021
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2021
figure_files: [eupho-2021-T2-1.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [mechanics]
subtopic: [friction, rope-and-thread, 3d-geometry, differential-equations]
math_tools: [calculus, differential-equations, geometry-trigonometry]
format: open-ended
difficulty_norm: 5
core_ideas: []
techniques: [differential-element, choose-reference-frame]
has_solution: true
verification_status: pending
---

One end of a thread is tied into a loop of length $L > 2\pi R$, and a cylinder of radius $R$ is put through the loop. The coefficient of friction between the thread and the cylinder is $\mu$. The free end of the thread is being pulled parallel to the axis of the cylinder (as shown by arrow in the photo below) while keeping the cylinder at rest. If the length of the loop is longer than a critical value, $L > L_0$, the loop can slide along the cylinder without changing its shape, otherwise the friction "locks" it into a place and increasing the pulling force would eventually just break the thread. Find this critical value $L_0$. The weight of the thread is to be neglected; the thread will not twist when being pulled.

![figure](../../sources/eupho/figures/eupho-2021-T2-1.png)

It might be useful to know that

$$
2\int \sqrt{1 + x^2}\, dx = x\sqrt{1 + x^2} + \operatorname{arcsinh} x,
$$

where $\operatorname{arcsinh} x \equiv \ln\!\left(x + \sqrt{1 + x^2}\right)$.

*European Physics Olympiad 2021, Theory Problem 2. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX.*
