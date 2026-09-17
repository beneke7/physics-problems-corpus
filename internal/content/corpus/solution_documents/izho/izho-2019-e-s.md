---
id: solution-document-izho-2019-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2019_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2019_E_S.pdf."
---

XV International Zhautykov Olimpiad/Experimental Competition                                          Page 1/7
              SOLUTION TO THE EXPERIMENTAL COMPETITION
                                   Absorption of light (15,0 балла)
                                      Part 1. Studying a photodetector
1.1 The working measurement circuit is shown in the figure on the right. When the
switch is shortened, the multimeter should be switched to the voltage measurement
mode, i.e. the voltage across the resistor is measured. When the switch is open, the
multimeter should be switched to the ohmmeter mode, the resistance is measured.
1.2 – 1.5 The results of the measurement of the voltage across the resistor as a function of its resistance are
shown in Table 1. It also presents the results of calculations of the current using the formula
                   U
               I=                                                                                        (1)
                    R
and the heat power generated in the resistor and calculated via the expression
                                U2
               P = UI = I R =
                           2
                                                                                                         (2)
                                 R
                                                     Table 1
                                     R, kΩ     U, mV       I, 𝜇𝐴      P, 𝜇W
                                      104        389        3,74       1,46
                                     87,4        388        4,44       1,72
                                     69,5        387        5,57       2,15
                                     48,5        385        7,94       3,06
                                     29,3        382       13,04       4,98
                                     15,9        373       23,46       8,75
                                     10,8        363       33,61      12,20
                                      8,6        353       41,05      14,49
                                      7,9        348       44,05      15,33
                                      6,8        336       49,41      16,60
                                      6,4        330       51,56      17,02
                                      5,3        307       57,92      17,78
                                      5,1        301       59,02      17,76
                                      4,3        266       61,86      16,45
                                      3,9        246       63,08      15,52
                                      3,1        196       63,23      12,39
                                      2,8        176       62,86      11,06
                                      2,4        154       64,17       9,88
                                       2         131       65,50       8,58
                                      1,5        100       66,67       6,67
                                      1,3         86       66,15       5,69
       The graph of the voltage across the resistor versus its current is shown in the figure below.
XV International Zhautykov Olimpiad/Experimental Competition                                             Page 2/7




       The graph of the heat power in the resistor versus its resistance is shown in the figure below.




       To determine the position of the maximum, it is necessary to take additional measurements in the
range of 0 to 10 kΩ. According to the measurement results, it turns out that the maximum heat power
generated in the resistor is reached at
                R = 5, 4k  .                                                                           (3)
                                     Part 2. Absorption of laser radiation
2.1 Since the transmittances of the same type of light filters are equal, and the laser radiation is
monochromatic, the dependence of the transmitted light intensity on the number of filters has the form of a
geometric progression
                In = k n I0 .                                                                           (4)
2.2 The results of measurements of the dependence of the light intensity on the number of filters are given in
Table 2. The measurements have been carried out at the resistance of 3.3 kΩ.

                                                   Table 2
                          grey      yellow     blue                 grey      yellow      blue
                         filter      filter   filter                filter     filter    filter
                  n      U, mV      U, mV     U, mV        n        Ln U       Ln U      Ln U
                  0       196         197      197         0        5,28       5,28      5,28
                  1       104         180       74         1        4,64       5,19      4,30
                  2        50         161      24,9        2        3,91       5,08      3,21
XV International Zhautykov Olimpiad/Experimental Competition                                           Page 3/7
                  3        25,4       148         9           3      3,23       5,00      2,20
                  4        13,6       135        3,6          4      2,61       4,91      1,28
                  5         6,6       128                     5      1,89       4,85

       To verify formula (4) it is convenient to present it in the semi-log scale as
               ln I n = ln I 0 − n ln k .                                                                 (5)
At such a scale, the dependence of ln I n on the number n of light filters should be linear. The measurements
and calculations confirm this conclusion, i.e. formula (4) correctly describes the intensity of the transmitted
light. The figure below shows the results obtained.




2.3 As it follows from formula (5), the slope of the dependence is equal to the logarithm of the transmittance
                 a = ln k ,                                                                              (6)
therefore, the transmittance is calculated by the formula
                 k = exp(a) ,                                                                            (7)
and its error is determined by the expression
                 k = exp( a)  a ,                                                                     (8)
        Table 3 shows the results of calculations (using the least squares method) of the slope coefficients a ,
