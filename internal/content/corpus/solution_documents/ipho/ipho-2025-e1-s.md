---
id: solution-document-ipho-2025-e1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2025/E1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2025-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2025/E1_S.pdf."
---

Q1-1
Experiment



                                                                                             English (Official)

Earth's magnetic field measurement (10 points)
Introduction
This problem aims to measure the horizontal component of the Earth's magnetic field. A magnet will
first be characterized using a so called Gouy balance, before being used to measure this magnetic field.
In the entire problem, uncertainties are expected to be determined only from the fits and not from the
individual experimental points.
Equipment list




                                   Fig. 1. Photographs of all equipment.

The list of equipment is given below and illustrated in Fig. 1. The number of items is indicated between
[] when it is greater than one. Students should ask for help if something appears not to be working.
   • (a) Magnets [3]. One magnet is attached to the force sensor (b) and should not be removed. An-
     other magnet is inserted into the pod (f) and should not be removed until specified. The last one
     will be used in A.5. All magnets are supposed identical.
   • (b) Force sensor. Connected to the Arduino (c), this sensor measures the force along its axis, noted
     𝑚f , in grams-force ("g"), which is the force experienced by a 1-gram mass on the earth's surface in
     the gravity field (𝑔0 = 9.81 m ⋅ s−2 ) . One of the magnets (a) is attached to it. Each time it is switched
     back on, the sensor display is reset to 0, regardless of the situation. This sensor must not be subjected
     to forces in excess of 200 grams. It needs to be unpacked carefully.
   • (c) Arduino with digital display. This element is used to power the coils (e) and to perform force
     and magnetic field measurements, displayed directly in gram-force ("g") and mT. The battery (j)
     powering the Arduino must be connected to slot (i), and the battery (j) powering the coils (e) to slot
     (ii) (pay attention to connection polarity). The force sensor (b) and magnetic field sensor (d) should
     be connected to slots (iv) and (iii) respectively, and the coil power cables to slots (v). A switch (vi)
     closes the coil supply circuit (indicated by an LED), whose electric current can be controlled in (vii).
                                                                                  Q1-2
Experiment



                                                                                              English (Official)

   • (d) Magnetic field sensor with ruler. Connected to the Arduino (c), this probe measures the field 𝐵𝑧
                         →
                         −
     along the direction 𝑒𝑧 of the ruler, in mT.
   • (e) Coils in anti-Helmholtz configuration (wound in opposite directions). These coils must be con-
     nected in series with the ammeter (g) and to the Arduino (c) to create a magnetic field.
   • (f) Metallic stand on a wooden base, with suspended pod where a magnet (a) is initially inserted,
     and with angle markers. The detailed assembly of this device is explained below.
   • (g) Multimeter. Only used as an ammeter at the 10 A range. If left inactive, the multimeter switches
     off, and must be switched back on by returning it to the “OFF” position. Do not use the two cables
     supplied in the multimeter case.
   • (h) Electric wires [3].
   • (i) 40 cm ruler.
   • (j) 9 V batteries [3]. Their capacity is of the order of 300 mA ⋅ h.
   • (k) Chronometer.
   • (l) Adhesive paste. Can be used for the entire problem.




                           Fig. 2. Use of sensors inside the anti-Helmholtz coils.

Use of sensors interfaced with the Arduino (Fig. 2)
The magnetic field sensor (d) can slide in the coils (e) as shown in (i), while measuring the field on their
axis. The 𝑧 = 0 position for the sensor is shown in (ii), and 𝑧 increases as it moves inside the coils.
The force sensor (b) is inserted into the coils as shown in (iii), before turning the coil as in (iv) so that the
transducer is vertical. To do this, be sure to route the electrical wires through the gutters provided.
Installation of equipment (f) (Fig. 3), to be mounted only before starting part B, with a 34 cm wire
   • Insert the metal post (f0a) into the wooden plate with plastic feet (f0b) to form the stand (f0).
   • The part (f1) is located on the lower part and marks the angle of the pod. Install the arm (f1b) on
     the metal post by means of a screw (f4), then fix the part (f1a) on it with a second screw (f4).
   • The part (f2) is located on the upper part and hold the wire supporting the pod. Install the arm (f2b)
     on the metal post by means of a screw (f4), then insert the part (f2a) on it.
   • To build the pod (f3), insert the inertia bar (f3b) and a toothpick (f3c) into the carrier part (f3a) on
     which a magnet (a) is already inserted. Insert the wire supporting the pod into the part (f2a), and
     secure it with a screw (f4). Turning part (f2a) changes the angle at which the wire is attached. The
     toothpick allows to precisely measure the angular position of the pod.
                                                                                  Q1-3
