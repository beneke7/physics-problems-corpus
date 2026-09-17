---
id: solution-document-inpho-2020-s
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2020_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [inpho-2020-a1, inpho-2020-a3, inpho-2020-a4-7, inpho-2020-a5-8]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/inpho/2020_S.pdf."
---

H B C 2 0
Solutions of Indian National Physics Olympiad – 2020
Date: 02 February 2020 Roll Number: 2 0 0 0 - 0 0 0 0 - 0 0 0 0
Time : 09:00-12:00 (3 hours) Maximum Marks: 80
Extra sheets attached : 0 INO Centre (e.g. Ranchi)
(Do not write below this line)
==================================================
Instructions
1. This booklet consists of 16 pages (excluding this page) and total of 5 questions.
2. This booklet is divided in two parts: Questions with Summary Answer Sheet and Detailed
Answer Sheet. Write roll number at the top wherever asked.
3. The final answer to each sub-question should be neatly written in the box provided below
each sub-question in the Questions & Summary Answer Sheet.
4. You are also required to show your detailed work for each question in a reasonably neat and coherent
way in the Detailed Answer Sheet. You must write the relevant Question Number(s) on each of
these pages.
5. Marks will be awarded on the basis of what you write on both the Summary Answer Sheet and the
Detailed Answer Sheet. Simple short answers and plots may be directly entered in the Summary
Answer Sheet. Marks may be deducted for absence of detailed work in questions involving longer
calculations. Strike out any rough work that you do not want to be considered for evaluation.
6. Adequate space has been provided in the answersheet for you to write/calculate your answers. In
case you need extra space to write, you may request additional blank sheets (maximum two) from the
invigilator. Write your roll number on the extra sheets and get them attached to your answersheet and
indicate number of extra sheets attached at the top of this page.
7. Non-programmable scientific calculators are allowed. Mobile phones cannot be used as calculators.
8. Use blue or black pen to write answers. Pencil may be used for diagrams/graphs/sketches.
9. This entire booklet must be returned at the end of the examination.
Table of Constants
Speed of light in vacuum c 3.00×108 m·s−1
Planck’s constant h 6.63×10−34 J·s
– h h/2π
Universal constant of Gravitation G 6.67×10−11 N·m2·kg
−2
Magnitude of electron charge e 1.60×10−19 C
Rest mass of electron me 9.11×10−31 kg
Value of 1/4π0 9.00×109 N·m2·C−2
Avogadro’s number NA 6.022 ×1023 mol−1
Acceleration due to gravity g 9.81 m·s−2
Universal Gas Constant R 8.31 J· K−1·mol−1
R 0.0821 l·atm·mol−1·K−1
Permeability constant µ0 4π ×10−7 H·m−1
Question Marks Score
1 13
2 12
3 15
4 20
5 20
Total 80
HOMI BHABHA CENTRE FOR SCIENCE EDUCATION
Tata Institute of Fundamental Research
V. N. Purav Marg, Mankhurd, Mumbai, 400 088H B C 2 0
INPhO 2020 Page 1 Questions & Summary Answers
Please note that alternate/equivalent methods and different way of expressing final
solutions may exist.
1. A certain gas obeys the equation of state U(S,V ,N) = aS7/V 4N2 , where a is a dimensioned
constant. Here U represents the internal energy of the gas, S the entropy, V the volume and N
the fixed number of particles of the system.
(a) [3] Let such a gas be filled in a box of volume V and the internal energy of the system be U. A
partition is placed to divide the box into two equal parts, each having volume V /2. For each
part, the internal energy is now αU and the dimensioned constant be βa. Obtain α and β.
α = β =
Solution: An extensive parameter of the system gets halved if the size of the system is
halved, while an intensive parameter remains unchanged. The internal energy and the
entropy, both are extensive parameters. Thus α = 1/2, β = 1.
(b) [2] The temperature T can be expressed in terms of the derivative of internal energy as
T =

dU
dS

