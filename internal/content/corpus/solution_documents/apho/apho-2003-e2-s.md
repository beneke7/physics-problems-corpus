---
id: solution-document-apho-2003-e2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2003/E2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2003-e2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2003/E2_S.pdf."
---

Solution and Marking Scheme
Experiment
II. Cylindrical Bore

a) Derivation of moment of inertia I                           (0.5 points)
   Configuration Fig. 1.2(a)
    I 1 = Ma 2 − mb 2 = (ρa 3 )a 2 − (ρπb 2 a )b 2
          1       1          1       1
          6       2          6       2
         1 5 1
        = ρa − ρπab 4
         6       2

     Configuration Fig. 1.2(b)
I 2 = Ma 2 − ma 2 − mb 2 = (ρa 3 )a 2 − (ρπb 2 a )a 2 − (ρπb 2 a )b 2
       1        1         1    1        1              1
       6       12         4    6       12              4
      1        1            1
    = ρa 5 − ρπa 3b 2 − ρπab 4
      6       12            4

    Derivation of period of oscillation T
    For both configurations:
    the restoring torque     τ = Fd
                             1    δs               δs
    where                F = m0 g           and        ≈ θ
                             2     A               d
                                                     2
                              1      d
                         F ≈    m0 g    θ                      (0.5 points)
                              2      2A
                        ⎛       b2 ⎞
    net mass m0 = ρa 3 ⎜⎜1 − π 2 ⎟⎟ = ρa 3 (1 − πx 2 )
                                                                      b
                                                          where x ≡
                        ⎝       a ⎠                                   a
                            1      d2
                              m0 g    θ
    since τ = Iα ,      α = 4      A                           (0.5 points)
                                 I
                                       1       d2
                                         m   g
                            4π 2       4
                                           0
                                               A
                       ω2 =        =
                             T2             I
                             4π 2 IA      ⎛ 16π 2 I ⎞
                                       = ⎜          ⎟A
                        2
                       T =
                            1             ⎜ m gd 2 ⎟
                              m0 gd  2
                                          ⎝ 0       ⎠
                            4

    For configuration in Fig. 2.2(a),
                              ⎛       1 5 1             4 ⎞
                              ⎜ 16π 2 ρa − ρπab ⎟
                     T1
                        2
                           = ⎜        6         2         ⎟A
                              ⎜ gd
                                    2
                                        ρa 3 (1 − πx 2 ) ⎟
                              ⎜                           ⎟
                              ⎝                           ⎠
                                                           2
                                             8π 2 ⎛ a ⎞ ⎛ 1 − 3π x 4 ⎞
                                         =        ⎜ ⎟ ⎜              ⎟ A                (0.5 points)
                                              3g ⎝ d ⎠ ⎝ 1 − π x 2 ⎠
                                                                 ⎛     2 1        ⎛ π b 2 3π b 4 ⎞ ⎞
                                                                 ⎜ 16π     ρ a 5 ⎜1 −          −   ⎟⎟
                                                                 ⎜       6        ⎝    2 a2 2 a4 ⎠ ⎟
For configuration in Fig. 2.2(b),                 T2 2         =                                       A
                                                                 ⎜         ρ a 3 (1 − π x 2 ) gd 2  ⎟
                                                                 ⎜⎜                                 ⎟⎟
                                                                  ⎝                                  ⎠
                            ⎛ π x 2 3π 4 ⎞
                              1−     −    x ⎟
                       ⎛a⎞ ⎜
                             2
           8π      2
                                 2      2
      =                ⎜ ⎟ ⎜                ⎟ A
            3g         ⎝d ⎠ ⎜    1 − π x2   ⎟⎟
                            ⎜
                            ⎝                ⎠

b) For configuration in Fig. 2.2(a),                     d = 7.0 cm
       A (cm)                     T1 for 40 oscillations(s)                    T1 (s)      (T1)2 (s2)
        16.5                 20.60         20.50          20.70                0.515         0.265
        17.9                 21.35         21.35          21.30                0.533         0.284
        22.6                 24.05         24.00          24.00                0.601         0.362
        27.4                 26.55         26.45          26.55                0.663         0.440
        29.0                 27.40         27.40          27.40                0.685         0.469
        34.2                 29.75         29.70          29.65                0.743         0.551
        36.1                 30.60         30.60          30.50                0.764         0.584
        43.0                 33.40         33.35          33.50                0.835         0.698
   (3 points):
    3 sets of n oscillations   (1 point) [2 sets –0.3, 1 set –0.7]
    n ≥ 20                     (1 point) [ ≥ 15, -0.3, ≥ 10, -0.7, <10, -1.0]
    number of lengths, A , ≥ 5 (1 point) [4, -0.3, 3, -0.5, 1 or 2, -1.0]

          0.80

                             2
          0.70         T12 (s )

          0.60


          0.50


          0.40


          0.30


          0.20


          0.10
                                                                           A (cm)
          0.00
                 0.0         10.0         20.0      30.0            40.0       50.0


                                       0.698 − 0.265                   0.433
slope of graph: s1 =                                            =                     = 1.634 s2/m
                                    ( 43.0 − 16.5) ×10−2             26.5 × 10−2

                                    b
                        x =           = 0.24 ± 0.02
                                    a
For configuration in Fig. 2.2(b),                    d = 4.9 cm
              A (cm)              T2 for 40 oscillations (s)              T2 (s)   (T2)2 (s2)
              43.8            46.95        46.90           46.80          1.172      1.374
              36.0            42.70        42.45           42.50          1.064      1.132
              30.9            39.60        39.40           39.35          0.986      0.973
              26.5            36.40        36.30           36.45          0.909      0.827
              19.5            30.80        30.85           30.75          0.776      0.593

 1.60
          T2 2 (s2)
 1.40


 1.20


 1.00


 0.80


 0.60


 0.40


 0.20


 0.00
                                                                          A (cm)
        0.0            10.0       20.0        30.0       40.0      50.0


                         1.374 − 0.827             0.547
slope of graph: s2 =                          =               = 3.14 s2/m
                      ( 43.8 − 26.5 ) ×10 −2
                                                 17.3 × 10−2
                           b
                    x =        = 0.25 ± 0.03
                           a
graph (3.0 points):          good graph                      (1.5 points)
                             slope                            (1.0 point)
                             error of experimental points (0.5 point)
                b
calculation for      (1.0 point)       error estimation       (1.0 point)
                a
