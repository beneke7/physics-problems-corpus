---
id: solution-document-kevin-zhou-usaphoesol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/USAPhOESol.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/USAPhOESol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Practice USAPhO E
INSTRUCTIONS
DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN
• Work Part A first. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 60. Do not look at Part B during this time.
• After you have completed Part A you may take a break.
• Then work Part B. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 60. Do not look at Part A during this time.
• Show all your work. Partial credit will be given. Do not write on the back of any page. Do not
write anything that you wish graded on the question sheets.
• Start each question on a new sheet of paper. Put your AAPT ID number, your proctor’s AAPT
ID number, the question number, and the page number/total pages for this problem, in the
upper right hand corner of each page. For example,
Student AAPT ID #
Proctor AAPT ID #
A1 – 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You
may use only the basic functions found on a simple scientific calculator. Calculators may not
be shared. Cell phones, PDA’s or cameras may not be used during the exam or while the exam
papers are present. You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• In order to maintain exam security, do not communicate any information about the questions
(or their answers/solutions) on this contest.
Possibly Useful Information. You may use this sheet for both parts of the exam.
1

Kevin Zhou Physics Olympiad Handouts
Part A
Question A1
This problem describes a real situation once faced by Federal Aviation Administration engineers.
In Florida, where there are frequent thunderstorms, the FAA experienced a large number of commu-
nications equipment failures. Suspecting lightning strikes, a power recording monitor was installed
at one Florida site. After carefully studying the problem, the engineers concluded that the failures
were the result of inductive coupling of energy into the communications system. They determined
that a conducting loop (with dimensions of about 2 meters by 6 meters) was formed by the steel
tower, the copper microwave waveguide, the steel equipment cabinet, and the ground (see sketch).
Using typical figures for the rise time of electric current in a lightning bolt, one can estimate that
significant voltage would be induced in this loop, even by a lightning strike several kilometers away.
steel
tower
copper microwave
waveguide
steel cabinet
conducting
loop
ground
2m
6m
Let us model the process as follows.
1. Begin with the magnetic field produced by a straight, infinite line of steady current I. Use
either the Biot–Savart or Ampere’s law to obtain an expression for the magnetic field at
distance r from the current.
2. Although the result of part 1 holds rigorously only for a steady current, let us use it to estimate
the time-dependent magnetic field produced by a lightning bolt. Let us model the lightning
bolt as a straight, vertical, infinite line of current that rises linearly from zero to 1 × 106 A in
5×10−5 s. Let the lightning bolt strike one kilometer from the tower. Find the emf induced in
the conducting loop while the lightning current increases. Describe any other approximations
you make besides the ones we have already mentioned.
3. Suppose the conducting loop described above has a resistance of 50 Ohms. Inside the cabinet
there is a solid state device that can survive a maximum current of 0.25 A. Could this device
be damaged by the lightning strike described in part 2?
Solution. This is USAPhO 1998, problem A4. Here’s an outline of the official solution:
1. (4) B = µ0I/2πr.
2. (6) E = 48V if you model the lightning bolt as infinite. If you model it as half-infinite, which
is a much better approximation, you instead get 24V. Either answer is acceptable.
3. (5) If you modeled the lightning bolt as infinite, then I = E/R = 0.96A, and if you modeled
it as half-infinite, then I = 0.48A. In either case the device is damaged.
2

Kevin Zhou Physics Olympiad Handouts
Question A2
A large vessel is filled with an incompressible, electrically insulating liquid of mass density ρm,
carrying a uniform charge density ρe, which is so small that any electric fields created by the liquid
can be neglected. Let z = 0 at the initial surface level of the liquid. A point charge −q is brought
to the height H, and a bump forms on the liquid surface.
1. Find the maximum height of the bump.
2. If the charge is slowly lowered, at what height H∗ will the liquid start flowing to it?
Solution. This is NBPhO 2006, problem 3. Here’s an outline of the official solution:
1. (10) Let the height of the bump be h. Since the surface of the liquid must be at constant
potential energy,
ρmgh =
ρeq
4πϵ0
1
H − h
.
This is a quadratic equation in h, with solution
h =
H
2
−
s
H
2
 2
