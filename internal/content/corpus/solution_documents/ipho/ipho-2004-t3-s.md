---
id: solution-document-ipho-2004-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2004/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2004-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2004/T3_S.pdf."
---

Theoretical Question 3 / Solutions                                             Page 1/6


Theoretical Question 3: Scanning Probe Microscope



1. Answers


                             F0                                       bω 0                                  F0
(a) A =                                              and tan φ =                  .     At ω = ω 0 , A =
               m (ω − ω ) + b ω
                   2    2
                        0
                               2 2           2   2                 m(ω 02 − ω 2 )                          bω 0

           π
and φ =        .
           2


(b) A non-vanishing dc component exists only when ω = ω i .
                                                                      1
In this case the amplitude of the dc signal will be                     Vi 0VR 0 cos φi .
                                                                      2


      c1c 2 VR20
(c)              at the resonance frequency ω 0 .
        2 bω 0


(d) ∆m = 1.7 × 10 −18 kg.


                                  1/ 2
                   c
(e) ω '0 = ω 0 1 − 3 2                   .
                  mω 0


                                  1/ 3
                qQ
(f) d 0 = k e
              mω 0 ∆ω0

      d 0 = 41 nm.
                 Theoretical Question 3 / Solutions                                             Page 2/6


2. Solutions


(a) [1.5 points]
                                                                         d 2z    dz
Substituting z (t ) = A sin(ωt − φ ) in the equation m                      2
                                                                              + b + mω 02 z = F0 sin ωt
                                                                         dt      dt
yields,
                                                                               F0
           − mω 2 sin (ωt − φ ) + bωcos(ωt − φ ) + mω0 sin(ωt − φ ) =             sinωt .
                                                                2
                                                                                                   (a1)
                                                                               A
Collecting terms proportional to sinωt and cosωt , one obtains

  m(ω 02 − ω 2 ) cosφ + bω sin φ − 0 sin ωt + {− m(ω 02 − ω 2 ) sin φ + bω cos φ }cos ωt = 0 (a2)
                                  F
                                   A
Zeroing the each curly square bracket produces
                                          bω
                               tan φ =                ,                                            (a3)
                                       m(ω 02 − ω 2 )

                                                  F0
                               A=                                    .                             (a4)
                                      m 2 (ω 02 − ω 2 ) 2 + b 2ω 2

At ω = ω 0 ,

                                          F0         π
                                    A=        and φ = .                                            (a5)
                                         bω 0        2
(b) [1 point]
The multiplied signal is
                  Vi 0 sin(ωi t − φi )VR 0 sin(ωt )
                      1                                                                            (b1)
                     = Vi 0VR 0 [cos{(ωi − ω )t − φi } − cos{(ωi + ω )t − φi }]
                      2
A non-vanishing dc component exists only when ω = ωi . In this case the amplitude of
the dc signal will be
                                         1
                                           Vi 0V R 0 cos φi .                                      (b2)
                                         2


(c) [1.5 points]
Since the lock-in amplifier measures the ac signal of the same frequency with its
reference signal, the frequency of the piezoelectric tube oscillation, the frequency of the
                 Theoretical Question 3 / Solutions                                                Page 3/6


cantilever, and the frequency of the photodiode detector should be same.                              The
magnitude of the input signal at the resonance is
                                    F     ccV
                          Vi 0 = c2 0 = 1 2 R 0 .                                                     (c1)
                                   bω 0    bω 0
                                                              π       π
Then, since the phase of the input signal is −                    +       = 0 at the resonance, φi = 0 and
                                                              2       2
the lock-in amplifier signal is
                                     1                 cc V2
                                       Vi 0VR 0 cos 0 = 1 2 R 0 .                                     (c2)
                                     2                   2 bω0


(d) [2 points]
                                                        k
The original resonance frequency ω 0 =                    is shifted to
                                                        m
                                                1
                                            −
                k            k    ∆m            2           k    1 ∆m          1 ∆m
                    =          1+                   ≅         1−      = ω0 1 −      .                 (d1)
             m + ∆m          m    m                         m    2 m           2 m

Thus
                                             1    ∆m
                                     ∆ω 0 = − ω 0    .                                                (d2)
                                             2    m
                                                        π
