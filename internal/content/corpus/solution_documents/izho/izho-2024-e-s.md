---
id: solution-document-izho-2024-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2024_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2024_E_S.pdf."
---

XV International Zhautykov Olimpiad/Experimental Competition                                                             с. 1/7

              SOLUTION TO THE EXPERIMENTAL COMPETITION
                                                        Superposition of oscillations
       The longitudinal and torsional oscillations of the pendulum described in the experiment in the
approximation of small angles are its own oscillations (modes), so they can be considered independently of
each other.
       In the small angle approximation, the periods of these oscillations are given by the formulas
                                                                              𝐿𝐿
                                                              𝑇𝑇0 = 2𝜋𝜋� ,                                                 (1)
                                                                              𝑔𝑔
                                                                                  4𝐿𝐿𝐿𝐿
                                                              𝑇𝑇1 = 2𝜋𝜋�                    ,                              (2)
                                                                              𝑚𝑚𝑚𝑚𝑎𝑎 2
where 𝑚𝑚 = 𝑚𝑚0 + 2𝑚𝑚1 is the total mass of the pendulum, 𝑚𝑚0 refers to the rod mass, 𝑚𝑚1 stands for the nut
               𝑚𝑚 𝑙𝑙2
mass, and 𝐼𝐼 = 12
                0
                  + 2𝑚𝑚1 𝑧𝑧 2 designates the moment of inertia of the rod with the nuts.
       Formulas (1) and (2) are actually used in the work, but their derivation is not required and is not graded.

                    Part 1. Observation of the effect and its theoretical description
1.1 The rod end moves along trajectories corresponding to the addition of perpendicular oscillations with close
frequencies. They can also be thought of as the addition of oscillations with equal frequencies, but with a
slowly varying phase difference between them. Images of these most typical trajectories are shown in the
figure below.




1.2 It follows from geometry that the horizontal coordinates of the rod end are described by the formulas:
                                                         𝑙𝑙
                            𝑥𝑥 = 𝐿𝐿 sin 𝛼𝛼 + cos 𝛽𝛽
                                            2
                        �                 𝑙𝑙
                                                                      .                                            (3)
                                 𝑦𝑦 = 2 sin 𝛽𝛽
       In the approximation of small angles 𝛼𝛼, 𝛽𝛽 ≪ 1 we have
                                               𝑙𝑙
                            𝑥𝑥 ≈ 𝐿𝐿𝐿𝐿 +
                                           2
                        �          𝑙𝑙
                                                    .                                                              (4)
                              𝑦𝑦 ≈ 2 𝛽𝛽
         Since the angles 𝛼𝛼, 𝛽𝛽 change according to a harmonic law with frequencies 𝜔𝜔0 = 2𝜋𝜋/𝑇𝑇0 and 𝜔𝜔1 =
2𝜋𝜋/𝑇𝑇1 , respectively, the equation for the trajectory of the rod end has the form
                                                                                                     𝑙𝑙
                                                                  𝑥𝑥(𝑡𝑡) = 𝐿𝐿𝛼𝛼𝑚𝑚𝑚𝑚𝑚𝑚 cos 𝜔𝜔0 𝑡𝑡 + 2
                                                              �                    𝑙𝑙
                                                                                                          ,                (5)
                                                                    𝑦𝑦(𝑡𝑡) = 2 𝛽𝛽𝑚𝑚𝑚𝑚𝑚𝑚 sin 𝜔𝜔1 𝑡𝑡
which for close frequencies can be conveniently rewritten in the form
                                                                                                              𝑙𝑙
                                                                          𝑥𝑥(𝑡𝑡) = 𝐿𝐿𝛼𝛼𝑚𝑚𝑚𝑚𝑚𝑚 cos 𝜔𝜔0 𝑡𝑡 + 2
                                                              �            𝑙𝑙
                                                                                                                 .         (6)
                                                                  𝑦𝑦(𝑡𝑡) = 2 𝛽𝛽𝑚𝑚𝑚𝑚𝑚𝑚 sin(𝜔𝜔0 𝑡𝑡 + (𝜔𝜔1 −𝜔𝜔0 )𝑡𝑡)
In the expression 𝑦𝑦(𝑡𝑡) for close frequencies, the value ∆𝜑𝜑 = (𝜔𝜔1 −𝜔𝜔0 )𝑡𝑡 can be considered as a slowly varying
phase difference between oscillations with close frequencies.
1.3 It is obvious that the shape of the trajectory returns to the initial one if the phase difference changes by
±2𝜋𝜋. Thus, the cycle period obeys the condition
                                          (𝜔𝜔1 −𝜔𝜔0 )𝑇𝑇𝐶𝐶 = ±2𝜋𝜋,                                               (7)
which provides
                                                   𝑇𝑇 𝑇𝑇
                                          𝑇𝑇𝐶𝐶 = |𝑇𝑇 0−𝑇𝑇1 |.                                                   (8)
                                                                          0   1
1.4 The number of oscillations of longitudinal oscillation in the cycle can be written in the form
                                               𝑇𝑇         𝑇𝑇1
                                        𝑁𝑁𝐶𝐶 = 𝑇𝑇𝐶𝐶 = |𝑇𝑇 −𝑇𝑇 |
                                                               .                                                           (9)
                                                                          0             0       1
XV International Zhautykov Olimpiad/Experimental Competition                                                  с. 2/7


                                     Part 2. Longitudinal oscillations
2.1 To increase the measurement accuracy, it is necessary to measure the times of a sufficiently large number
of oscillations; in our experiments, we measure the time of 20 periods of oscillations 𝑡𝑡20 . To estimate the
random error, these measurements are carried out 10 times, and their results are shown in Table 1.

Table 1. Measuring the period of longitudinal oscillations.

     𝑛𝑛         𝑡𝑡20 , s
            1      26,39      The average time of 20 oscillations is
            2      26,32      〈𝑡𝑡20 〉 = 26.41 s,
            3      26,51      and the instrument error is equal to half the value of the stopwatch division
                              ∆𝑡𝑡1 = 0.5 ∙ 10−3 s.
            4      26,40
                              The random error is calculated using the formula
            5      26,46
                                                                      2
                                             ∑10 �𝑡𝑡      −〈𝑡𝑡20 〉�
            6      26,41      ∆𝑡𝑡2 = 2� 𝑖𝑖=1 20,𝑖𝑖                        = 6.5 ∙ 10−2 s.
                                                  𝑛𝑛(𝑛𝑛−1)
            7      26,34
                              The total time measurement error is
            8      26,22
                              ∆𝑡𝑡 = �∆𝑡𝑡12 + ∆𝑡𝑡22 = 0.066 s.
            9      26,55
           10      26,53

           Thus, the period of longitudinal oscillations is equal to
                                                𝑡𝑡20
                                          𝑇𝑇0 = 20   = (1.321 ± 0.003) s.                                      (10)

                                         Part 3. Torsional oscillations
3.1 Table 2 shows the values of the measurement results of the periods of torsional oscillations at various
values of the distance 𝑎𝑎 between the threads. The same table shows the results of calculations for determining
the exponent 𝑞𝑞.

Table 2. Dependence of the period of torsional
oscillations as a function of the distance between the threads.

  𝑎𝑎, cm     𝑡𝑡10,s     𝑇𝑇1 , s      ln 𝑎𝑎             ln 𝑇𝑇1
     4,8        59,11     5,911    1,5686          1,7768
     6,3        44,62     4,462    1,8405          1,4956
     7,8        36,31     3,631    2,0541          1,2895
     9,4        29,66     2,966    2,2407          1,0872
    11,0        25,60     2,560    2,3979          0,9400
    12,2        23,32     2,332    2,5014          0,8467
    13,8        20,46     2,046    2,6247          0,7159
    16,0        17,66     1,766    2,7726          0,5687
    18,2        15,82     1,582    2,9014          0,4587
    20,5        13,87     1,387    3,0204          0,3271
    24,0        11,98     1,198    3,1781          0,1807

           The corresponding dependence graph looks like
