---
id: izho-2011-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2011-t-q2
solution_type: official
source_document: solution-document-izho-2011-t-s
source_pdf: cache/phoxiv/izho/2011_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2011_T_S.pdf."
---

2. Let us take two current sources with 1 1 ,r ε and 2 2 ,r ε , connected in parallel. Then, they can be
replaced by a single source with 1 2 2 1 1 2 ( )/( ) r r r r ε ε ε = + + and 1 2 1 2 /( ) r rr r r = + .
Now, applying 1 and 2 to the circuit shown on the right hand side, we should obtain the
circuit shown on the left hand side, thus the following relations must be satisfied:
1 2 2 1
1 2
( ) ( ) r r r
r r r
ε ε ε
ε
+ + +
=
+ +
, (1)
2 1
1 2
( ) r r r
r
r r r
+
=
+ +
. (2)
Solution is given by
1 2
2
1
4
1 1 3.0
2
r
r
ε
ε ε
 
= + + − =    
 
V, (3)
1 2
1
4
1 1 1.0
2
r r
r
r
 
= + −=    
 
Ω. (4)
Therefore, the current flowing through the resistance R is found as
1.0 I
R r
ε
= =
+
A. (5)
Marking scheme
№ Content Points
1 Equivalent circuit 1,0
2 Rule 1 0.5
3 Rule 2 0.5
4 Formula (1) 0.5
5 Formula (2) 0.5
6 Formula (3) 0.25
7 Formula (4) 0.25
8 Formula (5) 0.5
R
ε, r
R
ε1, r1
ε2, r2 ε, r
VII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 3/10
1C (2.5 points)
All the rays eradiated from the point A have to pass through the point A' after refraction in
the lens; all the rays eradiated from the point B have to pass through the point B' after refraction in
the lens. Rays passing through the optical center of the lens do not change direction. Therefore, the
point of intersection of lines AA' and BB' is the optical center O of the lens. If a ray passes through
both the points A and B, then it should necessarily pass through the points A' and B'. Consequently,
the point of the intersection of lines AB and A'B' lies in the plane of the lens. Thus, the plane of the
lens passes through the points O and C. The main optical axis of the lens passes through its optical
center and is perpendicular to the plane of the lens, Further constructions are traditional: we draw
ray BD through the point B which is parallel to the main optical axis, and after refraction in the lens
the ray (or its extension) should pass through B'. From its continuation to the intersection with the
main optical axis, we find one of the main focuses F1. Similarly, we find the second main focus F2.
The drawing above shows that the lens is concave (diverging).
VII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 4/10
Theoretical Question 2 (10 points)
Electrical conductivity of metals
Ohm's law
1. [1 point]
In accordance with the Joule-Lentz law, the heat power released in the conductor is found as
2
U
P
R
= , (1)
which means that the specific heat power V P is written as
2 2
V
U U
P
RV RSl
= = . (2)
With the aid of
1 l l
R
S S
ρ
σ
= = and
U
E
l
= , (3)
one gets
2
V P E σ = . (4)
The Drude model
2. [1 point]
The second law of Newton for the electron motion in a constant electric field is read as
m e = = − a F E. (5)
It follows from Eq.(5) that for the time interval τ the electron passes the distance
2
2
a
s
τ
= , (6)
which means that the module of the average velocity of the electron is
2 2
s a eE
u
m
τ τ
τ
= = = , (7)
or, in the vector form,
2
e
m
τ
= − u E. (8)
3. [1 point]
The current density depends on the electron number density, its electric charge, and its
average velocity as follows:
2
2
e n
ne
m
τ
= − = j u E, (9)
which is Ohm’s law with the specific conductivity found as
2
2
e n
m
τ
σ = . (10)
4. [1 point]
Each electron transfers its kinetic energy at the end of the acceleration, i.e. at the moment of
collision with an ion,
VII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 5/10
2 2
max
2 2
k
mu m eE
E
m
τ  
= =  
 
