---
id: solution-ocr-ipho-1999-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1999/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-1999-t1]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Solution

1. At equilibrium the pressure $p$ inside the vessel must be equal to the room pressure $p _ { 0 }$ plus the pressure induced by the weight of the movable base: $p = p _ { 0 } + \frac { m g } { \pi r ^ { 2 } }$. This is true before and after irradiation. Initially the gas temperature is room temperature. Owing to the state equation of perfect gases, the initial gas volume $V _ { 1 }$ is $V _ { 1 } = \frac { n R T _ { 0 } } { p }$ (where $R$ is the gas constant) and therefore the height $h _ { 1 }$ of the cylinder which is occupied by the gas is $h _ { 1 } = \frac { V _ { 1 } } { \pi r ^ { 2 } } = \frac { n R T _ { 0 } } { p _ { 0 } \pi r ^ { 2 } + m g }$. After irradiation, this height becomes $h _ { 2 } = h _ { 1 } + \Delta s$, and therefore the new temperature is
$$
T _ { 2 } = T _ { 0 } \left( 1 + \frac { \Delta s } { h _ { 1 } } \right) = T _ { 0 } + \frac { \Delta s \left( p _ { 0 } \pi r ^ { 2 } + m g \right) } { n R } .
$$
Numerical values: $p = 102.32 \mathrm { kPa } ; T _ { 2 } = 322 \mathrm {~K} = 49 ^ { \circ } \mathrm { C }$
2. The mechanical work made by the gas against the plate weight is $m g \Delta s$ and against the room pressure is $p _ { 0 } \pi r ^ { 2 } \Delta s$, therefore the total work is $L = \left( m g + p _ { 0 } \pi r ^ { 2 } \right) \Delta s = 24.1 \mathrm {~J}$
3. The internal energy, owing to the temperature variation, varies by an amount $\Delta U = n c _ { \mathrm { V } } \left( T _ { 2 } - T _ { 0 } \right)$. The heat introduced into the system during the irradiation time $\Delta t$ is $Q = \Delta U + L = n c _ { \mathrm { V } } \frac { T _ { 0 } \Delta s } { h _ { 1 } } + \left( m g + p _ { 0 } \pi r ^ { 2 } \right) \Delta s = \Delta s \left( p _ { 0 } \pi r ^ { 2 } + m g \right) \left( \frac { c _ { \mathrm { V } } } { R } + 1 \right)$. This heat comes exclusively from the absorption of optical radiation and coincides therefore with the absorbed optical energy, $Q = 84 \mathrm {~J}$.
The same result can also be obtained by considering an isobaric transformation and remembering the relationship between molecular heats:
$$
Q = n c _ { p } \left( T _ { 2 } - T _ { 0 } \right) = n \left( c _ { \mathrm { V } } + R \right) \left[ \frac { \Delta s \left( p _ { 0 } \pi r ^ { 2 } + m g \right) } { n R } \right] = \Delta s \left( p _ { 0 } \pi r ^ { 2 } + m g \right) \left( \frac { c _ { \mathrm { V } } } { R } + 1 \right)
$$
4. Since the laser emits a constant power, the absorbed optical power is $W = \frac { Q } { \Delta t } = \left( \frac { c _ { \mathrm { V } } } { R } + 1 \right) \frac { \Delta s } { \Delta t } \left( p _ { 0 } \pi r ^ { 2 } + m g \right) = 8.4 \mathrm {~W}$. The energy of each photon is $h c / \lambda$, and thus the number of photons absorbed per unit time is $\frac { W \lambda } { h c } = 2.2 \cdot 10 ^ { 19 } \mathrm {~s} ^ { - 1 }$
5. The potential energy change is equal to the mechanical work made against the plate weight, therefore the efficiency $\eta$ of the energy transformation is

$$
\frac { m g \Delta s } { Q } = \frac { 1 } { \left( 1 + \frac { p _ { 0 } \pi r ^ { 2 } } { m g } \right) \left( 1 + \frac { c _ { V } } { R } \right) } = 2.8 \cdot 10 ^ { - 3 } \approx 0.3 \%
$$

6. When the cylinder is rotated and its axis becomes horizontal, we have an adiabatic transformation where the pressure changes from $p$ to $p _ { 0 }$, and the temperature changes therefore to a new value $T _ { 3 }$. The equation of the adiabatic transformation $p V ^ { \gamma } =$ constant may now be written in the form $T _ { 3 } = T _ { 2 } \left( \frac { p _ { 0 } } { p } \right) ^ { \frac { \gamma - 1 } { \gamma } }$, where $\gamma = \frac { c _ { \mathrm { p } } } { c _ { \mathrm { V } } } = \frac { c _ { \mathrm { V } } + R } { c _ { \mathrm { V } } } = 1 + \frac { R } { c _ { \mathrm { V } } } = 1.399$. Finally $T _ { 3 } = 321 \mathrm {~K} = 48 ^ { \circ } \mathrm { C }$


## Grading guidelines

| 1. | 0.5 | Understanding the relationship between inner and outer pressure |
| :--- | :--- | :--- |
|  | 0.7 | Proper use of the plate displacement |
|  | 0.2+0.2 | Correct results for final pressure |
|  | 0.2+0.2 | Correct results for final temperature |
| 2. | 0.6 | Understanding that the work is made both against plate weight and against atmospheric pressure |
|  | 0.2+0.2 | Correct results for work |
| 3. | 1 | Correct approach |
|  | 0.5 | Correct equation for heat |
|  | 0.3 | Understanding that the absorbed optical energy equals heat |
|  | 0.2 | Correct numerical result for optical energy |
| 4. | 0.2+0.2 | Correct results for optical power |
|  | 0.5 | Einstein's equation |
|  | 0.3+0.3 | Correct results for number of photons |
| 5. | 0.6 | Computation of the change in potential energy |
|  | 0.2+0.2 | Correct results for efficiency |
| 6. | 0.8 | Understanding that the pressure returns to room value |
|  | 0.4 | Understanding that there is an adiabatic transformation |
|  | 0.4 | Equation of adiabatic transformation |
|  | 0.5 | Derivation of $\gamma$ from the relationship between specific heats |
|  | 0.2+0.2 | Correct results for temperature |

For "correct results" two possible marks are given: the first one is for the analytical equation and the second one for the numerical value.
For the numerical values a full score cannot be given if the number of digits is incorrect (more than one digit more or less than those given in the solution) or if the units are incorrect or missing.
No bonus can be given for taking into account the gas weight
