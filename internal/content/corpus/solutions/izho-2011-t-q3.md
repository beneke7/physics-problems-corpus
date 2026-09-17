---
id: izho-2011-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2011-t-q3
solution_type: official
source_document: solution-document-izho-2011-t-s
source_pdf: cache/phoxiv/izho/2011_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2011_T_S.pdf."
---

3 Formulae (3) 0.25
4 Final result (4) 0.25
5 Equation of motion (5) 0.25
6 Path (6) 0.25
7 Average speed (7) 0.25
8 Vector of the average velocity (8) 0.25
9 Current density (9) 0.5
10 Specific conductivity (10) 0.5
11 Kinetic energy of electrons (11) 0.5
12 Total heat transferred (12) 0.5
13 Equation of motion (13) 0,25
14 Equations of motion (14)-(16) 0,25
15 Velocity (23) 0,25
16 Velocity (24) 0,25
17 Expansion of the velocity (25) 0,25
18 Displacement (26) 0,25
19 Average speed (27) 0.5
20 Final result (29) 2*0.5
21 The correct face stated 0.5
22 Equations of motion (30)-(32) 0.5
23 Velocity (39) 0.5
24 Velocity (40) 0.5
25 The Hall electric field strength (41) 0.5
26 The Hall electric field strength (42) 0.5
VII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 8/10
Theoretical Question 3
1 [1 point] The constant C is found from the condition that the total number of particles is equal to
N :
1
n
n
N N
∞
=
= ∑ . (1)
Substituting the expression for the Boltzmann distribution function and obtaining summation, we
get
1 1
exp
exp
1 exp
1 exp
exp
exp
B
n
n n B
B
B
n
B
B
k T
N N C n C
k T
k T
k T
N N n
k T
k T
ε
ε
ε
ε
ε
ε
∞ ∞
= =
 
−  
    = = − = ⇒  
    − −  
 
 
− −  
    = −  
    −  
 
∑ ∑
(2)
2 [3 points] The internal energy of the gas is a sum of the kinetic energies of all atoms:
2
1 1
exp
exp
1 exp
1 exp
B
n n
n n B
B
B
k T
U E N Cn n C
k T
k T
N
k T
ε
ε
ε
ε
ε
ε
∞ ∞
= =
 
−  
    = = − = =  
     
− −    
   
=
 
− −  
 
∑ ∑
(3)
In the classical limit B k T ε >> , the argument of the exponent is small, it is thus justifiable to use the
approximate formula exp 1
B B k T k T
ε ε  
− ≈ −  
 
. In this case, we obtain
B U N k T = . (4)
At low temperatures, the exponent itself is small, exp 1
B k T
ε  
− <<  
 
, hence
1 exp
1 exp B
B
U N N
k T
k T
ε ε
ε
ε
   
= ≈ + −             − −  
 
. (5)
3 [3 points] The molar heat capacity at fixed volume is found as
V
U
C
T
∂
=
∂
. (6)
In the most general case we derive
VII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 9/10
2
2 2 2
exp
exp
1 exp 1 exp
B A
V
B Б B
B B
k T N U
C R
T k T k T k T
k T k T
ε
ε ε ε ε
ε ε
 
−  
    ∂   = = − =    
∂            
− − − −        
       
. (7)
In order to approximate expressions in two limiting
cases it is easier to use the expansions deduced in
Subproblem 2. In the high temperature limit, we get
B
A B V
k T
U N k T C R
ε >>
= ⇒ =
. (8)
i.e. the molar heat capacity is a constant. Here A N is the
Avogadro constant, A B N k R = stands for the universal
gas constant.
At law temperatures,
2
2
1 exp
exp exp
A
B
V A
B B B B
U N
k T
C N R
k T k T k T k T
ε
ε
ε ε ε ε
ε
   
= + − ⇒      
   
     
= − = −      
     
.
(9)
It is seen that the molar heat capacity goes to zero as the temperature vanishes. The schematic plot
is drawn in figure 1.
4 [3 points] Calculation of the gas pressure can be conducted in different ways. For example, the
average force exerted on the wall by a single atom is equal to the ratio of the moment transferred to
the time interval between two consecutive collisions,
2
2
2
2
n n n
n
n
mv mv E p
f
L L L
v
τ
∆
= = = =
∆
. (10)
To determine the pressure it is necessary to summarize those forces
1
2
2
n n
n
n n
n
N f
U
P N E
S SL V
∞
=
= = =
∑
∑ . (11)
Substituting the formula for the internal gas energy (3), we obtain
2
1 exp
B
N
P
V
k T
ε
ε
=
 
− −  
 
. (12)
In the two limiting cases the above obtained expressions for the internal energy should be
used.
At B k T ε >>
2 B
N
P k T
V
= , (13)
i.e. the pressure is proportional to the absolute temperature.
At low temperatures, we have
Fig.1
VII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 10/10
2 1 exp
B
N
P
V k T
ε ε    
= + −      
   
. (14)
At temperatures going to zero, the pressure tends to
a constant value
0 2
N
P
V
ε
= . (15)
The schematic plot of the pressure against the
temperature is shown in figure 2.
.
Marking scheme
№ Contents points
1 Normalizing condition (1) 0,5
1
2 Calculation of the number of particles (2) 0,5
3 General expression for the internal energy U 0,5
3
4 Calculation of the internal energy U (3) 1,0
5 Calculation of the classical limit of U (4) 0,5
6 Calculation of the low temperature limit of U (5) 1,0
7 General expression for the molar heat capacity С_V (6) 0,5
3
8 Calculation of the molar heat capacity С_V (7) 1,0
9 Calculation of the classical limit of С_V (8) 0,5
10 Calculation of the low temperature limit of С_V (9) 0,5
11 Schematic plot for С_V 0,5
12 General expression for average force (10) 0,5
12 General expression for P (11) 0,5
3
13 Calculation of the pressure P (12) 0,5
14 Calculation of the classical limit of P (13) 0,5
15 Calculation of the low temperature limit of P (14) 0,5
16 Schematic plot P 0,5
Fig.2
