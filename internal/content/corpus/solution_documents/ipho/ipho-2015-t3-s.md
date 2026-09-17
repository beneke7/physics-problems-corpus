---
id: solution-document-ipho-2015-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2015/T3_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2015-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2015/T3_S.pdf."
---

Theoretical Task 3 (T-3) : Solutions 1 of 9
The Design of a Nuclear Reactor1
Uranium occurs in nature as UO2 with only 0.720% of the uranium atoms being 235
U. Neutron
induced fission occurs readily in 235
U with the emission of 2-3 fission neutrons having high
kinetic energy. This fission probability will increase if the neutrons inducing fission have low
kinetic energy. So by reducing the kinetic energy of the fission neutrons, one can induce a chain
of fissions in other 235
U nuclei. This forms the basis of the power generating nuclear reactor
(NR).
A typical NR consists of a cylindrical tank of height H and radius R filled with a material called
moderator. Cylindrical tubes, called fuel channels, each containing a cluster of cylindrical fuel
pins of natural UO2 in solid form of height H, are kept axially in a square array. Fission
neutrons, coming outward from a fuel channel, collide with the moderator, losing energy, and
reach the surrounding fuel channels with low enough energy to cause fission (Figs I-III). Heat
generated from fission in the pin is transmitted to a coolant fluid flowing along its length. In
the current problem we shall study some of the physics behind the (A) Fuel Pin, (B) Moderator
and (C) NR of cylindrical geometry.
Schematic sketch of the
Nuclear Reactor (NR)
Fig-I: Enlarged view of a
fuel channel (1-Fuel Pins)
Fig-II: A view of the NR
(2-Fuel Channels)
Fig-III: Top view of NR
(3-Square Arrangement of
Fuel Channels and
4-Typical Neutron Paths).
Only components relevant
to the problem are shown
(e.g. control rods and
coolant are not shown).
Fig-I Fig-II Fig-III
A. Fuel Pin
Data for UO2
1. Molecular weight Mw=0.270 kgmol−1
2. Density ρ=1.060×104
kgm−3
3. Melting point Tm=3.138×103
K 4. Thermal conductivity λ=3.280 Wm−1
K−1
A1 Consider the following fission reaction of a stationary 235
U after it absorbs a neutron of
negligible kinetic energy.
235
U +1
n −→94
Zr +140
Ce + 21
n + ∆E
1
Joseph Amal Nathan (BARC) and Vijay A. Singh (ex-National Coordinator, Science Olympiads) were the
principal authors of this problem. The contributions of the Academic Committee, Academic Development Group
and the International Board are gratefully acknowledged.Theoretical Task 3 (T-3) : Solutions 2 of 9
Estimate ∆E (in MeV) the total fission energy released. The nuclear masses are: m(235
U)
= 235.044 u; m(94
Zr) = 93.9063 u; m(140
Ce) = 139.905 u; m(1
n) = 1.00867 u and 1 u =
931.502 MeVc−2
. Ignore charge imbalance. [0.8]
Solution: ∆E = 208.684 MeV
Detailed solution: The energy released during the transformation is
∆E = [m(235
U) + m(1
n) − m(94
Zr) − m(140
Ce) − 2m(1
n)]c2
Since the data is supplied in terms of unified atomic masses (u), we have
∆E = [m(235
U) − m(94
Zr) − m(140
Ce) − m(1
n)]c2
= 208.684 MeV [Acceptable Range (208.000 to 209.000)]
from the given data.
A2 Estimate N the number of 235
U atoms per unit volume in natural UO2. [0.5]
Solution: N = 1.702 × 1026
m−3
Detailed solution: The number of UO2 molecules per m3
of the fuel N1 is given
in the terms of its density ρ, the Avogadro number NA and the average molecular
weight Mw as
N1 =
ρNA
Mw
=
10600 × 6.022 × 1023
0.270
= 2.364 × 1028
m−3
Each molecule of UO2 contains one uranium atom. Since only 0.72% of these are
235
U,
N = 0.0072× N1
= 1.702 × 1026
m−3
[Acceptable Range (1.650 to 1.750)]
A3 Assume that the neutron flux φ = 2.000 × 1018
m−2
s−1
on the fuel is uniform. The fission
cross-section (effective area of the target nucleus) of a 235
U nucleus is σf = 5.400 ×10−26
m2
. If 80.00% of the fission energy is available as heat, estimate Q (in W m−3
) the rate of
heat production in the pin per unit volume. 1MeV = 1.602 ×10−13
J. [1.2]
Solution: Q = 4.917 × 108
W/m3
Detailed solution: It is given that 80% of the fission energy is available as heat
thus the heat energy available per fission Ef is from a-(i)
Ef = 0.8 × 208.7 MeV
= 166.96 MeV
= 2.675 × 10−11
J
The total cross-section per unit volume is N × σf. Thus the heat produced per unitTheoretical Task 3 (T-3) : Solutions 3 of 9
volume per unit time Q is
Q = N × σf × φ × Ef
= (1.702 × 1026
) × (5.4 × 10−26
) × (2 × 1018
) × (2.675 × 10−11
) W/m3
= 4.917 × 108
W/m3
[Acceptable Range (4.800 to 5.000)]
A4 The steady-state temperature difference between the center (Tc) and the surface (Ts) of the
pin can be expressed as Tc − Ts = kF(Q,a,λ) where k = 1/4 is a dimensionless constant
and a is the radius of the pin. Obtain F(Q,a,λ) by dimensional analysis. [0.5]
Solution: Tc − Ts =
Qa2
4λ
.
Detailed solution: The dimensions of Tc − Ts is temperature. We write this as
Tc −Ts = [K]. Once can similarly write down the dimensions of Q, a and λ. Equating
the temperature to powers of Q, a and λ, one could state the following dimensional
equation:
K = Qα
aβ
λγ
= [ML−1
T−3
] α
[L] β
[ML1
T−3
K−1
] γ
This yields the following algebraic equations
γ = -1 equating powers of temperature
α +γ = 0 equating powers of mass or time. From the previous equation we get α = 1
Next −α + β + γ = 0 equating powers of length. This yields β = 2.
Thus we obtain Tc − Ts =
Qa2
4λ
where we insert the dimensionless factor 1/4 as sug-
gested in the problem. No penalty if the factor 1/4 is not written.
Note: Same credit for alternate ways of obtaining α,β,γ.
A5 The desired temperature of the coolant is 5.770 ×102
K. Estimate the upper limit au on
the radius a of the pin. [1.0]
Solution: au = 8.267 × 10−3
m.
Detailed solution: The melting point of UO2 is 3138 K and the maximum tempera-
ture of the coolant is 577 K. This sets a limit on the maximum permissible temperature
(Tc − Ts) to be less than (3138 - 577 = 2561 K) to avoid “meltdown”. Thus one may
take a maximum of (Tc − Ts) = 2561 K.
Noting that λ = 3.28 W/m - K, we have
a2
u =
2561 × 4 × 3.28
4.917 × 108
Where we have used the value of Q from A2. This yields au w 8.267 × 10−3
m. So
au = 8.267 × 10−3
m constitutes an upper limit on the radius of the fuel pin.
Note: The Tarapur 3 & 4 NR in Western India has a fuel pin radius of 6.090 × 10−3
m.Theoretical Task 3 (T-3) : Solutions 4 of 9
B. The Moderator
Consider the two dimensional elastic collision between a neutron of mass 1u and a moderator
atom of mass Au. Before collision all the moderator atoms are considered at rest in the
laboratory frame (LF). Let − → vb and − → va be the velocities of the neutron before and after collision
respectively in the LF. Let − → vm be the velocity of the center of mass (CM) frame relative to LF
and θ be the neutron scattering angle in the CM frame. All the particles involved in collisions
are moving at non-relativistic speeds
B1 The collision in LF is shown schematically with θL as the scattering angle (Fig-IV). Sketch
the collision schematically in CM frame. Label the particle velocities for 1, 2 and 3 in
terms of − → vb, − → va and − → vm. Indicate the scattering angle θ. [1.0]
Collision in the Laboratory Frame
1-Neutron before collision
2-Neutron after collision
3-Moderator Atom before collision
4-Moderator Atom after collision
Fig-IV a v

