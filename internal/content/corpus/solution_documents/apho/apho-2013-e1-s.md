---
id: solution-document-apho-2013-e1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2013/E1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2013-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2013/E1_S.pdf."
---

Experimental!
!                                         SOLUTION!!                              Question!               1!
                                               !                                                          !
                                               !                                       page!1!of!11!
                                               !
            WIND POWER AND ITS METROLOGIES (20 points)

A. Theoretical Background (1.0 points)
A.1                1 dm
(0.4 pts)     Pw = v02
                   2 dt
                   1
              Pw = ρ A0v03
                   2
              n= 3
A.2                1      v03               ρ Av03
(0.4 pts)     PR = ρ A (1 + λ ) (1 − λ ) =2
                                                   (1 + λ − λ 2 − λ 3 )
                   2       2                  4
              dPR
                   = 0 → 1 − 2λ − 3λ 2 = 0
               dλ
                  1
              λ=
                  3
A.3           Betz efficiency:
(0.2 pts)           P       16
              CP = R =         ~ 59.26%
                    PW λ 27




B. The Wind Tunnel (3.2 points)
B.1           We move the motor generator blade manually, and the voltage at the opto-sensor
(0.8 pts)     signal will increase every time the sensor hits the reflective sticker in the blade. This
              signal provides frequency signal to the meter.

              V(V)




B.2                 PW ρ A A0 v0n         ρ A vn
(2.4 pts)     ηM =       =        → PM = A 0 0
                    PM       2 PM          2ηM
              Wind tunnel diameter: DT!= 13.5 cm.
              A0 = π RT = 0.0143m2 .
                         2


                           ρ A
              ln PM = ln A 0 + n ln v → y = a + bx
                           2ηM
              From the plot and linear regression below we obtain the power factor:
              n = 3.0 , in good agreement with the theory thus showing that the wind

                                                                     Experimental!
!                                       SOLUTION!!                   Question!          1!
                                             !                                          !
                                             !                          page!2!of!11!
                                             !
            power PW ~ v3.!

                    ρ A A0
             ηM =            = 2.8%
                    2e a

            Results for full score / grading scheme (sampling from several setups):
            ηM = (3 ± 2)% , to anticipate wide variability in motor quality.


Connection diagram:




Note that for best results the voltmeter has to be placed right across the motor to avoid
extra voltage drop across the amperemeter.

      f        v         V              I      PM     ln v      ln PM
    (Hz)    (m/s)       (V)            (A)    (W)
    27.2     2.38      15.920         0.350   5.57     0.87      1.72
    26.0     2.27      14.910         0.330   4.92     0.82      1.59
    25.0     2.18      13.410         0.300   4.02     0.78      1.39
    23.8     2.08      11.830         0.260   3.08     0.73      1.12
    21.9     1.91      9.880          0.220   2.17     0.65      0.78
    19.6     1.71      8.100          0.190   1.54     0.54      0.43
    17.3     1.51      6.540          0.150   0.98     0.41     -0.02
    19.1     1.66      7.370          0.196   1.44     0.51      0.37
    17.8     1.55      6.490          0.172   1.12     0.44      0.11
    15.6     1.36      5.240          0.142   0.74     0.31     -0.30
    13.5     1.18      4.210          0.116   0.49     0.16     -0.72
    11.2     0.98      3.240          0.089   0.29    -0.02     -1.25
     9.5     0.82      2.630          0.068   0.18    -0.19     -1.72
     6.8     0.59      2.390          0.044   0.10    -0.52     -2.26

                                                                   Experimental!
!                                  SOLUTION!!                      Question!             1!
                                        !                                                !
                                        !                              page!3!of!11!
                                        !




C. Ping Pong Ball Anemometer (3.5 points)
C.1         Force diagram at static equilibrium:
(0.7 pts)




                                                              !

                      FD CD ρ Α AB v m
            tan θ =      =             !
                      WB   2 mB g

                    2mB g
            v=m             tan θ
                   CD ρ A A
