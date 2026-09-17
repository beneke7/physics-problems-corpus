---
id: solution-document-nbpho-2012-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2012_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2012-asteroid, nbpho-2012-bars-and-rod, nbpho-2012-black-box, nbpho-2012-diffraction-grating, nbpho-2012-elastic-collision, nbpho-2012-lifting-by-current, nbpho-2012-power-lines, nbpho-2012-rlc-circuit, nbpho-2012-thermodynamic-cycle, nbpho-2012-uranium-decay]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2012_S.pdf."
---

Estonian-Finnish Olympiad - 2012
Problem 1. Asteroid (14 points)
Part A. Collision with Earth (5 points)
i. (2 pts) The longer axis of the asteroid 2a = Rmax +Rmin =
2Re equals to that of Earth, so the full energies, when reduced
to the unit mass, are equal. Immediately before the collision,
the Earth and the asteroid are at the same distance from the
Sun, so the gravitational potentials are equal, too. Hence, the
speeds are also equal. The distance between the Sun and the
asteroid equals to the longer semiaxis, hence it is situated at
the shorter semiaxis of the orbit. The velocity of the asteroid
is perpendicular to the shorter semiaxis, and the velocity of the
Earth — to the radius vector drawn from the Sun. So, the angle
between those two vectors is the angle between the radius vec-
tor and the shorter semiaxis, sinα = 1
2(Rmax −Rmin)/Re = 1
2,
hence α = 30◦
. The relative velocity of the asteroid is the
vector difference of the two vectors, so its modulus equals to
va = 2v0 sin15◦
≈ 15.5km/s. When accelerated further by the
Earth’s gravity field, the respective gravitational energy will be
added to the kinetic one, vb =
p
v2
a + 2gre = 19.1km/s.
ii. (2 pts) At the limit case of impact, the trajectory of the
asteroid is tangent to the surface of the Earth. So, we can
apply the conservation of angular momentum for the point
where the trajectory touches the Earth, vab = vbre, hence
b = revb/va = 7900km.
iii. (1 pt) Suppose that the asteroid is delayed by τ; at that
moment when the asteroid is at the Earth’s orbit, the Earth
is at the distance l = v0τ from the asteroid. The relative ve-
locity of the asteroid forms with this displacement vector an
angle equal to 90◦
− 15◦
= 75◦
, hence the impact parameter
b = v0τ sin75◦
, from where τ = b/v0 sin75◦
≈ 270s. Since this
time delay is accumulated over 10 periods, the delay need for
a single period is τ/10 = 27s.
Part B. Changing the solar pull (9 points)
i. (2 pts) When γ changes, the kinetic energy remains con-
stant:
−
γ0
2a
+
γ0
0.5Re
= −
γ1
2a′
+
γ1
0.5Re
where a = Re and 2a′
= 0.5Re + R′
max. So,
γ1
2a′
=
γ0
2Re

4
γ1
γ0
− 3