XV International Zhautykov Olimpiad/Experimental Competition                                               с. 3/7


                                           7

                                           6

                                           5

                                           4
                                    T, с
                                           3

                                           2

                                           1

                                           0
                                               0       5         10           15    20   25
                                                                      a, sm



3.2 The optimal and most common way to determine the exponent is to plot a graph on a double logarithmic
scale. It follows from formula (1) given in the problem statement that
                                                 ln T = C + q ln a ,                                 (11)
therefore, the slope of the graph is equal to the exponent. This graph is shown in the figure below.


                                        2,0
                                        1,8
                                        1,6
                                        1,4
                                        1,2
                                 ln T   1,0
                                        0,8
                                        0,6
                                        0,4
                                        0,2
                                        0,0
                                              0,0          1,0          2,0        3,0    4,0
                                                                       ln a



       The resulting relationship is linear with a slope coefficient very close to (-1). An alternative way is to
construct dependencies 𝑇𝑇1 (𝑎𝑎−1 ), or 𝑇𝑇1−1 (𝑎𝑎). However, in these methods it is necessary to prove that the
constructed graphs are straight lines passing through the origin of coordinates.
       All these methods reasonably indicate that the desired exponent is equal to (-1), i.e. the period of
torsional oscillations is inversely proportional to the distance between the threads.
3.3 The results of measurements of the dependence of the period of torsional oscillations on the position of
the nuts are given in Table 3. The same table shows the calculation results necessary to construct a linearized
graph.

Table 3. Measurements of the period of torsional oscillations.

   𝑧𝑧, cm   𝑡𝑡20 , s   𝑇𝑇1 , s     𝑧𝑧 2         𝑇𝑇12     𝑈𝑈
      6     44,58      2,229      36           4,968   284,9
      7     45,75      2,288      49           5,233   300,0
      8     46,83      2,342      64           5,483   314,3
      9     47,87      2,394      81           5,729   328,5
     10     49,17      2,459      100          6,044   346,5
XV International Zhautykov Olimpiad/Experimental Competition                                                                           с. 4/7

    11       50,84   2,542        121         6,462          370,5
    12       52,15   2,608        144         6,799          389,8
    13       53,47   2,674        169         7,148          409,8
    14       54,85   2,743        196         7,521          431,2
    15       56,91   2,846        225         8,097          464,2

        The graph of this relationship is shown in the figure below. It can be seen that the resulting dependence
is nonlinear.
                                                   3,0



                                                   2,8



                                                   2,6

                                            T, s
                                                   2,4



                                                   2,2



                                                   2,0
                                                         5   6       7        8         9       10     11   12    13   14    15   16

                                                                                                z, sm

3.4 It follows from formulas (1)-(2) given in the problem statement and the result of the previous part that the
period of torsional oscillations is described by the formula
                                                                   𝑇𝑇1        √𝐴𝐴+𝐵𝐵𝑧𝑧 2
                                                                      =                     ,                                           (12)
                                                                   𝑇𝑇
                                                                    0              𝑎𝑎
whose linearization is obvious and has the form
                                                                         𝑇𝑇    2
                                                                   �𝑎𝑎 𝑇𝑇1 � = 𝐴𝐴 + 𝐵𝐵𝑧𝑧 2 .                                            (13)
                                                                          0
                             𝑇𝑇   2
         The value 𝑈𝑈 = �𝑎𝑎 𝑇𝑇1 � depends linearly on 𝑧𝑧 2 , and the graph of the linearized dependence is shown in
                              0
the figure below.
                                            500


                                            450


                                            400



                                  U,sm^ 2
                                            350


                                            300


                                            250


                                            200
                                                   0          50               100                   150         200        250

                                                                                  z^ 2, sm^ 2

3.5 The coefficients of this dependence, calculated using the least squares method, are equal to
                                              𝐴𝐴 = (254 ± 4) cm2,                                                                       (14)
                                              𝐵𝐵 = 0.93 ± 0.03.                                                                         (15)
XV International Zhautykov Olimpiad/Experimental Competition                                                     с. 5/7

                                          Part 4. Mixed oscillations
4.1, 4.2 Table 4 shows the results of measurements and calculations necessary to verify the theoretical formula
(9).

Table 4. Study of mixed oscillations.

                        𝑇𝑇0                                            1
   𝑧𝑧, cm   𝑇𝑇1 , s     𝑇𝑇1 𝑁𝑁𝐶𝐶 (теор.) 𝑁𝑁𝐶𝐶 (эксп)                  𝑁𝑁𝐶𝐶
    10,5    1,247     1,059       17
    11,0    1,264     1,045       22          24                    0,042
    11,5    1,282     1,030       33          35                    0,029
    12,0    1,301     1,015       65
    12,5    1,319     1,002      660
    13,0    1,339     0,987       74          60                    0,017
    13,5    1,359     0,972       36          33                    0,030
    14,0    1,379     0,958       24          21                    0,048
    14,5    1,400     0,944       18          16                    0,063
    15,0    1,421     0,930       14          13                    0,077

In this table 𝑇𝑇1 stands for values of torsional oscillation periods calculated using formula (12), and 𝑁𝑁𝐶𝐶 refers
to the calculated and measured values of the number of periods in the cycle.
4.3 To check formula (9), a graph is drawn of the dependence of the quantity reciprocal to the number of
              1                𝑇𝑇                                                   1     𝑇𝑇
oscillations 𝑁𝑁 on the value 𝑇𝑇0 , which is theoretically described by the formula = �𝑇𝑇0 − 1�. A graph of this
              𝐶𝐶               1                                                                      𝑁𝑁𝐶𝐶   1
dependence, constructed from the experimental data, is shown in the figure below.
                                    0,10


                                    0,08


                                    0,06

                             1/Nc
                                    0,04


                                    0,02


                                    0,00
                                       0,90   0,92   0,94   0,96   0,98   1,00   1,02   1,04   1,06   1,08
                                                                     T0/T1


Этот график, а также сравнение рассчитанных и измеренный значений 𝑁𝑁𝐶𝐶 , подтверждают
теоретические выводы. This graph, as well as a comparison of the calculated and measured 𝑁𝑁𝐶𝐶 values,
corroborates the theoretical conclusions.

                                            Content                                      Points                  Total
                       Part 1. Observation of the effect and its theoretical description
            The addition of vibrations is obtained (there is at least one plausible
                                                                                           0,2
            picture)
    1.1                                                                                                           1,0
            4 drawings: two close to the segment, two ovals indicating the direction
                                                                                        4х0,2=0,8
            of motion
            Expressions for coordinates on a plane through deflection angles            2х0,2=0,4
    1.2     Explicit time dependencies                                                  2х0,1=0,2                 0,8
            Small angle approximation                                                      0,2
