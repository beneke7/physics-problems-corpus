---
id: solution-document-ipho-2010-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2010/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2010-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2010/T3_S.pdf."
---

41st international Physics Olympiad, Croatia – Theoretical Competition, July 19th 2010          1/8



Solution - model of an atomic nucleus
Solution of Task 1
   a) In the SC-system, in each of 8 corners of a given cube there is one unit (atom, nucleon, etc.),
      but it is shared by 8 neighboring cubes – this gives a total of one nucleon per cube. If
       nucleons are touching, as we assume in our simplified model, then a  2rN is the cube edge
       length a. The volume of one nucleon is then
           4       4a     4a 3
                                   3
                                                                                                 (1)
       VN  rN3              a3
           3       32     38     6
       from which we obtain
              VN                                                                                 (2)
        f        0.52
              a3 6

   b) The mass density of the nucleus is:
                   mN                1.67  10 27                  kg                            (4)
       m  f          0.52                           3.40  1017 3 .
                   VN                    
                               4 / 3  0.85  10 15 
                                                     3
                                                                   m
      Taking into account the approximation that the number of protons and neutrons is
   c) approximately equal, for charge density we get:
              f e    0.52       1.6  10 19                       C                              (5)
       c                                         1.63  10 25 3
              2 VN                       
                       2 4 / 3  0.85  10  15 3
                                                                m
       The number of nucleons in a given nucleus is A. The total volume occupied by the nucleus is:
            AV N                                                                                 (6)
       V        ,
               f
       which gives the following relation between radii of nucleus and the number of nucleons:
                      1/ 3                                                                        (7)
                A            r               0.85 1 / 3
       R  rN             1N/ 3 A1 / 3      1/ 3
                                                       A  1.06 fm  A1 / 3 .
               f            f               0.52
       The numerical constant (1.06 fm) in the equation above will be denoted as r0 in the sequel.




Solution of Task 2
       First one needs to estimate the number of surface nucleons. The surface nucleons are in a
       spherical shell of width 2rN at the surface. The volume of this shell is
 41st international Physics Olympiad, Croatia – Theoretical Competition, July 19th 2010         2/8


                                                                                                  (8)
                   R   R  2rN   
                 4 3         4
       Vsurface 
                                         3

                 3           3
                 4           4        4       4        4
                R 3  R 3   3R 2 2rN   3R 4rN2   8rN3
                 3           3        3       3        3
                8RrN R  2rN    8rN3 
                                       4
                                       3
                                        4
                8 ( R 2 rN  2 RrN2  rN3 )
                                        3

       The number of surface nucleons is:
                                                                   4 3                            (9)
                      Vsurface         8 ( R 2 rN  2 RrN2         rN )
       Asurface  f               f                               3      
                           VN                   4 3
                                                  rN 
                                                3
                      R 2      R  4
                 f 6    2    
                       rN      rN  3 
                     
                      A 2/ 3    A    
                                           1/ 3
                                                  4
                 f 6    2    
                      f        f             3
                                                    
                 6 f A  12 f A  8 f 
                     1/ 3 2 / 3     2 / 3 1/ 3


                                                                       4
                 6 2 / 3  1 / 3 A 2 / 3  2  61 / 3  2 / 3 A1 / 3   
                                                                       3
                 4.84 A  7.80 A  4.19.
                             2/3               1/ 3

       The binding energy is now:

       Eb  A  Asurface aV  Asurface
                                                aV                                               (10)
                                                   
                                                 2
                          aV
        AaV  Asurface          
                           2
        AaV  (3 f 1 / 3 A 2 / 3  6 f 2 / 3 A1 / 3  4 f )aV 
        AaV  3 f 1 / 3 A 2 / 3 aV  6 f 2 / 3 A1 / 3 aV  4 faV 
         
        15.8 A  38.20 A 2 / 3  61.58 A1 / 3  33.09 M eV       

