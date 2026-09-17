---
id: solution-document-ipho-2003-e1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2003/E1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2003-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2003/E1_S.pdf."
---

Solutions to Experimental Problems

Part A: Optical Properties of Laser Diode


 Question A-(1) (Total 1.5 point)
 Measure, tabulate, and plot the J vs. I curve.


a. Data (0.3 pts.) : Proper data table marked with variables and units.
Table A-(1): Data for J vs. I.
I (mA)      9.2      15.2      19.5      21.6          22.2   22.7        23.0   23.4   23.8
J (V)       0.00     0.01      0.02      0.03          0.05   0.06        0.09   0.12   0.30

I (mA)      24.2     24.6      25.0      25.4          25.8   26.2        26.6   27.0   27.4
J (V)       0.66     1.02      1.41      1.88          2.23   2.64        3.04   3.36   3.78

I (mA)      27.8     28.2      28.6      29.0          29.4   29.8        30.2   30.5   31.0
J (V)       4.12     4.48      4.79      5.13          5.44   5.72        6.05   6.25   6.55

I (mA)      31.4     31.8      32.2      32.6          33.0   33.4        33.8   34.2   34.6
J (V)       6.75     6.99      7.22      7.40          7.60   7.78        7.93   8.07   8.14

I (mA)      35.0     35.5      36.0      36.5          37.0   37.6        38.0   38.6
J (V)       8.18     8.20      8.22      8.24          8.24   8.25        8.26   8.27


Current error : ±0.1 mA; Voltage error : ±0.01 V




                                                  14
 b. Plotting (0.3 pts.): Proper sizes of scales, and units for abscissa and ordinate that bear
    relation to the accuracy and range of the experiment.
 c. Curve (0.9 pts.): Proper data and adequate line shape
  ‧ As shown in Fig. A-1. Start ~0 → Threshold → Linear → Saturate.


                      9



                      8



                      7



                      6

                                                                  Im ± ∆ Im

                                                                              ↓
Light Intensity (V)
                      5



                      4



                      3



                      2



                      1



                      0
                                                                   ↓
                          0   5       10         15        20           25         30      35    40
                                                      Current (mA)

                                  Fig. A-1   Graph of light intensity J versus current I




                                                        15
 Question A-(2) ( Total 3.5 points)
 Estimate the maximum current Im with uncertainty in the linear region of the J - I. Mark
 the linear region on the J - I curve figure by using arrows (↓) and determine the threshold
 current Ith with detailed error analysis.

a. Linear region marking (0.5 pts.) in Fig. A-1.
b. Least-square method or eye-balling with ruler and error analysis (1.5 pt.)


     Least-square fitting                    Eye-balling with ruler
   Error bar in graph 0.0x mA (0.5 pts)      Error bar in graph 0.x mA (0.5 pts)
   Least-square method (0.5 pts)             Expanded scale graph (0.5 pts)
   Error analysis (0.5 pts)                  draw three lines for error analysis(0.5 pts)


c. Im ± ∆ Im (0.5 pts.): Adequate value of Im (0.3 pts.) and error(± ∆ Im ) (0.2 pts.) from the
   linear region of J-I curve.
d. Adequate value of Ith with error (1.0 pts.)

  Ith = (21~26) ± (0.01 or 0.2 for single value) mA

  Adequate value of Ith (0.5 pts.) and error (± ∆ Ith ) (0.5 pts.)




                                                 16
         32


         31           y error bar

         30           x error bar

         29                                                                     ↓
         28


I (mA)   27


         26


         25


         24
                  ↓
         23


         22
              0   0.5    1      1.5     2      2.5      3      3.5    4   4.5   5   5.5   6
                                              Light Intensity (V)
                             Fig. A-2   Straight lines and extrapolations




                                                 17
Appendix：
◎A1-1
● Least-Square Method：
I = mJ +b → b = Ith
For y = mx +b
            y: I(mA)       x: J     xy        x2        y(x) = mx+b     (y-y(x))2

  1             23.8         0.30     7.14    0.090          23.7937     3.969E-05

  2             24.2         0.66   15.972   0.4356         24.17134      0.000821

  3             24.6         1.02   25.092   1.0404         24.54898       0.00260

  4             25.0         1.41    35.25   1.9881         24.95809       0.00176

  5             25.4         1.88   47.752   3.5344         25.45112       0.00261

  6             25.8         2.23   57.534   4.9729         25.81827      0.000334

  7             26.2         2.64   69.168   6.9696         26.24836       0.00234

  8             26.6         3.04   80.864   9.2416         26.66796       0.00462

  9             27.0         3.36    90.72 11.2896          27.00364     1.325E-05

  10            27.4         3.78 103.572 14.2884           27.44422       0.00196

  11            27.8         4.12 114.536 16.9744           27.80088     7.744E-07

  12            28.2         4.48 126.336 20.0704           28.17852      0.000461

  13            28.6         4.79 136.994 22.9441           28.50371       0.00927
                Σy =        Σx =     Σxy =   Σx2 =                     Σ (y-y(x))2 =
               340.6       33.71    910.93 113.840                           0.0268


