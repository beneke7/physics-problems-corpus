---
id: solution-document-ipho-2013-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2013/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2013-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2013/T3_S.pdf."
---

The Greenlandic Ice Sheet                                                T3

                                             Solutions

      The pressure is given by the hydrostatic pressure 𝑝(𝑥, 𝑧) = 𝜌ice 𝑔(𝐻(𝑥) − 𝑧), which is
3.1                                                                                          0.3
      zero at the surface.

      The outward force on a vertical slice at a distance 𝑥 from the middle and of a given
      width ∆𝑦 is obtained by integrating up the pressure times the area:
                                 𝐻(𝑥)
                                                              1
                   𝐹(𝑥) = ∆𝑦          𝜌ice 𝑔 (𝐻(𝑥) − 𝑧) d𝑧 = ∆𝑦 𝜌ice 𝑔 𝐻(𝑥)2
                                0                             2
                                                              d𝐹                  d𝐻
3.2a which implies that ∆𝐹 = 𝐹(𝑥) − 𝐹(𝑥 + ∆𝑥) = − d𝑥 ∆𝑥 = −∆𝑦 𝜌ice 𝑔 𝐻(𝑥) d𝑥 ∆𝑥.              0.9
     This finally shows that
                                       𝛥𝐹                     d𝐻
                               𝑆b =          = − 𝜌ice 𝑔 𝐻(𝑥)
                                      ∆𝑥∆𝑦                    d𝑥
     Notice the sign, which must be like this, since 𝑆𝑏 was defined as positive and 𝐻(𝑥) is a
     decreasing function of 𝑥.
      To find the height profile, we solve the differential equation for 𝐻(𝑥):
                                     𝑆b             d𝐻 1 d
                                 −         = 𝐻(𝑥)       =       𝐻(𝑥)2
                                    𝜌ice 𝑔          d𝑥 2 d𝑥
      with the boundary condition that 𝐻(𝐿) = 0. This gives the solution:

                                              2𝑆𝑏 𝐿
                                     𝐻(𝑥) =          1 − 𝑥/𝐿
                                             𝜌ice 𝑔

                                                   2𝑆 𝐿
      Which gives the maximum height 𝐻m =  𝜌 𝑏 𝑔.
                                                    ice

      Alternatively, dimensional analysis could be used in the following manner. First notice
                          𝛼      𝛾
      that ℒ = [𝐻m ] =  𝜌ice 𝑔𝛽 𝜏b 𝐿𝛿  . Using that  𝜌𝜌ice   = ℳℒ −3, [𝑔] = ℒ 𝒯 −2, [𝜏𝑏 ] =
         −1 −2                        [𝐻 ]     𝛼 𝛽 𝛾 𝛿         𝛼+𝛾 −3𝛼+𝛽−𝛾+𝛿 −2𝛽−2𝛾
3.2b ℳℒ 𝒯 , demands that ℒ = m =  𝜌𝑖 𝑔 𝜏𝑏 𝐿   = ℳ                  ℒ        𝒯       , 0.8
     which again implies 𝛼 + 𝛾 = 0, −3𝛼 + 𝛽 − 𝛾 + 𝛿 = 1, 2𝛽 + 2𝛾 = 0. These three
     equations are solved to give 𝛼 = 𝛽 = −𝛾 = 𝛿 − 1, which shows that
                                                              𝛾
                                                   𝑆b
                                        𝐻m ∝                   𝐿1−𝛾
                                                 𝜌𝜌ice 𝑔
      Since we were informed that 𝐻m ∝ √𝐿 , it follows that 𝛾 = 1/2. With the boundary
      condition 𝐻(𝐿) = 0, the solution then take the form
                                                          1/2
                                                 𝑆b
                                     𝐻(𝑥) ∝                       √𝐿 − 𝑥
                                                𝜌ice 𝑔
      The proportionality constant of √2 cannot be determined in this approach.




                                             Page 1 of 6


                            The Greenlandic Ice Sheet                                                         T3

       For the rectangular Greenland model, the area is equal to 𝐴 = 10𝐿2 and the volume is
       found by integrating up the height profile found in problem 3.2b:
                        𝐿                       𝐿    𝜏 𝐿   1/2                            1
       𝑉G,ice = (5𝐿)2 ∫0 𝐻(𝑥) d𝑥 = 10𝐿 ∫0  𝜌 b 𝑔                  1 − 𝑥/𝐿 d𝑥 = 10𝐻m 𝐿2 ∫0 √1 − 𝑥  d𝑥
                                                     ice
