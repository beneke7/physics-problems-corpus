---
id: solution-document-gpho-2019-experiment-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2019_experiment_solutions.pdf
extraction_method: pdftotext-layout
mapped_problems: [gpho-2019-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2019_experiment_solutions.pdf."
---

COVER
                                                                                             GPhO
                                                                                             Muscat 2019


            The 3rd Gulf Physics Olympiad — Experimental Competition Solutions
                                            Muscat, Oman — October 8th 2019

Error analysis
In what follows, any time errors of the mean of tabulated data are calculated, standard deviation is used. Assuming there are
N data points of the form xi , i ∈ {1, . . . , N }, the mean is

                                                                     1 X
                                                                         N
                                                            xavg =         xi ,
                                                                     N i=1

and the standard deviation of the mean                        sP
                                                                     N
                                                                     i=1 (xi − xavg )
                                                                                     2
                                                    ∆xavg =                              .
                                                                      N (N − 1)
For error propagation through equations, Pythagoran rule for adding errors in quadrature is used (alternatively, one could use
min-max but for lower accuracy). In general, when you have a variable y be a function of variables xi , i ∈ {1, . . . N } with errors
∆xi , then the error of y is given by                       v
                                                            uN 
                                                            uX ∂y 2
                                                       ∆y = t         ∆x2i .
                                                              i=1
                                                                  ∂xi

Any time the methods used in finding the errors is not specified, 50 % of the marks for error analysis are to be deducted.




                                                            — page 1 of 6 —
Problem E1. Magnetic properties of matter (20 Part B. Surface tension of water (4 points)
points)                                          After correctly setting up the equipment and pulling the
Part A. Diameter of the syringe needle (3 points)                 middle part downwards, the needle should start dripping at one
   In order to maximize the accuracy, the path length of the      point. This happens because the surface tension isn’t enough
diffracted laser needs to be maximized since that increases the   to hold back the additional pressure pushing the water down.
separation of the maxima on the screen.              (0.2 pts) Note that the critical case is when the radius of curvature of
A two-fold increase in the path length can be achieved by using   the water drop is the smallest, because then the extra pressure,
a mirror to reflect the laser from one end of the table to the    2σ/r, is the biggest. This happens when r = d/2, shown in the
other and then back again.                           (0.3 pts) figure below.                                            (0.6 pts)


   For both needles, the distance from needle to the mirror and
from the mirror to the screen were both L0 = 119 cm ± 0.5 cm.
The optical path length is then L = 2L0 = 238 cm ± 0.5 cm.
                                                     (0.3 pts)
On the screen, the optical path difference between two neigh-
bouring maxima is λ, which corresponds to a distance of
l1 = λd L on the screen, where d is the diameter of the syringe
needle. In order to increase the accuracy, the measurements
should cover as many maxima, N as possible. Then the separ-
ation is lN = N L λd and d = NlLλ
                               n
                                  .                  (0.4 pts)


   For the white needle, following measurements were made:

           i   N    lN (mm)    lN /N (mm)    d(mm)
           1   22   89         4.05          0.313                   The pressure balance reads
           2   18   74         4.11          0.308                                         2σ/r = ρgh,
           3   20   79         3.95          0.321
                                                                  where ρgh is the pressure from the water column of height h
                                  1 measurement (0.4/0.6 pts) with respect to the needle. If we measure h, we can thus express
                                 2 measurements (0.5/0.6 pts) the surface tension as
                         3 or more measurements (0.6/0.6 pts)                                ρghr   ρghd
                                                                                        σ=        =      .                    (1)
                                                                                               2      4
   The average diameter is found to be d = 0.31 mm(0.1 pts)                                                             (0.6 pts)
with an error of ∆d = 0.004 mm.                      (0.2 pts)
                                                                     The following repeated measurements were made for the
   For the green needle, following measurements were made:        white needle:
           i   N    lN (mm)    lN /N (mm)    d(mm)                                           i   h(mm)
           1   18   98         5.44          0.233                                           1   84
           2   15   76         5.07          0.250                                           2   80
           3   16   85         5.31          0.238                                           3   83
                                                                                             4   82
                                  1 measurement (0.4/0.6 pts)
                                                                                             5   83
                                 2 measurements (0.5/0.6 pts)
                         3 or more measurements (0.6/0.6 pts)                                         1 measurement (0.2/0.6 pts)
                                                                                                 2-4 measurements (0.4/0.6 pts)
   The average diameter is found to be d = 0.24 mm (0.1 pts)                             5 or more measurements (0.6/0.6 pts)
with an error of ∆d = 0.005 mm.                      (0.2 pts)
                                                                  The average height is found to be havg = 82.4 mm with an error
                                                                  of ∆havg = 0.7 mm, and using (1), we get σ = 63.4 mN/m with
                                                                                    p
                                                                  an error of ∆σ = σ (∆havg /havg )2 + (∆d/d)2 = 1 mN/m.
                                                        — page 2 of 6 —
                                                values (0.3 pts)
                                                errors (0.4 pts)                   F                 1 dB 2                ∂w
                                                                            am =     = (|χg − χw |)         = (|χg − χw |)    .
                                                                                   m                2µ0 dz                 ∂z
   The measurements for the green needle were:
                                                                   Since the magnet is pushing the graphite at a 45 ◦ angle, the
                         i     h(mm)                                                    √
                                                                   force balance is am / 2 = ag . This let us express χg in terms
                         1     114
                                                                   of the measured quantities α and ∂w
                                                                                                    ∂z :
                         2     113
                                                                                                         √
                         3     116                                                                           2gα
                                                                                           χg = χw −     ∂w
                                                                                                                   .              (2)
                         4     112                                                                       ∂z
                         5     113
                                                                                                                           (0.6 pts)
                                  1 measurement (0.2/0.6 pts) Here we’ve been careful with the signs, since graphite must
                               2-4 measurements (0.4/0.6 pts) have a larger susceptibility in magnitude than water but it’s
                       5 or more measurements (0.6/0.6 pts) still negative. This concludes the necessary theoretical calcula-
                                                                   tions.
The average height is havg = 113.6 mm with an error ∆hmax =           In the first configuration with the equilateral triangle, fol-
0.7 mm. That gives σ = 67.0 mN/m, and an error of ∆σ =             lowing measurements for the distance from the wall were made:
1.5 mN/m.
                                                                                                i   l(mm)
                                                values (0.3 pts)                                1   12
                                                errors (0.4 pts)                                2   10
                                                                                                3   11
   The final expression for the surface tension is found by av-
                                                                                                4   10
eraging the results of the white and green needle. This yields
                                                                                                5   11
σ = (σq
      white + σgreen )/2 = 65.2 mN/m,                 (0.1 pts)
∆σ =      2
        ∆σwhite        2
                /2 + ∆σgreen /2 = 1.3 mN/m.           (0.1 pts)                                      1-2 measurement (0.3/0.5 pts)
                                                                                                    3-4 measurements (0.4/0.5 pts)
Part C. Susceptibility of graphite (4 points)                                                5 or more measurements (0.5/0.5 pts)
   Taking only 1 measurement of the diameter of the mag-
net is enough since the measurement results are all virtually this gives an average of l = 10.8 mm with an error of ∆l =
the same. The error of the result comes from the accuracy of 0.4 mm + 0.5 mm = 0.9 mm, where we have added the meas-
a ruler, taken to be 0.3 mm. The diameter of the magnet is         urement error from the ruler and the standard deviation from
measured to be d = 10.0 mm.                                        the tabulated data (we usually omit the ruler’s accuracy in the
                                                                case of repeat measurements, but that’s usually because the
                                               value (0.3 pts) ruler’s accuracy is much smaller than standard deviation).
                                                error (0.2 pts)    The corresponding surface slope can be read from the graph,
                                                                                                                  p
    In both configurations, the graphite will experience three but first we need to convert l to units of λ =       σ/(ρg) =
forces: gravity, normal force and magnetic force, all of them 2.58 mm, with ∆λ = 0.03 mm. Thus, l = (l/2.58 mm)λ = 4.2λ
being in balance, with the magnetic force being at an angle with ∆l = 0.4λ. From figure 7, we measure
45 ◦ with respect to the horizon. Purely under the force of                                  α = 2.4 × 10−3 rad.
gravity, the graphite would start accelerating with accelera-
                                                                                           ∆α = 1.8 × 10−3 rad
tion ag ≈ gα (where we have used small angle approximations)
along the water surface (normal force does not contribute to where the error was measured from the figure by looking at
this as it’s perpendicular to the surface). Since the angles are α(λ ± ∆λ). The error is big but this is to be expected due to
small, this translates to horizontal acceleration of the same      the exponential nature of the graphs.
magnitude. This is counteracted by the acceleration from the          To get a reading of the magnetic pressure gradient, we first
magnet, given by the formula                                       calculate the distance of the graphite from the surface of the
                        explaining the force balance (0.5 pts)     magnet. We see that the distance is that of the height of
                                                                   an equilateral triangle with side length d = 10 mm ± 0.3 mm.
                                                         — page 3 of 6 —
                                   √
The distance is then simply l1 =       3/2d = 8.7 mm ± 0.3 mm.         After correctly setting up the experimental equipment, the
From figure 8, we read the magnetic pressure gradient to be         zero off-set is measured to be V0 = 2 mV.               (0.5 pts)
∂z = 6.1 × 10 J/m ± 0.9 × 10 J/m .
∂w           5   4          5   4

   Finally, using equation (2), we find                             ii. (4 pts) Rearranging the expression for the magnetic field
                                                                    strength between the strips, B = B0 cosh(z/λ), we get
            χg = 6.4 × 10−8 m3 /kg ± 4 × 10−8 m3 /kg.
                                                                                          cosh−1 (B/B0 ) = z/λ.             (0.5 pts)
            reading the data from the graphs properly (0.2 pts)
                                     final value for χg (0.1 pts) We can measure z and V , and V can be converted into mag-
                                    error propagation (0.3 pts) netic field strength B by noting that the maximal field strength
                                                                                 1 mV = 30 mT is measured at V = E, and thus,
                                                                    Bmax = 3 V · 10 µT

   We go through the same calculations in the 2nd configura-
                                                                    we must have
tion to get a different estimate for χg . The measurements for
                                                                                                 V          V
2nd configuration are tabulated below                                                B = Bmax      = 30 mT · .                    (3)
                                                                                                 E          E
                           i   l(mm)                                                                                        (0.3 pts)
                           1   7                                    This relies on the fact that the magnetic field strength scales
                           2   8                                    linearly with voltage. To linearize the measured data, we need
                           3   8                                    to know B0 . This can be found by noting that cosh(0) = 1 and
                           4   6                                    so B0 = B(z = 0). This we can read from the measured data
                           5   7                                    to be B0 = 0.227 T.                                     (0.2 pts)

                                1-2 measurement (0.3/0.5 pts)
                                                                       Now note that we can plot cosh−1 (B/B0 ) against z to get
                               3-4 measurements (0.4/0.5 pts)
                                                                    a linear graph with slope 1/λ. The tabulated data is given
                        5 or more measurements (0.5/0.5 pts)
                                                                    below.
We find l = 7.2 mm, ∆l = 0.4 mm + 0.5 mm = 0.9 mm.                           z(cm)    V (mV)     B(mT)     cosh−1 (B/B0 )
This corresponds to l = 2.8λ ± 0.4 λ From figure 7, we read                  0        24         0.227     0.130
α = 1.7 × 10−2 rad ± 0.9 × 10−2 rad.                                         5        25         0.237     0.316
   In this case, a right-angled isosceles is formed. It’s easy to            10       27         0.256     0.513
see that the graphite is distance d/2 = 5 mm±0.15 mm from the                15       30         0.284     0.707
surface of the magnet. This gives the magnetic pressure gradi-               20       35         0.331     0.936
          ∂z = 4.6 × 10 J/m ± 0.4 × 10 J/m . This gives
ent to be ∂w           6   4          6   4
                                                                             25       44         0.416     1.225
the susceptibility to be χg = 6.0 × 10−8 kg/m3 ± 3 kg/m3 .                   30       52         0.492     1.418
            reading the data from the graphs properly (0.2 pts)              35       58         0.549     1.539
                                    final value for χg (0.1 pts)             40       71         0.672     1.757
                                    error propagation (0.3 pts)              45       85         0.804     1.946
                                                                             50       104        0.984     2.154
   Finally, we average the two results to get                                55       200        1.893     2.818

            χg = 6.2 × 10−8 kg/m3 ± 4 × 10−8 kg/m3 .                                        less than 3 measurements (0.0/0.4 pts)
                                                                                                3 - 11 measurements (0.2/0.4 pts)
                                          final answer (0.1 pts)                   correct number of measurements (0.4/0.4 pts)
                                                 error (0.1 pts)
                                                                                                             calculations (0.4 pts)
Part D. Relative permeability of ferromagnetic strip (9
points)                                                                It is important to note that on the graph, the line doesn’t
i. (1 pt) The voltage on the output leads of the battery holder need to pass through origin due to systematic errors affecting
can be measured to be E = 3.17 V, no uncertainty is needed. all the points equally. For example, the measured z = 0 doesn’t
(0.5 pts)                                                           coincide with the actual origin due to the physical dimensions
                                                                    of the magnet. Furthermore, the final point in the graph is not
                                                         — page 4 of 6 —
used for fitting since it deviates due to the over saturation effect.                            x(mm)      s(mm)      V (mV)    B(mT)
                                                           z                                     0          -18        18        0.170
                                                                                                 2          -16        29        0.274
                                                                                                 4          -14        41        0.388
                                                                                                 6          -12        43        0.407
                                                                                                 8          -10        44        0.416
                                                                                                 10         -8         46        0.435
                                                                                                 12         -6         48        0.454
                                                                                                 14         -4         50        0.473
                                                                                                 16         -2         52        0.492
                                                                                                 18         0          52        0.492
                                                                                                 20         2          51        0.483
                                                                                                 22         4          50        0.473
                                                                                                 24         6          49        0.464
                                                                                                 26         8          47        0.445
                                                                                                 28         10         46        0.435
                                                                                                 30         12         44        0.416
                                                                                                 32         14         40        0.379
                                                                                                 34         16         28        0.265
                                             z                                                   36         18         18        0.170

                                                                                                           less than 3 measurements (0.1/0.6 pts)
                                                               plotting (1.0 pts)                                 3 - 5 measurements (0.3/0.6 pts)
                                                                                                                  6 - 7 measurements (0.4/0.6 pts)
                                                                                                     correct number of measurements (0.6/0.6 pts)
   From the graph, we read the slope to be 1/λ = 0.0409 m−1 .
                                                                                                                                calculations (0.4 pts)
                                                                       (0.2 pts)
                                                                                       x is measured with respect to the first data point, s is with
The uncertainty can be estimated by looking at the spread
                                                                                    respect to the symmetry axis (found to be at x = 18 mm). The
of lines that can be reasonably expected to pass through the
                                                                                    graph for B vs s is given below.
points. This yields ∆(1/λ) = 0.000 72 m−1 .                            (0.2 pts)


                   2
   Now, µ = 2λ
             δh . We measure h, the width of the gap, with a
ruler to be h = 7.7 mm ± 0.3 mm. The error is found by noting
that the error of a ruler is half, or slightly less depending on
how good your eye is, of the distance between two neighbour-
ing ticks, 0.1 mm. Finally, we calculate µ = 57 000                    (0.4 pts)
with an error of



              s                    2               2
                           ∆(1/λ)                ∆h                                                                                plotting (0.6 pts)
     ∆µ = µ            2                 +                 = 3000.     (0.4 pts)
                            (1/λ)                 h
                                                                                       As can be seen, the magnetic field strength is uniform and
                                                                                    with small deviations up to ∼ 10 % over the width of the strip.
                                                                                    Outside the strip, the field strength starts dropping rapidly.
iii. (2 pts) The tabulated measurement data is given below.                                                                                 (0.4 pts)
The voltages are translated to teslas using equation (3).
                                                                          — page 5 of 6 —
iv. (2 pts) The main idea relies on the fact that magnetic                  points using the trapezoid rule,
field lines are conserved, or in other words the magnetic flux                                      Bi + Bi−1
through a closed surface is 0. This is equivalent to Gauss’ law.                      Φi = Φi−1 +             (zi − zi−1 )aeﬀ
                                                                                                        2
In the context of this problem, it implies that the flux entering                                   Bi + Bi−1
                                                                                           = Φi−1 +           ∆A = Φi−1 + ∆Φi ,
the gap must come from the decrease of the flux flowing along                                           2
the ferromagnetic strip. The flux flowing outside the strip will                                                                  (0.3 pts)
be negligible because of the high value of µ.                               where ∆A = (zi − zi−1 )aeﬀ = 5 cm · 28.7 mm = 0.001 44 m2 is
   Let the total flux along the strip be Φin , z-axis be along              the effective area of the last segment and ∆Φi = Bi +B
                                                                                                                                 2
                                                                                                                                   i−1
                                                                                                                                       ∆A
the strip, and x-axis be horizontal, perpendicular to z. Also               the flux through the corresponding surface. After that, the
denote the flux through the x − z plane intersecting the gap                magnetic field inside the ferromagnetic is simply found using
from z = 0 to z as Φz . The Gauss’ law can then be formulated (4) as Bin = Φaδin .
as                                                                The calculated data is given below alongside with the plot
                    Φin (z) − Φin (z = 0) = Φz .                     (4)    of Bin vs z.

                                                                              z(cm)    B(mT)      ∆Φ(µT · m2 )    Φ(µT · m2 )     Bin (T)
                                                              (0.5 pts)
Note that since the flux inside the ferromagnet drops exponen-                0        -          -               0
tially, and judging from the tabulated data, it’s reasonable to               5        0.232      0.334           0.334           0.041
say that Φin (z) ≫ Φin (z = 0).                               (0.1 pts)       10       0.246      0.354           0.688           0.085
We can approximate the magnetic field to be homogeneous                       15       0.27       0.389           1.077           0.133
throughout the cross-section of the ferromagnet (to very high                 20       0.308      0.444           1.521           0.188
accuracy, this can be verified using Ampère’s law).                Then       25       0.374      0.539           2.06            0.254
Φin (z) = aδBin (z), where a is the width of the ferromagnet,                 30       0.454      0.654           2.714           0.335
measured to be a = 30 mm ± 0.3 mm, and Bin (z) is the mag-                    35       0.521      0.75            3.464           0.428
netic field inside the ferromagnet.                           (0.1 pts)       40       0.61       0.878           4.342           0.536
                                                                              45       0.738      1.063           5.405           0.667
                                                                              50       0.894      1.287           6.692           0.826
   This means that if we calculate Φz , we can find Bin us-
                                                                              55       1.438      2.071           8.763           1.082
ing equation (4). To find Φz , we need to sum the magnetic
field over the z- and x-direction. In integral form, it looks like                                                   calculations (0.3 pts)
       Rz    R∞
Φz = 0 dz ′ −∞ dxB(x, z ′ ). We can simplify this with the in-
                  Rz
tegral Φz = aeﬀ 0 dz ′ B(z ′ ), where aeﬀ is the effective width
of the gap such that the area under the graph found in the
previous part is equal to B(z ′ )aeﬀ , where B(z ′ ) is the maximal
magnetic field in the gap found in part (ii).
   From an approximate plot shown below, we find aeﬀ =
0.955a = 28.7 mm.




                                                                                                                          plotting (0.3 pts)

                                                                               Since in the graph found in part (ii), the saturation cut-off
                                                                            happened at the last data point, we can use the corresponding
      Finding aeﬀ using a plot, or something equivalent (0.2 pts) value for Bin as an estimate for Bs . Then Bs ∼ 1.1 T.
                                Rz
   All that’s left is to find   0
                                     dz ′ B(z ′ ). This can be found from                                                         (0.2 pts)
the tabulated data found in part (ii) by summing over the data

                                                                 — page 6 of 6 —