their errors a , the transmittances 𝑘 and their errors ∆𝑘 for all three types of light filters.

                                                     Table 3
                                                grey      yellow      blue
                                                filter     filter    filter
                                       𝑎       -0,678     -0,089    -1,011
                                      ∆𝑎        0,014     0,008      0,032

                                       𝑘       0,508      0,915      0,364
                                      ∆𝑘       0,007      0,007      0,012

2.4 The transmittance of a pair of filters for the laser monochromatic radiation is equal to the product of the
transmittances of each filter:
               k1, 2 = k1  k 2                                                                          (9)
       Table 4 shows the measured and calculated transmittances for all pairs. As it follows from the data
presented, there is a good agreement between these results, i.e. formula (9) is experimentally verified.

                                                    Table 4
XV International Zhautykov Olimpiad/Experimental Competition                                          Page 4/7
                        Pair of filters                measured               calculated
                        blue + yellow                   0,342                   0,333
                         blue + grey                    0,187                   0,185
                        yellow + grey                   0,460                   0,464

                                    Part 3. Absorption of white light
3.1 The results of measurements of the light intensity transmitted through the filters are shown in Table 5.
(the measurements have been made with the resistance of 10.1 kΩ).

                                                   Table 5
                          grey      yellow     blue                 grey     yellow         blue
                         filter      filter   filter                filter    filter       filter
                  n      U, mV      U, mV     U, mV        n        Ln U      Ln U         Ln U
                  0       84,8       77,8      72,6        0        4,44      4,35         4,28
                  1       39,4       59,4      31,7        1        3,67      4,08         3,46
                  2       17,9       50,8      19,2        2        2,88      3,93         2,95
                  3        8,4       44,5       14         3        2,13      3,80         2,64
                  4        3,8       39,2      10,8        4        1,34      3,67         2,38
                  5                   35        8,7        5                  3,56         2,16

       The graphs of these dependencies are shown in the figure below.




3.2 It can be seen from the graph that formula (5) is correct for grey filters, but not for blue ones. The main
reason for the violation of the obtained law is that the transmittance significantly depends on the wavelength
of incident light. So, for grey filters, the transmittance varies little in the visible range of wavelength and
formula (5) is applicable within the experimental error. For blue filters, though, the transmittance varies
noticeably, such that formula (5) turns inapplicable.
3.3 The measured transmittances for the three light filters provided are given in Table 6.
                                                      Table 6
                                               grey filter           0,450
                                               blue filter           0,431
                                              yellow filter          0,759
XV International Zhautykov Olimpiad/Experimental Competition                                            Page 5/7
         Table 7 shows the measured and calculated transmittances of pairs of light filters. It can be seen that
for the white source the transmittance of a pair of filters is not equal to the product of transmittances of each
filter, which is prescribed to the dependence of transmittances on the wavelength.
                                                    Table 7
                          Pair of filters                measured                 calculated
                          blue + yellow                    0,271                    0,327
                           blue + grey                     0,188                    0,194
                          yellow + grey                    0,362                    0,342



                                               Marking scheme

Part                                        Content                                         Total      Points
                                                                                           for part
Part 1. Studying a photodetector                                                             6,0
1.1 Switch in the right place                                                                0,2         0,2
1.2 Measurements U (R) :                                                                     3,5
      Marked only if data are within 50% from the provided in the official
      solution:
      - maximumal voltage no more than 350 mV;                                                           0,2
      - maximumal resistance no more than 90 kΩ;                                                         0,2
      - minimal resistamce less than 2 kΩ;                                                               0,2
      - number of points 15 or more (10-14, 7- 9, less);                                              2(1;0,5;0)
      - not less than 5 points in the range of 0-10 kΩ;                                                  0,5
      - monotonically dcreasing dependence;                                                              0,2
      - units stated correctly (kΩ. mV);                                                               0,1+0,1
1.3 Load characteristic:                                                                     0,9
      (marked only if 1.2 had been marked)
      - formula to calculate electric current;                                                           0,1
      - current calculated for all experimental points;                                                  0,2
      - unit of current stated (𝜇A);                                                                     0,1
      - correct qualitative behavior (slow decrease followed by sharp decline);                          0,2
      Plotting a graph:
      - axis named and ticked;                                                                           0,1
      - all points correctly drawn;                                                                      0,1
      - smooth curve drawn;                                                                              0.1
