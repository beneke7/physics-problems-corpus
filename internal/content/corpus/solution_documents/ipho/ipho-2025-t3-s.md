---
id: solution-document-ipho-2025-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2025/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2025-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2025/T3_S.pdf."
---

Q3-1
Theory



                                                                                             English (Official)

Champagne! (10 points)
Warning: Excessive alcohol consumption is harmful to health and drinking alcohol below legal age is
prohibited.


Champagne is a French sparkling wine. Fermentation of sugars produces
carbon dioxide ($0  ) in the bottle. The molar concentration of $0  in the
liquid phase 𝑐ℓ and the partial pressure 𝑃$0  in the gas phase are related
by 𝑐ℓ = 𝑘) 𝑃$0  , known as Henry's law and where 𝑘) is called Henry's con-
stant.
Data
   • Surface tension of champagne 𝜎 = 47 × 10−3 + ⋅ N−2
   • Density of the liquid 𝜌ℓ = 1.0 × 103 LH ⋅ N−3
   • Henry's constant at 𝑇0 = 20 °$, 𝑘) (20 °$) = 3.3 × 10−4 NPM ⋅ N−3 ⋅ 1B−1
   • Henry's constant at 𝑇0 = 6 °$, 𝑘) (6 °$) = 5.4 × 10−4 NPM ⋅ N−3 ⋅ 1B−1
   • Atmospheric pressure 𝑃0 = 1 CBS = 1.0 × 105 1B
                                                                                Fig. 1. A glass filled with
   • Gases are ideal with an adiabatic coefficient 𝛾 = 1.3
                                                                                champagne.



Part A. Nucleation, growth and rise of bubbles
Immediately after opening a bottle of champagne at temperature 𝑇0 = 20 °$ , we fill a glass. The pressure
in the liquid is 𝑃0 and its temperature stays constant at 𝑇0 . The concentration 𝑐ℓ of dissolved $0  exceeds
the equilibrium concentration and we study the nucleation of a $0  bubble. We note 𝑎 its radius and 𝑃C
its inner pressure.

     A.1      Express the pressure 𝑃C in terms of 𝑃0 , 𝑎 and 𝜎.                                      0.2pt


SOLUTION:


                                                     2𝜎
                     A.1. Laplace's law: 𝑃C = 𝑃0 +                                     0.2
                                                      𝑎


In the liquid, the concentration of dissolved $0  depends on the distance to the bubble. At long distance
we recover the value 𝑐ℓ and we note 𝑐C the concentration close to the bubble surface. According to
Henry's law, 𝑐C = 𝑘) 𝑃C . We furthermore assume in all the problem that bubbles contain only $0  .
Since 𝑐ℓ ≠ 𝑐C , $0  molecules diffuse from areas of high to low concentration. We assume also that any
molecule from the liquid phase reaching the bubble surface is transferred to the vapour.

     A.2      Express the critical radius 𝑎D above which a bubble is expected to grow in terms       0.5pt
              of 𝑃0 , 𝜎, 𝑐ℓ and 𝑐0 where 𝑐0 = 𝑘) 𝑃0 . Calculate numerically 𝑎D for 𝑐ℓ = 4𝑐0 .

SOLUTION:
A.2.1. 𝑎D is so 𝑐ℓ = 𝑐C
                                                                 2𝜎
A.2.2. 𝑐C = 𝑘) 𝑃C = 𝑘) (𝑃0 + 2𝜎
                              𝑎
                                ) and 𝑐0 = 𝑘) 𝑃0 so 𝑎D =
                                                           𝑃0 (𝑐ℓ /𝑐0 − 1)


                                                                                    Q3-2
Theory



                                                                                                English (Official)

A.2.3. 𝑎D = 0.3 µN


                      A.2.1. comparison (equality 𝑐C = 𝑐ℓ or inequality 𝑐C ≤ 𝑐ℓ )         0.1
                                                         2𝜎
                      A.2.2. exact expression 𝑎D =                                        0.2
                                                   𝑃0 (𝑐ℓ /𝑐0 − 1)
                      A.2.3. numerical value 𝑎D = 0.3 µN                                  0.2


In practice, bubbles mainly grow from pre-existing gas cavities. Consider then a bubble with initial radius
𝑎0 ≈ 40 µN. The number of moles of $0  transferred at the bubble's surface per unit area and time is noted
𝑗. Two models are possible for 𝑗.
                    𝐷
    • model (1) 𝑗 =    (𝑐 − 𝑐C ) where 𝐷 is the diffusion coefficient of $0  in the liquid.
                    𝑎 ℓ
    • model (2) 𝑗 = 𝐾 (𝑐ℓ − 𝑐C ) where 𝐾 is a constant here.
Experimentally, the bubble radius 𝑎(𝑡) is found to depend on time as shown in Fig. 2. Here 𝑐ℓ ≈ 4𝑐0 , and
since bubbles are large enough to be visible, the excess pressure due to surface tension can be neglected
and 𝑃C ≈ 𝑃0 .

     A.3       Express the number of $0  moles in the bubble 𝑛D in terms of 𝑎, 𝑃0 , 𝑇0 and ideal        1.2pt
               gas constant 𝑅. Find 𝑎(𝑡) for both models. Indicate which model explains the
               experimental results in Fig. 2. Depending on your answer, calculate numeri-
               cally 𝐾 or 𝐷.




           Fig. 2. Time evolution of $0  bubble radius in a glass of champagne (adapted from [1]).

