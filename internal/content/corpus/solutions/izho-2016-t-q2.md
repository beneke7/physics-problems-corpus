---
id: izho-2016-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2016-t-q2
solution_type: official
source_document: solution-document-izho-2016-t-s
source_pdf: cache/phoxiv/izho/2016_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2016_T_S.pdf."
---

Problem 2. Equilibrium in terms of potential energy (10.0 points)
1. Introduction (1.0 points)
1.1 [1.0 points] The change in the surface energy at the liquid-solid interface is found as
  S US      1 2   . (1)
Considering the small segment l  of the boundary of the drop one can write the condition
of its balance
      cos 0 1 2 l l     . (2)
It follows from equations (1) and (2) that
  cos 0    s U S  . (3)
2. Water in a vertical cylindrical tube (2.0 points)
2.1 [0.5 points] The formula for the change in the surface energy of the
system S U  that corresponds to an additional small rise of water level
h  in the tube takes the form
h R S US               2 cos cos 0 0 , (4)
where h R S     2 is the change of the contact area between the liquid
and the inner surface of the tube.
2.2 [0.5 points] The formula for the change in the potential energy G U 
of the liquid in the gravitational field that corresponds to an additional
small rise of water level h  in the tube takes the form
gh h R UG      2
. (5)
It is taken into account that the liquid of the mass   h R m    2
has risen to the height h.
XII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 3/8
2.3 [1.0 points] If S U  exceeds G U  , the energy of the system decreases when the liquid has
risen, and hence the liquid will continue to rise, otherwise liquid level will go down. At the position
of equilibrium, the total change in energy should be equal to zero, and, thus,
gR
h gh h R h R

 
    
cos 2
2 cos 0
0
2
0       . (6)
Substitution of the numerical values leads to the following result
2 0
0 3 3
2 cos 2 0,072 cos20
1,4 10 14
1,0 10 9,8 1,0 10
h m mm
gR
 



  
    
   
. (7)
3. Water in a vertical conical tube (4.0 points)
3.1 [0.5 points] The formula for the change in the surface energy of
the system S U  that corresponds to an additional small rise of water
level h  in the tube takes the form

    
cos
2 cos cos 0 0
h
r S US

        . (8)
Here  tg h R r   is the tube radius at the height h.
3.2 [0.5 points] The formula for the change in the potential energy
G U  of the liquid in the gravitational field that corresponds to an
additional small rise of water level h  in the tube takes the form
gh h r UG      2
. (9)
3.3 [1.0 points] As above, the equilibrium position corresponds to
the equality of the modules for the energy changes written here as
gh h r
h
r  

    

 2
0
cos
2 cos , (10)
Substituting the expression for the radius of the tube at the height h, one gets the equation
 

 
cos
cos 2 0
gh
tg h R


, (11)
in which the parameter 0 h is easily introduced as



 
 
cos
1
cos
1
cos 2 0 0
h
tg
R
h
h
h
tg
R
h
gR


 







, (12)
3.4 [1.0 points] The resulting equation is square with respect to h. Therefore it is necessary to
analyze its roots, or condition of their absence. Let us rewrite equation (12) in the form






    tg
R
h
h h 1 cos 0 . (13)
The quadratic function on the right side of this
equation has zeros at 0  h and
 tg
R
h  ,, and therefore,
it reaches its maximum value of 

cos
4tg
R
at
 tg
R
h
2

. Consequently, equation (12) has no real roots at


cos
4
0
tg
R
h  . Otherwise, there are two roots. At the
given parameters of the tube cos 25
4
R
mm
tg


 , so
there are two root corresponding to the two equilibrium positions. It is easy to show that the smaller
XII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 4/8
root gives a stable equilibrium position, and the larger one is unstable and their numerical values
are evaluated as
2 0
1 2
cos cos 4 sin
16,5 , 83,5
sin
2
h
R h h mm h mm
R
  

 
   
Thus, when 2 h H  the water level in the tube stops at the height 1 h and if the initial water
level exceeds 2 h the water fills up the tube completely.
3.5 [1.0 points] The water fills up the tube at any initial value of 𝐻, if equation (12) has no roots at
all. This condition is fulfilled when


cos
4
0
tg
R
h  , (14)
or
018 , 0
4
sin
0
 
h
R
 .
4. Outflow of water (3.0 points)
4.1 [3.0 points] The water will start to pour out through the hole only if the water surface in the
openings lose stability. This happens if the decrease of the potential energy in the gravitational field
exceeds the increase in the absolute value of the surface energy. This condition is expressed by the
inequality
g
h R
h 

 
6
2 2
2 2
2
0  , (15)
from which it follows that
0 6
6,6 R mm
g


  (16)
Grading scheme
№ Content points
1 The segment of the boundary is chosen 0,5
1,0 Balance condition for the segment (2)       cos 0 1 2 l l     0,5
2.1 Formula (4) h R S US               2 cos cos 0 0
0.5 0.5
2.2 Formula (5) gh h R UG      2
0,5 0,5
2.3 The equality for the change of energies (6)
gR
h gh h R h R

 
    
cos 2
2 cos 0
0
2
0      
0,5
1,0 Formula (7) 0
0
2 cos
h
gR
 


0,2
Correct numerical value (with significant digits of accuracy)
2
0 1,4 10 14 h m mm 
  
0.3
3.1
Formula (8)

    
cos
2 cos cos 0 0
h
r S US

       
0,5
0,5
3.2 Formula (9) gh h r UG      2
0,5 0,5
3.3
Equation (10) gh h r
h
r  

    

 2
0
cos
2 cos
0,5
1.0
XII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 5/8
Equation (12) 


 
 
cos
1
cos
1
cos 2 0 0
h
tg
R
h
h
h
tg
R
h
gR


 







0,5
3.4 Solution of equation (12) 0,3
1,0 Analysis of the stability of the roots 0.5
Correct result 0,2
3.5
Condition for root absence
0
sin
4
R
h
 
0,6
1,0
Numerical value of the angle sin 0,018   0,4
4.1 Basic idea: change in the potential energy must be greater than the
change in the surface energy
1,5
3,0
Inequality (15) g
h R
h 

 
6
2 2
2 2
2
0 
1,0
Numerical value for the radius (with significant digits of accuracy)
0 6
6,6 R mm
g


 
0,5
Total 10,0
