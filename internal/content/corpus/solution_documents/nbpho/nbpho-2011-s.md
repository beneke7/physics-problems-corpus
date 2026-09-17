---
id: solution-document-nbpho-2011-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2011_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2011-black-box, nbpho-2011-capacitor, nbpho-2011-charged-cylinder, nbpho-2011-coefficient-of-refraction, nbpho-2011-heat-sink, nbpho-2011-plutonium-decay, nbpho-2011-spool, nbpho-2011-vacuum-bulb, nbpho-2011-violin-string]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2011_S.pdf."
---

Estonian-Finnish Olympiad-2011: solutions
1. Spool(12 points) i) Firstsolution. The momentary rotation
centre of the spool is the contact point P with the floor (since
this point is at rest). So, the velocity of the spool is u′
= Rω,
whereωistheangularvelocity. ConsidertrianglePOA, whereA
is defined as the point where the loose end of the rope meets the
innerpartofthespoolatthecurrentmomentoftime,butwhichis
actually a point of the spool, i.e. it rollstogether with the spool);
O isthecentreofthespool. Letusdenote6 PAO = β; itiseasy
to see that 6 AOP = π − α. The velocity ~ vA of the point A
is perpendicular to PA and, hence, formsangle β with the loose
end of the rope. Its projection to the rope equals to u, therefore
vA = u/cosβ. Further, ω = vA/l, where l = |AP| can be
found from the cosine theorem: l =
√
R2 + r2 + 2Rrcosα.
The angle β can be found using the sine theorem for the triangle
AOP: sinβ = R sinα
l
. Combining everything together we end
up with
u′
=
uR
√
R2 cos2 α + r2 + 2Rrcosα
=
uR
|Rcosα + r|
.
Second solution. Let us decompose the velocity ~ vA into two
components: the tangential component (parallel to the rope)
equals (by modulus) to u; let us denote the radial component as
ur. Since the distance between O and A is constant, the projec-
tion ofthe velocitiesofO and Atothe line OAareequal:
ur = v sinα ⇒ v = ur/sinα ⇒ ω = ur/Rsinα.
TheverticalcomponentofthevelocityofthepointAremainsun-
changed if we switch the laboratory system of reference with the
systemassociated with point O; hence,
usinα − ur cosα = ωrsinα = urr/R ⇒
v =
ur
sinα
=
uR
Rcosα + r
.
ii) (2 pts) The easiest way to solve this part is to use the energy
balance for infinitesimal displacement of the cylinder and apply
the answerto the previousquestion:
Fu·dt = d

M
2
v2

1 +
J
MR2

= Mvdv

1 +
J
MR2

⇒
a =
dv
dt
=
Fu
Mv 1 + J
MR2
 =
F
M
·
cosα + r
R
1 + J
MR2
.
iii)Letuswritetheforcebalanceprojectiontothehorizontalaxis
assuming that the spool is at the edge of slipping, i.e. the friction
force Ff = µminN, where N = mg − F sinα is the normal
force:
Ma = F cosα+µminN = F cosα+µmin(Mg−F sinα).
Using theresultoftheprevioustask,wecanusethisequationdir-
ectly toobtain anexpressionforthe minimal allowed valueofthe
coefficient offriction:
µmin =
r
R
− J
MR2 cosα
1 + J
MR2
 Mg
F
− sinα
iv) The angular moment of the spool with respect to the edge of
thethresholdconservesduringtheimpact(sincetheimpactforce
haszeroarm):
Mu(R − H) + J
u
R
= J + MR2
 v
