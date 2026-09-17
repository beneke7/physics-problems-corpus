---
id: solution-document-nbpho-2014-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2014_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2014-dc-dc-converter, nbpho-2014-magnets, nbpho-2014-mirror-interference, nbpho-2014-plancks-constant, nbpho-2014-running-on-ice, nbpho-2014-spin-system, nbpho-2014-superballs, nbpho-2014-thermal-acceleration, nbpho-2014-waste-project, nbpho-2014-youngs-modulus-of-rubber]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2014_S.pdf."
---

1. DC-DC converter
1) (1 pt) From the Kircho's voltage law for
the loop consisting of L and E, E = LdI
dt
, hence
I = Et/L. From I0 = EτL/L we obtain
τL = LI0/E.
2) (1 pts) Once the current I0 is reached, the key
is opened; the current trough L cannot change
instantaneously and therefore is forced to ow
through the resistor R. Since the characteristic
time of this current loop (consisting of L and R
is very short (L/R  τK), the current decays
very fast and becomes essentially equal to zero
while the key is still open. Now there is no cur-
rent through the inductor, so that the key will
close again and the process will start repeating
from the beginning. As a result we'll have a
periodic graph as shown in gure.
I
I0
t
3) (1 pt) The voltage through the resistor is
maximal when the current is maximal, which
happens immediately after the switch is opened;
the maximal current is I0 so that Vmax = RI0.
4) (2 pts) Due to Vmax  V0, we can neglect
the eect of the diode; so we have the Kircho's
voltage law LdI
dt
= RI = Rdq
dt
(here we ex-
pressed the current via the charge q which ows
through the resistor). Integration over a single
cycle (when the inductor current drops from I0
down to 0) yields LI0 = R∆q, hence the charge
own through the resistor (and through the di-
ode) ∆q = I0L/R. During that cycle, the diode
had a constant voltage V0, so the electric eld
performed work A = V0∆q which was released
as heat in the diode. So, the average power dis-
sipation
P =
A
τL
=
V0I0L
RτL
=
V0E
R
.
5) (2 pts) Now, since the characteristic time of
the RC-loop is very large, the capacitor main-
tains its charge (and voltage) during that period
of time when the diode is closed. Once the key
K1 opens, the diode will open, and the capacitor
is connected to the inductor so that a LC-loop is
formed. That loop admits oscillations of period
TLC = 2π
√
LC and as the current to the resistor
can be neglected (since RC  TLC), we can neg-
lect the presence of the resistor. During the time
interval when the diode is open, we can also neg-
lect the presence of the diode since V0  Vmax .
Hence, the current i in the LC-loop changes in
time sinusoidally, starting from i = I0 and end-
ing when i = 0 (then the diode will close discon-
necting the LC-loop). During that process, the
magnetic energy of the inductor
1
2
LI2
0 is conver-
ted into the electric eld energy of the capacitor,
which is later released as heat on the resistor.
When the stationary regime is achieved, the en-
ergy lost by the capacitor during one period (of
duration τL) as the heat dissipation on the res-
istor Q = V 2
avτL/R must be equal to the energy
received from the inductor; so,
V 2
avτL
R
=
1
2
LI2
0 ⇒ Vav = I0
r
LR
2τL
=
r
EI0R
2
.
6) (1 pt) The charge which ows away from
the capacitor when the diode is closed can be
found as qC = τLVav/R (owing to RC  τLC,
the relative change of the capacitor's voltage
is small). Hence, the voltage drop is found as
∆V = qC/C = τLVav/(RC). The amplitude is
half of the dierence between the minimal and
maximal values, so that the amplitude
U0 =
∆V
2
=
τLVav
2RC
=
I0L
2C
r
I0
2RE
.
2. Waste project
1) The trajectory is a very elliptical ellipse, peri-
helion of which is within the Sun. In order to
minimize the fuel consumption, the speed near
the Earth's orbit needs to be as large as pos-
sible (we need to decelerate the ship to bring
it to the elliptical orbit), hence the full orbital
energy of the ship E = −GMm
2a
needs to be as
small as possible. Here, M is the mass of the
Sun, m  the mass of the space ship, and a 
the longer semiaxis. So, a needs to be as large as
possible, which means that the perihelion needs
to lie at the surface of the Sun, in which case
2a = RE +rS, where RE is the orbital radius of
the Earth and rS  the radius of the Sun. The
resulting trajectory is depicted below.
E a rt h ’s o rb it
Sun
2) If we neglect the radius of the Sun, the space
ship needs to fall directly to the Sun, which
means that its initial orbital speed must be zero,
hence its trajectory is an ellips with longer semi-
axis equal to RE/2. According to the Kepler's
III law, the period on such an orbit is 23/2
times shorter than the Earth's orbital period T.
The travel time t is half of the period, so that
t = 2−5/2
T ≈ 64.6days.
3) In the Sun's frame of reference, the speed
needs to be zero; hence, in the Earth's frame
of reference, it is opposite to the orbital ve-
locity of the Earth and by modulus equal to
v0 = 29.8km/s.
4) The speed vS in the Sun's frame of reference
is found from the expression for the total energy,
−
GMm
2a
= −
GMm
RE + rS
= −
GMm
Re
+
mv2
S
2
,
hence
vS =
r
GM
RE
2rS
RE + rS
.
This expressing can be rewritten by using equal-
ity v2
0 = GM
RE
as
vS = v0
r
2rS
RE + rS
= v0
r
2sin

