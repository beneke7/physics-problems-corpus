---
id: solution-document-apho-2011-e1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2011/E1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2011-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2011/E1_S.pdf."
---

Experimental Question 1: Levitation of Conductors in an Oscillating Magnetic Field

                                                              SOLUTION

a. Using Faraday’s law:

                                             ( )                    √                    (    )

The overall sign will not be graded.

For the current, we use the extensive hints in the question to write:

                                 √                                      √
                         ( )                            (       )                                 (                    )
                                √                                       √

This can be rewritten in a way which will be useful for part (c):

                     √                                                               √
          ( )                    (            (     )               (   ))                            (       (   )             (   ))
                    √

In the last equality, we used                     to derive                  √                    and                  √             .

All the above forms of the answer will be accepted. The overall sign will not be graded.

b. Let us forget about the metal ring, and consider a cylindrical surface at some distance from the solenoid, with
radius and an infinitesimal height . The magnetic Gauss law implies that the flux through the cylinder’s wall
should cancel the net flux through its bases:

                                                                (       )            ( )

Where      is the flux of the vertical magnetic field through each circular base. Dividing by                         and doing an
infinitesimal amount of algebra, we get:




c. The field oscillations are very slow with respect to the transit time of light through the system. Therefore,
oscillates with the same phase at all heights , and we have:

                                                                                 (       )
                                                            √

Then the momentary force reads:

                   ( )          ( )    ( )                                       (       )(           (   )            (   ))



                                                              Page 1 of 10
The time-average of      (   )    (   ) is zero, while the average of (    (   )) is      . Therefore, the time-averaged
force reads:

                                                                                                    (    )
                 〈 〉
                                                                                 (             )

d. The ring’s resistance is much smaller than the resistance of the electric wires and their contacts. If the voltmeter and
ammeter are connected to the same two points on the ring, the measured
resistance would be on the order of 0.1Ω, which is almost entirely due to the
contacts. Using the multimeters on ohm-meter mode is also pointless for
such resistances. Therefore, a four-terminal circuit is necessary, as shown in
the figure. The contact with the ring is accomplished by snapping the                         V
“crocodiles” onto it. Note that the voltmeter’s contacts must be to the inside
from the current’s contacts. Since no resistor is used, the power supply is
effectively short-circuited, with the total resistance (and therefore, the                                       0.7 V
current) mostly determined by the wires and contacts. With an optimal use                                   A      ~
of wires, a current of over 6A can be obtained. This results in a voltage of
about 10mV on the ring. The ammeter’s accuracy is 0.01A, while the voltmeter’s accuracy is 0.1mV. This makes the
voltage the primary source of measurement error, whose relative value is 1%. During the circuit’s operation, the
current and voltage on the ring steadily increase. Therefore, it is necessary to take the current and voltage readings
simultaneously. To minimize and estimate the error in this procedure, 3 sets of measurements should be taken at
slightly different values of the current (without changing the circuit). These measurements from a sample experiment
are reproduced in Table 1.

  (A) ± 0.01A                               (mV) ± 0.1mV                                           (mΩ) ± 1%
6.9                                       11.3                                         1.638
6.34                                      10.4                                         1.640
6.6                                       10.8                                         1.636
                         Table 1: Sample measurements of current and voltage on the thin ring.

In this case, we see that the statistical fluctuations are much smaller than the measurement error. In other cases, they
come out similar. A reasonable estimate for the error in         would be between 0.5% and 1%. Choosing 0.5% in our
case, we write                                     (      ).

The resistance         is not the resistance of the entire ring, but only of the stretch between the two voltage terminals.
To take this into account, we must know the distance            between the terminals, the gap        between the ring’s ends
and the average circumference              of the ring. The terminal distance in our sample experiment was
                  , with the error due to the width of the contacts. The gap was                             , with the error
due to the ruler’s resolution and the width of the ring. For the arc angles associated with         and      , we may treat
arcs as straight lines, with a negligible error of about           .

The best way to find the average circumference is to measure the ring’s outer and inner diameters with the ruler and
take their average. The results are                               and                             . Therfore,
                    (       ), with the errors due to the ruler’s resolution. Equivalently, a measurement with the same


                                                       Page 2 of 10
accuracy can be made by placing the ring on a sheet of millimeter paper. The average circumference is now
                 (      ).

