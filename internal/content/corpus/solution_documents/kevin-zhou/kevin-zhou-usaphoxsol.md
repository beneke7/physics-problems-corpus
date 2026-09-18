---
id: solution-document-kevin-zhou-usaphoxsol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/USAPhOXSol.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/USAPhOXSol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Practice USAPhO X
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
In this problem, we analyze the working principle of a speed camera. The transmitter of the speed
camera emits an electromagnetic wave of frequency f0 = 24GHz having waveform cos(2πf0t). The
wave gets reflected from an approaching car moving with speed v. The reflected wave is recorded
by the receiver of the speed camera.
1. What is the frequency f1 of the reflected wave? You may assume that v ≪ c.
2. Inside the circuitry of the speed camera, the received waveform is multiplied with the orig-
inal emitted waveform. This product can itself be written as a sum of sinusoids of various
frequencies. Find all the distinct frequencies in the sum.
3. Given that the lowest frequency component present in the multiplied signal is flow = 4.8kHz,
calculate the speed of the car v.
You may find it useful to use the trigonometric identity
cosαcosβ = (cos(α + β) + cos(α − β))/2.
Solution. This is NBPhO 2018, problem 2. Here’s an outline of the official solution:
1. (8) The Doppler shift formula effectively has to be used twice, once because the car is moving
towards the transmitter, and again because the car is moving towards the receiver. The
answer is
f1 = f0
1 + v/c
1 − v/c
≈ f0(1 + 2v/c).
2. (6) Using the provided identity, the frequencies present are f0 + f1 and f1 − f0, which means
f0(2 + 2v/c) and 2f0v/c. (That’s a general principle – multiplication causes frequencies to
add and subtract.)
3. (6) We have flow = 2f0v/c, and solving gives v = 30m/s. (Incidentally, this frequency doesn’t
determine the direction of motion of the car, but it’s possible to find it by tracking the waves’
phases.)
Question A2
Wood burns in a fireplace on the ground, producing smoke with temperature T1 = 40◦C, which
slowly rises through the atmosphere. Neglect the exchange of heat between the smoke and the
surrounding air, and suppose the atmosphere has pressure p0 = 100kPa at the ground, and uniform
temperature T0 = 20◦C. Treat both the smoke and atmosphere as diatomic ideal gases of molar
mass µ = 29g/mol, and recall that 0◦C = 273K. To within 10%, how high does the smoke column
rise?
Solution. This is NBPhO 2008, problem 7. The smoke stops rising once it reaches the same
density as the air. The ideal gas law tells us that pV = nRT, which means the density of a gas is
proportional to p/T. The smoke and air always are in mechanical equilibrium, i.e. they have the
2

Kevin Zhou Physics Olympiad Handouts
same pressure p, so they have the same density once they have the same temperature, i.e. when the
smoke column cools to temperature T0.
Since the smoke does not exchange heat with its surroundings, it expands and cools adiabatically
as it rises, which means pV γ is constant. Combining this with the ideal gas law, we have pγ−1 ∝ Tγ,
which means the final pressure obeys
pγ−1
f
Tγ
0
=
pγ−1
0
Tγ
1
.
Plugging in the numbers with γ = 7/5 for a diatomic gas, we find
pf = 79kPa.
When the atmospheric pressure falls to pf, the smoke column will stop. Now, we know that for an
atmosphere with constant temperature T0, hydrostatic equilibrium implies
dp
dz
= −ρg, ρ =
µn
V
=
pµ
RT0
.
We therefore have
p(z) = p0e−µgz/RT0
and the final height h is when p(h) = pf. Solving gives h = 2000m.
Question A3
Consider particles of mass m confined to a one-dimensional box of length L. We consider the
quantum mechanics of this system. For simplicity, express your answers in terms of the quantity
α = h2/8m as much as possible.
1. In each energy level, the particle may be represented by a standing wave, where the wavefunc-
tion is zero at the walls. Find the wavelength λ for the nth energy level.
2. Using the de Broglie relation p = h/λ, find the energy En of the nth energy level.
3. Assume the particles are fermions, meaning that each energy level can only be occupied with
two particles (one with spin up, and one with spin down). Let there be N particles of mass
m in this box, where N is even and N ≥ 4. Find the lowest possible total energy U0 of the
system, i.e. the ground state energy of the system. You may neglect the Coulomb interaction
between the particles, and you may use the identity
m X
n=1
n2
=
m(m + 1)(2m + 1)
6
4. Write the total energy U1 in terms of U0 and relevant quantities when the system is in the
first excited state. Do the same for the total energy U2 of the second excited state.
5. In the ground state, find the magnitude of the force F on each wall in terms of U0.
6. In some astrophysical systems, the size L is free to vary, and in equilibrium the outward force
found in part (5) balances the inward gravitational force. We can get a rough estimate for
the equilibrium value of L by equating the total energy U0 to the total gravitational potential
energy. Make a very rough estimate for the gravitational potential energy using dimensional
analysis, treating the box as having uniform density. Equate this to U0 and find a rough
estimate for the equilibrium length L in terms of N and other quantities.
3

