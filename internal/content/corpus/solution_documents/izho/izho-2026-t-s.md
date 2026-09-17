---
id: solution-document-izho-2026-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2026_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [izho-2026-t-q1, izho-2026-t-q2, izho-2026-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2026_T_S.pdf."
---

XXII International Zhautykov Olympiad/Theoretical Competition                                                 p. 1/11

      SOLUTIONS TO THE PROBLEMS OF THE THEORETICAL COMPETITION
                   Attention. Points in grading are not divided!
                              Problem 1 (10.0 points)
                             Problem 1.1 (3.0 points)
        Let the 𝑥-axis be directed downwards, and the initial position of the roll's center of mass correspond
to the origin. If the velocity of the roll's center of mass at a given moment in time is 𝑣, then its kinetic energy
is
                       𝑚
                 𝐸𝑘 = 𝐿 (𝐿 − 𝑥)𝑣 2 .                                                                          (1)
        On the other hand, the potential energy of the roll relative to the initial position is equal to
                          𝑚        𝑥2        𝑚
               𝐸𝑝 = − 𝐿 𝑔 2 − 𝐿 𝑔(𝐿 − 𝑥)𝑥.                                                                (2)
       At the initial moment of time the total energy is zero, therefore, according to the conservation law we
get
              𝐸𝑘 + 𝐸𝑝 = 0,                                                                                    (3)
from which the dependence of the speed of the roll center of mass on the coordinate is given by
                                              𝑥2
               𝑣 2 (𝑥) = 𝑔 [𝑥 + 2(𝐿−𝑥)].                                                                      (4)
       The acceleration of the roll is determined by the expression
                       𝑑𝑣      𝑑𝑣
               𝑎(𝑥) = 𝑑𝑡 = 𝑣 𝑑𝑥,                                                                              (5)
which after substitution (4) gives the following dependence
                          𝑔              𝐿2
               𝑎(𝑥) = 4 [1 + (𝐿−𝑥)2 ].                                                                        (6)
        The total momentum of the roll is directed along the 𝑥-axis and is equal to
                    𝑚
                𝑝 = 𝐿 (𝐿 − 𝑥)𝑣,                                                                           (7)
and therefore the change in momentum over time takes the form
                𝑑𝑝      𝑚       𝑚
                   = − 𝑣 2 + (𝐿 − 𝑥)𝑎.                                                                    (8)
                𝑑𝑡      𝐿       𝐿
        According to the conditions of the problem, the force acting on the platform from the roll is equal to
the force of gravity, which means that the total external force on the roll itself is zero, and we obtain
                𝑑𝑝
                   = 0.                                                                                   (9)
                𝑑𝑡
        Solving together (4), (6), (8) and (9), we derive the quadratic equation
                        𝑥2          1              𝑥2
               𝑥 + 2(𝐿−𝑥) = 2 (𝐿 + 2(𝐿−𝑥)),                                                                   (10)
whose positive root equals to
                        3−√3
              𝑥0 = 3 𝐿 = 4.23 m.                                                                              (11)
       Substituting into (4) and (6) provides the final answers
                             √𝑔𝐿
               𝑣(𝑥0 ) = 4           = 7.52 m/s,                                                               (12)
                              √3
                                                    2
               𝑎(𝑥0 ) = 𝑔 = 9.80 m/s .                                                                        (13)

                                                        Content                                      Points
                     𝑚                   2
 Formula (1): 𝐸𝑘 = 𝐿 (𝐿 − 𝑥)𝑣                                                                         0.2
                         𝑚     𝑥2        𝑚
 Formula (2): 𝐸𝑝 = − 𝐿 𝑔 2 − 𝐿 𝑔(𝐿 − 𝑥)𝑥.                                                              0.2
 Formula (3): 𝐸𝑘 + 𝐸𝑝 = 0                                                                              0.1
                                             𝑥2
 Formula (4): 𝑣 2 (𝑥) = 𝑔 [𝑥 + 2(𝐿−𝑥)]                                                                 0.2
                         𝑑𝑣             𝑑𝑣
 Formula (5): 𝑎(𝑥) = 𝑑𝑡 = 𝑣 𝑑𝑥                                                                         0.2
                         𝑔               𝐿2
 Formula (6): 𝑎(𝑥) = 4 [1 + (𝐿−𝑥)2 ]                                                                   0.2
                    𝑚
 Formula (7): 𝑝 =       (𝐿 − 𝑥)𝑣                                                                       0.2
                    𝐿
XXII International Zhautykov Olympiad/Theoretical Competition                                           p. 2/11

              𝑑𝑝         𝑚          𝑚
 Formula (8): 𝑑𝑡 = − 𝐿 𝑣 2 + 𝐿 (𝐿 − 𝑥)𝑎                                                           0.2
              𝑑𝑝
 Formula (9): 𝑑𝑡 = 0                                                                              0.2
                         𝑥2         1   𝑥2
 Formula (10): 𝑥 + 2(𝐿−𝑥) = 2 (𝐿 + 2(𝐿−𝑥))                                                        0.1
                       3−√3
 Formula (11): 𝑥0 = 3 𝐿                                                                           0.2
 Numerical value in formula (11): 𝑥0 = 4.23 m                                                     0.2
                              √𝑔𝐿
 Formula (12): 𝑣(𝑥0 ) = 4                                                                         0.2
                              √3
 Numerical value in formula (12): 𝑣(𝑥0 ) = 7.52 m/s                                               0.2
 Formula (13): 𝑎(𝑥0 ) = 𝑔                                                                         0.2
 Numerical value in formula (13): 𝑎(𝑥0 ) = 9.80 m/s 2                                             0.2
 Total                                                                                            3.0

                                         Problem 1.2 (4.0 points)
      At the initial moment of time 𝑡 = 0 the capacitor is not charged and the voltage drops across the
connected resistances are the same, that is, they are connected in parallel, therefore
               1    1   1
                 = 𝑅 + 𝑟,                                                                        (1)
              𝑅 0
and the ohmmeter readings are
               𝑅0 = 𝑅(0) = 𝐴 − 𝐵.                                                                       (2)
       At time 𝑡 = ∞ the capacitor is fully charged and no current flows through it, therefore
               𝑅∞ = 𝑟,                                                                                  (3)
and the ohmmeter readings are
               𝑅∞ = 𝑅(∞) = 𝐴,                                                                           (4)
       Solving (1)-(4) together, we obtain
               𝑟 = 100 kΩ,                                                                              (5)
               𝑅 = 150 kΩ.                                                                              (6)
       At any given moment in time, the voltage drop 𝑈𝑟 across the resistance 𝑟 is equal to the voltage drop
𝑈𝑅 across the resistance 𝑅 and the voltage drop 𝑈𝐶 across the capacitor 𝐶, that is,
               𝑈𝑟 = 𝑈𝑅 + 𝑈𝐶 .                                                                           (7)
       On the other side according to Ohm's law we write
               𝑈𝑅 = 𝐼𝑐 𝑅,                                                                               (8)
               𝑈𝑟 = 𝐼𝑟 𝑟,                                                                               (9)
where 𝐼𝑟 denotes the current flowing through the resistor 𝑟, and 𝐼𝑐 designates the current flowing through the
capacitor 𝐶 and the resistance 𝑅.
       The voltage across the capacitor is equal to
                      𝑞
               𝑈𝐶 = 𝐶.                                                                                  (10)
       Note that the capacitor is charged due to the flow of current 𝐼0 generated by the ohmmeter, that is,
               𝐼0 = 𝐼𝑟 + 𝐼𝐶 ,                                                                           (11)
and the current flowing through the capacitor is equal to the derivative of its charge over time
                     𝑑𝑞
               𝐼𝐶 = 𝑑𝑡 .                                                                                (12)
       From (7)-(12) we derive the differential equation for 𝑞
               𝑑𝑞    𝑞        𝑟
                  + 𝜏 = 𝐼0 𝑅+𝑟.                                                                         (13)
               𝑑𝑡    0
whose solution yields the current through the capacitor
                       𝑟
              𝐼𝑐 = 𝐼0 𝑅+𝑟 𝑒 −𝑡/𝜏0 .                                                                    (14)
Here 𝜏0 = 𝐶(𝑅 + 𝑟).
       Thus, the capacitance is found as
                    𝜏0
              𝐶 = 𝑅+𝑟   = 400 𝜇F.                                                                      (15)
       The amount of heat released by the resistor is determined by the Joule-Lenz law and is equal to
XXII International Zhautykov Olympiad/Theoretical Competition                                             p. 3/11

                             ∞               𝐼 2 𝑟 2 𝑅𝜏0
               𝑄 = ∫0 𝐼𝑐2 𝑅𝑑𝑡 = 0                          = 12 mJ.                                       (16)
                                             2(𝑅+𝑟)2
        Note that, in principle, there is no need to consider equations (1)-(4) separately; to find unknown
resistances, it is sufficient to find the dependence 𝑅(𝑡), which is obtained as
                                 𝑈           𝑟2
               𝑅(𝑡) = 𝐼 𝑟 = 𝑟 − 𝑅+𝑟 𝑒 −𝑡/𝜏0 .                                                             (17)
                                 0


                                                           Content                               Points
               1         1       1                                                                0.2
 Formula (1): 𝑅 = 𝑅 + 𝑟
               0
 Formula (2): 𝑅0 = 𝑅(0) = 𝐴 − 𝐵                                                                    0.2
 Formula (3): 𝑅∞ = 𝑟                                                                               0.2
 Formula (4): 𝑅∞ = 𝑅(∞) = 𝐴                                                                        0.2
 Formula (5): 𝑟 = 100 kΩ                                                                           0.2
 Formula (6): 𝑅 = 150 kΩ                                                                           0.2
 Formula (7): 𝑈𝑟 = 𝑈𝑅 + 𝑈𝐶                                                                         0.2
 Formula (8): 𝑈𝑅 = 𝐼𝑐 𝑅                                                                            0.2
 Formula (9): 𝑈𝑟 = 𝐼𝑟 𝑟                                                                            0.2
                     𝑞
 Formula (10): 𝑈𝐶 = 𝐶                                                                              0.2
 Formula (11): 𝐼0 = 𝐼𝑟 + 𝐼𝐶 ,                                                                      0.2
                    𝑑𝑞
 Formula (12): 𝐼𝐶 = 𝑑𝑡                                                                             0.2
                𝑑𝑞           𝑞
 Formula (13): 𝑑𝑡 + 𝜏 = 𝐼0 𝑅+𝑟
                                         𝑟                                                         0.2
                             0
                                     𝑟
 Formula (14): 𝐼𝑐 = 𝐼0 𝑅+𝑟 𝑒 −𝑡/𝜏0                                                                 0.4
                             𝜏
                    0
 Formula (15): 𝐶 = 𝑅+𝑟                                                                             0.2
 Numerical value in equation (15): 𝐶 = 400 𝜇F                                                      0.2
                         𝐼02 𝑟 2 𝑅𝜏0
 Formula (16): 𝑄 = 2(𝑅+𝑟)2                                                                         0.4

 Numerical value in equation (16): 𝑄 = 12 mJ                                                       0.2
 Total                                                                                             4.0

                                                           Problem 1.3 (3.0 points)
       A real image with a smaller angular size 𝜑1 is formed as a result of reflection at the air-glass
boundary on the concave surface of the lens as from a concave mirror with a radius of curvature 𝑟 at a
distance equal to the focal length 𝐹1 of the mirror
               1    2
                  =   ,                                                                          (1)
               𝐹1   𝑟
which means the image is located at a distance from the observer
               𝑎1 = 𝐿 − 𝐹1 .                                                                           (2)
       Let 𝜑0 be the apparent angular size of the street lamp from the lens location. Then the linear size of
the image of the lamp at the focus is
               𝑙1 = 𝜑0 𝐹1 ,                                                                            (3)
and therefore, the angular size of the visible image is found as
                     𝑙
               𝜑1 = 𝑎1 .                                                                               (4)
                             1
        The second image, with a larger angular size of 𝜑2 , is a virtual image of the lamp, formed as a result
of reflection at the glass-air boundary from the convex surface of the lens. Considering that the rays that
formed this image passed twice through a diverging lens with optical power 𝐷, and the focal length of the
convex surface is 𝑅/2, the focal length of the system is
                  1           2
               − 𝐹 = 2𝐷 + 𝑅,                                                                             (5)
                     2
and the image itself is located at a distance from the observer
              𝑎2 = 𝐿 + 𝐹2 .                                                                               (6)
XXII International Zhautykov Olympiad/Theoretical Competition                                             p. 4/11

       The linear size of the image of the lantern at focus is equal to
               𝑙2 = 𝜑0 𝐹2 ,                                                                               (7)
and therefore the angular size of the visible image is finally obtained as
                     𝑙
               𝜑2 = 𝑎2 .                                                                                  (8)
                               2
       Using the condition 𝛾 = 𝜑1 /𝜑2 , the answer is derived as
                   𝛾+1   1   𝛾
              𝐷 = 2𝐿 − 𝑅 − 𝑟 = −4 dpt.                                                                    (9)

                                                           Content                               Points
               1       2
 Formula (1): 𝐹 = 𝑟                                                                                0.2
               1
 Formula (2): 𝑎1 = 𝐿 − 𝐹1                                                                          0.2
 Formula (3): 𝑙1 = 𝜑0 𝐹1                                                                           0.4
                    𝑙
 Formula (4): 𝜑1 = 1                                                                               0.4
                       𝑎1
                   1                       2
 Formula (5): − 𝐹 = 2𝐷 + 𝑅                                                                         0.2
                   2
 Formula (6): 𝑎2 = 𝐿 + 𝐹2                                                                          0.2
 Formula (7): 𝑙2 = 𝜑0 𝐹2                                                                           0.4
                    𝑙
 Formula (8): 𝜑2 = 𝑎2                                                                              0.4
                           2
                       𝛾+1             1       𝛾
 Formula (9): 𝐷 = 2𝐿 − 𝑅 − 𝑟                                                                       0.2
 Numerical value in formula (9): 𝐷 = −4 dpt                                                        0.4
 Total                                                                                             3.0

                                               Problem 2. Steam Engine (10.0 points)
                                  Part 1. Steam Engine without a Governor
2.1 Let us write the equation of the adiabatic process
               𝑃𝑉 𝛾 = 𝑐𝑜𝑛𝑠𝑡                                                                               (1)
       Applying it to process 2–3, we obtain
                                   1
                           𝑃       𝛾
               𝜂 = ( 𝑃𝐴) = 0.177.                                                                         (2)
                               0
2.2 To determine the initial temperature, the adiabatic equation should be written in the (𝑇, 𝑉)variables:
              𝑇𝑉 𝛾−1 = 𝑐𝑜𝑛𝑠𝑡,                                                                            (3)
which, when applied again to process 2–3, leads to the following expression:
                     𝑇𝑆
              𝑇0 = 𝜂𝛾−1   = 390 ℃.                                                                       (4)
2.3 The ideal gas equation of state for point 2 has the form
                        𝑚
               𝑃0 𝜂𝑉0 = 𝑀0 𝑅𝑇0 ,                                                                          (5)
which yields
                        𝑃0 𝜂𝑉0
               𝑚0 = 𝑀 𝑅𝑇       = 2.30 g,                                                                  (6)
                                       0
2.4 On segment 1–2 the work performed by the steam is
             𝐴1−2 = 𝑃0 𝜂𝑉0 ,                                                                              (7)
while on segment 2–3 the work along the adiabatic is
                                           𝜂−𝜂 𝛾
               𝐴2−3 = 𝑃0 𝑉0 𝛾−1 .                                                                         (8)
       On segment 3–4 the work is negative and equal to
                𝐴3−4 = −𝑃𝐴 𝑉0 ,                                                                           (9)
therefore, the total work is
                                                   𝜂−𝜂 𝛾
               𝐴0 = 𝑃0 𝑉0 (𝜂 + 𝛾−1 ) − 𝑃𝐴 𝑉0 = 1.25 ∙ 103 J.                                              (10)
2.5 The working volume reaches its maximum value over half a revolution of the flywheel; therefore, the
average rate of change of the volume is
XXII International Zhautykov Olympiad/Theoretical Competition                                            p. 5/11

                     0   𝑉          𝑉𝜔
               𝑣 = 𝜋/𝜔 = 0𝜋 .                                                                             (11)
2.6 Let us establish the relation between the pressure in the cylinder and the mass of steam inside it. For this
purpose, we write the adiabatic equation
                    𝛾
               𝑃0 𝑉𝑖𝑛 = 𝑃𝑉 𝛾 ,                                                                            (12)
where 𝑉𝑖𝑛 is the volume occupied by the steam in the generator before it enters the working cylinder. For
this volume, the equation of state is
                         𝑚
               𝑃0 𝑉𝑖𝑛 = 𝑀 𝑅𝑇0 .                                                                           (13)
        Then the pressure in the cylinder can be expressed in terms of the steam mass using the adiabatic
equation (12) and the equation of state (13) as
                                  𝑅𝑇 𝑚 𝛾
               𝑃 = 𝑃0 (𝑀𝑃0 𝑣𝑡) ,                                                                          (14)
                                    0
where 𝑉 = 𝑣𝑡 is the time-dependent working volume.
        Taking into account the equation given in the problem statement, we obtain the required equation for
the steam mass in the cylinder:
               𝑑𝑚                                     𝑅𝑇 𝑚 𝛾
                  = 𝐾(𝑃0 − 𝑃) = 𝐾𝑃0 (1 − (𝑀𝑃0 𝑣𝑡) ).                                                      (15)
               𝑑𝑡                                      0
2.7 An obvious solution of Eq. (15) is a linear function
               𝑚 ∝ 𝑡,                                                                                     (16)
and therefore, according to Eq. (14), the steam pressure in the cylinder remains constant.
2.8 In accordance with Eq. (15), the gas mass increases linearly
               𝑚 = 𝐾(𝑃0 − 𝑃)𝑡,                                                                            (17)
and thus, from Eq. (15) and the relation 𝑉 = 𝑣𝑡, we obtain that the gas pressure must satisfy
                                  𝑅𝑇 𝜋𝐾(𝑃0 −𝑃) 𝛾
               𝑃 = 𝑃0 (𝑀𝑃0                      ) .                                                       (18)
                                    0    𝑉0 𝜔
2.9 Now we use the approximation 𝛾 ≈ 1, which allows us to obtain an explicit expression for the pressure:
                     𝑃0
             𝑃 = 𝑀𝑉     0𝜔
                           .                                                                          (19)
                         1+
                              𝜋𝐾𝑅𝑇0
2.10 The numerical value of the pressure for the given parameters is
              𝑃 = 9.10 ∙ 105 Па.                                                                   (20)
2.11 The work performed by the engine during one cycle can be calculated using Eq. (10), where 𝑃0 should
be replaced by the pressure 𝑃 given by Eq. (19). This leads to
                                     𝜂−𝜂𝛾
                                   𝜂+
                                      𝛾−1
               𝐴 = 𝑃0 𝑉        0    𝑀𝑉0 𝜔   .                                                             (21)
                                 1+
                                    𝜋𝐾𝑅𝑇0
       Thus, the parameters of this formula are
                                          𝜂−𝜂 𝛾
               𝐴0 = 𝑃0 𝑉0 (𝜂 + 𝛾−1 ) = 1.44 ∙ 103 J                                                       (22)
                         𝑀𝑉
               𝛽 = 𝜋𝑅𝑇0 = 4.16 ∙ 10−9 m ∙ s2 .                                                            (23)
                              0
2.12 In the steady-state regime, the work performed by the steam per cycle is equal to the work done on the
load:
                 𝐴0
                    𝜔 = 2𝜋𝑀0 .                                                                        (24)
               1+𝛽
                     𝐾
       Hence, the mean angular velocity in the steady-state regime is
                   𝐾  𝐴0
              𝜔 = 𝛽 (2𝜋𝑀  − 1).                                                                           (25)
                                    0
2.13 From Eq. (25) it follows that the maximum torque is
                          𝐴
              𝑀0𝑚𝑎𝑥 = 2𝜋0 = 230 N ∙ m.                                                                    (26)
2.14 A schematic plot of the corresponding dependence is shown in the figure below.
XXII International Zhautykov Olympiad/Theoretical Competition                                      p. 6/11




                                     Part 2. Governor without the Engine
2.15 It is more convenient to solve this part of the problem in a rotating reference frame.
In the equilibrium state, the torque due to gravity is balanced by the torque due to the
centrifugal force:
                𝑚𝑔𝑙 sin 𝜃 = 𝑚𝜔2 𝑙 2 sin 𝜃 cos 𝜃.                                  (27)
        It follows that the deflection angle is determined by
                                      𝑔
              cos 𝜃 = 1,          𝜔<√ ,                                          (28)
                                      𝑙
                          𝑔           𝑔
              cos 𝜃 = 𝜔2𝑙 , 𝜔 ≥ √ 𝑙 .                                            (29)
2.16 A schematic plot of this dependence is shown in the figure below.




                                    Part 3. Engine with a Governor
2.17 Taking into account that 𝐾 = 𝐾0 cos 𝜃 and using Eq. (19), substitution into Eq. (25) yields
                    3
                    0   𝐾 𝑔
                          0   𝐴
              𝜔 = √ 𝛽𝑙 (2𝜋𝑀 − 1).                                                                  (30)
                                  0
2.18 A schematic plot of the corresponding dependence is shown in the figure below.
XXII International Zhautykov Olympiad/Theoretical Competition                    p. 7/11

                                                            Content     Points
                         𝛾
         Formula (1): 𝑃𝑉 = 𝑐𝑜𝑛𝑠𝑡                                      0.2
                                      1
                           𝑃 𝛾
  2.1    Formula (2): 𝜂 = ( 𝑃𝐴 )                                      0.2         0.6
                             0
         Numerical value in formula (2): 𝜂 = 0.177                    0.2
         Formula (3): 𝑇𝑉 𝛾−1 = 𝑐𝑜𝑛𝑠𝑡                                  0.2
                            𝑇𝑆
  2.2    Formula (4): 𝑇0 = 𝜂𝛾−1                                       0.2         0.6
         Numerical value in formula (4): 𝑇0 = 390 ℃                   0.2
                               𝑃0 𝜂𝑉0
         Formula (6): 𝑚0 = 𝑀 𝑅𝑇                                       0.2
  2.3                                         𝑆                                   0.4
         Numerical value in formula (6): 𝑚0 = 2.30 g                  0.2
         Formula (7): 𝐴1−2 = 𝑃0 𝜂𝑉0                                   0.2
                                                  𝜂−𝜂 𝛾
         Formula (8): 𝐴2−3 = 𝑃0 𝑉0 𝛾−1                                0.2
  2.4    Formula (9): 𝐴3−4 = −𝑃𝐴 𝑉0                                   0.2         1.0
                                                          𝜂−𝜂 𝛾
         Formula (10): 𝐴0 = 𝑃0 𝑉0 (𝜂 + 𝛾−1 ) − 𝑃𝐴 𝑉0                  0.2
         Numerical value in formula (10): 𝐴0 = 1.25 ∙ 103 J           0.2
                           𝑉𝜔
  2.5    Formula (11): 𝑣 = 0𝜋                                         0.2         0.2
                            𝛾
         Formula (12): 𝑃0 𝑉𝑖𝑛 = 𝑃𝑉 𝛾                                  0.2
                                𝑚
         Formula (13): 𝑃0 𝑉𝑖𝑛 = 𝑀 𝑅𝑇0                                 0.2
  2.6                                     𝑅𝑇 𝑚 𝛾                                  1.0
         Formula (14): 𝑃 = 𝑃0 (𝑀𝑃0 𝑣𝑡)                                0.2
                                               0
                       𝑑𝑚                                  𝑅𝑇 𝑚 𝛾
         Formula (15): 𝑑𝑡 = 𝐾𝑃0 (1 − (𝑀𝑃0 𝑣𝑡) )                       0.4
                                                             0
         Formula (16): 𝑚 ∝ 𝑡                                          0.4
  2.7                                                                             0.6
         Reference to formula (14) or (15)                            0.2
         Formula (17): 𝑚 = 𝐾(𝑃0 − 𝑃)𝑡                                 0.2
  2.8                                     𝑅𝑇 𝜋𝐾(𝑃0 −𝑃) 𝛾                          0.6
         Formula (18): 𝑃 = 𝑃0 (𝑀𝑃0                                )   0.4
                                               0     𝑉0 𝜔
                                      𝑃0
  2.9    Formula (19): 𝑃 =            𝑀𝑉0 𝜔                           0.2         0.2
                                 1+
                                      𝜋𝐾𝑅𝑇0
  2.10   Numerical value in formula (20): 𝑃 = 9.10 ∙ 105 Pa           0.2         0.2
                                             𝜂−𝜂𝛾
                                          𝜂+
         Formula (21): 𝐴 = 𝑃0 𝑉        0
                                              𝛾−1
                                            𝑀𝑉0 𝜔                     0.2
                                         1+
                                            𝜋𝐾𝑅𝑇0
                                                          𝜂−𝜂 𝛾
         Formula (22): 𝐴0 = 𝑃0 𝑉0 (𝜂 + 𝛾−1 )                          0.2
  2.11                                                                            1.0
         Numerical value in formula (22): 𝐴0 = 1.44 ∙ 103 J           0.2
                                 𝑀𝑉
         Formula (23): 𝛽 = 𝜋𝑅𝑇0                                       0.2
                                      0
         Numerical value in formula (23): 𝛽 = 4.16 ∙ 10−9 m ∙ s2      0.2
                       𝐴
         Formula (24): 0 𝜔 = 2𝜋𝑀0                                     0.4
                       1+𝛽
  2.12                       𝐾
                                 𝐾        𝐴
                                                                                  0.6
                                0
         Formula (25): 𝜔 = 𝛽 (2𝜋𝑀 − 1)                                0.2
                                               0
                                           𝐴
         Formula (26): 𝑀0𝑚𝑎𝑥 = 2𝜋0                                    0.4
  2.13                                                                            0.6
         Numerical value in formula (26): 𝑀0𝑚𝑎𝑥 = 230 N ∙ m           0.2
         Graph:
         turns zero after the maximum torque is achieved              0.1
  2.14                                                                            0.4
         maximum torque is pointed                                    0.1
         monotonic increase when the torque goes to zero              0.2
  2.15   Formula (27): 𝑚𝑔𝑙 sin 𝜃 = 𝑚𝜔2 𝑙 2 sin 𝜃 cos 𝜃                0.2         1.0
XXII International Zhautykov Olympiad/Theoretical Competition                                             p. 8/11

                                                𝑔
          Formula (28): cos 𝜃 = 1,          𝜔<√                                                 0.4
                                                  𝑙
                                    𝑔           𝑔
          Formula (29): cos 𝜃 = 𝜔2𝑙 , 𝜔 ≥ √ 𝑙                                                   0.4
          Graph:
          horizontal segment is present                                                         0.1
  2.16                                                                                                     0.4
          the value of 𝐾0 is pointed for the horizontal segment                                 0.1
          monotonically goes to zero when the angular velocity increases                        0.2
                              3   𝐾 𝑔   𝐴
  2.17                        0
          Formula (30): 𝜔 = √ 𝛽𝑙    0
                                 (2𝜋𝑀 − 1)                                                      0.4        0.4
                                            0
          Graph:
  2.18    fracture point is present                                                             0.1        0.2
          the left segment decrease faster than the right segment                               0.1
 Total                                                                                                     10.0

                  Problem 3. Electron Paramagnetic Resonance (10.0 points)
                                                Magnetic Moment
3.1 The area of a circular coil of radius 𝑅 is equal to
                𝑆 = 𝜋𝑅 2                                                                                   (1)
and when current 𝐼 flows through it, the modulus of its magnetic moment is equal to
                𝑚 = 𝐼𝜋𝑅 2 .                                                                                (2)
        The magnetic induction at the center of a circular loop is determined by the expression
                       𝜇0 𝐼
                𝐵0 = 2𝑅     ,                                                                              (3)
from which it follows that
                        𝜇0 𝒎
                              3.
                𝑩0 = 2𝜋𝑅                                                                                   (4)
3.2 If 𝑩 lies in the plane of the coil, then by analyzing the pairs of Ampere forces acting on the elements of
the coil opposite to the magnetic field induction vector, it can be shown that the modulus of the total
moment of forces is
                𝑀 = 𝑚𝐵.                                                                                    (5)
        In general, the magnetic moment m forms an angle 𝜑 with the field. Let us decompose 𝑩 into
components: one in the plane of the coil, and the other perpendicular to it. Obviously, the perpendicular
component does not create a torque, causing stretching or compression of the coil, and since the projection
of vector 𝑩 onto the plane of the coil is
                𝐵 = 𝐵 sin 𝜑,                                                                             (6)
then the modulus of the resulting torque of Ampere forces is equal to
                𝑀 = 𝑚𝐵 sin 𝜑.                                                                              (7)
3.3 The elementary work 𝑑𝐴 for a small rotation of the coil by an angle 𝑑𝜑 is equal to
                𝑑𝐴 = 𝑀𝑑𝜑.                                                                                  (8)
        When the coil rotates from the state when 𝒎 ↑↑ 𝑩 to the position 𝒎 ↑↓ 𝑩, the angle changes from 0
to π, and the total work is determined by the integral
                       𝜋
                𝐴 = ∫0 𝑀𝑑𝜑 = 2𝑚𝐵.                                                                          (9)
                                       Electron Paramagnetic Resonance
3.4 Let an electron rotate in a circular orbit of radius 𝑅 with period 𝑇, then its motion can be represented as a
circular current with a force
                     𝑒
                𝐼=𝑇                                                                                        (10)
and magnetic moment is obtained as
                𝑚 = 𝐼𝜋𝑅 2 .                                                                                (11)
        The angular momentum of an electron moving along a circular trajectory with velocity 𝑣 is equal to
                𝐿 = 𝑚𝑒 𝑣𝑅,                                                                                 (12)
from where, taking into account the expression for the period of revolution
XXII International Zhautykov Olympiad/Theoretical Competition                                          p. 9/11

                     2𝜋𝑅
               𝑇=             ,                                                                         (13)
                      𝑣
we get
               𝑔𝐿 = 1.                                                                                  (14)
       In the vector relationship between magnetic and mechanical moments, it is necessary to take into
account the sign due to the negative charge of the electron.
3.5 According to paragraph 3.3, to flip the spin, it is necessary to perform work (9), which together with the
formula in the condition for the magnetic moment gives
                          eℏ
               𝐴 = 𝑔𝑠 𝐵0 2𝑚 ,                                                                           (15)
                                   𝑒
which is accomplished due to the energy of the photon
                𝐸 = ℏ𝜔,                                                                                 (16)
that is, the law of conservation of energy is fulfilled as
                𝐸 = 𝐴.                                                                                  (17)
         Thus, using 𝑔𝑠 = 2𝑔𝐿 = 2, we get
                      e𝐵
                𝜔 = 𝑚 0 = 6.15 ∙ 1010 s −1 ,                                                            (18)
                          𝑒
which is equal to the so-called Larmor frequency of rotation of an electron in a magnetic field.
3.6 In the absence of a core, the magnetic field in the solenoid is proportional to the current, that is,
               𝐵0 ∝ 𝐼0 ,                                                                                  (19)
and in the presence of the core, the magnetic field is also proportional to the magnetic permeability of the
substance
               𝐵 ∝ 𝜇𝐼.                                                                                    (20)
        The resonance occurs at the same value of the magnetic induction, therefore
                    𝐼
               𝐼 = 𝜇0 = 1.2 А.                                                                            (21)
                                    Thermodynamic equilibrium
3.7 In a state of thermodynamic equilibrium, the distribution of electrons across energy levels obeys the
Boltzmann distribution, therefore
               𝑁2           ℏω
                  = exp (−      ),                                                                  (22)
               𝑁 1          𝑘 𝑇        𝐵
on the other hand, the total number of atoms is known and equal
               𝑁 = 𝑁1 + 𝑁2 .                                                                            (23)
       Thus, from (22) and (23), we obtain under condition ℏω ≪ 𝑘𝐵 𝑇
                      ℏω
               𝑛0 = 2𝑘 𝑇 𝑁 = 4.68 ∙ 1017 .                                                              (24)
                              𝐵
3.8 In a state of thermodynamic equilibrium, the rates of upward and downward transitions should be the
same, since the number of atoms at the energy levels should not change, in particular for the lower level we
have
               𝑑𝑁1
                    = −𝐵12 𝜌𝑁1 + 𝐴21 𝑁2 + 𝐵21 𝜌𝑁2 = 0,                                                 (25)
                𝑑𝑡
from which we obtain for the energy density of electromagnetic radiation
                        𝐴21
               𝜌=      𝑁1 𝐵12  .                                                                       (26)
                     𝐵21 (             −1)
                              𝑁2 𝐵21
       Taking into account relation (22) and comparing with Planck's formula, we conclude that
               𝐵12 = 𝐵21 .                                                                         (27)
                              Presence of an external microwave field source
3.9 Taking into account the equality of the Einstein coefficients and neglecting spontaneous transitions,
equation (25) can be rewritten as
               𝑑𝑁1
                    = −𝑘𝑁1 + 𝑘𝑁2 ,                                                                 (28)
                𝑑𝑡
which, taking into account (23), gives rise to
               𝑑𝑛
                   = −2𝑘𝑛.                                                                         (29)
               𝑑𝑡
       Using the initial condition 𝑛(0) = 𝑛0 , we obtain the solution of equation (29) in the form
               𝑛(𝑡) = 𝑛0 exp(−2𝑘𝑡).                                                                (30)
XXII International Zhautykov Olympiad/Theoretical Competition                                               p. 10/11

It is interesting to note that under the influence of an external source of an alternating field, the difference in
the number of atoms at the two levels drops to zero over time.
3.10 From formula (30) it follows that
                      ln 2
                 𝑘 = 2𝜏 .                                                                                    (31)
         Since during the transition of each atom from the lower level to the upper one quantum of energy of
the alternating field ℏ𝜔 is absorbed, and during each reverse transition the same energy is released, then the
expression describing the absorption of energy 𝐸 of the alternating field in the core has the form
                 𝑑𝐸
                    = 𝑘𝑛ℏω,                                                                                  (32)
                 𝑑𝑡
and this means that at the initial moment of time the power of the source is equal to
                      𝑑𝐸         𝑛 ℏωln 2
                 𝑃 = 𝑑𝑡 (0) = 0 2𝜏 = 1.05 mW.                                                                (33)
3.11 Let us consider the case of the absence of an external field, then the equation given in the condition for
level 1 is rewritten as
                 𝑑𝑛
                    = 𝑁(𝛼2 − 𝛼1 ) − 𝑛(𝛼1 + 𝛼2 ).                                                             (34)
                 𝑑𝑡
         Since equation (34) must include the condition of thermodynamic equilibrium, then when the
derivative on the left becomes zero, the equilibrium concentration must be equal to 𝑛0 , from which it
follows that
                           (𝛼 +𝛼 )
                 𝑁 = 𝑛0 (𝛼1−𝛼2).                                                                             (35)
                           2      1
      Substituting (35) into (34) and adding the term from (29), we obtain an equation for taking into
account the presence of an alternating field
               𝑑𝑛
                  = −2𝑘𝑛 − (𝑛 − 𝑛0 )(𝛼1 + 𝛼2 ).                                                        (36)
               𝑑𝑡
      Since it is required to determine the power of the source in a stationary mode, the difference in the
number of atoms at the lower and upper levels must be constant, that is, 𝑑𝑛/𝑑𝑡 = 0, from which it follows
                      𝑛0
               𝑛=       2𝑘  .                                                                          (37)
                    1+(𝛼
                        1 +𝛼2 )
         The power of the source is still determined by equation (42) and taking into account that 2𝑘 ≫
(𝛼1 + 𝛼2 ), we finally obtain
                      1
                 𝑃 = 2 𝑛0 ℏω(𝛼1 + 𝛼2 ) = 1.01 μW.                                               (38)
Note that, unlike 3.10, the power of the source does not depend on the energy density of the electromagnetic
field; this is the so-called saturation mode.

                                                Content                                            Points
                                       2                                                         0.2
          Formula (1): 𝑆 = 𝜋𝑅
          Formula (2): 𝑚 = 𝐼𝜋𝑅 2                                                                 0.2
  3.1                       𝜇0 𝐼
          Formula (3): 𝐵0 = 2𝑅                                                                   0.2          0.8
                             0        𝜇 𝒎
          Formula (4): 𝑩0 = 2𝜋𝑅 3                                                                0.2
          Formula (5): 𝑀 = 𝑚𝐵                                                                    0.2
  3.2     Formula (6): 𝐵 = 𝐵 sin 𝜑                                                             0.2          0.6
          Formula (7): 𝑀 = 𝑚𝐵 sin 𝜑                                                              0.2
          Formula (8): 𝑑𝐴 = 𝑀𝑑𝜑                                                                  0.2
  3.3                                                                                                         0.4
          Formula (9): 𝐴 = 2𝑚𝐵                                                                   0.2
                            𝑒
          Formula (10): 𝐼 = 𝑇                                                                    0.2
          Formula (11): 𝑚 = 𝐼𝜋𝑅 2                                                                0.2
  3.4     Formula (12): 𝐿 = 𝑚𝑒 𝑣𝑅                                                                0.2          1.0
                             2𝜋𝑅
          Formula (13): 𝑇 = 𝑣                                                                    0.2
          Formula (14): 𝑔𝐿 = 2                                                                   0.2
                                   eℏ
  3.5     Formula (15): 𝐴 = 𝑔𝑠 𝐵0 2𝑚                                                             0.2          1.0
                                            𝑒
XXII International Zhautykov Olympiad/Theoretical Competition         p. 11/11

         Formula (16): 𝐸 = ℏ𝜔                                   0.2
         Formula (17): 𝐸 = 𝐴                                    0.2
                           e𝐵
         Formula (18): 𝜔 = 𝑚 0                                  0.2
                                 𝑒
         Numerical value in formula (18): 𝜔 = 6.15 ∙ 1010 s−1   0.2
         Formula (19): 𝐵0 ∝ 𝐼0                                  0.2
         Formula (20): 𝐵 ∝ 𝜇𝐼                                   0.2
  3.6                      𝐼                                            0.8
         Formula (21): 𝐼 = 𝜇0                                   0.2
         Numerical value in formula (21): 𝐼 = 1.2 А             0.2
                       𝑁2
         Formula (22): 𝑁 = exp (− 𝑘 𝑇)
                                              ℏω                0.2
                         1                    𝐵
         Formula (23): 𝑁 = 𝑁1 + 𝑁2                              0.2
  3.7                        ℏω                                         1.0
         Formula (24): 𝑛0 = 2𝑘 𝑇 𝑁                              0.3
                                     𝐵
         Numerical value in formula (24): 𝑛0 = 4.68 ∙ 1017      0.3
         Formula (25): −𝐵12 𝜌𝑁1 + 𝐴21 𝑁2 + 𝐵21 𝜌𝑁2 = 0          0.4
                                𝐴21
  3.8    Formula (26): 𝜌 =     𝑁1 𝐵12                           0.4     1.0
                             𝐵21 (            −1)
                                     𝑁2 𝐵21
         Formula (22) is used                                   0.2
                       𝑑𝑁1
         Formula (28): 𝑑𝑡 = −𝑘𝑁1 + 𝑘𝑁2                          0.2
  3.9                  𝑑𝑛
         Formula (29): 𝑑𝑡 = −2𝑘𝑛                                0.2     0.6
         Formula (30): 𝑛(𝑡) = 𝑛0 exp(−2𝑘𝑡)                      0.2
                           ln 2
         Formula (31): 𝑘 = 2𝜏                                   0.2
                       𝑑𝐸
         Formula (32): 𝑑𝑡 = 𝑘𝑛ℏω                                0.2
  3.10                                                                  0.8
         Formula (33): 𝑃 =
                             𝑛0 ℏωln 2                          0.2
                                 2𝜏
         Numerical value in formula (33): 𝑃 = 1.05 mW           0.2
                       𝑑𝑛
         Formula (34): 𝑑𝑡 = 𝑁(𝛼2 − 𝛼1 ) − 𝑛(𝛼1 + 𝛼2 )           0.3
                                     (𝛼 +𝛼 )
         Formula (35): 𝑁 = 𝑛0 (𝛼1 −𝛼2)                          0.3
                                          2   1
                       𝑑𝑛
         Formula (36): 𝑑𝑡 = −2𝑘𝑛 − (𝑛 − 𝑛0 )(𝛼1 + 𝛼2 )          0.3
  3.11                               𝑛0                                 2.0
         Formula (37): 𝑛 =        2𝑘
                                                                0.3
                             1+(𝛼
                                 1 +𝛼2 )
                             1                                  0.3
         Formula (38): 𝑃 = 2 𝑛0 ℏω(𝛼1 + 𝛼2 )
         Numerical value in formula (38): 𝑃 = 1.01 μW           0.5
 Total                                                                 10.0
