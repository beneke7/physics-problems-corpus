---
id: solution-ocr-usapho-2016-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2016-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A4

The flow of heat through a material can be described via the thermal conductivity $\kappa$. If the two faces of a slab of material with thermal conductivity $\kappa$, area $A$, and thickness $d$ are held at temperatures differing by $\Delta T$, the thermal power $P$ transferred through the slab is

$$
P = \frac { \kappa A \Delta T } { d }
$$

A large, flat lake in the upper Midwest has a uniform depth of 5.0 meters of water that is covered by a uniform layer of 1.0 cm of ice. Cold air has moved into the region so that the upper surface of the ice is now maintained at a constant temperature of -10 °C by the cold air (an infinitely large constant temperature heat sink). The bottom of the lake remains at a fixed 4.0 °C because of contact with the earth (an infinitely large constant temperature heat source). It is reasonable to assume that heat flow is only in the vertical direction and that there is no convective motion in the water.

a. Determine the initial rate of change in ice thickness.

## Solution

The main effect is that the ice radiates heat into the air due to the temperature gradient through it, and this freezes the water next to the ice. However, there are many other effects that slightly change the answer.

i. There is another contribution to the thermal power from the temperature gradient in the water.
ii. As the water freezes, it lifts the ice above it.
iii. When a layer of water freezes into ice, all of the other water and ice becomes slightly colder.

The first point should be addressed for full credit. To do this, we will calculate both contributions. The water right at the bottom of the ice is at $0 \mathrm { C } ^ { \circ }$. The temperature gradients in the water and ice are both uniform since the system is in quasi-equilibrium; physically, if the temperature gradient were not uniform, there would be a net flow of heat to or away from some regions, quickly making the gradient uniform again.
The temperature gradient in the water is $4 \mathrm { C } ^ { \circ } / 5 \mathrm {~m}$. Multiplying by the conductivity, we get a power of

$$
P _ { w } = \frac { 4 \mathrm { C } ^ { \circ } } { 5 \mathrm {~m} } \frac { 0.57 \mathrm {~W} } { \mathrm { mC } ^ { \circ } } = 0.456 \mathrm {~W} / \mathrm { m } ^ { 2 }
$$

delivered through the water. The same calculation for the ice gives power

$$
P _ { i } = \frac { 10 \mathrm { C } ^ { \circ } } { .01 \mathrm {~m} } \frac { 2.2 \mathrm {~W} } { \mathrm {~m} \cdot \mathrm { C } ^ { \circ } } = 2200 \mathrm {~W} / \mathrm { m } ^ { 2 }
$$

delivered through the ice. Thus $P _ { w }$ is negligible and can be ignored.
Now, each square meter of water directly underneath the ice loses 2200 J of energy per second. That is enough energy to freeze

$$
2200 \mathrm {~W} / ( 330,000 \mathrm {~J} / \mathrm { kg } ) = 6.7 \times 10 ^ { - 3 } \mathrm {~kg} / \mathrm { s }
$$


of water into ice. Converting to volume, we have

$$
\left( 6.7 \times 10 ^ { - 3 } \mathrm {~kg} / \mathrm { s } \right) / \left( 920 \mathrm {~kg} / \mathrm { m } ^ { 3 } \right) = 7.2 \times 10 ^ { - 6 } \mathrm {~m} ^ { 3 } / \mathrm { s }
$$

of ice formed for each square meter of ice, which means the ice is growing at a rate

$$
r = 7.2 \times 10 ^ { - 6 } \mathrm {~m} / \mathrm { s } = 2.6 \mathrm {~cm} / \mathrm { hr } .
$$

Next, we will account for the second and third points; these are not necessary for full credit. First consider the rising of the water. Each square meter of ice initially weighs 9.2 kg. A power of 2200 W is enough to lift this ice about $24 \mathrm {~m} / \mathrm { s }$ against gravity. In reality, the ice is lifted at a much slower rate, so this accounts for a negligible portion of the energy.
The third point requires some more explanation. In an appropriate coordinate system, the temperature profile of the ice is

$$
T ( x , d ) = \left( 1 - \frac { x } { d } \right) \delta T , \quad x \in [ 0 , d ]
$$

