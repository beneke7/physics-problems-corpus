---
id: kevin-zhou-t3-p007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t3-p007
solution_type: author
source_document: solution-document-kevin-zhou-t3sol
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T3Sol.pdf."
---

[3] Problem 7. [A] In this exercise you’ll find a quicker, more advanced derivation of the Clausius–
Clapeyron equation.
(a) The Gibbs free energy is defined as G = U + PV − TS. Show that for reversible processes,
dG = V dP − S dT.
Two phases can only be in thermodynamic equilibrium if they have the same Gibbs free energy
per molecule. Otherwise, turning one phase to the other would reduce the Gibbs free energy,
which turns out to be equivalent to increasing the entropy of the universe. (For more details,
see section 16.5 of Blundell and Blundell.)
(b) Suppose that the Gibbs free energies per molecule G/N for two phases are equal at temperature
T0 and pressure P0. Derive the Clausius–Clapeyron equation by demanding this is also true
at temperature T0 + dT and P0 + dP.
Solution. (a) By the first law, we have d̄Q = dU + d̄W, where d̄W = PdV and, by reversibility,
d̄Q = TdS. Differentiating the definition of Gibbs free energy, we have
dG = dU + PdV + V dP − TdS − SdT = TdS − PdV + PdV + V dP − TdS − SdT
which simplifies to the desired answer.
(b) Consider a sample of the first phase with a given total particle number N. The change in
Gibbs free energy along the coexistence curve is
dG1 = V1 dP − S1 dT.
Similarly, for the second phase,
dG2 = V2 dP − S2 dT.
By the definition of the coexistence curve, these two must be equal, so
(V1 − V2)dP = (S1 − S2)dT.
We also know that S2 − S1 = L/T, so rearranging gives the desired result.
8
Kevin Zhou Physics Olympiad Handouts
Remark: Thermodynamic Potentials
You might sometimes see the Clausius–Clapeyron equation written in terms of a difference in
enthalpy ∆H rather than a latent heat. The enthalpy is the state function H = U + PV , so
dH = V dP + d̄Q.
This is useful because many lab experiments happen at constant pressure, dP = 0, leaving
dH = d̄Q. That is, only heat changes the enthalpy, so the latent heat of a phase transition
must be the difference in enthalpies of the two phases, L = ∆H. That in turn is useful
because enthalpy is a state function, so given a new phase transition you can calculate L by
just looking up the enthalpy values for each of the phases in a table.
We’ve now covered all the classic “thermodynamic potentials”. As we just saw, the
enthalpy H is useful for bookkeeping heat. As we saw in T2, the Helmholtz free en-
ergy F is minimized in thermodynamic equilibrium, given constant temperature and
volume. (This is the relative of the statement that the system’s internal energy U is
minimized in equilibrium, given constant entropy and volume, which is just the usual
statement of mechanical equilibrium.) And as we saw in the problem above, the Gibbs free en-
ergy G is minimized in thermodynamic equilibrium, given constant temperature and pressure.
More generally, what’s going on is that the number of possibly useful potentials doubles
every time we add another pair of “thermodynamic conjugate variables”. Before learning
about thermodynamics, we just had U. When we learned about temperature and entropy,
we additionally cared about F. And now upon accounting for pressure and volume, we have
H and G. If we had another pair, such as magnetization and external magnetic field, we
could define 4 more potentials, which would each be useful in different situations.
[2] Problem 8. Ice skaters can move with little friction because they actually glide on a thin layer
of water. Estimate how heavy an ice skater has to be to melt ice by just standing on their skates,
assuming the ice is at temperature −5◦C.
Solution. To melt the ice, we need to apply enough pressure to reach the water-ice equilibrium
point, which we can find with the Clausius–Clapeyron equation. We need to reach 0◦C, so
∆T = 5◦
C = 5K, T = 273K.
The Clausius–Clapeyron equation gives
P =
∆T
T
L

1
ρi
−
1
ρw
 −1
≈ 6.76 × 107
Pa
where we used
ρi = 917kg/m3
, ρw = 1000kg/m3
, L = 334000J/kg.
Ice skate blades have a thickness of around 1mm and a length of around 25 cm, so the total area
with two feet will be around 5 × 10−4 m2. The weight PA needed will then be around 30,000N,
corresponding to a mass of about 3,000kg. Thus, unless you are incredibly massive, or the ice
is very close to melting already, pressure alone is not enough to melt the ice. Scientists are still
arguing over the true explanation; you can see a recent review here.
9
Kevin Zhou Physics Olympiad Handouts
Now we focus on the specifics of liquid-gas phase transitions.