∆ = NΣx 2 − (Σx ) = 13(113.840) − (33.71) 2 = 343.556
                       2




m=
       1
         (NΣxy − ΣxΣy ) = 13(910.93) − (33.71)(340.6) = 1.049
       ∆                           343.556

                          (113.840)(340.6) − (33.71)(910.93)
b=
      1
      ∆
        (
        Σx 2 Σy − ΣxΣxy =    )        343.556
                                                             = 23.479




                                                   18
       Σ( y − y ( x ))
                    2
                         0.0268
σy =                   =        = 0.049
           N −2          13 − 2

                        2
             dy
σ = (σ y ) +    σx          = (0.049)2 + (1.049 × 0.005) = 0.049
            2                                          2

             dx


       Nσ 2   13 × 0.049 2
σm =        =              = 0.0095
        ∆      343.556


       σ2                     113.840
σb =        Σx 2 = 0.049 ×            = 0.028
        ∆                     343.556

I th = 23.48 ± 0.03 mA


◎A1-2
● Eye-balling Method：
I =mJ +b → b = Ith
For y = mx+b
Line 1: y = 1.00 x + 23.66
Line 2: y = 1.05 x+ 23.48
Line3: y = 1.13 x + 23.31
Ith(av.) = 23.48
Ith(std.) = 0.18
 I th = 23.5 ± 0.2 mA




                                                19
 Part B: Optical Properties of Nematic Liquid Crystal
          Electro-optical switching characteristic of 90o TN LC cell


  Question B-(1) (5.0 points)
  Measure, tabulate, and plot the electro-optical switching curve (J vs. Vrms curve) of the NB
  90o TN LC, and find its switching slope γ, where γ is defined as (V90–V10)/V10.


a. Proper data table marked with variables and units. (0.3 pts)
    Applied voltage Light intensity Applied voltage Light intensity
        (Volts)        (Volts)          (Volts)        (Volts)
          0.00            0.00             2.44             1.22
          0.10            0.00             2.50             1.26
          0.20            0.00             2.55             1.27
          0.30            0.00             2.60             1.29
          0.40            0.00             2.67             1.32
          0.50            0.00             2.72             1.33
          0.60            0.00             2.85             1.36
          0.70            0.00             2.97             1.37
          0.80            0.00             3.11             1.38
          0.90            0.00             3.20             1.39
          1.00            0.00             3.32             1.39
          1.10            0.02             3.41             1.39
          1.20            0.04             3.50             1.40
          1.24            0.04             3.60             1.39
          1.30            0.04             3.70             1.40
          1.34            0.03             3.80             1.40
          1.38            0.02             4.03             1.40
          1.45            0.01             4.22             1.40
          1.48            0.01             4.40             1.39
          1.55            0.02             4.61             1.39
          1.59            0.03             4.78             1.40
          1.64            0.05             5.03             1.39
          1.71            0.11             5.20             1.39
          1.78            0.21             5.39             1.38
          1.81            0.26             5.61             1.39
          1.85            0.33             5.81             1.38
          1.90            0.44             6.02             1.38
          1.96            0.57             6.21             1.38
          2.03            0.70             6.40             1.38
          2.08            0.80             6.63             1.38
          2.15            0.92             6.80             1.38
          2.21            1.02             7.02             1.38
          2.28            1.10             7.20             1.38
          2.33            1.14
          2.39            1.19


                                              20
b. Properly choose the size of scales and units for abscissa and ordinate that bears the
   relation to the accuracy and range of the experiment. (0.3 pts)
