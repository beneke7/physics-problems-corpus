---
id: solution-document-ipho-2024-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2024/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2024-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2024/T2_S.pdf."
---

S2-1
A: Paul Trap

A-1. Due to the symmetry, on the 𝑧-axis the only non-zero component of electric field is in
the 𝑧-direction. So:
                                                      𝑑𝑞       1            𝑧
              𝐸ሬԦ ሺ0,0, 𝑧ሻ = 𝐸𝑧 ሺ0,0, 𝑧ሻ 𝑧Ƹ = 𝑧Ƹ න                    ×            1
                                                     4𝜋𝜖0 ሺ𝑅 2 + 𝑧 2 ሻ ሺ𝑅 2
                                                                            + 𝑧 2 ሻ2

The element 𝑑𝑞 is equal to 𝜆𝑅𝑑𝜙 where 𝜙 is the angle with the 𝑥-axis. Thus:

                                       𝜆𝑅𝑑𝜙           𝑧             𝜆𝑅        𝑧
                    𝐸ሺ0,0, 𝑧ሻ = 𝑧Ƹ න                   3 = 𝑧Ƹ 2𝜖               3
                                       4𝜋𝜖0      2   2           0 ሺ𝑧 2 + 𝑅 2 ሻ2
                                               ሺ𝑧 + 𝑅 ሻ2

For 𝑧 ≪ 𝑅 this can be written as:

                                                   𝜆𝑅 𝑧     𝜆𝑧
                                  𝐸𝑧 ሺ0,0, 𝑧ሻ =           =
                                                   2𝜖0 𝑅 3 2𝜖0 𝑅 2

Very close to the 𝑧-axis, we can write:

                                             𝜕𝐸𝑧              𝜕𝐸𝑧
            𝐸𝑧 ሺ𝑥, 𝑦, 𝑧ሻ = 𝐸𝑧 ሺ0,0, 𝑧ሻ + 𝑥       ȁሺ0,0,𝑧ሻ + 𝑦     ȁሺ0,0,𝑧ሻ + 𝑂ሺ𝑥 2 , 𝑦 2 , 𝑧 2 ሻ
                                             𝜕𝑥               𝜕𝑦
                                                                                            𝜕𝐸     𝜕𝐸
Since, there is no difference between 𝑥 and −𝑥 or 𝑦 and −𝑦, it turns out that 𝜕𝑥𝑧 = 𝜕𝑦𝑧 = 0.
Thus, to the first order in 𝑥, 𝑦, and 𝑧 we have:

                                                           𝜆𝑧
                                        𝐸𝑧 ሺ𝑥, 𝑦, 𝑧ሻ =
                                                          2𝜖0 𝑅 2

Consider a Gaussian surface in the shape of a symmetric cylinder around the 𝑧-axis whose
bases are parallel with the 𝑥𝑦-plane. The cylinder’s radius is 𝜌 and its height is 2𝑧 both of
which are small quantities. By Gauss’s law we have:



                    𝑆1



                          𝑆3

                   𝑆2


                           𝑄𝑖𝑛
                                                                                     S2-2
                    0=         = ර 𝐸ሬԦ . 𝑑𝑆Ԧ = න 𝐸ሬԦ . 𝑑𝑆Ԧ + න 𝐸ሬԦ . 𝑑𝑆Ԧ + න 𝐸ሬԦ . 𝑑𝑆Ԧ
                           𝜖0                   𝑆1            𝑆2            𝑆3

Integration over 𝑆1 and 𝑆2 gives:

                                                                    𝜆𝑧
                              න 𝐸ሬԦ . 𝑑𝑆Ԧ = න 𝐸ሬԦ . 𝑑𝑆Ԧ = 𝜋𝜌2 ×            .
                                𝑆1            𝑆2                   2𝜖0 𝑅 2

Integration over 𝑆3 involves the 𝜌-component for which we can write the following expansion:

                                                           𝜕𝐸𝜌
                      𝐸𝜌 ሺ𝑧, 𝜌, 𝜙ሻ = 𝐸𝜌 ሺ0, 𝜌, 𝜙ሻ + 𝑧          ȁሺ0,𝜌,𝜙ሻ + 𝑂ሺ𝑧 2 ሻ
                                                           𝜕𝑧
              𝜕𝐸𝜌
We have 0 = 𝜕𝑧 ȁሺ0,𝜌,𝜙ሻ due to symmetry between 𝑧 and −𝑧, hence, 𝐸𝜌 ሺ𝑧, 𝜌, 𝜙ሻ = 𝐸𝜌 ሺ0, 𝜌, 𝜙ሻ
                                                         𝑑𝐸𝜌
