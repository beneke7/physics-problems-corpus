---
id: solution-document-apho-2003-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2003/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2003-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2003/T1_S.pdf."
---

Solution and Marking Scheme
Theory
     I.      Satellite’s orbit transfer
                2
          mu0           GMm                         GM
a)                  =       2
                              ,         u0 =                                        (1 point)
           R0            R0                          R0

b)        conservation of angular momentum: mu1 R0 = mu2 R1
                                        2  GMm         2  GMm
          conservation of energy: 12 mu2 −     = 12 mu1 −
                                            R1             R0
                                R  2  2             1      1
                                0  − 1 u1 = 2GM  − 
                                R1                 R1 R0 
                         (R0 − R1 )(R0 + R1 ) u 2 = (2GM ) (R0 − R1 )
                                    2          1
                                 R1                          R0 R1
                                   GM         2 R1                  2 R1
                        u1 =                        = u0                           (2 points)
                                    R0      R1 + R0               R1 + R0
c)                      lim u1 =         2 u0                                       (1 point)
                        R1 → ∞

                                       R0                2 R0
d)                      u2 = u1           = u0                                      (1 point)
                                       R1            R1 (R1 + R0 )
                                   GM               GM     R0             R0
e)                      u3 =           =                      = u0
                                    R1               R0    R1             R1
                                   R0     R1 ( R1 + R0 )
                             =                           u2
                                   R1           2 R0
                                        R1 + R0
                        u3 = u 2                                                    (1 point)
                                         2R0


f) (3 points) combining equations (1) and (2) :
                       C
                d2              GM
                   2
                     r− m 3
                            = − 2
                dt      r        r
                                                                               C
                and for the circular orbit of radius R1 we have                  = GMR1
                                                                               m
                         d2       GMR1      GM
                hence       2
                              r −    3
                                       = − 2
                         dt        r         r
                putting r = R1 + η , where η << R1
                    d2                 GMR1                      GM
                ∴        η−                     3
                                                     = −                  2
                    dt 2           3    η                  2    η 
                                 R1 1 +                R1 1 + 
                                        R1                      R1 
           d2      GM       η      GM       η 
              2
                η − 2 1 − 3  ≈ −     1 − 2 
                                       2 
           dt      R1       R1     R1       R1 
           d2        GM
              2
                η ≈−    3
                          η
           dt        R1
                                                                     1    GM
         the frequency of oscillation about mean distance is f =
                                                                    2π    R1
                                                                             3


                                            3
                             1           R1
         the period T =         = 2π
                             f          GM
         Note that this period is the same as the orbital period


h) (1 point)

                                        Y
                                                        perturbed orbit



                                                R1

                                                                     X
      unperturbed orbit             M   •
