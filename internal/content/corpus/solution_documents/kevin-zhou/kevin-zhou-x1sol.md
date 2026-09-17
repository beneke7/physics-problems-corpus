---
id: solution-document-kevin-zhou-x1sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-x1-ex002, kevin-zhou-x1-ex003, kevin-zhou-x1-ex004, kevin-zhou-x1-ex005, kevin-zhou-x1-ex006, kevin-zhou-x1-ex007, kevin-zhou-x1-p001, kevin-zhou-x1-p003, kevin-zhou-x1-p004, kevin-zhou-x1-p009, kevin-zhou-x1-p012, kevin-zhou-x1-p013, kevin-zhou-x1-p014, kevin-zhou-x1-p018, kevin-zhou-x1-p019, kevin-zhou-x1-p020, kevin-zhou-x1-p025, kevin-zhou-x1-p027, kevin-zhou-x1-p028, kevin-zhou-x1-p029]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Modern I: Semiclassical Mechanics
The basics of quantum mechanics can be found in chapters 46 and 47 of Halliday and Resnick,
and are covered more thoroughly in chapters 3 through 6 in Krane. Chapter 10 of Krane covers
quantum statistical mechanics as used in the final section. For a complete, but advanced treatment
of the WKB approximation, see chapter 9 of Griffiths’ Introduction to Quantum Mechanics (3rd
edition). For some nice conceptual discussion, see chapters I-37 and I-38 of the Feynman lectures,
or if you’re ambitious, essentially all of volume III. There is a total of 84 points.
1 The WKB Approximation
A proper introduction to quantum mechanics would take a whole book. Luckily, there is a “semiclas-
sical” regime of quantum mechanics which can be handled with much less machinery. Historically,
this regime was discovered first, by scientists like Bohr, and it suffices to explain many quantum
effects. To introduce the WKB approximation, we’ll start by considering classical standing waves.
Idea 1
The variation of the phase ϕ of a wave is described by its wavenumber and angular frequency,
k =
dϕ
dx
, ω =
dϕ
dt
As covered in W1, the group velocity is
v =
dω
dk
.
A standing wave can form if the wave’s phase lines back up with itself after one round trip,
I
kdx = 2πn, n ∈ Z.
A simple case is a string of length L with fixed ends, where we have
2kL = 2πn
which gives the wavenumbers kn = πn/L and hence the standing wave angular frequencies
ωn = πvn/L, as we saw in W1.
[1] Problem 1. A slightly more subtle case is the case of a string of length L with one fixed and one
free end. Show that the standing wave angular frequencies are
ωn =
πv
L
(n + 1/2).
Solution. Here, we see that the end is free, so it corresponds to an anti-node. Thus, the length of
the string is a half integer amount of half wavelengths, so L = 1
2(n + 1/2)λn, which means that
fn = v/λn =
v
2L
(n + 1/2).
Thus, ωn = 2πfn = πv
L (n + 1/2), as desired.
1Kevin Zhou Physics Olympiad Handouts
The reason our principle above doesn’t give the right answer is that a wave picks up an extra phase
shift π when it reflects off a fixed end, so we really should have written
I
kdx = 2π(n + 1/2)
in this case. We didn’t run into any problems for two fixed ends, because in that case we get two
phase shifts of π, which have no overall effect.
[2] Problem 2. Suppose a string of length L is hung from the ceiling. The string has mass density µ,
and the bottom of the string is held fixed and pulled down with a force F ≫ gLµ. If the string were
weightless, then the standing wave angular frequencies would simply be πvn/L, where v =
p
F/µ.
However, the weight causes the tension and hence the wave speed to vary throughout the rope.
(a) Explain why the wave’s angular frequency ω is uniform, i.e. why standing wave solutions are
proportional to cos(ωt).
(b) Find the angular frequencies of standing waves, accurate to first order in gLµ/F.
This is a more quantitative version of a problem we encountered in W1.
Solution. (a) Recall that the solutions of the wave equation were proportional to ei(kx−ωt) because
the wave equation was linear, and had no explicit dependence on x and t. The wave equation
describing waves on this string does have explicit dependence on x, because the tension
(and hence the wave velocity) varies along the string. But it still doesn’t have any explicit
dependence on t, so guessing a solution proportional to e−iωt (or equivalently cos(ωt) in real
variables) still works.
(b) Let h be the height from the bottom of the string. By Newton’s second law, the tension at
height h is T(h) = F + µgh, so the speed is v(h) =
p
F/µ + gh. Thus, the quantization
condition is
I
kdx = 2
Z L
0
kdh = 2
Z L
0
ωn
v
dh = 2
Z L
0
ωn
p
F/µ + gh
dh = 2πn.
Note that
2
Z L
0
ωn
p
F/µ + gh
dh =
2ωn
p
F/µ
Z L
0
dh
p
1 + ghµ/F
= 2ωn
p
F/µ/g
Z gLµ/F
0
dx
√
1 + x
≈ 2ωn
p
F/µ/g
Z gLµ/F
0
(1 − x/2)dx
= 2ωn
p
F/µ/g

gLµ/F −
1
4
(gLµ/F)2

= 2ωnL
p
µ/F

1 −
1
4
(gLµ/F)

.
We therefore conclude
ωn =
πn
p
F/µ
L

1 +
1
4
(gLµ/F)

.
2Kevin Zhou Physics Olympiad Handouts
If you want the exact solution, you’ll have to solve the wave equation with an h-dependent
wave speed. This can be done with mathematical methods taught in university courses, outside
the scope of the Olympiad syllabus, and the answer will be in terms of special functions.
In quantum mechanics, the state of a particle is described by a wavefunction ψ(x,t) which obeys
the Schrodinger equation. When a particle is confined in a finite volume, there are standing wave
solutions analogous to those of classical wave mechanics, which have discrete frequencies.
Idea 2: WKB Approximation
The momentum and energy of a quantum particle obey the de Broglie relations
p = ℏk, E = ℏω.
As usual, for nonrelativistic particles, the energy E and momentum p are related by
E =
p2
2m
+ V (x).
For a particle with reasonably well-defined momentum, the wavefunction is a wavepacket
which travels at the group velocity
vg =
dω
dk
=
dE
dp
=
p
m
.
In the classical limit, this is simply the ordinary velocity of the particle.
The de Broglie relations also apply for relativistic particles, if E is the relativistic kinetic
plus potential energy, and p is the relativistic momentum. (If you want, you can also add
mc2 to E to get the total relativistic energy, but it makes no difference since a constant shift
in energy doesn’t do anything.) In this case, the group velocity obeys p = γmvg, as expected.
Just as for a classical standing wave, ω is the same everywhere for quantum standing waves.
Since energy is related to frequency, these standing waves are also states of definite energy.
In the semiclassical limit, the standing waves must satisfy
I
pdx = (2πn + α)ℏ =

n +
α
2π

h.
The extra phase α depends on how the particle gets reflected at the endpoints of its motion.
Remark
The left-hand side of the quantization condition above is precisely the adiabatic invariant
from M4, which stays the same if we change the system parameters slowly. This ensures the
quantization condition is preserved over time, as it must be for self-consistency. If you instead
change the system parameters quickly, the integral is not preserved, but that’s because the
change causes transitions from one energy level to another (i.e. to waves with different n).
[2] Problem 3. Consider a one-dimensional box of length L, with hard walls. We can think of these
hard walls as a potential V (x) that is zero inside the box and infinite outside the box. It can be
3Kevin Zhou Physics Olympiad Handouts
shown that each of these “hard” boundaries contributes π to α, so in this problem we have α = 2π,
which is equivalent to just taking α = 0.
(a) Find the energy levels of a particle of mass m.
(b) Now suppose the particle is replaced with a photon, with E = pc. Find the allowed energies.
The frequencies you found in part (b) correspond to the standing wave frequencies forelectromagnetic
waves in a box with reflecting (i.e. perfectly conducting) walls.
Solution. (a) The quantization condition is that
2pL = 2πnℏ =⇒ p = πnℏ/L.
Thus, E = p2/2m = π2n2ℏ2
2mL2 . Note that this solution only makes sense for n ≥ 1.
(b) We see that p is the same, and E = pc = πnℏc/L.
[2] Problem 4. Now consider a particle of mass m in the potential V (x) = kx2/2. In this case, the
particle turns around at a point where the potential energy gradually increases from below the
particle’s energy E to above it. It can be shown that each of these “soft” boundaries contributes
π/2 to α, so that for this potential we can take α = π.
Show that the energy levels are
En = ℏω0

