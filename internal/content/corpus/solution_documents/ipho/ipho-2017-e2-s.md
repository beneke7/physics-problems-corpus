---
id: solution-document-ipho-2017-e2-s
source: ipho
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2017/E2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2017/E2_S.pdf."
---

Experimental
                            E2. Marking Scheme & Solution                Question            1
                           Student Code
                                                                         page 1 of 7


                     Parallel Dipole Line Magnetic Trap for
                   Earthquake & Volcanic Sensing (10 points)

       A. BASIC CHARACTERISTICS OF PDL TRAP
         1. Determination of the magnet's magnetization (M) (2.5 pts)
Quest                               Answer                                           Marks
 ion
 A.1    Record zero offset (B0) of the Teslameter without any magnet 0.08 pts range (-10 mT to
 0.1    nearby. Subtract subsequent field measurement with this value 10 mT)
 pts
        Example from a Teslameter unit: B0 = 0.86 mT                      Correct unit: 0.02 pts

A.2     Measure magnetic field B vs. x in the near field region (7  x
1.15     16 mm). Where x is the position measured from the center of     Correct label and
pts     the magnet. Record and plot your result on the answer sheet.      unit for data: 0.1 pts

                                                                          Number of correct data
        x0 = 4 mm, B0=0.86 mT. x is measured from surface. B =
                                                                           for x <= 16 mm:
        Braw - B0                                                         0.05 pts for each correct
                                                                          data, max 0.45 pts
         x        X         Braw      B         ln(x)     ln(B)
         (mm)      (mm)      (T)       (T)       x in m    B in T

         3         7         0.1576    0.1567     -4.962    -1.853
         4         8         0.1186    0.1177     -4.828    -2.139
         5         9         0.0951    0.0942     -4.710    -2.362
         6         10        0.0785    0.0776     -4.605    -2.556
         7         11        0.0657    0.0648     -4.510    -2.736
         8         12        0.0579    0.0570     -4.423    -2.864
         9         13        0.0445    0.0436     -4.343    -3.132
         10        14        0.0371    0.0362     -4.269    -3.318
         12        16        0.0321    0.0312     -4.135    -3.466

        Plot:
                                                                          Plot:
                                                                          -Correct axis label and unit:
                                                                          0.05 pts

                                                                          - Using around 75% of plot
                                                                          area: 0.05 pts

                                                                          -For each correct data
                                                                          point: 0.05 pts, max. 0.4 pts

                                                                          -Adding trendline: 0.1 pts
                                                                              Experimental
                                   E2. Marking Scheme & Solution              Question              1
                                   Student Code
                                                                              page 2 of 7


A.3         Use your experimental data to determine the value of the            Obtaining p from graph:
0.75        exponent p.                                                         0.05 pts
pts                                                  m 1                       Obtaining p from linear
            Linear regression (LR) y = a + b x : B                            regression: 0.1 pts
                                                    2π L xp
                                              m                              Result:
            ln( B)  a  p ln x where a  ln    .                            p = 1.8 - 2.2 : 0.65 pts
                                              2πL                             p = 1.6 - 2.4 : 0.35 pts
            LR yields : a = -11.765 and b = -1.997
            The power exponent:                                                 Result with wrong sign:
            p = -b = 2.0                                                        p = (-1.8) – (-2.2) : 0.4pts
                                                                                p = (-1.6) – (-2.4) :0.1pts
            Note that this is in very good agreement with the exact result:
            at short distance (x < L) a diametric (or a dipole line) magnet     More than two sig. figs.:
            has B ~ 1/r2 dependence. See Ref. [1] , Fig. 2c.                    minus 0.05 pts

