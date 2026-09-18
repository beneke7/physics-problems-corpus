---
id: solution-ocr-usapho-2016-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2016-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A2

A student designs a simple integrated circuit device that has two inputs, $V _ { a }$ and $V _ { b }$, and two outputs, $V _ { o }$ and $V _ { g }$. The inputs are effectively connected internally to a single resistor with effectively infinite resistance. The outputs are effectively connected internally to a perfect source of $\operatorname { emf } \mathcal { E }$. The integrated circuit is configured so that $\mathcal { E } = G \left( V _ { a } - V _ { b } \right)$, where $G$ is a very large number somewhere between $10 ^ { 7 }$ and $10 ^ { 9 }$. The circuits below are chosen so that the precise value of $G$ is unimportant. On the left is an internal schematic for the device; on the right is the symbol that is used in circuit diagrams.
![](../../../figures/solution-ocr/24b0f387e7bd9367302bfeb6.jpg)
![](../../../figures/solution-ocr/4e050b79bc3ea13d4d0b3eeb.jpg)

## Solution

The key idea is that if $\mathcal { E }$ is finite, then $V _ { a } \approx V _ { b }$, since $G$ is so large. If we work exactly, then the answers will contain terms like $\left( V _ { b } - V _ { a } \right) / G$ which are negligible. Thus we can find the same answers by just setting $V _ { a } = V _ { b }$.

a. Consider the following circuit. $R _ { 1 } = 8.2 k \Omega$ and $R _ { 2 } = 560 \Omega$ are two resistors. Terminal $g$ and the negative side of $V _ { \text {in } }$ are connected to ground, so both are at a potential of 0 volts. Determine the ratio $V _ { \text {out } } / V _ { \text {in } }$.
![](../../../figures/solution-ocr/32c91066005ffe7038479510.jpg)

## Solution

For this first part, we will not assume $V _ { a } = V _ { b }$. Since terminal $g$ is grounded, $V _ { g } = 0$ and $V _ { a } = V _ { \text {in } }$, so $V _ { \text {out } } = G \left( V _ { \text {in } } - V _ { b } \right)$. No current runs between $a$ and $b$, so any current through $R _ { 1 }$ also flows through $R _ { 2 }$. Then Ohm's law gives

$$
\frac { V _ { b } } { R _ { 2 } } = \frac { V _ { \text {out } } } { R _ { 1 } + R _ { 2 } } \Rightarrow V _ { \text {out } } = G \left( V _ { \text {in } } - V _ { \text {out } } \frac { R _ { 2 } } { R _ { 1 } + R _ { 2 } } \right)
$$

and solving for $V _ { \text {out } }$ gives

$$
V _ { \text {out } } = V _ { \text {in } } \frac { 1 } { \frac { 1 } { G } + \frac { R _ { 2 } } { R _ { 1 } + R _ { 2 } } } .
$$

But since $G \gg R _ { 1 } / R _ { 2 }$, we can neglect the $1 / G$ term, giving

$$
\frac { V _ { \text {out } } } { V _ { \text {in } } } \approx \frac { R _ { 1 } + R _ { 2 } } { R _ { 2 } } .
$$

This circuit is an amplifier with feedback.


b. Consider the following circuit. All four resistors have identical resistance $R$. Determine $V _ { \text {out } }$ in terms of any or all of $V _ { 1 } , V _ { 2 }$, and $R$.
![](../../../figures/solution-ocr/f8a2dfd77a94c9e9fafd9a97.jpg)

## Solution

For this part, we will assume $V _ { a } = V _ { b }$. Again $V _ { g } = 0$, and if current $I$ flows through the bottom resistor (below the $b$ and $g$ terminals) then $V _ { 2 } = 2 V _ { b }$, since the voltage drop across the bottom two resistors must be equal. Similarly, the voltage drop across the top two resistors is equal, so $V _ { 1 } + V _ { \text {out } } = 2 V _ { a }$. Then

$$
V _ { \text {out } } = 2 V _ { a } - V _ { 1 } = V _ { 2 } - V _ { 1 } .
$$

This circuit is a subtractor.

c. Consider the following circuit. The circuit has a capacitor $C$ and a resistor $R$ with time constant $R C = \tau$. The source on the left provides variable, but bounded voltage. Assume $V _ { \text {in } }$ is a function of time. Determine $V _ { \text {out } }$ as a function of $V _ { \text {in } }$, and any or all of time $t$ and $\tau$.
![](../../../figures/solution-ocr/d5a5bd269b45d72cfe07265f.jpg)

## Solution

We again set $V _ { a } = V _ { b } = 0$. Then the capacitor charge and current satisfy

$$
Q = C V _ { \text {in } } , \quad \dot { Q } = - \frac { V _ { \text {out } } } { R }
$$

where the second result follows from Ohm's law. Then

$$
\frac { V _ { \mathrm { out } } } { R } = - C \frac { d V _ { \mathrm { in } } } { d t } \quad \Rightarrow \quad V _ { \mathrm { out } } = - \tau \frac { d V _ { \mathrm { in } } } { d t } .
$$

This circuit is a differentiator.