up to the first order. Axial symmetry also implies 𝑑𝜙 = 0. Consequently:


                                න 𝐸ሬԦ . 𝑑𝑆Ԧ = 𝐸𝜌 ሺ0, 𝜌, 0ሻ × 2𝑧 × 2𝜋𝜌
                                 𝑆3

So, Gauss’s law implies:

                                                                  𝜆𝑧
                                     0 = 𝐸𝜌 × 4𝜋𝑧𝜌 + 2𝜋𝜌2
                                                                 2𝜖0 𝑅 2

Therefore, 𝐸𝜌 will be:

                                                        𝜆𝜌
                                            𝐸𝜌 = −
                                                       4𝜖0 𝑅 2

In the cylindrical coordinate we will have:

                                                     𝜆𝜌           𝜆𝑧
                                𝐸ሬԦ ሺ𝜌, 𝜙, 𝑧ሻ = −         2
                                                            𝜌ො +         𝑧Ƹ
                                                    4𝜖0 𝑅        2𝜖0 𝑅 2

In cartesian coordinates we will have:

                                                     𝜆
                                 𝐸ሬԦ ሺ𝑥, 𝑦, 𝑧ሻ =           ሺ−𝑥, −𝑦, 2𝑧ሻ
                                                   4𝜖0 𝑅 2

Since the ring is positively charged, the equilibrium in the 𝑥 and 𝑦 directions are stable, while
the equilibrium in the 𝑧-direction is unstable. The equations of motion in the 𝑥 and 𝑦 directions
read:

                                                            𝑞𝜆
                                       𝑚𝑥ሷ = 𝑞𝐸𝑥 = −               𝑥
                                                           4𝜖0 𝑅 2

                                                            𝑞𝜆
                                       𝑚𝑦ሷ = 𝑞𝐸𝑦 = −               𝑦
                                                           4𝜖0 𝑅 2


Therefore, the frequencies of small oscillations are:
                                                                                           S2-3
                                                             𝑞𝜆
                                            𝜔𝑥2 = 𝜔𝑦2 =
                                                           4𝜖0 𝑅 2 𝑚



 A-1 (1.5 pt)

                     −𝜆𝑥         −𝜆𝑦            𝜆𝑧
 (a) 𝐸ሬԦ ሺ𝑥, 𝑦, 𝑧ሻ = 4𝜖 𝑅2 𝑥ො + 4𝜖 𝑅2 𝑦ො + 2𝜖 𝑅2 𝑧Ƹ
                      0           0             0
                          𝑄𝜆
 (b) 𝜔𝑥 = 𝜔𝑦 = √4𝜖 𝑅2 𝑚
                          0




A-2.
The force in the 𝑧-direction is:

                                        𝑄𝜆𝑧        𝑄             𝑄𝑢
                          𝐹𝑧 = 𝑞𝐸𝑧 =         2
                                               =       2
                                                         𝜆0 𝑧 +         cos Ω𝑡 𝑧
                                       2𝜖0 𝑅     2𝜖0 𝑅          2𝜖0 𝑅 2

the equation of motion can thus be written as:

                                             𝑄𝜆0     𝑄𝑢
                                  𝑧ሷ = ൬          +          cos Ω𝑡൰ 𝑧
                                           2𝜖0 𝑅 𝑚 2𝜖0 𝑅 2 𝑚
                                                2


Therefore:

                                  𝑄𝜆0                                        𝑄𝑢
                          𝑘=ඨ                          ,           𝑎=
                                2𝜖0 𝑅 2 𝑚                                2𝜖0 𝑅 2 𝑚Ω2

 A-2 (0.4 pt)

           𝑄𝜆0                                                                   𝑄𝑢
 𝑘= √                                                                  ,𝑎=
         2𝜖0 𝑅 2 𝑚                                                           2𝜖0 𝑅 2 𝑚Ω2