. (11)
By definition there are n electrons in the cubic meter of the conductor, and each of them
transfers its kinetic energy (11) for the time interval τ . Thus, the total specific energy V Q
transferred by electrons to the crystal lattice in the unit of volume and in the unit of time,
2 2
2 2
2 2
k
V
nE nmu e n
Q E E
m
τ
σ
τ τ
= = = = . (12)
This expression coincides with Eq.(4), thus proving the validity of the Joule-Lenz law in the
Drude model.
Magnetoresistance
5. [1 point]
In the presence of magnetic field the equation of motion for the electron is written as
d
m e e
dt
= − − ×
u
E u B. (13)
The projections on the coordinate axes are found as
x
y
du
m eE eBu
dt
= + , (14)
y
x
du
m eBu
dt
= − , (15)
0 z du
m
dt
= . (16)
Eq.(16) shows that the electron trajectory lies in XY plane. Substituting '
x x u u = ,
'
/ y y u u E B = + into Eqs. (14)-(15), we obtain
'
x
y
du
m eBu
dt
= , (17)
'
' y
x
du
m eBu
dt
= − . (18)
Solutions to Eqs. (17) and (18) are derived as harmonic oscillations of the form
'
cos( ) x u A t ω α = + , (19)
'
sin( ) y u A t ω α = + , (20)
or, in terms of the previous variables,
cos( ) x u A t ω α = + , (21)
sin( ) y
E
u A t
B
ω α = + − , (22)
where / eB m ω = .
From initial conditions 0 x u = and 0 y u = , we determine the constants / A E B = and
/2 α π = . Substitution into Eqs. (21) and (22) yields
( ) sin x
E eB
u t t
B m
 
=  
 
, (23)
( ) 1 cos y
E eB
u t t
B m
   
= − −    
   
. (24)
VII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 6/10
6. [2 points]
At small magnitude of the magnetic field induction, Eq. (23) takes the form
3 2
3
3
6
x
eE e EB
u t t
m m
= − . (25)
The displacement of the electron along the OX axis over the time interval τ equals
3 2
2 4
3
2 24
eE e EB
s
m m
τ τ = − , (26)
and the average speed is found as
3 2
3
3
2 24
av
s eE e EB
u
m m
τ τ
τ
= = − . (27)
Thus, we are able to determine the relative deviation of the specific conductivity as
2
( ) ( 0) 1
( 0) 12
av av
av
neu B neu B e B
neu B m
σ τ
σ
− = ∆  
= = −  
=  
, (28)
and, therefore,
2
1
12
e
m
τ
µ
 
= −  
 
, 2 ν = . (29)
The Hall effect
7. [0.5 points]
The Lorentz force acting on the electrons is directed downward, therefore the negative
charge is accumulated near the bottom face.
8. [1.5 points]
Since the electrons are accumulated near the bottom face of the bar, the Hall electric field is
oppositely directed with respect to the OY axis. Hence, the electron equation of motion (13) is
rewritten as
x
y
du
m eE eBu
dt
= + , (30)
y
H x
du
m eE eBu
dt
= − , (31)
0 z du
m
dt
= . (32)
Again, the electron trajectory lies in the XY plane. Making substitution '
/ x x H u u E B = − ,
'
/ y y u u E B = + in Eqs. (30) and (31), one gets
'
' x
y
du
m eBu
dt
= , (33)
'
' y
x
du
m eBu
dt
= − . (34)
Solutions to Eqs. (33) and (34) are again derived as harmonic oscillations of the form
'
cos( ) x u A t ω α = + , (35)
'
sin( ) y u A t ω α = + , (36)
or, in terms of the previous variables,
cos( ) H
x
E
u A t
B
ω α = + + , (37)
VII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 7/10
sin( ) y
E
u A t
B
ω α = + − . (38)
From initial conditions 0 x u = and 0 y u = , we obtain the following final solution
( ) sin 1 cos H
x
E E eB eB
u t t t
B m B m
     
= + −      
     
, (39)
( ) sin 1 cos H
y
E eB E eB
u t t t
B m B m
     
= − −      
     
. (40)
9. [1 point]
At small magnitudes of the magnetic field induction, the condition for zero final displacement
( ) 0 y τ = along the OY axis at the time moment τ
0
( ) 0
3
y H
eE
u t dt E B
m
τ
τ
= ⇒ = ∫ , (41)
or
2
3
H
j
E B
ne
= . (42)
Marking scheme
Content points
1 The Joule-Lenz law (1) 0.25
2 The specific heat power (2) 0.25