n +
1
2

, ω0 =
r
k
m
.
This system is called the quantum harmonic oscillator, and remarkably, this is the exact answer,
even though we used an approximation to get it. This result will be used in several problems below.
Solution. Here we have the quantization condition
2
Z A
−A
mω0
p
A2 − x2 dx = 2πℏ(n + 1/2).
Note that the integral is just the area of a half-ellipse, so
πA2
mω0 = 2πℏ(n + 1/2),
so
E =
1
2
mω2
0A2
= ℏ
p
k/m(n + 1/2) = ℏω0(n + 1/2)
as desired. Note that this solution makes sense for n ≥ 0.
[3] Problem 5.  W 1 0USAPhO 2015, problem A1. (The use of the WKB approximation in this problem
is technically incorrect: the problem takes α = π when it actually should take α = 3π/2. Often,
people will apply the WKB approximation in a sloppy way because they’re only after rough estimates
at small n, or the limiting behavior at n ≫ 1. In the previous problems, we treated α properly
because doing so will give the exact correct answer in those cases.)
[5] Problem 6.  T 1 0IPhO 2006, problem 1. This is a neat problem which illustrates the effect of a
gravitational field on quantum particles, as well as the basics of interferometry, a subject developed
further in W2. Give this a try even if it looks tough; only the ideas introduced above are needed!
4Kevin Zhou Physics Olympiad Handouts
Idea 3: Bohr Quantization
In general, pdx may be replaced by any generalized momentum/position pair. For example,
I
Ldθ = nh.
When angular momentum is conserved, the left-hand side is simply 2πL, immediately giving
L = nℏ
which is Bohr’s quantization condition. In a system of particles rotating together, L stands
for the total angular momentum of the system.
Compared to back-and-forth linear motion, covered in idea 2, rotation is different because
it’s inherently periodic. For rotation, the integer n can be positive or negative, representing
a particle going clockwise or counterclockwise. Also, there is no analogue of the α phase
factor because the particle just rotates all the way around; it never gets reflected.
Example 1
Find the energy levels and orbit radii of the electron in the hydrogen atom using Bohr
quantization.
Solution
We postulate a circular orbit, and quantize the angular momentum. We have
mv2
r
=
e2
4πϵ0r2
, L = mvr = nℏ.
Solving the second equation for v and plugging into the first gives
r =
4πϵ0ℏ2
me2
n2
= a0n2
where a0 = 5.3 × 10−11 m is called the Bohr radius; these are the allowed orbit radii. To get
the energies, we use the standard result for circular motion with an inverse square force that
the total energy is half the potential energy, so
E = −
e2
8πϵ0r
= −
me4
2(4πϵ0)2ℏ2
1
n2
.
Evidently, they get more and more closely spaced together as n increases. The big constant
in front is called the Rydberg, and is equal to 13.6eV.
[1] Problem 7. Find the energy levels of positronium, a bound state of a positron and electron.
Solution. You can do this through an explicit analysis very similar to the example. On the other
hand, we can also use the idea of reduced mass introduced in M6. The reduced mass of positronium
5Kevin Zhou Physics Olympiad Handouts
is m/2, so replacing m with m/2 in the example’s answer gives
E = −
me4
4(4πϵ0)2ℏ2
1
n2
.
[2] Problem 8 (USAPhO 2004). Electrons are accelerated from rest through a potential V into a
cloud of cold atomic hydrogen. A series of plates with aligned holes select a beam of scattered
electrons moving perpendicular to the plates. Immediately beyond the final plate, the electrons
enter a uniform magnetic field B perpendicular to the beam; they curve and strike a piece of film
mounted on the final plate.
When the film is developed, a series of spots is observed. The distances between the hole and
the two most distant spots are measured. You may assume that the film is large enough to have
intercepted all of the electrons, i.e. that there are no spots farther from the hole than those shown.
The number of spots shown is not necessarily accurate.
Make the approximation that the mass of the hydrogen atom is much larger than the mass of the
electron. Assume that each electron scatters off only one atom, which is initially in the ground state
(lowest energy state) and has negligible thermal velocity. Determine B, V , and the total number of
spots on the film.
Solution. This is USAPhO 2004, problem B1, and you can check its official solutions.
[2] Problem 9. A rotor consists of two particles of mass m connected by a rigid rod of length L.
(a) Find the energy levels if the particles are not identical.
(b) Find the energy levels if the particles are identical. (Hint: recall that the closed loop integrals
in the previous ideas are over paths that take the system back to its original state.)
You might find it disturbing that the result is so different if the particles are or aren’t completely
identical, but it’s a well-verified fact about molecular rotational energy levels. For example, if the
two atoms in the molecule had nuclei of different isotopes, we measure the result of part (a), and if
they were the same isotope, we measure the result of part (b).
Solution. (a) We see that the angular momentum Lz is constant, so the quantization condition
says Lz · 2π = nh, or Lz = nℏ. Then, E = 1
2I L2
z = n2ℏ2
mL2 .
(b) The point here is that after just a π rotation, the system is back in its original state, because
the particles are identical. Thus, Lz · π = nh, or Lz = 2nℏ, or E = 4n2ℏ2
mL2 .
[3] Problem 10.  h 1 0INPhO 2020, problem 3. A problem on the Bohr model for multi-electron atoms.
In part (c), you should apply Bohr quantization to each electron individually. This isn’t obvious
from the question statement, but it’s the right thing to do because the two electrons orbit the
nucleus with opposite spins, and hence occupy independent quantum states.
6Kevin Zhou Physics Olympiad Handouts
[3] Problem 11. INPhO 2016, problem 6.
Remark
In popular science, people sometimes speak of “quantizing” a system as similar to making
everything discrete. But as you’ve seen above, it’s more complicated than that. For instance,
position never becomes discrete; instead, we integrate over it.
The general rule in quantum mechanics is that confinement to a finite “size” causes the
conjugate variable to become discrete. For example, above you looked at several examples of
particles bound to potentials. These are confined in space, and hence have discrete orbits in
phase space by idea 2, and thus discrete energies. But a free particle not bound to a potential
can have any energy, because E = p2/2m and there is no condition at all on p. On the
other hand, angles are always confined to the finite range [0,2π], which is why the angular
momentum of any system is quantized.
[2] Problem 12. Neutrinos are quantum particles with extremely low masses. Because their masses
are so low, they are almost always produced moving near the speed of light. In the Sun, neutrinos
are produced in a superposition of two types, one with mass m1 and another with mass m2.
(a) Suppose the neutrino is produced with definite energy E. The part of the neutrino wave
with mass m1 has wavenumber k1, and the part with mass m2 has wavenumber k2. Find an
approximate expression for k1 − k2 in the ultrarelativistic limit E ≫ m1,m2.
(b) Find the distance L that the neutrino travels so that the relative phase between these waves
changes by 2π. This is the characteristic wavelength of “neutrino oscillations”. Evaluate it
numerically assuming the typical values E = 10keV, m1c2 = 0.010eV, and m2c2 = 0.013eV.
Solution. (a) Before starting, we should use the ultrarelativistic approximation to simplify things.
We note that c2p2 = E2 − m2c4, and taking the square root gives
p =
E
c
p
1 − (mc2/E)2 ≈
E
c

1 −
m2c4
2E2

by the binomial theorem. Using the de Broglie relation, we have
k1 − k2 =
p1 − p2
ℏ
≈
(m2
2 − m2
1)c3
2ℏE
.
(b) Since the wavenumber is the rate of change of phase, we simply have
L =
2π
k1 − k2
=
4πℏE
(m2
2 − m2
1)c3
= 360m.
Remarkably, even though the masses are so small and the energy so high, the oscillation
wavelength turns out to be a macroscopically reasonable length.
2 Higher Dimensions
7Kevin Zhou Physics Olympiad Handouts
Idea 4
For a system with more than one degree of freedom, the WKB quantization condition holds
for each individually, I
pi dxi =

