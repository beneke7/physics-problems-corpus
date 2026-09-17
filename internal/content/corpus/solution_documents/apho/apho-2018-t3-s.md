---
id: solution-document-apho-2018-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2018/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2018-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2018/T3_S.pdf."
---

Theory Q3
                     Thermoelectric effects and theirapplication in
                  thermoelectric generator and refrigerator(10 points)
                                     Solution and Marking scheme

A. Heat transfer and thermoelectric generator
A1. Heat transfer in a homogeneous conducting bar
A1.1     Consider heat transfer in the segment dx of the bar in the steady state. Equation for
0.75 pt the balance of the energy exchange through the cross-sectional area is written as
              dT  x     dx 2     dT  x  dx        dT  x       d 2T  x 
          kS            I  kS                kS           kS            .dx
                dx        S             dx               dx             dx 2
          Hence
                d 2T  x   I 2                                                                   0.25
          kS                                                                             (A1)
                   dx 2       S
          Integration of (A1) gives
           dT  x       I 2
                      2 x  C1 ,                                                         (A2)
             dx          kS
                       I2
          T  x       x 2  C1 x  C2 .                                                 (A3)
                   2kS 2
          Constants C1 , C2 are derived from the boundary conditions
          x  0  T  T1  C2  T1 ,                                                       (A4)    0.25
                                 T2  T1 1  L 2
          x  L  T  T2  C1                   I .                                      (A5)
                                    L      2 S 2k
          Equation for the temperature distribution in the bar is
                           LI 2 T1  T2      I 2 2
          T  x   T1       2
                                          x        x .                                   (A6)   0.25
                          2kS       L         2kS 2


A1.2      Using (A2) –(A5) we obtain the equation for the heat current at x
1.0 pt                   dT  x  kS          I 2     L
          q  x    kS             1 2
                                      T  T        x  ,                                 (A7)   0.5
                           dx      L           S       2
          at x  0, and x  L
                         kS           LI 2              RI 2
          q  x  0        1 2
                             T  T          K  1 2
                                                 T  T       ,                             (A8)
                          L           2S                  2                                        0.25
                     kS               LI 2                  RI 2
          q  x  L   T1  T2           K T1  T2        .                        (A9)    0.25
                      L               2S                      2
                   kS         L
          Here K      , R        .
                    L          S

A2. Relation between Peltier and Seebeck Coefficients
Thermocouple consists of two subsystems: a) the conducting electron gas that performs an ideal
themodynamic cycle; b) Nuclei and bounded electrons of the bar crystal that oscillate around

                                                   Page 1
equillibrium positions at finite temperature and participate in heat conduction process. If the
resistance of the thermocouple is neglected, these two subsystems may be considered as
noninteracting, the electron gas exchanges heat only with the heat source at T1 and the heat sink at
T2 , performing the ideal Carnot cycle.
A2.1       Electron gas receives heat from heat source due to the Peltier effect              0.25
0.25 pt     q1   1 I                                                               (A10)
A2.2.     The heat amount transferred to the heat sink due to the Peltier effect                   0.25
0.25 pt   q2   2 I                                                                     (A11)
A2.3.     Power delivered by the electron gas due to the Seebeck emf is                            0.5
0.5 pt      P   I   T1  T2  I                                                     (A12)
A2.4      The efficiency of the ideal Carnot cycle applied to the thermocouple can be
0.5 pt    written as
               P      T T
            ,  1 2 .                                                       (A13)  0.25
               q1       T1
          Thus
          T1  T2  T1  T2 
                                                                                        (A14)
             T1       1
                                                                                                   0.25
          Comparing these equations, one has  1   T1 .
          This is the Peltier coefficient at the first junction contacting with the heat source.
          Generally, one has    T .

A3. Thermoelectric generator
A.3.1.  Power received by the thermocouple from the heat source (see also (A8)) is
0.5 pt                               1
         q1  K T1  T2    T1I  I 2 R.                                     (A15)              0.25
                                     2
        Here  is the Seebeck coefficient of the thermocouple and
                           k S      k S
         K  K A  KB  A A  B B ,                                             (A16)
                             L        L
                           L  L
         R  RA  RB  A  B ,                                                   (A17)
                           SA      SB
          are its thermal conductance and internal resistance.
          The heat sink receives a power (see also (A9))
                                     1
          q2  K T1  T2   T2 I  I 2 R.                                            (A.18)     0.25
                                     2
