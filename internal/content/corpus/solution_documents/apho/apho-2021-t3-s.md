---
id: solution-document-apho-2021-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2021/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2021-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2021/T3_S.pdf."
---

Theory 3 Magnetic Levitation: Solution
Part A. Sudden appearance of a magnetic monopole: initial response and subsequent
        time evolution of the response in the thin film
Initial response
A.1 In the 𝑧 ≥ 0 region, excluding the point occupied by the monopole, the magnetic field
     ⃗ =𝐵
     𝐵    ⃗ ′+𝐵⃗ mp at 𝑡 = 𝑡0 = 0 is given by

                         ⃗ mp = 𝜇0 𝑞m (𝑧−ℎ)𝑧̂
                         𝐵
                                              +⃗𝜌
                                                     ,                             (A-1)
                                 4𝜋 [(𝑧−ℎ)2 +𝜌2 ]3⁄2

                         ⃗𝐵 ′ = 𝜇0 𝑞m (𝑧+ℎ)𝑧̂ +⃗𝜌
                                                    ,                              (A-2)
                                 4𝜋 [(𝑧+ℎ) +𝜌2 ]3⁄2
                                          2


                             ⃗𝐵 = 𝜇0 𝑞m [ (𝑧−ℎ)𝑧̂ +⃗𝜌
                                                         ⁄  +
                                                                 (𝑧+ℎ)𝑧̂ +⃗𝜌
                                                                             ].   (A-3)
                                    4𝜋   [(𝑧−ℎ) 2+𝜌2 ] 3  2   [(𝑧+ℎ)2 2 ]3⁄2
                                                                    +𝜌

                                             ⃗ =𝐵
A.2 In the 𝑧 ≤ −𝑑 region, the magnetic field 𝐵  ⃗′+𝐵
                                                   ⃗ mp at 𝑡 = 𝑡0 = 0 is given by
     ⃗ = 0.
     𝐵                                                             (A-4)
A.3 From Eq. (A-3), 𝐵𝑧′ = 0 at 𝑧 = 0 for all 𝜌.
    Therefore, the total magnetic flux ΦB = 0 at 𝑧 = 0.                            (A-5)
    From Eq. (A-4), 𝐵𝑧′ = 0 at 𝑧 = −𝑑.
    Therefore, the total magnetic flux ΦB = 0 at 𝑧 = −𝑑.                           (A-6)
A.4 Applying Ampere’s law along the path shown in the figure below, and using the
    approximation 𝑑 ≪ ℎ, we have

                         𝐵𝜌 (𝜌, 𝑧 = 0)𝑑𝜌 = 𝜇0 𝑗(𝜌) 𝑑𝜌 ∙ 𝑑,                         (A-7)

   where the contributions from the 𝐵𝑧 𝑑 terms are smaller by a factor 𝑑 ⁄ℎ and neglected.




   The induced current density is given by

                                 1
                                         ⃗ (𝜌, 𝑧 = 0) = 𝑞m 2 𝑧̂ ×2⃗𝜌 3⁄2 .
                         𝑗(𝜌) = 𝜇 𝑑 𝑧̂ × 𝐵                                         (A-8)
                                    0                   2𝜋𝑑 (ℎ +𝜌 )



Subsequent response
A.5 Consider the form of an integral of Eq.(2), in the Question sheet, over the film thickness, we
get, for 𝑧 ≈ 0 inside the film (that is 𝑧 < 0 and |𝑧| ≪ 𝑑), that

     𝜕𝐵𝑧′       𝜕𝐵′                            𝜕𝐵′            𝜕𝐵′
        | − 𝜕𝑧𝑧 |            = 𝜇0 𝜎(𝑑 + 2𝑧) 𝜕𝑡𝑧 ≈ 𝜇0 𝜎𝑑 𝜕𝑡𝑧 .                      (A-9)
     𝜕𝑧     𝑧         −𝑑−𝑧
                                                                                                 1
                                                                                     𝜕𝐵′            𝜕𝐵′
    Since 𝐵𝑧′ is an even function of 𝑧 ′ = 𝑧 + 𝑑 ⁄2, therefore we have 𝜕𝑧𝑧 | = − 𝜕𝑧𝑧 |                           so that
                                                                                           𝑧              −𝑑−𝑧
                                                        𝜕
