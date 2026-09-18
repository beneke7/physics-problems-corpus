---
id: inpho-2023-a3
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2023-a3
solution_type: official
source_document: solution-document-inpho-2023-s
source_pdf: cache/phoxiv/inpho/2023_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2023_S.pdf."
---

3. [16 marks] Work in progress
One mole of an ideal monoatomic gas goes through a linear process from
A to B as shown in the pressure-volume (P-V ) diagram. The temperature
at A is TA = 227◦C. The process is such that, the temperature decreases
and the heat is continuously supplied to the gas. The ratio of the
specific heat at the constant pressure to that at the constant volume is
5/3. Obtain the expression for the maximum work (Wmax) the gas can
perform in such a process. Calculate Wmax.
P
V
A
B
Solution: The variation of P is linear with respect to V , hence it can be written as
P = −aV + b (3.1)
where a and b are positive constants. At A,
PAVA = RTA (3.2)
(−aVA + b)VA = R × 500 (3.3)
where TA = 500K. Using the ideal gas equation PV = RT
T =
PV
R
=
−aV 2 + bV
R
(3.4)
dT
dV
=
−2aV + b
R
(3.5)
In this process, V is increasing but the temperature is decreasing, hence
dT
dV
≤ 0 (3.6)
Using Eq. (3.5)
−2aV + b
R
≤ 0 (3.7)
=⇒ V ≥
b
2a
(3.8)
This is the lower bound on the volume. This means if we want work done to be maximum
Vmin = VA =
b
2a
(3.9)
Using the first law of thermodynamics dQ = dU + PdV ,
dQ =
R
γ − 1
dT + PdV (3.10)
where we use dU = CV dT and Eq.(3.2), Eq. (3.5), and γ = 5/3 in the above equation yields
dQ =
3R(−2aV + b)dV
2R
+ (−aV + b)dV (3.11)
dQ
dV
=

−4aV +
5b
2

(3.12)
In the process, heat is taken and volume is also increasing. hence
dQ
dV
≥ 0 (3.13)
−4aV +
5b
2
≥ 0 (3.14)
=⇒ V ≤
5b
8a
(3.15)
H B C 2 3
Page 5 INPhO 2023 Questions
This is the upper bound on the volume. This means if we want work done to be maximum
Vmax = VB =
5b
8a
(3.16)
To get maximum work, The gas must expand from VA to VB
Wmax =
Z VB
VA
PdV =
Z VB
VA
(−aV + b)dV (3.17)
=

−aV 2
2
+ bV
 5b/8a
b/2a
(3.18)
Substituting the limits, we get,
Wmax =
7
128
b2
a
(3.19)
Solving (−aVA + b)VA = 500R, we get b2
a = 500 × 4R. Substituting this in the above equation, we
get,
Wmax ≈ 909J (3.20)
H B C 2 3
Page 6 INPhO 2023 Questions Last four digits of Roll No.:
