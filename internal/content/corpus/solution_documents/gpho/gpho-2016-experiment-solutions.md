---
id: solution-document-gpho-2016-experiment-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2016_experiment_solutions.pdf
extraction_method: pdftotext-layout
mapped_problems: [gpho-2016-e1, gpho-2016-e2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2016_experiment_solutions.pdf."
---

Problem E1. Rolling cylinder ( points)                                       h                 v1                 v2                vl
                                                                                    t1 (s)   (mm/s)    t2 (s)   (mm/s)   tl (s)   (mm/s)
                                                                           (mm)
Part A. Critical slopes (1 points)                                          2.6     64.8      1.54     64.5      1.55    388.2     1.55
We measure the board length L = 680 mm,                      (0.1 pts)
                                                                             3      15.2      6.6      15.2      6.6      91.2     6.58
its uncertainty ∆L = 1 mm.
                                                                            3.5      7.2      13.9      7.4      13.5     43.8     13.7
    Further we determine the steepest position of the board                  4      4.52      22.1     4.38      22.8    26.46     22.7
where the cylinder’s rolling stops when it is pushed down-
wards, and measure the diﬀerence H = hu − hl between the                    4.5     3.41      29.3     3.53      28.3     20.7     29.0
heights hu and hl of the upper and lower edges of the upper                  5      2.86      35.0     2.97      33.7    17.22     34.8
surface of the board. We find hl = 8 mm               (0.1 pts)
                                                                            5.5     2.27      44.1     2.31      43.3    13.56     44.2
and hu = 33 mm                                        (0.1 pts)
so that H = 25 mm. Finally, we calculate angles according to                 6      1.78      56.2     1.65      60.1    10.14     59.2
the formula α0 = arcsin H/L ≈ 2.1 ◦ ; the final result needs to
                                                                            6.5     1.51      66.2     1.35      74.1     8.46     70.9
be within 2.1 ◦ ± 0.2 ◦ .                             (0.1 pts)
We repeat measurements: find the critical positions of the                   7      1.35      74.1     1.02      98.0     7.02     85.5
slope and measure hu . Three or more measurements (0.1 pts)                 7.5     1.31      76.3
                                                                             8      1.21      82.6
    We do the same for the second critical angle: if the result             8.5     1.09      91.2
is within hu = 170 mm, and α2 ≈ 14.5 ◦ ; the final result needs
                                                                             9      0.98      102
to be within 14.5 ◦ ± 3 ◦ .                           (0.1 pts)
if three or more measurements were done.              (0.1 pts)             9.5     0.92      109
                                                                            10      0.84      119

    Error estimates: hl and L uncertainties are estimated as               10.5     0.78      128
1 mm or 0.5 mm.                                     (0.1 pts)                11       0.72     139
hu uncertainty when determining α0 is estimated in the range             As we can see, the rolling time for the first and second segments
from 1 mm to 2 mm, and when determining α2 — in the range                start departing at H = 65 mm, which gives us the critical slope
from 10 mm to 50 mm.                                (0.1 pts)            α1 = 6.2 ◦ .
This estimation can be done based on the standard deviation
                                                                         Grading: at least 10 plausible time values for the first seg-
of the repeated measurements.
                                                                         ment;                                                 (0.8 pts)
                                                                         If less than 10 time values are taken, no credit is given if the
   For small angles, in radians α ≈ H/L so that
                                                                         number of measurements is less than 3; each next plausible
                                                                         time value earns a partial credit.                    (0.1 pts)
                                                                         At least 10 speed values are correctly calculated;    (0.5 pts)
                        √(        )2       (        )2                   If less than 10 time values are taken, no credit is given if the
                             ∆H                ∆L
                 ∆α =                  +                 ,               number of measurements is less than 2; each next pair of cor-
                              H                 L
                                                                         rectly calculated speed value earns a partial credit. (0.1 pts)

                                                                         At least 6 plausible time values for the second segm.; (0.4 pts)
           √
and ∆H = ∆h2u + ∆2l , numerically ∆α1 ≈ 0.1 ◦ – 0.3 ◦ and                If less than 6 time values are taken, no credit is given if the
∆α2 ≈ 1 ◦ – 5 ◦ . If both calculations are made reasonably (it is        number of measurements is less than 3; each next plausible
also OK to apply addition of errors by modulus, instead of the           time value earns a partial credit.                     (0.1 pts)
Pythagorean rule, or upper-lower bound method) and without               At least 6 speed values are correctly calculated;      (0.2 pts)
mistakes                                              (0.1 pts)          If less than 6 time values are taken, no credit is given if the
                                                                         number of measurements is less than 2; each next pair of cor-
                                                                         rectly calculated speed value earns a partial credit. (0.1 pts)
Part B. Rolling speed (3 points)
We take first segment close to the upper edge of the board, and At least 6 plausible time values for the long segment; (0.4 pts)
second segment close to the lower end of the board, so that If less than 6 time values are taken, no credit is given if the
lt = 60 mm. Then the data will be as follows                    number of measurements is less than 3; each next plausible
                                                                time value earns a partial credit.                     (0.1 pts)
                                                               — page 1 of 8 —


At least 6 speed values are correctly calculated;        (0.2 pts) following law:
If less than 6 time values are taken, no credit is given if the                                F = kv + F0 ,
number of measurements is less than 2; each next pair of cor- where k = 390 g/s and F0 = 16.6 mN. Grading: At least 5
rectly calculated speed value earns a partial credit. (0.1 pts) correct data points in table for α ≤ α1                     (0.6 pts)
                                                                    (force calculated correctly, speeds copied from the vl column.
For the second segment, time values are taken for all those Partial credit: less than 3 data points — no credit; each next
values of H for which there is no significant time diﬀerence correctly copied speed value earns a partial credit; (0.1 pts)
between the first segment, and additionally, at time values for each next correctly calculated force value deserves a partial
at least two next values of H are measured.              (0.2 pts) credit.                                                  (0.1 pts)
                                                                    If speed values are copied from the column of v1 or v2 , 0.1 pts
For the long segment, speed values are calculated for all those if four or more values are copied.
values of H for which there is no significant time diﬀerence At least 5 correct data points in table for α > α1             (0.6 pts)
between the first segment.                               (0.2 pts)  (force calculated  correctly, speeds copied from the  v 1 column.
                                                                    Partial credit: less than 3 data points — no credit; each next
                 ◦       ◦
Value α1 = 6.2 ± 0.4 is reported.                        (0.2 pts) correctly copied speed value earns a partial credit; (0.1 pts)
If the reported value does not fall into this range, but falls into each next correctly calculated force value deserves a partial
α1 = 6.2 ◦ ± 0.7 ◦ , partial credit is given.            (0.1 pts) credit.                                                  (0.1 pts)
                                                                    If speed values are copied from a wrong column — no credit.
                                                                    Graph: axis marked and labelled correctly.              (0.1 pts)
Part C. Force as a function of speed (2.3 points)
                                                                    Scale on graph selected reasonably (the area of the smallest
What keeps the cylinder in motion is that component of gravity
                                                                    rectangle wich covers all the data is at least one third of the
force which is parallel to the board surface, Fm = mg sin α. In
                                                                    total graphical paper area.                             (0.1 pts)
those cases when the force depends significantly on time, we
need to take data of the first segment since at the beginning of
                                                                    At least 5 correctly marked data points on graph for α ≤ α1 —
rolling, the friction force is maximal.
    Rolling height      Rolling speed      Force applied            full credit.                                            (0.3 pts)
       h (mm)             v (mm/s)          (Fm ): (mN)             Partial  credit: less than 3  data points — no credit; each  next
                                                                    correctly marked data point earns a partial credit; (0.1 pts)
          2.6                1.55              16.3
                                                                    At least 5 correctly marked data points on graph for α > α1 —
           3                 6.58              18.6                 full credit.                                            (0.3 pts)
                                                                    Partial credit: less than 3 data points — no credit; each next
          3.5                13.7              22.0
                                                                    correctly marked data point earns a partial credit; (0.1 pts)
           4                 22.7              25.1
        4.5               29.0               28.2                  Correctly deduced functional dependence
                                                                   F = kv + F0 ;                                          (0.1 pts)
         5                34.8               31.4                  k = 390 ± 40 g/s;                                      (0.1 pts)
        5.5               44.2               34.6                  F0 = 16.6 ± 1 mN.                                      (0.1 pts)

         6                56.2               37.7
                                                               Part D. Mass of liquid (0.7 points)
        6.5               66.2              40.8               At the critical angle α2 , all the liquid will roll up
                                                               and provide strongest resistance against rolling
         7                74.1              44.0
                                                               when the line conecting the middle point of
        7.5               76.3              47.1               the liquid and the centre of the cylinder form
         8                82.6              50.2               a vertical line, see figure. At larger angles,
                                                               this position does not provide enough torque
        8.5               91.2              53.4               to stop downwards acceleration. Then, the centre of mass of
         9                102               56.5               the whole system must lay directly above the point P , there-
                                                               fore ml b = (M − ml )a, where ml is the mass of liquid. Since
        9.5               109               59.7
                                                               a = R sin α and b = R − a (we neglect the thickness of the
        10                119               62.8               layer of liquid), we obtain ml (1 − sin α) = (M − ml ) sin α,
                                                               hence ml = M sin α ≈ 12.5 g. Grading: realizing that the
       10.5               128               66.0
                                                               ratio ml /M is related to the critical angle α2 .      (0.3 pts)
        11                139               69.1               Obtaining quality ml = M sin α ≈ 12.5 g.               (0.2 pts)
Based on these data, we build a graph, see next page. As Correct numerical calculation.                               (0.2 pts)
one can see, the data lie on a line, which is described by the
                                                          — page 2 of 8 —


Graph: Fm versus v




                     — page 3 of 8 —


Problem E2. Tungsten Filament (13 points)                                  resistance is directly measured, no more than 0.5 points overall:
Part A. Filament diameter (1.5 points)                                     0.3 pts for the answer if it is within 0.8 ± 0.4 Ω, and 0.2 pts for
The sketch the measurement setup:                                          the uncertainty if it is stated as either 0.5 Ω or 0.6 Ω.
    Screen as far as possible                                              Thus, we need to pass a current through the bulb and measure
                                                                           the voltage.                                             (0.1 pts)
                                                                   Laser
                                              Filament in focus
y
                                                                           The current needs to be small, otherwise we shall heat the
                                                                           filament.                                        (0.2 pts)
                            x
                                                                           To get the smallest possible current we use a single 1.5 V bat-
                                                              (0.2 pts)    tery                                                 (0.1 pts)
                                                                           in series with the rheostat.                         (0.1 pts)
We focus the laser to the filament, holding the screen close to
the filament during the adjustments helps focusing. For theWe can measure accurately the voltage on the bulb, but the
measurements we place the screen perpendicular to the beam problem is the current, because the ammeter is not ideal. If we
and reasonably far back (x ≥ 50 cm) to get the maxima spaced
                                                           use it in the “mA”-range, we cannot take account its internal
out.                                                       resistance, if we use it in 10A-range, the current measurement
                                                     (0.2 pts)
Partial credit if 30 cm ≤ x < 50 cm.                       error will be large. So, we need to use the multimeter as a
                                                     (0.1 pts)
                                                           voltmeter.                                            (0.1 pts)
We measure the distance between two maxima or two minima. Thus, we use the circuit as shown below.               (0.1 pts)
To get more accurate measurement we choose maxima that are
far apart (n ≥ 5).                              (0.2 pts)                                   2V range
Partial credit if 3 ≤ n < 5.                    (0.1 pts)                               V

Formula for calculating diameter d = nλx
                                      y .                     (0.2 pts)                                               0.2V range

                                                                                        ∼ 1.5V
Most of the uncertainty in this case is due to the fact the diﬀrac-                                            V
tion pattern is fuzzy. To estimate the uncertainty we should
perform repeated measurements (three or more).
  n       x          y      d = nλx                                 The resistance of the rheostat can be measured directly, or us-
                                  y
                                                                    ing current/voltage measurements, Rr = 25.3 Ω        (0.1 pts)
  10 909 mm 131 mm 45.1 µm
                                                                    ∆Rr = 0.7 Ω                                          (0.1 pts)
  7 905 mm 89 mm            46.3 µm
                                                                    Here and in what follows only reasonable results are accepted.
  7 907 mm 87 mm            47.4 µm
                                                                    Measurement results: Ur = 1.483 V                    (0.1 pts)
                                                         (0.3 pts)
                                                                    Ub = 45.0 mV                                         (0.1 pts)
(Each line in table up to 3rd earns 0.1 pts.)
                                                                    ∆Ur = 0.012 V, and ∆Ub = 0.5 mV                      (0.1 pts)
Filament diameter d and its uncertainty:

                                d = 46.3 µm                        Formula for filament resistance R = Ub Rr /Ur                   (0.1 pts)
                                                                   Formula√ for filament resistance uncertainty
                                                                              (     )2 (       )2 (        )2
For |d − 46.3 µm| ≤ 2 µm,                                (0.2 pts) ∆R = R       ∆Ur
                                                                                      +    ∆Ub
                                                                                                  +   ∆Rr
                                                                                                                                   (0.1 pts)
                                                                                 Ur         Ub         Rr
partial credit if 2 µm < |d − 46.3 µm| ≤ 5 µm,           (0.1 pts)                                     2
                                                                   Formula for filament length l = Rd4ρ25
                                                                                                         π
                                                                                                                                   (0.1 pts)
                                                                   Formula√(for filament length uncertainty
Uncertainty is dominated by the uncertainty of y, ∆d ≈ d ∆x   x ≈                )     ( ∆d )2
                                                                             ∆R 2
1.2 µm. Reasonably estimated ∆y,                         (0.1 pts) ∆l = l     R     +2 d                                           (0.1 pts)
correct calculation of ∆d                                (0.1 pts) Filament resistance R and its uncertainty:
                                                                   R = 0.77 Ω                                                      (0.1 pts)
Part B. Filament’s resistance (2 points)
                                                                   ±0.03 Ω                                                         (0.1 pts)
The problem is that with this multimeter we cannot accurately
measure the resistance of the filament directly when the knob is Filament length l and its uncertainty:
turned to the resistance measurement position, the resistance l = 23 mm                                                            (0.1 pts)
is too small for that. There are two issues: first, the multimeter
is not accurate enough ±0.5% + 0.5Ω; second, the internal res- ±2 mm                                                               (0.1 pts)
istance can be in the same order of magnitude. If the filament’s
                                                                  — page 4 of 8 —


Part C. Current–voltage curve (2.5 points)                          Partial credit if 2 measurements                       (0.05 pts)
Now we connect the bulb to the battery via rheostat as a po-
tentiometer, i.e. according to the diagram below. Only that         Formula for filament temperature expressed in terms of the
way will we be able to cover the whole range of voltages from       current Ilast and voltage Ulast at which the tungsten filament
0 V to 12 V.                                           (0.2 pts)    broke:                         (         )
If we connect the rheostat in series, we’ll miss low voltage val-                                     Ulast
                                                                                           T =T
ues (unless we switch the power supply to a battery).                                                Ilast R
                                                                                                                           (0.2 pts)
                                                  Multimeter        Correctly calculated temperature T = 3190 K            (0.1 pts)
                                      V
                                                                    Credit is given if the result remains between 3000 K to 3700 K.
                                             V                          Graph is given at Pg. 7. Grading of the graph: axes marked
   ∼ 12V                              COM                           with scales and units, and labelled correctly.         (0.1 pts)
                                                   10A range        Scale is chosen appropriately (graph covers at least one third
                                             A
                                                                    of the graphical paper area).                          (0.1 pts)
                                      10A                           Data correctly carried over to the graph.              (0.3 pts)
                                                                    Partial credit: one clear mistake: 0.2 points, two clear mis-
Usable correctly drawn circuit (even if the rheostat is connec-
                                                                    takes: 0.1 points; if some points from the table are not copied,
ted in series) deserves credit.                      (0.2 pts)
                                                                    as long as there are 4 data points in each of the four ranges
                                                                    given above, no penalty. If this condition is not satisfied, sub-
    If we leave ammeter connected during voltage measure-
                                                                    tract 0.1 points for each point which was not copied until no
ments, the COM terminal must be connected to the bulb,
                                                                    marks remains for the graph.
because voltage drop on the ammeter is not negligible. Credit
                                                                    Curve connecting the points is drawn.                  (0.1 pts)
is given for any circuit which does not neglect the internal
                                                                    The drawn curve goes through origin.                   (0.1 pts)
resistance of the ammeter.                          (0.3 pts)

                                                                    Part D. Emissivity (3.5 points)
   U         I         U          I         U          I

 100 mV 100 mA 1000 mV 230 mA 5500 mV 540 mA                            To verify the prediction we should build a plot of k versus
                                                                    T which should be constant. We could alternatively plot P
 200 mV 140 mA 1500 mV 280 mA 6000 mV 560 mA
                                                                    versus T 4 which would be linear or we could also plot P versus
 300 mV 150 mA 2000 mV 320 mA 6500 mV 590 mA                        T in logarithmic scale and measure the slope, these are the cor-
 400 mV 150 mA 2500 mV 360 mA 7000 mV 610 mA                        rect options (but second and third options make the follow-up
                                                                    questions somewhat harder to answer).                 (0.5 pts)
 500 mV 170 mA 3000 mV 390 mA 7500 mV 630 mA
                                                                                                                U
 600 mV 180 mA 3500 mV 430 mA 8000 mV 620 mA                        We can calculate temperature from T = T ( IR  )         (0.2 pts)
                                                                                                           UI
                                                                    We can calculate emissivity from k = πdlσT 4            (0.3 pts)
 700 mV 200 mA 4000 mV 460 mA 8300 mV 600 mA
 800 mV 200 mA 4500 mV 490 mA                                       Calculated data (you don’t have to fill the entire table):
 900 mV 220 mA 5000 mV 510 mA                                                T      k       T        k       T        k
At least 4 correct measurements below 1 V.          (0.2 pts)
                                                                         380 K    2.52   1245 K    0.50   2531 K    0.38
Partial credit if 3 measurements                    (0.1 pts)
Partial credit if 2 measurements                  (0.05 pts)             496 K    2.43   1488 K    0.45   2633 K    0.37
(Final score for this task is rounded up to a single decimal             648 K    1.34   1695 K    0.41   2691 K    0.39
digit.)
At least 4 correct measurements for 1 V ≤ U < 3 V (0.2 pts)              823 K    0.69   1852 K    0.40   2777 K    0.38
Partial credit if 3 measurements                    (0.1 pts)            893 K    0.70   2016 K    0.37   2855 K    0.37
Partial credit if 2 measurements                  (0.05 pts)
                                                                         993 K    0.59   2112 K    0.40   3033 K    0.31
At least 4 correct measurements for 3 V ≤ U ≤ 5 V (0.2 pts)              1035 K   0.64   2230 K    0.39   3191 K    0.25
Partial credit if 3 measurements                  (0.1 pts)
                                                                         1160 K   0.47   2330 K    0.39
Partial credit if 2 measurements                 (0.05 pts)
                                                                      1182 K 0.53 2455 K 0.37
At least 4 correct measurements above 5 V              (0.2 pts) The full credit (0.6 pts) for the table breaks down as follows:
Partial credit if 3 measurements                       (0.1 pts) At least 4 correct data points below 1000 K.         (0.2 pts)
                                                           — page 5 of 8 —


Partial credit if 3 data points                        (0.1 pts)
Partial credit if 2 data points                      (0.05 pts) Part E. Specific heat capacity of tungsten (3.5 points)
(Final score for this task is rounded up to a single decimal
digit.)                                                               We can measure how much energy it took to break the
At least 4 correctly calculated data points between 1000 K and filament by connecting the bulb to the capacitor charged to a
2000 K                                                 (0.2 pts) high voltage. By measuring the voltage on the capacitor before
Partial credit if 3 data points                        (0.1 pts) and after the process we can calculate the energy. (0.5 pts)
Partial credit if 2 data points                      (0.05 pts)
                                                                      To get better accuracy we must make the radiated power
At least 4 correct data points above 2000 K            (0.2 pts) as low as possible, that means we have to break the filament
Partial credit if 3 data points                        (0.1 pts) as fast as possible, that means we must charge the capacitor to
Partial credit if 2 data points                      (0.05 pts) highest possible voltage. For using the highest possible voltage
                                                                  of 15 V.                                            (0.3 pts)
    Graph is given at Pg. 8. Grading of the graph: axes marked
with scales and units, and labelled correctly.         (0.1 pts)
Scale is chosen appropriately (graph covers at least one third
of the graphical paper area).                          (0.1 pts)
Data correctly carried over to the graph.              (0.3 pts) ∼ 3V
                                                                                  +          +
Partial credit: one clear mistake: 0.2 points, two clear mis-
takes: 0.1 points; if some points from the table are not copied,
                                                                  ∼ 12V                                           V 20V range
as long as there are 4 data points in each of the four ranges
given above, no penalty. If this condition is not satisfied, sub-
tract 0.1 points for each point which was not copied until no
marks remains for the graph.                                                                                          (0.2 pts)
Curve connecting the points is drawn.                  (0.1 pts)                                       (U 2 −U 2 )C
Range of constant k is shown.                          (0.1 pts)      Formula for quantity of heat Q = 1 2 2          (0.1 pts)
At small temperatures, k is larger.                    (0.1 pts)  U 1 = 15.00 V                                       (0.1 pts)
                                                                  U2 = 14.27 V                                        (0.1 pts)
    We can see that the emissivity in more or less constant in
the middle of the graph 1350 K < T < 3000 K The lower limit         Quantity of heat Q = 0.5 J                        (0.3 pts)
of this range is 1350 ± 250 K                         (0.2 pts)
Partial credit for results within the extended range of             We cannot perform (many) repeated measurements because
1350 ± 350 K.                                         (0.1 pts) we have only few bulbs.
The upper limit is either the breaking temperature, or a value      For average specific heat c, measured quantities and calcu-
larger than 2900 K.                                   (0.1 pts) lations:
                                                                    We use the breaking temperature T from previous part.
                                                                                 ·Q
                                                                    c = πd2 lD(T4−298.15                              (0.3 pts)
    The emissivity k in that range k = 0.4 Answers in the range                          K)
0.3 to 0.5 give full credit.                          (0.3 pts)
                                                                               J
Partial credit for results from 0.25 to 0.55          (0.2 pts)       c = 187 Kkg                                      (0.2 pts)
                                                                                     J          J
and from 0.2 to 0.65.                                 (0.1 pts)    Results from 100 Kkg to 300 Kkg  are accepted, results within
                                                                                                  J           J
                                                                   the extended range, from 60 Kkg    to 500 Kkg  give a partial
    From the plot we can see that prediction fails when T <        credit.                                             (0.1 pts)
1350 K (the value stated above). Based on the graph on Pg. 8,
one can say that it fails also at very high temperatures when          We know the amount of energy that was taken from the
T > 3000 K, but this is not always so and depends on how fast      capacitor fairly accurately.                            (0.2 pts)
the measurements are taken. In this case the measurements          Indeed, the magnitude of relative uncertainty that is caused
were taken quite slowly and the resistance of the filament grew    by filament dimensions d is about 15% and the magnitude of
at the very end because tungsten deposited itself to the inside    relative uncertainty that is caused from the measurement of
of the glass.                                                      breaking temperature T is around 10%.
    We can see that in the low temperatures it appears as if           The largest source of error is from the amount of heat radi-
that k > 1. That is because in these lower temperatures our        ated Qr away before the filament breaks.                (0.5 pts)
assumption that heat is transferred mainly by radiation fails      We can estimate its value as follows. When we connect the
and we can’t neglect heat transfer by convection and conduc-       bulb to the capacitor, the initial current is the largest, but it
tion.                                                  (0.5 pts)   drops very fast as the filament heats up and its resistance grows.
                                                        — page 6 of 8 —


That means most of the time is spent so that the filament is                                                     (0.3 pts)
hot and has high resistance. Because the voltage drop on the Any reasonable estimation slightly departing from what is given
capacitor was small we can estimate discharge time from      above gives full credit. Power radiated away during that time
                                                             is estimated as Qr ∼ tUlast Ilast .                 (0.3 pts)
            C∆U      C∆U Rlast    C∆U Ulast                  which  numerically  gives Qr  ≈ 0.15 J              (0.1   pts)
        t∼        ∼             ∼            ≈ 30 ms         which is 30% of final result.
            Ilast        U2         U I
                                     2 last




                                                      — page 7 of 8 —


— page 8 of 8 —