c. Correct measurement of the light intensity (J) as a function of the applied voltage (Vrms)
   and adequate J - Vrms curve plot.
                        The intensity of the transmission light is smaller than 0.05 Volts in the normally
                         black mode. (0.4 pts)
                        There is a small optical bounce before the external applied voltage reaches the
                         critical voltage. (0.8 pts)
                        The intensity of the transmission light increases rapidly and abruptly when the
                         external applied voltage exceeds the critical voltage. (0.4 pts)
                        The intensity of the transmission light displays the plateau behavior as the external
                         applied voltage exceeds 3.0 Volts. (0.4 pts)

                               1.5
                                                V90




     Light Intensity (Volts)
                                                                Plateau
                               1.0




                                        Optical
                               0.5      bounce

                                      Τ=0       VC
                                                          V10



                               0.0
                                  0         1         2     3     4     5         6        7
                                                     Applied Voltage (Volts)

d. Adequate value of γ with error.
      Find the maximum value of the light intensity in the region of the applied voltage
                         between 3.0 and 7.2 Volts (0.6 pts)
                        Determine the value of 90 % of the maximum light intensity. Obtain the value of the
                         applied voltage V90 by interpolation. (0.6 pts)


                                                                 21
    Determine the value of 10 % of the maximum light intensity. Obtain the value of the
     applied voltageV10 by interpolation. (0.6 pts)
    Correct γ ± ∆γ value, (0.42 ~ 0.44) ± 0.02. (0.4+0.2 pts)


Question B-(2) (Total 2.5 points)
Determine the critical voltage Vc of this NB 90o TN LC cell.       Show explicitly with
graph how you determine the value Vc.

 a. Adequate value of VC with error, VC ± ∆VC.
       Make the expanded scale plot and take more data points in the region of VC.
        (0.8 pts)
       Determine the value of VC when the intensity of the transmission light increases
        rapidly and abruptly. (0.7 pts)
         Correct VC ± ∆VC value, (1.20 ~ 1.50) ± 0.01 Volts. (0.8+0.2 pts)




                                    0.16
                                    0.14




          Light Intensity (Volts)
                                    0.12
                                    0.10
                                    0.08
                                    0.06
                                                         VC
                                    0.04
                                    0.02
                                    0.00
                                       1.2    1.3 1.4 1.5 1.6            1.7
                                             Applied Voltage (Volts)
      (The data shown in this graph do not correspond to the data shown on the previous
      page. This graph only shows how to obtain Vc.)




                                                    22
Part C: Optical Properties of Nematic Liquid Crystal :
        Electro-optical switching characteristic of parallel aligned LC cell


 Question C-(1) (2.5 points)
   Assume that the wavelength of laser light 650 nm, LC layer thickness 7.7 μm, and
   approximate value of Δn ≈ 0. 25 are known. From the experimental data T⊥ and T‖
   obtained above, calculate the accurate value of the phase retardation δ and accurate
   value of birefringence Δn of this LC cell at V=0.


 a. Adequate value of δ and ∆n with error.
       Take and average the values of T‖. (0.3 pts)
       Take and average the values of T⊥. (0.3 pts)
       Determine the value of order m. (0.9 pts)
        Correct δ value, 15.7 ~ 18.2. (0.5 pts)
        Correct ∆n value, 0.20 ~ 0.24 (0.5 pts)
                   0.31 + 0.31 + 0.31
         T// =                        = 0.31 ± 0.01 Volts
                           3
                   1.04 + 1.03 + 1.04
         T⊥ =                         = 1.04 ± 0.01 Volts
                            3
               δ   T⊥
         tan       =±   = −1.83* ∴δ = 4.14 + 2mπ            (or − 2.14 + 2mπ )
            2      T //
             2πd∆n 2π × 7.7 × 0.25
         δ=        =                = 18.61
               λ           0.65
         Take m = 2(or 3)    ∴δ = 16.70(5.32π )
                          2πd∆n    δλ
         From δ =                 ∴ ∆n =
                                       = 0.22
                      λ           2πd
         Accepted value for ∴ ∆n = (0.20 ~ 0.24)
                    δ
        *If tan         = 1.83 , the value for δ will be either 4.68π or 6.68π , which is not
                    2
         consistent with data figure of problem C-(2).




                                                   23
 Question C-(2) (Total 3.0 points)
 Measure, tabulate, and plot the electro-optical switching curve for T‖ of this parallel
  aligned LC cell in the θ = 45o configuration.

