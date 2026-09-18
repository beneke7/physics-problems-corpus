---
id: solution-document-ipho-2018-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2018/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2018-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2018/T3_S.pdf."
---

Secretariado   Sociedade Portuguesa de F
                                        IPhO 2018      Avenida da República Nº45
                                                       1050-187 Lisboa, Portugal




         Secretariado IPhO 2018
         Sociedade Portuguesa de Física
                                                                     Confidential
         Avenida da República Nº45 3ºEsq
Solutions1050-187 Lisboa,
           to Theory      Portugal 3
                        Problem
          +351 21 799 36 65
          info@ipho2018.pt


    Physics of Live Systems

        (Rui Travasso, Lucília Brito)




               July 24, 2018




                    v1.0


                              Secretariado
                              IPhO 2018
                                                Sociedade Portuguesa de Física
                                                Avenida da República Nº45 3ºEsq
                                                     Theory
                                                1050-187 Lisboa, Portugal
                                                    English (UK)                     ST3-1
                                                                                  +351 21 799 36 65
                                                                                  info@ipho2018.pt




Physics of Live Systems (10 points)
Part A. The physics of blood flow (4.5 points)


A.1

Since the vessel network is symmetrical, the flow in a vessel of level 𝑖 + 1 is half the flow in a vessel of
level 𝑖.
In this way, we can sum the pressure differences in all levels:
                                                 𝑁−1                  𝑁−1
                                                                          𝑅𝑖
                                             Δ𝑃 = ∑ 𝑄𝑖 𝑅𝑖 = 𝑄0 ∑             .
                                                  𝑖=0                 𝑖=0
                                                                          2𝑖




                                                                                                               Confidential
Introducing the radii dependences yields
                                       𝑁−1
                                             8ℓ𝑖 𝜂        8ℓ0 𝜂 𝑁−1 24𝑖/3     8ℓ 𝜂
                           Δ𝑃 = 𝑄0 ∑          𝑖 𝜋𝑟4
                                                    = 𝑄 0    4
                                                                ∑ 𝑖 𝑖/3 = 𝑄0 𝑁 04 .
                                        𝑖=0
                                            2     𝑖       𝜋𝑟 0 𝑖=0  2 2       𝜋𝑟0

Therefore
                                                              𝜋𝑟04
                                                 𝑄0 = Δ𝑃             .
                                                             8𝑁 ℓ0 𝜂
Hence, the flow rate for a vessel network in level 𝑖 is

    A.1                                                                                               1.3pt
                                                          𝜋𝑟4
                                                𝑄𝑖 = Δ𝑃 𝑖+3 0   .
                                                       2 𝑁 ℓ0 𝜂




A.2

Replace values in the formula and change units appropriately

                         Δ𝑃 𝜋𝑟04
               𝑄0    =            =
                         8𝑁 ℓ0 𝜂
                         (55 − 30) × 1.013 × 105 × 3.1415 × (6.0 × 10−5 )4
                     =                                                     = 4.0 × 10−10 m3 /s
                                 760 × 48 × 2.0 × 10−3 × 3.5 × 10−3
to obtain the final value in the requested unites:

    A.2                                                                                               0.5pt
                                                  𝑄0 ≃ 1.5 mℓ/h .


                                 Secretariado
                                 IPhO 2018
                                                    Sociedade Portuguesa de Física
                                                    Avenida da República Nº45 3ºEsq
                                                          Theory
                                                    1050-187 Lisboa, Portugal
                                                         English (UK)                        ST3-2
                                                                                          +351 21 799 36 65
                                                                                          info@ipho2018.pt




A.3

The current is given by
                                                            𝑃in e𝑖𝜔𝑡
                                                    𝐼=               1
                                                                       .
                                                         𝑅 + 𝑖𝜔𝐿 + 𝑖𝜔𝐶
The pressure difference in the capacitor is

                                                    𝑃in e𝑖𝜔𝑡    1        𝑃in e𝑖𝜔𝑡
                             𝑃out e𝑖(𝜔𝑡+𝜙) =                 1
                                                                   =                  .
                                                 𝑅 + 𝑖𝜔𝐿 + 𝑖𝜔𝐶 𝑖𝜔𝐶   𝑖𝜔𝐶𝑅 − 𝜔2 𝐿𝐶 + 1

The amplitude is
                                                             𝑃in
                                          𝑃out =                             .
                                                    √(1 − 𝜔 𝐿𝐶)2 + 𝜔2 𝐶 2 𝑅2
                                                           2

To be smaller than 𝑃in , for 𝜔 → 0:




                                                                                                                      Confidential
                               (1 − 𝜔2 𝐿𝐶)2 + 𝜔2 𝐶 2 𝑅2 > 1 ⟺ −2𝐶𝐿 + 𝐶 2 𝑅2 > 0 .

                                                                  2 2
                                                  64𝜂 ℓ