where $d$ is the thickness and $\delta T = - 10 \mathrm { C } ^ { \circ }$. As the thickness $d$ increases, all of the ice must decrease slightly in temperature to maintain a linear temperature gradient,

$$
\frac { \partial T } { \partial d } = \frac { x } { d ^ { 2 } } \delta T .
$$

By drawing a graph, one can see this contribution is equal to the heat that would be needed to cool the new ice formed by 5 C°, which gives a 3\% correction to the answer. There is also a similar contribution from cooling the water, which is negligible. Finally, we neglected the sublimation of the ice.

b. Assuming the air stays at the same temperature for a long time, find the equilibrium thickness of the ice.

## Solution

This part is independent of the previous part. For convenience, define $h _ { 0 }$ to be the depth of the lake if all the water were in liquid form. Accounting for the centimeter of ice, $h _ { 0 } = 5.01$ m to the number of significant digits we're using.

The ice will stop getting thicker when the energy flux through the water equals that through the ice,

$$
\frac { \Delta T _ { w } } { h _ { w } } \kappa _ { w } = \frac { \Delta T _ { i } } { h _ { i } } \kappa _ { i } .
$$

Since the thickness of the water is $h _ { w }$, the amount of water that has frozen into ice had a thickness of $h _ { 0 } - h _ { w }$. Setting the mass of water frozen equal to the mass of the ice,

$$
h _ { i } \rho _ { i } = \left( h _ { 0 } - h _ { w } \right) \rho _ { w } \quad \Rightarrow \quad h _ { w } = \frac { h _ { 0 } \rho _ { w } - h _ { i } \rho _ { i } } { \rho _ { w } } .
$$


Plugging this into the previous expression gives

$$
\frac { \Delta T _ { w } \kappa _ { w } \rho _ { w } } { h _ { 0 } \rho _ { w } - h _ { i } \rho _ { i } } = \frac { \Delta T _ { i } \kappa _ { i } } { h _ { i } } .
$$

Solving for $h _ { i }$ and plugging in numbers,

$$
h _ { i } = h _ { 0 } \frac { \Delta T _ { i } \kappa _ { i } \rho _ { w } } { \Delta T _ { w } \kappa _ { w } \rho _ { w } + \Delta T _ { i } \kappa _ { i } \rho _ { i } } = 4.89 \mathrm {~m} .
$$

c. Explain why convective motion can be ignored in the water.

## Solution

Convection occurs when boiling a pot of water because the hot water at the bottom of the pot has lower density than the colder water higher up. This means gravitational energy can be released when that hot, low-density water rises and cold, high-density water falls. When the hot water rises, it releases heat, cools, gets denser, and falls back down again, in a convection cycle. This phenomenon relies on the hotter water having lower density.
However, water reaches its maximum density at $4 \mathrm { C } ^ { \circ }$, so the water at the bottom of the lake, though warmer, is more dense than the water above it. Convection does not occur because moving the water around vertically would not release any gravitational potential energy.

Some important quantities for this problem:

| Specific heat capacity of water | $C _ { \text {water } }$ | $4200 \mathrm {~J} / \left( \mathrm { kg } \cdot \mathrm { C } ^ { \circ } \right)$ |
| :--- | :--- | :--- |
| Specific heat capacity of ice | $C _ { \text {ice } }$ | $2100 \mathrm {~J} / \left( \mathrm { kg } \cdot \mathrm { C } ^ { \circ } \right)$ |
| Thermal conductivity of water | $\kappa _ { \text {water } }$ | 0.57 W/(m • C°) |
| Thermal conductivity of ice | $\kappa _ { \text {ice } }$ | $2.2 \mathrm {~W} / \left( \mathrm { m } \cdot \mathrm { C } ^ { \circ } \right)$ |
| Latent heat of fusion for water | $L _ { \mathrm { f } }$ | $330,000 \mathrm {~J} / \mathrm { kg }$ |
| Density of water | $\rho _ { \text {water } }$ | $999 \mathrm {~kg} / \mathrm { m } ^ { 3 }$ |
| Density of ice | $\rho _ { \text {ice } }$ | $920 \mathrm {~kg} / \mathrm { m } ^ { 3 }$ |


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
