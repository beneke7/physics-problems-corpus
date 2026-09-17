---
id: solution-document-ipho-2015-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2015/T1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2015-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2015/T1_S.pdf."
---

Theoretical Task 1 (T-1) : Solutions 1 of 7
Particles from the Sun1
Photons from the surface of the Sun and neutrinos from its core can tell us about solar temperatures
and also confirm that the Sun shines because of nuclear reactions.
Throughout this problem, take the mass of the Sun to be M = 2.00 × 1030
kg, its radius, R =
7.00 × 108
m, its luminosity (radiation energy emitted per unit time), L = 3.85 × 1026
W, and the
Earth-Sun distance, d = 1.50 × 1011
m.
Note:
(i)
Z
xeax
dx =

x
a
−
1
a2

eax
+ constant
(ii)
Z
x2
eax
dx =

x2
a
−
2x
a2
+
2
a3

eax
+ constant
(iii)
Z
x3
eax
dx =

x3
a
−
3x2
a2
+
6x
a3
−
6
a4

eax
+ constant
A. Radiation from the Sun :
(A1) Assume that the Sun radiates like a perfect blackbody. Use this fact to calculate the temperature,
Ts , of the solar surface. [0.3]
Solution:
Stefan’s law: L = (4πR2
)(σT4
s )
Ts =

L
4πR2
σ
1/4
= 5.76 × 103
K
The spectrum of solar radiation can be approximated well by the Wien distribution law. Accordingly,
the solar energy incident on any surface on the Earth per unit time per unit frequency interval, u(ν),
is given by
u(ν) = A
R2
d2
2πh
c2
ν3
exp(−hν/kBTs),
where A is the area of the surface normal to the direction of the incident radiation.
Now, consider a solar cell which consists of a thin disc of semiconducting material of area, A, placed
perpendicular to the direction of the Sun’s rays.
(A2) Using the Wien approximation, express the total power, Pin, incident on the surface of the solar
cell, in terms of A, R , d , Ts and the fundamental constants c,h,kB. [0.3]
1
Amol Dighe (TIFR), Anwesh Mazumdar (HBCSE-TIFR) and Vijay A. Singh (ex-National Coordinator, Science
Olympiads) were the principal authors of this problem. The contributions of the Academic Committee, Academic De-
velopment Group and the International Board are gratefully acknowledged.Theoretical Task 1 (T-1) : Solutions 2 of 7
Solution:
Pin =
Z ∞
0
u(ν)dν =
Z ∞
0
A
R2
d2
2πh
c2
ν3
exp(−hν/kBTs)dν
Let x =
hν
kBTs
. Then, ν =
kBTs
h
x dν =
kBTs
h
dx.
Pin =
2πhAR2
c2d2
(kBTs)4
h4
Z ∞
0
x3
e−x
dx =
2πk4
B
c2h3
Ts
4
A
R2
d2
· 6 =
12πk4
B
c2h3
Ts
4
A
R2
d2
(A3) Express the number of photons, nγ(ν), per unit time per unit frequency interval incident on the
surface of the solar cell in terms of A, R , d , Ts ν and the fundamental constants c,h,kB. [0.2]
Solution:
nγ(ν) =
u(ν)
hν
= A
R2
d2
2π
c2
ν2
exp(−hν/kBTs)
The semiconducting material of the solar cell has a “band gap” of energy, Eg. We assume the follow-
ing model. Every photon of energy E ≥ Eg excites an electron across the band gap. This electron
contributes an energy, Eg , as the useful output energy, and any extra energy is dissipated as heat (not
converted to useful energy).
(A4) Define xg = hνg/kBTs where Eg = hνg. Express the useful output power of the cell, Pout, in
terms of xg, A, R , d , Ts and the fundamental constants c,h,kB. [1.0]
Solution:
The useful power output is the useful energy quantum per photon, Eg ≡ hνg, multiplied by
the number of photons with energy, E ≥ Eg.
Pout = hνg
Z ∞
νg
nγ(ν)dν
= hνg A
R2
d2
2π
c2
Z ∞
νg
ν2
exp(−hν/kBTs)dν
= kBTsxg A
R2
d2
2π
c2

