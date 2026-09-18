---
id: solution-document-izho-2014-e-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2014_E_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2014_E_S.pdf."
---

X International Zhautykov Olimpiad/ Experimental Competition                                 Page 1/6



           SOLUTION FOR THE EXPERIMENTAL COMPETITION
                        Magnetic interactions
                          Part 1. Interaction with the magnetic field of a coil
  1.1. To measure the oscillation period it is necessary to measure the time of at least 10 oscillations
  several times. The following values for 10 oscillations are obtained:
           t1 = 25, 02 s
          t2 = 25, 06 s .
          t3 = 24,92 s
         Evaluation of the period from this data gives rise to
               t
         = = 2,50 s .
         T
              10
         Experimental error is evaluated by the formula
                   ∑ (t − t )
                                2
                        k
=∆t 2 =
      k
                   0, 08s ,
        n ( n − 1)
  and, therefore , the accuracy of the period is equal to ∆T =∆t /10 =0, 008s .
          Finally, one can write
       =  T ( 2,50 ± 0, 01) s .                                                                      (1)

  1.2. The following circuit can be used for measurements (it is also
  acceptable for the rheostat to be used as a potentiometer).




  1.3. Table 1 shows the dependence of the oscillation period of the pendulum againgst the current in
  the coil and below the corresponding graph is drawn.

                                                    Table 1

                                     I, A    T,s      ν 2 , s −2   (ν 2 − ν 02 ), s −2
                                     0,00   2,655     0,142            0,000
                                     0,80   2,062     0,235            0,093
                                     0,37   2,350     0,181            0,039
                                    -0,37   3,083     0,105            -0,037
                                    -0,72   3,724     0,072            -0,070


X International Zhautykov Olimpiad/ Experimental Competition                              Page 2/6




      Figure 1. Dependence of the oscillation period of the pendulum on the current in the coil.

1.4. To describe the motion of the pendulum the following equation should be used
           d 2ϕ
         J 2 = −mga ⋅ ϕ − µIϕ ,                                                               (2)
           dt
where ϕ stands for the angle of deflection of the pendulum from the vertical, J denotes the moment
of inertia of the pendulum about the axis of rotation, m is the pendulum mass, a designates the
distance from the axis of rotation to the center of the pendulum mass, µIϕ refers to the moment of
the force acting on a magnetized bead caused by the magnetic field of the coil. Equation (2) implies
that the square of the oscillation frequency depends linearly on the current strength as:
                1    mga + µI
         ν2 = 2 =
               T         J

          It is clearly seen that the square of the oscillation frequency against the coil current is
convinuently represented as
                      µI
          ν 2 −ν 02 =    ,
                      J
                mga
where ν 02 =           stands for the
                   J
square of the oscillation
frequency in the absence of the
current in the coil.
          Thus,        the     linear
dependence of the value
 (ν 2 −ν 02 ) against the current
strength proves the assertion of
direct proportionality between
the strength of the magnetic
interaction and the current in the
coil. The figure shows the
corresponding graph which confirms the linearity assumption.


X International Zhautykov Olimpiad/ Experimental Competition                             Page 3/6


                                      Part 2 . Pointlike interaction
2.1.
To write the equation of motion it is necessary to correctly calculate the torque of the interaction
forces between magnetized beads. Since the force is central, the shoulder is a segment OD , and its
length is
        d = OD = (l + x ) ⋅ α ,
where l is the distance from the rotation axis to the bead in the
pendulum, x stands for the distance between the beads in the equilibrium
position. Hereinafter angles are assumed small. The angle α should be
expressed through the angle ϕ of the pendulum deflection. For this
purpose the following ratio can be used
        CB = lϕ = xα ,
which gives rise to
             l
        α = ϕ.
             x
Thus, the motion of the pendulum is described by the equation
          d 2ϕ                 l (l + x )
        J 2 = −mgaϕ − F                   ϕ.                         (3)
          dt                        x
This equation implies that the formula for the oscillation period is given
by
                        J
        T = 2π                        .                                                        (4)
                          l (l + x )
                 mga + F
                               x
2.2. Measurement results of the time of 10 oscillations at different distances between the centers of
the beads are given in Table 2 and are drawn in the graph below.


Table 2.
 x , mm    t1 ,s   t 2 ,s    t 3 ,s   T,s
    23      4,27      4,09    3,90    0,409
    33      8,72      9,03    8,83    0,886
    43     15,96   15,73     15,68    1,579
    53     19,20   19,64     19,36    1,940




2.3. To determine the exponent it is necessary to express the strength of interaction in terms of
measurable characteristics. It follows from the formula for the oscillation period that the change of
the squared frequency is found as
                      l (l + x ) 1
       ν 2 −ν 02 = F               ,
                           x J