Experiment



                                                                                              English (Official)




     Fig. 3. Installation of the pod on the metallic stand. Parts (f1a), (f1b), (f2a), (f2b), and (f3a) are
     shown from two different angles. There are four identical (f4) plastic screws.


SOLUTION:
Please note that the numerical results given in the solution come from a single, consistent measurement ses-
sion. The measurement ranges used in the notation take into account several measurements by various testers.
Marking scheme: students are not penalized for forcing a linear fit to pass through the origin when the
studied law is proportional.

Part A. Gouy balance and magnetic moment
Modeling
                                                                                      →
                                                                                      −
We assume that a magnet can be treated as a magnetic dipole of magnetic moment 𝑚m . The force
                                                →
                                                −      →−                      →
                                                                               −       →
                                                                                       −
experienced by such a dipole of magnetic moment 𝑚m = 𝑚m 𝑒𝑧 in a magnetic field 𝐵 = 𝐵(𝑧)𝑒𝑧 is

                                             →
                                             −         𝑑𝐵(𝑧) −
                                                            →
                                             𝐹(𝑧) = 𝑚m       𝑒 .                                              (1)
                                                        𝑑𝑧 𝑧
                                                                             →
                                                                             −                       →
                                                                                                     −
When an electric current 𝑖 flows through the anti-Helmholtz coils, the field 𝐵 along the unit vector 𝑒𝑧 of
revolution axis is

                                             →
                                             −                 →
                                                               −
                                             𝐵(𝑧) = 𝛼𝑖(𝑧 − 𝑧0 )𝑒𝑧 .                                           (2)

This equation is only valid near the center of the device, denoted by 𝑧 = 𝑧0 .
Magnetic field in the coils
                                                                                 Q1-4
Experiment



                                                                                             English (Official)


     A.1     Estimate numerically the typical operating time 𝜏 of one of the batteries used          0.2pt
             in the experiment, with an electric current of the order of 2 A.

SOLUTION:
The 9V battery capacity is 𝑄 = 𝐼 ⋅ 𝛥𝑡 = 300 mA⋅h. Using an electric current 𝐼 = 2A, the time of use is
0.3 × 3600/2 ≈ 540s ≈ 9min.


                   A.1.1. One value in the intervalle 6 ≤ 𝜏 ≤ 12 min or                0.2
                   (360 ≤ 𝜏 ≤ 720 s).


This result must be taken into account when developing the protocols later on, knowing that the coils are only
used in part A. Note that a spare battery is available if required.

Insert the magnetic field sensor into the coils, as shown in Fig 2. See also this figure for the identification
of the sensor position in the coils.

     A.2     At a fixed electric current 𝑖0 ≃ 1.0 A, measure and plot the magnetic field 𝐵𝑧 as       0.8pt
             a function of the position 𝑧 of the sensor on the axis of the coils. Identify the
             largest region [𝑧min , 𝑧max ] where the magnetic field is experimentally linear with
             respect to position.

SOLUTION:
The plot below is obtained at 𝑖0 = 1.0A. At the centre of the device is a zone in which the field is a linear
function of position. At the edges of the device, you can see the saturation of the classical field as you
approach the two coils. The zone of linearity from the figure is [0.015 ; 0.032] m.
                                                                                 Q1-5
