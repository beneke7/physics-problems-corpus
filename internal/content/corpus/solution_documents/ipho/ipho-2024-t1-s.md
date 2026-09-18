---
id: solution-document-ipho-2024-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2024/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2024-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2024/T1_S.pdf."
---

S1-1
A. Earth as a blackbody

A-1. All the energy emitted from the surface of the Sun, will reach a sphere of radius 𝑑 , therefore:


𝜎𝑇S4 . (4𝜋𝑅S2 ) = (4𝜋𝑑2 ). 𝑆0
                                                                                    2
        4
             𝑅S 2                       W                            6.96 × 108 m                 W
 𝑆0 = 𝜎𝑇S . ( ) = 5.67 × 10−8                 × (5.77 × 10 3
                                                             K)4
                                                                 × (              ) = 1.35 × 10 3
                𝑑                      m2 K 4                        1.5 × 1011 m                 m2

 A-1 (0.6 pt)

                𝑅   2
 𝑆0 = 𝜎𝑇S4 . ( S)                                      , Numerical value of 𝑆0 = 1.35 × 103 W/m2
                𝑑


A-2. It is assumed that the Earth is in thermal equilibrium. Therefore, the energy it receives per unit
    time should be equal to the energy it radiates per unit time. The Earth’s cross-section intercepting
    the solar radiation at this distance has an area of 𝜋𝑅E2 , but the Earth radiates heat from all points
    on its surface with an area of 4𝜋𝑅E2 , so:
                                                                    1
                                                               𝑆0 4
                              𝜋𝑅E2 . 𝑆0 = 4𝜋𝑅E2 𝜎𝑇E4   → 𝑇E = ( ) = 278 K
                                                               4𝜎

 A-2 (0.6 pt)
            1
       𝑆 4     𝑅
 𝑇E = ( 0 ) = √ S 𝑇S                                          , Numerical value of 𝑇E = 278 K
       4𝜎      2𝑑


A-3. The radiation is maximum at the wavelength for which the derivative of 𝑢 with respect to 𝜆 is
     zero:
                                                                ℎ𝑐
                    𝑑𝑢 2𝜋ℎ𝑐 2     1                ℎ𝑐     𝑒𝑥𝑝(       )
                                                               𝜆𝑘B 𝑇
                       =      .           . [−5 +                      ]
                    𝑑𝜆   𝜆6 𝑒𝑥𝑝( ℎ𝑐 ) − 1         𝜆𝑘B 𝑇 𝑒𝑥𝑝( ℎ𝑐 ) − 1
                                𝜆𝑘B 𝑇                       𝜆𝑘B 𝑇

                                                                    ℎ𝑐
                        𝑑𝑢                          ℎ𝑐      𝑒𝑥𝑝 (         )
                                                                  𝜆m 𝑘B 𝑇
                           |    =0         ⇒                                =5
                        𝑑𝜆 𝜆=𝜆m                   𝜆m 𝑘𝐵 𝑇 𝑒𝑥𝑝 ( ℎ𝑐 ) − 1
                                                               𝜆m 𝐾B 𝑇
                         ℎ𝑐
    Defining 𝑥m ≡ 𝜆 𝑘 𝑇 we obtain the following transcendental equation:
                        m B


                                          5(1 − 𝑒 −𝑥m ) − 𝑥m = 0


                                                                                   S1-2
 A-3 (0.4 pt)

 𝑓(𝑥) = 5(1 − 𝑒 −𝑥 ) − 𝑥


                         (1)
A-4. The first guess is 𝑥m = 5 . Substituting repeatedly for 𝑥m we can continue as follows:
                                         (2)
                                     𝑥m = 5(1 − 𝑒 −5 ) = 4.97
                                     (3)
                                    𝑥m = 5(1 − 𝑒 −4.97 ) = 4.97

     Further iterations do not change the value of 𝑥m to three significant figures, so:

            ℎ𝑐                                    1
  𝜆m 𝑇 =         = 𝑏 = 1240 eV ∙ nm ×                           = 2.89 × 106 nm ∙ K
           𝑥m 𝑘B                      4.97 × 8.62 × 10−5 eVK −1

 A-4 (0.4 pt)

 𝑥m = {4.96,4.97}                              , Numerical value of 𝑏 = [2.89,2.90] × 106 nm ∙ K