Other methods, such as measuring the average diameter by taking the maximal distance between an inner point and an
outer point of the ring lead to an higher error of 0.5%. Taking the inner or outer diameter instead of the average
diameter introduces an error of about        , i.e. 3%.

The true resistance of the thin ring now reads:

                                                                                      ( )

To estimate the error, we write:


                                                            (                 )

The error of the quantity in parentheses is mainly due to         (       )                                     .
Combining this with the 0.5% error in        , we get:




The distribution of sample measurement results on several different rings is consistent with this error estimate.

Neglecting to take      into account introduces an error of       (       )        Neglecting to take     into
account introduces an error of     (        )       . Forgetting about both and just using      introduces an error of
(            ) (       )       .

A slightly inferior alternative to using a small   is to connect the voltage terminals at diametrically opposite points
of the ring. This decreases the measured voltage by a factor of 2, increasing its relative error by the same factor. The
error in       then becomes about 1%, slightly increasing the final error in       .

e. As can be seen from the rings’ cross-sections, the resistance of the closed ring is smaller than          by an order of
magnitude. This makes a naïve 2-terminal measurement even more hopeless. A 4-terminal measurement as in part (d)
is possible, but will result in a large error of about 5% due to the voltmeter’s resolution. Furthermore, for the closed
ring the inductive impedance         is no longer negligible, and will introduce a systematic error of about    .

The optimal solution is to use the fact that the rings are made of the same material, and deduce     from the rings’
geometries and the accurately measured          :




where stands for the cross-section area. The average diameter              of the closed ring can be found as in part (d),
with the results                              and                                   . Therefore,


                                                      Page 3 of 10
         . In this case, using the inner or outer diameter instead of the average one introduces a large error of       ,
i.e. over 10%.

Measuring        directly also introduces large errors. Measuring the thin ring’s thickness and height with the ruler
introduces an error of                        for each dimension. Multiplying by √ , this implies an error of 25% in
the area. A student may also try to measure the ring’s dimensions using the screw attached to the solenoid. Then the
measurement error for each dimension decreases to about 1/16 of a screw step, i.e.                         , which
implies a 4% error in the area.

The solution is to weigh the rings using the digital scale. We then have:




                                              (                 )


where we used the values                              and                              from our sample measurement. The
measurement error for the masses depends on environmental noise, and we use               as a representative value. The
rings in different experimental sets have slightly different masses, with a deviation of about 1%, which can be
distinguished at the scale’s level of sensitivity. Therefore, different students will measure slightly different values.

The dominant error in the mass ratio is                        . The error in           is 0.35%, as in part (d). After
taking the square, this doubles to 0.7%. Examining eq. (1), we see that the relative error in      (                 ) is
the same as in       , since the (            ) merely moves from the numerator to the denominator. The error in
       (                ) is therefore 1%. Combining these three error sources, we have:

                                √

The distribution of sample measurement results on several different rings is consistent with this error estimate; the
value                 cited above is near the bottom of the distribution.

A student who neglects         will get a systematic error of 6%. A student who neglects the difference between
and        will get a systematic error of 10%. A student who neglects both, i.e. just uses          (                   ),
will get an error of 4%. These errors are halved if the student makes them for just one of the two factors of
(                ).

In the above, we effectively treated the closed ring as a rectangle with length        . It’s easy to see that this
introduces no errors in the mass calculation. Indeed, the precise formula for the ring’s volume reads:


                                      ((              )     (             ) )


where is the ring’s height, and is its width. This is the same formula as in the rectangular approximation. Some
students may use this derivation in their solution.
                                                       Page 4 of 10
The exact resistance calculation for a broad circular ring is more difficult, and reveals that the relative error from the
rectangular approximation is      (         )          . This analysis is not expected from the students, and the
resulting error can be neglected with respect to the overall error of 1.5%. For completeness, we include the derivation
of the exact formula:
                                (           )
                          ∫                                                           (       (        ) )
                            (           )

where    is the material resistivity.

f. The student can vary by using the screw to raise and lower the solenoid. The most precise way to measure is
simply to count the number of screw steps. The error is then                            , where               is the screw
step. If is measured with the ruler, the error becomes                 , due to the ruler’s resolution. A convenient point
to define as       is when the solenoid touches the ring from above, and the screw’s handle is in some fixed
orientation. This point should be reproducible, either visually or by counting screw steps, in order to keep a consistent
record of distances with the force measurements in the next part.

