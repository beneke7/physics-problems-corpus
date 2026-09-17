---
id: solution-document-ipho-2019-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2019/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2019-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2019/T1_S.pdf."
---

Theory IPhO 2019                                                                              Q1-1
                                                                                                 S1-1
Zero-length springs and slinky coils – Solution
Part A: Statics
A.1 The force 𝐹 causes the spring to change its length from 𝐿0 to 𝐿. Since equal parts of the
                                                                  Δ𝑦   𝐿        𝐿
spring are extended to equal lengths, we get: Δ𝑙 = 𝐿 → Δ𝑦 = 𝐿 Δ𝑙.
                                                                       0        0

                      𝐹                                   𝐹
Since 𝐿 = max {𝑘 , 𝐿0 }, we get Δ𝑦 = max⁡{𝑘𝐿 Δ𝑙, Δ𝑙}. From this result we see that any piece of
                                                              0
                                                                                    𝐿
length Δ𝑙 the spring behaves as a ZLS with spring constant 𝑘 ∗ = 𝑘 0.
                                                                                    Δ𝑙


                                                                                            𝑘𝐿
A.2 Let us compute the work of the force. From Task A.1: 𝑑𝑊 = 𝐹(𝑥)𝑑𝑥 = Δ𝑙0 𝑥𝑑𝑥.
                                                Δ𝑦
                      Δ𝑦 𝑘𝐿0           𝑘𝐿 𝑥 2            𝑘𝐿
Hence, Δ𝑊 = ∫Δ𝑙               𝑥𝑑𝑥 = Δ𝑙0 2 |          = 2Δ𝑙0 (Δ𝑦 2 − Δ𝑙 2 )⁡⁡.
                           Δ𝑙                   Δ𝑙




A.3. At every point along the statically hanging spring the weight of the mass below is balanced
by the tension from above. This implies that at the bottom of the spring there is a section of
length 𝑙0 whose turns are still touching each other, as their weight is insufficient to exceed the
threshold force 𝑘𝐿0 to pull them apart. The length 𝑙0 can be derived from the equation:
𝑙0                               𝑘𝐿2
  𝑀𝑔 = 𝑘𝐿0 , hence 𝑙0 = 𝑀𝑔0 = 𝛼𝐿0 .
𝐿0




                                                                                                       𝑙
For 𝑙 > 𝑙0 , a segment of the unstretched spring between 𝑙 and 𝑙 + d𝑙 feels a weight of 𝐿 𝑀𝑔
                                                                                                       0
                                                                                    𝐹       𝑙    𝑑𝑙
from beneath, which causes its length to stretch from d𝑙 to 𝑑𝑦 = 𝑘𝐿 𝑑𝑙 = 𝐿 𝑀𝑔 𝑘𝐿 =
                                                                                        0   0     0
𝑀𝑔           𝑙
       𝑙𝑑𝑙 = 𝑙 𝑑𝑙 .
𝑘𝐿20          0


Integration of the last expression over the stretched region, up to the point 𝐿0 , gives its height
when the spring is stretched
                           𝐿0
                                                     𝐿
                       𝑙         𝑙2 0         1 2       2
                                                              𝐿20 𝑙0 𝐿0  1
            𝐻 = 𝑙0 + ∫ 𝑑𝑙 = 𝑙0 +    | = 𝑙0 +     (𝐿0 − 𝑙0 ) =    + = (𝛼 + )⁡
                      𝑙0         2𝑙0 𝑙       2𝑙0              2𝑙0 2  2   𝛼
                          𝑙0                         0
    Theory IPhO 2019                                                                      Q1-1
                                                                                    S1-2
Part B: Dynamics
                                          𝑙2   𝑙
B.1. From Task A.3 we have 𝐻(𝑙) = 2𝑙 + 20. We now calculate the position of the center of
                                           0
mass of the suspended spring. The contribution of the unstretched section of height 𝑙0 at the
                            𝑙                      𝑙
bottom, having a mass of 𝐿0 𝑀 = 𝛼𝑀, is 𝛼𝑀 20 . The position of the center of mass is obtained by
                                0
summing the contributions of its elements:
                                     𝐿0                       𝐿0
             1 𝑙0               1 𝛼𝐿0          𝑙 2 𝑙0 𝑀𝑑𝑙
        𝐻𝑐𝑚 = [ 𝛼𝑀 + ∫ 𝐻(𝑙)𝑑𝑚] = [    𝛼𝑀 + ∫ (    + )     ⁡]
             𝑀 2                𝑀 2            2𝑙0 2 𝐿0
                                    𝑙0                       𝑙0
                                                       𝐿0
                            𝛼 2 𝐿0 1 𝑙 3 𝑙0     𝛼 2 𝐿0 1 𝐿30 − 𝑙03 𝑙0
                        =         + [    + 𝑙] =       + [         + (𝐿0 − 𝑙0 )]
                              2    𝐿0 6𝑙0 2 𝑙     2    𝐿0 6𝑙0      2
                                                       0

                                    𝑑𝑙
