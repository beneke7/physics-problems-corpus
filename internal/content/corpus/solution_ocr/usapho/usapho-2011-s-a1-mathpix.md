---
id: solution-ocr-usapho-2011-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2011-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A1

Single bubble sonoluminescence occurs when sound waves cause a bubble suspended in a fluid to collapse so that the gas trapped inside increases in temperature enough to emit light. The bubble actually undergoes a series of expansions and collapses caused by the sound wave pressure variations.

We now consider a simplified model of a bubble undergoing sonoluminescence. Assume the bubble is originally at atmospheric pressure $P _ { 0 } = 101 \mathrm { kPa }$. When the pressure in the fluid surrounding the bubble is decreased, the bubble expands isothermally to a radius of $36.0 \mu \mathrm {~m}$. When the pressure increases again, the bubble collapses to a radius of $4.50 \mu \mathrm {~m}$ so quickly that no heat can escape. Between the collapse and subsequent expansion, the bubble undergoes isochoric (constant volume) cooling back to its original pressure and temperature. For a bubble containing a monatomic gas, suspended in water of $T = 293 \mathrm {~K}$, find

a. the number of moles of gas in the bubble,
b. the pressure after the expansion,
c. the pressure after collapse,
d. the temperature after the collapse, and
e. the total work done on the bubble during the whole process.

You may find the following useful: the specific heat capacity at constant volume is $C _ { V } = 3 R / 2$ and the ratio of specific heat at constant pressure to constant volume is $\gamma = 5 / 3$ for a monatomic gas.

## Solution

a. The most important thing in problems like this is to keep track of all the variables carefully. Let the initial pressure, volume, and temperature be $P _ { 0 } , V _ { 0 }$, and $T _ { 0 } = T$. The steps are:
    i. Isothermal expansion, after which we have $P _ { 1 } , V _ { 1 }$, and $T _ { 1 } = T _ { 0 }$.
    ii. Adiabatic collapse, after which we have $P _ { 2 } , V _ { 2 }$, and $T _ { 2 }$.
    iii. Isochoric cooling, to return to the initial state. This implies $V _ { 2 } = V _ { 0 }$.

In all cases the bubble contains an ideal monatomic gas, so

$$
P _ { i } V _ { i } = n R T _ { i } .
$$

We are also given the volumes

$$
V _ { 0 } = \frac { 4 } { 3 } \pi ( 4.50 \mu \mathrm {~m} ) ^ { 3 } = 3.82 \times 10 ^ { - 16 } \mathrm {~m} ^ { 3 } , \quad V _ { 0 } = \frac { 4 } { 3 } \pi ( 36.0 \mu \mathrm {~m} ) ^ { 3 } = 1.95 \times 10 ^ { - 13 } \mathrm {~m} ^ { 3 }
$$

In particular, we have

$$
n = \frac { P _ { 0 } V _ { 0 } } { R T _ { 0 } } = 1.58 \times 10 ^ { - 14 } \mathrm {~mol} .
$$


b. During an isothermal expansion, $P V$ is constant by the ideal gas law. Thus
$$
P _ { 1 } = \frac { P _ { 0 } V _ { 0 } } { V _ { 1 } } = 197 \mathrm {~Pa} .
$$
c. During an adiabatic process, $P V ^ { \gamma }$ is constant where here $\gamma = 5 / 3$, so
$$
P _ { 2 } = \frac { P _ { 1 } V _ { 1 } ^ { \gamma } } { V _ { 2 } ^ { \gamma } } = 6.46 \times 10 ^ { 6 } \mathrm {~Pa} .
$$
d. To find the temperature after collapse, we can use the ideal gas law again,
$$
T _ { 2 } = \frac { P _ { 2 } V _ { 2 } } { n R } = 1.88 \times 10 ^ { 4 } \mathrm {~K} .
$$
e. The work done on the bubble is $d W = - P d V$. During an isothermal expansion, we have
$$
\int P d V = n R T \int \frac { d V } { V } = n R T \log \frac { V _ { f } } { V _ { i } }
$$
so the work done on the bubble during the isothermal expansion is
$$
W _ { 1 } = - n R T \log \frac { V _ { 1 } } { V _ { 0 } } = - 2.40 \times 10 ^ { - 10 } \mathrm {~J} .
$$
During the adiabatic collapse, it is easiest to find the work done on the bubble using the first law of thermodynamics, $\Delta E = Q + W$. Since the process is adiabatic, $Q = 0$, so
$$
W _ { 2 } = \Delta E = n C _ { V } \Delta T = \frac { 3 n R } { 2 } \left( T _ { 2 } - T _ { 1 } \right) = 3.64 \times 10 ^ { - 9 } \mathrm {~J}
$$
where we used the fat that $C _ { V } = 3 R / 2$ for a monatomic gas. There is no work done during the isochoric process, so the total work done on the bubble is
$$
W = 3.40 \times 10 ^ { - 9 } \mathrm {~J} .
$$
Since the process is cyclic, this energy must have been radiated away by the bubble, in a flash of light. Note that the final (positive) sign is important. Some textbooks define $d W$ to be the work done on the bubble, while some define it to be the work done by the bubble. Depending on the conventions used, there may be some extra signs in intermediate steps, but the final answer doesn't depend on the convention.