A.4         Determine the magnet's magnetization M.                             Correct unit: 0.05 pts
0.5
pts               2π L                                                          Obtaining intercept (a)
            m           exp( a )  0.987 Am 2                                  from graph: 0.025 pts
                                                                              Obtaining intercept from
                   m                                                            LR: 0.05 pts
            M      2
                        1.2x106 A/m
                  πR L
                                                                                Correct formula for m
                                                                                and/or M : 0.1 pts
            This is close to the more accurate results from more extensive
            measurements to far field (see Ref. [1], Fig. 2c) and we use
                                                                                Result for M (x106 A/m):
            this value for subsequent questions:                                 0.9 - 1.4 : 0.3 pts
                     M  1.1x106 A/m                                             0.1 - 2.5 : 0.15 pts

                                                                                More than 2 sig. figs.:
                                                                                minus 0.05 pts


       2.        The Magnetic Levitation Effect and Magnetic Susceptibility () (1 pts)


Quest                                        Answer                                         Marks
 ion
 A.5         Place gently a graphite rod HB/0.5 and length = 8 mm.                correct unit: 0.02
 0.1         Measure the levitation height y0 of the rod (see Fig. 7a). Hint:
 pts         Use the insert ruler provided as shown in Fig. 7b. Press the         y0 = (1.7 - 2.2) mm: 0.08
             ruler on the magnets to read the position of the graphite rod        pts

             We levitate graphite HB/0.5, l = 8mm. Using the insert-ruler,        partial credit:
             we measure approximately y = 1 mm from the top of the               Only y = (1 - 1.5) mm:
                                                                                  0.03 pts
             magnet surface. Thus: y0 = R - y = (3.2 - 1) mm = 2.2 mm
                                                                           Experimental
                               E2. Marking Scheme & Solution               Question            1
                               Student Code
                                                                           page 3 of 7


        Use the result from part A.5 to determine the magnetic
 A.6    susceptibility  of the graphite rod.                                 Correct expression for :
 0.8                                                                          0.4 pts
 pts                                       M 2  VR R 4
        Solving for : mg  Fy                           fY ( y0 / a )      Result for  (x10-4)
                                            2         a5                      -(1.4 to 2.6) : 0.4 pts
                                            ga 5                            -(0.5 to 4) : 0.2 pts
                                 
                                      M 2 R 4 fY ( y0 / a )
                                                                              Wrong sign: minus 0.1
                                                                              pts
        We calculate: a  R  g M / 2 =(3.2+1.5/2) mm=3.95 mm.
                                            4 u (3  u2 )(1  u2 )
        Using y0 = 2.2 mm: fY (u)                                 ,
                                                  (1  u2 )5
         fY ( y0 / a )  fY (2.2 / 3.95) =1.07
        Using the correct M = 1.1x106A/m; and R = 3.2 mm,  =
        1680 kg/m3 we have:   1.85x104 .

        Note that this is very good agreement with the literature value
        for graphite pencil lead:   2  104 (see Ref.[1], pg. 2 &
        Ref.[2]). The sign is negative indicating a diamagnetic
        material.

 A.7    What kind of magnetic material is graphite? Choose one: (i)           Correct choice: 0.1 pts
 0.1    Ferromagnetic; (ii) Paramagnetic; or (iii) Diamagnetic?
 pts
        (iii) Diamagnetic. Because:
               (1) Graphite is repelled by magnetic field
               (2) The sign of  is negative.

        3. The camelback potential oscillation and magnetic susceptibility () (1
              points)
