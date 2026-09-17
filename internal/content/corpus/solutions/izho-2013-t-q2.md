---
id: izho-2013-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2013-t-q2
solution_type: official
source_document: solution-document-izho-2013-t-s
source_pdf: cache/phoxiv/izho/2013_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2013_T_S.pdf."
---

Problem 2 (10 points)
Square frame
1. In physics, it is agreed that the magnetic field lines begin at the north pole and ends at the South
pole. Therefore, the drawing should look like this
2. Whentheframe is removedfromtheuniformmagneticfield,the induced emf can be found from the
Faraday law
IX International Zhautykov Olympiad/Theoretical Competition/Solutions Page 4/10
( ) v( )
d d
Bax Ba t
dt dt


= − = − = . (1)
On the other hand Ohm’s law is written as
IR  = , (2)
Thus, we get the relation between the current and the velocity
v( )
( )
Ba t
I t
R
= . (3)
The frame is affectedbythe force that pullsthe frame back into the magnetic field.It
isfoundfromAmpere'slaw
2 2
v( )
( ) ( ) A
B a t
F t BaI t
R
= = . (4)
Thus, the equation of motion is written as
2 2
( ) v( ) dv t B a t
m F
dt R
= − . (5)
Solutionofequation (5) with the initial conditionv(0) 0 = is
2 2
2 2
v( ) 1 exp
FR B a
t t
B a mR
   
= − −    
   
. (6)
3. Integrating (6) we get following relation
2 2
2 2 2 2
0
( ) v( ) exp 1
t
FR mR B a
x t t dt t t
B a B a mR
     
= = + − −      
       
 . (7)
When the frame leaves the magnetic field
0 ( ) x t a = , (8)
Thus, we get an equation for 0 t
2 2 2 3
0 0 2 2
exp 1
mR B a B a
t t
B a mR FR
   
+ − − =    
   
. (9)
Equation (9) istranscendentalandcannotbesolvedanalytically. Toestimate 0 t wecansee from equation
(6) thatforthe characteristic time 2 2
~ / mR B a  the frame reaches the steady velocity 2 2
0 v / FR B a = .
Weassumethatfrom 0 to  the framemoveswiththe constantacceleration / w F m = , then it moves
with the steady velocity 0 v . Hence, we get an estimate
2
2 3
0 2 2
0
2 ~ 10.25
v 2
wt
a
B a mR
t
FR B a

−
+ = + = с. (10)
Note that numerical solution of equation (9) gives 0 10.5 t  с.
4. Afterthe 0 t theframe continues its motion with the constant acceleration w. At the same time the
speed should be a continuous function of time, so the time dependence is written as
2 2
0 2 2
0 0 2 2
1 exp ,
v( )
( ),
FR B a
t t t
B a mR
t
FR F
t t t t
B a m
    
− −      
     = 

+ −   
. (11)
The corresponding graph is plotted as
IX International Zhautykov Olympiad/Theoretical Competition/Solutions Page 5/10
5. Whilethe frameisbetweenthe magneticpoles, thecurrent is determined by the equations (3) and
(6). After that, the frame current vanishesinstantaneously. Thus,
2 2
0
0
1 exp ,
( )
0,
F B a
t t t
I t Ba mR
t t
    
− −      
=     

 
. (12)
The corresponding graph is plotted as
0 2 4 6 8 10 12
0.000
0.002
0.004
0.006
0.008
0.010
t,s
I,A
6. As in the previous part, when the frame is removed from the constant magnetic field,theemf (1)
is induced.There is anotheremfappearing due to the self-induction of the superconductive frame
L
dI
L
dt
 = − . (13)
