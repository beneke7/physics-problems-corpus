---
id: solution-document-apho-2003-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2003/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2003-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2003/T2_S.pdf."
---

Solution and Marking Scheme
Theory

II. Optical Gyroscope

                                               c
       The light wave moves with speed c ′ =     in the medium having refractive
                                              µ
                                             λ
index µ . Wavelength of light in medium λ ′ = , where λ is the wavelength of light
                                             µ
in vacuum.

a) (2 points)
                                              2πR + RΩt + 2πR      RΩ −1
    transit time for the CW beam: t + =                  =    (1 −     )
                                                  c′       c′       c′

                                               2πR − RΩt − 2πR      RΩ −1
    transit time for the CCW beam: t − =                  =    (1 +     )
                                                   c′       c′       c′

                                                           4πR 2 Ω
    the time difference between t + and t − : ∆t =
                                                        (c′)2 − R 2 Ω 2

                                              4πR 2 Ω
    since      (RΩ )2 << (c ′)2        ∆t ≈
                                               (c ′)2
b) (2 points) the round-trip optical path difference, ∆L , is given by

                   4πR 2 Ω
    ∆L = c ′∆t =
                     c′
c) (1 point)       ∆L ≅ 4.5x10-12 m.


d) (1 point) the corresponding optical phase difference ∆θ is,
          2π∆L 8π 2 R 2 Ω               λ
    ∆θ =        =         , where λ ' =
            λ'       cλ '               µ

   for N turns of fiber optic ring,

            8π 2 R 2 NΩ
    ∆θ =
                cλ '
e) (2 points)
                                      A



                                          R θ     RΩ

                                      θ
                                  O       h     RΩ cosθ


                 B                                    C
                                  L/3


The figure shows the triangular ring rotating about the centre o with the angular speed
Ω in the clockwise direction. Without loosing generality, let‘s first consider the
velocity of light along AC in the CW and CCW direction,

        v ± = c ± RΩ cos θ = c ± Ωh , where h is constant.
               L/3      L/3    L/3      Ωh
        τ± =        =        ≈     (1 ∓     )
                v±    c ± Ωh     c        c
        where τ± is the time taken for light travelling along AC in the CW and CCW.
              L       L      L     Ωh
        t± =      =        ≈ (1 ∓      ) , where L is the perimeter of the triangular
              v ± c ± Ωh c          c
ring.
        Therefore, the time difference of light travelling in one complete cycle.
             2ΩLh 4Ω  1  4ΩA
        ∆t =        = 2  Lh  = 2 , where A is the area of the triangular ring.
               c2      c 2         c

f) The resonance frequencies associated with L± corresponding to the effective cavity
lengths seen by CW and CCW propagating beams respectively is,
                   Ωh
 L+ = ct + ≈ L(1 −     )
                     c
                   Ωh
 L− = ct − ≈ L(1 +     )
                     c
where L± is the perimeter of the equilateral triangle in the CW (+) and CCW (-) and
we also use the fact that hΩ << c. Therefore,
                                   Ωh       4ΩA        ΩL2
         ∆L = L− − L+ = 2 L              =         =
                                    c         c         3c
The condition to sustain the laser oscillation (given in the problem),
               m
        ν± =      c , m = 1, 2, 3, … integers                       (1 point)
              L±
                           m       m        ∆L      ∆L
         ∆ν = ν − − ν + =     c−      c ≈ mc 2 = ν                  (1 point)
                          L−      L+        L        L
the approximation arises from L+ L− ≈ L2

where L is the perimeter of the triangular ring. Hence,

        ∆L    4A      1 L
 ∆ν =      ν=    νΩ =     Ω                               (1 point)
         L    Lc       3λ