V ,N
where the subscripts indicate that the differentiation has been carried out keeping V and N
constant. In a similar way, express pressure P in terms of a derivative of the internal energy.
P =
Solution:
P = −

dU
dV

S,N
(c) [1] Find the equation of state of the given system relating P, T , and V .
P =
Solution: From the definition of temperature,
T =
7aS6
N2V 4
From part (b)
P =
4aS7
V 5N2H B C 2 0
INPhO 2020 Page 2 Questions & Summary Answers Last four digits of Roll No.:
Eliminating S yields
P = C
T7/6
V 1/3
where C =
4N1/3
77/6a1/6
(d) [7] One mole of this gas executes a Carnot cycle
ABCDA between reservoirs at temperatures T1 and
T2 (T1 > T2). Obtain the heat change in the pro-
cess AB (QAB) and work done by the system in
the processes AB and BC (WAB,WBC) of the cycle.
Express your answers only in terms of temperatures
T1,T2, volumes VA,VB, and the other constants.
P
V
A
B
C
D
VA VB
QAB =
WAB =
WBC =
Solution:
S =
7
4
PV
T
, U =
PV
4
Leg AB: A → B (isothermal)⇒ T1 = constant
QAB = T1
Z B
A
dS (1.1)
=
7
4
(PBVB −PAVA) (1.2)H B C 2 0
INPhO 2020 Page 3 Questions & Summary Answers
Using equation of state,
QAB =
7C
4

V
2
3
B −V
2
3
A

T
7
6
1
WAB =
Z B
A
PdV = c
Z B
A
V −1/3
T7/6
1 dV (1.3)
WAB =
3C
2
T7/6
1

V
2
3
B −V
2
3
A

Leg BC is isentropic/adiabatic ⇒ Q = 0 or S = constant. From first law,
WBC = −∆U =
aS7
N2
"
1
V 4
B
−
1
V 4
C
#
(1.4)
=
a
N2
"
S7
V 4
B
−
S7
V 4
C
#
(1.5)
Also, S = 7C
4 V 2/3T1/6
WBC =
a
N2

7C
4
7 
V
2
3
B T
7
6
1 −V
2
3
C T
7
6
2

(1.6)
WBC =
a
N2

7C
4
7
V
2
3
B T
1
6
1 [T1 −T2]
Detailed answers can be found on page numbers:
2. [12] An insulating uniformly charged cylindrical shell
of radius a lies with its axis along the z axis. The
shell’s moment of inertia per unit length about the
z axis and the surface charge density are I and σ
respectively. The cylinder is placed in an external
uniform magnetic field Bexẑ, and is initially at rest.
Starting at t = 0 the external magnetic field is
slowly reduced to zero. What is the final angular
velocity ω of the cylinder?
ω =
Detailed answers can be found on page numbers:
Solution: As the magnetic field drops, its time derivative results in an induced electric field,H B C 2 0
INPhO 2020 Page 4 Questions & Summary Answers Last four digits of Roll No.:
in azimuthal direction.
Eφ(r) = −
rḂz
2
(2.1)
This field acts on the charged cylindrical shell to produce azimuthal torque (per unit length).
τφ = aEφ(a)2πaσ (2.2)
τφ = I
dω
dt
(2.3)
dω = −
σπa3
I
dBz (2.4)
ω = −
σπa3
I
Z Bf
Bi
dBz (2.5)
=
σπa3
I
(Bi −Bf) (2.6)
Bi = Bex and Bf is the non-zero magnetic field produced by the rotating charged cylinder.
For the rotating cylinder, compare with solenoid,the magnetic field will be along z axis and
equal to
~ Bf = µ0niẑ (2.7)
= µ0jφẑ (2.8)
where jφ = aσω is azimuthal current per unit length. Thus
~ Bf = µ0aσωẑ
ω =
σπa3
I
(Bex −µ0aσω) (2.9)
ω =
σπa3
I
1 +
µ0σ2a4π
I
!−1
Bex (2.10)
3. Consider the Bohr model of the hydrogen atom. Let me and e be the mass and magnitude of the
charge of the electron respectively. Let a0 be the ground state radius (Bohr radius).
(a) [1] Obtain an expression for the ionisation energy IH of the ground state of the hydrogen atom
in terms of a0 and constants.
IH =H B C 2 0
INPhO 2020 Page 5 Questions & Summary Answers
Solution: Centripetal acceleration is given by Coulomb force.
mev2
a0
=
Ke2
a2
0
; K =
1
4π0
; mevr = – h (3.1)
a0 =
– h2
Kmee2
(3.2)
Total energy =
mev2
2
−
Ke2
a0
= −
Ke2
2a0
(3.3)
IH =
Ke2
2a0
(3.4)
(b) [2] Consider a singly ionised helium atom He+
. Obtain the ground state ionisation energy IHe+
of He+
in terms of IH.
IHe+ =
Solution:
mev2
r
=
2Ke2
r2
and mevr = – h (3.5)
r =
– h2
2Kme2
=
a0
2
(3.6)
Total Energy (T.E.) =
1
2
mev2
−
2Ke2
r
= −
Ke2
r
=
2Ke2
a0
= −4IH (3.7)
IHe+ = 4IH (3.8)
(c) [1] Now consider a two electron system with arbitrary atomic number Z. Use the Bohr model
to obtain the ground state radius (r(Z)) in terms of a0 and Z. Assume the two electrons
are in the same circular orbit and as far apart as possible.
r(Z) =
Solution:
mev2
r
=
KZe2
r2
−
Ke2
(2r)2
and mevr = – h (3.9)
mev2
r = Ke2