A-5. Using Wien’s displacement law and the constant 𝑏 obtained in the previous part, we can calculate
    the wavelength at which the radiation from the Sun and the Earth reaches its maximum:


                               𝑏    2.89 × 106 nm ∙ K
                   𝜆Sun
                    max =         =                   = [5.01, 5.02] × 102 nm
                               𝑇S     5.77 × 103 K

                                  𝑏    2.89 × 106 nm ∙ K
                       𝜆Earth
                        max =        =                   = 1.04 × 104 nm
                                  𝑇E         278 K

 A-5 (0.2 pt)

                         2                                                  4
 𝜆Sun
  max = [5.01, 5.02] × 10 nm                              , 𝜆Earth
                                                             max = 1.04 × 10 nm




A-6. From the diagram, it can clearly be seen that 𝛾𝑢̃S (𝜆Smax ) = 𝑢(𝜆Earth
                                                                      max , 𝑇E ) , so we have:


               Sun
                        𝑅S 2    2𝜋ℎ𝑐 2          1              𝑅S 2 2𝜋ℎ𝑐 2      1
         𝑢̃S (𝜆max ) = ( )            5                    = (   )
                        𝑑      (𝜆Sun           ℎ𝑐              𝑑 (𝜆Sun )5 𝑒𝑥𝑝 ( ℎ𝑐 ) − 1
                                 max ) 𝑒𝑥𝑝 ( Sun       )−1           max
                                            𝜆max 𝑘B 𝑇S                         𝑘B 𝑏



                                2𝜋ℎ𝑐 2               1                 2𝜋ℎ𝑐 2       1
            𝑢(𝜆Earth
               max , 𝑇E ) =            5                          =           5
                               (𝜆Earth               ℎ𝑐               (𝜆Earth       ℎ𝑐
                                 max ) 𝑒𝑥𝑝 (                )−1         max ) 𝑒𝑥𝑝 (     )−1
                                                 𝜆Earth                            𝑘B 𝑏
                                                  max 𝑘B 𝑇E

Dividing these two quantities we’ll find:


                                                                                        S1-3
                                         𝑑 2     𝑇E 5
                                    𝛾= (   ) × (    ) = [1.20,1.21] × 10−2
                                        𝑅S       𝑇S

 A-6 (0.8 pt)

                                                      5
        𝑑 2           𝑇       5    𝑑   2       𝜆Sun
 𝛾 = ( ) × ( E ) = ( ) × ( Earth
                           max
                                 )                            , Numerical value of 𝛾 = [1.20,1.21] × 10−2
       𝑅S             𝑇S          𝑅S           𝜆max




B. The Greenhouse Effect

B-1. Both the Earth and its atmosphere are in thermal equilibrium, so one can write an equation that
    balances the input and output powers. For the Earth we have:

                                  (𝜋𝑅E2 )(1 − 𝑟A )𝑆0 + (4𝜋𝑅E2 )𝜎𝑇A4 = (4𝜋𝑅E2 )𝜎𝑇E4 ,

    and for the atmosphere:

                                               (4𝜋𝑅E2 )𝜎𝑇E4 = 2(4𝜋𝑅E2 )𝜎𝑇A4 .

    Note that the coefficient 2 on the right-hand side of the equation is due to the atmosphere
    radiating heat on both sides (above and below). Eliminating 𝑇𝐸 from the two relations we
    obtain:
                                           1
                         𝑆 4
                (1 − 𝑟A ) 0                                                       1
          𝑇A = (          4 ) = 2.58 × 102 K                      ⇒    𝑇E = (2𝑇A4 )4 = 3.07 × 102 K
                    𝜎



 B-1 (1.0 pt)
                          1
                 𝑆
          (1−𝑟A ) 0 4
 𝑇A = (           4
                      )                                       , Numerical value of 𝑇𝐴 = 2.58 × 102 K
              𝜎

                          1
               𝑆
        (1−𝑟A ) 0 4
 𝑇E = (           2
                      )                                       , Numerical value of 𝑇E = 3.07 × 102 K
              𝜎




