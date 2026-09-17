---
id: solution-document-izho-2010-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2010_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [izho-2010-t-q1, izho-2010-t-q2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/izho/2010_T_S.pdf."
---

VI International Zhautykov Olympiad                       Theoretical Competition/Solutions    Page 1/5




              SOLUTIONS FOR THEORETICAL COMPETITION
                                    Theoretical Question 1
                                             1A
        Potential energy of the rigid rod U=mgl/2sinα transforms to the kinetic energy of its rotation
E=J /2, where J=m             is its inertia moment with respect to the vertical support, ω is the
angular velocity. Making balance of these energies, one can find angular velocity of the center of
mass around the axis of the support, and after that one can get instantaneous angular velocity of
rotation of the center of mass around the axis of the support, and with the help of the obtained
expression we find normal acceleration


We find the tangent acceleration from the dynamics equation M=βJ, where M=mgl/2cosα is
momentum of the gravity force with respect to the axis of rotation, β is angular acceleration of the
center of mass related to tangent acceleration         :
                                                  g cosα
Center of mass acceleration а is found from the equation
                                              P+N=ma
where Р is gravity force, N is reaction force of the support. Decomposing this equation into vertical
and horizontal components, and accounting for
                                                      ,                 ,
                                                  ,                 ,
we find
                                                                        ,
                                                                .




                                         Marking scheme
                                            Items                                     Points
          No.
           1 Writing down balance equation for the kinetic and potential                0.5
              energies and determination of the angular velocity of rotation of
              the center of mass
VI International Zhautykov Olympiad                        Theoretical Competition/Solutions         Page 2/5


           2        Determination of the normal acceleration                              0.5
           3        Determination of the tangent acceleration from the equation of       0.75
                    dynamics of rotation
           4        Determination of the component of the reaction force of the          1.25
                    support from the 2nd Newton law


                                                     1В
First of all let us find dependencies of the liquid density and pressure upon the height measured
from the vessel bottom:
                         h 
ρжидкости (h ) ρ
              =  max 1 −   ;                                                                 (1)
                         H
           H                               2
                      1            h 
p (h ) =
       ∫h ρ ( x ) gdx = ρmax gH 1 −  .                                                       (2)
                      2            H 
One can see that pressure goes to zero at the top level of the vessel. It means that in this region
volume of the gas will exceed the volume of the test-tube, so the gas bulbs will come out. Until the
gas doesn’t come out from the test-tube, its isothermal expansion takes place, so
                    1
p (h )V (h )=         ρmax gHV1 .                                                              (3)
                    2
From (2) and (3) one can obtain:
               V1
V (h ) =              2
                          .                                                                    (4)
              h 
           1 − 
              H
Formula (4) is valid for V (h ) < V0 , i.e. for
          V1 
h < H 1 −     .                                                                              (5)
          V0 
      
One can write down the average density of the gas in the test-tube taking into account the mass of
its walls from (4)-(5):
                           h 
                                 2
                                                 V1 
                     ρ1 1 −  , h < H 1 −         ;
              M            H                  V0 
ρгаза (h ) =       =                                                                          (6)
             V (h )                             V1 
                     ρ0 ,         h ≥ H 1 −         ,
                                                 V0 
                                        
where ρ0,1 =   M V0,1 .
Various kinds of dependencies of ρ ρmax upon h H are plotted on Fig.1-3. Curve 1 corresponds to
the liquid, while curve 2 corresponds to the average density of the gas in the test-tube taking into
account the mass of its walls.




                              Fig.1                                          Fig.2
 VI International Zhautykov Olympiad                     Theoretical Competition/Solutions         Page 3/5




                           Fig.3                                             Fig.4

 Curves 1 and 2 don’t intersect (Fig.1), if the condition ρгаза > ρжидкости is fulfilled for
           V1 
h H 1 −
=                , i.e.
           V0 
       
  ρ0     V1
      >     .                                                                                (7)
 ρmax    V0
 In this case the test-tube will always sink.
 If the conditions
   ρ0    V1
       <    ,              ρ1 > ρmax ,                                                       (8)
  ρmax   V0
 are fulfilled in the same time, curves intersect in two points A and B (Fig.2):
                         (point А);                                                          (9)
                           (point B).                                                        (10)
 Point A is unstable because the test-tube will sink due to the shift down, and it will rise due to the
 shift up. Analysis of stability of the point B will be presented below.
 If conditions
                  ρ0    V1
  ρ1 < ρmax ,         <    ,                                                                 (11)
                 ρmax   V0
 are fulfilled, only the intersection point B exists (Fig.3). But one should take into account that at the
 horizontal part of curve 2 motion to the right along this curve results to the gas flow out of the test-
 tube. Consequently, motion to the left along the curve will be quite different. It will take place
 along the parabola corresponding to (6) (upper line of the formula), but with the new (larger) value
 of ρ1 corresponding to the amount of gas remained in the test-tube.

                                            Grading scheme

 1. Pressure dependency upon the height                                          0.5
 2. Dependency of the average gas density in the test-tube upon the height:
 a) taking into account the gas flow from the test-tube (complete answer)        1.0
 b) without taking into account the gas flow from the test-tube (incomplete answer)
                                                                                 0.5
 3. Comparison of dependencies of liquid and gas densities upon the height:
 a) for three cases (complete answer)                                            1.25
 b) for two cases (incomplete answer)                                            0.75
 c) for one case (incomplete answer)                                             0.5
 4. Determination of the height corresponding to the intersection points:
 a) two points (complete answer)                                                 0.5
 b) one point (incomplete answer)                                                0.25
 5. Study of stability for point A                                               0.25
