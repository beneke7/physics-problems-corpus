---
id: solution-ocr-usapho-2017-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2017-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

Beloit College has a "homemade" 500 kV VanDeGraff proton accelerator, designed and constructed by the students and faculty.

![](../../../figures/solution-ocr/3f26a19184b78325bb06ebd9.jpg)
Accelerator dome (assume it is a sphere); accelerating column; bending electromagnet

The accelerator dome, an aluminum sphere of radius $a = 0.50$ meters, is charged by a rubber belt with width $w = 10 \mathrm {~cm}$ that moves with speed $v _ { b } = 20 \mathrm {~m} / \mathrm { s }$. The accelerating column consists of 20 metal rings separated by glass rings; the rings are connected in series with $500 \mathrm { M } \Omega$ resistors. The proton beam has a current of $25 \mu \mathrm {~A}$ and is accelerated through 500 kV and then passes through a tuning electromagnet. The electromagnet consists of wound copper pipe as a conductor. The electromagnet effectively creates a uniform field $B$ inside a circular region of radius $b = 10 \mathrm {~cm}$ and zero outside that region.

![](../../../figures/solution-ocr/0c8cf91f7aff0ef38dd983bc.jpg)
Only six of the 20 metals rings and resistors are shown in the figure. The fuzzy grey path is the path taken by the protons as they are accelerated from the dome, through the electromagnet, into the target.

a. Assuming the dome is charged to 500 kV, determine the strength of the electric field at the surface of the dome.

\section*{Solution}
The electric potential is given by
$$
V = \frac { q } { 4 \pi \epsilon _ { 0 } a }
$$
and the electric field is given by
$$
E = \frac { q } { 4 \pi \epsilon _ { 0 } a ^ { 2 } }
$$

