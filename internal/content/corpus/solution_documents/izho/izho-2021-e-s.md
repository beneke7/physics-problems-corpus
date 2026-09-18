---
id: solution-document-izho-2021-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2021_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2021_E_S.pdf."
---

XVII International Zhautykov Olympiad/Experimental Competition                                     Page 1/8

                                                               SOLUTION
                                                   COMPUTER EXPERIMENT:
                 A mathematical pendulum or what angle can be considered rather small ...
                                                1. Constructing a theoretical model.
1.1 The formula for the period of small oscillations of a mathematical pendulum has the form
                              l
                 T = 2           .                                                                    (1)
                              g
1.2 From the law of conservation of mechanical energy for the ball of the pendulum (the zero level of the
potential energy is taken at the suspension point)
                  ml 2 2
                            = mgl (cos  − cos 0 ) ,                                                  (2)
                     2
the following formula is derived for the angular velocity of the pendulum
                         2g
                 =           ( cos  − cos 0 ) .                                                     (3)
                           l
1.3 Let us divide the entire section of motion from 0 to zero into infinitely small intervals d . The time
 dt it takes for the pendulum to pass this interval is found as
                        d                     d
                 dt =        =                               .                                         (4)
                                   2g
                                          ( cos  − cos 0 )
                                      l
         Then the time of motion t1 is obtained as the sum of small intervals, which finally reduces to a
simple integration
                      0        0
                                                 d
                 t1 =  dt =                                  .                                       (5)
                                       2 g
                       0         0
                                            ( cos  − cos 0 )
                                        l
1.4 The oscillation period is 4 times longer than the found time t1 , viz.
                 T = 4t1 .                                                                             (6)
1.5 The angular velocity in dimensionless units is expressed as follows
                       d          d            l
                 =          =              =      .                                                  (7)
                       d           g           g
                                       dt
                                    l
1.6 The period of small oscillations in dimensionless units reads as
                  ~       g
                 T =         T = 2 .                                                                  (8)
                          l
1.7 The dependence of the angular velocity ~ on the deflection angle  has the form
               ( ) = 2(cos  − cos 0 ) .                                                           (9)
                       2. Designing an experimental setup, planning an experiment.
2.1 The partition interval is equal to
                     0
               =       .                                                                           (10)
                      N
2.2 First, you should set the "zeroth" angle of deflection, and the coordinates of the rest of the splitting
points are given by the formula
               k = k −1 −  .                                                                     (11)
2.3 The angular velocity  k at the point  k is described by the formula
               k = 2(cos k − cos 0 ) .                                                             (12)
                                     
       In the particular case of 0 = this formula further simplifies to
                                     2


XVII International Zhautykov Olympiad/Experimental Competition                                            Page 2/8

                 k = 2cos k .                                                                             (12а)
2.4 In the recommended approximation of uniformly accelerated motion, the average speed at the selected
interval is equal to the arithmetic mean of the angular velocities at the ends of the interval, i.e.
                         1
                   = (k −1 + k ) ,
                         2
        Therefore, the travel time t k of the k ’th interval from  k −1 to  k is obtained as
                            2
                 tk =              .                                                                       (13)
                         k −1 + k
2.5 The time t k to reach the angle  k is found via
                 tk = tk −1 + tk                                                                           (14)
at the initial condition t0 = 0 .
2.6 The oscillation period TN when dividing into N intervals is eventually written as
                 TN = 4t N .                                                                                (15)
                                      3. Trial experiment, estimation of errors.