XV International Zhautykov Olimpiad/Experimental Competition                                            с. 6/7

           The main idea is the change in phase difference, formula (7);
                                                                                         0,5 (0,2)
           (if the beat period)
    1.3                                                                                                 1,3
           Formula (8) for the cycle time                                                   0,5
           The module is placed in formula (8)                                              0,3
                      𝑇𝑇1
    1.4    𝑁𝑁𝐶𝐶 = |𝑇𝑇 −𝑇𝑇 |
                           .                                                                0,4         0,4
                  0   1
                                        Part 2. Longitudinal oscillations
           Graded if the numerical value of the oscillation period is estimated
           The obtained period value is in the range of 1.3 – 1.5 s                           0,4
           Measurement error less than 1% (graded if the error is estimated)                  0,1
           At least 5 measurements of time N oscillations were carried out (3, less)      0,3 (0,1;0)
           Number of oscillations N not less than 10 (5; less)                            0,2 (0,1;0)
           Averaging over all measurements are carried out                                    0,1
    2.1    Random error calculated (averaging of deviation modules, standard                            2,0
                                                                                              0,2
           deviation - acceptable)
           Instrument error (half or division value)                                          0,2
           The total error is calculated (the value is acceptable)                            0,2
           Correct rounding (error – 1-2 digits, result – up to the error digit)              0,2
           The dimension of the result is indicated                                           0,1
                                          Part 3. Torsional oscillations
           Graded if the measurement results are graded!
           If the nuts are not located at the ends of the rod, the grades are divided
           by factor 2.
           For each measurement 0.15 (in total no more than 1.5; falling within the
           20% range if the time of less than 10 oscillations is measured, 0.1 per 0,15х10=1,5
           measurement)
    3.1                                                                                                 2,5
           The lower limit of the range is no more than 5.0 cm                                0,2
           The upper limit of the range is not less than 15.0 cm                              0,2
           A nonlinear dependence close to hyperbolic is obtained                             0,1
           Plotting a graph (the axes are labeled and digitized, all points are plotted 0,1+0,2+0,2=
           in accordance with the table, a smoothing curve is drawn)                         =0,5
           Graded if the degree is -1, the measurement results are graded
           The obtained value is q=-1                                                         0,5
           Linearization is carried out on a double logarithmic scale (calculations           0,5
           are provided)
    3.2                                                                                                 1,5
           (reciprocals, with proof of passing through zero);                             (0,2+0,2)
           A graph of the linearized dependence is plotted (the axes are labeled and
                                                                                        0,1+0,2+0,2=
           digitized, all points are plotted in accordance with the table, a smoothing
                                                                                             =0,5
           line is drawn)
           If the distance between the threads is different from 10 cm, the grades
           are divided by factor 2
           For each measurement 0.15 (in total no more than 1.5; falling within the
           20% range if the time of less than 10 oscillations is measured, 0.1 per 0,15х10=1,5
           measurement)
    3.3    The lower limit of the range is no more than 6.5 cm                                0,2       2,5
           The upper limit of the range is not less than 14.0 cm                              0,2
           A nonlinear downward convexity dependence is obtained                              0,1
           A graph of the linearized dependence is plotted (the axes are labeled and
                                                                                        0,1+0,2+0,2=
           digitized, all points are plotted in accordance with the table, a smoothing
                                                                                             =0,5
           line is drawn)
           Linearization is carried out (the squares of periods and distances are
    3.4                                                                                       0,3       1,0
           calculated)
XV International Zhautykov Olimpiad/Experimental Competition                                          с. 7/7

           A graph of linearized dependence is plotted (the axes are labeled and
                                                                                       0,1+0,2+0,2=
           digitized, all points are plotted in accordance with the table, a smoothing
                                                                                            =0,5
           line is drawn)
           Straight line is obtained                                                         0,2
           Grades if 3.3 – 3.4 are graded
           Numerical values of the coefficients are obtained (in the range of 20%,
                                                                                          2х0,4=0,8
           the dimension -0.1 is not indicated)
    3.5    Errors of coefficients are calculated                                          2х0,1=0,2    1
           Calculation using LSM coefficient 1;
           graphically, averaging over all points – 0.8;
           at two points – 0.5;
                                            Part 4. Mixed oscillations
           Graded if measurement results are graded
           For each measurement 0.2 (total no more than 2.0; within 30% range)           0,2х10=2,0
           There are two dependency branches (at least 2 points on each)                     1,0
           The lower limit of the range is no more than 11 cm                                0,2
    4.1    The upper limit of the range is at least 15 cm                                    0,2       4
           The number obtained N>50                                                          0,3
           Sharp increase (steeper than linear)                                              0,1
           There is an "unmeasured" area in the middle of the range                          0,2
           The periods are calculated (range – 20%) at 0.05 for each point, at least
    4.2                                                                                 0,05х10=0,5   0,5
           3 decimal places)
           Linearization is proposed (the reciprocal of the number of oscillations           0,5
           from the ratio of periods, the difference of periods);
           A theoretical calculation of the number of oscillations are carried out
           and a comparison with experimental results is made.                          0,2+0,1=0,3
    4.3    The linearized dependence is calculated                                           0,2      1,5
           A graph of linearized dependence is plotted                                       0,4
           A graph of measurement results is plotted                                         0,2
           A graph similar to the graph of the modulus number function is obtained           0,3
           Correct position of the minimum on the graph                                      0,1
           TOTAL                                                                                      20,0
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                                  с. 1/7

                ТӘЖІРИБЕЛІК САЙЫСТЫҢ ЕСЕПТЕРІНІҢ ШЕШІМІ
                        Тербелістердің суперпозициясы
       Тәжірибеде қарастырылған аз бұрыштар жуықтауындағы маятниктің қума және айналмалы
тербелістері оның меншікті тербелістері (модалары) болып табылады, сондықтан оларды бір-бірінен
тәуелсіз қарастырудың мүмкіндігі бар.
       Аз бұрыштар жуықтауында бұл тербелістердің периоды мынадай өрнектермен анықталады
                                                                      𝐿𝐿
                                                  𝑇𝑇0 = 2𝜋𝜋� ,                                                    (1)
                                                                      𝑔𝑔
                                                                          4𝐿𝐿𝐿𝐿
                                                  𝑇𝑇1 = 2𝜋𝜋�                      ,                               (2)
                                                                      𝑚𝑚𝑚𝑚𝑎𝑎 2
                                                                                                             𝑚𝑚 𝑙𝑙2
мұндағы 𝑚𝑚 = 𝑚𝑚0 + 2𝑚𝑚1 –маятник массасы, 𝑚𝑚0 –стержень массасы, 𝑚𝑚1 –гайка массасы, 𝐼𝐼 = 12
                                                                                           0
                                                                                             +
2𝑚𝑚1 𝑧𝑧 – стержень мен гайканың инерция моменті.
       2

         Жоғарыдағы (1) және (2) өрнектері жұмыста пайдаланылады, бірақ оларды қортып шығарып
қажет емес және ол бағаланбайды.

               1 бөлім. Құбылысты бақлау және оны сапалық тұрғыдан сипаттау
1.1 Стерженьнің ұшы жиіліктері бір біріне жақын, өзара перпендикуляр тербелістерді қосуға сәйкес
келетін траекторияны сызады. Оларды сонымен қатар жиіліктері бірдей,бірақ фазалар айырымы баяу
өзгеретін тербелістердің қосындысы түрінде де қарастыруға болады. Оларға тән траектория
төмендегі суретте келтірілген.




1.2 Геометрияны ескерсек, стерженнің горизонталь координаттары мына өрнектермен сипатталады:
                                                                 𝑙𝑙
                                            𝑥𝑥 = 𝐿𝐿 sin 𝛼𝛼 + cos 𝛽𝛽
                                                            2
                                          .�            𝑙𝑙
                                                                    .                                  (3)
                                                  𝑦𝑦 = sin 𝛽𝛽
                                                         2
      Аз бұрыштар жуықтауында 𝛼𝛼, 𝛽𝛽 ≪ 1, онда
                                 𝑙𝑙
                   𝑥𝑥 ≈ 𝐿𝐿𝐿𝐿 +
                                 2
               �          𝑙𝑙
                                      .                                                                (4)
                     𝑦𝑦 ≈ 𝛽𝛽
                          2
       Жоғарыдағы 𝛼𝛼, 𝛽𝛽 бұрыштары жиіліктері сәйкес 𝜔𝜔0 = 2𝜋𝜋/𝑇𝑇0 және
𝜔𝜔1 = 2𝜋𝜋/𝑇𝑇1 бола отырып гармониялық заңдылықпен өзгеретін
болғандықтан стержень ұшының траекториясының теңдеуі
                                                                                         𝑙𝑙
                                                      𝑥𝑥(𝑡𝑡) = 𝐿𝐿𝛼𝛼𝑚𝑚𝑚𝑚𝑚𝑚 cos 𝜔𝜔0 𝑡𝑡 +
                                                                                         2
                                                  �                        𝑙𝑙
                                                                                              ,                   (5)
                                                        𝑦𝑦(𝑡𝑡) = 𝛽𝛽𝑚𝑚𝑚𝑚𝑚𝑚 sin 𝜔𝜔1 𝑡𝑡
                                                                           2