the left-hand side of Eq.(A-9) becomes 2 𝜕𝑧 𝐵𝑧′ (𝜌, 𝑧; 𝑡). The right-hand side is approximated by
the 𝑧-independent term of 𝐵𝑧′ inside the film thickness. On the other hand, the 𝑧-dependent term
of 𝐵𝑧′ is even in 𝑧′ and is of order ~ 𝑧′2 𝑑 ⁄ℎ so that it can be neglected based on the ℎ ≫ 𝑑
condition. As such the right-hand side is represented by 𝐵𝑧′ (𝜌, 𝑧; 𝑡). Putting these results together,
we get
        𝜕                            𝜕
    2 𝜕𝑧 𝐵𝑧′ (𝜌, 𝑧; 𝑡) = 𝜇0 𝜎𝑑 𝜕𝑡 𝐵𝑧′ (𝜌, 𝑧; 𝑡)
            𝜕                        𝜕
    ⇒            𝐵𝑧′ (𝜌, 𝑧; 𝑡) = 𝑣0 𝜕𝑧 𝐵𝑧′ (𝜌, 𝑧; 𝑡).                                      (A-10)
            𝜕𝑡

Here 𝑧 ≈ 0, and 𝑣0 = 2⁄(𝜇0 𝜎𝑑).
A.6 The equation in A.5, namely, Eq.(A-10) supports a solution of the form

        𝐵 ′ 𝑧 (𝜌, 𝑧; 𝑡) = 𝑓(𝜌, 𝑧 + 𝑣0 𝑡),                                                  (A-11)
    and at 𝑧 ≈ 0.
                                         𝜇0 𝑞m    (𝑧+ℎ)
A.7 At 𝑡 = 0, 𝐵𝑧′ (𝜌, 𝑧 ≥ 0) =                                  , which is of the form
                                          4𝜋 [(𝑧+ℎ)2 +𝜌2 ]3⁄2

    𝐵𝑧′ (𝜌, 𝑧 ≥ 0) = 𝐹(𝜌, 𝑧 + ℎ).                                                        (A-12)


   For 𝑡 > 0, we have according to Eq.(A-11), the replacement
   𝑧 → 𝑧 + 𝑣0 𝑡, to the 𝐵𝑧′ (𝜌, 𝑧; 𝑡 = 0).                                               (A-13)
   In other words, 𝐵𝑧′ (𝜌, 𝑧 ≈ 0; 𝑡) = 𝐹(𝜌, 𝑧 + 𝑣0 𝑡 + ℎ).
   This corresponds to a physical picture of a moving image monopole, with its position
   𝑧mp = −ℎ − 𝑣0 𝑡.                                                                      (A-14)

  Finally,         𝑣0 = 2⁄(𝜇0 𝜎𝑑).                                                       (A-15)


Part B. Magnetic force acting on a point-like magnetic dipole moving at a constant 𝒉 with
        a constant velocity
A moving monopole
B.1 The present locations of all the image magnetic monopoles of type 𝑞m are at

      (𝑥, 𝑧) = [−𝑛𝑣𝜏, −ℎ − 𝑛𝑣0 𝜏], for 𝑛 ≥ 0.                                              (B-1)


                                                                                                                           2
The locations of all the image magnetic monopoles −𝑞m are at
      (𝑥, 𝑧) = [−(𝑛 + 1)𝑣𝜏, −ℎ − 𝑛𝑣0 𝜏 ], for 𝑛 ≥ 0.                                               (B-2)
