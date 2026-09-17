---
id: solution-document-usapho-2024-s
source: usapho
kind: official_answer_sheet
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2024_S.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/usapho/2024_S.pdf."
---

2024 USAPhO Proctor Instructions 1
USA Physics Olympiad Exam
DO NOT DISTRIBUTE THIS PAGE
Important Instructions for the Exam Supervisor
• This examination has two parts. Each part has three questions and lasts for 90 minutes.
• For each student, print out one copy of the exam and one copy of the answer sheets. Print
everything single-sided, and do not staple anything. Divide the exam into the instructions
(pages 2–3), Part A questions (pages 4–12), and Part B questions (pages 13–22). Page 11 is a
graph page, in case students wish to use it as an additional page for problem B3.
• Begin by giving students the instructions and all of the answer sheets. Let the students
read the instructions and fill out their information on the answer sheets. They can keep the
instructions for both parts of the exam. Also give students blank sheets of paper to use as
scratch paper throughout the exam.
• Students may bring calculators, but they may not use symbolic math, programming, or
graphing features of these calculators. Calculators may not be shared, and their memory must
be cleared of data and programs. Cell phones or other electronics may not be used during the
exam or while the exam papers are present. Students may not use books or other references.
• To start the exam, collect signed Honesty Policy, give students the Part A questions, and
allow 90 minutes to complete Part A. Do not give students Part B during this time, even if
they finish with time remaining. At the end of the 90 minutes, collect the Part A questions
and answer sheets.
• Then give students a 5 to 10 minute break. Then give them the Part B questions, and allow
90 minutes to complete Part B. Do not let students go back to Part A.
• At the end of the exam, collect everything, including the questions, the instructions, the
answer sheets, and the scratch paper. Give them the Honor Code Certification and collect
signed Codes. Students may not keep the exam questions.
• After the exam, sort each student’s answer sheets by page number. Scan every answer sheet,
including blank ones. Everybody may discuss the questions after April 3rd. Until April 19th,
hold on to all of the answer sheets in the event that your scans are lost or illegible.
We acknowledge the following people for their contributions to this year’s exam (in alphabetical order):
Tengiz Bibilashvili, Kellan Colburn, Natalie LeBaron, Rishab Parthasarathy, Elena Yudovina, and Kevin
Zhou.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Student Instructions 2
USA Physics Olympiad Exam
Instructions for the Student
• You should receive these instructions, the reference table on the next page, answer sheets, and
blank paper for scratch work. Read this page carefully before the exam begins.
• You may use a calculator, but its memory must be cleared of data and programs, and you may
not use symbolic math, programming, or graphing features. Calculators may not be shared.
Cell phones or other electronics may not be used during the exam or while the exam papers
are present. You may not use books or other outside references.
• When the exam begins, your proctor will give you the questions for Part A. You will have
90 minutes to complete three problems. Each question is worth 25 points, but they are not
necessarily of the same difficulty. If you finish all of the questions, you may check your work,
but you may not look at Part B during this time.
• After 90 minutes, your proctor will collect the questions and answer sheets for Part A. You
may then take a short break.
• Then you will work on Part B. You have 90 minutes to complete three problems. Each question
is worth 25 points. Do not look at Part A during this time. When the exam ends, you must
return all papers to the proctor, including the exam questions.
• Do not discuss the questions of this exam, or their solutions, until April 4.
Violations of this rule may result in disqualification.
Below are instructions for writing your solutions.
• All of your solutions must be written on the official answer sheets. Nothing outside these
answer sheets will be graded. Before the exam begins, write your name, student AAPT
number, and proctor AAPT number as directed on the answer sheets.
• There are several answer sheets per problem. If you run out of space for a problem, you may
use the extra answer sheets, which are at the end of the answer sheet packet. To ensure this
work is graded, you must indicate, at the bottom of your last answer sheet for that problem,
that you are using these extra answer sheets.
• Only write within the frame of each answer sheet. To simplify grading, we recommend drawing
a box around your final answer for each subpart. You should organize your work linearly
and briefly explain your reasoning, which will help you earn partial credit. You may use either
pencil or pen, but sure to write clearly so your work will be legible after scanning.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Student Instructions 3
Fundamental Constants
g = 9.8 N/kg G = 6.67 × 10−11 N · m2/kg2
k = 1/4πϵ0 = 8.99 × 109 N · m2/C2 km = µ0/4π = 10−7 T · m/A
c = 3.00 × 108 m/s kB = 1.38 × 10−23 J/K
NA = 6.02 × 1023 (mol)−1 R = NAkB = 8.31 J/(mol · K)
σ = 5.67 × 10−8 J/(s · m2 · K4) e = 1.602 × 10−19 C
1 eV = 1.602 × 10−19 J h = 6.63 × 10−34 J · s = 4.14 × 10−15 eV · s
me = 9.109 × 10−31 kg = 0.511 MeV/c2
Useful Approximations
(1 + x)n
≈ 1 + nx + n(n − 1)x2
/2 for |nx| ≪ 1
ex
≈ 1 + x + x2
/2 + x3
/6 for |x| ≪ 1
sinθ ≈ θ − θ3
/6 for |θ| ≪ 1
cosθ ≈ 1 − θ2
/2 for |θ| ≪ 1
You may use this sheet for both parts of the exam.
End of Instructions for the Student
DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part A 4
Part A
Question A1
Ping Pong
A thin wire of negligible resistance and total length D is wound to form a thin cylindrical solenoid
of length ℓ ≪ D. A conducting sphere of radius R ≪ ℓ is attached to each end of the solenoid.
Initially there is no current in the wire, and the spheres have charges Q and −Q. Give all your
answers in terms of R, ℓ, D, and the speed of light c = 1/
√
µ0ϵ0.
a. Assume this system can be modeled as an LC circuit. What is the angular frequency of its
oscillations?
Solution
The capacitance of this system is
C =
Q
∆V
=
Q
Q/(2πϵ0R)
≈ 2πϵ0R
since the potential on the spheres is approximately ±Q/4πϵ0R. Its inductance can be found
by considering the magnetic field energy,
1
2
LI2
=
1
2µ0
Z
B2
dV.
If the radius of the solenoid is a, then D = 2πanℓ, where n is the number of turns per length.
Then we have Z
B2
dV = (µ0nI)2
πa2
ℓ =
µ0I2D2
4πℓ
which implies an inductance
L =
µ0D2
4πℓ
.
The angular frequency of LC oscillations is
ω =
1
√
LC
=
c
D
r
2ℓ
R
.
We weren’t told the values of a and n, but the dependence on them simply dropped out.
This system loses energy because it emits electromagnetic radiation. Consider an electric dipole
consisting of charges ±q0 cos(ωt) separated by distance d, whose dipole moment oscillates with
amplitude p0 = q0d. If d is much smaller than the wavelength λ of the radiation produced, then it
can be shown that the power radiated is roughly (i.e. up to an order-one dimensionless factor)
P ∼
ω4p2
0
ϵ0c3
.
For the rest of the problem, your answers only need to be similarly rough estimates.
b. For this setup, the above formula applies if D ≫ D0. Find a rough estimate for D0.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part A 5
Solution
The radiation produced has angular frequency ω, so wavelength
λ ∼
c
ω
∼ D
p
R/ℓ.
The Larmor formula works when ℓ ≪ λ, which corresponds to D ≫ D0 ∼
p
ℓ3/R.
c. Assuming D ≫ D0, estimate the number of oscillations that occurs until half the energy is lost.
Solution
The total stored energy is of order
E ∼
Q2
C
∼
Q2
ϵ0R
.
Thus, the typical number N of cycles for the energy to decay is approximately the inverse of
the fraction of the energy that is radiated away in each cycle, so
N ∼
E
P/ω
∼
Q2/ϵ0R
ω3(Qℓ)2/ϵ0c3
∼
(c/ω)3
Rℓ2
∼
r
RD6
ℓ7
.
This is roughly the quality factor of the LC circuit. Note that we implicitly assumed above
that many oscillations occur before half the energy is lost. This assumption made sense
because we know N ≫
p
RD6
0/ℓ7 ∼ ℓ/R ≫ 1.
Part (a) of this problem was inspired by problem 19.16 of Zangwill’s Modern Electrodynamics.
Compared to that problem, we replaced a straight connecting wire with a solenoid, which
makes the problem a bit easier, and allows the LC circuit description to work for a broader
range of parameters.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part A 6
Question A2
Stellar Stability
A star in hydrostatic equilibrium has inward gravitational forces balanced by pressure gradients.
Though the material in a star is not simply an ideal gas, in many cases its pressure P and density ρ
are simply related by P = Kργ for constants K and γ. Throughout this problem, assume the star
is spherically symmetric, its mass is conserved, and relativistic effects can be neglected.
a. A thin shell of the star at radius r0 has density ρ0 and thickness ∆r, and experiences an inward
gravitational field of magnitude g0.
i. What is the pressure difference ∆P0 across the shell in equilibrium?
Solution
The mass of the shell is m = ρ0A0 ∆r, where A0 = 4πr2
0 is its surface area. The
total inward gravitational force is g0m, and the total outward pressure force is A0 ∆P0.
Equating them yields
∆P0 = g0ρ0 ∆r.
ii. Suppose the entire star expands uniformly by a factor 1 + x, so that the shell now has radius
r = r0(1 + x). In terms of ∆P0, x, and γ, what is the new pressure difference across it?
Solution
The density scales as ρ ∝ 1/(1 + x)3, so the pressure everywhere in the star is scaled by
the factor ργ ∝ 1/(1 + x)3γ. Thus, the new pressure difference is ∆P0/(1 + x)3γ.
iii. By considering the forces on the shell, write an expression for d2r/dt2 valid when x is small,
in terms of g0, γ, and x. For what values of γ will the star be stable?
Solution
The radial form of Newton’s second law for the shell is
m
d2r
dt2
= Fpr − Fgr
where the outward pressure force is
Fpr = A∆P = A0 ∆P0
(1 + x)2
(1 + x)3γ
since area is proportional to r2, and the inward gravitational force is
Fgr = gm =
g0m
(1 + x)2
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part A 7
since gravity obeys an inverse-square law. Applying part 1(a) and simplifying gives
d2r
dt2
= g0
(1 + x)2
(1 + x)3γ
−
1
(1 + x)2
!
≈ g0(4 − 3γ)x.
The star is stable when this is a restoring force, which requires γ > 4/3.
Next, we consider some simple models of stars, where γ can be computed.
b. In a giant star, the pressure is P = Pgas + Prad, where Pgas is due to the gas, which obeys the
ideal gas law, and Prad ∝ T4 is due to blackbody radiation. In the star’s “radiation zone”, Prad
is much larger than Pgas, but the two have a constant ratio. In this case, what is the value of γ?
Solution
The density ρ of the star is due to the gas, and the ideal gas law states that Pgas ∝ ρT. On
the other hand, if the two pressure contributions have a fixed ratio, then Pgas ∝ Prad ∝ T4.
Combining these results gives ρ ∝ T3 and P ∝ T4, so that γ = 4/3.
c. A white dwarf is composed of electrons and nuclei. The electrons provide the outward pressure,
while the nuclei cancel the electrons’ charge, and are responsible for most of the mass density.
Consider a region of a white dwarf where the number density of electrons is ne.
i. The electrons obey the Heisenberg uncertainty principle, ∆p∆x ≳ ℏ, where ∆x is the spacing
between them, and ∆p is the typical momentum that quantum mechanics implies they must
have. Find a rough estimate for ∆p in terms of ne and ℏ.
Solution
The spacing between electrons is ∆x ∼ n
−1/3
e , so ∆p ∼ ℏn
1/3
e .
ii. Using this result, find γ for a white dwarf.
Solution
Since the white dwarf is electrically neutral, the density of nuclei is proportional to the
density of electrons, so the mass density ρ is proportional to ne. As for the pressure,
basic kinetic theory shows that it scales as the product of the number density ne, the
momentum ∆p ∼ n
1/3
e , and the typical speed ∆v ∼ ∆p/m ∼ n
1/3
e . Thus, P ∝ n
5/3
e , so
γ = 5/3.
iii. A white dwarf has total mass M, radius R, and a relatively uniform density of order ρ ∼ M/R3.
The radius is related to the mass by R ∝ Mn for a constant n. Find the value of n.
Solution
The pressure at the center is proportional to G and otherwise depends only on M
and R. Thus, by dimensional analysis, P ∼ GM2/R4. (This argument assumes the
density is relatively uniform. By contrast, a typical star has a very large, low-density
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part A 8
envelope surrounding a dense core of radius Rcore ≪ R, so the correct estimate would be
P ∼ GM2/R4
core. That is, the assumption of relatively uniform density just means that
in the dimensional analysis, the only relevant length is the total radius R.)
We just showed that the electrons provide pressure P ∝ ρ5/3 ∼ M5/3/R5. Equating these
two yields R ∝ M−1/3, so n = −1/3. Perhaps surprisingly, more massive white dwarfs
are smaller.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part A 9
Question A3
Tilt Shift
An ideal converging lens of focal length f is centered at x = y = 0 with its axis of symmetry aligned
with the x-axis. A light ray incident at height y ≪ f will be tilted inward by an angle θ = y/f. In
this problem, we will consider objects at x = −o, where o > f. The lens will produce a real image
of the object at x = i, where 1/o + 1/i = 1/f.
Even for an ideal lens, the image of a finite-sized object will generally be distorted.
a. Consider a pointlike object at x = −o and y = 0. If it moves to the right a small distance δx, its
image moves to the right a distance mx δx. If it moves up a small distance δy, its image moves
up a distance my δy. Find mx and my in terms of i and o.
Solution
To compute my, it suffices to draw a ray going from (−o,δy) through the center of the lens
until it hits the image plane at x = i. From similar triangles, we immediately conclude
my = −i/o. To find mx, we take the differential of the lens equation, giving
do
o2
+
di
i2
= 0.
The quantity mx is just −di/do, so we read off mx = i2/o2.
b. Suppose the object is a short stick, tilted an angle θo to the x-axis. In terms of i, o, and θo, what
is the angle θi its image makes with the x-axis?
Solution
This follows immediately from the previous part. We have
tanθo =
δy
δx
, tanθi =
myδy
mxδx
from which we conclude
θi = tan−1

