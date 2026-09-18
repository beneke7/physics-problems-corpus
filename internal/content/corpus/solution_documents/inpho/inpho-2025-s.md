---
id: solution-document-inpho-2025-s
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2025_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [inpho-2025-a1, inpho-2025-a2, inpho-2025-a3, inpho-2025-a4, inpho-2025-a5]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/inpho/2025_S.pdf."
---

Indian National Physics Olympiad (INPhO)-2025
               HOMI BHABHA CENTRE FOR SCIENCE EDUCATION
                      Tata Institute of Fundamental Research
                  V. N. Purav Marg, Mankhurd, Mumbai, 400 088

                                           Solutions

Date: 02 February 2025
Time: 09:00-12:00 (3 hours)                                                     Maximum Marks: 75
Instructions                    Roll Number: rorororo - rorororo - rorororo




  1. This booklet consists of 24 pages and total of 5 questions. Write roll number at the top wherever
     asked.

  2. Booklet to write the answers is provided separately. Instructions to write the answers are on the
     Answer Booklet.



                                                       E
  3. Non-programmable scientiﬁc calculators are allowed. Mobile phones cannot be used as calcula-
     tors.




                                 CS
  4. Please submit the Answer Sheet at the end of the examination. You may retain the
     Question Paper.

                     Table of Constants
 Speed of light in vacuum
 Magnitude of electron charge e
                               c    3.00 × 108 m·s−1
                                    1.60 × 10−19 C



           HB
 Value of 1/4πϵ0
 Avogadro’s number
 Acceleration due to gravity
 Universal Gas Constant

 Boltzmann constant
 Permeability constant
                                    9.00 × 109 N·m2 ·C−2
                               NA 6.022 ×1023 mol−1
                               g
                               R
                               R
                                    9.81 m·s−2
                                    8.31 J· K−1 ·mol−1
                                    0.0821 l·atm·mol−1 ·K−1
                               kB 1.3806 × 10−23 J·K−1
                               µ0   4π × 10−7 H·m−1



                         Question Number     1    2    3    4    5    Total

                         Maximum Marks        8   14   16   22   15    75



Please note that alternate/equivalent methods and diﬀerent ways of expressing
ﬁnal solutions may exist. A correct method will be suitably awarded.


Page 2      INPhO 2025                   Questions           Last four digits of Roll No.:

1. The Flywheel Chronicles
   In the following experiment we are interested in determining the moment of inertia of a ﬂywheel.
   The free ends of the axle in a ﬂywheel assembly are placed inside grooves at both ends, to rigid
   supports provided on the wall (see diagram below). The diameter of the axle is d = 2.72 cm. The
   total work done by the axle in overcoming the friction in the two grooves per rotation is W . A
   massless string, attached to a point mass m is wound tightly in n turns (without overlap) on the
   axle. The string unwinds from the axle without slipping as the mass descends from an initial
   height h. The length of the string is adjusted such that when the mass just touches the ﬂoor, the
   string detaches from the axle.
                                                  Flywheel



                             Axle


                                                                 d

                                    m
                                                                        Rigid support
             Rigid support




                                             h
                                                         E
                                        CS
                 HB
  From the instant when the mass touches the ﬂoor (taken as t = 0), the ﬂywheel continues to
  rotate, adding another N number of rotations before coming to rest in time t = T . The ﬁgure is
  not to scale.
   (a) [5 marks] Derive an expression for the moment of inertia I of the ﬂywheel in terms of
       m, N, T , and other known parameters.

         Solution: Using conservation of energy
                                                  1      1
                                        mgh = nW + mv 2 + Iω 2                               (1.1)
                                                  2      2
         Also,
                                                       1
                                               N W = Iω 2                                    (1.2)
                                                       2
                                                        Iω 2
                                                   W =                                       (1.3)
                                                         2N
         Substituting Eq.(1.3) in Eq.(1.1), we get
                                                1        1     1
                                    mgh = n.      Iω 2 + mv 2 + Iω 2                         (1.4)
                                              2N         2     2
         Simplifying above equation we get,
                                               2mgh         md2
                                        I=          n
                                                        −       n
                                                                                             (1.5)
                                             ω2 1 + N     4 1+ N
         where ω = 4πN
                     T
         Final answers written in the form of W are also accepted.


Page 3       INPhO 2025                    Questions

   (b) [3 marks] The following data has been obtained in this experiment.

                                      m (gm)    N         T (sec)

                                      150.0     145.25    190.0

                                      200.0     200.00    225.5

                                      250.0     238.50    235.5

         Calculate the value of I for n = 16, and h = 139 cm.

          Solution: From the given data, we can calculate the respective value of the moment of
          inertia I1 , I2 , I3 are 3.99 × 105 gm-cm2 , 4.06 × 105 gm-cm2 , 3.94 × 105 gm-cm2 . The mean
          value of the moment of inertia is 4.00 × 105 gm-cm2 .




                                                     E
                                  CS
            HB


