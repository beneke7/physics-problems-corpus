---
id: solution-document-apho-2021-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2021/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2021-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2021/T2_S.pdf."
---

Theoretical Question 2: Ray tracing and generation of entangled light
Part A. Light propagation in isotropic dielectric media
A.1 0.4 pt
Ans: 1 √
µ0
Solution:
From ~ k× ~ E = ω~ B = ωµ0
~ H and ~ k× ~ H = −ω~ D, one obtains ~ k×(~ k× ~ E) = −ω2
µ0
~ D. By using
the given identity ~ A×(~ B× ~ C) = ~ B(~ A· ~ C)− ~ C(~ A· ~ B), one finds ~ k×(~ k× ~ E) = ~ k(~ k· ~ E)−k2 ~ E.
Since ~ D · ~ k = 0 and ~ D = ~ E, we find ~ k × (~ k × ~ E) = −k2 ~ E and the relation
~ k × (~ k × ~ E) = −ω2
µ0
~ D reduces to −k2 ~ E = −ω2
µ0~ E.
Now the phase delocity is determined by d(~ k·~ r−ωt)
dt
= 0, we find that the phase velocity
~ vp = d~ r
dt
= ω
k
k̂. Clearly, we have ω
k
= 1 √
µ0
. Hence vp = 1 √
µ0
.
A.2 0.2 pt
Ans: c
√
µ0
Solution:
From vp = 1 √
µ0
= c
n
, we find n = c
√
µ0
A.3 0.4 pt
Ans: k̂, vr = vp = 1 √
µ0
Solution:
To find the speed of the ray, we first note that the direction of the energy flow, given by
the Poynting vector ~ S = ~ E × ~ H, is in the same direction of ~ k. The electromagnetic energy
density u = ue + um with ue = 1
2
~ E · ~ D and um = 1
2
~ B · ~ H.
Now, from ~ k× ~ H = −ω~ D, one has ~ D = − 1
vp
k̂× ~ H. Hence ue = − 1
2vp
~ E·k̂× ~ H = 1
2vp
k̂· ~ E× ~ H.
Similarly, from ~ k× ~ E = ω~ B, we find um = 1
2vp
~ B·k̂× ~ E = 1
2vp
k̂· ~ E× ~ H. Hence u = 1
vp
k̂· ~ E× ~ B.
We find vr = S/u = vp = 1 √
µ0
.
Part B. Light propagation in in uniaxial dielectric media
B.1 1.5pt
Ans: n = no, B̂ = ±k̂ × ŷ = ±(−cosθ,0,sinθ), D̂ = ±ŷ or n = none √
n2
o sin2 θ+n2
e cos2 θ
, B̂ = ±ŷ,
D̂ = ±ŷ × k̂ = ±(cosθ,0,−sinθ). For θ = 0, there is only one permitted value for the
refractive index
Solution:
From ~ k × ~ E = ωµ0
~ H and ~ k × ~ H = −ω~ D, one obtains ~ k × (~ k × ~ E) = −ω2
µ0
~ D. Writing out
1components and using ω = c
n
k, we find
−cos2
θEx + cosθsinθEz = −
n2
o
n2
Ex,
−cos2
θEy − sin2
θEy = −
n2
o
n2
Ey,
−sin2
θEz + cosθsinθEx = −
n2
e
n2
Ez.
After a bit rearrangement, we obtain

1 −
n2
o
n2

Ey = 0

n2
o
n2
− cos2
θ

Ex + cosθsinθEz = 0
cosθsinθEx +

n2
o
n2
− sin2
θ

Ez = 0.
The vanishing of the determinant yields

1 −
n2
o
n2

(
n2
o
n2
− cos2
θ)(
n2
e
n2
− sin2
θ) − sin2
θcos2
θ