Where we have used 𝑑𝑚 = 𝐿 𝑀. Substituting 𝑙0 = 𝛼𝐿0 yields
                                     0

                                                     1 𝛼2 𝛼
                                          𝐻𝑐𝑚 = 𝐿0 [ −   + ]
                                                    6𝛼 6  2
                                                                                      𝐿
When the spring is contracted to its free length 𝐿0 , its center of mass is located at 20. From the
falling of the center of mass at acceleration 𝑔 we get:

                    𝑔 2         𝐿0      1 𝛼2 𝛼 1   𝐿0
                      𝑡𝑐 = 𝐻𝑐𝑚 − = 𝐿0 [ −   + − ]=    (1 − 𝛼)3
                    2           2      6𝛼 6  2 2   6𝛼

               0𝐿
Hence, 𝑡𝑐 = √3𝑔𝛼 (1 − 𝛼)3 .


For 𝑘 = 1.02 N/m, 𝐿0 = 0.055 m, 𝑀 = 0.201 kg, and 𝑔 = 9.80 m/s2, we have⁡𝛼 = 0.0285, and
𝑡𝑐 = 0.245⁡s.

                                                                                             (𝐿0 −𝑙)
B.2. The moving top section of the spring is pulled down by its own weight, 𝑚𝑡𝑜𝑝 𝑔 = 𝑀𝑔               ⁡
                                                                                               𝐿0
and also by the tension in the spring below, which is equal to the weight 𝑀𝑔𝑙/𝐿0 of the
stationary section of the spring. Thus, the moving top section experiences a constant force 𝐹 =
𝑀𝑔 throughout its whole fall. Another way to see that, is that a total force of 𝑀𝑔 is exerted on
the spring, but only the moving part experiences it. Let’s calculate the position of the center of
mass at equilibrium of the upper part, i.e., all points with 𝑙 ′ > 𝑙 for some 𝑙 > 𝑙0 . From part A,
       Theory IPhO 2019                                                                                         Q1-1
                                                                                                          S1-3
                                                                                       𝑙′2
the position of a small portion l ' with coordinate l ' is: 𝐻(𝑙 ′ ) = 2𝑙 + 20 and the center of
                                                                                                     𝑙
                                                                                            0
mass of this part is:
                                              𝐿0                                 𝐿0
                              𝐿0                      𝐿0        𝑙 ′2 𝑙0
             𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟−𝑖 =           ∫ 𝐻(𝑙 ′ )𝑑𝑚 =           ∫(     + ) 𝑑𝑚
                           𝑀(𝐿0 − 𝑙)               𝑀(𝐿0 − 𝑙)   2𝑙0 2
                                             𝑙                                   𝑙
                                                 𝐿0                                             𝐿0
                                   𝐿0        𝑙 ′2 𝑙0 𝑀𝑑𝑙 ′       1        𝑙 ′2 𝑙0
                              =           ∫(     + )       ⁡=          ∫(     + ) 𝑑𝑙′⁡
                                𝑀(𝐿0 − 𝑙)   2𝑙0 2 𝐿0          (𝐿0 − 𝑙)    2𝑙0 2
                                                 𝑙                                              𝑙
                                                         ′ 𝐿_0
                                     1      𝑙    ′3
                                                 𝑙0 𝑙                𝐿20 + 𝐿0 𝑙 + 𝑙 2           𝑙0
                              =           [    +      ]          =                      +
                                  (𝐿0 − 𝑙) 6𝑙0    2 𝑙                      6𝑙0                  2

The position of the upper part of CM when it contracts to a length 𝐿0 − 𝑙 is 𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟−𝑓 =
𝑙2      𝑙    1
      + 20 + 2 (𝐿0 − 𝑙). The change in the CM during the contraction process is: Δ𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟 =
2𝑙0
                                         𝐿2 +𝐿 𝑙−2𝑙2     1                (𝐿0 −𝑙)(𝐿0 +2𝑙)            1
𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟−𝑖 − 𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟−𝑓 = 0 6𝑙0                      − 2 (𝐿0 − 𝑙) =                           − 2 (𝐿0 − 𝑙).
                                                 0                               6𝑙0

                                                                          𝐹𝐿           𝑔𝐿
The acceleration of the CM of the upper part is 𝑎𝐶𝑀 = 𝑀(𝐿 0−𝑙) = 𝐿 −𝑙
                                                                   0
                                                                      .
                                                                           0            0
                                                  2