Page 4       INPhO 2025                    Questions          Last four digits of Roll No.:

2. Gearminator: Rise of the Machines

    We consider a “thought experiment” involving a DC motor and a DC generator coupled mechan-
    ically through a gearbox, operating under idealized conditions, to explore the power output and
    eﬃciency of the system (see schematic ﬁgure below). The schematic gearbox assembly is also
    shown in the ﬁgure.

                                B                                          B
      r                                                                                          εG


                                               Gearbox                                                R
+


         commutator                                                                   commutator




                                       Motor gear            E
                                                             Generator
                                                               gear



                                        CS      Gearbox




                  HB
    Both the motor and the generator have N loops of area A and rotate in a uniform magnetic ﬁeld of
    strength B. As usual, both the motor and the generator use commutators (indicated by the blue
    blocks) to reverse the direction of current in each arm every half cycle, to ensure unidirectional
    output. The generator is connected to an external resistance R, and the motor is driven by a
    constant voltage VM with an internal resistance r. The gearbox is idealized, with no energy loss
    due to friction or otherwise, and no slipping between the teeth of the gears. For a pair of meshing
    gears, as shown above, the angular speed ratio, also known as the gear ratio X, is deﬁned as:
                                                      ωM
                                                X=       ,
                                                      ωG
    where ωM and ωG are the angular velocities of the motor and the generator, respectively. Let
    ⟨PG ⟩, and ⟨PM ⟩ be the time-averaged generator output power and the time-averaged motor input
    power, respectively, over one complete cycle.
    (a) [6 marks] Derive the expression for ωG in terms of X, R, r, and the given parameters. For
        ﬁxed values of r and R, determine the expression of X for which ωG is maximum.

           Solution: First, we analyze motor equations:
           Applying voltage VM drives the motor. The current IM and and the angular speed ωM
           are determined through the following equations.

             • The circuit equation for motor with speed ωM is

                                                VM − ϵbM − IM r = 0                             (2.1)


Page 5     INPhO 2025                   Questions


              where ϵbM = N ABωM sin (ωM t) is the induced back emf. Thus, the current IM is
                                             1
                                      IM =     (VM − N BAωM sin (ωM t))                   (2.2)
                                             r
           • The magnetic torque on the coils carrying current IM is
                            τM = N IM BA sin (ωM t)                                       (2.3)
                                 1
                               =    VM N BA sin (ωM t) − N 2 B 2 A2 ωM sin2 (ωM t)        (2.4)
                                 r
         The Gearbox is massless, and there is no loss of power. Thus,
                                      τM ωM = τG ωG ⇒ τG = XτM                            (2.5)
         For generator: Gearbox drives the motor with torque τG . The current IG and and the
         angular speed ωG are determined through the following equations.
           • The circuit equation for generator with speed ωG is
                                                  ebG − IG R = 0                          (2.6)

              where ϵbG = N ABωG sin (ωG t) is the induced back emf. Thus, the current IG is
                                                  1
                                          IG =      N BAωG sin (ωG t)                     (2.7)
                                                  R


                                                    E
           • The magnetic torque on the coils carrying current IG is
                                        τG = N IG BA sin (ωG t)



                               CS            1
                                           = N 2 B 2 A2 ωG sin2 (ωG t)
                                             R
              Since there is no dissipation in the gearbox, from Eq. (2.5), we get


              From Eq. (2.8)
                                                  ⟨τG ⟩ = ⟨τM ⟩ X
                                                                                          (2.8)



                                                                                          (2.9)




          HB           2
                                                 N 2 B 2 A2 ω G
                                                ⟨τG ⟩ =
                                                      2R
              Since sin (ωt) = 1/2 over one complete cycle, and from Eq. (2.4)
                                            2VM N BA N 2 B 2 A2 ωM
                                      ⟨τM ⟩ =
                                                πr
                                                       −
                                                              2r
              Since sin (ωt) = 1/2, and ⟨sin (ωt)⟩ = 2/π over one complete cycle.
                       2
                                                                                         (2.10)



                                                                                         (2.11)


              Using Eq. (2.9), we obtain
                                       ωG    (4VM /πN BA) X     X 2 ωG
                                          =                  −                           (2.12)
                                       R             r
                                                                  r
                                            1    X2        4VM      X
                                       ωG      +       =                                 (2.13)
                                           R      r       πN BA r

                                                    4VM        1
                                          ωG =               r
                                                                                         (2.14)
                                                   πN BA    XR + X

         To maximize ωG , minimize the denominator r/RX + X. Diﬀerentiating:
                                          d   r
                                                   +X =0                                 (2.15)
                                         dX RX
                                                 r
                                             −       +1=0                                (2.16)
                                               RX 2
                                                   r
                                                     r
                                           ⇒ X=                                          (2.17)
                                                     R