ni +
αi
2π

h.
In this case, there can be multiple quantum states with a given energy, in which case we say
that energy level is degenerate; the number of states with that energy is called the degeneracy.
[2] Problem 13. Consider a particle of mass m in a two-dimensional box of width and length L, with
hard walls. This is the two-dimensional analogue of problem 3, and again α1 = α2 = 0.
(a) Write down the energy of the state with quantum numbers n1 and n2.
(b) What is the lowest energy level with a degeneracy of greater than 2?
Solution. (a) There are two quantization conditions, for the two dimensions of the box,
I
p1 dx1 = n1h,
I
p2 dx2 = n2h
from which we conclude that
p1 =
πn1ℏ
L
, p2 =
πn2ℏ
L
.
This yields an energy of
E =
π2ℏ2
2mL2
(n2
1 + n2
2).
To have a sensible standing wave, we need both n1 and n2 to be positive.
(b) The first number that can be written as the ordered sum of two squares in more than two
ways is
50 = 72
+ 12
= 52
+ 52
= 12
+ 72
corresponding to an energy E = 25π2ℏ2/mL2.
[4] Problem 14. Consider a particle of mass m in the potential V (x,y) = kr2/2. This is the two-
dimensional analogue of problem 4. It is also the potential experienced by an electron in the obsolete
“plum pudding” model of the atom, where they are embedded in a ball of uniform charge density.
(a) By working in Cartesian coordinates, find all of the energy levels, as well as the number of
states within each energy level, called the degeneracy.
(b) [A] Now repeat the exercise in polar coordinates. In this case the integrals
I
pr dr,
I
Ldθ
are quantized. Find the energy levels and their degeneracies. Note that for the radial motion,
you will have to use the effective potential, as covered in M6. You will run into a difficult
integral, so you may use the fact that
Z C+
√
C2−D2
C−
√
C2−D2
dx
r
2C
x
−
D2
x2
− 1 = (C − |D|)π
valid for |D| ≤ C. How does your answer compare to that of part (a)?
8Kevin Zhou Physics Olympiad Handouts
Solution. (a) Let ω =
p
k/m. As always, each direction contributes energy ℏω(n + 1/2), so the
total energy is ℏω(nx + ny + 1). The number of states with energy ℏωn is the number of
solutions to nx + ny = n − 1, which is simply n.
(b) By conservation of energy and angular momentum, we have
E =
1
2
kr2
+
1
2
m(ṙ2
+ v2
θ) =
1
2
kr2
+
L2
2mr2
+
p2
r
2m
.
Quantizing the angular motion gives
I
Ldθ = 2πL = nθh
which means L = nθℏ as usual. Let a ≤ r ≤ b where ṙ = 0 at r = a or r = b. Then quantizing
the radial motion (accounting for two “soft” boundaries) gives
(nr + 1/2)h = 2
Z b
a
dr
s
2mE −
n2
θℏ2
r2
− ω2m2r2.
To clean this up a bit, let’s set ℏ = k = m = 1 for now and put them back by dimensional
analysis at the end. Then the equation reduces to
2π(nr + 1/2) = 2
Z b
a
dr
s
2E −
n2
θ
r2
− r2.
By substituting u = r2 we find
2π(nr + 1/2) = 2
Z b′
a′
du
2
√
u
s
2E −
n2
θ
u
− u =
Z b′
a′
du
s
2E
u
−
n2
θ
u2
− 1
where a′ and b′ are the zeroes of the quantity inside the square root,
a′
= E −
q
E2 − n2
θ, b′
= E +
q
E2 − n2
θ.
This incidentally shows that we need |nθ| ≤ E for the result to make sense. Using the provided
integral, we find
2π(nr + 1/2) = (E − |nθ|)π.
The constraint |nθ| ≤ E then translates to nr ≥ 0, which makes sense. Solving for E gives
the final result,
E = 2nr + |nθ| + 1.
By dimensional analysis, the right-hand side needs a factor of ℏω to become an energy, so
E = ℏω(2nr + |nθ| + 1).
The result is identical to that of part (a). The lowest energy level is E = ℏω, corresponding
to (nr,nθ) = (0,0). The next is E = 2ℏω, corresponding to (nr,nθ) = (0,±1). The next is
E = 3ℏω, corresponding to (nr,nθ) = (1,0) or (0,±2), and so on.
9Kevin Zhou Physics Olympiad Handouts
Remark
Sommerfeld applied an analysis like that of part (b) of problem 14 to the Bohr model,
yielding the semiclassical orbits which are ellipses with the nucleus at the focus. (In fact, if
you’re so inclined, you can do this too, using the same provided integral.) This accounted for
the quantum numbers n and ℓ in hydrogen. The quantum number m comes from additionally
quantizing Lz, which implies that the elliptical orbits can only occur in certain planes, an
idea known as “space quantization”. Sommerfeld even managed to compute relativistic
corrections to the energy levels.
With all this included, the Bohr theory provides a complete description of the energy
levels of hydrogen, except that (1) the ℓ = 0 orbitals are missing, since they would have
to go straight through the nucleus, (2) space quantization seems artificial and breaks
rotational symmetry, and (3) the number of states isn’t quite right, a deficiency that would
later be fixed by including spin. Many complicated attempts were made to patch these
problems, or to extend the theory to multi-electron atoms, but they were forgotten af-
ter the modern theory of quantum mechanics (in terms of the Schrodinger equation) appeared.
However, what you’ve learned above is not completely irrelevant today. The correspondence
principle is the idea that quantum results should smoothly transition to classical ones in
the limit ℏ → 0, which in this context means sending the quantum numbers to infinity.
And that’s exactly what happens. For high quantum numbers, you can superpose atomic
orbitals of nearby energy to create a sharply peaked wavefunction, just like how we could
create wavepackets from plane waves in W1. These peaks act like localized classical particles,
following the Bohr model’s orbits. Thus, the Bohr model is still useful for studying Rydberg
atoms, which are hydrogen-like atoms excited to very high energy levels. For some more
discussion of Sommerfeld’s results, see this paper.
[3] Problem 15 (Cahn). A crude model of an electron bound to an atom is a particle of mass m
attached to a one-dimensional spring, with spring constant k and hence angularfrequency ω =
p
k/m.
Consider two such atoms.
(a) Write down the energy levels of the system, assuming the atoms are completely independent.
How many states correspond to each energy?
(b) Let the electrons have positions xi relative to their respective equilibrium positions. Now
suppose the atoms are brought close together, causing the electrons to repel. For simplicity,
we represent this in terms of an extra potential energy term k′x1x2, where k′ is small. Find
the new energy levels of the system exactly. (Hint: this can be done with a clever change
of variables. However, you have to be careful because changing to new coordinates x′
i also
requires changing the momenta; after all, if we didn’t, then the quantization condition of
idea 2 would change, leading to different energy levels! If K is the kinetic energy, and you are
using position variables xi, then the momenta should be defined as pi = ∂K/∂ẋi.)
(c) Your answer should not make sense for large k′. Physically, what is going on?
Part (b) gives a simple example of how energy levels “split” in the presence of interactions.
10Kevin Zhou Physics Olympiad Handouts
Solution. (a) This is just two copies of an ordinary harmonic oscillator, so En,m = ℏω(n+m+1)
for n,m ≥ 0. The lowest energy has one corresponding state (n = m = 0), the next one has
two ((n,m) = (1,0) or (0,1)), the next has three, and so on.
(b) The energy of the system has the form
E =
p2
1
2m
+
p2
2
2m
+
1
2
kx2
1 +
1
2
kx2
2 + k′
x1x2.
This can be brought into a simplified form by expanding in normal modes, just as you saw in
M4. Specifically, we define
y1 =
x1 + x2
√
2
, y2 =
x1 − x2
√
2
.
The corresponding momenta, defined as suggested in the hint, are
p′
1 =
p1 + p2
√
2
, p′
2 =
p1 − p2
√
2
.
In terms of these new variables, we have
E =
p′
1
2
2m
+
p′
2
2
2m
+
1
2
(k + k′
)y2
1 +
1
2
(k − k′
)y2
2.
But this is just the form of two independent harmonic oscillators, with resonant angular
frequencies
p
(k ± k′)/m. So the energy levels are
En,m =
ℏ
√
m

