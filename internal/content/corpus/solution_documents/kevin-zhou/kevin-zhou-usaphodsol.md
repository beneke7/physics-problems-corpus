---
id: solution-document-kevin-zhou-usaphodsol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/USAPhODSol.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/USAPhODSol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Practice USAPhO D
INSTRUCTIONS
DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN
• Work Part A first. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 100. Do not look at Part B during this time.
• After you have completed Part A you may take a break.
• Then work Part B. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 100. Do not look at Part A during this time.
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
In this problem you will analyze the longitudinal motion of a linear molecule, i.e. the motion along
the molecular axis. The rotational motion and the bending of the molecule are not considered. Each
atom is assumed to be connected to its neighbors by a chemical bond, approximated by a massless
spring which obeys Hooke’s law.
1. Consider a diatomic molecule AB, where atom A has mass mA, atom B has mass mB, and
the spring constant of the bond is k. Find the angular frequency of vibrations.
2. Now consider a triatomic molecule ABA, where the two bonds both have spring constant k.
Find the possible vibrational angular frequencies and sketch the associated motions.
Solution. This is IPhO 1992, problem 2. (Things were a lot easier back then!) The answers are:
1. ω =
p
k(mA + mB)/(mAmB). If you know about reduced mass, you can write this down
immediately.
2. There are two vibrational modes with nonzero ω.
• B stays at rest and the A’s move oppositely. This mode clearly has ω =
p
k/mA.
• The A’s have the same velocity while B moves against them. Since the center of mass
has to stay stationary, vB = −2mAvA/mB. This yields
ω =
s
k

1
mA
+
2
mB

