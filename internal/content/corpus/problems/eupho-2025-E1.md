---
id: eupho-2025-E1
source: eupho
native_id: "EuPhO 2025 Experimental Problem 1"
name: "EuPhO 2025 – Experiment E1: Deep Learning"
origin: European-Physics-Olympiad-2025
author: European Physics Olympiad
year: 2025
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2025
figure_files: [eupho-2025-E1-1.png, eupho-2025-E1-2.png, eupho-2025-E1-3.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [electromagnetism, measurement]
subtopic: [circuits, nonlinear-elements, sigmoid-function, neural-networks]
math_tools: [calculus, geometry-trigonometry]
format: open-ended
difficulty_norm: 5
core_ideas: [kalda-circuits-idea24]
techniques: [model-reduction, graphical-reduction, limiting-and-special-cases]
has_solution: true
verification_status: pending
---
**E1 – Deep Learning (10 pts)**

Modern ANNs (artificial neural networks) are made of billions of neurons. Each neuron transforms its input(s) $x_1, x_2, \ldots, x_n$ to an output $y$. First,

$$z = w_1 x_1 + w_2 x_2 + \cdots + w_n x_n + b$$

is calculated, with real-numbered weights $w_i$ and real-numbered bias $b$. Then an activation function is applied to $z$ to produce the final output $y(x_1, x_2, \ldots)$. In the present problem you will investigate a physical model of a neuron with the electric voltages $x_1$ and $x_2$ as inputs, with the activation function being $A\sigma(z)$, graphed below, where $\sigma(z) = 1/(1+\exp(-z))$ is called the sigmoid function.

![figure](../../../../../sources/eupho/figures/eupho-2025-E1-1.png)

The neuron circuit operates as shown below:

![figure](../../../../../sources/eupho/figures/eupho-2025-E1-2.png)

**Equipment**

**Important! Do not switch off any power outlets.**

(i) A box containing a voltage source, an electronic circuit that models the neuron, and two potentiometers (the A-potentiometer and the B-potentiometer). The electric terminals on the box are denoted as follows:

1. Two electrically connected GND terminals: the electrical ground serving as a common negative terminal for +V, $x_1$, $x_2$, and $y$.
2. +V: the positive terminal of the voltage source.
3. X1 and X2: the positive terminals of the neuron input voltages $x_1$ and $x_2$, respectively. The neuron output behaves unpredictably if either of these terminals has no input voltage.
4. Y: the positive output terminal. It behaves like a real voltage source, consisting of an ideal voltage source of voltage $y$ and a series output resistor $R_\text{out}$, and operates as shown above.
5. A1, A2, A3: terminals of the A-potentiometer.
6. B1, B2, B3: terminals of the B-potentiometer.
7. T: a terminal not to be used in this task.

(ii) Digital multimeter with two probe wires.
(iii) Wires with banana connectors. Two or more wires could be connected to the same terminal in the box by using the holes in the banana connectors. Using the banana connectors with the multimeter may form an unstable connection. Use the alligator clamp if needed.
(iv) Graph paper. You can ask for more if needed.

---

**Task 1 (0.5 pts)**

Terminals A1, A2, and A3 are connected to the A-potentiometer $R_P$ and an additional load resistor $R_L$. Which of the schemes below corresponds to the circuit in the box? Determine the resistances $R_L$ and $R_P$; document the measurements made.

![figure](../../../../../sources/eupho/figures/eupho-2025-E1-3.png)

**Note** The B-potentiometer is connected to terminals B1, B2, B3 in exactly the same way with the same resistances $R_L$ and $R_P$, within manufacturing tolerances.

---

**Task 2 (0.5 pts)**

Sketch how the terminals have to be connected so that the neuron input voltages can be varied with the widest possible range.

---

**Task 3 (1.5 pts)**

Devise (and document) a strategy allowing you to find the combination of input voltages $x_1$ and $x_2$ that maximises the output voltage $y$ with the least possible number of measurements, irrespectively of with which set of input voltages you start the search. Determine this maximal voltage $y_\text{max}$ that will be henceforth used as an approximation for the amplitude $A$, and document your measurements.

---

**Task 4 (3.5 pts)**

Determine the weights $w_1$, $w_2$ and the bias $b$. Describe your measurements and document your data in a table. Estimate $w_1$, $w_2$, and $b$ by using a graphical approach.

---

Training involves optimising the network weights to achieve desired functionality. This allows ANNs to approximate arbitrary functions. For each of the following tasks you have to approximate a different function of a single input voltage using the given equipment. Make sure that the input and output that you define are clearly marked in your circuits.

---

**Task 5 (1.5 pts)**

Connect the terminal X1 directly to +V. Design a circuit to approximate the function $y_5(x) = A\sigma(w_2 x/2 + b_5)$, where $x$ is the voltage applied to your newly defined input terminal. Determine $b_5$ theoretically. Implement the circuit, take measurements and verify that your setup works as expected. Validate the value of $b_5$ from your data.

---

**Task 6 (2.5 pts)**

a) Determine the internal series output resistance $R_\text{out}$ of the Y terminal. (0.5 pts)

b) Design and implement a circuit to approximate the function $y_6(x) = A_6 \cdot \sigma(w_2 x + b) + B_6$, where $B_6 = 1.48\ \text{V}$. Determine $A_6$ theoretically. Implement the circuit and verify experimentally that your setup works as expected. Confirm the values of $A_6$ and $B_6$ from your data. (2.0 pts)

*European Physics Olympiad 2025, Experimental Problem 1. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX.*
