---
id: solution-document-apho-2019-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2019/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2019-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2019/T2_S.pdf."
---

Theory
Question 2: X-ray jets from active galactic nuclei
Solutions
Part A: 1d fluid model of a jet
A1
If you consider a prism of plasma in the jet frame, it contains a number of particles N, has length l in the direction
of motion, and cross sectional area A. The total number of particles in the volume is invariant on transformation into
the AGN frame, however the volume occupied by the plasma changes as lengths are contracted in the direction of
motion, while perpendicular lengths are unchanged. Hence, A′
= A, and l′
= l/γ.
This gives us two relationships:
N = n(s)Al (1)
and
N = n′
(s)Al/γ (2)
Equating these gives
n(s)Al = n′
(s)Al/γ ,
which leads to
n′
(s) = γn(s) . (3)
A2
The particles in the jet have a bulk flow speed of v(s), so in a time ∆t a volume V = A(s)v(s)∆t crosses the cross
section of the jet. Using the number density in the AGN frame,
Fp(s) = n′
(s)A(s)v(s) (4)
= γ(s)n(s)A(s)v(s) (5)
A3
As the plasma travels along the jet there are no particles passing through the side boundary of the jet. Hence, the
total flux through the curved edges of the jet is zero, and the total flux into the jet is the flux in through the cross
section at s1 is Fp(s1) and the total flux out of the jet is Fp(s2). There is an additional term in the continuity equation
due to the mass injection. There are αV/µpp particles injected.
This gives
γ(s2)v(s2)n(s2)A(s2) − γ(s1)v(s1)n(s1)A(s1) = αV/µpp (6)
A4
Similarly, in the AGN frame the energy flux
FE(s) = n′
(s)A′
(s)v(s)ǫ′
av(s) . (7)
We use previous results for all quantities except average energy per particle.
Consider the total energy in a volume ∆V of the plasma, Etot = ǫavN in the jet frame. As this is the proper frame
v(s)=0.
Transforming to the AGN frame, E′
tot = γ(s)ǫavN, and ǫ′
av = γǫav.
Hence,
FE(s) = (γ(s))
2
n(s)A′
s)v(s)ǫav(s) . (8)
Energy conservation requires that the total energy flux out of the jet is equal to the energy added through injection
of mass, so
(γ(s2))
2
v(s2)n(s2)A(s2)ǫav(s2) − (γ(s1))
2
v(s1)n(s1)A(s1)ǫav(s1) = αV c2
(9)
1A5
From the defintion of jet power and also (8),
Pj(s) = (γ(s))2
n(s)A′
s)v(s)ǫav(s) − Ṁc2
. (10)
Here Ṁ is the flux of mass flux across the surface, so Ṁ = Fp(s)µpp and
Pj(s) = (γ(s))
2
n(s)A′
s)v(s)ǫav(s) − Fp(s)µppc2
. (11)
In order to find how jet power varies along the jet, we consider jet power at two points along the jet.
Pj(s2) − Pj(s1) =(γ(s2))2
n(s2)A′
(s2)v(s2)ǫav(s2) − Fp(s2)µppc2
(12)
−

(γ(s2))
2
n(s1)A′
(s1)v(s1)ǫav(s1) − Fp(s1)µppc2

. (13)
We can identify the two terms with ǫav to be those from the left hand side of (8), and the two terms with µpp are
µppc2
times the left hand side of (6). Making these substitutions,
Pj(s2) − Pj(s1) = αV c2
− αV c2
= 0 . (14)
This argument applies to arbitary s1 and s2, so the jet power is constant along the jet and
dPj
ds = 0.
A6
We start from (10) and substitute ǫav = µppc2
+ 13
4
P
n , to arrive at
Pj(s) = (γ(s))
2
n(s)A(s)v(s)(µppc2
+
13
4
P
n(s)
) − γ(s)n(s)A(s)v(s)µppc2
(15)
= (γ(s) − 1)γ(s)n(s)A(s)v(s)µppc2
+ (γ(s))
2
A(s)v(s)
13
4
P (16)
= (γ(s) − 1)Ṁc2
+ (γ(s))
2
A(s)v(s)
13
4
P (17)
Rearranging to find Ṁ gives
Ṁ =
Pj − γ(s)2
A(s)v(s)13
4 P
(γ(s) − 1)c2
(18)
Using the relationship P(s) = 5.7 × 10−12