Оны бір біріне жақын жиіліктер үшін мына түрде жазу ыңғайлы
                                                                                                  𝑙𝑙
                                                             𝑥𝑥(𝑡𝑡) = 𝐿𝐿𝛼𝛼𝑚𝑚𝑚𝑚𝑚𝑚 cos 𝜔𝜔0 𝑡𝑡 +
                                                                                                  2
                                                  �           𝑙𝑙
                                                                                                   .              (6)
                                                      𝑦𝑦(𝑡𝑡) = 𝛽𝛽𝑚𝑚𝑚𝑚𝑚𝑚 sin(𝜔𝜔0 𝑡𝑡 + (𝜔𝜔1 −𝜔𝜔0 )𝑡𝑡)
                                                                 2
Жоғарыдағы 𝑦𝑦(𝑡𝑡) үшін өрнектегі ∆𝜑𝜑 = (𝜔𝜔1 −𝜔𝜔0 )𝑡𝑡 шамасын жиіліктері бір біріне жақын тербелістегі
баяу өзгеретін фазалар айырымы ретінде қарастыруға болады.
1.3 Траекторияның түрі өзінің бастапқы қалыпына фазалар айырымы ±2𝜋𝜋 ға өзгергенде қайта
келетіні айқын. Осымен байланысты TC циклдің периоды мына шартты қанағаттандырады
                                    (𝜔𝜔1 −𝜔𝜔0 )𝑇𝑇𝐶𝐶 = ±2𝜋𝜋,                                       (7)
бұдан
                                             𝑇𝑇 𝑇𝑇
                                    𝑇𝑇𝐶𝐶 = |𝑇𝑇 0−𝑇𝑇1 |.                                           (8)
                                                             0        1
1.4 Циклдағы қума тербелістердің санын мына түрде жазуға болады
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                      с. 2/7

                                                           𝑇𝑇           𝑇𝑇
                                               𝑁𝑁𝐶𝐶 = 𝑇𝑇𝐶𝐶 = |𝑇𝑇 −𝑇𝑇
                                                                 1
                                                                     |
                                                                      .                              (9)
                                                               0       0     1


                                     2 бөлім. Қума тербелістер.
2.1 Өлшеудің дәлдігін арттыру үшін тербелістердің саны жеткілікті болуы шарт. Біздің
өлшеулерімізде 20 тербелістің 𝑡𝑡20 уақыты өлшенген. Кездейсоқтқателерді бағалау .шін өлшеу 10 рет
қайталанған. Тәжірибе нәтижесі төмендегі 1 кестеде келтірілген.

Кесте 1. Қума тербелістердің периодын өлшеу.

   𝑛𝑛        𝑡𝑡20 , с
         1      26,39   20 тербелістің орташа уақыты
                        〈𝑡𝑡20 〉 = 26.41 с,
         2      26,32
                        Ал қондырғының қателігі секундомердің бөлік құнының жартысына
         3      26,51   тең
         4      26,40   ∆𝑡𝑡1 = 0.5 ∙ 10−3 c.
                        Кездейсоқ қателіктер мына өрнекпен есептелінеді
         5      26,46
         6      26,41              ∑10 �𝑡𝑡     −〈𝑡𝑡   〉�
                                                           2
                        ∆𝑡𝑡2 = 2� 𝑖𝑖=1 𝑛𝑛(𝑛𝑛−1)
                                         20,𝑖𝑖  20
                                                                = 6.5 ∙ 10−2 с.
         7      26,34
         8      26,22   Уаұытты өлшеудің толық қателігі
         9      26,55   ∆𝑡𝑡 = �∆𝑡𝑡12 + ∆𝑡𝑡22 = 0.066 с.

        10     26,53

        Сонымен, қума тербелістердің периоды
                                         𝑡𝑡20
                                   𝑇𝑇0 = 20   = (1.321 ± 0.003) с.                                  (10)

                                3 бөлім. Айналмалы тербелістер.
3.1 Төмендегі 2 кестеде жіптердің арасындағы а ара қашықтықтың әртүрлі мәндеріндегі айналмалы
тербелістің периодын өлшеудің нәтижелері келтірілген. Сонымен қатар осы кестеде 𝑞𝑞 дәреже
көрсеткішін анықтауға қажетті есептеулер келтірілген.

Таблица 2. Айналмалы тербелістің периодының жіптердің ара қашықтығынан тәуелділігі

                                      𝑎𝑎, см     𝑡𝑡10,с            𝑇𝑇1 , с        ln 𝑎𝑎   ln 𝑇𝑇1
                                         4,8          59,11          5,911       1,5686   1,7768
                                         6,3          44,62          4,462       1,8405   1,4956
                                         7,8          36,31          3,631       2,0541   1,2895
                                         9,4          29,66          2,966       2,2407   1,0872
                                        11,0          25,60          2,560       2,3979   0,9400
                                        12,2          23,32          2,332       2,5014   0,8467
                                        13,8          20,46          2,046       2,6247   0,7159
                                        16,0          17,66          1,766       2,7726   0,5687
                                        18,2          15,82          1,582       2,9014   0,4587
                                        20,5          13,87          1,387       3,0204   0,3271
                                        24,0          11,98          1,198       3,1781   0,1807

        Сәйкес тәуелділіктің графигі
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                              с. 3/7


                                   7

                                   6

                                   5

                                   4
                            T, с
                                   3

                                   2

                                   1

                                   0
                                       0       5            10            15           20           25
                                                                 a, sm



3.2 Дәреже көрсеткішін анықтаудың ең оңтайлы, әрі кең тараған әдісі графикті қос логарифмдік
масштабта тұрғызу. Жоғарыдағы (1) өрнектен
                                       ln T = C + q ln a ,                                 (11)
Сондықтан графиктің еңкіштік коэффициенті дәреже көрсеткішіне тең. Бұл график төмендегі суретте
келтірілген
                                2,0
                                1,8
                                1,6
                                1,4
                                1,2
                         ln T   1,0
                                0,8
                                0,6
                                0,4
                                0,2
                                0,0
                                      0,0          1,0             2,0             3,0               4,0

                                                                   ln a


          Алынған нәтиже еңкіштігі (-1) ге өте жақын сызықтық тәуелділік. Мұның баламалы әдісі
𝑇𝑇1 (𝑎𝑎−1 ), немесе 𝑇𝑇1−1 (𝑎𝑎) тәуелділігін тұрғызу болып табылады. Бірақ бұл әдісте графиктің түзу сызық
екенін және координаттың бас нүктесі арқылы өтетінін дәлелдеу қажет.
          Бұл әдістердің бәрі іздестіріп отырған дәреже көрсеткіші (-1) екенін, яғни айналмалы
тербелістің периоды жіптердің ара қашықтығына кері пропорциональ екенін көрсетеді.
3.3 Айналмалы қозғалыстың периодының гайкалардың орынынан тәуелділігін өлшеудің нәтижелер 3
кестеде келтірілген. Осы кестеде линеаризацияланған графикті тұрғызуға қажетті есептеулердің
нәтижелері де келтірілген.

3 кесте. Айналмалы тербелістің периодын өлшеу.

                                   𝑧𝑧, см   𝑡𝑡20 , с     𝑇𝑇1 , с     𝑧𝑧 2       𝑇𝑇12          𝑈𝑈
                                      6     44,58        2,229      36         4,968        284,9
                                      7     45,75        2,288      49         5,233        300,0
                                      8     46,83        2,342      64         5,483        314,3
                                      9     47,87        2,394      81         5,729        328,5
                                     10     49,17        2,459      100        6,044        346,5
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                                                          с. 4/7

                                        11             50,84        2,542              121            6,462         370,5
                                        12             52,15        2,608              144            6,799         389,8
                                        13             53,47        2,674              169            7,148         409,8
                                        14             54,85        2,743              196            7,521         431,2
                                        15             56,91        2,846              225            8,097         464,2

       Бұл тәуелділіктің графигі төмендегі суретте келтірілген. Одан тәуелділіктің сызықтық екені