Near the resonance, by substituting φ →                     + ∆φ and ω0 → ω 0 + ∆ω 0 in Eq. (a3), the
                                                        2
change of the phase due to the small change of ω 0 (not the change of ω ) is
                                π                      1     b
                          tan       + ∆φ = −              =       .                                   (d3)
                                2                   tan ∆φ 2m∆ω 0
Therefore,
                                                        2m∆ω 0
                             ∆φ ≈ tan ∆φ = −                   .                                      (d4)
                                                          b
From Eqs. (d2) and (d4),
                                     b              103 ⋅10 −12 π    π −18
                             ∆m =         ∆φ =                     =    10 = 1.7 × 10 −18 kg. (d5)
                                     ω0                10 6
                                                               1800 1.8


(e) [1.5 points]
In the presence of interaction, the equation of motion near the new equilibrium position
h0 becomes
                   Theoretical Question 3 / Solutions                             Page 4/6


                          d 2z       dz
                              2
                                + b + mω02 z − c3 z = F0 sin ωt
                                 m                                              (e1)
                           dt        dt
where we used f (h) ≈ f (h0 ) + c3 z with z = h − h0 being the displacement from the
new equilibrium position h0 . Note that the constant term f (h0 ) is cancelled at the
new equilibrium position.
                                                           k
Thus the original resonance frequency ω 0 =                  will be shifted to
                                                           m

                                    k − c3   mω 02 − c3          c
                             ω '0 =        =            = ω0 1 − 3 2 .               (e3)
                                      m         m               mω 0

Hence the resonance frequency shift is given by

                                                                 c3
                                         ∆ω 0 = ω0       1−          −1 .            (e4)
                                                                mω02



(f) [2.5 points]
The maximum shift occurs when the cantilever is on top of the charge, where the
interacting force is given by
                                                                qQ
                                                 f ( h) = k e      .                 (f1)
                                                                h2
From this,
                                                      df               qQ
                                               c3 =            = −2 k e 3 .          (f2)
                                                      dh h= d0         d0

Since ∆ω0 << ω 0 , we can approximate Eq. (e4) as
                                                         c3
                                            ∆ω0 ≈ −           .                      (f3)
                                                        2mω 0
From Eqs. (f2) and (f3), we have

                                              1         qQ        qQ
                                 ∆ω 0 = −         − 2k e 3 = k e           .         (f4)
                                            2mω 0       d0       mω 0 d 03

Here q = e = −1.6 × 10 −19 Coulomb and Q = 6e = −9.6 × 10 −19 Coulomb. Using the
values provided,
              Theoretical Question 3 / Solutions                                Page 5/6


                                               1/ 3
                                    qQ
                         d 0 = ke                     = 4.1× 10 −8 m = 41 nm.      (f5)
                                  mω0 ∆ω0

Thus the trapped electron is 41 nm from the cantilever.
                Theoretical Question 3 / Solutions                                       Page 6/6


3. Mark Distribution

        Total     Partial
 No.                                                       Contents
         Pt.        Pt.
 (a)    1.5         0.7     Equations for A and φ (substitution and manipulation)
                    0.4     Correct answers for A and φ
                    0.4      A and φ at ω 0
 (b)    1.0         0.4     Equation for the multiplied signal
                    0.3     Condition for the non-vanishing dc output
                    0.3     Correct answer for the dc output
 (c)    1.5         0.6     Relation between Vi and VR

                    0.4     Condition for the maximum dc output
                    0.5     Correct answer for the magnitude of dc output
 (d)    2.0         0.5     Relation between ∆m and ∆ω 0
                    1.0     Relations between ∆ω 0 (or ∆m ) and ∆φ
                    0.5     Correct answer (Partial credit of 0.2 for the wrong sign.)
 (e)    1.5                 Modification of the equation with f (h) and use of a proper
                    1.0
                            approximation for the equation
                    0.5     Correct answer
 (f)    2.5         0.5     Use of a correct formula of Coulomb force
                    0.3     Evaluation of c3

                    0.6     Use of the result in (e) for either ∆ω 0 or ω '02 −ω02

                    0.6     Expression for d 0
                    0.5     Correct answer
Total    10
