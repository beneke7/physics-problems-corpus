---
id: solution-document-gpho-2017-experiment-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2017_experiment_solutions.pdf
extraction_method: pdftotext-layout
mapped_problems: [gpho-2017-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2017_experiment_solutions.pdf."
---

Problem E1. Electric guitar (20 points)

Part A. String dimensions (2 points)


For length l1 , directly measured quantities and calculations:

                                                            b           c
                                            a                                d     e


                                                           a = 31 mm
                                                           b = 504 mm
                                                           c = 21 mm
                                                           d = 83 mm
                                                           e = 35 mm

Length l1 and its uncertainty:

                                          l1 = a + b + c + d + e = 674 mm    [0.5 p]
The error of a, b, c, d and e can be roughly estimated to be 2 mm, because the roundness of the supports hinders any more
precise measurement. These errors are random and not correlated, thus the uncertainty
                                                 √
                                          ∆l1 = 5 × (2 mm)2 ≈ 4 mm.       [0.5 p]

For string diameter d, directly measured quantities and calculations:
in the figure the diameter dfig = 19.5 ± 1.0 mm (the error is combined from the accuracy of the measuring tape and the
roughness of the string’s surface).

String diameter d and its uncertainty:
d = dfig /100 = 0.195 ± 0.010 mm.      [0.5 p for the value and 0.5 p for the uncertainty]




                                                        — page 1 of 10 —
Part B. Resistivity (3 points)

Draw measurement circuit(s):
The string should be heated as little as possible, thus we should use as big a resistor as possible to limit the current. The
most precise measurement can be done by connecting a 1 kΩ resistor and an ammeter between A and B and a voltmeter
between the saddles (with the leads as close to the saddles as possible).


For string resistivity ρ, directly measured quantities, calculations and multimeter settings:
multimeters’ ranges: AX-100 at 20 mA, AX-MS811 at DCV.


                                              I = 4.94 mA
                                             U = 15.8 mV
                                            ∆I = 1.5%I + 3 × 0.01 mA ≈ 0.10 mA
                                            ∆U = 0.7%U + 3 × 0.1 mV ≈ 0.4 mV
                                              l = 504 ± 2 mm    (from the previous part)

String resistivity ρ and its uncertainty:


                                U
                             R=
                                I
                                πd2
                            A=
                                  4
                                RA     πU d2
                            ρ=      =        ≈ 1.89 × 10−4 Ω · mm = 1.89 × 10−7 Ω · m
                                  l
                                  √(    4lI
                                         )2 (       )2 ( )2 (          )2
                                     ∆U         2∆d        ∆l       ∆I
                           ∆ρ = ρ           +          +        +          ≈ 0.17 × 10−7 Ω · m
                                      U          d          l        I

[0.5 p for using the least current possible (largest resistor), 1 p for connecting the voltmeter as close to the saddles as possible
(a correct 4-point measurement), 0.5 p for measuring the values, 0.5 p for ρ calculations and 0.5 p for a reasonable uncertainty
calculation]
[Max 1.5 p if measured with an ohmmeter (much less precise)]




                                                         — page 2 of 10 —
Part C. String oscillations (3 points)

Draw measurement circuit(s):
The circuit consists in a Hz-meter connected between S+ and S−.


Measurements and calculated data (you don’t have to fill the entire table):
For calculating the lengths, we measure the tensioner’s dimensions a1 = 43 mm and a2 = 39 mm, and calculate the useful
coefficient a2a
              1 +a2
                1 a2
                     ≈ 0.0244 mm−1 . We take the length l1 = 674 mm from part A.
  n turns of the screw      f (Hz)       ∆h = n × 0.7 (mm)   ∆l ≈ 0.0244(∆h)2 (mm)   l = l1 + ∆l (mm)   f 2 (Hz2 ) for part D

           0             210.8 (error)           0                         0            674.0000              44400
           1                197.5               0.7                      0.0120         674.0120              39000
           2                201.1               1.4                      0.0478         674.0478              40400
           3                205.7               2.1                      0.108           674.108              42300
           4                212.8               2.8                      0.191           674.191              45300
           5                221.6               3.5                      0.299           674.299              49100
           6                231.7               4.2                      0.430           674.430              53700
           7                242.4               4.9                      0.586           674.586              58800
           8                254.6               5.6                      0.765           674.765              64800
           9                268.5               6.3                      0.968           674.968              72100
          10                280.8               7.0                       1.20            675.20              78800
          11                293.0               7.7                       1.45            675.45              85800
          12                309.4               8.4                       1.72            675.72              95700
          13                324.4               9.1                       2.02            676.02              105000
          14                340.5               9.8                       2.34            676.34              116000
          15                355.0              10.5                       2.69            676.69              126000
          16                369.7              11.2                       3.06            677.06              137000




                                                      — page 3 of 10 —
Graph: f versus l

    f(Hz)
         360

         350

         340

         330

         320

         310

         300

         290

         280

         270

         260

         250

         240

         230

         220

         210

         200

         190
               674.0   674.2   674.4   674.6   674.8   675.0   675.2   675.4   675.6   675.8   676.0   676.2   676.4   676.6   676.8   677.0
                                                                                                                                               l(mm)

[1 p for the quality of frequency measurements, 1 p for at least 7 measurements with the minimum and maximum frequency
differing at least 1.5 times, 0.5 p for calculating the lengths, 0.5 p for plotting]




                                                                — page 4 of 10 —
Part D. Young modulus of the string (4.5 points)
Suitable axes for finding Young modulus from graph expressed by known quantities:
In the fundamental mode of oscillations there is exactly one half of a wavelength on the string (the ends are fixed and the
middle has the maximum amplitude). We can relate the wavelength to the wave’s speed by v = λf = 2bf , where b is the
                                                                                                l0 (l − l0 ). Therefore
distance between the saddles (as in part A). Thus, F = Λv 2 = 4Λb2 f 2 . On the other hand, F = EA

                                                               EA
                                                       f2 =           (l − l0 )
                                                              4Λb2 l0

and there ought to be a linear relationship between l and f 2 . The zero (x-intercept) of the straight line would give us the
unstretched length l0 , and the slope would then give E.
However, as the changes in the length are quite small, it is perfectly acceptable to replace the l0 in the denominator by one of
the measured lengths and thus avoid calculating the x-intercept at all.
x=l

y = f2

[1.5 p for these or equivalent choices for the axes]


Calculated data for the graph (you don’t have to fill the entire table):
It is most convenient just to add a column of f 2 to the table in part C.
[Calculation: 0.5 p]




                                                        — page 5 of 10 —
Graph: y versus x




   f 2(Hz 2)

       150000

       140000

       130000

       120000

       110000

       100000

        90000

        80000

        70000

        60000

        50000

        40000

        30000

        20000

        10000
                                                                                                               l(mm)
        0
                673.0                     674.0                      675.0                       676.0       677.0

[Plotting: 0.5 p]
Calculations: From the graph, the slope is 40000…43 750 Hz2 /mm and the x-intercept l0 ≈ 672.75 mm.      From there,
E = 4Λb2 l0 × slope/A.
Young modulus E and its uncertainty:

                                           E = 4Λb2 l0 × slope/A = 237 GPa           [1 p]

                                           (                                 )
                                                  ∆slope    ∆b ∆l0   ∆A
                                 ∆E = E                  +2   +    +             = 48 GPa    [1 p]
                                                   slope    b   l0    A
[If only slope error is taken into account, 0.5 p for the uncertainty]
                                                          — page 6 of 10 —
Part E. Heated string (3 points)
Draw measurement circuit(s):
We tensioned the string by 10 turns of the screw to ensure the frequencies stay high enough. Then we connect a resistor (R1 )
and an ammeter (in the 10 A range) between A and B and alternate with the smaller multimeter between measuring the
frequency on S+ and S− and measuring the voltage between the two saddles. By choosing different resistors or omitting it
entirely we obtain different heating powers.


Measurements and calculated data (you don’t have to fill the entire table):
Let T0 denote the room temperature and let R0 be the resistance of the string at room temperature. Then we can calculate
the temperature of the string as follows.
                                                               R − R0
                                                    T = T0 +            .
                                                                 βR0
From the data of part B (or just repeating the measurement here), R0 = 3.20 Ω. Here we have the room temperature
T0 = 23.0 ◦ C.
  R1 (Ω)   I (A)   U (V)    f (Hz)   R = U/I (Ω)     T (◦ C)

    0       0.92    4.09      217         4.45         218
    0.1     0.91    4.05      221         4.45         218
    1       0.82    3.45      225         4.21         180
    3       0.66    2.51      239         3.80         117
    10      0.36    1.25      261         3.47        65.5
    30      0.15    0.50      266         3.33        43.8
   100      0.05    0.16      267         3.20        23.0




                                                      — page 7 of 10 —
Graph: f versus T




    f(Hz)
          270




          260




          250




          240




          230




          220




          210




          200
                0         30           60           90          120           30          150          180        T(C)

[1.5 p for good measurements (covering all the available temperature range), 1 p for calculating the temperatures, 0.5 p for
the plot]




                                                     — page 8 of 10 —
Part F. Thermal expansion of the string (4.5 points)

Suitable axes for finding coefficient of linear heat expansion α from graph expressed by known quantities:
The coefficient of linear heat expansion describes the changes in the untensioned length of the string. l00 [1 + α(T − T0 )] =
l0 = l − (l − l0 ) where l00 is the untensioned length of the string at room temperature. From an expression from part D we
can express (l − l0 ):
                                                    EA                         4Λb2 lf 2
                                             f2 =     2
                                                         (l − l0 ) (l − l0 ) =           .
                                                  4Λb l0                         EA

                     l0 ≈ l
Here approximation l−l     l−l0
                       0
                                made things easier, correct solution without is also possible.
Note that since we are we are only intrested the slope we can ignore any constant added to x and y.
We can get the α from the slope of the plot when
x=T
               4Λb2 lf 2
y = l − l0 =
                 EA

                                                           EAl
Without the approximation we would get. y = l0 =
                                                      4Λb2 f 2 + EA

Calculated data for the graph (you don’t have to fill the entire table):
 T (◦ C)   f (Hz)      l − l0 (mm)

   218         217         1.127
   218         221         1.168
   180         225         1.211
   117         239         1.366
  65.5         261         1.630
  43.8         266         1.692
  23.0         267         1.706




                                                        — page 9 of 10 —
Graph: y versus x




          l − l0(mm)
             1.8




             1.7




             1.6




             1.5




             1.4




             1.3




             1.2




             1.1
                   0              30               60              90              120              30            150              180           T(C)

coefficient of linear heat expansion α and its uncertainty:
From the plot
                                              α = (0.0032 mm/K)/l0 = 4.8 × 10−6
                                                        ∆α = 0.0009 mm/K/l0 = 1.3 × 10−6
The uncertanty is taken from the min-max of the slope. [2 p for a good choice of axes, 0.5 p for plotting, 1 p for calculating
the value of α, 1 p for the uncertainty] Notice that the main source of errors in this part is caused by the fact that string oscillations cool the string,
and the magnitude of this effect depends on the amplitude of oscillations. Because of that, one should take reading with the smallest possible amplitude (for
which frequency reading can still be taken). Alternatively, resistance and frequency readings could be taken simultaneously, at the same moment of time, but
this is difficult to do if no data loggers are used and only one person is making the experiment.


                                                                    — page 10 of 10 —
