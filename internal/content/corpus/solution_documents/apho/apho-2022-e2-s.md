---
id: solution-document-apho-2022-e2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2022/E2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2022-e2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2022/E2_S.pdf."
---

Solutions


                                                                                              A2-1       Oﬃcial (English)


EQ2: Acoustic black box solution1
   A.1 (0.2 pt)


                                        𝑥(𝑡) = 𝑣𝑠 𝑡 cos(𝛽) + 𝑅 cos(𝜔𝑡 + 𝜙) + XC                                         (1)
                                        𝑦(𝑡) = 𝑣𝑠 𝑡 sin(𝛽) + 𝑅 sin(𝜔𝑡 + 𝜙) + YC                                         (2)


   A.2 (1.2 pt)
  Figure below shows the graph obtained for the data point interval 0.02.




    Sr no    𝑡(s)      𝑓min

    1        6.26      545.36

    2        11.52     544.4

    3        16.82     544.03

    4        22.14     543.85

    5        27.46     543.75

    6        32.8      543.69

    7        38.14     543.65

    8        43.5      543.62

    9        48.84     543.59

    10       54.18     543.58


   1 Siddharth Tiwary (IIT Powai, Mumbai), Siddhant Mukherjee (The University of Cambridge, UK), Chandan Relekar (IISc, Banga-

lore), Charudutt Kadolkar (IIT Guwahati), Praveen Pathak (HBCSE-TIFR, Mumbai), were the principal authors of this problem. The
contributions of the Academic Committee and the International Board are gratefully acknowledged.

