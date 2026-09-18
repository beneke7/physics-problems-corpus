---
id: solution-document-ipho-2016-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2016/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2016-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2016/T3_S.pdf."
---

Problem 3 : Solution/marking scheme – Large Hadron Collider (10 points)
Part A. LHC Accelerator (6 points)


 A1 (0.7 pt) Find the exact expression for the final velocity v of the protons as a function
 of the accelerating voltage V , and fundamental constants.



 Solution A1:                                                                                  [0.7]

 Conservation of energy:

                                                           mp · c2
                         mp · c2 + V · e = mp · c2 · γ = p                                     0.5
                                                          1 − v 2 /c2

 Penalties

                                No or incorrect total energy                                   -0.3



                                       Missing rest mass                                       -0.2



 Solve for velocity:                   s                                     2
                                                        mp · c2

                              v =c·        1−                                                  0.2
                                                     mp · c2 + V · e


 without proton rest mass:                                                                     [0.5]

                                                      mp · c2
                              V · e ≃ mp · c2 · γ = p                                          0.3
                                                     1 − v 2 /c2

 Solve for velocity:                         s                          2
                                                             mp · c2

                                     v =c·      1−                                             0.2
                                                              V ·e


 Classical solution:                                                                           [0.2]
                                                 s
                                                     2·e·V
                                         v=                                                    0.2
                                                      mp




                                                     1


A2 (0.8 pt) For particles with high energy and low rest mass the relative deviation
∆ = (c − v)/c of the final velocity v from the speed of light is very small. Find a suitable
approximation for ∆ and calculate ∆ for electrons with an energy of 60.0 GeV.



Solution A2:                                                                                   [0.8]

velocity (from previous question):
                      s                            2            s                       2
                                   me · c2                                   me · c2

                v =c·      1−                          or c ·       1−                         0.1
                                me · c2 + V · e                               V ·e

relative difference:
                                     c−v          v
                                     ∆=     =1−                                                0.1
                                       c           c
                                               2                2
                                me · c2              1 me · c2

                           1
                       →∆≃                       or                                            0.4
                           2 me · c2 + V · e         2   V ·e
relative difference
                                     ∆ = 3.63 · 10−11                                          0.2



classical solution gives no points                                                             0.0




                                              2


A3 (1.0 pt) Derive an expression for the uniform magnetic flux density B necessary to
keep the proton beam on a circular track. The expression should only contain the energy
of the protons E, the circumference L, fundamental constants and numbers. You may
use suitable approximations if their effect is smaller than the precision given by the least
number of significant digits. Calculate the magnetic flux density B for a proton energy
of E = 7.00 TeV.


Solution A3:                                                                                   [1.0]

Balance of forces:
                           γ · mp · v 2     mp · v 2
                                        =   q          =e·v·B                                  0.3
                                r         r· 1− v
                                                     2
                                                       c2

In case of a mistake, partial points can be given for intermediate steps (up to max 0.2).
Examples:

                                Example:        Lorentz force                                  0.1
                                                γ · mp · v 2
                                Example:                                                       0.1
                                                     r
Energy:
                                                                      E
                     E = (γ − 1) · mp · c2 ≃ γ · mp · c2 → γ =
                                                                     mp c2
Therefore:
                                        E·v
                                               =e·B                                            0.3
                                        c2 · r
With
                                                            L
                                   v ≃ c and r =
                                                            2π
follows:
                                                2π · E
                                      →B=                                                      0.2
                                                e·c·L
Solution:
                                        B = 5.50T                                              0.2
Penalty for < 2 or > 4 significant digits                                                      -0.1
Calculation without approximations is also correct but does not give more points

                                        s               2                  2
                                                                 m · c2

                        2π · mp · c           E
                     B=             ·                       − 1+                               0.5
                           e·L               mp · c2              E
                            Penalty for each algebraic mistake                                 -0.1



Classical calulation gives completely wrong result and maximum 0.3 pt                          [0.3]


                                   mp · v 2
                                            =e·v·B                                             0.1
                                     r
                                       2π p
                                  B=         2 · mp · E                                        0.1
                                     L·e


                                               3


                                     B = 0.0901T   0.1
Penalty for < 2 or > 4 significant digits          -0.1




                                            4


