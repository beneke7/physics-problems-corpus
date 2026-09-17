---
id: izho-2026-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2026-t-q2
solution_type: official
source_document: solution-document-izho-2026-t-s
source_pdf: cache/phoxiv/izho/2026_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2026_T_S.pdf."
---

Problem 2. Steam Engine (10.0 points)
Part 1. Steam Engine without a Governor
2.1 Let us write the equation of the adiabatic process
𝑃𝑉𝛾
= 𝑐𝑜𝑛𝑠𝑡 (1)
Applying it to process 2–3, we obtain
𝜂 = (
𝑃𝐴
𝑃0
)
1
𝛾
= 0.177. (2)
2.2 To determine the initial temperature, the adiabatic equation should be written in the (𝑇,𝑉)variables:
𝑇𝑉𝛾−1
= 𝑐𝑜𝑛𝑠𝑡, (3)
which, when applied again to process 2–3, leads to the following expression:
𝑇0 =
𝑇𝑆
𝜂𝛾−1
= 390 ℃. (4)
2.3 The ideal gas equation of state for point 2 has the form
𝑃0𝜂𝑉0 =
𝑚0
𝑀
𝑅𝑇0, (5)
which yields
𝑚0 = 𝑀
𝑃0𝜂𝑉0
𝑅𝑇0
= 2.30 g, (6)
2.4 On segment 1–2 the work performed by the steam is
𝐴1−2 = 𝑃0𝜂𝑉0, (7)
while on segment 2–3 the work along the adiabatic is
𝐴2−3 = 𝑃0𝑉0
𝜂−𝜂𝛾
𝛾−1
. (8)
On segment 3–4 the work is negative and equal to
𝐴3−4 = −𝑃𝐴𝑉0, (9)
therefore, the total work is
𝐴0 = 𝑃0𝑉0 (𝜂 +
𝜂−𝜂𝛾
𝛾−1
) − 𝑃𝐴𝑉0 = 1.25 ∙ 103
J. (10)
2.5 The working volume reaches its maximum value over half a revolution of the flywheel; therefore, the
average rate of change of the volume is
XXII International Zhautykov Olympiad/Theoretical Competition p. 5/11
𝑣 =
𝑉0
𝜋/𝜔
=
𝑉0𝜔
𝜋
. (11)
2.6 Let us establish the relation between the pressure in the cylinder and the mass of steam inside it. For this
purpose, we write the adiabatic equation
𝑃0𝑉𝑖𝑛
𝛾
= 𝑃𝑉𝛾
, (12)
where 𝑉𝑖𝑛 is the volume occupied by the steam in the generator before it enters the working cylinder. For
this volume, the equation of state is
𝑃0𝑉𝑖𝑛 =
𝑚
𝑀
𝑅𝑇0. (13)
Then the pressure in the cylinder can be expressed in terms of the steam mass using the adiabatic
equation (12) and the equation of state (13) as
𝑃 = 𝑃0 (
𝑅𝑇0
𝑀𝑃0
𝑚
𝑣𝑡
)
𝛾
, (14)
where 𝑉 = 𝑣𝑡 is the time-dependent working volume.
Taking into account the equation given in the problem statement, we obtain the required equation for
the steam mass in the cylinder:
𝑑𝑚
𝑑𝑡
= 𝐾(𝑃0 − 𝑃) = 𝐾𝑃0 (1 − (
𝑅𝑇0
𝑀𝑃0
𝑚
𝑣𝑡
)
𝛾
). (15)
2.7 An obvious solution of Eq. (15) is a linear function
𝑚 ∝ 𝑡, (16)
and therefore, according to Eq. (14), the steam pressure in the cylinder remains constant.
2.8 In accordance with Eq. (15), the gas mass increases linearly
𝑚 = 𝐾(𝑃0 − 𝑃)𝑡, (17)
and thus, from Eq. (15) and the relation 𝑉 = 𝑣𝑡, we obtain that the gas pressure must satisfy
𝑃 = 𝑃0 (
𝑅𝑇0
𝑀𝑃0
𝜋𝐾(𝑃0−𝑃)
𝑉0𝜔
)
𝛾
. (18)
2.9 Now we use the approximation 𝛾 ≈ 1, which allows us to obtain an explicit expression for the pressure:
𝑃 =
𝑃0
1+
𝑀𝑉0𝜔
𝜋𝐾𝑅𝑇0
. (19)
2.10 The numerical value of the pressure for the given parameters is
𝑃 = 9.10 ∙ 105
Па. (20)
2.11 The work performed by the engine during one cycle can be calculated using Eq. (10), where 𝑃0 should
be replaced by the pressure 𝑃 given by Eq. (19). This leads to
𝐴 = 𝑃0𝑉0
𝜂+
𝜂−𝜂𝛾
𝛾−1
1+
𝑀𝑉0𝜔
𝜋𝐾𝑅𝑇0
. (21)
Thus, the parameters of this formula are
𝐴0 = 𝑃0𝑉0 (𝜂 +
𝜂−𝜂𝛾
𝛾−1
) = 1.44 ∙ 103
J (22)
𝛽 =
𝑀𝑉0
𝜋𝑅𝑇0
= 4.16 ∙ 10−9
m ∙ s2
. (23)
2.12 In the steady-state regime, the work performed by the steam per cycle is equal to the work done on the
load:
𝐴0
1+𝛽
𝜔
𝐾
= 2𝜋𝑀0. (24)
Hence, the mean angular velocity in the steady-state regime is
𝜔 =
𝐾
𝛽
(
𝐴0
2𝜋𝑀0
− 1). (25)
2.13 From Eq. (25) it follows that the maximum torque is
𝑀0𝑚𝑎𝑥 =
𝐴0
2𝜋
= 230 N ∙ m. (26)
2.14 A schematic plot of the corresponding dependence is shown in the figure below.
XXII International Zhautykov Olympiad/Theoretical Competition p. 6/11
Part 2. Governor without the Engine
2.15 It is more convenient to solve this part of the problem in a rotating reference frame.
In the equilibrium state, the torque due to gravity is balanced by the torque due to the
centrifugal force:
𝑚𝑔𝑙sin𝜃 = 𝑚𝜔2
𝑙2
sin𝜃cos𝜃. (27)
It follows that the deflection angle is determined by
cos𝜃 = 1, 𝜔 < √
𝑔
𝑙
, (28)
cos𝜃 =
𝑔
𝜔2𝑙
, 𝜔 ≥ √
𝑔
𝑙
. (29)
2.16 A schematic plot of this dependence is shown in the figure below.
Part 3. Engine with a Governor
2.17 Taking into account that 𝐾 = 𝐾0cos 𝜃 and using Eq. (19), substitution into Eq. (25) yields
𝜔 = √
𝐾0𝑔
𝛽𝑙
(
𝐴0
2𝜋𝑀0
− 1)
3
. (30)
2.18 A schematic plot of the corresponding dependence is shown in the figure below.
XXII International Zhautykov Olympiad/Theoretical Competition p. 7/11
Content Points
2.1
Formula (1): 𝑃𝑉𝛾
= 𝑐𝑜𝑛𝑠𝑡 0.2
0.6 Formula (2): 𝜂 = (
𝑃𝐴
𝑃0
)
1
𝛾
0.2
Numerical value in formula (2): 𝜂 = 0.177 0.2
2.2
Formula (3): 𝑇𝑉𝛾−1
= 𝑐𝑜𝑛𝑠𝑡 0.2
0.6 Formula (4): 𝑇0 =
𝑇𝑆
𝜂𝛾−1 0.2
Numerical value in formula (4): 𝑇0 = 390 ℃ 0.2
2.3
Formula (6): 𝑚0 = 𝑀
𝑃0𝜂𝑉0
𝑅𝑇𝑆
0.2
0.4
Numerical value in formula (6): 𝑚0 = 2.30 g 0.2
2.4
Formula (7): 𝐴1−2 = 𝑃0𝜂𝑉0 0.2
1.0
Formula (8): 𝐴2−3 = 𝑃0𝑉0
𝜂−𝜂𝛾
𝛾−1
0.2
Formula (9): 𝐴3−4 = −𝑃𝐴𝑉0 0.2
Formula (10): 𝐴0 = 𝑃0𝑉0 (𝜂 +
𝜂−𝜂𝛾
𝛾−1
) − 𝑃𝐴𝑉0 0.2
Numerical value in formula (10): 𝐴0 = 1.25 ∙ 103
J 0.2
2.5 Formula (11): 𝑣 =
𝑉0𝜔
𝜋
0.2 0.2
2.6
Formula (12): 𝑃0𝑉𝑖𝑛
𝛾
= 𝑃𝑉𝛾
0.2
1.0
Formula (13): 𝑃0𝑉𝑖𝑛 =
𝑚
𝑀
𝑅𝑇0 0.2
Formula (14): 𝑃 = 𝑃0 (
𝑅𝑇0
𝑀𝑃0
𝑚
𝑣𝑡
)
𝛾
0.2
Formula (15):
𝑑𝑚
𝑑𝑡
= 𝐾𝑃0 (1 − (
𝑅𝑇0
𝑀𝑃0
𝑚
𝑣𝑡
)
𝛾
) 0.4
2.7
Formula (16): 𝑚 ∝ 𝑡 0.4
0.6
Reference to formula (14) or (15) 0.2
2.8
Formula (17): 𝑚 = 𝐾(𝑃0 − 𝑃)𝑡 0.2
0.6
Formula (18): 𝑃 = 𝑃0 (
𝑅𝑇0
𝑀𝑃0
𝜋𝐾(𝑃0−𝑃)
𝑉0𝜔
)
𝛾
0.4
2.9 Formula (19): 𝑃 =
𝑃0
1+
𝑀𝑉0𝜔
𝜋𝐾𝑅𝑇0
0.2 0.2
2.10 Numerical value in formula (20): 𝑃 = 9.10 ∙ 105
Pa 0.2 0.2
2.11
Formula (21): 𝐴 = 𝑃0𝑉0
𝜂+
𝜂−𝜂𝛾
𝛾−1
1+
𝑀𝑉0𝜔
𝜋𝐾𝑅𝑇0
0.2
1.0
Formula (22): 𝐴0 = 𝑃0𝑉0 (𝜂 +
𝜂−𝜂𝛾
𝛾−1
) 0.2
Numerical value in formula (22): 𝐴0 = 1.44 ∙ 103
J 0.2
Formula (23): 𝛽 =
𝑀𝑉0
𝜋𝑅𝑇0
0.2
Numerical value in formula (23): 𝛽 = 4.16 ∙ 10−9
m ∙ s2 0.2
2.12
Formula (24):
𝐴0
1+𝛽
𝜔
𝐾
= 2𝜋𝑀0 0.4
0.6
Formula (25): 𝜔 =
𝐾
𝛽
(
𝐴0
2𝜋𝑀0
− 1) 0.2
2.13
Formula (26): 𝑀0𝑚𝑎𝑥 =
𝐴0
2𝜋
0.4
0.6
Numerical value in formula (26): 𝑀0𝑚𝑎𝑥 = 230 N ∙ m 0.2
2.14
Graph:
turns zero after the maximum torque is achieved
maximum torque is pointed
monotonic increase when the torque goes to zero
0.1
0.1
0.2
0.4
2.15 Formula (27): 𝑚𝑔𝑙 sin𝜃 = 𝑚𝜔2
𝑙2
sin𝜃cos𝜃 0.2 1.0
XXII International Zhautykov Olympiad/Theoretical Competition p. 8/11
Formula (28): cos𝜃 = 1, 𝜔 < √
𝑔
𝑙
0.4
Formula (29): cos𝜃 =
𝑔
𝜔2𝑙
, 𝜔 ≥ √
𝑔
𝑙
0.4
2.16
Graph:
horizontal segment is present
the value of 𝐾0 is pointed for the horizontal segment
monotonically goes to zero when the angular velocity increases
0.1
0.1
0.2
0.4
2.17 Formula (30): 𝜔 = √
𝐾0𝑔
𝛽𝑙
(
𝐴0
2𝜋𝑀0
− 1)
3
0.4 0.4
2.18
Graph:
fracture point is present
the left segment decrease faster than the right segment
0.1
0.1
0.2
Total 10.0