B.2 The magnetic potential Φ+ (𝑥, 𝑧) due to all the image magnetic monopoles at 𝑡 = 0 is given
    by, in summation form
                     𝜇0 𝑞𝑚                        1                   𝜇 𝑞                            1
       Φ+ (𝑥, 𝑧) =           ∑∞
                              𝑛=0                                  − 04𝜋𝑚 ∑∞
                                                                           𝑛=0                                        ,
                      4𝜋              √(𝑥+𝑛𝑣𝜏)2 +(𝑧+ℎ+𝑛𝑣0 𝜏)2                         √(𝑥+(𝑛+1)𝑣𝜏)2 +(𝑧+ℎ+𝑛𝑣0 𝜏)2

                           𝜇0 𝑞𝑚                           1                                  1
   ⇒      Φ+ (𝑥, 𝑧) =               ∑∞
                                     𝑛=0 [                                 −                                    ].     (B-3)
                             4𝜋              √(𝑥+𝑛𝑣𝜏)2 +(𝑧+ℎ+𝑛𝑣0 𝜏)2           √(𝑥+(𝑛+1)𝑣𝜏)2 +(𝑧+ℎ+𝑛𝑣0 𝜏)2




      In integral form
                     𝜇 𝑞        ∞                      1                                 1
                      ∫0 𝑑𝑡 ′ [
                  0 𝑚
      Φ+ (𝑥, 𝑧) = 4𝜋𝜏                                                 −                                    ],         (B-4)
                                        √(𝑥+𝑣𝑡 ′ )2 +(𝑧+ℎ+𝑣0 𝑡 ′ )2       √(𝑥+𝑣𝑡 ′ +𝑣𝜏)2 +(𝑧+ℎ+𝑣0 𝑡 ′ )2

                     𝜇0 𝑞𝑚      ∞                (𝑥+𝑣𝑡 ′ )𝑣𝜏
                =         ∫ 𝑑𝑡 ′ [(𝑥+𝑣𝑡 ′ )2 +(𝑧+ℎ+𝑣 𝜏)2 ]3⁄2 ,
                      4𝜋𝜏 0
                                                                                                                      (B-5)
                                                               0



                      𝜇0 𝑞𝑚 𝑣            1                 𝑧+ℎ                  𝑣0
  ⇒ Φ+ (𝑥, 𝑧) =            4𝜋       (𝑧+ℎ)𝑣−𝑣0 𝑥
                                                   [
                                                                      2
                                                                        −                ].                           (B-6)
                                                       √𝑥2 +(𝑧+ℎ)            √𝑣2 +𝑣2
                                                                                     0



A moving dipole
B.3
  The total magnetic potential

  ΦT (𝑥, 𝑧) = Φ+ (𝑥, 𝑧) + Φ− (𝑥, 𝑧),                                                                                 (B-7)
  where Φ− (𝑥, 𝑧) = −Φ+ (𝑥, 𝑧 − 𝛿m ).
  ΦT (𝑥, 𝑧) = Φ+ (𝑥, 𝑧) − Φ+ (𝑥, 𝑧 − 𝛿m )
                  = 𝛿m × 𝜕Φ+ (𝑥, 𝑧)⁄𝜕𝑧.                                                                              (B-8)




                                                                                                                               3
                  𝜇 𝑚𝑣             𝑣                      𝑧+ℎ                    𝑣0                            𝑥2
ΦT (𝑥, 𝑧) = − 04𝜋 [[(𝑧+ℎ)𝑣−𝑣 𝑥]2 (                                        −               ) − [(𝑧+ℎ)𝑣−𝑣 𝑥][𝑥 2 +(𝑧+ℎ)2 ]3/2 ].     (B-9)
                                         0       √𝑥 2 +(𝑧+ℎ)2                 √𝑣 2 +𝑣02                    0



Force acting on the point-like magnetic dipole:

                           𝑑                                      𝑑
              𝐹𝑧 = −𝑞𝑚 𝑑𝑧 ΦT (0, 𝑧)|                  + 𝑞𝑚 𝑑𝑧 ΦT (0, 𝑧)|                          .                               (B-10)
                                              𝑧=ℎ                                     𝑧=ℎ−𝛿m




                           𝜇 𝑚𝑞                      𝑣0               1               1
                𝐹𝑧 = − 02𝜋 m (1 −                              ) [(2ℎ)3 − (2ℎ−𝛿 )3 ].                                             (B-11)
                                               √𝑣 2 +𝑣02                                  m




                         3𝜇 𝑚2
                         0                      𝑣0
          ⇒       𝐹𝑧 = 32𝜋ℎ 4 [1 −
                                                          ].                                                                     (B-12)
                                             √𝑣 2 +𝑣02




                               𝑑                                  𝑑
              𝐹𝑥 = −𝑞𝑚 𝑑𝑥 ΦT (𝑥, ℎ)|                  + 𝑞𝑚 𝑑𝑥 ΦT (𝑥, ℎ − 𝛿m )|                         ,                         (B-13)
                                               𝑥=0                                               𝑥=0



                           0   3𝜇 𝑚2 𝑣
                                 0                        𝑣0
      ⇒           𝐹𝑥 = − 32𝜋ℎ 4 𝑣 [1 −
                                                                 ].                                                              (B-14)
                                                     √𝑣 2 +𝑣02