Page 6       INPhO 2025                  Questions                Last four digits of Roll No.:

   (b) [3 marks] Derive the expression for the generator output power ⟨PG ⟩ in terms of X, R, r,
       and the given parameters. For ﬁxed values of r and R, determine the expression of X for
       which ⟨PG ⟩ is maximum.

          Solution: The generator output power is

                                                ⟨ϵ2G ⟩   N 2 B 2 A2 ω G
                                                                      2
                                      ⟨PG ⟩ =          =
                                                 R            2R
                                                                2
                                                              8VM
                                              ⟨PG ⟩ =                 2
                                                               r
                                                        π2R   XR + X


          To maximize ⟨PG ⟩, diﬀerentiate with respect to X and solve for X
                                                         r
                                                              r
                                                   X=                                             (2.18)
                                                              R

   (c) [5 marks] For ﬁxed values of r and R, determine the condition on X for which the eﬃciency
       η is maximum, where
                                                   ⟨PG ⟩
                                              η=         .
                                                  ⟨PM ⟩
         Calculate this maximum value of η.

          Solution: The motor input power is:                 E
                                      CS
                                ⟨PM ⟩ = ⟨VM IM ⟩

                                      =

                                      =



                                        VM
                                         r
                                          VM




                                          2
                                            r

                                                (VM − N BAωM sin (ωM t))

                                                     2
                                                VM − N BAXωG

                                                     π



                                                                    !

                                                                                                  (2.19)

                                                                                                  (2.20)

                                                                                                  (2.21)




          and     HB                  =
                                        VM
                                         r



                                         ⟨PG ⟩ =
                                                1−
                                                     8
                                                     π2




                                                   π2R
                                                           r
                                                          X2R



                                                            2
                                                          8VM
                                                           r
                                                             1
                                                               +1




                                                          XR + X





                                                                  2
                                                                                                  (2.22)




                                                                                                  (2.23)


          The eﬃciency is given by:

                                                        ⟨PG ⟩
                                                  η=                                              (2.24)
                                                        ⟨PM ⟩

          Substituting the expressions for ⟨PG ⟩ and ⟨PM ⟩, maximize η with respect to X, we get
                                                          r
                                                            r
                                               Xmax ≈ 1.52                                        (2.25)
                                                            R

          At this X, eﬃciency η is maximum. The maximum value of η can be calculated by
          substituting value Xmax in η.

                                                  ηmax ≈ 0.4                                      (2.26)


Page 7      INPhO 2025                    Questions

3. Love is in the air
   A thermodynamic cycle is performed for one mole of an ideal monoatomic gas. The representation
   of this cycle is in the shape of a “heart” in the volume (V ) – temperature (T ) graph (shown as the
   shaded area below). However, neither of the axes are provided in the graph. The graph is drawn
   to scale with 1 cm along the V -axis representing 4 litre, and 1 cm along the T -axis representing
   80 K.
   It is given that the pressure at the point X is minimum for the whole cycle, with the temperature
   and volume at this point being TX = 224 K and VX = 24 litre.




                                                       X≡ (24L, 224K)




   (a) [13 marks] Draw both the V and T axes to scale in the same diagram given in the Summary
       Answersheet. Indicate the origin by “O”. Justify your answer in the detailed answersheet. You
       are given one extra answer box in the answersheet, in case of any mistake in the ﬁrst.


