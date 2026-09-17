---
id: solution-document-apho-2018-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2018/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2018-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2018/T2_S.pdf."
---

Page 1
Theory Q2
Space elevator (8 points)
Solution and Marking Scheme
1 Cylindrical Space Elevator with Uniform Cross Section
1.1
0.5pt
Consider a small element of the cylinder of thickness dr at position , r there are
four forces acting on that element: gravitational   W r

, centrifugal   C F r

, cable
tension   D F T r 
 
at position r , tension   U F T r dr  
 
at position r dr  .
Positive direction is chosen from the Earth center outward. The net force must be
zero, therefore:
   
   
0
. . 0
C
C
W F T r dr T r
W F A r dr A r  
     
      
,
Hence
 
  2
2
2 3
1
G
GM Adr
Ad Adr r
r
d r
GM
dr r R

  


 
 
    
 
Note that, the tensions at the ends of the
cylinder are zero. Integrating the above
equation from R to RG, one obtains the stress
at RG
 
2
3
1 3
2 2
G
G G
R
R GM
R R R
 
 
    
 
,
Similarly, integrating from RG to H (the distance from the Earth center to the
upper end of the cylinder), one obtains the same stress at RG
 
2
3
1 3
2 2
G
G G
H
R GM
H R R
 
 
    
 
Equating the two above expressions, one arrives to the equation:
2 2 3
2 0 g RH R H R    ,
from where H is determined:
3
5
1 8 1 1.51 10 km.
2
G R R
H
R
            
     
The height of the cylinder
3
5
1 8 3 1.45 10 km.
2
G R R
L H R
R
              
     
Note: Students can just equalize the net gravitational force and the net centrifugal
force acting on the cylinder to obtain H correctly: full mark.
0.1
0.1
0.1
0.1
0.1
1.2
0.5pt
The maximal stress is determined from the requirementPage 2
2 3
1
0
G
d r
GM
dr r R


 
    
 
which yields G r R 
0.25
0.25
1.3
0.5pt
Maximal stress is expressed by
 
2
3
1 3
2 2
G
G G
R
R GM
R R R
 
 
    
 
(1)
 
2 4
3
3
2 2
G
G G
R R
R g R
R R
 
 
    
 
(2)
Numerical calculation with 3
7900 / kg m   one obtains the ratio:
  383
76
5 5 .0
.5
.0
G GPa
GPa
R
GA

  ,
This ratio is much larger than 1, therefore steel is not suitable to build this kind of
elevator.
If eq. (2) is not obtained and other correct equation like eq. (1) is derived - 0.1pt
from full mark (get only 0.15pt for maximal stress).
0.25
0.25
2 Carbon Nanotubes
2.1
0.25pt
Expand exponential function in series, and limit to the lowest power of , x one
has
2
0 2
4x
V V 1
a
 
    
 
and gets 0 P V   and
0
2
4V
Q .
a

0.1
0.15
2.2
0.25pt
0
2
8V dV
F x
dx a
   
then 1 0
2
8V
k 313Nm .
a

 
0.1
0.15
2.3
0.5pt
Young’s modulus of the carbon nanotube. Denote d the diameter of the carbon
nanotube, one has 27 / . d b  
0
1 2
32V stress F / A kx / A ka
E
strain x / a x / a A a d

 
    
1 342GPa E NE  
0.25
0.25
2.4
0.5pt
2 0
0 max max
2 1 1
2 2
V
V kx x a
k
   
0.071nm 
0.25
0.25
2.5
0.5pt Tensile strength of the carbon nanotube, max
0 / 2 171GPa.
x
E E
a
   
0.5Page 3
2.6
0.5pt Volume
2
3
4 2
d a 
 contains 18 carbon
atoms, therefore the density of the
carbon nanotube,
2
3
3 2 27 12 10
= 1440k m
2
g
4
/
3
A
d
N
a



 
  
 .
0.25
0.25
3 Tapered Space Elevator with Uniform Stress
3.1
0.5pt
The solution to this section is analogous to
that given in the previous section, however,
now one has to take into account the fact that
the stress  is constant, but the cross section
area A varies along the tower.
 
  2
2
2
2 3
1
G
GM Adr
dA Adr r
r
dA gR r
dr
A r R

  


 
 
    
 
