---
id: nbpho-2018-cube
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2018-cube
solution_type: official
source_document: solution-document-nbpho-2018-s
source_pdf: cache/phoxiv/nbpho/2018_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2018_S.pdf."
---

6. CUBE The cube gets pushed by the light
reﬂecting against its surfaces. Since there is no
partialreﬂection,lightcanonlyreﬂectinsidethe
cube via total internal reﬂection.
Let the cube’s faces be aligned to x-y-z axis
and let the light enter from the face which is
perpendicular to the z-axis.
Before entering the cube, let the unit vec-
tor directed along the motion of the light
be ⃗ t = (tx,ty,tz), after entering the cube,
⃗ r = (rx,ry,rz), before leaving the cube, ⃗ r′
=
(r′
x,r′
y,r′
z) and after leaving the cube, ⃗ t′
=
(t′
x,t′
y,t′
z). Every time the light bounces against
one of the sides of the cube, the respective com-
ponent of⃗ r gets ﬂipped.
i) The laser beam is limited to propagate in a
two-dimensional plane. Take ty = 0, ry = 0,
r′
y =0 and t′
y =0.
In time dt, the laser pointer generates light
with total energy Pdt carrying momentum P
c dt.
In that time, the same amount of light enters
the cube and exits it, only with diﬀerent dir-
ection. Applying Newton’s III law, the cube
mustattainamomentumofd⃗ p = P
c dt(⃗ t−⃗ t′
)and
thus experiences a force of ⃗ F =
d⃗ p
dt = P
c (⃗ t−⃗ t′
) =
P
c
√
(tx −t′
x)2 +(tz −t′
z)2. This means that we
wish to maximize the quantity (tx −t′
x)2
+(tz −
t′
z)2
.
Snell’s law can be written as nrx = tx and
nr′
x = t′
x since tx and rx are the sines of angles
of incidence and departure respectively.
The laser beam can only reﬂect against the
side that is perpendicular to the x-axis, beam
path with internal reﬂection is shown inthe ﬁg-
ure. Thus, r′
z = rz and t′
z = tz. Let’s investigate
the reﬂectionagainst the x-face. The angle of in-
cidence is cosα= rx. The condition for total in-
ternal reﬂection is sinαn ≥ 1. Rearranging the
terms yields cosα <
√
1− 1
n2 or rx <
√
1− 1
n2 .
This means that tx <
p
n2 −1.
θr
θr θr
α α
The force is maximal when the laser beam
bounces against the cube odd number of times.
Then r′
x = −rx and t′
x − tx < 2
p
n2 −1. Thus,
F = P
c
√
(tx −t′
x)2 +(tz −t′
z)2 < 2P
c (n2
− 1).
Note that t2
x +t2
z =1 so tx <1. This means that
the force can’t be larger than 2P
c . The maximal
force is then
F =
{
2P
c
p
n2 −1, if n<
p
2
2P
c , otherwise
ii) We proceed in a similar way as in the pre-
vious part, the main diﬀerence being that the
y-component doesn’t have to be 0.
The act of entering the cube keeps the light
moving in the same direction in the x-y plane.
Thus, tx
ty
=
rx
ry
. Snell’s law can be written
as
√
t2
x +t2
y = n
√
r2
x +r2
y, since
√
t2
x +t2
y and
√
r2
x +r2
y are the sines of the angles of incidence
and departure respectively. Combining these
equations, we get rx =
tx
n , ry =
ty
n . Similarly,
t′
x = nr′
x and t′
y = nr′
y.
The act of reﬂecting against the sides of the
cube doesn’t change the magnitude of rx and
ry. Thus, t′
z = tz. This means that the quant-
ity (tx −t′
x)2
+(ty −t′
y)2
needs to be maximized
and this happens when r′
y = −ry and r′
x = −rx
so F =2P
c
√
t2
x +t2
y =2nP
c
√
r2
x +r2
y.
Using the same argumentation as in the pre-
vious subtask, the condition for a reﬂection to
happen against the x-face is tx <
p
n2 −1. Sim-
ilarly, ty <
p
n2 −1 must hold for the y-face.
This means that r2
x+r2
y <2
(
1− 1
n2
)
. On the
otherhand, t2
x+t2
y+t2
z =1 so t2
x+t2
y <1 and r2
x+
r2
y < 1
n2 . Thus, r2
x +r2
y < min
(
2
(
1− 1
n2
)
, 1
n2
)
=
1
n2 min
(
2
(
n2
−1
)
,1
)
. The maximum force the
cube can experience is then
F =
{
2
p
2P
c
p
n2 −1, if n<
p
3/2
2P
c , otherwise