A.3.
              𝑧 = 𝑝ሺ𝑡ሻ + 𝑞ሺ𝑡ሻ               →         𝑝ሷ + 𝑞ሷ = ሺ𝑘 2 + 𝑎Ω2 cos Ω𝑡ሻሺ𝑝 + 𝑞ሻ

    1. We are assuming that 𝑝 is almost constant, 𝑝ሷ ≃ 0.

    2. According to the assumptions 𝑘 2 ≪ 𝑎Ω2 and 𝑞 ≪ 𝑝 we can ignore 𝑘 2 in the first term
       on the right-hand side of the equation and 𝑞 in the second term.

    hence, the equation of motion can be simplified as follows:

                                                 𝑞ሷ = 𝑝𝑎Ω2 cos Ω𝑡.


                                                                                  S2-4
   As we have assumed that 𝑝 is a constant, the second derivative of 𝑞 is just proportional to
   cos Ω𝑡 which gives:

                                           𝑞 = −𝑝𝑎 cos Ω𝑡 + 𝑐1 𝑡 + 𝑐2 .

   Since 𝑞 is supposed to remain small, 𝑐1 must vanish. Also 𝑐2 = 0 because the mean value
   of 𝑞 is supposed to remain zero. Therefore:

                                                   𝑞 = −𝑝𝑎 cos Ω𝑡

 A-3 (1.8 pt)

 (a) 𝑞ሷ ሺ𝑡ሻ = 𝑝𝑎Ω2 cos Ω𝑡

 (b) 𝑞ሺ𝑡ሻ = −𝑝𝑎 cos Ω𝑡



A-4. Using the final result for 𝑞 the equation of motion for 𝑝 reads:

                       𝑝ሷ + 𝑝𝑎Ω2 cos Ω𝑡 = ሺ𝑘 2 + 𝑎Ω2 cos Ω𝑡ሻሺ𝑝 − 𝑎𝑝 cos Ω𝑡ሻ
Which gives:

                                 𝑝ሷ = 𝑘 2 𝑝 − 𝑎𝑘 2 𝑝 cos Ω𝑡 − 𝑎2 Ω2 𝑝 cos2 Ω𝑡

Averaging over one period, we’ll have:

                                                                              1
                                ‫ۃ‬cos Ω𝑡‫ = ۄ‬0              ,    ‫ۃ‬cos 2 Ω𝑡‫= ۄ‬
                                                                              2
and:

                                                      2
                                                       𝑎 2 Ω2
                                             𝑝ሷ = ቆ𝑘 −        ቇ 𝑝.
                                                          2

In order for the motion to be stable, the expression inside the parentheses should be negative,
i.e.

                                     𝑎 2 Ω2                               𝑘
                                            > 𝑘2          →     Ω > ξ2
                                        2                                 𝑎

 A-4 (1.5 pt)

                       𝑎 2 Ω2
 (a) 𝑝ሷ ሺ𝑡ሻ = (𝑘 2 −            )𝑝
                         2

                𝑘
 (b) Ω > ξ2 𝑎



A.5. With the given data we have:


                                                                           S2-5
                                          𝑄𝜆0
                               𝑘=ඨ                = 2 × 105 rad/s
                                        2𝜖0 𝑅 2 𝑚

                           𝑎 = 0.04      →     Ωmin = 7 × 106 rad/s

which is in the range of radio waves.

 A-5 (0.4 pt)

 𝑘 = 2 × 105 rad/s

 Ωmin = 7 × 106 rad/s




B: Doppler Cooling


B-1. From the uncertainty principle we know:
                                           Δ𝐸 × Δ𝑡 ≃ ℏ

Here Δ𝑡 is the time 𝜏 and Δ𝐸 = ℏΔ𝜔. So:

                                                            1
                              ℏΔ𝜔 × 𝜏 ≃ ℏ →          Δ𝜔 ≃     =Γ
                                                            𝜏


 B-1 (0.5 pt)

      1
 Γ=
      𝜏


B-2. We denote the forward and backward collision rates by 𝑠+ and 𝑠− respectively. Let us
                                                                           𝑣2
proceed in the atom’s frame of reference. Ignoring the terms of the order 𝑐 2 , the Doppler
effect can be written in the following form:
                                                    𝑣
                                         𝜔′ = 𝜔 (1 + )
                                                    𝑐
Taking the atom’s velocity in the positive 𝑥-direction, we have:


                                                  𝑣
                                                                          S2-6
                                      𝜔+ = 𝜔L (1 + )
                                                  𝑐
                                                  𝑣
                                      𝜔− = 𝜔L (1 − )
                                                  𝑐
So:
                                           𝑣                    𝑣
                       𝑠+ = 𝑠L + 𝛼 (𝜔L (1 + ) − 𝜔L ) = 𝑠L + 𝛼𝜔L
                                           𝑐                    𝑐
                                           𝑣                    𝑣
                       𝑠− = 𝑠𝐿 + 𝛼 (𝜔L (1 − ) − 𝜔L ) = 𝑠L − 𝛼𝜔L
                                           𝑐                    𝑐