This means that the value
       ξ = (ν 2 − ν 02 )
                           x
                         l+x


X International Zhautykov Olimpiad/ Experimental Competition                              Page 4/6


                                                                C
is proportional to the strength of the magnetic interaction F =    . To determine the exponent it is
                                                                rγ
necessary to plot the dependence of ξ on the distance ξ in a logarithmic scale. The slope coefficient
in this graph provides the desired exponent.




The figure shows the corresponding graph. It follows from this graph that the exponent is equal to
γ = 4.

                                    Part 3 . Magnetic chocolate

3.1 Chocolate does not affect the period of oscillation, but significantly increases the damping of
oscillations. This occurs due to the occurrence of eddy currents in the foil.

3.2 In order to prove this, one can measure the dependence of the oscillation amplitude on the time (
or, equivalently, on the number of oscillations in semi-logarithmic scale.
The graph below shows the corresponding data with (1) and without (2) chocolate. The graphs show
an increase in the damping of oscillations in the presence of chocolate.


X International Zhautykov Olimpiad/ Experimental Competition                               Page 5/6


                                          Grading scheme
 №                        Part of the problem                      Total for       Points
                                                                   the part
 1.1   Measurement of the period:                                    0,5
       - Period is larger than 2 seconds;                                            0,1
       - Not less than 3 measurements;                                               0,1
       - Each measurement includes at least 10 periods;                              0,1
       - The average value is found;                                                 0,1
       - Random error is evaluated;                                                  0,1
 1.2                                                                 0,5
       Circuit diagram (all elements connected in series):
       - Source;                                                                     0,1
       - Coil;                                                                       0,1
       - Rheostat (two possible ways);                                               0,1
       - Key;                                                                        0,1
       - Ammeter;                                                                    0,1
 1.3                                                                 2,0
       Measurements (counted only if the period is measured in
       the range 1-5 s)
       - Measured at 7 (5, 3, less) values of the current;                     1(0,5; 0,3; 0)
       - Current flows in two directions;                                           0,4
       - Change in the period is not less than 50% (20% less);                  0,2 (0,1;0)
       - Measured not less than 5 oscillations;                                     0,1
       Plotting:
       - Axis signed and digitized;                                                  0,1
       - All the points of the table are plotted;                                    0,1
       - A smooth line is drawn;                                                     0,1
 1.4                                                                 1,0
       Linearization:
       - Dependence of the squared frequency on the current is
       linear;                                                                       0,4
       - all the points are included in evaluation;                                  0,2
       Plotting:
       - Axis signed and digitized;                                                  0,1
       - All the points of the table are plotted;                                    0,1
       - A smooth straight line is drawn;                                            0,1
       Conclusions on the validity                                                   0,1
 2.1                                                                 1,0
       The equation of motion:
       - General view (the dynamics of rotational motion);                           0,3
       - Torque of the gravity force;                                                0,2
       - Torque of the magnetic interaction force;                                   0,3
       Formula for the period of oscillation                                         0,2
 2.2   Measurements of the oscillation period (counted only if       4,0
       the period is the range of 0.3-5 s)
       - Measurements for 7 (5.3 less) distances;                              2,5(1,5; 1,0; 0)
       - Change in the period is not less than 4 times (2 times,
       or less);                                                                 1,2(0,5;0)
       Plotting:
       - Axis signed and digitized;                                                  0,1
       - All the points of the table are plotted;                                    0,1


X International Zhautykov Olimpiad/ Experimental Competition                 Page 6/6


       - A smooth line is drawn;                                       0,1
 2.3   Determination of the exponent                             4,0
       The correct linearization is found;                             2,0
       The parameters of the linearized dependence are
       determined;                                                     0,5
       Plotting:
       - Axis signed and digitized;                                     0,1
       - All the points of the table are plotted;                       0,1
       - A smooth straight line is drawn;                               0,1
       The slope lies in the range from 2 to 6;                        (0,6)
       The exponent is found to be equal to 4;                          1,2
 3.1                                                             0,5
       Period is constant;                                             0,2
       Damping is increased;                                           0,2
       The reason is the eddy currents in the chocolate bar.           0,1
 3.2                                                             1,5
       The dependence of the amplitude on the number of
       oscillations (it is equivalent to measure the number of
       oscillations for amplitude decrease in the specified
       limits)                                                         1,2
       Plotting:
       - Axis signed and digitized;                                    0,1
       - All the points of the table are plotted;                      0,1
       - A smooth line is drawn;                                       0,1
       TOTAL                                                     15
