---
id: solution-ocr-kevin-zhou-t1sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4 (EstPhO 2002). In this problem we consider the combustion cycle of a car engine. Model the engine as a cylinder with a piston on the left and a valve on the right.
![](../../../figures/solution-ocr/59c9ff3b629d6176f81b69a7.jpg)
The steps of the process are as follows.
    1. Gas entry: the piston moves from the rightmost position to the leftmost; fresh air comes in through the valve and fills the cylinder.
    2. Pressure increase: the valve closes, and the piston quickly moves back to the rightmost position.
    3. Work: fuel is injected in the cylinder and is ignited; you may model this process as occurring instantaneously. Then the gas starts expanding and pushes the piston to the leftmost position.
    4. Gas disposal: the valve is opened. The piston is pushed to the right at constant pressure until it reaches its rightmost position, and the process then repeats.

Neglect friction and heat conduction, suppose the number of fuel molecules is negligible compared to the number of air molecules, and treat air as a diatomic ideal gas. Let $k$ be the ratio of the maximum and minimum volumes of the cylinder. Draw the cycle on a $P V$ diagram and find its efficiency.

Solution. This problem is a bit trickier because it's less clear how to treat the steps. Of course, the second step is just an adiabatic compression, but the third is subtle. Since the number of fuel molecules is negligible, burning the fuel essentially just rapidly deposits energy into the system, raising its temperature. Thus, the first half of the third step is an isochoric (constant volume) heating; the second half of the third step is an adiabatic expansion.

Finally, the fourth and first steps should be regarded as one unit. When the valve is opened, the gas in the cylinder quickly falls to atmospheric pressure, as it freely expands out. Then the piston moves to the right, doing work $P _ { \text {atm } } \Delta V$. In the first step, the piston moves to the left, pulling in fresh air and doing work $- P _ { \text {atm } } \Delta V$. So the first half of the fourth step has an isochoric pressure decrease. The second half of the fourth step, and the first step, do no net work, and function solely to pull in fresh air.

This tells us what's going on, but where are the heat reservoirs? The heating step occurs when the fuel is burned, so the burnt fuel itself is effectively the hot reservoir. The gas is cooled by letting


it leave and replacing it with new gas, so in some sense the atmosphere is the cold reservoir. But unlike the other examples of heat engines above, we use a different set of gas every cycle.

The $P V$ diagram is shown below.
![](../../../figures/solution-ocr/897192a39e2ac3cda1125e13.jpg)

The first, second, third, fourth bullet steps correspond to $\mathrm { AB } , \mathrm { BC } , \mathrm { CD } + \mathrm { DE }$, and $\mathrm { EB } + \mathrm { BA }$ respectively. Since BC and DE are adiabats $\left( P _ { E } V _ { B } ^ { \gamma } = P _ { D } V _ { A } ^ { \gamma } \right.$ and $\left. P _ { C } V _ { A } ^ { \gamma } = P _ { B } V _ { B } ^ { \gamma } \right)$, the net work is

$$
W = \oint p d V = \frac { P _ { D } V _ { A } - P _ { E } V _ { B } } { \gamma - 1 } + \frac { P _ { B } V _ { B } - P _ { C } V _ { A } } { \gamma - 1 } .
$$

The heat from the fuel, $Q$, can be found with the internal energy change from C to D:

$$
Q = C _ { V } n \left( T _ { D } - T _ { C } \right) = \frac { C _ { V } } { R } V _ { A } \left( P _ { D } - P _ { C } \right) = \frac { \left( P _ { D } - P _ { C } \right) V _ { A } } { \gamma - 1 } .
$$

Thus the efficiency can be found with $\epsilon = W / Q$ and $P _ { E } = P _ { D } k ^ { - \gamma } , P _ { B } = P _ { C } k ^ { - \gamma }$,

$$
\epsilon = \frac { W } { Q } = \frac { \left( P _ { D } - P _ { C } \right) V _ { A } - \left( P _ { E } - P _ { B } \right) V _ { B } } { \left( P _ { D } - P _ { C } \right) V _ { A } } = 1 - k ^ { 1 - \gamma } .
$$

For diatomic gas, $\gamma = 7 / 5$, so $\epsilon = 1 - 1 / k ^ { 2 / 5 }$.
[3] Problem 5 (IZhO 2022). One mole of ideal monatomic gas initially has volume $V _ { 0 } = 1 \mathrm {~m} ^ { 3 }$ and $P _ { 0 } = 10 ^ { 5 } \mathrm {~Pa}$. It then undergoes a quasistatic process. At every moment in this process, the rate of work done is proportional to the rate of change of the gas's internal energy. At the end of the process, the gas has volume $4 V _ { 0 }$ and pressure $P _ { 0 } / 2$. Find the total work done by the gas.

Solution. This problem is good practice for working with the laws of thermodynamics directly. Let $\eta = d W / d U$ be the constant ratio of work to internal energy change. By combining the results $d W = P d V , d U = ( 3 / 2 ) R d T$, and $P V = R T$, and following essentially the same derivation as that for an adiabatic process, we find

$$
- \frac { d P } { P } = \left( 1 - \frac { 2 } { 3 \eta } \right) \frac { d V } { V }
$$

which implies

$$
P \propto V ^ { ( 2 / 3 \eta ) - 1 } .
$$


In other words, this is like an adiabatic process, but with a different effective value of $\gamma$. Using the given initial and final conditions, we have $\eta = 4 / 3$, so that $P \propto V ^ { - 1 / 2 }$. Thus, the gas does work

$$
W = \int _ { V _ { 0 } } ^ { 4 V _ { 0 } } P d V = \int _ { V _ { 0 } } ^ { 4 V _ { 0 } } P _ { 0 } \left( \frac { V _ { 0 } } { V } \right) ^ { 1 / 2 } d V = 2 P _ { 0 } V _ { 0 } = 2 \times 10 ^ { 5 } \mathrm {~J}
$$

This problem might look contrived, but "polytropic" processes where $P V ^ { \beta }$ is constant, for a general value of $\beta$, are commonly considered in engineering thermodynamics.

In physics we often assume processes are adiabatic, $\beta = \gamma$, but in real life nothing is ever an ideal adiabatic process. Instead, engineers parametrize this by allowing $\beta$ to be general, and measuring its value. As a simple concrete example, if the chamber containing the gas also contains some dirt, in thermal equilibrium of the gas, that dirt contributes to the system's heat capacities $C _ { V }$ and $C _ { P }$. It therefore shifts the effective value of $\gamma$ away from its ideal gas value.
[3] Problem 6. USAPhO 2018, problem A3. A simple model for how a vacuum pump works.

## 2 Dynamic Ideal Gases

Idea 3
Problems involving ideal gases can be mechanics questions. For example, the first law of thermodynamics becomes conservation of energy, where the energy includes the internal energy of the gas in addition to the usual kinetic and potential energy. You may also have to use the principles of hydrostatic equilibrium and Bernoulli's principle from M7.
