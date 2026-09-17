---
id: solution-document-ipho-2015-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2015/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2015-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2015/T2_S.pdf."
---

Theoretical Task 2 (T-2) : Solutions                                        1 of 9

                                The Extremum Principle1

A. The Extremum Principle in Mechanics

Consider a horizontal frictionless x-y plane
shown in Fig. 1. It is divided into two regions,
I and II, by a line AB satisfying the equation
x = x1 . The potential energy of a point parti-
cle of mass m in region I is V = 0 while it is
V = V0 in region II. The particle is sent from
the origin O with speed v1 along a line making
an angle θ1 with the x-axis. It reaches point P
in region II traveling with speed v2 along a line
that makes an angle θ2 with the x−axis. Ignore
gravity and relativistic effects in this entire task
T-2 (all parts).                                                          Figure 1

(A1) Obtain an expression for v2 in terms of m, v1 and V0 .                                                  [0.2]

       Solution:
       From the principle of Conservation of Mechanical Energy
                                            1 2 1 2
                                             mv = mv + V0
                                            2 1 2 2
                                                           2V0 1/2
                                             v2 = (v12 −      )
                                                            m


(A2) Express v2 in terms of v1 , θ1 and θ2 .                                                                 [0.3]

       Solution:
       At the boundary there is an impulsive force (∝ dV /dx) in the −x direction. Hence
       only the velocity component in the x−direction v1x suffers change . The component in
       the y−direction remains unchanged. Therefore
       v1y = v2y
       v1 sin θ1 = v2 sin θ2

                                            R
We define a quantity called action A = m v(s) ds, where ds is the infinitesimal length along
the trajectory of a particle of mass m moving with speed v(s). The integral is taken over the
path. As an example. for a particle moving with constant speed v on a circular path of radius
R, the action A for one revolution will be 2πmRv. For a particle with constant energy E, it can
be shown that of all the possible trajectories between two fixed points, the actual trajectory is
the one on which A defined above is an extremum (minimum or maximum). Historically this
is known as the Principle of Least Action (PLA).
   1
    Manoj Harbola (IIT-Kanpur) and Vijay A. Singh (ex-National Coordinator, Science Olympiads) were the
principal authors of this problem. The contributions of the Academic Committee, Academic Development Group
and the International Board are gratefully acknowledged.
                       Theoretical Task 2 (T-2): Solutions                                  2 of 9

(A3) PLA implies that the trajectory of a particle moving between two fixed points in a region
     of constant potential will be a straight line. Let the two fixed points O and P in Fig. 1
     have coordinates (0,0) and (x0 ,y0 ) respectively and the boundary point where the particle
     transits from region I to region II have coordinates (x1 ,α). Note x1 is fixed and the action
     depends on the coordinate α only. State the expression for the action A(α). Use PLA to
     obtain the the relationship between v1 /v2 and these coordinates.                               [1.0]

       Solution:
       By definition A(α) from O to P is
                                  q             p
                       A(α) = mv1 x21 + α2 + mv2 (x0 − x1 )2 + (y0 − α)2
       Differentiating w.r.t. α and setting the derivative of A(α) to zero

                                v1 α                v2 (y0 − α)
                              2     2 1/2
                                          −                               =0
                            (x1 + α )       [(x0 − x1 )2 + (y0 − α)2 ]1/2

                                     v1       (y0 − α) (x21 + α2 )1/2
                                 ∴      =
                                     v2   α [(x0 − x1 )2 + (y0 − α)2 ]1/2
       Note this is the same as A2, namely v1 sin θ1 = v2 sin θ2 .



B. The Extremum Principle in Optics

A light ray travels from medium I to medium
II with refractive indices n1 and n2 respectively.
The two media are separated by a line parallel
to the x-axis. The light ray makes an angle i1
with the y-axis in medium I and i2 in medium II
(see Fig. 2). To obtain the trajectory of the ray,
we make use of another extremum (minimum or
maximum) principle known as Fermat’s princi-
ple of least time.
                                                                       Figure 2

