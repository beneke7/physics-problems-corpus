---
id: nbpho-2019-dominoes
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2019-dominoes
solution_type: official
source_document: solution-document-nbpho-2019-s
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2019_S.pdf."
---

7. DOMINOES (6 points) — Kaarel Hänni. Let
the iʼth domino have initial angular velocity
ωi. Let us first find ω′
i, the angular velocity
of this domino just before colliding with the
next one. A collision occurs after the dom-
ino has fallen by an angle of α = arctan
(1
2
)
.
By conservation of energy, 1
2Iω′2
i = 1
2Iω2
i +
1
2mgℓ(1 − cos(α)). Hence,
ω′
i =
√
ω2
i +
mgℓ
I
(1 − cos(α)) = (1)
√
ω2
i +
3g
ℓ
(
1 −
2
√
5
)
.
Thecollisionoftwodominoesisinelastic,
so after the collision the two dominoes move
together (for a negligibly short time before
the first domino bumps into the corner of a
step). After the two dominoes collide, let the
angular velocity of the first one be ω′′
i . Since
the two dominoes move in unison,
cos(α)ℓω′′
i = cos(α)
ℓ
2
ωi+1 =⇒ ω′′
i =
1
2
ωi+1.
(2)
During the collision, the force between the
two dominoes is always horizontal (since
there is no friction between the two), let this
force be F(t), where t is the time. Let us con-
sider the angularmomentum of the iʼthdom-
ino w.r.t. its base.
I(ω′
i−ω′′
i ) = ℓcos(α)
∫ uniformiz. of velocities
beginning of collision
F(t)dt
(3)
For the second domino, we have an analog-
ous equation.
Iωi+1 = cos(α)
ℓ
2
∫ uniformiz. of velocities
beginning of collision
F(t)dt
(4)
Equations (3) and (4) together imply
ω′
i − ω′′
i = 2ωi+1. (5)
Wecannowplugequations(2)and(1)into(5)
to express ωi+1 in terms of ωi.
ωi+1 =
2
5
ω′
i =
2
5
√
ω2
i +
3g
ℓ
(
1 −
2
√
5
)
(6)
By stability, ωi = ωi+1 = ω. This lets us fi-
nally evaluate ω.
ω2
i =
4
25
ω2
i +
12g
25ℓ
(
1 −
2
√
5
)
=⇒
ω = ωi =
√
4g
7ℓ
(
1 −
2
√
5
)
