---
id: izho-2024-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2024-t-q2
solution_type: official
source_document: solution-document-izho-2024-t-s
source_pdf: cache/phoxiv/izho/2024_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2024_T_S.pdf."
---

Problem 2. Lagrange points (10.0 points)
Two body problem
2.1 The radii of the bodies' orbits are equal to the distances from the bodies to the center of mass and are
determined from the equations
𝑅𝑅1 + 𝑅𝑅2 = 𝑅𝑅0, (1)
𝑚𝑚1𝑅𝑅1 = 𝑚𝑚2𝑅𝑅2, (2)
and we find the required radii of trajectories
𝑅𝑅1 =
𝑚𝑚2
𝑚𝑚1+𝑚𝑚2
𝑅𝑅0, (3)
𝑅𝑅2 =
𝑚𝑚1
𝑚𝑚1+𝑚𝑚2
𝑅𝑅0. (4)
2.2 To calculate the angular velocity 𝜔𝜔0 of bodies rotation, we write the equation of Newton’s second law for
one of the bodies, for example for the first, in the form
𝑚𝑚1𝜔𝜔0
2
𝑅𝑅1 = 𝐺𝐺
𝑚𝑚1𝑚𝑚2
𝑅𝑅0
2 , (5)
which, taking into account equation (3), gives
𝜔𝜔0 = �𝐺𝐺
𝑚𝑚1+𝑚𝑚2
𝑅𝑅0
3 . (6)
Lagrange points in a three-body system
XX International Zhautykov Olympiad/Theoretical Competition с. 6/14
2.3 The expression for the projection of the force acting on a small body 𝑚𝑚0 follows from Newton’s law of
universal gravitation, which, taking into account the direction of the forces, yields
𝐹𝐹𝑥𝑥 = −𝐺𝐺
𝑚𝑚0𝑚𝑚1
|𝑋𝑋+𝑅𝑅1|3
(𝑋𝑋 + 𝑅𝑅1) − 𝐺𝐺
𝑚𝑚0𝑚𝑚1
|𝑋𝑋−𝑅𝑅2|3
(𝑋𝑋 − 𝑅𝑅2). (7)
Taking into account the dimensionless relations given in the problem formulation, we obtain an
expression for the projection of force in relative units
𝑓𝑓 𝑥𝑥 = −
1−𝜇𝜇
|𝑥𝑥+𝜇𝜇|3 (𝑥𝑥 + 𝜇𝜇) −
𝜇𝜇
|𝑥𝑥−1+𝜇𝜇|3 (𝑥𝑥 − 1 + 𝜇𝜇). (8)
The equation of Newton's second law for a small body is
−𝑚𝑚0𝜔𝜔0
2
𝑋𝑋 = 𝐹𝐹𝑥𝑥, (9)
having nondimensionalized it by the given values, we obtain the required equation for determining the
coordinate 𝑥𝑥
−𝑥𝑥 = −
1−𝜇𝜇
|𝑥𝑥+𝜇𝜇|3 (𝑥𝑥 + 𝜇𝜇) −
𝜇𝜇
|𝑥𝑥−1+𝜇𝜇|3 (𝑥𝑥 − 1 + 𝜇𝜇). (10)
2.4 To construct a graph of function (8), it is enough to construct graphs of functions describing attraction to
the body 𝑚𝑚1 (two branches with an asymptote at 𝑥𝑥 = −0.2 – graph 1 in the figure) and attraction to the body
𝑚𝑚2 (two branches with an asymptote at 𝑥𝑥 = 0.8 – graph 2 in the figure) and sum them up (graph 3 in the
figure). This graph has three branches.
2.5 On the constructed graph we draw a straight line described by the equation 𝑓𝑓 𝑥𝑥 = −𝑥𝑥. The coordinates of
the points of intersection of this line with the graph of the dependence 𝑓𝑓 𝑥𝑥(𝑥𝑥) are the real roots of equation
(10), i.e. are the coordinates of Lagrange points lying on the 𝑋𝑋 axis. As follows from the construction, there
are exactly 3 such points.
2.6 Equation (10) is a fifth degree equation and therefore cannot be solved analytically. However, the problem
formulation requires calculating numerical values with a low error. To do this, it is enough to calculate the
numerical values of the force acting on a small body with a step of change in 𝑥𝑥 equal to 0.1, and determine
the interval in which the corresponding root is located.
Let us calculate the value of the coordinate of the Lagrange point 𝐿𝐿1, located between the bodies 𝑚𝑚1
and 𝑚𝑚2. For this point, equation (10) can be rewritten as
𝑥𝑥 =
1−𝜇𝜇
(𝑥𝑥+𝜇𝜇)2 −
𝜇𝜇
(1−𝜇𝜇−𝑥𝑥)2. (11)
The table below shows the values of the left and right hand sides of equation (11) at 𝜇𝜇 = 0.20
𝑥𝑥 0,2 0,3 0,4 0,5 0,6
𝑓𝑓(𝑥𝑥) 4,44 2,40 0,97 -0,59 -3,75
It follows from the table that the root of the equation lies in the range from 0.4 to 0.5, i.e.
𝑥𝑥1 ≈ 0.45. (12)
For the coordinate of the point 𝐿𝐿2 lying behind the body 𝑚𝑚2,, we have the equation
XX International Zhautykov Olympiad/Theoretical Competition с. 7/14
𝑥𝑥 =
1−𝜇𝜇
(𝑥𝑥+𝜇𝜇)2 +
𝜇𝜇
(𝑥𝑥−1+𝜇𝜇)2, (13)
and in the following table the values of the left and right hand sides of this equation are calculated
𝑥𝑥 1 1,1 1,2 1,3 1,4
𝑓𝑓(𝑥𝑥) 5,56 2,70 1,66 1,16 0,87
From the data in this table it follows that the root of this equation lies in the range between 1.2 and 1.3,
i.e.
𝑥𝑥2 ≈ 1.25. (14)
Finally, for point 𝐿𝐿3 lying behind body 𝑚𝑚1 we have the equation (here the direction of the axis is
changed)
𝑥𝑥 =
1−𝜇𝜇
(𝑥𝑥−𝜇𝜇)2 +
𝜇𝜇
(1−𝜇𝜇+𝑥𝑥)2, (15)
and the following table shows the results of similar calculations
𝑥𝑥 0,8 0,9 1 1,1 1,2
𝑓𝑓(𝑥𝑥) 2,30 1,70 1,31 1,04 0,85
from which it follows that the root of equation (15) lies in the range from 1.0 to 1.1, and, therefore, the
coordinate of the Lagrange point 𝐿𝐿3 is found as
𝑥𝑥3 ≈ 1.05. (16)
2.7 To prove that the vertex of an equilateral triangle is the Lagrange point
𝐿𝐿4, we write the expression for the total force acting on a body of small mass
𝑚𝑚0 in a vector form:
𝐹𝐹 ⃗ = 𝐺𝐺
𝑚𝑚0𝑚𝑚1
𝑅𝑅0
3 𝑟𝑟1 ���⃗ + 𝐺𝐺
𝑚𝑚0𝑚𝑚2
𝑅𝑅0
3 𝑟𝑟2 ���⃗. (17)
The expression on the right hand side of formula (17) is expressed
through the radius vector of the center of mass
𝑚𝑚1𝑟𝑟1 ���⃗ + 𝑚𝑚2𝑟𝑟2 ���⃗ = (𝑚𝑚1 + 𝑚𝑚2)𝑟𝑟𝐶𝐶 ���⃗, (18)
then the equation of Newton’s second law for this body in projection onto the
direction of the vector 𝑟𝑟𝐶𝐶 ���⃗ has the form:
𝑚𝑚0𝜔𝜔2
𝑟𝑟𝐶𝐶 = 𝐺𝐺
𝑚𝑚0
𝑅𝑅0
3 (𝑚𝑚1 + 𝑚𝑚2)𝑟𝑟𝐶𝐶. (19)
From this equation it follows that the angular velocity of the body 𝑚𝑚0 is equal to
𝜔𝜔 = �𝐺𝐺
𝑚𝑚1+𝑚𝑚2
𝑅𝑅0
3 = 𝜔𝜔0, (20)
which coincides with the angular velocity of rotation of massive bodies (6), therefore the position of the body
𝑚𝑚0 remains unchanged relative to the massive bodies. Therefore, the vertex of an equilateral triangle is indeed
a Lagrange point.
Lagrange points in the Solar System
2.8 In order for the SOHO spacecraft to remain unchanged relative to the Earth and the Sun, it must be at the
Lagrange point 𝐿𝐿1. In order to determine its position, it is necessary to solve equation (11). First we calculate
the value of the parameter 𝜇𝜇 for the Sun-Earth system:
𝜇𝜇 =
𝑀𝑀2
𝑀𝑀1+𝑀𝑀2
= 3.00 ∙ 10−6
. (21)
This value is significantly less than 1, so the distance 𝑙𝑙 from the spacecraft to the Earth is significantly
less than the radius of the Earth's orbit. In the used system of units we denote 𝑧𝑧 =
𝑙𝑙
𝑅𝑅0
= 1 − 𝜇𝜇 − 𝑥𝑥, then from
equation (11) we obtain
1 − 𝜇𝜇 − 𝑧𝑧 =
1−𝜇𝜇
(1−𝑧𝑧)2 −
𝜇𝜇
𝑧𝑧2. (22)
Since𝑧𝑧,𝜇𝜇 ≪ 1, wecan usetheexpansion
1
(1−𝑧𝑧)2 ≈ 1 + 2𝑧𝑧 andinthiscaseequation(22)issignificantly
simplified and its solution is obtained as 𝑧𝑧 = (𝜇𝜇/3)1/3
, that is, the required distance is equal to
𝑙𝑙𝑆𝑆 = 𝑅𝑅0�
𝑀𝑀2
3𝑀𝑀1
3
= 1.50 ∙ 106
km. (23)
2.9 Obviously, the James Webb telescope is located at the Lagrange point 𝐿𝐿2, therefore, to determine its
position, it is necessary to solve equation (13) using a method similar to the method in 2.8:
XX International Zhautykov Olympiad/Theoretical Competition с. 8/14
1 + 𝑧𝑧 =
1
(1+𝑧𝑧)2 +
𝜇𝜇
𝑧𝑧2, (24)
i.e. the space telescope is located at the same distance from the Earth (only on the other side):
𝑙𝑙𝑊𝑊 = 𝑅𝑅0�
𝑀𝑀2
3𝑀𝑀1
3
= 1.50 ∙ 106
km. (25)
2.10 If an asteroid accidentally ends up at the Lagrange point 𝐿𝐿4, or the point 𝐿𝐿5 symmetrical to it for the
Jupiter-Sun system, then its position relative to Jupiter and the Sun remains unchanged for a long time.
Asteroidslocated at other pointsconstantly change their positionrelativetoJupiter andtheSun. Consequently,
the centers of groups of Trojan asteroids are located at the lateral Lagrange points. Therefore, the distance
from Jupiter to these points is equal to the distance from Jupiter tothe Sun. The mass of Jupiter is significantly
less than the mass of the Sun, so the distance between them is almost equal to the radius of Jupiter's orbit,
which can be found using Kepler's third law
𝑙𝑙𝐽𝐽 = 𝑅𝑅0 �
𝑇𝑇𝐽𝐽
𝑇𝑇0
�
2/3
= 7.82 ∙ 108
km, (26)
where 𝑇𝑇0 = 1.00 year stands for the period of rotation of the Earth around the Sun.
Content Points
2.1
Formula (1): 𝑅𝑅1 + 𝑅𝑅2 = 𝑅𝑅0 0.1
0.4
Formula (2): 𝑚𝑚1𝑅𝑅1 = 𝑚𝑚2𝑅𝑅2 0.1
Formula (3): 𝑅𝑅1 =
𝑚𝑚2
𝑚𝑚1+𝑚𝑚2
𝑅𝑅0
0.1
Formula (4): 𝑅𝑅2 =
𝑚𝑚1
𝑚𝑚1+𝑚𝑚2
𝑅𝑅0
0.1
2.2
Formula (5): 𝑚𝑚1𝜔𝜔0
2
𝑅𝑅1 = 𝐺𝐺
𝑚𝑚1𝑚𝑚2
𝑅𝑅0
2
0.1
0.2
Formula (6): 𝜔𝜔0 = �𝐺𝐺
𝑚𝑚1+𝑚𝑚2
𝑅𝑅0
3
0.1
2.3
Formula (7): 𝐹𝐹𝑥𝑥 = −𝐺𝐺
𝑚𝑚0𝑚𝑚1
|𝑋𝑋+𝑅𝑅1|3
(𝑋𝑋 + 𝑅𝑅1) − 𝐺𝐺
𝑚𝑚0𝑚𝑚1
|𝑋𝑋−𝑅𝑅2|3
(𝑋𝑋 − 𝑅𝑅2) 0.5
2.0
Formula (8): 𝑓𝑓 𝑥𝑥 = −
1−𝜇𝜇
|𝑥𝑥+𝜇𝜇|3 (𝑥𝑥 + 𝜇𝜇) −
𝜇𝜇
|𝑥𝑥−1+𝜇𝜇|3 (𝑥𝑥 − 1 + 𝜇𝜇) 0.5
Formula (9): −𝑚𝑚0𝜔𝜔0
2
𝑋𝑋 = 𝐹𝐹𝑥𝑥 0.5
Formula (10): −𝑥𝑥 = −
1−𝜇𝜇
|𝑥𝑥+𝜇𝜇|3 (𝑥𝑥 + 𝜇𝜇) −
𝜇𝜇
|𝑥𝑥−1+𝜇𝜇|3 (𝑥𝑥 − 1 + 𝜇𝜇) 0.5
2.4
Positions of vertical asymptotes on the graph 0.2
0.8
3 branches of the graph 3x0.2=0,6
2.5 Straight line 𝑓𝑓 𝑥𝑥 = −𝑥𝑥 on the graph 0.2
0.3
Threeintersection pointsareindicated, correspondingto3Lagrangepoints 0.1
2.6
For each point:
- position is pointed;
- numerical value is obtained.
3x(0.1+0.2)
=0.9 0.9
2.7
Formula (17): 𝐹𝐹 ⃗ = 𝐺𝐺
𝑚𝑚0𝑚𝑚1
𝑅𝑅0
3 𝑟𝑟1 ���⃗ + 𝐺𝐺
𝑚𝑚0𝑚𝑚2
𝑅𝑅0
3 𝑟𝑟2 ���⃗ 0.2
1.0
Formula (18): 𝑚𝑚1𝑟𝑟1 ���⃗ + 𝑚𝑚2𝑟𝑟2 ���⃗ = (𝑚𝑚1 + 𝑚𝑚2)𝑟𝑟𝐶𝐶 ���⃗ 0.2
Formula (19): 𝑚𝑚0𝜔𝜔2
𝑟𝑟𝐶𝐶 = 𝐺𝐺
𝑚𝑚0
𝑅𝑅0
3 (𝑚𝑚1 + 𝑚𝑚2)𝑟𝑟𝐶𝐶
0.3
Formula (20): 𝜔𝜔 = �𝐺𝐺
𝑚𝑚1+𝑚𝑚2
𝑅𝑅0
3 = 𝜔𝜔0
0.3
2.8
Numerical value in equation (21): 𝜇𝜇 = 3.00 ∙ 10−6 0.2
1.6
Exact equation (22): 1 − 𝜇𝜇 − 𝑧𝑧 =
1−𝜇𝜇
(1−𝑧𝑧)2 −
𝜇𝜇
𝑧𝑧2
0.2
Formula (23): 𝑙𝑙𝑆𝑆 = 𝑅𝑅0�
𝑀𝑀2
3𝑀𝑀1
3 0.7
Numerical value in formula (23): 𝑙𝑙𝑆𝑆 = 1.50 ∙ 106
km. 0.5
XX International Zhautykov Olympiad/Theoretical Competition с. 9/14
2.9
Formula (24): 1 + 𝑧𝑧 =
1
(1+𝑧𝑧)2 +
𝜇𝜇
𝑧𝑧2
0.2
1.4 Formula (25): 𝑙𝑙𝑊𝑊 = 𝑅𝑅0�
𝑀𝑀2
3𝑀𝑀1
3 0.7
Numerical value in formula (25): 𝑙𝑙𝑊𝑊 = 1.50 ∙ 106
km. 0.5
2.10
Formula (26): 𝑙𝑙𝐽𝐽 = 𝑅𝑅0 �
𝑇𝑇𝐽𝐽
𝑇𝑇0
�
2/3 1.0
1.4
Numerical value in formula (26): 𝑙𝑙𝐽𝐽 = 7.82 ∙ 108
km 0.4
Total 10.0
