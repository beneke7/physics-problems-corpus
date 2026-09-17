---
id: nbpho-2019-satellite
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2019-satellite
solution_type: official
source_document: solution-document-nbpho-2019-s
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2019_S.pdf."
---

1. SATELLITE (8 points) — Taavet Kalda.
i) (1 point)From the energy conservation law,
mv2
m
2
−
GM⊕m
r⊕
= 0,
hence
vm =
√
2GM⊕
r⊕
.
ii) (2 points)Let the speed of the satellite just
after leaving Earthʼs gravitational field be v1.
From energy conservation,
mv2
0
2
−
GM⊕m
r⊕
=
mv2
1
2
,
where M⊕ is Earthʼs mass. Furthermore, we
have g = GM⊕
r2
⊕
. Thus,
v1 =
√
v2
0 −
2GM⊕
r⊕
=
√
v2
0 − 2gr⊕.
iii) (2.5 points) The average solar irradiance
can be expressed as
Iavg =
1
T
∫ T
0
I(t)dt,
where I(t) the solar irradiance at time t. We
can express the solar irradiance as I(t) =
L⊙
4πr(t)2 . Furthermore, it might be more con-
venient to integrate over the angle instead of
time so we can use dt = dα
ω(α), where ω is the
angular velocity of the satellite. This yields
Iavg =
1
T
∫ 2π
0
L⊙
4πr2
dα
ω
=
L⊙
4πT
∫ 2π
0
dα
ωr2
.
Notethatthedenominatorintheintegrandis
verysimilartotheangularmomentumofthe
satellite. Indeed, the angular momentum is
J = mvr = mωr2
= Const. Thus,
Iavg =
L⊙
4πT
∫ 2π
0
dαm
J
=
L⊙m
4πTJ
∫ 2π
0
dα =
L⊙m
2TJ
.
iv) (2.5 points) Since L⊙ and m are constant,
we need to minimise the quantity TJ. Note
that the minimal angular momentum cor-
responds to the case when the satellite is
launched directly opposite to the motion of
Earth. It turns out that this also corresponds
to the minimal orbital period. Let ⃗ v2 be the
satelliteʼs velocity in Sunʼs frame. Then ⃗ v2 =
⃗ v1 − ⃗ v⊕, where v⊕ =
√
GM⊙
R⊕
is Earthʼs ve-
locity. For convenience, letʼs write x = v2
v⊕
.
Consider the total energy of an elliptical or-
bit Etot = −GM⊙m
2a . On the other hand, the
total energy is Etot =
mv2
2
2 − GM⊙m
R⊕
. combin-
ingthetwoequationsandrearranging, R⊕
a =
2 −
v2
2R⊕
GM⊕
= 2 − x2
. From Keplerʼs III Law,
T2
a3 = 4π2
GM⊙
. Thus, T =
2πR3
⊕
√
GM⊙
(
2 − x2
)−3/2
.
As we can see, in order to minimise T, v2
needs to be minimal as well.
In conclusion, Iavg is maximal when the
satellite is launched directly against the mo-
tion of Earth. The corresponding value for
Iavg is
Iavg =
L⊙
4πR2
⊕
√
GM⊙
R⊕
1
v2
(
2 − x2
)3/2
=
L⊙
4πR2
⊕
(2 − x2
)3/2
x
,
where x =
√
R⊕
GM⊙
√
v2
0 − 2gr⊕ − 1.