Quest                                    Answer                                         Marks
 ion
        Perform an oscillation for the "HB/0.5" graphite and l =8             Correct label and unit:
 A.8    mm. Limit to small oscillation amplitude i.e. A < 4mm.                0.02 pts
 0.2    Determine the oscillation period. (The oscillation will decay
 pts    over time due to damping, ignore this damping effect).                Number of correct data
                                                                               each 0.01 pts, max 0.03
                                                                              pts
        Example, we measured 5 oscillations of HB/0.5 with length l
        = 8 mm. We displaced it by ~3 mm and let it oscillates. We            Number of oscillation
        measured 5 oscillation periods:                                       < 3 : 0 pts
                                                                              >= 3 : 0.05 pts
          Trial         5 Tz
                        (s)
          1             6.12                                                  Tz = (1.2 - 1.5) s: 0.1 pts
                                                                             Experimental
                            E2. Marking Scheme & Solution                    Question            1
                            Student Code
                                                                             page 4 of 7


          2         6.13
          3         6.14

         Average : Tz = 1.23 s

         Calculate the magnetic susceptibility () of the graphite              Correct expression for :
 A.9     using this oscillation                                                 0.4 pts
 0.8
 pts     For harmonic oscillator : k z  mR   , solving for :                Result for  (x10-4)
                                                                                -(1.4 to 2.6) : 0.4 pts
                                    kz         ω2                              -(0.5 to 4) : 0.2 pts
                                        
                                C1 M 2Vr C1 M 2
                                                                                Wrong sign: minus 0.1
         Using the correct M = 1.1x106A/m.
                                                                                pts
         Using C1 = 198.6/m2, and Tz = 1.23 s, we obtain
           1.5  104 .

         Note that this is in good agreement with the literature value of
         the graphite pencil lead:   2  104 (Ref.[1], pg. 2); and the
         sign is negative indicating a diamagnetic material.



        4. Oscillator quality factor (Q) and estimate of air viscosity A (3.0 points)
Quest                                 Answer                                             Marks
 ion
         We need to determine the damping time constant of the
A.10     oscillation . Sketch how you measure  in a simple way .             Correct idea: 0.3 pts
0.5
pts                                                                            Correct expression for
                                                                               : 0.2 pts




         The trick is to use "half-time" concept of exponential decay.
         We set the oscillation and measure the time taken for the
         amplitude to halve. The lifetime is:
                                          t
                                        1/ 2
                                          ln 2

         Perform oscillation damping experiments with a group of               Correct label and
A.11     rods with various diameters and fixed length of 8 mm.                 unit 0.1
1.5      Determine the damping time constant  for each rods
pts                                                                            Number of correct data
                                                                          Experimental
                           E2. Marking Scheme & Solution                  Question          1
                          Student Code
                                                                          page 5 of 7


        We displaced the graphite by ~4 mm, started the stopwatch          for each diameter (4):
        and then waited until it decays to half.                            < 3 : 0.1 pts
                                                                            >=3 : 0.25 pts
                                                                           (max  1.0 pts)
         Trial Diam. Actual         t1/2    Mean             r xln(0.607
                                                                2


                          Radius             t1/2             l/r)         Positive monotonic trend
                                                                            for  vs. diameter from
                 (mm)      (mm)       (s)     (s)       (s)       (mm2)     0.3 to 0.9 mm with  = 5
         1       0.3      0.19      3.89     3.913   5.646     0.117        to 20 sec : 0.4 pts
                                    3.97
                                    3.88
         2       0.5      0.28      7.69     7.617   10.989 0.224
                                    7.57
                                    7.59
         3       0.7      0.35      8.77     8.82    12.73     0.322
                                    8.81
                                    8.88
         4       0.9      0.45      12.4     11.70   16.88     0.482
                                    11.33
                                    11.38


A.12    Determine the air viscosity A
1 pts                                                                       Correct unit: 0.05


                                                                            Obtaining result with
                                                                            linear regression or plot:
                                                                            0.25 pts




                                                                            Result A (x10-6 Pa.s):
                                                                             20 - 60 : 0.7 pts
                                                                             10 - 80 : 0.4 pts
                                                                             1 - 100 : 0.1 pts

                                       l               2 
        We have:   b r ln  0.607   , where: b 
                            2
                                                              . We
                                       r               3 A
        performed linear regression y= a+b x , with y =  and
                             l
        x  r 2 ln  0.607   . We obtain: b = 29.02 s/mm2.
                             r
               2
        A            38.6 10-6 Pa.s (1 Pa.s = 1 kg /m s)
               3 b

        Note that this is about 2.1x the actual viscosity of air of
        18.2.Pa.s. The discrepancy is due to the ellipsoidal
                                                                          Experimental
                             E2. Marking Scheme & Solution                Question            1
                            Student Code
                                                                          page 6 of 7


        approximation of the Stokes drag (vs. the actual cylindrical
        shape of the rod) and the proximity effect of the rod to the
        magnet (wall effect). Another factor is the crude nature of our
        manual  determination. See Ref. [1], pg. 8.



   B. SENSOR APPLICATION OF THE PDL TRAP

        5. PDL Trap Seismometer (0.5 pts)
