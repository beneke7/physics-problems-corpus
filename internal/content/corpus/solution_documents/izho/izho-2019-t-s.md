---
id: solution-document-izho-2019-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2019_T_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [izho-2019-t-q1, izho-2019-t-q2, izho-2019-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2019_T_S.pdf."
---

V International Zhautykov Olympiad/Theoretical Competition Page 1/12
SOLUTIONS TO THE PROBLEMS OF THE THEORETICAL
COMPETITION
Attention. Points in grading are not divided!
Problem 1 (10.0 points)
Problem 1A (4.0 points)
Since the thread is inextensible and under stress, then the speed of the puck is always
perpendicular to the thread. Therefore, the tension force of the thread does not perform any work on
the puck and its speed remains constant by modulus
𝑣 = 𝑐𝑜𝑛𝑠𝑡. (1)
The puck moves along its trajectory with the curvature radius equal to the length 𝑙 of the
unwound thread, therefore, the condition for the thread to be torn up is found from Newton's second
law as
𝑇 = 𝑚
𝑣2
𝑙
. (2)
The length of the thread changes as a result of winding on the cylinder according to
𝑑𝑙 = −𝑅𝑑𝛼, (3)
where
𝑑𝛼 = 𝜔𝑑𝑡, (4)
and the angular velocity of the thread rotation is obtained as follows
𝜔 =
𝑣
𝑙
. (5)
It follows from equations (3)-(5) that
𝑙𝑑𝑙 = −𝑅𝑣𝑑𝑡, (6)
and its integration entails
𝑙2
− 𝑙0
2
= −2𝑅𝑣𝑡. (7)
Substituting formula (1) into (7), the time moment sought is finally found as
𝑡 =
𝑙0
2−(
𝑚𝑣2
𝑇
)
2
2𝑅𝑣
=
𝑙0
2𝑇2−𝑚2𝑣4
2𝑅𝑣𝑇2
. (8)
Content Points
The puck speed remains unchanged 1
𝑇 = 𝑚
𝑣2
𝑙
0.5
𝑙𝑑𝑙 = −𝑅𝑣𝑑𝑡 1
𝑙2
− 𝑙0
2
= −2𝑅𝑣𝑡 0.5
𝑡 =
𝑙0
2
𝑇2
− 𝑚2
𝑣4
2𝑅𝑣𝑇2
1
Total 4.0
Problem 1В (3.0 points)
Possible solution. The power of the heat transfer from the body to the air is proportional to
the difference between the body T and the air x T temperatures with the factor  , i.e.
( ) x P T T  = − , (1)
as a result, the body with the heat capacity С cools down by the temperature dT over time period
dt , which obeys the heat balance equation
CdT Pdt =− . (2)
Equations (1) and (2) with the initial condition 0 T T = have a solution
0 ( ) ( ) t
x x T t T T T e  −
= + − , (3)
where /C   = is a constant.V International Zhautykov Olympiad/Theoretical Competition Page 2/12
Let the body be cooled from the temperature 0 T to the temperature 1 T for a certain time
interval, then it follows from (3) that
( ) ( ) 1 0 0 x T T T T  − = − , (4)
where  is a constant.
Over the following same time interval, this difference will also change in  times
( ) ( ) 2 1 1 x T T T T  − = − . (5)
Equations (4) and (5) result in the relation
( )
( )
( )
( )
0 1
1 0 2 0
x x T T T T
T T T T
− −
=
− −
, (6)
which has the following solution
( )
2
0 2 1
0 2 1 2
x
T T T
T
T T T
−
=
+ −
. (7)
It is obtained from the graph provided: the initial temperature 0 373K T = , in 10 minutes the
temperature is equal to 1 337 T K = , and in 20 minutes it reaches the value of 2 319 T K = .
Substituting these data into equation (7), the air temperature is finally calculated as
301 28 x T K C = =  . (8)
Content Points
Correct method for determining the air temperature 1.5
The air temperature lies in the interval 27.5 28.5 C x T = −  1.5
The air temperature lies in the interval 27.0 29.0 C x T = −  (1.0)
The air temperature lies in the interval 26.5 29.5 C x T = −  (0.5)
Out of the above intervals 0
Total 3.0
Problem 1С (3.0 points)
Let 𝑅 be the active component of the load (the real part of the impedance), and 𝑋 be the
reactive component of the entire circuit (the imaginary part of the total impedance). Then the
current amplitude is found as
𝐼 =
𝑈
√(𝑟+𝑅)2+𝑋2
.
The average thermal power in the load reads as
𝑃 =
1
2
𝐼2
𝑅 =
𝑈2𝑅
2[(𝑟+𝑅)2+𝑋2]
.
It is seen that the maximum power is achieved at X = 0, i.e. there should be no phase shift in
the circuit. The remaining expression has a maximum at R = r.
The phase shift would be zero if a coil was connected in series with the
capacitor such that
1
𝜔𝐶
= 𝜔𝐿, and, thus, 𝐿 =
1
𝜔2𝐶
= 1.00 ∙ 10−2
𝐻𝑛.
It turns out that the simplest load must consist of the resistor with the resistance
of 2019 Ohms and the coil with the inductance of 1.00 ∙ 10−2
𝐻𝑛.
The maximum power is obtained as
𝑃 𝑚𝑎𝑥 =
1
2
𝑈2
4𝑟
=
𝑈2
8𝑟
= 13.9 mW.
Content Points
The phase shift is zero 1V International Zhautykov Olympiad/Theoretical Competition Page 3/12
Without justification (0,5)
The inductance of the coil 𝐿 =
1
𝜔2𝐶
0,7
Correct numerical value 𝐿 = 10−2
Hn 0,3
Maximum power at R = r 0,5
The maximum power itself 𝑃 𝑚𝑎𝑥 =
𝑈2
8𝑟
0,3
Correct numerical value 𝑃 𝑚𝑎𝑥 = 14 mW 0,2
Total 3,0
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
Let 𝑊 𝑞 be the energy of the point-like charge 𝑞, 𝑊𝑄 be the sought interaction energy of inducedV International Zhautykov Olympiad/Theoretical Competition Page 4/12
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
according to the Gauss theoremV International Zhautykov Olympiad/Theoretical Competition Page 5/12
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
polarized and in the final state it is also not polarized, since at zero and at infinity separations theV International Zhautykov Olympiad/Theoretical Competition Page 6/12
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
0,2 0,4V International Zhautykov Olympiad/Theoretical Competition Page 7/12
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
Problem 3. Laser (10.0 points)
Population inversion: two-level system
3.1 The figure on the right shows a diagram of possible transitions and their
probabilities. If the population of the excited state is equal to 1 n , then the
population of the ground state is equal to ( ) 1 1 n − , since the molecule can only
be in one of two states.
The balance equation describing the change in the population directly
follows from the drawn diagram as
( ) 1
1 0 1 0 1
1
1
dn
n I n I n
dt
 

= − − + − . (1)
3.2 In the stationary mode 1 / 0 dn dt = , then it follows from equation (1) that the population of the
excited state is given by the formula


0
0
1
2 1 I
I
n
+
= . (2)
Accordingly, the difference in the populations of the excited and ground states is equal to
( )
 

0 0
0
1 1
2 1
1
1
2 1
2 1
I I
I
n n n
+
− = −
+
= − − =  . (3)
3.3 Even with the intensity of the pumping light flux tending to infinity, the population inversion in
the two-level system cannot be achieved, therefore, the laser light flux cannot be amplified in this
system.V International Zhautykov Olympiad/Theoretical Competition Page 8/12
Population inversion: three-level system
3.4 In this system, there are no forced transitions "down", so the balance equation
for the population of state 2 is written as:
( ) 2 2
0 2 1
dn n
I n
dt


= − + − . (4)
Here, it is taken into account that the molecule can only be in two states: the
excited state 2, or the ground state 0.
3.5 In the stationary mode 2 / 0 dn dt = , therefore, as it follows from equation (4),
the population of the excited state is derived as





0
0
0
0
2
1 1 I
I
I
I
n
+
=
+
= . (5)
The difference between the populations of the excited and ground states is found by the
formula
( )


0
0
2 2 0 2
1
1
1
I
I
n n n n n
+
−
= − − = − =  . (6)
3.6 Laser light amplification is possible when the population inversion is reached, i.e. 0  n . It
follows from formula (6) that this is possible when
1 0   I . (7)
Population inversion: four-level system
3.7 In the four-level system, the balance equation for the population of state 2
coincides with equation (4), and the stationary value of the population of this state
is also described by formula (5). The essential difference of this system is that from
state 2 the transition is undertaken to intermediate state 3, whose population is
practically equal to 0. Therefore, in this system the population difference is equal to


0
0
2
1 I
I
n n
+
= =  , (8)
and the population inversion between states 2 and 3 is achieved with practically arbitrary value of
the parameter
0 0   I . (9)
Resonator
3.8 The change in the number dN of photons in the resonator is due only to their output through
the translucent mirror. For a short period of time dt , the number of photons that leave the resonator
through the mirror is found to be
( ) 1 out G dN I Sdt dN  = − =− . (10)
where S stands for the cross section area of the resonator.
The intensity of the laser light flux G I can be expressed in terms of the average density of
photons
Sl
N
in the resonator and the speed of their propagation
r
c
in the form
r
c
Sl
N
IG
2
1
= . (11)
The factor 1/2 takes into account that the laser light in the resonator propagates in two
opposite directions. Expressing the number of photons in the resonator through the intensity of the
generation flux
G I
c
rSl
N
2
= (12)V International Zhautykov Olympiad/Theoretical Competition Page 9/12
and substituting it into equation (10), one gets
( ) ( ) 1 1
2 2
G G G
c c
dI I Sdt I dt
rSl rl
  = − − = − − . (13)
This equation has the required form
( )
G G
G
I
T
I
rl
c
dt
dI 1
2
1
− =
−
− =

, (14)
where the photon lifetime in the resonator is determined by the formula
( )
9 2
3,00 10
1
rl
T s
c 
−
= = 
−
. (15)
3.9 Consider the change in the number of photons in the presence of the stimulated emission and
the absence of losses through the mirror. In accordance with the definition of the stimulated
emission cross section, the number of generated photons can be described by the equation
Sldt n I Vdt n I dN E G E G     2 2 = = . (16)
Here 𝑛𝛾𝑉 denotes the number of dye molecules in the resonator being in the excited state, and
Sl V = is the resonator volume.
Substituting the expression for the number of photons in the resonator (12) into the last
equation, the desired equation is finally obtained
G E
G G
dI c
nI KnI
dt r
 
= = , (17)
with the resonator gain
10 1
5,72 10 E c
K s
r
  −
= =  . (18)
Stationary generation mode
3.10 To describe the dynamics of the intensity of the laser light flux, it is necessary to combine
equations (14) and (17):
1 G
G G
dI
KnI I
dt T
= − . (19)
The population of the excited state is described by the balance equation
( ) n I n n I
dt
dn
E G A 

 2
1
1 0 − − − = , (20)
which takes into account the absorption of the pumping light flux, spontaneous and stimulated
emissions from the excited state.
3.11 To initiate the laser light amplification, it is necessary that the derivative in equation (19)
should be greater than zero, therefore the threshold value of the population of the excited state is
equal to
3 1
5,83 10 1 th n
KT
−
= =  . (21)
3.12 To derive the threshold value of the intensity of the pumping light flux, we make use of
equation (20) in the absence of the laser light flux 0 G I = , whence we get
( )
21 2 1
0, 3,58 10
1
th th
th
A th A
n n
I cm s
n  
− −
=  =  
−
. (22)
To find the pumping energy flux, the calculated flux (22) must be multiplied by the energy
of one quantum
19
3,83 10
hc
J 

−
= =  , (23)
therefore, the pumping energy intensity is obtained asV International Zhautykov Olympiad/Theoretical Competition Page 10/12
3
0, 2
1,37 10 E th
W
I I
cm
 = =  . (24)
3.13 In the stationary mode, the time derivatives in equations (19) and (20) vanish. Equation (19)
then yields
KT
n
1
= , (25)
and it is found from equation (20) that
n
n I
I
E
A
G



2
1
0 −
= . (26)
Expressing the intensity of the pumping light flux through its threshold value
0 0,th
A
n
I I  

= = (27)
and substituting it into formula (23), one obtains
1
1
2 2
A
A
G
E E
n
n
I
n
 
  
 
−
−
= = . (28)
At the output of the resonator, the laser light intensity is equal to
( )
( )
( )
1
1 ( 1) 1
2
G
E
I I E

  

−
= − = − = − , (29)
in which the constant factor is introduced as
22 2 1 1
5,41 10
2 E
E cm s


− − −
= =   . (30)
The graph of relation (29) is a straight line, as shown in the figure below.
3.14 On the one hand, the number of light quanta absorbed in the resonator per unit time is
calculated by the formula
0, A th A N I Sl    = . (31)
On the other hand, the number of quanta leaving the resonator per unit time is
( )S E NE 1 − =  . (32)
Thus, the quantum output turns out to be equal
( )
( ) ( ) l I
E
N
N
f
A tr A
E
 

0
1 −
= = . (33)
The substitution of all parameters included in this formula leads to the final result

 1 −
= f . (34)V International Zhautykov Olympiad/Theoretical Competition Page 11/12
Part Content Points
3.1 Equation (1): ( ) 1
1 0 1 0 1
1
1
dn
n I n I n
dt
 

= − − + − 0,3 0,3
3.2
Formula (2):


0
0
1
2 1 I
I
n
+
= 0,2
0,3
Formula (3): ( )
 

0 0
0
1 1
2 1
1
1
2 1
2 1
I I
I
n n n
+
− = −
+
= − − =  0,1
3.3 Answer: «no» 0,2 0,2
3.4 Equation (4): ( ) 2 2
0 2 1
dn n
I n
dt


= − + − 0,2 0,2
3.5
Formula (5):





0
0
0
0
2
1 1 I
I
I
I
n
+
=
+
=
0,1
0,2
Formula (6): ( )


0
0
2 2 0 2
1
1
1
I
I
n n n n n
+
−
= − − = − =  0,1
3.6 Inequality (7): 1 0   I 0,3 0,3
3.7
Formula (5) is again used 0,1
0,5 Formula (8):


0
0
2
1 I
I
n n
+
= =  0,1
Inequality (9): 0 0   I 0,3
3.8
Formula (10): ( ) 1 out G dN I Sdt dN  = − =− 0,3
1,5
Formula (11):
r
c
Sl
N
IG
2
1
= 0,5
Formula (15):
( )
2
1
rl
T
c 
=
−
0,4
Numerical value: 9
3,00 10 T s −
=  0,3
3.9
Formula (16): Sldt n I Vdt n I dN E G E G     2 2 = = 0,6
1,5 Formula (18): E c
K
r
 
= 0,5
Numerical value: 10 1
5,72 10 K s−
=  0,4
3.10
Equation (19):
1 G
G G
dI
KnI I
dt T
= − 0,2
0,5
Equation (20): ( ) n I n n I
dt
dn
E G A 

 2
1
1 0 − − − = 0,3
3.11
Derivative should be positive; 0,1
0,5 Formula (21):
1
th n
KT
= 0,2
Numerical value: 3
5,83 10 th n −
=  0,2
3.12 The intensity of the laser light flux: 0 G I = 0,1 1,0V International Zhautykov Olympiad/Theoretical Competition Page 12/12
Formula (22):
( ) 0,
1
th th
th
A th A
n n
I
n  
= 
−
0,3
Numerical value: 21 2 1
0, 3,58 10 th I cm s − −
=   0,3
Formula (23):
hc


= 0,1
Formula (24): 0, E th I I  = 0,1
Numerical value: 3
2
1,37 10 E
W
I
cm
=  0,1
3.13
Derivatives turn zero 0,1
2,0
Formula (25):
KT
n
1
= 0,2
Formula (26):
n
n I
I
E
A
G



2
1
0 −
= 0,2
Formula (27): 0 0,th
A
n
I I  

= = 0,2
Formula (28):
1
1
2 2
A
A
G
E E
n
n
I
n
 
  
 
−
−
= =
0,3
Formula (30):
1
2 E
E


−
= 0,2
Numerical value: 22 2 1
5,41 10 E см с − −
=   0,3
Drawing graph: axis are named and ticked 0,1
Drawing graph: straight line 0,2
Drawing graph: straight line passes through 1 0,2
3.14
Formula (31): 0, A th A N I Sl    = 0,4
1,0
Formula (32): ( )S E NE 1 − =  0,3
Formula (34):

 1 −
= f 0,3
Total 10,0
