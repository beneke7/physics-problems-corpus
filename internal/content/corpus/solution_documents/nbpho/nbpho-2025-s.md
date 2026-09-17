---
id: solution-document-nbpho-2025-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2025-birds, nbpho-2025-black-box, nbpho-2025-charged-rod, nbpho-2025-evaporation, nbpho-2025-flying-dumbbell, nbpho-2025-hot-plate, nbpho-2025-nuclear-reactors, nbpho-2025-phase-spiral, nbpho-2025-throwing]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2025_S.pdf."
---

NORDıC‐BALTıC PHYſıCſ OLYMPıAD 2025
1. FLYıNG DUMBBELL (10 points) — Solution
by Jaan Kalda, grading schemes by Author 2.
i) (2 points)Free oscillations of the dumbbell
take place around the centre of mass, i.e. the
centre of the rod. Therefore, we need the
stiffness of a half of the rod. This stiffness
is expressed as k = Y π
2 d2
/l. We also need
the mass of the ball m = 4
3πr3
ρ. The oscil‐
lation angular frequency ω =
√
k/m, hence
the period
T = 2π
√
m
k
= 4π
r
d
√
2ρrl
3Y
≈ 0.64ms.
ii) (2 points)The easiest way to estimate is to
notice that a compressed ball is essentially a
compression wave in steel, so the period is
on the order of a wave with wave length 2r.
Knowing that the sound speed cs =
√
Y /ρ,
we obtain τ ∼ 2r/cs = 2r
√
ρ/Y = 4μs. Al‐
ternatively,onecanapproximatetheballasa
springofstiffnessκ ∼ Y r andmass∼ m,and
obtain a similar result with τ ∼ 2π
√
m/κ.
iii) (2 points) When the dumbbell with axis
perpendicular to the wall approaches with
velocity ⃗ v = −vx̂, the front ball impacts
the wall first. Since the impact time (τ ≈
4 µs) is much shorter than the oscillation
period (T ≈ 0.64 ms), the front ball’s velocity
changes almost instantaneously from −v to
+v, while the rear ball continues with velo‐
city −v. Since the balls have equal masses,
the centre of mass remains stationary. The
dumbbell then oscillates about this station‐
ary centre of mass, with the front ball’s velo‐
city following a half‐period sinusoidal oscil‐
lation, changing from +v to −v over a time
interval of T/2. When the velocity reaches
−v,thefrontballimpactsthewallagain,and
its velocity changes instantaneously from −v
to +v. After this second impact, both balls
move away from the wall, with the same ve‐
locity+v,sothedumbbellasawholedeparts
with velocity +v.
t
v
iv) (2 points) During the impact, the front
ball velocity becomes opposite, so the centre
of mass stops (as the rear ball moves still
with its old speed). After the collision, the
front ball obtains a component v cosα along
its axis, and v sinα perpendicular to it. The
former initiates oscillations of period T, and
the latter — a rotation at angular speed
Ω = v sinα/(l/2) = 2v sinα/l
. The ball will hit the wall twice if the rota‐
tion is slow, and only once if the rotation is
fast enough; let us study this in more details.
By time t ≪ 1/Ω, the rotation angle is Ωt,
and the distance of the farthest point of the
ballfromtherotationcentreisl/2−asin(ωt),
where the oscillation amplitude can be ob‐
tainedfromtheenergyconservationlaw,a =
v cosα
√
m/k = v cosα/ω. So, the distance
from the wall of the closest point of the ball
is
l
2
cosα −
[
l
2
− asin(ωt)
]
cos(α + Ωt) ≈
≈
l
2
Ωtsinα + acosαsinωt =
= vtsin2
α +
v
ω
cos2
αsinωt =
=
v
ω
ssin2
α +
v
ω
cos2
αsins, s ≡ ωt.
If this expression becomes negative, there
will be a second collision. So, the cross‐over
value of α = α0 is such that the expression
becomes never negative, hence
tan2
α0 = −min
sins
s
≈ 0.217,
hence
α0 = arctan
√
0.217 ≈ 25°.
Ifwedividethisexpressionbycorresponding
v) (2 points)Using the results of the previous
task, the angular speed after the initial col‐
lision is Ω = 2v sinα/l. The dumbbell ro‐
tates around its centre of mass, longitudinal
oscillations decay by the time of the second
collision. It rotates until the other ball will
hit the wall. At the moment of the second
collision, the velocity of the ball is v sinα,
and its projection to the surface normal of
thewallis−v sin2
α. Duringthesecondcolli‐
sion,thatcomponentsreversessign,andasa
result, both balls have now x‐directional ve‐
locity component v sin2
α. Hence, this is also
the speed of the centre of mass —‐ the speed
with which the dumbbell departs from the
wall.
Grading: (preliminary)
• i)
• explaining that oscillation is symmetric
around centre of the rod (invoking New‐
ton’s third law suffices as well) 0.5pts
• expressing stiffness of half‐rod 0.5pts
• minor mistake made in stiffness expres‐
sion −0.2pts
• mass of the ball m = 4
3πr3
ρ 0.2pts
• Realising that the system can be treated as
a spring 0.3pts
• oscillation period T = 2π
√m
k 0.3pts
• final answer 0.2pts
• ii)
• Solution 1:
• Realise compressed ball is essentially a
compression wave 0.5pts
• Formula for speed of sound 0.5pts
• Relation between time, radius and speed
0.5pts
• Final answer 0.5pts
• Solution 2:
• Realise the ball can be thought of as a
spring 0.5pts
• Estimate spring constant 0.5pts
• Relation between spring constant and time
or frequency 0.5pts
• Final answer 0.5pts
• iii)
• 2 hits 0.4pts
• velocity of front ball flips almost instantan‐
eously 0.4pts
• centre of mass stays at rest 0.4pts
• sinusoidal movement of front ball 0.4pts
• constant velocity −v of front ball after
second hit 0.4pts
• iv)
• Realise it behaves as in previous question
(balls at velocity ‐v and v, CM at rest), but
it now also rotates and oscillates around
centre of mass 0.5pts
• Expression for the angular speed of rota‐
tion 0.3pts
• Expression of the amplitude of oscillations
0.2pts
• Realise the difference in interaction is that
if the first ball bounces once or twice
0.2pts
• Formulaforthedistanceofthefrontballto
the wall over time 0.3pts
• Realise that if the distance is over 0 for all
t > 0 the first ball does not hit the wall
twice 0.2pts
• Finding the critical angle given this condi‐
tion 0.3pts
• v)
• Realise that the dumbbell rotates around
its centre of mass (after first collision)
0.2pts
• Realise that the longitudinal oscillations
have decayed by the time of the second
collision 0.4pts
• Expression for velocity of ball v sinα0.5pts
• Expression for the component of velo‐
city of ball in direction of surface normal
v sin2
α 0.5pts
• Realise the component of velocity of
second ball in direction of surface nor‐
mal is also v sin2
α 0.2pts
• Realise the speed of the centre of mass
v sin2
α 0.2pts
2. EVAPORATıON (7points) —SolutionbyJaan
Kalda, grading schemes by Mattias Bjerklöv,
Marko Tsengov, Eppu Leinonen.
i) (2 points) Water is in a good approxima‐
tion incompressible; hence, when the piston
starts moving, the growing volume must be
filled by gas which can be only the water va‐
pours. Thus, the water starts boiling: these
vapours must be in equilibrium with water,
hence the vapour pressure must be equal to
the pressure inside the piston. We can read
from the graph that at T0, the vapour dens‐
ity is ρ = 420gm−3
; this corresponds to the
pressure p1 = ρRT/µ = 70kPa. With at‐
mospheric pressure p0 = 100kPa, the forceneeded to pull the piston is S(p0 − p1) =
300N.
• Realize that the pressure inside the the cyl‐
inder equals the saturated vapour pressure
of water at temperature T0. 0.8pts
• Read the density ρ from the graph, in the
range [400,440]gm−3
. 0.2pts
• Use the ideal gas law to find an expression
for the pressure p1 at temperature T0.
0.4pts
• Correctexpressionfortheforce: S(p0−p1).
0.4pts
• Correct numerical answer. 0.2pts
ii) (2points)When the piston is pulled by dis‐
placement a, creating new volume Vnew =
S × a, the water partially evaporates to fill
this volume with vapour and the remaining
liquidwatercoolsfromtemperatureT0 toT1.
Themassofvapourmv neededtofillthenew
volume can be calculated using the vapour
density ρ1 = 405gm−3
as mv = Saρ1. For
theheatbalance,theenergyneededforevap‐
oration must come from the cooling of the
remaining liquid water:
mvL = (m − mv) · c · (T0 − T1); (1)
here we have neglected the dependence of L
on temperature, and heat capacity of water
vapours, because µL ≫ 4R(T1 − T0) (but we
have not neglected the work done by piston,
because L is actually the enthalpy of evapor‐
ationalreadyincludesp∆V ). Similarly, since
L ≫ c(T1 − T0), we can neglect mv in the
right‐hand‐side and express
m =
mvL
c(T0 − T1)
=
ρ1SaL
c(T0 − T1)
= 650g. (2)
• Read the vapour density ρ1 from the graph
(ρ1 ∈ [390,420]gm−3
). 0.2pts
• Correct expression for mass of water va‐
pour. 0.3pts
• Correct expression for the latent heat
(mvL). 0.3pts
• Correct expression for heat lost by water
((m − mv) · c · (T0 − T1).) 0.3pts
• Expression for energy conservation.
0.4pts
• Correct expression for mass of water m.
0.3pts
• Correct numerical answer m ∈ [630,680]g
(with correct dimension). 0.2pts
iii) (3 points) At the thermal equilibrium,
there is as much heat flux to the skin as there
is heat loss due to evaporation. The former
(per area) equals to κdT
dx and the latter (per
area) — to −LJm where m is the mass of one
molecule, which we find to be m = µ/NA
to get JµL/NA. Note that the minus sign
comes from the fact that the particles dif‐
fusefromhigherdensityareastolowerdens‐
ity areas. Now from the ideal gas law n =
P/TkB = PNA/TR to get J = −D d
dx
rp
TkB
=
−D d
dx
PNA
RT . Now the pressure of the water
vapour is related to r through P = rp, where
p denotes the saturation pressure of vapour.
So,
κ
dT
dx
= −
DLµ
R
d
dx
rp
T
,
wherep = p(T)denotesthewatervapoursat‐
urationpressureatthelocalairtemperature;
hence by integrating over x we obtain
κ(T − Ts) =
DLµ
R
[
p(Ts)
Ts
−
rp(T)
T
]
,
where the index s denotes quantities evalu‐
ated at the skin surface. Also, we have used
the fact that rs = 1, because at the skin sur‐
face, the air is in direct contact with water
(due to sweating, skin is wet), so that prs =
p(Ts). Substituting ρ = pµ
RT we obtain
ρ(Ts) = rρ(T) +
κ
DL
(T − Ts).
Here we evaluate from the graph rρ(T) =
24.3gm−3
and κ
DL = 0.51gm−3
K−1
. Now
we can draw this straight line onto the graph
provided to find the intersection point at
Ts = 41.5°C.
800
700
600
500
400
300
200
100
0
ρ
g/m3
40 45 55 65 75 70 60 50 80 90 100 105 95 85
T ℃
Grading: (preliminary)
NB! the ρ = pµ/RT substitution can be
done earlier so the schemes below represent
only the relevant observations which can be
done with ρ already. Also equivalent forms
will give points (i.e. if using k and Na instead
of R in the middle steps)
• heat going away from skin (up) = heat
going to skin (down) at the equilibrium
0.4pts
• Heat flux down κdT
dx 0.2pts
• Heat flux up magnitude DLµ
R
d
dx
P
T (partial
points available for the equivalents to the
steps below) 0.5pts
– Magnitude of heat flux up is LJm 0.3pts
– m = µ/NA 0.1pts
– n = P/TkB 0.1pts
• Deducingthatthedirectionoftheheatflow
is opposite to dn
dx (explicitly mentioned or
with the existence of the minus sign in the
equations) 0.1pts
• P = rp 0.1pts
• κ(T −Ts) = DLµ
R
[
p(Ts)
Ts
− rp(T)
T
]
(i.e. integ‐
rating correctly) 0.4pts
– Or doing a change from d → ∆ in the
derivatives has to be motivated properly
(i.e. for heat conductivity no need for
any explicit explanation but for Fick’s
lawonemuststatethatJ isconstant(due
to the amount of particles is conserved)).
• ρ = pµ/RT 0.1pts
• Reading ρ correctly (ρ1 ∈ [800,815]gm−3
))
0.2ppts
• Graphical method 0.8pts
– Noticingthatρ(Ts) = rρ(T)+ κ
DL(T−Ts)
defines a straight line in (T,ρ) 0.8pts
– Any other valid numerical method that
is explained is accepted
• Correct final result T ∈ [36,47]°C 0.2pts
If working with ρ earlier on one can show
that that the heat flux up magnitude is
Solution 2 by Eppu Leinonen: One can also
work directly with ρ through the fact that
n = N/V = MNA/µV = ρNA/µ. Then
the heat flux magnitude will directly become
LJm = LmDdn
dx = LmDNA
µ
dρ
dx = LDdρv
dx ,
where ρv is the density of the water vapour.
Then with correct signs we get
κ
dT
dx
= −LD
dρv
dx
from which by integrating and using ρv = rρ
we get
ρ(Ts) = rρ(T) +
κ
DL
(T − Ts)
andthesolutionproceedsthesamewayasin
solution 1.
The following grading scheme is given
to provide exact correspondences to the
scheme of solution 1. Grading:
• heat going away from skin (up) = heat
going to skin (down) at the equilibrium
0.4pts
• Heat flux down κdT
dx 0.2pts
• Heat flux up magnitude LDdρv
dx (partial
points available for the equivalents to the
steps below) 0.6pts
– Working with ρ directly 0.1pts
– Magnitude of heat flux up is LJm 0.3pts
– n = ρNA/µ 0.1pts
– µ = mNA 0.1pts
• Deducingthatthedirectionoftheheatflow
is opposite to dn
dx (explicitly mentioned or
with the existence of the minus sign in the
equations) 0.1pts
• ρv = rρv 0.1pts
• κ(T − Ts) = LD(ρ(Ts) − rρ(T)) (i.e. integ‐
rating correctly) 0.4pts
– Or doing a change from d → ∆ in the
derivatives has to be motivated properly
(i.e. for heat conductivity no need for
any explicit explanation but for Fick’s
lawonemuststatethatJ isconstant(due
to the amount of particles is conserved)).
• Reading ρ correctly (ρ1 ∈ [800,815]gm−3
))
0.2ppts
• Graphical method 0.8pts
– Noticingthatρ(Ts) = rρ(T)+ κ
DL(T−Ts)
defines a straight line in (T,ρ) 0.8pts
– Any other valid numerical method that
is explained is accepted
• Correct final result T ∈ [36,47]°C 0.2pts
3. NUCLEAR REACTORſ (6 points) — Solution
and grading scheme by Topi Lind, Melvin Stor­
backa, Oleg Kosik, Aleksandr Sorokin and Lud­
mila Belogrudova.
i)(1point)Ifthespeedoftheparticleismuch
less than the speed of light, we can use non‐
relativistic approach. For non‐relativistic
particles we know v =
√
2Ek/m. Substitut‐
ingvaluesgivesusvf = 2.2 × 103
ms−1
. Thisis much less than the speed of light and thus
justified. Another way to justify the applic‐
abilityofthenon‐relativisticapproachwould
be to say that kinetic energy is significantly
less than the rest energy (Ef ≪ mnc2
).
Typoinproblemdescription. Ef = 0.025eV
is the mode of the Maxwell–Boltzmann distri­
bution which gives E = kbT. Average gives
E = (3/2)kbT.
Using the mode of the Maxwell–Boltzmann
distribution, E = kBT, and remembering to
convert from eV to J correctly, we find
Tf = 0.025·1.602 × 10−19
1.38 × 10−23 = 290K.
With E = (3/2)kBT we find Tf ≈ 193K.
ii) (1point)The non‐relativistic approach jus‐
tified as in previous task. Same approach
gives us v0 = 2.0 × 107
ms−1
.
Grading i)+ii): (preliminary)
• Expresses vf =
√
2Ef/m and/or v0 =
√
2E0/m 0.3pts
• Calculates vf = 2.2 × 103
ms−1
and/or
v0 = 2.0 × 107
ms−1
for two correct nu‐
merical values; 0.5pts; if only one value is
correct 0.3pts.
• Uses Ef = 3
2kBT 0.3pts
• Using this formula calculates T = 193K
0.3pts
• Justifies the validity of the classical ap‐
proach in both cases 0.3 + 0.3pts
Remark. Using Ef = kBT without justifica‐
tion and finding T = 290K gives 0pts for
the formula and 0.3pts for the numerical
calculation.
iii) (2.5 points) In a collision between
particle 1 (m1,v1,i and v1,f) and particle 2
(m2,v2,i and v2,f) momentum is conserved,
m1(v1,f − v1,i) = m2(v2,i − v2,f)
and since the collisions are elastic, kinetic
energy is also conserved:
m1(v2
1,f − v2
1,i) = m2(v2
2,i − v2
2,f).
Dividing the latter by the former leads to
v1,i + v1,f = v2,i + v2,f.
Substituting this to the conservation of mo‐
mentum gives for particle 1:
v1,f =
m1 − m2
m1 + m2
v1,i +
2m2
m1 + m2
v2,i,
and similarly for particle 2:
v2,f =
2m1
m1 + m2
v1,i +
m1 − m2
m1 + m2
v2,i.
We see that with m1 = m2 there is a max‐
imum transfer of momentum. Assuming
that particle 1 is the neutron and particle 2 is
the target, and that the target is at rest for all
intentsandpurposes, themassofthemoder‐
ators atoms should be the same as the neut‐
rons.
In a single collision with a stationary
atomofthemoderator,thespeedoftheneut‐
ron decreases by the factor of m1−m2
m1+m2
, so the
speed of the neutron after N head‐on col‐
lisions with stationary atoms of moderator
will be
vN = v
(
m1 − m2
m1 + m2
)N
.
Hence,
N =
ln(vf/v0)
ln[(m1 − m2)/(m1 + m2)]
=
1
2
ln(Ef/E0)
ln[(m1 − m2)/(m1 + m2)]
= 614.
Grading: (preliminary)
• T ≪ Tf, so moderator atoms are essen‐
tially at rest 0.3pts
• Justifies that maximum momentum trans‐
fer is when mn = M 0.4pts
• Applies energy and momentum conserva‐
tion 0.3pts+
0.3pts
• Expresses u = vm1−m2
m1+m2
0.4pts
• Expresses vf = v0
(
m1−m2
m1+m2
)N
0.5pts
• Calculates N = 614 0.3pts
iv) (1.5 points) We can model the gas in‐
side the rod as an ideal gas. Simply due to
swelling the pressure inside the rod would
increase from 2.5MPa to 5MPa as we know
from Boyle’s law P1V1 = P2V2 ⇝ P2 =
P1V1/V2. Thus, the release of xenon must
contribute1.5MPa’sworthofpressuredueto
Dalton’s law ptot = pHe +pXe. From ideal gas
law we find the amount of xenon moles as
nXe = pXeV /RT0 = 5.5 × 10−3
mol,
where pXe = 1.5MPa, V2 = 9cm3
and T =
293K. In a similar manner we find that the
amount of helium in the beginning was
nHe = pHeV0/RT0 = 1.8 × 10−2
mol,
where PHe = 2.5MPa, V0 = 18cm3
and
T0 = 293K. The ratio of the two is
nHe
nXe
≈ 3.3.
Grading: (preliminary)
• Applies Boyle’s law 0.3pts
• Applies Dalton’s law 0.4pts
• Expresses nXe = pXeV /RT0 0.2pts
• Calculates nXe = 5.5 × 10−3
mol 0.2pts
• Expresses nHe = pHeV0/RT0 0.2pts
• Calculates nHe
nXe
= 3.3 0.2pts
4. BLACĸ BOX (12 points) — Eero Uustalu.
First we need to assemble a simple circuit al‐
lowing us to measure the V − I curve of the
black box: voltmeter in parallel to the box,
and ammeter in series. The measurement
resultsareshowninthetablebelow, bothfor
forward current (blue) and for reverse cur‐
rent (red) (the headers of the reverse current
data has minus sign).
0 1 2 3 4 5
0
2
4
6
8
Voltage [V]
Current [mA]
1mA
V3
V1
V2+IR
Voltage and Current Measurements
V (V) I (mA) ‐V (V) ‐I (mA)
4.59 7.66 3.491 7.98
4.55 6.53 3.458 6.98
4.50 5.52 3.423 6.00
4.46 4.53 3.379 4.94
4.43 3.964 3.324 3.868
4.41 3.665 3.279 3.178
4.40 3.51 3.219 2.468
4.36 3.08 3.180 2.088
4.32 2.756 3.121 1.637
4.25 2.54 3.044 1.186
4.14 2.391 2.993 0.958
3.98 2.23 2.956 0.817
3.871 2.115 2.922 0.711
3.656 1.897 2.880 0.595
3.539 1.781 2.784 0.403
3.436 1.67 2.713 0.2931
3.282 1.519 2.607 0.1847
3.079 1.314 2.423 0.0801
2.923 1.159 2.156 0.0219
2.762 0.998 1.807 0.0037
2.625 0.862 1.451 0.0006
2.498 0.736 0 0
2.351 0.593
2.246 0.491
2.143 0.398
2.036 0.2932
1.931 0.1989
1.815 0.1037
1.732 0.0486
1.670 0.021
1.617 0.0087
1.526 0.0016
1.467 0.0005
These data will be used for all the tasks.
i) (4 points)
Based on these data, we can determine
that there is a single diode allowing negative
currents to flow, with no other components
in that branch, as the V ‐I curve shows the
classical exponential dependence character‐
istic of a diode.
The situation is more complex for pos‐
itive currents: there must be two parallel
branches allowing current to flow. One
branch must contain a diode with a lower
threshold voltage in series with a resistor,
which explains why the initial exponential
curve transitions into a linear relationship
characteristic of resistive behaviour. The
second branch must contain a diode with
a higher threshold voltage (approximately4.3V) that only conducts when this voltage
is exceeded.
This second branch could be either in
parallel with just a resistor, or in parallel
with the series combination of the resistor
and first diode. These two configurations
cannot be distinguished based solely on the
V ‐I curves, and both will be considered cor‐
rect interpretations of the data. The two pos‐
sible circuits are shown below.
A
B
D1
D2
R
D3
Lower
threshold
diode
Higher
threshold
diode
A
B
D1
D2
R D3
Note that faulty measurements give no
points in regard to data sufficiency (for ex‐
ample if the voltage was read from the power
source without any corrections made)
Eachplot(forwardandreversecurrent)gives
1.2 points:
Grading: (preliminary)
• Drawing and labeling a graph’s axes 0.2pts
• Collecting sufficient data for the graph that
shows both linear and non‐linear charac‐
teristics of the circuit 0.5pts
• Plotting the data to the graph 0.5pts
In total, the forward and reverse direction
plots give 2.4 points. Drawing the circuit
used in each the measurement gives 0.3p
each for a total of 0.6p.
For drawing a possible circuit diagram
(Refer to diagrams for option 1 and 2):
Grading: (preliminary)
• Placing the reverse diode D1 correctly
0.3pts
• Placing the forward diodes D2, D3 and the
resistor correctly, i.e. as described in the
previous paragraphs 0.7pts
ii) (2 points) The resistor’s resistance is the
inverse of the slope in the linear section of
the curve. To ensure accuracy, the most lin‐
ear segment should be selected for this cal‐
culation. The fit line is shown in purple in
the figure above, yielding a resistance of R =
1008Ω.
Grading: (preliminary)
• Method for getting R1 1pts
• Reaching a close enough ( ±10%) value for
the resistance 1pts
iii) (6 points) The accepted uncertainty of
all subsequent results is ±10% of the values
presented here. The opening voltage V1 of
diode D1 can be found at the point where
the red curve intersects the 1mA value. For
greater precision, additional measurements
could be performed by gradually adjusting
the voltage until exactly 1mA current is
reached. Based on our current measure‐
ments, the result is 3.004V.
The value of V2 can be found at the point
where the blue curve reaches 1mA, from
which we must subtract the resistor’s voltage
dropIR. ThiscalculationgivesV2 = 1.757V.
To determine the opening voltage of di‐
ode D3, we must first subtract the current
through the resistor. This can be accom‐
plishedgraphicallybydrawingalineparallel
to the linear segment’s fit line, at a 1mA dis‐
tance, as illustrated in the figure. For option
1, this procedure directly yields V3 = 4.47V.
For option 2 (the actual configuration inside
thebox),weneedtosubtractvoltageV2. Con‐
sequently, V3 = 2.71V for option 2.
Grading: (preliminary)
• Reaching a close enough value for the
opening voltage V1 1pts
Getting value for V2:
• ReadingthevalueofV2 +IR at1mA0.5pts
• Subtracting IR based on the inverse of the
slope at the linear section 0.5pts
• Getting the value to within 10% 1pts
Calculating the value for V3 depends on
the schematic that was used. This schema
is written for option 2. Valid solution for
option 1 still gives the same max points.
• Reading the total voltage where 1mA is go‐
ing through D3 0.5pts
• Subtracting V2 from the total 1.5pts
• Reaching a close enough ( ±10%) value for
V3 = 2.71 V 1pts5. THROWıNG (6 points) — Solution by Eppu
Leinonen and Jaan Kalda.
i) (2 points) In the drone’s reference frame,
the effective gravitational field is (g,g),
which has a magnitude of g
√
2 pointing at a
45◦
angle. The initial kinetic energy of the
ballis 1
2mv2
0, and the final energy: potential
energy change is m(g
√
2)·(h
√
2), where h
√
2
isthedisplacementalongthedirectionofthe
effective field From the energy conservation
lawweobtain 1
2mv2
0 = m(g
√
2)·(h
√
2),hence
v0 = 2
√
gh.
Grading: (preliminary)
• Idea of switching to the coaccelerating
frame 1pts
• Ball gains horizontal acceleration g 0.3pts
• Effective gravitational field g
√
2 point from
drone to throwing point 0.2pts
• Energy conservation or the respective kin‐
ematical equation 0.3pts
• Correct answer 0.2pts
Solution 2 by Anne­Sofie Mårtensson and
Adam Warnerbring: In time t the drone
travels a distance s = 1
2gt2
. For a collision to
occur at time t the ball must travel a distance
h upgivingus an equation h = vtsinα− 1
2gt2
and a distance h + s horizontally giving us
an equation h + s = vtcosα. From these
equations we get vtsinα = vtcosα, which
means that α = 45°. This means that the ini‐
tial x and y‐components of the velocity must
be the same. Thus the initial speed minim‐
ised when the highest point of the trajectory
isminimalwhichhappenswhenitisaheight
h away from the throwing point. From en‐
ergyconservationweget 1
2
(
v0 √
2
)2
= ghtoget
v0 = 2
√
gh
• Correct kinematic equations 0.6pts (0.2
for each)
• Getting the condition sinα = cosα 0.3pts
• α = 45° 0.1pts
• vx,0 = vy,0 implies that the highest point of
the trajectory has to be as low as possible
0.5pts
• Energy conservation or the respective kin‐
ematical equation 0.3pts
• Correct answer 0.2pts
Alternatively, we can derive the minimal
velocity from α = 45° as follows. If we go
back to our kinematical equations, we get
that the condition for the drone and the ball
to meet at the same x‐coordinate is vtsinα−
1
2gt2
= vt √
2
−1
2gt2
= h+s = h+1
2gt2
. Butalso
for the y coordinate we have h = vtsinα −
1
2gt2
= vt √
2
− 1
2gt2
. I.e. both equations be‐
come 1
2gt2
− vt √
2
+ h = 0, so we only need
to find out what is the minimal velocity that
this equation has a solution. Since the equa‐
tion is a quadratic, it has a solution when its
discriminant ∆ is non‐negative. Now ∆ =
v2
/2 − 2gh, which is an increasing function
of v. Thus the minimal speed with which the
collisionispossibleiswhenthediscriminant
is zero. Thus we get v = 2
√
gh.
Somestudentsinterpretedthetasksuch
that the drone has an acceleration (g, −
g). This interpretation makes the problem
moredifficultandwillbeaccepted. Thefol‐
lowing solution shows how this version of
the problem can be solved Solution for the al­
ternative interpretation by Eppu Leinonen: If
we move to the coaccelerating frame of the
drone, the ball will have a net acceleration
(−g,0), and the drone will stay in place. This
invites us to rotate the coordinate axes that
the acceleration of the ball is (0, − g) and if
we set the origin at the throwing point, the
drone will be at (−h,h). Now all the points
reachable by the ball with an initial speed
v are given by the so called envelope curve
which is known to have the equation y ≤
v2
0/2g − gx2
/2v2
0. With the minimal pos‐
sible speed the drone will be on the envel‐
opecurveasotherwisethepointisnotreach‐
able or the speed can be made smaller. So
we need to find v0 such that the equation
h = v2
0/2g−gh2
/2v2
0 has a solution. Rearran‐
ging gives v4
0 − 2ghv2
0 − g2
h2
= 0 which is a
quadratic in v2
0 (biquadratic in v0) which has
the solutions v2
0 =
2gh±
√
4g2h2+4g2h2
2 = gh ±
gh
√
2 which is only positive if ± is + so v2
0 =
(1 +
√
2)gh and as such v0 =
√
(1 +
√
2)gh.
Grading:
• Idea of switching to the coaccelerating
frame 1pts
• Ball gains vertical and horizontal accelera‐
tion g 0.3pts
• Effective gravitational field (0, − g) (in the
rotated coordinate frame, but this rotation
is not necessary) 0.2pts
• Drone must be on the envelope curve
0.2pts
• Correct form for the envelope curve 0.1pts
• Correct answer 0.2pts
For other solutions, at most 0.6 points for
kinematical equations that describe the con‐
ditions necessary for the ball and drone to
collide – the rest of the analysis must be fully
correct to get the rest of the points.
NB! If a student has interpreted that the
drones acceleration is along the y‐axis or
that antiparallel to the y‐axis means to the
positive y‐axis, it is automatically 0 points.
ii) (4 points)
Solution 1. Let us use the free‐falling frame
of reference wherein the ball and the stone
move along straight lines. That frame fell to‐
gether with points S and B during the flight
time of duration t by h = 1
2gt2
, so in that
frame the position of the collision point C′
is
obtained by shifting C relative to S and B by
distance h upwards. In that frame, |SC′
| =
vt and |BC′
| = ut, hence |SC′
|/|BC′
| = v/u.
We have v fixed and want to have as small as
possible u, so |SC′
|/|BC′
| needs to be max‐
imal. From the sine theorem, |SC′
|/|BC′
| =
sin∠SBC′
/sin∠C′
SB. As ∠C′
SB is defined
by the stone‐throwing angle and is therefore
fixed, the boy needs to maximize sin∠C′
BS.
Obviously, the maximum of 1 is reached
for ∠C′
BS = 90°. Therefore, we need to
draw a perpendicular to SB at B, and find
C′
as its intersection point with the vertical
line drawn through C. Then |CC′
| = 1
2gt2
from where we obtain t =
√
2|CC′|/g, v =
√
g|SC′
|/
√
2|CC′| ≈ 12.3ms−1
and u =
√
g|BC′
|/
√
2|CC′| ≈ 10.9ms−1
S
B
C
C′
Grading: (preliminary)
• The idea of switching to the free‐falling
frame 0.5pts
• Stating (explicitly or implicitly) that the
stone and the ball travel in straight lines
0.5pts
• SC′
= vt and BC′
= ut 0.2pts (0.1 for
each)
• Noticing that we need to minimise
|SC′
|/|BC′
| (or maximise the reciprocal)
0.3pts
• Sine theorem (to minimise) 0.5pts
• ∠C′
BS = 90° 0.5pts
• In the free falling frame C′
is shifted up‐
wards with respect to S,B,C 0.5pts
• |CC′
| = 1
2gt2
0.1pts
• Well drawn geometrical construction (that
is correct) 0.5pts
• v =
√
g|SC′
|/
√
2|CC′| and u =
√
g|BC′
|/
√
2|CC′| 0.2pts (0.1 for each)
• v ∈ [11.8,12.7]ms−1
, u ∈ [10.5,11.4]ms−1
0.2pts (0.1 for each, only if correct
method)
Note. Well drawn means that straight
lines are straight lines and the 90 degree
angles look like 90 degree angles. The points
will only be given if the construction is relev‐
ant for a correct solution to the problem.
Solution 2. A purely geometric proof for
C′
B ⊥ BSA to minimise BC′
/SC′
goes as
follows (the rest of the solution is the same).
After going to the free fall frame, go to the
frame moving with velocity⃗ v. For the ball to
hit the ball its velocity in this frame ⃗ u′
must
point at the stone. I.e. we get that ⃗ u′
= k
− →
BS,
where k > 0. On the other hand ⃗ u′
= ⃗ u − ⃗ v.
But now this means that ⃗ v − ⃗ u must end up
onthelineSB. Thepossibleendingpointsof⃗ v − ⃗ u are achieved by drawing a circle of ra‐
diusuaroundtheendingpointof⃗ v. Withthe
minimal |⃗ u| to achieve the condition of the
relative velocity ending up on SB the circle
will be tangent to SB which means that ⃗ u ⊥
− →
BS.
Thiswillreplaceminimisingtheratioand
using the sine law to give in total 0.8p for
method and 0.5 for the correct angle.
Grading:
• Noticing that ⃗ v − ⃗ u is on SB 0.3pts
• A valid argument that u is minimal when
⃗ u ⊥
− →
SB 0.5pts
Solution 3. An analytic proof for C′
B ⊥
BS to minimise BC′
/SC′
goes as follows
(therestofthesolutionisthesame). Without
the loss of generality we can put the point S
at (0,0) and the point B at some (q,0) (i.e.
we rotate and move our coordinate system
to achieve this). The SC′
line is given by
y = kx for some k and thus a general form
for the point C′
is (x,kx). Thus the ratio of
the lengths becomes
R =
√
(x − q)2 + k2x2
√
(k2 + 1)x2
.
Differentiating this (preferrably logarithim‐
ically) and finding the 0 of the the derivative
gives
x = q
i.e. C′
= (q,kq) and as such C′
B ⊥ BS.
The following points replace the “Sine
theorem (to minimise)” part from Solution 1
Grading: (preliminary)
• Correct R function to maximise/minimise
0.2pts
• Derivative = 0 0.1pts
• Performing the rest of the calculation fully
correct 0.2pts
6. BıRDſ (4 points) — Solution by Jaan Kalda.
Let us consider the torque balance with re‐
spect to the beam’s centre of mass. Note that
as the beam is long and thin and the other
end of the beam doesn’t rise above the wa‐
ter, the beam will stay approximately hori‐
zontal,whichwewillusetocalculatethemo‐
ment arms. First, the beam’s weight acts at
its centre of mass, creating zero torque. The
second contribution comes from the buoy‐
ancy force that can be split into two compon‐
ents: the upward buoyancy force as if the en‐
tire beam were submerged (acts at the centre
ofmass,creatingzerotorque),andthedown‐
ward ”missing” buoyancy force of the trian‐
gular section above water (creates a torque).
This missing buoyancy force F is what be‐
comes a real buoyancy force once additional
birds land and press the beam fully under‐
water; if the length of the beam is L then
the arm of this force is the distance from the
centre of mass of the beam to the centre of
mass of the triangle which is at the intersec‐
tion point of medians, which are a distance
2
3L away from the bird. Thus the moment
arm of F is (2
3 − 1
2)L = 1
6L. The arm of
the bird’s weight mg is 1
2L, hence 1
2L · mg =
1
6L · F, i.e. F = 3mg. This means that addi‐
tionally, the beam can support up to 3 more
birds, i.e. 4 birds in total.
Note: according the official solution, the
answer does not depend on how much of the
beam is left in the water nor on any other un‐
known properties of the beam. As such, fix‐
ing any of these parameters does not create a
maximum condition.
Grading (preliminary)
• Used any correct torque balance 0.6pts
– Used any correct force balance with the
bird present 0.3pts
• Moment arm for the force of the bird
0.2pts
• Explicitly stated or derived the center of
mass of a triangle 0.6pts
• Momentarmforthebuoyancyforce0.3pts
• Justified numerical answer (4) 0.3pts
• Afinalsolutionthatdoesnotdependonfix‐
ing any unknown parameters 2pts
7. CHARGEDROD(6points) —SolutionbyJaan
Kalda, grading schemes by....
i) (2 points) Notice that all particles with the
same charge‐to‐mass ratio orbit in a homo‐
geneous magnetic field B with the same fre‐
quency ωB = Bq
m ; the orbit is a circle of ra‐
dius r = v
ωB
. Indeed, the Lorentz force must
provide the centripetal acceleration, hence
Bqv = mvωB ⇒ ωB = Bq
m .
Sincethemass‐to‐chargeratioisthesame
for all the fictitious pieces of the rod, if the
rod rotates with angular speed ω = Bq
m , then
theLorentzforceprovidesexactlytheneeded
acceleration to all these pieces, and the ten‐
sion force is zero everywhere.
On the other hand, if the angular speed
were smaller or larger, we would have either
Bqv < mvω or Bqv > mvω for all the pieces,
resulting in either stretching or compressive
tensionforceatthecentreoftherod,respect‐
ively. Therefore, the answer is ω = Bq
m .
Grading: (preliminary)
• Considersforcesonaninfinitesimalpartof
the rod 0.4pts
• Equates, with justification, Lorentz and
centrifugal forces dqvB = dmω2
r 0.4pts
• Uses ω = v
r 0.4pts
• Uses dq
dm = q
m 0.4pts
• Expresses ω = qB
m 0.4pts
ii)(4points)Tobeginwith,letusnoticethatif
a system of charges with the same charge‐to‐
massratioα = q/mmovesinahomogeneous
magnetic field, the centre of mass will move
along a circle with cyclotron frequency ωB.
Indeed, the total Lorentz force acting on the
system is
∑
i
qi
d⃗ ri
dt
× ⃗ B = α
∑
i
mi
d⃗ ri
dt
× ⃗ B
= α
d⃗ rC
dt
× ⃗ B
∑
i
mi.
So, Newton’s second law reads
d2
⃗ rC
dt2
∑
i
mi =
q
m
d⃗ rC
dt
× ⃗ B
∑
i
mi.
The total mass of the system cancels out
from this equation, and we can see that the
centre of mass ⃗ rC moves in the same way as
a point charge q with mass m.
Alternatively, the same can be achieved
through integration. From Newton’s second
law m⃗ aC =
∫
dq⃗ v × ⃗ B, where ⃗ v is the ve‐
locity of the charge element dq. But since
the mass and charge distributions are ho‐
mogenous, dq = q
m dm and ⃗ B is constant
so it can be taken out from the integral to
achieve m⃗ aC = q
m
(∫
⃗ v dm
)
× ⃗ B. But now
the integral is just m⃗ vC (can be seen directly
or through the definition of centre of mass ∫ d⃗ r
dt dm = d
dt
∫
⃗ rdm = m⃗ rC. Thus we get
m⃗ aC = q⃗ vC × ⃗ B.
Additionally, the rod can (and will) rotate
with a constant speed. The fact that the an‐
gular speed must be constant follows from
theconservationofkineticenergyoftherod,
which is the sum of the kinetic energy of
its centre of mass and the rotational energy
around the centre of mass. The former is
constant, so the latter must be as well.
The centre of mass moves with speed v/2
and draws a circle of radius R = mv
2Bq that
passes through the point (l
2,0) and for which
the x‐axis is a symmetry axis. The red end
can reach the origin only when the centre
of mass is at a distance l
2 from the origin.
This can happen either after a full cyclotron
periodT = 2π/ωB, oratanymomentassum‐
ing R = l
2 and the circle is centred around
the origin.
To determine if this can happen earlier
than after time T, let us assume that R =
mv
2Bq = l
2. In that case, the angular speed
of the rod’s rotation is Ω = v
l , and we get
v = Bql
m . This means Ω = Bq
m = ωB, i.e., the
rod’s rotational angular speed is the same as
the centre of mass’ angular speed in its orbit,
which would cause the blue end to remain at
the origin.
Next,weexamineiftheredendcanreach
the origin after time T. For this to happen,
the condition is that ΩT = (2πn + π), where
n is an integer. Since Ω = v/l and we need
to minimize v, we take n = 0 to obtain v =
πl/T = lBq
2m .
Grading: (preliminary)
• Deduces, with justification, that the net
force on the rod ⃗ F = q⃗ vC × ⃗ B 0.5pts
• Uses vC = v/2 0.2pts
• Justifies that the COM moves on a circular
path 0.3pts
• Expresses the radius of the path traced by
the COM R = mv
2qB 0.3pts• Concludes that the angular velocity of the
COM is ω = qB
m 0.2pts
• Expresses the angular velocity of the rota‐
tion around the COM Ω = v
l 0.2pts
• Justifies that Ω is conserved 0.3pts
• Argues that t < 2π
ω is possible only if R =
l/2 0.5pts
• Justifies that in this case, the red end will
never end up at the origin 0.5pts
• Justifies that Ωt = π + 2πk with k ∈ Z⩾0
0.4pts
• Expresses v = qBl
m (1
2 + k) 0.6pts
8. PHAſE ſPıRAL (9 points) — Taavet Kalda.
i) (1 point) Gravitational acceleration obeys
Gauss’ law, i.e., the number of field lines
passing through a closed surface is propor‐
tional to the enclosed mass. We can see from
the example of a point mass M that
∫
gdA =
4πGM. Applied for the case of an infinite
plane with constant density with a cuboid of
area A and half‐thickness z, we get −2azA =
4πG2Azρ0 so
az = −4πGρ0z.
Grading: (preliminary)
• Idea of using Gauss’ law 0.3pts
• Formularelatingthemassinsidewithgrav‐
itational flux 0.3pts
• Application of Gauss’ law on a cuboid
0.2pts
• Final result 0.2pts
Alternative solution:
• Finding the acceleration of a thin disk by
integrating over its surface, of which:
0.5pts
– Writing down the integral 0.3pts
– Correct evaluation, including finding
that the acceleration is independent of
the displacement from the surface
0.2pts
• Inferring that only the surface density in‐
side −a < z < a contributes to the final
acceleration 0.3pts
• Final result 0.2pts
ii) (0.5 points) The acceleration is propor‐
tional to displacement and therefore corres‐
ponds to a harmonic oscillator. The period
of oscillation is thus
T =
2π
√
4πGρ0
=
√
π
Gρ0
.
Grading: (preliminary)
• Noticingthatthemovementisthatofahar‐
monic oscillator 0.3pts
• Expressionfortheoscillationperiod0.2pts
iii) (2.5 points) If we follow the trajectory of
a single star that lies on the spiral, we would
find it oscillating around the mid‐plane with
some period T(z) that decreases with in‐
creasing z. Over the course of an orbit, the
energy per unit mass is conserved and is
givenbyE = v2
z/2+Φ(z). Weknowthatnear
the mid‐plane, the gravitational potential is
minimal and equal to zero, so vz is maximal
and the kinetic energy is equal to the total
energy. Hence, we know the total energy of
stars at the seven intersection points of the
spiral with z = 0. Similarly, when vz = 0, the
kinetic energy is minimal and equal to zero,
so the total energy is equal to Φ(z) at those
points.
As one traces the various intersection
points with vz = 0 and z = 0 along the
spiral, the maximal extent of the orbit keeps
increasing. To the first order, if we assume
that the maximal extent increases linearly
with each crossing, we can find the potential
energy of the crossings of vz = 0 as the aver‐
agebetweenthekineticenergiesoftheprevi‐
ousandsubsequentcrossingoverz = 0. This
allows us to determine the potential energy
at all the crossings with vz = 0, as tabulated
and plotted below.
i zi (kpc) Φ(zi) (km2
/s2
)
1 0.27 180
2 0.39 330
3 0.54 530
4 0.72 800
5 0.97 1200
6 1.34 1800
Grading: (preliminary)
• Making use of the total energy at z = 0 in‐
tersection points being known (either ex‐
plicitly or implicitly) 0.7pts
• Interpolating the values at vz = 0 from
neighbouring z = 0 crossovers. This
should be explicitly mentioned 0.8pts
• Tabulating the potential, of which: 0.7pts
– using six points 0.7/0.7pts
– using four to five points 0.4/0.7pts
– using one to three points 0.1/0.7pts
• Φ(z) vs z correctly plotted 0.3pts
0.0 0.2 0.4 0.6 0.8 1.0 1.2 1.4
z (kpc)
0
250
500
750
1000
1250
1500
1750
2000
Φ(z) (km 2
/s 2
)
iv) (1point)For a harmonic oscillator, the po‐
tentialenergywouldgrowasz2
. Basedonthe
plotofpotentialenergyweobtained,itseems
to grow roughly quadratically in the begin‐
ning, and then transition into a more lin‐
ear regime, implying that smaller values of z
have more uniform ρ. Taking the first value
of Φ(z1) = 180km2
/s2
that we obtained, we
can estimate the mid‐plane density. From
the first part, Φ(z) =
∫
azdz = 2πGρ0z2
and
so
ρ0 =
Φ(z1)
2πGz2
1
= 6.1 × 10−21
kg/m3
= 0.090M⊙/pc3
.
Grading: (preliminary)
• ConnectingΦ(z1)withρ0 byassumingcon‐
stant mass density. 0.8pts
• If the first data point is not used −0.2pts
• Final expression for ρ0 0.1pts
• Numerical value within 10% 0.1pts
v) (2 points) We can compute the enclosed
surface density Σ(z) between 0 < z by us‐
ing the previous harmonic oscillator estim‐
ate. With the constant density approxima‐
tion, the surface density is Σ(z) = ρ0z =
Φ(z)/(2πGz)
Ofcourse,here,ρ0 isaplaceholdervariablewhile
using the constant profile approximation to sim­
plify the calculus. The final result is expected to
deviatefromthetruevaluebyanumericalfactor
that’s close to unity.
Assuming that dark matter density dom‐
inates far away, we can use the difference
betweenthefarthesttwodatapointsatz5 and
z6 to estimate the dark matter density via
Σ(z6) − Σ(z5) = ρDM(z6 − z5)
=
1
2πG
(
Φ(z6)
z6
−
Φ(z5)
z5
)
.
Thus,
ρDM ≈
1
2πG(z6 − z5)
(
Φ(z6)
z6
−
Φ(z5)
z5
)
= 7.7 × 10−22
kg/m3
= 0.011M⊙/pc3
.
Dark matter therefore makes up around
ρDM/ρ0 = 13% of the total local matter
budget.
Grading: (preliminary)
• Obtaining an expression for the total mass
contained within z 0.7pts
• Taking the difference between the total
mass within z6 and z5 for calculating the
dark matter content 0.9pts
• Final expression for ρDM based on z6 and
z5 0.3pts
• Numerical value within 10% 0.1pts
Alternative scheme:
• Using the previous expression for ρ based
onΦ(z)toexpress(z6−z5)ρDM = z6ρ(z6)−
z5ρ(z5) 1.6pts
• Final expression for ρDM based on z6 and
z5 0.3pts
• Numerical value within 10% 0.1pts
vi) (2 points) We can estimate the time of
the perturbation by using the winding rate
between two points on the spiral and how
many full turns around the origin they have
made relative to each other. Using the har‐
monic estimate, firstly, ρ0 = Φ(z)/(2πGz2
)
and secondly the angular frequency is
ω(z) =
√
4πGρ0 =
√
2Φ(z)/z2.
By, for example, picking points z1 and z6 and
seeing that they have 2.5 full turns betweenthem, we can express how long ago the per‐
turbation happened:
T0 = 2.5
2π
ω(z6) − ω(z5)
= 5π
(√
2Φ(z1)/z2
1 −
√
2Φ(z6)/z2
6
)−1
= 1.9 × 1016
s = 620Myr.
The timescale is relatively long, but com‐
paredtothelifespanoftheMilkyWay, which
is around 13.6 billion years, it’s relatively re‐
cent.
Grading: (preliminary)
• Idea of using differences in the winding
rate between two points on the spiral
1.0pts
• Expression for angular frequency ω in
terms of Φ(z) by assuming a harmonic os‐
cillator 0.5pts
• Picking two points and connecting the age
of the spiral, ω and the winding amount
0.3pts
• Numerical value within 10% of the solu‐
tion value 0.2pts
9. HOT PLATE (12 points) — Jaan Kalda.
i) (3 points) Both aluminium plates were
immersed in hot water until thermal equi‐
librium was reached, then removed, dried
with tissue paper, and measured using an
infrared thermometer. The plates have
identical thermal properties except for their
surface coating, so they should have reached
thesameactualtemperatureinthehotwater
bath. Experimental measurements:
Tpolished (°C) Tblack (°C) Troom (°C)
26.2 70.9 22.9
26.0 70.7 22.9
25.4 70.2 22.9
Theinfraredthermometermeasurestemper‐
ature based on thermal radiation and we
were told it is calibrated for emissivity ε =
1 (in reality, it is calibrated for ε = 0.95,
but this difference is not significant). We
were also told that the radiation power can
be linearized: Pthermal = P0 + αT. Objects
with ε < 1 radiate Pε = ε(P0 + αTε), but
they also reflect/scatter the radiation falling
onto it from the environment. If the room
is more or less at the thermal equilibrium at
temperature T0, the room is filled with the
photons at thermal equilibrium with walls
at temperature T0. If the plate were to be
black and also at temperature T0, it would be
in equilibrium with the radiation and emit
P = P0 + αTε; so, there must be as much
incident radiation from the surroundings re‐
gardless of its real emissivity and temperat‐
ure. Asitfollowsfromthesecondlawofther‐
modynamics, the reflectance must be 1 − ε,
so it reflects/scatters power equal to Pr =
(1 − ε)(P0 + αT0). This means that the total
power departing from it is Pε + Pr = P0 +
εαTε + (1 − ε)T0. The IR thermometer as‐
sumes this is a black body and equates this
power to P0 + αTreading, hence were density
as would have a room thermometer reading
is a weighted average:
Treading = ε · Tε + (1 − ε) · T0
Since the black plate has ε = 1, its reading
directly gives the actual temperature of both
plates. Rearranging to solve for emissivity:
ε =
Tpolished − T0
Tblack − T0
Calculating for each measurement:
ε1 =
26.2 − 22.9
70.9 − 22.9
= 0.069
ε2 =
26.0 − 22.9
70.7 − 22.9
= 0.065
ε3 =
25.4 − 22.9
70.2 − 22.9
= 0.053
Taking the average: ε = 0.069+0.065+0.053
3 =
0.062 ≈ 0.06 The emissivity of the polished
aluminium plate is ε = 0.06 ± 0.01.
Grading: (preliminary)
• The idea of heating the two plates to‐
gether in water (using alternative methods
doesn’t guarantee equal temperatures for
the plates well) 0.4pts
• Measuring the radiance of the plates in
a properly (plates are properly dried and
measurements are done in a timely man‐
ner) 0.4pts
• Making at least three measurements of the
black plate, the polished plate and the sur‐
roundingenvironment(0.2pforeachsetof
3, totalling) 0.6pts
• Understanding that the IR temperature
reading of the polished plate is affected not
only by the plate itself, but also by the re‐
flected radiation of the environment
Treading = ε · Tactual + (1 − ε) · Tambient
, not just
Treading = ε · Tactual
0.3pts
• Deriving a correct formula for emissivity,
expressed in terms of the three measured
temperatures 0.7pts
• Calculated value of emissivity in the range
from 0.03 to 0.12 0.6pts (for values from
0.02 to 0.2: 0.4 pts, for values from 0.01 to
0.3: 0.2 pts).
ii) (3 points) Solution 1. Here the main idea
is to heat the plate using the resistor. Once
thermal equilibrium is reached with plate’s
temperature T = Tf, the heating power
P = V 2
/R equals to the power dissipated
to the environment, H(Tf − T0) (with T0
denoting the room temperature), hence we
can determine the heat exchange coefficient
as H = V 2
/R(Tf − T0). The main diffi‐
culty with this approach is that the charac‐
teristic thermalization time is long, around 7
minutes, so for a more or less precise meas‐
urement, one should wait around half an
hour.
Grading: (preliminary)
• The idea of using resistive heating and
waiting for thermalization 0.5pts
• For waiting long enough, up to 0.8pts ;as
follows: foreachfiveminutesmissingfrom
more than 30 minutes, subtract 0.2 pts (so,
less than 30 minutes is 0.8 pts; less than 25
minutes is 0.6 pts ... etc).
• The voltage is maximized to have maximal
Tf (needed to reduce the relative error of
Tf − T0 0.4pts (the maximal allowed
voltage of 15V gives maximal points, each
missing volt subtracts 0.1 pts.
• Measuring the temperature and obtaining
a value that is reasonable for the given
voltage, i.e. difference is not bigger than
1°C 0.6pts
• Deriving a correct formula for H 0.5pts
• Evaluating correctly 0.2pts (any mistake,
either with units or arithmetic, leads to no
points)
Solution 2. In order to avoid long waiting
time, the following approach can be used.
Although it involves more complicated data
analysis, the analysis results are re‐usable by
part iii.
Theblackaluminiumplatewasplacedon
the foam plastic with the resistor beneath it,
providing continuous heating. Temperature
readings were recorded at one‐minute inter‐
vals (the first row shows time in minutes, the
second — the measured temperature in °C:
0 1 2 3 4 5 6
28.0 30.8 33.2 35.2 37.3 39.0 40.3
For heating with constant power, the
temperature evolution follows T = Tf −
θe−γt
, where Tf is the final equilibrium tem‐
perature, θ is a constant depending on the
initial temperature, and γ is the inverse of
the characteristic time constant. To determ‐
ine γ, we examine successive temperature
increments T(t+τ)−T(t) = θe−γt
(eγτ
− 1)
with τ = 1min, which should decrease expo‐
nentially, i.e. ln∆T ≡ ln[T(t + τ) − T(t)] =
−γt + const should be a linear function of
time.
t (min) ∆T(°C) ln(∆)T
0 2.80 1.0296
1 2.40 0.8755
2 2.00 0.6931
3 2.10 0.7419
4 1.70 0.5306
5 1.30 0.2624
Time (min)
ln[T(t+1)-T(t)]
0 1 2 3 4 5
0.2
0.4
0.6
0.8
1.0Linear regression analysis of ln[T(t+1)−
T(t)] versus t yields:
ln[T(t + τ) − T(t)] = 1.0333 − 0.1378t
with R2
= 0.9209 indicating a good fit. Thus
we obtain γ = 0.1378 min−1
, corresponding
to the time constant of the thermal system
1/γ ≈ 7.3 minutes.
We now plot T versus e−γt
to find Tf as
the intercept when e−γt
= 0:
T = Tf − θe−γt
Computing e−0.1378nτ
, n = 0,...6 values
yields
e−γnτ
∈ {1.00,0.87,0.76,0.66,0.58,0.50,0.44};
the corresponding plot is provided below.
e^(-γt)
Temperature (°C)
0.0 0.2 0.4 0.6 0.8 1.0
25
30
35
40
45
50
T_f ≈ 49.9°C
0min
1min
2min
3min
4min
5min
6min
T = 49.9 - 22.0·e^(-0.1378t), R² = 0.9995
Linear regression of T versus e−γt
yields
Tf ≈ 49.9°C, as shown in the equation:
T = 49.9 − 22.0 · e−0.1378t
with R2
= 0.9995 indicating an excellent fit.
Atthermalequilibrium,thepowerdissipated
equals the power supplied:
P =
U2
R
= h · A · (Tf − T0) = H · (Tf − T0)
where h is the heat transfer coefficient per
unit area, H is the total heat transfer coef‐
ficient, A is the plate area, U is the applied
voltage, and R is the resistor’s resistance. Us‐
ing U = 15V, R = 220Ω, A = 40×40mm2
=
1.6 × 10−3
m2
, and T0 = 22.9°C we obtain
h =
U2
/R
A · (Tf − T0)
≈ 23.6 W/(m2
·K).
The total heat transfer coefficient H is found
as
H = h · A = 37.8mWK−1
.
Grading: (preliminary)
• Comingupwiththeideaofanalysingexpo‐
nentialdecayoftemperaturechangewitha
graph and deriving the heat transfer coeffi‐
cient from that 0.5pts
• Correct equation T(t) = Tf −θe−γt
. 0.3pts
• Plotting the data to a graph to determine
the γ and to confirm the validity of collec‐
ted data 0.3pts
• At least 5 datapoints used. 0.1pts
• Measure for at least 5 minutes. 0.1pts
• Calculating the slope and retrieving γ from
it. 0.2pts
• Finding the maximal temperature for used
voltageused,usingplotofT vse−γt
. 0.5pts
• Evaluating
P =
U2
R
= h · A · (Tf − T0) = H · (Tf − T0)
without errors 0.5pts
• Getting heat Transfer coefficient close to
expected value 0.5pts
iii) (2 points)Solution 1 To determine the heat
capacity, we can use the heating curve from
Part 2. During heating, the energy balance is
written as
Pin − Pout ≡ ∆P = C
dT
dt
,
where Pin = U2
/R is the input power, Pout =
H(T − T0) (where T0 = Troom is the room
temperature) is the power lost to the envir‐
onment, C is the heat capacity, and dT
dt is the
rate of temperature change. Using our expo‐
nential model T = Tf − θe−γt
, we find:
dT
dt
= θγe−γt
= γ(Tf − T)
Substituting into the energy balance:
Pin − H(T − T0) = Cγ(Tf − T).
This allows us to calculate the heat capacity
C as
C =
Pin − H(T − T0)
γ(Tf − T)
.
Now we need to use the values from Parts 1
and 2:
U = 15V, R = 220Ω, H = 3.78 × 10−2
WK−1
T0 = 22.9°C, Tf = 49.9°C, γ = 0.1378min−1
.
The input power is evaluated as
Pin =
U2
R
=
152
220
= 1.023 W.
For each time point, we can calculate:
t T Pout ∆P dT
dt C
min °C W W K/min JK−1
0 28.0 0.193 0.830 3.018 16.5
1 30.8 0.299 0.724 2.629 16.5
2 33.2 0.389 0.633 2.291 16.6
3 35.2 0.465 0.558 1.996 16.7
4 37.3 0.544 0.478 1.739 16.5
5 39.0 0.609 0.414 1.515 16.4
6 40.3 0.658 0.365 1.320 16.6
The heat capacity values are remark‐
ably consistent across different time points,
which validates our model. Taking the aver‐
age of the values in the tableˊyields
C ≈ 16.5 J/K.
Thisvaluerepresentstheheatcapacityofthe
aluminium plate. For reference, the specific
heat capacity of aluminium is approximately
cAl = 900Jkg−1
K−1
, which means the plate
has a mass of about C/cAl = 18.3g. This is
a reasonable value for a 40mm × 40mm alu‐
minium plate with a thickness of approxim‐
ately 2mm.
Solution 2. The calculated heat capacity
represents the effective heat capacity of the
system as observed in the experiment. This
includesthealuminiumplateandpotentially
some contribution from the heating resistor
and its mounting. Therefore, a little better
approach is to make an additional series of
measurements to obtain a cooling temperat‐
urecurve(similartothosewhatwill bemade
in the next section), because then we could
have let the plate cool on a flat part of the
foamplastic,excludingtherebythecontribu‐
tion of the resistor’s thermal capacity. If part
ii was solved using the solution 1, this is the
only viable way.
So, we heat the plate — the easier way is
by immersing into hot water — and measure
the time and temperature as it cools down.
Asaresult,weobtaindataaboutT(t); theen‐
ergy balance equation is
Pout = H[T(t)−T0] = −C
dT
dt
= γC[T(t)−T0],
hence
C = H/γ.
Similarly to the solution 1, we have used the
factthattheplatecoolsexponentiallyintime
and hence, dT
dt = γ[T(t)−T0]. The decayrate
can be found by plotting ln[T(t)−T0] against
t and determining the slope of the linear fit
line.
• The idea of using the T(t) dependence,
either for cooling or heating with the res‐
istor 0.2pts
• Measuring and tabulating at least 6 data
points 0.3pts (subtract 0.1 pts for each
missing)
• Data points cover at least 6 minutes 0.3pts
(subtract 0.1 pts for each missing minute)
• The idea of using log‐linear plot for data
linearization 0.2pts
• Correct data plotting 0.2pts
• Finding the slope of a fit line 0.2pts
• The idea of substituting time derivative
withmultiplicationbyγ 0.2pts(alternative
approach of calculating derivative by finite
difference ratio ∆T/δt is significantly less
accurate).
• Deriving a correct formula for C 0.2pts
• Obtainingareasonablenumericalvaluefor
C, i.e. from 13JK−1
to 20 — 0.2pts (else
from 10 to 25: 0.1 pts).
iv) (4 points)
For this part, cooling experiments were
conductedwiththealuminiumplatecovered
by different numbers of silicone rubber lay‐
ers. The plate was heated in water and then
allowed to cool, with temperature recorded
as a function of time.
t (s) 0 60 120 180 240 300
T1 layer (°C) 65.2 60.2 55.5 51.3 47.6 44.6
T2 layers (°C) * 35.3 34.0 32.9 31.9 30.8
T3 layers (°C) 45.4 43.1 41.6 40.0 38.9 37.3*The data point at t = 0 for 2 layers is
excluded as it did not represent complete
thermal equilibrium across the silicone lay‐
ers. For a cooling process with constant am‐
bient temperature, the temperature follows
an exponential decay:
T(t) = T0 − (Tinitial − T0)e−γt
The time constant γ is related to the thermal
resistance R and heat capacity C by
γ =
1
RC
.
Taking the natural logarithm of the temper‐
ature difference from ambient yields
ln[T(t) − T0] = −γt + const
Time (s)
ln(T-T₀)
0 60 120 180 240 300
2.00
2.25
2.50
2.75
3.00
3.25
3.50
3.75 1 layer, γ = 0.00224 s⁻¹
2 layers, γ = 0.00185 s⁻¹
3 layers, γ = 0.00144 s⁻¹
Using linear regression on the logar‐
ithmic cooling curves, we obtain:
γ1 layer = 2.244 × 10−3
s−1
γ2 layers = 1.852 × 10−3
s−1
γ3 layers = 1.438 × 10−3
s−1
Using our previously determined heat capa‐
city C = 16.5 J/K, we calculate the total
thermal resistance for each case:
R1 layer =
1
γ1 layer · C
= 27.0 K/W
R2 layers =
1
γ2 layers · C
= 32.7 K/W
R3 layers =
1
γ3 layers · C
= 42.1 K/W
Thetotalthermalresistanceincludestheres‐
istance of the silicone layers and the thermal
resistance of convection and radiation. Each
additional layer adds a resistance ∆R =
δ/(κA), where δ is the layer thickness, κ is
the thermal conductivity, and A is the area.
The incremental resistances between layers
are:
∆R12 = R2 layers − R1 layer = 5.7KW−1
∆R23 = R3 layers − R2 layers = 9.4KW−1
Taking the average incremental resistance
per layer:
∆R =
∆R12 + ∆R23
2
= 7.6KW−1
With the silicone rubber pad thickness δ =
0.8 mm = 8 × 10−4
m and area A = 40 × 40
mm2
= 1.6 × 10−3
m2
, we can calculate the
thermal conductivity:
κ =
δ
∆R · A
= 0.066 W/(m·K)
The precision of this experiment can be
increased by longer runs and adding addi‐
tional silicon layers.
• The idea of letting the plate to cool down
while covering it with a different number
of silicon sheets and measuring the T(t)
dependencies, 0.3pts
• For the quantity of recorded data: within
each data series (i.e. a series with a differ‐
entnumberofsiliconsheets),atleast6data
points: 0.3 pts (subtract 0.1 for each miss‐
ing),withinuptothreedifferentdataseries
— in total up to 3 × 0.3pts, i.e. 0.9pts
• Data points in each data series cover at
least 6 minutes: 0.2 pts (0.1 pts if less than
6 but more than 4 minutes) — in total up to
0.6pts
• The idea of using log‐linear plot for data
linearization 0.2pts
• Correctlyplottingthedata: 0.1ptseach, up
to 0.3pts
• Calculating γ for each of the series, 0.1 pts
foreach(uptoforthreedataseries),intotal
up to 0.3pts
• Correctly expressing the heat conductivity
in terms of a difference of the γ values
0.7pts
• Finding conductivity on the basis of all the
γ values (eitherby pair‐wise calculation, or
plottingandfindingthefitlineslope0.4pts
(divide by two if only one pair of γ values
was used)
• Obtained value of κ within a reasonable
range, i.e from 0.05 to 0.1Wm−1
K−1
:
0.3pts(elseiffrom0.04to0.12: 0.2pts; else
from 0.02 to 0.14: 0.1 pts).