(B1) The principle states that between two fixed points, a light ray moves along a path such
     that the time taken between the two points is an extremum. Derive the relation between
     sin i1 and sin i2 on the basis of Fermat’s principle.                                           [0.5]

       Solution:
       The speed of light in medium I is c/n1 and in medium II is c/n2 ,
       where c is the speed of light in vacuum. Let the two media be separated
       by the fixed line y = y1 . Then time T (α) for light to travel from origin
       (0,0) and (x0 ,y0 ) is
                                   q                   p
                       T (α) = n1 ( y12 + α2 )/c + n2 ( (x0 − α)2 + (y0 − y1 )2 )/c
                       Theoretical Task 2 (T-2): Solutions                               3 of 9


       Differentiating w.r.t. α and setting the derivative of T (α) to zero

                                n1 α                n2 (y0 − α)
                              2     2 1/2
                                          −                               =0
                            (y1 + α )       [(x0 − α)2 + (y0 − y1 )2 ]1/2

                                        ∴ n1 sin i1 = n2 sin i2

       [Note: Derivation is similar to A3. This is Snell’s law.]


     Shown in Fig. 3 is a schematic sketch of the
     path of a laser beam incident horizontally on
     a solution of sugar in which the concentration
     of sugar decreases with height. As a conse-
     quence, the refractive index of the solution also
     decreases with height.                                                Figure 3
(B2) Assume that the refractive index n(y) depends only on y. Use the equation obtained in B1
     to obtain the expresssion for the slope dy/dx of the beam’s path in terms of n0 at y = 0
     and n(y).                                                                                    [1.5]

       Solution:
       From Snell’s law n0 sin i0 = n(y) sin i
                       dy
       Then,              = − cot i
                       dx

                                                         n(y)
                                        n0 sin i0 = r
                                                          dy 2
                                                     1+(     )
                                                          dx
                                             s           2
                                       dy        n(y)
                                          =−                 −1
                                       dx       n0 sin i0


(B3) The laser beam is directed horizontally from the origin (0,0) into the sugar solution at a
     height y0 from the bottom of the tank as shown. Take n(y) = n0 − ky where n0 and k
     are positive constants.  Obtain an expression for x in terms of y and related Rquantities.
                       sec θdθ = ln(sec θ + tan θ) + constant sec θ = 1/ cos θ or √xdx
                     R
     You may use:                                                                        2 −1 =
            √
                2
     ln(x + x − 1) + constant.                                                                    [1.2]

       Solution:
                                   Z                              Z
                                               dy
                                       r                 =−           dx
                                          n0 − ky 2
                                        (           ) −1
                                          n0 sin i0


       Note i0 = 90o so sin i0 = 1.
                      Theoretical Task 2 (T-2): Solutions                              4 of 9


       Method I We employ the substitution

                                              n0 − ky
                                           ξ=
                                                  n0
                                      Z dξ(− n0 )     Z
                                        p    k    = − dx
                                          ξ2 − 1

       Let ξ = sec θ. Then

                                   n0
                                      ln(sec θ + tan θ) = x + c
                                   k
       Or METHOD II
       We employ the substition

                                              n0 − ky
                                           ξ=
                                                  n0
                                      Z dξ(− n0 )     Z
                                        p    k    = − dx
                                          ξ2 − 1
                                              r               !
                          n0      n0 − ky         n0 − ky 2
                         − ln             +     (        ) − 1 = −x + c
                          k          n0              n0




       Now continuing
       Considering the substitutions and boundary condition, x = 0 for y = 0 we obtain that
       the constant c = 0.
       Hence we obtain the following trajectory:
                                                  r                !
                                  n0    n0 − ky      n0 − ky 2
                             x=      ln          + (          ) −1
                                  k        n0           n0