R
⇒
v = u 1 −
H/R
1 + J
MR2
!
v)Fromthe energy conservation lawwe obtain immediately
(J + MR2
)
v2
R2
= (J + MR2
)
w2
R2
+ 2MgH ⇒
w =
s
v2 −
2gH
1 + J
MR2
.
vi)The spoolis the mostprone to jumping immediately after the
impact; the gravity force needs to be large enough to bind the
centre of mass to the rotational motion around the edge of the
threshold:
Mv2
R
≤ g
R − H
R
⇒ v2
≤
g
M
(R − H) ⇒
u0 =
r
g
M
(R − H)
1 + J
MR2
1 + J
MR2 − H
R
.
2. Capacitor (6points)
i) The energy is W = CU2
/2 = 1
2
ε0
A
d
E2
d2
= 1
2
ε0AdE2
;
hence, theenergy density w = W/Ad = 1
2
ε0E2
.
ii) There are two waysto calculate the force. First, we notice that
the innermost chargesq at the capacitor platesare affected by the
electricfieldE,thereforethereisaforceqE actinguponthese. The
outermost charges, however, have no electric field around them
(because outside the inter-plate space, there is no electric field).
Due tothe Gauss law, the electric fielddecreaseslinearly with the
net charge left below the level of the current point (i.e. towards
the inter-plate space). Therefore, the electric field averaged over
the charges is just half of the maximal value E: hEi = 1
2
E, and
the net force acting on the plate is F = QhEi = CEdhEi =
1
2
ε0AE2
.
Thesecondwayincludeswritingtheenergybalanceforasmall
displacement of a plate: F ·δd = δ(Q2
/2C) = Q2
2ε0A
δd =
1
2
C2
E2
d·δd ⇒F = 1
2
ε0AE2
.
iii) Let us push away part of the water from the inter-plate space
sothattherewillbeasmallregionofplateareadA,wherethereis
no water between the plates (here, ∆p is the pressure difference
between the inter-plate space and the outside regions). By doing
so, we performwork d·δA·∆p, and increase the capacitor’s en-
ergy:
δW = δ(Q2
/2C) =
Q2
d
2ε0

1
εA
−
1
ε(A − δA) + δA

.
So,
δW =
Q2
d(ε − 1)·δA
2ε0ε2A2
=
1
2
ε0E2
d(ε − 1)·δA;
comparing this with the pressure work d·δA·∆p we conclude
that
∆p =
1
2
ε0E2
(ε − 1) ⇒ p = p0 +
1
2
ε0E2
(ε − 1).
3. Chargedcylinder(8points)
i)Movingsurfacechargecreatesasolenoidalsurfacecurrentwith
the surface density j = σv = σωr. From the circulation the-
orem for a rectangular loop embracing a segment of surface cur-
rentweobtain Bl
µ0
= jl,wherelisthelengthofthesurfacecurrent
segment (so that jl gives the current flowing through the loop).
Hence, B = µ0j = µ0σωr.
ii) Using formula E = dΦ
dt
= BdS
dt
, where S is the area covered
bythewire,weobtainE = Bωr2
/2. Indeed,duringasmalltime
interval dt,the wirecovers a equilateral triangle ofside lengths r,
r, and rωdt; its area is apparently r2
ωdt/2. By using the earlier
obtained expressionforB we end upwith
E = µ0σω2
r3
/2.
iii)Weneedtoshowthatfromtheprevioustask, dS
dt
isindepend-
ent of the wire shape. First we note that due to rotational sym-
metry, dS
dt
,itcannot dependontherotationangle,i.e. dS
dt
≡ Ṡ =
Const. Further we note that regardless of the wire shape, during
the entire rotation period 2π/ω, the whole circleareais covered;
Ṡ ·2π/ω = πr2
⇒Ṡ = r2
ω/2.
4. Black box (10 points) There are several ways to perform this
task. First one can notice that if two capacitors discharge at the
same resistor, starting with equal voltages and ending also with
equal voltages, the ratio of the discharge times equals to the ratio
ofthe capacitances(because foreach given voltage,the discharge
currentsarethesame,butlargercapacitorhasmorecharge—pro-
portionally to the capacitance). Therefore we can first charge the
known capacitor (using the battery), and let it discharge on the
voltmeter (which has some finite resistance), measuring the time
t1 requiredforittoreachapre-definedfinalvoltage. Thenweneedto repeat the procedurewith the other capacitor and measure the
timet2 andcalculateC2 = C1t2/t1;theuncertaintyisestimated
as∆C1 = C1