−
o
i
θo

.
This is equivalent to the statement that if you extend the stick and its image, then they
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part A 10
will meet at the lens plane x = 0, which is called the Scheimpflug principle. It is used in
“tilt shift” photography to produce focused images of objects tilted relative to the camera’s
plane, by tilting the camera’s screen.
To produce a simple camera, we put the lens right next to a circular aperture of diameter D ≪ f,
and place a movable screen behind the lens. Suppose the location of the screen is chosen so that
light from very distant objects will be focused to a point on the screen.
c. The light from a pointlike object at finite distance o will produce a finite-sized spot of radius r
on the screen. Find r in terms of f, D, and o, assuming o ≫ f.
Solution
Such an object produces an image at
i =
of
o − f
≈ f + f2
/o.
Since we are assuming the camera is focused on infinitely distant objects, the screen is a
distance f from the lens, so the image of this object is f2/o behind the lens. By drawing
similar triangles, we conclude r = Df/(2o).
Alternatively, by drawing similar triangles (or by doing a bit more algebra), you can show
that this is the exact answer: r = D/2 · (i − f)/i = Df/(2o), without approximating o ≫ f.
d. If the camera primarily sees light of wavelength λ ≪ f,D, find a rough estimate for the additional
spread rd of any image on the screen due to diffraction, in terms of f, D, and o.
Solution
In general, diffraction will spread out light in an angle θ ∼ λ/D. Thus, it will arrive at the
screen spread out by rd ∼ fλ/D. Any answer within an order of magnitude is acceptable.
e. Assuming the typical numbers f = 5.0cm, D = 5.0mm, and λ = 500nm, find the numeric values
of o for which the blurring due to geometric effects exceeds the blurring due to diffraction.
Solution
Setting our previous two expressions equal gives o ∼ D2/(2λ) = 25m. So for objects
at distance o < 25m, the geometric blurring dominates. Any answer within an order of
magnitude is acceptable.
Real photos are noisy because light is made of discrete photons, with energy E = hc/λ. Suppose
the camera is illuminated uniformly with light of intensity I = 1W/m2, its sensor has N = 107
pixels, and every photon passing through the aperture is detected, with equal probability, by one
pixel in the sensor. This implies that if the expected number of photons arriving at a pixel on the
sensor is n, the standard deviation of that number is
√
n.
f. If the aperture opens for time τ to take a photo, find the numeric value of τ for which the
standard deviation of the brightness of each pixel is 1% of the mean.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part A 11
Solution
On average, the number of photons hitting each pixel is
Nγ =
Iτ(πD2/4)
NE
.
For the standard deviation to be 1% of the mean, we need Nγ to be at least 104. Plugging
in the numbers yields τ = 2ms, which is a typical camera shutter speed in good lighting.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part A 12
STOP: Do Not Continue to Part B
If there is still time remaining for Part A, you can review your work for Part
A, but do not continue to Part B until instructed by your exam supervisor.
Once you start Part B, you will not be able to return to Part A.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 13
Part B
Question B1
The Muon Shot
In 2023, American particle physicists recommended developing a muon collider to investigate the
nature of fundamental particles. Such a collider requires much less space then other options because
of the muon’s high mass m, which makes it easier to accelerate to a very high energy E ≫ mc2.
a. When a muon colides head-on with an antimuon, which has the same energy and mass, a new
particle of mass 2E/c2 can be produced. If the antimuon was instead at rest, what energy would
the muon need to produce such a particle?
Solution
The shortest solution involves setting c = 1 and using four-vectors. In the original situation,
the muon and antimuon have four-momenta pµ
1 and pµ
2, where
p1 · p2 = (E,p) · (E,−p) = E2
+ p2
.
To have an equivalent collision where the antimuon is at rest, we boost this configuration to
the antimuon’s rest frame, where p′µ
1 = (E′,p′) and p′µ
2 = (m,0). The inner product of the
four-vectors stays the same, so
p′
1 · p′
2 = E′
m = p1 · p2.
Since E ≫ m, we have p2 ≈ E2, so solving for E′ and restoring the factors of c gives
E′
=
2E2
mc2
.
This is much greater than E, so it is practical to accelerate the antimuon as well. Incidentally,
you can also solve the problem exactly, in which case you’ll get
E′
=
2E2
mc2
− mc2
≈
2E2
mc2
.
Either answer is acceptable.
Unfortunately, muons and antimuons are unstable, with lifetime τ. That is, if one such particle
exists at time t = 0, then in its rest frame, the probability it has not decayed by time t is e−t/τ.
b. Suppose the muons begin at rest, and are accelerated so that each muon’s energy increases at a
very large, constant rate α in the lab frame. Find the fraction f of muons that have decayed by
the time each muon has energy E, assuming f is small.
Solution
Continuing to set c = 1, the energy of the muon in the lab frame is E(t) = αt + m, but we
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 14
also know that E(t) = γ(t)m, so that
γ = 1 +
αt
m
.
The acceleration process begins at time t = 0, and ends at time tf = (E−m)/α. Accounting
for time dilation, the amount of time that elapses in the muon’s frame is
τf =
Z tf
0
dt
γ
=
m
α
Z tf
0
1
t + m/α
=
m
α
ln
E
m
.
To relate this to f, we note that
f = 1 − e−τf/τ
≈
τf
τ
where the second step uses the assumption that f is small. Therefore,
f =
mc2
ατ
ln
E
mc2
where we restored the factors of c.
The collider produces a “bunch” of muons with energy E, uniformly distributed in a thin disc
of radius R = 10−6 m. It also simultaneously produces a similar “antibunch” of antimuons. For
simplicity, model each muon and antimuon as a sphere of radius r = 10−21 m, and suppose a
muon-antimuon collision occurs whenever two such spheres touch.
c. Initially, the bunch and antibunch each contain N = 1014 particles. If they immediately collide
head-on, what is the average number of muon-antimuon collisions, to one significant figure?
Solution
Consider one muon and antimuon. A collision occurs when their centers are separated by
less than 2r. Fixing the location of the muon, the probability that the antimuon is within
the appropriate area is approximately π(2r)2/(πR2) = (2r/R)2, since r ≪ R. Each pair of
muons and antimuons has the same chance to collide, so the expected number of collision
events is 
2rN
R
2
= 0.04.
This is much smaller than N, which justifies our assumption that the collision events are
independent. It might seem odd for the answer to be less than 1, but this is desired, as
having many collisions occur at once would make it hard to see what happens in each
collision.
d. The bunch travels clockwise along a ring of circumference ℓ = 10km, while the antibunch travels
along the same path in the opposite direction. Assume all particles maintain a constant energy
E = 105 mc2, and that the muon lifetime is τ = 2.2 × 10−6 s. To one significant figure, what is
the average number of muon-antimuon collisions that occur before all of the particles decay?
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 15
Solution
If the number of particles remaining in the bunch and the antibunch is Nk, where k = 0 for
the first collision, then the expected number of collisions is

