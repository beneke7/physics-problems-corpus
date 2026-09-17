---
id: kevin-zhou-t1-p021
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-p021
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

[2] Problem 21. Use kinetic theory to find the pressure of a photon gas (i.e. an ideal gas of massless
particles, which satisfy E = pc) in terms of its total internal energy U and volume V . Use this
result to find γ for a photon gas, where γ is defined so that PV γ is constant in an adiabatic process.
Solution. By the exact same reasoning as in the example,
P =
N
V
⟨pxvx⟩ =
1
3
N
V
⟨p · v⟩.
However, for photons we have pv = pc = E, so
P =
1
3
N
V
⟨E⟩ =
U
3V
.
In other words, the pressure is always one third of the energy density. Notice that the number of
photons cancelled out, as it must have because it wasn’t specified anywhere in the problem. As
you’ll see in T2, the number of photons is determined by the volume and temperature; it isn’t an
independent parameter like it is for the ideal gas. As you heat or cool a photon gas, photons can
be freely emitted and absorbed by the walls, changing the total number to reach equilibrium.
Starting from U = 3PV and taking the differential of both sides, in an adiabatic process we have
dU = d̄W = −P dV, dU = 3(P dV + V dP).
Simplifying gives
−
4
3
dV
V
=
dP
P
which is equivalent to PV 4/3 being constant, so γ = 4/3.
