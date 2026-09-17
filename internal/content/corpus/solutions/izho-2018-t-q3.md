---
id: izho-2018-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2018-t-q3
solution_type: official
source_document: solution-document-izho-2018-t-s
source_pdf: cache/phoxiv/izho/2018_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2018_T_S.pdf."
---

Problem 3. Optics of moving media (10.0 points)
Part 1. 4-dimensional vectors (1,4 points)
1.1 [0,8 points] To bring the momentum and the energy to the same unit it is sufficient to divide the
energy by the speed of light or to multiply the momentum by the speed of light. Moreover, by
virtue of the principle of relativity, it is necessary to make the substitution 𝑉 → −𝑉. Thus, one gets
2 2
( / )( / )
'
1 /
x
x
p V c E c
p
V c



, (1)
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 9/15
' y y p p  , (2)
' z z p p  , (3)
2 2
/ ( / )
'/
1 /
x E c V c p
E c
V c



. (4)
1.2 [0,6 points] In any inertial frame of reference the expression for the momentum is written as
2 2
1 /
mv
p
v c


, (5)
and the expression for the total energy has the form
2
2 2
1 /
mc
E
v c


. (6)
This implies that the invariant sought is equal to
2 2 2 2 4
inv E p c m c    . (7)
Part 2. Doppler effect and light aberration (4,6 points)
2.1 [1,0 points] Since the rest mass of photons is zero, it follows from (7) that the momentum and
energy of a photon are related as follows
E
p
c
 . (8)
It is known that the photon energy is given by the Planck formula as
E   . (9)
The photon momentum projections on the coordinate axes are written as
cos x p p   , (10)
sin y p p   , (11)
and on substituting into (B1.4), one finds
2 2
1 cos /
'
1 /
V c
V c

 



. (12)
This is the well known formula for the relativistic Doppler effect.
2.2 [0,4 points] It follows from (2), 8) and (9) that
'
sin ' sin
c c
 
   . (13)
Using (12), it is merely found that
2 2
1 / sin
sin '
1 cos /
V c
V c






. (14)
Expression (14) is a classical formula for the light aberration.
2.3 [1,0 points] The position of the star on the celestial sphere varies throughout the year due to the
orbital motion of the Earth around the Sun and the aberration of light which is schematically shown
in the figure on the right. Since the speed of Earth's orbital motion is much less than the speed of
light, it follows from (14) that the aberration angle is equal to
' sin
V
c
       , (15)
where 𝜑 denotes the angle between 𝑉 and the direction towards the star.
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 10/15
The figure shows that the angle 𝜑 varies periodically from a minimum value 𝛿 at the point
D, reaches the value of 𝜋/2 at the point B, has a maximum value of 𝜋 − 𝛿 at point C, and finally
becomes equal to 𝜋/2 at point 𝐴. Hence, one can infer that the star apparent position on the
celestial sphere moves along an ellipse with angular dimensions of the semi-axes
1
V
a
c
 (16)
and
2 sin
V
a
c
  . (17)
It is found from the given data that
2
1
arcsin 64.2
a
a

 
    
 
. (18)
2.4 [2,2 points] According to formula (12) for the Doppler effect the relative frequency shift at
0   is found to be
3 1 /
1 9.95 10
1 /
X
D X
v c
v c


    
     
  
. (19)
This shows that the Doppler effect cannot fully explain the red shift in the spectrum of the
star. It is natural to assume that when the light leaves the surface of the star the photon frequency
decreases due to the gravitational redshift.
The gravitational mass is found from the principle of equivalence as
2 ph m
c

 , (20)
and the gravity force, acting on the photon at a distance 𝑟 from the star, is equal, according to the
Newton law, to
2
ph m M
F G
r
 . (21)
The energy conservation law for the motion of the photon can be written as
d Fdr  . (22)
Thus,
2 2
d GM dr
c r


  . (23)
On integrating (B4.5) in the range of the stellar radius 𝑅 до ∞ leads to the following
equation
2
0
ln
GM
c R


 
   
 
, (24)
where 𝜔0 and 𝜔 stand for the frequencies of the photon on the stellar surface and at infinite
distance from it, respectively.
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 11/15
Hence, the frequency of the photon at infinite distance from the star is obtained as
2
0 0 2 2
exp exp
2
II v GM
c R c
  
   
       
   
, (25)
where the escape velocity is determined by the classical expression
2
II
GM
v
R
 . (26)
