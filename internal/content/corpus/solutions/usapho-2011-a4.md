---
id: usapho-2011-a4
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2011-a4
solution_type: official
source_document: solution-document-usapho-2011-s
source_pdf: cache/phoxiv/usapho/2011_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2011_S.pdf."
---

Question A4
In this problem we consider a simplified model of the electromagnetic radiation inside a cubical
box of side length L. In this model, the electric field has spatial dependence
E(x,y,z) = E0 sin(kxx)sin(kyy)sin(kzz)
where one corner of the box lies at the origin and the box is aligned with the x, y, and z axes. Let
h be Planck’s constant, kB be Boltzmann’s constant, and c be the speed of light.
a. The electric field must be zero everywhere at the sides of the box. What condition does this
impose on kx, ky, and kz? (Assume that any of these may be negative, and include cases
where one or more of the ki is zero, even though this causes E to be zero.)
b. In the model, each permitted value of the triple (kx,ky,kz) corresponds to a quantum state.
These states can be visualized in a state space, which is a notional three-dimensional space
with axes corresponding to kx, ky, and kz. How many states occupy a volume s of state space,
if s is large enough that the discreteness of the states can be ignored?
c. Each quantum state, in turn, may be occupied by photons with frequency ω = f
2π = c|k|,
where
|k| =
q
kx
2
+ ky
2
+ kz
2
In the model, if the temperature inside the box is T, no photon may have energy greater than
kBT. What is the shape of the region in state space corresponding to occupied states?
d. As a final approximation, assume that each occupied state contains exactly one photon. What
is the total energy of the photons in the box, in terms of h, kB, c, T, and the volume of the box
V ? Again, assume that the temperature is high enough that there are a very large number of
occupied states. (Hint: divide state space into thin regions corresponding to photons of the
same energy.)
Note that while many details of this model are extremely inaccurate, the final result is correct
except for a numerical factor.
Solution
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part A 8
a. The boundary conditions require sin(kxL) = 0, so that
kxL = nxπ
for any integer nx, with similar conditions for ky and kz.
b. In the abstract state space, the states are spaced a distance π/L apart. Each can therefore
be thought of as occupying volume π3/L3, and the number of states in the volume s is
N =
L3s
π3
.
c. A photon’s energy is E = h̄ω = h̄c|k|, where h̄ = h/2π. Thus the occupied states obey
h̄c|k| ≤ kBT.
This corresponds to a ball of radius kmax = kBT/h̄c in state space centered at the origin.
d. Naively, we would have to perform a triple integral over state space. However, the energy
of a photon depends only on its distance |k| from the origin in state space. Hence we can
integrate over spherical shells. Consider a shell bounded by radii k and k + dk. The volume
of this region is
ds = 4πk2
dk.
Each state in this region contains a single photon with energy h̄ck, so the shell yields energy
dE = h̄ck
L3
π3
ds =
4
π2
h̄cL3
k3
dk.
From our work above, k ranges from zero to kmax, so the total energy is
E =
4
π2
h̄cL3
Z kmax
0
k3
dk =
h̄cL3
π2
k4
max.
Substituting V = L3 and h = 2πh̄, this simplifies to
E =
8πk4
B
h3c3
V T4
.
Note that everything has come out right, including the T4 factor seen in the Stefan-Boltzmann
law, though the numerical prefactor is wrong.
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part A 9
STOP: Do Not Continue to Part B
If there is still time remaining for Part A, you should review your work for
Part A, but do not continue to Part B until instructed by your exam
supervisor.
Copyright ©2011 American Association of Physics Teachers
2011 Semifinal Exam Part B 10
Part B