3.1 The results of calculating the angular velocities, times and periods of oscillations for the indicated values
of the number of partition intervals are shown in Table 1.

         Table 1. Calculation of periods of oscillations with different numbers of partition intervals.
    N=           32                                       N=          16
           0,0491                                            0,0982
    k                             t k       tk         k                           t k       tk
         0   1,5708      0,0000                0,0000       0     1,5708     0,0000                 0,0000
         1   1,5217      0,3133     0,3134     0,3134       1     1,4726     0,4428     0,4435      0,4435
         2   1,4726      0,4428     0,1299     0,4432       2     1,3744     0,6246     0,1840      0,6274
         3   1,4235      0,5417     0,0997     0,5430       3     1,2763     0,7620     0,1416      0,7690
         4   1,3744      0,6246     0,0842     0,6271       4     1,1781     0,8749     0,1200      0,8890
         5   1,3254      0,6971     0,0743     0,7014       5     1,0799     0,9710     0,1064      0,9954
         6   1,2763      0,7620     0,0673     0,7687       6     0,9817     1,0541     0,0970      1,0923
         7   1,2272      0,8208     0,0620     0,8307       7     0,8836     1,1264     0,0900      1,1824
         8   1,1781      0,8749     0,0579     0,8886       8     0,7854     1,1892     0,0848      1,2672
         9   1,1290      0,9247     0,0546     0,9432       9     0,6872     1,2434     0,0807      1,3479
        10   1,0799      0,9710     0,0518     0,9950      10     0,5890     1,2896     0,0775      1,4254
        11   1,0308      1,0140     0,0495     1,0444      11     0,4909     1,3281     0,0750      1,5004
        12   0,9817      1,0541     0,0475     1,0919      12     0,3927     1,3593     0,0731      1,5735
        13   0,9327      1,0915     0,0458     1,1377      13     0,2945     1,3834     0,0716      1,6451
        14   0,8836      1,1264     0,0443     1,1819      14     0,1963     1,4006     0,0705      1,7156
        15   0,8345      1,1589     0,0430     1,2249      15     0,0982     1,4108     0,0698      1,7854
        16   0,7854      1,1892     0,0418     1,2667      16     0,0000     1,4142     0,0695      1,8549
        17   0,7363      1,2173     0,0408     1,3075
        18   0,6872      1,2434     0,0399     1,3474
        19   0,6381      1,2674     0,0391     1,3865
        20   0,5890      1,2896     0,0384     1,4249
        21   0,5400      1,3098     0,0378     1,4626
        22   0,4909      1,3281     0,0372     1,4999
        23   0,4418      1,3446     0,0367     1,5366


XVII International Zhautykov Olympiad/Experimental Competition                                           Page 3/8

        24   0,3927             1,3593    0,0363   1,5729
        25   0,3436             1,3723    0,0359   1,6088
        26   0,2945             1,3834    0,0356   1,6445
        27   0,2454             1,3929    0,0354   1,6798
        28   0,1963             1,4006    0,0351   1,7150
        29   0,1473             1,4065    0,0350   1,7500
        30   0,0982             1,4108    0,0348   1,7848
        31   0,0491             1,4134    0,0348   1,8196
        32   0,0000             1,4142    0,0347   1,8543

                                         TN=       7,4171                                  TN=      7,4197

    N=            8                                          N=           4
           0,1963                                                0,3927
    k                                  t k      tk        k                           t k     tk
         0   1,5708             0,0000             0,0000        0   1,5708       0,0000            0,0000
         1   1,3744             0,6246    0,6287   0,6287        1   1,1781       0,8749   0,8977   0,8977
         2   1,1781             0,8749    0,2619   0,8906        2   0,7854       1,1892   0,3805   1,2783
         3   0,9817             1,0541    0,2036   1,0941        3   0,3927       1,3593   0,3082   1,5864
         4   0,7854             1,1892    0,1751   1,2692        4   0,0000       1,4142   0,2832   1,8696
         5   0,5890             1,2896    0,1584   1,4276
         6   0,3927             1,3593    0,1483   1,5759
         7   0,1963             1,4006    0,1423   1,7182
         8   0,0000             1,4142    0,1395   1,8577

                                         TN=       7,4307                                  TN=      7,4785

   N=                 2                                      N=              1
               0,7854                                                1,5708
   k                                   t k      tk        k                           t k     tk
         0   1,5708             0,0000             0,0000        0   1,5708       0,0000            0,0000
         1   0,7854             1,1892   1,3209    1,3209        1   0,0000       1,4142   2,2214   2,2214
         2   0,0000             1,4142   0,6034    1,9242

                                         TN=        7,6969                                 TN=       8,8858

