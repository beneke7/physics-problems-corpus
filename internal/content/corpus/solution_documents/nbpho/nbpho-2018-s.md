---
id: solution-document-nbpho-2018-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2018_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2018-air-submarine, nbpho-2018-black-box, nbpho-2018-cube, nbpho-2018-fresnel-prism, nbpho-2018-gravitational-racing, nbpho-2018-lcr-circuit, nbpho-2018-magnetic-billiard, nbpho-2018-speed-camera, nbpho-2018-weather-forecast]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2018_S.pdf."
---

Nordic-Baltic Physics Olympiad 2018
Solutions
1. GRAVITATIONAL RACING
i) (a)Sinceallthreebodies movealongthesame
trajectory, they must be T
3 away from each other
at any moment of time. Thus, it takes T
3 to get
from O2 to O.
(b) From symmetry, time taken to go from
P to O must be T
4 . Furthermore, it takes T
3 to
get from P2 to P and from O to O3. This means
that it takes T
3 + T
3 + T
4 = 11T
12 to get from P2 to
O3 or T − 11T
12 = T
12 to get from O3 to P2.
ii) Since there are no external forces at play, the
centre of mass of the three body system must
stay in place and, due to symmetry, be located
at O. Thus,⃗ r1+⃗ r2+⃗ r3 =0, where⃗ r1,⃗ r2 and⃗ r3
are position vectors from O. Diﬀerentiating,
⃗ v1 +⃗ v2 +⃗ v3 =0. (1)
iii) The total angular momentum is conserved.
Thus, we can ﬁnd the angular momentum at a
moment of time that’s most convenient for us,
suchastheconﬁgurationwhenoneofthebodies
is at O. Due to symmetry,⃗ r2 =−⃗ r3 and⃗ v2 =⃗ v3.
The total angular momentum is then
J = m⃗ r1 ×⃗ v1 +m⃗ r2 ×⃗ v2 +m⃗ r3 ×⃗ v3 =
= m(⃗ r2 ×⃗ v2 +⃗ r3 ×⃗ v3)= m(⃗ r2 ×⃗ v2 −⃗ r2 ×⃗ v2)=0.
iv) Using equation ?? and the fact that⃗ v2 =⃗ v3,
⃗ v1 +2⃗ v2 = 0 must hold. Thus, ⃗ v2 = 1
2⃗ v1. Note
that this can only happen when ⃗ v1, ⃗ v2 and ⃗ v3
are parallel. Since the velocities of the bodies
are tangent to the trajectory at their locations,
thetrajectoriesofthebodiesmusthavethesame
slope at O, O2 and O3. This gives a convenient
way of reconstructing the positions of O2 and
O3 using a ruler as shown in the ﬁgure in red.
v) We can use symmetry to deduce that r2,x =
r3,x and r2,y =−r3,y. Additionally, r1,x +r2,x +
r3,x = 0, so r2,x = r3,x = −1
2 r1,x. This gives a
simple way to ﬁnd the x-coordinates of P2 and
P3 andreconstructtheirpositionsshowninblue
in the ﬁgure.
Let’s apply the conservation of angular mo-
mentum at point P. Due to symmetry, the ve-
locity vectors at P2 and P3 must intersect at the
x-axis. For the total angular momentum to be 0,
they must intersect at P. Therefore, P2 and P3
have tangents that pass through P. P2 and P3
can then be reconstructed as shown in green in
the ﬁgure.
O3
O2
P2
P3
d
ro Q Rp
α
vi) The general idea is to apply energy conser-
vation in both conﬁgurations and use the radius
of curvature at P to ﬁnd the value of Gm. From
the ﬁgure, Rp = 41.7, r0 = 145.2, d = 242 and
α=11.6deg (the units for distance are arbitrary,
only the ratios carry any meaning).
The total energy at O is
E=
mv2
1,o
2
+
mv2
2,o
2
+
mv2
3,o
2
−
Gm2
r12,o
−
Gm2
r23,o
−
Gm2
r31,o
.
We have v1,o = 2v2,o = 2v3,o = vo and r12,o =
r31,o = 1
2 r23,o = ro. Thus,
E =
3mv2
o
4
−
5Gm2
2ro
. (2)
Total Energy at P is
E=
mv2
1,p
2
+
mv2
2,p
2
+
mv2
3,p
2
−
Gm2
r12,p
−
Gm2
r23,p
−
Gm2
r31,p
.
Additionally, r12,p = r31,p = d and r23,p =
2dsinα. Furthermore, applying equation ??
on the y-axis, v1,p − v2,p sinα− v3,p sinα = 0.
Thus, v1,p = vp =2v2,p sinα=2v3,p sinα since
v2,p = v3,p. The total energy at P is then
E =
mv2
p
2
(
1+
1
2sin2
α
)
−
Gm2
d
(
2+
1
2sinα
)
=
=6.68mv2
p −4.49
Gm2
d
.
(3)
When a body is at P, the gravitational force is
equal to the centrifugal force. This means that
mv2
p
Rp
=2
Gm2
d2
cosα=1.96
Gm2
d2
,
Gm=0.510
v2
pd2
Rp
. (4)
Combining equations ??, ?? and ?? gives
3v2
o
4
=6.68v2
p +0.510
v2
pd2
Rp
(
5
2ro
−
4.49
d
)
,
rearranging,
vo
vp
=
√
4
3
(
6.68+0.510
d2
Rp
(
5
2r0
−
4.49
d
))
=2.8.
2. SPEED CAMERA
i) The Doppler shift formula has to be applied
twice. First,theobserverontheapproachingcar
sees both the incoming and reﬂected wave with
frequency f′
= f0(1+v/c). Now, the observer at
the speed camera sees the reﬂected wave Dop-
plershiftedto f1 = f′′
= f′
(1+v/c)= f0(1+v/c)2
.
Finally, we can simplify:
f1 = f0(1+v/c)2
≈ f0(1+2v/c).
ii) Using the trigonometric identity given in
the problem, we can express the product of two
waves simply as a sum of waves
cos(2πf1t)cos(2πf0t)=
=
1
2
cos[2π(f1 + f0)t]+
1
2
cos[2π(f1 − f0)t],
where we can easily identify two frequency com-
ponents fhigh = f1 + f0 and flow = f1 − f0.
iii) We can express flow = f1 − f0 = 2f0v/c and
calculate the speed of car as
v=
flow
2f0
c =30m/s.
3. WEATHER FORECAST
i) The angle φ is equal to the latitude. This
means that on the northern hemisphere the
Coriolis force vector is rotated 90◦
clockwise
from the velocity vector if both are drawn on
the map. To maintain force balance, the Cori-
olis force needs to be directed opposite to the
pressure gradient force, i.e. in the direction of
increasing pressure. Thus the velocity needs to
be directed along the isobars. The forces should
be directed counter-clockwise around the pres-
sure minimum, i.e. to the north in A and to the
southwestinB.Theanswermayalsobeaccepted
if the velocity has a small component towards
the pressure minimum, as long as this is much
smaller than the component along the isobars.
ii) In point A the isobars are approximately
straight, meaning that the velocity is constant
and thus that all forces sum to zero. A small
slab of air with area A and thickness dz has the
mass dm=ρAdz.
The force from the pressure diﬀerence dp
between opposite sides in Fp = Adp, such that
the force per mass is
Fp
dm
=−
Adp
ρAdz
=−
1
ρ
¯
¯
¯
¯
dp
dz
¯
¯
¯
¯
The pressure gradient can be estimated by
measuring the distance between a few nearby
isobars in the map, and ρ ≈ 1 kgm−3
. Force
balance gives the equation
2vΩsinφ=
1
ρ
¯
¯
¯
¯
dp
dz
¯
¯
¯
¯ =⇒ v=
1
2ρΩsinφ
¯
¯
¯
¯
dp
dz
¯
¯
¯
¯Using Ω = 7.27 × 10−5
s−1
, ϕ = 56◦
,
|dp/dz| ≈ 0.8/250 Pam−1
= 0.0032 Pam−1
we
get the estimation v = 22 ms−1
. Since the stu-
dents are only asked for an estimation, a wide
rangeofnumericalanswersareaccepted, aslong
as the method is correct.
iii) Now the isobars are curved, and from the
map one can estimate the radius of curvature
r ≈ 206 km. The diﬀerence of the pressure
gradient force and the Coriolis force must equal
the centripetal force:
v2
r
=
1
ρ
¯
¯
¯
¯
dp
dz
¯
¯
¯
¯−2vΩsinφ
Thisisasecondorderequationin v withpos-
itive solution
v=−rΩsinφ+
√
(rΩsinφ)2 +
r
ρ
¯
¯
¯
¯
dp
dz
¯
¯
¯
¯
With ϕ =60◦
, |dp/dz|≈0.0034 Pam−1
we
get the estimation v = 14 ms−1
. As a compar-
ison, if we neglect the curvature of the isobars
we get 22 ms−1
.
4. FRESNEL PRISM
i) In order to ﬁnd the grating pitch, we set up a
simple diﬀraction experiment: direct laser light
through the grating to the screen; there will be
a long series of bright spots which correspond
to a series of main maxima; all angles are small,
so we can apply small-angle approximation. As
compared with a pair of beams exiting the grat-
ingfromtwoneighbouringslitsperpendicularly,
a pair of beams exiting at a small angle φ ob-
tains an additional optical path diﬀerence equal
to dsinφ ≈ dφ, see ﬁgure. Suppose that angle
φ0 corresponds to a main diﬀraction maximum
of a certain order n so that the optical path dif-
ference between the two beams is equal to an
integer number n of wavelengths. Then, for the
n+ j-th main maximum, observed at angle αj,
the optical path diﬀerence between the neigh-
bouring beams is (n+ j)λ. Hence, dφj −dφ0 =
jλ so that φj −φ0 = jλ/d. Angle diﬀerence
φj −φ0 results in the distance of bright spots at
screenbeingequalto aj =(φj−φ0)L,where L is
the distance from the grating to the screen. So,
we can measure the distance aj between such a
pair of bright spots on the screen which are sep-
arated by j −1 bright spots, and calculate the
grating constant as
d =
jλL
aj
.
In order to obtain better accuracy, it is neces-
sary to use as large as possible value of j (the
largest such value that the both dots remain on
the screen). With L =, j =, and a10, we obtain
d =.
ii) There are two ways of determining the prism
angle. First, onecanuselaserlightandscreento
determine, to which distance x is the brightest
spot on the screen (the zeroth main maximum)
shifted when the Fresnel prism is inserted into
the path of the beam at distance L from the
screen. It appears that the angle β by which the
prism deﬂects the beam remains small, so that
we can still use the small angle approximation:
β = x/L. Simple geometrical optics calculation
yields
α=
β
n−1
=
x
L(n−1)
.
For L = and x= we obtain α=
An alternative approach is using the cyan
stripes on the sheet. We look through the prism
so that we can see stripes both through the
prism, and bypassing the stream simultaneously.
We ﬁnd such two neighbouring stripes and such
distance h between the prism and the sheet that
one stripe seen through the prism seems to be
exactly at the same position as the other stripe
seen beyond the edge of the prism. We measure
the distance y between these two stripes on the
sheet. Then, the deﬂection angle of the prism is
found as β= y/h, so that
α=
β
n−1
=
y
h(n−1)
.
For y= and h= we obtain α=
iii) Finally, we use that part of the sheet
where there are neighbouring cyan and magenta
stripes. We use a closely positioned pair of such
stripes, and look at it through the prism. De-
pending on the orientation of the prism the pair
of stripes is either brought close to each other,
or, vice versa, moved apart. We use such orient-
ation for which the stripes are brought closer to
each other, and ﬁnd such a distance H between
theprismandthesheetforwhichthetwostripes
overlap exactly (resulting in a seemingly yellow-
ish stripe). We also measure the distance z
between the stripes. Using our expression for
the deﬂection angle β=αn−1, we obtain an ex-
pression for the change of the deﬂection angle
δβ = αδn, where δn denotes the diﬀerence of
the refraction index for the cyan and magenta.
Therefore, δn = δβ/α. We can ﬁnd the change
of the deﬂection angle from our measurement
data as δβ= z/H. So, δn= z/(Hα), and
dn
dλ
=
z
Hα(λm −λc
.
Using z = and H = we obtain dn
dλ
=.
5. MAGNETIC BILLIARD
i) After the ﬁrst collision, let the velocities of
the ﬁrst and second ball be v1 and v2 respect-
ively. Applying the conservation of energy gives
mv2
2 =
mv2
1
2 +
mv2
2
2 or v2
= v2
1 + v2
2. Conserva-
tion of momentum yields mv = mv1 +mv2 or
v= v1+v2. Combining the two equations gives
v2
= v2
2+(v−v2)2
= v2
−2vv2+2v2
2 and v2 =0;v.
Since the ﬁrst solution corresponds to the case
when the collision doesn’t happen, the speed of
the second ball must be v2 = v.
ii) The balls experience Lorentz force due to the
external magnetic ﬁeld. Since the Lorentz force
is perpendicular to the line of motion and con-
stant in magnitude, the balls move along a circu-
lar orbit. Equating the Lorentz force with cent-
rifugal force gives mv2
R = qvB. Thus, R = mv
qB
and ω = v
R =
qB
m . This means that one of the
charges moves along the orbit clockwise and the
other anticlockwise.
After each collision, one of the balls moves
at speed v while the other one is at rest. The
moving ball travels a part of the full cyclotron
period (either clockwise or anticlockwise, de-
pending on the charge) before making a head-
on collision with the ball at rest. The mo-
mentum is given over to the ﬁrst ball and the
previously moving ball stays at rest and the mo-
tion starts once again. During the subsequent
collisions, the balls start drifting in one direc-
tion as can be seen in the ﬁgure.
α
α
R
r r
+q -q
v
α
iii) The average velocity of the balls is equal to
the average speed of the collision points. From
the ﬁgure, it can be seen that the direction of
the average velocity is π − α clockwise from
the initial direction of the incoming ball, where
α = arctan 2r
R . The collision point moves by
d = rcosα between two subsequent collisions.In between the two collisions, one of the balls
moves 2π−2α along a cyclotron orbit. The time
taken is then t = 2π−2α
ω
= 2m
qB
(
π−arctan 2r
R
)
and the average velocity is
vavg =
d
t
=
rωcosα
2(π−α)
=
vrR
R
p
4r2 +R2 (π−α)
=
=
v
√
4+ R2
r2
(
π−arctan 2r
R
).
iv) Let the velocities of the two balls at any mo-
ment of time be⃗ v1 and⃗ v2. The velocity of the
centre of mass is then ⃗ vCM = ⃗ v1+⃗ v2
2 . The equa-
tion of motion of the system is
q⃗ v1 ×⃗ B−⃗ F +q⃗ v2 ×⃗ B+⃗ F = m˙ ⃗ v1 +m˙ ⃗ v2,
where ⃗ F is the force between the two balls,
either the elastic forces during a collision or the
electrostatic forces. Then
q(⃗ v1 +⃗ v2)×⃗ B = m
d
dt
(⃗ v1 +⃗ v2),
q⃗ vCM ×⃗ B = m
d
dt
⃗ vCM.
This means that the centre of mass of the sys-
tem undergoes cyclotronic motion with a radius
of R = mv
qB . Because every collision point can
only be located where the center of mass is, the
collision points must also be limited to the same
circle. Thus, the maximum distance between
any two collisions is 2R = 2mv
qB
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
7. LCR-CIRCUIT
i) Let us consider ﬁrst the upper branch of the
circuit consisting of the capacitor C and resistor
R2. There is the same current I1 through the
both elements so that the complex voltage amp-
litudes are I1/(iωC) and I1R2, respectively. Di-
vision by imaginary unit rotates a vector in com-
plex plane clock-wise by π/2, hence the voltage
vector on resistor is rotated with respect to the
voltage on the capacitor counter-clock-wise by
π/2. Similar analysis leads us to the conclusion
that the voltage on the inductor L1 is rotated
with respect to the voltage on the resistor R0
counter-clock-wise by π/2, and that the voltage
on the resistor R1 is rotated with respect to the
voltage on the inductor L0 clock-wise by π/2.
The resulting phasor diagram is shown below.
ii) From Thales theorem we can conclude that
the points F, D, and E in the ﬁgure above lay
on the circle drawn around the segment AB
as a diameter. Hence, the voltage VAB which
we want to know equals by modulus to the dia-
meter AB of the circumcircle of the triangle
FDE for which we know the side lengths. By
making use of the two formulas for the sur-
face area of a triangle, the Heron formula A = √
p(p−a)(p−b)(p−c), with p = 1
2(a+b+ c),
and A = abc
4R with R denoting the radius of the
circumcircle, we conclude that the diameter of
the circumcircle
2R =
abc
2
√
p(p−a)(p−b)(p−c)
.With a = 7V, b = 15V and c = 20V we obtain
p =21V and VAB =2R =25V.
8. AIR IN A SUBMARINE
i) We are supposed to calculate the volume
rate (in m3
s ) at which the water ﬂows in. We
know A = 10cm2
. We apply Bernoulli’s equa-
tion, where the initial point is in the sea and the
ﬁnal point is in the hole:
Pi +
1
2
ρv2
i
| {z }
=0
= Pf +
1
2
ρv2
f (5)
from which we get:
vf =
√
2
∆P
ρ
≈
√
2gh=76.72m/s. (6)
Here vf is the speed at which the water ﬂows
in. This we can insert into the equation for the
volume rate:
Q = Avf =0.153
m3
s
≈150
litres
s
. (7)
ii) Atmospheric air consists mainly of diatomic
nitrogen and oxygen gas. At the temperatures
involved these molecules have f = 5 degrees of
freedom: 3 translational and 2 rotational. The
adiabatic constant γ is γ =(f +2)/f =7/5. One
can also obtain this result from γ=(cV +R)/cV .
For adiabatic compression we have
piV
γ
i
= pf V
γ
f
. (8)
The ﬁnal pressure is the pressure from the sea,
which is approximately p0+ρgh=(105
+1000·
9.8·300)Pa≈3MPa. This gives
Vf =Vi
(
pi
pf
)5
7
≈0.9m3
(9)
Note: The ﬁnal temperature is only about 2.6
times the initial temperature, such that the vi-
brational degrees of freedom of the molecules
does not have to be considered.
iii) The work W done on the system (consist-
ing of the whole submarine) by the surrounding
water is W = Pc∆V, where Pc is the constant
pressure of the surrounding water. There is no
heat exchange, so this work must be equal to the
change in internal energy of the system:
W =∆Ugas +∆Uwater = cV n∆T +Kturb (10)
where Kturb is the quantity that we are after and
get:
Kturb = Pc∆V −cV n∆T. (11)
We need the value of n (NB. you can also ﬁgure
it out from the ideal gas law):
n=
m
M
(12)
where m = 1.23
kg
m3 ·10m3
= 12.3kg and M =
0.02897
kg
mol. Plugging in the values we get n ≈
424mol. The ﬁnal temperature can be calcu-
lated from the initial temperature by using that
p1−γ
Tγ
is conserved.
By plugging in all the other values we get:
Kturb ≈2.2×107
J. (13)
Alternative solution: Alternatively, one can
look at the gas and the water (inside the submar-
ine) as separate subsystems. The work done on
the gas is equal to the change in internal energy
of the gas:
∫
Pg dV = cV n∆T. (14)
The work done on the water inside the submar-
ine by the water outside the submarine is Pc∆V.
The water inside the submarine also does work
on the gas given by
∫
Pg dV. The change in in-
ternal energy of the water in the submarine is
then
Kturb = Pc∆V −
∫
Pg dV = Pc∆V −cV n∆T
(15)
where the last equality follows from eqn (??).
From here one proceeds as already written
above.
9. BLACK BOX By measuring current with
with positive lead of multimeter connected to
“blue”
and negative lead connected to “black”
we get I0 ≈95mA.
From this measurement alone, since we
made a circuit that continuously conducted cur-
rent,
we can deduce that the circuit inside the
black box has to be one of following:
A
white
black
blue
B
white
black
blue
Note that the order of the inductor and di-
ode in series does not change anything.
The actual measured current value varies a
bit from one black box to another and also
changes very slightly due battery voltage drop-
ping and inductor heating up slightly.
i)
Measuring voltage between “blue” and
“black” we determine the electromotive force of
the battery U =9.5V.
ii)
We get the internal resistance of the in-
ductor from Rl =U/I0 ≈100ohm. We can also
get some hint to the magnitude of the induct-
ance as we saw no exponential ramp up of cur-
rent when measuring, meaning L/R ≪ t.
iii)
Determining which of the two possible cir-
cuits is inside the black box is trickier. One
way to do it, is to notice that when we discon-
nect “blue” and “black” we can get a small spark,
or feel a small pulse of current if we happen to
touch the wires at that point. That is because
L∂I
∂t = Ul – the current through the inductor
can’tchangeinstantaneouslyandthevoltagewill
generated by the inductor enough for spark or
high voltage pulse. Meanwhile if we have capa-
citor in parallel with inductor while disconnect-
ing the circuit we wont get the eﬀect. By testing
with “white” lead parallel with “black” or with
“blue” we can determine that no spark happens
in latter case and the circuit in the black box is
circuit B from the ﬁgure.
iv)
By connecting voltmeter between “white”
and “black” or “white” and “blue” we can see
the voltage decaying exponentially. That means
indeed, that the capacitor is connected to the
“white” wire and depending if the other lead is
connected to “black” or “blue” we are charging
thecapacitortonegativebatteryvoltagethrough
voltmeter or discharging it through voltmeter
and inductor and diode. We have to be careful
not to touch both wires at the same time, since
the resistance of good skin conductance is much
smaller then the resistance of the voltmeter.
We can measure the capacitance by measur-
ing the exponent: for example by taking two
voltage readings and measuring the time inter-
val between the readings. C =
ln
U1
U2
τRm
≈1uF.
v)
First we connect all three wires together.
That means we have current running through
inductor and the capacitor is charged to negat-
ive of battery voltage. We connect voltmeter
between “white” and “black”, so that we meas-
ure the total of the capacitor and battery voltage.
The reading is zero at the start since all black
boxleadsareconnected. Nowwedisconnecttheinductor battery current loop by disconnecting
“black” from other box leads and the multimeter
reading will jump to Uc +U
approx32V and starts to decay exponentially
as before. We can do this many times to get a
maximum reading.
After disconnecting the “black”, the current
goes through LCR circuit formed by inductor
and capacitor, but instead of oscillating it stops
due to the diode when current through inductor
has reached zero.
We can get the upper and lower bounds for
the inductance value by considering two diﬀer-
ent cases.
Upper bound we can get when we neglect
the resistive losses. In that case all the energy
at the end is in the capacitor. When we write
down the energy balance we get:
U2
C
2
+
I2
L
2
=
U2
c C
2
⇒ L ≈130mH
Lower bound we can get when we assume
that most of the energy went to resistive losses,
inthatcasetheinductorcurrentdecaysexponen-
tially and we can write expression for the down
the total charge:
(Uc +U)∗C = I
Rl
L
⇒ L ≈33.6mH
The correct value for the inductor L ≈
100mH is between those bounds and closer to
the upper bound as we may guess since Uc >U.
It is possible to get more accurate value by
looking at it without the assumptions - as a
damped harmonic oscillation.
