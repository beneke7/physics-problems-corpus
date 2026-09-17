---
id: solution-document-ipho-2012-e-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2012_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2012-e-qe1-2, ipho-2012-e-qe1, ipho-2012-e-qe2-4, ipho-2012-e-qe2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2012_E_S.pdf."
---

Problem E1. The magnetic permeability of water is essentially unperturbed; connecting the respective points on
(10 points)                                    the graph, we obtain a line corresponding to a flat water sur-
Part A. Qualitative shape of the water surface (1 points)          face — the red line. Using these two extreme data points we
                                                                                                                   74.9−11.5
Observing reflections from the water surface (in particular, can also easily calculate the angle α0 = arctan 90−10 ≈ 38◦ .
those of straight lines, such as the edge of a sheet of paper),
it is easy to see that the profile has one minimum and has a
relatively flat bottom, ie. the correct answer is “Option D” (full
marks are given also for Option B). This profile implies that
water is pushed away from the magnet, which means µ < 1
(recall that ferromagnets with µ > 1 are pulled).
Part B. Exact shape of the water surface (7 points)
i. (1.6 pts) The height of the spot on the screen y is tabulated
below as a function of the horizontal position x of the caliper.
Note that the values of y in millimetres can be rounded to in-
tegers (this series of measurements aimed as high as possible
precision).
x (mm) 10          15     20     25      30    32     34    36
y (mm) 11.5 15.6 19.8 24.3 30.2 33.2 37.2 40.5
x (mm) 38          40     42     44      46    48     50    52
y (mm) 42.2 41.4 40.3 40.3 40.8                42    43.2 44.4
x (mm) 54          56     58     60      62    64     66    68     iv. (1.4 pts) For faster calculations, y − y0 − (x − x0 ) tan α0
y (mm) 45.3 45.8 45.4 44.4 43.6 46.2                  50   53.6 (appearing in the formula given) can be read from the previous
x (mm) 70          72     74     76      78    80     85    90     graph as the distance between red and blue line; the red line
y (mm) 56.7 59.5 61.6 63.5 65.3                67    70.9 74.9     is given by equation y = y + (x − x ) tan α . One can also
                                                                                            r      0           0       0
ii. (0.7 pts)                                                        precalculate 21 cos2 α0 ≈ 0.31. The calculations lead to the fol-
                                                                     lowing table (with z = tan β · 105 ; as mentioned above, during
                                                                     the competition, lesser precision with two significant numbers
                                                                     is sufficient).




     On this graph, the data of to two different water levels are
                                                                     x (mm) 10         15     20         25    30     32     34      36
depicted; blue curve corresponds to a water depth of ca 2 mm
                                                                        z     0        10     27         66    204    303   473     591
(data given in the table above); the violet one — to 1 mm.
                                                                     x (mm) 38         40     42         44    46     48     50      52
iii. (0.5 pts) If the water surface were flat, the dependence of x
                                                                        z   597       428    239        128     53    26      0     -26
on y would be linear, and the tangent of the angle α0 would be
                    ∆y                                               x (mm) 54         56     58         60    62     64     66      68
given by tan α0 = ∆x   , where ∆x is a horizontal displacement of
                                                                        z    -72     -145   -278       -449   -606   -536   -388   -254
the pointer, and ∆y — the respective displacement of the spot
                                                                     x (mm) 70         72     74         76    78     80     85      90
height. For the extreme positions of the pointer, the beam hits
                                                                        z   -154      -74    -40        -20     -6     2     -2      0
the water surface so far from the magnet that there, the surface
                                                          — page 1 of 4 —
v. (1.6 pts) The water height can be obtained as the integral        Similarly to the previous figure, blue curve corresponds to
      R
h = tan βdx. Thus, we calculate the water height row-by- a water depth of ca 2 mm, (data given in the table above), and
row, by adding to the height in the previous row the product the violet one — to 1 mm.
of the horizontal displacement xi+1 − xi with the average slope      The position of the magnet can be found by measuring the
1
2 (tan  β i+1  + tan β i ).                                      caliper (find the positions when the laser beam hits the edges of
            x (mm) 10 15 20 25 30 32 34 36                       the magnet and determine the distance between these positions
           −h (µm) 0        0   1    4 10 15 23 34               — the result is ca 24 mm), and using the symmetry: magnet
            x (mm) 38 40 42 44 46 48 50 52                       is placed symmetrically with respect to the surface elevation
           −h (µm) 46 56 63 66 68 69 69 69                       curve.
            x (mm) 54 56 58 60 62 64 66 68                       Part C. Magnetic permeability (2 points)
           −h (µm) 68 66 61 54 44 32 23 17                       Water surface takes an equipotential shape; for a unit volume of
            x (mm) 70 72 74 76 78 80 85 90                       water, the potential energy associated with the magnetic inter-
                                                                            B2
           −h (µm) 12 10 9           8    8   8     8    8       action is 2µ0
                                                                               (µ−1 −1) ≈ B 2 1−µ
                                                                                              2µ0 ; the potential energy associated
                                                                 with the Earth’s gravity is ρgh. At the water surface, the sum
Note that the water level height at the end of the table should
                                                                 of those two needs to be constant; for a point at unperturbed
be also 0 (this corresponds also to an unperturbed region); the
                                                                 surface, this expression equals to zero, so B 2 µ−12µ0 + ρgh = 0