A4 (1.0 pt) An accelerated charged particle radiates energy in the form of electromag-
netic waves. The radiated power Prad of a charged particle that circulates with a constant
angular velocity depends only on its acceleration a, its charge q, the speed of light c and
the permittivity of free space  0 . Use a dimensional analysis to find an expression for the
radiated power Prad .


Solution A4:                                                                                    [1.0]

Ansatz:
                                   Prad = aα · q β · cγ ·  δ0                                   0.2
Dimensions: [a]=ms−2 , [q]=C=As, [c]=ms−1 ,[ 0 ]=As(Vm)−1 =A2 s2 (Nm2 )−1 =A2 s4 (kgm3 )−1


                                  All dimensions correct                                        0.3
                                 Three dimensions correct                                       0.2
                                  Two dimensions correct                                        0.1



if dimensions: N and Coulomb [ 0 ]= C2 (Nm2 )−1

                             mα         mγ    C2δ     N·m
                               2α
                                  · Cβ · γ · δ      =                                           0.1
                             s           s  N · m2δ    s
From this follows:

    N :→ δ = −1,     C :→ β + 2 · δ = 0,     m :→ α + γ − 2δ = 1,      s :→ 2 · α + γ = 1       0.2

                                  Two equations correct                                         0.1
And therefore:
                             → α = 2, β = 2, γ = −3, δ = −1                                     0.1



if dimensions: N and As [ 0 ]=A2 s2 (Nm2 )−1

                           mα     β     β m
                                             γ A2δ · s2δ   N·m
                               · A  · s  ·    ·          =                                      0.1
                           s2α             sγ Nδ · m2δ      s
From this follows:

N :→ δ = −1,     A :→ β + 2 · δ = 0,   m :→ α + γ − 2δ = 1,     s :→ −2 · α + β − γ + 2δ = −1   0.2

                                  Two equations correct                                         0.1
And therefore:
                             → α = 2, β = 2, γ = −3, δ = −1                                     0.1



if dimensions: kg and As [ 0 ]=A2 s4 (kg· m3 )−1

                          mα      β     β m
                                             γ   A2δ · s4δ   kg · m2
                              · A   · s  ·     ·           =                                    0.1
                          s2α              sγ kgδ · m3δ        s3


                                               5


From this follows:

kg :→ δ = −1, A :→ β + 2 · δ = 0, m :→ α + γ − 3δ = 2, s :→ −2 · α + β − γ + 4δ = −3   0.2

                               Two equations correct                                   0.1
And therefore:
                          → α = 2, β = 2, γ = −3, δ = −1                               0.1



Radiated Power:
                                             a2 · q 2
                                   Prad ∝                                              0.1
                                             c3 ·  0
Other solutions with other units are possible and are accepted
No solution but realise that unit of charge must vanish β = 2δ                         0.2




                                         6


A5 (1.0 pt) Calculate the total radiated power Ptot of the LHC for a proton energy of
E = 7.00 TeV (Note table 1). You may use appropriate approximations.



Solution A5:                                                                            [1.0]

Radiated Power:
                                                γ 4 · a2 · e2
                                       Prad =                                           0.1
                                                6π · c3 ·  0
Energy:
                  E = (γ − 1)mp · c2 or equally valid E ≃ γ · mp · c2                   0.2
Acceleration:
                                          c2          L
                                     a≃      with r =                                   0.2
                                          r           2π
Therefore:
                              E         4    e2 · c         E 4       e2 · c
                  Prad = (         + 1)   ·           or (       ) ·                    0.3
                             mp c2          6π 0 · r2      mp c2     6π 0 · r2
                             (not required Prad = 7.94 · 10−12 W)
Total radiated power:

                        Ptot = 2 · 2808 · 1.15 · 1011 · Prad = 5.13kW                   0.2

penalty for missing factor 2 (for the two beams): -0.1                                  -0.1
penalty for wrong numbers 2808 and/or 1.15 · 1011 (numbers come from table 1): -0.1     -0.1




                                                7


A6 (1.5 pt) Determine the time T that the protons need to pass through this field.



Solution A6:                                                                                   [1.5]

