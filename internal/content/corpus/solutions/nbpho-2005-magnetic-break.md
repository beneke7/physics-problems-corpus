---
id: nbpho-2005-magnetic-break
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2005-magnetic-break
solution_type: official
source_document: solution-document-nbpho-2005-s
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2005_S.pdf."
---

2. Magnetic brake
1) Sleeper is a simple cylindrical conductor:
R =
ρh
(δ
2
)2π
≈ 5.59mΩ.
2) Length of the railway element is αR, hence the resistance is R2 =
αR. Main ideas: first - we can imagine that railway is infinite; second
— the resistance (RR) of this infinit array remain same even if we cut
of one periodic element. Hence,
RR =
R(2R2 + RR)
2R2 + RR + R
.
Aftersolving the equation
RR = −R2 ±

R2
2 + 2R2R =

R2
2 + 2R2R − R2
andnoting that the negativesolution ofthe equation hastobe dropped
(it doesnot have physical meaning), we arrive at
RR = R(

α(α + 2) − α).
3) Importantideas:
• electromotive force is generatedwhen conductorsmove in mag-
netic field;
• There is always two sleepers moving between magnets (in mag-
netic field);
• Those sleepersactasasources of electromotiveforce (like abat-
tery);
• those sleepers also have internal resistance R.
Notice also that we can take account symmetry and connect points
with equal potential; this allows us later to simplify cyclic railway to
previously solved infinite (actually, very long) railway. We can also see
that there is no current between the two sleepers residing in the mag-
netic field (there is no potential diﬀerence), hence we can disconnect
them. So, we can obtain two indipendent (almost) infinite railways and
both have their own source of elecromotive force.
R
αR
4) Electromotive force in the sleeper is E = Bvh. Energy is dissipated
into heat P = E2
Rcircuit
. where Rcircuit = 1
2
(RR + 2αR + R),
Rcircuit =
1
2
R(

α(2 + α) + α + 1).
Consequently
P =
2B2
ω2
r2
h2
R(

α(2 + α) + α + 1)
Eventually,
k =
2r2
h2

α(2 + α) + α + 1
≈ 2.12 × 10−6
.
5) Since the power equls to Mω = P, the torqe can be found as
M =
P
ω
=
2B2
ωr2
h2
R(

α(2 + α) + α + 1)
≈ 0.39mNm.
6) Disc has a momentum of inertia eual to I = 1
2
mr2
; the angular
acceleration ε = M
I
= dω
dt
. Consequently (using decelerating M),
kB2
ω
IR
= −
dω
dt
.
If we group the variables I and t into diﬀerent side of the equation, we
obtain
kB2
IR
dt =
dω
ω
.
Integrating the both sides of the equation yields
 t
0
kB2
IR
dt = −
 ω
ω0
dω
ω
⇒
kB2
IR
t = −ln
ω
ω0
,
ω = ω0e−kB2
IR t, and finally τ = IR
kB2 ≈ 2.9s.
