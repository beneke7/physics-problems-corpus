---
id: izho-2019-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2019-t-q3
solution_type: official
source_document: solution-document-izho-2019-t-s
source_pdf: cache/phoxiv/izho/2019_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2019_T_S.pdf."
---

Problem 3. Laser (10.0 points)
Population inversion: two-level system
3.1 The figure on the right shows a diagram of possible transitions and their
probabilities. If the population of the excited state is equal to 1 n , then the
population of the ground state is equal to ( ) 1 1 n − , since the molecule can only
be in one of two states.
The balance equation describing the change in the population directly
follows from the drawn diagram as
( ) 1
1 0 1 0 1
1
1
dn
n I n I n
dt
 

= − − + − . (1)
3.2 In the stationary mode 1 / 0 dn dt = , then it follows from equation (1) that the population of the
excited state is given by the formula


0
0
1
2 1 I
I
n
+
= . (2)
Accordingly, the difference in the populations of the excited and ground states is equal to
( )
 

0 0
0
1 1
2 1
1
1
2 1
2 1
I I
I
n n n
+
− = −
+
= − − =  . (3)
3.3 Even with the intensity of the pumping light flux tending to infinity, the population inversion in
the two-level system cannot be achieved, therefore, the laser light flux cannot be amplified in this
system.
V International Zhautykov Olympiad/Theoretical Competition Page 8/12
Population inversion: three-level system
3.4 In this system, there are no forced transitions "down", so the balance equation
for the population of state 2 is written as:
( ) 2 2
0 2 1
dn n
I n
dt


= − + − . (4)
Here, it is taken into account that the molecule can only be in two states: the
excited state 2, or the ground state 0.
3.5 In the stationary mode 2 / 0 dn dt = , therefore, as it follows from equation (4),
the population of the excited state is derived as





0
0
0
0
2
1 1 I
I
I
I
n
+
=
+
= . (5)
The difference between the populations of the excited and ground states is found by the
formula
( )


0
0
2 2 0 2
1
1
1
I
I
n n n n n
+
−
= − − = − =  . (6)
3.6 Laser light amplification is possible when the population inversion is reached, i.e. 0  n . It
follows from formula (6) that this is possible when
1 0   I . (7)
Population inversion: four-level system
3.7 In the four-level system, the balance equation for the population of state 2
coincides with equation (4), and the stationary value of the population of this state
is also described by formula (5). The essential difference of this system is that from
state 2 the transition is undertaken to intermediate state 3, whose population is
practically equal to 0. Therefore, in this system the population difference is equal to


0
0
2
1 I
I
n n
+
= =  , (8)
and the population inversion between states 2 and 3 is achieved with practically arbitrary value of
the parameter
0 0   I . (9)
Resonator
3.8 The change in the number dN of photons in the resonator is due only to their output through
the translucent mirror. For a short period of time dt , the number of photons that leave the resonator
through the mirror is found to be
( ) 1 out G dN I Sdt dN  = − =− . (10)
where S stands for the cross section area of the resonator.
The intensity of the laser light flux G I can be expressed in terms of the average density of
photons
Sl
N
in the resonator and the speed of their propagation
r
c
in the form
r
c
Sl
N
IG
2
1
= . (11)
The factor 1/2 takes into account that the laser light in the resonator propagates in two
opposite directions. Expressing the number of photons in the resonator through the intensity of the
generation flux
G I
c
rSl
N
2
= (12)
V International Zhautykov Olympiad/Theoretical Competition Page 9/12
and substituting it into equation (10), one gets
( ) ( ) 1 1
2 2
G G G
c c
dI I Sdt I dt
rSl rl
  = − − = − − . (13)
This equation has the required form
( )
G G
G
I
T
I
rl
c
dt
dI 1
2
1
− =
−
− =

, (14)
where the photon lifetime in the resonator is determined by the formula
( )
9 2
3,00 10
1
rl
T s
c 
−
= = 
−
. (15)
3.9 Consider the change in the number of photons in the presence of the stimulated emission and
the absence of losses through the mirror. In accordance with the definition of the stimulated
emission cross section, the number of generated photons can be described by the equation
Sldt n I Vdt n I dN E G E G     2 2 = = . (16)
Here 𝑛𝛾𝑉 denotes the number of dye molecules in the resonator being in the excited state, and
Sl V = is the resonator volume.
Substituting the expression for the number of photons in the resonator (12) into the last
equation, the desired equation is finally obtained
G E
G G
dI c
nI KnI
dt r
 
= = , (17)
with the resonator gain
10 1
5,72 10 E c
K s
r
  −
= =  . (18)
Stationary generation mode
3.10 To describe the dynamics of the intensity of the laser light flux, it is necessary to combine
equations (14) and (17):
1 G
G G
dI
KnI I
dt T
= − . (19)
The population of the excited state is described by the balance equation
( ) n I n n I
dt
dn
E G A 

 2
1
1 0 − − − = , (20)
which takes into account the absorption of the pumping light flux, spontaneous and stimulated
emissions from the excited state.
3.11 To initiate the laser light amplification, it is necessary that the derivative in equation (19)
should be greater than zero, therefore the threshold value of the population of the excited state is
equal to
3 1
5,83 10 1 th n
KT
−
= =  . (21)
3.12 To derive the threshold value of the intensity of the pumping light flux, we make use of
equation (20) in the absence of the laser light flux 0 G I = , whence we get
( )
21 2 1
0, 3,58 10
1
th th
th
A th A
n n
I cm s
n  
− −
=  =  
−
. (22)
To find the pumping energy flux, the calculated flux (22) must be multiplied by the energy
of one quantum
19
3,83 10
hc
J 