b v

1
2
3
4
L 
Solution:
Laboratory Frame Center of Mass Frame
a v

b v

1
2
3
4
L  m b v v
 

m a v v
 

m v



B2 Obtain v and V , the speeds of the neutron and the moderator atom in the CM frame after
the collision, in terms of A and vb. [1.0]
Solution: Detailed solution: Before the collision in the CM frame (vb − vm) and
vm will be magnitude of the velocities of the neutron and moderator atom respectively.
From momentum conservation in the CM frame, vb − vm = Avm gives vm = vb
A+1
.
After the collision, let v and V be magnitude of the velocities of neutron and moderator
atom respectively in the CM frame. From conservation laws,
v = AV and
1
2
(vb − vm)2
+
1
2
Av2
m =
1
2
v2
+
1
2
AV 2
.(→ [0.2 + 0.2])Theoretical Task 3 (T-3) : Solutions 5 of 9
Solving gives v = Avb
A+1
and V = vb
A+1
. (OR) From definition of center of mass frame
vm = vb
A+1
. Before the collision in the CM frame vb − vm = Avb
A+1
and vm will be mag-
nitude of the velocities of the neutron and moderator atom respectively. In elastic
collision the particles are scattered in the opposite direction in the CM frame and so
the speeds remain same v = Avb
A+1
and V = vb
A+1
(→ [0.2 + 0.1]).
Note: Alternative solutions are worked out in the end and will get appropriate weigh-
tage.
B3 Derive an expression for G(α,θ) = Ea/Eb, where Eb and Ea are the kinetic energies of the
neutron, in the LF, before and after the collision respectively, and α ≡ [(A−1)/(A+1)]2
, [1.0]
Solution:
G(α,θ) =
Ea
Eb
=
A2
+ 2Acosθ + 1
(A + 1)2
=
1
2
[(1 + α) + (1 − α)cosθ].
Detailed solution: Since − → va = − → v +− → vm, v2
a = v2
+v2
m +2vvm cosθ (→ [0.3]). Substi-
tuting the values of v and vm, v2
a =
A2v2
b
(A+1)2 +
v2
b
(A+1)2 +
2Av2
b
(A+1)2 cosθ (→ [0.2]), so
v2
a
v2
b
=
Ea
Eb
=
A2
+ 2Acosθ + 1
(A + 1)2
.
G(α,θ) =
A2
+ 1
(A + 1)2
+
2A
(A + 1)2
cosθ =
1
2
[(1 + α) + (1 − α)cosθ].
Alternate form
= 1 −
(1 − α)(1 − cosθ)
2
.
Note: Alternative solutions are worked out in the end and will get appropriate weigh-
tage.
B4 Assume that the above expression holds for D2O molecule. Calculate the maximum pos-
sible fractional energy loss fl ≡ Eb−Ea
Eb
of the neutron for the D2O (20 u) moderator. [0.5]
Solution: fl = 0.181
Detailed solution: The maximum energy loss will be when the collision is head
on ie., Ea will be minimum for the scattering angle θ = π.
So Ea = Emin = αEb.
For D2O, α = 0.819 and maximum fractional loss