⇒ (1 − κ)Re = a′
(1 − 4κ),
a′
= Re
1 − κ
1 − 4κ
, R′
max =
Re
2
3
1 − 4κ
.
ii. (2 pts) At the limit of small κ, we can simplify the previous
result,
a′
Re
≈ 1 + 3κ.
From the Kepler’s third law, T/T0 = (a′
/a)3/2
p
γ0/γ1, from
where ∆T
T0
≈ 3
2
a′
−a
a + κ
2 = 5κ. So, ∆T = 5T0κ.
iii. (4 pts) For photons, the energy-to-mass ratio is c. There-
fore, at the Sun’s surface, the momentum carried by photons
per unit time across a surface area S is given by dp/dt =
SσT4
s /c. As the result of the coating, the photons are re-
flected back by the asteroid, instead of being absorbed. So,
before coating, each photon gave to the asteroid a momentum
equal to its own; no it will double. Hence, the change in the
force due to photons is given by ∆F = πr2
aσT4
s /c (assuming
that the asteroid is at the Sun’s surface). Both the pressure
of photons and gravity force are inversely proportional to the
distance from the Sun, so the force due to photons can be, in-
deed, considered as a correction to the gravity constant. κ is
the relative change of that constant and can be calculated for
the Sun’s surface as
κ = ∆F/gSma = πr2
aσT4
s /cgSma ≈ 2.8 × 10−8
.
iv. (1 pt) We need to have ∆T = 27s, hence κ = 1
5
∆T
T0
≈
1.7 × 10−7
. This exceeds by an order of magnitude the effect
provided by the coating. κ provided by the coating is inversely
proportional to the diameter of the asteroid; the required κ is
inversely proportional to N. So, it would be possible to avert
collision for ra = 2m, or for ra = 10m with N = 60. In the
first case, the asteroid may not be large enough to warrant at-
tention; in the second case, 60 years is too long time. So, the
answer is “no”.
Problem 2. Thermodynamic cycle (5 points)
It is possible to realise the described process as a reversible
cycle between two reservoirs at T1 and T2 (in this case it is
called the Stirling cycle). A thermodynamic process is revers-
ible if and only if there is never any heat flux between re-
gions having non-infinitesimally different temperatures. Dur-
ing either isotherm we may keep the system in contact with
a reservoir. The isochores can be connected with a heat ex-
changer in such a way that the heat emitted at any specific
temperature on one isochore is later reused at the same tem-
perature on the other isochore. A corollary of Carnot’s theorem
(which says that the Carnot cycle is the most efficient one pos-
sible between to reservoirs) is that any reversible cycle between
two reservoirs has the same efficiency as Carnot’s. Assuming
T1 > T2, the efficiency is (T1 − T2)/T1.
Alternatively: for an isotherm, p ∝ T/V , therefore the work done
during compression from V1 to V2 is Q12(T) =
RV2
V1
pdV ∝ T
R V2
V1
dV
V
=
T
R V2
V1
dlnV = T ln V2
V1
. During isochores there is no displacement and
thus no work done. The efficiency η =
Q12(T2)−Q12(T1)
Q12(T2)
= T2−T1
T2
.Problem 3. Bars and rod (5 points)
With µ = 1
2, the result-
ant force of the normal force
and friction force forms an angle
arctan 1
2 with the surface nor-
mal (assuming that the rod is as
short as possible and hence, at
the threshold of slipping). There
are three forces applied to the
rod — the gravity force mg ap-
plied to the centre of mass C, and
the two forces due to the bars.
At equilibrium, the three lines
s1, s2, and s3, defined by these
three forces need to intersect at
a single point Q (otherwise, with
respect to the intersection point of two lines, the torque of the
third force would cause a rotation of the rod). This configura-
tion is depicted in Figure.
Since the friction force forms angle arctan 1
2 with the sur-
face normal, hence ∠DPQ = ∠DRQ = arctan2, hence AP =
RS = 1
4d (see Figure). From the geometry of the blue tri-
angle, AS = 2
√
3d; due to AP = RS, PR = AS = 2
√
3d and
PD =
√
3d. Now, let us recall that tan∠DPQ = 2, hence
DQ = PR = 2
√
3d. From the geometry of the blue triangle,
∠DCQ = 30◦
, so that DC = DQ/tan30◦
= 6d. Now we can
finally express
AC = CD + DP − PA = 5
3
4
d +
√
3d ⇒
L = 2AC = (11,5 + 2
√
3)d ≈ 14.96d.
Problem 4. RLC-circuit (5 points)
i. (1 pt) In the stationary regime, the capacitors can be ef-
fectively disconnected (they conduct no direct current) and the
inductors can be substituted by wires. If the voltmeter is ideal,
there is therefore no current through R1 and the voltmeter
shows the voltage on R2 equalling E.
ii. (2 pts) Capacitors cannot immediately change their voltage
and inductors cannot instantaneously change their current. L1
and L2 had both been carrying all the current that had been
flowing through the circuit, hence, after opening the switch,
they still carry a current of E/R2 and act as such current
sources. As the current from L2 flows also through R2, the
voltage on R2 is E (with the “+”-side at the centre of the cir-
cuit). The current through L1 flows also through R1 (it is the
current charging C1); therefore the voltage on R1 is ER1/R2
(with the “+”-side at the centre). The reading of the voltmeter
has changed its sign and is E(1 − R1/R2) or, plugging in the
data, −2E.
iii. (2 pts) Immediately after opening the switch, capacitor
C1 was uncharged (it had been parallel to R1 that was carry-
ing no current) and C2 had a voltage of E (it had been dir-
ectly parallel to the battery). L1 and L2 were both carrying
a current of E/R2. The voltmeter can be effectively discon-
nected (its resistance is huge), giving us two separate circuits,
R1L1C1 and R2L2C2. Therefore (by the potential energy for-
mulae CU2
/2 and LI2
/2) the energy stored in the left-hand cir-
cuit was L1E2
/(2R2
2) or, with the given data, LE2
/(2R2
). This
is the energy dissipated from R1. The corresponding expres-
sions for the right-hand circuit (giving the energy dissipated
from R2) are C2E2
/2 + L2E2
/(2R2
2) and CE2
/2 + LE2
/(2R2
).
Problem 5. Diffraction grating (7 points)
The experiment is rather straightforward, except that the
grating pitch is smaller than the wavelength. Therefore, for a
perpendicularly falling laser beam, first main maximum cannot
be observed. In order to observe that maximum, the laser beam
needs to be inclined. The easiest way is to determine angle by
which the first main maximum is observed at the direction,
directly opposite to the laser beam. Then the optical path
difference between the rays originating from two neighbouring
stripes is found as ∆l = 2dsinα = λ, so that d = 1
2
λ
sinα, where
α is such an angle between the laser beam and grating sur-
face normal for which the first main maximum is observed at
the direction, directly opposite to the laser beam. sinα = a/c
can be calculated from geometrical measurements of the sides
a and c of a right triangle. For the uncertainty, ∆λ
λ = ∆a
a + ∆c
c .
Measurements yield d ≈ (320 ± 4)nm.
Problem 6. Uranium decay (7 points)
i. (2 pts) It can be seen from the table that the fist half-life
is much longer than all the others. This means that as soon
as something is produced by the decay of U238
, all the other
decay steps in the chain take place almost immediately, and
for the other isotopes, a quasi-stationary concentration level is
achieved — such that the number of decays per unit time of
the isotope equals to that of U238
. Let us apply this to U234
.
If the number of U238
atoms is N238 then the number of de-
cays per unit time is dN
dt = N0 ln2/τ238 = N234 ln2/τ234, hence
N234/N238 = τ234/τ238 The total number of uranium atoms
equals to N = N238/0.993, so
N234
N
=
τ234
0,993τ238
≈ 5.53 × 10−5
.
ii. (2 pts) Since the uranium ore has reached a quasi-
stationary composition of isotopes, per each decay of U238
,
there is one decay event for each of the isotopes. So we need to
sum up all the decay energies in the second row of the table,
this gives us Edec = 52.1MeV. Then the heat production rate
is given by w = NA
ρ
µEdec
ln2
τ238
≈ 2.0W/m3
.
iii. (3 pts) The heat released will escape owing to the thermal
conductance. Inside a sphere of radius r, the heat released
equals to 4
3πwr3
= 4πr2
κdT
dr (the right-hand-side gives the
thermal flux due to conductance). From this equation we ob-
tain rdr = 3κ
w dT, which yields after integration
R =
r
6
κ
w
(T0 − Ta) ≈ 305m.
Problem 7. Lifting by current (7 points)
i. (2 pts) The Ampère force pulls the wires to the side so that
the wires will take a curved shape. Since the Ampère force is
perpendicular to the wire, the mechanical tension is constant
along the wires. Let the tension be T and the curvature of the
wire at a certain point — R. Let us consider a short piece of
the wire, of length a ≪ R. Then the angle by which the tan-
gent of the wire rotates while the tangent point moves over an
arc of length a is given by α = a/R. Let us study the force bal-
ance in the perpendicular direction for that piece of wire: the
Ampère’s force IaB is balanced by the tension Tα = Ta/R.
So, R = T/IB which means that R is constant, and the wire
will take the form of a circle segment. To conclude, both halves
of the wire will take the form of a circle segment, the convex
sides of which are turned outside.ii. (2 pts) The maximal height is achieved when the circle
segments form a perfect circle, in which case the lifting height
is ∆h = l(1 − 2
π ).
iii. (2 pts) If the central angle of the circle segments is 2α,
the tangents to the wires at the point where the load is fixed
forms angle α with the vertical direction. So, the lifting force
is mg = 2T cosα. From the other hand, R = l/2α = T/IB, ie.
α
mg
lIB
= cosα,
which is the equation from where one can determine the angle
α. Then, the lifting height
∆h = l − 2Rsinα = l −
2T
lIB
sinα = l

