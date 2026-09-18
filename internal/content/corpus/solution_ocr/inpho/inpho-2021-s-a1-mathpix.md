---
id: solution-ocr-inpho-2021-s-a1
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2021-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. The ammeter-voltmeter method is widely used for measuring electrical resistances in the physics laboratory. In this method, the resistance $R$ is always derived from the readings $V$ and $I$ from a voltmeter and an ammeter respectively, using Ohm's law: $R = V / I$. While using this method, it is assumed that the ammeter and voltmeter used in the setup are ideal. In this problem, we will find the pitfalls of this assumption and devise a new setup with a better performance.
The standard ammeter-voltmeter setup consists of a DC voltage source $( \varepsilon )$ maintained at a constant voltage, a protection resistance $\left( \mathrm { R } _ { \mathrm { p } } \right)$, an ammeter (A), and a voltmeter (V). The unknown internal resistances of the ammeter and the voltmeter are $R _ { A }$ and $R _ { V }$, respectively. Also, $R _ { V } \gg R _ { A }$. We aim to measure the true value $R$ of an unknown resistor.
We consider a two commonly used circuit configurations (1) and (2) indicated by the two possible positions of the switch in the circuit diagram shown below. Let the measured values of the resistance $R$ be $R _ { \mathrm { m } 1 }$ and $R _ { \mathrm { m } 2 }$ in the setups (1) and (2), respectively. The relative error, $\Delta$, is defined as the ratio of the absolute error of the measurement to the actual value: $\Delta = \left( R _ { \mathrm { m } } - R \right) / R$.
![](../../../figures/solution-ocr/78b54d96f19bd4356131bb63.jpg)
    (a) [2 marks] Obtain the relative errors in the measurements ( $\Delta _ { 1 }$ and $\Delta _ { 2 }$ ) for each of the above configurations.

Solution:
Setup (1):
Current through the ammeter

$$
I _ { 1 } = \frac { V _ { 1 } } { R } + \frac { V _ { 1 } } { R _ { V } }
$$

whereas the voltage corresponds to the voltage across the voltmeter-resistance combination. Thus the measured resistance

$$
\begin{align*}
R _ { \mathrm { m } 1 } & = \frac { V _ { 1 } } { I _ { 1 } } = \frac { R } { 1 + \frac { R } { R _ { V } } }  \tag{1.1}\\
\Delta _ { 1 } & = - \frac { 1 } { 1 + \frac { R _ { V } } { R } } \tag{1.2}
\end{align*}
$$

Setup (2):
Current through the ammeter

$$
I _ { 2 } = \frac { V _ { 2 } } { R + R _ { A } }
$$

Thus

$$
\begin{align*}
R _ { \mathrm { m } 2 } & = \frac { V _ { 2 } } { I _ { 2 } } = R + R _ { A }  \tag{1.3}\\
\Delta _ { 2 } & = \frac { R _ { A } } { R } \tag{1.4}
\end{align*}
$$


(b) [4 marks] Using exactly the same circuit elements, can you suggest a step by step procedure, with the necessary circuit diagram(s), to measure the true value of the resistance R, regardless of the values of the internal resistances of the ammeter and the voltmeter? You may use the measurements made in part (a).

Solution:


1. We use the configuration shown below. When the switch is in position 1, ammeter and voltmeter are in parallel and we calculate $R _ { A } = V / I$.

![](../../../figures/solution-ocr/7d2f8876ed11ed3472fdf28b.jpg)

2. When we use the switch in position 2, the configuration is same as position 2 of part (a).
$$
R = R _ { \mathrm { m } 2 } - R _ { A }
$$
This will give the true value of the resistance.
