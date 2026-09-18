---
id: solution-ocr-kevin-zhou-t3sol-p009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t3-p009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 9. Suppose that at pressure $P _ { 0 }$, a liquid-gas phase transition takes place at temperature $T _ { 0 }$. Assume the gas obeys the ideal gas law, and neglect the volume of the liquid.
    (a) Assuming the latent heat is temperature-independent, compute the coexistence curve $P ( T )$.
    (b) In reality, the latent heat has a mild dependence on temperature, changing the results. As a crude model, suppose that the latent heat per molecule for a monatomic liquid-gas phase transition has two components: a fixed energy $E _ { 0 }$ required to break the bonds with other molecules in the liquid, and the $P d V$ work that must be done to "push" the rest of the gas away, since the new gas molecule takes up space. Under these assumptions, what is the latent heat per molecule, and qualitatively how does the dependence $P ( T )$ change?
    (c) A closed container of constant volume contains both liquid and gas in equilibrium, at temperature $T$. Let the latent heat of vaporization per mole be $\mathcal { L }$, and neglect the volume of the liquid. If the temperature is increased by a very small amount $\Delta T$, by what factor does the number of moles in gas form change?

Solution. (a) We have $V _ { 2 } = n R T / P$ and $V _ { 1 }$ can be ignored, so

$$
\frac { d P } { d T } = \frac { L } { n R } \frac { P } { T ^ { 2 } } .
$$

Separating and integrating,

$$
\int _ { P _ { 0 } } ^ { P } \frac { d P } { P } = \int _ { T _ { 0 } } ^ { T } \frac { L } { n R T ^ { 2 } } d T
$$

which gives

$$
P ( T ) = P _ { 0 } e ^ { - \frac { L } { n R } \left( \frac { 1 } { T } - \frac { 1 } { T _ { 0 } } \right) } \propto e ^ { - L / n R T } .
$$


(b) The latent heat per molecule is now
$$
\mathcal { L } = E _ { 0 } + P \Delta V
$$
where $\Delta V$ is the change in volume due to that molecule. But $\Delta V = V / N$, so
$$
\mathcal { L } = E _ { 0 } + \frac { P V } { N } = E _ { 0 } + k _ { B } T .
$$
The total latent heat is $L = N \mathcal { L }$. The Clausius-Clapeyron equation now looks like
$$
\frac { d P } { d T } = \frac { E _ { 0 } } { k _ { B } } \frac { P } { T ^ { 2 } } + \frac { P } { T } .
$$
Separating and integrating gives
$$
\int \frac { d P } { P } = \frac { E _ { 0 } } { k _ { B } } \int \frac { d T } { T ^ { 2 } } + \int \frac { d T } { T }
$$
which gives
$$
P ( T ) = P _ { 0 } \left( \frac { T } { T _ { 0 } } \right) e ^ { - \frac { E _ { 0 } } { k _ { B } } \left( \frac { 1 } { T } - \frac { 1 } { T _ { 0 } } \right) } .
$$
In other words, compared to part (a) where we neglected the $P \Delta V$ contribution, there is now an additional linear temperature dependence.

(c) We apply the Clausius-Clapeyron equation to a small temperature change,
$$
\frac { \Delta P } { \Delta T } \approx \frac { \mathcal { L } } { T \mathcal { V } }
$$
where $\mathcal { L }$ and $\mathcal { V }$ are the latent heat per mole and volume per mole. By the ideal gas, $\mathcal { V } = R T / P$. Then
$$
\frac { \Delta P } { \Delta T } = \frac { \mathcal { L } } { R T ^ { 2 } / P }
$$
which solves to give
$$
\frac { \Delta P } { P } = \frac { \mathcal { L } } { R T } \frac { \Delta T } { T } .
$$
The ideal gas law tells us that $P \propto n T$, which means for small changes,
$$
\frac { \Delta P } { P } \approx \frac { \Delta n } { n } + \frac { \Delta T } { T } .
$$
Combining these results,
$$
\frac { n + \Delta n } { n } = 1 + \frac { \Delta P } { P } - \frac { \Delta T } { T } = 1 + \frac { \Delta T } { T } \left( \frac { \mathcal { L } } { R T } - 1 \right) .
$$
In other words, while the pressure and temperature of the vapor both certainly go up, whether the number of moles goes up or down depends on the specific substance! However, most liquids obey Trouton's rule, $\mathcal { L } \approx 10 R T$, as explained in a remark above, so that $\mathcal { L } / R T - 1$ is positive and the number of moles of gas goes up.

