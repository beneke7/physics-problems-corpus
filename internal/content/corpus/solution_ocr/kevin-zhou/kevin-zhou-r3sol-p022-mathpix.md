---
id: solution-ocr-kevin-zhou-r3sol-p022
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r3-p022]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[5] Problem 22. In this problem, we give one of the classic justifications for gravitational redshift, the fact that photons redshift when moving against a gravitational field. Suppose that point $B$ is a height $H$ above point $A$, in a gravitational field $g$. A set of electrons and positrons with total rest mass $M$ are converted into photons of frequency $f$ at $A$. The photons fly upward to $B$, where they are converted back into electrons and positrons. Assume throughout that $g$ is small.
    (a) Find the total mass $M ^ { \prime }$ at $B$, and thus the frequency $f ^ { \prime }$ of the photons measured at $B$.

Let's explore some consequences of the result of part (a).


(b) Since the frequencies of photons can be used as a clock, the fact that $f \neq f ^ { \prime }$ implies that the gravitational potential causes time dilation. Show that times are dilated by a factor of $1 + \phi / c ^ { 2 }$, where $\phi$ is the gravitational potential and $\phi / c ^ { 2 } \ll 1$.
(c) Suppose a photon bounces between the top and bottom walls of a vertical box, of height $H$. If the photon has energy $E$ at the bottom of the box, what is the time-averaged contribution of the photon to the weight of the box?
(d) We can also derive the frequency shift using the equivalence principle. To confirm this, suppose that two observers $C$ and $D$ begin at rest, with $D$ a distance $H$ to the right of $C$. At a certain moment, both observers begin accelerating to the right with a small acceleration $a$. If $C$ emits light of frequency $f$ (in $C$ 's rest frame), show that $D$ observes light of frequency $f ^ { \prime }$.

The predicted frequency shift was observed in the 1959 Pound-Rebka experiment, where gamma rays were transmitted from the top to the bottom of a tower.

(e) The tower's height was 22.5 m. What was the fractional change in energy of the photons?
(f) The gamma ray had energy 14 keV. According to the energy-time uncertainty principle, what is the minimum time needed to detect the effect?

Using your gravitational redshift results, it can be shown that a vertical system (such as an ideal gas) in thermal equilibrium does not have uniform temperature. The argument starts as follows: we put a box of photons into the system and let it come to thermal equilibrium with the gas, at temperature $T$. We then consider moving the box upward.

(g) By filling in the rest of this argument, find an expression for $d T / d z$. This is called the Tolman temperature gradient. How important is this effect for the problems in T1?

Solution. (a) By conservation of energy,

$$
M c ^ { 2 } = M ^ { \prime } c ^ { 2 } + M ^ { \prime } g H
$$

from which we conclude, using the fact that $g$ is small, that

$$
M ^ { \prime } = M \left( 1 - \frac { g H } { c ^ { 2 } } \right) .
$$

Each photon has its energy reduced by a factor of $1 - g H / c ^ { 2 }$, and since $E = h f$,

$$
f ^ { \prime } = f \left( 1 - \frac { g H } { c ^ { 2 } } \right) .
$$

(b) If we measure time through the frequency of light, then
$$
\Delta t ^ { \prime } = \Delta t \left( 1 + \frac { g H } { c ^ { 2 } } \right)
$$
again to lowest order in $g$. This is the desired result, since $\phi = g H$. It implies that higher clocks tick faster.

(c) This is related to one of the questions in R2, though it's a lot simpler because we're working in the frame of the box. In the presence of a gravitational field, the photon has a different momentum at the bottom and the top of the box,
$$
p = \frac { E } { c } , \quad p ^ { \prime } = \frac { E } { c } \left( 1 - \frac { g H } { c ^ { 2 } } \right) .
$$
In each round trip, the photon exerts an impulse $J = 2 p - 2 p ^ { \prime }$ on the box, giving a timeaveraged force
$$
F = \frac { J } { 2 H / c } = \frac { \left( p - p ^ { \prime } \right) c } { H } = \frac { E } { c ^ { 2 } } g .
$$
In other words, the photon contributes $\Delta m = E / c ^ { 2 }$ to the "gravitational" mass of the box, i.e. the quantity that determines its weight. But in a related question in R2, we found that the photon contributes $\Delta m = E / c ^ { 2 }$ to the "inertial" mass of the box, i.e. the quantity that determines its momentum for a given speed. The fact that the gravitational and inertial masses are equal in this case is an example of the equivalence principle.
(d) Since the acceleration is small, it takes about a time $H / c$ for the light to arrive at $D$. By this time, $D$ has picked up a velocity $a H / c$, so by the Doppler shift,
$$
f ^ { \prime } = f \sqrt { \frac { 1 - a H / c ^ { 2 } } { 1 + a H / c ^ { 2 } } } \approx f \left( 1 - \frac { a H } { c ^ { 2 } } \right)
$$
where we again work to lowest order in $a$.
(e) Plugging in the numbers, $g H / c ^ { 2 } = 2.5 \times 10 ^ { - 15 }$.
(f) The change in energy is $\Delta E = h \Delta f$, and the uncertainty principle says we need time
$$
\Delta t \gtrsim \frac { h } { \Delta E } \sim \frac { h } { \left( 2.5 \times 10 ^ { - 15 } \right) ( 14 \mathrm { keV } ) } = 10 ^ { - 4 } \mathrm {~s} .
$$
In the real experiment, Pound and Rebka used two identical samples of iron as the emitter and receiver, and vibrated one of them vertically at a few tens of Hz. Whenever the relative velocity was just enough to cancel out the gravitational redshift effect, absorption occurred. Since the $\Delta t$ required was substantially lower than the period of the vibration, the vibration didn't mess up the experiment.
(g) Consider moving the box of photons up a distance $d z$. Because of gravitational redshift, the photon energies are multiplied by $\left( 1 - g d z / c ^ { 2 } \right)$, so the temperature of the box is multiplied by the same factor. But the photons must still be in thermal equilibrium with the gas around it (or else we could run a perpetual motion machine from the temperature difference), so
$$
T + d T = \left( 1 - g d z / c ^ { 2 } \right) T
$$
from which we conclude that
$$
\frac { d T } { d z } = - \frac { g T } { c ^ { 2 } } .
$$
Moreover, this applies to any system, not just a gas. This argument won first place in the 2018 Gravity Research Foundation essay competition, along with a big cash prize.

In Earth's atmosphere, this temperature gradient is of order $10 ^ { - 13 } \mathrm {~K} / \mathrm { m }$, and therefore completely negligible. On the other hand, for the cosmic microwave background, the redshifting of photon temperature can accumulate over the entire history of the universe. That's called the Sachs-Wolfe effect, and it must be accounted for in cosmological studies.