Quest                                  Answer                                         Marks
 ion
        Which diameter of rod do you choose?                                 Correct answer: 0.2 pts
 B.1
 0.2    To obtain the lowest acceleration noise floor "an" we should
 pts    choose the largest diameter graphite i.e. 0.9 mm, because their
        damping time is the longest and the mass is the largest.

 B.2    Calculate the seismometer acceleration noise floor (an) for the      Correct unit: 0.1
 0.3    rod of your choice!
 pts
        For HB/0.9 and length l = 8 mm:                                      Correct answer: 0.2 pts
        We use  = 16.9 s; and T = 298 K, we have: mR   π r 2l 
        8.55x10-6 kg :

                4k B T 0   8k B T
         an                       1.5x108 m /( s 2 Hz 0.5 )
                 QmR         mR



        6. PDL Trap Tiltmeter (2 pts)
Quest                                  Answer                                         Marks
 ion
        Derive the relation theoretically between displacement z with
 B.3    the screw thread size S and the number of turns (N).                 Correct expression:
 0.5                                            mgS N                        0.5 pts
 pts     k z z  m g sin   m g N S / D  z 
                                                 kz D                        Partial credit
        From Question 3, we also have k z  m ω  :                          k z z  m g sin  : 0.2
             gS
        z  2 N
             ω D

B.4     By turning the screw slowly, determine the rod displacement
1.25    z vs. the number of screw turns (N). Determine the thread           Correct label and unit:
pts     size S                                                               0.1 pts
                                                                        Experimental
                          E2. Marking Scheme & Solution                 Question            1
                         Student Code
                                                                        page 7 of 7


                                                                            Distance between screws:
       We measured the distance between screws: D = 22 cm, and we             22.8 < D < 22.2 cm :
       used the period from Q3: Tz = 1.23 s                                 0.1 pts

                                                                            Number of correct data:
        z                  N
        (mm)                 (turn)                                          < 3 sets : 0 pts
                                                                             3-5 sets: 0.15 pts
                                                                              >5 sets : 0.25 pts
        0         0          0
        0.5       135        0.375
        1         270        0.75                                           Obtaining result with
                                                                            linear regression or plot:
        1.5       450        1.25
                                                                            0.2 pts
        2         585        1.625
        2.5       720        2.0
        3         855        2.375
                                                                            Result:
        3.5       945        2.625                                          0.7 < S < 0.9 : 0.55 pts
                                                                            0.5< S <1.1 : 0.15 pts

                                                                            Correct unit for S :
                                                                            0.05




       By performing linear regression: y = a + b x
                                            b ω2 D
       We have b = 1.287 mm/turns : S             = 0.75 mm/turn.
                                               g
       This is reasonably close to the actual value of the thread size: S
       = (0.80.1) mm/turn.

B.5    When the ground tilt changes we want the graphite rod to go to
0.25   equilibrium as fast as possible (instead of sustaining very long
 pts   oscillation) to allow easy reading. What is the ideal Q factor
       for a tiltmeter?                                                 Correct Q : 0.25 pts

       We need critical damping thus: Q = 0.5


  REFERENCES:
  [1] Gunawan, O. & Virgus, Y. The one-dimensional camelback potential in the
      parallel dipole line trap: Stability conditions and finite size effect. J. Appl. Phys.
      121, 133902, (2017). DOI:10.1063/1.4978876.
  [2] Gunawan, O., Virgus, Y. & Fai Tai, K. A parallel dipole line system. Appl. Phys.
      Lett. 106, 062407, (2015). DOI: 10.1063/1.4907931.