Experiment



                                                                                             English (Official)

            A.2.1: Measure 6 points or more. B in [-12 ; 12] mT and z in [0 ; 60] mm.         0.1
            A.2.2: Measure 8 points or more. B in [-12 ; 12] mT and z in [0 ; 60] mm.         0.1
            A.2.3: Plot (axes, units).                                                        0.1
            A.2.4: Experimental plot showing linearity with correct sampling. At least        0.1
            5 points.
            A.2.5: Experimental plot showing deviation from linearity on the left side        0.1
            in [12 ; 18]mm.
            A.2.6: Experimental plot showing deviation from linearity on the right            0.1
            side in [29 ; 35]mm.
            A.2.7: 𝑧min in [12 ; 18] mm.                                                      0.1
            A.2.8. 𝑧max in [29 ; 35] mm.                                                      0.1


    A.3     By placing the sensor at two positions (𝑧1 , 𝑧2 ) in this region of linear dependency,   0.9pt
                                                                              →
                                                                              −
            draw a curve to verify the electric current dependency of 𝐵 given by equation
            (2), and determine the value of 𝛼, with its uncertainty.

SOLUTION:
The centre of the linear zone is around 23 mm. The values of the magnetic field at two positions
𝑧1 = 13mm and 𝑧2 = 33mm are measured for several electric current values. This allows to compute the
gradient 𝐵(𝑧𝑧2 )−𝐵(𝑧
                −𝑧
                     1)
                        of the magnetic field as a function of electric current.
            2   1




We have a linear evolution. The possible residual y-intercept may be due to the fact that the sensor is
not correctly calibrated. A typical value for the slope gives 𝛼 = 0.150 ± 0.007 T ⋅ m−1 ⋅ A−1 .
                                                                                        Q1-6
Experiment



                                                                                               English (Official)

    A.3.1: 3 measures or more of 𝐵 at 2 positions (total 6). B in [-25 ; 25] mT and I in [-3 ; 3] A.      0.1
    A.3.2: 5 measures or more of 𝐵 at 2 positions (total 10). B in [-25 ; 25] mT and I in [-3 ; 3] A.     0.1
    A.3.3: Plot (axes, units).                                                                            0.1
    A.3.4: Identification and calculation of the relevant slope quantity.                                 0.1
    Either 𝐵(𝑧)/(𝑧 − 𝑧0 ) or (𝐵(𝑧2 ) − 𝐵(𝑧1 ))/(𝑧2 − 𝑧1 ), or these quantities divided by 𝑖.
    A.3.5: Experimental plot showing linearity with correct sampling.                                     0.1
    A.3.6: 𝛼 value (with units) in [0.11 ; 0.19] T/m/A,                                                   0.1
    A.3.7. 𝛼 value (with units) in [0.13 ; 0.17] T/m/A.                                                   0,1
    A.3.8. 𝛿𝛼 value (with units) in [0.001 ; 0.02] T/m/A.                                                 0.1
    A.3.9. 𝛿𝛼 value (with units) in [0.003 ; 0.01] T/m/A,                                                 0,1


Gouy balance
Remove the magnetic field sensor from the coils, and carefully place the force sensor inside, as described
in Fig. 2, with particular attention to the placement of electrical wires in the gutters.

    A.4       Perform experimental measurements of the gram-force 𝑚f as a function of cur-              0.8pt
              rent 𝑖. Draw an appropriate plot to determine the value of the magnetic mo-
              ment 𝑚m of the magnet, with its uncertainty.

SOLUTION:
We vary the electric current 𝑖 and measure the effective mass, which gives




The slope of the curve is 5.48 gram-force/A, giving a slope of (53.7 ± 0.8) × 10−3 N/A. Finally, the magnetic
                 53.7 × 10−3                                                    𝛿𝑚 𝛿𝑝 𝛿𝛼
moment is 𝑚𝑚 =               = 0.358 A ⋅ m2 . The uncertainty is obtained from      =     +     = 0.05.
                    0.150                                                        𝑚    𝑝     𝛼
The magnetic moment 𝑚𝑚 = 0.36 ± 0.02 A ⋅ m2 .
                                                                                 Q1-7