SOLUTION:
                                                                                    𝑃0
A.3.1. The number of moles of $0  (ideal gas) inside the bubble is 𝑛D = 43 𝜋𝑎 3
                                                                                    𝑅𝑇0
A.3.2. Equation : balance of $0  in the bubble
A.3.3 d𝑛
      d𝑡
        D
          = 4𝜋𝑎 2 d𝑎 𝑃0
                  d𝑡 𝑅𝑇
                        = 𝑗4𝜋𝑎 2 ⇒ E𝑎
                                   E𝑡
                                      = 𝑗 𝑅𝑇
                                          𝑃   0


A.3.4. Model 1: E𝑎
                E𝑡
                   = 𝐷𝑅𝑇
                     𝑎𝑃0
                         (𝑐ℓ − 𝑐0 ) so 𝑎 2 = 𝑎02 + 2𝐷𝑅𝑇
                                                     𝑃0
                                                        0
                                                          (𝑐ℓ − 𝑐0 )𝑡


                                                                                      Q3-3
Theory



                                                                                               English (Official)

A.3.5. Model 2: E𝑎
                E𝑡
                   = 𝐾 𝑃𝑅𝑇0 (𝑐ℓ − 𝑐0 ) so 𝑎 = 𝑎0 + 𝐾 𝑃𝑅𝑇0 (𝑐ℓ − 𝑐0 )𝑡
                            0                           0

A.3.6. Experimental data : E𝑎
                           E𝑡
                              is constant: model 2
A.3.7 Slope of the experimental data : 𝑎̇ ≈ 150/0.62 ≈ 0.24 NN ⋅ T−1
A.3.8 𝐾 = 1.0 × 10−4 N ⋅ T−1


                                             𝑃0
                       A.3.1. 𝑛D = 43 𝜋𝑎 3                                             0.1
                                             𝑅𝑇0
                       A.3.2. any equation that that can be interpreted as a           0.1
                       particule balance
                       A.3.3. equation between 𝑎̇ (or 𝑛̇ D ) and 𝑗                     0.2
                       A.3.4. model 1 𝑎 exact with 𝑎0 present                          0.2
                       A.3.5. model 2 𝑎 exact with 𝑎0 present                          0.2
                       A.3.6. model 2                                                  0.1
                       A.3.7. value of the slope: total mark only if E𝑎
                                                                     E𝑡
                                                                        is in range    0.1
                                       −1
                       [210 − 250]µN ⋅ T
                       A.3.8. any value of 𝐾 in range [0.9 − 1.1] × 10−4 N ⋅ T−1       0.2


