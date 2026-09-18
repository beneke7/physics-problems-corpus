---
id: solution-document-ipho-2005-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2005/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2005-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2005/T3_S.pdf."
---

36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                                                        R.S.E.F.


                                     Th3          QUANTUM EFFECTS OF GRAVITY
                                                                            SOLUTION


1.   The only neutrons that will survive absorption at A are those that cannot cross H. Their turning points will be below H.
     So that, for a neutron entering to the cavity at height z with vertical velocity vz , conservation of energy implies

                                                                                                      − 2 g ( H − z ) ≤ v z ( z ) ≤ 2 g (H − z )
                    1
                      M v z2 + M g z ≤ M g H                                    ⇒
                    2


                                                                                                                                           Lc
2.   The cavity should be long enough to ensure the absorption of all
     neutrons with velocities outside the allowed range. Therefore,
                                                                                                                    H
     neutrons have to reach its maximum height at least once within the
     cavity. The longest required length corresponds to neutrons that enter
     at z = H with vz = 0 (see the figure). Calling tf to their time of fall
                    Lc = v x 2 t f ⎫
                                   ⎪                                                2H
                                   ⎬ ⇒                           Lc = 2v x                            Lc = 6.4 cm
                         1 2⎪                                                        g
                    H = gtf
                         2         ⎭


3.   The rate of transmitted neutrons entering at a given height z, per unit height, is proportional to the range of allowed
     velocities at that height, ρ being the proportionality constant
                    dN c ( z )
                      dz
                                         [                                  ]
                               = ρ v z ,max ( z ) − v z ,min ( z ) = 2 ρ 2 g (H − z )

     The total number of transmitted neutrons is obtained by adding the neutrons entering at all possible heights. Calling
     y=z/H
                                                                                                                                                          1
                                                                                                                                    3/ 2 ⎡ 2    3/ 2⎤
                    N c (H ) =                                  2 ρ 2 g (H − z )dz = 2 ρ 2 g H 3 / 2        ∫ (1 − y ) dy = 2ρ 2 g H ⎢− (1 − y ) ⎥
                                     H                      H                                                1
                                 ∫       dN c ( z ) =   ∫
                                                                                                                      1/ 2
                                 0                      0                                                    0                                     ⎣ 3   ⎦0

                                 4
         ⇒          N c (H ) =     ρ 2g H 3/ 2
                                 3


4.   For a neutron falling from a height H, the action over a bouncing cycle is twice the action during the fall or the ascent


                          ∫ p dz = 2M 2 g H ∫ (1 − y ) dy = 3 M 2 g H
                            H                                           1                    4
                    S=2          z
                                                                 3/ 2               1/ 2                    3/ 2
                           0                                            0


     Using the BS quantization condition
                                                                                                                   1/ 3
                       4                                                                        ⎛ 9 h2 ⎞
                    S = M 2g H 3/ 2 = n h                                       ⇒          Hn = ⎜          ⎟              n2/3
                       3                                                                        ⎜ 32 M 2 g ⎟
                                                                                                ⎝          ⎠

     The corresponding energy levels (associated to the vertical motion) are
                                                                                            1/ 3
                                                                       ⎛ 9M g 2 h 2 ⎞
                    En = M g H n                 ⇒                En = ⎜            ⎟              n2/3
                                                                       ⎜   32       ⎟
                                                                       ⎝            ⎠




                                                                                                                                   Th 3 Solution Page 1 of 3


                                       36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                             R.S.E.F.




     Numerical values for the first level:
                                        1/ 3
                        ⎛ 9 h2 ⎞
                   H1 = ⎜          ⎟           = 1.65 × 10 −5 m          H 1 = 16.5 µm
                        ⎜ 32 M 2 g ⎟
                        ⎝          ⎠

                   E1 = M g H 1 = 2.71 × 10 −31 J = 1.69 × 10 −12 eV                      E1 = 1.69 peV

     Note that H1 is of the same order than the given cavity height, H = 50 µm. This opens up the possibility for observing
     the spatial quantization when varying H.



5.   The uncertainty principle says that the minimum time ∆t and the minimum energy ∆E satisfy the relation ∆E ∆t ≥ h .
     During this time, the neutrons move to the right a distance
                                        h
                   ∆x = v x ∆t ≥ v x
                                       ∆E
     Now, the minimum neutron energy allowed in the cavity is E1, so that ∆E ≈ E1 . Therefore, an estimation of the
     minimum time and the minimum length required is
                          h                                              h
                   tq ≈      = 0.4 ⋅ 10 −3 s = 0.4 ms         Lq ≈ v x      = 4 ⋅ 10 −3 m = 4 mm
                          E1                                             E1




                                                                                                          Th 3 Solution Page 2 of 3


                                     36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                             R.S.E.F.




                                               Th 3         ANSWER SHEET


                                                                                                                        Marking
Question        Basic formulas used                           Analytical results             Numerical results
                                                                                                                        guideline



   1       1
             M v z2 + M g z ≤ M g H              − 2 g (H − z ) ≤ v z ( z ) ≤ 2 g (H − z )                                 1.5
           2


           Lc = v x 2t f
                                                Lc = 2v x
                                                                 2H                          Lc = 6.4 cm                1.3 + 0.2
   2                                                              g
                 1 2
           H=     gt
                 2 f


           dN c
            dz
                        [
                = ρ v z ,max − v z , min   ]
                                                              4                                                            2.5
   3                                             N c (H ) =     ρ 2g H 3 / 2
                                                              3
           N c (H ) =
                            H
                        ∫ dN ( z)
                            0
                                c



                                                                      1/ 3
                                                     ⎛ 9 h2 ⎞
                                                Hn = ⎜          ⎟            n2/3            H 1 = 16.5 µm              1.6 + 0.2
                                                     ⎜ 32 M 2 g ⎟
                   H                                 ⎝          ⎠
   4       S=2   ∫ p dz = nh
                   0
                        z
                                                                       1/ 3
                                                     ⎛ 9M g 2 h 2 ⎞                          E1 = 1.69 peV
                                                En = ⎜            ⎟           n2/3                                      0.5 + 0.2
                                                     ⎜   32       ⎟
                                                     ⎝            ⎠


           ∆E ∆t ≥ h                                   h
                                                tq ≈                                         t q ≈ 0.4 ms               1.3 + 0.2
                                                       E1
   5       ∆E ≈ E1
                                                            h
                                                Lq ≈ v x                                     Lq ≈ 4 mm                  0.3 + 0.2
                                                            E1
           ∆x = v x ∆t




                                                                                                        Th 3 Solution Page 3 of 3