Experiment



                                                                                        English (Official)

                A.4.1: 6 measures or more. 𝑚𝑓 in [-20 ; 20] g and I in [-3 ; 3] A.   0.1
                A.4.2: 8 measures or more. 𝑚𝑓 in [-20 ; 20] g and I in [-3 ; 3] A.   0.1
                A.4.3: Plot (axes, units).                                           0.1
                A.4.4: Experimental plot showing linearity with correct sampling.    0.1
                A.4.5: 𝑚𝑚 value (with units) in [0.25 ; 0.45] A.m .      2
                                                                                     0.1
                A.4.6: 𝑚𝑚 value (with units) in [0.30 ; 0.40] A.m        2
                                                                                     0.1
                A.4.7. 𝛿𝑚𝑚 value (with units) in [0.003, 0.07] A.m .         2
                                                                                     0.1

                A.4.8 𝛿𝑚 value (with units) in [0.01, 0.03] A.m2 .                   0.1


Measurements of force in newton (N) are accepted.
Alternative measurement of the magnetic moment
In the dipolar approximation, the magnetic field of a magnet of magnetic moment 𝑚m on its revolution
axis 𝑧 is

                                                          𝜇0 𝑚m
                                             𝐵𝑧 (𝑧) =                ,                                    (3)
                                                        2𝜋(𝑧 − 𝑧a )3

where 𝑧a is not necessarily the geometric center of the magnet, and where 𝜇0 = 4𝜋10−7 H ⋅ m−1 .

    A.5     Measure the magnetic field 𝐵𝑧 along the revolution axis of the free magnet, as        1.3pt
            a function of distance 𝑧. Draw a curve to verify the model given Eq. (3), showing
            its experimental deviations. Deduce a new value for 𝑚m , with uncertainty.

SOLUTION:
The field B is measured directly by sticking the third magnet on the graduated ruler. You can also use
the Hall sensor directly. The measurements are shown below, where the position is plotted as a function
of 𝐵 −1/3 (see figure below).
                                                                                 Q1-8
Experiment



                                                                                             English (Official)




                𝜇0 𝑚𝑚 1/3
The slope is ⒧         ⒭ = (4, 1 ± 0.1) × 10−3 m ⋅ T1/3 , and then the new value of the magnetic moment is
                  2𝜋
𝑚𝑚 = 0, 31 ± 0.01 A ⋅ m2 .


       A.5.1: 6 measures or more. B in [-100 ; 100] mT and d in [0 ; 40] cm.                         0.1
       A.5.2: 8 measures or more. B in [-100 ; 100] mT and d in [0 ; 40] cm.                         0.1
       A.5.3: Plot (axes, units).                                                                    0.1
       A.5.4: Identification and calculation of the relevant quantity.                               0.2
       Either 𝑧 = 𝑓(𝐵   −1/3
                               ) or related quantity.
       A.5.5: Identification of the valid region, out of near field (small 𝑧).                       0.1
       A.5.6. Identification of the valid region : not limited by digital quantification (high 𝑧).   0.1
       A.5.7: Experimental plot showing linearity with correct sampling.                             0.2
       A.5.8: 𝑚𝑚 value (with units) in [0.25 ; 0.45] A.m .
                                                         2
                                                                                                     0.1
       A.5.9: 𝑚𝑚 value (with units) in [0.30 ; 0.40] A.m .
                                                         2
                                                                                                     0.1
       A.5.10: 𝛿𝑚𝑚 value (with units) in [0.001, 0.05] A.m   2
                                                                                                     0.1
       A.5.11: 𝛿𝑚𝑚 value (with units) in [0.005, 0.02] A.m . 2
                                                                                                     0.1


    A.6      Given the two results obtained in A.4 and A.5, propose a final experimental value       0.2pt
             of 𝑚m with its uncertainty.

SOLUTION:
The final value is given by the averaged value of the previous measurements, so 𝑚𝑚 = 0, 33 ± 0, 01 A ⋅ m2 .
                                                                                           Q1-9
Experiment



                                                                                                 English (Official)

                          A.6.1 𝑚𝑚 value (with units) in [0.30 ; 0.40] A.m2 .              0.1
                          A.6.2 𝛿𝑚𝑚 value (with units) in [0.005, 0.03] A.m .         2
                                                                                           0.1