a. Proper data table marked with variables and units. (0.3 pts)
Applied voltage Light intensity Applied voltage Light intensity Applied voltage Light intensity
   (Volts)         (Volts)         (Volts)         (Volts)         (Volts)         (Volts)
     0.00            0.30            2.01            1.47            3.33            0.00
     0.10            0.30            2.04            1.48            3.36            0.00
     0.20            0.29            2.07            1.48            3.39            0.00
     0.30            0.29            2.10            1.48            3.42            0.00
     0.40            0.29            2.13            1.45            3.45            0.00
     0.50            0.28            2.16            1.42            3.48            0.00
     0.60            0.26            2.19            1.38            3.51            0.00
     0.70            0.23            2.22            1.33            3.60            0.01
     0.80            0.19            2.25            1.27            3.70            0.02
     0.90            0.09            2.28            1.20            3.80            0.03
     0.99            0.00            2.31            1.14            3.90            0.04
     1.02            0.06            2.34            1.07            4.00            0.07
     1.05            0.16            2.37            1.00            4.10            0.09
     1.08            0.25            2.40            0.94            4.20            0.11
     1.11            0.40            2.43            0.87            4.30            0.14
     1.14            0.67            2.46            0.79            4.40            0.16
     1.17            0.93            2.49            0.72            4.50            0.19
     1.20            1.25            2.52            0.66            4.60            0.22
     1.26            1.31            2.55            0.61            4.70            0.25
     1.29            1.36            2.58            0.56            4.80            0.28
     1.32            1.32            2.61            0.51            4.90            0.31
     1.35            1.09            2.64            0.46            5.01            0.34
     1.38            0.85            2.67            0.42            5.11            0.37
     1.41            0.62            2.70            0.37            5.21            0.39
     1.44            0.46            2.73            0.33            5.29            0.42
     1.47            0.29            2.76            0.30            5.39            0.44
     1.50            0.13            2.79            0.26            5.51            0.48
     1.53            0.06            2.82            0.23            5.57            0.49
     1.59            0.03            2.85            0.21            5.70            0.52
     1.62            0.05            2.88            0.18            5.80            0.55
     1.65            0.15            2.91            0.16            5.90            0.57
     1.68            0.24            2.94            0.14            6.01            0.60
     1.71            0.34            2.97            0.12            6.10            0.62
     1.74            0.49            3.00            0.09            6.19            0.64
     1.77            0.63            3.06            0.08            6.30            0.66
     1.80            0.78            3.09            0.06            6.40            0.69
     1.83            0.92            3.12            0.05            6.60            0.73
     1.86            1.05            3.18            0.04            6.70            0.74
     1.89            1.19            3.21            0.03            6.80            0.76
     1.92            1.27            3.24            0.02            7.00            0.80
     1.95            1.34            3.27            0.02            7.20            0.83
     1.98            1.40            3.30            0.01

                                              24
       b. Properly choose the size of scales and units for abscissa and ordinate that bears the
          relation to the accuracy and range of the experiment. (0.3 pts)
       c. Correct measurement of the T‖ as a function of the applied voltage (Vrms) and
          adequate T‖-Vrms curve plot.
                         Three minima and two sharp maxima. (1.5 pts)
                         Maxima values within 15% from each other. (0.5 pts)
                         Minima are less than the values of 0.1 Volts. (0.4 pts)




                          1.5




Light Intensity (Volts)
                          1.0
                                   Vm




                          0.5




                          0.0
                             0          1        2     3     4     5                6   7
                                                Applied Voltage (Volts)




                                                               25
Question C-(3) (Total 2.0 points)
From the electro-optical switching data, find the value of the external applied voltage Vπ.



a. Adequate value of Vπ with error.
     Make the expanded scale plot and take more data points in the region of Vπ. (0.3 pts)
     Indicate the correct minimum of Vπ. (0.8 pts)
     Obtain the value of Vπ by interpolation or rounding. (0.5 pts)
     Correct Vπ value : (3.2 ~ 3.5) ± 0.01 Volts. (0.2+0.2 pts)



                          0.12

                          0.10




Light Intensity (Volts)
                          0.08

                          0.06

                          0.04
                                            Vπ
                          0.02

                          0.00
                             3.0   3.2 3.4 3.6 3.8               4.0
                                   Applied Voltage (Volts)




                                                 26
                              Marking Scheme

Part A: Optical Properties of Laser Diode
 No.                                   Contents                                    Sub Total
                                                                                  Scores Scores
 A(1) Measure, tabulate, and plot the J vs. I curve.                                     1.5 pts.


  a    Proper data table marked with variables and units.                          0.3
  b    Proper sizes of scales, and units for abscissa and ordinate that bear 0.3
       relation to the accuracy and range of the experiment.
  c    Proper data and adequate curve plotting (Fig. A-1)                          0.9
 A(2) Estimate the maximum current Im with uncertainty in the linear region              3.5 pts.
      of the J vs. I curve. Mark the linear region on the J - I curve figure by
       using arrows (↓) and determine the threshold current Ith with
       uncertainty.
  a    Mark the linear region.                                                     0.5
  b    Least-square fit or eye-balling with ruler and error analysis               1.5
  c    Obtain Im ± ∆Im properly                                                    0.5
  d    Adequate value of Ith ± ∆ Ith                                               1.0


