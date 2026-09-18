---
id: solution-ocr-kevin-zhou-t1sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2
A thermally isolated cylinder is divided into two compartments by a thermally conductive piston. Initially, the piston divides the cylinder into two compartments, A and B, of equal volume $V / 2$ and temperature $T _ { 0 }$. One mole of monatomic gas is in each compartment. An external agent slowly moves the piston to the side until the volumes are V/3 and 2V/3. Throughout this process, the temperature remains uniform. What is the final temperature?

Solution
The tricky thing about this problem is that the pressures in the two compartments aren't equal; this is possible because the external agent is holding the piston. Instead, the temperatures are made equal by heat conduction. The work done by the agent is

$$
d W = - p _ { A } d V _ { A } - p _ { B } d V _ { B } = - R T \left( \frac { d V _ { A } } { V _ { A } } + \frac { d V _ { B } } { V _ { B } } \right) .
$$

On the other hand, this is also equal to the increase in energy,

$$
d W = d U = \frac { 3 } { 2 } n R d T = 3 R d T
$$


Combining the two gives a differential equation,

$$
3 \int \frac { d T } { T } = - \int \frac { d V _ { A } } { V _ { A } } - \int \frac { d V _ { B } } { V _ { B } }
$$

which means the final temperature $T _ { f }$ obeys

$$
3 \log \frac { T _ { f } } { T _ { 0 } } = - \log \frac { 2 } { 3 } - \log \frac { 4 } { 3 } = \log \frac { 9 } { 8 } , \quad T _ { f } = \frac { 3 ^ { 2 / 3 } } { 2 } T _ { 0 } .
$$
