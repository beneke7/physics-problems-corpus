---
id: izho-2022-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2022-t-q3
solution_type: official
source_document: solution-document-izho-2022-t-s
source_pdf: cache/phoxiv/izho/2022_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2022_T_S.pdf."
---

Problem 3. Corpuscular interpretation of light pressure (10.0 points)
Introduction
3.1 Let the concentration of photons with the energy  in the incident radiation be equal to n, then the
wave intensity is determined by the relation
0 I c n  = , (1)
where c stands for the speed of light.
The number of photons N  falling on the area element S  at the angle  per unit of time is written
as
cos N cn t S   =   . (2)
The number of absorbed photons per unit of time is found as follows
(1 ) a N R N  = −  , (3)
whereas the number of reflected ones
r N R N  =  . (4)
The normal component of the momentum, transferred by one photon to the area element upon
absorption, is equal to
cos a p
c

  = , (5)
and the same value at reflection is put down as
2 cos r p
c

  = . (6)
The total momentum transferred to the area element is determined by the expression
a a r r p N p N p  =   +  , (7)
and the pressure sought is calculated by the formula
XVIII International Zhautykov Olympiad/Theoretical Competition с. 10/15
2 0
(1 )cos s
I p
p R
S t c


= = +
 
. (8)
3.2 At normal incidence 0  = and at complete absorption 0 R = , we obtain
6
4.70 10 Pa s
s
I
p
c
−
= =  . (9)
and, accordingly, at total reflection 1 R =
6 2
9.40 10 Pa s
s
I
p
c
−
= =  . (10)
3.3 Consider a section of the spherical surface perpendicular to the incident light flux. For the mirror part of
the surface, which completely reflects light, the mechanical torque is equal to zero, since the transmitted
momentum is directed strictly along the radius of the sphere.
Let us consider a strip in the section located from the center of the sphere at distances from x to
x dx + . The selected part of the completely absorbing surface has the area
2 2
2 dS R x dx = − , (11)
and the number of absorbed photons per unit time is equal to
s
a
I
N dS

 = , (12)
each of which has the momentum
a p
c

 = . (13)
The force shoulder is
l x = , (14)
therefore, the torque of forces acting on the selected area is obtained as
2 2 2 s
a a
I
dM N p l R x xdx
c
=   = − , (15)
and the total torque of forces is determined by the integral
3
6
0
2
3.13 10 N m
3
R
s I R
M dM
c
−
= = =    . (16)
Space station with the mirror sail
3.4 At the initial rest point of the station of mass m with the sail of area S , located at the distance 0 R from
the Sun of mass S M , the gravitational force is exactly balanced by the light pressure force, which leads to
the equation
0
2
0
2 S M m n
G S
R c

= , (17)
where G refers to the gravitational constant, 0 n is the concentration of photons of solar radiation with
energy  at the location of the station.
XVIII International Zhautykov Olympiad/Theoretical Competition с. 11/15
Due to the spherically symmetric expansion, the photon concentration changes with the distance r
from the Sun according to the law
2
0
0 ( )
R
n r n
r
 
=  
 
. (18)
The initial momentum of photons before the collision with the sail is written as
0 p
c

= , (19)
whereas the final one constitutes
c V
p
c c V
 −
=
+
. (20)
This relationship is easily obtained from the kinematics and is actually the formula for the Doppler effect. In
addition, the momentum of a photon after reflection from the sail mirror can be easily obtained from the
laws of conservation of momentum and energy by considering an absolutely elastic collision of a photon
with a moving massive mirror.
Thus, the change in the momentum of the photon is transferred to the mirror and is equal to
0
2
p p p
c V

 = − =
+
, (21)
and the number of photons falling per unit time t  on the sail is derived as
( ) ( )
N
n r S c V
t

= −

. (22)
Hence, the force acting on the station due to the solar radiation is determined by the expression
2
0
0 2
2 S R M m N c V c V
f p n S G
t r c V r c V

 − −  
=  = =  
 + +  
. (23)
The station is also subject to the force of gravitational attraction from the Sun
2
S
g
M m
f G
r
= . (24)
which means that the motion of the station in the radial direction is described by Newton's second law in the
form
2
2 S
g
M m dV V
m f f G
dt r c V
= − = −
+
. (25)
Bearing in mind that for a small displacement
dr Vdt = , (26)
we obtain from expression (25) the differential equation
2
( ) 2 S
dr
c V dV GM
r
+ = − , (27)
which is easily integrated and, if the station stops, gives rise to
2
0 0
0
1 1 1
2
2
S cV V GM
R R
 