Relation between 𝒗𝟎 and 𝒗 and their relation
                           2                              2
B.4              𝑣0 = 𝜇 𝜎𝑑 = 4𝜋×10−7 ×5.9×107×0.5×10−2 = 5.4 m⁄s .                                                               (B-15)
                           0




B.5 In the small 𝑣 regime, meaning that 𝑣 is smaller than a certain typical velocity of the
system (or a critical velocity 𝑣c to be considered in the next task B.6) we have the characteristics
basically akin to that of 𝑣 ≈ 0. For 𝑣 = 0, the frequency 𝜔 is associated with 𝑣0 ⁄ℎ. Making use
of the parameters given in B.4, the skin depth (Eq.(3) in the question sheet) 𝛿 is given by
          2          2ℎ
𝛿 = √𝜔𝜇 𝜎 = √𝑣 𝜇 𝜎 = 1.58 c.m., which is more than three times greater than 𝑑.
          0          0 0


Thus we have, in the small 𝑣 regime,
 𝑣0 (𝑣) = 𝑣0 .                                                                                                                    (B-16)



                                                                                                                                           4
In the large 𝑣 regime, we have the skin depth 𝛿 < 𝑑 so that the effect thin film thickness
𝑑eff = 𝛿,                                                                      (B-17)
within which the field is more or less uniform (i.e. 𝑧 independent).
In this case, 𝜔 = 𝑣⁄ℎ,                                                         (B-18)
so the

            2           2       𝜔𝜇0 𝜎         2 𝑣           𝑑
𝑣0 (𝑣) = 𝜇 𝜎𝛿 = 𝜇 𝜎 √                   = √𝜇 𝜎 ℎ = √ℎ 𝑣 𝑣0 ,          or
            0           0           2         0


                𝑑           𝑣
 𝑣0 (𝑣) = 𝑣0 √ℎ √𝑣              .                                               (B-19)
                            0




B.6 The critical velocity 𝑣c is determined from the condition 𝛿 = 𝑑 :
                    2                             2ℎ            ℎ
       𝑑 = √𝜇 𝜎𝑣 ⁄ℎ ⇒                   𝑣c = 𝑑2 𝜇 𝜎 = 𝑣0 𝑑 .                    (B-20)
                0       c                          0




Part C Motion of the magnetic dipole when the conducting thin film is superconducting
   When the electrical conductivity 𝜎 → ∞, the receding velocity 𝑣0 → 0 so that there will not be
a whole series of image magnetic monopoles. Instead, the image is simply one image magnetic
dipole mirroring the instantaneous position of the magnetic dipole. In this case, the image
                   𝑚 = 𝑚𝑥̂ located at the location (𝑥, 𝑦, 𝑧) = (0,0, −ℎ). It is then clear, from the
magnetic dipole is ⃗⃗
symmetry of the image configuration, that the force on the magnetic dipole from the image
aligns only along 𝑧̂ . For our convenience, we take the magnetic monopole −𝑞m to locate at 𝑥 =
0, and for the magnetic monopole 𝑞m the location 𝑥 = 𝛿m .
C.1
The total magnetic potential ΦT (𝑥, 𝑧) from the image magnetic dipole is
                𝜇 𝑞                 1        𝜇 𝑞                1
ΦT (𝑥, 𝑧) = − 04𝜋m                         + 04𝜋m                          .     (C-1)
                            √𝑥 2 +(𝑧+ℎ)2               √(𝑥−𝛿m )2 +(𝑧+ℎ)2

Approach 1:
The total vertical force 𝐹𝑧′ acting on the magnetic dipole from the image magnetic dipole is given
by
                    𝜕                               𝜕
