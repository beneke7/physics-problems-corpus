---
id: nbpho-2017-zener
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2017-zener
solution_type: official
source_document: solution-document-nbpho-2017-s
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2017_S.pdf."
---

7. ZENER
i) The diode limits the maximum amount
of voltage that can be applied to the inductor.
Whenever the current from the current source
is higher than the current through the inductor,
the voltage V1 is applied to the inductor, and
when the current current source is lower than
the current through the inductor a voltage −V2
is applied to the inductor. If the largest voltage
V1 would be applied to the inductor for one
period T = 2π
ω
, then the change in the current
through the inductor is
δI =
V1
L
T =
2πV1
Lω
.
Because we had the relation LωI0 ≫V1, we get
that δI ≪ I0. The current through the inductor
changes negligibly little compared to I0 dur-
ing one period and can be considered constant.
The equilibrium current can be found by ﬁnding
when the average voltage is zero. During one
period let T1 be the time when 〈I〉 > I0 cosωt,
and let T2 be the time when 〈I〉< I0 cosωt. We
get
T1 =
2
ω
arccos
(
〈I〉
I0
)
.
The average voltage is zero when V1T1 = V2T2
and by using T1 +T2 = T we have
V1T1 =V2(T −T1) =⇒ T1 =
V2
V1 +V2
T =⇒
2
ω
arccos
(
〈I〉
I0
)
=
V2
(V1 +V2)
2π
ω
=⇒
〈I〉= I0 cos
(
πV2
V1 +V2
)
.
ii) The peak-to-peak amplitude of the current
ﬂuctuations can be calculated from dI
dt = U
L
∆I =
V2T2
L
=
V1T1
L
=
2πV1V2
ωL(V1 +V2)
.
