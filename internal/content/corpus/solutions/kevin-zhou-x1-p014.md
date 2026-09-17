---
id: kevin-zhou-x1-p014
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p014
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

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
8
Kevin Zhou Physics Olympiad Handouts
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
9
Kevin Zhou Physics Olympiad Handouts
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
10
Kevin Zhou Physics Olympiad Handouts
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