kBTs
h
3 Z ∞
xg
x2
e−x
dx
=
2πk4
B
c2h3
Ts
4
A
R2
d2
xg(x2
g + 2xg + 2)e−xg
(A5) Express the efficiency, η, of this solar cell in terms of xg. [0.2]Theoretical Task 1 (T-1) : Solutions 3 of 7
Solution:
Efficiency η =
Pout
Pin
=
xg
6
(x2
g + 2xg + 2)e−xg
(A6) Make a qualitative sketch of η versus xg. The values at xg = 0 and xg → ∞ should be clearly
shown. What is the slope of η(xg) at xg = 0 and xg → ∞? [1.0]
Solution:
η =
1
6
(x3
g + 2x2
g + 2xg)e−xg
Put limiting values, η(0) = 0 η(∞) = 0.
Since the polynomial has all positive coefficients, it increases monotonically; the exponential
function decreases monotonically. Therefore, η has only one maximum.
dη
dxg
=
1
6
(−x3
g + x2
g + 2xg + 2)e−xg
dη
dxg xg=0
=
1
3
dη
dxg xg→∞
= 0
xg
η
(A7) Let x0 be the value of xg for which η is maximum. Obtain the cubic equation that gives x0.
Estimate the value of x0 within an accuracy of ±0.25. Hence calculate η(x0). [1.0]
Solution:
The maximum will be for
dη
dxg
=
1
6
(−x3
g + x2
g + 2xg + 2)e−xg
= 0
⇒ p(xg) ≡ x3
g − x2
g − 2xg − 2 = 0
A Numerical Solution by the Bisection Method:
Now,
p(0) = −2
p(1) = −4
p(2) = −2
p(3) = 10 ⇒ 2 < x0 < 3
p(2.5) = 2.375 ⇒ 2 < x0 < 2.5
p(2.25) = −0.171 ⇒ 2.25 < x0 < 2.5
The approximate value of xg where η is maximum is x0 = 2.27.Theoretical Task 1 (T-1) : Solutions 4 of 7
Alternative methods leading to the same result are acceptable.
η(2.27) = 0.457
(A8) The band gap of pure silicon is Eg = 1.11eV. Calculate the efficiency, ηSi, of a silicon solar cell
using this value. [0.2]
Solution:
xg =
1.11 × 1.60 × 10−19
1.38 × 10−23 × 5763
= 2.23
ηSi =
xg
6
(x2
g + 2xg + 2)e−xg
= 0.457
In the late nineteenth century, Kelvin and Helmholtz (KH) proposed a hypothesis to explain how the
Sun shines. They postulated that starting as a very large cloud of matter of mass, M , and negligible
density, the Sun has been shrinking continuously. The shining of the Sun would then be due to the
release of gravitational energy through this slow contraction.
(A9) Let us assume that the density of matter is uniform inside the Sun. Find the total gravitational
potential energy, Ω, of the Sun at present, in terms of G, M and R . [0.3]
Solution:
The total gravitational potential energy of the Sun: Ω = −
Z M
0
Gmdm
r
For constant density, ρ =
3M
4πR3
m =
4
3
πr3
ρ dm = 4πr2
ρdr
Ω = −
Z R
0
G

4
3
πr3
ρ

4πr2
ρ
 dr
r
= −
16π2
Gρ2
3
R5
5
= −
3
5
GM2
R
(A10) Estimate the maximum possible time τKH (in years), for which the Sun could have been shin-
ing, according to the KH hypothesis. Assume that the luminosity of the Sun has been constant
throughout this period. [0.5]
Solution:
τKH =
−Ω
L
τKH =
3GM2
5R L
= 1.88 × 107
years
The τKH calculated above does not match the age of the solar system estimated from studies of mete-
orites. This shows that the energy source of the Sun cannot be purely gravitational.Theoretical Task 1 (T-1) : Solutions 5 of 7
B. Neutrinos from the Sun:
In 1938, Hans Bethe proposed that nuclear fusion of hydrogen into helium in the core of the Sun is
the source of its energy. The net nuclear reaction is:
41
H −→ 4
He + 2e+
+ 2νe
The “electron neutrinos”, νe, produced in this reaction may be taken to be massless. They escape the
Sun and their detection on Earth confirms the occurrence of nuclear reactions inside the Sun. Energy
carried away by the neutrinos can be neglected in this problem.
(B1) Calculate the flux density, Φν, of the number of neutrinos arriving at the Earth, in units of
m−2
s−1
. The energy released in the above reaction is ∆E = 4.0 × 10−12
J. Assume that the
energy radiated by the Sun is almost entirely due to this reaction. [0.6]
Solution:
4.0 × 10−12
J ↔ 2ν
⇒ Φν =
L
4πd2
δE
× 2 =
3.85 × 1026
4π × (1.50 × 1011)2 × 4.0 × 10−12
× 2 = 6.8 × 1014
m−2
s−1
.
Travelling from the core of the Sun to the Earth, some of the electron neutrinos, νe, are converted to
other types of neutrinos, νx. The efficiency of the detector for detecting νx is 1/6th of its efficiency
for detecting νe. If there is no neutrino conversion, we expect to detect an average of N1 neutrinos in
a year. However, due to the conversion, an average of N2 neutrinos (νe and νx combined) are actually
detected per year.
(B2) In terms of N1 and N2, calculate what fraction, f, of νe is converted to νx. [0.4]
Solution:
N1 = N0
Ne = N0(1 − f)
Nx = N0f/6
N2 = Ne + Nx
OR
(1 − f)N1 +
f
6
N1 = N2
⇒ f =
6
5