+ = −  
 
. (28)
Solving equation (28), we find the distance sought as
0
2 1
2 0 0 0 ( )
1
2 S
R
R
cV V R
GM
=
+
−
, (29)
which, under the condition of the Earth's orbital motion
2
S E E GM V r = , (30)
as well as the relation V c , yields the final answer of the form
10 0
0 0
2
9.93 10 m
1
2 E E
R
R
cV R
V r
= = 
−
. (31)
XVIII International Zhautykov Olympiad/Theoretical Competition с. 12/15
3.5 It follows from formula (31) that the station is able to fly away to infinity R →  only if the
denominator of the expression becomes zero, which results in
2
min
0
2
18.1 m/s E E V r
V
cR
= = . (32)
Poynting-Robertson effect
3.6 The mass of the dust particle is determined by the expression
3 4
3
m a   = , (33)
and its cross-sectional area is
2
S a  = . (34)
Let us determine the effective force acting on the particle as a result of light absorption. To reduce it
to the pressure of light, let us move to the frame of reference associated with the dust particle. In this frame
of reference, the particle is affected by the pressure of light, calculated by formula (9), but its direction does
not coincide with the radial one due to the aberration of light, namely, it makes a small angle / V c with it.
Thus, in the tangential direction of the particle trajectory, a force appears due to the absorption of photons,
equal to
2
S I
F V S
c
= − , (35)
which creates a torque about the center of attraction found as
M FR =− . (36)
Since the trajectory of the dust particle is almost circular, its velocity can be written as
S GM
V
R
= , (37)
and the angular momentum relative to the attracting center
L mVR = . (38)
Collecting equations (33)-(38) together, we write
dL
M
dt
= , (39)
whence we finally find the time sought in the following form
2
8 2
1.27 10 s
3 S
ac
I

 = =  . (40)
At the derivation, change in the intensity of solar radiation with distance is neglected, since the
radius of the orbit decreases only slightly and the corresponding corrections are of higher order of smallness.
Note: A consistent explanation of the Poynting-Robertson effect is based on the following interpretation. In
the reference frame associated with the particle, it absorbs the solar radiation, which propagates at a small
angle to the radial direction, and then reradiates the accumulated energy isotropically in all directions. In the
reference frame associated with the Sun, the primary radiation of the Sun propagates in the radial direction,
and the reradiation of the particle itself is no longer isotropic. In the first case, the appearance of the braking
force moment is explained by the aberration of solar radiation, whereas in the second case, by the Doppler
effect for the reradiation of the particle itself.
Laser tweezer
3.7 Let us calculate the force acting on the first converging lens, which is equal to the total change in the
momentum of photons incident on the lens per unit time. Obviously, the momentum changes due to the
refraction of light in the glass, since its direction changes, but not the module.
Consider all the rays passing through the ring on the lens, located from its center at distances from r
to r dr + .
XVIII International Zhautykov Olympiad/Theoretical Competition с. 13/15
The area of this ring is written as
2 dS rdr  = . (41)
The change in the longitudinal momentum of photons passing through the given ring per unit time is
equal to
(1 cos )
I
dp dS
c
 = − , (42)
where the angle of refraction is found as folows
sin
r
F
 = , (43)
since all rays converge at the focus of the lens.
Integrating the resulting expression over the entire surface of the lens, we obtain
( )
4
3/2 2 3 2 2 17
2
0
2
2.64 10 N
3 4
R
I IR
f dp R F F R
c F cF
  −     = = − − −  =         
 . (44)
Since the foci of the lens 𝐿 and the particle 𝑀 coincide, when leaving the "lens-particle" system, the
light beam propagates again parallel to the optical axis, and, therefore, as a result of refraction on the particle
𝑀, the photon momentum is restored. Consequently, the force acting on the particle 𝑀 is equal in magnitude
to f , but is directed towards the converging lens. This force draws the particle into the laser radiation field.
This is the principle of operation of the "laser tweezer".
3.8 Consider all the rays passing through the element of the semiring on the lens, located from its center at
distances from r to r dr + , and also cut off by azimuth angles from  to d   + . The area of this
semicircle element is derived as
dS rdrd = . (45)
The change in the transverse momentum of photons passing through the given ring per unit time is
equal to
sin sin
I
dp dS
c
  ⊥ = , (46)
