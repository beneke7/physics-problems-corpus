---
id: inpho-2020-a1
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2020-a1
solution_type: official
source_document: solution-document-inpho-2020-s
source_pdf: cache/phoxiv/inpho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2020_S.pdf."
---

1. A certain gas obeys the equation of state U(S,V ,N) = aS7/V 4N2 , where a is a dimensioned
constant. Here U represents the internal energy of the gas, S the entropy, V the volume and N
the fixed number of particles of the system.
(a) [3] Let such a gas be filled in a box of volume V and the internal energy of the system be U. A
partition is placed to divide the box into two equal parts, each having volume V /2. For each
part, the internal energy is now αU and the dimensioned constant be βa. Obtain α and β.
α = β =
Solution: An extensive parameter of the system gets halved if the size of the system is
halved, while an intensive parameter remains unchanged. The internal energy and the
entropy, both are extensive parameters. Thus α = 1/2, β = 1.
(b) [2] The temperature T can be expressed in terms of the derivative of internal energy as
T =

dU
dS

V ,N
where the subscripts indicate that the differentiation has been carried out keeping V and N
constant. In a similar way, express pressure P in terms of a derivative of the internal energy.
P =
Solution:
P = −

dU
dV

S,N
(c) [1] Find the equation of state of the given system relating P, T , and V .
P =
Solution: From the definition of temperature,
T =
7aS6
N2V 4
From part (b)
P =
4aS7
V 5N2
H B C 2 0
INPhO 2020 Page 2 Questions & Summary Answers Last four digits of Roll No.:
Eliminating S yields
P = C
T7/6
V 1/3
where C =
4N1/3
77/6a1/6
(d) [7] One mole of this gas executes a Carnot cycle
ABCDA between reservoirs at temperatures T1 and
T2 (T1 > T2). Obtain the heat change in the pro-
cess AB (QAB) and work done by the system in
the processes AB and BC (WAB,WBC) of the cycle.
Express your answers only in terms of temperatures
T1,T2, volumes VA,VB, and the other constants.
P
V
A
B
C
D
VA VB
QAB =
WAB =
WBC =
Solution:
S =
7
4
PV
T
, U =
PV
4
Leg AB: A → B (isothermal)⇒ T1 = constant
QAB = T1
Z B
A
dS (1.1)
=
7
4
(PBVB −PAVA) (1.2)
H B C 2 0
INPhO 2020 Page 3 Questions & Summary Answers
Using equation of state,
QAB =
7C
4

V
2
3
B −V
2
3
A

T
7
6
1
WAB =
Z B
A
PdV = c
Z B
A
V −1/3
T7/6
1 dV (1.3)
WAB =
3C
2
T7/6
1

V
2
3
B −V
2
3
A

Leg BC is isentropic/adiabatic ⇒ Q = 0 or S = constant. From first law,
WBC = −∆U =
aS7
N2
"
1
V 4
B
−
1
V 4
C
#
(1.4)
=
a
N2
"
S7
V 4
B
−
S7
V 4
C
#
(1.5)
Also, S = 7C
4 V 2/3T1/6
WBC =
a
N2

7C
4
7 
V
2
3
B T
7
6
1 −V
2
3
C T
7
6
2

(1.6)
WBC =
a
N2

7C
4
7
V
2
3
B T
1
6
1 [T1 −T2]
Detailed answers can be found on page numbers:
2. [12] An insulating uniformly charged cylindrical shell
of radius a lies with its axis along the z axis. The
shell’s moment of inertia per unit length about the
z axis and the surface charge density are I and σ
respectively. The cylinder is placed in an external
uniform magnetic field Bexẑ, and is initially at rest.
Starting at t = 0 the external magnetic field is
slowly reduced to zero. What is the final angular
velocity ω of the cylinder?
ω =
Detailed answers can be found on page numbers:
Solution: As the magnetic field drops, its time derivative results in an induced electric field,
H B C 2 0
INPhO 2020 Page 4 Questions & Summary Answers Last four digits of Roll No.:
in azimuthal direction.
Eφ(r) = −
rḂz
2
(2.1)
This field acts on the charged cylindrical shell to produce azimuthal torque (per unit length).
τφ = aEφ(a)2πaσ (2.2)
τφ = I
dω
dt
(2.3)
dω = −
σπa3
I
dBz (2.4)
ω = −
σπa3
I
Z Bf
Bi
dBz (2.5)
=
σπa3
I
(Bi −Bf) (2.6)
Bi = Bex and Bf is the non-zero magnetic field produced by the rotating charged cylinder.
For the rotating cylinder, compare with solenoid,the magnetic field will be along z axis and
equal to
~ Bf = µ0niẑ (2.7)
= µ0jφẑ (2.8)
where jφ = aσω is azimuthal current per unit length. Thus
~ Bf = µ0aσωẑ
ω =
σπa3
I
(Bex −µ0aσω) (2.9)
ω =
σπa3
I
1 +
µ0σ2a4π
I
!−1
Bex (2.10)