The momentum transfer per unit time from the oncoming photons to the atom is equal to:

                                     𝜋+ = 𝑠+ × ሺ−ℏ𝑘+ ሻ

For the backward photons we have:

                                     𝜋− = 𝑠− × ሺ+ℏ𝑘− ሻ
             ℏ𝜔±
Where 𝑘± =         .
              𝑐

The total momentum transferred to the atom per unit time is equal to:
                                               𝑣            𝑠L
                            𝜋+ + 𝜋− = −2ℏ𝑘L      𝜔L 𝛼 ൬1 +     ൰
                                               𝑐           𝛼𝜔L

Where with the approximation 𝑠L ≪ 𝛼𝜔L , we will arrive at:
                                                     𝑣
                                  𝜋+ + 𝜋− = −2ℏ𝑘L      𝜔 𝛼
                                                     𝑐 L
Note that as the atom is heavy, its velocity almost doesn’t change after the absorption of the
photon. Therefore, there will be almost no Doppler shifting in the re-emitted photon and hence,
on average there will be no momentum transfer to the atom during the re-emission process.

The above expression is, in fact, the force. Since 𝑣 > 0, we have:

                                      𝐹 = −ሺ2𝛼ℏ𝑘L2 ሻ𝑣

The same result holds for 𝑣 < 0. This is in the atom’s reference frame. However, as we have
kept only up to the first order in 𝑣/𝑐, the same result holds in the lab frame:

                                      𝐹 = −ሺ2𝛼ℏ𝑘L2 ሻ𝑣


 B-2 (1.7 pt)
                                                                          S2-7
                  𝑣
 𝑠+ = 𝑠𝐿 + 𝛼𝜔L
                  𝑐
                  𝑣
 𝑠− = 𝑠𝐿 − 𝛼𝜔L
                  𝑐
 𝜋+ = 𝑠+ × ሺ−ℏ𝑘+ ሻ

 𝜋− = 𝑠− × ሺ+ℏ𝑘− ሻ

 𝐹 = −ሺ2𝛼ℏ𝑘L2 ሻ𝑣



B-3. The atom’s momentum before the collision is zero. After the collision it will be
(assuming the photon’s momentum is in the 𝑥-direction):
                                           𝑃1 = ℏ𝑘L

After re-emitting the photon, we may have two equally likely outcomes for the final
momentum:

   1. The photon is emitted in the positive 𝑥-direction which causes the atom’s momentum
      to become zero

   2. The photon is emitted in the negative 𝑥-direction which causes the atom’s momentum
      to become: 𝑃f = +2ℏ𝑘L

Thus, the mean final energy is equal to:

                                  𝑃2    1     1 4ℏ2 𝑘L2 ℏ2 𝑘L2
                         ‫𝐸ۃ‬f ‫ ۃ = ۄ‬f ‫ × = ۄ‬0 + ×       =
                                  2𝑚    2     2  2𝑚      𝑚
This process occurs during the time 𝜏. So, the input power (the power gained by the atom as a
result of this process) is equal to:

                                                   ℏ2 𝑘L2
                                           𝑃in =
                                                    𝑚𝜏


 B-3 (1.0 pt)

         ℏ2 𝑘L2
 𝑃in =
          𝑚𝜏



B.4. The output power (the power lost by the atom through collision with laser photons) can
be written as:


                                   𝑃out = 𝐹 ∙ 𝑣 = −2𝛼ℏ𝑘L2 𝑣 2
                                                                            S2-8
At equilibrium we should have:

                                       ℏ2 𝑘L2          തതത2               തതത   ℏΓ
             𝑃out + 𝑃in = 0    →              = 2𝛼ℏ𝑘L2 𝑣           →      𝑣2 =
                                        𝑚𝜏                                     2𝛼𝑚
And the temperature of this system is equal to:

                           1 തതത2 1                                 ℏΓ
                             𝑚𝑣 = 𝑘B 𝑇            →           𝑇=
                           2      2                                2𝛼𝑘B



 B-4 (0.8 pt)

 𝑃out = −2𝛼ℏ𝑘L2 𝑣 2

 തതത    ℏΓ
 𝑣 2 = 2𝛼𝑚

       ℏΓ
 𝑇=
      2𝛼𝑘B


B-5. Considering the given data:

                                 1 055 × 10 34 J.s
                𝑇=                                          = 2 × 10−4 K
                      2 × 4 × 1 381 × 10 23 J/K ×5 × 10 9 s

 B-5 (0.4 pt)

 𝑇 = 2 × 10−4 K
