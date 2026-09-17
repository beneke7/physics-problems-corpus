---
id: solution-document-ipho-1995-e2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1995/E2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-1995-e2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/1995/E2_S.pdf."
---

Solution to Experimental Question 2
Section 1
  i. A typical geometric layout is as shown below.

     (a) Maximum distance from ruler to screen is advised to increase the spread of the diﬀraction
         pattern.
     (b) Note that the grating (ruler) lines are horizontal, so that diﬀraction is in the vertical direction.


                           70 mm                                        LASER


     RULER                                                                β
                                                                                                  SCREEN



                           1400 mm
                                                          FRINGES




                                                              y
                                                      !             "
 ii. Vis a vis the diﬀraction phenomenon, β =             1400 mm


    The angle β is measured using either a protractor (not recommended) or by measuring the value
    of the fringe separation on the screen, y, for a given order N .
    If the separation between 20 orders is measured, then N = ±10 (N = 0 is central zero order).
    The values of y should be tabulated for N = 10. If students choose other orders, this is also
    acceptable.
     N         ±10       ±10     ±10     ±10         ±10      ±10        ±10    ±10    ±10     ±10
     2y mm     39.0     38.5    39.5     41.0        37.5     38.0       39.0   38.0   37.0    37.5
     y mm      19.5     19.25   19.75    20.5       18.75     19.0       19.5   19.0   18.5   18.75
    Mean Value = (19.25 ± 1.25) mm

    i.e. Mean “spot” distance = 19.25 mm for order N = 10.
    From observation of the ruler itself, the grating period, h = (0.50 ± 0.02) mm.
    Thus in the relation

                                            Nλ        = ±h sin β
                                               N = 10
                                                h = 0.5 mm
                                                        y
                                        sin β ≃ β =          = 0.01375
                                                    1400 mm
                                              10λ = 0.006875 mm
                                                λ     = 0.0006875 mm

                     δλ    δh δy
    Since β is small,   ≃     +    ≃ 10%
                      λ     h    y
    i.e. measured λ = (690 ± 70) nm
    The accepted value is 680 nm so that the departure from accepted value equals 1.5%.
Section 2
This section tests the student’s ability to make semi-quantitative measurements and the use of judgement
in making observations.

   i. Using the T = 50% transmission disc, students should note that the transmission through the tank
      is greater than this value. Using a linear approximation, 75% could well be estimated. Using the
      hint about the eye’s logarithmic response, the transmission through the tank could be estimated to
      be as high as 85%.
     Any figure for transmission between 75% and 85% is acceptable.

  ii. Calculation of the transmission through the tank, using
                                                          #             \$2
                                                              n1 − n2
                                        T =1−R=1−
                                                              n1 + n2

     for each of the four surfaces of the tank, and assuming n = 1.59 for the perspex, results in a total
     transmission
                                                Ttotal = 80.80%

Section 3
With water in the tank, surfaces 2 and 3 become perspex/water interfaces instead of perspex/air interfacs,
as in (ii).
    The resultant value is
                                             Ttotal = 88.5%

Section 4

                                    TANK                                                   SCREEN
                                                           ~550 mm
                     ~30 mm
                                           y    x
       LASER


               TRANSMISSION
                  FILTER
                  IN/OUT

                       Possible configuration for section 4 (and sections 2 and 3)


   With pure water in the tank only, we see from Section 3 that the transmission T is

                                               TWater ≃ 88%

   The aim here is to determine the beam divergence (scatter) and transmission as a function of milk
concentration. Looking down on the tank, one sees

                                                                     35 mm


                                               ~30 mm                   25 mm

                                                                                     2x’
                        LASER                                           2θ ’



                                    BEAM DIAMETER
                                    2x = 2.00 mm
      i. The entrance beam diameter is 2.00 mm. The following is an example of the calculations expected:
         With 0.5 mL milk added to the 50 mL water, we find
                                                                      0.5
                                      Scatterer concentration =           = 1% = 0.01
                                                                      50
         Scattering angle
                                                                2x′
                                          2x′ = 2.2 mm ;        2θ ′ =
                                                                    = 0.073
                                                                 30
         Transmission estimated with the assistance of the neutral density filters
                                                       Ttotal = 0.7 .

         Hence
                                                               0.7
                                                    Tmilk =        = 0.79
                                                              0.88
         Note that
                                                    Ttotal
                                          Tmilk =             and Twater = 0.88                              (1)
                                                    Twater
         If students miss the relationship (1), deduct one mark.