Page 8     INPhO 2025                    Questions            Last four digits of Roll No.:


         Solution: We begin with the ideal gas law:
                                                P V = nRT                                      (3.1)
         Diﬀerentiating with respect to volume, V , we get:
                                            dP      dT
                                        P +V   = nR                                            (3.2)
                                            dV      dV
                                      RT    dP      dT
                                         +V    = nR                                            (3.3)
                                      V     dV      dV
                                                  dT     V 2 dP
                                             T =n    V −                                       (3.4)
                                                  dV     R dV
                                                                   dP
         At points of extreme pressure (maxima or minima), we have dV = 0. Equation (3.4) then
         simpliﬁes to:
                                                       dT
                                                T =n      V                                    (3.5)
                                                       dV
         This implies that the tangent drawn to the T -V curve at these extreme pressure points
         must pass through the origin of the T -V graph. Let’s denote the origin as point O. Point
         X represents a pressure minimum (as given), and we need to ﬁnd points where pressure
         is maximum.
         We are given the volume VX = 24 L, which scales to 6 cm on the graph, and the temper-
         ature TX = 224 K, which scales to 2.8 cm. Using these scaled values, the distance OX
         can be calculated as:
                                       q             p
                                OX = VX2 + TX2 = 62 + 2.82 ≈ 6.6 cm                           (3.6)

         From Equation (3.4), for n = 1, at point X, we have
                                                dT     TX
                                                     =                                         (3.7)
                                                dV X   VX
         The slope of the tangent at X with respect to the volume axis is given by:
                                         dT             TX   2.8
                                            = tan (θ) =    =
                                         dV             VX    6
         Thus, the angle the tangent makes with the volume axis, θ, is:

                                                    2.8
                                       θ = arctan        ≈ 25◦
                                                     6
         To draw the axes:
           1. Draw a tangent line to the curve at point X.
           2. Locate the origin (O) at a distance of 6.6 cm from point X on the tangent line. This
              means there are two possible locations for the origin, one on either side of X along
              the tangent.
           3. Draw the volume (V) axis by drawing a line passing through O that makes an angle
              of approximately 25◦ with the tangent line at X.
           4. Draw the temperature (T) axis by drawing a line perpendicular to the V axis and
              passing through the origin (O).
         Note that the axes are oriented such that no part of the cycle falls into the negative T or
         V quadrants.
         We therefore have two possible sets of axes, corresponding to the two possible origins. The
         solutions are displayed below, and either answer will be accepted. Origins are marked
         here by O1 and O2 .


Page 9   INPhO 2025   Questions




                                  ,T  pe r at ure
                                                 Tem


                                                              O1

                       Pmax


                                                25◦

                                                       e, V
                                  X
                                                    Volu
                                                         m


Page 10   INPhO 2025             Questions   Last four digits of Roll No.:




            e, T
                tur       Pmax
             era
                   p
                                                 X
                   Tem
                                                25◦
                                                             e ,V
                                                      Vo lum


                         O2


Page 11      INPhO 2025                    Questions

   (b) [3 marks] For the axes and origin you have drawn, indicate the point(s) on the graph where
       the pressure is/are maximum in the cycle by ⊗ and label it as Pmax on the curve. Determine
       the value of the maximum pressure.

          Solution: Once the axes are drawn, our next goal is to identify the point, which we call
          Pmax , where the slope of the tangent line to the curve is maximized and this tangent line
          passes through the origin. In other words, we seek the point on the T -V curve with the
          steepest tangent that extends back to the origin.
          Having located point Pmax , we can then determine its coordinates in “cm” as measured on
          our deﬁned axes. Multiplying these coordinate values by the corresponding scale factors
          for temperature and volume will give the volume and temperature in L and K respectively.
          Then we can use ideal gas law to obtain the maximum pressure on these points.
          The point Pmax where the pressure is maximum is indicated in both the possible axes.
          Exact numerical values for these parameters are provided in the table below. Answers
          within a reasonable tolerance will be considered acceptable.

                                                              Pressure value
           Origin   Coordinates (V , T )    Values (V , T )
                                                              (atm)

           O1       4.8 cm   8.0 cm        19.2 L   640.0 K   2.7 (accetable range is 2.4 to 2.8)

           O2       1.3 cm   5.4 cm        5.2 L    432.0 K   6.8 (accetable range is 6.3 to 7.5)


Page 12      INPhO 2025                   Questions                 Last four digits of Roll No.:

