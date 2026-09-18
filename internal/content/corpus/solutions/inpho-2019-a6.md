---
id: inpho-2019-a6
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2019-a6
solution_type: official
source_document: solution-document-inpho-2019-s
source_pdf: cache/phoxiv/inpho/2019_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2019_S.pdf."
---

6. Consider n moles of a monoatomic non-ideal (realistic) gas. Its equation of state may be described
by the van der Waal’s equation
P +
an2
V 2
!
V
n
− b

= RT
where a and b are positive constants and other symbols have their usual meanings. The internal
energy change of a realistic gas can be given by
dU = CV dT +

T

dP
dT

V
− P

dV
As indicated in the above expression, the derivative of pressure is taken at constant volume.
We take one mole of the gas (n = 1) through a Diesel cycle (ABCDA) as shown in the following
P-V diagram (diagram is not to scale). During the whole cycle assume that the molar heat
capacity at constant volume (CV ) remains constant at 3R/2. Path AB and CD are reversible
adiabats.
V
P
A
D
B
C PB = PC
VB VA = VD VC
(a) [21 / 2] Obtain the temperature at B (TB) in terms of temperature at A (TA), VA,VB and constants
only.
TB =
Solution:
dU = CV dT +

RT
V − b
− P

dV
AB and CD are reversible adiabats, hence entropy change during these processes are
zero.
H B C 1 9
INPhO 2019 Page 14 Questions & Answers Last four digits of Roll No.:
∆SAB = ∆SCD =
Z B
A
dQ
T
=
Z D
C
dQ
T
= 0 (6.1)
Z B
A
dQ
T
=
Z
CV
T
dT +
Z
R
V − b
dV = 0 (6.2)
CV ln
TB
TA
= −Rln

VB − b
VA − b

(6.3)
TB = TA

VB − b
VA − b
 −R/CV
= TA

VB − b
VA − b
 −2/3
(6.4)
(b) [11 / 2] Let temperature at A to be TA =100.00K, VA = 8.00l, VB = 1.00l, VC = 2.00l, a = 1.355
l2·atm/mol2, and b = 0.0313l/mol. Calculate the highest temperature reached during the
whole cycle.
Highest temperature =
Solution: Highest temperature during cycle is at TC.
TB = 407.5K (6.5)
which gives, from van der Waal equation
PB = 33.18atm = PC (6.6)
⇒ TC = 803.76K ≈ 804K (6.7)
Different value of TC (within a range) obtained due to reasonable roundoff in previous
step(s) will be credited.
(c) [3] Calculate the efficiency η of the cycle.
Value of η =
Solution:
dQin = dQBC = dU + PBdV (6.8)
= CV dT +
RT
V − b
dV (6.9)
= CV dT +

P +
a
V 2

dV (6.10)
Qin = CV (TC − TB) + PB(VC − VB) −
a
V
VC
VB
(6.11)
Qout = QDA = CV (TA − TD) (6.12)
η = 1 −
Qout
Qin
= 67.7% ≈ 68% (6.13)
Different value of η (within a range) obtained due to reasonable roundoff in previous
step(s) will be credited.
H B C 1 9
INPhO 2019 Page 15 Questions & Answers
(d) [7] Draw the corresponding T-S (entropy) and V -T diagram for the Diesel cycle. Wherever
possible, mention the numerical values of T,V, and S on the diagrams.
T
S
V
T
Solution:
∆SBC =
Z
dQ
dT
=
Z
CV dT
T
+
Z
R
V − b
dV (6.14)
= CV ln
TC
TB
+ Rln
VC − b
VB − b
(6.15)
= 1.73R = ∆SDA (6.16)
H B C 1 9
INPhO 2019 Page 16 Questions & Answers Last four digits of Roll No.:
A
B
C
D
100
316
803
408
1.73R
T (K)
S (J/K)
Solution:
A
B
C
D
100
8
408
1
803
2
316
V (l)
T (K)
Detailed answers can be found on page numbers:
