---
id: solution-ocr-usapho-2018-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2018-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A2
For this problem, graphical answers should be drawn on the answer sheets graphs provided. Supporting work is to be written on blank answer sheets. Incorrect graphs without supporting work will receive no partial credit.

The current $I$ as a function of voltage $V$ for a certain electrical device is

$$
I = I _ { 0 } e ^ { - q V _ { 0 } / k _ { B } T } \left( e ^ { q V / k _ { B } T } - 1 \right)
$$

where $q$ is the magnitude of the charge on an electron, $k _ { B }$ is Boltzmann's constant, and $T$ is the absolute temperature. $I _ { 0 }$ and $V _ { 0 }$ are non-zero positive constants. Throughout this problem assume low temperature values $k _ { B } T \ll q V _ { 0 }$.

a. On the answer sheets, sketch a graph of the current versus voltage for low temperature values $k _ { B } T \ll q V _ { 0 }$, clearly indicating any asymptotic behavior.

Solution

The current is simply proportional to $e ^ { q V / k _ { B } T } - 1$, which is a shifted exponential. Then $I$ always has the same sign as $V$, and vanishes when $V$ vanishes. The current grows quickly for high $V$ and approaches a constant for low $V$.
This answer is acceptable, but we can use the condition $k _ { B } T \ll q V _ { 0 }$ to simplify the graph. For negative $V$, we have

$$
I / I _ { 0 } \approx e ^ { - q V _ { 0 } / k _ { B } T }
$$

which is extremely small. For positive $V$, we have

$$
I / I _ { 0 } \approx e ^ { q \left( V - V _ { 0 } \right) / k _ { B } T }
$$

which is extremely small when $V < V _ { 0 }$ and extremely large when $V > V _ { 0 }$. Then

$$
\frac { I } { I _ { 0 } } \approx \begin{cases} 0 & V < V _ { 0 } \\ \infty & V > V _ { 0 } \end{cases}
$$

as shown below. Accounting for finite temperature, which is not necessary for full credit, simply rounds the corners in all of the graphs.


![](../../../figures/solution-ocr/bd8644ad8bac309ac73f190b.jpg)

Shown is a schematic for the device. Positive voltage means that the electric potential of the left hand side of the device is higher than the right hand side. For this device, $I _ { 0 } = 25 \mu \mathrm {~A}$ and $V _ { 0 } = 1.0 \mathrm {~V}$.

$$
V _ { L } \cdot \Delta \cdot V _ { R }
$$

Below is a circuit made up of these elements. The voltage supplied the circuit is sinusoidal, $V _ { A B } = V _ { A } - V _ { B } = V _ { s } \sin \omega t$, and is also shown on answer sheets. The resistance is $R = 5.0 \Omega$ and $V _ { s } = 5.0 \mathrm {~V}$.
![](../../../figures/solution-ocr/5af8a7be09d9599b111183ef.jpg)


b. Sketch the potential difference $V _ { C D } = V _ { C } - V _ { D }$ as a function of time on the answer sheet. For your convenience, $V _ { A B }$ is shown in light gray. Assume that $V _ { A B }$ has been running for a long time.

## Solution

When $\left| V _ { A B } \right| < 2 V _ { 0 }$, no current flows. When $\left| V _ { A B } \right| > 2 V _ { 0 }$, current begins to flow, with each diode subtracting a potential difference of $V _ { 0 }$. Note that the current flows in the same direction for both positive and negative $V _ { A B }$. This device is a rectifier.
![](../../../figures/solution-ocr/57c4401fdbdb45deca063b90.jpg)
A capacitor is connected to the circuit as shown below. The capacitance is $C = 50 \mathrm { mF }$.
![](../../../figures/solution-ocr/aab1dbfeef3d571eff13eac8.jpg)


c. Sketch the new potential difference $V _ { C D } = V _ { C } - V _ { D }$ as a function of time on the answer sheet. For your convenience, $V _ { A B }$ is shown in light gray. Assume that $V _ { A B }$ has been running for a long time.

## Solution

Let the voltage on the capacitor be $V _ { s }$. Whenever $\left| V _ { A B } \right| \geq V _ { s } + 2 V _ { 0 }$, current flows through the diodes, charging the capacitor up to voltage $\left| V _ { A B } \right| - 2 V _ { 0 }$. Whenever $\left| V _ { A B } \right| < V _ { s } + 2 V _ { 0 }$, no current flows through the diodes, and the capacitor and resistor simply discharge as an RC circuit with time constant $R C = 250 \mathrm {~ms}$.

Since $R C$ is much longer than the timescale on the answer sheets, the discharge is approximately linear, with

$$
\frac { d V _ { s } } { d t } = \frac { 1.0 \mathrm {~V} } { 83.3 \mathrm {~ms} } .
$$

Thus the capacitor charges completely to 3.0 V every cycle, then discharges approximately linearly by about a half volt during the reminder of the cycle. On the graph we show charging as red and discharging as blue.
![](../../../figures/solution-ocr/5467da6b01854bb9b93e8de7.jpg)