Kevin Zhou Physics Olympiad Handouts
Solution. This is INPhO 2019, problem 2. Here’s an outline of the official solution:
1. (2) λ = 2L/n for n ≥ 1.
2. (3) The de Broglie relation p = h/λ means that
En =
p2
2m
=
n2h2
8mL2
=
αn2
L2
.
3. (4) The energy levels from n = 1 up to n = N/2 are all occupied by two particles. Thus,
U0 =
2α
L2
N/2
X
n=1
n2
=
α
12L2
N(N + 1)(N + 2).
4. (6) To get to the first excited state, we remove one particle from the n = N/2 state, and put
it in the n = N/2 + 1 state. That means
U1 = U0 −
α
L2

N
2
 2
+
α
L2

N
2
+ 1
 2
= U0 +
α
L2
(N + 1).
To get to the second excited state from the first excited state, we can then remove one particle
from the n = N/2 − 1 state and put it in the n = N/2 state, since it now has an empty slot.
The net change from the ground state is that one particle has been moved from n = N/2 − 1
to n = N/2 + 1, giving
U2 = U0 −
α
L2

N
2
− 1
 2
+
α
L2

N
2
+ 1
 2
= U0 +
α
L2
2N.
5. (2) By the definition of force,
F = −
dU0
dL
=
2U0
L
.
6. (3) Our extremely rough estimate is
UG ∼
GM2
tot
L
∼
GN2m2
L
.
Setting this equal to U0 ∼ αN3/L2, we have
L ∼
αN
Gm2
.
4

Kevin Zhou Physics Olympiad Handouts
Part B
Question B1
A submarine of unknown nationality is traveling near the bottom of the Baltic sea, at the depth
of h = 300m. Its interior is one big room of volume V = 10m3 filled with air (M = 29g/mol) at
pressure p0 = 100kPa and temperature t0 = 20◦C. Suddenly it hits a rock and a large hole of area
A = 20cm2 is formed at the bottom of the submarine. As a result, the submarine sinks to the
bottom and most of it is filled fast with water, leaving a bubble of air at increased pressure (no
air escapes the submarine). The density of water is ρ = 1000kg/m3 and free fall acceleration is
g = 9.81m/s2. Treat the air as a diatomic ideal gas.
1. What is the volume rate (in m3/s) at which the water flows into the submarine immediately
after the formation of the hole?
2. The flow rate is so large that the submarine is filled with water so fast that heat exchange
between the gas and the water can be neglected, in both this part and the next part. What
is the volume of the air bubble once water flow has stopped?
3. At this point, what is the change in internal energy of the air?
4. The water stream rushing into the submarine creates a turbulent flow, which ultimately causes
energy to be dissipated as heat. How much total energy is dissipated to heat within the water,
once the inflow has stopped due to equalized pressures?
Solution. This is NBPhO 2018, problem 8. Here’s an outline of the official solution:
1. (5) According to Bernoulli’s principle, the flow rate through the hole is
v =
s
2∆P
ρ
=
p
2gh = 76.7m/s.
The rate of volume flow is
Q = Av = 0.153m3
/s.
2. (5) The air in the submarine is adiabatically compressed. The initial pressure is p0, and the
flow stops once its pressure is equal to the outside water pressure, pf ≈ ρgh = 3.0 × 106 Pa.
Since γ = 7/5 for a diatomic gas,
Vf = Vi

p0
pf
 5/7
= 0.9m3
.
3. (5) The change in internal energy is
∆Uair =
5
2
nR∆T.
Using the ideal gas law, we have n = 410. The change in temperature can be found using
Tf = Ti

pf
p0
 1−1/γ
= Ti

pf
p0
 2/7
= 770K.
Plugging in the numbers,
∆Uair = 4 × 106
J.
5

Kevin Zhou Physics Olympiad Handouts
4. (5) We use energy conservation. The work done on the submarine by the external water is
W = pf∆V = pf(Vi − Vf) = 2.7 × 107
J.
If this isn’t totally clear, you can also note that the total decrease in gravitational potential
energy of the wateris ρgh∆V . But since h is large, we have ρgh ≈ pf in hydrostatic equilibrium,
recovering the result above.
This energy goes into heating up the water in the submarine, and heating the air. But we
only want the heat in the water, which is
Q = W − ∆Uair = 2.3 × 107
J.
Any answer within 10% of this is acceptable.
Question B2
Consider a modification of Coulomb’s law by replacing it with
F =
q1q2
4πϵ0

1
r2
+
β
r3