Combining formulas (19) and (25) yields
2
2
0
1 /
1 exp
2 1 /
II X
X
v v c
c v c


     
      
    
. (27)
On substituting numerical values, one gets
6
0
1 /
1 /
2ln 2.83 10 m/s
1
X
X
II
v c
v c
v c


  
 
     
    
          
. (28)
Part C. Light in a moving medium (4,0 points)
3.1 [1,1 points] By definition, the projections of the object velocity in the reference frame 𝑆′ are
defined as expressions
'
'
'
x
dx
u
dt
 , (29)
'
'
'
y
dy
u
dt
 . (30)
The same projections in the reference frame 𝑆 are given by
x
dx
u
dt
 , (31)
y
dy
u
dt
 . (32)
The Lorentz transformations can be rewritten in the form of finite differences as
2 2
' '
1 /
dx Vdt
dx
V c



, (33)
' dy dy  , (34)
2
2 2
' ' /
1 /
dt dx V c
dt
V c



. (35)
On dividing term by term the left and right hand sides of (33)-(35) and using (29)-(32)
yields
2
'
'
1
x
x
x
u V
u
u V
c



, (36)
2 2
2
1 /
'
'
1
y y
x
V c
u u
u V
c



. (37)
3.2 [1,4 points] Let us sit in the reference frame associated with the water. According to formula
(14) the light aberration appears in this reference frame, whereby making the angle 𝛼′ of incidence
of a plane wave on the water surface equal to
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 12/15
 
2 2
1 / cos
cos ' cos 1 sin /
1 sin /
V c
V c
V c

  


  

or
2 sin /
sin ' sin cos /
1 sin /
V c
V c
V c

  


  

. (38)
In the reference frame associated with the water flow, the refraction law has a usual form
sin ' sin ' n    , (39)
and the speed of light propagation is
ph
c
v
n
 . (40)
Going back to the laboratory reference frame with the aid of (36) and (37) one finds
2
sin '
sin sin '
sin '
1
ph
m ph
ph
v V
v v V
v V
c

 


  

, (41)
2 2
2
1 /
cos cos ' cos '
sin '
1
m ph ph
ph
V c
v v v
v V
c
  


 

. (42)
Using (38)-(42), it is finally obtained that
2
1 cos2
sin sin
n V
n n c

 

  , (43)
making
1
1
sin A
n
  , (44)
2
1
cos2 n
B
n
 
  . (45)
3.3 [0,4 points] Again using (38)-(42) yields
2
1
1 sin m
c
v V
n n

 
    
 
. (46)
whereby
2
c
A
n
 , (47)
2 2
1
1 sin B
n

 
   
 
. (48)
3.4 [0,9 points] When the light propagates in the direction of the water flow, the angle 𝛽 in formula
(48) should be taken 𝜋/2 and the corresponding speed is found as
2
1
1
c
v V
n n

 
    
 
, (49)
when the light propagates in the direction opposite to the water flow, the corresponding speed is
obtained as
2
1
1
c
v V
n n

 
    
 
. (50)
Since the total path covered by the two light beams in water is 2𝐿, the difference in their
propagation time ∆𝑡 is equal to
  2
2
4 1 2 2 Lv n L L
t
v v c  

    , (51)
and the corresponding path difference is derived as follows
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 13/15
  2
4 1 Lv n
l c t
c

    . (52)
Thus, the interference pattern is shifted by the number of bands equal to
  2
4 1 Lv n l
N
c  
 
   . (53)
3.5 [0,2 points] Using formula (53) the water refraction index is found to be
1 1.37
4
c N
n
Lv

   . (54)
Part Content Points
1.1
Formula (1)
2 2
( / )( / )
'
1 /
x
x
p V c E c
p
V c



0,2
0,8
Formula (2) ' y y p p  0,2
Formula (3) ' z z p p  0,2
Formula (4)
2 2
/ ( / )
'/
1 /
x E c V c p
E c
V c



0,2
1.2
Formula (5)
2 2
1 /
mv
p
v c