2nd Newton’s law
                                         dp
                                     F =     leads to                                          0.2
                                         dt
                                V ·e   pf − pi
                                     =         with pi = 0                                     0.3
                                 d        T
Conservation of energy:
                                    Etot = m · c2 + e · V                                      0.2
Since
                                  2
                                 Etot = (m · c2 )2 + (pf · c)2                                 0.2
                                                           s                               2
                1                                                                   e·V
                       q
          → pf = ·      (m · c2 + e · V )2 − (m · c2 )2 =    2e · m · V +                      0.2
                c                                                                    c
                                              s                             2
                            d · pf    d                              e·V
                       →T =        =            2e · mp · V +                                  0.3
                            V ·e     V ·e                             c
                                            T = 218ns                                          0.1



Alternative solution                                                                           [1.5]
2nd Newton’s law
                                        dp
                                     F =     leads to                                          0.2
                                        dt
                              V ·e    pf − pi
                                   =           with pi = 0                                     0.3
                               d         T
velocity from A1 or from conservation of energy
                                  s                         2
                                               mp · c2

                           v =c· 1−                                                            0.2
                                           mp · c2 + V · e

and hence for γ                         r
                                              v2      e·V
                               γ = 1/   1−     2
                                                 =1+                                           0.2
                                              c      mp · c2
                                                      s                       2
                                                                mp · c2

                                   e·V
      → pf = γ · mp · v = 1 +                · mp · c · 1 −                                    0.2
                                 mp · c2                     mp · c2 + V · e
                            s                                 s
                               mp · c2 + e · V 2                                e·V 2

      d · pf   d · mp · c                                  d
 →T =        =            ·                        −1=         2e · mp · V +                   0.3
      V ·e       V ·e             mp · c2                V ·e                    c
                                            T = 218ns                                          0.1



Alternative solution: integrate time                                                           [1.5]



                                                8


Energy increases linearly with distance x

                                                   e·V ·x
                                         E(x) =                                              0.2
                                                      d
                                            Z       Z d
                                                         dx
                                       t = dt =                                              0.2
                                                     0 v(x)
                  v                                     q
                                                !2                           2
                                                           mp · c2 + e·Vd ·x − (mp · c2 )2
                  u
                  u              mp · c 2
       v(x) = c · t1 −                             =c·
                              mp · c2 + e·Vd ·x                  mp · c2 + e·Vd ·x
                                          r                    2
                                                  e·V ·x
                                             1 + d·m p ·c
                                                          2        −1
                                   =c·              e·V ·x
                                                                                             0.2
                                               1 + d·m p ·c
                                                           2


                                             e·V ·x            dξ      e·V
                   Substitution : ξ =                             =                          0.2
                                            d · mp · c2        dx   d · mp · c2
                         Z b
                  1               1+ξ       d · mp · c2                        e·V
              →t=                                       dξ               b=                  0.2
                                                                              mp · c2
                               p
                  c       0     (1 + ξ)2 − 1 e · V
                                                   dξ
                          1 + ξ := cosh(s)            = sinh(s)                              0.1
                                                   ds
                  mp · c · d   cosh(s) · sinh(s)ds    mp · c · d
                             Z
               t=                q                 =             [sinh(s)]bb21               0.2
                    e·V                 2               e·V
                                   cosh (s) − 1

                                  −1                 −1         e·V
                 with b1 = cosh (1), b2 = cosh           1+                                  0.1
                                                               mp · c2
                                            T = 218ns                                        0.1



Alternative: differential equation                                                           [1.5]

                                    dp
                                             F =                                             0.2
                                    dt

                                           v2       v2
                               
            V ·e   d  m · v  m · a 1 − c2 + m · a c2
          →      =      q         =               3    = γ3 · m · a                          0.4
             d     dt        v2
                         1 − c2

                                               2  2
                                         1 − vc2
                                                             3
                                                         ṡ2 2

                                             V ·e
                                    a = s̈ =           1− 2                                  0.3
                                             d·m         c
                     p
     Ansatz : s(t) =    i2 · t2 + k − l with boundary conditions s(0) = 0, v(0) = 0          0.1
                              c  p 2
                 → s(t) =            e · V 2 · t2 + c2 · m2 · d2 − c · m · d                 0.2
                            V ·e
                                           s
                                                 V ·e 2

                                        d
                      s=d→T =                             + 2V · e · m                       0.2
                                      V ·e         c

                                            T = 218ns                                        0.1


                                                  9


