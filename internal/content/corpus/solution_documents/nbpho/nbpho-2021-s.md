---
id: solution-document-nbpho-2021-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2021_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2021-gas-flows, nbpho-2021-photon-rocket, nbpho-2021-rotating-space-station, nbpho-2021-stretching-gloves]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2021_S.pdf."
---

1. PHOTON ROCĸET (5 points) — Solution by
Taavet Kalda, grading schemes by Oskar Vallha­
gen and Konstantin Dukach.
i) (1 point)At non‐relativistic speeds, we can
apply classical momentum and energy con‐
servation to find the acceleration in terms of
the antimatter burning rate µ. In a time in‐
terval ∆t, a mass of ∆m = µ∆t antimatter an‐
nihilates with an equal mass of matter. The
resulting photons have an energy equal to
the annihilated rest energy ∆E =2∆mc2
. For
maximal acceleration, the photons have to
be all emitted in the same direction (can be
achieved, for example, using mirrors). The
resulting photon cloud will then have a mo‐
mentum of ∆p = ∆E/c. From the conser‐
vation of momentum, the space ship must
get a momentum boost in the opposite dir‐
ection, equal to ∆p = M∆v = Mg∆t. Com‐
bining everything, we get µ = Mg/(2c) =
1.635×10−3
kg/s.
Grading:
• Introducing time ∆t and expressing ∆m =
µδt 0.2pts.
• Photon energy ∆E =2∆mc2
0.2pts.
• Photon momentum ∆p =∆E/c 0.2pts.
• Rocket momentum ∆p = Mg∆t (half point
if only force F = Mg is stated) 0.2pts.
• Final answer 0.2pts.
• Missing factor 2 accounting for both anti‐
matter and matter fom interstellar plasma
−0.2pts.
• Finding photon momentum by reasoning
that the annihilated mass can be regarded
as expelled with the speed of light −0.2pts
ii) (3 points) The final speed is easiest to
find by applying energy and momentum (4‐
momentum) conservation in the initial and
final configurations. If the final rest mass
of the ship is mf , then M − mf of antimat‐
ter is burnt throughout the acceleration and
an equal amount of matter is burnt from the
interstellar space. Hence, it makes sense to
consider the system of the ship + the burnt
interstellar gas.
The initial rest mass of the system is M+
(M −mf ) = 2M −mf = Mi. This corresponds
to an energy of Ei = Mic2
and momentum
pi =0 due to the gas and the ship initially be‐
ing at rest.
In the final configuration, we have the
space ship moving with a speed of v with
energy Ef and momentum pf . We also
have a photon cloud with energy Ep and
momentum pp, moving opposite to the dir‐
ection of the space ship. Then the energy
and momentum conservation simply read as
Ef +Ep = Ei and pi = 0 = pf + pp. We also
have the 4‐momentum invariant for both the
space ship and the photon gas. They read
E2
f
− p2
f
c2
= m2
f
c4
and E2
p − p2
pc2
= 0. Solving
the 4 equations (with 4 unknowns), we get
pf =
M2
i
−m2
f
2Mi
c, Ef =
M2
i
+m2
f
2Mi
c.
We could find the velocity by solving for vf
in the expression for the relativistic energy
Ef = mf γf c2
with γf =(1−v2
f
/c2
)−0.5
. A faster
way, however, would be to use the expres‐
sion for final momentum, pf = mf γf v, and
notice that
vf =
pf
Ef
c2
=
M2
i
−m2
f
M2
i
+m2
f
c
=
(2M−mf )2
−m2
f
(2M−mf )2 +m2
f
c
=
180
181
c ≈0.9945c.
Grading:
• Realising that the problem can be solved
byconsideringconservationofmomentum
and energy between initial and final state
only 0.5pts.
• Correct conservation laws for momentum
and energy (half of the points for each)
0.5pts.
• Relating energy and momentum with 4‐
momentum invariants (or equivalent, half
of the points each for rocket and photons)
1pts.
• Solving the equation system in terms of en‐
ergies and momentum 0.5pts.
• Solving for vf 0.5pts.
Non‐relativistic solution:
• Realising that the problem can be solved
byconsideringconservationofmomentum
and energy between initial and final state
only 0.25pts.
• Correct conservation laws for momentum
and energy (half of the points for each)
0.25pts.
• Relating energy and momentum to vf
0.25pts.
• Final answer (if commenting on unphys‐
ical results, otherwise no points) 0.25pts.
Solution 2 by Oskar Vallhagen
An alternative way to solve the problem
is to find an expression for the reactive force
feltbytherocket,anduseittoderiveanequa‐
tion for the resulting velocity change. Dur‐
ing a time dt, the energy released as photons
from the burnt rocket antimatter is γµdtc2
(including the kinetic energy of this mass)
and the energy released from the ordinary
matter needed for the annihilation is µdtc2
.
As the photon momentum scales as the in‐
verse of the wavelength, which is red‐shifted
by a factor of
p
1+v/c/
p
1−v/c in the rest
frame compared to the rocket frame, the cor‐
responding change in photon momentum in
the rest frame is
dpph =(γ+1)µdtc
s
1−v/c
1+v/c
.
The force acting on the rocket can now be ex‐
pressed as
dp
dt
=
d
dv
(γv)m
dv
dt
+γv
dm
dt
= m
µ
γ3 v2
c2
+γ
¶
dv
dt
−γvµ
= mγ3 dv
dt
−γvµ=
dpph
dt
=(γ+1)µc
s
1−v/c
1+v/c
.
We now change variable from time to mass
by noting that
dv
dt
=
dv
dm
dm
dt
=−
dv
dm
µ,
yielding
−mγ3 dv
dm
−γv=(γ+1)c
s
1−v/c
1+v/c
.
This equation can be solved by separation of
variables according to
Z mf
M
dm
m
=
Z vf
0
−
γ3
γv+(γ+1)c
q
1−v/c
1+v/c
dv,
which can be simplified to
ln
³mf
M
´
=
Z vf /c
0
−
dx
(1−x)(
p
1−x2 +x+1)
= I(vf /c)−I(0),
with x = v/c and I is the indefinite integral.
To evaluate this integral, we first make the
substitution x = sin y. This gives
p
1−x2 =
cos y and dx =cos ydy, so that the (indefinite)
integral becomes
I =
Z
−
cosydy
(1−sin y)(cos y+sin y+1)
.
We now make the further substitution z =
tan y/2, which gives
sin y=
2z
1+z2
, cos y=
1−z2
1+z2
, dy=
2
1+z2
dz,so that the integral becomes, after some ma‐
nipulation,
I =
Z
−
dz
1−z
=ln(1−z).
Substituting back, we use the trigonomet‐
ric expressions sin y = 2sin(y/2)cos(y/2) and
cos y = 2cos2
(y/2)−1 to rewrite z = tan(y/2) =
sin(y/2)/cos(y/2) = sin y/(2cos2
(y/2)) =
sin y/(1 + cos y) = x/(1 +
p
1−x2), which after
insertion into the original integral gives
ln
³mf
M
´
=ln