VI International Zhautykov Olympiad                     Theoretical Competition/Solutions      Page 4/5


6. Study of stability for point B                                                   0.5

Totally (maximum)                                                                   4.0

                                                   .
                                               1C
The form of shape described in the problem is explained by the appearance of the full shade (dark
rectangle) and the semi-shadow (lighter outer rectangle). Fig. 1 illustrates the course of outer rays
forming a shadow         and the semi-shadow (        and        ) in cross section perpendicular to
one sides of the source. Denote the full width of the shadow           - ,, the width of the semi-
shadow         - . These values can be expressed through the geometric dimensions of the source
and the plate.
From the similarity of the triangles       and         it follows
                                     (1)

From the similarity of the triangles
and        it follows

                               (2)

From the drawing of shadows, we define the
required sizes



Using formula (1) we find



Hence, we find                    . From
formula (2) we find one of the transverse
source size         . Similar calculations for the perpendicular cross section gives the following
results:



Then, it follows that            .
The results indicate that the long side of the source is placed horizontally (if you use fig.2 from the
conditions of the problem).
                                           Marking scheme.
 No.                          Solution item number                                    Points
1      Plotting of the ray tracing to explain the emergence of the                      0,5
       shadow and semi-shadow
2      Geometric relationships between size of the source, location                   2х0,25
       and size of the plate and size of the shadow and the semi-
       shadow (1)-(2)
3      Calculation of height of the plate above the floor (with a                       0,5
       numerical value)
4      Calculation of the dimensions of the source (with numerical                     2х0,5
VI International Zhautykov Olympiad                       Theoretical Competition/Solutions       Page 5/5


       values)
5      Position of the source with respect to the shadow                                 0,5


                                                     .

                                      Theoretical Question 2
                                               Solution
1. [1 point] The total inertia moment with respect to the rotation axis is a sum of the inertia moment
of the coil itself and the metallic wire
                   J= J 0 + mr 2 .                                                                      (1)
2. [1 point] The equation of the coil rotation as a rigid bode takes the form
                                dω
                   Jε = J           = −M ,                                                              (2)
                                dt
where ε is the angular acceleration.
It follows from equation (2) that the coil stops at the time moment
                          ωJ
                   t0 = 0 .                                                                             (3)
                           M
Finally, the dependence of the angular velocity on time t is found as
                                     M                 ω0 J
                              ω0 − t , t < t0 =
                   ω (t ) =          J                  M .                                            (4)
                              0,              t ≥ t0
3. [1 point] At the stoppage of the coil, electrons keep on moving due to their inertia, as a result the
galvanometer registers the electric current.. Let a = ε r be the linear acceleration of the coil rim. If
the coil is tightly reeled up and the wire is rather thin that linear acceleration is directed along the
wire. At the stoppage process electrons are subjected to the inertial force −me a opposite to the
linear acceleration of the coil. This inertial force can be interpreted as an effective electric field
                                ma
                   Eeff = − e .                                                                         (5)
                                 e
Thus, the effective electromotive force in the coil caused by the inertia of freely moving electrons is
obtained as
                                          m
                   Emf = Eeff  = − e a .                                                              (6)
                                           e