Eb−Emin
Eb

= 1 − α = 0.181. [Ac-
ceptable Range (0.170 to 0.190)]Theoretical Task 3 (T-3) : Solutions 6 of 9
C. The Nuclear Reactor
To operate the NR at any constant neutron flux Ψ (steady state), the leakage of neutrons has to
be compensated by an excess production of neutrons in the reactor. For a reactor in cylindrical
geometry the leakage rate is k1
h
2.405
R
2
+ π
H
2
i
Ψ and the excess production rate is k2Ψ. The
constants k1 and k2 depend on the material properties of the NR.
C1 Consider a NR with k1 = 1.021×10−2
m and k2 = 8.787×10−3
m−1
. Noting that for a
fixed volume the leakage rate is to be minimized for efficient fuel utilisation obtain the
dimensions of the NR in the steady state. [1.5]
Solution: R = 3.175 m, H = 5.866 m.
Detailed solution: For constant volume V = πR2
H,
d
dH
"
2.405
R
2
+
 π
H
2
#
= 0,
d
dH

2.4052
πH
V
+
π2
H2

=
2.4052
π
V
− 2
π2
H3
= 0,
gives 2.405
R
2
= 2 π
H
2
.
For steady state,
1.021 × 10−2
"
2.405
R
2
+
 π