B-2. As can be seen in the figure, a fraction (1 − 𝑟A ) of the solar radiation reaches the Earth’s surface
    after traversing the atmosphere. A fraction 𝑟E of this light is reflected back and reaches the
    atmosphere, where a fraction 𝑟A is reflected and returns to the Earth’s surface. This process
    repeats ad infinitum and the sum of the powers transmitted at all these instances, determines the
    albedo. Denoting the power returned to space after 𝑛 reflections by 𝑆̃𝑛 , we’ll have 𝑆̃0 = 𝑟A 𝑆0 and


                                                                                                 S1-4
    the remaining power i.e. (1 − 𝑟A )𝑆0 , reaches the Earth’s surface. From this power, (1 − 𝑟A )𝑟E 𝑆0
    is reflected, and a fraction 1 − 𝑟A of it is transmitted through the atmosphere to the space, hence:
                                                                      (1 − 𝑟A )2
                                       𝑆̃1 = (1 − 𝑟A )2 𝑟E 𝑆0 =                  𝑟E 𝑆̃0
                                                                         𝑟A

    The power that is reflected back to the Earth by the atmosphere after (𝑛 − 1) reflections is
            𝑟
    𝑆̃𝑛−1 ( A ), of which a fraction 𝑟E is again sent back towards the atmosphere on the 𝑛’th
          1−rA
    reflection, and the atmosphere allows a fraction 1 − 𝑟A of this reflected power to escape into the
    space, thus:

                                    𝑆̃𝑛−1
                           𝑆̃𝑛 =          𝑟 𝑟 × (1 − 𝑟A ) = 𝑟A 𝑟E 𝑆̃𝑛−1 = (𝑟A 𝑟E )𝑛−1 𝑆̃1
                                   1 − 𝑟A A E

    By adding all these terms, one obtains the power returned per unit area from the Earth-atmosphere
    system:
                       ∞                     ∞
                                                                                                1
                𝑆̃ = ∑ 𝑆̃𝑛 = 𝑆̃0 + 𝑆̃1 ∑(𝑟A 𝑟E )𝑛−1 = 𝑟A 𝑆0 + (1 − 𝑟A )2 𝑟E 𝑆0 ×
                                                                                             1 − 𝑟A 𝑟E
                       𝑛=0                  𝑛=1

                                                 (1 − 𝑟A )2 𝑟E
                                     = [𝑟A +                   ] × 𝑆0
                                                  1 − 𝑟A 𝑟E

    Dividing by the solar constant we get the value for albedo:

                                       𝑆̃      (1 − 𝑟A )2 𝑟E
                                    𝛼 = = 𝑟A +               = 3.13 × 10−1
                                       𝑆0       1 − 𝑟A 𝑟E


 B-2 (1.6 pt)

            (1−𝑟A )2 𝑟E
 𝛼 = 𝑟A +    1−𝑟A 𝑟E
                                                                              , Numerical value of 𝛼 = 3.13 × 10−1


B-3. Again, thermal equilibrium requires the input and output powers to be equal both for the Earth
    and for the atmosphere, the only difference being that the Earth absorbs now a fraction 1 − 𝛼 of
    the Sun’s radiation. Thus, for Earth we have:

                                (4𝜋𝑅E2 )𝜖𝜎𝑇A4 + (𝜋𝑅E2 )(1 − 𝛼)𝑆0 = (4𝜋𝑅E2 )𝜎𝑇E4 ,

    and for the atmosphere:

                                          (4𝜋𝑅E2 )𝜖𝜎𝑇E4 = 2(4𝜋𝑅E2 )𝜖𝜎𝑇A4
                                                     1                                       1
                                     (1 − 𝛼)       4                                     𝑇E4 4
                             𝑇E = [           𝑆0 ]                ,                𝑇A = ( )
                                    2𝜎(2 − 𝜖)                                             2


                                                                                        S1-5
                                  (1 − 𝛼)                  (1 − 𝛼)
                        [𝜎𝑇E4 −      4
                                          𝑆0 ]     [𝜎𝑇E4 −    4
                                                                   𝑆0 ]
                  𝜖=                           = 2                      = [8.07, 8.11] × 10−1
                                  𝜎𝑇A4                     𝜎𝑇E4



 B-3 (1.0 pt)
                       1
          (1−𝛼)
 𝑇E = [2𝜎(2−𝜖) 𝑆0 ]4                                           , Numerical value of 𝜖 = [8.07 , 8.11] × 10−1




