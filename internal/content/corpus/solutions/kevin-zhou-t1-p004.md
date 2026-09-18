---
id: kevin-zhou-t1-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-p004
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

[3] Problem 4 (EstPhO 2002). In this problem we consider the combustion cycle of a car engine.
Model the engine as a cylinder with a piston on the left and a valve on the right.
The steps of the process are as follows.
1. Gas entry: the piston moves from the rightmost position to the leftmost; fresh air comes in
through the valve and fills the cylinder.
2. Pressure increase: the valve closes, and the piston quickly moves back to the rightmost
position.
3. Work: fuel is injected in the cylinder and is ignited; you may model this process as occurring
instantaneously. Then the gas starts expanding and pushes the piston to the leftmost position.
4. Gas disposal: the valve is opened. The piston is pushed to the right at constant pressure until
it reaches its rightmost position, and the process then repeats.
Neglect friction and heat conduction, suppose the number of fuel molecules is negligible compared
to the number of air molecules, and treat air as a diatomic ideal gas. Let k be the ratio of the
maximum and minimum volumes of the cylinder. Draw the cycle on a PV diagram and find its
efficiency.
Solution. This problem is a bit trickier because it’s less clear how to treat the steps. Of course,
the second step is just an adiabatic compression, but the third is subtle. Since the number of fuel
molecules is negligible, burning the fuel essentially just rapidly deposits energy into the system,
raising its temperature. Thus, the first half of the third step is an isochoric (constant volume)
heating; the second half of the third step is an adiabatic expansion.
Finally, the fourth and first steps should be regarded as one unit. When the valve is opened, the
gas in the cylinder quickly falls to atmospheric pressure, as it freely expands out. Then the piston
moves to the right, doing work Patm∆V . In the first step, the piston moves to the left, pulling in
fresh air and doing work −Patm∆V . So the first half of the fourth step has an isochoric pressure
decrease. The second half of the fourth step, and the first step, do no net work, and function solely
to pull in fresh air.
This tells us what’s going on, but where are the heat reservoirs? The heating step occurs when
the fuel is burned, so the burnt fuel itself is effectively the hot reservoir. The gas is cooled by letting
4
Kevin Zhou Physics Olympiad Handouts
it leave and replacing it with new gas, so in some sense the atmosphere is the cold reservoir. But
unlike the other examples of heat engines above, we use a different set of gas every cycle.
The PV diagram is shown below.
V
P
A B
C
D
E
The first, second, third, fourth bullet steps correspond to AB, BC, CD+DE, and EB+BA
respectively. Since BC and DE are adiabats (PEV γ
B = PDV γ
A and PCV γ
A = PBV γ
B), the net work is
W =
I
pdV =
PDVA − PEVB
γ − 1
+
PBVB − PCVA
γ − 1
.
The heat from the fuel, Q, can be found with the internal energy change from C to D:
Q = CV n(TD − TC) =
CV
R
VA(PD − PC) =
(PD − PC)VA
γ − 1
.
Thus the efficiency can be found with ϵ = W/Q and PE = PDk−γ, PB = PCk−γ,
ϵ =
W
Q
=
(PD − PC)VA − (PE − PB)VB
(PD − PC)VA
= 1 − k1−γ
.
For diatomic gas, γ = 7/5, so ϵ = 1 − 1/k2/5.
[3] Problem 5 (IZhO 2022). One mole of ideal monatomic gas initially has volume V0 = 1m3 and
P0 = 105 Pa. It then undergoes a quasistatic process. At every moment in this process, the rate
of work done is proportional to the rate of change of the gas’s internal energy. At the end of the
process, the gas has volume 4V0 and pressure P0/2. Find the total work done by the gas.
Solution. This problem is good practice for working with the laws of thermodynamics directly.
Let η = dW/dU be the constant ratio of work to internal energy change. By combining the results
dW = P dV , dU = (3/2)RdT, and PV = RT, and following essentially the same derivation as that
for an adiabatic process, we find
−
dP
P
=

1 −
2
3η

dV
V
which implies
P ∝ V (2/3η)−1
.
5
Kevin Zhou Physics Olympiad Handouts
In other words, this is like an adiabatic process, but with a different effective value of γ. Using the
given initial and final conditions, we have η = 4/3, so that P ∝ V −1/2. Thus, the gas does work
W =
Z 4V0
V0
P dV =
Z 4V0
V0
P0

V0
V
 1/2
dV = 2P0V0 = 2 × 105
J.
This problem might look contrived, but “polytropic” processes where PV β is constant, for a general
value of β, are commonly considered in engineering thermodynamics.
In physics we often assume processes are adiabatic, β = γ, but in real life nothing is ever an ideal
adiabatic process. Instead, engineers parametrize this by allowing β to be general, and measuring
its value. As a simple concrete example, if the chamber containing the gas also contains some dirt,
in thermal equilibrium of the gas, that dirt contributes to the system’s heat capacities CV and CP .
It therefore shifts the effective value of γ away from its ideal gas value.
[3] Problem 6.   ^ 1 0USAPhO 2018, problem A3. A simple model for how a vacuum pump works.
2 Dynamic Ideal Gases
Idea 3
Problems involving ideal gases can be mechanics questions. For example, the first law of
thermodynamics becomes conservation of energy, where the energy includes the internal
energy of the gas in addition to the usual kinetic and potential energy. You may also have
to use the principles of hydrostatic equilibrium and Bernoulli’s principle from M7.