classical solution:                                               [0.4]

                            V ·e                    F    V ·e
                      F =        → acceleration a =    =          0.1
                             d                      mp   mp · d

                                                        r
                                  1                         2d
                               d = · a · T2 → T =                 0.1
                                  2                         a
And hence for the time                     r
                                               2 · mp
                                   T =d·                          0.1
                                                V ·e
                                      T = 194ns                   0.1




                                          10


Part B. Particle identification (4 points)


  B1 (0.8 pt) Express the particle rest mass m in terms of the momentum p, the flight
  length l and the flight time t assuming that the particles with elementary charge e travel
  with velocity close to c on straight tracks in the ToF detector and that it travels perpen-
  dicular to the two detection planes (see Figure 2).


  Solution B1:                                                                                  [0.8]

  with velocity
                                                             l
                                                    v=                                          0.1
                                                             t
  relativistic momentum
                                                   m·v
                                               p= q                                             0.2
                                                         2
                                                   1 − vc2
  gets
                                                       m·l
                                           p=         q                                         0.2
                                                              2
                                                   t · 1 − t2l·c2
  → mass                               r
                               p·t            l2    p p2 2
                            m=     ·      1− 2 2 =     · t · c − l2                             0.3
                                l           t ·c   l·c

  Alternative                                                                                   [0.8]

  with flight distance: l, flight time t gets:
                                                           l
                                                t=                                              0.1
                                                        (c · β)
  relativistic momentum
                                                  m·β·c
                                               p= p
                                                   1 − β2
  therefore the velocity:
                                                p
                                          β=p                                                   0.2
                                             m · c2 + p2
                                              2

  insert into the expression for t:
                                              p
                                               m2 · c2 + p2
                                          t=l                                                   0.2
                                                 c·p
  → mass:                      s           2
                                    p·t              p  2       p
                                                                     q
                         m=                    −             =        (t · c)2 − (l)2           0.3
                                     l              c          l·c

  non-relativistic solution:                                                                    [0.0]
  flight time: t = l/v velocity:
                                      p     l·m         p·t
                               v=       →t=     and m =
                                      m      p           l
  this solution gives no points                                                                 0.0



                                                        11


B2 (0.7 pt) Calculate the minimal length of a ToF detector that allows to safely distin-
guish a charged kaon from a charged pion given both their momenta are measured to be
1.00 GeV/c. For a good separation it is required that the difference in the time-of-flight
is larger than three times the time resolution of the detector. The typical resolution of a
ToF detector is 150 ps (1 ps = 10−12 s).



Solution B2:                                                                                  [0.7]

Flight time difference between kaon and pion

                                 ∆t = 450ps = 450 · 10−12 s                                   0.1

Flight time difference between kaon and pion
                    l p
                                     q
           ∆t = ( m2π · c2 + p2 − m2K · c2 + p2 ) = 450ps = 450 · 10−12 s                     0.2
                   cp
                                          ∆t · p
                           →l= q               p                                              0.2
                                m2K + p2 /c2 − m2π + p2 /c2
            q                                  p
                m2K + p2 /c2 = 1.115 GeV/c2 and m2π + p2 /c2 = 1.010 GeV/c2
                                                1
                      l = 450 · 10−12 ·                 s GeVc2 /(GeVc)                       0.1
                                          1.115 − 1.010
                l = 4285.710−12 s · c = 4285.7 · 10−12 · 2.998 · 108 m = 1.28m                0.1
Penalty for < 2 or > 4 significant digits                                                     -0.1

Non-relativistic solution:                                                                    [0.3]

Flight time difference between kaon and pion
                            l
                        ∆t = (mK − mπ ) = 450ps = 450 · 10−12 s                               0.1
                            p
length:
                                ∆tp      450 · 10−12 s · 1GeV/c
                         l=           =                                                       0.1
                              mK − mΠ   (0.498 − 0.135)GeV/c2
                l = 450 · 10−12 /0.363 · cs = 450 · 10−12 /0.363 · 2.998 · 108 m
                                 l = 3716 · 10−4 m = 0.372m                                   0.1
