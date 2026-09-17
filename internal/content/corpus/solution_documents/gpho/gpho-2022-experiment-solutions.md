---
id: solution-document-gpho-2022-experiment-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2022_experiment_solutions.pdf
extraction_method: pdftotext-layout
mapped_problems: [gpho-2022-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2022_experiment_solutions.pdf."
---

COVER
                                                                                             GPhO
                                                                                             Dammam 2022


            The 4th Gulf Physics Olympiad — Experimental Competition Solutions
                                      Dammam, Saudi Arabia — March 15th 2022

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
When dealing with data points with their individual uncertainties coming from the measuring instrument (for the caliper, it’s
for example 0.2 mm), those should be added on top of the standard deviation of the mean in quadrature.
   For error propagation through equations, Pythagoran rule for adding errors in quadrature is used (alternatively, one could
use min-max but for lower accuracy). In general, when you have a variable y be a function of variables xi , i ∈ {1, . . . N } with
errors ∆xi , then the error of y is given by                v
                                                            uN 
                                                            uX ∂y 2
                                                       ∆y = t          ∆x2i .
                                                              i=1
                                                                  ∂x i



Penalising errors and accuracy
   • Any time the methods used in finding the errors is not specified or isn’t clear from the solution, all the marks for error
      analysis are to be deducted.

   • For most numerical values, the grading scheme specifies an interval for which the student is awarded full marks. If the
     numerical value is outside of the range, some points are deducted, depending on how far off the value is. In general, if
      the answers is off by ∆y from the true value and the full point interval half-width is ∆yv < ∆y, then the student gets a
      fraction of ∆yv /∆y of the full marks for the numerical value. This fraction starts from 1 when ∆y = ∆yv and decays to
      0 as the error tends to infinity.




                                                            — page 1 of 5 —
                          PROBLEM E1
                                                                                                 GPhO
                                                                                                 Dammam 2022


Problem E1. Cylinder in cylinder (20 points)                         distance from the centre is the radius of the magnet r = d/2.
Part A. Geometrical characteristics (5 points)               Hence, the distance between the markings a relates to r and R
                                                                                            p
1. (2 pts) We can find the total volume by using the caliper via Pythagoras theorem via r = R2 − a2 /4 or in other words,
to measure the base diameter 2R and the total height H of the                                         p
cylinder via                                                                                     d=       4R2 − a2 .           (0.6 pts)
                           V = πR2 H.                   (0.4 pts)

The values were measured to be
                    i    2R(mm)         H(mm)
                    1    25.2           30.4
                    2    25.0           30.5
                    3    25.3           30.5
                    3    25.1           30.4
                    3    25.3           30.5

                         1 diameter measurement (0.3/0.5 pts)
                        2 diameter measurements (0.4/0.5 pts)
               3 or more diameter measurements (0.5/0.5 pts)

                  1 or more height measurement (0.3/0.3 pts)

   Each measurement carries its own uncertainty of that of
                                                                                      Figure 1: Optics of the cylinder
a caliper ∆l = 0.2 mm. Based on this, we calculate R =
(12.6 ± 0.1) mm, H = (30.5 ± 0.2) mm and V = (15.2 ± 0.2) ml
                                                                        We make the following measurements for a:
                         value within [14.8 ml, 15.6 ml] (0.4 pts)
                                                   error (0.4 pts)                                i   a(mm)
2. (1 pt) The height is best measured using a caliper by either                                   1   22.2
making markings on the surface of the cylinder corresponding                                      2   22.5
to the perpendiculars of the ends of the magnet, or by meas-                                      3   21.8
uring it from far away. Either way, the goal is to remove the
                                                                                                             1 measurement (0.3/0.5 pts)
effects of parallax when measuring the height of the cylinder.
                                                                                                            2 measurements (0.4/0.5 pts)
The following measurements were made
                                                                                                 3 or more measurements (0.5/0.5 pts)
                           i    h(mm)
                           1    9.7                                  This yields a = (22.2 ± 0.3) mm such that d = (12.0 ± 0.7) mm.
                           2    9.5
                           3    9.4                                                         value within [11.0 mm, 13.0 mm] (0.3 pts)
                                                                                                                          error (0.2 pts)
                                      1 measurement (0.3/0.5 pts)
                                  2 measurements (0.4/0.5 pts)
                                                                     Part B. Mechanical characteristics (3 points)
                         3 or more measurements (0.5/0.5 pts)
                                                                     1. (2 pts) We can make a makeshift scale by attaching the
   The average height is found to be h = (9.5 ± 0.2) mm.             cylinder to a rubber thread and measuring how much it ex-
                                                                     tends. The force exerted by the thread is then equal to the
                        value within [9.1 mm, 10.0 mm] (0.3 pts)
                                                                     Archimedes force of the cylinder and proportional to τ (l/l0
                                                   error (0.2 pts)
                                                                     given in the problem statement.
3. (2 pts) A potential method would be to observe the light             Knowing the water density, it would satisfy us to measure
ray that barely touches the edge of the magnet,         (0.4 pts) the length of the attached thread when the cylinder is sub-
and make markings where the ray enters and exits the cylin- merged lw , when it’s not la and finally when it’s at rest (cylin-
der. This works, because the markings define a chord whose           der isn’t attached), l0 .                                 (0.3 pts)
                                                          — page 2 of 5 —
                            PROBLEM E1
                                                                                                   GPhO
                                                                                                   Dammam 2022


Using Archimedes’ law, the quantities then satisfy

               kτ (la /l0 ) = V ρcyl g,
              kτ (lw /l0 ) = V (ρcyl − ρw )g,                 (0.4 pts)



where k is a constant and the left hand side corresponds to the
tension force of the rubber threads. Thus,

                                 τ (la /l0 )
             ρcyl = ρw                             .          (0.2 pts)
                         τ (la /l0 ) − τ (lw /l0 )

   We proceed to make one set of measurements (as estim-
ating uncertainties isn’t necessary) and get l0 = 135 mm,
la = 303 mm, lw = 185 mm.                                     (0.6 pts)               Figure 2: Detailed optics of the cylinder
Thus, we calculate τ (la /l0 ) = 0.556, τ (lw /l0 ) = 0.232 and so
ρcyl = 1720 kg/m3 .                                                                  Carrying out the method or idea correctly (0.25 pts)
                                                                            From the figure, we work out from Snell’s law that sin α =
               value within 1620 kg/m3 , 1820 kg/m3 (0.3 pts)
                                                                           no sin β, but from right triangles sin β = r/R and sin α = r′ /R.
2. (0.5 pts) The total mass of the cylinder is simply found as             Hence, no = r′ /r = d′ /d.
mcyl = V ρcyl = 26.1 g.                                                               Stating and applying Snell’s law correctly (0.5 pts)

                                                       formula (0.3 pts)      Tabulated measurements of the apparent width are shown
                               value within [25.0 g, 27.1 g] (0.2 pts) below
                                                                                                        i    d′ (mm)
3. (0.5 pts) We can express the total mass of the cylinder as                                           1    18.3
a sum of the mass of the magnet and the glass surrounding the                                           2    18.5
magnet:                                                                                                 3    18.8
                                                                                                            3 or more measurements (0.3 pts)
          mcyl = hπr2 ρm + (HπR2 − hπr2 )ρg .                 (0.2 pts)
                                                                                                                           with units (0.2 pts)

Thus, glass’ density is                                                    Averaging, d′ = (18.5 ± 0.4) mm

                    ρcyl HR2 − ρm hr2                                                            average value of d with errors (0.25 pts)
             ρg =                     = 1280 kg/m3 .
                        HR2 − hr2                                          and so no = 1.54 with an associated error of ∆no = 0.09.

                                             formula (0.1 pts)                                              value within [1.50, 1.58] (0.25 pts)
                                                  
               value within 1130 kg/m3 , 1430 kg/m3 (0.2 pts)                                                                 error (0.25 pts)
                                                                           2. (1.5 pts) Constructing the optical system described in the
Part C. Optical properties (5 points)
                                                                           task statement, we make the following measurements
1. (2.5 pts) The most direct method would be to measure how
                                                                                                        i    L(mm)
much the magnet appears to be bigger than its actual width.
                                                                                                        1    62.7
                                                                                                        2    61.1
  Showing or stating the method or idea in text or graphically
                                                                                                        3    62.0
                                                               (0.5 pts)
                                                                                                        4    62.6
                                                                                                        5    62.2
   The optics of this is shown on figure 2. On the figure, r′
                                                                                                            3 or more measurements (0.3 pts)
is the apparent radius of the magnet when the cylinder is ob-
                                                                                                                           with units (0.2 pts)
served from far away. In practice, one could measure the ap-
parent diameter d′ = 2r′ using a caliper and a marker.                     Averaging, we find L = 62.1 mm with an error of ∆L = 0.5 mm.
                                                                 — page 3 of 5 —
                           PROBLEM E1
                                                                                                   GPhO
                                                                                                   Dammam 2022


            Value with units within [61.1 mm, 63.1 mm] (0.5 pts) we first offset the measured voltage V to remove the bias and
                                                  Error (0.5 pts) the contribution from the magnetic field. This corresponds to
                                                                       subtracting V1 due to the orientation of the sensor. Finally, we
3. (1 pt) Starting from the formula
                                                                   divide by a to get the magnetic field, i.e. Bx (x) = (V − V1 )/a.
              1       no − 1      nc d                                 The tabulated data is given below.
                   −                    − D = no ,
           L−D          D       nc − no
we find
                                                                        l(cm)     x(cm)     V (mV)      Bx (x)(µT)   Bx (x)−1/3 (µT−1/3 )
                                          −1
                                                                        30        30.5      2.5         11.6         0.442
                                 d
            nc = n0 1 −                        = 1.60.                25        25.5      3.0         16.8         0.390
                           D + 1 n0n0 −1
                              L−D − D
                                                                        22        22.5      3.5         22.1         0.357
  Starting from previous equation of n0 and showing the steps           20        20.5      4.2         29.4         0.324
              of algebraic manipulation to arrive at nc (0.7 pts)       19        19.5      4.7         34.7         0.307
                               value within [1.55, 1.65] (0.3 pts)      18        18.5      5.4         42.0         0.288
                                                                        17        17.5      6.2         50.4         0.271
Part D. Magnetic properties (7 points)
                                                                        16        16.5      7.0         58.8         0.257
1. (0.5 pts) We measure E = 3.15 V. Any value above 3.20 V
                                                                        15        15.5      8.3         72.5         0.240
or 3.00 V will give 0 points. Missing units: subtract 0.2 points.
                                                                        14        14.5      9.9         89.3         0.224
2. (1 pt) We measure V1 = 1.4 mV and V2 = −2.9 mV.
                                                                        13        13.5      12.3        115          0.206
(0.2 pts)
                                                                        12        12.5      15.4        147          0.189
                                                                        11        11.5      19.9        194          0.173
   (No points are awarded if only V1 or V2 are measured or
                                                                        10        10.5      26.2        260          0.156
voltages readings are incorrect. Reading is judged to be in-
                                                                        9         9.5       35.4        357          0.141
correct if the corresponding magnetic field (when calculated
                                                                        8         8.5       48.5        495          0.126
correctly) would be greater than 50 µT.)
                                                                        7         7.5       70.0        720          0.112
   The voltage is affected by the offset voltage and the Earth’s
                                                                        6         6.5       108         1120         0.096
magnetic field BEz .     The Earth’s magnetic field influences
                                                                        5         5.5       178         1850         0.081
the reading by a voltage offset VEz = BEz /a, where a is
a constant.     We know that if the battery voltage were to                 l is the distance from the face of the magnet and hence, to
be 3 V, then each millivolt is 10 µT. Our battery increases            get the distance from the centre of the magnet x, we need to
the scaling by a factor of E/3 V. In other words, to convert offset it by half of the thickness of the magnet h/2 = 0.5 cm.
from volts to microteslas, we multiply our voltage through by The table features an additional column that’s used in the next
a = 10 µT/V · E/3 V = 10.5 µT/V.                              subtask.
   Taking all this together, we have V1 = V0 + BEz /a and              For each voltage value until 10th data point:            (0.1 pts)
V2 = V0 − aBEz and so V0 = (V1 + V2 )/2,                   (0.2 pts) Datapoints at l < 4 cm are not counted
                                                                       For each calculated Bx value until 10th data point: (0.1 pts)
BEz = (V1 − V2 )a/2.                                       (0.1 pts)   Calculations at l < 4 cm are not counted
                                                                       For a reading taken at 4 cm ≤ l < 6 cm                   (0.1 pts)
Numerically we get V0 = −0.8 mV,                           (0.1 pts)   For a reading taken at 6 cm ≤ l < 8 cm                   (0.1 pts)
                                                                       For a reading taken at l > 25 cm                         (0.1 pts)
BEz = (V1 − V2 )a/2 = 23 µT.                               (0.4 pts)   For a reading taken at 25 cm ≥ l > 20 cm                 (0.1 pts)
                                                                       For a reading taken at 20 cm ≥ l > 15 cm                 (0.1 pts)
   For this magnetic field value, no points are given if its calcu-
lation has mistakes (i.e. it does not correspond to the reported            Marks are not given for obviously wrong voltage values and
voltage values). If a = 10.0 µT/V was used even though the             for Bx values which differ from correct values by more than
voltage was not 3.00 V, 0.2 point will be subtracted.                  20% plus 10 µT.
3. (2.5 pts) We measure the sensor voltage throughout the                   If offset is not subtracted, multiply the score for taken read-
full measurement range, from the end of the ruler at 30 cm up          ings by 0.5.
to when voltage reaches 300 mV. To convert to magnetic field,
                                                             — page 4 of 5 —
                             PROBLEM E1
                                                                                  GPhO
                                                                                  Dammam 2022


4. (2.5 pts)
   If the magnetic field is given by
                                        µ0 p
                             Bx (x) =         ,
                                        2π x3
we can linearize it in many different ways, but a convenient
way would be to consider Bx (x)−1/3 vs x as that maintains the
linear spacing of the data points. In that case,
                                 r
                          − 13     2π
                   Bx (x)      = 3      x = Ax,
                                   µ0 p

where the slope gives us p via p = 2π/(µ0 A3 ). We calculate
Bx (x)−1/3 and plot it, shown below.


   0.5
   0.45
   0.4
   0.35
   0.3
   0.25
   0.2
   0.15
   0.1
   0.05
     0
         0     5        10       15        20       25   30        35




   From the graph, we measure A = 0.0153 µT−1/3 cm−1 =
153 T−1 m−1 so
                              2π
                    p=              = 1.40 A m2 .
                             µ 0 A3

Suitably chosen quantities on axis (which makes the graph
linear)                                                       (0.5 pts)
For each data point up to the tenth, calculation of the value
for the vertical axis with correct plotting                   (0.1 pts)
If points are not marked on a plot, only half marks are given.
If Bx values are directly plotted, only half marks are given.
Finding the slope of the linear part of the graph     (0.3 pts)
Numerical calculation of p                                    (0.2 pts)


5. (0.5 pts) From the definition, magnetization is
                         p
                   J=         = 1.30 × 106 A m−1 .
                        πr2 h
Correct value 1.1 × 106 A m−1 J ≤ J ≤ 1.4 × 106 A m−1
(0.5 pts)




                                                                — page 5 of 5 —
