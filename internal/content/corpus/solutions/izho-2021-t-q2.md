---
id: izho-2021-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2021-t-q2
solution_type: official
source_document: solution-document-izho-2021-t-s
source_pdf: cache/phoxiv/izho/2021_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2021_T_S.pdf."
---

Problem 2. Thermodynamics of one-component plasma (10.0 points)
2.1 The smallest distance between neighboring deuterium nuclei coincides with the edge of the cube, and
since there is 1 nucleus per cube, their concentration is
3
1
n
a
= , (1)
therefore
12
3
1
8.51 10 a м
n
−
= =  (2)
2.2 The electrostatic energy of interaction of two nuclei located at the distance a from each other is found
as
2
0 4
p
e
W
a 
= , (3)
and their thermal energy is evaluated by the formula
T B E k T = , (4)
whence the sought ratio is obtained in the form
2
0
111
4
p
T B
W e
E ak T 
 = = = . (5)
2.3 In general, the spherical cell is neutral, and its radius is equal to
/ 2 R a = (6)
with the corresponding volume
3 4
3
V R  = , (7)
therefore, the bulk charge density is expressed as
14 3
3
6 6
4.95 10 /
e e
ne Cl m
V a

 
= − = − = − = −  . (8)
2.4 Let us apply Gauss’s theorem
0 S
Q
d

 =  E S (9)
to the sphere of radius r centered at the location of the nucleus. The flux of the electric field strength E
through this sphere, due to symmetry, is delivered by
2
4
S
d E r   =  E S , (10)
and the net charge Q inside the sphere is obtained as
3 4
3
Q e r   = + . (11)
It follows from equations (9)-(11) that
2
0 0 4 3
e r
E
r

 
= + , (12)
and the sought potential difference is determined by the expression
/4
/2
( /4) ( /2)
a
a
a a Edr   − = −  , (13)
which finally yields
0
5
( / 4) ( / 2) 211
16
e
a a V
a
 

− = = . (14)
2.5 The second term on the right-hand side of expression (12) determines the strength of the electric field
created by the uniform charge distribution; therefore, the equation of motion of the nucleus projected onto
the radial direction has the form
XVII International Zhautykov Olympiad/Theoretical Competition с. 7/16
0 3
e
mr r


= , (15)
which is an equation of harmonic oscillations with a frequency
2 2
16 1
3
0 0 0
2 2
2.94 10
3
p
p p p
e e ne
s
m m a m


    
−
= − = = =  . (16)
2.6 At a fixed temperature, the mean square thermal velocity of the nucleus is derived as
B
p
k T
v
m
= , (17)
and the corresponding amplitude of deviation from the equilibrium position is determined as
13
2,85 10
p
v
A m

−
= =  . (18)
It can be seen that the condition A a holds, i.e. the deuterium nuclei do indeed perform small oscillations
near their equilibrium positions.
2.7 The internal energy of the system consists of the thermal energy of the thermal motiont of nuclei and the
electrostatic energy of each cell. In turn, the electrostatic energy of each cell consists of the interaction
energy of nuclei with the surrounding electron neutralizing background and the energy of the background
itself.
Let us divide the cell into spherical layers and consider the layer located at the distance r from the
cell center and having the thickness dr . Its charge is obtained as
2
4 dq r dr   = , (19)
and the corresponding interaction energy with the nucleus is
2
1 0
0 0
3
4 4
R edq e
W
r a  
= = −  . (20)
The energy density of the electric field is found by the formula
2
0
1
2
w E  = , (21)
and since the electric field strength of the uniform background is determined by the second term in
expression (12) and outside the sphere has the form like that of a point-дшлу charge, which formally
coincides with the first term of expression (12),, then the electrostatic energy of the uniform background is
evaluated as follows
2 2
2
2 2
2 0 0 2
0 0 0 0
1 1 3
4 4
2 3 2 4 10
R
R
r e e
W r dr r dr
r a

   
  

   
= + =    
   
  . (22)