where 2
/ g GM R  is gravitational
acceleration at the Earth surface. By
integration one can obtain the tower cross
section as:
 
2 2 2
3 3
1 1 ( )
exp
2 2
S
G G
gR R R h
A h A
R R R h R


    
       
    
0.25
0.25
3.2
0.5pt
Using the condition A(H)=A(R)=AS one arrives to the equation
2 2 3
2 0 G RH R H R    , which allows to determine
3
1 8 1 151000km.
2
G R R
H
R
           
     
0.25
0.25
3.3
0.5pt The ratio
3
exp[ { 3 2}] 1.623
2
G
S C G G
A R R R
A L R R
   
       
   
where C L
g



0.5
3.4
1.0pt
Net force exerted on the counterweight must be zero
 
    2
2
. C
G C C G C
G C
GMm
A R h m R h
R h
     

, replacing   G A R h  from the
equation for cross section area, one can determine the counterweight mass.
0.5
3 /2 aPage 4
 
 
3 3 3 3 2
3
3 2
3
2 2
exp
2
1
G G C G
S C
C G G C
C
G C G
G G C
R R h R R R
A L
L R R R h
m
R R h R
R R h

      
    
         
    
   
      
.
0.50
4 Applications
4.1
0.5pt
An object can leave the Earth if its energy at the distance r satisfies
2
( )
0
2
  
m r GMm
E
r

from which  
1
2 3 2 / C r GM   53200km 
In order to launch an object, the upper end of the tower must locate above the
distance rC.
0.25
0.25
4.2
1.0pt
We denote the Earth orbital velocity as , E v the spacecraft velocity when it’s
released from the tower top as 1 0  v h  . The spacecraft can reach the furthest
distance from the Sun if 1

v is parallel to .

E v The spacecaft velocity relative to the
Sun is 1  E v v . The Earth orbital radius RE also is the smallest distance from the
sun (if one neglects the tower length compared to the radius of the Earth’s orbit).
r2 is the apogee distance of the spacecraft from the Sun, v2 is its velocity at apogee.
Angular momentum and energy convervation laws read
 
 
1 2 2
2 2
1 2
2
1 1
2 2
E E
S S
E
E
m v v R mv r
GM m GM m
m v v mv
R r
 
   
Here the energy term
0
GMm
h
 due the earth’s gravity is neglected. Eliminating v2
one has
   
2 2 2 2
0 2 2 0
2
2 0 S
E S E E
E
GM
v h r GM r v h R
R
 
 
       
 
from which
 
 
2 2
0
2 2
0 2
E E
Max
S E E
v h R
r r
GM v h R



 
 
.
Numerical calculation gives r2=5.3AU, that covers Jupiter’s orbit.
Similarly, for the spacecraft to approach as close as possible to the Sun, the
released velocity 1

v must be antiparallel to .

E v The spacecaft velocity relative to
the Sun is 1  E v v , r2 is the perigee distance of the spacecraft from the Sun, v2 is its
velocity at perigee.
The previous angular momentum and energy convervation laws still hold,
  1 2 2 E E m v v R mv r  
0.1
0.1
0.1
0.1
0.1
0.1Page 5
 
2 2
1 2
2
1 1
2 2
S S
E
E
GM m GM m
m v v mv
R r
   
Here the energy term
0
GMm
h
 due the earth’s gravity is neglected. Eliminating v2
one has
   
2 2 2 2
0 2 2 0
2
2 0 S
E S E E
E
GM
v h r GM r v h R
R
 
 
       
 
from which
 
 
2 2
0
min 2 2
0 2
E E
S E E
v h R
r r
GM v h R



 
 
.
Numerical calculation gives min 0.43AU, r  meaning the Mercury’s orbit is within
our reach.
0.1
0.1
0.1
0.1
References
[1] Artsutanov, Y. Kosmos na elektrovoze. Komsomolskaya Pravda July 31 (1960); contents
described in Lvov Science 158, 946–947 (1967).
[2] Pearson, J. The Orbital Tower: a Spacecraft Launcher Using the Earth's Rotational Energy.
Acta Astronautica 2, 785 (1975)
[3] Aravind, P. K. The physics of the space elevator. American Journal of Physics 75, 125
(2007).
[4] Bochníček, Z. A Carbon Nanotube Cable for a Space Elevator. The Physics Teacher 51, 462
(2013).
