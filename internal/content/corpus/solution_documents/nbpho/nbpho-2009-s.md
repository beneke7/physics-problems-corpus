---
id: solution-document-nbpho-2009-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2009_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2009-ball, nbpho-2009-black-box, nbpho-2009-boat, nbpho-2009-magnetic-pulse, nbpho-2009-nanoclock, nbpho-2009-pencil, nbpho-2009-soap-film, nbpho-2009-spring, nbpho-2009-stratostat, nbpho-2009-wedge]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2009_S.pdf."
---

Estonian-Finnish Olympiad-2009
1. Boat(9points)
i) From the Newton II law, mdv
dt
+ αdx
dt
= 0. Multiplying this
equation by dt, we obtain dv + α
m
dx = 0. Integrating (i.e.
summing over all the small increments dx and dv) this equation
leadsus to
v +
α
m
x = Const,
i.e.k = α
m
.
ii) We proceedin the same way as before, but we need to add the
interaction force between the boat and the boy: mdv
dt
+ αdx
dt
=
M du
dt
. [Note that since the right-hand-side of this equation is
the interaction force, it goes to zero, if the boy leaves the boat.
Therefore, if we want to keep this equation correct even after the
boyleavestheboatatthemomentoftimet = t∗,wemustassume
u(t) ≡ u(t∗) for t > t∗.] Similarly to the previous section, we
obtain
v +
M
m
u(t) +
α
m
x = Const.
iii) We use the conservation law of the previous section, and
compare the value of the left-hand-side immediately before the
boy lands into the boat with its value after a very long time.
Bearing in mind that we need to substitute u(t → ∞) = −u2
(seeabove), weobtain
0 +
M
m
u1 + 0 = 0 −
M
m
u2 +
α
m
s.
So,
s =
M
α
(u1 + u2),
i.e. the result is independent of how long time did the boy spend
in the boat.
2. Nanoclock(10points)
i)Allthechargesoftheringareatthesamedistancefromthepoint
P, l =
√
R2 + z2. So, according to the superposition principle,
the potential is the sumofpotential ofallthe charges,
ϕ = kQ/
√
R2 + z2.
ii)E = −dϕ
dz
= kQz/(R2
+ z2
)3/2
.
iii) For |z| ≪ R we may approximate (R2
+ z2
)3/2
≈ R3
, so
that E =≈ kQz/R3
.
iv) From the Newton II law, mz̈ = −ekQz/R3
, i.e. ω2
=
ekQ/mR3
and f = 1
2πR
q
ekQ
mR
≈ 5.6 × 1012
Hz.
v) At the origin, there are no charges; hence, the electric field
lines cannot neither start nor end there. Consider a tiny coaxial
cylinder embracing the origin. The field lines exit the cylinder
through its bottom and top surfaces (because there is an electric
field E =≈ kQz/R3
). Hence there must be field lines entering
thecylinderthroughitssidesurface. Thisimpliesaradialrepelling
forceforan electronsituated at that surface,i.e.instability.
Remark: In the same way, one can prove a theorem,
electrostaticequlibria arealwaysunstable.
3. Ball (8 points) A straightforward way to solve parts i), ii),
andiii)istouseconservationofangularmomentumwithrespect
to any axis laying on the surface (there is no torque with respect
to these axes). Angular momentum at the beginning: L0 =
mvr. Rolling ball is always rotating around the touching point
with theground(althoughthelocationofthat pointisconstantly
changing). From Steiner’s theorem we know that for a rotation
axis that is located at the distance r form the center of mass, the
moment of inertia is I′
= I + mr2
. Therefore the angular
momentum for rotating ball is L′
= I′
ω and clearly L0 = L′
,
therefore mvr = (I + mr2
)ω, ω = mvr
I+mr2 .
i)Thetorque with respectto center ofmass: M = mgµr. Since
M∆t = I∆ω, and the sliding stops when angular speed has
reachedvalueω,weobtainthecorrespondingtime: t = Iω
mgµr
=
Iv
gµ(I+mr2)
.
ii) Clearly, ω∗ = mvr
I+mr2 and E∗ = 1
2
(mv2
∗ + Iω2
∗) =
1
2
(mr2
ω2
∗ +Iω2
∗) = m2
v2
r2
2(I+mr2)
. IfI increasesthenE∗ decreases.
iii) Since we didn’t make any assumptions about the functional
formof µwhile deriving w∗, the resultsw∗ and E∗ ofii) are still
valid.
iv)ThenetforceF = Fµ+Fr causesthedecreaseoftranslational
velocity: m∆v = F∆t, v′
(t) = v−(µ+µr)gt. Thesliding
stopswhenω(t) = v′
(t)/r. Notethatthetorquewithrespectto
center of mass is only caused by kinetic frictional force,therefore
ω(t) = mgµr
I
t. Wegetanequationforthetimeofthetermination
of sliding: mgµr2
I
t = v − (µ + µr)gt, t = Iv
gµ(I+mr2)+gµrI
.
Thecorrespondingangularspeedω∗
′′
= mvr
I+mr2+µr
µ I
,andenergy
E∗
′′
= 1
2
(I + mr2
)ω2
∗. Clearly,E∗
′′
< E∗.
4. Black box (9 points) Independetly of whether there is a
triangular or a star connection, one can measure the ratio of the
resistances a pair of resistors by connecting the battery to two
outlets — let these be the outlets 1 and 3, and measuring the
voltages between the outlets 1 and 2, and between the outlets 2
and 3. Fora starconnection,
R3
R1
=
V23
V12
,
where Ri denotes the resistor closest to the i-th outlet; for a
triangular connection,
R3
R1
=
V12
V23
,
where Ri denotes the resistor farthest away from the i-th outlet;
fora triangular connection,
In such away wefind
R3
R1
≈ 4,7,
R3
R2
≈ 3,3,and
R2
R1
≈ 1,4,
implying R1 = 100Ω, R2 = 140Ωand R3 = 470Ω; or
R1
R3
≈ 4,7,
R2
R3
≈ 3,3,and
R1
R2
≈ 1,4,
R3 = 100Ω, R2 = 330Ω and R1 = 470Ω. So, we can
conclude that the largest resistance is 470Ω, and the middle-
valued resistanceiseither 330Ωor140Ω.5.Pencil(6points)Weputthepencilwithitsgraphiteendagainst
ahorizontalsheetofpaper,andpushtheotherendwithafingertip
(without holding between thefingers andthereby possiblygiving
a torque to it). Then, there will be a purely longitudinal stress
inside the pencil (there is no bending of the pencil). If we push
strongly enough, we may neglect the weight of the pancil in the
balance of torque with respect to the fingertip. So, equilibrium
impliesthattheresultantforceofthefrictionandreactionforcesat
thegraphiteendarealongtheaxisofthepencil. Thisispossible,if
tanα ≤ µ,whereαistheanglebetweenthepencilandavertical
line. So, we increase α wile pushing the pencil, and determine
the position α0, when the pencil starts sliding; tanα0 can be
calculated astanα0 = x/
√
l2 − x2,where l isthe length ofthe
pencil, and x is the length of the projection of the pencil onto a
horizontalplane.
6. Spring (7 points) First, we measure the lengthening of the
springunderitsownweight. Therelativelengtheningofeachloop
is propotional to the order number of the loop. So, the average
valueofthoselegthincrementsishalfofthelargestincrement(for
the topmost loop). The topmost loop is deformed by the weight
of the whole spring, hence the average deformation corresponds
to thehalf-weight ofthe spring,
kx1 = mg/2.
Now we add a load to the lower end of the spring and measure
the new deformation x2. Since the additional weight of the load
increases the stress of all the loops by the same value Mg, each
loopis deformedadditionally by the same length increment. The
sum of those additional increments is x2 − x1; according to the
Hook’slaw, k(x2 − x1) = Mg. So, x2
x1
− 1 = 2M
m
, and
M =
m
2
x2 − x1
x1
≈ 6g.
7. Soap film (6 points) Suppose the area of a broken part of the
soap film is S. The corresponding surface energy is ES = 2σS.
The mass of the soap water that was previously located at the
broken part is m = Shρ, where ρ = 103
kg/m3
. Assuming
that the surface energy is transformed to the kinetic energy of
the moving front, we get an equation for the speed of the front:
2σS = 1
2
mv2
, 4σS = Shρv2
. Therefore v =
q
4σ
hρ
=
q
4 ·0.025
10−6 ·103 m/s = 10m/s and we can estimate the time of
breakupofthe soapfilmto be t = D/v = 1
100
s.
8. Magneticpulse(7points)Sincewecanneglecttheinductance
of the coil, it performes as a voltage source, which outputs U =
NSB/τ = 1V during the time period between t = 0ms and
10ms, and 0V otherwise. The characteristic time scales of the
RC andLC cirquitsareτ1 = R1C = 0.6sandτ2 = L/R2 ≈
0.3s. So, for both cirquits, the processes are very fast, i.e. the
capacitor is effectively short-circuited, and almost all the voltage
fallson the inductance.
i) According to the considerations given above, I1 = U/R1 ≈
0.33A. As for I2, it starts growing from 0A at t = 0 at a rate,
given by LdI
dt
= U,i.e.I2 = Ut1/L = 5mA.
ii) When the voltage U is switched off (at t = τ = 10ms),
the capacitor will (almost completely, because t2 − τ ≪ R1C)
retain the charge it has accumulated, Q = I1τ. All the voltage
of the capacitor (Q/C) will fall on the resistor R1, so that I′
1 =
Q/R1C = Uτ/R2
1C ≈ 5.6mA. As forthe inductance, it will
retain(almostcompletely,becauset2 −τ ≪ L/R2)thecurrent
it has acquiredduring the first 10ms,I′
2 = Uτ/L = 10mA.
iii) Since the current in R2 will decay very slowly, as compared
to its growth during the first 10ms, we can neglect the charge
passing thorugh it during t < τ. Then we can write the Kirhoff’s
lawintheformLdI
dt
+R2
dq
dt
= 0,fromwhereLdI+R2dq = 0,
and L∆I = −R2∆q. Since ∆I = −I′
2, we obtain ∆q =
LI′
2/R2 = 3.3mC.
9. Stratostat(5points)
i)Considerthepressuredifferenceatheightsz+dz andz: dp =
−ρgdz (the difference is simply due to the weight of the layer
dz). The density can be found using the state equation of ideal
gas: pV = m
µ
RT, ρ = m
V
= µp
RT
. Therefore 1
p
dp
dz
= − µg
RT
.
Note that we have a derivative of a logarithm: 1
p
dp
dz
= dlnp(z)
dz
.
Thereforeln(p/p0) = −αz, p = p0e−αz
,where α = µg
RT
.
Alternatively, we can derive this law from the Boltzmann
distribution for the particle density n = n0e−U/kT
, where U
is the potential energy of a molecule. Bearing in mind that for a
constant temperature, the pressure is propotional to the density,
weobtainp = p0e−U/kT
. SubstitutingU = mgz = µ
NA
gz and
R = kNA,we obtain the sameresultasabove.
ii) Clearly, the pressures inside and outside of the stratostat are
equal and depending on the height as p = p0e−αz
, where
α = µag
RT
. For helium inside the sack pV = const. Let the
volume of the stratostat be VS, therefore p0βVS = pVS, where
p is the pressure at the height, where helium has filled the entire
volume. Since p = βp0, we obtain µag
RT
h = −lnβ, h =
RT
µag
ln 1
β
, h = 17km.
10. Wedge (5 points) The center of mass of the system doesn’t
move, therefore Mu = mvh, where u and vh are the horisontal
components of the velocities of the wedge and block in the lab
frameat someinstant oftime. In the wedge’sframe,the block has
horisontal velocity v′
= vh + u = vh(1 + m
M
). Since the
block is sliding down the wedge, the vertical component of the
blockhastobe v↓ = v′
tanα. Thetotal kinetic energy in the lab
frameEK = 1
2
(Mu2
+mv2
h +mv2
↓). Substituting therelevant
quantitiesandsimplifying, weobtain
Ek =
m
2
v2
↓β, where β ≡
M
M + m
cot2
α + 1.
The kinetic energy equals to the change in potential energy:
m
2
βv2
↓ = ∆EP = mg(h − h′
). By differentiating and noting
thatdh = dt·v↓,wegetβdv↓ = gdt, t = β
g
v↓max. Fromthe
abovewrittenenergyconservationlawwegetv↓max =
q
2gh
β
;so
wefinally have t =
q
2βh
g
=
r
2h
g

M
M+m
cot2
α + 1

.