B-4.
                                                                1
                                         𝑑𝑇E 1 (1 − 𝛼)𝑆0 4 1
                                            = [         ]
                                         𝑑𝜖  4 2𝜎(2 − 𝜖) (2 − 𝜖)



                   𝑑𝑇E 𝑑𝜖      4𝜎𝑇E4       𝑇E
           𝑑𝑇E =      𝜖   =[           − 1] × 0.01 = [4.87,4.92] × 10−1
                   𝑑𝜖 𝜖      (1 − 𝛼)𝑆0     4



 B-4 (0.8pt)
                    1
 𝑑𝑇E   1 (1−𝛼)𝑆 4 1
  𝑑𝜖
     = 4 [2𝜎(2−𝜖)0 ] (2−𝜖)                               , Numerical value of 𝛿𝑇E = [4.87,4.92] × 10−1 K



B-5. The equations for thermal equilibrium are similar to those for Part B.3, only a non-radiative
     thermal current needs to be added. For the Earth:



               (𝜋𝑅E2 )(1 − 𝛼)𝑆0 + (4𝜋𝑅E2 )𝜖𝜎𝑇A4 = (4𝜋𝑅E2 )𝜎𝑇E4 + (4𝜋𝑅E2 )𝑘(𝑇E − 𝑇A ),

       and for the atmosphere:

                           (4𝜋𝑅E2 )𝜖𝜎𝑇E4 + (4𝜋𝑅E2 )𝑘(𝑇E − 𝑇A ) = 2(4𝜋𝑅E2 )𝜖𝜎𝑇A4 .

       After completing the calculations, we will have:

                                                   𝑆
                                     𝜎𝑇E4 − (1 − 𝛼) 40
                              𝜖=                            = [8.47,8.52] × 10−1
                                         𝜎(𝑇E4 − 𝑇A4 )


                        4     4         4           𝑆0
     𝜖𝜎(2𝑇A4 − 𝑇E4 ) (2𝑇A − 𝑇E ) × [𝜎𝑇E − (1 − 𝛼) 4 ]
  𝑘=                =                                  = [3.57,3.66] × 10−1 W/m2 K
        𝑇E − 𝑇A           (𝑇E4 − 𝑇A4 ) × (𝑇E − 𝑇A )


                                                                                       S1-6
 B-5 (1.6pt)

                   𝑆
      𝜎𝑇E4 −(1−𝛼) 0
 𝜖=                 4
                                             , Numerical value of 𝜖 = [8.47,8.52] × 10−1
        𝜎(𝑇E4 −𝑇A4 )




                                   𝑆
      (2𝑇A4 −𝑇E4 )×[𝜎𝑇E4 −(1−𝛼) 0 ]
 𝑘=                                 4
                                             , Numerical value of 𝑘 = [3.57,3.66] × 10−1 W/m2 K
           (𝑇E4 −𝑇A4 )×(𝑇E −𝑇A )




