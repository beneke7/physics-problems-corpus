---
id: solution-document-nbpho-2019-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2019-brachistochrone, nbpho-2019-dominoes, nbpho-2019-four-resistors, nbpho-2019-motion-in-magnetic-field, nbpho-2019-retroreflective-film, nbpho-2019-roller, nbpho-2019-satellite, nbpho-2019-self-gravitating-gas]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2019_S.pdf."
---

NORDIC-BALTICPHO2019- SOLUTIONS
1. SATELLITE (8 points) — Taavet Kalda.
i) (1 point)From the energy conservation law,
mv2
m
2
−
GM⊕m
r⊕
= 0,
hence
vm =
√
2GM⊕
r⊕
.
ii) (2 points)Let the speed of the satellite just
after leaving Earthʼs gravitational field be v1.
From energy conservation,
mv2
0
2
−
GM⊕m
r⊕
=
mv2
1
2
,
where M⊕ is Earthʼs mass. Furthermore, we
have g = GM⊕
r2
⊕
. Thus,
v1 =
√
v2
0 −
2GM⊕
r⊕
=
√
v2
0 − 2gr⊕.
iii) (2.5 points) The average solar irradiance
can be expressed as
Iavg =
1
T
∫ T
0
I(t)dt,
where I(t) the solar irradiance at time t. We
can express the solar irradiance as I(t) =
L⊙
4πr(t)2 . Furthermore, it might be more con-
venient to integrate over the angle instead of
time so we can use dt = dα
ω(α), where ω is the
angular velocity of the satellite. This yields
Iavg =
1
T
∫ 2π
0
L⊙
4πr2
dα
ω
=
L⊙
4πT
∫ 2π
0
dα
ωr2
.
Notethatthedenominatorintheintegrandis
verysimilartotheangularmomentumofthe
satellite. Indeed, the angular momentum is
J = mvr = mωr2
= Const. Thus,
Iavg =
L⊙
4πT
∫ 2π
0
dαm
J
=
L⊙m
4πTJ
∫ 2π
0
dα =
L⊙m
2TJ
.
iv) (2.5 points) Since L⊙ and m are constant,
we need to minimise the quantity TJ. Note
that the minimal angular momentum cor-
responds to the case when the satellite is
launched directly opposite to the motion of
Earth. It turns out that this also corresponds
to the minimal orbital period. Let ⃗ v2 be the
satelliteʼs velocity in Sunʼs frame. Then ⃗ v2 =
⃗ v1 − ⃗ v⊕, where v⊕ =
√
GM⊙
R⊕
is Earthʼs ve-
locity. For convenience, letʼs write x = v2
v⊕
.
Consider the total energy of an elliptical or-
bit Etot = −GM⊙m
2a . On the other hand, the
total energy is Etot =
mv2
2
2 − GM⊙m
R⊕
. combin-
ingthetwoequationsandrearranging, R⊕
a =
2 −
v2
2R⊕
GM⊕
= 2 − x2
. From Keplerʼs III Law,
T2
a3 = 4π2
GM⊙
. Thus, T =
2πR3
⊕
√
GM⊙
(
2 − x2
)−3/2
.
As we can see, in order to minimise T, v2
needs to be minimal as well.
In conclusion, Iavg is maximal when the
satellite is launched directly against the mo-
tion of Earth. The corresponding value for
Iavg is
Iavg =
L⊙
4πR2
⊕
√
GM⊙
R⊕
1
v2
(
2 − x2
)3/2
=
L⊙
4πR2
⊕
(2 − x2
)3/2
x
,
where x =
√
R⊕
GM⊙
√
v2
0 − 2gr⊕ − 1.
2. ROLLER (8 points) — Lasse Frantti (iv,v:
Jaan Kalda).(Solution of parts iv and v: Taavet
Kalda).
i) (1 point)If there is no friction between the
cyinder and the board, the cylinder will not
rotate, and we have a simple spring-block os-
cillator, T0 = 2π
√
M/k.
ii) (1 point)
Because the cylinder is not slipping, itʼs
rotating about the point of contact with the
ground. The moment of inertia with respect
to the contact point is I = Mr2
+ 1
2Mr2
=
3
2Mr2
. The angular acceleration α and accel-
erationaarerelatedbya = αr. Theequation
of motion therefore reads
Iα = Fr = −kxr.
Simplifying,
3
2
Ma = −kx.
This corresponds to a harmonic oscillator
with a period of
T =
2π
√
2
3
k
M
= 2π
√
3
2
M
k
.
iii) (2 points)The motion of the cylinder is si-
nusoidal:
x = Asin
(√
2
3
k
M
t
)
.
From the horisontal force balance,
−kx + Fµ = Ma,
so the frictional force is linearly dependent
on the acceleration and given by
Fµ = −
1
2
Ma.
The acceleration is
a = ẍ = −
2
3
k
M
Asin(ωt).
Maximal frictional force is given by
Fmax
µ = µMg =
1
2
M ·
2
3
k
M
A → A <
3µMg
k
.
Or in other words,
A⋆ =
3µMg
k
.
iv) (2 points) The equation of motion still
reads
−kx + Fµ = Mẍ,
but now, Fµ is equal to Mgµ for most of
the motion so it can be treated as a constant
(the length of time where itʼs not equal to
that gets proportionally smaller as A0 is in-
creased). Rewriting,
−k
(
x −
Fµ
k
)
= Mẍ.
We see that the cylinder undergoes sinus-
oidalpointaroundx =
Fµ
k butbecauseA0 ≫
A⋆, this is negligible.
The rotational equation of motion yields
1
2Mr2
α = rFµ = rMgµ so α = 2
Mr Fµ. Since
the direction of the frictional force is con-
stant during 0 ≤ t ≤ T/2, we have ω =
2
Mr Fµt and this is maximal at t = T/2 so
ωmax =
gµT
r
.
v) (2 points)From the last part, we saw that ϵ
is constant but opposite in sign for 0 < t <
T/2 and T/2 < t < T with the magnitude
equal to ϵr = 2gµ. The linear acceleration,
on the other hand, follows harmonical mo-
tion. From, x = A0 cos
(√
k
M t
)
, a = ẍ =
− k
M Acos(2πt/T). The approximate plots are
shown in the figures below.
3. MOTION IN B (8 points) — Andréas Sund-
ström, Joonas Kalda (ii,iii).i) (1 point) In the homogeneous electric
field of strength E along the x-axis, we can
write down an electrostatic potential ϕ(x) =
−xE. For the particle not to hit the wall, the
particleʼs kinetic enregy mv2
/2 must be less
than qϕ(l) = −qlE, thus |E| > mv2
2l|q|; the dir-
ection of E is such that qE < 0.
ii)(2points)Inthemagneticfield,theparticle
moves along a circle with radius R such that
the Lorentz force is equal to the centrifugal
force, qvB = mv2
/R. Since the particle
barely reaches the screen, the circular orbit
musttouchthescreen. SoR = l andB = mv
lq .
iii) (2 points)
The first particle travels for a quarter
period before stopping i.e. t = T
4 = πl
2v . For
the second particle the total Lorentz force
must be zero so u = E
B . Equating times gives
l
u = πl
2v i.e. E = 2Bv
π .
iv) (3 points) In order to derive the adiabatic
invariant, we note that the magnetic flux of
the helixal trajectory follows Φ ∝ Area ×
Bz ∝ R2
Bz ∝ Bz/v2
⊥, where v⊥ is the com-
ponent of the velocity thatʼsperpendicular to
the magnetic field. Therefore the adiabatic
invariant can be written as v2
⊥/Bz.
During the motion of the electron, its kin-
etic energy is conserved because the mag-
netic field doesnʼt do any work. In the crit-
ical case, where the electron is almost reflec-
ted, the perpendicular compoment of the ve-
locity of the electron at the surface of the
earth will be equal to u0. The adiabatic in-
variant then yields
v2
⊥0
B(R0)
=
u2
0
B(RE)
.
Now v⊥0 = u0 sinα so the critical angle is
given by
α0 = arcsin
(√
B(R0)
B(RE)
)
= arcsin
(
1/5
√
5
)
= 5.1°.
The angle α has to be smaller than α0 for
the electron to reach the surface of the
Earth.
4. RETROREFLECTIVE FILM (12 points) —
Eero Uustalu and Jaan Kalda.(Solution: Taavet
Kalda)
i) (2 points) By shining the laser straight on
to the retroreflective film, we see six dots ap-
pear on the screen. These dots represent
the laser beam refracting through the six dif-
ferent prisms that appear on the film. In
the symmetrical case, where αi = const.,
we expect the dots to lie on the vertices
of a hexagon. What we actually see is a
hexagon, where two dots are squished in-
wards while the other four are equidistant
from the centre. This implies that four
angles and two angles are pairwise the same.
We could say that faces 1 and 4 correspond
to the dots that are squished inwards. In that
case, α1 = α4, α2 = α3 = α5 = α6 and
α1 < α2.
ii) (2 points) We can find the minimal de-
flection angles by holding the laser and the
screen in place while tilting the film. In that
case, the changing deflection angles are dir-
ectly represented by the movement of the
dots on the screen. Then the only thing left
is to find the orientation of the film such that
the deflection of the dots on the screen is
minimal. Measurements yield β1 ≈ 28° and
β2 ≈ 40°.
iii)(4points)Minimaldeflectionanglecorres-
ponds to the rays traversing the prisms sym-
metrically. This allows us to conveniently
find the minimal deflection angle in terms of
α and γ, where γ is the angle of the film with
respect to the laser beam. Further measure-
ments show γ1 = 11° and γ2 = 9°. From geo-
metry, we get β/2 = α/2 − γ so α = 2γ + β.
This gives α1 = 50°, α2 = 58°.
iv) (1point)For our values, cos2
α1 +cos2
α3 +
cos2
α5 = 0.97. Either by trying different val-
ues or binary searching, we see that we can
subtract ∆α = 0.5° to get almost exactly 1 as
the value for the sum of cosines squared.
v) (3 points) From Snellʼs law, sin(α − γ) =
nsin(α/2) so n = sin(β + γ)/sin(γ + β/2) ≈
1.5.
5. BRACHISTOCHRONE (10 points) — Rūdolf
Treilis.
i) (2 points) The ball that moves on the or-
ange curve is under an effective acceleration
aeff = H √
H2+L2
g , so
aeff t2
o
2 =
√
H2 + L2 and
to =
√
2(H2+L2)
gH . The ball that moves on
the blue curve initially falls for a time t1 = √
2H/g and then moves with a velocity v =
√
2gH for the remainder, hence t2 = L √
2gH
and the total time is tb = t1 + t2 = 2H+L √
2gH
. The equation to = tb can be solved to give
L
H = 4
3
ii) (2 points) To understand this point one
needs to apply Fermatʼs principle, which
states that light always takes the path of loc-
ally least time between two points. Since the
speed of the ball will vary based on height,
this is reinterpreted as a height-variable in-
dex of refraction. From energy conservation
it is know that mv(y)2
2 = mgy , hence v (y) =
√
2gy and n(y) = v(H)
v(y) =
√
H
y .
iii) (2 points) From Snellʼs law we know that
n(y)sinθ = const. = C , so we need to ex-
press dy
dx = cotθ in terms of sinθ (notice that
derivative is the cotangent is this case, be-
cause of the way how the angle is defined
in optics). Use the result that 1 + cot2
θ =
1
sin2 θ = n(y)2
C2 , hence dy
dx =
√
An(y)
2
− 1
with A = 1
C2
iv) (2 points) We know that dy
dx (y = 0) =
0 (from the grazing condition), so find
n(0) = n0 and dy
dx (y = 0) =
√
An2
0 − 1
, hence A = 1
n2
0
. This in turn gives us
dy
dx =
√
(1 + αy)
2
− 1 , so dy
dx (y = h) =
√
2αh + α2h2 , hence d = h
dy/dx(y=h) =
h √
2αh+α2h2
.
v) (2 points) In this case there is a trivial cyc-
loid linking the points A and B that also sat-
isfies the initial condition vA = 0 . Choose
a wheel with radius R = H
2 = L
π , so that
thewheelcompletesexactlyhalfarevolution
between points A and B . We want to find
the functional dependence of the angular ve-
locity on the roll angle ω (θ) such that the
point at the top is at the same position as
the point mass for all time. We can find the
components of the velocity vy = Rω (θ)sinθ
and vx = Rω (θ)[1 − cosθ] , hence v2
=
2R2
ω (θ)
2
[1 − cosθ] = 2gR[1 − cosθ],where
the last equality comes from energy conser-
vation of the ball. Hence we can conclude
that the angular velocity is constant ω2
=
π2
t2
min
= g
R and tmin = π
√
R
g = π
√
H
2g .
6. SELF-GRAVITATING GAS (10 points) — Eero
Vaher (v: Jaan Kalda).(Solution: Taavet Kalda)
i) (2 points)Consider the parcel having cross-
sectional area of S and thickness dr. Let
the local density of the gas at that parcel be
ρ. Due to spherical symmetry, the gravita-
tional field acting on the parcel will be g =
−GM(r)
r2 and thus, the gravitational force is
Fg = −GM(r)m
r2 = −GM(r)
r2 Sdrρ. This is es-
sentially due to Gaussʼ Law for gravitational
field. The gas will also experience the gas
pressure p from the bottom side acting out-
ward and gas pressure p + dp acting inward
from the top surface. This pressure will ex-
ert a total force of Fp = (p − p − dp)S. In
a hydrastatical equilibrium, Fp + Fg = 0,
thus Sdp = −GM(r)Sρ
r2 dr or in other words,
p′
= −GM(r)ρ
r2 .
ii) (2 points)All the subsequent integrals will
befromthecentreofthegascloudalltheway
to the edge where the pressure will be 0. The
thermal energy of the gas can be expressed
as U =
∫
n(r)4πr2
dr⟨E⟩, where ⟨E⟩ = 3
2kT
is the average energy of one gas molecule.
From the ideal gas law, p = nkT so U =
3
2
∫
pdV . We want the integral to be of the
form U = −α
∫
V dp. For that we can use in-
tegrationbyparts:
∫
pdV = pV |
edge
centre−
∫
V dp.
The limits for pV are both zero because in
both cases, either p = 0 or V = 0. Therefore
U = −
3
2
∫
V dp,
and α = 3
2.
iii) (3 points) Gravitational potential energyis of the form EG = −
∫ GM(r)
r dM =
−
∫ GM(r)
r 4πr2
drρ. To simplify this, we can
use the result from the first part GM =
−dp
dr
r2
ρ . Therefore,
EG =
∫
dp4πr3
= 3
∫
dpV.
From this we see that
EG
3
= −
2
3
U
or
U = −
1
2
EG.
Therefore β = 1
2. Alternatively, one can
write this immediately down from virial the-
orem.
iv) (1 point)With heat radiation, the total en-
ergy of the system is slowly being radiated
away. In this model, the total energy is negat-
ive and some observations about the system
canbemade. Ifweincreasethedimensionof
the gas cloud, then clearly the magnitude of
the total energy will go down. If we increase
the temperature, then the magnitude of the
total energy will go up. This is sufficient to
determinethatduetoheatradiation,thetem-
perature of the gas cloud will go up while the
radius of the gas cloud will get smaller.
v) (2 points)In the case of a plasma ball, both
the electrons and protons are free to move
around. Both electrons and protons can be
treated as exerting equal pressure. This ef-
fectively doubles the average energy of one
molecule from 3
2kT to 3kT while keeping
the gravitational energy expression the same.
Therefore U = −3
∫
V dp = −EG so the new
proportionality factor between the thermal
energy and gravitational energy is β = 1.
7. DOMINOES (6 points) — Kaarel Hänni. Let
the iʼth domino have initial angular velocity
ωi. Let us first find ω′
i, the angular velocity
of this domino just before colliding with the
next one. A collision occurs after the dom-
ino has fallen by an angle of α = arctan
(1
2
)
.
By conservation of energy, 1
2Iω′2
i = 1
2Iω2
i +
1
2mgℓ(1 − cos(α)). Hence,
ω′
i =
√
ω2
i +
mgℓ
I
(1 − cos(α)) = (1)
√
ω2
i +
3g
ℓ
(
1 −
2
√
5
)
.
Thecollisionoftwodominoesisinelastic,
so after the collision the two dominoes move
together (for a negligibly short time before
the first domino bumps into the corner of a
step). After the two dominoes collide, let the
angular velocity of the first one be ω′′
i . Since
the two dominoes move in unison,
cos(α)ℓω′′
i = cos(α)
ℓ
2
ωi+1 =⇒ ω′′
i =
1
2
ωi+1.
(2)
During the collision, the force between the
two dominoes is always horizontal (since
there is no friction between the two), let this
force be F(t), where t is the time. Let us con-
sider the angularmomentum of the iʼthdom-
ino w.r.t. its base.
I(ω′
i−ω′′
i ) = ℓcos(α)
∫ uniformiz. of velocities
beginning of collision
F(t)dt
(3)
For the second domino, we have an analog-
ous equation.
Iωi+1 = cos(α)
ℓ
2
∫ uniformiz. of velocities
beginning of collision
F(t)dt
(4)
Equations (3) and (4) together imply
ω′
i − ω′′
i = 2ωi+1. (5)
Wecannowplugequations(2)and(1)into(5)
to express ωi+1 in terms of ωi.
ωi+1 =
2
5
ω′
i =
2
5
√
ω2
i +
3g
ℓ
(
1 −
2
√
5
)
(6)
By stability, ωi = ωi+1 = ω. This lets us fi-
nally evaluate ω.
ω2
i =
4
25
ω2
i +
12g
25ℓ
(
1 −
2
√
5
)
=⇒
ω = ωi =
√
4g
7ℓ
(
1 −
2
√
5
)
8. FOUR RESISTORS (10 points) — Jaan Kalda
and Eero Uustalu.
i) (2 points) If we were to measure the res-
istance of each of the resistors separately,
the reading would be something like 4.67kΩ,
and the uncertainty would be four last di-
gits, 40Ω, plus 1% of the reading, 47Ω, all
together δr = 87Ω. This can be a system-
atic error which means that different meas-
urement errors can be strongly correlated so
thatforthesumrA+rB +rC +rD,weneedto
add the uncertainties (as opposed to adding
squared uncertainties in the case of uncor-
related errors). Therefore, the uncertainty of
r̄ = (rA +rB +rC +rD)/4 would be also 87Ω.
However, we can also measure a series
connection of any number of these resistors.
It can be easily seen that the smallest un-
certainty will be if we connect all the four
resistors in series, in which case we obtain
rA + rB + rC + rD = 18.68kΩ with the un-
certainty of 187 + 40 = 227Ω; hence, r̄ =
4.67kΩ ± 57Ω.
ii) (2 points) The problem with the given
resistors is that the ohmmeter cannot oper-
ate in the more precise 4kΩ range. How-
ever, if we connect two resistors in parallel,
weʼll measure directly their harmonic aver-
age, and the ohmmeter will operate in the
4kΩ range. Note that we shouldnʼt connect
more than two resistors as that would reduce
the reading without changing the range and
hence, increase the relative error. So, we can
obtain rArB/(rA + rB) = rCrD/(rC + rD) =
2.337kΩ±27.4Ω,hence⟨r⟩ = 4.674kΩ±55Ω
iii) (1 point) The precision of direct meas-
urments is not sufficient for distinguishing,
which resistors have bigger resistance, and
which have smaller. So, we need to build
a bridge connection by connecting. For in-
stance, we can connect the minus of the
voltage source to the resistor A, connect A to
B, and B — to the plus of the voltage source;
weʼll do the same with C and D, and meas-
ure voltage between the junction P between
AandB andjunctionQbetweenC andD. In
order to get the highest precision, weʼll use
the highest possible voltage of U = 30V. If
we connect Q to the minus of the voltmeter
and P to the plus of the voltmeter, we might
get the reading V1 = 7.5 ± 0.5mV. If we
switch the order of the resistors A and B, the
reading becomes negative: V ′
1 = −17.5 ±
0.5mV: the potential of the junction P be-
came smaller. In the first case, the junctionʼs
potential was UrA/(rA + rB), in the second
case — UrB/(rA +rB). So we conclude rA >
rB. Repeating this procedure with different
connections, weʼll find rA > rC > rD > rB.
iv) (5 points) With the data of the previous
task we have
rA − rB
rA + rB
=
V1 − V ′
1
U
.
Similarly we can have
rA − rC
rA + rC
=
V2 − V ′
2
U
with V2 = 7.5 ± 0.5mV and V ′
2 = −0.8 ±
0.4mV; also
rA − rD
rA + rD
=
V3 − V ′
3
U
with V3 = 17.5 ± 0.5mV and V ′
3 = −0.8 ±
0.4mV. With a very good approximation
(negligible relative error), we can use rA +
rB = rA +rC = rA +rD = 2r̄ so that with the
given data we obtain:
rA−rB
2r̄ = (8.34 ± 0.3) · 10−4
,
rA−rC
2r̄ = (2.78 ± 0.3) · 10−4
,
rA−rD
2r̄ = (6.10 ± 0.3) · 10−4
.
If we add up all these equalities, we obtain
2(rA − r̄) = r̄ · (17.2 ± 0.9) · 10−4
. With
r̄ = 4.67kΩ (which has negligbly small rel-
ative error), we end up with
rA − r̄ = (4.02 ± 0.21)Ω.
In a similar way, we can find
rB − r̄ = (−3.78 ± 0.21)Ω,
rC − r̄ = (1.43 ± 0.21)Ω,
and
rD − r̄ = (−1.68 ± 0.21)Ω.
