---
id: solution-document-ipho-2005-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2005/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2005-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2005/T2_S.pdf."
---

36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                         R.S.E.F.



             Th 2        ABSOLUTE MEASUREMENTS OF ELECTRICAL QUANTITIES

                                                                  SOLUTION

                                                                                              r       r
1. After some time t, the normal to the coil plane makes an angle ω t with the magnetic field B0 = B0 i . Then, the
   magnetic flux through the coil is
                         r r
                 φ = N B0 ⋅ S
                            r
                                                              (                      )
                                          r                 r           r
   where the vector surface S is given by S = π a 2 cos ω t i + sin ω t j

   Therefore      φ = N π a 2 B0 cosω t

   The induced electromotive force is
                            dφ
                   ε =−                  ⇒            ε = N π a 2 B0 ω sin ω t
                            dt

   The instantaneous power is P = ε 2 /R , therefore


                    P =
                        (N π a 2 B0ω )
                                       2

                                  2R

                                       1 T 2
                                         ∫
                                                        1
   where we used < sin 2ω t >=             sin ω t dt =
                                       T 0              2



2. The total field at the center the coil at the instant t is
                   r     r     r
                   B t = B 0 + Bi

                                                                                 (              )
          r                                                   r              r           r
   where Bi is the magnetic field due to the induced current Bi = Bi cos ω t i + sin ω t j

                         µ0 N I
   with           Bi =                  and           I=ε/R
                            2a

                         µ 0 N 2π a B0 ω
   Therefore      Bi =                       sinω t
                                 2R
   The mean values of its components are

                            µ 0 N 2π a B0 ω
                   Bix =                        sinω t cosω t = 0
                                   2R
                            µ 0 N 2π a B0 ω                   µ 0 N 2π a B0 ω
                    Biy =                        sin 2ω t =
                                   2R                               4R
   And the mean value of the total magnetic field is
                    r       r µ N 2π a B0 ω r
                    Bt = B0 i + 0           j
                                   4R
   The needle orients along the mean field, therefore

                            µ 0 N 2π aω
                  tan θ =
                                  4R




                                                                                                      Solution Th 2 Page 1 of 4


                                         36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                           R.S.E.F.




   Finally, the resistance of the coil measured by this procedure, in terms of θ , is

                          µ 0 N 2π aω
                    R=
                             4 tanθ

3. The force on a unit positive charge in a disk is radial and its modulus is
                  r r
                  v × B = vB =ωrB

   where B is the magnetic field at the center of the coil
                       µ I
                    B=N 0
                        2a
   Then, the electromotive force (e.m.f.) induced on each disk by the magnetic field B is
                                               b
                    ε D = ε D ' = Bω ∫ r dr = 1 Bω b 2
                                               0    2

   Finally, the induced e.m.f. between 1 and 4 is ε = εD + ε D'

                            µ 0 b 2ω I
                    ε =N
                                 2a


4. When the reading of G vanishes, I G = 0 and Kirchoff laws give an immediate answer. Then we have

                                                            µ 0 b 2ω
                    ε =IR                      ⇒     R=N
                                                              2a



5. The force per unit length f between two indefinite parallel straight wires separated by a distance h is.
                          µ 0 I1 I 2
                    f =
                          2π      h

   for I 1 = I 2 = I and length 2π a , the force F induced on C2 by the neighbor coils C1 is

                          µ0 a
                    F=            I2
                            h


6. In equilibrium
                    m g x = 4F d

   Then
                                4µ 0 a d 2
                    mg x =              I                    (1)
                                   h
   so that
                                        1/ 2
                         ⎛ mghx ⎞
                    I = ⎜⎜          ⎟
                                    ⎟
                         ⎝ 4µ 0 a d ⎠




                                                                                                        Solution Th 2 Page 2 of 4


                                      36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                            R.S.E.F.




7. The balance comes back towards the equilibrium position for a little angular deviation δϕ if the gravity torques with
   respect to the fulcrum O are greater than the magnetic torques.

                                                          ⎛ 1        1 ⎞
                  Mg l sinδϕ + m g x cosδϕ > 2 µ 0 a I 2 ⎜⎜       +       ⎟⎟ d cosδϕ
                                                          ⎝ h −δ z h +δ z ⎠



                                                               x         d
                                                  δϕ
                                      δz                           O
                                                       mg
                                                                l
                         h - δz                                G δϕ
                                                                                                h + δz
                      h + δz
                                                                   Mg
                                                                                              h - δz

   Therefore, using the suggested approximation

                                                   4 µ 0 a d I 2 ⎛⎜ δ z 2 ⎞⎟
                  Mg l sinδϕ + m g x cosδϕ >                        1 + 2 cosδϕ
                                                         h        ⎜    h ⎟⎠
                                                                  ⎝
   Taking into account the equilibrium condition (1), one obtains

                                           δ z2
                  M g l sin δϕ > m g x            cos δϕ
                                            h2
                                      δz
   Finally, for tan δ ϕ ≈ sin δ ϕ =
                                       d

                        M l h2                                 M lh2
                  δz<                  ⇒           δ z max =
                        m xd                                   m xd




                                                                                                         Solution Th 2 Page 3 of 4


                                36th International Physics Olympiad. Salamanca (España) 2005
                                                                                                    R.S.E.F.




                                              Th 2      ANSWER SHEET

Question    Basic formulas and ideas used                                   Analytical results                 Marking
                                                                                                               guideline
                       r        r
           Φ = N B0 ⋅ S
                dΦ
                                                           ε = N π a 2 B0 ω sin ω t                               0.5
           ε =−
                                                                (N π a 2 B0ω )
   1                                                                          2
                      dt
                                                            P =                                                   1.0
                  ε2                                                        2R
           P=
                  R
           r r       r
           B = B 0 + Bi
                   µ0 N
   2       Bi =             I                                µ N π aω   2
                      2a                                   R= 0                                                   2.0
                                                               4tan θ
                           By
           tanθ =
                           Bx

            r r r
           E = v×B
           v =ωr                                                   µ 0 b 2ω I
                 µ I
                                                           ε=N                                                    2.0
   3                                                                    2a
           B=N 0
                 2a
                br r
           ε = ∫ E dr
                  0


   4       ε = RI                                              µ b ω
                                                            R=N 0
                                                                            2
                                                                                                                  0,5
                                                                 2a

                  µ0 I I ′                                        µ0 a
   5        f =                                             F=              I2                                    1.0
                  2π h                                              h

                                                                                 1/ 2
                                                                  ⎛ mghx ⎞
   6       mg x = 4F d                                       I = ⎜⎜          ⎟
                                                                             ⎟
                                                                  ⎝ 4µ 0 a d ⎠
                                                                                                                  1.0




           Γ grav > Γ mag                                                M l h2
   7                                                        δ z max =                                             2.0
                                                                         m xd




                                                                                                 Solution Th 2 Page 4 of 4