Since the resistance of the superconductive frame is zero, Ohm's law for the frame becomes
v( ) 0
dI
Ba t L
dt
− = . (14)
Taking into accountthat 0 I = when 0 x = we get from equations (13) and (14)
Bax
I
L
= . (15)
The corresponding force is given by
2 2
A
B a x
F BaI
L
= = . (16)
Thus,the equation of motion is written as
2 2 2
2
d x B a
m F x
dt L
= − . (17)
Expression (17) isan equation ofsimpleharmonicoscillationswith the frequency
IX International Zhautykov Olympiad/Theoretical Competition/Solutions Page 6/10
,
Ba
mL
 = (18)
that are performed near the new equilibrium position with the coordinate
0 2 2
FL
x
B a
= . (19)
Obviously, theforce F is minimal when
0 / 2 x a = , (20)
whence
2 3
5
min 5.00 10
2
B a
F
L
−
= =  Н. (21)
7. From previoussection 6, the frame reaches the edge of the magnet for a half period of
oscillations, thus
0 7.02
mL
t
Ba



= = = с. (22)
8. Solutionofequation (17) with the initial conditions (0) 0, '(0) 0 x x = = is written as
( ) ( ) min
2 2
( ) 1 cos 1 cos
2
F L a
x t t t
B a
  = − = − . (23)
According to equation (15) the frame current varies as
( )
2
( )
( ) 1 cos
2
Bax t Ba
I t t
L L
 = = − . (24)
The corresponding graph is plotted as
0 5 10 15 20 25
0.000
0.002
0.004
0.006
0.008
0.010
t,s
I,A
9. Ohm's law for the frame is written as
v
dI
Ba L IR
dt
− = , (25)
and its equation of motion is as follows
v d
m BIa
dt
= − . (26)
Equations (25) and (26) can be rewritten in finite differences as follows
2
0 Ba LI qR − = , (27)
0 v m Bqa = , (28)
whereqis the charge flown through the circuit.
Solving (27) and (28) together, we obtain
2 3
0
0
v B a m R
I
aBL
−
= . (29)
IX International Zhautykov Olympiad/Theoretical Competition/Solutions Page 7/10
Marking scheme
№ Description points
1 Properly set northern N and southern S poles 0.2 0.2
2 Eq (1) 0.2
1.2
Eq (2) 0.2
Eq (3) 0.2
Eq (4) 0.2
Eq (5) 0.2
Solution (6) 0.2
3 Eq (7) 0.2
0.8 Eq (8) 0.2
Eq (9) 0.2
Numerical value of 0 t 0.2
4 Eq (11) 0.2
1.2
Graphofv( ) t : axis signed and digitized 0.2
Graphofv( ) t : there is a part with a constant velocity 0.2
Graphofv( ) t : there is a part with constant acceleration 0.2
Graph ofv( ) t : continuous 0.2
Graphofv( ) t : correct numerical values 0.2
5 Eq (12) 0.2
1.2
Graphof ( ) I t : axis signed and digitized 0.2
Graphof ( ) I t : there is a part with constant current 0.2
Graphof ( ) I t : there is a part with zero current 0.2
Graph of ( ) I t : discontinuous 0.2
Graphof ( ) I t : correct numerical values 0.2
6 Eq (13) 0.2
1.8
Eq (14) 0.2
Relationship (15) 0.2
Quasi-elastic force (16) 0.2
Eq of motion (17) 0.2
Equilibrium point (19) 0.2
Condition (20) 0.2
Eq (21) for min F 0.2
Numerical value min F 0.2
7 Frequency (18) 0.2
0.6 Eq (22) 0.2
Numerical value of 0 t 0.2
8 Eq (23) 0.2
1.0
Eq (24) 0.2
Graphof ( ) I t : axis signed and digitized 0.2
Graphof ( ) I t : two periods of current oscillation 0.2
Graphof ( ) I t : correct value of amplitude 0.2
9 Ohm’s Law (25) 0.2
Eq of motion (26) 0.2
IX International Zhautykov Olympiad/Theoretical Competition/Solutions Page 8/10
Eq (27) 0.7 2.0
Eq (28) 0.7
Expression (29) 0.2
Total 10,0
