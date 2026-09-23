---
id: eupho-2020-E2
source: eupho
native_id: "EuPhO 2020 Experimental Problem 2"
name: "EuPhO 2020 – Experiment E2: Black Box"
origin: European-Physics-Olympiad-2020
author: European Physics Olympiad
year: 2020
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2020
figure_files: [eupho-2020-E2-1.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [mechanics, oscillations-and-waves, measurement]
subtopic: [coupled-oscillators, spring-mass, parameter-estimation, simulation]
math_tools: [differential-equations, calculus, probability-statistics]
format: open-ended
difficulty_norm: 5
difficulty_level: 5
core_ideas: []
techniques: [superposition, scaling-and-dimensional-analysis]
has_solution: true
verification_status: pending
---

## Experiment E2: Black Box

### 2.1 Introduction

You have a rigid mechanical black box consisting of a container of mass $m_1$. Inside the container there is a load of mass $m_2$ that hangs on an effectively massless spring of stiffness $k_1$ from the ceiling of the box. Another mass $m_3$ is hanged to the mass $m_2$ via another massless spring of stiffness $k_2$. There is a small viscous drag which depends on the velocity of the objects. The gravity of Earth is $g = 9.81\ \mathrm{m/s^2}$ and is parallel to the sides of the box.

![figure](../../../../../sources/eupho/figures/eupho-2020-E2-1.png)

The box can be moved up or down with a piece-wise constant acceleration. The acceleration pattern can be programmed through input by giving the duration (in seconds) and acceleration (in $\mathrm{m/s^2}$) for each step. The simulation shows in "real time" the force $F$ exerted on the box that is needed to maintain the given acceleration, together with the reading of time. Note: every measurement of force $F$ has a small random error. The springs are linear for reasonably small deformations, but nonlinear for larger deformations. The values $k_1$ and $k_2$ are defined to be the stiffness of each spring for small deformations near equilibrium when the box is at rest. Force $F$ and acceleration are considered to be positive if they are directed upwards. The side length of the box is 0.6 m and the box is initially in the middle of a room with height 3 m. An experiment ends automatically if the box hits the ceiling or the floor, or if any of the masses collide with the box or with the other mass. The figure is not drawn to scale.

### 2.2 Task

The task is to determine all the parameters: $m_1$, $m_2$, $m_3$, $k_1$, $k_2$. You do not need to provide an error analysis for these results.

As with all experiments, you must provide clearly labelled tables of data, clearly labelled graphs, and sufficient formulae derivations to make it clear what you have measured and how you are deriving your results.

### 2.3 Program Interface

Initially, the program asks for a sequence of input actions. You have the following possibilities:

- Enter two numbers and press return to add a step to the acceleration pattern, for example: `1.5 -0.4`. The first number is the duration in seconds (must be a multiple of 0.01 s) and the second is the acceleration in $\mathrm{m/s^2}$ (must be between $-30$ and $30$).
- Enter `repeat` and an integer to repeat actions, for example: `repeat 10`. Every repeat action must end with `endrepeat`.
- Enter `endrepeat` to end repeating actions. You cannot repeat actions inside another repeat.
- Enter `sample` and a number to change the sampling time in seconds (must be a multiple of 0.01 s; default 0.01 s), for example: `sample 0.4`.
- Enter `begin` to finish the sequence and start the experiment.

For example, to start an experiment with sampling time 0.4 s and alternate accelerations $a = 0.4\ \mathrm{m/s^2}$ and $a = -0.4\ \mathrm{m/s^2}$ ten times:

```
sample 0.4 repeat 10 1.5 0.4 1.5 -0.4
endrepeat begin
```

After entering `begin`, the program asks for an output file name, then displays and saves columns: Time (s), Force (N), Accel (m/s²). The experiment ends with one of: `Experiment ended successfully`, `The box hit the ceiling`, `The box hit the floor`, or `Masses and/or the box collided`.

*European Physics Olympiad 2020, Experimental Problem 2. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX.*