1−
xf
1+
q
1−x2
f



⇒
1
10
=1−
xf
1+
q
1−x2
f
⇒ xf =
180
181
.
Grading:
• Correct photon momentum change in the
rest frame 0.5pts
• Expanding the momentum change of the
rocketintermsof v andsettinguptotalmo‐
mentum (or force) balance 0.25pts
• Eliminate the time variable 0.25pts
• Express solution as an integral using separ‐
ation of variables 0.5pts
• Simplifying the integral and first substitu‐
tion 0.5pts
• Second substitution 0.5pts
• Substitute back and calculate final answer
0.5pts
Non‐relativistic solution:
• Momentum balance 0.25pts
• Eliminate time variable and express as in‐
tegral using separation of variables
0.25pts
• Evaluate the integral 0.25pts
• Final answer (if commenting on unphys‐
ical results, otherwise no points) 0.25pts
iii) (1 point)The last photon is emitted when
the space ship moves at a speed of vf . The
photon is observed by a stationary observer.
We can directly use the relativistic Doppler
shift effect to find
fobs = f0
s
1−v/c
1+v/c
=
mf
Mi
f0
=
mf
2M−mf
f0 =
1
19
f0.
Grading:
• Correct relativistic expression for doppler
shift(‐0.3ptsifnon‐relativisticoronlyvalid
for vf << c) 0.5pts.
• Final answer (no points if unphysical, eg
negative frequencies, even if consistent
with previous calculations) 0.5pts.
2. GAſ AND FLUıD FLOWſ (10 points) — Solu­
tionbyTaavetKalda,gradingschemesbyJoonas
Kalda, Mihkel Kree, Andres Põldaru, Oleg Košik.
i) (1 point) As the plate falls, it will rotate
around the bump without slipping and push
the air out from beneath it, at ever faster
speeds, the closer it gets to the bottom plate.
As such, part of the rotational energy of the
plate is transferred over to the escaping air
molecules. Further, the pressure and tem‐
peratureofthegasisuniform,becauseofthe
incompressibility condition.
Since the problem is 2‐dimensional, the
mass, volumes, moment of inertia and other
quantities are per unit length of the system
(on the figure, into the page). Let x mark the
distance from the bump and v denote the ho‐
rizontalspeedofairat x. Thereisavolumeof
airequaltoV(x)= xhx/(2L)between x=0and
x. As the plate falls down, V(x) gets smaller
and as a result, air is pushed out. Consider a
smalltimeintervaldt. Inthattimeinterval, h
changes by ḣdt=−ωLdt. From the conserva‐
tion of air particles, 0=dV(x)+v(x)hx/L with
dV(x)=−x2
ω/2. Hence,
v(x)=
xLω
2h
.
Evaluated at x= L, this yields
v(x= L)=
L2
ω
2h
.
Grading:
• Stating the idea of using conservation of
mass (or implicitly using it) to find the ve‐
locity 0.4pts.
• Equation for the conservation of mass
0.4pts.
• Correct final expression 0.2pts.
ii) (2.5 points) Since the air flow is laminar
and there is no diffusion, all of the lost ro‐
tational energy from the falling glass plate
will be converted into kinetic energy of air
particles. As such, we have Krot+Kair =const.
Wefoundfromthepreviouspartsthattheair
is pushed out at ever faster speeds (between
the plates, v(x) À Lω) from between the two
plates. However, outside of the two plates,
the flow will diffuse fast in all directions,
such that the vast majority of kinetic energy
will be concentrated between the two plates.
The kinetic energy of the air between the
two plates is
Kin =
Z L
0
dx
hx
L
ρa
1
2
v(x)2
=
ρaLω2
8h
Z L
0
x3
dx
=
ρaL5
ω2
32h
,
and the rotational energy of the glass plate is
Krot =
Iω2
2
=
mglassL2
3
ω2
2
=
L3
tρgω2
6
.
Energy conservation then reads as
ρaL5
ω2
32h
+
L3
tρgω2
6
=const
=
ρaL5
ω2
0
32h0
+
L3
tρgω2
0
6
,
and hence,
ω=ω0
v
u
u
u
u
t
1+
3ρaL2
16ρgt
1
h0
1+
3ρaL2
16ρgt
1
h
.
We can see that limh→0 ω = 0, i.e. the air acts
as a cushion and stops the glass plate before
it hits the stationary plate.
Grading:
• Noticing from the laminarity of the flow
that the kinetic energy of the glass plate
and its surrounding air is conserved. If the
flow is assumed to be dissipative, and the
problem is otherwise solved correctly, the
maximum score is reduced by 0.3 pts from
this part. 0.6pts.
• Calculating the kinetic energy of the air, of
which: 1.2pts,
– Noting that the majority of the air’s kin‐
etic energy is between the two glass
plates (no formal proof required) 0.6pts.
– Finding the air velocity at a distance x
from the pivot 0.2pts.
– Correct setup for the integral for the kin‐
etic energy 0.3pts.
– Correct final expression for the kinetic
energy of air 0.1pts.
• Calculating the kinetic energy of the glass
slab, of which: 0.4pts,
– Correct expression for the moment of in‐
ertia 0.2pts.
• Final expression for angular speed as a
function of h 0.3pts.
iii)(3points)Theincomingwaterfrom‘2’will
spread out axisymmetrically along the space
between the stone disk and the ceiling. After
that, it will spread into the basin and eventu‐
ally leave through the outgoing pipe ‘3’. The
stone disk is kept up by the pressure differ‐
encesbetweenthetopandbottomofthedisc,
arising from the flow speed of the water dif‐
fering on either sides. The fact that pres‐
sures differ on boths sides can be seen dir‐
ectly by the application of the Bernoulli Prin‐ciple p+ρwv2
/2=const along a streamline or
by noting that the flow speed gradients are
driven by pressure gradients.
The flow speed outside the gap is negli‐
gible due to t ¿ R, hence we can take the
pressure at the bottom side to be uniformly
p0. The flow speed in the gap at a distance
x from the axis of symmetry can be found
from the conservation of mass applied on a
concentric cylinder of radius x and height t,
giving 2πxtρwv(x)=µ. Hence,
v(x)=
µ
2πxtρw
.
Applying Bernoulli’s principle, we get p(x)+
ρwv2
/2= p0 and so
∆p = p0 − p(x)=
ρwv2
2
=
1
2ρw
³ µ
2πxt
´2
.
We can hence find the force due to the pres‐
sure differences in the gap by integrating
from x = r to x = R. First note that the res‐
ulting force will be pointing vertically up, be‐
cause p(x)< p0. Integrating,
F1 =
Z x=R
x=r
2πxdx∆p
=
µ2
4πt2ρw
Z x=R
x=r
dx
x
=
µ2
4πt2ρw
ln
µ
R
r
¶
.
Note that the water entering through the
pipe will slow down, pushing the disk fur‐
ther down. The net force from this, however,
turns out to be negligible due to the condi‐
tion r À t. To see this, one can argue that
the said force is of order µvpipe ∼ µµ/(ρwr2
) ∼
µ2
/(ρwr2
)¿ F1.
Further, we have the gravitational force
Fg =−mg =−πR2
hρsg pulling the disk down
and buoyancy force Fb = πR2
hρwg pushing
disk up. The force balance then reads Fg +
Fb +F1 =0. Solving the equation, we find
µ=2πRt
s
hρw(ρs −ρw)
ln(R/r)
g.
Grading:
• Speed dependence v(x) from continuity
condition 0.5pts.
• DynamicpressurefromBernoulliequation
0.5pts.
• Express force by integrating dynamic pres‐
sure over disk area. 0.5pts.
• Explanation why the jet’s impact force can
be ignored (or equivalently, an expression
for the impact force that is carried along in
the solution) 0.5pts.
• Disk’s weight and buoyancy force 0.5pts.
• Express answer from force balance 0.5pts.
iv) (0.5 points) In the context of thermody‐
namics, entropy is defined in terms of its dif‐
ferential, such that the change in entropy of
a system is given by dS = dQ/T, where dQ is
the heat entering the system, and T its tem‐
perature. Further, entropy in reversible ther‐
modynamic processes is a state function, i.e.
it only depends on the current (equilibrium)
thermodynamical state of the system. This
means that when calculating the entropy dif‐
ferenceofonemoleofvapourandliquid, the
temperature at which the phase transition
took place does not affect the final result.
As such, it’s most convenient to consider
the two final states as only differing by the li‐
quid undergoing condensation at t0 = 100°C.
The final temperature is t0 = 100°C because
that’s when water vapour pressure is equal to
p0 (i.e. boiling temperature at atmospheric
pressure). Thiscorrespondstoaheatof∆Q =
mL = 1mol·ML entering the vapour system,
compared to the liquid one. Hence, the en‐
tropy difference between one mole of vapour
and liquid is given by
∆S =
∆Q
T0
=
1mol·ML
T0
=110J/K.
Grading:
• ∆S =
∆Q
T 0.1pts.
• ∆Q = LM 0.1pts.
• Understanding that T = T0 0.2pts.
• Correct numerical answer 0.1pts.
v)(3points)Becausetheexpansionofwateris
reversible, entropy is conserved. This means
that the change in entropy due to the expan‐
sion of the vapour is balanced by the entropy
change due to condensation. As discussed
before, becauseentropyisafunctionofstate,
it’s most convenient to calculate the entropy
change by imagining n moles of water (n will
latercancelout)coolingandexpandingfrom
Tt, pt to T0, p0 and condensing rn moles of
water at the end. r is found by demanding
that ∆S =0 in this process.
The entropy change of the vapour is
found by applying the first law of thermody‐
namics over a small temperature and pres‐
sure increment dT, dp:
dSvapour =
dQ
T
=
dU +dW
T
,
where dU = ncvdT is the change in internal
energy of the vapour and dW = pdV is the
work done by the vapour. Importantly, we
neglect the volume of water compared to the
vapour, as that allows using the ideal gas
to simplify the work differential. Using the
ideal gas law, we then have
pdV = pd
µ
nRT
p
¶
= nRdT −nRT
dp
p
.
Hence,
dSvapour = n(cv +R)
dT
T
−nR
dp
p
and we can integrate to get
∆Svapour = ncp ln
µ
T0
T1
¶
−nRln
µ
p0
p1
¶
where cp = cv +R = R(i +2)/2 = Rγ/(γ−1) is
the heat capacity at constant pressure. The
net change in entropy is then
∆Stot =0=∆Svapour +∆Scondens
=∆Svapour −rn
ML
T0
= ncp ln
µ
T0
T1
¶
−nRln
µ
p0
p1
¶
−rn
ML
T0
.
Thus,
r =
RT0
ML
µ
ln
µ
p1
p0
¶
−
γ
γ−1
ln
µ
T1
T0
¶¶
=0.114.
To find the mass flow rate, we start by
finding the flow speed v of the outgoing li‐
quid/vapour. Since we know r, we can ap‐
plyenergyconservation(necessaryforthere‐
versibility to hold) on a flowing water packet.
This is most conveniently done by demand‐
ing energy conservation on the system as a
whole. Suppose that in some time interval n
moles of water vapour with a volume of Vt
are created at the boiler. Then at the out‐
let, in the steady state, due to conservation
of particles, (1− r)n moles of water vapour
at a volume of V0, alongside rn moles of li‐
quid water, are removed. The outflowing wa‐
terhasanadditionalkineticenergyof nµv2
/2.
The energy change of the whole system due
to both steps must cancel each‐other out due
to energy conservation. We can write this as
0=Win −Wout +Uin −Uout −nMv2
/2=0,
where Win = ptVt = nRTt and Wout = p0V0 =
(1 − r)nRT0 are the works done by the in‐
coming and outgoing packet and similarly,
Uin = cvnTt andUout = cvnT0−rnML+rnRT0
aretheinternalenergiesoftheincomingand
outgoing packet. Notice that for the outgo‐
ing internal energy, we have an extra term of
rp0V0 = rnRT0. This is because when talk‐
ingaboutthelatentheatofvaporisation,itin‐
cludes the work done in order to expand the
vapour into the volume it’s supposed to oc‐
cupy. Therefore, we should subtract the said
work from the latent heat of vaporisation, in
order for it to capture the actual change in
the internal energy of the water. Combining
everything, we get
0= nRTt −(1−r)nRT0 +cvnTt
−cvnT0 +rnML−rnRT0 −nMv2
/2
=(cv +R)n(Tt −T0)+rnML−nMv2
/2,and hence,
v=
s
2
µ
cp∆T
M
+rL
¶
=906m/s.
The density of air at the outlet is found from
ideal gas law ρ = p0M/(RT0). The mass flow
rate of water vapour is then
µvapour = Aρv=
Ap0Mv
RT0
,
but we also have liquid water flowing out,
such that the total flow rate is given by
µ=
1
1−r
µvapour =
Ap0Mv
(1−r)RT0
=59g/s.
Grading:
Finding r 1.5pts
• Idea that entropy is conserved. 0.2pts
• Idea to calculate entropy change of the
whole gas from Tt, Pt to T0, P0. 0.2pts
• Equation dS = dU+dW
T 0.1pts, and
dS =
cdT+pdV
T 0.1pts.
• Using the ideal gas law to calculate dS us‐
ing two of the variables T, V, P. 0.1pts
• Integrating 0.2pts and expressing entropy
difference in terms of P and T 0.2pts.
• Using or deriving cv =3R. 0.1pts
• Correct entropy change due to the phase
change 0.2pts
• Express the correct result for r 0.1pts
Finding µ 1.5pts
• Idea to use energy conservation along the
flow. 0.2pts
• Correct expression for work in the energy
conservation. 0.2pts
• Correct internal energy change. 0.5pts
• Correct energy change due to kinetic en‐
ergy. 0.1pts
• Express correct v 0.1pts.
• Equation forgasflowrate µ= vρgA. 0.1pts
• The ideal gas law with density 0.1pts
• Correction factor 1
1−r for the whole mass
flow. 0.2pts
Note: using simple Bernoulli’s equation, which
does not consider phase changes, gave 0pts
sincetheproblemisaboutderivingwhathappens
in that case.
3. ROTATıNG ſPACE ſTATıON (13 points) —
Solution by Kaarel Hänni, grading schemes by
Adam Warnerbring, Kaur Aare Saar, Maksim
Pokrovskiy and ....
i) (0.5 points) Letting ω be the angular velo‐
city, the acceleration experienced by people
on the “ground” is ω2
R =
¡2π
τ
¢2
R. Setting this
equal to g gives
µ
2π
τ
¶2
R = g =⇒ τ=2π
s
R
g
≈63.437s.
Grading:
• Finding the acceleration at the ”ground”
0.2pts
• Correct expression for the period 0.2pts
• Correct numerical answer 0.1pts.
ii) (2 points) Let us consider the motion of
theballinthenon‐rotating(inertial)frameof
the center of mass of the spaceship. As the
travel time is t = τ/2, the throwing point on
the ground will rotate by exactly half a circle
between the ball being thrown and the ball
being caught. In our inertial frame, the tra‐
jectory of the ball will just be a straight line
between these two diametrically opposed
points; this has length 2R. In this inertial
frame, the ball thus travels with a constant
velocity vinertial = 2R
τ/2 = 4R
τ
(in the radial dir‐
ection). The initial velocity vector in the ro‐
tating frame is the difference of the velocity
vector in the inertial frame and the velocity
vector of the throwing point in the rotating
frame compared to the inertial frame. So the
initial velocity vector in the rotating frame
has a radial component of 4R
τ
and a tangen‐
tial component of 2πR
τ
. The throwing speed s
is the magnitude of this vector, which is
s=
s
µ
4R
τ
¶2
+
µ
2πR
τ
¶2
=
2R
τ
p
4+π2 ≈117 m/s.
Grading:
• Finding the trajectory in an inertial frame
8
15 pts
• Finding the radial velocity 8
15 pts
• Finding the tangential velocity 8
15 pts
• Correct velocity addition 4
15 pts
• Correct numerical answer 2
15 pts.
iii) (2 points) When the balloon comes to a
stop,itisinequilibriumintherotatingframe.
An object at radius R0
of mass m1 has a ficti‐
tious radial (downward) force of m1ω2
R0
act‐
ing on it in this frame. This force on the
mass m is mω2
(R−H+l). The upward force
on the balloon is the difference between this
force for the balloon and the buoyant force
in the rotating frame, which is 4
3πr3
(M −
M0
) n
V ω2
(R−H)= 4
3πr3
(M−M0
) P
RGT ω2
(R−H).
Putting all this together, we can write down
theconditionthattheradialforceis0inequi‐
librium
mω2
(R−H+l)=
4
3
πr3
(M−M0
)
P
RGT
ω2
(R−H)
=⇒ m=
4
3πr3
(M−M0
)P(R−H)
RGT(R−H+l)
≈110.8 kg.
Grading: If l is neglected, i.e. the mass
and balloon are considered to be at equal
heights, this problem is marked out of 1.0
pts maximum. Idea: balance of fictitious ra‐
dial force and buoyant force 0.8 pts. Correct
expression for force on balloon 0.5 pts and
mass 0.2 pts. Force balance correct 0.2 pts.
Expression for m correct 0.2 pts. Numerical
answer correct 0.1 pts.
iv) (1.5 points)In the rotating frame, letting r
be the distance from the axis of the cylinder,
there is an effective radial potential of
φ(r)=
Z r
0
(−ω2
x) dx=−
ω2
r2
2
,
where we have chosen the potential zero
level to be at r = 0. In other words, in
this frame, there is a fictitious radial force
of m1ω2
r = −m1
dφ
dr acting on an object of
mass m1. The rope takes a shape that minim‐
izes this potential energy. For this part and
the next, we will just be figuring out prop‐
erties of a rope that minimizes this poten‐
tial energy (and other than that, we can for‐
get about the rotation). Consider cutting off
a tiny piece of rope of length ℓ from point
C, then pulling the rope tight at C and glu‐
ing it back together (doing work ℓTC), then
cutting the rope open at A, letting it slip by
length ℓ (doing work −ℓTA), and finally mov‐
ingthetinypiecefrompoint C topoint A (do‐
ing work ℓλ(φ(R)−φ(R −h)) = −ℓλω2h(2R−h)
2 ),
filling the gap of length ℓ. The state of the
rope is now the same as initially, so the total
work done should be 0:
ℓTC −ℓTA −
ℓλω2
h(2R−h)
2
=0,
from where
TA −TC =−
λ2π2
h(2R−h)
τ2
.
See 200 More Puzzling Physics Problems,
problem 78 (and its hint and solution) for a
longer explanation of this idea.
Grading: Idea: move piece of rope from
C to A/B 0.2 pts. Idea: work done by tension
0.1 pts and correct expression 0.3 pts. Idea:
change in radial potential in rotating frame
OR kinetic energy in lab frame 0.1 pts and
correct expression 0.3 pts. Total work done
iszero0.2pts. Correctanswerfortensiondif‐
ference 0.3 pts.
v) (1.5 points)Let’s use the equilibrium condi‐
tion that torque around the center of the cyl‐
inder is 0 (in the rotating frame) for the left
half of the rope. Note that the fictitious force
is radial, so that contributes nothing to the
force. So the only contributions are from the
tension in the rope on the two sides, so
RTA cosα=(R−h)TC =⇒
TA
TC
=
R−h
Rcosα
.Grading: Idea: rope in equilibrium 0.2
pts. Using zero total torque as condition 0.2
pts. Eliminating radial force by choice of
point 0.4 pts. Some correct torque expres‐
sion containing both tensions 0.2 pts. Cor‐
rect ratio 0.5 pts.
vi) (1.5 points)Let the x‐axis be the diameter
AB, with coordinates chosen to be in meters,
and with the coordinates of A being (−R,0).
(So the coordinates of B are (R,0) and the co‐
ordinates of C are (0,−(R −h)). The unique
parabola y = ax2
+ bx + c that goes through
these three points has b = 0 from symmetry
across the y axis, c = −(R −h) from condsid‐
ering the point C, and then a = −R−h
R2 from
considering the point A. The derivative at A
is dy
dx |x=−R =2a·R =−2(R−h)
R , from which
cosα=
−dy
p
(dy)2 +(dx)2
=
1
r
1+
³
dx
dy
´2
=
1
q
1+ R2
4(R−h)2
≈0.7106.
Using the equations from parts (iv) and
(v), wenowhaveasystemofequationsintwo
unknowns:
(
TA −TC =−λ2π2h(2R−h)
τ2
RTA ·0.7106=(R−h)TC
.
It remains to solve this system of equa‐
tions. The second equation gives TA =
TC
R−h
R·0.7106 ≈ TC ·0.7107. Plugging this into
the first equation then gives
TC =
λ2π2
h(2R−h)
τ2(1−0.7107)
≈12631 N.
Grading: Some correct parabola given
some choice of axes 0.3 pts. Correct expres‐
sion for cosα 0.2 pts and correct numerical
value 0.2 pts. System of equations using ex‐
pressions found in iv) and v), even if they
are incorrect, 0.2 pts. Correct expression
for tension 0.4 pts. Solved only for TA: full
marks with penalty ‐0.1 pts. Correct numer‐
ical value for TC 0.2 pts.
vii)(2points)Therotatingchargeonthewalls
is making the spaceship into a solenoid car‐
rying current I =
Q
τ
. Inside of the spaceship,
this creates a constant axial magnetic field of
magnitude
B =µ0
I
L
=µ0
Q
τL
.
The force this creates on the charged ball
is −qvB = −q2πR
τ
µ0
Q
τL in the radial upward
direction. For the ball to hover above the
“ground” motionlessly, the acceleration cre‐
atedbythisradialforcehastobeequaltothe
centripetal acceleration ω2
R = (2π)2R
τ2 :
−
q
m
2πR
τ
µ0
Q
τL
=
(2π)2
R
τ2
=⇒
q
m
=−
2πL
µ0Q
.
Grading:
Method 1:
• Finding the current 4
15 pts
• Finding the magnetic field 0.4pts
• Finding the upward force on the charged
ball 2
3 pts
• Writing out the centripetal acceleration of
the ball 4
30 pts
• Correct relation between force and acceler‐
ation 4
15 pts
• Correct final expression 4
15 pts
• Wrong sign of the charge − 4
15 pts
Method 2:
• Finding the current 4
15 pts
• Finding the magnetic field 0.4pts
• Finding the upward force on the charged
ball 2
3 pts
• Writing out the force balance in the rotat‐
ing frame (with the correct expression of
the upward force) 0.4pts
• Correct final expression 4
15 pts
• Wrong sign of the charge − 4
15 pts
viii) (2 points) Consider a charge q1 at rest
at radius r in the rotating frame. The
electromagnetic force applied to it is frame‐
independently q1
2πr
τ
µ0
Q
τL. This charge is not
moving in the rotating frame, so in its frame,
the force applied to it by the magnetic field
must be 0, and so the electric field measured
in its frame must satisfy q1E = q1
2πr
τ
µ0
Q
τL,
from where
⃗ E =
2πµ0Q
τ2L
⃗ r.
We now have an expression for E at each
point in the rotating frame; what remains is
to evaluate
H
⃗ E ·d⃗ A. For the sake of variety,
wewilldemonstratetwowaystoevaluatethis
integral.
For the first option, note that our ⃗ E =
const·⃗ r is exactly the electric field of a uni‐
formly charged cylinder (with the correctly
chosenchargedensity),andsowecouldequi‐
valently find the same integral around such
a uniformly charged cylinder, which Gauss’
theorem gives as Vρ/ϵ0 = V · c1. We can find
anexpressionfortheconstant c1 byconsider‐
ing the simple case where the surface we are
dealing with is a cylinder of width 1 m itself,
in which case the integral is
I
⃗ E·d⃗ A =1 m·2πr
2πµ0Q
τ2L
r =V
4πµ0Q
τ2L
.
Hence, c1 =
4πµ0Q
τ2L
, and so
I
⃗ E·d⃗ A =V
4πµ0Q
τ2L
.
To briefly describe a second option for
evaluating this integral, note that by parti‐
tioning a 3D body into volume slices, with
each slice bounded by an area element d⃗ A
andwithcylindricalradiusvector⃗ r,andwith
the volume of each slice being ⃗ r ·d⃗ A/2, we
get that the volume of the body is the sum of
volumes of all such slices,
V =
I
1
2
⃗ r·d⃗ A.
This lets us evaluate the main integral as
I
⃗ E·d⃗ A =
I
2πµ0Q
τ2L
⃗ r·d⃗ A
=
4πµ0Q
τ2L
I
1
2
⃗ r·d⃗ A =
4πµ0Q
τ2L
V.
Grading:
• Arguing that in the rotating frame there is
only an electric field 0.4pts
• Finding the electric field strength 0.4pts
• Choosing a suitable Gauss surface 0.4pts
• Evaluating the surface integral and obtain‐
ing the correct answer 0.8pts.
4. STRETCHıNG GLOVEſ (8 points) — Solution
by Eero Uustalu, grading schemes by ....
i) (1 point)
Cut a few strips of the material with the
same constant width and mark them with
two perpendicular lines close to the ends of
the strip while leaving ample space for affix‐
ing or binding. Then roll one strip length‐
wise into a cylindrical shape for stretch‐
ing. Measure the initial length between
the marked lines l0. With a straight meas‐
uring tape affixed to the surface of the
table, stretch one of the strips to the break‐
ing point while determining the maximum
length between the lines before the strip
breaks lmax. Repeat this at least three times
to see if the data is reproducible. Calculate
the result ϵmax =(lmax −l0)/(l0).
In our measurement we got ϵmax =5.5.
Grading:
• Selection of the actual latex piece for the
sample. Strips have to be of high quality
and not include the finger end. 0.1pts
• Selecting the strip length: 0.2pts
– at least 8cm: 0.2/0.2pts
– at least 4cm: 0.1/0.2pts
– shorter, not specified 0/0.2pts
– Remark. If a series of different lengths
of strips is used, then the medium value
should be considered. Additionally, ifthe graph for finding ϵmax is used by
including the point (0,0), then 0.1 pts
should be subtracted.
• Method of measurement, of which: 0.4pts
– one end affixed with tape or held using a
ruler 0.1pts.
– lines marked on the strip, or the strip is
affixed over the edge of the ruler 0.1pts
(if both ends are affixed, 0.2 pts, but
can’t get more than 0.4 pts for this sec‐
tion).
– using narrow strips 0.1pts.
– measuringonlythepartofthestripthat’s
being stretched (between marks) 0.1pts.
– Measuring the full length of the stip
0.1pts.
• Repetition of measurements: 0.2pts
– measurement repeated at least 5 times
0.2/0.2pts.
– measurement repeated at least 3 times
0.1/0.2pts.
– if distortion of measured ϵmax values is
low +0.1pts.
• Final numerical value. If the value lies in
range 4‐7 (depends on the material, even 3‐
11 may be ok) 0.1pts.
ii) (7 points)
Theoretical considerations.
We can assume the material has uniform
thickness. Knowing that σ = F
A , V = const,
and that any force applied to the strip affects
all directions perpendicular to the applied
force equally, then at any time for the same
strip
V = a·a·k·l = a0·a0·k·l0 = amax·amax·k·lmax,
where a0 is the initial thickness of material
with no force applied and l0 is the initial
length of the strip with no force applied, a
is the thickness when force F is applied and
l is the length of the strip when force F is ap‐
plied, amax and lmax are the respective values
at the breaking force Fmax.
k is the ratio between the width d and
the thickness a of the strip such that d = k·a
where k remains constant for the strip while
stretching. Therefore
σ=
F
a·a·k
and σmax =
Fmax
amax·amax·k
.
From V = const we can deduce that a·a =
a0·a0·l0
l and amax·amax =
a0·a0·l0
lmax
.
If we could apply the same force F on
strips of different initial widths d = k·a, we
could vary the tension for each strip. There‐
fore we would be using different strips with
different k values for each measurement
σ= F
k · l
l0
· 1
a0·a0
and σmax = F
kmax
·lmax
l0
· 1
a0·a0
,
where k = d/a and kmax = dmax/amax are
the width to thickness ratios of the the re‐
spective strips used for F and Fmax. By com‐
bining the above, we get
σ
σmax
=
kmax
k
·
l
lmax
,
but since d0 = k·a0 is the initial un‐
stressed width of one strip and dmax0 =
kmax·a0 is the initial unstressed width of an‐
other strip stretched to the breaking point,
for building the graph it transforms to:
σ
σmax
=
dmax0
d0
· l
lmax
for the Y axis and
ϵ=
l−l0
l0
for the X axis.
Measurements.
We can assume the material has uniform
thickness. We want to apply the same force
on the strips with different initial widths.
Approach 1
We make many strips with different
widths, mark them with the same initial
length l0 usingperpendicularlines, measure
and record the initial widths d0 of each seg‐
ment, then roll them lengthwise into a cyl‐
indrical shape and bind them one after an‐
other. The force will be the same for all the
segments, but the value of σ for each seg‐
mentwill dependonthe initial width ofeach
individual strip.
A range where dmin and dmax differ at
least 8 times is recommended.
Rolling the strip lengthwise into a cyl‐
indrical shape before binding gives the pos‐
sibility to distribute the force evenly on all
the strips regardless of the width of the strip!
Our solution was to make two identical
stripswiththesmallestpossiblewidthandat‐
tach them to one another at one end to form
a Y shape. The previously determined ϵmax
was used to estimate the possible maximum
stretching almost to the breaking point of
the narrowest strip. In case of a breakage
event the identical spare strip at the other
end of the Y shape could be used for meas‐
urement. After affixing the multi‐width rope
of combined strips at its maximum stretch
position, the values of l were recorded for
each individual section. Afterwards the rope
was stretched till breaking to find the actual
breaking length lmax of the narrowest strip.
The 7mm wide initially 80mm long test
strip broke at length 522mm. Therefore the
measurement of the rope of strips was made
using force F stretching the second 7mm
wide 80mm test strip to 519mm .
But the 7mm stripe broke when it was
stretched to 599mm .
So the dmax0 =7mm and lmax =599mm .
mm mm mm
(l−l0)/lo l0 l d0 σ/σmax
0.638 80 131 71 0.022
1.606 80 208,5 37 0.066
1.888 80 231 30 0.090
3.025 80 322 21,5 0.175
3.338 80 347 18 0.226
4.225 80 418 14 0.349
4.925 80 474 11 0.505
5.488 80 519 7 0.866
And the graph, σ
σmax
for the Y axis and ϵ
for the X axis.
0,000 1,000 2,000 3,000 4,000 5,000 6,000
0,000
0,100
0,200
0,300
0,400
0,500
0,600
0,700
0,800
0,900
1,000
Approach 2
We make two identical elongated tri‐
angles from the longest piece of material
available. We mark the triangles with evenly
spaced perpendicular lines. (The lines are
perpendicular to the central symmetry line
of the elongated triangle.)We record the initial length l0 and the av‐
erage width d0 of each segment as defined
by the perpendicular lines. When stretched,
allsegmentswillhavethesameforceapplied
but each segment will have its own σ. We
have to affix the base of the prolonged tri‐
angle to the ruler with tape (it has to be a
good strong joint) and we affix the ruler to
the table. A long strip of graph paper was
taped to the table to have the rubber triangle
stretched over it.
The triangle was stretched until the nar‐
row end segment was near breaking point,
and the values of l were recorded for each
segment. (Most easily done by using a
markeron the graphpaper while holding the
narrow end of the triangle at a fixed position
with the other hand). One of the triangles
was actually stretched to the braking point,
the other triangle was stretched to the break‐
ing point only after the measurement was
made.
The narrow end segment of the first tri‐
angle of length 10mm and of average width
6mm broke at length 73.1mm. Therefore
the measurement of the second similar tri‐
angle tested was made using force F stretch‐
ing the narrow end segment of the triangle
to 72.6mm. The actual breaking of the nar‐
row segment of the second triangle occurred
at length 73.7mm .
So the dmax0 =6mm and lmax =73.7mm .
mm mm mm
σ/σmax l0 l d0 (l−l0)/lo
0.985 6 10 72.6 6.26
0.605 8 10 59.5 4.95
0.444 10 10 54.5 4.45
0.333 12.5 10 51 4.1
0.266 15 10 49 3.9
0.221 17.5 10 47.5 3.75
0.183 20 10 45 3.5
0.148 22.5 10 41 3.1
0.129 24 10 38 2.8
0.104 27 10 34.5 2.45
0.074 32.5 10 29.5 1.95
0.061 36 10 27 1.7
0.051 39 10 24.5 1.45
0.043 41.5 10 22 1.2
0.037 46.5 10 21 1.1
0.030 50 10 18.5 0.85
0.022 56 10 15 0.5
And the graph, σ
σmax
for the Y axis and ϵ
for the X axis.
0 1 2 3 4 5 6 7
0,000
0,100
0,200
0,300
0,400
0,500
0,600
0,700
0,800
0,900
1,000
Grading:
GOOD practice:
• using the longest possible strips
• marking the initial length on the strip with
a marker or
• measuring initial length to one straight af‐
fixedsurfacetoanotherparallelaffixedsur‐
face
• rollingthemarker‐markedstriplengthwise
intoacylindricalshapeforuniformstretch‐
ing
• reasonable amount of repetitions (break‐
ing is not very well repeatable)
BAD practice:
• intentionally variable length strips / short
strips
• not marking the initial length on the strip
with a marker
• not stretched with perpendicularly uni‐
form strain
• not taking measurements only from actual
part to be stretched
• not accounting for possible friction (some
methods)
part ii
other solutions proposed:
• multiple similar masses used (not in the
equipment list)
• a lever and some mass
• from the same latex material (a very long
uniformandrelativelythickstripisneeded
to be in proportional range, but then the
measured force will be low)
• multiple similar strips in parallel as op‐
posedtousingfeverstripsinrowandbreak‐
ing with even force
• trigonometry and constant force
• different width strip pairs (force applied
must remain constant for all pairs, in some
solutions friction would need to be accoun‐
ted for)
unsuccessful solving attempts / bad prac‐
tices:
• using equipment not listed
• calculated, not measured (experiment!)
0pts.
• using a finger as a force measuring device
0pts.
• assuming the repeatedly applied force is
constant (which it might not be) 0pts.
• measuring by varying the length of the
strip while keeping the applied force con‐
stant (stress created remains constant)
(force may be mg) 0pts.
• stretching the strip to different lengths not
knowing the actual force applied 0pts.
• MOST OFTEN: Assumption that F=kx !
That is actually an alternative lightly modi‐
fied form of writing down the dependency
WE HAVE TO MEASURE, not assume! (and
the real dependency is not linear) 0pts.
Possiblegradingschemeforthesolutions
given as example:
part ii
theory:
• assuming that the material has initial uni‐
form thickness 0.2pts.
• idea that as V = const then the dimensions
in axes perpendicular to the applied force
change in a fixed ratio to each other 1.0pts.
• idea of changing σ by changing the width
d of the material when constant force is ap‐
plied 1.0pts.
• idea of applying a common force to all the
different samples at the same time 1.0pts.
• finding how to calculate the value of ϵ to be
plotted 0.2pts.
• findinghowtocalculatethevalueofσ/σmax
to be plotted 0.6pts.
measurements and data:
• the strips/intervals used are as long as pos‐
sible (in our case at least 14cm) 0.1pts.
• data range covered ‐ value of the largest
measured σ differs from the smallest meas‐
ured σ at least 8 times 0.1pts.
• data points ‐ at least 8 points measured (
0.2pts for each correctly measured point
or 0.1pts for each cor‐
rectly measured point if less than 4 points
measured (have you seen graph with 3 data
points?), for maximum 8 measured points)
MAX 1.6pts.
• data evenly distributed 0.1pts.
• at least one data point measured with a σ
value at least 0,8 of σmax 0.1pts.
• measurements for the breaking event val‐
ues correctly done 0.2pts.• chart of measured and calculated values
given 0.3pts.
graph:
• graph correctly plotted with all measured
points 0.3pts.
• graph plotted in units asked (ratios, no
units) 0.2pts.
If the results of any intermediate calcu‐
lations are excessively rounded, a deduction
from the final score of −0.1pts for every
intermediate stage used.
using out of list equipment:
• If the out of list equipment used does not
allow for any principally new methods of
solution, any credit awarded for the parts
of the solution that rely on the use of the
out of list equipment or data measured
with it will be reduced by 50%.
• If the out of list equipment does enable a
principally new method of solution, credit
willonlybeawardedforaspectsofthesolu‐
tion that would be applicable in a solution
that does not rely on the out of list equip‐
ment.