көрініп тұр.
                                             3,0



                                             2,8



                                             2,6

                                      T, s
                                             2,4



                                             2,2



                                             2,0
                                                   5     6      7        8         9       10     11    12     13     14     15   16

                                                                                           z, sm

3.4 Есептің шартындағы (1)-(2) өрнектерден және жоғарыдағы пункттің нәтижесінен айнелмалы
тербелістің периоды мына өрнекпен сипатталатыны шығады
                                                              𝑇𝑇1        √𝐴𝐴+𝐵𝐵𝑧𝑧 2
                                                                 =                     ,                                                (12)
                                                              𝑇𝑇
                                                               0              𝑎𝑎
Оны мына түрде линеаризациялайды
                                                                    𝑇𝑇    2
                                                              �𝑎𝑎 𝑇𝑇1 � = 𝐴𝐴 + 𝐵𝐵𝑧𝑧 2 .                                                 (13)
                                                                     0
                   𝑇𝑇   2
      Яғни 𝑈𝑈 = �𝑎𝑎 𝑇𝑇1 � шамасы 𝑧𝑧 2 -тан сызықтық тәуелді, олай болса оның графигі төмендегідей
                    0

                                      500


                                      450


                                      400



                            U,sm^ 2
                                      350


                                      300


                                      250


                                      200
                                             0           50               100                   150           200           250

                                                                             z^ 2, sm^ 2

3.5 Оның ең аз квадраттар әдісімен есептелген коэффициенттері мынадай
                                          𝐴𝐴 = (254 ± 4)см2,                                                                            (14)
                                          𝐵𝐵 = 0.93 ± 0.03.                                                                             (15)

                                                   4 бөлім. Аралас тербелістер.
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                                          с. 5/7

4.1, 4.2 Төмендегі 4 кестеде (9) теориялық өрнекті тексеруге өажетті есептеулердің нәтижелері
келтірілген

Кесте 4. Аралас тербелісті зерттеу.

                                                      𝑇𝑇0                                                    1
                        𝑧𝑧, см          𝑇𝑇1 , с       𝑇𝑇1 𝑁𝑁𝐶𝐶 (теор.) 𝑁𝑁𝐶𝐶 (эксп)                          𝑁𝑁𝐶𝐶
                         10,5           1,247       1,059       17
                         11,0           1,264       1,045       22          24                             0,042
                         11,5           1,282       1,030       33          35                             0,029
                         12,0           1,301       1,015       65
                         12,5           1,319       1,002      660
                         13,0           1,339       0,987       74          60                             0,017
                         13,5           1,359       0,972       36          33                             0,030
                         14,0           1,379       0,958       24          21                             0,048
                         14,5           1,400       0,944       18          16                             0,063
                         15,0           1,421       0,930       14          13                             0,077

Бұл кестедегі : 𝑇𝑇1 – айналмалы тербелістің (12) өрнекпен есептелген периоды; 𝑁𝑁𝐶𝐶 – циклдағы
периодтар санының өлшенген және есептелген мәндері.
                                           1              𝑇𝑇
4.3 Жоғарыдағы (9) өрнегін тексеру үшін       шамасының 𝑇𝑇0 шамасынан тәуелділігінің графигі
                                                               𝑁𝑁𝐶𝐶                          1
                                                        1             𝑇𝑇0
тұрғызылған. Ол теориялық тұрғыдан                            = �𝑇𝑇 − 1� өрнегімен сипатталады. Бұл тәуелділіктің
                                                       𝑁𝑁𝐶𝐶            1
тәжірибелңк нәтижелер бойынша тұрғызылған тәуелділігі төмендегі суретте келтірілген.
                                 0,10


                                 0,08


                                 0,06

                          1/Nc
                                 0,04


                                 0,02


                                 0,00
                                    0,90     0,92   0,94      0,96      0,98   1,00   1,02   1,04   1,06    1,08
                                                                            T0/T1


Осы график және 𝑁𝑁𝐶𝐶 шамасының есептелген және өлшенген нәтижелері теориялық қортындылардың
дұрыс екенін көрсетеді.

                                     Мазмұны                             Ұпайы                                     Барлығы
                 1 бөлім. Құбылысты бақлау және оның теориялық сипаттамасы
         Тербелістер дұрыс қосылған (кем дегенде бір сурет дұрыс)           0,2
  1.1    4 сурет: екі кесінді суреті, қозғалыс бағыты дұрыс көрсетілген                                              1,0
                                                                        4х0,2=0,8
         екі эллипс 4х0,2
         Ауытқу бұрышы арқылы анықталған координат өрнегі               2х0,2=0,4
  1.2    Уақыттан айқын тәуелділік                                      2х0,1=0,2                                    0,8
         Аз бұрыштар жуықтауы                                               0,2
         Негізгі идея – фазалар айырымының өзгерісі, (7) өрнек;
  1.3                                                                    0,5 (0,2)                                   1,3
         (егер соғу периоды болса)
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                           с. 6/7

        Цикл уақытының өрнегі (8)                                          0,5
         (8) өрнекте модуль белгіленген                                    0,3
                   𝑇𝑇1
  1.4   𝑁𝑁𝐶𝐶 = |𝑇𝑇 −𝑇𝑇 |
                        .                                                  0,4        0,4
              0   1
                                   2 бөлім. Қума тербелістер
        Тербеліс периодының сандық мәні анықталған болса
        бағаланады
        Периодтың мәні 1,3 – 1,5 с диапозонында анықталған                   0,4
        Өлшеудің қателігі 1%-тен кіші (егер қателік анықталған
                                                                             0,1
        болса)
        N тербелістің уақыты 5 реттен кем емес өлшенген (3-тен кем)     0,3 (0,1;0)
        N тербелістің уақыты 10 реттен кем емес (5-тен кем)             0,2 (0,1;0)
        Барлық өлшеулердің орташа мәні табылған                              0,1
  2.1   Кездейсоқ қателік есептелген                                         0,2      2,0
        Қондырғының қателігі                                                 0,2
        Толық қателік есептелген                                             0,2
        Дұрыс жуықтау (Қателік – 1-2 цифр, нәтиже – қателіктің
                                                                             0,2
        разрядына лейін)
        Нәтиженің өлшем бірлігі                                             0,1
                                 3 бөлім. Айналмалы тербеліс
        Өлшеу нәтижесі анықталған болса бағаланады!
        Егер гайка стерженнің ұшында орналасқан болмаса нәтиже
        2ге кемітіледі.
        Әрбір өлшеу 0,15 (егер 10 тербелістен аз болса, онда әр өлшеу
                                                                       0,15х10=1,5
        үшін 0,1)
  3.1   Диапазонның төменгі шегі 5,0 см ден көп емес                         0,2      2,5
        Диапазонның жоғарғы шегі 15,0 см дан кем емес                        0,2
        Гиперболаға ұқсас сызықтық емес тәуелділік алынған                   0,1
        Графиктің салынуы (остер жазылған және саналған; 0,1+0,2+0,2=
        нүктелер салынған. Жатық қисық тұрғызылған)                         =0,5
        Егер дәреже -1 болса бағаланады
        Алынған нәтиже q=-1                                                  0,5
                                                                             0,5
        Қос логарифмдің масштабта линеаризация жасалған
  3.2   (кері шама, нөлден өту дәлелімен)                                             1,5
                                                                         (0,2+0,2)
        Линеризацияланған тәуелділіктің графигі тұрғызылған (остер
                                                                      0,1+0,2+0,2=
        жазылған және саналған; нүктелер салынған. Жатық қисық
                                                                            =0,5
        тұрғызылған)
        Егер жіптердің ара қашықтығы 10 см ден өзгеше болса баға
        екі есе кемиді
        Әрбір өлшеу 0,15 (егер 10 тербелістен аз болса, онда әр өлшеу
                                                                       0,15х10=1,5
        үшін 0,1)
  3.3   Диапазонның төменгі шегі 6,5 см дан артық емес                       0,2      2,5
        Диапазонның жоғарғы шегі 14,0 см дан кіші емес                       0,2
        Дөңестігі төмен бағытталған сызықтық емес тәуелділік                 0,1
        График тұрғызылған (остер жазылған және саналған; 0,1+0,2+0,2=
        нүктелер салынған. Жатық қисық тұрғызылған)                         =0,5
        Линеаризация жасалған (периодтар мен ара қашықтықтың
                                                                             0,3
        квадраттары есептелген)
  3.4                                                                 0,1+0,2+0,2=    1,0
        Линеаризацияланған тәуелділіктің графигі тұрғызылғын
                                                                            =0,5
        Түзу сызық алынған                                                   0,2
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                             с. 7/7

        Егер 3.3-3.4 пункттері бағаланса
        Коэффициенттердің сандық мәні алынған                           2х0,4=0,8
        Коэффициенттердің қателігі есептелген                           2х0,1=0,2
  3.5                                                                                 1
        Ең аз квадраттар әдісі болса, коэффициент 1;
        Барлық нүктелер бойынша орташаланған график әдісі – 0,8;
        Екі нүкте бойынша – 0,5;
                                  Часть 4. Аралас тербелістер
        Өлшеу нәтижесі анықталған болса бағаланады
        Әр өлшеу үшін 0,2                                              0,2х10=2,0
        Тәуелділіктің екі тармағы бар (әрқайсысында екі нүктеден кем
                                                                           1,0
        емес)
        Диапазонның төменгі шегі 11 см ден артық емес                      0,2
  4.1                                                                                 4
        Диапазонның жоғарғы шегі 15 см ден кем емес                        0,2
        Алынған сан N>50                                                   0,3
        Күрт арту (сызықтықтан артық)                                      0,1
        Диапазонның ортасында «өлшенбейтін» аймақ бар                      0,2
        Период есептелген (диапазон – 20%) әр нүкте үшін 0,05,
  4.2                                                                  0,05х10=0,5   0,5
        үтірден соң 3 цифр )
        Линеаризация ұсынылған (периодтар қатынасы мен тербеліс            0,5
        санының кері шамалары, периодтар айырымы);
        Тербеліс саны теориялық тұрғыдан есептелген, тәжірибемен
        салыстырылған                                                  0,2+0,1=0,3
  4.3   Линеаризацияланған тәуелділікке есептеулер жасалған                0,2       1,5
        Линеаризацияланған тәуелділіктің графигі тұрғызылған               0,4
        Өлшеу нәтижелерінің графигі тұрғызылған                            0,2
        Сан модулінің функциясының графигіне ұқсас график алынған          0,3
        График минимумының дұрыс орыны                                     0,1
        БАРЛЫҒЫ                                                                      20,0
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                                         с. 1/7

                РЕШЕНИЕ ЗАДАЧИ ЭКСПЕРИМЕНТАЛЬНОГО ТУРА
                          Суперпозиция колебаний
      Описанные в эксперименте продольные и крутильный колебания маятника в приближении
