---
id: solution-document-ipho-1971-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1971_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-1971-q1, ipho-1971-q2, ipho-1971-q3, ipho-1971-q4]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/1971_S.pdf."
---

Solutions to the problems of the 5-th
           International Physics Olympiad, 1971, Sofia, Bulgaria

                     The problems and the solutions are adapted by
                                      Victor Ivanov
Sofia State University, Faculty of Physics, 5 James Bourcier Blvd., 1164 Sofia, Bulgaria

Reference: O. F. Kabardin, V. A. Orlov, in “International Physics Olympiads for High
School Students”, eds. V. G. Razumovski, Moscow, Nauka, 1985. (In Russian).

                                Theoretical problems

Question 1.
        The blocks slide relative to the prism with accelerations a1 and a2, which are
parallel to its sides and have the same magnitude a (see Fig. 1.1). The blocks move
relative to the earth with accelerations:
(1.1)                   w1 = a1 + a0;
(1.2)                   w2 = a2 + a0.
Now we project w1 and w2 along the x- and y-axes: y
(1.3)                    w1x = a cos α 1 − a 0 ;
                                                            w1
(1.4)                    w1 y = a sin α 1 ;                     a1
                                                                      a0     w2    a2
(1.5)                  w2 x = a cos α 2 − a 0 ;
                                                                 α1         α2
(1.6)                  w2 y = −a sin α 2 .
                                                                                        x

Fig. 1.1

The equations of motion for the blocks and for the prism have the following vector
forms (see Fig. 1.2):
(1.7)                 m1 w 1 = m1g + R 1 + T1 ;
(1.8)                 m2 w 2 = m2 g + R 2 + T2 ;
(1.9)                 Ma 0 = Mg − R 1 − R 2 + R − T1 − T2 .

                        y
                                                  T2
                             R1 T1                       R2
                                         R             m2g
                             m1g
                                             Mg              x


                                                                             Fig. 1.2

The forces of tension T1 and T2 at the ends of the thread are of the same magnitude T
since the masses of the thread and that of the pulley are negligible. Note that in equation
(1.9) we account for the net force –(T1 + T2), which the bended thread exerts on the
prism through the pulley. The equations of motion result in a system of six scalar
equations when projected along x and y:
(1.10)                  m1 a cos α 1 − m1 a 0 = T cos α 1 − R1 sin α 1 ;
(1.11)                  m1 a sin α1 = T sin α 1 + R1 cos α1 − m1 g ;
(1.12)                  m2 a cos α 2 − m2 a 0 = −T cos α 2 + R2 sin α 2 ;
(1.13)                  m2 a sin α 2 = T sin α 2 + R2 sin α 2 − m2 g ;
(1.14)                  − Ma0 = R1 sin α 1 − R2 sin α 2 − T cos α 1 + T cos α 2 ;
(1.15)                 0 = R − R1 cos α 1 − R2 cos α 2 − Mg .
By adding up equations (1.10), (1.12), and (1.14) all forces internal to the system cancel
each other. In this way we obtain the required relation between accelerations a and a0:
                                     M + m1 + m2
(1.16)                  a = a0                            .
                                m1 cos α 1 + m2 cos α 2
The straightforward elimination of the unknown forces gives the final answer for a0:
                                 (m1 sin α 1 − m2 sin α 2 )(m1 cos α 1 + m2 cos α 2 )
(1.17)                  a0 =                                                          .
                              (m1 + m2 + M )(m1 + m2 ) − (m1 cos α 1 + m2 cos α 2 ) 2
It follows from equation (1.17) that the prism will be in equilibrium (a0 = 0) if:
                        m1 sin α 2
(1.18)                       =         .
                        m2 sin α 1

Question 2.
        We will denote by H (H = const) the height of the tube above the mercury level
in the pan, and the height of the mercury column in the tube by hi. Under conditions of
mechanical equilibrium the hydrogen pressure in the tube is:
(2.1)                          PH 2 = Pair − ρghi ,
where ρ is the density of mercury at temperature ti:
(2.2)                           ρ = ρ 0 (1 − βt )
The index i enumerates different stages undergone by the system, ρ0 is the density of
mercury at t0 = 0 °C, or T0 = 273 K, and β its coefficient of expansion. The volume of
the hydrogen is given by:
(2.3)                          Vi = S(H – hi).
        Now we can write down the equations of state for hydrogen at points 0, 1, 2, and