= 0. (1)
Clearly, for a general θ, we have two solutions for n:
(1) n = no
In this case, Ex = Ez = 0. ~ E is parallel to the y axis. From ~ k × ~ E = ω~ B and ~ k × (µ0
~ B) =
−ω~ D, we obtain the directions of ~ B and ~ D as B̂ = ±k̂ × ŷ = ±(−cosθ,0,sinθ) and
D̂ = −k̂ × B̂ = ±(0,1,0) = ±ŷ.
(2) (n2
o
n2 − cos2
θ)(n2
e
n2 − sin2
θ) − sin2
θcos2
θ = 0.
After rearrangement, we find n = none √
n2
o sin2 θ+n2
e cos2 θ
. Clearly, at θ = 0, n = no, there is only
one refractive index. This is the direction of the optic axis.
In this case, Ey = 0. Hence ~ E lies in the xz plane. Hence the relation ~ k × ~ E = ω~ B implies
B̂ = ±ŷ. The relation ~ k × (µ0
~ B) = −ω~ D implies D̂ = ±ŷ × k̂.
B.2 0.8 pt
Ans: (1) when n = no, Ê = ±ŷ and this is an ordinary ray. tanα = 0.
(2) when n = none √
n2
o sin2 θ+n2
e cos2 θ
, Ê = ± 1 √
n4
e cos2 θ+n4
o sin2 θ
(−n2
e cosθ,0,n2
o sinθ) and this is an
extraordinary ray. tanα = (n2
o−n2
e)tanθ
n2
e+n2
o tan2 θ
.
Solution:
(1) For n = no, both ~ E and ~ D are parallel to the y axis. This is an ordinary ray with
tanα = 0.
2(2) For n = none √
n2
o sin2 θ+n2
e cos2 θ
, n 6= no, Ey = 0. By substituting n back into the equations of
Ex and Ez, we find that n2
o
n2
e
sinθEx + cosθEz = 0. Hence the electric field lies in xz plane
with Ê = ± 1 √
n4
e cos2 θ+n4
o sin2 θ
(−n2
e cosθ,0,n2
o sinθ) ( ~ B points in ∓y direction.). Therefore,
~ E is not perpendicular to ~ k and lies in the xz plan in together with ~ D and ~ k. This is the
extraordinary ray.
Since ~ k × ~ H = −ω~ D, ~ D is perpendicular to k̂. Hence D̂ = ±(−cosθ,0,sinθ). Let ~ B = ŷ,
the relative orientation of ~ E and ~ D for a given θ are shown in the following figure for the
case when ne < no.
x
z
B
! 𝑘
𝜃
𝐷 ⊥ $ 𝑘
𝛼
𝐷
𝐸
X
Let the angle relative to x axis be θ1 and θ2 for ~ E and ~ D. We have tanθ2 = −tanθ and
tanθ1 = −n2
o
n2
e
tanθ. Hence tanα = tan(θ2 − θ1) = tanθ2−tanθ1
1+tanθ1 tanθ2
= (n2
o−n2
e)tanθ
n2
e+n2
o tan2 θ
. The same
result remains when ne > no except that tanα < 0, indicating that the relative orientation
of ~ E and ~ D is reversed.
B.3 0.6 pt
Ans: n = no, ~ E = ±k̂ × ẑ/sinθ and this is an ordinary ray.
when n = none √
n2
o sin2 θ+n2
e cos2 θ
, Ê = ± 1 √
n4
e cos2 θ+n4
o sin2 θ
−n2
e cosθk̂+(n2
o sin2 θ−n2
e cos2 θ)ẑ
sinθ
and this is an
extraordinary ray.
Solution: The problem has an axial symmetry so that in the plane formed by the z
axis and k̂, one can write ~ k = kzẑ + k⊥k̂⊥ and ~ E = Ezẑ + E⊥k̂⊥, where k̂⊥ is perpen-
dicular to ẑ. Clearly, we kz = k cosθ, k⊥ = k sinθ, Ez = E cosθ, and E⊥ = E sinθ.
Writing out the components for the equation: ~ k × (~ k × ~ E) = −ω2
µ0
~ D, we get ex-
actly the same equations except that Ex is replaced by E⊥. Hence all of the solu-
tions are the same except x̂ is replaced by k̂⊥. Since k̂⊥ sinθ = k̂ − cosθẑ, we obtain
that when n = none √
n2
o sin2 θ+n2
e cos2 θ
, Ê = ± 1 √
n4
e cos2 θ+n4
o sin2 θ
[−n2
e cosθ(k̂−cosθẑ)
sinθ
+ n2
o sinθẑ] =
3± 1 √
n4
e cos2 θ+n4
o sin2 θ
−n2
e cosθk̂+(n2
o sin2 θ−n2
e cos2 θ)ẑ
sinθ
.
B.4 0.8 pt
Ans: (1) n = no, tanαr = 0, vr = c
no
, Ŝ = (sinθ,0,cosθ)
(2) n = none √
n2
o sin2 θ+n2
e cos2 θ
, tanαr = (n2
o−n2
e)tanθ
n2
e+n2
o tan2 θ
, vr = c
none
q
n4
e cos2 θ+n4
o sin2 θ
n2
e cos2 θ+n2
o sin2 θ
.
Ŝ = 1 √
n4
e cos2 θ+n4
o sin2 θ
(n2
o sinθ,0,n2
e cosθ)
(3) ns =
q
(Ŝ · x̂)2n2
e + (Ŝ · ẑ)2n2
o
Solution:
The direction of the energy flow is given by the Poynting vector, ~ S = ~ E× ~ H. Let the energy
density of EM wave be u and the ray velocity be vr. Then vr = S
u
. Here u = ue + um with
ue = 1
2
~ E · ~ D and um = 1
2
~ B · ~ H. There are two cases:
(i)n = no, ~ E = (0,E,0), ~ D = ~ E, ~ k × ~ E = ωµ0
~ H, ~ k × ~ H = −ω~ D.
k̂, ~ E and ~ H are mutually perpendicular to each other. Hence ~ S is parallel to k̂, i.e.,
Ŝ = (sinθ,0,cosθ) and tanαr = 0.
Now from ~ k× ~ H = −ω~ D, one has ~ D = − 1
vp
k̂× ~ H. Hence ue = − 1
2vp
~ E·k̂× ~ H = 1
2vp
k̂· ~ E× ~ H.
Similarly, we find um = 1
2vp
~ H · k̂ × ~ E = 1
2vp
k̂ · ~ E × ~ H. Hence u = 1
vp
k̂ · ~ E × ~ H. Since Ŝ = k̂,
we find u = S
vp
. Hence vr = S
u
= vp = ω
k
= c
no
.
(ii) n = none √
n2
o sin2 θ+n2
e cos2 θ
. In this case, we can tak ~ B = (0,B,0) (negative y direction works
as well). ~ D, ~ E and k̂ are in the xz plane and ~ D is perpendicular to k̂. Therefore, the angle
between ~ S = 1
µ0
~ E × ~ B and k̂ is equal to the angle between ~ D and ~ E, i.e., αr = α. This is
shown in the following figure when ne < no (for ne > no, both α and αr are negative, the
relative orientation of ~ E and ~ D is reversed and ordering of Ŝ and k̂ are switched).
x
z
B
! 𝑘
𝜃
! S 𝛼!
𝐸 ⊥ % 𝑆
𝐷 ⊥ ( 𝑘
𝛼 𝐷
𝐸
X
4Therefore, from problem (d) (ii), we get tanαr = tanα = (n2
o−n2
e)tanθ
n2
e+n2
o tan2 θ
. Now, because
u = 1
vp
k̂ · ~ E × ~ H = 1
vp
|~ E × ~ H|cosα, we obtain vr = S
u
= vp
cosα
. Hence the phase speed vp and
the ray speed are related by vp = vr cosα. From tanα, one finds cosα = n2
e cos2 θ+n2
o sin2 θ
√
n4
e cos2 θ+n4
o sin2 θ
.
Hence vr = c
ncosα
= c
none
q
n4
e cos2 θ+n4
o sin2 θ
n2
e cos2 θ+n2
o sin2 θ
.
Clearly, Ŝ = (sin(θ + α),cos(θ + α)). Since sinα = (n2
o−n2
e)sinθ cosθ
√
n4
e cos2 θ+n4
o sin2 θ
and cosα =
n2
eccos2 θ+n2
o sin2 θ
√
n4
eccos2 θ+n4
o sin2 θ
, we find Ŝ = 1 √
n4
eccos2 θ+n4
o sin2 θ
(n2
o sinθ,0,n2
e cosθ).
From n2
s =

c
vr
2
= n2
on2
e
n2
e cos2 θ+n2
o sin2 θ
n4
e cos2 θ+n4
o sin2 θ
= (n2
o sinθ)2n2
e+(n2
e cosθ)n2
o
n4
e cos2 θ+n4
o sin2 θ
, we find ns = (Ŝ ·x̂)2
n2
e +(Ŝ ·
ẑ)2
n2
o .
B.5 1.1 pt
Ans: Ā = P1(n2
sin2
θ1 − P1), B̄ = −2P3(n2
sin2
θ1 − P1), C̄ = P2n2
sin2
θ1 − P2
3 .
φ = 0, tanθ2 = nne sinθ1
no
√
n2
o−n2 sin2 θ1
.
φ = π/2, tanθ2 = nno sinθ1
ne
√
n2
e−n2 sin2 θ1
.
Solution:
Let the distance along z axis between A and B be d and the point of the interface that
the ray passes be the origin O. The coordinates of B and A points can be expressed as
(h2,0,z) and (h1,0,d−z). The distances are then given by AO ≡ d1 =
p
h2
1 + (d − z)2 and
OB ≡ d2 =
p
h2
2 + z2. The propagation time from A to B is determined by the ray speed
vr as (d1ns1 + d2ns2)/c, where nsi are ray indices for medium i. According to the Fermat’s
principle, we need to minimize the optical path length defined by ∆ ≡ d1ns1 + d2ns2. Ac-
cording to problem (e), we have n2
s2 = (
− − →
OB
OB
·x̂2)2
n2
e +(
− − →
OB
OB
·ẑ2)2
n2
o. For an isotropic medium,
the ray index is simply the refractive index, i.e., ns1 = n. Using the following relations
− − →
OB
OB
· x̂2 = cos(φ − θ2) =
h2
d2
cosφ +
z
d2
sinφ,
− − →
OB
OB
· ẑ2 = cos(
π
2
+ φ − θ2) = sin(θ2 − φ) =
z
d2
cosφ −
h2
d2
sinφ,
we find
∆ = n
q
h2
1 + (d − z)2 +
p
(h2 cosφ + z sinφ)2n2
e + (−h2 sinφ + z cosφ)2n2
o.
The minimum occurs when d∆
dz
= 0. We obtain
n
z − d
p
h2
1 + (d − z)2
+
(h2 sinφcosφ(n2
e − n2
o) + z(n2
e sin2
φ + n2
o cos2
φ)
p
(h2 cosφ + z sinφ)2n2
e + (−h2 sinφ + z cosφ)2n2
o
= 0.
5Recognizing d−z √
h2
1+(d−z)2
= sinθ1, moving the second term to the left and taking square of
the equation, we obtain
n2
sin2
θ1 =
(P3 − P1 tanθ2)2
P1 tan2
θ2 − 2P3 tanθ2 + P2
,
where P1 = n2
o cos2
φ + n2
e sin2
φ, P2 = n2
o sin2
φ + n2
e cos2
φ, and P3 = (n2
o − n2
e)sinφcosφ.
By expanding the above equation out, we find
P1(n2
sin2
θ1 − P1)tan2
θ2 − 2P3(n2
sin2
θ1 − P1)tanθ1 + P2n2
sin2
θ1 − P2
3 = 0.
Hence Ā = P1(n2
sin2
θ1 − P1), B̄ = −2P3(n2
sin2
θ1 − P1), and C̄ = P2n2
sin2
θ1 − P2
3 .
For φ = 0, we have P3 = 0, P1 = n2
o, and P2 = n2
e. We find n2
o(n2
sin2
θ1 − n2
o)tan2
θ2 +
n2
en2
sin2
θ1 = 0. Hence tanθ2 = nne sinθ1
no
√
n2
o−n2 sin2 θ1
.
For φ = π/2, we have P3 = 0, P1 = n2
e, and P2 = n2
o. We find
n2
e(n2
sin2
θ1 − n2
e)tan2
θ2 + n2
on2
sin2
θ1 = 0. Hence tanθ2 = nno sinθ1
ne
√
n2
e−n2 sin2 θ1
.
Part C. Entanglement of light
C.1 0.8 pt
Ans:(1) ω = ω1 ± ω2, ~ k = ~ k1 ±~ k2
(2) ~ω = ~ω1 ± ~ω2, ~~ k = ~~ k1 ± ~~ k2 represents the energy conservation and momentum
conservation of photons.
(3) Splitting of photon: Energy conservation ω = ω1 + ω2, momentum conservation: ~ k =
~ k1 +~ k2.
Solution:
For a light wave with frequency ω and ~ k, the corresponding polarization density and the
electric field are in the form of ~ Acos(ωt − ~ k · ~ r), which can be rewritten as
~ A
2
(ei(ωt−~ k·~ r)
+
e−i(ωt−~ k·~ r)
). By substituting the above form into the equation PNL
i =
P
j
P
k χ
(2)
ijkEjEk and
equating the relevant exponents, we find all possible relations are
ω = ω1 + ω2,~ k = ~ k1 +~ k2.
or ω = ω1 − ω2,~ k = ~ k1 −~ k2,
where we have made use of the fact that the frequency is positive. The meaning for the these
relations is clear if one recall that the energy and momentum of a photon is given by ~ω and
~~ k. The relation of ~ω = ~ω1 + ~ω2,~~ k = ~~ k1 + ~~ k2 represents the energy and momentum
6conservations when a photon with (ω, ~ k) is annihilated and split into two photons with (ω1,
~ k1) and (ω2, ~ k2), while the relation of ~ω = ~ω1 −~ω2,~~ k = ~~ k1 −~~ k2 represents the energy
and momentum conservations when a photon with (ω1, ~ k1) is annihilated and split into two
photons with (ω, ~ k) and (ω2, ~ k2).
C.2 0.8 pt
Ans: o → o + o, e → e + e
Solution:
For the collinear case, the phase matching conditions become ω = ω1+ω2, ni(ω)ω
c
=
nj(ω1)ω1
c
+
nk(ω2)ω2
c
, where i, j, and k are indices of either o or e. Assuming that ω1 ≥ ω2, one can solve
ω1 as ω1 = ω − ω2. We obtain
ni(ω) − nj(ω1) =
ω2
ω
[nk(ω2) − nj(ω1)].
(2)
Clearly, because ω > ω1 ≥ ω2, if i = j = k, ni(ω)−nj(ω1) > 0 and nk(ω2)−nj(ω1) ≤ 0, the
above equation cannot be satisfied. For other cases, because there is no relation between no
and ne, the phase matching conditions can be satisfied. Hence only o → o+o and e → e+e
are not possible.
C.3 1.5 pt
Ans: (1) M = Ko[1−Ne(Ωe,θ)cotθ]+Ke
2KeKo
, E = −Ne/2M and F = −(Ω − Ωe)( 1
uo
− 1
ue
) + N2
e
4M
(2) the angle between the axis of the cone and z0
is N/Ko = − 2KeNe
Ko[1−Ne(Ωe,θ)cotθ]+Ke
(3) the angle of cone is about
√
L/M
Ko
= −(Ω−Ωe)
MKo
( 1
uo
− 1
ue
) + N2
e
4M2Ko
.
Solution:
To satisfy the phase matching condition, we expand the angular frequencies ω1 and ω2 into
ω1 = Ωe + ν and ω2 = Ωo + ν0
. Clearly, because Ωe + Ωo = Ωp, to satisfy ω1 + ω2 = ω,
ν0
= −ν. Similarly, the conditions for the wavevectors, ~ k = ~ k1 + ~ k2, can be written as
kz = k = Kp = k1z + k2z and ~ k2⊥ = −~ k1⊥ ≡ ~ q⊥. For the o light ray, we have k2
2⊥ + k2
2z = k2
2
with k2 = no(ω2)ω2
c
. One finds that k2z =
p
k2
2 − k2
2⊥ = k2 −
k2
2⊥
2k2
. Expanding the dependence
of ω2 in k2 to ν, we obtain
k2 =
no(ω2)ω2
c
=
no(Ωo)Ωo
c
+
dk2
dω2
(ω2 − Ωo) = Ko −
ν
uo
,
where uo is the group velocity for the ordinary ray. Hence to the second order of corrections,
7we get
k2z = Ko −
ν
uo
−
q2
⊥
2Ko
.
Similarly, for the e light ray, we have k2
1⊥ + k2
1z = k2
1 with k1 = ne(ω1,θp)ω1
c
. One finds that
k1z =
p
k2
1 − k2
1⊥ = k1 −
k2
1⊥
2k1
. The expansion of k1 is different from that for k2 due to its
angle dependence. Let the spherical angles for ~ k1 be θ1 and φ1. We have
k1 =
ne(ω1,θ1)ω1
c
=
ne(Ωe,θ)Ωe
c
+
dk1(Ωe,θ)
dΩe
(ω1 − Ωe) +
Ωe
c
dne(Ωe,θ)
dθ
(θ1 − θ) + ···
Here ne(Ωe,θ)Ωe
c
= Ke, dk1(Ωe,θ)
dΩe
is 1/ue with ue being the group velocity for the extraordinary
ray and is given by
dk1(Ωe,θ)
dΩe
=
ne(Ωe,θ)
c
+
Ωe
c
dne(Ωe,θ)
dΩe
.
Because dne(Ωe,θ)
dθ
= none(n2
e−n2
o)sinθ cosθ
(n2
o sin2 θ+n2
e cos2 θ)3/2 = ne(Ωe,θ)Ne(Ωe,θ), we find Ne(Ωe,θ) =
(n2
e−n2
o)sinθ cosθ
n2
o sin2 θ+n2
e cos2 θ
. Note that for ne < no, Ne(Ωe,θ) < 0. To find δθ = θ1 − θ, we note
that for any ~ kα, one has (cf. Fig. 2(a))
k̂α · d OA = cosθα = cosθcosψα + sinθsinψα cosφα.
Since sinψ1 = |~ k⊥,1|/|~ k1| = q⊥/k1  1 and cosψ1 =
p
1 − sin2
ψ1 = 1−1/2sin2
ψ1 +···, to
the second order, we can replace k1 by Ke and obtain
k̂1 · d OA = cosθ1 = cosθ

1 −
1
2
q2
⊥
K2
e
+ ···

+ sinθ

q⊥
Ke
+ ···

cosφ1.
On the other hand, cosθ1 = cosθ+dcosθ
dθ
(θ1−θ)+··· = cosθ−sinθ(θ1−θ)+···. Comparing
this equation to the equaton for k̂1 · d OA, we obtain
θ1 − θ =
1
2
q2
⊥
K2
e
cotθ −
q⊥
Ke
cosφ1 ··· =
1
2
q2
⊥
K2
e
cotθ +
qx0
Ke
+ ···
Putting all together, we find
k1z = Ke +
1
ue
(Ω − Ωe) + Ne(Ωe,θ)qx0 +
q2
⊥
2Ke
[Ne(Ωe,θ)cotθ − 1] + ··· .
The above equation when combined with the equation of k1z and the relation Kp = k1z +k2z,
we find
(Ω − Ωe)(
1
ue
−
1
uo
) + Ne(Ωe,θ)qx0 + q2
⊥

Ko [Ne(Ωe,θ)cotθ − 1] − Ke
2KeKo

= 0.
8Because ne < no, Ne(Ωe,θ) < 0. The above equation can be rewritten in the form
M

qx0 −
Ne
2D
2
+ Mq2
y0 = −(Ω − Ωe)(
1
uo
−
1
ue
) +
N2
e
4M
.
Here D = Ko[1−Ne(Ωe,θ)cotθ]+Ke
2KeKo
> 0. Hence E = −Ne/2M > 0 (Ne < 0) and
L = −(Ω − Ωe)( 1
uo
− 1
ue
) + N2
e
4M
. Clearly, the cone axis formed by ~ k2 is characterized by
~ q⊥. We find that the angle between the axis of the cone and z0
is tan−1
(N/k1z), which
is about N/k1z ≈ N/Ko = − 2KeNe
Ko[1−Ne(Ωe,θ)cotθ]+Ke
. The angle of the cone is given by
sin−1
√
L/M
k2
≈
√
L/M
Ko
= −(Ω−Ωe)
MKo
( 1
uo
− 1
ue
) + N2
e
4M2Ko
.
C.4 0.8pt
Ans: P(α,β) = 1
2
sin2
(α + β), P(α,β⊥) = 1
2
cos2
(α + β), P(α⊥,β) = 1
2
cos2
(α + β),
P(α⊥,β⊥) = 1
2
sin2
(α + β)
Solution:
For a-photon, let the electric field along the polarizer and perpendicular to the polarization
represented by |αxi and |αyi. Here αx and αx are essentially the electric field amplitudes in
appropriate units. The electric fields (the states) along x̂0
and ŷ0
can be written as
|x̂0
ai = cosα|αxi − sinα|αyi,
|ŷ0
ai = sinα|αxi + cosα|αyi.
Similarly, for b-photon, we have
|x̂0
bi = cosβ|βxi − sinβ|βyi,
|ŷ0
bi = sinβ|βxi + cosβ|βyi.
Hence we obtain
|x̂0
ai|ŷ0
bi = (cosα|αxi − sinα|αyi)(sinβ|βxi + cosβ|βyi),
|ŷ0
ai|x̂0
bi = (sinα|αxi + cosα|αyi)(cosβ|βxi − sinβ|βyi).
The state of the entangled photon pair can be written as
1
√
2
(|x̂0
ai|ŷ0
bi + |ŷ0
ai|x̂0
bi)
=
1
√
2
[(cosαsinβ + sinαcosβ)(|αxi|βxi − |αyi|βyi)
+ (cosαcosβ − sinαsinβ)(|αxi|βyi − |αyi|βxi)]
=
1
√
2
[sin(α + β)(|αxi|βxi − |αyi|βyi) + cos(α + β)(|αxi|βyi − |αyi|βxi)]
9From the above equation, we obtain
P(α,β) =
1
2
sin2
(α + β),
P(α⊥,β⊥) =
1
2
sin2
(α + β),
P(α,β⊥) =
1
2
cos2
(α + β),
P(α⊥,β) =
1
2
cos2
(α + β).
C.5 0.5pt
Ans: S = |cos2(α − β) − cos2(α − β0
)| + |cos2(α0
− β) + cos2(α0
− β0
)|
S = 2
√
2. S > 2 indicates that it is not consistent with classical theories.
Solution:
One first realizes that E(α,β) = P(α,β)+P(α⊥,β⊥)−P(α,β⊥)−P(α⊥,β)
P(α,β)+P(α⊥,β⊥)+P(α,β⊥)+P(α⊥,β)
. Using expressions for P, we
find
E(α,β) = sin2
(α + β) − cos2
(α + β)
= (sinαcosβ + cosαsinβ)2
− (cosαcosβ − sinαsinβ)2
= −(cos2
α − sin2
α)(cos2
β − sin2
β) + 4sinαsinβ cosαcosβ
= sin(2α)sin(2β) − cos(2α)cos(2β) = −cos2(α − β).
Hence S = |cos2(α−β)−cos2(α−β0
)|+|cos2(α0
−β)+cos2(α0
−β0
)|. For α = π
4
, α0
= 0,
β = −π
8
, β0
= π
8
, we find S = | − 1 √
2
− 1 √
2
| + | 1 √
2
+ 1 √
2
| = 2
√
2 > 2. Hence classical theories
do not apply.
10