малых углов являются его собственными колебаниями (модами), поэтому их можно рассматривать
независимо друг от друга.
      В приближении малых углов периоды этих колебаний даются формулами
                                                                      𝐿𝐿
                                                  𝑇𝑇0 = 2𝜋𝜋� ,                                                          (1)
                                                                      𝑔𝑔
                                                                          4𝐿𝐿𝐿𝐿
                                                  𝑇𝑇1 = 2𝜋𝜋�                      ,                                     (2)
                                                                      𝑚𝑚𝑚𝑚𝑎𝑎 2
                                                                                                             𝑚𝑚 𝑙𝑙2
где 𝑚𝑚 = 𝑚𝑚0 + 2𝑚𝑚1 – масса маятника, 𝑚𝑚0 – масса стержня, 𝑚𝑚1 – масса гайки, 𝐼𝐼 = 12
                                                                                    0
                                                                                      + 2𝑚𝑚1 𝑧𝑧 2 –
момент инерции стержня с гайками.
       Формулы (1) и (2) фактически используются в работе, но вывод их не требуется и в
дальнейшем не оценивается.

                  Часть 1. Наблюдение эффекта и его качественное описание.
1.1 Конец стержня описывает траектории, соответствующие сложению перпендикулярных
колебаний с близкими частотами. Их также можно представить, как сложение колебаний с равными
частотами, но с медленно изменяющейся разностью фаз между ними. Изображения этих наиболее
типичных траекторий показаны на рисунке ниже.




1.2 Из геометрии следует, что горизонтальные координаты конца стержня описываются формулами:
                                                                 𝑙𝑙
                                            𝑥𝑥 = 𝐿𝐿 sin 𝛼𝛼 + cos 𝛽𝛽
                                                            2
                                          .�            𝑙𝑙
                                                                    .                                  (3)
                                                  𝑦𝑦 = sin 𝛽𝛽
                                                         2
      В приближении малых углов 𝛼𝛼, 𝛽𝛽 ≪ 1 имеем
                                 𝑙𝑙
                   𝑥𝑥 ≈ 𝐿𝐿𝐿𝐿 +
                                 2
               �          𝑙𝑙
                                      .                                                                (4)
                     𝑦𝑦 ≈ 𝛽𝛽
                          2
        Так как углы 𝛼𝛼, 𝛽𝛽 изменяются по гармоническому закону с частотами 𝜔𝜔0 = 2𝜋𝜋/𝑇𝑇0 и 𝜔𝜔1 =
2𝜋𝜋/𝑇𝑇1 соответственно, то уравнение траектории конца стержня имеет вид
                                                                                         𝑙𝑙
                                                      𝑥𝑥(𝑡𝑡) = 𝐿𝐿𝛼𝛼𝑚𝑚𝑚𝑚𝑚𝑚 cos 𝜔𝜔0 𝑡𝑡 +
                                                                                         2
                                                  �                        𝑙𝑙
                                                                                              ,                         (5)
                                                        𝑦𝑦(𝑡𝑡) = 𝛽𝛽𝑚𝑚𝑚𝑚𝑚𝑚 sin 𝜔𝜔1 𝑡𝑡
                                                                           2
которые для близких частот удобно переписать в виде
                                                                                                  𝑙𝑙
                                                             𝑥𝑥(𝑡𝑡) = 𝐿𝐿𝛼𝛼𝑚𝑚𝑚𝑚𝑚𝑚 cos 𝜔𝜔0 𝑡𝑡 +
                                                                                                  2
                                                  �           𝑙𝑙
                                                                                                   .                    (6)
                                                      𝑦𝑦(𝑡𝑡) = 𝛽𝛽𝑚𝑚𝑚𝑚𝑚𝑚 sin(𝜔𝜔0 𝑡𝑡 + (𝜔𝜔1 −𝜔𝜔0 )𝑡𝑡)
                                                                 2
В выражении 𝑦𝑦(𝑡𝑡) для близких частот величину ∆𝜑𝜑 = (𝜔𝜔1 −𝜔𝜔0 )𝑡𝑡 можно рассматривать как медленно
изменяющуюся разность фаз между колебаниями с близкими частотами.
1.3 Очевидно, что форма траектории возвратится к начальной, если разность фаз изменится на
величину ±2𝜋𝜋. Таким образом, период цикла TC подчиняется условию
                                    (𝜔𝜔1 −𝜔𝜔0 )𝑇𝑇𝐶𝐶 = ±2𝜋𝜋,                                      (7)