4. The Magnetic Black Box (MBB)
   A magnetometer is a Hall-eﬀect-based sensor that measures the magnetic ﬁeld at its location.
   In the ﬁgure below, a magnetometer is located somewhere inside a closed “magnetic black box”
   (which we shall henceforth refer to as MBB) of negligible thickness. Fig. (1) gives a top view,
   where the red rectangle depicts the MBB. The plane of the rectangle is taken as the x–y plane
   of coordinates, with the origin O taken at the top right corner. The unknown location of the
   magnetometer is denoted by the coordinates (x0 , y0 ). For example, it could be located at the
  position marked by ⊙ inside the MBB. Note that the actual location of the magnetometer
  inside the MBB may be diﬀerent from that in the ﬁgure; this is true for all subsequent ﬁgures in
  this problem as well.
                                             y
                                                      x
                                            O

                                                               w
                                                          w
                                                              S N
                                                  R
                                      MBB             Test magnet

    Figure 1: Schematic representation of the magnetic black box (MBB) and a test magnet.

  The components Bx , By and Bz of the magnetic ﬁeld measured by the magnetometer depend on
  the strength and the orientation of the magnetic dipole moment, of a magnet positioned nearby
  and the distance R between the center of the magnet and the magnetometer. The eﬀect of the
  Earth’s magnetic ﬁeld is neglected throughout this problem.
  Vanya is performing an experiment using the MBB. She has to ﬁrst locate the exact position of
  the magnetometer inside the MBB. She has a cubical test magnet of side length w = 10 mm (see
  Fig. (1)) and unknown dipole strength P⃗ .
  She places the MBB on a wooden table. Then she records the magnetic ﬁeld values displayed by
  the magnetometer as the test magnet is moved either parallel to the y-axis while keeping x ﬁxed
  (vertical scan) or parallel to the x-axis while keeping y ﬁxed (horizontal scan) as shown in
  Fig. (2). The magnitudes of the distances, rx and ry , measured from the center of the magnet,
  are also shown in the ﬁgure.
  For each scan, Vanya also tries diﬀerent orientations of the magnet by aligning the dipole moment
  vector P⃗ either parallel or anti-parallel to the y-axis or x-axis. The diﬀerent orientations (I to IV)
  are shown in Fig. (3). During the experiment, assume that the magnetometer location and the
  magnet’s center are at the same height (i.e., their z-coordinates are always the same).
  The graphs in Fig. (4) display the variation of the magnetic ﬁeld Bx for four of the vertical and
  horizontal scans (denoted by A, B, C, D) with certain combinations of the orientations.
   (a) [7 marks] Based on the above plots, identify which orientations (I-IV) these curves belong
       to. To indicate your answer, ﬁll in the table in the answersheet. Determine the coordinates
       (x0 , y0 ) of the magnetometer’s position. You must justify your answers.

          Solution: Let us understand this by an example when conducting a horizontal scan with
          the magnet in orientation IV, the behavior of the Bx component of the magnetic ﬁeld
          varies as follows:


Page 13       INPhO 2025                       Questions

                                                                  rx                           rx
                                               SN
                   y                       y                               y               y
                                                    ry
                              x                          SN                                         SN
                                                                               x                    x
                  O                        O        x                  O                   O
                              ry

                          SN

            Vertical scan (orientation IV)                       Horizontal scan (orientation IV)
                                               S                   rx                        rx
                                               N                        y
                      y                    y        ry                                   y
                                                             S                                      S
                              x                              N                                      N
                                                                               x                    x
                  O                        O       x                   O                   O
                              ry

                          S
                          N

             Vertical scan (orientation II)              Horizontal scan (orientation II)

Figure 2: Some of the conﬁgurations of the vertical and horizontal scans as seen from the top. See
Fig. (3) for the explanation of orientations.

                                       y       N         S
                                                                       N S         S   N
                                               S         N
                                           x   I         II            III         IV
                                   O
                          Figure 3: Diﬀerent orientations of the test magnet




             1. The magnetometer is to the right of the magnet. The magnetic ﬁeld lines indicate
                that Bx is directed to the right, corresponding to a positive Bx value (see ﬁg.(a)).

             2. As the magnet moves rightward toward the center of the magnet, Bx decreases,
                passing through zero (indicating a change in direction).

             3. When the magnetometer aligns with the center of the magnet, Bx reaches its max-
                imum negative value, pointing entirely to the left (see ﬁg.(b)).

             4. Bx increases from its negative peak, crossing zero again.

             5. With the magnetometer to the left of the magnet, Bx is directed to the right once
                more, yielding a positive value (see ﬁg.(c)).


Page 14              INPhO 2025                Questions           Last four digits of Roll No.:

                                              Horizontal Scan (ry ﬁxed)

           2,000                                                                                   A
                                                                                                   B
           1,000


Bx (µT)
               0


          −1,000


               −8       −7      −6       −5       −4       −3      −2       −1        0        1       2
                                                         rx (cm)
                                               Vertical Scan (rx ﬁxed)
           2,000
                                                                                                   C
                                                                                                   D

           1,000

Bx (µT)
               0



          −1,000
               −5       −4      −3       −2       −1       0        1        2        3        4       5
                                                         ry (cm)

                                                   Figure 4



               This progression results in a Bx vs. rx plot that starts with a positive value at (a),
               descends to a negative peak at (b), and returns to a positive value at (c). This is quali-
               tatively depicted in the ﬁgure below.



                                  Bx
               (a)                                 (c)
                                                    rx


                                  (b)



               Orientation III will produce a graph that is the exact opposite of the previous one, with
               the signs of Bx reversed, as the dipole vector is now aligned in the -x direction.


               Let us consider another example with Orientation I, as shown in the ﬁgure below.


