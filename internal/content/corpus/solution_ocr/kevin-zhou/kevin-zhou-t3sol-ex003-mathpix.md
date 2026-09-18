---
id: solution-ocr-kevin-zhou-t3sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t3-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 3

Fill a dish with water, and sprinkle something small over it, such as ground pepper. If you place a drop of detergent in the middle of the dish, then the pepper will "flee" away to the edges. Why does this happen?

## Solution

Detergent is a surfactant, meaning that it decreases the surface tension of water. When one places the detergent in the middle of the dish, it diffuses outward, making the surface tension temporarily higher near edges of the dish. This leads to an unbalanced surface tension force on the pepper grains, pulling them to the edges.


This phenomenon is called the Marangoni effect. Of course, the force vanishes once the detergent becomes uniformly distributed, and the surface tension is uniform again.

Remark
Here's a neat fact: the number of atoms that fit into a drop of water is comparable to the number of drops of water that fit inside the tallest mountains. We can show this using rough estimates, in the style of P1. Let $E _ { b }$ be the energy of a typical chemical bond, let $m$ be the mass of an atom, and let $d$ be the typical distance between atoms.

The size $\ell$ of a droplet of water, such as one that drips from a leaky ceiling, is the size where surface tension forces balance gravitational ones. By dimensional analysis, we must have

$$
\ell \sim \sqrt { \gamma / \rho g }
$$

as we showed in M7. Now, $\rho \sim m / d ^ { 3 }$, and the logic of problem 1 implies $\gamma \sim E _ { b } / d ^ { 2 }$, so

$$
\ell \sim \sqrt { E _ { b } d / m g . }
$$

Now consider the height $H$ of the tallest mountains. The height of mountains is limited by the rigidity of rock; if the pressure is too great, then the rock underneath the mountain will deform, causing it to sink into the ground. Let's consider an atom-thick column of this rock. If it sunk down by a distance $d$, then the gravitational potential energy harvested would be $m g H$. However, the atom at the bottom would have to break its chemical bonds with its horizontal neighbors, which takes energy $E _ { b }$. Balancing these gives a maximum height

$$
H \sim E _ { b } / m g .
$$

We have therefore shown that

$$
\ell \sim \sqrt { H d }
$$

which implies the original statement, within a few orders of magnitude.

## 2 Melting, Freezing, Boiling, Evaporation, and Condensation

Idea 3
A phase transition is a sudden, dramatic change in a system as thermodynamic variables such as the temperature are varied. Most of the ones you'll see have a latent heat

$$
Q = m L .
$$

For example, if ice is heated up, its temperature will gradually increase until it hits 0 °C. At that point, the temperature will remain constant until all of the ice is melted, i.e. when the full latent heat has been supplied.


Remark
We can roughly estimate the latent heats of melting and evaporation. In general, the latent heat can go into either in breaking molecular bonds, or increasing the entropy.

When a solid melts into a liquid, the molecules stay right next to each other, so changing bond energy isn't the dominant effect. Instead, it's the increase in entropy as the liquid molecules become free to move and rotate. Let's suppose that the molecules, each of mass $m _ { \text {mol } }$, each gain a few extra possible quantum states. This corresponds to an entropy increase per molecule $\Delta S \sim k _ { B }$, which means a latent heat per mass of

$$
L = \frac { T \Delta S } { m _ { \mathrm { mol } } } \sim \frac { k _ { B } T } { m _ { \mathrm { mol } } } = \frac { R T } { \mu }
$$

where $\mu$ is the molar mass, or equivalently a latent heat per mole $\mathcal { L } \sim R T$. For water, we get $L \sim 10 ^ { 5 } \mathrm {~J} / \mathrm { kg }$, which is of the same order of magnitude as the true value $3.3 \times 10 ^ { 5 } \mathrm {~J} / \mathrm { kg }$.

When a liquid becomes a gas, the dominant effect is typically the huge increase in entropy $k _ { B } \log \left( V _ { \text {gas } } / V _ { \text {liq } } \right)$ per molecule because they get much more space to move. The ratio inside the logarithm is huge, which means that while the volumes per molecule $V _ { \text {gas } }$ and $V _ { \text {liq } }$ vary by order-one amounts between phase transitions, the logarithm of their ratio is always around the same value, which turns out to be about 10. This gives a latent heat per mass of

$$
L \sim \frac { 10 k _ { B } T } { m _ { \mathrm { mol } } } = \frac { 10 R T } { \mu } .
$$

This result is called Trouton's rule, and it is surprisingly accurate for most liquids. However, the latent heat of vaporization for water is noticeably higher, $L = 2.26 \times 10 ^ { 6 } \mathrm {~J} / \mathrm { kg }$. This is because of the extra energy needed to break hydrogen bonds.
