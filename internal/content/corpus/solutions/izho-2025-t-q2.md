---
id: izho-2025-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2025-t-q2
solution_type: official
source_document: solution-document-izho-2025-t-s
source_pdf: cache/phoxiv/izho/2025_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2025_T_S.pdf."
---

Problem 2. First estimate of the age of the Earth (10.0 points)
Fourier's Law of Thermal Conductivity
2.1 According to Fourier's law, the heat flux in the left rod is equal to
𝑗𝑄1 = −2𝜅
𝑇−𝑇1
𝑙
, (1)
and the heat flux in the right rod is found as
𝑗𝑄2 = −𝜅
𝑇2−𝑇
𝑙
. (2)
In steady state the heat flux should be the same in both rods
𝑗𝑄1 = 𝑗𝑄2, (3)
from which we find
𝑇 =
2𝑇1+𝑇2
3
= 50℃. (4)
2.2 The heat flux along the rod must remain constant, which yields the differential equation
XXI International Zhautykov Olympiad/Theoretical Competition p. 5/12
1
𝑇2
𝑑𝑇
𝑑𝑥
= 𝑏 = 𝑐𝑜𝑛𝑠𝑡, (5)
whose solution has the form
−
1
𝑇
= 𝑏𝑥 + 𝐶, (6)
where 𝐶 is a constant of integration.
Taking into account the boundary conditions
𝑇(0) = 𝑇1, (7)
𝑇(𝑙) = 𝑇2, (8)
we obtain the following final expression for the temperature dependence
𝑇(𝑥) =
𝑇1
1−(1−
𝑇1
𝑇2
)
𝑥
𝑙
. (9)
2.3 When ice forms near its contact with the lake water, the temperature is 0℃, which causes a temperature
difference of ∆𝑡 = |𝑡|. Let us consider a portion of ice surface of the area 𝑆, assuming its thickness to be ℎ.
Then the amount of heat released into the environment at the point of contact during time 𝑑𝜏 is equal to
𝛿𝑄1 = 𝜅
∆𝑡
ℎ
𝑆𝑑𝜏. (10)
During the process of water crystallization at the point of contact with ice, the amount of heat
released is found as
𝛿𝑄2 = 𝜆𝜌𝑆𝑑ℎ. (11)
By equating these amounts of heat 𝛿𝑄1 = 𝛿𝑄2, we obtain the formula
𝑑𝜏 =
𝜆𝜌
𝜅|𝑡|
ℎ𝑑ℎ, (12)
which after integration gives the final answer
𝜏 =
𝜆𝜌ℎ2
2𝜅|𝑡|
= 5.45 ∙ 103
𝑠. (13)
Electrothermal analogy
2.4 Ohm's law for the electric current density has the form 𝑗𝐸 = 𝜎𝐸 = −𝜎
𝑑𝜑
𝑑𝑥
, and the electric current density
itself is associated with the flow of electric charge, so the table of correspondence between thermal and
electrical quantities takes the form shown below.
Thermal value Electrical quantity
temperature 𝑇 electric field potential 𝜑
amount of heat 𝑄 electric charge 𝑞
heat flux 𝑗𝑄 electric current density 𝑗𝐸
thermal conductivity coefficient 𝜅 specific conductivity 𝜎
2.5 It follows from the electrothermal analogy that the cube can be represented as an equivalent electrical
circuit, shown in the figure below.
Since the temperature in the electrothermal analogy is a potential, and the resistances of all ribs are
the same, we obtain the relation
𝑇𝐵−𝑇𝐴
5
6
=
𝑇𝐶−𝑇𝐴
1
3
, (14)
whence
𝑇𝐶 =
1
5
(3𝑇𝐴 + 2𝑇𝐵) = 60℃. (15)
XXI International Zhautykov Olympiad/Theoretical Competition p. 6/12
2.6 Let us add another heat source to the system at point 𝐴′
, which is located diametrically opposite to point
𝐵, and also another heat sink at point 𝐵′
, diametrically opposite to point 𝐴, see the figure below, which
shows the side view.
Obviously, each of the pairs 𝐴𝐵′
and 𝐴′
𝐵 makes the same contribution to the heat flux at point 𝐶,
equal in magnitude
𝑗𝑄0 =
𝑃
2𝜋𝑅ℎ
. (16)
On the other hand, the total heat flux at point 𝐶 is equal to the vector sum of two mutually
perpendicular fluxes 𝑗𝑄0, and it, as follows from the symmetry, is exactly twice the desired one, therefore
𝑗𝑄 =
√2
2
𝑗𝑄0 =
𝑃
2√2𝜋𝑅ℎ
. (17)
The first estimate of the Earth age
2.7 The amount of heat 𝑄 stored in a kettle is proportional to the cube of its size 𝑅, that is,
𝑄~𝑅3
. (18)
and the power 𝑃 lost by it due to heat transfer is proportional to its surface area
𝑃~𝑅2
. (19)
Therefore, the required time is proportional to the size of the teapot and is
𝜏 =
𝑅𝐸
𝑟0
𝜏0 = 2.56 ∙ 108
ℎ = 2.92 ∙ 104
𝑦𝑒𝑎𝑟𝑠. (20)
2.8 Since the thermal conductivity of the core is infinite, its temperature 𝑇0 is the same everywhere,
including at the boundary with the mantle. According to the electrothermal analogy, the temperature
difference 𝑇0 − 𝑇 is the potential difference (voltage), and the radiation power from the Earth's surface is
determined by the Stefan-Boltzmann law
𝑃 = 4𝜋𝑅𝐸
2
𝜎𝑇4
(21)
and is similar to electric current, so there is a linear relationship between them
𝑇0 − 𝑇 = 𝑃𝑅𝑇. (22)
where the quantity 𝑅𝑇 represents the so-called thermal resistance.
Using the same electrothermal analogy, thermal resistance is written as
𝑅𝑇 =
1
𝜅
∫
𝑑𝑅
4𝜋𝑅2
𝑅𝐸
𝑅0
=
1
4𝜋𝜅
(
1
𝑅0
−
1
𝑅𝐸
), (23)
from which we finally obtain the temperature of the Earth's core
𝑇0 = 𝑇 +
𝜎𝑇4𝑅𝐸(𝑅𝐸−𝑅0)
𝜅𝑅0
= 4.84 ∙ 107
К. (24)
2.9 Since the transferred heat (current strength) is the same, we obtain the proportion for the temperature
𝑇0−𝑇
𝑅𝑇
=
𝑇𝐻−𝑇
𝑅𝐻
, (25)
where the thermal resistance of a spherical layer of thickness 𝐻 is given by the expression
𝑅𝐻 =
𝐻
4𝜋𝜅𝑅𝐸
2. (26)
Thus, we obtain the temperature at depth 𝐻 as
𝑇𝐻 = 𝑇 + (𝑇0 − 𝑇)
𝐻𝑅0
𝑅𝐸(𝑅𝐸−𝑅0)
= 1.86 ∙ 104
К. (27)
The actual core temperature is, of course, much lower, since the thermal balance with the Sun must
be taken into account.
XXI International Zhautykov Olympiad/Theoretical Competition p. 7/12
2.10 The change over time in the amount of heat stored in the core is equal to
𝑑𝑄
𝑑𝑡
= 𝑐𝑚
𝑑𝑇0
𝑑𝑡
, (28)
where the mass of the core is obtained as
𝑚 =
4
3
𝜋𝜌𝑅0
3
. (29)
According to the law of energy conservation we have
𝑑𝑄
𝑑𝑡
= −𝑃, (28)
where 𝑃 is given by expression (21).
The core temperature 𝑇0 is given by formula (24), in which the first term can be neglected (𝑇0 ≫ 𝑇),
so we finally obtain
𝑑𝑇
𝑇
= −
𝜅𝑅𝐸
𝑐𝜌𝑅0
2(𝑅𝐸−𝑅0)
𝑑𝜏. (29)
By integrating and expanding the exponential, we find
∆𝑇 =
𝜅𝑅𝐸𝑇𝜏
𝑐𝜌𝑅0
2(𝑅𝐸−𝑅0)
= 3.14 ∙ 10−2
К. (30)
Content Points
2.1
Formula (1): 𝑗𝑄1 = −2𝜅
𝑇−𝑇1
𝑙
0.2
1.0
Formula (2): 𝑗𝑄2 = −𝜅
𝑇2−𝑇
𝑙
0.2
Formula (3): 𝑗𝑄1 = 𝑗𝑄2 0.2
Formula (4): 𝑇 =
2𝑇1+𝑇2
3
0.2
Numerical value in formula (4): 𝑇 = 50℃ 0.2
2.2
Formula (5):
1
𝑇2
𝑑𝑇
𝑑𝑥
= 𝑏 = 𝑐𝑜𝑛𝑠𝑡 0.2
1.0
Formula (6): −
1
𝑇
= 𝑏𝑥 + 𝐶 0.2
Formula (7): 𝑇(0) = 𝑇1 0.2
Formula (8): 𝑇(𝑙) = 𝑇2 0.2
Formula (9): 𝑇(𝑥) =
𝑇1
1−(1−
𝑇1
𝑇2
)
𝑥
𝑙
0.2
2.3
Formula (10): 𝛿𝑄1 = 𝜅
∆𝑡
ℎ
𝑆𝑑𝜏 0.2
1.0
Formula (11): 𝛿𝑄2 = 𝜆𝜌𝑆𝑑ℎ 0.2
Formula (12): 𝑑𝜏 =
𝜆𝜌
𝜅|𝑡|
ℎ𝑑ℎ 0.2
Formula (13): 𝜏 =
𝜆𝜌ℎ2
2𝜅|𝑡|
0.2
Numerical value in formula (13): 𝜏 = 5.45 ∙ 103
𝑠 0.2
2.4 0.2 for each correct value in the table 4x0.2 0.8
2.5
Correct equivalent circuit 0.4
1.0
Formula (14):
𝑇𝐵−𝑇𝐴
5
6
=
𝑇𝐶−𝑇𝐴
1
3
0.2
Formula (15): 𝑇𝐶 =
1
5
(3𝑇𝐴 + 2𝑇𝐵) 0.2
Numerical value in formula (15): 𝑇𝐶 = 60℃ 0.2
2.6
Formula (16): 𝑗𝑄0 =
𝑃
2𝜋𝑅ℎ
0.5
1.0
Formula (17): 𝑗𝑄 =
𝑃
2√2𝜋𝑅ℎ
0.5
2.7
Formula (18): 𝑄~𝑅3 0.2
1.0 Formula (19): 𝑃~𝑅2 0.2
Formula (20 𝜏 =
𝑅𝐸
𝑟0
𝜏0
0.3
XXI International Zhautykov Olympiad/Theoretical Competition p. 8/12
Numerical value in formula (20): 𝜏 = 2.56 ∙ 108
ℎ = 2.92 ∙ 104
𝑦𝑒𝑎𝑟𝑠 0.3
2.8
Formula (21): 𝑃 = 4𝜋𝑅𝐸
2
𝜎𝑇4 0.2
1.0
Formula (22): 𝑇0 − 𝑇 = 𝑃𝑅𝑇 0.2
Formula (23): 𝑅𝑇 =
1
4𝜋𝜅
(
1
𝑅0
−
1
𝑅𝐸
) 0.2
Formula (24): 𝑇0 = 𝑇 +
𝜎𝑇4𝑅𝐸(𝑅𝐸−𝑅0)
𝜅𝑅0
0.2
Numerical value in formula (24): 𝑇0 = 4.84 ∙ 107
К 0.2
2.9
Formula (25):
𝑇0−𝑇
𝑅𝑇
=
𝑇𝐻−𝑇
𝑅𝐻
0.3
1.0
Formula (26): 𝑅𝐻 =
𝐻
4𝜋𝜅𝑅𝐸
2
0.2
Formula (27): 𝑇𝐻 = 𝑇 + (𝑇0 − 𝑇)
𝐻𝑅0
𝑅𝐸(𝑅𝐸−𝑅0)
0.3
Numerical value in formula (27): 𝑇𝐻 = 1.86 ∙ 104
К 0.2
2.10
Formula (28):
𝑑𝑄
𝑑𝑡
= 𝑐𝑚
𝑑𝑇0
𝑑𝑡
0.2
1.2
Formula (29): 𝑚 =
4
3
𝜋𝜌𝑅0
3 0.2
Formula (30):
𝑑𝑄
𝑑𝑡
= −𝑃 0.2
Formula (31):
𝑑𝑇
𝑇
= −
𝜅𝑅𝐸
𝑐𝜌𝑅0
2(𝑅𝐸−𝑅0)
𝑑𝜏 0.2
Formula (32): ∆𝑇 =
𝜅𝑅𝐸𝑇𝜏
𝑐𝜌𝑅0
2(𝑅𝐸−𝑅0)
0.2
Numerical value in formula (32): ∆𝑇 = 3.14 ∙ 10−2
К 0.2
Total 10.0