Page 15      INPhO 2025                     Questions




          In this case, Bx is positive when the magnet is to the right of the magnetometer (a), zero
          when the center of the magnet aligns with the magnetometer (b), and negative (pointing
          left) when the magnet is to the left of the magnetometer (c). This is qualitatively depicted
          in the ﬁgure below.

                  (a)                 (c)
                                               rx


                             (b)

          Orientation II will be just the opposite of Orientation I.
          Similarly, we can analyze the vertical scan graphs. In this case, Bx will vary like By in
          the horizontal scan. Therefore, you can change the axis symbols in the diagrams above
          to reﬂect this adjustment for the vertical scan.
          Considering the above analysis, we can summarize the results in the table below.

           Scan               Plot   Orientation

                              A      II
           Horizontal scan
                              B      III

                              C      I
           Vertical scan
                              D      IV
          Magnetometer coordinates:
          The magnet’s centre aligns with the magnetometer when the graph B peaks during the
          horizontal scan. This happens at rx = −2 cm. At this position, the magnet’s centre is
          located at −2 cm, which corresponds to the x-coordinate of the magnetometer. Similarly,
          the vertical scan provides the y-coordinate of the magnetometer, which is found to be
          -1 cm.
           Coordinates of magnetometer are: (-2 , -1)cm


   (b) Vanya is given two cuboidal magnetic sets M1 and M2, each constructed using two identical
       cubic magnets (of side length w = 10 mm). In set M1, two magnets, each of dipole moment
       P ′ , are joined in an attractive conﬁguration. In set M2, the magnets are joined in a repulsive
       conﬁguration using a strong adhesive. Thus, each magnetic set has a length of 2w (as shown


Page 16         INPhO 2025                          Questions                  Last four digits of Roll No.:

          in Fig. (5)).
                               w            w                                      w            w

                      w                                                   w
                           S       N    S       N                              S       N    N       S
                 X                                          X’        X                                      X’

                                       M1                                                  M2
                          Figure 5: Magnetic sets M1 and M2. Here w = 10mm.

          Vanya aligns the central axis (XX’ in Fig. (5)) of one magnetic set M1 or M2 such that the
          central axis passes through the magnetometer and is parallel to the x-axis. A representation
          of the setup is shown in Fig. 6. By keeping the y-coordinate ﬁxed at y0 , Vanya moves the
                                                        y


                                                                     x
                                                    O




                                                                 R

                                                                 X            M1 or M2              X’

                                                                     dx       w        w

                           Figure 6: Setup for measuring the dipole moment.

          magnetic set parallel to the x-axis. The distance from the magnetometer to the midpoint of
          the magnetic set is R. For each position, she measures the distance dx (the distance from the
          face of the MBB to the nearest edge of the magnetic set) and the corresponding magnetic
          ﬁeld component, Bx .
            i. [5 marks] For the case of R ≫ w, obtain expressions for the net magnetic ﬁeld B at the
               magnetometer due to M1 and M2 in terms of R, w, P ′ , and other constants. You may
               assume that each individual magnet can be modelled as a pair of magnetic monopoles
               separated by a distance w.

                Solution: Derivation for M1:
                                            2w

                                        w
                                                                                                         P
                                                    S       N        S    N


                                                   M1            R
                For M1, if we consider the pole strength to be m for each pole, the magnetic ﬁeld at
                point P , which is at a distance r from the center of the magnet, can be expressed as:


Page 17       INPhO 2025                 Questions



                                   µ0        m       m   m      m
                                B=      −         +    −   +
                                   4π     (R + w)2 R2 R2 (R − w)2

                                   µ0 m          w  −2     w  −2
                                B=         − 1+       + 1−
                                   4πR2          R         R
                                           w
              We can use the approximation R ≪ 1 and simplify the expression up to the third
              order term in w/R:


                                 µ0 m             2w 3w2                2w 3w2
                             B≈−               1−   + 2            − 1+   + 2          (4.1)
                                 4πR2             R  R                  R  R


                                                            µ0 P ′
                                                    B=4                                (4.2)
                                                            4πR3

              where P ′ = mw is the dipole moment of the individual magnets in M1.
              Similarly for M2:
                                             2w

                                   w                                          P
                                         S     N    N   S


                                              M2            R
              the magnetic ﬁeld at P due to the individual poles can be written as:

                                     µ0        m        m     m        m
                               B=         −          +     +      −
                                    4π      (R + w)2 R2 R2 (R − w)2

                                     µ0 m           w  −2             w  −2
                               B=            − 1+         +2− 1−
                                    4πR2            R                 R

              Keeping only up to the (w/R)3 terms:


                              µ0 m           2w 3w2       2w 3w2
                           B=           − 1−   + 2 +2− 1+   + 2                        (4.3)
                              4πR2           R  R         R  R


                                                            µ0 P ′ w
                                                   B = −6                              (4.4)
                                                            4πR4

              where P ′ is the dipole moment of the individual magnets used in M2 .

          ii. [10 marks] One set of Vanya’s data is presented in the table below.


