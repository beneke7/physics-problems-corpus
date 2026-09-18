---
id: usapho-2008-a3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2008-a3
solution_type: official
source_document: solution-document-usapho-2008-s
source_pdf: cache/phoxiv/usapho/2008_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2008_S.pdf."
---

Question A3
A certain planet of radius R is composed of a uniform material that, through radioactive decay, generates a
net power P. This results in a temperature differential between the inside and outside of the planet as heat
is transfered from the interior to the surface.
The rate of heat transfer is governed by the thermal conductivity. The thermal conductivity of a ma-
terial is a measure of how quickly heat flows through that material in response to a temperature gradient.
Specifically, consider a thin slab of material of area A and thickness ∆x where one surface is hotter than the
other by an amount ∆T. Suppose that an amount of heat ∆Q flows through the slab in a time ∆t. The
thermal conductivity k of the material is then
k =
∆Q
∆t
1
A
∆x
∆T
.
It is found that k is approximately constant for many materials; assume that it is constant for the planet.
For the following assume that the planet is in a steady state; temperature might depend on position, but
does not depend on time.
a. Find an expression for the temperature of the surface of the planet assuming blackbody radiation, an
emissivity of 1, and no radiation incident on the planet surface. You may express your answer in terms
of any of the above variables and the Stephan-Boltzmann constant σ.
b. Find an expression for the temperature difference between the surface of the planet and the center of
the planet. You may express your answer in terms of any of the above variables; you do not need to
answer part (a) to be able to answer this part.
Solution
a. The Stefan-Boltzmann law states that
P = σAT4
s
where A is the surface area of the planet, and Ts the temperature at the surface. Then
Ts =

P
4πσR2
 1/4
.
b. By symmetry, the temperature depends only on the distance from the center. Then the definition of k
gives for a spherical shell of thickness dr
k =
∆Q
∆t
1
4πr2
dr
dT
.
The heat through the shell depends on the power radiated from within the shell. Since the planet is
uniform, this depends on the volume according to
∆Q
∆t
= P
4
3πr3
4
3πR3
= P
r3
R3
Copyright ©2008 American Association of Physics Teachers
2008 Semifinal Exam Part A 7
so that rearrangement yields
dT =
P
4πkR3
rdr.
Integrating between the center and the surface,
∆T =
P
8πkR
.