Replacing the expressions for 𝐿, 𝐶, and 𝑅 we get: 3𝐸ℎ𝑟 3𝜌 > 1 .



     A.3                                                                                                      2.0pt
                                                                  𝑃in
                                          𝑃out =                                      .
                                                    √(1 − 𝜔2 𝐿𝐶)2 + 𝜔2 𝐶 2 𝑅2
                Condition:
                                                         64𝜂2 ℓ2
                                                                 >1.
                                                         3𝐸ℎ𝑟3 𝜌


Alternative way to obtain 𝑃out :
The amplitude of the current in the equivalent circuit is 𝐼0 = 𝑃𝑍in , where

                                                                           1 2
                                                 𝑍 = √𝑅2 + (𝜔𝐿 −             )
                                                                          𝜔𝐶

is the modulus of the impedance. Hence, the voltage amplitude in the capacitor is
                                                 1                𝑃in
                                   𝑃out =          × 𝐼0 =                       .
                                                𝜔𝐶        √𝜔 𝐶 𝑅 + (𝜔2 𝐿𝐶 − 1)2
                                                            2 2 2




A.4

The previous condition can also be expressed as

                                                              64𝜂2 ℓ2
                                                         ℎ<           .
                                                              3𝐸𝑟3 𝜌

For the network referred to in A.2
                 64𝜂2 ℓ02 × 2𝑖        64 × (3.5 × 10−3 )2 × (2.0 × 10−3 )2
           ℎ<                3
                                =                                              × 2𝑖/3 = 7.7 × 10−5 × 2𝑖/3 .
                3 × 22𝑖/3 𝐸𝑟0 𝜌   3 × 0.06 × 106 × (6.0 × 10−5 )3 × 1.05 × 103


                             Secretariado
                             IPhO 2018
                                                 Sociedade Portuguesa de Física
                                                 Avenida da República Nº45 3ºEsq
                                                      Theory
                                                 1050-187 Lisboa, Portugal
                                                     English (UK)                     ST3-3
                                                                                   +351 21 799 36 65
                                                                                   info@ipho2018.pt




For 𝑖 = 0, in the worse case scenario,

                                   ℎmax = 7.7 × 10−5 × 20 = 7.7 × 10−5 m

This value is certainly observed in these vessels since their radius range from 18 𝜇m to 60 𝜇m. A wall
width smaller than 80 𝜇m is certainly reasonable.


      A.4    Maximum ℎ = 8 × 10−5 m                                                                    0.7pt


Part B. Tumor growth (5.5 points)


B.1




                                                                                                                Confidential
