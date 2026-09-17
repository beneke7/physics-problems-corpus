---
id: kevin-zhou-x1-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p004
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

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
4
Kevin Zhou Physics Olympiad Handouts
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
5
Kevin Zhou Physics Olympiad Handouts
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
