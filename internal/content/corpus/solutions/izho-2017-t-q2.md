---
id: izho-2017-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2017-t-q2
solution_type: official
source_document: solution-document-izho-2017-t-s
source_pdf: cache/phoxiv/izho/2017_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2017_T_S.pdf."
---

Problem 2. Fantastic trip through the Universe (10.0 points)
1. Planets with strange shapes (4.0 points)
1.1 [0.7 points] The easiest approach to the solution of the problem is the analogy between
Coulomb force and Newton's law of gravitation:
𝐹 =
1
4𝜋𝜀0
𝑞1𝑞2
𝑟12
2 and 𝐹 = 𝐺
𝑚1𝑚2
𝑟12
2 . (1)
Further, it is a well known result from the Gauss theorem that the electric field strength of an
infinite charged plane, with the surface density 𝜎 is found as
𝐸 =
𝜎
2𝜀0
. (2)
By analogy to the charged plane, the result for the planet is similarly obtained as:
𝑔1 =
𝜌1ℎ
2∙(1
4𝜋𝐺 ⁄ )
= 2𝜋𝐺𝜌1ℎ, (3)
ℎ =
𝑔1
2𝜋𝐺𝜌1
= 78.0𝑘𝑚. (4)
***
The same result is easily achieved by cutting an infinite plane into
thin rings and further integrating:
The attracting force of the ring of mass 𝑀,and of radius 𝑅 at the
distance 𝑎 is written as:
𝐹 = 𝐺
𝑀𝑚
𝑅2 + 𝑎2
𝑐𝑜𝑠𝜃 = 𝐺
𝑀𝑚
𝑎2
𝑐𝑜𝑠3
𝜃.
We divide the plane of the height ℎ into thin rings of thickness dr. Then the force of gravitycaused by the ring of the
radius r is equal to
𝑑𝐹 = 𝐺
𝑑𝑀𝑚
𝑎2
𝑐𝑜𝑠3
𝜃 = 𝐺
(𝜌1ℎ2𝜋𝑟𝑑𝑟)𝑚
𝑎2
𝑐𝑜𝑠3
𝜃.
It follows from the trigonometric considerations that 𝑟 = 𝑎 ∙ 𝑡𝑎𝑛𝜃, 𝑑𝑟 =
𝑎
𝑐𝑜𝑠2𝜃
𝑑𝜃.
Substituting the above expression and integrating we find the total force F acting on the body of mass 𝑚:
𝐹 = 2𝜋𝐺𝜌1ℎ𝑚∫𝑠𝑖𝑛𝜃𝑑𝜃
𝜋
2
0
= 2𝜋𝐺𝜌1ℎ𝑚.
This is identical to the answer obtained from the analogy with the electrostatic field.
1.2 [0.5 points] For an observer that is located close to the infinite plane, the solid angle is
obviously equal to
Ω1 =
4𝜋
2
= 2𝜋, (5)
and from the problem formulation we get
𝛼 =
𝑔1
2𝜋
or 𝛼 = 𝐺𝜌1ℎ = 1.56 × 10−2
𝑚/𝑠2
. (6)
1.3 [0.7 points] We divide the pyramid into thin layers of thickness Δℎ parallel to the base. All of
these layers are visible from the top of the pyramid with the same solid angle Ω2, which is equal to
one sixth of the full solid angle (as if the observer was located inside the cubeat its center!):
Ω2 =
1
6
4𝜋 =
2
3
𝜋. (7)
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 4/14
The free fall acceleration of the single layer is found as
𝑑𝑔2 =
𝑑𝐹
𝑚
= 𝛼Ω2 =
2
3
𝜋𝐺𝜌2Δℎ, (8)
or after the summation over all the layers of the pyramid
𝑔2 =
1
3
𝜋𝐺𝜌2𝑎 = 3.14 𝑚/𝑠2
. (9)
1.4 [2.0 points] Let the interaction energy between the spacecraft and the pyramidal planet at the
time of take-off from its top be equal to 𝑈1, and its speed be 𝑣1. It follows from the law of the
energy conservation for the parabolic velocity that:
𝑚𝑣1
2
2
− 𝑈1 = 0. (10)
Similarly, the law of the energy conservation for a spacecraft to start from the cubic planet is
written as
𝑚𝑣2
2
2
− 𝑈2 = 0, (11)
where 𝑈2 stands for the corresponding interaction energy with the cubic planet.
Let us show that there is a simple relationship between 𝑈1 and 𝑈2. To prove so, we consider the
position of the spacecraft at the center of the cubic planet. On the one hand the position at the center
of the cube is equivalent to finding the spacecraft at the tops of the six pyramids. Taking into
account the change in the density of matter, the potential energy of the spacecraft at the center of
the cube is obtained as
𝑈𝑐 = 6𝑈1
𝜌3
𝜌2
. (12)
On the other hand the position of the spacecraft at the center of the cube is equivalent to being at
the tops of the eight identical adjacent cubes with the side
𝑎
2
. In general, the potential energy of the
spacecraft in the field of the cubic planet is proportional to the square of its size since
𝑈 = 𝐺 ∑
𝑚𝜌3Δ𝑉𝑖
𝑟𝑖
~𝐺𝑚𝜌3𝑎2
. (13)
Thus, for the cube of the half size, the interaction energy is 4 times less, which means that the
potential energy of the spacecraft at the center of the cube is found as
𝑈𝑐 = 8
𝑈2
4
= 2𝑈2. (14)
Equating the expressions (12) and (14) yield
𝑈2 = 3𝑈1
𝜌3
𝜌2
. (15)
Solving together equations (10), (11) and (15), we finally obtain
𝑣2 = √
3𝜌3
𝜌2
𝑣1 = 6,30 𝑘𝑚/𝑠. (16)
2. Dusty cloud (6.0 points)
2.1 [2.5 points] For this problem, we use a mixture of the polar and Cartesian coordinate systems as
shown below.
The conservation of energy is written as:
𝑚𝑣∞
2
2
=
𝑚𝑢𝑥
2
2
+
𝑚𝑢𝑦
2
2
− 𝐺
𝑀𝑚
𝑅
, (17)
where 𝑀 =
4
3
𝜋𝑅3
𝜌4 denotes the total mass of the cloud.
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 5/14
Change in the spacecraft momentum projection on the x-axis of the Cartesian coordinate system is
given by
𝑚𝑢𝑥 − 𝑚𝑣∞ = ∫𝐺
𝑀𝑚
𝑟2 𝑐𝑜𝑠𝜑𝑑𝑡 = ∫𝐺
𝑀𝑚
𝑟2𝜑 ̇
𝑐𝑜𝑠𝜑𝑑𝜑. (18)
The law of the angular momentum conservation for a system with the central force is written as
𝑟2
𝜑̇ = 𝑣∞𝑏. (19)
Thus,
𝑚𝑢𝑥 − 𝑚𝑣∞ = 𝐺
𝑀𝑚
𝑣∞𝑏
∫ 𝑐𝑜𝑠𝜑𝑑𝜑
𝜃
0
= 𝐺
𝑀𝑚
𝑣∞𝑏
𝑠𝑖𝑛𝜃. (20)
Similarly for the 𝑦-axis projection:
𝑚𝑢𝑦 − 𝑚 ∙ 0 = 𝐺
𝑀𝑚
𝑣∞𝑏
∫ 𝑠𝑖𝑛𝜑𝑑𝜑
𝜃
0
= 𝐺
𝑀𝑚
𝑣∞𝑏
(1 − 𝑐𝑜𝑠𝜃). (21)
To simplify further analysis the following dimensionless quantity is introduced
𝑧 =
𝐺𝑀
𝑣∞
2 𝑏
, (22)
and then
𝑢𝑥 = (1 + 𝑧𝑠𝑖𝑛𝜃)𝑣∞, (23)
𝑢𝑦 = 𝑧(1 − 𝑐𝑜𝑠𝜃)𝑣∞. (24)
Substitution of (23) and (24) into (17) gives rise to
1 = (1 + 𝑧𝑠𝑖𝑛𝜃)2
+ 𝑧2(1 − 𝑐𝑜𝑠𝜃)2
− 2𝑧
𝑏
𝑅
. (25)
Solving this equation for 𝜃, we find
𝜃 = arcsin
𝑏
𝑅
−
𝐺𝑀
𝑣∞
2 𝑏
√1+(
𝐺𝑀
𝑣∞
2 𝑏
)
2
+ arcsin
𝐺𝑀
𝑣∞
2 𝑏
√1+(
𝐺𝑀
𝑣∞
2 𝑏
)
2
, (26)
or
𝜃 = 2arctan
1−√1+2
𝐺𝑀
𝑣∞
2 𝑏
𝑏
𝑅
−
𝑏2
𝑅2
𝑏
𝑅
−2
𝐺𝑀
𝑣∞
2 𝑏
= 0.789 𝑟𝑎𝑑 = 45.2°.
(27)
It should be noted that the angle θ, just as the total angle of deflection of the trajectory when moving through the dust
cloud, can be obtained by integrating the equation obtained from the combination of the laws of conservation of energy
and angular momentum written in the polar coordinates. Expressions are not presented here because the resulting
integrals are quite cumbersome.
2.2 [2.0 points] To begin with we find the dependence of the potential energy of interaction
between the cloud and the spacecraft at distances 𝑟 < 𝑅 from its center. It is known that a spherical
cloud layers, lying at a distance greater than r, does not affect the spacecraft, so the total active
force is derived as
𝐹(𝑟) = −𝐺
𝜌4∙
4
3
𝜋𝑟3
𝑟2 𝑚 = −
4
3
𝜋𝐺𝜌4𝑚𝑟, (28)
and the corresponding potential energy is found in the form
𝑈(𝑟) = −∫𝐹(𝑟)𝑑𝑟 =
2
3
𝜋𝐺𝜌4𝑚𝑟2
+ 𝐶 = 𝐺
𝑀𝑚
2𝑅3 𝑟2
+ 𝐶. (29)
To determine the integration constant 𝐶, we recall that the potential energy must be a continuous at
the point 𝑟 = 𝑅, such that
𝐺
𝑀𝑚
2𝑅3 𝑅2
+ 𝐶 = −𝐺
𝑀𝑚
𝑅
, (30)
or finally for 𝑟 < 𝑅
𝑈(𝑟) =
𝐺𝑀𝑚
2𝑅3 𝑟2
−
3𝐺𝑀𝑚
2𝑅
. (31)
At the time moment when the distance to the cloud center reaches its minimum value, the radial
velocity turns zero. Then, from the laws of conservation of energy and angular momentum we have
𝑚𝑣∞
2
2
=
𝑚𝑣0
2
2
+
𝐺𝑀𝑚
2𝑅3 𝑟𝑚𝑖𝑛
2
−
3𝐺𝑀𝑚
2𝑅
, (32)
𝑣0𝑟𝑚𝑖𝑛 = 𝑣∞𝑏, (33)
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 6/14
which results in the following equation
1 =
𝑏2
𝑟𝑚𝑖𝑛
2 + 𝑧
𝑟𝑚𝑖𝑛
2
𝑏
𝑅3 − 3𝑧
𝑏
𝑅
, (34)
with the solution
𝑟𝑚𝑖𝑛 = √
(
3𝑧𝑏
𝑅
+1)±√(
3𝑧𝑏
𝑅
+1)2−
4𝑧𝑏3
𝑅3
2
𝑧𝑏
𝑅3
. (35)
The meaningful root is only the smallest one because there must be 𝑟𝑚𝑖𝑛 = 0 at 𝑏 = 0. Thus, we
finally obtain
𝑟𝑚𝑖𝑛 = 𝑅
√
(
3𝐺𝑀
𝑣∞
2 𝑅
+1)−√(
3𝐺𝑀
𝑣∞
2 𝑅
+1)2−
4𝑏2
𝑅3
𝐺𝑀
𝑣∞
2
2𝐺𝑀
𝑣∞
2 𝑅
= 4.97 × 109
𝑚.
(36)
2.3 [1.0 points] Minimum velocity 𝑣∞,𝑚𝑖𝑛, that allows the spacecraft to avoid a collision,
corresponds to a situation when the spacecraft just touches the cloud as shown below.
In this case, the radial component of the velocity again turns zero, and the laws of conservation of
energy and angular momentum can be written as:
𝑚𝑣∞,𝑚𝑖𝑛
2
2
=
𝑚02
2
+
𝑚𝑢𝜏
2
2
− 𝐺
𝑀𝑚
𝑅
, (37)
𝑢𝜏𝑅 = 𝑣∞𝑏, (38)
which yields
𝑣∞,𝑚𝑖𝑛 = √
2𝐺𝑀
𝑅(
𝑏2
𝑅2−1)
= 252 𝑘𝑚/𝑠. (39)
2.4 [0.6 points] Assume that the cloud is pulled apart at distances by small layers of thickness ∆𝑟
so that the cloud always remains symmetrical. To remove a single thin layer at the moment when
the cloud has a radius 𝑟, it is necessary to do the work
∆𝐴 = 𝐺
(𝜌4
4
3
𝜋𝑟3)(𝜌44𝜋𝑟2∆𝑟)
𝑟
=
16
3
𝜋2
𝐺𝜌4
2
𝑟4
∆𝑟, (40)
and to pull apart the whole cloud the following work must be done
𝐴 =
16
3
𝜋2
𝐺𝜌4
2
∫ 𝑟4
∆𝑟
𝑅
0
=
16
15
𝜋2
𝐺𝜌4
2
𝑅5
= 1.33 × 1045
𝐽. (41)
Content points
1.1
The analogy between the Coulom law and the gravitation law of
Newton (1): 𝐹 =
1
4𝜋𝜀0
𝑞1𝑞2
𝑟12
2 and 𝐹 = 𝐺
𝑚1𝑚2
𝑟12
2 .
0.2
0.7 Formula (2) 𝐸 =
𝜎
2𝜀0
0.2
Formula (4) ℎ =
𝑔1
2𝜋𝐺𝜌1
0.2
Numerical value of ℎ = 78.0𝑘𝑚 0.1
1.2
Formula (5) Ω1 = 2𝜋 0.2
0.5 Formula (6) 𝛼 =
𝑔1
2𝜋
or 𝛼 = 𝐺𝜌1ℎ 0.2
Numerical value of 𝛼 = 1.56 × 10−2
𝑚/𝑠2 0.1
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 7/14
1.3
Formula (7) Ω2 =
2
3
𝜋 0.2
0.7
Formula (8) 𝑑𝑔2 =
𝑑𝐹
𝑚
= 𝛼Ω2 =
2
3
𝜋𝐺𝜌2Δℎ 0.2
Formula (9) 𝑔2 =
1
3
𝜋𝐺𝜌2𝑎 0.2
Numerical value of 𝑔2 = 3.14𝑚/𝑠2 0.1
1.4
Formulas /(10) and (11)
𝑚𝑣1
2
2
− 𝑈1 = 0
𝑚𝑣2
2
2
− 𝑈2 = 0 0.2
2.0
Formula (12) 𝑈𝑐 = 6𝑈1
𝜌3
𝜌2
0.4
Formula (13) 𝑈 = 𝐺 ∑
𝑚𝜌3Δ𝑉𝑖
𝑟𝑖
~𝐺𝑚𝜌3𝑎2
0.4
Formula (14) 𝑈𝑐 = 8
𝑈2
4
= 2𝑈2 0.2
Formula (15) 𝑈2 = 3𝑈1
𝜌3
𝜌2
0.4
Formula (16) 𝑣2 = √
3𝜌3
𝜌2
𝑣1 0.3
Numerical value of 𝑣2 = 6,30𝑘𝑚/𝑠 0.1
2.1
Formula (17)
𝑚𝑣∞
2
2
=
𝑚𝑢𝑥
2
2
+
𝑚𝑢𝑦
2
2
− 𝐺
𝑀𝑚
𝑅
0.2
2.5
Formula (18) 𝑚𝑢𝑥 − 𝑚𝑣∞ = ∫𝐺
𝑀𝑚
𝑟2 𝑐𝑜𝑠𝜑𝑑𝑡 = ∫𝐺
𝑀𝑚
𝑟2𝜑 ̇
𝑐𝑜𝑠𝜑𝑑𝜑 0.4
Formula (19) 𝑟2
𝜑̇ = 𝑣∞𝑏 0.2
Formula (20) 𝑚𝑢𝑥 − 𝑚𝑣∞ = 𝐺
𝑀𝑚
𝑣∞𝑏
𝑠𝑖𝑛𝜃 0.4
Formula (21) 𝑚𝑢𝑦 = 𝐺
𝑀𝑚
𝑣∞𝑏
(1 − 𝑐𝑜𝑠𝜃) 0.4
Formula (23) or analogous 𝑢𝑥 = (1 + 𝑧𝑠𝑖𝑛𝜃)𝑣∞ 0.3
Formula (24) or analogous 𝑢𝑦 = 𝑧(1 − 𝑐𝑜𝑠𝜃)𝑣∞ 0.3
Formula (26) or formula (27)
𝜃 = arcsin
𝑏
𝑅
−
𝐺𝑀
𝑣∞
2 𝑏
√1+(
𝐺𝑀
𝑣∞
2 𝑏
)
2
+ arcsin
𝐺𝑀
𝑣∞
2 𝑏
√1+(
𝐺𝑀
𝑣∞
2 𝑏
)
2
or
𝜃 = 2arctan
1−√1+2
𝐺𝑀
𝑣∞
2 𝑏
𝑏
𝑅
−
𝑏2
𝑅2
𝑏
𝑅
−2
𝐺𝑀
𝑣∞
2 𝑏
0.2
Numerical value of 𝜃 = 0,789 𝑟𝑎𝑑 = 45,2° 0.1
2.2
Formula (28) 𝐹(𝑟) = −𝐺
𝜌4∙
4
3
𝜋𝑟3
𝑟2 𝑚 = −
4
3
𝜋𝐺𝜌4𝑚𝑟 0.4
2.0
Formula (29) 𝑈(𝑟) =
2
3
𝜋𝐺𝜌4𝑚𝑟2
+ 𝐶 = 𝐺
𝑀𝑚
2𝑅3 𝑟2
+ 𝐶 0.3
Formula (30) 𝐺
𝑀𝑚
2𝑅3 𝑅2
+ 𝐶 = −𝐺
𝑀𝑚
𝑅
0.4
Formula (32)
𝑚𝑣∞
2
2
=
𝑚𝑣0
2
2
+
𝐺𝑀𝑚
2𝑅3 𝑟𝑚𝑖𝑛
2
−
3𝐺𝑀𝑚
2𝑅
, 0.2
Formula (33) 𝑣0𝑟𝑚𝑖𝑛 = 𝑣∞𝑏 0.2
Formula (35) 𝑟𝑚𝑖𝑛 = √
(
3𝑧𝑏
𝑅
+1)±√(
3𝑧𝑏
𝑅
+1)2−
4𝑧𝑏3
𝑅3
2
𝑧𝑏
𝑅3
0.2
Correct root is chosen, formula (36) 0.2
Numerical value of 𝑟𝑚𝑖𝑛 = 4.97 × 109
𝑚 0.1
2.3 Formula (37)
𝑚𝑣∞,𝑚𝑖𝑛
2
2
=
𝑚02
2
+
𝑚𝑢𝜏
2
2
− 𝐺
𝑀𝑚
𝑅
0.4 1.0
XIII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 8/14
Formula (38) 𝑢𝜏𝑅 = 𝑣∞𝑏 0.3
Formula (39) 𝑣∞,𝑚𝑖𝑛 = √
2𝐺𝑀
𝑅(
𝑏2
𝑅2−1)
0.2
Numerical value of 𝑣∞,𝑚𝑖𝑛 = 252𝑘𝑚/𝑠 0.1
2.4
Formula (40) ∆𝐴 =
16
3
𝜋2
𝐺𝜌4
2
𝑟4
∆𝑟 0.3
0.6 Formula (41) 𝐴 =
16
15
𝜋2
𝐺𝜌4
2
𝑅5
0.2
Numerical value of 𝐴 = 1.33 × 1045
𝐽 0.1
Total 10.0