∆t1
t1
+ ∆t2
t2
+ ∆C1
C1

.
Itisrecommendedtocheckthenegligibilityoftheleakcurrent
acrosstheplatesofthecapacitor. Tothisend,onecanchargeaca-
pacitor, measure the voltage, remove the voltmeter and wait for
sometime(ofthe ordert1 andt2), and checkagain the voltage.
Another way is to discharge completely one capacitor by
short-circuiting its terminalsand chargetheother capacitor upto
the voltage of the battery. Further, we connect the terminals A
and B so that the capacitors re-distribute the charge Q = EC1
and take the same voltage: Q1/C1 = (Q − Q1)/C2 ⇒ Q1 =
QC1/(C1 + C2) = EC2
1/(C1 + C2). Consequently, the new
voltage(whichwemeasure)isU = Q1/C1 = EC1/(C1 +C2),
fromwhere C2 = (E
U
− 1)C1.
5. Plutoniumdecay(3points)
Let the number of Pu239
-atoms be reduced during time interval
t = 1s by a factor of 1 − λ (with λ ≪ 1). Then, during the
time period of τ1/2, it is reduced by a factor of (1 − λ)τ1/2/t
≈
e−λτ1/2/t
= 1
2
⇒ λ = tln2/τ1/2. Therefore, the number of
atomdecay events isNd = Ntln2/τ1/2,where N = ρdS/m0
is the number of atoms, i.e. the α-particle flux is Φ = Nd/2St
(wherethefactor2accountsforthefactthattheparticlesareemit-
ted towardsthe both sidesofthe plate). Uponbringing allthe ex-
pressionstogether, we obtain
Φ =
ρdln2
2τ1/2m0
≈ 2.36 × 1013
m−2
·s−1
.
6. Violin string(9points)
i) When the plate slides, there is a constant friction force µ2N
acting upontheblock,whichmeansthattheequilibrium deform-
ationofthespringisx0 = µ2N/k; thenetforceacting uponthe
block (due to spring and friction) is given by F = −kξ, where
we have defined ξ = x − x0. Therefore, while sliding, the block
oscillates harmonically around the point ξ = 0. Slipping starts
when the static friction will be unable to keep equilibrium, i.e.
at kx = µ1N, which corresponds to ξ0 = (µ1 − µ2)N/k.
If the plate moves slowly, the block is released with essentially
missing kinetic energy, and the energy conservation law yields
1
2
kξ2
0 = 1
2
mv2
max ⇒vmax = ξ0
p
k/m.
ii)Asmentioned,whentheplateslides,themotionoftheblockis
harmonic, i.e. the graph of x(t) is a segment of a sinusoid; when
thereisnosliding, theblockmovestogetherwiththeplate,i.e. the
graphofx(t)isastraightline. Atthemomentwhenslippingstarts
orstops,theoscillatoryspeedisequaltothespeedofplate,i.e. the
straightlineistangenttothesinusoid. Thelengthofastraightseg-
ment can be calculated as
T1 = 2ξ0/u = 2(µ1 − µ2)N/ku;
thesinusoidalsegmentcorrespondstoahalf-periodandtherefore
hasa length ofT2 = π
p
m/k.
iii) The speed v(t) = dx
dt
is the derivative of x(t); therefore, the
sinusoidal segment of x(t) will correspond to a sinusoidal seg-
ment of v(t), and a straight segment of x(t) — to a horizontal
segment ofv(t). The resulting graphisdepicted below.
iv) Let the amplitude of the oscillations be A, i.e. the sinusoidal
segmentsfollowthelawξ(t) = Acos(ωt),whereω =
p
k/m.
Correspondingly, v(t) = Aω sin(ωt) ⇒ Asin(ωt) =
v(t)/ω; hence, for any point at a sinusoidal segment, ξ2
+
v2
/ω2
= A2
. At a point, where a sinusoid and a straight line
meet, the straight line and sinusoid have equal values for ξ =
ξ0 = (µ1 − µ2)N/k andv = u. Consequently,
(µ1 − µ2)2
N2
/k2
+ u2
/ω2
= A2
⇒
A =
1
k
q
(µ1 − µ2)2N2 + u2mk.
v)Theoscillationswillbealmostharmonicwhenthestraightseg-
ments are very short, i.e. when u/ω ≫ (µ1 − µ2)N/k ⇒
u ≫ (µ1 − µ2)N/
√
mk.
7. Vacuumbulb(8points)
i) Each pumping cycle reduces the number of molecules inside
the bulb by a factor of (1 − α); therefore, after N cycles, the
number of molecules (and hence, the pressure) by a factor of
β = (1 − α)N
≈ e−Nα
⇒
N = −
lnβ
α
.
ii)Majority ofthepumpingcyclesaredonewhenthepressurein-
side the bulb is negligible as compared to the outside pressure.
During such a cycle, a work equal to p0V α is done. Therefore,
A ≈ Np0V α = p0V |lnβ|.
iii) Due to adiabatic law, pV γ
= Const; when combined with
the gas law pV ∝ T we obtain pγ−1
∝ Tγ
. During the last
downwardsmotion ofthe piston,the pressureinside the cylinder
isincreasedby a factorof1/β; thus,T = T0β
1
γ −1
.
iv)Accordingtothemodifiedpumpingscheme,thework/energy
loss is only due to the release of the hot air. Note that if we had
acylinder ofvolumeV , we couldbe able to create vacuuminside
there using only one pumping motion, i.e. by performing work
A = p0V and without any energy loss. Now, we perform an ex-
cesswork, which is converted into internal energy ofthe released
hot air, which needs to be calculated. Let ξ = p
p0
be an inter-
mediate rarefaction factor; then, we can apply the previous result
tocalculate the internal energy ofreleasedair, ifits quantity is dν
moles: dU = T0(ξ
1
γ −1
− 1)cV dν. Let us note that the num-
ber of moles inside the bulb is ν = p0ξV
RT0
⇒ dν = p0V
RT0
dξ. So,
U = p0V cV
R
R 1
0 (ξ
1
γ −1
− 1)dξ = (γ − 1)p0V cV
R
. Now, recall
that γ = cp/cV = 1 + R
cV
, hence cV
R
= 1
γ−1
and U = p0V .
This gives us the energy loss due to heating the released air; an-
otherp0V isrequiredforloss-freecreationofthevacuum. Hence,
thetotal requiredworkisA = 2p0V .
8. Heatsink(6points)
i)WhentheaveragetemperatureisstableatT0,allthepowerdis-
sipated at the electronic component iseventually given to the air:
theairisbeingheatedwithpowerP. Astheheatfluxdependslin-
early on the temperature difference between a point on the plate
and the air, the average heat flux and therefore the net power dis-
sipatedintotheairdependslinearlyontheaveragetemperatureof
theplate. Theaveragetemperaturedeterminestheradiatedpower.
Now consider the situation after the heating has ended. The
average temperature is initially the same, so the radiated heat
power is initially still P. By the definition of heat capacity, an
infinitesimal heat amount given to the surroundings is dQ =
−C dTavg withtheminussignencoding thedirection oftheheat
flow. Thus, at the first moment, P = dQ
dt
= −CdTavg
dt
. Assum-
ingthat during τ theaveragetemperature dependsapproximately
linearly on time (because T0 − T1 = 1◦
C is much lessthan the
usual ambient temperature),
dTavg
dt
≈ T1−T0
τ
and C ≈ Pτ
T0−T1
=
350J/◦
C. ActuallythegraphofTavg(t)isslightlycurveddown-
wards(asitisanexponentialeventually stabilizing attheambient
temperature)andinitially somewhatsteeper,soC isabit smaller.
ii)Theaveragetemperatureoftheheatsinkfallsoffexponentially,
therefore, if the “tail” of the given graph turns out to be expo-
nential, we can presumethe “tail” depicts the situation where the
sensor is sensing the average temperature and the initial “bump”in thetemperature distribution hasevened out. Extrapolating the
exponentialtot = 0wegettheinitial averagetemperatureTavg,0
(immediately after the Q has been dissipated into the sink) and,
by Q = C(Tavg,0 − Tamb), the heat Q. The ambient temper-
ature Tamb can be read off fromthe beginning of the given graph
where the sensor’s surroundings have not yet heated up. This is
furthermorea check forthe assumptionT0 − T1 ≪ Tamb made
in the first partofthe solution. Fromthe table, Tamb = 20.0◦
C.
Letusanalysethe(yethypothetical)exponentialTavg−Tamb
ought to obey, so that eventually we expect T ∼ Tavg =
Tamb +Tce− t
tc whereTc andtc are,respectively,acharacteristic
temperatureandacharacteristictime. (The“∼”means“isasymp-
toticalto”or“approaches”.) Weplotln(T −Tamb)usingthedata
from the table. Then approximate the “tail” linearly (valuing the
end of it most) to get ln[(T − Tamb)/◦
C] ∼ 4.89 − t
300 s
.
Therefore Tc ≈ e4.89 ◦
C ≈ 133◦
C. On the other hand,
plugging t = 0 into our exponential function shows that
Tavg,0 − Tamb = Tc and,finally, Q = CTc ≈ 46700J.
Actually, quite a good result can be obtained without re-
plotting anything, by just considering the last three datapoints
of the table. Denote ∆Ti ≡ Ti − Tamb. If the times t3 −
t2 = t2 − t1, then with an exponential we should observe
that ∆T3/∆T2 = ∆T2/∆T1. The last three timepoints are
good indeed, so we check ∆T1 = 4.4◦
C, ∆T2 = 2.3◦
C
and ∆T3 = 1.2◦
C. Their ratios are ∆T3/∆T2 ≈ 0.522 and
∆T2/∆T1 ≈ 0.523, a splendid match. This confirms the ex-
ponential “tail”. As in every equal time interval the ∆T is mul-
tiplied by the same number (that is the essence of exponentials),
Tc = ∆Tavg,0 = ∆T3 ×