(n + 1/2)
√
k + k′ + (m + 1/2)
√
k − k′

.
This can be written a bit more simply by Taylor expanding, which gives
En,m ≈ ℏω

n

1 +
k′
2k

+ m

1 −
k′
2k

+ 1

= ℏω

(n + m + 1) + (n − m)
k′
2k

.
In other words, an energy level that contains N states splits into N separate, closely spaced
energy levels. This behavior is ubiquitous in quantum mechanics. This trick of turning
everything into a bunch of independent quantum harmonic oscillators by using normal modes
is also very important; it’ll basically be the bedrock of many graduate physics courses.
(c) For k′ > k, the energy becomes an imaginary number. When k′ is this big, the repulsion
between the electrons is so strong that they both just shoot off to infinity in opposite directions.
That is, the energy is not bounded below; the energy can be lowered to negative infinity by
increasing the separation. That means the electrons are not bound at all, so there aren’t
discrete energy levels.
Example 2
A nonrelativistic particle of mass m is in a cubical box with side length L and hard walls.
Find the approximate number of quantum states with energy at most E0, where E0 is large.
11Kevin Zhou Physics Olympiad Handouts
Solution
Using the same reasoning as in previous problems, we apply “hard wall” boundary conditions,
requiring the wavefunction to go to zero at the boundary. Thus, the wavefunction is
ψ ∝ sin(kxx)sin(kyy)sin(kzz)
where
ki =
π
L
ni, ni positive integer
and the energy is
E =
p2
2m
=
ℏ2k2
2m
.
The simplest way to proceed is to think in terms of “momentum space”, an abstract space
whose axes are px, py, and pz. The allowed states form a grid in the first octant of momentum
space, with a volume of (πℏ/L)3 for each state. The surface E = E0 corresponds to a sphere
of radius
√
2mE0. Therefore the number of states with energy at most E0 is approximately
N =
1
8

4
3
π(2mE0)3/2

πℏ
L
−3
.
Now let’s solve the problem a slightly different way: suppose the box has periodic boundary
conditions, so that the right side is identified with the left side, and so on. In this case, the
wavefunctions can all be written in the form
ψ ∝ exp(i(kxx + kyy + kzz))
but now the allowed values of the wavenumbers are
ki =
2π
L
ni, ni integer.
The allowed states form a grid in all of momentum space, not just the first octant, with a
volume of (2πℏ/L)3 for each state. That is, while the volume around each state is eight times
as large, the states now occupy eight octants instead of one. Then the overall density of
states is still the same, and the number of states with energy at most E0 is approximately
N =

4
3
π(2mE0)3/2