Part B. Determining the earth's magnetic field
Modeling
We now study the oscillating motion of the magnet in a horizontal plane to estimate the value of the
horizontal component 𝐵e of the Earth's magnetic field, see Fig. 3 and the assembly instructions above
Fig.3. The pod (f3), containing the magnet, is subjected to two torques around the vertical axis:
                                              𝐶f
   • the torque of the wire, modeled as 𝛤f = −   (𝜃 − 𝜃0 ), where 𝐶f is a constant and 𝐿 the total length
                                               𝐿
     between the two attachments of the wire, and 𝜃0 corresponds to the angle for which the wire is not
     twisted,
   • the torque of the Earth’s magnetic fields, given by 𝛤e = −𝑚m 𝐵e sin(𝜃 − 𝜃e ), when the angular position
     of the Earth's magnetic field is given by the angle 𝜃e .
Denoting 𝐽 the unknown moment of inertia of the pod and magnet assembly around the vertical axis,
the angular momentum theorem gives

                                    d2 𝜃              𝐶
                                𝐽        = 𝛤𝑓 + 𝛤𝑒 = − f (𝜃 − 𝜃0 ) − 𝑚m 𝐵e sin(𝜃 − 𝜃e ).                         (4)
                                    d𝑡 2              𝐿

When the sin(𝜃 − 𝜃e ) ≃ 𝜃 − 𝜃e approximation is valid, this leads to an sinusoidal oscillation at a period 𝑇 .
For this part, adhesive past (l) is moldable into any shape or size and attachable to other devices.
Caution: To avoid disturbance from external magnetic fields, the magnet must be placed at least 20 cm
away from any metal object or magnetic source (including the other magnets).
Experimental set-up and first measurement
For questions B.1 to B.5, set the length of the wire to 𝐿 = 34 cm and make sure that it is not twisted. In this
setting, we begin by assuming that the torque from the wire is negligible with respect to the torque from the
Earth's magnetic field, a hypothesis to which we will return later.
To align 𝜃0 with 𝜃e , use piece (f2a) to adjust 𝜃0 so the pod (f3) does not rotate when the magnet is removed.
Then reinsert the magnet in the pod, and keep 𝜃0 unchanged until question B.5.

     B.1     Propose an experimental protocol to determine 𝐵e . Introduce the different                  0.3pt
             quantities you will measure and their units. Depict these quantities on a de-
             tailed schematic, and relate them to those given in the instructions through an
             equation. For each quantity, specify whether it is fixed (F) or varies (V) through-
             out the protocol.

SOLUTION:
The figure below describes the proposed experiment. The period 𝑇 for small oscillations is measured
(with best precision using several periods). Since the inertial moment 𝐽0 of the pod is unknown, adding
sticky paste to both ends of the pod allows the change of the inertial moment 𝐽 = 𝐽0 + 𝛥𝐽 . The length of
the pod arm is 𝑟𝑎 = 0.04 m.
                                                                        Q1-10
Experiment



                                                                                          English (Official)

                                                                 𝛥𝐽     1      𝐽                          2𝜋
The differential equation verified by the pod at small angles is     = 2 𝐵𝑒 − 0 . The period is 𝑇 =
                                                                 𝑚𝑚 𝜔         𝑚𝑚                          𝜔
and the variation of inertial moment by adding a total mass of sticky paste 2𝑚𝑎 is 𝛥𝐽 = 2𝑚𝑎 .𝑟𝑎2 . Therefore
2𝑚𝑎 𝑟𝑎2  𝑇2       𝐽
        = 2 𝐵𝑒 − 0 .
 𝑚𝑚      4𝜋      𝑚𝑚




          B.1.1: Period 𝑇 , in second, and expression of T as a function of other quantities.   0.1
          B.1.2 Added mass 𝑚𝑎 , in gram, with schematic.                                        0.1
          B.1.3 Radius of the added mass 𝑟𝑎 , in centimeter, with schematic.                    0.1


Note that the grading scheme will be evaluated as follows to take into account alternative protocols: a) If
the students propose any of the quantities that already appear in the grading scheme, they will have the
related points. b) If the students propose any protocol that works, and properly introduce the relevant
quantities, they will have the entire points for the questions. c) No point will be given for additional
quantities that do not correspond to a working protocol.

    B.2      Using the protocol described above, draw a graph to determine a first value of       1.1pt
             𝐵e , with its uncertainty.