Example 4: APhO 2004.3
A cylinder is divided into two parts by a mobile partition, which is free to move and conducts heat well. One compartment contains one mole of water vapor, and the other contains one mole of nitrogen gas. Initially, both compartments have volume $V _ { 0 }$, pressure 0.5 atm, and temperature 373 K. A piston is then slowly inserted, compressing the system isothermally.
![](../../../figures/solution-ocr/17442bb40ecc681acfbe0c0a.jpg)
Sketch the $P ( V )$ curve.

Solution
The answer is shown below.


![](../../../figures/solution-ocr/24d468cc344ce41f3a9acd85.jpg)
Initially, we just have an ordinary isothermal compression. Both the water vapor and nitrogen gas compartments are compressed at the same rate, since they must have equal pressures and temperatures. When the total volume is halved, the pressure in both reaches one atmosphere. Now, water condenses at temperature 373 K at pressure $p = 1 \mathrm {~atm}$. Thus, as the volume continues to decrease, the pressure stays constant, the nitrogen compartment's volume stays the same, and the water compartment shrinks, as the vapor gradually condenses to liquid. This process completes once all the vapor is condensed, which is roughly when the total volume has halved again. After this point, we again have ordinary isothermal compression, of the nitrogen gas alone.
[3] Problem 10. NBPhO 2016, day 2, problem 2. A problem on phase transitions with data analysis.
[3] Problem 11. USAPhO 2015, problem A4. A heat engine with phase transitions.
In practice, water on Earth is more subtle because there are three substances at play: liquid water, water vapor, and the rest of the atmosphere.

Idea 4: Humidity
Consider a box at constant temperature $T$ containing only water, and let $P ( T )$ be the liquid water-water vapor coexistence curve. In equilibrium, if we apply any pressure below $P ( T )$, all of the water will be in vapor form, and if we apply any pressure above $P ( T )$, all of the water will be in liquid form. Physically, applying a higher pressure forces the water vapor to condense into liquid, as it packs the molecules closer together, and applying a lower pressure forces the liquid to evaporate into vapor, as it cannot hold itself together against the thermal motion of the molecules. Coexistence is impossible, except at exactly the pressure $P ( T )$.

However, in everyday life, the two easily coexist over a wide range of pressures. The subtlety is that the total air pressure has two contributions,

$$
P _ { \mathrm { tot } } = P _ { \mathrm { atm } } + P _ { \mathrm { vap } }
$$

where the first is the pressure due to atmospheric gases, such as nitrogen and oxygen, and the second is the pressure due to water vapor in the air. In everyday conditions, $P _ { \text {atm } }$ is about 100 times larger than $P _ { \text {vap } }$, and the liquid water feels the pressure $P _ { \text {tot } }$. But water vapor evaporates and condenses independently of the air, so $P _ { \text {atm } }$ has no effect on it at all. As a result, in equilibrium liquid water and water vapor can coexist, with the vapor having a pressure


$P _ { \text {vap } } = P ( T )$. The coexistence curve $P ( T )$ is thus also called the (equilibrium) vapor pressure.
The relative humidity $\phi$ is defined as

$$
\phi = P _ { \mathrm { vap } } / P ( T )
$$

and quantifies how saturated the air is with water vapor; under normal atmospheric conditions $\phi < 1$. The dew point $T _ { d }$ satisfies

$$
P \left( T _ { d } \right) = P _ { \mathrm { vap } }
$$

and represents the temperature at which water would begin condensing out of a given parcel of air, cooled at constant pressure. This determines, e.g. the height at which rising air turns into a cloud, which explains why some clouds have flat bottoms.

The boiling temperature $T _ { b }$ satisfies

$$
P \left( T _ { b } \right) = P _ { \mathrm { tot } } .
$$

