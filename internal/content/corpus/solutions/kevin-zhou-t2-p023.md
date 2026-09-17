---
id: kevin-zhou-t2-p023
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p023
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[3] Problem 23. Planck’s law can be used to understand atomic physics, as Einstein showed and as
you will now show. Suppose we have a collection of two-state atoms encased inside a cavity, whose
walls are blackbodies with temperature T. In equilibrium, there will be N1 atoms in the ground
state and N2 atoms in the excited state, bathed in a photon gas of temperature T. Three physical
processes can occur:
1. Atoms in the excited state can each spontaneously decay with rate A.
2. Atoms in the ground state can absorb a photon. For each atom, the rate of this process is
Bρ(f) where ρ(f) is the energy density of radiation at frequency f.
3. Atoms in the excited state can undergo stimulated emission when interacting with a photon,
in the process e + γ → g + γ + γ. For each atom, the rate of this process is B′ρ(f).
These three “Einstein coefficients” depend on the frequency, but not on the temperature.
(a) Argue that ρ(f) is proportional to I(f) in Planck’s law. In fact,
I(f) =
c
4
ρ(f)
though you do not have to show this.
(b) Write down an expression for dN2/dt.
(c) In the steady state, for any temperature, N2/N1 must be given by the Boltzmann distribution.
Using this, find A and B′ in terms of B.
This is an extraordinary result: one might have expected a difficult calculation to find each of
A, B, and B′, but if you know one, then by thermodynamics you know them all. In particular,
thermodynamics requires spontaneous emission to be possible, A ̸= 0.
Solution. (a) Here ρ(f) refers to the distribution of radiation energy inside the blackbody, while
I(f) refers to the intensity of radiation escaping the blackbody if there were a hole. The
reason these are proportional is that all electromagnetic radiation travels at the same speed;
hence light of all frequencies will escape a blackbody at the same rate. (Note that this would
not be true for an ideal gas, where higher-energy particles would escape at a higher rate.)
27
Kevin Zhou Physics Olympiad Handouts
(b) Adding up the contributions from the three processes,
dN2
dt
= −AN2 + Bρ(f)N1 − B′
ρ(f)N2.
(c) We know that in thermal equilibrium,
N2
N1
= e−hf/kBT
.
Plugging this in above and setting dN2/dt = 0, we have
A
ρ(f)
= Behf/kBT
− B′
.
Using the given expression for ρ(f),
A
c3
8πhf3
(ehf/kBT
− 1) = Behf/kBT
− B′
.
The left-hand side goes to zero in the limit T → ∞, which is physically reasonable. It is only
possible for the right-hand side to do the same thing if
B′
= B.
Plugging this back in, we have
A =
8πhf3
c3
B.
