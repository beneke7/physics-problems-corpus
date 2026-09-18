---
id: usapho-2010-b2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2010-b2
solution_type: official
source_document: solution-document-usapho-2010-s
source_pdf: cache/phoxiv/usapho/2010_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2010_S.pdf."
---

Question B2
These three parts can be answered independently.
a. One pair of ends of two long, parallel wires are connected by a resistor, R = 0.25 Ω, and a
fuse that will break instantaneously if 5 amperes of current pass through it. The other pair
of ends are unconnected. A conducting rod of mass m is free to slide along the wires under
the influence of gravity. The wires are separated by 30 cm, and the rod starts out 10 cm
from the resistor and fuse. The whole system is placed in a uniform, constant magnetic field
of B = 1.2 T as shown in the figure. The resistance of the rod and the wires is negligible.
When the rod is released it falls under the influence of gravity, but never loses contact with
the long parallel wires.
Resistor Fuse
Sliding Rod
The magnetic field is
directed into the page
i. What is the smallest mass needed to break the fuse?
ii. How fast is the mass moving when the fuse breaks?
b. A fuse is composed of a cylindrical wire with length L and radius r
 L. The resistivity
(not resistance!) of the fuse is small, and given by ρf. Assume that a uniform current I flows
through the fuse. Write your answers below in terms of L, r, ρf, I, and any fundamental
constants.
i. What is the magnitude and direction of the electric field on the surface of the fuse wire?
ii. What is the magnitude and direction of the magnetic field on the surface of the fuse
wire?
iii. The Poynting vector, ~ S is a measure of the rate of electromagnetic energy flow through
a unit surface area; the vector gives the direction of the energy flow. Since ~ S = 1
µ0
~ E× ~ B,
where µ0 is the permeability of free space and and ~ E and ~ B are the electric and magnetic
field vectors, find the magnitude and direction of the Poynting vector associated with
the current in the fuse wire.
c. A fuse will break when it reaches its melting point. We know from modern physics that a
hot object will radiate energy (approximately) according to the black body law P = σAT4,
where T is the temperature in Kelvin, A the surface area, and σ is the Stefan-Boltzmann
constant. If Tf = 500 K is the melting point of the metal for the fuse wire, with resistivity
ρf = 120 nΩ · m, and If = 5 A is the desired breaking current, what should be the radius of
the wire r?
Copyright c 2010 American Association of Physics Teachers
2010 Semifinal Exam Part B 12
Solution
a. i. As the rod accelerates downward, the rate of change in flux increases, increasing the emf
and hence the current through the fuse. This produces an upward force on the rod, so
if the fuse were indestructible, the rod would eventually reach terminal velocity. Hence
the smallest mass that can break the fuse is the one which breaks it just as it reaches
terminal velocity.
The maximal possible force on the rod comes when the fuse is about to break,
F = ILB = (5.0A)(0.3m)(1.2T) = 1.8N.
This force must be exerted at terminal velocity, so its magnitude is mg, and
m =
F
g
= 0.18kg.
ii. We must relate the force on the rod to the rod’s velocity. The emf in the circuit is
E =
dΦB
dt
= BLv
where v is the speed of the rod, so using Ohm’s law,
F =
ELB
R
=
B2L2v
R
.
Rearranging to solve for v, we have
v =
FR
B2L2
=
(1.8 N)(0.25Ω)
(1.2 T)2(0.3 m)2
= 3.5m/s.
b. i. The electric field is responsible for pushing current through the fuse, so it must be
directed along the fuse. The resistance of the fuse is
Rf =
ρfL
πr2
.
By the definition of the electric field, E = Vf/L where Vf is the voltage across the fuse.
By Ohm’s law we have
E =
IRf
L
=
Iρf
πr2
.
ii. By Ampere’s law, the magnetic field is
B =
µ0
2π
I
r
and it points along the circumference.
Copyright c 2010 American Association of Physics Teachers
2010 Semifinal Exam Part B 13
iii. Since the electric and magnetic fields are perpendicular, the magnitude of the Poynting
vector is
S =
1
µ0
EB =
I2ρf
2π2r3
.
Using the right-hand rule, it is directed into the fuse wire, explaining why it heats up.
Indeed, according to this analysis the total power delivered to the fuse is
P = (2πrL)S =
I2ρfL
πr3
which is precisely equal to I2Rf.
c. At thermal equilibrium, we have
σT4
=
I2ρf
2π2r3
.
Setting T to Tf and I to If, and solving for r,
r = 3
s
(5 A)2(120 × 10−9 Ω · m)
2π2(5.67 × 10−8 J/(s · m2 · K4))(500 K)4
= 0.35 mm.
Copyright c 2010 American Association of Physics Teachers
