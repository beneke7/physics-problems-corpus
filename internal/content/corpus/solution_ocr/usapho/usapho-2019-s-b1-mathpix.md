---
id: solution-ocr-usapho-2019-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2019-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

## Strain in the Membrane ${ } ^ { 2 }$

![](../../../figures/solution-ocr/e1cc5f712ca41b64eb4427a9.jpg)

The wall of a neuron is made from an elastic membrane, which resists compression in the same way as a spring. It has an effective spring constant $k$ and an equilibrium thickness $d _ { 0 }$. Assume that the membrane has a very large area $A$ and negligible curvature.

The neuron has "ion pumps" that can move ions across the membrane. In the resulting charged state, positive and negative ionic charge is arranged uniformly along the outer and inner surfaces of the membrane, respectively. The permittivity of the membrane is $\epsilon$.

a. Suppose that, after some amount of work is done by the ion pumps, the charges on the outer and inner surfaces are $Q$ and $- Q$, respectively. What is the thickness $d$ of the membrane?

## Solution

One charge layer by itself creates an electric field $E _ { 1 } = Q / ( 2 \epsilon A )$ in each direction. So the force between the two sides of the membrane $F _ { E } = Q E _ { 1 } = Q ^ { 2 } / ( 2 \epsilon A )$.
This electric force is balanced by the spring force $F _ { s } = k x$, where $x = d _ { 0 } - d$. Equating these two forces and solving for $d$ gives gives

$$
d = d _ { 0 } - \frac { Q ^ { 2 } } { 2 \epsilon A k } .
$$

b. Derive an expression for the voltage difference $V$ between the outer and inner surfaces of the membrane in terms of $Q$ and the other parameters given.

## Solution

The electric field inside the membrane (as produced by both the left and right plates) is $E = Q / \left( \epsilon _ { 0 } \kappa A \right)$. So the voltage between them is

$$
V = E d = \frac { Q } { \epsilon A } d .
$$

[^1]
Inserting the expression for $Q$ from part (a) gives

$$
V = \frac { Q } { \epsilon A } \left( d _ { 0 } - \frac { Q ^ { 2 } } { 2 \epsilon A k } \right) .
$$

This equation implies that as the charge $Q$ is increased, the voltage first increases and then decreases again.

c. Suppose that the ion pumps are first turned on in the uncharged state, and the membrane is charged very slowly (quasistatically). The pumps will only turn off when the voltage difference across the membrane becomes larger than a particular value $V _ { \text {th } }$. How large must the spring constant $k$ be so that the ion pumps turn off before the membrane collapses?

## Solution

The voltage $V$ first increases and then decreases as a function of $Q$, which implies that there is a maximum voltage $V _ { \text {max } }$ to which the membrane can be charged. This voltage can be found by taking the derivative $d V / d Q$ and setting it equal to zero. This procedure gives

$$
V _ { \max } = \sqrt { \frac { k d _ { 0 } ^ { 3 } } { \epsilon A } } \left( \frac { 2 } { 3 } \right) ^ { 3 / 2 } .
$$

The corresponding charge at the maximum voltage is given by

$$
Q _ { \mathrm { V } \text { max } } ^ { 2 } = \frac { 2 } { 3 } \epsilon A k d _ { 0 } .
$$

For the ion pumps to turn off, we must have $V _ { \text {max } } > V _ { \text {th } }$. Otherwise the pumps will continue to move charge across the membrane until it collapses. Setting $V _ { \text {max } } > V _ { \text {th } }$ and solving for $k$ gives

$$
k > \left( \frac { 3 } { 2 } \right) ^ { 3 } \frac { V _ { \mathrm { th } } ^ { 2 } \epsilon A } { d _ { 0 } ^ { 3 } } .
$$

d. How much work is done by the ion pumps in each of the following situations? Express your answers in terms of $k$ and $d _ { 0 }$.
    i. $k$ is infinitesimally larger than the value derived in part (c).

## Solution

If $k$ is larger than the value in part (c), then the threshold voltage $V _ { \text {th } } > V _ { \text {max } }$, and the ion pumps turn off before the membrane thickness $d$ reaches zero. The work $W$ done by the ion pumps is equal to the potential energy of the system relative to the uncharged state (with $Q = 0$ and $d = 0$ ). That is, $W = \frac { 1 } { 2 } k x ^ { 2 } + Q ^ { 2 } / ( 2 C )$, where $C = \epsilon A / d$ is the capacitance of the membrane. Writing this equation in terms of $Q$ gives $W = Q ^ { 2 } d _ { 0 } / ( 2 \epsilon A ) - Q ^ { 4 } / \left( 8 \epsilon ^ { 2 } A ^ { 2 } k \right)$.
$k$ being infinitesimally larger than the critical value means that the ion pumps turn off just as the voltage maximum $V _ { \text {th } }$ is reached. At this point the charge $Q$ approaches


$Q _ { \text {Vmax } }$, derived in the previous answer. Inserting the value into the expression for $W$ gives

$$
W = \frac { 5 } { 18 } k d _ { 0 } ^ { 2 } .
$$

ii. $k$ is infinitesimally smaller than the value derived in part (c).

## Solution

If $k$ is smaller than the value in part (c), then the threshold voltage is larger than the stopping voltage $V _ { \text {th } }$, and the ion pumps continue to work until the membrane collapses to $d = 0$. At this point there is no electrostatic energy in the membrane (the membrane capacitance is infinite), and

$$
W = \frac { 1 } { 2 } k d _ { 0 } ^ { 2 } .
$$

Assume in each case that the membrane thickness $d$ cannot become negative.
