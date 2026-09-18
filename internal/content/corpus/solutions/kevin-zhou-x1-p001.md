---
id: kevin-zhou-x1-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p001
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

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
1
Kevin Zhou Physics Olympiad Handouts
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

gLµ/F −
1
4
(gLµ/F)2

= 2ωnL
p
µ/F

1 −
1
4
(gLµ/F)

.
We therefore conclude
ωn =
πn
p
F/µ
L

1 +
1
4
(gLµ/F)

.
2
Kevin Zhou Physics Olympiad Handouts
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

n +
α
2π

h.
The extra phase α depends on how the particle gets reflected at the endpoints of its motion.
Remark
The left-hand side of the quantization condition above is precisely the adiabatic invariant
from M4, which stays the same if we change the system parameters slowly. This ensures the
quantization condition is preserved over time, as it must be for self-consistency. If you instead
change the system parameters quickly, the integral is not preserved, but that’s because the
change causes transitions from one energy level to another (i.e. to waves with different n).