2rN
R
2 ∞ X
k=0

Nk
N
2
.
We found above that only a small number of collisions occurs per bunch-antibunch crossing,
so the decrease in Nk over time is almost entirely due to decay. A crossing occurs every time
each bunch or antibunch traverses half of the ring, corresponding to a proper time increment
∆τ =
ℓ/(2c)
105
= 1.67 × 10−10
s.
Therefore, since τ ≫ ∆τ, we have
∞ X
k=0

Nk
N
2
=
∞ X
k=0
e−2k ∆τ/τ
=
1
1 − e−2∆τ/τ
≈
τ
2∆τ
= 6600.
The expected total number of collisions is 260, which rounds to 300.
The rough numbers given here correspond to a muon collider which would be able to probe
new particles 10 times as heavy as those probed at the existing Large Hadron Collider.
Roughly one in a million muon-antimuon collisions yield a Higgs boson, so that an enormous
number of them can be produced for detailed study. Remarkably, such a muon collider could
be smaller in size than the LHC, while other proposals involving electrons or protons would
need to be about 10 times longer. However, given the muon’s short lifetime, it may be very
hard to create the required focused muon beams. The feasibility of this “muon shot” is
currently being investigated by particle physicists around the world.
One of us (TB) thanks Nathaniel Craig, Andrew Fee and Sergo Jindariani for discussions
during our work on this problem.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 16
Question B2
Solid Heat
In classical thermodynamics, a solid containing N atoms has a heat capacity CV = 3NkB. The two
parts of this question are independent. In both parts, we assume the solid has constant volume.
a. In a simple quantum model of a solid, the energy is E = ℏωm, where m is the number of quanta
and ω is a constant. Einstein showed that the entropy of such a solid is
S
kB
= (3N + m)ln(3N + m) − mln(m)
up to a constant. According to the first law of thermodynamics, dE = T dS for this system.
i. Find an expression for m in terms of N and the quantity α = ℏω/kBT.
Solution
Writing both sides of dE = T dS in terms of dm gives
dE = ℏω dm
and
T dS = kBT ln