α
2

≈ v0
√
α.
Numerically this yields vS ≈ 2.8km/s; the speed
in the Earth's frame of reference vE = v0 −vS ≈
27.0km/s.
5) Part of the initial kinetic energy in the
Earth's frame of reference goes to the change
of the potential energy due to the gravitational
pull of the Earth, ∆Π = GMEm
R
= gmR hence
gR +
v2
E
2
= u2
2
. Here, ME is the Earth's mass
and u is the launching speed. So,
u =
p
v2
E + 2gR ≈ 29.2km/s.
3. Magnets
There three forces acting on the hanging mag-
net: the downwards directed gravity force m~ g,
the tension force ~ T, which is directed along the
thread, and the horizontal magnetic force ~ Fm.
Since the thread's angle is very small, the mod-
ulus of ~ T is almost equal to mg, so that its
horizontal projection is expressed as −(x/l)mg,
where l is the length of the thread and x = 1cm
(the displacement from the initial position). The
net horizontal force F = Fm − (x/l)mg. At the
equilibrium point F = 0. The equilibrium point
is stable if a small (virtual) displacement ∆x
gives rise to a returning force
∆F = ∆Fm −
∆x
l
mg
which needs to push towards the equilibrium
point. Let Fm = kd−n
, where k is an unknown
proportionality coecient. Then
∆Fm = F0
m(d)∆d =
kn
dn+1
∆x,
because ∆d = −∆x. Therefore
∆F =

kn
dn+1
−
mg
l

∆x.
At the limit case of the loss of stability (which
is described by this problem) ∆F = 0. Thus we
have two equations with two unknowns (n and
k):
k
dn
−
xmg
l
= 0,
kn
dn+1
−
mg
l
= 0;
this can be rewritten as
k
dn
=
xmg
l
,
kn
dn+1
=
mg
l
.
If we divide the corresponding sides of the two
equations we obtain d/n = x, hence
n = d/x = 4.
4. Superballs
1) During the collision with the oor, the
bottom-most ball will retain its speed and
change the direction of the velocity; its upwards
speed v0 = v. Let the k-th ball move up with a
velocity vk; we'll consider the collision between
this and (k +1)-st ball, which moves down with
the velocity v. In the frame of reference of the
centre of mass, u = vk−fv
1+f
; hence, after the
collision the upwards velocity equals to vk+1 =
v + 2vk−fv
1+f
= 2
1+f
vk + 1−f
1+f
v. With v0 = v, we
can conclude that v1 = 3−f
1+f
v = 4
1+f
− 1

v. 2)
One can see that if we apply the recurrent for-
mula repetitively, the result at the n-th step will
be vn = 2 2
1+f
n
− 1

v.
3) Now we need to relate the speeds to the jump-
ing heights via v2
= 2gh0 and v2
n = 2ghn; hence,
hn/h0 =
p
vn/v0 =
s
2

2
1 + f
n
− 1.
For f = 0.5 and n = 10 we obtain that the nal
height will be ca 1200 larger than the initial one.
5. Planck's constant
1) When we connect each of the diodes to the
battery, we can observe the light of the emit-
ted light; the mapping is as follows: 940nm 
invisible (infrared), 620nm  red, 590nm  or-
ange, 525nm  green; 470nm  blue; 450nm
 violet.