Part B: Optical Properties of Nematic Liquid Crystal
            Electro-optical switching characteristic of 90o TN LC cell
 No.                                   Contents                                    Sub Total
                                                                                  Scores Scores
B-(1) Measure, tabulate, and plot the electro-optical switching curve (J vs.             5.0 pts.
      Vrms curve) of the NB 90o TN LC, and find its switching slope γ,
      where γ is defined as (V90–V10)/V10.
  a    Proper data table marked with variables and units.                          0.3
  b    Properly choose the size of scales and units for abscissa and ordinate 0.3
       that bears the relation to the accuracy and range of the experiment.
  c    Correct measurement of the light intensity (J) as a function of the
       applied voltage (Vrms) and adequate J - Vrms curve plot.
          The intensity of the transmission light reaches zero value in the 0.4
           normally black mode.
          There is a small optical bounce before the external applied voltage 0.8
           reaches the critical voltage.
          The intensity of the transmission light increases rapidly and 0.4


                                              27
          abruptly when the external applied voltage exceeds the critical
          voltage.
         The intensity of the transmission light displays the plateau 0.4
          behavior as the external applied voltage exceeds 3.0 Volts.
  d   Adequate value of γ with error, γ ± ∆γ.
         Correctly analyzing the maximum light intensity.                         0.6
         Correctly analyzing the value of V90.                                    0.6
         Correctly analyzing the value of V10.                                    0.6
         Correct γ ± ∆γ value, (0.42 ~ 0.44) ± 0.02.                              0.6
B-(2) Determine the critical voltage Vc of this NB 90o TN LC cell.                       2.5 pts.
      Show explicitly with graph how you determine the value Vc.
      Adequate value of VC with error, VC ± ∆ VC.
         Make the expanded scale plot and take more data points in the 0.8
          region of VC.
         Correctly analyzing the value of VC.                                     0.7
         Correct VC ± ∆ VC value, (1.2 ~ 1.5) ± 0.01 Volts.                       1.0



Part C: Optical Properties of Nematic Liquid Crystal :
           Electro-optical switching characteristic of parallel aligned LC cell
 No. Contents                                                                      Sub Total
                                                                                  Scores Scores
C-(1) Assume that the wavelength of laser light 650 nm, LC layer thickness               2.5 pts.
      7.7 μm, and approximate value of Δn ≈ 0. 25 are known. From the
      experimental data T⊥ and T‖ obtained above, calculate the accurate
      value of the phase retardation δ and accurate value of birefringence
      Δn of this LC cell at V=0.

      Adequate value of δ and ∆n with error.
       Correctly analyzing the values of T‖.                                      0.3
       Correctly analyzing the values of T⊥.                                      0.3
         Correctly determining the value of order m.                              0.9
         Correct δ value, 17.7 ~ 18.2.                                            0.5
         Correct ∆n value, 0.23 ~ 0.25.                                           0.5
C-(2) Measure, tabulate, and plot the electro-optical switching curve for T              3.0 pts.
      of this parallel aligned LC cell in the θ = 45o configuration.
  a   Proper data table marked with variables and units.                           0.3
  b   Properly choose the size of scales and units for abscissa and ordinate 0.3


                                              28
      that bears the relation to the accuracy and range of the experiment.
 c    Correct measurement of the T‖ as a function of the applied voltage
      (Vrms) and adequate T‖-Vrms curve plot.
         Three minima and two sharp maxima.                                    1.5
         Maxima values within 15 % from each other.                            0.5
         Minima are less than the values of 0.1 Volts.                         0.4
C-(3) From the electro-optical switching data, find the value of the external         2.0 pts.
      applied voltage Vπ
      Adequate value of Vπ with error.
         Make the expanded scale plot and take more data points in the 0.3
          region of Vπ.
         Indicate the correct minimum of Vπ.                                   0.8
         Correctly analyzing the value of Vπ.                                  0.5
         Correct Vπ± ∆ Vπvalue, (3.2 ~ 3.5 ) ± 0.1 Volts.                      0.4




                                              29
