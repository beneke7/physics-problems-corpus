---
id: solution-document-ipho-2019-e2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2019/E2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2019-e2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2019/E2_S.pdf."
---

Experiment IPhO 2019                                                        Q1-1
                                                                               S2-1
                      Wiedemann-Franz Law – Solution


Part A: Electrical conductivity of metals (1.5 points)
 A.1 (1.0 points)
 Magnet descend time:
                Number             Copper [s]      Aluminum[s]   Brass [s]
                     1                17.77            9.23            6.1
                     2                17.96            9.39           5.83
                     3                18.16            9.22           6.04
                     4                18.15            9.37           5.86
                     5                17.76            9.36           6.16
                     6                 18.2            9.44           5.92
                     7                17.67            9.65            5.9
                     8                 17.9            9.18           6.08
                     9                17.67            9.41           5.86
                    10                18.36            8.96           5.99

                    Average             17.96          9.32          5.97



 A.2 (0.5 points)
                                          Copper        Aluminum             Brass
  Electrical conductivity 
                                 1 
                               m    5.97 × 107      2.98 × 107      1.60 × 107


   Experiment IPhO 2019                                                     Q1-1
                                                                            S2-2
Part B: Thermal conductivity of copper (3.0 points)


B.1 (0.1 points)
      Rod 1 temperature : 22.76 [C]
B.2 (0.5 points)




B.3 (0.1 points)
       P = I  V = 5.51 W 
B.4 (0.5 points)
 Time [S]   T1 [C]     T2 [C]   T3 [C]   T4[C]   T5 [C]   T6 [C]   T7 [C]   T8 [C]
 900        26.98      27.96    28.95    29.96   30.98    32.03    33.10    34.20
 1050       27.16      28.16    29.17    30.20   31.240   32.30    33.38    34.48
 1200       27.29      28.30    29.33    30.37   31.42    32.49    33.58    34.68
B.5 (1.0 points)


   Experiment IPhO 2019                                                Q1-1
                                                                       S2-3
B.6 (0.5 points)

                 P                 5.51W                   W 
      0 = −        =−                                 = 420 
                 T                   2         K         mK 
               A         (10−2  m)   −41.8   
                 x                             m
       T 31.04 C  − 30.62 C              K 
          =                       = 1.4 10−3  
       t        5  60  s                  s

B.7 (0.3 points)

higher value

We expect a higher value of 𝜅0 compared with the real  cu because of 2 reasons:
  1. A part of the supplied heat power is lost through the side walls. Therefore,
     the heat transfer through the cross-section of the rod is smaller.
  2. Since the system is not in a steady state (Δ𝑇
                                                Δ𝑡
                                                   ≠ 0), the corresponding power
     involved should be subtracted from the power supplied by the heater.


    Experiment IPhO 2019                                                                       Q1-1
                                                                                               S2-4
Part C: Heat loss and heat capacity of copper (4.0 points)


C.1 (1.0 points)

  Time  s    T1 C    T2 C    T3 C    T4 C    T5 C    T6 C    T7 C    T8 C    Tav C 
    20                                       30.67     30.67                                   30.67
    80                                       30.59     30.59                                   30.59
    140                                      30.50     30.50                                   30.50
    200                                      30.42     30.42                                   30.42
    260                                      30.34     30.34                                   30.34
    320                                      30.26     30.26                                   30.26
    380                                      30.18     30.18                                   30.18
    400                                      30.38     30.25                                   30.31
    420                                      30.87     30.56                                   30.72
    440                                      31.37     30.96                                   31.16
    460                                      31.85     31.38                                   31.61
    480                                      32.32     31.82                                   32.07
    500                                      32.78     32.26                                   32.52
    560                                      32.88     32.75                                   32.81
    620                                      32.73     32.70                                   32.72
    680                                      32.61     32.61                                   32.61
    740                                      32.51     32.51                                   32.51
    800                                      32.40     32.40                                   32.40
    860                                      32.30     32.30                                   32.30


   Experiment IPhO 2019                                                                    Q1-1
                                                                                           S2-5
C.2 (1.0 points)




C.3 (1.0 points)

