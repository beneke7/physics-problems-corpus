---
id: inpho-2025-a2
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2025-a2
solution_type: official
source_document: solution-document-inpho-2025-s
source_pdf: cache/phoxiv/inpho/2025_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2025_S.pdf."
---

A2
ωM sin2
(ωMt)

(2.4)
The Gearbox is massless, and there is no loss of power. Thus,
τMωM = τGωG ⇒ τG = XτM (2.5)
For generator: Gearbox drives the motor with torque τG. The current IG and and the
angular speed ωG are determined through the following equations.
• The circuit equation for generator with speed ωG is
ebG − IGR = 0 (2.6)
where ϵbG = NABωG sin(ωGt) is the induced back emf. Thus, the current IG is
IG =
1
R
NBAωG sin(ωGt) (2.7)
• The magnetic torque on the coils carrying current IG is
τG = NIGBAsin(ωGt)
=
1
R
N2
B2
A2
ωG sin2
(ωGt) (2.8)
Since there is no dissipation in the gearbox, from Eq. (2.5), we get
⟨τG⟩ = ⟨τM⟩X (2.9)
From Eq. (2.8)
⟨τG⟩ =
N2B2A2ωG
2R
(2.10)
Since sin2
(ωt) = 1/2 over one complete cycle, and from Eq. (2.4)
⟨τM⟩ =
2VMNBA
πr
−
N2B2A2ωM
2r
(2.11)
Since sin2
(ωt) = 1/2, and ⟨sin(ωt)⟩ = 2/π over one complete cycle.
Using Eq. (2.9), we obtain
ωG
R
=
(4VM/πNBA)X
r
−
X2ωG
r
(2.12)
ωG

1
R
+
X2
r

=

4VM
πNBA

X
r
(2.13)
ωG =

4VM
πNBA

1
r
XR + X
 (2.14)
To maximize ωG, minimize the denominator r/RX + X. Diﬀerentiating:
d
dX
 r
RX
+ X

= 0 (2.15)
−
r
RX2
+ 1 = 0 (2.16)
⇒ X =
r
r
R
(2.17)
H B C S E
Page 6 INPhO 2025 Questions Last four digits of Roll No.:
(b) [3 marks] Derive the expression for the generator output power ⟨PG⟩ in terms of X, R, r,
and the given parameters. For ﬁxed values of r and R, determine the expression of X for
which ⟨PG⟩ is maximum.
Solution: The generator output power is
⟨PG⟩ =
⟨ϵ2
G⟩
R
=
N2B2A2ω2
G
2R
⟨PG⟩ =
8V 2
M
π2R r
XR + X
2
To maximize ⟨PG⟩, diﬀerentiate with respect to X and solve for X
X =
r
r
R
(2.18)
(c) [5 marks] For ﬁxed values of r and R, determine the condition on X for which the eﬃciency
η is maximum, where
η =
⟨PG⟩
⟨PM⟩
.
Calculate this maximum value of η.
Solution: The motor input power is:
⟨PM⟩ = ⟨VMIM⟩ (2.19)
=


VM
r
(VM − NBAωM sin(ωMt))


(2.20)
=
VM
r

VM −
2
π
NBAXωG

(2.21)
=
V 2
M
r
1 −

8
π2

1
r
X2R
+ 1

!
(2.22)
and
⟨PG⟩ =
8V 2
M
π2R r
XR + X
2 (2.23)
The eﬃciency is given by:
η =
⟨PG⟩
⟨PM⟩
(2.24)
Substituting the expressions for ⟨PG⟩ and ⟨PM⟩, maximize η with respect to X, we get
Xmax ≈ 1.52
r
r
R
(2.25)
At this X, eﬃciency η is maximum. The maximum value of η can be calculated by
substituting value Xmax in η.
ηmax ≈ 0.4 (2.26)
Page 7 INPhO 2025 Questions