0,2
0,6
Formula (6)
2
2 2
1 /
mc
E
v c


0,2
Formula (7) 2 2 2 2 4
inv E p c m c    0,2
2.1
Formula (8)
E
p
c
 0,2
1,0
Formula (9) E h  0,2
Formula (10) cos x p p   0,2
Formula (11) sin y p p   0,2
Formula (12)
2 2
1 cos /
'
1 /
V c
V c

 



0,2
2.2
Formula (13)
'
sin ' sin
h h
c c
 
   0,2
0,4
Formula (14)
2 2
1 / sin
sin '
1 cos /
V c
V c






0,2
2.3
Formula (15) ' sin
V
c
       0,2
1,0
Formula (16) 1
V
a
c
 0,2
Formula (17) 2 sin
V
a
c
  0,2
Formula (18) 2
1
arcsin
a
a

 
  
 
0,2
Numerical value 64.2    0,2
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 14/15
2.4
Formula (19) 3 1 /
1 9.95 10
1 /
X
D X
v c
v c


    
     
  
0,2
2,2
Formula (20) 2 ph m
c

 0,2
Formula (21) 2
ph m M
F G
r
 0,2
Formula (22) d Fdr   0,2
Formula (23) 2 2
d GM dr
c r


  0,2
Formula (24) 2
0
ln
GM
c R


 
   
 
0,2
Formula (25)
2
0 0 2 2
exp exp
2
II v GM
c R c
  
   
       
   
0,2
Formula (26)
2
II
GM
v
R
 0,2
Formula (27)
2
2
0
1 /
1 exp
1 / 2
X II
X
v c v
v c c


       
        
      
0,2
Formula (28)
0
1 /
1
1 /
2ln
X
X
II
v c
v c
v c


  
  
   
    
   
   
0,2
Numerical value 4
7.108 10 21.31km/s II v c 
   0,2
3.1
Formula (29)
'
'
'
x
dx
u
dt
 0,1
1,1
Formula (30)
'
'
'
y
dy
u
dt
 0,1
Formula (31) x
dx
u
dt
 0,1
Formula (32) y
dy
u
dt
 0,1
Formula (33)
2 2
' '
1 /
dx Vdt
dx
V c



0,1
Formula (34) ' dy dy  0,1
Formula (35)
2
2 2
' ' /
1 /
dt dx V c
dt
V c



0,1
Formula (36)
2
'
'
1
x
x
x
u V
u
u V
c



0,2
Formula (37)
2 2
2
1 /
'
'
1
y y
x
V c
u u
u V
c



0,2
XIV International Zhautykov Olympiad/Theoretical Competition/Solutions Page 15/15
3.2
Formula (38)  
2 2
1 / cos
cos ' cos 1 sin /
1 sin /
V c
V c
V c

  


  

or
2 sin /
sin ' sin cos /
1 sin /
V c
V c
V c

  


  

0,2
1,4
Formula (39) sin ' sin ' n    0,2
Formula (40) ph
c
v
n
 0,2
Formula (41)
2
sin '
sin sin '
sin '
1
ph
m ph
ph
v V
v v V
v V
c

 


  

0,2
Formula (42)
2 2
2
1 /
cos cos ' cos '
sin '
1
m ph ph
ph
V c
v v v
v V
c
  


 

0,2
Formula (44) 1
1
sin A
n
  0,2
Formula (45)
2
1
cos2 n
B
n
 
  0,2
3.3
Formula (47) 2
c
A
n
 0,2
0,4
Formula (48) 2 2
1
1 sin B
n

 
   
 
0,2
3.4
Formula (49) 2
1
1
c
v V
n n

 
    
 
0,2
0,9
Formula (50) 2
1
1
c
v V
n n

 
    
 
0,2
Formula (51)
  2
2
4 1 2 2 Lv n L L
t
v v c  

    0,2
Formula (52)
  2
4 1 Lv n
l c t
c

    0,2
Formula (53)
  2
4 1 Lv n l
N
c  
 
   0,1
3.5
Formula (54) 1
4
c N
n
Lv

  0,1
0,2
Numerical value 1 1.37
4
c N
n
Lv

   0,1
Total 10,0
