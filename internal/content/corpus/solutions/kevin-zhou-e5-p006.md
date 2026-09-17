---
id: kevin-zhou-e5-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e5-p006
solution_type: author
source_document: solution-document-kevin-zhou-e5sol
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E5Sol.pdf."
---

[3] Problem 6. A wheel of radius R and moment of inertia J consisting of a large number of thin
conducting spokes is free to rotate about an axle. A brush always makes electrical contact with one
spoke at a time at the bottom of the wheel.
A battery with voltage V feeds current through an inductor L, into the axle, through the spoke, to
the brush. There is a uniform magnetic field B pointing into the plane of the paper. At time t = 0
the switch is closed.
(a) Find the torque on the wheel and the motional emf along a spoke, as a function of the current
I in the circuit and the angular velocity ω of the wheel.
(b) Solve for the full time evolution of I(t) and ω(t). If there is a small amount of friction and
resistance, then what will the final state of the system be?
This setup is an example of a homopolar motor.
Solution. (a) By integrating the force along the wire, the torque is
τ =
Z R
0
IBrdr =
IBR2
2
.
Similarly, the force per unit charge on a charge a distance r from the center of the disk is
vB = ωrB, so the motional emf is
E =
Z R
0
ωBrdr =
ωBR2
2
.
7
Kevin Zhou Physics Olympiad Handouts
(b) Newton’s second law gives the time evolution of the wheel,
Jω̇ =
IBR2
2
.
Kirchhoff’s loop rule gives the time evolution of the circuit,
V = L ˙ I +
ωBR2
2
.
When the switch is closed, the current and the wheel will start spinning up simultaneously.
However, eventually the wheel will be rotating so fast that the back-emf starts to decrease
the current through the inductor. After a while, this current goes negative and starts to slow
down the wheel. Finally, once the wheel slows down enough, the current through the inductor
can start increasing again. Then it turns out that both ω and I go to zero, and the process
starts again. In other words, both ω and I oscillate in time.
Now let’s see this quantitatively. Differentiating the first equation and plugging it into the
second gives
ω̈ +
1
JL

BR2
2
2
ω =
BR2
2JL
V
which is a simple harmonic motion equation with solution
ω(t) = C cosΩt + DsinΩt +
2V
BR2
, Ω =
BR2
2
√
JL
.
We know that ω(0) = 0, and that initially I = 0, which implies ω̇(0) = 0. Therefore,
ω(t) =
2V
BR2
(1 − cosΩt).
Plugging this into Kirchhoff’s loop rule gives
I(t) =
V
ΩL
sinΩt.
Note that if there were a tiny bit of friction or resistance, then eventually these oscillations
would damp out. We would then approach the steady state solution, which is where the back-
emf balances the battery’s emf and almost no current flows at all, I ≈ 0 and ω ≈ 2V/BR2.
(Or, if we used the motor to do work, then in the steady state the current would be nonzero
and the angular velocity would be somewhat lower.)
[4] Problem 7.  T 1 0IPhO 1990, problem 2. A neat problem on an exotic propulsion mechanism called
an electrodynamic tether, which also reviews M6.
2 Faraday’s Law
8
Kevin Zhou Physics Olympiad Handouts
Idea 3
Faraday’s law states that even for a time-dependent magnetic field, we still have
E = −
dΦ
dt
.
In the case where the loop isn’t moving but the magnetic field is changing, the emf is entirely
provided by the electric field,
E =
I
C
E · ds.
Electric fields in the presence of changing magnetic fields can thus be nonconservative, i.e. they
can have a nonzero closed line integral, a situation we haven’t seen in any previous problem
set. The differential form of Faraday’s law is
∇ × E = −
∂B
∂t
.