𝐹𝑧′ = (−𝑞m ) [− 𝜕𝑧 ΦT ]|𝑥=0, + 𝑞m [− 𝜕𝑧 ΦT ]|𝑥=𝛿,                                (C-2)
                                𝑧=ℎ                             𝑧=ℎ




                                                                                                   5
                          2                               2
                      𝜇0 𝑞m      𝑧+ℎ                  𝜇0 𝑞m         𝑧+ℎ
            𝐹𝑧′ =                             |     −                                |
                       4𝜋 [𝑥 2 + (𝑧 + ℎ)2 ]3⁄2 𝑥=0,    4𝜋 [(𝑥 − 𝛿m )2 + (𝑧 + ℎ)2 ]3⁄2 𝑥=0,
                                                                     𝑧=ℎ                                 𝑧=ℎ

                          𝜇 𝑞2                𝑧+ℎ                      𝜇 𝑞2          𝑧+ℎ
                      − 04𝜋m [𝑥 2 +(𝑧+ℎ)2 ]3⁄2 |𝑥=𝛿 , + 04𝜋m [(𝑥−𝛿 )2 +(𝑧+ℎ)2 ]3⁄2 |𝑥=𝛿 , ,
                                                                 m               m           m
                                                            𝑧=ℎ                            𝑧=ℎ


                          𝜇 𝑞2            1   2               1
            𝐹𝑧′ = 2 04𝜋m (2ℎ) [1 −                                3⁄2      ] .                                 (C-3)
                                                              𝛿 2
                                                         (1+( ) )
                                                             2ℎ

          3𝜇 𝑚2
    𝐹𝑧′ = 64𝜋ℎ
            0
               4
                 .                                                                               (C-4)

Equilibrium condition:
𝐹𝑧′ − 𝑀0 𝑔 = 0,                                                                                  (C-5)
      3𝜇0 𝑚2
⇒               = 𝑀0 𝑔,
       64𝜋ℎ04

                                      1
                         3𝜇0 𝑚2 4
⇒          ℎ0 = [64𝜋𝑀 𝑔] .                                                                   (C-6)
                              0




Approach 2:
We can use the direct force calculation.

          𝜇 𝑞2            1   2                     2ℎ
𝐹𝑧′ = 2 0 m [( ) −                                         3⁄2   ]                                   (C-7)
        4𝜋    2ℎ                            2 +(2ℎ)2 )
                                          (𝛿𝑚


            2
        𝜇0 𝑞m        1    2                         1
    =        (2ℎ) [1 −                                 3⁄2    ]                                      (C-8)
          2𝜋                                       𝛿 2
                                              (1+( ) )
                                                  2ℎ

        3𝜇0 𝑚2
    =            .
        64𝜋ℎ4

The equilibrium condition 𝐹𝑧′ − 𝑀0 𝑔 = 0 gives the same equilibrium position ℎ0 as in Eq. (C-6),
                                  1
                     3𝜇0 𝑚2 4
⇒       ℎ0 = [64𝜋𝑀 𝑔] .
                          0




C.2
The oscillation frequency about the equilibrium is obtained from

                                                                                                                       6
             𝑑𝐹′
𝐹𝑧′ ≈ 𝑀0 + 𝑑𝑧𝑧 ∆𝑧,                                                         (C-9)
where ∆𝑧 = 𝑧 − ℎ0.
            𝑑𝐹′
And from 𝑑𝑧𝑧 = −𝑘 = −𝑀0 Ω2                                                 (C-10)

we have
       𝑑 3𝜇 𝑚2              3𝜇 𝑚2        4 3𝜇 𝑚2         4𝑀0 𝑔
           0
𝑘 = − 𝑑𝑧 64𝜋ℎ 4
                    0
                = 16𝜋ℎ         0
                       5 = ℎ 64𝜋ℎ 4 =                            = 𝑀0 Ω2   (C-11)
                                0         0        0      ℎ0

The angular oscillation frequency
             4𝑔
      Ω=√          .                                                        (C-12)
              ℎ0




C.3
               4         2 1⁄4
            3𝜇0 ( 𝜋𝑅 3 𝑀)                                1⁄4
                                              𝑅 3 𝑀2 𝜇
   ℎ0 = [      3
               4               ]         = [ 16𝜌 𝑔0]                        (C-13)
           64𝜋( 𝜋𝑅 3 𝜌0 𝑔)                         0
               3




                                         1⁄4
              10−18 ×752 ×10−4
      ℎ0 = [ 16×7400×9.8×𝜇 ]                   m = 25. μm.                   (C-14)
                                     0




                       4𝑔           4×9.8
C.4       Ω = √ ℎ = √30×10−6 s −1 = 1.3 kHz.                                (C-15)
                        0




                                                                                      7