3.2 – 3.3 To calculate the graph points of the law of motion in the approximation of small oscillations, it is
necessary to use the formula
                            
                  (t ) =cos t .                                                                         (16)
                       2
       The calculation results for this law are presented in Table 2 and in the graph. There is also a line in
the graph representing the calculated law of motion (16). It is interesting to note that in the first case, the
time values are set, and the corresponding deflection angles are calculated; and in the second one, on the
contrary, the deflection angles are set and corresponding times are calculated.


XVII International Zhautykov Olympiad/Experimental Competition                                      Page 4/8

Table 2.
k    t         
  0 0,0000     1,5708
  1 0,0982     1,5632
  2 0,1963     1,5406
  3 0,2945     1,5032
  4 0,3927     1,4512
  5 0,4909     1,3853
  6 0,5890     1,3061
  7 0,6872     1,2142
  8 0,7854     1,1107
  9 0,8836     0,9965
10 0,9817      0,8727
11 1,0799      0,7405
12 1,1781      0,6011
13 1,2763      0,4560
14 1,3744      0,3064
15 1,4726      0,1540
16 1,5708      0,0000

3.4 - 3.5 The results of calculating the errors  N
of the oscillation periods for different numbers N
of partition intervals are shown in Table 3.

Table 3. Calculation errors.
N T            N           ln N      ln  N
  1   8,8858 1,98E-01        0,0000    -1,6195
  2   7,6969 3,77E-02        0,6931    -3,2774
  4   7,4785 8,27E-03        1,3863    -4,7952
  8   7,4307 1,83E-03        2,0794    -6,3026
 16   7,4197 3,50E-04        2,7726    -7,9584
 32   7,4171 0,00E+00

        To determine the parameters of the
                     C
dependence  N =  , it must be represented on a
                     N
double logarithmic scale as
                ln  N = ln C −  ln N .     (17)
The figure on the right shows a graph of this
dependence, drawn according to the data in Table
3. The linearity of the obtained dependence clearly
proves the applicability of the formula for the
dependence of the calculation error on the number N .
        The parameters of this linear relationship, calculated using the least squares method, are equal: the
slope coefficient a  −2,3 and the shift b  −1,65 . Therefore, the sought parameters of the dependence are
found as
                  −a = 2,3
                                     .                                                                 (18)
                C = exp( b)  0,19
3.6 It is easy to find from formula (17) that the number of partition intervals required to achieve the error
 = 0,002 is expressed as


XVII International Zhautykov Olympiad/Experimental Competition                                         Page 5/8

                          1/ 
                         С 
                 N min =    8 .                                                                       (19)
                          
So, all further calculations should be carried out at N = N min = 8 .
                        4. Experiment: the dependence of the period on the amplitude.
