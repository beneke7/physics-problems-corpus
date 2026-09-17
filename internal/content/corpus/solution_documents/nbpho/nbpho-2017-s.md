---
id: solution-document-nbpho-2017-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2017-beams, nbpho-2017-black-box, nbpho-2017-comet, nbpho-2017-dragon, nbpho-2017-gravitational-waves, nbpho-2017-loop, nbpho-2017-resistors-capacitors, nbpho-2017-spacecraft-pressure, nbpho-2017-virtual-mass, nbpho-2017-zener]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2017_S.pdf."
---

Nordic-Baltic Physics Olympiad 2017
Solutions
1. DRAGON
i) First we have to note that the diameter of
the bowl and the height of the dragon give in-
consistentresults. Becausethedistancebetween
the two images of the dragons is relatively small
compared to the height of the dragon, the
height of the water level is almost 3cm, i.e. the
dragon’s height. But by comparing the water
level to the diameter of the bowl the water level
is around 7cm. So either the bowl’s diameter or
the dragon’s height is incorrect. Neglecting the
inconsistency of the provided values we will give
the solution method below.
The dragon is relatively large and covers
mostofthebottomofthebowl. Thereforewhen
viewing from below we would expect some of
the rays to always hit the dragon after being re-
ﬂected from the horizontal top water surface.
This happens until the rays are incident to the
water surface at an angle smaller than the total
internal reﬂection angle. Then the rays will go
through the water surface and we no longer see
the reﬂection of the dragon. From the image be-
low for the total internal reﬂection case we have
nsinγ1 =sin90=1,
γ1 =arcsin
(
1
n
)
≈48.8°.
Because the normals to the top water surface
and the side of the bowl are at 60°, we have
γ1 +γ2 =60° =⇒ γ2 ≈11.2°.
From Snell’s law we have
sinγ3 = nsinγ2 =⇒ γ3 =arcsin
(
nsinγ2
)
,
γ3 ≈15.0°.
Because the normal to the side of the bowl is
at 30° to the horizon, the angle of the ray that
exited the bowl is 30°+γ3 ≈45.0° below the ho-
rizon.
γ1
γ2
γ3
ii) First, notice that all calculations below are
not very precise and slight departure from the
given numbers is acceptable as the bowl wall is
slightly curved (the angle between horizon and
the wall is not strictly constant).
By the size and shape of the dragon we will
assume that the highest point of the dragon is
roughly in the middle of the bowl. The last
point that we will see as we increase the view-
ing angle is the image of the highest point of
the dragon, which we denote by O. By using
a ruler to measure the size of the dragon and
the distance between the highest point of the
dragon to the same point on the reﬂected im-
age, we get 4.5cm and 0.45cm. The actual
height of the dragon is 3cm, so the actual dis-
tance between the dragon and its reﬂection is
2h= 0.45
4.5 ·3cm=0.3cm. The two images are at
equal distances from the water surface, because
they are reﬂections of each other. Therefore the
distance from the highest point of the dragon to
the water surface is h=0.15cm.
h
H
O
P
γ1
γ2
Q
γ3
The height H of the water surface can be
measured from the photo, by measuring the dia-
meter of the bottom of the bowl and the height
of the water level on the photo with a ruler. We
get 9.3cm and 6.5cm. The actual diameter is
d = 10cm. Therefore the actual height of the
water level is H = 6.5
9.3 ·10cm = 7.0cm (or we
can add up the height of the dragon and the dis-
tanceofit’shighestpointfromthewatersurface,
which we found before). In the image below we
can ﬁnd
|QP|=
d
2
+Htan(30°)≈9cm.
Now we can use the following relations
tanγ3 =
h
|QP|
,
γ2 =30°−γ3,
nsinγ2 =sinγ1.
The ﬁnal angle above the horizon is α = γ1 −
30deg and by using the previous relations we
get
α=asin
(
nsin
(
30°−atan
(
h
|QP|
)))
−30deg,
α≈10.2°.
2. COMET
i) Sincethedistancetoaphelionisverylarge,the
comet’s full energy −G M⊙
Rmin+Rmax
can be taken
to be zero and near the Sun the orbit is approx-
imately shaped like a parabola. Hence, at the
distance R0, 1
2v2
= G M⊙
R0
(the same result can
be found by writing out the conservation of an-
gular momentum and energy for the comet at
two points: the aphelion and the intersection of
the two orbits; and by using Rmax ≫ R0). Since
α = 45°, the tangential and radial velocities are
equal, vt = vr and v2
≡ v2
t +v2
r =2v2
t , therefore
v2
t =G
M⊙
R0
(which is exactly the same expression what we
have for the orbital speed w of Earth). Angu-
lar momentum conservation law allows us to ex-
press the speed at perihelion u = vtR0/Rmin;
from energy conservation law 1
2 u2
= G M⊙
Rmin
.
Thus,
1
2
GM⊙
R0
·
R2
0
R2
min
=
GM⊙
Rmin
from where Rmin = 1
2R0.
ii) Denote by O the focus of the elliptical or-
bit of the comet where the Sun is, and by Q the
other focus of the comet’s orbit. Let B and C
be the intersection points of the Earth’s and the
comet’s orbits.
B
O
C
Q
P
We will show that the points B, C and O
are all approximately on the same line by prov-
ing that the angle ̸ QOB is approximately 90°.
By the property of the ellipse that the sum of
thelengths of theline segments drawnfromany
pointontheellipsetothetwofocalpointsiscon-
stant we get
|QB|+|BO|=|QP|+|OP|=|QO|+2|OP|.
By using |BO| = R0 and that approximately
|OP| = 1
2R0 (the equality is in the limit that
Rmax goes to inﬁnity), we get that |QB| =
|QO|. So the triangle △QBO is isosceles and
theangles̸ QOB and̸ QBO areequal. Because
|QB| ≫ |OB|, we have approximately ̸ QOB =
̸ QBO = 90° and all the points B, C and O are
approximately on the same line.
Theradiusvectorofthecometcoversanarea
SBCP contained between the segment BCP of
the ellipse and the straight line BC. We will ap-
proximate this segment of the ellipse as a para-
bola. The surface area of a mirror-symmetric
parabolic segment is equal to two thirds of the
product of its height and length, as can be de-termined by integrating the parabola:
SBCP =
2
3
·2R0 ·
R0
2
=
2
3
R2
0.
ByKepler’ssecondlawthecometsweepsout
equal areas in equal times (i.e. the time required
to cover some segment of the ellipse is propor-
tional to the area of the segment drawn out by
the radius vector connecting the comet and the
Sun). Since vt = w, the radius vector of the
comet covers the surface area at the same rate as
the radius vector of the Earth, which is πR2
0/T,
where T is one year. Therefore
t=
SBCP
πR2
0
T =
2
3π
365days≈77days.
Alternative solution: We can also prove that
the intersection points of the orbits and the sun
lie on the same line in the following way. Near
the Sun we can approximate the orbit as a para-
bola. Due to the geometrical property of a para-
bola, if we take the x-axis parallel to be the axis
of the parabola pointing towards the perihelion
P, and the origin O at the focus (i.e. the Sun)
then for any point S at the parabola, |OS|+x=
2|OP| = R0, where x is the x-coordinate of
S. For the intersection points B and C of the
Earth’s and comet’s orbits. |OB| = |OC| = R0,
therefore for the both points x = 0, i.e. O, A,
and B all lie on the y-axis.
Alternative solution: Here is an alternative
solution to show that the points B, C and O are
all approximately on the same line. We have
|OQ|= Rmax −Rmin = Rmax −
R0
2
.
Every ellipse has the property that the lines
drawn from any point on the ellipse to the two
focal points are at the same angle to the tan-
gent. Using this property, because the tangent
at point B is at 45° to the segment OB, then
|BQ| is also at 45° to the tangent and ̸ OBQ =
90°. So in the right angled triangle △BOQ we
have
cos̸ BOQ =
|OB|
|OQ|
=
R0
Rmax −
R0
2
≈0,
where we used the fact that Rmax ≫ R0. So we
have approximately ̸ BOQ =90° and the points
B, C and O all lie on the same line.
3. RESISTORS AND CAPACITORS
i) Once the potentials have stabilized, there is
no current through any capacitor, therefore we
can then analyze the resistor network by eﬀect-
ively cutting away all the capacitors. We get the
following equivalent circuit.
A
B
C
X
We can analyze it using the laws of series
and parallel connections. The resistance of the
three resistors between the points X and C is
RXC = 1
R−1+(2R)−1 = 2
3R. The resistance of
the network between X and B is then RXB =
1
(RXC+R)−1+R−1 = 5
8R. Therefore the poten-
tials φB = R
RXB+RU = 8
13U and φC = φB +
R
RXC+R (U −φB)= 11
13U.
ii) The stabilized potentials inside a capacitor
network are entirely deﬁned by the potentials at
itsboundary. Thereforewemaynowanalyzethe
capacitor network in isolation (pretending that
the resistors have all been cut, but there are ex-
ternal voltage sources). It is equivalent to the
following circuit.
A D
B
C
Using the laws of parallel and series connection
of capacitors, this simpliﬁes even further.
1
2C
C
3
2C
ϕA ϕD
ϕB
ϕC
The dotted area contains no charge, hence
(as q =CU and φA =0)
1
2
C(φD −φA)+
3
2
C(φD −φC)+C(φD −φB)=0,
φD =
1
6
(φA +2φB +3φC)=
1
6
(2φB +3φC),
φD =
49
78
U.
4. GRAVITATIONAL WAVES
i) Black holes will merge at this distance.
rmin = rs1 +rs2 = 2G(m1+m2)
c2
Substituting for r in the power equation, we get
the maximum power for a system with masses
m1 and m2.
Pmax(m1,m2)= 1
5
c5
G
(m1m2)2
(m1+m2)4
Nowletusconsidertheeﬀectofmasses. Let
us deﬁne a := (m1m2)2
(m1+m2)4 . The intuition tells us,
that more power should be radiated oﬀ a bigger
system, thus the masses should tend to inﬁnity
for maximum power.
However the limit lim
m1=m2→∞
a = 1 suggests
otherwise. So does the dimensional analysis:
the dimension of [a] = (M·M)2
M4 = 1 means that
the absolute values of the masses don’t contrib-
ute to the equation. This is intuitively explained
by the proportionally increasing Schwarzschild
radii.
However the mass distribution does matter,
since a isn’t the same for all m1, m2 either.
Let us determine the maximum value it can
take. Let us redeﬁne it in terms of the total
mass M := m1 +m2 and the mass distribution
k := m1
M . Then
m1 = kM
m2 =(1−k)M
⇒ a= (m1m2)2
(m1+m2)4 = (kM(k−1)M)2
M4 =[k(k−1)]2
d
dk[k(k−1)]2
=0⇔ k = 1
2 ⇔ m1 = m2
⇒ amax =[1
2(1− 1
2)]2
= 1
16
So that ﬁnally
Pmax = 1
5
c5
G
1
16 = 1
80
c5
G =4.5×1050
W
Interestingly enough, the peak power emit-
ted in gravitational radiation by any merging
binary system will be the same. c5
G is also called
luminosity of the universe.
ii) U = 1
2 k∆ℓ2
, energy stored in a uniformly de-
formed body
k = F
∆ℓ
F =σS
∆ℓ=εℓ
σ=εE
u = U
V , where V = Sℓ is the volume
⇒ u = U
V0
= 1
2Eε2
iii) [G]= L3
M−1
T−2
, from e.g. F = GMm
r2
[c]= LT−1
[f]= T−
1
[E]= ML−1
T−2
, from e.g. σ=εE
let E = Gα
cβ
fγ
. Solving for each dimension
yields
M :1=−α ⇒α=−1
L :−1=3α+β ⇒β=2
T :−2=−2α−β−γ ⇒γ=2
⇒ E = c2
G f2
iv) The gravitational wave spreads as a spherical
wave centered at the source. It’s wavefront occu-
pies a thin spherical shell with the surface area
S =4πz2
anditsassociatedinﬁnitesimalvolume
is dV = Sdz, where dz = cdt for a wave trav-
eling with the speed of light c. The power P
and energy density u at a distance z is coupled
through dE = P dt= udV ⇔ z =
√
P
4πuc.
Using the models fromP = 1
80
c5
G
u = U
V0
= 1
2Eε2
E = c2
G f2
we ﬁnally get
z = 1 p
160π
c
εf
5. VIRTUAL MASS The main idea is that
the added mass will change the period of oscil-
lations of the ball on the spring, which is given
by T =2π
√
m
k and changes as the mass changes.
Let’smeasuretheperiodT1 ofoscillationsinthe
air by measuring the time for 20 oscillations and
dividing it by 20 to get the period. Similarly we
will measure the period T2 of the oscillations in
water. Then we have
T2
2
T2
1
=
m+mv
m
=⇒ mv = m
(
T2
2
T2
1
−1
)
,
where m is the mass of the ball and mv is the ad-
ded mass (notice that the buoyancy doesn’t ap-
pear in the equations, because it is a constant
force and only changes the equilibrium point
of the ball on the spring, but not the period).
The periods turn out to be T1 = 1.066s and
T2 =1.136s.
To determine the mass of the ball we will
measure the elongation x of the spring in two
cases: with the ball hanging in the air and with
the ball in the water. The ball causes the spring
to elongate tens of centimeters, so these dis-
tances can be measured quite accurately. Con-
sidering the buoyancy in the water we get
kx1 = mg,
kx2 =(m−ρvV)g,
where V = 4
3π
(
d
2
)2
(instead of the ﬁrst equation
kx1 = mg we could have used m/k = (T1/2π)2
,
depending on how accurately the period was
measuredtheﬁnalresultmightbemoreaccurate
using this). Using this we ﬁnd
m=
ρvVx1
x1 −x2
≈720g.
Finally the added mass is
mv ≈98g.
6. LOOP
i) The loop starts to move because of induc-
tion. A changing magnetic ﬁeld induces an
EMF to the loop, which causes current to ﬂow.
The external magnetic ﬁeld exerts a force to the
current-carrying wire.
The EMF induced in the loop is
U =−
dϕ
dt
=−Al
dB
dt
,
where Al = ld.
The current is I =U/R where
R =σ
s
Aw
with s =2h+2l, Aw the cross-sectional area of
the wire and σ the resistivity of copper.
Thus
I =U/R =
Al
dB
dt Aw
σs
=0.0705A
The net force exerted by the magnetic ﬁeld
is F = IlB and the acceleration
a= F/m=
Al
dB
dt AwlB
σs·ρAws
=
Al
dB
dt lB
σρs2
a=0.627m/s2
≈0.63m/s2
(Forces exerted by the external ﬁeld on the other sides
are either zero or cancel out. The magnetic ﬁeld caused
by the current itself is negligible compared to the external
ﬁeld. The inductance of the coil is very small compared to
the EMF and the current is approximately constant, as
the speed of the coil is very small and the external mag-
netic ﬁeld changes at a constant rate. The magnetic forces
between diﬀerent parts are internal and do not aﬀect the
situation. The magnetic ﬁeld of the current carrying wire
itself is, of course, considerably close to the wire itself but
this is always the case when F = IlB is used. This is the
root cause of the force and thus OK.)
ii) a) The cross-sectional area cancels out in the
previous, which means that the answer remains
the same.
(Twice thicker wire has one quarter the resistance
whichmeansfourtimeslargercurrentandforce. Themass
also quadruples, however, which means that acceleration
does not change.)
b) The loop is replaced by a coil with three
turns, which gives a three times larger EMF.
The wire is also three times longer and thus has
three times the resistance. Current stays the
same.
This current passes three times through the
l-side, which give three times the force. The
wire, however, has three times the mass and ac-
celeration stays the same.
Mathematically
a= F/m=
3Al
dB
dt Aw3lB
σ3s·ρAw3s
=
Al
dB
dt lB
σρs2
,
a=0.627m/s2
≈0.63m/s2
,
where symbols denote the original values.
(The same considerations apply to the coil. Especially
all the eﬀects between the windings are internal. The
current is still constant. The simple force formula is ap-
pliedine.g. calculationofthetorqueexertedonacurrent-
carrying coil by an external ﬁeld, where we often have
hundreds of windings and a considerable current.)
c) The cross-section cancels out and we can
replace 3 by 2 in the previous calculation. The
acceleration is still the same.
(Twice larger EMF, four times larger resistance
andtwotimesthroughtheﬁeldmeansthesameforce.
Mass is the same.)
d) The largest acceleration is given by the
material for which the product of resistivity and
density is the smallest. Aluminum is good, but
lithium seems to be the best.
e) We have doubled the dimensions, which
means
a= F/m=
4Al
dB
dt Aw2lB
σ2s·ρAw2s
=2
Al
dB
dt lB
σρs2
,
a=1.253m/s2
≈1.25m/s2
,
where symbols denote the original values.
7. ZENER
i) The diode limits the maximum amount
of voltage that can be applied to the inductor.
Whenever the current from the current source
is higher than the current through the inductor,
the voltage V1 is applied to the inductor, and
when the current current source is lower than
the current through the inductor a voltage −V2
is applied to the inductor. If the largest voltage
V1 would be applied to the inductor for one
period T = 2π
ω
, then the change in the current
through the inductor is
δI =
V1
L
T =
2πV1
Lω
.
Because we had the relation LωI0 ≫V1, we get
that δI ≪ I0. The current through the inductor
changes negligibly little compared to I0 dur-
ing one period and can be considered constant.
The equilibrium current can be found by ﬁnding
when the average voltage is zero. During one
period let T1 be the time when 〈I〉 > I0 cosωt,
and let T2 be the time when 〈I〉< I0 cosωt. We
get
T1 =
2
ω
arccos
(
〈I〉
I0
)
.
The average voltage is zero when V1T1 = V2T2
and by using T1 +T2 = T we have
V1T1 =V2(T −T1) =⇒ T1 =
V2
V1 +V2
T =⇒
2
ω
arccos
(
〈I〉
I0
)
=
V2
(V1 +V2)
2π
ω
=⇒
〈I〉= I0 cos
(
πV2
V1 +V2
)
.ii) The peak-to-peak amplitude of the current
ﬂuctuations can be calculated from dI
dt = U
L
∆I =
V2T2
L
=
V1T1
L
=
2πV1V2
ωL(V1 +V2)
.
8. BEAMS
i) The beam in the middle expands α∆T =
0.10% due to the temperature increase. The
beams are all between rigid support plates, so
they must all have the same ﬁnal length. Be-
causethemiddlebeamhasexpanded, inthelim-
iting case when the maximal load is applied the
middle beam has a strain of β. The two other
beamshaveastrainofϵ=β−α∆T, becausethey
haven’t expanded due to temperature. The force
appliedbyeachbeamisproportionaltoitsstrain,
so we can ﬁnd the ratio of the maximal allowed
weights by calculating the ratio of the sum of
strains in the two cases. In the even temperat-
ures case each beam has a strain of β under the
maximal load. So the fraction of the new max-
imum weight compared to the original case is
2ϵ+β
3β
=
2×0.30+0.40
3×0.40
≈0.83.
ii) Denote by ϵ1 the strain of the middle beam
and by ϵ2 the strain of the outer beams. Like
in the previous part of the problem, the ﬁnal
lengths of the beams have to be the same. Con-
sidering the expansion of the middle beam, we
must have
ϵ1 −α∆T =ϵ2.
Denote by E0 the Young’s modulus at temperat-
ure T =0◦
C. At this temperature the maximum
allowed force is 3SE0β (S is the area of each of
the beams), because each beam has a strain of β.
So 20% of the maximal load exerts a force of
F1 =0.2×3SE0β=0.6SE0β.
In general the force exerted by the beams at any
temperature is given by
F = SE(T)ϵ1 +2SE0ϵ2.
The maximal force can be found by setting ϵ1 =
β and by substituting ϵ2 from above.
Fmax = SE(T)β+2SE0(β−α∆T).
By solving Fmax = F1 we can ﬁnd the temperat-
ure we are looking for. We get
SE(T)β+2SE0(β−α∆T)=0.6SE0β →
E(T)=
2α
β
E0∆T −1.4E0.
This is a straight line representing what the
Young’s modulus should be such that with a
∆T temperature increase of the middle beam
the system can maximally support 20% of the
original maximal weight. By plotting this line
on the Young’s modulus graph and ﬁnding the
intersection point of the two lines we get that
∆T =420◦
C and T =420◦
C.
0 100 200 300 400 500 600 700 800
0
40
80
120
160
200
T/◦
C
E/GPa
9. SPACECRAFT PRESSURE
i) Consider an air slice between r and r + dr
with area A and mass m. In a rotating frame of
reference, force balance gives
A(p(r+dr)− p(r))= mω2
r.
The mass is related to the density with m =
Aρ(r)dr. Using the ideal gas law,
pV = nRT =⇒
ρ(r)=
m
V
=
m
nRT
p(r)=
µ
RT
p(r),
so that when we combine the two equations, we
get the following equation for pressure:
p(r+dr)− p(r)
dr
= p′
(r)=
µω2
RT
rp(r).
This can be solved using separation of variables,
giving
∫
dρ
ρ
=
∫
µω2
RT
rdr,
lnρ−lnρ0 =
µω2
2RT
r2
.
From this we ﬁnd
p(r)= p0 exp
(
µω2
2RT
r2
)
.
ii) This time the force balance is
A(p(h+dh)− p(h))=−mg
The corresponding pressure equation is
p′
(h)=−
µg
RT
p(h)
with the solution
p(h)= p0 exp
(
−
µg
RT
h
)
.
10. BLACK BOX
i) By measuring the current and the voltage
between the black and white leads, we can de-
termine that there can only be the battery and
the resistor(s) between them. Measuring the
current from blue to black and blue to white
shows that there is a capacitor connected in
both case. Since we get a higher current (then
betweenblackandwhite)inoneorbothofthese
measurements, we can say that the capacitor
can only be connected to the other elements
in a star connection. That leaves two options.
It is possible to diﬀerentiate between the two
(for example by looking at the leakage of the ca-
pacitor), but not if we are using an ideal capa-
citorasthemodel. Bothwereconsideredcorrect
when grading.
ii) Let’s look at option A (for option B the R1
and R2 values are exchanged). We can get the
values for the elements in many ways. Measur-
ing the voltage from the black and white leads
gets us E ≈ 1.57V. Measuring the initial cur-
rent from the blue and white leads (after hold-
ing blue and black closed for a while) gets us
R2 = E/I2 ≈ 51k. Measuring the initial cur-
rent from the blue and black leads (after hold-
ing blue and black closed for a while) gets us
R1 =E/I1 ≈200k.
Capacitance can be measured for example
from the time the current between blue and
white halves: C = t2/(R2 ln2)≈330ţF; looking
at the current or voltage plot in semilogarithmic
axesorlookingattheareaunderthecurrentplot
are also good options.
