---
id: solution-ocr-kevin-zhou-xrevsol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-xrev-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 4. Consider a layer of the atmosphere with density $\rho$, pressure $P$, adiabatic index $\gamma$, and density and pressure gradients $d \rho / d z$ and $d P / d z$. Suppose that a small parcel of air in this layer acquires a small upward velocity. Under certain conditions, the parcel of air will begin oscillating in height, performing simple harmonic motion. Neglecting drag and heat transfer between the parcel of air and its surroundings, find the angular frequency $\omega$ of this motion. This is called the Brunt-Vaisala or buoyancy frequency.
Solution. Let the parcel have fixed mass $m$. At its initial position, the parcel has volume $V$ and density $\rho _ { p }$, which is equal to the local atmospheric density $\rho$. After the parcel moves up by $\Delta z$, it has volume $V ^ { \prime }$ and density $\rho _ { p } ^ { \prime }$, and the local atmospheric density is $\rho ^ { \prime }$. Then the net force on the parcel is the buoyant force minus the weight,
$$
F = \left( \rho ^ { \prime } - \rho _ { p } ^ { \prime } \right) g V ^ { \prime }
$$
and we have $m = \rho _ { p } ^ { \prime } V ^ { \prime }$. Thus, the acceleration is
$$
a = \left( \frac { \rho ^ { \prime } } { \rho _ { p } ^ { \prime } } - 1 \right) g .
$$
For small displacements, we have
$$
\rho ^ { \prime } \approx \rho + \frac { d \rho } { d z } \Delta z , \quad \rho _ { p } ^ { \prime } \approx \rho + \frac { d \rho _ { p } } { d z } \Delta z
$$
so that at first order in $\Delta z$, the acceleration is
$$
a = \frac { g } { \rho } \left( \frac { d \rho } { d z } - \frac { d \rho _ { p } } { d z } \right) \Delta z .
$$
To calculate $d \rho _ { p } / d z$, note that since the parcel expands and contracts adiabatically, $P _ { p } \propto \rho _ { p } ^ { \gamma }$. Moreover, the pressure of the parcel is always equal to that of the surrounding atmosphere, so
$$
P \propto \rho _ { p } ^ { \gamma }
$$
which for small displacements means
$$
\frac { 1 } { P } \frac { d P } { d z } = \gamma \frac { 1 } { \rho } \frac { d \rho _ { p } } { d z } .
$$
Plugging this into the acceleration equation gives
$$
a = g \left( \frac { 1 } { \rho } \frac { d \rho } { d z } - \frac { 1 } { \gamma P } \frac { d P } { d z } \right) \Delta z
$$
which implies
$$
\omega = \sqrt { g \left( \frac { 1 } { \gamma P } \frac { d P } { d z } - \frac { 1 } { \rho } \frac { d \rho } { d z } \right) } = \sqrt { g \frac { d \log \left( P ^ { 1 / \gamma } / \rho \right) } { d z } } .
$$
When the argument of the square root becomes negative, there is no frequency of oscillation; instead, the parcel just keeps on going. That describes an atmosphere unstable against convection. As a check, marginal stability occurs for an adiabatic atmosphere, where $P \propto \rho ^ { \gamma }$. In realistic atmospheres, you wouldn't expect to see these kinds of oscillations because of damping effects, but they provide a characteristic timescale for dynamic processes.

[3] Problem 5. USAPhO 2021, problem B2. A conceptual problem on methods of heat transfer.
[3] Problem 6. USAPhO 2019, problem B2. A useful problem for getting comfortable with numbers and estimates in astronomy.
[3] Problem 7. USAPhO 2022, problem B1. A data analysis problem about a nonideal gas.
[3] Problem 8. USAPhO 2024, problem B2. Two exercises on the heat capacity of solids.
[3] Problem 9. INPhO 2019, problem 6. A thermodynamic cycle with a nonideal gas.
[5] Problem 10. IPhO 2011, problem 2. A problem on an electrified soap bubble, which combines electrostatics, thermodynamics, and surface tension.

## 2 Relativity

[4] Problem 11. 3 IPhO 1998, problem 3. A great problem on a real controversy in physics, which also gives you practice working with real data.
[4] Problem 12. EuPhO 2024, problem 2. A problem on visual perception in special relativity. Note that in part (b), when the problem asks about what Alice "sees", it means what she sees from light reaching her eyes.
[4] Problem 13 (Physics Cup 2018). A spaceship travels with a constant proper acceleration $g$ along a straight line. At a certain moment, it launches two missiles in the direction of its motion, with speeds $v$ and $2 v$. Find the proper time interval in the spaceship between catching up to the first and to the second missile.
Solution. See the official solutions here.
