---
id: kevin-zhou-t3-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t3-p006
solution_type: author
source_document: solution-document-kevin-zhou-t3sol
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T3Sol.pdf."
---

[3] Problem 6. The temperature T at which a phase transition happens depends on the pressure P,
yielding a “coexistence curve” P(T) where the two phases can be in equilibrium with each other.
The exact relationship is given by the Clausius–Clapeyron equation
dP
dT
=
L
T(V2 − V1)
where L is the total latent heat for some amount of material, and V2 and V1 are the corresponding
volumes of that material when it is in each of the phases. (Depending on convention, L could be
the latent heat per mole, in which case the Vi are volumes per mole, or both quantities could be per
unit mass, in which case the Vi become densities.) In this problem, you will derive this equation.
(a) Consider an infinitesimal Carnot cycle operating between temperatures T and T + dT, and
pressures P and P + dP, chosen so that the isothermal heating and cooling steps involve
supplying latent heat. Compute the work done by the cycle.
(b) Argue that we may ignore all heat transfer except for the latent heat.
(c) Derive the Clausius–Clapeyron equation by setting the efficiency equal to the Carnot efficiency.
This classic setup is also considered in the second half of USAPhO 2023, problem A3.
7
Kevin Zhou Physics Olympiad Handouts
Solution. (a) Almost all the work is done in the isothermal processes, due to the changes in
volume in the phase transitions. (The adiabatic steps are negligible, because not only is the
temperature change infinitesimal, but the volume change is also infinitesimal!) The positive
work is thus (P + dP)(V2 − V1) and the negative work is P(V2 − V1), giving
W = (V2 − V1)dP.
(b) The non-latent heat transfer is infinitesimal compared to the latent heat, since it is proportional
to dT, so we only need to count the latent heat Qin = L. (This is also very nearly the same
as Qout, with the difference being the infinitesimal amount of work done.)
(c) The efficiency ϵ = W/Qin is equal to dT/T by expanding the Carnot efficiency, so
dT
T
=
(V2 − V1)dP
L
which is just what we want after a little rearranging.
