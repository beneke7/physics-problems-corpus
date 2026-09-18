---
id: solution-document-izho-2019-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2019_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [izho-2019-t-q1, izho-2019-t-q2, izho-2019-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2019_T_S.pdf."
---

V International Zhautykov Olympiad/Theoretical Competition                               Page 1/12


        SOLUTIONS TO THE PROBLEMS OF THE THEORETICAL
                         COMPETITION
                           Attention. Points in grading are not divided!
                                      Problem 1 (10.0 points)
                                     Problem 1A (4.0 points)
      Since the thread is inextensible and under stress, then the speed of the puck is always
perpendicular to the thread. Therefore, the tension force of the thread does not perform any work on
the puck and its speed remains constant by modulus
                𝑣 = 𝑐𝑜𝑛𝑠𝑡.                                                                      (1)
      The puck moves along its trajectory with the curvature radius equal to the length 𝑙 of the
unwound thread, therefore, the condition for the thread to be torn up is found from Newton's second
law as
                          𝑣2
                𝑇=𝑚 𝑙.                                                                              (2)
       The length of the thread changes as a result of winding on the cylinder according to
                𝑑𝑙 = −𝑅𝑑𝛼,                                                                          (3)
where
                𝑑𝛼 = 𝜔𝑑𝑡,                                                                           (4)
and the angular velocity of the thread rotation is obtained as follows
                      𝑣
                𝜔 = 𝑙.                                                                              (5)
It follows from equations (3)-(5) that
                𝑙𝑑𝑙 = −𝑅𝑣𝑑𝑡,                                                                        (6)
and its integration entails
                𝑙 2 − 𝑙02 = −2𝑅𝑣𝑡.                                                                  (7)
       Substituting formula (1) into (7), the time moment sought is finally found as
                                2
                           𝑚𝑣2
                      𝑙02 −(   )      𝑙2 𝑇 2 −𝑚2 𝑣 4
                            𝑇
                 𝑡=                 = 0 2𝑅𝑣𝑇 2 .                                                    (8)
                          2𝑅𝑣


                                            Content                                      Points
The puck speed remains unchanged                                                           1
                                                    𝑣2
                                           𝑇=𝑚                                                0.5
                                                     𝑙
                                         𝑙𝑑𝑙 = −𝑅𝑣𝑑𝑡                                           1
                                      𝑙 2 − 𝑙02 = −2𝑅𝑣𝑡                                       0.5
                                           𝑙02 𝑇 2 − 𝑚2 𝑣 4
                                      𝑡=                                                      1
                                                2𝑅𝑣𝑇 2
Total                                                                                         4.0

                                      Problem 1В (3.0 points)
        Possible solution. The power of the heat transfer from the body to the air is proportional to
the difference between the body T and the air Tx temperatures with the factor  , i.e.
                 P =  (T − Tx ) ,                                                              (1)
as a result, the body with the heat capacity С cools down by the temperature dT over time period
 dt , which obeys the heat balance equation
                 CdT = − Pdt .                                                                  (2)
        Equations (1) and (2) with the initial condition T = T0 have a solution
              T (t ) = Tx + (T0 − Tx )e −  t ,                                                     (3)
where  =  / C is a constant.


V International Zhautykov Olympiad/Theoretical Competition                              Page 2/12


        Let the body be cooled from the temperature T0 to the temperature T1 for a certain time
interval, then it follows from (3) that
                 (T1 − T0 ) =  (T0 − Tx ) ,                                        (4)
where  is a constant.
      Over the following same time interval, this difference will also change in  times
              (T2 − T1 ) =  (T1 − Tx ) .                                                        (5)
       Equations (4) and (5) result in the relation
              (T0 − Tx ) = (T1 − Tx )
                                      ,                                                          (6)
              (T1 − T0 ) (T2 − T0 )
which has the following solution
                      T0T2 − T12
               Tx =                  .                                                           (7)
                    (T0 + T2 ) − 2T1
       It is obtained from the graph provided: the initial temperature T0 = 373K , in 10 minutes the
temperature is equal to T1 = 337K , and in 20 minutes it reaches the value of T2 = 319K .
Substituting these data into equation (7), the air temperature is finally calculated as
                Tx = 301K = 28C .                                                             (8)

                                     Content                                            Points
Correct method for determining the air temperature                                       1.5
The air temperature lies in the interval Tx = 27.5 − 28.5C                              1.5
The air temperature lies in the interval Tx = 27.0 − 29.0C                              (1.0)
The air temperature lies in the interval Tx = 26.5 − 29.5C                              (0.5)
Out of the above intervals                                                                 0
Total                                                                                     3.0

                                   Problem 1С (3.0 points)
      Let 𝑅 be the active component of the load (the real part of the impedance), and 𝑋 be the
reactive component of the entire circuit (the imaginary part of the total impedance). Then the
current amplitude is found as
                        𝑈
               𝐼=         2  2
                               .
                    √(𝑟+𝑅) +𝑋
      The average thermal power in the load reads as
                     1             𝑈2𝑅
               𝑃 = 2 𝐼 2 𝑅 = 2[(𝑟+𝑅)2 +𝑋 2 ].
       It is seen that the maximum power is achieved at X = 0, i.e. there should be no phase shift in
the circuit. The remaining expression has a maximum at R = r.
       The phase shift would be zero if a coil was connected in series with the
                       1                         1
capacitor such that 𝜔𝐶 = 𝜔𝐿, and, thus, 𝐿 = 𝜔2𝐶 = 1.00 ∙ 10−2 𝐻𝑛.
       It turns out that the simplest load must consist of the resistor with the resistance
of 2019 Ohms and the coil with the inductance of 1.00 ∙ 10−2 𝐻𝑛.
       The maximum power is obtained as
                          1 𝑈2   𝑈2
               𝑃𝑚𝑎𝑥 = 2 4𝑟 = 8𝑟 = 13.9 mW.

                                         Content                                        Points
The phase shift is zero                                                                   1


V International Zhautykov Olympiad/Theoretical Competition                                 Page 3/12


                              Without justification                                         (0,5)
                                1
The inductance of the coil 𝐿 = 𝜔2𝐶                                                           0,7
Correct numerical value 𝐿 = 10−2 Hn                                                          0,3
Maximum power at R = r                                                                       0,5
                                            𝑈2
The maximum power itself 𝑃𝑚𝑎𝑥 = 8𝑟                                                           0,3
Correct numerical value 𝑃𝑚𝑎𝑥 = 14 mW                                                         0,2
Total                                                                                        3,0

                Problem 2. Conductors in an electric field (10,0 points)
                                  Conductive ball and point charge
2.1 The electric potential of the point-like charge 𝑞 is equal to
                                    𝑞
                      𝜑1 =              2   2
                                              ,                                                     (1)
                             4𝜋𝜀0 √(𝑙−𝑥) +𝑦
whereas the electric potential of the fictitious point-like charge 𝑄 is found to be
                                    𝑄
                      𝜑2 =               2   2
                                               .                                                    (2)
                             4𝜋𝜀0 √(𝑥−𝑎) +𝑦
According to the principle of superposition, the full potential is just a sum of equations (1) and (2)
                                              𝑞                   𝑄
                      𝜑 = 𝜑1 + 𝜑2 =               2   2
                                                        +             2   2
                                                                            .                       (3)
                                                 4𝜋𝜀0 √(𝑙−𝑥) +𝑦    4𝜋𝜀0 √(𝑥−𝑎) +𝑦
2.2 The equation of the circle corresponding to the surface of the ball is written as
                      𝑥 2 + 𝑦 2 = 𝑅2.                                                               (4)
Eliminating 𝑦 with the help of relation (4) and substituting it into formula (3) yield
                                   𝑞                 𝑄
                      𝜑=        √𝑙2      2
                                           +      √𝑎2       2
                                                              .                                     (5)
                            4𝜋𝜀0       −2𝑙𝑥+𝑅            4𝜋𝜀0   −2𝑎𝑥+𝑅
2.3 The potential of the ball is zero, since it is grounded, i.e.
                       𝜑 = 0.                                                                       (6)
       Equating expression (5) to zero, it can be rewritten in the form
                       𝑄         √𝑎2 −2𝑎𝑥+𝑅 2
                         = − √𝑙2                     = 𝛽 = 𝑐𝑜𝑛𝑠𝑡 < 0.                               (7)
                       𝑞              −2𝑙𝑥+𝑅 2
        Raising equation (7) in the square, one gets the following equation
                        2𝑥(𝑙𝛽 2 − 𝑎) + 𝑎2 + 𝑅 2 − 𝛽 2 (𝑙 2 + 𝑅 2 ) = 0.                     (8)
        Equation (8) should be satisfied for all 𝑥 ∈ (−𝑅, 𝑅), and this is possible only if the
coefficient at the linear term 𝑥 and the free term are separately equal to zero, i.e.
                        𝑙𝛽 2 − 𝑎 = 0,                                                       (9)
                        𝑎2 + 𝑅 2 − 𝛽 2 (𝑙 2 + 𝑅 2 ) = 0.                                    (10)
        Solving the set of equations (9) and (10), the following two solutions are obtained
                        𝑎 = 𝑙, 𝛽 = −1,                                                      (11)
                            𝑅2                   𝑅
                      𝑎 = 𝑙 , 𝛽 = − 𝑙.                                                              (12)
       Only solution (12) is nonzero, so we finally get
                               𝑅
                      𝑄 = −𝑞 𝑙 ,                                                                    (13)
                            𝑅2
                      𝑎= 𝑙.                                                                         (14)
2.4 The force acting on the point-like charge reads as
                                   𝑞 2 𝑅𝑙
                       𝐹 = 4𝜋𝜀 (𝑙2 −𝑅2 )2,                                                          (15)
                                  0
and, therefore, the work sought is found by integrating as
                              ∞                      𝑞2 𝑅
                       𝐴 = ∫𝑙 𝐹𝑑𝑙 = 8𝜋𝜀 (𝑙2 −𝑅2 ).                                                  (16)
                                                     0
2.5 Let the point-like charge be slowly moved from the initial position to infinity such that the
resulting current strength in the ball is negligibly small and the release of Joule heat can be omitted.
Let 𝑊𝑞 be the energy of the point-like charge 𝑞, 𝑊𝑄 be the sought interaction energy of induced


V International Zhautykov Olympiad/Theoretical Competition                                 Page 4/12


charges, 𝑊𝑄𝑞 be the interaction energy of the point charge 𝑞 with the induced charges, which is
simply obtained as
                                              𝑞2 𝑅
                       𝑊𝑄𝑞 = − 4𝜋𝜀 (𝑙2 −𝑅2).                                                        (17)
                                           0
       When the charge is removed to infinity, the law of energy conservation must be satisfied,
which in this case has the form
                       𝑊𝑞 + 𝑊𝑄 + 𝑊𝑄𝑞 + 𝐴 = 𝑊𝑞 .                                            (18)
       The set of equations (16)-(18) finally provides the following result
                                       𝑞2 𝑅
                       𝑊𝑄 = 8𝜋𝜀 (𝑙2 −𝑅2).                                                           (19)
                                       0
                               Conductive ball in a uniform electric field
2.6 To find the electric field inside a uniformly charged ball, the Gauss theorem is written for a
spherical volume of radius 𝑟 < 𝑅. The charge inside this volume is easily derived as
                             4
                        𝑞 = 𝜋𝑟 3 𝜌,                                                           (20)
                             3
and the electric field flux is found to be
                        Ф𝐸 = 4𝜋𝑟 2 𝐸.                                                         (21)
       According to the Gauss theorem
                                𝑞
                        Ф𝐸 = 𝜀 ,                                                              (22)
                               0
which ultimately entails
                      ⃗𝐸 = 𝜌 𝑟.                                                                     (23)
                          3𝜀   0
The last expression takes into account that the electric field strength vector is collinear to the vector
𝑟.
2.7 Now consider the two fictitious balls with the bulk charge densities of opposite signs and
evaluate the electric field in the domain of their intersection. Take an arbitrary point inside this
domain and draw the radii of the vectors from the centers of the balls, denoting them 𝑟⃗⃗⃗+ and 𝑟⃗⃗⃗− ,
respectively. Then, applying formula (23) for each ball results in
                              𝜌
                       ⃗⃗⃗⃗
                       𝐸+ = 3𝜀 𝑟⃗⃗⃗+ ,                                                               (24)
                                   0
                               𝜌
                       ⃗⃗⃗⃗
                       𝐸− = − 3𝜀 𝑟⃗⃗⃗− .                                                            (25)
                                       0
       The net electric field is found with the help of the superposition principle as
                             𝜌                    𝜌
                      𝐸⃗ = 3𝜀 (𝑟⃗⃗⃗+ − 𝑟⃗⃗⃗− ) = 3𝜀 𝑎,                                              (26)
                               0                     0
where 𝑎 stands for the vector, drawn from the center of the negatively charged ball to the center of
the positively charged ball.
2.8 The field strength inside the conducting ball must be zero. The induced charges create,
according to formula (26), a uniform electric field, which must completely compensate for the
external electric field, whence we obtain that
                        𝜌𝑎 = 3𝜀0 𝐸0 .                                                          (27)
       The charges of the fictitious balls are fully compensated with the exception of a thin layer
near their surfaces, which can be considered a surface charge. The layer thickness 𝛿 depends on the
angle 𝜃 and, due to the smallness of 𝑎, is equal to
                        𝛿 = 𝑎 cos 𝜃.                                                           (28)
       Hence, the magnitude of the surface charge near the angle 𝜃 is equal to
                            𝜌𝑉    𝜌𝑆𝛿
                        𝜎 = 𝑆 = 𝑆 = 𝜌𝛿.                                                        (29)
       It immediately follows from equations (27)-(29) that
                        𝜎 = 3𝜀0 𝐸0 cos 𝜃.                                                      (30)
2.9 Consider a thin cylinder near the surface of the conductor and apply the Gauss theorem to it.
Since the field inside the conductor is absent, and is directed normally just outside of it, then
according to the Gauss theorem


V International Zhautykov Olympiad/Theoretical Competition                                 Page 5/12

                              𝜎𝑆
                       𝐸𝑆 = 𝜀 ,                                                                    (31)
                               0
which yields
                        𝐸 = 3𝐸0 cos 𝜃.                                                             (32)
                                  Conductive ball and charged ring
2.10 The conducting ball is very small, so that the electric field of the ring 𝐸 in its vicinity can be
considered almost uniform. It has been shown in the previous part of this problem that its
polarization can be represented as two fictitious balls of opposite charge. These two balls behave in
an external field as a dipole with the moment
                        𝑝 = 𝑞𝑎,                                                                    (33)
where
                              4
                        𝑞 = 𝜌 3 𝜋𝑟 3.                                                              (34)
       Using (27), formulas (33) and (34) produce
                        𝑝 = 4𝜋𝑟 3 𝜀0 𝐸⃗ ,                                                          (35)
       Let us evaluate the electric field of the ring 𝐸 in the vicinity of the ball as a function of its
distance 𝑧 to the center. Obviously, the ring field is directed along the needle. Dividing the ring into
small parts that carry an electric charge ∆𝑞𝑖 the projection of their field on the direction of the
needle has the form
                                 ∆𝑞𝑖 cos 𝛼
                        ∆𝐸𝑧 = 4𝜋𝜀 (𝑧   2 +𝑅2 )2 .
                                                                                                   (36)
                                       0
        Taking into account
                                    𝑧
                      cos 𝛼 = (𝑧 2 +𝑅2 )1/2                                                        (37)
and summing over all elements of the ring, one gets
                                   𝑞𝑧
                     𝐸(𝑧) = 4𝜋𝜀 (𝑧 2 +𝑅2)3/2 .                                                     (38)
                                           0
        The force acting on the dipole is obtained as
                                                       𝑑𝐸      𝑑𝐸
                       𝐹 = 𝑞𝐸(𝑧 + 𝑎) − 𝑞𝐸(𝑧) = 𝑞𝑎 𝑑𝑧 = 𝑝 𝑑𝑧 .                                      (39)
        Substituting formulas (35) and (38) into (39) gives rise to
                            𝑞 2 𝑟 3 𝑧(𝑅 2 −2𝑧 2 )
                       𝐹 = 4𝜋𝜀 (𝑧 2 +𝑅2 )4 .                                                       (40)
                                   0
       It follows from expression (40) that there are three equilibrium positions, which are
determined by the points
                       𝑧1 = 0,                                                                  (41)
                                𝑅
                       𝑧2,3 = ± .                                                               (42)
                                √2
       A simple analysis proves that the equilibrium position (41) is unstable, and the symmetric
positions (42) are both stable.
       Near the position of the stable equilibrium, expression (40) for the force simplifies to
                                   8𝑞 2 𝑟 3 𝑥
                        𝐹 = − 81𝜋𝜀 𝑅6,                                                             (43)
                                            0
where
                                    𝑅
                       𝑥 =𝑧−                ≪ 𝑅.                                                   (44)
                                   √2
        Newton's equation for the motion of the ball along the needle at small deviations 𝑥 has the
form
                                8𝑞 2 𝑟 3
                       𝑚𝑥̈ + 81𝜋𝜀 𝑅6 𝑥 = 0,                                                        (45)
                                        0
which is a harmonic equation with the frequency
                                   8𝑞 2 𝑟 3
                       𝜔 = √81𝜋𝜀 𝑚𝑅6.                                                              (46)
                                        0
2.11 There is no need to integrate formula (40). In the initial position, the conducting ball is not
polarized and in the final state it is also not polarized, since at zero and at infinity separations the


V International Zhautykov Olympiad/Theoretical Competition                                                   Page 6/12


electric field of the ring vanishes. Therefore, it is immediately inferred from the law of energy
conservation that
                         𝐴 = 0.                                                                     (47)
        It is natural that integrating expression (40) from zero to infinity gives the same answer.

 Part                                                        Content                                      Points
                                                   𝑞
         Formula (1) 𝜑1 =                                                                                  0,2
                                4𝜋𝜀0 √(𝑙−𝑥)2 +𝑦 2
                                        𝑄
  2.1    Formula (2) 𝜑2 =                                                                                  0,2      0,6
                                4𝜋𝜀0 √(𝑥−𝑎)2 +𝑦 2
                                                                        𝑞                    𝑄
         Formula (3) 𝜑 = 𝜑1 + 𝜑2 =                                                +                        0,2
                                                            4𝜋𝜀0 √(𝑙−𝑥)2 +𝑦 2         4𝜋𝜀0 √(𝑥−𝑎)2 +𝑦 2
                           2       2                2
         Formula (4) 𝑥 + 𝑦 = 𝑅                                                                             0,2
  2.2                         𝑞                                               𝑄                                     0,4
         Formula (5) 𝜑 =   √𝑙2
                                                                   +                                       0,2
                               4𝜋𝜀0             −2𝑙𝑥+𝑅 2               4𝜋𝜀0 √𝑎2 −2𝑎𝑥+𝑅 2
         Formula (6) 𝜑 = 0                                                                                 0,2
                       𝑄        √𝑎2 −2𝑎𝑥+𝑅 2
         Formula (7) 𝑞 = − √𝑙2                                 = 𝛽 = 𝑐𝑜𝑛𝑠𝑡 < 0                             0,2
                                           −2𝑙𝑥+𝑅 2
         Formula (8) 2𝑥(𝑙𝛽 2 − 𝑎) + 𝑎 + 𝑅 2 − 𝛽 2 (𝑙 2 + 𝑅 2 ) = 0
                                                   2
                                                                                                           0,2
         Formula (9) 𝑙𝛽 2 − 𝑎 = 0                                                                          0,2
  2.3    Formula (10) 𝑎2 + 𝑅 2 − 𝛽 2 (𝑙 2 + 𝑅 2 ) = 0                                                      0,2      1,8
         Formula (11) 𝑎 = 𝑙, 𝛽 = −1                                                                        0,2
                               𝑅2                              𝑅
         Formula (12) 𝑎 = 𝑙 , 𝛽 = − 𝑙                                                                      0,2
                                           𝑅
         Formula (13) 𝑄 = −𝑞 𝑙                                                                             0,2
                               𝑅2
         Formula (14) 𝑎 = 𝑙                                                                                0,2
                                           𝑞 2 𝑅𝑙
         Formula (15) 𝐹 = 4𝜋𝜀 (𝑙2 −𝑅2 )2                                                                   0,2
                                        0
  2.4                              ∞                               𝑞2 𝑅
                                                                                                                    0,4
         Formula (16) 𝐴 = ∫𝑙 𝐹𝑑𝑙 = 8𝜋𝜀 (𝑙2 −𝑅2 )                                                           0,2
                                                                   0
                                                        𝑞2 𝑅
         Formula (17) 𝑊𝑄𝑞 = − 4𝜋𝜀 (𝑙2 −𝑅2 )                                                                0,2
                                                        0

  2.5    Formula (18) 𝑊𝑞 + 𝑊𝑄 + 𝑊𝑄𝑞 + 𝐴 = 𝑊𝑞                                                               0,1      0,6
                                                𝑞2 𝑅
         Formula (19) 𝑊𝑄 = 8𝜋𝜀 (𝑙2 −𝑅2 )                                                                   0,3
                                            0
                               4
         Formula (20) 𝑞 = 3 𝜋𝑟 3 𝜌                                                                         0,1
                                                2
         Formula (21) Ф𝐸 = 4𝜋𝑟 𝐸                                                                           0,1
  2.6                      𝑞                                                                                        0,4
         Formula (22) Ф𝐸 = 𝜀                                                                               0,1
                                       0
                           𝜌
         Formula (23) 𝐸⃗ =   𝑟                                                                             0,1
                                3𝜀0
                                  𝜌
                      ⃗⃗⃗⃗+ =
         Formula (24) 𝐸          𝑟⃗⃗⃗                                                                      0,1
                              3𝜀 +      0
                                            𝜌
  2.7                 ⃗⃗⃗⃗− = − 𝑟⃗⃗⃗−
         Formula (25) 𝐸                                                                                    0,1      0,4
                               3𝜀              0
                                   𝜌                                   𝜌
         Formula (26) ⃗𝐸 = 3𝜀 (𝑟⃗⃗⃗+ − 𝑟⃗⃗⃗− ) = 3𝜀 𝑎                                                      0,2
                                    0                                     0
         Formula (27) 𝜌𝑎 = 3𝜀0 𝐸0                                                                          0,2
         Formula (28) 𝛿 = 𝑎 cos 𝜃                                                                          0,2
  2.8                     𝜌𝑉    𝜌𝑆𝛿
         Formula (29) 𝜎 = 𝑆 = 𝑆 = 𝜌𝛿                                                                       0,2      0,8
         Formula (30) 𝜎 = 3𝜀0 𝐸0 cos 𝜃                                                                     0,2
                                   𝜎𝑆
  2.9    Formula (31) 𝐸𝑆 = 𝜀                                                                               0,2      0,4
                                       0


V International Zhautykov Olympiad/Theoretical Competition                               Page 7/12


         Formula (32) 𝐸 = 3𝐸0 cos 𝜃                                                    0,2
         Formula (33) 𝑝 = 𝑞𝑎                                                           0,4
                            4
         Formula (34) 𝑞 = 𝜌 3 𝜋𝑟 3                                                     0,2
         Formula (35) 𝑝 = 4𝜋𝑟 3 𝜀0 ⃗𝐸                                                  0,4
                                      ∆𝑞𝑖 cos 𝛼
         Formula (36) ∆𝐸𝑧 = 4𝜋𝜀 (𝑧 2+𝑅2)2                                              0,2
                                       0
                                               𝑧
         Formula (37) cos 𝛼 = (𝑧 2 +𝑅2 )1/2                                            0,2
                                                   𝑞𝑧
         Formula (38) 𝐸(𝑧) = 4𝜋𝜀 (𝑧 2 +𝑅2 )3/2                                         0,4
                                           0
                                                        𝑑𝐸     𝑑𝐸
         Formula (39) 𝐹 = 𝑞𝐸(𝑧 + 𝑎) − 𝑞𝐸(𝑧) = 𝑞𝑎 𝑑𝑧 = 𝑝 𝑑𝑧                             0,4
                             𝑞 2 𝑟 3 𝑧(𝑅 2 −2𝑧 2 )
 2.10    Formula (40) 𝐹 = 4𝜋𝜀 (𝑧 2 +𝑅2 )4                                              0,2       3,8
                                  0
         Formula (41) 𝑧1 = 0                                                           0,2
                               𝑅
         Formula (42) 𝑧2,3 = ±                                                         0,2
                                  √2
                                 8𝑞 2 𝑟 3 𝑥
         Formula (43) 𝐹 = − 81𝜋𝜀 𝑅6                                                    0,4
                                           0
                                    𝑅
         Formula (44) 𝑥 = 𝑧 −              ≪ 𝑅.                                        0,2
                                   √2
                             8𝑞 2 𝑟 3
         Formula (45) 𝑥̈ + 81𝜋𝜀 𝑅6 𝑥 = 0                                               0,2
                                  0
                                   8𝑞 2 𝑟 3
         Formula (46) 𝜔 = √81𝜋𝜀 𝑚𝑅6                                                    0,2
                                        0
         Formula (47) 𝐴 = 0                                                            0.4
 2.11    Formal integral of formula (40) without the correct answer                              0,4
                                                                                      (0.1)
Total                                                                                            10,0

                                 Problem 3. Laser (10.0 points)
                              Population inversion: two-level system
3.1 The figure on the right shows a diagram of possible transitions and their
probabilities. If the population of the excited state is equal to n1 , then the
population of the ground state is equal to (1 − n1 ) , since the molecule can only
be in one of two states.
        The balance equation describing the change in the population directly
follows from the drawn diagram as
                 dn1      1
                     = − n1 − I 0 n1 + I 0 (1 − n1 ) .                                          (1)
                  dt     
3.2 In the stationary mode dn1 / dt = 0 , then it follows from equation (1) that the population of the
excited state is given by the formula
                         I 0
                 n1 =             .                                                               (2)
                      1 + 2 I 0
Accordingly, the difference in the populations of the excited and ground states is equal to
                                            I 0
                 n = n1 − (1 − n1 ) = 2
                                                                 1
                                                     −1 = −             .                         (3)
                                         1 + 2 I 0        1 + 2 I 0
3.3 Even with the intensity of the pumping light flux tending to infinity, the population inversion in
the two-level system cannot be achieved, therefore, the laser light flux cannot be amplified in this
system.


V International Zhautykov Olympiad/Theoretical Competition                               Page 8/12



                                Population inversion: three-level system
3.4 In this system, there are no forced transitions "down", so the balance equation
for the population of state 2 is written as:
                 dn2     n
                     = − 2 + I 0 (1 − n2 ) .                                (4)
                  dt      
Here, it is taken into account that the molecule can only be in two states: the
excited state 2, or the ground state 0.
3.5 In the stationary mode dn2 / dt = 0 , therefore, as it follows from equation (4),
the population of the excited state is derived as
                         I 0       I 
                 n2 =            = 0          .                                                  (5)
                       1          1 + I 0
                         + I 0
                     
        The difference between the populations of the excited and ground states is found by the
formula
                                                I  − 1
                n = n2 − n0 = n2 − (1 − n2 ) = 0         .                                       (6)
                                                1 + I 0
3.6 Laser light amplification is possible when the population inversion is reached, i.e. n  0 . It
follows from formula (6) that this is possible when
                I 0  1 .                                                                       (7)
                                Population inversion: four-level system
3.7 In the four-level system, the balance equation for the population of state 2
coincides with equation (4), and the stationary value of the population of this state
is also described by formula (5). The essential difference of this system is that from
state 2 the transition is undertaken to intermediate state 3, whose population is
practically equal to 0. Therefore, in this system the population difference is equal to
                              I 
                n = n2 = 0           ,                                     (8)
                            1 + I 0
and the population inversion between states 2 and 3 is achieved with practically arbitrary value of
the parameter
                I 0  0 .                                                                       (9)
                                                Resonator
3.8 The change in the number dN of photons in the resonator is due only to their output through
the translucent mirror. For a short period of time dt , the number of photons that leave the resonator
through the mirror is found to be
                dNout = (1 −  ) IG Sdt = −dN .                                                   (10)
where S stands for the cross section area of the resonator.
       The intensity of the laser light flux I G can be expressed in terms of the average density of
         N                                                      c
photons      in the resonator and the speed of their propagation in the form
         Sl                                                     r
                      1N c
                IG =         .                                                                  (11)
                      2 Sl r
       The factor 1/ 2 takes into account that the laser light in the resonator propagates in two
opposite directions. Expressing the number of photons in the resonator through the intensity of the
generation flux
                     2rSl
                N=        IG                                                                    (12)
                       c


V International Zhautykov Olympiad/Theoretical Competition                             Page 9/12


and substituting it into equation (10), one gets
                               c                                  c
                dI G = −            (1 −  ) I G Sdt = − (1 −  ) IG dt .                       (13)
                             2rSl                                2rl
        This equation has the required form
                dI G          c(1 −  )            1
                        =−               IG = − IG ,                                            (14)
                  dt             2rl              T
where the photon lifetime in the resonator is determined by the formula
                           2rl
                T=                  = 3, 00 10−9 s .                                           (15)
                       c (1 −  )
3.9 Consider the change in the number of photons in the presence of the stimulated emission and
the absence of losses through the mirror. In accordance with the definition of the stimulated
emission cross section, the number of generated photons can be described by the equation
                dN = 2 I G E nVdt = 2 I G E nSldt .                                         (16)
Here 𝑛𝛾𝑉 denotes the number of dye molecules in the resonator being in the excited state, and
V = Sl is the resonator volume.
        Substituting the expression for the number of photons in the resonator (12) into the last
equation, the desired equation is finally obtained
                dI G  c E
                       =           nI G = KnI G ,                                               (17)
                 dt           r
with the resonator gain
                        c E
                K=               = 5, 72 1010 s −1 .                                           (18)
                           r
                                             Stationary generation mode
3.10 To describe the dynamics of the intensity of the laser light flux, it is necessary to combine
equations (14) and (17):
                dI G                  1
                       = KnI G − I G .                                                          (19)
                 dt                  T
        The population of the excited state is described by the balance equation
                      = I 0 A (1 − n ) − n − 2 I G E n ,
                dn                          1
                                                                                                (20)
                dt                         
which takes into account the absorption of the pumping light flux, spontaneous and stimulated
emissions from the excited state.
3.11 To initiate the laser light amplification, it is necessary that the derivative in equation (19)
should be greater than zero, therefore the threshold value of the population of the excited state is
equal to
                          1
                nth =          = 5,83 10−3 1 .                                                 (21)
                        KT
3.12 To derive the threshold value of the intensity of the pumping light flux, we make use of
equation (20) in the absence of the laser light flux I G = 0 , whence we get
                                 nth            n
                I 0,th =                    th = 3,58 1021 cm−2  s −1 .                      (22)
                           A (1 − nth )  A
        To find the pumping energy flux, the calculated flux (22) must be multiplied by the energy
of one quantum
                       hc
                 = = 3,83 10−19 J ,                                                           (23)
                   
therefore, the pumping energy intensity is obtained as


V International Zhautykov Olympiad/Theoretical Competition                                Page 10/12


                                               W
               I E =  I 0,th = 1,37 103          .                                          (24)
                                              cm 2
3.13 In the stationary mode, the time derivatives in equations (19) and (20) vanish. Equation (19)
then yields
                       1
                n=           ,                                                                (25)
                      KT
and it is found from equation (20) that
                                   1
                       I 0 A − n
                IG =                .                                                        (26)
                            2 E n
        Expressing the intensity of the pumping light flux through its threshold value
                                      n
                I 0 =  I 0,th =                                                             (27)
                                     A
and substituting it into formula (23), one obtains
                            n           1
                                A − n
                          A                  −1
                IG =                        =         .                                       (28)
                               2 E n          2 E
        At the output of the resonator, the laser light intensity is equal to
                I = (1 −  ) I G =
                                      (1 −  ) ( − 1) = E  − 1 ,
                                                            ( )                               (29)
                                        2 E
in which the constant factor is introduced as
                      1− 
                E=              = 5, 411022 cm −2  s −1 .                                   (30)
                      2 E
        The graph of relation (29) is a straight line, as shown in the figure below.




3.14 On the one hand, the number of light quanta absorbed in the resonator per unit time is
calculated by the formula
                N A =  I 0,th A Sl .                                                (31)
       On the other hand, the number of quanta leaving the resonator per unit time is
               N E = E( − 1)S .                                                                 (32)
       Thus, the quantum output turns out to be equal
                   N        E ( − 1)
               f = E =                     .                                                     (33)
                    N A (I 0 )tr  A (l )
       The substitution of all parameters included in this formula leads to the final result
                    −1
               f =       .                                                                       (34)
                      


V International Zhautykov Olympiad/Theoretical Competition                              Page 11/12




 Part                                        Content                                 Points
                        dn1       1
  3.1    Equation (1):       = − n1 − I 0 n1 + I 0 (1 − n1 )                        0,3      0,3
                         dt       
                                I 0
         Formula (2): n1 =                                                            0,2
                             1 + 2 I 0
  3.2                                                                                          0,3
                                                      I 0
         Formula (3): n = n1 − (1 − n1 ) = 2
                                                                            1
                                                                −1 = −                0,1
                                                   1 + 2 I 0         1 + 2 I 0
  3.3    Answer: «no»                                                                 0,2      0,2
                        dn         n
  3.4    Equation (4): 2 = − 2 + I 0 (1 − n2 )                                       0,2      0,2
                         dt        
                                I 0          I 
         Formula (5): n2 =               = 0
                              1             1 + I 0                                 0,1
                                + I 0
  3.5                                                                                         0,2
                                                              I  − 1
         Formula (6): n = n2 − n0 = n2 − (1 − n2 ) = 0                               0,1
                                                             1 + I 0
  3.6    Inequality (7): I 0  1                                                    0,3      0,3
         Formula (5) is again used                                                    0,1
                                       I 
  3.7    Formula (8): n = n2 = 0                                                     0,1      0,5
                                     1 + I 0
         Inequality (9): I 0  0                                                    0,3
         Formula (10): dNout = (1 −  ) IG Sdt = −dN                                  0,3
                            1N c
         Formula (11): I G =                                                          0,5
                            2 Sl r
  3.8                                                                                          1,5
                              2rl
         Formula (15): T =                                                            0,4
                           c (1 −  )
         Numerical value: T = 3,00 10−9 s                                            0,3
         Formula (16): dN = 2 I G E nVdt = 2 I G E nSldt                          0,6
                                 c E
  3.9    Formula (18): K =                                                            0,5      1,5
                               r
         Numerical value: K = 5, 72 1010 s −1                                        0,4
                        dI               1
         Equation (19): G = KnI G − I G                                               0,2
                         dt              T
 3.10                                                                                          0,5
                            = I 0 A (1 − n ) − n − 2 I G E n
                        dn                     1
         Equation (20):                                                               0,3
                        dt                     
         Derivative should be positive;                                               0,1
                              1
 3.11    Formula (21): nth =                                                          0,2      0,5
                             KT
         Numerical value: nth = 5,83 10−3                                            0,2
 3.12    The intensity of the laser light flux: I G = 0                               0,1      1,0


V International Zhautykov Olympiad/Theoretical Competition    Page 12/12


                                        nth        n
         Formula (22): I 0,th =                   th        0,3
                                   A (1 − nth )  A
         Numerical value: I 0,th = 3,58 1021 cm−2  s −1    0,3
                              hc
         Formula (23):  =                                   0,1
                            
         Formula (24): I E =  I 0,th                        0,1
                                                    W
         Numerical value: I E = 1,37 103                    0,1
                                                   cm 2
         Derivatives turn zero                               0,1
                             1
         Formula (25): n =                                   0,2
                            KT
                                          1
                                  I 0 A − n
         Formula (26): I G =                                0,2
                                      2 E n
                                               n
         Formula (27): I 0 =  I 0,th =                     0,2
                                         A
 3.13                           n          1                         2,0
                                   A − n
                                A            −1          0,3
         Formula (28): I G =                 =
                                   2 E n      2 E
                             1− 
         Formula (30): E =                                   0,2
                             2 E
         Numerical value: E = 5, 411022 см−2  с −1         0,3
         Drawing graph: axis are named and ticked            0,1
         Drawing graph: straight line                        0,2
         Drawing graph: straight line passes through 1       0,2
         Formula (31): N A =  I 0,th A Sl                 0,4
         Formula (32): N E = E( − 1)S                       0,3
 3.14                                                                1,0
                            −1
         Formula (34): f =                                   0,3
                                  
Total                                                               10,0
