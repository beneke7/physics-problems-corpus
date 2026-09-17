---
id: izho-2018-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2018-t-q2
solution_type: official
source_document: solution-document-izho-2018-t-s
source_pdf: cache/phoxiv/izho/2018_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2018_T_S.pdf."
---

Problem 2. Physics in the mountains (10,0 points)
Part 1. Isothermal atmosphere (3,2 points)
1.1 [1,0 points] The air pressure on the Earth's surface is caused by its gravity acting on the
atmosphere, such that the equilibrium condition requires
𝑝0𝑆 = 𝑀𝑔, (1)
where
𝑆 = 4𝜋𝑅𝐸
2
(2)
designates the Earth’s surface.
From (1) and (2) one obtains
𝑀 =
4𝜋𝑝0𝑅𝐸
2
𝑔
= 5.32 ∙ 1018
kg. (3)
1.2 [1,0 points] The pressure of the atmosphere varies with altitude due to the action of gravity on
the gas. Let us consider the equilibrium of a layer of gas of thickness 𝑑ℎ. The pressure difference
𝑑𝑝 at these altitudes must compensate for the gravitational forces of the gas layer of density 𝜌,
which leads to the equation
𝑑𝑝 = −𝜌𝑔𝑑ℎ. (4)
On the other hand, from the equation of an ideal gas we find the relation between its density
and pressure
𝜌 =
𝜇𝑎𝑖𝑟𝑝
𝑅𝑇0
. (5)
From expressions (4) and (5), we find that the pressure of the atmosphere at an altitude ℎ is
determined by the so-called barometric formula
𝑝(ℎ) = 𝑝0 exp(−
𝜇𝑎𝑖𝑟𝑔
𝑅𝑇0
ℎ) (6)
and at the altitude of 𝐻 = 1500 𝑚 it is equal to
𝑝(𝐻) = 85.0 ∙ 103
Pa. (7)
1.3 [0,6 points] In a homogeneous gravity field, the pressure of the atmosphere is determined by
the mass of air above it, so the heating process can be considered isobaric, which means
𝛿𝑄 =
𝑀
𝜇𝑎𝑖𝑟
𝛾𝑅
𝛾−1
∆𝑇 = 5.33 ∙ 1021
J, (8)
where the adiabatic index of the diatomic gas is
𝛾 = 7/5. (9)
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 6/15
1.4 [0,6 points] For the time interval 𝜏 the amount of solar energy, absorbed by the Earth, is equal
to
𝛿𝑄 = 𝛼𝜋𝑅𝐸
2
𝜏 (10)
and the time interval sought is obtained as
𝜏 =
𝑀
𝛼𝜋𝑅𝐸
2𝜇𝑎𝑖𝑟
𝛾𝑅∆𝑇
𝛾−1
= 30.3 ∙ 103
s. (11)
Part 2. Adiabatic atmosphere (6,8 points)
2.1 [1,2 points] The temperature of the atmosphere does not remain constant with altitude, so
equation (5) should be rewritten in the form
𝜌 =
𝜇𝑎𝑖𝑟𝑝
𝑅𝑇
. (12)
Since the atmosphere is assumed adiabatic, one can write that
𝑝𝑇
𝛾
1−𝛾 = 𝑐𝑜𝑛𝑠𝑡. (13)
Solving together equations (4), (12) and (13) yields
𝑑𝑇
𝑑ℎ
= −
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
𝛾𝑅
= −𝛽 = 𝑐𝑜𝑛𝑠𝑡. (14)
Formula (14) proves that the temperature of the adiabatic atmosphere decreases with altitude
as
𝑇(ℎ) = 𝑇0 −
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
𝛾𝑅
ℎ = 𝑇0 − 𝛽ℎ (15)
and is found at 𝐻 = 1500 𝑚 to be equal
𝑇(𝐻) = 278 К. (16)
2.2 [0,4 points] The pressure distribution over the altitude is determined by the adiabatic equation
(13)
𝑝(ℎ) = 𝑝0 (
𝑇0
𝑇(ℎ)
)
𝛾
1−𝛾
= 𝑝0 (
𝑇0
𝑇0−𝛽ℎ
)
𝛾
1−𝛾
(17)
and is found at 𝐻 = 1500 𝑚 to be equal
𝑝(𝐻) = 84.6 ∙ 103
𝑃𝑎. (18)
2.3 [0,8 points] Since the temperature of the upper part of the troposphere is fixed, it follows from
(15) that its height is determined by the condition
𝑇(ℎ) = 𝑇0 − 𝛽ℎ = 𝑐𝑜𝑛𝑠𝑡. (19)
Thus, the change in the height of the troposphere at daytime and nighttime is derived as
∆𝐻𝑎𝑡𝑚 =
𝛾𝑅∆𝑇𝑑𝑛
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
= 2,05 ∙ 103
m. (20)
2.4 [0,6 points] In the stated range of temperatures and pressures, one can approximate the
saturated water vapor pressure by a linear function of the form
𝑝(𝑇) = 𝑝1 +
𝑝2−𝑝1
𝑇2−𝑇1
(𝑇 − 𝑇1). (21)
The boiling of the liquid begins when the saturated vapor pressure is equalized with the
external pressure of the atmosphere, which allows an intensive vaporization process to occur in the
emerging bubbles. Equating expressions (18) and (21) gives rise to
𝑇𝑏𝑜𝑖𝑙 = 368 К. (22)
2.5 [0,8 points] The melting point of ice varies little with the external pressure, so snow appears
when the temperature reaches 0 ℃, i.e.
𝑇𝑚𝑒𝑙𝑡 = 273 К. (23)
Consequently, using formula (15), we determine the altitude at which the snow cover
appears as
ℎ0 =
𝛾𝑅(𝑇0−𝑇𝑚𝑒𝑙𝑡)
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
= 2.05 ∙ 103
m. (24)
2.6 [0,4 points] If the air at the foot of the mountain is quite hot, then the temperature over the
entire mountain slope cannot fall to zero degrees Celsius. Then, formula (24) provides the height of
the mountain to be
𝐻0 =
𝛾𝑅(𝑇−𝑇𝑚𝑒𝑙𝑡)
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
= 3.78 ∙ 103
m. (25)
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 7/15
2.7 [2,0 points] Since the water vapor is in thermodynamic equilibrium with the surrounding air,
their temperatures are equal at all altitudes. The equilibrium condition for the vapor is written
analogously to (4) as
𝑑𝑝𝑣𝑎𝑝 = −𝜌𝑣𝑎𝑝𝑔𝑑ℎ, (26)
and its density is obtained from the ideal gas equation of state in the following form
𝜌𝑣𝑎𝑝 =
𝜇𝐻2𝑂𝑝𝑣𝑎𝑝
𝑅𝑇
, (27)
in which the temperature dependence on the altitude is governed by formula (15).
By formulation, the pressure of unsaturated water vapor at the foot of the mountain reads as
𝑝𝑣𝑎𝑝(0) = 𝜑𝑝𝑣𝑎𝑝0, (28)
whereas the saturated vapor pressure at the altitude 𝐻′ is denoted as
𝑝𝑣𝑎𝑝(ℎ) = 𝑝𝑣𝑎𝑝. (29)
Integrating equation (25) with the aid of (26) and (15) and initial conditions (28) and (29), it
is found that
ln
𝑝𝑣𝑎𝑝
𝑝𝑣𝑎𝑝0
= ln𝜑 +
𝜇𝐻2𝑂𝑔
𝛽𝑅
ln
𝑇
𝑇0
. (30)
On the other hand, it is known from the handbook that
ln
𝑃𝑣𝑎𝑝
𝑃𝑣𝑎𝑝0
= 𝑎 + 𝑏ln
𝑇
𝑇0
, (31)
and solving it together with (30) provides the following temperature at the altitude 𝐻′
𝑇(𝐻′) = 𝑇0 exp(
𝑎−ln𝜑
𝜇𝐻2𝑂𝑔
𝛽𝑅
−𝑏
). (32)
Then, the altitude itself is delivered by formula (15) as
𝐻′
=
𝑇0−𝑇(𝐻′)
𝛽
=
𝑇0
𝛽
(1 − exp(
𝑎−ln𝜑
𝜇𝐻2𝑂𝑔
𝛽𝑅
−𝑏
)) = 2.55 ∙ 103
m. (33)
2.8 [0,6 points] For the fog to be absent on the mountain, one has to put in formula (33)
𝐻′
= 𝐻0, (34)
from which we obtain the desired expression for the air humidity
𝜑𝑚𝑖𝑛 = (1 −
𝛽𝐻0
𝑇0
)
𝑏−
𝜇𝐻2𝑂𝑔
𝛽𝑅
exp𝑎 = 0.119. (35)
Content Points
1.1
Formula (1) 𝑝0𝑆 = 𝑀𝑔 0,4
1,0
Formula (2) 𝑆 = 4𝜋𝑅𝐸
2 0,2
Formula (3) 𝑀 =
4𝜋𝑝0𝑅𝐸
2
𝑔
0,2
Correct numerical value 𝑀 = 5.32 ∙ 1018
kg 0,2
1.2
Formula (4) 𝑑𝑝 = −𝜌𝑔𝑑ℎ 0,2
1,0
Formula (5) 𝜌 =
𝜇𝑎𝑖𝑟𝑝
𝑅𝑇0
0,2
Formula (6) 𝑝(ℎ) = 𝑝0 exp(−
𝜇𝑎𝑖𝑟𝑔
𝑅𝑇0
ℎ) 0,4
Correct numerical value 𝑝(𝐻) = 85.0 ∙ 103
Pa 0,2
1.3
Formula (8) 𝛿𝑄 =
𝑀
𝜇𝑎𝑖𝑟
𝛾𝑅
𝛾−1
∆𝑇 0,2
0,6 Correct numerical value 𝛿𝑄 = 5.33 ∙ 1021
J 0,2
Formula (9) 𝛾 = 7/5 or equivalent 𝐶𝑃 = 7/2𝑅 0,2
1.4
Formula (10) 𝛿𝑄 = 𝛼𝜋𝑅𝐸
2
𝜏 0,2
0,6 Formula (11) 𝜏 =
𝑀
𝛼𝜋𝑅𝐸
2𝜇𝑎𝑖𝑟
𝛾𝑅∆𝑇
𝛾−1
0,2
Correct numerical value 𝜏 = 30.3 ∙ 103
s 0,2
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 8/15
2.1
Formula (12) 𝜌 =
𝜇𝑎𝑖𝑟𝑝
𝑅𝑇
0,2
1,2
Formula (13) 𝑝𝑇
𝛾
1−𝛾 = 𝑐𝑜𝑛𝑠𝑡 0,2
Formula (14)
𝑑𝑇
𝑑ℎ
= −
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
𝛾𝑅
= −𝛽 = 𝑐𝑜𝑛𝑠𝑡 0,4
Formula (15) 𝑇(ℎ) = 𝑇0 −
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
𝛾𝑅
ℎ = 𝑇0 − 𝛽ℎ 0,2
Correct numerical value 𝑇(𝐻) = 278 К 0,2
2.2
Formula (17) 𝑝(ℎ) = 𝑝0 (
𝑇0
𝑇(ℎ)
)
𝛾
1−𝛾
= 𝑝0 (
𝑇0
𝑇0−𝛽ℎ
)
𝛾
1−𝛾
0,2
0,4
Correct numerical value 𝑝(𝐻) = 84.6 ∙ 103
Pa 0,2
2.3
Formula (19) 𝐻𝑎𝑡𝑚 =
𝛾𝑅𝑇0
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
0,4
0,8 Formula (20) ∆𝐻𝑎𝑡𝑚 =
𝛾𝑅∆𝑇𝑑𝑛
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
0,2
Correct numerical value ∆𝐻𝑎𝑡𝑚 = 2,05 ∙ 103
𝑚 0,2
2.4
Formula (21) 𝑝(𝑇) = 𝑝1 +
𝑝2−𝑝1
𝑇2−𝑇1
(𝑇 − 𝑇1) 0,4
0,6
Correct numerical value 𝑇𝑏𝑜𝑖𝑙 = 368 К 0,2
2.5
Formula (23) 𝑇𝑚𝑒𝑙𝑡 = 273 К. 0,2
0,8 Formula (24) ℎ0 =
𝛾𝑅(𝑇0−𝑇𝑚𝑒𝑙𝑡)
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
0,4
Correct numerical value ℎ0 = 2.05 ∙ 103
𝑚 0,2
2.6
Formula (25) 𝐻0 =
𝛾𝑅(𝑇−𝑇𝑚𝑒𝑙𝑡)
(𝛾−1)𝜇𝑎𝑖𝑟𝑔
0,2
0,4
Correct numerical value 𝐻0 = 3.78 ∙ 103
𝑚 0,2
2.7
Formula (26) 𝑑𝑝𝑣𝑎𝑝 = −𝜌𝑣𝑎𝑝𝑔𝑑ℎ 0,2
2,0
Formula (27) 𝜌𝑣𝑎𝑝 =
𝜇𝐻2𝑂𝑝𝑣𝑎𝑝
𝑅𝑇
0,2
Formula (28) 𝑝𝑣𝑎𝑝(0) = 𝜑𝑝𝑣𝑎𝑝0 0,2
Formula (30) ln
𝑝𝑣𝑎𝑝
𝑝𝑣𝑎𝑝0
= ln𝜑 +
𝜇𝐻2𝑂𝑔
𝛽𝑅
ln
𝑇
𝑇0
0,6
Formula (32) 𝑇(𝐻′) = 𝑇0 exp(
𝑎−ln𝜑
𝜇𝐻2𝑂𝑔
𝛽𝑅
−𝑏
) 0,2
Formula (33) 𝐻′
=
𝑇0−𝑇(𝐻′)
𝛽
=
𝑇0
𝛽
(1 − exp(
𝑎−ln𝜑
𝜇𝐻2𝑂𝑔
𝛽𝑅
−𝑏
)) 0,4
Correct numerical value 𝐻′
= 2.55 ∙ 103
𝑚 0,2
2.8
Formula (34) 𝐻′
= 𝐻0 0,2
0,6 Formula (35) 𝜑𝑚𝑎𝑥 = (1 −
𝛽𝐻0
𝑇0
)
𝑏−
𝜇𝐻2𝑂𝑔𝛽
𝑅
exp𝑎 0,2
Correct numerical value 𝜑𝑚𝑎𝑥 = 0.119 0,2
Total 10,0