Solution of Task 3 - Electrostatic (Coulomb) effects on the binding energy
   a) Replacing Q0 with Ze gives the electrostatic energy of the nucleus as:
            3Ze                                                                                (12)
                       2
                      3Z 2 e 2
       Uc          
            20 0 R 20 0 R
       The fact that each proton is not acting upon itself is taken into account by replacing Z2 with
       Z(Z-1):
 41st international Physics Olympiad, Croatia – Theoretical Competition, July 19th 2010                                3/8


                3Z ( Z  1)e 2                                                                                          (13)
       Uc 
                  20 0 R

                                                                                                  1 / 3
   b) In the formula for the electrostatic energy we should replace R with rN f                            A1 / 3 to obtain
               3e 2 f 1 / 3 Z ( Z  1)    Z ( Z  1)                                                                    (14)
       Eb                                        1.31  10 13 J
               20 0 rN A       1/ 3
                                             A 1/ 3


             Z ( Z  1)
                1/ 3
                         0.815 M eV  -0.204A 5/3M eV  0.409A 2/3 M eV
                A
       where Z≈A/2 has been used. The Coulomb repulsion reduces the binding energy, hence the
       negative sign before the first (main) term. The complete formula for binding energy now
       gives:
                                                          3e 2 f 1 / 3  A5 / 3 A 2 / 3   (15)
       Eb  AaV  3 f 1 / 3 A 2 / 3 aV  6 f 2 / 3 A1 / 3 aV  4 faV                               
                                                                                  20 0 rN  4   2 


Solution of Task 4 - Fission of heavy nuclei
   a) The kinetic energy comes from the difference of binding energies (2 small nuclei – the
      original large one) and the Coulomb energy between two smaller nuclei (with Z/2=A/4
      nucleons each):
                      A            1 A2e 2                                            (16)
       E kin (d )  2 Eb    Eb  A                  
                         2             4 0 4  4  d
        3 f 1 / 3 A 2 / 3 aV (21 / 3  1)  6 f 2 / 3 A1 / 3 aV (2 2 / 3  1)
                     3e 2 f 1 / 3  A 5 / 3  2 / 3                   
        4 faV 
                     20 0 rN  4
                                          2        1 A2 / 3 1/ 3
                                                                     
                                                                 2 1            
                                                           2          
            1    A2e 2
       
           4 0 16d
       (notice that the first term, Aav, cancels out).

   b) The kinetic energy when d  2R( A / 2) is given with:
                     A                       21 / 3 A 2 e 2                                                           (17)
       E kin  2 Eb    Eb  A 
                                      1
                                                                   
                    2             4 0 16  2rN A1 / 3 f 1 / 3
        3 f 1 / 3 A 2 / 3 aV (21 / 3  1)  6 f 2 / 3 A1 / 3 aV (2 2 / 3  1)
                     e 2 f 1 / 3  3 2 / 3        21 / 3  5 / 3 e 2 f 1 / 3  3 1 / 3 
        4 faV                    ( 2      1)         A                   (2  1) A 2 / 3 
                      0 rN  80                  128            0 rN  40          
        (0.02203 A 5 / 3  10.0365 A 2 / 3  36.175 A1 / 3  33.091)M eV

       Numerically one gets:
       A=100 … Ekin= -33.95 MeV,
       A=150 … Ekin= -30.93 MeV,
 41st international Physics Olympiad, Croatia – Theoretical Competition, July 19th 2010            4/8


       A=200 … Ekin= -14.10 MeV,
       A=250 … Ekin= +15.06 MeV.

       In our model, fission is possible when Ekin (d  2R( A / 2))  0 . From the numerical
       evaluations given above, one sees that this happens approximately halfway between A=200
       and A=250 – a rough estimate would be A≈225. Precise numerical evaluation of the
       equation:
       E  (0.02203 A5 / 3  10.0365 A2 / 3  36.175 A1 / 3  33.091)MeV  0
         kin
                                                                                           (18)
       gives that for A  227 fission is possible.




Solution of Task 5 – Transfer reactions
   Task 5a) This part can be solved by using either non-relativistic or relativistic kinematics.

       Non-relativistic solution
       First one has to find the amount of mass transferred to energy in the reaction (or the energy
       equivalent, so-called Q-value):

       m  total mass after reaction  total mass before reaction                            (19)
                (57.93535  12.00000) a.m.u.  (53.93962  15.99491) a.m.u. 
                0.00082 a.m.u. 
                1.3616  10 30 kg.
       Using the Einstein formula for equivalence of mass and energy, we get:

       Q  total kinetic energy after reaction  total kinetic energy before reaction         (20)
           m  c 2 
           1.3616  10 30  299792458 2  1.2237  10 13 J
       Taking into account that 1 MeV is equal to 1.602∙10-13 J, we get:

       Q  1.2237  10 13 / 1.602  10 13  0.761 MeV                                          (21)


       This exercise is now solved using the laws of conservation of energy and momentum. The
       latter gives (we are interested only for the case when 12C and 16O are having the same
       direction so we don’t need to use vectors):

                             
       m 16 O v 16 O  m 12 C v 12 C  m 58 Ni v 58 Ni                                          (22)

       while the conservation of energy gives:

                                            
       Ek 16 O  Q  Ek 12 C  Ek 58 Ni  E x 58 Ni                                              (23)
