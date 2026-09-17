---
id: izho-2026-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2026-t-q3
solution_type: official
source_document: solution-document-izho-2026-t-s
source_pdf: cache/phoxiv/izho/2026_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2026_T_S.pdf."
---

Problem 3. Electron Paramagnetic Resonance (10.0 points)
Magnetic Moment
3.1 The area of a circular coil of radius 𝑅 is equal to
𝑆 = 𝜋𝑅2
(1)
and when current 𝐼 flows through it, the modulus of its magnetic moment is equal to
𝑚 = 𝐼𝜋𝑅2
. (2)
The magnetic induction at the center of a circular loop is determined by the expression
𝐵0 =
𝜇0𝐼
2𝑅
, (3)
from which it follows that
𝑩0 =
𝜇0𝒎
2𝜋𝑅3
. (4)
3.2 If 𝑩 lies in the plane of the coil, then by analyzing the pairs of Ampere forces acting on the elements of
the coil opposite to the magnetic field induction vector, it can be shown that the modulus of the total
moment of forces is
𝑀 = 𝑚𝐵. (5)
In general, the magnetic moment m forms an angle 𝜑 with the field. Let us decompose 𝑩 into
components: one in the plane of the coil, and the other perpendicular to it. Obviously, the perpendicular
component does not create a torque, causing stretching or compression of the coil, and since the projection
of vector 𝑩 onto the plane of the coil is
𝐵 = 𝐵sin𝜑, (6)
then the modulus of the resulting torque of Ampere forces is equal to
𝑀 = 𝑚𝐵sin𝜑. (7)
3.3 The elementary work 𝑑𝐴 for a small rotation of the coil by an angle 𝑑𝜑 is equal to
𝑑𝐴 = 𝑀𝑑𝜑. (8)
When the coil rotates from the state when 𝒎 ↑↑ 𝑩 to the position 𝒎 ↑↓ 𝑩, the angle changes from 0
to π, and the total work is determined by the integral
𝐴 = ∫ 𝑀𝑑𝜑
𝜋
0
= 2𝑚𝐵. (9)
Electron Paramagnetic Resonance
3.4 Let an electron rotate in a circular orbit of radius 𝑅 with period 𝑇, then its motion can be represented as a
circular current with a force
𝐼 =
𝑒
𝑇
(10)
and magnetic moment is obtained as
𝑚 = 𝐼𝜋𝑅2
. (11)
The angular momentum of an electron moving along a circular trajectory with velocity 𝑣 is equal to
𝐿 = 𝑚𝑒𝑣𝑅, (12)
from where, taking into account the expression for the period of revolution
XXII International Zhautykov Olympiad/Theoretical Competition p. 9/11
𝑇 =
2𝜋𝑅
𝑣
, (13)
we get
𝑔𝐿 = 1. (14)
In the vector relationship between magnetic and mechanical moments, it is necessary to take into
account the sign due to the negative charge of the electron.
3.5 According to paragraph 3.3, to flip the spin, it is necessary to perform work (9), which together with the
formula in the condition for the magnetic moment gives
𝐴 = 𝑔𝑠𝐵0
eℏ
2𝑚𝑒
, (15)
which is accomplished due to the energy of the photon
𝐸 = ℏ𝜔, (16)
that is, the law of conservation of energy is fulfilled as
𝐸 = 𝐴. (17)
Thus, using 𝑔𝑠 = 2𝑔𝐿 = 2, we get
𝜔 =
e𝐵0
𝑚𝑒
= 6.15 ∙ 1010
s−1
, (18)
which is equal to the so-called Larmor frequency of rotation of an electron in a magnetic field.
3.6 In the absence of a core, the magnetic field in the solenoid is proportional to the current, that is,
𝐵0 ∝ 𝐼0, (19)
and in the presence of the core, the magnetic field is also proportional to the magnetic permeability of the
substance
𝐵 ∝ 𝜇𝐼. (20)
The resonance occurs at the same value of the magnetic induction, therefore
𝐼 =
𝐼0
𝜇
= 1.2 А. (21)
Thermodynamic equilibrium
3.7 In a state of thermodynamic equilibrium, the distribution of electrons across energy levels obeys the
Boltzmann distribution, therefore
𝑁2
𝑁1
= exp(−
ℏω
𝑘𝐵𝑇
), (22)
on the other hand, the total number of atoms is known and equal
𝑁 = 𝑁1 + 𝑁2. (23)
Thus, from (22) and (23), we obtain under condition ℏω ≪ 𝑘𝐵𝑇
𝑛0 =
ℏω
2𝑘𝐵𝑇
𝑁 = 4.68 ∙ 1017
. (24)
3.8 In a state of thermodynamic equilibrium, the rates of upward and downward transitions should be the
same, since the number of atoms at the energy levels should not change, in particular for the lower level we
have
𝑑𝑁1
𝑑𝑡
= −𝐵12𝜌𝑁1 + 𝐴21𝑁2 + 𝐵21𝜌𝑁2 = 0, (25)
from which we obtain for the energy density of electromagnetic radiation
𝜌 =
𝐴21
𝐵21(
𝑁1𝐵12
𝑁2𝐵21
−1)
. (26)
Taking into account relation (22) and comparing with Planck's formula, we conclude that
𝐵12 = 𝐵21. (27)
Presence of an external microwave field source
3.9 Taking into account the equality of the Einstein coefficients and neglecting spontaneous transitions,
equation (25) can be rewritten as
𝑑𝑁1
𝑑𝑡
= −𝑘𝑁1 + 𝑘𝑁2, (28)
which, taking into account (23), gives rise to
𝑑𝑛
𝑑𝑡
= −2𝑘𝑛. (29)
Using the initial condition 𝑛(0) = 𝑛0, we obtain the solution of equation (29) in the form
𝑛(𝑡) = 𝑛0 exp(−2𝑘𝑡). (30)
XXII International Zhautykov Olympiad/Theoretical Competition p. 10/11
It is interesting to note that under the influence of an external source of an alternating field, the difference in
the number of atoms at the two levels drops to zero over time.
3.10 From formula (30) it follows that
𝑘 =
ln2
2𝜏
. (31)
Since during the transition of each atom from the lower level to the upper one quantum of energy of
the alternating field ℏ𝜔 is absorbed, and during each reverse transition the same energy is released, then the
expression describing the absorption of energy 𝐸 of the alternating field in the core has the form
𝑑𝐸
𝑑𝑡
= 𝑘𝑛ℏω, (32)
and this means that at the initial moment of time the power of the source is equal to
𝑃 =
𝑑𝐸
𝑑𝑡
(0) =
𝑛0ℏωln2
2𝜏
= 1.05 mW. (33)
3.11 Let us consider the case of the absence of an external field, then the equation given in the condition for
level 1 is rewritten as
𝑑𝑛
𝑑𝑡
= 𝑁(𝛼2 − 𝛼1) − 𝑛(𝛼1 + 𝛼2). (34)
Since equation (34) must include the condition of thermodynamic equilibrium, then when the
derivative on the left becomes zero, the equilibrium concentration must be equal to 𝑛0, from which it
follows that
𝑁 = 𝑛0
(𝛼1+𝛼2)
(𝛼2−𝛼1)
. (35)
Substituting (35) into (34) and adding the term from (29), we obtain an equation for taking into
account the presence of an alternating field
𝑑𝑛
𝑑𝑡
= −2𝑘𝑛 − (𝑛 − 𝑛0)(𝛼1 + 𝛼2). (36)
Since it is required to determine the power of the source in a stationary mode, the difference in the
number of atoms at the lower and upper levels must be constant, that is, 𝑑𝑛/𝑑𝑡 = 0, from which it follows
𝑛 =
𝑛0
1+
2𝑘
(𝛼1+𝛼2)
. (37)
The power of the source is still determined by equation (42) and taking into account that 2𝑘 ≫
(𝛼1 + 𝛼2), we finally obtain
𝑃 =
1
2
𝑛0ℏω(𝛼1 + 𝛼2) = 1.01 μW. (38)
Note that, unlike 3.10, the power of the source does not depend on the energy density of the electromagnetic
field; this is the so-called saturation mode.
Content Points
3.1
Formula (1): 𝑆 = 𝜋𝑅2 0.2
0.8
Formula (2): 𝑚 = 𝐼𝜋𝑅2
0.2
Formula (3): 𝐵0 =
𝜇0𝐼
2𝑅
0.2
Formula (4): 𝑩0 =
𝜇0𝒎
2𝜋𝑅3 0.2
3.2
Formula (5): 𝑀 = 𝑚𝐵 0.2
0.6 Formula (6): 𝐵 = 𝐵sin𝜑 0.2
Formula (7): 𝑀 = 𝑚𝐵sin𝜑 0.2
3.3
Formula (8): 𝑑𝐴 = 𝑀𝑑𝜑 0.2
0.4
Formula (9): 𝐴 = 2𝑚𝐵 0.2
3.4
Formula (10): 𝐼 =
𝑒
𝑇
0.2
1.0
Formula (11): 𝑚 = 𝐼𝜋𝑅2
0.2
Formula (12): 𝐿 = 𝑚𝑒𝑣𝑅 0.2
Formula (13): 𝑇 =
2𝜋𝑅
𝑣
0.2
Formula (14): 𝑔𝐿 = 2 0.2
3.5 Formula (15): 𝐴 = 𝑔𝑠𝐵0
eℏ
2𝑚𝑒
0.2 1.0
XXII International Zhautykov Olympiad/Theoretical Competition p. 11/11
Formula (16): 𝐸 = ℏ𝜔 0.2
Formula (17): 𝐸 = 𝐴 0.2
Formula (18): 𝜔 =
e𝐵0
𝑚𝑒
0.2
Numerical value in formula (18): 𝜔 = 6.15 ∙ 1010
s−1
0.2
3.6
Formula (19): 𝐵0 ∝ 𝐼0 0.2
0.8
Formula (20): 𝐵 ∝ 𝜇𝐼 0.2
Formula (21): 𝐼 =
𝐼0
𝜇
0.2
Numerical value in formula (21): 𝐼 = 1.2 А 0.2
3.7
Formula (22):
𝑁2
𝑁1
= exp(−
ℏω
𝑘𝐵𝑇
) 0.2
1.0
Formula (23): 𝑁 = 𝑁1 + 𝑁2 0.2
Formula (24): 𝑛0 =
ℏω
2𝑘𝐵𝑇
𝑁 0.3
Numerical value in formula (24): 𝑛0 = 4.68 ∙ 1017 0.3
3.8
Formula (25): −𝐵12𝜌𝑁1 + 𝐴21𝑁2 + 𝐵21𝜌𝑁2 = 0 0.4
1.0 Formula (26): 𝜌 =
𝐴21
𝐵21(
𝑁1𝐵12
𝑁2𝐵21
−1) 0.4
Formula (22) is used 0.2
3.9
Formula (28):
𝑑𝑁1
𝑑𝑡
= −𝑘𝑁1 + 𝑘𝑁2 0.2
0.6 Formula (29):
𝑑𝑛
𝑑𝑡
= −2𝑘𝑛 0.2
Formula (30): 𝑛(𝑡) = 𝑛0 exp(−2𝑘𝑡) 0.2
3.10
Formula (31): 𝑘 =
ln2
2𝜏
0.2
0.8
Formula (32):
𝑑𝐸
𝑑𝑡
= 𝑘𝑛ℏω 0.2
Formula (33): 𝑃 =
𝑛0ℏωln2
2𝜏
0.2
Numerical value in formula (33): 𝑃 = 1.05 mW 0.2
3.11
Formula (34):
𝑑𝑛
𝑑𝑡
= 𝑁(𝛼2 − 𝛼1) − 𝑛(𝛼1 + 𝛼2) 0.3
2.0
Formula (35): 𝑁 = 𝑛0
(𝛼1+𝛼2)
(𝛼2−𝛼1)
0.3
Formula (36):
𝑑𝑛
𝑑𝑡
= −2𝑘𝑛 − (𝑛 − 𝑛0)(𝛼1 + 𝛼2) 0.3
Formula (37): 𝑛 =
𝑛0
1+
2𝑘
(𝛼1+𝛼2)
0.3
Formula (38): 𝑃 =
1
2
𝑛0ℏω(𝛼1 + 𝛼2) 0.3
Numerical value in formula (38): 𝑃 = 1.01 μW 0.5
Total 10.0