2πℏ
L
−3
which matches the result for hard walls. The point of this computation is to show that
when we care about the statistical properties of many states, the boundary conditions won’t
matter. In practice, you’ll see both kinds of boundary conditions quite often.
If you find the differences between the two boundary conditions confusing, you’re not alone.
In his original derivation of blackbody radiation, Lord Rayleigh used “hard wall” boundary
conditions but also allowed negative ni, leading to a factor of 8 error. Jeans corrected it,
which is why the result is now called the Rayleigh–Jeans law.
[4] Problem 16. @ 1 0Do the following JPhO problem. This pedagogical problem introduces the WKB
12Kevin Zhou Physics Olympiad Handouts
approximation and phase space, reviewing everything covered above, and applies it to “clusters” of
atoms. You can skip sections I and III, which are covered elsewhere on this problem set.
Solution. See the official solutions here.
Remark
Because matter has wave properties, particles such as electrons can exhibit interference effects,
like those covered in W2. For example, you can run a double-slit experiment firing individual
electrons at a time and seeing where they hit the screen, which will gradually build up an
interference pattern. You’ll see an example of this in the next problem.
[4] Problem 17. @ 1 0IPhO 1993, problem 3. (Hint: to do the final part of this problem, you should
not try to compare the total path lengths traversed by the electrons. That would be very hard, and
worse, it won’t give the right answer, because the potential from the wire also affects the electrons’
phases. Instead, you should use the facts about wavefronts mentioned in W2. That is, waves always
propagate perpendicular to wavefronts, and all points on a wavefront have the same phase.)
3 The Uncertainty Principle
Idea 5: Heisenberg Uncertainty
So far we have treated a quantum particle as having a well-defined position and momentum,
but in reality the uncertainties in the position and momentum obey
∆x∆p ≥
ℏ
2
where, as in P2, the uncertainties may be interpreted as standard deviations. The “semi-
classical limit” used in the rest of this problem set simply corresponds to the case where the
required uncertainty is relatively small, which is reached for energy levels n ≫ 1. Occasionally,
Olympiad questions will ask you to use the Heisenberg uncertainty principle to make a very
rough estimate. In these cases, the constant factors will not matter.
Idea 6: Energy-Time Uncertainty
There are two commonly used versions of the energy-time uncertainty principle. If the energy
of a system is only measured for a finite time ∆t, it must have a finite uncertainty ∆E in
its energy. In addition, if a system significantly changes its state in time ∆t, then its energy
must have been uncertain by a finite amount ∆E. In both cases, we have
∆E ∆t ≥
ℏ
2
.
A third common statement of the energy-time uncertainty principle is “for a short time ∆t, a
system can violate energy conservation by an amount ∆E”. This is wrong, because quantum
systems always conserve energy; systems that naively seem to violate energy conservation
simply didn’t have a well-defined energy in their initial state to begin with. However, thinking
this way will usually get you the right answers, essentially because of dimensional analysis.
13Kevin Zhou Physics Olympiad Handouts
Example 3
Consider once again a particle of mass m attached to a one-dimensional spring, with natural
angular frequency ω. Use the uncertainty principle to estimate the minimum possible energy
of the particle, and compare it with the result of problem 4.
Solution
Suppose the uncertainties in position and momentum are ∆x and ∆p. Then the potential
energy is of order k(∆x)2/2 and the kinetic energy is of order (∆p)2/2m. Dropping constants,
E ∼ k(∆x)2
+
(∆p)2
m
≳ k(∆x)2
+
ℏ2
(∆x)2m
where we applied the uncertainty principle. The ground state minimizes the energy, which is
achieved when (∆x)2 ∼ ℏ/
√
km. In this case, the energy is of order kℏ/
√
km ∼ ℏ
p
k/m ∼ ℏω,
which is just what we found earlier. (A similar derivation can be used to derive the energy
of the ground state of hydrogen, along with the Bohr radius; try it!)
Remark
We can also “solve” the above problem with the energy-time uncertainty principle incorrectly.
The only timescale in the problem is 1/ω, so
∆E ≳
ℏ
∆t
∼ ℏω
so E ≳ ℏω. However, in reality the ground state has no energy uncertainty; its energy is
simply the ground state energy. Another way of saying this is that a particle can hang out
in the ground state forever, so ∆t is infinite and hence ∆E is zero. This incorrect derivation
gives the right answer just because it’s the only possible answer by dimensional analysis.
Thus, a sloppy problem might ask you to do it.
Example 4
Consider a single slit diffraction experiment, where photons of wavelength λ pass through a
slit of width a. If the screen is a large distance D away, roughly how wide is the resulting
diffraction pattern on the screen?
Solution
The photon has a momentum px = ℏk = h/λ, and passing through the slit necessarily gives
it a transverse momentum uncertainty of order
∆py ∼
ℏ
a
which means an angle uncertainty of order
∆θ ∼
∆py
px
∼
λ
a
.
14Kevin Zhou Physics Olympiad Handouts
Therefore, using basic geometry, the size of the pattern on the screen is
∆y ∼ D∆θ ∼
Dλ
a
.
This is the approximate width of the central maximum for single slit diffraction, as we found
in W2. The reason the result is the same is that light acts like a wave both classically and
quantum mechanically; the quantum version of the derivation is just the same as the classical
version, but with “everything multiplied by h”. What’s new about this derivation is that it
also applies for matter particles, which have λ = h/p.
Example 5
The Higgs boson has a mass of 125GeV and a lifetime of about τ = 1.6 × 10−22 s. About
what percentage uncertainty must a measurement of a Higgs boson’s mass have?
Solution
Decay is a significant change in the particle’s state, and this change happens over a time τ,
which means the energy uncertainty is
∆E ∼
ℏ
τ
= 7 × 10−13
J = 0.004GeV.
When we measure the Higgs boson’s mass, we really measure the E = mc2 energy released
when it decays, so the unavoidable uncertainty of the mass is ∆E/E ∼ 0.003%. (But the
actual measured uncertainties are much higher, due to a variety of other effects.)
[1] Problem 18 (Krane 4.39). An atomic beam is prepared by heating a collection of atoms to a
temperature T and allowing the beam to emerge through a hole of diameter d in one side of the
oven. Show that the uncertainty principle causes the diameter of the beam, after traveling a length
L, to be larger than d by an amount of order Lℏ/d
√
mkBT, where m is the mass of an atom.
Solution. The energy of the particles is on order kBT, so v ∼
p
kBT/m. Thus, the time taken to
travel the length L is t ∼ L/v ∼ L
p
m/kBT. Now, the uncertainty in the vertical direction is d, so
the range of vertical momenta is ∼ ℏ/d, so the range of vertical speeds is ∼ ℏ/md. Thus, in the
time t, we get a spread of order
tℏ
md
=
Lℏ
d
√
mkBT
,
as desired.
[2] Problem 19 (Insight 8.26). When helium is cooled to extremely cold temperatures, it becomes
a superfluid, an exotic type of liquid that can flow with zero dissipation. These strange properties
occur because quantum mechanical effects are large, making the quantum uncertainty in the position
of each helium atom on the same order as the separation between atoms.
(a) Superfluid helium has density ρ and a helium atom has mass m. Estimate the temperature T
at which helium becomes a superfluid. This is closely related to, but not quite the same thing
as Bose–Einstein condensation, a phase transition that bosons undergo at low temperatures.
15Kevin Zhou Physics Olympiad Handouts
(b) Numerically evaluate T, using ρ ∼ 100kg/m3 and m ∼ 7 × 10−27 kg.
Solution. (a) The energy is of order kBT, so the momentum is of order p ∼
√
2mE ∼
√
mkBT.
This leads to a spread in position by the uncertainty principle of
∆x ∼
ℏ
p
∼
ℏ
√
mkBT
.
The volume per helium atom is m/ρ, giving a typical separation of (m/ρ)1/3. Setting this
equal to ∆x and solving for T gives
T ∼
ρ2/3ℏ2
kBm5/3
.
(b) Plugging in the numbers gives T ∼ 0.7K. The actual answer is 2.172K, so this isn’t bad for
such a rough estimate!
[3] Problem 20. A neutron is inside a small cubical box of side length d. Ignore gravity.
(a) Estimate the minimum possible pressure on the walls using the uncertainty principle, dropping
all numeric factors. In the next two parts, we’ll calculate the pressure more carefully.
(b) Calculate the average pressure on the walls by treating the neutron as a classical particle
bouncing back and forth, with the same momentum as expected for the ground state in the
WKB approximation.
(c) Calculate the average pressure on the walls by finding the energy E of the ground state using
the WKB approximation, and the definition of pressure, P = −∂E/∂V . (This actually gives
the exact answer. Of course, by dimensional analysis, taking P ∼ E/V would also produce
the right answer, up to a constant factor.)
Solution. (a) Ignoring numeric factors, the uncertainty of position in each dimension is ∼ d, so
the uncertainty of each component of momentum is ∆px ∼ ℏ/d. Consider the pressure on the
faces in the yz-plane. The time between collisions is t ∼ d/vx = md/px, and the impulse is
∼ px. Thus the force is ∼ p2
x/md, giving a pressure ∼ p2
x/md3. Setting px ∼ ∆px gives
Pmin ∼
ℏ2
md5
which you could also deduce solely from dimensional analysis.
(b) Earlier, we found that pi = π
dniℏ. The time between collisions is t = 2md/pi and the impulse
is 2pi, giving a pressure of p2
i /md3. Note that this is a directional pressure, i.e. if the pi were
different, the pressures on each wall would be different.
The pressure on the wall perpendicular to the i direction is
Pi =
π2ℏ2
md5
n2
i .
For the ground state, the ni are all equal to one, so we have a uniform pressure,
P =
π2ℏ2
md5
which is the same order of magnitude as in part (a).
16Kevin Zhou Physics Olympiad Handouts
(c) Earlier, we found that for a two-dimensional box,
E =
π2ℏ2
2md2
(n2
x + n2
y).
This generalizes straightforwardly to a three-dimensional box. In the ground state, nx = ny =
nz = 1, giving
E =
π2ℏ2
2md2
(1 + 1 + 1) =
3π2
2
ℏ2
mV 2/3
.
Carrying out the derivative,
P =
3π2
2
2
3
ℏ2
mV 5/3
=
π2ℏ2
md5
.
As expected, this coincides with the answer to (b), since both ultimately originate from the
same approximation.
[3] Problem 21.  ^ 1 0USAPhO 2018, problem B2.
[3] Problem 22. Classically, an electron orbiting a proton with angular frequency ωo emits radiation
with angular frequency ωc = ωo, as covered in E7. On the other hand, quantum mechanically
the energy levels are discrete, and using the de Broglie relation ∆E = ℏω indicates the angular
frequencies of radiation emitted when the electron drops between energy levels are discrete as well.
The classical and quantum models thus seem to be radically different, but in the limit n → ∞ where
quantum effects become negligible, the two should match.
(a) Suppose that the electron can orbit the proton in circular orbits with discrete radii rn. For
the nth orbit, compute the angular frequency ωc of the emitted radiation according to classical
mechanics.
(b) Now suppose the electron drops from the nth energy level to the (n−1)th energy level. Compute
the angular frequency ωq of the emitted radiation according to quantum mechanics, assuming
the orbits have radii rn.
(c) In the limit n → ∞, the results of parts (a) and (b) should coincide. Therefore, by equating
these results, infer how rn depends on n, and thus how L depends on n. If all goes well, you
should recover the result of Bohr quantization.
The reasoning here is exactly how Bohr came up with Bohr quantization in the first place. (The de
Broglie relation we had to use was motivated earlier through Planck’s law, as we showed in T2.)
Solution. (a) Classically, we need to balance the centripetal force with the Coulomb force,
mω2
0r =
e2
4πϵ0r2
.
Since ωc = ω0, we get
ωc =
s
e2
4πϵ0r3
nm
.
(b) The de Broglie relation tells us that ℏωq = En − En−1, so using standard results for circular
orbits in an inverse square potential,
ωq =
e2
4πℏϵ0
1
2

1
rn−1
−
1
rn

.
17Kevin Zhou Physics Olympiad Handouts
(c) Thinking of n as a large number, we can approximate

1
rn−1
−
1
rn