1.4 Heat power versus resistance:                                                            0,9
      (marked only if 1.2 had been marked)
      - formula to calculate heat power;                                                                 0,1
      - heat power calculated for all experimental points;                                               0,2
      - correct unit of heat power (𝜇W);                                                                 0,1
      - correct qualitative behavior (maximum in the rage of 0-10 kΩ followed by
      slow decrease);                                                                                    0.2
      Plotting a graph:
      - axis named and ticked;                                                                           0,1
      - all points correctly drawn;                                                                      0,1
      - smooth curve drawn;                                                                              0,1
1.5 Maximum found In the range of 5-6 kΩ (4-7 kΩ, out of)                                    0,5      0,5(0,3;0)
Part 2. Absorption of laser radiation                                                        5,5
2.1 Formula I n = k n I 0                                                                    0,2         0,2
2.2    Transmittance measurements                                                            2,6
XV International Zhautykov Olimpiad/Experimental Competition                         Page 6/7
      Marked only if data are within 50% from the provided in the official
      solution:
      - Measurements in the range of 0-200 mV;                                        0,1
      - Initial measurement without filters;                                       0,1х3=0,3
      - measurements with 5 (4) filters;                                           0,3х3=0,9
      - decreasing dependence obtained;                                            0,1х3=0.3
      Linearization
      - Correct semi-log scale;                                                       0,2
      - logarithns calculated for all points;                                         0,2
      Plotting a graph (marked only if measurements had been marked)::
      - axis named and ticked;                                                        0,1
      - all points correctly drawn;                                                   0,1
      - straight line drawn;                                                          0.1
      Linear dependence obtained;                                                     0,3
2.3   Formula for the transmittance k = exp(a)                               1,4      0,1
      Formula for the experimental error k = exp( a)  a ;                          0,1
      Calculations for all points (LSM, averaging);                                   0,3
      (Calculations for 2 points only);                                               0,1
      Transmittances found:
      Gray in the range of 0,45-0,55 (0,4 -0,6; out of)                            0,2(0,1;0)
      Yellow in the range of 0,85-0,95 (0,8-0,98; out of)                          0,2(0,1;0)
      Blue in the range of 0,30-0,40 (0,25-0,45; out of)                           0,2(0,1;0)
      Experimntal errors found                                                     0,1х3=0,3
2.4   Measurement of transmittance                                           1,3
      Gray+yellow in the range of 0,30-0,40 (0,25-0,45; out of)                    0,2(0,1;0)
      Blue+gray in the range of 0,15-0,25 (0,10-0,30; out of)                      0,2(0,1;0)
      Gray +yellow in the range of 0,40-0,50 (0,35 – 0,55; out of);                0,2(0,1;0)
      Formula k1, 2 = k1  k 2 ;                                                      0,1
      Products found;                                                              0,1х3=0,3
      Experimental results agree with the theory;                                  0.1х3=0,3
Part 3. Absorption of white light                                            3,5
3.1 Transmittance measurements                                               1,9
      Marked only if data are within 50% from the provided in the official
      solution:
      - Measurements in the range of 0-100 mV;                                        0,1
      - Initial measurement without filters;                                       0,1х3=0,3
      - measurements with 5 (4) filters;                                           0,2х3=0,6
      - logarithns calculated for all points;                                         0,3
      Plotting a graph (marked only if measurements are marked):
      - axis named and ticked;                                                        0,1
      - all points correctly drawn;                                                   0,1
      - smooth curve drawn;                                                           0,1
      Linear dependence for gray filter;                                              0,1
      Nonlinear dependence for blue filter                                            0,2
3.2 Theroretical formula not confirmed                                       0,3      0,1
      Reason: transmittance depends on the wavelength                                 0,2
3.3 Transmittance measurements                                               1,3
      Gray filter in the range of 0,4-0,5 (0,35-0,55; out of)                      0,2(0,1;0)
      Blue filter in the range of 0,4-0,5 (0,35-0,55; out of)                      0,2(0,1;0)
      Yellow filter in the range of 0,7 – 0,8 (0,65 – 0,85; out of)                0,2(0,1;0)

      Blue+yellow filters in the range of 0,22-0,3 (0,18 -3,5;out of)              0,2(0,1;0)
      Blue+gray filters in the range of 0,14-0,23 (0,1 -0,27;out of)               0,2(0,1;0)
XV International Zhautykov Olimpiad/Experimental Competition                       Page 7/7
      Yellow+gray filters in the range of 0,3 – 0,4 (0,25 – 0,45; out of)        0,2(0,1;0)

      Experimental and theoretical transmittances do not coincide                   0,1
      TOTAL                                                                 15