From the work energy theorem we get the equation 𝑣𝑢𝑝𝑝𝑒𝑟−𝑓 = 2𝑎𝐶𝑀 Δ𝐻𝑐𝑚−𝑢𝑝𝑝𝑒𝑟 , hence

              2
                               𝑔𝐿0 (𝐿0 − 𝑙)(𝐿0 + 2𝑙) 1                 𝐿0 + 2𝑙 1
             𝑣𝑢𝑝𝑝𝑒𝑟−𝑓 =2             [              − (𝐿0 − 𝑙)] = 2𝑔 [        − 𝐿0 ]
                              𝐿0 − 𝑙         6𝛼𝐿0    2                   6𝛼    2
                                 2𝑔        1
                               =     𝑙 + ( − 1) 𝑔𝐿0
                                 3𝛼       3𝛼
                      2𝑔             1
Therefore, 𝐴 = 3𝛼 and 𝐵 = (3𝛼 − 1) 𝑔𝐿0 .

                                 2                           1−𝛼                  2
Note that for 𝑙 = 𝐿0 , we have ⁡𝑣𝑢𝑝𝑝𝑒𝑟−𝑓 = 𝐿0 𝑔 𝛼 and for 𝑙 = 𝑙0 = 𝛼𝐿0 , we get ⁡𝑣𝑢𝑝𝑝𝑒𝑟−𝑓 =
       1−𝛼
𝐿0 𝑔 3𝛼 , hence, the moment we release the spring its velocity is finite (not zero, the meaning is
that it accumulate this velocity in time that is much shorter than the contracting time t c ) and it
                 1
decreases to          of the initial value when 𝑙 = 𝑙0 .
                 √3



B.3. Note that even though the center of mass of the spring accelerates downwards constantly,
the moving top section actually decelerates, while the position of the center of mass moves
down the spring. The speed of the top section 𝑣(𝑙), calculated in Task B2, decreases and
       Theory IPhO 2019                                                                   Q1-1
                                                                                       S1-4
approaches the value √𝐴𝛼𝐿0 + 𝐵 immediately before it attaches to the bottom section of
height 𝑙0 = 𝛼𝐿0 , which was unstretched and at rest. Once the moving top section attaches to
the resting bottom section, its momentum is shared between both sections, so the speed
further decreases just before the whole spring starts accelerating downwards as a single mass.
Thus, the minimum speed is that of the whole spring immediately after its full collapse. From
momentum conservation, we have
                                                            𝑙0
                          𝑀𝑣𝑚𝑖𝑛 = 𝑚𝑡𝑜𝑝 𝑣(𝑙0 ) = 𝑀 (1 −         ) √𝐴𝛼𝐿0 + 𝐵
                                                            𝐿0

                                      𝑣𝑚𝑖𝑛 = (1 − 𝛼)√𝐴𝛼𝐿0 + 𝐵

Part C: Energetics
C.1. From the moment the spring is released, the acceleration of its center of mass is governed
by the external force 𝑀𝑔 and therefore the gravitational potential energy of the spring is fully
converted into the kinetic energy of the center of mass of the spring, which just before hitting
the ground is equal to the kinetic energy of the spring.
All that is left is the elastic energy stored in the spring, which is converted into heat, sound, etc.
To calculate it, we consider the elastic energy stored in a segment 𝑑ℎ of the stretched spring,
which when unstretched lies between 𝑙 and 𝑙 + d𝑙, using the result of Task A.2, Δ𝑊 =
𝑘𝐿0                                                                      𝑙
      (Δ𝑙22 − Δ𝑙 2 ), by choosing Δ𝑙 = 𝑑𝑙 and Δ𝑙2 = 𝑑𝑦, and using 𝑑𝑦 =        𝑑𝑙 (which was obtained
2Δ𝑙                                                                      𝑙0
in Task A.3), we get:
         𝑘𝐿   𝑙2
𝑑𝑊 = 20 (𝑙2 − 1) 𝑑𝑙. Integrating from 𝑙0 to 𝐿0 we find
              0

                    𝐿0
                                                        𝐿
                  𝑘𝐿0 𝑙 2        𝑘𝐿0 𝑙 3       0
                                                 𝑘𝐿0 𝐿30 − 𝑙03
              𝑊=∫    ( − 1) 𝑑𝑙 =    [    − 𝑙] =     (          − (𝐿0 − 𝑙0 ))
                   2 𝑙02          2 3𝑙02     𝑙
                                                  2     3𝑙02
                   𝑙0                                   0

                               𝑘𝐿20
                                  1−𝛼 ⁡    3
                                                 𝑘𝐿20
                            =   (     2
                                        − − 𝛼)) = 2 (1 − 𝛼)2 (2𝛼 + 1)
                                         (1
                              2    3𝛼            6𝛼
                                   (1 − 𝛼)2 (2𝛼 + 1)
                            = 𝑀𝑔𝐿0
                                          6𝛼