C.2                       C ρ A
(2.8 pts)   ln tan θ = ln D A B + m ln v → y = a + bx
                            2mB g
            The deflection can be calculated from: tan θ = Δx / h , where Δx is the
            displacement and h is the height from the ruler. The cross section of the
            ball is: AB = π d B 2 / 4 where d B = 0.0395m . In the tunnel the wind
            velocity is given as (Eq. 4) in the tunnel v = c1 f M where c1 = 0.0873m .

            In this example we have:
            m = b = 2.2

                                                                  Experimental!
!                                     SOLUTION!!                  Question!           1!
                                           !                                          !
                                           !                          page!4!of!11!
                                           !
                    2mB g a
            CD =           e = 0.40
                    ρ A AB

            Results for full score / grading scheme (sampling from several setups):
            m = 2.0 ± 0.3
            CD = 0.42 ± 0.05




      f     tan θ       V        ln v      ln tan θ
    (Hz)               (m/s)
    27.2   0.0848     2.3746    0.8648      -2.47
    26.0   0.0818     2.2698    0.8197      -2.50
    25.2   0.0788       2.2     0.7884      -2.54
    24.2   0.0667     2.1127    0.7479      -2.71
    23.6   0.0606     2.0603    0.7228      -2.80
    22.2   0.0576     1.9381    0.6617      -2.85
    21.4   0.0515     1.8682     0.625      -2.97
    20.3   0.0455     1.7722    0.5722      -3.09
    19.1   0.0394     1.6674    0.5113      -3.23
    17.8   0.0333     1.5539    0.4408      -3.40
    16.6   0.0303     1.4492     0.371      -3.50
    14.3   0.0212     1.2484    0.2219      -3.85


NOTE:

These values are in very good agreement with the theoretical and established value of
n = 2, i.e. the drag force is proportional to the square of the velocity.

The drag coefficient CD is in close to the ideal known value: CD = 0.47 for smooth
ball with particle Reynold number Re ~ 103 – 105 as shown below. In this experiment
the maximum Reynold number is:

                                                                  Experimental!
!                                 SOLUTION!!                      Question!        1!
                                            !                                      !
                                            !                        page!5!of!11!
                                            !
                       ρ Α v DB 1.2 × 2.5 × 0.038
                Re B =         =                  = 6240                         (1)
                          µΑ       18.3 ×10−6
Discrepancy in our CD values could be due to finite boundary of our wind tunnel.




                                                                               !
        Figure 1. Drag coefficient as a function of the particle Reynold number




D. Hotwire Anemometer (HWA) (6.7 points)


[D.1] Constant Temperature (3.2 points)


D.1.1        In the Wheatstone bridge we have:
(0.4 pts)                RW
             VW = VINP         = c1 VINP
                       RW + RB
                2
             VW                                     2 R
                = ( a + b v c ) Aw (Tw − T0 ) → VINP = W2 AW (TW − T0 )( a + b v c )
             RW                                       c1
                    2   ( RW + RB )2
             VINP =                  AW (TW − T0 )( a + b v c ) = c2 ( a + b v c )
                             RW

                                ( RW + RB )2
             Where c2 =                      AW (TW − T0 ) is a constant.
                                     RW

              A = c2 a
              B = c2 b

                            2
                 ⎛V ⎞
D.1.2        y = ⎜ INP ⎟ − 1 with V0 = A is the input potential when there is no
(0.3 pts)        ⎝ V0 ⎠
             wind.

D.1.3        c = 0.7 ± 0.2
(2.5 pts)

                                                                                            Experimental!
!                                                                 SOLUTION!!                Question!          1!
                                                                       !                                       !
                                                                       !                       page!6!of!11!
                                                                       !
                                 b
                                   = 1.5 ± 0.6
                                 a



      fM                  VINPUT                 v          ln v           ln((V/V0)2-1)
     (Hz)                     (V)              (m/s)
     25.70                  1.785              2.244       0.808               0.546
     22.40                  1.740              1.956       0.671               0.464
     20.80                  1.737              1.816       0.597               0.459
     19.70                  1.710              1.720       0.542               0.407
     15.83                  1.615              1.382       0.324               0.209
     13.30                  1.560              1.161       0.149               0.079
     9.76                   1.464              0.852      -0.160              -0.181
     7.65                   1.390              0.668      -0.404              -0.426



     y"="0.8151x"* 0.0628                        CTA
          R²"="0.9922
                                      0.800
                                      0.600
                                      0.400



     log$(V/(V0)^2,1)
                                      0.200
                                       0.000
     *0.600             *0.400    *0.200 0.000    0.200   0.400    0.600    0.800   1.000
                                      *0.200
                                      *0.400
                                      *0.600
                                                  log$v




