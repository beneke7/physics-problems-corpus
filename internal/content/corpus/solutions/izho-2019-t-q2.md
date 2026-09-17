---
id: izho-2019-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2019-t-q2
solution_type: official
source_document: solution-document-izho-2019-t-s
source_pdf: cache/phoxiv/izho/2019_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2019_T_S.pdf."
---

Problem 2. Conductors in an electric field (10,0 points)
Conductive ball and point charge
2.1 The electric potential of the point-like charge 𝑞 is equal to
𝜑1 =
𝑞
4𝜋𝜀0√(𝑙−𝑥)2+𝑦2
, (1)
whereas the electric potential of the fictitious point-like charge 𝑄 is found to be
𝜑2 =
𝑄
4𝜋𝜀0√(𝑥−𝑎)2+𝑦2
. (2)
According to the principle of superposition, the full potential is just a sum of equations (1) and (2)
𝜑 = 𝜑1 + 𝜑2 =
𝑞
4𝜋𝜀0√(𝑙−𝑥)2+𝑦2
+
𝑄
4𝜋𝜀0√(𝑥−𝑎)2+𝑦2
. (3)
2.2 The equation of the circle corresponding to the surface of the ball is written as
𝑥2
+ 𝑦2
= 𝑅2
. (4)
Eliminating 𝑦 with the help of relation (4) and substituting it into formula (3) yield
𝜑 =
𝑞
4𝜋𝜀0√𝑙2−2𝑙𝑥+𝑅2
+
𝑄
4𝜋𝜀0√𝑎2−2𝑎𝑥+𝑅2
. (5)
2.3 The potential of the ball is zero, since it is grounded, i.e.
𝜑 = 0. (6)
Equating expression (5) to zero, it can be rewritten in the form
𝑄
𝑞
= −
√𝑎2−2𝑎𝑥+𝑅2
√𝑙2−2𝑙𝑥+𝑅2
= 𝛽 = 𝑐𝑜𝑛𝑠𝑡 < 0. (7)
Raising equation (7) in the square, one gets the following equation
2𝑥(𝑙𝛽2
− 𝑎) + 𝑎2
+ 𝑅2
− 𝛽2(𝑙2
+ 𝑅2) = 0. (8)
Equation (8) should be satisfied for all 𝑥 ∈ (−𝑅,𝑅), and this is possible only if the
coefficient at the linear term 𝑥 and the free term are separately equal to zero, i.e.
𝑙𝛽2
− 𝑎 = 0, (9)
𝑎2
+ 𝑅2
− 𝛽2(𝑙2
+ 𝑅2) = 0. (10)
Solving the set of equations (9) and (10), the following two solutions are obtained
𝑎 = 𝑙, 𝛽 = −1, (11)
𝑎 =
𝑅2
𝑙
, 𝛽 = −
𝑅
𝑙
. (12)
Only solution (12) is nonzero, so we finally get
𝑄 = −𝑞
𝑅
𝑙
, (13)
𝑎 =
𝑅2
𝑙
. (14)
2.4 The force acting on the point-like charge reads as
𝐹 =
𝑞2𝑅𝑙
4𝜋𝜀0(𝑙2−𝑅2)2
, (15)
and, therefore, the work sought is found by integrating as
𝐴 = ∫ 𝐹𝑑𝑙
∞
𝑙
=
𝑞2𝑅
8𝜋𝜀0(𝑙2−𝑅2)
. (16)
2.5 Let the point-like charge be slowly moved from the initial position to infinity such that the
resulting current strength in the ball is negligibly small and the release of Joule heat can be omitted.
Let 𝑊 𝑞 be the energy of the point-like charge 𝑞, 𝑊𝑄 be the sought interaction energy of induced
V International Zhautykov Olympiad/Theoretical Competition Page 4/12
charges, 𝑊𝑄𝑞 be the interaction energy of the point charge 𝑞 with the induced charges, which is
simply obtained as
𝑊𝑄𝑞 = −
𝑞2𝑅
4𝜋𝜀0(𝑙2−𝑅2)
. (17)
When the charge is removed to infinity, the law of energy conservation must be satisfied,
which in this case has the form
𝑊 𝑞 + 𝑊𝑄 + 𝑊𝑄𝑞 + 𝐴 = 𝑊 𝑞. (18)
The set of equations (16)-(18) finally provides the following result
𝑊𝑄 =
𝑞2𝑅
8𝜋𝜀0(𝑙2−𝑅2)
. (19)
Conductive ball in a uniform electric field
2.6 To find the electric field inside a uniformly charged ball, the Gauss theorem is written for a
spherical volume of radius 𝑟 < 𝑅. The charge inside this volume is easily derived as
𝑞 =
4
3
𝜋𝑟3
𝜌, (20)
and the electric field flux is found to be
Ф𝐸 = 4𝜋𝑟2
𝐸. (21)
According to the Gauss theorem
Ф𝐸 =
𝑞
𝜀0
, (22)
which ultimately entails
𝐸 ⃗ =
𝜌
3𝜀0
𝑟. (23)
The last expression takes into account that the electric field strength vector is collinear to the vector
𝑟.
2.7 Now consider the two fictitious balls with the bulk charge densities of opposite signs and
evaluate the electric field in the domain of their intersection. Take an arbitrary point inside this
domain and draw the radii of the vectors from the centers of the balls, denoting them 𝑟+ ⃗⃗⃗ and 𝑟− ⃗⃗⃗ ,
respectively. Then, applying formula (23) for each ball results in
𝐸+
⃗⃗⃗⃗ =
𝜌
3𝜀0
𝑟+ ⃗⃗⃗ , (24)
𝐸−
⃗⃗⃗⃗ = −
𝜌
3𝜀0
𝑟− ⃗⃗⃗ . (25)
The net electric field is found with the help of the superposition principle as
𝐸 ⃗ =
𝜌
3𝜀0
(𝑟+ ⃗⃗⃗ − 𝑟− ⃗⃗⃗ ) =
𝜌
3𝜀0
𝑎, (26)
where 𝑎 stands for the vector, drawn from the center of the negatively charged ball to the center of
the positively charged ball.
2.8 The field strength inside the conducting ball must be zero. The induced charges create,
according to formula (26), a uniform electric field, which must completely compensate for the
external electric field, whence we obtain that
𝜌𝑎 = 3𝜀0𝐸0. (27)
The charges of the fictitious balls are fully compensated with the exception of a thin layer
near their surfaces, which can be considered a surface charge. The layer thickness 𝛿 depends on the
angle 𝜃 and, due to the smallness of 𝑎, is equal to
𝛿 = 𝑎cos𝜃. (28)
Hence, the magnitude of the surface charge near the angle 𝜃 is equal to
𝜎 =
𝜌𝑉
𝑆
=
𝜌𝑆𝛿
𝑆
= 𝜌𝛿. (29)
It immediately follows from equations (27)-(29) that
𝜎 = 3𝜀0𝐸0 cos𝜃. (30)
2.9 Consider a thin cylinder near the surface of the conductor and apply the Gauss theorem to it.
Since the field inside the conductor is absent, and is directed normally just outside of it, then
according to the Gauss theorem
V International Zhautykov Olympiad/Theoretical Competition Page 5/12
𝐸𝑆 =
𝜎𝑆
𝜀0
, (31)
which yields
𝐸 = 3𝐸0 cos𝜃. (32)
Conductive ball and charged ring
2.10 The conducting ball is very small, so that the electric field of the ring 𝐸 in its vicinity can be
considered almost uniform. It has been shown in the previous part of this problem that its
polarization can be represented as two fictitious balls of opposite charge. These two balls behave in
an external field as a dipole with the moment
𝑝 = 𝑞𝑎, (33)
where
𝑞 = 𝜌
4
3
𝜋𝑟3
. (34)
Using (27), formulas (33) and (34) produce
𝑝 = 4𝜋𝑟3
𝜀0𝐸 ⃗ , (35)
Let us evaluate the electric field of the ring 𝐸 in the vicinity of the ball as a function of its
distance 𝑧 to the center. Obviously, the ring field is directed along the needle. Dividing the ring into
small parts that carry an electric charge ∆𝑞𝑖 the projection of their field on the direction of the
needle has the form
∆𝐸𝑧 =
∆𝑞𝑖 cos𝛼
4𝜋𝜀0(𝑧2+𝑅2)2
. (36)
Taking into account
cos𝛼 =
𝑧
(𝑧2+𝑅2)1/2 (37)
and summing over all elements of the ring, one gets
𝐸(𝑧) =
𝑞𝑧
4𝜋𝜀0(𝑧2+𝑅2)3/2
. (38)
The force acting on the dipole is obtained as
𝐹 = 𝑞𝐸(𝑧 + 𝑎) − 𝑞𝐸(𝑧) = 𝑞𝑎
𝑑𝐸
𝑑𝑧
= 𝑝
𝑑𝐸
𝑑𝑧
. (39)
Substituting formulas (35) and (38) into (39) gives rise to
𝐹 =
𝑞2𝑟3𝑧(𝑅2−2𝑧2)
4𝜋𝜀0(𝑧2+𝑅2)4
. (40)
It follows from expression (40) that there are three equilibrium positions, which are
determined by the points
𝑧1 = 0, (41)
𝑧2,3 = ±
𝑅
√2
. (42)
A simple analysis proves that the equilibrium position (41) is unstable, and the symmetric
positions (42) are both stable.
Near the position of the stable equilibrium, expression (40) for the force simplifies to
𝐹 = −
8𝑞2𝑟3𝑥
81𝜋𝜀0𝑅6
, (43)
where
𝑥 = 𝑧 −
𝑅
√2
≪ 𝑅. (44)
Newton's equation for the motion of the ball along the needle at small deviations 𝑥 has the
form
𝑚𝑥̈ +
8𝑞2𝑟3
81𝜋𝜀0𝑅6
𝑥 = 0, (45)
which is a harmonic equation with the frequency
𝜔 = √
8𝑞2𝑟3
81𝜋𝜀0𝑚𝑅6
. (46)
2.11 There is no need to integrate formula (40). In the initial position, the conducting ball is not
polarized and in the final state it is also not polarized, since at zero and at infinity separations the
V International Zhautykov Olympiad/Theoretical Competition Page 6/12
electric field of the ring vanishes. Therefore, it is immediately inferred from the law of energy
conservation that
𝐴 = 0. (47)
It is natural that integrating expression (40) from zero to infinity gives the same answer.
Part Content Points
2.1
Formula (1) 𝜑1 =
𝑞
4𝜋𝜀0√(𝑙−𝑥)2+𝑦2 0,2
0,6 Formula (2) 𝜑2 =
𝑄
4𝜋𝜀0√(𝑥−𝑎)2+𝑦2 0,2
Formula (3) 𝜑 = 𝜑1 + 𝜑2 =
𝑞
4𝜋𝜀0√(𝑙−𝑥)2+𝑦2
+
𝑄
4𝜋𝜀0√(𝑥−𝑎)2+𝑦2 0,2
2.2
Formula (4) 𝑥2
+ 𝑦2
= 𝑅2 0,2
0,4
Formula (5) 𝜑 =
𝑞
4𝜋𝜀0√𝑙2−2𝑙𝑥+𝑅2
+
𝑄
4𝜋𝜀0√𝑎2−2𝑎𝑥+𝑅2 0,2
2.3
Formula (6) 𝜑 = 0 0,2
1,8
Formula (7)
𝑄
𝑞
= −
√𝑎2−2𝑎𝑥+𝑅2
√𝑙2−2𝑙𝑥+𝑅2
= 𝛽 = 𝑐𝑜𝑛𝑠𝑡 < 0 0,2
Formula (8) 2𝑥(𝑙𝛽2
− 𝑎) + 𝑎2
+ 𝑅2
− 𝛽2(𝑙2
+ 𝑅2) = 0 0,2
Formula (9) 𝑙𝛽2
− 𝑎 = 0 0,2
Formula (10) 𝑎2
+ 𝑅2
− 𝛽2(𝑙2
+ 𝑅2) = 0 0,2
Formula (11) 𝑎 = 𝑙, 𝛽 = −1 0,2
Formula (12) 𝑎 =
𝑅2
𝑙
, 𝛽 = −
𝑅
𝑙
0,2
Formula (13) 𝑄 = −𝑞
𝑅
𝑙
0,2
Formula (14) 𝑎 =
𝑅2
𝑙
0,2
2.4
Formula (15) 𝐹 =
𝑞2𝑅𝑙
4𝜋𝜀0(𝑙2−𝑅2)2 0,2
0,4
Formula (16) 𝐴 = ∫ 𝐹𝑑𝑙
∞
𝑙
=
𝑞2𝑅
8𝜋𝜀0(𝑙2−𝑅2)
0,2
2.5
Formula (17) 𝑊𝑄𝑞 = −
𝑞2𝑅
4𝜋𝜀0(𝑙2−𝑅2)
0,2
0,6 Formula (18) 𝑊 𝑞 + 𝑊𝑄 + 𝑊𝑄𝑞 + 𝐴 = 𝑊 𝑞 0,1
Formula (19) 𝑊𝑄 =
𝑞2𝑅
8𝜋𝜀0(𝑙2−𝑅2)
0,3
2.6
Formula (20) 𝑞 =
4
3
𝜋𝑟3
𝜌 0,1
0,4
Formula (21) Ф𝐸 = 4𝜋𝑟2
𝐸 0,1
Formula (22) Ф𝐸 =
𝑞
𝜀0
0,1
Formula (23) 𝐸 ⃗ =
𝜌
3𝜀0
𝑟 0,1
2.7
Formula (24) 𝐸+
⃗⃗⃗⃗ =
𝜌
3𝜀0
𝑟+ ⃗⃗⃗ 0,1
0,4 Formula (25) 𝐸−
⃗⃗⃗⃗ = −
𝜌
3𝜀0
𝑟− ⃗⃗⃗ 0,1
Formula (26) 𝐸 ⃗ =
𝜌
3𝜀0
(𝑟+ ⃗⃗⃗ − 𝑟− ⃗⃗⃗ ) =
𝜌
3𝜀0
𝑎 0,2
2.8
Formula (27) 𝜌𝑎 = 3𝜀0𝐸0 0,2
0,8
Formula (28) 𝛿 = 𝑎cos𝜃 0,2
Formula (29) 𝜎 =
𝜌𝑉
𝑆
=
𝜌𝑆𝛿
𝑆
= 𝜌𝛿 0,2
Formula (30) 𝜎 = 3𝜀0𝐸0 cos𝜃 0,2
2.9 Formula (31) 𝐸𝑆 =
𝜎𝑆
𝜀0
0,2 0,4
V International Zhautykov Olympiad/Theoretical Competition Page 7/12
Formula (32) 𝐸 = 3𝐸0 cos𝜃 0,2
2.10
Formula (33) 𝑝 = 𝑞𝑎 0,4
3,8
Formula (34) 𝑞 = 𝜌
4
3
𝜋𝑟3
0,2
Formula (35) 𝑝 = 4𝜋𝑟3
𝜀0𝐸 ⃗ 0,4
Formula (36) ∆𝐸𝑧 =
∆𝑞𝑖 cos𝛼
4𝜋𝜀0(𝑧2+𝑅2)2 0,2
Formula (37) cos𝛼 =
𝑧
(𝑧2+𝑅2)1/2 0,2
Formula (38) 𝐸(𝑧) =
𝑞𝑧
4𝜋𝜀0(𝑧2+𝑅2)3/2 0,4
Formula (39) 𝐹 = 𝑞𝐸(𝑧 + 𝑎) − 𝑞𝐸(𝑧) = 𝑞𝑎
𝑑𝐸
𝑑𝑧
= 𝑝
𝑑𝐸
𝑑𝑧
0,4
Formula (40) 𝐹 =
𝑞2𝑟3𝑧(𝑅2−2𝑧2)
4𝜋𝜀0(𝑧2+𝑅2)4 0,2
Formula (41) 𝑧1 = 0 0,2
Formula (42) 𝑧2,3 = ±
𝑅
√2
0,2
Formula (43) 𝐹 = −
8𝑞2𝑟3𝑥
81𝜋𝜀0𝑅6 0,4
Formula (44) 𝑥 = 𝑧 −
𝑅
√2
≪ 𝑅. 0,2
Formula (45) 𝑥̈ +
8𝑞2𝑟3
81𝜋𝜀0𝑅6 𝑥 = 0 0,2
Formula (46) 𝜔 = √
8𝑞2𝑟3
81𝜋𝜀0𝑚𝑅6
0,2
2.11
Formula (47) 𝐴 = 0 0.4
0,4 Formal integral of formula (40) without the correct answer (0.1)
Total 10,0
