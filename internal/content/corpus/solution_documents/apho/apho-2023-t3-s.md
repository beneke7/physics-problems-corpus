---
id: solution-document-apho-2023-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2023/T3_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2023-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2023/T3_S.pdf."
---

CAVITATION: A POSSIBLE SOLUTION
TSOGTGEREL GANTUMUR
Note: The chosen units might be a bit diﬀerent from the “oﬃcial” problem statement.
For instance, we might write 1µm for 10−6
m. “Table 1” refers to the “notation table”
from the statement.
A1. By performing a simple dimensional analysis, estimate the collapse time τ of a pure
vapour bubble, in terms of bubble’s initial radius R0, water density ρ, water pressure p∞,
and the vapour pressure pv. Evaluate the formula when R0 = 1mm and the quantities ρ,
p∞ and pv take their typical values from Table 1. Assume no surface tension: σ = 0.
Solution. It is reasonable to expect that the bubble would not collapse if p∞ ≤ pv. Hence
we take p∞ > pv, and presume that the diﬀerence p∞ −pv will feature in the final formula.
The dimensions of the quantities are
[R0] = m, [ρ] = kg/m3
, [p∞ − pv] = N/m2
= kg/(m · s2
). (1)
The only combination of these that has the dimension of time is
τ ∼ R0
√
ρ
p∞ − pv
≈ 0.1s. (2)
A2. Suppose that a micro-bubble consisting of air and vapour, with radius R0 = 10µm,
is in equilibrium when the external pressure p∞ = 100kPa. Find the partial pressure q0
of air in the bubble. Now suppose that the external pressure p∞ was gradually decreased,
and that the air inside the bubble follows an isothermal process. Find the critical pressure
pc, defined by the condition that if p∞ < pc the bubble size grows without bound. The
quantities pv and σ take their typical values from Table 1.
Solution. The pressure equilibrium condition is
pv + q = p∞ +
2σ
R
, (3)
which, under R = R0 and q = q0, yields
q0 = p∞ − pv +
2σ
R0
≈ 170kPa. (4)
On the other hand, taking into account the isothermal law
q0R3
0 = qR3
, (5)
we get
p∞ = pv +
q0R3
0
R3
−
2σ
R
. (6)
The critical pressure corresponds to the minimum of p∞ as a function of R. The radius
at the minimum is easily found to be
Rc = R0
√
3q0R0
2σ
≈ 60µm, (7)
12 TSOGTGEREL GANTUMUR
and the corresponding pressure is
pc = pv − 2q0
(R0
Rc
)3
≈ 700Pa. (8)
B1. Suppose that a single spherical bubble resides within water that fills space uniformly,
and that the bubble may evolve in size without distorting its spherical shape, due to
changes, e.g., in the external pressure p∞. Derive an equation that relates the bubble
radius R(t) and its time derivatives R′
(t) and R′′
(t), surface tension σ, water density ρ,
the pressure far from the bubble p∞, and the pressure inside the bubble p. Then split the
pressure p into two terms, by assuming that the bubble has both vapour and air in it, and
that the air follows an adiabatic process with exponent γ. To give a reference point, the
partial air pressure must be q0 when the bubble size equals R0. Assume that evaporation,
condensation, or transfer of air between the bubble cavity and the surrounding water has
no eﬀect on the water volume.
Solution. Let v(r,t) denote the radial velocity of the fluid element at the distance r from
the bubble center and at the time moment t. Let also u(t) = v(R,t), that is,
u(t) = R′
(t). (9)
Then the incompressibility condition yields
v(r,t) =
R2
u(t)
r2
, (10)
and hence
∂v
∂t
=
∂
∂t
R2
u
r2
=
2R
r2
u2
+
R2
r2
u′
. (11)
The radial acceleration can now be computed as
a =
∂v
∂t
+
∂v
∂r
v =
R2
r2
u′
+
2R
r2
u2
−
2R4
r5
u2
. (12)
With p = p(r) denoting the pressure field (where possible time dependence is suppressed
in the notation), Newton’s law reads
ρa = −p′
, (13)
or
R2
r2
u′
+
(2R
r2
−
2R4
r5
)
u2
= −
p′
ρ
. (14)
We integrate it from r = R to r = ∞, to get
Ru′
+
3
2
u2
=
p(R) − p∞
ρ
. (15)
Since the pressure inside the bubble satisfies
p = p(R) +
2σ
R
, (16)
we conclude that
RR′′
+
3
2
(R′
)2
+
2σ
ρR
=
p − p∞
ρ
. (17)
Finally, taking into account the fact that the bubble pressure p consists of the vapour
pressure pv and the partial air pressure q, as
p = pv + q = pv + q0
(R0
R
)3γ
, (18)CAVITATION: A POSSIBLE SOLUTION 3
we have
ρRR′′
+
3
2
ρ(R′
)2
+
2σ
R
−
q0R3γ
0
R3γ
= pv − p∞. (19)
B2. A water tank under the external pressure p−
∞ = 100kPa, containing a nucleus of
radius R0 = 10µm initially in equilibrium, was exposed to vacuum, so that the system
suddenly has p∞ = 0. Estimate the terminal (asymptotic) value of the growth speed R′
,
as well as the time it reaches this terminal value.
Solution. Putting R′′
= 0 and R → ∞ in (19) yields
R′
(∞) =
√
2(pv − p∞)
3ρ
=
√
2pv
3ρ
≈ 1.24m/s. (20)
The initial acceleration can also be found from (19) as
R′′
(0) =
q0 + pv − 2σ/R0
ρR0
=
p−
∞
ρR0
≈ 107
m/s2
, (21)
and hence the time for the speed to be stabilized can be estimated as
t =
R′
(∞)
R′′(0)
≈ 0.1µs. (22)
B3. A water tank under the external pressure p−
∞ = 1600Pa, containing a gas bubble
of radius R0 = 10µm initially in equilibrium, was suddenly exposed to the atmospheric
pressure p∞ = 100kPa. Estimate the minimum radius of the bubble before it rebounds.
Solution. Multiply (19) by 2R2
R′
to get
ρ[R3
(R′
)2
]′
+ 4σRR′
− 2q0R3γ
0 R2−3γ
R′
= 2(pv − p∞)R2
R′
, (23)
or
ρ[R3
(R′
)2
]′
+ 2σ(R2
)′
+
2q0R3γ
0 (R3−3γ
)′
3(γ − 1)
=
2
3
(pv − p∞)(R3
)′
. (24)
This can easily be integrated, from R(0) = R0 and R′
(0) = 0 to R(t) = R and R′
(t) = R′
,
which yields
ρR3
(R′
)2
+ 2σ(R2
− R2
0) +
2q0R3γ
0 (R3−3γ
− R3−3γ
0 )
3(γ − 1)
=
2
3
(pv − p∞)(R3
− R3
0), (25)
or
ρ(R′
)2
=
2(pv − p∞)
3
−
2σ
R
+
2R3
0
R3
(
σ
R0
+
p∞ − pv
3
+
q0
3(γ − 1)
−
q0R3γ−3
0
3(γ − 1)R3γ−3
)
. (26)
When R ≪ R0, it shows first that
R′
∼ −R−3/2
, (27)
and moreover that the rebound radius satisfies
(R0
R
)3(γ−1)
=
(γ − 1)(p∞ − pv + 3σ/R0)
q0
+ 1. (28)
Taking into account that
q0 = p−
∞ − pv + 2σ/R0 ≈ 10Pa, (29)
we conclude that the rebound radius is
R ≈ 0.4µm. (30)4 TSOGTGEREL GANTUMUR
B4. If there is no gas other than water vapour present in a bubble, the bubble completely
collapses in finite time. Determine the characteristic exponent α in
R(t) ∼ (T − t)α
, (31)
where T is the collapse time.
Solution. We have found in the previous part that
R′
∼ −R−3/2
. (32)
Putting R(t) ∼ (T − t)α
into it we get
(T − t)α−1
∼ −(T − t)−3α/2
, (33)
or
α =
2
5
. (34)
B5. Based on the equation derived in Part 3, find the natural frequency of the spherical
oscillation of a bubble of radius R0 = 0.1mm.
Solution. Introducing the new variable x by R = R0x, we write (19) as
ρR2
0xx′′
+
3
2
ρR2
0(x′
)2
+
2σ
R0x
− q0x−3γ
= pv − p∞. (35)
Now put x = 1 + y and retain the terms up to linear in y, to have
ρR2
0y′′
+
2σ
R0
(1 − y) − q0(1 − 3γy) = pv − p∞. (36)
Taking into account the equilibrium condition
2σ
R0
− q0 = pv − p∞, (37)
we infer
y′′
+
3γq0 − 2σ/R0
ρR2
0
y = 0. (38)
Thus the bubble is unstable if
3γq0 ≤ 2σ/R0 = q0 + pv − p∞, (39)
or equivalently, if
p∞ ≤ pv − (3γ − 1)q0. (40)
On the other hand, if p∞ > pv − (3γ − 1)q0 then the bubble oscillates with the natural
frequency
f0 =
1
2πR0
√
(3γ − 1)q0 + p∞ − pv
ρ
≈ 33kHz. (41)
B6. Suppose that the bubble described in the previous part is subjected to a standing
sound wave along the x-axis, whose pressure field is given by
p(x,t) = p0 + Asin
(2πf
c
(x + a)
)
sin(2πft), (42)
where f is the frequency, and c is the speed of sound. The parameters p0, A, and a are
constants, whose meanings may readily be deduced from the equation. Find the average
force exerted upon the bubble. The bubble is situated at the origin of the xyz coordinate
system, and its size is much smaller than the wavelength of the sound.CAVITATION: A POSSIBLE SOLUTION 5
Solution. Small oscillation of the bubble is described by
ρR2
0(y′′
+ 4π2
f2
0 y) = Asin
(2πf
c
a
)
sin(2πft). (43)
Looking for the solution in the form
y(t) = B sin(2πft), (44)
we find
B =
Asin(2πfa/c)
4π2ρR2
0(f2
0 − f2)
. (45)
Since
R(t) = R0 + R0y(t), (46)
the volume of the bubble is
V (t) =
4π
3
R(t)3
≈
4π
3
R3
0[1 + 3y(t)]. (47)
Now recalling that the average force is
F = −⟨V
∂p
∂x
⟩, (48)
where the average is taken over time, and that the pressure gradient is
∂p
∂x
=
2πfA
c
cos
(2πf
c
a
)
sin(2πft), (49)
we conclude
F = −
fA2
R0
2ρc(f2
0 − f2)
sin
(4πfa
c
)
. (50)
C1. Suppose that a nucleus consisting of air and vapour, with radius R0 = 10µm, is
placed in water-air solution, in which the dissolved air is in equilibrium with the atmo-
spheric pressure above the water. The partial pressure of air in the bubble is q = 170kPa,
and the vapour pressure can be neglected. Estimate the time required for the bubble to
be completely resorbed into water. The quantities p∞, κ, δ and σ take their typical values
from Table 1. Assume that the region surrounding the bubble in which air diﬀusion takes
place immediately gets much larger than the bubble itself.
Solution. From Henry’s law, the initial concentration of dissolved air in the body of
water is
ui = Hp∞ ≈ 0.024kg/m3
, (51)
and the initial concentration of dissolved air in the immediate vicinity of the bubble is
u = Hq ≈ 0.041kg/m3
. (52)
Since u > ui, there will be diﬀusive flux directed away from the bubble, and the bubble
will start losing air. As a result, the bubble shrinks and the surface tension term 2σ/R
increases. Since the external pressure p∞ is constant, the partial air pressure q increases,
which leads to more diﬀusive flux. In the end, the bubble will get completely resorbed
into water.
To quantify the diﬀusion of air, let us consider the region enclosed by concentric spheres
of radii r and r + ∆r with ∆r small. The rate of change of air mass in this region is
dm
dt
= 4πr2
∆r
∂u
∂t
, (53)6 TSOGTGEREL GANTUMUR
Figure 1. (a) Initial configuration of the system (b) The geometry used
in the solution
where 4πr2
∆r is the volume of the region and the air concentration u = u(r,t) is a
function of r and t. On the other hand, the same quantity can be computed as the
diﬀerence between the diﬀusive fluxes through the concentric spheres:
dm
dt
= 4π(r + ∆r)2
J(r + ∆r) − 4πr2
J(r)
= 4π(r + ∆r)2
κ
∂u
∂r
(r + ∆r) − 4πr2
κ
∂u
∂r
(r)
≈ 4πr2
κ∆r
∂2
u
∂r2
(r) + 8πrκ∆r
∂u
∂r
(r),
(54)
where we have taken into account the directions of the fluxes, and the fact that
∂u
∂r
(r + ∆r) ≈
∂u
∂r
(r) + ∆r
∂2
u
∂r2
(r). (55)
Comparing the two equations, we infer
∂u
∂t
= κ
∂2
u
∂r2
+
2κ
r
∂u
∂r
. (56)
The dissolved air concentration in water at the initial time moment t = 0 is uniformly ui,
and assuming that the radius R of the bubble remains constant, the air concentration in
the immediate vicinity of the bubble should be equal to Hq:
{
u(r,0) = ui for r > R,
u(R,t) = Hq for t > 0.
(57)
Introducing a new variable v = r(u−qH), and a new time parameter τ = κt, the diﬀusion
equation (56) becomes
∂v
∂τ
=
∂2
v
∂r2
, (58)
with {
v(r,0) = r(ui − qH) for r > R,
v(R,τ) = 0 for τ > 0.
(59)CAVITATION: A POSSIBLE SOLUTION 7
We can go further by introducing
ξ = r − R and w(ξ,τ) = v(R + ξ,τ), (60)
to write (56) as
∂w
∂τ
=
∂2
w
∂ξ2
, (61)
with {
w(ξ,0) = (R + ξ)(ui − qH) for ξ > 0,
w(0,τ) = 0 for τ > 0.
(62)
The solution to this problem is
w(ξ,τ) =
ui − qH
√
4πτ
∫ ∞
0
(
e−(ξ−η)2/(4τ)
− e−(ξ+η)2/(4τ)
)
(η + R)dη. (63)
Since
u(r,t) = qH +
v(r,κt)
r
= qH +
w(r − R,κt)
r
, (64)
we have
∂u
∂r
=
1
r
∂w
∂ξ
−
w
r2
, (65)
and hence
∂u
∂r r=R
=
1
R
∂w
∂ξ ξ=0
= (ui − qH)
( 1
R
+
1
√
πκt
)
. (66)
The second term corresponds to the width of the diﬀusion layer surrounding the bubble,
which we assume to be much larger than the bubble itself. Hence the rate of change of
the mass of the bubble can be estimated as
dm
dt
= 4πR2
κ
∂u
∂r r=R
≈ 4πκR(ui − qH). (67)
On the other hand, the mass of the bubble is related to the air density, which in turn is
proportional to the pressure:
m =
4π
3
R3
δ =
4π
3
R3
·
δ0q
p∞
, (68)
where δ0 = 1.2kg/m3
is the air density at the atmospheric pressure p∞ = 105
Pa. Fur-
thermore, neglecting vapour pressure, we have the mechanical equilibrium condition
q = p∞ +
2σ
R
, (69)
leading to
m =
4π
3
R3
· (δ0 +
ε
R
), (70)
with
ε =
2σδ0
p∞
≈ 1.73 · 10−6
kg/m2
. (71)
After taking the derivative of (70) with respect to t, we equate it to (67), and get
4πκR(ui − p∞H −
2σH
R
) = 4πδ0R2 dR
dt
+
8π
3
εR
dR
dt
. (72)
Since ui − p∞H = 0, we have
−2σκHdt = δ0R2
dR +
2
3
εRdR, (73)8 TSOGTGEREL GANTUMUR
and a direct integration yields
2σκHt =
δ0R3
0
3
+
4εR2
0
3
, (74)
finally giving
t =
(δ0R0 + 4ε)R2
0
6σκH
≈ 9s. (75)
Thus the nucleus collapses in a matter of seconds.
C2. Consider a conical crevice in the wall of a water container, with an aperture angle α.
A small amount of air and vapour is trapped within the cone. Write down the condition
of mechanical and diﬀusive equilibrium. Determine when the pocket of air stays in the
crevice without disappearing.
Figure 2. Conical crevice
Solution. The equilibrium conditions are
pv + q = p∞ ±
2σ
R
and u = Hq. (76)
The plus sign corresponds to the situation where the water surface is concave, and the
surface tension tends to squeeze the air out of the crevice through diﬀusion. When the
water surface is convex, we have the opposing sign. Supposing that initially the partial
air pressure q is large, q will decrease as the region of trapped air shrinks due to diﬀusion.
At some point, a diﬀusive equilibrium will be found. Thus the pocket of air does not
disappear when the water surface is convex, meaning that
π + α < 2θ. (77)