[D.2] Constant Current (3.5 points)
First we need to determine k and R0.
     D.2.1                            aAw
    (0.2 pts)                    k=
                                      α
     D.2.2                       R0 = (7.0 ± 1.5) Ω
    (1.2 pts)


      VW                           IW            PW            RW
      (V)                        (mA)           (W)            (Ω)
     0.109                        14.7         0.0016        7.4150
     0.153                        20.8         0.0032        7.3558
     0.225                        30.1         0.0068        7.4751
     0.308                        40.3         0.0124        7.6427

                                                                                      Experimental!
!                                                SOLUTION!!                           Question!          1!
                                                      !                                                  !
                                                      !                                  page!7!of!11!
                                                      !
     0.395            50.4           0.0199     7.8373
     0.509            61.2           0.0312     8.3170
     0.615            71.4           0.0439     8.6134
     0.730            81.0           0.0591     9.0123
     0.870            90.5           0.0787     9.6133
     1.048            100.7          0.1055     10.4071
     1.220            110.0          0.1342     11.0909
     1.470            120.1          0.1765     12.2398


     y"="28.204x"+"7.3363
          R²"="0.9984                 V/I
    14.0000
    12.0000
    10.0000
     8.0000
     6.0000
     4.0000
     2.0000
     0.0000
          0.0000            0.0500     0.1000    0.1500     0.2000




D.2.3                           VW IW R0
(0.2 pts)              y=                  −1
                                ⎛ VW     ⎞
                              k ⎜ − R0 ⎟
                                ⎝ IW     ⎠
D.2.4                  b
(1.9 pts)                = 1.5 ± 0.4
                       a

                       c = 0.77 ± 0.07



       VW               f              v                    y        ln(v)    ln(y)
      (V)             (Hz)           (m/s)
      1.41                           0.498                0.711      -0.698   -0.342
      1.33                           0.821                0.991      -0.198   -0.009
      1.30                           0.945                1.134      -0.056    0.125
      1.29                           1.048                1.187       0.047    0.172
      1.27                           1.206                1.306       0.188    0.267
      1.25                           1.344                1.443       0.295    0.367
      1.23                           1.542                1.586       0.433    0.461
      1.22                           1.746                1.684       0.557    0.521
      1.20                           1.873                1.855       0.627    0.618
      1.20                           2.032                1.899       0.709    0.642
      1.19                           2.211                2.056       0.794    0.721

                                                                                                Experimental!
!                                                        SOLUTION!!                             Question!           1!
                                                              !                                                     !
                                                              !                                     page!8!of!11!
                                                              !
       1.18                            2.406                           2.148        0.878   0.765
       1.18                            2.492                           2.162        0.913   0.771


            y"="0.7047x"+"0.1474
                 R²"="0.9979
                                            CCA
                                   1.000
                                   0.800
                                   0.600

    ln(y)                          0.400
                                   0.200
                              0.000
     .0.800 .0.600 .0.400 .0.200
                             .0.2000.000       0.200   0.400   0.600    0.800   1.000

                                   .0.400
                                   .0.600
                                             ln(v)




E. Wind Turbine (5.6 points)


       E.1             We use DMM in ohmmeter mode, we first measure the lead resistance
    (0.4 pts)          of the ohmmeter cables by shorting them to get the lead resistance.
                       RDMM,0 ~ 0.2 Ω
                       Then we measure the resistance of the motor directly with DMM
                       several times, looking for its minimum values and subtract it with the
                       lead resistance RDMM,0.!

                       We get :
                       RM = (0.8 ± 0.2)Ω

       E.2             To eliminate the contact or lead resistance we can perform:
    (1.2 pts)             (1) Two point resistance measurement at several lengths.
                          (2) Four point resistance measurement with current source (using
                              CCA box) ampmeter and voltmeter as shown below.

                       This yields:
                       λR = (0.21 ± 0.02)Ω / cm

                                                                                   Experimental!
