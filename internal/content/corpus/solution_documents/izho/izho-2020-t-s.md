---
id: solution-document-izho-2020-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2020_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [izho-2020-t-q1, izho-2020-t-q2, izho-2020-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2020_T_S.pdf."
---

XVI International Zhautykov Olympiad/Theoretical Competition                                     Page 1/13


       SOLUTIONS TO THE PROBLEMS OF THE THEORETICAL
                        COMPETITION
                              Attention. Points in grading are not divided!
                                         Problem 1 (10.0 points)
                                        Problem 1.1 (4.0 points)
       The oscillation period of a mathematical pendulum is determined by the formula
                                𝑙𝑙
               𝑇𝑇 = 2𝜋𝜋 𝑔𝑔,                                                                            (1)
where 𝑔𝑔 stands for the acceleration of gravity at a given time of day.
        The difference in the periods of oscillation of the pendulum at midday and midnight is due to
the influence of the Sun: gravitational attraction and centrifugal force due to the Earth’s motion
around the Sun. Using formula (1) for the period of pendulum oscillation the relative change in the
periods can be represented as
                       𝑇𝑇 −𝑇𝑇        𝑔𝑔
               𝜀𝜀 = 2𝑇𝑇 1 =  𝑔𝑔1 − 1,                                                                  (2)
                          1           2

where 𝑔𝑔1 , 𝑔𝑔2 denotes the acceleration of gravity at midday and midnight, respectively.
       The directions of the Earth's rotation around its own axis and around the Sun coincide, as
shown in Figure 1. The directions of action of gravitational and centrifugal forces are different at
midday and midnight, as shown in Figure 2.




        In Figure 2: 𝑚𝑚𝑔𝑔0 is the force of gravitational attraction to the Earth; 𝐹𝐹1 is the centrifugal force
due to the rotation of the Earth around its own axis; 𝐹𝐹2 is the force of gravitational attraction to the
Sun; 𝐹𝐹3 is the centrifugal force due to the motion of the Earth around the Sun.
        Then the acceleration of gravity, taking into account the influence of the Sun, are determined
by the expressions:
At midday:
                                               𝑀𝑀
                 𝑔𝑔1 = 𝑔𝑔0 − 𝜔𝜔12 𝑟𝑟1 − 𝐺𝐺 (𝑟𝑟 −𝑟𝑟 )2 + 𝜔𝜔22 𝑟𝑟2 .                                      (3)
                                             2        1
At midnight:
                                                 𝑀𝑀
               𝑔𝑔2 = 𝑔𝑔0 − 𝜔𝜔12 𝑟𝑟1 + 𝐺𝐺 (𝑟𝑟 +𝑟𝑟 )2 − 𝜔𝜔22 𝑟𝑟2 .                                       (4)
                                             2        1
In the above formulas M designates the mass of the Sun and G signifies the gravitational constant.
        To simplify the obtained expressions, we use the equation describing the motion of the Earth
around the Sun in the following form
                  𝑀𝑀
               𝐺𝐺 𝑟𝑟 2 = 𝜔𝜔22 𝑟𝑟2.                                                            (5)
                   2
       Given this relation, the acceleration difference is represented as
                                                            𝑟𝑟     −2          𝑟𝑟   −2
               ∆𝑔𝑔 = 𝑔𝑔1 − 𝑔𝑔2 = 𝜔𝜔22 𝑟𝑟2  2 −  1 − 𝑟𝑟1                 −  1 + 𝑟𝑟1    .                (6)
                                                             2                  2
       Note that in this case, in order to obtain a nonzero result in the power series expansions, it is
necessary to keep the second order terms, i.e. (1 + x ) ≈ 1 − 2 x + 3 x 2 , such that:
                                                       −2


XVI International Zhautykov Olympiad/Theoretical Competition                                                   Page 2/13


                                                            𝑟𝑟     2
                ∆𝑔𝑔 = −6𝜔𝜔22 𝑟𝑟2  𝑟𝑟1   .                                                                             (7)
                                                               2
        Thus, the relative change in the periods of oscillations due to the influence of the Sun is equal
                     ∆𝑔𝑔   ∆𝑔𝑔
               𝜀𝜀 ≈ 2𝑔𝑔 ≈ 2𝑔𝑔 ,                                                                     (8)
                             2                 0
so that the final relation is derived as
                                  𝜔𝜔 2 𝑟𝑟          𝑟𝑟          2
                𝜀𝜀 = −3 𝑔𝑔2 2  𝑟𝑟1   ≈ −3,3 ∙ 10−12 .                                                                 (9)
                                         0            2


                                                                        Content                                Points
                                    𝑙𝑙
Formula (1): 𝑇𝑇 = 2𝜋𝜋 𝑔𝑔                                                                                        0,2
                       𝑇𝑇 −𝑇𝑇                      𝑔𝑔
Formula (2): 𝜀𝜀 = 2𝑇𝑇 1 =  𝑔𝑔1 − 1                                                                              0,2
                          1                             2

Earth’s gravity is accounted for                                                                                0,2
Sun's gravity is accounted for                                                                                  0,2
Centrifugal force due to the Earth motion around the Sun is accounted for                                       0,2
Centrifugal force due th the Earth rotation is accounted for                                                    0,2
                                           𝑀𝑀
Formula (3): 𝑔𝑔1 = 𝑔𝑔0 − 𝜔𝜔12 𝑟𝑟1 − 𝐺𝐺 (𝑟𝑟 −𝑟𝑟 )2 + 𝜔𝜔22 𝑟𝑟2                                                    0,4
                                                                       2        1
                                                                           𝑀𝑀
Formula (4): 𝑔𝑔2 = 𝑔𝑔0 − 𝜔𝜔12 𝑟𝑟1 + 𝐺𝐺 (𝑟𝑟 +𝑟𝑟 )2 − 𝜔𝜔22 𝑟𝑟2                                                    0,4
                                                                       2        1
                  𝑀𝑀
Formula (5): 𝐺𝐺 𝑟𝑟 2 = 𝜔𝜔22 𝑟𝑟2                                                                                 0,3
                   2
                                                                                    𝑟𝑟   −2          𝑟𝑟   −2
Formula (6): ∆𝑔𝑔 = 𝑔𝑔1 − 𝑔𝑔2 = 𝜔𝜔22 𝑟𝑟2  2 −  1 − 𝑟𝑟1                                         −  1 + 𝑟𝑟1        0,3
                                                                                     2                2
                                                          𝑟𝑟       2
Formula (7): ∆𝑔𝑔 = −6𝜔𝜔22 𝑟𝑟2  𝑟𝑟1                                                                              0,4
                                                            2
                       ∆𝑔𝑔               ∆𝑔𝑔                                                                    0,3
Formula (8): 𝜀𝜀 ≈ 2𝑔𝑔 ≈ 2𝑔𝑔
                          2                  0
                                 𝜔𝜔 2 𝑟𝑟         𝑟𝑟         2
Formula (9): 𝜀𝜀 = −3 𝑔𝑔2 2  𝑟𝑟1                                                                                 0,3
                                     0             2
Numerical value in formula (9): 𝜀𝜀 ≈ −3,3 ∙ 10−12                                                               0,4
Total                                                                                                           4,0

                                                                       Problem 1.2 (3.0 points)
        Consider a conductor with a resistivity 𝜌𝜌, length 𝑙𝑙 and a cross section area 𝑆𝑆 in which the
current 𝐼𝐼 flows. According to the Joule-Lenz law, the heat power dissipated in a conductor per unit of
time is equal to
                𝑊𝑊 = 𝐼𝐼 2 𝑅𝑅,                                                                      (1)
where the current density is defined as
                     𝐼𝐼
                𝑗𝑗 = 𝑆𝑆,                                                                           (2)
and the resistance is found by the formula
                           𝑙𝑙
                𝑅𝑅 = 𝜌𝜌 𝑆𝑆.                                                                        (3)
        It follows from formulas (1)-(3) that the heat power per unit volume is determined by the
expression
                        𝑊𝑊
                𝑤𝑤 = 𝑆𝑆𝑆𝑆 = 𝜌𝜌𝑗𝑗 2 .                                                               (4)
        On the other hand, Ohm's law is written as
                𝑈𝑈 = 𝐼𝐼𝐼𝐼,                                                                         (5)
in which the voltage across the conductor is expressed in terms of the field strength 𝐸𝐸 in the form
                𝑈𝑈 = 𝐸𝐸𝐸𝐸.                                                                         (6)


XVI International Zhautykov Olympiad/Theoretical Competition                              Page 3/13


        Hence, equation (5), taking into account (2), (3) and (6), is written in the following
differential form
                     1
                𝑗𝑗 = 𝜌𝜌 𝐸𝐸,                                                              (7)
       Thus, according to the Joule-Lenz law, the heat power dissipated per unit of volume of the
substance is
               𝑤𝑤 = 𝜌𝜌(𝑟𝑟)𝑗𝑗(𝑟𝑟)2 ,                                                        (8)
where the current density is determined by the expression
                           𝐼𝐼
               𝑗𝑗(𝑟𝑟) = 4𝜋𝜋𝑟𝑟 2,                                                           (9)
with 𝜌𝜌(𝑟𝑟) denotes the dependence of the resistivity on the distance 𝑟𝑟 to the common center of
spheres.
       On the other hand, Ohm's law (7) is written in the differential form as
                          1
               𝑗𝑗(𝑟𝑟) = 𝜌𝜌(𝑟𝑟) 𝐸𝐸(𝑟𝑟),                                                     (10)
where 𝐸𝐸(𝑟𝑟) stands for the electric field strength in the substance.
       It follows from relations (8)-(10) that the electric field strength has the form
                           𝑤𝑤    4𝜋𝜋𝜋𝜋
                𝐸𝐸(𝑟𝑟) = 𝑗𝑗(𝑟𝑟) = 𝐼𝐼 𝑟𝑟 2 .                                                      (11)
       To determine the charge inside the conducting substance, we use the Gauss theorem for the
closed volume, which is practically enclosed between spheres of radii 𝑎𝑎 and 𝑏𝑏
                                              𝑄𝑄
              𝐸𝐸(𝑏𝑏)4𝜋𝜋𝑏𝑏 2 − 𝐸𝐸(𝑎𝑎)4𝜋𝜋𝑎𝑎2 = 𝜀𝜀 .                                         (12)
                                                                  0
where 𝑄𝑄 symbolizes the total charge inside the conductive substance.
       Since the volume of the substance enclosed between the two spheres is equal to
                   4          4
              𝑉𝑉 = 3 𝜋𝜋𝑏𝑏 3 − 3 𝜋𝜋𝑎𝑎3 ,                                                          (13)
Then, the average charge density in the conducting substance is obtained as
                       𝑄𝑄           12𝜋𝜋𝜀𝜀0 𝑤𝑤 𝑏𝑏 4 −𝑎𝑎4
                𝜌𝜌𝑄𝑄 = 𝑉𝑉 =             𝐼𝐼
                                                    𝑏𝑏3 −𝑎𝑎3  .                                  (14)

                                                           Content                        Points
                       2
Formula (1): 𝑊𝑊 = 𝐼𝐼 𝑅𝑅                                                                    0,2
                  𝐼𝐼
Formula (2): 𝑗𝑗 = 𝑆𝑆                                                                       0,2
                          𝑙𝑙
Formula (3): 𝑅𝑅 = 𝜌𝜌 𝑆𝑆                                                                    0,2
                     𝑊𝑊
Formula (4): 𝑤𝑤 = 𝑆𝑆𝑆𝑆 = 𝜌𝜌𝑗𝑗 2                                                            0,2
Formula (5): 𝑈𝑈 = 𝐼𝐼𝐼𝐼                                                                     0,2
Formula (6): 𝑈𝑈 = 𝐸𝐸𝐸𝐸                                                                     0,2
                  1
Formula (7): 𝑗𝑗 = 𝜌𝜌 𝐸𝐸                                                                    0,2
                                        2
Formula (8): 𝑤𝑤 = 𝜌𝜌(𝑟𝑟)𝑗𝑗(𝑟𝑟)                                                             0,2
                        𝐼𝐼
Formula (9): 𝑗𝑗(𝑟𝑟) = 4𝜋𝜋𝑟𝑟 2                                                              0,2
                               1
Formula (10): 𝑗𝑗(𝑟𝑟) = 𝜌𝜌(𝑟𝑟) 𝐸𝐸(𝑟𝑟)                                                       0,2
                               𝑤𝑤                4𝜋𝜋𝜋𝜋 2
Formula (11): 𝐸𝐸(𝑟𝑟) = 𝑗𝑗(𝑟𝑟) =                       𝑟𝑟                                   0,2
                                                   𝐼𝐼
                                                                  𝑄𝑄
Formula (12): 𝐸𝐸(𝑏𝑏)4𝜋𝜋𝑏𝑏 2 − 𝐸𝐸(𝑎𝑎)4𝜋𝜋𝑎𝑎2 = 𝜀𝜀                                            0,3
                                                                   0
                      4                      4
Formula (13): 𝑉𝑉 = 3 𝜋𝜋𝑏𝑏 3 − 3 𝜋𝜋𝑎𝑎3                                                      0,2
                          12𝜋𝜋𝜀𝜀0 𝑤𝑤         𝑏𝑏 4 −𝑎𝑎4                                     0,3
Formula (14): 𝜌𝜌𝑄𝑄 =                     𝑏𝑏3 −𝑎𝑎3
                               𝐼𝐼
Total                                                                                      3,0


XVI International Zhautykov Olympiad/Theoretical Competition                               Page 4/13


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


XVI International Zhautykov Olympiad/Theoretical Competition                               Page 5/13


the bright star is closed, as shown in the figure. Thus, only five irregular quadrangles remain
illuminated on the screen.




                                         Content                                           Points
      The rays are correctly constructed (the image of the source, or the correct
                                                                                         0.3
      reflection of the rays);
      Image grading:
      the main part is an inverted triangle; (if not, then the rest in this paragraph    0,3
      is not counted);
1.3.1                                                                                               1.3
      Triangle size - numerical value (side or radius);                                  0,1
      There is a semi-illuminated border;                                                0,2
      Border width;                                                                      0,1
      There is a blurred shadow in the center;                                           0,2
      The size of the shadow (partial shade) is the radius in the range of 1-2 mm;       0,1
      The rays are correctly constructed (the image of the source, or the correct
                                                                                         0,2
      reflection of the rays);
      Image grading
      The main part is an inverted star; (if not, then the rest in this paragraph is
      not counted);                                                                      0,4
      The radius of the star (numerical value);                                          0,2
1.3.2                                                                                               1.7
      There is a border;                                                                 0,1
      Estimation of the border thickness;                                                0,2
      There is a shadow from the source;                                                 0,2
      Shadow is not an inverted star;                                                    0,1
      The size of the shadow coincides with the size of the inverted star;               0,2
      Illuminated areas - 5 quadrangles;                                                 0,1
      Total                                                                                         3,0

               Problem 2. Phase states and phase transitions (10,0 points)
                           Specific heat of phase transition
2.1 The work of steam against constant external pressure during evaporation of a unit water mass is
found as
               𝐴𝐴 = 𝑃𝑃(𝑣𝑣2 − 𝑣𝑣1 ).                                                              (1)
        Since 𝑣𝑣2 ≫ 𝑣𝑣1 , we can neglect the specific volume of liquid 𝑣𝑣1 in comparison with the
specific volume of vapor 𝑣𝑣2 . Then, considering water vapor as an ideal gas with the equation of state
                      𝑅𝑅𝑅𝑅
               𝑃𝑃𝑃𝑃 = 𝜇𝜇                                                                         (2)
                       𝑤𝑤
the work sought is obtained as
                                   𝑅𝑅𝑇𝑇
             𝐴𝐴 = 𝑃𝑃(𝑣𝑣2 − 𝑣𝑣1 ) ≈ 𝜇𝜇 𝑏𝑏.                                                       (3)
                                      𝑤𝑤


XVI International Zhautykov Olympiad/Theoretical Competition                                   Page 6/13


       Thus, the ratio of work to the total heat of evaporation at 𝑇𝑇 = 373 К is determined by the
expression
              𝐴𝐴    𝑅𝑅𝑇𝑇
              𝑟𝑟
                 = 𝜇𝜇 𝑟𝑟𝑏𝑏 ,                                                                (4)
                в     𝑤𝑤 𝑤𝑤
and the rest of the heat goes to the increase of the internal energy of the system ∆𝑢𝑢 = 𝑟𝑟𝑤𝑤 − 𝐴𝐴, i.e.
                ∆𝑢𝑢        𝑅𝑅𝑇𝑇𝑏𝑏
                𝑟𝑟
                    = 1 −         = 92,4 %.                                                          (5)
                𝑤𝑤        𝜇𝜇 𝑟𝑟    𝑤𝑤 𝑤𝑤
2.2 The evaporation of one mole of water at a temperature 𝑇𝑇 consumes heat
              𝜇𝜇𝑤𝑤 𝑟𝑟(𝑇𝑇) = 𝑈𝑈2 (𝑇𝑇) – 𝑈𝑈1 (𝑇𝑇) + 𝑃𝑃𝑉𝑉2 = 𝑈𝑈2 (𝑇𝑇) – 𝑈𝑈1 (𝑇𝑇) + 𝑅𝑅𝑅𝑅.             (6)
       A similar expression for the temperature 𝑇𝑇𝑏𝑏 = 373 К has the form
              𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤 = 𝑈𝑈2 (𝑇𝑇𝑏𝑏 ) – 𝑈𝑈1 (𝑇𝑇𝑏𝑏 ) + 𝑅𝑅𝑇𝑇𝑏𝑏 .                                    (7)
       Subtracting equation (7) from equation (6), we obtain for the change in the molar heat of
evaporation
                                                                                  С
              𝜇𝜇𝑤𝑤 ∆𝑟𝑟 = ∆𝑈𝑈2 – ∆𝑈𝑈1 + 𝑅𝑅∆𝑇𝑇 = С𝑃𝑃 ∆𝑇𝑇 − 𝜇𝜇𝑤𝑤 𝑐𝑐𝑤𝑤 ∆𝑇𝑇 = 𝜇𝜇𝑤𝑤  𝜇𝜇𝑃𝑃 − 𝑐𝑐𝑤𝑤   ∆𝑇𝑇, (8)
                                                                                    𝑤𝑤
where ∆𝑇𝑇 = 𝑇𝑇 − 𝑇𝑇𝑏𝑏 and ∆𝑟𝑟 = 𝑟𝑟(𝑇𝑇) − 𝑟𝑟𝑤𝑤 .
       Given that for water vapor, the molar heat capacity at constant pressure is
               𝐶𝐶𝑃𝑃 = 4𝑅𝑅,                                                                          (9)
we obtain the specific heat of water evaporation
                                       4𝑅𝑅
               𝑟𝑟(𝑇𝑇) = 𝑟𝑟𝑤𝑤 −  𝑐𝑐𝑤𝑤 − 𝜇𝜇   (𝑇𝑇 − 𝑇𝑇𝑏𝑏 ) = 2447 𝐽𝐽/𝑔𝑔.                              (10)
                                                              𝑤𝑤
It is interesting to note that the heat of evaporation is increased by ∆𝑟𝑟/𝑟𝑟𝑤𝑤 ≈ 8 %.
                                                  The Clausius–Clapeyron relation
2.3 Neglecting the specific volume of water compared to the volume of vapor, we apply the
Clapeyron-Clausius equation to the vaporization in the form
              𝑑𝑑𝑑𝑑    𝑟𝑟         𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤
              𝑑𝑑𝑑𝑑
                   = 𝑇𝑇𝑇𝑇 = 𝑅𝑅𝑇𝑇       2 𝑃𝑃
                                                                                   (11)
or
              𝑑𝑑𝑑𝑑   𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤 𝑑𝑑𝑑𝑑
               𝑃𝑃
                   =     𝑅𝑅𝑇𝑇 2
                                    .                                              (12)
      Integrating this expression at 𝑟𝑟 = 𝑟𝑟𝑤𝑤 = 𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐 gives rise to
                                              𝜇𝜇 𝑟𝑟       1        1
               𝑃𝑃 = 𝑃𝑃0 exp   𝑤𝑤𝑅𝑅 𝑤𝑤  𝑇𝑇 – 𝑇𝑇  .                                                   (13)
                                                          𝑏𝑏

2.4 As it follows from equation (13) the explicit dependence of the boiling point of water on external
pressure has the form
                         𝑇𝑇𝑏𝑏
               𝑇𝑇 =    𝑅𝑅𝑇𝑇𝑏𝑏 𝑃𝑃 .                                                              (14)
                     1−                ln
                          𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤       𝑃𝑃0
       According to the barometric formula for an isothermal atmosphere, we have
                            𝜇𝜇 𝑔𝑔ℎ
             𝑃𝑃 = 𝑃𝑃0 exp  − 𝑎𝑎𝑎𝑎𝑎𝑎
                              𝑅𝑅𝑇𝑇
                                     .                                                              (15)
                                                      0
      Substituting this expression into formula (14), we obtain the dependence of the boiling
temperature on height and the numerical value of the boiling temperature of water at the altitude of
ℎ = 7 𝑘𝑘𝑘𝑘
                       𝑇𝑇
              𝑇𝑇 = 𝑇𝑇𝑏𝑏𝜇𝜇𝑏𝑏𝑎𝑎𝑎𝑎𝑎𝑎 𝑔𝑔ℎ = 349,6 К = 76,6 ℃.                                     (16)
                     1+
                          𝑇𝑇0 𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤
2.5 It follows from the Clapeyron-Clausius relation the following holds at the vicinity of 0 ℃
                𝑑𝑑𝑑𝑑     𝑟𝑟𝑤𝑤
                𝑑𝑑𝑑𝑑
                     =   1    1 .                                                                   (17)
                      𝑇𝑇0          −
                            𝜌𝜌𝑤𝑤       𝜌𝜌𝑖𝑖
            Therefore, we obtain that in order to lower the melting temperature of ice by 10С, the pressure
should be increased by
                         𝑑𝑑𝑑𝑑
                   ∆𝑃𝑃 = 𝑑𝑑𝑑𝑑 ∆𝑇𝑇 = 139 𝑎𝑎𝑎𝑎𝑎𝑎,                                                      (18)
so that the pressure should be equal to 𝑃𝑃 = 140 𝑎𝑎𝑎𝑎𝑎𝑎.
2.6 In order for ice crystals to break when walking, and not to melt under the influence of pressure
𝑃𝑃𝑐𝑐𝑐𝑐 , the outdoor temperature should be lower than


XVI International Zhautykov Olympiad/Theoretical Competition                                    Page 7/13


                                𝑃𝑃
                               𝑐𝑐𝑐𝑐
               𝑡𝑡𝑚𝑚𝑚𝑚𝑚𝑚 = (𝑑𝑑𝑑𝑑/𝑑𝑑𝑑𝑑) ≈ −7,21 ℃ ,                                                     (19)
in which the derivative (𝑑𝑑𝑑𝑑/𝑑𝑑𝑑𝑑) is determined by formula (17).
2.7 Since for one mole of vapor PV = RT, then
               𝑑𝑑(𝑃𝑃𝑃𝑃) = 𝑃𝑃𝑃𝑃𝑃𝑃 + 𝑉𝑉𝑉𝑉𝑉𝑉 = 𝑅𝑅𝑅𝑅𝑅𝑅,                                                    (20)
thus, the elementary work of the vapor when changing its volume is derived as
               𝑃𝑃𝑃𝑃𝑃𝑃 = 𝑅𝑅𝑅𝑅𝑅𝑅 – 𝑉𝑉𝑉𝑉𝑉𝑉.                                                               (21)
        From the first law of thermodynamics it follows that the heat supplied to the vapor has the
form
               𝛿𝛿𝛿𝛿 = 𝑑𝑑𝑑𝑑 + 𝛿𝛿𝛿𝛿 = 𝐶𝐶𝑉𝑉 𝑑𝑑𝑑𝑑 + 𝑅𝑅𝑅𝑅𝑅𝑅 − 𝑉𝑉𝑉𝑉𝑉𝑉 = 𝐶𝐶𝑃𝑃 𝑑𝑑𝑑𝑑 − 𝑉𝑉𝑉𝑉𝑉𝑉 .                 (22)
        Given that from the Clapeyron-Clausius relation 𝑑𝑑𝑑𝑑/𝑑𝑑𝑑𝑑 = 𝑟𝑟𝑤𝑤 𝜇𝜇𝑤𝑤 /(𝑇𝑇𝑏𝑏 𝑉𝑉),, we obtain the heat
capacity of the vapor
                      𝛿𝛿𝛿𝛿       𝑉𝑉𝑉𝑉𝑉𝑉        𝜇𝜇 𝑟𝑟
               𝐶𝐶 = 𝑑𝑑𝑑𝑑 = 𝐶𝐶𝑃𝑃 – 𝑑𝑑𝑑𝑑 = 𝐶𝐶𝑃𝑃 – 𝑤𝑤 𝑤𝑤 = − 75,7 𝐽𝐽/(𝐾𝐾 ∙ 𝑚𝑚𝑚𝑚𝑚𝑚).               (23)
                                                 𝑇𝑇         𝑏𝑏
        Thus, the heat from the vapor must be removed so that it does not overheat as a result of
expansion. It is interesting to note that the specific heat in this process turned out to be almost equal
to the specific heat of water with a minus sign 𝑐𝑐 = 𝐶𝐶𝑃𝑃 /𝜇𝜇𝑤𝑤 – 𝑟𝑟𝑤𝑤 /𝑇𝑇𝑏𝑏 = − 4,21 𝐽𝐽/(𝑔𝑔 ∙ 𝐾𝐾).
                                                      Border boiling
2.8 A liquid boils when bubbles are formed inside such that the pressure of its saturated vapor
reaches the atmospheric pressure P 0 . At the liquids border, the total vapor pressure in the bubbles
formed upon boiling is the sum of the partial pressures of the saturated vapor of carbon tetrachloride
and water at t*
                𝑃𝑃0 = 𝑃𝑃(𝑡𝑡 ∗ ) + 𝑃𝑃𝑤𝑤 (𝑡𝑡 ∗ ).                                                   (24)
       It follows that the saturated vapor pressure of carbon tetrachloride at a boiling point is found
as
               𝑃𝑃∗ = 𝑃𝑃(𝑡𝑡 ∗ ) = 𝑃𝑃0 − 𝑃𝑃𝑤𝑤 (𝑡𝑡 ∗ ).                                              (25)
       From the Clapeyron-Clausius relation for carbon tetrachloride it follows that
                𝑑𝑑𝑑𝑑    𝜇𝜇𝜇𝜇𝜇𝜇𝜇𝜇
                 𝑃𝑃
                     = 𝑅𝑅𝑇𝑇 2 .                                                                   (26)
       After integrating from the lower bound 𝑇𝑇 = 𝑡𝑡 + 273,15 = 349,8 𝐾𝐾 to the higher bound
𝑇𝑇 = 𝑡𝑡 ∗ + 273,15 = 339,15 𝐾𝐾 results in the following formula
  ∗

                𝑙𝑙𝑙𝑙(𝑃𝑃0 /𝑃𝑃∗ ) = 𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟/𝑅𝑅𝑅𝑅𝑇𝑇 ∗ ,                                             (27)
which means the heat of vaporization of carbon tetrachloride is obtained as
                      𝑅𝑅𝑅𝑅𝑇𝑇 ∗ ln(𝑃𝑃0 /𝑃𝑃∗ )
               𝑟𝑟 =       𝜇𝜇(𝑇𝑇−𝑇𝑇 ∗ )
                                               ≈ 180 J/g.                                             (28)
For reference: the experimental value is 𝑟𝑟 = 195 𝐽𝐽/𝑔𝑔.
2.9 The ratio of evaporation rates from the border layer is obviously equal to the ratio of the masses
of vapor of tetrachlomethane and water in the bubbles formed during boiling, which, in turn, is equal
to the ratio of the densities of the vapors found as
                  𝑚𝑚    𝜌𝜌       𝑃𝑃 ∗ 𝜇𝜇
                 𝑚𝑚
                     = 𝜌𝜌
                           =  𝑃𝑃 (𝑡𝑡 ∗ )𝜇𝜇
                                           ≈ 25.                                                 (29)
                 𝑤𝑤       𝑤𝑤         𝑤𝑤        𝑤𝑤
       Thus, carbon tetrachloride evaporates 25 times faster (by weight) than water. This means that
by the time of evaporation of carbon tetrachloride, the amount of water that finally evaporates is
written as
                      𝜌𝜌𝜌𝜌 𝑚𝑚
              𝛥𝛥𝛥𝛥 = 2 𝑚𝑚𝑤𝑤 = 3,25 𝑔𝑔 .                                                       (30)
       Accordingly, the amount of water remaining after evaporation of all carbon tetrachloride is
derived as
              𝑀𝑀𝑤𝑤 = 𝜌𝜌𝑤𝑤 𝑉𝑉/2 – 𝛥𝛥𝛥𝛥 = 46,7 𝑔𝑔.                                              (31)
2.10 Let border boiling occur at a certain temperature 𝑡𝑡𝑥𝑥 , then the saturated vapor pressure of
fluoroketone 𝑃𝑃 and the saturated vapor pressure of water 𝑃𝑃𝑤𝑤 at this temperature should equal the
external atmospheric pressure, i.e.
              𝑃𝑃0 = 𝑃𝑃(𝑡𝑡𝑥𝑥 ) + 𝑃𝑃𝑤𝑤 (𝑡𝑡𝑥𝑥 ).                                                 (32)


XVI International Zhautykov Olympiad/Theoretical Competition                                    Page 8/13


       Thus, the saturated vapor pressure of fluoroketone at the border boiling point decreases by the
value of the saturated vapor pressure of water at this temperature
               𝑃𝑃(𝑡𝑡𝑥𝑥 ) = 𝑃𝑃0 − 𝑃𝑃𝑤𝑤 (𝑡𝑡𝑥𝑥 ).                                                  (33)

        From the Clapeyron – Clausius equation (in the approximation of small liquid volume and
vapor ideality) it follows that the slope of the phase equilibrium line P(T) at the volume boiling point
of fluoroketone reads as
                        d𝑃𝑃   𝑟𝑟𝑟𝑟𝑃𝑃
               α𝑓𝑓 = d𝑇𝑇 = 𝑅𝑅𝑇𝑇 20 .                                                              (34)
                                        𝑓𝑓
        For water at the same temperature, a similar derivative is more than 6 times less
                       d𝑃𝑃           𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤 𝑃𝑃w (𝑡𝑡𝑓𝑓 )
               αw = d𝑇𝑇 =                                     .                                          (35)
                                             𝑅𝑅𝑇𝑇𝑓𝑓2
       Since α𝑓𝑓 /αw ≈ 6,30, the decrease in pressure and, correspondingly, in the boiling point are
both small relative to the same values for fluoroketone, therefore, we can use the linear
approximation near t f
               𝑃𝑃0 − 𝑃𝑃(𝑡𝑡𝑥𝑥 ) = α𝑓𝑓 Δ𝑇𝑇 = 𝑃𝑃w (𝑡𝑡𝑥𝑥 ) = 𝑃𝑃w  𝑡𝑡𝑓𝑓  – αw Δ𝑇𝑇,                 (36)
where Δ𝑇𝑇 = 𝑇𝑇𝑓𝑓 − 𝑇𝑇𝑥𝑥 , wherefrom the lowering of the boiling point is found as
                        𝑃𝑃w (t𝑓𝑓 )
               Δ𝑇𝑇 =                    .                                                                (37)
                       (α𝑓𝑓 + αw )
       Finally, the temperature for the border boiling is obtained as
               𝑡𝑡𝑥𝑥 = 𝑡𝑡𝑓𝑓 – Δ𝑇𝑇 = 46,3 ℃ .                         P                                    (38)
For reference: the experimental value is 𝑡𝑡𝑥𝑥 = (46 ± 1) ℃.

                                                                        Content                 Points
          Formula (1): 𝐴𝐴 = 𝑃𝑃(𝑣𝑣2 − 𝑣𝑣1 )                                                    0,2
                              𝑅𝑅𝑅𝑅
          Formula (2): 𝑃𝑃𝑃𝑃 = 𝜇𝜇                                                              0,2
                                        𝑤𝑤
                         𝐴𝐴          𝑅𝑅𝑇𝑇𝑏𝑏
  2.1     Formula (4): 𝑟𝑟 = 𝜇𝜇 𝑟𝑟                                                             0,2         1,0
                         в            𝑤𝑤 𝑤𝑤
                        ∆𝑢𝑢                     𝑅𝑅𝑇𝑇𝑏𝑏
          Formula (5): 𝑟𝑟 = 1 − 𝜇𝜇 𝑟𝑟                                                         0,2
                          𝑤𝑤                      𝑤𝑤 𝑤𝑤
          Numerical value in formula (5): 92,4 %                                              0,2
          Formula (6): 𝜇𝜇𝑤𝑤 𝑟𝑟(𝑇𝑇) = 𝑈𝑈2 – 𝑈𝑈1 + 𝑃𝑃𝑉𝑉2 = 𝑈𝑈2 – 𝑈𝑈1 + 𝑅𝑅𝑅𝑅                     0,2
          Formula (7): 𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤 = 𝑈𝑈2 (𝑇𝑇𝑏𝑏 ) – 𝑈𝑈1 (𝑇𝑇𝑏𝑏 ) + 𝑅𝑅𝑇𝑇𝑏𝑏                         0,2
          Formula (9): 𝐶𝐶𝑃𝑃 = 4𝑅𝑅                                                             0,2
  2.2                                                 4𝑅𝑅
                                                                                                          1,0
          Formula (10): 𝑟𝑟(𝑇𝑇) = 𝑟𝑟𝑤𝑤 −  𝑐𝑐𝑤𝑤 −   (𝑇𝑇 − 𝑇𝑇𝑏𝑏 )                                0,2
                                                                                   𝜇𝜇𝑤𝑤
          Numerical value in formula (10): 2447 𝐽𝐽/𝑔𝑔                                         0,2
                          𝑑𝑑𝑑𝑑          𝑟𝑟              𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤
          Formula (11): 𝑑𝑑𝑑𝑑 = 𝑇𝑇𝑇𝑇 =                                   𝑃𝑃                    0,2
                                                         𝑅𝑅𝑇𝑇 2
  2.3                                                                                                     0,4
                                                             𝜇𝜇 𝑟𝑟               1        1
          Formula (13): 𝑃𝑃 = 𝑃𝑃0 exp   𝑤𝑤𝑅𝑅 𝑤𝑤  𝑇𝑇 – 𝑇𝑇                                       0,2
                                                                                   𝑏𝑏
                                                𝑇𝑇𝑏𝑏
          Formula (14): 𝑇𝑇 =                  𝑅𝑅𝑇𝑇𝑏𝑏     𝑃𝑃                                   0,2
                                      1−              ln
                                             𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤 𝑃𝑃0
                                                                  𝜇𝜇         𝑔𝑔ℎ
          Formula (15): 𝑃𝑃 = 𝑃𝑃0 exp  − 𝑎𝑎𝑎𝑎𝑎𝑎                                                0,4
  2.4                                    𝑅𝑅𝑇𝑇                                0                            1,0
                                                𝑇𝑇𝑏𝑏
          Formula (16): 𝑇𝑇 =                 𝑇𝑇 𝜇𝜇    𝑔𝑔ℎ                                     0,2
                                      1+ 𝑏𝑏 𝑎𝑎𝑎𝑎𝑎𝑎
                                             𝑇𝑇0 𝜇𝜇𝑤𝑤 𝑟𝑟𝑤𝑤
          Numerical value in formula (16): 76,6 ℃                                             0,2
                          𝑑𝑑𝑑𝑑                   𝑞𝑞𝑖𝑖
  2.5     Formula (17): 𝑑𝑑𝑑𝑑 =                 1    1                                         0,2         0,6
                                        𝑇𝑇0       −
                                              𝜌𝜌𝑤𝑤 𝜌𝜌𝑖𝑖


XVI International Zhautykov Olympiad/Theoretical Competition                                 Page 9/13


                                   𝑑𝑑𝑑𝑑
          Formula (18): ∆𝑃𝑃 = 𝑑𝑑𝑑𝑑 ∆𝑇𝑇                                                    0,2
          Numerical value in formula (17): ∆𝑃𝑃 = 139 𝑎𝑎𝑎𝑎𝑎𝑎 or 𝑃𝑃 = 140 𝑎𝑎𝑎𝑎𝑎𝑎            0,2
                                       𝑃𝑃𝑐𝑐𝑐𝑐
          Formula (19): 𝑡𝑡𝑚𝑚𝑚𝑚𝑚𝑚 = (𝑑𝑑𝑑𝑑/𝑑𝑑𝑑𝑑)                                            0,4
  2.6                                                                                                0,6
          Numerical value in formula (19): 𝑡𝑡𝑚𝑚𝑚𝑚𝑚𝑚 ≈ −7,21 ℃                             0,2
          Formula (21): 𝑃𝑃𝑃𝑃𝑃𝑃 = 𝑅𝑅𝑅𝑅𝑅𝑅 – 𝑉𝑉𝑉𝑉𝑉𝑉                                          0,2
          Formula (22): 𝛿𝛿𝛿𝛿 = 𝑑𝑑𝑑𝑑 + 𝛿𝛿𝛿𝛿 = 𝐶𝐶𝑉𝑉 𝑑𝑑𝑑𝑑 + 𝑅𝑅𝑅𝑅𝑅𝑅 − 𝑉𝑉𝑉𝑉𝑉𝑉 =
                                                                                          0,2
          𝐶𝐶𝑃𝑃 𝑑𝑑𝑑𝑑 − 𝑉𝑉𝑉𝑉𝑉𝑉
  2.7                          𝛿𝛿𝛿𝛿       𝑉𝑉𝑉𝑉𝑉𝑉        𝜇𝜇 𝑟𝑟                                        1,0
          Formula (23): 𝐶𝐶 = 𝑑𝑑𝑑𝑑 = 𝐶𝐶𝑃𝑃 – 𝑑𝑑𝑑𝑑 = 𝐶𝐶𝑃𝑃 – 𝑤𝑤𝑇𝑇 𝑤𝑤                          0,4
                                                                             𝑏𝑏

          Numerical value in formula (23): 𝐶𝐶 = − 75,7 𝐽𝐽/(𝐾𝐾 ∙ 𝑚𝑚𝑚𝑚𝑚𝑚)                   0,2
          Formula (24): 𝑃𝑃0 = 𝑃𝑃(𝑡𝑡 ∗ ) + 𝑃𝑃𝑤𝑤 (𝑡𝑡 ∗ )                                    0,4
                        𝑑𝑑𝑑𝑑   𝜇𝜇𝜇𝜇𝜇𝜇𝜇𝜇
          Formula (26): 𝑃𝑃 = 𝑅𝑅𝑇𝑇 2                                                       0,2
  2.8     Formula (27): ln(𝑃𝑃0 /𝑃𝑃∗ ) = 𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟/𝑅𝑅𝑅𝑅𝑇𝑇 ∗                                 0,2        1,2
                                 𝑅𝑅𝑅𝑅𝑇𝑇 ∗ ln(𝑃𝑃0 /𝑃𝑃∗ )
          Formula (28): 𝑟𝑟 =                                                              0,2
                                     𝜇𝜇(𝑇𝑇−𝑇𝑇 ∗ )
          Numerical value in formula (28): 𝑟𝑟 ≈ 180 𝐽𝐽/𝑔𝑔.                                0,2
                           𝑚𝑚       𝜌𝜌                   𝑃𝑃 ∗ 𝜇𝜇
          Formula (29): 𝑚𝑚 = 𝜌𝜌                = 𝑃𝑃 (𝑡𝑡 ∗)𝜇𝜇                              0,4
                            𝑤𝑤       𝑤𝑤             𝑤𝑤             𝑤𝑤
                                     𝜌𝜌𝜌𝜌 𝑚𝑚
  2.9     Formula (30): 𝛥𝛥𝛥𝛥 = 2 𝑚𝑚𝑤𝑤                                                     0,2        1,0
          Formula (31): 𝑀𝑀𝑤𝑤 = 𝜌𝜌𝑤𝑤 𝑉𝑉/2 – 𝛥𝛥𝛥𝛥                                           0,2
          Numerical value in formula (31): 𝑀𝑀𝑤𝑤 = 46,7 𝑔𝑔                                 0,2
          Formula (32): 𝑃𝑃0 = 𝑃𝑃(𝑡𝑡𝑥𝑥 ) + 𝑃𝑃𝑤𝑤 (𝑡𝑡𝑥𝑥 )                                    0.2
                                    d𝑃𝑃             𝑟𝑟𝑟𝑟𝑃𝑃
          Formula (34): α𝑓𝑓 = d𝑇𝑇 = 𝑅𝑅𝑇𝑇 20                                               0,3
                                                           𝑓𝑓
                                     d𝑃𝑃             𝑟𝑟𝑤𝑤 𝜇𝜇𝑤𝑤 𝑃𝑃w (𝑡𝑡𝑓𝑓 )
          Formula (35): αw = d𝑇𝑇 =                                                        0,3
                                                                𝑅𝑅𝑇𝑇𝑓𝑓2
          Estimation: α𝑓𝑓 /αw ≈ 6,30                                                      0,3
 2.10                                                                                                2,2
          Formula (36): 𝑃𝑃0 − 𝑃𝑃(𝑡𝑡𝑥𝑥 ) = α𝑓𝑓 Δ𝑇𝑇 = 𝑃𝑃w (𝑡𝑡𝑥𝑥 ) = 𝑃𝑃w  𝑡𝑡𝑓𝑓  – αw Δ𝑇𝑇     0,3
                                         𝑃𝑃w (t )
          Formula (37): Δ𝑇𝑇 = (α + α𝑓𝑓 )                                                  0,4
                                          𝑓𝑓       w
          Formula (38): 𝑡𝑡𝑥𝑥 = 𝑡𝑡𝑓𝑓 – Δ𝑇𝑇                                                 0,2
          Numerical value in formula (38): 𝑡𝑡𝑥𝑥 = 46,3 ℃                                  0,2
Total                                                                                               10,0

                      Problem 3. Ring in a magnetic field (10.0 points)
                                 Uniformly charged ring
3.1 Under the action of gravity, the center of mass of the ring acquires a velocity 𝑣𝑣 directed vertically
downward. In this case, the Lorentz force 𝐹𝐹𝐿𝐿1 arises, leading to the rotation of the ring around its own
axis with an angular velocity 𝜔𝜔, which in turn leads to the appearance of the vertical component of
the Lorentz force 𝐹𝐹𝐿𝐿2 directed against gravity, regardless of the sign of the ring charge.
       The equation of motion of the ring center of mass has the form
                     𝑑𝑑𝑑𝑑
                𝑚𝑚 𝑑𝑑𝑑𝑑 = 𝑚𝑚𝑚𝑚 − 𝐹𝐹𝐿𝐿2 ,                                                             (1)
where the Lorentz force is written as
                𝐹𝐹𝐿𝐿1 = 𝑞𝑞𝑣𝑣𝑟𝑟𝑟𝑟𝑟𝑟 𝐵𝐵,                                                               (2)
and the linear speed of ring rotation
                𝑣𝑣𝑟𝑟𝑟𝑟𝑟𝑟 = 𝜔𝜔𝜔𝜔.                                                                     (3)
       Thus, the equation of motion of the ring center of mass is finally derived as


XVI International Zhautykov Olympiad/Theoretical Competition                                Page 10/13


                  𝑑𝑑𝑑𝑑
                𝑚𝑚 𝑑𝑑𝑑𝑑 = 𝑚𝑚𝑚𝑚 − 𝑞𝑞𝑞𝑞𝑞𝑞𝑞𝑞.                                                   (4)
        The equation of rotational motion of the ring is written as
                   𝑑𝑑𝑑𝑑
                𝐼𝐼 𝑑𝑑𝑑𝑑 = 𝑀𝑀𝐿𝐿1 ,                                                            (5)
where the torque of the Lorentz force moment 𝐹𝐹𝐿𝐿1 is determined by the expression
                𝑀𝑀𝐿𝐿1 = 𝑞𝑞𝑞𝑞𝑞𝑞𝑞𝑞,                                                            (6)
and the moment of inertia of the ring is equal to
                𝐼𝐼 = 𝑚𝑚𝑟𝑟 2.                                                                 (7)
        Let ℎ be the vertical displacement of the ring center of mass, then its speed is
                        𝑑𝑑ℎ
                𝑣𝑣 = 𝑑𝑑𝑑𝑑 .                                                                  (8)
        Putting together (5), (6) and (8) and integrating over time, taking into account the initial
condition 𝜔𝜔 = 0 at ℎ = 0, we obtain the relation
                𝐼𝐼𝐼𝐼 = 𝑞𝑞𝑞𝑞𝑞𝑞ℎ.                                                              (9)
        At the moment when the speed of the ring center of mass is maximum, the total force on the
right side of equation (4) vanishes, which leads to the expression
                𝑚𝑚𝑚𝑚 = 𝑞𝑞𝑞𝑞𝑞𝑞𝜔𝜔0 .                                                           (10)
        Using relation (9) for this particular moment in time
                𝐼𝐼𝜔𝜔0 = 𝑞𝑞𝑞𝑞𝑞𝑞ℎ0 ,                                                           (11)
we apply the law of energy conservation in the following form
                               𝑚𝑚𝑣𝑣 2       𝐼𝐼𝜔𝜔 2
               𝑚𝑚𝑚𝑚ℎ0 = 2𝑚𝑚𝑚𝑚𝑚𝑚 + 2 0 .                                                     (12)
        Solving equations (10)-(12) together with the expression for the moment of inertia (7), we
find the maximum velocity of the ring center of mass in the following form
                          𝑚𝑚𝑚𝑚
               𝑣𝑣𝑚𝑚𝑚𝑚𝑚𝑚 = 𝑞𝑞𝑞𝑞 .                                                            (13)
3.2 Substituting relation (9) into the equation (4) of motion of the ring center of mass and using (8),
we obtain the equation of harmonic oscillations
                  𝑑𝑑2 ℎ                 (𝑞𝑞𝑞𝑞)2
               𝑚𝑚 𝑑𝑑𝑡𝑡 2 = 𝑚𝑚𝑚𝑚 − 𝑚𝑚 ℎ                                                             (14)
with the frequency
                         𝑞𝑞𝑞𝑞
               𝜔𝜔𝐿𝐿 = 𝑚𝑚 .                                                                         (15)
       The time sought is quarter of the period of oscillation, i.e.
                          𝜋𝜋   𝜋𝜋𝜋𝜋
               ∆𝑡𝑡 = 2𝜔𝜔 = 2𝑞𝑞𝑞𝑞.                                                                  (16)
                          𝐿𝐿
3.3 The initial velocity of the ring center of mass is zero and reaches its maximum at the moment of
passage of the equilibrium position, therefore, the maximum height ℎ𝑚𝑚𝑚𝑚𝑚𝑚 by which the ring center of
mass descends is obtained as
                                        2𝑔𝑔𝑚𝑚2
               ℎ𝑚𝑚𝑚𝑚𝑚𝑚 = 2ℎ0 = 𝑞𝑞2 𝐵𝐵2 .                                                           (17)
                                                     Conductive ring
3.4 Under the action of gravity, the ring center of mass acquires a velocity 𝑣𝑣 directed vertically
downward. In this case, an induction current 𝐼𝐼 arises in the ring as a result of the action of a magnetic
field, which leads to the appearance of a vertical Lorentz force 𝐹𝐹𝐿𝐿 directed against gravity.
        The equation of motion of the ring center of mass has the form
                    𝑑𝑑𝑑𝑑
                𝑚𝑚 𝑑𝑑𝑑𝑑 = 𝑚𝑚𝑚𝑚 − 𝐹𝐹𝐿𝐿 ,                                                             (18)
and the Lorentz force is determined by the expression
                𝐹𝐹𝐿𝐿 = 𝐵𝐵𝐵𝐵𝐵𝐵,                                                                      (19)
with the ring length
                𝐿𝐿 = 2𝜋𝜋𝜋𝜋.                                                                         (20)
        When moving in a magnetic field, the following electromotive force arises in the ring
                        𝑑𝑑𝑑𝑑
                ℇ = 𝑑𝑑𝑑𝑑 = 𝐵𝐵𝐵𝐵𝐵𝐵,                                                                  (21)
which, according to Ohm's law, leads to the appearance of the induction current of strength


XVI International Zhautykov Olympiad/Theoretical Competition                                                                  Page 11/13


                ℇ = 𝐼𝐼𝐼𝐼,                                                                       (22)
where the ring resistance is
                           𝐿𝐿
                𝑅𝑅 = 𝜌𝜌 𝑠𝑠 .                                                                    (23)
       In the steady-state fall mode of the ring center, its velocity 𝑣𝑣 = 𝑣𝑣0 remains unchanged, then
from (18)-(23) we obtain
                           𝑚𝑚𝑚𝑚𝑚𝑚
                𝑣𝑣0 = 2𝜋𝜋𝜋𝜋𝜋𝜋𝐵𝐵2.                                                               (24)
3.5 Expressing the velocity from (21), (22) and substituting it into equation (18), as well as using
(19), we obtain the differential equation
                𝑚𝑚𝑚𝑚 𝑑𝑑𝑑𝑑
                 𝐵𝐵𝐵𝐵 𝑑𝑑𝑑𝑑
                           = 𝑚𝑚𝑚𝑚 − 𝐵𝐵𝐵𝐵𝐵𝐵,                                                     (25)
with the initial condition
                𝐼𝐼(0) = 0.                                                                      (26)
       The solution to equation (25) when (26) is satisfied is the function
                           𝑚𝑚𝑚𝑚                                2𝜋𝜋𝜋𝜋𝜋𝜋𝐵𝐵2
               𝐼𝐼(𝑡𝑡) = 2𝜋𝜋𝜋𝜋𝜋𝜋  1 − exp  −                                 𝑡𝑡  .                                                   (27)
                                                                 𝑚𝑚𝑚𝑚
Whence,
                        𝑚𝑚𝑚𝑚
               𝐴𝐴1 = 2𝜋𝜋𝜋𝜋𝜋𝜋,                                                                                                       (28)
                            𝑚𝑚𝑚𝑚
               𝐵𝐵1 = − 2𝜋𝜋𝜋𝜋𝜋𝜋,                                                                                                     (29)
                          2𝜋𝜋𝜋𝜋𝜋𝜋𝐵𝐵2
               𝛾𝛾1 = −         𝑚𝑚𝑚𝑚
                                        .                                                                                           (30)
                                                     Conductive ring with a cut
3.6 The equation of motion of the ring center of mass of the is still described by equations (18)-(20),
and an electromotive force (21) is also generated in the ring. However, in this case, charges of the
opposite sign accumulate at the cut edges; therefore, instead of Ohm's law (22), we have
                    𝑞𝑞
               ℇ − 𝐶𝐶 = 𝐼𝐼𝐼𝐼,                                                                     (31)
where
                     𝜀𝜀 𝑆𝑆
               𝐶𝐶 = 𝛿𝛿0 .                                                                         (32)
       Since the cut edges are charged by induction current, then
                    𝑑𝑑𝑑𝑑
               𝐼𝐼 = 𝑑𝑑𝑑𝑑 .                                                                        (33)
       In the steady state, the acceleration of the ring center of mass is constant, so according to the
equation of motion (18) and (19), the current strength is also constant. Differentiating (31) with (33)
and (21) taken into account, we finally obtain the steady-state acceleration
                                𝑔𝑔
               𝑎𝑎0 =       𝐵𝐵2 (2𝜋𝜋𝜋𝜋)2 𝜀𝜀0 𝑠𝑠
                                               .                                                  (34)
                         1+
                                      𝑚𝑚𝑚𝑚
3.7 Differentiating (31) with (21) and (33) taken into account, we obtain
                     𝑑𝑑𝑑𝑑   𝐼𝐼      𝑑𝑑𝑑𝑑
                𝐵𝐵𝐵𝐵 𝑑𝑑𝑑𝑑 = 𝐶𝐶 + 𝑅𝑅 𝑑𝑑𝑑𝑑.                                                   (35)
        Dividing this equation by the equation of motion (18) and substituting (19), we obtain the
differential equation for the current in the ring
                 𝑑𝑑𝑑𝑑                        1       𝐵𝐵2 𝐿𝐿2
                𝑅𝑅 𝑑𝑑𝑑𝑑 = 𝑔𝑔𝑔𝑔𝑔𝑔 −  𝐶𝐶 + 𝑚𝑚   𝐼𝐼                                                                                    (36)
with the initial condition
                𝐼𝐼(0) = 0.                                                                                                          (37)
       The solution of equation (36) with (37) is the function
                                2𝜋𝜋𝜋𝜋𝜋𝜋𝜀𝜀0 𝑠𝑠𝑠𝑠                                     𝐵𝐵2 (2𝜋𝜋𝜋𝜋)2 𝜀𝜀0 𝑠𝑠        𝛿𝛿
               𝐼𝐼(𝑡𝑡) =         𝐵𝐵2 (2𝜋𝜋𝜋𝜋)2 𝜀𝜀0 𝑠𝑠
                                                          1 − exp  −  1 +                  𝑚𝑚𝑚𝑚
                                                                                                            2𝜋𝜋𝜋𝜋𝜋𝜋𝜀𝜀 𝑡𝑡  .         (38)
                          𝛿𝛿 1+                                                                                     0
                                      𝑚𝑚𝑚𝑚
Hence,
                              2𝜋𝜋𝜋𝜋𝜋𝜋𝜀𝜀0 𝑠𝑠𝑠𝑠
               𝐴𝐴2 =            𝐵𝐵2 (2𝜋𝜋𝜋𝜋)2 𝜀𝜀0 𝑠𝑠
                                                     ,                                                                              (39)
                        𝛿𝛿 1+
                                      𝑚𝑚𝑚𝑚


XVI International Zhautykov Olympiad/Theoretical Competition                       Page 12/13


                           2𝜋𝜋𝜋𝜋𝜋𝜋𝜀𝜀0 𝑠𝑠𝑠𝑠
              𝐵𝐵2 = −           𝐵𝐵2 (2𝜋𝜋𝜋𝜋)2 𝜀𝜀0 𝑠𝑠
                                                             ,                               (40)
                        𝛿𝛿 1+
                                      𝑚𝑚𝑚𝑚
                                    2          2
                                  𝐵𝐵 (2𝜋𝜋𝜋𝜋) 𝜀𝜀0 𝑠𝑠                    𝛿𝛿
              𝛾𝛾2 = −  1 +                  𝑚𝑚𝑚𝑚
                                                                   2𝜋𝜋𝜋𝜋𝜋𝜋𝜀𝜀 .               (41)
                                                                             0


                                                                    Content         Points
                             𝑑𝑑𝑑𝑑
         Equation (1): 𝑚𝑚 𝑑𝑑𝑑𝑑 = 𝑚𝑚𝑚𝑚 − 𝐹𝐹𝐿𝐿2                                     0,3
         Formula(2): 𝐹𝐹𝐿𝐿1 = 𝑞𝑞𝑣𝑣𝑟𝑟𝑟𝑟𝑟𝑟 𝐵𝐵                                        0,2
         Formula (3): 𝑣𝑣𝑟𝑟𝑟𝑟𝑟𝑟 = 𝜔𝜔𝜔𝜔                                             0,2
                            𝑑𝑑𝑑𝑑
         Equation (4): 𝑚𝑚 𝑑𝑑𝑑𝑑 = 𝑚𝑚𝑚𝑚 − 𝑞𝑞𝑞𝑞𝑞𝑞𝑞𝑞                                  0,2
                           𝑑𝑑𝑑𝑑
         Equation (5): 𝐼𝐼 𝑑𝑑𝑑𝑑 = 𝑀𝑀𝐿𝐿1                                            0,3
         Formula(6): 𝑀𝑀𝐿𝐿1 = 𝑞𝑞𝑞𝑞𝑞𝑞𝑞𝑞                                             0,2
  3.1                                                                                         3,2
         Formula (7): 𝐼𝐼 = 𝑚𝑚𝑟𝑟 2                                                 0,2
                                  𝑑𝑑ℎ
         Formula (8): 𝑣𝑣 = 𝑑𝑑𝑑𝑑                                                   0,2
         Formula (9): 𝐼𝐼𝐼𝐼 = 𝑞𝑞𝑞𝑞𝑞𝑞ℎ                                              0,4
         Formula (10): 𝑚𝑚𝑚𝑚 = 𝑞𝑞𝑞𝑞𝑞𝑞𝜔𝜔0                                           0,4
                                                          2
                                                      𝑚𝑚𝑣𝑣𝑚𝑚𝑚𝑚𝑚𝑚        𝐼𝐼𝜔𝜔02
         Formula (12): 𝑚𝑚𝑚𝑚ℎ0 =                                     + 2           0,3
                                                          2
                                                 𝑚𝑚𝑚𝑚
         Formula (13): 𝑣𝑣𝑚𝑚𝑚𝑚𝑚𝑚 = 𝑞𝑞𝑞𝑞                                            0,3
                                 𝑑𝑑2 ℎ                              (𝑞𝑞𝑞𝑞)2
         Equation (14): 𝑚𝑚 𝑑𝑑𝑡𝑡 2 = 𝑚𝑚𝑚𝑚 −                                    ℎ   0,3
                                                                       𝑚𝑚
                                         𝑞𝑞𝑞𝑞
  3.2    Formula (15): 𝜔𝜔𝐿𝐿 = 𝑚𝑚                                                  0,2         0,8
                                           𝜋𝜋                𝜋𝜋𝜋𝜋
         Formula(16): ∆𝑡𝑡 = 2𝜔𝜔 = 2𝑞𝑞𝑞𝑞                                           0,3
                                                 𝐿𝐿
                                                                    2𝑔𝑔𝑚𝑚2
  3.3    Formula(17): ℎ𝑚𝑚𝑚𝑚𝑚𝑚 = 2ℎ0 = 𝑞𝑞2 𝐵𝐵2                                     0,2         0,2
                                 𝑑𝑑𝑑𝑑
         Equation (18): 𝑚𝑚 𝑑𝑑𝑑𝑑 = 𝑚𝑚𝑚𝑚 − 𝐹𝐹𝐿𝐿                                     0,3
         Formula (19): 𝐹𝐹𝐿𝐿 = 𝐵𝐵𝐵𝐵𝐵𝐵                                              0,2
         Formula (20): 𝐿𝐿 = 2𝜋𝜋𝜋𝜋                                                 0,2
                              𝑑𝑑𝑑𝑑
  3.4    Formula (21): ℇ = 𝑑𝑑𝑑𝑑 = 𝐵𝐵𝐵𝐵𝐵𝐵                                          0,3         1,8
         Formula (22): ℇ = 𝐼𝐼𝐼𝐼                                                   0,3
                                 𝐿𝐿
         Formula (23): 𝑅𝑅 = 𝜌𝜌 𝑠𝑠                                                 0,2
                                           𝑚𝑚𝑚𝑚𝑚𝑚
         Formula (24): 𝑣𝑣0 = 2𝜋𝜋𝜋𝜋𝜋𝜋𝐵𝐵2                                           0,3
                           𝑚𝑚𝑚𝑚 𝑑𝑑𝑑𝑑
         Equation (25): 𝐵𝐵𝐵𝐵 𝑑𝑑𝑑𝑑 = 𝑚𝑚𝑚𝑚 − 𝐵𝐵𝐵𝐵𝐵𝐵                                 0,2
         Condition (26): 𝐼𝐼(0) = 0                                                0,2
                                           𝑚𝑚𝑚𝑚
  3.5    Formula (28): 𝐴𝐴1 = 2𝜋𝜋𝜋𝜋𝜋𝜋                                              0,2         1,0
                                                      𝑚𝑚𝑚𝑚
         Formula (29): 𝐵𝐵1 = − 2𝜋𝜋𝜋𝜋𝜋𝜋                                            0,2
                                                 2𝜋𝜋𝜋𝜋𝜋𝜋𝐵𝐵2
         Formula (30): 𝛾𝛾1 = −                                                    0,2
                                                       𝑚𝑚𝑚𝑚
                                    𝑞𝑞
         Equation (31): ℇ − 𝐶𝐶 = 𝐼𝐼𝐼𝐼                                             0,3
                                        𝜀𝜀0 𝑆𝑆
  3.6    Formula (32): 𝐶𝐶 = 𝛿𝛿                                                    0,2         1,0
                                    𝑑𝑑𝑑𝑑
         Formula (33): 𝐼𝐼 = 𝑑𝑑𝑑𝑑                                                  0,2


XVI International Zhautykov Olympiad/Theoretical Competition                                    Page 13/13


                                                    𝑔𝑔
         Formula (34): 𝑎𝑎0 =               𝐵𝐵2 (2𝜋𝜋𝜋𝜋)2 𝜀𝜀0 𝑠𝑠                                 0,3
                                        1+
                                                 𝑚𝑚𝑚𝑚
                                    𝑑𝑑𝑑𝑑      𝐼𝐼          𝑑𝑑𝑑𝑑
         Equation (35): 𝐵𝐵𝐵𝐵 𝑑𝑑𝑑𝑑 = 𝐶𝐶 + 𝑅𝑅 𝑑𝑑𝑑𝑑                                               0,5
                             𝑑𝑑𝑑𝑑                          1          𝐵𝐵2 𝐿𝐿2
  3.7    Equation (36): 𝑅𝑅 𝑑𝑑𝑑𝑑 = 𝑔𝑔𝑔𝑔𝑔𝑔 −  𝐶𝐶 + 𝑚𝑚   𝐼𝐼                                       0,5
         Condition (37): 𝐼𝐼(0) = 0                                                             0,1
                                             2𝜋𝜋𝜋𝜋𝜋𝜋𝜀𝜀0 𝑠𝑠𝑠𝑠
         Formula (39): 𝐴𝐴2 =                   𝐵𝐵2 (2𝜋𝜋𝜋𝜋)2 𝜀𝜀0 𝑠𝑠                             0,3     2,0
                                       𝛿𝛿 1+
                                                     𝑚𝑚𝑚𝑚
                                                   2𝜋𝜋𝜋𝜋𝜋𝜋𝜀𝜀0 𝑠𝑠𝑠𝑠
         Formula (40): 𝐵𝐵2 = −                       𝐵𝐵2 (2𝜋𝜋𝜋𝜋)2 𝜀𝜀0 𝑠𝑠                       0,3
                                           𝛿𝛿 1+
                                                           𝑚𝑚𝑚𝑚
                                                       𝐵𝐵2 (2𝜋𝜋𝜋𝜋)2 𝜀𝜀0 𝑠𝑠         𝛿𝛿
         Formula (41): 𝛾𝛾2 = −  1 +                                            2𝜋𝜋𝜋𝜋𝜋𝜋𝜀𝜀       0,3
                                                               𝑚𝑚𝑚𝑚                        0
Total                                                                                                  10,0
