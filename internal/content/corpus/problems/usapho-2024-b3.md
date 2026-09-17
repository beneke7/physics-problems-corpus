---
id: usapho-2024-b3
source: usapho
native_id: "Question B3"
year: 2024
language: en
translated: false
topic: [electromagnetism, experimental-skills]
subtopic: [ac-circuits, resonance, impedance, measurement, data-fitting]
difficulty: null
difficulty_norm: 3
math_tools: [numerical]
format: measurement
core_ideas: []
estimated_time_min: 35
points: null
has_solution: false
has_figure: true
figure_files: [usapho-2024-b3-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/usapho/2024.mmd; figures require local harvest"
verification_status: flagged
---

## Question B3

Quality Quest
The quality factor is a dimensionless number which quantifies how efficiently a system stores energy and how strongly it responds on resonance. For a circuit consisting of a capacitor $C$, an inductor $L$, and a small resistance $R$ in series, the resonant frequency is approximately $\omega_{0}=1 / \sqrt{L C}$, and the quality factor, assumed to be large throughout this problem, is

$$
Q=\frac{1}{R} \sqrt{\frac{L}{C}} .
$$

In this problem, we explore several ways to measure $Q$. Uncertainty analysis is not required.

a. Alice measures $Q$ by seeing how oscillations in the circuit damp over time. Suppose that initially, the charge on the capacitor is $q$ and the current is zero. The next time the current is zero, the charge is $-q(1-\delta)$. Find an approximate expression for $\delta$, in terms of $\omega_{0}$ and $Q$.
b. Bob and Charles drive their circuits with a sinusoidal voltage $V(t)=V_{0} \cos \omega t$. It can be shown that in the steady state, the voltage across the capacitor oscillates with amplitude
$$
V_{c}=\frac{V_{0}}{\sqrt{\left(1-\omega^{2} / \omega_{0}^{2}\right)^{2}+\left(\omega / \omega_{0} Q\right)^{2}}} .
$$
The circuits Bob and Charles have are similar, but are not precisely the same.
    i.Bob fixes the value of $V_{0}$ so that the highest value of $V_{c}$ at any frequency is precisely 10.00 V . His equipment can precisely compare the amplitudes of a small DC and AC voltage. He thus performs two very accurate voltage measurements.

| $\omega(\mathrm{rad} / \mathrm{s})$ | 0.0 | 183.3 |
| :--- | :--- | :--- |
| $V_{c}$ (Volts) | 0.1219 | 0.1219 |

Using this data, find the numeric values of $Q$ and $\omega_{0}$ as accurately as possible.
    ii.Charles can precisely tune $\omega$, but cannot precisely measure small voltages. He thus fixes $V_{0}$ to some other value and takes data near the resonance, where $V_{c}$ is relatively large.

| $\omega(\mathrm{rad} / \mathrm{s})$ | 133.0 | 133.5 | 134.0 | 134.5 | 135.0 | 135.5 | 136.0 | 136.5 | 137.0 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $V_{c}$ (Volts) | 3.64 | 4.76 | 6.52 | 8.53 | 8.18 | 6.06 | 4.44 | 3.42 | 2.75 |

Using this data, find the numeric values of $Q$ and $\omega_{0}$ as accurately as possible. (Hint: you may use the graph paper in the answer sheets, but full credit is attainable without graphing. To find $Q$, you should first find $\omega_{0}$, then simplify the equation above using $\omega \approx \omega_{0}$.)
c. The gain function of this circuit is defined as $G=V_{R} / V_{0}$, where $V_{R}$ is the amplitude of the voltage across the resistor, as shown below.
![](usapho-2024-b3-fig01.png)
    i. Find an expression for $G$ in terms of $\omega, \omega_{0}$, and $Q$.
    ii. This setup can be used to reject voltages at certain frequencies. Qualitatively describe the range(s) of frequencies for which $G$ is small.

Page □ Problem □ Student Name: Student AAPT number:

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