This is the temperature at which a bubble of pure water vapor, which forms inside the liquid, has a high enough pressure to push the liquid away and continue to expand. Beyond this temperature, liquid water can't exist; it all turns to vapor. When boiling water on the stove, the produced water vapor flies away, so that $P _ { \text {tot } } \approx P _ { \text {atm } }$. In a sealed pressure cooker, the vapor accumulates, increasing $P _ { \text {tot } }$. This increases $T _ { b }$, allowing food to cook faster.

At the interface between two liquids, boiling can start at a significantly lower temperature than the boiling temperature of either liquid, because both of the liquids contribute to the vapor pressure. This is called border boiling, and is treated in IZhO 2020, problem 2.

Example 5
How does alcohol distillation work?

Solution
Let alcohol and water have coexistence curves/equilibrium vapor pressures of $P _ { a } ( T )$ and $P _ { w } ( T )$. The vapor pressure of alcohol is higher, with pure alcohol boiling at about 80° C.

Consider heating a mixture of alcohol and water, with mole fractions $X _ { a }$ and $X _ { w }$, with $X _ { a } + X _ { w } = 1$. If a small bubble of gas forms inside, then Raoult's law states that both alcohol and water vapor will be present, and contribute independently in proportion to their mole fractions. Then the boiling point satisfies

$$
X _ { a } P _ { a } \left( T _ { b } \right) + X _ { w } P _ { w } \left( T _ { b } \right) = P _ { \text {atm } } .
$$

This is between the individual boiling points of alcohol and water. By the ideal gas law, the ratio of mole fractions of alcohol and water in the vapor is the ratio of partial vapor pressures,


so
$$
\frac { X _ { a } ^ { \prime } } { X _ { w } ^ { \prime } } = \frac { X _ { a } } { X _ { w } } \frac { P _ { a } \left( T _ { b } \right) } { P _ { w } \left( T _ { b } \right) } > \frac { X _ { a } ^ { \prime } } { X _ { w } ^ { \prime } }
$$
since $P _ { a } \left( T _ { b } \right) > P _ { w } \left( T _ { b } \right)$.

By the above logic, we could get completely pure alcohol by just repeating the distillation procedure several times. Actually, it's more complicated than that because the alcohol and water molecules will interact, causing Raoult's law to break down; our calculation above only applies for an "ideal mixture". For more about distillation, see these notes.

[3] Problem 12. Kalda Thermodynamics, problem 22. A problem on practically measuring humidity.
Solution. (a) The dry bulb thermometer is just at room temperature, $T _ { 0 } = 20 ^ { \circ } \mathrm { C }$. Meanwhile, the wet bulb thermometer is cooled down by evaporation. In this part, we are neglecting heat conduction, so equilibrium is only reached when evaporation from the wet bulb stops. This occurs when the relative humidity at the wet bulb thermometer itself reaches 100\%.
Let $p _ { s } ( T )$ be the saturation pressure as shown in the graph. The vapor pressure of water vapor in the room is
$$
p _ { a } = r p _ { s } \left( T _ { 0 } \right) = ( 0.9 ) ( 2.3 \mathrm { kPa } ) = 2.07 \mathrm { kPa }
$$
by reading off the graph. The wet bulb temperature $T$ satisfies
$$
p _ { a } = p _ { s } ( T )
$$
and from the graph we read off $T = 18.5 ^ { \circ } \mathrm { C }$. Thus, the difference is $1.5 ^ { \circ } \mathrm { C }$.
    (b) We balance the heat flowing in and out of the wet bulb thermometer,
$$
a \left( T _ { 0 } - T \right) = b \left( p _ { s } ( T ) - p _ { a } \right) .
$$
In this part, $p _ { a }$ is zero, so we have
$$
- 65 \mathrm {~Pa} / \mathrm { K } = \frac { p _ { s } ( T ) } { T - T _ { 0 } } .
$$
Therefore, to find $T$, we draw a line on the graph passing through $p = 0$ and $T = 20 ^ { \circ } \mathrm { C }$ and slope $- 65 \mathrm {~Pa} / \mathrm { K }$. The solution is where this line intersects the curve $p _ { s } ( T )$, giving $6.5 ^ { \circ } \mathrm { C }$.
![](../../../figures/solution-ocr/fe589d69787a31afe2cf7158.jpg)