B-6. In order to find the change in the temperatures of the Earth and the atmosphere in terms of 𝜖 and
      𝑘, we take the logarithm of both sides of the relations before taking the derivative:


                                                       𝑆0
                           𝑙𝑛 𝜖 = 𝑙𝑛 [𝜎𝑇E4 − (1 − 𝛼)      ] − 𝑙𝑛 𝜎 − 𝑙𝑛 (𝑇E4 − 𝑇A4 )
                                                       4

                            𝑙𝑛 𝑘 = 𝑙𝑛 𝜖 + 𝑙𝑛 𝜎 + 𝑙𝑛(2𝑇A4 − 𝑇E4 ) − 𝑙𝑛(𝑇E − 𝑇A )


                                            𝑑𝑇            𝑑𝑇         𝑑𝑇
                              1       4𝜎𝑇E3 E         4𝑇E3 E − 4𝑇A3 A
                                =           𝑑𝜖      −     𝑑𝜖         𝑑𝜖
                              𝜖                 𝑆            4     4
                                  𝜎𝑇E4 − (1 − 𝛼) 40        𝑇E  − 𝑇A



                                         3 𝑑𝑇A      3 𝑑𝑇E   𝑑𝑇E 𝑑𝑇A
                                     1 8𝑇A 𝑑𝜖 − 4𝑇E 𝑑𝜖      𝑑𝜖
                                                                −
                                                                   𝑑𝜖
                                   0= +       4   4       −
                                     𝜖     2𝑇A − 𝑇E          𝑇E − 𝑇A

                       1      4𝑇E3     𝑑𝑇E            8𝑇A3      1     𝑑𝑇A
                  𝜖[       + 4     4 ]     = 1 + 𝜖 [  4    4 +      ]
                    𝑇E − 𝑇A 2𝑇A − 𝑇E 𝑑𝜖             2𝑇A − 𝑇E 𝑇E − 𝑇A 𝑑𝜖



                              4𝑇E3        4𝜎𝑇E3        𝑑𝑇E     4𝑇A3     𝑑𝑇A
                        1+𝜖[ 4     4 −               ]     =  4     4 𝜖
                            𝑇E − 𝑇A 𝜎𝑇 4 − (1 − 𝛼) 𝑆0 𝑑𝜖     𝑇E − 𝑇A 𝑑𝜖
                                       E           4

Solving this set of linear equations and substituting 𝜖 in B-5, we find:


                                                                                  S1-7
                                  𝜎(𝑇E4 − 𝑇A4 )𝑇E4 − 𝑇A4        8𝑇A3           1
                           [          ] [1 + (      3    ) [    4      4 + 𝑇 − 𝑇 ]]
                                   𝑆              4𝑇A        2𝑇A − 𝑇E
      𝑑𝑇E          𝜎𝑇E4 − (1 − 𝛼) 40                                        E     A
          =
      𝑑𝜖                                               𝑆
                1        4𝑇E3         𝜎𝑇A4 − (1 − 𝛼) 40 𝑇E 3              8𝑇A3      1
            [𝑇 − 𝑇 + 4        4 ] −  (                     )  (    ) [    4     4 +     ]
                      2𝑇A − 𝑇E                         𝑆        𝑇A     2𝑇A − 𝑇E 𝑇E − 𝑇A
              E   A
                                      𝜎𝑇E4 − (1 − 𝛼) 40

                                   𝑇4 − 𝑇4      8𝑇 3           1
                             1 + ( E 3 A) [ 4 A 4 + 𝑇 − 𝑇 ]
        𝑑𝑇E                          4𝑇A     2𝑇A − 𝑇E       E      𝐴
      𝜖     =
        𝑑𝜖                                           𝑆
                  1     4𝑇E3         𝜎𝑇A4 − (1 − 𝛼) 40 𝑇E 3          8𝑇A3      1
              [𝑇 − 𝑇 + 4      4 ] − (                  ) (    )  [   4    4 +       ]
                      2𝑇A − 𝑇E                       𝑆     𝑇A      2𝑇A − 𝑇E 𝑇E − 𝑇A
                E   A
                                     𝜎𝑇E4 − (1 − 𝛼) 40

                                                𝑑𝑇E 𝑑𝜖
                                      𝑑𝑇E = 𝜖          = [5.21 , 5.28] × 10−1 K
                                                𝑑𝜖 𝜖


B-6 (1.0pt)


                  1            4𝑇3E𝑑𝑇E                   8𝑇3           1     𝑑𝑇
          𝜖 [𝑇 −𝑇 +          4  4 ] 𝑑𝜖    = 1+𝜖       [ 4 A 4 𝑇 −𝑇 ] 𝑑𝜖A
                                                               +
              E       A   2𝑇A −𝑇E                      2𝑇A −𝑇E       E    A
(a)
                           4𝑇3          4𝜎𝑇3E        𝑑𝑇E       4𝑇3A      𝑑𝑇A
              1+𝜖       [ 4 E4        −
                                      4        𝑆 0
                                                   ]  𝑑𝜖
                                                          =    4    𝜖
                                                                    4     𝑑𝜖
                         𝑇E −𝑇A    𝜎𝑇E − 1−𝛼 4
                                         (    )              𝑇 E −𝑇 A
         {




(b) 𝛿𝑇E = [5.21 , 5.28] × 10−1 K