−
kρeq
ρmg
.
2. (5) This happens when there is no solution for h above; the liquid minimizes its energy by
going all the way to the charge. The critical value of H is thus when the discriminant is zero,
H∗
= 2
s
kρeq
ρmg
.
Question A3
A metallic rod of mass m and length L (thick line in the figure below) can slide without friction,
with its ends attached to two perpendicular wires (thin lines in the figures). The entire arrangement
is located in the horizontal plane. A constant magnetic field of magnitude B exists perpendicular
to this plane in the downward direction. The wires have negligible resistance compared to the rod
whose resistance is R. Initially, the rod is along one of the wires so that one end of it is at the
junction of the two wires (see Fig. (a)).
The rod is given an initial angular speed Ω such that it slides with its two ends always in contact
with the two wires (see Fig. (b)), and just comes to rest in an aligned position with the other wire
(see Fig. (c)). Determine Ω. Neglect the self-inductance of the system.
3

Kevin Zhou Physics Olympiad Handouts
Solution. This is INPhO 2017, problem 5. Let ϕ be the angle of the rod with the horizontal. Then
xcm =
L
2
cosϕ, ycm =
L
2
sinϕ
so
K =
1
2
mv2
cm +
1
2
Icmϕ̇2
=
mL2ϕ̇2
6
.
The induced emf is
E =
1
2
BL2
cos(2ϕ)ϕ̇.
By calculating the dissipated power,
dK
dt
= −
E2
R
which implies
ϕ̈ = −
3B2L2
4mR
cos2
(2ϕ)ϕ̇.
Integrating both sides with respect to time gives
Ω =
3B2L2
4mR
Z π/2
0
cos2
(2ϕ)dϕ =
3πB2L2
16mR
.
Question A4
A conductive liquid of resistivity ρ flows at speed v through a square metal pipe, which is placed in
a uniform electric field E and magnetic field B ≫ E/c. The velocity, electric field, and magnetic
field are all perpendicular.
This is a “magnetohydrodynamic drive”, which uses electrical energy to push the liquid forward.
1. Find the force per volume acting on the liquid in the direction of the pipe. Neglect any fields
created by the flow of current.
2. Find the flow speed v that maximizes the power per volume delivered to the liquid. At this
flow speed, what is the efficiency of the pump?
Solution. This is problem 174 from Kalda’s electromagnetism handout, translated here.
4

Kevin Zhou Physics Olympiad Handouts
1. (8) The effect of the fields is to produce a uniform current density J in the liquid, which flows
down along the direction of E, and returns along the sides of the pipe. By considering the
forces on the liquid, we have
ρJ = E − vB.
The magnetic field then acts on this downward current to produce a force along the pipe. The
force per volume F is
F = JB =
B2
ρ

E
B
− v

.
2. (7) The power per volume is
P = Fv =
B2
ρ

E
B
− v

v.
This is maximized when v = E/2B. We can neglect relativity, because v ≪ c.
On the other hand, the power lost due to resistance in the liquid per volume is
Ploss = ρJ2
=
B2
ρ

v −
E
B
 2
.
When v = E/2B, we have P = Ploss. That is, the power delivered to the liquid is equal to
the power lost to resistance, which means the efficiency is 1/2.
5