Z −
1
4

and mev2
r =
– h2
mer
(3.10)
r =
– h2
Kmee2

Z − 1
4
 =
a0

Z − 1
4
 (3.11)H B C 2 0
INPhO 2020 Page 6 Questions & Summary Answers Last four digits of Roll No.:
(d) [3] Derive an expression for the first ionisation energy Ith
Z for two electron system with arbitrary
Z in terms of Z and IH.
IZ =
Solution:
Kinetic Energy (K.E.) = mev2
=
Ke2

Z − 1
4

r
(3.12)
=
Ke2

Z − 1
4
2
a0
(3.13)
= 2

Z −
1
4
2
IH (3.14)
Potential Energy (P.E.) = −
2KZe2
r
+
Ke2
2r
(3.15)
=
−2Ke2
r

Z −
1
4

(3.16)
=
−2Ke2
a0

Z −
1
4
2
(3.17)
= −4

Z −
1
4
2
IH (3.18)
(T.E.)i = −2

Z −
1
4
2
IH (3.19)
(T.E.)f = −Z2
IH (3.20)
Ith
Z = (T.E)f − (T.E)i = 2

Z −
1
4
2
IH −Z2
IH (3.21)
Ith
Z =

Z2
−Z +
1
8

IH (3.22)
(e) [8] The table below contains the experimental data of Iexpt
Z (in units of Rydberg where 1 Ryd =
13.6 eV) versus Z for various two-electron systems.
Z Iexpt
Z
H− 1 0.055
He 2 1.81
Li+ 3 5.56
Be++ 4 11.32
B3+ 5 19.07
C4+ 6 28.83
N5+ 7 40.60
O6+ 8 54.37
F7+ 9 70.15
Experimental values were not found to be equal to the theoretical predictions. This difference
arises mainly from non-inclusion of Pauli’s principle in the theoretical derivation of part (d).
It was suggested that if the value of Z was reduced by some fixed amount α (Z∗ = Z −α)H B C 2 0
INPhO 2020 Page 7 Questions & Summary Answers
in the final expression of Ith
Z obtained in part (d), then Ith
Z∗ ≈ Iexpt
Z . Draw a suitable linear
plot and from the graph find α. Two graph papers are provided with this booklet in case
you make a mistake.
α =
Solution:
∆IZ = Ith
Z −Iexpt
Z = Ith
Z −Ith
Z∗ =

Z2
−Z +
1
8

−

(Z −α)2
− (Z −α) +
1
8