Page 18      INPhO 2025                      Questions          Last four digits of Roll No.:


                                     dx (cm)     Bx (µT)    dx (cm)    Bx (µT)

                                       2.1        -1359        3.1       -646

                                       2.3        -1168        3.3       -563

                                       2.5        -1001        3.5       -493

                                       2.7        -855         3.7       -447

                                      2.9         -743      3.9       -398
            Plot a suitable linear graph to analyze the data, and from the graph, identify whether
            the data belongs to M1 or M2. Justify your answer. From the same linear plot (or a
            diﬀerent one), calculate P ′ of the individual magnets used in constructing the magnetic
            set.


          Solution: Linearizing the data for M2:
          If we take the logarithm of Eqs. (4.2) and (4.4), we obtain:
                                                             ′
                                                            4P µ0
                                      ln |B| = 3 ln R + ln          ,                           (4.5)
                                                              4π
                                                             ′
                                                            6P wµ0
                                      ln |B| = 4 ln R + ln             .                        (4.6)
                                                               4π

          Thus, a plot of ln |B| vs. ln R will be linear, and the slope of this plot will indicate
          whether the dataset corresponds to M1 or M2.
          Updated dataset after adjusting the lengths
           R = |x0 | + dx + w (cm)    |B| (µT)     ln R     ln B

                      5.1               1359       -2.975   -6.60

                      5.3               1168       -2.937   -6.75

                      5.5               1001       -2.900   -6.91

                      5.7                855       -2.864   -7.06

                      5.9                743       -2.830   -7.20

                      6.1                646       -2.797   -7.34

                      6.3                563       -2.764   -7.48

                      6.5                493       -2.733   -7.62

                      6.7                447       -2.703   -7.71

                      6.9                398       -2.673   -7.83
          The graph is plotted on the Pg. 19.
          The slope of the graph = 4.08.
          Which indicates that the dataset corresponds to M2.
                                            ′
          The intercept of the graph is ln 6P4πwµ0 = 18.74 ⇒ P ′ = 1.21 A · m2 .
          The acceptable range of P ′ is: 1.00 − 2.00 A · m2


Page 19   INPhO 2025   Questions


Page 20   INPhO 2025   Questions   Last four digits of Roll No.:


Page 21      INPhO 2025                        Questions

5. Metalens
   A metasurface is a two-dimensional, ultra-thin optical structure consisting of an array of nanospaced
   optical nano-elements (also known as meta-atoms) on a ﬂat surface (typically an ultra-thin glass
   plate). The primary function of the nano-elements is to locally introduce a phase shift ϕ (⃗r) to the
   wave, incident at position ⃗r. This function, ϕ (⃗r), is called the phase proﬁle of the metasurface.
   Metalens has a circular metasurface with a circularly symmetric phase proﬁle function, ϕ(r), which
   depends on the distance r of the point from the center of the metalens (see ﬁgure below). This
   type of metalens can be used for focusing incoming parallel rays to a point. Unlike normal lenses,
   the metalens will look just like an ultrathin circular disc.
                                                            x




                                                                         z

                                               y            r

                                          Metalens

   Consider two homogeneous media of refractive indices n1 and n2 separated by a metalens as shown
   in the ﬁgure below. Suppose a beam of plane wave is incident at point Q (at distance r from the
   pole P ) on the metasurface at an angle of θ1 from medium 1. Assume that the rays falling at Q
   are in the plane containing P Q and the axis of the lens (x-z plane). These rays will be refracted
   at an angle θ2 in the medium 2. The angle of refraction θ2 depends on r. Thus, the modiﬁed law
   of refraction for the metasurface can be written as

                                         n1 sin θ1 − n2 sin θ2 = f (r)

   Similarly, the rays falling at Q′ , at a distance r′ , will be refracted by an angle θ2′ .
                                                        x



                                                                   θ2′
                                                   θ1       Q′
                                          r′
                            n1                                               n2
                                                        P                           z

                                          r
                      Medium 1                                     θ2        Medium 2
                                                   θ1       Q



                                                        Metalens

   (a) [8 marks] Find f (r) in terms of ϕ(r) and ko , the wave number of the incoming wave in a
       vacuum. To determine f (r), assume two rays in x-z plane incident at an angle θ1 at two
       inﬁnitesimally close points, r and r + ∆r, are refracted by the same angle θ2 . You don’t need
       to derive the exact functional form of ϕ(r) for this part.

          Solution:


