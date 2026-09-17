---
id: solution-document-apho-2023-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2023/T1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2023-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2023/T1_S.pdf."
---

ISS Orbital Decay Dynamics
(Gurjav Ganbold)
The International Space Station (ISS) is the largest modular space station in low Earth
orbit. The station serves as a microgravity and space environment research laboratory in which
scientiﬁc research is conducted in astrobiology, astronomy, meteorology, physics, and other
ﬁelds. The ISS is suited for testing the spacecraft systems and equipment required for possible
future long-duration missions to the Moon and Mars. An international partnership of ﬁve space
agencies from 15 countries operates ISS.
Figure 1: The International Space Station orbiting above the Earth.
The ISS is currently maintained in a nearly circular orbit with a minimum mean altitude
of 370 km and a maximum of 460 km, in the centre of the thermosphere, at an inclination of
θ = 51.60
(degrees) to Earth’s equator. The trajectory of the spacecraft is similar to a spiral
with a slowly changing distance from the station to the Earth’s surface, and during one cycle
of revolution this distance changes inconsiderable.
Figure 2: The altitude of ISS (km) over the years.
”In May 2008, the altitude was 350 kilometers, the ISS lost 4.5 km and was re-boosted by
the Progess-60 supply ship by 5.5 km. Again, in June, the ISS continued to lose altitude by
5.5 km.” [https://mod.jsc.nasa.gov/] .
1Figure 3: The ISS mean height (km) in 2022-2023.
Figure 4: ISS model with the cross sections from diﬀerent aspect angles (dm2
= 10−2
m2
).
The DRAMA CROC provides 2481m2
cross section.
”The ISS loses up to 330 ft ( 100 m) of altitude each day.” [NASA Control Data (2021)].
In 2023 the ISS ﬂies at altitudes of 410 km, with an orbital decay about 70 m every day
(∼ 2 km per month), and during magnetic storms the daily descent reaches 300 m. The ISS
accomplishes the de-orbit maneuvers by using the propulsion capabilities of the ISS and its
visiting vehicles [International Space Station Transition Report (2022)].
The ISS mass is MS = 4.5×105
kg and overall length is LS = 109 m. Huge solar panels with
a width of WS = 73 m provide the ISS with electrical energy [NASA Oﬃcial Report (2023)].
Including all batteries and other parts, the eﬀective cross area (section) of the station is
approximately S ≈ 2.5 × 103
m2
[European Space Agency, SDC6-23].
The ISS orbital decay is caused by one or more mechanisms which absorb energy from the
orbital motion, the essential ones being:
- atmospheric drag at orbital altitude is caused by frequent collisions of gas molecules with
the satellite,
- the Ampere force arising from the motion of the conductive apparatus in the Earth’s
magnetic ﬁeld,
- the interaction with the atomic oxygen ions.
2Denotations and Physical constants:
R - Universal gas constant (8.31J · K−1
· mol−1
)
NA - Avogadro’s number (6.022 · 1023
mol−1
)
µ - The molar mass of gas (for air: 0.029kg · mol−1
, for O2: 0.032kg · mol−1
)
ME - Mass of the Earth (5.97 · 1024
kg)
RE - Radius of the Earth (6.38 · 106
m)
G - Gravitational universal constant (6.67 · 10−11
m3
· s−2
· kg−1
)
ρ0 - Density of air at Earth’s surface (1.29kg/m3
)
g0 - Gravitational acceleration at Earth’s surface (9.81m · s−2
)
B - Average magnitude of Earth’s magnetic ﬁeld (5.0 · 10−5
T )
e - The electron absolute charge (1.60 · 10−19
Q)
A. Modiﬁed barometric formula
The pressure of atmospheric air, composed mainly of neutral O2 and N2 molecules, can be
found by using the Clapeyron-Mendeleev law:
pV =
M
µ
RT . (1)
where p,V,T,M and µ are the pressure, volume, temperature, mass and molar mass of a portion
of air, R is the ideal gas universal constant.
There are two equations for computing air pressure as a function of height. The ﬁrst
equation is applicable to the standard model of the troposphere (h < 100 km) in which the
temperature is assumed to vary with altitude at a lapse rate.
The second equation belongs to the standard model of the thermosphere (h > 250 km) in
which the temperature is assumed not to change considerably with altitude and is applicable
to ISS.
Figure 5: The Earth’s thermosphere.
3We may assume that all pressure is hydrostatic (i.e., it acts with equal magnitude in all
directions).
Then, a perturbation of the air pressure dph on a variation of attitude dh may be written:
dph
.
= ph+dh − ph = −gh (M/V )dh (2)
and dividing the dph by the ph expressed from the Clapeyron-Mendeleev law we obtain
dph
ph
= −
ghµ
RTh
dh. (3)
Integrating this expression from the surface h = 0 to the altitude h we get the air pressure
as follows:
ph = p0 exp

−
µ
R
h ∫
0
dh
gh
Th

 , (4)
where p0 is the air pressure at altitude h = 0.
Remark 1. The temperature of Earth’s thermosphere at altitude 300 - 600 km does not
change considerably (see Fig.3) and reaches averagely about 800 - 900 K at solar side [NASA
data]. Therefore, one may put Th = T = const by investigating the ISS orbital ﬂight. Particu-
larly, since the spacecraft spends almost half of its ﬂight time in the shadow side of the Earth,
where the temperature drops sharply, we may take the value of T = 425 K as the average
temperature at these altitudes. This temperature is also in agreement with the air density
value ρh ∼ 10−12
m−3
[MSISE-90 Model of Earth’s Upper Atmosphere] at h = 400 km.
Further, by accepting an approximation gh = g0 one obtains the standard barometric
formula as follows:
psta
h = p0 exp
(
−
h
h0
)
, h0
.
=
RT
µg0
. (5)
We ﬁx the parameter h0 as follows:
h0
.
=
RT
µg0
=
8.31 J K−1
· mol−1
425K
0.029 kg · mol−19.81 m · s−2
≈ 12400 m. (6)
Remark 2. The integral in Eq.(4) may be calculated by taking into account the dependence
of gh on h in the leading-order correction, with accuracy O(z2
h).
In the leading-order approximation one gets:
gh ≃ g0 (1 − 2zh),
h ∫
0
dhgh ≃ g0 h(1 − zh). (7)
Then, we obtain a improved barometric formula
pimp
h = p0 exp
(
−
h(1 − zh)
h0
)
. (8)
Let us estimate the ratio of the ’standard’ and ’improved’ versions of the barometric formula:
pimp
h
psta
h
=
exp
(
−h(1−zh)
h0
)
exp
(
− h
h0
) = e
h2
h0 RE ≈ 7.54 for h = 4.0 × 105
m. (9)
4The gas density rises by almost eight times when the weakening of gravity at
ISS altitude is taken into account in the leading order.
Therefore, to avoid signiﬁcant error in calculation for the ISS, when the air pressure or air
density is involved, one should use the improved barometric formula in Eq.(8) instead of Eq.(5).
According to Eq.(8), the air density at height h may be expressed by the formula
ρh
.
=
M
V
= ρ0 exp(−h(1 − zh)/h0). (10)
The concentration of neutral air molecules at altitude is expressed through a similar law
nh = NA
ρ0
µ
exp(−h(1 − zh)/h0). (11)
B. Orbital deceleration and station descent rate
Let us consider the problem of determining the rate of orbital decay of a satellite with mass
MS that experiences friction force ⃗ Fdrag acting against its velocity ⃗ v during the time dt. We
assume that the decrease in altitude dh is much less than the ﬂight altitude h itself (dh ≪ h).
The satellite’s velocity may be found from its equation of motion in orbit (Newton’s second
law) where the Earth’s gravitational force is balanced by the centrifugal force:
gh =
v2
h
RE(1 + zh)
, gh
.
=
g0
(1 + zh)2
. (12)
The solutions read
vh =
√
g0 RE
1 + zh
, τh
.
= 2π
RE + h
vh
= 2π
√
RE
g0
(1 + zh)3/2
. (13)
By the conservation of mechanical energy, the total energy of a satellite moving along an
almost circular orbit with radius RE + h is the sum of kinetic and gravitational potential
energies, in an unperturbed two-body orbit:
ES =
MS · v2
h
2
− MS gh RE (1 + zh) = −
MS g0 RE
2(1 + zh)
. (14)
The total decelerating force exerted on a satellite of constant mass is given by some external
braking force ⃗ Fdrag. The rate of loss of orbital energy dES is simply the rate at the external
force does negative work dAdrag on the satellite as the satellite traverses an inﬁnitesimal circular
arc-length dL = vdt :
dAdrag = −Fdrag · vh · dt. (15)
The perturbation dES of the orbital energy at a change of the radius dh reads:
dES = +
MS g0
2(1 + zh)2
dh. (16)
The total energy conservation dES + dAdrag = 0 leads to the equation
MS g0
2(1 + zh)2
dh = Fdrag · vh · dt. (17)
5Then, we can ﬁnd the rate of descent speed of the satellite as follows:
uh
.
=
dh
dt
=
2Fdrag
MS g0
vh (1 + zh)2
=
2Fdrag
MS
√
RE
g0
(1 + zh)3/2
. (18)
The de-orbiting speed depends on the friction force, and on the altitude of the satellite, and
on the mass of the satellite.
The friction force ⃗ Fdrag itself, in turn, depends on the ﬂight altitude, on the eﬀective cross
section of the satellite S, and on the composition of the space environment at the satellite’s
ﬂight altitude h.
The descent rate Hh for a revolution around the Earth reads:
Hh
.
= uh τh =
4π RE
MS g0
Fdrag(h) · (1 + zh)3
. (19)
The diﬀerential equation in Eq.(18) may be integrated out. Then, the total time Th for
which the satellite will fall from the attitude h to the earth’s surface due to the friction may
be found from the relation:
Th
.
=
∫ Th
0
dt =
MS
2
√
g0
RE
∫ h
0
dh
1
Fdrag(h) · (1 + zh)3/2
. (20)
C. Atmospheric drag
The speed of the satellite v is many times greater than the average velocities (hundreds m/s) of
the thermal motion of atmospheric molecules at a height h ≈ 300 − 400 km, so we can assume
that the molecules were at rest before the collision with the ISS. To roughly estimate the drag
force, we assume that after the collision the molecules acquire the same speed as the satellite.
In this case, the air drag force can be estimated as follows:
Fair = nhmair · v2
h · S =
Nairmair
V
· v2
h · S = ρh · v2
h · S . (21)
By substituting this expression into the formula in Eq.(18), we obtain
uair
h =
2ρ0S
√
g0 R3
E
MS
(1 + zh)1/2
· exp(−h(1 − zh)/h0). (22)
The descent rate Hair
h for a revolution around the Earth reads:
Hair
h
.
= uair
h τh =
4πS R2
E
MS
ρ0 · (1 + zh)2
· exp(−h(1 − zh)/h0). (23)
To ﬁnd the total time Tair
h for which the satellite will fall to the earth’s surface, we use
Eq.(20). We obtain:
Tair
h ≃
MS
2ρ0 S
√
g0 R3
E
∫ h
0
dh
(
1 −
h
2RE
)
e+h/h0
≈
MS h0
2ρ0S
√
g0 R3
E
(1 −
h
2RE
) · e+h/h0
, (24)
where we took into account relations h0 ≪ h ≪ RE.
6D. Drag by atomic oxygen ions
In the thermosphere, under the inﬂuence of ultraviolet and X-ray solar radiation and cosmic
radiation, air ionization occurs (“polar lights”). Unlike O2, N2 does not undergo strong dis-
sociation under the action of solar radiation, therefore, in general, there is much less atomic
nitrogen N in the Earth’s upper atmosphere than atomic oxygen. At altitudes above 250 km,
atomic oxygen O predominates. Layers containing electrons and ions of oxygen atoms appear
on the day side of the atmosphere. In this case, the concentration of atomic oxygen ions reaches
nion ∼ 1013
m−3
.
The decelerating force associated with the mechanical collisions of these particles on the
satellite can be calculated using the formula in Eq.(21) but taking into account the strong
decrease in ionization at night. Let the average value of the ion concentration be half the
maximum value. Then we have
Fion =
1
2
ρion · S · v2
h , (25)
where
ρion =
µion
NA
· nion . (26)
Therefore, the speed of fall of the satellite due to deceleration by ions of atomic oxygen may
be roughly estimated as follows:
uion
h = ρion ·
S
√
g0 R3
E
MS
(1 + zh)1/2
. (27)
The descent rate Hion
h for a revolution around the Earth reads:
Hion
h
.
= uion
h τh = ρion
2πS R2
E
MS
· (1 + zh)2
. (28)
E. Drag by the Earth’s magnetic ﬁeld
We consider the inﬂuence on the motion of the satellite of the Earth’s magnetic ﬁeld, the
value of which near the Earth’s surface is equal to (3.5 − 6.5) · 10−5
T with an average value of
B = 5 · 10−5
T.
When a satellite moves at high speed in a magnetic ﬁeld, an inducted electric current
(electro-motive force, EMF) occurs in the current-conducting elements of the satellite’s struc-
ture. This electromotive force causes a redistribution of electric charges in the current-conducting
elements of the satellite structure. An electric ﬁeld appears around the satellite, which aﬀects
on the movement of electrically charged particles in the environment. Electrons are attracted
to those parts of the satellite that have a positive potential (relative to the middle part of the
satellite), and positively charged ions are attracted to those parts of the satellite that have
a negative potential. Electrons and ions that hit the surface of the satellite structures are
combined into neutral oxygen atoms, while the electrons ’travel’ in the satellite’s conductive
structures, creating an electric current. The satellite, moving in space, ’collects’ electrons and
ions from the surrounding space and collides with them. For a rough estimate of the magnitude
of the current that can ﬂow through the conductive structures of the satellite, we will assume
that the collection occurs only from an area equal to the cross-sectional area S of the ISS, and
all ions and electrons participate in the creation of this current.
The number of electrons hitting the structure of the ISS body during the short time interval
dt is
dN = nion · vh · S · dt. (29)
7Therefore, the magnitude of the current is of the order
Iind ≈ e
dN
dt
= e · S · nion ·
√
g0 RE
1 + zh
. (30)
The orbital ’braking’ Ampere’s force is proportional to [⃗ vh × ⃗ B] = vhB|sin(ϕ)|, where ϕ is
the angle between the Earth’s magnetic ﬁeld ⃗ B and the velocity of the ISS ⃗ vh. Hereby, θ = 51.60
(degrees) is the inclination angle of the ISS orbit to Earth’s equator.
Let us consider a revolution starting from the ’north’ sample point in the ISS orbit with the
highest latitude (ϕ = π/2−θ). After a half revolution the ISS arrives at the ’south’ point with
the lowest latitude (ϕ = π/2 + θ). The second part of the revolution cycle ends at the ’north
point’.
The averaging of the value |sin(ϕ)| during a revolution period may be performed as follows:
⟨|sin(ϕ)|⟩ =
1
2θ
π/2+θ ∫
π/2−θ
dϕ|sin(ϕ)| = 0.93 ≈ 1. (31)
An approximate result may be obtained by using four equidistant sample positions in the
ISS orbit as follows:
⟨|sin(ϕ)|⟩ = {sin(π/2 − θ) + sin(π/2) + sin(π/2 + θ) + sin(π/2)}/4 = 0.89 ≈ 1. (32)
Further, we will use an approximation ⟨|sin(ϕ)|⟩ ≈ 1.
When the induced current ﬂows through the conductive parts of the satellite, they are
aﬀected by the ’braking’ Ampere force directed opposite to the direction of the satellite’s
speed:
Find = B · Iind · ⟨|sin(ϕ)|⟩ · L ≈ B · Iind ·
√
S = e · B · S3/2
· nion ·
√
g0 RE
1 + zh
, (33)
where for the external linear size of the station, we can use the approximation L ∼ S1/2
.
Then for the rate of descent of the satellite we obtain
uind
h ≈ 2nion
eBS3/2
RE
MS
· (1 + zh). (34)
The descent rate Hind
h for a revolution around the Earth reads:
Hind
h
.
= uind
h τh =
4π eB (S RE)3/2
MS
√
g0
· (1 + zh)5/2
. (35)
8F. Numerical results and conclusion
Table 1: Various deorbit velocities on the height h above the Earth surface, compared to the
ISS-NASA data estimated for nion = 1013
m−3
. For nion = 1012
m−3
the results for uion and uind
will decrease in 10 times.
h [km] Tair
h [day] uair[m/day] uion[m/day] uind[m/day]
∑
[m/day] wISS[m/day]
350 316 184 14 28 226 ∼ 170 [in 2008]
375 2360 30.9 14 29 73 -
400 17700 5.3 14 29 47 ≤ 100 [in 2021]
410 39500 2.6 14 29 45 ≤ 70) [in 2022]
Table 2: The descent rates for a revolution of the ISS around the Earth for nion = 1013
m−3
.
For nion = 1012
m−3
the results for Hion
h and Hind
H will decrease in 10 times.
h (km) Hair
h [m] Hion
h [m] Hind
h [m]
350 11.7 0.9 1.8
375 2.0 0.9 1.8
400 0.3 0.9 1.8
410 0.2 0.9 1.8
For the International Space Station, orbiting at an altitude above 380 km, the most signif-
icant factors ensuring orbital decay are ranked as follows:
1) the Ampere force arising from the motion of the conductive apparatus in the Earth’s
magnetic ﬁeld.
2) Collisions of the station with ionized atoms of oxygen.
3) The atmospheric drag caused by frequent collisions of neutral O2 molecules.
9