SOLUTION:
                                                                                 Q1-11
Experiment



                                                                                             English (Official)




        2𝑚𝑎 𝑟𝑎2  𝑇2      𝐽                                                                     8𝜋2 𝑟𝑎2
Since           = 2 𝐵𝑒 − 0 , plotting 𝑇 2 versus 𝑚𝑎 should give a linear function of slope 𝑝 =         .
         𝑚𝑚      4𝜋     𝑚𝑚                                                                     𝑚𝑚 𝐵𝑒
One finds a slope 𝑝 = 8640 ± 200 A−1 ⋅ T−1 . Using the value 𝑚𝑚 = 0, 31 ± 0.01 A ⋅ m2 , one obtains 𝐵𝑒 = 47 𝜇T.
                            200   0, 01
the relative uncertainty is     +        ≈ 0, 06. Therefore 𝐵𝑒 = (47 ± 3) 𝜇T.
                            8640 0, 305


                  B.2.1: 4 measures or more.                                              0.1
                  B.2.3: 6 measures or more.                                              0.1
                  B.2.3 : Identification and calculation of the relevant quantity.        0.2
                  Either 𝑇   2
                                 = 𝑓(𝐽𝑎 ) or 𝑓(𝑚𝑎 𝑟𝑎2 ) or related quantity.
                  B.2.4 : Plot (axes, units).                                             0.1
                  B.2.5: Experimental plot showing linearity with correct sampling.       0.2
                  B.2.6 𝐵𝑒 value (with units) in [1 ; 10] 10      −5
                                                                       T.                 0.1
                  B.2.7. 𝐵𝑒 value (with units) in [1.5 ; 7] 10      −5
                                                                         T.               0.1
                  B.2.8. 𝛿𝐵𝑒 value (with units) in [0.1 ; 1] 10        −5
                                                                            T.            0.1
                  B.2.9. 𝛿𝐵𝑒 value (with units) in [0.2 ; 0.5] 10−5 T.                    0.1


Evaluation of the torque from the wire

     B.3      Keeping 𝐿 = 34 cm, study the motion of the pod without the magnet, and deter-          0.7pt
              mine the value of 𝐶f , with experimental uncertainty: perform one period mea-
              surement for two system configurations. Specify the equation relating 𝐶f to the
              measured quantities.

SOLUTION:
The magnet is removed. The period of oscillation therefore depends on the torque due to the twisting
of the wire and the moment of inertia. As the moment of inertia of the cradle remains unknown, we can
                                                                                       Q1-12
Experiment



                                                                                                        English (Official)

measure the period 𝑇1 without sticky paste and the period 𝑇2 with sticky paste, for a fixed length of wire.
The equations involved are
     𝐶𝑓 𝑇12
𝐽=            ,
     4𝜋2 𝐿
                  𝐶𝑓 𝑇22
𝐽 + 2𝑚𝑎 𝑟𝑎2 =       .
             4𝜋2 𝐿
Taking two measures, for 𝑚𝑎 = 0 and 𝑚𝑎 = 2, 6 g, one finds 𝑇1 = 4.2±0.2 s and 𝑇2 = 15.8±0.2 s, and therefore
     8𝜋2 𝐿𝑚𝑎 𝑟𝑎2
