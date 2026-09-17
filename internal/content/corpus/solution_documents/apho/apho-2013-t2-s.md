---
id: solution-document-apho-2013-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2013/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2013-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2013/T2_S.pdf."
---

Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
Part A. Single accelerated particle
1. The equation of motion is given by
F =
d
dt
( mv) (1)
=
mc ˙
(1 2)
3
2
F = 3
ma, (2)
where = 1 p
1 2
and = v
c. So the acceleration is given by
a =
F
3m
. (3)
2. Eq.(3) can be rewritten as
c
d
dt
=
F
3m
Z
0
d
(1 2)
3
2
=
F
mc
Z t
0
dt
p
1 2
=
Ft
mc
(4)
=
Ft
mc q
1 + Ft
mc
2
. (5)
3. Using Eq.(5), we get
Z x
0
dx =
Z t
0
Ftdt
m
q
1 + Ft
mc
2
x =
mc2
F
0
@
s
1 +
✓
Ft
mc
◆2
1
1
A. (6)
4. Consider the following systems, a frame S’ is moving with respect to another frame S, with
velocity u in the x direction. If a particle is moving in the S’ frame with velocity v0 also in x
direction, then the particle velocity in the S frame is given by
v =
u + v0
1 + uv0
c2
. (7)
Relativistic Correction on GPS Satelitte Page 1 of 10Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
If the particles velocity changes with respect to the S’ frame, then the velocity in the S frame
is also change according to
dv =
dv0
1 + uv0
c2
u + v0
1 + uv0
c2
2
udv0
c2
dv =
1
2
dv0
1 + uv0
c2
2 . (8)
The time in the S’ frame is t0, so the time in the S frame is given by
t =
✓
t0
+
ux0
c2
◆
, (9)
so the time change in the S’ frame will give a time change in the S frame as follow
dt = dt0
✓
1 +
uv0
c2
◆
. (10)
The acceleration in the S frame is given by
a =
dv
dt
=
a0
3
1
1 + uv0
c2
3 . (11)
If the S’ frame is the proper frame, then by definition the velocity v0 = 0. Substitute this to
the last equation, we get
a =
a0
3
. (12)
Combining Eq.(3) and Eq.(12), we get
a0
=
F
m
⌘ g. (13)
5. Eq.(3) can also be rewritten as
c
d
d⌧
=
g
3
(14)
Z
0
d
1 2
=
g
c
Z ⌧
0
d⌧
ln
1
p
1 2
+ p
1 2
!
=
g⌧
c
(15)
s
1 +
1
= e
g⌧
c
⇣
e
g⌧
c + e
g⌧
c
⌘
= e
g⌧
c e
g⌧
c
= tanh
g⌧
c
. (16)
Relativistic Correction on GPS Satelitte Page 2 of 10Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
6. The time dilation relation is
dt = d⌧. (17)
From eq.(16), we have
=
1
p
1 2
= cosh
g⌧
c
. (18)
Combining this equations, we get
Z t
0
dt =
Z ⌧
0
d⌧ cosh
g⌧
c
t =
c
g
sinh
g⌧
c
. (19)
Part B. Flight Time
1. When the clock in the origin time is equal to t0, it emits a signal that contain the information
of its time. This signal will arrive at the particle at time t, while the particle position is at
x(t). We have
c(t t0) = x(t) (20)
t t0 =
c
g
0
@
s
1 +
✓
gt
c
◆2
1
1
A
t =
t0
2
2 gt0
c
1 gt0
c
. (21)
When the information arrive at the particle, the particle’s clock has a reading according to
eq.(19). So we get
c
g
sinh
g⌧
c
=
t0
2
2 gt0
c
1 gt0
c
0 =
1
2
✓
gt0
c
◆2
gt0
c
⇣
1 + sinh
g⌧
c
⌘
+ sinh
g⌧
c
gt0
c
= 1 + sinh
g⌧
c
± cosh
g⌧
c
. (22)
Using initial condition t = 0 when ⌧ = 0, we choose the negative sign
gt0
c
= 1 + sinh
g⌧
c
cosh
g⌧
c
t0 =
c
g
⇣
1 e
g⌧
c
⌘
. (23)
As ⌧ ! 1, t0 = c
g. So the clock reading will freeze at this value.
Relativistic Correction on GPS Satelitte Page 3 of 10Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
2. When the particles clock has a reading ⌧0, its position is given by eq.(6), and the time t0 is
given by eq.(19). Combining this two equation, we get
x =
c2
g
✓r
1 + sinh2 g⌧0
c
1
◆
. (24)
The particle’s clock reading is then sent to the observer at the origin. The total time needed
for the information to arrive is given by
t =
c
g
sinh
g⌧0
c
+
x
c
(25)
=
c
g
⇣
sinh
g⌧0
c
+ cosh
g⌧0
c
1
⌘
t =
c
g
⇣
e
g⌧0
c 1
⌘
(26)
⌧0 =
c
g
ln
✓
gt
c
+ 1
◆
. (27)
The time will not freeze.
Part C. Minkowski Diagram
1. The figure below show the setting of the problem.
The line AB represents the stick with proper length equal L in the S frame.
The length AB is equal to
q
1 2
1+ 2 L in the S’ frame.
The stick length in the S’ frame is represented by the line AC
!
!
!
!
!
!
!
!
!
!
!
!
3. The!position!of!the!particle!is!given!by!eq.!(5).!!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!!
x#
ct#
x’#
ct’#
!!
!!
A!
B!
C!
Figure 1: Minkowski Diagram
AC =
AB
cos✓
=
p
1 2L. (28)
2. The position of the particle is given by eq.(6).
Relativistic Correction on GPS Satelitte Page 4 of 10Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
!
!" !
!!
!
!!
! !
!!
!
!!
!′!
!"′!
Figure 2: Minkowski Diagram
Part D. Two Accelerated Particles
1. ⌧B = ⌧A.
2. From the diagram, we have
tan✓ = =
ct2 ct1
x2 x1
. (29)
Using eq.(6), and eq.(19) along with the initial condition, we get
x1 =
c2
g
⇣
cosh
g⌧1
c
1
⌘
, (30)
x2 =
c2
g
⇣
cosh
g⌧2
c
1
⌘
+ L. (31)
Using eq.(16), eq.(19), eq.(30) and eq.(31), we obtain
tanh
g⌧1
c
=
c
⇣
c
g sinh g⌧2
c
c
g sinh g⌧1
c
⌘
L + c2
g cosh g⌧2
c 1 c2
g cosh g⌧1
c 1
=
sinh g⌧2
c sinh g⌧1
c
gL
c2 + cosh g⌧2
c cosh g⌧1
c
gL
c2
sinh
g⌧1
c
= sinh
g⌧2
c
cosh
g⌧1
c
cosh
g⌧2
c
sinh
g⌧1
c
gL
c2
sinh
g⌧1
c
= sinh
g
c
(⌧2 ⌧1). (32)
So C1 = gL
c2 .
Relativistic Correction on GPS Satelitte Page 5 of 10Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
! =
sinh
gτ2
c
−sinh
gτ1
c
gL
c2
+cosh
gτ2
c
−cosh
gτ1
c
gL
c2
sinh
gτ1
c
= sinh
gτ2
c
cosh
gτ1
c
−cosh
gτ2
c
sinh
gτ1
c
!!
Using!identity!relation,!the!last!equation!is!simply!to!
!
gL
c2
sinh
gτ1
c
= sinh
g
c
τ2 −τ1 ( )!! (15)!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
3. From!the!length!contraction,!we!have!
!
L'=
x2 − x1
γ1
d ′ L
dτ1
=
dx2
dτ2
dτ2
dτ1
−
dx1
dτ1
⎛
⎝ ⎜
⎞
⎠ ⎟
1
γ1
−
x2 − x1
γ1
2
dγ1
dτ1
!!
x1! x2!
t1!
t2!
!!
!!
!!
Figure 3: Minkowski Diagram for two particles
3. From the length contraction, we have
L0
=
x2 x1
1
(33)
dL0
d⌧1
=
✓
dx2
d⌧2
d⌧2
d⌧1
dx1
d⌧1
◆
1
1
x2 x1
2
1
d 1
d⌧1
. (34)
Take derivative of eq.(30), eq.(31) and eq.(32), we get
dx1
d⌧1
= csinh
g⌧1
c
, (35)
dx2
d⌧2
= csinh
g⌧2
c
, (36)
gL
c2
cosh
g⌧1
c
= cosh
g
c
(⌧2 ⌧1)
✓
d⌧2
d⌧1
1
◆
. (37)
The last equation can be rearrange to get
d⌧2
d⌧1
=
gL
c2 cosh g⌧1
c
cosh g
c (⌧2 ⌧1)
+ 1. (38)
Relativistic Correction on GPS Satelitte Page 6 of 10Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
From eq.(29), we have
x2 x1 =
c(t2 t1)
1
=
c
tanh g⌧1
c
✓
c
g
sinh
g⌧2
c
c
g
sinh
g⌧1
c
◆
. (39)
Combining all these equations, we get
dL1
d⌧1
= csinh
g⌧2
c
gL
c2 cosh g⌧1
c
cosh g
c (⌧2 ⌧1)
+ csinh
g⌧2
c
csinh
g⌧1
c
!
1
cosh g⌧1
c
c2
g
⇣
sinh
g⌧2
c
sinh
g⌧1
c
⌘ 1
tanh g⌧1
c
1
cosh2 g⌧1
c
g
c
sinh
g⌧1
c
dL1
d⌧1
=
gL
c
sinh g⌧2
c
cosh g
c (⌧2 ⌧1)
. (40)
So C2 = gL
c .
Part E. Uniformly Accelerated Frame
1. Distance from a certain point xp according to the particle’s frame is
L0
=
x xp
(41)
L0
=
c2
g1
cosh g1⌧
c 1 xp
cosh g1⌧
c
L0
=
c2
g1
c2
g1
+ xp
cosh g1⌧
c
. (42)
For L0 equal constant, we need xp = c2
g1
.
2. First method: If the distance in the S’ frame is constant = L, then in the S frame the length
is
Ls = L
s
1 + 2
1 2
. (43)
So the position of the second particle is
x2 = x1 + Ls cos✓ (44)
=
c2
g1
0
@
s
1 +
✓
g1t1
c
◆2
1
1
A + L
s
1 +
✓
g1t1
c
◆
x2 =
✓
c2
g1
+ L
◆s
1 +
✓
g1t1
c
◆2
c2
g1
. (45)
Relativistic Correction on GPS Satelitte Page 7 of 10Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
! !
! x2 =
c2
g1
+ L
⎛
⎝ ⎜
⎞
⎠ ⎟ 1+
g1t1
c
⎛
⎝ ⎜
⎞
⎠ ⎟
2
−
c2
g1
!! (17)!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
!
the!time!of!the!second!particle!is!
!
ct2 = ct1 + LS sinθ
= ct1 +
L
g1t1
c
1+
g1t1
c
⎛
⎝ ⎜
⎞
⎠ ⎟
2
⎛
⎝
⎜
⎜
⎜
⎜
⎞
⎠
⎟
⎟
⎟
⎟
1
1+
g1t1
c
⎛
⎝ ⎜
⎞
⎠ ⎟
2
⎛
⎝
⎜
⎜
⎜
⎜
⎞
⎠
⎟
⎟
⎟
⎟
!!
! ct2 = ct1 1+
g1L
c2
⎛
⎝ ⎜
⎞
⎠ ⎟ !! (18)!
Substitute!eq.(18)!to!eq.(17)!to!get!
!!
L"
!
x1! x2!
t1!
t2!
!
Figure 4: Minkowski Diagram for two particles
The time of the second particle is
ct2 = ct1 + Ls sin✓ (46)
= ct1 + L
s
1 + 2
1 2
p
1 + 2
ct2 = t1
✓
c +
g1L
c
◆
. (47)
Substitute eq.(47) to eq.(45) to get
x2 =
✓
c2
g1
+ L
◆
v
u
u
t1 +
g1
c
t2
1 + g1L
c2
!2
c2
g1
x2 =
✓
c2
g1
+ L
◆
v
u
u
t1 +
g1
1 + g1L
c2
t2
c
!2
c2
g1
. (48)
From the last equation, we can identify
g2 ⌘
g1
1 + g1L
c2
. (49)
Relativistic Correction on GPS Satelitte Page 8 of 10Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
As for confirmation, we can subsitute this relation to the second particle position to get
x2 =
c2
g2
s
1 +
✓
g2t2
c
◆2
c2
g1
. (50)
Second method: In this method, we will choose g2 such that the special point like the one
descirbe in the question 1 is exactly the same as the similar point for the proper acceleration
g1.
For first particle, we have xp1g1 = c2
For second particle, we have (L + xp1)g2 = c2
Combining this two equations, we get
g2 =
c2
L + c2
g1
g2 =
g1
1 + g1L
c2
. (51)
3. The relation between the time in the two particles is given by eq.(47)
t2 = t1
✓
1 +
g1L
c2
◆
c2
g2
sinh
g2⌧2
c
=
c2
g1
sinh
g1⌧1
c
✓
1 +
g1L
c2
◆
sinh
g2⌧2
c
= sinh
g1⌧1
c
g2⌧2 = g1⌧1 (52)
d⌧2
d⌧1
=
g1
g2
= 1 +
g1L
c2
. (53)
Part F. Correction for GPS
1. From Newtons Law
GMm
r2
= m!2
r (54)
r =
✓
gR2T2
4⇡2
◆1
3
(55)
r = 2.66 ⇥ 107
m.
The velocity is given by
v = !r =
✓
2⇡gR2
T
◆1
3
(56)
= 3.87 ⇥ 103
m/s.
Relativistic Correction on GPS Satelitte Page 9 of 10Theoretical 2: Solution
Relativistic Correction on GPS Satelitte
2. The general relativity e↵ect is
d⌧g
dt
= 1 +
U
mc2
(57)
d⌧g
dt
= 1 +
gR2
c2
R r
Rr
. (58)
After one day, the di↵erence is
⌧g =
gR2
c2
R r
Rr
T (59)
= 4.55 ⇥ 10 5
s.
The special relativity e↵ect is
d⌧s
dt
=
r
1
v2
c2
(60)
=
v
u
u
t1
✓
2⇡gR2
T
◆2
3
!
1
c2
⇡ 1
1
2
✓
2⇡gR2
T
◆2
3
!
1
c2
. (61)
After one day, the di↵erence is
⌧s =
1
2
✓
2⇡gR2
T
◆2
3
!
1
c2
T (62)
= 7.18 ⇥ 10 6
s.
The satelite’s clock is faster with total ⌧ = ⌧g + ⌧s = 3.83 ⇥ 10 5s.
3. L = c ⌧ = 1.15 ⇥ 104m = 11.5km.
Relativistic Correction on GPS Satelitte Page 10 of 10
