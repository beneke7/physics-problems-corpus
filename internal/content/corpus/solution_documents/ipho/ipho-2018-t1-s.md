---
id: solution-document-ipho-2018-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2018/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2018-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2018/T1_S.pdf."
---

Confidential
       Secretariado IPhO 2018
       Sociedade Portuguesa de Física
       Avenida da República Nº45 3ºEsq
       1050-187 Lisboa, Portugal Secretariado   Sociedade Portuguesa de
                                   IPhO 2018    Avenida da República Nº
                                                1050-187 Lisboa, Portug
       +351 21 799 36 65
       info@ipho2018.pt




Solutions to Theory Problem 1




      LIGO-GW150914

       (V. Cardoso, C. Herdeiro)




             July 15, 2018




                 v6.0
                                Secretariado
                                IPhO 2018
                                                      Sociedade Portuguesa de Física
                                                      Avenida da República Nº45 3ºEsq
                                                            Theory
                                                      1050-187 Lisboa, Portugal
                                                          English (UK)                       ST1-1
                                                                                          +351 21 799 36 65
                                                                                          info@ipho2018.pt




GW150914 (10 points)
Part A. Newtonian (conservative) orbits (3.0 points)
A.1 Apply Newton’s law to mass 𝑀1 :
                                                  2
                                                d 𝑟 ⃗1      𝑀1 𝑀2 𝑟 ⃗2 − 𝑟1⃗
                                        𝑀1             =𝐺                            .                                (1)
                                                d𝑡2       |𝑟2⃗ − 𝑟1⃗ |2 |𝑟2⃗ − 𝑟1⃗ |

Use, from eq. (1) of the question sheet
                                                                   𝑀1
                                                        𝑟 ⃗2 = −      𝑟⃗ ,                                            (2)
                                                                   𝑀2 1
in eq. (1) above, to obtain
                                               d2 𝑟1⃗        𝐺𝑀23      𝑟1⃗
                                                  2
                                                      =−           2 2
                                                                           .                                          (3)
                                               d𝑡        (𝑀1 + 𝑀2 ) 𝑟1 𝑟1

     A.1                                                                                                      1.0pt




                                                                                                                            Confidential
                                                                 𝐺𝑀23
                                           𝑛 = 3,           𝛼=             .
                                                               (𝑀1 + 𝑀2 )2

A.2 The total energy of the system is the sum of the two kinetic energies plus the gravitational poten-
tial energy. For circular motions, the linear velocity of each of the masses reads

                                               |𝑣1⃗ | = 𝑟1 Ω ,       |𝑣2⃗ | = 𝑟2 Ω ,                                  (4)

Thus, the total energy is
                                               1                        𝐺𝑀1 𝑀2
                                      𝐸=         (𝑀1 𝑟12 + 𝑀2 𝑟22 )Ω2 −        ,                                      (5)
                                               2                          𝐿
Now,
                            (𝑀1 𝑟1 − 𝑀2 𝑟2 )2 = 0                ⇒         𝑀1 𝑟12 + 𝑀2 𝑟22 = 𝜇𝐿2 .                    (6)
Thus,
                                                        1 2 2      𝑀𝜇
                                                 𝐸=       𝜇𝐿 Ω − 𝐺    .                                               (7)
                                                        2          𝐿

     A.2                                                                                                      1.0pt
                                                              1
                                                  𝐴(𝜇, Ω, 𝐿) = 𝜇𝐿2 Ω2 .
                                                              2

A.3 Energy (3) of the question sheet can be interpreted as describing a system of a mass 𝜇 in a cir-
cular orbit with angular velocity Ω, radius 𝐿, around a mass 𝑀 (at rest). Equating the gravitational
acceleration to the centripetal acceleration:

                                                            𝑀
                                                        𝐺      = Ω2 𝐿 .                                               (8)
                                                            𝐿2
This is indeed Kepler’s third law (for circular orbits). Then, from (7),

                                                         1 𝑀𝜇
                                                      𝐸=− 𝐺   .                                                       (9)
                                                         2  𝐿

     A.3                                                                                                      1.0pt
                                                                     1
                                                            𝛽=−        .
                                                                     2
                                Secretariado
                                IPhO 2018
                                                  Sociedade Portuguesa de Física
                                                  Avenida da República Nº45 3ºEsq
                                                        Theory
                                                  1050-187 Lisboa, Portugal
                                                      English (UK)                          ST1-2
                                                                                         +351 21 799 36 65
                                                                                         info@ipho2018.pt