=
rn − rn−1
rn−1rn
≈
rn − rn−1
r2
n
≈
1
r2
n
drn
dn
.
Plugging this into the equation ωc = ωq and simplifying, we get
2ℏ
r
4πϵ0
e2m
=
1
√
rn
drn
dn
.
Separating and integrating, we have
rn =
4πϵ0ℏ2
e2m
n2
.
There could be a constant of integration, but for large n, it’s negligible, and we can conclude
that for large n, rn ∝ n2. On the other hand, we have
Ln = mvnrn = mωcr2
n ∝ r1/2
n
which means that for high n, Ln ∝ n.
This is as far as we can go, “rigorously”. The amazing thing is that this derivation is based
on ωc = ωq, which only holds at large n, along with approximations that only work at large
n, and also involves an unknown constant of integration. But if we just set the constant of
integration to zero, and assume the derivation works for all n, then you can check that we
recover L = nℏ, which happens to be exactly true in the real world!
[4] Problem 23. @ 1 0IPhO 2005, problem 3. You may skip part 4, since it’s quite similar to another
problem on this problem set.
4 Bosons and Fermions
So far, we’ve only consider the quantum states of individual particles. Now we’ll consider what
happens when we put many of these particles together. We will assume the particles do not interact,
which means their quantum states are just the same as the quantum states for individual particles.
If the particles are fermions, they obey the Pauli exclusion principle, which means no two can occupy
the same quantum state. If they are bosons, there is no such restriction; we’ll consider bosons first.
[3] Problem 24. USAPhO 2011 A4 is a neat problem, but it has some typos and unphysical assump-
tions; this is an improved version. Consider a simplified model of the electromagnetic radiation
inside a cubical metal box of side length L at temperature T. In this model, modes of the electric
field have spatial dependence
E(x,y,z) = E0 sin(kxx)sin(kyy)sin(kzz)
where one corner of the box lies at the origin and the box is aligned with the x, y, and z axes. For
simplicity, we will treat the electric field as a scalar, even though it actually has direction.
(a) The electric field must be zero everywhere at the sides of the box. What condition does this
impose on the ki?
18Kevin Zhou Physics Olympiad Handouts
(b) Show that for a typical box at room temperature, L ∼ 1m and T ∼ 300K, the quantity kBT
is much greater than ℏω0, where ω0 is the lowest nonzero mode angular frequency. Therefore,
for the rest of the problem, you may approximate kBT ≫ ℏω0.
(c) Each permitted value of the triple (kx,ky,kz) corresponds to a mode, which can be occupied
by any number of photons. Each photon has an energy E = ℏω, where ω = ck is the angular
frequency of the mode. How many modes have an energy per photon of at most kBT?
(d) As a crude approximation, suppose that in thermal equilibrium, each mode with energy per
photon at most kBT contains exactly one photon, while all other modes contain no photons.
Compute the total energy of the photons in the box. (Answer: (kBT)4L3/8π2ℏ3c3.)
Note that the procedure here is different from what we did above. Before, we started with particles
and quantized
H
pdx to get the allowed quantum states. Here, we’re treating a situation with many
particles (photons), which are excitations of an underlying field (the electromagnetic field). In this
case, we found the (normal) modes of the classical field, then quantized by saying that photons
could occupy these modes. This is the methodology of quantum field theory.
Solution. (a) We see that kxL = nxπ, kyL = nyπ, and kzL = nzπ.
(b) Plugging in the numbers, we have kBT/ℏω0 ∼ 2 × 104 ≫ 1, as desired.
(c) Define the vector n = (nx,ny,nz). For each mode, the energy per photon is
E = ℏω = ℏck =
πℏc
L
q
n2
x + n2
y + n2
z.
Moreover, the values of the ni are positive integers. Therefore, the quantum states we are
looking for occupy an eighth of a sphere in phase space, bounded by states with
nmax =
EmaxL
πℏc
.
Because kBT ≫ ℏω0, there are many such modes, so we can find the answer approximately
by computing the volume of this region. The number of modes (i.e. the number of values of
n) with an energy per photon of at most Emax is thus
N(Emax) =
1
8

4
3
πn3
max

=
1
6π2

EL
ℏc
3
.
In this case, the requested answer is
N(kBT) =
1
6π2

kBTL
ℏc
3
.
Note that this is different from the official USAPhO solution, because they also allowed
negative values for the ni. This is incorrect, because flipping the sign of one of the ni gives
you exactly the same mode, up to an irrelevant −1 factor.
(d) We sum over the modes. For each occupied mode, we assume the energy stored is E, so
U =
Z
E dN =
Z kBT
0
E
dN
dE
dE =
1
6π2

L
ℏc
3 Z kBT
0
E(3E2
)dE =
1
8π2
(kBT)4L3
ℏ3c3
.
19Kevin Zhou Physics Olympiad Handouts
[4] Problem 25. The final result of the problem above is correct dimensionally, but has incorrect
numerical factors because of the crude approximations made. In this problem we’ll do a more
careful analysis to get the right result. This question is self-contained, but background from T1
and T2 will be helpful.
(a) Consider a quantum mode that can support photons of energy E. The mode can be occupied
by any whole number of photons. Thus, using the Boltzmann distribution, the probability of
having n photons is
pn ∝ e−nE/kBT
.
Show that the expected number of photons in the mode is
⟨n⟩ =
1
eE/kBT − 1
.
This is the Bose–Einstein distribution.
(b) Sketch ⟨n⟩ as a function of E. How does it behave at high and low E, and do those results
make physical sense?
(c) Using the Bose–Einstein distribution, show that the total energy is
U =
L3ℏ
π2c3
Z ∞
0
dω
ω3
eℏω/kBT − 1
where ω is the angular frequency. You’ll have to multiply by a factor of two, because there
are two independent photon polarizations for each mode we found above. (Note that if we
open the box, the photons will fly out, and the frequency distribution of the emitted light will
be given by the integrand; this yields Planck’s law for blackbody radiation.)
(d) [A] Using an appropriate substitution, show that U is a dimensionful constant times the
dimensionless integral Z ∞
0
dx
x3
ex − 1
.
To evaluate this integral, expand the denominator as a power series, integrate each term
individually, and use the fact that the Riemann zeta function obeys
ζ(s) =
∞ X
n=1
1
ns
, ζ(4) =
π4
90
.
When the smoke clears, you should find that
U =
π2
15
(kBT)4 L3
(ℏc)3
.
Solution. (a) We see that
⟨n⟩ =
P
n ne−nE/kBT
P
n e−nE/kBT
=
eE/kBT /(eE/kBT − 1)2
eE/kBT /(eE/kBT − 1)
=
1
eE/kBT − 1
,
as desired.
20Kevin Zhou Physics Olympiad Handouts
(b) ⟨n⟩ as a function of E looks like this:
⟨n⟩
kBT
E
For modes with low E, we have ⟨n⟩ ≈ kBT/E ≫ 1, so the energy stored in this mode is
approximately ⟨n⟩E ≈ kBT. That makes physical sense: in this limit where there are lots
of photons, their discreteness doesn’t matter, so the mode can be treated classically, getting
energy kBT by the equipartition theorem.
For modes with high E, we have ⟨n⟩ ≈ e−E/kBT ≪ 1. This also makes sense, because in this
limit there isn’t enough thermal energy to significantly excite the modes.
(c) The logic is exactly the same as part (c) of the previous problem, but instead of saying that
some modes have 1 photon and others have 0 photons, we just assign the proper ⟨n⟩ photons
to every mode. Then
U =
Z
⟨n⟩E dN =
1
2π2

L
ℏc
3 Z ∞
0
⟨n⟩E3
dE.
As stated, we multiply by a factor of 2 to account for the two polarizations per mode. We
also change variables from E to ω using E = ℏω. This gives
U =
L3ℏ
π2c3
Z ∞
0
dω
ω3
eℏω/kBT − 1
just as desired.
(d) Now we substitute x = ℏω/kBT, where dx = ℏdω/kBT.
U =
L3ℏ
π2c3
Z ∞
0

kBT
ℏ
dx

(kBTx/ℏ)3
ex − 1
=
(kBT)4L3
π2c3ℏ3
Z ∞
0
dx
x3
ex − 1
.
We can rearrange the integral into
I =
Z ∞
0
dx
x3
ex − 1
=
Z ∞
0
e−x
x3 1
1 − e−x
dx.
Recognizing 1/(1 − e−x) as a geometric series
P∞
n=0(e−x)n, we can represent the integral as
I =
Z ∞
0
∞ X
n=0
x3
e−(n+1)x
dx.
21Kevin Zhou Physics Olympiad Handouts
We can reindex this since the only instance of n is n + 1, so we can start the summation at
n = 1. Since we can integrate this term by term, we can change the order of the integral and
summation, then integrate by parts to get
I =
∞ X
n=1
Z ∞
0
x3
e−nx
dx =
∞ X
n=1
Z ∞
0
(3x2
dx)