откуда следует
                                             𝑇𝑇 𝑇𝑇
                                    𝑇𝑇𝐶𝐶 = |𝑇𝑇 0−𝑇𝑇1 |.                                          (8)
                                                             0        1
1.4 Число колебаний продольных колебаний в цикле можно записать в виде
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                с. 2/7

                                                                   𝑇𝑇         𝑇𝑇
                                                        𝑁𝑁𝐶𝐶 = 𝑇𝑇𝐶𝐶 = |𝑇𝑇 −𝑇𝑇
                                                                          1
                                                                              |
                                                                               .               (9)
                                                                       0     0     1


                               Часть 2. Продольные колебания.
2.1 Для повышения точности измерения нужно проводить измерения времен достаточно большого
числа колебаний, в наших экспериментах проведены измерения времени 20 периодов колебаний 𝑡𝑡20 .
Для оценки случайной погрешности эти измерения проведены 10 раз, а их результаты приведены в
таблице 1.

Таблица 1. Измерение периода продольных колебаний.

    𝑛𝑛        𝑡𝑡20 , с
          1      26,39     Среднее значение времени 20 колебаний составляет
          2      26,32     〈𝑡𝑡20 〉 = 26.41 с,
          3      26,51     а приборная погрешность равна половине цены деления секундомера
                           ∆𝑡𝑡1 = 0.5 ∙ 10−3 c.
          4      26,40
                           Случайная погрешность рассчитывается по формуле
          5      26,46
                                                                   2
                                          ∑10 �𝑡𝑡      −〈𝑡𝑡   〉�
          6      26,41     ∆𝑡𝑡2 = 2� 𝑖𝑖=1 𝑛𝑛(𝑛𝑛−1)
                                            20,𝑖𝑖  20
                                                                        = 6.5 ∙ 10−2 с.
          7      26,34
                           Полная погрешность измерения времени равна
          8      26,22
                           ∆𝑡𝑡 = �∆𝑡𝑡12 + ∆𝑡𝑡22 = 0.066 с.
          9      26,55
         10      26,53

           Таким образом, период продольных колебаний равен
                                           𝑡𝑡20
                                     𝑇𝑇0 = 20   = (1.321 ± 0.003) с.                          (10)

                               Часть 3. Крутильные колебания.
3.1 В таблице 2 приведены значения результатов измерений периодов крутильных колебаний при
различных значениях расстояния между нитями 𝑎𝑎. В этой же таблице приведены результаты
расчетов для определения показателя степени 𝑞𝑞.

Таблица 2. Зависимость периода крутильных
колебаний от расстояния между нитями.

𝑎𝑎, см      𝑡𝑡10,с     𝑇𝑇1 , с    ln 𝑎𝑎             ln 𝑇𝑇1
     4,8       59,11     5,911   1,5686         1,7768
     6,3       44,62     4,462   1,8405         1,4956
     7,8       36,31     3,631   2,0541         1,2895
     9,4       29,66     2,966   2,2407         1,0872
   11,0        25,60     2,560   2,3979         0,9400
   12,2        23,32     2,332   2,5014         0,8467
   13,8        20,46     2,046   2,6247         0,7159
   16,0        17,66     1,766   2,7726         0,5687
   18,2        15,82     1,582   2,9014         0,4587
   20,5        13,87     1,387   3,0204         0,3271
   24,0        11,98     1,198   3,1781         0,1807

           Соответствующий график зависимости имеет вид
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                    с. 3/7


                                         7

                                         6

                                         5

                                         4
                                  T, с
                                         3

                                         2

                                         1

                                         0
                                             0       5         10           15    20   25
                                                                    a, sm



3.2 Оптимальным и наиболее распространенным способом определения показателя степени является
построение графика в двойном логарифмическом масштабе. Из формулы (1), приведенной в условии
задачи следует, что
                                       ln T = C + q ln a ,                               (11)
поэтому коэффициент наклона графика равен показателю степени. Этот график показан на рисунке
ниже.
                                      2,0
                                      1,8
                                      1,6
                                      1,4
                                      1,2
                               ln T   1,0
                                      0,8
                                      0,6
                                      0,4
                                      0,2
                                      0,0
                                            0,0          1,0          2,0        3,0    4,0
                                                                     ln a


        Полученная зависимость является линейной с коэффициентом наклона, очень близким к (-1).
Альтернативными способами является построение зависимостей 𝑇𝑇1 (𝑎𝑎−1 ), или 𝑇𝑇1−1 (𝑎𝑎). Однако, в этих
способах необходимо доказать, что построенные графики являются прямыми линиями,
проходящими через начало координат.
        Все эти способы обоснованно свидетельствуют, что искомый показатель степени равен (-1),
т.е. период крутильных колебаний обратно пропорционален расстоянию между нитями.
3.3 Результаты измерений зависимости периода крутильных колебаний от положения гаек
приведены в Таблице 3. В этой же таблице приведены результаты расчетов, необходимые для
построения линеаризованного графика.

Таблица 3. Измерения периода крутильных колебаний.

 𝑧𝑧, см   𝑡𝑡20 , с   𝑇𝑇1 , с   𝑧𝑧 2          𝑇𝑇12     𝑈𝑈
    6     44,58      2,229     36           4,968   284,9
    7     45,75      2,288     49           5,233   300,0
    8     46,83      2,342     64           5,483   314,3
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                                                       с. 4/7

  9      47,87   2,394   81             5,729            328,5
  10     49,17   2,459   100            6,044            346,5
  11     50,84   2,542   121            6,462            370,5
  12     52,15   2,608   144            6,799            389,8
  13     53,47   2,674   169            7,148            409,8
  14     54,85   2,743   196            7,521            431,2
  15     56,91   2,846   225            8,097            464,2

      График этой зависимости показан на рисунке ниже. Видно, что полученная зависимость
является нелинейной.
                                               3,0



                                               2,8



                                               2,6

                                        T, s
                                               2,4



                                               2,2



                                               2,0
                                                     5    6       7        8         9       10     11   12    13   14    15   16

                                                                                             z, sm

3.4 Из формул (1)-(2), приведенных в условии, и результата предыдущего пункта следует, что период
крутильных колебаний описывается формулой
                                                                𝑇𝑇1        √𝐴𝐴+𝐵𝐵𝑧𝑧 2
                                                                   =                     ,                                           (12)
                                                                𝑇𝑇
                                                                 0              𝑎𝑎
линеаризация которой очевидна и имеет вид
                                                                      𝑇𝑇    2
                                                                �𝑎𝑎 𝑇𝑇1 � = 𝐴𝐴 + 𝐵𝐵𝑧𝑧 2 .                                            (13)
                                                                       0
                         𝑇𝑇    2
       Величина 𝑈𝑈 = �𝑎𝑎 𝑇𝑇1 � линейно зависит от 𝑧𝑧 2 , а график линеаризованной зависимости показан
                          0
на рисунке ниже.
                                        500


                                        450


                                        400



                              U,sm^ 2
                                        350


                                        300


                                        250


                                        200
                                               0           50               100                   150         200        250

                                                                               z^ 2, sm^ 2

3.5 Коэффициенты этой зависимости, рассчитанные по методу наименьших квадратов, равны
                                       𝐴𝐴 = (254 ± 4)см2,                                                                            (14)
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                                                        с. 5/7

                                                          𝐵𝐵 = 0.93 ± 0.03.                                           (15)

                             Часть 4. Смешанные колебания.
4.1, 4.2 В Таблице 4 приведены результаты измерений и расчетов, необходимых для проверки
теоретической формулы (9).

