---
id: solution-document-apho-2018-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2018/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2018-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2018/T2_S.pdf."
---

Theory Q2
                                   Space elevator (8 points)
                                  Solution and Marking Scheme

1 Cylindrical Space Elevator with Uniform Cross Section
1.1    Consider a small element of the cylinder of thickness dr at position r , there are
0.5pt four forces acting on that element: gravitational W  r  , centrifugal F  r  , cable
                                                                                 C
                                                         
       tension FD  T  r  at position r , tension FU  T  r  dr  at position r  dr .
       Positive direction is chosen from the Earth center outward. The net force must be
       zero, therefore:
        W  FC  T  r  dr   T  r   0
                                                   ,                                              0.1
         W  FC  A.  r  dr   A.  r   0
       Hence
                GM  A dr  
        Ad                      A dr    2 r
                      r2
           d            1      r 
                GM   2  3 
           dr            r     RG                                                               0.1
       Note that, the tensions at the ends of the
       cylinder are zero. Integrating the above
       equation from R to RG, one obtains the stress
       at RG
                                                                                                  0.1
                         1      3        R2 
         RG   GM                3 ,
                          R 2RG 2RG 
       Similarly, integrating from RG to H (the distance from the Earth center to the
       upper end of the cylinder), one obtains the same stress at RG
                         1       3       H2                                                     0.1
         RG   GM                3
                          H 2 RG 2 RG 
       Equating the two above expressions, one arrives to the equation:
        R H 2  R 2 H  2 Rg3  0 ,

                                            R                   
                                                            3
                                                      RG 
        from where H is determined: H   1  8              1  1.51105 km.
                                            2        R        
                                                                
                                                 R                    
                                                                  3
                                                          R                                     0.1
        The height of the cylinder L  H  R   1  8  G   3  1.45 105 km.
                                                 2
                                                          R         
                                                                       
        Note: Students can just equalize the net gravitational force and the net centrifugal
        force acting on the cylinder to obtain H correctly: full mark.
1.2     The maximal stress is determined from the requirement
0.5pt



                                               Page 1

                                          d        1    r                                    0.25
                                              GM   2  3   0
                                          dr         r RG 
         which yields r  RG                                                                    0.25

1.3   Maximal stress is expressed by
0.5pt                   1      3     R2 
        RG   GM              3                                                  (1)
                         R 2RG 2RG 
                          3R 2 R 4 
        RG    g  R                                                              (2)    0.25
                          2 RG 2RG3 
      Numerical calculation with   7900kg / m3 one obtains the ratio:
         RG  383 GPa
                             76.5 ,                                                           0.25
       5.0GA 5.0 GPa
      This ratio is much larger than 1, therefore steel is not suitable to build this kind of
      elevator.
      If eq. (2) is not obtained and other correct equation like eq. (1) is derived - 0.1pt
      from full mark (get only 0.15pt for maximal stress).

2 Carbon Nanotubes
2.1    Expand exponential function in series, and limit to the lowest power of x, one
0.25pt                 4x 2 
       has V  V0  1  2  and gets P  V0 and                                     0.1
                              a 
               4V0                                                                              0.15
          Q       .
                a2
2.2              dV    8V                                                                       0.1
0.25pt    F         20 x
                 dx     a
                       8V0
          then k           313Nm 1 .                                                         0.15
                        a2
2.3       Young’s modulus of the carbon nanotube. Denote d the diameter of the carbon
0.5pt     nanotube, one has d  27b /  .
               stress  F / A kx / A ka 32V0                                          0.25
          E1                                2
               strain    x/a    x/a      A a d
          E  NE1  342 GPa
                                                                                      0.25


2.4           1 2            2V0 1                                                              0.25
0.5pt    V0  kxmax  xmax      a
              2               k  2
                                                                                                0.25
          0.071nm
2.5                                                         xmax                                0.5
0.5pt    Tensile strength of the carbon nanotube,  0  E         E / 2  171GPa.
                                                             a




                                                  Page 2

2.6                d2    3a                                                                  0.25
0.5pt   Volume                 contains 18 carbon
                   4       2
        atoms, therefore the density of the
        carbon                            nanotube,
                             3                                                       3a /2
            2  27 12  10
                     2
                                 = 1440 kg/m 3 .
                    d 3a                                                                     0.25
             NA         
                     4      2




3 Tapered Space Elevator with Uniform Stress
3.1   The solution to this section is analogous to
0.5pt that given in the previous section, however,
      now one has to take into account the fact that
      the stress  is constant, but the cross section
      area A varies along the tower.
              GM  A dr  
       dA          2
                              A dr    2 r
                   r
          dA  gR 2  1      r                                                               0.25
                      2  3  dr
           A        r RG 
        where        g  GM / R 2      is  gravitational
        acceleration at the Earth surface. By
        integration one can obtain the tower cross
        section as:
                            gR 2  1 R 2    1      ( R  h) 2                             0.25
         A  h   AS exp           3                      
                             R 2 RG R  h            2 RG3  
