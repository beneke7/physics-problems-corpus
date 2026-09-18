---
id: solution-document-ipho-2009-e1-s
source: ipho
kind: official_answer_sheet
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2009/E1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2009/E1_S.pdf."
---

Answer Form
                            Experimental Problem No. 1
                               Diode laser wavelength


Task 1.1 Experimental setup.




                                                                               (0.75)


1.1 Sketch the laser path in drawing of Task 1.1 and Write down the height h    1.0
    of the beam as measured from the table

     h ± ∆h = (5.0 ± 0.05) ×10−2 m (0.25)


          Experimental setup for measurement of diode laser wavelength
Task 1.2 Expressions for optical path differences.


1.2 The path differences are                                                  0.5

     Case I: (0.25)

     ∆ I (n) = (BF + FP) − BP = (Lb − L0 ) + L20 + L2R (n) − L2b + L2R (n)
                                    L2R (n)          L2R (n)
             = (Lb − L0 ) + L0 1+           − L b 1+
                                      L20              L2b
                           1
     using      1+ x ≈ 1+    x
                           2
                              1 L2R (n)       1 L2R (n) 
           ≈ (Lb − L0 ) + L0 1+     2
                                           −
                                          b 1+
                                             L         2   
                              2 L0            2 Lb 
                   1        1   1
     ⇒    ∆ I (n) ≈ L2R (n) − 
                   2         L0 Lb 

     Case II: (0.25)

     ∆ II (n) = (FB + BP) − FP = (L0 − La ) + L2a + L2L (n) − L20 + L2L (n)
                                    L2L (n)          L2L (n)
             ≈ (L0 − La ) + La 1+           − L 0 1+
                                      L2a              L20
                           1
     using      1+ x ≈ 1+     x
                           2
                              1 L2L (n)         1 L2L (n) 
           ≈ (L0 − La ) + La 1+     2    − L 0 1+     2   
                              2 La              2 L0 
                    1        1   1
     ⇒    ∆ II (n) ≈ L2L (n) − 
                    2         La L0 


Task 1.3 Measuring the dark fringe positions and locations of the blade. Use
additional sheets if necessary.
                                   TABLE I




  n      (lR (n) ± 0.1) ×10−3 m (lL (n) ± 0.1) ×10−3 m      xR                  xL


  0              -7.5                    1.1              0.791                0.935


  1             -10.1                    3.7              1.275                1.369


  2             -12.4                    6.4              1.620                1.696


  3             -14.0                    8.2              1.903                1.968


  4             -15.6                    10.0             2.151                2.208


  5             -17.2                    11.4             2.372                2.424


  6             -18.4                    12.2             2.574                2.622


  7             -19.7                                     2.761


  8             -20.7                                     2.937


  9             -22.0                                     3.102


 10             -23.0                                     3.260


 11             -24.1                                     3.410


1.3 Report positions of the blade and their difference with higher precision:   3.25


     Lb ± ∆Lb = (653 ± 1) ×10−3 m (0.25) LABEL (I) (measuring tape)

     La ± ∆La = (628 ± 1) ×10−3 m (0.25) LABEL (I) (measuring tape)

     d = Lb − La = (24.6 ± 0.1) ×10−3 m (0.25) LABEL (H) (caliper)




Task 1.4 Performing a statistical and graphical analysis.


1.4 A procedure:                                                                   3.25

    From the condition of dark fringes and Task 1.2, we have

     1 2 1       1     5
       LR (n) −  =  n + λ
     2        L0 Lb    8

    and

     1 2 1       1     7
       LL (n) −  =  n + λ
     2        La L0    8

    Using (1.5), LR (n) = lR (n) − l0 R and LL (n) = lL (n) − l0L we can rewrite

     1                2 1  1     5
       (lR (n) − l0R )  −  =  n + λ
     2                  L0 Lb    8
                   2Lb L0       5
    ⇒ lR (n) =             λ n + + l0R
                   Lb − L0      8

    and

     1                2 1  1     7
       (lL (n) − l0L )  −  =  n + λ
     2                  La L0    8
                   2La L0       7
    ⇒ lL (n) =             λ n + + l0L
                   L0 − La      8

    These can be cast as equations of a straight line, y = mx + b .

    Case I:
                            5                2Lb L0
     y R = lR    xR = n +            mR =            λ      bR = l0R
                            8                Lb − L0

    Case II:
                            7               2La L0
     y L = lL    xL = n +            mL =           λ       bL = l0L
                            8               L0 − La



    Perform least squares analysis of above equations. In Table I, we write
    down the values x R and x L .

    One finds:

     mR ± ∆m R = (−6.39 ± 0.07) ×10−3 m


      mL ± ∆m L = (6.83 ± 0.19) ×10−3 m

      and (values of l0R and l0L )

      l0R ± ∆l0R = bR ± ∆bR = (−2.06 ± 0.17) ×10−3 m

      l0L ± ∆l0L = bL ± ∆bL = (−5.33 ± 0.36) ×10−3 m

      The equations used in the least squares analysis:
                  N                          N          N
             N ∑ x n y n −∑ x n ∑ y n′
      m=          n =1                   n =1       n ′=1
                                         ∆
             N             N                 N           N

           ∑ x ∑ y −∑ x ∑ x y
                      2
                      n             n′              n           n′   n′

      b=   n =1           n ′= 1             n =1       n ′=1
                                         ∆

      where
                  N 2
                  N
      ∆ = N ∑ x −∑ x n    2
                            n
            n=1   n=1 

      with N the number of data points.
      The uncertainty is calculated as

                             σ2                                 σ2 N
      (∆m) = N
             2

                                ∆
                                         ,       (∆b) =
                                                            2

                                                                 ∆
                                                                   ∑x       2
                                                                            n   with,
                                                                      n=1


                                N
               1
      σ2 =         ∑
             N − 2 n=1
                       (y n − b − mx n )
                                        2




      REFERENCE: P.R. Bevington, Data Reduction and Error Analysis for
      the Physical Sciences, McGraw-Hill, 1969.



Task 1.5 Calculating λ .

1.5    From any slope and the value of L0 one finds,                                    2.0

                 Lb − La m R2 mL2
        λ=
                 2La Lb mR2 + mL2

       Using the suggestion to replace d = Lb − La , we can write


       d     m R2 mL2
λ=
     2La Lb mR2 + mL2


λ ± ∆λ = (663 ± 25) ×10−9 m

The uncertainty may range from 15 to 30 nanometers.

A precise measurement of the wavelength is λ ± ∆λ = (655 ± 1) ×10−9 m .

The formula for the uncertainty,

                 ∂λ          ∂λ          ∂λ           ∂λ 
                             2           2           2            2
      ∂λ  2
∆λ =   ∆d 2 +       ∆La + 
                          2
                                     ∆Lb + 
                                        2
                                                    ∆mR + 
                                                       2
                                                                   ∆mL
                                                                      2

      ∂d       ∂La         ∂Lb         ∂m R         ∂m L 

one finds,

∂λ λ ∂λ   λ   ∂λ   λ                          ∂λ 2 m L2   λ
  = ,   =   ,    =   and                        =
∂d d ∂Lb Lb ∂La La                           ∂mR mR m L + mR2
                                                        2



and analogously for the other slope.

One can calculate directly these quantities. However, one may note that
the errors due to La , Lb and d are negligible. Moreover, mR2 ≈ m L2 and
 La ≈ Lb . This implies,

 ∂λ   λ   ∂λ
    ≈   ≈    . Thus,
∂mR mR ∂mL

             λ
∆λ ≈ 2           ∆m L ≈ (25 × 10−9 ) m
          mL