1 −
sinα
α

.
iv. (1 pt) From the previous result it can be seen that we need
to have sinα
α = π
3 , hence α = π
6 and
I =
mgα
lB cosα
=
mgπ
3
√
3lB
.
Problem 8. Elastic collision (7 points)
i. (1 pt) The centre of mass moves with the velocity ~ u =
M
M+m~ v, and that will be the speed of the small ball in new
reference frame, hence its momentum ~ p = −m~ u = − Mm
M+m~ v.
Since in this frame, the centre of mass is at rest, the large ball
needs to have equal by modulus and opposite momentum.
ii. (3 pts) Let the balls change a momentum ~ q. The small
ball will have momentum ~ p′
= ~ p+~ q, and as the centre of mass
remains at rest, the large ball will have momentum −~ p′
. The
energy conservation law can be written now as follows:
~ p2
2m
+
~ p2
2M
=
~ p′2
2m
+
~ p′2
2M
⇒ |~ p| = |~ p′
|,
ie. the moduli of the momenta will remain unchanged.
iii. (3 pts) In the laboratory frame, the momentum of the
large ball will be
~ p′′
= M~ u − ~ p′
;
since |~ p′
| remains constant, the angle α between ~ p′′
and ~ u will
be maximal when ~ p′′
⊥ ~ p′
, with
α = arcsin
|~ p′
|
|M~ u|
= arcsin
m
M
.
Problem 9. Power lines (7 points)
i. (2 pts) Let us use a frame where the moving perturbations
are at rest. There, the centripetal acceleration required for the
motion along a trajectory of curvature radius R is given by the
mechanical tension of the rope, for a small piece of rope (of
length l)
T
l
R
=
v2
R
σl ⇒ v =
r
T
σ
,
ie. k = 1.
ii. (2 pts) We consider the torque balance for one half of the
wire, with respect to the point where it is fixed to the pole.
Then, the centre of mass lays approximately at the distance L
4
(since the shape of the wire is not far from a straight line), and
the equation can be written as
Td =
L
4
σg
L
2
⇒ T =
L2
σg
8d
.
iii. (3 pts) For the natural oscillation modes, there will be
standing waves with nodes at the fixing points; the lowest fre-
quency corresponds to the longest wavelength, which is 2L, so
that f0 = v/2L = 1
2L
q
T
σ .
Problem 10. Black box (8 points) We study what will
happen, if we connect pair-wise all the leads of the black box.
If we connect leads C and D, there will be permanently light
from the red lamp which sticks out from one of the small holes
of the box. This indicates that there is a light emitting diode or
a lamp connected in series with a battery between these leads.
If we connect leads A and C, there may or may not be light
from the same lamp. Once the light disappears, it will appear
again only after D and A have been connected for a short time,
or D and B for a longer time. In any case, the lamp light
vanishes during ca 10 seconds. This means that between these
leads, there is (a) either a diode and a capacitor in sequence (in
which case the capacitor needs to be charged for a light to ap-
pear), or (b) diode, capacitor, and a battery (in which case the
capacitor needs to be discharged for a light to appear). When
comparing with the previous paragraph, we see that segments
CA and CD need to have a common segment; CA includes a
capacitor, which is missing from CD. So, CD and DA need to
be connected in sequence. Thereby we exclude option (a).
If we connect leads A and D, there may or may not appear
a spark, indicating that there is only a capacitor between these
leads, or a capacitor and a battery. However, the battery is in
segment CD, so there is no battery in this segment.
If we connect leads D and B, there may or may not be green
light from another lamp. In any case, the lamp light vanishes
during ca 10 seconds. The light reappears after A and C have
been connected, and disappears after D and A have been con-
nected. This means that between these leads, there is either
a diode and a capacitor in sequence, or a diode, a capacitor,
and a battery. The capacitor is in segment DA, so DA needs
to be included in DB, ie. DA and AB need to be in sequence.
Since the battery is already in CD, there is no battery in this
segment.
If we connect leads C and B, nothing happens. If we com-
pare this with what we have learnt earlier — there are two
lamps or diodes, a capacitor and a battery between these leads,
we conclude that the light emitting components need to be di-
odes of opposite polarity.
If we connect leads A and B, nothing happens; comparing
with what has been found earlier we conclude that there is a
diode between these leads.
Finally, since the charge- and discharge time of the capa-
citor are relatively long (RC ≈ 5s), except when discharging
via the A-D lead pair, the resistors need to be included into
the segments CD and AB.
Bringing everything together, the circuit needs to be as
given in Figure (or the same circuit with swapped polarities
of the diodes and the battery).
