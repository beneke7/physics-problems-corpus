---
id: solution-document-nbpho-2023-s
source: nbpho
kind: official_answer_sheet
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2023_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2023_S.pdf."
---

NORDıC‐BALTıC PHYſıCſ OLYMPıAD 2023
1. CURLıNG (8 points) — Solution by Jaan
Kalda, Oskar Vallhagen, grading schemes by Os­
kar Vallhagen.
i) (1 point) As the stone is gliding over the
ice everywhere on the contact surface, the
friction force is Ffx = µmg, i.e. the ac‐
celeration is µg, directed in the negative x‐
direction (with the x‐direction pointing to‐
wards the target stone). Thus, we get
dvs
dt
= −µg ⇒ vs = v0 − µgt.
Grading:
• Correct friction force (0.5pts)
• Correct acceleration (0.2pts)
• correct vs (0.3pts)
ii) (1 point) The simplest way to obtain the
final velocity is to use energy conservation,
noting that the friction force does a work
Wf = µmgs. Thus, we get
mv2
0
2
=
mv2
hit
2
+ µmgs ⇒ vhit =
√
v2
0 − 2µgs.
Grading:
• Idea of using energy conservation (0.2pts)
• Calculating the work done by the friction
force (0.3pts)
• Correct total energy conservation equation
vs (0.3pts)
• Correct vhit (0.2pts)
Alternatively, one can first calculate the
time thit before the stone hits the opponents
stone. Integrating the expression for vs up to
this time gives
s = v0thit − µg
t2
hit
2
.
Solving for thit, we get
thit =
v0
µg
−
√
v2
0
µ2g2
−
2s
µg
(the solution with the plus sign gives a negat‐
ive velocity). Inserting back into the expres‐
sion for vs and simplifying gives
vhit =
√
v2
0 − 2µgs.
Grading:
• Integration of the expression for vs
(0.4pts)
• Solving for thit (0.4pts)
• Inserting into expression for vs and final
answer (0.2pts)
iii) (2 points) Consider the motion of a point
at the ring in contact with the ice at an angle
θfromthex‐axis,movingatavelocityv asde‐
picted in the figure below. The components
of this motion along the x and y axes can be
seentobevx = vs−ωrsinθandvy = ωrcosθ,
respectively.
x
y
R
θ
ϕ
θ − ϕ
r
vs
ωr v
vs
The friction force per unit length has the
magnitude
F′
f =
µmg
2πr
everywhere on the circle in contact with the
ice, asbefore, butisnowdirectedoppositeto
the local velocity v rather than the sliding ve‐
locityvs. Thecomponentoftheforcedensity
in the x‐direction thus becomes
F′
fx = −F′
f cosφ = −F′
f
vx
v
.
From this point on, there are two ways
to work out the mathematical calculations.
First, consider an infinitesimal arc of the
contact ring of central angle dθ; the friction
force exerted on it has magnitude dFf =
µmg
2π dθ. The total force is obviously directed
antiparallel to the velocity of the stone as y‐
directional components of the acting on arcs
at θ and π − θ cancel pairwise out. The pro‐
jection of the friction force acting on our arc
is given by
dFx =
µmg
2π
cosφdθ
Using the small parameter δ ≡ ωr/vs ≈
ωr/v ≪ 1, we conclude that φ ≪ 1, hence
we can use approximation
dFx ≈
µmg
2π
(
1 −
1
2
φ2
)
dθ.
The angle φ can be found from the sine
theorem assuming sinφ ≈ φ: φ ≈
sin
(π
2 − θ
)ωr
v ≈ cosθωr
vs
≡ δ cosθ. Alternat‐
ively, a similarly accurate expression cab be
found by noting that
φ ≈ tanφ =
vy
vx
≈
vy
vs
=
ωrcosθ
vs
.
Thus,
dFx =
µmg
2π
(
1 −
δ2
2
cos2
θ
)
dθ.
Recognising that
∫2π
0
cos2
θdθ = π, this can
be integrated to obtain
Fx = µmg
(
1 −
ω2
r2
4v2
s
)
so that the final answer is
∆Fx = −
µmgω2
r2
4v2
s
.
The second way is by continuing
F′
fx = F′
f
vx
v
= F′
f
vs − ωrsinθ
√
v2
s − 2vsωrsinθ + ω2r2
= F′
f
1 − δ sinθ
√
1 − 2δ sinθ + δ2
.
To second order in δ, we get, using the ap‐
proximation suggested in the problem text
for x = −2δ sinθ + δ2
and doing some ele‐
mentary algebra,
F′
fx ≈ F′
f(1 −
1
2
δ2
cos2
θ).
The total friction force can now be obtained
byintegratingoverthelengthelementofsize
rdθ along the ring in contact with the ice,
yielding, after simplifying and re‐inserting
the expression for F′
f,
Ffx =
∫ 2π
0
F′
fxrdθ = µmg
(
1 −
1
4
δ2
)
.
Grading:
• Understanding that the friction force is
everywhere antiparallel with the local ve‐
locity (0.4pts)
• Calculating the magnitude of the force per
unit length (0.3pts)
• Correct expression for the x component
(0.2pts)
First solution:
• ApproximateexpressionforF′
fx ordFfx for
small φ (0.3pts)
• Expressing φ in terms of δ and θ (0.5pts)
• Correct integral and final answer (0.3pts)
Second solution:
• Expressing F′
fx or dFfx in terms of δ and θ
(0.3pts)
• ApproximateexpressionforF′
fx ordFfx for
small δ (0.5pts)
• Correct integral and final answer (0.3pts)
iv) (2 points)For the torque τ′
per unit length
(around the central axis of the stone), we see
from the figure that the angle between the
local force per unit length and the radius is
θ − φ, yielding
τ′
= F′
frsin(θ − φ).
From here on, there are again two ways to
continue. First, we can use Taylor series
and keep only the linear term: sin(θ − φ) ≈
sinθ − φcosθ; by using the previously ob‐
tainedexpressionφ ≈ δ cosθ, wecanexpress
dτ = µmgr(sinθ − δ cos2
θ)
dθ
2π
integration of which yields
τ = −
µmgωr2
2vs
.The second way is to write
τ′
= F′
frsin(θ − φ)
= F′
fr(sinθcosφ − cosθsinφ)
= F′
fr(sinθ
vx
v
− cosθ
vy
v
),
which, using the above expressions for vx
and vy, can be simplified to
τ′
= F′
fr
sinθ − δ
√
1 − 2δ sinθ + δ2
.
Applying the same approximation as in the
previous part and keeping only the first, now
leading, order terms in δ, we get
τ′
≈ F′
fr(sinθ − δ cos2
θ).
Integrating to find the total torque, we get
τ =
∫ 2π
0
τ′
rdθ = −
1
2
δµmgr.
Grading:
• Finding the angle between the local force
per unit length and the radius (0.5pts)
• Correct expression for τ′
(0.4pts)
First solution:
• Approximate expression for τ′
or dτ for
small φ (0.3pts)
• Expressing φ in terms of δ and θ (0.5pts)
• Correct integral and final answer (0.3pts)
Second solution:
• Expressing τ′
or dτ in terms of δ and θ
(0.3pts)
• Approximate expression for τ′
or dτ for
small δ (0.5pts)
• Correct integral and final answer (0.3pts)
v) (2 points) The equation describing the ro‐
tation is, now expressed in terms of ω and vs
rather than δ,
I
dω
dt
= τ = −
1
2
µmgr2 ω
vs
,
wherethemomentofinertiaisI ≈ 1
2mR2
.As
the correction to Ffx is only of second order
in δ, to the first, leading order approxima‐
tion, we may neglect the effect of rotation on
Ffx. Thus, the sliding speed vs has the same
time dependenca as in part i). The equation
above can then be separated as
∫ ωhit
ω0
dω
ω
=
∫ thit
0
−µg
r2
R2
dt
v0 − µgt
⇒
ln
ωhit
ω0
=
r2
R2
ln
v0 − µgthit
v0
,
which, recognising that v0 − µgthit = vhit,
yields
ωhit = ω0
(
vhit
v0
) r2
R2
.
Grading:
• Correct equation of motion for the rotation
(0.5pts)
• Realising that vs is unaffected by the rota‐
tion to leading order (0.5pts)
• Using separation of variabels (0.5pts)
• Final answer (0.5pts)
2. NıTROGEN EXPLOſıON (8 points) — Solu­
tion by Päivo Simson, grading schemes by Päivo
Simson and ....
i) (1.5 points) As shown in the first figure of
the problem, the sphere floats so that exactly
halfofitissubmergedinwater. Whenstudy‐
ing buoyancy, the mass of nitrogen gas can
be considered negligibly small compared to
the masses of liquid nitrogen and the plastic
sphere. According to Archimedes’ principle,
we have
ρnVn + ρpVp = ρwVw,
where Vn, Vp, and Vw are the volumes of li‐
quid nitrogen, plastic, and displaced water,
respectively. We have
1
2
·
4πr3
ρn
3
+ d · 4πr2
ρp =
1
2
·
4πr3
ρw
3
,
and solving for d we get
d =
r
6
·
ρw − ρn
ρp
= 1.5mm.
Grading:
• Archimedes’ principle (0.3pts)
• Correct volumes of liquid nitrogen, plastic,
and displaced water (0.6pts)
• Correctly solving for d (0.3pts)
• Correct answer d = 1.5mm (0.3pts)
ii) (1.5 points)The sphere will explode when
the pressure difference p2 − pa is such that
the maximum tensile strength of the plastic
is reached. Let’s look at only one‐half of the
sphere and study the balance of the forces.
The resultant force due to pressure is (p2 −
pa)πr2
. This must always be balanced by the
elastic forces in the plastic. Right before the
explosion, we have the equality
(p2 − pa)πr2
= σ2πrd,
where 2πrd is the cross‐sectional area of the
plastic. Now solving for p2 we get
p2 = pa +
2σd
r
= 1.1 · 106
Pa.
Grading:
• Qualitative understanding of the condi‐
tions for the sphere to explode ‐ result‐
ant pressure force equals the total tensile
strength (0.4pts)
• The idea of breaking the sphere in half and
analysingtheforcesactingononlyoneside
of the sphere (0.4pts)
• Correct condition for the sphere to ex‐
plode: (p2 − pa)πr2
= σ2πrd (0.4pts)
• Correct final expression and answer
(0.3pts)
iii) (1.5 points) During boiling at constant
pressure, the temperature of the liquid does
notchange, eventhoughtheliquidisgaining
energy all the time. If however the pressure
changes, as we have in our problem, then so
does the boiling point, following exactly the
phase transition line on the phase diagram.
Since we know the final pressure p2, we can
simply read the corresponding temperature
of the diagram:
p2 = 1.1 · 106
Pa =⇒ T2 = 106 K.
Grading:
• Correctly stating that the process 1 − 2 fol‐
lows the phase transition line. (1.0pts)
• Reading the correct temperature from the
graph (0.5pts)
iv) (1.5 points) If p, V , and T are known, the
mass of the nitrogen gas can be calculated
using the ideal gas equation:
pV =
m
M
RT =⇒ m =
pV M
RT
.
Since we know the initial and final states,
the mass ∆m of nitrogen that evaporated
between these states is
∆m = m2 − m1 =
=
2πr3
M
3R
(
p2
T2
−
p1
T1
)
= 0.065kg.
Grading:
• The idea of calculating the mass of nitro‐
gengasintheinitialandfinalstate(0.3pts)
• Realizing that ideal gas law can be used to
calculate the mass of nitrogen gas (0.3pts)
• Correct ideal gas law (0.3pts)
• Correctly using the molar mass (0.3pts)
• Correct calculation and correct final an‐
swer (0.3pts)
v) (2 points) Neglecting the heat capacity of
the plastic and the heat flux through the up‐
per half of the sphere, we only need to con‐
sider the heat of evaporation:
Qe = λ∆m = 1,31 · 104
J,
and the heat for raising the temperature of
the liquid nitrogen:
Ql = cvml(T2 − T1) =
=
2
3
πr3
ρncv(T2 − T1) = 9,7 · 104
J.
The heat for rising the temperature of the ni‐
trogen gas can be neglected, as the mass of
the gas is very small compared to the mass
of liquid nitrogen (≈ 1.7kg). The total heat
Qe + Ql is taken from the water through the
plastic. The average temperature of nitrogen
is Tn = (T1 + T2)/2 = 91.7K, and the av‐
erage temperature difference between waterand nitrogen is Tw − Tn = 201.5K. The heat
flux through the plastic is
q = k ·
Tw − Tn
d
.
The total amount of heat carried through the
lower half of the sphere during time ∆t is
∆Q = qA∆t = Qe + Ql,
where A = 2πr2
is half of the surface area of
the sphere. Finally, solving for ∆t, we have
the estimated time it takes for the sphere to
explode:
∆t =
d · (Qe + Ql)
2πr2k(Tw − Tn)
= 15.5s.
Grading:
• Understanding that Qe + Ql must be equal
to the total heat received from the water
(0.3pts)
• Correct heat of evaporation (0.2pts)
• Correct heat for rising the temperature of
liquid nitrogen (0.2pts)
• Correctly using the average temperature of
nitrogen (0.2pts)
• Correctly using the average temperature
difference (0.2pts)
• Correct expression for the heat flux q
though the plastic (0.3pts)
• Correctexpressionforthetotalheat∆Qre‐
ceived through the plastic (0.3pts)
• Correct final expression for calculating the
time till explosion (0.3pts)
Give full points for this part if the final ex‐
pression and the answer are correct.
3. WOBBLE (8 points) — Solution by Taavet
Kalda, grading schemes by ....
i) (2.5 points) The farther away a planet
is from the host star, the bigger its orbital
period. In a fixed period, we then expect
planet A to make more rotations around the
star than planet B. The wobble effect comes
from both the star and the planets orbiting
around their common barycentre (centre of
mass). The effect of one planet makes the
star undergo a circular motion with some ra‐
dius x and frequency ω. The effect of two
planets is additive, so the overall motion is
the sum of two circular motions with radius’
xA andxB withdifferentangularfrequencies
ωA and ωB.
In the figure, we find the centre of cir‐
cular motion of the star from the centre of
the envelope (by for example using a ruler
to find the diameter and then the centre‐
point). From there, we measure that lower
frequencycomponentcoversanangleofα =
290° within the measurement period t =
10yr. The higher frequency component, in
the meantime, undergoes 7.5 full rotations
with respect to the lower frequency compon‐
ent. Hence, ωBt = α and (ωA − ωB)t/(2π) =
7.5. This yields
TB =
2π
ωB
=
2πt
α
= 12.4yr,
TA =
2π
ωA
=
1
1
TB
+ 7.5
t
= 1.20yr.
Grading:
• Realising that the higher frequency com‐
ponent is due to planet A and the lower
frequency component is due to planet B
(0.5pts)
• The higher frequency component under‐
goes 7.5 full rotations (0.4pts)
• The lower frequency component covers
an angle of 290°, or alternatively, 7.5
9 · 2π
(0.4pts)
• Finding TA (0.8pts)
• Finding TB (0.4pts)
ii) (2.5 points) From the figure, we meas‐
ure the extrema of the distance of the star
from the origin as l1 = 1.6 × 105
km and
l2 = 2.8 × 105
km. The extrema corresponds
to when the two circular motions are point‐
ing in the same direction or the opposite dir‐
ection. In other words, the distances are
l1 = xB − xA and l2 = xB + xA. Rearran‐
ging, xA = (l2 − l1)/2 = 6 × 104
km and
xB = 2.2 × 105
km. To infer the masses, we
need to study the dynamics of the system.
First, we can assume that the semi‐major
axis of the planets are much bigger than x.
Indeed, aA/xA = 4000 ≫ 1. Either from
force balance between gravity and centrifu‐
gal force, or through Kepler’s Third Law, we
have 4π2
/(GM) = T2
A/a3
A so the star’s mass
is
M =
4π2
a3
A
GT2
A
= 4.4 × 1030
kg.
The planet’s mass can be inferred from
the property that planet and star rotate
around their common centre of mass:
MxA = mAaA. Hence,
mA = M
xA
aA
= 1.2 × 1027
kg.
Grading:
• Expressing 4π2
/(GM) = T2
A/a3
A (0.6pts)
• Finding M (0.4pts)
• Realising that the position of the centre of
massofAandM isconserved(withrespect
to B) (0.5pts)
• Inferring equation MxA = mAaA (0.5pts)
• Finding xA from the trajectory (0.3pts)
• Finding mA (0.2pts)
iii) (1 point)Once again, from Kepler’s Third
law, we get the semi‐major axis of planet B
to be
aB =
3
√
T2
BGM
4π2
= 1.0 × 109
km.
Similarly to before, we get the mass as
mB = M
xB
aB
= 9.3 × 1026
kg.
Both of the planets are gas giants, similar
to Jupiter (0.63 and 0.50 Jupiter masses re‐
spectively). Thismakessense,asthismethod
is more sensitive to higher mass exoplanets
with bigger orbits.
Grading:
• Finding aB (0.5pts)
• Finding mB (0.5pts)
iv) (2 points) The equations describing the
system still hold, but reading off the fre‐
quencies is trickier. Nevertheless, we can
still locate the origin and measure the ex‐
treme distances l1 = 1.20 × 105
km and
l2 = 1.85 × 105
km. We also note that the
higher frequency component (correspond‐
ing to planet A) has a bigger radius than the
lower frequency one (planet B). Hence, l1 =
xA − xB and l2 = xA + xB, and so xA =
(l1 +l2)/2 = 1.5 × 105
km, xB = (l2 −l1)/2 =
3.3 × 104
km.
The higher frequency component does 3
full turns and, measuring from the figure,
an extra 280° on top of it. This gives TA =
t/(3 + 280°/360°) = 2.65yr. The lower fre‐
quency component, meanwhile, starts and
ends from the farthest away point, and os‐
cillates through the closest point 3 times.
Hence it goes through 3 full rotations. Thus,
(
2π
TA
−
2π
TB
)
t = 6π,
and so
TB =
1
1
TA
− 3
t
= 12.9yr.
By using the equations from the previous
parts, we get
M =
4π2
a3
A
GT2
A
= 6.8 × 1029
kg,
mA = M
xA
aA
= 5.1 × 1026
kg,
mB = MxB
3
√
4π2
T2
BGM
= 3.9 × 1025
kg.
The first planet is once again a gas giant
(0.26 Jupiter masses) while the second one is
a “Super‐Earth” (6.4 Earth masses).
Grading:
• Finding TA (0.4pts)
• Finding TB (0.4pts)
• Finding M (0.3pts)
• Finding mA (0.4pts)
• Finding mB (0.5pts)4. BLACĸ BOX (12 points) — Solution by Jaan
Kalda, grading schemes by ....
Since there can be elements causing in‐
ertia — LR chains or RC chains, one has to
be patient when making measurements and
wait for a long enough time to let the system
relax towards an equilibrium. There are two
types of measurements which can be done.
1)Afterkeepingtheterminalsshort‐circuited
for a long enough time, release the short‐
circuting wire and measure the voltage V as
a function of time:
V (mV) t (s) V (mV) t (s)
0 1073 90 2977
5 1317 100 3049
10 1564 110 3073
15 1765 120 3091
20 1950 130 3116
25 2109 149 3124
30 2248 159 3131
40 2465 160 3124
50 2629 170 3131
60 2751 180 3135
70 2850 210 3145
80 2921 400 3155
These data are plotted as ln[(3155mV −
V )/mV] versus time. One can see a fairly
nice linear plot which means that voltage
is approaching exponentially the limit value
3155mV. The characteristic time can be
found as the reciprocal of the trend line (we
discard the rightmost data points as there,
the voltage changes are small, so the relat‐
ive errors are big), As a result we obtain τ1 =
34.5s.
t(s)
0
2
4
6
8
0 50 100 150 200
ln(V/mV)
2) After keeping the terminals open for a
longenoughtime,releasetheshort‐circuting
wire and measure the current I as a function
of time:
I (μA) t (s) I (12.3μA) t (s)
0 978 50 351
5 794 60 345
10 636 70 341
15 535 80 340
20 468 90 339
25 425 100 339
30 397 110 339
40 365 120 339
These data are plotted as ln[(I −339μA)/μA]
versus time. One can see a fairly nice linear
plot which means that voltage is approach‐
ingexponentiallythelimitvalue339μA. The
characteristic time can be found as the re‐
ciprocal of the trend line (we discard the
rightmost data points as there, the voltage
changes are small, so the relative errors are
big), As a result we obtain τ1 = s.
0
1
2
3
0 5 10 15 20 25 30 40 50 60 70 80
t(s)
ln(I/μA)
Thesedatameanthatinside,thereshould
be a battery to maintain a voltage, a capa‐
citor to provide inertia — exponential decay
towards an equilibrium, and resistors. In
principle, one should consider also an op‐
tion where there is an inductor instead of
the capacitor; however, it can be excluded
by various ways. First, it is not realistic to
obtain long enough relaxation times with an
inductor. Indeed, already the internal res‐
istance of the ammeter is around a hundred
of ohms, and characteristic time of about
20 seconds would mean that the inductance
should be around kilohenry — even if such
inductor exists, it would not fit into the box.
Second, if there were a big inductor inside,
it cannot be a lone element connected to one
of the terminals. Indeed, when the ammeter
isconnectedtotheterminals,anon‐zerocur‐
rent appears immediately, instead of starting
from zero (what would be the case if there
were an inductor). So, it must form a closed
loop with a resistor and a battery. However,
in that case, if we keep the terminals short‐
circuitedforawhileandthendisconnect,the
voltage at the terminals would jump discon‐
tinuosly as the current through one of the
resistors would need to jump (to keep the in‐
ductor current continuous).
The first consideration is that there need
to be two resistors because there are two dif‐
ferent characteristic times (one resistor with
two capacitors can produce still only one
characteristic time, because the capacitors,
either in parallel or in series, would com‐
bine effectively into one single capacitor).
Next, the restriction (I): the battery and the
capacitor cannot be in series, because they
would combine effectively into a single ca‐
pacitor. Second, the restriction (II): the bat‐
tery and the capacitor cannot be in paral‐
lel, either, because they would combine ef‐
fectively into a single battery. Then, restric‐
tion (III): neither capacitor nor battery can
beconnecteddirectlytotheoutputterminals
as in one case, the ammeter current would
asymptotically approach zero when connec‐
ted to the output, and in the other case,
theoutputvoltagewouldbe alwaysconstant.
This excludes automatically many possibilit‐
ies, see below. Also, (IV): there should not be
a direct path from one terminal to the other
goingonlythroughthecapacitorandthebat‐
tery as in that case, ammeter current would
be very big, and the corresponding charac‐
teristic time would be very short. Finally,
(V): the capacitor can be only in a parallel
connection with something, because other‐
wise, there would be no capacitor current
when a voltmeter is connected to the output,
hence, the voltage would remain constant.
Topologically, there are options (a) all in
parallel — excluded by (I); (b) all in series —
excluded by (II); (c) three elements in paral‐
lel, all together in series with the fourth ele‐
ment — excluded by (I) and (IV); (d) 3+1 par‐
allel chains (i.e. 3 elements in one chain,
and1elementintheotherchain)—excluded
by (III) and (I); (d) one parallel pair in series
with another parallel pair — excluded by (IV)
and (II); (e) 2+2 parallel chains; (f) 1+2 par‐
allel chains, all together in series with the
fourth element; (g) a pair in parallel, all to‐
gether in series with the third and fourth ele‐
ment.
With the option (e), battery and capacitor
need to be in different chains, due to (I), this
is the circuit A.
With the option (g), capacitor must be in
the parallel pair with a resistor, due to (V)
and (II), this is the circuit B.
With the option (f), due to (V), the ca‐
pacitor needs to be in the parallel section,
either (f1) as a single element, or (f2) paired
in series with a resistor, because of (I). In the
case of (f1), (III) tells us that battery must be
in the other parallel section (in series with
a resistor), this is the circuit C. In the case
of (f2), combinatorics tells us that there are
two positions for the battery — either as the
single element in series which is the circuit
(D), or in parallel with the capacitor‐resistor
series connection. The latter option, how‐
ever, means that the battery would always
maintain the same voltage on the capacitor‐
resistor series connection, i.e. the output
voltage and current would remain always
constant.
Circuit (A):
Circuit (B):Circuit (C):
Circuit (D):
In all four cases, the voltmeter reading,
when connected to the output, tends asymp‐
totically towards the electromotive force of
the battery, so E = 3.155V.
For cases (A) and (D), the initial ammeter
reading is I0 = E(R−1
1 + R−1
2 ) = 978μA
and the asymptotic ammeter reading is If =
E/R2 = 339μA; based on that we can cal‐
culate R2 = E/If = 9.31kΩ and R1 =
(I0/E − 1/R2)−1 = 4.94kΩ. For those cases,
the initial voltage Ui = ER1/(R1 + R2), so
we can check if everything fits: we obtained
R1/(R1+R2) = 0.347,andUi/E = 0.340; this
is a fit within the uncertainties.
For the very same cases, τ1 = (R1 +R2)C
so that C = τ1/(R1 + R2) = 2.42mF. Altern‐
atively we can calculate the same thing us‐
ing τ2 = R1C, hence C = τ2/R1 = 2.50mF.
Again, there is a match of results within the
uncertainties.
Finally, for (B) and (C), the initial am‐
meterreadingisI0 = E/R1 = 978μAandthe
asymptoticammeterreadingisIf = E/(R1 +
R2) = 339μA; basedonthatwecancalculate
R1 = E/I0 = 3.23kΩ and R2 = (If/E −R1 =
6.08kΩ. Theexpressionfortheinitialvoltage
remains unchanged, Ui = ER1/(R1 +R2), so
we can again check if everything fits: we ob‐
tained R1/(R1 + R2) = 0.347, and Ui/E =
0.340; this is a fit within the uncertainties.
Now, τ1 = R2C so that C = τ1/R2 =
5.67mF. Alternatively we can calculate the
same thing using τ2 = R1R2C/(R1 + R2),
hence C = τ2(R1 + R2)/(R1R2) = 5.84mF.
Again, there is a match of results within the
uncertainties.
Grading:
• Black box circuit diagram is correct:
– The initial voltage U0 ̸= 0, which means
that the circuit contains battery of some
sort (0.5pts)
– The changing current suggests that the
circuit contains a capacitor or an in‐
ductor (0.3pts)
– The use of an inductor is unrealistic for
the provided black box, consequently
the circuit must contain a capacitor
(0.2pts)
– The discharging of the capacitor is not
instantaneous, so there must be a res‐
istor between the capacitor and output
terminals (1pts)
– The recharging of the capacitor is not
instantaneous, so must be a resistor
between the capacitor and the battery
(1pts)
– Correct circuit diagram is drawn (2pts)
– Additional notice: if the suggested cir‐
cuit is such that one element would be
masked by another element (e.g. a ca‐
pacitor is parallel to a battery in which
case the capacitor would be always fully
chargedandundetectable,oracapacitor
is series with a battery in which case the
battery voltage would be compensated
by the capacitor and undetectable), the
marksforcircuitwillbereducedby50%.
• Electromotive force of the battery is found
correctly based on the drawn circuit dia‐
gram (1pts)
• Theresistanceofbothresistorisfoundcor‐
rectly (circuit diagram dependent):
– When the capacitor is fully charged the
current doesn’t flow through it, or in
other words RC = ∞; either sum of two
resistances or resistance of one of the
resistors can be found (1pts)
– Otherwise, when the capacitor is dis‐
charged RC = 0 in the first moments
after the recharging has begun; either
resistance of one of the resistors can be
found or the equation for both resistors
can be written (1pts)
– R1 is found correctly (0.5pts)
– R2 is found correctly (0.5pts)
Note: plausible resistance values are:
9.31kΩ, 4.94kΩ, 3.23kΩ, 6.08kΩ.
• The capacitance of the capacitor is found
correctly:
– Two tables of both voltage during the
charging and current during the dis‐
charge are present; give half, if only one
table is present (1.2pts)
– The measurements of voltage or current
are presented graphically (0.8pts)
– The method to find the capacitance is
found (0.8pts)
– Correct capacitance C ≈ 2.5mF or C ≈
5.7mF is found (0.5pts)
Note: thesolutionthatusesadirectmeas‐
urement of resistance with a multimeter to
be given 0, since the circuit contains a bat‐
tery; the solution that uses a direct measure‐
ment of capacitance with a multimeter to be
given 0.2, since the capacitance is outside of
limits of the provided multimeter.NORDıC‐BALTıC PHYſıCſ OLYMPıAD 2023
5. FORCE ſENſOR (5 points) — Solution by
Päivo Simson, grading schemes by ....
i) (2 points) To find the elongation ∆l, we
need to know the curvature radius r of the
beam at x = L/2. The torque created by the
force F at an arbitrary point x is F · (L − x).
This must be balanced by the bending mo‐
ment M(x) of the beam. In the middle of the
beam we have
M =
EI
r
= F
L
2
=⇒ r =
2EI
FL
.
It is easy to see that if the upper wires elong‐
ate by ∆l, the lower ones shorten by the
same amount. Now we need to relate the
curvature radius r with the elongation ∆l.
The arc length of a circle is ∆s = r∆ϕ.
Knowing this, we have from the above figure
l + ∆l =
(
r +
h
2
)
∆ϕ,
l − ∆l =
(
r −
h
2
)
∆ϕ.
By dividing the above equations, we get an
equation for ∆l that is easily solved:
l + ∆l
l − ∆l
=
2r + h
2r − h
=⇒ ∆l =
lh
2r
.
Combining this with the expression for r we
have
∆l =
FLlh
4EI
.
Grading:
• Correct moment equation EI/r = FL/2 at
the center of the beam (0.6pts)
• Correctgeometricrelationsforl±∆l based
on ∆s = r∆ϕ (0.6pts)
• correctly solving for ∆l (0.6pts)
• correctly expressing the final answer
(0.2pts)
ii) (1 point)Let ρ and S be the resistivity and
the cross‐sectional area of the wires, respect‐
ively. TheinitialresistanceR0 ofallthewires
is
R0 =
ρl
S
=
ρl2
lS
,
where lS is the volume of the wire that re‐
mains constant during the deformation. As‐
suming ∆l << l we have
R1 =
ρ(l + ∆l)2
lS
≈
ρl(1 + 2∆l/l)
S
= R0+∆R,
R2 =
ρ(l − ∆l)2
lS
≈
ρl(1 − 2∆l/l)
S
= R0−∆R,
where
∆R =
2ρ∆l
S
= 2R0
∆l
l
= R0
FLh
2EI
.
Grading:
• R = ρl/S (0.3pts)
• Correct approximations (0.3pts)
• Correctly calculating the resistances and
thechangeinresistanceusingtheabovere‐
lations (0.4pts)
iii) (2 points)The total resistance R of the cir‐
cuit is
R =
(R1 + R2)(R1 + R2)
2R1 + 2R2
=
R1 + R2
2
Since both sides of the circuit have the same
total resistance R1 + R2, the current is also
the same. The voltmeter reading is therefore
V =
I
2
R2 −
I
2
R1 =
U
2R
(R1 − R2) =
= U
R1 − R2
R1 + R2
= U
∆R
R0
= U
FLh
2EI
.
From this, we finally have
F =
2EIV
LhU
.
Grading:
• Correct total resistance of the Wheatstone
circuit (0.5pts)
• Assumes that the resistance of the Volt‐
meter is infinite (0.5pts)
• Correctly calculating the potential differ‐
ence V as a function of the change in the
resistance (0.5pts)
• Expressing the final answer in the form
given in the solution (0.5pts)
6. STRıNG‐COUPLED MAſſEſ (5 points) —
Solution by Aleksi Kononen and Jaan Kalda,
grading schemes by Aleksi Kononen.
i) (2 points) For in‐phase oscillations, the
stringconnectingthemassesalwaysremains
paralleltothex‐axis. Inthatcase,themotion
is confined to the yz‐plane and is identical to
apendulumwithlengthrsinθ hungfromthe
axis of rotation:
ω1 =
√
g
rsinθ
Grading:
• Stating
∑
Fx = 0, or stating that the con‐
nectingstringremainsparalleltothex‐axis
(0.6pts)
• Realising the effective pendulum length is
rsinθ, i.e. the axis of rotation is the line
connecting the wall points (0.8pts)
• Correct expression for ω1 (0.6pts)
ii) (3 points) Now suppose one of the balls
moves along the y axis to a distance ym and
the other ball — by −y. The length of the ho‐
rizontal string remains constant, hence y2
+
(r − x)2
= r2
, where x denotes the displace‐
ment of the ball in x‐direction. For small
displacements, we can neglect the smallest
term x2
, hence x = y2
/2r. The length of the
slanted string remains also constant, hence
(rsinθ−z)2
+(rcosθ+x)2
+y2
= r2
, where
z denotestheverticaldisplacement. Neglect‐
ing here the smallest terms z2
and x2
, we ob‐
tain 2rz sinθ = 2rxcosθ+y2
= y2
(1+cosθ),
hence
z =
y2
2r
1 + cosθ
sinθ
.
Now we can write down energy conservation
law: 1
2ẏ2
+ gz = const, where dot denotes
the time derivative. Differentiating this over
time we obtain
ÿ = −
gy
r
1 + cosθ
sinθ
so that
ω2 =
√
|ÿ/y| = ω1
√
1 + cosθ.
Grading:
• Equation for a cylinder surface (0.4pts)
• Equation for a sphere surface (0.4pts)
• Both surface equations correct and co‐
ordinates consistent (0.2pts)
• Realising x2
‐ and z2
‐terms are negligible,
and not discarding y2
(0.2pts)
• Solving z in terms of y (0.5pts)
• Energy conservation between z and ẏ
(0.3pts)
• Solving relation between ÿ and y (0.6pts)
• Correct expression for ω2 (0.3pts)
• ω2 correctly in terms of ω1 (0.1pts)
Alternative solution: Let one of the
masses (mass A) be displaced by y and the
other by −y. Let T′
be the tension in the
two outermost strings (equal magnitudes by
symmetry) and T in the connecting string.
Newton’slawalongthey‐axisformassAthen
yields
−T′ y
r
− T
y
r
= mÿ,
i.e.
ÿ = −
T′
+ T
mr
y.
Without oscillations, T′
0 = mg/sinθ and
T0 = T′
0 cosθ. Let us write T′
= T′
0 + ∆T′
and T = T0 + ∆T, i.e.
T′
+ T = mg
1 + cosθ
sinθ
+ ∆T′
+ ∆T.
Let us make some estimates. Clearly, |∆T| ∼
|∆T′
|. The maximum of ∆T′
occurs when
the mass swings by its lowest point with ve‐
locity ẏ, where its trajectory has a radius of
curvature R ∼ rsinθ. Moreover, small nor‐
malmodeoscillationsimplyy = Acosω2tfor
some amplitude A ≪ rsinθ, i.e. |ẏ| ≤ Aω2.
Finally, assume ω2 = kω1 holds for some
k ∼ 1. We have
|∆T′
| ∼
mẏ2
R
∼
mk2
A2
g
r2 sin2
θ
= k2
mg
(
A
rsinθ
)2
,
i.e. quadratically smaller in (A/rsinθ) than
T′
0. Thus, T′
+ T ≈ mg1+cosθ
sinθ and
ω2 =
√
T′ + T
mr
= ω1
√
1 + cosθ.(The result shows k ≤
√
2, i.e. the assump‐
tion holds.) Grading:
• Forceequation,eitheralongy orfullvector
form (0.4pts)
• Solving relation between ÿ and y in terms
of tension forces (0.4pts)
• Unperturbed values for T′
and T (0.4pts)
• Reasonable estimate of |∆T′
| (0.6pts)
• Showing |∆T′
| is quadratically smaller
than T′
(0.8pts)
• Correct expression for ω2 (0.3pts)
• ω2 correctly in terms of ω1 (0.1pts)
• Remark: Accept solution with assumption
∆T′
/T′
≪ 1 without estimates
7. A PACĸ OF PAPERſ (8 points) — Solution by
Taavet Kalda, grading schemes by Martin Rahe,
Isak Fleig and Joonas Kalda.
i) (2 points) Clearly, when u is very small,
thepackgetsdraggedalong withthe bottom‐
most sheet, so the speed v of the pack starts
from 0, and ends up with u. Further, there
is almost no slippage between the pack and
thebottomsheet. Theaccelerationofthetop
sheet is then gµ as long as its being acceler‐
ated, and 0 otherwise. The acceleration lasts
for a duration of u/(gµ).
Conversely at very large v, the bottom‐
most sheet gets pulled out so fast that the
pack ends with very little speed. As the
sheets gets pulled from under, the accel‐
eration of the pack drops from u/(gµ) to
−u/(gµ) over a duration of L/u.
Grading:
• Correct initial accelerations (0.2pts)
• Correct final accelerations (0.2pts)
• Correct durations of acceleration (0.4pts)
• Correct graph shapes (0.6pts)
• Physical explanations for the graph shapes
(0.6pts)
(half of the points in each subsection are
given for part (a) and half for part (b))
ii) (3 points) The problem is most conveni‐
ently analysed in a frame moving with the
bottom‐most sheet with speed u. In the new
frame, v′
= v − u and x′
= x − ut. Let
the centre‐point of the bottom‐most sheet
be x′
= 0 and let’s track the movement of
the pack using its right‐most edge which will
start at x′
= L/2 with a speed of v′
= −u
and lose contact with the bottom sheet at
x′
= −L/2.
When the pack is in contact with the bot‐
tom sheet and in the process of slipping, the
pack has a normal force of N1 = mg(L/2 +
x′
)/L with the bottom‐most sheet, and N2 =
mg(L/2−x′
)/Lwiththetable. Frictionforce
will then result in a net force of F = N1µ −
N2µ = 2mgµx′
/L. The acceleration of the
pack is thus a′
= 2gµx′
/L. Note that this
equation is that of a spring with a negative
spring coefficient k = 2gµ/L (which we will
still denote with a positive k value, only that
the force repels from the equilibrium). Nev‐
ertheless, conservation of energy still holds,
v′2
/2 − kx′2
/2 = const. The most critical
point to overcome is at x′
= 0 (after that the
force starts helping the pack), which makes
sense because then most of the bottom‐most
paper is out from underneath the pack, and
the friction force from the table is dominant.
The condition forthis is simplyv′2
−kx′2
> 0
or in other words, u2
−kL2
/4 > 0. This gives
umin =
√
kL
2
=
√
gµL
2
.
Grading:
• switching to the reference frame of the
bottom‐most sheet (0.4pts)
• Correct normal forces with bottom‐most
sheet and table (0.6pts)
• Correct net force on pack (0.2pts)
• Identifying the spring coefficient (0.3pts)
• Conservation of energy equation (0.5pts)
• Identifying critical point x = 0 (0.6pts)
• Deriving umin (0.4pts)
iii) (1 point) As before, conservation of en‐
ergyholds. Thismeansthatwhenthebottom
sheetisseparatedatx′
= −L/2,thepotential
energy is the same as when x′
= L/2 so the
speedofthepackisstill−u. Surprisingly,the
final speed of the pack in the table frame is
therefore 0.
Grading:
• Potential energy when the sheet is separ‐
ated is the same as when Sandra starts
pulling (0.6pts)
• Correct final speed in the bottom‐most
sheet reference frame (0.2pts)
• Correct final speed in the table reference
frame (0.2pts)
iv)(2points)Thegoalistofindtheoveralldis‐
tance by which the pack slides in the table
frame. Equivalently, we can find the dura‐
tiont1 forwhichitslides, becausethenitwill
have shifted by −L in the paper frame, and
the paper frame has shifted by ut1 with re‐
spect to the table frame. The overall shift is
then l = ut1 − L.
The equation of motion for the pack was
a′
= kx′
with k = 2gµ/L. The solution
for this is, instead of sine and cosine, hyper‐
bolic sine and cosine. Seeing from the ini‐
tial conditions, a possible solution could be
x′
= x0 sinh(ω(t − ∆t)). This indeed gives
v′
= ωx0 sinh(ω(t − ∆t)) and a′
= ω2
x′
such that ω =
√
k satisfies the equation
of motion. We find the values for x0 and
∆t from the initial conditions at t = 0 so
that x′
= −x0 sinh(ω∆t) = L/2 and v′
=
x0ω cosh(ω∆t) = −u. From here, we get
∆t =
1
ω
tanh−1
(
Lω
2u
)
,
x0 = −
L0
2sinh(ω∆t)
.
Now, from the form of x′
, it’s clear that it will
pass x′
= 0 at t = ∆t, and reach x′
= −L/2
at t = 2∆t. Therefore, t1 = 2∆t and the min‐
imal distance between the paper pack and
the edge has to be
l = ut1 − L =
2u
ω
tanh−1
(
Lω
2u
)
− L
= L
(
2u
Lω
tanh−1
(
Lω
2u
)
− 1
)
.
Grading:
• Stating the formula l = ut1 − L (0.2pts)
• Stating the equation of motion a′
= kx′
(0.2pts)
• Solution for the equation of motion
(0.4pts)
• Correct values for x0 and ∆t (0.6pts)
• Justification for t1 = 2∆t (0.3pts)
• Correct result for the minimal distance l
(0.3pts)‐
8. CONNECTEDCHARGEſ (8points) —Solution
byJaanKalda,gradingschemesbyJānisCīmurs.
i) (2 points) As the ball A enters the elec‐
tric field, the force qE is exerted on it, hence
the acceleration of the system of two balls is
a1 = qE/2m; the acceleration remains con‐
stant until the ball A exits the field. This
will happen when L = a1t2
1/2, hence t1 = √
2L/a = 2
√
Lm/qE At that moment, the
acceleration of the ball A becomes zero, but
at the very same moment, ball B enters the
field. The force qE exerted on it will give it
twice as big an acceleration as before, a2 =
qE/m, and the string becomes loose. So, the
speed of the ball B is now bigger than that
of the ball A, and so they will eventually col‐
lide. The time t2 spent by the ball B in the
field can be expressed as t2 = (vf − vi)/a2,
where vi =
√
qEL/m is its initial speed, and
vf =
√
3qEL/m — the final speed. So, t2 = √
Lm/qE(
√
3−1). At the moment when the
ball B exits the field, the distance between
the balls is s = L − (vf − vi)t2/2 = vit2 =
L(
√
3 − 1), and the difference between the
velocities of the balls is ∆v = vf − vi = √
qEL/m(
√
3−1),hencethetimeremaining
until the collision t3 = s/∆v =
√
Lm/qE.
Thus, the moment of collision t = t1 + t2 +
t3 =
√
Lm/qE(
√
3 + 2).
Grading:• Initially both charges move with the same
acceleration (0.2pts)
• When A escapes the field region A moves
with constant speed, B moves with higher
acceleration (0.2pts)
• When B escapes, both move with constant
speed (0.1pts)
• Correct a1 (0.2pts)
• Correct t1 (0.2pts)
• Correct a2 (0.1pts)
• Correct vi (0.2pts)
• Correct vf (0.2pts)
• Correct t2 (0.2pts)
• Correct s (0.2pts)
• Correct t3 and t (0.2pts)
ii) (2 points) First solution: The centre of
mass moves with constant acceleration a1 =
qE/2m, and has travelled distance sCM =
L−l/2+l/(2
√
2) = 0.8200L = a1T2
/2,hence
T = 1.811
√
mL
qE .
Grading:
• Use sCM = a1T2
/2 for centre of mass
(0.5pts)
• Correct a1 (0.5pts)
• Correct sCM (0.6pts)
• Correct T (0.4pts)
• Ifyouassumesmallangleoscillationtocal‐
culatetimenecessaryforthestringtoalign
with the x‐axis. (up to 1.4pts)
iii) (2 points) First solution: Due to the con‐
servation of y‐directional momentum, the y‐
components of the balls are always equal. At
t = T, the string is parallel to the x‐axis;
since it is not stretchable, x‐components of
the balls are equal, too, at that moment.
Hence,thespeedsareequal,andenergycon‐
servation law states EqL = mv2
so that v = √
qEL
m .
Grading:
• Using energy conservation law (1.0pts)
• Kinetic energy of both masses (0.6pts)
• Work done by electric field (0.2pts)
• Correct v (0.2pts)
Alternative solution: The time period
0 < t < T is most conveniently analysed
in the centre‐of‐mass frame. In that frame,
there is a force of inertia equal to Fi =
−ma1 = −qE/2. Hence, both balls perform
non‐linear oscillations around the centre of
mass (it is nonlinear because the amplitude
is not small). The speed of the ball at t = T
can be found from the energy conservation
law. At t = 0, the speed is zero so that the
full energy is due to the potential energy in
the homogeneous force field qE/2: ∆U =
qE
2 (l
2 − l
2
√
2
) = qEL
8 (2 −
√
2) =
mv2
y
2 , hence
v2
y = qEl
4m (2 −
√
2) = 0.1800qEL
m . This gives
us the velocity component in the y‐direction;
once we return to the laboratory frame, we
need to add the x‐component of the frame’s
velocity vx = a1T = qE
2m1.811
√
mL
qE =
0.9055
√
qEL
m so that v =
√
v2
x + v2
y =
√
qEL
m .
Grading:
• Horizontal speed vx (0.4pts)
• Useenergybalanceorsomethingsimilarto
find rotational speed vy (0.4pts)
• Correct distance travelled (0.6pts)
• Rotational speed vy (0.4pts)
• Pythagorean theorem (0.2pts)
iv) (2 points) For the string to be parallel to
the x‐axis, the system must perform n + 1
2
half‐periods, where n is an integer. Since
now the amplitude is small, the oscillations
are harmonic, and the circular frequency
ω =
√
qE
ml (we can use the formula for a
pendulum of length l/2 and equivalent grav‐
ity field g = qE/2m). So, the travel time
must be τ = π
√
ml
qE (n + 1
2). On the other
hand, we can use the result from task ii: τ = √
ml
qE
√
4λ − 2 + 2cosϕ, where λ = L/l < 1
and cosϕ ≈ 1. So, π(n + 1
2) =
√
4λ. Since
λ < 1, this equality can only be satisfied
with n = 0, hence λ = π2
16 = 0.6169 so that
l = L/λ = 1.6211L.
Grading:
• Correct circular frequency (0.6pts)
• If circular frequency deviates from the
right by factor
√
2 (0.2pts)
• Correct rotation time with n (0.6pts)
• Correct rotation time without n (0.2pts)
• Correct travel time from ii (0.4pts)
• Derivation of l (0.4pts)
9. SURFACE TENſıON (10 points) — Solution
by Jaan Kalda, grading schemes by ....
i) (3 points)The focal length can be found by
adjusting the height of the plate holder; ad‐
just the height so as to achieve a sharp im‐
age of the ceiling lights at the screen (either
a sheet of paper beneath the holder, or the
surface of the cap inside the holder. The
height can be measured precisely by caliper.
The diameter of the drop can be also meas‐
ured by caliper, but it is more convenient to
put the glass plate on top of the graph paper
and take the diameter reading from the mil‐
limeter grid of the graph paper. A possible
pair of data is f = 15.9mm and d = 5.8mm.
Grading:
• Correct idea of searching for the focal
length by adjusting the height of the plate
holder in order to achieve a sharp image of
the ceiling lights (0.7pts)
• student takes into consideration that the
lightsourceisatafinitelengthormentions
in solution that it can be considered that
the light source is at a very large distance
away. (0.3pts)
• Correctly taken height measurements with
a caliper (0.5pts)
• Correctly taken diameter measurements of
the drop using the caliper or using the mil‐
limetergridonthegraphingpaper(0.5pts)
• The results should be roughly f = 15.9mm
and d = 5.8mm, but should later give ac‐
curate α value. (1pts)
ii) (2 points) Lensmaker’s equation can
be used to relate the focal length to the
curvature radius:
1
f
=
n − 1
R
⇒ R = f(n − 1) ≈ 5.3mm.
Those who don’t know the lensmaker’s for‐
mula can derive it easily from Snell’s law
by considering a beam which falls onto the
lens parallel to the optical axis, and by using
small angle approximation, sinx ≈ x. The
water‐glass contact angle can be found using
trigonometry:
α = 90° − acos
d
2R
≈ 33.2°
Grading:
• Correctideaofcalculatingtheradiususing
the Lensmaker’s equation. Other methods
(for example using direct thickness meas‐
urement) only gives max 0.3 pts. (0.5pts)
• The result should be around R = 5.3mm,
but should later give accurate α value.
(0.5pts)
• Correct idea for determining the water‐
glass contact angle using previously calcu‐
lated values d and R. (0.5pts)
• The result should be around α = 33.2°.
Give max points for α = 28°−38°. (0.5pts)
iii) (3 points)Increase the surface area of wa‐
ter covering the glass plate as much as pos‐
sible — in that way the mistake in calcula‐
tions introduced by the edge effects (the wa‐
ter surface is not flat near the edges of the
water pool) is minimised. It is safe to let
the water reach the edges of the glass plate
as long as there is a small part of the peri‐
meter where it does not reach the edge —
this guarantees that the water surface at the
edges forms with the horizon an angle equal
to the contact angle. However, you shouldn’t
letthewaterreachtheedgesoftheplateover
its entire perimeter as in that case, the angle
formed by the water surface can become lar‐
ger than the contact angle, due to the fact
that at the edge, the direction of the glass
plate’s surface normal changes discontinu‐
ously; this would result in a thicker water
layer (this cannot happen if there is a part of
the perimeter still not touching the edge as
in that case, instead of increasing the depth,
thewaterwouldspreadtofilltheunoccupied
parts of the plate). It is also recommended to
avoid water reaching the matte area as that
part is not guaranteed to be clean and may
have a different contact angle value. With
water volume V = 2.00ml, the water fills al‐
most the entire glossy part of the plate. By
puttingtheglassplateontopofthegraphpa‐
per, one can count the squares of the grid,
resulting in A = 12.7cm2
. The thickness of
water layer is found as t = V /A ≈ 1.57mm.
Grading:
• Student understands that it is necessary to
maximize the surface area of the water.
(0.5pts)
• Student understands that the area of the
water should not extend to the edges of the
glass plate. (0.5pts)
• If measurement of water volume V <
2.5ml. (0.5pts)
• If measurement of the surface area of the
water. A < 13.5cm2
(0.5pts)
• Correct formula to determine thickness ofthe water layer. (0.5pts)
• The result should be around t = 1.57mm.
Givemaxpointsfort = 1.45mm−1.70mm.
(0.5pts)
• if the thickness is measured directly max
receivable points are 0.5 for a reasonable
result and 0.5 pts for a reasonable method
if described as this has very poor precision
because the caliper can not touch the wa‐
ter surface and the water surface has poor
visibility.
iv) (2 points)Total potential energy of the wa‐
ter is U = σA(1 − cosα) + 1
2V ρgt. If we plug
in A = V /t, we obtain
U = V
(
σ
1 − cosα
t
+
ρgt
2
)
.
Its minimum is easily found by equating
dU/dt = 0, resulting in
σ =
ρgh2
2(1 − cosα)
≈ 0.077N/m.
Grading:
• Surface energy is shown in the expression
for total potential energy. (0.3pts)
• Ugw is taken into consideration in the
expression for total potential energy.
(0.4pts)
• Potention energy is shown in the expres‐
sion for total potential energy. (0.3pts)
• Minimum total potential energy is cor‐
rectly found. (0.6pts)
• The result should be around σ =
0.077Nm−1
. Give max points for σ =
0.060Nm−1
− 0.094Nm−1
. (0.4pts)