3.2c                        2               1       20                                                  0.5
                       2              3/2
             = 10𝐻m 𝐿  − 3 (1 − 𝑥 )           = 3 𝐻m 𝐿2 ∝ 𝐿5/2,
                                            0

       where the last line follows from the fact that 𝐻m ∝ √𝐿. Note that the integral need not
       be carried out to find the scaling with 𝐿. This implies that 𝑉G,ice ∝ 𝐴𝐺 5/4 and the wanted
       exponent is 𝛾 = 5/4.



    According to the assumption of constant accumulation c the total mass accumulation
    rate from an area of width ∆𝑦 between the ice divide at 𝑥 = 0 and some point at 𝑥 > 0
    must equal the total mass flux through the corresponding vertical cross section at 𝑥.
3.3                                                                                       0.6
    That is: 𝜌𝑐𝑥∆𝑦 = 𝜌∆𝑦𝐻m 𝑣𝑥 (𝑥), from which the velocity is isolated:
                                                  𝑐𝑥
                                        𝑣𝑥 (𝑥) =
                                                  𝐻m


    From the given relation of incompressibility it follows that
                                       d𝑣𝑧       d𝑣𝑥        𝑐
                                            =−        =−
3.4                                    d𝑧         d𝑥       𝐻m                                           0.6
    Solving this differential equation with the initial condition 𝑣𝑧 (0) = 0, shows that:
                                                        𝑐𝑧
                                           𝑣𝑧 (𝑧) = −
                                                       𝐻m


    Solving the two differential equations
                                  d𝑧       𝑐𝑧            d𝑥     𝑐𝑥
                                     =−          and         =
                                  d𝑡      𝐻m             d𝑡 𝐻m
    with the initial conditions that 𝑧(0) = 𝐻m , and 𝑥(0) = 𝑥𝑖 gives
                          𝑧(𝑡) = 𝐻m e−𝑐𝑡/𝐻m      and     𝑥(𝑡) = 𝑥𝑖 e𝑐𝑡/𝐻m
3.5 This shows that 𝑧 = 𝐻m 𝑥𝑖 /𝑥, meaning that flow lines are hyperbolas in the 𝑥𝑧-plane. 0.9
    Rather than solving the differential equations, one can also use them to show that
                             d         d𝑥       d𝑧 𝑐𝑥           𝑐𝑧
                                (𝑥𝑧) =     𝑧+𝑥     =     𝑧−𝑥        =0
                             d𝑡         d𝑡      d𝑡 𝐻m           𝐻m
    which again implies that 𝑥𝑧 = const. Fixing the constant by the initial conditions, again
    leads to the result that 𝑧 = 𝐻m 𝑥𝑖 /𝑥.

       At the ice divide, 𝑥 = 0, the flow will be completely vertical, and the 𝑡-dependence of 𝑧
3.6                                                                      𝐻      𝐻                1.0
       found in 3.5 can be inverted to find 𝜏(𝑧). One finds that 𝜏(𝑧) = 𝑐m ln   𝑧m  .




                                                    Page 2 of 6


                                 The Greenlandic Ice Sheet                                                 T3

       The present interglacial period extends to a depth of 1492 m, corresponding to 11,700
       year. Using the formula for 𝜏(𝑧)from problem 3.6, one finds the following accumulation
       rate for the interglacial:
                                  𝐻m               𝐻m
                       𝑐ig =              ln                 = 0.1749 m/year.
                             11,700 years     𝐻m − 1492 m

       The beginning of the ice age 120,000 years ago is identified as the drop in 𝛿 18O in
       figure 3.2b at a depth of 3040 m. Using the vertical flow velocity found in problem 3.4,
               d𝑧       𝑐
       on has 𝑧 = − 𝐻 d𝑡, which can be integrated down to a depth of 3040 m, using a
                            m
