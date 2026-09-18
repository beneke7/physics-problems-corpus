---
id: solution-ocr-usapho-2015-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2015-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A4

A heat engine consists of a moveable piston in a vertical cylinder. The piston is held in place by a removable weight placed on top of the piston, but piston stops prevent the piston from sinking below a certain point. The mass of the piston is $m = 40.0 \mathrm {~kg}$, the cross sectional area of the piston is $A = 100 \mathrm {~cm} ^ { 2 }$, and the weight placed on the piston has a mass of $m = 120.0 \mathrm {~kg}$.

Assume that the region around the cylinder and piston is a vacuum, so you don't need to worry about external atmospheric pressure.

- At point A the cylinder volume $V _ { 0 }$ is completely filled with liquid water at a temperature $T _ { 0 } = 320 \mathrm {~K}$ and a pressure $P _ { \min }$ that would be just sufficient to lift the piston alone, except the piston has the additional weight placed on top.
- Heat energy is added to the water by placing the entire cylinder in a hot bath.
- At point B the piston and weight begins to rise.
- At point C the volume of the cylinder reaches $V _ { \text {max } }$ and the temperature reaches 400 K . The heat source is removed; the piston stops rising and is locked in place.
- Heat energy is now removed from the water by placing the entire cylinder in a cold bath.
- At point D the pressure in the cylinder returns to $P _ { \text {min } }$. The added weight is removed; the piston is unlocked and begins to move down.
- The cylinder volume returns to $V _ { 0 }$. The cylinder is removed from the cold bath, the weight is placed back on top of the piston, and the cycle repeats.

Because the liquid water can change to gas, there are several important events that take place

- At point $\mathbf { W }$ the liquid begins changing to gas.
- At point X all of the liquid has changed to gas. This may not occur the same as point C described above.
- At point Y the gas begins to change back into liquid.
- At point Z all of the gas has changed back into liquid.

When in the liquid state you need to know that for water kept at constant volume, a change in temperature $\Delta T$ is related to a change in pressure $\Delta P$ according to

$$
\Delta P \approx \left( 10 ^ { 6 } \mathrm {~Pa} / \mathrm { K } \right) \Delta T
$$

When in the gas state you should assume that water behaves like an ideal gas.


Of relevance to this question is the pressure/temperature phase plot for water, showing the regions where water exists in liquid form or gaseous form. The curve shows the coexistence condition, where water can exist simultaneously as gas or liquid.
![](../../../figures/solution-ocr/9a28b52c6c2da5122a8cbea5.jpg)

The following graphs should be drawn on the answer sheet provided.

## Solution

Before we get started solving the problem, let's say a bit about where the data in the problem comes from. We are using the Magnus form to approximate the coexistence curve,

$$
P = ( 610.94 \mathrm {~Pa} ) e ^ { 17.625 / ( 1 + 243.04 / T ) }
$$

where $T$ is measured in centigrade. This is closely related to the result that can be derived from the Clausius-Clapeyron equation for ideal gases,

$$
P = P _ { 0 } e ^ { \frac { L } { R } \left( \frac { T - T _ { 0 } } { T T _ { 0 } } \right) }
$$

where we assume the temperature is low compared to the critical temperature and the latent heat $L$ is a constant.

To get $\Delta P / \Delta T$, we used the cyclic chain rule

$$
\left( \frac { \partial P } { \partial T } \right) _ { V } \left( \frac { \partial V } { \partial P } \right) _ { T } \left( \frac { \partial T } { \partial V } \right) _ { P } = - 1
$$

where subscripts indicate what is being held constant. Dropping those for convenience,

$$
\frac { \partial P } { \partial T } = \left( - V \frac { \partial P } { \partial V } \right) \left( \frac { 1 } { V } \frac { \partial V } { \partial T } \right) = \frac { \beta _ { V T } } { \beta _ { P V } } \approx \frac { \left( 6 \times 10 ^ { - 4 } \mathrm {~K} ^ { - 1 } \right) } { \left( 5 \times 10 ^ { - 10 } \mathrm {~Pa} ^ { - 1 } \right) } \approx 10 ^ { 6 } \mathrm {~Pa} / \mathrm { K } .
$$