41st international Physics Olympiad, Croatia – Theoretical Competition, July 19th 2010                                                                                5/8


      where Ex(58Ni) is the excitation energy of 58Ni, and Q is calculated in the first part of this task.
      But since 12C and 16O have the same velocity, conservation of momentum reduced to:

      m O  m Cv O  m Niv Ni
            16               12                 16               58                  58                                                                               (24)

      Now we can easily find the kinetic energy of 58Ni:


                         m Ni2v  Ni  m Niv Ni                                                       2                                                   (25)
            
                                  58                 2 58                       58                  58
      E k 58 Ni 
                                                                                2m 58 Ni

                         
                           m O  m Cv O 
                                      16                    12        16             2


                                  2m Ni               58



                          E  O
                                  m O  m C
                                      16
                                                       16                  12            2


                                    m Nim O 
                              k                             58             16


      and finally the excitation energy of 58Ni:

                                             
       E x 58 Ni  E k 16 O  Q  E k 12 C  E k 58 Ni                                                                                                               (26)

                             E  O  Q 
                                       16   m C v  O 
                                                           E  O
                                                                   m O  m C 
                                                                     12          2 16
                                                                                                                   16
                                                                                                                                16              12            2


                                                                     m Nim O 
                                  k                                                                           k                     58          16
                                                  2

                             Q  E  O  E  O
                                                 16 m C 
                                                             E  O
                                                                     m O  m C 
                                                                      16
                                                                                               12
                                                                                                                          16
                                                                                                                                     16              12           2


                                                    m O              m Nim O 
                                            k                    k                           16                   k                      58          16


                                          m C  m O   m C                                                             2

                             Q  E  O 1 
                                                                          12                        16                     12
                                                 16
                                                                       
                                          m O      m Nim O  
                                            k                             16                             58                16




                             Q  E  O
                                          m O  m C m Ni  m O  m C
                                                 16
                                                                 16                       12                      58                16           12


                                                       m Nim O 
                                            k                                                            58                16


      Note that the first bracket in numerator is approximately equal to the mass of transferred
      particle (the 4He nucleus), while the second one is approximately equal to the mass of target
      nucleus 54Fe. Inserting the numbers we get:


                       
       E x 58 Ni  0.761  50 
                                                             15.99491  12.57.93535  15.99491  12.                                                             (27)
                                                                                     57.93535  15.99491
                             10.866 MeV


      Relativistic solution
      In the relativistic version, solution is found starting from the following pair of equations (the
      first one is the law of conservation of energy and the second one the law of conservation of
      momentum):


                   
      m 54 Fe  c 2 
                                           
                                           m 16 O  c 2
                                                    
                                                        m C c
                                                                     
                                                                        m  Ni c           12               2                  * 58                2                (28)

                                      1  v  O/ c
                                                 2 16
                                                      1  v  C / c
                                                                  2
                                                                       1  v  Ni/ c          2 12                   2                  2 58             2
41st international Physics Olympiad, Croatia – Theoretical Competition, July 19th 2010                                                                        6/8


                                  m C v C  m  Ni v Ni
                            m 16 O  v 16 O                                    12                    12                           * 58               58


                            1  v  O/ c
                                     2 16
                                          1  v  C/ c 1  v  Ni/ c
                                                           2                         2 12                         2                      2 58             2


      All the masses in the equations are the rest masses; the 58Ni is NOT in its ground-state, but in
      one of its excited states (having the mass denoted with m*). Since 12C and 16O have the same
      velocity, this set of equations reduces to:


             m O  m C  m  Ni
              
                                     16                    12                                    * 58                                                          (29)
      m 54 Fe 
                 1  v  O/ c    1  v  Ni/ c
                                              2 16                   2                           2 58                         2


       m O  m C v O  m  Ni  v Ni
                   16                12                   16                       * 58                       58


           1  v  O/ c         1  v  Ni/ c
                                   2 16              2                                       2 58                         2




      Dividing the second equation with the first one gives:


          
      v 58 Ni                      m O  m C v O 16                      12                    16                                                   (30)

                             m O  m C  m Fe 1  v  O/ c
                                     16                    12                       54                                2 16               2




      The velocity of projectile can be calculated from its energy:


       E kin
                         
                    O 
                    16                    m 16 O  c 2
                                      m O   c                                        16                   2
                                                                                                                                                               (31)

                    1  v  O/ c                   2 16                  2


                                m O   c
        1  v  O/ c 
                                                                          16                 2
                        2 16              2

                           E  O  m O c              kin
                                                                 16                      16                   2



                               m O   c
                                                                                                                  2
                                                 
      v  O / c  1  
                                                                         16              2
          2 16                 2
                                                  
                         E   O    m  O   c   kin
                                                               16                   16                    2



                            m O   c
                                                                                                      2
                                              
      v O   1  
                                                                16             2
              16
                                                c
                     E  O   m O   c 
                                                    16                       16                 2
                                              kin




      For the given numbers we get:


                                                                                                                                            
                                                                                                                                                     2         (32)
                           15.99491  1.6605  10  27  2.9979  10 8 2 
      v     16
                   O  1                                                    c 
                           50  1.602  10 13  15.99491  2.9979  10 8 2 
                                                                                                                                              
                         1  0.99666 2  c  0.08172  c  2.4498  10 7 km/s

      Now we can calculate:


          
      v 58 Ni                  15.99491  12.0  2.4498 10 7 km/s  1.6946  10 6 km/s                                                                    (33)

                             15.99491  12.0  53.93962 1  0.08172 2