H
2
#
Ψ = 8.787 × 10−3
Ψ.
Hence H = 5.866 m [Acceptable Range (5.870 to 5.890)]
R = 3.175 m [Acceptable Range (3.170 to 3.180)].
Alternative Non-Calculus Method to Optimize
Minimisation of the expression

2.405
R
2
+
 π
H
2
, for a fixed volume V =
πR2
H:
Substituting for R2
in terms of V, H we get
2.4052
πH
V
+
π2
H2
,
which can be written as,
2.4052
πH
2V
+
2.4052
πH
2V
+
π2
H2
.
Since all the terms are positive applying AMGM inequality for three positive terms we
get
2.4052πH
2V
+ 2.4052πH
2V
+ π2
H2
3
≥
3
r
2.4052πH
2V
×
2.4052πH
2V
×
π2
H2
=
3
r
2.4054π4
4V 2
.Theoretical Task 3 (T-3) : Solutions 7 of 9
The RHS is a constant. The LHS is always greater or equal to this constant im-
plies that this is the minimum value the LHS can achieve. The minimum is achieved
when all the three positive terms are equal, which gives the condition
2.4052
πH
2V
=
π2
H2
⇒

2.405
R
2
= 2
 π
H
2
.
For steady state,
1.021 × 10−2
"
2.405
R
2
+
 π
