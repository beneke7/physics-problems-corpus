---
id: kevin-zhou-t1-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-ex003
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

Example 3
A space station is a large cylinder of radius R0 filled with air molecules of mass m. The
cylinder spins about its axis at an angular velocity ω, and the air rotates along with it. If
the temperature T is constant inside the station, what is the ratio of the air pressure at the
center of the station to the pressure at the rim?
Solution
We saw in M7 that a fluid next to a moving wall will pick up that wall’s velocity, by viscosity.
In this scenario, that happens because a gas molecule that bounces off the wall will, on
average, pick up an additional component of tangential velocity. In the steady state, the gas
ends up rotating with the walls. It’s therefore simplest to work in the frame rotating with the
station, in which case the walls and gas are at rest, and we simply have a fluid statics problem.
By considering force balance on a thin parcel of air of radial thickness dr and area A,
AdP = ρgeffAdr
where geff = ω2r is the centrifugal acceleration. Applying the ideal gas law,
dP
P
=
mgeff
kBT
dr
6
Kevin Zhou Physics Olympiad Handouts
which integrates to give
P(r = 0)
P(r = R0)
= e−mω2R2
0/2kBT
.