41st international Physics Olympiad, Croatia – Theoretical Competition, July 19th 2010                               7/8




      The mass of 58Ni in its excited state is then:




    m  Ni   m O   m C 
      * 58                16              12        v O 
                                                    1  v 2 58 Ni / c 2
                                                             
                                                                                       (34)
                                                                                      16


                                  1  v  O  / c v Ni      2 16            2       58



                                 1  1.6945  10 / 2.9979  10  2.4498  10 6            8 2               7
              (15.99491  12.0)                                             a.m.u. 
                                                                    1  0.08172 2                1.6945  10 6
                    57.9470 a.m.u.


      The excitation energy of 58Ni is then:

                                     
   E x  m* 58 Ni  m 58 Ni  c 2  57.9470  57.93535  1.6605  10 -27 2.9979  10 8                          (35)
                                                                                                                 2


       2.00722  10 12 / 1.602  10 13 MeV/J  10.8636 MeV


      The relativistic and non-relativistic results are equal within 2 keV so both can be considered
      as correct –we can conclude that at the given beam energy, relativistic effects are not
      important.

      Task 5b) For gamma-emission from the static nucleus, laws of conservation of energy and
      momentum give:

      E x  58 Ni  E  Erecoil                                                                                     (36)
                         p  precoil
      Gamma-ray and recoiled nucleus have, of course, opposite directions. For gamma-ray
      (photon), energy and momentum are related as:

          E  p  c                                                                                                 (37)



      In part a) we have seen that the nucleus motion in this energy range is not relativistic, so we
      have:

                     p 2recoil                p2                   E2                                               (38)
      E recoil                                        
                      
                   2m 58 Ni                  
                                         2m 58 Ni             
                                                            2m 58 Ni  c 2
      Inserting this into law of energy conservation Eq. (36), we get:

                                                                    E2                                               (39)
                    
         E x 58 Ni  E  E recoil  E 
                                                            2m  Ni c
                                                                   58             2


      This reduces to the quadratic equation:
41st international Physics Olympiad, Croatia – Theoretical Competition, July 19th 2010           8/8


      E2  2m 58 Nic 2  E  2m 58 Nic 2 E x  58 Ni  0                                   (40)
      which gives the following solution:


      E 
                              
               2m 58 Ni c 2  4 m 58 Ni c 2        8m Nic E  Ni 
                                                       2        58        2
                                                                              x
                                                                                  58              (41)

                                                   2
               m Nic   2m Nic E  Ni  m Nic
                      58           2 2        58   2
                                                       x
                                                           58        58           2


      Inserting numbers gives:

      E  10.8633 MeV                                                                            (42)
      The equation (37) can also be reduced to an approximate equation before inserting numbers:

                         Ex                                                                     (43)
      E  E x 1                 10.8633 MeV
                         58
                 2m Ni c     2 
                                         
      The recoil energy is now easily found as:

      Erecoil  E x  58 Ni  E  1.1 keV                                                       (44)



      Due to the fact that nucleus emitting gamma-ray (58Ni) is moving with the high velocity, the
      energy of gamma ray will be changed because of the Doppler effect. The relativistic Doppler
      effect (when source is moving towards observer/detector) is given with this formula:

                                     1                                                          (45)
       f detector  f  ,emitted
                                     1 
      and since there is a simple relation between photon energy and frequency (E=hf), we get the
      similar expression for energy:

                                     1                                                          (46)
      Edetector  E ,emitted
                                     1 
      where =v/c and v is the velocity of emitter (the 58Ni nucleus). Taking the calculated value of
      the 58Ni velocity (equation 29) we get:

                                     1           1  0.00565                                    (47)
      Edetector  E ,emitted              10.863              10.925 MeV
                                     1           1  0.00565