In anticipation of the force measurements, the student should place the scale under the solenoid, place the polystyrene
block on the scale, and place the ring on the polystyrene block. The polystyrene block is important because it is an
insulator, while the scale’s platform is metallic and may alter the EMF-measuring circuit. It is also important for the
quality of the force measurements, as explained below.

It is always best to start measuring from a small distance, because then the ring can be aligned with the solenoid’s axis
more easily. A reasonable range of would be from             (near-contact with the solenoid) to          . A reasonable
resolution is one screw step. It can be made coarser towards large , when the EMF variations become smaller.

The EMF can be measured by connecting the ends of the broad open ring to the voltmeter. We wish to measure the
magnetic flux through the ring, and not through the rest of the circuit. To make sure that this is the case, the wires
from the ring should be twisted into a braid. The EMF decreases with distance from about                      to zero,
reaching about               at          . The measurement error is                    . Sample measurement results are
presented in Table 2. A plot of the measurements (with a trend line for part (h)) is presented in Graph 1.

g. The student can vary as in part (f), this time measuring the force on the closed ring using the digital scale. Care
should be taken to use the same zero point for as in part (f). It is convenient, though not necessary, to measure the
force at the exact same points where the EMF was measured previously.

Again, the ring should be placed on the polystyrene block, rather than directly on the scale. There are two reasons for
this in the context of force measurements. First, the metallic parts of the scale also react to the solenoid’s magnetic
field. Therefore, the solenoid must be kept at a distance above the scale, to eliminate a direct effect on the scale’s
reading. To observe this effect and its successful elimination, the student may turn on the current in the solenoid
without a ring resting on the scale, and check whether the scale’s reading changes. The second reason to use the
polystyrene block is the small area of the scale; if the ring rests on the scale directly, it’s difficult to ensure that some
of its weight doesn’t fall on the scale’s lid or other supporting surfaces. Finally, one must make sure that the solenoid
isn’t in direct contact with the ring or the solenoid block, so that its weight doesn’t fall on the scale.


                                                        Page 5 of 10
It is convenient to turn on the scale, or to press the Tare button, with the ring and the block resting on the scale with no
current in the solenoid. We can then measure the magnetic force directly. Otherwise, the student must manually
subtract the scale’s reading at zero current from all of his force values.

For values of from         to         , the force decreases from about 〈 〉     (grams-force) to about 〈 〉
      . The measurement error depends on environmental noise. A representative value is 〈 〉           . Sample
measurement results are presented in Table 2.

h. The derivative should be found from discrete differences between pairs of points, situated symmetrically around the
point we are interested in. It is better to find the derivative           , and then multiply it by       , than to find the
derivative             directly. This is for two reasons. First, taking the square amplifies the errors in the discrete point
differences. Second, if the student chooses a graphical method (see below), it is more convenient to use the graph of
     ( ): it was already drawn in part (f), and its points are more evenly distributed than the points on a graph of
     ( ).

We will now discuss two distinct methods for choosing the discrete differences for                 . When used properly,
the two give equally good results.

Numerical method:
One method to find the derivative                is simply to take differences between measured values of        . The
intervals at which the differences are taken must be carefully chosen. A small interval will give a large error in the
slope, due to the statistical scatter of the measured points. On the other hand, a large interval may result in too much
smearing, so that we’re not capturing the local slope. An optimal interval is about 6 screw steps, i.e. about
to each side from the point of interest.

Graphical method:
Another method is to draw a smooth trend line through the measured points, and then to use differences between
points on this trend line rather than the measured values. If the measurements were carried out properly, the trend line
will deviate by only                    from the measured points on the graph paper. An example worked out by a
hapless theoretician is shown on Graph 1. The thick line is a consequence of the trial-and-error process of sketching
the best line. The discrete intervals for the derivative can now be chosen smaller than with the numerical method,
since the statistical scatter is smoothed out. In particular, taking one screw step to each side from the point of interest
is now good enough. One should not choose much smaller intervals, due to the limited resolution of the graph paper.
A potential advantage of the graphical method is that it’s not tied to the exact values where the EMF was measured.
This is helpful if the EMF and the force were not measured at the exact same heights.

