---
id: solution-document-kevin-zhou-usaphoasol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/USAPhOASol.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/USAPhOASol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Practice USAPhO A
INSTRUCTIONS
DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN
• Work Part A first. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 90. Do not look at Part B during this time.
• After you have completed Part A you may take a break.
• Then work Part B. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 90. Do not look at Part A during this time.
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
1Kevin Zhou Physics Olympiad Handouts
Part A
Question A1
An empty tin can has radius r = 50 ± 1mm, height h = 150 ± 1mm, and a wall, base, and top
of uniform thickness s = 0.10 ± 0.01mm. Wound around its circumference is a string, which is
attached to a winch. The can is placed on a slope at angle θ to the horizontal so that the string is
parallel to the slope, as shown.
The winch has radius rw and can be set to turn a fixed number of turns nt with a constant torque
τ, i.e. τ/rw is the tension in the winching string. The can is initially held stationary, and is then
released. It is observed that the winch stops turning after a time t. Neglect friction between the
can and slope and treat the string as massless.
1. The density of tin is ρ = 7.30×103 kgm−3. Find the mass m of the tin can, with uncertainty.
2. Suppose we know m, rw, and r, and moreover that τ and nt are known and freely adjustable.
In each run, we can measure t. Describe an experimental procedure, involving plotting a
straight line, that can be used to find θ and the moment of inertia I of the can about its center
of mass. Give explicit formulas for θ and I in terms of the slope and intercept of this line.
Solution. This is AuPhO 2011, problem 12. Here’s an outline of the official solution:
1. m = 46±5g. You should get an answer quite close to this, no matter what error propagation
method you use, because almost all the uncertainty is due to the thickness.
2. Let ar be the acceleration of the rope. Then
1
2
art2
= 2πntrw
which lets us solve for ar. We also know that ar can be decomposed into a1 + a2, standing
for acceleration due to the center-of-mass motion and rotation of the can respectively,
a1 = −g sinθ +
τ
mrw
,
τr
rw
= Iα =
Ia2
r
.
Combining these results, we have
ar =
4πntrw
t2
= −g sinθ +
τ
rw

r2
I
+
1
m

.
2Kevin Zhou Physics Olympiad Handouts
Therefore, we can plot 4πntrw/t2 versus τ, while varying both nt and τ. The slope a and
intercept b of this line are then
a =
1
rw

r2
I
+
1
m