The expressions for the masses of tumour and normal tissue are written as:

                                    ⎧ 𝑀T = 𝑉T 𝜌T = 𝑉T 𝜌0 (1 + 𝐾𝑝 )
                                    {                           T


                                    ⎨
                                    { 𝑀 = 𝑉 𝜌 = (𝑉 − 𝑉 )𝜌 (1 + 𝑝 )
                                    ⎩ N        0           T 0     𝐾N

The pressure, 𝑝, can be expressed as
                                                        𝑀T 𝐾T
                                                   𝑝=          − 𝐾T
                                                        𝑉 T 𝜌0
and, then, used in the equation for 𝑀N :

                                                    𝑀N      𝐾       𝑀T 𝑉 𝐾 T
                               𝑀N = (𝑉 − 𝑉T )          [(1 − T ) +           ]
                                                     𝑉      𝐾N     𝑉T 𝑀N 𝐾N

Simplifying and rearranging the terms, the equation for 𝑣 becomes

                                            (1 − 𝜅) 𝑣2 − (1 + 𝜇) 𝑣 + 𝜇 = 0 ,

for which the solution is (the other solution of the quadratic equation is not physically relevant since does
not lead to 𝑣 = 0 for 𝜇 = 0)

      B.1                                                                                              1.0pt
                                        1 + 𝜇 − √(1 + 𝜇)2 − 4𝜇 (1 − 𝜅)
                                     𝑣=                                .
                                                  2(1 − 𝜅)




B.2

For 𝑟 < 𝑅T , the conservation of energy implies that

                                                           d𝑇    4
                                               4𝜋𝑟2 (−𝑘)      = 𝒫 𝜋𝑟3 .
                                                           d𝑟    3


                             Secretariado
                             IPhO 2018
                                                 Sociedade Portuguesa de Física
                                                 Avenida da República Nº45 3ºEsq
                                                      Theory
                                                 1050-187 Lisboa, Portugal
                                                     English (UK)                     ST3-4
                                                                                   +351 21 799 36 65
                                                                                   info@ipho2018.pt




Therefore, the temperature difference to 37 o C = 310.15 K, Δ𝑇 (𝑟), is given by
                                                               𝒫𝑟2
                                                Δ𝑇 (𝑟) = −         + 𝐶,
                                                               6𝑘
where 𝐶 is a constant.
For 𝑟 > 𝑅T , the conservation of energy implies that
                                                           d𝑇    4
                                               4𝜋𝑟2 (−𝑘)      = 𝒫 𝜋𝑅T3 .
                                                           d𝑟    3
Therefore, the temperature difference to 37 o C is
                                                                𝒫𝑅T3
                                                   Δ𝑇 (𝑟) =          .
                                                                3𝑘𝑟
In this case there is no constant, since very far away the increase in temperature is zero.




                                                                                                               Confidential
Matching the two solutions at 𝑟 = 𝑅T gives
                                                             𝒫𝑅T2
                                                      𝐶=          .
                                                              2𝑘
Therefore the temperature at the centre of the tumour, in SI units, is

                                       𝒫𝑅T2
      B.2   Temperature: 310.15 +       2𝑘 .
                                                                                                       1.7pt




B.3

The increase in temperature at the tumour surface (the lower temperature in the tumour) is
                                                                 𝒫𝑅T2
                                                  Δ𝑇 (𝑅T ) =          .
                                                                  3𝑘
This increase should be equal to 6.0 K. Therefore,
                                            3Δ𝑇 𝑘   3 × 6 × 0.6           3
                                   𝒫=         2
                                                  =             = 4.3 kW/m .
                                             𝑅T        0.052


                             3
      B.3   𝒫min = 4.3 kW/m .                                                                          0.5pt




B.4

We can relate 𝛿𝑟 with the pressure in the tumour, using the relation given in the text up to leading order
                     𝑝−𝑃
in 𝑝 − 𝑃cap : 𝛿𝑟 = 2(𝑝 −𝑃cap ) 𝛿𝑟c . Therefore, if 𝑝 − 𝑃cap is very small, also it is 𝛿𝑟.
                   c   cap


The pressure can be related with the volume. We know that
                                  𝑀N    𝜌0 𝑉     𝜌0            𝑝
                                     =        =     = 𝜌0 (1 +    ) .
                                  𝑉N   𝑉 − 𝑉T   1−𝑣           𝐾N


                                 Secretariado
                                 IPhO 2018
                                                 Sociedade Portuguesa de Física
                                                 Avenida da República Nº45 3ºEsq
                                                      Theory
                                                 1050-187 Lisboa, Portugal
                                                     English (UK)                       ST3-5
                                                                                   +351 21 799 36 65
                                                                                   info@ipho2018.pt




And so 𝑝 = 𝐾N𝑣
           1−𝑣 .

When the thinner vessels are narrower, the flow rate in the main vessel is altered:

                           𝑁−1                                 𝑁−2 4𝑖/3
                                8ℓ𝑖 𝜂                  8ℓ0 𝜂 ⎛
                                                             ⎜     2                     24(𝑁−1)/3               ⎞
                                                                                                                 ⎟
      Δ𝑃 = (𝑄0 + 𝛿𝑄0 ) ∑        𝑖    4
                                       = (𝑄 0 + 𝛿𝑄 0 )    4  ⎜ ∑     𝑖  𝑖/3
                                                                            +                                  4 ⎟
                               2  𝜋𝑟 𝑖                 𝜋𝑟 0        2   2        𝑁−1  (𝑁−1)/3          𝛿𝑟
                           𝑖=0
                                                             ⎝
                                                               𝑖=0            2     2        (1 − 𝑟 /2(𝑁−1)/3 ) ⎠
                                                                                                   0


                                                          Δ𝑃                 4 𝛿𝑟
                                 ⟹ Δ𝑃 ≃ (𝑄0 + 𝛿𝑄0 )            (𝑁 − 1 + 1 +       )
                                                          𝑁 𝑄0              𝑟𝑁−1
Noting that 𝛿𝑄
            𝑄
               𝑁−1
                   = 𝛿𝑄
                      𝑄 , we obtain
                        0
              𝑁−1      0


                                            𝛿𝑄𝑁−1       1                     4 𝛿𝑟
                                      1+          =                 ≃1−             .
                                            𝑄𝑁−1    1 + 𝑁4𝑟𝛿𝑟                𝑁 𝑟𝑁−1
                                                              𝑁−1




                                                                                                                       Confidential
And so:
                                                 𝛿𝑄𝑁−1    4 𝛿𝑟
                                                       ≃−        .
                                                 𝑄𝑁−1     𝑁 𝑟𝑁−1

Putting all together

    B.4                                                                                                        2.3pt
                                      𝛿𝑄𝑁−1    2 𝐾N 𝑣 − (1 − 𝑣)𝑃cap 𝛿𝑟c
                                            ≃−                            .
                                      𝑄𝑁−1     𝑁 (1 − 𝑣)(𝑝c − 𝑃cap ) 𝑟𝑁−1