4.1 The results of calculating the periods of oscillations for various amplitudes of oscillations are shown in
Table 4.
                                 Table 4. Calculation of periods of oscillations.
        0     0,2618             15                  0         0,5236            30
       N=             8                               N=               8
             0,0327                                           0,0654
       k                         t k      tk       k                           t k        tk
          0   0,2618   0,0000              0,0000        0       0,5236   0,0000                   0,0000
          1   0,2291   0,1261    0,5190    0,5190        1       0,4581   0,2484    0,5270         0,5270
          2   0,1963   0,1724    0,2193    0,7383        2       0,3927   0,3402    0,2224         0,7494
          3   0,1636   0,2036    0,1741    0,9124        3       0,3272   0,4023    0,1763         0,9257
          4   0,1309   0,2259    0,1524    1,0648        4       0,2618   0,4470    0,1541         1,0799
          5   0,0982   0,2419    0,1399    1,2047        5       0,1963   0,4791    0,1413         1,2212
          6   0,0654   0,2527    0,1323    1,3370        6       0,1309   0,5008    0,1336         1,3548
          7   0,0327   0,2590    0,1279    1,4649        7       0,0654   0,5135    0,1291         1,4839
          8   0,0000   0,2611    0,1259    1,5908        8       0,0000   0,5176    0,1269         1,6108
                                 T=        6,3630                                  T=              6,4432
                                 T/To=     1,0127                                  T/To=           1,0255

      0      0,7854             45                0           1,0472            60
      N=           8                                N=                8
            0,0982                                           0,1309
      k                        t k      tk       k                            t k       tk
          0   0,7854 0,0000                0,0000        0       1,0472   0,0000                   0,0000
          1   0,6872 0,3631      0,5408    0,5408        1       0,9163   0,4664    0,5613         0,5613
          2   0,5890 0,4987      0,2278    0,7687        2       0,7854   0,6436    0,2359         0,7972
          3   0,4909 0,5913      0,1801    0,9488        3       0,6545   0,7660    0,1857         0,9829
          4   0,3927 0,6584      0,1571    1,1059        4       0,5236   0,8556    0,1614         1,1444
          5   0,2945 0,7069      0,1438    1,2497        5       0,3927   0,9207    0,1474         1,2917
          6   0,1963 0,7398      0,1357    1,3855        6       0,2618   0,9653    0,1388         1,4306
          7   0,0982 0,7590      0,1310    1,5165        7       0,1309   0,9914    0,1338         1,5643
          8   0,0000 0,7654      0,1288    1,6453        8       0,0000   1,0000    0,1315         1,6958
                                 T=        6,5810                                  T=              6,7832
                                 T/To=     1,0474                                  T/To=           1,0796

      0      1,3090             75                0           1,5708            90
      N=           8                                N=                8
            0,1636                                           0,1963
      k                        t k      tk       k                            t k       tk
          0   1,3090 0,0000                0,0000        0       1,5708   0,0000                   0,0000
          1   1,1454 0,5548      0,5899    0,5899        1       1,3744   0,6246     0,6287        0,6287
          2   0,9817 0,7704      0,2469    0,8368        2       1,1781   0,8749     0,2619        0,8906
          3   0,8181 0,9217      0,1934    1,0302        3       0,9817   1,0541     0,2036        1,0941
          4   0,6545 1,0340      0,1673    1,1976        4       0,7854   1,1892     0,1751        1,2692


XVII International Zhautykov Olympiad/Experimental Competition                                              Page 6/8

          5    0,4909   1,1163        0,1522    1,3497         5     0,5890      1,2896    0,1584       1,4276
          6    0,3272   1,1731        0,1429    1,4927         6     0,3927      1,3593    0,1483       1,5759
          7    0,1636   1,2065        0,1375    1,6302         7     0,1963      1,4006    0,1423       1,7182
          8    0,0000   1,2175        0,1350    1,7652         8     0,0000      1,4142    0,1395       1,8577
                                      T=        7,0608                                    T=            7,4307
                                      T/To=     1,1238                                    T/To=         1,1826

       Below is a summary table for calculations of the oscillation period for different amplitudes.

                                                         Table 5.
                                                                T                   T
                                                                                       −1
                         0 ,        0        T               T0          2
                                                                             0      T0
                                 15    0,2618       6,3630      1,0127    0,0685     0,0127
                                 30    0,5236       6,4432      1,0255    0,2742     0,0255
                                 45    0,7854       6,5810      1,0474    0,6169     0,0474
                                 60    1,0472       7,0608      1,0796    1,0966     0,0796
                                 75    1,3090       7,0608      1,1238    1,7135     0,1238
                                 90    1,5708       7,4307      1,1826    2,4674     0,1826

4.2 – 4.3 For small oscillations, the formula for the
oscillation period
                                  2 
                T (0 ) = T0  a + 0         (20)
                                   b 
must coincide with formula (1), whence it follows that
the parameter a = 1 . To check the applicability of
formula (20) to the description of the calculation
results, it is necessary to draw a graph of the
                         T     
dependence of the value  − 1 on the square of the
                          T0   
amplitude  02 , which is shown in the figure on the
right.
        The slope coefficient of the obtained
dependence is 0,0706 , therefore, the parameter b
appearing in formula (20) is approximately equal to
                b  14 .                            (21)