Page 22      INPhO 2025                      Questions           Last four digits of Roll No.:



                                                                                    x
            O
                                             B

                                θ1                        θ1
                                                               B’           z
                                         A
                     r                           ∆r

                                        θ2                     θ2
                                              A’




          Consider two rays, which are close to each other, incident locally on metalens. The ray
          OA is incident at an angle θ1 at r and exits in medium 2 at an angle θ2 . Similarly the
          ray BB ′ exits in medium 2 at an angle of θ2 from r + ∆r. The rays being very close to
          each other have a plane wavefront. Let wavefront AB propagate to A’B’ in time t. Let
          ψA , ψB , ψA′ and ψB ′ be phases at points A, B, A′ and B ′ respectively. Then

                                     ψA′ − ψA = k2 ∆r sin θ2 − ωt + ϕ (r)
                                     ψB ′ − ψB = k1 ∆r sin θ1 − ωt + ϕ (r + ∆r)

          Since these two phase diﬀerences must be equal, we get

                         k2 ∆r sin θ2 − k1 ∆r sin θ1 = ϕ (r + ∆r) − ϕ (r)
                                                        1 ϕ (r + ∆r) − ϕ (r)   1 dϕ (r)
                              n2 sin θ2 − n1 sin θ1 =                        →
                                                        k0       ∆r            k0 dr

          Alternate solution:
          Time interval for the wavefront to travel from A to A′ is equal to the time taken by the
          wavefront to travel from B to B ′ .

                                              τAA′ + τA′ = τBB ′ + τB ′                          (5.1)

          where τBB ′ is the time it takes for point B on the wavefront (traveling at speed v1 )
          to reach point B’ , and τAA′ is the time it takes the transmitted portion of that same
          wavefront (traveling a speed v2 ) to reach point A’ from point A. The time delays due to
          the metasurface at points A and B’ are τA and τB , respectively. From ﬁgure
                                                       1
                                                 τAA′ = ∆rn2 sin θ2
                                                       c
                                                        1
                                                 τBB ′ = ∆rn1 sin θ1
                                                         c
                                                        ϕA    ϕ(r)
                                                  τA =      =
                                                        cko   cko
                                                ϕA    ϕ(r + ∆r)
                                              τB′ = =
                                                cko      cko
          Substituting above terms in Eq.5.1, we get
                                                   Φ(r)               Φ(r + ∆r)
                                     ∆r sin θ2 +        = ∆r sin θ1 +
                                                    ko                    k0


Page 23      INPhO 2025                         Questions


          Simplifying:
                                               Φ(r + ∆r) − Φ(r)   1 dΦ
                                                                =
                                                     ∆r           k0 dr
          This gives the relation:
                                               1 dΦ
                                                     = n2 sin θ2 − n1 sin θ1
                                               k0 dr


   (b) [4 marks] Derive an expression for the phase proﬁle ϕ(r), to convert a plane wavefront to
       spherical wavefront, with light being focused to a point F on the axis (see ﬁgure below),
       which is at a distance f from the pole P.
                                                      x




                               n1                                                  n2
                                                                                        z
                                                      P                      F



                                                                   f


                                                Metalens


          Solution: From the previous part
                                                                         1 dϕ
                                               n2 sin θ2 − n1 sin θ1 =
                                                                         ko dr
          From the above
                         ﬁgure,
                                the ray arriving at r (with θ1 = 0) must bend by an angle
          θ2 = sin−1     √ r         . Thus,
                          f 2 +r 2

                                                    n r        1 dϕ
                                                 p 2       −0=
                                                    2   2
                                                  (f + r )     ko dr

          Simplifying above equation, we get
                                                              p
                                               ϕ(r) = ±k2 (    (r2 + f 2 ) − f )

          where k2 = ko n2

   (c) [3 marks] Consider a metalens whose phase proﬁle is obtained in part (b). For the paraxial
       approximation, derive an expression for the lens equation, having object distance u and image
       distance being v, with focal length f (see ﬁgure below).

          Solution: We know that
                                                                         1 dϕ
                                               n2 sin θ2 − n1 sin θ1 =
                                                                         ko dr
          For paraxial rays, we can use small angle approximation, sin θ1 = r/u and then above


Page 24      INPhO 2025                  Questions               Last four digits of Roll No.:

                                                x




                                                                         n2
                          n1
                                                                                   z
                                                P



                                        u                   v


                                        Metalens


          equation becomes
                                                                1 dϕ
                                            n2 θ 2 − n1 θ 1 =
                                                                ko dr
          We know that


          For paraxial approximation, we get
                                            1 dϕ
                                            k0 dr
                                                  =p
                                                      n2 r
                                                            E
                                                    (r2 + f 2 )




                                      CS
                                       1 dϕ
                                       k0 dr

          Using these approximations, we get
                                             =p
                                                 n2 r
                                               (r2 + f 2 )


                                               n1 n2
                                                 +   =
                                                       n2
                                                           ≈ n2
                                                                r
                                                                f




                 HB                            u   v
          If n1 = n2 , then the above equation becomes

                                                    1 1
                                                       f



                                                     + =
                                                    u v
                                                         1
                                                         f
                                                                                                 (5.2)




                      **** END OF THE QUESTION PAPER ****