s
s0
−1.5
and substituting values for s1 and s2 respectively into (18),
give Ṁ1 = 2.8 × 1019
kgs−1
and Ṁ2 = 5.2 × 1019
kgs−1
.
Note: some of the input values are given to one significant figure only. Hence, answers which are correct to this
degree of precision and are given to one or two significant figures are accepted as correct.
A7
From lorentz transforming ǫav from the jet frame where v = 0 to the AGN frame, the average momentum per particle
is pav = γ(s)v(s)
c2 ǫav. As the momentum is directly proportional to the total energy, the flux argument is the same,
and
Π(s) =
FE
c
v(s)
c
. (19)
This can be related to the jet power and Ṁ,
Π(s) =

Pj
c
+ Ṁc

v(s)
c
. (20)
Again, there is no particle flux, and hence no momentum flux through the sides of the jet, so the total momentum
flux out of the jet is
Π = Π(s2) − Π(s1) . (21)
Substituting values for the jet at s2 and s1 gives Π = 1.9 × 1027
kgms−2
.
2A8
The total force on the jet due to external pressure has contributions from the cross section at s1, F1 = P(s1)A(s1), at ss,
F2 = P(s2)A(s2), and from the pressure on the curved surface. We have a linear relationship s(r) = s1 + s2−s1
r2−r1
(r−r1).
s2
=5.94 kpc
s1
=252 pc
AGN
r2
=500 pc
r1
=30 pc
v1
=0.667c
v2
=0.52c
dr ds
The nett pressure force on the surface is only the component in the s direction. As the force is perpendicular to the
surface, this results in a factor of dr
ds. Consequently
dF = 2πrP(s)dr , (22)
where P(s) = 5.7 × 10−12

s
s0
−1.5
.
The total force due to the external pressure,
FPr = F1 − F2 +
Z r2
r1
dF . (23)
Evaluating the integral gives
R r2
r1
dF = 9.8 × 1026
N, so FPr = 8.2 × 1026
N.
A9
As there are no other forces on the jet, it is expected that Π = FPr.
The % deviation is |(Π − FPr)/FPr| ≈ 40%
Gas of ultrarelativistic electrons
B1
The total energy per volume is Z ∞
0
ǫf(ǫ)dǫ
B2
Consider the particles colliding with a surface ∆A,with the normal to the surface in the z-direction, in time ∆t. As
the electrons are ultrarelativistic, theirs speeds are all approximately c. We assume that the collisions with wall are
elastic, and electrons depart with their parallel mometnum unchanged and pz, final = −pz. Hence, ∆pz = 2pz, where
pz = ǫ
c cosθ, since the electrons are ultrarelativistic and E ≈ pc.
The distribution is isotropic so electrons are equally likely to be travelling in any direction.
All electrons within a parallelepiped of length c∆t which approach the surface at an angle θ will hit it in the time
∆t. The volume of the paralleleiped is c∆t∆Acosθ. From here, the total change in momentum is
∆pz =
Z ∞
0
Z π/2
0
Z 2π
0
2f(ǫ)pzc∆t∆Acosθ
sinθ
4π
dφdθdǫ (24)
=
2∆t∆A
4π
Z π/2
0
sinθcos2
θdθ
Z 2π
0
dφ
Z ∞
0
ǫf(ǫ)dǫ (25)
=
2∆t∆A
4π
×
1
3
× 2π
Z ∞
0
ǫf(ǫ)dǫ (26)
3B3
As the remaining integral in the expression above was identified as the energy per volume in B1, ∆pz = ∆t∆A1
3
E
V .
The pressure is the force per area normal to the wall, so P = ∆pz
∆t
1
∆A. Combining these gives P = E
3V , or E = 3PV ,
which is the equation of state.
B4
For an adiabatic process dQ = 0 so dE = dW = −PdV . dE = d(3PV ) = 3PdV +3V dP, so equating these expressions
gives
3PdV + 3V dP = −pdV (27)
4PdV = −3V dP (28)
4
dV
V
= −3
dP
P
(29)
4
Z V
V0
dV ′
V ′
= −3
Z P
P0
dP′
P
(30)
4ln

