---
id: inpho-2022-a3
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2022-a3
solution_type: official
source_document: solution-document-inpho-2022-s
source_pdf: cache/phoxiv/inpho/2022_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2022_S.pdf."
---

3. Consider an air ﬁlled spherical balloon comprised of elastic material of surface tension γ =
500kg/s2. The pressure outside the balloon is the atmospheric pressure (Patm = 101kPa) and the
density of air outside is ρatm = 1.22kg/m3.
The balloon starts deﬂating slowly. Assume that the average velocity of air inside the balloon is
negligible, and air leaves the balloon in a streamline fashion. Consider γ to be constant throughout,
and the air to be incompressible.
(a) [8 marks] Write an expression for the time t required to deﬂate the balloon through a small
opening of cross-sectional area A from an initial radius R0 to a ﬁnal radius R.
(b) [1 marks] Obtain the value of this time for A = 1×10−5 m2, R0 = 0.15m, and R = 0.05m.
Solution:
Pressure of air inside the balloon of radius r and given surface tension γ is
P = Patm +
4γ
r
(3.1)
A
v
1 2
R
Consider the schematic diagram of deﬂating the balloon. Just inside the balloon, at point (1),
gas can be treated stationary. Outside, at point (2), it can be treated ﬂowing out with speed
v. Then by Bernoulli’s equation
P1 = P2 +
ρv2
2
(3.2)
Outside pressure and density are Patm and ρatm respectively. Also, the inside pressure is given
by the Eq. (3.1). Thus
Patm +
4γ
r
= Patm +
ρatmv2
2
(3.3)
⇒ v =
√
8γ
ρatmr
(3.4)
Volume of air ﬂowing through hole of area A per sec at Patm is
dV
dt
= Av (3.5)
d
dt
(
4πr3
3
)
= Av (3.6)
4πr2 dr
dt
= Av (3.7)
We use Eq. (3.4) in the above equation, which yields
r5/2
dr =
A
4π
√
8γ
ρ
dt (3.8)
Integrating from R0 to R1
t =
4π
7A
√
ρatm
2γ
[
R
7/2
0 − R
7/2
1
]
(3.9)
(3.10)
In Eq. (3.1) if the extra pressure taken as 2γ/R then
t =
4π
7A
√
ρatm
γ
[
R
7/2
0 − R
7/2
1
]
(3.11)
For the given values, Eq. (3.9) gives t = 8.02s and Eq. (3.10) yields 11.22s. Both Eqs. (3.9)
and (3.10) and accordingly the calculated values are considered correct.
Page 8 Code 65 Questions Last six digits of Roll No.:
Page 9 Code 65 Questions