Penalty for < 2 or > 4 significant digits                                                     -0.1




                                               12


B3 (1.7 pt) Express the particle mass as a function of the magnetic flux density B, the
radius R of the ToF tube, fundamental constants and the measured quantities: radius r
of the track and time-of-flight t.



Solution B3:                                                                               [1.7]

Particle is travelling perpendicular to the beam line hence the track length is given by
the length of the arc
Lorentz force → transverse momentum, since there is no longitudinal momentum, the
momentum is the same as the transverse momentum
Use formula from B1 to calculate the mass
track length: length of arc
                                                      R
                                    l = 2 · r · asin                                       0.5
                                                     2·r
                      penalty for just taking a straight track (l = R)                     -0.4
partial points for intermediate steps, maximum 0.4
Lorentz force
                          γ · m · vt2
                                      = e · vt · B → p T = r · e · B                       0.4
                               r
partial points for intermediate steps, maximum 0.3
longitudinal momentum=0 → p = pT                                                           0.1

momentum
                                     p=e·r·B                                               0.1
                  s                         v                !2
                            2               u
                       p·t     p  2         u       t            1 2
             m=              −      =e·r·B· t
                                                        R
                                                               −                           0.6
                        l      c              2r · asin 2r )     c

partial points for intermediate steps, maximum 0.5

Non-relativistic: track length: length of arc                                              [0.9]

                                                          R
                                      l = 2 · r · asin                                     0.5
                                                         2·r
                      penalty for just taking a straight track (l = R)                     -0.4
partial points for intermediate steps, maximum 0.4

                                  p·t   e·r·B·t         e·B·t
                            m=        =           R
                                                     =          R
                                                                                           0.4
                                   l    2r · asin 2r   2 · asin 2r
partial points for intermediate steps, maximum 0.3




                                               13


B4 (0.8 pt) Identify the four particles by calculating their mass.

                          Particle       Radius r [m]        Time of flight [ns]
                            A               5.10                    20
                            B               2.94                    14
                            C               6.06                    18
                            D               2.32                    25




Solution B4:                                                                                             [0.8]



     Particle     arc          p           p          pt/l        pt/l       pt/l       Mass     Mass
                  [m]       [ MceV ]     [ mkg
                                            s ]     [ Mcm
                                                        eV s
                                                             ]   [ MceV
                                                                     2 ]     [kg]      [ MceV
                                                                                           2 ]    [kg]
                                         10−19        10−6                  10−27                10−27
        A         3.786    764.47        4.0855      4.038       1210.6     2.158      938.65    1.673
        B         4.002    440.69        2.3552      1.542       462.2      0.824      139.32    0.248
        C         3.760    908.37        4.8546      4.349       1303.7     2.324      935.10    1.667
        D         4.283    347.76        1.8585      2.030       608.6      1.085      499.44    0.890
Particles A and C are protons, B is a Pion and D a Kaon
correct mass and identification: per particle                                                            0.2
penalty for correct mass but no or wrong identification for 1 or 2 particles                             -0.1
penalty for correct mass but no or wrong identification for 3 or 4 particles                             -0.2
wrong mass, correct momentum:per particle                                                                0.1
wrong momentum, correct arc for 3 or 4 particles                                                         0.2
wrong momentum, correct arc for 1 or 2 particles                                                         0.1

non relativistic solution m = pt/l Particle identification is not possible                               [0.4]


       Particle     arc            p           p      m = p · t/l        m = p · t/l     m = p · t/l
                    [m]       [ MceV ]     [ mkg
                                              s ]      [ Mcm
                                                           eV s
                                                                ]          [ MceV
                                                                               2 ]          [kg]
                                           10−19         10−6                              10−27
            A      3.786      764.47      4.0855         4.038             1210.6          2.158
            B      4.010      440.69      2.3552         1.542              462.2          0.824
            C      3.760      908.37      4.8546         4.349             1303.7          2.324
            D      4.283      347.76      1.8585         2.030              608.6          1.085

correct mass or correct momentum: per particle                                                           0.1
wrong momentum, correct arc for 3 or 4 particles                                                         0.2
wrong momentum, correct arc for 1 or 2 particles                                                         0.1




                                                     14
