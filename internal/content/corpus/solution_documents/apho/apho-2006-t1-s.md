---
id: solution-document-apho-2006-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2006/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2006-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2006/T1_S.pdf."
---

7th Asian Physics Olympiad                                                       Theoretical Question 1 /Solutions   Page 1/3

                                               Theoretical Question 1

                                            Laser Cooling of Atoms

                                                          Solutions

a)     ω (1 + υ x / c) , this is classic Doppler effect.
b)     Absolute value of the momentum, transferred during each absorption, equals

                                                              ηω 0 / c                                                    (1)

       The momentum of the emitted photon is uniformly distributed over different
       directions, and after averaging gives a contribution which is much smaller than
       ηω 0 / c . The average force is nonzero, since for atoms moving towards right
       frequency of right laser gets larger( due to Doppler effect discussed in part A),
       while frequency of left laser goes down. Since number of scattered photons
       depends on the frequency in the reference frame of the atom, there is a net nonzero
       force. It equals

                                                            ⎛            1                               1               ⎞
          F (υ x ) = F+ + F− = −(ηω 0 / c ) ⋅ (s0γ / 2 ) ⋅ ⎜⎜                              −                             ⎟
                                                                                                                       2 ⎟
                                                            ⎝ 1 + 4(δ + ω 0υ x / c ) / γ     1 + 4(δ − ω 0υ x / c ) / γ ⎠
                                                                                    2    2                         2




       For υ x / c << δ / ω 0
                                                                8ηω02δs0
                                                  β =−
                                                          γc 2 (1 + 4(δ / γ ) 2 ) 2

       For β>0, one needs
                                                              δ <0.

c)     Characteristic de-Broglie wavelength at temperature Т equals λ = η / mk BT . To
       consider the atoms as point-like objects one needs this distance to be much smaller
       than characteristic inter particle separation n-1/3. From the condition that these two
       lengths are of the same order of magnitude we get

                                                  TQ = (η2 n 2 / 3 ) /(k B m) ≈ 10 −6 K

d)     < ∆p 2 >= η2ω 02 / c 2 ≈ 10 −54 kg 2 m 2 / s 2 - this is the mean square recoil momentum of a
       photon.

e)     Assume that the steady state value of the average square of the momentum of atom
       equals P02 . In steady state regime this quantity doesn’t change with time, and
       temperature is obtained according to 3k BTd / 2 = P02 /( 2m) . Let the momentum at some

     7th Asian Physics Olympiad                                                   Theoretical Question 1 /Solutions   Page 2/3

       point of time in steady state regime be P0 . Let’s consider the value of the
       momentum after some time t. During this time the atom will participate in
       N = 6γ p t >> 1 absorption-emission processes (6 comes from the number of lasers).
       For each absorption-emission event the atom gets two recoil kicks, each with a
       mean square value < ∆p 2 > calculated in part d) (one kick is during absorption and
       one is during emission). The directions of these kicks are uncorrelated for different
       events, so this leads to an increase of the mean square of the momentum by
       2 N < ∆p 2 > .
       On the other hand, atoms are cooled because of the dissipative force, and the
       change of the mean square of the momentum because of this process is − 2 β P02 t / m .
       For steady state solution these two processes compensate each other, so we obtain:

                                                                           ⎛ 2δ    γ ⎞⎟
                                  P02 = 12 < ∆p 2 > γ p m /( 2 β ) = 3ηmγ ⎜⎜    +        /4
                                                                           ⎝ γ    2 δ ⎟⎠
       Thus the temperature

                                                         2|δ |        γ
                                             Td = ηγ (           +         ) /(4k B )
                                                          γ          2|δ |

f)     The minimum is achieved for δ = −γ / 2 , and equals ηγ /(2k B ) = 2.4 ⋅10 −4 K

 7th Asian Physics Olympiad                            Theoretical Question 1 /Solutions   Page 3/3




                                   Mark Distribution

       Total        Partial
No                                                    Contents
        Pt            Pt
a)      1pt                            Expression for Doppler shifted frequency
b)      2.5            0.3              Expression for photon momentum (1)
                       0.5        Correct F- or F+ with the Doppler shifted frequency
                       1.0                        Expression for F(vx)
                       0.5                         Expression for β
                       0.2                        The correct sign of δ
c)       2.0           0.5     Expression for characteristic de Broglie wavelength or an
                                          estimate from uncertainty principle
                       0.5       Expression for characteristic inter particle separation
                       0.5      The equality between De Broglie wavelength and inter-
                                                   particle separation
                       0.5                  Numerical value of temperature
d)       0.5                                       Numerical answer
e)       3.5           0.5    Calculation of the number of absorption-emission processes
                                                      during time t
                       1.5     Expression for the change of the mean square momentum
                               (or energy) for time t due to random kicks (heating rate)
                       0.5                   Expression for the cooling rate
                       1.0                         Final expression x
f)       0.5           0.3     Expression for minimal temperature and numerical value
                       0.2                             δ = −γ / 2