so
$$
E = \frac { V } { a } = 10 ^ { 6 } \mathrm {~V} / \mathrm { m } .
$$
b. Assuming the proton beam is off, determine the time constant for the accelerating dome (the time it takes for the charge on the dome to decrease to $1 / e \approx 1 / 3$ of the initial value.

## Solution

The time constant is given by

$$
\tau = R C
$$

where

$$
C = Q / V = 4 \pi \epsilon _ { 0 } a = 5.56 \times 10 ^ { - 11 } \mathrm {~F}
$$

and

$$
R = 20 r _ { 0 } = 10 ^ { 10 } \Omega
$$

so

$$
\tau = R C = 0.556 \mathrm {~s} .
$$

c. Assuming the $25 \mu \mathrm {~A}$ proton beam is on, determine the surface charge density that must be sprayed onto the charging belt in order to maintain a steady charge of 500 kV on the dome.

## Solution

There are several ways the dome can discharge, two of which are along the resistors and the proton beam. We will ignore any other path.
At 500 kV , the current through the resistor chain is $50 \mu \mathrm {~A}$, from $V = I R$. So the total current $I$ needed to be supplied to the dome is $75 \mu \mathrm {~A}$. This is sprayed onto the belt, which moves at a rate of

$$
\frac { \delta A } { \Delta t } = v _ { b } w
$$

so the necessary surface charge density is

$$
\sigma = \frac { I } { v _ { b } w } = \frac { ( 75 \mu \mathrm { C } / \mathrm { s } ) } { ( 20 \mathrm {~m} / \mathrm { s } ) ( 0.10 \mathrm {~m} ) } = 37.5 \mu \mathrm { C } / \mathrm { m } ^ { 2 } .
$$


d. The proton beam enters the electromagnet and is deflected by an angle $\theta = 10 ^ { \circ }$. Determine the magnetic field strength.
![](../../../figures/solution-ocr/dbf8148c3f02ee122c90e454.jpg)

## Solution

Start with $F = q v B$ where $F$ is the force on the protons, and $v$ the velocity. The protons are non-relativistic, so

$$
\frac { 1 } { 2 } m v ^ { 2 } = q V
$$

They move in a circle of radius $r$ inside the field, given by

$$
\frac { m v ^ { 2 } } { r } = q v B .
$$

Combining these equations gives

$$
r = \frac { m v } { q B } = \frac { m } { q B } \sqrt { \frac { 2 q V } { m } } = \frac { 1 } { B } \sqrt { \frac { 2 m V } { q } } .
$$

Solving for the magnetic field strength,

$$
B = \frac { 1 } { r } \sqrt { \frac { 2 m V } { q } } .
$$

To relate this to the angle, we need to do some geometry. Sketch two circles, one of radius $b$, the other of radius $r$, that intersect perpendicular to each other, as in the diagram above. Then drawing a triangle gives

$$
\tan \frac { \theta } { 2 } = \frac { b } { x } .
$$

Combining our results, the answer is

$$
B = \frac { \tan \theta / 2 } { b } \sqrt { \frac { 2 m V } { q } } = 0.0894 \mathrm {~T} .
$$

e. The electromagnet is composed of layers of spiral wound copper pipe; the pipe has inner diameter $d _ { i } = 0.40 \mathrm {~cm}$ and outer diameter $d _ { o } = 0.50 \mathrm {~cm}$. The copper pipe is wound into this flat spiral that has an inner diameter $D _ { i } = 20 \mathrm {~cm}$ and outer diameter $D _ { o } = 50 \mathrm {~cm}$. Assuming the pipe almost touches in the spiral winding, determine the length $L$ in one spiral.

![](../../../figures/solution-ocr/548dc8f8c3871ae8bcd7aff7.jpg)

## Solution

Treat the problem as two dimensional. The area of the spiral is

$$
A = \frac { \pi } { 4 } \left( D _ { o } ^ { 2 } - D _ { i } ^ { 2 } \right) .
$$

The area of the pipe is

$$
A = L d _ { o } .
$$

Equating and solving,

$$
L = \frac { \pi \left( D _ { o } ^ { 2 } - D _ { i } ^ { 2 } \right) } { 4 d _ { o } } = 33 \mathrm {~m} .
$$

f. Hollow pipe is used instead of solid conductors in order to allow for cooling of the magnet. If the resistivity of copper is $\rho = 1.7 \times 10 ^ { - 8 } \Omega \cdot \mathrm {~m}$, determine the electrical resistance of one spiral.

## Solution

We have

$$
r _ { s } = \frac { \rho L } { A }
$$

where $A$ is the cross sectional area of the pipe, or

$$
A = \frac { \pi } { 4 } \left( d _ { o } ^ { 2 } - d _ { i } ^ { 2 } \right) = 7.1 \times 10 ^ { - 6 } \mathrm {~m} ^ { 2 }
$$

Combining, we have

$$
r _ { s } = \frac { \rho } { d } \frac { D _ { o } ^ { 2 } - D _ { i } ^ { 2 } } { d _ { o } ^ { 2 } - d _ { i } ^ { 2 } } = 0.079 \Omega .
$$

g. There are $N = 24$ coils stacked on top of each other. Tap water with an initial temperature of $T _ { c } = 18 ^ { \circ } \mathrm { C }$ enters the spiral through the copper pipe to keep it from over heating; the water exits at a temperature of $T _ { h } = 31 ^ { \circ } \mathrm { C }$. The copper pipe carries a direct 45 Amp current in order to generate the necessary magnetic field. At what rate must the cooling water flow be provided to the electromagnet? Express your answer in liters per second with only one significant digit. The specific heat capacity of water is $4200 \mathrm {~J} / { } ^ { \circ } \mathrm { C } \cdot \mathrm { kg }$; the density of water is $1000 \mathrm {~kg} / \mathrm { m } ^ { 3 }$.


## Solution

The rate of heat generation in the coils is given by

$$
P = I ^ { 2 } R = I ^ { 2 } N r _ { s } = 3850 \mathrm {~W} .
$$

This must be dissipated via the increase in water temperature,

$$
P = C \Delta T Q
$$

where $C$ is the specific heat capacity in liters, and $Q$ is the flow rate in liters per second. But since one liter of water is one kilogram, we can use either $C$. Combining, we have

$$
Q = \frac { I ^ { 2 } N r } { C \Delta T } = 0.07 \mathrm { l } / \mathrm { s } .
$$

h. The protons are fired at a target consisting of Fluorine atoms $( Z = 9 )$. What is the distance of closest approach to the center of the Fluorine nuclei for the protons? You can assume that the Fluorine does not move.

## Solution

Conservation of energy gives

$$
q V = \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { Z q ^ { 2 } } { r }
$$

where $r$ is the radius of closest approach. Then

$$
r = \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { Z q } { V } = 2.59 \times 10 ^ { - 14 } \mathrm {~m}
$$

Since this is about the size of a Fluorine nucleus, we can potentially get a nuclear reaction. Actually, the important reaction occurs at about 380 kV .


## Exam Statistics

| Question | A1 | A2 | A3 | A4 | B1 | B2 | Total |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Mean | 11 | 3 | 5 | 6 | 12 | 15 | 53 |
| Standard Deviation | 7 | 4 | 5 | 7 | 10 | 14 | 29 |
| Maximum | 25 | 21 | 25 | 25 | 42 | 50 | 163 |
| Upper Quartile | 18 | 4 | 9 | 8 | 18 | 26 | 73 |
| Median | 10 | 2 | 5 | 5 | 10 | 12 | 49 |
| Lower Quartile | 4 | 0 | 0 | 0 | 3 | 1 | 30 |
| Minimum | 0 | 0 | 0 | 0 | 0 | 0 | 5 |

Some Trivia:

- California had 121 test takers
- New Jersey had 42
- Texas had 38
- Florida, Illinois, Massachusetts, Maryland, New York, and Virginia each had between one dozen and two dozen test takers
- Alabama, Alaska, Colorado, Idaho, Iowa, Louisiana, Montana, North Dakota, South Dakota, and Wyoming did not have a test taker this year.
