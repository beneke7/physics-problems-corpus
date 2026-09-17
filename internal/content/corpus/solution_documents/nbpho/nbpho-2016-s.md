---
id: solution-document-nbpho-2016-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2016-black-box, nbpho-2016-candy-wrapper, nbpho-2016-charge-on-ring, nbpho-2016-deflection-on-falling, nbpho-2016-dimmer, nbpho-2016-fuel-consumption, nbpho-2016-glass-plate, nbpho-2016-helium, nbpho-2016-music, nbpho-2016-oscillations]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2016_S.pdf."
---

Nordic-Baltic Olympiad 2016
Solutions
1. Fuel consumption If the car produces
a forward force F at a speed of v, then the work
done on a path length s is W = Fs. Since the ef-
ficiency is constant, this work is proportional to
the consumed fuel volume, W = ksf, where
f = f(t) denotes the fuel consumption rate
(volume per distance), and k is a proportional-
ity coefficient. Hence, F = kf(t), i.e. the fuel
consumption graph can be interpreted as a force
graph. The proportionality constant k can be
found from the fact that when the car is start-
ing from the rest, there is no air drag (air drag is
zero if speed is zero), and hence, all the driving
force goes to accelerating the car, F(0s) = ma0.
Keeping in mind that f(0s) = 33l/100km =
ma0/k = mg
2k , we obtain k
mg = 1.52km/l.
At v0 = 90km/h, there is air drag which we
need to consider, but since the speed is constant,
so is the force from the air drag and we can just
subtract F(16s) to get the force without the air
drag. Theincreasedfuelconsumptionwhengoing
uphill at an angle α comes from the component
of the gravitational force tangential to the road
F(t) − F(16s) = mg sin(α). The highest point
with sinα = 0 is reached when the fuel con-
sumption is again equal to that at 16s, which is
at 22s. The work done by the force pushing the
car W =
∫
[F(t) − F(16s)]ds =
∫
[F(t) −
F(16s)]v0dt = k
v0
∫22s
16s
[f(t) − f(16s)]dt goes
to the change of the potential energy mgh; here
the integral I ≡
∫22s
16s
[f(t) − f(16s)]dt ≈
0.38ls/km is found as a surface area from the
graph [the area between the graph and the line
f(t) = f(16s)]. Therefore, h = W/mg =
kI
v0mg ; with k
mg = 1.52km/l we obtain h ≈
14m.
The problem was graded as follows.
• Relating consumption rate C to F - 1.5p
• Determining the coeff. of proportionality
basedonC(0) = 33L/100kmanda(0) =
5m/s2
- 0.5p
• Noticing that max height is at 21s - 0.5p
• Noticing that due to friction, only the excess
consumption is related to mgh - 1p
• Relatingtheexcessareaunderthecurve(S)to
mgh - 1p
• Finding S - 0.3p
• Finding h - 0.2p
2. Glass plate
i) The energy and impulse of a photon are re-
lated by E = pc. Because the incident side is
black,itwillabsorbthephotonsandfeeltheforce
due to their momentum: Fa = dp
dt , where dp
dt =
1
c
dE
dt = P
c is the impulse of the photons gener-
ated per unit time. Fa = P
c .
ii) A fraction r of the photons will be reflected,
sotheywillexerttwicetheforce,becausethemo-
mentum change is twice as much as compared to
absorbingthem. Afraction1−rwillbeabsorbed
andwillgiveaforcesimilartothepreviousexpres-
sion.
Fb = 2r
P
c
+ (1 − r)
P
c
= (1 + r)
P
c
.
iii) The light will be reflected many times and
we will have to consider interference. Since en-
ergy is proportional to the square of the amp-
litude of the electric field, if a fraction r of the
photons and therefore of the energy is reflected,
theamplitudeofthereflectedwave’selectricfield
is
√
r of the incident electric field. Let’s calculate
the total electric field amplitude of the wave that
goes through. Denote by Ei the electric field of
the incident wave and by Et the electric field of
the wave that has gone through the other side of
the glass. On the incident side the proportion of
the electric field amplitude that goes through is √
1 − r, of which a part
√
1 − r will go through
and part
√
r will bounce pack. So a wave with
amplitudeE0 = (1−r)Ei wentstraightthrough
andawavewithamplitude
√
(1 − r)rEi isboun-
cingbackthroughtheglass. Nowitwillgobackto
thefirstside,reflectbackfromthereandofthata
proportion
√
1 − rwillgothroughandaddtoEt.
However the wave has traveled an optical path
2nd = 200.5λ, so it will be 180 degrees out of
phase and we get E1 = −(1 − r)rEi. Repeat-
ing the procedure E2 = (1 − r)r2
Ei and so on
En = (1−r)(−r)n
Ei. Summingalltheelectric
fields that go through the other side of the glass
we get:
Et =
∞ ∑
n=0
En = (1−r)Ei
∞ ∑
n=0
(−r)n
=
1 − r
1 + r
Ei.
Powerisproportionaltothesquareoftheelectric
field:
Pt
P
=
(
Et
Ei
)2
=
(
1 − r
1 + r
)2
.
Sincepowerisalsoproportionaltothenumberof
photons, this fraction of the photons have gone
through and haven’t given their momentum to
the glass. By energy conservation the rest have
been reflected back toward the laser and since
their momentum has been reversed:
Fc = 2
(
P − Pt
c
)
=
2P
c
(
1 −
(
1 − r
1 + r
)2
)
=
8Pr
c(1 + r)2
.
Note: if we would calculate directly the total
electricfieldof thereflected light,wewouldneed
to take into account that on the first reflection
of the laser light from the glass there is a phase
shift of 180 degrees due to reflection from a sur-
facewithahigherrefractiveindex(airtoglasssur-
face).
Alternative solution: The light is bouncing
back and forth. Inside the glass there is some
sum of waves with the same frequency, which we
can represent as a single wave moving forward
and a single wave moving backwards. Denote
by E the wave amplitude of the forward moving
wave right under the surface in the glass. The
wave amplitude is constant at that point and it
is made of the transmitted part of the incoming
light
√
1 − rEi and from the 180 degrees out of
phasepartofEitselfasitbouncestwiceinsidethe
glasstoarriveatthesamepointbackagain: −rE.
We get the relation:
E =
√
1 − rEi −rE → E =
√
1 − r
1 + r
Ei.
The wave that has gone all the way through the
plate is
Et =
√
1 − rE =
1 − r
1 + r
Ei.
The rest follows as in the previous solution.
3. Music
i) For the tubular bells we can find the speed of
sound in steel using dimensional analysis. It can
dependontheyoungmodulusE andonthedens-
ity ρ. We find that v ∝
√
E
ρ ∝
√
EL3
m , where L
is the characteristic length of the bell. The speed,
frequency and wavelength are related by f =
v
λ. For a standing wave to exist on the bell, the
wavelengthmustbeproportionaltoit’scharacter-
istic length, because it has anti-nodes at the ends:
λ ∝ L. Wegetf ∝
√
L3
L =
√
L. Duetothermal
expansion,thelengthsscaleby(1+α∆T),where
α is the coefficient of thermal expansion. Using
this we have f = f0
√
1 + α∆T ≈ 330.04Hz.
This is a very small change from f0 = 330Hz.
For the pipe organ we also have f = v
λ.
The sound is generated by a standing wave in
the air column. The speed v in the formula is
the speed of sound in the air. As in the previ-
ouscase,thewavelengthhastobeproportionalto
the length of the pipe for a standing wave to exist
and the length scales by (1 + αT). Since αT ≈
2.4 × 10−4
is much smaller than the change in
the speed of sound, we can ignore it. Using the
given formula for the speed of sound, we have
f = f0
√
1 + 45
273.15/
√
1 + 25
273.15 ≈ 341Hz.
This is a significant change.Fortheguitarstringthespeedofthewavecan
depend on the mass m of the string, the length
L and the tension T. Using dimensional analysis
we get v ∝
√
LT
m . A more accurate derivation
willshowthattheconstantofproportionalityis1,
whichwouldbethesimplestguess. Thelowestfre-
quency on the string has a wavelength of 2L, be-
causethewavehastohavenodesattheendsofthe
string. The tension is given by T = ES∆L/L,
where∆Listhechangeinlengthofthestringdue
tothetensionandS istheareaofthecrosssection
of the string. Putting it all together:
f =
√
LT
m
2L
=
√
LES∆L/L
ρSL
2L
=
√
E∆L/L
ρ
2L
.
Let’s find ∆L
L = ρ
E (2Lf)2
≈ 7.3 × 10−3
.
When the temperature increases and the string
stretches, the relative lengthening ∆L
L will de-
crease by αT, ∆L
L → ∆L
L − αT =
∆L
L
(
1 − αT
∆L/L
)
= ∆L
L (1 − 3.3 × 10−2
). This
proportional change is larger than the changes
in the other factors (the lengths get scaled by
(1 + α∆T)), which we can ignore. We get f =
f0
√
1 − 3.3 × 10−2
≈ 325Hz. This is also a sig-
nificantchangewhentheinstrumentsareplaying
together.
ii) Forthetubularbellsandfortheguitarthefre-
quency is determined by the properties and the
speedofsoundofthemetalandthereforedoesn’t
change in the heliox. For the pipe organ, the
sound is generated directly by the vibrating air
column in the pipe and changing the air to heliox
will change the frequency. The wavelength is de-
termined by the length of the pipe and since the
frequencyis f = v
λ, it willchange proportionally
with the speed of sound, f = 1.7 · f0 ≈ 561Hz.
This is a very significant change.
4. Dimmer
i) Denote ω = 2πf. Adding an imagin-
ary component to the voltages u = Uejωt
and uC = UCej(ωt+φ)
(with j being the
imaginary unit), there is a relation uC =
uzC/(R + zC), where the capacitor’s imped-
ance zC = 1/(jωC). Calculating, we get
k ≡ zC/(R + zC) = 1/(jωRC +
1) = 1/
[√
1 + (ωRC)2 × ej arctan(ωRC)
]
.
Therefore UC = U|k| = U/
√
1 + (2πfRC)2
and φ = argk = −arctan(2πfRC). (The an-
swerscouldalsobeobtainedbyanalyzingavector
diagram.)
ii) Thediacstartstoconductwhenthevoltageon
the capacitor rises to Ub. This voltage is then ap-
plied to the series connection of Rt and the diac,
whose voltage has dropped to Ud. Therefore the
currentthroughthediacis(Ub−Ud)/Rt andthe
inequality is RtIt < Ub − Ud.
iii) At t0, the voltage on the capacitor becomes
larger than Ub. Thus, UC sin(2πft0 + φ) = Ub
and t0 = [arcsin(Ub/UC) − φ]/(2πf).
iv) The lamp is lit at phase 2πft0 and turned
off at phase π. The power is proportional to the
voltage squared, giving the ratio
r =
∫π
0
sin2
αdα
∫π
2πft0
sin2
αdα
.
Because
∫
sin2
αdα =
∫ 1−cos(2α)
2 dα = α
2 −
sin(2α)
4 , we get
r =
(
π
2 − sin(2π)
4
)
−
(
0
2 − sin(0)
4
)
(
π
2 − sin(2π)
4
)
−
(
2πft0
2 − sin(4πft0)
4
)
=
1
1 − 2ft0 + sin(4πft0)
2π
.
5. Candy wrapper The setup is as follows.
First the candy wrapper is cut in half and then
woundaroundthehexagonalpencilonbothends
A times and fixed tightly against the other pen-
cil using the rubber bands. That way there is a
gap of width Ad between the two pencils. The
laserlightisdirectedthroughthegapbetweenthe
two pencils and the resulting diffraction pattern
is displayed on the screen (which is fixed vertic-
ally to the stand). We can keep the pencils and
laser horizontal using the given clamps and ad-
justtheheightofthelasersoitpassesthroughthe
gapbyplacingsheetsofpaperbelowthelaser. Be-
cause the pencil surface is rough the gap between
the pencils varies. In order to diminish this ef-
fectwecanputmorelayersofthecandywrapper
between the pencils. The resulting experimental
values are displayed on the table, where N is the
numberoflocalmaximaorminimaonthescreen,
a is the distance between the first and last meas-
ured maximum or minimum and L is the dis-
tance from the screen to the pencils. Note that
thecentralmaximumisdouble-wideandwehave
totakeitintoaccountwhencountingminima(as
it covers one minimum) and take it into account
twice when counting maxima.
A N a (cm) L (cm) d (µm)
12 21 2.4 70 20
12 14 1.6 63 29
8 9 1.3 60 23
Let θ be the angle of incidence of the laser light
that lands on the screen. Then the difference
between the angles for the different maxima or
minima can be expressed as θ ≈ a
L using the
small angle approximation. The number of max-
ima or minima can be expressed using Aθd =
Nλ. Then
d =
Nλ
Aθ
=
NλL
Aa
Using the data from the table we get d = 25µm.
The main contributing factor for uncertainty
comesfromtheroughnessofthepencilwhichcan
be estimated usingthe maximal and minimal val-
ues of measured wrapper thickness. Then ∆d ≈
dmax−dmin
2 = 4.5µm.
6. Charge on a ring
i) The speed v is just the magnitude of rϕ̇, and
energy conservation gives us that
v2
+
C
|r − rQ|
= const. = 2E/m,
where C = Qq
2πmϵ0
. The value hence must equal
theinitialvalue. Thefigureindicatesthatϕ(0) =
0 and ϕQ = −π/2, and we get:
v(ϕ)2
= v2
0+
C
√
r2 + d2
−
C
√
r2 + d2 + 2rdsinϕ
,
and v(ϕ) is just the square-root of this.
ii) The force Fn from the ring is a constraint
force, normal to the ring, and balances the other
forces to give a total perpendicular force equal to
the required centripetal force Fc = mv2
/r, dir-
ected inwards. The other force is the Coulomb
repulsion (if C > 0) from Q, with a magnitude
FQ = mC
2(r2+d2+2rdsinϕ). Its perpendicular com-
ponent acquires a factor of cosα, with α the
anglebetweenthelocalradiusvectorandtheline
Qq. The cosine theorem on the triangle defined
by q, Q, and the ring’s center yields cosα =
r+dsinϕ √
r2+d2+2rdsinϕ
. We have cosα > 0 consist-
ently, the normal part of FQ pointing outwards
everywhere(intherepulsivecase). Wegetforthe
force from the ring
Fn =
mv2
r
+
mC (r + dsinϕ)
2(r2 + d2 + 2rdsinϕ)
3/2
,
with both terms directed inwards in the repuls-
ivecase of C > 0, else the second term will point
outwards.
iii) When the particle has come to rest, the fric-
tionforceparalleltotheringisautomaticallyzero,
but the other forces must balance. All normal
forcesareautomaticallybalancedbythering. We
needtoconsiderthelongitudinalforce,whichcan
only come form the Coulomb force on q, and so
itslongitudinalcomponentmustvanish. Thiscan
only happen in two places, at the maximal and
minimal distance from Q, i.e. at the top or bot-
tom point. These points correspond to a min-
imum and maximum, respectively, of the electro-
static potential, and only the former would be
stable for the repulsive case of qQ > 0 (else the
opposite).7. Helium The heat required for vaporiz-
ation comes from the heat energy of the liquid:
λdm = mc(T)dT. By separating the variables
m and T and integrating, we get:
λ
∫ m
m0
dm′
m′
=
∫ T
T0
cdT′
,
λln
m
m0
=
∫ T
T0
cdT′
,
m
m0
= exp
∫T
T0
cdT′
λ
.
By numerically approximating the integral
from the given graph, we get
∫T
T0
cdT′
≈
−5.2kJkg−1
. Thusthefractionofliquidthatwas
vaporized is
m0 − m
m0
= 1−
m
m0
≈ 1−exp
−5.2kJkg−1
22kJkg−1 ≈ 0.21.
8. Oscillations
i) The stiffness k of the spring is found from the
force balance mg = kx, thus k = mg/x. The
period of oscillations for such a spring pendulum
is T = 2π
√
m/k
!
= 2π
√
l/g =⇒ l =
mg/k = x.
ii) ApplyGauss’stheoremtoaspherewithradius
r, concentric with the asteroid. By symmetry,
the field strength (the gravitational acceleration)
is constant on the sphere, thus the flux of this
field strength equals the area of the sphere mul-
tiplied by field strength (with a minus sign, be-
causetheforceisdirectedinwards). Ontheother
hand,Gauss’stheoremstatesthatthisfluxequals
−4πGtimesthetotalmassinsidethesphere. For-
mulaically (denote the asteroid’s density by ϱ),
−4πr2
g = −4πG× 4
3πr3
ϱandg = 4
3πGϱr =
GMr/R3
(denotingthetotalmassbyM andthe
totalradiusbyR). Wheneverwehavean attract-
iveforcethatisproportionaltothedisplacement,
wehaveharmonicmotion(likeinaspringpendu-
lum).
iii) Identifying the gravitational acceleration
as the centripetal acceleration, GM/R2
=
ω2
oR =⇒ ω2
o = GM/R3
(with ωo being
the orbital angular speed). The time of reaching
the friend is to = To/2 = 2π
ωo
/2 = π/ωo.
Through the hole, on the other hand, we have
halfaperiodofaneffectivespringpendulumwith
a “stiffness” k = GMm/R3
: namely, th =
Th/2 = 2π
ωh
/2 = π/ωh. From the “stiffness” and
a general formula for a spring pendulum, ω2
h =
k/m = GM/R3
= ω2
o. Therefore to = th —
the times are equal!
iv) Asthe motion after abounce equals the time-
reversed motion before the bounce, the period is
twice the time of the first bounce (tb). For a con-
stant acceleration, h = gt2
b/2 =⇒ T = 2tb =
2
√
2h
g . On the Earth, g ≈ 10m/s2
, therefore
T = 2
√
2×50cm
10m/s2 ≈ 0.6s.
This is not a harmonic motion, because the
displacement is a quadratic function of time, not
a sinusoid. Also, here the restoring force is not
proportional to displacement.
9. Deflection on Falling
i) The Earth is rotating with angular velocity
ω = 2π
T , where T = 24h. The velocities at the
top and bottom of the shaft are vt = ωR and
vb = ω(R − h), where R is radius of Earth. The
differenceofthevelocitiesisthus∆v = vt−vb =
ωh ≈ 7.3mm/s.
ii) The time of free fall can be found from the re-
lation h = gt2
/2, giving t =
√
2h/g. Thus, the
horizontal displacement is simply ∆x = ∆vt =
ωht = ω
√
2h3/g ≈ 33mm.
iii) There are at least three different approaches
to this problem; one is using the angular mo-
mentum conservation law, second one is based
onKepler’slaws(givenlaterbelow),andthethird
one — which we don’t consider here — is based
on Coriolis force formula.
Consider the rotation speed ω′
of the radius
vector drwan from the falling body to the centre
of Earth, and let us compare this speed with
the rotation speed of Earth ω. The angular mo-
mentum of the falling body is conserved, hence
ω′
r2
= ωR2
. We can substitute r = R − y,
where y is the current depth, and approximate
ω′
= ω
(R
r
)2
≈ ω(1+2 y
R). Therefore,thehori-
zontaldisplacementspeedintheEarth’sframeof
referencevh = (ω′
−ω)r ≈ 2ωyR. Finally,hori-
zontal dipslacement is found as ∆x =
∫
vhdt = ∫
(2ωyR/vv)dy, where the vertical falling speed
vv =
√
2gy. So, we find ∆x = 2
3Rω
√
2h3/g ≈
22m.
Now, let obtain the same result using the
Kepler’s laws. Consider the trajectory of the steel
ball as seen in a non-rotating frame of reference.
Although it is a thin ellipse, we have drawn the
figure out of scale in order the facilitate the cal-
culation of areas. The steel ball is released from
point A and it hits the bottom of the shaft at
point D, at distance x from B, the location of bot-
tom at the start of fall. As the falling time is still
t =
√
2h/g, the location of the bottom travels
x′
= (v − ∆v)t = vt − ωht during the fall.
Thus, the horizontal displacement of the landing
point is simply ∆x = x − x′
.
Now, the distance x can be found using the
Kepler’s second law, stating that the area covered
byradiusvectorperunittime∆S/∆tisconstant,
which is a manifestation of conservation of angu-
lar momentum ∆S/∆t = L/2m = rv⊥/2.
(The latter relation could easily be obtained by
observing a circular orbit.) For our steel ball,
L/2m = Rv/2 = ωR2
/2. The area covered
by the steel ball can be calculated as the sum of
the segment OBD and the region ADB. Keeping
in mind that x ≪ R, the segment OBD is simply
atrianglewithareax(R−h)/2. Likewise,there-
gion ACDB is approximately a rectangle of area
xh and knowing that a parabola divides the area
ofitssurroundingrectangleintoproportions1/3
and2/3,weconcludethattheareaofregionADB
is 2xh/3. Thus, from the Kepler’s second law:
S =
1
2
x(R − h) +
2
3
xh =
1
2
vRt,
x =
vt
1 + 1
3
h
R
≈ vt −
1
3
ωht.
Finally, the horizontal displacement ∆x =
x − x′
= 2
3ωht ≈ 22mm. (Note that the naive
answer overestimated the correct one by 50%.)
10. Black box
i) There are a few ways to get an initial idea,
whatcouldbeintheblackbox. Onewayistoput
theammeterinserieswiththevoltagesourceand
measure the current through each combination.
Ubat = 1581 ± 14mV
Iblack→white = 4.33 ± 0.09mA
Iblack→blue = 2.21 ± 0.07mA
Iblue→white = 1.80 ± 0.06mA
Iblue→black = 2.20 ± 0.07mA
Iwhite→blue = 90.9 ± 2.8µA
Iwhite→black = 81.2 ± 2.8µA
Wecanseethattheotherterminalsareconnected
to white through the diode. That leaves us three
options.Wecandeducethecorrectschematicsoftheblack
boxfromthesemeasurements,buttherearemore
straightforward ways to test these options. One
is to measure the voltage U1 between “black”
and “blue” , while connecting the battery between
“black” and “white” . Secondly measure the voltage
U2 between “blue” and “black” , while connecting
the battery between “blue” and “white” .
U1 = 857 ± 9mV,U2 = 884 ± 9mV
Since neither is 0 we can eliminate options B and
C.
ii) From voltages U1 and U2 and currents
Iblack→white and Iblue→white we can calculate R1
and R2.
R1 = U1/Iblack→white = 196 ± 7Ω
R2 = U2/Iblue→white = 491 ± 22Ω
Uncertainties are calculated by summing the re-
lative errors of the current and voltage measure-
ments.
iii) From the current measurements we can
already calculate 4 datapoints for the current
voltage curve of the diode. We obtain additional
two datapoints by measuring the current while
the resistors inside the black box are connected
in parallel.
Iblueandblack→white = 5.86 ± 0.10mA
Iwhite→blueandblack = 85.3 ± 2.8µA
The calculated datapoints:
I0 = 0,U0 = 0
I1 = 1.80mA,U1 = 697mV
I2 = 4.33mA,U2 = 732mV
I3 = 5.86mA,U3 = 760mV
I4 = 90.9µA,U4 = 1536mV
I5 = 81.2µA,U5 = 1541mV
I6 = 85.3µA,U6 = 1569mV