Thus, the total electrostatic energy of a single cell is written as
2
1 2
0
9
20
e
W W W
a 
= + = − (23)
and is equal to the work that must be done to create it.
As shown above, the nucleus in the cell center is a three-dimensional harmonic oscillator, so its
thermal chaotic energy is determined as
3 B E Nk T = , (24)
and hence the internal energy of N cells has the form
2 4/3
1/3
0
9
3
20
B
e N
U E NW Nk T
V 
= + = − . (25)
Thus, the sought constants are found as
1 3 B k T  = , (26)
2
2
0
9
20
e


= − . (27)
XVII International Zhautykov Olympiad/Theoretical Competition с. 8/16
2.8 In the absence of the neutralizing backgrounds of two nuclei, their fusion corresponds to the bare
Coulomb barrier. The presence of neutralizing backgrounds leads to a decrease in the Coulomb barrier,
which is obviously determined by the interaction of nuclei with their backgrounds and the self-energy of the
backgrounds, i.e. by expression (23). In this case, the thermal energy of nuclei remains small in comparison
with the lowering of the Coulomb barrier.
Each of the two cells before fusing has the electrostatic energy
2 1/3
0
9
20
e n
W

= − . (28)
After fusion, a new cell is formed with the volume
' 2 V V = (29)
with a helium nucleus in the center having an electric charge
' 2 e e = . (30)
In accordance with the general formula, the electrostatic energy of the formed cell is derived as
2 1/3
5/3
0
9
' 2
20
e n
W

= − , (31)
whence the following expression for the Coulomb barrier lowering is obtained
2/3 2 1/3
17
0
(2 1)9
2 ' 5.72 10
10
c
e n
U W W J 

− −
= − = =  . (32)
2.9 The circular process ABCD is the Carnot cycle. Let us denote the
temperature on the isotherm AB as AB T , and on the isotherm CD as CD T , while
they differ very little from each other, so that AB CD T T T   and AB CD T T T − .
The work A done in the cycle is equal to the area of the parallelogram ABCD,
which is, in turn, equal to the area of the parallelogram ABEF. Since
( / ) ( ) V AB CD AF P T T T =   − , the work in the cycle is derived as
( )( ) AB CD B A
V
P
A T T V V
T
  
= − −  
  
. (33)
In the process AB, the temperature is constant, so the change in internal energy is expressed as
( ) B A B A
T
U
U U V V
V
  
− = −  
  
, (34)
and the supplied amount of heat according to the first law of thermodynamics takes the form
( ) B A B A Q U U P V V = − + − . (35)
Since the process ABCD is a Carnot cycle, its efficiency is written as
AB CD
AB
T T A
Q T
−
= , (36)
and combining equations (33) - (36), we obtain the required relation
T V
U P
T P
V T
     
= −    
     
. (37)
2.10 Substituting formula (25) into equation (37), we obtain the first-order differential equation
2 4/3
4/3
0
3
20 V
P e N
T P
T V 
  
− =  
  
, (38)
whose solution takes the form
2 4/3
4/3
0
3
( , ) ( )
20
e N
P T V C V T
V 
= − , (39)
where ( ) C V refers to some constant, which, in principle, can depend on the volume of the system.
In the absence of interaction between the nuclei, the pressure of the system should be reduced to the
pressure of an ideal gas
XVII International Zhautykov Olympiad/Theoretical Competition с. 9/16
0 ( , )| B
e
Nk T
P T V
V
→ = , (40)
and we immediately find
2 4/3
4/3
0
3
( , )
20
B Nk T e N
P T V
V V 
= − . (41)
Thus, the sought constants are obtained as
1 B k T  = , (42)
2
2
0
3
20
e


= − ., (43)
3
4
3
 = . (44)
Substituting the numerical values, we obtain the numerical value for the pressure
16
2,59 10 P Па = −  . (45)
The pressure turns out to be negative! In fact, the pressure of the entire system includes the pressure of the
electronic component and is definitely positive.
Content Points
2.1
Formula (2): 3
1
a
n
=
0.2
0.4
Numerical value in formula (2): 12
8.51 10 a m −
=  0.2
2.2
Formula (3):
2
0 4
p
e
W
a 
=
0.2
0.8
Formula (4): T B E k T = 0.2
Formula (5):
2
0 4 B
e
ak T 
 =