IH
(3.23)
∆IZ =
h
−α2
+2Zα−α
i
IH (3.24)
Z (Iexpt
Z ) Ith
Z (Ith
Z −Iexpt
Z )
H−
1 0.055 0.125 0.07
He 2 1.81 2.13 0.32
Li+
3 5.56 6.13 0.57
Be++
4 11.32 12.13 0.81
B3+
5 19.07 20.13 1.06
C4+
6 28.83 30.13 1.30
N5+
7 40.60 42.13 1.53
O6+
8 54.37 56.13 1.76
F7+
9 70.15 72.13 1.98
A plot of ∆IZ vs Z is a linear graph.
Slope of the graph =2α = 0.24
α = 0.12
One can also linearize in the following way:
Iexpt
Z = Ith
Z∗ =

Z −α−
1
2
2
−
1
8
(3.25)
r
Iexpt
Z +
1
8
= Z −α−
1
2
(3.26)
Plot of
q
Iexpt
Z + 1
8 vs Z is a linear graph. This method gives α = 0.10. Both methods
are acceptable.
Accepted range of α is : 0.10 ≤ α ≤ 0.14.
Graph is on the last page of this booklet.
Detailed answers can be found on page numbers:H B C 2 0
INPhO 2020 Page 8 Questions & Summary Answers Last four digits of Roll No.:
4. A sound source S is performing uniform circular motion with time period T. It is continuously
emitting sound of a fixed frequency f0. Two detectors 1 and 2 are placed somewhere in the same
plane as the circular trajectory of the source. The frequency f, of the sound received by the two
detectors is plotted as a function of time t as shown below (the clocks of the two detectors are
synchronized).
0 10 20 30 40 50 60
800
1300
t (s)
f (Hz)
1
2
Take the speed of sound in the medium to be 330m/s.
(a) [2] Determine the time period T of the source.
T =
Solution: Note the time at the peak frequencies of any of the detectors. For detector 1,
first peak is at t = 16s and the second peak is at t = 40s. Hence the time period of the
source T =24s.
(b) [6] The figure below shows the circular trajectory of the source S. Qualitatively mark the
positions of both the detectors by indicating 1 and 2. Here O denotes the centre of the
trajectory. You must provide detailed justification of your answer in the detailed answer
sheet.H B C 2 0
INPhO 2020 Page 9 Questions & Summary Answers
O
•
• S
Solution: Couple of things can be easily seen from the graphs:
Time period of the source T =24s.
Time difference between the maximum and minimum frequencies detected by detector 1
= 9s.
Time difference between the maximum and minimum frequencies detected by detector 2
= 9s.
Time difference between the maximum frequencies detected by detector 1 and 2 = 4s.
Maximum frequency detected by 1 = 1300Hz.
Minimum frequency detected by 1 = 800Hz.
Resolution of the graph is not enough to give the maximum and minimum frequencies
detected by the detector 2. Let the source S is moving in the circle of radius R. There
are four possibilities:
1. Both detectors are outside the circle.
2. Both detectors are inside the circle.
3. One detector is inside and other is outside the circle.
4. One detector is either inside or outside the circle, and other detector is at R.
S v
D
φ
When source is approaching the stationary detector D is at an angle φ, the frequency
detected by D is
f =
f0
1− v
c cosφ
Here f0 is the frequency emitted by the source, and c is the speed of the sound. If we
consider fourth possibility, we should have observed a sharp change in the plot when
source is crossing the detector. Hence, we rule out this case.
When the detector Dout is outside the circle (see figure below):H B C 2 0
INPhO 2020 Page 10 Questions & Summary Answers Last four digits of Roll No.:
R
O
S
Dout
v
φo
Do
fout
=
f0
1− v
c cosφo
For maximum and minimum frequency, cosφ = ±1
R
O
Ao
A0
o
Dout
αo
Do
at Ao, fout
max =
f0
1− v
c
=
f0
1− ωR
c
(4.1)
at A0
o, fout
min =
f0
1 + v
c
=
f0
1 + ωR
c
(4.2)
If both the detectors are outside, maximum and minimum frequencies detected by them
are same which is not the case if you observe the graph given in the question. Hence, we
rule out the first possibility.
When detector Din is inside the circle (see figure below):
R
O
S
v
φi
βi
γi
Di
DinH B C 2 0
INPhO 2020 Page 11 Questions & Summary Answers
fin
=
f0
1− v
c cosφi
(4.3)
|cosφi| = |sinβi| (4.4)
sinγi
R
=
sinβi
Di
(4.5)
cosφi =
Di
R
sinγi (4.6)
fin
=
f0
1− v
c
Di
R sinγi
(4.7)
R
O
Ai
A0
i
v
φi βi
αi
γi
Di
Din
fin is maximum (minimum) when sinγi is 1 (−1).
at Ai, fin
max =
f0
1− ωDi
c
< fout
max (4.8)
at A0
i, fin
min =
f0
1 + ωDi
c
> fout
min (4.9)
If both the detectors are inside, again there are two possibilities: they are at the same
distances or at the different distances from the center. In the former case, their observed
peak frequencies will be same which is clearly not evident from the given graph. In the
latter case, their maximum frequencies will be different but the time difference between
the maximum and minimum frequencies will also be different. However from the graph,
the time difference between maximum and minimum frequencies for detectors 1 and 2 is
t(fmin)−t(fmax) = 9 s
This is possible only if one detector is inside and other detector is outside. Also, detector
may not be colinear with the center.
O
•
• 1
• 2
• S
In this part, marking (anywhere) 1 outside and 2 inside the circle with a correct
justification will be given full credit.H B C 2 0
INPhO 2020 Page 12 Questions & Summary Answers Last four digits of Roll No.:
(c) [3] Obtain the frequency f0 of the source.
f0 =
Solution: From equations (4.1) and (4.2),
f0
1− v
c
= 1300 Hz (4.10)
f0
1 + v
c
= 800 Hz (4.11)
f0 ≈ 991 Hz (4.12)
(d) [9] Calculate the distance (D) between the detectors.
D =
Solution: We have to find out Di, Do and angle θ between the detectors. From equations
(4.10) and (4.11),
v = 78.6 m/s (4.13)
v = Rω = R
2π
24
(4.14)
R ≈ 300 m (4.15)
O
Ao
A0
o
Dout
Do
Ai
A0
i
Din
Di
θ
αo
αi
By symmetry, Ao and A0
o are equidistant from the detector 1. Similarly, Ai and A0
i are
equidistant from the detector 2. It takes 9 s from Ai to A0
i (Ao and A0
o). Hence
2∠αo = 2∠αi =
3π
4
(4.16)
Di = Rcosαi ≈ 115 m (4.17)
Do =
R
cosαo
≈ 784 m (4.18)
There will be signal delay due to finite Do and Di.
Let θ be the angular separation between the detectors. Time difference between the peakH B C 2 0
INPhO 2020 Page 13 Questions & Summary Answers
frequencies of detectors 1 and 2 is 4 seconds.
4 =
θ
ω
+
AiDin
c
−
AoDout
c
(4.19)
4 =
θ
ω
+
Rsinαi
c
−
Do sinαo
c
(4.20)
⇒ θ =
π
3
−
ωRsinαi
c
+
ωDo sinαo
c
(4.21)
= 1.4rad (4.22)
The distance between the detectors =
q
OD2
in +OD2
out −2ODin.ODout.cos(1.4) ≈ 773
m
Detailed answers can be found on page numbers:
5. [20] The following is the top view of an assembly kept on a smooth horizontal table.
vo
θ L
D
y
x
A massless inextensible string of length D lies with one end fixed, while the other is attached
to one end of a uniform rod of length L. The system is initially at rest with the rod aligned
along the x-axis and the string stretched to its natural length at an angle with the negative y-axis
θ (cosθ = 1/3). At a certain instant, a bullet of the same mass m as the rod and negligible
dimensions is fired horizontally along the positive y-direction. The bullet hits the rod at its right
end with velocity vo and gets lodged in it, the impact being nearly instantaneous. What is the
tension (T) in the string immediately after the impact? Assume the string doesn’t break.
T =
Solution: Geometry of the problem dictates that the string becomes taut during the impact
and hence exerts an impulse. We conclude:
1. Angular momentum is conserved only about P.
2. The velocity of P is perpendicular to the string right after the impact (refer to the figure).
We have two unknowns - ω and u.H B C 2 0
INPhO 2020 Page 14 Questions & Summary Answers Last four digits of Roll No.:
u
ω
CM
θ P
y
x
We first note that the momentum of CM is preserved perpendicular to the string since the
string applies force only along its length.
(Pi)⊥ = (Pf)⊥
mv sinθ = 2m(vf)⊥
where (vf)⊥ is the velocity of the CM perpendicular to the string. CM is located at a distance
3L
4 from P. So, (vf)⊥ = 3Lω
4 sinθ −u
=⇒
3Lω
4
sinθ −u =
vo sinθ
2
(5.1)
Applying conservation of angular momentum about P,
Li = Lf
mvoL = 2m
3Lω
4
−usinθ
3L
4
+Icmω (5.2)
Solving equations 5.1 and 5.2, we get
ω =
vo
L
(5.3)
u =
vo
3
√
2
(5.4)
T
u
ω
CM
θ P
y
x
Designate the tension in the string immediately after the impact as T. This gives a clockwise
angular acceleration of the rod equal to
α =
3L
4
T cosθ
Icm
=
18T cosθ
5mL
(5.5)H B C 2 0
INPhO 2020 Page 15 Questions & Summary Answers
θ
T
2m
3Lα
4
ω2 3L
4
P
We now calculate the acceleration of P on the rod in the direction of the string, (aP )|| (in
the ground frame) and set it equal to u2
D .
To this end, note that the acceleration of the CM in the direction of the string is equal to
T
2m. Also, point P is instantaneously rotating about the CM with angular velocity ω in a
circle of radius 3L
4 - this gives a centripetal acceleration of ω2 × 3L
4 directed towards the CM.
Furthermore, the tangential acceleration of P along its trajectory is given by 3Lα
4 . Accounting
for all these contributions and taking appropriate components, we can write the acceleration
of point P in the direction of the string as
(aP )|| =
T
2m
+
27T
10m
cos2
θ −
3ω2L
4
sinθ
Now we know
(aP )|| =
T
2m
+
27T
10m
cos2
θ −
3ω2L
4
sinθ =
u2
D
(5.6)
Hence we get
T =
5mv2
o
4
"
1
18D
+
1
L
√
2
#
Comment [not for grading purposes]:
We assumed above that the string is taut. This is consistent with the solution above, as we
found a non-zero answer for the tension. However, if you do not picture that the geometry of
the problem requires tension in the string, you can convince yourselves that this is the correct
assumption, by assuming that the tension is zero and arriving at a contradiction.
Assume that the string becomes slack. Let the angular velocity of the rod be ω counter-
clockwise, as seen from top, immediately after the impact. Then, noting that velocity of CM
remains preserved (because the string is assumed to go slack during the impact) and applying
conservation of angular momentum about the point of impact, one gets
Li = Lf
0 = 2m
vo
2
L
4
−Icmω
ω =
mvoL
4Icm
where Icm is the moment of inertia of the rod and the bullet system about its center of mass.
Now, Icm = mL2
12 + mL2
8 + mL2
8 = 5mL2
24 , thereby yielding
ω =
6vo
5LH B C 2 0
INPhO 2020 Page 16 Questions & Summary Answers Last four digits of Roll No.:
ω
CM
vo
2
θ
y
x
The velocity of the end of the string tied to the rod (P) immediately after the impact,
therefore, would be given by −

3L
4 × 6vo
5L − vo
2

ĵ = −2vo
5 ĵ. But this would mean the string
would get elongated. Contradiction!
Detailed answers can be found on page numbers:
**** END OF THE QUESTION PAPER ****
