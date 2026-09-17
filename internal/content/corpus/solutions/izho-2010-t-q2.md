---
id: izho-2010-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2010-t-q2
solution_type: official
source_document: solution-document-izho-2010-t-s
source_pdf: cache/phoxiv/izho/2010_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2010_T_S.pdf."
---

Theoretical Question 2
Solution
1. [1 point] The total inertia moment with respect to the rotation axis is a sum of the inertia moment
of the coil itself and the metallic wire
2
0 J J mr = + . (1)
2. [1 point] The equation of the coil rotation as a rigid bode takes the form
d
J J M
dt
ω
ε = = − , (2)
where ε is the angular acceleration.
It follows from equation (2) that the coil stops at the time moment
0
0
J
t
M
ω
= . (3)
Finally, the dependence of the angular velocity on time t is found as
0
0 0
0
,
( )
0,
J M
t t t
t J M
t t
ω
ω
ω

− < = 
= 
 ≥ 
. (4)
3. [1 point] At the stoppage of the coil, electrons keep on moving due to their inertia, as a result the
galvanometer registers the electric current.. Let a r ε = be the linear acceleration of the coil rim. If
the coil is tightly reeled up and the wire is rather thin that linear acceleration is directed along the
wire. At the stoppage process electrons are subjected to the inertial force e m a − opposite to the
linear acceleration of the coil. This inertial force can be interpreted as an effective electric field
e
eff
m a
E
e
= − . (5)
Thus, the effective electromotive force in the coil caused by the inertia of freely moving electrons is
obtained as
Emf e
eff
m
E a
e
= = −  . (6)
Therefore, the Ohm’s law for the electric circuit is written as
Emf e m a
IR
e
= − =

. (7)
Taking into account solution of 2, one gets
0
0
0
,
( )
0,
e Mm r J
t t
I t eJR M
t t
ω 
< = 
= 
 ≥ 

. (8)
4. [2 points] The electric charge, registered by the galvanometer, is found from (8) as
0
0
e m r
Q It
eR
ω
= =

. (9)
The charge-to-mass ratio of electron is simply obtained as
0
e
r e
m RQ
ω
=

. (10)
VI International Zhautykov Olympiad Theoretical Competition/Solutions Page 6/5
5. [1 point] In this case equation (7) is rewritten as follows
+
dt
dI
L Emf e m a
IR
e
= − =

. (11)
where h r n L 2 2
0 π µ = is the coil inductance.
It follows from equation (11) that the maximal electric current strength is
eJR
r Mm
I e 
= max . (12)
The qualitative dependence of the electric current strength is plotted below
6. [1 point] The maximal electromagnetic energy stored in the coil equals
2 2
0
2
max
0
2 2  


 


= =
eJR
r nMm h LI
W e  π µ
. (13)
7. [3 points] In the stationary regime the magnetic field inductance
nI B 0 µ = (14)
remains constant in the coil and the electric field is absent. This is not true for initial time moments
while the electric current increases from 0 to its maximal value determined by formula (12).
According to (14) the varying magnetic field generates the vortex electric field which causes the
flux of the electromagnetic energy to appear. The strength of the vortex electric field at the lateral
surface of the coil is found from the electromagnetic induction law of Faradey
( ) 2
2
d d
Emf E r B r
dt dt
π π
Φ
= = − = , (15)
as
2
r dB
E
dt
= =
dt
dI nr
2
0 µ
. (16)
The mutual orientation of the vectors B E
 
, и S

is shown below.
Substituting expressions (14) and |(16) into the expression for the Pointing vector and taking into
account that the vectors E

and B

are perpendicular, one obtains
dt
dI
I
r n
S
2
2
0 µ
= . (17)
Thus, the electromagnetic energy, going inward the lateral surface of the coil while the electric
current increases, is given by the summation (or integrating) of (17) as
2 2
0 2
max
2
0
2
2
4  


 


= =
eJR
r nMm h
rh I
r n
W e  π µ
π
µ
. (18)
VI International Zhautykov Olympiad Theoretical Competition/Solutions Page 7/5
It is obvious that the same amount of the electromagnetic energy goes outward while the electric
current strength decreases
2 2
0 2
max
2
0
2
2
4
'  


 


= =
eJR
r nMm h
rh I
r n
W e  π µ
π
µ
. (19)
Marking scheme
№ Content Points
1 Total inertia moment (1) 1
2 Equation of motion (2) 0.25
3 Stoppage time (3) 0.25
4 Dependence (4) of the angular velocity on time t 0.5
5 Expressions for the effective electric field (5) or (6) 0.25
6 The Ohm’s law (7) 0.25
7 Dependence (8) of the electric current strength on time t 0.5
8 Charge (9) registered by the galvanometer 1
9 Charge-to-mass ratio (10) for electron 1
10 Equation (11) for the electric current strength 0.25
11 Maximal electric current strength (12) 0.25
12 Qualitative dependence of the electric current strength 0.5
13 Maximal energy (13) 1
14 Magnetic field induction (14) 0.5
15 Electromagnetic induction law (15) 0.5
16 Vortex electric field strength (16) 0.5
17 Pointing vector (17) 0.5
18 Electromagnetic energy (18) 0.5
19 Electromagnetic energy (19) 0.5