Part B - Introducing relativistic dissipation (7.0 points)
B.1 Some simple trigonometry for the 𝑥, 𝑦 motion of the masses (in an appropriate Cartesian system)
yields:
                (𝑥1 , 𝑦1 ) = 𝑟1 (cos(Ω𝑡), sin(Ω𝑡)) , (𝑥2 , 𝑦2 ) = −𝑟2 (cos(Ω𝑡), sin(Ω𝑡)) .      (10)
Then,
                                   4     2       2   2
                                   3 cos (Ω𝑡) − 3 sin (Ω𝑡)                 2 sin(Ω𝑡) cos(Ω𝑡)                 0
                 𝑀1 𝑟12 + 𝑀2 𝑟22 ⎛
                                 ⎜                                                                               ⎞
           𝑄𝑖𝑗 =                 ⎜
                                 ⎜    2 sin(Ω𝑡) cos(Ω𝑡)                4    2       2    2
                                                                       3 sin (Ω𝑡) − 3 cos (Ω𝑡)                0 ⎟⎟
                                                                                                                 ⎟,               (11)
                        2
                                                                                                               2
                                 ⎝            0                                      0                       −3 ⎠
or, using some simple trigonometry and (6),

                                           1
                                           3 + cos 2Ω𝑡              sin 2Ω𝑡         0
                                     𝜇𝐿2 ⎛
                                         ⎜                                              ⎞
                               𝑄𝑖𝑗 =     ⎜   sin 2Ω𝑡             1
                                                                 3 − cos 2Ω𝑡         0 ⎟⎟
                                                                                        ⎟.                                        (12)
                                      2 ⎜
                                                                                      2
                                         ⎝      0                      0            −3 ⎠




                                                                                                                                         Confidential
     B.1                                                                                                                1.0pt
                                      1       2                                                                  otherwise
             𝑘 = 2Ω ,     𝑎1 = 𝑎2 =     ,𝑎 = − ,         𝑏1 = 1, 𝑏2 = −1, 𝑏3 = 0 , 𝑐12 = 𝑐21 = 1, 𝑐𝑖𝑗               =        0.
                                      3 3     3

B.2 First take the derivatives:

                                                   sin 2Ω𝑡  − cos 2Ω𝑡 0
                               d3 𝑄𝑖𝑗      3
                                                ⎛
                                               2⎜
                                                                        ⎞
                                                                        ⎟
                                      = 4Ω   𝜇𝐿 ⎜
                                                ⎜ − cos 2Ω𝑡 − sin 2Ω𝑡 0 ⎟
                                                                        ⎟.                                                        (13)
                                d𝑡3
                                                ⎝     0         0     0 ⎠

Then perform the sum:

                        d𝐸   𝐺                                             32 𝐺 2 4 6
                           = 5 (4Ω3 𝜇𝐿2 )2 [2 sin2 (2Ω𝑡) + 2 cos2 (2Ω𝑡)] =       𝜇 𝐿 Ω .                                          (14)
                        d𝑡  5𝑐                                              5 𝑐5

     B.2                                                                                                                1.0pt
                                                           32
                                                        𝜉=    .
                                                           5

B.3 Now we assume a sequency of Keplerian orbits, with decreasing energy, which is being taken
from the system by the GWs.
First, from (9), differentiating with respect to time,

                                                 d𝐸   𝐺𝑀 𝜇 d𝐿
                                                    =         ,                                                                   (15)
                                                 d𝑡    2𝐿2 d𝑡
Since this loss of energy is due to GWs, we equate it with (minus) the luminosity of GWs, given by (14)

                                           𝐺𝑀 𝜇 d𝐿    32 𝐺 2 4 6
                                              2
                                                   =−      𝜇 𝐿 Ω .                                                                (16)
                                            2𝐿 d𝑡     5 𝑐5
We can eliminate the 𝐿 and d𝐿/d𝑡 dependence in this equation in terms of Ω and dΩ/d𝑡, by using
Kepler’s third law (8), which relates:

                                                 𝑀          d𝐿    2 𝐿 dΩ
                                        𝐿3 = 𝐺      ,          =−        .                                                        (17)
                                                 Ω2         d𝑡    3 Ω d𝑡
                              Secretariado
                              IPhO 2018
                                                    Sociedade Portuguesa de Física
                                                    Avenida da República Nº45 3ºEsq
                                                         Theory
                                                    1050-187 Lisboa, Portugal
                                                        English (UK)                             ST1-3
                                                                                         +351 21 799 36 65
                                                                                         info@ipho2018.pt




Substituting in (16), we obtain:
                                   3
                             dΩ      96 3 Ω11           96 3 Ω11
                         (      ) = ( ) 15 𝐺5 𝜇3 𝑀 2 ≡ ( ) 15 (𝐺𝑀c )5 .                                              (18)
                             d𝑡       5   𝑐              5   𝑐

     B.3                                                                                                     1.0pt
                                                   𝑀c = (𝜇3 𝑀 2 )1/5 .