ii. & iii. One thus obtains the following table of results. 2θ ′ can be determined as shown above, OR by
           looking down onto the tank and using the protractor to measure the value of 2θ ′ . It is important
           to note that even in the presence of scattering, there is still a direct beam being transmitted. It is
           much stronger than the scattered radiation intensity, and some skill will be required in measuring
           the scattering angle 2θ ′ using either method. Making the correct observations requires observational
           judgement on the part of the student.
         Typical results are as follows:
          Milk volume (mL)        0      0.5    1.0    1.5     2.0       2.5    3.0    3.5   4.0
          % Concentration         0       1       2      3      4         5       6     7     8
          2x′                   2.00 2.2         6.2    9.4     12              Protractor
          2θ′ (Degrees)          ∼0       4      12     18      23        28     36    41     48
          Tmilk                  1.0 0.79       0.45   0.22    0.15      0.12   0.08 0.06    0.05
     iii. From the graphed results in Figure 1, one obtains an approximately linear relationship between
          milk concentration, C, and scattering angle, 2θ ′ (= φ) of the form
                                                         φ = 6C .

     iv. Assuming the given relation
                                                  I = I0 e−µz = Tmilk I0
         where z is the distance into the tank containing milk/water.
         We have
                                                       Tmilk = e−µz
         Thus
                                         ln Tmilk = −µz , and µ = constant × C
         Hence ln Tmilk = −αzC.
         Since z is a constant in this experiment, a plot of ln Tmilk as a function of C should yield a straight
         line. Typical data for such a plot are as follows:
           % Concentration      0      1      2       3       4        5       6      7       8
           Tmilk               1.0 0.79 0.45 0.22           0.15     0.12    0.08   0.06    0.05
           ln Tmilk             0    -0.24 -0.8 -1.51 -1.90 -2.12 -2.53 -2.81 -3.00
         An approximately linear relationship is obtained, as shown in Figure 2, between ln T milk and C, the
         concentration viz.
                                              ln Tmilk ≃ −0.4C = −µz
         Thus we can write
                                                  Tmilk = e−0.4C = e−µz
         For the tank used, z = 25 mm and thus
                            0.4C = 25µ     or   µ = 0.016C       whence α = 0.016 mm−1 %−1

         By extrapolation of the graph of ln Tmilk versus concentration C, one finds that for a scatterer
         concentration of 10%
                                               µ = 0.160 mm−1 .
           50




           40




           30


φ
           20




           10




            0
             0   2          4               6   8   10
                             % Concentration



                     Figure 1: Sample plot




            0




           -1




ln Tmilk
           -2




           -3




           -4
             0   2          4               6   8   10
                             % Concentration



                     Figure 2: Sample plot
Detailed Mark Allocation
Section 1
A clear diagram illustrating geometry used with appropriate allocations                         [1]
Optimal geometry used - as per model solution (laser close to ruler)                            [1]
Multiple measurements made to ascertain errors involved                                         [1]
Correctly tabulated results                                                                     [1]
Sources of error including suggestion of ruler variation
(suggested by non-ideal diﬀraction pattern)                                                     [1]
Calculation of uncertainty                                                                      [1]
Final result                                                                                    [2]
   Allocated as per:
          ±10% (612, 748 nm)                                                                    [2]
          ±20% (544, 816 nm)                                                                    [1]
          ± anything worse                                                                      [0]
Section 2
For evidence of practical determination of transmission rather than
simply “back calculating”. Practical range 70 − 90%                                             [1]
For correct calculation of transmission
(no more than 3 significant figures stated)                                                     [1]
Section 3
Correct calculation with no more than 3 significant figures stated
and an indication that the measurement was performed                                            [1]
Section 4
Illustrative diagram including viewing geometry used, i.e. horizontal/vertical                  [1]
For recognizing the diﬀerence between scattered light and the straight-through beam             [1]
For taking the Twater into account when calculating Tmilk                                       [1]
Correctly calculated and tabulated results of Tmilk with results within 20% of model solution   [1]
Using a graphical technique for determining the relationship between
scatter angle and milk concentration                                                            [1]
Using a graphical technique to extrapolate Tmilk to 10% concentration                           [1]
Final result for µ                                                                              [2]
   Allocated as ±40% [2], ±60% [1], anything worse [0]
A reasonable attempt to consider uncertainties                                                  [1]
TOTAL                                                                                           20
