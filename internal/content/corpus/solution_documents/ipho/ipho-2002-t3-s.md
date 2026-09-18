---
id: solution-document-ipho-2002-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2002/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2002-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2002/T3_S.pdf."
---

SOLUTION T3 : . A Heavy Vehicle Moving on An Inclined Road


                                       l


                                                       l




                                                                   h1


                                                       θ



 To simplify the model we use the above figure with h1 = h+0.5 t
 Ro = R

  1. Calculation of the moment inertia of the cylinder

      Ri=0.8 Ro
      Mass of cylinder part : mcylinder =0.8 M
      Mass of each rod       : mrod = 0.025 M




                                        III - 1


                2                   2              2                      2
I=            ∫ r dm = ∫ r dm + ∫ r dm + ... + ∫ r dm                                    0.4 pts
        wholepart         cyl . shell       rod1                  rod n
                          Ro
       2            3             4     4                   2     2
    ∫ r dm = 2πσ ∫ r dr = 0.5πσ( Ro − Ri ) = 0.5mcylinder (Ro + Ri )
cyl . shell               Ri

                    = 0.5(0.8 M ) R 2 (1 + 0.64) = 0.656 MR 2                            0.5 pts
               Rin
      2             2     1 3 1            2    1              2              2
∫rodr   dm = λ  ∫0 r dr = 3 λRin = 3 mrod Rin = 3 0.025M (0.64R ) = 0.00533MR            0.5 pts

The moment inertia of each wheel becomes
I = 0.656MR 2 + 8 x 0.00533MR 2 = 0.7 MR 2                                                0.1 pts



2. Force diagram and balance equations:

To simplify the analysis we devide the system into three parts: frame (part1) which
mainly can be treated as flat homogeneous plate, rear cylinders (two cylinders are treated
collectively as part 2 of the system), and front cylinders (two front cylinders are treated
collectively as part 3 of the system).

Part 1 : Frame


                N12
                                        l


      f12h                                                    l




                                                                  N13
                                  m1 g
                                                       f13h

                                                                              h1

                                                                                       0.4 pts
The balance equation related to the forces work to this parts are:




                                                              III - 2


 Required conditions:
 Balance of force in the horizontal axis
 m1 g sin θ − f 12 h − f 13 h= m1 a                              (1) 0.2 pts
 Balance of force in the vertical axis
 m1 g cos θ = N 12 + N13                                        (2) 0.2 pts
 Then torsi on against O is zero, so that
 N12 l − N13 l + f 12 h h1 + f 13 h h1 = 0                       (3) 0.2 pts

Part two : Rear cylinder


                                              N2
          f2


                                              f21h

                    N21
                                Mg
                                                                      0.25 pts

From balance condition in rear wheel :
f 21h − f 2 + Mg sin θ = Ma                                     (4)        0.15 pts
N 2 − N 21 − Mg cos θ = 0                                      (5)         0.15 pts

For pure rolling:

                                              a2
                            f 2 R = Iα2 = I
                                              R
                                     I
                          or f 2 =      a                            (6)
                                     R2
For rolling with sliding:

                    F2 = uk N2                                 (7)


                                                                           0.2 pts

Part Three : Front Cylinder:




                                                     III - 3


                                       N3
           f3


                                       f31h

                     N31
                             Mg
                                                                0.25 pts

From balance condition in the front whee l :
f 31h − f 3 + Mg sin θ = Ma                                                 (8)   0.15 pts
N 3 − N 31 − Mg cos θ = 0                                                  (9)    0.15 pts

For pure rolling:


                    a3
f 3 R = Iα3 = I
                    R
            I
or f 3 =      a                                                                      (10)
           R2
For rolling with sliding:

                    F3 = uk N3                                                       (11)

                                                                                  0.2 pts
3. From equation (2), (5) and (9) we get

    m1 gcosθ = N2 – m2 g cosθ+N3 -m3 g cosθ
    N2 + N3 = (m1 +m2 +m3 )gcosθ=7Mgcosθ                                            (12)

And from equation (3), (5) and (8) we get

(N 3 -Mg cos θ) l – (N 2 -Mg cos θ) l=h1 (f2 +Ma-Mg sinθ+f3 +Ma-Mg sinθ)

