---
id: izho-2021-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2021-t-q3
solution_type: official
source_document: solution-document-izho-2021-t-s
source_pdf: cache/phoxiv/izho/2021_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2021_T_S.pdf."
---

Problem 3. Optical waveguide (10.0 points)
Description of waves
3.1 The function
( )   + − = kx t E x t E cos ) , ( 0
 
, (1)
describing a wave at a fixed moment in time 0 t t = gives the distribution of the electric field strength in
space. When the coordinate is changed by the wavelength  , the argument of the cosine must change to
 2 , therefore
( ) ( ) ( )       2 0 0 = + − − + + − kx t x k t . (2)
It follows from this relation that

 2
= k . (3)
Fixing a point in space 0 x x = and reasoning similarly, we can write
( ) ( ) ( )      2 0 0 = + − − + − + kx t kx T t , (4)
which yields
T


2
= . (5)
3.2 The speed of propagation of a monochromatic wave is the speed of motion of a certain wave surface of
constant phase. This surface satisfies the equation
const kx t = + −   . (6)
It follows from this relation that the wave propagation speed is
dx
c
dt k

= = . (7)
3.3 The surface of the constant phase at a fixed time instant satisfies the equation
const r k = 
 
, (8)
XVII International Zhautykov Olympiad/Theoretical Competition с. 12/16
and this is a family of planes perpendicular to the wave vector.
3.4 Expanding the scalar product, we obtain the wave equation in the coordinate representation:
( )     + − −  = sin cos cos 0 ky kx t E E (9)
3.5 Since the superposition principle is valid for the electric field strength, we can write for a composite
wave
( ) ( ) ( )





 
−

 


 







 
+ − 




 
+ =
=  + −  + + − =
x
k
t x
k
k t E
x k k t E x k t E E
2 2
cos
2 2
cos 2
cos ) cos(
0 0 0
0 0 0 0 0 0
 

  
. (10)
Taking into account that 0     , and, consequently, 0 k k   , we rewrite this expression as:
( ) ( ) x k t t x A E 0 0 0 cos , − =  . (11)
Here the following notation is used
( ) 




 
−

= x
k
t E t x A
2 2
cos 2 , 0 0

(12)
for slowly varying wave amplitude.
3.6 To determine the time duration of the packet, it should be taken into account that when passing from one
"zero" of the cosine to the next, the argument of the cosine changes to  , therefore


  


=  =
 2
2
. (13)
Taking into account that     =  2 , we obtain from expression (13) the relationship between the
packet duration and its spectral width as
1 =   . (14)
3.7 For a similar reasoning, it is not difficult to find that
k
L L
k

=  =
 

2
2
. (15)
3.8 The phase velocity can be found as the velocity of motion of the wave surface of constant phase. It is
derived from function (11) that this surface satisfies the condition
( ) const x k t = − 0 0  , (16)
which results in the phase velocity
0
0
k
vp

= . (17)
3.9 To determine the group velocity, we write down the condition that the wave amplitude, for example, is
maximum
0
2 2
=

−

x
k
t

. (18)
It is concluded from this expression that the group velocity is given by the formula
k
vg


=

. (19)
3.10 For electromagnetic waves in vacuum, the relation c =  is fulfilled, which validates
kc  = , (20)
and it is finally obtained that
p v c
k

= = , (21)
XVII International Zhautykov Olympiad/Theoretical Competition с. 13/16
g p v c v
k
 
= = =

, (22)
i.e. both the phase and group speeds are equal to the speed of light c in a vacuum.
Plane waveguide
3.11 The function proposed in the problem statement describes the field in a plane waveguide
( ) ( ) y k x k t E y x t E y x sin cos ) , , ( 0 − =  (23)
and satisfies one boundary condition: at 0 y = the electric field strength 0 = E . Therefore, one should
choose such values of y k so that the second boundary condition is fulfilled: at y a = the field strength
should also vanish. This condition is satisfied when
a
m k m a k a k y y y

 =  =  = 0 sin . (24)
In the expressions above m stands for a positive integer, ... 3 , 2 , 1 = m
3.12 Let us write the equations of symmetric waves
( ) 1 0 0 0 cos cos sin E E t k x k y      = − + + , (25)
( ) 2 0 0 0 cos cos sin E E t k x k y      = − − − , (26)
where
c
k

= 0 is the wavenumber for waves, propagating at an angle   to the planes of the waveguide,
and summing them up yileds
( ) ( ) 1 2 0 0 0 2 cos cos cos sin E E E E t k x k y      = + = − + , (27)
with the following relation
0 0 / 2 E E  = . (28)
Note that there should be / 2   = − .
3.13 Comparison of the obtained formulas (23) and (27) implies that they coincide if
0 cos x k k  = , (29)
0 sin y k k  = . (30)
3.14 Comparing the values of y k in formulas (24) and (30), we find
0
0 sin sin
ak
m
a
m k k m m y



 =  = = . (31)
The wavenumber of the considered waves in vacuum is related to the wavelength by

 2
0 = k , (32)
then the values of the possible angles are given by the formula
a
m
ak
m m
2
sin
0
 
 = = . (33)
3.15 Equation (23) implies that the phase velocity of wave propagation in the waveguide is given by the
formula

 
cos 0 k k
v
x
p = = . (34)
Expressing the value of the cosine of the angle in terms of its sine, which is determined by formula
(33), we obtain
2
0
2
0 0
2
1
sin 1 cos






−
=
−
= =
a
m k
k k
vp






. (35)
XVII International Zhautykov Olympiad/Theoretical Competition с. 14/16
Finally, using formulas relating frequencies, wavelengths and the speed of light in a vacuum c
k
=
0

,
c



2
= , it is derived that
2 2
0 0
1
sin 1 cos






−
=
−
= =
a
c
m
c
k k
vp

 



. (36)
Thus, it turns out that the phase velocity of propagation of an undamped wave in the waveguide is greater
than the speed of light in vacuum.
3.16 The propagation velocity of a pulse is the group velocity, therefore, it is determined by formula (19), in
which the ratio of the increments can be replaced by the derivative
1 −






= =


=

 
d
dk
dk
d
k
vg . (37)
To evaluate the velocity using this formula, it is necessary to obtain explicitly the dependence of the
wavenumber on the frequency, ( )  k . To do so, we use the general formula for the phase velocity
k
vp

=
and obtain
2
2
2
1
1 





− = 





− = =
a
c
m
c a
c
m
c v
k
p



  
, (38)
and the pulse propagation velocity is written as
2
1
2
2
1
1
1






− =




















−
= 





= =
−
−





 a
c
m c
a
c
m
c d
dk
v v g . (39)
As follows from this formula, the group velocity is naturally less than the speed of light in a vacuum. Also,
it should be indicated that this speed is equal to  cos c , which is quite obvious.
3.17 Let us turn to formula (33) and substitute the given ratio / 1.2 a  =
m
a
m m 42 , 0
2
sin  =

 . (40)
Since the sine of any argument does not exceed unity, it follows from the obtained expression that
only two modes with 1 = m and 2 = m can propagate in a given waveguide, and, in other words, the input
pulse generate two pulses of these modes in the waveguide. The propagation velocities of pulses in these
modes differ markedly. First of all, let us express these velocities in terms of a given ratio / a  in the form
2 2
2
1 1 





− = 





− =
a
m c
a
c
m c v



. (41)
At the waveguide input, pulses in both modes are excited simultaneously, but since they move at
different speeds, as the distance traveled increases, they diverge in time. The number of pulses doubles when
pulses in different modes diverge for a time exceeding the pulse duration, hence, the minimum distance X
can be found from the condition
 = −
1 2 v
X
v
X
, (42)
which leads to the final answer
XVII International Zhautykov Olympiad/Theoretical Competition с. 15/16

 
 
c
a a
c
v v
X 4 , 1
2
2 1
1
2
1
1 1 1
2 2
1 2







−
−






−
=
−
= . (43)
3.18 For a waveguide to operate in a single-mode regime, it is necessary to satisfy the following condition
1
2
2 sin 2  =
a

 , (44)
which yields the inequality
1 

a
. (45)
Content Points
3.1
Formula (2): ( ) ( ) ( )       2 0 0 = + − − + + − kx t x k t 0.2
0.8
Formula (3):

 2
= k 0.2
Formula (4): ( ) ( ) ( )      2 0 0 = + − − + − + kx t kx T t 0.2
Formula (5):
T


2
= 0.2
3.2
Формула (6): const kx t = + −   0.2
0.4
Formula (7):
k dt
dx
v

= = 0.2
3.3 A family of planes, perpendicular to the wave vector.. 0.2 0.2
3.4 Formula (9): ( )     + − −  = sin cos cos 0 ky kx t E E 0.2 0.2
3.5
Formula (10): 0 0 0 2 cos cos
2 2 2 2
k k
E E t k x t x
 

           
= + − + −        
       
0.2
0.4
Formula (12): ( ) 




 
−

= x
k
t E t x A
2 2
cos 2 , 0 0

0.2
3.6
Formula (13):


  


=  =
 2
2
0.2
0.4
Formula (14): 1 =   0.2
3.7 Formula (15):
k
L L
k

=  =
 

2
2
0.2 0.2
3.8
Formula (16): ( ) const x k t = − 0 0  0.2
0.4
Formula (17):
0
0
k
vp

= 0.2
3.9
Formula (18): 0
2 2
=

−

x
k
t

0.2
0.4
Formula (19):
k
vg


=

0.2
3.10
Formula (20): kc  = 0.2
0.6
Formula (21): p v c
k

= = 0.2
Formula (22): g p v c v
k
 
= = =

0.2
XVII International Zhautykov Olympiad/Theoretical Competition с. 16/16
3.11 Formula (24): y k m
a

= 0.2 0.2
3.12
Formula (25): ( ) 1 0 0 0 cos cos sin E E t k x k y      = − + + 0.2
0.8
Formula (26): ( ) 2 0 0 0 cos cos sin E E t k x k y      = − − − 0.2
Formula (28): 0 0 / 2 E E  = 0.2
Condition: / 2   = − 0.2
3.13
Formula (29): 0 cos x k k  = 0.2
0.4
Formula (30): 0 sin y k k  = 0.2
3.14
Formula (31):
0
0 sin sin
ak
m
a
m k k m m y



 =  = = 0.3
0.6
Formula (33):
a
m
ak
m m
2
sin
0
 
 = = 0.3
3.15
Formula (34):

 
cos 0 k k
v
x
p = = 0.3
0.6 Formula (36):
2
1
p
c
v
c
m
a


=
 
− 
 
0.3
3.16
Formula (37):
1 −






= =


=

 
d
dk
dk
d
k
vg 0.3
1.0 Formula (38):
2
2
2
1
1 





− = 





− = =
a
c
m
c a
c
m
c v
k
p



  
0.4
Formula (39):
2
1 g
c
v c m
a


 
= − 
 
0.3
3.17
Формула (40): sin 0,42 m m   0.2
1.8
Possible modes with 1 = m and 2 = m 0.4
Formula (41):
2
1
2
v c m
a
  
= − 
 
0.4
Formula (42):  = −
1 2 v
X
v
X
0.4
Formula (43): 1,4 X c  0.4
3.18
Formula (44): 1
2
2 sin 2  =
a

 0.3
0.6
Formula (45): 1 

a
0.3
Total 10.0