.
Question A2
Consider a long cylindrical capacitor whose surfaces are concentric cylinders of radius rin and rout.
The capacitor is filled with a gas which will break down if it experiences an electric field greater
than E0. If the outer radius is fixed, what should the inner radius be in order to maximize the
voltage V to which the capacitor can be charged, without breakdown?
Solution. Let the charge per length on the cylinders be ±λ. By Gauss’s law, the electric field is
E =
λ
2πrϵ0
.
Thus, the voltage drop is
V =
λ
2πϵ0
log(rout/rin).
On the other hand, the highest electric field is right at the inner cylinder, so
E0 =
λ
2πrinϵ0
.
Thus, we fix λ ∝ rin, which means
V ∝ rin log(rout/rin) ∝ xlog(1/x), x = rin/rout.
Setting the derivative to zero,
log(1/x) − 1 = 0
which implies x = 1/e, or rin = rout/e.
2Kevin Zhou Physics Olympiad Handouts
Question A3
An electron with kinetic energy 1MeV travels along the z-axis and collides with a positron at rest.
The particles annihilate, producing a pair of photons with equal energies. The rest mass of an
electron is me = 511keV/c2.
1. Explain why it is not possible for the collision process to produce only one photon.
2. Numerically compute the speed of the electron.
3. Find the angle between the momentum of the first photon and the z-axis.
Solution. This is a modification of NBPhO 2015, problem 1. The answers are:
1. It is forbidden by energy and momentum conservation, as can be argued in several ways. For
example, in the center of mass frame, there is nonzero initial energy and zero initial momentum.
This couldn’t be true for a single photon, as E = pc.
2. Using K = (γ − 1)mec2, we have γ = 2.957. Solving for the velocity, we have v = 0.941c =
2.82 × 108 m/s.
3. This is somewhat misleading wording, also present in the original problem statement. How
do we know which photon is the “first” one? It doesn’t matter, because both photons have
to come out at the same angle to the z-axis, by momentum conservation. We have
cosθ =
cpz
E
=
γmevc
(γ + 1)mec2
= 0.703
which implies that θ = 0.791rad = 45.3◦.
Question A4
A student measures the latent heat of vaporization per unit mass of a substance X. He begins by
putting approximately 200mL of liquid X on a combined hotplate and scale. He inserts a ther-
mometer, turns on the hotplate at time t = 0min, and records the liquid’s temperature as well as
the combined mass. After 24 minutes, no more liquid remains in the beaker. The measured results
are shown below.
Plots of the temperature as a function of time, and the rate of change of temperature as a function
of temperature are given below.
3Kevin Zhou Physics Olympiad Handouts
1. Explain why the second graph has a sharp increase, then a gradual decrease, then a sharp
decrease.
2. The specific heat capacity of liquid X is known to be 2.19kJkg−1 K−1. Using this information
and the given data, find the net power that goes into vaporizing the liquid, when it is boiling.
3. Find the latent heat of vaporization of liquid X, in units of kJkg−1
.
Solution. This is AuPhO 2009, problem 14. (It was later reused as INPhO 2015, problem 5.) The
answers are:
1. First, the hot plate needs to warm up. Once it fully warms up, it can start heating the liquid.
As the liquid gets hotter, it starts to lose more heat to its environment, so its rate of heating
decreases. Finally, the liquid starts to boil, which happens at constant temperature.
4Kevin Zhou Physics Olympiad Handouts
2. We need to account for the fact that the liquid will always be losing heat to its environment,
so we should look at dT/dt just before it starts boiling. Referring to the second graph, it is
9◦C/min. Looking between minutes 12 and 13, we have
P = mc
dT
dt
= (306g − 69g)(2.19kJ/(kg · K))(9K/min) = 78W
where we remembered to subtract off the mass of the beaker and thermometer. Anything
within 5% is fine.
Or, if you want to do a bit better, you could fit a line to the part of the dT/dt versus T curve,
between roughly 60◦C and 150◦C, as this region should be linear by Newton’s law of cooling,
and extrapolating it to 160◦C. This will give an answer lower by about 10%, and either is
good enough for the purposes of this question.
3. We plot the mass versus time, in the regime where the liquid has started to boil, to get a
boiling rate of 26g/min. This implies L = 183kJ/kg. Again, anything within 5% is fine.
5Kevin Zhou Physics Olympiad Handouts
Part B
Question B1
In this problem we discuss a simple model for how a bow drives a violin string. Model the string as
a block of mass m attached to a wall by a spring of spring constant k, and lying on a frictionless
horizontal surface. Model the bow with a horizontal plate, pressed with constant force N downward,
which moves with constant speed u parallel to the axis of the spring, as shown.
The coefficients of friction between the plate and block are µk < µs. For the first two parts, assume
that the speed of the plate u is very small compared to the maximal speed of the block.
1. What is the maximal speed of the block?
2. Qualitatively sketch the displacement of the block as a function of time, and indicate on the
graph the durations of the distinct behaviors.
Next, suppose that u is no longer very small.
3. Qualitatively sketch the velocity of the block as a function of time.
4. Determine the amplitude A of the steady state motion, i.e. half the distance between the
rightmost and leftmost points.
5. Under what conditions are the oscillations of the block almost entirely simple harmonic?
Solution. This is a modification of NBPhO 2011, problem 6. The answers are:
1. The block slips at kxs = µsN, and then performs simple harmonic motion displaced by
∆x = µkN/k. Then
1
2
mv2
max =
1
2
k(xs − ∆x)2
which gives
vmax =
r
k
m
N
k
(µs − µk).
2. See the graph in the official solution.
3. See the graph in the official solution.
4. At the moment of slipping, the displacement is xs − ∆x and the speed is u, so that
1
2
kA2
=
1
2
k(xs − ∆x)2
+
1
2
mu2
which gives
A =
r
(µs − µk)2
N2
k2
+
mu2
k
.
6Kevin Zhou Physics Olympiad Handouts
5. We need to have (xs − ∆x)/u ≪
p
m/k, which implies
u ≫ (µs − µk)
N
√
mk
Question B2
The technological and scientific transformations during the 19th century produced a compelling need
for universally accepted standards for the electrical quantities. It was thought the new absolute units
should only rely on the standards of length, mass and time established after the French Revolution.
An intensive experimental work to settle the values of these units was developed.
Lord Kelvin devised the following setup in the 1860s to set the absolute standard for the ohm.
A closed circular coil of N turns, radius a, and resistance R is rotated with constant angular velocity
ω about a vertical diameter in a horizontal magnetic field B0 = B0x̂. A small magnetic needle is
placed at the center of the coil. It is free to turn slowly around the ẑ axis in a horizontal plane, but
it cannot follow the rapid rotation of the coil.
1. Compute the electromotive force E induced in the coil, and the mean power ⟨P⟩ required for
maintaining the coil in motion. Neglect the coil’s self-inductance.
2. Once the stationary regime is reached, the needle will set at a direction making a small angle θ
with B0. Compute the resistance R of the coil in terms of this angle and the other parameters
of the system.
To avoid the rotating coil, Lorenz devised an alternative method.
7Kevin Zhou Physics Olympiad Handouts
The setup consists of two identical metal disks D and D’ of radius b mounted on the conducting
shaft SS’. A motor rotates the set at an adjustable angular velocity ω. Two identical coils C and
C’, of radius a with N turns each, surround the disks. They are connected so that the current I
flows through them in opposite directions. The disks are connected to the circuit by brush contacts
at their rims 1 and 4. The galvanometer G detects the flow of current through the circuit 1-2-3-4.
The whole apparatus serves to measure the resistance R.
3. Assume the current I flowing through the coils C and C’ creates a uniform magnetic field B
around D and D’, equal to the one at the center of the coil. Compute the electromotive force
E induced between the rims 1 and 4, assuming the distance between the coils is much greater
than the radii of the coils and that a ≫ b.
4. The resistance is measured by adjusting ω until the galvanometer reads zero. At this point,
give R in terms of the physical parameters of the system.
Solution. This is the first 2/3 of IPhO 2005, problem 2, and it’s partly a test of your ability to
read real setups. The answers are:
1.
E = Nπa2
B0ω sin(ωt), ⟨P⟩ =
1
2
(Nπa2B0ω)2
R
2.
R =
µ0N2πaω
4tanθ
3.
E =
µ0b2ωIN
2a
4.
R =
µ0b2ωN
2a
8
