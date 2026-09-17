---
id: solution-document-apho-2017-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2017/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2017-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2017/T2_S.pdf."
---

Evolution of Supermassive Bla k Holes Binary
Solution
A. Dynami al Fri tion
A1. The dee tion angle is dened from: tanα ≈ α = py
px
, assuming that α ≪ 1. One an nd
py =
R
Fy dt, and a ording to Newton's gravity law
Fy =
GMm
b2
cos3
ϕ
The geometry: x = btanϕ, so we hange the variable dt = dx
v
= b
v
dϕ
cos2 ϕ
and we have
py =
GMm
bv
Z π/2
−π/2
cosϕdϕ =
2GMm
bv
.
Here we assume that the body moves along the stright line, due to α ≪ 1, see Fig 1. So α = py
p
and
α =
2GM
bv2
=
2b1
b
, k = 2
φ
v
y
x
b
M
m
A2. During the transit of a massive body, star's energy remains onstant: p2
x + p2
y = onst.
Hen e
(p + ∆px)2
+ p2
y = p2
.
We know that py ≪ p, so the SBH momentum hange along the x-axis ∆px = −
p2
y
2p
= −α2
2
p, so
∆px = −
2G2
M2
m
b2v3
.
A3. To al ulate net for e we might integrate over stars with dierent impa t parameters. The
number of stars' transits during the time ∆t equals ∆N = 2πbvndb∆t, so for e, de elerating
the obje t along the x-axis,
(1) FDF =
1
∆t
Z
∆px dN = −4πG2
M2 nm
v2
Z bmax
bmin
db
b
= −4πG2
M2 ρ
v2
logΛ
12
b
Δb
x
v
The above formulas are true only for b > b1, so the lower integration limit is bmin = b1, and the
upper limit is determined by the galaxy size bmax = R. So we have
(2) FDF = −4πG2
M2 ρ
v2
logΛ
where Λ = R/b1.
A4. We al ulate: b1 = GM
v2 = 10.7 p , logΛ = 7.5.
B. Gravitational slingshot
B1. From the se ond Newton's law
Mv2
a
=
GM2
4a2
,
and we have for the orbital velo ity vbin =
r
GM
4a
. The system energy is
E = Ekin + U = 2 ·
Mv2
2
−
GM2
2a
.
The answer is
(3) E = −
GM2
4a
B2. From angular momentum onservation law
bσ = rmv0,
express v0. Write down the energy onservation law
σ2
2
=
v2
0
2
−
GM2
rm3
and derive
b = rm
r
1 +
2GM2
σ2rm
.
B3. To estimate the time between ollisions let us use an analogy with the gas. As known
from the mole ular kineti theory, given that mole ules have radii r, thermal velo ities v, and
the mole ular on entration n, the time ∆t between ollisions of one mole ule with the others
an be estimated from the relation πr2
vn∆t = 1. In our problem bmax stands in pla e of the
mole ule radius, therefore for estimation it an be written
(∆t)−1
= πσb2
maxn.
Estimate the maximal impa t parameter bmax, orresponding to the star ollision with the
binary system. The star should rea h the distan e of a to the binary system to ollide. The
star at large distan es from the SBH binary intera ts with it as with a point obje t of mass
M2 = 2M. From the results of B.2, assuming rm = a, we obtain bmax = a
q
1 + 4GM
σ2a
. Taking
into a ount that σ2
≪ GM
a
, simplify:
bmax =
2
σ
√
GMa,
so we have
∆t =
mσ
4πGMρa
B4. During the one a t of gravitational slingshot, star energy in reases at average by
∆Estar =
mv2
bin
2
−
mσ2
2
.
So the binary energy de reases by the same magnitude ∆Ebin = −∆Estar. Taking into a ount
that σ ≪ vbin, we derive
∆Ebin = −
m
2
v2
bin =
GmM
8a
.
Average binary system energy loss rate equals
(4)
dE
dt
=
∆E
∆t
= −
πG2
M2
ρ
2σ
Taking the time derivative of (3), we have
(5)
dE
dt
=
d
dt

−
GM2
4a