!                                                            SOLUTION!!            Question!          1!
                                                                  !                                   !
                                                                  !                   page!9!of!11!
                                                                  !




                                        (a) Two-wire method (b) Four-wire method
Method #1: Using two-wire measurement




Method #2: Using four-wire method at l = 250 mm.


       V (mV)                    I (mA)
           198.5                      37.5
           169.2                      31.9
           131.2                      24.7
           103.5                      19.4
            78.3                      14.6
            69.4                        13
                          Nichrom"length"="25"cm
              250
                        y"="5.2614x"+"1.2869
              200               R²"="1

              150
     V"(mV)
              100

              50

               0
                    0     5       10      15    20      25    30   35   40
                                               I"(mA)




       E.3                We vary the nichrom wire length and calculate the power output, we
    (2.4 pts)             obtain peak at: RL = 1.0 Ω

                                                                                Experimental!
!                                                  SOLUTION!!                   Question!         1!
                                                          !                                       !
                                                          !                         page!10!of!11!
                                                          !
                          Results for full score / grading scheme (sampling from several setups):
                          RL = (1.0 ± 0.4)Ω
                          RL,theor = RM


    V (mV)                l (cm)     R (ohm)         P (mW)
     14.8                    2         0.42           0.522
     23.0                    3         0.63           0.840
     29.5                    4         0.84           1.036
     34.5                    5         1.05           1.134
     36.9                    6         1.26           1.081
     39.0                    7         1.47           1.035
     40.1                    8         1.68           0.957
     42.1                    9         1.89           0.938
     45.9                    10        2.10           1.003
     46.5                    11        2.31           0.936
     48.2                    12        2.52           0.922
     49.9                    13        2.73           0.912
     46.0                    14        2.94           0.720
     57.0                    20        4.20           0.774

                                   λR=0.21"Ω/cm
              1.200
              1.000
              0.800

     P"(mW)
              0.600
              0.400
              0.200
              0.000
                      0       5        10            15       20   25
                                            l"(cm)



       E.4                We use the optimum load by setting RL = 1.05 Ω or setting the length
    (1.6 pts)             of nichrom wire at l = 5!cm.!

                          The wind turbine efficiency :
                                                2
                                P      V / RL
                          ηWT = T = 1 T
                                PW 2 ρ Α AWT v 3
                          where AWT = π R 2 is the wind turbine cross section area with R = 55
                          mm, and v = c1 f M (Eq. 4) with c1 = 0.0873 m!and!fM is the frequency
                          of motor generator.

                                    2 π fT R
                          TSR =
                                      c1 f M

                                                                     Experimental!
!                                   SOLUTION!!                       Question!       1!
                                         !                                           !
                                         !                              page!11!of!11!
                                         !


     fM        fT        VT      TSR         PT      PW       ηWT
    (Hz)     (Hz)      (mV)                (mW)     (mW)      (%)
    27.8      9.8       44.0     1.40       1.84    81.48     2.26
    27.9      9.7       44.0     1.38       1.84    82.36     2.24
    27.2      9.7       43.0     1.41       1.76    76.32     2.31
    26.3      8.8       40.0     1.32       1.52    68.99     2.21
    25.5      8.2       38.5     1.27       1.41    62.88     2.24
    24.6      7.7       34.5     1.24       1.13    56.46     2.01
    23.6      6.7       30.5     1.12       0.89    49.85     1.78
    22.3      6.0       27.0     1.07       0.69    42.06     1.65
    21.2      5.0       23.0     0.93       0.50    36.13     1.39
    21.3      5.1       22.9     0.95       0.50    36.65     1.36
    19.8      4.0       19.3     0.80       0.35    29.44     1.20
    18.4      3.1       14.5     0.67       0.20    23.62     0.85
    16.8      2.1       9.0      0.49       0.08    17.98     0.43




Our turbine has range of efficiency <2.5% and tends to increase with higher TSR as
the turbine spin faster. Note that at some point this efficiency will drop, unfortunately
this is beyond the capability of our wind generator fan.