Kevin Zhou Physics Olympiad Handouts
Part B
Question B1
Mechanical and electrical processes are sometimes strongly coupled. Very important examples are
systems containing piezoelectric materials, e.g. quartz resonator. Here we investigate a somewhat
simpler situation.
There are two metal plates with area S and mass m. One plate is situated atop of the other one.
Plates are connected to each other with springs, whose total spring constant is k and which are
made of insulator. The lower plate is mounted on a steady base. The equilibrium distance between
the plates is X0.
1. Let us assume that there is a small vertical shift x of the upper plate from its equilibrium
position. Find the acceleration ẍ of x in terms of system parameters. What is the angular
frequency ω0 of the small vertical oscillations of the upper plate?
2. The plates are now connected to a constant high voltage source, so that they form a capacitor.
The electrostatic force between the plates causes an additional shift of the upper plate. The
equilibrium distance between the plates is now X1. Derive expression for the electrical
attractive force Fe and the voltage applied to the plates U in terms of X0, X1, S, m, and k.
3. The system is set to oscillate again, keeping the voltage U constant. Let x still stand for the
small shift from the equilibrium position. Derive an expression for the acceleration ẍ of x in
terms of X0, X1, S, m, k, and the shift x. What is the angular frequency ω′
0 of the upper
plate’s small vertical oscillations?
4. Let us modify the situation of the previous question and connect an inductor with inductance
L in series to the capacitor and voltage source. In equilibrium, the distance between the plates
is X1, and the charge on the capacitor is Q. Now consider a small shift of both quantities, so
that the distance and charge become X1+x and Q+q. Derive expressions for the accelerations
ẍ and q̈ in terms of X1, Q, S, L, m, k, x, and q.
5. Find the possible angular frequencies of harmonic oscillation of the system, in terms of X0,
X1, ω0, and ω1 =
p
X1/ϵ0SL.
6. What is the maximum value of X0/X1 for which the system is stable?
Solution. This is NBPhO 2005, problem 6. It is a toy example of optomechanics (the study of
coupled mechanical and electromagnetic oscillations) which is increasingly important in physics; for
example, LIGO is a gigantic optomechanical system. Here’s an outline of the official solution:
1. (3) Of course, it is mẍ = −kx, so ω0 =
p
k/m.
6

Kevin Zhou Physics Olympiad Handouts
2. (6) By force balance, Fe = k(X0 − X1). We also know that
Fe =
QE
2
=
CU2
2X1
=
Sϵ0U2
2X2
1
.
Combining and solving for U gives
U =
s
2k(X0 − X1)
Sϵ0
X1.
3. (6) For a small displacement x, the restoring force is −kx−(dFe/dx)x, so the effective spring
constant is
keff = k +
d
dx

Sϵ0U2
2(X1 + x)2

x=0
= k −
Sϵ0U2
X3
1
.
By using our final result from part (b),
keff = k −
Sϵ0
X3
1
2k(X0 − X1)
Sϵ0
X2
1 = k

3 − 2
X0
X1

from which we conclude
ω′
0 =
r
keff
m
=
s
k
m

3 − 2
X0
X1

.
4. (6) Since there are two small perturbations from equilibrium, we need to be careful to consider
all changes of either order q or order x. Consider how the voltage across the capacitor varies,
at lowest order. We have
VC =
Q + q
C
=
(Q + q)(X1 + x)
Sϵ0
.
Thus, neglecting a second order term, the change in the voltage from equilibrium is
δVC =
qX1 + Qx
Sϵ0
.
Therefore, the perturbed Kirchhoff’s loop rule is
Lq̈ = −δVC = −
qX1
Sϵ0
−
Qx
Sϵ0
.
Next, consider the perturbation to the force. The electric force is
Fe =
(Q + q)E
2
=
(Q + q)2
2Sϵ0
which means the change from equilibrium, to first order, is
δFe =
Qq
Sϵ0
.
Thus, Newton’s second law gives
mẍ = −kx − δFe = −kx −
Qq
Sϵ0
7