=
GM2
4a2
da
dt
,
From (4) and (5) the orbit radius variation rate an be estimated as
(6)
da
dt
= −
2πGρa2
σ4
B5. Equation (6) an be easily integrated
(7)
da
a2
= −
2πGρ
σ
dt.
To redu e the radius twi e it takes time
TSS =
σ
2πGρa1
= 7.3 × 10−4
Gy
C. Emission of gravitational waves
Ñ1. Using that ω =
vbin
a
=
r
GM
4a3
and formulas from the problem text one an obtain:
(8)
dE
dt
= −
1024 × 4
5
×
GM2
v6
bin
c5a2
=
64
5
·
G4
M5
c5a5
.
Combining (5) and (8) we get the desirable result:
(9)
da
dt
= −
256
5
·
G3
M3
c5a3
Ñ2. Integrating the equation (9) one an obtain:
(10) a3
da = −
256
5
·
G3
M3
c5
dt =⇒
a4
2 − r4
g
4
=
256
5
·
G3
M3
c5
· TGW ;
And taking into a ount a2 ≫ rg we derive the nal result for TGW :
(11) TGW =
5
1024
·
a4
2c5
G3M3
Ñ3. From the previous equation and TGW = tH:
(12) aH =
4
s
1024
5
·
G3
M3
tH
c5
= 0.098p
D. Full evolution
D1. The galaxy is spheri ally symmetri , so mass en losed within a sphere of radius r equals
(13) m(r) =
Z r
0
4πx2
ρ(x)dx =
σ2
r
G
.
Thus the free fall a eleration of the body equals in the gravitational eld of stars is
(14) g(r) =
Gm(r)
r2
=
σ2
r
.
Therefore the body velo ity is determined by relation
v2
r
= g =
σ2
r
,
whi h means
(15) v = σ5
So the velo ity is onstant.
D2. The energy of SBH in this gravitational eld is
E =
Mσ2
2
+ U
So the kineti energy is onstant and
dE
dt
=
dU
dt
=
dU
da
da
dt
From the denition of potential energy we have
dU
da
= g(a)M =
Mσ2
a
Using the result of A3 we have
dE
dt
= −FDfv = −4πG2
M2 ρ(a)
σ
logΛ = −
GM2
σ logΛ
a2
.
Combining this equations we get the answer
(16)
da
dt
= −
GM logΛ
aσ
D3. To estimate one an assume that SBHs form a binary when the mass of stars inside the
sphere of radius a equals to M:
m(a) =
σ2
a
G
= M,
so
a1 =
GM
σ2
= 10.8p
Alternative variant: the for e from another SBH is equal to for e from all stars:
Gm(a)
a2
=
GM
4a2
so the answer is
a1 =
GM
4σ2
= 2.7p
D4. Integrating the equation (16) we have
a2
0 − a2
1
2
=
GM logΛ
σ
T1
and using that a1 ≪ a0 we have
T1 =
a2
0σ
2GM logΛ
= 0.121Gy.
D5. Total energy losses are aused by gravitational slingshot and gravitational waves emission,
so ombining equations (4) and (8):
(17)
dE
dt
= −
πG2
M2
ρ1
2σ
−
64
5
·
G4
M5
c5a56
where
ρ1 = ρ(a1) = ρ(10.8p ) = 6.3 × 103
Ms/pc3
, alternative: ρ1 = ρ(2.7p ) = 1.0 × 105
Ms/p 3
Energy losses due to GW dominates when πG2M2ρ1
2σ
< 64G4M5
5c5a5 i.e. a < a2 where
a5
2 =
128
5π
·
G2
M3
σ
c5ρ1
=
512
5
·
G3
M3
a2
1
c5σ
Numeri al answer is a2 = 0.018p (alternative: a2 = 0.010p ).
D6. For rough approximation it an be onsidered that at the slingshot stage (a > a2) energy
losses are aused only by slingshot, so T2 is al ulated analogiously to B5: da
a2 = −2πGρ
σ
dt and
T2 ≈
σ
2πGρ1a2
= 0.063Gy (T2 ≈ 0.0068Gy)
And at the GW emission stage (a < a2) energy losses are aused only by GW emission, so T3
is al ulated dire tly from C2:
T3 ≈
5
1024
·
a4
2c5
G3M3
=
1
8π
·
σ
Gρ1a2
= 0.016Gy (T3 ≈ 0.0017Gy)
D7. Total time of SBH binary evolution from the moment of galaxies merging to SBH merging
equals
Tev = T1 + T2 + TGW = 0.12 + 0.06 + 0.02Gy = 0.20Gy (Tev = 0.13Gy)
