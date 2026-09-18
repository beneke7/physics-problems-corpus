---
id: solution-ocr-usapho-2014-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2014-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A2

A room air conditioner is modeled as a heat engine run in reverse: an amount of heat $Q _ { L }$ is absorbed from the room at a temperature $T _ { L }$ into cooling coils containing a working gas; this gas is compressed adiabatically to a temperature $T _ { H }$; the gas is compressed isothermally in a coil outside the house, giving off an amount of heat $Q _ { H }$; the gas expands adiabatically back to a temperature $T _ { L }$; and the cycle repeats. An amount of energy $W$ is input into the system every cycle through an electric pump. This model describes the air conditioner with the best possible efficiency.
![](../../../figures/solution-ocr/5a4c003e5690f268cb9be6c9.jpg)

Assume that the outside air temperature is $T _ { H }$ and the inside air temperature is $T _ { L }$. The air-conditioner unit consumes electric power $P$. Assume that the air is sufficiently dry so that no condensation of water occurs in the cooling coils of the air conditioner. Water boils at 373 K and freezes at 273 K at normal atmospheric pressure.

a. Derive an expression for the maximum rate at which heat is removed from the room in terms of the air temperatures $T _ { H } , T _ { L }$, and the power consumed by the air conditioner $P$. Your derivation must refer to the entropy changes that occur in a Carnot cycle in order to receive full marks for this part.

## Solution


The optimal performance is attained by a Carnot cycle running in reverse. Since a Carnot cycle is reversible, it keeps the total entropy of the heat reservoirs constant. The change in entropy for a reservoir of temperature $T$ absorbing heat $Q$ is $\Delta S = Q / T$, so

$$
\frac { Q _ { H } } { T _ { H } } = \frac { Q _ { L } } { T _ { L } } .
$$

Energy conservation states $Q _ { H } = Q _ { L } + W$. Eliminating $Q _ { H }$ and solving for $Q _ { L }$,

$$
Q _ { L } = W \left( \frac { T _ { L } } { T _ { H } - T _ { L } } \right) .
$$

Finally, the rate of heat removal is $Q _ { L } / t$, so dividing both sides by $t$,

$$
\frac { Q _ { L } } { t } = P \left( \frac { T _ { L } } { T _ { H } - T _ { L } } \right) .
$$

b. The room is insulated, but heat still passes into the room at a rate $R = k \Delta T$, where $\Delta T$ is the temperature difference between the inside and the outside of the room and $k$ is a constant. Find the coldest possible temperature of the room in terms of $T _ { H } , k$, and $P$.

## Solution

We equate $k \Delta T$ with the cooling rate $Q _ { L } / t$ found in the previous section. Writing the equation in terms of $T _ { H }$ and $\Delta T = T _ { H } - T _ { L }$,

$$
k \Delta T = P \frac { T _ { L } } { \Delta T } = P \frac { T _ { H } - \Delta T } { \Delta T } .
$$

Rearranging, we have

$$
( \Delta T ) ^ { 2 } = \frac { P } { k } \left( T _ { H } - \Delta T \right)
$$

which is a quadratic in $\Delta T$. Letting $x = P / k$, we have

$$
\Delta T = \frac { x } { 2 } \left( - 1 \pm \sqrt { 1 + 4 T _ { H } / x } \right)
$$

but only the positive root has physical significance. Therefore,

$$
T _ { L } = T _ { H } - \frac { x } { 2 } \left( \sqrt { 1 + 4 T _ { H } / x } - 1 \right) .
$$

c. A typical room has a value of $k = 173 \mathrm {~W} / { } ^ { \circ } \mathrm { C }$. If the outside temperature is 40°C, what minimum power should the air conditioner have to get the inside temperature down to 25°C?


## Solution

From our work above,

$$
P = \frac { k ( \Delta T ) ^ { 2 } } { T _ { L } } = 130 \mathrm {~W} .
$$

A common mistake is to forget to convert Celsius to Kelvin.
