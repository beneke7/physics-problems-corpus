---
id: nbpho-2013-zener-diode
source: nbpho
native_id: "2013 P8 ZENER DIODE"
year: 2013
language: en
translated: false
topic: [electromagnetism]
subtopic: [lc-circuits, inductance, capacitance, nonlinear-circuits]
math_tools: [differential-equations, phase-space]
format: open-ended
points: 7
core_ideas: []
has_figure: false
figure_files: []
provenance_note: "NBPhO 2013 (Nordic-Baltic Physics Olympiad), Problem 8. Extracted from cache/phoxiv/nbpho/2013.pdf via Mathpix OCR."
verification_status: pending
links_hu: nbpho-2013-zener-diode
has_solution: true
solution_language: en
techniques: [conservation-laws, limiting-and-special-cases]
---

**8. ZENER DIODE (7 points)**

An inductance $L$ and a capacitor $C$ are connected in series with a switch. Initially the switch is open and the capacitor is given a charge $q_{0}$. Now the switch is closed.

i) (1 point) What are the charge $q$ on the capacitor and the current $I$ in the circuit as functions of time? Draw the phase diagram of the system - the evolution of the system on a $I-q$ graph - and note the curve's parameters. Note the direction of the system's evolution with arrow(s).

A Zener diode is a non-linear circuit element that acts as a bi-directional diode: it allows the current to flow in the positive direction when a forward voltage on it exceeds a certain threshold value, but it also allows a current to flow in the opposite direction when exposed to sufficiently large negative voltage. Normally the two voltage scales are quite different, but for our purposes we will take a Zener diode with the following voltampere characteristics: for forward currents, the voltage on the diode is $V_{d}$, for reverse currents, the voltage on the diode is $-V_{d}$, for zero current the voltage on the diode is $-V_{d}<V<V_{d}$.

Now we connect the inductance $L$, the capacitor $C$ all in series with a switch and a Zener diode. The switch is initially open. The capacitor is again given the charge $q_{0}>C V_{d}$ and the switch is then closed.

ii) (2 points) Make a drawing of the phase diagram for the system. Note the direction of the system's evolution with arrow(s).

iii) (2 points) Does the evolution of the system only necessarily stop for $q=0$? Find the range of values of $q$ on the capacitor for which the evolution of the system will necessarily come to a halt.

iv) (2 points) Find the decrease $\Delta q$ in the maximum positive value of the capacitor's charge $q$ after one full oscillation. How long does it take before oscillation halts?
