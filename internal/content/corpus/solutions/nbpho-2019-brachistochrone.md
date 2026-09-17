---
id: nbpho-2019-brachistochrone
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2019-brachistochrone
solution_type: official
source_document: solution-document-nbpho-2019-s
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2019_S.pdf."
---

5. BRACHISTOCHRONE (10 points) — Rūdolf
Treilis.
i) (2 points) The ball that moves on the or-
ange curve is under an effective acceleration
aeff = H √
H2+L2
g , so
aeff t2
o
2 =
√
H2 + L2 and
to =
√
2(H2+L2)
gH . The ball that moves on
the blue curve initially falls for a time t1 = √
2H/g and then moves with a velocity v =
√
2gH for the remainder, hence t2 = L √
2gH
and the total time is tb = t1 + t2 = 2H+L √
2gH
. The equation to = tb can be solved to give
L
H = 4
3
ii) (2 points) To understand this point one
needs to apply Fermatʼs principle, which
states that light always takes the path of loc-
ally least time between two points. Since the
speed of the ball will vary based on height,
this is reinterpreted as a height-variable in-
dex of refraction. From energy conservation
it is know that mv(y)2
2 = mgy , hence v (y) =
√
2gy and n(y) = v(H)
v(y) =
√
H
y .
iii) (2 points) From Snellʼs law we know that
n(y)sinθ = const. = C , so we need to ex-
press dy
dx = cotθ in terms of sinθ (notice that
derivative is the cotangent is this case, be-
cause of the way how the angle is defined
in optics). Use the result that 1 + cot2
θ =
1
sin2 θ = n(y)2
C2 , hence dy
dx =
√
An(y)
2
− 1
with A = 1
C2
iv) (2 points) We know that dy
dx (y = 0) =
0 (from the grazing condition), so find
n(0) = n0 and dy
dx (y = 0) =
√
An2
0 − 1
, hence A = 1
n2
0
. This in turn gives us
dy
dx =
√
(1 + αy)
2
− 1 , so dy
dx (y = h) =
√
2αh + α2h2 , hence d = h
dy/dx(y=h) =
h √
2αh+α2h2
.
v) (2 points) In this case there is a trivial cyc-
loid linking the points A and B that also sat-
isfies the initial condition vA = 0 . Choose
a wheel with radius R = H
2 = L
π , so that
thewheelcompletesexactlyhalfarevolution
between points A and B . We want to find
the functional dependence of the angular ve-
locity on the roll angle ω (θ) such that the
point at the top is at the same position as
the point mass for all time. We can find the
components of the velocity vy = Rω (θ)sinθ
and vx = Rω (θ)[1 − cosθ] , hence v2
=
2R2
ω (θ)
2
[1 − cosθ] = 2gR[1 − cosθ],where
the last equality comes from energy conser-
vation of the ball. Hence we can conclude
that the angular velocity is constant ω2
=
π2
t2
min
= g
R and tmin = π
√
R
g = π
√
H
2g .