−
= =  , (23)
therefore, the pumping energy intensity is obtained as
V International Zhautykov Olympiad/Theoretical Competition Page 10/12
3
0, 2
1,37 10 E th
W
I I
cm
 = =  . (24)
3.13 In the stationary mode, the time derivatives in equations (19) and (20) vanish. Equation (19)
then yields
KT
n
1
= , (25)
and it is found from equation (20) that
n
n I
I
E
A
G



2
1
0 −
= . (26)
Expressing the intensity of the pumping light flux through its threshold value
0 0,th
A
n
I I  

= = (27)
and substituting it into formula (23), one obtains
1
1
2 2
A
A
G
E E
n
n
I
n
 
  
 
−
−
= = . (28)
At the output of the resonator, the laser light intensity is equal to
( )
( )
( )
1
1 ( 1) 1
2
G
E
I I E

  

−
= − = − = − , (29)
in which the constant factor is introduced as
22 2 1 1
5,41 10
2 E
E cm s


− − −
= =   . (30)
The graph of relation (29) is a straight line, as shown in the figure below.
3.14 On the one hand, the number of light quanta absorbed in the resonator per unit time is
calculated by the formula
0, A th A N I Sl    = . (31)
On the other hand, the number of quanta leaving the resonator per unit time is
( )S E NE 1 − =  . (32)
Thus, the quantum output turns out to be equal
( )
( ) ( ) l I
E
N
N
f
A tr A
E
 

0
1 −
= = . (33)
The substitution of all parameters included in this formula leads to the final result

 1 −
= f . (34)
V International Zhautykov Olympiad/Theoretical Competition Page 11/12
Part Content Points
3.1 Equation (1): ( ) 1
1 0 1 0 1
1
1
dn
n I n I n
dt
 

= − − + − 0,3 0,3
3.2
Formula (2):


0
0
1
2 1 I
I
n
+
= 0,2
0,3
Formula (3): ( )
 

0 0
0
1 1
2 1
1
1
2 1
2 1
I I
I
n n n
+
− = −
+
= − − =  0,1
3.3 Answer: «no» 0,2 0,2
3.4 Equation (4): ( ) 2 2
0 2 1
dn n
I n
dt


= − + − 0,2 0,2
3.5
Formula (5):





0
0
0
0
2
1 1 I
I
I
I
n
+
=
+
=
0,1
0,2
Formula (6): ( )


0
0
2 2 0 2
1
1
1
I
I
n n n n n
+
−
= − − = − =  0,1
3.6 Inequality (7): 1 0   I 0,3 0,3
3.7
Formula (5) is again used 0,1
0,5 Formula (8):


0
0
2
1 I
I
n n
+
= =  0,1
Inequality (9): 0 0   I 0,3
3.8
Formula (10): ( ) 1 out G dN I Sdt dN  = − =− 0,3
1,5
Formula (11):
r
c
Sl
N
IG
2
1
= 0,5
Formula (15):
( )
2
1
rl
T
c 
=
−
0,4
Numerical value: 9
3,00 10 T s −
=  0,3
3.9
Formula (16): Sldt n I Vdt n I dN E G E G     2 2 = = 0,6
1,5 Formula (18): E c
K
r
 
= 0,5
Numerical value: 10 1
5,72 10 K s−
=  0,4
3.10
Equation (19):
1 G
G G
dI
KnI I
dt T
= − 0,2
0,5
Equation (20): ( ) n I n n I
dt
dn
E G A 

 2
1
1 0 − − − = 0,3
3.11
Derivative should be positive; 0,1
0,5 Formula (21):
1
th n
KT
= 0,2
Numerical value: 3
5,83 10 th n −
=  0,2
3.12 The intensity of the laser light flux: 0 G I = 0,1 1,0
V International Zhautykov Olympiad/Theoretical Competition Page 12/12
Formula (22):
( ) 0,
1
th th
th
A th A
n n
I
n  
= 
−
0,3
Numerical value: 21 2 1
0, 3,58 10 th I cm s − −
=   0,3
Formula (23):
hc


= 0,1
Formula (24): 0, E th I I  = 0,1
Numerical value: 3
2
1,37 10 E
W
I
cm
=  0,1
3.13
Derivatives turn zero 0,1
2,0
Formula (25):
KT
n
1
= 0,2
Formula (26):
n
n I
I
E
A
G



2
1
0 −
= 0,2
Formula (27): 0 0,th
A
n
I I  

= = 0,2
Formula (28):
1
1
2 2
A
A
G
E E
n
n
I
n
 
  
 
−
−
= =
0,3
Formula (30):
1
2 E
E


−
= 0,2
Numerical value: 22 2 1
5,41 10 E см с − −
=   0,3
Drawing graph: axis are named and ticked 0,1
Drawing graph: straight line 0,2
Drawing graph: straight line passes through 1 0,2
3.14
Formula (31): 0, A th A N I Sl    = 0,4
1,0
Formula (32): ( )S E NE 1 − =  0,3
Formula (34):

 1 −
= f 0,3
Total 10,0