e−nx
n

=
∞ X
n=1
Z ∞
0
(6xdx)

e−nx
n2

=
∞ X
n=1
Z ∞
0
(6dx)

e−nx
n3

=
∞ X
n=1
6
n4
= 6ζ(4).
Putting this into our original expression gets
U =
π2k4
B
15c3ℏ3
L3
T4
.
[5] Problem 26.  h 1 0APhO 2002, problem 1. This useful problem covers the other common example
of a quantized bosonic field. In the above problems, we quantized the electromagnetic field to get
photons. Here, we quantize a displacement field to get phonons.
Solution. See the official solutions. But they’re badly formatted, so I’ll also list the answers here.
(a) mẌn = S(Xn+1 − Xn) − S(Xn − Xn−1)
(b) ω2 = (4S/m)sin2
(ka/2), k = π/L,2π/L,...,Nπ/L, ωmax = 2
p
S/m
(c) ℏω/(eℏω/kBT − 1)
(d) (L/π)∆k modes
(e) N modes, with
ET =
2N
π
Z ωmax
0
ℏω
eℏω/kBT − 1
dω
p
ω2
max − ω2
(f) It grows linearly in T for small T, then asymptotes to NkB = R.
Idea 7
In problems 24 and 25, we handled a system of bosons (specifically photons) by considering
the modes the photons could occupy, then calculating how many photons were in each mode.
This was the easiest route. If we had instead fixed the number of photons, then counted
the ways they could be distributed among the modes, the combinatorics would have been a
complete nightmare, because multiple photons can occupy the same mode.
Fermions, which obey the Pauli exclusion principle, are simpler, because no two can be in
the same state. For instance, if there are n noninteracting fermions in a system, then the
lowest energy state of the whole system consists of having one fermion occupy the lowest
energy state, the second occupy the second-lowest energy state, and so on. (Accounting for
interactions makes the problem much more complicated, because it means the energy of a
state depends on whether other states are occupied. However, you can explain a surprising
amount while completely neglecting interactions.)
22Kevin Zhou Physics Olympiad Handouts
Example 6: Tremaine–Gunn Bound
Suppose all of the dark matter in the galaxy is composed of a single kind of fermionic particle,
of mass m. The escape velocity of the galaxy is of order vesc ∼ 10−3c, and the dark matter
density near Earth is ρ ∼ 0.3GeV/(c2 cm3). What’s the minimum possible value of m?
Solution
The reason there’s a minimum possible value of m is that, as m gets smaller, we need more
dark matter particles. But the Pauli exclusion principle tells us that if we want to add more
particles, they need to have higher and higher energy, and at some point the particles will
have so much energy they won’t be bound to the galaxy at all.
To get a rough estimate, let’s suppose the galaxy has length scale L, so that we need at least
N ∼ ρL3/m dark matter particles. They need to have energy less than E0 ∼ mv2
esc. Plugging
this into the final result of example 2 and dropping all numeric factors gives
ρL3
m
≲
m3v3
escL3
ℏ3
which yields the bound
m ≳

ρℏ3
v3
esc
1/4
∼ 10eV/c2
.
A few decades ago, neutrinos were leading dark matter candidates, since they are light
fermionic particles that interact very weakly with ordinary matter. But we now know that
the neutrino mass is well below this bound, so that nice idea doesn’t work. On the other
hand, dark matter could still be composed of bosonic particles of much lighter mass.
[2] Problem 27. Consider a system with many noninteracting fermions, and many quantum states.
Each quantum state can be either empty or occupied by a fermion. We want to find the probability
that a given quantum state, of energy E, is occupied.
(a) To put a fermion in this state, we need to remove a fermion from some other state. Suppose
the energy released by doing this, suitably averaged, is µ. (This is the chemical potential, and
it depends on the temperature, the number of fermions, and the number of states and their
energies.) Using the Boltzmann distribution, show that the probability of occupancy is
⟨n⟩ =
1
e(E−µ)/kBT + 1
.
This is the Fermi–Dirac distribution.
(b) Sketch ⟨n⟩ as a function of E for small but nonzero temperature, as well as the limit attained
for zero temperature.
Solution. (a) The two possibilities are being occupied and not occupied, and the former comes
with a Boltzmann factor of e−(E−µ)/kBT . Thus,
⟨n⟩ =
e−(E−µ)/kBT
1 + e−(E−µ)/kBT
=
1
1 + e(E−µ)/kBT
.
23Kevin Zhou Physics Olympiad Handouts
(b) The graphs are shown below, for zero and nonzero µ.
1
2
⟨n⟩
µ = 0
kBT
E
µ
1
2
1
⟨n⟩ T = 0
T > 0
E
As T → 0, the form of ⟨n⟩ will start to look like a step function, θ(µ−E). This simply means
that the fermions fill up the lowest energy states first, to minimize their total energy. The
chemical potential is set by how many fermions there are in total.
[3] Problem 28. In this problem we’ll consider the energy of the conducting electrons in a solid at low
temperatures. Model a solid as a cubical box of volume V = L3 with periodic boundary conditions.
(a) Suppose there are N ≫ 1 electrons in total. If the temperature is low enough, they will fill all
of the quantum states up to energy µ = EF , where EF is called the Fermi energy. Show that
EF =
h2
2me

3N
8πV
2/3
where me is the mass of the electron. Be careful to account for the fact that an electron’s
spin can have two possible values.
(b) A sodium crystal has one conduction electron per atom. (The rest of the electrons are bound
to individual atoms, and don’t matter for the purposes of this problem.) The density and
molar mass are
ρ = 0.971 × 103
kg/m3
, M = 0.023kg/mol.
Find N/V and EF , and use this to evaluate the typical speed vF of an electron.
(c) Find a rough estimate for the temperature range at which the above results apply. Is it
satisfied for typical solids at room temperature?
Solution. (a) In a cubical box with periodic boundary conditions, the wavenumbers satisfy
ki = 2π
L ni where ni can also be a negative integer. As seen in the example, the number of
states is 4
3π(
√
2meEF )3(2πℏ/L)−3, but we multiply that by 2 due to the two spin states of
the electron, so that the number of states with energy at most EF is
N =
8
3
π(2meEF )3/2

2πℏ
L
−3
.
24Kevin Zhou Physics Olympiad Handouts
Solving for EF gives the answer,
EF =
h2
2me

3N
8πV
2/3
.
(b) If NA is Avogadro’s number, then the mass of each atom is ma = M/NA, which gives an
atom number density of ρ/ma. Since there’s one conduction electron per atom, we have
N/V = ρ/ma = NAρ/M, which gives us N/V = 2.5 × 1028 m−3. Putting this into our
previous formula gives EF = 5.0 × 10−19 J. The typical speed vF satisfies
EF ∼
1
2
mev2
F
which gives vF ∼ 106 m/s, or on the order of 1% of the speed of light! This verifies a statement
made in E4 about electrical conduction in solids.
(c) The condition is kBT ≪ EF , which corresponds to T ≪ 4 × 104 K. This is easily satisfied for
a solid at room temperature. In fact, any solid would melt before it got to this temperature!
So the model we’ve developed in this problem is good for any conductor within which the
interactions of conduction electrons with ions or other electrons are negligible.
[3] Problem 29. Here we continue the analysis in problem 20, to derive degeneracy pressure.
(a) Suppose N ≫ 1 nonrelativistic neutrons are in the box. Neutrons are fermions. Neglecting
interactions between the neutrons, estimate the minimum possible pressure on the walls. How
does it scale with the number density n = N/V ?
(b) Now suppose n is so high that most of the neutrons are ultrarelativistic, E ≈ pc. In this case,
how does the pressure scale with n?
The degeneracy pressure of neutrons keeps neutron stars from collapsing, and the degeneracy
pressure of electrons keeps white dwarfs from collapsing. We’ll investigate them more in X3.
Solution. (a) It’s cleanest to start from the end of part (c) of problem 20. Tracking the ni
dependence, we have
En =
π2
2
ℏ2
mV 2/3
n2
, n2
= n2
x + n2
y + n2
z
where we’re treating the ni like the components of a vector. This contributes a pressure
Pn =
π2
3
ℏ2
mV 5/3
n2
.
Just as in example 2, an eighth of a sphere of n values is filled, where for N particles in total,
the radius nmax of the sphere obeys
N =
1
8