The specific value is not important; the point is that a very small change in the temperature of the liquid in a fixed volume will result in a very large change in the pressure.


a. Sketch a PT diagram for this cycle on the answer sheet. The coexistence curve for the liquid/gas state is shown. Clearly and accurately label the locations of points B through D and $\mathbf { W }$ through $\mathbf { Z }$ on this cycle.
b. Sketch a PV diagram for this cycle on the answer sheet. You should estimate a reasonable value for $V _ { \text {max } }$, note the scale is logarithmic. Clearly and accurately label the locations of points B through D on this cycle. Provide reasonable approximate locations for points W through $\mathbf { Z }$ on this cycle.

## Solution

The correct graphs are shown below.
![](../../../figures/solution-ocr/87093d1fb428bb73afe9f426.jpg)


![](../../../figures/solution-ocr/33468ef4d6b023ed279d30a4.jpg)

We start by computing pressures. The minimum pressure is attained when only the piston is to be lifted, so

$$
P _ { \min } = \frac { F } { A } = \frac { m g } { A } = \frac { ( 40 \mathrm {~kg} ) \left( 10 \mathrm {~m} / \mathrm { s } ^ { 2 } \right) } { \left( 0.01 \mathrm {~m} ^ { 2 } \right) } = 40 \mathrm { kPa } .
$$

The maximum pressure is attained when lifting the piston with extra weight,

$$
P _ { \max } = \frac { F } { A } = \frac { m g } { A } = \frac { ( 160 \mathrm {~kg} ) \left( 10 \mathrm {~m} / \mathrm { s } ^ { 2 } \right) } { \left( 0.01 \mathrm {~m} ^ { 2 } \right) } = 160 \mathrm { kPa } .
$$

Point A is clearly at $\left( P _ { \min } , T _ { 0 } \right)$ on the PT graph.
For liquid water a small temperature increase results in a large pressure increase, so point B is effectively at the same temperature as point A. Process A → B is therefore essentially isothermal, and it is also a constant volume process.

Afterwards, the pressure is sufficient to lift the piston and weight, so the volume expands at constant pressure for the process $\mathrm { B } \rightarrow \mathrm { C }$. However, liquid cannot change to gas until we reach the coexistence curve. This defines the location of point W . On the PT graph we are "stuck" on the coexistence curve until all the liquid has changed into gas, so X and C are also at the same point.

Upon reaching C the piston is locked in place, fixing the volume, and the cylinder is allowed to cool. To figure out what happens, suppose water vapor obeyed the ideal gas law $P V = n R T$. For a constant volume process, $T \propto P$, so the path would be a straight line towards the origin of the $P T$ diagram. This isn't what happens here, because we run into the coexistence curve, and the pressure is decreased by some of the gas condensing to liquid. Thus during the entire C → D process, we follow the coexistence curve downward; it is impossible to cross it until all of the vapor condenses.

The next process C → D is constant volume, but not isothermal. On the PT graph we follow the coexistence curve to the minimum pressure, at which time the piston is freed and allowed to


lower at constant pressure. Since Z is the point where all of the gas has changed to liquid, it must be on the coexistence curve. On the PV diagram it is just to the right of point A.

There are a few numbers needed on the PV diagram that are not given in the problem. You should know from everyday experience that liquid water will only expand slightly when heated over this temperature range, so point W must be very close to B on the PV diagram. You might also know that the density of liquid water is about 2, 000 times the density of water vapor in these conditions. In terms of grading policy, the points C, X, Y, and D may have volumes in the range $\left[ 1000 V _ { 0 } , 5000 V _ { 0 } \right]$ on the PV diagram for full credit, while points W and Z may have volumes in the range $\left[ V _ { 0 } , 2 V _ { 0 } \right]$ for full credit and $\left[ 2 V _ { 0 } , 5 V _ { 0 } \right]$ for partial credit.


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