(N 3 – N2 )= h1 (f2 +2Ma-2Mg sinθ+f3 )/l

                                  Equations 12 and 13 are given 0.25 pts

CASE ALL CYLINDER IN PURE ROLLING

From equation (4) and (6) we get


                                              III - 4


   f21h = (I/R2 )a +Ma-Mg sinθ                                         (14)    0.2 pts

From equation (8) and (10) we get

   f31h = (I/R2 )a +Ma-Mg sinθ                                         (15)    0.2 pts

Then from eq. (1) , (14) and (15) we get

5Mg sinθ - {(I/R2 )a +Ma-Mg sinθ}-{(I/R2 )a +Ma-Mg sinθ}= m1 a

7 Mg sinθ = (2I/R2 +7M)a
                  7 Mg sin θ   7 Mg sin θ
             a=              =                = 0.833g sin θ            (16) 0.35 pts
                           I       0 . 7 MR 2
                 7M + 2 2 7M + 2
                          R             R2

      7M           h         I
N3 =      g cos θ + 1 [( M + 2 ) × 0.833 g sin θ − Mg sin θ ]
       2            l       R
                   h
    = 3.5Mgcos θ + 1 [( M + 0.7M ) × 0.833 g sin θ − Mg sin θ ]
                    l
                        h
    = 3.5 Mg cosθ + 0.41 1 Mg sin θ
                        l

          7M          h     I
N2 =         g cos θ − 1 [( 2 + M ) × 0.833g sin θ − Mg sin θ]
           2          l R
                         h1                 7 Mg sin θ
    = 3.5g cos θ -          [( 0.7 M + M )             − 2 Mg sin θ]
                         l                 0.7M + 7 M
                       h
    = 3.5g cos θ − 0.41 1 Mg sin θ
                        l
                                                                              0.2 pts
The Conditions for pure rolling:

           f 2 ≤ µs N 2              and f 3 ≤ µs N 3
           I2                              I3                                 0.2 pts
                a ≤ µs N 2           and        a ≤ µs N 3
           R 22                            R 23
The left equation becomes
                                             h
0.7M × 0. 833g sin θ ≤ µ s (3.5Mg cosθ − 0.41 1 Mg sin θ )
                                             l
                3.5µ s
tan θ ≤
                             h1
          0.5831+ 0.41µ s
                              l


                                                III - 5


While the right equation becomes
                                            h
0.7m × 0.833g sin θ ≤ µ s (3.5mg cosθ + 0.41 1 mg sin θ )
                                             l
              3.5µ s
tan θ ≤
                         h
        0.5831− 0.41µ s 1
                          l
                                                                                   (17)         0.1 pts

CASE ALL CYLINDER SLIDING

From eq. (4) f21h = Ma +uk N2 – Mgsinθ                        (18)                              0.15 pts
From eq. (8) f31h = Ma +uk N3 – Mgsinθ                        (19)                              0.15 pts
From eq. (18) and 19 :
  5Mg sinθ - (Ma + uk N2 – Mg sinθ)- (Ma + uk N3 – Mg sinθ)=m1 a

        7 Mg sin θ − µk N 2 − µk N 3            µ (N + N3)
   a=                                = g sin θ − k 2                               (20)         0.2 pts
                    7M                             7M

N 3 + N 2 = 7Mg cos θ

From the above two equations we get :
                              a = g sin θ − µk g cos θ                                         0.25 pts


The Conditions for complete sliding: are the opposite of that of pure rolling

         f 2 〉 µs N '2             and f 3 〉 µs N '3
         I2                                I3                                 (21)            0.2 pts
              a 〉 µs N '2          and          a 〉 µs N '3
         R 22                              R 32

Where N2 ’ and N3 ’ is calculated in case all cylinder in pure rolling.                   0.1 pts


Finally weget
               3. 5µ s                                                   3. 5µ s              0.2 pts
tan θ 〉                              and                 tan θ 〉
                        h                                                         h
        0. 5831+ 0.41µ s 1                                         0.5831− 0.41µ s 1
                         l                                                         l
The left inequality finally become decisive.


CASE ONE CYLINDER IN PURE ROLLING AND ANOTHER IN SLIDING
CONDITION