3N + m
m

dm.
Equating these and solving for m gives
m =
3N
eα − 1
.
ii. We want to see how quantum effects modify the familiar classical result in the limit α ≪ 1,
where the quantum corrections are small. Write an approximate expression for m, including
terms of order α but neglecting terms of order α2 or higher.
Solution
We Taylor expand the exponential, for
m =
3N
α + α2/2 + α3/6 + ...
=
3N
α
1
1 + α/2 + α2/6 + ...
.
Since there’s a 1/α in front, we need to expand the fraction to order α2, which means we
need to use the geometric series formula to second order,
1
1 + x
= 1 − x + x2
+ ...
where here x = α/2 + α2/6. This gives the final answer,
m = 3N

1
α
−
1
2
+
α
12

Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 17
iii. The heat capacity, with its leading quantum correction, is CV ≈ 3NkB(1 + bαn) for some
constants b and n. Find the values of b and n.
Solution
The heat capacity is
CV =
dE
dT
= ℏω
dm
dT
≈ 3Nℏω
d
dT

kBT
ℏω
−
1
2
+
ℏω
12kBT

.
Carrying out the derivative yields
CV = 3NkB 1 −
α2
12
!
from which we read off b = −1/12 and n = 2.
b. A vertical cylinder is filled with a monatomic ideal gas, and capped by a movable piston. The
temperature is high enough for the piston to be modeled as a classical solid. The gas and piston
contain the same number of atoms, but the mass of the gas is negligible compared to that of the
piston. Assume the entire cylinder is in vacuum, and that the gas and piston do not transfer
heat to their environment, but always remain in thermal equilibrium with each other.
i. When the piston is in mechanical equilibrium, the column of gas has height h and pressure
P = P0. At this point, find dP/dh in terms of P0 and h.
Solution
If n is the number of moles of gas and solid, then the heat capacity of the gas-piston
system, at constant volume and pressure, is
CV =
3
2
nR + 3nR, CP =
5
2
nR + 3nR
because the solid does not expand, and hence its contribution to CP is equal to its
contribution to CV . Thus, the adiabatic index is
γ =
CP
CV
=
11
9
.
Since the system doesn’t transfer heat to its environment, the quantity PV γ remains
the same throughout the oscillations, where V is the volume of the gas. Taking the
differential of this relation, the pressure in the gas varies as
dP
dh
= −
γP0
h
= −
11P0
9h
.
ii. If the piston is given a small vertical impulse, what is the angular frequency of its subsequent
oscillations? Give your answer solely in terms of h and the gravitational acceleration g.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 18
Solution
The net force on the piston, as a function of vertical displacement z, is
Fz = −
γP0A
h
z
where A is the piston’s cross-sectional area. Newton’s second law for the piston is
Fz = m
d2z
dt2
where m is the mass of the piston. Combining the two previous equations yields simple
harmonic motion with
ω2
=
γP0A
mh
.
To eliminate the unwanted parameters, we note that since the piston was originally in
mechanical equilibrium, we have P0A = mg, from which we conclude
ω =
r
γg
h
=
r
11g
9h
.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 19
Question B3
Quality Quest
The quality factor is a dimensionless number which quantifies how efficiently a system stores energy
and how strongly it responds on resonance. For a circuit consisting of a capacitor C, an inductor L,
and a small resistance R in series, the resonant frequency is approximately ω0 = 1/
√
LC, and the
quality factor, assumed to be large throughout this problem, is
Q =
1
R
r
L
C
.
In this problem, we explore several ways to measure Q. Uncertainty analysis is not required.
a. Alice measures Q by seeing how oscillations in the circuit damp over time. Suppose that initially,
the charge on the capacitor is q and the current is zero. The next time the current is zero, the
charge is −q(1 − δ). Find an approximate expression for δ, in terms of ω0 and Q.
Solution
In the absence of resistance, the charge on the capacitor and the current are
qC(t) = q cos(ω0t), I(t) =
dqC(t)
dt
= −qω0 sin(ω0t).
The total energy dissipated in the resistor is approximately
∆E =
Z π/ω0
0
I(t)2
Rdt = q2
ω2
0R
Z π/ω0
0
sin2
(ω0t)dt =
π
2
q2
ω0R.
On the other hand, we also have
∆E =
q2 − (q(1 − δ))2
2C
≈
q2δ
C
.
Equating the two yields
δ =
π
2
ω0RC =
π
2Q
.
b. Bob and Charles drive their circuits with a sinusoidal voltage V (t) = V0 cosωt. It can be shown
that in the steady state, the voltage across the capacitor oscillates with amplitude
Vc =
V0
p
(1 − ω2/ω2
0)2 + (ω/ω0Q)2
.
The circuits Bob and Charles have are similar, but are not precisely the same.
i. Bob fixes the value of V0 so that the highest value of Vc at any frequency is precisely 10.00V.
His equipment can precisely compare the amplitudes of a small DC and AC voltage. He thus
performs two very accurate voltage measurements.
ω (rad/s) 0.0 183.3
Vc (Volts) 0.1219 0.1219
Using this data, find the numeric values of Q and ω0 as accurately as possible.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 20
Solution
Note that at ω = 0, we simply have Vc = V0, while on resonance, we have Vc = QV0.
Thus, in this case we can directly read off the quality factor as
Q =
10.00
0.1219
= 82.0.
As for the other data point, it also has Vc = V0, which implies
1 = (1 − ω2
/ω2
0)2
+ (ω/ω0Q)2
.
This can be simplified by recognizing a difference of squares, giving
(ω2
/ω2
0)(2 − ω2
/ω2
0) = ω2
/ω2
0Q2
and solving for ω0 gives
ω0 =
ω
p
2 − 1/Q2
= 129.6rad/s.
Alternatively, since we know Q, we know that the (ω/ω0Q)2 term is negligible, to the
precision at which we’re working. Simply dropping that term gives ω0 = ω/
√
2, which
gives the same numeric answer, up to the four significant figures used in this part.
ii. Charles can precisely tune ω, but cannot precisely measure small voltages. He thus fixes V0
to some other value and takes data near the resonance, where Vc is relatively large.
ω (rad/s) 133.0 133.5 134.0 134.5 135.0 135.5 136.0 136.5 137.0
Vc (Volts) 3.64 4.76 6.52 8.53 8.18 6.06 4.44 3.42 2.75
Using this data, find the numeric values of Q and ω0 as accurately as possible. (Hint: you
may use the graph paper in the answer sheets, but full credit is attainable without graphing.
To find Q, you should first find ω0, then simplify the equation above using ω ≈ ω0.)
Solution
The maximum value of Vc is attained at ω0. Looking at the data, we can see that ω0
is between 134.5 and 135.0rad/s, and slightly closer to the former; we therefore take
ω0 = 134.7rad/s. This result is already as precise as the precision of the data allows, so
there’s no point in trying to improve it further. Any answer within 0.1rad/s is acceptable.
The next step is to extract Q. Since all the data is taken near resonance, ω ≈ ω0, we have
V 2
0
V 2
c
= (1 − ω2
/ω2
0)2
+ (ω/ω0Q)2
≈ 4(1 − ω/ω0)2
+
1
Q2
.
We don’t know V 2
0 , so we divide through to get
1
V 2
c
=
4
V 2
0
(1 − ω/ω0)2
+
1
V 2
0 Q2
.
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 21
So plotting 1/V 2
c vs. (1 − ω/ω0)2 gives a line with slope m = 4/V 2
0 and intercept
b = 1/V 2
0 Q2, from which we find Q =
p
m/4b. It would take too long to apply this to all
of the data points, so let’s just select one near the resonance and one at the ends, as such
a pair yields maximal sensitivity to the slope and intercept.
ω (rad/s) Vc (V) (1 − ω/ω0)2 1/V 2
c (V−2)
134.5 8.53 2.205 × 10−6 0.01374
137.0 2.75 2.916 × 10−4 0.1322
The slope of this line is m = 409.3V−2, from which we compute an intercept b =
0.01284V−2, and a quality factor Q = 89.3. This is a very rough analysis, but it gets
pretty close to the true answer of Q = 88.0.
There are many ways to do this problem. You can get decent accuracy (i.e. within ±10 of
the true answer) just by eyeballing the graph. A good result will be within ±3 of the true
answer. The analysis above is more than twice as precise as that, and you can do even
better by repeating the analysis using the point at the other end, ω = 133.0rad/s, and
averaging the results. Ideally, this will give you the same answer, but in practice there
are errors on ω0 and Vc at ω = 134.5rad/s, which averaging would partially cancel out.
c. The gain function of this circuit is defined as G = VR/V0, where VR is the amplitude of the
voltage across the resistor, as shown below.
i. Find an expression for G in terms of ω, ω0, and Q.
Solution
This is simplest using complex impedances. We note that
G =
VR
VC
VC
V0
=
ZR
ZC
VC
V0
= ωRC
VC
V0
=
ω/(ω0Q)
p
(1 − ω2/ω2
0)2 + (ω/ω0Q)2
.
Simplifying a bit gives the final answer,
G =
1
p
1 + ((ω0Q/ω)(1 − ω2/ω2
0))2
ii. This setup can be used to reject voltages at certain frequencies. Qualitatively describe the
range(s) of frequencies for which G is small.
Solution
This setup is a frequency filter. The gain G is small everywhere except for a narrow band
Copyright ©2024 American Association of Physics Teachers2024 USAPhO Part B 22
of frequencies around ω0, whose width is of order ω0/Q.
Copyright ©2024 American Association of Physics Teachers