H
2
#
Ψ = 8.787 × 10−3
Ψ.
Hence H = 5.866 m [Acceptable Range (5.870 to 5.890)]
R = 3.175 m [Acceptable Range (3.170 to 3.180)].
Note: Putting the condition in the RHS gives the minimum as
π2
H2
. From the condi-
tion we get
π3
H3
=
2.4052
π2
2V
⇒
π2
H2
=
3
r
2.4054
π4
4V 2
.
Note: The radius and height of the Tarapur 3 & 4 NR in Western India is 3.192 m and
5.940 m respectively.
C2 The fuel channels are in a square arrangement (Fig-III) with nearest neighbour distance
0.286 m. The effective radius of a fuel channel (if it were solid) is 3.617×10−2
m. Estimate
the number of fuel channels Fn in the reactor and the mass M of UO2 required to operate
the NR in steady state. [1.0]
Solution: Fn = 387 and M = 9.892 × 104
kg.
Detailed solution: Since the fuel channels are in square pitch of 0.286 m, the ef-
fective area per channel is 0.2862
m2
= 8.180 × 10−2
m2
.
The cross-sectional area of the core is πR2
= 3.142 × (3.175)2
= 31.67 m2
, so the
maximum number of fuel channels that can be accommodated in the cylinder is the
integer part of 31.67
0.0818
= 387.
Mass of the fuel=387×Volume of the rod×density
= 387 × (π × 0.036172
× 5.866) × 10600 = 9.892 × 104
kg.
Fn = 387 [Acceptable Range (380 to 394)]
M = 9.892 × 104
kg [Acceptable Range (9.000 to 10.00)]
Note 1: (Not part of grading) The total volume of the fuel is 387 × (π × 0.036172
×
5.866) = 9.332 m3
. If the reactor works at 12.5 % efficieny then using the result of
a-(iii) we have that the power output of the reactor is 9.332 × 4.917 × 108
× 0.125 =Theoretical Task 3 (T-3) : Solutions 8 of 9
573 MW.
Note 2: The Tarapur 3 & 4 NR in Western India has 392 channels and the mass of the
fuel in it is 10.15 ×104
kg. It produces 540 MW of power.
Alternative Solutions to sub-parts B2 and B3: Let σ be the scattering angle of the
Moderator atom in the LF, taken clockwise with respect to the initial direction of the neutron
before collision. Let U be the speed of the Moderator atom, in the LF, after collision. From
momentum and kinetic conservation in LF we have
vb = va cosθL + AU cosσ, (1)
0 = va sinθL − AU sinσ, (2)
1
2
v2
b =
1
2
AU2
+
1
2
v2
a. (3)
Squaring and adding eq(1) and (2) to eliminate σ and from eq(3) we get
A2
U2
= v2
a + v2
b − 2vavb cosθL,
A2
U2
= Av2
b − Av2
a, (4)
which gives
2vavb cosθL = (A + 1)v2
a − (A − 1)v2
b. (5)
(ii) Let v be the speed of the neutron after collision in the COMF. From definition of center
of mass frame vm =
vb
A + 1
.
va sinθL and va cosθL are the perpendicular and parallel components of va, in the LF, resolved
along the initial direction of the neutron before collision. Transforming these to the COMF
gives va sinθL and va cosθL −vm as the perpendicular and parallel components of v. Substitut-
ing for vm and for 2vavb cosθL from eq(5) in v =
p
v2
a sin2
θL + v2
a cos2 θL + v2
m − 2vavm cosθL
and simplifying gives v =
Avb
A + 1
. Squaring the components of v to eliminate θL gives v2
a =
v2
+ v2
m + 2vvm cosθ. Substituting for v and vm and simplifying gives,
v2
a
v2
b
=
Ea
Eb
=
A2
+ 2Acosθ + 1
(A + 1)2
.
G(α,θ) =
Ea
Eb
=
A2
+ 1
(A + 1)2
+
2A
(A + 1)2
cosθ =
1
2
[(1 + α) + (1 − α)cosθ].
(OR)
(iii) From definition of center of mass frame vm =
vb
A + 1
. After the collision, let v and V
be magnitude of the velocities of neutron and moderator atom respectively in the COMF.
From conservation laws in the COMF,
v = AV and
1
2
(vb − vm)2
+
1
2
Av2
m =
1
2
v2
+
1
2
AV 2
.
Solving gives v = Avb
A+1
and V = vb
A+1
. We also have v cosθ = va cosθL − vm, substituting for vm
and for va cosθL from eq(5) and simplifying gives
v2
a
v2
b
=
Ea
Eb
=
A2
+ 2Acosθ + 1
(A + 1)2
.Theoretical Task 3 (T-3) : Solutions 9 of 9
G(α,θ) =
Ea
Eb
=
A2
+ 1
(A + 1)2
+
2A
(A + 1)2
cosθ =
1
2
[(1 + α) + (1 − α)cosθ].
(OR)
(iv) From definition of center of mass frame vm =
vb
A + 1
. After the collision, let v and V
be magnitude of the velocities of neutron and moderator atom respectively in the CM frame.
From conservation laws in the CM frame,
v = AV and
1
2
(vb − vm)2
+
1
2
Av2
m =
1
2
v2
+
1
2
AV 2
.
Solving gives v = Avb
A+1
and V = vb
A+1
. U sinσ and U cosσ are the perpendicular and parallel
components of U, in the LF, resolved along the initial direction of the neutron before collision.
Transforming these to the COMF gives U sinσ and −U cosσ + vm as the perpendicular and
parallel components of V . So we get U2
= V 2
sin2
θ+V 2
cos2
θ+v2
m −2V vm cosθ. Since V = vm
we get U2
= 2v2
m(1 − cosθ). Substituting for U from eq(4) and simplifying gives
v2
a
v2
b
=
Ea
Eb
=
A2
+ 2Acosθ + 1
(A + 1)2
.
G(α,θ) =
Ea
Eb
=
A2
+ 1
(A + 1)2
+
2A
(A + 1)2
cosθ =
1
2
[(1 + α) + (1 − α)cosθ].
Note: We have va =
√
A2 + 2Acosθ + 1
A + 1
vb. Substituting for va, v, vm in v cosθ = va cosθL−vm
gives the relation between θL and θ,
cosθL =
Acosθ + 1
√
A2 + 2Acosθ + 1
.
Treating the above equation as quadratic in cosθ gives,
cosθ =
−sin2
θL ± cosθL
p
A2 − sin2
θL
A
.
For θL = 0◦
the root with the negative sign gives θ = 180◦
which is not correct so,
cosθ =
cosθL
p
A2 − sin2
θL − sin2
θL
A
.
Substituting the above expression for cosθ in the expression for
v2
a
v2
b
gives an expression in terms
of cosθL
v2
a
v2
b
=
Ea
Eb
=
A2
+ 2cosθL
p
A2 − sin2
θL + cos2θL
(A + 1)2
.
