---
id: solution-document-apho-2004-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2004/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2004-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2004/T2_S.pdf."
---

Solutions of Problem No. 1
Optical fiber
1.a. At both sides of the point O (outside and inside the fiber), according to Snell law, we
have:
0 i 1 sin sin n n 1 θ θ = (1)
where 1 θ is the value of angle θ at point O inside the fiber.
The light trajectory lays in the xOz plane. Because the refraction index n varies along x
direction, we divide Ox axis into small elements dx, so that in each of these elements n can be
considered as constant. We have, then:
( ) ( ) sin .sin n i n dn i di = + + (2)
where i is the angle between the light trajectory and x direction. Because
2
i
π
θ + = , then
( ) cos .cos( ) n n dn d θ θ θ = + + (3)
Thus, at each point of coordinate x on the light trajectory, we have:
2 2
1 1 cos cos cos n n x n1 1 θ α θ = − = θ (4)
Because
2
2 i
1 1 2
1
1 1
n
θ
θ θ = − = −
sin
cos sin (5)
we have
2
2 2 i
1 1 1 1 2
1
1 n n n n
n
θ
i θ θ θ = = − = −
sin
cos cos sin
Then
2 2
1 n C n i θ θ = = − cos sin (6)
1.2. Because ' tan
dx
x
dz
θ = = , from (6) we have:
( )
1
2 2 2 2 2 2
1 1 1 1 1 cos tan n x n x α θ α θ
−
− = − + C = (7)
Squaring the two sides, we obtain:
( )( )
2 1
2 2 2
2
1
1 1 tan
C
x
n
α θ
−
− + =
and
2
2 2 2 1
2
1 (1 ) '
n
x x
C
α + = − (8)
After derivating the two sides of (8) versus z, we get:
2 2
1
2
0 ''
n
x x
C
α
+ = (9)
Because 2 2
1 1 x α = − n n and
1• at x=0 1 n n =
• at x=a 2 n n =
we get
2 2
1 2
1 .
n n
a n
α
−
=
Finally, we get the equation for x''
2 2
1 2
2 2 2
1
0 ''
( sin ) i
n n
x x
a n θ
−
+ ⋅
−
=
)
(10)
1.c. The equation for the light trajectory is obtained by solving (10). This is an equation
similar to that for an harmonic oscillation, which solution can be written right away
( 0 sin x x pz = q + (11)
with
2 2
1 2
2 2
1 i
1
sin
n n
p
a n θ
−
=
−
The parameters p and q are determined from the boundary conditions:
•at z=0, x=0, hence q=0
•at z=0 inside the fiber, 1 ' ta
dx
x
dz
nθ = = , then
1
0
2 2
1 2
tan .sin a
x
p n n
i θ θ
= =
−
(12)
The equation for the trajectory of the light inside the fiber is:
2 2
i 1 2
2 2 2 2
1 i 1 2
sin
.sin .
sin
a n n z
x
a n n n
θ
θ
  −
 =
  − −  
 (13)
1.d. Here is a sketch of the trajectories of two rays entering the fiber at O, under different
incident angles.
O
a
a
22.a. The condition for the light to propagate along the fiber is that 0 x a ≤ . This means that:
i
2 2
1 2
sin a
a
n n
θ
≤
−
or:
2 2
i 1 sin n n θ ≤ − 2 (14)
Thus the incident angle i θ must not exceed i M θ , with
2 2
iM 1 2 0 344 sin . n n θ = − = (14a)
or:
( ) 2 2
i i M 1 2 0 344 0 351rad 20 13 Arc n n Arc θ θ ≤ = − = = = sin sin . . . o
2.b. The crossing points of the light beam with Oz axis must satisfy the condition pz kπ = ,
with k - an integer. The z coordinates of these points are:
2 2
1
2 2
1 2
sin n k
z k a
p n n
i θ π
π
−
= =
−
(15)
except for i θ =0.
3.a. The rays entering the fiber at different incident angles have different trajectories. As a
consequence, the propagation speeds of the rays along the fiber should be different.
The light trajectories are sinusoidal as given in (13). Let us calculate the time τ it takes the
light to propagate from point O to its first crossing point with Oz axis. This is twice the time it
takes the light to propagate from point O to its position most distant from Oz axis.
The time required for the light to travel a small segment ds along its trajectory is
2
2 2
2
1 .
n n n dz
dt ds dx dz dx
c c c dx
= = + = +
dx ds
dz
2
1
1 .
tan sin
n n
dx
c c
dx
θ θ
 
=  
 
= +
From (6), we have
( ) 2 2 2
1
2 2 2 2
i 1
1
.
. sin
n x
dt dx
c n x
α
θ α
−
=
−
and
0 0 0 2 2
2 1
2 2 2 2 2 2 2
0 0 0 i 1 i 1
2 sin sin
x x x
n dx x dx
dt
c n x n x
τ
α
θ α θ α
 
  = = −
  − −  
∫ ∫ ∫ 2
(16)
2
2 1
1 2
n
I I
c
α  
 
= −
3where
0
1
1
2 2 1 i 0 1 2
1
2
sin
sin
x
n x a
I Arc
n n n
α π
α θ
= =
−
(17)
0
0
2 1
2 2 2 2 i 2
i 1 i
2 2 2 3 3 3 3
1 1
0
0
2 2
sin . sin
sin sin sin
x
x n x
Arc
x n x
I
n n
α
θ
θ α i
1 4n
θ π θ
α α α
− −
= + = (18)
Using (16), (17), (18), we obtain
2 2
1
2 2 2
1 1 2
1
2
. sin a n
n c n n
i π θ  
− 

−  
τ = 

(19)
The propagation speed along the fiber is
z
v
τ
= , where is the coordinate of the first
crossing point, which is determined by (15) for k = 1. Because and τ depend on the incident
angle
z
z
i θ , v also depends on i θ .
For i iM θ θ = , from (14a), we get
1 2 2 2
1 2 2 2
M 2 2 2 2 2
1 1 1 1 2
2 2
1 .
c n n an n cn
an n n n n n
π
π
−
  −
= +  
  + −  
2
2
2
= v (20)
and
8
8
M 2 2
2 2 998 10 1 460
1 998 10 m/s
1 500 1 460
. .
.
. .
× × ×
= =
+
v (20a) ×
The propagation speed of the light along the Oz axis is
1
c
v
n
= (21)
because the refraction index is n1 on the axis of the fiber.
The numerical value is
8
8
0
2 998 10
1 999 10 m/s
1 5
.
.
.
×
= = × v (21a)
3.b. If the beam of the light pulses is formed by rays converging at O, then the rays with
different incident angles has different propagation speeds. The two rays of incident angles
0 i θ = and iM i θ θ = arrive to the plane z with a time delay
( )2
1 2
M 0 2 2
.
n n z z z
t
v v c n
−
− = ∆ = (22)
This means that a very short light pulse becomes a pulse of finite width given by (22)
at the plane z. If two consecutive pulses enter the fiber with a delay greater than , then at
the plane z, they are separated. Hence the repetition frequency of the pulses must not exceed
the maximal value:
t ∆
t ∆
4( )
( )
1 2
M 2
1 2
2. .
.
c n
f t
z n n
−
= ∆ =
−
(23)
If , then 1000 m z =
( )
8
M 2
2 2 998 10 1 460
547 1MHz
1000 1 500 1 460
. .
.
. .
f
× × ×
= =
× −
5
