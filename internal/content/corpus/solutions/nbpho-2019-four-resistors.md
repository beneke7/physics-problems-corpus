---
id: nbpho-2019-four-resistors
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2019-four-resistors
solution_type: official
source_document: solution-document-nbpho-2019-s
source_pdf: cache/phoxiv/nbpho/2019_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2019_S.pdf."
---

8. FOUR RESISTORS (10 points) — Jaan Kalda
and Eero Uustalu.
i) (2 points) If we were to measure the res-
istance of each of the resistors separately,
the reading would be something like 4.67kΩ,
and the uncertainty would be four last di-
gits, 40Ω, plus 1% of the reading, 47Ω, all
together δr = 87Ω. This can be a system-
atic error which means that different meas-
urement errors can be strongly correlated so
thatforthesumrA+rB +rC +rD,weneedto
add the uncertainties (as opposed to adding
squared uncertainties in the case of uncor-
related errors). Therefore, the uncertainty of
r̄ = (rA +rB +rC +rD)/4 would be also 87Ω.
However, we can also measure a series
connection of any number of these resistors.
It can be easily seen that the smallest un-
certainty will be if we connect all the four
resistors in series, in which case we obtain
rA + rB + rC + rD = 18.68kΩ with the un-
certainty of 187 + 40 = 227Ω; hence, r̄ =
4.67kΩ ± 57Ω.
ii) (2 points) The problem with the given
resistors is that the ohmmeter cannot oper-
ate in the more precise 4kΩ range. How-
ever, if we connect two resistors in parallel,
weʼll measure directly their harmonic aver-
age, and the ohmmeter will operate in the
4kΩ range. Note that we shouldnʼt connect
more than two resistors as that would reduce
the reading without changing the range and
hence, increase the relative error. So, we can
obtain rArB/(rA + rB) = rCrD/(rC + rD) =
2.337kΩ±27.4Ω,hence⟨r⟩ = 4.674kΩ±55Ω
iii) (1 point) The precision of direct meas-
urments is not sufficient for distinguishing,
which resistors have bigger resistance, and
which have smaller. So, we need to build
a bridge connection by connecting. For in-
stance, we can connect the minus of the
voltage source to the resistor A, connect A to
B, and B — to the plus of the voltage source;
weʼll do the same with C and D, and meas-
ure voltage between the junction P between
AandB andjunctionQbetweenC andD. In
order to get the highest precision, weʼll use
the highest possible voltage of U = 30V. If
we connect Q to the minus of the voltmeter
and P to the plus of the voltmeter, we might
get the reading V1 = 7.5 ± 0.5mV. If we
switch the order of the resistors A and B, the
reading becomes negative: V ′
1 = −17.5 ±
0.5mV: the potential of the junction P be-
came smaller. In the first case, the junctionʼs
potential was UrA/(rA + rB), in the second
case — UrB/(rA +rB). So we conclude rA >
rB. Repeating this procedure with different
connections, weʼll find rA > rC > rD > rB.
iv) (5 points) With the data of the previous
task we have
rA − rB
rA + rB
=
V1 − V ′
1
U
.
Similarly we can have
rA − rC
rA + rC
=
V2 − V ′
2
U
with V2 = 7.5 ± 0.5mV and V ′
2 = −0.8 ±
0.4mV; also
rA − rD
rA + rD
=
V3 − V ′
3
U
with V3 = 17.5 ± 0.5mV and V ′
3 = −0.8 ±
0.4mV. With a very good approximation
(negligible relative error), we can use rA +
rB = rA +rC = rA +rD = 2r̄ so that with the
given data we obtain:
rA−rB
2r̄ = (8.34 ± 0.3) · 10−4
,
rA−rC
2r̄ = (2.78 ± 0.3) · 10−4
,
rA−rD
2r̄ = (6.10 ± 0.3) · 10−4
.
If we add up all these equalities, we obtain
2(rA − r̄) = r̄ · (17.2 ± 0.9) · 10−4
. With
r̄ = 4.67kΩ (which has negligbly small rel-
ative error), we end up with
rA − r̄ = (4.02 ± 0.21)Ω.
In a similar way, we can find
rB − r̄ = (−3.78 ± 0.21)Ω,
rC − r̄ = (1.43 ± 0.21)Ω,
and
rD − r̄ = (−1.68 ± 0.21)Ω.