A3.2.     The efficiency of the thermoelectric generator is
0.75 pt       PL              I 2 RL                       m                                       0.25
                                                                   .                (A19)
              q1 K T1  T2    T1 I  I R / 2 K T1  T2   T1 1
                                          2
                                                                 
                                                    I 2R       IR 2
          Here we use RL  mR . The electrical current in the circuit is




                                                Page 2
                     T1  T2           T1  T2                                         0.25
               I                                      .                            (A20)
                      RL  R             1  m  R
          Substituting (A20) into (A19) we obtain the expession for the efficiency
                             m  T1  T2 
                           2
                                                                .                    (A21)
               KR 1  m                 T T                                               0.25
                    2
                            T1 1  m   1 2
                                           2
A3.3.     Replacing the figure of merit
0.25                2
               Z                                                                    (A22)
                  KR
                  T T
          and c  1 2 the efficiency of the ideal Carnot cycle in (A21), one has
                    T1
                                         m
                 c            2
                                                            .                        (A23)
                        1  m   1  m  1                                                0.25
                                             c
                          ZT1                       2
          From (A23) one sees that larger Z leads to the larger efficiency of the
          corresponding thermoelectric generator. The condition ZT1  1 can be used for
          material application in thermoelectric generators.

A4. The maximum efficiency
A4.1      When RL  R or m=1, the power consumed on the load is maximum. The
0.25 pt   efficiency in that case is
                       T1  T1
           P                    .                                                  (A24)   0.25
                   4 3T1  T2 
                   Z  2 
A4.2.     Equation (A23) may be rewritten as
0.75 pt                        m                                                             0.25
                        2
                                               ,                                     (A25)
               a 1  m   b 1  m   1 / 2
                             1               T1
          where a                   , b         .
                        Z T1  T2       T1  T2
                        d                              2b  1
          Equation          0 has the solution M  1         or                            0.25
                        dm                               2a

          M  1 Z
                         T1  T2  .
                                                                            (A26)            0.25
                         2
A4.3.     Using (A25), (A26) we obtain the maximum efficiency of the thermoelectric          0.25
0.25 pt   generator
                 T  T  M  1
          max  1 2                                                        (A27)
                   T1      T2 
                       M  
                           T1 
          (Correct expression containing either M , Z or both is also accepted)


                                                                Page 3
A5. The maximum figure of merit
A5.1     According to (A22) Z takes the maximum value Z  Z m when KR  y is
0.5
                                                                S
         smallest. Denoting  k A S A  k B S B   A  B   y, x  A
                                                   S A SB         SB
                                                       
          one has the equation  k A x  k B   A   B   y .                                                      0.25
                                                x       
          It is easily to show the function y has the minimum at x=xm, where
                                                              1/2
                Ak B    S    k 
          xm         or A   A B  .
               BkA      SB  B k A                                                                                 0.25
                                                                                                            (A28)

A5.2      If     the      ratio        of        cross-sectional              areas     satisfies   (A28)      then
                                                  2                                                                   0.25
0.25 pt                     1/2           1/2
           ym    A k A     B k B                    and the maximum figure of merit of the
                                             
          thermocouple is
                                2
          Zm                                         2
                                                          .
                   A k A 1/2    B k B 1/2                                                          (A.29)
                                                 

A6. The optimal efficiency
A6.1.    The thermocouple with two bars made from material A and B has the following
0.5 pt   the figure of merit
                                2                              2                                                    0.15
          Zm                                         2
                                                                       3.15 103 K 1 .                  (A.30)
                   A k A 1/2    B k B 1/2             4 Ak A
                                                 
          The optimal efficiency of the thermocouple AB when T1= 423K, T2 = 303K has
          the following value
                        T1  T2                            120                                                        0.25
          opt                                                            5.84% . (A.31)
                       1     3T1  T2              1        3  423  303
                  4Z m                       4            
                                  2             3.2  103         2
          The corresponding ideal Carnot efficiency for that case is
                T  T 120
          C  1 2                  28.4%                                           (A32)
                   T1         423
                                                                                                                      0.1
          opt / C  0.21 .