B.4 Angular and cycle frequencies are related as Ω = 2𝜋𝑓. From the information provided above: GWs
have a frequency which is twice as large as the orbital frequency, we have
                                                       Ω   𝑓
                                                          = GW .                                                     (19)
                                                       2𝜋    2

Formula (10) of the question sheet has the form

                                       dΩ                             96 (𝐺𝑀c )5/3
                                          = 𝜒Ω11/3 ,           𝜒≡                  .                                 (20)




                                                                                                                            Confidential
                                       d𝑡                              5   𝑐5
Thus, from (11) of the question sheet
                                                               8
                                                 Ω(𝑡)−8/3 =      𝜒(𝑡 − 𝑡) ,                                          (21)
                                                               3 0
or, using (20) and the definition of 𝜒 gives

                                        −8/3        (8𝜋)8/3 𝐺𝑀c 5/3
                                       𝑓GW (𝑡) =           ( 3 ) (𝑡0 − 𝑡) .                                          (22)
                                                       5     𝑐

     B.4                                                                                                     2.0pt
                                                          𝑝=1.

B.5 From the figure, we consider the two Δ𝑡’s as half periods. Thus, the (cycle) GW frequency is 𝑓GW =
1/(2Δ𝑡). Then, the four given points allow us to compute the frequency at the mean time of the two
intervals as
                                                         𝑡AB                  𝑡CD
                                        𝑡 (s)          0.0045               0.037
                                                                 −1
                                   𝑓GW (Hz)        (2 × 0.009)         (2 × 0.006)−1
Now, using (22) we have two pairs of (𝑓GW ,𝑡) values for two unknowns (𝑡0 ,𝑀c ). Expressing (22) for both
𝑡AB and 𝑡CD and dividing the two equations we obtain:
                                                                                      −8/3
                                        𝐴𝑡CD − 𝑡AB                  𝑓 (𝑡 )
                               𝑡0 =                ,           𝐴 ≡ ( GW AB )                 .                       (23)
                                          𝐴−1                       𝑓GW (𝑡CD )
Replacing by the numerical values, 𝐴 ≃ 2.95 and 𝑡0 ≃ 0.054 s. Now we can use (22) for either of the
two values 𝑡AB or 𝑡CD and determine 𝑀c . One obtains for the chirp mass

                                           𝑀c ≃ 6 × 1031 kg ≃ 30 × 𝑀⊙ .                                              (24)

Thus, the total mass 𝑀 is
                                                𝑀 = 43/5 𝑀c ≃ 69 × 𝑀⊙ .                                              (25)
This result is actually remarkably close to the best estimates using the full theory of General Relativity!
[Even though the actual objects do not have precisely equal masses and the theory we have just used
is not valid very close to the collision.]
                              Secretariado
                              IPhO 2018
                                                  Sociedade Portuguesa de Física
                                                  Avenida da República Nº45 3ºEsq
                                                       Theory
                                                  1050-187 Lisboa, Portugal
                                                      English (UK)                     ST1-4
                                                                                    +351 21 799 36 65
                                                                                    info@ipho2018.pt




     B.5                                                                                                1.0pt
                                    𝑀c ≃ 30 × 𝑀⊙ ,              𝑀 ≃ 69 × 𝑀⊙ .



B.6 From (8), Kepler’s law states that 𝐿 = (𝐺𝑀 /Ω2 )1/3 . The second pair of points highlighted in the
plot correspond to the cycle prior to merger. Thus, we use (19) to obtain the orbital angular velocity
at 𝑡CD :
                                        Ω𝑡CD ∼ 2.6 × 102 rad/s .                                  (26)
Then, using the total mass (25) we find

                                                  𝐿 ∼ 5 × 102 km .                                              (27)

Thus, these objects have a maximum radius of 𝑅max ∼ 250 km. Hence they have over 30 times more
mass and,
                                         𝑅⊙
                                              ∼ 3 × 103                                    (28)
                                        𝑅max




                                                                                                                       Confidential
they are 3000 times smaller than the Sun and!
Their linear velocity is
                                           𝐿
                                             Ω ≃ 7 × 104 km/s .
                                             𝑣col =                                                             (29)
                                           2
They are moving at over 20% of the velocity of light!

     B.6                                                                                                1.0pt
                                                          𝑅⊙                        𝑣col
                       𝐿collision ∼ 5 × 102 km ,              ∼ 3 × 103 ,                ∼ 0.2 .
                                                         𝑅max                        𝑐