Solutions


                                                                                      A2-2 Oﬃcial (English)


 A.2 (cont.)
    545.5


         545



 𝑓min   544.5


         544


        543.5
                10   20         30                40      50
                                 𝑡


  A.3 (1.0 pt)
 We take a general case in which both detector and the source are moving with velocities 𝑣𝑑 and 𝑣𝑠
 respectively. Also, the line joining source and detector makes angle 𝛼 with the 𝑥-axis as deﬁned in
 ﬁg. 1 of the question.
 Note that 𝛼 is a function of time. Let 𝑛̂ be the vector joining the source and the detector. For the
 case when the source is approaching the detector, frequency detected by the detector is

                                    𝑐 − 𝑣𝑑 ⋅ ̂𝑛(𝑡)
                     𝑓(𝑡′ ) = 𝑓0                                                                       (3)
                                                 ̂
                                    𝑐 − 𝑣 ⃗ ⋅ 𝑛(𝑡)
                                          T
                                     𝑐 − 𝑣𝑑 cos(𝛾 − 𝛼(𝑡))
                             = 𝑓0                                                                      (4)
                                    𝑐 − [(𝑣 ⃗ + 𝑅𝜔𝜃)̂ ⋅ ̂
                                              𝑠        𝑛(𝑡)]
                                                   𝑐 − 𝑣𝑑 cos(𝛾 − 𝛼(𝑡))
                             = 𝑓0                                                                      (5)
                                  𝑐 − [(𝑣𝑠 cos(𝛽 − 𝛼(𝑡)) + 𝑅𝜔 cos (𝜔𝑡 + 𝜙 + 𝜋/2 − 𝛼))]
                                                 𝑐 − 𝑣𝑑 cos(𝛾 − 𝛼)
                             = 𝑓0                                                                      (6)
                                  𝑐 − [(𝑣𝑠 cos(𝛽 − 𝛼(𝑡)) − 𝑅𝜔 sin (𝜔𝑡 + 𝜙 − 𝛼(𝑡))]

 Similarly, for the source moving away from the detector

                                                       𝑐 − 𝑣𝑑 cos(𝛾 − 𝛼)
                          𝑓(𝑡′ ) = 𝑓0                                                                  (7)
                                        𝑐 + [(𝑣𝑠 cos(𝛽 − 𝛼(𝑡)) − 𝑅𝜔 sin (𝜔𝑡 + 𝜙 − 𝛼(𝑡))]

 The expression of minimum frequency in the asymptotic limit (𝑡 → ∞) is

                                                                       𝑐
                                                   𝑓min = 𝑓0                                           (8)
                                                               𝑐 + [(𝑣𝑠 + 𝑅𝜔)]

Solutions


                                                                                A2-3      Oﬃcial (English)


  A.4 (1.4 pt)
 Initial location of the source: Keep the detector ﬁrst on the 𝑥−axis (say 𝑥1 ,0∘ ) and then on the 𝑦−axis
 (say 𝑦1 ,90∘ ) and from the graph, note down the time taken to reach the ﬁrst signal to the detector.
 Lets denote these timings as Δ𝑡𝑥1 and Δ𝑡𝑦1 respectively. Then,

                                        (𝑥 − 𝑥1 )2 + 𝑦2 = (𝑐Δ𝑡𝑥1 )2                                    (9)
                                          2          2
                                        𝑥 + (𝑦 − 𝑦1 ) = (𝑐Δ𝑡𝑦1 )   2
                                                                                                      (10)

 Solving above two equations will give the coordinates of the source. From the simulation, for 𝑥1 =
 𝑦1 = 500m, Δ𝑡𝑥1 = 1.5344 s and Δ𝑡𝑦1 = 1.2727 s. Above equations have two solutions. We can keep
 the detector at third location to choose the correct pair. The answer is

                                         𝑥A = 419.99, 𝑦A = 499.99

Solutions


                                                                               A2-4      Oﬃcial (English)


  A.5 (2.1 pt)
 Let the detector be at such a position where the source approaches the detector from a large distance
 (say from left side), crosses it and then moves away at a large distance (to the right side). In the
 asymptotic limits (far left and far right, 𝛽 ≈ 𝛼), two pairs of the frequencies will be detected by the
 detector. We take 𝑣𝑑 = 0. On the far left side

                                                          𝑐
                                         𝑓max = 𝑓0                                                   (11)
                                                   𝑐 − (𝑣𝑠 + 𝜔𝑅)
                                                          𝑐
                                         𝑓min = 𝑓0                                                   (12)
                                                   𝑐 − (𝑣𝑠 − 𝜔𝑅)

 On the far right side
                                                          𝑐
                                         𝑓max = 𝑓0                                                   (13)
                                                   𝑐 + (𝑣𝑠 − 𝜔𝑅)
                                                          𝑐
                                         𝑓min = 𝑓0                                                   (14)
                                                   𝑐 + (𝑣𝑠 + 𝜔𝑅)

 Eqs. (11) and (12) yields

                                          𝑓max + 𝑓min   𝑐 − 𝑣𝑠
                                                      =                                              (15)
                                          𝑓max − 𝑓min     𝜔𝑅

 Eqs. (13) and (14) yields

                                          𝑓max + 𝑓min   𝑐 + 𝑣𝑠
                                                      =                                              (16)
                                          𝑓max − 𝑓min     𝜔𝑅

 It is also given that at 𝑡 = 0, there is a ﬁnite distance between the source and the detector. This will
 cause a signal delay. Let Δ𝑡 be the time interval between two peaks (𝑓max ). In this case

                                                  2𝜋     𝑣
                                           Δ𝑡 =      (1 + 𝑠 )                                        (17)
                                                  𝜔       𝑐
 Eqs. (15-17) can be solved together to obtain the values of 𝑣𝑠 , 𝜔, and 𝑅. It is necessary to keep
 the stationary detector at such coordinates (say 𝑥𝐷 , 𝑦𝐷 ), so that the source approaches the detector
 from a large distance, crosses it and then moves away to a large distance. Note that the asymptotic
 behaviour can be identiﬁed in the region where the extrema in the graph remains almost constant.
 Also, we expect a sharp change in the graph if the detector's distance from the origin is such that
 the angle 𝛼 ≈ 𝛽. Keeping the distance ﬁxed at 8000 m, we try with various values of 𝜃.

Solutions


                                                                                 A2-5       Oﬃcial (English)


 A.5 (cont.)




                       10∘                          20∘                           30∘




                       40∘                          50∘                           60∘




                       70∘                          80∘                           90∘


 We can see that at 𝜃 = 30∘ , far left and right parts of the graph show asymptotic behaviour. In
 these regions, peak frequencies do not show appreciable change. Notice that the values of the peak
 frequencies in the left side of the graph is higher than the values of the peak frequencies in the right
 side of the graph in this region. This indicates that the source is moving away from the detector in
 the right side of the graph. Detector is placed somewhere in the transient region. Expand the graph
 for a far left region this gives with a decreased data point interval (say 0.001) for a more accurate
 𝑓max and 𝑓min numbers.
 𝑓min = 788.24 Hz and 𝑓max = 5569.59 Hz. Inserting this in Eq. (11)

                                        𝑓max + 𝑓min          𝑐 − 𝑣𝑠
                                                    = 1.33 =                                           (18)
                                        𝑓max − 𝑓min            𝜔𝑅

 Far right region gives
 𝑓min = 543.96 Hz and 𝑓max = 1353.45 Hz. Inserting this in Eq. (12)

                                        𝑓max + 𝑓min          𝑐 + 𝑣𝑠
                                                    = 2.34 =                                           (19)
                                        𝑓max − 𝑓min            𝜔𝑅

 equations (18-19) yields 𝑣𝑠 = 91.1 m/s and 𝜔𝑅 = 179.66 m/s. Also,for any two peaks in asymptotic
 case
                                                                2𝜋     𝑣
                                Δ𝑡 = 148.84 − 143.48 = 5.36 =      (1 + 𝑠 )                            (20)
                                                                𝜔       𝑐
 We use the value of 𝑣𝑠 = 91.1 m/s to get 𝜔 = 1.49 rad s−1 . From 𝜔𝑅 = 179.66 m/s, 𝑅 = 120.57 m. To
 obtain 𝑓0 , insert 𝑓min = 5327.82Hz on the far right side in Eq. (8) and solve for 𝑓0 . This gives 𝑓0 to be
 990.26 Hz.

Solutions


                                                                           A2-6      Oﬃcial (English)


 A.5 (cont.)
   𝑓0 (Hz)         𝜔 (s−1 )   𝑅 (m)       𝑣S (m/s)

   990.26Hz        1.49𝑠−1    120.57m     91.1m/s


  A.6 (2.0 pt)
 Calculating 𝛽
 Figure below represents a schematic picture, where S is a source at a very large distance. P and Q
 represent two different positions of detectors placed at different instants.
  𝑦                              S




      𝛽                               𝑥
  𝑃            𝑄
 At large distances. let the time taken for the sound signal to reach at 𝑃 detector: 𝑡0 = 1009.61
 let the time taken for the sound signal to reach at 𝑄 detector:𝑡1 = 1007.85
 The distance between 𝑃 detector and 𝑄 detector is 660m and corresponding time taken by sound
 to reach their respective detectors are 1009.61s and 1007.85s respectively. The expression for time
 difference is given by


                                                   𝑃 𝑄 cos(𝛽)
                                          𝑡0 − 𝑡1 =                                             (21)
                                                        𝑐
                                                    (𝑡0 − 𝑡1 )𝑐
                                           cos(𝛽) =                                             (22)
                                                       𝑃𝑄

 which gives 𝛽 = 28.36∘

Solutions


                                                                                     A2-7   Oﬃcial (English)


 A.6 (cont.)
 Alternate solution for 𝛽:
  𝑦                                                                              F
                                        2
                                                                    C        𝛽
                                                         H
                                                  E
                                                                        C'
                     1                                         L

                              D




  B
 A
 B'
                𝜃2
          𝜃1
                                                                    𝑥
   O
 Red line AF depicts the direction of the velocity 𝑣𝑠 of the circle. We aim to determine 𝛽 which 𝑣𝑠⃗
 makes with the 𝑥-axis.

 Value of the frequency detected by the detector depends on two aspects, ﬁrst from which lo-
 cation on the cycloid, the source emitted the signal and second, on the location of the detector.

 Points H and L during one cycle of the source's trajectory depict the location where the source's
 speed is maximum and minimum respectively. This is due to 𝑣𝑠⃗ being parallel or anti-parallel to the
 tangential velocity component of the rotation on these points.

 As the source takes 𝑛𝑡ℎ turn on the cycloid, detector on different angular positions on circular
 arc 1 will detect different values of 𝑓max corresponding to those positions. Starting from the angular
 position near the 𝑥-axis (0∘ ), 𝑓max will keep increasing till the detector is kept on point D at (𝜃1 ). In
 fact, for any position on line BC which is parallel to AF, the detector will detect maximum of all 𝑓max .
 Similarly, if the detector is placed anywhere on line 𝐵′ 𝐶 ′ which is also parallel to AF, it will detect
 minimum of 𝑓min . In the simulation, you can change the angle by changing 𝑥, 𝑦 coordinates and
 keeping the velocities zero.

 We repeat this exercise by changing the detector distance to arc 2. Scanning across the arc,
 angle 𝜃2 can be obtained for which the detector detects maximum of 𝑓max .

 Once we have the angular positions 𝜃1 and 𝜃2 determined, we can use the coordinates of point D
 and E to calculate the angle of segment DE which it makes with the 𝑥-axis. This is the angle 𝛽. If the
 coordinates of point D and E are (𝑥1 , 𝑦1 ) and (𝑥2 , 𝑦2 ) respectively. Then

                                                         𝑦2 − 𝑦 1
                                            𝛽 = arctan                                                 (23)
                                                         𝑥2 − 𝑥 1

Solutions


                                                                                A2-8      Oﬃcial (English)


  A.6 (cont.)
 This process is illustrated in table below and the corresponding graph. First we place the detector at
 8000 m away from the origin and change the coordinates for the corresponding angular position 0∘
 - 90∘ . We record 𝑓max for any ﬁxed cycle, (10th in this case). It can be seen from the plot of 𝑓max vs 𝜃
 that the 𝜃1 is between 25∘ - 35∘ .

  𝜃    𝑓min      𝑓max

  5    676.08    2670.30

  10   722.99    3620.51

  20   763.49    4957.28

  30   781.46    5478.86

  40   753.98    4032.21

  50   711.98    3007.44

  60   677.39    2486.46

  70   651.25    2185.81

  80   630.99    1987.99

  90   614.68    1845.65

Solutions


                                                                              A2-9      Oﬃcial (English)


  A.6 (cont.)
 We go in smaller steps to determine 𝜃1 more accurately. Figure below shows the table and graph for
 the variation between 25∘ − 35∘ .



  𝜃      𝑓min      𝑓max

  25     777.95    5538.23

  26     779.67    5589.40

  26.9   780.80    5609.15

  27     780.90    5609.74

  27.3   781.18    5609.546

  27.5   781.33    5607.78

  28     781.62    5597.66

  29     781.81    5553.37

  30     781.46    5478.86

  31     780.58    5377.65

  32     779.17    5254.35



 It is clear from the table and graph that 𝜃1 = 27∘ . We repeat this for another distance 16000 m. Table
 and graph for this distance is given below.

Solutions


                                                A2-10
                                                  Oﬃcial (English)


 A.6 (cont.)



        5,000


        4,000
 𝑓max

        3,000


        2,000

                     20      40       60   80
                                  𝜃

  𝜃         𝑓min      𝑓max

  25        781.12    5589.093

  26        781.47    5602.27

  27        781.70    5609.05

  27.4      781.76    5609.95

  27.5      781.77    5610.01

  28        781.81    5609.34

  29        781.80    5603.16

  30        781.66    5590.544

  31        781.41    5571.60

  32        781.04    5546.48

Solutions


                                                                              A2-11          Oﬃcial (English)


 A.6 (cont.)


        5,600



 𝑓max   5,580



        5,560




            25   26       27   28       29   30      31    32
                                    𝜃
 This gives 𝜃2 = 27.5 . Taking the corresponding values of 𝑥1 , 𝑦1 , 𝑥2 , 𝑦2 and using Eq. (23),
                      ∘


                                                    7468.77 − 3631.92
                                    𝛽 = arctan                           = 28.5∘                       (24)
                                                  14192.17 − 7128.052194

Solutions


                                                                           A2-12           Oﬃcial (English)


  A.7 (2.1 pt)
 Coordinates of the center of the circle
 For this part, keep the detector at some ﬁxed position say on the 𝑦-axis. A schematic diagram of
 the initial location of the source and the the detector is depicted in the ﬁgure below (ﬁgure is not to
 scale).
  y


    D




                           α
                           S
                       ϕ
                C



                                                    x
 We record the detected frequency of the ﬁrst signal sent by the source. We already have the value of
 𝑅 and the source's initial coordinates. The detected frequency at 𝑡 = 0, i.e. the ﬁrst signal is 795.69 Hz
 if the detector is kept at 500 m on the 𝑦-axis. With the source's coordinates (419.99,499.99) m,

                                                              0
                                             tan(180 − 𝛼) =                                            (25)
                                                            419.99
                                                          𝛼 = 180∘                                     (26)

 Using the values of detected frequency and 𝛼 in Eq. (7)

                                                      990.26 × 330
                           795.69 =                                                                    (27)
                                     330 − 91.1 cos(28.5 − 180) + 179.66 sin(𝜙 − 𝛼)
                               ⇒ 𝜙 ≈ 0∘                                                                (28)

 This yields source's center coordinates to be (299.42,499.99) m.
