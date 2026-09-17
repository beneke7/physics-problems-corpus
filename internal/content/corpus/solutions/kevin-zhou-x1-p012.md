---
id: kevin-zhou-x1-p012
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p012
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

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
7
Kevin Zhou Physics Olympiad Handouts
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
