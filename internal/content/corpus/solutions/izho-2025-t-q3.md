---
id: izho-2025-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2025-t-q3
solution_type: official
source_document: solution-document-izho-2025-t-s
source_pdf: cache/phoxiv/izho/2025_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2025_T_S.pdf."
---

Problem 3. Dirac's monopole (10.0 points)
Introduction
3.1 It is easy to establish that the dimension of the magnetic charge is equal to [𝑞𝑚] = А ∙ m, therefore we
obtain
𝑥1 = 1;𝑥2 = 1;𝑥3 = 0;𝑥4 = 0. (1)
3.2 Calculation using the given formula leads to the answer
𝐿 = 1.69 ∙ 10−7
Hn. (2)
Classical description
3.3 Since the average normal component of the magnetic induction vector over the cross-section is known,
the magnetic flux through the ring is equal to
𝛷 = 𝜋𝑅2
𝐵𝑧(𝑥), (3)
and the induction EMF in the ring is determined by M. Faraday's law of electromagnetic induction
𝜀𝑖𝑛𝑑(𝑥) = −
𝑑𝛷
𝑑𝑡
, (4)
from which we finally find
𝜀𝑖𝑛𝑑(𝑥) = −
𝑑𝛷
𝑑𝑥
𝑑𝑥
𝑑𝑡
= 𝑉𝜋𝑅2
𝐵0𝑎3 3𝑥
(𝑥2+𝑎2)
5
2
. (5)
The graph of this dependence is shown schematically in the figure below.
XXI International Zhautykov Olympiad/Theoretical Competition p. 9/12
3.4 Since the ring is superconducting, the induction EMF that occurs in the ring when the external magnetic
flux changes is compensated by the self-induction EMF, that is,
𝜀𝑖𝑛𝑑 − 𝐿
𝑑𝐼
𝑑𝑡
= 0, (6)
from where, taking into account formula (4) and integration with the initial condition, we obtain
𝐼(𝑥) = −
𝛷
𝐿
= −
𝐵0𝜋𝑅2
𝐿
𝑎3
(𝑥2+𝑎2)
3
2
. (7)
The schematic graph of this dependence is shown in the figure below. Up to a negative coefficient,
this graph repeats the graph of the dependence of the magnetic flux through the ring on the ring coordinate.
3.5 As follows from the obtained expression (7), after the magnet flies away through the ring, the final
current in the ring is found to be zero, that is
𝐼𝑓 = 0. (8)
3.6 In the frame of reference associated with the monopole, the electrons in the ring are subject to the
Lorentz force, whose magnitude can be represented as
𝐹𝐿(𝑧) = −𝑒𝑉𝐵𝑟(𝑧), (9)
where 𝐵𝑟 denotes the radial component of the magnetic field induction vector of the monopole. The minus
sign appears because in this frame of reference the velocity of the ring is negative.
The radial component of the induction vector in this case can be easily expressed using the formula
given in the problem formulation:
𝐵𝑟(𝑧) =
𝜇0𝑞𝑚
4𝜋
𝑅
(𝑅2+𝑧2)
3
2
. (10)
Thus, the dependence of the Lorentz force on the ring coordinate has the form
𝐹𝐿(𝑧) = −𝑒𝑉
𝜇0𝑞𝑚
4𝜋
𝑅
(𝑅2+𝑧2)
3
2
. (11)
This force always points in one direction, which means that the resulting formula is valid for any
values of the ring coordinate.
3.7 The induction EMF in this case is equal to the work of the Lorentz force to move a single charge along
the ring
𝜀𝑖𝑛𝑑(𝑧) =
2𝜋𝑅𝐹𝐿(𝑧)
𝑒
= −
𝜇0𝑞𝑚𝑉
2
𝑅2
(𝑅2+𝑧2)
3
2
. (12)
The schematic graph of this dependence is shown in the figure below.
3.8 From formula (6) we find the current strength by integrating, taking into account that 𝑑𝑧 = −𝑉𝑑𝑡, and
also using the initial condition
𝐼 = −
𝜇0𝑞𝑚
2𝐿
(1 −
𝑧
√𝑅2+𝑧2
). (13)
The schematic graph of this dependence is shown in the figure below.
XXI International Zhautykov Olympiad/Theoretical Competition p. 10/12
3.9 After the monopole passes away through the ring (𝑧 = −∞), the ring current “remains”, whose strength
is equal to
𝐼𝑓 = −
𝜇0𝑞𝑚
𝐿
. (14)
Thus, unlike when a magnet passes through a ring, there must be a residual current that can be
attempted to be detected in an experiment!
Quantization of magnetic flux in superconductors
3.10 Cooper pairs are accelerated in the ring due to the action of the Lorentz force, therefore, using formula
(12), which relates the force with the EMF arising in the ring, as well as M. Faraday's law (4), we obtain the
following equation of motion of an electron in the ring
𝑚𝑒
𝑑𝑣
𝑑𝑡
= −
𝑒
2𝜋𝑅
𝑑𝛷
𝑑𝑡
, (15)
where 𝑣 designates the speed of its motion.
The angular momentum of a pair of electrons relative to the center of the ring is equal to
𝑀 = 2𝑚𝑒𝑣𝑅, (16)
therefore, the sought relationship takes the form
∆𝑀 = −
𝑒
𝜋
∆𝛷. (17)
3.11 Considering that the change in the magnetic field of the induced current is equal in magnitude and
opposite to the change in the magnetic flux of the external field and taking into account N. Bohr's
quantization rule, we find
𝜑0 =
𝜋
𝑒
ℏ = 2.06 ∙ 10−15
Wb. (18)
3.12 From formula (7), which relates the change in flux to the current in the ring, we obtain
∆𝐼0 =
𝜑0
𝐿
= 1.22 ∙ 10−8
А. (19)
Estimating the Dirac Monopole Mass
3.13 The induction of the magnetic field of a monopole is determined by the formula from the problem
statement, and since the magnetic field of a monopole is spherically symmetric, the total magnetic flux
through a sphere, whose center coincides with the monopole, is equal to
𝛷 = 𝜇0𝑞𝑚, (20)
and since it is quantized
𝛷 = 𝑛𝜑0, (21)
where 𝑛 is an integer, then from expressions (20) and (21) we infer that the magnetic charge is also
quantized
𝑞𝑚 = 𝑛
𝜑0
𝜇0
. (22)
From formula (22) we conclude that the elementary magnetic charge is equal to
𝑞𝑚0 =
𝜑0
𝜇0
=
𝜋ℏ
𝑒𝜇0
= 1.64 ∙ 10−9
А ∙ m. (23)
3.14 Since the change in the magnetic flux through the ring during the flight of the Dirac monopole is equal
to one quantum of the magnetic flux, the change in current in the ring is equal to the previously found value
∆𝐼 = ∆𝐼0 = 1.22 ∙ 10−8
А. (24)
3.15 The energy of the electric field of a sphere of radius 𝑟0 uniformly charged over the surface can be
calculated using the formula
𝑊 𝑒 =
𝑒2
8𝜋𝜀0𝑟0
. (25)
Equating this energy to the rest energy
XXI International Zhautykov Olympiad/Theoretical Competition p. 11/12
𝑊 𝑒 = 𝑚𝑒𝑐2
, (26)
we find the classical radius of the electron
𝑟0 =
𝑒2
8𝜋𝜀0𝑚𝑒𝑐2
= 1.40 ∙ 10−15
m. (27)
3.16 The energy of the magnetic field of the Dirac monopole 𝑊 𝑚 is found by analogy with the electric field
energy of electron (25) as
𝑊 𝑚 =
𝜇0𝑞𝑚0
2
8𝜋𝑟0
. (28)
Equating this energy to the rest energy
𝑊 𝑚 = 𝑚𝑚𝑐2
, (29)
we obtain for the sought mass ratio
𝑚𝑚
𝑚𝑒
=
𝜇0𝜀0𝑞𝑚0
2
𝑒2
= (
𝜋
𝑒2𝑐𝜇0
)
2
= 1.17 ∙ 103
. (30)
Content Points
3.1 Formula (1): 𝑥1 = 1;𝑥2 = 1;𝑥3 = 0;𝑥4 = 0, за каждое по 0.2 0.8 0.8
3.2 Numerical value in formula (2): 𝐿 = 1.69 ∙ 10−7
Гн 0.6 0.6
3.3
Formula (3): 𝛷 = 𝜋𝑅2
𝐵𝑧(𝑥) 0.2
1.2
Formula (4): 𝜀𝑖𝑛𝑑(𝑥) = −
𝑑𝛷
𝑑𝑡
0.2
Formula (5): 𝜀𝑖𝑛𝑑(𝑥) = 𝑉𝜋𝑅2
𝐵0𝑎3 3𝑥
(𝑥2+𝑎2)
5
2
0.2
Qualitative graph:
Tends to zero at infinity
Passes through the origin
Two local extrema, maximum and minimum
0.2
0.2
0.2
3.4
Formula (6): 𝜀𝑖𝑛𝑑 − 𝐿
𝑑𝐼
𝑑𝑡
= 0 0.2
0.8
Formula (7): 𝐼(𝑥) = −
𝐵0𝜋𝑅2
𝐿
𝑎3
(𝑥2+𝑎2)
3
2
0.2
Qualitative graph:
Tends to zero at infinity
Extremum at the origin
0.2
0.2
3.5 Formula (8): 𝐼𝑓 = 0 0.2 0.2
3.6
Formula (9): 𝐹𝐿(𝑧) = −𝑒𝑉𝐵𝑟(𝑧) 0.2
0.6
Formula (10): 𝐵𝑟(𝑧) =
𝜇0𝑞𝑚
4𝜋
𝑅
(𝑅2+𝑧2)
3
2
0.2
Formula (11): 𝐹𝐿(𝑧) = −𝑒𝑉
𝜇0𝑞𝑚
4𝜋
𝑅
(𝑅2+𝑧2)
3
2
0.2
3.7
Formula (12): 𝜀𝑖𝑛𝑑(𝑧) = −
𝜇0𝑞𝑚𝑉
2
𝑅
(𝑅2+𝑧2)
3
2
0.2
0.6 Qualitative graph:
Tends to zero at infinity
Extremum at the origin
0.2
0.2
3.8
Formula (13): 𝐼 = −
𝜇0𝑞𝑚
2𝐿
(1 −
𝑧
√𝑅2+𝑧2
) 0.2
0.8
Quality graph:
Tends to zero at plus infinity
Reaches a constant value at minus infinity
Monotonic in nature
0.2
0.2
0.2
3.9 Formula (14): 𝐼𝑓 = −
𝜇0𝑞𝑚
𝐿 0.2 0.2
3.10
Formula (15): 𝑚𝑒
𝑑𝑣
𝑑𝑡
= −
𝑒
2𝜋𝑅
𝑑𝛷
𝑑𝑡
0.2
0.6
Formula (16): 𝑀 = 2𝑚𝑒𝑣𝑅 0.2
XXI International Zhautykov Olympiad/Theoretical Competition p. 12/12
Formula (17): ∆𝑀 = −
𝑒
𝜋
∆𝛷 0.2
3.11
Formula (18): 𝜑0 =
𝜋
𝑒
ℏ 0.2
0.4
Numerical value in formula (18): 𝜑0 = 2.06 ∙ 10−15
Wb 0.2
3.12
Formula (19): ∆𝐼0 =
𝜑0
𝐿
0.2
0.4
Numerical value in formula (19): ∆𝐼0 = 1.22 ∙ 10−8
А 0.2
3.13
Formula (20): 𝛷 = 𝜇0𝑞𝑚 0.2
1.0
Formula (21): 𝛷 = 𝑛𝜑0 0.2
Formula (22): 𝑞𝑚 = 𝑛
𝜑0
𝜇0
0.2
Formula (23): 𝑞𝑚0 =
𝜑0
𝜇0
=
𝜋ℏ
𝑒𝜇0
0.2
Numerical value in formula (23): 𝑞𝑚0 = 1.64 ∙ 10−9
А ∙ m 0.2
3.14 Formula (24): ∆𝐼 = ∆𝐼0 0.2 0.2
3.15
Formula (25): 𝑊 𝑒 =
𝑒2
8𝜋𝜀0𝑟0
. 0.2
0.8
Formula (26): 𝑊 𝑒 = 𝑚𝑒𝑐2 0.2
Formula (27): 𝑟0 =
𝑒2
8𝜋𝜀0𝑚𝑒𝑐2
0.2
Numerical value in formula (27): 𝑟0 = 1.40 ∙ 10−15
m 0.2
3.16
Formula (28): 𝑊 𝑚 =
𝜇0𝑞𝑚0
2
8𝜋𝑟0
0.2
0.8
Formula (29): 𝑊 𝑚 = 𝑚𝑚𝑐2 0.2
Formula (30):
𝑚𝑚
𝑚𝑒
=
𝜇0𝜀0𝑞𝑚0
2
𝑒2 = (
𝜋
𝑒2𝑐𝜇0
)
2 0.2
Numerical value in formula (30):
𝑚𝑚
𝑚𝑒
= 1.17 ∙ 103 0.2
Total 10.0
