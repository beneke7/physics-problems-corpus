---
id: inpho-2024-a5
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2024-a5
solution_type: official
source_document: solution-document-inpho-2024-s
source_pdf: cache/phoxiv/inpho/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2024_S.pdf."
---

5. Thermal Tussle
Consider a horizontal insulated cylindrical tube of very large length. Two identical insulated
pistons, each of mass M = 0.2 kg are ﬁtted within the tube separated by a length L0 = 1 m. The
space between the two pistons is ﬁlled with one mole of (ideal) helium gas, initially at temperature
T0 = 300K. The external pressure, everywhere outside the pistons and tube, is zero.
L0
Ideal gas
Piston
Initially, the pistons are held in place by an external mechanism. At time t = 0, the mechanism
is released and the pistons move without friction and the process is quasistatic initially. Assume
that the gas behaves ideally throughout. Let Cp and Cv be the speciﬁc heats of the gas at constant
pressure and volume respectively. Also, γ = Cp/Cv = 5/3.
(a) [6 marks] Determine the velocity (vp) of each piston in terms of the gas temperature T
and other relevant variables. At what temperature (Tc), is the process no longer quasistatic?
Calculate Tc.
Solution: Given the initial temperature of the system to be T0, the initial energy of
the system is CvT0. When the piston starts moving, from the work-energy theorem, the
energy of the system is
1
2
Mv2
1 +
1
2
Mv2
2 + CvT = CvT0 (5.1)
Also from conservation momentum, we have v2 = −v1 = v.
H B C S E
Page 18 INPhO 2024 Questions Last four digits of Roll No.:
From above equation, we get
Mv2
+ CvT = CvT0 (5.2)
v2
=
Cv
M
(T0 − T) (5.3)
v =
√
Cv
M
(T0 − T) (5.4)
For the process to be quasistatic and adiabatic the piston’s velocity cannot be greater
than rms velocity of the gas.
v < vrms (5.5)
√
Cv
M
(T0 − T) <
√
3RT
m
(5.6)
where m is molar mass of the gas. Solving the above equation, we get
T >
CvT0m
3RM + mCv
≈ 3K (5.7)
Below this temperature, the piston’s velocity exceeds rms velocity, which indicates that
the piston moves very rapidly. This is where the quasi-static limit will breaks down.
For the estimation purpose, we can also take the average velocity or the most probable
velocity and the corresponding limit would be 3.5K and 4.4K respectively.
(b) [4 marks] From here, we restrict our analysis only to the quasistatic regime of the process.
We deﬁne u = T/T0. Obtain the relation between u and t in the following form
t = f(u)
You may leave the answer in terms of a suitable integral involving L0,M and other variables.
Solution: Since the process adiabatic.
T1V γ−1
1 = T2V γ−1
2 (5.8)
Which implies
TLγ−1
= T0Lγ−1
0 (5.9)
To express the temperature as a function of time, Diﬀerentiating Eq. (5.8) w.r.t t, we get
Lγ−1 dT
dt
+ T(γ − 1)Lγ−2 dL
dt
= 0 (5.10)
From Eq. (5.8), we get
L =
(
T0L
(γ−1)
0
T
) 1
γ−1
(5.11)
Also
dL
dt
= 2v = 2
√
Cv
M
(T0 − T) (5.12)
Substituting Eq. (5.11) and Eq. (5.12) into Eq. (5.10), we get
T0L
(γ−1)
0
T
dT
dt
+ T(γ − 1)
(
T0L
(γ−1)
0
T
)(γ−2
γ−1
)
2
√
Cv
M
(T0 − T) = 0 (5.13)
H B C S E
Page 19 INPhO 2024 Questions
For Mono atomic gas γ = 5/3, hence above equation becomes
T0L
2/3
0
T
dT
dt
+ T
2
3
(
T0L
2/3
0
T
)−1/2
2
√
Cv
M
(T0 − T) = 0 (5.14)
Rearranging above equation, we get,
dt = −
1
B1
dT
T5/2(T0 − T)1/2
(5.15)
Where B1 =
2
√
2/3
√
NAk/M
L0T
3/2
0
Integrating above equation, we get
∫ t
0
dt = −
∫
1
B1
dT
T0
( T
T0
)5/2T2
0 (1 − T
T0
)1/2
(5.16)
Let u = T/T0, then above integral becomes
∫ t
0
dt = −
∫ u
u0
1
B1
du
u5/2T2
0 (1 − u)1/2
(5.17)
t = −
1
B1T2
0
∫ u
u0
du
u5/2(1 − u)1/2
(5.18)
(c) [4 marks] Qualitatively plot the rate of change of temperature (dT/dt) vs T. Mark any
signiﬁcant point(s) on the temperature axis in the plot.
Solution: Temperature decreases over time. From Eq. (5.15), it is evident that the
derivative of the temperature function is always negative. Additionally, at t = 0 and
t = 300 K, dT/dt = 0. The function exhibits an extremum at T = 250 K. These details
are illustrated in the ﬁgure below.
(d) [4 marks] At what time t does the temperature T of the gas reach 20K? What is the piston
velocity (vp) at this point?
Solution: The integration from Eq. (5.18) can be solved by substituting u = cos2 θ and
using boundary conditions as u = 1 for T = T0, we get
(
1 − u
u
)3/2
+ 3
(
1 − u
u
)1/2
−
3B1T2
0 t
2
= 0 (5.19)
Using above equation, for n = 1 moles and L0 = 1 m, the temperature reaches 20K after
0.232s.
From Eq. (5.4) The piston’s velocity at this point is 132.1m/s.
H B C S E
Page 20 INPhO 2024 Questions Last four digits of Roll No.:
