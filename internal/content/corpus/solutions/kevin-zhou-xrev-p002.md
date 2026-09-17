---
id: kevin-zhou-xrev-p002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-xrev-p002
solution_type: author
source_document: solution-document-kevin-zhou-xrevsol
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/XRevSol.pdf."
---

[3] Problem 2. Let n be the local density of a gas of particles. If this density is nonuniform, it will
tend to be smoothed out by diffusion, which produces a particle current
J = −D∇n
with units of particles per second per unit area. This is a continuity equation, as explained in T2,
and D is called the diffusion coefficient. In addition, we know from M7 and T1 that each particle
in such a gas will experience a drag force from the others. As a result, when a constant force F is
applied to one, its terminal velocity satisfies F = µv.
(a) Suppose the particles are placed inside a potential V (r). Write down the contribution to the
particle current due to the resulting force, neglecting diffusion.
(b) In thermal equilibrium, the particle current produced by the force, which pulls the particles
to lower potential, balances the particle current produced by diffusion, which spreads them
out. Assuming the temperature is T, find a relation between D and µ.
Solution. (a) The force is F = −∇V , which means v = −(∇V )/µ. The particle current is
J = nv = −
n
µ
∇V.
(b) By setting the sum of the two currents to zero,
n
µ
∇V = −D∇n.
Rearranging gives
1
µD
∇V = −∇(logn).
On the other hand, we know that n(r) ∝ e−V (r)/kBT because the steady state must obey the
Boltzmann distribution. Then we have logn = −V/kBT + const, which means
kBT = µD.
This result is also derived in IPhO 2023, problem 1, which you can see for comparison.
Remark
The result of problem 2 is called the Einstein relation, and is one of the four major
results Einstein derived in his “annus mirabilis” of 1905, the others being special rela-
tivity and E = mc2, and explaining the photoelectric effect with photons. So why is
this result so important? It’s because at the time, it was not yet completely accepted
that matter was made of atoms. As you saw in T1, the size of a single atom often
drops out of kinetic theory calculations. At the time, many took this to mean that
atoms were a fictitious calculational tool, like how one does integrals by summing over
intervals of length ∆x, then gets a result independent of this fiducial length by taking ∆x → 0.
But doesn’t the number of atoms N appear all the time in basic thermodynamics, like the
ideal gas law? Yes, but always in the combination nR = NkB. Thus, information about
the size of a single atom is equivalent to information about kB. Einstein’s relation is useful
2
Kevin Zhou Physics Olympiad Handouts
because it explicitly gives us kB in terms of the separately directly measurable quantities D,
µ, and T. It was one of the first unique, quantitative predictions of kinetic theory.
[4] Problem 3 (Physics Cup 2018). Estimate the mean free path of a heavy black sphere of mass m
and radius R in vacuum at temperature T. Here, we define the mean free path as the typical distance
it takes for the velocity vector of the sphere to turn by an angle π/2. Assume that kBTR ≳ ℏc.
(Hint: for a random walk where steps of size a are taken per time τ, the average overall displacement
after time t ≫ τ is approximately a
p
t/τ.)
Solution. By the equipartition theorem, the typical speed v0 of the sphere satisfies
mv2
0 ∼ kBT.
The velocity vector is rotated by impulses from the photons, as they are absorbed or emitted by
the sphere. Thus, we need to estimate the rate of collisions as well as the typical impulse of each
one. The typical energy of a photon in blackbody radiation of temperature T is E ∼ kBT by the
equipartition theorem again, which means each absorption or emission changes the velocity of the
sphere by
∆v =
∆p
m
=
E
mc
∼
kBT
mc
.
On the other hand, we have
v0 ∼
r
kBT
m
which is much larger than ∆v since we are assuming the sphere is heavy. Using the provided hint,
the number of photons required to change the velocity significantly is order
N ∼
 v0
∆v
2
∼
mc2
kBT
.
Now we need to find the rate at which photons are absorbed or emitted. In equilibrium, these two
rates will be equal, so we can focus on emission, which is easier to handle. The power emitted from
the sphere is
P = 4πR2
σT4
and we already know the photons emitted have typical energy kBT, so the time per photon is
τ ∼
kBT
P
∼
kB
σR2T3
.
Combining our results, the mean free path is
λ ∼ v0Nτ ∼
k
1/2
B m1/2c2
σR2T7/2
.
Incidentally, you might wonder how we used the assumption kBTR ≳ ℏc. This assumption is
equivalent to saying that the wavelength of a typical photon is smaller than the size of the sphere
itself. We used this implicitly by thinking of the photons as little bullets hitting the sphere. If it
weren’t true, then we would have to account for their wave nature.
3
Kevin Zhou Physics Olympiad Handouts