4
3
πn3
max

which tells us that
nmax =
3
r
6N
π
.
25Kevin Zhou Physics Olympiad Handouts
The total pressure can be found by summing over all the lattice points within this eighth of a
sphere. Since N is large, this sum can be approximated as an integral,
P =
Z nmax
0
4πn2 dn
8
Pn =
π3ℏ2
6mV 5/3
Z nmax
0
n4
dn =
π3ℏ2
30md5

6N
π
5/3
∼
ℏ2n5/3
m
.
Thus, the degeneracy pressure scales as n5/3. Again, we could get the same result using
periodic boundary conditions, or immediately from dimensional analysis.
(b) In the ultrarelativistic limit, the answer can depend on c but not on m, so we must have
P ∼ ℏcn4/3 by dimensional analysis. Of course, you could also get this by repeating the
analysis of part (a). The fact that the pressure now depends on n4/3 rather than n5/3 is a key
factor governing the stability of white dwarfs.
[3] Problem 30 (MIT). [A] This is an advanced problem that is only placed here because the final
result is neat. An integer N can be partitioned by writing it as a sum of positive integers, and the
partition function p(N) is the number of unique ways this can be done. For example,
4 = 1 + 1 + 1 + 1 = 1 + 1 + 2 = 2 + 2 = 1 + 3 = 4
which implies p(4) = 5. Counting the number of partitions of an integer is a very hard combinatorics
problem, but we can get an estimate for large N using string theory.
(a) Consider an ideal string with hard boundary conditions and fundamental angular frequency
ω. Show that the number of distinct quantum states with energy Nℏω is p(N).
(b) Now suppose the string is at temperature T, where T is chosen so that the expected energy
is Nℏω. In the thermodynamic limit N ≫ 1, find a relation between N and T. You may use
the result ζ(2) = π2/6.
(c) By approximating the entropy as S ≈ kB logp(N), show that
ℏω
kT
=
dlogp(N)
dN
.
Combine this with your previous result to find an estimate for p(N).
To check your answer, the celebrated Hardy–Ramanujan formula (which is more accurate than the
very rough treatment we give above) is
p(N) ∼
1
4
√
3N
exp π
r
2N
3
!
.
While we only considered a simple nonrelativistic string here, calculations of this sort show up in
the thermodynamics of string theory. For further discussion, see chapter 22 of Zwiebach.
Solution. (a) The modes of the string have angular frequencies mω, which means that upon
quantization, each quantum in mode m will have energy mℏω. Thus, putting in quanta to
reach total energy Nℏω is the same as building a partition of N out of integers m. For
example, 4 = 1 + 1 + 1 + 1 corresponds to putting 4 quanta in the fundamental mode, while
4 = 4 corresponds to putting 1 quantum in the fourth harmonic.
26Kevin Zhou Physics Olympiad Handouts
(b) By borrowing some results from previous problems, we have
N =
X
m
m
emℏω/kT − 1
≈
Z ∞
0
mdm
emℏω/kT − 1
.
We have already done a similar integral in problem 25, and using the same trick of expanding
the denominator in a Taylor series and integrating term by term gives
N ≈
π2
6

kT
ℏω
2
.
(c) Using the definition of temperature,
T =
dE
dS
=
ℏω
k
dN
dlogp(N)
.
Rearranging slightly gives the desired result. Eliminating T using the above result,
dlogp
dN
≈
π
√
6N
.
Separating and integrating,
logp(N) ∼
Z N
0
π
√
6N
dN = π
r
2N
3
which agrees with the Hardy–Ramanujan formula. (Of course, this only gets the leading term
right, because we made approximations. The most severe approximation we did was taking
S ≈ kB logp(N). In reality, the energy at a given temperature is not fixed, but rather has
fluctuations, so we should have instead summed p(n) for a range of n near N.)
Example 7: Casimir Forces
Consider an infinite uniform string, on which waves propagate with speed v. The string is
held fixed by pins at two points separated by a distance L. When the string is in its ground
state, what is the resulting force between the pins?
Solution
Of course, in classical mechanics the ground state would just be y(x) = 0, and the force
would just be the tension T. But there is an additional quantum mechanical contribution,
which arises because each of the standing waves between the pins, with angular frequencies
ωn = nπv/L, carries a so-called “zero point” energy ℏωn.
As usual, force can be found by differentiating energy, F = −dE/dL. By summing up the
zero point energy in all of the standing waves, we naively get
E =
X
n
ℏωn
2
=
πℏv
2L
∞ X
n=1
n = E0
∞ X
n=1
n = ∞
27Kevin Zhou Physics Olympiad Handouts
which is rather unhelpful. This result is off for two reasons. First, even when there aren’t
any pins, the string still has standing waves, and these waves also have a naively infinite
energy density. When we move the pins a bit, we change both the zero point energy outside
the pins and inside, by infinite amounts, but the net change is finite, giving a finite force.
Quantitatively, the energy in between the pins due to the standing waves is
Eplate = E0
∞ X
n=1
n = ∞
and the energy we would have had there if the pins didn’t exist is the “continuous” sum,
Evac = E0
Z ∞
0
xdx = ∞.
The difference should be finite, but we can’t just subtract infinity with infinity, which brings
us to the second problem: none of these quantities are actually infinite. Any real string
will have a finite maximum oscillation frequency – for instance, the wavelength certainly
can’t get smaller than the atomic spacing. Alternatively, even if we had an idealized string
where Evac was actually infinite, no real pin can perfectly block waves of all frequencies. For
sufficiently high frequencies the waves won’t be affected by the pins, so that the sum in
Eplate eventually behaves like the integral in Evac, leaving a finite difference between the two.
In other words, the difference between Eplate and Evac in reality comes from only low n and
x. Therefore, let’s “regulate” the two expressions above so that they’re unchanged in this
regime, but match each other at high n and x. The simplest way to do this is to take
Eplate = E0
∞ X
n=1
ne−ϵn
, Evac = E0
Z ∞
0
xe−ϵx
dx =
E0
ϵ2
for small ϵ. To handle the sum, let α = e−ϵ, so that
Eplate/E0 = α + 2α2
+ 3α3
+ ....
Now we use the usual trick for arithmetic-geometric series. Note that
αEplate/E0 = α2
+ 2α3
+ 3α4
+ ....
Subtracting, we find
(1 − α)Eplate/E0 = α + α2
+ α3
+ ... =
α
1 − α
.
We thus conclude that
Eplate =
e−ϵ
(1 − e−ϵ)2
E0 = Evac −
1
12
E0 + O(ϵ)
where we used a result from P1. Finally, when we take ϵ to zero, the difference is simply
E = Eplate − Evac = −
1
12
E0.
28Kevin Zhou Physics Olympiad Handouts
Differentiating gives the force,
F = −
πℏv
24L2
where the negative sign indicates it is attractive. Not only is this finite, it’s right!
Experiments have measured this “Casimir force” precisely for light between two conductors,
where v = c, and confirmed the expected results.
You’re probably suspicious about this derivation because it depends on the arbitrary choice
of an exponential suppression. What if the sums and integrals were regulated at high n and
x in a different way? Shouldn’t the answer depend on the details of the string and pin?
Remarkably, the answer is no: the regulator doesn’t matter. If you try others, such as e−ϵn2
or 1/nϵ, you’ll get the same result; you can find a general proof in chapter 15 of Schwartz’s
Quantum Field Theory and the Standard Model. The reason is that the effect comes from
physics at low frequencies, so it doesn’t matter how you regulate the high frequencies.
It is for precisely this reason that you will sometimes see the mysterious equation
1 + 2 + 3 + ... = −
1
12
.
It’s not really true. Instead, what it physically means is that the difference between the
regulated sum and integral is −1/12 for any reasonable regulator.
29