3 of the PV diagram (see Fig. 2):
                                                                 m
(2.4)                           ( P0 − ρ 0 gh0 ) S ( H − h0 ) =     RT0 ;
                                                                M
                                                                m
(2.5)                           ( P1 − ρ 0 gh1 ) S ( H − h1 ) =    RT0 ;
                                                                M
                                                                m
(2.6)                           ( P2 − ρ1 gh2 ) S ( H − h2 ) =     RT2 ,
                                                                M
              PT                  ρ0
where P2 = 1 2 , ρ1 =                        ≈ ρ 0 [1 − β(T2 − T0 )] since the process 1–3 is
              T0           1 + β(T2 − T0 )
isochoric, and:
                                                   m
(2.7)                    ( P2 − ρ 2 gh3 ) S ( H − h3 ) =
                                                      RT3
                                                   M
                                           V       H − h3
where ρ 2 ≈ ρ 0 [1 − β(T3 − T0 )] , T3 = T2 3 = T2        for the isobaric process 2–3.
                                           V2      H − h2
                    P

                                0
                    P0

                    P2                                        2       3




                    P1                                            1


                               V0                          V1= V2     V3   V
                                                                               Fig. 2

      After a good deal of algebra the above system of equations can be solved for the
unknown quantities, an exercise, which is left to the reader. The numerical answers,
however, will be given for reference:
                              H ≈ 1.3 m;
                              m ≈ 2.11×10–6 kg;
                              T2 ≈ 364 K;
                              P2 ≈ 1.067×105 Pa;
                              T3 ≈ 546 K;
                              P2 ≈ 4.8×104 Pa.


Question 3.
        A circuit equivalent to the given one is shown in Fig. 3. In a steady state (the
capacitors are completely charged already) the same current I flows through all the
resistors in the closed circuit ABFGHDA. From the Kirchhoff’s second rule we obtain:
                             E − E1
(3.1)                    I= 4         .
                                4R
Next we apply this rule for the circuit ABCDA:
(3.2)                   V1 + IR = E 2 − E1 ,
where V1 is the potential difference across the capacitor C1. By using the expression
(3.1) for I, and the equation (3.2) we obtain:
                                        E − E1
(3.3)                   V1 = E 2 − E1 − 4       = 1 V.
                                             4
Similarly, we obtain the potential differences V2 and V4 across the capacitors C2 and C4
by considering circuits BFGCB and FGHEF:
                                         E − E1
(3.4)                   V2 = E 4 − E 2 − 4      = 5 V,
                                             4
                                        E 4 − E1
(3.5)                  V4 = E 4 − E 3 −          = 1 V.
                                            4
Finally, the voltage V3 across C3 is found by applying the Kirchhoff’s rule for the
outermost circuit EHDAH:
                                        E − E1
(3.6)                  V3 = E3 − E1 − 4          = 5 V.
                                           4
The total energy of the capacitors is expressed by the formula:
(3.7)
                            C
                                  (
                       W = V12 + V22 + V32 + V42 = 26 µJ.
                            2
                                                         )
                                      C3

                         R                                   C4
                 A                B   R         F                 E
                E1           E2                     E4            E3
                                                             R
                 D                              G                 H
                          C1      C        C2

                                      R

                                                                           Fig. 3

        When points B and H are short connected the same electric current I’ flows
through the resistors in the BFGH circuit. It can be calculated, again by means of the
Kirchhoff’s rule, that:
                              E
(3.8)                   I′ = 4 .
                              2R
The new steady-state voltage on C2 is found by considering the BFGCB circuit:
(3.9)                   V2′ + I ′R = E 4 − E 2
or finally:
                               E
(3.10)                  V2′ = 4 − E 2 = 0 V.
                                2
Therefore the charge q 2′ on C2 in the new steady state is zero.

Question 4.
        In a small time interval ∆t the fish moves upward, from point A to point B, at a