(B4) Obtain the value of x0 , the point where the beam meets the bottom of the tank. Take y0
     = 10.0 cm, n0 = 1.50, k = 0.050 cm−1 (1 cm = 10−2 m).                                      [0.8]

       Solution:
       Given y0 = 10.0 cm.     n0 = 1.50      k = 0.050 cm−1
       From (B3)
                                                                       !1/2 
                                                               2
                             n0  n0 − ky               n0 − ky
                        x0 =   ln           +                          −1   
                             k       n0                    n0

       Here y = −y0
                       Theoretical Task 2 (T-2): Solutions                                  5 of 9


                                     "                               1/2 #
                                                                 2
                                                      
                               n0     (n0 + ky0 )     (n0 + ky0 )
                          x0 =    ln              +               −1
                               k          n0              n20
                                                             !1/2 
                                                   2
                                           2         2
                                = 30 ln      +            −1      
                                          1.5       1.5
                                                  "    1/2 #
                                                  4     7
                                         = 30 ln    +
                                                  3     9
                                                           
                                                    4
                                          = 30 ln     + 0.88
                                                    3
                                              = 24.0 cm




C. The Extremum Principle and the Wave Nature of Matter

We now explore between the PLA and the wave nature of a moving particle. For this we
assume that a particle moving from O to P can take all possible trajectories and we will seek
a trajectory that depends on the constructive interference of de Broglie waves.

(C1) As the particle moves along its trajectory by an infinitesimal distance ∆s, relate the change
     ∆φ in the phase of its de Broglie wave to the change ∆A in the action and the Planck
     constant.                                                                                       [0.6]

       Solution:
       From the de Broglie hypothesis

                                           λ → λdB = h/mv

       where λ is the de Broglie wavelength and the other symbols have their usual meaning
                                                      2π
                                             ∆φ =        ∆s
                                                       λ
                                                2π
                                              =    mv∆s
                                                 h
                                                  2π∆A
                                               =
                                                    h
                        Theoretical Task 2 (T-2): Solutions                          6 of 9

(C2)                                                                                          [1.2]
       Recall the problem from part A where the particle
       traverses from O to P (see Fig. 4). Let an opaque
       partition be placed at the boundary AB between the
       two regions. There is a small opening CD of width
       d in AB such that d  (x0 − x1 ) and d  x1 .
       Consider two extreme paths OCP and ODP such
       that OCP lies on the classical trajectory discussed in
       part A. Obtain the phase difference ∆φCD between                  Figure 4
       the two paths to first order.

        Solution:
                               y             I                  A II
                                                                         P

                                                         D
                                                    E               F

                                                         C          θ2
                                              θ1                B
                                O                         x1             x
        Consider the extreme trajectories OCP and ODP of (C1)
        The geometrical path difference is ED in region I and CF in region II.
        This implies (note: d  (x0 − x1 ) and d  x1 )
                                              2πd sin θ1 2πd sin θ2
                                     ∆φCD =             −
                                                 λ1         λ2

                                         2πmv1 d sin θ1 2πmv2 d sin θ2
                                   ∆φCD =                −
                                               h                   h
                                           md
                                      = 2π    (v1 sin θ1 − v2 sin θ2 )
                                           h
                                       =0       (from A2 or B1)

        Thus near the clasical path there is invariably constructive interference.
                       Theoretical Task 2 (T-2): Solutions                                7 of 9

D. Matter Wave Interference

Consider an electron gun at O which di-
rects a collimated beam of electrons to a
narrow slit at F in the opaque partition
A1 B1 at x = x1 such that OFP is a straight
line. P is a point on the screen at x = x0
(see Fig. 5). The speed in I is v1 = 2.0000
× 107 m s−1 and θ = 10.0000◦ . The poten-
tial in region II is such that the speed v2 =
1.9900 × 107 m s−1 . The distance x0 − x1
is 250.00 mm (1 mm = 10−3 m). Ignore
electron-electron interaction.



                                                                     Figure 5