non-zero result is explained by the measurement uncertainties.                                    2
                                                                 and hence, µ − 1 = 2µ0 ρgh/B . Here, h = 120 µm stands for
One can improve the result by subtracting from h a linear trend
               mm                                                the depth of the water surface at the axis of the magnet; note
8 µm · x−1080 mm .                                               that we have compensated the cumulative error as described at
    If the water level above the magnet is 1 mm, the water level
                                                                 the end of the previous task and obtained h as the difference
descends below its unperturbed level at the axis of the magnet
                                                                 between the depth at the magnet’s axis (121 µm) and the half-
by ca 120 µm.
                                                                 depth at the right-hand-side of the graph (1 µm). Putting in
vi. (1 pt)
                                                                 the numbers, we obtain µ − 1 = −1.2 × 10−5 .




                                                         — page 2 of 4 —
Problem E2. Nonlinear Black Box (10 points)                           • When the voltage on the black box is Vmax , the current
Part A. Circuit without inductance (7 points)                           through the nonlinear element is I0 . Switching the cur-
It is possible to make all the measurements needed for this             rent source off, we will have the capacitor discharging
problem with a single circuit as shown in the figure. While the         with the same current.
current source is switched on, we are charging the capacitor in
the black box, until the current I(Vmax ) through the nonlinear                              C0 = −I0 /V̇↓ (V = Vmax )
element equals to the output current I0 of the current source.
Vmax = 540 ± 40 mVs varies from one experimental setup to an-
other. When the current source is switched off or disconnected,       • We can also measure the capacitance for any intermediate
the capacitor will discharge through the nonlinear element.             voltage as in A-iv.
               Multimeter
                IN      OUT                GND                    iii. (2.2 pts) If we neglect the nonlinearity of the capacitor,
                                                                  there are (at least) two ways to obtain the current–voltage char-
                                                                  acteristic of the nonlinear element in the black box.

                                                                      • Applying Kirchhoff’s I law to the charging capacitor,

                                                                                              I(V ) = Ic − C0 V̇↑ (V ).
 Current source                                   Black box
   − +        Switch                Switch
                  O                   O                                   An I(V ) characteristic obtained by charging the capacitor
                  I X               X I                                   is shown on the following figure.


                                                                      • Applying Kirchhoff I law to the discharging capacitor,
i. (1 pt) During charging of the capacitor from V = 0 to
V = Vmax we note that the output of the current source is con-                                 I(V ) = −C0 V̇↓ (V ).
stant (I0 = 6.0 mA) close to the precision of the multimeter.
ii. (1.2 pts) Using the definition of differential capacitance,
we can calculate the current through the capacitor in the black
box from the time derivative of the voltage on the black box.                   6
                                                                                    Part A
                     dQ   dQ dV                                                     Part B
                Ic =    =       = C(V )V̇                                       5
                     dt   dV dt
There are several ways to determine the capacitance used in
                                                                                4
the black box based on chosen voltage.
   • When the voltage on the black box is close to zero, the
                                                                       I (mA)   3
     current through the nonlinear element is also close to
     zero, because I(V = 0) = 0. After switching the current
                                                                                2
     source on, most of the input current I0 will at first go
     through the capacitor.
                                                                                1

                        C0 = I0 /V̇↑ (V = 0)
                                                                                0
     This can be measured more precisely after first reversing        0         0.1      0.2       0.3   0.4      0.5
                                                                                               V (V)
     the polarity of the current source and charging the capa-
     citor backwards, because the multimeter does not display iv. (2.6 pts) In order to obtain the differential capacitance,
     derivatives when they change sharply (as in few moments we solve a system of linear equations by eliminating I(V ):
     after switching the current source on).
     Example measurements taken this way follow.
                                                                     (
                                                                        I0 = V˙↑ C(V ) + I(V )                   I0
                                                                                                   =⇒ C(V ) =          .
                 V↑ (0) (mV/s) 3.51 3.32 3.55                           I(V ) = −V˙↓ C(V );                   V↑ − V˙↓
                                                                                                               ˙
                    C0 (F)       1.71      1.81    1.69
                                                                  Therefore we need to take measurements during both charging
                             C0 = 1.74 F                          and discharging the capacitor in the black box at the same
                                                                  voltages. A graph of measurement results follows.
                                                          — page 3 of 4 —
                                                             Part B. Circuit with inductance (3 points)
         2.1
                                                             Measuring and plotting the current–voltage characteristic of
        2.05                                                 the nonlinear element in the same way as in part A-iii, we
                                                             obtain a graph that differs only in the negative differential res-
          2
                                                             istance (I ′ (V ) < 0) region, in our case 70 mV < V < 330 mV.
        1.95
                                                             This is the region where, when we look at small-signal oscil-
                                                             lations, the nonlinear element behaves as a negative-valued
C (F)    1.9                                                 Ohmic resistance. After enabling the inductance we have a
                                                             LC circuit whose oscillations are amplified (instead of being
        1.85
                                                             dampened) by the negative   q differential resistance. Because the
                                                                                             1
         1.8                                                 resonant frequency ω = LC         p
                                                                                                 ∼ 30 MHz (with Cp being the
        1.75
                                                             capacitance of the nonlinear element) is high, we actually meas-
                                                             ure the average current through the nonlinear element, while
         1.7
               0   0.1   0.2       0.3   0.4   0.5
                                                             the real current oscillates all over the region of negative differ-
                               V (V)                         ential resistance.




                                                     — page 4 of 4 —