An inferior graphical method is to draw tangents to the curve            ( ), and calculate the slopes of these tangents. In
practice, it is very difficult to identify a tangent line visually, and using this method produces large deviations, on the
order of 20%, in the analysis of part (i).

Sample values of              and             are provided in Table 2.

i. Following parts (c) and (h), the student should draw a linear graph of 〈 〉 as a function of              . The graph
should pass through the origin, and its slope equals:



                                                       Page 6 of 10
                                                                          ( )
                                                     (            )

If very small distances are included in the graph (under about        between the ring and the solenoid’s edge), the
corresponding points will deviate from linearity, with a visible decrease in the slope. This can be seen in the
computerized plot below:




This effect results from attraction between the ring and the solenoid’s iron core.

In the manual graph from our sample experiment (Graph 2), the non-linearity isn’t observed, and the slope comes out
                               ( ). To extract , we must solve the quadratic equation:



The two roots are:

                                                           √


where we must use                              .

The student can find, either analytically or by substitution, that only the smaller root satisfies     . In our sample
experiment, the result reads:

                                          √


If the student hasn’t done so before this point, he will need convert the force units from grams-force to Newtons using
the provided value of .

We find that the ratio        is 0.23. Therefore, for the error estimation, we can write eq. (2) as:

                                                         Page 7 of 10
                                                                             ( )

As we can see, the delicate error considerations in     are now even more important, since it appears squared.
Collecting the relative errors in and , we have:

                                √           (          )

The scatter of results from sample experiments is consistent with this error estimation.
A student who neglects (       ) all along and uses eq. (3) to find the value of will introduce a systematic error of
   .
  (screw steps)    (      )±            (   )±        〈 〉( )±          〈 〉( )±                   (    )
±                                                                                                           (    )
0                 0                 21.25             7.08             0.06938
1                 1.41              20.3              6.5              0.06370
2                 2.82              19.3              5.93             0.05811
3                 4.23              18.4              5.4              0.05292        0.6206                0.02284
4                 5.64              17.5              4.9              0.04802        0.6028                0.02110
5                 7.05              16.7              4.47             0.04381        0.5674                0.01895
6                 8.46              16                4.07             0.03989        0.5437                0.01731
7                 9.87              15.2              3.65             0.03577        0.5201                0.01581
8                 11.28             14.5              3.3              0.03234        0.4965                0.01440
9                 12.69             13.8              2.97             0.02911        0.4787                0.01321
10                14.1              13.1              2.71             0.02656        0.4492                0.01177
11                15.51             12.5              2.44             0.02391        0.4314                0.01079
12                16.92             11.95             2.2              0.02156        0.4019                0.00961
13                18.33             11.4              2.045            0.02004        0.3783                0.00862
14                19.74             10.85             1.83             0.01793        0.3546                0.00770
15                21.15             10.4              1.64             0.01607        0.3428                0.00713
16                22.56             9.9               1.45             0.01421        0.3251                0.00644
17                23.97             9.5               1.35             0.01323        0.3014                0.00573
18                25.38             9.05              1.2              0.01176        0.2955                0.00535
19                26.79             8.65              1.07             0.01049        0.2719                0.00470
20                28.2              8.3               1                0.00980        0.2660                0.00442
21                29.61             7.9               0.905            0.00887        0.2541                0.00402
22                31.02             7.6               0.815            0.00799        0.2423                0.00368
23                32.43             7.25              0.74             0.00725        0.2246                0.00326
24                33.84             6.9               0.67             0.00657        0.2128                0.00294
25                35.25             6.6               0.61             0.00598        0.2009                0.00265
26                36.66             6.4               0.56             0.00549        0.1950                0.00250
27                38.07             6.1               0.52             0.00510        0.1773                0.00216
28                39.48             5.9               0.47             0.00461
29                40.89             5.6               0.42             0.00412
30                42.3              5.4               0.36             0.00353
                           Table 2: Sample EMF and force measurements and derivative values




                                                        Page 8 of 10
Graph 1:   as a function of , with a smoothed trend line.



                 Page 9 of 10
Graph 2: 〈 〉 as a function of        , with linear trend lines.

                     Page 10 of 10