Eventually bubbles detach from the bottom of the glass and continue to grow while rising. Fig. 3. shows
a train of bubbles. The bubbles of the train have the same initial radius and are emitted at a constant
frequency 𝑓C = 20 )[.




  𝑢⃗𝑧                                                                                                              𝑧
                                                               𝑔0⃗                    1 mm
        Fig. 3. A train of bubbles. The photo is rotated horizontally for the page layout (adapted from
        [1]).

For the range of velocities studied here, the drag force 𝐹 on a bubble of radius 𝑎 moving at velocity 𝑣 in a
liquid of dynamic viscosity 𝜂 is given by Stokes' law 𝐹 = 6𝜋𝜂𝑎𝑣. Measurements show that at any moment
in time, the bubble can be assumed to be travelling at its terminal velocity.

        A.4    Give the expression of the main forces exerted on a vertically rising bubble.             0.8pt
               Obtain the expression of 𝑣(𝑎). Give a numerical estimate of 𝜂 using 𝜌ℓ , 𝑔0 and
               quantities measured on Fig. 3.

SOLUTION:
                                                                                        𝜌$0        𝑃𝑒 𝑀$0
A.4.1. Main forces: buoyancy 43 𝜋𝑎 3 𝜌ℓ 𝑔0 , drag force 6𝜋𝜂𝑎𝑣, weight is negligible:     𝜌ℓ
                                                                                               =    𝑅𝑇 𝜌ℓ
                                                                                                             ≈ 10−3 :
𝑚C ≪ 𝑚ℓ
A.4.2. Simplified equation is a balance between buoyancy and drag force 43 𝜋𝑎 3 𝜌ℓ 𝑔0 = 6𝜋𝜂𝑎𝑣 so
       𝑎 𝜌ℓ 𝑔0 .
     2 2
𝑣 = 9𝜂
A.4.3. Time between two bubbles: 𝛥𝑡 = 1/𝑓C


                                                                                      Q3-4
Theory



                                                                                                  English (Official)

                   2𝜌ℓ 𝑔0 𝑎 2
A.4.4. Using 𝜂 =           ×     for the penultimate bubble ( 𝑛 − 1 ) with 𝑎𝑛−1 ≈ 0.19 NN
                      9       𝑣
                  𝑧(𝑡𝑛 ) − 𝑧(𝑡𝑛−2 )
A.4.5. 𝑣(𝑡𝑛−1 ) =                   = 4.5 DN ⋅ T−1
                      2 × 𝑓C−1
A.4.6. 𝜂 ≈ 2 × 10−3 1B ⋅ T


                      A.4.1. Expression of main forces (gravity force present or            0.1
                      absent): fullmark
                      A.4.2. expression 𝑣 = 9𝜂 𝑎 𝜌ℓ 𝑔0 (full mark on this point with or
                                             2 2
                                                                                            0.2
                      without the gravity force)
                      A.4.3. taking account of the time during two positions                0.1
                      𝛥𝑡 = 1/𝑓C = 5 × 10−2 T
                      A.4.4. full mark for one coherent value of the radius                 0.1
                      measured on Fig.3.
                      last bubble in [0.20 − 0.30]NN
                      penultimate bubble : radius in [0.16 − 0.24]NN
                      antepenultimate bubble : radius in [0.14 − 0.22]NN
                      A.4.5. full mark for one coherent value of the velocity               0.1
                      measured on Fig.3.
                      last bubble 𝑣 ∈ [4.3, 4.8]DN ⋅ T−1
                      penultimate bubble 𝑣 ∈ [4.2, 4.6]DN ⋅ T−1
                      antepenultimate bubble 𝑣 ∈ [3.7 − 4.2]DN ⋅ T−1
                      A.4.6. full mark for any value or 𝜂 in range [1.0 − 4.0]10−3 1B ⋅ T   0.2


The quasi-stationary growth of bubbles with rate 𝑞𝑎 = E𝑎
                                                      E𝑡
                                                         still applies during bubble rise.

     A.5       Express the radius 𝑎𝐻ℓ of a bubble reaching the free surface in terms of height            0.5pt
               travelled 𝐻ℓ , growth rate 𝑞𝑎 = E𝑎
                                               E𝑡
                                                  , and any constants you may need. Assume
               𝑎𝐻ℓ ≫ 𝑎0 and 𝑞𝑎 constant, and give the numerical value of 𝑎𝐻ℓ with 𝐻ℓ = 10 DN
               and 𝑞𝑎 corresponding to Fig. 2.

SOLUTION:
A.5.1. 𝑣 = E𝑧
           E𝑡
              = 2𝜌9𝜂   𝑎 and E𝑎
                   ℓ 𝑔0 2
                             E𝑡
                                = 𝑞𝑎 so E𝑎
                                        E𝑧
                                           = 2𝜌ℓ 𝑔0 2
                                             9𝑞 𝜂
                                                   𝑎
                                                      𝑎

                                                          1/3
                        2𝜌 𝑔                27𝑞𝑎 𝜂𝐻ℓ
Neglecting 𝑎(𝑧 = 0), 𝑧 = ℓ 0 𝑎 3 so 𝑎𝐻ℓ = ⒧          ⒭
                        27𝑞𝑎 𝜂               2𝜌ℓ 𝑔0
A.5.2. 𝑎𝐻ℓ = 3.9 × 10−4 N for 𝜂 = 2.0 × 10−3 1B ⋅ T


                                                    1/3
                                       27𝑞𝑎 𝜂𝐻ℓ
                      A.5.1. 𝑎𝐻ℓ = ⒧            ⒭                                           0.3
                                        2𝜌ℓ 𝑔0
                      A.5.2. full mark if 𝑎𝐻ℓ ∈ [0.36 − 0.49]NN                             0.2


There are 𝑁C nucleation sites of bubbles. Assume that the bubbles are nucleated at a constant frequency


                                                                                      Q3-5
Theory



                                                                                               English (Official)

𝑓C at the bottom of a glass of champagne (height 𝐻ℓ for a volume 𝑉ℓ ), with 𝑎0 still negligible. Neglect
diffusion of $0  at the free surface.

     A.6        Write the differential equation for 𝑐ℓ (𝑡). Obtain from this equation the charac-      1.1pt
                teristic time 𝜏 for the decay of the concentration of dissolved $0  in the liquid.

SOLUTION:
A.6.1 The rate of bubbles reaching the free surface by unit time is 𝑁C 𝑓C
A.6.2. So the volume of CO2 released per unit time at the free surface is:
E𝑉
E𝑡
   = 43 𝜋𝑎𝐻3 ℓ 𝑁C 𝑓C

A.6.3. According to A.5, E𝑉
                         E𝑡
                            = 18𝜋𝑁𝜌C 𝑔𝑓C 𝜂𝐻ℓ 𝑞𝑎
                                        ℓ 0


A.6.4. With 𝑞𝑎 = E𝑎
                 E𝑡
                    = 𝑅𝑇
                      𝑃0
                         0
                           𝐾 (𝑐ℓ − 𝑐0 ) according to A3.
A.6.5. In the bubble, 𝑐C ≈ 𝑐0 . Using the ideal gas law, the total number 𝑛 of CO2 moles in 𝑉ℓ verifies:
E𝑛
E𝑡
       𝑃0 E𝑉
   = − 𝑅𝑇 E𝑡
             = − 18𝜋𝑁𝜌C 𝑓𝑔C 𝜂𝐾 𝐻ℓ (𝑐ℓ − 𝑐0 )
           0            ℓ 0

         𝑛                                                   18𝜋𝑁C 𝑓C 𝜂𝐾 𝐻ℓ
With 𝑐ℓ = , we get a first order linear ODE E𝑐
                                             E𝑡
                                               ℓ
                                                 = 𝑉1 E𝑛
                                                       E𝑡
                                                          =−                (𝑐ℓ − 𝑐0 )
         𝑉ℓ                                          ℓ          𝜌ℓ 𝑔𝑉ℓ
                                                                 𝜌ℓ 𝑔𝑉ℓ
A.6.6. Exponential decay with characteristic time: 𝜏 =
                                                              18𝜋𝑁C 𝑓C 𝜂𝐾 𝐻ℓ


                       A.6.1. Correct count of bubbles reaching the free surface by      0.1
                       unit time: 𝑁C 𝑓C
                       A.6.2. Balance at the free surface: E𝑉
                                                           E𝑡
                                                              = 43 𝜋𝑎𝐻ℓ 3 𝑁C 𝑓C          0.2
                       A.6.3. Exact expression of E𝑉
                                                  E𝑡
                                                     = 18𝜋𝑁𝜌C 𝑔𝑓C 𝜂𝐻ℓ 𝑞𝑎 using A.5.      0.1
                                                            ℓ 0

                       A.6.4. 𝑞𝑎 = E𝑎
                                   E𝑡
                                      = 𝑅𝑇
                                        𝑃
                                           0
                                             𝐾 (𝑐ℓ − 𝑐0 )                                0.2
                                              0

                       A.6.5. First order linear differential equation                   0.3
                             18𝜋𝑁C 𝑓C 𝜂𝐾 𝐻ℓ
                       E𝑐ℓ
                        E𝑡
                           +                 (𝑐ℓ − 𝑐0 ) = 0. If an homogeneous mistake
                                 𝜌ℓ 𝑔0 𝑉ℓ
                       has been made at a previous task, but the differential
                       equation is first order and coherent, fullmark.
                       A.6.6. Exponential decay with characteristic time:                0.2
                               𝜌ℓ 𝑔0 𝑉ℓ
                       𝜏=                 full mark if the numerical coefficient is
                           18𝜋𝑁C 𝑓C 𝜂𝐾 𝐻ℓ
                       absent or different of 1/18𝜋 (reasonable solution)



Part B. Acoustic emission of a bursting bubble
Small bubbles are nearly spherical as they reach the free surface. Once the liquid film separating the
bubble from the air thins out sufficiently, a circular hole of radius 𝑟 forms in the film and, driven by
surface tension, opens very quickly (Fig. 4. left). The hole opens at constant speed 𝑣G (Fig. 4. right). The
film outside the rim remains still, with constant thickness ℎ.


                                                                                      Q3-6
Theory



                                                                                                  English (Official)

                        𝐴           (2)    ℎ                                𝑣G d𝑡
                                                     𝑣⃗G
                            𝑟𝑐      (1)
                            (3)                                                     𝑟(𝑡)
                    𝑎
                                                                                     𝐴
                       (𝛼)                     (𝛽)

                        𝐴
                                 𝑟(𝑡)
                                                                 𝑧
                                                                                𝑅N
                                                                                                   ℎ
                                                                𝐴
                                                                     𝑟(𝑡)           𝑣G⃗
                                                                                          𝑣G d𝑡
                       (𝛾)                     (𝛿)

     Fig. 4. (Left) (𝛼) Bubble at the surface: (1) liquid, (2) air at pressure 𝑃0 and (3), $0  at pressure
     𝑃C , (𝛽) and (𝛾) retraction of the liquid film, where the rim is in dark blue, (𝛿) bubble collapse.
     (Right) Retraction of the liquid film at time 𝑡. Top: sketch of the pierced film seen from above.
     Bottom: cross-section of the rim and the retracting film. During d𝑡 the rim accumulates nearby
     liquid (dotted).

Due to dissipative processes, only half of the difference of the surface energy between 𝑡 and 𝑡 +d𝑡 of the
rim and the accumulated liquid is transformed into kinetic energy. We further assume that the variation
of the surface of the rim is negligible compared to that of the film.

    B.1      Express 𝑣G in terms of 𝜌ℓ , 𝜎 and ℎ.                                                         1.1pt


SOLUTION:
B.1.1. and 1.2. Variation of kinetic energy: system : the rim (perimeter ℓ = 2𝜋𝑟) and the vol-
ume 𝛿𝒱 = ℎℓE𝑡 = ℎ2𝜋𝑟𝑣𝑓 E𝑡𝛿𝒱 = ℎℓ𝑣𝑓 E𝑡 = ℎ2𝜋𝑟𝑣𝑓 E𝑡: during 𝑑𝑡 the volume 𝛿𝒱 get a kinetic energy
𝑑𝐸𝑐 = 12 𝜌ℓ 𝛿𝒱 𝑣𝑓2 = 12 𝜌ℓ ℎℓ𝑣𝑓 E𝑡 = 𝜋𝑟𝜌ℓ ℎ𝑣𝑓 E𝑡𝑑𝐸𝑐 = 12 𝜌ℓ 𝛿𝒱 𝑣𝑓2 = 21 𝜌ℓ ℎℓ𝑣𝑓3 E𝑡 = 𝜋𝑟𝜌ℓ ℎ𝑣𝑓3 E𝑡.
B.1.3. surface tension energy: 𝐸𝑠 = 𝜎𝑆 for a surface 𝑆
B.1.4. 𝛿𝐸𝑠 = −2𝜎ℓ𝑣𝑓 E𝑡 = −4𝜎𝜋𝑟𝑣𝑓 E𝑡.
B.1.5. Kinetic energy theorem: the lost energy is 𝛿𝐸𝑠 /2 < 0 so d𝐸𝑐 + 𝛿𝐸𝑠 = 𝛿𝐸𝑠 /2
B.1.6. 𝑣𝑓 = √2𝜎/𝜌ℓ ℎ

If partial answer: 𝑣𝑓 = √𝜎/𝜌ℓ ℎ obtained only by dimensional analysis: 0.2 pt to the question


                                                                                                Q3-7
Theory



                                                                                                             English (Official)

                           B.1.1. Any expression of kinetic energy                                    0.1
                           B.1.2. Variation of kinetic energy (differential or finite                 0.2
                           variation accepted)
                           B.1.3. Expression of a surface energy or a variation.                      0.1
                           B.1.4. Exact expression of 𝛿𝐸𝑠                                             0.3
                           B.1.5. Kinetic energy balance (without sign mistake). If the               0.2
                           candidate forget the energy loss, it is treated as a small
                           mistake (-0.1pt)
                           B.1.6. exact expression of 𝑣𝑓                                              0.2


                                                                                  When the film bursts, it releases internal
                      𝑃0      𝑧                                                   pressure and emits a sound. We model
                                                     2𝑟
                                                                                  this acoustic emission by a Helmholtz res-
                𝑚1            𝑧                                                   onator: a cavity open to the atmosphere
                              0                                                   at 𝑃0 through a bottleneck aperture of
                  𝑆
                                                          𝑎                       area 𝑆 (Fig. 5. left). In the neck, a mass
                                                                                  𝑚Q makes small amplitude position oscil-
                     𝑃(𝑡)                                                         lations due to the pressure forces it expe-
                                                                                  riences as the gas in the cavity expands
                                                                                  or compresses adiabatically. The grav-
                                                                                  ity force on 𝑚Q is negligible compared to
   Fig. 5. (Left) a Helmholtz resonator. (Right) a bubble as                      pressure forces. Let 𝑉0 be the volume of
   an oscillator.                                                                 gas under the mass 𝑚Q for 𝑃 = 𝑃0 as 𝑧 = 0.

     B.2        Express the frequency of oscillation 𝑓0 of 𝑚Q . Hint: for 𝜀 ≪ 1, (1 + 𝜀)𝛼 ≈ 1 + 𝛼𝜀.                  1.1pt


SOLUTION:
B.2.1. Pressure forces on 𝑚𝑝 : 𝐹𝑧 = 𝑃(𝑡)𝑆 − 𝑃0 𝑆
B.2.2. Volume 𝑉 (𝑡) = 𝑉0 + 𝑆𝑧
                                                                                                                    𝛾                      𝛾
                                                                                            𝛾                  𝑉0                1
B.2.3. Adiabatic and reversible compression for an ideal gas: 𝑃𝑉 (𝑡)𝛾 = 𝑃0 𝑉0 so 𝑃(𝑡) = 𝑃0 ⒧                        ⒭ = 𝑃0 ⒧           ⒭
                                                                                                            𝑉0 + 𝑆𝑧          1 + 𝑆𝑧/𝑉0
B.2.4. Approximation: 𝑃(𝑡) ≈ 𝑃0 (1 − 𝛾 𝑉𝑆𝑧 )
                                               0

                                     𝑧
B.2.5. Pressure force: 𝐹𝑧 = −𝛾𝑆 2 𝑃0
                                     𝑉0
                                                   𝑧
B.2.6. Newton's 2nd law: 𝑚𝑝 𝑧̈ = −𝛾𝑆 2 𝑃0             so 𝑚𝑝 𝑧̈ + 𝛾𝑆 2 𝑃0 𝑉𝑧 = 0
                                                   𝑉0                      0


                                                                       𝑃0 𝛾
B.2.7. Harmonic oscillator of angular frequency 𝜔02 = 𝑆 2
                                                                       𝑚𝑝 𝑉0

               1   2
                  𝑆 𝑃0 𝛾
B.2.8. 𝑓0 =
              2𝜋 ⎷ 𝑚𝑝 𝑉0


                                                                                     Q3-8
Theory



                                                                                                English (Official)

                       B.2.1. Pressure force with 𝑃0                                      0.1
                       B.2.2. Expression of volume 𝑉 (𝑡)                                  0.1
                       B.2.3. Expression of 𝑃(𝑡) with adiabatic reversible process for    0.2
                       an ideal gas
                       B.2.4. Approximate pressure                                        0.2
                       B.2.5. Exact linearized pressure force                             0.1
                       B.2.6. Law of motion                                               0.1
                       B.2.7. Harmonic oscillator, angular frequency                      0.2
                       B.2.8. Expression of 𝑓0                                            0.1


The Helmholtz model may be used for a bubble of radius 𝑎. 𝑉0 is the volume of the closed bubble. From
litterature, the mass of the equivalent of the piston is 𝑚𝑝 = 8𝜌𝑔 𝑟 3 /3 where 𝑟 is the radius of the circular
aperture and 𝜌𝑔 = 1.8 LH ⋅ N−3 is the density of the gas (Fig. 5. right). During the bursting process, 𝑟 goes
                             2 2 𝜌ℓ 𝑔0
from 0 to 𝑟D , given by 𝑟D =    𝑎      . At the same time, the frequency of emitted sound increases until
                             √3       𝜎
a maximum value of 40 L)[ and the bursting time is 𝑡𝑏 = 3 × 10−2 NT.

     B.3        Find the radius 𝑎 and the thickness ℎ of the champagne film separating the              1.1pt
                bubble from the atmosphere.

SOLUTION:
Determination of 𝑎
B.3.1. The maximal value of 𝑓0 is 𝑓0 = 40 L)[ is obtained for 𝑟 = 𝑟𝑐

                                                 3                     1       2
                                                                          3𝑟𝑐 𝜋 𝑃0 𝛾          1 𝛾𝑃0 3√3𝜋 𝜌ℓ 𝑔0
B.3.2. Exact expression of 𝑓0 with 𝑚 = 8𝑟3 𝜌𝑔 and 𝑆 = 𝜋𝑟𝑐2 : 𝑓0 =                     so 𝑓0 =              
                                                                      2𝜋 ⎷   8𝜌𝑔 𝑉0           2𝜋  𝜌𝑔   16𝑎   𝜎
         3√3 𝛾𝑃0 𝜌ℓ 𝑔0
or 𝑎 =              
         64𝜋 𝜌𝑔 𝑓02   𝜎
B.3.3. 𝑎 = 0.53 NN
Determination of ℎ
               2      𝜌 𝑔                           𝑟
B.3.4. 𝑟D =      𝑎 2  ℓ 0 and 𝑟𝑐 = 0.15 NN so 𝑣𝑓 = 𝑐 = 5.0 N ⋅ T−1
              √3       𝜎                           𝑡𝑏

               2𝜎     3𝑡C2 
                            𝜎
                                3
                                        2𝜎     3𝑡C2 𝜎2
B.3.5. ℎ =          =              ℎ =       =
              𝜌ℓ 𝑣𝑓2 2𝑎 4 ⎷ 𝜌ℓ3 𝑔0     𝜌ℓ 𝑣𝑓2 2𝑎 4 𝜌ℓ2 𝑔0
B.3.6. Numerical value ℎ = 3.7 µN


                                                                                                    Q3-9
Theory



                                                                                                          English (Official)

                             B.3.1. Use of 𝑟𝑐 for 𝑓0                                                0.1
                             B.3.2. Exact expression of 𝑓0 in terms of 𝑎, 𝜌𝑔 , 𝜎, 𝑔0 , 𝜌ℓ , 𝑃0 or   0.3
                             expression of 𝑎
                             B.3.3. Exact numerical value between 0.5 NN and 0.6 NN                 0.2
                             B.3.4. Relationship between 𝑡𝑏 , 𝑣G and 𝑟𝑐 or 𝑎                        0.2
                             B.3.5. Expression of ℎ in terms of 𝜎, 𝜌ℓ and 𝑣𝑓 (or 𝑎 and 𝑡C )         0.1
                             B.3.6. Numerical value ℎ = 3.7 µN                                      0.2



Part C. Popping champagne
In a bottle, the total quantity of $0  is 𝑛5 = 0.2 NPM, either dissolved in the volume 𝑉- = 750 N- of liquid
champagne, or as a gas in the volume 𝑉( = 25 N- under the cork (Fig. 6. left). 𝑉( contains only $0  .
The equilibrium between both $0  phases follows Henry's Law. We suppose that the fast gaseous $0
expansion when the bottle is opened, is adiabatic and reversible. Ambient temperature 𝑇0 and pressure
𝑃0 = 1 CBS are constant.


                                                            ԅ         ^


                                                ӯ            ԓ        ^



                                                          ԅi ԋ G
                                                                      ^

                                                         Ԓӯ   Ԛ> ԅB
                                                             ԋG       ^
        Fig. 6. Left: traditional bottleneck: (1) surrounding air, (2) cork stopper, (3) headspace, (4)
        liquid champagne. Right: Two phenomena observed while opening the bottle at two different
        temperatures (adapted from [2]).


       C.1         Give the numerical value of the pressure 𝑃J of gaseous $0  in the bottle for                   0.4pt
                   𝑇0 = 6 °$ and 𝑇0 = 20 °$.

SOLUTION:
C.1.1. Conservation of $0  molecules: 𝑛𝑇 = 𝑛𝑉 + 𝑛𝐿 = 𝑛𝑉 + 𝑘𝐻 (𝑇0 )𝑃𝑖 𝑉𝐿
                                       𝑃𝑖 𝑉𝐺
C.1.2. Ideal gas law: 𝑛𝑉 =
                                       𝑅𝑇0
                                       𝑛𝑇 𝑅𝑇0
              𝑛𝑇                        𝑉𝐺
𝑃𝑖 =                         =
                       𝑉𝐺                           𝑉𝐿
       𝑉𝐿 𝑘𝐻 (𝑇0 ) +             1 + 𝑅𝑇0 𝑘𝐻 (𝑇0 )
                       𝑅𝑇0                          𝑉𝐺
C.1.3. For 𝑇0 = 6 °$: 𝑃𝑖 = 4.81 CBS


                                                                                Q3-10
Theory



                                                                                                     English (Official)

C.1.4. For 𝑇0 = 20 °$: 𝑃𝑖 = 7.76 CBS


                         C.1.1. Conservation of $0  molecules                                  0.1
                         C.1.2. Litteral expression of 𝑃𝑖                                      0.1
                         C.1.3. For 𝑇0 = 6 °$ : 𝑃𝑖 = 4.81 CBS                                  0.1
                         C.1.4. For 𝑇0 = 20 °$ : 𝑃𝑖 = 7.76 CBS                                 0.1


Another step of champagne production (not described here) leads to the following values of 𝑃𝑖 that we
will use for the next questions: 𝑃J = 4.69 CBS at 𝑇0 = 6 °$ and 𝑃J = 7.45 CBS at 𝑇0 = 20 °$.
During bottle opening, two different phenomena can be observed, depending on 𝑇0 (Fig. 6. right).
    • either a blue fog appears, due to the formation of solid $0  crystals (but water condensation is
      inhibited);
    • or a grey-white fog appears, due to water vapor condensation in the air surrounding the bottleneck.
      In this latter case, there is no formation of $0  solid crystals.
                                                                                                $0
                                                                                              𝑃TBU          𝐵
The saturated vapor pressure 𝑃TBU   for the $0  solid/gas transition follows : MPH10 ⒧                         with
                                        $0
                                                                                                     ⒭=𝐴−
                                                                                               𝑃0         𝑇 +𝐶
𝑇 in ,, 𝐴 = 6.81, 𝐵 = 1.30 × 103 , and 𝐶 = −3.49 ,.

     C.2      Give the numerical value 𝑇G of the $0  gas at the end of the expansion, after                  0.7pt
              opening a bottle, if 𝑇0 = 6 °$ and if 𝑇0 = 20 °$, if no phase transition occured.
              Choose which statements are true (several statements possible):
                1. At 𝑇0 = 6 °$ a grey-white fog appears while opening the bottle.
                2. At 𝑇0 = 6 °$ a blue fog appears while opening the bottle.
                3. At 𝑇0 = 20 °$ a grey-white fog appears while opening the bottle.
                4. At 𝑇0 = 20 °$ a blue fog appears while opening the bottle.

SOLUTION:
C.2.1. The adiabatic reversible expansion goes from 𝑃𝑖 to 𝑃0 .
                       (1/𝛾)−1
                𝑃
C.2.2. 𝑇𝑓 = 𝑇0 ⒧ 𝑖 ⒭
                𝑃0
C.2.3. For 𝑇0 = 6 °$: 𝑃𝑖 = 4.69 CBS and 𝑇𝑓 = 195.3 , = −77.8 °$.
C.2.4. For 𝑇0 = 20 °$: 𝑃𝑖 = 7.45 CBS and 𝑇𝑓 = 184.3 , = −88.8 °$.
C.2.5. First method: comparison 𝑃TBU (𝑇𝑓 ) and 𝑃𝑓 = 𝑃0 .
Second method: evaluation of the transition temperature at 𝑃0 and comparison with 𝑇𝑓 .

C.2.6. First method: 𝑃TBU   (𝑇𝑓 = 6 °$) = 1.07 CBS > 𝑃0 . As the solid-liquid frontier has a positive slope in 𝑃, 𝑇
                             $0

state-diagram, the final state of $0  is gaseous. 𝑃TBU   (𝑇𝑓 = 20 °$) = 0.41 CBS < 𝑃0 . As the solid-gas frontier
                                                           $0

has a positive slope in 𝑃, 𝑇 state-diagram, the final gaseous state hypothesis is inconsistent and a phase
transition has occured in the latter case.
                                  𝐵
Second method: 𝑇𝑡𝑟𝑎𝑛𝑠 =                    − 𝐶 . 𝑇𝑡𝑟𝑎𝑛𝑠 = 194.4 , = −78.8 °$. For 𝑇0 = 6 °$: 𝑇𝑓 = 195.3 , > 𝑇𝑡𝑟𝑎𝑛𝑠 ; the
                                       𝑃0
                           𝐴 − MPH10 ⒧ ⒭
                                       𝑃0
final state of $0  is gaseous. For 𝑇0 = 20 °$: 𝑇𝑓 = 184.3 , < 𝑇𝑡𝑟𝑎𝑛𝑠 ; the final gaseous state hypothesis is


                                                                                          Q3-11
Theory



                                                                                                 English (Official)

inconsistent and a phase transition has occured.
C.2.7. The true statements are: 1 and 4.


                       C.2.1. Final pressure of the expansion.                             0.1
                       C.2.2. Litteral expression of 𝑇𝑓 .                                  0.1
                       C.2.3. For 𝑇0 = 6 °$: 𝑃𝑖 = 4.69 CBS and 𝑇𝑓 = 195.3 , ;              0.1
                       C.2.4. For 𝑇0 = 20 °$: 𝑃𝑖 = 7.45 CBS and 𝑇𝑓 = 184.3 ,;              0.1
                       C.2.5. Idea of comparison between 𝑃TBU and 𝑃0 or evaluation         0.1
                       of the transition temperature at 𝑃0 and idea of comparison
                       with 𝑇𝑓 .
                       C.2.6. Numerical comparison.                                        0.1
                       C.2.7. True statements (all or nothing).                            0.1


During bottle opening, the cork stopper pops out. We now determine the maximum height 𝐻D it reaches.
Assume that the friction force 𝐹 due to the bottleneck on the cork stopper is 𝐹 = 𝛼𝐴 where 𝐴 is the area
of contact and 𝛼 is a constant to determine. Initially, the pressure force slightly overcomes the friction
force. The cork's mass is 𝑚 = 10 H, its diameter 𝑑 = 1.8 DN and the length of the cylindrical part initially
stuck in the bottleneck is ℓ0 = 2.5 DN. Once the cork has left the bottleneck, you can neglect the net
pressure force.

     C.3       Give the numerical value of 𝐻D if the external temperature is 𝑇0 = 6 °$.                  1.3pt


SOLUTION:
                                                       →
                                                       −                 −→
C.3.1. Let us evaluate the work of the friction force. 𝐹 = −𝛼.𝜋𝑑(𝑙0 − 𝑧)𝑢𝑧 . Initially, this force slightly com-
                                             𝑑2                          𝑑
pensates the pressure force: 𝐹 = 𝜋𝛼𝑑ℓ0 = 𝜋 (𝑃𝑖 − 𝑃0 ) so 𝛼 = (𝑃𝑖 − 𝑃0 )
                                              4                         4ℓ0
       →
       −                 (ℓ − 𝑧) −
                                 →                                        ℓ2    (𝑃 − 𝑃0 )𝜋𝑑2
C.3.2. 𝐹 = −(𝑃𝑖 − 𝑃0 )𝜋𝑑2 0      𝑢𝑧 The total work is therefore: 𝑊𝑓 = −𝛼𝜋𝑑 0 = − 𝑖           ℓ0
                           4ℓ0                                             2         8
C.3.3. and C.3.4. Work of the internal pressure force:
First method: the variation of internal energy of the gas is:
                                  ⎛       1           ⎞         ⎛        1            ⎞
                                                          𝑃𝑖 𝑉𝐺
𝛥𝑈𝑔 = 𝑛𝛾−1
        𝑉𝑅
           (𝑇𝑓 − 𝑇0 ) = 𝑛𝛾−1
                          𝑉𝑅
                             𝑇0                   − 1   =                         − 1
                                        𝜋𝑑2 ℓ 𝛾−1         𝛾−1         𝜋𝑑2 ℓ (𝛾−1)
                                  ⎝ ⒧1 + 4 𝑉 0 ⒭
                                              𝐺
                                                      ⎠         ⎝ ⒧1 + 4 𝑉 0 ⒭
                                                                         𝐺
                                                                                      ⎠
As its expansion is adiabatic: 𝛥𝑈𝑔 = 𝑊cork→CO2 = −𝑊CO2→cork The cork stopper receives therefore a work
from this gas equals to −𝛥𝑈𝑔 .
                   ⎛           1           ⎞
𝑊CO2→cork = 𝑃𝛾−1
              𝑖 𝑉𝐺
                    1−         2     (𝛾−1)
                   ⎝   ⒧1 + 𝜋𝑑
                             4 𝑉𝐺
                                 ℓ0
                                    ⒭      ⎠
Second method: let us write 𝑃 the internal pressure during the expansion. The work received by the cork
is:
                𝑉                                 𝜋𝑑2 ℓ0          𝛾       𝛾
𝑊CO2→cork = ∫𝑉𝐺𝐹 𝑃𝑑𝑉 , where 𝑉𝐹 = 𝑉𝐺 +                   and 𝑃0 𝑉𝐹 = 𝑃𝑖 𝑉𝐺 .
                                                    4


                                                                                 Q3-12
Theory



                                                                                                     English (Official)

The integration leads to the same result.
                                                             𝜋𝑑2
C.3.5. The work due to the external pressure 𝑃0 is: 𝑊𝑒 = −𝑃0 .   ℓ
                                                               4 0
C.3.6. Energy balance. The cork stopper has an initial kinetic energy: 𝐸𝑐 = −𝛥𝑈𝑔 + 𝑊𝑓 + 𝑊𝑒
(The work of the weight is negligible and should not be taken into account).
At 𝑇0 = 6 °$: 𝑃𝑖 = 4.69 CBS . 𝑊𝑓 = −1.17 +; 𝑊𝑒 = −0.64 +; 𝛥𝑈𝑔 = −2.57 +; 𝐸𝑐 = 0.76 +
                                                                                       𝐸𝑐    −𝛥𝑈𝑔 + 𝑊𝑓 + 𝑊𝑒
C.3.7. The maximum height reached by the cork stopper is therefore: 𝐻𝑐 =                   =                .
                                                                                       𝑚𝑔0       𝑚𝑔0
C.3.8. 𝐻𝑐 = 7.7 N


If the candidates assumed a constant pressure 𝑃𝑖 for the gaseous $0  during its expansion, they would
find a work done by \$0  on the cork equal to: 𝑃𝑖 (𝜋ℓ0 𝑑2 /4) = 3 J instead of 2.56 + and finally 𝐻𝑐 = 12 N. The
difference is not negligible!


                    C.3.1. Correct expression of 𝛼 (all or nothing).                         0.2
                    If 𝛼 is not correct (contribution of 𝑃0 forgotten for example),
                    0 point but the following items are evaluated with this
                    uncorrect 𝛼.
                    C.3.2. Expression of the friction work (all or nothing)                  0.2

                    C.3.3. Consequences of the adiabatic reversible expansion                0.1
                                                             𝛾
                    (1st principle with 𝑄 = 0 or 𝑃𝑉 𝛾 = 𝑃𝑖 𝑉𝐺 )
                    C.3.4. Exact expression of the work (all or nothing)                     0.3
                    Partial points : if 𝑃 is considered constant during the
                    expansion, 0 point for C.3.4. but all points for the following
                    items if coherent with the incorrect work expression.
                    C.3.5. Work due to external pressure correct.                            0.1
                    If this item is forgotten by the candidate, 0 point.
                    C.3.6. Correct 𝐸𝑐 with the 3 contributions (even if errors in            0.1
                    the writing of the contributions).
                    If the candidate has forgotten the contribution of the
                    external pressure, 0 point.
                    C.3.7. Correct energy balance during the free flight or use of          0.20.1
                    Newton's second law.
                    C.3.8. Correct numerical value of 𝐻𝑐 .                                   0.2
                    If the candidate has forgotten the contribution of the
                    external pressure in C.3.5 but 𝐻𝑐 is coherent, fullmark.


[1] Liger-Belair et al, Am. J. Enol. Vitic., Vol. 50, No. 3 (1999).
[2] Liger-Belair et al., Sc. Reports 7, 10938 (2017).