3.7a                                                                                                 0.8
       stepwise constant accumulation rate:
                                                       𝐻m −3040 m
                                     𝐻m                           1
                       𝐻m ln                   = −𝐻m                d𝑧
                                 𝐻m − 3040 m          𝐻m          𝑧

                                                  120,000 year              11,700 year
                                           =                   𝑐ia d𝑡 +               𝑐ig d𝑡
                                                 11,700 year            0
                                           = 𝑐ia (120,000 year-11,700 year)+𝑐ig 11,700 year
       Isolating form this equation leads to 𝑐ia = 0.1232, i.e. far less precipitation than now.
       Reading off from figure 3.2b: 𝛿 18O changes from −43,5 ‰ to −34,5 ‰. Reading off
3.7b                                                                                                 0.2
       from figure 3.2a, 𝑇 then changes from −40 ℃ to −28 ℃. This gives ∆𝑇 ≈ 12 ℃.


       From the area 𝐴G one finds that 𝐿 =  𝐴G /10 = 4.14 × 105 m. Inserting numbers in
       the volume formula found in 3.2c, one finds that:
                                                20 5/2 2𝑆b
                                     𝑉G,ice =      𝐿          = 3.45 × 1015 m3
3.8                                              3     𝜌ice 𝑔                                        0.6
       This ice volume must be converted to liquid water volume, by equating the total masses,
                           𝜌
       i.e. 𝑉G,wa = 𝑉G,ice 𝜌ice = 3.17 × 1015 m3 , which is finally converted to a sea level rise,
                                wa
                      𝑉G,wa
       as ℎG,rise =           = 8.79 m.
                       𝐴o




                                                        Page 3 of 6


                          The Greenlandic Ice Sheet                                                  T3




    Figure 3.S1 Geometry of the ice ball (white circle) with a test mass 𝑚 (small gray circle).
   The total mass of the ice is
                      𝑀ice = 𝑉G,ice 𝜌ice = 3.17 × 1018 kg = 5.31 × 10−7 𝑚E
   The total gravitational potential felt by a test mass 𝑚 at a certain height ℎ above the surface
3. of the Earth, and at a polar angle 𝜃 (cf. figure 3.S1), with respect to a rotated polar axis 1.
9 going straight through the ice sphere is found by adding that from the Earth with that from 6
   the ice:
                           𝐺𝑚E 𝑚 𝐺𝑀ice 𝑚                         1        𝑀𝑖𝑐𝑒 /𝑚𝐸
                 𝑈tot = −          −            = −𝑚𝑔𝑅𝐸                 +
                           𝑅E + ℎ         𝑟                 1 + ℎ/𝑅𝐸        𝑟/𝑅𝐸
   where 𝑔 = 𝐺𝑚𝐸 /𝑅𝐸2 . Since ℎ/𝑅E ≪ 1 one may use the approximation given in the
   problem, (1 + x)−1 ≈ 1 − 𝑥, |𝑥| ≪ 1, to approximate this by
                                                 ℎ 𝑀𝑖𝑐𝑒 /𝑚𝐸
                           𝑈tot ≈ −𝑚𝑔𝑅𝐸  1 −       +            .
                                                𝑅𝐸      𝑟/𝑅𝐸
                                                𝑀𝑖𝑐𝑒 /𝑚𝐸
   Isolating ℎ now shows that ℎ = ℎ0 +                     𝑅𝐸 , where ℎ0 = 𝑅𝐸 + 𝑈tot /(𝑚𝑔). Using
                                                 𝑟/𝑅𝐸
   again that ℎ/𝑅E ≪ 1, trigonometry shows that 𝑟 ≈ 2𝑅E |sin(𝜃/2)|, and one has:
                                             𝑀ice /𝑚E          1.69 m
                             ℎ(𝜃) − ℎ0 ≈                𝑅𝐸 ≈            .
                                            2|sin(𝜃/2)|      |sin(𝜃/2)|
   To find the magnitude of the effect in Copenhagen, the distance of 3500 km along the
   surface is used to find the angle 𝜃CPH = (3.5 × 106 m)/𝑅𝐸 ≈ 0.549, corresponding to
   ℎCPH − ℎ0 ≈ 6.25 m. Directly opposite to Greenland corresponds to 𝜃 = 𝜋, which gives
   ℎOPP − ℎ0 ≈ 1.69 m. The difference is then ℎCPH − ℎOPP ≈ 4.56 m, where ℎ0 has dropped
   out.




                                               Page 4 of 6


                       The Greenlandic Ice Sheet                                                      T3




 Figure 3.S2 Same figure as above, but with the relevant forces depicted and showed again
 outside figure for clarity. The blue dotted line indicates the Earth surface. The blue dashed line
 indicates the local sea level, growing towards Greenland and decreasing towards the south pole.