3.2   Using the condition A(H)=A(R)=AS one arrives                    to   the   equation
0.5pt R H 2  R 2 H  2 RG3  0 , which allows to determine                                   0.25

           R                 
                         3
                  RG         151000 km.
        H    1 8         1
           2      R                                                                      0.25
                             
                                           3
3.3                AG          R  R            R                                        0.5
0.5pt The ratio        exp[        {      3       2}]  1.623 where LC 
                   AS         2 LC  RG         RG                           g
3.4   Net force exerted on the counterweight must be zero
1.0pt   GMmC                                                                                 0.5
                 2
                     A  RG  hC  .  mC 2  RG  hC  , replacing A  RG  h  from the
       RG  hC 
      equation for cross section area, one can determine the counterweight mass.


                                                  Page 3

                          R 2  2 R 3  R 3 2 R 3   R  h 3  
              AS LC exp           G          G        G   C
                                                                
                           2 L R
                          C G 
                                 3
                                        R          R     h    
                                                      G     C                                  0.50
        mC                                           3
                                                                    .
                          R  RG  hC    RG  
                            2
                                        1          
                               RG3        RG  hC  

4 Applications
4.1   An object can leave the Earth if its energy at the distance r satisfies
0.5pt      m ( r ) 2 GMm                                      1
       E                  0 from which rC   2GM /    53200km
                                                             2 3
                                                                                     0.25
              2        r
      In order to launch an object, the upper end of the tower must locate above the
      distance rC.                                                                   0.25

4.2   We denote the Earth orbital velocity as vE , the spacecraft velocity when it’s
1.0pt released from the tower top as v   h . The spacecraft can reach the furthest
                                         1      0
                                                 
      distance from the Sun if v1 is parallel to vE . The spacecaft velocity relative to the
       Sun is vE  v1 . The Earth orbital radius RE also is the smallest distance from the
       sun (if one neglects the tower length compared to the radius of the Earth’s orbit).
       r2 is the apogee distance of the spacecraft from the Sun, v2 is its velocity at apogee.
       Angular momentum and energy convervation laws read
       m  vE  v1  RE  mv2 r2                                                               0.1

        1                2  GM S m 1 2 GM S m                                                     0.1
           m  vE  v1             mv2 
        2                     RE      2             r2
                                     GMm
       Here the energy term                 due the earth’s gravity is neglected. Eliminating v2
                                      h0
       one has
                      2   2GM S  2                            2 2                               0.1
         vE   h0            r2  2GM S r2   vE  h0  RE  0
                            RE 
                                                     2                                            0.1
                                         vE   h0  RE2
       from which rMax  r2                              2
                                                              .
                                  2GM S   vE   h0  RE
       Numerical calculation gives r2=5.3AU, that covers Jupiter’s orbit.                         0.1
       Similarly, for the spacecraft to approach as close as possible to the Sun, the
                                                           
       released velocity v1 must be antiparallel to vE . The spacecaft velocity relative to
       the Sun is vE  v1 , r2 is the perigee distance of the spacecraft from the Sun, v2 is its
       velocity at perigee.
       The previous angular momentum and energy convervation laws still hold,
        m  vE  v1  RE  mv2 r2                                                                0.1




                                               Page 4

       1                2  GM S m 1 2 GM S m                                                  0.1
          m  vE  v1             mv2 
       2                     RE      2          r2
                                    GMm
       Here the energy term             due the earth’s gravity is neglected. Eliminating v2
                                     h0
       one has
                     2   2GM S  2                           2 2
                                                                                              0.1
        vE   h0            r2  2GM S r2   vE  h0  RE  0
                           RE 
                                               2

       from which rmin  r2 
                                    vE   h0  RE2     .
                                                                                             0.1
                                                     2
                                2GM S   vE   h0  RE
       Numerical calculation gives rmin  0.43AU, meaning the Mercury’s orbit is within 0.1
       our reach.

References
[1] Artsutanov, Y. Kosmos na elektrovoze. Komsomolskaya Pravda July 31 (1960); contents
   described in Lvov Science 158, 946–947 (1967).
[2] Pearson, J. The Orbital Tower: a Spacecraft Launcher Using the Earth's Rotational Energy.
   Acta Astronautica 2, 785 (1975)
[3] Aravind, P. K. The physics of the space elevator. American Journal of Physics 75, 125
   (2007).
[4] Bochníček, Z. A Carbon Nanotube Cable for a Space Elevator. The Physics Teacher 51, 462
   (2013).




                                                Page 5