1 −
N2
N1
Theoretical Task 1 (T-1) : Solutions 6 of 7
Inordertodetectneutrinos, largedetectorsfilledwithwaterareconstructed. Althoughtheinteractions
of neutrinos with matter are very rare, occasionally they knock out electrons from water molecules in
the detector. These energetic electrons move through water at high speeds, emitting electromagnetic
radiation in the process. As long as the speed of such an electron is greater than the speed of light
in water (refractive index, n), this radiation, called Cherenkov radiation, is emitted in the shape of a
cone.
(B3) Assume that an electron knocked out by a neutrino loses energy at a constant rate of α per
unit time, while it travels through water. If this electron emits Cherenkov radiation for a time
∆t, determine the energy imparted to this electron (Eimparted) by the neutrino, in terms of
α,∆t,n,me,c. (Assume the electron to be at rest before its interaction with the neutrino.) [2.0]
Solution:
When the electron stops emitting Cherenkov radiation, its speed has reduced to vstop = c/n.
Its total energy at this time is
Estop =
mec2
q
1 − v2
stop/c2
=
nmec2
√
n2 − 1
The energy of the electron when it was knocked out is
Estart = α∆t +
nmec2
√
n2 − 1
Before interacting, the energy of the electron was equal to mec2
.
Thus, the energy imparted by the neutrino is
Eimparted = Estart − mec2
= α∆t +

n
√
n2 − 1
− 1

mec2
The fusion of H into He inside the Sun takes place in several steps. Nucleus of 7
Be (rest mass, mBe)
is produced in one of these intermediate steps. Subsequently, it can absorb an electron, producing a
7
Li nucleus (rest mass mLi < mBe) and emitting a νe. The corresponding nuclear reaction is:
7
Be + e−
−→ 7
Li + νe .
When a Be nucleus (mBe = 11.65×10−27
kg) is at rest and absorbs an electron also at rest, the emitted
neutrino has energy Eν = 1.44 × 10−13
J. However, the Be nuclei are in random thermal motion due
to the temperature Tc at the core of the Sun, and act as moving neutrino sources. As a result, the
energy of emitted neutrinos fluctuates with a root mean square value ∆Erms.
(B4) If ∆Erms = 5.54 × 10−17
J, calculate the rms speed of the Be nuclei, VBe and hence estimate Tc.
(Hint: ∆Erms depends on the rms value of the component of velocity along the line of sight.)
[2.0]Theoretical Task 1 (T-1) : Solutions 7 of 7
Solution:
Moving 7
Be nuclei give rise to Doppler effect for neutrinos. Since the fractional change
in energy (∆Erms/Eν ∼ 10−4
) is small, the Doppler shift may be considered in the non-
relativistic limit (a relativistic treatment gives almost same answer). Taking the line of sight
along the z-direction,
∆Erms
Eν
=
vz,rms
c
= 3.85 × 10−4
=
1
√
3
VBe
c
⇒ VBe =
√
3 × 3.85 × 10−4
× 3.00 × 108
ms−1
= 2.01 × 105
ms−1
.
The average temperature is obtained by equating the average kinetic energy to the thermal
energy.
1
2
mBeV 2
Be =
3
2
kBTc
⇒ Tc = 1.13 × 107
K