Kevin Zhou Physics Olympiad Handouts
5. (6) We guess complex exponentials of angular frequency ω for both x and q. As usual, the
second time derivative gives a factor of −ω2, and canceling the complex exponential gives a
relation between the amplitudes of the two quantities, which we’ll also call x and q for brevity,
ω2
Lq =
qX1
Sϵ0
+
Qx
Sϵ0
, ω2
mx = kx +
Qq
Sϵ0
.
Since these equations are linear, there’s only one independent quantity, the ratio q/x. The
two equations must predict the same value of x/q, which are
x
q
=
Q/Sϵ0
ω2m − k
,
x
q
=
ω2L − X1/Sϵ0
Q/Sϵ0
.
Setting these equal and simplifying gives
(ω2
− ω2
0)(ω2
− ω2
1) =
Q2
S2ϵ2
0mL
= 2

X0
X1
− 1

ω2
0ω2
1.
Thus, we have
ω4
− (ω2
0 + ω2
1)ω2
+ ω2
0ω2
1

3 − 2
X0
X1

= 0.
Using the quadratic formula, we finally find
ω2
=
ω2
0 + ω2
1
2
±
s

ω2
0 + ω2
1
2
 2
−

3 − 2
X0
X1

ω2
0ω2
1.
6. (3) For the system to be stable, all the values of ω need to be real, which means ω2 has to be
positive. On the other hand, the product of the two values of ω2 is proportional to 3−2X0/X1,
which means one solution for ω2 goes negative when X0/X1 = 3/2. The system is thus stable
for X0/X1 < 3/2. (This has nothing to do with the inductor; it simply reflects the fact that
if the applied voltage is too strong, the two plates will snap together, much like the setup in
USAPhO 2019 B1.)
This problem is quite a lot more computationally involved than question B2, which again illustrates
that not all points come for an equal amount of work.
8

Kevin Zhou Physics Olympiad Handouts
Question B2
Among the first successes of the interpretation by Ampere of magnetic phenomena, we have the
computation of the magnetic field B generated by wires carrying an electric current, as compared
to early assumptions originally made by Biot and Savart. A particularly interesting case is that of
a very long wire, carrying a constant current i, made out of two straight sections and bent into the
form of a “V”, with angular half-span α.
According to Ampere’s computations, the magnitude B of the magnetic field at point P, a distance
d from the vertex, is proportional to tan(α/2). Ampere’s work was later embodied in Maxwell’s
electromagnetic theory, and is universally accepted.
1. Find the direction of B at P.
2. Given that the magnitude of the field at P is B = ktan(α/2), find the constant k.
3. Let P∗ be the reflection of P about the vertex of the V. Compute the field B at P∗.
4. To measure the magnetic field, we place at P a small magnetic needle with moment of inertia
I and magnetic dipole moment µ. It oscillates about a fixed point in a plane containing the
direction of B. Compute the period of small oscillations of this needle as a function of B.
5. In the same conditions Biot and Savart had instead assumed that the magnetic field at P might
have been B = µ0iα/π2d. In fact, they attempted to decide between the two expressions using
an experiment, by measuring the oscillation period of the magnetic needle as a function of α.
To distinguish experimentally between the two predictions, we need a significant difference in
period. For approximately what range of α is Ampere’s prediction at least 10% larger than
Biot and Savart’s?
It may be useful to use the tangent half angle identity,
tan
α
2
=
sinα
1 + cosα
.
Solution. This is IPhO 1999, problem 2. Here’s an outline of the official solution:
1. (5) Out of the page.
2. (5) Using the special case α = π/2, which is just a straight wire, we find k = µ0i/2πd.
3. (5) This is equivalent to setting α → π − α and reversing the current, so B = kcot(α/2) into
the page.
9

Kevin Zhou Physics Olympiad Handouts
4. (5) Since Iθ̈ = τ = −µB sinθ ≈ −µBθ, we have simple harmonic motion with T = 2π
p
I/µB.
5. (10) We have
TA
TBS
=
s
2α
π tan(α/2)
=
(
2/
√
π α = 0
1 α = π/2
.
This quantity monotonically decreases in α, so α ≤ α∗ where TA/TBS = 1.1 at α∗. Solving by
iteration or binary search or any other method gives α∗ = 0.77rad = 44◦. Any answer within
20% of this is acceptable.
10