r̂
where β is a constant. The usual Bohr quantization condition L = nℏ still holds. Simplify your
answers as much as possible, and express them in terms of the Bohr radius a0 = 4πϵ0ℏ2/me2, so
that ℏ does not appear explicitly in your answers.
1. Find the radii rn of the electron orbits in hydrogen, under this modified law.
2. Find the corresponding energy levels En.
3. Find the transition energy ∆E from n = 2 to n = 1 for this modified law. For simplicity, you
may assume β is small and ignore terms of order β2 and higher.
Solution. This is INPhO 2011, problem 4. There are no official solutions, but the answers are:
1. (7) The calculations are simple classical mechanics; the only trouble is keeping things clean.
We have
F =
mv2
r
=
L2
mr3
=
n2ℏ2
mr3
.
Equating this with the force given, we find
e2
4πϵ0

1
r2
+
β
r3

=
n2ℏ2
mr3
and solving for r gives the radius of the nth orbit,
rn = n2
a0 − β.
2. (9) The trick here is getting to the answer without messy algebra. The potential energy is
U = −
e2
4πϵ0

1
r
+
β
2r2

.
6

Kevin Zhou Physics Olympiad Handouts
It’s best to write the kinetic energy as
K =
1
2
mv2
=
L2
2mr2
=
n2ℏ2
2mr2
=
e2
4πϵ0
n2a0
2r2
.
Adding the two, we have the nice result
En =
e2
4πϵ0

n2a0
2r2
n
−
1
rn
−
β
2r2
n

=
e2
4πϵ0rn

1
2
− 1

= −
e2
8πϵ0
1
n2a0 − β
.
3. (4) By definition, we have
∆E =
e2
8πϵ0

1
a0 − β
−
1
4a0 − β

.
Using the binomial approximation, since β ≪ a0, gives
∆E ≈
e2
8πϵ0a0

3
4
+
15
16
β
a0

.
Question B3
A detector of radio waves is placed on the sea beach at height h = 2m above sea level. A star,
which radiates electromagnetic waves of wavelength λ = 21cm, begins to rise over the horizon. As
a result, the detector senses alternating maxima and minima in the intensity of the waves. The
waves are polarized parallel to the sea surface, which is flat.
1. Let the star be an angle α above the horizon. Determine the angles α where the detector
registers intensity maxima, and minima.
2. When the star just passes the horizon (i.e. when α = 0), is the intensity increasing or
decreasing?
3. Determine the ratio of the intensity at the first maximum to the next minimum. Note that
upon reflection of the wave on the water surface, the ratio of the magnitudes of the electric
fields of the reflected and incident waves is
Er
Ei
=
n − cosφ
n + cosφ
where the refractive index of water for radio waves is n = 9, and φ is the incident angle of the
wave from the normal.
4. Does the ratio of intensities of consecutive maxima and minima increase or decrease as the
star rises?
Solution. This is IPhO 1981, problem 3. Here’s an outline of the official solution:
1. (8) The interference maxima and minima occur because of the interference of two rays, as
shown.
7

Kevin Zhou Physics Olympiad Handouts
α α
φ
2α
A
B
C
1
2
h
By doing a little trigonometry, we find that the path length difference is
h
sinα
−
hcos2α
sinα
= 2hsinα.
In addition, the path that bounces off the water has an additional phase shift π because of
the reflection. Thus, the condition for an interference maximum is
2hsinα = (m − 1/2)λ, sinα =
λ
4h
(2m − 1)
while the condition for an interference minimum is
2hsinα = mλ, sinα =
mλ
2h
Incidentally, there are ⌊2h/λ⌋ = 19 maxima, and 19 minima.
2. (2) At α = 0, the phase difference is π, so we are at a minimum. Thus, as α changes away
from zero, the intensity increases.
3. (7) At the maxima the field strength is Ei+Er, while at the minima it is Ei−Er. Furthermore,
by definition cosφ = sinα. Thus, at the first maximum,
Ei + Er =

1 +
n − sinα
n + sinα

Ei =
2nEi
n + sinα
=
2nEi
n + λ/4h
.
At the first minimum after that, we have field
Ei − Er =

1 −
n − sinα
n + sinα

Ei =
2Ei sinα
n + sinα
=
Eiλ/h
n + λ/2h
.
The ratio of intensities is
Imax
Imin
=

Ei + Er
Ei − Er
 2
=

2nh
λ
 2
n + λ/2h
n + λ/4h
 2
= 3 × 104
.
4. (3) When α is small, Ei and Er are almost equal, which means that Imin is very small. As
α increases, their difference increases, increasing Imin. Thus, the ratio of the intensities of
consecutive maxima and minima decreases.
As you can see, the IPhO was a lot easier back then! This method, used in Australia in the 1940s,
is called sea interferometry.
8