(c) The temperature we're looking for satisfies
$$
- 65 \mathrm {~Pa} / \mathrm { K } = \frac { p _ { s } ( T ) - r p _ { s } \left( T _ { 0 } \right) } { T - T _ { 0 } } .
$$
The solution will be near $T _ { 0 }$ itself, which means it suffices to approximate $p _ { s } ( T )$ near $T _ { 0 } = 20 ^ { \circ } \mathrm { C }$. By reading off the graph again, we have the linear approximation
$$
p _ { s } ( T ) \approx 2.3 \mathrm { kPa } + \left( T - T _ { 0 } \right) \left( 0.14 \mathrm { kPa } / { } ^ { \circ } \mathrm { C } \right) .
$$
Plugging in and simplifying, we find the temperature difference obeys
$$
\Delta T \approx \left( 11 ^ { \circ } \mathrm { C } \right) ( 1 - r ) .
$$
Any answer within ~ 15\% of this is good enough.
(d) The way evaporation works is that every water molecule on the laundry has some probability per time of jumping off, while every water molecule in the surrounding air has some probability per time for sticking to the laundry. The two processes balance when the humidity is 100\%. Thus, the net rate of evaporation is proportional to $1 - r$, which means the laundry in 80\% humidity dries 4 times faster than in 95\% humidity.

[3] Problem 13. NBPhO 2006, problem 1. (Note that the comma in the density of air in part 4 denotes a decimal point.)

## 3 General Phase Transitions

In this section we'll illustrate some of the ideas needed to analyze phase transitions in general.
Idea 5
A nonideal gas can be described by the van der Waals equation of state,

$$
\left( P + \frac { a n ^ { 2 } } { V ^ { 2 } } \right) ( V - n b ) = n R T .
$$

You derived the pressure correction in T1 assuming weak attractive intermolecular forces; the modification of the volume accounts for the fact that the molecules can't overlap each other. Remarkably, this equation of state also contains a liquid-gas phase transition!

To see this, consider a plot of the isotherms on a PV diagram.


![](../../../figures/solution-ocr/f0b67240f56e061a53f4115b.jpg)
At low temperatures, the isotherms can have negative compressibility, meaning that the pressure decreases as the volume decreases. This is unphysical, and means that the fluid is unstable at these points: if you push on it, it'll just keep shrinking, until it condenses into a dense liquid. Therefore, parts of these isotherms should be replaced with horizontal lines; along these horizontal parts liquid and gas coexist, in varying proportions.

Specifically, everything underneath the dotted line should be replaced with horizontal lines. As described in more detail in section 26.1 of Blundell, this can be shown by demanding that the liquid and gas have equal Gibbs free energy. As a result, the total area on the PV diagram of the isotherm that goes underneath the horizontal line equals the area that goes above it; this is called Maxwell's equal area rule.

There is a critical isotherm marked in bold above. Above this temperature, there is no liquid-gas phase transition at all; instead we just have one phase, called a supercritical fluid. Specifically, this is the temperature of the first isotherm that no longer has a local minimum in pressure, which means

$$
\left( \frac { \partial P } { \partial V } \right) _ { T } = \left( \frac { \partial ^ { 2 } P } { \partial V ^ { 2 } } \right) _ { T } = 0
$$

at the critical temperature $T = T _ { c }$. As you will see in problem 14, this occurs at

$$
V _ { c } = 3 n b , \quad T _ { c } = \frac { 8 a } { 27 R b } , \quad P _ { c } = \frac { a } { 27 b ^ { 2 } } .
$$

This point, marked above, is called the critical point.


Remark
The van der Waals equation of state is accurate for a sparse gas with weak attractive interactions; you shouldn't expect it to be accurate for dense gases or the liquid state. However, it still is extremely important because it is one of the simplest equations of state that gives a liquid-gas phase transition. Moreover, if you zoom in near the critical point and write the pressure, volume, and temperature as multiples of the critical pressures, volumes, and temperatures, it turns out that all equations of state give the same results! This deep phenomenon is called universality, and is explained with the renormalization group.
[3] Problem 14. INPhO 2018, problem 6. A series of exercises on the van der Waals gas. Feel free to look up definitions for part (a).