A6.2      The maximum efficiency of the thermoelectric generator designed from AB 0.25
0.25 pt   materials is

                         M  1  Zm
                                            T1  T2   1  3.2 103  363  1.46
                                                 2
                                      M  1
                       max  C                       6.0% .
                                       T2 
                                    M                                                                    ( A.33)
                                       T1 



                                                                    Page 4
 B. Thermoelectric refrigerator
 B1. The cooling power and the maximum temperature difference
  B1.1    For cooling purpose we choose the current direction so that heat is absorbed at                              0.25
  0.25pt upper junction (temperature T1) due to Peltier effect and transferred to the A & B
          bars. Using (A.9) one gets cooling power taken out from heat source at T1
                                         RI 2
           qC   T1 I  K  T1  T2                                              (B.1)
                                          2
           where K , R are thermal conductance and internal resistance of thermocouple.
  B1.2.                                                                                           dqC
           Condition for the maximum cooling power qCM is founded from                                 0 , one
  0.5                                                                                              dI                  0.25
           has
                          T1
                  Iq           ,                                                                            (B2)
                            R

                                2T1
                     qCM               K  T2  T1  .                      (B3)
                                2R    .
           The maximum temperature depression is derived from the condition qCM  0 ,
           which gives
                                                2T1min
                                                    2             2
                                                               ZT1min                                                  0.25
                  Tmax  T2  T1min                                .                                       (B4)
                                                2 KR             2
                          2
           Here Z              is the figure of merit of the thermocouple.
                          KR

B2. The working current
 B2.1     Thermocouple AB with Z m  3.15 103 K 1 is used for a refrigerator. The
 0.25pt
           lowest cooling temperature T1min is found from the same equation (B4)
                2      2          2
          0  T1min     T1min     T2
                      Zm         Zm
                     1
           T1min 
                     Zm
                           1  2Z T 1 .
                                       m 2                                                                    (B5)
                                                                                                                       0.1

           Putting T2  300K and Z m  3.15 103 K 1 in (B.5) we obtain
           T1min  2.22 102 K.                                                                               (B.6)    0.15
 B2.2.                                                                    AL       B L       2 B L
           Putting the value of the internal resistance R                                           4.0  103 
 0.5                                                                      SA        SB          SB                     0.25
           in (B2), one gets the working current
                   T1min       4.2  104  221.5                                                                     0.25
           IW                                    A  23.3A                                                 (B7)
                     R               4  103




                                                               Page 5
B3. The coefficient of performance
B3.1     According to the energy conservation law, the power supplied by the electrical
0.5pt    source P equals to the Joule heat plus Peltier’s heat taken away in thermocouple
         per unit of time:
                                                                                                         0.25
          P   (T2  T1 ) I  RI 2 .                                                           (B.8)
          The equation for Coefficient of Performance (COP) is
                                                           RI 2
                        qC
                                 T1I  K T2  T1  
                                                            2                                            0.25
                                                        2
                                                                                                 (B9)
                        P             (T2  T1 ) I  RI
B3.2.     Electrical current I  corresponds to the maximum of the COP is found from the
0.25
                d
          equation  0 . (B9) may be rewritten in convenience form
                dI
              1  T1  T2  I  2 K  T2  T1 
                                             .                                               (B10)
              2    2  (T2  T1 )  RI  I
                            d
          The equation          0 leads to
                            dI
                                                                         2
            R T1  T2  I 2  4 K T2  T1  RI  2 K T2  T1   0 ,
                 2 K T2  T1  I    K            2
          I2                          T2  T1   0 ,                                        (B.11)
                       TM          RTM

          with TM 
                         T2  T1  .                                                           (B.12)
                         2
          Solution of (B.11) is
                 K T2  T1 
          I 
                     TM
                                 1  Z T  1 .
                                             M                                                  (B.13) 0.25

                                                   2
          (Taking into account that Z                  , (B.13) can be written in other form
                                                   KR
                       T2  T1 
          I                            )                                                      (B.14)
                 R    1  Z T  1
                                M


B3.3.     Substituting (B.14) into (B.9) one has                                                         0.25
0.25                                               T1  1  ZTM  T2 / T1 
                                          max                                  .              (B.15)
                                                   T2  T1   1  ZTM  1




                                                           Page 6