Таблица 4. Изучение смешанных колебаний.

                         𝑇𝑇0                                           1
   𝑧𝑧, см    𝑇𝑇1 , с     𝑇𝑇1 𝑁𝑁𝐶𝐶 (теор.) 𝑁𝑁𝐶𝐶 (эксп)                 𝑁𝑁𝐶𝐶
    10,5     1,247     1,059       17
    11,0     1,264     1,045       22          24                    0,042
    11,5     1,282     1,030       33          35                    0,029
    12,0     1,301     1,015       65
    12,5     1,319     1,002      660
    13,0     1,339     0,987       74          60                    0,017
    13,5     1,359     0,972       36          33                    0,030
    14,0     1,379     0,958       24          21                    0,048
    14,5     1,400     0,944       18          16                    0,063
    15,0     1,421     0,930       14          13                    0,077

В этой таблице: 𝑇𝑇1 – рассчитанные по формуле (12) значения периодов крутильных колебаний; 𝑁𝑁𝐶𝐶 –
рассчитанные и измеренные значения числа периодов в цикле.
4.3 Для проверки формулы (9) построен график зависимости величины обратной числу колебаний
 1                  𝑇𝑇                                                1    𝑇𝑇
    от величины 𝑇𝑇0 , которая теоретически описывается формулой         = �𝑇𝑇0 − 1�. График этой
𝑁𝑁𝐶𝐶                     1                                                                               𝑁𝑁𝐶𝐶   1
зависимости, построенный по экспериментальным данным, показан на рисунке ниже.
                                      0,10


                                      0,08


                                      0,06

                               1/Nc
                                      0,04


                                      0,02


                                      0,00
                                         0,90   0,92   0,94   0,96   0,98    1,00   1,02   1,04   1,06   1,08
                                                                       T0/T1


Этот график, а также сравнение рассчитанных и измеренный значений 𝑁𝑁𝐶𝐶 , подтверждают
теоретические выводы.

                                      Содержание                             Баллы                                  Всего
                     Часть 1. Наблюдение эффекта и его теоретическое описание
             Получено сложение колебаний (есть хотя бы один
                                                                               0,2
             правдоподобный рисунок)
       1.1                                                                                                           1,0
             4 рисунка: два близких к отрезку, два овала с указанием
                                                                            4х0,2=0,8
             направления движения 4х0,2
             Выражения для координат на плоскости через углы отклонения     2х0,2=0,4
       1.2                                                                                                           0,8
             Явные зависимости от времени                                   2х0,1=0,2
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                             с. 6/7

        Приближение малых углов                                                0,2
        Основная идея – изменение разности фаз, формула (7);
                                                                            0,5 (0,2)
        (если период биений)
  1.3                                                                                     1,3
        Формула для времени цикла (8)                                          0,5
        Поставлен модуль в формуле (8)                                         0,3
                   𝑇𝑇1
  1.4   𝑁𝑁𝐶𝐶 = |𝑇𝑇 −𝑇𝑇 |
                        .                                                      0,4        0,4
               0   1
                              Часть 2. Продольные колебания
        Оценивается, если оценено численное значение периода колебаний
        Получено значение периода в интервале 1,3 – 1,5 с                       0,4
        Погрешность измерения менее 1% (оценивается, если оценена
                                                                                0,1
        погрешность)
        Проведено не менее 5 измерений времени N колебаний (3, менее)       0,3 (0,1;0)
        Число колебаний N не менее 10 (5; менее)                            0,2 (0,1;0)
        Проведено усреднение по всем измерениям                                 0,1
  2.1   Рассчитана случайная погрешность (усреднение модулей                              2,0
                                                                                0,2
        отклонений, среднеквадратичное отклонение – допустимы)
        Приборная погрешность (половина, или цена деления)                      0,2
        Рассчитана полная погрешность (сумма допустима)                         0,2
        Правильное округление (погрешность – 1-2 цифры, результат – до
                                                                                0,2
        разряда погрешности)
        указана размерность результата                                          0,1
                              Часть 3. Крутильные колебания
        Оценивается, если оценены результаты измерений!
        Если гайки расположены не на концах стержня, результат
        делится на 2.
        За каждое измерение 0,15 (в сумме не более 1,5; попадание в
        диапазон 20%, если измерялось время менее 10 колебаний, по 0,1 за 0,15х10=1,5
        измерение)
  3.1   Нижняя граница диапазона не более 5,0 см                                0,2       2,5
        Верхняя граница диапазона не менее 15,0 см                              0,2
        Получена нелинейная зависимость, близкая к гиперболической              0,1
        Построение графика (оси подписаны и оцифрованы, нанесены все
                                                                          0,1+0,2+0,2=
        точки в соответствии с таблицей, проведена сглаживающая
                                                                               =0,5
        кривая)
        Оценивается, если степень -1, оценены результаты измерений
        Получено значение q=-1                                                  0,5
        Проведена линеаризация в двойном логарифмическом масштабе
                                                                                0,5
        (проведен расчет)
  3.2   (обратные величины, с доказательством прохождения через                           1,5
                                                                            (0,2+0,2)
        нуль);
        Построен график линеаризованной зависимости (оси подписаны и
                                                                          0,1+0,2+0,2=
        оцифрованы, нанесены все точки в соответствии с таблицей,
                                                                               =0,5
        проведена сглаживающая прямая)
        Если расстояние между нитями отличается от 10 см, результат
        делится на 2
        За каждое измерение 0,15 (в сумме не более 1,5; попадание в
        диапазон 20%, если измерялось время менее 10 колебаний, по 0,1 за 0,15х10=1,5
  3.3                                                                                     2,5
        измерение)
        Нижняя граница диапазона не более 6,5 см                                0,2
        Верхняя граница диапазона не менее 14,0 см                              0,2
        Получена нелинейная зависимость выпуклость вниз                         0,1
XX Международная Жаутыковская Олимпиада/Экспериментальный тур                        с. 7/7

        Построение графика (оси подписаны и оцифрованы, нанесены все
                                                                     0,1+0,2+0,2=
        точки в соответствии с таблицей, проведена сглаживающая
                                                                          =0,5
        кривая)
        Проведена линеаризация (рассчитаны квадраты периодов и
                                                                           0,3
        расстояний)
  3.4                                                                0,1+0,2+0,2=   1,0
        Построен график линеаризованной зависимости
                                                                          =0,5
        Получена прямая линия                                              0,2
        Оценивается, если оценены пп. 3.3 – 3.4
        Получены численные значения коэффициентов (в диапазоне 20%,
                                                                        2х0,4=0,8
        не указана размерность -0,1)
  3.5   Рассчитаны погрешности коэффициентов                            2х0,1=0,2    1
        Расчет по МНК коэффициент 1;
        графически, усреднением по всем точкам – 0,8;
        по двум точкам – 0,5;
                               Часть 4. Смешанные колебания
        Оценивается, если оценены результаты измерений
        За каждое измерение 0,2 (в сумме не более 2,0; попадание в
                                                                       0,2х10=2,0
        диапазон 30%)
        Есть две ветви зависимости (не менее 2 точек на каждой)            1,0
        Нижняя граница диапазона не более 11 см                            0,2
  4.1                                                                                4
        Верхняя граница диапазона не менее 15 см                           0,2
        Получено число N>50                                                0,3
        Резкое возрастание (круче линейного)                               0,1
        Есть «неизмеряемая» область в середине диапазона                   0,2
        Проведен расчет периодов (диапазон – 20%) по 0,05 за каждую
  4.2                                                                 0,05х10=0,5   0,5
        точку, не менее 3 знаков после запятой)
        Предложена линеаризация (обратные величины числа колебаний         0,5
        от отношения периодов, разности периодов);
        Проведен теоретический расчет числа колебаний, проведено
        сравнение с результатами эксперимента                         0,2+0,1=0,3
  4.3   Проведен расчет линеаризованной зависимости                        0,2      1,5
        Построен график линеаризованной зависимости                        0,4
        Построен график результатов измерений                              0,2
        Получен график, похожий на график функции модуль числа.            0,3
        Правильное положение минимума графика                              0,1
        ВСЕГО                                                                       20,0