V
V0

= −3ln

P
P0

(31)
PV 4/3
P0V
4/3
0
= 1 (32)
Synchrotron emission
C1
An electron in a magnetic field has a component of its velocity, v cosφ along the magnetic field, and v sinφ perpen-
dicular to the field. The parallel component of the velocity remains constant, but in the perpendicular direction the
electron experiences a force in a direction perpendicular to its motion, so it undergoes simple harmonic motion. The
perpendicular component of its velocity is Ωr where Ω is its angular frequency and r the radius of the circular motion.
The force on the electron is FB = qv × B = eΩrB sinφ. The acceleration of the electron is perpendicular to the
direction of motion, so FB = γma, where a is the acceleration and m the mass of the electron. For uniform circular
motion, a = −Ω2
r, so
FB = γmΩ2
r (33)
eΩrB sinφ = γmΩ2
r (34)
Ω =
eB sinφ
γm
(35)
C2
The observer only sees the synchrotron emission when they are within the forward light cone. As the electron is
gyrating around the magnetic field, this direction is changing. The observer is in this light cone for time ∆t = 2θ
Ω = 2m
eB .
However, the emitting electron is moving directly toward the observer over this time, so although the light emitted at
the start of the pulse is ahead of the light at the end of the pulse, it is only ahead by c∆t 1 − v
c

. The pulse then has
an apparent duration of
∆ta = ∆t

1 −
v
c

.
Since 1 − v
c

1 + v
c

= 1 − v2
c2 = 1
γ2 , we can write 1 − v
c

= 1
γ2
(1+v
c )
. As the electrons are ultrarelativistic,
1 + v
c

= 2, and
∆ta =
me
γ2eB
.
C3
νchr ≈
1
∆ta
=
γ2
eB
me
4C4
Making a linear approximation,
τ ≈ −
E
dE
dt
 (36)
=
6πε0m4
c5
e4B2 sin2
φ
1
E
(37)
Synchrotron emission from an AGN jet
D1
As the magnetic field is frozen in, and magnetic flux is constant, the magnetic field must decrease as the area increases
in the expansion.
For a small area A, B0A0 = BA. Since A ∝ V 2/3
, B = B0(A0/A) = B0

V
V0
−2/3
D2
A volume of plasma V0 with number density n0 contains a total number of particles N = n0V0. As the volume expands,
the total number remains constant, so n = N/V = (V/V0)n0.
The internal energy of the plasma E = 3PV , and since PV 4/3
= P0V
4/3
0 , EV 1/3
= E0V
1/3
0 . The scaling for
particle energy with volume is then E = (V/V0)−1/3
E0. This means that the particles initially with energies between
ǫ0 and ǫ+dǫ, will have energies between (V/V0)−1/3
ǫ0 and (V/V0)−1/3
(ǫ + dǫ). As ((V/V0)−1/3
ǫ)−p
= (V/V0)−p/3
ǫ−p
.
Hence, we can write
f(ǫ) = κǫ−p
.
The value of κ is determined by the relationship
Z ∞
0
κǫ−p
dǫ = N/V .
Given Z ∞
0
κ0ǫ−p
dǫ = N/V0
κ0V0 = κV , and
f(ǫ) =

V
V0
−1
κ0ǫ−p
D3
As the energy loss rate due to synchrotron emission increases as E2
, and the cooling time decreases as 1/E, the more
energetic electrons lose energy more rapidly. If we consider electrons with energies ǫ1 < ǫ2, both will move to lower
energies in the distribution, but df/dt ∝ E2
, so df
dt|ǫ2 > df
dt|ǫ1 . This will reduce the relative number of electrons with
higher energies, and steepen the power law of the electron energy distribution.
D4
For the knots in Centaurus A there is no change in the x-ray spectrum, so this rules out synchrotron cooling as in
that case the spectrum would steepen (Part D3). Hence adiabatic cooling is more likely for these two knots.
For the knots in M87, there is no change in brightness in other bands. Adiabatic expansion would reduce the number
density at all energies (Part D2) and hence brightness at all wavelengths, so this is not likely. Hence, synchrotron
cooling is more likely for these two knots.
5
