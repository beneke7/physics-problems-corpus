---
id: izho-2020-t-q1
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2020-t-q1
solution_type: official
source_document: solution-document-izho-2020-t-s
source_pdf: cache/phoxiv/izho/2020_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2020_T_S.pdf."
---

Problem 1 (10.0 points)
Problem 1.1 (4.0 points)
The oscillation period of a mathematical pendulum is determined by the formula
𝑇𝑇 = 2𝜋𝜋�
𝑙𝑙
𝑔𝑔
, (1)
where 𝑔𝑔 stands for the acceleration of gravity at a given time of day.
The difference in the periods of oscillation of the pendulum at midday and midnight is due to
the influence of the Sun: gravitational attraction and centrifugal force due to the Earth’s motion
around the Sun. Using formula (1) for the period of pendulum oscillation the relative change in the
periods can be represented as
𝜀𝜀 =
𝑇𝑇2−𝑇𝑇1
𝑇𝑇1
= �
𝑔𝑔1
𝑔𝑔2
− 1, (2)
where 𝑔𝑔1,𝑔𝑔2 denotes the acceleration of gravity at midday and midnight, respectively.
The directions of the Earth's rotation around its own axis and around the Sun coincide, as
shown in Figure 1. The directions of action of gravitational and centrifugal forces are different at
midday and midnight, as shown in Figure 2.
In Figure 2: 𝑚𝑚𝑔𝑔0 is the force of gravitational attraction to the Earth; 𝐹𝐹1 is the centrifugal force
due to the rotation of the Earth around its own axis; 𝐹𝐹2 is the force of gravitational attraction to the
Sun; 𝐹𝐹3 is the centrifugal force due to the motion of the Earth around the Sun.
Then the acceleration of gravity, taking into account the influence of the Sun, are determined
by the expressions:
At midday:
𝑔𝑔1 = 𝑔𝑔0 − 𝜔𝜔1
2
𝑟𝑟1 − 𝐺𝐺
𝑀𝑀
(𝑟𝑟2−𝑟𝑟1)2
+ 𝜔𝜔2
2
𝑟𝑟2. (3)
At midnight:
𝑔𝑔2 = 𝑔𝑔0 − 𝜔𝜔1
2
𝑟𝑟1 + 𝐺𝐺
𝑀𝑀
(𝑟𝑟2+𝑟𝑟1)2
− 𝜔𝜔2
2
𝑟𝑟2. (4)
In the above formulas M designates the mass of the Sun and G signifies the gravitational constant.
To simplify the obtained expressions, we use the equation describing the motion of the Earth
around the Sun in the following form
𝐺𝐺
𝑀𝑀
𝑟𝑟2
2 = 𝜔𝜔2
2
𝑟𝑟2. (5)
Given this relation, the acceleration difference is represented as
∆𝑔𝑔 = 𝑔𝑔1 − 𝑔𝑔2 = 𝜔𝜔2
2
𝑟𝑟2 �2 − �1 −
𝑟𝑟1
𝑟𝑟2
�
−2
− �1 +
𝑟𝑟1
𝑟𝑟2
�
−2
�. (6)
Note that in this case, in order to obtain a nonzero result in the power series expansions, it is
necessary to keep the second order terms, i.e. ( ) 2 2
3 2 1 1 x x x + − ≈ +
−
, such that:
XVI International Zhautykov Olympiad/Theoretical Competition Page 2/13
∆𝑔𝑔 = −6𝜔𝜔2
2
𝑟𝑟2 �
𝑟𝑟1
𝑟𝑟2
�
2
. (7)
Thus, the relative change in the periods of oscillations due to the influence of the Sun is equal
𝜀𝜀 ≈
∆𝑔𝑔
2𝑔𝑔2
≈
∆𝑔𝑔
2𝑔𝑔0
, (8)
so that the final relation is derived as
𝜀𝜀 = −3
𝜔𝜔2
2𝑟𝑟2
𝑔𝑔0
�
𝑟𝑟1
𝑟𝑟2
�
2
≈ −3,3 ∙ 10−12
. (9)
Content Points
Formula (1): 𝑇𝑇 = 2𝜋𝜋�
𝑙𝑙
𝑔𝑔
0,2
Formula (2): 𝜀𝜀 =
𝑇𝑇2−𝑇𝑇1
𝑇𝑇1
= �
𝑔𝑔1
𝑔𝑔2
− 1 0,2
Earth’s gravity is accounted for 0,2
Sun's gravity is accounted for 0,2
Centrifugal force due to the Earth motion around the Sun is accounted for 0,2
Centrifugal force due th the Earth rotation is accounted for 0,2
Formula (3): 𝑔𝑔1 = 𝑔𝑔0 − 𝜔𝜔1
2
𝑟𝑟1 − 𝐺𝐺
𝑀𝑀
(𝑟𝑟2−𝑟𝑟1)2 + 𝜔𝜔2
2
𝑟𝑟2 0,4
Formula (4): 𝑔𝑔2 = 𝑔𝑔0 − 𝜔𝜔1
2
𝑟𝑟1 + 𝐺𝐺
𝑀𝑀
(𝑟𝑟2+𝑟𝑟1)2
− 𝜔𝜔2
2
𝑟𝑟2 0,4
Formula (5): 𝐺𝐺
𝑀𝑀
𝑟𝑟2
2 = 𝜔𝜔2
2
𝑟𝑟2 0,3
Formula (6): ∆𝑔𝑔 = 𝑔𝑔1 − 𝑔𝑔2 = 𝜔𝜔2
2
𝑟𝑟2 �2 − �1 −
𝑟𝑟1
𝑟𝑟2
�
−2
− �1 +
𝑟𝑟1
𝑟𝑟2
�
−2
� 0,3
Formula (7): ∆𝑔𝑔 = −6𝜔𝜔2
2
𝑟𝑟2 �
𝑟𝑟1
𝑟𝑟2
�
2
0,4
Formula (8): 𝜀𝜀 ≈
∆𝑔𝑔
2𝑔𝑔2
≈
∆𝑔𝑔
2𝑔𝑔0
0,3
Formula (9): 𝜀𝜀 = −3
𝜔𝜔2
2𝑟𝑟2
𝑔𝑔0
�
𝑟𝑟1
𝑟𝑟2
�
2
0,3
Numerical value in formula (9): 𝜀𝜀 ≈ −3,3 ∙ 10−12
0,4
Total 4,0
Problem 1.2 (3.0 points)
Consider a conductor with a resistivity 𝜌𝜌, length 𝑙𝑙 and a cross section area 𝑆𝑆 in which the
current 𝐼𝐼 flows. According to the Joule-Lenz law, the heat power dissipated in a conductor per unit of
time is equal to
𝑊𝑊 = 𝐼𝐼2
𝑅𝑅, (1)
where the current density is defined as
𝑗𝑗 =
𝐼𝐼
𝑆𝑆
, (2)
and the resistance is found by the formula
𝑅𝑅 = 𝜌𝜌
𝑙𝑙
𝑆𝑆
. (3)
It follows from formulas (1)-(3) that the heat power per unit volume is determined by the
expression
𝑤𝑤 =
𝑊𝑊
𝑆𝑆𝑆𝑆
= 𝜌𝜌𝑗𝑗2
. (4)
On the other hand, Ohm's law is written as
𝑈𝑈 = 𝐼𝐼𝐼𝐼, (5)
in which the voltage across the conductor is expressed in terms of the field strength 𝐸𝐸 in the form
𝑈𝑈 = 𝐸𝐸𝐸𝐸. (6)
XVI International Zhautykov Olympiad/Theoretical Competition Page 3/13
Hence, equation (5), taking into account (2), (3) and (6), is written in the following
differential form
𝑗𝑗 =
1
𝜌𝜌
𝐸𝐸, (7)
Thus, according to the Joule-Lenz law, the heat power dissipated per unit of volume of the
substance is
𝑤𝑤 = 𝜌𝜌(𝑟𝑟)𝑗𝑗(𝑟𝑟)2
, (8)
where the current density is determined by the expression
𝑗𝑗(𝑟𝑟) =
𝐼𝐼
4𝜋𝜋𝑟𝑟2
, (9)
with 𝜌𝜌(𝑟𝑟) denotes the dependence of the resistivity on the distance 𝑟𝑟 to the common center of
spheres.
On the other hand, Ohm's law (7) is written in the differential form as
𝑗𝑗(𝑟𝑟) =
1
𝜌𝜌(𝑟𝑟)
𝐸𝐸(𝑟𝑟), (10)
where 𝐸𝐸(𝑟𝑟) stands for the electric field strength in the substance.
It follows from relations (8)-(10) that the electric field strength has the form
𝐸𝐸(𝑟𝑟) =
𝑤𝑤
𝑗𝑗(𝑟𝑟)
=
4𝜋𝜋𝜋𝜋
𝐼𝐼
𝑟𝑟2
. (11)
To determine the charge inside the conducting substance, we use the Gauss theorem for the
closed volume, which is practically enclosed between spheres of radii 𝑎𝑎 and 𝑏𝑏
𝐸𝐸(𝑏𝑏)4𝜋𝜋𝑏𝑏2
− 𝐸𝐸(𝑎𝑎)4𝜋𝜋𝑎𝑎2
=
𝑄𝑄
𝜀𝜀0
. (12)
where 𝑄𝑄 symbolizes the total charge inside the conductive substance.
Since the volume of the substance enclosed between the two spheres is equal to
𝑉𝑉 =
4
3
𝜋𝜋𝑏𝑏3
−
4
3
𝜋𝜋𝑎𝑎3
, (13)
Then, the average charge density in the conducting substance is obtained as
𝜌𝜌𝑄𝑄 =
𝑄𝑄
𝑉𝑉
=
12𝜋𝜋𝜀𝜀0𝑤𝑤
𝐼𝐼
�
𝑏𝑏4−𝑎𝑎4
𝑏𝑏3−𝑎𝑎3�. (14)
Content Points
Formula (1): 𝑊𝑊 = 𝐼𝐼2
𝑅𝑅 0,2
Formula (2): 𝑗𝑗 =
𝐼𝐼
𝑆𝑆
0,2
Formula (3): 𝑅𝑅 = 𝜌𝜌
𝑙𝑙
𝑆𝑆
0,2
Formula (4): 𝑤𝑤 =
𝑊𝑊
𝑆𝑆𝑆𝑆
= 𝜌𝜌𝑗𝑗2
0,2
Formula (5): 𝑈𝑈 = 𝐼𝐼𝐼𝐼 0,2
Formula (6): 𝑈𝑈 = 𝐸𝐸𝐸𝐸 0,2
Formula (7): 𝑗𝑗 =
1
𝜌𝜌
𝐸𝐸 0,2
Formula (8): 𝑤𝑤 = 𝜌𝜌(𝑟𝑟)𝑗𝑗(𝑟𝑟)2
0,2
Formula (9): 𝑗𝑗(𝑟𝑟) =
𝐼𝐼
4𝜋𝜋𝑟𝑟2
0,2
Formula (10): 𝑗𝑗(𝑟𝑟) =
1
𝜌𝜌(𝑟𝑟)
𝐸𝐸(𝑟𝑟) 0,2
Formula (11): 𝐸𝐸(𝑟𝑟) =
𝑤𝑤
𝑗𝑗(𝑟𝑟)
=
4𝜋𝜋𝜋𝜋
𝐼𝐼
𝑟𝑟2
0,2
Formula (12): 𝐸𝐸(𝑏𝑏)4𝜋𝜋𝑏𝑏2
− 𝐸𝐸(𝑎𝑎)4𝜋𝜋𝑎𝑎2
=
𝑄𝑄
𝜀𝜀0
0,3
Formula (13): 𝑉𝑉 =
4
3
𝜋𝜋𝑏𝑏3
−
4
3
𝜋𝜋𝑎𝑎3
0,2
Formula (14): 𝜌𝜌𝑄𝑄 =
12𝜋𝜋𝜀𝜀0𝑤𝑤
𝐼𝐼
�
𝑏𝑏4−𝑎𝑎4
𝑏𝑏3−𝑎𝑎3
� 0,3
Total 3,0
XVI International Zhautykov Olympiad/Theoretical Competition Page 4/13
Problem 1.3 (3.0 points)
To analyze the image on the screen, it is more convenient to build first the image 𝐿𝐿′ of the
source in the mirror. This image is located at the distance 𝑙𝑙 from the mirror and has the same
dimensions as the real source.
1.3.1 In this case, the source size is much smaller than
the size of the mirror. As a first approximation, the
source can be considered point-like. Therefore, the
illuminated area on the screen has the form of a regular
triangle repeating the shape of the mirror (see. fig.).
It follows from simple geometric constructions
that the size of the triangle is 3 times the size of the
mirror, i.e. a triangle on the screen can be inscribed in a
circle of radius 𝑟𝑟 = 3𝑟𝑟2 = 30 𝑚𝑚𝑚𝑚.
Since the source has, albeit small, but finite dimensions, the image of the triangle is to be
slightly blurry, i.e. bordered by a semi-illuminated strip (border). The width of this strip is
approximately equal to ∆𝑟𝑟 ≈ 3𝑟𝑟1 = 3 𝑚𝑚𝑚𝑚. It can be imagined that each source point gives an image
in the form of a triangle, these images are displaced relative to each other by the twice displacement
of the source points.
In the center of the triangle there should be a blurred shadow from the source (shadow and
semi shadow) whose radius is 𝑟𝑟𝑆𝑆 ≈ 2𝑟𝑟1 = 2 𝑚𝑚𝑚𝑚.
1.3.2 In this case, the size of the source is much larger than
the size of the mirror, which in the first approximation can
be considered as a very small “point” hole that forms an
inverted image of the source. Such an effect is used in a
pinhole camera, which also forms an inverted image.
It follows from geometric constructions that a star
can be inscribed in a circle of radius 𝑟𝑟 = 2𝑟𝑟1 = 20 𝑚𝑚𝑚𝑚.
The final dimensions of the source lead to slight blurring
of the image with the width of the semi-illuminated strip
(border) approximately equal to ∆𝑟𝑟 = 2𝑟𝑟2 = 0.2 𝑚𝑚𝑚𝑚.
Further, it should be noted that the real source creates a shadow on the screen in the form of the same
five-pointed star and of the same size! However, this shadow is not inverted. Therefore, only part of
XVI International Zhautykov Olympiad/Theoretical Competition Page 5/13
the bright star is closed, as shown in the figure. Thus, only five irregular quadrangles remain
illuminated on the screen.
Content Points
1.3.1
The rays are correctly constructed (the image of the source, or the correct
reflection of the rays);
0.3
1.3
Image grading:
the main part is an inverted triangle; (if not, then the rest in this paragraph
is not counted);
Triangle size - numerical value (side or radius);
There is a semi-illuminated border;
Border width;
There is a blurred shadow in the center;
The size of the shadow (partial shade) is the radius in the range of 1-2 mm;
0,3
0,1
0,2
0,1
0,2
0,1
1.3.2
The rays are correctly constructed (the image of the source, or the correct
reflection of the rays);
0,2
1.7
Image grading
The main part is an inverted star; (if not, then the rest in this paragraph is
not counted);
The radius of the star (numerical value);
There is a border;
Estimation of the border thickness;
There is a shadow from the source;
Shadow is not an inverted star;
The size of the shadow coincides with the size of the inverted star;
Illuminated areas - 5 quadrangles;
0,4
0,2
0,1
0,2
0,2
0,1
0,2
0,1
Total 3,0