2) We can measure the current I through the
diode (which is also the current through the res-
istor R), so that the voltage on the diode wouldbe Vd = E − IR, but we don't know the battery
voltage. However, we do know that the diode's
voltage equals approximately to the photon's
energy Ep expressed in electron volts, Ep =
hc/(λe). Since we expect that IR = E − Vd,
if we plot IR versus 1/λ, we should obtain a
straight line
IR = E −
1
λ
hc
e
.
We can measure the slope of the straight line
A = hc/e, which allows us to calculate h =
eA/c.
3) The major source of the uncertainty is not
the instrument uncertainties, but the departure
of the real diode data from the simplistic model.
Therefore we can try to t the data points with
dierent straight lines making the slope A as
steep as possible (while still keeping a reason-
able t with the data points, and also as at
as possible; the uncertainty of A is found as
∆A = 1
2
(Amax − Amin ), and ∆h = h∆A/A.
6. Running on ice
1) During the process, the velocity vector needs
to change its direction by 90 degrees. Let us
consider the this graphically using the vx − vy-
plane: we need to move from the point A with
coordinates (0,v) to a point B with coordinates
(v,0) while having a constant speed. Indeed,
the velocity of a point in the vx − vy-plane is
the acceleration of the body, which has here a
constant modulus µg. Obviously, the fastest
path is a straight line of length v
√
2, so that
t = v
√
2/µg ≈ 7.2s.
2) Since the direction of the acceleration is con-
stant, the trajectory is the same as for a body
in the Earth's eld of gravity  a parabola.
7. Spin system
1) According to Boltzmann's distribution, p↑ =
A · e−m
, where the constant A can be found
from the condition that the probability of hav-
ing either up or down orientation is one: A ·
e−/2
+ A · e/2
= 1, hence
A =
1
e−/2kT + e/2kT
=
1
2cosh(/2kT)
.
Thus,
p↑ =
e−/2kT
e−/2kT + e/2kT
.
2) The average energy is the weighted average
of up- and down-state energies for a single spin,
multiplied by the number of spins:
E =
N
2
e−/2kT
− e/2kT
e−/2kT + e/2kT
= −
N
2
tanh(/2kT).
3) For small values of the argument of the hy-
perbolic tangent, the last expression can be ap-
proximated as E ≈ −N2
/4kT.
4) According to the denition of the heat capa-
city, C = dE
dT
= N2
/4kT2
.
8. Mirror interference
1) For a position y, the arriving rays form an
angle α = y/L (we use the small-angle approx-
imation; the angle is in radians). Then, the op-
tical path dierence between the reected and
direct rays is ∆ = 2lcosα ≈ 2Nλ − Nλα2
.
Since there is an additional phase shift for the
reected rays at the reection from optically
denser dielectric material, the total phase shift
is ϕ = 2π∆/λ = 4πN − π(2Nα2
− 1). At the
maxima, this equals to 2π(2N − n), where n
is an integer. Therefore, the condition for the
maxima is written as
α =
r
n + 0.5
N
⇒ yn = L
r
n + 0.5
N
,
where n = 0,1,...  N.
2) Since the rays of a given order number n
form a xed angle with the x-axis, the max-
ima form on the screen concentric circles; the
pitch between the neighbouring circles becomes
smaller as the order number n grows (using the
length unit dened by the smallest radius, the
radii form a sequence
√
1 = 1,
√
3 ≈ 1.73, √
5 ≈ 2.23, etc).
3) Since the reected rays can reach the screen
only within a hemisphere, the phase shift varies
between ϕmax = 4πN + π and ϕmin = π. The
number of maxima
m = (ϕmax − ϕmin )/2π = 2N.
9. Thermal acceleration
1) For the heat energy of one mole of material
dq = CvdT. There is no heat energy by T = 0,
hence q =
RT
0
CvdT. Using the graph we nd
this as the area under the curve, q ≈ R·560J/K.
The number of moles ν = a3
ρ/MA ≈ 0.117mol,
hence the total heat energy Q = qν ≈ 546J.
2) Each photon of frequency ν radiated by the
cube carries away heat energy equal to E = hν,
and carries momentum p = h/λ = hν/c = E/c.
If the photon departs at the angle α with re-
spect to the surface normal then the compon-
ent parallel to the surface normal pk = E
c
cosα.
The total momentum given by the photons to
the cube equals by modulus to the total mo-
mentum carried by the photons; when averaged
over all the photons, the perpendicular to the
surface normal components cancel out (photons
go to all the directions). The average value of
the parallel component can be estimated just as
pk ∼ E
c
.
If we want to obtain an exact result, we need
to integrate over all the directions while keeping
in mind that the light intensity is proportional to
cosα. So, the momentum averaged over all the
directions p̄k = E
c
1
2π
R
cos2
αdΩ, where the solid
angle dierential dΩ = 2π sinαdα. Therefore, p̄k =
E
c
Rπ/2
0
sinαcos2
αdα = E
c
Rπ/2
0
cos2
αdcosα = E
3c .
Since the momentum-energy ratio is the
same for all the photons, equal to 1/c, the overall
momentum equals to Q/c. Thus, a3
ρv ∼ Q/c,
hence
v ∼
Q
ρa3c
≈ 0.67mm/s.
If we apply the exact factor
1
3
(obtained above
via integration), we end up with v ≈ 0.22mm/s.
3) The heat balance at very low temperatures
can be written as AT3
dT = −σST4
dt, where
A is a constant, σ is the Stefan-Boltzmann con-
stant, and S  the radiating area. This simpli-
es to
dT
T
= −Bt ⇒ T = A · e−Bt
.
4) In the case of a hydrogen atmosphere, the
momentum is given to the cube due to the fact
that the molecules colliding with the coated
faces bounce back with the same speed as the
they came, but uncoated face gives away heat
energy, and the molecules leave at higher tem-
perature. If we assume that the departing
molecules have the same temperature as the
cube (which serves us only as an estimate 
when particles of dierent masses collide, only
a part of the energy is transferred), then the
momentum-to-heat ratio is estimated as 1/vT ,
where vT =
p
RT/MH is the thermal speed of
the molecules after the collision with the cube
for the motion along the surface normal. So we
estimate a3
ρv ∼ Q/vT , hence
v ∼
Q
ρa3
r
MH
RT
≈ 180m/s.
It should be noted that in fact, one should have
been careful with such an estimate, because the
thermal speed is at the denominator. This will
increase the relative contribution of the heat ra-
diated at low temperatures. However, the re-
maining heat at low temperatures is propor-
tional to T4
, and therefore the contribution of
those molecules which collide with the cube at
low temperatures to the overall momentum re-
mains still small.
10. Young's modulus of rubber
1) The setup is as follows. The rubber thread
is xed to the stand, and the plastic bag is xed
to the free end of the thread. The hex nuts are
added, one-by-one, into the bag, starting with
zero and ending with 15. The laser light is dir-
ected to the thread and the diraction pattern
is observed on the screen (which is a vertically
xed sheet of graphic paper on a support). The
diraction pattern from a wire is the same as
from a single slit (the superposition of the Huy-
gens sources from those two cases gives a full set
of sources on a at wave front, hence the electric
elds from those two cases must provide equal
and opposite wave amplitudes and equal intens-
ities). So, if we measure on the screen the dis-
tance a between such maxima which are separ-
ated by n (e.g. n = 10) periods of the diraction
pattern then using small-angle-approximation,
nλ/d = a/L, where L is the distance from the
thread to the screen and d  the thread dia-
meter. So,
d = nLλ/a.
The strain is calculated by making markings on
the thread and measuring the distance b between
these in a stretched state,
ε =
b − b0
b0
,
where b0 is the length in a non-strained state.
The stress is calculated as
σ =
4Nmg
πd2
,
where N is the number of hex nuts in the bag
and m  the mass of a single nut. The data
are plotted in a graph; linear relationship cor-
responds to a straight line. The uncertainties
are calculated using the rule of relative uncer-
tainties, either using Pythagorean or simple ad-
dition, e.g.
∆ε = ε∆b

2
b − b0
+
1
b0

,
where ∆b ≈ 0.5mm is the length measurement
uncertainty. Similarly,
∆σ = 2σ
∆d
d
.
These uncertainties are marked in the graph as
error bars.
2) Using the plot, we need to determine such a
value of ε = ε∗ that for ε1 > ε∗, it is impossible
to draw a straight line intersecting the error bars
of all the data points with ε1 < ε∗.
