---
id: solution-ocr-kevin-zhou-m7sol-ex014
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-ex014]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 14
If you've used a standard garden hose, you might have noticed that the water shoots higher if you partially block the outlet with your finger. Why does this happen?

Solution
The water company provides water to your house at a fixed pressure $P _ { \text {atm } } + \Delta P$. Thus, naively the water should always shoot equally far, because Bernoulli's principle says the exit speed is $v = \sqrt { 2 \Delta P / \rho }$, corresponding to a peak height $\Delta P / \rho g$, independent of the area of the hole. (There is a vena contracta effect, as mentioned in problem 19, but this also doesn't depend on the area.)

The resolution is that for a typical long, thin garden hose, viscous losses dominate. As you'll see in problem 26, a higher mass flow rate leads to a higher drop in pressure. When you partially block the outlet, you're simply decreasing the flow rate, so that viscosity has a smaller effect, allowing the water to get closer to the maximum possible height $\Delta P / \rho g$.

In plumbing, the quantity $\Delta P / \rho g$ is called the "pressure head", and effects like viscosity give rise to "head loss". Unfortunately, for most realistic pipes it is intractable to calculate the head loss, because the water flow is turbulent. Instead, the amount of head loss is parametrized by the so-called Darcy friction factor, whose values are tabulated in references.

Example 15
If you stir a cup of coffee, around how long does it take the rotational motion to settle down?

Solution
The rotational motion stops because of viscous drag against the walls. For concreteness, let's suppose the coffee has density $\rho$, viscosity $\eta$, and is in a mug of radius $R$ and height $H \gg R$ (so most of the drag comes from the vertical wall of the mug). The angular momentum is

$$
L \sim I \omega \sim \rho R ^ { 4 } H \omega .
$$

The damping torque due to viscous forces is

$$
\tau \sim R F \sim \eta A \frac { d v } { d r } R
$$

and since the drag is from the vertical wall, $A \sim H R$. Estimating the velocity gradient $d v / d r$ is a little trickier. As mentioned above, the coffee right next to the wall has zero velocity, while the coffee slightly inward from the wall has speed $v \sim R \omega$. The velocity transitions between these two values in a thin "boundary layer".

Finding the exact thickness of this boundary layer would require solving complicated differential equations, but it suffices to use dimensional analysis. Note that $R$ and $H$ can't possibly play a role, since the layer is so thin it doesn't "see" the shape of the mug. The fluid properties $\eta$ and $\rho$ surely matter. Perhaps more subtly, $\omega$ matters. If the fluid weren't


spinning, but rather were uniformly translating in a plane, then the boundary layer would just grow over time until it was the size of the whole fluid. That's what we saw in problem 26, where the velocity changes gradually along the whole pipe radius $R$. The boundary layer doesn't grow to the whole mug's size here, because the velocity it's trying to match is constantly changing over the timescale $1 / \omega$.

Using dimensional analysis, we thus conclude the boundary layer has thickness

$$
\Delta r \sim \sqrt { \frac { \eta } { \rho \omega } } .
$$

The damping torque is

$$
\tau \sim \eta ( H R ) \frac { R \omega } { \Delta r } R \sim \sqrt { \rho \eta \omega ^ { 3 } } H R ^ { 3 }
$$

so the timescale for damping is

$$
T \sim \frac { L } { \tau } \sim \sqrt { \frac { \rho } { \eta \omega } } R .
$$

Numerically, if we use the rough estimates

$$
\rho \sim 10 ^ { 3 } \mathrm {~kg} / \mathrm { m } ^ { 3 } , \quad \omega \sim 10 \mathrm {~s} ^ { - 1 } , \quad R \sim 0.1 \mathrm {~m} , \quad \eta \sim 10 ^ { - 3 } \mathrm { Pas }
$$

where $\eta$ is the value for room temperature water, then we get the reasonable results

$$
\Delta r \sim 0.3 \mathrm {~mm} , \quad T \sim 30 \mathrm {~s} .
$$
