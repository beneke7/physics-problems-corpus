---
id: solution-ocr-usapho-2010-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2010-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

These three parts can be answered independently.

a. One pair of ends of two long, parallel wires are connected by a resistor, $R = 0.25 \Omega$, and a fuse that will break instantaneously if 5 amperes of current pass through it. The other pair of ends are unconnected. A conducting rod of mass $m$ is free to slide along the wires under the influence of gravity. The wires are separated by 30 cm, and the rod starts out 10 cm from the resistor and fuse. The whole system is placed in a uniform, constant magnetic field of $B = 1.2 \mathrm {~T}$ as shown in the figure. The resistance of the rod and the wires is negligible. When the rod is released it falls under the influence of gravity, but never loses contact with the long parallel wires.
![](../../../figures/solution-ocr/f264a558b8c3256e8c821600.jpg)
    i. What is the smallest mass needed to break the fuse?
    ii. How fast is the mass moving when the fuse breaks?
b. A fuse is composed of a cylindrical wire with length $L$ and radius $r \ll L$. The resistivity (not resistance!) of the fuse is small, and given by $\rho _ { \mathrm { f } }$. Assume that a uniform current $I$ flows through the fuse. Write your answers below in terms of $L , r , \rho _ { \mathrm { f } } , I$, and any fundamental constants.
    i. What is the magnitude and direction of the electric field on the surface of the fuse wire?
    ii. What is the magnitude and direction of the magnetic field on the surface of the fuse wire?
    iii. The Poynting vector, $\overrightarrow { \mathbf { S } }$ is a measure of the rate of electromagnetic energy flow through a unit surface area; the vector gives the direction of the energy flow. Since $\overrightarrow { \mathbf { S } } = \frac { 1 } { \mu _ { 0 } } \overrightarrow { \mathbf { E } } \times \overrightarrow { \mathbf { B } }$, where $\mu _ { 0 }$ is the permeability of free space and and $\overrightarrow { \mathbf { E } }$ and $\overrightarrow { \mathbf { B } }$ are the electric and magnetic field vectors, find the magnitude and direction of the Poynting vector associated with the current in the fuse wire.
c. A fuse will break when it reaches its melting point. We know from modern physics that a hot object will radiate energy (approximately) according to the black body law $P = \sigma A T ^ { 4 }$, where $T$ is the temperature in Kelvin, $A$ the surface area, and $\sigma$ is the Stefan-Boltzmann constant. If $T _ { \mathrm { f } } = 500 \mathrm {~K}$ is the melting point of the metal for the fuse wire, with resistivity $\rho _ { \mathrm { f } } = 120 \mathrm { n } \Omega \cdot \mathrm { m }$, and $I _ { \mathrm { f } } = 5$ A is the desired breaking current, what should be the radius of the wire $r$ ?


## Solution

a. i. As the rod accelerates downward, the rate of change in flux increases, increasing the emf and hence the current through the fuse. This produces an upward force on the rod, so if the fuse were indestructible, the rod would eventually reach terminal velocity. Hence the smallest mass that can break the fuse is the one which breaks it just as it reaches terminal velocity.
The maximal possible force on the rod comes when the fuse is about to break,
$$
F = I L B = ( 5.0 \mathrm {~A} ) ( 0.3 \mathrm {~m} ) ( 1.2 \mathrm {~T} ) = 1.8 \mathrm {~N} .
$$
This force must be exerted at terminal velocity, so its magnitude is $m g$, and
$$
m = \frac { F } { g } = 0.18 \mathrm {~kg} .
$$
    ii. We must relate the force on the rod to the rod's velocity. The emf in the circuit is
$$
\mathcal { E } = \frac { d \Phi _ { B } } { d t } = B L v
$$
where $v$ is the speed of the rod, so using Ohm's law,
$$
F = \frac { \mathcal { E } L B } { R } = \frac { B ^ { 2 } L ^ { 2 } v } { R } .
$$
Rearranging to solve for $v$, we have
$$
v = \frac { F R } { B ^ { 2 } L ^ { 2 } } = \frac { ( 1.8 \mathrm {~N} ) ( 0.25 \Omega ) } { ( 1.2 \mathrm {~T} ) ^ { 2 } ( 0.3 \mathrm {~m} ) ^ { 2 } } = 3.5 \mathrm {~m} / \mathrm { s } .
$$
b. i. The electric field is responsible for pushing current through the fuse, so it must be directed along the fuse. The resistance of the fuse is
$$
R _ { f } = \frac { \rho _ { f } L } { \pi r ^ { 2 } } .
$$
By the definition of the electric field, $E = V _ { f } / L$ where $V _ { f }$ is the voltage across the fuse. By Ohm's law we have
$$
E = \frac { I R _ { f } } { L } = \frac { I \rho _ { f } } { \pi r ^ { 2 } } .
$$
    ii. By Ampere's law, the magnetic field is
$$
B = \frac { \mu _ { 0 } } { 2 \pi } \frac { I } { }
$$
and it points along the circumference.


iii. Since the electric and magnetic fields are perpendicular, the magnitude of the Poynting vector is
$$
S = \frac { 1 } { \mu _ { 0 } } E B = \frac { I ^ { 2 } \rho _ { f } } { 2 \pi ^ { 2 } r ^ { 3 } } .
$$
Using the right-hand rule, it is directed into the fuse wire, explaining why it heats up. Indeed, according to this analysis the total power delivered to the fuse is
$$
P = ( 2 \pi r L ) S = \frac { I ^ { 2 } \rho _ { f } L } { \pi r ^ { 3 } }
$$
which is precisely equal to $I ^ { 2 } R _ { f }$.
c. At thermal equilibrium, we have
$$
\sigma T ^ { 4 } = \frac { I ^ { 2 } \rho _ { f } } { 2 \pi ^ { 2 } r ^ { 3 } } .
$$
Setting $T$ to $T _ { f }$ and $I$ to $I _ { f }$, and solving for $r$,
$$
r = \sqrt [ 3 ] { \frac { ( 5 \mathrm {~A} ) ^ { 2 } \left( 120 \times 10 ^ { - 9 } \Omega \cdot \mathrm {~m} \right) } { 2 \pi ^ { 2 } \left( 5.67 \times 10 ^ { - 8 } \mathrm {~J} / \left( \mathrm { s } \cdot \mathrm {~m} ^ { 2 } \cdot \mathrm {~K} ^ { 4 } \right) \right) ( 500 \mathrm {~K} ) ^ { 4 } } } = 0.35 \mathrm {~mm} .
$$