𝐶𝑓 =             , so 𝐶𝑓 = (5.1 ± 0.2) × 10−7 N ⋅ m2 /rad ( m3 ⋅ kg ⋅ s−2 ).
      𝑇22 − 𝑇12


                           B.3.1: Choice of a parameter that varies.                              0.1

                           𝐽𝑎 through 𝑚𝑎 and/or 𝑟𝑎 .
                           B.3.2: Measurements of 𝑇1 and 𝑇2 .                                     0.1
                           B.3.3: Expression of 𝐶𝑓 as a function of measured quantities.          0.1
                           B.3.4: 𝐶𝑓 value (with units) in [2 ; 10] 10 N.m /rad.
                                                                     −7        2
                                                                                                  0.1
                           B.3.5: 𝐶𝑓 value (with units) in [3 ; 8] 10 N.m /rad.
                                                                    −7     2
                                                                                                  0.1

                           B.3.6: 𝛿𝐶𝑓 value (with units) in [0.05 ; 1.0] 10−7 N.m2 .rad−1         0.1
                           B.3.7: 𝛿𝐶𝑓 value (with units) in [0.1 ; 0.5] 10 N.m .rad
                                                                          −7       2   −1
                                                                                                  0.1


      B.4          Using previous measurements, give the expression and determine numerically                   0.3pt
                   the critical length 𝐿c for which the amplitude factors 𝐶f /𝐿 and 𝑚m 𝐵e of the 𝛤f and
                   𝛤e torques are equal. In question B.2, what was the ratio (𝐶f /𝐿)/(𝑚m 𝐵e ) ? Choose
                   from the intervals: [0 %, 1 %[ ; [1 %, 5 %[ ; [5 %, 20 %[ ; [20 %, 50 %[ ; [50 %, ∞%[.

SOLUTION:
                                                        𝐶𝑓                       5.1 × 10−7
                                                                                        𝐶𝑓
The two previous torques are equalized, so                   = 𝑚𝑚 𝐵𝑒 and then 𝐿𝑐 =            == 3.2 cm.
                                          𝐿𝑐                         𝑚𝑚 𝐵𝑒    0.33 × 47 × 10−6
The ratio between the torque at 34cm and the critical torque at 3.2cm is therefore 3.2/34=9%. So the
answer is [5 ; 20%[.


                                    B.4.1: Correct expression of 𝐿𝑐 = 𝐶𝑓 /(𝑚𝑚 𝐵𝑒 ).     0.1
                                    B.4.2: 𝐿𝑐 value (with units) in [2.0 ; 6.0] cm.     0.1
                                    B.4.3: Correct range: [5%,20%[.                     0.1


Static regime measurement
We now propose a static measurement of the Earth's magnetic field. Reinsert the magnet into the pod.
Use piece (f2a) in Fig. 3 to adjust the angular position 𝜃0 , causing the wire to twist.
                                                                            Q1-13
Experiment



                                                                                                   English (Official)


     B.5     Still at a fixed length of 𝐿 = 34 cm, draw an appropriate plot to study how the               1.1pt
             equilibrium position of the magnet 𝜃eq depends on the angle 𝜃0 , and determine
             a second value of 𝐵e , with its uncertainty.

SOLUTION:
                                                                                  𝐶𝑓 (𝜃𝑒𝑞 − 𝜃0 )
According to the equation of motion in an equilibrium situation, we have :                    = −𝑚𝑚 𝐵𝑒 sin(𝜃𝑒𝑞 ).
                                                                                      𝐿
The protocol therefore involves plotting, for a fixed length 𝐿, 𝜃𝑒𝑞 −𝜃0 as a function of sin(𝜃𝑒𝑞 ) and checking
                                                           𝑚 𝐵 𝐿
that it is indeed a linear function, the slope of which 𝑝 = 𝑚 𝑒 can be calculated.
                                                              𝐶𝑓




The slope obtained from the measurements is 11.1 ± 1.7 rad−1 for 𝐿 = 0.34 m. The Earth magnetic field is
          𝑝𝐶𝑓    11.1 × 5.1 × 10−7
then 𝐵𝑒 =      =                   = 50.5 ± 8 𝜇T. Note that uncertainty is relatively high.
          𝑚𝑚 𝐿      0.33 × 0.34


                  B.5.1: Plot (axes, units).                                                 0.1
                  B.5.2: 5 measures or more.                                                 0.1
                  B.5.3: 7 measures or more.                                                 0.1
                  B.5.4: Identification and calculation of the relevant quantity.            0.2
                  Either (𝜃𝑒𝑞 − 𝜃0 ) = 𝑓(sin(𝜃𝑒𝑞 − 𝜃𝑒 )) or inverse.
                  B.5.5: Experimental plot showing linearity with correct sampling.          0.2
                  B.5.6: 𝐵𝑒 value (with units) in [1.0 ; 10] 10   −5
                                                                       T.                    0.1
                  B.5.7: 𝐵𝑒 value (with units) in [1.5 ; 7] 10   −5
                                                                      T.                     0.1
                  B.5.8. 𝛿𝐵𝑒 value (with units) in [0.1 ; 2] 10   −5
                                                                       T.                    0.1
                  B.5.9. 𝛿𝐵𝑒 value (with units) in [0.6 ; 1] 10   −5
                                                                       T.                    0.1
                                                                    Q1-14
Experiment



                                                                                      English (Official)


    B.6     Vary the length 𝐿 and repeat the previous study for two other lengths to verify   2.3pt
            the 𝐿 dependence of the wire torque. Using a final graph that summarizes all
            the dependencies, determine a new value for 𝐵e , with its uncertainty.

SOLUTION:
Now the length 𝐿 is varied, for 𝐿 = 26, 12 and 8 cm.




                                          Figure B.6A: 𝐿 = 26 cm.




                                          Figure B.6B: 𝐿 = 12 cm.
                                                                          Q1-15
Experiment



                                                                                             English (Official)




                                            Figure B.6C: 𝐿 = 8 cm.
The slopes are
𝐿 = 25 cm     𝑝 = 10.6 ± 0.3 rad−1 ,
𝐿 = 12 cm     𝑝 = 6.7 ± 0.3 rad−1 ,
𝐿 = 8 cm     𝑝 = 4.6 ± 0.2 rad−1 .
So we can plot the slopes versus 𝐿 as




                                              Slopes versus 𝐿.

As expected, the slope of figure B.6D is found to be proportional to 𝐿, with a slope 𝑝′ = 27.1±1.5 rad−1 ⋅m−1 .
                                           𝑝′ 𝐶𝑓 5.1 × 10−7 × 27.1
A new value of 𝐵𝑒 is deduced from 𝐵𝑒 =          =                  ≈ 45.3 𝜇T. Relative uncertainty is given by
                                           𝑚𝑚          0.305
                                                                             Q1-16
Experiment



                                                                                            English (Official)

𝛿𝑝′ 𝛿𝐶 𝛿𝑚
    +   +   = 0.12, so
 𝑝′   𝐶   𝑚
𝐵𝑒 = 45.3 ± 5 𝜇T.


                       B.6.1. Equilibrium 2 : 5 measures or more                    0,1
                       B.6.2. 7 measures or more                                    0,1
                       B.6.3. Calculation of 𝜃𝑒𝑞 − 𝜃0 = 𝑓(sin(𝜃𝑒𝑞 − 𝜃𝑒 )) or inv.   0,1
                       B.6.4. Plot (axes, units)                                    0,1
                       B.6.5. Plot showing linearity with correct sampling          0,2
                       B.6.6. Slope for L2                                          0,1
                       B.6.7. Equilibrium 3 : 5 measures or more                    0,1
                       B.6.8. 7 measures or more                                    0,1
                       B.6.9. Calculation of 𝜃𝑒𝑞 − 𝜃0 = 𝑓(sin(𝜃𝑒𝑞 − 𝜃𝑒 )) or inv.   0,1
                       B.6.10. plot (axes, units)                                   0,1
                       B.6.11. Plot showing linearity with correct sampling         0,2
                       B.6.12. Slope for L3                                         0,1
                       B.6.13. Identification and calculation of slope versus L     0,3
                       B.6.14. Plot (axes, units)                                   0,2
                                       ′
                                      𝑝 𝐶𝑓
                       B.6.15. 𝐵𝑒 =                                                 0,1
                                      𝑚𝑚
                       B.6.16. 𝐵𝑒 ∈ [1.5; 7]10−5 T                                  0,2
                       B.6.17. 𝛿𝐵𝑒 ∈ [0.2; 0.8].10 T
                                                 −5
                                                                                    0,1


Another possible solution is to represent all the measurements at different L in the same graph, by
plotting (𝜃eq − 𝜃0 ) versus 𝐿 ⋅ sin(𝜃eq − 𝜃e ) and measure slope from there. Doing so should allow students to
earn the maximum number of points according to the grading scheme.