4.4 With an acceptable error of a real experiment is 5%,
the deviation of the period from the period of small
oscillations would not be noticeable if the inequality
holds
                02
                   0.05 ,                         (22)
                b
whence it follows that the angles can be considered rather small for 0  45 .

                                                Content                                     Total for      Points
                                                                                            each part
                        1. Constructing a theoretical model.                                   1.5
                                       l                                                       0.1          0.1
    1.1       Formula (1): T = 2
                                       g


XVII International Zhautykov Olympiad/Experimental Competition                            Page 7/8

           Law of motion                                                            0.4
           - conservation of energy (2);                                                  0.1
    1.2
                                 2g
           - formula (3):  =       ( cos  − cos 0 )                                    0.3
                                  l
           Integration of the law of motion                                         0.3
                                d
           - formula (4): dt =                                                            0.1
                                     
    1.3                        0
                                                d
           - formula (5): t1 = 
                                         2g                                               0.2
                                 0
                                            ( cos  − cos 0 )
                                          l
    1.4    Period (6): T = 4t1                                                      0.1   0.1
                                     l
    1.5    Formula (7): ~ =                                                       0.2   0.2
                                     g
                        ~                                                           0.2   0.2
    1.6    Formula (8): T = 2
    1.7    Formula (9):  ( ) = 2(cos  − cos 0 )                                 0.2   0.2
          2. Designing an experimental setup, planning an experiment.               1.5
                                     0
    2.1    Formula (10):  =                                                       0.1   0.1
                               N
    2.2    Formula (11): k = k −1 −                                             0.1   0.1
    2.3    Formula (12): k = cos k − cos 0                                       0.1   0.1
           Uniformly accelerated motion                                             1.0
                           1                                                              0.5
           Main idea  = (k −1 + k )
    2.4                    2
                                 2
           Formula (13): tk =                                                            0.5
                               k −1 + k
    2.5    Formula (14): tk = tk −1 + tk                                           0.1   0.1
    2.6    Formula (15): TN = 4t N                                                  0.1   0.1
                    3. Trial experiment, estimation of errors.                      9.0
           Graded only if the periods obtained differ from those in this official   4.2
           solution lees than. Periods are correctly calculated for
           N=32                                                                           1.2
           N=16                                                                           1.0
    3.1
           N=8                                                                            0.8
           N=4                                                                            0.6
           N=2                                                                            0.4
           N=1                                                                            0.2
           Graph:                                                                   0.5
    3.2    All points are plotted in accordance with the table;                           0.3
           Smooth line is drawn;                                                          0.2
           Graph                                                                    1.0
           Law of motion is obtained, table 2                                             0.5
    3.3
           All points are plotted in accordance with the table                            0.3
           Smooth line is drawn;                                                          0.2
    3.4    Errors are correctly evaluated, table 3                                  0.5   0.5
           Graph                                                                    2.3
    3.5    Double logarithm scale is used                                                 0.5
           Linearized dependence is drawn                                                 0.5


XVII International Zhautykov Olympiad/Experimental Competition                             Page 8/8

           Linear dependence is obtained                                                   0.3
           The power is found as   2,3  0,1                                             0.5
           The coefficient is found as C  0,19  0,1                                      0.5
    3.6    Concluded that N = 8  1                                                 0.5    0.5
        4. Experiment: the dependence of the period on the amplitude.               8.0
           Graded only if the periods obtained differ from those in this official   4.2
           solution lees than 0,02
    4.1
           For each period obtained                                                        0.8
           One period is added from part 3                                                 0.2
           Graph of the linearized dependence                                       1.5
    4.2
                                           ( )
           Correct linearization is used T 02                                             0.5
           Graph is plotted                                                                0.5
           Linearized dependence is obtained                                               0.5
           Parameters of the linearized dependence                                  1.3
    4.3    Parameter a = 1 (only exact value is accepted)                                  0.3
           Parameter b in the range 13-16                                                  1.0
    4.4    Small angle is estimated as   45                                       1.0   1.0
           TOTAL                                                                    20.0
