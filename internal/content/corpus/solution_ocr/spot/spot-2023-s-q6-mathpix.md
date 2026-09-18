---
id: solution-ocr-spot-2023-s-q6
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2023-q6]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
6. This question is about deriving thermodynamic identities.
(a) Consider a mole of ideal gas at pressure $P$, volume $V$, and temperature $T$. Denote the

heat capacity at constant volume as $C _ { V }$. Show that the heat capacity $C$ is given by
$$
C = C _ { V } + \frac { R } { 1 + \frac { V } { P } \frac { d P } { d V } }
$$
(b) Consider two ideal gases $A$ and $B$ which are mixed. There are $n _ { 1 }$ moles of gas $A$ and $n _ { 2 }$ moles of gas $B$, and the molar heat capacities at constant volume of gases $A$ and $B$ are $c _ { v 1 }$ and $c _ { v 2 }$ respectively. Find the adiabatic constant of the mixed gas.

Solution:


(a) Using the 1st Law of Thermodynamics,
$$
C = \frac { d Q } { d T } = \frac { d U } { d T } + P \frac { d V } { d T } = C _ { V } + P \frac { d V } { d T } .
$$
The ideal gas law states that $P V = R T$, which means that
$$
R d T = P d V + V d P .
$$
Therefore,
$$
P \frac { d V } { d T } = R \frac { P d V } { P d V + V d P } = \frac { R } { 1 + \frac { V } { P } \frac { d P } { d V } }
$$
    1-1st Law of Thermodynamics
    1 - Implicitly differentiating Ideal Gas Equation and obtaining final result
(b) Using the first law of thermodynamics and the ideal gas equation,
$$
d S = \frac { d Q } { T } = \frac { d U } { T } + P \frac { d V } { T } = n c _ { v } \frac { d T } { T } + \frac { n R } { V } d V
$$
Integrating both sides,
$$
\Delta S = n c _ { v } \ln \frac { T _ { f } } { T _ { i } } + n R \ln \frac { V _ { f } } { V _ { i } } .
$$
In an adiabatic process, there is no change in heat, so the change in entropy is zero. For the mixture of two gases, we thus have
$$
n _ { 1 } c _ { v 1 } \ln \frac { T _ { f } } { T _ { i } } + n _ { 1 } R \ln \frac { V _ { f } } { V _ { i } } + n _ { 2 } c _ { v 2 } \ln \frac { T _ { f } } { T _ { i } } + n _ { 2 } R \ln \frac { V _ { f } } { V _ { i } } = 0 .
$$
This can be rewritten as
$$
\left( n _ { 1 } c _ { v 1 } + n _ { 2 } c _ { v 2 } \right) \ln \frac { T _ { f } } { T _ { i } } = - \left( n _ { 1 } R + n _ { 2 } R \right) \ln \frac { V _ { f } } { V _ { i } } = \left( n _ { 1 } + n _ { 2 } \right) R \ln \frac { V _ { i } } { V _ { f } } ,
$$
which is equivalent to
$$
T _ { i } V _ { i } ^ { g } = T _ { f } V _ { f } ^ { g } , \quad g = \frac { \left( n _ { 1 } + n _ { 2 } \right) R } { n _ { 1 } c _ { v 1 } + n _ { 2 } c _ { v 2 } } .
$$
An adiabatic process is characterised by an adiabatic constant $\gamma$ such that
$$
P V ^ { \gamma } = \text { const. }
$$

Using $P = n R T / V$ for the mixture, the adiabatic equation can also be written as

$$
T V ^ { \gamma - 1 } = \mathrm { const } .
$$

Therefore,

$$
\gamma = g + 1 = \frac { \left( n _ { 1 } + n _ { 2 } \right) R } { n _ { 1 } c _ { v 1 } + n _ { 2 } c _ { v 2 } } + 1 .
$$

1 - Writing 1st law of thermodynamics in terms of infinitesimal entropy change
1 - Integrating correctly to obtain total entropy change
1 - Relating to the adiabatic constant
1 - Final expression for adiabatic constant

Q6 total: 6
