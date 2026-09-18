---
id: solution-ocr-usapho-2018-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2018-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A3

A vacuum system consists of a chamber of volume $V$ connected to a vacuum pump that is a cylinder with a piston that moves left and right. The minimum volume in the pump cylinder is $V _ { 0 }$, and the maximum volume in the cylinder is $V _ { 0 } + \Delta V$. You should assume that $\Delta V \ll V$.
![](../../../figures/solution-ocr/c9a3588b6bdf3f45434b7d9a.jpg)

The cylinder has two valves. The inlet valve opens when the pressure inside the cylinder is lower than the pressure in the chamber, but closes when the piston moves to the right. The outlet valve opens when the pressure inside the cylinder is greater than atmospheric pressure $P _ { a }$, and closes when the piston moves to the left. A motor drives the piston to move back and forth. The piston moves at such a rate that heat is not conducted in or out of the gas contained in the cylinder during the pumping cycle. One complete cycle takes a time $\Delta t$. You should assume that $\Delta t$ is a very small quantity, but $\Delta V / \Delta t = R$ is finite. The gas in the chamber is ideal monatomic and remains at a fixed temperature of $T _ { a }$.

Start with assumption that $V _ { 0 } = 0$ and there are no leaks in the system.

a. At $t = 0$ the pressure inside the chamber is $P _ { a }$. Find an equation for the pressure at a later time $t$.

## Solution

During each cycle, the system sucks gas out of the chamber and pushes it into the atmosphere. Since $V _ { 0 } = 0$, the inlet valve opens the moment the piston starts moving to the left. When the piston is all the way to the left, a fraction $\Delta V / ( V + \Delta V )$ of the gas is in the cylinder. As the piston moves to the right, all of this gas is pushed out, so after a single cycle,

$$
P _ { f } = P _ { i } \left( \frac { V } { V + \Delta V } \right)
$$

and in general,

$$
P ( t ) = P _ { a } \left( \frac { V } { V + \Delta V } \right) ^ { t / \Delta t } .
$$

While this is technically correct, it can be simplified significantly. Write

$$
P ( t ) = P _ { a } \left( 1 + \frac { \Delta V } { V } \right) ^ { - t / \Delta t } = P _ { a } \left( ( 1 + x ) ^ { 1 / x } \right) ^ { - R t / V }
$$

where $x = \Delta V / V \ll 1$. Then using the definition of $e$,

$$
e = \lim _ { x \rightarrow 0 } ( 1 + x ) ^ { 1 / x }
$$

we have

$$
P ( t ) = P _ { a } e ^ { - R t / V } .
$$


b. Find an expression for the temperature of the gas as it is emitted from the pump cylinder into the atmosphere. Your answer may depend on time.

## Solution

When the piston is all the way to the left, the pressure is $P ( t )$ and the temperature is $T _ { a }$. As the piston moves to the right, the gas is adiabatically compressed until its pressure reaches $P _ { a }$ and the outlet valve opens. Since $P V ^ { \gamma }$ is constant during adiabatic compression and $P V / T$ is constant by the ideal gas law,

$$
T _ { \text {out } } ( t ) = T _ { a } \left( \frac { P _ { a } } { P ( t ) } \right) ^ { 1 - 1 / \gamma } = T _ { a } \left( \frac { P _ { a } } { P ( t ) } \right) ^ { 2 / 5 } = T _ { a } e ^ { 2 R t / 5 V }
$$

where we used $\gamma = 5 / 3$ for a monatomic ideal gas.

For the remainder of this problem $0 < V _ { 0 } < \Delta V \ll V$.

c. Find an expression for the minimum possible pressure in the chamber, $P _ { \text {min } }$.

## Solution

Since $V _ { 0 } > 0$, the inlet valve will not open immediately when the piston begins moving to the left; instead it will open once the pressure in the cylinder equals the pressure in the chamber. Since the expansion of the cylinder is adiabatic, $P V ^ { \gamma }$ is constant, so

$$
P _ { \min } = P _ { a } \left( \frac { V _ { 0 } } { V _ { 0 } + \Delta V } \right) ^ { \gamma } = P _ { a } \left( 1 + \frac { \Delta V } { V _ { 0 } } \right) ^ { - \gamma } .
$$


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
