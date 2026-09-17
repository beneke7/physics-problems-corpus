---
id: ipho-2012-e-qe2
source: ipho
native_id: "Problem E2. Nonlinear Black Box (10 points)"
year: 2012
language: en
translated: false
topic: [electromagnetism, experimental-skills]
subtopic: [capacitance, inductance, dc-circuits, current, measurement, data-fitting, experimental-design]
difficulty: null
difficulty_norm: 4
math_tools: []
format: experimental
core_ideas: []
estimated_time_min: 60
points: "10"
has_solution: true
has_figure: true
figure_files: [ipho-2012-e-qe2-fig01.png, ipho-2012-e-qe2-fig02.png, ipho-2012-e-qe2-fig03.png, ipho-2012-e-qe2-fig04.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/ipho/2012_E.mmd; figures require local harvest"
verification_status: pending
solution_language: en
techniques: [differential-element, strategic-heuristics]
---

## Problem E2. Nonlinear Black Box (10 points)

In simple problems, electrical circuits are assumed to consist of linear elements, for which electrical characteristics are directly proportional to each other. Examples include resistance $(V=R I)$, capacitance $(Q=C V)$ and inductance $\left(V=L \dot{I}=L \frac{d I}{d t}\right)$, where $R, C$ and $L$ are constants. In this problem, however, we examine a circuit containing nonlinear elements, enclosed in a black box, for which the assumption of proportionality no longer holds.
The setup comprises a multimeter (labelled "IPhOmeasure"), a black box that acts as a current source, a black box containing nonlinear elements, and four test leads with stackable connectors for wiring. Be careful not to break the seal on the black box.
The multimeter can measure current and voltage simultaneously. You can store with it up to 2000 data points, each consisting of: voltage $V$, current $I$, power $P=I V$, resistance $R=V / I$, voltage time derivative $\dot{V}\left(=\frac{d V}{d t}\right)$, current time derivative $\dot{I}\left(=\frac{d I}{d t}\right)$ and time $t$. See multimeter manual for details. If you go beyond 2000 stored data points, the oldest data will be overwritten.
![](ipho-2012-e-qe2-fig01.png)

The constant current source supplies stable current as long as the voltage across its terminals stays between -0.6125 V and 0.6125 V. When switched off, the constant current source behaves as a large (essentially infinite) resistance.
![](ipho-2012-e-qe2-fig02.png)

The black box contains an electric double layer capacitor (which is a slightly nonlinear high capacitance capacitor), an unknown nonlinear element, and an inductor $L=10 \mu \mathrm{H}$ of negligible resistance, switchable as indicated on the circuit diagram. The nonlinear element can be considered as a resistance with a nonlinear dependence between the voltage and the current $[I(V)$ is a continuous function of $V$ with $I(0)=0]$. Likewise, for the capacitor, the differential capacitance $C(V)=$ $d Q / d V$ is not exactly constant.
We say that the voltage on the black box is positive when the potential on its red terminal is higher than the potential on the black terminal. Positive voltage will be acquired when the terminals of matching colours on the black box and the current source are connected (you are allowed to use negative voltages).
![](ipho-2012-e-qe2-fig03.png)
![](ipho-2012-e-qe2-fig04.png)

It is safe to discharge the capacitor in the black box by shorting its inputs, either by itself or through the IN and OUT terminals on multimeter: the internal resistance of this capacitor is enough to keep the current from damaging anything.

You are not asked to estimate any uncertainties throughout this problem.

Part A. Circuit without inductance (7 points)
In this part, keep the switch on the black box closed (push "I" down), so that the inductance is shorted. Please note that some measurements may take a considerable time, therefore it is recommended that you read through all the tasks of part A to avoid unnecessary work.
i. (1.0 pts) Confirm that the output current of the current source is approximately 6 mA, and determine the range within which it varies for voltages between 0 and +480 mV. Document the circuit diagram used.
ii. (1.2 pts) Show that the differential capacitance $C(V)$ used in the black box is approximately 2 F by measuring its value for a single voltage of your choice $C\left(V_{0}\right)=C_{0}$. Document the circuit diagram.
iii. (2.2 pts) Neglecting the nonlinearity of the capacitance $\left[C(V) \approx C_{0}\right]$, determine the current-voltage characteristic of the nonlinear element used in the black box. Plot the $I(V)$ curve for obtainable positive voltages on the black box onto the answer sheet. Document the circuit diagram.
iv. (2.6 pts) Using measurements taken from the whole range of obtainable voltages, calculate and plot the $C(V)$ curve for obtainable positive voltages from the black box on the answer sheet. Write down the minimal and maximal values of differential capacitance $C_{\text {min }}, C_{\text {max }}$. Document the circuit diagram.

Part B. Circuit with inductance (3 points)
Enable the inductance by opening the switch on the black box (push "0" down). Using the same method as in pt. A-iii, measure and plot the current-voltage characteristic of the nonlinear element. Describe any significant differences between the curves of parts A and B and suggest a reason using qualitative arguments. You need to know that the nonlinear element also has a capacitance $(\approx 1 \mathrm{nF})$ which is connected in parallel to the nonlinear resistance.
