---
id: solution-ocr-usapho-2010-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2010-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A3
A cylindrical pipe contains a movable piston that traps 2.00 mols of air. Originally, the air is at one atmosphere of pressure, a volume $V _ { 0 }$, and at a temperature of $T _ { 0 } = 298 \mathrm {~K}$. First (process A) the air in the cylinder is compressed at constant temperature to a volume of $\frac { 1 } { 4 } V _ { 0 }$. Then (process B) the air is allowed to expand adiabatically to a volume of $V = 15.0 \mathrm {~L}$. After this (process C) this piston is withdrawn allowing the gas to expand to the original volume $V _ { 0 }$ while maintaining a constant temperature. Finally (process D) while maintaining a fixed volume, the gas is allowed to return to the original temperature $T _ { 0 }$. Assume air is a diatomic ideal gas, no air flows into, or out of, the pipe at any time, and that the temperature outside the remains constant always. Possibly useful information: $C _ { p } = \frac { 7 } { 2 } R , C _ { v } = \frac { 5 } { 2 } R , 1 \mathrm {~atm} = 1.01 \times 10 ^ { 5 } \mathrm {~Pa}$.
a. Draw a P-V diagram of the whole process.

Copyright ©2010 American Association of Physics Teachers


b. How much work is done on the trapped air during process A?
c. What is the temperature of the air at the end of process B?

## Solution

a. The diagram consists of an isotherm, an adiabat, an isotherm, and an isochore.
b. For a gas compressed from a volume $V _ { 0 }$ to $V _ { 1 } = V _ { 0 } / 4$, the work done on the gas is
$$
W = n R T \log \frac { V _ { 0 } } { V _ { 1 } }
$$
Then the answer is
$$
W = 2 \mathrm { mols } \cdot 8.31 \frac { \mathrm {~J} } { \mathrm {~mol} \cdot \mathrm {~K} } \cdot 298 \mathrm {~K} \cdot \log 4 = 6870 \mathrm {~J} .
$$
c. During an adiabatic process, $P V ^ { \gamma }$ is conserved. Combining this with the ideal gas law, $T V ^ { \gamma - 1 }$ is conserved. Therefore, the temperature after process B is
$$
T _ { 2 } = T _ { 0 } \left( \frac { V _ { 1 } } { V } \right) ^ { \gamma - 1 }
$$
where $V _ { 1 }$ is the volume after process A. Using the ideal gas law,
$$
V _ { 0 } = \frac { n R T _ { 0 } } { P _ { 0 } } = \frac { 2 \mathrm { mols } \cdot 8.31 \frac { \mathrm {~J} } { \mathrm {~mol} \cdot \mathrm {~K} } \cdot 298 \mathrm {~K} } { 1.01 \cdot 10 ^ { 5 } \mathrm {~Pa} } = 0.0490 \mathrm {~m} ^ { 3 } .
$$
Thus, the two relevant volumes here are
$$
V = 15.0 \mathrm {~L} = 15.0 \mathrm {~L} \cdot \frac { 10 ^ { 3 } \mathrm {~mL} } { 1 \mathrm {~L} } \cdot \frac { 1 \mathrm {~cm} ^ { 3 } } { 1 \mathrm {~mL} } \cdot \frac { 1 \mathrm {~m} ^ { 3 } } { 10 ^ { 6 } \mathrm {~cm} ^ { 3 } } = 0.0150 \mathrm {~m} ^ { 3 } , \quad V _ { 1 } = \frac { 1 } { 4 } V _ { 0 } = 0.0123 \mathrm {~m} ^ { 3 }
$$
and plugging in gives
$$
T _ { 2 } = 298 \mathrm {~K} \left( \frac { 0.0123 } { 0.0150 } \right) ^ { \frac { 2 } { 5 } } = 275 \mathrm {~K}
$$
where we used $\gamma = C _ { p } / C _ { v } = 7 / 5$.