{ For example R3 (front cylinders) pure rolling while R2 (Rear cylinders) sliding}


                                                 III - 6


From equation (4) we get

   F21h = m2 a+ uk N2 -m2 g sinθ                          (22)           0.15 pts

From equation (5) we get

   f31h = m3 a+(I/R2 )a -m3 g sinθ                        (23)           0.15 pts

Then from eq. (1) , (22) and (23) we get

m1 g sinθ - { m2 a+uk N2 -m2 g sinθ}-{m3 a+(I/R2 )a -m3 g sinθ}= m1 a

m1 g sinθ + m2 g sinθ + m3 sinθ- uk N2 = (I/R2 +m3 )a + m2 a + m1 a

5Mg sinθ + Mg sinθ + Mg sinθ- uk N2 = (0.7M +M)a + Ma + 5Ma

     7 Mg sin θ − µk N 2                  µN
a=                       = 0.9091g sin θ − k 2                          (24)        0.2 pts
           7.7M                           7.7 M

             h1             I
N3 − N2 =       ( µk N 2 + 2 a + 2Ma − 2Mg sin θ )
              l            R
             h
N 3 − N 2 = 1 ( µk N 2 + 2.7 M × 0.9091g sin θ − 2.7 µk N 2 / 7.7 − 2 Mg sin θ )
              l
                        h
N 3 − N 2 (1 + 0.65 µk 1 ) = 0.4546Mg sin θ
                         l
N 3 + N 2 = 7Mg cos θ

Therefore we get

      7Mg cos θ − 0.4546Mg sin θ
N2 =
                          h
             2 + 0.65µk 1
                           l                                               (25)      0.3 pts
                   7 Mg cos θ − 0.4546Mg sin θ
N 3 = 7Mg cosθ −
                                        h
                            2 + 0.65µk 1
                                         l
Then we can substitute the results above into equation (16) to get the following result

                      µk N 2                  µ 7 g cos θ − 0.4546 g sin θ
a = 0.9091g sin θ −          = 0.9091g sin θ − k                                    (26)
                      7.7M                    7.7                h
                                                      2 + 0.65µk 1
                                                                  l
                                                                                           0.2 pts


                                           III - 7


The Conditions for this partial sliding is:
       f 2 ≤ µs N 2′               and f 3 〉 µs N 3′
           I                            I                                  (27)         0.25 pts
             2
               a ≤ µs N 2′        and 2 a 〉 µs N 3′
          R                           R
          where N ′2 and N 3′ are normal forces for pure rolling condition


4. Assumed that after rolling d meter all cylinder start to sliding until reaching the end of
incline road (total distant is s meter). Assummed that ηmeter is reached in t1 second.

v t1 = v o + at 1 = 0 + a1t 1 = a1 t1
              1         1
d = vo t 1 + a1 t 12 = a1 t12
              2         2
        2d
t1 =
         a1
                                                                             0.5 pts
             2d
v t1 = a1       = 2da1 = 2 d 0.833 g sin θ = 1.666 dg sin θ                                     (28)
             a1

The angular velocity after rolling d meters is same for front and rear cylinders:

         vt 1 1
ωt 1 =       =  1.666 dg sin θ                                                                  (29)
          R R
                                                                             0.5 pts

Then the vehicle sliding untill the end of declining road. Assumed that the time needed
by vehicle to move from d position to the end of the declining road is t2 second.

v t 2 = v t1 + a 2 t 2 = 1.666 dg sin θ + a 2 t 2
                     1
s − d = vt 1 t 2 +     a 2 t 22
                     2
                                                                             (30)        0.4 pts
       − v t 1 + vt21 + 2 a2 ( s − d )
t2 =
                      a2
v t 2 = 1.666 dg sin θ − vt 1 + v t21 + 2a 2 ( s − d )

Inserting vt1 and a2 from the previous results we get the final results.

For the angular velocity, while sliding they receive torsion:




                                                    III - 8


τ = µ k NR
      τ µ k NR                                                                              (31)
α =     =
      I    I
                                                            2
                     1                   µ k NR − vt 1 + v t1 + 2 a 2 ( s − d )
ω t2 = ω t1 + αt 2 =   1 .666 dg sin θ +
                     R                       I                a2
                                                                                  0.6 pts




                                              III - 9