and integration over the entire surface of the half of the lens, taking into account formula (43), leads to the
expression
3
2 16
0 0
2
sin 2.24 10 N
3
R
I IR
f dp r dr d
cF cF

  −
⊥ ⊥ = = = =    . (47)
Content Points
3.1
Formula (1): 0 I c n  = 0.1
0.8
Formula (2): cos N cn t S   =   0.1
Formula (3): (1 ) a N R N  = −  0.1
Formula (4): r N R N  =  0.1
Formula (5): cos a p
c

  = 0.1
XVIII International Zhautykov Olympiad/Theoretical Competition с. 14/15
Formula (6): 2 cos r p
c

  = 0.1
Formula (7): a a r r p N p N p  =   +  0.1
Formula (8): 2 0
(1 )cos s
I
p R
c
 = + 0.1
3.2
Formula (9): s
s
I
p
c
= 0.1
0.4
Numerical value in formula (9): 6
4.70 10 Pa s p −
=  0.1
Formula (10):
2 s
s
I
p
c
= 0.1
Numerical value in formula (10): 6
9.40 10 Pa s p −
=  0.1
3.3
Moment of forces on the mirror part of the sphere 0 M = 0.1
1.0
Formula (11): 2 2
2 dS R x dx = − 0.1
Formula (12): s
a
I
N dS

 = 0.1
Formula (13): a p
c

 = 0.1
Formula (14): l x = 0.1
Formula (15): 2 2 2 s I
dM R x dx
c
= − 0.1
Formula (16):
3
2
3
s I R
M
c
= 0.2
Numerical value in formula (16): 6
3.13 10 N m M −
=   0.2
3.4
Formula (17): 0
2
0
2 S M m n
G S
R c

= 0.4
3.6
Formula (18):
2
0
0 ( )
R
n r n
r
 
=  
 
0.2
Formula (19): 0 p
c

= 0.1
Formula (20):
c V
p
c c V
 −
=
+
0.2
Formula (21): 0
2
p p p
c V

 = − =
+
0.1
Formula (22): ( ) ( )
N
n r S c V
t

= −

0.2
Formula (23): 2
S M m c V
f G
r c V
−
=
+
0.2
Formula (24): 2
S
g
M m
f G
r
= 0.2
Formula (25): 2
2 S M m dV V
m G
dt r c V
= −
+
0.4
Formula (26): dr Vdt = 0.2
Formula (27): 2
( ) 2 S
dr
c V dV GM
r
+ = − 0.2
XVIII International Zhautykov Olympiad/Theoretical Competition с. 15/15
Formula (28): 2
0 0
0
1 1 1
2
2
S cV V GM
R R
 
+ = −  
 
0.2
Formula (29): 0
2 1
2 0 0 0 ( )
1
2 S
R
R
cV V R
GM
=
+
−
0.2
Formula (30): 2
S E E GM V r = 0.2
Formula (31): 0
0 0
2
1
2 E E
R
R
cV R
V r
=
− 0.4
Numerical value in formula (31):
10
9.93 10 m R =  0.2
3.5
Formula (32):
2
min
0
2 E E V r
V
cR
= 0.2
0.4
Numerical value in formula (32): min 18.1 m/s V = 0.2
3.6
Formula (33): 3 4
3
m a   = 0.1
2.0
Formula (34):
2
S a  = 0.1
Formula (35): 2
S I
F V S
c
= − 0.4
Formula (36): M FR = 0.2
Formula (37): S GM
V
R
= 0.2
Formula (38): L mVR = 0.2
Formula (39):
dL
M
dt
= 0.2
Formula (40):
2
2
3 S
ac
I

 = 0.4
Numerical value in formula (40): 8
1.27 10 s  =  0.2
3.7
Formula (41): 2 dS rdr  = 0.1
1.0
Formula (42): (1 cos )
I
dp dS
c
 = − 0.2
Formula (43): sin
r
F
 = 0.2
Formula (44): ( )
4
3/2 2 3 2 2
2
2
3 4
I IR
f R F F R
c F cF
      = − − −         
0.3
Numerical value in formula (44):
17
2.64 10 N f −
=  0.2
3.8
Formula (45): dS rdrd = 0.1
0.8
Formula (46): sin sin
I
dp dS
c
  ⊥ = 0.2
Formula (47):
3
2
3
IR
f
cF
⊥ =
0.3
Numerical value in formula (47): 16
2.24 10 N f −
⊥ =  0.2
Total 10.0
