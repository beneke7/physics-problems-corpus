---
id: izho-2014-t-q1
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2014-t-q1
solution_type: official
source_document: solution-document-izho-2014-t-s
source_pdf: cache/phoxiv/izho/2014_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2014_T_S.pdf."
---

Problem 1 (10 points)
Problem 1A (3 points)
In the first stage boiling occurs at a
constant pressure, hence at a constant temperature.
Likewise, in the third stage condensation takes
place at a constant pressure and temperature. The
second and the fourth stages can be considered as
adiabatic. Schematic (P,V) diagram of the steam
engine cycle is shown in the figure on the right.
Since this cycle is composed of two isotherms and
two adiabats, it is, thus, simply the Carnot cycle.
Therefore, its efficiency is found as
1
2 1
T
T T −
= η , (1)
where 1 T is the boiling temperature in the first
stage of the cycle, and 2 T is the condensation temperature in the third stage of the cycle.
The corresponding temperatures are found from the approximate formula for the saturated
vapor pressure provided at the formulation of the problem.
The first stage of the cycle happens at constant pressure
( ) 5
1 0 1,3 10
M m g
P P Pa
S
+
= + ≈ ⋅ . (2)
The vapor temperature is the temperature of the water boiling point and is equal to
К С
a
b P
t 379 106
85 , 4
384 130 1
1 = ° ≈
+
=
+
= . (3)
The temperature difference in formula (1) is conveniently evaluated as
K
Sa
mg
a
P P
T T 2 , 4
85 , 4
20 2 1
2 1 ≈ = =
−
= − . (4)
Thus, the efficiency of the steam engine is % 1 , 1
379
2 , 4
1
2 1
= =
−
=
T
T T
η .
Grading scheme
№ Content Points
1. 1 and 3 stages are isobars and isotherms 0,25
2. 2 and 4 stages are adiabats 0,25
3. The cycle is identified as a Carnot cycle 1,0
4. Correct cycle diagram 0,75
5. Formula (1) for the efficiency of the Carnot cycle 0,25
6. Formulas (2) and (4) 0,25
7. Correct numerical value for the efficiency 0,25
Total 3.0
X International Zhautykov Olympiad/Theoretical Competition/Solutions Page 2/10
Problem 1В (5 points)
The first solution.
Consider the left part of the circuit. Its load characteristic
(dependence of U against I)) is the straight line corresponding to an
equivalent source with the parameters 0
2
ε
ε = , 0
2
r
r = .
For the equivalent circuit
the total released heat is found as
2
0
2
C
Q
ε
= . In the resistor R the released heat is obtained from the
simple proportion as
2
2
0
0
2
2 4(2 )
2
C
R R RC
Q Q
r R r R r R
ε
ε
 
 
  = = ⋅ =
+ + +
The second solution.
The Kirchhoff set of equations has the following form
1 2
2
1 2
I r I r
q
I r IR
C
I I I
I q
ε = + 

 = + 

 = +

=   
Eliminating I1 и I2, we obtain the relation
2 2
r q
I R
C
ε  
+ + =  
 
,
and multiplying it by I we get
2
2 2
.
2 2 2 2 2 2
r qI qq d q q
I R I q
C C dt C
ε ε ε    
+ = − = − = −    
   


Hence
2
2
,
2 2
2
R d q q
I R
r dt C R
ε  
= −  
  +
and, thus,
( )
2
2
0
(0)
2 2
2
q
q
R q q
I Rdt
r C R
ε
∞ ∞
 
= −  
  +
∫
On substituting (0) 0 q = and ( )
2
q C
ε
∞ = , we finally obtain
X International Zhautykov Olympiad/Theoretical Competition/Solutions Page 3/10
2
.
4( 2 )
RC
Q
R r
ε
=
+
Grading scheme
I. Direct solution
№ Content Points
1. There is a correct set of equations allowing to obtain the answer –
1.0;
if there is an error in the set or it is not complete – 0.
1.0
2. Correct expression for the current in the resistor R or/and for the
charge of the capacitor
1.0
3. Correct expression for the derivative of the square of the current
in R, or correct dependence I(t)
For manipulating errors – 1.0 points of 2.0
Propagation error is not accepted
3.0
4. Correct formula for 2
Q I Rdt = ∫ 1.0
Total 5.0
II. Solution with the equivalent source
Propagation errors are not accepted
№ Content Points
1. Idea: to change the left part of the circuit by an equivalent source
and to apply the energy conservation law
1.0
2. The parameters of the equivalent source
2.1 Two of the following statement are present:
1. No-load voltage Ɛ/2
2. Short circuit current Ɛ/r
3. Internal resistance is the parallel connection of two resistors r
or
the dependence U(I) is obtained
2.2 It is found that: Ɛ0 = Ɛ/2, r0 = r/2 (по 0.5 for each)
(Justification of the equivalent circuit is not required)
1.0
1.0
3. Total released heat in the equivalent circuit 1.0
4. Correct answer 1.0
Total 5.0
Problem 1С (2 points)
It is known that the beam, passing through the focal point of the lens, goes parallel to the optical
axis of the lens after refraction. Therefore, all the objects, shown in the figure, give the images of
the same size, i.e. the lens magnification is inversely proportional to the distance from the object to
the focal point.
X International Zhautykov Olympiad/Theoretical Competition/Solutions Page 4/10
Figure 1 Figure 2
It is clearly seen from figure 2 that in the case of the diverging lens it is impossible to get the same
image size at different positions of the object, so the lens is necessarily converging.
Figure 3
Positions A and B of the object, which are arranged symmetrically with respect to the focal
point of the lens, result in the same image sizes (see figure 3). If the object is moved away by
another 5 cm, then it will be located in the position C, in which the image of the same size would
have been obtained by a three times larger object, so the image of the object is to be three times
smaller. Answer: 1/3 cm.
Grading scheme
№ Content Points
1. Correct answer 1.0
2. Correct justification of the correct answer 1.0
3. There is an error in the application of the lens formulas -0.5
Total 2.0