∆T2
∆T3
 t3
t3−t2
≈ 114◦
C. From this,
Q ≈ 39900J. This is discrepant from our previous calculation,
butnottoomuch: Tc isexponentially sensitivetotheT-intercept
of the straight line fitted to the “tail” (its crossing point with the
T-axis)on the logarithmicplot. Thebumphasstillnot yetdisap-
pearedcompletelyenough.
9. Coefficientofrefraction(10points)
i) We direct the laser beam radially into the semi-cylinder: per-
pendicularly through its cylindrical surface. The beam enters the
plate without refraction and reaches the opposing flat face at the
axisofthecylinder. Dependingontheanglebetweenthatfaceand
the beam, there mayor may not be a refracting beam, but there is
alwaysa reflecting (fromthe flat face) beam . We rotate the semi-
cylinder around its axis to find the position, when the refracting
beam appears/disappears; the angle α between the flat face and
the incident beam correspond to the angle of complete internal
reflection, i.e. n = 1/cosα. We can measure cosα using the
graphpaper: wedrawthebeamasasegmentAO andtheflatface
of the semi-cylinder as a line BO so that 6 ABO = π/2; then,
n = |AO|/|BO|. The uncertainty can be found using the for-
mula ∆n = n(∆|AO|
|AO|
+ ∆|BO|
|BO|
) and by estimating the uncer-
tainties ofthe direct length measurements∆|AO|and ∆|BO|.
ii)Wedroptheliquidontheprismandpressitagainsttheflatface
of the semi-cylindrical plate. Further we study the complete in-
ternal reflection at the boundary between the semi-cylinder and
prism (which is filled with the liquid) by repeating the above
described experiment. Thereby we measure new lengths A′
O
and B′
O; the condition of complete internal reflection is now
n/nl = |A′
O|/|B′
O| ⇒ nl = n|B′
O|/|A′
O|, where nl
stands for the coefficient of refraction of the liquid. The uncer-
tainty isnow calculated as∆nl = nl(∆|A′
O|
|A′O|
+ ∆|B′
O|
|B′O|
+ ∆n
n
).