small distance d = v∆t. Since the glass wall is very thin we can assume that the rays
leaving the aquarium refract as if there was water – air interface. The divergent rays
undergoing one single refraction, as show in Fig. 4.1, form the first, virtual, image of the
fish. The corresponding vertical displacement A1B1 of that image is equal to the distance
d1 between the optical axis a and the ray b1, which leaves the aquarium parallel to a.
Since distances d and d1 are small compared to R we can use the small-angle
approximation: sinα ≈ tanα ≈ α (rad). Thus we obtain:
(4.1)                  d1 ≈ R α;
(4.2)                  d ≈ R γ;
(4.3)                  α + γ = 2β;
(4.4)                  α ≈ nβ.
From equations (4.1) - (4.4) we find the vertical displacement of the first image in terms
of d:
                               n
(4.5)                   d1 =        d,
                             2−n
and respectively its velocity v1 in terms of v:
                               n
(4.6)                   v1 =        = 2v .
                             2−n


                          α                                         B1
         b1                            β                B
                              d1               β
                                   α                γ       d
          a                                             A           A1




                                                                              Fig. 4.1

        The rays, which are first reflected by the mirror, and then are refracted twice at
the walls of the aquarium form the second, real image (see Fig. 4.2). It can be
considered as originating from the mirror image of the fish, which move along the line
A’B’ at exactly the same distance d as the fish do.


                                                    B                    4R
                                                                                    B’
                                                    d                               d
              a    A2                                 A                  δ
                  d2                   α             γ d'                          A’
                                           β       β            α
          b2       B2




                                                                               Fig. 4.2

The vertical displacement A2B2 of the second image is equal to the distance d2 between
the optical axis a and the ray b2, which is parallel to a. Again, using the small-angle
approximation we have:
(4.7)                  d’ ≈ 4Rδ - d,
(4.8)                  d2 ≈ Rα
Following the derivation of equation (4.5) we obtain:
                              n
(4.9)                  d2 =       d′.
                             2−n
Now using the exact geometric relations:
(4.10)                  δ = 2α – 2β
and the Snell’s law (4.4) in a small-angle limit, we finally express d2 in terms of d:
                                   n
(4.11)                  d2 =             d,
                               9n − 10
and the velocity v2 of the second image in terms of v:
                                   n         2
(4.12)                  v2 =             v = v.
                               9n − 10       3
The relative velocity of the two images is:
(4.13)                  vrel = v1 – v2
in a vector form. Since vectors v1 and v2 are oppositely directed (one of the images
moves upward, the other, downward) the magnitude of the relative velocity is:
                                           8
(4.14)                  v rel = v1 + v 2 = v .
                                           3

                                    Experimental problem

       The circuit is given in the figure below:


                        R



                                                A


                                V



                       E
Sliding the contact along the rheostat sets the current I supplied by the source. For each
value of I the voltage U across the source terminals is recorded by the voltmeter. The
power dissipated in the rheostat is:
                                 P = UI
provided that the heat losses in the internal resistance of the ammeter are negligible.
1. A typical P–I curve is shown below:
          P
        Pmax




                           I0               I
If the current varies in a sufficiently large interval a maximum power Pmax can be
detected at a certain value, I0, of I. Theoretically, the P(I) dependence is given by:
(5.1)                                    P = EI − I 2 r ,
where E and r are the EMF and the internal resistance of the dc source respectively. The
maxim value of P therefore is:
                                                   E2
(5.2)                                    Pmax =         ,
                                                   4r
and corresponds to a current:
                                               E
(5.3)                                    I0 =       .
                                               2r
2. The internal resistance is determined trough (5.2) and (5.3) by recording Pmax and I0
from the experimental plot:
                                             P
                                         r = max      .
                                              I 02
3. Similarly, EMF is calculated as:
                                              2P
                                         E = max .
                                                 I0
4. The current depends on the resistance of the rheostat as:
                                                E
                                         I=           .
                                             R+r
Therefore a value of R can be calculated for each value of I:
                                              E
(5.4)                                    R = −r.
                                              I
The power dissipated in the rheostat is given in terms of R respectively by:
                                                 E2R
(5.5)                                    P=               .
                                              (R + r) 2
The P–R plot is given below:

                 P

            E2/(4r)




                            R=r                     R

Its maximum is obtained at R = r.
5. The total power supplied by the dc source is:
                       E2
(5.6)          Ptot =      .             Ptot
                      R+r
                                        E2/r




                                                                            R
6. The efficiency respectively is:
                     P      R
(5.7)           η=      =        .   η
                    Ptot R + r
                                         1




                                             R
