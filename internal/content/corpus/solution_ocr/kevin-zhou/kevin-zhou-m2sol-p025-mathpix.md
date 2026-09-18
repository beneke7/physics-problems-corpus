---
id: solution-ocr-kevin-zhou-m2sol-p025
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-p025]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 25 ( $\boldsymbol { F } = \boldsymbol { m a } 2018 \mathrm {~B} 20$ ). A massive, uniform, flexible string of length $L$ is placed on a horizontal table of length $L / 3$ that has a coefficient of friction $\mu _ { s } = 1 / 7$, so equal lengths $L / 3$ of string hang freely from both sides of the table. The string passes over the edges of the table, which are smooth frictionless curves, of size much less than $L$. Now suppose that one of the hanging ends of the string is pulled a distance $x$ downward, then released at rest. Neither end of the string touches the ground.

(a) Find the maximum value of $x$ so that the string does not slip off of the table.
(b) For the case $x = 0$, draw a free body diagram for the string, indicating only the external forces on the entire string. Do the forces balance?
(c) Would the answer change significantly if the table's small edges had friction as well?

Solution. (a) The difference in weights is $2 ( M g / L ) x$, and needs to be balanced by the friction force $f$. At the max value of $x , f = \mu _ { s } N = \mu _ { s } M g / 3$ (the normal force at the top only holds up the top of the string), so $x = \left( \mu _ { s } / 6 \right) L = L / 42$.

(b) At first, it may seem that the forces don't balance, because the normal force from the flat part of the table only balances the weight of the string above it, leaving nothing to balance the weight of the vertical parts of the string. But we must recall that there is an enormous normal pressure at the smooth corners. The total normal force there is large enough so that its vertical component holds up all of the string underneath it.

![](../../../figures/solution-ocr/0b04284c87b6c0f392721272.jpg)


(c) Yes, the answer changes significantly no matter how small the edges are. This is because, as we saw in part (b), there is a sizable normal force at the edges, since they alone are responsible for holding up a significant part of the rope. So turning on a coefficient of friction at the edges would yield a sizable friction force. (You can calculate it using problem 24.)

[3] Problem 26 (Morin 2.25). A rope rests on two platforms that are both inclined at an angle $\theta$.
![](../../../figures/solution-ocr/fd5c44891aa28cf6b6a9fe25.jpg)
The rope has uniform mass density, and the coefficient of friction between it and the platforms is 1. The system has left-right symmetry. What is the largest possible fraction of the rope that does not touch the platforms? What angle $\theta$ allows this maximum fraction?

Solution. Let $\eta$ be the fraction of the rope that does not touch the platforms. Split the rope into the 3 obvious pieces (the left touching portion, the hanging portion, the right touching portion). Let $T$ be the tension at the boundaries (its the same on both sides by symmetry). Balancing forces on the middle portion tells us

$$
2 T \sin \theta = \eta m g \Longrightarrow T = \frac { \eta m g } { 2 \sin \theta } .
$$

We see the friction force on the left piece is $f = T + \frac { 1 - \eta } { 2 } m g \sin \theta$, and the normal force is $N =$ $\frac { 1 - \eta } { 2 } m g \cos \theta$. We have $f \leq N \mu$, so

$$
\frac { \eta m g } { 2 \sin \theta } + \frac { 1 - \eta } { 2 } m g \sin \theta \leq \frac { 1 - \eta } { 2 } m g \mu \cos \theta ,
$$

or

$$
\frac { \eta } { \sin \theta } + ( 1 - \eta ) \sin \theta \leq ( 1 - \eta ) \cos \theta ,
$$

so some algebra reveals

$$
\eta \leq \frac { \cos \theta - \sin \theta } { \cos \theta + \sin \theta } \tan \theta .
$$

Doing some more algebra turns this into

$$
\eta \leq \frac { \sin 2 \theta + \cos 2 \theta - 1 } { \sin 2 \theta + \cos 2 \theta + 1 } .
$$

To maximize $\eta$, we need to maximize $\sin 2 \theta + \cos 2 \theta$, which implies $\theta = \pi / 8$. The corresponding value of $\eta$ is $3 - 2 \sqrt { 2 }$.