Therefore, the Ohm’s law for the electric circuit is written as
                                       me a
                   IR − =     Emf =            .                                                        (7)
                                         e
Taking into account solution of 2, one gets
                             Mme r                   ωJ
                                       , t < t0 =0
                   I (t ) =  eJR                      M .                                              (8)
                            0,             t ≥ t0
4. [2 points] The electric charge, registered by the galvanometer, is found from (8) as
                                  meω0 r 
                   = It=
                   Q        0              .                                                            (9)
                                     eR
The charge-to-mass ratio of electron is simply obtained as
                   e ω0 r 
                      =           .                                                                    (10)
                  me       RQ
VI International Zhautykov Olympiad                                  Theoretical Competition/Solutions   Page 6/5


5. [1 point] In this case equation (7) is rewritten as follows
                    dI                  me a
                 L + IR −    =   Emf =        .                                                              (11)
                    dt                    e
where L = µ 0 n 2πr 2 h is the coil inductance.
        It follows from equation (11) that the maximal electric current strength is
                         Mme r
                 I max =         .                                                                           (12)
                          eJR
The qualitative dependence of the electric current strength is plotted below




6. [1 point] The maximal electromagnetic energy stored in the coil equals
                                                           2
                       LI 2    µ πh  nMme r 2  
                W0 = max = 0                    .                                                (13)
                         2       2  eJR 
7. [3 points] In the stationary regime the magnetic field inductance
                B = µ 0 nI                                                                          (14)
remains constant in the coil and the electric field is absent. This is not true for initial time moments
while the electric current increases from 0 to its maximal value determined by formula (12).
According to (14) the varying magnetic field generates the vortex electric field which causes the
flux of the electromagnetic energy to appear. The strength of the vortex electric field at the lateral
surface of the coil is found from the electromagnetic induction law of Faradey
                                   dΦ d
                Emf =          = =( Bπ r 2 ) ,
                         E 2π r −                                                                   (15)
                                   dt dt
as
                     r dB µ 0 nr dI
                E=          =         .                                                             (16)
                     2 dt      2 dt
                                                
The mutual orientation of the vectors E , B и S is shown below.




Substituting expressions (14) and |(16) into the expression for the Pointing vector and taking into
                                 
account that the vectors E and B are perpendicular, one obtains
                     µ n 2 r dI
                S= 0         I .                                                               (17)
                       2      dt
Thus, the electromagnetic energy, going inward the lateral surface of the coil while the electric
current increases, is given by the summation (or integrating) of (17) as
                                                                         2
                    µ0 n 2 r                      µ 0πh  nMme r 2  
               W=              I   2
                                         2πrh =                      .                                    (18)
                                                    2 
                                   max
                       4                                       eJR    
VI International Zhautykov Olympiad                                  Theoretical Competition/Solutions    Page 7/5


It is obvious that the same amount of the electromagnetic energy goes outward while the electric
current strength decreases
                                                                          2
                     µ0 n 2 r                      µ 0πh  nMme r 2  
              W '=              I   2
                                          2πrh =                     .                                     (19)
                                                     2 
                                    max
                        4                                    eJR      

                                                      Marking scheme

        №                                  Content                                               Points
         1   Total inertia moment (1)                                                               1
         2   Equation of motion (2)                                                               0.25
         3   Stoppage time (3)                                                                    0.25
         4   Dependence (4) of the angular velocity on time t                                      0.5
         5   Expressions for the effective electric field (5) or (6)                              0.25
         6   The Ohm’s law (7)                                                                    0.25
         7   Dependence (8) of the electric current strength on time t                             0.5
         8   Charge (9) registered by the galvanometer                                              1
         9   Charge-to-mass ratio (10) for electron                                                 1
        10   Equation (11) for the electric current strength                                      0.25
        11   Maximal electric current strength (12)                                               0.25
        12   Qualitative dependence of the electric current strength                               0.5
        13   Maximal energy (13)                                                                    1
        14   Magnetic field induction (14)                                                         0.5
        15   Electromagnetic induction law (15)                                                    0.5
        16   Vortex electric field strength (16)                                                   0.5
        17   Pointing vector (17)                                                                  0.5
        18   Electromagnetic energy (18)                                                           0.5
        19   Electromagnetic energy (19)                                                           0.5