Approach with forces:

This problem can also be solved using forces. The basic equations for mechanical
equilibrium of the test particle is then a simple matter of balancing the two gravitational
forces, 𝐹⃗𝐸 and 𝐹⃗𝐺 , with the reaction force from the Earth, 𝐹⃗𝑅 . Given the angles indicated in
Figure 3.S2, the force balance along locally vertical and horizontal directions, respectively,
read
                                   𝐹𝐸 + 𝐹𝐺 cos(𝛿) = 𝐹𝑅 cos(𝜑)
and
                                      𝐹𝐺 sin(𝛿) = 𝐹𝑅 sin(𝜑)

which can be divided to obtain (using that 𝛿 = 𝜋/2 − 𝜃/2):

                                      𝐹𝐺 sin(𝛿)
                         tan(𝜑) =
                                   𝐹𝐸 + 𝐹𝐺 cos(𝛿)
                                   𝐹𝐺                     1
                                 = cos(𝜃/2)
                                   𝐹𝐸           1 + (𝐹𝐺 /𝐹𝐸 )sin(𝜃/2)
                                   𝐹𝐺
                                 ≈ cos(𝜃/2)
                                   𝐹𝐸
                                   𝑀𝑖𝑐𝑒 /𝑚𝐸
                                 =           cos(𝜃/2)
                                   (𝑟/𝑅𝐸 )2
                                    𝑀𝑖𝑐𝑒 /𝑚𝐸
                                 =              cos(𝜃/2)
                                   4 sin2 (𝜃/2)

where we have plugged in the gravitational forces and the relevant distances. We have also


                                           Page 5 of 6


                      The Greenlandic Ice Sheet                                                       T3

approximated the fraction, using that 𝑀𝑖𝑐𝑒 /𝑚𝐸 = 5.31 × 10−7 ≪ 1, which is only valid
not too close to Greenland, i.e. for a certain size of 𝜃. Since the local sea surface will be
perpendicular to the reaction force, it is seen from figure 3.S2 that

                                          dℎ dℎ d𝜃   1 dℎ
                               tan(𝜑) =     =      =
                                          d𝑥 d𝜃 d𝑥 𝑅𝐸 d𝜃
whereby
                               dℎ       𝑀𝑖𝑐𝑒 /𝑚𝐸
                                  = 𝑅𝐸              cos(𝜃/2)
                               d𝜃      4 sin2 (𝜃/2)

The difference in sea levels in Copenhagen and opposite to Greenland can now be obtained
by integrating this expression. That is

                                          𝑀𝑖𝑐𝑒 𝜃𝐶𝑃𝐻 cos(𝜃/2)
                       ℎCPH − ℎOPP = 𝑅𝐸                          d𝜃
                                          𝑚𝐸 𝜋      4 sin2 (𝜃/2)
                                          𝑀𝑖𝑐𝑒 sin(𝜃𝐶𝑃𝐻/2) −2
                                     = 𝑅𝐸                  q d𝑞
                                          2 𝑚𝐸 1
                                          𝑀𝑖𝑐𝑒       1
                                     = 𝑅𝐸                    − 1
                                          2 𝑚𝐸 sin(𝜃𝐶𝑃𝐻 /2)

where we have made the substitution 𝑞 = sin(𝜃/2). Plugging in the numbers found above,
we obtain again ℎCPH − ℎOPP ≈ 4.56. Note that this solution strategy necessarily involves
consideration of tangential force components alongside with the radial components.

 Total                                                                                          9.0




                                          Page 6 of 6