(D1) If the electrons at O have been accelerated from rest, calculate the accelerating potential
     U1 .                                                                                          [0.3]

       Solution:
                                                        1
                                                qU1 =     mv 2
                                                        2

                                         9.11 × 10−31 × 4 × 1014
                                     =                           J
                                                    2
                                         = 2 × 9.11 × 10−17 J
                                             2 × 9.11 × 10−17
                                         =                    eV
                                               1.6 × 10−19
                                   = 1.139 × 103 eV (w 1100 eV )
                                         U1 = 1.139 × 103 V

(D2) Another identical slit G is made in the partition A1 B1 at a distance of 215.00 nm (1 nm
     = 10−9 m) below slit F (Fig. 5). If the phase difference between de Broglie waves ariving
     at P from F and G is 2 π β, calculate β.                                                      [0.8]



       Solution: Phase difference at P is
                                                2πd sin θ 2πd sin θ
                                    ∆φP =                −
                                                  λ1        λ2

                                                     md
                                    = 2π(v1 − v2 )      sin 10◦ = 2πβ
                                                     h

                                                 β = 5.13
                      Theoretical Task 2 (T-2): Solutions                                8 of 9

(D3) What is is the smallest distance ∆y from P at which null (zero) electron detection maybe
     expected on the screen? [Note: you may find the approximation sin(θ + ∆θ) ≈ sin θ +
     ∆θ cos θ useful]                                                                             [1.2]

       Solution:
                                   y        I             A1 II
                                                                      P
                                                      F
                                                             215 nm

                                                      G

                                                        B1
                                    O                  x1                 x

       From previous part for null (zero) electron detection ∆φ = 5.5 × 2π

                                        d sin θ mv2 d sin(θ + ∆θ)
                                ∴ mv1          −                  = 5.5
                                           h             h
                                   mv1 d sin θ
                                                − 5.5
               sin(θ + ∆θ) =             h
                                          mv2 d
                                             h
                                   v1          h 5.5
                             =         sin θ −
                                   v2          m v2 d
                                     2                             5.5
                             =           sin 10◦ −
                                   1.99            1374.78 × 1.99 × 107 × ×2.15 × 10−7
                             =     0.174521 − 0.000935
       This yields ∆θ = −0.0036◦

       The closest distance to P is
                                ∆y =      (x0 − x1 )(tan(θ + ∆θ) − tan θ)
                                   =      250(tan 9.9964 − tan 10)
                                   =      −0.0162mm
                                   =      −16.2µ m


       The negative sign means that the closest minimum is below P.
       Approximate Calculation for θ and ∆y
       Using the approximation sin(θ + ∆θ) ≈ sin θ + ∆θ cos θ
       The phase difference of 5.5 × 2π gives
                                d sin 10◦       d(sin 10◦ + ∆θ cos 10◦ )
                          mv1             − mv2                          = 5.5
                                    h                      h

       From solution of the previous part
                                        d sin 10◦       dsin10◦
                                  mv1             − mv2         = 5.13
                                            h              h
                       Theoretical Task 2 (T-2): Solutions                                 9 of 9


       Therefore
                                            d∆θ cos 10◦
                                      mv2               = 0.3700
                                                h
       This yields ∆θ ≈ 0.0036◦
       ∆y = −0.0162 mm = −16.2µm as before



(D4) The electron beam has a square cross section of 500 nm × 500 nm and the setup is 2 m
     long. What should be the minimum beam flux density Imin (number of electrons per unit
     normal area per unit time) if, on an average, there is at least one electron in the setup at
     a given time?                                                                                  [0.4]

       Solution: The product of the speed of the electrons and number of electron per unit
       volume on an average yields the intensity.
       Thus N = 1 = Intensity × Area × Length/ Electron Speed
       = Imin × 0.25 × 10−12 × 2/2 × 107
       This gives Imin = 4× 1019 m−2 s−1

     R. Bach, D. Pope, Sy-H Liou and H. Batelaan, New J. of Physics Vol. 15, 033018 (2013).