0.2
Numerical value in formula (5): 111  = 0.2
2.3
Formula (6): / 2 R a = 0.1
0.6
Formula (7): 3 4
3
V R  =
0.1
Formula (8):
6
ne 

= −
0.2
Numerical value in formula (8): 14 3
4.95 10 / Cl m  = −  0.2
2.4
Formula (9):
0 S
Q
d

 =  E S
0.2
1.4
Formula (10): 2
4
S
d E r   =  E S 0.2
Formula (11): 3 4
3
Q e r   = +
0.2
Formula (12): 2
0 0 4 3
e r
E
r

 
= +
0.2
Formula (13):
/4
/2
( /4) ( /2)
a
a
a a Edr   − = − 
0.2
Formula (14):
0
5
( / 4) ( / 2)
16
e
a a
a
 

− =
0.2
XVII International Zhautykov Olympiad/Theoretical Competition с. 10/16
Numerical value in formula (14): ( / 4) ( / 2) 211 a a V   − = 0.2
2.5
Formula (15):
0 3
e
mr r


=
0.2
0.6
Formula (16):
2
0
2
p
p
ne
m

 
=
0.2
Numerical value in formula (16): 16 1
2.94 10 p s  −
=  0.2
2.6
Formula (17): B
p
k T
v
m
=
0.2
0.6
Formula (18):
p
v
A

=
0.2
Numerical value in formula (18): 13
2.85 10 A m −
=  0.2
2.7
Formula (19): 2
4 dq r dr   = 0.2
1.8
Formula (20):
2
1
0
3
4
e
W
a 
= −
0.2
Formula (21): 2
0
1
2
w E  =
0.2
Formula (22):
2
2
0
3
10
e
W
a 
=
0.2
Formula (23):
2
0
9
20
e
W
a 
= −
0.2
Formula (24): 3 B E Nk T = 0.2
Formula (25):
2 4/3
1/3
0
9
3
20
B
e N
U E NW Nk T
V 
= + = −
0.2
Formula (26): 1 3 B k T  = 0.2
Formula (27):
2
2
0
9
20
e


= −
0.2
2.8
Formula (28):
2 1/3
0
9
20
e n
W

= −
0.2
1.2
Formula (29): ' 2 V V = 0.2
Formula (30): ' 2 e e = 0.2
Formula (31):
2 1/3
5/3
0
9
' 2
20
e n
W

= −
0.2
Formula (32):
2/3 2 1/3
0
(2 1)9
10
c
e n
U 

−
=
0.2
Numerical value in formula (32): 17
5.72 10 c U J  −
=  0.2
2.9
Formula (33): ( )( ) AB CD B A
V
P
A T T V V
T
  
= − −  
  
0.2
1.0
Formula (34): ( ) B A B A
T
U
U U V V
V
  
− = −  
  
0.2
Formula (35): ( ) B A B A Q U U P V V = − + − 0.2
XVII International Zhautykov Olympiad/Theoretical Competition с. 11/16
Formula (36): AB CD
AB
T T A
Q T
−
=
0.2
Formula (37):
T V
U P
T P
V T
     
= −    
     
0.2
2.10
Formula (38):
2 4/3
4/3
0
3
20 V
P e N
T P
T V 
  
− =  
  
0.2
1.6
Formula (39):
2 4/3
4/3
0
3
( , ) ( )
20
e N
P T V C V T
V 
= −
0.2
Formula (40): 0 ( , )| B
e
Nk T
P T V
V
→ =
0.2
Formula (41):
2 4/3
4/3
0
3
( , )
20
B Nk T e N
P T V
V V 
= −
0.2
Formula (42): 1 B k T  = 0.2
Formula (43):
2
2
0
3
20
e


= −
0.2
Formula (44): 3
4
3
 =
0.2
Numerical value in formula (45): 16
2.59 10 P Pa = −  0.2
Total 10.0