The purpose of this part is to correct to first order the result in part B. Hence,
every solution within 10% accuracy is accepted (see marking scheme).

 Solution 1 (using slopes):                        Solution 2 (using jump):
                     Tav                                              Tav
 Ploss = c p  m                                  Ploss = c p  m 
                      t Cooling                                        t Cooling
                  T            T               Pin  t = c p  m  T
 Pin = c p  m   av           − av          
                  t             t Cooling                Tav
                       Heating                    Where                  is the average of the
             T                                                t Cooling
 Where av                 is the average of both
              t Cooling                           two cooling slopes, and T is the
 cooling slopes.                                   extrapolated jump in temperature half
                             5.5 W               way though the heating time interval.
 cp  m =                                                     Pin  t 5.5 W  120  s        J 
                     −2  K         −3  K     cp  m =           =                    = 224  
             2.27 10  s  + 1.6 10  s                    T         2.94  K             K 
                                       


   Experiment IPhO 2019                                                             Q1-1
                                                                                    S2-6
               J               J                        J 
 c p  m = 226    c p = 390                 c p = 386          which is the correct
               K               kg  K                   kg  K 
 Which is 1% off the correct value.              value.
             J            K                              J            K 
 Ploss = 226   1.4 10−3   = 0.32 W       Ploss = 224   1.4 10−3   = 0.31W 
             K            s                              K            s
C.4 (1.0 points)

The temperature gradient is proportional to the local heat flow.




To first order, the average temperature gradient will be proportional to the
average heat flow. Therefore, the temperature gradient will be proportional to
     1
Pin − Plosses :
     2
              1          1         1          T 1                   1          T 1
        Pin − Pabsorb − Ploss Pin − c p  m     − Qloss        Pin − c p  m     − Qloss
     =       2          2   =     2          t  2      = 0       2          t  2
             A  ( T / x )         A  T / x                             P
                           1      J            K  1
                 5.51W  −  226   1.4 10−3   −  0.32 W 
        W                2      K            s 2                   W 
 = 420                                                         = 396 
         mK                        5.51W                              mK 

Which gives an error of 2.5% error compared to expected 385 
                                                                           W 
                                                                                 . We expect
                                                                          mK 
a 1% systematic error (see appendix).


   Experiment IPhO 2019                                                                       Q1-1
                                                                                              S2-7
Part D: Thermal conductivity of multiple metals (1.0 points)


D.1 (0.1 points)
     T = 22.65 C 
D.2 (0.2 points)

Time of measurement: 1041 s 

       T1 C       T2 C     T3 C     T4 C      T5 C        T6 C    T7 C       T8 C 
       41.68        40.51      38.51      34.65       32.47      30.71        29.63        28.62

       Tcu1 / x                 TBr / x                 TAl / x                   Tcu 2 / x
            K                        K                       K                          K 
      41.79                   137.86                   62.86                      36.07  
            m                        m                       m                          m
D.3 (0.7 points)




                         2             1
                           (Δ𝑇𝑐𝑢1 /Δ𝑥)+ (Δ𝑇𝑐𝑢2 /Δ𝑥)             𝑊
                         3             3
𝜅𝐵𝑟𝑎𝑠𝑠 = 𝜅𝐶𝑜𝑝𝑝𝑒𝑟 ⋅                      = 115 [ ]
                        Δ𝑇𝐵𝑟 /Δ𝑥                𝑚𝐾
                            1                2
                              (Δ𝑇𝑐𝑢1 /Δ𝑥) + (Δ𝑇𝑐𝑢2 /Δ𝑥)         𝑊
      𝜅𝐴𝑙𝑢𝑚𝑖𝑛𝑢𝑚 = 𝜅𝐶𝑜𝑝𝑝𝑒𝑟 ⋅ 3                3          = 239 [    ]
                                       Δ𝑇𝐴𝑙 /Δ𝑥                𝑚⋅𝐾


   Experiment IPhO 2019                                             Q1-1
                                                                    S2-8
Part E: The Wiedemann-Franz law (0.5 points)


E.1 (0.5 points)

                            Copper         Aluminum         Brass
       𝜎 [Ω−1 𝑚−1 ]
         Electric         5.97 × 107       2.98 × 107    1.60 × 107
       conductivity
              𝑊
          𝜅 [𝐾𝑚]
                             396               239          115
     Heat conductivity
            𝑊Ω
          𝐿[ 2 ]
             𝐾            2.21 × 10−8      2.67 × 10−8   2.40 × 10−8
     Lorenz coefficient
