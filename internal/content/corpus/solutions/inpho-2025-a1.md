---
id: inpho-2025-a1
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2025-a1
solution_type: official
source_document: solution-document-inpho-2025-s
source_pdf: cache/phoxiv/inpho/2025_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2025_S.pdf."
---

1. The Flywheel Chronicles
In the following experiment we are interested in determining the moment of inertia of a ﬂywheel.
The free ends of the axle in a ﬂywheel assembly are placed inside grooves at both ends, to rigid
supports provided on the wall (see diagram below). The diameter of the axle is d = 2.72 cm. The
total work done by the axle in overcoming the friction in the two grooves per rotation is W. A
massless string, attached to a point mass m is wound tightly in n turns (without overlap) on the
axle. The string unwinds from the axle without slipping as the mass descends from an initial
height h. The length of the string is adjusted such that when the mass just touches the ﬂoor, the
string detaches from the axle.
h
d
Flywheel
Axle
m
Rigid support
Rigid support
From the instant when the mass touches the ﬂoor (taken as t = 0), the ﬂywheel continues to
rotate, adding another N number of rotations before coming to rest in time t = T. The ﬁgure is
not to scale.
(a) [5 marks] Derive an expression for the moment of inertia I of the ﬂywheel in terms of
m,N,T, and other known parameters.
Solution: Using conservation of energy
mgh = nW +
1
2
mv2
+
1
2
Iω2
(1.1)
Also,
NW =
1
2
Iω2
(1.2)
W =
Iω2
2N
(1.3)
Substituting Eq.(1.3) in Eq.(1.1), we get
mgh = n.
1
2N
Iω2
+
1
2
mv2
+
1
2
Iω2
(1.4)
Simplifying above equation we get,
I =
2mgh
ω2 1 + n
N
 −
md2
4 1 + n
N
 (1.5)
where ω = 4πN
T
Final answers written in the form of W are also accepted.
H B C S E
Page 3 INPhO 2025 Questions
(b) [3 marks] The following data has been obtained in this experiment.
m (gm) N T (sec)
150.0 145.25 190.0
200.0 200.00 225.5
250.0 238.50 235.5
Calculate the value of I for n = 16, and h = 139cm.
Solution: From the given data, we can calculate the respective value of the moment of
inertia I1,I2,I3 are 3.99 × 105gm-cm2, 4.06 × 105gm-cm2, 3.94 × 105gm-cm2. The mean
value of the moment of inertia is 4.00 × 105gm-cm2.
H B C S E
Page 4 INPhO 2025 Questions Last four digits of Roll No.:
2. Gearminator: Rise of the Machines
We consider a “thought experiment” involving a DC motor and a DC generator coupled mechan-
ically through a gearbox, operating under idealized conditions, to explore the power output and
eﬃciency of the system (see schematic ﬁgure below). The schematic gearbox assembly is also
shown in the ﬁgure.
+
r
R
εG
Gearbox
commutator
B B
commutator
Motor gear Generator
gear
Gearbox
Both the motor and the generator have N loops of area A and rotate in a uniform magnetic ﬁeld of
strength B. As usual, both the motor and the generator use commutators (indicated by the blue
blocks) to reverse the direction of current in each arm every half cycle, to ensure unidirectional
output. The generator is connected to an external resistance R, and the motor is driven by a
constant voltage VM with an internal resistance r. The gearbox is idealized, with no energy loss
due to friction or otherwise, and no slipping between the teeth of the gears. For a pair of meshing
gears, as shown above, the angular speed ratio, also known as the gear ratio X, is deﬁned as:
X =
ωM
ωG
,
where ωM and ωG are the angular velocities of the motor and the generator, respectively. Let
⟨PG⟩, and ⟨PM⟩ be the time-averaged generator output power and the time-averaged motor input
power, respectively, over one complete cycle.
(a) [6 marks] Derive the expression for ωG in terms of X, R, r, and the given parameters. For
ﬁxed values of r and R, determine the expression of X for which ωG is maximum.
Solution: First, we analyze motor equations:
Applying voltage VM drives the motor. The current IM and and the angular speed ωM
are determined through the following equations.
• The circuit equation for motor with speed ωM is
VM − ϵbM − IMr = 0 (2.1)
H B C S E
Page 5 INPhO 2025 Questions
where ϵbM = NABωM sin(ωMt) is the induced back emf. Thus, the current IM is
IM =
1
r
(VM − NBAωM sin(ωMt)) (2.2)
• The magnetic torque on the coils carrying current IM is
τM = NIMBAsin(ωMt) (2.3)
=
1
r
VMNBAsin(ωMt) − N2
B2