, b = −g sinθ
from which we can extract the desired parameters as
θ = −sin−1
(b/g), I =
r2
arw − 1/m
.
Of course, many other procedures are possible; this is just one example.
Question A2
A charged object generally induces an image charge when placed near a metallic plate. If the object
moves, currents in the metal will lead to damping of its motion. Consider the following model
for the dissipation: the image charge’s motion lags by time τ behind the object’s motion. This
leads to an additional velocity-dependent force in addition to the position-dependent force from the
instantaneous image charge.
1. What applied force Fapp is necessary to sustain the motion of an object with charge q moving
with constant velocity v parallel to an infinite metal plate, a distance r from the plate?
2. Find the leading contribution (for small v and τ) to the force calculated in part 1, in the
direction of v. That is, defining the drag force to be F = −γv, find the damping coefficient γ.
3. What is the damping coefficient for motion perpendicular to the plate?
4. The quantity τ should be determined by the conductivity σ of the plate. Find a rough estimate
for the power dissipated by the point charge in the metal, in terms of q, σ, v, and r.
Solution. This is BAUPC 2002, problem 5. The answers are:
1. Fapp = kq2(2rẑ + vτ x̂)/(4r2 + v2τ2)3/2 where k = 1/(4πϵ0)
2. γ = kq2τ/(8r3)
3. γ = kq2τ/(4r3)
4. We’ve seen in E3 that on metals, induced charges decay on the timescale ϵ0/σ, so we expect
τ ∼ ϵ0/σ. Plugging this in gives
P ∼ Fv ∼
q2v2
σr3
.
You could also derive this result from dimensional analysis. For a derivation from first
principles, see application 14.5 of Zangwill.
3Kevin Zhou Physics Olympiad Handouts
Question A3
A particle of mass m and charge q is in a homogeneous magnetic field Bẑ. The system is situated
in between two parallel electrodes, which can be used to create a homogeneous electric field Ex̂.
Throughout this problem, neglect any radiation or induction effects.
1. Suppose the particle begins at rest. The electric field is switched on for a very short time τ
and then switched off. Describe the subsequent trajectory of the particle, and find the period
T of the motion.
2. Now suppose that the electric field is periodically switched on for a very short time τ, starting
at t = 0, after equal time intervals ∆t = T/4. Sketch the subsequent trajectory of the particle,
in both the (x,y) plane and the (px,py) plane.
3. Now suppose that τ ≪ ∆t ≪ T. Sketch the subsequent trajectory of the particle, in both the
(x,y) plane and the (px,py) plane. (Hint: it may be useful to first draw the impulses provided
by each electric field pulse.)
Solution. This is a modification of NBPhO 2003, problem 6. Here’s an outline of the official
solution:
1. Circle of radius r = Eτ/B, with period T = 2πm/(qB).
2. See the figure for the official solution to part 3, though note that for some reason, they swap
the x and y axes.
3. For the answer in momentum space, see the figure for the official solution to part 5. This case
isn’t fundamentally different from having a constant electric field, so the trajectory in real
space is a cycloid, as you’ve found in E4.
4Kevin Zhou Physics Olympiad Handouts
Part B
Question B1
This question consists of several independent parts. Each of them asks for an estimate of an order
of magnitude only, not for a precise answer.
1. An egg, taken directly from the fridge at temperature 4◦ C, is dropped into a pot with water
that is kept boiling at temperature T1. The following data may be useful:
Mass density of the egg: µ = 103 kgm−3
Specific heat capacity of the egg: C = 4.2JK−1 g−1
Radius of the egg: R = 2.5cm
Coagulation temperature of albumen (egg protein): Tc = 65◦ C
Heat transport coefficient of liquid and solid albumen: κ = 0.64WK−1 m−1
You may use the simplified form of Fourier’s law, J = κ∆T/∆r, where ∆T is the temperature
difference associated with ∆r, the typical length scale of the problem. The heat flow J is in
units of Wm−2.
(a) How large is the amount of energy U that is needed to get the egg coagulated?
(b) How large is the heat flow J that is flowing into the egg?
(c) How large is the heat power P transferred to the egg?
(d) For how long do you need to cook the egg so that it is hard-boiled?
2. Let us regard blood as an incompressible viscous fluid with mass density µ similar to that of
water and dynamic viscosity η = 4.5gm−1 s−1. We model blood vessels as circular straight
pipes with radius r and length L and describe the blood flow by Poiseuille’s law,
∆p = RD,
the fluid dynamics analogue of Ohm’s law in electricity. Here ∆p is the pressure difference
between the entrance and the exit of the blood vessel, D = Sv is the volume flow through the
cross-sectional area S of the blood vessel, and v is the blood velocity. The hydraulic resistance
R is given by
R =
8ηL
πr4
.
For the systemic blood circulation (the one flowing from the left ventricle to the right auricle
of the heart), the blood flow is D ≈ 100cm3 s−1 for a man at rest. Answer the following
questions under the assumption that all capillary vessels are connected in parallel and that
each of them has radius r = 4µm and length L = 1mm and operates under a pressure
difference ∆p = 1kPa.
(a) How many capillary vessels are in the human body?
(b) How large is the velocity v with which blood is flowing through a capillary vessel?
5Kevin Zhou Physics Olympiad Handouts
3. At the bottom of a 1000m high skyscraper, the outside temperature is Tbot = 30◦ C. The
objective is to estimate the outside temperature Ttop at the top. Consider a thin slab of air
(ideal nitrogen gas with adiabatic coefficient γ = 7/5) rising slowly to height z where the
pressure is lower, and assume that this slab expands adiabatically so that its temperature
drops to the temperature of the surrounding air.
The mass of a nitrogen molecule is m = 4.65 × 10−26 kg.
(a) How is the fractional change in temperature dT/T related to dp/p, the fractional change
in pressure?
(b) Express the pressure difference dp in terms of dz, the change in height.
(c) In Celsius, what is the temperature at the top of the building?
Solution. This is a modification of IPhO 2006, problem 3. The answers are:
1. (a) U = 17000J
(b) J ∼ 2500W/m2
(c) P ∼ 19W
(d) τ ∼ 870s
2. (a) N ∼ 4.5 × 109
(b) v ∼ 4.4 × 10−4 m/s
3. (a) dT/T = (1 − 1/γ)dp/p
(b) dp = −mgpdz/(kBT)
(c) T′ = 20.6◦C
For answers with ∼, I’ve shown the answer you’d expect if you performed the approximations the
question writers intended, but anything within an order-one factor is acceptable.
Question B2
In this problem we consider the average contribution of each electron to the specific heat of a free
electron gas at constant volume. According to classical physics, the conduction electrons in metals
constitute a free electron gas like an ideal gas. In thermal equilibrium their average energy is
related to the temperature, so they contribute to the specific heat. The average contribution of
each electron to the specific heat at constant volume is
cV =
dE
dT
where E is the average energy of each electron.
1. What is the value of cV in classical physics?
6Kevin Zhou Physics Olympiad Handouts
Experimentally it has been found that cV is very different from the classical expectation. This
is because the electrons obey quantum statistics rather than classical statistics. In the quantum
theory, the number of states dS for the conduction electrons within an energy range dE is
dS ∝ V E1/2
dE
where the normalization constant is determined by the total number of electrons in the system. The
probability that a state of energy E is occupied by electrons is
f(E) =
1
1 + e(E−EF )/kBT
where EF is called the Fermi level. At room temperature, EF is about several eV for metallic
materials.
2. Sketch the Fermi distribution function f(E) when the temperature is low, kBT ≪ EF , and
sketch its limit when the temperature approaches zero.
3. Numerically, for what temperatures is the low-temperature limit used in part (2) valid?
4. Compute the average energy per particle E at zero temperature.
5. Find an approximate expression for cV valid at room temperature to within an order of
magnitude. You may assume that EF does not change significantly.
Solution. This is a modification of APhO 2007, problem 3. The answers are:
1. cV = 3kB/2
2. It should be roughly 1 at small energies, then sharply decrease to zero in a narrow window of
width ∼ kBT around E = EF . In the limit T → 0, it decreases to zero instantly.
3. We need EF ≫ kBT, which corresponds roughly to T ≪ 105 K.
4. The average energy per particle is
E =
REF
0 E1/2 E dE
REF
0 E1/2 dE
=
3
5
EF .
5. The distribution only changes significantly in a range of energies |E − EF | ≲ kBT, which
means only a fraction ∼ kBT/EF of the particles are even affected. They each raise the energy
by order kBT. That means
∆E ∼ (kBT)(kBT/EF )
which implies that
cV ∼
k2
BT
EF
.
This is much smaller than the classical expectation.
7
